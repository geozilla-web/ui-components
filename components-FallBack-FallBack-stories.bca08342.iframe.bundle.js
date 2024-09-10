"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[525],{"./src/components/FallBack/FallBack.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FallBackStoryTemplate:()=>FallBackStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _FallBack__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FallBack/FallBack.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}let __WEBPACK_DEFAULT_EXPORT__={component:_FallBack__WEBPACK_IMPORTED_MODULE_1__.p,argTypes:_object_spread({},_stories__WEBPACK_IMPORTED_MODULE_2__.W)};var FallBackStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)()}};FallBackStoryTemplate.storyName="FallBack",FallBackStoryTemplate.parameters={...FallBackStoryTemplate.parameters,docs:{...FallBackStoryTemplate.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: getTheme()\n  }\n}",...FallBackStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["FallBackStoryTemplate"]},"./src/components/FallBack/FallBack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>FallBack});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Loader/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  width: 100vw;\n  height: 100vh;\n  height: 100dvh;\n  height: 100svh;\n  height: calc(var(--vh,1svh) * 100);\n  background-color: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n"]);return _templateObject=function _templateObject(){return data},data}var FallBackWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject(),function(param){var _theme_colors,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.bodyBackground}),FallBack=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FallBackWrapper,{theme:null==props?void 0:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_1__.a,{show:!0,transparent:!0,theme:null==props?void 0:props.theme}))};try{FallBack.displayName="FallBack",FallBack.__docgenInfo={description:"",displayName:"FallBack",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FallBack/FallBack.tsx#FallBack"]={docgenInfo:FallBack.__docgenInfo,name:"FallBack",path:"src/components/FallBack/FallBack.tsx#FallBack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Loader/Loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  to {\n    transform: rotate(360deg);\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n    position: absolute;\n    background-color: transparent;\n    -webkit-backdrop-filter: none;\n    backdrop-filter: none;\n    padding: 8px;\n  "]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  ",";\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  z-index: 1000;\n  \n  ",";\n  \n  ",";\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n  animation: "," 1.5s linear infinite;\n    \n  circle, path {\n    fill: ",";\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  white-space: break-spaces;\n  margin-top: 32px;\n"]);return _templateObject4=function _templateObject(){return data},data}var spinning=(0,styled_components_browser_esm.i7)(_templateObject()),StyledSpinner=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){return!param.$transparent&&"background-color: rgba(0,0,0,.3)"},function(param){return param.$localPosition&&(0,styled_components_browser_esm.AH)(_templateObject1())},function(param){return param.$customStyles}),StyledSVG=styled_components_browser_esm.Ay.svg(_templateObject3(),spinning,function(param){var _theme_colors,theme=param.theme;return param.$fill||(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.primary)}),Message=styled_components_browser_esm.Ay.span(_templateObject4());function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var SpinnerSvg=function(param){var type=param.type,fill=param.fill,theme=param.theme;switch(type){case"dotted":return react.createElement(StyledSVG,{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",theme:theme,$fill:fill},react.createElement("circle",{cx:"24.5",cy:"4",r:"4",transform:"rotate(90 24.5 4)"}),react.createElement("circle",{cx:"24.5",cy:"44",r:"4",transform:"rotate(90 24.5 44)",fillOpacity:"0.3"}),react.createElement("circle",{opacity:"0.15",cx:"44.5",cy:"24",r:"4",transform:"rotate(90 44.5 24)"}),react.createElement("circle",{cx:"4.5",cy:"24",r:"4",transform:"rotate(90 4.5 24)",fillOpacity:"0.65"}),react.createElement("circle",{opacity:"0.2",cx:"38.642",cy:"38.1421",r:"4",transform:"rotate(135 38.642 38.1421)"}),react.createElement("circle",{cx:"10.3578",cy:"9.85779",r:"4",transform:"rotate(135 10.3578 9.85779)",fillOpacity:"0.85"}),react.createElement("circle",{cx:"10.3579",cy:"38.1421",r:"4",transform:"rotate(-135 10.3579 38.1421)",fillOpacity:"0.5"}),react.createElement("circle",{opacity:"0.05",cx:"38.6421",cy:"9.85779",r:"4",transform:"rotate(-135 38.6421 9.85779)"}));case"solid":return react.createElement(StyledSVG,{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",theme:theme,$fill:fill},react.createElement("path",{d:"M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM6.38657 24C6.38657 33.7276 14.2724 41.6134 24 41.6134C33.7276 41.6134 41.6134 33.7276 41.6134 24C41.6134 14.2724 33.7276 6.38657 24 6.38657C14.2724 6.38657 6.38657 14.2724 6.38657 24Z",fillOpacity:"0.5"}),react.createElement("path",{d:"M24 3.19329C24 1.42968 25.436 -0.0218585 27.184 0.21211C31.2157 0.751748 35.0628 2.31025 38.3511 4.76341C42.4966 7.85606 45.5321 12.2051 47.0055 17.1628C48.4789 22.1205 48.3114 27.4215 46.5279 32.2762C45.1131 36.1271 42.7417 39.5338 39.6591 42.1878C38.3226 43.3384 36.3269 42.9068 35.3637 41.4294C34.4005 39.9521 34.843 37.9919 36.1224 36.7781C38.0786 34.9223 39.5934 32.6316 40.533 30.0739C41.8419 26.511 41.9649 22.6206 40.8836 18.9822C39.8022 15.3438 37.5745 12.1521 34.5322 9.88241C32.3481 8.25305 29.8282 7.16147 27.1759 6.67524C25.4412 6.35723 24 4.95689 24 3.19329Z"}));default:return null}},Loader=function(_param){var _param_show=_param.show,message=_param.message,_param_transparent=_param.transparent,_param_type=_param.type,fill=_param.fill,localPosition=_param.localPosition,_param_customStyles=_param.customStyles,rest=_object_without_properties(_param,["show","message","transparent","type","fill","localPosition","customStyles"]),theme=null==rest?void 0:rest.theme;return void 0===_param_show||_param_show?react.createElement(StyledSpinner,{id:"loading-element",$transparent:void 0!==_param_transparent&&_param_transparent,theme:theme,$localPosition:localPosition,$customStyles:void 0===_param_customStyles?"":_param_customStyles},react.createElement(SpinnerSvg,{type:void 0===_param_type?"dotted":_param_type,fill:fill,theme:theme}),!localPosition&&react.createElement(Message,{theme:theme},message)):null};try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{show:{defaultValue:{value:"true"},description:"",name:"show",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},transparent:{defaultValue:{value:"false"},description:"",name:"transparent",required:!1,type:{name:"boolean"}},localPosition:{defaultValue:null,description:"",name:"localPosition",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:{value:""},description:"",name:"customStyles",required:!1,type:{name:"string"}},type:{defaultValue:{value:"dotted"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"dotted"'},{value:'"solid"'}]}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loader/Loader.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/components/Loader/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Loader/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_Loader__WEBPACK_IMPORTED_MODULE_0__.a});var _Loader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Loader/Loader.tsx")},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}}}]);