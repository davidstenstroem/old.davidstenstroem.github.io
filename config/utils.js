const path = require('path')

module.exports = {
  resolve: function (dir) {
    return path.join(__dirname, '..', dir)
  },
  assetsPath: function (_path) {
    const assetsSubDir = 'static'
    return path.posix.join(assetsSubDir, _path)
  }
}
