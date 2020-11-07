const
   gulp = require('gulp'),
   fileinclude = require('gulp-file-include'),
   plumber = require('gulp-plumber');

module.exports = function scripts() {
   return gulp.src('./src/scripts/**/*.js')
   .pipe(plumber())
   .pipe(fileinclude())
   .pipe(gulp.dest('./build/scripts'))
}