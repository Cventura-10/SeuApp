const { override, addWebpackPlugin } = require('customize-cra');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = override(
  addWebpackPlugin(new ReactRefreshWebpackPlugin())
);
