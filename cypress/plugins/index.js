const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
  const options = {
    webpackOptions: require('../../webpack.config'),
  };

  on('file:preprocessor', webpackPreprocessor(options));
};
