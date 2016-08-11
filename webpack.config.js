var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var commonModule = {
    exclude: /(node_modules|bower_components)/,
    loaders: [
        { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' },
        { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
    ]
};

var commonPlugins = [
    new ExtractTextPlugin("./styles.css")
]

var commonResolve = {
    alias: {
        templates: './templates'
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.es6.js', '.scss', '.ts', '.tsx']
};

module.exports = [
    {
        entry: './src/client/ts/app.ts',
        output: {
            path: path.join(__dirname, "dist"),
            filename: 'client.bundle.js'
        },
        target: 'web',
        debug: true,
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: "./dist",
        },
        resolve: commonResolve,
        module: commonModule,
        plugins: commonPlugins
    },
    {
        entry: './src/builder/build.ts',
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