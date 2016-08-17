/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************!*\
  !*** ./src/builder/build.ts ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _server = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom/server\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _server2 = _interopRequireDefault(_server);
	
	var _jsYaml = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"js-yaml\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _jsYaml2 = _interopRequireDefault(_jsYaml);
	
	var _yamlFrontMatter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"yaml-front-matter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _yamlFrontMatter2 = _interopRequireDefault(_yamlFrontMatter);
	
	var _fs = __webpack_require__(/*! fs */ 1);
	
	var _path = __webpack_require__(/*! path */ 2);
	
	var _Body = __webpack_require__(/*! ../templates/server/Body */ 3);
	
	var _Body2 = _interopRequireDefault(_Body);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function getDirectories(srcpath) {
	    return (0, _fs.readdirSync)(srcpath).filter(function (file) {
	        return (0, _fs.statSync)((0, _path.join)(srcpath, file)).isDirectory();
	    });
	}
	function parseQuestions() {
	    var questions = [];
	    _jsYaml2.default.safeLoadAll((0, _fs.readFileSync)('./tutorial/questions.yaml').toString(), function (doc) {
	        doc.type = 'question';
	        questions.push(doc);
	    });
	    return questions.map(function (q, i) {
	        q.index = i;return q;
	    });
	}
	function parseTopics() {
	    var pages = [];
	    getDirectories('./tutorial/topics').map(function (dir, i, dirs) {
	        var configFile = (0, _fs.readFileSync)((0, _path.join)('tutorial', 'topics', dir, 'config.yaml')).toString();
	        var configYaml = _jsYaml2.default.safeLoad(configFile);
	        pages.push({
	            type: 'topic_title',
	            topic_id: i,
	            title: configYaml.title
	        });
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = (0, _fs.readdirSync)((0, _path.join)('tutorial', 'topics', dir))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var file = _step.value;
	
	                if (file !== 'config.yaml') {
	                    var contentObj = _yamlFrontMatter2.default.loadFront((0, _fs.readFileSync)((0, _path.join)('tutorial', 'topics', dir, file)));
	                    contentObj.topic_id = i;
	                    pages.push(contentObj);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	    });
	    return pages;
	}
	function build() {
	    var _Array;
	
	    var context = {
	        title: 'Hello!',
	        pages: (_Array = Array()).concat.apply(_Array, _toConsumableArray(parseTopics()).concat(_toConsumableArray(parseQuestions())))
	    };
	    (0, _fs.writeFileSync)('./dist/props.json', JSON.stringify(context));
	    var indexHtml = _server2.default.renderToStaticMarkup((0, _Body2.default)(context));
	    (0, _fs.writeFileSync)('./dist/index.html', indexHtml);
	}
	build();

/***/ },
/* 1 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 2 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/*!***************************************!*\
  !*** ./src/templates/server/Body.tsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (props) {
	    return _react2.default.createElement(
	        'html',
	        { lang: 'en' },
	        _react2.default.createElement(Head, { title: props.title }),
	        _react2.default.createElement(
	            'body',
	            null,
	            _react2.default.createElement('div', { id: 'root' }),
	            _react2.default.createElement('script', { src: 'client.bundle.js' })
	        )
	    );
	};
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Head(props) {
	    return _react2.default.createElement(
	        'head',
	        null,
	        _react2.default.createElement('meta', { charSet: 'utf-8' }),
	        _react2.default.createElement(
	            'title',
	            null,
	            props.title
	        ),
	        _react2.default.createElement('link', { rel: 'stylesheet', href: 'styles.css' })
	    );
	}

/***/ },
/* 4 */
/*!**************************!*\
  !*** ./~/react/react.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./lib/React\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/***/ }
/******/ ]);
//# sourceMappingURL=builder.bundle.js.map