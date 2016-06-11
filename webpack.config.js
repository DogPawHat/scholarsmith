module.exports = {
  entry: './src/ts/app.ts',
  output: {
    filename: './build/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
      },
      { test: /\.ts$/,
          loader: 'ts-loader' }

    ]
  }
}
