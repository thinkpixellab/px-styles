document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data() {
            return {
                groups: window.pxstyles.groups,
                filter: null,
            };
        },
        mounted() {
            hljs.configure({ ignoreUnescapedHTML: true });
            document
                .querySelectorAll('.item-example pre, .group-header pre, .markdown pre code')
                .forEach(el => {
                    // replace double @@ with single @ in scss code blocks so that we
                    // can use @ without triggering sassdoc annotations (e.g. something
                    // like @@include becomes @include)
                    el.textContent = el.textContent.replaceAll('@@', '@');
                    hljs.highlightElement(el);
                });
        },
        computed: {
            filteredGroups() {
                if (this.filter) {
                    let filteredGroups = [];
                    this.groups.forEach(group => {
                        filteredItems = [];
                        group.items.forEach(item => {
                            let include =
                                [item.namespace, item.group, item.name, item.description]
                                    .join(' ')
                                    .indexOf(this.filter) > -1;
                            if (include) {
                                filteredItems.push(item);
                            }
                        });
                        if (filteredItems.length) {
                            filteredGroups.push({
                                name: group.name,
                                items: filteredItems,
                            });
                        }
                    });
                    return filteredGroups;
                } else {
                    return this.groups;
                }
            },
        },
        methods: {
            itemToId(item) {
                if (item && item.group && item.name) {
                    return this.toSlug(item.group) + '-' + this.toSlug(item.name);
                }
                return '';
            },

            itemParamString(item) {
                if (item.type == 'mixin' || item.type == 'function') {
                    let params = item.parameter ? item.parameter.map(p => '$' + p.name) : [];
                    return '(' + params.join(', ') + ')';
                }

                return null;
            },

            toSlug(str) {
                str = str.replace(/^\s+|\s+$/g, ''); // trim
                str = str.toLowerCase();

                // remove accents, swap ñ for n, etc
                var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
                var to = 'aaaaeeeeiiiioooouuuunc------';
                for (var i = 0, l = from.length; i < l; i++) {
                    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
                }

                str = str
                    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                    .replace(/\s+/g, '-') // collapse whitespace and replace by -
                    .replace(/-+/g, '-'); // collapse dashes

                return str;
            },

            isMultiline(str) {
                return str.indexOf('\n') > -1;
            },

            unindent(str, skipLineCount = 1) {
                let lines = str.split(/\n/).slice(skipLineCount);
                let prelines =
                    skipLineCount > 0
                        ? str.split(/\n/).slice(0, skipLineCount).join('\n') + '\n'
                        : '';
                let indent = lines.reduce((acc, val) => {
                    if (val.trim().length) {
                        let spaces = Math.max(0, val.search(/\S/));
                        // console.log(spaces + ' => "' + val + '"');
                        return Math.min(spaces, acc);
                    }
                    return acc;
                }, 100);
                if (indent > 0) {
                    lines = lines.map(l => l.slice(indent));
                }

                return prelines + lines.join('\n');
            },

            toMarkdown(str) {
                if (str) {
                    const md = window.markdownit();
                    return md.render(this.unindent(str));
                }
                return str;
            },

            copyText(str) {
                navigator.clipboard.writeText(str);
            },

            configItemClick(item) {
                this.copyText(`@include config(${item.name}, ${item.value});`);
                console.log('copied');
            },
        },
    });
});
