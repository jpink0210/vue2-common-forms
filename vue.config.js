const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('router',resolve('src/route/router'))
      .set('components',resolve('src/components'))
      .set('scss',resolve('src/scss'))
      .set('api',resolve('src/api'))
      .set('pages',resolve('src/pages'))
  },
  lintOnSave: false
}