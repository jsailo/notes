"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[8735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(p,".").concat(b)]||u[b]||c[b]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4,slug:"updating-rebased",title:"Updating Rebased"},i="Updating Rebased",s={unversionedId:"Rebased and Soapbox tutorial/updating-rebased",id:"Rebased and Soapbox tutorial/updating-rebased",title:"Updating Rebased",description:"To update Rebased, run the following commands in succession.",source:"@site/docs/Rebased and Soapbox tutorial/04-updating-rebased.md",sourceDirName:"Rebased and Soapbox tutorial",slug:"/Rebased and Soapbox tutorial/updating-rebased",permalink:"/notes/docs/Rebased and Soapbox tutorial/updating-rebased",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/Rebased and Soapbox tutorial/04-updating-rebased.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"updating-rebased",title:"Updating Rebased"},sidebar:"tutorialSidebar",previous:{title:"Installing Soapbox",permalink:"/notes/docs/Rebased and Soapbox tutorial/installing-soapbox"},next:{title:"Updating Soapbox",permalink:"/notes/docs/Rebased and Soapbox tutorial/updating-soapbox"}},p={},d=[],l={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"updating-rebased"},"Updating Rebased"),(0,a.kt)("p",null,"To update Rebased, run the following commands in succession."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -Hu pleroma bash\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/pleroma\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git pull && mix deps.get && mix deps.compile && MIX_ENV=prod mix compile && MIX_ENV=prod mix ecto.migrate\n")))}c.isMDXComponent=!0}}]);