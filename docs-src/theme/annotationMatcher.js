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

        {type} property:path [default] - description
        multiline descriptions are supported and can include *markdown*

    INVALID:

        Must have whitespace on either side of the description dash:
        {type} property [default] -description
        {type} property [default]-description
        {type} property [default]- description

        Must not have a dash with whitespace anywhere before the description dash:
        {type} property [default - text] - description

*/

module.exports = function (text) {
    let result = {};
    let match;
    let t;

    // find the description text (everything after the first dash surrounded by at least one space on either side)
    t = text.split(/\s-\s/).shift();
    result.desc = text.replace(t, '').replace(/\s-\s/, '').trim();
    result.desc = result.desc ? result.desc : null;

    // // if the description has multiple lines, trim each of the lines
    // if (result.desc && result.desc.indexOf('\n') > -1) {
    //     result.desc = unindent(result.desc);
    // }

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
};
