(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{224:function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function i(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,a=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==a){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",function(){return s}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},553:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),i=l(r),s=l(n(6)),a=l(n(750));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.detectFullScreen=n.detectFullScreen.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){a.default.addEventListener("fullscreenchange",this.detectFullScreen)}},{key:"componentWillUnmount",value:function(){a.default.removeEventListener("fullscreenchange",this.detectFullScreen)}},{key:"componentDidUpdate",value:function(){this.handleProps(this.props)}},{key:"handleProps",value:function(e){var t=a.default.fullscreenElement===this.node;t&&!e.enabled?this.leaveFullScreen():!t&&e.enabled&&this.enterFullScreen()}},{key:"detectFullScreen",value:function(){this.props.onChange&&this.props.onChange(a.default.fullscreenElement===this.node)}},{key:"enterFullScreen",value:function(){a.default.fullscreenEnabled&&a.default.requestFullscreen(this.node)}},{key:"leaveFullScreen",value:function(){a.default.fullscreenEnabled&&a.default.exitFullscreen()}},{key:"render",value:function(){var e=this,t=["fullscreen"];return this.props.enabled&&t.push("fullscreen-enabled"),i.default.createElement("div",{className:t.join(" "),ref:function(t){return e.node=t},style:this.props.enabled?{height:"100%",width:"100%"}:void 0},this.props.children)}}]),t}();c.propTypes={children:s.default.node.isRequired,enabled:s.default.bool.isRequired,onChange:s.default.func},c.defaultProps={enabled:!1},t.default=c},686:function(e,t,n){"use strict";n.r(t),n.d(t,"Modal",function(){return se}),n.d(t,"ModalGateway",function(){return me}),n.d(t,"carouselComponents",function(){return X}),n.d(t,"modalComponents",function(){return Z});var o=n(1),r=n.n(o),i=n(76),s=n(8),a=n.n(s),l=n(559),c=n(222),u=n(552),p=n.n(u),d=n(768),f=n(553),h=n.n(f),m=n(522),v=n.n(m),g=n(511),y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),F=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},P=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},x=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},C=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},k=function(e){var t=e.css,n=e.innerRef,o=e.tag,r=x(e,["css","innerRef","tag"]);return a()(o,w({ref:n,css:w({boxSizing:"border-box"},t)},r))},S=function(e){return a()(k,w({tag:"button"},e))},E=function(e){return a()(k,w({tag:"div"},e))},_=function(e){return a()(k,w({tag:"img"},e))},I=function(e){return a()(k,w({tag:"nav"},e))},M=function(e){return a()(k,w({tag:"span"},e))},N="react-images";function O(e,t){var n=Array.isArray(e)?e:[e];if(t&&"string"==typeof e)for(var o in t)t.hasOwnProperty(o)&&t[o]&&n.push(e+"--"+o);return n.map(function(e){return N+"__"+e}).join(" ")}function z(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}var D={Header:"header",Footer:"footer",View:"view",Track:"track",Positioner:"positioner"},j=D.Footer,T=function(e){var t=e.size,n=x(e,["size"]);return a()("svg",w({role:"presentation",viewBox:"0 0 24 24",css:{display:"inline-block",fill:"currentColor",height:t,stroke:"currentColor",strokeWidth:0,width:t}},n))},U=function(e){var t=e.size,n=void 0===t?32:t,o=x(e,["size"]);return a()(T,w({size:n},o),a()("path",{d:"M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"}))},W=function(e){var t=e.size,n=void 0===t?32:t,o=x(e,["size"]);return a()(T,w({size:n},o),a()("path",{d:"M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z"}))},V=function(e){var t=e.size,n=void 0===t?32:t,o=x(e,["size"]);return a()(T,w({size:n},o),a()("path",{d:"M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"}))},L=function(e){var t=e.size,n=void 0===t?32:t,o=x(e,["size"]);return a()(T,w({size:n},o),a()("path",{d:"M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"}))},A=function(e){var t=e.size,n=void 0===t?32:t,o=x(e,["size"]);return a()(T,w({size:n},o),a()("path",{d:"M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"}))},B=D.Header,R=function(){return{alignItems:"center",background:0,border:0,color:"rgba(255, 255, 255, 0.75)",cursor:"pointer",display:"inline-flex ",height:44,justifyContent:"center",outline:0,padding:0,position:"relative",width:44,"&:hover":{color:"white"}}},H=R,q=R,K=function(e){var t,n=e.align;return F(t={alignItems:"center",background:"rgba(255, 255, 255, 0.2)",border:0,borderRadius:"50%",color:"white",cursor:"pointer",display:"flex ",fontSize:"inherit",height:50,justifyContent:"center",marginTop:-25,outline:0,position:"absolute",top:"50%",transition:"background-color 200ms",width:50},n,20),F(t,"&:hover",{background:"rgba(255, 255, 255, 0.3)"}),F(t,"&:active",{background:"rgba(255, 255, 255, 0.2)"}),t},G=K,J=K;function Y(e){var t=e.data,n=e.isFullscreen,o=t.source,r=void 0===o?t.src:o;return"string"==typeof r?r:n?r.fullscreen:r.regular}var Q=D.View,X={Container:function(e){var t=e.children,n=e.getStyles,o=e.isFullscreen,r=e.isModal,i=e.innerProps;return a()(E,w({css:n("container",e),className:O("container",{isFullscreen:o,isModal:r})},i),t)},Footer:function(e){var t=e.components,n=e.getStyles,o=e.innerProps,r=e.isFullscreen,i=e.isModal,s=i?{background:"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.33))"}:null,l={isFullscreen:r,isModal:i},c={container:O(j,l),caption:O("footer__caption",l),count:O("footer__count",l)},u={container:n(j,e),caption:n("footerCaption",e),count:n("footerCount",e)},p=t.Caption,d=t.Count;return a()(E,w({css:u.container,className:c.container,style:s},o),a()(p,e),a()(d,e))},FooterCaption:function(e){var t=e.currentView,n=e.getStyles,o=e.isFullscreen,r=e.isModal,i=t.caption,s={isFullscreen:o,isModal:r};return a()(M,{css:n("footerCaption",e),className:O("footer__caption",s)},"string"==typeof i?p()("<span>"+i+"</span>"):i)},FooterCount:function(e){var t=e.currentIndex,n=e.getStyles,o={isFullscreen:e.isFullscreen,isModal:e.isModal},r=t+1,i=e.views.length;return r&&i?a()(M,{css:n("footerCount",e),className:O("footer__count",o)},r," of ",i):null},Header:function(e){var t=e.components,n=e.getStyles,o=e.getCloseLabel,r=e.getFullscreenLabel,i=e.innerProps,s=e.isModal,l=e.modalProps;if(!s)return null;var c=l.allowFullscreen,u=l.isFullscreen,p=l.onClose,d=l.toggleFullscreen,f=u?A:L,h=t.CloseButton,m=t.FullscreenButton,v={isFullscreen:u,isModal:s};return a()(E,w({css:n(B,e),className:O(B,v),style:{background:"linear-gradient(rgba(0,0,0,0.33), rgba(0,0,0,0))"}},i),a()("span",null),a()("span",null,c?a()(m,{getStyles:n,innerProps:{onClick:d,title:r(v)}},a()(f,{size:32})):null,a()(h,{getStyles:n,innerProps:{onClick:p,title:o(v)}},a()(V,{size:32}))))},HeaderClose:function(e){var t=e.children,n=e.getStyles,o=e.innerProps;return a()(S,w({css:n("headerClose",e),className:O(["header_button","header_button--close"]),type:"button"},o),t)},HeaderFullscreen:function(e){var t=e.children,n=e.getStyles,o=e.innerProps;return a()(S,w({css:n("headerFullscreen",e),className:O(["header_button","header_button--fullscreen"]),type:"button"},o),t)},Navigation:function(e){var t=e.children,n=e.getStyles,o=e.isFullscreen,r=e.isModal,i=e.showNavigationOnTouchDevice;return!z()||z()&&i?a()(I,{css:n("navigation",e),className:O("navigation",{isFullscreen:o,isModal:r})},t):null},NavigationPrev:function(e){var t=e.children,n=void 0===t?a()(U,{size:48}):t,o=e.getStyles,r=e.innerProps;return a()(S,w({type:"button",css:o("navigationPrev",e)},r),n)},NavigationNext:function(e){var t=e.children,n=void 0===t?a()(W,{size:48}):t,o=e.getStyles,r=e.innerProps;return a()(S,w({type:"button",css:o("navigationNext",e)},r),n)},View:function(e){var t=e.data,n=e.formatters,o=e.getStyles,r=e.index,i=e.isFullscreen,s=e.isModal,l={alt:n.getAltText({data:t,index:r}),src:Y({data:t,isFullscreen:i})};return a()(E,{css:o(Q,e),className:O(Q,{isFullscreen:i,isModal:s})},a()(_,w({},l,{className:O("view-image",{isFullscreen:i,isModal:s}),css:{height:"auto",maxHeight:"100%",maxWidth:"100%",userSelect:"none",margin:"auto"}})))}},Z={Blanket:function(e){var t=e.getStyles,n=e.innerProps,o=e.isFullscreen;return a()(E,w({css:t("blanket",e),className:O("blanket",{isFullscreen:o})},n))},Positioner:function(e){var t=e.children,n=e.getStyles,o=e.innerProps,r=e.isFullscreen;return a()(E,w({css:n(D.Positioner,e),className:O(D.Positioner,{isFullscreen:r})},o),t)},Dialog:function(e){var t=e.children,n=e.getStyles,o=e.innerProps,r=e.isFullscreen;return e.removeFocusOn?a()(E,w({css:n("dialog",e),className:O("dialog",{isFullscreen:r})},o),t):a()(d.a,null,a()(E,w({css:n("dialog",e),className:O("dialog",{isFullscreen:r})},o),t))}},$={container:function(e){return{backgroundColor:e.isFullscreen?"black":null,display:"flex ",flexDirection:"column",height:"100%"}},footer:function(e){var t=e.isModal,n=e.interactionIsIdle;return F({alignItems:"top",bottom:t?0:null,color:t?"rgba(255, 255, 255, 0.9)":"#666",display:"flex ",flex:"0 0 auto",fontSize:13,justifyContent:"space-between",left:t?0:null,opacity:n&&t?0:1,padding:t?"30px 20px 20px":"10px 0",position:t?"absolute":null,right:t?0:null,transform:t?"translateY("+(n?10:0)+"px)":null,transition:"opacity 300ms, transform 300ms",zIndex:t?1:null,"& *:focus":{outline:"1.5px solid orange"}},"@media (max-width: 769px)",{padding:t?"20px 15px 15px":"5px 0"})},footerCaption:function(){return{}},footerCount:function(){return{flexShrink:0,marginLeft:"1em"}},header:function(e){var t=e.interactionIsIdle;return{alignItems:"center",display:"flex ",flex:"0 0 auto",justifyContent:"space-between",opacity:t?0:1,padding:10,paddingBottom:20,position:"absolute",transform:"translateY("+(t?-10:0)+"px)",transition:"opacity 300ms, transform 300ms",top:0,left:0,right:0,zIndex:1,"& *:focus":{outline:"1.5px solid orange"}}},headerClose:q,headerFullscreen:H,navigation:function(e){return{display:"flex ",alignItems:"center",justifyContent:"space-between",opacity:e.interactionIsIdle?0:1,transition:"opacity 300ms","& *:focus":{outline:"1.5px solid orange"}}},navigationPrev:G,navigationNext:J,view:function(){return{lineHeight:0,position:"relative",textAlign:"center"}}},ee={blanket:function(e){return{backgroundColor:e.isFullscreen?"black":"rgba(0, 0, 0, 0.8)",bottom:0,left:0,position:"fixed",right:0,top:0,zIndex:1199}},dialog:function(){return{width:"100%"}},positioner:function(){return{alignItems:"center",bottom:0,display:"flex ",justifyContent:"center",left:0,position:"fixed",right:0,top:0,zIndex:1200}}},te="cubic-bezier(0.23, 1, 0.32, 1)",ne=function(e){var t=e.component,n=e.onEntered,o=e.onExited,i=e.in,s=e.innerProps,a=x(e,["component","onEntered","onExited","in","innerProps"]),l={transition:"opacity 200ms",opacity:0},c={entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0,transitionDuration:"500ms"}};return r.a.createElement(g.Transition,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEntered:n,onExited:o,key:"fade",in:i,timeout:{enter:300,exit:500}},function(e){var n=w({},s,{style:w({},l,c[e])});return"exited"===e?null:r.a.createElement(t,w({innerProps:n},a))})},oe=function(e){var t=e.component,n=e.onEntered,o=e.onExited,i=e.in,s=e.innerProps,a=x(e,["component","onEntered","onExited","in","innerProps"]),l={transition:"transform 300ms "+te+", opacity 300ms "+te,transform:"translate3d(0, 0, 0)"},c={entering:{opacity:0,transform:"translate3d(0, 40px, 0) scale(0.9)"},entered:{opacity:1,transform:"translate3d(0, 0, 0)"},exiting:{opacity:0,transform:"translate3d(0, 40px, 0) scale(0.9)",transition:"transform 500ms "+te+", opacity 500ms "+te}};return r.a.createElement(g.Transition,{appear:!0,in:i,mountOnEnter:!0,onEntered:n,onExited:o,timeout:{enter:300,exit:500},unmountOnExit:!0},function(e){if("exited"===e)return null;var n=w({},s,{style:w({},l,c[e])});return r.a.createElement(t,w({innerProps:n},a))})},re={allowFullscreen:!z(),closeOnBackdropClick:!0,closeOnEsc:!0,preventScroll:!0,styles:{}},ie=new Set([D.View,D.Header,D.Footer,D.Track,D.Positioner].map(O)),se=function(e){function t(e){y(this,t);var n=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return ae.call(n),n.cacheComponents(e.components),n.state={isFullscreen:!1,isClosing:!1},n}return P(t,e),b(t,[{key:"componentDidUpdate",value:function(e){e.components!==this.props.components&&this.cacheComponents(e.components)}},{key:"getCommonProps",value:function(){var e=this.state.isFullscreen;return{getStyles:this.getStyles,isFullscreen:e,modalProps:this.props}}},{key:"render",value:function(){var e=this.components,t=e.Blanket,n=e.Positioner,r=e.Dialog,i=this.props,s=i.allowFullscreen,l=i.children,c=this.state.isFullscreen,u=this.commonProps=this.getCommonProps(),p=this.props.in,d={allowFullscreen:s,isFullscreen:c,onClose:this.handleClose,preventScroll:this.preventScroll,toggleFullscreen:this.toggleFullscreen},f=Object(o.cloneElement)(l,{isModal:!0,modalProps:d});return a()(h.a,{enabled:c,onChange:this.handleFullscreenChange},a()(ne,w({},u,{component:t,in:p})),a()(oe,w({},u,{component:n,in:p,innerProps:{onClick:this.state.isClosing?null:this.handleBackdropClick},onEntered:this.modalDidMount,onExited:this.modalWillUnmount}),a()(r,w({removeFocusOn:this.state.isClosing},u),f)))}}]),t}(o.Component);se.defaultProps=re;var ae=function(){var e=this;this.modalDidMount=function(){document.addEventListener("keyup",e.handleKeyUp),v.a.storeFocus()},this.modalWillUnmount=function(){document.removeEventListener("keyup",e.handleKeyUp),v.a.restoreFocus(),e.setState({isClosing:!1})},this.cacheComponents=function(t){e.components=w({},Z,t)},this.handleFullscreenChange=function(t){e.setState({isFullscreen:t})},this.handleKeyUp=function(t){var n=e.props,o=n.allowFullscreen,r=n.closeOnEsc,i=e.state.isFullscreen,s="Escape"===t.key&&r&&!i;o&&"f"===t.key&&e.toggleFullscreen(),s&&e.handleClose(t)},this.handleBackdropClick=function(t){var n=!1,o=!0,r=!1,i=void 0;try{for(var s,a=t.target.classList[Symbol.iterator]();!(o=(s=a.next()).done);o=!0){var l=s.value;ie.has(l)&&(n=!0)}}catch(e){r=!0,i=e}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}n&&e.props.closeOnBackdropClick&&e.handleClose(t)},this.toggleFullscreen=function(){e.setState(function(e){return{isFullscreen:!e.isFullscreen}})},this.handleClose=function(t){var n=e.props.onClose,o=e.state.isFullscreen;e.setState({isClosing:!0}),o&&e.toggleFullscreen(),n(t)},this.getStyles=function(t,n){var o=ee[t](n);o.boxSizing="border-box";var r=e.props.styles[t];return r?r(o,n):o}};var le={flex:"1 1 auto",position:"relative"},ce={outline:0},ue={currentIndex:0,formatters:{getAltText:function(e){var t=e.data,n=e.index;return t.caption?t.caption:"Image "+(n+1)},getNextLabel:function(e){return"Show slide "+(e.currentIndex+2)+" of "+e.views.length},getPrevLabel:function(e){return"Show slide "+e.currentIndex+" of "+e.views.length},getNextTitle:function(e){return"Next (right arrow)"},getPrevTitle:function(e){return"Previous (left arrow)"},getCloseLabel:function(e){return"Close (esc)"},getFullscreenLabel:function(e){return e.isFullscreen?"Exit fullscreen (f)":"Enter fullscreen (f)"}},hideControlsWhenIdle:3e3,showNavigationOnTouchDevice:!1,styles:{},trackProps:{instant:!z(),swipe:"touch"}},pe=D.Track,de=function(e){function t(e){y(this,t);var n=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return fe.call(n),n.cacheComponents(e.components),n.state={currentIndex:e.currentIndex,interactionIsIdle:z()},n}return P(t,e),b(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.hideControlsWhenIdle,n=e.modalProps,o=Boolean(n);this.mounted=!0,t&&this.container&&(this.container.addEventListener("mousedown",this.handleMouseActivity),this.container.addEventListener("mousemove",this.handleMouseActivity),this.container.addEventListener("touchmove",this.handleMouseActivity)),o&&this.focusViewFrame()}},{key:"componentDidUpdate",value:function(e){e.components!==this.props.components&&this.cacheComponents(e.components),this.props.currentIndex!==e.currentIndex&&this.setState({currentIndex:this.props.currentIndex})}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.props.hideControlsWhenIdle&&this.container&&(this.container.removeEventListener("mousedown",this.handleMouseActivity),this.container.removeEventListener("mousemove",this.handleMouseActivity),this.container.removeEventListener("touchmove",this.handleMouseActivity),this.handleMouseActivity.cancel())}},{key:"getCommonProps",value:function(){var e=this.props,t=e.frameProps,n=e.trackProps,o=e.modalProps,r=e.views,i=e.showNavigationOnTouchDevice,s=Boolean(o),a=Boolean(o&&o.isFullscreen),l=this.state,c=l.currentIndex,u=l.interactionIsIdle,p=this.getViewData();return{carouselProps:this.props,currentIndex:c,currentView:p,formatters:this.props.formatters,frameProps:t,getStyles:this.getStyles,showNavigationOnTouchDevice:i,isFullscreen:a,isModal:s,modalProps:o,interactionIsIdle:u,trackProps:n,views:r}}},{key:"render",value:function(){var e=this.components,t=e.Container,n=e.View,o=this.state.currentIndex,r=this.props,i=r.frameProps,s=r.views,l=this.commonProps=this.getCommonProps();return a()(t,w({},l,{innerProps:{innerRef:this.getContainer}}),this.renderHeader(),a()(c.ViewPager,{tag:"main",style:le,className:O("pager")},a()(c.Frame,w({},i,{ref:this.getFrame,className:O("frame"),style:ce,tabIndex:"-1"}),a()(c.Track,w({},this.getTrackProps(this.props),{style:{display:"flex",alignItems:"center"},currentView:o,className:O(pe),onViewChange:this.handleViewChange,ref:this.getTrack}),s&&s.map(function(e,t){return a()(c.View,{className:O("view-wrapper"),key:t},a()(n,w({},l,{data:e,index:t})))}))),this.renderNavigation()),this.renderFooter())}}]),t}(o.Component);de.defaultProps=ue;var fe=function(){var e=this;this.mounted=!1,this.cacheComponents=function(t){e.components=w({},X,t)},this.getContainer=function(t){e.container=t},this.getFooter=function(t){e.footer=t},this.getFrame=function(t){e.frame=Object(i.findDOMNode)(t)},this.getHeader=function(t){e.header=t},this.getTrack=function(t){e.track=t},this.hasPreviousView=function(){var t=e.props.trackProps,n=e.state.currentIndex;return t.infinite||0!==n},this.hasNextView=function(){var t=e.props,n=t.trackProps,o=t.views,r=e.state.currentIndex;return n.infinite||r!==o.length-1},this.getStyles=function(t,n){var o=$[t](n);o.boxSizing="border-box";var r=e.props.styles[t];return r?r(o,n):o},this.getTrackProps=function(e){return w({},ue.trackProps,e.trackProps)},this.getFormatters=function(){return w({},ue.formatters,e.props.formatters)},this.getViewData=function(){return e.props.views[e.state.currentIndex]},this.focusViewFrame=function(){e.frame&&document.activeElement!==e.frame&&e.frame.focus()},this.prev=function(t){t.stopPropagation(),e.track.prev(),e.focusViewFrame()},this.next=function(t){t.stopPropagation(),e.track.next(),e.focusViewFrame()},this.handleMouseActivity=Object(l.a)(function(){clearTimeout(e.timer),e.state.interactionIsIdle&&e.setState({interactionIsIdle:!1}),e.timer=setTimeout(function(){e.mounted&&e.setState({interactionIsIdle:!0})},e.props.hideControlsWhenIdle)}),this.handleViewChange=function(t){var n=e.props.trackProps,o=t[0];e.setState({currentIndex:o}),n&&n.onViewChange&&n.onViewChange(o)},this.renderNavigation=function(){var t=e.getFormatters(),n=t.getNextLabel,o=t.getPrevLabel,r=t.getNextTitle,i=t.getPrevTitle,s=e.components,l=s.Navigation,c=s.NavigationPrev,u=s.NavigationNext,p=e.commonProps,d=e.hasPreviousView(),f=e.hasNextView();return(d||f)&&l?a()(l,p,d&&a()(c,w({},p,{align:"left",innerProps:{"aria-label":o(p),onClick:e.prev,title:i(p)}})),f&&a()(u,w({},p,{align:"right",innerProps:{"aria-label":n(p),onClick:e.next,title:r(p)}}))):null},this.renderFooter=function(){var t=e.components,n=t.Footer,o=t.FooterCaption,r=t.FooterCount,i=e.commonProps;return n?a()(n,w({},i,{components:{Caption:o,Count:r},innerProps:{innerRef:e.getFooter}})):null},this.renderHeader=function(){var t=e.components,n=t.Header,o=t.HeaderClose,r=t.HeaderFullscreen,i=e.getFormatters(),s=i.getCloseLabel,l=i.getFullscreenLabel,c=e.commonProps;return n?a()(n,w({},c,{getCloseLabel:s,getFullscreenLabel:l,components:{CloseButton:o,FullscreenButton:r},data:e.getViewData(),innerProps:{innerRef:e.getHeader}})):null}},he=function(e){var t=e.children;return o.Children.toArray(t)[0]||null},me=function(e){function t(){return y(this,t),C(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return P(t,e),b(t,[{key:"render",value:function(){if("undefined"==typeof window)return null;var e=this.props,t=e.target,n=e.children;return Object(i.createPortal)(r.a.createElement(g.TransitionGroup,{component:he,children:n}),t)}}]),t}(o.Component);me.defaultProps={target:"undefined"!=typeof window?document.body:null},t.default=de}}]);