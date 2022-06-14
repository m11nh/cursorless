"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43338],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,g=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83213:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"core_updateSelections_getUpdatedText",title:"Module: core/updateSelections/getUpdatedText",sidebar_label:"core/updateSelections/getUpdatedText",sidebar_position:0,custom_edit_url:null},p=void 0,d={unversionedId:"contributing/api/modules/core_updateSelections_getUpdatedText",id:"contributing/api/modules/core_updateSelections_getUpdatedText",title:"Module: core/updateSelections/getUpdatedText",description:"Functions",source:"@site/../docs/contributing/api/modules/core_updateSelections_getUpdatedText.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/core_updateSelections_getUpdatedText",permalink:"/docs/contributing/api/modules/core_updateSelections_getUpdatedText",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"core_updateSelections_getUpdatedText",title:"Module: core/updateSelections/getUpdatedText",sidebar_label:"core/updateSelections/getUpdatedText",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"core/updateSelections/getOffsetsForNonEmptyRangeInsert",permalink:"/docs/contributing/api/modules/core_updateSelections_getOffsetsForNonEmptyRangeInsert"},next:{title:"core/updateSelections/updateRangeInfos",permalink:"/docs/contributing/api/modules/core_updateSelections_updateRangeInfos"}},c={},s=[{value:"Functions",id:"functions",level:2},{value:"getUpdatedText",id:"getupdatedtext",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"getupdatedtext"},"getUpdatedText"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getUpdatedText"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"changeEventInfo"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rangeInfo"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"newOffsets"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Updates the text of the given rangeInfo to take into account the given change."),(0,o.kt)("p",null,"The process is to first include any text from the original range that is\nbefore the range of the change, then add the text of the change, then add any\ntext that trails the original change range.  Then we take a substring\ncorresponding to the range's new offsets."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"changeEventInfo")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_updateSelections.ChangeEventInfo"},(0,o.kt)("inlineCode",{parentName:"a"},"ChangeEventInfo"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The change to incorporate")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"rangeInfo")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_updateSelections.FullRangeInfo"},(0,o.kt)("inlineCode",{parentName:"a"},"FullRangeInfo"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The rangeInfo to update")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"newOffsets")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_updateSelections.RangeOffsets"},(0,o.kt)("inlineCode",{parentName:"a"},"RangeOffsets"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The new offsets that the rangeInfo will have")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The new text of the range"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/6709f39/src/core/updateSelections/getUpdatedText.ts#L20"},"src/core/updateSelections/getUpdatedText.ts:20")))}f.isMDXComponent=!0}}]);