const
   gulp = require('gulp'),
   postcss = require('gulp-postcss'),
   autoprefixer = require('autoprefixer'),
   cssnano = require('cssnano');

module.exports = function styleOptym() {
   return gulp.src('./build/style/**.css')
   .pipe(postcss([
      autoprefixer({ grid: true }),
      cssnano()
   ]))
   .pipe(gulp.dest('./build/style/'))
}