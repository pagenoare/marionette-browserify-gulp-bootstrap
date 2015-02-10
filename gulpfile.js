'use strict';

// Include gulp
var gulp = require('gulp'),
// Include Our Plugins
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	browserify = require('gulp-browserify');

gulp.task('browserify', function(){
	return gulp.src('./static/js/app.js')
	.pipe(browserify({debug: true}))
	.pipe(gulp.dest('./static/dist'));
});