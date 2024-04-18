const fs = require('fs');
const sassdoc = require('sassdoc');

const SOURCE_PATH = './src/**/*.scss';

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

sassdoc.parse(SOURCE_PATH, { verbose: true }).then(data => {
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

    docs.groups = [
        ...new Set([
            ...new Set(api.map(item => item.group)),
            ...new Set(config.map(item => item.group)),
        ]),
    ]
        .sort((a, b) => {
            if (a.group < b.group) {
                return -1;
            }
            if (a.group > b.group) {
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

    fs.writeFileSync('./docs/docs.js', `window.pxstyles = ${JSON.stringify(docs, null, 4)};`);

    console.log('DONE!');
});
