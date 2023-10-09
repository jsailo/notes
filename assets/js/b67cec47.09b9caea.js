"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[6682],{3905:(n,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>y});var t=a(7294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function m(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var c=t.createContext({}),s=function(n){var e=t.useContext(c),a=e;return n&&(a="function"==typeof n?n(e):m(m({},e),n)),a},d=function(n){var e=s(n.components);return t.createElement(c.Provider,{value:e},n.children)},p="mdxType",i={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),p=s(a),u=r,y=p["".concat(c,".").concat(u)]||p[u]||i[u]||o;return a?t.createElement(y,m(m({ref:e},d),{},{components:a})):t.createElement(y,m({ref:e},d))}));function y(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=a.length,m=new Array(o);m[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l[p]="string"==typeof n?n:r,m[1]=l;for(var s=2;s<o;s++)m[s]=a[s];return t.createElement.apply(null,m)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8653:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(7462),r=(a(7294),a(3905));const o={slug:"handy-yarn-npm-commands",sidebar_position:4,title:"Handy Yarn and NPM commands"},m=void 0,l={unversionedId:"yarn-npm-commands/common-yarn-npm-commands",id:"yarn-npm-commands/common-yarn-npm-commands",title:"Handy Yarn and NPM commands",description:"Yarn commands",source:"@site/docs/yarn-npm-commands/01-common-yarn-npm-commands.md",sourceDirName:"yarn-npm-commands",slug:"/yarn-npm-commands/handy-yarn-npm-commands",permalink:"/notes/docs/yarn-npm-commands/handy-yarn-npm-commands",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/yarn-npm-commands/01-common-yarn-npm-commands.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"handy-yarn-npm-commands",sidebar_position:4,title:"Handy Yarn and NPM commands"},sidebar:"tutorialSidebar",previous:{title:"Handy yarn and npm commands",permalink:"/notes/docs/category/handy-yarn-and-npm-commands"}},c={},s=[{value:"Yarn commands",id:"yarn-commands",level:2},{value:"NPM commands",id:"npm-commands",level:2},{value:"Yarn command to build and deploy straight to Github pages",id:"yarn-command-to-build-and-deploy-straight-to-github-pages",level:2}],d={toc:s},p="wrapper";function i(n){let{components:e,...a}=n;return(0,r.kt)(p,(0,t.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"yarn-commands"},"Yarn commands"),(0,r.kt)("p",null,"To build locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,r.kt)("p",null,"To start yarn locally and view the changes Live."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,r.kt)("h2",{id:"npm-commands"},"NPM commands"),(0,r.kt)("p",null,"To build locally"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,r.kt)("p",null,"To test your build locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,r.kt)("h2",{id:"yarn-command-to-build-and-deploy-straight-to-github-pages"},"Yarn command to build and deploy straight to Github pages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"USE_SSH=true yarn deploy\n")),(0,r.kt)("p",null,"You can also use the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GIT_USER=<your_Github_Username> yarn deploy\n")))}i.isMDXComponent=!0}}]);