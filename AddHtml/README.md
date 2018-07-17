# webpack4_Training handling html file

## Handling html file

### create package.json
    npm init -y
### install webpack
    npm i -D webpack webpack-cli 
### create the source int entry-point
    mkdir src
### create main module

~~~js
    import {add} from 'submodule'

    function calc() {
        console.log(add(1, 2))
    }
    windows.calc = calc
~~~

### create sub moudule

~~~js
    export default function add(p1, p2) {
        return p1 + p2;
    }
 ~~~
### Add src/index.html

 ~~~html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>webpack 4 quickstart</title>
    </head>
    <body>
        <input type="button" value="push me" onclick="calc()">
    </body>
    </html>
 ~~~
### install html plugin

    npm i -D html-webpack-plugin html-loader

### create webpack configuration file.

~~~js
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    module.exports = {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: { minimize: true }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    };
~~~
### install webpack-dev-server
    npm i -D webpack-dev-server
### add dev/build script into package.json

~~~json
  "scripts": {
    "dev": "webpack-dev-server --mode development --open",
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
~~~