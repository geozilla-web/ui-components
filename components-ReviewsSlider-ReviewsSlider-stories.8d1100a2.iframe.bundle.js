"use strict";(self.webpackChunk_applyft_web_ui_components=self.webpackChunk_applyft_web_ui_components||[]).push([[367],{"./src/components/ReviewsSlider/ReviewsSlider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ReviewsSliderStoryTemplate:()=>ReviewsSliderStoryTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ReviewsSlider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ReviewsSlider/ReviewsSlider.tsx"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core/index.ts"),_Layouts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layouts/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var reviewsList=[{name:"John Saymont",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_1.png"},{name:"Erica Hilertoff",text:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_2.png"},{name:"Yan Frunder",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_3.png"},{name:"Kiara Martínez",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_4.png"},{name:"Wesley Everson",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_5.png"},{name:"Shanon Burges",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.",img:"https://quiz-stage.brainbloom.me/assets/images/reviewers/review_6.png"}];let __WEBPACK_DEFAULT_EXPORT__={component:function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core__WEBPACK_IMPORTED_MODULE_3__.U_,{projectTheme:props.theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_4__.O,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewsSlider__WEBPACK_IMPORTED_MODULE_1__.z,_object_spread_props(_object_spread({},props),{reviewsList:reviewsList}))))},parameters:{controls:{exclude:["mt","mb"]}},argTypes:_object_spread({},_stories__WEBPACK_IMPORTED_MODULE_2__.W)};var ReviewsSliderStoryTemplate={args:{theme:(0,_core__WEBPACK_IMPORTED_MODULE_3__.O4)(),interval:3,staticMode:!0}};ReviewsSliderStoryTemplate.storyName="ReviewsSlider",ReviewsSliderStoryTemplate.parameters={...ReviewsSliderStoryTemplate.parameters,docs:{...ReviewsSliderStoryTemplate.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: getTheme(),\n    interval: 3,\n    staticMode: true\n  }\n}",...ReviewsSliderStoryTemplate.parameters?.docs?.source}}};let __namedExportsOrder=["ReviewsSliderStoryTemplate"]},"./src/components/ReviewsSlider/ReviewsSlider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ReviewsSlider});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  width: 100%;\n  max-width: ","px;\n  margin: 0 auto;\n  overflow: hidden;\n  ",";\n  ",";\n  position: relative;\n  flex-shrink: 0;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  width: 100%;\n  ",";\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  background-color: ",";\n  border: 1px solid #DEE0E6;\n  border-radius: 12px;\n  flex: 1 0 calc(100vw - ","px);\n  max-width: ","px;\n  padding: 12px 16px;\n  text-align: ",";\n  transition: transform 0.5s ease;\n  \n  &:not(:last-child) {\n    ",";\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n  padding-left: 38px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 30px;\n  position: relative;\n  \n  &:before {\n    content: '';\n    display: block;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    ",";\n    background-color: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([""]);return _templateObject4=function _templateObject(){return data},data}var ReviewsContainer=styled_components_browser_esm.Ay.div(_templateObject(),function(param){var theme=param.theme;return null==theme?void 0:theme.maxContentWidth},function(param){var $mt=param.$mt;return void 0!==$mt&&"margin-top: ".concat((0,utils.nc)($mt))},function(param){var $mb=param.$mb;return void 0!==$mb&&"margin-bottom: ".concat((0,utils.nc)($mb))}),ReviewsBlock=styled_components_browser_esm.Ay.div(_templateObject1(),function(param){return param.$staticMode?"\n    transform: translateX(0) !important;\n  ":"\n    display: flex;\n    transition: transform 0.5s ease;\n  "}),ReviewsItem=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){var _theme_colors,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.reviewItemBg},function(param){var theme=param.theme;return 2*((null==theme?void 0:theme.sidePadding)||16)},function(param){var theme=param.theme;return null==theme?void 0:theme.maxContentWidth},function(param){var $isArabic=param.$isArabic;return(0,utils.j1)($isArabic)},function(param){var $staticMode=param.$staticMode,theme=param.theme;return $staticMode?"\n      margin-bottom: 16px;\n    ":"\n      margin-right: ".concat((null==theme?void 0:theme.sidePadding)||16,"px\n    ")}),Reviewer=styled_components_browser_esm.Ay.div(_templateObject3(),function(param){var $image=param.$image;return $image&&"background: url(".concat($image,") center / contain no-repeat")},function(param){var _theme_colors,theme=param.theme;return null==theme?void 0:null===(_theme_colors=theme.colors)||void 0===_theme_colors?void 0:_theme_colors.bodyBackground}),ReviewText=styled_components_browser_esm.Ay.div(_templateObject4());function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ReviewsSlider=function(_param){var reviewsList=_param.reviewsList,mt=_param.mt,mb=_param.mb,_param_interval=_param.interval,_param_staticMode=_param.staticMode,staticMode=void 0!==_param_staticMode&&_param_staticMode,_param_isArabic=_param.isArabic,isArabic=void 0!==_param_isArabic&&_param_isArabic,rest=_object_without_properties(_param,["reviewsList","mt","mb","interval","staticMode","isArabic"]),theme=null==rest?void 0:rest.theme,currentTheme=(0,styled_components_browser_esm.DP)(),sliderInterval=1e3*(void 0===_param_interval?2:_param_interval),sliderRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(!1),2),stopAutoScroll=_useState[0],setStopAutoScroll=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),lastItemAdded=_useState1[0],setLastItemAdded=_useState1[1];return(0,react.useEffect)(function(){if(!staticMode&&!lastItemAdded){var slider=sliderRef.current;slider&&(slider.appendChild(slider.children[0].cloneNode(!0)),setLastItemAdded(!0))}},[staticMode]),(0,react.useEffect)(function(){if(!staticMode){var slider=sliderRef.current;if(slider){var counter=0,sliderItemWidth=slider.children[0].offsetWidth,sliderItemMargin=(null==currentTheme?void 0:currentTheme.sidePadding)||16,updateSlidePosition=function(){slider.style.cssText="\n        transform: translateX(calc(-".concat(counter*sliderItemWidth,"px - ").concat(counter*sliderItemMargin,"px))\n      "),counter===reviewsList.length&&setTimeout(function(){counter=0,slider.style.cssText="transition: none; transform: translateX(0)"},sliderInterval/2)},interval=setInterval(function(){stopAutoScroll||(counter++,updateSlidePosition())},sliderInterval);return function(){return clearInterval(interval)}}}},[staticMode,stopAutoScroll,reviewsList.length,sliderInterval]),react.createElement(ReviewsContainer,{$mt:mt,$mb:mb,theme:theme},react.createElement(ReviewsBlock,{ref:sliderRef,id:"slider",onTouchStart:function(e){staticMode||setStopAutoScroll(!0)},onTouchMove:function(e){if(staticMode)return},onTouchEnd:function(e){staticMode||setStopAutoScroll(!1)},$staticMode:staticMode,theme:theme},reviewsList.map(function(r,index){var name=r.name,text=r.text,img=r.img;return react.createElement(ReviewsItem,{$staticMode:staticMode,$isArabic:isArabic,theme:theme,key:index},react.createElement(Reviewer,{$image:img,theme:theme},name||" "),react.createElement(ReviewText,{theme:theme},text))})))};try{ReviewsSlider.displayName="ReviewsSlider",ReviewsSlider.__docgenInfo={description:"",displayName:"ReviewsSlider",props:{reviewsList:{defaultValue:null,description:"",name:"reviewsList",required:!0,type:{name:"ReviewProps[]"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"string | number"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"string | number"}},interval:{defaultValue:{value:"2"},description:"",name:"interval",required:!1,type:{name:"number"}},staticMode:{defaultValue:{value:"false"},description:"",name:"staticMode",required:!1,type:{name:"boolean"}},isArabic:{defaultValue:{value:"false"},description:"",name:"isArabic",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ReviewsSlider/ReviewsSlider.tsx#ReviewsSlider"]={docgenInfo:ReviewsSlider.__docgenInfo,name:"ReviewsSlider",path:"src/components/ReviewsSlider/ReviewsSlider.tsx#ReviewsSlider"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>themesToControls});var _core_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/theme/index.ts"),themesToControls={theme:{options:Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj),mapping:function(){var obj={};return Object.keys(_core_theme__WEBPACK_IMPORTED_MODULE_0__.Zj).map(function(k){return obj[k]=(0,_core_theme__WEBPACK_IMPORTED_MODULE_0__.O4)(k)}),obj}(),control:"inline-radio"}}}}]);