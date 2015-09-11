/*jslint node: true */
'use strict';

var gulp = require('gulp');
var fixmyjs = require('gulp-fixmyjs');

gulp.task('fixjs', function(){
  gulp.src('./apps/_global/data/**/*.js')
    .pipe(fixmyjs({
        // JSHint settings here
    }))
    .pipe(gulp.dest('./apps/_global/data'));
});
