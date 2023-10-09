"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3,slug:"installing-soapbox",title:"Installing Soapbox"},i=void 0,s={unversionedId:"rebased-and-soapbox-tutorials/installing-soapbox/installing-soapbox",id:"rebased-and-soapbox-tutorials/installing-soapbox/installing-soapbox",title:"Installing Soapbox",description:"Soapbox is the frontend with which users (or you) will interact with your Fediverse site. It involves fetching the zip file from the Soapbox server and unzipping the files on your server. That's all there is to it.",source:"@site/docs/rebased-and-soapbox-tutorials/installing-soapbox/03-installing-soapbox.md",sourceDirName:"rebased-and-soapbox-tutorials/installing-soapbox",slug:"/rebased-and-soapbox-tutorials/installing-soapbox/installing-soapbox",permalink:"/notes/docs/rebased-and-soapbox-tutorials/installing-soapbox/installing-soapbox",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/rebased-and-soapbox-tutorials/installing-soapbox/03-installing-soapbox.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"installing-soapbox",title:"Installing Soapbox"},sidebar:"tutorialSidebar",previous:{title:"Installing Soapbox",permalink:"/notes/docs/category/installing-soapbox"},next:{title:"Updating Soapbox",permalink:"/notes/docs/rebased-and-soapbox-tutorials/installing-soapbox/updating-soapbox"}},l={},p=[],c={toc:p},u="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Soapbox is the frontend with which users (or you) will interact with your Fediverse site. It involves fetching the zip file from the Soapbox server and unzipping the files on your server. That's all there is to it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to fetch the latest build."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://dl.soapbox.pub/main/soapbox.zip\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unzip the files using the ",(0,r.kt)("inlineCode",{parentName:"p"},"unzip")," command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"busybox unzip soapbox.zip -o -d /opt/pleroma/instance/static\n")))),(0,r.kt)("p",null,"Refresh your website. Tada!"))}b.isMDXComponent=!0}}]);