"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44083],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92350:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"actions_BringMoveSwap.internal.Thenable",title:"Interface: Thenable<T>",sidebar_label:"Thenable",custom_edit_url:null},p=void 0,d={unversionedId:"contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable",id:"contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable",title:"Interface: Thenable<T>",description:"actions/BringMoveSwap.internal.Thenable",source:"@site/../docs/contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable.md",sourceDirName:"contributing/api/interfaces",slug:"/contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable",permalink:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable",editUrl:null,tags:[],version:"current",frontMatter:{id:"actions_BringMoveSwap.internal.Thenable",title:"Interface: Thenable<T>",sidebar_label:"Thenable",custom_edit_url:null},sidebar:"contributing",previous:{title:"ThemableDecorationInstanceRenderOptions",permalink:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.ThemableDecorationInstanceRenderOptions"},next:{title:"CommandOptions",permalink:"/docs/contributing/api/interfaces/actions_CommandAction.CommandOptions"}},s={},m=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"then",id:"then",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/actions_BringMoveSwap"},"actions/BringMoveSwap"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/namespaces/actions_BringMoveSwap.internal"},"internal"),".Thenable"),(0,i.kt)("p",null,"Thenable is a common denominator between ES6 promises, Q, jquery.Deferred, WinJS.Promise,\nand others. This API makes no assumption about what promise library is being used which\nenables reusing existing code without migrating to a specific promise implementation. Still,\nwe recommend the use of native promises which are available in this editor."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"then"},"then"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"then"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TResult"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"onfulfilled?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onrejected?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable"},(0,i.kt)("inlineCode",{parentName:"a"},"Thenable")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TResult"),">"),(0,i.kt)("p",null,"Attaches callbacks for the resolution and/or rejection of the Promise."),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TResult"))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onfulfilled?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"TResult")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable"},(0,i.kt)("inlineCode",{parentName:"a"},"Thenable")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"TResult"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The callback to execute when the Promise is resolved.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onrejected?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"reason"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"TResult")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable"},(0,i.kt)("inlineCode",{parentName:"a"},"Thenable")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"TResult"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The callback to execute when the Promise is rejected.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable"},(0,i.kt)("inlineCode",{parentName:"a"},"Thenable")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TResult"),">"),(0,i.kt)("p",null,"A Promise for the completion of which ever callback is executed."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"node_modules/@types/vscode/index.d.ts:14578"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"then"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TResult"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"onfulfilled?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onrejected?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable"},(0,i.kt)("inlineCode",{parentName:"a"},"Thenable")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TResult"),">"),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TResult"))))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onfulfilled?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"TResult")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable"},(0,i.kt)("inlineCode",{parentName:"a"},"Thenable")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"TResult"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onrejected?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"reason"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.Thenable"},(0,i.kt)("inlineCode",{parentName:"a"},"Thenable")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"TResult"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"node_modules/@types/vscode/index.d.ts:14579"))}u.isMDXComponent=!0}}]);