// removes unneeded intendation at the begining of lines but still maintain the overall indentation
// of the string block

module.exports = function (str, skipLineCount = 0) {
    let lines = str.split(/\n/).slice(skipLineCount);
    let prelines =
        skipLineCount > 0 ? str.split(/\n/).slice(0, skipLineCount).join('\n') + '\n' : '';
    let indent = lines.reduce((acc, val) => {
        if (val.trim().length) {
            let spaces = Math.max(0, val.search(/\S/));
            return Math.min(spaces, acc);
        }
        return acc;
    }, 1000);

    if (indent > 0) {
        lines = lines.map(l => l.slice(indent));
    }

    return prelines + lines.join('\n');
};
