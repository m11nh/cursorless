"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9368],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return p}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),d=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=d(t),p=i,g=f["".concat(u,".").concat(p)]||f[p]||l[p]||s;return t?n.createElement(g,a(a({ref:r},c),{},{components:t})):n.createElement(g,a({ref:r},c))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=f;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var d=2;d<s;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75109:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return l}});var n=t(87462),i=t(63366),s=(t(67294),t(3905)),a=["components"],o={id:"processTargets_modifiers_surroundingPair_getSurroundingPairOffsets",title:"Module: processTargets/modifiers/surroundingPair/getSurroundingPairOffsets",sidebar_label:"processTargets/modifiers/surroundingPair/getSurroundingPairOffsets",sidebar_position:0,custom_edit_url:null},u=void 0,d={unversionedId:"contributing/api/modules/processTargets_modifiers_surroundingPair_getSurroundingPairOffsets",id:"contributing/api/modules/processTargets_modifiers_surroundingPair_getSurroundingPairOffsets",title:"Module: processTargets/modifiers/surroundingPair/getSurroundingPairOffsets",description:"Functions",source:"@site/../docs/contributing/api/modules/processTargets_modifiers_surroundingPair_getSurroundingPairOffsets.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/processTargets_modifiers_surroundingPair_getSurroundingPairOffsets",permalink:"/docs/contributing/api/modules/processTargets_modifiers_surroundingPair_getSurroundingPairOffsets",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"processTargets_modifiers_surroundingPair_getSurroundingPairOffsets",title:"Module: processTargets/modifiers/surroundingPair/getSurroundingPairOffsets",sidebar_label:"processTargets/modifiers/surroundingPair/getSurroundingPairOffsets",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"processTargets/modifiers/surroundingPair/getIndividualDelimiters",permalink:"/docs/contributing/api/modules/processTargets_modifiers_surroundingPair_getIndividualDelimiters"},next:{title:"processTargets/modifiers/surroundingPair/types",permalink:"/docs/contributing/api/modules/processTargets_modifiers_surroundingPair_types"}},c={},l=[{value:"Functions",id:"functions",level:2},{value:"getSurroundingPairOffsets",id:"getsurroundingpairoffsets",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],f={toc:l};function p(e){var r=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"getsurroundingpairoffsets"},"getSurroundingPairOffsets"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getSurroundingPairOffsets"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"delimiter1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"delimiter2"),"): ",(0,s.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/processTargets_modifiers_surroundingPair_types.SurroundingPairOffsets"},(0,s.kt)("inlineCode",{parentName:"a"},"SurroundingPairOffsets"))),(0,s.kt)("p",null,"Given a pair of delimiters, returns a pair of start and end offsets"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"delimiter1")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/processTargets_modifiers_surroundingPair_types.DelimiterOccurrence"},(0,s.kt)("inlineCode",{parentName:"a"},"DelimiterOccurrence"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The first delimiter occurrence")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"delimiter2")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/processTargets_modifiers_surroundingPair_types.DelimiterOccurrence"},(0,s.kt)("inlineCode",{parentName:"a"},"DelimiterOccurrence"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The second delimiter occurrence")))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/processTargets_modifiers_surroundingPair_types.SurroundingPairOffsets"},(0,s.kt)("inlineCode",{parentName:"a"},"SurroundingPairOffsets"))),(0,s.kt)("p",null,"A pair of start and end offsets for the given delimiters"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/0d1004b/src/processTargets/modifiers/surroundingPair/getSurroundingPairOffsets.ts#L10"},"src/processTargets/modifiers/surroundingPair/getSurroundingPairOffsets.ts:10")))}p.isMDXComponent=!0}}]);