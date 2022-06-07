"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55868],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"util_rangeUtils",title:"Module: util/rangeUtils",sidebar_label:"util/rangeUtils",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"contributing/api/modules/util_rangeUtils",id:"contributing/api/modules/util_rangeUtils",title:"Module: util/rangeUtils",description:"Functions",source:"@site/../docs/contributing/api/modules/util_rangeUtils.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/util_rangeUtils",permalink:"/docs/contributing/api/modules/util_rangeUtils",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"util_rangeUtils",title:"Module: util/rangeUtils",sidebar_label:"util/rangeUtils",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"util/range",permalink:"/docs/contributing/api/modules/util_range"},next:{title:"util/regex",permalink:"/docs/contributing/api/modules/util_regex"}},d={},u=[{value:"Functions",id:"functions",level:2},{value:"expandToFullLine",id:"expandtofullline",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"isAtEndOfLine",id:"isatendofline",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"isAtStartOfLine",id:"isatstartofline",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"makeEmptyRange",id:"makeemptyrange",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"expandtofullline"},"expandToFullLine"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"expandToFullLine"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"editor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Range"},(0,i.kt)("inlineCode",{parentName:"a"},"Range"))),(0,i.kt)("p",null,"Expands the given range to in the full line(s) containing it, including\nleading and trailing white space."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"editor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.TextEditor"},(0,i.kt)("inlineCode",{parentName:"a"},"TextEditor"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The editor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"range")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Range"},(0,i.kt)("inlineCode",{parentName:"a"},"Range"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The range to expand")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Range"},(0,i.kt)("inlineCode",{parentName:"a"},"Range"))),(0,i.kt)("p",null,"The expanded range"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/2ee7ca1/src/util/rangeUtils.ts#L21"},"src/util/rangeUtils.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isatendofline"},"isAtEndOfLine"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isAtEndOfLine"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"editor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"editor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.TextEditor"},(0,i.kt)("inlineCode",{parentName:"a"},"TextEditor")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"position")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Position"},(0,i.kt)("inlineCode",{parentName:"a"},"Position")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/2ee7ca1/src/util/rangeUtils.ts#L3"},"src/util/rangeUtils.ts:3")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isatstartofline"},"isAtStartOfLine"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isAtStartOfLine"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"position"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"position")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Position"},(0,i.kt)("inlineCode",{parentName:"a"},"Position")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/2ee7ca1/src/util/rangeUtils.ts#L9"},"src/util/rangeUtils.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"makeemptyrange"},"makeEmptyRange"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"makeEmptyRange"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"position"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Range"},(0,i.kt)("inlineCode",{parentName:"a"},"Range"))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"position")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Position"},(0,i.kt)("inlineCode",{parentName:"a"},"Position")))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Range"},(0,i.kt)("inlineCode",{parentName:"a"},"Range"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/2ee7ca1/src/util/rangeUtils.ts#L28"},"src/util/rangeUtils.ts:28")))}m.isMDXComponent=!0}}]);