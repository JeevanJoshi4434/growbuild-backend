(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[68],{2100:function(e,t,n){"use strict";var o=n(2101).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},2101:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=c(n(0)),a=c(n(2102)),i=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return b(this,n)}}function b(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(l,e);var t,n,o,c=y(l);function l(){var e;p(this,l);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return v(m(e=c.call.apply(c,[this].concat(n))),"onClick",(function(t){var n=e.props,o=n.text,i=n.onCopy,c=n.children,l=n.options,s=r.default.Children.only(c),u=(0,a.default)(o,l);i&&i(o,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t)})),e}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,i),o=r.default.Children.only(t);return r.default.cloneElement(o,s(s({},n),{},{onClick:this.onClick}))}}])&&f(t.prototype,n),o&&f(t,o),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.default.PureComponent);t.CopyToClipboard=g,v(g,"defaultProps",{onCopy:void 0,options:void 0})},2102:function(e,t,n){"use strict";var o=n(2103),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},2103:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},2245:function(e,t,n){"use strict";n.r(t);var o=n(12),r=n(13),a=n(17),i=n(16),c=n(0),l=n.n(c),s=n(813),u=n(1164),p=n(1165),f=n(1166),d=n(1167),y=n(1168),b=n(1169),m=n(805),h=n(196),v=n(2100),g=n(852),O=(n(1063),n(943),function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={value:"Copy Me!",copied:!1},e.handleCopy=function(t){var n=t.target.value;e.setState({value:n,copied:!1})},e.onCopy=function(){e.setState({copied:!0}),g.f.success("Text Copied Successfully",{position:g.f.POSITION.TOP_CENTER,autoClose:2e3})},e}return Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:"React Copy To Clipboard",subTitle:"Copy to clipboard React component",link:"https://github.com/nkbt/react-copy-to-clipboard"}),l.a.createElement(u.a,null,l.a.createElement(p.a,{sm:"12"},l.a.createElement(f.a,null,l.a.createElement(d.a,null,l.a.createElement(y.a,null,"Clipboard")),l.a.createElement(b.a,null,l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"2",sm:"12",className:"pr-md-0 mb-1"},l.a.createElement(m.a,{value:this.state.value,onChange:this.handleCopy})),l.a.createElement(p.a,{md:"2",sm:"12",className:"mb-1"},l.a.createElement(v.CopyToClipboard,{onCopy:this.onCopy,text:this.state.value},l.a.createElement(h.a.Ripple,{color:"primary"},"Copy!")),l.a.createElement(g.d,null))))))))}}]),n}(l.a.Component));t.default=O},805:function(e,t,n){"use strict";var o=n(7),r=n(14),a=n(26),i=n(19),c=n(0),l=n.n(c),s=n(2),u=n.n(s),p=n(18),f=n.n(p),d=n(5),y=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(a.a)(n)),n.focus=n.focus.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.type,i=e.bsSize,c=e.valid,s=e.invalid,u=e.tag,p=e.addon,b=e.plaintext,m=e.innerRef,h=Object(r.a)(e,y),v=["radio","checkbox"].indexOf(a)>-1,g=new RegExp("\\D","g"),O=u||("select"===a||"textarea"===a?a:"input"),C="form-control";b?(C+="-plaintext",O=u||"input"):"file"===a?C+="-file":"range"===a?C+="-range":v&&(C=p?null:"form-check-input"),h.size&&g.test(h.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=h.size,delete h.size);var w=Object(d.mapToCssModules)(f()(t,s&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,C),n);return("input"===O||u&&"function"===typeof u)&&(h.type=a),h.children&&!b&&"select"!==a&&"string"===typeof O&&"select"!==O&&(Object(d.warnOnce)('Input with a type of "'+a+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(O,Object(o.a)({},h,{ref:m,className:w,"aria-invalid":s}))},t}(l.a.Component);m.propTypes=b,m.defaultProps={type:"text"},t.a=m},813:function(e,t,n){"use strict";var o=n(12),r=n(13),a=n(17),i=n(16),c=n(0),l=n.n(c),s=n(1164),u=n(1165),p=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement(s.a,{className:"mb-2"},l.a.createElement(u.a,{sm:"12",className:"ml-50"},l.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?l.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):l.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),n}(l.a.Component);t.a=p},943:function(e,t,n){}}]);
//# sourceMappingURL=68.c9eb805e.chunk.js.map