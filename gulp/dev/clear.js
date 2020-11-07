const del = require('del');

module.exports = function clear() {
   return del(['./build/*.html', './build/pages/*.html', './build/style', './build/scripts', './build/img'])
}