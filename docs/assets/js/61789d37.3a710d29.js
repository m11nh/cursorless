"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58460],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),b=s,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,u=new Array(i);u[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:s,u[1]=o;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36785:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return b},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(87462),s=n(63366),i=(n(67294),n(3905)),u=["components"],o={id:"test_suite_runTestSubset",title:"Module: test/suite/runTestSubset",sidebar_label:"test/suite/runTestSubset",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"contributing/api/modules/test_suite_runTestSubset",id:"contributing/api/modules/test_suite_runTestSubset",title:"Module: test/suite/runTestSubset",description:"Variables",source:"@site/../docs/contributing/api/modules/test_suite_runTestSubset.md",sourceDirName:"contributing/api/modules",slug:"/contributing/api/modules/test_suite_runTestSubset",permalink:"/docs/contributing/api/modules/test_suite_runTestSubset",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"test_suite_runTestSubset",title:"Module: test/suite/runTestSubset",sidebar_label:"test/suite/runTestSubset",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"test/suite",permalink:"/docs/contributing/api/modules/test_suite"},next:{title:"test/util/asyncSafety",permalink:"/docs/contributing/api/modules/test_util_asyncSafety"}},c={},p=[{value:"Variables",id:"variables",level:2},{value:"TEST_SUBSET_GREP_STRING",id:"test_subset_grep_string",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"runTestSubset",id:"runtestsubset",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:p};function b(e){var t=e.components,n=(0,s.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"test_subset_grep_string"},"TEST","_","SUBSET","_","GREP","_","STRING"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"TEST","_","SUBSET","_","GREP","_","STRING"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"actions/insertEmptyLines"')),(0,i.kt)("p",null,'The grep string to pass to Mocha when running a subset of tests. This grep\nstring will be used with the "Run Single Extension Test" launch\nconfiguration.\nSee ',(0,i.kt)("a",{parentName:"p",href:"https://mochajs.org/#-grep-regexp-g-regexp"},"https://mochajs.org/#-grep-regexp-g-regexp")," for supported syntax"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/2ee7ca1/src/test/suite/runTestSubset.ts#L7"},"src/test/suite/runTestSubset.ts:7")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"runtestsubset"},"runTestSubset"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"runTestSubset"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Determine whether we should run just the subset of the tests specified by\n",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/api/modules/test_suite_runTestSubset#test_subset_grep_string"},"TEST_SUBSET_GREP_STRING"),"."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")," if we are using the run test subset launch config"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cursorless-dev/cursorless/blob/2ee7ca1/src/test/suite/runTestSubset.ts#L14"},"src/test/suite/runTestSubset.ts:14")))}b.isMDXComponent=!0}}]);