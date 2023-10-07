/*! For license information please see 129.4cf4ecad.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[129,156],{1072:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),o=r.a.createElement("span",{className:"text-danger"},"*")},1428:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),o=a(17),l=a(16),i=a(0),c=a.n(i),s=a(808),m=a(789),u=a(1162),d=a(1163),p=a(1164),h=a(1165),f=a(906),v=a.n(f),b=a(244),y=a(330),N=a(327),g=a(453),E=function(e){return c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},c.a.createElement("div",{className:"add-new"}),c.a.createElement("div",{className:"position-relative has-icon-left mb-1"},c.a.createElement(s.a,{value:e.value,onChange:function(t){return e.handleFilter(t)}}),c.a.createElement("div",{className:"form-control-position"},c.a.createElement(b.a,{size:"15"}))))},x=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={columns:[{name:"Sl No",selector:"slNo",sortable:!0,maxWidth:"16px",cell:function(e){return c.a.createElement("span",{title:e.slNo,className:"d-block text-bold-500 text-truncate mb-0"},e.slNo)}},{name:"Company Name",selector:"name",sortable:!0,minWidth:"200px",cell:function(e){return c.a.createElement("div",{className:"d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1"},c.a.createElement("div",{className:"user-info text-truncate ml-xl-50 ml-0"},c.a.createElement("span",{title:e.name,className:"d-block text-bold-500 text-truncate mb-0"},e.name),c.a.createElement("small",{title:e.name},e.name)))}},{name:"Phone No",selector:"phone",sortable:!0,cell:function(e){return c.a.createElement("p",{className:"text-bold-500 text-truncate mb-0"},e.phone)}},{name:"Project Status",selector:"status",sortable:!0,cell:function(e){return c.a.createElement(m.a,{color:"inactive"===e.status?"light-danger":"light-success",pill:!0},e.status)}},{name:"Key Person",selector:"KeyPersons",sortable:!0,cell:function(e){return c.a.createElement("p",{className:"text-bold-500 mb-0"},e.KeyPersons)}},{name:"Actions",selector:"actions",sortable:!1,cell:function(e){return c.a.createElement("div",{className:"actions"},c.a.createElement("a",{href:"#!",className:"text-primary curser-pointer mx-1"},c.a.createElement(y.a,{size:"15"})),c.a.createElement("a",{href:"#!",className:"text-warning curser-pointer mx-1"},c.a.createElement(N.a,{size:"15"})),c.a.createElement("a",{href:"#!",className:"text-danger curser-pointer mx-1"},c.a.createElement(g.a,{size:"15"})))}}],data:[{slNo:1,name:"AlysShankar",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:2,name:"Alyss Kal",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:3,name:"Alyss Gallop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:4,name:"Alcrop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:5,name:"Al crop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:6,name:"Alcrop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:7,name:"Aly",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:8,name:"Lop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:9,name:"Alyss",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:10,name:"Lillecrop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"}],filteredData:[],value:""},e.handleFilter=function(t){var a=t.target.value,n=e.state.data,r=e.state.filteredData;e.setState({value:a}),a.length&&(r=n.filter((function(e){var t=e.name.toLowerCase().startsWith(a.toLowerCase())||e.phone.toLowerCase().startsWith(a.toLowerCase())||e.status.toLowerCase().startsWith(a.toLowerCase())||e.KeyPersons.toLowerCase().startsWith(a.toLowerCase()),n=e.name.toLowerCase().includes(a.toLowerCase())||e.phone.toLowerCase().includes(a.toLowerCase())||e.status.toLowerCase().includes(a.toLowerCase())||e.KeyPersons.toLowerCase().includes(a.toLowerCase());return t||(!t&&n?n:null)})),e.setState({filteredData:r}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.columns,n=e.value,r=e.filteredData;return c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(p.a,{className:"text-alternate text-primary"},"All Developers"),c.a.createElement("hr",null)),c.a.createElement(h.a,{className:"rdt_Wrapper"},c.a.createElement(v.a,{className:"dataTable-custom",data:n.length?r:t,columns:a,noHeader:!0,pagination:!0,subHeader:!0,subHeaderComponent:c.a.createElement(E,{value:n,handleFilter:this.handleFilter})})))}}]),a}(c.a.Component);t.default=x},2211:function(e,t,a){"use strict";a.r(t);var n=a(87),r=a(46),o=a(3),l=a(45),i=a(0),c=a.n(i),s=a(1072),m=(a(1428),a(28)),u=a(327),d=a(453),p=a(870),h=a.n(p);function f(){f=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var o=t&&t.prototype instanceof d?t:d,l=Object.create(o.prototype),i=new j(r||[]);return n(l,"_invoke",{value:x(e,a,i)}),l}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(P){return{type:"throw",arg:P}}}e.wrap=s;var u={};function d(){}function p(){}function h(){}var v={};c(v,o,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(_([])));y&&y!==t&&a.call(y,o)&&(v=y);var N=h.prototype=d.prototype=Object.create(v);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function l(){return new t((function(r,l){!function n(r,o,l,i){var c=m(e[r],e,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,l,i)}),(function(e){n("throw",e,l,i)})):t.resolve(u).then((function(e){s.value=e,l(s)}),(function(e){return n("throw",e,l,i)}))}i(c.arg)}(n,o,r,l)}))}return r=r?r.then(l,l):l()}})}function x(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return O()}for(a.method=r,a.arg=o;;){var l=a.delegate;if(l){var i=w(l,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=m(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function w(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var r=m(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=h,n(N,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(N),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,l,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var l=new E(s(t,a,n,r),o);return e.isGeneratorFunction(a)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},g(N),c(N,i,"Generator"),c(N,o,(function(){return this})),c(N,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return l.type="throw",l.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),L(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:_(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t,a=Object(i.useState)(null),p=Object(l.a)(a,2),v=p[0],b=p[1],y=Object(i.useState)({Company:"",name:"",phoneNumber:"",faxNumber:"",email:"",address:"",description:"",GSTIN:"",designation:"",phone_res:"",phone_office:"",mobileNumber:"",id:null}),N=Object(l.a)(y,2),g=N[0],E=N[1],x=function(a){e=a.target.name,t=a.target.value,E(Object(o.a)(Object(o.a)({},g),{},Object(r.a)({},e,t)))},w=Object(i.useState)(!1),C=Object(l.a)(w,2),L=C[0],j=C[1],_=function(){var e=Object(n.a)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("".concat("https://growbuild-jg.onrender.com","/api/create/dev"),{Company:g.Company,name:g.name,phoneNumber:g.phoneNumber,faxNumber:g.faxNumber,email:g.email,address:g.address,description:g.description,GSTIN:g.GSTIN,designation:g.designation,phone_res:g.phone_res,phone_office:g.phone_office,mobileNumber:g.mobileNumber});case 2:200===(t=e.sent).status&&(console.log(t.data),console.log("Created!"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(n.a)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.put("".concat("https://growbuild-jg.onrender.com","/api/update/dev/").concat(t),{Company:g.Company,name:g.name,phoneNumber:g.phoneNumber,faxNumber:g.faxNumber,email:g.email,address:g.address,description:g.description,GSTIN:g.GSTIN,designation:g.designation,phone_res:g.phone_res,phone_office:g.phone_office,mobileNumber:g.mobileNumber});case 2:e.sent.status;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(n.a)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://growbuild-jg.onrender.com/api/all/dev",{Headers:{"Content-Type":"application/json"}});case 2:t=e.sent,b(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){P()}),[]);var k=function(){var e=Object(n.a)(f().mark((function e(t){var a,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({title:"Are you sure?",text:"Are you sure that you want to delete this file?",icon:"warning",dangerMode:!0});case 2:if(!(a=e.sent)){e.next=9;break}return e.next=6,m.a.delete("https://growbuild-jg.onrender.com/api/delete/dev/"+t,{Headers:{"Content-Type":"application/json"}});case 6:n=e.sent,console.log(n.data),P();case 9:a();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container bg-white p-2 rounded-2"},c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},c.a.createElement("h3",{className:"text-alternate text-primary"},"Add Developer"),c.a.createElement("hr",null),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("label",{htmlFor:"companyName",className:"text-alternate mb-2"}," ","Company Name ",s.a),c.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"Company",required:"",onChange:x,value:g.Company})),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("label",{htmlFor:"tele",className:"text-alternate mb-2"}," ","Phone No ",s.a),c.a.createElement("input",{type:"number",className:"form-control",id:"tele",name:"phoneNumber",required:"",onChange:x,value:g.phoneNumber})),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Fax No."),c.a.createElement("input",{type:"text",className:"form-control",id:"FaxNo",name:"faxNumber",required:"",value:g.faxNumber,onChange:x})),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"E-mail ",s.a),c.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",required:"",value:g.email,onChange:x})),c.a.createElement("div",{className:"col-md-12 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Address"),c.a.createElement("div",{className:"input-group"},c.a.createElement("textarea",{className:"form-control",id:"Address",name:"address",required:"",onChange:x,value:g.address}))),c.a.createElement("div",{className:"col-md-12 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Description"),c.a.createElement("div",{className:"input-group"},c.a.createElement("textarea",{className:"form-control",id:"Description",name:"description",onChange:x,value:g.description,required:""}))),c.a.createElement("div",{className:"col-md-12 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"GSTIN  ",s.a),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"GSTIN",name:"GSTIN",onChange:x,value:g.GSTIN,required:""}))),c.a.createElement("hr",null),c.a.createElement("h4",{className:"text-alternate text-primary"},"Key Persons"),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("label",{id:"keyPersonName",className:"text-alternate"},"Name ",s.a),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"name",className:"form-control",id:"keyPersonName",name:"name",onChange:x,value:g.name,required:!0}),c.a.createElement("div",{class:"invalid-feedback"},"Please enter Name."))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("label",{id:"keyPersonDesignation",className:"text-alternate"},"Designation ",s.a),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"Designation",name:"designation",onChange:x,value:g.designation,required:!0}),c.a.createElement("div",{class:"invalid-feedback"},"Please enter Designation."))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"phone(Res)"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"keyPersonNo",name:"phone_res",onChange:x,value:g.phone_res,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"phone(Office)"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"officeNo",name:"phone_office",onChange:x,value:g.phone_office,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Mobile Phone"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"number",className:"form-control",id:"MobileNo",name:"mobileNumber",onChange:x,value:g.mobileNumber,required:""}))),c.a.createElement("div",{className:"col-md-12 col-12 text-right"},L?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-md mb-1 mr-1",onClick:function(){E(Object(o.a)(Object(o.a)({},g),{},{Company:"",name:"",phoneNumber:"",faxNumber:"",email:"",address:"",description:"",GSTIN:"",designation:"",phone_res:"",phone_office:"",mobileNumber:"",id:null})),j(!1)}}," Exit "),c.a.createElement("button",{type:"submit",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return O(null===g||void 0===g?void 0:g.id)}}," Update ")):c.a.createElement("button",{type:"submit",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return _()}}," Create "))),!L&&c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},c.a.createElement("h3",{className:"text-alternate text-primary"},"All Developer"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("table",{className:"table table-striped table-responsive"},c.a.createElement("tr",null,c.a.createElement("th",null,"Sno"),c.a.createElement("th",null,"Company"),c.a.createElement("th",null,"Key Person"),c.a.createElement("th",null,"Number"),c.a.createElement("th",null,"Action")),null===v||void 0===v?void 0:v.map((function(e,t){var a=null===e||void 0===e?void 0:e._id;return c.a.createElement("tr",null,c.a.createElement("td",null,t+1),c.a.createElement("td",null,null===e||void 0===e?void 0:e.Company),c.a.createElement("td",null,null===e||void 0===e?void 0:e.name),c.a.createElement("td",null,null===e||void 0===e?void 0:e.mobileNumber),c.a.createElement("td",null,c.a.createElement(u.a,{className:"cursor-pointer",color:"green",size:30,onClick:function(){var t;t=e,E(Object(o.a)(Object(o.a)({},g),{},{Company:null===t||void 0===t?void 0:t.Company,name:null===t||void 0===t?void 0:t.name,phoneNumber:null===t||void 0===t?void 0:t.phoneNumber,faxNumber:null===t||void 0===t?void 0:t.faxNumber,email:null===t||void 0===t?void 0:t.email,address:null===t||void 0===t?void 0:t.address,description:null===t||void 0===t?void 0:t.description,GSTIN:null===t||void 0===t?void 0:t.GSTIN,designation:null===t||void 0===t?void 0:t.designation,phone_res:null===t||void 0===t?void 0:t.phone_res,phone_office:null===t||void 0===t?void 0:t.phone_office,mobileNumber:null===t||void 0===t?void 0:t.mobileNumber,id:null===t||void 0===t?void 0:t._id})),j(!0),console.log(g)}}),c.a.createElement(d.a,{className:"cursor-pointer",color:"red",size:30,onClick:function(){k(a)}})))})))))))}}}]);
//# sourceMappingURL=129.4cf4ecad.chunk.js.map