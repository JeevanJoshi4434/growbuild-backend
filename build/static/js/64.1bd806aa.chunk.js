(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[64],{1077:function(t,a,e){"use strict";var s=e(0),i=e.n(s),o=e(872),r=e(885);class n extends i.a.Component{render(){return i.a.createElement(o.a,{icon:this.props.Icon,stat:this.props.data,statTitle:this.props.Title,options:r.g,series:r.h,type:"area"})}}a.a=n},1078:function(t,a,e){"use strict";var s=e(0),i=e.n(s),o=e(872),r=e(885);class n extends i.a.Component{render(){return i.a.createElement(o.a,{icon:this.props.Icon,iconBg:"warning",stat:this.props.data,statTitle:this.props.Title,options:r.a,series:r.b,type:"area"})}}a.a=n},1240:function(t,a,e){"use strict";var s=e(0),i=e.n(s),o=e(1166),r=e(1167),n=e(1168),l=e(1169),c=e(814),d=e.n(c),m=e(388);class p extends i.a.Component{constructor(){super(...arguments),this.state={options:{chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:[this.props.primary,this.props.info],plotOptions:{radar:{polygons:{strokeColors:[this.props.strokeColor,"transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#9f8ed7",this.props.infoLight],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0},legend:{show:!1},labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:[this.props.strokeColor,this.props.strokeColor,this.props.strokeColor,this.props.strokeColor,this.props.strokeColor,this.props.strokeColor]}},yaxis:{show:!1},grid:{show:!1}},series:[{name:"Sales",data:[90,50,86,40,100,20]},{name:"Visit",data:[70,75,70,76,20,85]}]}}render(){return i.a.createElement(o.a,null,i.a.createElement(r.a,null,i.a.createElement("div",{className:"title"},i.a.createElement(n.a,null,"Sales"),i.a.createElement("p",{className:"text-muted mb-0"},"Last 6 months")),i.a.createElement(m.a,{className:"cursor-pointer",size:20})),i.a.createElement(l.a,null,i.a.createElement("div",{className:"item-info d-inline-block mr-2"},i.a.createElement("div",{className:"bg-primary",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",marginRight:"5px"}}),i.a.createElement("span",null,"Booking")),i.a.createElement("div",{className:"item-info d-inline-block"},i.a.createElement("div",{className:"bg-info",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",marginRight:"5px"}}),i.a.createElement("span",null,"Available")),i.a.createElement(d.a,{options:this.state.options,series:this.state.series,type:"radar",height:400})))}}a.a=p},1603:function(t,a){t.exports="data:image/png;base64,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"},1604:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAABTCAMAAAAY2TOcAAABAlBMVEUAAADtj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0aftj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0acb0acb0aftj53tj53tj53tj53/vAEb0af/vAEb0aftj50b0acb0acb0af/vAEb0af/vAEb0af/vAEb0acb0af/vAH/vAH/vAH/vAH/vAH/vAEb0af/vAEb0af4qz7/vAHtj50b0af/vAFW6jjPAAAAU3RSTlMAAvcI/RXta/IF3tfCWUnStU8sIOF86L2ml4LNuHE3EAySU5wpKCQbsY5hRfnIq6Iy5NaxnYiFdz708uBkQQtbTph5IBT56MXw4puXSEY9IpIxHhHzkVEAAAVwSURBVHja7dtpV9pAGAXgmz00gOyL7CKyKWC12s1q7b4vL/3/f6U0CBPizICVWNLj88GPntzhvZkJJ4DsSgShR0SlKsKOJvRiDeGm0x+5GELNpqn8HkLMpitqVkNo2TTn9BFWNnkUDISTTV6mpSCMbFp0MEIIZchHb9QROhm65nAHYZMhjkQa4ZIhHvV0Q4+Ir14+e/Ps0095CsZ5jA30+cmvP558WZKCGRoIELlwM98mIVzvX2GBQ0JmT8HMZqT4+GvmJTzi2CIxPYuZzUjxYZ7iGWaUZIkkKTLZ8s78w9iMFL/m3swyxCYBhCnUQl/BAT2wNExtRAr/ZxHpOUTCFCWrhokhEZnb05JvRIrFXmhWhkiUwmyMMJWdfizFFrAZKbz3qHolR1dyKPkKnY+xGYrRlN5ZunlcHr+4gxRsv6hlTZpLILpQ6O00PEY0dyAv+sV4/HA36BRs7/5xYpPHtieFOoj7rrROzKTodYjsPh2Px0/PcTfaXZsWJOcptio1XHO4WJgTQdFfPxy72FQFKF1Uyac9TWEXR+CJ0iK1mQLH0djFpio4reE++eXcC42yQvs06ZrEGWegHs5ivEOgUgWdrksAhe09CJ0SRykWgc+L47Hr7WsEqNohrm3I7RBXpnKt6Oduv4McqMdlEtiBXIoEzEdtzlRdIDDxKAmlIafpJLI/TPmn6hIB0OKNApIlEjNXeJ6VKPcRsFalrBJZOHsguwwskyepUgyBqe00p2uo1gCtq5PICZYpkpTZHCEISvU0Or/swvQGtSUrt1yFJB7sFCd/ulUFa2XECjnyOIMrklXF5ZaLk5BZiVwdeg8bZ+sKEnl8UtJ9a6XMW3IgLLdciwT0ogHAYKMVj+C20r2BTddkMadYtqDcchFBqcopuDzDag6TGv6a1u86xKO3F4ImyO8RluPe4pw4rnTJyx7E6n93Q02oJJDAopjJLbdcmTOIFhueJPmonV4NN1FPFv0rJb9Io8Art1yDfPa7NTB1nbOrly0DK3tEUjlO3ZKHnHJLWbRo4DsBHxCPHrXakDFS8d5poxB1CrB0Ylab+lqR5vJgVrzVls7gc0IiB6dpf4PT1aS13eyUDvfnA7gHJG0SawkOuA6LuYI0MTnO97Z9kjhxFy7Vj1W6hbxjih4NqjkSiUJAe6SvXm4obNlO6rz/ppKIainAUJXu/tp0qRwS6EFoND3n7mEVDk0V0jc8L26l3ALkSCI5G/Q8cdl1iEVOVSJTwSo60yGvQiBLfA3taoIl5U2wKxoSTxNSe9Hl5Wb7WiYmTlwlnlxc9uzOqj2nbBNHFXKKlcVKLLKlL4hEbN4iG5hTOiSwDa/e/vWhxLqcNduQSvBrzdQeyKrN9G3yqeDOVDi1XjRSZdVmUoe+Q4CBOzPi1NrHklabaW+R1wB3RzF9teYoSKvN1MvkEccdGizWmqfuSKvNRJo0l1Fwh6yFWvOlbHm1mawnZ3CeH73Aopan1kKxJdVmYiq59DQC85zz9f4huboaJIpLqs08Nv3P0+sPMfH0AguGrNZiWmlJtZmWu8HEEJjLsesSXj0i6hhYIm3SqiNvHBCZGoJz8XQ88RxebVZrmeSyajNahxoI0u7DWQhmkLrZI3YSyyiNFAL14ug5/k4kOqt2qLVzbrVD/S74RF93qx122Um1Q/w6+xWlTEmEn1HEvXv37v2P+vmw/lLHw9LJ2cgYu8dHWFGkSBNOG5vm659X3M6xEiNPrjzWp5qP47bO393kvbAEuaLrG6nWYB1HuuPx1DFWYTg00YxgXRo6TWRxS6/fTl80vFhxpLZIr6z1cD2hF28/UpMMR1+xKoNN8TpoDlEnhds7+r6Lfyce3bhftf8GxgHAIi+xyUgAAAAASUVORK5CYII="},1609:function(t,a,e){},2330:function(t,a,e){"use strict";e.r(a);var s=e(0),i=e.n(s),o=e(1164),r=e(1165),n=e(1166),l=e(1169),c=e(273),d=e(1603),m=e.n(d),p=e(1604),u=e.n(p);class h extends i.a.Component{render(){return i.a.createElement(n.a,{className:"bg-analytics text-white sales-card"},i.a.createElement(l.a,{className:"text-center"},i.a.createElement("img",{src:m.a,alt:"card-img-left",className:"img-left"}),i.a.createElement("img",{src:u.a,alt:"card-img-right",className:"img-right"}),i.a.createElement("div",{className:"avatar avatar-xl bg-primary shadow avatar-dashboard mt-0"},i.a.createElement("div",{className:"avatar-content"},i.a.createElement(c.a,{className:"text-white",size:28}))),i.a.createElement("div",{className:"award-info text-center"},i.a.createElement("h1",{className:"mb-2 text-white"}," ","Welcome ",i.a.createElement("br",null)," Jay Mazumdar"))))}}var b=h,v=e(1077),A=e(1078),E=(e(1240),e(12)),g=e(13),j=e(17),V=e(16),y=e(1167),f=e(1168),w=e(409),k=e(251),x=e(290),F=(i.a.Component,e(1609),e(28)),N=e(471),T=e(393),H=e(227),I=e(222),Y=e(279);class C extends i.a.Component{constructor(){super(...arguments),this.state={data:[]},this.data={bookingStat:{bookings:7,total:19},buildings:4,customers:7,demands:18,projects:3,totalPrice:262524.44,totalPriceCollected:9978.44,totalUnits:19},this.getData=async()=>{try{const t=await F.a.get("https://growbuild-jg.onrender.com/api/get/stats");200===t.status&&(this.setState({data:t.data}),console.log({data:this.state.data,resp:t.data}))}catch(t){console.error("Error fetching data:",t)}}}numberFormatter(t){let a="";return a=t>=1e9?(t/1e9).toFixed(1)+"B":t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":null===t||void 0===t?void 0:t.toString(),a}componentDidMount(){this.getData()}render(){var t,a,e;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{className:"match-height"},i.a.createElement(r.a,{lg:"6",md:"12"},i.a.createElement(b,null)),i.a.createElement(r.a,{lg:"3",md:"6",sm:"12"},i.a.createElement(v.a,{data:this.numberFormatter(this.state.data.customers)||"Loading...",Icon:i.a.createElement(N.a,{className:"primary",size:22}),Title:"Customers"})),i.a.createElement(r.a,{lg:"3",md:"6",sm:"12"},i.a.createElement(A.a,{data:this.numberFormatter(this.state.data.totalUnits)||"Loading...",Icon:i.a.createElement(T.a,{className:"warning",size:22}),Title:"Total Units"}))),i.a.createElement(o.a,{className:"match-height"},i.a.createElement(r.a,{lg:"3",md:"6",sm:"12"},i.a.createElement(v.a,{data:this.numberFormatter(null===(t=this.state.data.bookingStat)||void 0===t?void 0:t.bookings)||"Loading...",Icon:i.a.createElement(H.a,{className:"primary",size:22}),Title:"Bookings"})),i.a.createElement(r.a,{lg:"3",md:"6",sm:"12"},i.a.createElement(A.a,{data:this.numberFormatter(parseInt((null===(a=this.state.data.bookingStat)||void 0===a?void 0:a.total)-(null===(e=this.state.data.bookingStat)||void 0===e?void 0:e.bookings)))||"Loading...",Icon:i.a.createElement(T.a,{className:"warning",size:22}),Title:"Salable Units"})),i.a.createElement(r.a,{lg:"3",md:"6",sm:"12"},i.a.createElement(v.a,{data:this.numberFormatter(this.state.data.totalPrice)||"Loading...",Icon:i.a.createElement(I.a,{className:"primary",size:22}),Title:"Total Payment Raised"})),i.a.createElement(r.a,{lg:"3",md:"6",sm:"12"},i.a.createElement(A.a,{data:this.numberFormatter(this.state.data.totalPriceCollected)||"Loading...",Icon:i.a.createElement(Y.a,{className:"warning",size:22}),Title:"Total Payment Collected"}))))}}a.default=C},872:function(t,a,e){"use strict";var s=e(12),i=e(13),o=e(17),r=e(16),n=e(0),l=e.n(n),c=e(1166),d=e(1169),m=e(814),p=e.n(m),u=function(t){Object(o.a)(e,t);var a=Object(r.a)(e);function e(){return Object(s.a)(this,e),a.apply(this,arguments)}return Object(i.a)(e,[{key:"render",value:function(){return l.a.createElement(c.a,null,l.a.createElement(d.a,{className:"".concat(this.props.className?this.props.className:"stats-card-body"," d-flex ").concat(this.props.iconRight||this.props.hideChart?this.props.iconRight?"justify-content-between flex-row-reverse align-items-center":this.props.hideChart&&!this.props.iconRight?"justify-content-center flex-column text-center":null:"flex-column align-items-start"," ").concat(this.props.hideChart?"pb-2":"pb-0"," pt-2")},l.a.createElement("div",{className:"icon-section"},l.a.createElement("div",{className:"avatar avatar-stats p-50 m-0 ".concat(this.props.iconBg?"bg-rgba-".concat(this.props.iconBg):"bg-rgba-primary")},l.a.createElement("div",{className:"avatar-content"},this.props.icon))),l.a.createElement("div",{className:"title-section"},l.a.createElement("h2",{className:"text-bold-600 mt-1 mb-25"},this.props.stat),l.a.createElement("p",{className:"mb-0"},this.props.statTitle))),!this.props.hideChart&&l.a.createElement(p.a,{options:this.props.options,series:this.props.series,type:this.props.type,height:this.props.height?this.props.height:100}))}}]),e}(l.a.Component);a.a=u},885:function(t,a,e){"use strict";e.d(a,"g",(function(){return s})),e.d(a,"h",(function(){return i})),e.d(a,"e",(function(){return o})),e.d(a,"f",(function(){return r})),e.d(a,"c",(function(){return n})),e.d(a,"d",(function(){return l})),e.d(a,"a",(function(){return c})),e.d(a,"b",(function(){return d}));var s={chart:{id:"subscribers",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},i=[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],o={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#28C76F"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},r=[{name:"Revenue",data:[350,275,400,300,350,300,450]}],n={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#EA5455"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},l=[{name:"Sales",data:[10,15,7,12,3,16]}],c={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#FF9F43"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},d=[{name:"Orders",data:[10,15,8,15,7,12,8]}]}}]);
//# sourceMappingURL=64.1bd806aa.chunk.js.map