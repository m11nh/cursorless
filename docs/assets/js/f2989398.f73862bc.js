"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23816],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],p={id:"actions_GenerateSnippet_editText",title:"Module: actions/GenerateSnippet/editText",sidebar_label:"actions/GenerateSnippet/editText",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"contributing/api/modules/actions_GenerateSnippet_editText",id:"contributing/api/modules/actions_GenerateSnippet_editText",title:"Module: actions/GenerateSnippet/editText",description:"Namespaces",source:"@site/../docs/contributing/api/modules/actions_GenerateSnippet_editText.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/actions_GenerateSnippet_editText",permalink:"/docs/contributing/api/modules/actions_GenerateSnippet_editText",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"actions_GenerateSnippet_editText",title:"Module: actions/GenerateSnippet/editText",sidebar_label:"actions/GenerateSnippet/editText",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"actions/GenerateSnippet/constructSnippetBody",permalink:"/docs/contributing/api/modules/actions_GenerateSnippet_constructSnippetBody"},next:{title:"actions/GenerateSnippet/openNewSnippetFile",permalink:"/docs/contributing/api/modules/actions_GenerateSnippet_openNewSnippetFile"}},c={},d=[{value:"Namespaces",id:"namespaces",level:2},{value:"Functions",id:"functions",level:2},{value:"editText",id:"edittext",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"namespaces"},"Namespaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/contributing/api/namespaces/actions_GenerateSnippet_editText.internal"},"internal"))),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"edittext"},"editText"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"editText"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"edits"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"For each edit in {@link edits} replaces the given ",(0,a.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/actions_GenerateSnippet_editText.internal.Edit#offsets"},"Edit.offsets")," in\n{@link text} with ",(0,a.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.Edit#text"},"Edit.text"),"."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"text")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The text to edit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"edits")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/actions_GenerateSnippet_editText.internal.Edit"},(0,a.kt)("inlineCode",{parentName:"a"},"Edit")),"[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The edits to perform")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The edited string"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/57ace86/src/actions/GenerateSnippet/editText.ts#L12"},"src/actions/GenerateSnippet/editText.ts:12")))}m.isMDXComponent=!0}}]);