(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js!./src/css/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader!./src/css/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,body{\r\n    min-height: 100%;\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\nem {\r\n    font-style: normal;\r\n}\r\n.heightFullScreen, .heightFullScreen body {\r\n    height: 100%;\r\n}\r\n.first{\r\n    position: relative;\r\n    height: 100%;\r\n    background:#cc1011 url(" + escape(__webpack_require__(/*! ../img/index-bj.png */ "./src/img/index-bj.png")) + ") no-repeat center 10px;\r\n    background-size: 251px 208px;\r\n    color: #f3fec2;\r\n    text-align: center;\r\n}\r\n.first h1{\r\n    text-align: center;\r\n    line-height: 50px;\r\n}\r\n.first .index-input{\r\n    height: 40px;\r\n    line-height: 40px;\r\n    width: 200px;\r\n    border: 0;\r\n    border-radius: 2px;\r\n    background: #f3fec2;\r\n    padding: 5px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    color: #333;\r\n    position: absolute;\r\n    bottom: 220px;\r\n    left: 50%;\r\n    margin-left: -100px;\r\n}\r\n.first .index-button{\r\n    position: absolute;\r\n    left: 50%;;\r\n    bottom: 100px;\r\n    width: 200px;\r\n    height: 40px;\r\n    background: url(" + escape(__webpack_require__(/*! ../img/index-button.png */ "./src/img/index-button.png")) + ");\r\n    text-align: center;\r\n    margin-left: -100px;\r\n    background-size: 200px 40px;\r\n}\r\n.subject {\r\n    height: 100%;\r\n    background: #fdf8f1;\r\n    padding: 0 10px;\r\n    font-size: 14px;\r\n}\r\n.subject .tips{\r\n    margin: 20px 0 200px 0;\r\n    line-height: 25px;\r\n    font-size: 16px;\r\n}\r\n.subject header{\r\n    background: #cc1011;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    color: #f3fec2;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    margin: 0 -10px;\r\n}\r\n.subject .message{\r\n    font-size: 14px;\r\n    margin: 7px 0 5px;\r\n    color: #cc1011;\r\n}\r\n.subject .message .time{\r\n    float: right;\r\n}\r\n\r\n.subject .subject_con .list-title{\r\n    color: #333;\r\n    border-bottom: #e8dcca solid 1px;\r\n    font-size: 14px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n}\r\n.subject .subject_con h3{\r\n    margin: 10px 0;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    padding: 0 5px;\r\n    color: #333;\r\n    line-height: 22px;\r\n}\r\n.subject .subject_con li {\r\n    position: relative;\r\n    line-height: 20px;\r\n    background: #fdffff;\r\n    cursor: pointer;\r\n    border-top: 0;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: #a56813;\r\n    border-radius: 6px;\r\n    padding: 10px 5px 10px 40px;\r\n}\r\n.subject .subject_con li::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 13px;\r\n    height: 13px;\r\n    left: 12px;\r\n    top: 50%;\r\n    margin-top: -6px;\r\n    background-image: url(" + escape(__webpack_require__(/*! ../img/option.png */ "./src/img/option.png")) + ");\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    -webkit-background-size: cover;\r\n    background-size: cover;\r\n    background-position: 0 0;\r\n}\r\n\r\n.subject .subject_con .active::before {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../img/select.png */ "./src/img/select.png")) + ");\r\n}\r\n\r\n.subject .buttons{\r\n    overflow: hidden;\r\n    text-align: center;\r\n    margin-top: 26px;\r\n    margin-bottom: 15px;\r\n}\r\n.subject .buttons a {\r\n    display: inline-block;\r\n    font-size: 12px;\r\n    position: relative;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    zoom: 1;\r\n    background: #cc1011;\r\n    color: #f3fec2;\r\n    text-decoration: none;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 180px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    font-weight: 700;\r\n}\r\n.subject .buttons .disable{\r\n    opacity: 0.3;\r\n}\r\n\r\n.result{\r\n    height: 100%;\r\n    background: #cc1011;\r\n    color: #f3fec2;\r\n    font-size: 44px;\r\n    font-weight: 700;\r\n    text-align: center;    \r\n}\r\n.result div{\r\n    padding: 100px 10px 0 10px;\r\n}\r\n.result .score{\r\n    display: block;\r\n    margin-top: 20px;\r\n    margin-bottom: 50px;\r\n}\r\n.result .text{\r\n    font-size: 26px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./index.css */ "./node_modules/css-loader/index.js!./src/css/index.css");

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

/***/ "./src/img/index-bj.png":
/*!******************************!*\
  !*** ./src/img/index-bj.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c349399d077a3d8a4ca62cf7c5e4d59a.png";

/***/ }),

/***/ "./src/img/index-button.png":
/*!**********************************!*\
  !*** ./src/img/index-button.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c5c5687f950ecc2d99ad34c68a61d3f0.png";

/***/ }),

/***/ "./src/img/option.png":
/*!****************************!*\
  !*** ./src/img/option.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b8de6212e0b8d1caaf75a7f76f172c5.png";

/***/ }),

/***/ "./src/img/select.png":
/*!****************************!*\
  !*** ./src/img/select.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7d66a2d694bc1aa3cc14fbbd3e6258ba.png";

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zepto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zepto */ "./node_modules/zepto/dist/zepto.js");
/* harmony import */ var zepto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zepto__WEBPACK_IMPORTED_MODULE_2__);




