var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var commonModule = {
    exclude: /(node_modules|bower_components)/,
    loaders: [{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
    }, {
            test: /\.ts(x?)$/,
            loaders: [
                "babel-loader?presets[]=es2015,presets[]=react",
                "ts-loader?configFileName=./tsconfig.json"
            ]
        }
    ]
};

var commonPlugins = [
    new ExtractTextPlugin("./styles.css")
]

var commonResolve = {
    alias: { 
        templates : './templates'
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.es6.js', '.scss', '.ts', '.tsx']
};

module.exports = [
    {
        entry: './client/ts/app.ts',
        output: {
            path: path.join(__dirname, "dist"),
            filename: 'client.bundle.js'
        },
        target: 'web',
        resolve: commonResolve,
        module: commonModule,
        plugins: commonPlugins
    },
    {
        entry: './builder/build.ts',
        output: {
            path: path.join(__dirname, "dist"),
            filename: 'builder.bundle.js'
        },
        target: 'node',
        resolve: commonResolve,
        module: commonModule,
        plugins: commonPlugins
    }
];