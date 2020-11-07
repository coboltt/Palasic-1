const
   gulp = require('gulp'),
   htmlmin = require('gulp-htmlmin');

module.exports = function htmlOptym() {
   return gulp.src('./build/*.html')
   .pipe(htmlmin({ collapseWhitespace: true }))
   .pipe(gulp.dest('./build'))
}