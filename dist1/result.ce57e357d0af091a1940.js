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

/***/ "./src/js/result.js":
/*!**************************!*\
  !*** ./src/js/result.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_result_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/result.css */ "./src/css/result.css");
/* harmony import */ var _css_result_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_result_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zepto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zepto */ "./node_modules/zepto/dist/zepto.js");
/* harmony import */ var zepto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zepto__WEBPACK_IMPORTED_MODULE_1__);



const result = {
    init: ()=>{
        result.getData();
    },
    getData: ()=>{
        let container = zepto__WEBPACK_IMPORTED_MODULE_1___default()('.container .list');
        zepto__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
            url: '/app/list.php',
            type: 'GET',
            dataType: 'json',
            success: (data = {})=>{
                let state = data.state
                let htmls = [];
                if(state != 1){
                    alert('请求出错，请刷新页面');
                    return false;
                }

                htmls.push('<ul>');
                data.list.forEach((item, index)=>{
                    htmls.push(`<li>`)
                    htmls.push(`    <em>${index+1}</em>`)
                    htmls.push(`    <p>姓名：${item.name}</p>`)
                    htmls.push(`    <p>分数：${item.score}</p>`)
                    htmls.push(`    <p>时间：${item.time}</p>`)
                    htmls.push(`</li>`)
                })

                if(data.list.length == 0){
                    htmls.push('<p style="text-align: center;margin: 100px;">还没有人参与</p>')
                }
                htmls.push('</ul>');

                container.html(htmls.join(''))
            },
            error: ()=>{
                alert('请求出错，请刷新页面')
            }

        })
    }
}

result.init();

/***/ })

},[["./src/js/result.js","manifest","vendor"]]]);
//# sourceMappingURL=result.ce57e357d0af091a1940.js.map