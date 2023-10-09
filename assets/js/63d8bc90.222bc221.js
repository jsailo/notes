"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[6910],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(a),b=r,g=c["".concat(p,".").concat(b)]||c[b]||u[b]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},6233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={slug:"exporting-database-configuration-rebased",sidebar_position:6,title:"Exporting the Rebased database configuration"},i="Exporting the Rebased database configuration",s={unversionedId:"rebased-and-soapbox-tutorials/maintaining-rebased/exporting-db-configuration",id:"rebased-and-soapbox-tutorials/maintaining-rebased/exporting-db-configuration",title:"Exporting the Rebased database configuration",description:"Export the database configuration into a readable file for the purposes of troubleshooting or view the entries.",source:"@site/docs/rebased-and-soapbox-tutorials/maintaining-rebased/06-exporting-db-configuration.md",sourceDirName:"rebased-and-soapbox-tutorials/maintaining-rebased",slug:"/rebased-and-soapbox-tutorials/maintaining-rebased/exporting-database-configuration-rebased",permalink:"/notes/docs/rebased-and-soapbox-tutorials/maintaining-rebased/exporting-database-configuration-rebased",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/rebased-and-soapbox-tutorials/maintaining-rebased/06-exporting-db-configuration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"exporting-database-configuration-rebased",sidebar_position:6,title:"Exporting the Rebased database configuration"},sidebar:"tutorialSidebar",previous:{title:"Maintaining Rebased and Soapbox installation",permalink:"/notes/docs/category/maintaining-rebased-and-soapbox-installation"},next:{title:"Viewing Rebased logs",permalink:"/notes/docs/rebased-and-soapbox-tutorials/maintaining-rebased/viewing-rebased-logs"}},p={},l=[],d={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exporting-the-rebased-database-configuration"},"Exporting the Rebased database configuration"),(0,r.kt)("p",null,"Export the database configuration into a readable file for the purposes of troubleshooting or view the entries."),(0,r.kt)("p",null,"To export the database configuratin, run the following commands in succession."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Change to the ",(0,r.kt)("inlineCode",{parentName:"li"},"pleroma")," user.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -Hu pleroma bash\n"))),(0,r.kt)("li",{parentName:"ol"},"Change the directory to ",(0,r.kt)("inlineCode",{parentName:"li"},"/opt/pleroma"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/pleroma\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the mix command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mix pleroma.config migrate_from_db --env=prod -d --path=/opt/pleroma/config/export_prod.secret.exs\nMIX_ENV=prod mix pleroma.config migrate_from_db\n")))),(0,r.kt)("p",null,"A file is exported to the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/prod.exported_from_db.secret.exs")," path on your server. This is your database configuration file. Use a program like Notepad ++ to open the file."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you plan to share the database configuration file in a public forum or chat rooms, REMOVE ALL the keys, such as AWS Secret access keys, Key IDs etc")))}u.isMDXComponent=!0}}]);