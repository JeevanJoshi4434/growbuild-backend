/*! For license information please see 50.94fb656d.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[50],{2181:function(e,t,a){e.exports=a.p+"static/media/login.fd58a052.png"},2182:function(e,t,a){e.exports=a.p+"static/media/google.222e25f5.svg"},2322:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),o=a(17),i=a(16),c=a(0),s=a.n(c),l=a(1163),u=a(1164),p=a(1165),m=a(1166),f=a(1167),h=a(807),d=a(808),g=(a(6),a(2181)),v=a.n(g),b=(a(947),a(1168)),y=a(196),E=a(71),w=function(e){var t=Object(E.b)(),a=t.isAuthenticated,n=t.loginWithRedirect;return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{className:"pt-1 pb-3"},s.a.createElement(y.a.Ripple,{color:"primary",className:"mt-1",onClick:function(e){e.preventDefault(),a?console.log("Already Logged In"):n()}},"Login With Auth0")))},j=a(837),O=a(810),N=a(804),x=a(821),k=a(51),T=a(805),C=a(238),L=a(367),R=a(286),z=a(331),P=a(459),M=a(348),S=a(27),F=a(2182),W=a.n(F),_=a(37),I=a(146),A=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={email:"demo@demo.com",password:"demodemo",remember:!1},e.handleLogin=function(t){t.preventDefault(),e.props.submitLoginWithFireBase(e.state.email,e.state.password,e.state.remember)},e.handleRemember=function(t){e.setState({remember:t.target.checked})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{className:"pt-1"},s.a.createElement(j.a,{action:"/",onSubmit:this.handleLogin},s.a.createElement(O.a,{className:"form-label-group position-relative has-icon-left"},s.a.createElement(N.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},required:!0}),s.a.createElement("div",{className:"form-control-position"},s.a.createElement(C.a,{size:15})),s.a.createElement(x.a,null,"Email")),s.a.createElement(O.a,{className:"form-label-group position-relative has-icon-left"},s.a.createElement(N.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},required:!0}),s.a.createElement("div",{className:"form-control-position"},s.a.createElement(L.a,{size:15})),s.a.createElement(x.a,null,"Password")),s.a.createElement(O.a,{className:"d-flex justify-content-between align-items-center"},s.a.createElement(T.a,{color:"primary",icon:s.a.createElement(R.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),s.a.createElement("div",{className:"float-right"},s.a.createElement(k.a,{to:"/pages/forgot-password"},"Forgot Password?"))),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement(y.a.Ripple,{color:"primary",outline:!0,onClick:function(){S.a.push("/pages/register")}},"Register"),s.a.createElement(y.a.Ripple,{color:"primary",type:"submit"},"Login")))),s.a.createElement("div",{className:"auth-footer"},s.a.createElement("div",{className:"divider"},s.a.createElement("div",{className:"divider-text"},"OR")),s.a.createElement("div",{className:"footer-btn"},s.a.createElement(y.a.Ripple,{className:"btn-facebook",color:"",onClick:function(){e.props.loginWithFB()}},s.a.createElement(z.a,{size:14})),s.a.createElement(y.a.Ripple,{className:"btn-twitter",color:"",onClick:this.props.loginWithTwitter},s.a.createElement(P.a,{size:14,stroke:"white"})),s.a.createElement(y.a.Ripple,{className:"btn-google",color:"",onClick:this.props.loginWithGoogle},s.a.createElement("img",{src:W.a,alt:"google",height:"15",width:"15"})),s.a.createElement(y.a.Ripple,{className:"btn-github",color:"",onClick:this.props.loginWithGithub},s.a.createElement(M.a,{size:14,stroke:"white"})))))}}]),a}(s.a.Component),G=Object(_.b)((function(e){return{values:e.auth.login}}),{submitLoginWithFireBase:I.i,loginWithFB:I.b,loginWithTwitter:I.f,loginWithGoogle:I.d,loginWithGithub:I.c})(A),q=a(87),B=a(28);function D(){D=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(C){s=function(e,t,a){return e[t]=a}}function l(e,t,a,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),c=new x(r||[]);return n(i,"_invoke",{value:w(e,a,c)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=l;var p={};function m(){}function f(){}function h(){}var d={};s(d,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(k([])));v&&v!==t&&a.call(v,o)&&(d=v);var b=h.prototype=m.prototype=Object.create(d);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(r,i){!function n(r,o,i,c){var s=u(e[r],e,o);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==typeof p&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}})}function w(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return T()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=j(i,a);if(c){if(c===p)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var s=u(e,t,a);if("normal"===s.type){if(n=a.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n="completed",a.method="throw",a.arg=s.arg)}}}function j(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=h,n(b,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:f,configurable:!0}),f.displayName=s(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(E.prototype),s(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(l(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(b),s(b,c,"Generator"),s(b,o,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;N(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:k(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}var J=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={email:"demo@demo.com",password:"demodemo",remember:!1,user:[]},e.handleLogin=Object(q.a)(D().mark((function t(){var a;return D().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.post("".concat("https://growbuild-jg.onrender.com","/api/login"),{Headers:{"Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Origin":"*","Content-Type":"application/json"},email:e.state.email,password:e.state.password});case 2:200===(a=t.sent).status?(S.a.push("/"),e.setState({user:a.data})):alert("Error");case 4:case"end":return t.stop()}}),t)}))),e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{className:"pt-1"},s.a.createElement(j.a,null,s.a.createElement(O.a,{className:"form-label-group position-relative has-icon-left"},s.a.createElement(N.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},required:!0}),s.a.createElement("div",{className:"form-control-position"},s.a.createElement(C.a,{size:15})),s.a.createElement(x.a,null,"Email")),s.a.createElement(O.a,{className:"form-label-group position-relative has-icon-left"},s.a.createElement(N.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},required:!0}),s.a.createElement("div",{className:"form-control-position"},s.a.createElement(L.a,{size:15})),s.a.createElement(x.a,null,"Password")),s.a.createElement(O.a,{className:"d-flex justify-content-between align-items-center"},s.a.createElement(T.a,{color:"primary",icon:s.a.createElement(R.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),s.a.createElement("div",{className:"float-right"},s.a.createElement(k.a,{to:"/pages/forgot-password"},"Forgot Password?"))),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement(y.a.Ripple,{color:"primary",outline:!0,onClick:function(){S.a.push("/pages/register")}},"Register"),s.a.createElement(y.a.Ripple,{color:"primary",onClick:function(){return e.handleLogin()}},"Login")))))}}]),a}(s.a.Component),H=Object(_.b)((function(e){return{values:e.auth.login}}),{loginWithJWT:I.e})(J),Y=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={activeTab:"1",email:"",password:""},e.toggle=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(l.a,{className:"m-0 mt-4 justify-content-center"},s.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},s.a.createElement(p.a,{className:"bg-authentication login-card rounded-0 mb-0 w-100"},s.a.createElement(l.a,{className:"m-0"},s.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},s.a.createElement("img",{src:v.a,alt:"loginImg"})),s.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},s.a.createElement(p.a,{className:"rounded-0 mb-0 px-2 login-tabs-container"},s.a.createElement(m.a,{className:"pb-1"},s.a.createElement(f.a,null,s.a.createElement("h4",{className:"mb-0"},"Login"))),s.a.createElement("p",{className:"px-2 auth-title"},"Welcome back, please login to your account."),s.a.createElement(h.a,{activeTab:this.state.activeTab},s.a.createElement(d.a,{tabId:"1"},s.a.createElement(H,null)),s.a.createElement(d.a,{tabId:"2"},s.a.createElement(G,null)),s.a.createElement(d.a,{tabId:"3"},s.a.createElement(w,null)))))))))}}]),a}(s.a.Component);t.default=Y},800:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=a.n(n).a.createContext({})},804:function(e,t,a){"use strict";var n=a(7),r=a(14),o=a(26),i=a(19),c=a(0),s=a.n(c),l=a(2),u=a.n(l),p=a(18),m=a.n(p),f=a(5),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],d={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,i=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,p=e.addon,d=e.plaintext,g=e.innerRef,v=Object(r.a)(e,h),b=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),E=u||("select"===o||"textarea"===o?o:"input"),w="form-control";d?(w+="-plaintext",E=u||"input"):"file"===o?w+="-file":"range"===o?w+="-range":b&&(w=p?null:"form-check-input"),v.size&&y.test(v.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=v.size,delete v.size);var j=Object(f.mapToCssModules)(m()(t,l&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,w),a);return("input"===E||u&&"function"===typeof u)&&(v.type=o),v.children&&!d&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),s.a.createElement(E,Object(n.a)({},v,{ref:g,className:j,"aria-invalid":l}))},t}(s.a.Component);g.propTypes=d,g.defaultProps={type:"text"},t.a=g},805:function(e,t,a){"use strict";var n=a(12),r=a(13),o=a(17),i=a(16),c=a(0),s=a.n(c),l=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},s.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),s.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},s.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),s.a.createElement("span",null,this.props.label))}}]),a}(s.a.Component);t.a=l},807:function(e,t,a){"use strict";var n=a(7),r=a(19),o=a(0),i=a.n(o),c=a(2),s=a.n(c),l=a(18),u=a.n(l),p=a(800),m=a(5),f={tag:m.tagPropType,activeTab:s.a.any,className:s.a.string,cssModule:s.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.tag,o=Object(m.omit)(this.props,Object.keys(f)),c=Object(m.mapToCssModules)(u()("tab-content",t),a);return i.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},i.a.createElement(r,Object(n.a)({},o,{className:c})))},t}(o.Component);t.a=h,h.propTypes=f,h.defaultProps={tag:"div"}},808:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(7),r=a(14),o=a(0),i=a.n(o),c=a(2),s=a.n(c),l=a(18),u=a.n(l),p=a(800),m=a(5),f=["className","cssModule","tabId","tag"],h={tag:m.tagPropType,className:s.a.string,cssModule:s.a.object,tabId:s.a.any};function d(e){var t=e.className,a=e.cssModule,o=e.tabId,c=e.tag,s=Object(r.a)(e,f),l=function(e){return Object(m.mapToCssModules)(u()("tab-pane",t,{active:o===e}),a)};return i.a.createElement(p.a.Consumer,null,(function(e){var t=e.activeTabId;return i.a.createElement(c,Object(n.a)({},s,{className:l(t)}))}))}d.propTypes=h,d.defaultProps={tag:"div"}},810:function(e,t,a){"use strict";var n=a(7),r=a(14),o=a(0),i=a.n(o),c=a(2),s=a.n(c),l=a(18),u=a.n(l),p=a(5),m=["className","cssModule","row","disabled","check","inline","tag"],f={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:p.tagPropType,className:s.a.string,cssModule:s.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.row,c=e.disabled,s=e.check,l=e.inline,f=e.tag,h=Object(r.a)(e,m),d=Object(p.mapToCssModules)(u()(t,!!o&&"row",s?"form-check":"form-group",!(!s||!l)&&"form-check-inline",!(!s||!c)&&"disabled"),a);return"fieldset"===f&&(h.disabled=c),i.a.createElement(f,Object(n.a)({},h,{className:d}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},821:function(e,t,a){"use strict";var n=a(7),r=a(14),o=a(0),i=a.n(o),c=a(2),s=a.n(c),l=a(18),u=a.n(l),p=a(5),m=["className","cssModule","hidden","widths","tag","check","size","for"],f=s.a.oneOfType([s.a.number,s.a.string]),h=s.a.oneOfType([s.a.bool,s.a.string,s.a.number,s.a.shape({size:f,order:f,offset:f})]),d={children:s.a.node,hidden:s.a.bool,check:s.a.bool,size:s.a.string,for:s.a.string,tag:p.tagPropType,className:s.a.string,cssModule:s.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:s.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,o=e.hidden,c=e.widths,s=e.tag,l=e.check,f=e.size,h=e.for,d=Object(r.a)(e,m),g=[];c.forEach((function(t,n){var r=e[t];if(delete d[t],r||""===r){var o,i=!n;if(Object(p.isObject)(r)){var c,s=i?"-":"-"+t+"-";o=v(i,t,r.size),g.push(Object(p.mapToCssModules)(u()(((c={})[o]=r.size||""===r.size,c["order"+s+r.order]=r.order||0===r.order,c["offset"+s+r.offset]=r.offset||0===r.offset,c))),a)}else o=v(i,t,r),g.push(o)}}));var b=Object(p.mapToCssModules)(u()(t,!!o&&"sr-only",!!l&&"form-check-label",!!f&&"col-form-label-"+f,g,!!g.length&&"col-form-label"),a);return i.a.createElement(s,Object(n.a)({htmlFor:h},d,{className:b}))};b.propTypes=d,b.defaultProps=g,t.a=b},837:function(e,t,a){"use strict";var n=a(7),r=a(14),o=a(26),i=a(19),c=a(0),s=a.n(c),l=a(2),u=a.n(l),p=a(18),m=a.n(p),f=a(5),h=["className","cssModule","inline","tag","innerRef"],d={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,i=e.tag,c=e.innerRef,l=Object(r.a)(e,h),u=Object(f.mapToCssModules)(m()(t,!!o&&"form-inline"),a);return s.a.createElement(i,Object(n.a)({},l,{ref:c,className:u}))},t}(c.Component);g.propTypes=d,g.defaultProps={tag:"form"},t.a=g},947:function(e,t,a){}}]);
//# sourceMappingURL=50.94fb656d.chunk.js.map