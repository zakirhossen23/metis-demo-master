(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),s=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||s()}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3398);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,s=void 0!==o&&o;return r||a&&s}},2775:function(e,t,r){"use strict";var n=r(9713);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),c=(o=r(3244))&&o.__esModule?o:{default:o},i=r(3398),u=r(1165),d=r(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=s.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,u=h.length;i<u;i++){var d=h[i];if(a.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?o=!1:r.add(d);else{var l=a.props[d],f=n[d]||new Set;"name"===d&&s||!f.has(l)?(f.add(l),n[d]=f):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,s.default.cloneElement(e,c)}return s.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,r=(0,s.useContext)(i.AmpStateContext),n=(0,s.useContext)(u.HeadManagerContext);return s.default.createElement(c.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r)},t)};t.default=v},3244:function(e,t,r){"use strict";var n=r(319),a=r(4575),o=r(3913),s=(r(1506),r(2205)),c=r(8585),i=r(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var a=i(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var d=r(7294),l=function(e){s(r,e);var t=u(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=l},2686:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var n=r(5893),a=r(7294),o=r(9008),s=r(1664),c=r(4184),i=r.n(c),u=r(600),d=r(4680),l=r(9602);const f=a.forwardRef((({bsPrefix:e,className:t,variant:r,as:a="img",...o},s)=>{const c=(0,u.vE)(e,"card-img");return(0,n.jsx)(a,{ref:s,className:i()(r?`${c}-${r}`:c,t),...o})}));f.displayName="CardImg";var p=f,h=r(9059);const m=a.forwardRef((({bsPrefix:e,className:t,as:r="div",...o},s)=>{const c=(0,u.vE)(e,"card-header"),d=(0,a.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,n.jsx)(h.Z.Provider,{value:d,children:(0,n.jsx)(r,{ref:s,...o,className:i()(t,c)})})}));m.displayName="CardHeader";var v=m;const y=(0,l.Z)("h5"),x=(0,l.Z)("h6"),b=(0,d.Z)("card-body"),j=(0,d.Z)("card-title",{Component:y}),g=(0,d.Z)("card-subtitle",{Component:x}),w=(0,d.Z)("card-link",{Component:"a"}),O=(0,d.Z)("card-text",{Component:"p"}),_=(0,d.Z)("card-footer"),C=(0,d.Z)("card-img-overlay"),M=a.forwardRef((({bsPrefix:e,className:t,bg:r,text:a,border:o,body:s,children:c,as:d="div",...l},f)=>{const p=(0,u.vE)(e,"card");return(0,n.jsx)(d,{ref:f,...l,className:i()(t,p,r&&`bg-${r}`,a&&`text-${a}`,o&&`border-${o}`),children:s?(0,n.jsx)(b,{children:c}):c})}));M.displayName="Card",M.defaultProps={body:!1};var P=Object.assign(M,{Img:p,Title:j,Subtitle:g,Body:b,Link:w,Text:O,Header:v,Footer:_,ImgOverlay:C}),k=r(1555),N=r(4051);function $(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Home"}),(0,n.jsx)("meta",{name:"description",content:"Home"}),(0,n.jsx)("link",{rel:"icon",href:"/logo.svg"})]}),(0,n.jsx)(N.Z,{children:(0,n.jsx)(k.Z,{children:(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("h1",{children:"Donate"})})})}),(0,n.jsxs)(N.Z,{xs:1,md:2,children:[(0,n.jsx)(k.Z,{className:"mt-3",children:(0,n.jsx)(s.default,{href:"/projects/erc-721",children:(0,n.jsx)("a",{children:(0,n.jsx)(P,{children:(0,n.jsx)(P.Body,{children:(0,n.jsx)(P.Title,{children:"NFT"})})})})})}),(0,n.jsx)(k.Z,{className:"mt-3",children:(0,n.jsx)(s.default,{href:"/projects/Cryptopunks",children:(0,n.jsx)("a",{children:(0,n.jsx)(P,{children:(0,n.jsx)(P.Body,{children:(0,n.jsx)(P.Title,{children:"Cryptopunks"})})})})})})]})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2686)}])},9008:function(e,t,r){e.exports=r(2775)},1555:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294),s=r(600),c=r(5893);const i=["xxl","xl","lg","md","sm","xs"];const u=o.forwardRef(((e,t)=>{const[{className:r,...n},{as:o="div",bsPrefix:u,spans:d}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,s.vE)(t,"col");const o=[],c=[];return i.forEach((e=>{const r=n[e];let a,s,i;delete n[e],"object"===typeof r&&null!=r?({span:a,offset:s,order:i}=r):a=r;const u="xs"!==e?`-${e}`:"";a&&o.push(!0===a?`${t}${u}`:`${t}${u}-${a}`),null!=i&&c.push(`order${u}-${i}`),null!=s&&c.push(`offset${u}-${s}`)})),[{...n,className:a()(r,...o,...c)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,c.jsx)(o,{...n,ref:t,className:a()(r,!d.length&&u)})}));u.displayName="Col",t.Z=u},4051:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294),s=r(600),c=r(5893);const i=["xxl","xl","lg","md","sm","xs"],u=o.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},o)=>{const u=(0,s.vE)(e,"row"),d=`${u}-cols`,l=[];return i.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const a="xs"!==e?`-${e}`:"";null!=r&&l.push(`${d}${a}-${r}`)})),(0,c.jsx)(r,{ref:o,...n,className:a()(t,u,...l)})}));u.displayName="Row",t.Z=u}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);