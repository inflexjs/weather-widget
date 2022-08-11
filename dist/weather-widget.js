/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_WeatherWidget_vue_vue_type_style_index_0_id_3d10413b_prod_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_WeatherWidget_vue_vue_type_style_index_0_id_3d10413b_prod_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_WeatherWidget_vue_vue_type_style_index_0_id_3d10413b_prod_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_WeatherWidget_vue_vue_type_style_index_0_id_3d10413b_prod_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_WeatherWidget_vue_vue_type_style_index_0_id_3d10413b_prod_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h2[data-v-3d10413b],p[data-v-3d10413b],span[data-v-3d10413b]{margin:0;padding:0}.weather-widget[data-v-3d10413b]{position:relative;font-family:Source Sans Pro,sans-serif;font-size:14px;font-weight:400;color:#545454;width:250px;box-shadow:0 2px 10px rgba(0,0,0,.1);border-radius:10px;min-height:270px;overflow:hidden}.weather-widget__container[data-v-3d10413b]{padding:0 20px;margin:20px 5px 20px 0;height:100%;display:flex;flex-direction:column;max-height:650px;overflow-x:hidden;overflow-y:auto}.weather-widget__container[data-v-3d10413b]::-webkit-scrollbar{width:4px}.weather-widget__container[data-v-3d10413b]::-webkit-scrollbar-track{background-color:transparent;border-radius:100px}.weather-widget__container[data-v-3d10413b]::-webkit-scrollbar-thumb{background-color:transparent;border-radius:4px}.weather-widget__container[data-v-3d10413b]:hover::-webkit-scrollbar-track{background-color:hsla(0,0%,100%,.1)}.weather-widget__container[data-v-3d10413b]:hover::-webkit-scrollbar-thumb{background-color:#dcdcdc}.weather-widget__field[data-v-3d10413b]{position:relative}.weather-widget__field+.weather-widget__field[data-v-3d10413b]{margin-top:20px;padding-top:20px}.weather-widget__field+.weather-widget__field[data-v-3d10413b]:before{content:\"\";position:absolute;top:0;left:50%;width:80%;height:1px;background-color:#dcdcdc;transform:translateX(-50%)}.weather-widget__button[data-v-3d10413b]{padding:0;width:20px;height:20px;text-align:center;font-family:inherit;font-size:inherit;border:none;background-color:transparent;cursor:pointer}.weather-widget__button svg[data-v-3d10413b]{width:100%;height:100%;fill:#dcdcdc;transition:fill .1s ease-in}.weather-widget__button[data-v-3d10413b]:disabled,.weather-widget__button[disabled][data-v-3d10413b]{cursor:default}.weather-widget__button:not(:disabled).weather-widget__button:hover svg[data-v-3d10413b]{fill:#545454}.weather-widget__button:not(:disabled).weather-widget__button--delete:hover svg[data-v-3d10413b]{fill:#ec9e9e}.weather-widget__button--settings[data-v-3d10413b]{position:absolute;top:20px;right:20px;z-index:3}.weather-widget__button--delete[data-v-3d10413b]{position:absolute;top:50%;right:5px;transform:translateY(-50%)}.weather-widget__button--drag[data-v-3d10413b]{display:inline-block;vertical-align:middle;margin-right:5px;cursor:-webkit-grab;cursor:grab}.weather-widget__button--drag svg[data-v-3d10413b]{fill:#545454}.weather-widget__button--enter[data-v-3d10413b]{vertical-align:middle}.weather-widget__title[data-v-3d10413b]{margin:0;padding:0;font-size:16px;font-weight:600}.weather-widget__temperature span[data-v-3d10413b]{display:inline-block;vertical-align:middle;width:50%;text-align:left;font-weight:600;font-size:40px}.weather-widget__image[data-v-3d10413b]{width:50%;display:inline-block;vertical-align:middle;text-align:center}.weather-widget__image img[data-v-3d10413b]{height:100%;display:inline-block;vertical-align:middle}.weather-widget__description[data-v-3d10413b]{margin-bottom:15px}.weather-widget__data[data-v-3d10413b]{padding:0;margin:0 0 15px}.weather-widget__data li[data-v-3d10413b]{position:relative;display:inline-block;vertical-align:middle;width:50%;text-align:center}.weather-widget__data li[data-v-3d10413b]:before{content:\"\";position:absolute;left:0;top:50%;width:5px;height:5px;border-radius:50%;transform:translateY(-50%);background-color:#545454}.weather-widget__information[data-v-3d10413b]{-moz-column-count:2;column-count:2;-moz-column-gap:5px;column-gap:5px}.weather-widget__text[data-v-3d10413b]{page-break-inside:avoid;-moz-column-break-inside:avoid;break-inside:avoid}.weather-widget__text+.weather-widget__text[data-v-3d10413b]{margin-top:10px}.weather-widget__loading[data-v-3d10413b]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.weather-widget__loading p[data-v-3d10413b]{text-align:center;font-size:18px;font-weight:600}.weather-widget__loading svg[data-v-3d10413b]{transform:translate(-50%,-50%);transform-origin:center;-webkit-animation:rotator-3d10413b 1.4s linear infinite;animation:rotator-3d10413b 1.4s linear infinite}.weather-widget__loading circle[data-v-3d10413b]{stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center;stroke:#545454;-webkit-animation:dash-3d10413b 1.4s ease-in-out infinite;animation:dash-3d10413b 1.4s ease-in-out infinite}.weather-widget__menu[data-v-3d10413b]{position:absolute;padding:20px;top:0;left:0;right:0;bottom:0;border-radius:10px;z-index:2;background-color:#fff}.weather-widget__list[data-v-3d10413b]{flex-grow:1;margin-top:15px;margin-bottom:10px;height:calc(100% - 98px);overflow-x:hidden;overflow-y:auto}@media(hover:hover){.weather-widget__list[data-v-3d10413b]::-webkit-scrollbar{width:4px}.weather-widget__list[data-v-3d10413b]::-webkit-scrollbar-track{background-color:hsla(0,0%,100%,.1);border-radius:4px}.weather-widget__list[data-v-3d10413b]::-webkit-scrollbar-thumb{background-color:#dcdcdc;border-radius:4px}}.weather-widget__location[data-v-3d10413b]{position:relative;padding:5px;margin-right:5px;background-color:#f9f9f9}.weather-widget__location p[data-v-3d10413b]{display:inline-block;vertical-align:middle}.weather-widget__location+.weather-widget__location[data-v-3d10413b]{margin-top:15px}.weather-widget__label[data-v-3d10413b]{font-weight:600;display:block;margin-bottom:5px}.weather-widget__wrapper input[data-v-3d10413b]{width:80%}.weather-widget__wrapper button[data-v-3d10413b]{width:20%}.weather-widget__input[data-v-3d10413b]{padding:5px 10px;border-radius:2px;border:1px solid #dcdcdc;outline:none;box-sizing:border-box;width:80%;font-size:inherit;font-family:inherit;display:inline-block;vertical-align:middle}.weather-widget .fade-enter[data-v-3d10413b]{opacity:0}.weather-widget .fade-enter-active[data-v-3d10413b]{transition:opacity .1s ease-in!important}.weather-widget .fade-enter-to[data-v-3d10413b],.weather-widget .fade-leave[data-v-3d10413b]{opacity:1}.weather-widget .fade-leave-active[data-v-3d10413b]{transition:opacity .1s ease-out!important}.weather-widget .fade-leave-to[data-v-3d10413b]{opacity:0}.weather-widget .fade-up-enter[data-v-3d10413b]{transform:translateY(-10px);opacity:0}.weather-widget .fade-up-enter-active[data-v-3d10413b]{transition:all .3s ease}.weather-widget .fade-up-enter-to[data-v-3d10413b],.weather-widget .fade-up-leave[data-v-3d10413b]{transform:translate(0);opacity:1}.weather-widget .fade-up-leave-active[data-v-3d10413b]{transition:all .1s ease}.weather-widget .fade-up-leave-to[data-v-3d10413b]{transform:translateY(-10px);opacity:0}@-webkit-keyframes rotator-3d10413b{0%{transform:rotate(0deg)}to{transform:rotate(270deg)}}@keyframes rotator-3d10413b{0%{transform:rotate(0deg)}to{transform:rotate(270deg)}}@-webkit-keyframes dash-3d10413b{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;transform:rotate(135deg)}to{stroke-dashoffset:187;transform:rotate(450deg)}}@keyframes dash-3d10413b{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;transform:rotate(135deg)}to{stroke-dashoffset:187;transform:rotate(450deg)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 169:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(535);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(339)/* ["default"] */ .Z)
module.exports.__inject__ = function (shadowRoot) {
  add("1478d4cd", content, shadowRoot)
};

/***/ }),

