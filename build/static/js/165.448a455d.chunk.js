(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[165],{2332:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),o=l(62),i=l(28),r=l(870),c=l.n(r),u=l(327),d=l(454);var s=e=>{const{i:t,j:l,setIsEdit:o,setCreateFlat:r,CreateFlat:s,setAllBuilding:m,setBuilding:v,setAllUnits:g,setAllFlat:p,id:b}=e,[E,f]=Object(a.useState)(null),[j,h]=Object(a.useState)(null);Object(a.useEffect)(()=>{(async()=>{const e=await i.a.get("https://growbuild-jg.onrender.com/api/project/single/"+(null===t||void 0===t?void 0:t.Project));if(200!==e.status)return null;f(e.data.name)})(),(async()=>{const e=await i.a.get("https://growbuild-jg.onrender.com/api/building/single/"+(null===t||void 0===t?void 0:t.building));if(200!==e.status)return null;h(e.data.name)})()},[]);const _=async e=>{const t=await c()({title:"Are you sure?",text:"Are you sure that you want to delete this Block?",icon:"warning",dangerMode:!0});if(t){await i.a.delete("https://growbuild-jg.onrender.com/api/delete/flat/"+e,{Headers:{"Content-Type":"application/json"}});(async()=>{const e=await i.a.get("".concat("https://growbuild-jg.onrender.com","/api/all/flat"),{Headers:{"Content-Type":"application/json"}});200===e.status&&p(e.data)})()}t()},y=async e=>{o(!0),await(async e=>{if((24===(null===e||void 0===e?void 0:e.length)||12===(null===e||void 0===e?void 0:e.length))&&"Select Project"!==e){const t=await i.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(e),{Headers:{"Content-Type":"application/json"}});m(t.data)}})(null===e||void 0===e?void 0:e.Project),await(async e=>{if(24===(null===e||void 0===e?void 0:e.length)||12===(null===e||void 0===e?void 0:e.length)){const t=await i.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(e),{Headers:{"Content-Type":"application/json"}});v(t.data)}})(null===e||void 0===e?void 0:e.building),await async function(e,t){let l=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if((24===(null===e||void 0===e?void 0:e.length)||12===(null===e||void 0===e?void 0:e.length))&&(24===(null===t||void 0===t?void 0:t.length)||12===(null===t||void 0===t?void 0:t.length))){const a=await i.a.get("".concat("https://growbuild-jg.onrender.com","/api/find/unit/available/").concat(e,"/").concat(t),{Headers:{"Content-Type":"application/json"}});g(l?a.data.allUnits:a.data.availableUnits)}}(null===e||void 0===e?void 0:e.building,null===e||void 0===e?void 0:e.Project,!0),r({...s,Project:null===e||void 0===e?void 0:e.Project,floor:null===e||void 0===e?void 0:e.floor,building:null===e||void 0===e?void 0:e.building,unit:null===e||void 0===e?void 0:e.unit,flat:null===e||void 0===e?void 0:e.flat,flat_area:null===e||void 0===e?void 0:e.flat_area,parking:null===e||void 0===e?void 0:e.parking,starting_price:null===e||void 0===e?void 0:e.starting_price,extra_facilities:null===e||void 0===e?void 0:e.extra_facilities,id:null===e||void 0===e?void 0:e._id,bedRoom:null===e||void 0===e?void 0:e.bedRoom})};return n.a.createElement("tr",null,n.a.createElement("td",null,l+1),n.a.createElement("td",null,null!==E?E:n.a.createElement(n.a.Fragment,null)),n.a.createElement("td",null,null!==j?j:n.a.createElement(n.a.Fragment,null)),n.a.createElement("td",null,null===t||void 0===t?void 0:t.flat),n.a.createElement("td",null,null===t||void 0===t?void 0:t.floor),n.a.createElement("td",null,null===t||void 0===t?void 0:t.flat_area),n.a.createElement("td",null,null===t||void 0===t?void 0:t.bedRoom),n.a.createElement("td",null,null===t||void 0===t?void 0:t.starting_price),n.a.createElement("td",null,n.a.createElement(u.a,{className:"cursor-pointer",color:"green",size:30,onClick:()=>{y(t)}}),n.a.createElement(d.a,{className:"cursor-pointer",color:"red",size:30,onClick:()=>{_(b)}})))};t.default=()=>{const[e,t]=Object(a.useState)(null),[l,r]=Object(a.useState)(!1),[u,d]=Object(a.useState)(null),[m,v]=Object(a.useState)({bedRoom:null,Project:null,floor:null,building:null,unit:null,flat:null,flat_area:null,parking:null,starting_price:null,extra_facilities:null,id:null}),[g,p]=Object(a.useState)(null),[b,E]=Object(a.useState)(null);let f,j;const h=e=>{f=e.target.name,j=e.target.value,v({...m,[f]:j})},[_,y]=Object(a.useState)(null);var w=Object(o.g)();Object(a.useEffect)(()=>{(async()=>{const e=await i.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});y(null===e||void 0===e?void 0:e.data)})()},[]);const N=async e=>{if((24===(null===e||void 0===e?void 0:e.length)||12===(null===e||void 0===e?void 0:e.length))&&"Select Project"!==e){const t=await i.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(e),{Headers:{"Content-Type":"application/json"}});p(t.data)}},x=async(e,t)=>{if((24===(null===e||void 0===e?void 0:e.length)||12===(null===e||void 0===e?void 0:e.length))&&(24===(null===t||void 0===t?void 0:t.length)||12===(null===t||void 0===t?void 0:t.length))){const l=await i.a.get("".concat("https://growbuild-jg.onrender.com","/api/find/unit/").concat(e,"/").concat(t),{Headers:{"Content-Type":"application/json"}});d(l.data)}},C=async e=>{if(24===(null===e||void 0===e?void 0:e.length)||12===(null===e||void 0===e?void 0:e.length)){const t=await i.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(e),{Headers:{"Content-Type":"application/json"}});E(t.data)}},S=async()=>{const e=await i.a.get("".concat("https://growbuild-jg.onrender.com","/api/all/flat"),{Headers:{"Content-Type":"application/json"}});200===e.status&&t(e.data)};Object(a.useEffect)(()=>{S()},[]);const[P,F]=Object(a.useState)(0),[k,A]=Object(a.useState)((null===u||void 0===u?void 0:u.filter(e=>(null===e||void 0===e?void 0:e.unit_name.charAt(0))===P.toString()))||[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container bg-white p-2 rounded-2"},n.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg"},n.a.createElement("h3",{className:"text-alternate text-primary"},"Create Details"),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-md-6 col-12 mb-2"},n.a.createElement("p",{className:"text-alternate"},"Select Project"),n.a.createElement("div",{className:"input-group"},n.a.createElement("select",{className:"form-control",id:"project",onChange:e=>{h(e),N(e.target.value)},name:"Project",value:m.Project},null===_?n.a.createElement("option",{value:null,name:null},"Loading..."):n.a.createElement("option",{value:null,name:null},"Select Project"),null!==_&&0===(null===_||void 0===_?void 0:_.length)&&n.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==_&&(null===_||void 0===_?void 0:_.length)>0&&_.map(e=>n.a.createElement("option",{name:null===e||void 0===e?void 0:e._id,value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.Name))))),n.a.createElement("div",{className:"col-md-6 col-12 mb-2"},n.a.createElement("p",{className:"text-alternate"},"Select Building"),n.a.createElement("div",{className:"input-group"},n.a.createElement("select",{className:"form-control",id:"building",name:"building",onChange:e=>{h(e),C(e.target.value),x(e.target.value,null===m||void 0===m?void 0:m.Project)},value:m.building},null===m.Project?n.a.createElement("option",{value:null,name:null},"First select Project"):n.a.createElement(n.a.Fragment,null,null===g&&n.a.createElement("option",{value:null,name:null},"Loading..."),null!==g&&0===(null===g||void 0===g?void 0:g.length)&&n.a.createElement("option",{value:null,name:null},"No Building Avaliable")),(null===g||void 0===g?void 0:g.length)>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("option",{value:null,name:null},"Select Building"),null===g||void 0===g?void 0:g.map(e=>n.a.createElement(n.a.Fragment,null,n.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.buildingName))))))),n.a.createElement("div",{className:"col-md-6 col-12 mb-2"},n.a.createElement("p",{className:"text-alternate"},"Select Floor"),n.a.createElement("div",{className:"input-group"},n.a.createElement("select",{className:"form-control",id:"floor",name:"floor",onChange:e=>{h(e),F(e.target.value),console.log(k)},value:m.floor},null===b?n.a.createElement("option",{value:null,name:null},"Loading..."):n.a.createElement("option",{value:null,name:null},"Select Floor"),null!==b&&0===(null===b||void 0===b?void 0:b.total_number_of_floors)&&n.a.createElement("option",{value:null,name:null},"No Floor Avaliable"),null!==b&&(null===b||void 0===b?void 0:b.total_number_of_floors)>0&&(e=>{const t=[];for(let l=0;l<e;l++)t.push(n.a.createElement("option",{key:l,value:l},l));return t})(null===b||void 0===b?void 0:b.total_number_of_floors)))),n.a.createElement("div",{className:"col-md-6 col-12 mb-2"},n.a.createElement("p",{className:"text-alternate"},"Select Unit"),n.a.createElement("div",{className:"input-group"},n.a.createElement("select",{className:"form-control",id:"unit",name:"unit",onChange:h,value:m.unit},null===m.Project&&null===m.building&&n.a.createElement("option",{value:null,name:null},"Select Project"),null===m.building&&null!==m.Project&&n.a.createElement("option",{value:null,name:null},"Select Building"),null!==m.building&&null!==m.Project&&null===u&&n.a.createElement("option",{value:null,name:null},"Loading..."),null!==u&&n.a.createElement(n.a.Fragment,null,0===(null===k||void 0===k?void 0:k.length)?n.a.createElement("option",{value:null,name:null},"No Units Avaliable."):n.a.createElement("option",{value:null,name:null},"Select Unit"),(null===k||void 0===k?void 0:k.length)>0&&(null===k||void 0===k?void 0:k.map(e=>n.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,name:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.unit_name))))))),n.a.createElement("div",{className:"col-md-4 col-12 mb-2"},n.a.createElement("p",{className:"text-alternate"},"Flat Area"),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control",id:"flat_area",name:"flat_area",value:m.flat_area,onChange:h,required:""}))),n.a.createElement("div",{className:"col-md-4 col-12 mb-2"},n.a.createElement("p",{className:"text-alternate"},"Bed Room"),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control",id:"bedRoom",name:"bedRoom",value:m.bedRoom,onChange:h,required:""}))),n.a.createElement("div",{className:"col-md-4 col-12 mb-2"},n.a.createElement("p",{className:"text-alternate"},"Starting Price"),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control",id:"price",name:"starting_price",value:m.starting_price,onChange:h,required:""}))),n.a.createElement("div",{className:"col-md-12 col-12 text-right"},l?n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-md mb-1 mr-1",onClick:()=>{v({...m,Project:null,floor:null,building:null,unit:null,flat:null,flat_area:null,parking:null,starting_price:null,extra_facilities:null,id:null,bedRoom:null}),r(!1)}}," ","Exit"," "),n.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:()=>(async e=>{200===(await i.a.put("https://growbuild-jg.onrender.com/api/update/flat/"+e,{Project:m.Project,floor:m.floor,building:m.building,unit:m.unit,flat:m.flat,flat_area:m.flat_area,parking:m.parking,starting_price:m.starting_price,extra_facilities:m.extra_facilities,bedRoom:m.bedRoom})).status&&(c()("Building Updated successfully!","success"),setTimeout(()=>{w.go(0)},2e3))})(null===m||void 0===m?void 0:m.id)}," ","Update"," ")):n.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:()=>(async()=>{200===(await i.a.post("https://growbuild-jg.onrender.com/api/create/flat",{Project:m.Project,floor:m.floor,building:m.building,unit:m.unit,flat:m.flat,flat_area:m.flat_area,parking:m.parking,starting_price:m.starting_price,extra_facilities:m.extra_facilities,bedRoom:m.bedRoom})).status?(window.alert("Flat Upload Done!"),w.go(0)):window.alert("Something Error!")})()}," ","Create"," "))),!l&&n.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},n.a.createElement("h3",{className:"text-alternate text-primary"},"Unit Details"),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("table",{className:"table table-striped table-responsive"},n.a.createElement("tr",null,n.a.createElement("th",null,"Sno."),n.a.createElement("th",null,"Project"),n.a.createElement("th",null,"Building"),n.a.createElement("th",null,"Flat"),n.a.createElement("th",null,"Floor"),n.a.createElement("th",null,"Flat Area"),n.a.createElement("th",null,"Bed Room"),n.a.createElement("th",null,"Starting Price"),n.a.createElement("th",null,"Action")),null===e||void 0===e?void 0:e.map((e,l)=>{let a=null===e||void 0===e?void 0:e._id;return console.log(e),n.a.createElement(s,{i:e,j:l,filteredUnits:k,setFilteredUnits:A,setIsEdit:r,setCreateFlat:v,CreateFlat:m,setAllBuilding:p,setBuilding:E,setAllUnits:d,setAllFlat:t,id:a})}))))))}}}]);
//# sourceMappingURL=165.448a455d.chunk.js.map