const
   gulp = require('gulp'),
   sass = require('gulp-sass'),
   srcmap = require('gulp-sourcemaps');

module.exports = function styles() {
   return gulp.src('./src/style/**.sass')
   .pipe(srcmap.init())
   .pipe(sass({ outputStyle: 'expanded' }))
   .pipe(srcmap.write('.'))
   .pipe(gulp.dest('./build/style/'))
}