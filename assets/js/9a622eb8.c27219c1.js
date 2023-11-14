"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[8589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},b="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=o,g=b["".concat(p,".").concat(d)]||b[d]||c[d]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[b]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5,slug:"updating-soapbox",title:"Updating Soapbox"},i=void 0,s={unversionedId:"rebased-and-soapbox-tutorials/installing-soapbox/updating-soapbox",id:"rebased-and-soapbox-tutorials/installing-soapbox/updating-soapbox",title:"Updating Soapbox",description:"Updating Soapbox involves fetching the latest build as a zip file and then unzipping it.",source:"@site/docs/rebased-and-soapbox-tutorials/installing-soapbox/05-updating-soapbox.md",sourceDirName:"rebased-and-soapbox-tutorials/installing-soapbox",slug:"/rebased-and-soapbox-tutorials/installing-soapbox/updating-soapbox",permalink:"/notes/docs/rebased-and-soapbox-tutorials/installing-soapbox/updating-soapbox",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/rebased-and-soapbox-tutorials/installing-soapbox/05-updating-soapbox.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"updating-soapbox",title:"Updating Soapbox"},sidebar:"tutorialSidebar",previous:{title:"Installing Soapbox",permalink:"/notes/docs/rebased-and-soapbox-tutorials/installing-soapbox/installing-soapbox"},next:{title:"Maintaining Rebased and Soapbox",permalink:"/notes/docs/category/maintaining-rebased-and-soapbox"}},p={},l=[],u={toc:l},b="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Updating Soapbox involves fetching the latest build as a zip file and then unzipping it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fetch the latest build.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://dl.soapbox.pub/main/soapbox.zip\n"))),(0,o.kt)("li",{parentName:"ol"},"Unzip the files.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"busybox unzip soapbox.zip -o -d /opt/pleroma/instance/static\n"))),(0,o.kt)("li",{parentName:"ol"},"Refresh your website.")))}c.isMDXComponent=!0}}]);