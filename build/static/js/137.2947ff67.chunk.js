(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[137],{1076:function(e,l,n){"use strict";n.d(l,"a",(function(){return i}));var t=n(0),a=n.n(t),i=a.a.createElement("span",{className:"text-danger"},"*")},2216:function(e,l,n){"use strict";n.r(l);var t=n(28),a=n(0),i=n.n(a),o=n(51);n(1076);l.default=()=>{const[e,l]=Object(a.useState)({Project:null,Building:null,floor:null,unit:null,secondfloor:null,flat:null,parking:null,booking_price:null,booking_date:null,allotment_date:null,agreement_date:null,Owner_name:null,payment_stage:null,price:null,payment_receive:null,payment_type:null,check_number:null,date:null,bank_name:null,branch_name:null,bank_account:null,card_number:null,id:null,price_with_tax:null,balance:null}),[n,c]=Object(a.useState)(null),[u,r]=Object(a.useState)(null),[m,d]=Object(a.useState)(null),[s,g]=Object(a.useState)(null);let v,p;const b=n=>{v=n.target.name,p=n.target.value,l({...e,[v]:p}),console.log({data:e})};Object(a.useEffect)(()=>{(async()=>{const e=await t.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});g(e.data)})()},[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},i.a.createElement("h3",{className:"text-alternate text-primary"},"Payment Master"),i.a.createElement("hr",null),i.a.createElement("div",{className:"col-md-6 col-12 mb-2"},i.a.createElement("p",{className:"text-alternate"},"Select Project"),i.a.createElement("div",{className:"input-group"},i.a.createElement("select",{className:"form-control",id:"project",onChange:e=>{b(e),(async e=>{if((24===(null===e||void 0===e?void 0:e.length)||12===(null===e||void 0===e?void 0:e.length))&&"Select Project"!==e){const l=await t.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(e),{Headers:{"Content-Type":"application/json"}});r(l.data)}})(e.target.value)},name:"Project",value:e.Project},null===s?i.a.createElement("option",{value:null,name:null},"Loading..."):i.a.createElement("option",{value:null,name:null},"Select Project"),null!==s&&0===(null===s||void 0===s?void 0:s.length)&&i.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==s&&(null===s||void 0===s?void 0:s.length)>0&&s.map(e=>i.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.Name))))),i.a.createElement("div",{className:"col-md-6 col-12 mb-2"},i.a.createElement("p",{className:"text-alternate"},"Select Building"),i.a.createElement("div",{className:"input-group"},i.a.createElement("select",{className:"form-control",id:"building",name:"Building",onChange:l=>{b(l),(async e=>{if(24===(null===e||void 0===e?void 0:e.length)||12===(null===e||void 0===e?void 0:e.length)){const l=await t.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(e),{Headers:{"Content-Type":"application/json"}});d(l.data)}})(l.target.value),(async(e,l)=>{if((24===(null===e||void 0===e?void 0:e.length)||12===(null===e||void 0===e?void 0:e.length))&&(24===(null===l||void 0===l?void 0:l.length)||12===(null===l||void 0===l?void 0:l.length))){const n=await t.a.get("".concat("https://growbuild-jg.onrender.com","/api/find/unit/").concat(e,"/").concat(l),{Headers:{"Content-Type":"application/json"}});c(n.data)}})(l.target.value,null===e||void 0===e?void 0:e.Project)},value:e.Building},null===e.Project?i.a.createElement("option",{value:null,name:null},"First select Project"):i.a.createElement(i.a.Fragment,null,null===u&&i.a.createElement("option",{value:null,name:null},"Loading..."),null!==u&&0===(null===u||void 0===u?void 0:u.length)&&i.a.createElement("option",{value:null,name:null},"No Building Avaliable")),(null===u||void 0===u?void 0:u.length)>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:null,name:null},"Select Building"),null===u||void 0===u?void 0:u.map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.buildingName))))))),i.a.createElement("div",{className:"col-md-4 col-12 mb-2"},i.a.createElement("p",{className:"text-alternate"},"Select Floor"),i.a.createElement("div",{className:"input-group"},i.a.createElement("select",{className:"form-control",id:"floor",name:"floor",onChange:b,value:e.floor},null===m?i.a.createElement("option",{value:null,name:null},"Loading..."):i.a.createElement("option",{value:null,name:null},"Select Floor"),null!==m&&0===(null===m||void 0===m?void 0:m.total_number_of_floors)&&i.a.createElement("option",{value:null,name:null},"No Floor Avaliable"),null!==m&&(null===m||void 0===m?void 0:m.total_number_of_floors)>0&&(e=>{const l=[];for(let n=1;n<=e;n++)l.push(i.a.createElement("option",{key:n,value:n},n));return l})(null===m||void 0===m?void 0:m.total_number_of_floors)))),i.a.createElement("div",{className:"col-md-4 col-12 mb-2"},i.a.createElement("p",{className:"text-alternate"},"Select Unit"),i.a.createElement("div",{className:"input-group"},i.a.createElement("select",{className:"form-control",id:"unit",name:"unit",onChange:b,value:e.unit},null===e.Project&&null===e.Building&&i.a.createElement("option",{value:null,name:null},"Select Project First"),null===e.Building&&null!==e.Project&&i.a.createElement("option",{value:null,name:null},"Select Building First"),null!==e.Building&&null!==e.Project&&null===n&&i.a.createElement("option",{value:null,name:null},"Loading..."),null!==n&&i.a.createElement(i.a.Fragment,null,0===n.length?i.a.createElement("option",{value:null,name:null},"No Units Avaliable."):i.a.createElement("option",{value:null,name:null},"Select Unit"),n.length>0&&n.map(l=>{let n="";if(n=l.unit_name,n=n.slice(0,1),n===e.floor)return i.a.createElement("option",{value:null===l||void 0===l?void 0:l._id,name:null===l||void 0===l?void 0:l._id},null===l||void 0===l?void 0:l.unit_name)}))))),i.a.createElement("div",{className:"col-md-4 col-12 mb-2"},null!=e.Project&&null!=e.Building?i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{to:"/installment/view?project=".concat(e.Project,"&&building=").concat(e.Building),className:"btn btn-primary mx-1 my-1",target:"_blank"},"Installment Slip"),i.a.createElement(o.a,{to:"/all/booking?project=".concat(e.Project,"&&building=").concat(e.Building,"&&single=false"),className:"btn btn-primary mx-1 my-1",target:"_blank"},"View All Bookings"),i.a.createElement(o.a,{to:"/payment/all?project=".concat(e.Project,"&&building=").concat(e.Building),className:"btn btn-primary mx-1 my-1",target:"_blank"},"View All Payments"),i.a.createElement(o.a,{to:"/due/payment?project=".concat(e.Project,"&&building=").concat(e.Building),className:"btn btn-primary mx-1 my-1",target:"_blank"},"View All Dues")):i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:"Select Project and Building",disabled:!0,className:"btn btn-primary mx-1 my-1"},"Installment Slip"),i.a.createElement(o.a,{title:"Select Project and Building",disabled:!0,className:"btn btn-primary mx-1 my-1"},"View All Bookings"),i.a.createElement(o.a,{title:"Select Project and Building",disabled:!0,className:"btn btn-primary mx-1 my-1"},"View All Payments"),i.a.createElement(o.a,{title:"Select Project and Building",disabled:!0,className:"btn btn-primary mx-1 my-1"},"View All Dues")),null!=e.Project&&null!=e.Building&&null!=e.unit?i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{to:"/payment/single?building=".concat(e.Building,"&&project=").concat(e.Project,"&&unit=").concat(e.unit),className:"btn btn-primary mx-1 my-1",target:"_blank"},"View Unit Paid Payments"),i.a.createElement(o.a,{to:"/payment/due?building=".concat(e.Building,"&&project=").concat(e.Project,"&&unit=").concat(e.unit),className:"btn btn-primary mx-1 my-1",target:"_blank"},"View Unit Pending Payments")):i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{disabled:!0,title:"Select Project Building and Unit",className:"btn btn-primary mx-1 my-1"},"View Unit Paid Payments"),i.a.createElement(o.a,{disabled:!0,title:"Select Project Building and Unit",className:"btn btn-primary mx-1 my-1"},"View Unit Pending Payments")))))}}}]);
//# sourceMappingURL=137.2947ff67.chunk.js.map