(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[76],{1164:function(e,t){},1358:function(e,t){},1359:function(e,t){},2129:function(e,t,a){},2193:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),s=a(17),r=a(16),i=a(0),o=a.n(i),c=a(748),m=a(1097),u=a(1098),d=a(1099),h=a(1102),p=a(174),E=a(745),f=a(797),b=a(1167),g=a(1140),v=a(1141),w=a(752),x=a(725),C=a(1142),k=a(6),y=a.n(k),N=a(1357),S=a.n(N),L=a(263),j=a(358),R=a(221),O=a(741),F=(a(2129),function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={data:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}],filteredData:[],dataToExport:[],value:"",modal:!1,fileName:"",fileFormat:"xlsx",selectedRows:[],selectAll:!1},e.toggleModal=function(){e.setState({modal:!e.state.modal})},e.handleFilter=function(t){var a=e.state.data,n=[],l=t.target.value;e.setState({value:l}),l.length&&(n=a.filter((function(e){var t=e.name.toLowerCase().startsWith(l.toLowerCase())||e.email.toLowerCase().startsWith(l.toLowerCase())||e.website.toLowerCase().startsWith(l.toLowerCase())||e.id.toString().toLowerCase().startsWith(l.toLowerCase()),a=e.name.toLowerCase().includes(l.toLowerCase())||e.email.toLowerCase().includes(l.toLowerCase())||e.website.toLowerCase().includes(l.toLowerCase())||e.id.toString().toLowerCase().includes(l.toLowerCase());return t||(!t&&a?a:null)})),e.setState({value:l,filteredData:n}))},e.handleExport=function(){e.toggleModal();var t=e.state.dataToExport;e.state.data.map((function(a){return e.state.selectedRows.includes(a.id)?t.push(a):null})),e.setState({dataToExport:t});var a=e.state.fileName.length&&e.state.fileFormat.length?"".concat(e.state.fileName,".").concat(e.state.fileFormat):"excel-sheet.xlsx",n=S.a.utils.json_to_sheet(t),l=S.a.utils.book_new();S.a.utils.book_append_sheet(l,n,"test"),S.a.writeFile(l,a)},e.handleSelect=function(t){var a=e.state.selectedRows;if(a.includes(t)){if(!a.includes(t))return null;a.splice(a.indexOf(t),1)}else a.push(t);e.setState({selectedRows:a})},e.handleSelectAll=function(){var t=e.state.selectedRows,a=e.state.data;if(t.length<a.length){t=a.map((function(e){return e.id}))}else{if(t.length!==a.length)return null;t=[]}e.setState({selectedRows:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=(this.state.value?this.state.filteredData:this.state.data).map((function(t){return o.a.createElement("tr",{key:t.id,className:y()({selected:e.state.selectedRows.includes(t.id)})},o.a.createElement("td",null,o.a.createElement(O.a,{size:"sm",color:"primary",icon:o.a.createElement(L.a,{className:"vx-icon",size:12}),label:"",checked:e.state.selectedRows.includes(t.id),onChange:function(){return e.handleSelect(t.id)}})),o.a.createElement("td",null,t.email),o.a.createElement("td",null,t.name),o.a.createElement("td",null,t.website),o.a.createElement("td",null,t.id))})),a=this.state.selectedRows.length!==this.state.data.length&&this.state.selectedRows.length?j.a:L.a;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/AdeleD/react-paginate"}),o.a.createElement(m.a,{className:"export-component"},o.a.createElement(u.a,{sm:"12"},o.a.createElement(d.a,null,o.a.createElement(h.a,null,o.a.createElement(m.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},o.a.createElement(p.a.Ripple,{color:"primary",onClick:this.toggleModal},"Export Selected"),o.a.createElement("div",{className:"filter position-relative has-icon-left"},o.a.createElement(E.a,{type:"text",value:this.state.value,onChange:function(t){return e.handleFilter(t)}}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(R.a,{size:15}))))),o.a.createElement(u.a,{sm:"12"},o.a.createElement(f.a,{className:"table-hover-animation mt-2",responsive:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement(O.a,{size:"sm",color:"primary",icon:o.a.createElement(a,{className:"vx-icon",size:12}),checked:this.state.selectedRows.length,onChange:function(t){return e.handleSelectAll()}})),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Website"),o.a.createElement("th",null,"Rank"))),o.a.createElement("tbody",null,t)))))))),o.a.createElement(b.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered"},o.a.createElement(g.a,{toggle:this.toggleModal},"Export To Excel"),o.a.createElement(v.a,null,o.a.createElement(w.a,null,o.a.createElement(E.a,{type:"text",value:this.state.fileName,onChange:function(t){return e.setState({fileName:t.target.value})},placeholder:"Enter File Name"})),o.a.createElement(w.a,null,o.a.createElement(x.a,{type:"select",id:"selectFileFormat",name:"customSelect",value:this.state.fileFormat,onChange:function(t){return e.setState({fileFormat:t.target.value})}},o.a.createElement("option",null,"xlsx"),o.a.createElement("option",null,"csv"),o.a.createElement("option",null,"txt")))),o.a.createElement(C.a,null,o.a.createElement(p.a,{color:"primary",onClick:this.handleExport},"Export"),o.a.createElement(p.a,{color:"flat-danger",onClick:this.toggleModal},"Cancel"))))}}]),a}(o.a.Component));t.default=F},741:function(e,t,a){"use strict";var n=a(12),l=a(13),s=a(17),r=a(16),i=a(0),o=a.n(i),c=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),a}(o.a.Component);t.a=c},748:function(e,t,a){"use strict";var n=a(12),l=a(13),s=a(17),r=a(16),i=a(0),o=a.n(i),c=a(1097),m=a(1098),u=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(c.a,{className:"mb-2"},o.a.createElement(m.a,{sm:"12",className:"ml-50"},o.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):o.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(o.a.Component);t.a=u}}]);
//# sourceMappingURL=76.b3ce146a.chunk.js.map