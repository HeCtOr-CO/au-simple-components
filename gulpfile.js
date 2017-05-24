var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');

var tsAmd = ts.createProject('tsconfig.json');
var tsCjs = ts.createProject('tsconfig.json', { module: "commonjs" });

gulp.task('html-files', function () {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/amd'))
    .pipe(gulp.dest('dist/commonjs'));
});

gulp.task('scss-files', function () {
  gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/amd'))
    .pipe(gulp.dest('dist/commonjs'));
});

gulp.task('ts-files-amd', function () {
  gulp.src('src/**/*.ts')
    .pipe(tsAmd())
    .pipe(gulp.dest('dist/amd'));
});

gulp.task('ts-files-cjs', function () {
  gulp.src('src/**/*.ts')
    .pipe(tsCjs())
    .pipe(gulp.dest('dist/commonjs'));
});

gulp.task('clean', function () {
  gulp.src('dist/', { read: false })
    .pipe(clean());
});

gulp.task('ts-files', ['ts-files-amd', 'ts-files-cjs'], function () { });

gulp.task('default', ['ts-files', 'html-files', 'scss-files'], function () { });