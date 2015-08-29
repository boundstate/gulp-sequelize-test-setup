# Sequelize Test Setup Gulp Plugin

Gulp plugin for setting up a test database and loading fixtures with [Sequelize].

## Install

```sh
npm install gulp-sequelize-test-setup
```

## Usage

```js
var sequelizeTestSetup = require('gulp-sequelize-test-setup');
gulp.task('test:setup', function () {
  var models = require('./models');
  return gulp.src('test/fixtures/**/*', {read: false})
    .pipe(sequelizeTestSetup({
      sequelize: models.sequelize,
      models: models,
      migrationsPath: 'migrations'
    }));
});
gulp.task('test', ['test:setup'], ...);
```

## Options

See [sequelize-test-setup] for all available options.

[Sequelize]: http://sequelizejs.com
[sequelize-test-setup]: https://github.com/boundstate/sequelize-test-setup