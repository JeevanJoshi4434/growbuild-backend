/*! For license information please see 162.abefbaad.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[162],{2204:function(e,t,n){"use strict";n.r(t);var r=n(87),a=n(46),o=n(3),i=n(45),l=n(28),c=n(0),u=n.n(c),s=n(330),d=n(454),m=n(62),v=n(871),f=n.n(v);function p(){p=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),l=new N(a||[]);return r(i,"_invoke",{value:E(e,n,l)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var d={};function m(){}function v(){}function f(){}var h={};c(h,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==t&&n.call(y,o)&&(h=y);var b=f.prototype=m.prototype=Object.create(h);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,l){var c=s(e[a],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=x(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=f,r(b,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:v,configurable:!0}),v.displayName=c(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(j.prototype),c(j.prototype,i,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new j(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(b),c(b,l,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.default=function(){var e,t,n=Object(c.useState)(!1),v=Object(i.a)(n,2),h=v[0],g=v[1],y=Object(c.useState)(null),b=Object(i.a)(y,2),w=b[0],j=b[1],E=Object(c.useState)({Project:null,Building:null,stage_name:null,amount:null,extra_facilities:null}),x=Object(i.a)(E,2),O=x[0],_=x[1],N=Object(c.useState)(null),L=Object(i.a)(N,2),P=L[0],k=L[1],S=Object(c.useState)(null),B=Object(i.a)(S,2),C=(B[0],B[1]),F=function(n){e=n.target.name,t=n.target.value,_(Object(o.a)(Object(o.a)({},O),{},Object(a.a)({},e,t)))},T=Object(c.useState)(null),A=Object(i.a)(T,2),G=A[0],H=A[1],I=function(){var e=Object(r.a)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:t=e.sent,H(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=Object(m.g)();Object(c.useEffect)((function(){I()}),[]);var z=function(){var e=Object(r.a)(p().mark((function e(t){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)||"Select Project"===t){e.next=6;break}return e.next=3,l.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(t),{Headers:{"Content-Type":"application/json"}});case 3:n=e.sent,k(n.data),console.log(n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(r.a)(p().mark((function e(t){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(null===t||void 0===t?void 0:t.length)&&12!==(null===t||void 0===t?void 0:t.length)){e.next=6;break}return e.next=3,l.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(t),{Headers:{"Content-Type":"application/json"}});case 3:n=e.sent,C(n.data),console.log(n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(r.a)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("https://growbuild-jg.onrender.com/api/create/demand",{Project:O.Project,Building:O.Building,stage_name:O.stage_name,amount:O.amount,extra_facilities:O.extra_facilities});case 2:200===e.sent.status?(window.alert("Stage Created!"),window.location.reload()):window.alert("Something went wrong!");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(r.a)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(Object(o.a)(Object(o.a)({},O),{},{Project:null===t||void 0===t?void 0:t.Project,Building:null===t||void 0===t?void 0:t.Building,stage_name:null===t||void 0===t?void 0:t.stage_name,amount:null===t||void 0===t?void 0:t.amount,extra_facilities:null===t||void 0===t?void 0:t.extra_facilities,id:null===t||void 0===t?void 0:t._id})),g(!0),e.next=4,z(null===t||void 0===t?void 0:t.Project);case 4:return _(Object(o.a)(Object(o.a)({},O),{},{building:null===t||void 0===t?void 0:t.building})),e.next=7,D(null===t||void 0===t?void 0:t.building);case 7:_(Object(o.a)(Object(o.a)({},O),{},{Project:null===t||void 0===t?void 0:t.Project,Building:null===t||void 0===t?void 0:t.Building,stage_name:null===t||void 0===t?void 0:t.stage_name,amount:null===t||void 0===t?void 0:t.amount,extra_facilities:null===t||void 0===t?void 0:t.extra_facilities,id:null===t||void 0===t?void 0:t._id}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(r.a)(p().mark((function e(t){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({title:"Are you sure?",text:"Are you sure that you want to delete this Block?",icon:"warning",dangerMode:!0});case 2:if(!(n=e.sent)){e.next=8;break}return e.next=6,l.a.delete("https://growbuild-jg.onrender.com/api/delete/flat/"+t,{Headers:{"Content-Type":"application/json"}});case 6:e.sent,M();case 8:n();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("https://growbuild-jg.onrender.com/api/update/demand/"+t,{Project:O.Project,Building:O.Building,stage_name:O.stage_name,amount:O.amount,extra_facilities:O.extra_facilities});case 2:200===e.sent.status&&(f()("Stage Updated successfully!","success"),setTimeout((function(){q.go(0)}),2e3));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(r.a)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat("https://growbuild-jg.onrender.com","/api/get/all/demand"),{Headers:{"Content-Type":"application/json"}});case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){M()}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"container bg-white p-2 rounded-2"},u.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},u.a.createElement("h3",{className:"text-alternate text-primary"},"Payment Plans"),u.a.createElement("hr",null),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Select Project"),u.a.createElement("div",{className:"input-group"},u.a.createElement("select",{className:"form-control",id:"project",onChange:function(e){F(e),z(e.target.value)},name:"Project",value:O.Project},null===G?u.a.createElement("option",{value:null,name:null},"Loading..."):u.a.createElement("option",{value:null,name:null},"Select Project"),null!==G&&0===(null===G||void 0===G?void 0:G.length)&&u.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==G&&(null===G||void 0===G?void 0:G.length)>0&&G.map((function(e){return u.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.Name)}))))),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Select Building"),u.a.createElement("div",{className:"input-group"},u.a.createElement("select",{className:"form-control",id:"building",name:"Building",onChange:function(e){F(e),D(e.target.value)},value:O.Building},null===O.Project?u.a.createElement("option",{value:null,name:null},"First select Project"):u.a.createElement(u.a.Fragment,null,null===P&&u.a.createElement("option",{value:null,name:null},"Loading..."),null!==P&&0===(null===P||void 0===P?void 0:P.length)&&u.a.createElement("option",{value:null,name:null},"No Building Avaliable")),(null===P||void 0===P?void 0:P.length)>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement("option",{value:null,name:null},"Select Building"),null===P||void 0===P?void 0:P.map((function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.buildingName))})))))),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("label",{htmlFor:"stageName",className:"text-alternate mb-2"}," ","Stage Name"),u.a.createElement("input",{type:"text",className:"form-control",id:"stageName",name:"stage_name",onChange:F,value:O.stage_name,required:""})),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("label",{htmlFor:"ammount",className:"text-alternate mb-2"}," ","Demand Rate(%)"),u.a.createElement("input",{type:"number",className:"form-control",id:"ammount",name:"amount",onChange:F,value:O.amount,required:""})),u.a.createElement("div",{className:"col-md-12 col-12 text-right"},h?u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-md mb-1 mr-1",onClick:function(){_(Object(o.a)(Object(o.a)({},O),{},{Project:null,Building:null,stage_name:null,amount:null,extra_facilities:null,id:null})),g(!1)}}," ","Exit"," "),u.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return Y(O.id)}}," ","Update"," ")):u.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return J()}}," ","Create"," "))),!h&&u.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},u.a.createElement("h3",{className:"text-alternate text-primary"},"All Plans"),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement("table",{className:"table table-striped table-responsive"},u.a.createElement("tr",null,u.a.createElement("th",null,"Sno."),u.a.createElement("th",null,"Project"),u.a.createElement("th",null,"Building"),u.a.createElement("th",null,"Stage Name"),u.a.createElement("th",null,"Demand Rate(%)"),u.a.createElement("th",null,"Action")),null===w||void 0===w?void 0:w.map((function(e,t){var n=null===e||void 0===e?void 0:e._id;return u.a.createElement("tr",null,u.a.createElement("td",null,t+1),u.a.createElement("td",null,null===e||void 0===e?void 0:e.projectName),u.a.createElement("td",null,null===e||void 0===e?void 0:e.buildingName),u.a.createElement("td",null,null===e||void 0===e?void 0:e.stage_name),u.a.createElement("td",null,null===e||void 0===e?void 0:e.amount),u.a.createElement("td",null,u.a.createElement(s.a,{className:"cursor-pointer",color:"green",size:30,onClick:function(){R(e)}}),u.a.createElement(d.a,{className:"cursor-pointer",color:"red",size:30,onClick:function(){U(n)}})))})))))))}}}]);
//# sourceMappingURL=162.abefbaad.chunk.js.map