/*! For license information please see 144.2ce1760a.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[144],{2212:function(e,t,a){"use strict";a.r(t);var n=a(87),l=a(46),r=a(3),o=a(45),i=a(0),c=a.n(i),u=a(62),m=a(28),d=a(453),s=a(870),v=a.n(s);function p(){p=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},l="function"==typeof Symbol?Symbol:{},r=l.iterator||"@@iterator",o=l.asyncIterator||"@@asyncIterator",i=l.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,a){return e[t]=a}}function u(e,t,a,l){var r=t&&t.prototype instanceof s?t:s,o=Object.create(r.prototype),i=new j(l||[]);return n(o,"_invoke",{value:_(e,a,i)}),o}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var d={};function s(){}function v(){}function h(){}var g={};c(g,r,(function(){return this}));var f=Object.getPrototypeOf,b=f&&f(f(O([])));b&&b!==t&&a.call(b,r)&&(g=b);var E=h.prototype=s.prototype=Object.create(g);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var l;n(this,"_invoke",{value:function(n,r){function o(){return new t((function(l,o){!function n(l,r,o,i){var c=m(e[l],e,r);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,i)}),(function(e){n("throw",e,o,i)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,i)}))}i(c.arg)}(n,r,l,o)}))}return l=l?l.then(o,o):o()}})}function _(e,t,a){var n="suspendedStart";return function(l,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===l)throw r;return C()}for(a.method=l,a.arg=r;;){var o=a.delegate;if(o){var i=x(o,a);if(i){if(i===d)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=m(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function x(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var l=m(n,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,d;var r=l.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=h,n(E,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:v,configurable:!0}),v.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},y(N.prototype),c(N.prototype,o,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,n,l,r){void 0===r&&(r=Promise);var o=new N(u(t,a,n,l),r);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(E),c(E,i,"Generator"),c(E,r,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var l=this.tryEntries.length-1;l>=0;--l){var r=this.tryEntries[l],o=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var i=a.call(r,"catchLoc"),c=a.call(r,"finallyLoc");if(i&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n];if(l.tryLoc<=this.prev&&a.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var r=l;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=e,o.arg=t,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var l=n.arg;w(a)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}t.default=function(){var e,t,a=Object(i.useState)({Project:null,Building:null,floor:null,unit:null,secondfloor:null,flat:null,parking:null,booking_price:null,booking_date:null,allotment_date:null,agreement_date:null,Owner_name:null,payment_stage:null,price:null,payment_receive:null,payment_type:null,check_number:null,date:null,bank_name:null,branch_name:null,bank_account:null,card_number:null,id:null,price_with_tax:null}),s=Object(o.a)(a,2),h=s[0],g=s[1],f=function(a){e=a.target.name,t=a.target.value,g(Object(r.a)(Object(r.a)({},h),{},Object(l.a)({},e,t))),console.log({data:h})},b=Object(i.useState)(null),E=Object(o.a)(b,2),y=E[0],N=E[1],_=Object(i.useState)(null),x=Object(o.a)(_,2),k=x[0],w=x[1],j=Object(i.useState)(null),O=Object(o.a)(j,2),C=O[0],S=O[1],q=Object(i.useState)(null),P=Object(o.a)(q,2),B=P[0],F=P[1],L=function(){var e=Object(n.a)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:t=e.sent,F(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.g)();Object(i.useEffect)((function(){L()}),[]);var T=function(){var e=Object(n.a)(p().mark((function e(t){var a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)||"Select Project"===t){e.next=5;break}return e.next=3,m.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(t),{Headers:{"Content-Type":"application/json"}});case 3:a=e.sent,w(a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(n.a)(p().mark((function e(t,a){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)||24!==(null===a||void 0===a?void 0:a.length)&&12!==(null===a||void 0===a?void 0:a.length)){e.next=5;break}return e.next=3,m.a.get("".concat("https://growbuild-jg.onrender.com","/api/find/unit/").concat(t,"/").concat(a),{Headers:{"Content-Type":"application/json"}});case 3:n=e.sent,N(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(n.a)(p().mark((function e(t){var a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)){e.next=5;break}return e.next=3,m.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(t),{Headers:{"Content-Type":"application/json"}});case 3:a=e.sent,S(a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(n.a)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("".concat("https://growbuild-jg.onrender.com","/api/create/buyermaster"),{Project:null===h||void 0===h?void 0:h.Project,Building:null===h||void 0===h?void 0:h.Building,floor:null===h||void 0===h?void 0:h.floor,unit:null===h||void 0===h?void 0:h.unit,secondfloor:null===h||void 0===h?void 0:h.secondfloor,flat:null===h||void 0===h?void 0:h.flat,parking:null===h||void 0===h?void 0:h.parking,booking_price:null===h||void 0===h?void 0:h.booking_price,booking_date:null===h||void 0===h?void 0:h.booking_date,allotment_date:null===h||void 0===h?void 0:h.allotment_date,agreement_date:null===h||void 0===h?void 0:h.agreement_date,Owner_name:null===h||void 0===h?void 0:h.Owner_name,payment_stage:null===h||void 0===h?void 0:h.payment_stage,price:null===h||void 0===h?void 0:h.price,payment_receive:null===h||void 0===h?void 0:h.payment_receive,payment_type:null===h||void 0===h?void 0:h.payment_type,check_number:null===h||void 0===h?void 0:h.check_number,date:null===h||void 0===h?void 0:h.date,bank_name:null===h||void 0===h?void 0:h.bank_name,branch_name:null===h||void 0===h?void 0:h.branch_name,bank_account:null===h||void 0===h?void 0:h.bank_account,card_number:null===h||void 0===h?void 0:h.card_number,price_with_tax:null===h||void 0===h?void 0:h.price_with_tax});case 2:200===e.sent.status?(window.alert("Updated Successfully!"),window.location.reload()):window.alert("Something Error Happened!");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=Object(i.useState)(null),R=Object(o.a)(H,2),U=R[0],I=R[1],J=function(){var e=Object(n.a)(p().mark((function e(t,a){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(12!==(null===t||void 0===t?void 0:t.length)&&24!==(null===t||void 0===t?void 0:t.length)||12!==(null===a||void 0===a?void 0:a.length)&&24!==(null===a||void 0===a?void 0:a.length)){e.next=5;break}return e.next=3,m.a.get("".concat("https://growbuild-jg.onrender.com","/api/demand/").concat(t,"/").concat(a),{Headers:{"contnt-type":"application/json"}});case 3:200===(n=e.sent).status&&(I(n.data),console.log(n.data));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),M=Object(i.useState)(null),Y=Object(o.a)(M,2),z=(Y[0],Y[1]),K=function(){var e=Object(n.a)(p().mark((function e(t,a,n,l,o){var i,c;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(12!==(null===t||void 0===t?void 0:t.length)&&24!==(null===t||void 0===t?void 0:t.length)||12!==(null===a||void 0===a?void 0:a.length)&&24!==(null===a||void 0===a?void 0:a.length)||12!==(null===n||void 0===n?void 0:n.length)&&24!==(null===n||void 0===n?void 0:n.length)||0===l&&null===l||0===o&&null===o){e.next=5;break}return e.next=3,m.a.get("".concat("https://growbuild-jg.onrender.com","/api/").concat(t,"/").concat(a,"/").concat(n,"/").concat(l,"/").concat(o),{Headers:{"Content-Type":"application/json"}});case 3:200===(i=e.sent).status&&(console.log(i.data),c=i.data,g(Object(r.a)(Object(r.a)({},h),{},{Project:null===h||void 0===h?void 0:h.Project,Building:null===h||void 0===h?void 0:h.Building,floor:null===h||void 0===h?void 0:h.floor,unit:null===h||void 0===h?void 0:h.unit,secondfloor:null===h||void 0===h?void 0:h.secondfloor,flat:null===h||void 0===h?void 0:h.flat,parking:null===h||void 0===h?void 0:h.parking,booking_price:null===c||void 0===c?void 0:c.booking_price,booking_date:null===h||void 0===h?void 0:h.booking_date,allotment_date:null===h||void 0===h?void 0:h.allotment_date,agreement_date:null===h||void 0===h?void 0:h.agreement_date,Owner_name:null===c||void 0===c?void 0:c.first_applicant_name,payment_stage:null===h||void 0===h?void 0:h.payment_stage,price:null===h||void 0===h?void 0:h.price,payment_receive:null===h||void 0===h?void 0:h.payment_receive,payment_type:null===h||void 0===h?void 0:h.payment_type,check_number:null===h||void 0===h?void 0:h.check_number,date:null===h||void 0===h?void 0:h.date,bank_name:null===h||void 0===h?void 0:h.bank_name,branch_name:null===h||void 0===h?void 0:h.branch_name,bank_account:null===h||void 0===h?void 0:h.bank_account,card_number:null===h||void 0===h?void 0:h.card_number,price_with_tax:null===h||void 0===h?void 0:h.price_with_tax})),z(c));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,l,r){return e.apply(this,arguments)}}(),Q=Object(i.useState)(null),V=Object(o.a)(Q,2),W=(V[0],V[1]),X=function(){var e=Object(n.a)(p().mark((function e(t){var a,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("https://growbuild-jg.onrender.com","/api/get/demand/").concat(t),{Headers:{"Content-Type":"application/json"}});case 2:200===(a=e.sent).status&&(W(a.data),n=a.data,g(Object(r.a)(Object(r.a)({},h),{},{Project:null===h||void 0===h?void 0:h.Project,Building:null===h||void 0===h?void 0:h.Building,floor:null===h||void 0===h?void 0:h.floor,unit:null===h||void 0===h?void 0:h.unit,secondfloor:null===h||void 0===h?void 0:h.secondfloor,flat:null===h||void 0===h?void 0:h.flat,parking:null===h||void 0===h?void 0:h.parking,booking_price:null===h||void 0===h?void 0:h.booking_price,booking_date:null===h||void 0===h?void 0:h.booking_date,allotment_date:null===h||void 0===h?void 0:h.allotment_date,agreement_date:null===h||void 0===h?void 0:h.agreement_date,Owner_name:null===h||void 0===h?void 0:h.Owner_name,payment_stage:null===h||void 0===h?void 0:h.payment_stage,price:null===n||void 0===n?void 0:n.amount,payment_receive:null===h||void 0===h?void 0:h.payment_receive,payment_type:null===h||void 0===h?void 0:h.payment_type,check_number:null===h||void 0===h?void 0:h.check_number,date:null===h||void 0===h?void 0:h.date,bank_name:null===h||void 0===h?void 0:h.bank_name,branch_name:null===h||void 0===h?void 0:h.branch_name,bank_account:null===h||void 0===h?void 0:h.bank_account,card_number:null===h||void 0===h?void 0:h.card_number,price_with_tax:null===h||void 0===h?void 0:h.price_with_tax})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(n.a)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=Object(i.useState)(null),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ne=function(){var e=Object(n.a)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("https://growbuild-jg.onrender.com","/api/get/all/buyermaster"),{Headers:{"Content-Type":"application/json"}});case 2:200===(t=e.sent).status&&(ae(t.data),console.log(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){ne()}),[]);var le=function(){var e=Object(n.a)(p().mark((function e(t){var a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({title:"Are you sure?",text:"Are you sure that you want to delete?",icon:"warning",dangerMode:!0});case 2:if(!(a=e.sent)){e.next=8;break}return e.next=6,m.a.delete("https://growbuild-jg.onrender.com/api/delete/buyermaster/"+t,{Headers:{"Content-Type":"application/json"}});case 6:e.sent,ne();case 8:a();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container bg-white p-2 rounded-2"},c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},c.a.createElement("h3",{className:"text-alternate text-primary"},"Payment Master"),c.a.createElement("hr",null),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Project"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"project",onChange:function(e){f(e),T(e.target.value)},name:"Project",value:h.Project},null===B?c.a.createElement("option",{value:null,name:null},"Loading..."):c.a.createElement("option",{value:null,name:null},"Select Project"),null!==B&&0===(null===B||void 0===B?void 0:B.length)&&c.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==B&&(null===B||void 0===B?void 0:B.length)>0&&B.map((function(e){return c.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.Name)}))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Building"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"building",name:"Building",onChange:function(e){f(e),A(e.target.value),D(e.target.value,null===h||void 0===h?void 0:h.Project),J(e.target.value,null===h||void 0===h?void 0:h.Project)},value:h.Building},null===h.Project?c.a.createElement("option",{value:null,name:null},"First select Project"):c.a.createElement(c.a.Fragment,null,null===k&&c.a.createElement("option",{value:null,name:null},"Loading..."),null!==k&&0===(null===k||void 0===k?void 0:k.length)&&c.a.createElement("option",{value:null,name:null},"No Building Avaliable")),(null===k||void 0===k?void 0:k.length)>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:null,name:null},"Select Building"),null===k||void 0===k?void 0:k.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.buildingName))})))))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Floor"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"floor",name:"floor",onChange:f,value:h.floor},null===C?c.a.createElement("option",{value:null,name:null},"Loading..."):c.a.createElement("option",{value:null,name:null},"Select Floor"),null!==C&&0===(null===C||void 0===C?void 0:C.total_number_of_floors)&&c.a.createElement("option",{value:null,name:null},"No Floor Avaliable"),null!==C&&(null===C||void 0===C?void 0:C.total_number_of_floors)>0&&function(e){for(var t=[],a=1;a<=e;a++)t.push(c.a.createElement("option",{key:a,value:a},a));return t}(null===C||void 0===C?void 0:C.total_number_of_floors)))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Unit"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"unit",name:"unit",onChange:f,value:h.unit},null===h.Project&&null===h.Building&&c.a.createElement("option",{value:null,name:null},"Select Project First"),null===h.Building&&null!==h.Project&&c.a.createElement("option",{value:null,name:null},"Select Building First"),null!==h.Building&&null!==h.Project&&null===y&&c.a.createElement("option",{value:null,name:null},"Loading..."),null!==y&&c.a.createElement(c.a.Fragment,null,0===y.length?c.a.createElement("option",{value:null,name:null},"No Units Avaliable."):c.a.createElement("option",{value:null,name:null},"Select Unit"),y.length>0&&y.map((function(e){if(e.unit_name.slice(0,1)===h.floor)return c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.unit_name)})))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Fetch Details"),null!==(null===h||void 0===h?void 0:h.unit)?c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return null===h||void 0===h||h.payment_stage,void((null!==(null===h||void 0===h?void 0:h.flat)||(null===h||void 0===h?void 0:h.flat)>0)&&K(h.Building,h.Project,h.unit,h.flat,h.floor))}},"Fetch Details"):c.a.createElement("button",{className:"btn btn-primary",disabled:!0},"Fetch Details")),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Owner Name"),null!==(null===h||void 0===h?void 0:h.Owner_name)?c.a.createElement("p",null,null===h||void 0===h?void 0:h.Owner_name):c.a.createElement("p",null,"Loading...")),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Payment Stage"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"stage",name:"payment_stage",onChange:f,value:null===h||void 0===h?void 0:h.payment_stage},null===k?c.a.createElement("option",{value:"1"},"Select Building First"):c.a.createElement(c.a.Fragment,null,null!==k&&0===(null===U||void 0===U?void 0:U.length)&&null!==U&&c.a.createElement("option",{value:"2"},"No Stage Available"),null!==k&&(null===U||void 0===U?void 0:U.length)>0&&null!==U&&c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:"2"},"Select Stage"),null!==k&&(null===U||void 0===U?void 0:U.length)>0&&null!==U&&(null===U||void 0===U?void 0:U.map((function(e){return console.log(e),c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.stage_name)})))))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Stage"),null!==(null===h||void 0===h?void 0:h.payment_stage)?c.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Z(null===h||void 0===h?void 0:h.payment_stage)}},"Fetch Stage"):c.a.createElement("button",{className:"btn btn-primary",disabled:!0},"Fetch Stage")),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Stage Price"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"price","aria-label":"Select Stage First",placeholder:"Select Stage First",name:"price",value:h.price,onChange:f,readonly:"true",required:""}))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Payment Recived (Ammount)"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"price",name:"payment_receive",value:h.payment_receive,onChange:f,required:""}))),c.a.createElement("h4",{className:"text-alternate text-primary"},"Payment Details"),c.a.createElement("div",{className:"col-md-6 offset-md-3 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Payment Type"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"paymentType",name:"payment_type",value:null===h||void 0===h?void 0:h.payment_type,onChange:f},c.a.createElement("option",{value:""},"Payment Type"),c.a.createElement("option",{value:"Cash"},"Cash"),c.a.createElement("option",{value:"Cheque"},"Cheque"),c.a.createElement("option",{value:"DD"},"DD"),c.a.createElement("option",{value:"RTGS"},"RTGS"),c.a.createElement("option",{value:"NEFT"},"NEFT"),c.a.createElement("option",{value:"netBanking"},"Net Banking"),c.a.createElement("option",{value:"creditCard"},"Credit Card")))),c.a.createElement("hr",null),"Cheque"===(null===h||void 0===h?void 0:h.payment_type)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Cheque No"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"chequeNo",name:"check_number",value:null===h||void 0===h?void 0:h.check_number,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Date"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"date",className:"form-control",id:"chequeDate",name:"date",value:null===h||void 0===h?void 0:h.date,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bank Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bankName",name:"bank_name",value:null===h||void 0===h?void 0:h.bank_name,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Branch Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"branchName",name:"branch_name",value:null===h||void 0===h?void 0:h.branch_name,onChange:f,required:""})))),"DD"===(null===h||void 0===h?void 0:h.payment_type)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Cheque No"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"chequeNo",name:"check_number",value:null===h||void 0===h?void 0:h.check_number,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Date"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"date",className:"form-control",id:"chequeDate",name:"date",value:null===h||void 0===h?void 0:h.date,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bank Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bankName",name:"bank_name",value:null===h||void 0===h?void 0:h.bank_name,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Branch Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"branchName",name:"branch_name",value:null===h||void 0===h?void 0:h.branch_name,onChange:f,required:""})))),"NEFT"===(null===h||void 0===h?void 0:h.payment_type)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Date"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"date",className:"form-control",id:"chequeDate",name:"date",value:null===h||void 0===h?void 0:h.date,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bank Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bankName",name:"bank_name",value:null===h||void 0===h?void 0:h.bank_name,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Branch Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"branchName",name:"branch_name",value:null===h||void 0===h?void 0:h.branch_name,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bank Account"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bankAccount",name:"bank_account",value:null===h||void 0===h?void 0:h.bank_account,onChange:f,required:""})))),"RTGS"===(null===h||void 0===h?void 0:h.payment_type)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Date"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"date",className:"form-control",id:"chequeDate",name:"date",value:null===h||void 0===h?void 0:h.date,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bank Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bankName",name:"bank_name",value:null===h||void 0===h?void 0:h.bank_name,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Branch Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"branchName",name:"branch_name",value:null===h||void 0===h?void 0:h.branch_name,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bank Account"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bankAccount",name:"bank_account",value:null===h||void 0===h?void 0:h.bank_account,onChange:f,required:""})))),"netBanking"===(null===h||void 0===h?void 0:h.payment_type)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Date"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"date",className:"form-control",id:"chequeDate",name:"date",value:null===h||void 0===h?void 0:h.date,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bank Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bankName",name:"bank_name",value:null===h||void 0===h?void 0:h.bank_name,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Branch Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"branchName",name:"branch_name",value:null===h||void 0===h?void 0:h.branch_name,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bank Account"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bankAccount",name:"bank_account",value:null===h||void 0===h?void 0:h.bank_account,onChange:f,required:""})))),"creditCard"===(null===h||void 0===h?void 0:h.payment_type)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Date"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"date",className:"form-control",id:"chequeDate",name:"date",value:null===h||void 0===h?void 0:h.date,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Bank Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"bankName",name:"bank_name",value:null===h||void 0===h?void 0:h.bank_name,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Branch Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"branchName",name:"branch_name",value:null===h||void 0===h?void 0:h.branch_name,onChange:f,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Card Number"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"cardNumber",name:"card_number",value:null===h||void 0===h?void 0:h.card_number,onChange:f,required:""})))),c.a.createElement("div",{className:"col-md-12 col-12 text-right"},c.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-md mb-1 mr-1"}," ","Exit"," "),c.a.createElement("button",{type:"button",onClick:function(){return G()},class:"btn btn-outline-primary btn-md mb-1 mr-1"}," ","Submit"," "))),c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},c.a.createElement("h3",{className:"text-alternate text-primary"},"Payment History"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("table",{className:"table table-striped table-responsive"},c.a.createElement("tr",null,c.a.createElement("th",null,"Sno."),c.a.createElement("th",null,"Owner"),c.a.createElement("th",null,"Payment Type"),c.a.createElement("th",null,"Paid"),c.a.createElement("th",null,"Total Stage Price")),null===te||void 0===te?void 0:te.map((function(e,t){var a=null===e||void 0===e?void 0:e._id;return c.a.createElement("tr",null,c.a.createElement("td",null,t+1),c.a.createElement("td",null,null===e||void 0===e?void 0:e.Owner_name),c.a.createElement("td",null,null===e||void 0===e?void 0:e.payment_type),c.a.createElement("td",null,null===e||void 0===e?void 0:e.payment_receive),c.a.createElement("td",null,null===e||void 0===e?void 0:e.price),c.a.createElement("td",null,c.a.createElement(d.a,{className:"cursor-pointer",color:"red",size:30,onClick:function(){le(a)}})))})))))))}}}]);
//# sourceMappingURL=144.2ce1760a.chunk.js.map