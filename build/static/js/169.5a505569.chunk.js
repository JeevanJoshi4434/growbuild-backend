/*! For license information please see 169.5a505569.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[169],{2210:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n(87),o=n(45),i=n(0),l=n.n(i),c=n(28),u=n(62),s=n(199),h=n.n(s);function f(){f=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),l=new O(a||[]);return r(i,"_invoke",{value:x(t,n,l)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var h={};function d(){}function m(){}function p(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==e&&n.call(g,o)&&(v=g);var E=p.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e((function(a,i){!function r(a,o,i,l){var c=s(t[a],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,l)}))}l(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function x(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=L(i,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=p,r(E,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:m,configurable:!0}),m.displayName=c(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(E),c(E,l,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}e.default=function(){var t=Object(i.useState)({loading:!0,total:[]}),e=Object(o.a)(t,2),n=e[0],s=e[1],d=Object(i.useState)(null),m=Object(o.a)(d,2),p=m[0],v=m[1],y=Object(u.h)(),g=new URLSearchParams(y.search),E=g.get("building"),w=g.get("project");console.log({us:E,ID:w});var b=function(){var t=Object(a.a)(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("https://growbuild-jg.onrender.com/api/get/payment/due/detail/".concat(w,"/").concat(E));case 2:200===(e=t.sent).status&&(v(e.data),console.log(e.data)),s(Object(r.a)(Object(r.a)({},n),{},{loading:!1}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){setTimeout((function(){b()}),2e3)}),[]),n.loading||null===p?n.loading||null===p?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{flexDirection:"column"},className:"d-flex flex-col align-items-start justify-content-start"},l.a.createElement("h1",null,"Loading..."))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{flexDirection:"column"},className:"d-flex flex-col align-items-start justify-content-start"},l.a.createElement("h1",null,"No Data Found"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container my-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{onClick:function(){window.print()},className:"btn btn-primary btn-md my-2 float-end"},"Print Now")),l.a.createElement("div",{className:"col-12"},l.a.createElement("img",{src:h.a,alt:"logo",className:"img-fluid "}),l.a.createElement("h3",{className:"text-center"},"All Payment Details"),l.a.createElement("hr",null),l.a.createElement("h4",{className:"text-end"},"Project Name - ",p.profile.project),l.a.createElement("h4",{className:"text-end mb-2"},"Building Name - ",p.profile.building))),l.a.createElement("div",{id:"print-content",className:"table-responsive px-3 py-3 shadow"},l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",{className:"table-dark"},l.a.createElement("tr",null,l.a.createElement("th",null,"Owner"),l.a.createElement("th",null,"Unit"),l.a.createElement("th",null,"Floor"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Balance"),l.a.createElement("th",null,"Pending"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Value"))),l.a.createElement("tbody",null,p.dataArray.map((function(t){var e;return l.a.createElement("tr",null,l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.unit),l.a.createElement("td",null,null===t||void 0===t||null===(e=t.unit)||void 0===e?void 0:e.slice(0,1)),l.a.createElement("td",null,t.amount),l.a.createElement("td",null,t.balance),l.a.createElement("td",null,t.pending),l.a.createElement("td",null,t.status?"Pending":"Completed"),l.a.createElement("td",null,t.value))})))))))}}}]);
//# sourceMappingURL=169.5a505569.chunk.js.map