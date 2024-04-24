const fs = require('fs');
const sassdoc = require('sassdoc');
const sass = require('sass');

const DOCS_SOURCE_PATH = './src/**/*.scss';
const DOCS_OUTPUT_PATH = './docs/site/data.js';
const SCSS_SOURCE_PATH = './docs/site/styles.scss';
const SCSS_OUTPUT_PATH = './docs/site/styles.css';
// SASSDOC

function formatDefaultValue(inputString) {
    // remove intendation
    const lines = inputString.split('\n');
    let indentLevel = 0;
    const indentSize = 4;
    const fixedLines = [];

    lines.forEach(line => {
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith(')')) {
            indentLevel = Math.max(0, indentLevel - 1);
        }

        const fixedLine = ' '.repeat(indentLevel * indentSize) + trimmedLine;
        fixedLines.push(fixedLine);

        if (trimmedLine.endsWith('(') || trimmedLine.endsWith(': (')) {
            indentLevel++;
        }
    });

    let str = fixedLines.join('\n');

    // remove trailing commas
    str = str.replace(/,(\s*\)?\s*)$/, '$1');

    // remove extra closing parenthesis
    str = str.replace(/(\s*\)\s*){2,}$/, '\n)');

    // remove beginning / end empty lines
    str = str.replace(/^\s*\n|\n\s*$/g, '');

    return str;
}

function parseConfigString(configString) {
    const lines = configString.split('\n');
    const result = [];
    let currentDescription = '';
    let buffer = '';
    let accumulatingDescription = false;

    lines.forEach((line, index) => {
        const commentMatch = line.match(/\/\/\/\s*(.*)/);
        if (commentMatch) {
            if (accumulatingDescription) {
                currentDescription += ' ' + commentMatch[1]; // Append with a space for readability
            } else {
                currentDescription = commentMatch[1];
                accumulatingDescription = true;
            }
        } else {
            if (accumulatingDescription) {
                if (buffer) {
                    const keyValueMatch = buffer.match(/'([^']+)'[\s]*:[\s]*(.*),?/s);
                    if (keyValueMatch) {
                        const key = keyValueMatch[1];
                        const value = keyValueMatch[2].trim();
                        result.push({ key, value, description: currentDescription });
                    }
                    buffer = '';
                }
                accumulatingDescription = false;
            }
            buffer += line + '\n';
        }
    });

    if (buffer && currentDescription) {
        const keyValueMatch = buffer.match(/'([^']+)'[\s]*:[\s]*(.*),?/s);
        if (keyValueMatch) {
            const key = keyValueMatch[1];
            const value = keyValueMatch[2].trim();
            result.push({ key, value, description: currentDescription });
        }
    }

    return result;
}

sassdoc.parse(DOCS_SOURCE_PATH, { verbose: true }).then(data => {
    let config = [];
    let api = [];

    const docs = {};

    data.forEach(item => {
        // config

        if (item.type == 'config') {
            const code = item.context.value || '';
            const configValues = code ? parseConfigString(code) : [];

            const findConfig = key => configValues.find(config => config.key === key);

            (configValues || []).forEach(val => {
                config.push({
                    group: item.group?.length ? item.group[0] : 'config',
                    key: val.key,
                    description: val.description,
                    default: formatDefaultValue(val.value),
                });
            });
        } else {
            if (item.context.type == 'function' || item.context.type == 'mixin') {
                const apiItem = {
                    group: item.group?.length ? item.group[0] : 'config',
                    type: [item.context.type],
                    name: item.context.name,
                    description: (item.description || '').replace(/^\s*\n|\n\s*$/g, ''),
                    example: item.example,
                    parameters: (item.parameter || []).map(param => {
                        //return param;
                        return {
                            name: param.name,
                            type: param.type,
                            default: param.default,
                            description: (param.description || '').replace(/^\s*\n|\n\s*$/g, ''),
                        };
                    }),
                };

                api.push(apiItem);
            }
        }
    });

    // merge functions and mixins with the same name
    api = api.reduce((acc, item) => {
        const existingItem = acc.find(existingItem => existingItem.name === item.name);
        if (existingItem) {
            existingItem.description = existingItem.description || item.description;
            existingItem.parameters = [
                ...(existingItem.parameters || []),
                ...(item.parameters || []),
            ];
            existingItem.example = [...(existingItem.example || []), ...(item.example || [])];
            existingItem.type = ['function', 'mixin'];
            existingItem.merged = true;

            //existingItem.type = 'function & mixin';
            //existingItem.parameters = [...existingItem.parameters, ...item.parameters];
        } else {
            acc.push(item);
        }

        return acc;
    }, []);

    const groupOrder = ['utils', 'site', 'modules'];

    docs.groups = [
        ...new Set([
            ...new Set(api.map(item => item.group)),
            ...new Set(config.map(item => item.group)),
        ]),
    ]
        .sort((a, b) => {
            let aGroup = a;
            let bGroup = b;

            if (a.indexOf('.') > -1 && b.indexOf('.') > -1) {
                [aGroup, a] = a.split('.');
                [bGroup, b] = b.split('.');

                if (aGroup !== bGroup) {
                    return groupOrder.indexOf(aGroup) - groupOrder.indexOf(bGroup);
                }
            }

            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        })

        .map(group => {
            return {
                name: group,
                items: api.filter(item => item.group === group),
                config: config.filter(item => item.group === group),
            };
        });

    docs.api = [...new Set(api.map(item => item.group)), ,].map(group => {
        return {
            name: group,
            api: api.filter(item => item.group === group),
        };
    });

    docs.config = config;

    fs.writeFileSync(DOCS_OUTPUT_PATH, `window.pxstyles = ${JSON.stringify(docs, null, 4)};`);

    console.log('DONE!');
});

// SASS

const sassResult = sass.compile(SCSS_SOURCE_PATH);

if (sassResult.css) {
    fs.writeFileSync(SCSS_OUTPUT_PATH, sassResult.css.toString());
}
// sass.render(
//     {
//         file: SCSS_SOURCE_PATH,
//     },
//     function (err, result) {
//         if (err) {
//             console.error(err);
//             return;
//         } else {
//             console.log(result.css.toString());
//             //fs.writeFileSync(SCSS_OUTPUT_PATH, result);
//         }
//     }
// );
