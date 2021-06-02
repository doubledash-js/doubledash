const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'doubledash.js',
    libraryTarget: 'var',
    library: '__'
  },
  module: {
    rules: [
        {
          // for any file with a suffix of js or jsx
          test: /\.js$/,
          // ignore transpiling JavaScript from node_modules as it should be that state
          exclude: /node_modules/,
          // use the babel-loader for transpiling JavaScript to a suitable format
          loader: 'babel-loader',
          options: {
            // attach the presets to the loader (most projects use .babelrc file instead)
            presets: ["@babel/preset-env"]
          }
        }
    ]
  }
};