(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[149],{2309:function(e,t,a){"use strict";a.r(t);var n=a(12),o=a(13),l=a(17),r=a(16),c=a(0),i=a.n(c),m=a(1164),p=a(1165),s=a(802),u=a(1166),d=a(1167),E=a(1168),b=a(812),T=a(794),g=a(795),v=a(1169),f=a(808),h=a(809),C=a(196),y=a(1013),O=a(6),N=a.n(O),B=a(334),U=a(306),x=a(804),j=a.n(x),k=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button, Tooltip} from "reactstrap"\n\nclass TooltipControlled extends React.Component {\n\n  state = {\n    tooltipOpen: false\n  }\n\n  toggleTooltip = () => {\n    this.setState({\n      tooltipOpen: !this.state.tooltipOpen\n    })\n  }\n\n  render() {\n    return(\n      <Button color="primary" id="ControlledExample">\n      Controlled\n      </Button>\n      <Tooltip\n        placement="top"\n        isOpen={this.state.tooltipOpen}\n        target="ControlledExample"\n        toggle={this.toggleTooltip}\n      >\n        Hello World !\n      </Tooltip>\n    )\n  }\n}\nexport default TooltipControlled\n')),R=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button, UncontrolledTooltip} from "reactstrap"\n\nclass TooltipUncontrolled extends React.Component {\n\n\n  render() {\n    return(\n      <Button color="primary" id="UncontrolledExample">\n      Controlled\n      </Button>\n      <UncontrolledTooltip\n        placement="top"\n        target="UncontrolledExample"\n      >\n        Hello World !\n      </UncontrolledTooltip>\n    )\n  }\n}\nexport default TooltipUncontrolled\n')),w=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button, UncontrolledTooltip} from "reactstrap"\n\nclass TooltipPosition extends React.Component {\n\n\n  render() {\n    return(\n    <Button\n      color="primary"\n      className="mr-1 mb-1"\n      outline\n      id="positionTop"\n    >\n      Top\n    </Button>\n    <UncontrolledTooltip placement="top" target="positionTop">\n      Tooltip on Top\n    </UncontrolledTooltip>\n\n    <Button\n      color="primary"\n      className="mr-1 mb-1"\n      outline\n      id="positionRight"\n    >\n      Right\n    </Button>\n    <UncontrolledTooltip placement="right" target="positionRight">\n      Tooltip on Right\n    </UncontrolledTooltip>\n\n    <Button\n      color="primary"\n      className="mr-1 mb-1"\n      outline\n      id="positionBottom"\n    >\n      Bottom\n    </Button>\n    <UncontrolledTooltip placement="bottom" target="positionBottom">\n      Tooltip on Bottom\n    </UncontrolledTooltip>\n\n    <Button\n      color="primary"\n      className="mb-1"\n      outline\n      id="positionLeft"\n    >\n      Left\n    </Button>\n    <UncontrolledTooltip placement="left" target="positionLeft">\n      Tooltip on Left\n    </UncontrolledTooltip>\n    )\n  }\n}\nexport default TooltipPosition\n')),L=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={activeTab:"1",tooltipOpen:!1},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e.toggleTooltip=function(){e.setState({tooltipOpen:!e.state.tooltipOpen})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(E.a,null,"Controlled Tooltip"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(T.a,null,i.a.createElement(g.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(B.a,{size:15}))),i.a.createElement(T.a,null,i.a.createElement(g.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(U.a,{size:15})))))),i.a.createElement(v.a,null,i.a.createElement("p",null,"For controlled tooltips you'll have to manage state of component.controlled tooltips require ",i.a.createElement("code",null,"isOpen")," and"," ",i.a.createElement("code",null,"toggle")," props to work."),i.a.createElement(f.a,{activeTab:this.state.activeTab},i.a.createElement(h.a,{tabId:"1"},i.a.createElement(C.a.Ripple,{color:"primary",id:"ControlledExample"},"Controlled"),i.a.createElement(y.a,{placement:"top",isOpen:this.state.tooltipOpen,target:"ControlledExample",toggle:this.toggleTooltip},"Hello World !")),i.a.createElement(h.a,{className:"component-code",tabId:"2"},k)))))}}]),a}(i.a.Component),z=a(1127),A=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(E.a,null,"Uncontrolled Tooltip"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(T.a,null,i.a.createElement(g.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(B.a,{size:15}))),i.a.createElement(T.a,null,i.a.createElement(g.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(U.a,{size:15})))))),i.a.createElement(v.a,null,i.a.createElement("p",null,"UncontrolledTooltip does not require",i.a.createElement("code",null,"isOpen")," nor ",i.a.createElement("code",null,"toggle")," props to work.All you have to do is provide a valid target to tooltip."),i.a.createElement(f.a,{activeTab:this.state.activeTab},i.a.createElement(h.a,{tabId:"1"},i.a.createElement(C.a,{color:"primary",id:"UnControlledExample"},"Uncontrolled"),i.a.createElement(z.a,{placement:"top",target:"UnControlledExample"},"Hello World !")),i.a.createElement(h.a,{className:"component-code",tabId:"2"},R)))))}}]),a}(i.a.Component),I=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(E.a,null,"Tooltip Positions"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(T.a,null,i.a.createElement(g.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(B.a,{size:15}))),i.a.createElement(T.a,null,i.a.createElement(g.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(U.a,{size:15})))))),i.a.createElement(v.a,null,i.a.createElement("p",null,"Use attribute ",i.a.createElement("code",null,"placement")," to change position of tooltip."),i.a.createElement(f.a,{activeTab:this.state.activeTab},i.a.createElement(h.a,{tabId:"1"},i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(C.a.Ripple,{color:"primary",outline:!0,id:"positionTop"},"Top"),i.a.createElement(z.a,{placement:"top",target:"positionTop"},"Tooltip on Top")),i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(C.a.Ripple,{color:"primary",outline:!0,id:"positionRight"},"Right"),i.a.createElement(z.a,{placement:"right",target:"positionRight"},"Tooltip on Right")),i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(C.a.Ripple,{color:"primary",outline:!0,id:"positionBottom"},"Bottom"),i.a.createElement(z.a,{placement:"bottom",target:"positionBottom"},"Tooltip on Bottom")),i.a.createElement("div",{className:"d-inline-block mb-1"},i.a.createElement(C.a.Ripple,{color:"primary",className:"mb-1",outline:!0,id:"positionLeft"},"Left"),i.a.createElement(z.a,{placement:"left",target:"positionLeft"},"Tooltip on Left"))),i.a.createElement(h.a,{className:"component-code",tabId:"2"},w)))))}}]),a}(i.a.Component),F=(a(803),function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){j.a.highlightAll()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{breadCrumbTitle:"Tooltips",breadCrumbParent:"Components",breadCrumbActive:"Tooltips"}),i.a.createElement(m.a,null,i.a.createElement(p.a,{xl:"6",lg:"12"},i.a.createElement(L,null)),i.a.createElement(p.a,{xl:"6",lg:"12"},i.a.createElement(A,null))),i.a.createElement(m.a,null,i.a.createElement(p.a,{sm:"12"},i.a.createElement(I,null))))}}]),a}(i.a.Component));t.default=F}}]);
//# sourceMappingURL=149.80f05359.chunk.js.map