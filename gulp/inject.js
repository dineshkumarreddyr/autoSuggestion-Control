"use strict";

var bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    es = require('event-stream'),
    gulp = require('gulp');


gulp.task('inject', function () {
    gulp.src('./src/index.html')
      .pipe(inject(gulp.src(bowerFiles(), { read: false }), { name: 'bower' }))
      .pipe(inject(es.merge(
        gulp.src('./src/styles/*.css'),
        gulp.src('./src/**/*.js', { read: false })
      )))
      .pipe(gulp.dest('./build'));
});