const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Terser = require("terser-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: "main.js"
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss|css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(ttf)$/,
        type: 'asset/resource'
      }
    ]
  },
  optimization:{
    minimizer: [
      new Terser({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true
      }
      })
    ]

  },
  plugins: [
    new VueLoaderPlugin()
  ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}