
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            // drop console output in build product
            drop_debugger: true,
            drop_console: true
          }
        },
      })
    ]
  },
  devServer: {
    port: 8080,
  },
}