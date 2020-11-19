const { resolve } = require('path');

const solutions = resolve('.');

module.exports = {
  entry: resolve(solutions, 'scripts', 'modules'),

  build: resolve(solutions, 'build')
};
