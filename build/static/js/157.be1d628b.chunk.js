/*! For license information please see 157.be1d628b.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[157],{2154:function(e,t,n){"use strict";n.r(t);var a=n(83),r=n(43),l=n(3),o=n(42),i=n(0),c=n.n(i),u=n(59),s=n(28),d=n(842),m=n.n(d),v=n(304),p=n(430);function f(){f=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var l=t&&t.prototype instanceof m?t:m,o=Object.create(l.prototype),i=new O(r||[]);return a(o,"_invoke",{value:x(e,n,i)}),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var d={};function m(){}function v(){}function p(){}var h={};c(h,l,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(k([])));b&&b!==t&&n.call(b,l)&&(h=b);var y=p.prototype=m.prototype=Object.create(h);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){var r;a(this,"_invoke",{value:function(a,l){function o(){return new t((function(r,o){!function a(r,l,o,i){var c=s(e[r],e,l);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,o,i)}),(function(e){a("throw",e,o,i)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return a("throw",e,o,i)}))}i(c.arg)}(a,l,r,o)}))}return r=r?r.then(o,o):o()}})}function x(e,t,n){var a="suspendedStart";return function(r,l){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw l;return P()}for(n.method=r,n.arg=l;;){var o=n.delegate;if(o){var i=w(o,n);if(i){if(i===d)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=s(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function w(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var l=r.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function k(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=p,a(y,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:v,configurable:!0}),v.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(j.prototype),c(j.prototype,o,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,a,r,l){void 0===l&&(l=Promise);var o=new j(u(t,n,a,r),l);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(y),c(y,i,"Generator"),c(y,l,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=k,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],o=l.completion;if("root"===l.tryLoc)return a("end");if(l.tryLoc<=this.prev){var i=n.call(l,"catchLoc"),c=n.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return a(l.catchLoc,!0);if(this.prev<l.finallyLoc)return a(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return a(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return a(l.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;N(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.default=function(){var e,t,n=Object(i.useState)(null),d=Object(o.a)(n,2),h=d[0],g=d[1],b=Object(i.useState)(!1),y=Object(o.a)(b,2),E=y[0],j=y[1],x=Object(i.useState)(null),w=Object(o.a)(x,2),_=w[0],N=w[1],O=Object(i.useState)({bedRoom:null,Project:null,floor:null,building:null,unit:null,flat:null,flat_area:null,parking:null,starting_price:null,extra_facilities:null,id:null}),k=Object(o.a)(O,2),P=k[0],L=k[1],S=Object(i.useState)(null),F=Object(o.a)(S,2),C=F[0],R=F[1],A=Object(i.useState)(null),T=Object(o.a)(A,2),B=T[0],G=T[1],H=function(n){e=n.target.name,t=n.target.value,L(Object(l.a)(Object(l.a)({},P),{},Object(r.a)({},e,t)))},U=Object(i.useState)(null),q=Object(o.a)(U,2),I=q[0],z=q[1],J=function(){var e=Object(a.a)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:t=e.sent,z(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=Object(u.g)();Object(i.useEffect)((function(){J()}),[]);var D=function(){var e=Object(a.a)(f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)||"Select Project"===t){e.next=5;break}return e.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(t),{Headers:{"Content-Type":"application/json"}});case 3:n=e.sent,R(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(a.a)(f().mark((function e(t,n){var a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)||24!==(null===n||void 0===n?void 0:n.length)&&12!==(null===n||void 0===n?void 0:n.length)){e.next=5;break}return e.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/find/unit/").concat(t,"/").concat(n),{Headers:{"Content-Type":"application/json"}});case 3:a=e.sent,N(a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),K=function(){var e=Object(a.a)(f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)){e.next=5;break}return e.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(t),{Headers:{"Content-Type":"application/json"}});case 3:n=e.sent,G(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(a.a)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("https://growbuild-jg.onrender.com/api/create/flat",{Project:P.Project,floor:P.floor,building:P.building,unit:P.unit,flat:P.flat,flat_area:P.flat_area,parking:P.parking,starting_price:P.starting_price,extra_facilities:P.extra_facilities,bedRoom:P.bedRoom});case 2:200===e.sent.status?(window.alert("Flat Upload Done!"),Y.go(0)):window.alert("Something Error!");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(a.a)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(Object(l.a)(Object(l.a)({},P),{},{Project:null===t||void 0===t?void 0:t.Project,floor:null===t||void 0===t?void 0:t.floor,building:null===t||void 0===t?void 0:t.building,unit:null===t||void 0===t?void 0:t.unit,flat:null===t||void 0===t?void 0:t.flat,flat_area:null===t||void 0===t?void 0:t.flat_area,parking:null===t||void 0===t?void 0:t.parking,starting_price:null===t||void 0===t?void 0:t.starting_price,extra_facilities:null===t||void 0===t?void 0:t.extra_facilities,id:null===t||void 0===t?void 0:t._id})),j(!0),e.next=4,D(null===t||void 0===t?void 0:t.Project);case 4:return L(Object(l.a)(Object(l.a)({},P),{},{building:null===t||void 0===t?void 0:t.building})),e.next=7,K(null===t||void 0===t?void 0:t.building);case 7:return L(Object(l.a)(Object(l.a)({},P),{},{floor:null===t||void 0===t?void 0:t.floor,flat:null===t||void 0===t?void 0:t.flat})),e.next=10,M(null===t||void 0===t?void 0:t.building,null===t||void 0===t?void 0:t.Project);case 10:L(Object(l.a)(Object(l.a)({},P),{},{unit:null===t||void 0===t?void 0:t.unit})),L(Object(l.a)(Object(l.a)({},P),{},{Project:null===t||void 0===t?void 0:t.Project,floor:null===t||void 0===t?void 0:t.floor,building:null===t||void 0===t?void 0:t.building,unit:null===t||void 0===t?void 0:t.unit,flat:null===t||void 0===t?void 0:t.flat,flat_area:null===t||void 0===t?void 0:t.flat_area,parking:null===t||void 0===t?void 0:t.parking,starting_price:null===t||void 0===t?void 0:t.starting_price,extra_facilities:null===t||void 0===t?void 0:t.extra_facilities,id:null===t||void 0===t?void 0:t._id,bedRoom:null===t||void 0===t?void 0:t.bedRoom}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(a.a)(f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()({title:"Are you sure?",text:"Are you sure that you want to delete this Block?",icon:"warning",dangerMode:!0});case 2:if(!(n=e.sent)){e.next=8;break}return e.next=6,s.a.delete("https://growbuild-jg.onrender.com/api/delete/flat/"+t,{Headers:{"Content-Type":"application/json"}});case 6:e.sent,Z();case 8:n();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(a.a)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("https://growbuild-jg.onrender.com/api/update/flat/"+t,{Project:P.Project,floor:P.floor,building:P.building,unit:P.unit,flat:P.flat,flat_area:P.flat_area,parking:P.parking,starting_price:P.starting_price,extra_facilities:P.extra_facilities,bedRoom:P.bedRoom});case 2:200===e.sent.status&&(m()("Building Updated successfully!","success"),setTimeout((function(){Y.go(0)}),2e3));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(a.a)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/all/flat"),{Headers:{"Content-Type":"application/json"}});case 2:200===(t=e.sent).status&&g(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){Z()}),[]);var $=function(){var e=Object(a.a)(f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://growbuild-jg.onrender.com/api/project/"+t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.data.name);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(a.a)(f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://growbuild-jg.onrender.com/api/building/"+t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.data.name);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container bg-white p-2 rounded-2"},c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg"},c.a.createElement("h3",{className:"text-alternate text-primary"},"Create New Flat"),c.a.createElement("hr",null),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Project"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"project",onChange:function(e){H(e),D(e.target.value)},name:"Project",value:P.Project},null===I?c.a.createElement("option",{value:null,name:null},"Loading..."):c.a.createElement("option",{value:null,name:null},"Select Project"),null!==I&&0===(null===I||void 0===I?void 0:I.length)&&c.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==I&&(null===I||void 0===I?void 0:I.length)>0&&I.map((function(e){return c.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.Name)}))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Building"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"building",name:"building",onChange:function(e){H(e),K(e.target.value),M(e.target.value,null===P||void 0===P?void 0:P.Project)},value:P.building},null===P.Project?c.a.createElement("option",{value:null,name:null},"First select Project"):c.a.createElement(c.a.Fragment,null,null===C&&c.a.createElement("option",{value:null,name:null},"Loading..."),null!==C&&0===(null===C||void 0===C?void 0:C.length)&&c.a.createElement("option",{value:null,name:null},"No Building Avaliable")),(null===C||void 0===C?void 0:C.length)>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:null,name:null},"Select Building"),null===C||void 0===C?void 0:C.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.buildingName))})))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Floor"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"floor",name:"floor",onChange:H,value:P.floor},null===B?c.a.createElement("option",{value:null,name:null},"Loading..."):c.a.createElement("option",{value:null,name:null},"Select Floor"),null!==B&&0===(null===B||void 0===B?void 0:B.total_number_of_floors)&&c.a.createElement("option",{value:null,name:null},"No Floor Avaliable"),null!==B&&(null===B||void 0===B?void 0:B.total_number_of_floors)>0&&function(e){for(var t=[],n=1;n<=e;n++)t.push(c.a.createElement("option",{key:n,value:n},n));return t}(null===B||void 0===B?void 0:B.total_number_of_floors)))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Unit"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"unit",name:"unit",onChange:H,value:P.unit},null===P.Project&&null===P.building&&c.a.createElement("option",{value:null,name:null},"Select Project"),null===P.building&&null!==P.Project&&c.a.createElement("option",{value:null,name:null},"Select Building"),null!==P.building&&null!==P.Project&&null===_&&c.a.createElement("option",{value:null,name:null},"Loading..."),null!==_&&c.a.createElement(c.a.Fragment,null,0===_.length?c.a.createElement("option",{value:null,name:null},"No Units Avaliable."):c.a.createElement("option",{value:null,name:null},"Select Unit"),_.length>0&&_.map((function(e){return c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.unit_name)})))))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Flat Area"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"flat_area",name:"flat_area",value:P.flat_area,onChange:H,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bed Room"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bedRoom",name:"bedRoom",value:P.bedRoom,onChange:H,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Starting Price"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"price",name:"starting_price",value:P.starting_price,onChange:H,required:""}))),c.a.createElement("div",{className:"col-md-12 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Extra Facilities"),c.a.createElement("div",{className:"input-group"},c.a.createElement("textarea",{type:"text",className:"form-control",id:"facilities",name:"extra_facilities",value:P.extra_facilities,onChange:H,required:""}))),c.a.createElement("div",{className:"col-md-12 col-12 text-right"},E?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-md mb-1 mr-1",onClick:function(){L(Object(l.a)(Object(l.a)({},P),{},{Project:null,floor:null,building:null,unit:null,flat:null,flat_area:null,parking:null,starting_price:null,extra_facilities:null,id:null,bedRoom:null})),j(!1)}}," ","Exit"," "),c.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return X(null===P||void 0===P?void 0:P.id)}}," ","Update"," ")):c.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return Q()}}," ","Create"," "))),!E&&c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},c.a.createElement("h3",{className:"text-alternate text-primary"},"All Flats"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("table",{className:"table table-striped table-responsive"},c.a.createElement("tr",null,c.a.createElement("th",null,"Sno."),c.a.createElement("th",null,"Project"),c.a.createElement("th",null,"Building"),c.a.createElement("th",null,"Flat"),c.a.createElement("th",null,"Floor"),c.a.createElement("th",null,"Flat Area"),c.a.createElement("th",null,"Bed Room"),c.a.createElement("th",null,"Starting Price"),c.a.createElement("th",null,"Action")),null===h||void 0===h?void 0:h.map((function(e,t){var n=null===e||void 0===e?void 0:e._id;console.log(e);var a=$(null===e||void 0===e?void 0:e.Project),r=ee(null===e||void 0===e?void 0:e.building);return c.a.createElement("tr",null,c.a.createElement("td",null,t+1),c.a.createElement("td",null,null!==a?a:c.a.createElement(c.a.Fragment,null)),c.a.createElement("td",null,null!==r?r:c.a.createElement(c.a.Fragment,null)),c.a.createElement("td",null,null===e||void 0===e?void 0:e.flat),c.a.createElement("td",null,null===e||void 0===e?void 0:e.floor),c.a.createElement("td",null,null===e||void 0===e?void 0:e.flat_area),c.a.createElement("td",null,null===e||void 0===e?void 0:e.bedRoom),c.a.createElement("td",null,null===e||void 0===e?void 0:e.starting_price),c.a.createElement("td",null,c.a.createElement(v.a,{className:"cursor-pointer",color:"green",size:30,onClick:function(){V(e)}}),c.a.createElement(p.a,{className:"cursor-pointer",color:"red",size:30,onClick:function(){W(n)}})))})))))))}}}]);
//# sourceMappingURL=157.be1d628b.chunk.js.map