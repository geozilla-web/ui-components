"use strict";(self.webpackChunk_geozilla_web_ui_components=self.webpackChunk_geozilla_web_ui_components||[]).push([[81],{"./src/components/OptionsItem/OptionsItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OptionsItemStoryTemplate:()=>OptionsItemStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_OptionsItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/OptionsItem/OptionsItem.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/theme/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={component:_OptionsItem__WEBPACK_IMPORTED_MODULE_1__.r,parameters:{controls:{exclude:["customId","onClick","mt","mb"]}},argTypes:_object_spread_props(_object_spread({},_stories__WEBPACK_IMPORTED_MODULE_2__.j),{img:{control:"text"}})};var OptionsItemStoryTemplate={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Test 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Test 2")),onClick:function(){return console.log("test")},theme:_core_theme__WEBPACK_IMPORTED_MODULE_3__.np.Geozilla,isArabic:!1,isActive:!1,multiChoice:!1,img:"https://quiz.geodzilla.info/assets/track_target/partner.png"}};OptionsItemStoryTemplate.storyName="OptionsItem",OptionsItemStoryTemplate.parameters={...OptionsItemStoryTemplate.parameters,docs:{...OptionsItemStoryTemplate.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <div>\n        <div>Test 1</div>\n        <div>Test 2</div>\n      </div>,\n    onClick: () => console.log('test'),\n    theme: themes['Geozilla'],\n    isArabic: false,\n    isActive: false,\n    multiChoice: false,\n    img: 'https://quiz.geodzilla.info/assets/track_target/partner.png'\n  }\n}",...OptionsItemStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["OptionsItemStoryTemplate"]},"./src/core/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nz:()=>globalStyles,YO:()=>GlobalThemeProvider,gh:()=>theme.g,np:()=>theme.n});var theme=__webpack_require__("./src/core/theme/theme.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(['\n  :root {\n    --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--system-ui);\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: none;\n    color: ',";\n    overscroll-behavior: none;\n\n    &::-webkit-scrollbar {\n      width: 0;\n    }\n  }\n\n  html {\n    height: 100%;\n  }\n\n  body {\n    width: 100%;\n    height: 100vh;\n    height: 100dvh;\n    height: 100svh;\n    height: calc(var(--vh,1svh) * 100);\n    background-color: ",';\n\n    > * {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  input[type="text"],\n  input[type="tel"],\n  input[type="email"],\n  input[type="password"],\n  input[type="tel"],\n  input[type="textarea"],\n  input[type="radio"],\n  textarea,\n  input {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  input[type="radio"] {\n    display: none;\n  }\n\n  a, input, button {\n    font-family: var(--system-ui);\n  }\n']);return _templateObject=function _templateObject(){return data},data}let globalStyles=(0,styled_components_browser_esm.vJ)(_templateObject(),function(param){var _theme_colors,theme=param.theme;return(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.colorText)||"#323232"},function(param){var _theme_colors,theme=param.theme;return(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.colorBodyBackground)||"#fff"});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/utils/index.ts"),GZ="Geozilla",FL="Family-Locator",FO="Familo",CL="Closer",namesList={geozilla:GZ,gz:GZ,"family-locator":FL,fl:FL,familo:FO,fo:FO,closer:CL,cl:CL},fallback=namesList.gz,GlobalThemeProvider=function(param){var _namesList_projectName_toLowerCase,children=param.children,_param_projectName=param.projectName,projectName=void 0===_param_projectName?fallback:_param_projectName,currentTheme=(0,theme.g)(null!==(_namesList_projectName_toLowerCase=namesList[projectName.toLowerCase()])&&void 0!==_namesList_projectName_toLowerCase?_namesList_projectName_toLowerCase:fallback);return react.createElement(react.Fragment,null,react.createElement(styled_components_browser_esm.f6,{theme:currentTheme},react.createElement(globalStyles,null),(0,utils.I)(children,{theme:currentTheme})))};try{GlobalThemeProvider.displayName="GlobalThemeProvider",GlobalThemeProvider.__docgenInfo={description:"",displayName:"GlobalThemeProvider",props:{projectName:{defaultValue:{value:"namesList['gz']"},description:"",name:"projectName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"]={docgenInfo:GlobalThemeProvider.__docgenInfo,name:"GlobalThemeProvider",path:"src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/core/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}__webpack_require__.d(__webpack_exports__,{g:()=>getTheme,n:()=>themes});var defaultTheme={colors:{colorText:"#323232",colorBodyBackground:"#fff"},mobileWidth:"350",tabletMinWidth:"744",desktopMinWidth:"1280"},mergeKeys=function(k,obj){return _define_property({},k,_object_spread({},defaultTheme[k],obj))},themes={Geozilla:_object_spread({},mergeKeys("colors",{colorPrimary:"#00BFA5",colorButtonHover:"#00A08B",colorButtonDisabled:"#9bdfd2",colorOptionInactive:"#EBFAF8",colorOptionActive:"#C2F0EA",colorOptionBorderActive:"#00BFA5",colorOptionImgActive:"#94E3D9",colorOptionImgInactive:"#C2F0EA",colorOptionCheckActive:"#00BFA5",colorOptionCheckInactive:"#BBE1DC",colorThreeDots:"#00BFA5"})),"Family-Locator":_object_spread({},mergeKeys("colors",{colorPrimary:"#3393EC",colorButtonHover:"#1F7ACE",colorButtonDisabled:"#9ec9f6",colorOptionInactive:"#F0F8FF",colorOptionActive:"#C5E3FF",colorOptionBorderActive:"#007AFF",colorOptionImgActive:"#8BB6DE",colorOptionImgInactive:"#C3E1FF",colorOptionCheckActive:"#007AFF",colorOptionCheckInactive:"#CCDDF0",colorThreeDots:"#5281BD"})),Familo:_object_spread({},mergeKeys("colors",{colorPrimary:"#F58A3C",colorButtonHover:"#C56A28",colorButtonDisabled:"#fcc5a1",colorOptionInactive:"#FEF7F1",colorOptionActive:"#FFE5D2",colorOptionBorderActive:"#F58A3C",colorOptionImgActive:"#ECC6AA",colorOptionImgInactive:"#FFE4D0",colorOptionCheckActive:"#F58A3C",colorOptionCheckInactive:"#EED6C5",colorThreeDots:"#F58A3C"})),Closer:_object_spread({},mergeKeys("colors",{colorPrimary:"#00BFA5",colorButtonHover:"#00A08B",colorButtonDisabled:"#9bdfd2",colorOptionInactive:"#EBFAF8",colorOptionActive:"#C2F0EA",colorOptionBorderActive:"#00BFA5",colorOptionImgActive:"#94E3D9",colorOptionImgInactive:"#C2F0EA",colorOptionCheckActive:"#00BFA5",colorOptionCheckInactive:"#BBE1DC",colorThreeDots:"#00BFA5"}))},getTheme=function(){var projectName=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Geozilla";return _object_spread({},defaultTheme,themes[projectName])}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.np),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.np).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.gh)(k)}),obj}(),control:"inline-radio"}}}}]);