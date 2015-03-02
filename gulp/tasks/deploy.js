var gulp        = require('gulp');
var config  = require('../config').production;
var deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src(config.dest)
    .pipe(deploy())
});