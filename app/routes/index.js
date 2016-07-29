'use strict';
//Appending every route file into one.
const profile = require('./profiles');
const user = require('./users');

module.exports = [].concat(profile, user)