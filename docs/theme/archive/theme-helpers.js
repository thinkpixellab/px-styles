const Handlebars = require('handlebars');

exports.registerAll = () => {
    Handlebars.registerHelper('removeBreaks', str => {
        if (str) {
            return str.replace(/(\r\n|\n|\r)/gm, ' ');
        }
        return str;
    });

    Handlebars.registerHelper('codeSample', (code, type) => {
        if (code) {
            // replace %%include with @include
            code = code.replace(/%%include/gm, '@include');
            let lines = code.split('\n');

            lines = lines.map(l => {
                return '' + l;
            });

            return '```scss\n' + lines.join('\n') + '\n```';
        }
        return code;
    });

    Handlebars.registerHelper('textToId', (str1, str2) => {
        if (str1 || str2) {
            return (str1 + ' ' + str2)
                .trim()
                .replace(/[^A-Za-z0-9]/gm, '-')
                .toLowerCase();
        }
        return '';
    });
};
