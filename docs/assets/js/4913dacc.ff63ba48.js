"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92859],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||l[m]||i;return n?t.createElement(f,a(a({ref:r},d),{},{components:n})):t.createElement(f,a({ref:r},d))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23987:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.internal.RawSelectionModifier",title:"Interface: RawSelectionModifier",sidebar_label:"RawSelectionModifier",custom_edit_url:null},p=void 0,s={unversionedId:"contributing/api/interfaces/core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.internal.RawSelectionModifier",id:"contributing/api/interfaces/core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.internal.RawSelectionModifier",title:"Interface: RawSelectionModifier",description:"core/commandVersionUpgrades/upgradeV1ToV2/commandV1.types.internal.RawSelectionModifier",source:"@site/../docs/contributing/api/interfaces/core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.internal.RawSelectionModifier.md",sourceDirName:"contributing/api/interfaces",slug:"/contributing/api/interfaces/core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.internal.RawSelectionModifier",permalink:"/docs/contributing/api/interfaces/core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.internal.RawSelectionModifier",editUrl:null,tags:[],version:"current",frontMatter:{id:"core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.internal.RawSelectionModifier",title:"Interface: RawSelectionModifier",sidebar_label:"RawSelectionModifier",custom_edit_url:null},sidebar:"contributing",previous:{title:"PartialRangeTarget",permalink:"/docs/contributing/api/interfaces/core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.internal.PartialRangeTarget"},next:{title:"Source",permalink:"/docs/contributing/api/interfaces/core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.internal.Source"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in",level:4}],u={toc:l};function m(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types"},"core/commandVersionUpgrades/upgradeV1ToV2/commandV1.types"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/namespaces/core_commandVersionUpgrades_upgradeV1ToV2_commandV1_types.internal"},"internal"),".RawSelectionModifier"),(0,i.kt)("p",null,"Converts its input to a raw selection with no type information so for\nexample if it is the destination of a bring or move it should inherit the\ntype information such as delimiters from its source."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"toRawSelection"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/2ee7ca1/src/core/commandVersionUpgrades/upgradeV1ToV2/commandV1.types.ts#L239"},"src/core/commandVersionUpgrades/upgradeV1ToV2/commandV1.types.ts:239")))}m.isMDXComponent=!0}}]);