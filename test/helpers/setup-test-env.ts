require("babel-polyfill");
require('babel-register');

document = require('jsdom').jsdom('<body></body>')
window = document.defaultView
navigator = window.navigator