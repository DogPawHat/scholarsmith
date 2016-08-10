require('ts-babel-node/register')

console.log("hello?");
global.document = require('jsdom').jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator