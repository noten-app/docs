"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5465],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const s={sidebar_position:4,title:"Subjects",tags:["Auth","Authentication","Login","Token","Tokens","Refresh","Refresh Token","Refresh Tokens"]},o=void 0,l={unversionedId:"endpoints/subjects",id:"endpoints/subjects",title:"Subjects",description:"Endpoints and Methods",source:"@site/docs/endpoints/subjects.md",sourceDirName:"endpoints",slug:"/endpoints/subjects",permalink:"/next/endpoints/subjects",draft:!1,editUrl:"https://github.com/noten-app/docs/tree/main/docs/endpoints/subjects.md",tags:[{label:"Auth",permalink:"/next/tags/auth"},{label:"Authentication",permalink:"/next/tags/authentication"},{label:"Login",permalink:"/next/tags/login"},{label:"Token",permalink:"/next/tags/token"},{label:"Tokens",permalink:"/next/tags/tokens"},{label:"Refresh",permalink:"/next/tags/refresh"},{label:"Refresh Token",permalink:"/next/tags/refresh-token"},{label:"Refresh Tokens",permalink:"/next/tags/refresh-tokens"}],version:"current",lastUpdatedBy:"Konstantin Protzen",lastUpdatedAt:1699119492,formattedLastUpdatedAt:"Nov 4, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Subjects",tags:["Auth","Authentication","Login","Token","Tokens","Refresh","Refresh Token","Refresh Tokens"]},sidebar:"tutorialSidebar",previous:{title:"Years",permalink:"/next/endpoints/years"},next:{title:"Grades",permalink:"/next/endpoints/grades"}},i={},u=[{value:"Endpoints and Methods",id:"endpoints-and-methods",level:2},{value:"GET /subjects/",id:"get-subjects",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"GET /subjects/{:id}",id:"get-subjectsid",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"POST /subjects/",id:"post-subjects",level:2},{value:"Request",id:"request-2",level:3},{value:"Response",id:"response-2",level:3},{value:"DELETE /subjects/{:id}",id:"delete-subjectsid",level:2},{value:"Request",id:"request-3",level:3},{value:"Response",id:"response-3",level:3},{value:"PATCH /subjects/{:id}",id:"patch-subjectsid",level:2},{value:"Request",id:"request-4",level:3},{value:"Response",id:"response-4",level:3}],p={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"endpoints-and-methods"},"Endpoints and Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoints"),(0,r.kt)("th",{parentName:"tr",align:null},"Methods"),(0,r.kt)("th",{parentName:"tr",align:null},"Use"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"Get a List of all Subjects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/{:year}/"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"Get a List of all Subjects for year {:year}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new Subject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/{:id}/"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a Subject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/{:id}/"),(0,r.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"Change Subject details")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If possible, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"year")," parameter to get a list of subjects for a specific year.",(0,r.kt)("br",{parentName:"p"}),"\n","This will improve performance and reduce the amount of data that needs to be transferred.")),(0,r.kt)("h2",{id:"get-subjects"},"GET /subjects/"),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "GET",\n  url: "https://api.noten-app.de/v2/subjects",\n  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Mathematics",\n    "color": "ffffff",\n    "user_id": "5negptbo-lt6v-9qos-ws1a-1s5qxe36k3op",\n    "id": 3,\n    "last_used": "2023-06-29T00:00:00.000Z",\n    "grade_k": 60,\n    "grade_m": 30,\n    "grade_t": "10",\n    "grade_s": 0,\n    "average": 2.16667,\n    "year": "sjdu6a9j"\n  },\n  {\n    "name": "English",\n    "color": "dddd00",\n    "user_id": "5negptbo-lt6v-9qos-ws1a-1s5qxe36k3op",\n    "id": 1,\n    "last_used": "2023-07-10T00:00:00.000Z",\n    "grade_k": 60,\n    "grade_m": 40,\n    "grade_t": "1exam",\n    "grade_s": 0,\n    "average": 2.69118,\n    "year": "a76ak8g8"\n  }\n]\n')),(0,r.kt)("h2",{id:"get-subjectsid"},"GET /subjects/{:id}"),(0,r.kt)("h3",{id:"request-1"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "GET",\n  url: "https://api.noten-app.de/v2/subjects/a76ak8g8",\n  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "English",\n    "color": "dddd00",\n    "user_id": "5negptbo-lt6v-9qos-ws1a-1s5qxe36k3op",\n    "id": 1,\n    "last_used": "2023-07-10T00:00:00.000Z",\n    "grade_k": 60,\n    "grade_m": 40,\n    "grade_t": "1exam",\n    "grade_s": 0,\n    "average": 2.69118,\n    "year": "a76ak8g8"\n  }\n]\n')),(0,r.kt)("h2",{id:"post-subjects"},"POST /subjects/"),(0,r.kt)("h3",{id:"request-2"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "POST",\n  url: "https://api.noten-app.de/v2/subjects",\n  headers: {\n    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",\n    "Content-Type": "application/json",\n  },\n  data: {\n    name: "Mathematics",\n    color: "4e083f",\n    grade_k: 35,\n    grade_m: 45,\n    grade_t: "1exam",\n    grade_s: 10,\n    year: "a76ak8g8",\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response-2"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "id": 148\n}\n')),(0,r.kt)("h2",{id:"delete-subjectsid"},"DELETE /subjects/{:id}"),(0,r.kt)("h3",{id:"request-3"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "DELETE",\n  url: "https://api.noten-app.de/v2/subjects/42",\n  headers: {\n    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response-3"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true\n}\n')),(0,r.kt)("h2",{id:"patch-subjectsid"},"PATCH /subjects/{:id}"),(0,r.kt)("h3",{id:"request-4"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "PATCH",\n  url: "https://api.noten-app.de/v2/subjects/42",\n  headers: {\n    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",\n    "Content-Type": "application/json",\n  },\n  data: {\n    name: "Mathematik",\n    color: "4e083f",\n    grade_k: 35,\n    grade_m: 45,\n    grade_t: 5,\n    grade_s: 5,\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response-4"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true\n}\n')))}c.isMDXComponent=!0}}]);