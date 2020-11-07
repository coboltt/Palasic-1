const
   gulp = require('gulp'),
   svgSprites = require('gulp-svg-sprite');

module.exports = function svgSprite() {
   return gulp.src('./src/img/svg/**.svg')
   .pipe(svgSprites({
      mode: {
      stack: {
         sprite: "../sprite.svg"
      }
      },
   }))
   .pipe(gulp.dest('./src/img'))
}