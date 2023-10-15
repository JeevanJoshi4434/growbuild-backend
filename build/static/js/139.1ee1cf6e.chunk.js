(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[139],{1429:function(e,t,a){"use strict";a.r(t);var n=a(12),s=a(13),o=a(17),r=a(16),l=a(0),c=a.n(l),i=a(805),u=a(790),m=a(1166),d=a(1167),p=a(1168),h=a(1169),f=a(871),v=a.n(f),b=a(247),y=a(333),g=a(330),x=a(454),N=function(e){return c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},c.a.createElement("div",{className:"add-new"}),c.a.createElement("div",{className:"position-relative has-icon-left mb-1"},c.a.createElement(i.a,{value:e.value,onChange:function(t){return e.handleFilter(t)}}),c.a.createElement("div",{className:"form-control-position"},c.a.createElement(b.a,{size:"15"}))))},E=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={columns:[{name:"Sl No",selector:"slNo",sortable:!0,maxWidth:"16px",cell:function(e){return c.a.createElement("span",{title:e.slNo,className:"d-block text-bold-500 text-truncate mb-0"},e.slNo)}},{name:"Company Name",selector:"name",sortable:!0,minWidth:"200px",cell:function(e){return c.a.createElement("div",{className:"d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1"},c.a.createElement("div",{className:"user-info text-truncate ml-xl-50 ml-0"},c.a.createElement("span",{title:e.name,className:"d-block text-bold-500 text-truncate mb-0"},e.name),c.a.createElement("small",{title:e.name},e.name)))}},{name:"Phone No",selector:"phone",sortable:!0,cell:function(e){return c.a.createElement("p",{className:"text-bold-500 text-truncate mb-0"},e.phone)}},{name:"Project Status",selector:"status",sortable:!0,cell:function(e){return c.a.createElement(u.a,{color:"inactive"===e.status?"light-danger":"light-success",pill:!0},e.status)}},{name:"Key Person",selector:"KeyPersons",sortable:!0,cell:function(e){return c.a.createElement("p",{className:"text-bold-500 mb-0"},e.KeyPersons)}},{name:"Actions",selector:"actions",sortable:!1,cell:function(e){return c.a.createElement("div",{className:"actions"},c.a.createElement("a",{href:"#!",className:"text-primary curser-pointer mx-1"},c.a.createElement(y.a,{size:"15"})),c.a.createElement("a",{href:"#!",className:"text-warning curser-pointer mx-1"},c.a.createElement(g.a,{size:"15"})),c.a.createElement("a",{href:"#!",className:"text-danger curser-pointer mx-1"},c.a.createElement(x.a,{size:"15"})))}}],data:[{slNo:1,name:"AlysShankar",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:2,name:"Alyss Kal",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:3,name:"Alyss Gallop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:4,name:"Alcrop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:5,name:"Al crop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:6,name:"Alcrop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:7,name:"Aly",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:8,name:"Lop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:9,name:"Alyss",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"},{slNo:10,name:"Lillecrop",phone:"9876543210",status:"active",KeyPersons:"Rehan",Actions:"good"}],filteredData:[],value:""},e.handleFilter=function(t){var a=t.target.value,n=e.state.data,s=e.state.filteredData;e.setState({value:a}),a.length&&(s=n.filter((function(e){var t=e.name.toLowerCase().startsWith(a.toLowerCase())||e.phone.toLowerCase().startsWith(a.toLowerCase())||e.status.toLowerCase().startsWith(a.toLowerCase())||e.KeyPersons.toLowerCase().startsWith(a.toLowerCase()),n=e.name.toLowerCase().includes(a.toLowerCase())||e.phone.toLowerCase().includes(a.toLowerCase())||e.status.toLowerCase().includes(a.toLowerCase())||e.KeyPersons.toLowerCase().includes(a.toLowerCase());return t||(!t&&n?n:null)})),e.setState({filteredData:s}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.columns,n=e.value,s=e.filteredData;return c.a.createElement(m.a,null,c.a.createElement(d.a,null,c.a.createElement(p.a,{className:"text-alternate text-primary"},"All Developers"),c.a.createElement("hr",null)),c.a.createElement(h.a,{className:"rdt_Wrapper"},c.a.createElement(v.a,{className:"dataTable-custom",data:n.length?s:t,columns:a,noHeader:!0,pagination:!0,subHeader:!0,subHeaderComponent:c.a.createElement(N,{value:n,handleFilter:this.handleFilter})})))}}]),a}(c.a.Component);t.default=E},805:function(e,t,a){"use strict";var n=a(7),s=a(14),o=a(26),r=a(19),l=a(0),c=a.n(l),i=a(2),u=a.n(i),m=a(18),d=a.n(m),p=a(5),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,r=e.bsSize,l=e.valid,i=e.invalid,u=e.tag,m=e.addon,f=e.plaintext,v=e.innerRef,b=Object(s.a)(e,h),y=["radio","checkbox"].indexOf(o)>-1,g=new RegExp("\\D","g"),x=u||("select"===o||"textarea"===o?o:"input"),N="form-control";f?(N+="-plaintext",x=u||"input"):"file"===o?N+="-file":"range"===o?N+="-range":y&&(N=m?null:"form-check-input"),b.size&&g.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var E=Object(p.mapToCssModules)(d()(t,i&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,N),a);return("input"===x||u&&"function"===typeof u)&&(b.type=o),b.children&&!f&&"select"!==o&&"string"===typeof x&&"select"!==x&&(Object(p.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(x,Object(n.a)({},b,{ref:v,className:E,"aria-invalid":i}))},t}(c.a.Component);v.propTypes=f,v.defaultProps={type:"text"},t.a=v}}]);
//# sourceMappingURL=139.1ee1cf6e.chunk.js.map