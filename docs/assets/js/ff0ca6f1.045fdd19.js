"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13725],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"processTargets",title:"Module: processTargets",sidebar_label:"processTargets",sidebar_position:0,custom_edit_url:null},l=void 0,c={unversionedId:"contributing/api/modules/processTargets",id:"contributing/api/modules/processTargets",title:"Module: processTargets",description:"Functions",source:"@site/../docs/contributing/api/modules/processTargets.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/processTargets",permalink:"/docs/contributing/api/modules/processTargets",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"processTargets",title:"Module: processTargets",sidebar_label:"processTargets",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"languages/typescript",permalink:"/docs/contributing/api/modules/languages_typescript"},next:{title:"processTargets/modifiers/processModifier",permalink:"/docs/contributing/api/modules/processTargets_modifiers_processModifier"}},p={},u=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"default"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"context"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"targets"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.TypedSelection"},(0,i.kt)("inlineCode",{parentName:"a"},"TypedSelection")),"[][]"),(0,i.kt)("p",null,'Converts the abstract target descriptions provided by the user to a concrete\nrepresentation usable by actions. Conceptually, the input will be something\nlike "the function call argument containing the cursor" and the output will be something\nlike "line 3, characters 5 through 10".'),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_Types.ProcessedTargetsContext"},(0,i.kt)("inlineCode",{parentName:"a"},"ProcessedTargetsContext"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Captures the environment needed to convert the abstract target    description given by the user to a concrete representation usable by    actions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"targets")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/modules/typings_Types#target"},(0,i.kt)("inlineCode",{parentName:"a"},"Target")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The abstract target representations provided by the user")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.TypedSelection"},(0,i.kt)("inlineCode",{parentName:"a"},"TypedSelection")),"[][]"),(0,i.kt)("p",null,"A list of lists of typed selections, one list per input target. Each\ntyped selection includes the selection, as well the uri of the document\ncontaining it, and potentially rich context information such as how to remove\nthe target"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/processTargets/index.ts#L30"},"src/processTargets/index.ts:30")))}f.isMDXComponent=!0}}]);