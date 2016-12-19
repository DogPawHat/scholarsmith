const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");

const getDirectories = (srcpath: string) => {
    return readdirSync(srcpath).filter((file) => {
        return statSync(join(srcpath, file)).isDirectory();
    });
};



const routes = [
    "/",
    path.
    "/questions",
    "/results",
    "/talktous"
]

const commonModule = {
    rules: [{
            test: /\.ts(x?)$/,
            loader: 'tslint-loader',
            enforce: 'pre',
            include: [
                path.resolve(__dirname, "src")
            ]
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            include: [
                path.resolve(__dirname, "src")
            ],
            exclude: [
                path.resolve(__dirname, "node_modules")
            ]
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
            include: [
                path.resolve(__dirname, "src")
            ]
        }
    ]
};

const commonTsLint = {
    emitErrors: false,
    failOnHint: false
}

const commonPlugins = [
    new ExtractTextPlugin("./styles.css"),
    new webpack.LoaderOptionsPlugin({
        options: {
            tslint: commonTsLint
        }
    }),
    new webpack.optimize.UglifyJsPlugin()
]

const commonResolve = {
    modules: [
        "node_modules",
        path.resolve(__dirname, "src")
    ],
    alias: {
        "templates": path.resolve(__dirname, "src/templates")
    },
    extensions: ['.webpack.js', '.web.js', '.scss', '.ts', '.tsx', '.js', '.jsx']
};

module.exports = [{
        entry: './src/client/ts/app.ts',
        output: {
            path: path.join(__dirname, "dist"),
            filename: 'client.bundle.js'
        },
        target: 'web',
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: "./dist"
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
        libraryTarget: 'umd',

        resolve: commonResolve,
        module: commonModule,
        plugins: [
            ...commonPlugins,
            new StaticSiteGeneratorPlugin('builder.bundle.js', paths)
        ]
    }
];