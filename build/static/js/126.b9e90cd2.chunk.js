/*! For license information please see 126.b9e90cd2.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[126],{1594:function(e,t,n){},2210:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(87),l=n(45),o=n(0),i=n.n(o),c=n(28),u=n(62),s=(n(1594),n(196)),m=n.n(s);function h(){h=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(F){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var l=t&&t.prototype instanceof f?t:f,o=Object.create(l.prototype),i=new L(a||[]);return r(o,"_invoke",{value:x(e,n,i)}),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(F){return{type:"throw",arg:F}}}e.wrap=u;var m={};function f(){}function d(){}function p(){}var v={};c(v,l,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==t&&n.call(g,l)&&(v=g);var E=p.prototype=f.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;r(this,"_invoke",{value:function(r,l){function o(){return new t((function(a,o){!function r(a,l,o,i){var c=s(e[a],e,l);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,i)}),(function(e){r("throw",e,o,i)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,i)}))}i(c.arg)}(r,l,a,o)}))}return a=a?a.then(o,o):o()}})}function x(e,t,n){var r="suspendedStart";return function(a,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw l;return O()}for(n.method=a,n.arg=l;;){var o=n.delegate;if(o){var i=N(o,n);if(i){if(i===m)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function N(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var l=a.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=p,r(E,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,a,l){void 0===l&&(l=Promise);var o=new w(u(t,n,r,a),l);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(E),c(E,i,"Generator"),c(E,l,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=j,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var i=n.call(l,"catchLoc"),c=n.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}t.default=function(){var e=Object(o.useState)({loading:!0,total:[]}),t=Object(l.a)(e,2),n=t[0],s=t[1],f=Object(o.useState)(),d=Object(l.a)(f,2),p=d[0],v=d[1],y=Object(u.h)(),g=new URLSearchParams(y.search),E=g.get("building"),b=g.get("unit");console.log({us:E,ID:b});var w=function(){var e=Object(a.a)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://growbuild-jg.onrender.com/api/get/all/payment/single/".concat(E,"/").concat(b));case 2:200===(t=e.sent).status&&(v(t.data),console.log(t.data)),s(Object(r.a)(Object(r.a)({},n),{},{loading:!1}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){w()}),[]);var x=function(){for(var e,t=null===p||void 0===p||null===(e=p.booking)||void 0===e?void 0:e.booking_price,n=0;n<(null===p||void 0===p||null===(r=p.PaymentTotal)||void 0===r?void 0:r.length);n++){var r,a;t+=null===p||void 0===p||null===(a=p.PaymentTotal[n])||void 0===a?void 0:a.payment_receive}return t};return n.loading||null===p?n.loading||null===p?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flexDirection:"column"},className:"d-flex flex-col align-items-start justify-content-start"},i.a.createElement("h1",null,"Loading..."))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flexDirection:"column"},className:"d-flex flex-col align-items-start justify-content-start"},i.a.createElement("h1",null,"No Data Found"))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container my-3 px-3 py-3 shadow"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("button",{onClick:function(){window.print()},className:"btn btn-primary btn-md my-2 float-end"},"Print Now")),i.a.createElement("div",{className:"col-12"},i.a.createElement("img",{src:m.a,alt:"logo",className:"img-fluid "}),i.a.createElement("h3",{className:"text-center"},"Payment Details"),i.a.createElement("hr",null))),i.a.createElement("div",{id:"print-content",className:"bg-white p-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6 col-md-6 text-left"},i.a.createElement("h5",null,p.profile.building.buildingName),i.a.createElement("h5",null,"Mrs. ",p.booking.first_applicant_name),i.a.createElement("h5",null,p.booking.first_applicant_permanentAddress),i.a.createElement("h5",null,p.booking.floor,",",p.profile.unitDetails.unit_name),i.a.createElement("p",null,"Area: ",p.profile.unitDetails.total_area_this_unit),i.a.createElement("p",null,"Rate: ",p.profile.unitDetails.price),i.a.createElement("p",null,"Booking Date: ",p.booking.booking_date)),i.a.createElement("div",{className:"col-6 col-md-6 text-left"},i.a.createElement("p",null,"Unit Cost Rs. :"," ",p.profile.unitDetails.totalPrice.toFixed(2)),i.a.createElement("p",null,"Total Cost Rs. : ",p.booking.totalAmount.toFixed(2)),i.a.createElement("p",null,"Total Cost Paid Rs. : ",x()),i.a.createElement("p",null,"Unit Balance Rs. :"," ",p.booking.totalAmount.toFixed(2)-x()))),i.a.createElement("span",{className:"d-flex w-100 my-2",style:{height:"1px",width:"100%",backgroundColor:"black"}}),i.a.createElement("table",{className:"table-hover table"},i.a.createElement("thead",{className:"table-border"},i.a.createElement("tr",null,i.a.createElement("th",null,"Sno."),i.a.createElement("th",null,"Stage Name"),i.a.createElement("th",null,"Amount Rate (%)"))),i.a.createElement("tbody",null,p.dataArray.map((function(e,t){return i.a.createElement("tr",{className:"my-2"},i.a.createElement("td",null,t+1),i.a.createElement("td",null,e.name),i.a.createElement("td",null,e.amount))})))),i.a.createElement("h5",{className:"my-2"},"Extra Facilities"),i.a.createElement("table",{className:"table-hover table"},i.a.createElement("thead",{className:"table-border"},i.a.createElement("tr",null,i.a.createElement("th",null,"Sno."),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Provider"),i.a.createElement("th",null,"SGST"),i.a.createElement("th",null,"CGST"),i.a.createElement("th",null,"Amount"))),i.a.createElement("tbody",null,p.booking.extra_facility.map((function(e,t){return i.a.createElement("tr",{className:"my-2"},i.a.createElement("td",null,t+1),i.a.createElement("td",null,e.extra_facility),i.a.createElement("td",null,e.name),i.a.createElement("td",null,e.sgst),i.a.createElement("td",null,e.cgst),i.a.createElement("td",null,e.totalPrice.toFixed(2)))})))),i.a.createElement("hr",null),i.a.createElement("table",{className:"table table-hover mt-3"},i.a.createElement("thead",{className:"table-dark"},i.a.createElement("tr",null,i.a.createElement("th",null,"Sno."),i.a.createElement("th",null,"Pay Head Amt"),i.a.createElement("th",null,"Chq/DD/RTGS/ NEFT No."),i.a.createElement("th",null,"Chq Amt(Rs.)"),i.a.createElement("th",null,"balance"))),i.a.createElement("tbody",null,i.a.createElement("tr",{className:"my-2"},i.a.createElement("td",null,"1"),i.a.createElement("td",null,p.booking.totalAmount.toFixed(2)),i.a.createElement("td",null,"--"),i.a.createElement("td",null,p.booking.booking_price.toFixed(2)),i.a.createElement("td",null,(p.booking.totalAmount-p.booking.bookingPrice).toFixed(2))),p.PaymentTotal.map((function(e,t){return i.a.createElement("tr",{className:"my-2"},i.a.createElement("td",null,t+2),i.a.createElement("td",{className:"my-1"},(parseFloat(e.payment_receive)+parseFloat(e.balance)).toFixed(2)),i.a.createElement("td",null,e.payment_type),i.a.createElement("td",null,e.payment_receive),i.a.createElement("td",null,e.balance))})))))))}}}]);
//# sourceMappingURL=126.b9e90cd2.chunk.js.map