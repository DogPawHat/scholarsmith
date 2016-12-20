import {resolve} from 'path';
import { Configuration, optimize, LoaderOptionsPlugin } from 'webpack';
import './webpack.LoaderOptionsPlugin';
import * as ExtractTextPlugin from "extract-text-webpack-plugin";
import StaticSiteGeneratorPlugin from "static-site-generator-webpack-plugin";

const commonModule = {
    rules: [{
            test: /\.ts(x?)$/,
            loader: 'tslint-loader',
            enforce: 'pre',
            include: [
                resolve(__dirname, "src")
            ]
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            include: [
                resolve(__dirname, "src")
            ],
            exclude: [
                resolve(__dirname, "node_modules")
            ]
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
            include: [
                resolve(__dirname, "src")
            ]
        }
    ]
};

const commonTsLint = {
    emitErrors: false,
    failOnHint: false
};

const commonPlugins = [
    new ExtractTextPlugin("./styles.css"),
    new LoaderOptionsPlugin({
        options: {
            tslint: commonTsLint
        }
    }),
    new optimize.UglifyJsPlugin()
]

const commonResolve = {
    modules: [
        "node_modules",
        resolve(__dirname, "src")
    ],
    alias: {
        "templates": resolve(__dirname, "src/templates")
    },
    extensions: ['.webpack.js', '.web.js', '.scss', '.ts', '.tsx', '.js', '.jsx']
};

const config: Configuration = [{
        entry: './src/client/ts/app.ts',
        output: {
            path: resolve(__dirname, "dist"),
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
            path: resolve(__dirname, "dist"),
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

export default config