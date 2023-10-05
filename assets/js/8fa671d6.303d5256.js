"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5859],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),g=n,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return r?o.createElement(d,i(i({ref:t},c),{},{components:r})):o.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:n,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1,slug:"cloning-docusaurus-from-github",title:"Installing Docusaurus"},i=void 0,u={unversionedId:"tutorial-docusaurus/clone-from-github",id:"tutorial-docusaurus/clone-from-github",title:"Installing Docusaurus",description:"Installing Docusaurus involves:",source:"@site/docs/tutorial-docusaurus/clone-from-github.md",sourceDirName:"tutorial-docusaurus",slug:"/tutorial-docusaurus/cloning-docusaurus-from-github",permalink:"/notes/docs/tutorial-docusaurus/cloning-docusaurus-from-github",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/tutorial-docusaurus/clone-from-github.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"cloning-docusaurus-from-github",title:"Installing Docusaurus"},sidebar:"tutorialSidebar",previous:{title:"Docusaurus",permalink:"/notes/docs/category/docusaurus"},next:{title:"Building and running Docusaurus locally",permalink:"/notes/docs/tutorial-docusaurus/modifying-the-docusaurus-front-page"}},l={},s=[{value:"Creating your Github repository",id:"creating-your-github-repository",level:2},{value:"Cloning the created repository to your local computer",id:"cloning-the-created-repository-to-your-local-computer",level:2},{value:"Running the npx command to fetch and create the Docusaurus files on your local computer",id:"running-the-npx-command-to-fetch-and-create-the-docusaurus-files-on-your-local-computer",level:2},{value:"Cloning from github, modifying the files, and pushing your changes.",id:"cloning-from-github-modifying-the-files-and-pushing-your-changes",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Installing Docusaurus involves:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Creating your Github repository."),(0,n.kt)("li",{parentName:"ol"},"Cloning your created Github repository to your local computer."),(0,n.kt)("li",{parentName:"ol"},"Running the npx command to create the Docusaurus files. We will use the classic template for this tutorial."),(0,n.kt)("li",{parentName:"ol"},"Making changes to the default files and pushing them to your Github repository.")),(0,n.kt)("h2",{id:"creating-your-github-repository"},"Creating your Github repository"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new repository in Github")),(0,n.kt)("h2",{id:"cloning-the-created-repository-to-your-local-computer"},"Cloning the created repository to your local computer"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cloning the created Github repository on your local computer."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:<YourGithubUsername/your_repository_name.git\n")))),(0,n.kt)("h2",{id:"running-the-npx-command-to-fetch-and-create-the-docusaurus-files-on-your-local-computer"},"Running the npx command to fetch and create the Docusaurus files on your local computer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"We will use the classic template for this tutorial\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the following command"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest my-website classic\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If all goes well, you'll see the following message."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-Notes"},"Happy building awesome websites!\n")))),(0,n.kt)("h2",{id:"cloning-from-github-modifying-the-files-and-pushing-your-changes"},"Cloning from github, modifying the files, and pushing your changes."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change the directory on your local computer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Initialize your git repository on the folder"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git init\ngit add\ngit commit -m "First commit"\ngit branch -M main\ngit remote add origin git@github.com:<your_github_username>/notes.git\ngit push\n')))))}m.isMDXComponent=!0}}]);