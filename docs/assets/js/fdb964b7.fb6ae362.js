"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58950],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44210:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],p={id:"typings_generic",title:"Module: typings/generic",sidebar_label:"typings/generic",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"contributing/api/modules/typings_generic",id:"contributing/api/modules/typings_generic",title:"Module: typings/generic",description:"Namespaces",source:"@site/../docs/contributing/api/modules/typings_generic.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/typings_generic",permalink:"/docs/contributing/api/modules/typings_generic",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"typings_generic",title:"Module: typings/generic",sidebar_label:"typings/generic",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"typings/Types",permalink:"/docs/contributing/api/modules/typings_Types"},next:{title:"typings/snippet",permalink:"/docs/contributing/api/modules/typings_snippet"}},c={},u=[{value:"Namespaces",id:"namespaces",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type aliases",id:"type-aliases",level:2},{value:"ObjectKeys",id:"objectkeys",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"namespaces"},"Namespaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/contributing/api/namespaces/typings_generic.internal"},"internal"))),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/contributing/api/interfaces/typings_generic.ObjectConstructor"},"ObjectConstructor"))),(0,a.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,a.kt)("h3",{id:"objectkeys"},"ObjectKeys"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"ObjectKeys"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," extends ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," ? keyof ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"[] : ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," extends ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ? [] : ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," extends ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[] ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ? ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[] : ",(0,a.kt)("inlineCode",{parentName:"p"},"never")),(0,a.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/typings/generic.ts#L2"},"src/typings/generic.ts:2")))}m.isMDXComponent=!0}}]);