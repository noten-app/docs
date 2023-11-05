"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=i(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||s;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=g;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:r,o[1]=d;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:5,title:"Grades",tags:["Grading","Grade","Grades","Mark","Marks","Note","Notes"]},o=void 0,d={unversionedId:"endpoints/grades",id:"endpoints/grades",title:"Grades",description:"Endpoints and Methods",source:"@site/docs/endpoints/grades.md",sourceDirName:"endpoints",slug:"/endpoints/grades",permalink:"/next/endpoints/grades",draft:!1,editUrl:"https://github.com/noten-app/docs/tree/main/docs/endpoints/grades.md",tags:[{label:"Grading",permalink:"/next/tags/grading"},{label:"Grade",permalink:"/next/tags/grade"},{label:"Grades",permalink:"/next/tags/grades"},{label:"Mark",permalink:"/next/tags/mark"},{label:"Marks",permalink:"/next/tags/marks"},{label:"Note",permalink:"/next/tags/note"},{label:"Notes",permalink:"/next/tags/notes"}],version:"current",lastUpdatedBy:"Konstantin Protzen",lastUpdatedAt:1699120881,formattedLastUpdatedAt:"Nov 4, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Grades",tags:["Grading","Grade","Grades","Mark","Marks","Note","Notes"]},sidebar:"tutorialSidebar",previous:{title:"Subjects",permalink:"/next/endpoints/subjects"},next:{title:"Settings",permalink:"/next/endpoints/settings"}},l={},i=[{value:"Endpoints and Methods",id:"endpoints-and-methods",level:2},{value:"GET /grades/{:classId}",id:"get-gradesclassid",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"POST /grades/{:classId}",id:"post-gradesclassid",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"DELETE /grades/{:gradeId}/",id:"delete-gradesgradeid",level:2},{value:"Request",id:"request-2",level:3},{value:"Response",id:"response-2",level:3},{value:"PATCH /grades/{:gradeId }/",id:"patch-gradesgradeid-",level:2},{value:"Request",id:"request-3",level:3},{value:"Response",id:"response-3",level:3}],p={toc:i},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"endpoints-and-methods"},"Endpoints and Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoints"),(0,r.kt)("th",{parentName:"tr",align:null},"Methods"),(0,r.kt)("th",{parentName:"tr",align:null},"Use"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/grades/{:classId}"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"Get a List of all Grades of class with ID {:classID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/grades/{:classId}"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new Grade in class with ID {:classID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/grades/{:gradeId}/"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a Grade")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/grades/{:gradeId}/"),(0,r.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"Change Grade details")))),(0,r.kt)("h2",{id:"get-gradesclassid"},"GET /grades/{:classId}"),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "GET",\n  url: "https://api.noten-app.de/v2/grades/a76ak8g8",\n  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "jqhugsad",\n    "subject": "idsa7jka",\n    "given": "2023-05-12",\n    "deadline": "2023-05-10",\n    "text": "Read p. 114+115",\n    "type": "b",\n    "status": 1\n  },\n  {\n    "id": "sadiuaz1",\n    "subject": "oiasdu87",\n    "given": "2023-04-09",\n    "deadline": "2023-07-18",\n    "text": "p. 12-14",\n    "type": "b",\n    "status": 1\n  }\n]\n')),(0,r.kt)("h2",{id:"post-gradesclassid"},"POST /grades/{:classId}"),(0,r.kt)("h3",{id:"request-1"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "POST",\n  url: "https://api.noten-app.de/v2/grades/a76ak8g8",\n  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },\n  data: {\n    subject: "idsa7jka",\n    given: "2023-07-22",\n    deadline: "2023-07-23",\n    text: "Read p. 118+119",\n    type: "w",\n    status: 1,\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "id": "jqhugsad"\n}\n')),(0,r.kt)("h2",{id:"delete-gradesgradeid"},"DELETE /grades/{:gradeId}/"),(0,r.kt)("h3",{id:"request-2"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "DELETE",\n  url: "https://api.noten-app.de/v2/grades/jqhugsad",\n  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response-2"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true\n}\n')),(0,r.kt)("h2",{id:"patch-gradesgradeid-"},"PATCH /grades/{:gradeId }/"),(0,r.kt)("h3",{id:"request-3"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "PATCH",\n  url: "https://api.noten-app.de/v2/grades/jqhugsad",\n  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },\n  data: {\n    subject: "idsa7jka",\n    given: "2023-07-22",\n    deadline: "2023-07-23",\n    text: "Read p. 120-125",\n    type: "w",\n    status: 1,\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response-3"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true\n}\n')))}c.isMDXComponent=!0}}]);