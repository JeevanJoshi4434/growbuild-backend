/*! For license information please see 156.ca488c61.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[156],{2196:function(e,t,n){"use strict";n.r(t);var r=n(46),a=n(3),o=n(86),l=n(45),i=n(28),c=n(0),u=n.n(c),s=(n(50),n(327)),d=n(454),m=n(62),p=n(870),v=n.n(p);function f(){f=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,l=Object.create(o.prototype),i=new C(a||[]);return r(l,"_invoke",{value:N(e,n,i)}),l}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var d={};function m(){}function p(){}function v(){}var h={};c(h,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(D([])));y&&y!==t&&n.call(y,o)&&(h=y);var b=v.prototype=m.prototype=Object.create(h);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;r(this,"_invoke",{value:function(r,o){function l(){return new t((function(a,l){!function r(a,o,l,i){var c=s(e[a],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,l,i)}),(function(e){r("throw",e,l,i)})):t.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return r("throw",e,l,i)}))}i(c.arg)}(r,o,a,l)}))}return a=a?a.then(l,l):l()}})}function N(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var l=n.delegate;if(l){var i=x(l,n);if(i){if(i===d)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function D(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=v,r(b,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:p,configurable:!0}),p.displayName=c(v,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),c(w.prototype,l,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var l=new w(u(t,n,r,a),o);return e.isGeneratorFunction(n)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},E(b),c(b,i,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=D,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return l.type="throw",l.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:D(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.default=function(){var e,t,n=Object(c.useState)(!1),p=Object(l.a)(n,2),h=p[0],g=p[1],y=Object(c.useState)(null),b=Object(l.a)(y,2),E=b[0],w=b[1],N=function(){var e=Object(o.a)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:t=e.sent,w(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=Object(m.g)(),j=Object(c.useState)({Name:null,developer:null,floorNumber:null,startingDate:null,endDate:null,CI:null,demand:null,NOI:null,location:null,address:null,owner:null,profitCenter:null,description:null,id:null}),O=Object(l.a)(j,2),C=O[0],D=O[1],L=Object(c.useState)(null),k=Object(l.a)(L,2),I=k[0],_=k[1],S=function(){var e=Object(o.a)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://growbuild-jg.onrender.com/api/all/dev",{Headers:{"Content-Type":"application/json"}});case 2:t=e.sent,_(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){S(),N()}),[]);var P=function(n){e=n.target.name,t=n.target.value,D(Object(a.a)(Object(a.a)({},C),{},Object(r.a)({},e,t)))};console.log(C);var F=function(){var e=Object(o.a)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("https://growbuild-jg.onrender.com/api/create/project",{Name:C.Name,developer:C.developer,floorNumber:C.floorNumber,startingDate:C.startingDate,endDate:C.endDate,CI:C.CI,demand:C.demand,NOI:C.NOI,location:C.location,address:C.address,owner:C.owner,profitCenter:C.profitCenter,description:C.description});case 2:200===e.sent.status&&(window.alert("Project Upload Done!"),x.go(0));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(f().mark((function e(t){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({title:"Are you sure?",text:"Are you sure that you want to delete this Project?",icon:"warning",dangerMode:!0});case 2:if(!(n=e.sent)){e.next=9;break}return e.next=6,i.a.delete("https://growbuild-jg.onrender.com/api/delete/project/"+t,{Headers:{"Content-Type":"application/json"}});case 6:r=e.sent,console.log(r.data),N();case 9:n();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("https://growbuild-jg.onrender.com/api/update/project/"+t,{Name:C.Name,developer:C.developer,floorNumber:C.floorNumber,startingDate:C.startingDate,endDate:C.endDate,CI:C.CI,demand:C.demand,NOI:C.NOI,location:C.location,address:C.address,owner:C.owner,profitCenter:C.profitCenter,description:C.description});case 2:if(200!==e.sent.status){e.next=9;break}return e.next=6,v()("Uploaded successfully","success");case 6:h(!1),D(Object(a.a)(Object(a.a)({},C),{},{Name:null,developer:null,floorNumber:null,startingDate:null,endDate:null,CI:null,demand:null,NOI:null,location:null,address:null,owner:null,profitCenter:null,description:null,id:null})),x.go(0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"container bg-white p-2 rounded-2"},u.a.createElement("div",{className:"row px-4 py-4 mx-2 my-2 shadow-lg"},u.a.createElement("h3",{className:"text-alternate text-primary"},"Create Project"),u.a.createElement("hr",null),u.a.createElement("div",{className:"col-md-6 col-12"},u.a.createElement("p",{className:"text-alternate"},"Project Name"),u.a.createElement("div",{className:"input-group mb-2"},u.a.createElement("input",{type:"text",className:"form-control",id:"projectName",name:"Name",onChange:P,value:C.Name,required:""}))),u.a.createElement("div",{className:"col-md-6 col-12"},u.a.createElement("p",{className:"text-alternate"},"Select Developer"),u.a.createElement("div",{className:"input-group mb-2"},u.a.createElement("select",{onChange:P,className:"form-control",id:"day",name:"developer",value:C.developer},null===I?u.a.createElement("option",{name:"null",value:"null"},"Loading"):u.a.createElement("option",{name:"null",value:"null"},"Select Developer"),null!==I&&(null===I||void 0===I?void 0:I.map((function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.Company))})))))),u.a.createElement("div",{className:"col-md-4 col-12"},u.a.createElement("p",{className:"text-alternate"},"Start Date"),u.a.createElement("div",{className:"input-group mb-2"},u.a.createElement("input",{type:"date",className:"form-control",id:"startDate",name:"startingDate",required:"",onChange:P,value:C.startingDate}))),u.a.createElement("div",{className:"col-md-4 col-12"},u.a.createElement("p",{className:"text-alternate"},"End Date"),u.a.createElement("div",{className:"input-group mb-2"},u.a.createElement("input",{type:"date",className:"form-control",id:"endDate",name:"endDate",required:"",onChange:P,value:C.endDate}))),u.a.createElement("div",{className:"col-md-4 col-12"},u.a.createElement("p",{className:"text-alternate"},"Owner"),u.a.createElement("div",{className:"input-group mb-2"},u.a.createElement("input",{type:"text",className:"form-control",id:"owner",name:"owner",onChange:P,value:C.owner,required:""}))),u.a.createElement("div",{className:"col-md-6 col-12"},u.a.createElement("p",{className:"text-alternate"},"Location"),u.a.createElement("div",{className:"input-group mb-2"},u.a.createElement("textarea",{className:"form-control",id:"location",name:"location",onChange:P,value:C.location,required:""}))),u.a.createElement("div",{className:"col-md-6 col-12"},u.a.createElement("p",{className:"text-alternate"},"Address"),u.a.createElement("div",{className:"input-group mb-2"},u.a.createElement("textarea",{className:"form-control",id:"address",name:"address",onChange:P,value:C.address,required:""}))),u.a.createElement("div",{className:"col-md-12 col-12"},u.a.createElement("p",{className:"text-alternate"},"Description"),u.a.createElement("div",{className:"input-group mb-2"},u.a.createElement("textarea",{className:"form-control",id:"projectDes",name:"description",onChange:P,value:C.description,required:""}))),u.a.createElement("div",{className:"col-md-12 col-12 text-right"},h?u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-md mb-1 mr-1",onClick:function(){D(Object(a.a)(Object(a.a)({},C),{},{Name:null,developer:null,floorNumber:null,startingDate:null,endDate:null,CI:null,demand:null,NOI:null,location:null,address:null,owner:null,profitCenter:null,description:null,id:null})),g(!1)}}," Exit "),u.a.createElement("button",{type:"submit",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return T(null===C||void 0===C?void 0:C.id)}}," Update ")):u.a.createElement("button",{type:"submit",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return F()}}," Create "))),!h&&u.a.createElement("form",{className:"row  px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},u.a.createElement("h3",{className:"text-alternate text-primary"},"All Projects"),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement("table",{className:"table table-striped table-responsive"},u.a.createElement("tr",null,u.a.createElement("th",null,"Sno"),u.a.createElement("th",null,"Project"),u.a.createElement("th",null,"owner"),u.a.createElement("th",null,"Starting Date"),u.a.createElement("th",null,"Action")),null===E||void 0===E?void 0:E.map((function(e,t){var n=null===e||void 0===e?void 0:e._id;return u.a.createElement("tr",null,u.a.createElement("td",null,t+1),u.a.createElement("td",null,null===e||void 0===e?void 0:e.Name),u.a.createElement("td",null,null===e||void 0===e?void 0:e.owner),u.a.createElement("td",null,null===e||void 0===e?void 0:e.startingDate),u.a.createElement("td",null,u.a.createElement(s.a,{className:"cursor-pointer",color:"green",size:30,onClick:function(){var t;t=e,D(Object(a.a)(Object(a.a)({},C),{},{Name:null===t||void 0===t?void 0:t.Name,developer:null===t||void 0===t?void 0:t.developer,floorNumber:null===t||void 0===t?void 0:t.floorNumber,startingDate:null===t||void 0===t?void 0:t.startingDate,endDate:null===t||void 0===t?void 0:t.endDate,CI:null===t||void 0===t?void 0:t.CI,demand:null===t||void 0===t?void 0:t.demand,NOI:null===t||void 0===t?void 0:t.NOI,location:null===t||void 0===t?void 0:t.location,address:null===t||void 0===t?void 0:t.address,owner:null===t||void 0===t?void 0:t.owner,profitCenter:null===t||void 0===t?void 0:t.profitCenter,description:null===t||void 0===t?void 0:t.description,id:null===t||void 0===t?void 0:t._id})),g(!0)}}),u.a.createElement(d.a,{className:"cursor-pointer",color:"red",size:30,onClick:function(){G(n)}})))})))))))}}}]);
//# sourceMappingURL=156.ca488c61.chunk.js.map