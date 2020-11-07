const 
  gulp = require('gulp'),

  image = require('./image'),
  svgSprite = require('./svgSprite'),
  style = require('./style'),
  html = require('./html'),
  scripts = require('./scripts'),
  fonts = require('./fonts')
  
  sync = require('browser-sync').create();

function readyReload(cb) {
  sync.reload()
  cb()
}

module.exports = function server(cb) {
  sync.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  })

  gulp.watch('./src/img/**/*.{gif,png,jpg,svg,webp}', image)
  gulp.watch('./src/img/svg/*.svg', gulp.series(svgSprite, readyReload))
  gulp.watch('./src/style/**/*.sass', gulp.series(style, readyReload))
  gulp.watch('./src/scripts/**/*.js', gulp.series(scripts, readyReload))
  gulp.watch('./src/fonts/*', fonts)
  gulp.watch('./src/pages/*.html', gulp.series(html, readyReload))
  gulp.watch('./src/*.html', gulp.series(html, readyReload))

  return cb()
}
