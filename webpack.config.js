var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        client: './client/ts/app.ts',
        server: './builder/build.ts'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.es6.js', '.scss', '.ts', '.tsx']
    },
    module: {
        exclude: /(node_modules|bower_components)/,
        loaders: [{
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.ts(x?)$/,
                loader: "babel?presets[]=es2015!ts-loader?configFileName=./tsconfig.json"
            }
        ]
    },plugins: [
        new ExtractTextPlugin("./dist/styles.css")
    ]
}
