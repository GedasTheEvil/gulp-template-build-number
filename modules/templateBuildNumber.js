/*jslint */
/*global require, module  */

module.exports = (function () {
    "use strict";
    var gulp = require('gulp'),
        replace = require('gulp-replace'),
        buildNumber = (new Date()).getTime(),
        pattern = new RegExp('version=([^&]{0,32})&gulpBuild=1', 'gi'),
        replaceWith = ['version=', buildNumber, '&gulpBuild=1'].join(''),
        path = require('path');

    /**
     * The base function for a gulp task that replaces the build versions in templates
     *
     * @param {Array} templateList
     * @param {string} base
     */
    function templateBuilderGenericStart(templateList, base) {
        templateList.forEach(function (template) {
            gulp.src([template], {"base": base}).
                pipe(replace(pattern, replaceWith)).
                pipe(gulp.dest(path.dirname(template)));
        });
    }

    return {"build": templateBuilderGenericStart};
}());
