/*! For license information please see 161.e3b24246.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[161],{2154:function(e,t,n){"use strict";n.r(t);var a=n(83),l=n(43),o=n(3),r=n(42),i=n(0),c=n.n(i),u=n(59),d=n(28);n(807);function s(){s=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},o=l.iterator||"@@iterator",r=l.asyncIterator||"@@asyncIterator",i=l.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,l){var o=t&&t.prototype instanceof m?t:m,r=Object.create(o.prototype),i=new N(l||[]);return a(r,"_invoke",{value:j(e,n,i)}),r}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var v={};function m(){}function p(){}function f(){}var h={};c(h,o,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(k([])));b&&b!==t&&n.call(b,o)&&(h=b);var y=f.prototype=m.prototype=Object.create(h);function _(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var l;a(this,"_invoke",{value:function(a,o){function r(){return new t((function(l,r){!function a(l,o,r,i){var c=d(e[l],e,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){a("next",e,r,i)}),(function(e){a("throw",e,r,i)})):t.resolve(s).then((function(e){u.value=e,r(u)}),(function(e){return a("throw",e,r,i)}))}i(c.arg)}(a,o,l,r)}))}return l=l?l.then(r,r):r()}})}function j(e,t,n){var a="suspendedStart";return function(l,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===l)throw o;return S()}for(n.method=l,n.arg=o;;){var r=n.delegate;if(r){var i=w(r,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=d(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function w(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var l=d(a,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,v;var o=l.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,l=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=f,a(y,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},_(E.prototype),c(E.prototype,r,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,a,l,o){void 0===o&&(o=Promise);var r=new E(u(t,n,a,l),o);return e.isGeneratorFunction(n)?r:r.next().then((function(e){return e.done?e.value:r.next()}))},_(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=k,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return r.type="throw",r.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var l=this.tryEntries.length-1;l>=0;--l){var o=this.tryEntries[l],r=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a];if(l.tryLoc<=this.prev&&n.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var o=l;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=e,r.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(r)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var l=a.arg;O(n)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}t.default=function(){var e,t,n=Object(i.useState)({Project:null,Building:null,floor:null,unit:null,secondfloor:null,flat:null,parking:null,booking_price:null,booking_date:null,allotment_date:null,agreement_date:null,Owner_name:null,payment_stage:null,price:null,payment_receive:null,payment_type:null,check_number:null,date:null,bank_name:null,branch_name:null,bank_account:null,card_number:null,id:null,price_with_tax:null}),v=Object(r.a)(n,2),m=v[0],p=v[1],f=function(n){e=n.target.name,t=n.target.value,p(Object(o.a)(Object(o.a)({},m),{},Object(l.a)({},e,t))),console.log({data:m})},h=Object(i.useState)(null),g=Object(r.a)(h,2),b=g[0],y=g[1],_=Object(i.useState)(null),E=Object(r.a)(_,2),j=E[0],w=E[1],x=Object(i.useState)(null),O=Object(r.a)(x,2),N=O[0],k=O[1],S=Object(i.useState)(null),L=Object(r.a)(S,2),P=L[0],F=L[1],B=Object(i.useState)(null),C=Object(r.a)(B,2),T=C[0],G=C[1],H=Object(i.useState)(null),A=Object(r.a)(H,2),D=A[0],I=A[1],U=function(){var e=Object(a.a)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:t=e.sent,I(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.g)();Object(i.useEffect)((function(){U()}),[]);var J=function(){var e=Object(a.a)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)||"Select Project"===t){e.next=5;break}return e.next=3,d.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(t),{Headers:{"Content-Type":"application/json"}});case 3:n=e.sent,F(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(a.a)(s().mark((function e(t,n){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)||24!==(null===n||void 0===n?void 0:n.length)&&12!==(null===n||void 0===n?void 0:n.length)){e.next=5;break}return e.next=3,d.a.get("".concat("https://growbuild-jg.onrender.com","/api/find/unit/").concat(t,"/").concat(n),{Headers:{"Content-Type":"application/json"}});case 3:a=e.sent,k(a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(a.a)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)){e.next=5;break}return e.next=3,d.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(t),{Headers:{"Content-Type":"application/json"}});case 3:n=e.sent,G(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(i.useState)(null),z=Object(r.a)(M,2),K=z[0],Q=z[1],R=function(){var e=Object(a.a)(s().mark((function e(t,n){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(12!==(null===t||void 0===t?void 0:t.length)&&24!==(null===t||void 0===t?void 0:t.length)||12!==(null===n||void 0===n?void 0:n.length)&&24!==(null===n||void 0===n?void 0:n.length)){e.next=5;break}return e.next=3,d.a.get("".concat("https://growbuild-jg.onrender.com","/api/demand/").concat(t,"/").concat(n),{Headers:{"contnt-type":"application/json"}});case 3:200===(a=e.sent).status&&(Q(a.data),console.log(a.data));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=Object(i.useState)(null),W=Object(r.a)(V,2),X=(W[0],W[1]),Z=function(){var e=Object(a.a)(s().mark((function e(t,n,a,l,r){var i,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(12!==(null===t||void 0===t?void 0:t.length)&&24!==(null===t||void 0===t?void 0:t.length)||12!==(null===n||void 0===n?void 0:n.length)&&24!==(null===n||void 0===n?void 0:n.length)||12!==(null===a||void 0===a?void 0:a.length)&&24!==(null===a||void 0===a?void 0:a.length)||0===l&&null===l||0===r&&null===r){e.next=5;break}return e.next=3,d.a.get("".concat("https://growbuild-jg.onrender.com","/api/").concat(t,"/").concat(n,"/").concat(a,"/").concat(r),{Headers:{"Content-Type":"application/json"}});case 3:200===(i=e.sent).status&&(console.log(i.data),c=i.data,p(Object(o.a)(Object(o.a)({},m),{},{Project:null===m||void 0===m?void 0:m.Project,Building:null===m||void 0===m?void 0:m.Building,floor:null===m||void 0===m?void 0:m.floor,unit:null===m||void 0===m?void 0:m.unit,secondfloor:null===m||void 0===m?void 0:m.secondfloor,flat:null===m||void 0===m?void 0:m.flat,parking:null===m||void 0===m?void 0:m.parking,booking_price:null===c||void 0===c?void 0:c.booking_price,booking_date:null===m||void 0===m?void 0:m.booking_date,allotment_date:null===m||void 0===m?void 0:m.allotment_date,agreement_date:null===m||void 0===m?void 0:m.agreement_date,Owner_name:null===c||void 0===c?void 0:c.first_applicant_name,payment_stage:null===m||void 0===m?void 0:m.payment_stage,price:null===m||void 0===m?void 0:m.price,payment_receive:null===m||void 0===m?void 0:m.payment_receive,payment_type:null===m||void 0===m?void 0:m.payment_type,check_number:null===m||void 0===m?void 0:m.check_number,date:null===m||void 0===m?void 0:m.date,bank_name:null===m||void 0===m?void 0:m.bank_name,branch_name:null===m||void 0===m?void 0:m.branch_name,bank_account:null===m||void 0===m?void 0:m.bank_account,card_number:null===m||void 0===m?void 0:m.card_number,price_with_tax:null===m||void 0===m?void 0:m.price_with_tax})),X(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,l,o){return e.apply(this,arguments)}}(),$=Object(i.useState)(null),ee=Object(r.a)($,2),te=(ee[0],ee[1]),ne=function(){var e=Object(a.a)(s().mark((function e(t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("https://growbuild-jg.onrender.com","/api/get/demand/").concat(t),{Headers:{"Content-Type":"application/json"}});case 2:200===(n=e.sent).status&&(te(n.data),a=n.data,p(Object(o.a)(Object(o.a)({},m),{},{Project:null===m||void 0===m?void 0:m.Project,Building:null===m||void 0===m?void 0:m.Building,floor:null===m||void 0===m?void 0:m.floor,unit:null===m||void 0===m?void 0:m.unit,secondfloor:null===m||void 0===m?void 0:m.secondfloor,flat:null===m||void 0===m?void 0:m.flat,parking:null===m||void 0===m?void 0:m.parking,booking_price:null===m||void 0===m?void 0:m.booking_price,booking_date:null===m||void 0===m?void 0:m.booking_date,allotment_date:null===m||void 0===m?void 0:m.allotment_date,agreement_date:null===m||void 0===m?void 0:m.agreement_date,Owner_name:null===m||void 0===m?void 0:m.Owner_name,payment_stage:null===m||void 0===m?void 0:m.payment_stage,price:null===a||void 0===a?void 0:a.amount,payment_receive:null===m||void 0===m?void 0:m.payment_receive,payment_type:null===m||void 0===m?void 0:m.payment_type,check_number:null===m||void 0===m?void 0:m.check_number,date:null===m||void 0===m?void 0:m.date,bank_name:null===m||void 0===m?void 0:m.bank_name,branch_name:null===m||void 0===m?void 0:m.branch_name,bank_account:null===m||void 0===m?void 0:m.bank_account,card_number:null===m||void 0===m?void 0:m.card_number,price_with_tax:null===m||void 0===m?void 0:m.price_with_tax})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(a.a)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ne(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=Object(i.useState)(null),oe=Object(r.a)(le,2),re=(oe[0],oe[1]),ie=function(){var e=Object(a.a)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("https://growbuild-jg.onrender.com","/api/get/all/buyermaster"),{Headers:{"Content-Type":"application/json"}});case 2:200===(t=e.sent).status&&(re(t.data),console.log(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){ie()}),[]);var ce=function(){var e=Object(a.a)(s().mark((function e(){var t,n,a,l,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("https://growbuild-jg.onrender.com","/api/get/buyer/").concat(m.Project,"/").concat(m.Building,"/").concat(m.floor,"/").concat(m.unit,"/").concat(m.payment_stage));case 2:n=e.sent,404===(null===(t=n.data)||void 0===t?void 0:t.status)?w("Not Found!"):(o=m.price-(null===(a=n.data)||void 0===a?void 0:a.price),y(null===(l=n.data)||void 0===l?void 0:l.price),w(o<=0?"Completed":"Pending"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container bg-white p-2 rounded-2"},c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},c.a.createElement("h3",{className:"text-alternate text-primary"},"Payment Master"),c.a.createElement("hr",null),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Project"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"project",onChange:function(e){f(e),J(e.target.value)},name:"Project",value:m.Project},null===D?c.a.createElement("option",{value:null,name:null},"Loading..."):c.a.createElement("option",{value:null,name:null},"Select Project"),null!==D&&0===(null===D||void 0===D?void 0:D.length)&&c.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==D&&(null===D||void 0===D?void 0:D.length)>0&&D.map((function(e){return c.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.Name)}))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Building"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"building",name:"Building",onChange:function(e){f(e),q(e.target.value),Y(e.target.value,null===m||void 0===m?void 0:m.Project),R(e.target.value,null===m||void 0===m?void 0:m.Project)},value:m.Building},null===m.Project?c.a.createElement("option",{value:null,name:null},"First select Project"):c.a.createElement(c.a.Fragment,null,null===P&&c.a.createElement("option",{value:null,name:null},"Loading..."),null!==P&&0===(null===P||void 0===P?void 0:P.length)&&c.a.createElement("option",{value:null,name:null},"No Building Avaliable")),(null===P||void 0===P?void 0:P.length)>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:null,name:null},"Select Building"),null===P||void 0===P?void 0:P.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.buildingName))})))))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Floor"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"floor",name:"floor",onChange:f,value:m.floor},null===T?c.a.createElement("option",{value:null,name:null},"Loading..."):c.a.createElement("option",{value:null,name:null},"Select Floor"),null!==T&&0===(null===T||void 0===T?void 0:T.total_number_of_floors)&&c.a.createElement("option",{value:null,name:null},"No Floor Avaliable"),null!==T&&(null===T||void 0===T?void 0:T.total_number_of_floors)>0&&function(e){for(var t=[],n=1;n<=e;n++)t.push(c.a.createElement("option",{key:n,value:n},n));return t}(null===T||void 0===T?void 0:T.total_number_of_floors)))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Unit"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"unit",name:"unit",onChange:f,value:m.unit},null===m.Project&&null===m.Building&&c.a.createElement("option",{value:null,name:null},"Select Project First"),null===m.Building&&null!==m.Project&&c.a.createElement("option",{value:null,name:null},"Select Building First"),null!==m.Building&&null!==m.Project&&null===N&&c.a.createElement("option",{value:null,name:null},"Loading..."),null!==N&&c.a.createElement(c.a.Fragment,null,0===N.length?c.a.createElement("option",{value:null,name:null},"No Units Avaliable."):c.a.createElement("option",{value:null,name:null},"Select Unit"),N.length>0&&N.map((function(e){if(e.unit_name.slice(0,1)===m.floor)return c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.unit_name)})))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Fetch Details"),null!==(null===m||void 0===m?void 0:m.unit)?c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return null===m||void 0===m||m.payment_stage,void((null!==(null===m||void 0===m?void 0:m.flat)||(null===m||void 0===m?void 0:m.flat)>0)&&Z(m.Building,m.Project,m.unit,m.flat,m.floor))}},"Fetch Details"):c.a.createElement("button",{className:"btn btn-primary",disabled:!0},"Fetch Details")),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Owner Name"),null!==(null===m||void 0===m?void 0:m.Owner_name)?c.a.createElement("p",null,null===m||void 0===m?void 0:m.Owner_name):c.a.createElement("p",null,"Loading...")),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Payment Stage"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"stage",name:"payment_stage",onChange:f,value:null===m||void 0===m?void 0:m.payment_stage},null===P?c.a.createElement("option",{value:"1"},"Select Building First"):c.a.createElement(c.a.Fragment,null,null!==P&&0===(null===K||void 0===K?void 0:K.length)&&null!==K&&c.a.createElement("option",{value:"2"},"No Stage Available"),null!==P&&(null===K||void 0===K?void 0:K.length)>0&&null!==K&&c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:"2"},"Select Stage"),null!==P&&(null===K||void 0===K?void 0:K.length)>0&&null!==K&&(null===K||void 0===K?void 0:K.map((function(e){return console.log(e),c.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.stage_name)})))))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Stage"),null!==(null===m||void 0===m?void 0:m.payment_stage)?c.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){ae(null===m||void 0===m?void 0:m.payment_stage),ce()}},"Fetch Stage"):c.a.createElement("button",{className:"btn btn-primary",disabled:!0},"Fetch Stage")),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Stage Price"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"price","aria-label":"Select Stage First",placeholder:"Select Stage First",name:"price",value:m.price,onChange:f,readonly:"true",required:""}))),c.a.createElement("div",{className:"col-md-3 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Status"),null!=j?c.a.createElement("p",{className:"text-alternate"},j):c.a.createElement("p",null,"Select Stage first")),c.a.createElement("div",{className:"col-md-3 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Status"),null!=j?c.a.createElement("p",{className:"text-alternate"},b):c.a.createElement("p",null,"Select Stage first")))))}}}]);
//# sourceMappingURL=161.e3b24246.chunk.js.map