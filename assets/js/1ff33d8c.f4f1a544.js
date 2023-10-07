"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[465],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(a),m=n,b=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(b,p(p({ref:t},d),{},{components:a})):r.createElement(b,p({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4,slug:"updating-rebased",title:"Updating Rebased"},p="Updating Rebased",i={unversionedId:"rebased-and-soapbox-tutorials/updating-rebased",id:"rebased-and-soapbox-tutorials/updating-rebased",title:"Updating Rebased",description:"To update Rebased, run the following commands in succession.",source:"@site/docs/rebased-and-soapbox-tutorials/04-updating-rebased.md",sourceDirName:"rebased-and-soapbox-tutorials",slug:"/rebased-and-soapbox-tutorials/updating-rebased",permalink:"/notes/docs/rebased-and-soapbox-tutorials/updating-rebased",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/rebased-and-soapbox-tutorials/04-updating-rebased.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"updating-rebased",title:"Updating Rebased"},sidebar:"tutorialSidebar",previous:{title:"Installing Soapbox",permalink:"/notes/docs/rebased-and-soapbox-tutorials/installing-soapbox"},next:{title:"Updating Soapbox",permalink:"/notes/docs/rebased-and-soapbox-tutorials/updating-soapbox"}},s={},l=[],d={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"updating-rebased"},"Updating Rebased"),(0,n.kt)("p",null,"To update Rebased, run the following commands in succession."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change to the ",(0,n.kt)("inlineCode",{parentName:"p"},"pleroma")," user."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -Hu pleroma bash\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change your working directory to ",(0,n.kt)("inlineCode",{parentName:"p"},"/opt/pleroma"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/pleroma\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pull the latest build."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git pull origin develop\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"asdf"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"asdf install\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Perform the task of migration."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mix deps.get\nMIX_ENV=prod mix ecto.migrate\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Exit as the ",(0,n.kt)("inlineCode",{parentName:"p"},"pleroma")," user."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"exit\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart pleroma."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart pleroma\n")))))}u.isMDXComponent=!0}}]);