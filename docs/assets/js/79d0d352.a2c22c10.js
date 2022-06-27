"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29407],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),u=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),d=o,f=l["".concat(m,".").concat(d)]||l[d]||s[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},30699:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"core_commandRunner_command_types.internal.ActionCommand",title:"Interface: ActionCommand",sidebar_label:"ActionCommand",custom_edit_url:null},m=void 0,u={unversionedId:"contributing/api/interfaces/core_commandRunner_command_types.internal.ActionCommand",id:"contributing/api/interfaces/core_commandRunner_command_types.internal.ActionCommand",title:"Interface: ActionCommand",description:"core/commandRunner/command.types.internal.ActionCommand",source:"@site/../docs/contributing/api/interfaces/core_commandRunner_command_types.internal.ActionCommand.md",sourceDirName:"contributing/api/interfaces",slug:"/contributing/api/interfaces/core_commandRunner_command_types.internal.ActionCommand",permalink:"/docs/contributing/api/interfaces/core_commandRunner_command_types.internal.ActionCommand",editUrl:null,tags:[],version:"current",frontMatter:{id:"core_commandRunner_command_types.internal.ActionCommand",title:"Interface: ActionCommand",sidebar_label:"ActionCommand",custom_edit_url:null},sidebar:"contributing",previous:{title:"CommandV2",permalink:"/docs/contributing/api/interfaces/core_commandRunner_command_types.CommandV2"},next:{title:"CommandV0",permalink:"/docs/contributing/api/interfaces/core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.CommandV0"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"args",id:"args",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/core_commandRunner_command_types"},"core/commandRunner/command.types"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/contributing/api/namespaces/core_commandRunner_command_types.internal"},"internal"),".ActionCommand"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"args"},"args"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"args"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"[]"),(0,a.kt)("p",null,"A list of arguments expected by the given action."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/948c420/src/core/commandRunner/command.types.ts#L28"},"src/core/commandRunner/command.types.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/actions_actions_types#actiontype"},(0,a.kt)("inlineCode",{parentName:"a"},"ActionType"))),(0,a.kt)("p",null,"The action to run"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/948c420/src/core/commandRunner/command.types.ts#L23"},"src/core/commandRunner/command.types.ts:23")))}d.isMDXComponent=!0}}]);