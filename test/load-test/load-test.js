const sass = require('sass');

const COUNT = 100;
const TESTS = ['./load-test-utils.scss', './load-test-index.scss', './load-test-all.scss'];

for (test of TESTS) {
    const start = Date.now();

    for (var i = 0; i < COUNT; i++) {
        sass.compile(test, { logger: sass.Logger.silent });
    }

    const end = Date.now();
    const totalSeconds = Math.round((100 * (end - start)) / 1000) / 100;
    const perSeconds = Math.round((1000 * totalSeconds) / COUNT) / 1000;

    console.log('');
    console.log('-----------------------------------------');
    console.log('');
    console.log(`    ${test}`);
    console.log(
        `    Total elapsed: ${totalSeconds}s / Average per compile: ${perSeconds}s (x${COUNT} iterations)`
    );
}

console.log('');
console.log('-----------------------------------------');
