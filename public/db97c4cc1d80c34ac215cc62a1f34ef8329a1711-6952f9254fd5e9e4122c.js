(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"38zG":function(e,t,n){},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("ma3e"),c=n("CRv7"),l=n.n(c);var u=function(e){e.siteTitle;var t=e.location,n=Object(r.useState)(!0),c=n[0],u=n[1],s=Object(r.useState)(!0),f=s[0],d=s[1],p=Object(r.useState)(!1),m=p[0],h=p[1],y=Object(r.useState)(!1),b=y[0],g=y[1],v=Object(r.useState)(!1),T=v[0],w=v[1],E=function(){var e="undefined"==typeof window,t=Object(r.useState)({width:e?1200:window.innerWidth,height:e?800:window.innerHeight}),n=t[0],a=t[1];function o(){a({width:window.innerWidth,height:window.innerHeight})}return Object(r.useEffect)((function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[]),n}().width;Object(r.useEffect)((function(){E>1024&&T?(w(!1),g(!1),u(!0),d(!0),h(!1),document.getElementsByTagName("html")[0].style.overflow=""):E<=1024&&!T&&w(!0)}),[E]);var O=function(e){t.pathname!==e||f&&!m?t.pathname===e||f&&!m||(document.getElementsByTagName("html")[0].style.overflow=""):(g(!1),u(!0),d(!0),h(!1),document.getElementsByTagName("html")[0].style.overflow="")},C=function(){m||(c&&(document.getElementsByTagName("html")[0].style.overflow="hidden"),u(!c),h(!0),b||g(!0))};return a.a.createElement("nav",{className:[!f&&l.a.menuCollapseIncomplete,c?l.a.collapseMenu:l.a.expandMenu].join(" ")},a.a.createElement("ul",{className:l.a.home_and_toggle},a.a.createElement("li",{className:l.a.logo},a.a.createElement(o.Link,{to:"/",onClick:function(){return O("/")}},"Jay@Machine")),a.a.createElement("li",null,a.a.createElement(i.a,{className:[l.a.bars,b?l.a.enableTransition:l.a.disableTransition].join(" "),onClick:C}),a.a.createElement(i.f,{className:[l.a.times,b?l.a.enableTransition:l.a.disableTransition].join(" "),onClick:C}))),a.a.createElement("ul",{className:[l.a.pages,b?l.a.enableTransition:l.a.disableTransition].join(" "),onTransitionEnd:function(e){"transform"===e.propertyName&&(d(!f),h(!1),c&&(document.getElementsByTagName("html")[0].style.overflow=""))}},a.a.createElement("li",{className:l.a.addPaddingRight},a.a.createElement(o.Link,{to:"/blog",onClick:function(){return O("/blog")}},"Blog")),a.a.createElement("li",{className:l.a.addPaddingRight},a.a.createElement(o.Link,{to:"/blog"},"Topics")),a.a.createElement("li",{className:l.a.addPaddingRight},a.a.createElement(o.Link,{to:"/about"},"Contact")),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/services"},"Donate"))),a.a.createElement("ul",{className:[l.a.social,b?l.a.enableTransition:l.a.disableTransition].join(" ")},a.a.createElement("li",null,a.a.createElement("a",{href:"#"},a.a.createElement(i.g,{style:{color:"#FF0000"}}))),a.a.createElement("li",null,a.a.createElement("a",{href:"#"},a.a.createElement(i.b,{style:{color:"#7289da"}}))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/jchiarulli"},a.a.createElement(i.c,{style:{color:"#fafafa"}}))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.linkedin.com/in/jason-chiarulli-321358143/"},a.a.createElement(i.d,{style:{color:"#2867B2"}}))),a.a.createElement("li",null,a.a.createElement("a",{href:"#"},a.a.createElement(i.e,{style:{color:"#f96854"}})))))};u.defaultProps={siteTitle:""};var s=u;n("38zG"),t.a=function(e){var t=e.children,n=e.location,r=Object(o.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,{siteTitle:r.site.siteMetadata.title,location:n}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},a.a.createElement("main",null,t),a.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},CRv7:function(e,t,n){e.exports={home_and_toggle:"navbar-module--home_and_toggle--13QnJ",pages:"navbar-module--pages--hs8Tc",social:"navbar-module--social--con8s",menuCollapseIncomplete:"navbar-module--menuCollapseIncomplete--LIHL0",enableTransition:"navbar-module--enableTransition--2fBJV",disableTransition:"navbar-module--disableTransition--1FnUn",collapseMenu:"navbar-module--collapseMenu--26Yb6",times:"navbar-module--times--jbwAE",expandMenu:"navbar-module--expandMenu--K5n3p",bars:"navbar-module--bars--gb6nK",addPaddingRight:"navbar-module--addPaddingRight--CU5eX"}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function l(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,l=e.title,u=c(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],i[u[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,a,o,i,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),f=n("ZhWT"),d=n.n(f),p=n("q1tI"),m=n.n(p),h=n("6qGY"),y=n.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",O="href",C="http-equiv",A="innerHTML",S="itemprop",j="name",k="property",P="rel",L="src",x="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",R="encodeSpecialCharacters",B="onChangeClientState",_="titleTemplate",q=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),z=[T.NOSCRIPT,T.SCRIPT,T.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,T.TITLE),n=$(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,I);return t||r||void 0},G=function(e){return $(e,B)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===P&&"canonical"===e[n].toLowerCase()||l===P&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==A&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;le(T.BODY,r),le(T.HTML,a),ce(f,d);var p={baseTag:ue(T.BASE,n),linkTags:ue(T.LINK,o),metaTags:ue(T.META,i),noscriptTags:ue(T.NOSCRIPT,c),scriptTags:ue(T.SCRIPT,u),styleTags:ue(T.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(T.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===A||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(T.BASE,t,r),bodyAttributes:de(b,n,r),htmlAttributes:de(g,a,r),link:de(T.LINK,o,r),meta:de(T.META,i,r),noscript:de(T.NOSCRIPT,c,r),script:de(T.SCRIPT,l,r),style:de(T.STYLE,u,r),title:de(T.TITLE,{title:f,titleAttributes:d},r)}},me=s()((function(e){return{baseTag:Q([O,x],e),bodyAttributes:V(b,e),defer:$(e,M),encode:$(e,R),htmlAttributes:V(g,e),linkTags:Z(T.LINK,[P,O],e),metaTags:Z(T.META,[j,w,C,k,S],e),noscriptTags:Z(T.NOSCRIPT,[A],e),onChangeClientState:G(e),scriptTags:Z(T.SCRIPT,[L,A],e),styleTags:Z(T.STYLE,[E],e),title:J(e),titleAttributes:V(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=me,i=o=function(e){function t(){return H(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return Y({},a,((t={})[r.type]=i,t.titleAttributes=Y({},o),t));case T.BODY:return Y({},a,{bodyAttributes:Y({},o)});case T.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(U(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function c(e){var t=e.description,n=e.lang,r=e.meta,c=e.title,l=Object(i.useStaticQuery)("63159454").site,u=t||l.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=db97c4cc1d80c34ac215cc62a1f34ef8329a1711-6952f9254fd5e9e4122c.js.map