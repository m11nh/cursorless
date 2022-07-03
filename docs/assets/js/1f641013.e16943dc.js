"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95891],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=i,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},42654:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"processTargets_modifiers_surroundingPair_weaklyContains",title:"Module: processTargets/modifiers/surroundingPair/weaklyContains",sidebar_label:"processTargets/modifiers/surroundingPair/weaklyContains",sidebar_position:0,custom_edit_url:null},l=void 0,u={unversionedId:"contributing/api/modules/processTargets_modifiers_surroundingPair_weaklyContains",id:"contributing/api/modules/processTargets_modifiers_surroundingPair_weaklyContains",title:"Module: processTargets/modifiers/surroundingPair/weaklyContains",description:"Functions",source:"@site/../docs/contributing/api/modules/processTargets_modifiers_surroundingPair_weaklyContains.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/processTargets_modifiers_surroundingPair_weaklyContains",permalink:"/docs/contributing/api/modules/processTargets_modifiers_surroundingPair_weaklyContains",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"processTargets_modifiers_surroundingPair_weaklyContains",title:"Module: processTargets/modifiers/surroundingPair/weaklyContains",sidebar_label:"processTargets/modifiers/surroundingPair/weaklyContains",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"processTargets/modifiers/surroundingPair/types",permalink:"/docs/contributing/api/modules/processTargets_modifiers_surroundingPair_types"},next:{title:"processTargets/modifiers/toPositionTarget",permalink:"/docs/contributing/api/modules/processTargets_modifiers_toPositionTarget"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"weaklyContains",id:"weaklycontains",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"weaklycontains"},"weaklyContains"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"weaklyContains"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"offsets1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"offsets2"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Determines whether {@link offsets1} weakly contains {@link offsets2}, which\ndefined as the boundaries of {@link offsets1} being inside or equal to the\nboundaries of {@link offsets2}."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"offsets1")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/processTargets_modifiers_surroundingPair_types.Offsets"},(0,a.kt)("inlineCode",{parentName:"a"},"Offsets"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The first set of offsets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"offsets2")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/processTargets_modifiers_surroundingPair_types.Offsets"},(0,a.kt)("inlineCode",{parentName:"a"},"Offsets"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The second set of offsets")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")," if {@link offsets1} weakly contains {@link offsets2}"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/492e56f/src/processTargets/modifiers/surroundingPair/weaklyContains.ts#L11"},"src/processTargets/modifiers/surroundingPair/weaklyContains.ts:11")))}f.isMDXComponent=!0}}]);