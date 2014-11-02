var path = require('path');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var less = require('gulp-less');
var filter = require('gulp-filter');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config = require('../config').less;

gulp.task('less', ['images'], function () {
    //return gulp.src(config.src)
    //    .pipe(less({
    //        compass: true,
    //        bundleExec: true,
    //        sourcemap: true
    //        //sourcemapPath: '../map'
    //    }))
    //    .on('error', handleErrors)
    //    .pipe(gulp.dest(config.dest));

    return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(sourcemaps.write())
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest))
        .pipe(filter('**/*.css'))
        .pipe(browserSync.reload({stream: true}))
        ;
});
