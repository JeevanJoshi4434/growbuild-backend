/*! For license information please see 133.98747b71.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[133],{2162:function(e,t,n){"use strict";n.r(t);var a=n(83),r=n(43),o=n(3),l=n(42),i=n(28),c=n(0),u=n.n(c),s=n(59);n(905);function m(){m=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,l=Object.create(o.prototype),i=new O(r||[]);return a(l,"_invoke",{value:j(e,n,i)}),l}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var d={};function p(){}function v(){}function f(){}var h={};c(h,o,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(_([])));b&&b!==t&&n.call(b,o)&&(h=b);var y=f.prototype=p.prototype=Object.create(h);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;a(this,"_invoke",{value:function(a,o){function l(){return new t((function(r,l){!function a(r,o,l,i){var c=s(e[r],e,o);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,l,i)}),(function(e){a("throw",e,l,i)})):t.resolve(m).then((function(e){u.value=e,l(u)}),(function(e){return a("throw",e,l,i)}))}i(c.arg)}(a,o,r,l)}))}return r=r?r.then(l,l):l()}})}function j(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var l=n.delegate;if(l){var i=N(l,n);if(i){if(i===d)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=s(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function N(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return v.prototype=f,a(y,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:v,configurable:!0}),v.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(w.prototype),c(w.prototype,l,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var l=new w(u(t,n,a,r),o);return e.isGeneratorFunction(n)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},E(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=_,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return l.type="throw",l.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;k(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.default=function(){var e,t,n=Object(c.useState)(null),d=Object(l.a)(n,2),p=(d[0],d[1]),v=Object(c.useState)(!1),f=Object(l.a)(v,2),h=(f[0],f[1]),g=Object(c.useState)(null),b=Object(l.a)(g,2),y=b[0],E=b[1],w=Object(c.useState)({price:null,owner:null,floor:null,building:null,unit:null,flat:null,allotmentDate:null,parking:null,id:null,bookingDate:null,agreementDate:null}),j=Object(l.a)(w,2),N=j[0],x=j[1],k=Object(c.useState)(null),O=Object(l.a)(k,2),_=O[0],L=O[1],P=Object(c.useState)(null),S=Object(l.a)(P,2),D=S[0],F=S[1],C=function(n){e=n.target.name,t=n.target.value,x(Object(o.a)(Object(o.a)({},N),{},Object(r.a)({},e,t)))},T=Object(c.useState)(null),A=Object(l.a)(T,2),B=A[0],G=A[1],H=function(){var e=Object(a.a)(m().mark((function e(){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:t=e.sent,G(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.g)();Object(c.useEffect)((function(){H()}),[]);var q=function(){var e=Object(a.a)(m().mark((function e(t){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)||"Select Project"===t){e.next=5;break}return e.next=3,i.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(t),{Headers:{"Content-Type":"application/json"}});case 3:n=e.sent,L(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(a.a)(m().mark((function e(t,n){var a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)||24!==(null===n||void 0===n?void 0:n.length)&&12!==(null===n||void 0===n?void 0:n.length)){e.next=5;break}return e.next=3,i.a.get("".concat("https://growbuild-jg.onrender.com","/api/find/unit/").concat(t,"/").concat(n),{Headers:{"Content-Type":"application/json"}});case 3:a=e.sent,E(a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(a.a)(m().mark((function e(t){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)){e.next=5;break}return e.next=3,i.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(t),{Headers:{"Content-Type":"application/json"}});case 3:n=e.sent,F(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(a.a)(m().mark((function e(t,n,a,r,l){var c,u;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(12!==t.length&&24!==t.length||12!==n.length&&24!==n.length||12!==a.length&&24!==a.length||0===r&&null===r||0===l&&null===l){e.next=5;break}return e.next=3,i.a.get("".concat("https://growbuild-jg.onrender.com","/api/").concat(t,"/").concat(n,"/").concat(a,"/").concat(r,"/").concat(l),{Headers:{"Content-Type":"application/json"}});case 3:201===(c=e.sent).status?(h(!1),x(Object(o.a)(Object(o.a)({},N),{},{price:0,owner:"No Record Found!",floor:N.floor,building:N.building,unit:N.unit,flat:N.flat,allotmentDate:null,parking:0,id:N.id,bookingDate:null,agreementDate:null}))):200===c.status&&(h(!0),p(c.data),console.log(c.data),u=c.data,x(Object(o.a)(Object(o.a)({},N),{},{price:null===u||void 0===u?void 0:u.booking_price,owner:null===u||void 0===u?void 0:u.first_applicant_name,floor:N.floor,building:N.building,unit:N.unit,flat:N.flat,allotmentDate:null===u||void 0===u?void 0:u.allotment_date,parking:null===u||void 0===u?void 0:u.parking,id:N.id,bookingDate:null===u||void 0===u?void 0:u.booking_date,agreementDate:null===u||void 0===u?void 0:u.agreement_date})));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r,o){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"container bg-white p-2 rounded-2"},u.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg"},u.a.createElement("h3",{className:"text-alternate text-primary"},"Set Booking"),u.a.createElement("hr",null),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Select Project"),u.a.createElement("div",{className:"input-group"},u.a.createElement("select",{className:"form-control",id:"project",onChange:function(e){C(e),q(e.target.value)},name:"Project",value:N.Project},null===B?u.a.createElement("option",{value:null,name:null},"Loading..."):u.a.createElement("option",{value:null,name:null},"Select Project"),null!==B&&0===(null===B||void 0===B?void 0:B.length)&&u.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==B&&(null===B||void 0===B?void 0:B.length)>0&&B.map((function(e){return u.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.Name)}))))),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Select Building"),u.a.createElement("div",{className:"input-group"},u.a.createElement("select",{className:"form-control",id:"building",name:"building",onChange:function(e){C(e),U(e.target.value),I(e.target.value,null===N||void 0===N?void 0:N.Project)},value:N.building},null===N.Project?u.a.createElement("option",{value:null,name:null},"First select Project"):u.a.createElement(u.a.Fragment,null,null===_&&u.a.createElement("option",{value:null,name:null},"Loading..."),null!==_&&0===(null===_||void 0===_?void 0:_.length)&&u.a.createElement("option",{value:null,name:null},"No Building Avaliable")),(null===_||void 0===_?void 0:_.length)>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement("option",{value:null,name:null},"Select Building"),null===_||void 0===_?void 0:_.map((function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.buildingName))})))))),u.a.createElement("div",{className:"col-md-4 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Select Floor"),u.a.createElement("div",{className:"input-group"},u.a.createElement("select",{className:"form-control",id:"floor",name:"floor",onChange:function(e){C(e)},value:N.floor},null===D?u.a.createElement("option",{value:null,name:null},"Loading..."):u.a.createElement("option",{value:null,name:null},"Select Floor"),null!==D&&0===(null===D||void 0===D?void 0:D.total_number_of_floors)&&u.a.createElement("option",{value:null,name:null},"No Floor Avaliable"),null!==D&&(null===D||void 0===D?void 0:D.total_number_of_floors)>0&&function(e){for(var t=[],n=1;n<=e;n++)t.push(u.a.createElement("option",{key:n,value:n},n));return t}(null===D||void 0===D?void 0:D.total_number_of_floors)))),u.a.createElement("div",{className:"col-md-4 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Select Unit"),u.a.createElement("div",{className:"input-group"},u.a.createElement("select",{className:"form-control",id:"unit",name:"unit",onChange:function(e){C(e)},value:N.unit},null===N.Project&&null===N.building&&u.a.createElement("option",{value:null,name:null},"Select Project"),null===N.building&&null!==N.Project&&u.a.createElement("option",{value:null,name:null},"Select Building"),null!==N.building&&null!==N.Project&&null===y&&u.a.createElement("option",{value:null,name:null},"Loading..."),null!==y&&u.a.createElement(u.a.Fragment,null,0===y.length?u.a.createElement("option",{value:null,name:null},"No Units Avaliable."):u.a.createElement("option",{value:null,name:null},"Select Unit"),y.length>0&&y.map((function(e){return u.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.unit_name)})))))),u.a.createElement("div",{className:"col-md-4 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Fetch Data"),u.a.createElement("button",{type:"button",className:"btn btn-primary ",onClick:function(){return J(N.building,N.Project,N.unit,N.flat,N.floor)}},"Fetch Booking")),u.a.createElement("div",{className:"col-md-4 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Owner Name"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"text","aria-label":"ownerName",placeholder:"Select Flat first",readOnly:"true",value:null===N||void 0===N?void 0:N.owner,name:"owner",onChange:C,className:"form-control"}))),u.a.createElement("div",{className:"col-md-4 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Parking"),u.a.createElement("div",{className:"input-group"},u.a.createElement("span",{className:"input-group-text"},u.a.createElement("input",{"aria-label":"Parkings",id:"isParkings",name:"isParkings",type:"radio",className:"form-check-input"})),u.a.createElement("input",{type:"number","aria-label":"Parking No",placeholder:"Enter Parking No",className:"form-control",name:"parking",value:null===N||void 0===N?void 0:N.parking,onChange:C}))),u.a.createElement("div",{className:"col-md-4 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Booking Price"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"text",className:"form-control",id:"price",name:"price",value:N.price,onChange:C,readOnly:"true",required:""}))),u.a.createElement("div",{className:"col-md-4 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"}," Booking Date"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"date",className:"form-control",id:"bookingDate",name:"bookingDate",onChange:C,value:null===N||void 0===N?void 0:N.bookingDate,required:""}))),u.a.createElement("div",{className:"col-md-4 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"}," Allotment Date"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"date",className:"form-control",id:"allotmentDate",name:"allotmentDate",onChange:C,value:null===N||void 0===N?void 0:N.allotmentDate,required:""}))),u.a.createElement("div",{className:"col-md-4 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"}," Agreement Date"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"date",className:"form-control",id:"agreementDate",name:"agreementDate",onChange:C,value:null===N||void 0===N?void 0:N.agreementDate,required:""}))))))}},905:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),o=r.a.createElement("span",{className:"text-danger"},"*")}}]);
//# sourceMappingURL=133.98747b71.chunk.js.map