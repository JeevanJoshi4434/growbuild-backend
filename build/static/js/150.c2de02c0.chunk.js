/*! For license information please see 150.c2de02c0.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[150],{2329:function(t,e,r){"use strict";r.r(e);var n=r(46),o=r(3),a=r(87),i=r(45),l=r(28),c=r(0),u=r.n(c),s=r(62),f=r(869),h=r.n(f),d=r(327),p=r(453);function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),l=new L(o||[]);return n(i,"_invoke",{value:_(t,r,l)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f={};function h(){}function d(){}function p(){}var v={};c(v,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(O([])));y&&y!==e&&r.call(y,a)&&(v=y);var b=p.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e((function(o,i){!function n(o,a,i,l){var c=s(t[o],t,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,l)}),(function(t){n("throw",t,i,l)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,l)}))}l(c.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function _(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,n(b,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),c(b,l,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var v=function(t){var e=t.i,r=t.j,n=t.setIsEdit,s=t.setAllBuilding,f=t.id,v=t.setCreateBlock,g=t.createBlock,y=Object(c.useState)(null),b=Object(i.a)(y,2),w=b[0],E=b[1],_=function(){var t=Object(a.a)(m().mark((function t(){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://growbuild-jg.onrender.com/api/all/building",{Headers:{"Content-Type":"application/json"}});case 2:e=t.sent,s(e.data),console.log(e.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(m().mark((function t(e){var r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h()({title:"Are you sure?",text:"Are you sure that you want to delete this Block?",icon:"warning",dangerMode:!0});case 2:if(!(r=t.sent)){t.next=8;break}return t.next=6,l.a.delete("https://growbuild-jg.onrender.com/api/delete/building/"+e,{Headers:{"Content-Type":"application/json"}});case 6:t.sent,_();case 8:r();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(m().mark((function t(){var r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://growbuild-jg.onrender.com/api/project/single/"+(null===e||void 0===e?void 0:e.Project));case 2:200===(r=t.sent).status&&E(r.data.name);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){x()}),[]),u.a.createElement("tr",null,u.a.createElement("td",null,r+1),u.a.createElement("td",null,null!==w?w:u.a.createElement(u.a.Fragment,null,"Project Not Found!")),u.a.createElement("td",null,null===e||void 0===e?void 0:e.buildingName),u.a.createElement("td",null,null===e||void 0===e?void 0:e.total_number_of_floors),u.a.createElement("td",null,u.a.createElement(d.a,{className:"cursor-pointer",color:"green",size:30,onClick:function(){var t;t=e,v(Object(o.a)(Object(o.a)({},g),{},{Project:null===t||void 0===t?void 0:t.Project,buildingName:null===t||void 0===t?void 0:t.buildingName,total_number_of_floors:null===t||void 0===t?void 0:t.total_number_of_floors,total_number_of_flats:null===t||void 0===t?void 0:t.total_number_of_flats,parkings:null===t||void 0===t?void 0:t.parkings,id:null===t||void 0===t?void 0:t._id})),n(!0)}}),u.a.createElement(p.a,{className:"cursor-pointer",color:"red",size:30,onClick:function(){j(f)}})))};function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),l=new L(o||[]);return n(i,"_invoke",{value:_(t,r,l)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f={};function h(){}function d(){}function p(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==e&&r.call(y,a)&&(m=y);var b=p.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e((function(o,i){!function n(o,a,i,l){var c=s(t[o],t,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,l)}),(function(t){n("throw",t,i,l)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,l)}))}l(c.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function _(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,n(b,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),c(b,l,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}e.default=function(){var t,e,r=Object(s.g)(),f=Object(c.useState)(!1),d=Object(i.a)(f,2),p=d[0],m=d[1],y=Object(c.useState)(null),b=Object(i.a)(y,2),w=b[0],E=b[1],_=Object(c.useState)(null),j=Object(i.a)(_,2),x=j[0],N=j[1],L=Object(c.useState)({Project:null,buildingName:null,total_number_of_floors:null,total_number_of_flats:null,parkings:null,id:null}),O=Object(i.a)(L,2),k=O[0],P=O[1],S=function(){var t=Object(a.a)(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:e=t.sent,N(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){S()}),[]);var C=function(r){t=r.target.name,e=r.target.value,P(Object(o.a)(Object(o.a)({},k),{},Object(n.a)({},t,e)))},F=function(){var t=Object(a.a)(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("https://growbuild-jg.onrender.com/api/create/building",{Project:k.Project,buildingName:k.buildingName,total_number_of_floors:k.total_number_of_floors,total_number_of_flats:k.total_number_of_flats,parkings:k.parkings});case 2:200===t.sent.status&&(window.alert("Building Upload Done!"),r.go(0));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=Object(a.a)(g().mark((function t(e){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.put("https://growbuild-jg.onrender.com/api/update/building/"+e,{Project:k.Project,buildingName:k.buildingName,total_number_of_floors:k.total_number_of_floors,total_number_of_flats:k.total_number_of_flats,parkings:k.parkings});case 2:200===t.sent.status&&(h()("Building Updated successfully!","success"),r.go(0));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(a.a)(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://growbuild-jg.onrender.com/api/all/building",{Headers:{"Content-Type":"application/json"}});case 2:e=t.sent,E(e.data),console.log(e.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){T()}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"container bg-white p-2 rounded-2"},u.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg"},u.a.createElement("h3",{className:"text-alternate text-primary"},"Create Building"),u.a.createElement("hr",null),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Select Project"),u.a.createElement("div",{className:"input-group"},u.a.createElement("select",{className:"form-control",id:"project",name:"Project",onChange:C,value:k.Project},null===x?u.a.createElement("option",{name:null,value:null},"Loading"):u.a.createElement("option",{name:null,value:null},"Select Project"),null!==x&&0===(null===x||void 0===x?void 0:x.length)&&u.a.createElement("option",{name:null,value:null},"No projects are Avialable"),null!==x&&(null===x||void 0===x?void 0:x.length)>0&&x.map((function(t){return u.a.createElement("option",{name:null===t||void 0===t?void 0:t._id,value:null===t||void 0===t?void 0:t._id},null===t||void 0===t?void 0:t.Name)}))))),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Building Name"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"text",className:"form-control",id:"projectName",name:"buildingName",onChange:C,value:k.buildingName,required:""}))),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Total No of Floors"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"number",className:"form-control",id:"floors",name:"total_number_of_floors",onChange:C,value:k.total_number_of_floors,required:""}))),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Total No Of Flats"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"number",className:"form-control",id:"flats",name:"total_number_of_flats",onChange:C,value:k.total_number_of_flats,required:""}))),u.a.createElement("div",{className:"col-md-12 col-12 text-right"},p?u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-md mb-1 mr-1",onClick:function(){P(Object(o.a)(Object(o.a)({},k),{},{Project:null,buildingName:null,total_number_of_floors:null,total_number_of_flats:null,parkings:null,id:null})),m(!1)}}," Exit "),u.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return G(null===k||void 0===k?void 0:k.id)}}," Update ")):u.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return F()}}," Create "))),!p&&u.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},u.a.createElement("h3",{className:"text-alternate text-primary"},"All Blocks"),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement("table",{className:"table table-striped table-responsive"},u.a.createElement("tr",null,u.a.createElement("th",null,"Sno"),u.a.createElement("th",null,"Project Name"),u.a.createElement("th",null,"Building Name"),u.a.createElement("th",null,"Floor"),u.a.createElement("th",null,"Action")),null===w||void 0===w?void 0:w.map((function(t,e){var r=null===t||void 0===t?void 0:t._id;return u.a.createElement(v,{i:t,j:e,setIsEdit:m,setAllBuilding:E,id:r,setCreateBlock:P,createBlock:k})})))))))}}}]);
//# sourceMappingURL=150.c2de02c0.chunk.js.map