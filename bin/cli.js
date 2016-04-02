#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2), {
  boolean: ['runserver', 'ui-no-buttonbar']
});
require('./extension')(argv);
