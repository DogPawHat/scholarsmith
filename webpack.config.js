var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var commonModule = {
    exclude: /(node_modules|bower_components)/,
    preLoaders: [
        { test: /\.ts(x?)$/, loader : 'tslint' }
    ],
    loaders: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
    ]
};

var commonTsLint = {
    emitErrors: false,
    failOnHint: false
}

var commonPlugins = [
    new ExtractTextPlugin("./styles.css")
]

var commonResolve = {
    alias: {
        templates: './templates'
    },
    extensions: ['', '.webpack.js', '.web.js', '.scss', '.ts', '.tsx', '.js', '.jsx']
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
            contentBase: "./dist"
        },
        resolve: commonResolve,
        module: commonModule,
        tslint: commonTsLint,
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
        tslint: commonTsLint,
        plugins: commonPlugins
    }
];