"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57235],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},89384:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),s=["components"],o={id:"testUtil_TestCaseRecorder.internal.RecordTestCaseCommandArg",title:"Interface: RecordTestCaseCommandArg",sidebar_label:"RecordTestCaseCommandArg",custom_edit_url:null},l=void 0,c={unversionedId:"contributing/api/interfaces/testUtil_TestCaseRecorder.internal.RecordTestCaseCommandArg",id:"contributing/api/interfaces/testUtil_TestCaseRecorder.internal.RecordTestCaseCommandArg",title:"Interface: RecordTestCaseCommandArg",description:"testUtil/TestCaseRecorder.internal.RecordTestCaseCommandArg",source:"@site/../docs/contributing/api/interfaces/testUtil_TestCaseRecorder.internal.RecordTestCaseCommandArg.md",sourceDirName:"contributing/api/interfaces",slug:"/contributing/api/interfaces/testUtil_TestCaseRecorder.internal.RecordTestCaseCommandArg",permalink:"/docs/contributing/api/interfaces/testUtil_TestCaseRecorder.internal.RecordTestCaseCommandArg",editUrl:null,tags:[],version:"current",frontMatter:{id:"testUtil_TestCaseRecorder.internal.RecordTestCaseCommandArg",title:"Interface: RecordTestCaseCommandArg",sidebar_label:"RecordTestCaseCommandArg",custom_edit_url:null},sidebar:"contributing",previous:{title:"SurroundingPairOffsets",permalink:"/docs/contributing/api/interfaces/processTargets_modifiers_surroundingPair_types.SurroundingPairOffsets"},next:{title:"ExtraContext",permalink:"/docs/contributing/api/interfaces/testUtil_takeSnapshot.internal.ExtraContext"}},d={},p=[{value:"Properties",id:"properties",level:2},{value:"directory",id:"directory",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"extraSnapshotFields",id:"extrasnapshotfields",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"isHatTokenMapTest",id:"ishattokenmaptest",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"isSilent",id:"issilent",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"showCalibrationDisplay",id:"showcalibrationdisplay",level:3},{value:"Defined in",id:"defined-in-4",level:4}],u={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/testUtil_TestCaseRecorder"},"testUtil/TestCaseRecorder"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/contributing/api/namespaces/testUtil_TestCaseRecorder.internal"},"internal"),".RecordTestCaseCommandArg"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"directory"},"directory"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"directory"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The directory in which to store the test cases that we record. If left out\nthe user will be prompted to select a directory within the default recorded\ntest case directory."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/testUtil/TestCaseRecorder.ts#L32"},"src/testUtil/TestCaseRecorder.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"extrasnapshotfields"},"extraSnapshotFields"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"extraSnapshotFields"),": keyof ",(0,a.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/testUtil_takeSnapshot#testcasesnapshot"},(0,a.kt)("inlineCode",{parentName:"a"},"TestCaseSnapshot")),"[]"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/testUtil/TestCaseRecorder.ts#L40"},"src/testUtil/TestCaseRecorder.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ishattokenmaptest"},"isHatTokenMapTest"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"isHatTokenMapTest"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If this is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", then for each test case that we record, we expect\nthat the user will issue a second command in each phrase, which refers to a\ndecorated mark whose range we'd like to check that it got updated properly\nduring the previous command. We use this functionality in order to check\nthat the token range update works properly. For example, you might say\n",(0,a.kt)("inlineCode",{parentName:"p"},'"chuck second car ox air take air"')," to check that removing a character\nfrom a token properly updates the token."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/testUtil/TestCaseRecorder.ts#L25"},"src/testUtil/TestCaseRecorder.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"issilent"},"isSilent"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"isSilent"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", don't show a little pop up each time to indicate we've recorded a\ntest case"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/testUtil/TestCaseRecorder.ts#L38"},"src/testUtil/TestCaseRecorder.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"showcalibrationdisplay"},"showCalibrationDisplay"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"showCalibrationDisplay"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether to flash a background for calibrating a video recording"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless-vscode/blob/d90a369/src/testUtil/TestCaseRecorder.ts#L45"},"src/testUtil/TestCaseRecorder.ts:45")))}m.isMDXComponent=!0}}]);