"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82553],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"util_itertools",title:"Module: util/itertools",sidebar_label:"util/itertools",sidebar_position:0,custom_edit_url:null},p=void 0,u={unversionedId:"contributing/api/modules/util_itertools",id:"contributing/api/modules/util_itertools",title:"Module: util/itertools",description:"Functions",source:"@site/../docs/contributing/api/modules/util_itertools.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/util_itertools",permalink:"/docs/contributing/api/modules/util_itertools",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"util_itertools",title:"Module: util/itertools",sidebar_label:"util/itertools",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"util/graphFactories",permalink:"/docs/contributing/api/modules/util_graphFactories"},next:{title:"util/makeGraph",permalink:"/docs/contributing/api/modules/util_makeGraph"}},s={},d=[{value:"Functions",id:"functions",level:2},{value:"groupBy",id:"groupby",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"groupby"},"groupBy"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"groupBy"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"U"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"func"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"U"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"[]",">"),(0,a.kt)("p",null,"Returns a map where the elements are grouped based on the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"func")," for\nthe given elements."),(0,a.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"U"))))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"list")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"),"[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"LIst of elements to group")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"element"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"T"),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"U")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Function to map elements to group key")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"U"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"[]",">"),(0,a.kt)("p",null,"Map from group keys to list of elements mapped to given key"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/0d1004b/src/util/itertools.ts#L8"},"src/util/itertools.ts:8")))}m.isMDXComponent=!0}}]);