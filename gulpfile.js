const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));
const sassdoc = require('sassdoc');

// ================================================================================
// sassdoc
// ================================================================================

// http://sassdoc.com/gulp/
gulp.task('sassdoc', function () {
    return gulp.src('./src/**/*.scss').pipe(sassdoc());
});

// ================================================================================
// docs
// ================================================================================

// build the styles for the docs
gulp.task('doc-styles', function () {
    return gulp
        .src('./docs/src/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./docs/dist'));
});

gulp.task('doc-html', function () {
    return gulp.src('./docs/src/index.html').pipe(gulp.dest('./docs/dist/'));
});

gulp.task('doc-data', function () {
    return gulp.src('./docs/data/docs.js').pipe(gulp.dest('./docs/dist/'));
});

// ================================================================================
// watch
// ================================================================================
gulp.task('watch', function () {
    gulp.watch(['./theme/**/*.*', './**/*.scss'], gulp.series('sassdoc', 'doc-styles'));
    gulp.watch('./docs/src/styles.scss', gulp.series('doc-styles'));
    gulp.watch('./docs/src/index.html', gulp.series('doc-html'));
    gulp.watch('./docs/data/docs.js', gulp.series('doc-data'));
});
