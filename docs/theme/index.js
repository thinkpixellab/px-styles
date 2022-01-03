const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const exp = require('constants');
// const Handlebars = require('handlebars');

// const templateStr = fs.readFileSync(path.resolve(__dirname, './theme.html')).toString('utf-8');
// const template = Handlebars.compile(templateStr);

const nest = function (seq, keys) {
    if (!keys.length) return seq;
    let first = keys[0];
    let rest = keys.slice(1);
    return _.mapValues(_.groupBy(seq, first), function (value) {
        return nest(value, rest);
    });
};

module.exports = function (dest, ctx) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // simplify the data
            let items = _(ctx.data)
                .map(item => {
                    let group = item.group && item.group.length ? item.group[0] : 'other';
                    let namespace = group.substr(0, group.indexOf('.')) || 'other';
                    let type = item.context.type;
                    let name = item.context.name;

                    // docname

                    let docName = name;
                    if (type == 'mixin') {
                        docName = name + '()';
                    }

                    if (type == 'variable') {
                        docName = '$' + name;
                    }

                    if (type == 'function') {
                        docName = name + '()';
                    }

                    // replace %%include => @include in examples
                    if (item.example) {
                        item.example.forEach(ex => {
                            if (ex.code) {
                                ex.code = ex.code.replace(/%%include/g, '@include');
                            }
                        });
                    }

                    return {
                        namespace: namespace,
                        group: group,
                        name: name,
                        docName: docName,
                        type: type,
                        description: item.description.trim(),
                        example: item.example,
                        parameter: item.parameter,
                        return: item.return,
                        access: item.access,
                        path: item.file.path,
                    };
                })
                .groupBy('group')
                .value();

            // created nested groups
            //items = nest(items, ['namespace', 'group']);

            //fs.writeFileSync(dest + '/index.html', template({ items }));
            fs.writeFileSync(
                dest + '/docs.js',
                `window.pxstyles = ${JSON.stringify(items, null, 4)};`
            );
        }, 100);
    });
};

module.exports.annotations = [];
/*
    Matches the common syntax used for many of these custom annotations

    VALID:

        {type} property [default] - description
        {type} property [default]
        {type} property
        property [default] - description
        property [default]
        property - description
        property
        {type-type} property-property [default-default] - Description could [optional] have @conflicting {syntax} - but maybe shouldn't?
        {type} property:path [default] - description


    INVALID:

        Must have whitespace on either side of the description dash:
        {type} property [default] -description
        {type} property [default]-description
        {type} property [default]- description

        Must not have a dash with whitespace anywhere before the description dash:
        {type} property [default - text] - description

*/

function paramSyntaxMatch(text) {
    let result = {};
    let match;
    let t;

    // find the description text (everything after the first dash surrounded by at least one space on either side)
    t = text.split(/\s-\s/).shift();
    result.desc = text.replace(t, '').replace(/\s-\s/, '').trim();
    result.desc = result.desc ? result.desc : null;

    // find the {type}
    match = t.match(/{(.*)}/);
    result.type = match && match.length ? match[1] : null;
    t = t.replace(match && match.length && match[0], '');
    result.type = result.type ? result.type.trim() : null;

    // find the [default]
    match = t.match(/\[(.*)\]/);
    result.default = match && match.length ? match[1] : null;
    t = t.replace(match && match.length && match[0], '');
    result.default = result.default ? result.default.trim() : null;

    // all that remains should be the property name
    result.name = t ? t.trim() : null;

    return result;
}

/**
 * Documents an option for map type parameters (e.g. a key in the map of options passed to a mixin).
 * Uses standard parameter syntax (see above).
 */

module.exports.annotations.push(function () {
    return {
        name: 'config',
        parse: function (text) {
            let r = paramSyntaxMatch(text);
            return r;
        },
    };
});
