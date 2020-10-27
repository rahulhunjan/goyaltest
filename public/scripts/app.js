'use strict';

var _person = require('./person.js');

var _person2 = _interopRequireDefault(_person);

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './utils.js'
console.log('App js is working!');
console.log((0, _utils.Nvalue)(25));
console.log((0, _person.isAdult)(25));
console.log((0, _person2.default)(62));
