(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(292)}])},3976:function(e,n,t){"use strict";t.d(n,{co:function(){return a},YA:function(){return r},TU:function(){return s},PE:function(){return i},BE:function(){return o},n:function(){return l},CM:function(){return u}});var a="https://docs.openbrush.io/",r="https://www.crowdcast.io/e/substrate-seminar-2/10",s="https://github.com/Supercolony-net/openbrush-contracts",i="https://twitter.com/supercolony_vs",o="https://www.linkedin.com/company/super-colony/",l=[{label:"Element",link:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org"},{label:"Telegram",link:"https://t.me/openbrush"},{label:"Discord",link:"https://discord.com/channels/933724833630531585/933725040434892940"}],u=[{label:"Docs",link:a},{label:"GitHub",link:s,newTab:!0},{label:"OpenBrush Family",link:"https://openbrush.io/#obFam",newTab:!0}]},8418:function(e,n,t){"use strict";function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,r=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(l){r=!0,s=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw s}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var r,s=(r=t(7294))&&r.__esModule?r:{default:r},i=t(6273),o=t(387),l=t(7190);var u={};function c(e,n,t,a){if(e&&i.isLocalURL(n)){e.prefetch(n,t,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;u[n+"%"+t+(r?"%"+r:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=o.useRouter(),d=s.default.useMemo((function(){var n=a(i.resolveHref(r,e.href,!0),2),t=n[0],s=n[1];return{href:t,as:e.as?i.resolveHref(r,e.as):s||t}}),[r,e.href,e.as]),g=d.href,p=d.as,f=e.children,h=e.replace,m=e.shallow,b=e.scroll,v=e.locale;"string"===typeof f&&(f=s.default.createElement("a",null,f));var y=(n=s.default.Children.only(f))&&"object"===typeof n&&n.ref,k=a(l.useIntersection({rootMargin:"200px"}),2),x=k[0],_=k[1],w=s.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);s.default.useEffect((function(){var e=_&&t&&i.isLocalURL(g),n="undefined"!==typeof v?v:r&&r.locale,a=u[g+"%"+p+(n?"%"+n:"")];e&&!a&&c(r,g,p,{locale:n})}),[p,g,_,v,t,r]);var F={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,a,r,s,o,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==o&&a.indexOf("#")>=0&&(o=!1),n[r?"replace":"push"](t,a,{shallow:s,locale:l,scroll:o}))}(e,r,g,p,h,m,b,v)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(g)&&c(r,g,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var A="undefined"!==typeof v?v:r&&r.locale,j=r&&r.isLocaleDomain&&i.getDomainLocale(p,A,r&&r.locales,r&&r.domainLocales);F.href=j||i.addBasePath(i.addLocale(p,A,r&&r.defaultLocale))}return s.default.cloneElement(n,F)};n.default=d},7190:function(e,n,t){"use strict";function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,r=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(l){r=!0,s=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw s}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=r.useRef(),u=a(r.useState(!1),2),c=u[0],d=u[1],g=r.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||c||e&&e.tagName&&(l.current=function(e,n,t){var a=function(e){var n=e.rootMargin||"",t=o.get(n);if(t)return t;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(n,t={id:n,observer:r,elements:a}),t}(t),r=a.id,s=a.observer,i=a.elements;return i.set(e,n),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),o.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,c]);return r.useEffect((function(){if(!i&&!c){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[c]),[g,c]};var r=t(7294),s=t(9311),i="undefined"!==typeof IntersectionObserver;var o=new Map},292:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var a=t(5893),r=t(2736),s=t.n(r),i=t(1664),o=t(7100),l=t.n(o),u=t(7294),c=function(e){var n=e.nav,t=(0,u.useState)(!1),r=t[0],s=t[1];return(0,a.jsxs)("div",{className:l().BurgerMenuContainer,children:[(0,a.jsxs)("div",{className:"".concat(l().burgerMenu," ").concat(r?l().opened:""),onClick:function(){return s(!r)},children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]}),(0,a.jsx)("div",{className:"".concat(l().MenuWrapper," wrapper ").concat(r?l().opened:""),children:(0,a.jsx)("div",{className:l().Menu,children:(0,a.jsx)("nav",{className:l().Nav,children:(0,a.jsx)("ul",{className:l().headerNavList,children:n&&n.map((function(e,n){return(0,a.jsx)("li",{onClick:function(){return s(!1)},children:(0,a.jsx)(i.default,{href:e.link,children:(0,a.jsx)("a",{className:"commonText",children:e.label})})},n)}))})})})})]})},d=t(3976),g=function(e){var n=e.nav;return(0,a.jsx)("header",{className:"".concat(s().header," header"),children:(0,a.jsxs)("div",{className:s().headerContainer,children:[(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("div",{className:s().logoContainer,children:(0,a.jsx)("img",{src:"/icons/logo.svg",alt:"openbrush logo"})})})}),(0,a.jsx)("div",{className:s().navigationContainer,children:(0,a.jsx)("nav",{className:s().headerNav,children:(0,a.jsxs)("ul",{className:s().headerNavList,children:[n&&n.map((function(e,n){return(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:e.link,children:(0,a.jsx)("a",{className:"commonText",target:e.newTab?"_blank":void 0,children:e.label})})},n.toString())})),d.n.map((function(e,n){return(0,a.jsx)(i.default,{href:e.link,children:(0,a.jsx)("li",{className:"".concat(s().socialsNav," ").concat(s()[e.label]," header")})},n.toString())}))]})})}),(0,a.jsx)(c,{nav:n})]})})},p=t(2890),f=t.n(p),h=function(e){e.nav;return(0,a.jsx)("footer",{className:"".concat(f().footer," footer"),children:(0,a.jsxs)("div",{className:f().footerContainer,children:[(0,a.jsxs)("div",{className:f().socials,children:[(0,a.jsx)(i.default,{href:d.PE,children:(0,a.jsx)("a",{className:"".concat(f().link," ").concat(f().Twitter),target:"_blank",children:"Twitter"})}),(0,a.jsx)(i.default,{href:d.BE,children:(0,a.jsx)("a",{className:"".concat(f().link," ").concat(f().LinkedIn),target:"_blank",children:"LinkedIn"})}),(0,a.jsx)(i.default,{href:d.TU,children:(0,a.jsx)("a",{className:"".concat(f().link," ").concat(f().GitHub),children:"GitHub"})}),(0,a.jsx)(i.default,{href:"https://www.supercolony.net",children:(0,a.jsx)("a",{className:"".concat(f().link," ").concat(f().Website),target:"_blank",children:"Supercolony"})})]}),(0,a.jsx)("p",{children:"Copyright \xa9 2021 OpenBrush, Supercolony.net"}),(0,a.jsxs)("p",{className:f().createdBy,children:["created by",(0,a.jsx)("a",{href:"https://www.supercolony.net",target:"_blank",children:(0,a.jsx)("img",{src:"/img/new-supercolony.svg",className:f().supercolony})})]})]})})},m=[{columnName:"Products",links:[{label:"Contacts",link:"/"},{label:"Defender",link:"/"}]},{columnName:"Security",links:[{label:"Audits",link:"/"},{label:"Request a secutity audit",link:"/"}]},{columnName:"Learn",links:[{label:"Docs",link:"https://supercolony-net.github.io/openbrush-contracts/"},{label:"Community Forum",link:"/"}]},{columnName:"Company",links:[{label:"About us",link:"/"},{label:"Jobs",link:"/"},{label:"Github",link:"https://github.com/Supercolony-net/openbrush-contracts"},{label:"Logo Kit",link:"/"},{label:"News & Event",link:"/"}]}],b=function(e){var n=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{nav:d.CM}),(0,a.jsx)("main",{className:"wrapper",children:n}),(0,a.jsx)(h,{nav:m})]})},v=(t(9221),t(9840),t(4725),t(767),t(8354),t(9008));function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){y(e,n,t[n])}))}return e}var x=function(e){var n=e.Component,t=e.pageProps;return(0,a.jsxs)(b,{children:[(0,a.jsx)(v.default,{children:(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),(0,a.jsx)(n,k({},t))]})}},7100:function(e){e.exports={BurgerMenuContainer:"BurgerMenu_BurgerMenuContainer__Bm6oJ",burgerMenu:"BurgerMenu_burgerMenu__jnrZd",opened:"BurgerMenu_opened__W_Ztz",MenuWrapper:"BurgerMenu_MenuWrapper__4GSf9",Menu:"BurgerMenu_Menu__uA0Kp",Nav:"BurgerMenu_Nav__cLYdV"}},2890:function(e){e.exports={footer:"Footer_footer__BH5s_",footerContainer:"Footer_footerContainer__ebzkU",socials:"Footer_socials__6Uolq",link:"Footer_link__OPILr",Twitter:"Footer_Twitter__Lsv8S",GitHub:"Footer_GitHub__QLVr0",LinkedIn:"Footer_LinkedIn__t3JEn",Website:"Footer_Website__zdLq_",createdBy:"Footer_createdBy__ktzz5",supercolony:"Footer_supercolony__7hXti"}},2736:function(e){e.exports={header:"Header_header__ubBbX",headerContainer:"Header_headerContainer__m5wGA",logoContainer:"Header_logoContainer__Nx4_t",navigationContainer:"Header_navigationContainer__7dM1Q",socialsList:"Header_socialsList__8rG0j",headerNavList:"Header_headerNavList__sSNWs",socialsNav:"Header_socialsNav__TRrVn",Twitter:"Header_Twitter__ajpKr",Element:"Header_Element__T93Hb",LinkedIn:"Header_LinkedIn__W0TiV",Discord:"Header_Discord__bEf_9",Telegram:"Header_Telegram__S_GI6"}},8354:function(){},9840:function(){},9221:function(){},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},767:function(){!function(e){for(var n=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,t=0;t<2;t++)n=n.replace(/<self>/g,(function(){return n}));n=n.replace(/<self>/g,(function(){return/[^\s\S]/.source})),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+n),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0,alias:"string"},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(Prism)},4725:function(e,n,t){var a=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof s?new s(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var a,s;switch(t=t||{},r.util.type(n)){case"Object":if(s=r.util.objId(n),t[s])return t[s];for(var i in a={},t[s]=a,n)n.hasOwnProperty(i)&&(a[i]=e(n[i],t));return a;case"Array":return s=r.util.objId(n),t[s]?t[s]:(a=[],t[s]=a,n.forEach((function(n,r){a[r]=e(n,t)})),a);default:return n}},getLanguage:function(e){for(;e&&!n.test(e.className);)e=e.parentElement;return e?(e.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var a="no-"+n;e;){var r=e.classList;if(r.contains(n))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!t}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,n){var t=r.util.clone(r.languages[e]);for(var a in n)t[a]=n[a];return t},insertBefore:function(e,n,t,a){var s=(a=a||r.languages)[e],i={};for(var o in s)if(s.hasOwnProperty(o)){if(o==n)for(var l in t)t.hasOwnProperty(l)&&(i[l]=t[l]);t.hasOwnProperty(o)||(i[o]=s[o])}var u=a[e];return a[e]=i,r.languages.DFS(r.languages,(function(n,t){t===u&&n!=e&&(this[n]=i)})),i},DFS:function e(n,t,a,s){s=s||{};var i=r.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],a||o);var l=n[o],u=r.util.type(l);"Object"!==u||s[i(l)]?"Array"!==u||s[i(l)]||(s[i(l)]=!0,e(l,t,o,s)):(s[i(l)]=!0,e(l,t,null,s))}}},plugins:{},highlightAll:function(e,n){r.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var a={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var s,i=0;s=a.elements[i++];)r.highlightElement(s,!0===n,a.callback)},highlightElement:function(t,a,s){var i=r.util.getLanguage(t),o=r.languages[i];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+i;var l=t.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(n,"").replace(/\s+/g," ")+" language-"+i);var u={element:t,language:i,grammar:o,code:t.textContent};function c(e){u.highlightedCode=e,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r.hooks.run("after-highlight",u),r.hooks.run("complete",u),s&&s.call(u.element)}if(r.hooks.run("before-sanity-check",u),(l=u.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!u.code)return r.hooks.run("complete",u),void(s&&s.call(u.element));if(r.hooks.run("before-highlight",u),u.grammar)if(a&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(r.highlight(u.code,u.grammar,u.language));else c(r.util.encode(u.code))},highlight:function(e,n,t){var a={code:e,grammar:n,language:t};return r.hooks.run("before-tokenize",a),a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),s.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var a in t)n[a]=t[a];delete n.rest}var r=new l;return u(r,r.head,e),o(e,r,n,r.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(r)},hooks:{all:{},add:function(e,n){var t=r.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=r.hooks.all[e];if(t&&t.length)for(var a,s=0;a=t[s++];)a(n)}},Token:s};function s(e,n,t,a){this.type=e,this.content=n,this.alias=t,this.length=0|(a||"").length}function i(e,n,t,a){e.lastIndex=n;var r=e.exec(t);if(r&&a&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function o(e,n,t,a,l,d){for(var g in t)if(t.hasOwnProperty(g)&&t[g]){var p=t[g];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(d&&d.cause==g+","+f)return;var h=p[f],m=h.inside,b=!!h.lookbehind,v=!!h.greedy,y=h.alias;if(v&&!h.pattern.global){var k=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,k+"g")}for(var x=h.pattern||h,_=a.next,w=l;_!==n.tail&&!(d&&w>=d.reach);w+=_.value.length,_=_.next){var F=_.value;if(n.length>e.length)return;if(!(F instanceof s)){var A,j=1;if(v){if(!(A=i(x,w,e,b)))break;var N=A.index,E=A.index+A[0].length,S=w;for(S+=_.value.length;N>=S;)S+=(_=_.next).value.length;if(w=S-=_.value.length,_.value instanceof s)continue;for(var C=_;C!==n.tail&&(S<E||"string"===typeof C.value);C=C.next)j++,S+=C.value.length;j--,F=e.slice(w,S),A.index-=w}else if(!(A=i(x,0,F,b)))continue;N=A.index;var $=A[0],L=F.slice(0,N),M=F.slice(N+$.length),T=w+F.length;d&&T>d.reach&&(d.reach=T);var z=_.prev;if(L&&(z=u(n,z,L),w+=L.length),c(n,z,j),_=u(n,z,new s(g,m?r.tokenize($,m):$,y,$)),M&&u(n,_,M),j>1){var O={cause:g+","+f,reach:T};o(e,n,t,_.prev,w,O),d&&O.reach>d.reach&&(d.reach=O.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var a=n.next,r={value:t,prev:n,next:a};return n.next=r,a.prev=r,e.length++,r}function c(e,n,t){for(var a=n.next,r=0;r<t&&a!==e.tail;r++)a=a.next;n.next=a,a.prev=n,e.length-=r}if(e.Prism=r,s.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var a="";return n.forEach((function(n){a+=e(n,t)})),a}var s={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},i=n.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(s.classes,i):s.classes.push(i)),r.hooks.run("wrap",s);var o="";for(var l in s.attributes)o+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+o+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),a=t.language,s=t.code,i=t.immediateClose;e.postMessage(r.highlight(s,r.languages[a],a)),i&&e.close()}),!1),r):r;var d=r.util.currentScript();function g(){r.manual||r.highlightAll()}if(d&&(r.filename=d.src,d.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var p=document.readyState;"loading"===p||"interactive"===p&&d&&d.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return r}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),"undefined"!==typeof t.g&&(t.g.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,n){var t={};t["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[n]},t.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};r["language-"+n]={pattern:/[\s\S]+/,inside:a.languages[n]};var s={};s[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(e,n){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:a.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(e){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if("undefined"!==typeof a&&"undefined"!==typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",t="loading",r="loaded",s='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',i=/\blang(?:uage)?-([\w-]+)\b/i;a.hooks.add("before-highlightall",(function(e){e.selector+=", "+s})),a.hooks.add("before-sanity-check",(function(i){var o=i.element;if(o.matches(s)){i.code="",o.setAttribute(n,t);var u=o.appendChild(document.createElement("CODE"));u.textContent="Loading\u2026";var c=o.getAttribute("data-src"),d=i.language;if("none"===d){var g=(/\.(\w+)$/.exec(c)||[,"none"])[1];d=e[g]||g}l(u,d),l(o,d);var p=a.plugins.autoloader;p&&p.loadLanguages(d);var f=new XMLHttpRequest;f.open("GET",c,!0),f.onreadystatechange=function(){var e,t;4==f.readyState&&(f.status<400&&f.responseText?(o.setAttribute(n,r),u.textContent=f.responseText,a.highlightElement(u)):(o.setAttribute(n,"failed"),f.status>=400?u.textContent=(e=f.status,t=f.statusText,"\u2716 Error "+e+" while fetching file: "+t):u.textContent="\u2716 Error: File does not exist or is empty"))},f.send(null)}})),a.plugins.fileHighlight={highlight:function(e){for(var n,t=(e||document).querySelectorAll(s),r=0;n=t[r++];)a.highlightElement(n)}};var o=!1;a.fileHighlight=function(){o||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),o=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}function l(e,n){var t=e.className;t=t.replace(i," ")+" language-"+n,e.className=t.replace(/\s+/g," ").trim()}}()}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var t=e.O();_N_E=t}]);