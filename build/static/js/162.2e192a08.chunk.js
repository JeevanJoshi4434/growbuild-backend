/*! For license information please see 162.2e192a08.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[162],{2329:function(t,e,n){"use strict";n.r(e);var r=n(87),a=n(46),o=n(3),i=n(45),l=n(0),c=n.n(l),u=n(62),s=n(28),d=n(870),f=n.n(d),v=n(330),p=n(454);function h(){h=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),l=new k(a||[]);return r(i,"_invoke",{value:j(t,n,l)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var d={};function f(){}function v(){}function p(){}var m={};c(m,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==e&&n.call(y,o)&&(m=y);var b=p.prototype=f.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e((function(a,i){!function r(a,o,i,l){var c=s(t[a],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,l)}))}l(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function j(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=x(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=p,r(b,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:v,configurable:!0}),v.displayName=c(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),c(b,l,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}var m=function(t){var e=t.i,n=t.j,a=t.setIsEdit,u=t.setCreateFlat,d=t.CreateFlat,m=t.setAllBuilding,g=t.setBuilding,y=t.setAllUnits,b=t.setAllFlat,w=t.id,E=Object(l.useState)(null),j=Object(i.a)(E,2),x=j[0],_=j[1],O=Object(l.useState)(null),k=Object(i.a)(O,2),L=k[0],N=k[1],P=function(){var t=Object(r.a)(h().mark((function t(){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://growbuild-jg.onrender.com/api/project/single/"+(null===e||void 0===e?void 0:e.Project));case 2:if(200!==(n=t.sent).status){t.next=7;break}_(n.data.name),t.next=8;break;case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(r.a)(h().mark((function t(){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://growbuild-jg.onrender.com/api/building/single/"+(null===e||void 0===e?void 0:e.building));case 2:if(200!==(n=t.sent).status){t.next=7;break}N(n.data.name),t.next=8;break;case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(l.useEffect)((function(){P(),S()}),[]);var F=function(){var t=Object(r.a)(h().mark((function t(e){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(24!==(null===e||void 0===e?void 0:e.length)&&12!==(null===e||void 0===e?void 0:e.length)||"Select Project"===e){t.next=5;break}return t.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(e),{Headers:{"Content-Type":"application/json"}});case 3:n=t.sent,m(n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(r.a)(h().mark((function t(e){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(24!==(null===e||void 0===e?void 0:e.length)&&12!==(null===e||void 0===e?void 0:e.length)){t.next=5;break}return t.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(e),{Headers:{"Content-Type":"application/json"}});case 3:n=t.sent,g(n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(r.a)(h().mark((function t(e,n){var r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(24!==(null===e||void 0===e?void 0:e.length)&&12!==(null===e||void 0===e?void 0:e.length)||24!==(null===n||void 0===n?void 0:n.length)&&12!==(null===n||void 0===n?void 0:n.length)){t.next=5;break}return t.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/find/unit/").concat(e,"/").concat(n),{Headers:{"Content-Type":"application/json"}});case 3:r=t.sent,y(r.data);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),A=function(){var t=Object(r.a)(h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/all/flat"),{Headers:{"Content-Type":"application/json"}});case 2:200===(e=t.sent).status&&b(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=Object(r.a)(h().mark((function t(e){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()({title:"Are you sure?",text:"Are you sure that you want to delete this Block?",icon:"warning",dangerMode:!0});case 2:if(!(n=t.sent)){t.next=8;break}return t.next=6,s.a.delete("https://growbuild-jg.onrender.com/api/delete/flat/"+e,{Headers:{"Content-Type":"application/json"}});case 6:t.sent,A();case 8:n();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=Object(r.a)(h().mark((function t(e){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(Object(o.a)(Object(o.a)({},d),{},{Project:null===e||void 0===e?void 0:e.Project,floor:null===e||void 0===e?void 0:e.floor,building:null===e||void 0===e?void 0:e.building,unit:null===e||void 0===e?void 0:e.unit,flat:null===e||void 0===e?void 0:e.flat,flat_area:null===e||void 0===e?void 0:e.flat_area,parking:null===e||void 0===e?void 0:e.parking,starting_price:null===e||void 0===e?void 0:e.starting_price,extra_facilities:null===e||void 0===e?void 0:e.extra_facilities,id:null===e||void 0===e?void 0:e._id})),a(!0),t.next=4,F(null===e||void 0===e?void 0:e.Project);case 4:return u(Object(o.a)(Object(o.a)({},d),{},{building:null===e||void 0===e?void 0:e.building})),t.next=7,C(null===e||void 0===e?void 0:e.building);case 7:return u(Object(o.a)(Object(o.a)({},d),{},{floor:null===e||void 0===e?void 0:e.floor,flat:null===e||void 0===e?void 0:e.flat})),t.next=10,T(null===e||void 0===e?void 0:e.building,null===e||void 0===e?void 0:e.Project);case 10:u(Object(o.a)(Object(o.a)({},d),{},{unit:null===e||void 0===e?void 0:e.unit})),u(Object(o.a)(Object(o.a)({},d),{},{Project:null===e||void 0===e?void 0:e.Project,floor:null===e||void 0===e?void 0:e.floor,building:null===e||void 0===e?void 0:e.building,unit:null===e||void 0===e?void 0:e.unit,flat:null===e||void 0===e?void 0:e.flat,flat_area:null===e||void 0===e?void 0:e.flat_area,parking:null===e||void 0===e?void 0:e.parking,starting_price:null===e||void 0===e?void 0:e.starting_price,extra_facilities:null===e||void 0===e?void 0:e.extra_facilities,id:null===e||void 0===e?void 0:e._id,bedRoom:null===e||void 0===e?void 0:e.bedRoom}));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("tr",null,c.a.createElement("td",null,n+1),c.a.createElement("td",null,null!==x?x:c.a.createElement(c.a.Fragment,null)),c.a.createElement("td",null,null!==L?L:c.a.createElement(c.a.Fragment,null)),c.a.createElement("td",null,null===e||void 0===e?void 0:e.flat),c.a.createElement("td",null,null===e||void 0===e?void 0:e.floor),c.a.createElement("td",null,null===e||void 0===e?void 0:e.flat_area),c.a.createElement("td",null,null===e||void 0===e?void 0:e.bedRoom),c.a.createElement("td",null,null===e||void 0===e?void 0:e.starting_price),c.a.createElement("td",null,c.a.createElement(v.a,{className:"cursor-pointer",color:"green",size:30,onClick:function(){R(e)}}),c.a.createElement(p.a,{className:"cursor-pointer",color:"red",size:30,onClick:function(){G(w)}})))};function g(){g=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),l=new k(a||[]);return r(i,"_invoke",{value:j(t,n,l)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var d={};function f(){}function v(){}function p(){}var h={};c(h,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(L([])));y&&y!==e&&n.call(y,o)&&(h=y);var b=p.prototype=f.prototype=Object.create(h);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e((function(a,i){!function r(a,o,i,l){var c=s(t[a],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,l)}))}l(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function j(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=x(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=p,r(b,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:v,configurable:!0}),v.displayName=c(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),c(b,l,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}e.default=function(){var t,e,n=Object(l.useState)(null),d=Object(i.a)(n,2),v=d[0],p=d[1],h=Object(l.useState)(!1),y=Object(i.a)(h,2),b=y[0],w=y[1],E=Object(l.useState)(null),j=Object(i.a)(E,2),x=j[0],_=j[1],O=Object(l.useState)({bedRoom:null,Project:null,floor:null,building:null,unit:null,flat:null,flat_area:null,parking:null,starting_price:null,extra_facilities:null,id:null}),k=Object(i.a)(O,2),L=k[0],N=k[1],P=Object(l.useState)(null),S=Object(i.a)(P,2),F=S[0],C=S[1],T=Object(l.useState)(null),A=Object(i.a)(T,2),G=A[0],R=A[1],B=function(n){t=n.target.name,e=n.target.value,N(Object(o.a)(Object(o.a)({},L),{},Object(a.a)({},t,e)))},H=Object(l.useState)(null),U=Object(i.a)(H,2),I=U[0],Y=U[1],q=function(){var t=Object(r.a)(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:e=t.sent,Y(null===e||void 0===e?void 0:e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=Object(u.g)();Object(l.useEffect)((function(){q()}),[]);var z=function(){var t=Object(r.a)(g().mark((function t(e){var n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(24!==(null===e||void 0===e?void 0:e.length)&&12!==(null===e||void 0===e?void 0:e.length)||"Select Project"===e){t.next=5;break}return t.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(e),{Headers:{"Content-Type":"application/json"}});case 3:n=t.sent,C(n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),J=function(){var t=Object(r.a)(g().mark((function t(e,n){var r;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(24!==(null===e||void 0===e?void 0:e.length)&&12!==(null===e||void 0===e?void 0:e.length)||24!==(null===n||void 0===n?void 0:n.length)&&12!==(null===n||void 0===n?void 0:n.length)){t.next=5;break}return t.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/find/unit/").concat(e,"/").concat(n),{Headers:{"Content-Type":"application/json"}});case 3:r=t.sent,_(r.data);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),M=function(){var t=Object(r.a)(g().mark((function t(e){var n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(24!==(null===e||void 0===e?void 0:e.length)&&12!==(null===e||void 0===e?void 0:e.length)){t.next=5;break}return t.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(e),{Headers:{"Content-Type":"application/json"}});case 3:n=t.sent,R(n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=function(){var t=Object(r.a)(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("https://growbuild-jg.onrender.com/api/create/flat",{Project:L.Project,floor:L.floor,building:L.building,unit:L.unit,flat:L.flat,flat_area:L.flat_area,parking:L.parking,starting_price:L.starting_price,extra_facilities:L.extra_facilities,bedRoom:L.bedRoom});case 2:200===t.sent.status?(window.alert("Flat Upload Done!"),D.go(0)):window.alert("Something Error!");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Q=function(){var t=Object(r.a)(g().mark((function t(e){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("https://growbuild-jg.onrender.com/api/update/flat/"+e,{Project:L.Project,floor:L.floor,building:L.building,unit:L.unit,flat:L.flat,flat_area:L.flat_area,parking:L.parking,starting_price:L.starting_price,extra_facilities:L.extra_facilities,bedRoom:L.bedRoom});case 2:200===t.sent.status&&(f()("Building Updated successfully!","success"),setTimeout((function(){D.go(0)}),2e3));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),V=function(){var t=Object(r.a)(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/all/flat"),{Headers:{"Content-Type":"application/json"}});case 2:200===(e=t.sent).status&&p(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(l.useEffect)((function(){V()}),[]);var W=Object(l.useState)(0),X=Object(i.a)(W,2),Z=X[0],$=X[1],tt=null===x||void 0===x?void 0:x.filter((function(t){return(null===t||void 0===t?void 0:t.unit_name.charAt(0))===Z.toString()}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container bg-white p-2 rounded-2"},c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg"},c.a.createElement("h3",{className:"text-alternate text-primary"},"Create Details"),c.a.createElement("hr",null),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Project"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"project",onChange:function(t){B(t),z(t.target.value)},name:"Project",value:L.Project},null===I?c.a.createElement("option",{value:null,name:null},"Loading..."):c.a.createElement("option",{value:null,name:null},"Select Project"),null!==I&&0===(null===I||void 0===I?void 0:I.length)&&c.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==I&&(null===I||void 0===I?void 0:I.length)>0&&I.map((function(t){return c.a.createElement("option",{name:null===t||void 0===t?void 0:t._id,value:null===t||void 0===t?void 0:t._id},null===t||void 0===t?void 0:t.Name)}))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Building"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"building",name:"building",onChange:function(t){B(t),M(t.target.value),J(t.target.value,null===L||void 0===L?void 0:L.Project)},value:L.building},null===L.Project?c.a.createElement("option",{value:null,name:null},"First select Project"):c.a.createElement(c.a.Fragment,null,null===F&&c.a.createElement("option",{value:null,name:null},"Loading..."),null!==F&&0===(null===F||void 0===F?void 0:F.length)&&c.a.createElement("option",{value:null,name:null},"No Building Avaliable")),(null===F||void 0===F?void 0:F.length)>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:null,name:null},"Select Building"),null===F||void 0===F?void 0:F.map((function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:null===t||void 0===t?void 0:t._id,name:null===t||void 0===t?void 0:t._id},null===t||void 0===t?void 0:t.buildingName))})))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Floor"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"floor",name:"floor",onChange:function(t){B(t),$(t.target.value),console.log(tt)},value:L.floor},null===G?c.a.createElement("option",{value:null,name:null},"Loading..."):c.a.createElement("option",{value:null,name:null},"Select Floor"),null!==G&&0===(null===G||void 0===G?void 0:G.total_number_of_floors)&&c.a.createElement("option",{value:null,name:null},"No Floor Avaliable"),null!==G&&(null===G||void 0===G?void 0:G.total_number_of_floors)>0&&function(t){for(var e=[],n=1;n<=t;n++)e.push(c.a.createElement("option",{key:n,value:n},n));return e}(null===G||void 0===G?void 0:G.total_number_of_floors)))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Unit"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"unit",name:"unit",onChange:B,value:L.unit},null===L.Project&&null===L.building&&c.a.createElement("option",{value:null,name:null},"Select Project"),null===L.building&&null!==L.Project&&c.a.createElement("option",{value:null,name:null},"Select Building"),null!==L.building&&null!==L.Project&&null===x&&c.a.createElement("option",{value:null,name:null},"Loading..."),null!==x&&c.a.createElement(c.a.Fragment,null,0===tt.length?c.a.createElement("option",{value:null,name:null},"No Units Avaliable."):c.a.createElement("option",{value:null,name:null},"Select Unit"),tt.length>0&&tt.map((function(t){return c.a.createElement("option",{value:null===t||void 0===t?void 0:t._id,name:null===t||void 0===t?void 0:t._id},null===t||void 0===t?void 0:t.unit_name)})))))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Flat Area"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"flat_area",name:"flat_area",value:L.flat_area,onChange:B,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bed Room"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bedRoom",name:"bedRoom",value:L.bedRoom,onChange:B,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Starting Price"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"price",name:"starting_price",value:L.starting_price,onChange:B,required:""}))),c.a.createElement("div",{className:"col-md-12 col-12 text-right"},b?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-md mb-1 mr-1",onClick:function(){N(Object(o.a)(Object(o.a)({},L),{},{Project:null,floor:null,building:null,unit:null,flat:null,flat_area:null,parking:null,starting_price:null,extra_facilities:null,id:null,bedRoom:null})),w(!1)}}," ","Exit"," "),c.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return Q(null===L||void 0===L?void 0:L.id)}}," ","Update"," ")):c.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return K()}}," ","Create"," "))),!b&&c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},c.a.createElement("h3",{className:"text-alternate text-primary"},"Unit Details"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("table",{className:"table table-striped table-responsive"},c.a.createElement("tr",null,c.a.createElement("th",null,"Sno."),c.a.createElement("th",null,"Project"),c.a.createElement("th",null,"Building"),c.a.createElement("th",null,"Flat"),c.a.createElement("th",null,"Floor"),c.a.createElement("th",null,"Flat Area"),c.a.createElement("th",null,"Bed Room"),c.a.createElement("th",null,"Starting Price"),c.a.createElement("th",null,"Action")),null===v||void 0===v?void 0:v.map((function(t,e){var n=null===t||void 0===t?void 0:t._id;return console.log(t),c.a.createElement(m,{i:t,j:e,setIsEdit:w,setCreateFlat:N,CreateFlat:L,setAllBuilding:C,setBuilding:R,setAllUnits:_,setAllFlat:p,id:n})})))))))}}}]);
//# sourceMappingURL=162.2e192a08.chunk.js.map