/***/ 339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ addStylesToShadowDOM)
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

;// CONCATENATED MODULE: external "Vue"
const external_Vue_namespaceObject = Vue;
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ const vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__(645);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/WeatherWidget.vue?vue&type=template&id=3d10413b&scoped=true&shadow
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('article',{staticClass:"weather-widget"},[(!_vm.loading)?_c('div',{staticClass:"weather-widget__container"},[_c('button',{key:"settings",staticClass:"weather-widget__button weather-widget__button--settings",on:{"click":_vm.onToggleMenu}},[_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(!_vm.menuActive)?_c('svg',{key:"gear",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20px","height":"20px","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M16 12a4 4 0 11-8 0 4 4 0 018 0zm-1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"}}),_c('path',{staticClass:"weather-widget__gear",attrs:{"fill-rule":"evenodd","d":"M12 1c-.268 0-.534.01-.797.028-.763.055-1.345.617-1.512 1.304l-.352 1.45c-.02.078-.09.172-.225.22a8.45 8.45 0 00-.728.303c-.13.06-.246.044-.315.002l-1.274-.776c-.604-.368-1.412-.354-1.99.147-.403.348-.78.726-1.129 1.128-.5.579-.515 1.387-.147 1.99l.776 1.275c.042.069.059.185-.002.315-.112.237-.213.48-.302.728-.05.135-.143.206-.221.225l-1.45.352c-.687.167-1.249.749-1.304 1.512a11.149 11.149 0 000 1.594c.055.763.617 1.345 1.304 1.512l1.45.352c.078.02.172.09.22.225.09.248.191.491.303.729.06.129.044.245.002.314l-.776 1.274c-.368.604-.354 1.412.147 1.99.348.403.726.78 1.128 1.129.579.5 1.387.515 1.99.147l1.275-.776c.069-.042.185-.059.315.002.237.112.48.213.728.302.135.05.206.143.225.221l.352 1.45c.167.687.749 1.249 1.512 1.303a11.125 11.125 0 001.594 0c.763-.054 1.345-.616 1.512-1.303l.352-1.45c.02-.078.09-.172.225-.22.248-.09.491-.191.729-.303.129-.06.245-.044.314-.002l1.274.776c.604.368 1.412.354 1.99-.147.403-.348.78-.726 1.129-1.128.5-.579.515-1.387.147-1.99l-.776-1.275c-.042-.069-.059-.185.002-.315.112-.237.213-.48.302-.728.05-.135.143-.206.221-.225l1.45-.352c.687-.167 1.249-.749 1.303-1.512a11.125 11.125 0 000-1.594c-.054-.763-.616-1.345-1.303-1.512l-1.45-.352c-.078-.02-.172-.09-.22-.225a8.469 8.469 0 00-.303-.728c-.06-.13-.044-.246-.002-.315l.776-1.274c.368-.604.354-1.412-.147-1.99-.348-.403-.726-.78-1.128-1.129-.579-.5-1.387-.515-1.99-.147l-1.275.776c-.069.042-.185.059-.315-.002a8.465 8.465 0 00-.728-.302c-.135-.05-.206-.143-.225-.221l-.352-1.45c-.167-.687-.749-1.249-1.512-1.304A11.149 11.149 0 0012 1zm-.69 1.525a9.648 9.648 0 011.38 0c.055.004.135.05.162.16l.351 1.45c.153.628.626 1.08 1.173 1.278.205.074.405.157.6.249a1.832 1.832 0 001.733-.074l1.275-.776c.097-.06.186-.036.228 0 .348.302.674.628.976.976.036.042.06.13 0 .228l-.776 1.274a1.832 1.832 0 00-.074 1.734c.092.195.175.395.248.6.198.547.652 1.02 1.278 1.172l1.45.353c.111.026.157.106.161.161a9.653 9.653 0 010 1.38c-.004.055-.05.135-.16.162l-1.45.351a1.833 1.833 0 00-1.278 1.173 6.926 6.926 0 01-.25.6 1.832 1.832 0 00.075 1.733l.776 1.275c.06.097.036.186 0 .228a9.555 9.555 0 01-.976.976c-.042.036-.13.06-.228 0l-1.275-.776a1.832 1.832 0 00-1.733-.074 6.926 6.926 0 01-.6.248 1.833 1.833 0 00-1.172 1.278l-.353 1.45c-.026.111-.106.157-.161.161a9.653 9.653 0 01-1.38 0c-.055-.004-.135-.05-.162-.16l-.351-1.45a1.833 1.833 0 00-1.173-1.278 6.928 6.928 0 01-.6-.25 1.832 1.832 0 00-1.734.075l-1.274.776c-.097.06-.186.036-.228 0a9.56 9.56 0 01-.976-.976c-.036-.042-.06-.13 0-.228l.776-1.275a1.832 1.832 0 00.074-1.733 6.948 6.948 0 01-.249-.6 1.833 1.833 0 00-1.277-1.172l-1.45-.353c-.111-.026-.157-.106-.161-.161a9.648 9.648 0 010-1.38c.004-.055.05-.135.16-.162l1.45-.351a1.833 1.833 0 001.278-1.173 6.95 6.95 0 01.249-.6 1.832 1.832 0 00-.074-1.734l-.776-1.274c-.06-.097-.036-.186 0-.228.302-.348.628-.674.976-.976.042-.036.13-.06.228 0l1.274.776a1.832 1.832 0 001.734.074 6.95 6.95 0 01.6-.249 1.833 1.833 0 001.172-1.277l.353-1.45c.026-.111.106-.157.161-.161z"}})]):_c('svg',{key:"close",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20px","height":"20px","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 00-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1045.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0045.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 10-45.12-45.184z"}})])])],1),_vm._l((_vm.locationFields),function(field,index){return _c('div',{staticClass:"weather-widget__field"},[_c('div',{staticClass:"weather-widget__header"},[_c('h2',{staticClass:"weather-widget__title"},[_vm._v(_vm._s(field.city)+", "+_vm._s(field.country))])]),_c('div',{staticClass:"weather-widget__temperature"},[_c('div',{staticClass:"weather-widget__image"},[_c('img',{attrs:{"src":`http://openweathermap.org/img/wn/${field.icon}@2x.png`,"alt":field.icon}})]),_c('span',[_vm._v(_vm._s(field.temp)+"°C")])]),_c('p',{staticClass:"weather-widget__description"},[_vm._v("Feels like "+_vm._s(field.feelsLike)+"°C. "+_vm._s(field.description)+". "+_vm._s(_vm.getUsefulInformation(index))+".")]),_c('ul',{staticClass:"weather-widget__data"},[_c('li',[_c('p',[_vm._v(" "+_vm._s(field.windSpeed)+"m/s ")])]),_c('li',[_c('p',[_vm._v(" "+_vm._s(field.pressure)+"hPa ")])])]),_c('div',{staticClass:"weather-widget__information"},_vm._l((field.information),function(item){return _c('p',{staticClass:"weather-widget__text"},[_vm._v(" "+_vm._s(item.text)+" ")])}),0)])}),_c('transition',{attrs:{"name":"fade-up","mode":"out-in"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.menuActive),expression:"menuActive"}],staticClass:"weather-widget__menu"},[_c('div',{staticClass:"weather-widget__header"},[_c('h2',{staticClass:"weather-widget__title"},[_vm._v("Settings")])]),_c('div',{staticClass:"weather-widget__list"},_vm._l((_vm.locationFields),function(field,index){return _c('div',{key:index,staticClass:"weather-widget__location"},[_c('button',{staticClass:"weather-widget__button weather-widget__button--drag",attrs:{"disabled":!(_vm.locationFields.length > 1)}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20px","height":"20px","viewBox":"0 0 24 24","data-name":"Layer 1"}},[_c('path',{attrs:{"d":"M8.5,10a2,2,0,1,0,2,2A2,2,0,0,0,8.5,10Zm0,7a2,2,0,1,0,2,2A2,2,0,0,0,8.5,17Zm7-10a2,2,0,1,0-2-2A2,2,0,0,0,15.5,7Zm-7-4a2,2,0,1,0,2,2A2,2,0,0,0,8.5,3Zm7,14a2,2,0,1,0,2,2A2,2,0,0,0,15.5,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,15.5,10Z"}})])]),_c('p',[_vm._v(_vm._s(field.city)+", "+_vm._s(field.country))]),_c('button',{staticClass:"weather-widget__button weather-widget__button--delete",attrs:{"disabled":!(_vm.locationFields.length > 1)},on:{"click":function($event){return _vm.deleteFromLocationFields(index)}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20px","height":"20px","viewBox":"0 0 16 16","fill":"currentColor"}},[_c('path',{attrs:{"d":"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}})])])])}),0),_c('div',{staticClass:"weather-widget__include"},[_c('label',{staticClass:"weather-widget__label"},[_vm._v("Add location:")]),_c('div',{staticClass:"weather-widget__wrapper"},[_c('input',{staticClass:"weather-widget__input",attrs:{"placeholder":"Enter your location","type":"text"}}),_c('button',{staticClass:"weather-widget__button weather-widget__button--enter"},[_c('svg',{staticClass:"icon",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20px","height":"20px","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}})])])])])])])],2):_c('div',{staticClass:"weather-widget__loading"},[(_vm.errorMessage)?_c('p',[_vm._v(" "+_vm._s(_vm.errorMessage)+" ")]):_c('svg',{attrs:{"width":"65px","height":"65px","viewBox":"0 0 66 66","xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{attrs:{"fill":"none","stroke-width":"6","stroke-linecap":"round","cx":"33","cy":"33","r":"30"}})])])])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/WeatherWidget.vue?vue&type=script&lang=js&shadow

/* harmony default export */ const WeatherWidgetvue_type_script_lang_js_shadow = ({
	name: "weather-widget",
	props: {
		apiKey: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			loading: true,
			menuActive: false,
			errorMessage: '',
			storageName: 'weather-widget',
			currentPosition: {
				latitude: 0,
				longitude: 0
			},
			locationFields: []
		}
	},
	methods: {
		onToggleMenu() {
			this.menuActive = !this.menuActive
		},
		deleteFromLocationFields(index) {
			console.log({index})
			if (this.locationFields.length >= 1) {
				this.locationFields.splice(index, 1)
			}
		},
		setLocalStorageData(itemName, itemData) {
			return localStorage.setItem(itemName, `{latitude:${itemData.latitude},longitude:${itemData.longitude}}`)
		},
		getLocalStorageData(itemName) {
			return localStorage.getItem(itemName)
		},
		getLocationsDataFromApi() {
			const urlPath = `https://api.openweathermap.org/data/2.5/weather?lat=${this.currentPosition.latitude}&lon=${this.currentPosition.longitude}&cnt=1&appid=${this.apiKey}&units=metric`
			fetch(urlPath)
			.then(response => response.json())
			.then(result => {
				console.log({result})
				this.locationFields.push({
					id: result.id,
					city: result.name, // 'Moscow'
					country: result.sys.country, // 'RU'
					icon: result.weather[0].icon, // '04n'
					temp: Math.round(result.main.temp), // '14'
					maxTemp: Math.round(result.main.temp_max), // '14'
					minTemp: Math.round(result.main.temp_min), // '14'
					feelsLike: Math.round(result.main.feels_like) , //'12'
					description: result.weather[0].main, //'Clouds'
					semiDescription: result.weather[0].description, // 'Scattered clouds'
					windSpeed: result.wind.speed,
					pressure: result.main.pressure,
					information: [
						{
							text: `Humidity: ${result.main.humidity}%`
						},
						{
							text: result.visibility > 1000 ? `Visibility: ${result.visibility / 1000}km` : `Visibility: ${result.visibility}m`
						},
						{
							text: `Zone: UTC+${+result.timezone / 3600}`
						},
						{
							text: `Gust: ${result.wind.gust}m/s`
						},
						{
							text: `Cloudiness: ${result.clouds.all}%`
						},
						{
							text: `Sea level: ${result.main.sea_level}m`
						},
					]
				})
			})
			.catch(error => console.log(error))
			.finally(() => this.loading = false)
		},
		getUsefulInformation(index) {
			try {
				const temp = this.locationFields[index].temp
				const maxTemp = this.locationFields[index].maxTemp
				const minTemp = this.locationFields[index].minTemp
				if (temp > maxTemp) {
					return `Now it is ${temp - maxTemp}°C more than the max temp today`
				} else if (temp > minTemp) {
					return `Now it is ${temp - minTemp}°C more than the min temp today`
				} else if (temp === maxTemp) {
					return 'This is the hottest record for today'
				} else if (temp === minTemp) {
					return 'This is the coldest reading today'
				}
			} catch (e) {
				console.log(e)
			}
		},
		initWidget() {
			navigator.geolocation.getCurrentPosition(async ({ coords }) => {
				const { latitude, longitude } = coords
				this.currentPosition.longitude = longitude
				this.currentPosition.latitude = latitude
				
				this.setLocalStorageData(this.storageName, this.currentPosition)
				this.getLocationsDataFromApi()
			}, ({ message }) => {
				this.errorMessage = message
				this.loading = true
			})
		}
	},
	mounted() {
		this.initWidget()
	}
});

;// CONCATENATED MODULE: ./src/components/WeatherWidget.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ const components_WeatherWidgetvue_type_script_lang_js_shadow = (WeatherWidgetvue_type_script_lang_js_shadow); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/WeatherWidget.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_WeatherWidgetvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3d10413b",
  null
  ,true
)

/* harmony default export */ const WeatherWidgetshadow = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('weather-widget', vue_wc_wrapper((external_Vue_default()), WeatherWidgetshadow))
})();

/******/ })()
;
//# sourceMappingURL=weather-widget.js.map