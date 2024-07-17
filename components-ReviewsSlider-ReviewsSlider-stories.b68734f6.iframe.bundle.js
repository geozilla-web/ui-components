"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[367],{"./src/components/ReviewsSlider/ReviewsSlider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ReviewsSliderStoryTemplate:()=>ReviewsSliderStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ReviewsSlider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ReviewsSlider/ReviewsSlider.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var reviewsList=[{name:"John Saymont",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_1.png"},{name:"Erica Hilertoff",text:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_2.png"},{name:"Yan Frunder",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_3.png"},{name:"Kiara Martínez",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_4.png"},{name:"Wesley Everson",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_5.png"},{name:"Shanon Burges",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_6.png"}];let __WEBPACK_DEFAULT_EXPORT__={component:function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"scrollable"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewsSlider__WEBPACK_IMPORTED_MODULE_1__.z,_object_spread_props(_object_spread({},props),{reviewsList:reviewsList})))))},parameters:{controls:{exclude:["mt","mb"]}},argTypes:_object_spread({},_stories__WEBPACK_IMPORTED_MODULE_2__.W)};var ReviewsSliderStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)(),interval:3,staticMode:!0}};ReviewsSliderStoryTemplate.storyName="ReviewsSlider",ReviewsSliderStoryTemplate.parameters={...ReviewsSliderStoryTemplate.parameters,docs:{...ReviewsSliderStoryTemplate.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: getTheme(),\n    interval: 3,\n    staticMode: true\n  }\n}",...ReviewsSliderStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["ReviewsSliderStoryTemplate"]},"./src/components/Layouts/MainLayout/MainLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  width: 100%;\n  height: 100%;\n  max-width: ","px;\n  margin: 0 auto;\n  ",";\n  ",";\n  ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-sizing: border-box;\n\n  & > * {\n    width: 100%;\n  }\n\n  @media screen and (min-width: ","px) {\n    justify-content: center;\n\n    ",";\n  }\n\n  @media screen and (max-width: ","px) {\n    ",";\n  }\n  \n  ",";\n"]);return _templateObject=function _templateObject(){return data},data}var StyledLayout=styled_components_browser_esm.Ay.div(_templateObject(),function(param){var theme=param.theme;return parseInt((null==theme?void 0:theme.maxContentWidth)||375)+2*parseInt((null==theme?void 0:theme.sidePadding)||0)},function(param){var $pt=param.$pt;return void 0!==$pt&&"padding-top: ".concat((0,utils.nc)($pt))},function(param){var $pb=param.$pb;return void 0!==$pb&&"padding-bottom: ".concat((0,utils.nc)($pb))},function(param){var theme=param.theme;return"\n    padding-right: ".concat((null==theme?void 0:theme.sidePadding)||16,"px;\n    padding-left: ").concat((null==theme?void 0:theme.sidePadding)||16,"px;\n  ")},function(param){var theme=param.theme;return null==theme?void 0:theme.tabletMinWidth},function(param){var $customStyles=param.$customStyles;return null==$customStyles?void 0:$customStyles.tablet},function(param){var theme=param.theme;return null==theme?void 0:theme.mobileWidth},function(param){var $customStyles=param.$customStyles;return null==$customStyles?void 0:$customStyles.mobile},function(param){var $customStyles=param.$customStyles;return null==$customStyles?void 0:$customStyles.default});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var MainLayout=function(_param){var children=_param.children,_param_pt=_param.pt,_param_pb=_param.pb,customStyles=_param.customStyles,rest=_object_without_properties(_param,["children","pt","pb","customStyles"]),styles=(0,utils.p5)(customStyles,"default");return react.createElement(StyledLayout,_object_spread({$pt:void 0===_param_pt?16:_param_pt,$pb:void 0===_param_pb?16:_param_pb,$customStyles:styles},rest),children)};try{MainLayout.displayName="MainLayout",MainLayout.__docgenInfo={description:"",displayName:"MainLayout",props:{pt:{defaultValue:{value:"16"},description:"",name:"pt",required:!1,type:{name:"string | number"}},pb:{defaultValue:{value:"16"},description:"",name:"pb",required:!1,type:{name:"string | number"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"string | MainLayoutCustomStylesWithStatesProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"]={docgenInfo:MainLayout.__docgenInfo,name:"MainLayout",path:"src/components/Layouts/MainLayout/MainLayout.tsx#MainLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layouts/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MainLayout.O});var MainLayout=__webpack_require__("./src/components/Layouts/MainLayout/MainLayout.tsx")},"./src/components/ReviewsSlider/ReviewsSlider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ReviewsSlider});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  width: 100%;\n  max-width: ","px;\n  margin: 0 auto;\n  overflow: hidden;\n  ",";\n  ",";\n  position: relative;\n  flex-shrink: 0;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  width: 100%;\n  ",";\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  background-color: ",";\n  border: 1px solid #DEE0E6;\n  border-radius: 12px;\n  flex: 1 0 calc(100vw - ","px);\n  max-width: ","px;\n  padding: 12px 16px;\n  text-align: ",";\n  transition: transform 0.5s ease;\n  \n  &:not(:last-child) {\n    ",";\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n  padding-left: 38px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 30px;\n  position: relative;\n  \n  &:before {\n    content: '';\n    display: block;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    ",";\n    background-color: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([""]);return _templateObject4=function _templateObject(){return data},data}var ReviewsContainer=styled_components_browser_esm.Ay.div(_templateObject(),function(param){var theme=param.theme;return null==theme?void 0:theme.maxContentWidth},function(param){var $mt=param.$mt;return void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt))},function(param){var $mb=param.$mb;return void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb))}),ReviewsBlock=styled_components_browser_esm.Ay.div(_templateObject1(),function(param){return param.$staticMode?"\n    transform: translateX(0) !important;\n  ":"\n    display: flex;\n    transition: transform 0.5s ease;\n  "}),ReviewsItem=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){var _theme_colors,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.reviewItemBg},function(param){var theme=param.theme;return 2*((null==theme?void 0:theme.sidePadding)||16)},function(param){var theme=param.theme;return null==theme?void 0:theme.maxContentWidth},function(param){var $isArabic=param.$isArabic;return(0,utils.j1)($isArabic)},function(param){var $staticMode=param.$staticMode,theme=param.theme;return $staticMode?"\n      margin-bottom: 16px;\n    ":"\n      margin-right: ".concat((null==theme?void 0:theme.sidePadding)||16,"px\n    ")}),Reviewer=styled_components_browser_esm.Ay.div(_templateObject3(),function(param){var $image=param.$image;return $image&&"background: url(".concat($image,") center / contain no-repeat")},function(param){var _theme_colors,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.bodyBackground}),ReviewText=styled_components_browser_esm.Ay.div(_templateObject4());function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ReviewsSlider=function(_param){var reviewsList=_param.reviewsList,mt=_param.mt,mb=_param.mb,_param_interval=_param.interval,_param_staticMode=_param.staticMode,staticMode=void 0!==_param_staticMode&&_param_staticMode,_param_isArabic=_param.isArabic,isArabic=void 0!==_param_isArabic&&_param_isArabic,rest=_object_without_properties(_param,["reviewsList","mt","mb","interval","staticMode","isArabic"]),theme=null==rest?void 0:rest.theme,currentTheme=(0,styled_components_browser_esm.DP)(),sliderInterval=1e3*(void 0===_param_interval?2:_param_interval),sliderRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(!1),2),stopAutoScroll=_useState[0],setStopAutoScroll=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),lastItemAdded=_useState1[0],setLastItemAdded=_useState1[1];return(0,react.useEffect)(function(){if(!staticMode&&!lastItemAdded){var slider=sliderRef.current;slider&&(slider.appendChild(slider.children[0].cloneNode(!0)),setLastItemAdded(!0))}},[staticMode]),(0,react.useEffect)(function(){if(!staticMode){var slider=sliderRef.current;if(slider){var counter=0,sliderItemWidth=slider.children[0].offsetWidth,sliderItemMargin=(null==currentTheme?void 0:currentTheme.sidePadding)||16,updateSlidePosition=function(){slider.style.cssText="\n        transform: translateX(calc(-".concat(counter*sliderItemWidth,"px - ").concat(counter*sliderItemMargin,"px))\n      "),counter===reviewsList.length&&setTimeout(function(){counter=0,slider.style.cssText="transition: none; transform: translateX(0)"},sliderInterval/2)},interval=setInterval(function(){stopAutoScroll||(counter++,updateSlidePosition())},sliderInterval);return function(){return clearInterval(interval)}}}},[staticMode,stopAutoScroll,reviewsList.length,sliderInterval]),react.createElement(ReviewsContainer,{$mt:mt,$mb:mb,theme:theme},react.createElement(ReviewsBlock,{ref:sliderRef,id:"slider",onTouchStart:function(e){staticMode||setStopAutoScroll(!0)},onTouchMove:function(e){if(staticMode)return},onTouchEnd:function(e){staticMode||setStopAutoScroll(!1)},$staticMode:staticMode,theme:theme},reviewsList.map(function(r,index){var name=r.name,text=r.text,img=r.img;return react.createElement(ReviewsItem,{$staticMode:staticMode,$isArabic:isArabic,theme:theme,key:index},react.createElement(Reviewer,{$image:img,theme:theme},name||" "),react.createElement(ReviewText,{theme:theme},text))})))};try{ReviewsSlider.displayName="ReviewsSlider",ReviewsSlider.__docgenInfo={description:"",displayName:"ReviewsSlider",props:{reviewsList:{defaultValue:null,description:"",name:"reviewsList",required:!0,type:{name:"ReviewProps[]"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},interval:{defaultValue:{value:"2"},description:"",name:"interval",required:!1,type:{name:"number"}},staticMode:{defaultValue:{value:"false"},description:"",name:"staticMode",required:!1,type:{name:"boolean"}},isArabic:{defaultValue:{value:"false"},description:"",name:"isArabic",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ReviewsSlider/ReviewsSlider.tsx#ReviewsSlider"]={docgenInfo:ReviewsSlider.__docgenInfo,name:"ReviewsSlider",path:"src/components/ReviewsSlider/ReviewsSlider.tsx#ReviewsSlider"})}catch(__react_docgen_typescript_loader_error){}},"./src/core/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O4:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.O4,U_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.U_});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts")},"./src/core/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kH:()=>GlobalStyles,U_:()=>GlobalThemeProvider,O4:()=>theme.O,Zj:()=>theme.Z,MW:()=>utils.MW});var theme=__webpack_require__("./src/core/theme/theme.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(['\n  :root {\n    --system-ui: Arial, system-ui, "Segoe UI", Roboto, Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--system-ui);\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: none;\n    overscroll-behavior: none;\n\n    &::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n    }\n  }\n\n  html, body {\n    background-color: ',";\n  }\n\n  html {\n    height: 100%;\n  }\n\n  body {\n    width: 100%;\n    height: 100vh;\n    height: 100dvh;\n    height: 100svh;\n    height: calc(var(--vh,1svh) * 100);\n    color: ",';\n    user-select: none;\n\n    > * {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  input[type="text"],\n  input[type="tel"],\n  input[type="email"],\n  input[type="password"],\n  input[type="tel"],\n  input[type="textarea"],\n  input[type="radio"],\n  textarea,\n  input {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  input[type="radio"] {\n    display: none;\n  }\n\n  a, input, button {\n    font-family: var(--system-ui);\n  }\n  \n  .scrollable {\n    overflow-x: auto;\n    overflow-y: auto;\n    \n    &::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n      display: none;\n    }\n  }\n  \n  ',";\n"]);return _templateObject=function _templateObject(){return data},data}var GlobalStyles=(0,styled_components_browser_esm.DU)(_templateObject(),function(param){var _theme_colors,theme=param.theme;return(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.bodyBackground)||"#fff"},function(param){var _theme_colors,theme=param.theme;return(null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.text)||"#323232"},function(param){return param.$customStyles}),react=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var GZ="geozilla",FL="family-locator",FO="familo",BB="brainbloom",namesList={geozilla:GZ,gz:GZ,"family-locator":FL,fl:FL,familo:FO,fo:FO,brainbloom:BB,bb:BB},fallback=namesList.gz,GlobalThemeProvider=function(param){var _namesList_projectTheme_toLowerCase,children=param.children,_param_projectTheme=param.projectTheme,projectTheme=void 0===_param_projectTheme?fallback:_param_projectTheme,_param_customTheme=param.customTheme,customGlobalStyles=param.customGlobalStyles,currentTheme="string"==typeof projectTheme?(0,theme.O)(null!==(_namesList_projectTheme_toLowerCase=namesList[projectTheme.toLowerCase()])&&void 0!==_namesList_projectTheme_toLowerCase?_namesList_projectTheme_toLowerCase:fallback):projectTheme;return(0,utils.MW)(),react.createElement(react.Fragment,null,react.createElement(styled_components_browser_esm.NP,{theme:_object_spread({},currentTheme,{custom:void 0===_param_customTheme?{}:_param_customTheme})},react.createElement(GlobalStyles,{$customStyles:customGlobalStyles}),children))};try{GlobalThemeProvider.displayName="GlobalThemeProvider",GlobalThemeProvider.__docgenInfo={description:"",displayName:"GlobalThemeProvider",props:{projectTheme:{defaultValue:{value:"namesList['gz']"},description:"",name:"projectTheme",required:!1,type:{name:"string | Theme"}},customGlobalStyles:{defaultValue:null,description:"",name:"customGlobalStyles",required:!1,type:{name:"string"}},customTheme:{defaultValue:{value:"{}"},description:"",name:"customTheme",required:!1,type:{name:"{ [propName: string]: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"]={docgenInfo:GlobalThemeProvider.__docgenInfo,name:"GlobalThemeProvider",path:"src/core/theme/GlobalThemeProvider.tsx#GlobalThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/core/theme/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}__webpack_require__.d(__webpack_exports__,{O:()=>getTheme,Z:()=>themes});var defaultTheme={colors:{text:"#323232",bodyBackground:"#fff",optionActiveText:"#323232",buttonDisabledTextColor:"#323232",inputBg:"#fff",circularProgressBg:"#F2F2F2",reviewItemBg:"#f4f4f4",planItemBorder:"#c3c3c3",planItemBg:"#fff",planItemTextColorInactive:"#7F84A7",planItemLabelBg:"#fff",planItemCheckBg:"#fff",planItemLabelColorActive:"#fff",planItemLabelColorInactive:"#323232"},mobileWidth:"350",tabletMinWidth:"744",desktopMinWidth:"1280",maxContentWidth:"327",sidePadding:"24",buttonBorderRadius:"12px",buttonBottomPosition:"24px",planItemBorderRadius:"8px"},themes={geozilla:{colors:{primary:"#00BFA5",buttonHover:"#00A08B",buttonDisabled:"#9bdfd2",optionInactive:"#EBFAF8",optionBorderInactive:"#EBFAF8",optionActive:"#C2F0EA",optionBorderActive:"#00BFA5",optionImgActive:"#94E3D9",optionImgInactive:"#C2F0EA",optionCheckActive:"#00BFA5",optionCheckInactive:"#BBE1DC",threeDots:"#00BFA5",progressBarActive:"#00bfa5",progressBarBg:"#f0efef",planItemCheckBorder:"#00BFA5"}},"family-locator":{colors:{primary:"#3393EC",buttonHover:"#1F7ACE",buttonDisabled:"#9ec9f6",optionInactive:"#F0F8FF",optionBorderInactive:"#F0F8FF",optionActive:"#C5E3FF",optionBorderActive:"#007AFF",optionImgActive:"#8BB6DE",optionImgInactive:"#C3E1FF",optionCheckActive:"#007AFF",optionCheckInactive:"#CCDDF0",threeDots:"#5281BD",progressBarActive:"#3393ec",progressBarBg:"#f3f3f3",planItemCheckBorder:"#3393EC"}},familo:{colors:{primary:"#F58A3C",buttonHover:"#C56A28",buttonDisabled:"#fcc5a1",optionInactive:"#FEF7F1",optionBorderInactive:"#FEF7F1",optionActive:"#FFE5D2",optionBorderActive:"#F58A3C",optionImgActive:"#ECC6AA",optionImgInactive:"#FFE4D0",optionCheckActive:"#F58A3C",optionCheckInactive:"#EED6C5",threeDots:"#F58A3C",progressBarActive:"#f58a3c",progressBarBg:"#f3f3f3",planItemCheckBorder:"#F58A3C"}},brainbloom:{colors:{text:"#fff",bodyBackground:"#292C44",primary:"#FDC21C",buttonHover:"#FDC21C",buttonDisabled:"#494D6D",buttonDisabledTextColor:"#747794",optionInactive:"#404464",optionBorderInactive:"#404464",optionActive:"#FDC21C",optionBorderActive:"#fdc21c",optionActiveText:"#292C44",optionImgActive:"#292C44",optionImgInactive:"#898FBD",optionCheckActive:"#292C44",optionCheckInactive:"#898FBD",threeDots:"#fff",progressBarActive:"#FDC21C",progressBarBg:"#F0EFEF",circularProgressBg:"#404464",inputBg:"#404464",reviewItemBg:"#404464",planItemBg:"#404464",planItemBorder:"#5D638F",planItemLabelBg:"#515684",planItemCheckBorder:"#CF9B08",planItemCheckBg:"#292C44",planItemLabelColorActive:"#292C44",planItemLabelColorInactive:"#8A8FB2"},maxContentWidth:"343",sidePadding:"16"}},getTheme=function(){var projectName=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"geozilla",currentTheme=themes[projectName.toLowerCase()],mergedTheme=Object.keys(currentTheme).reduce(function(acc,key){return _object_spread({},acc,"object"==typeof currentTheme[key]?_define_property({},key,_object_spread({},defaultTheme[key],currentTheme[key])):{})},{});return _object_spread({},defaultTheme,currentTheme,mergedTheme)}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gs:()=>mergeStyleObjects,Lu:()=>reactChildrenMapping,MW:()=>useDynamicHeight,j1:()=>getTextAlign,nc:()=>getCssSize,p5:()=>getFormattedStyles});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var getTextAlign=function(){var isArabic=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return isArabic?"right":"left"},reactChildrenMapping=function(children){var customProps=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(children)return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,function(child,index){if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)){var props=_object_spread({key:index},customProps,child.props);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,props)}})},useDynamicHeight=function(){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var setDynamicVH=function(){var vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(vh,"px"))};return setTimeout(function(){setDynamicVH(),window.addEventListener("resize",setDynamicVH,!1)},100),function(){return window.removeEventListener("resize",setDynamicVH,!1)}},[])},getCssSize=function(){var val=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return isNaN(+val)?val.toString():"".concat(val||0,"px")},mergeStyleObjects=function(){var obj1=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},obj2=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},mergedTheme=Object.keys(obj1).reduce(function(acc,key){return _object_spread({},acc,_define_property({},key,[obj1[key],obj2[key]].join(";")))},{});return _object_spread({},obj1,obj2,mergedTheme)},getFormattedStyles=function(styles,defaultKey){return styles?"string"==typeof styles?_define_property({},defaultKey,styles):styles:_define_property({},defaultKey,"")}}}]);