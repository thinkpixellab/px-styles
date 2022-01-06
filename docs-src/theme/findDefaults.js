// parses a complex mixin and collects all @include default(...) statements that are preceded by a
// three line comment into an easy to use data structure

const unindent = require('./unindent.js');

// remove extra lines at the beginning of a string
function removeLeadingBlankLines(str) {
    let lines = str.split('\n');
    let clean = [];
    let start = true;

    lines.forEach(l => {
        if (!!l.trim() || !start) {
            clean.push(l);
            start = false;
        }
    });

    return clean.join('\n');
}

module.exports = function (str) {
    let defaults = [];

    const defaultFinderRegEx = /(.*)\/{3}(.|\n)+?(@include\s+?default\((.|\n)+?\)\s*;)/g;
    str.match(defaultFinderRegEx).forEach(item => {
        // extract and remove triple comments as the description
        let description = '';
        let code = item.replace(/\s*\/{3}.*/g, line => {
            line = line.replace(/\s*\/{3}/g, '');
            description += line + '\n';
            return '';
        });
        description = unindent(description);

        // remove comments in the code
        code = code.replace(/\s*\/{2}.*\n/g, '\n');

        // extract the name and value
        const nameValueRegEx = /default\(\s*((.|\n)*?)\s*,((.|\n)*?)\s*\);/g;
        const matches = nameValueRegEx.exec(code);
        const name = matches[1];
        const value = unindent(removeLeadingBlankLines(matches[3]));

        defaults.push({
            name: name,
            value: value,
            description: description,
        });
    });

    return defaults;
};
