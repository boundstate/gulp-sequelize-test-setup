# Sequelize Test Setup Gulp Plugin

Gulp plugin for setting up a test database and loading fixtures with [Sequelize](http://sequelizejs.com).

## Install

```sh
npm install gulp-sequelize-test-setup
```

## Usage

```js
var sequelizeTestSetup = require('gulp-sequelize-test-setup');

gulp.task('test:setup', function () {
  // configure test environment
  require('dotenv').load({path: 'test.env', silent: true});
  return gulp.src('test/fixtures/**/*.json', {read: false})
    .pipe(sequelizeTestSetup({
      sequelize: require('./models').sequelize,
      models: require('./models'),
      migrationsPath: require('./.sequelizerc')['migrations-path']
    }));
});
```