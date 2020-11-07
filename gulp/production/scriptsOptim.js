const 
   gulp = require('gulp'),
   minify = require("gulp-minify");

module.exports = function scriptsOptim() {
   return gulp.src('./build/scripts/**/*.js')
   .pipe(minify())
   .pipe(gulp.dest('./build/scripts'))
}