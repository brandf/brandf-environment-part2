module.exports = {
  entry: './src/app.js',
  output: {
    path: './bin/',
    publicPath: '/bin/',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint'],
      },
    ],
  },
};
