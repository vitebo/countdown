const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
    ],
  },
};
