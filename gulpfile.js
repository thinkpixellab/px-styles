const sassdoc = require('sassdoc');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const fs = require('fs');
const pckg = require('./package.json');

// write the package version to a scss file
function verToSass(done) {
    fs.writeFileSync(
        './src/version.scss',
        `@function get-version() { @return '${pckg.version}'; }`
    );
    done();
}

// compile documentation with sassdoc
function sassDoc(done) {
    gulp.src('./src/**/*.scss').pipe(sassdoc());
    //gulp.src('./scratch.scss').pipe(sassdoc());
    done();
}

// build documentation styles
function docStyles(done) {
    gulp.src('./docs-src/src/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./docs'));
    done();
}

// copy documentation files to the docs folder
function copyDocFiles(done) {
    gulp.src(['./docs-src/src/index.html', './docs-src/data/docs.js']).pipe(gulp.dest('./docs/'));
    done();
}

// build a file called scratch.scss in the root and output as scratch.css
function scratch(done) {
    gulp.src('./scratch/scratch.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./scratch/'));
    done();
}

exports.verToSass = verToSass;
exports.sassDoc = sassDoc;
exports.docStyles = docStyles;
exports.copyDocFiles = copyDocFiles;
exports.scratch = scratch;
exports.docs = gulp.series(sassDoc, docStyles, copyDocFiles);

// run this before publishing
exports.prep = gulp.series(sassDoc, docStyles, copyDocFiles, verToSass);

exports.default = function () {
    // let docWatch = [
    //     './docs-src/src/styles.scss',
    //     './docs-src/theme/*.*',
    //     './docs-src/src/*.*',
    //     './src/**/*.scss',
    //     './init.scss',
    // ];
    // gulp.watch(docWatch, gulp.series(sassDoc, docStyles, copyDocFiles, scratch));

    gulp.watch(['./scratch/*.scss', './scratch.scss', './src/**/*.scss'], gulp.series(scratch));
};
