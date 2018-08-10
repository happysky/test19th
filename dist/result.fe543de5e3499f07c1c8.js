(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["result"],{

/***/ "./node_modules/css-loader/index.js!./src/css/result.css":
/*!******************************************************!*\
  !*** ./node_modules/css-loader!./src/css/result.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,body{\r\n    min-height: 100%;\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\nem {\r\n    font-style: normal;\r\n}\r\n.header{\r\n    background: #cc1011;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    color: #f3fec2;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    font-weight: 700;\r\n}\r\n\r\n.list li{\r\n    position: relative;\r\n    line-height: 20px;\r\n    border-bottom: #ccc solid 1px;\r\n    padding: 10px 10px 10px 50px;\r\n}\r\n.list li em{\r\n    position: absolute;\r\n    left: 10px;\r\n    top: 10px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./src/css/result.css":
/*!****************************!*\
  !*** ./src/css/result.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./result.css */ "./node_modules/css-loader/index.js!./src/css/result.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js sync recursive":
/*!*********************!*\
  !*** ./src/js sync ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error('Cannot find module "' + req + '".');
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/js sync recursive";

/***/ }),

/***/ "./src/js/result.js":
/*!**************************!*\
  !*** ./src/js/result.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _result = __webpack_require__(/*! ../css/result.css */ "./src/css/result.css");

var _result2 = _interopRequireDefault(_result);

var _zepto = __webpack_require__(/*! zepto */ "./node_modules/zepto/dist/zepto.js");

var _zepto2 = _interopRequireDefault(_zepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var result = {
    init: function init() {
        result.getData();
        // require(['./app'],()=>{
        //     console.log('a');
        // })
        // require.ensure(['./app'],()=>{
        //     console.log('b');
        // })
        __webpack_require__("./src/js sync recursive").resolve('main', function () {
            console.log('c');
        });
    },
    getData: function getData() {
        var container = (0, _zepto2.default)('.container .list');
        _zepto2.default.ajax({
            url: '/app/list.php',
            type: 'GET',
            dataType: 'json',
            success: function success() {
                var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var state = data.state;
                var htmls = [];
                if (state != 1) {
                    alert('请求出错，请刷新页面');
                    return false;
                }

                htmls.push('<ul>');
                data.list.forEach(function (item, index) {
                    htmls.push('<li>');
                    htmls.push('    <em>' + (index + 1) + '</em>');
                    htmls.push('    <p>\u59D3\u540D\uFF1A' + item.name + '</p>');
                    htmls.push('    <p>\u5206\u6570\uFF1A' + item.score + '</p>');
                    htmls.push('    <p>\u65F6\u95F4\uFF1A' + item.time + '</p>');
                    htmls.push('</li>');
                });

                if (data.list.length == 0) {
                    htmls.push('<p style="text-align: center;margin: 100px;">还没有人参与</p>');
                }
                htmls.push('</ul>');

                container.html(htmls.join(''));
            },
            error: function error() {
                alert('请求出错，请刷新页面');
            }

        });
    }
};

result.init();

/***/ }),

/***/ 1:
/*!***********************************************!*\
  !*** multi babel-polyfill ./src/js/result.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! D:\product\git\test19th\src\js\result.js */"./src/js/result.js");


/***/ })

},[[1,"manifest","vendor"]]]);
//# sourceMappingURL=result.fe543de5e3499f07c1c8.js.map