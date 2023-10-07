"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[8257],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,slug:"cloning-docusaurus-from-github"},i="Cloning from github",u={unversionedId:"docusaurus-tutorials/cloning-from-github",id:"docusaurus-tutorials/cloning-from-github",title:"Cloning from github",description:"Cloning from github, modify the files, and push your changes.",source:"@site/docs/docusaurus-tutorials/cloning-from-github.md",sourceDirName:"docusaurus-tutorials",slug:"/docusaurus-tutorials/cloning-docusaurus-from-github",permalink:"/notes/docs/docusaurus-tutorials/cloning-docusaurus-from-github",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/docusaurus-tutorials/cloning-from-github.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"cloning-docusaurus-from-github"},sidebar:"tutorialSidebar",previous:{title:"Docusaurus",permalink:"/notes/docs/category/docusaurus"},next:{title:"Deploying to github pages",permalink:"/notes/docs/docusaurus-tutorials/deploying-to-github-pages"}},l={},s=[{value:"Steps",id:"steps",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloning-from-github"},"Cloning from github"),(0,o.kt)("p",null,"Cloning from github, modify the files, and push your changes."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("hr",null),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new repository in Github.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the repository link.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the repository on your local computer. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:<YourGithubUsername>/<YourRepositoryName>.git\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the directory to your repository. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <Your_Repository_Directory>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following in your shell."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest notes classic\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If all goes well, you'll see the following message."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-Notes"},"Happy building awesome websites!\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change to the docusaurus directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Initialize your git on the folder"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git init\ngit add\ngit commit -m "First commit"\ngit branch -M main\ngit remote add origin git@github.com:<your_github_username>/notes.git\ngit push\n')))))}m.isMDXComponent=!0}}]);