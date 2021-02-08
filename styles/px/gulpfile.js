'use strict';

var Fiber = require('fibers');
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('sass');

gulp.task('sass', function() {
    return gulp
        .src('./test/test.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./test'));
});

function defaultTask(cb) {
    gulp.watch('../../**/*.scss', gulp.series('sass'));
}
exports.default = defaultTask;