const questions1 = [{
        title: '中国共产党第十九次全国代表大会，是在全面建成小康社会决胜阶段、中国特色社会主义进入_____的关键时期召开的一次十分重要的大会。',
        item: [
            '新时期',
            '新阶段',
            '新征程',
            '新时代',
        ],
        answer:'D'
    },{
        title: '十九大的主题是：不忘初心，____，高举中国特色社会主义伟大旗帜，决胜全面建成小康社会，夺取新时代中国特色社会主义伟大胜利，为实现中华民族伟大复兴的中国梦不懈奋斗。',
        item: [
            '继续前进',
            '牢记使命',
            '方得始终',
            '砥砺前行',
        ],
        answer:'B'
    },{
        title: '中国共产党人的初心和使命，就是为中国人民____ ，为中华民族____。这个初心和使命是激励中国共产党人不断前进的根本动力。',
        item: [
            '谋幸福，谋未来',
            '谋生活，谋复兴',
            '谋幸福，谋复兴',
            '谋生活，谋未来',
        ],
        answer:'C'
    },{
        title: '五年来，我们统筹推进“____”总体布局、协调推进“____”战略布局，“十二五”规划胜利完成，“十三五”规划顺利实施，党和国家事业全面开创新局面。',
        item: [
            '五位一体　四个全面',
            '四位一体　五个全面',
            '五个全面　四位一体',
            '四个全面　五位一体',
        ],
        answer:'A'
    },{
        title: '过去五年，经济保持中高速增长，在世界主要国家中名列前茅，国内生产总值从五十四万亿元增长到____万亿元，稳居世界第二，对世界经济增长贡献率超过百分之三十。',
        item: [
            '六十',
            '七十',
            '八十',
            '九十',
        ],
        answer:'C'
    },{
        title: '脱贫攻坚战取得决定性进展，____贫困人口稳定脱贫，贫困发生率从百分之十点二下降到百分之四以下。',
        item: [
            '六千多万',
            '七千多万',
            '八千多万',
            '九千多万',
        ],
        answer:'A'
    },{
        title: '实施共建“一带一路”倡议，发起创办亚洲基础设施投资银行，设立丝路基金，举办首届“一带一路”国际合作高峰论坛、亚太经合组织领导人非正式会议、二十国集团领导人____峰会、金砖国家领导人____会晤、亚信峰会。',
        item: [
            '北京　南京',
            '杭州　厦门',
            '南京　北京',
            '厦门　杭州',
        ],
        answer:'B'
    },{
        title: '坚持反腐败无禁区、全覆盖、零容忍，坚定不移“打虎”、“拍蝇”、“猎狐”，____的目标初步实现，____的笼子越扎越牢，____的堤坝正在构筑，反腐败斗争压倒性态势已经形成并巩固发展。',
        item: [
            '不敢腐　不能腐　不想腐',
            '不能腐　不敢腐　不想腐',
            '不想腐　不敢腐　不能腐',
            '不敢腐　不想腐　不能腐',
        ],
        answer:'A'
    },{
        title: '经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的____。',
        item: [
            '未来方向',
            '未来方位',
            '历史方向',
            '历史方位',
        ],
        answer:'D'
    },{
        title: '中国特色社会主义进入新时代，我国社会主要矛盾已经转化为人民日益增长的____需要和____的发展之间的矛盾。',
        item: [
            '美好生活　不充分不平衡',
            '幸福生活　不平衡不充分',
            '幸福生活　不充分不平衡',
            '美好生活　不平衡不充分',
        ],
        answer:'D'
    },{
        title: '必须认识到，我国社会主要矛盾的变化，没有改变我们对我国社会主义所处历史阶段的判断，我国仍处于并将长期处于____的基本国情没有变，我国是世界最大发展中国家的国际地位没有变。',
        item: [
            '社会主义阶段',
            '社会主义初级阶段',
            '社会主义中级阶段',
            '社会主义高级阶段',
        ],
        answer:'B'
    },{
        title: '_____是实现社会主义现代化、创造人民美好生活的必由之路。',
        item: [
            '中国特色社会主义道路',
            '中国特色社会主义理论体系',
            '中国特色社会主义制度',
            '中国特色社会主义文化',
        ],
        answer:'A'
    },{
        title: '_____是指导党和人民实现中华民族伟大复兴的正确理论。',
        item: [
            '中国特色社会主义道路',
            '中国特色社会主义理论体系',
            '中国特色社会主义制度',
            '中国特色社会主义文化',
        ],
        answer:'B'
    },{
        title: '_____是当代中国发展进步的根本制度保障。',
        item: [
            '中国特色社会主义道路',
            '中国特色社会主义理论体系',
            '中国特色社会主义制度',
            '中国特色社会主义文化',
        ],
        answer:'C'
    },{
        title: '_____是激励全党全国各族人民奋勇前进的强大精神力量。',
        item: [
            '中国特色社会主义道路',
            '中国特色社会主义理论体系',
            '中国特色社会主义制度',
            '中国特色社会主义文化',
        ],
        answer:'D'
    },{
        title: '新时代中国特色社会主义思想，明确坚持和发展中国特色社会主义，总任务是实现社会主义现代化和中华民族伟大复兴，在全面建成小康社会的基础上，分____在本世纪中叶建成富强民主文明和谐美丽的社会主义现代化强国。',
        item: [
            '两步走',
            '三步走',
            '四步走',
            '五步走',
        ],
        answer:'A'
    },{
        title: '新时代中国特色社会主义思想，明确中国特色社会主义最本质的特征是____。',
        item: [
            '“五位一体”总体布局',
            '建设中国特色社会主义法治体系',
            '人民利益为根本出发点',
            '中国共产党领导',
        ],
        answer:'D'
    },{
        title: '发展是解决我国一切问题的基础和关键，发展必须是科学发展，必须坚定不移贯彻____的发展理念。',
        item: [
            '创新、协调、绿色、开放、共享',
            '创造、协调、生态、开放、共享',
            '创新、统筹、绿色、开放、共享',
            '创造、统筹、生态、开放、共享',
        ],
        answer:'A'
    },{
        title: '____是中国特色社会主义的本质要求和重要保障。',
        item: [
            '全面依法治国',
            '全面从严治党',
            '全面发展经济',
            '全面可持续发展',
        ],
        answer:'A'
    },{
        title: '____是一个国家、一个民族发展中更基本、更深沉、更持久的力量。',
        item: [
            '道路自信',
            '理论自信',
            '制度自信',
            '文化自信',
        ],
        answer:'D'
    },{
        title: '必须统筹国内国际两个大局，始终不渝走和平发展道路、奉行____的开放战略。',
        item: [
            '互利共赢',
            '互相合作',
            '包容互信',
            '开放共赢',
        ],
        answer:'A'
    },{
        title: '从现在到二〇二〇年，是全面建成小康社会______。',
        item: [
            '决战期',
            '决胜期',
            '关键期',
            '攻坚期',
        ],
        answer:'B'
    },{
        title: '从____到____，是“两个一百年”奋斗目标的历史交汇期。',
        item: [
            '二〇二〇年　二〇三五年',
            '十九大　二十大',
            '二十大　二十一大',
            '二〇三五年　本世纪中叶',
        ],
        answer:'B'
    },{
        title: '综合分析国际国内形势和我国发展条件，从二〇二〇年到本世纪中叶可以分两个阶段来安排。第一个阶段，从______到______，在全面建成小康社会的基础上，再奋斗十五年，基本实现社会主义现代化。',
        item: [
            '二〇二〇年　二〇三五年',
            '二〇二五年　二〇四〇年',
            '二〇三〇年　二〇四五年',
            '二〇三五年　本世纪中叶',
        ],
        answer:'A'
    },{
        title: '综合分析国际国内形势和我国发展条件，从二〇二〇年到本世纪中叶可以分两个阶段来安排。第二个阶段，从_____到_____，在基本实现现代化的基础上，再奋斗十五年，把我国建成富强民主文明和谐美丽的社会主义现代化强国。',
        item: [
            '二〇二〇年　二〇三五年',
            '二〇三五年　二〇五〇年',
            '二〇三〇年　二〇四五年',
            '二〇三五年　本世纪中叶',
        ],
        answer:'D'
    },{
        title: '从全面建成小康社会到基本实现现代化，再到全面建成____，是新时代中国特色社会主义发展的战略安排。',
        item: [
            '创新型国家',
            '社会主义现代化强国',
            '社会主义现代化大国',
            '世界一流强国',
        ],
        answer:'B'
    },{
        title: '实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦，不断提高人民生活水平，必须坚定不移把_____作为党执政兴国的第一要务。',
        item: [
            '创新',
            '改革',
            '发展',
            '开放',
        ],
        answer:'C'
    },{
        title: '我国经济已由______阶段转向______阶段，正处在转变发展方式、优化经济结构、转换增长动力的攻关期，建设现代化经济体系是跨越关口的迫切要求和我国发展的战略目标。',
        item: [
            '高速增长　高水平发展',
            '高速发展　高水平发展',
            '高速增长　高质量发展',
            '高速发展　高质量发展',
        ],
        answer:'C'
    },{
        title: '贯彻新发展理念，建设现代化经济体系，必须坚持质量第一、效益优先，以_______为主线。',
        item: [
            '转变发展方式',
            '优化经济结构',
            '供给侧结构性改革',
            '转换增长动力',
        ],
        answer:'C'
    },{
        title: '建设现代化经济体系，必须把发展经济的着力点放在______上，把提高供给体系质量作为主攻方向，显著增强我国经济质量优势。',
        item: [
            '实体经济',
            '共享经济',
            '虚拟经济',
            '国民经济',
        ],
        answer:'A'
    },{
        title: '______是引领发展的第一动力，是建设现代化经济体系的战略支撑。',
        item: [
            '改革',
            '创新',
            '开放',
            '科技',
        ],
        answer:'B'
    },{
        title: '保持土地承包关系稳定并长久不变，第二轮土地承包到期后再延长_____年。',
        item: [
            '二十',
            '三十',
            '四十',
            '五十',
        ],
        answer:'B'
    },{
        title: '确保到______我国现行标准下农村贫困人口实现脱贫，贫困县全部摘帽，解决区域性整体贫困，做到脱真贫、真脱贫。',
        item: [
            '二〇三〇年',
            '二〇二〇年',
            '二〇二五年',
            '二〇三五年',
        ],
        answer:'B'
    },{
        title: '加快完善社会主义市场经济体制。经济体制改革必须以________和________为重点，实现产权有效激励、要素自由流动、价格反应灵活、竞争公平有序、企业优胜劣汰。',
        item: [
            '完善产权制度　要素市场化配置',
            '要素市场化配置　建立现代财政制度',
            '建立现代财政制度　创新和完善宏观调控',
            '完善产权制度　创新和完善宏观调控',
        ],
        answer:'A'
    },{
        title: '推动形成全面开放新格局。要以_____建设为重点，坚持引进来和走出去并重，遵循共商共建共享原则，加强创新能力开放合作，形成陆海内外联动、东西双向互济的开放格局。',
        item: [
            '“金砖机制”',
            '自贸区',
            '“一带一路”',
            '区域合作',
        ],
        answer:'C'
    },{
        title: '赋予自由贸易试验区更大改革自主权，探索建设______。',
        item: [
            '自由贸易城',
            '自由贸易区',
            '自由贸易港',
            '自由贸易市',
        ],
        answer:'C'
    },{
        title: '坚持党的领导、人民当家作主、依法治国有机统一。_______是社会主义民主政治的本质特征。',
        item: [
            '党的领导',
            '人民当家作主',
            '依法治国',
            '政治体制改革',
        ],
        answer:'B'
    },{
        title: '加强人民当家作主制度保障。______是坚持党的领导、人民当家作主、依法治国有机统一的根本政治制度安排。',
        item: [
            '人民代表大会制度',
            '多党合作和政治协商制度',
            '民族区域自治制度',
            '基层群众自治制度',
        ],
        answer:'A'
    },{
        title: '发挥社会主义协商民主重要作用。______是具有中国特色的制度安排，是社会主义协商民主的重要渠道和专门协商机构。',
        item: [
            '政党协商',
            '人大协商',
            '基层协商',
            '人民政协',
        ],
        answer:'D'
    },{
        title: '深化依法治国实践。成立中央全面______领导小组，加强对法治中国建设的统一领导。',
        item: [
            '深化改革',
            '依法治国',
            '从严治党',
            '司法改革',
        ],
        answer:'B'
    },{
        title: '深化机构和行政体制改革。转变政府职能，深化简政放权，创新监管方式，增强政府公信力和执行力，建设人民满意的______政府。',
        item: [
            '法治',
            '创新型',
            '廉洁',
            '服务型',
        ],
        answer:'D'
    },{
        title: '全党必须牢记，______的问题，是检验一个政党、一个政权性质的试金石。',
        item: [
            '为什么人',
            '执政宗旨',
            '建党宗旨',
            '权力来源',
        ],
        answer:'A'
    },{
        title: '建设______是中华民族伟大复兴的基础工程。',
        item: [
            '经济强国',
            '政治强国',
            '教育强国',
            '文化强国',
        ],
        answer:'C'
    },{
        title: '国家安全是安邦定国的重要基石，______是全国各族人民根本利益所在。',
        item: [
            '加快经济发展',
            '维护国家统一',
            '促进国际合作',
            '维护国家安全',
        ],
        answer:'D'
    },{
        title: '我们要建设的现代化是人与自然_____的现代化。',
        item: [
            '和谐相处',
            '和睦相处',
            '和谐共生',
            '和睦共生',
        ],
        answer:'C'
    },{
        title: '加快建立绿色生产和消费的法律制度和政策导向，建立健全____的经济体系。',
        item: [
            '绿色低碳循环发展',
            '绿色节约循环发展',
            '绿色低碳节约发展',
            '节约低碳循环发展',
        ],
        answer:'A'
    },{
        title: '加强对生态文明建设的总体设计和组织领导，设立________机构。',
        item: [
            '国有自然资源资产管理和自然环境监管',
            '国有自然资源资产管理和自然生态监管',
            '国有自然资源资产监管和自然生态管理',
            '国有自然环境资产监管和自然生态管理',
        ],
        answer:'B'
    },{
        title: '我们要牢固树立社会主义生态文明观，推动形成______现代化建设新格局，为保护生态环境作出我们这代人的努力！',
        item: [
            '人与自然和谐共生',
            '人与环境和谐发展',
            '人与自然和谐发展',
            '人与环境和谐共生',
        ],
        answer:'C'
    },{
        title: '适应世界新军事革命发展趋势和国家安全需求，提高建设质量和效益，确保到二〇二〇年基本实现____，____建设取得重大进展，____有大的提升。',
        item: [
            '现代化　信息化　战斗能力',
            '机械化　信息化　战斗能力',
            '机械化　信息化　战略能力',
            '现代化　信息化　战略能力',
        ],
        answer:'C'
    },{
        title: '力争到二〇三五年____国防和军队现代化，到本世纪中叶把人民军队____世界一流军队。',
        item: [
            '全面实现　基本建成',
            '全面实现　全面建成',
            '基本实现　基本建成',
            '基本实现　全面建成',
        ],
        answer:'D'
    },{
        title: '树立____是核心战斗力的思想，推进重大技术创新、自主创新，加强军事人才培养体系建设，建设创新型人民军队。',
        item: [
            '创新',
            '科技',
            '人才',
            '技术',
        ],
        answer:'B'
    },{
        title: '军队是要准备打仗的，一切工作都必须坚持____标准，向能打仗、打胜仗聚焦。',
        item: [
            '战斗力',
            '斗争力',
            '战争力',
            '硬实力',
        ],
        answer:'A'
    },{
        title: '解决台湾问题、实现祖国完全统一，是全体中华儿女____，是中华民族____所在。',
        item: [
            '一致愿望　根本利益',
            '共同愿望　本质利益',
            '一致愿望　本质利益',
            '共同愿望　根本利益',
        ],
        answer:'D'
    },{
        title: '______是两岸关系的政治基础。',
        item: [
            '“九二共识”',
            '反对“台独”',
            '一个中国原则',
            '和平统一',
        ],
        answer:'C'
    },{
        title: '我们呼吁，各国人民同心协力，构建人类命运共同体，建设______的世界。',
        item: [
            '持久和平、普遍安全、共同繁荣、开放包容、公平正义',
            '持久和平、普遍安全、共同繁荣、公平正义、清洁美丽',
            '持久和平、普遍安全、共同繁荣、开放包容、清洁美丽',
            '持久和平、普遍安全、公平正义、开放包容、清洁美丽',
        ],
        answer:'C'
    },{
        title: '深刻认识党面临的________的尖锐性和严峻性，坚持问题导向，保持战略定力，推动全面从严治党向纵深发展。',
        item: [
            '精神懈怠危险、能力不足危险、脱离群众危险、消极腐败危险',
            '精神懈怠危险、封闭僵化危险、脱离群众危险、消极腐败危险',
            '精神懈怠危险、能力不足危险、官僚主义危险、消极腐败危险',
            '精神懈怠危险、能力不足危险、脱离群众危险、腐化堕落危险',
        ],
        answer:'A'
    },{
        title: '党的____是党的根本性建设，决定党的建设方向和效果。',
        item: [
            '思想建设',
            '政治建设',
            '组织建设',
            '制度建设',
        ],
        answer:'B'
    },{
        title: '要尊崇党章，严格执行新形势下党内政治生活若干准则，增强党内政治生活的____。',
        item: [
            '政治性、时代性、原则性、战斗性',
            '思想性、政治性、时代性、原则性',
            '政治性、思想性、时代性、原则性',
            '政治性、思想性、时代性、战斗性',
        ],
        answer:'A'
    },{
        title: '坚决防止和反对_________，坚决防止和反对宗派主义、圈子文化、码头文化，坚决反对搞两面派、做两面人。',
        item: [
            '个人主义、享乐主义、自由主义、本位主义、好人主义',
            '个人主义、分散主义、山头主义、本位主义、好人主义',
            '个人主义、分散主义、自由主义、本位主义、好人主义',
            '个人主义、分散主义、自由主义、本位主义、享乐主义',
        ],
        answer:'C'
    },{
        title: '_____和_____，是中国共产党人的精神支柱和政治灵魂，也是保持党的团结统一的思想基础。',
        item: [
            '共产主义远大理想　新时代中国特色社会主义共同理想',
            '共产主义远大理想　中国特色社会主义共同理想',
            '共产主义崇高理想　新时代中国特色社会主义共同理想',
            '共产主义崇高理想　中国特色社会主义共同理想',
        ],
        answer:'B'
    },{
        title: '要坚持党管干部原则，_____，把好干部标准落到实处。',
        item: [
            '坚持立场坚定、素质过硬，坚持五湖四海、任人唯贤，坚持事业为上、公道正派',
            '坚持德才兼备、以德为先，坚持立场坚定、素质过硬，坚持事业为上、公道正派',
            '坚持德才兼备、以德为先，坚持五湖四海、任人唯贤，坚持立场坚定、素质过硬',
            '坚持德才兼备、以德为先，坚持五湖四海、任人唯贤，坚持事业为上、公道正派',
        ],
        answer:'D'
    },{
        title: '要以提升____为重点，突出政治功能，把企业、农村、机关、学校、科研院所、街道社区、社会组织等基层党组织建设成为宣传党的主张、贯彻党的决定、领导基层治理、团结动员群众、推动改革发展的坚强战斗堡垒。',
        item: [
            '凝聚力',
            '领导力',
            '组织力',
            '战斗力',
        ],
        answer:'C'
    },{
        title: '要坚持无禁区、全覆盖、零容忍，坚持_______，坚持受贿行贿一起查，坚决防止党内形成利益集团。',
        item: [
            '重预防、强高压、长震慑',
            '重遏制、强高压、长震慑',
            '重遏制、不减压、长震慑',
            '重遏制、强高压、长威慑',
        ],
        answer:'B'
    },{
        title: '增强党自我净化能力，根本靠强化____和____。',
        item: [
            '党的自我监督　舆论监督',
            '党的自我监督　群众监督',
            '党的自我监督　司法监督',
            '党的自我监督　民主监督',
        ],
        answer:'B'
    },{
        title: '推进_____，建设覆盖纪检监察系统的检举举报平台。强化不敢腐的震慑，扎牢不能腐的笼子，增强不想腐的自觉，通过不懈努力换来海晏河清、朗朗乾坤。',
        item: [
            '监察领域国家立法',
            '预防腐败国家立法',
            '反腐败国家立法',
            '廉政国家立法',
        ],
        answer:'C'
    }
]

