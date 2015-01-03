var path = require('path');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var less = require('gulp-less');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var filter = require('gulp-filter');
var sourcemaps = require('gulp-sourcemaps');
var compress = require('gulp-yuicompressor');

var handleErrors = require('../util/handleErrors');
var config = require('../config').less;

gulp.task('less', ['images'], function () {
    return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        //.pipe(postcss([
        //    autoprefixer({browsers: ['last 2 version'], cascade: false})
        //]))
        .pipe(compress({type: 'css'}))
        .pipe(sourcemaps.write())
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest))
        .pipe(filter('**/*.css'))
        .pipe(browserSync.reload({stream: true}))
        ;
});
