/*! For license information please see 135.6d8ee488.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[135],{2161:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a(3),o=a(83),l=a(42),c=a(0),i=a.n(c),m=a(59),s=a(905),u=a(28);function p(){p=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(U){i=function(e,t,a){return e[t]=a}}function m(e,t,a,r){var o=t&&t.prototype instanceof d?t:d,l=Object.create(o.prototype),c=new L(r||[]);return n(l,"_invoke",{value:x(e,a,c)}),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(U){return{type:"throw",arg:U}}}e.wrap=m;var u={};function d(){}function f(){}function b(){}var h={};i(h,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==t&&a.call(y,o)&&(h=y);var E=b.prototype=d.prototype=Object.create(h);function N(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var r;n(this,"_invoke",{value:function(n,o){function l(){return new t((function(r,l){!function n(r,o,l,c){var i=s(e[r],e,o);if("throw"!==i.type){var m=i.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):t.resolve(u).then((function(e){m.value=e,l(m)}),(function(e){return n("throw",e,l,c)}))}c(i.arg)}(n,o,r,l)}))}return r=r?r.then(l,l):l()}})}function x(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return F()}for(a.method=r,a.arg=o;;){var l=a.delegate;if(l){var c=w(l,a);if(c){if(c===u)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=s(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}function w(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:F}}function F(){return{value:void 0,done:!0}}return f.prototype=b,n(E,"constructor",{value:b,configurable:!0}),n(b,"constructor",{value:f,configurable:!0}),f.displayName=i(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,i(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},N(g.prototype),i(g.prototype,l,(function(){return this})),e.AsyncIterator=g,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var l=new g(m(t,a,n,r),o);return e.isGeneratorFunction(a)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},N(E),i(E,c,"Generator"),i(E,o,(function(){return this})),i(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return l.type="throw",l.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),i=a.call(o,"finallyLoc");if(c&&i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;j(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:S(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t,a=Object(c.useState)({Project:null,block:null,DP_discount:null,unit_number:null,RS_squareFeet:null,buildUpArea:null,carpetArea:null,balconyArea:null,salableArea:null,floor:null,bedrooms:null,unit_type:null,numOfUnits:null,optionalUnit:null}),d=Object(l.a)(a,2),f=d[0],b=d[1],h=Object(c.useState)(null),v=Object(l.a)(h,2),y=v[0],E=v[1],N=function(){var e=Object(o.a)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://growbuild.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:t=e.sent,E(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(m.g)();Object(c.useEffect)((function(){N()}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container bg-white p-2 rounded-2"},i.a.createElement("form",{className:"row needs-validation",novalidate:!0},i.a.createElement("div",{className:"col-md-10 col-12"},i.a.createElement("label",{htmlFor:"companyName",className:"text-alternate mb-1"},s.a," Project"),i.a.createElement("div",{className:"input-group mb-1"},i.a.createElement("select",{className:"form-control",id:"project",onChange:function(a){!function(a){e=a.target.name,t=a.target.value,b(Object(r.a)(Object(r.a)({},f),{},Object(n.a)({},e,t)))}(a)},name:"Project",value:f.Project},null===y?i.a.createElement("option",{value:null,name:null},"Loading..."):i.a.createElement("option",{value:null,name:null},"Select Project"),null!==y&&0===(null===y||void 0===y?void 0:y.length)&&i.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==y&&(null===y||void 0===y?void 0:y.length)>0&&y.map((function(e){return i.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.Name)})))),i.a.createElement("label",{htmlFor:"companyName",className:"text-alternate mb-1"},s.a," Block"),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("select",{className:"form-control",id:"companyName",name:"companyName",required:!0},i.a.createElement("option",{value:"someOption"},"Some option"),i.a.createElement("option",{value:"otherOption"},"Other option")))),i.a.createElement("div",{className:"col-md-2 col-12 justify-content-center d-flex flex-column align-item-center"},i.a.createElement("button",{className:"btn btn-outline-primary",type:"button"},"Print")),i.a.createElement("div",{className:"col-md-3 col-12 justify-content-center d-flex flex-column align-item-center"},i.a.createElement("p",{className:"text-alternate"},"DP Discount(%)"),i.a.createElement("input",{type:"text",className:"form-control",id:"DPDiscount",name:"DPDiscount",required:""}))),i.a.createElement("form",{className:"row"},i.a.createElement("div",{className:"col-md-3 col-12"},i.a.createElement("label",{id:"Unit",className:"text-alternate mb-3"},s.a,"Unit Type"),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("textarea",{required:!0,className:"form-control",id:"Unit",name:"Unit"}))),i.a.createElement("div",{className:"row col-md-9 col-12"},i.a.createElement("div",{className:"col-md-2 col-12"},i.a.createElement("label",{id:"Units",className:"text-alternate mb-3"},s.a,"Unit/No."),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("input",{type:"text",className:"form-control",id:"Units",name:"Units",required:!0}))),i.a.createElement("div",{className:"col-md-2 col-12"},i.a.createElement("label",{htmlFor:"SFTprice",className:"text-alternate mb-3"},s.a,"Rs. /SFt"),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("input",{type:"text",className:"form-control",id:"SFTprice",name:"SFTprice",required:""}))),i.a.createElement("div",{className:"col-md-2 col-12"},i.a.createElement("p",{className:"text-alternate mb-2"},"Build Up Area(SFt)"),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("input",{type:"text",className:"form-control",id:"Exta",name:"Exta",required:""}))),i.a.createElement("div",{className:"col-md-2 col-12"},i.a.createElement("p",{className:"text-alternate mb-2"},"Carpet Area(SFt)"),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("input",{type:"number",className:"form-control",id:"MobileNo",name:"MobileNo",required:""}))),i.a.createElement("div",{className:"col-md-2 col-12"},i.a.createElement("p",{className:"text-alternate mb-3"},"Balcony Area"),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("input",{type:"text",className:"form-control",id:"PagerNo",name:"PagerNo",required:""}))),i.a.createElement("div",{className:"col-md-4 col-12"},i.a.createElement("label",{htmlFor:"salable",className:"text-alternate mb-1"},s.a,"Salable Area"),i.a.createElement("div",{className:"input-group mb-1"},i.a.createElement("input",{type:"text",className:"form-control",id:"salable",name:"salable",required:!0})),i.a.createElement("label",{htmlFor:"floor",className:"text-alternate mb-1"},s.a,"Floor"),i.a.createElement("select",{className:"form-control",id:"companyName",name:"companyName",required:!0},i.a.createElement("option",{value:"someOption"},"Some option"),i.a.createElement("option",{value:"otherOption"},"Other option")),i.a.createElement("label",{htmlFor:"bedRoom",className:"text-alternate mb-1"},s.a,"Bed Rooms"),i.a.createElement("select",{className:"form-control mb-3",id:"companyName",name:"companyName",required:!0},i.a.createElement("option",{value:"someOption"},"Some option"),i.a.createElement("option",{value:"otherOption"},"Other option"))),i.a.createElement("div",{className:"col-md-7 col-12"},i.a.createElement("label",{id:"Unit",className:"text-alternate mb-3"},s.a,"Unit Type"),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("textarea",{required:!0,className:"form-control",id:"Unit",name:"Unit"})))),i.a.createElement("div",{className:"col-md-1 col-12 d-flex flex-column"},i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-1"}," > > "),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-1"}," < < "),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-1"},"\u2715"),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-1"},"Cls")),i.a.createElement("div",{className:"col-md-11 col-12"},i.a.createElement("div",{className:" d-flex justify-content-between"},i.a.createElement("p",{className:"text-alternate"},"Unit"),i.a.createElement("p",{className:"text-alternate"},"Unit No."),i.a.createElement("p",{className:"text-alternate"},"Rs./SFt"),i.a.createElement("p",{className:"text-alternate"},"Stable Area (SFt)"),i.a.createElement("p",{className:"text-alternate"},"Floor"),i.a.createElement("p",{className:"text-alternate"},"Bed Rooms")),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("textarea",{className:"form-control",id:"ownerList",name:"OwnerList",required:""}))),i.a.createElement("div",{className:"col-md-4 col-12"},i.a.createElement("div",{className:" d-flex justify-content-between"},i.a.createElement("p",{className:"text-alternate"},"Optional Units")),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("textarea",{className:"form-control",id:"ownerList",name:"OwnerList",required:""}))),i.a.createElement("div",{className:"col-md-2 mt-1 col-12 d-flex flex-column"},i.a.createElement("div",{className:" d-flex flex-column"},i.a.createElement("p",{className:"text-alternate"},"No. of Units")),i.a.createElement("input",{className:"form-control",type:"text",id:"NoofUnits",name:"NoofUnits"})),i.a.createElement("div",{className:"col-md-1 mt-1 col-12 d-flex flex-column"},i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-1"}," > > "),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-1"}," < < "),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-1"},"\u2715"),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-1"},"Cls")),i.a.createElement("div",{className:"col-md-5 col-12"},i.a.createElement("div",{className:" d-flex justify-content-between"},i.a.createElement("p",{className:"text-alternate"},"Optional Units"),i.a.createElement("p",{className:"text-alternate"},"Nos.")),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("textarea",{className:"form-control",id:"ownerList",name:"OwnerList",required:""})))),i.a.createElement("form",{className:"row"},i.a.createElement("div",{className:"col-md-3 col-12 p-1"},i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1"}," Add "),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1"}," Edit ")),i.a.createElement("div",{className:"col-md-6 col-12 p-1"},i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1"}," View "),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1"}," Delete "),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1"}," Clear ")),i.a.createElement("div",{className:"col-md-3 col-12 p-1"},i.a.createElement("button",{type:"submit",class:"btn btn-outline-primary btn-md mb-1 mr-1"}," Ok "),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1"}," Exit ")))))}},905:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),o=r.a.createElement("span",{className:"text-danger"},"*")}}]);
//# sourceMappingURL=135.6d8ee488.chunk.js.map