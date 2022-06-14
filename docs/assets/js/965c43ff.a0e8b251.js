"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89122],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},12129:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"processTargets_modifiers_SurroundingPairStage.SurroundingPairStage",title:"Class: SurroundingPairStage",sidebar_label:"SurroundingPairStage",custom_edit_url:null},l=void 0,u={unversionedId:"contributing/api/classes/processTargets_modifiers_SurroundingPairStage.SurroundingPairStage",id:"contributing/api/classes/processTargets_modifiers_SurroundingPairStage.SurroundingPairStage",title:"Class: SurroundingPairStage",description:"processTargets/modifiers/SurroundingPairStage.SurroundingPairStage",source:"@site/../docs/contributing/api/classes/processTargets_modifiers_SurroundingPairStage.SurroundingPairStage.md",sourceDirName:"contributing/api/classes",slug:"/contributing/api/classes/processTargets_modifiers_SurroundingPairStage.SurroundingPairStage",permalink:"/docs/contributing/api/classes/processTargets_modifiers_SurroundingPairStage.SurroundingPairStage",editUrl:null,tags:[],version:"current",frontMatter:{id:"processTargets_modifiers_SurroundingPairStage.SurroundingPairStage",title:"Class: SurroundingPairStage",sidebar_label:"SurroundingPairStage",custom_edit_url:null},sidebar:"contributing",previous:{title:"RawSelectionStage",permalink:"/docs/contributing/api/classes/processTargets_modifiers_RawSelectionStage.RawSelectionStage"},next:{title:"default",permalink:"/docs/contributing/api/classes/processTargets_modifiers_scopeTypeStages_ContainingSyntaxScopeStage.default"}},p={},d=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"run",id:"run",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:d};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/processTargets_modifiers_SurroundingPairStage"},"processTargets/modifiers/SurroundingPairStage"),".SurroundingPairStage"),(0,i.kt)("p",null,"Applies the surrounding pair modifier to the given selection. First looks to\nsee if the target is itself adjacent to or contained by a modifier token. If\nso it will expand the selection to the opposite delimiter token. Otherwise,\nor if the opposite token wasn't found, it will proceed by finding the\nsmallest pair of delimiters which contains the selection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," Context to be leveraged by modifier"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," The selection to process"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," The surrounding pair modifier information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"returns"))," The new selection expanded to the containing surrounding pair or\n",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if none was found"),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/api/interfaces/processTargets_PipelineStages_types.ModifierStage"},(0,i.kt)("inlineCode",{parentName:"a"},"ModifierStage")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new SurroundingPairStage"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"modifier"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"modifier")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_targetDescriptor_types.ContainingSurroundingPairModifier"},(0,i.kt)("inlineCode",{parentName:"a"},"ContainingSurroundingPairModifier")))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/6709f39/src/processTargets/modifiers/SurroundingPairStage.ts#L22"},"src/processTargets/modifiers/SurroundingPairStage.ts:22")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"run"},"run"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"run"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"context"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/processTargets_targets_SurroundingPairTarget.SurroundingPairTarget"},(0,i.kt)("inlineCode",{parentName:"a"},"SurroundingPairTarget")),"[]"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_Types.ProcessedTargetsContext"},(0,i.kt)("inlineCode",{parentName:"a"},"ProcessedTargetsContext")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_target_types.Target"},(0,i.kt)("inlineCode",{parentName:"a"},"Target")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/processTargets_targets_SurroundingPairTarget.SurroundingPairTarget"},(0,i.kt)("inlineCode",{parentName:"a"},"SurroundingPairTarget")),"[]"),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/processTargets_PipelineStages_types.ModifierStage"},"ModifierStage"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/processTargets_PipelineStages_types.ModifierStage#run"},"run")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/6709f39/src/processTargets/modifiers/SurroundingPairStage.ts#L24"},"src/processTargets/modifiers/SurroundingPairStage.ts:24")))}g.isMDXComponent=!0}}]);