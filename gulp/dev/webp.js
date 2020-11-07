const
   gulp = require('gulp'),
   webp = require('gulp-webp');

module.exports = function styles() {
   return gulp.src('./src/img/*.{png,jpg}')
   .pipe(webp())
   .pipe(gulp.dest('./build/img'))
}