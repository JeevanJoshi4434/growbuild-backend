(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[116],{1402:function(e,t,a){},2306:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),c=a(17),l=a(16),i=a(0),m=a.n(i),s=a(1159),u=a(1160),o=a(810),p=a(45),E=a(1161),b=a(1162),f=a(1163),d=a(1164),j=a(1151);function O(e){var t=Object(i.useState)([]),a=Object(p.a)(t,2),n=a[0],r=a[1],c=Object(j.a)({accept:"image/*",onDrop:function(e){r(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),l=c.getRootProps,s=c.getInputProps,u=n.map((function(e){return m.a.createElement("div",{className:"dz-thumb",key:e.name},m.a.createElement("div",{className:"dz-thumb-inner"},m.a.createElement("img",{src:e.preview,className:"dz-img",alt:e.name})))}));return Object(i.useEffect)((function(){return function(){n.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[n]),m.a.createElement("section",null,m.a.createElement("div",l({className:"dropzone"}),m.a.createElement("input",s()),m.a.createElement("p",{className:"mx-1"},"Drag 'n' drop some files here, or click to select files")),m.a.createElement("aside",{className:"thumb-container"},u))}var v=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement(E.a,null,m.a.createElement(b.a,null,m.a.createElement(f.a,null,"Basic")),m.a.createElement(d.a,null,m.a.createElement(O,null)))}}]),a}(m.a.Component);function g(e){var t=Object(i.useState)([]),a=Object(p.a)(t,2),n=a[0],r=a[1],c=Object(j.a)({accept:"image/jpeg, image/png",onDrop:function(e){r(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),l=c.acceptedFiles,s=c.getRootProps,u=c.getInputProps,o=n.map((function(e){return m.a.createElement("div",{className:"dz-thumb",key:e.name},m.a.createElement("div",{className:"dz-thumb-inner"},m.a.createElement("img",{src:e.preview,className:"dz-img",alt:e.name})))}));Object(i.useEffect)((function(){return function(){n.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[n]);var E=l.map((function(e){return m.a.createElement("aside",{className:"thumb-container mb-1"},o)}));return m.a.createElement("section",{className:"pb-1"},m.a.createElement("div",s({className:"dropzone"}),m.a.createElement("input",u()),m.a.createElement("p",{className:"mx-1"},m.a.createElement("em",null,"(Only *.jpeg and *.png images will be accepted)"))),m.a.createElement("aside",null,E))}var h=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement(E.a,null,m.a.createElement(b.a,null,m.a.createElement(f.a,null,"Specific File Types")),m.a.createElement(d.a,null,m.a.createElement(g,null)))}}]),a}(m.a.Component),N=a(196);function y(e){var t=Object(i.useState)([]),a=Object(p.a)(t,2),n=a[0],r=a[1],c=Object(j.a)({accept:"image/*",noClick:!0,noKeyboard:!0,onDrop:function(e){r(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),l=c.getRootProps,s=c.getInputProps,u=c.open,o=n.map((function(e){return m.a.createElement("div",{className:"dz-thumb",key:e.name},m.a.createElement("div",{className:"dz-thumb-inner"},m.a.createElement("img",{src:e.preview,className:"dz-img",alt:e.name})))}));return Object(i.useEffect)((function(){return function(){n.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[n]),m.a.createElement("section",null,m.a.createElement("div",l({className:"dropzone"}),m.a.createElement("input",s()),m.a.createElement("p",{className:"mx-1"},"Drag 'n' drop some files here, or click to select files")),m.a.createElement(N.a.Ripple,{color:"primary",outline:!0,className:"my-1",onClick:u},"Open File Dialog"),m.a.createElement("aside",{className:"thumb-container"},o))}var k=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement(E.a,null,m.a.createElement(b.a,null,m.a.createElement(f.a,null,"Opening File Dialog Programmatically")),m.a.createElement(d.a,null,m.a.createElement(y,null)))}}]),a}(m.a.Component);function R(e){var t=Object(j.a)({disabled:!0}),a=t.acceptedFiles,n=t.getRootProps,r=t.getInputProps,c=a.map((function(e){return m.a.createElement("li",{key:e.name},e.name," - ",e.size," bytes")}));return m.a.createElement("section",{className:"pb-5"},m.a.createElement("div",n({className:"dropzone disabled"}),m.a.createElement("input",r()),m.a.createElement("p",{className:"mx-1"},"Drag 'n' drop some files here, or click to select files")),m.a.createElement("aside",null,c))}var z=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement(E.a,null,m.a.createElement(b.a,null,m.a.createElement(f.a,null,"Disabled")),m.a.createElement(d.a,{className:"pb-3"},m.a.createElement(R,null)))}}]),a}(m.a.Component),w=(a(1402),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(o.a,{title:"React Dropzone",subTitle:"Simple HTML5 drag-drop zone with React.js.",link:"https://react-dropzone.js.org"}),m.a.createElement(s.a,null,m.a.createElement(u.a,{lg:"6",md:"12"},m.a.createElement(v,null)," "),m.a.createElement(u.a,{lg:"6",md:"12"},m.a.createElement(h,null)," "),m.a.createElement(u.a,{lg:"6",md:"12"},m.a.createElement(k,null)," "),m.a.createElement(u.a,{lg:"6",md:"12"},m.a.createElement(z,null)," ")))}}]),a}(m.a.Component));t.default=w},810:function(e,t,a){"use strict";var n=a(12),r=a(13),c=a(17),l=a(16),i=a(0),m=a.n(i),s=a(1159),u=a(1160),o=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement(s.a,{className:"mb-2"},m.a.createElement(u.a,{sm:"12",className:"ml-50"},m.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?m.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):m.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(m.a.Component);t.a=o}}]);
//# sourceMappingURL=116.959c6f82.chunk.js.map