/*! For license information please see 150.5c356353.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[150],{2148:function(t,e,n){"use strict";n.r(e);var r=n(43),a=n(3),o=n(83),l=n(42),i=n(28),c=n(0),u=n.n(c),s=n(304),f=n(430),m=n(59),d=n(849),p=n.n(d);function h(){h=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof m?e:m,l=Object.create(o.prototype),i=new O(a||[]);return r(l,"_invoke",{value:w(t,n,i)}),l}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f={};function m(){}function d(){}function p(){}var v={};c(v,o,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(k([])));b&&b!==e&&n.call(b,o)&&(v=b);var y=p.prototype=m.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;r(this,"_invoke",{value:function(r,o){function l(){return new e((function(a,l){!function r(a,o,l,i){var c=s(t[a],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,l,i)}),(function(t){r("throw",t,l,i)})):e.resolve(f).then((function(t){u.value=t,l(u)}),(function(t){return r("throw",t,l,i)}))}i(c.arg)}(r,o,a,l)}))}return a=a?a.then(l,l):l()}})}function w(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var l=n.delegate;if(l){var i=j(l,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},_(E.prototype),c(E.prototype,l,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var l=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},_(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return l.type="throw",l.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=t,l.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}e.default=function(){var t,e,n=Object(m.g)(),d=Object(c.useState)(!1),v=Object(l.a)(d,2),g=v[0],b=v[1],y=Object(c.useState)(null),_=Object(l.a)(y,2),E=_[0],w=_[1],j=Object(c.useState)(null),x=Object(l.a)(j,2),N=x[0],O=x[1],k=Object(c.useState)({Project:null,buildingName:null,total_number_of_floors:null,total_number_of_flats:null,parkings:null,id:null}),L=Object(l.a)(k,2),P=L[0],C=L[1],S=function(){var t=Object(o.a)(h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:e=t.sent,O(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){S()}),[]),console.log(N);var F=function(n){t=n.target.name,e=n.target.value,C(Object(a.a)(Object(a.a)({},P),{},Object(r.a)({},t,e)))},T=function(){var t=Object(o.a)(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("https://growbuild-jg.onrender.com/api/create/building",{Project:P.Project,buildingName:P.buildingName,total_number_of_floors:P.total_number_of_floors,total_number_of_flats:P.total_number_of_flats,parkings:P.parkings});case 2:200===t.sent.status&&(window.alert("Building Upload Done!"),n.go(0));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=Object(o.a)(h().mark((function t(e){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()({title:"Are you sure?",text:"Are you sure that you want to delete this Block?",icon:"warning",dangerMode:!0});case 2:if(!(n=t.sent)){t.next=8;break}return t.next=6,i.a.delete("https://growbuild-jg.onrender.com/api/delete/building/"+e,{Headers:{"Content-Type":"application/json"}});case 6:t.sent,B();case 8:n();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(o.a)(h().mark((function t(e){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.put("https://growbuild-jg.onrender.com/api/update/building/"+e,{Project:P.Project,buildingName:P.buildingName,total_number_of_floors:P.total_number_of_floors,total_number_of_flats:P.total_number_of_flats,parkings:P.parkings});case 2:200===t.sent.status&&(p()("Building Updated successfully!","success"),n.go(0));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(o.a)(h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://growbuild-jg.onrender.com/api/all/building",{Headers:{"Content-Type":"application/json"}});case 2:e=t.sent,w(e.data),console.log(e.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){B()}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"container bg-white p-2 rounded-2"},u.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg"},u.a.createElement("h3",{className:"text-alternate text-primary"},"Create Building"),u.a.createElement("hr",null),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Select Project"),u.a.createElement("div",{className:"input-group"},u.a.createElement("select",{className:"form-control",id:"project",name:"Project",onChange:F,value:P.Project},null===N?u.a.createElement("option",{name:null,value:null},"Loading"):u.a.createElement("option",{name:null,value:null},"Select Project"),null!==N&&0===(null===N||void 0===N?void 0:N.length)&&u.a.createElement("option",{name:null,value:null},"No projects are Avialable"),null!==N&&(null===N||void 0===N?void 0:N.length)>0&&N.map((function(t){return u.a.createElement("option",{name:null===t||void 0===t?void 0:t._id,value:null===t||void 0===t?void 0:t._id},null===t||void 0===t?void 0:t.Name)}))))),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Building Name"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"text",className:"form-control",id:"projectName",name:"buildingName",onChange:F,value:P.buildingName,required:""}))),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Total No of Floors"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"number",className:"form-control",id:"floors",name:"total_number_of_floors",onChange:F,value:P.total_number_of_floors,required:""}))),u.a.createElement("div",{className:"col-md-6 col-12 mb-2"},u.a.createElement("p",{className:"text-alternate"},"Total No Of Flats"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{type:"number",className:"form-control",id:"flats",name:"total_number_of_flats",onChange:F,value:P.total_number_of_flats,required:""}))),u.a.createElement("div",{className:"col-md-12 col-12 text-right"},g?u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-md mb-1 mr-1",onClick:function(){C(Object(a.a)(Object(a.a)({},P),{},{Project:null,buildingName:null,total_number_of_floors:null,total_number_of_flats:null,parkings:null,id:null})),b(!1)}}," Exit "),u.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return A(null===P||void 0===P?void 0:P.id)}}," Update ")):u.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return T()}}," Create "))),!g&&u.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},u.a.createElement("h3",{className:"text-alternate text-primary"},"All Blocks"),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement("table",{className:"table table-striped table-responsive"},u.a.createElement("tr",null,u.a.createElement("th",null,"Sno"),u.a.createElement("th",null,"Building Name"),u.a.createElement("th",null,"Flats"),u.a.createElement("th",null,"Floor"),u.a.createElement("th",null,"Action")),null===E||void 0===E?void 0:E.map((function(t,e){var n=null===t||void 0===t?void 0:t._id;return u.a.createElement("tr",null,u.a.createElement("td",null,e+1),u.a.createElement("td",null,null===t||void 0===t?void 0:t.buildingName),u.a.createElement("td",null,null===t||void 0===t?void 0:t.total_number_of_flats),u.a.createElement("td",null,null===t||void 0===t?void 0:t.total_number_of_floors),u.a.createElement("td",null,u.a.createElement(s.a,{className:"cursor-pointer",color:"green",size:30,onClick:function(){var e;e=t,C(Object(a.a)(Object(a.a)({},P),{},{Project:null===e||void 0===e?void 0:e.Project,buildingName:null===e||void 0===e?void 0:e.buildingName,total_number_of_floors:null===e||void 0===e?void 0:e.total_number_of_floors,total_number_of_flats:null===e||void 0===e?void 0:e.total_number_of_flats,parkings:null===e||void 0===e?void 0:e.parkings,id:null===e||void 0===e?void 0:e._id})),b(!0)}}),u.a.createElement(f.a,{className:"cursor-pointer",color:"red",size:30,onClick:function(){G(n)}})))})))))))}}}]);
//# sourceMappingURL=150.5c356353.chunk.js.map