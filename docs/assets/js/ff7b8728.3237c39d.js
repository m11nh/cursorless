"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45555],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56632:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var i=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],a={id:"typings_Types.SelectionContext",title:"Interface: SelectionContext",sidebar_label:"SelectionContext",custom_edit_url:null},s=void 0,p={unversionedId:"contributing/api/interfaces/typings_Types.SelectionContext",id:"contributing/api/interfaces/typings_Types.SelectionContext",title:"Interface: SelectionContext",description:"typings/Types.SelectionContext",source:"@site/../docs/contributing/api/interfaces/typings_Types.SelectionContext.md",sourceDirName:"contributing/api/interfaces",slug:"/contributing/api/interfaces/typings_Types.SelectionContext",permalink:"/docs/contributing/api/interfaces/typings_Types.SelectionContext",editUrl:null,tags:[],version:"current",frontMatter:{id:"typings_Types.SelectionContext",title:"Interface: SelectionContext",sidebar_label:"SelectionContext",custom_edit_url:null},sidebar:"contributing",previous:{title:"RawSelectionModifier",permalink:"/docs/contributing/api/interfaces/typings_Types.RawSelectionModifier"},next:{title:"SelectionWithContext",permalink:"/docs/contributing/api/interfaces/typings_Types.SelectionWithContext"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"boundary",id:"boundary",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"containingListDelimiter",id:"containinglistdelimiter",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"interior",id:"interior",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"isInDelimitedList",id:"isindelimitedlist",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"isNotebookCell",id:"isnotebookcell",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"isRawSelection",id:"israwselection",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"leadingDelimiterRange",id:"leadingdelimiterrange",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"outerSelection",id:"outerselection",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"trailingDelimiterRange",id:"trailingdelimiterrange",level:3},{value:"Defined in",id:"defined-in-8",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/typings_Types"},"typings/Types"),".SelectionContext"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"boundary"},"boundary"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"boundary"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.SelectionWithContext"},(0,l.kt)("inlineCode",{parentName:"a"},"SelectionWithContext")),"[]"),(0,l.kt)("p",null,"Represents the boundary ranges of this selection. For example, for a\nsurrounding pair this would be the opening and closing delimiter. For an if\nstatement this would be the line of the guard as well as the closing brace."),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/typings/Types.ts#L313"},"src/typings/Types.ts:313")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containinglistdelimiter"},"containingListDelimiter"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"containingListDelimiter"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/typings/Types.ts#L289"},"src/typings/Types.ts:289")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"interior"},"interior"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"interior"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/typings_Types.SelectionWithContext"},(0,l.kt)("inlineCode",{parentName:"a"},"SelectionWithContext")),"[]"),(0,l.kt)("p",null,"Represents the interior ranges of this selection. For example, for a\nsurrounding pair this would exclude the opening and closing delimiter. For an if\nstatement this would be the statements in the body."),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/typings/Types.ts#L320"},"src/typings/Types.ts:320")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"isindelimitedlist"},"isInDelimitedList"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"isInDelimitedList"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/typings/Types.ts#L288"},"src/typings/Types.ts:288")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"isnotebookcell"},"isNotebookCell"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"isNotebookCell"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/typings/Types.ts#L306"},"src/typings/Types.ts:306")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"israwselection"},"isRawSelection"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"isRawSelection"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Indicates that this is a raw selection with no type information so for\nexample if it is the destination of a bring or move it should inherit the\ntype information such as delimiters from its source"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/typings/Types.ts#L327"},"src/typings/Types.ts:327")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"leadingdelimiterrange"},"leadingDelimiterRange"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"leadingDelimiterRange"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Range"},(0,l.kt)("inlineCode",{parentName:"a"},"Range"))),(0,l.kt)("p",null,"The range of the delimiter before the selection"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/typings/Types.ts#L299"},"src/typings/Types.ts:299")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"outerselection"},"outerSelection"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"outerSelection"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Selection"},(0,l.kt)("inlineCode",{parentName:"a"},"Selection"))),(0,l.kt)("p",null,"Selection used for outside selection"),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/typings/Types.ts#L294"},"src/typings/Types.ts:294")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trailingdelimiterrange"},"trailingDelimiterRange"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"trailingDelimiterRange"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/contributing/api/classes/actions_BringMoveSwap.internal.Range"},(0,l.kt)("inlineCode",{parentName:"a"},"Range"))),(0,l.kt)("p",null,"The range of the delimiter after the selection"),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/typings/Types.ts#L304"},"src/typings/Types.ts:304")))}f.isMDXComponent=!0}}]);