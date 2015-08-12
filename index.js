var through = require('through2');
var sequelizeTestSetup = require('sequelize-test-setup');
var PluginError = require('gulp-util').PluginError;

const PLUGIN_NAME = 'gulp-sequelize-test-setup';

// Plugin level function (dealing with files)
module.exports = function(options) {

  var fixtures = [];

  // Creating a stream through which each file will pass
  return through.obj(
    function(file, enc, cb) {
      // Keep track of fixture files so they can all be passed to setup
      fixtures.push(file.path);
      cb(null, file);
    },
    function(cb) {
      var stream = this;
      options.fixtures = fixtures;
      sequelizeTestSetup(options).then(function () {
        cb();
      }).catch(function(err) {
        stream.emit('error', new PluginError(PLUGIN_NAME, err));
        cb();
      });
    }
  );

};