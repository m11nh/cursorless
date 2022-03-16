"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28552],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return g}});var i=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,i,a=function(t,e){if(null==t)return{};var r,i,a={},n=Object.keys(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=i.createContext({}),o=function(t){var e=i.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=o(t.components);return i.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=o(r),g=a,c=d["".concat(p,".").concat(g)]||d[g]||m[g]||n;return r?i.createElement(c,l(l({ref:e},u),{},{components:r})):i.createElement(c,l({ref:e},u))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,l=new Array(n);l[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var o=2;o<n;o++)l[o]=r[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26836:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return m}});var i=r(87462),a=r(63366),n=(r(67294),r(3905)),l=["components"],s={id:"util_getPrimitiveTargets",title:"Module: util/getPrimitiveTargets",sidebar_label:"util/getPrimitiveTargets",sidebar_position:0,custom_edit_url:null},p=void 0,o={unversionedId:"contributing/api/modules/util_getPrimitiveTargets",id:"contributing/api/modules/util_getPrimitiveTargets",title:"Module: util/getPrimitiveTargets",description:"Functions",source:"@site/../docs/contributing/api/modules/util_getPrimitiveTargets.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/util_getPrimitiveTargets",permalink:"/docs/contributing/api/modules/util_getPrimitiveTargets",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"util_getPrimitiveTargets",title:"Module: util/getPrimitiveTargets",sidebar_label:"util/getPrimitiveTargets",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"util/getLinks",permalink:"/docs/contributing/api/modules/util_getLinks"},next:{title:"util/getTextWithPossibleDelimiter",permalink:"/docs/contributing/api/modules/util_getTextWithPossibleDelimiter"}},u={},m=[{value:"Functions",id:"functions",level:2},{value:"getPartialPrimitiveTargets",id:"getpartialprimitivetargets",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getPrimitiveTargets",id:"getprimitivetargets",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"transformPartialPrimitiveTargets",id:"transformpartialprimitivetargets",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:m};function g(t){var e=t.components,r=(0,a.Z)(t,l);return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"getpartialprimitivetargets"},"getPartialPrimitiveTargets"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getPartialPrimitiveTargets"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"targets"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.PartialPrimitiveTarget"},(0,n.kt)("inlineCode",{parentName:"a"},"PartialPrimitiveTarget")),"[]"),(0,n.kt)("p",null,"Given a list of targets, recursively descends all targets and returns every\ncontained primitive target."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"targets")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/contributing/api/modules/typings_Types#partialtarget"},(0,n.kt)("inlineCode",{parentName:"a"},"PartialTarget")),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The targets to extract from")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.PartialPrimitiveTarget"},(0,n.kt)("inlineCode",{parentName:"a"},"PartialPrimitiveTarget")),"[]"),(0,n.kt)("p",null,"A list of primitive targets"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/util/getPrimitiveTargets.ts#L16"},"src/util/getPrimitiveTargets.ts:16")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getprimitivetargets"},"getPrimitiveTargets"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getPrimitiveTargets"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"targets"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.PrimitiveTarget"},(0,n.kt)("inlineCode",{parentName:"a"},"PrimitiveTarget")),"[]"),(0,n.kt)("p",null,"Given a list of targets, recursively descends all targets and returns every\ncontained primitive target."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"targets")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/contributing/api/modules/typings_Types#target"},(0,n.kt)("inlineCode",{parentName:"a"},"Target")),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The targets to extract from")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.PrimitiveTarget"},(0,n.kt)("inlineCode",{parentName:"a"},"PrimitiveTarget")),"[]"),(0,n.kt)("p",null,"A list of primitive targets"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/util/getPrimitiveTargets.ts#L39"},"src/util/getPrimitiveTargets.ts:39")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"transformpartialprimitivetargets"},"transformPartialPrimitiveTargets"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"transformPartialPrimitiveTargets"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"targets"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"func"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/typings_Types#partialtarget"},(0,n.kt)("inlineCode",{parentName:"a"},"PartialTarget")),"[]"),(0,n.kt)("p",null,"Given a list of targets, recursively descends all targets and applies ",(0,n.kt)("inlineCode",{parentName:"p"},"func"),"\nto every primitive target."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"targets")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/contributing/api/modules/typings_Types#partialtarget"},(0,n.kt)("inlineCode",{parentName:"a"},"PartialTarget")),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The targets to extract from")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(",(0,n.kt)("inlineCode",{parentName:"td"},"target"),": ",(0,n.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_Types.PartialPrimitiveTarget"},(0,n.kt)("inlineCode",{parentName:"a"},"PartialPrimitiveTarget")),") => ",(0,n.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_Types.PartialPrimitiveTarget"},(0,n.kt)("inlineCode",{parentName:"a"},"PartialPrimitiveTarget"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/typings_Types#partialtarget"},(0,n.kt)("inlineCode",{parentName:"a"},"PartialTarget")),"[]"),(0,n.kt)("p",null,"A list of primitive targets"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/util/getPrimitiveTargets.ts#L61"},"src/util/getPrimitiveTargets.ts:61")))}g.isMDXComponent=!0}}]);