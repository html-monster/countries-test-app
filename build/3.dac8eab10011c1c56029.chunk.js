(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./app/components/List/index.js":function(e,t,n){"use strict";var r;n("./node_modules/react/index.js"),n("./node_modules/prop-types/index.js"),n("./app/components/List/style.scss");function o(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&s)for(var a in s)void 0===t[a]&&(t[a]=s[a]);else t||(t=s||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var s=o("div",{}),i=function(e){var t=e.component,n=e.items,r=e.keyName,i=void 0===r?"id":r,a=t,l=s;return l=n?n.map(function(e){return o(a,{item:e},"item-".concat(e[i]))}):o(a,{}),o("div",{className:"list-wrapper"},void 0,o("ul",{},void 0,l))};n.d(t,"a",function(){return i})},"./app/components/List/style.scss":function(e,t,n){var r=n("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/List/style.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./app/components/ListItem/index.js":function(e,t,n){"use strict";var r;n("./node_modules/react/index.js"),n("./node_modules/prop-types/index.js"),n("./app/components/ListItem/style.scss");function o(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&s)for(var a in s)void 0===t[a]&&(t[a]=s[a]);else t||(t=s||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var s=function(e){return o("li",{className:"list-item-wrapper"},void 0,o("div",{className:"list-item"},void 0,e.item))};n.d(t,"a",function(){return s})},"./app/components/ListItem/style.scss":function(e,t,n){var r=n("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/ListItem/style.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./app/containers/HomePage/index.js":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react-redux/lib/index.js"),o=n("./node_modules/redux/lib/redux.js"),s=n("./app/utils/injectReducer.js"),i=n("./app/utils/injectSaga.js"),a=Symbol(),l=Symbol(),c=Symbol();function d(e){return{type:c,payload:e}}var u=n("./node_modules/reselect/es/index.js"),p=Object(u.a)(function(e){return e.home},function(e){return e.regions});function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){m(e,t,n[t])})}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={regions:[],loading:!1,error:!1};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return f({},e,{loading:!1,regions:t.payload});case a:return f({},e,{loading:!0,error:!1});case c:return f({},e,{loading:!1,error:!0});default:return e}},v=n("./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.cjs.js"),h=n("./node_modules/ramda/src/index.js"),b=n("./app/utils/request.js"),g=regeneratorRuntime.mark(_),x=regeneratorRuntime.mark(w);function _(){var e,t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return"https://restcountries.eu/rest/v2/all?fields=region",n.prev=1,n.next=4,Object(v.call)(b.a,"https://restcountries.eu/rest/v2/all?fields=region");case 4:return e=n.sent,t=e.reduce(function(e,t){var n=t.region;return n&&!Object(h.find)(Object(h.propEq)("name",n),e)&&e.push({name:n}),e},[]),n.next=8,Object(v.put)({type:l,payload:t});case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(1),n.next=14,Object(v.put)(d());case 14:case"end":return n.stop()}},g,null,[[1,10]])}function w(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.takeEvery)(a,_);case 2:case"end":return e.stop()}},x)}n("./node_modules/react/index.js"),n("./node_modules/prop-types/index.js");var S,O=n("./node_modules/react-helmet/lib/Helmet.js"),k=n("./app/helpers/ErrorWrapper/index.js"),P=n("./app/helpers/LoaderWrapper/index.js"),R=n("./app/components/List/index.js"),E=n("./node_modules/react-router-dom/index.js"),L=n("./app/components/ListItem/index.js");function N(e,t,n,r){S||(S="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===s)t.children=r;else if(s>1){for(var a=new Array(s),l=0;l<s;l++)a[l]=arguments[l+3];t.children=a}return{$$typeof:S,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var W,C=function(e){var t=e.item,n=N("div",{className:"region-list-item"},void 0,N(E.Link,{className:"region-list-item__link",to:"/countries/".concat(t.name.toLowerCase())},void 0,N("span",{},void 0,t.name)));return N(L.a,{item:n},"region-list-item-".concat(t.name))};n("./app/containers/HomePage/style.scss");function I(e,t,n,r){W||(W="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===s)t.children=r;else if(s>1){for(var a=new Array(s),l=0;l<s;l++)a[l]=arguments[l+3];t.children=a}return{$$typeof:W,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var $=I(O.Helmet,{},void 0,I("title",{},void 0,"Home Page"),I("meta",{name:"description",content:"Get region"})),T=I("section",{className:"centered"},void 0,I("h1",{},void 0,"Regions")),H=function(e){var t=e.loading,n=e.error,r=e.regions,o=e.getRegion;return I("article",{},void 0,$,I("div",{className:"home-page page"},void 0,T,I("section",{className:"content"},void 0,!r.length&&!t&&I("button",{type:"submit",className:"btn btn-green",onClick:o},void 0,"Get regions"),I(k.a,{error:n},void 0,I(P.a,{loading:t},void 0,!!r.length&&I(R.a,{items:r,component:C,keyName:"name"}))))))};n.d(t,"mapDispatchToProps",function(){return A});var A=function(e){return{getRegion:function(){return e({type:a})}}},q=Object(r.connect)(function(e){return{regions:p(e),loading:e.home.loading,error:e.home.error}},A),D=Object(s.a)({key:"home",reducer:j}),F=Object(i.a)({key:"home",saga:w});t.default=Object(o.compose)(D,F,q)(H)},"./app/containers/HomePage/style.scss":function(e,t,n){var r=n("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/containers/HomePage/style.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./app/helpers/ErrorWrapper/index.js":function(e,t,n){"use strict";var r;n("./node_modules/react/index.js"),n("./node_modules/prop-types/index.js"),n("./app/helpers/ErrorWrapper/style.scss");function o(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&s)for(var a in s)void 0===t[a]&&(t[a]=s[a]);else t||(t=s||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var s=function(e){var t=e.error,n=e.errorMessage,r=void 0===n?"Something went wrong, please try again!":n,s=e.children;return t?o("div",{className:"error-wrapper"},void 0,o("strong",{},void 0,r)):s};s.defaultProps={error:!1};var i=s;n.d(t,"a",function(){return i})},"./app/helpers/ErrorWrapper/style.scss":function(e,t,n){var r=n("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/helpers/ErrorWrapper/style.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./app/helpers/LoaderWrapper/index.js":function(e,t,n){"use strict";n("./node_modules/react/index.js"),n("./node_modules/prop-types/index.js");var r,o=n("./app/components/LoadingIndicator/index.js");n("./app/helpers/LoaderWrapper/style.scss");function s(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&s)for(var a in s)void 0===t[a]&&(t[a]=s[a]);else t||(t=s||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var i=s("div",{className:"loader"},void 0,s(o.a,{})),a=function(e){var t=e.loading,n=e.children;return t?i:n};a.defaultProps={loading:!1};var l=a;n.d(t,"a",function(){return l})},"./app/helpers/LoaderWrapper/style.scss":function(e,t,n){var r=n("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/helpers/LoaderWrapper/style.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./app/utils/checkStore.js":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("./node_modules/lodash/conformsTo.js"),o=n.n(r),s=n("./node_modules/lodash/isFunction.js"),i=n.n(s),a=n("./node_modules/lodash/isObject.js"),l=n.n(a),c=n("./node_modules/invariant/browser.js"),d=n.n(c);function u(e){var t={dispatch:i.a,subscribe:i.a,getState:i.a,replaceReducer:i.a,runSaga:i.a,injectedReducers:l.a,injectedSagas:l.a};d()(o()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},"./app/utils/injectReducer.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n.n(r),s=n("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),i=n.n(s),a=n("./node_modules/react-redux/lib/index.js"),l=n("./node_modules/invariant/browser.js"),c=n.n(l),d=n("./node_modules/lodash/isEmpty.js"),u=n.n(d),p=n("./node_modules/lodash/isFunction.js"),f=n.n(p),m=n("./node_modules/lodash/isString.js"),y=n.n(m),j=n("./app/utils/checkStore.js"),v=n("./app/reducers.js");function h(e,t){return function(n,r){t||Object(j.a)(e),c()(y()(n)&&!u()(n)&&f()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(v.a)(e.injectedReducers)))}}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=e.key,n=e.reducer;return function(e){var r=function(r){function s(e,r){var o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),o=x(this,_(s).call(this,e,r)),(i=r.store,Object(j.a)(i),{injectReducer:h(i,!0)}).injectReducer(t,n),o}var i,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(s,o.a.Component),i=s,(a=[{key:"render",value:function(){return o.a.createElement(e,this.props)}}])&&g(i.prototype,a),l&&g(i,l),s}();return S(r,"WrappedComponent",e),S(r,"contextType",a.ReactReduxContext),S(r,"displayName","withReducer(".concat(e.displayName||e.name||"Component",")")),i()(r,e)}}},"./app/utils/injectSaga.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n.n(r),s=n("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),i=n.n(s),a=n("./node_modules/react-redux/lib/index.js"),l=n("./node_modules/lodash/isEmpty.js"),c=n.n(l),d=n("./node_modules/lodash/isFunction.js"),u=n.n(d),p=n("./node_modules/lodash/isString.js"),f=n.n(p),m=n("./node_modules/invariant/browser.js"),y=n.n(m),j=n("./node_modules/lodash/conformsTo.js"),v=n.n(j),h=n("./app/utils/checkStore.js"),b="@@saga-injector/restart-on-remount",g="@@saga-injector/daemon",x="@@saga-injector/once-till-unmount";function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=[b,g,x],O=function(e){return y()(f()(e)&&!c()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},k=function(e){var t={saga:u.a,mode:function(e){return f()(e)&&S.includes(e)}};y()(v()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function P(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;t||Object(h.a)(e);var s=_({},r,{mode:r.mode||b}),i=s.saga,a=s.mode;O(n),k(s);var l=Reflect.has(e.injectedSagas,n);(!l||l&&a!==g&&a!==x)&&(e.injectedSagas[n]=_({},s,{task:e.runSaga(i,o)}))}}function R(e,t){return function(n){if(t||Object(h.a)(e),O(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode!==g&&(r.task.cancel(),e.injectedSagas[n]="done")}}}function E(e){return Object(h.a)(e),{injectSaga:P(e,!0),ejectSaga:R(e,!0)}}function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=e.key,n=e.saga,r=e.mode;return function(e){var s=function(s){function i(e,o){var s,a,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),a=this,s=!(l=W(i).call(this,e,o))||"object"!==L(l)&&"function"!=typeof l?C(a):l,$(C(s),"injectors",E(s.context.store)),s.injectors=E(o.store),s.injectors.injectSaga(t,{saga:n,mode:r},s.props),s}var a,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(i,o.a.Component),a=i,(l=[{key:"componentWillUnmount",value:function(){this.injectors.ejectSaga(t)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}])&&N(a.prototype,l),c&&N(a,c),i}();return $(s,"WrappedComponent",e),$(s,"contextType",a.ReactReduxContext),$(s,"displayName","withSaga(".concat(e.displayName||e.name||"Component",")")),i()(s,e)}}},"./app/utils/request.js":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return s});n("./node_modules/whatwg-fetch/dist/fetch.umd.js");function r(e){return 204===e.status||205===e.status?null:e.json()}function o(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function s(t,n){return e(t,n).then(o).then(r)}}).call(this,n("./node_modules/exports-loader/index.js?self.fetch!./node_modules/whatwg-fetch/dist/fetch.umd.js"))},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/List/style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".list-wrapper{padding:0;margin:0;width:100%;background-color:white;border:1px solid #ccc;border-radius:3px;overflow:hidden}.list-wrapper ul{list-style:none;margin:0;width:100%;min-height:290px;max-height:calc(80vh - 157px);overflow-y:auto;padding:0 1em}@media (min-width: 767px){.list-wrapper ul{max-height:calc(80vh - 137px)}}\n",""])},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/ListItem/style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".list-item-wrapper{position:relative;display:flex;flex-direction:row;align-items:stretch;width:100%;min-height:3em;border-top:1px solid #eee;word-break:normal}.list-item-wrapper:first-child{border-top:none}.list-item-wrapper .list-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:100%}.list-item-wrapper .list-item:hover,.list-item-wrapper .list-item .active{background:#cccccc}.list-item-wrapper .list-item div,.list-item-wrapper .list-item a{display:flex;align-items:center;width:100%;height:3em;color:#282c34;text-decoration:none}\n",""])},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/containers/HomePage/style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".home-page .content{flex-direction:column}.home-page .btn{color:white;text-decoration:none;padding:10px;border:0;border-radius:6px;outline:none;font-size:2em;white-space:nowrap;cursor:pointer}.home-page .btn-green{background:#5fd570}.home-page .btn-green:active{background:#5ac565}\n",""])},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/helpers/ErrorWrapper/style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".error-wrapper{display:flex;flex:1;justify-content:center;align-items:center;height:100%;margin:1em 0;text-align:center;color:red;line-height:20px}\n",""])},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/helpers/LoaderWrapper/style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".loader{display:flex;justify-content:center;align-items:center;height:100%}\n",""])}}]);