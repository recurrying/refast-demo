module.exports = function (config, webpack) {
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: "app",
    minChunks: Infinity
  }))
}
