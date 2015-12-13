/*jslint */
/*global require  */

var gulp = require('gulp'),
    replace = require('gulp-replace'),
    templateList = ['test.tpl', 'test2.tpl'],
    buildNumber = (new Date()).getTime(),
    pattern = new RegExp('version=([^&]{0,32})&gulpBuild=1', 'gi'),
    replaceWith = ['version=', buildNumber, '&gulpBuild=1'].join(''),
    path = require('path');

gulp.task('templateBuildNumber', function () {
    "use strict";
    templateList.forEach(function (template) {
        gulp.src([template], {"base": './'}).
            pipe(replace(pattern, replaceWith)).
            pipe(gulp.dest(path.dirname(template)));
    });
});

