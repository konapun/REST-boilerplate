var fs = require('fs');

/*
 * Register all routes with the Express router
 */
module.exports.register = function(router) {
  fs.readdirSync(__dirname).forEach(function(file) {
    if (file.indexOf('.js') >= 0 && file != 'index.js') {
      require('./' + file)(router);
    }
  });
};
