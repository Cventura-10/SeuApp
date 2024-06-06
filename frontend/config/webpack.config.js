const path = require('path');

module.exports = {
  // Configuration options...
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Rules for handling different file types
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              throwIfNamespace: false, // This line disables the namespace warning
            },
          },
        ],
      },
      // Add more rules as needed
    ],
  },
  // Add other configuration options as needed
};
