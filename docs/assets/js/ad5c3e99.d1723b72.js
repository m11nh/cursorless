"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30478],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"util_getTokenComparator",title:"Module: util/getTokenComparator",sidebar_label:"util/getTokenComparator",sidebar_position:0,custom_edit_url:null},p=void 0,u={unversionedId:"contributing/api/modules/util_getTokenComparator",id:"contributing/api/modules/util_getTokenComparator",title:"Module: util/getTokenComparator",description:"Functions",source:"@site/../docs/contributing/api/modules/util_getTokenComparator.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/util_getTokenComparator",permalink:"/docs/contributing/api/modules/util_getTokenComparator",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"util_getTokenComparator",title:"Module: util/getTokenComparator",sidebar_label:"util/getTokenComparator",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"util/getTextWithPossibleDelimiter",permalink:"/docs/contributing/api/modules/util_getTextWithPossibleDelimiter"},next:{title:"util/getTokensInRange",permalink:"/docs/contributing/api/modules/util_getTokensInRange"}},s={},c=[{value:"Functions",id:"functions",level:2},{value:"getTokenComparator",id:"gettokencomparator",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in",level:4}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"gettokencomparator"},"getTokenComparator"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getTokenComparator"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"selectionDisplayLine"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"selectionCharacterIndex"),"): (",(0,i.kt)("inlineCode",{parentName:"p"},"a"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.Token"},(0,i.kt)("inlineCode",{parentName:"a"},"Token")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.Token"},(0,i.kt)("inlineCode",{parentName:"a"},"Token")),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Gets a comparison function that can be used to sort tokens based on their\ndistance from the current cursor in terms of display lines."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"selectionDisplayLine")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The display line of the cursor location")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"selectionCharacterIndex")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The character index of current cursor within line")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fn")),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Gets a comparison function that can be used to sort tokens based on their\ndistance from the current cursor in terms of display lines."),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"a")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_Types.Token"},(0,i.kt)("inlineCode",{parentName:"a"},"Token")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_Types.Token"},(0,i.kt)("inlineCode",{parentName:"a"},"Token")))))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/util/getTokenComparator.ts#L9"},"src/util/getTokenComparator.ts:9")))}d.isMDXComponent=!0}}]);