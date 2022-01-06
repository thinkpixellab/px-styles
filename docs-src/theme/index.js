const fs = require('fs');
const _ = require('lodash');
const unindent = require('./unindent.js');
const findDefaults = require('./findDefaults.js');

module.exports = function (dest, ctx) {
    return new Promise(function (resolve, reject) {
        // simplify the data and sort into groups

        setTimeout(() => {
            let groups = [];

            ctx.data.forEach(item => {
                // find / create the group

                let groupName = item.group && item.group.length ? item.group[0] : 'other';
                let group = groups.find(g => g.name == groupName);

                if (!group) {
                    let groupDescription =
                        item.groupDescriptions && groupName in item.groupDescriptions
                            ? item.groupDescriptions[groupName]
                            : '';

                    group = {
                        name: groupName,
                        description: groupDescription,
                        variables: [],
                        items: [],
                    };
                    groups.push(group);
                }

                let namespace = groupName.substr(0, groupName.indexOf('.')) || 'other';
                let type = item.context.type;
                let name = item.context.name;

                // docname

                let docName = name + '()';
                if (type == 'variable') {
                    docName = '$' + name;
                }

                // replace %%include => @include in examples

                if (item.example) {
                    item.example.forEach(ex => {
                        if (ex.code) {
                            ex.code = ex.code.replace(/%%include/g, '@include');
                        }
                    });
                }

                let collectionName = type == 'variable' ? 'variables' : 'items';

                group[collectionName].push({
                    namespace: namespace,
                    group: groupName,
                    name: name,
                    docName: docName,
                    type: type,
                    description: item.description,
                    example: item.example,
                    parameter: item.parameter,
                    config: item.config,
                    return: item.return,
                    access: item.access,
                    path: item.file.path,
                    defaults: item.defaults,
                });
            });

            fs.writeFileSync(
                dest + '/docs.js',
                `window.pxstyles = ${JSON.stringify({ groups: groups }, null, 4)};`
            );
        }, 100);
    });
};

module.exports.annotations = [];
module.exports.annotations.push(function () {
    return {
        name: 'defaults',
        multiple: false,
        parse: function (text, info, id) {},
        resolve: function (items) {
            items.forEach(item => {
                if (item.context.name == 'init') {
                    let defaults = findDefaults(item.context.code);
                    item.defaults = defaults;
                }
            });
        },
        autofill: function (item, info) {},
    };
});
