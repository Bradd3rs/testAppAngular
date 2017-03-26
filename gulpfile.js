var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css');

var sassFiles = './app/resources/scss/*.scss',
    cssDest = './app/resources/css/',
    cssUgly = './app/resources/css/*.css',
    distCss = './app/dist/css/',
    jsUgly = './app/components/**/*.js',
    jsDist = './app/dist/js/';

gulp.task('dev', ['sass', 'concatCss', 'watch']);

gulp.task('sass', function () {
  return gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task('concatCss', function () {
  return gulp.src(cssUgly)
    .pipe(concatCss("app.css"))
    .pipe(gulp.dest(distCss));
});
 
gulp.task('watch', function () {
  gulp.watch(sassFiles, ['sass']), 
  gulp.watch(cssUgly, ['concatCss']);
});
 
