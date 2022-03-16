"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45791],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36553:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={id:"actions_BringMoveSwap.internal.TextEditorDecorationType",title:"Interface: TextEditorDecorationType",sidebar_label:"TextEditorDecorationType",custom_edit_url:null},p=void 0,l={unversionedId:"contributing/api/interfaces/actions_BringMoveSwap.internal.TextEditorDecorationType",id:"contributing/api/interfaces/actions_BringMoveSwap.internal.TextEditorDecorationType",title:"Interface: TextEditorDecorationType",description:"actions/BringMoveSwap.internal.TextEditorDecorationType",source:"@site/../docs/contributing/api/interfaces/actions_BringMoveSwap.internal.TextEditorDecorationType.md",sourceDirName:"contributing/api/interfaces",slug:"/contributing/api/interfaces/actions_BringMoveSwap.internal.TextEditorDecorationType",permalink:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.TextEditorDecorationType",editUrl:null,tags:[],version:"current",frontMatter:{id:"actions_BringMoveSwap.internal.TextEditorDecorationType",title:"Interface: TextEditorDecorationType",sidebar_label:"TextEditorDecorationType",custom_edit_url:null},sidebar:"contributing",previous:{title:"TextEditor",permalink:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.TextEditor"},next:{title:"TextEditorEdit",permalink:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.TextEditorEdit"}},s={},d=[{value:"Properties",id:"properties",level:2},{value:"key",id:"key",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/actions_BringMoveSwap"},"actions/BringMoveSwap"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/contributing/api/namespaces/actions_BringMoveSwap.internal"},"internal"),".TextEditorDecorationType"),(0,o.kt)("p",null,"Represents a handle to a set of decorations\nsharing the same {@link DecorationRenderOptions styling options} in a ",(0,o.kt)("a",{parentName:"p",href:"/docs/contributing/api/interfaces/actions_BringMoveSwap.internal.TextEditor"},"text editor"),"."),(0,o.kt)("p",null,"To get an instance of a ",(0,o.kt)("inlineCode",{parentName:"p"},"TextEditorDecorationType")," use\n{@link window.createTextEditorDecorationType createTextEditorDecorationType}."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"key"},"key"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"key"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Internal representation of the handle."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,"node_modules/@types/vscode/index.d.ts:697"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"dispose"},"dispose"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,"Remove this decoration type and all decorations on all text editors using it."),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,"node_modules/@types/vscode/index.d.ts:702"))}f.isMDXComponent=!0}}]);