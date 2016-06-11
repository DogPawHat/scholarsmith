
module.exports = {
    entry: './client/es6/app.es6.js',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.es6.js', '.scss']
    },
    module: {
        loaders: [{
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /\.es6.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
}
