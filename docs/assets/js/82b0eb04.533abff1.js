"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80714],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:e},l),{},{components:n})):r.createElement(m,a({ref:e},l))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23511:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={id:"actions_GenerateSnippet_constructSnippetBody",title:"Module: actions/GenerateSnippet/constructSnippetBody",sidebar_label:"actions/GenerateSnippet/constructSnippetBody",sidebar_position:0,custom_edit_url:null},s=void 0,c={unversionedId:"contributing/api/modules/actions_GenerateSnippet_constructSnippetBody",id:"contributing/api/modules/actions_GenerateSnippet_constructSnippetBody",title:"Module: actions/GenerateSnippet/constructSnippetBody",description:"Functions",source:"@site/../docs/contributing/api/modules/actions_GenerateSnippet_constructSnippetBody.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/actions_GenerateSnippet_constructSnippetBody",permalink:"/docs/contributing/api/modules/actions_GenerateSnippet_constructSnippetBody",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"actions_GenerateSnippet_constructSnippetBody",title:"Module: actions/GenerateSnippet/constructSnippetBody",sidebar_label:"actions/GenerateSnippet/constructSnippetBody",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"actions/GenerateSnippet/Substituter",permalink:"/docs/contributing/api/modules/actions_GenerateSnippet_Substituter"},next:{title:"actions/GenerateSnippet/editText",permalink:"/docs/contributing/api/modules/actions_GenerateSnippet_editText"}},l={},u=[{value:"Functions",id:"functions",level:2},{value:"constructSnippetBody",id:"constructsnippetbody",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:u};function f(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"constructsnippetbody"},"constructSnippetBody"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"constructSnippetBody"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"linePrefix"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Converts a range of text in an editor into a snippet body representation as\nexpected by textmate."),(0,o.kt)("p",null,"Note that if you want tabstops, you must first modify {@link text} to\ncontain the tabstops."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"text")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text to use for the snippet body")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"linePrefix")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text on the line that the snippet starts on leading to the start of the snippet. This is used for determining indentation")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"The body of a snippet represented as a list of lines as expected for\ntextmate snippets"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/24af088/src/actions/GenerateSnippet/constructSnippetBody.ts#L32"},"src/actions/GenerateSnippet/constructSnippetBody.ts:32")))}f.isMDXComponent=!0}}]);