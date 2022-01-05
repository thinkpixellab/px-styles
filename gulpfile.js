const watch = require('gulp-watch');

const sassdoc = require('sassdoc');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// compile documentation with sassdoc
function sassDoc(done) {
    gulp.src('./src/**/*.scss').pipe(sassdoc());
    //gulp.src('./src/defaults.scss').pipe(sassdoc());
    done();
}

// build documentation styles
function docStyles(done) {
    gulp.src('./docs/src/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./pages'));
    done();
}

// copy documentation files to the pages folder
function copyDocFiles(done) {
    gulp.src(['./docs/src/index.html', './docs/data/docs.js']).pipe(gulp.dest('./pages/'));
    done();
}

exports.sassDoc = sassDoc;
exports.docStyles = docStyles;
exports.copyDocFiles = copyDocFiles;
exports.docs = gulp.series(sassDoc, docStyles, copyDocFiles);

exports.default = function () {
    let docWatch = ['./docs/src/styles.scss', './docs/theme/*.*', './docs/src/*.*', './**/*.scss'];
    gulp.watch(docWatch, gulp.series(sassDoc, docStyles, copyDocFiles));
};