const questions2 = [{
        title: '全党同志一定要永远与人民____、____、____，永远把人民对美好生活的向往作为奋斗目标，以永不懈怠的精神状态和一往无前的奋斗姿态，继续朝着实现中华民族伟大复兴的宏伟目标奋勇前进。',
        item: [
            '同呼吸',
            '共命运',
            '手牵手',
            '心连心',
        ],
        answer:'ABD'
    },{
        title: '过去五年，开放型经济新体制逐步健全，____、____、____稳居世界前列。',
        item: [
            '对外贸易',
            '对外投资',
            '外汇储备',
            '外汇支出',
        ],
        answer:'ABC'
    },{
        title: '科学立法、严格执法、公正司法、全民守法深入推进，____、____、____建设相互促进，中国特色社会主义法治体系日益完善，全社会法治观念明显增强。',
        item: [
            '法治生活',
            '法治国家',
            '法治政府',
            '法治社会',
        ],
        answer:'BCD'
    },{
        title: '引导应对气候变化国际合作，成为全球生态文明建设的重要____、____、____。',
        item: [
            '参与者',
            '贡献者',
            '引领者',
            '领导者',
        ],
        answer:'ABC'
    },{
        title: '出台中央八项规定，严厉整治____、____、____和____，坚决反对特权。',
        item: [
            '形式主义',
            '官僚主义',
            '享乐主义',
            '奢靡之风',
            '个人主义',
        ],
        answer:'ABCD'
    },{
        title: '五年来，我们勇于面对党面临的重大风险考验和党内存在的突出问题，以顽强意志品质正风肃纪、反腐惩恶，消除了党和国家内部存在的严重隐患，党内政治生活气象更新，党内政治生态明显好转，党的_______显著增强。',
        item: [
            '创造力',
            '创新力',
            '凝聚力',
            '战斗力',
        ],
        answer:'ACD'
    },{
        title: '坚持______的要求，开展党的群众路线教育实践活动和“三严三实”专题教育，推进“两学一做”学习教育常态化制度化，全党理想信念更加坚定、党性更加坚强。',
        item: [
            '照镜子',
            '正衣冠',
            '洗洗澡',
            '治治病',
        ],
        answer:'ABCD'
    },{
        title: '这个新时代，是____。',
        item: [
            '承前启后、继往开来、在新的历史条件下继续夺取中国特色社会主义伟大胜利的时代',
            '决胜全面建成小康社会、进而全面建设社会主义现代化强国的时代',
            '全国各族人民团结奋斗、不断创造美好生活、逐步实现全体人民共同富裕的时代',
            '全体中华儿女勠力同心、奋力实现中华民族伟大复兴中国梦的时代',
            '我国日益走近世界舞台中央、不断为人类作出更大贡献的时代',
        ],
        answer:'ABCDE'
    },{
        title: '全党要更加自觉地增强____、____、____、____，既不走封闭僵化的老路，也不走改旗易帜的邪路，保持政治定力，坚持实干兴邦，始终坚持和发展中国特色社会主义。',
        item: [
            '道路自信',
            '理论自信',
            '制度自信',
            '文化自信',
            '思想自信',
        ],
        answer:'ABCD'
    },{
        title: '新时代中国特色社会主义思想，是_____，必须长期坚持并不断发展。',
        item: [
            '对马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观的继承和发展',
            '马克思主义中国化最新成果',
            '党和人民实践经验和集体智慧的结晶',
            '中国特色社会主义理论体系的重要组成部分',
            '全党全国人民为实现中华民族伟大复兴而奋斗的行动指南',
        ],
        answer:'ABCDE'
    },{
        title: '新时代坚持和发展中国特色社会主义的基本方略是____。',
        item: [
            '坚持党对一切工作的领导，坚持以人民为中心，坚持全面深化改革',
            '坚持新发展理念，坚持人民当家作主，坚持全面依法治国',
            '坚持社会主义核心价值体系，坚持在发展中保障和改善民生，坚持人与自然和谐共生',
            '坚持总体国家安全观，坚持党对人民军队的绝对领导，坚持“一国两制”和推进祖国统一',
            '坚持推动构建人类命运共同体，坚持全面从严治党',
        ],
        answer:'ABCDE'
    },{
        title: '党政军民学，东西南北中，党是领导一切的。必须增强____，自觉维护党中央权威和集中统一领导，自觉在思想上政治上行动上同党中央保持高度一致。',
        item: [
            '政治意识',
            '大局意识',
            '核心意识',
            '看齐意识',
            '纪律意识',
        ],
        answer:'ABCD'
    },{
        title: '建设一支____、____、____的人民军队，是实现“两个一百年”奋斗目标、实现中华民族伟大复兴的战略支撑。',
        item: [
            '听党指挥',
            '骁勇善战',
            '能打胜仗',
            '作风优良',
        ],
        answer:'ACD'
    },{
        title: '实施乡村振兴战略。______问题是关系国计民生的根本性问题，必须始终把解决好“三农”问题作为全党工作重中之重。',
        item: [
            '农业',
            '农村',
            '农民',
            '农田',
        ],
        answer:'ABC'
    },{
        title: '巩固和发展爱国统一战线。坚持______，支持民主党派按照中国特色社会主义参政党要求更好履行职能。',
        item: [
            '长期共存',
            '互相监督',
            '肝胆相照',
            '荣辱与共',
        ],
        answer:'ABCD'
    },{
        title: '提高就业质量和人民收入水平，鼓励勤劳守法致富，就要____。',
        item: [
            '扩大中等收入群体',
            '增加低收入者收入',
            '调节过高收入',
            '取缔非法收入',
        ],
        answer:'ABCD'
    },{
        title: '加强社会保障体系建设。坚持房子是用来住的、不是用来炒的定位，加快建立______的住房制度，让全体人民住有所居。',
        item: [
            '多主体供给',
            '多渠道保障',
            '租购并举',
            '多部门监管',
        ],
        answer:'ABC'
    },{
        title: '加强社会治理制度建设，完善党委领导、政府负责、社会协同、公众参与、法治保障的社会治理体制，提高社会治理________水平。',
        item: [
            '社会化',
            '法治化',
            '智能化',
            '专业化',
        ],
        answer:'ABCD'
    },{
        title: '必须坚持____、____、____为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，还自然以宁静、和谐、美丽。',
        item: [
            '事先预防',
            '节约优先',
            '保护优先',
            '自然恢复',
        ],
        answer:'BCD'
    },{
        title: '构建市场导向的绿色技术创新体系，发展绿色金融，壮大____、____、____。',
        item: [
            '节能环保产业',
            '清洁生产产业',
            '绿色科技产业',
            '清洁能源产业',
        ],
        answer:'ABD'
    },{
        title: '倡导简约适度、绿色低碳的生活方式，反对奢侈浪费和不合理消费，开展创建节约型机关、_____、_____、_____、_____等行动。',
        item: [
            '绿色家庭',
            '绿色学校',
            '绿色社区',
            '绿色城市',
            '绿色出行',
        ],
        answer:'ABCE'
    },{
        title: '提高污染排放标准，强化排污者责任，健全_______、_______、______等制度。',
        item: [
            '环保信用评价',
            '污染企业备案',
            '信息强制性披露',
            '严惩重罚',
        ],
        answer:'ACD'
    },{
        title: '完成_____、_____、_____三条控制线划定工作。',
        item: [
            '生态保护红线',
            '永久基本农田',
            '城镇开发边界',
            '国土绿化面积',
        ],
        answer:'ABC'
    },{
        title: '保持香港、澳门长期繁荣稳定，必须全面准确贯彻____的方针。',
        item: [
            '“一国两制”',
            '“港人治港”',
            '“澳人治澳”',
            '高度自治',
        ],
        answer:'ABCD'
    },{
        title: '要支持香港、澳门融入国家发展大局，以____、____、____等为重点，全面推进内地同香港、澳门互利合作。',
        item: [
            '粤港澳大湾区建设',
            '粤港澳合作',
            '粤港澳政府合作',
            '泛珠三角区域合作',
        ],
        answer:'ABD'
    },{
        title: '中国将高举___、___、___、___的旗帜，恪守维护世界和平、促进共同发展的外交政策宗旨。',
        item: [
            '和平',
            '发展',
            '合作',
            '共赢',
            '互惠',
        ],
        answer:'ABCD'
    },{
        title: '坚定不移在和平共处五项原则基础上发展同各国的友好合作，推动建设____、____、____的新型国际关系。',
        item: [
            '相互尊重',
            '公平正义',
            '互不干涉',
            '合作共赢',
        ],
        answer:'ABD'
    },{
        title: '世界正处于大发展大变革大调整时期，和平与发展仍然是时代主题。____、____、____、____深入发展。',
        item: [
            '世界多极化',
            '经济全球化',
            '社会信息化',
            '文化多样化',
            '治理民主化',
        ],
        answer:'ABCD'
    },{
        title: '积极促进“一带一路”国际合作，努力实现____、____、____、____、____，打造国际合作新平台，增添共同发展新动力。',
        item: [
            '政策沟通',
            '设施联通',
            '贸易畅通',
            '人员互通',
            '资金融通',
            '民心相通',
        ],
        answer:'ABCEF'
    },{
        title: '要深刻认识党面临的____的长期性和复杂性。',
        item: [
            '执政考验',
            '改革开放考验',
            '市场经济考验',
            '生态保护考验',
            '外部环境考验',
        ],
        answer:'ABCE'
    },{
        title: '新时代党的建设总要求是____________。',
        item: [
            '坚持和加强党的全面领导，坚持党要管党、全面从严治党',
            '以加强党的长期执政能力建设、先进性和纯洁性建设为主线，以党的政治建设为统领，以坚定理想信念宗旨为根基，以调动全党积极性、主动性、创造性为着力点',
            '全面推进党的政治建设、思想建设、组织建设、作风建设、纪律建设',
            '把制度建设贯穿其中，深入推进反腐败斗争，不断提高党的建设质量',
            '把党建设成为始终走在时代前列、人民衷心拥护、勇于自我革命、经得起各种风浪考验、朝气蓬勃的马克思主义执政党',
        ],
        answer:'ABCDE'
    },{
        title: '领导十三亿多人的社会主义大国，我们党既要政治过硬，也要本领高强。要_______。',
        item: [
            '增强学习本领，增强政治领导本领',
            '增强改革创新本领，增强科学发展本领',
            '增强依法执政本领，增强群众工作本领',
            '增强狠抓落实本领，增强驾驭风险本领',
        ],
        answer:'ABCD'
    },{
        title: '以____、____、____、____、____，把党内和党外、国内和国外各方面优秀人才集聚到党和人民的伟大奋斗中来。',
        item: [
            '识才的慧眼',
            '敬才的风度',
            '爱才的诚意',
            '用才的胆识',
            '容才的雅量',
            '聚才的良方',
        ],
        answer:'ACDEF'
    },{
        title: '青年兴则国家兴，青年强则国家强。青年一代____、____、____，国家就有前途，民族就有希望。',
        item: [
            '有品德',
            '有理想',
            '有本领',
            '有担当',
        ],
        answer:'BCD'
    },{
        title: '全党全国各族人民要紧密团结在党中央周围，高举中国特色社会主义伟大旗帜，锐意进取，埋头苦干，为实现推进现代化建设、完成祖国统一、维护世界和平与促进共同发展三大历史任务，为___________继续奋斗！',
        item: [
            '决胜全面建成小康社会',
            '夺取新时代中国特色社会主义伟大胜利',
            '全面建成社会主义现代化强国',
            '实现中华民族伟大复兴的中国梦',
            '实现人民对美好生活的向往',
        ],
        answer:'ABDE'
    }
]

