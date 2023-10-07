"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7502],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return t?n.createElement(g,i(i({ref:a},m),{},{components:t})):n.createElement(g,i({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8097:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2,slug:"installing-rebased",title:"Installing Rebased"},i=void 0,l={unversionedId:"rebased-and-soapbox-tutorials/installing-rebased",id:"rebased-and-soapbox-tutorials/installing-rebased",title:"Installing Rebased",description:"Now that you have a VPS and domain name ready, let's begin with installing Rebased first.",source:"@site/docs/rebased-and-soapbox-tutorials/02-installing-rebased.md",sourceDirName:"rebased-and-soapbox-tutorials",slug:"/rebased-and-soapbox-tutorials/installing-rebased",permalink:"/notes/docs/rebased-and-soapbox-tutorials/installing-rebased",draft:!1,editUrl:"https://github.com/jsailo/notes/tree/main/docs/rebased-and-soapbox-tutorials/02-installing-rebased.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"installing-rebased",title:"Installing Rebased"},sidebar:"tutorialSidebar",previous:{title:"Choosing a VPS and domain name",permalink:"/notes/docs/rebased-and-soapbox-tutorials/choosing-vps-domain-name-rebased-soapbox"},next:{title:"Installing Soapbox",permalink:"/notes/docs/rebased-and-soapbox-tutorials/installing-soapbox"}},s={},p=[],m={toc:p},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that you have a VPS and domain name ready, let's begin with installing Rebased first."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following commands to update and ugrade your fresh Ubuntu machine."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt update -y\napt upgrade -y\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," flag is similar to your Windows ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes to all")," button."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the system dependencies. These are needed for your Rebased installation to function properly."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install git curl build-essential postgresql postgresql-contrib cmake libmagic-dev imagemagick ffmpeg libimage-exiftool-perl nginx certbot unzip libssl-dev automake autoconf libncurses5-dev fasttext\n")),(0,r.kt)("p",{parentName:"li"},"A brief description of some of these dependencies."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"postgresql: The free and open-source PostgreSQL database"),(0,r.kt)("li",{parentName:"ul"},"imagemagick: Pronounced 'Image Magick', this tool converts and optimizes images uploaded to your website, like resize overtly large images (image scaling) or convert them into another format."),(0,r.kt)("li",{parentName:"ul"},"ffmpeg: Optimizes videos uploaded to your website, such as resizing (file size) or converting uploaded videos to another format so they are served in a format that's best for visitors of your website."),(0,r.kt)("li",{parentName:"ul"},"nginx: This is a configuration file that allows you to control the nitty gritties of your server. "),(0,r.kt)("li",{parentName:"ul"},"certbot: This allows you to fetch certificates from certbot. The ",(0,r.kt)("inlineCode",{parentName:"li"},"https")," you see on websites is because of this."),(0,r.kt)("li",{parentName:"ul"},"unzip: A utility for unzipping files on your server. Take it as, 'the Winzip of Linux'."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the Pleroma user. Here, you are creating a new user called ",(0,r.kt)("inlineCode",{parentName:"p"},"Pleroma")," in the Ubuntu machine. This is the user with which you will interact with your Rebased installation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"useradd -r -s /bin/false -m -d /var/lib/pleroma -U pleroma\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the Rebased source code."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone -b develop https://gitlab.com/soapbox-pub/rebased /opt/pleroma\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change ownership to the Pleroma user."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chown -R pleroma:pleroma /opt/pleroma\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the source code directory and make yourself the Pleroma user."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/pleroma\nsudo -Hu pleroma bash\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rebased uses the Elixir programming language (based on Erlang). It\u2019s important we use a specific version of Erlang (24), so we\u2019ll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"asdf")," version manager to install it. Yes, that's ",(0,r.kt)("inlineCode",{parentName:"p"},"asdf"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0\necho ". $HOME/.asdf/asdf.sh" >> ~/.bashrc\necho ". $HOME/.asdf/completions/asdf.bash" >> ~/.bashrc\nexec bash\nasdf plugin-add erlang\nasdf plugin-add elixir\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Almost there. Install Erlang/Elixir."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"asdf install \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Compile Rebased."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mix local.hex --force\nmix local.rebar --force\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fetch Elixir dependencies."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mix deps.get\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, compile Soapbox."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MIX_ENV=prod mix compile\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"This will take a good 10 minutes \ud83d\udd59. Go grab and make a Maggi or some noodles \ud83c\udf5c\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate the configuration. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MIX_ENV=prod mix pleroma.instance gen\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rename the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"generated_config.exs")," file to ",(0,r.kt)("inlineCode",{parentName:"p"},"prod.secret.exs")," so it gets loaded at runtime"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv config/generated_config.exs config/prod.secret.exs\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provision the database. The previous section also created a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"config/setup_db.psql"),", which you can use to create the database. Now exit and get back to being the root user (for the remainder of this document). "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"exit\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the SQL file as the postgres user:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -Hu postgres psql -f config/setup_db.psql\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now run the database migration as the pleroma user:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -Hu pleroma bash -i -c 'MIX_ENV=prod mix ecto.migrate'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"pleroma.service")," file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp /opt/pleroma/installation/pleroma.service /etc/systemd/system/pleroma.service\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable the Pleroma service."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable --now pleroma.service\n")))))}c.isMDXComponent=!0}}]);