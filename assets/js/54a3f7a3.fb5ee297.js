"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[2694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(r),b=a,m=u["".concat(p,".").concat(b)]||u[b]||c[b]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4,slug:"updating-rebased",title:"Updating Rebased"},s="Updating Rebased",i={unversionedId:"rebased-and-soapbox tutorials/updating-rebased",id:"rebased-and-soapbox tutorials/updating-rebased",title:"Updating Rebased",description:"To update Rebased, run the following commands in succession.",source:"@site/docs/rebased-and-soapbox tutorials/04-updating-rebased.md",sourceDirName:"rebased-and-soapbox tutorials",slug:"/rebased-and-soapbox tutorials/updating-rebased",permalink:"/notes/docs/rebased-and-soapbox tutorials/updating-rebased",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/rebased-and-soapbox tutorials/04-updating-rebased.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"updating-rebased",title:"Updating Rebased"},sidebar:"tutorialSidebar",previous:{title:"Installing Soapbox",permalink:"/notes/docs/rebased-and-soapbox tutorials/installing-soapbox"},next:{title:"Updating Soapbox",permalink:"/notes/docs/rebased-and-soapbox tutorials/updating-soapbox"}},p={},d=[],l={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"updating-rebased"},"Updating Rebased"),(0,a.kt)("p",null,"To update Rebased, run the following commands in succession."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -Hu pleroma bash\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/pleroma\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git pull && mix deps.get && mix deps.compile && MIX_ENV=prod mix compile && MIX_ENV=prod mix ecto.migrate\n")))}c.isMDXComponent=!0}}]);