(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{6291:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(5893),o=(r(7294),r(4051)),s=r(1555);function i(e){var n=e.tokenName,r=e.tokenSymbol;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.Z,{children:(0,t.jsx)(s.Z,{children:(0,t.jsxs)("h1",{children:[n," - ",r]})})})})}},859:function(e,n,r){"use strict";r.d(n,{Z:function(){return m}});var t=r(809),o=r.n(t),s=r(5893),i=r(5311),l=r(9227),a=(r(7294),r(1881)),c=r(7833),d=r(5005),u=r(2358);function m(e){var n=e.show,r=e.onHide,t=e.contract,m=e.senderAddress,p=e.tokenId,f=e.eventId,h=e.type,x=(0,u.Z)({type:"text",placeholder:"Amount"}),b=(0,l.Z)(x,2),y=b[0],g=b[1];function v(){return N.apply(this,arguments)}function N(){return(N=(0,i.Z)(o().mark((function e(){var n,r,s,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.tokenURI(p);case 2:return n=e.sent,e.next=5,JSON.parse(n);case 5:return r=e.sent,Number(r.properties.price.description)<Number(y)&&(r.properties.price.description=y,r.properties.higherbidadd.description=m),e.next=9,t.createBid(p,y,JSON.stringify(r),m,f);case 9:return s=e.sent,console.log(s),e.next=13,t.allbidstoken(1);case 13:i=e.sent,console.log(i),window.document.getElementsByClassName("btn-close")[0].click();case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.jsxs)(a.Z,{show:n,onHide:r,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,s.jsx)(a.Z.Header,{closeButton:!0,children:"Cryptopunk"==h?(0,s.jsx)(a.Z.Title,{id:"contained-modal-title-vcenter",children:"Bid Cryptopunk"}):(0,s.jsx)(a.Z.Title,{id:"contained-modal-title-vcenter",children:"Bid NFT"})}),(0,s.jsx)(a.Z.Body,{className:"show-grid",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formGroupName",children:[(0,s.jsx)(c.Z.Label,{children:"Bid Amount in ETH"}),g]}),(0,s.jsx)("div",{className:"d-grid",children:"Cryptopunk"==h?(0,s.jsx)(d.Z,{variant:"primary",onClick:v,children:"Bid Cryptopunk"}):(0,s.jsx)(d.Z,{variant:"primary",onClick:v,children:"Bid NFT"})})]})})]})}},3453:function(e,n,r){"use strict";r(809),r(5893),r(7294),r(2358)},1330:function(e,n,r){"use strict";var t=r(4036),o=r.n(t),s=r(7294),i=r(5697),l=r.n(i),a=r(600),c=r(5893);l().string,l().bool,l().bool,l().bool,l().bool;const d=s.forwardRef((({bsPrefix:e,className:n,fluid:r,rounded:t,roundedCircle:s,thumbnail:i,...l},d)=>(e=(0,a.vE)(e,"img"),(0,c.jsx)("img",{ref:d,...l,className:o()(n,r&&`${e}-fluid`,t&&"rounded",s&&"rounded-circle",i&&`${e}-thumbnail`)}))));d.displayName="Image",d.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},n.Z=d},1881:function(e,n,r){"use strict";r.d(n,{Z:function(){return A}});var t,o=r(4036),s=r.n(o),i=r(9351),l=r(3004),a=r(7216),c=r(99);function d(e){if((!t&&0!==t||e)&&l.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),t=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return t}var u=r(2092),m=r(8146),p=r(5654),f=r(5088),h=r(6914),x=r(7294),b=r(8380),y=r(1645),g=r(1068),v=r(4680),N=(0,v.Z)("modal-body"),Z=r(6467),w=r(600),k=r(5893);const j=x.forwardRef((({bsPrefix:e,className:n,contentClassName:r,centered:t,size:o,fullscreen:i,children:l,scrollable:a,...c},d)=>{const u=`${e=(0,w.vE)(e,"modal")}-dialog`,m="string"===typeof i?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return(0,k.jsx)("div",{...c,ref:d,className:s()(u,n,o&&`${e}-${o}`,t&&`${u}-centered`,a&&`${u}-scrollable`,i&&m),children:(0,k.jsx)("div",{className:s()(`${e}-content`,r),children:l})})}));j.displayName="ModalDialog";var E=j,C=(0,v.Z)("modal-footer"),$=r(2655);const R=x.forwardRef((({bsPrefix:e,className:n,...r},t)=>(e=(0,w.vE)(e,"modal-header"),(0,k.jsx)($.Z,{ref:t,...r,className:s()(n,e)}))));R.displayName="ModalHeader",R.defaultProps={closeLabel:"Close",closeButton:!1};var T=R;const F=(0,r(9602).Z)("h4");var B=(0,v.Z)("modal-title",{Component:F});const H={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:E};function I(e){return(0,k.jsx)(g.Z,{...e,timeout:null})}function P(e){return(0,k.jsx)(g.Z,{...e,timeout:null})}const S=x.forwardRef((({bsPrefix:e,className:n,style:r,dialogClassName:t,contentClassName:o,children:g,dialogAs:v,"aria-labelledby":N,show:j,animation:E,backdrop:C,keyboard:$,onEscapeKeyDown:R,onShow:T,onHide:F,container:B,autoFocus:H,enforceFocus:S,restoreFocus:A,restoreFocusOptions:D,onEntered:O,onExit:_,onExiting:M,onEnter:z,onEntering:L,onExited:U,backdropClassName:K,manager:W,...G},J)=>{const[q,Q]=(0,x.useState)({}),[V,X]=(0,x.useState)(!1),Y=(0,x.useRef)(!1),ee=(0,x.useRef)(!1),ne=(0,x.useRef)(null),[re,te]=(0,u.Z)(),oe=(0,p.Z)(J,te),se=(0,m.Z)(F),ie=(0,w.SC)();e=(0,w.vE)(e,"modal");const le=(0,x.useMemo)((()=>({onHide:se})),[se]);function ae(){return W||(0,y.t)({isRTL:ie})}function ce(e){if(!l.Z)return;const n=ae().getScrollbarWidth()>0,r=e.scrollHeight>(0,a.Z)(e).documentElement.clientHeight;Q({paddingRight:n&&!r?d():void 0,paddingLeft:!n&&r?d():void 0})}const de=(0,m.Z)((()=>{re&&ce(re.dialog)}));(0,f.Z)((()=>{(0,c.Z)(window,"resize",de),null==ne.current||ne.current()}));const ue=()=>{Y.current=!0},me=e=>{Y.current&&re&&e.target===re.dialog&&(ee.current=!0),Y.current=!1},pe=()=>{X(!0),ne.current=(0,h.Z)(re.dialog,(()=>{X(!1)}))},fe=e=>{"static"!==C?ee.current||e.target!==e.currentTarget?ee.current=!1:null==F||F():(e=>{e.target===e.currentTarget&&pe()})(e)},he=(0,x.useCallback)((n=>(0,k.jsx)("div",{...n,className:s()(`${e}-backdrop`,K,!E&&"show")})),[E,K,e]),xe={...r,...q};E||(xe.display="block");return(0,k.jsx)(Z.Z.Provider,{value:le,children:(0,k.jsx)(b.Z,{show:j,ref:oe,backdrop:C,container:B,keyboard:!0,autoFocus:H,enforceFocus:S,restoreFocus:A,restoreFocusOptions:D,onEscapeKeyDown:e=>{$||"static"!==C?$&&R&&R(e):(e.preventDefault(),pe())},onShow:T,onHide:F,onEnter:(e,n)=>{e&&(e.style.display="block",ce(e)),null==z||z(e,n)},onEntering:(e,n)=>{null==L||L(e,n),(0,i.ZP)(window,"resize",de)},onEntered:O,onExit:e=>{null==ne.current||ne.current(),null==_||_(e)},onExiting:M,onExited:e=>{e&&(e.style.display=""),null==U||U(e),(0,c.Z)(window,"resize",de)},manager:ae(),transition:E?I:void 0,backdropTransition:E?P:void 0,renderBackdrop:he,renderDialog:r=>(0,k.jsx)("div",{role:"dialog",...r,style:xe,className:s()(n,e,V&&`${e}-static`),onClick:C?fe:void 0,onMouseUp:me,"aria-labelledby":N,children:(0,k.jsx)(v,{...G,onMouseDown:ue,className:t,contentClassName:o,children:g})})})})}));S.displayName="Modal",S.defaultProps=H;var A=Object.assign(S,{Body:N,Header:T,Title:B,Footer:C,Dialog:E,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},4051:function(e,n,r){"use strict";var t=r(4036),o=r.n(t),s=r(7294),i=r(600),l=r(5893);const a=["xxl","xl","lg","md","sm","xs"],c=s.forwardRef((({bsPrefix:e,className:n,as:r="div",...t},s)=>{const c=(0,i.vE)(e,"row"),d=`${c}-cols`,u=[];return a.forEach((e=>{const n=t[e];let r;delete t[e],null!=n&&"object"===typeof n?({cols:r}=n):r=n;const o="xs"!==e?`-${e}`:"";null!=r&&u.push(`${d}${o}-${r}`)})),(0,l.jsx)(r,{ref:s,...t,className:o()(n,c,...u)})}));c.displayName="Row",n.Z=c}}]);