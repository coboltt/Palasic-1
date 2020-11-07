const
   gulp = require('gulp'),
   fileinclude = require('gulp-file-include'),
   plumber = require('gulp-plumber');

module.exports = function html() {
   return gulp.src('./src/*.html')
   .pipe(plumber())
   .pipe(fileinclude())
   .pipe(gulp.dest('./build'))
}