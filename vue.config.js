const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue2-common-forms/'
    : '/',
  transpileDependencies: [/node_modules[/\\\\]vue2-common[/\\\\]/],
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('router',resolve('src/route/router'))
      .set('components',resolve('src/components'))
      .set('scss',resolve('src/scss'))
      .set('api',resolve('src/api'))
      .set('pages',resolve('src/pages'))
      .set(
        "common.components",
        "@/../node_modules/vue2-common/src/components"
      )
      .set("common.styles", "@/../node_modules/vue2-common/src/scss")
      .set('@vue2-common', '@/../node_modules/vue2-common/src')
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import 'common.styles/global.variables.scss';
        `
      }
    }
  },
  lintOnSave: false
}