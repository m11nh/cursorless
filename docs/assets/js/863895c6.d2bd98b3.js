"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93831],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43097:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"languages_html",title:"Module: languages/html",sidebar_label:"languages/html",sidebar_position:0,custom_edit_url:null},s=void 0,u={unversionedId:"contributing/api/modules/languages_html",id:"contributing/api/modules/languages_html",title:"Module: languages/html",description:"Variables",source:"@site/../docs/contributing/api/modules/languages_html.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/languages_html",permalink:"/docs/contributing/api/modules/languages_html",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"languages_html",title:"Module: languages/html",sidebar_label:"languages/html",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"languages/go",permalink:"/docs/contributing/api/modules/languages_go"},next:{title:"languages/java",permalink:"/docs/contributing/api/modules/languages_java"}},c={},p=[{value:"Variables",id:"variables",level:2},{value:"patternMatchers",id:"patternmatchers",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"stringTextFragmentExtractor",id:"stringtextfragmentextractor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"patternmatchers"},"patternMatchers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"patternMatchers"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/namespaces/core_Decorations.internal#record"},(0,i.kt)("inlineCode",{parentName:"a"},"Record")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/typings_Types#scopetype"},(0,i.kt)("inlineCode",{parentName:"a"},"ScopeType")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/typings_Types#nodematcher"},(0,i.kt)("inlineCode",{parentName:"a"},"NodeMatcher")),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/languages/html.ts#L41"},"src/languages/html.ts:41")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"stringtextfragmentextractor"},"stringTextFragmentExtractor"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"stringTextFragmentExtractor"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_selection"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Range"},(0,i.kt)("inlineCode",{parentName:"a"},"Range"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"node")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_treeSitter.Parser.SyntaxNode"},(0,i.kt)("inlineCode",{parentName:"a"},"SyntaxNode")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_selection")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/contributing/api/interfaces/typings_Types.SelectionWithEditor"},(0,i.kt)("inlineCode",{parentName:"a"},"SelectionWithEditor")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Range"},(0,i.kt)("inlineCode",{parentName:"a"},"Range"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/languages/html.ts#L45"},"src/languages/html.ts:45")))}m.isMDXComponent=!0}}]);