/*jslint */
/*global require  */

var gulp = require('gulp'),
    buildNumber = require('./modules/templateBuildNumber.js'),
    templateList = ['test.tpl', 'test2.tpl'];



gulp.task('templateBuildNumber', function () {
    "use strict";
    buildNumber.build(templateList, './');
});

