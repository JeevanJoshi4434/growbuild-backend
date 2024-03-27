(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[154],{2215:function(e,t,a){"use strict";a.r(t);var l=a(28),n=a(0),o=a.n(n);t.default=()=>{const[e,t]=Object(n.useState)({Project:"",Building:"",paymentPlan:""}),[a,c]=Object(n.useState)(null),[i,r]=Object(n.useState)([]);let u,d;const m=a=>{u=a.target.name,d=a.target.value,t({...e,[u]:d})},[s,v]=Object(n.useState)(null);Object(n.useEffect)(()=>{(async()=>{const e=await l.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});v(e.data)})()},[]);const p=async t=>{if(24===(null===t||void 0===t?void 0:t.length)||12===(null===t||void 0===t?void 0:t.length)){const a=await l.a.get("".concat("https://growbuild-jg.onrender.com","/api/demand/status/").concat(t,"/").concat(e.Project,"/pending"),{Headers:{"Content-Type":"application/json"}});r(a.data)}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{class:"container bg-white p-2 rounded-2"},o.a.createElement("form",{class:"row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg"},o.a.createElement("h3",{class:"text-alternate text-primary"},"Raise Demand"),o.a.createElement("hr",null),o.a.createElement("div",{className:"col-md-6 col-12 mb-2"},o.a.createElement("p",{className:"text-alternate"},"Select Project"),o.a.createElement("div",{className:"input-group"},o.a.createElement("select",{className:"form-control",id:"project",onChange:e=>{m(e),(async e=>{if((24===(null===e||void 0===e?void 0:e.length)||12===(null===e||void 0===e?void 0:e.length))&&"Select Project"!==e){const t=await l.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(e),{Headers:{"Content-Type":"application/json"}});c(t.data)}})(e.target.value)},name:"Project",value:e.Project},null===s?o.a.createElement("option",{value:null,name:null},"Loading..."):o.a.createElement("option",{value:null,name:null},"Select Project"),null!==s&&0===(null===s||void 0===s?void 0:s.length)&&o.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==s&&(null===s||void 0===s?void 0:s.length)>0&&s.map(e=>o.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.Name))))),o.a.createElement("div",{className:"col-md-6 col-12 mb-2"},o.a.createElement("p",{className:"text-alternate"},"Select Building"),o.a.createElement("div",{className:"input-group"},o.a.createElement("select",{className:"form-control",id:"building",name:"Building",onChange:e=>{m(e),p(e.target.value)},value:e.Building},null===e.Project?o.a.createElement("option",{value:null,name:null},"First select Project"):o.a.createElement(o.a.Fragment,null,null===a&&o.a.createElement("option",{value:null,name:null},"Loading..."),null!==a&&0===(null===a||void 0===a?void 0:a.length)&&o.a.createElement("option",{value:null,name:null},"No Building Available")),(null===a||void 0===a?void 0:a.length)>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{value:null,name:null},"Select Building"),null===a||void 0===a?void 0:a.map(e=>o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.buildingName))))))),o.a.createElement("div",{class:"col-md-8 col-12 mb-2"},o.a.createElement("p",{class:"text-alternate"},"Select Payment Plan"),o.a.createElement("div",{class:"input-group"},o.a.createElement("select",{class:"form-control",id:"paymentPlan",name:"paymentPlan",onChange:m,value:e.paymentPlan},null===a&&o.a.createElement("option",{value:""},"Select Building First"),o.a.createElement("option",{value:""},"Select Payment Plan"),i.length>0&&i.map(e=>o.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.stage_name))))),o.a.createElement("div",{class:"col-md-4 col-12 mb-2"},o.a.createElement("p",{class:"text-alternate"},"Raise Demands For this Plan"),o.a.createElement("button",{type:"button",disabled:!(e.paymentPlan.length>0),onClick:async()=>{try{200===(await l.a.put("https://growbuild-jg.onrender.com"+"/api/update/demand/".concat(e.paymentPlan),{Status:"completed",onlyStatus:!0})).status?(alert("Demand Raised successfully"),p(e.Building)):alert("Something went wrong, try again later.")}catch(t){alert("Something went wrong, try again later.")}},class:"btn btn-success"},"Set Plan Active")))))}}}]);
//# sourceMappingURL=154.9fcb1fa2.chunk.js.map