const app = {
    init: ()=>{
        
        app.questions = app.generateQuestion()
        app.questions_num = app.questions.length
        app.subject_container = zepto__WEBPACK_IMPORTED_MODULE_2___default()('.subject')
        app.subject_con = zepto__WEBPACK_IMPORTED_MODULE_2___default()('#subject_con')
        app.submit_btn = zepto__WEBPACK_IMPORTED_MODULE_2___default()('.buttons .submit')

        app.bindEvent()
    },
    showRemainingTime: ()=>{
        let message_con = zepto__WEBPACK_IMPORTED_MODULE_2___default()('.message')
        let last_time_con
        let total_time = 300 //共5分钟，300秒

        message_con.html(`<p>剩余时间：<span id="last_time">5分0秒</span></p>`)

        last_time_con = zepto__WEBPACK_IMPORTED_MODULE_2___default()('#last_time')

        app.total_timer = setInterval(()=>{
            let last_time = --total_time
            let minute = Math.floor(last_time / 60)
            let second = last_time%60

            if(last_time == 0){
                clearInterval(app.total_timer)

                //自动交卷
                app.showList(app.questions_num)
            }

            last_time_con.html(`${minute}分${second}秒`);
        },1000)
    },
    getTime: ()=>{
        let now = new Date;
        let year = now.getFullYear();
        let month = now.getMonth()+1;
        let date = now.getDate();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();

        if(month<10){
            month = "0" + month
        }
        if(date<10){
            date = "0" + date
        }
        if(hour<10){
            hour = "0" + hour
        }
        if(minute<10){
            minute = "0" + minute
        }
        if(second<10){
            second = "0" + second
        }
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
    },
    showList: (index=0)=>{
        let subject_container = app.subject_container
        let submit_btn = app.submit_btn
        let q_index = ['A','B','C','D','E','F','G','H']
        let htmls = []
        let question = app.questions[index]
        let timer

        if(index >= app.questions_num){
            subject_container.hide();

            app.showResult();
            return false;
        }

        if(index > -1){
            htmls.push(`<p class="list-title">当前第<em class="index">${index+1}</em>/<em class="count">${app.questions_num}</em>题</p>`)
            htmls.push(`<h3>${index+1}.${question.title}</h3>`)
            htmls.push(`<ul>`)
            question.item.forEach((item, index)=>{
                htmls.push(`    <li data-index="${q_index[index]}">${item}</li>`)
            })
            
            htmls.push(`</ul>`)
        }else{
            htmls.push('<div class="tips">');
            htmls.push('<p>测试说明：</p>');
            htmls.push('<p>    1、共20道题，需要在5分钟内答完；</p>');
            htmls.push('<p>    2、题中有单选，有多选，单选多选混合排列；</p>');
            htmls.push('</div>');
        }

        

        app.subject_con.html(htmls.join(''))

        //记录当前显示的索引
        app.curIndex = index;

        //题目更新后提交按钮置灰
        if(!submit_btn.hasClass('disable')){
            submit_btn.addClass('disable');
        }

        if(index == -1){
            submit_btn.html('开始测试 5s')
            let last_time = 4
            timer = setInterval(()=>{
                let str = '开始测试'
                if(last_time > 0){
                    str +=' ' + last_time + 's'
                    last_time--
                }else{
                    clearInterval(timer)
                    submit_btn.removeClass('disable')
                }
                submit_btn.html(str)
            },1000)
        }else if(index+1 == app.questions_num){
            submit_btn.html('完成测试')
        }else{
            submit_btn.html('下一题')
        }
    },
    showResult: ()=>{
        let result_container = zepto__WEBPACK_IMPORTED_MODULE_2___default()('.result')
        let result_score_con = zepto__WEBPACK_IMPORTED_MODULE_2___default()('#score')
        let result_text = ''
        let result_text_con = zepto__WEBPACK_IMPORTED_MODULE_2___default()('.result .text')
        let right_count = 0;
        let score = 0;

        app.questions.forEach((question)=>{
            if(question.selected === question.answer){
                right_count++;
            }
        })

        score = right_count*5

        if(score < 60){
            result_text = '啊哦，同志，请再努把力！'
        }else if(score < 80){
            result_text = '不错，请保持！'
        }else if(score == 100){
            result_text = '完全正确！'
        }

        result_score_con.html(score + '分');
        result_text_con.html(result_text)
        result_container.show();

        //清除答卷倒计时
        if(app.total_timer){
            clearInterval(app.total_timer)
        }
        
        
        zepto__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
            url: '/app/update.php',
            type: 'POST',
            dataType: 'json',
            data:{
                name: app.user_name,
                score: score,
                t: (new Date).getTime()
            },
            success: (data = {})=>{
                let state = data.state;

                if(state == 1){
                    alert('提交成功')
                }else{
                    alert('提交失败')
                }
            },
            error: function(){
                alert('提交失败')
            }
        })
    },
    generateQuestion: ()=>{
        let _questions1
        let _questions2

        let getQuestions = (questions, num)=>{
            let questions_length = questions.length
            let results = [];
            let indexs = {};

            //如果列表总数小于需求量，则直接返回
            if(questions_length < num){
                return questions
            }

            while(results.length < num){
                let _index = Math.floor(Math.random() * questions_length)
                
                if(!indexs[_index]){
                    results.push(questions[_index])

                    indexs[_index] = "1"
                }
            }

            return results;
        }

        _questions1 = getQuestions(questions1, 14)
        _questions2 = getQuestions(questions2, 6)

        _questions2.forEach((item, index)=>{
            //_questions1的数组长度实时计算，这样插入的能均匀些，否则都在前面
            let _index = Math.floor(Math.random() * _questions1.length)

            //将_questions2结果随机插入_questions1
            _questions1.splice(_index,0,_questions2[index])
        })

        return _questions1
    },
    bindEvent: ()=>{
        let first_container = zepto__WEBPACK_IMPORTED_MODULE_2___default()('.first')
        let subject_container = app.subject_container
        let index_button = zepto__WEBPACK_IMPORTED_MODULE_2___default()('.index-button')
        let index_input = zepto__WEBPACK_IMPORTED_MODULE_2___default()('.index-input')
        let subject_con = app.subject_con
        let submit_btn = app.submit_btn

        index_button.on('click', ()=>{
            let user_name = zepto__WEBPACK_IMPORTED_MODULE_2___default.a.trim(index_input.val())

            if(!user_name){
                alert('请输入用户名!');
                index_input.focus();
                return false;
            }

            zepto__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
                url: '/app/save.php',
                type: 'POST',
                dataType: 'json',
                data:{
                    name: user_name,
                    t: (new Date).getTime()
                },
                success: (data = {})=>{
                    let state = data.state;
    
                    if(state != 1){
                        alert('用户名重复，请更换用户名')
                        return false;
                    }

                    //存储用户姓名
                    app.user_name = user_name;

                    first_container.hide()
                    app.showList(-1)
                    subject_container.show()

                },
                error: function(){
                    alert('程序异常，请刷新页面或稍后重试')
                }
            })

            
        });

        subject_con.on('click', 'li', (event)=>{
            let item = zepto__WEBPACK_IMPORTED_MODULE_2___default()(event.target)
            let actives_item
            let answers = [];
            item.toggleClass('active')

            actives_item = subject_con.find('li.active')

            //记录答案
            actives_item.forEach((item, index)=>{
                answers.push(zepto__WEBPACK_IMPORTED_MODULE_2___default()(item).data('index'))
            })

            if(actives_item.length){
                if(submit_btn.hasClass('disable')){
                    submit_btn.removeClass('disable')
                }
            }else{
                if(!submit_btn.hasClass('disable')){
                    submit_btn.addClass('disable')
                }
            }

            submit_btn.data('answers', answers.join(''))
        })

        submit_btn.on('click', function(event){
            let button = zepto__WEBPACK_IMPORTED_MODULE_2___default()(event.target)
            let answers = button.data('answers')
            if(button.hasClass('disable')){
                return false;
            }

            if(app.questions[app.curIndex]){
                app.questions[app.curIndex].selected = answers    
            }

            if(app.curIndex == -1){
                app.showRemainingTime();
            }

            app.showList(app.curIndex+1);
        })
    }
}

app.init();

/***/ })

},[["./src/js/app.js","manifest","vendor"]]]);
//# sourceMappingURL=main.b3371cb47f7c578ba682.js.map