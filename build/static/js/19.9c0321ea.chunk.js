/*! For license information please see 19.9c0321ea.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[19],{1366:function(e,t,a){},1576:function(e,t,a){"use strict";var r=a(13),n=a(14),o=a(18),i=a(17),l=a(0),s=a.n(l),c=a(795),p=a(797),u=a(790),d=a(791),h=a(195),m=a(804),f=a(895),g=a(864),v=a.n(g),y=a(6),b=a.n(y),E=a(890),w=a.n(E),x=a(27),P=a(327),N=a(454),D=a(287),C=a(408),S=a(288),k=a(227),L=a(286),j=a(37),O=a(86),A=a(28);function _(){_=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(k){s=function(e,t,a){return e[t]=a}}function c(e,t,a,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),l=new D(n||[]);return r(i,"_invoke",{value:w(e,a,l)}),i}function p(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var u={};function d(){}function h(){}function m(){}var f={};s(f,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(C([])));v&&v!==t&&a.call(v,o)&&(f=v);var y=m.prototype=d.prototype=Object.create(f);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(n,i){!function r(n,o,i,l){var s=p(e[n],e,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(u).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,l)}))}l(s.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}})}function w(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return S()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var l=x(i,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=p(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}function x(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var n=p(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:h,configurable:!0}),h.displayName=s(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),s(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new E(c(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),s(y,l,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=C,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;N(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:C(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var F=function(e){return function(){var t=Object(O.a)(_().mark((function t(a){return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("/api/datalist/data",e).then((function(t){a({type:"GET_DATA",data:t.data.data,totalPages:t.data.totalPages,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=a(3),R=a(810),T=a(821),V=a(210),z=a(52),U=a.n(z),G=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}},e.addNew=!1,e.handleSubmit=function(t){null!==e.props.data?e.props.updateData(t):(e.addNew=!0,e.props.addData(t));var a=Object.keys(e.props.dataParams).length?e.props.dataParams:{page:1,perPage:4};e.props.handleSidebar(!1,!0),e.props.getData(a)},e}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(e,t){null!==this.props.data&&null===e.data&&(this.props.data.id!==t.id&&this.setState({id:this.props.data.id}),this.props.data.name!==t.name&&this.setState({name:this.props.data.name}),this.props.data.category!==t.category&&this.setState({category:this.props.data.category}),this.props.data.popularity.popValue!==t.popularity&&this.setState({popularity:Object(I.a)(Object(I.a)({},this.state.popularity),{},{popValue:this.props.data.popularity.popValue})}),this.props.data.order_status!==t.order_status&&this.setState({order_status:this.props.data.order_status}),this.props.data.price!==t.price&&this.setState({price:this.props.data.price}),this.props.data.img!==t.img&&this.setState({img:this.props.data.img})),null===this.props.data&&null!==e.data&&this.setState({id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew&&this.setState({id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew=!1}},{key:"render",value:function(){var e=this,t=this.props,a=t.show,r=t.handleSidebar,n=t.data,o=this.state,i=o.name,l=o.category,c=o.order_status,p=o.price,u=o.popularity,d=o.img;return s.a.createElement("div",{className:b()("data-list-sidebar",{show:a})},s.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},s.a.createElement("h4",null,null!==n?"UPDATE DATA":"ADD NEW DATA"),s.a.createElement(V.a,{size:20,onClick:function(){return r(!1,!0)}})),s.a.createElement(U.a,{className:"data-list-fields px-2 mt-3",options:{wheelPropagation:!1}},this.props.thumbView&&d.length?s.a.createElement(R.a,{className:"text-center"},s.a.createElement("img",{className:"img-fluid",src:d,alt:i}),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mt-2"},s.a.createElement("label",{className:"btn btn-flat-primary",htmlFor:"update-image",color:"primary"},"Upload Image",s.a.createElement("input",{type:"file",id:"update-image",hidden:!0,onChange:function(t){return e.setState({img:URL.createObjectURL(t.target.files[0])})}})),s.a.createElement(h.a,{color:"flat-danger",onClick:function(){return e.setState({img:""})}},"Remove Image"))):null,s.a.createElement(R.a,null,s.a.createElement(T.a,{for:"data-name"},"Name"),s.a.createElement(m.a,{type:"text",value:i,placeholder:"Apple IphoneX",onChange:function(t){return e.setState({name:t.target.value})},id:"data-name"})),s.a.createElement(R.a,null,s.a.createElement(T.a,{for:"data-category"},"Category"),s.a.createElement(m.a,{type:"select",id:"data-category",value:l,onChange:function(t){return e.setState({category:t.target.value})}},s.a.createElement("option",null,"Audio"),s.a.createElement("option",null,"Computers"),s.a.createElement("option",null,"Fitness"),s.a.createElement("option",null,"Appliances"))),s.a.createElement(R.a,null,s.a.createElement(T.a,{for:"data-popularity"},"Popularity"),s.a.createElement(m.a,{type:"number",value:u.popValue,id:"data-popularity",placeholder:"0 - 100%",onChange:function(t){return e.setState({popularity:{popularity:u,popValue:t.target.value}})}})),s.a.createElement(R.a,null,s.a.createElement(T.a,{for:"data-status"},"Order Status"),s.a.createElement(m.a,{type:"select",id:"data-status",value:c,onChange:function(t){return e.setState({order_status:t.target.value})}},s.a.createElement("option",null,"pending"),s.a.createElement("option",null,"canceled"),s.a.createElement("option",null,"delivered"),s.a.createElement("option",null,"on hold"))),s.a.createElement(R.a,null,s.a.createElement(T.a,{for:"data-price"},"Price"),s.a.createElement(m.a,{type:"number",value:p,onChange:function(t){return e.setState({price:t.target.value})},id:"data-price",placeholder:"69.99"})),this.props.thumbView&&d.length<=0?s.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",s.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(t){return e.setState({img:URL.createObjectURL(t.target.files[0])})}})):null),s.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},s.a.createElement(h.a,{color:"primary",onClick:function(){return e.handleSubmit(e.state)}},null!==n?"Update":"Submit"),s.a.createElement(h.a,{className:"ml-1",color:"danger",outline:!0,onClick:function(){return r(!1,!0)}},"Cancel")))}}]),a}(l.Component),H=a(964),W=a(805),Y=(a(1366),a(1818),{"on hold":"warning",delivered:"success",pending:"primary",canceled:"danger"}),J={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},$=function(e){return s.a.createElement("div",{className:"data-list-action"},s.a.createElement(P.a,{className:"cursor-pointer mr-1",size:20,onClick:function(){return e.currentData(e.row)}}),s.a.createElement(N.a,{className:"cursor-pointer",size:20,onClick:function(){e.deleteRow(e.row)}}))},M=function(e){return s.a.createElement("div",{className:"data-list-header d-flex justify-content-between flex-wrap"},s.a.createElement("div",{className:"actions-left d-flex flex-wrap"},s.a.createElement(c.a,{className:"data-list-dropdown mr-1"},s.a.createElement(p.a,{className:"p-1",color:"primary"},s.a.createElement("span",{className:"align-middle mr-1"},"Actions"),s.a.createElement(D.a,{size:15})),s.a.createElement(u.a,{tag:"div",right:!0},s.a.createElement(d.a,{tag:"a"},"Delete"),s.a.createElement(d.a,{tag:"a"},"Archive"),s.a.createElement(d.a,{tag:"a"},"Print"),s.a.createElement(d.a,{tag:"a"},"Export"))),s.a.createElement(h.a,{className:"add-new-btn",color:"primary",onClick:function(){return e.handleSidebar(!0,!0)},outline:!0},s.a.createElement(C.a,{size:15}),s.a.createElement("span",{className:"align-middle"},"Add New"))),s.a.createElement("div",{className:"actions-right d-flex flex-wrap mt-sm-0 mt-2"},s.a.createElement(c.a,{className:"data-list-rows-dropdown mr-1 d-md-block d-none"},s.a.createElement(p.a,{color:"",className:"sort-dropdown"},s.a.createElement("span",{className:"align-middle mx-50"},"".concat(e.index[0]," - ").concat(e.index[1]," of ").concat(e.total)),s.a.createElement(D.a,{size:15})),s.a.createElement(u.a,{tag:"div",right:!0},s.a.createElement(d.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(4)}},"4"),s.a.createElement(d.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(10)}},"10"),s.a.createElement(d.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(15)}},"15"),s.a.createElement(d.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(20)}},"20"))),s.a.createElement("div",{className:"filter-section"},s.a.createElement(m.a,{type:"text",onChange:function(t){return e.handleFilter(t)}}))))},X=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={data:[],totalPages:0,currentPage:0,columns:[{name:"Name",selector:"name",sortable:!0,minWidth:"300px",cell:function(e){return s.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Category",selector:"category",sortable:!0},{name:"Popularity",selector:"popularity",sortable:!0,cell:function(e){return s.a.createElement(f.a,{className:"w-100 mb-0",color:e.popularity.color,value:e.popularity.popValue})}},{name:"Order Status",selector:"order_status",sortable:!0,cell:function(e){return s.a.createElement(H.a,{className:"m-0",color:Y[e.order_status],text:e.order_status})}},{name:"Price",selector:"price",sortable:!0,cell:function(e){return"$".concat(e.price)}},{name:"Actions",sortable:!0,cell:function(t){return s.a.createElement($,{row:t,getData:e.props.getData,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}}],allData:[],value:"",rowsPerPage:4,sidebar:!1,currentData:null,selected:[],totalRecords:0,sortIndex:[],addNew:""},e.thumbView=e.props.thumbView,e.handleFilter=function(t){e.setState({value:t.target.value}),e.props.filterData(t.target.value)},e.handleRowsPerPage=function(t){var a=e.props,r=a.parsedFilter,n=a.getData,o=void 0!==r.page?r.page:1;x.a.push("/data-list/list-view?page=".concat(o,"&perPage=").concat(t)),e.setState({rowsPerPage:t}),n({page:r.page,perPage:t})},e.handleSidebar=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({sidebar:t}),!0===a&&e.setState({currentData:null,addNew:!0})},e.handleDelete=function(t){if(e.props.deleteData(t),e.props.getData(e.props.parsedFilter),e.state.data.length-1===0){var a=e.props.thumbView?"/data-list/thumb-view/":"/data-list/list-view/";x.a.push("".concat(a,"list-view?page=").concat(parseInt(e.props.parsedFilter.page-1),"&perPage=").concat(e.props.parsedFilter.perPage)),e.props.getData({page:e.props.parsedFilter.page-1,perPage:e.props.parsedFilter.perPage})}},e.handleCurrentData=function(t){e.setState({currentData:t}),e.handleSidebar(!0)},e.handlePagination=function(t){var a=e.props,r=a.parsedFilter,n=a.getData,o=void 0!==r.perPage?r.perPage:4,i=e.props.thumbView?"/data-list/thumb-view/":"/data-list/list-view/";x.a.push("".concat(i,"list-view?page=").concat(t.selected+1,"&perPage=").concat(o)),n({page:t.selected+1,perPage:o}),e.setState({currentPage:t.selected})},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.getData(this.props.parsedFilter),this.props.getInitialData()}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.thumbView){this.thumbView=!1;var r=[{name:"Image",selector:"img",minWidth:"220px",cell:function(e){return s.a.createElement("img",{src:e.img,height:"100",alt:e.name})}},{name:"Name",selector:"name",sortable:!0,minWidth:"250px",cell:function(e){return s.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Category",selector:"category",sortable:!0},{name:"Popularity",selector:"popularity",sortable:!0,cell:function(e){return s.a.createElement(f.a,{className:"w-100 mb-0",color:e.popularity.color,value:e.popularity.popValue})}},{name:"Order Status",selector:"order_status",sortable:!0,cell:function(e){return s.a.createElement(H.a,{className:"m-0",color:Y[e.order_status],text:e.order_status})}},{name:"Price",selector:"price",sortable:!0,cell:function(e){return"$".concat(e.price)}},{name:"Actions",sortable:!0,cell:function(e){return s.a.createElement($,{row:e,getData:a.props.getData,parsedFilter:a.props.parsedFilter,currentData:a.handleCurrentData,deleteRow:a.handleDelete})}}];this.setState({columns:r})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.columns,r=t.data,n=t.allData,o=t.totalPages,i=t.value,l=t.rowsPerPage,c=t.currentData,p=t.sidebar,u=t.totalRecords,d=t.sortIndex;return s.a.createElement("div",{className:"data-list ".concat(this.props.thumbView?"thumb-view":"list-view")},s.a.createElement(v.a,{columns:a,data:i.length?n:r,pagination:!0,paginationServer:!0,paginationComponent:function(){return s.a.createElement(w.a,{previousLabel:s.a.createElement(S.a,{size:15}),nextLabel:s.a.createElement(k.a,{size:15}),breakLabel:"...",breakClassName:"break-me",pageCount:o,containerClassName:"vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2",activeClassName:"active",forcePage:e.props.parsedFilter.page?parseInt(e.props.parsedFilter.page-1):0,onPageChange:function(t){return e.handlePagination(t)}})},noHeader:!0,subHeader:!0,selectableRows:!0,responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,onSelectedRowsChange:function(t){return e.setState({selected:t.selectedRows})},customStyles:J,subHeaderComponent:s.a.createElement(M,{handleSidebar:this.handleSidebar,handleFilter:this.handleFilter,handleRowsPerPage:this.handleRowsPerPage,rowsPerPage:l,total:u,index:d}),sortIcon:s.a.createElement(D.a,null),selectableRowsComponent:W.a,selectableRowsComponentProps:{color:"primary",icon:s.a.createElement(L.a,{className:"vx-icon",size:12}),label:"",size:"sm"}}),s.a.createElement(G,{show:p,data:c,updateData:this.props.updateData,addData:this.props.addData,handleSidebar:this.handleSidebar,thumbView:this.props.thumbView,getData:this.props.getData,dataParams:this.props.parsedFilter,addNew:this.state.addNew}),s.a.createElement("div",{className:b()("data-list-overlay",{show:p}),onClick:function(){return e.handleSidebar(!1,!0)}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.dataList.data.length!==t.data.length||t.currentPage!==e.parsedFilter.page?{data:e.dataList.data,allData:e.dataList.filteredData,totalPages:e.dataList.totalPages,currentPage:parseInt(e.parsedFilter.page)-1,rowsPerPage:parseInt(e.parsedFilter.perPage),totalRecords:e.dataList.totalRecords,sortIndex:e.dataList.sortIndex}:null}}]),a}(l.Component);t.a=Object(j.b)((function(e){return{dataList:e.dataList}}),{getData:F,deleteData:function(e){return function(t){A.a.post("/api/datalist/delete-data",{obj:e}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},updateData:function(e){return function(t,a){A.a.post("/api/datalist/update-data",{obj:e}).then((function(a){t({type:"UPDATE_DATA",obj:e})}))}},addData:function(e){return function(t,a){var r=a().dataList.params;A.a.post("/api/datalist/add-data",{obj:e}).then((function(a){t({type:"ADD_DATA",obj:e}),t(F(r))}))}},getInitialData:function(){return function(){var e=Object(O.a)(_().mark((function e(t){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/api/datalist/initial-data").then((function(e){t({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},filterData:function(e){return function(t){return t({type:"FILTER_DATA",value:e})}}})(X)},1818:function(e,t,a){},805:function(e,t,a){"use strict";var r=a(13),n=a(14),o=a(18),i=a(17),l=a(0),s=a.n(l),c=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},s.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),s.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},s.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),s.a.createElement("span",null,this.props.label))}}]),a}(s.a.Component);t.a=c},964:function(e,t,a){"use strict";var r=a(13),n=a(14),o=a(18),i=a(17),l=a(0),s=a.n(l),c=a(210),p=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).closeChip=function(e){e.target.closest(".chip").remove()},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chip ".concat(this.props.className," ").concat(this.props.color?"chip-".concat(this.props.color):null)},s.a.createElement("div",{className:"chip-body"},!this.props.avatarImg&&this.props.avatarText||!this.props.avatarImg&&this.props.avatarIcon?s.a.createElement("div",{className:"avatar ".concat(this.props.avatarColor?"bg-".concat(this.props.avatarColor):null)},s.a.createElement("div",{className:"avatar-content"},this.props.avatarText?this.props.avatarText:null,this.props.avatarIcon?this.props.avatarIcon:null)):this.props.avatarImg?s.a.createElement("div",{className:"avatar"},s.a.createElement("img",{src:this.props.avatarImg,alt:"chipImg",height:"20",width:"20"})):null,s.a.createElement("div",{className:"chip-text"},this.props.text),this.props.closable?s.a.createElement("div",{className:"chip-closable",onClick:function(t){return e.closeChip(t)}},this.props.closableIcon?this.props.closableIcon:s.a.createElement(c.a,null)):null))}}]),a}(s.a.Component);t.a=p}}]);
//# sourceMappingURL=19.9c0321ea.chunk.js.map