const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));
const sassdoc = require('sassdoc');

// ================================================================================
// sassdoc
// ================================================================================

const runSassDoc = function () {
    gulp.src('./src/**/*.scss').pipe(sassdoc());
    //gulp.src('./src/defaults.scss').pipe(sassdoc());
};

const copyDocFiles = function () {
    gulp.src(['./docs/src/index.html', './docs/data/docs.js']).pipe(gulp.dest('./docs/dist/'));
};

const buildStyles = function () {
    gulp.src('./docs/src/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./docs/dist'));
};

gulp.task('sassdoc', function (cb) {
    runSassDoc();
});

gulp.task('styles', function (cb) {
    buildStyles();
    cb();
});

gulp.task('docs', function (cb) {
    runSassDoc();
    setTimeout(() => {
        buildStyles();
        copyDocFiles();
        cb();
    }, 1000);
});

// ================================================================================
// watch
// ================================================================================
gulp.task('watch', function () {
    gulp.watch(
        ['./docs/src/styles.scss', './docs/theme/*.*', './docs/src/*.*', './**/*.scss'],
        gulp.series(['docs', 'styles'])
    );
});
