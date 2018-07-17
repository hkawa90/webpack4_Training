# webpack4_Training Zero conf

## One Module

    # create package.json
    npm init -y
    # install webpack
    npm i -D webpack webpack-cli 
    # create the source int entry-point
    mkdir src
    echo "console.log('entry-src');" > src/index.js
    # add build script into package.json
    mv package.json package.json.org
    sed 's/"scripts": {/"scripts": {\n    "build": "webpack --mode production",/' < package.json.org > package.json
    # run build scrpit
    npm run build

~~~
    Hash: 710965bcc876dfc3dc74
    Version: webpack 4.16.0
    Time: 119ms
    Built at: 2018-07-16 07:53:44
    Asset       Size  Chunks             Chunk Names
    main.js  954 bytes       0  [emitted]  main
    [0] ./src/index.js 26 bytes {0} [built]
~~~

## Multiple Modules

    # create package.json
    npm init -y
    # install webpack
    npm i -D webpack webpack-cli 
    # create the source int entry-point
    mkdir src
    # create main module

~~~
    import {add} from 'submodule'

    console.log(add(1, 2))
~~~

    # create sub moudule

~~~
    export default function add(p1, p2) {
        return p1 + p2;
    }
 ~~~
    # add build script into package.json
    mv package.json package.json.org
    sed 's/"scripts": {/"scripts": {\n    "build": "webpack --mode production",/' < package.json.org > package.json
    # run build scrpit
    npm run build