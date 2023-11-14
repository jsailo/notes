"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3408],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,b=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(b,o(o({ref:t},m),{},{components:a})):n.createElement(b,o({ref:t},m))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:8,slug:"setting-up-email-pleroma-rebased-namecheap",title:"Setting up the mailer in AdminFe"},o="Setting up mailer in AdminFE",l={unversionedId:"rebased-and-soapbox-tutorials/maintaining-rebased-soapbox/setting-up-email-pleroma-rebased-namecheap",id:"rebased-and-soapbox-tutorials/maintaining-rebased-soapbox/setting-up-email-pleroma-rebased-namecheap",title:"Setting up the mailer in AdminFe",description:"Use the mailer to send notification to users, such as when they forget or want to reset their password. You can also use it send digest emails to new users.",source:"@site/docs/rebased-and-soapbox-tutorials/maintaining-rebased-soapbox/08-setting-up-email-pleroma-rebased-namecheap.md",sourceDirName:"rebased-and-soapbox-tutorials/maintaining-rebased-soapbox",slug:"/rebased-and-soapbox-tutorials/maintaining-rebased-soapbox/setting-up-email-pleroma-rebased-namecheap",permalink:"/notes/docs/rebased-and-soapbox-tutorials/maintaining-rebased-soapbox/setting-up-email-pleroma-rebased-namecheap",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/rebased-and-soapbox-tutorials/maintaining-rebased-soapbox/08-setting-up-email-pleroma-rebased-namecheap.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"setting-up-email-pleroma-rebased-namecheap",title:"Setting up the mailer in AdminFe"},sidebar:"tutorialSidebar",previous:{title:"Viewing Rebased system logs",permalink:"/notes/docs/rebased-and-soapbox-tutorials/maintaining-rebased-soapbox/viewing-rebased-system-logs"},next:{title:"Posting on Soapbox",permalink:"/notes/docs/category/posting-on-soapbox"}},s={},p=[],m={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-mailer-in-adminfe"},"Setting up mailer in AdminFE"),(0,r.kt)("p",null,"Use the mailer to send notification to users, such as when they forget or want to reset their password. You can also use it send digest emails to new users."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},":::note\nYou can use the same steps in Pleroma AdminFE.\n:::\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log on to AdminFE and click ",(0,r.kt)("strong",{parentName:"li"},"Mailer")," on the left sidebar of AdminFE. The direct link is `yourinstance.tld/pleroma/admin/#/settings/mailer``"),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Pleroma.Emails.Mailer")," area, do the following. ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mailer Enable"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable this option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Adapter"),(0,r.kt)("td",{parentName:"tr",align:null},"Select SMTP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relay"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Namecheap relay. This is 'mail.privateemail.com' (without quotes).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter 587.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the email address you set up in name cheap. E.g. ",(0,r.kt)("a",{parentName:"td",href:"mailto:hello@myinstance.tld"},"hello@myinstance.tld"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the password for the Username field above.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use SSL"),(0,r.kt)("td",{parentName:"tr",align:null},"Leave this disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STARTTLS Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Select :if_available.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AUTH Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Select :always")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Retries"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter 2.")))))}u.isMDXComponent=!0}}]);