# webpack4_Training

## Tips
### Change mode
~~~js
const env = process.env.WEBPACK_MODE

const config = {
   mode: env || 'development'
}
~~~
### CSS
Install 
~~~
npm i -D mini-css-extract-plugin css-loader
~~~
src/index.js
~~~js
import style from "./main.css";
~~~
webpack.config.js
~~~js
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
~~~

## Resources

- [Beginner’s guide to Webpack](https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460)
- [Webpack 4 Tutorial: from 0 Conf to Production Mode](https://www.valentinog.com/blog/webpack-tutorial/#webpack_4_the_HTML_webpack_plugin)
- [Beginning With Webpack 4](https://www.zeolearn.com/magazine/beginning-with-webpack-4)
- [最新版で学ぶwebpack 4入門 – BabelでES2018環境の構築(React, Vue, Three.js, jQueryのサンプル付き)](https://ics.media/entry/16028)
- [最新版で学ぶwebpack 4入門 – スタイルシート(CSSやSass)を取り込む方法](https://ics.media/entry/17376)
- [webpack 4 入門](https://qiita.com/soarflat/items/28bf799f7e0335b68186)
- [webpackチートシート](https://qiita.com/morrr/items/0f35adc38b59f5a67141)
- [webpackの設定ファイルを環境ごとに分けるには](https://qiita.com/takepo/items/fce9cd7b6742201cddc2)
- [electron-webpack-sample](https://github.com/deadcoder0904/electron-webpack-sample)