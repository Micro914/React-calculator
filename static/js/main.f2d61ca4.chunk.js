(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,function(_,e,t){_.exports={"calculator-container":"Calculator_calculator-container__33HaL",calculator:"Calculator_calculator__120eB",grid:"Calculator_grid__1p3Rd",display1:"Calculator_display1__2TZBy",display2:"Calculator_display2__1vy_Q",clear:"Calculator_clear__4s35F",division:"Calculator_division__1897Z",multiplication:"Calculator_multiplication__1x0pC",substraction:"Calculator_substraction__3QifJ",addition:"Calculator_addition__1Gksl",equal:"Calculator_equal__x4w41",center:"Calculator_center__XYP_9",numButton:"Calculator_numButton__3ecuG",nonNumButton:"Calculator_nonNumButton__3lK7W"}},,,function(_,e,t){_.exports={header:"Title_header__1kPW0",titulo:"Title_titulo__3YY4L",title:"Title_title__CPzVW"}},,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Principal_Documents_React_Projects_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_Principal_Documents_React_Projects_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),currentNum=_useState2[0],setCurrentNum=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(C_Users_Principal_Documents_React_Projects_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],ops=["*","/","+","-"],updateCalc=function updateCalc(value){var arrValue=currentNum.split(" "),lastValueHasDecimal=arrValue[arrValue.length-1].indexOf(".")>-1&&"."===value;if(!(ops.includes(value)&&ops.includes(currentNum.slice(-1))||ops.includes(value)&&""===currentNum||lastValueHasDecimal)){if(currentNum.length>14)return setCurrentNum("Limit exceeded"),setResult("Limit exceeded");try{setCurrentNum(currentNum+value),ops.includes(value)||(setResult(eval(currentNum+value).toString()),setCurrentNum(currentNum+value))}catch(error){setCurrentNum(""),setResult("")}}},calculated=function calculated(){if(""!==currentNum)try{setCurrentNum(eval(currentNum).toString())}catch(error){alert(error.message),setCurrentNum("NaN"),setResult("NaN")}},clear=function(){""!==currentNum&&(setCurrentNum(""),setResult(""))},negativeNum=function negativeNum(value){""!==currentNum&&(setCurrentNum(eval(currentNum*value).toString()),setResult(eval(currentNum*value).toString()))};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["calculator-container"],children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.display1,children:currentNum||"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.display2,children:result||"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.clear,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:clear,className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nonNumButton,children:"CE"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.division,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("/")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nonNumButton,children:"/"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.multiplication,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("*")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nonNumButton,children:"x"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.substraction,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("-")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nonNumButton,children:"-"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.addition,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("+")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nonNumButton,children:"+"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.equal,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:calculated,className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nonNumButton,children:"="})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("7")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"7"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("8")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"8"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("9")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"9"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("4")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"4"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("5")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"5"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("6")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"6"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("1")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"1"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("2")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"2"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("3")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"3"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return negativeNum("-1")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"+/-"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("0")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"0"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc(".")},className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.numButton,children:"."})})]})})}__webpack_exports__.a=Calculator},function(_,e,t){_.exports={footer:"Footer_footer__2X_Mv"}},,,,,function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var a=t(2),c=t.n(a),u=t(6),l=t.n(u),r=(t(13),t(7)),s=t(4),n=t.n(s),E=t(0);var o=function(_){return Object(E.jsx)("header",{className:n.a.header,children:Object(E.jsx)("h1",{className:n.a.title,children:_.title})})},i=t(8),O=t.n(i);var d=function(){return Object(E.jsxs)("div",{className:O.a.footer,children:[Object(E.jsx)("h3",{children:"Designed and Coded By"}),Object(E.jsx)("p",{children:"Rolando Nevarez"})]})};var C=function(){return Object(E.jsxs)(c.a.Fragment,{children:[Object(E.jsx)(o,{title:"React Calculator"}),Object(E.jsx)(r.a,{}),Object(E.jsx)(d,{})]})};l.a.render(Object(E.jsx)(C,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.f2d61ca4.chunk.js.map