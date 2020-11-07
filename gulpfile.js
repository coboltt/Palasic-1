const gulp = require('gulp');

const
   clear = require('./gulp/dev/clear'),
   html = require('./gulp/dev/html'),
   style = require('./gulp/dev/style'),
   scripts = require('./gulp/dev/scripts'),
   fonts = require('./gulp/dev/fonts'),
   image = require('./gulp/dev/image'),
   /* Unuse */
   imageMinify = require('./gulp/dev/imageMinify'),
   webp = require('./gulp/dev/webp'),
   fontsTransfer = require('./gulp/dev/fontsTransfer'),
   svgSprite = require('./gulp/dev/svgSprite'),

   htmlOptim = require('./gulp/production/htmlOptim'),
   scriptsOptim = require('./gulp/production/scriptsOptim'),
   styleOptim = require('./gulp/production/styleOptim'),

   server = require('./gulp/dev/server');


const dev = gulp.parallel(html, style, scripts, image, fonts);

const prod = gulp.series(htmlOptim, scriptsOptim, styleOptim, imageMinify);

module.exports.default = gulp.series(clear, dev, server)
module.exports.build = gulp.series(prod, server)

module.exports.clear = clear
module.exports.html = html
module.exports.style = style
module.exports.scripts = scripts
module.exports.fonts = fonts
module.exports.imageMinify = imageMinify
module.exports.webp = webp
module.exports.fontsTransfer = fontsTransfer
module.exports.svgSprite = svgSprite