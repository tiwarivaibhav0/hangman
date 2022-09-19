const path = require("path");

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 4500,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
