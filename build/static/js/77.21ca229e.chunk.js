(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[77],{1009:function(e,a,t){"use strict";var n=t(7),l=t(14),r=t(0),s=t.n(r),c=t(2),i=t.n(c),o=t(18),m=t.n(o),u=t(5),p=["className","cssModule","tag","size"],d={tag:u.tagPropType,size:i.a.string,className:i.a.string,cssModule:i.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.size,i=Object(l.a)(e,p),o=Object(u.mapToCssModules)(m()(a,"input-group",c?"input-group-"+c:null),t);return s.a.createElement(r,Object(n.a)({},i,{className:o}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},1010:function(e,a,t){"use strict";var n=t(7),l=t(14),r=t(0),s=t.n(r),c=t(2),i=t.n(c),o=t(18),m=t.n(o),u=t(5),p=t(901),d=["className","cssModule","tag","addonType","children"],E={tag:u.tagPropType,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.addonType,i=e.children,o=Object(l.a)(e,d),E=Object(u.mapToCssModules)(m()(a,"input-group-"+c),t);return"string"===typeof i?s.a.createElement(r,Object(n.a)({},o,{className:E}),s.a.createElement(p.a,{children:i})):s.a.createElement(r,Object(n.a)({},o,{className:E,children:i}))};b.propTypes=E,b.defaultProps={tag:"div"},a.a=b},1892:function(e,a,t){},2220:function(e,a,t){"use strict";t.r(a);var n=t(12),l=t(13),r=t(17),s=t(16),c=t(0),i=t.n(c),o=t(1160),m=t(1161),u=t(1009),p=t(808),d=t(1010),E=t(197),b=t(1162),f=t(1165),v=t(792),g=t(860),N=t(801),h=t(205),y=t.n(h),O=t(221),T=t(324),j=t(240),z=t(402),M=(t(1892),function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{breadCrumbTitle:"Invoice",breadCrumbParent:"Pages",breadCrumbActive:"Invoice"}),i.a.createElement(o.a,null,i.a.createElement(m.a,{className:"mb-1 invoice-header",md:"5",sm:"12"},i.a.createElement(u.a,null,i.a.createElement(p.a,{placeholder:"Email"}),i.a.createElement(d.a,{addonType:"append"},i.a.createElement(E.a.Ripple,{color:"primary",outline:!0},"Send Invoice")))),i.a.createElement(m.a,{className:"d-flex flex-column flex-md-row justify-content-end invoice-header mb-1",md:"7",sm:"12"},i.a.createElement(E.a,{className:"mr-1 mb-md-0 mb-1",color:"primary",onClick:function(){return window.print()}},i.a.createElement(O.a,{size:"15"}),i.a.createElement("span",{className:"align-middle ml-50"},"Print")),i.a.createElement(E.a.Ripple,{color:"primary",outline:!0},i.a.createElement(T.a,{size:"15"}),i.a.createElement("span",{className:"align-middle ml-50"},"Download"))),i.a.createElement(m.a,{className:"invoice-wrapper",sm:"12"},i.a.createElement(b.a,{className:"invoice-page"},i.a.createElement(f.a,null,i.a.createElement(o.a,null,i.a.createElement(m.a,{md:"6",sm:"12",className:"pt-1"},i.a.createElement(v.a,{className:"pt-1"},i.a.createElement("img",{src:y.a,alt:"logo"}))),i.a.createElement(m.a,{md:"6",sm:"12",className:"text-right"},i.a.createElement("h1",null,"Invoice"),i.a.createElement("div",{className:"invoice-details mt-2"},i.a.createElement("h6",null,"INVOICE NO."),i.a.createElement("p",null,"001/2020"),i.a.createElement("h6",{className:"mt-2"},"INVOICE DATE"),i.a.createElement("p",null,"10 Dec 2018")))),i.a.createElement(o.a,{className:"pt-2"},i.a.createElement(m.a,{md:"6",sm:"12"},i.a.createElement("h5",null,"Recipient"),i.a.createElement("div",{className:"recipient-info my-2"},i.a.createElement("p",null,"Peter Stark"),i.a.createElement("p",null,"8577 West West Drive"),i.a.createElement("p",null,"Holbrook, NY"),i.a.createElement("p",null,"90001")),i.a.createElement("div",{className:"recipient-contact pb-2"},i.a.createElement("p",null,i.a.createElement(j.a,{size:15,className:"mr-50"}),"peter@mail.com"),i.a.createElement("p",null,i.a.createElement(z.a,{size:15,className:"mr-50"}),"+91 988 888 8888"))),i.a.createElement(m.a,{md:"6",sm:"12",className:"text-right"},i.a.createElement("h5",null,"Microsion Technologies Pvt. Ltd."),i.a.createElement("div",{className:"company-info my-2"},i.a.createElement("p",null,"9 N. Sherwood Court"),i.a.createElement("p",null,"Elyria, OH"),i.a.createElement("p",null,"94203")),i.a.createElement("div",{className:"company-contact"},i.a.createElement("p",null,i.a.createElement(j.a,{size:15,className:"mr-50"}),"hello@pixinvent.net"),i.a.createElement("p",null,i.a.createElement(z.a,{size:15,className:"mr-50"}),"+91 999 999 9999")))),i.a.createElement("div",{className:"invoice-items-table pt-1"},i.a.createElement(o.a,null,i.a.createElement(m.a,{sm:"12"},i.a.createElement(g.a,{responsive:!0,borderless:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"TASK DESCRIPTION"),i.a.createElement("th",null,"HOURS"),i.a.createElement("th",null,"RATE"),i.a.createElement("th",null,"AMOUNT"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Website Redesign"),i.a.createElement("td",null,"60"),i.a.createElement("td",null,"15 USD"),i.a.createElement("td",null,"90000 USD")),i.a.createElement("tr",null,i.a.createElement("td",null,"Newsletter template design"),i.a.createElement("td",null,"20"),i.a.createElement("td",null,"12 USD"),i.a.createElement("td",null,"24000 USD"))))))),i.a.createElement("div",{className:"invoice-total-table"},i.a.createElement(o.a,null,i.a.createElement(m.a,{sm:{size:7,offset:5},xs:{size:7,offset:5}},i.a.createElement(g.a,{responsive:!0,borderless:!0},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"SUBTOTAL"),i.a.createElement("td",null,"114000 USD")),i.a.createElement("tr",null,i.a.createElement("th",null,"DISCOUNT (5%)"),i.a.createElement("td",null,"5700 USD")),i.a.createElement("tr",null,i.a.createElement("th",null,"TOTAL"),i.a.createElement("td",null,"108300 USD"))))))),i.a.createElement("div",{className:"text-right pt-3 invoice-footer"},i.a.createElement("p",null,"Transfer the amounts to the business amount below. Please include invoice number on your check."),i.a.createElement("p",{className:"bank-details mb-0"},i.a.createElement("span",{className:"mr-4"},"BANK: ",i.a.createElement("strong",null,"FTSBUS33")),i.a.createElement("span",null,"IBAN: ",i.a.createElement("strong",null,"G882-1111-2222-3333")))))))))}}]),t}(i.a.Component));a.default=M},808:function(e,a,t){"use strict";var n=t(7),l=t(14),r=t(26),s=t(19),c=t(0),i=t.n(c),o=t(2),m=t.n(o),u=t(18),p=t.n(u),d=t(5),E=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,s=e.bsSize,c=e.valid,o=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,f=e.innerRef,v=Object(l.a)(e,E),g=["radio","checkbox"].indexOf(r)>-1,N=new RegExp("\\D","g"),h=m||("select"===r||"textarea"===r?r:"input"),y="form-control";b?(y+="-plaintext",h=m||"input"):"file"===r?y+="-file":"range"===r?y+="-range":g&&(y=u?null:"form-check-input"),v.size&&N.test(v.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=v.size,delete v.size);var O=Object(d.mapToCssModules)(p()(a,o&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,y),t);return("input"===h||m&&"function"===typeof m)&&(v.type=r),v.children&&!b&&"select"!==r&&"string"===typeof h&&"select"!==h&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),i.a.createElement(h,Object(n.a)({},v,{ref:f,className:O,"aria-invalid":o}))},a}(i.a.Component);f.propTypes=b,f.defaultProps={type:"text"},a.a=f},860:function(e,a,t){"use strict";var n=t(7),l=t(14),r=t(0),s=t.n(r),c=t(2),i=t.n(c),o=t(18),m=t.n(o),u=t(5),p=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],d={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:u.tagPropType,responsiveTag:u.tagPropType,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},E=function(e){var a=e.className,t=e.cssModule,r=e.size,c=e.bordered,i=e.borderless,o=e.striped,d=e.dark,E=e.hover,b=e.responsive,f=e.tag,v=e.responsiveTag,g=e.innerRef,N=Object(l.a)(e,p),h=Object(u.mapToCssModules)(m()(a,"table",!!r&&"table-"+r,!!c&&"table-bordered",!!i&&"table-borderless",!!o&&"table-striped",!!d&&"table-dark",!!E&&"table-hover"),t),y=s.a.createElement(f,Object(n.a)({},N,{ref:g,className:h}));if(b){var O=Object(u.mapToCssModules)(!0===b?"table-responsive":"table-responsive-"+b,t);return s.a.createElement(v,{className:O},y)}return y};E.propTypes=d,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E},901:function(e,a,t){"use strict";var n=t(7),l=t(14),r=t(0),s=t.n(r),c=t(2),i=t.n(c),o=t(18),m=t.n(o),u=t(5),p=["className","cssModule","tag"],d={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(l.a)(e,p),i=Object(u.mapToCssModules)(m()(a,"input-group-text"),t);return s.a.createElement(r,Object(n.a)({},c,{className:i}))};E.propTypes=d,E.defaultProps={tag:"span"},a.a=E}}]);
//# sourceMappingURL=77.21ca229e.chunk.js.map