/*! For license information please see 5.74193b1c.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[5],{1062:function(t,e,n){},1360:function(t,e,n){t.exports=n(1800)()},1799:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)){if(o.length){var r=s.apply(null,o);r&&t.push(r)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){t.push(o.toString());continue}for(var a in o)n.call(o,a)&&o[a]&&t.push(a)}}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0===(o=function(){return s}.apply(e,[]))||(t.exports=o)}()},1800:function(t,e,n){"use strict";var o=n(1801);function s(){}function i(){}i.resetWarningCache=s,t.exports=function(){function t(t,e,n,s,i,r){if(r!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:s};return n.PropTypes=n,n}},1801:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},851:function(t,e,n){"use strict";n.d(e,"a",(function(){return Q})),n.d(e,"b",(function(){return J})),n.d(e,"c",(function(){return z})),n.d(e,"d",(function(){return K})),n.d(e,"e",(function(){return Y})),n.d(e,"f",(function(){return ct}));var o=n(7),s=n(14),i=n(19),r=n(0),a=n.n(r),u=n(1360),l=n.n(u),c=n(1799),p=n.n(c),d=n(50),f=n.n(d),h=!1,g=a.a.createContext(null),m=function(t){function e(e,n){var o;o=t.call(this,e,n)||this;var s,i=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?i?(s="exited",o.appearStatus="entering"):s="entered":s=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",o.state={status:s},o.nextCallback=null,o}Object(i.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!==typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),"entering"===e){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:f.a.findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(t){var e=this,n=this.props.enter,o=this.context?this.context.isMounting:t,s=this.props.nodeRef?[o]:[f.a.findDOMNode(this),o],i=s[0],r=s[1],a=this.getTimeouts(),u=o?a.appear:a.enter;!t&&!n||h?this.safeSetState({status:"entered"},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,r),this.safeSetState({status:"entering"},(function(){e.props.onEntering(i,r),e.onTransitionEnd(u,(function(){e.safeSetState({status:"entered"},(function(){e.props.onEntered(i,r)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:f.a.findDOMNode(this);e&&!h?(this.props.onExit(o),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(o),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:f.a.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=s[0],r=s[1];this.props.addEndListener(i,r)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(s.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(g.Provider,{value:null},"function"===typeof n?n(t,o):a.a.cloneElement(a.a.Children.only(n),o))},e}(a.a.Component);function b(){}m.contextType=g,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},m.UNMOUNTED="unmounted",m.EXITED="exited",m.ENTERING="entering",m.ENTERED="entered",m.EXITING="exiting";var y=m,v=n(26);function E(t,e){var n=Object.create(null);return t&&r.Children.map(t,(function(t){return t})).forEach((function(t){n[t.key]=function(t){return e&&Object(r.isValidElement)(t)?e(t):t}(t)})),n}function T(t,e,n){return null!=n[e]?n[e]:t.props[e]}function O(t,e,n){var o=E(t.children),s=function(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var o,s=Object.create(null),i=[];for(var r in t)r in e?i.length&&(s[r]=i,i=[]):i.push(r);var a={};for(var u in e){if(s[u])for(o=0;o<s[u].length;o++){var l=s[u][o];a[s[u][o]]=n(l)}a[u]=n(u)}for(o=0;o<i.length;o++)a[i[o]]=n(i[o]);return a}(e,o);return Object.keys(s).forEach((function(i){var a=s[i];if(Object(r.isValidElement)(a)){var u=i in e,l=i in o,c=e[i],p=Object(r.isValidElement)(c)&&!c.props.in;!l||u&&!p?l||!u||p?l&&u&&Object(r.isValidElement)(c)&&(s[i]=Object(r.cloneElement)(a,{onExited:n.bind(null,a),in:c.props.in,exit:T(a,"exit",t),enter:T(a,"enter",t)})):s[i]=Object(r.cloneElement)(a,{in:!1}):s[i]=Object(r.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:T(a,"exit",t),enter:T(a,"enter",t)})}})),s}var x=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},C=function(t){function e(e,n){var o,s=(o=t.call(this,e,n)||this).handleExited.bind(Object(v.a)(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,o,s=e.children,i=e.handleExited;return{children:e.firstRender?(n=t,o=i,E(n.children,(function(t){return Object(r.cloneElement)(t,{onExited:o.bind(null,t),in:!0,appear:T(t,"appear",n),enter:T(t,"enter",n),exit:T(t,"exit",n)})}))):O(t,s,i),firstRender:!1}},n.handleExited=function(t,e){var n=E(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=Object(o.a)({},e.children);return delete n[t.key],{children:n}})))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,o=Object(s.a)(t,["component","childFactory"]),i=this.state.contextValue,r=x(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===e?a.a.createElement(g.Provider,{value:i},r):a.a.createElement(g.Provider,{value:i},a.a.createElement(e,o,r))},e}(a.a.Component);C.propTypes={},C.defaultProps={component:"div",childFactory:function(t){return t}};var N=C,j={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},k={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},D=0,R=1,S=2,_=3,P=4,L=function(){};function I(t){return"number"===typeof t&&!isNaN(t)&&t>0}function w(t){return Object.keys(t).map((function(e){return t[e]}))}var F=!("undefined"===typeof window||!window.document||!window.document.createElement);var M,B=((M=function(t,e,n){var o=t[e];return!1===o||I(o)?null:new Error(n+" expect "+e+" \n      to be a valid Number > 0 or equal to false. "+o+" given.")}).isRequired=function(t,e,n){if("undefined"===typeof t[e])return new Error("The prop "+e+" is marked as required in \n      "+n+", but its value is undefined.");M(t,e,n)},M),A={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t){return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach((function(t){return clearTimeout(t)})),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];this.list.has(t)&&this.list.get(t).forEach((function(n){var s=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(s)}))}};function q(t){var e=t.enter,n=t.exit,i=t.duration,r=void 0===i?750:i,u=t.appendPosition,l=void 0!==u&&u;return function(t){var i,u,c=t.children,p=t.position,d=t.preventExitTransition,f=Object(s.a)(t,["children","position","preventExitTransition"]),h=l?e+"--"+p:e,g=l?n+"--"+p:n;Array.isArray(r)&&2===r.length?(i=r[0],u=r[1]):i=u=r;return a.a.createElement(y,Object(o.a)({},f,{timeout:d?0:{enter:i,exit:u},onEnter:function(t){t.classList.add(h),t.style.animationFillMode="forwards",t.style.animationDuration=.001*i+"s"},onEntered:function(t){t.classList.remove(h),t.style.cssText=""},onExit:d?L:function(t){t.classList.add(g),t.style.animationFillMode="forwards",t.style.animationDuration=.001*u+"s"}}),c)}}function H(t){var e,n,s=t.delay,i=t.isRunning,r=t.closeToast,u=t.type,l=t.hide,c=t.className,d=t.style,f=t.controlledProgress,h=t.progress,g=t.rtl,m=Object(o.a)({},d,{animationDuration:s+"ms",animationPlayState:i?"running":"paused",opacity:l?0:1,transform:f?"scaleX("+h+")":null}),b=p()("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+u,((e={})["Toastify__progress-bar--rtl"]=g,e),c),y=((n={})[f&&h>=1?"onTransitionEnd":"onAnimationEnd"]=f&&h<1?null:r,n);return a.a.createElement("div",Object(o.a)({className:b,style:m},y))}function U(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function X(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}H.propTypes={delay:B.isRequired,isRunning:l.a.bool.isRequired,closeToast:l.a.func.isRequired,rtl:l.a.bool.isRequired,type:l.a.string,hide:l.a.bool,className:l.a.oneOfType([l.a.string,l.a.object]),progress:l.a.number,controlledProgress:l.a.bool},H.defaultProps={type:k.DEFAULT,hide:!1};var V=F&&/(msie|trident)/i.test(navigator.userAgent),W=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))||this).state={isRunning:!0,preventExitTransition:!1},e.flag={canCloseOnClick:!0,canDrag:!1},e.drag={start:0,x:0,y:0,deltaX:0,removalDistance:0},e.boundingRect=null,e.ref=null,e.pauseToast=function(){e.props.autoClose&&e.setState({isRunning:!1})},e.playToast=function(){e.props.autoClose&&e.setState({isRunning:!0})},e.onDragStart=function(t){e.flag.canCloseOnClick=!0,e.flag.canDrag=!0,e.boundingRect=e.ref.getBoundingClientRect(),e.ref.style.transition="",e.drag.start=e.drag.x=U(t.nativeEvent),e.drag.removalDistance=e.ref.offsetWidth*(e.props.draggablePercent/100)},e.onDragMove=function(t){e.flag.canDrag&&(e.state.isRunning&&e.pauseToast(),e.drag.x=U(t),e.drag.deltaX=e.drag.x-e.drag.start,e.drag.y=X(t),e.drag.start!==e.drag.x&&(e.flag.canCloseOnClick=!1),e.ref.style.transform="translateX("+e.drag.deltaX+"px)",e.ref.style.opacity=1-Math.abs(e.drag.deltaX/e.drag.removalDistance))},e.onDragEnd=function(t){if(e.flag.canDrag){if(e.flag.canDrag=!1,Math.abs(e.drag.deltaX)>e.drag.removalDistance)return void e.setState({preventExitTransition:!0},e.props.closeToast);e.ref.style.transition="transform 0.2s, opacity 0.2s",e.ref.style.transform="translateX(0)",e.ref.style.opacity=1}},e.onDragTransitionEnd=function(){if(e.boundingRect){var t=e.boundingRect,n=t.top,o=t.bottom,s=t.left,i=t.right;e.props.pauseOnHover&&e.drag.x>=s&&e.drag.x<=i&&e.drag.y>=n&&e.drag.y<=o?e.pauseToast():e.playToast()}},e.onExitTransitionEnd=function(){if(V)e.props.onExited();else{var t=e.ref.scrollHeight,n=e.ref.style;requestAnimationFrame((function(){n.minHeight="initial",n.height=t+"px",n.transition="all 0.4s ",requestAnimationFrame((function(){n.height=0,n.padding=0,n.margin=0})),setTimeout((function(){return e.props.onExited()}),400)}))}},e}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onOpen(this.props.children.props),this.props.draggable&&this.bindDragEvents(),this.props.pauseOnFocusLoss&&this.bindFocusEvents()},n.componentDidUpdate=function(t){t.draggable!==this.props.draggable&&(this.props.draggable?this.bindDragEvents():this.unbindDragEvents()),t.pauseOnFocusLoss!==this.props.pauseOnFocusLoss&&(this.props.pauseOnFocusLoss?this.bindFocusEvents():this.unbindFocusEvents())},n.componentWillUnmount=function(){this.props.onClose(this.props.children.props),this.props.draggable&&this.unbindDragEvents(),this.props.pauseOnFocusLoss&&this.unbindFocusEvents()},n.bindFocusEvents=function(){window.addEventListener("focus",this.playToast),window.addEventListener("blur",this.pauseToast)},n.unbindFocusEvents=function(){window.removeEventListener("focus",this.playToast),window.removeEventListener("blur",this.pauseToast)},n.bindDragEvents=function(){document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchmove",this.onDragMove),document.addEventListener("touchend",this.onDragEnd)},n.unbindDragEvents=function(){document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchmove",this.onDragMove),document.removeEventListener("touchend",this.onDragEnd)},n.render=function(){var t,e=this,n=this.props,s=n.closeButton,i=n.children,r=n.autoClose,u=n.pauseOnHover,l=n.onClick,c=n.closeOnClick,d=n.type,f=n.hideProgressBar,h=n.closeToast,g=n.transition,m=n.position,b=n.className,y=n.bodyClassName,v=n.progressClassName,E=n.progressStyle,T=n.updateId,O=n.role,x=n.progress,C=n.rtl,N={className:p()("Toastify__toast","Toastify__toast--"+d,(t={},t["Toastify__toast--rtl"]=C,t),b)};r&&u&&(N.onMouseEnter=this.pauseToast,N.onMouseLeave=this.playToast),c&&(N.onClick=function(t){l&&l(t),e.flag.canCloseOnClick&&h()});var j=parseFloat(x)===x;return a.a.createElement(g,{in:this.props.in,appear:!0,onExited:this.onExitTransitionEnd,position:m,preventExitTransition:this.state.preventExitTransition},a.a.createElement("div",Object(o.a)({onClick:l},N,{ref:function(t){return e.ref=t},onMouseDown:this.onDragStart,onTouchStart:this.onDragStart,onMouseUp:this.onDragTransitionEnd,onTouchEnd:this.onDragTransitionEnd}),a.a.createElement("div",Object(o.a)({},this.props.in&&{role:O},{className:p()("Toastify__toast-body",y)}),i),s&&s,(r||j)&&a.a.createElement(H,Object(o.a)({},T&&!j?{key:"pb-"+T}:{},{rtl:C,delay:r,isRunning:this.state.isRunning,closeToast:h,hide:f,type:d,style:E,className:v,controlledProgress:j,progress:x}))))},e}(r.Component);function G(t){var e=t.closeToast,n=t.type,o=t.ariaLabel;return a.a.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":o},"\u2716\ufe0e")}W.propTypes={closeButton:l.a.oneOfType([l.a.node,l.a.bool]).isRequired,autoClose:B.isRequired,children:l.a.node.isRequired,closeToast:l.a.func.isRequired,position:l.a.oneOf(w(j)).isRequired,pauseOnHover:l.a.bool.isRequired,pauseOnFocusLoss:l.a.bool.isRequired,closeOnClick:l.a.bool.isRequired,transition:l.a.func.isRequired,rtl:l.a.bool.isRequired,hideProgressBar:l.a.bool.isRequired,draggable:l.a.bool.isRequired,draggablePercent:l.a.number.isRequired,in:l.a.bool,onExited:l.a.func,onOpen:l.a.func,onClose:l.a.func,type:l.a.oneOf(w(k)),className:l.a.oneOfType([l.a.string,l.a.object]),bodyClassName:l.a.oneOfType([l.a.string,l.a.object]),progressClassName:l.a.oneOfType([l.a.string,l.a.object]),progressStyle:l.a.object,progress:l.a.number,updateId:l.a.oneOfType([l.a.string,l.a.number]),ariaLabel:l.a.string,containerId:l.a.oneOfType([l.a.string,l.a.number]),role:l.a.string},W.defaultProps={type:k.DEFAULT,in:!0,onOpen:L,onClose:L,className:null,bodyClassName:null,progressClassName:null,updateId:null},G.propTypes={closeToast:l.a.func,arialLabel:l.a.string},G.defaultProps={ariaLabel:"close"};var Q=q({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),z=q({enter:"Toastify__slide-enter",exit:"Toastify__slide-exit",duration:[450,750],appendPosition:!0}),Y=q({enter:"Toastify__zoom-enter",exit:"Toastify__zoom-exit"}),J=q({enter:"Toastify__flip-enter",exit:"Toastify__flip-exit"}),K=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))||this).state={toast:[]},e.toastKey=1,e.collection={},e.isToastActive=function(t){return-1!==e.state.toast.indexOf(t)},e}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;A.cancelEmit(_).on(D,(function(e,n){return t.ref?t.buildToast(e,n):null})).on(R,(function(e){return t.ref?null==e?t.clear():t.removeToast(e):null})).emit(S,this)},n.componentWillUnmount=function(){A.emit(_,this)},n.removeToast=function(t){this.setState({toast:this.state.toast.filter((function(e){return e!==t}))},this.dispatchChange)},n.dispatchChange=function(){A.emit(P,this.state.toast.length,this.props.containerId)},n.makeCloseButton=function(t,e,n){var o=this,s=this.props.closeButton;return Object(r.isValidElement)(t)||!1===t?s=t:!0===t&&(s=this.props.closeButton&&"boolean"!==typeof this.props.closeButton?this.props.closeButton:a.a.createElement(G,null)),!1!==s&&Object(r.cloneElement)(s,{closeToast:function(){return o.removeToast(e)},type:n})},n.getAutoCloseDelay=function(t){return!1===t||I(t)?t:this.props.autoClose},n.canBeRendered=function(t){return Object(r.isValidElement)(t)||"string"===typeof t||"number"===typeof t||"function"===typeof t},n.parseClassName=function(t){return"string"===typeof t?t:null!==t&&"object"===typeof t&&"toString"in t?t.toString():null},n.belongToContainer=function(t){return t.containerId===this.props.containerId},n.buildToast=function(t,e){var n=this,o=e.delay,i=Object(s.a)(e,["delay"]);if(!this.canBeRendered(t))throw new Error("The element you provided cannot be rendered. You provided an element of type "+typeof t);var a=i.toastId,u=i.updateId;if(!(this.props.enableMultiContainer&&!this.belongToContainer(i)||this.isToastActive(a)&&null==u)){var l=function(){return n.removeToast(a)},c={id:a,key:i.key||this.toastKey++,type:i.type,closeToast:l,updateId:i.updateId,rtl:this.props.rtl,position:i.position||this.props.position,transition:i.transition||this.props.transition,className:this.parseClassName(i.className||this.props.toastClassName),bodyClassName:this.parseClassName(i.bodyClassName||this.props.bodyClassName),onClick:i.onClick||this.props.onClick,closeButton:this.makeCloseButton(i.closeButton,a,i.type),pauseOnHover:"boolean"===typeof i.pauseOnHover?i.pauseOnHover:this.props.pauseOnHover,pauseOnFocusLoss:"boolean"===typeof i.pauseOnFocusLoss?i.pauseOnFocusLoss:this.props.pauseOnFocusLoss,draggable:"boolean"===typeof i.draggable?i.draggable:this.props.draggable,draggablePercent:"number"!==typeof i.draggablePercent||isNaN(i.draggablePercent)?this.props.draggablePercent:i.draggablePercent,closeOnClick:"boolean"===typeof i.closeOnClick?i.closeOnClick:this.props.closeOnClick,progressClassName:this.parseClassName(i.progressClassName||this.props.progressClassName),progressStyle:this.props.progressStyle,autoClose:this.getAutoCloseDelay(i.autoClose),hideProgressBar:"boolean"===typeof i.hideProgressBar?i.hideProgressBar:this.props.hideProgressBar,progress:parseFloat(i.progress),role:"string"===typeof i.role?i.role:this.props.role};"function"===typeof i.onOpen&&(c.onOpen=i.onOpen),"function"===typeof i.onClose&&(c.onClose=i.onClose),Object(r.isValidElement)(t)&&"string"!==typeof t.type&&"number"!==typeof t.type?t=Object(r.cloneElement)(t,{closeToast:l}):"function"===typeof t&&(t=t({closeToast:l})),I(o)?setTimeout((function(){n.appendToast(c,t,i.staleToastId)}),o):this.appendToast(c,t,i.staleToastId)}},n.appendToast=function(t,e,n){var s,i=t.id,r=t.updateId;this.collection=Object(o.a)({},this.collection,((s={})[i]={options:t,content:e,position:t.position},s)),this.setState({toast:(r?[].concat(this.state.toast):[].concat(this.state.toast,[i])).filter((function(t){return t!==n}))},this.dispatchChange)},n.clear=function(){this.setState({toast:[]})},n.renderToast=function(){var t=this,e={},n=this.props,s=n.className,i=n.style;return(n.newestOnTop?Object.keys(this.collection).reverse():Object.keys(this.collection)).forEach((function(n){var s=t.collection[n],i=s.position,r=s.options,u=s.content;e[i]||(e[i]=[]),-1!==t.state.toast.indexOf(r.id)?e[i].push(a.a.createElement(W,Object(o.a)({},r,{isDocumentHidden:t.state.isDocumentHidden,key:"toast-"+r.key}),u)):(e[i].push(null),delete t.collection[n])})),Object.keys(e).map((function(n){var r,u=1===e[n].length&&null===e[n][0],l={className:p()("Toastify__toast-container","Toastify__toast-container--"+n,(r={},r["Toastify__toast-container--rtl"]=t.props.rtl,r),t.parseClassName(s)),style:u?Object(o.a)({},i,{pointerEvents:"none"}):Object(o.a)({},i)};return a.a.createElement(N,Object(o.a)({},l,{key:"container-"+n}),e[n])}))},n.render=function(){var t=this;return a.a.createElement("div",{ref:function(e){return t.ref=e},className:"Toastify"},this.renderToast())},e}(r.Component);K.propTypes={position:l.a.oneOf(w(j)),autoClose:B,closeButton:l.a.oneOfType([l.a.node,l.a.bool]),hideProgressBar:l.a.bool,pauseOnHover:l.a.bool,closeOnClick:l.a.bool,newestOnTop:l.a.bool,className:l.a.oneOfType([l.a.string,l.a.object]),style:l.a.object,toastClassName:l.a.oneOfType([l.a.string,l.a.object]),bodyClassName:l.a.oneOfType([l.a.string,l.a.object]),progressClassName:l.a.oneOfType([l.a.string,l.a.object]),progressStyle:l.a.object,transition:l.a.func,rtl:l.a.bool,draggable:l.a.bool,draggablePercent:l.a.number,pauseOnFocusLoss:l.a.bool,enableMultiContainer:l.a.bool,containerId:l.a.oneOfType([l.a.string,l.a.number]),role:l.a.string,onClick:l.a.func},K.defaultProps={position:j.TOP_RIGHT,transition:Q,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:a.a.createElement(G,null),pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,className:null,style:null,toastClassName:null,bodyClassName:null,progressClassName:null,progressStyle:null,role:"alert"};var Z=new Map,$=null,tt=null,et={},nt=[],ot=!1;function st(){return Z.size>0}function it(t,e){var n=function(t){return st()?t?Z.get(t):Z.get($):null}(e.containerId);if(!n)return null;var o=n.collection[t];return"undefined"===typeof o?null:o}function rt(t,e){return Object(o.a)({},t,{type:e,toastId:ut(t)})}function at(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function ut(t){return t&&("string"===typeof t.toastId||"number"===typeof t.toastId&&!isNaN(t.toastId))?t.toastId:at()}function lt(t,e){return st()?A.emit(D,t,e):(nt.push({action:D,content:t,options:e}),ot&&F&&(ot=!1,tt=document.createElement("div"),document.body.appendChild(tt),Object(d.render)(a.a.createElement(K,et),tt))),e.toastId}var ct=function(t,e){return lt(t,rt(e,e&&e.type||k.DEFAULT))},pt=function(t){k[t]!==k.DEFAULT&&(ct[k[t].toLowerCase()]=function(e,n){return lt(e,rt(n,n&&n.type||k[t]))})};for(var dt in k)pt(dt);ct.warn=ct.warning,ct.dismiss=function(t){return void 0===t&&(t=null),st()&&A.emit(R,t)},ct.isActive=function(t){var e=!1;return Z.size>0&&Z.forEach((function(n){n.isToastActive(t)&&(e=!0)})),e},ct.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=it(t,e);if(n){var s=n.options,i=n.content,r=Object(o.a)({},s,{},e,{toastId:e.toastId||t});e.toastId&&e.toastId!==t?r.staleToastId=t:r.updateId=at();var a="undefined"!==typeof r.render?r.render:i;delete r.render,lt(a,r)}}),0)},ct.done=function(t){ct.update(t,{progress:1})},ct.onChange=function(t){"function"===typeof t&&A.on(P,t)},ct.configure=function(t){ot=!0,et=t},ct.POSITION=j,ct.TYPE=k,A.on(S,(function(t){$=t.props.containerId||t,Z.set($,t),nt.forEach((function(t){A.emit(t.action,t.content,t.options)})),nt=[]})).on(_,(function(t){t?Z.delete(t.props.containerId||t):Z.clear(),0===Z.size&&A.off(D).off(R),F&&tt&&document.body.removeChild(tt)}))}}]);
//# sourceMappingURL=5.74193b1c.chunk.js.map