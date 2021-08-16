(function () {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**!
	 * Sortable 1.10.2
	 * @author	RubaXa   <trash@rubaxa.org>
	 * @author	owenm    <owen23355@gmail.com>
	 * @license MIT
	 */
	function _typeof(obj) {
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    var arguments$1 = arguments;

	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments$1[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectSpread(target) {
	  var arguments$1 = arguments;

	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments$1[i] != null ? arguments$1[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    });
	  }

	  return target;
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) { return {}; }
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) { continue; }
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) { return {}; }

	  var target = _objectWithoutPropertiesLoose(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) { continue; }
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) { continue; }
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; }

	    return arr2;
	  }
	}

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") { return Array.from(iter); }
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	var version = "1.10.2";

	function userAgent(pattern) {
	  if (typeof window !== 'undefined' && window.navigator) {
	    return !!
	    /*@__PURE__*/
	    navigator.userAgent.match(pattern);
	  }
	}

	var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
	var Edge = userAgent(/Edge/i);
	var FireFox = userAgent(/firefox/i);
	var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
	var IOS = userAgent(/iP(ad|od|hone)/i);
	var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

	var captureMode = {
	  capture: false,
	  passive: false
	};

	function on(el, event, fn) {
	  el.addEventListener(event, fn, !IE11OrLess && captureMode);
	}

	function off(el, event, fn) {
	  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
	}

	function matches(
	/**HTMLElement*/
	el,
	/**String*/
	selector) {
	  if (!selector) { return; }
	  selector[0] === '>' && (selector = selector.substring(1));

	  if (el) {
	    try {
	      if (el.matches) {
	        return el.matches(selector);
	      } else if (el.msMatchesSelector) {
	        return el.msMatchesSelector(selector);
	      } else if (el.webkitMatchesSelector) {
	        return el.webkitMatchesSelector(selector);
	      }
	    } catch (_) {
	      return false;
	    }
	  }

	  return false;
	}

	function getParentOrHost(el) {
	  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
	}

	function closest(
	/**HTMLElement*/
	el,
	/**String*/
	selector,
	/**HTMLElement*/
	ctx, includeCTX) {
	  if (el) {
	    ctx = ctx || document;

	    do {
	      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
	        return el;
	      }

	      if (el === ctx) { break; }
	      /* jshint boss:true */
	    } while (el = getParentOrHost(el));
	  }

	  return null;
	}

	var R_SPACE = /\s+/g;

	function toggleClass(el, name, state) {
	  if (el && name) {
	    if (el.classList) {
	      el.classList[state ? 'add' : 'remove'](name);
	    } else {
	      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
	      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
	    }
	  }
	}

	function css(el, prop, val) {
	  var style = el && el.style;

	  if (style) {
	    if (val === void 0) {
	      if (document.defaultView && document.defaultView.getComputedStyle) {
	        val = document.defaultView.getComputedStyle(el, '');
	      } else if (el.currentStyle) {
	        val = el.currentStyle;
	      }

	      return prop === void 0 ? val : val[prop];
	    } else {
	      if (!(prop in style) && prop.indexOf('webkit') === -1) {
	        prop = '-webkit-' + prop;
	      }

	      style[prop] = val + (typeof val === 'string' ? '' : 'px');
	    }
	  }
	}

	function matrix(el, selfOnly) {
	  var appliedTransforms = '';

	  if (typeof el === 'string') {
	    appliedTransforms = el;
	  } else {
	    do {
	      var transform = css(el, 'transform');

	      if (transform && transform !== 'none') {
	        appliedTransforms = transform + ' ' + appliedTransforms;
	      }
	      /* jshint boss:true */

	    } while (!selfOnly && (el = el.parentNode));
	  }

	  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
	  /*jshint -W056 */

	  return matrixFn && new matrixFn(appliedTransforms);
	}

	function find(ctx, tagName, iterator) {
	  if (ctx) {
	    var list = ctx.getElementsByTagName(tagName),
	        i = 0,
	        n = list.length;

	    if (iterator) {
	      for (; i < n; i++) {
	        iterator(list[i], i);
	      }
	    }

	    return list;
	  }

	  return [];
	}

	function getWindowScrollingElement() {
	  var scrollingElement = document.scrollingElement;

	  if (scrollingElement) {
	    return scrollingElement;
	  } else {
	    return document.documentElement;
	  }
	}
	/**
	 * Returns the "bounding client rect" of given element
	 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
	 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
	 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
	 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
	 * @param  {[HTMLElement]} container              The parent the element will be placed in
	 * @return {Object}                               The boundingClientRect of el, with specified adjustments
	 */


	function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
	  if (!el.getBoundingClientRect && el !== window) { return; }
	  var elRect, top, left, bottom, right, height, width;

	  if (el !== window && el !== getWindowScrollingElement()) {
	    elRect = el.getBoundingClientRect();
	    top = elRect.top;
	    left = elRect.left;
	    bottom = elRect.bottom;
	    right = elRect.right;
	    height = elRect.height;
	    width = elRect.width;
	  } else {
	    top = 0;
	    left = 0;
	    bottom = window.innerHeight;
	    right = window.innerWidth;
	    height = window.innerHeight;
	    width = window.innerWidth;
	  }

	  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
	    // Adjust for translate()
	    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
	    // Not needed on <= IE11

	    if (!IE11OrLess) {
	      do {
	        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
	          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

	          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
	          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
	          bottom = top + elRect.height;
	          right = left + elRect.width;
	          break;
	        }
	        /* jshint boss:true */

	      } while (container = container.parentNode);
	    }
	  }

	  if (undoScale && el !== window) {
	    // Adjust for scale()
	    var elMatrix = matrix(container || el),
	        scaleX = elMatrix && elMatrix.a,
	        scaleY = elMatrix && elMatrix.d;

	    if (elMatrix) {
	      top /= scaleY;
	      left /= scaleX;
	      width /= scaleX;
	      height /= scaleY;
	      bottom = top + height;
	      right = left + width;
	    }
	  }

	  return {
	    top: top,
	    left: left,
	    bottom: bottom,
	    right: right,
	    width: width,
	    height: height
	  };
	}
	/**
	 * Checks if a side of an element is scrolled past a side of its parents
	 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
	 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
	 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
	 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
	 */


	function isScrolledPast(el, elSide, parentSide) {
	  var parent = getParentAutoScrollElement(el, true),
	      elSideVal = getRect(el)[elSide];
	  /* jshint boss:true */

	  while (parent) {
	    var parentSideVal = getRect(parent)[parentSide],
	        visible = void 0;

	    if (parentSide === 'top' || parentSide === 'left') {
	      visible = elSideVal >= parentSideVal;
	    } else {
	      visible = elSideVal <= parentSideVal;
	    }

	    if (!visible) { return parent; }
	    if (parent === getWindowScrollingElement()) { break; }
	    parent = getParentAutoScrollElement(parent, false);
	  }

	  return false;
	}
	/**
	 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
	 * and non-draggable elements
	 * @param  {HTMLElement} el       The parent element
	 * @param  {Number} childNum      The index of the child
	 * @param  {Object} options       Parent Sortable's options
	 * @return {HTMLElement}          The child at index childNum, or null if not found
	 */


	function getChild(el, childNum, options) {
	  var currentChild = 0,
	      i = 0,
	      children = el.children;

	  while (i < children.length) {
	    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
	      if (currentChild === childNum) {
	        return children[i];
	      }

	      currentChild++;
	    }

	    i++;
	  }

	  return null;
	}
	/**
	 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
	 * @param  {HTMLElement} el       Parent element
	 * @param  {selector} selector    Any other elements that should be ignored
	 * @return {HTMLElement}          The last child, ignoring ghostEl
	 */


	function lastChild(el, selector) {
	  var last = el.lastElementChild;

	  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
	    last = last.previousElementSibling;
	  }

	  return last || null;
	}
	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */


	function index(el, selector) {
	  var index = 0;

	  if (!el || !el.parentNode) {
	    return -1;
	  }
	  /* jshint boss:true */


	  while (el = el.previousElementSibling) {
	    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
	      index++;
	    }
	  }

	  return index;
	}
	/**
	 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
	 * The value is returned in real pixels.
	 * @param  {HTMLElement} el
	 * @return {Array}             Offsets in the format of [left, top]
	 */


	function getRelativeScrollOffset(el) {
	  var offsetLeft = 0,
	      offsetTop = 0,
	      winScroller = getWindowScrollingElement();

	  if (el) {
	    do {
	      var elMatrix = matrix(el),
	          scaleX = elMatrix.a,
	          scaleY = elMatrix.d;
	      offsetLeft += el.scrollLeft * scaleX;
	      offsetTop += el.scrollTop * scaleY;
	    } while (el !== winScroller && (el = el.parentNode));
	  }

	  return [offsetLeft, offsetTop];
	}
	/**
	 * Returns the index of the object within the given array
	 * @param  {Array} arr   Array that may or may not hold the object
	 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
	 * @return {Number}      The index of the object in the array, or -1
	 */


	function indexOfObject(arr, obj) {
	  for (var i in arr) {
	    if (!arr.hasOwnProperty(i)) { continue; }

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) { return Number(i); }
	    }
	  }

	  return -1;
	}

	function getParentAutoScrollElement(el, includeSelf) {
	  // skip to window
	  if (!el || !el.getBoundingClientRect) { return getWindowScrollingElement(); }
	  var elem = el;
	  var gotSelf = false;

	  do {
	    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
	    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
	      var elemCSS = css(elem);

	      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
	        if (!elem.getBoundingClientRect || elem === document.body) { return getWindowScrollingElement(); }
	        if (gotSelf || includeSelf) { return elem; }
	        gotSelf = true;
	      }
	    }
	    /* jshint boss:true */

	  } while (elem = elem.parentNode);

	  return getWindowScrollingElement();
	}

	function extend(dst, src) {
	  if (dst && src) {
	    for (var key in src) {
	      if (src.hasOwnProperty(key)) {
	        dst[key] = src[key];
	      }
	    }
	  }

	  return dst;
	}

	function isRectEqual(rect1, rect2) {
	  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
	}

	var _throttleTimeout;

	function throttle(callback, ms) {
	  return function () {
	    if (!_throttleTimeout) {
	      var args = arguments,
	          _this = this;

	      if (args.length === 1) {
	        callback.call(_this, args[0]);
	      } else {
	        callback.apply(_this, args);
	      }

	      _throttleTimeout = setTimeout(function () {
	        _throttleTimeout = void 0;
	      }, ms);
	    }
	  };
	}

	function cancelThrottle() {
	  clearTimeout(_throttleTimeout);
	  _throttleTimeout = void 0;
	}

	function scrollBy(el, x, y) {
	  el.scrollLeft += x;
	  el.scrollTop += y;
	}

	function clone(el) {
	  var Polymer = window.Polymer;
	  var $ = window.jQuery || window.Zepto;

	  if (Polymer && Polymer.dom) {
	    return Polymer.dom(el).cloneNode(true);
	  } else if ($) {
	    return $(el).clone(true)[0];
	  } else {
	    return el.cloneNode(true);
	  }
	}

	function setRect(el, rect) {
	  css(el, 'position', 'absolute');
	  css(el, 'top', rect.top);
	  css(el, 'left', rect.left);
	  css(el, 'width', rect.width);
	  css(el, 'height', rect.height);
	}

	function unsetRect(el) {
	  css(el, 'position', '');
	  css(el, 'top', '');
	  css(el, 'left', '');
	  css(el, 'width', '');
	  css(el, 'height', '');
	}

	var expando = 'Sortable' + new Date().getTime();

	function AnimationStateManager() {
	  var animationStates = [],
	      animationCallbackId;
	  return {
	    captureAnimationState: function captureAnimationState() {
	      animationStates = [];
	      if (!this.options.animation) { return; }
	      var children = [].slice.call(this.el.children);
	      children.forEach(function (child) {
	        if (css(child, 'display') === 'none' || child === Sortable.ghost) { return; }
	        animationStates.push({
	          target: child,
	          rect: getRect(child)
	        });

	        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


	        if (child.thisAnimationDuration) {
	          var childMatrix = matrix(child, true);

	          if (childMatrix) {
	            fromRect.top -= childMatrix.f;
	            fromRect.left -= childMatrix.e;
	          }
	        }

	        child.fromRect = fromRect;
	      });
	    },
	    addAnimationState: function addAnimationState(state) {
	      animationStates.push(state);
	    },
	    removeAnimationState: function removeAnimationState(target) {
	      animationStates.splice(indexOfObject(animationStates, {
	        target: target
	      }), 1);
	    },
	    animateAll: function animateAll(callback) {
	      var _this = this;

	      if (!this.options.animation) {
	        clearTimeout(animationCallbackId);
	        if (typeof callback === 'function') { callback(); }
	        return;
	      }

	      var animating = false,
	          animationTime = 0;
	      animationStates.forEach(function (state) {
	        var time = 0,
	            target = state.target,
	            fromRect = target.fromRect,
	            toRect = getRect(target),
	            prevFromRect = target.prevFromRect,
	            prevToRect = target.prevToRect,
	            animatingRect = state.rect,
	            targetMatrix = matrix(target, true);

	        if (targetMatrix) {
	          // Compensate for current animation
	          toRect.top -= targetMatrix.f;
	          toRect.left -= targetMatrix.e;
	        }

	        target.toRect = toRect;

	        if (target.thisAnimationDuration) {
	          // Could also check if animatingRect is between fromRect and toRect
	          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
	          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
	            // If returning to same place as started from animation and on same axis
	            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
	          }
	        } // if fromRect != toRect: animate


	        if (!isRectEqual(toRect, fromRect)) {
	          target.prevFromRect = fromRect;
	          target.prevToRect = toRect;

	          if (!time) {
	            time = _this.options.animation;
	          }

	          _this.animate(target, animatingRect, toRect, time);
	        }

	        if (time) {
	          animating = true;
	          animationTime = Math.max(animationTime, time);
	          clearTimeout(target.animationResetTimer);
	          target.animationResetTimer = setTimeout(function () {
	            target.animationTime = 0;
	            target.prevFromRect = null;
	            target.fromRect = null;
	            target.prevToRect = null;
	            target.thisAnimationDuration = null;
	          }, time);
	          target.thisAnimationDuration = time;
	        }
	      });
	      clearTimeout(animationCallbackId);

	      if (!animating) {
	        if (typeof callback === 'function') { callback(); }
	      } else {
	        animationCallbackId = setTimeout(function () {
	          if (typeof callback === 'function') { callback(); }
	        }, animationTime);
	      }

	      animationStates = [];
	    },
	    animate: function animate(target, currentRect, toRect, duration) {
	      if (duration) {
	        css(target, 'transition', '');
	        css(target, 'transform', '');
	        var elMatrix = matrix(this.el),
	            scaleX = elMatrix && elMatrix.a,
	            scaleY = elMatrix && elMatrix.d,
	            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
	            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
	        target.animatingX = !!translateX;
	        target.animatingY = !!translateY;
	        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
	        repaint(target); // repaint

	        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
	        css(target, 'transform', 'translate3d(0,0,0)');
	        typeof target.animated === 'number' && clearTimeout(target.animated);
	        target.animated = setTimeout(function () {
	          css(target, 'transition', '');
	          css(target, 'transform', '');
	          target.animated = false;
	          target.animatingX = false;
	          target.animatingY = false;
	        }, duration);
	      }
	    }
	  };
	}

	function repaint(target) {
	  return target.offsetWidth;
	}

	function calculateRealTime(animatingRect, fromRect, toRect, options) {
	  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
	}

	var plugins = [];
	var defaults = {
	  initializeByDefault: true
	};
	var PluginManager = {
	  mount: function mount(plugin) {
	    // Set default static properties
	    for (var option in defaults) {
	      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
	        plugin[option] = defaults[option];
	      }
	    }

	    plugins.push(plugin);
	  },
	  pluginEvent: function pluginEvent(eventName, sortable, evt) {
	    var _this = this;

	    this.eventCanceled = false;

	    evt.cancel = function () {
	      _this.eventCanceled = true;
	    };

	    var eventNameGlobal = eventName + 'Global';
	    plugins.forEach(function (plugin) {
	      if (!sortable[plugin.pluginName]) { return; } // Fire global events if it exists in this sortable

	      if (sortable[plugin.pluginName][eventNameGlobal]) {
	        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
	          sortable: sortable
	        }, evt));
	      } // Only fire plugin event if plugin is enabled in this sortable,
	      // and plugin has event defined


	      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
	        sortable[plugin.pluginName][eventName](_objectSpread({
	          sortable: sortable
	        }, evt));
	      }
	    });
	  },
	  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
	    plugins.forEach(function (plugin) {
	      var pluginName = plugin.pluginName;
	      if (!sortable.options[pluginName] && !plugin.initializeByDefault) { return; }
	      var initialized = new plugin(sortable, el, sortable.options);
	      initialized.sortable = sortable;
	      initialized.options = sortable.options;
	      sortable[pluginName] = initialized; // Add default options from plugin

	      _extends(defaults, initialized.defaults);
	    });

	    for (var option in sortable.options) {
	      if (!sortable.options.hasOwnProperty(option)) { continue; }
	      var modified = this.modifyOption(sortable, option, sortable.options[option]);

	      if (typeof modified !== 'undefined') {
	        sortable.options[option] = modified;
	      }
	    }
	  },
	  getEventProperties: function getEventProperties(name, sortable) {
	    var eventProperties = {};
	    plugins.forEach(function (plugin) {
	      if (typeof plugin.eventProperties !== 'function') { return; }

	      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
	    });
	    return eventProperties;
	  },
	  modifyOption: function modifyOption(sortable, name, value) {
	    var modifiedValue;
	    plugins.forEach(function (plugin) {
	      // Plugin must exist on the Sortable
	      if (!sortable[plugin.pluginName]) { return; } // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

	      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
	        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
	      }
	    });
	    return modifiedValue;
	  }
	};

	function dispatchEvent(_ref) {
	  var sortable = _ref.sortable,
	      rootEl = _ref.rootEl,
	      name = _ref.name,
	      targetEl = _ref.targetEl,
	      cloneEl = _ref.cloneEl,
	      toEl = _ref.toEl,
	      fromEl = _ref.fromEl,
	      oldIndex = _ref.oldIndex,
	      newIndex = _ref.newIndex,
	      oldDraggableIndex = _ref.oldDraggableIndex,
	      newDraggableIndex = _ref.newDraggableIndex,
	      originalEvent = _ref.originalEvent,
	      putSortable = _ref.putSortable,
	      extraEventProperties = _ref.extraEventProperties;
	  sortable = sortable || rootEl && rootEl[expando];
	  if (!sortable) { return; }
	  var evt,
	      options = sortable.options,
	      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

	  if (window.CustomEvent && !IE11OrLess && !Edge) {
	    evt = new CustomEvent(name, {
	      bubbles: true,
	      cancelable: true
	    });
	  } else {
	    evt = document.createEvent('Event');
	    evt.initEvent(name, true, true);
	  }

	  evt.to = toEl || rootEl;
	  evt.from = fromEl || rootEl;
	  evt.item = targetEl || rootEl;
	  evt.clone = cloneEl;
	  evt.oldIndex = oldIndex;
	  evt.newIndex = newIndex;
	  evt.oldDraggableIndex = oldDraggableIndex;
	  evt.newDraggableIndex = newDraggableIndex;
	  evt.originalEvent = originalEvent;
	  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

	  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

	  for (var option in allEventProperties) {
	    evt[option] = allEventProperties[option];
	  }

	  if (rootEl) {
	    rootEl.dispatchEvent(evt);
	  }

	  if (options[onName]) {
	    options[onName].call(sortable, evt);
	  }
	}

	var pluginEvent = function pluginEvent(eventName, sortable) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      originalEvent = _ref.evt,
	      data = _objectWithoutProperties(_ref, ["evt"]);

	  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
	    dragEl: dragEl,
	    parentEl: parentEl,
	    ghostEl: ghostEl,
	    rootEl: rootEl,
	    nextEl: nextEl,
	    lastDownEl: lastDownEl,
	    cloneEl: cloneEl,
	    cloneHidden: cloneHidden,
	    dragStarted: moved,
	    putSortable: putSortable,
	    activeSortable: Sortable.active,
	    originalEvent: originalEvent,
	    oldIndex: oldIndex,
	    oldDraggableIndex: oldDraggableIndex,
	    newIndex: newIndex,
	    newDraggableIndex: newDraggableIndex,
	    hideGhostForTarget: _hideGhostForTarget,
	    unhideGhostForTarget: _unhideGhostForTarget,
	    cloneNowHidden: function cloneNowHidden() {
	      cloneHidden = true;
	    },
	    cloneNowShown: function cloneNowShown() {
	      cloneHidden = false;
	    },
	    dispatchSortableEvent: function dispatchSortableEvent(name) {
	      _dispatchEvent({
	        sortable: sortable,
	        name: name,
	        originalEvent: originalEvent
	      });
	    }
	  }, data));
	};

	function _dispatchEvent(info) {
	  dispatchEvent(_objectSpread({
	    putSortable: putSortable,
	    cloneEl: cloneEl,
	    targetEl: dragEl,
	    rootEl: rootEl,
	    oldIndex: oldIndex,
	    oldDraggableIndex: oldDraggableIndex,
	    newIndex: newIndex,
	    newDraggableIndex: newDraggableIndex
	  }, info));
	}

	var dragEl,
	    parentEl,
	    ghostEl,
	    rootEl,
	    nextEl,
	    lastDownEl,
	    cloneEl,
	    cloneHidden,
	    oldIndex,
	    newIndex,
	    oldDraggableIndex,
	    newDraggableIndex,
	    activeGroup,
	    putSortable,
	    awaitingDragStarted = false,
	    ignoreNextClick = false,
	    sortables = [],
	    tapEvt,
	    touchEvt,
	    lastDx,
	    lastDy,
	    tapDistanceLeft,
	    tapDistanceTop,
	    moved,
	    lastTarget,
	    lastDirection,
	    pastFirstInvertThresh = false,
	    isCircumstantialInvert = false,
	    targetMoveDistance,
	    // For positioning ghost absolutely
	ghostRelativeParent,
	    ghostRelativeParentInitialScroll = [],
	    // (left, top)
	_silent = false,
	    savedInputChecked = [];
	/** @const */

	var documentExists = typeof document !== 'undefined',
	    PositionGhostAbsolutely = IOS,
	    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
	    // This will not pass for IE9, because IE9 DnD only works on anchors
	supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
	    supportCssPointerEvents = function () {
	  if (!documentExists) { return; } // false when <= IE11

	  if (IE11OrLess) {
	    return false;
	  }

	  var el = document.createElement('x');
	  el.style.cssText = 'pointer-events:auto';
	  return el.style.pointerEvents === 'auto';
	}(),
	    _detectDirection = function _detectDirection(el, options) {
	  var elCSS = css(el),
	      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
	      child1 = getChild(el, 0, options),
	      child2 = getChild(el, 1, options),
	      firstChildCSS = child1 && css(child1),
	      secondChildCSS = child2 && css(child2),
	      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
	      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

	  if (elCSS.display === 'flex') {
	    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
	  }

	  if (elCSS.display === 'grid') {
	    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
	  }

	  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
	    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
	    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
	  }

	  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
	},
	    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
	  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
	      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
	      dragElOppLength = vertical ? dragRect.width : dragRect.height,
	      targetS1Opp = vertical ? targetRect.left : targetRect.top,
	      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
	      targetOppLength = vertical ? targetRect.width : targetRect.height;
	  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
	},

	/**
	 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
	 * @param  {Number} x      X position
	 * @param  {Number} y      Y position
	 * @return {HTMLElement}   Element of the first found nearest Sortable
	 */
	_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
	  var ret;
	  sortables.some(function (sortable) {
	    if (lastChild(sortable)) { return; }
	    var rect = getRect(sortable),
	        threshold = sortable[expando].options.emptyInsertThreshold,
	        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
	        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

	    if (threshold && insideHorizontally && insideVertically) {
	      return ret = sortable;
	    }
	  });
	  return ret;
	},
	    _prepareGroup = function _prepareGroup(options) {
	  function toFn(value, pull) {
	    return function (to, from, dragEl, evt) {
	      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

	      if (value == null && (pull || sameGroup)) {
	        // Default pull value
	        // Default pull and put value if same group
	        return true;
	      } else if (value == null || value === false) {
	        return false;
	      } else if (pull && value === 'clone') {
	        return value;
	      } else if (typeof value === 'function') {
	        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
	      } else {
	        var otherGroup = (pull ? to : from).options.group.name;
	        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
	      }
	    };
	  }

	  var group = {};
	  var originalGroup = options.group;

	  if (!originalGroup || _typeof(originalGroup) != 'object') {
	    originalGroup = {
	      name: originalGroup
	    };
	  }

	  group.name = originalGroup.name;
	  group.checkPull = toFn(originalGroup.pull, true);
	  group.checkPut = toFn(originalGroup.put);
	  group.revertClone = originalGroup.revertClone;
	  options.group = group;
	},
	    _hideGhostForTarget = function _hideGhostForTarget() {
	  if (!supportCssPointerEvents && ghostEl) {
	    css(ghostEl, 'display', 'none');
	  }
	},
	    _unhideGhostForTarget = function _unhideGhostForTarget() {
	  if (!supportCssPointerEvents && ghostEl) {
	    css(ghostEl, 'display', '');
	  }
	}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


	if (documentExists) {
	  document.addEventListener('click', function (evt) {
	    if (ignoreNextClick) {
	      evt.preventDefault();
	      evt.stopPropagation && evt.stopPropagation();
	      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
	      ignoreNextClick = false;
	      return false;
	    }
	  }, true);
	}

	var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
	  if (dragEl) {
	    evt = evt.touches ? evt.touches[0] : evt;

	    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

	    if (nearest) {
	      // Create imitation event
	      var event = {};

	      for (var i in evt) {
	        if (evt.hasOwnProperty(i)) {
	          event[i] = evt[i];
	        }
	      }

	      event.target = event.rootEl = nearest;
	      event.preventDefault = void 0;
	      event.stopPropagation = void 0;

	      nearest[expando]._onDragOver(event);
	    }
	  }
	};

	var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
	  if (dragEl) {
	    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
	  }
	};
	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */


	function Sortable(el, options) {
	  if (!(el && el.nodeType && el.nodeType === 1)) {
	    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
	  }

	  this.el = el; // root element

	  this.options = options = _extends({}, options); // Export instance

	  el[expando] = this;
	  var defaults = {
	    group: null,
	    sort: true,
	    disabled: false,
	    store: null,
	    handle: null,
	    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
	    swapThreshold: 1,
	    // percentage; 0 <= x <= 1
	    invertSwap: false,
	    // invert always
	    invertedSwapThreshold: null,
	    // will be set to same as swapThreshold if default
	    removeCloneOnHide: true,
	    direction: function direction() {
	      return _detectDirection(el, this.options);
	    },
	    ghostClass: 'sortable-ghost',
	    chosenClass: 'sortable-chosen',
	    dragClass: 'sortable-drag',
	    ignore: 'a, img',
	    filter: null,
	    preventOnFilter: true,
	    animation: 0,
	    easing: null,
	    setData: function setData(dataTransfer, dragEl) {
	      dataTransfer.setData('Text', dragEl.textContent);
	    },
	    dropBubble: false,
	    dragoverBubble: false,
	    dataIdAttr: 'data-id',
	    delay: 0,
	    delayOnTouchOnly: false,
	    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
	    forceFallback: false,
	    fallbackClass: 'sortable-fallback',
	    fallbackOnBody: false,
	    fallbackTolerance: 0,
	    fallbackOffset: {
	      x: 0,
	      y: 0
	    },
	    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
	    emptyInsertThreshold: 5
	  };
	  PluginManager.initializePlugins(this, el, defaults); // Set default options

	  for (var name in defaults) {
	    !(name in options) && (options[name] = defaults[name]);
	  }

	  _prepareGroup(options); // Bind all private methods


	  for (var fn in this) {
	    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
	      this[fn] = this[fn].bind(this);
	    }
	  } // Setup drag mode


	  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

	  if (this.nativeDraggable) {
	    // Touch start threshold cannot be greater than the native dragstart threshold
	    this.options.touchStartThreshold = 1;
	  } // Bind events


	  if (options.supportPointer) {
	    on(el, 'pointerdown', this._onTapStart);
	  } else {
	    on(el, 'mousedown', this._onTapStart);
	    on(el, 'touchstart', this._onTapStart);
	  }

	  if (this.nativeDraggable) {
	    on(el, 'dragover', this);
	    on(el, 'dragenter', this);
	  }

	  sortables.push(this.el); // Restore sorting

	  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

	  _extends(this, AnimationStateManager());
	}

	Sortable.prototype =
	/** @lends Sortable.prototype */
	{
	  constructor: Sortable,
	  _isOutsideThisEl: function _isOutsideThisEl(target) {
	    if (!this.el.contains(target) && target !== this.el) {
	      lastTarget = null;
	    }
	  },
	  _getDirection: function _getDirection(evt, target) {
	    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
	  },
	  _onTapStart: function _onTapStart(
	  /** Event|TouchEvent */
	  evt) {
	    if (!evt.cancelable) { return; }

	    var _this = this,
	        el = this.el,
	        options = this.options,
	        preventOnFilter = options.preventOnFilter,
	        type = evt.type,
	        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
	        target = (touch || evt).target,
	        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
	        filter = options.filter;

	    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


	    if (dragEl) {
	      return;
	    }

	    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
	      return; // only left button and enabled
	    } // cancel dnd if original target is content editable


	    if (originalTarget.isContentEditable) {
	      return;
	    }

	    target = closest(target, options.draggable, el, false);

	    if (target && target.animated) {
	      return;
	    }

	    if (lastDownEl === target) {
	      // Ignoring duplicate `down`
	      return;
	    } // Get the index of the dragged element within its parent


	    oldIndex = index(target);
	    oldDraggableIndex = index(target, options.draggable); // Check filter

	    if (typeof filter === 'function') {
	      if (filter.call(this, evt, target, this)) {
	        _dispatchEvent({
	          sortable: _this,
	          rootEl: originalTarget,
	          name: 'filter',
	          targetEl: target,
	          toEl: el,
	          fromEl: el
	        });

	        pluginEvent('filter', _this, {
	          evt: evt
	        });
	        preventOnFilter && evt.cancelable && evt.preventDefault();
	        return; // cancel dnd
	      }
	    } else if (filter) {
	      filter = filter.split(',').some(function (criteria) {
	        criteria = closest(originalTarget, criteria.trim(), el, false);

	        if (criteria) {
	          _dispatchEvent({
	            sortable: _this,
	            rootEl: criteria,
	            name: 'filter',
	            targetEl: target,
	            fromEl: el,
	            toEl: el
	          });

	          pluginEvent('filter', _this, {
	            evt: evt
	          });
	          return true;
	        }
	      });

	      if (filter) {
	        preventOnFilter && evt.cancelable && evt.preventDefault();
	        return; // cancel dnd
	      }
	    }

	    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
	      return;
	    } // Prepare `dragstart`


	    this._prepareDragStart(evt, touch, target);
	  },
	  _prepareDragStart: function _prepareDragStart(
	  /** Event */
	  evt,
	  /** Touch */
	  touch,
	  /** HTMLElement */
	  target) {
	    var _this = this,
	        el = _this.el,
	        options = _this.options,
	        ownerDocument = el.ownerDocument,
	        dragStartFn;

	    if (target && !dragEl && target.parentNode === el) {
	      var dragRect = getRect(target);
	      rootEl = el;
	      dragEl = target;
	      parentEl = dragEl.parentNode;
	      nextEl = dragEl.nextSibling;
	      lastDownEl = target;
	      activeGroup = options.group;
	      Sortable.dragged = dragEl;
	      tapEvt = {
	        target: dragEl,
	        clientX: (touch || evt).clientX,
	        clientY: (touch || evt).clientY
	      };
	      tapDistanceLeft = tapEvt.clientX - dragRect.left;
	      tapDistanceTop = tapEvt.clientY - dragRect.top;
	      this._lastX = (touch || evt).clientX;
	      this._lastY = (touch || evt).clientY;
	      dragEl.style['will-change'] = 'all';

	      dragStartFn = function dragStartFn() {
	        pluginEvent('delayEnded', _this, {
	          evt: evt
	        });

	        if (Sortable.eventCanceled) {
	          _this._onDrop();

	          return;
	        } // Delayed drag has been triggered
	        // we can re-enable the events: touchmove/mousemove


	        _this._disableDelayedDragEvents();

	        if (!FireFox && _this.nativeDraggable) {
	          dragEl.draggable = true;
	        } // Bind the events: dragstart/dragend


	        _this._triggerDragStart(evt, touch); // Drag start event


	        _dispatchEvent({
	          sortable: _this,
	          name: 'choose',
	          originalEvent: evt
	        }); // Chosen item


	        toggleClass(dragEl, options.chosenClass, true);
	      }; // Disable "draggable"


	      options.ignore.split(',').forEach(function (criteria) {
	        find(dragEl, criteria.trim(), _disableDraggable);
	      });
	      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
	      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
	      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
	      on(ownerDocument, 'mouseup', _this._onDrop);
	      on(ownerDocument, 'touchend', _this._onDrop);
	      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

	      if (FireFox && this.nativeDraggable) {
	        this.options.touchStartThreshold = 4;
	        dragEl.draggable = true;
	      }

	      pluginEvent('delayStart', this, {
	        evt: evt
	      }); // Delay is impossible for native DnD in Edge or IE

	      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
	        if (Sortable.eventCanceled) {
	          this._onDrop();

	          return;
	        } // If the user moves the pointer or let go the click or touch
	        // before the delay has been reached:
	        // disable the delayed drag


	        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
	        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
	        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
	        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
	        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
	        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
	        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
	      } else {
	        dragStartFn();
	      }
	    }
	  },
	  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
	  /** TouchEvent|PointerEvent **/
	  e) {
	    var touch = e.touches ? e.touches[0] : e;

	    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
	      this._disableDelayedDrag();
	    }
	  },
	  _disableDelayedDrag: function _disableDelayedDrag() {
	    dragEl && _disableDraggable(dragEl);
	    clearTimeout(this._dragStartTimer);

	    this._disableDelayedDragEvents();
	  },
	  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
	    var ownerDocument = this.el.ownerDocument;
	    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
	    off(ownerDocument, 'touchend', this._disableDelayedDrag);
	    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
	    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
	    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
	    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
	  },
	  _triggerDragStart: function _triggerDragStart(
	  /** Event */
	  evt,
	  /** Touch */
	  touch) {
	    touch = touch || evt.pointerType == 'touch' && evt;

	    if (!this.nativeDraggable || touch) {
	      if (this.options.supportPointer) {
	        on(document, 'pointermove', this._onTouchMove);
	      } else if (touch) {
	        on(document, 'touchmove', this._onTouchMove);
	      } else {
	        on(document, 'mousemove', this._onTouchMove);
	      }
	    } else {
	      on(dragEl, 'dragend', this);
	      on(rootEl, 'dragstart', this._onDragStart);
	    }

	    try {
	      if (document.selection) {
	        // Timeout neccessary for IE9
	        _nextTick(function () {
	          document.selection.empty();
	        });
	      } else {
	        window.getSelection().removeAllRanges();
	      }
	    } catch (err) {}
	  },
	  _dragStarted: function _dragStarted(fallback, evt) {

	    awaitingDragStarted = false;

	    if (rootEl && dragEl) {
	      pluginEvent('dragStarted', this, {
	        evt: evt
	      });

	      if (this.nativeDraggable) {
	        on(document, 'dragover', _checkOutsideTargetEl);
	      }

	      var options = this.options; // Apply effect

	      !fallback && toggleClass(dragEl, options.dragClass, false);
	      toggleClass(dragEl, options.ghostClass, true);
	      Sortable.active = this;
	      fallback && this._appendGhost(); // Drag start event

	      _dispatchEvent({
	        sortable: this,
	        name: 'start',
	        originalEvent: evt
	      });
	    } else {
	      this._nulling();
	    }
	  },
	  _emulateDragOver: function _emulateDragOver() {
	    if (touchEvt) {
	      this._lastX = touchEvt.clientX;
	      this._lastY = touchEvt.clientY;

	      _hideGhostForTarget();

	      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
	      var parent = target;

	      while (target && target.shadowRoot) {
	        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
	        if (target === parent) { break; }
	        parent = target;
	      }

	      dragEl.parentNode[expando]._isOutsideThisEl(target);

	      if (parent) {
	        do {
	          if (parent[expando]) {
	            var inserted = void 0;
	            inserted = parent[expando]._onDragOver({
	              clientX: touchEvt.clientX,
	              clientY: touchEvt.clientY,
	              target: target,
	              rootEl: parent
	            });

	            if (inserted && !this.options.dragoverBubble) {
	              break;
	            }
	          }

	          target = parent; // store last element
	        }
	        /* jshint boss:true */
	        while (parent = parent.parentNode);
	      }

	      _unhideGhostForTarget();
	    }
	  },
	  _onTouchMove: function _onTouchMove(
	  /**TouchEvent*/
	  evt) {
	    if (tapEvt) {
	      var options = this.options,
	          fallbackTolerance = options.fallbackTolerance,
	          fallbackOffset = options.fallbackOffset,
	          touch = evt.touches ? evt.touches[0] : evt,
	          ghostMatrix = ghostEl && matrix(ghostEl, true),
	          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
	          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
	          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
	          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
	          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

	      if (!Sortable.active && !awaitingDragStarted) {
	        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
	          return;
	        }

	        this._onDragStart(evt, true);
	      }

	      if (ghostEl) {
	        if (ghostMatrix) {
	          ghostMatrix.e += dx - (lastDx || 0);
	          ghostMatrix.f += dy - (lastDy || 0);
	        } else {
	          ghostMatrix = {
	            a: 1,
	            b: 0,
	            c: 0,
	            d: 1,
	            e: dx,
	            f: dy
	          };
	        }

	        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
	        css(ghostEl, 'webkitTransform', cssMatrix);
	        css(ghostEl, 'mozTransform', cssMatrix);
	        css(ghostEl, 'msTransform', cssMatrix);
	        css(ghostEl, 'transform', cssMatrix);
	        lastDx = dx;
	        lastDy = dy;
	        touchEvt = touch;
	      }

	      evt.cancelable && evt.preventDefault();
	    }
	  },
	  _appendGhost: function _appendGhost() {
	    // Bug if using scale(): https://stackoverflow.com/questions/2637058
	    // Not being adjusted for
	    if (!ghostEl) {
	      var container = this.options.fallbackOnBody ? document.body : rootEl,
	          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
	          options = this.options; // Position absolutely

	      if (PositionGhostAbsolutely) {
	        // Get relatively positioned parent
	        ghostRelativeParent = container;

	        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
	          ghostRelativeParent = ghostRelativeParent.parentNode;
	        }

	        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
	          if (ghostRelativeParent === document) { ghostRelativeParent = getWindowScrollingElement(); }
	          rect.top += ghostRelativeParent.scrollTop;
	          rect.left += ghostRelativeParent.scrollLeft;
	        } else {
	          ghostRelativeParent = getWindowScrollingElement();
	        }

	        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
	      }

	      ghostEl = dragEl.cloneNode(true);
	      toggleClass(ghostEl, options.ghostClass, false);
	      toggleClass(ghostEl, options.fallbackClass, true);
	      toggleClass(ghostEl, options.dragClass, true);
	      css(ghostEl, 'transition', '');
	      css(ghostEl, 'transform', '');
	      css(ghostEl, 'box-sizing', 'border-box');
	      css(ghostEl, 'margin', 0);
	      css(ghostEl, 'top', rect.top);
	      css(ghostEl, 'left', rect.left);
	      css(ghostEl, 'width', rect.width);
	      css(ghostEl, 'height', rect.height);
	      css(ghostEl, 'opacity', '0.8');
	      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
	      css(ghostEl, 'zIndex', '100000');
	      css(ghostEl, 'pointerEvents', 'none');
	      Sortable.ghost = ghostEl;
	      container.appendChild(ghostEl); // Set transform-origin

	      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
	    }
	  },
	  _onDragStart: function _onDragStart(
	  /**Event*/
	  evt,
	  /**boolean*/
	  fallback) {
	    var _this = this;

	    var dataTransfer = evt.dataTransfer;
	    var options = _this.options;
	    pluginEvent('dragStart', this, {
	      evt: evt
	    });

	    if (Sortable.eventCanceled) {
	      this._onDrop();

	      return;
	    }

	    pluginEvent('setupClone', this);

	    if (!Sortable.eventCanceled) {
	      cloneEl = clone(dragEl);
	      cloneEl.draggable = false;
	      cloneEl.style['will-change'] = '';

	      this._hideClone();

	      toggleClass(cloneEl, this.options.chosenClass, false);
	      Sortable.clone = cloneEl;
	    } // #1143: IFrame support workaround


	    _this.cloneId = _nextTick(function () {
	      pluginEvent('clone', _this);
	      if (Sortable.eventCanceled) { return; }

	      if (!_this.options.removeCloneOnHide) {
	        rootEl.insertBefore(cloneEl, dragEl);
	      }

	      _this._hideClone();

	      _dispatchEvent({
	        sortable: _this,
	        name: 'clone'
	      });
	    });
	    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

	    if (fallback) {
	      ignoreNextClick = true;
	      _this._loopId = setInterval(_this._emulateDragOver, 50);
	    } else {
	      // Undo what was set in _prepareDragStart before drag started
	      off(document, 'mouseup', _this._onDrop);
	      off(document, 'touchend', _this._onDrop);
	      off(document, 'touchcancel', _this._onDrop);

	      if (dataTransfer) {
	        dataTransfer.effectAllowed = 'move';
	        options.setData && options.setData.call(_this, dataTransfer, dragEl);
	      }

	      on(document, 'drop', _this); // #1276 fix:

	      css(dragEl, 'transform', 'translateZ(0)');
	    }

	    awaitingDragStarted = true;
	    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
	    on(document, 'selectstart', _this);
	    moved = true;

	    if (Safari) {
	      css(document.body, 'user-select', 'none');
	    }
	  },
	  // Returns true - if no further action is needed (either inserted or another condition)
	  _onDragOver: function _onDragOver(
	  /**Event*/
	  evt) {
	    var el = this.el,
	        target = evt.target,
	        dragRect,
	        targetRect,
	        revert,
	        options = this.options,
	        group = options.group,
	        activeSortable = Sortable.active,
	        isOwner = activeGroup === group,
	        canSort = options.sort,
	        fromSortable = putSortable || activeSortable,
	        vertical,
	        _this = this,
	        completedFired = false;

	    if (_silent) { return; }

	    function dragOverEvent(name, extra) {
	      pluginEvent(name, _this, _objectSpread({
	        evt: evt,
	        isOwner: isOwner,
	        axis: vertical ? 'vertical' : 'horizontal',
	        revert: revert,
	        dragRect: dragRect,
	        targetRect: targetRect,
	        canSort: canSort,
	        fromSortable: fromSortable,
	        target: target,
	        completed: completed,
	        onMove: function onMove(target, after) {
	          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
	        },
	        changed: changed
	      }, extra));
	    } // Capture animation state


	    function capture() {
	      dragOverEvent('dragOverAnimationCapture');

	      _this.captureAnimationState();

	      if (_this !== fromSortable) {
	        fromSortable.captureAnimationState();
	      }
	    } // Return invocation when dragEl is inserted (or completed)


	    function completed(insertion) {
	      dragOverEvent('dragOverCompleted', {
	        insertion: insertion
	      });

	      if (insertion) {
	        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
	        if (isOwner) {
	          activeSortable._hideClone();
	        } else {
	          activeSortable._showClone(_this);
	        }

	        if (_this !== fromSortable) {
	          // Set ghost class to new sortable's ghost class
	          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
	          toggleClass(dragEl, options.ghostClass, true);
	        }

	        if (putSortable !== _this && _this !== Sortable.active) {
	          putSortable = _this;
	        } else if (_this === Sortable.active && putSortable) {
	          putSortable = null;
	        } // Animation


	        if (fromSortable === _this) {
	          _this._ignoreWhileAnimating = target;
	        }

	        _this.animateAll(function () {
	          dragOverEvent('dragOverAnimationComplete');
	          _this._ignoreWhileAnimating = null;
	        });

	        if (_this !== fromSortable) {
	          fromSortable.animateAll();
	          fromSortable._ignoreWhileAnimating = null;
	        }
	      } // Null lastTarget if it is not inside a previously swapped element


	      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
	        lastTarget = null;
	      } // no bubbling and not fallback


	      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
	        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


	        !insertion && nearestEmptyInsertDetectEvent(evt);
	      }

	      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
	      return completedFired = true;
	    } // Call when dragEl has been inserted


	    function changed() {
	      newIndex = index(dragEl);
	      newDraggableIndex = index(dragEl, options.draggable);

	      _dispatchEvent({
	        sortable: _this,
	        name: 'change',
	        toEl: el,
	        newIndex: newIndex,
	        newDraggableIndex: newDraggableIndex,
	        originalEvent: evt
	      });
	    }

	    if (evt.preventDefault !== void 0) {
	      evt.cancelable && evt.preventDefault();
	    }

	    target = closest(target, options.draggable, el, true);
	    dragOverEvent('dragOver');
	    if (Sortable.eventCanceled) { return completedFired; }

	    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
	      return completed(false);
	    }

	    ignoreNextClick = false;

	    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
	    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
	      vertical = this._getDirection(evt, target) === 'vertical';
	      dragRect = getRect(dragEl);
	      dragOverEvent('dragOverValid');
	      if (Sortable.eventCanceled) { return completedFired; }

	      if (revert) {
	        parentEl = rootEl; // actualization

	        capture();

	        this._hideClone();

	        dragOverEvent('revert');

	        if (!Sortable.eventCanceled) {
	          if (nextEl) {
	            rootEl.insertBefore(dragEl, nextEl);
	          } else {
	            rootEl.appendChild(dragEl);
	          }
	        }

	        return completed(true);
	      }

	      var elLastChild = lastChild(el, options.draggable);

	      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
	        // If already at end of list: Do not insert
	        if (elLastChild === dragEl) {
	          return completed(false);
	        } // assign target only if condition is true


	        if (elLastChild && el === evt.target) {
	          target = elLastChild;
	        }

	        if (target) {
	          targetRect = getRect(target);
	        }

	        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
	          capture();
	          el.appendChild(dragEl);
	          parentEl = el; // actualization

	          changed();
	          return completed(true);
	        }
	      } else if (target.parentNode === el) {
	        targetRect = getRect(target);
	        var direction = 0,
	            targetBeforeFirstSwap,
	            differentLevel = dragEl.parentNode !== el,
	            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
	            side1 = vertical ? 'top' : 'left',
	            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
	            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

	        if (lastTarget !== target) {
	          targetBeforeFirstSwap = targetRect[side1];
	          pastFirstInvertThresh = false;
	          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
	        }

	        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
	        var sibling;

	        if (direction !== 0) {
	          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
	          var dragIndex = index(dragEl);

	          do {
	            dragIndex -= direction;
	            sibling = parentEl.children[dragIndex];
	          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
	        } // If dragEl is already beside target: Do not insert


	        if (direction === 0 || sibling === target) {
	          return completed(false);
	        }

	        lastTarget = target;
	        lastDirection = direction;
	        var nextSibling = target.nextElementSibling,
	            after = false;
	        after = direction === 1;

	        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

	        if (moveVector !== false) {
	          if (moveVector === 1 || moveVector === -1) {
	            after = moveVector === 1;
	          }

	          _silent = true;
	          setTimeout(_unsilent, 30);
	          capture();

	          if (after && !nextSibling) {
	            el.appendChild(dragEl);
	          } else {
	            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
	          } // Undo chrome's scroll adjustment (has no effect on other browsers)


	          if (scrolledPastTop) {
	            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
	          }

	          parentEl = dragEl.parentNode; // actualization
	          // must be done before animation

	          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
	            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
	          }

	          changed();
	          return completed(true);
	        }
	      }

	      if (el.contains(dragEl)) {
	        return completed(false);
	      }
	    }

	    return false;
	  },
	  _ignoreWhileAnimating: null,
	  _offMoveEvents: function _offMoveEvents() {
	    off(document, 'mousemove', this._onTouchMove);
	    off(document, 'touchmove', this._onTouchMove);
	    off(document, 'pointermove', this._onTouchMove);
	    off(document, 'dragover', nearestEmptyInsertDetectEvent);
	    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
	    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
	  },
	  _offUpEvents: function _offUpEvents() {
	    var ownerDocument = this.el.ownerDocument;
	    off(ownerDocument, 'mouseup', this._onDrop);
	    off(ownerDocument, 'touchend', this._onDrop);
	    off(ownerDocument, 'pointerup', this._onDrop);
	    off(ownerDocument, 'touchcancel', this._onDrop);
	    off(document, 'selectstart', this);
	  },
	  _onDrop: function _onDrop(
	  /**Event*/
	  evt) {
	    var el = this.el,
	        options = this.options; // Get the index of the dragged element within its parent

	    newIndex = index(dragEl);
	    newDraggableIndex = index(dragEl, options.draggable);
	    pluginEvent('drop', this, {
	      evt: evt
	    });
	    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

	    newIndex = index(dragEl);
	    newDraggableIndex = index(dragEl, options.draggable);

	    if (Sortable.eventCanceled) {
	      this._nulling();

	      return;
	    }

	    awaitingDragStarted = false;
	    isCircumstantialInvert = false;
	    pastFirstInvertThresh = false;
	    clearInterval(this._loopId);
	    clearTimeout(this._dragStartTimer);

	    _cancelNextTick(this.cloneId);

	    _cancelNextTick(this._dragStartId); // Unbind events


	    if (this.nativeDraggable) {
	      off(document, 'drop', this);
	      off(el, 'dragstart', this._onDragStart);
	    }

	    this._offMoveEvents();

	    this._offUpEvents();

	    if (Safari) {
	      css(document.body, 'user-select', '');
	    }

	    css(dragEl, 'transform', '');

	    if (evt) {
	      if (moved) {
	        evt.cancelable && evt.preventDefault();
	        !options.dropBubble && evt.stopPropagation();
	      }

	      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

	      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
	        // Remove clone(s)
	        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
	      }

	      if (dragEl) {
	        if (this.nativeDraggable) {
	          off(dragEl, 'dragend', this);
	        }

	        _disableDraggable(dragEl);

	        dragEl.style['will-change'] = ''; // Remove classes
	        // ghostClass is added in dragStarted

	        if (moved && !awaitingDragStarted) {
	          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
	        }

	        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

	        _dispatchEvent({
	          sortable: this,
	          name: 'unchoose',
	          toEl: parentEl,
	          newIndex: null,
	          newDraggableIndex: null,
	          originalEvent: evt
	        });

	        if (rootEl !== parentEl) {
	          if (newIndex >= 0) {
	            // Add event
	            _dispatchEvent({
	              rootEl: parentEl,
	              name: 'add',
	              toEl: parentEl,
	              fromEl: rootEl,
	              originalEvent: evt
	            }); // Remove event


	            _dispatchEvent({
	              sortable: this,
	              name: 'remove',
	              toEl: parentEl,
	              originalEvent: evt
	            }); // drag from one list and drop into another


	            _dispatchEvent({
	              rootEl: parentEl,
	              name: 'sort',
	              toEl: parentEl,
	              fromEl: rootEl,
	              originalEvent: evt
	            });

	            _dispatchEvent({
	              sortable: this,
	              name: 'sort',
	              toEl: parentEl,
	              originalEvent: evt
	            });
	          }

	          putSortable && putSortable.save();
	        } else {
	          if (newIndex !== oldIndex) {
	            if (newIndex >= 0) {
	              // drag & drop within the same list
	              _dispatchEvent({
	                sortable: this,
	                name: 'update',
	                toEl: parentEl,
	                originalEvent: evt
	              });

	              _dispatchEvent({
	                sortable: this,
	                name: 'sort',
	                toEl: parentEl,
	                originalEvent: evt
	              });
	            }
	          }
	        }

	        if (Sortable.active) {
	          /* jshint eqnull:true */
	          if (newIndex == null || newIndex === -1) {
	            newIndex = oldIndex;
	            newDraggableIndex = oldDraggableIndex;
	          }

	          _dispatchEvent({
	            sortable: this,
	            name: 'end',
	            toEl: parentEl,
	            originalEvent: evt
	          }); // Save sorting


	          this.save();
	        }
	      }
	    }

	    this._nulling();
	  },
	  _nulling: function _nulling() {
	    pluginEvent('nulling', this);
	    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
	    savedInputChecked.forEach(function (el) {
	      el.checked = true;
	    });
	    savedInputChecked.length = lastDx = lastDy = 0;
	  },
	  handleEvent: function handleEvent(
	  /**Event*/
	  evt) {
	    switch (evt.type) {
	      case 'drop':
	      case 'dragend':
	        this._onDrop(evt);

	        break;

	      case 'dragenter':
	      case 'dragover':
	        if (dragEl) {
	          this._onDragOver(evt);

	          _globalDragOver(evt);
	        }

	        break;

	      case 'selectstart':
	        evt.preventDefault();
	        break;
	    }
	  },

	  /**
	   * Serializes the item into an array of string.
	   * @returns {String[]}
	   */
	  toArray: function toArray() {
	    var order = [],
	        el,
	        children = this.el.children,
	        i = 0,
	        n = children.length,
	        options = this.options;

	    for (; i < n; i++) {
	      el = children[i];

	      if (closest(el, options.draggable, this.el, false)) {
	        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
	      }
	    }

	    return order;
	  },

	  /**
	   * Sorts the elements according to the array.
	   * @param  {String[]}  order  order of the items
	   */
	  sort: function sort(order) {
	    var items = {},
	        rootEl = this.el;
	    this.toArray().forEach(function (id, i) {
	      var el = rootEl.children[i];

	      if (closest(el, this.options.draggable, rootEl, false)) {
	        items[id] = el;
	      }
	    }, this);
	    order.forEach(function (id) {
	      if (items[id]) {
	        rootEl.removeChild(items[id]);
	        rootEl.appendChild(items[id]);
	      }
	    });
	  },

	  /**
	   * Save the current sorting
	   */
	  save: function save() {
	    var store = this.options.store;
	    store && store.set && store.set(this);
	  },

	  /**
	   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
	   * @param   {HTMLElement}  el
	   * @param   {String}       [selector]  default: `options.draggable`
	   * @returns {HTMLElement|null}
	   */
	  closest: function closest$1(el, selector) {
	    return closest(el, selector || this.options.draggable, this.el, false);
	  },

	  /**
	   * Set/get option
	   * @param   {string} name
	   * @param   {*}      [value]
	   * @returns {*}
	   */
	  option: function option(name, value) {
	    var options = this.options;

	    if (value === void 0) {
	      return options[name];
	    } else {
	      var modifiedValue = PluginManager.modifyOption(this, name, value);

	      if (typeof modifiedValue !== 'undefined') {
	        options[name] = modifiedValue;
	      } else {
	        options[name] = value;
	      }

	      if (name === 'group') {
	        _prepareGroup(options);
	      }
	    }
	  },

	  /**
	   * Destroy
	   */
	  destroy: function destroy() {
	    pluginEvent('destroy', this);
	    var el = this.el;
	    el[expando] = null;
	    off(el, 'mousedown', this._onTapStart);
	    off(el, 'touchstart', this._onTapStart);
	    off(el, 'pointerdown', this._onTapStart);

	    if (this.nativeDraggable) {
	      off(el, 'dragover', this);
	      off(el, 'dragenter', this);
	    } // Remove draggable attributes


	    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
	      el.removeAttribute('draggable');
	    });

	    this._onDrop();

	    this._disableDelayedDragEvents();

	    sortables.splice(sortables.indexOf(this.el), 1);
	    this.el = el = null;
	  },
	  _hideClone: function _hideClone() {
	    if (!cloneHidden) {
	      pluginEvent('hideClone', this);
	      if (Sortable.eventCanceled) { return; }
	      css(cloneEl, 'display', 'none');

	      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
	        cloneEl.parentNode.removeChild(cloneEl);
	      }

	      cloneHidden = true;
	    }
	  },
	  _showClone: function _showClone(putSortable) {
	    if (putSortable.lastPutMode !== 'clone') {
	      this._hideClone();

	      return;
	    }

	    if (cloneHidden) {
	      pluginEvent('showClone', this);
	      if (Sortable.eventCanceled) { return; } // show clone at dragEl or original position

	      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
	        rootEl.insertBefore(cloneEl, dragEl);
	      } else if (nextEl) {
	        rootEl.insertBefore(cloneEl, nextEl);
	      } else {
	        rootEl.appendChild(cloneEl);
	      }

	      if (this.options.group.revertClone) {
	        this.animate(dragEl, cloneEl);
	      }

	      css(cloneEl, 'display', '');
	      cloneHidden = false;
	    }
	  }
	};

	function _globalDragOver(
	/**Event*/
	evt) {
	  if (evt.dataTransfer) {
	    evt.dataTransfer.dropEffect = 'move';
	  }

	  evt.cancelable && evt.preventDefault();
	}

	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
	  var evt,
	      sortable = fromEl[expando],
	      onMoveFn = sortable.options.onMove,
	      retVal; // Support for new CustomEvent feature

	  if (window.CustomEvent && !IE11OrLess && !Edge) {
	    evt = new CustomEvent('move', {
	      bubbles: true,
	      cancelable: true
	    });
	  } else {
	    evt = document.createEvent('Event');
	    evt.initEvent('move', true, true);
	  }

	  evt.to = toEl;
	  evt.from = fromEl;
	  evt.dragged = dragEl;
	  evt.draggedRect = dragRect;
	  evt.related = targetEl || toEl;
	  evt.relatedRect = targetRect || getRect(toEl);
	  evt.willInsertAfter = willInsertAfter;
	  evt.originalEvent = originalEvent;
	  fromEl.dispatchEvent(evt);

	  if (onMoveFn) {
	    retVal = onMoveFn.call(sortable, evt, originalEvent);
	  }

	  return retVal;
	}

	function _disableDraggable(el) {
	  el.draggable = false;
	}

	function _unsilent() {
	  _silent = false;
	}

	function _ghostIsLast(evt, vertical, sortable) {
	  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
	  var spacer = 10;
	  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
	}

	function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
	  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
	      targetLength = vertical ? targetRect.height : targetRect.width,
	      targetS1 = vertical ? targetRect.top : targetRect.left,
	      targetS2 = vertical ? targetRect.bottom : targetRect.right,
	      invert = false;

	  if (!invertSwap) {
	    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
	    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
	      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
	      // check if past first invert threshold on side opposite of lastDirection
	      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
	        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
	        pastFirstInvertThresh = true;
	      }

	      if (!pastFirstInvertThresh) {
	        // dragEl shadow (target move distance shadow)
	        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
	        : mouseOnAxis > targetS2 - targetMoveDistance) {
	          return -lastDirection;
	        }
	      } else {
	        invert = true;
	      }
	    } else {
	      // Regular
	      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
	        return _getInsertDirection(target);
	      }
	    }
	  }

	  invert = invert || invertSwap;

	  if (invert) {
	    // Invert of regular
	    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
	      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
	    }
	  }

	  return 0;
	}
	/**
	 * Gets the direction dragEl must be swapped relative to target in order to make it
	 * seem that dragEl has been "inserted" into that element's position
	 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
	 * @return {Number}                   Direction dragEl must be swapped
	 */


	function _getInsertDirection(target) {
	  if (index(dragEl) < index(target)) {
	    return 1;
	  } else {
	    return -1;
	  }
	}
	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */


	function _generateId(el) {
	  var str = el.tagName + el.className + el.src + el.href + el.textContent,
	      i = str.length,
	      sum = 0;

	  while (i--) {
	    sum += str.charCodeAt(i);
	  }

	  return sum.toString(36);
	}

	function _saveInputCheckedState(root) {
	  savedInputChecked.length = 0;
	  var inputs = root.getElementsByTagName('input');
	  var idx = inputs.length;

	  while (idx--) {
	    var el = inputs[idx];
	    el.checked && savedInputChecked.push(el);
	  }
	}

	function _nextTick(fn) {
	  return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
	  return clearTimeout(id);
	} // Fixed #973:


	if (documentExists) {
	  on(document, 'touchmove', function (evt) {
	    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
	      evt.preventDefault();
	    }
	  });
	} // Export utils


	Sortable.utils = {
	  on: on,
	  off: off,
	  css: css,
	  find: find,
	  is: function is(el, selector) {
	    return !!closest(el, selector, el, false);
	  },
	  extend: extend,
	  throttle: throttle,
	  closest: closest,
	  toggleClass: toggleClass,
	  clone: clone,
	  index: index,
	  nextTick: _nextTick,
	  cancelNextTick: _cancelNextTick,
	  detectDirection: _detectDirection,
	  getChild: getChild
	};
	/**
	 * Get the Sortable instance of an element
	 * @param  {HTMLElement} element The element
	 * @return {Sortable|undefined}         The instance of Sortable
	 */

	Sortable.get = function (element) {
	  return element[expando];
	};
	/**
	 * Mount a plugin to Sortable
	 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
	 */


	Sortable.mount = function () {
	  var arguments$1 = arguments;

	  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
	    plugins[_key] = arguments$1[_key];
	  }

	  if (plugins[0].constructor === Array) { plugins = plugins[0]; }
	  plugins.forEach(function (plugin) {
	    if (!plugin.prototype || !plugin.prototype.constructor) {
	      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
	    }

	    if (plugin.utils) { Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils); }
	    PluginManager.mount(plugin);
	  });
	};
	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */


	Sortable.create = function (el, options) {
	  return new Sortable(el, options);
	}; // Export


	Sortable.version = version;

	var autoScrolls = [],
	    scrollEl,
	    scrollRootEl,
	    scrolling = false,
	    lastAutoScrollX,
	    lastAutoScrollY,
	    touchEvt$1,
	    pointerElemChangedInterval;

	function AutoScrollPlugin() {
	  function AutoScroll() {
	    this.defaults = {
	      scroll: true,
	      scrollSensitivity: 30,
	      scrollSpeed: 10,
	      bubbleScroll: true
	    }; // Bind all private methods

	    for (var fn in this) {
	      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
	        this[fn] = this[fn].bind(this);
	      }
	    }
	  }

	  AutoScroll.prototype = {
	    dragStarted: function dragStarted(_ref) {
	      var originalEvent = _ref.originalEvent;

	      if (this.sortable.nativeDraggable) {
	        on(document, 'dragover', this._handleAutoScroll);
	      } else {
	        if (this.options.supportPointer) {
	          on(document, 'pointermove', this._handleFallbackAutoScroll);
	        } else if (originalEvent.touches) {
	          on(document, 'touchmove', this._handleFallbackAutoScroll);
	        } else {
	          on(document, 'mousemove', this._handleFallbackAutoScroll);
	        }
	      }
	    },
	    dragOverCompleted: function dragOverCompleted(_ref2) {
	      var originalEvent = _ref2.originalEvent;

	      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
	      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
	        this._handleAutoScroll(originalEvent);
	      }
	    },
	    drop: function drop() {
	      if (this.sortable.nativeDraggable) {
	        off(document, 'dragover', this._handleAutoScroll);
	      } else {
	        off(document, 'pointermove', this._handleFallbackAutoScroll);
	        off(document, 'touchmove', this._handleFallbackAutoScroll);
	        off(document, 'mousemove', this._handleFallbackAutoScroll);
	      }

	      clearPointerElemChangedInterval();
	      clearAutoScrolls();
	      cancelThrottle();
	    },
	    nulling: function nulling() {
	      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
	      autoScrolls.length = 0;
	    },
	    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
	      this._handleAutoScroll(evt, true);
	    },
	    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
	      var _this = this;

	      var x = (evt.touches ? evt.touches[0] : evt).clientX,
	          y = (evt.touches ? evt.touches[0] : evt).clientY,
	          elem = document.elementFromPoint(x, y);
	      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
	      // Edge's autoscroll seems too conditional,
	      // MACOS Safari does not have autoscroll,
	      // Firefox and Chrome are good

	      if (fallback || Edge || IE11OrLess || Safari) {
	        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

	        var ogElemScroller = getParentAutoScrollElement(elem, true);

	        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
	          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

	          pointerElemChangedInterval = setInterval(function () {
	            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

	            if (newElem !== ogElemScroller) {
	              ogElemScroller = newElem;
	              clearAutoScrolls();
	            }

	            autoScroll(evt, _this.options, newElem, fallback);
	          }, 10);
	          lastAutoScrollX = x;
	          lastAutoScrollY = y;
	        }
	      } else {
	        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
	        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
	          clearAutoScrolls();
	          return;
	        }

	        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
	      }
	    }
	  };
	  return _extends(AutoScroll, {
	    pluginName: 'scroll',
	    initializeByDefault: true
	  });
	}

	function clearAutoScrolls() {
	  autoScrolls.forEach(function (autoScroll) {
	    clearInterval(autoScroll.pid);
	  });
	  autoScrolls = [];
	}

	function clearPointerElemChangedInterval() {
	  clearInterval(pointerElemChangedInterval);
	}

	var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
	  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
	  if (!options.scroll) { return; }
	  var x = (evt.touches ? evt.touches[0] : evt).clientX,
	      y = (evt.touches ? evt.touches[0] : evt).clientY,
	      sens = options.scrollSensitivity,
	      speed = options.scrollSpeed,
	      winScroller = getWindowScrollingElement();
	  var scrollThisInstance = false,
	      scrollCustomFn; // New scroll root, set scrollEl

	  if (scrollRootEl !== rootEl) {
	    scrollRootEl = rootEl;
	    clearAutoScrolls();
	    scrollEl = options.scroll;
	    scrollCustomFn = options.scrollFn;

	    if (scrollEl === true) {
	      scrollEl = getParentAutoScrollElement(rootEl, true);
	    }
	  }

	  var layersOut = 0;
	  var currentParent = scrollEl;

	  do {
	    var el = currentParent,
	        rect = getRect(el),
	        top = rect.top,
	        bottom = rect.bottom,
	        left = rect.left,
	        right = rect.right,
	        width = rect.width,
	        height = rect.height,
	        canScrollX = void 0,
	        canScrollY = void 0,
	        scrollWidth = el.scrollWidth,
	        scrollHeight = el.scrollHeight,
	        elCSS = css(el),
	        scrollPosX = el.scrollLeft,
	        scrollPosY = el.scrollTop;

	    if (el === winScroller) {
	      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
	      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
	    } else {
	      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
	      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
	    }

	    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
	    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

	    if (!autoScrolls[layersOut]) {
	      for (var i = 0; i <= layersOut; i++) {
	        if (!autoScrolls[i]) {
	          autoScrolls[i] = {};
	        }
	      }
	    }

	    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
	      autoScrolls[layersOut].el = el;
	      autoScrolls[layersOut].vx = vx;
	      autoScrolls[layersOut].vy = vy;
	      clearInterval(autoScrolls[layersOut].pid);

	      if (vx != 0 || vy != 0) {
	        scrollThisInstance = true;
	        /* jshint loopfunc:true */

	        autoScrolls[layersOut].pid = setInterval(function () {
	          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
	          if (isFallback && this.layer === 0) {
	            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

	          }

	          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
	          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

	          if (typeof scrollCustomFn === 'function') {
	            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
	              return;
	            }
	          }

	          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
	        }.bind({
	          layer: layersOut
	        }), 24);
	      }
	    }

	    layersOut++;
	  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

	  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
	}, 30);

	var drop = function drop(_ref) {
	  var originalEvent = _ref.originalEvent,
	      putSortable = _ref.putSortable,
	      dragEl = _ref.dragEl,
	      activeSortable = _ref.activeSortable,
	      dispatchSortableEvent = _ref.dispatchSortableEvent,
	      hideGhostForTarget = _ref.hideGhostForTarget,
	      unhideGhostForTarget = _ref.unhideGhostForTarget;
	  if (!originalEvent) { return; }
	  var toSortable = putSortable || activeSortable;
	  hideGhostForTarget();
	  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
	  var target = document.elementFromPoint(touch.clientX, touch.clientY);
	  unhideGhostForTarget();

	  if (toSortable && !toSortable.el.contains(target)) {
	    dispatchSortableEvent('spill');
	    this.onSpill({
	      dragEl: dragEl,
	      putSortable: putSortable
	    });
	  }
	};

	function Revert() {}

	Revert.prototype = {
	  startIndex: null,
	  dragStart: function dragStart(_ref2) {
	    var oldDraggableIndex = _ref2.oldDraggableIndex;
	    this.startIndex = oldDraggableIndex;
	  },
	  onSpill: function onSpill(_ref3) {
	    var dragEl = _ref3.dragEl,
	        putSortable = _ref3.putSortable;
	    this.sortable.captureAnimationState();

	    if (putSortable) {
	      putSortable.captureAnimationState();
	    }

	    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

	    if (nextSibling) {
	      this.sortable.el.insertBefore(dragEl, nextSibling);
	    } else {
	      this.sortable.el.appendChild(dragEl);
	    }

	    this.sortable.animateAll();

	    if (putSortable) {
	      putSortable.animateAll();
	    }
	  },
	  drop: drop
	};

	_extends(Revert, {
	  pluginName: 'revertOnSpill'
	});

	function Remove() {}

	Remove.prototype = {
	  onSpill: function onSpill(_ref4) {
	    var dragEl = _ref4.dragEl,
	        putSortable = _ref4.putSortable;
	    var parentSortable = putSortable || this.sortable;
	    parentSortable.captureAnimationState();
	    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
	    parentSortable.animateAll();
	  },
	  drop: drop
	};

	_extends(Remove, {
	  pluginName: 'removeOnSpill'
	});

	var lastSwapEl;

	function SwapPlugin() {
	  function Swap() {
	    this.defaults = {
	      swapClass: 'sortable-swap-highlight'
	    };
	  }

	  Swap.prototype = {
	    dragStart: function dragStart(_ref) {
	      var dragEl = _ref.dragEl;
	      lastSwapEl = dragEl;
	    },
	    dragOverValid: function dragOverValid(_ref2) {
	      var completed = _ref2.completed,
	          target = _ref2.target,
	          onMove = _ref2.onMove,
	          activeSortable = _ref2.activeSortable,
	          changed = _ref2.changed,
	          cancel = _ref2.cancel;
	      if (!activeSortable.options.swap) { return; }
	      var el = this.sortable.el,
	          options = this.options;

	      if (target && target !== el) {
	        var prevSwapEl = lastSwapEl;

	        if (onMove(target) !== false) {
	          toggleClass(target, options.swapClass, true);
	          lastSwapEl = target;
	        } else {
	          lastSwapEl = null;
	        }

	        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
	          toggleClass(prevSwapEl, options.swapClass, false);
	        }
	      }

	      changed();
	      completed(true);
	      cancel();
	    },
	    drop: function drop(_ref3) {
	      var activeSortable = _ref3.activeSortable,
	          putSortable = _ref3.putSortable,
	          dragEl = _ref3.dragEl;
	      var toSortable = putSortable || this.sortable;
	      var options = this.options;
	      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

	      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
	        if (dragEl !== lastSwapEl) {
	          toSortable.captureAnimationState();
	          if (toSortable !== activeSortable) { activeSortable.captureAnimationState(); }
	          swapNodes(dragEl, lastSwapEl);
	          toSortable.animateAll();
	          if (toSortable !== activeSortable) { activeSortable.animateAll(); }
	        }
	      }
	    },
	    nulling: function nulling() {
	      lastSwapEl = null;
	    }
	  };
	  return _extends(Swap, {
	    pluginName: 'swap',
	    eventProperties: function eventProperties() {
	      return {
	        swapItem: lastSwapEl
	      };
	    }
	  });
	}

	function swapNodes(n1, n2) {
	  var p1 = n1.parentNode,
	      p2 = n2.parentNode,
	      i1,
	      i2;
	  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) { return; }
	  i1 = index(n1);
	  i2 = index(n2);

	  if (p1.isEqualNode(p2) && i1 < i2) {
	    i2++;
	  }

	  p1.insertBefore(n2, p1.children[i1]);
	  p2.insertBefore(n1, p2.children[i2]);
	}

	var multiDragElements = [],
	    multiDragClones = [],
	    lastMultiDragSelect,
	    // for selection with modifier key down (SHIFT)
	multiDragSortable,
	    initialFolding = false,
	    // Initial multi-drag fold when drag started
	folding = false,
	    // Folding any other time
	dragStarted = false,
	    dragEl$1,
	    clonesFromRect,
	    clonesHidden;

	function MultiDragPlugin() {
	  function MultiDrag(sortable) {
	    // Bind all private methods
	    for (var fn in this) {
	      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
	        this[fn] = this[fn].bind(this);
	      }
	    }

	    if (sortable.options.supportPointer) {
	      on(document, 'pointerup', this._deselectMultiDrag);
	    } else {
	      on(document, 'mouseup', this._deselectMultiDrag);
	      on(document, 'touchend', this._deselectMultiDrag);
	    }

	    on(document, 'keydown', this._checkKeyDown);
	    on(document, 'keyup', this._checkKeyUp);
	    this.defaults = {
	      selectedClass: 'sortable-selected',
	      multiDragKey: null,
	      setData: function setData(dataTransfer, dragEl) {
	        var data = '';

	        if (multiDragElements.length && multiDragSortable === sortable) {
	          multiDragElements.forEach(function (multiDragElement, i) {
	            data += (!i ? '' : ', ') + multiDragElement.textContent;
	          });
	        } else {
	          data = dragEl.textContent;
	        }

	        dataTransfer.setData('Text', data);
	      }
	    };
	  }

	  MultiDrag.prototype = {
	    multiDragKeyDown: false,
	    isMultiDrag: false,
	    delayStartGlobal: function delayStartGlobal(_ref) {
	      var dragged = _ref.dragEl;
	      dragEl$1 = dragged;
	    },
	    delayEnded: function delayEnded() {
	      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
	    },
	    setupClone: function setupClone(_ref2) {
	      var sortable = _ref2.sortable,
	          cancel = _ref2.cancel;
	      if (!this.isMultiDrag) { return; }

	      for (var i = 0; i < multiDragElements.length; i++) {
	        multiDragClones.push(clone(multiDragElements[i]));
	        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
	        multiDragClones[i].draggable = false;
	        multiDragClones[i].style['will-change'] = '';
	        toggleClass(multiDragClones[i], this.options.selectedClass, false);
	        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
	      }

	      sortable._hideClone();

	      cancel();
	    },
	    clone: function clone(_ref3) {
	      var sortable = _ref3.sortable,
	          rootEl = _ref3.rootEl,
	          dispatchSortableEvent = _ref3.dispatchSortableEvent,
	          cancel = _ref3.cancel;
	      if (!this.isMultiDrag) { return; }

	      if (!this.options.removeCloneOnHide) {
	        if (multiDragElements.length && multiDragSortable === sortable) {
	          insertMultiDragClones(true, rootEl);
	          dispatchSortableEvent('clone');
	          cancel();
	        }
	      }
	    },
	    showClone: function showClone(_ref4) {
	      var cloneNowShown = _ref4.cloneNowShown,
	          rootEl = _ref4.rootEl,
	          cancel = _ref4.cancel;
	      if (!this.isMultiDrag) { return; }
	      insertMultiDragClones(false, rootEl);
	      multiDragClones.forEach(function (clone) {
	        css(clone, 'display', '');
	      });
	      cloneNowShown();
	      clonesHidden = false;
	      cancel();
	    },
	    hideClone: function hideClone(_ref5) {
	      var _this = this;

	      var sortable = _ref5.sortable,
	          cloneNowHidden = _ref5.cloneNowHidden,
	          cancel = _ref5.cancel;
	      if (!this.isMultiDrag) { return; }
	      multiDragClones.forEach(function (clone) {
	        css(clone, 'display', 'none');

	        if (_this.options.removeCloneOnHide && clone.parentNode) {
	          clone.parentNode.removeChild(clone);
	        }
	      });
	      cloneNowHidden();
	      clonesHidden = true;
	      cancel();
	    },
	    dragStartGlobal: function dragStartGlobal(_ref6) {
	      var sortable = _ref6.sortable;

	      if (!this.isMultiDrag && multiDragSortable) {
	        multiDragSortable.multiDrag._deselectMultiDrag();
	      }

	      multiDragElements.forEach(function (multiDragElement) {
	        multiDragElement.sortableIndex = index(multiDragElement);
	      }); // Sort multi-drag elements

	      multiDragElements = multiDragElements.sort(function (a, b) {
	        return a.sortableIndex - b.sortableIndex;
	      });
	      dragStarted = true;
	    },
	    dragStarted: function dragStarted(_ref7) {
	      var _this2 = this;

	      var sortable = _ref7.sortable;
	      if (!this.isMultiDrag) { return; }

	      if (this.options.sort) {
	        // Capture rects,
	        // hide multi drag elements (by positioning them absolute),
	        // set multi drag elements rects to dragRect,
	        // show multi drag elements,
	        // animate to rects,
	        // unset rects & remove from DOM
	        sortable.captureAnimationState();

	        if (this.options.animation) {
	          multiDragElements.forEach(function (multiDragElement) {
	            if (multiDragElement === dragEl$1) { return; }
	            css(multiDragElement, 'position', 'absolute');
	          });
	          var dragRect = getRect(dragEl$1, false, true, true);
	          multiDragElements.forEach(function (multiDragElement) {
	            if (multiDragElement === dragEl$1) { return; }
	            setRect(multiDragElement, dragRect);
	          });
	          folding = true;
	          initialFolding = true;
	        }
	      }

	      sortable.animateAll(function () {
	        folding = false;
	        initialFolding = false;

	        if (_this2.options.animation) {
	          multiDragElements.forEach(function (multiDragElement) {
	            unsetRect(multiDragElement);
	          });
	        } // Remove all auxiliary multidrag items from el, if sorting enabled


	        if (_this2.options.sort) {
	          removeMultiDragElements();
	        }
	      });
	    },
	    dragOver: function dragOver(_ref8) {
	      var target = _ref8.target,
	          completed = _ref8.completed,
	          cancel = _ref8.cancel;

	      if (folding && ~multiDragElements.indexOf(target)) {
	        completed(false);
	        cancel();
	      }
	    },
	    revert: function revert(_ref9) {
	      var fromSortable = _ref9.fromSortable,
	          rootEl = _ref9.rootEl,
	          sortable = _ref9.sortable,
	          dragRect = _ref9.dragRect;

	      if (multiDragElements.length > 1) {
	        // Setup unfold animation
	        multiDragElements.forEach(function (multiDragElement) {
	          sortable.addAnimationState({
	            target: multiDragElement,
	            rect: folding ? getRect(multiDragElement) : dragRect
	          });
	          unsetRect(multiDragElement);
	          multiDragElement.fromRect = dragRect;
	          fromSortable.removeAnimationState(multiDragElement);
	        });
	        folding = false;
	        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
	      }
	    },
	    dragOverCompleted: function dragOverCompleted(_ref10) {
	      var sortable = _ref10.sortable,
	          isOwner = _ref10.isOwner,
	          insertion = _ref10.insertion,
	          activeSortable = _ref10.activeSortable,
	          parentEl = _ref10.parentEl,
	          putSortable = _ref10.putSortable;
	      var options = this.options;

	      if (insertion) {
	        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
	        if (isOwner) {
	          activeSortable._hideClone();
	        }

	        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

	        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
	          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
	          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
	          multiDragElements.forEach(function (multiDragElement) {
	            if (multiDragElement === dragEl$1) { return; }
	            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
	            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

	            parentEl.appendChild(multiDragElement);
	          });
	          folding = true;
	        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


	        if (!isOwner) {
	          // Only remove if not folding (folding will remove them anyways)
	          if (!folding) {
	            removeMultiDragElements();
	          }

	          if (multiDragElements.length > 1) {
	            var clonesHiddenBefore = clonesHidden;

	            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


	            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
	              multiDragClones.forEach(function (clone) {
	                activeSortable.addAnimationState({
	                  target: clone,
	                  rect: clonesFromRect
	                });
	                clone.fromRect = clonesFromRect;
	                clone.thisAnimationDuration = null;
	              });
	            }
	          } else {
	            activeSortable._showClone(sortable);
	          }
	        }
	      }
	    },
	    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
	      var dragRect = _ref11.dragRect,
	          isOwner = _ref11.isOwner,
	          activeSortable = _ref11.activeSortable;
	      multiDragElements.forEach(function (multiDragElement) {
	        multiDragElement.thisAnimationDuration = null;
	      });

	      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
	        clonesFromRect = _extends({}, dragRect);
	        var dragMatrix = matrix(dragEl$1, true);
	        clonesFromRect.top -= dragMatrix.f;
	        clonesFromRect.left -= dragMatrix.e;
	      }
	    },
	    dragOverAnimationComplete: function dragOverAnimationComplete() {
	      if (folding) {
	        folding = false;
	        removeMultiDragElements();
	      }
	    },
	    drop: function drop(_ref12) {
	      var evt = _ref12.originalEvent,
	          rootEl = _ref12.rootEl,
	          parentEl = _ref12.parentEl,
	          sortable = _ref12.sortable,
	          dispatchSortableEvent = _ref12.dispatchSortableEvent,
	          oldIndex = _ref12.oldIndex,
	          putSortable = _ref12.putSortable;
	      var toSortable = putSortable || this.sortable;
	      if (!evt) { return; }
	      var options = this.options,
	          children = parentEl.children; // Multi-drag selection

	      if (!dragStarted) {
	        if (options.multiDragKey && !this.multiDragKeyDown) {
	          this._deselectMultiDrag();
	        }

	        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

	        if (!~multiDragElements.indexOf(dragEl$1)) {
	          multiDragElements.push(dragEl$1);
	          dispatchEvent({
	            sortable: sortable,
	            rootEl: rootEl,
	            name: 'select',
	            targetEl: dragEl$1,
	            originalEvt: evt
	          }); // Modifier activated, select from last to dragEl

	          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
	            var lastIndex = index(lastMultiDragSelect),
	                currentIndex = index(dragEl$1);

	            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
	              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
	              // (but previous selection existed)
	              var n, i;

	              if (currentIndex > lastIndex) {
	                i = lastIndex;
	                n = currentIndex;
	              } else {
	                i = currentIndex;
	                n = lastIndex + 1;
	              }

	              for (; i < n; i++) {
	                if (~multiDragElements.indexOf(children[i])) { continue; }
	                toggleClass(children[i], options.selectedClass, true);
	                multiDragElements.push(children[i]);
	                dispatchEvent({
	                  sortable: sortable,
	                  rootEl: rootEl,
	                  name: 'select',
	                  targetEl: children[i],
	                  originalEvt: evt
	                });
	              }
	            }
	          } else {
	            lastMultiDragSelect = dragEl$1;
	          }

	          multiDragSortable = toSortable;
	        } else {
	          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
	          lastMultiDragSelect = null;
	          dispatchEvent({
	            sortable: sortable,
	            rootEl: rootEl,
	            name: 'deselect',
	            targetEl: dragEl$1,
	            originalEvt: evt
	          });
	        }
	      } // Multi-drag drop


	      if (dragStarted && this.isMultiDrag) {
	        // Do not "unfold" after around dragEl if reverted
	        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
	          var dragRect = getRect(dragEl$1),
	              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
	          if (!initialFolding && options.animation) { dragEl$1.thisAnimationDuration = null; }
	          toSortable.captureAnimationState();

	          if (!initialFolding) {
	            if (options.animation) {
	              dragEl$1.fromRect = dragRect;
	              multiDragElements.forEach(function (multiDragElement) {
	                multiDragElement.thisAnimationDuration = null;

	                if (multiDragElement !== dragEl$1) {
	                  var rect = folding ? getRect(multiDragElement) : dragRect;
	                  multiDragElement.fromRect = rect; // Prepare unfold animation

	                  toSortable.addAnimationState({
	                    target: multiDragElement,
	                    rect: rect
	                  });
	                }
	              });
	            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
	            // properly they must all be removed


	            removeMultiDragElements();
	            multiDragElements.forEach(function (multiDragElement) {
	              if (children[multiDragIndex]) {
	                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
	              } else {
	                parentEl.appendChild(multiDragElement);
	              }

	              multiDragIndex++;
	            }); // If initial folding is done, the elements may have changed position because they are now
	            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
	            // must be fired here as Sortable will not.

	            if (oldIndex === index(dragEl$1)) {
	              var update = false;
	              multiDragElements.forEach(function (multiDragElement) {
	                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
	                  update = true;
	                  return;
	                }
	              });

	              if (update) {
	                dispatchSortableEvent('update');
	              }
	            }
	          } // Must be done after capturing individual rects (scroll bar)


	          multiDragElements.forEach(function (multiDragElement) {
	            unsetRect(multiDragElement);
	          });
	          toSortable.animateAll();
	        }

	        multiDragSortable = toSortable;
	      } // Remove clones if necessary


	      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
	        multiDragClones.forEach(function (clone) {
	          clone.parentNode && clone.parentNode.removeChild(clone);
	        });
	      }
	    },
	    nullingGlobal: function nullingGlobal() {
	      this.isMultiDrag = dragStarted = false;
	      multiDragClones.length = 0;
	    },
	    destroyGlobal: function destroyGlobal() {
	      this._deselectMultiDrag();

	      off(document, 'pointerup', this._deselectMultiDrag);
	      off(document, 'mouseup', this._deselectMultiDrag);
	      off(document, 'touchend', this._deselectMultiDrag);
	      off(document, 'keydown', this._checkKeyDown);
	      off(document, 'keyup', this._checkKeyUp);
	    },
	    _deselectMultiDrag: function _deselectMultiDrag(evt) {
	      if (typeof dragStarted !== "undefined" && dragStarted) { return; } // Only deselect if selection is in this sortable

	      if (multiDragSortable !== this.sortable) { return; } // Only deselect if target is not item in this sortable

	      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) { return; } // Only deselect if left click

	      if (evt && evt.button !== 0) { return; }

	      while (multiDragElements.length) {
	        var el = multiDragElements[0];
	        toggleClass(el, this.options.selectedClass, false);
	        multiDragElements.shift();
	        dispatchEvent({
	          sortable: this.sortable,
	          rootEl: this.sortable.el,
	          name: 'deselect',
	          targetEl: el,
	          originalEvt: evt
	        });
	      }
	    },
	    _checkKeyDown: function _checkKeyDown(evt) {
	      if (evt.key === this.options.multiDragKey) {
	        this.multiDragKeyDown = true;
	      }
	    },
	    _checkKeyUp: function _checkKeyUp(evt) {
	      if (evt.key === this.options.multiDragKey) {
	        this.multiDragKeyDown = false;
	      }
	    }
	  };
	  return _extends(MultiDrag, {
	    // Static methods & properties
	    pluginName: 'multiDrag',
	    utils: {
	      /**
	       * Selects the provided multi-drag item
	       * @param  {HTMLElement} el    The element to be selected
	       */
	      select: function select(el) {
	        var sortable = el.parentNode[expando];
	        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) { return; }

	        if (multiDragSortable && multiDragSortable !== sortable) {
	          multiDragSortable.multiDrag._deselectMultiDrag();

	          multiDragSortable = sortable;
	        }

	        toggleClass(el, sortable.options.selectedClass, true);
	        multiDragElements.push(el);
	      },

	      /**
	       * Deselects the provided multi-drag item
	       * @param  {HTMLElement} el    The element to be deselected
	       */
	      deselect: function deselect(el) {
	        var sortable = el.parentNode[expando],
	            index = multiDragElements.indexOf(el);
	        if (!sortable || !sortable.options.multiDrag || !~index) { return; }
	        toggleClass(el, sortable.options.selectedClass, false);
	        multiDragElements.splice(index, 1);
	      }
	    },
	    eventProperties: function eventProperties() {
	      var _this3 = this;

	      var oldIndicies = [],
	          newIndicies = [];
	      multiDragElements.forEach(function (multiDragElement) {
	        oldIndicies.push({
	          multiDragElement: multiDragElement,
	          index: multiDragElement.sortableIndex
	        }); // multiDragElements will already be sorted if folding

	        var newIndex;

	        if (folding && multiDragElement !== dragEl$1) {
	          newIndex = -1;
	        } else if (folding) {
	          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
	        } else {
	          newIndex = index(multiDragElement);
	        }

	        newIndicies.push({
	          multiDragElement: multiDragElement,
	          index: newIndex
	        });
	      });
	      return {
	        items: _toConsumableArray(multiDragElements),
	        clones: [].concat(multiDragClones),
	        oldIndicies: oldIndicies,
	        newIndicies: newIndicies
	      };
	    },
	    optionListeners: {
	      multiDragKey: function multiDragKey(key) {
	        key = key.toLowerCase();

	        if (key === 'ctrl') {
	          key = 'Control';
	        } else if (key.length > 1) {
	          key = key.charAt(0).toUpperCase() + key.substr(1);
	        }

	        return key;
	      }
	    }
	  });
	}

	function insertMultiDragElements(clonesInserted, rootEl) {
	  multiDragElements.forEach(function (multiDragElement, i) {
	    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

	    if (target) {
	      rootEl.insertBefore(multiDragElement, target);
	    } else {
	      rootEl.appendChild(multiDragElement);
	    }
	  });
	}
	/**
	 * Insert multi-drag clones
	 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
	 * @param  {HTMLElement} rootEl
	 */


	function insertMultiDragClones(elementsInserted, rootEl) {
	  multiDragClones.forEach(function (clone, i) {
	    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

	    if (target) {
	      rootEl.insertBefore(clone, target);
	    } else {
	      rootEl.appendChild(clone);
	    }
	  });
	}

	function removeMultiDragElements() {
	  multiDragElements.forEach(function (multiDragElement) {
	    if (multiDragElement === dragEl$1) { return; }
	    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
	  });
	}

	Sortable.mount(new AutoScrollPlugin());
	Sortable.mount(Remove, Revert);

	var sortable_esm = /*#__PURE__*/Object.freeze({
		default: Sortable,
		MultiDrag: MultiDragPlugin,
		Sortable: Sortable,
		Swap: SwapPlugin
	});

	var require$$0 = ( sortable_esm && Sortable ) || sortable_esm;

	var frappeDatatable_cjs = createCommonjsModule(function (module) {

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var Sortable = _interopDefault(require$$0);

	function $(expr, con) {
	    return typeof expr === 'string' ?
	        (con || document).querySelector(expr) :
	        expr || null;
	}

	$.each = function (expr, con) {
	    return typeof expr === 'string' ?
	        Array.from((con || document).querySelectorAll(expr)) :
	        expr || null;
	};

	$.create = function (tag, o) {
	    var element = document.createElement(tag);

	    var loop = function ( i ) {
	        var val = o[i];

	        if (i === 'inside') {
	            $(val).appendChild(element);
	        } else
	        if (i === 'around') {
	            var ref = $(val);
	            ref.parentNode.insertBefore(element, ref);
	            element.appendChild(ref);
	        } else
	        if (i === 'styles') {
	            if (typeof val === 'object') {
	                Object.keys(val).map(function (prop) {
	                    element.style[prop] = val[prop];
	                });
	            }
	        } else
	        if (i in element) {
	            element[i] = val;
	        } else {
	            element.setAttribute(i, val);
	        }
	    };

	    for (var i in o) loop( i );

	    return element;
	};

	$.on = function (element, event, selector, callback) {
	    if (!callback) {
	        callback = selector;
	        $.bind(element, event, callback);
	    } else {
	        $.delegate(element, event, selector, callback);
	    }
	};

	$.off = function (element, event, handler) {
	    element.removeEventListener(event, handler);
	};

	$.bind = function (element, event, callback) {
	    event.split(/\s+/).forEach(function (event) {
	        element.addEventListener(event, callback);
	    });
	};

	$.delegate = function (element, event, selector, callback) {
	    element.addEventListener(event, function (e) {
	        var delegatedTarget = e.target.closest(selector);
	        if (delegatedTarget) {
	            e.delegatedTarget = delegatedTarget;
	            callback.call(this, e, delegatedTarget);
	        }
	    });
	};

	$.unbind = function (element, o) {
	    if (element) {
	        var loop = function ( event ) {
	            var callback = o[event];

	            event.split(/\s+/).forEach(function (event) {
	                element.removeEventListener(event, callback);
	            });
	        };

	        for (var event in o) loop( event );
	    }
	};

	$.fire = function (target, type, properties) {
	    var evt = document.createEvent('HTMLEvents');

	    evt.initEvent(type, true, true);

	    for (var j in properties) {
	        evt[j] = properties[j];
	    }

	    return target.dispatchEvent(evt);
	};

	$.data = function (element, attrs) { // eslint-disable-line
	    if (!attrs) {
	        return element.dataset;
	    }

	    for (var attr in attrs) {
	        element.dataset[attr] = attrs[attr];
	    }
	};

	$.style = function (elements, styleMap) { // eslint-disable-line

	    if (typeof styleMap === 'string') {
	        return $.getStyle(elements, styleMap);
	    }

	    if (!Array.isArray(elements)) {
	        elements = [elements];
	    }

	    elements.map(function (element) {
	        for (var prop in styleMap) {
	            element.style[prop] = styleMap[prop];
	        }
	    });
	};

	$.removeStyle = function (elements, styleProps) {
	    if (!Array.isArray(elements)) {
	        elements = [elements];
	    }

	    if (!Array.isArray(styleProps)) {
	        styleProps = [styleProps];
	    }

	    elements.map(function (element) {
	        for (var i = 0, list = styleProps; i < list.length; i += 1) {
	            var prop = list[i];

	          element.style[prop] = '';
	        }
	    });
	};

	$.getStyle = function (element, prop) {
	    if (!prop) {
	        return getComputedStyle(element);
	    }

	    var val = getComputedStyle(element)[prop];

	    if (['width', 'height'].includes(prop)) {
	        val = parseFloat(val);
	    }

	    return val;
	};

	$.closest = function (selector, element) {
	    if (!element) { return null; }

	    if (element.matches(selector)) {
	        return element;
	    }

	    return $.closest(selector, element.parentNode);
	};

	$.inViewport = function (el, parentEl) {
	    var ref = el.getBoundingClientRect();
	    var top = ref.top;
	    var left = ref.left;
	    var bottom = ref.bottom;
	    var right = ref.right;
	    var ref$1 = parentEl.getBoundingClientRect();
	    var pTop = ref$1.top;
	    var pLeft = ref$1.left;
	    var pBottom = ref$1.bottom;
	    var pRight = ref$1.right;

	    return top >= pTop && left >= pLeft && bottom <= pBottom && right <= pRight;
	};

	$.scrollTop = function scrollTop(element, pixels) {
	    requestAnimationFrame(function () {
	        element.scrollTop = pixels;
	    });
	};

	$.scrollbarSize = function scrollbarSize() {
	    if (!$.scrollBarSizeValue) {
	        $.scrollBarSizeValue = getScrollBarSize();
	    }
	    return $.scrollBarSizeValue;
	};

	function getScrollBarSize() {
	    // assume scrollbar width and height would be the same

	    // Create the measurement node
	    var scrollDiv = document.createElement('div');
	    $.style(scrollDiv, {
	        width: '100px',
	        height: '100px',
	        overflow: 'scroll',
	        position: 'absolute',
	        top: '-9999px'
	    });
	    document.body.appendChild(scrollDiv);

	    // Get the scrollbar width
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

	    // Delete the DIV
	    document.body.removeChild(scrollDiv);

	    return scrollbarWidth;
	}

	$.hasVerticalOverflow = function (element) {
	    return element.scrollHeight > element.offsetHeight + 10;
	};

	$.hasHorizontalOverflow = function (element) {
	    return element.scrollWidth > element.offsetWidth + 10;
	};

	$.measureTextWidth = function (text) {
	    var div = document.createElement('div');
	    div.style.position = 'absolute';
	    div.style.visibility = 'hidden';
	    div.style.height = 'auto';
	    div.style.width = 'auto';
	    div.style.whiteSpace = 'nowrap';
	    div.innerText = text;
	    document.body.appendChild(div);
	    return div.clientWidth + 1;
	};

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	var commonjsGlobal$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return _root.Date.now();
	};

	var now_1 = now;

	/** Built-in value references. */
	var Symbol = _root.Symbol;

	var _Symbol = Symbol;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol_1(value)) {
	    return NAN;
	  }
	  if (isObject_1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject_1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber_1(wait) || 0;
	  if (isObject_1(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;

	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now_1();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now_1());
	  }

	  function debounced() {
	    var time = now_1(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	var debounce_1 = debounce;

	/** Error message constants. */
	var FUNC_ERROR_TEXT$1 = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT$1);
	  }
	  if (isObject_1(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce_1(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	var throttle_1 = throttle;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/* Built-in method references that are verified to be native. */
	var Map = _getNative(_root, 'Map');

	var _Map = Map;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED$2);
	  return this;
	}

	var _setCacheAdd = setCacheAdd;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new _MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
	SetCache.prototype.has = _setCacheHas;

	var _SetCache = SetCache;

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	var _baseFindIndex = baseFindIndex;

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	var _baseIsNaN = baseIsNaN;

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	var _strictIndexOf = strictIndexOf;

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? _strictIndexOf(array, value, fromIndex)
	    : _baseFindIndex(array, _baseIsNaN, fromIndex);
	}

	var _baseIndexOf = baseIndexOf;

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && _baseIndexOf(array, value, 0) > -1;
	}

	var _arrayIncludes = arrayIncludes;

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arrayIncludesWith = arrayIncludesWith;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas;

	/* Built-in method references that are verified to be native. */
	var Set = _getNative(_root, 'Set');

	var _Set = Set;

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	var noop_1 = noop;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(_Set && (1 / _setToArray(new _Set([,-0]))[1]) == INFINITY) ? noop_1 : function(values) {
	  return new _Set(values);
	};

	var _createSet = createSet;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = _arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = _arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : _createSet(array);
	    if (set) {
	      return _setToArray(set);
	    }
	    isCommon = false;
	    includes = _cacheHas;
	    seen = new _SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	var _baseUniq = baseUniq;

	/**
	 * Creates a duplicate-free version of an array, using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons, in which only the first occurrence of each element
	 * is kept. The order of result values is determined by the order they occur
	 * in the array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * _.uniq([2, 1, 2]);
	 * // => [2, 1]
	 */
	function uniq(array) {
	  return (array && array.length) ? _baseUniq(array) : [];
	}

	var uniq_1 = uniq;

	function camelCaseToDash(str) {
	    return str.replace(/([A-Z])/g, function (g) { return ("-" + (g[0].toLowerCase())); });
	}

	function makeDataAttributeString(props) {
	    var keys = Object.keys(props);

	    return keys
	        .map(function (key) {
	            var _key = camelCaseToDash(key);
	            var val = props[key];

	            if (val === undefined) { return ''; }
	            return ("data-" + _key + "=\"" + val + "\" ");
	        })
	        .join('')
	        .trim();
	}

	function copyTextToClipboard(text) {
	    // https://stackoverflow.com/a/30810322/5353542
	    var textArea = document.createElement('textarea');

	    //
	    // *** This styling is an extra step which is likely not required. ***
	    //
	    // Why is it here? To ensure:
	    // 1. the element is able to have focus and selection.
	    // 2. if element was to flash render it has minimal visual impact.
	    // 3. less flakyness with selection and copying which **might** occur if
	    //    the textarea element is not visible.
	    //
	    // The likelihood is the element won't even render, not even a flash,
	    // so some of these are just precautions. However in IE the element
	    // is visible whilst the popup box asking the user for permission for
	    // the web page to copy to the clipboard.
	    //

	    // Place in top-left corner of screen regardless of scroll position.
	    textArea.style.position = 'fixed';
	    textArea.style.top = 0;
	    textArea.style.left = 0;

	    // Ensure it has a small width and height. Setting to 1px / 1em
	    // doesn't work as this gives a negative w/h on some browsers.
	    textArea.style.width = '2em';
	    textArea.style.height = '2em';

	    // We don't need padding, reducing the size if it does flash render.
	    textArea.style.padding = 0;

	    // Clean up any borders.
	    textArea.style.border = 'none';
	    textArea.style.outline = 'none';
	    textArea.style.boxShadow = 'none';

	    // Avoid flash of white box if rendered for any reason.
	    textArea.style.background = 'transparent';

	    textArea.value = text;

	    document.body.appendChild(textArea);

	    textArea.select();

	    try {
	        document.execCommand('copy');
	    } catch (err) {
	        console.log('Oops, unable to copy');
	    }

	    document.body.removeChild(textArea);
	}

	function isNumeric(val) {
	    return !isNaN(val);
	}

	var throttle$1 = throttle_1;

	var debounce$1 = debounce_1;

	function nextTick(fn, context) {
	    if ( context === void 0 ) context = null;

	    return function () {
	        var args = [], len = arguments.length;
	        while ( len-- ) args[ len ] = arguments[ len ];

	        return new Promise(function (resolve) {
	            var execute = function () {
	                var out = fn.apply(context, args);
	                resolve(out);
	            };
	            setTimeout(execute);
	        });
	    };
	}
	function linkProperties(target, source, properties) {
	    var props = properties.reduce(function (acc, prop) {
	        acc[prop] = {
	            get: function get() {
	                return source[prop];
	            }
	        };
	        return acc;
	    }, {});
	    Object.defineProperties(target, props);
	}
	function isSet(val) {
	    return val !== undefined || val !== null;
	}

	function notSet(val) {
	    return !isSet(val);
	}

	function isNumber(val) {
	    return !isNaN(val);
	}

	function ensureArray(val) {
	    if (!Array.isArray(val)) {
	        return [val];
	    }
	    return val;
	}

	function uniq$1(arr) {
	    return uniq_1(arr);
	}

	function numberSortAsc(a, b) {
	    return a - b;
	}
	function stripHTML(html) {
	    return html.replace(/<[^>]*>/g, '');
	}

	class DataManager {
	    constructor(options) {
	        this.options = options;
	        this.sortRows = nextTick(this.sortRows, this);
	        this.switchColumn = nextTick(this.switchColumn, this);
	        this.removeColumn = nextTick(this.removeColumn, this);
	        this.options.filterRows = nextTick(this.options.filterRows, this);
	    }

	    init(data, columns) {
	        if (!data) {
	            data = this.options.data;
	        }
	        if (columns) {
	            this.options.columns = columns;
	        }

	        this.data = data;

	        this.rowCount = 0;
	        this.columns = [];
	        this.rows = [];

	        this.prepareColumns();
	        this.prepareRows();
	        this.prepareTreeRows();
	        this.prepareRowView();
	        this.prepareNumericColumns();
	    }

	    // computed property
	    get currentSort() {
	        var col = this.columns.find(function (col) { return col.sortOrder !== 'none'; });
	        return col || {
	            colIndex: -1,
	            sortOrder: 'none'
	        };
	    }

	    prepareColumns() {
	        this.columns = [];
	        this.validateColumns();
	        this.prepareDefaultColumns();
	        this.prepareHeader();
	    }

	    prepareDefaultColumns() {
	        if (this.options.checkboxColumn && !this.hasColumnById('_checkbox')) {
	            var cell = {
	                id: '_checkbox',
	                content: this.getCheckboxHTML(),
	                editable: false,
	                resizable: false,
	                sortable: false,
	                focusable: false,
	                dropdown: false,
	                width: 32
	            };
	            this.columns.push(cell);
	        }

	        if (this.options.serialNoColumn && !this.hasColumnById('_rowIndex')) {
	            var cell$1 = {
	                id: '_rowIndex',
	                content: '',
	                align: 'center',
	                editable: false,
	                resizable: false,
	                focusable: false,
	                dropdown: false
	            };

	            this.columns.push(cell$1);
	        }
	    }

	    prepareHeader() {
	        var this$1 = this;

	        var columns = this.columns.concat(this.options.columns);
	        var baseCell = {
	            isHeader: 1,
	            editable: true,
	            sortable: true,
	            resizable: true,
	            focusable: true,
	            dropdown: true,
	            width: null,
	            format: function (value) {
	                if (value === null || value === undefined) {
	                    return '';
	                }
	                return value + '';
	            }
	        };

	        this.columns = columns
	            .map(function (cell, i) { return this$1.prepareCell(cell, i); })
	            .map(function (col) { return Object.assign({}, baseCell, col); })
	            .map(function (col) {
	                col.content = col.content || col.name || '';
	                col.id = col.id || col.content;
	                return col;
	            });
	    }

	    prepareCell(content, i) {
	        var cell = {
	            content: '',
	            sortOrder: 'none',
	            colIndex: i,
	            column: this.columns[i]
	        };

	        if (content !== null && typeof content === 'object') {
	            // passed as column/header
	            Object.assign(cell, content);
	        } else {
	            cell.content = content;
	        }

	        return cell;
	    }

	    prepareNumericColumns() {
	        var row0 = this.getRow(0);
	        if (!row0) { return; }
	        this.columns = this.columns.map(function (column, i) {

	            var cellValue = row0[i].content;
	            if (!column.align && isNumeric(cellValue)) {
	                column.align = 'right';
	            }

	            return column;
	        });
	    }

	    prepareRows() {
	        var this$1 = this;

	        this.validateData(this.data);

	        this.rows = this.data.map(function (d, i) {
	            var index = this$1._getNextRowCount();

	            var row = [];
	            var meta = {
	                rowIndex: index
	            };

	            if (Array.isArray(d)) {
	                // row is an array
	                if (this$1.options.checkboxColumn) {
	                    row.push(this$1.getCheckboxHTML());
	                }
	                if (this$1.options.serialNoColumn) {
	                    row.push((index + 1) + '');
	                }
	                row = row.concat(d);

	                while (row.length < this$1.columns.length) {
	                    row.push('');
	                }

	            } else {
	                // row is an object
	                for (var i$1 = 0, list = this$1.columns; i$1 < list.length; i$1 += 1) {
	                    var col = list[i$1];

	                  if (col.id === '_checkbox') {
	                        row.push(this$1.getCheckboxHTML());
	                    } else if (col.id === '_rowIndex') {
	                        row.push((index + 1) + '');
	                    } else {
	                        row.push(d[col.id]);
	                    }
	                }

	                meta.indent = d.indent || 0;
	            }

	            return this$1.prepareRow(row, meta);
	        });
	    }

	    prepareTreeRows() {
	        var this$1 = this;

	        this.rows.forEach(function (row, i) {
	            if (isNumber(row.meta.indent)) {
	                // if (i === 36) debugger;
	                var nextRow = this$1.getRow(i + 1);
	                row.meta.isLeaf = !nextRow ||
	                    notSet(nextRow.meta.indent) ||
	                    nextRow.meta.indent <= row.meta.indent;
	                row.meta.isTreeNodeClose = false;
	            }
	        });
	    }

	    prepareRowView() {
	        // This is order in which rows will be rendered in the table.
	        // When sorting happens, only this.rowViewOrder will change
	        // and not the original this.rows
	        this.rowViewOrder = this.rows.map(function (row) { return row.meta.rowIndex; });
	    }

	    prepareRow(row, meta) {
	        var this$1 = this;

	        var baseRowCell = {
	            rowIndex: meta.rowIndex,
	            indent: meta.indent
	        };

	        row = row
	            .map(function (cell, i) { return this$1.prepareCell(cell, i); })
	            .map(function (cell) { return Object.assign({}, baseRowCell, cell); });

	        // monkey patched in array object
	        row.meta = meta;
	        return row;
	    }

	    validateColumns() {
	        var columns = this.options.columns;
	        if (!Array.isArray(columns)) {
	            throw new DataError('`columns` must be an array');
	        }

	        columns.forEach(function (column, i) {
	            if (typeof column !== 'string' && typeof column !== 'object') {
	                throw new DataError(("column \"" + i + "\" must be a string or an object"));
	            }
	        });
	    }

	    validateData(data) {
	        if (Array.isArray(data) &&
	            (data.length === 0 || Array.isArray(data[0]) || typeof data[0] === 'object')) {
	            return true;
	        }
	        throw new DataError('`data` must be an array of arrays or objects');
	    }

	    appendRows(rows) {
	        var ref;

	        this.validateData(rows);

	        (ref = this.rows).push.apply(ref, this.prepareRows(rows));
	    }

	    sortRows(colIndex, sortOrder) {
	        if ( sortOrder === void 0 ) sortOrder = 'none';

	        colIndex = +colIndex;

	        // reset sortOrder and update for colIndex
	        this.getColumns()
	            .map(function (col) {
	                if (col.colIndex === colIndex) {
	                    col.sortOrder = sortOrder;
	                } else {
	                    col.sortOrder = 'none';
	                }
	            });

	        this._sortRows(colIndex, sortOrder);
	    }

	    _sortRows(colIndex, sortOrder) {
	        var this$1 = this;


	        if (this.currentSort.colIndex === colIndex) {
	            // reverse the array if only sortOrder changed
	            if (
	                (this.currentSort.sortOrder === 'asc' && sortOrder === 'desc') ||
	                (this.currentSort.sortOrder === 'desc' && sortOrder === 'asc')
	            ) {
	                this.reverseArray(this.rowViewOrder);
	                this.currentSort.sortOrder = sortOrder;
	                return;
	            }
	        }

	        this.rowViewOrder.sort(function (a, b) {
	            var aIndex = a;
	            var bIndex = b;

	            var aContent = this$1.getCell(colIndex, a).content;
	            var bContent = this$1.getCell(colIndex, b).content;
	            aContent = aContent == null ? '' : aContent;
	            bContent = bContent == null ? '' : bContent;

	            if (sortOrder === 'none') {
	                return aIndex - bIndex;
	            } else if (sortOrder === 'asc') {
	                if (aContent < bContent) { return -1; }
	                if (aContent > bContent) { return 1; }
	                if (aContent === bContent) { return 0; }
	            } else if (sortOrder === 'desc') {
	                if (aContent < bContent) { return 1; }
	                if (aContent > bContent) { return -1; }
	                if (aContent === bContent) { return 0; }
	            }
	            return 0;
	        });

	        if (this.hasColumnById('_rowIndex')) {
	            // update row index
	            var srNoColIndex = this.getColumnIndexById('_rowIndex');
	            this.rows.forEach(function (row, index) {
	                var viewIndex = this$1.rowViewOrder.indexOf(index);
	                var cell = row[srNoColIndex];
	                cell.content = (viewIndex + 1) + '';
	            });
	        }
	    }

	    reverseArray(array) {
	        var left = null;
	        var right = null;
	        var length = array.length;

	        for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
	            var temporary = array[left];

	            array[left] = array[right];
	            array[right] = temporary;
	        }
	    }

	    switchColumn(index1, index2) {
	        // update columns
	        var temp = this.columns[index1];
	        this.columns[index1] = this.columns[index2];
	        this.columns[index2] = temp;

	        this.columns[index1].colIndex = index1;
	        this.columns[index2].colIndex = index2;

	        // update rows
	        this.rows.forEach(function (row) {
	            var newCell1 = Object.assign({}, row[index1], {
	                colIndex: index2
	            });
	            var newCell2 = Object.assign({}, row[index2], {
	                colIndex: index1
	            });

	            row[index2] = newCell1;
	            row[index1] = newCell2;
	        });
	    }

	    removeColumn(index) {
	        index = +index;
	        var filter = function (cell) { return cell.colIndex !== index; };
	        var map = function (cell, i) { return Object.assign({}, cell, {
	            colIndex: i
	        }); };
	        // update columns
	        this.columns = this.columns
	            .filter(filter)
	            .map(map);

	        // update rows
	        this.rows.forEach(function (row) {
	            // remove cell
	            row.splice(index, 1);
	            // update colIndex
	            row.forEach(function (cell, i) {
	                cell.colIndex = i;
	            });
	        });
	    }

	    updateRow(row, rowIndex) {
	        if (row.length < this.columns.length) {
	            if (this.hasColumnById('_rowIndex')) {
	                var val = (rowIndex + 1) + '';

	                row = [val].concat(row);
	            }

	            if (this.hasColumnById('_checkbox')) {
	                var val$1 = '<input type="checkbox" />';

	                row = [val$1].concat(row);
	            }
	        }

	        var _row = this.prepareRow(row, {rowIndex: rowIndex});
	        var index = this.rows.findIndex(function (row) { return row[0].rowIndex === rowIndex; });
	        this.rows[index] = _row;

	        return _row;
	    }

	    updateCell(colIndex, rowIndex, options) {
	        var cell;
	        if (typeof colIndex === 'object') {
	            // cell object was passed,
	            // must have colIndex, rowIndex
	            cell = colIndex;
	            colIndex = cell.colIndex;
	            rowIndex = cell.rowIndex;
	            // the object passed must be merged with original cell
	            options = cell;
	        }
	        cell = this.getCell(colIndex, rowIndex);

	        // mutate object directly
	        for (var key in options) {
	            var newVal = options[key];
	            if (newVal !== undefined) {
	                cell[key] = newVal;
	            }
	        }

	        return cell;
	    }

	    updateColumn(colIndex, keyValPairs) {
	        var column = this.getColumn(colIndex);
	        for (var key in keyValPairs) {
	            var newVal = keyValPairs[key];
	            if (newVal !== undefined) {
	                column[key] = newVal;
	            }
	        }
	        return column;
	    }

	    filterRows(filters) {
	        var this$1 = this;

	        return this.options.filterRows(this.rows, filters)
	            .then(function (result) {
	                if (!result) {
	                    result = this$1.getAllRowIndices();
	                }

	                if (!result.then) {
	                    result = Promise.resolve(result);
	                }

	                return result.then(function (rowsToShow) {
	                    this$1._filteredRows = rowsToShow;

	                    var rowsToHide = this$1.getAllRowIndices()
	                        .filter(function (index) { return !rowsToShow.includes(index); });

	                    return {
	                        rowsToHide: rowsToHide,
	                        rowsToShow: rowsToShow
	                    };
	                });
	            });
	    }

	    getFilteredRowIndices() {
	        return this._filteredRows || this.getAllRowIndices();
	    }

	    getAllRowIndices() {
	        return this.rows.map(function (row) { return row.meta.rowIndex; });
	    }

	    getRowCount() {
	        return this.rowCount;
	    }

	    _getNextRowCount() {
	        var val = this.rowCount;

	        this.rowCount++;
	        return val;
	    }

	    getRows(start, end) {
	        return this.rows.slice(start, end);
	    }

	    getRowsForView(start, end) {
	        var this$1 = this;

	        var rows = this.rowViewOrder.map(function (i) { return this$1.rows[i]; });
	        return rows.slice(start, end);
	    }

	    getColumns(skipStandardColumns) {
	        var columns = this.columns;

	        if (skipStandardColumns) {
	            columns = columns.slice(this.getStandardColumnCount());
	        }

	        return columns;
	    }

	    getStandardColumnCount() {
	        if (this.options.checkboxColumn && this.options.serialNoColumn) {
	            return 2;
	        }

	        if (this.options.checkboxColumn || this.options.serialNoColumn) {
	            return 1;
	        }

	        return 0;
	    }

	    getColumnCount(skipStandardColumns) {
	        var val = this.columns.length;

	        if (skipStandardColumns) {
	            val = val - this.getStandardColumnCount();
	        }

	        return val;
	    }

	    getColumn(colIndex) {
	        colIndex = +colIndex;

	        if (colIndex < 0) {
	            // negative indexes
	            colIndex = this.columns.length + colIndex;
	        }

	        return this.columns.find(function (col) { return col.colIndex === colIndex; });
	    }

	    getColumnById(id) {
	        return this.columns.find(function (col) { return col.id === id; });
	    }

	    getRow(rowIndex) {
	        rowIndex = +rowIndex;
	        return this.rows[rowIndex];
	    }

	    getCell(colIndex, rowIndex) {
	        rowIndex = +rowIndex;
	        colIndex = +colIndex;
	        return this.getRow(rowIndex)[colIndex];
	    }

	    getChildren(parentRowIndex) {
	        parentRowIndex = +parentRowIndex;
	        var parentIndent = this.getRow(parentRowIndex).meta.indent;
	        var out = [];

	        for (var i = parentRowIndex + 1; i < this.rowCount; i++) {
	            var row = this.getRow(i);
	            if (isNaN(row.meta.indent)) { continue; }

	            if (row.meta.indent > parentIndent) {
	                out.push(i);
	            }

	            if (row.meta.indent === parentIndent) {
	                break;
	            }
	        }

	        return out;
	    }

	    getImmediateChildren(parentRowIndex) {
	        parentRowIndex = +parentRowIndex;
	        var parentIndent = this.getRow(parentRowIndex).meta.indent;
	        var out = [];
	        var childIndent = parentIndent + 1;

	        for (var i = parentRowIndex + 1; i < this.rowCount; i++) {
	            var row = this.getRow(i);
	            if (isNaN(row.meta.indent) || row.meta.indent > childIndent) { continue; }

	            if (row.meta.indent === childIndent) {
	                out.push(i);
	            }

	            if (row.meta.indent === parentIndent) {
	                break;
	            }
	        }

	        return out;
	    }

	    get() {
	        return {
	            columns: this.columns,
	            rows: this.rows
	        };
	    }

	    /**
	     * Returns the original data which was passed
	     * based on rowIndex
	     * @param {Number} rowIndex
	     * @returns Array|Object
	     * @memberof DataManager
	     */
	    getData(rowIndex) {
	        return this.data[rowIndex];
	    }

	    hasColumn(name) {
	        return Boolean(this.columns.find(function (col) { return col.content === name; }));
	    }

	    hasColumnById(id) {
	        return Boolean(this.columns.find(function (col) { return col.id === id; }));
	    }

	    getColumnIndex(name) {
	        return this.columns.findIndex(function (col) { return col.content === name; });
	    }

	    getColumnIndexById(id) {
	        return this.columns.findIndex(function (col) { return col.id === id; });
	    }

	    getCheckboxHTML() {
	        return '<input type="checkbox" />';
	    }
	}

	// Custom Errors
	class DataError extends TypeError {}

	/* eslint-disable max-len */

	// Icons from https://feathericons.com/

	var icons = {
	    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>',
	    chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>'
	};

	class CellManager {
	    constructor(instance) {
	        this.instance = instance;
	        linkProperties(this, this.instance, [
	            'wrapper',
	            'options',
	            'style',
	            'header',
	            'bodyScrollable',
	            'columnmanager',
	            'rowmanager',
	            'datamanager',
	            'keyboard'
	        ]);

	        this.bindEvents();
	    }

	    bindEvents() {
	        this.bindFocusCell();
	        this.bindEditCell();
	        this.bindKeyboardSelection();
	        this.bindCopyCellContents();
	        this.bindMouseEvents();
	        this.bindTreeEvents();
	    }

	    bindFocusCell() {
	        this.bindKeyboardNav();
	    }

	    bindEditCell() {
	        var this$1 = this;

	        this.$editingCell = null;

	        $.on(this.bodyScrollable, 'dblclick', '.dt-cell', function (e, cell) {
	            this$1.activateEditing(cell);
	        });

	        this.keyboard.on('enter', function () {
	            if (this$1.$focusedCell && !this$1.$editingCell) {
	                // enter keypress on focused cell
	                this$1.activateEditing(this$1.$focusedCell);
	            } else if (this$1.$editingCell) {
	                // enter keypress on editing cell
	                this$1.deactivateEditing();
	            }
	        });
	    }

	    bindKeyboardNav() {
	        var this$1 = this;

	        var focusLastCell = function (direction) {
	            if (!this$1.$focusedCell || this$1.$editingCell) {
	                return false;
	            }

	            var $cell = this$1.$focusedCell;
	            var ref = $.data($cell);
	            var rowIndex = ref.rowIndex;
	            var colIndex = ref.colIndex;

	            if (direction === 'left') {
	                $cell = this$1.getLeftMostCell$(rowIndex);
	            } else if (direction === 'right') {
	                $cell = this$1.getRightMostCell$(rowIndex);
	            } else if (direction === 'up') {
	                $cell = this$1.getTopMostCell$(colIndex);
	            } else if (direction === 'down') {
	                $cell = this$1.getBottomMostCell$(colIndex);
	            }

	            this$1.focusCell($cell);
	            return true;
	        };

	        ['left', 'right', 'up', 'down', 'tab', 'shift+tab']
	            .map(function (direction) { return this$1.keyboard.on(direction, function () { return this$1.focusCellInDirection(direction); }); });

	        ['left', 'right', 'up', 'down']
	            .map(function (direction) { return this$1.keyboard.on(("ctrl+" + direction), function () { return focusLastCell(direction); }); });

	        this.keyboard.on('esc', function () {
	            this$1.deactivateEditing(false);
	            this$1.columnmanager.toggleFilter(false);
	        });

	        if (this.options.inlineFilters) {
	            this.keyboard.on('ctrl+f', function (e) {
	                var $cell = $.closest('.dt-cell', e.target);
	                var ref = $.data($cell);
	                var colIndex = ref.colIndex;

	                this$1.activateFilter(colIndex);
	                return true;
	            });

	            $.on(this.header, 'focusin', '.dt-filter', function () {
	                this$1.unfocusCell(this$1.$focusedCell);
	            });
	        }
	    }

	    bindKeyboardSelection() {
	        var this$1 = this;

	        var getNextSelectionCursor = function (direction) {
	            var $selectionCursor = this$1.getSelectionCursor();

	            if (direction === 'left') {
	                $selectionCursor = this$1.getLeftCell$($selectionCursor);
	            } else if (direction === 'right') {
	                $selectionCursor = this$1.getRightCell$($selectionCursor);
	            } else if (direction === 'up') {
	                $selectionCursor = this$1.getAboveCell$($selectionCursor);
	            } else if (direction === 'down') {
	                $selectionCursor = this$1.getBelowCell$($selectionCursor);
	            }

	            return $selectionCursor;
	        };

	        ['left', 'right', 'up', 'down']
	            .map(function (direction) { return this$1.keyboard.on(("shift+" + direction), function () { return this$1.selectArea(getNextSelectionCursor(direction)); }); });
	    }

	    bindCopyCellContents() {
	        var this$1 = this;

	        this.keyboard.on('ctrl+c', function () {
	            var noOfCellsCopied = this$1.copyCellContents(this$1.$focusedCell, this$1.$selectionCursor);
	            var message = noOfCellsCopied + " cell" + (noOfCellsCopied > 1 ? 's' : '') + " copied";
	            if (noOfCellsCopied) {
	                this$1.instance.showToastMessage(message, 2);
	            }
	        });

	        if (this.options.pasteFromClipboard) {
	            this.keyboard.on('ctrl+v', function (e) {
	                // hack
	                // https://stackoverflow.com/a/2177059/5353542
	                this$1.instance.pasteTarget.focus();

	                setTimeout(function () {
	                    var data = this$1.instance.pasteTarget.value;
	                    this$1.instance.pasteTarget.value = '';
	                    this$1.pasteContentInCell(data);
	                }, 10);

	                return false;
	            });
	        }
	    }

	    bindMouseEvents() {
	        var this$1 = this;

	        var mouseDown = null;

	        $.on(this.bodyScrollable, 'mousedown', '.dt-cell', function (e) {
	            mouseDown = true;
	            this$1.focusCell($(e.delegatedTarget));
	        });

	        $.on(this.bodyScrollable, 'mouseup', function () {
	            mouseDown = false;
	        });

	        var selectArea = function (e) {
	            if (!mouseDown) { return; }
	            this$1.selectArea($(e.delegatedTarget));
	        };

	        $.on(this.bodyScrollable, 'mousemove', '.dt-cell', throttle$1(selectArea, 50));
	    }

	    bindTreeEvents() {
	        var this$1 = this;

	        $.on(this.bodyScrollable, 'click', '.dt-tree-node__toggle', function (e, $toggle) {
	            var $cell = $.closest('.dt-cell', $toggle);
	            var ref = $.data($cell);
	            var rowIndex = ref.rowIndex;

	            if ($cell.classList.contains('dt-cell--tree-close')) {
	                this$1.rowmanager.openSingleNode(rowIndex);
	            } else {
	                this$1.rowmanager.closeSingleNode(rowIndex);
	            }
	        });
	    }

	    focusCell($cell, ref) {
	        if ( ref === void 0 ) ref = {};
	        var skipClearSelection = ref.skipClearSelection; if ( skipClearSelection === void 0 ) skipClearSelection = 0;
	        var skipDOMFocus = ref.skipDOMFocus; if ( skipDOMFocus === void 0 ) skipDOMFocus = 0;
	        var skipScrollToCell = ref.skipScrollToCell; if ( skipScrollToCell === void 0 ) skipScrollToCell = 0;

	        if (!$cell) { return; }

	        // don't focus if already editing cell
	        if ($cell === this.$editingCell) { return; }

	        var ref$1 = $.data($cell);
	        var colIndex = ref$1.colIndex;
	        var isHeader = ref$1.isHeader;
	        if (isHeader) {
	            return;
	        }

	        var column = this.columnmanager.getColumn(colIndex);
	        if (column.focusable === false) {
	            return;
	        }

	        if (!skipScrollToCell) {
	            this.scrollToCell($cell);
	        }

	        this.deactivateEditing();
	        if (!skipClearSelection) {
	            this.clearSelection();
	        }

	        if (this.$focusedCell) {
	            this.$focusedCell.classList.remove('dt-cell--focus');
	        }

	        this.$focusedCell = $cell;
	        $cell.classList.add('dt-cell--focus');

	        if (!skipDOMFocus) {
	            // so that keyboard nav works
	            $cell.focus();
	        }

	        this.highlightRowColumnHeader($cell);
	    }

	    unfocusCell($cell) {
	        if (!$cell) { return; }

	        // remove cell border
	        $cell.classList.remove('dt-cell--focus');
	        this.$focusedCell = null;

	        // reset header background
	        if (this.lastHeaders) {
	            this.lastHeaders.forEach(function (header) { return header && header.classList.remove('dt-cell--highlight'); });
	        }
	    }

	    highlightRowColumnHeader($cell) {
	        var ref = $.data($cell);
	        var colIndex = ref.colIndex;
	        var rowIndex = ref.rowIndex;

	        var srNoColIndex = this.datamanager.getColumnIndexById('_rowIndex');
	        var colHeaderSelector = ".dt-cell--header-" + colIndex;
	        var rowHeaderSelector = ".dt-cell--" + srNoColIndex + "-" + rowIndex;

	        if (this.lastHeaders) {
	            this.lastHeaders.forEach(function (header) { return header && header.classList.remove('dt-cell--highlight'); });
	        }

	        var colHeader = $(colHeaderSelector, this.wrapper);
	        var rowHeader = $(rowHeaderSelector, this.wrapper);

	        this.lastHeaders = [colHeader, rowHeader];
	        this.lastHeaders.forEach(function (header) { return header && header.classList.add('dt-cell--highlight'); });
	    }

	    selectAreaOnClusterChanged() {
	        if (!(this.$focusedCell && this.$selectionCursor)) { return; }
	        var ref = $.data(this.$selectionCursor);
	        var colIndex = ref.colIndex;
	        var rowIndex = ref.rowIndex;
	        var $cell = this.getCell$(colIndex, rowIndex);

	        if (!$cell || $cell === this.$selectionCursor) { return; }

	        // selectArea needs $focusedCell
	        var fCell = $.data(this.$focusedCell);
	        this.$focusedCell = this.getCell$(fCell.colIndex, fCell.rowIndex);

	        this.selectArea($cell);
	    }

	    focusCellOnClusterChanged() {
	        if (!this.$focusedCell) { return; }

	        var ref = $.data(this.$focusedCell);
	        var colIndex = ref.colIndex;
	        var rowIndex = ref.rowIndex;
	        var $cell = this.getCell$(colIndex, rowIndex);

	        if (!$cell) { return; }
	        // this function is called after hyperlist renders the rows after scroll,
	        // focusCell calls clearSelection which resets the area selection
	        // so a flag to skip it
	        // we also skip DOM focus and scroll to cell
	        // because it fights with the user scroll
	        this.focusCell($cell, {
	            skipClearSelection: 1,
	            skipDOMFocus: 1,
	            skipScrollToCell: 1
	        });
	    }

	    selectArea($selectionCursor) {
	        if (!this.$focusedCell) { return; }

	        if (this._selectArea(this.$focusedCell, $selectionCursor)) {
	            // valid selection
	            this.$selectionCursor = $selectionCursor;
	        }
	    }

	    _selectArea($cell1, $cell2) {
	        var this$1 = this;

	        if ($cell1 === $cell2) { return false; }

	        var cells = this.getCellsInRange($cell1, $cell2);
	        if (!cells) { return false; }

	        this.clearSelection();
	        this._selectedCells = cells.map(function (index) {
	          var ref;

	          return (ref = this$1).getCell$.apply(ref, index);
	        });
	        requestAnimationFrame(function () {
	            this$1._selectedCells.map(function ($cell) { return $cell.classList.add('dt-cell--highlight'); });
	        });
	        return true;
	    }

	    getCellsInRange($cell1, $cell2) {
	        var assign, assign$1, assign$2;

	        var colIndex1, rowIndex1, colIndex2, rowIndex2;

	        if (typeof $cell1 === 'number') {
	            (assign = arguments, colIndex1 = assign[0], rowIndex1 = assign[1], colIndex2 = assign[2], rowIndex2 = assign[3]);
	        } else
	        if (typeof $cell1 === 'object') {
	            if (!($cell1 && $cell2)) {
	                return false;
	            }

	            var cell1 = $.data($cell1);
	            var cell2 = $.data($cell2);

	            colIndex1 = +cell1.colIndex;
	            rowIndex1 = +cell1.rowIndex;
	            colIndex2 = +cell2.colIndex;
	            rowIndex2 = +cell2.rowIndex;
	        }

	        if (rowIndex1 > rowIndex2) {
	            (assign$1 = [rowIndex2, rowIndex1], rowIndex1 = assign$1[0], rowIndex2 = assign$1[1]);
	        }

	        if (colIndex1 > colIndex2) {
	            (assign$2 = [colIndex2, colIndex1], colIndex1 = assign$2[0], colIndex2 = assign$2[1]);
	        }

	        if (this.isStandardCell(colIndex1) || this.isStandardCell(colIndex2)) {
	            return false;
	        }

	        var cells = [];
	        var colIndex = colIndex1;
	        var rowIndex = rowIndex1;
	        var rowIndices = [];

	        while (rowIndex <= rowIndex2) {
	            rowIndices.push(rowIndex);
	            rowIndex += 1;
	        }

	        rowIndices.map(function (rowIndex) {
	            while (colIndex <= colIndex2) {
	                cells.push([colIndex, rowIndex]);
	                colIndex++;
	            }
	            colIndex = colIndex1;
	        });

	        return cells;
	    }

	    clearSelection() {
	        (this._selectedCells || [])
	            .forEach(function ($cell) { return $cell.classList.remove('dt-cell--highlight'); });

	        this._selectedCells = [];
	        this.$selectionCursor = null;
	    }

	    getSelectionCursor() {
	        return this.$selectionCursor || this.$focusedCell;
	    }

	    activateEditing($cell) {
	        this.focusCell($cell);
	        var ref = $.data($cell);
	        var rowIndex = ref.rowIndex;
	        var colIndex = ref.colIndex;

	        var col = this.columnmanager.getColumn(colIndex);
	        if (col && (col.editable === false || col.focusable === false)) {
	            return;
	        }

	        var cell = this.getCell(colIndex, rowIndex);
	        if (cell && cell.editable === false) {
	            return;
	        }

	        if (this.$editingCell) {
	            var ref$1 = $.data(this.$editingCell);
	            var _rowIndex = ref$1._rowIndex;
	            var _colIndex = ref$1._colIndex;

	            if (rowIndex === _rowIndex && colIndex === _colIndex) {
	                // editing the same cell
	                return;
	            }
	        }

	        this.$editingCell = $cell;
	        $cell.classList.add('dt-cell--editing');

	        var $editCell = $('.dt-cell__edit', $cell);
	        $editCell.innerHTML = '';

	        var editor = this.getEditor(colIndex, rowIndex, cell.content, $editCell);

	        if (editor) {
	            this.currentCellEditor = editor;
	            // initialize editing input with cell value
	            editor.initValue(cell.content, rowIndex, col);
	        }
	    }

	    deactivateEditing(submitValue) {
	        if ( submitValue === void 0 ) submitValue = true;

	        if (submitValue) {
	            this.submitEditing();
	        }
	        // keep focus on the cell so that keyboard navigation works
	        if (this.$focusedCell) { this.$focusedCell.focus(); }

	        if (!this.$editingCell) { return; }
	        this.$editingCell.classList.remove('dt-cell--editing');
	        this.$editingCell = null;
	    }

	    getEditor(colIndex, rowIndex, value, parent) {
	        var column = this.datamanager.getColumn(colIndex);
	        var row = this.datamanager.getRow(rowIndex);
	        var data = this.datamanager.getData(rowIndex);
	        var editor = this.options.getEditor ?
	            this.options.getEditor(colIndex, rowIndex, value, parent, column, row, data) :
	            this.getDefaultEditor(parent);

	        if (editor === false) {
	            // explicitly returned false
	            return false;
	        }
	        if (editor === undefined) {
	            // didn't return editor, fallback to default
	            editor = this.getDefaultEditor(parent);
	        }

	        return editor;
	    }

	    getDefaultEditor(parent) {
	        var $input = $.create('input', {
	            class: 'dt-input',
	            type: 'text',
	            inside: parent
	        });

	        return {
	            initValue: function initValue(value) {
	                $input.focus();
	                $input.value = value;
	            },
	            getValue: function getValue() {
	                return $input.value;
	            },
	            setValue: function setValue(value) {
	                $input.value = value;
	            }
	        };
	    }

	    submitEditing() {
	        var this$1 = this;

	        var promise = Promise.resolve();
	        if (!this.$editingCell) { return promise; }

	        var $cell = this.$editingCell;
	        var ref = $.data($cell);
	        var rowIndex = ref.rowIndex;
	        var colIndex = ref.colIndex;
	        var col = this.datamanager.getColumn(colIndex);

	        if ($cell) {
	            var editor = this.currentCellEditor;

	            if (editor) {
	                var valuePromise = editor.getValue();

	                // convert to stubbed Promise
	                if (!valuePromise.then) {
	                    valuePromise = Promise.resolve(valuePromise);
	                }

	                promise = valuePromise.then(function (value) {
	                    var done = editor.setValue(value, rowIndex, col);
	                    var oldValue = this$1.getCell(colIndex, rowIndex).content;

	                    // update cell immediately
	                    this$1.updateCell(colIndex, rowIndex, value);
	                    $cell.focus();

	                    if (done && done.then) {
	                        // revert to oldValue if promise fails
	                        done.catch(function (e) {
	                            console.log(e);
	                            this$1.updateCell(colIndex, rowIndex, oldValue);
	                        });
	                    }
	                    return done;
	                });
	            }
	        }

	        this.currentCellEditor = null;
	        return promise;
	    }

	    copyCellContents($cell1, $cell2) {
	        var this$1 = this;

	        if (!$cell2 && $cell1) {
	            // copy only focusedCell
	            var ref = $.data($cell1);
	            var colIndex = ref.colIndex;
	            var rowIndex = ref.rowIndex;
	            var cell = this.getCell(colIndex, rowIndex);
	            copyTextToClipboard(cell.content);
	            return 1;
	        }
	        var cells = this.getCellsInRange($cell1, $cell2);

	        if (!cells) { return 0; }

	        var rows = cells
	            // get cell objects
	            .map(function (index) {
	              var ref;

	              return (ref = this$1).getCell.apply(ref, index);
	        })
	            // convert to array of rows
	            .reduce(function (acc, curr) {
	                var rowIndex = curr.rowIndex;

	                acc[rowIndex] = acc[rowIndex] || [];
	                acc[rowIndex].push(curr.content);

	                return acc;
	            }, []);

	        var values = rows
	            // join values by tab
	            .map(function (row) { return row.join('\t'); })
	            // join rows by newline
	            .join('\n');

	        copyTextToClipboard(values);

	        // return no of cells copied
	        return rows.reduce(function (total, row) { return total + row.length; }, 0);
	    }

	    pasteContentInCell(data) {
	        var this$1 = this;

	        if (!this.$focusedCell) { return; }

	        var matrix = data
	            .split('\n')
	            .map(function (row) { return row.split('\t'); })
	            .filter(function (row) { return row.length && row.every(function (it) { return it; }); });

	        var ref = $.data(this.$focusedCell);
	        var colIndex = ref.colIndex;
	        var rowIndex = ref.rowIndex;

	        var focusedCell = {
	            colIndex: +colIndex,
	            rowIndex: +rowIndex
	        };

	        matrix.forEach(function (row, i) {
	            var rowIndex = i + focusedCell.rowIndex;
	            row.forEach(function (cell, j) {
	                var colIndex = j + focusedCell.colIndex;
	                this$1.updateCell(colIndex, rowIndex, cell);
	            });
	        });
	    }

	    activateFilter(colIndex) {
	        this.columnmanager.toggleFilter();
	        this.columnmanager.focusFilter(colIndex);

	        if (!this.columnmanager.isFilterShown) {
	            // put focus back on cell
	            this.$focusedCell && this.$focusedCell.focus();
	        }
	    }

	    updateCell(colIndex, rowIndex, value) {
	        var cell = this.datamanager.updateCell(colIndex, rowIndex, {
	            content: value
	        });
	        this.refreshCell(cell);
	    }

	    refreshCell(cell) {
	        var $cell = $(this.selector(cell.colIndex, cell.rowIndex), this.bodyScrollable);
	        $cell.innerHTML = this.getCellContent(cell);
	    }

	    toggleTreeButton(rowIndex, flag) {
	        var colIndex = this.columnmanager.getFirstColumnIndex();
	        var $cell = this.getCell$(colIndex, rowIndex);
	        if ($cell) {
	            $cell.classList[flag ? 'remove' : 'add']('dt-cell--tree-close');
	        }
	    }

	    isStandardCell(colIndex) {
	        // Standard cells are in Sr. No and Checkbox column
	        return colIndex < this.columnmanager.getFirstColumnIndex();
	    }

	    focusCellInDirection(direction) {
	        if (!this.$focusedCell) {
	            return false;
	        } else if (this.$editingCell && ['tab', 'shift+tab'].includes(direction)) {
	            this.deactivateEditing();
	        }

	        var $cell = this.$focusedCell;

	        if (direction === 'left' || direction === 'shift+tab') {
	            $cell = this.getLeftCell$($cell);
	        } else if (direction === 'right' || direction === 'tab') {
	            $cell = this.getRightCell$($cell);
	        } else if (direction === 'up') {
	            $cell = this.getAboveCell$($cell);
	        } else if (direction === 'down') {
	            $cell = this.getBelowCell$($cell);
	        }

	        if (!$cell) {
	            return false;
	        }

	        var ref = $.data($cell);
	        var colIndex = ref.colIndex;
	        var column = this.columnmanager.getColumn(colIndex);

	        if (!column.focusable) {
	            var $prevFocusedCell = this.$focusedCell;
	            this.unfocusCell($prevFocusedCell);
	            this.$focusedCell = $cell;
	            var ret = this.focusCellInDirection(direction);
	            if (!ret) {
	                this.focusCell($prevFocusedCell);
	            }
	            return ret;
	        }

	        this.focusCell($cell);
	        return true;
	    }

	    getCell$(colIndex, rowIndex) {
	        return $(this.selector(colIndex, rowIndex), this.bodyScrollable);
	    }

	    getAboveCell$($cell) {
	        var ref = $.data($cell);
	        var colIndex = ref.colIndex;

	        var $aboveRow = $cell.parentElement.previousElementSibling;
	        while ($aboveRow && $aboveRow.classList.contains('dt-row--hide')) {
	            $aboveRow = $aboveRow.previousElementSibling;
	        }

	        if (!$aboveRow) { return $cell; }
	        return $((".dt-cell--col-" + colIndex), $aboveRow);
	    }

	    getBelowCell$($cell) {
	        var ref = $.data($cell);
	        var colIndex = ref.colIndex;

	        var $belowRow = $cell.parentElement.nextElementSibling;
	        while ($belowRow && $belowRow.classList.contains('dt-row--hide')) {
	            $belowRow = $belowRow.nextElementSibling;
	        }

	        if (!$belowRow) { return $cell; }
	        return $((".dt-cell--col-" + colIndex), $belowRow);
	    }

	    getLeftCell$($cell) {
	        return $cell.previousElementSibling;
	    }

	    getRightCell$($cell) {
	        return $cell.nextElementSibling;
	    }

	    getLeftMostCell$(rowIndex) {
	        return this.getCell$(this.columnmanager.getFirstColumnIndex(), rowIndex);
	    }

	    getRightMostCell$(rowIndex) {
	        return this.getCell$(this.columnmanager.getLastColumnIndex(), rowIndex);
	    }

	    getTopMostCell$(colIndex) {
	        return this.getCell$(colIndex, this.rowmanager.getFirstRowIndex());
	    }

	    getBottomMostCell$(colIndex) {
	        return this.getCell$(colIndex, this.rowmanager.getLastRowIndex());
	    }

	    getCell(colIndex, rowIndex) {
	        return this.instance.datamanager.getCell(colIndex, rowIndex);
	    }

	    getRowHeight() {
	        return $.style($('.dt-row', this.bodyScrollable), 'height');
	    }

	    scrollToCell($cell) {
	        if ($.inViewport($cell, this.bodyScrollable)) { return false; }

	        var ref = $.data($cell);
	        var rowIndex = ref.rowIndex;
	        this.rowmanager.scrollToRow(rowIndex);
	        return false;
	    }

	    getRowCountPerPage() {
	        return Math.ceil(this.instance.getViewportHeight() / this.getRowHeight());
	    }

	    getCellHTML(cell) {
	        var rowIndex = cell.rowIndex;
	        var colIndex = cell.colIndex;
	        var isHeader = cell.isHeader;
	        var isFilter = cell.isFilter;
	        var isTotalRow = cell.isTotalRow;
	        var dataAttr = makeDataAttributeString({
	            rowIndex: rowIndex,
	            colIndex: colIndex,
	            isHeader: isHeader,
	            isFilter: isFilter,
	            isTotalRow: isTotalRow
	        });

	        var row = this.datamanager.getRow(rowIndex);

	        var isBodyCell = !(isHeader || isFilter || isTotalRow);

	        var className = [
	            'dt-cell',
	            'dt-cell--col-' + colIndex,
	            isBodyCell ? ("dt-cell--" + colIndex + "-" + rowIndex) : '',
	            isBodyCell ? 'dt-cell--row-' + rowIndex : '',
	            isHeader ? 'dt-cell--header' : '',
	            isHeader ? ("dt-cell--header-" + colIndex) : '',
	            isFilter ? 'dt-cell--filter' : '',
	            isBodyCell && (row && row.meta.isTreeNodeClose) ? 'dt-cell--tree-close' : ''
	        ].join(' ');

	        return ("\n            <div class=\"" + className + "\" " + dataAttr + " tabindex=\"0\">\n                " + (this.getCellContent(cell)) + "\n            </div>\n        ");
	    }

	    getCellContent(cell) {
	        var isHeader = cell.isHeader;
	        var isFilter = cell.isFilter;
	        var colIndex = cell.colIndex;

	        var editable = !isHeader && cell.editable !== false;
	        var editCellHTML = editable ? this.getEditCellHTML(colIndex) : '';

	        var sortable = isHeader && cell.sortable !== false;
	        var sortIndicator = sortable ?
	            ("<span class=\"sort-indicator\">\n                " + (this.options.sortIndicator[cell.sortOrder]) + "\n            </span>") :
	            '';

	        var resizable = isHeader && cell.resizable !== false;
	        var resizeColumn = resizable ? '<span class="dt-cell__resize-handle"></span>' : '';

	        var hasDropdown = isHeader && cell.dropdown !== false;
	        var dropdown = hasDropdown ? this.columnmanager.getDropdownHTML() : '';

	        var customFormatter = cell.format || (cell.column && cell.column.format) || null;

	        var contentHTML;
	        if (isHeader || isFilter || !customFormatter) {
	            contentHTML = cell.content;
	        } else {
	            var row = this.datamanager.getRow(cell.rowIndex);
	            var data = this.datamanager.getData(cell.rowIndex);
	            contentHTML = customFormatter(cell.content, row, cell.column, data);
	        }

	        cell.html = contentHTML;

	        if (this.options.treeView && !(isHeader || isFilter) && cell.indent !== undefined) {
	            var nextRow = this.datamanager.getRow(cell.rowIndex + 1);
	            var addToggle = nextRow && nextRow.meta.indent > cell.indent;
	            var leftPadding = 20;
	            var unit = 'px';

	            // Add toggle and indent in the first column
	            var firstColumnIndex = this.datamanager.getColumnIndexById('_rowIndex') + 1;
	            if (firstColumnIndex === cell.colIndex) {
	                var padding = ((cell.indent || 0)) * leftPadding;
	                var toggleHTML = addToggle ?
	                    ("<span class=\"dt-tree-node__toggle\" style=\"left: " + (padding - leftPadding) + unit + "\">\n                        <span class=\"icon-open\">" + (icons.chevronDown) + "</span>\n                        <span class=\"icon-close\">" + (icons.chevronRight) + "</span>\n                    </span>") : '';
	                contentHTML = "<span class=\"dt-tree-node\" style=\"padding-left: " + padding + unit + "\">\n                    " + toggleHTML + "\n                    <span>" + contentHTML + "</span>\n                </span>";
	            }
	        }

	        var className = [
	            'dt-cell__content',
	            isHeader ? ("dt-cell__content--header-" + colIndex) : ("dt-cell__content--col-" + colIndex)
	        ].join(' ');

	        return ("\n            <div class=\"" + className + "\">\n                " + contentHTML + "\n                " + sortIndicator + "\n                " + resizeColumn + "\n                " + dropdown + "\n            </div>\n            " + editCellHTML + "\n        ");
	    }

	    getEditCellHTML(colIndex) {
	        return ("<div class=\"dt-cell__edit dt-cell__edit--col-" + colIndex + "\"></div>");
	    }

	    selector(colIndex, rowIndex) {
	        return (".dt-cell--" + colIndex + "-" + rowIndex);
	    }
	}

	class ColumnManager {
	    constructor(instance) {
	        this.instance = instance;

	        linkProperties(this, this.instance, [
	            'options',
	            'fireEvent',
	            'header',
	            'datamanager',
	            'cellmanager',
	            'style',
	            'wrapper',
	            'rowmanager',
	            'bodyScrollable',
	            'bodyRenderer'
	        ]);

	        this.bindEvents();
	    }

	    renderHeader() {
	        this.header.innerHTML = '<div></div>';
	        this.refreshHeader();
	    }

	    refreshHeader() {
	        var columns = this.datamanager.getColumns();

	        // refresh html
	        $('div', this.header).innerHTML = this.getHeaderHTML(columns);

	        this.$filterRow = $('.dt-row-filter', this.header);
	        if (this.$filterRow) {
	            $.style(this.$filterRow, { display: 'none' });
	        }
	        // reset columnMap
	        this.$columnMap = [];
	        this.bindMoveColumn();
	    }

	    getHeaderHTML(columns) {
	        var html = this.rowmanager.getRowHTML(columns, {
	            isHeader: 1
	        });
	        if (this.options.inlineFilters) {
	            html += this.rowmanager.getRowHTML(columns, {
	                isFilter: 1
	            });
	        }
	        return html;
	    }

	    bindEvents() {
	        this.bindDropdown();
	        this.bindResizeColumn();
	        this.bindPerfectColumnWidth();
	        this.bindFilter();
	    }

	    bindDropdown() {
	        var this$1 = this;

	        var toggleClass = '.dt-dropdown__toggle';
	        var dropdownClass = '.dt-dropdown__list';

	        // attach the dropdown list to container
	        this.instance.dropdownContainer.innerHTML = this.getDropdownListHTML();
	        this.$dropdownList = this.instance.dropdownContainer.firstElementChild;

	        $.on(this.header, 'click', toggleClass, function (e) {
	            this$1.openDropdown(e);
	        });

	        var deactivateDropdownOnBodyClick = function (e) {
	            var selector = [
	                toggleClass, toggleClass + ' *',
	                dropdownClass, dropdownClass + ' *'
	            ].join(',');
	            if (e.target.matches(selector)) { return; }
	            deactivateDropdown();
	        };
	        $.on(document.body, 'click', deactivateDropdownOnBodyClick);
	        document.addEventListener('scroll', deactivateDropdown, true);

	        this.instance.on('onDestroy', function () {
	            $.off(document.body, 'click', deactivateDropdownOnBodyClick);
	            $.off(document, 'scroll', deactivateDropdown);
	        });

	        $.on(this.$dropdownList, 'click', '.dt-dropdown__list-item', function (e, $item) {
	            if (!this$1._dropdownActiveColIndex) { return; }
	            var dropdownItems = this$1.options.headerDropdown;
	            var ref = $.data($item);
	            var index = ref.index;
	            var colIndex = this$1._dropdownActiveColIndex;
	            var callback = dropdownItems[index].action;

	            callback && callback.call(this$1.instance, this$1.getColumn(colIndex));
	            this$1.hideDropdown();
	        });

	        var _this = this;
	        function deactivateDropdown(e) {
	            _this.hideDropdown();
	        }

	        this.hideDropdown();
	    }

	    openDropdown(e) {
	        if (!this._dropdownWidth) {
	            $.style(this.$dropdownList, { display: '' });
	            this._dropdownWidth = $.style(this.$dropdownList, 'width');
	        }
	        $.style(this.$dropdownList, {
	            display: '',
	            left: (e.clientX - this._dropdownWidth + 4) + 'px',
	            top: (e.clientY + 4) + 'px'
	        });
	        var $cell = $.closest('.dt-cell', e.target);
	        var ref = $.data($cell);
	        var colIndex = ref.colIndex;
	        this._dropdownActiveColIndex = colIndex;
	    }

	    hideDropdown() {
	        $.style(this.$dropdownList, {
	            display: 'none'
	        });
	        this._dropdownActiveColIndex = null;
	    }

	    bindResizeColumn() {
	        var this$1 = this;

	        var isDragging = false;
	        var $resizingCell, startWidth, startX;

	        $.on(this.header, 'mousedown', '.dt-cell .dt-cell__resize-handle', function (e, $handle) {
	            document.body.classList.add('dt-resize');
	            var $cell = $handle.parentNode.parentNode;
	            $resizingCell = $cell;
	            var ref = $.data($resizingCell);
	            var colIndex = ref.colIndex;
	            var col = this$1.getColumn(colIndex);

	            if (col && col.resizable === false) {
	                return;
	            }

	            isDragging = true;
	            startWidth = $.style($('.dt-cell__content', $resizingCell), 'width');
	            startX = e.pageX;
	        });

	        var onMouseup = function (e) {
	            document.body.classList.remove('dt-resize');
	            if (!$resizingCell) { return; }
	            isDragging = false;

	            var ref = $.data($resizingCell);
	            var colIndex = ref.colIndex;
	            this$1.setColumnWidth(colIndex);
	            this$1.style.setBodyStyle();
	            $resizingCell = null;
	        };
	        $.on(document.body, 'mouseup', onMouseup);
	        this.instance.on('onDestroy', function () {
	            $.off(document.body, 'mouseup', onMouseup);
	        });

	        var onMouseMove = function (e) {
	            if (!isDragging) { return; }
	            var finalWidth = startWidth + (e.pageX - startX);
	            var ref = $.data($resizingCell);
	            var colIndex = ref.colIndex;

	            var columnMinWidth = this$1.options.minimumColumnWidth;
	            if (columnMinWidth > finalWidth) {
	                // don't resize past 30 pixels
	                return;
	            }
	            this$1.datamanager.updateColumn(colIndex, {
	                width: finalWidth
	            });
	            this$1.setColumnHeaderWidth(colIndex);
	        };
	        $.on(document.body, 'mousemove', onMouseMove);
	        this.instance.on('onDestroy', function () {
	            $.off(document.body, 'mousemove', onMouseMove);
	        });
	    }

	    bindPerfectColumnWidth() {
	        var this$1 = this;

	        $.on(this.header, 'dblclick', '.dt-cell .dt-cell__resize-handle', function (e, $handle) {
	            var $cell = $handle.parentNode.parentNode;
	            var ref = $.data($cell);
	            var colIndex = ref.colIndex;

	            var longestCell = this$1.bodyRenderer.visibleRows
	                .map(function (d) { return d[colIndex]; })
	                .reduce(function (acc, curr) { return acc.content.length > curr.content.length ? acc : curr; });

	            var $longestCellHTML = this$1.cellmanager.getCellHTML(longestCell);
	            var $div = document.createElement('div');
	            $div.innerHTML = $longestCellHTML;
	            var cellText = $div.querySelector('.dt-cell__content').textContent;

	            var ref$1 = $.getStyle(this$1.bodyScrollable.querySelector('.dt-cell__content'));
	            var borderLeftWidth = ref$1.borderLeftWidth;
	            var borderRightWidth = ref$1.borderRightWidth;
	            var paddingLeft = ref$1.paddingLeft;
	            var paddingRight = ref$1.paddingRight;

	            var padding = [borderLeftWidth, borderRightWidth, paddingLeft, paddingRight]
	                .map(parseFloat)
	                .reduce(function (sum, val) { return sum + val; });

	            var width = $.measureTextWidth(cellText) + padding;
	            this$1.datamanager.updateColumn(colIndex, { width: width });
	            this$1.setColumnHeaderWidth(colIndex);
	            this$1.setColumnWidth(colIndex);
	        });
	    }

	    bindMoveColumn() {
	        var this$1 = this;

	        if (this.options.disableReorderColumn) { return; }

	        var $parent = $('.dt-row', this.header);

	        this.sortable = Sortable.create($parent, {
	            onEnd: function (e) {
	                var oldIndex = e.oldIndex;
	                var newIndex = e.newIndex;
	                var $draggedCell = e.item;
	                var ref = $.data($draggedCell);
	                var colIndex = ref.colIndex;
	                if (+colIndex === newIndex) { return; }

	                this$1.switchColumn(oldIndex, newIndex);
	            },
	            preventOnFilter: false,
	            filter: '.dt-cell__resize-handle, .dt-dropdown',
	            chosenClass: 'dt-cell--dragging',
	            animation: 150
	        });
	    }

	    sortColumn(colIndex, nextSortOrder) {
	        var this$1 = this;

	        this.instance.freeze();
	        this.sortRows(colIndex, nextSortOrder)
	            .then(function () {
	                this$1.refreshHeader();
	                return this$1.rowmanager.refreshRows();
	            })
	            .then(function () { return this$1.instance.unfreeze(); })
	            .then(function () {
	                this$1.fireEvent('onSortColumn', this$1.getColumn(colIndex));
	            });
	    }

	    removeColumn(colIndex) {
	        var this$1 = this;

	        var removedCol = this.getColumn(colIndex);
	        this.instance.freeze();
	        this.datamanager.removeColumn(colIndex)
	            .then(function () {
	                this$1.refreshHeader();
	                return this$1.rowmanager.refreshRows();
	            })
	            .then(function () { return this$1.instance.unfreeze(); })
	            .then(function () {
	                this$1.fireEvent('onRemoveColumn', removedCol);
	            });
	    }

	    switchColumn(oldIndex, newIndex) {
	        var this$1 = this;

	        this.instance.freeze();
	        this.datamanager.switchColumn(oldIndex, newIndex)
	            .then(function () {
	                this$1.refreshHeader();
	                return this$1.rowmanager.refreshRows();
	            })
	            .then(function () {
	                this$1.setColumnWidth(oldIndex);
	                this$1.setColumnWidth(newIndex);
	                this$1.instance.unfreeze();
	            })
	            .then(function () {
	                this$1.fireEvent('onSwitchColumn',
	                    this$1.getColumn(oldIndex), this$1.getColumn(newIndex)
	                );
	            });
	    }

	    toggleFilter(flag) {
	        if (!this.options.inlineFilters) { return; }

	        var showFilter;
	        if (flag === undefined) {
	            showFilter = !this.isFilterShown;
	        } else {
	            showFilter = flag;
	        }

	        if (showFilter) {
	            $.style(this.$filterRow, { display: '' });
	        } else {
	            $.style(this.$filterRow, { display: 'none' });
	        }

	        this.isFilterShown = showFilter;
	        this.style.setBodyStyle();
	    }

	    focusFilter(colIndex) {
	        if (!this.isFilterShown) { return; }

	        var $filterInput = $((".dt-cell--col-" + colIndex + " .dt-filter"), this.$filterRow);
	        $filterInput.focus();
	    }

	    bindFilter() {
	        var this$1 = this;

	        if (!this.options.inlineFilters) { return; }
	        var handler = function (e) {
	            this$1.applyFilter(this$1.getAppliedFilters());
	        };
	        $.on(this.header, 'keydown', '.dt-filter', debounce$1(handler, 300));
	    }

	    applyFilter(filters) {
	        var this$1 = this;

	        this.datamanager.filterRows(filters)
	            .then(function (ref) {
	                var rowsToShow = ref.rowsToShow;

	                this$1.rowmanager.showRows(rowsToShow);
	            });
	    }

	    getAppliedFilters() {
	        var filters = {};
	        $.each('.dt-filter', this.header).map(function (input) {
	            var value = input.value;
	            if (value) {
	                filters[input.dataset.colIndex] = value;
	            }
	        });
	        return filters;
	    }

	    applyDefaultSortOrder() {
	        // sort rows if any 1 column has a default sortOrder set
	        var columnsToSort = this.getColumns().filter(function (col) { return col.sortOrder !== 'none'; });

	        if (columnsToSort.length === 1) {
	            var column = columnsToSort[0];
	            this.sortColumn(column.colIndex, column.sortOrder);
	        }
	    }

	    sortRows(colIndex, sortOrder) {
	        return this.datamanager.sortRows(colIndex, sortOrder);
	    }

	    getColumn(colIndex) {
	        return this.datamanager.getColumn(colIndex);
	    }

	    getColumns() {
	        return this.datamanager.getColumns();
	    }

	    setColumnWidth(colIndex, width) {
	        colIndex = +colIndex;

	        var columnWidth = width || this.getColumn(colIndex).width;

	        var selector = [
	            (".dt-cell__content--col-" + colIndex),
	            (".dt-cell__edit--col-" + colIndex)
	        ].join(', ');

	        var styles = {
	            width: columnWidth + 'px'
	        };

	        this.style.setStyle(selector, styles);
	    }

	    setColumnHeaderWidth(colIndex) {
	        colIndex = +colIndex;
	        this.$columnMap = this.$columnMap || [];
	        var selector = ".dt-cell__content--header-" + colIndex;
	        var ref = this.getColumn(colIndex);
	        var width = ref.width;

	        var $column = this.$columnMap[colIndex];
	        if (!$column) {
	            $column = this.header.querySelector(selector);
	            this.$columnMap[colIndex] = $column;
	        }

	        $column.style.width = width + 'px';
	    }

	    getColumnMinWidth(colIndex) {
	        colIndex = +colIndex;
	        return this.getColumn(colIndex).minWidth || 24;
	    }

	    getFirstColumnIndex() {
	        return this.datamanager.getColumnIndexById('_rowIndex') + 1;
	    }

	    getHeaderCell$(colIndex) {
	        return $((".dt-cell--header-" + colIndex), this.header);
	    }

	    getLastColumnIndex() {
	        return this.datamanager.getColumnCount() - 1;
	    }

	    getDropdownHTML() {
	        var ref = this.options;
	        var dropdownButton = ref.dropdownButton;

	        return ("\n            <div class=\"dt-dropdown\">\n                <div class=\"dt-dropdown__toggle\">" + dropdownButton + "</div>\n            </div>\n      ");
	    }

	    getDropdownListHTML() {
	        var ref = this.options;
	        var dropdownItems = ref.headerDropdown;

	        return ("\n            <div class=\"dt-dropdown__list\">\n            " + (dropdownItems.map(function (d, i) { return ("\n                <div class=\"dt-dropdown__list-item\" data-index=\"" + i + "\">" + (d.label) + "</div>\n            "); }).join('')) + "\n            </div>\n        ");
	    }
	}

	class RowManager {
	    constructor(instance) {
	        this.instance = instance;
	        linkProperties(this, this.instance, [
	            'options',
	            'fireEvent',
	            'wrapper',
	            'bodyScrollable',
	            'bodyRenderer',
	            'style'
	        ]);

	        this.bindEvents();
	        this.refreshRows = nextTick(this.refreshRows, this);
	    }

	    get datamanager() {
	        return this.instance.datamanager;
	    }

	    get cellmanager() {
	        return this.instance.cellmanager;
	    }

	    bindEvents() {
	        this.bindCheckbox();
	    }

	    bindCheckbox() {
	        var this$1 = this;

	        if (!this.options.checkboxColumn) { return; }

	        // map of checked rows
	        this.checkMap = [];

	        $.on(this.wrapper, 'click', '.dt-cell--col-0 [type="checkbox"]', function (e, $checkbox) {
	            var $cell = $checkbox.closest('.dt-cell');
	            var ref = $.data($cell);
	            var rowIndex = ref.rowIndex;
	            var isHeader = ref.isHeader;
	            var checked = $checkbox.checked;

	            if (isHeader) {
	                this$1.checkAll(checked);
	            } else {
	                this$1.checkRow(rowIndex, checked);
	            }
	        });
	    }

	    refreshRows() {
	        this.instance.renderBody();
	        this.instance.setDimensions();
	    }

	    refreshRow(row, rowIndex) {
	        var this$1 = this;

	        var _row = this.datamanager.updateRow(row, rowIndex);

	        _row.forEach(function (cell) {
	            this$1.cellmanager.refreshCell(cell);
	        });
	    }

	    getCheckedRows() {
	        if (!this.checkMap) {
	            return [];
	        }

	        var out = [];
	        for (var rowIndex in this.checkMap) {
	            var checked = this.checkMap[rowIndex];
	            if (checked === 1) {
	                out.push(rowIndex);
	            }
	        }

	        return out;
	    }

	    highlightCheckedRows() {
	        var this$1 = this;

	        this.getCheckedRows()
	            .map(function (rowIndex) { return this$1.checkRow(rowIndex, true); });
	    }

	    checkRow(rowIndex, toggle) {
	        var value = toggle ? 1 : 0;
	        var selector = function (rowIndex) { return (".dt-cell--0-" + rowIndex + " [type=\"checkbox\"]"); };
	        // update internal map
	        this.checkMap[rowIndex] = value;
	        // set checkbox value explicitly
	        $.each(selector(rowIndex), this.bodyScrollable)
	            .map(function (input) {
	                input.checked = toggle;
	            });
	        // highlight row
	        this.highlightRow(rowIndex, toggle);
	        this.showCheckStatus();
	        this.fireEvent('onCheckRow', this.datamanager.getRow(rowIndex));
	    }

	    checkAll(toggle) {
	        var value = toggle ? 1 : 0;

	        // update internal map
	        if (toggle) {
	            this.checkMap = Array.from(Array(this.getTotalRows())).map(function (c) { return value; });
	        } else {
	            this.checkMap = [];
	        }
	        // set checkbox value
	        $.each('.dt-cell--col-0 [type="checkbox"]', this.bodyScrollable)
	            .map(function (input) {
	                input.checked = toggle;
	            });
	        // highlight all
	        this.highlightAll(toggle);
	        this.showCheckStatus();
	        this.fireEvent('onCheckRow');
	    }

	    showCheckStatus() {
	        if (!this.options.checkedRowStatus) { return; }
	        var checkedRows = this.getCheckedRows();
	        var count = checkedRows.length;
	        if (count > 0) {
	            this.bodyRenderer.showToastMessage((count + " row" + (count > 1 ? 's' : '') + " selected"));
	        } else {
	            this.bodyRenderer.clearToastMessage();
	        }
	    }

	    highlightRow(rowIndex, toggle) {
	        if ( toggle === void 0 ) toggle = true;

	        var $row = this.getRow$(rowIndex);
	        if (!$row) { return; }

	        if (!toggle && this.bodyScrollable.classList.contains('dt-scrollable--highlight-all')) {
	            $row.classList.add('dt-row--unhighlight');
	            return;
	        }

	        if (toggle && $row.classList.contains('dt-row--unhighlight')) {
	            $row.classList.remove('dt-row--unhighlight');
	        }

	        this._highlightedRows = this._highlightedRows || {};

	        if (toggle) {
	            $row.classList.add('dt-row--highlight');
	            this._highlightedRows[rowIndex] = $row;
	        } else {
	            $row.classList.remove('dt-row--highlight');
	            delete this._highlightedRows[rowIndex];
	        }
	    }

	    highlightAll(toggle) {
	        if ( toggle === void 0 ) toggle = true;

	        if (toggle) {
	            this.bodyScrollable.classList.add('dt-scrollable--highlight-all');
	        } else {
	            this.bodyScrollable.classList.remove('dt-scrollable--highlight-all');
	            for (var rowIndex in this._highlightedRows) {
	                var $row = this._highlightedRows[rowIndex];
	                $row.classList.remove('dt-row--highlight');
	            }
	            this._highlightedRows = {};
	        }
	    }

	    showRows(rowIndices) {
	        var this$1 = this;

	        rowIndices = ensureArray(rowIndices);
	        var rows = rowIndices.map(function (rowIndex) { return this$1.datamanager.getRow(rowIndex); });
	        this.bodyRenderer.renderRows(rows);
	    }

	    showAllRows() {
	        var rowIndices = this.datamanager.getAllRowIndices();
	        this.showRows(rowIndices);
	    }

	    getChildrenToShowForNode(rowIndex) {
	        var row = this.datamanager.getRow(rowIndex);
	        row.meta.isTreeNodeClose = false;

	        return this.datamanager.getImmediateChildren(rowIndex);
	    }

	    openSingleNode(rowIndex) {
	        var childrenToShow = this.getChildrenToShowForNode(rowIndex);
	        var visibleRowIndices = this.bodyRenderer.visibleRowIndices;
	        var rowsToShow = uniq$1(childrenToShow.concat( visibleRowIndices)).sort(numberSortAsc);

	        this.showRows(rowsToShow);
	    }

	    getChildrenToHideForNode(rowIndex) {
	        var this$1 = this;

	        var row = this.datamanager.getRow(rowIndex);
	        row.meta.isTreeNodeClose = true;

	        var rowsToHide = this.datamanager.getChildren(rowIndex);
	        rowsToHide.forEach(function (rowIndex) {
	            var row = this$1.datamanager.getRow(rowIndex);
	            if (!row.meta.isLeaf) {
	                row.meta.isTreeNodeClose = true;
	            }
	        });

	        return rowsToHide;
	    }

	    closeSingleNode(rowIndex) {
	        var rowsToHide = this.getChildrenToHideForNode(rowIndex);
	        var visibleRows = this.bodyRenderer.visibleRowIndices;
	        var rowsToShow = visibleRows
	            .filter(function (rowIndex) { return !rowsToHide.includes(rowIndex); })
	            .sort(numberSortAsc);

	        this.showRows(rowsToShow);
	    }

	    expandAllNodes() {
	        var this$1 = this;

	        var rows = this.datamanager.getRows();
	        var rootNodes = rows.filter(function (row) { return !row.meta.isLeaf; });

	        var childrenToShow = rootNodes.map(function (row) { return this$1.getChildrenToShowForNode(row.meta.rowIndex); }).flat();
	        var visibleRowIndices = this.bodyRenderer.visibleRowIndices;
	        var rowsToShow = uniq$1(childrenToShow.concat( visibleRowIndices)).sort(numberSortAsc);

	        this.showRows(rowsToShow);
	    }

	    collapseAllNodes() {
	        var this$1 = this;

	        var rows = this.datamanager.getRows();
	        var rootNodes = rows.filter(function (row) { return row.meta.indent === 0; });

	        var rowsToHide = rootNodes.map(function (row) { return this$1.getChildrenToHideForNode(row.meta.rowIndex); }).flat();
	        var visibleRows = this.bodyRenderer.visibleRowIndices;
	        var rowsToShow = visibleRows
	            .filter(function (rowIndex) { return !rowsToHide.includes(rowIndex); })
	            .sort(numberSortAsc);

	        this.showRows(rowsToShow);
	    }

	    setTreeDepth(depth) {
	        var rows = this.datamanager.getRows();

	        var rowsToOpen = rows.filter(function (row) { return row.meta.indent < depth; });
	        var rowsToClose = rows.filter(function (row) { return row.meta.indent >= depth; });
	        var rowsToHide = rowsToClose.filter(function (row) { return row.meta.indent > depth; });

	        rowsToClose.forEach(function (row) {
	            if (!row.meta.isLeaf) {
	                row.meta.isTreeNodeClose = true;
	            }
	        });
	        rowsToOpen.forEach(function (row) {
	            if (!row.meta.isLeaf) {
	                row.meta.isTreeNodeClose = false;
	            }
	        });

	        var rowsToShow = rows
	            .filter(function (row) { return !rowsToHide.includes(row); })
	            .map(function (row) { return row.meta.rowIndex; })
	            .sort(numberSortAsc);
	        this.showRows(rowsToShow);
	    }

	    getRow$(rowIndex) {
	        return $(this.selector(rowIndex), this.bodyScrollable);
	    }

	    getTotalRows() {
	        return this.datamanager.getRowCount();
	    }

	    getFirstRowIndex() {
	        return 0;
	    }

	    getLastRowIndex() {
	        return this.datamanager.getRowCount() - 1;
	    }

	    scrollToRow(rowIndex) {
	        rowIndex = +rowIndex;
	        this._lastScrollTo = this._lastScrollTo || 0;
	        var $row = this.getRow$(rowIndex);
	        if ($.inViewport($row, this.bodyScrollable)) { return; }

	        var ref = $row.getBoundingClientRect();
	        var height = ref.height;
	        var ref$1 = this.bodyScrollable.getBoundingClientRect();
	        var top = ref$1.top;
	        var bottom = ref$1.bottom;
	        var rowsInView = Math.floor((bottom - top) / height);

	        var offset = 0;
	        if (rowIndex > this._lastScrollTo) {
	            offset = height * ((rowIndex + 1) - rowsInView);
	        } else {
	            offset = height * ((rowIndex + 1) - 1);
	        }

	        this._lastScrollTo = rowIndex;
	        $.scrollTop(this.bodyScrollable, offset);
	    }

	    getRowHTML(row, props) {
	        var this$1 = this;

	        var dataAttr = makeDataAttributeString(props);
	        var rowIdentifier = props.rowIndex;

	        if (props.isFilter) {
	            row = row.map(function (cell) { return (Object.assign({}, cell, {
	                content: this$1.getFilterInput({
	                    colIndex: cell.colIndex
	                }),
	                isFilter: 1,
	                isHeader: undefined,
	                editable: false
	            })); });

	            rowIdentifier = 'filter';
	        }

	        if (props.isHeader) {
	            rowIdentifier = 'header';
	        }

	        return ("\n            <div class=\"dt-row dt-row-" + rowIdentifier + "\" " + dataAttr + ">\n                " + (row.map(function (cell) { return this$1.cellmanager.getCellHTML(cell); }).join('')) + "\n            </div>\n        ");
	    }

	    getFilterInput(props) {
	        var dataAttr = makeDataAttributeString(props);
	        return ("<input class=\"dt-filter dt-input\" type=\"text\" " + dataAttr + " tabindex=\"1\" />");
	    }

	    selector(rowIndex) {
	        return (".dt-row-" + rowIndex);
	    }
	}

	var hyperlist = createCommonjsModule(function (module, exports) {
	(function(f){{module.exports=f();}})(function(){return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof commonjsRequire&&commonjsRequire;if(!f&&c){ return c(i,!0); }if(u){ return u(i,!0); }var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof commonjsRequire&&commonjsRequire,i=0;i<t.length;i++){ o(t[i]); }return o}return r})()({1:[function(_dereq_,module,exports){

	// Default configuration.

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps); } if (staticProps) { defineProperties(Constructor, staticProps); } return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var defaultConfig = {
	  width: '100%',
	  height: '100%'

	  // Check for valid number.
	};var isNumber = function isNumber(input) {
	  return Number(input) === Number(input);
	};

	// Add a class to an element.
	var addClass = 'classList' in document.documentElement ? function (element, className) {
	  element.classList.add(className);
	} : function (element, className) {
	  var oldClass = element.getAttribute('class') || '';
	  element.setAttribute('class', oldClass + ' ' + className);
	};

	/**
	 * Creates a HyperList instance that virtually scrolls very large amounts of
	 * data effortlessly.
	 */

	var HyperList = function () {
	  _createClass(HyperList, null, [{
	    key: 'create',
	    value: function create(element, userProvidedConfig) {
	      return new HyperList(element, userProvidedConfig);
	    }

	    /**
	     * Merge given css style on an element
	     * @param {DOMElement} element
	     * @param {Object} style
	     */

	  }, {
	    key: 'mergeStyle',
	    value: function mergeStyle(element, style) {
	      for (var i in style) {
	        if (element.style[i] !== style[i]) {
	          element.style[i] = style[i];
	        }
	      }
	    }
	  }, {
	    key: 'getMaxBrowserHeight',
	    value: function getMaxBrowserHeight() {
	      // Create two elements, the wrapper is `1px` tall and is transparent and
	      // positioned at the top of the page. Inside that is an element that gets
	      // set to 1 billion pixels. Then reads the max height the browser can
	      // calculate.
	      var wrapper = document.createElement('div');
	      var fixture = document.createElement('div');

	      // As said above, these values get set to put the fixture elements into the
	      // right visual state.
	      HyperList.mergeStyle(wrapper, { position: 'absolute', height: '1px', opacity: 0 });
	      HyperList.mergeStyle(fixture, { height: '1e7px' });

	      // Add the fixture into the wrapper element.
	      wrapper.appendChild(fixture);

	      // Apply to the page, the values won't kick in unless this is attached.
	      document.body.appendChild(wrapper);

	      // Get the maximum element height in pixels.
	      var maxElementHeight = fixture.offsetHeight;

	      // Remove the element immediately after reading the value.
	      document.body.removeChild(wrapper);

	      return maxElementHeight;
	    }
	  }]);

	  function HyperList(element, userProvidedConfig) {
	    var _this = this;

	    _classCallCheck(this, HyperList);

	    this._config = {};
	    this._lastRepaint = null;
	    this._maxElementHeight = HyperList.getMaxBrowserHeight();

	    this.refresh(element, userProvidedConfig);

	    var config = this._config;

	    // Create internal render loop.
	    var render = function render() {
	      var scrollTop = _this._getScrollPosition();
	      var lastRepaint = _this._lastRepaint;

	      _this._renderAnimationFrame = window.requestAnimationFrame(render);

	      if (scrollTop === lastRepaint) {
	        return;
	      }

	      var diff = lastRepaint ? scrollTop - lastRepaint : 0;
	      if (!lastRepaint || diff < 0 || diff > _this._averageHeight) {
	        var rendered = _this._renderChunk();

	        _this._lastRepaint = scrollTop;

	        if (rendered !== false && typeof config.afterRender === 'function') {
	          config.afterRender();
	        }
	      }
	    };

	    render();
	  }

	  _createClass(HyperList, [{
	    key: 'destroy',
	    value: function destroy() {
	      window.cancelAnimationFrame(this._renderAnimationFrame);
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh(element, userProvidedConfig) {
	      var _scrollerStyle;

	      Object.assign(this._config, defaultConfig, userProvidedConfig);

	      if (!element || element.nodeType !== 1) {
	        throw new Error('HyperList requires a valid DOM Node container');
	      }

	      this._element = element;

	      var config = this._config;

	      var scroller = this._scroller || config.scroller || document.createElement(config.scrollerTagName || 'tr');

	      // Default configuration option `useFragment` to `true`.
	      if (typeof config.useFragment !== 'boolean') {
	        this._config.useFragment = true;
	      }

	      if (!config.generate) {
	        throw new Error('Missing required `generate` function');
	      }

	      if (!isNumber(config.total)) {
	        throw new Error('Invalid required `total` value, expected number');
	      }

	      if (!Array.isArray(config.itemHeight) && !isNumber(config.itemHeight)) {
	        throw new Error('\n        Invalid required `itemHeight` value, expected number or array\n      '.trim());
	      } else if (isNumber(config.itemHeight)) {
	        this._itemHeights = Array(config.total).fill(config.itemHeight);
	      } else {
	        this._itemHeights = config.itemHeight;
	      }

	      // Width and height should be coerced to string representations. Either in
	      // `%` or `px`.
	      Object.keys(defaultConfig).filter(function (prop) {
	        return prop in config;
	      }).forEach(function (prop) {
	        var value = config[prop];
	        var isValueNumber = isNumber(value);

	        if (value && typeof value !== 'string' && typeof value !== 'number') {
	          var msg = 'Invalid optional `' + prop + '`, expected string or number';
	          throw new Error(msg);
	        } else if (isValueNumber) {
	          config[prop] = value + 'px';
	        }
	      });

	      var isHoriz = Boolean(config.horizontal);
	      var value = config[isHoriz ? 'width' : 'height'];

	      if (value) {
	        var isValueNumber = isNumber(value);
	        var isValuePercent = isValueNumber ? false : value.slice(-1) === '%';
	        // Compute the containerHeight as number
	        var numberValue = isValueNumber ? value : parseInt(value.replace(/px|%/, ''), 10);
	        var innerSize = window[isHoriz ? 'innerWidth' : 'innerHeight'];

	        if (isValuePercent) {
	          this._containerSize = innerSize * numberValue / 100;
	        } else {
	          this._containerSize = isNumber(value) ? value : numberValue;
	        }
	      }

	      var scrollContainer = config.scrollContainer;
	      var scrollerHeight = config.itemHeight * config.total;
	      var maxElementHeight = this._maxElementHeight;

	      if (scrollerHeight > maxElementHeight) {
	        console.warn(['HyperList: The maximum element height', maxElementHeight + 'px has', 'been exceeded; please reduce your item height.'].join(' '));
	      }

	      // Decorate the container element with styles that will match
	      // the user supplied configuration.
	      var elementStyle = {
	        width: '' + config.width,
	        height: scrollContainer ? scrollerHeight + 'px' : '' + config.height,
	        overflow: scrollContainer ? 'none' : 'auto',
	        position: 'relative'
	      };

	      HyperList.mergeStyle(element, elementStyle);

	      if (scrollContainer) {
	        HyperList.mergeStyle(config.scrollContainer, { overflow: 'auto' });
	      }

	      var scrollerStyle = (_scrollerStyle = {
	        opacity: '0',
	        position: 'absolute'
	      }, _defineProperty(_scrollerStyle, isHoriz ? 'height' : 'width', '1px'), _defineProperty(_scrollerStyle, isHoriz ? 'width' : 'height', scrollerHeight + 'px'), _scrollerStyle);

	      HyperList.mergeStyle(scroller, scrollerStyle);

	      // Only append the scroller element once.
	      if (!this._scroller) {
	        element.appendChild(scroller);
	      }

	      var padding = this._computeScrollPadding();
	      this._scrollPaddingBottom = padding.bottom;
	      this._scrollPaddingTop = padding.top;

	      // Set the scroller instance.
	      this._scroller = scroller;
	      this._scrollHeight = this._computeScrollHeight();

	      // Reuse the item positions if refreshed, otherwise set to empty array.
	      this._itemPositions = this._itemPositions || Array(config.total).fill(0);

	      // Each index in the array should represent the position in the DOM.
	      this._computePositions(0);

	      // Render after refreshing. Force render if we're calling refresh manually.
	      this._renderChunk(this._lastRepaint !== null);

	      if (typeof config.afterRender === 'function') {
	        config.afterRender();
	      }
	    }
	  }, {
	    key: '_getRow',
	    value: function _getRow(i) {
	      var config = this._config;
	      var item = config.generate(i);
	      var height = item.height;

	      if (height !== undefined && isNumber(height)) {
	        item = item.element;

	        // The height isn't the same as predicted, compute positions again
	        if (height !== this._itemHeights[i]) {
	          this._itemHeights[i] = height;
	          this._computePositions(i);
	          this._scrollHeight = this._computeScrollHeight(i);
	        }
	      } else {
	        height = this._itemHeights[i];
	      }

	      if (!item || item.nodeType !== 1) {
	        throw new Error('Generator did not return a DOM Node for index: ' + i);
	      }

	      addClass(item, config.rowClassName || 'vrow');

	      var top = this._itemPositions[i] + this._scrollPaddingTop;

	      HyperList.mergeStyle(item, _defineProperty({
	        position: 'absolute'
	      }, config.horizontal ? 'left' : 'top', top + 'px'));

	      return item;
	    }
	  }, {
	    key: '_getScrollPosition',
	    value: function _getScrollPosition() {
	      var config = this._config;

	      if (typeof config.overrideScrollPosition === 'function') {
	        return config.overrideScrollPosition();
	      }

	      return this._element[config.horizontal ? 'scrollLeft' : 'scrollTop'];
	    }
	  }, {
	    key: '_renderChunk',
	    value: function _renderChunk(force) {
	      var config = this._config;
	      var element = this._element;
	      var scrollTop = this._getScrollPosition();
	      var total = config.total;

	      var from = config.reverse ? this._getReverseFrom(scrollTop) : this._getFrom(scrollTop) - 1;

	      if (from < 0 || from - this._screenItemsLen < 0) {
	        from = 0;
	      }

	      if (!force && this._lastFrom === from) {
	        return false;
	      }

	      this._lastFrom = from;

	      var to = from + this._cachedItemsLen;

	      if (to > total || to + this._cachedItemsLen > total) {
	        to = total;
	      }

	      // Append all the new rows in a document fragment that we will later append
	      // to the parent node
	      var fragment = config.useFragment ? document.createDocumentFragment() : []
	      // Sometimes you'll pass fake elements to this tool and Fragments require
	      // real elements.


	      // The element that forces the container to scroll.
	      ;var scroller = this._scroller;

	      // Keep the scroller in the list of children.
	      fragment[config.useFragment ? 'appendChild' : 'push'](scroller);

	      for (var i = from; i < to; i++) {
	        var row = this._getRow(i);

	        fragment[config.useFragment ? 'appendChild' : 'push'](row);
	      }

	      if (config.applyPatch) {
	        return config.applyPatch(element, fragment);
	      }

	      element.innerHTML = '';
	      element.appendChild(fragment);
	    }
	  }, {
	    key: '_computePositions',
	    value: function _computePositions() {
	      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

	      var config = this._config;
	      var total = config.total;
	      var reverse = config.reverse;

	      if (from < 1 && !reverse) {
	        from = 1;
	      }

	      for (var i = from; i < total; i++) {
	        if (reverse) {
	          if (i === 0) {
	            this._itemPositions[0] = this._scrollHeight - this._itemHeights[0];
	          } else {
	            this._itemPositions[i] = this._itemPositions[i - 1] - this._itemHeights[i];
	          }
	        } else {
	          this._itemPositions[i] = this._itemHeights[i - 1] + this._itemPositions[i - 1];
	        }
	      }
	    }
	  }, {
	    key: '_computeScrollHeight',
	    value: function _computeScrollHeight() {
	      var _HyperList$mergeStyle2,
	          _this2 = this;

	      var config = this._config;
	      var isHoriz = Boolean(config.horizontal);
	      var total = config.total;
	      var scrollHeight = this._itemHeights.reduce(function (a, b) {
	        return a + b;
	      }, 0) + this._scrollPaddingBottom + this._scrollPaddingTop;

	      HyperList.mergeStyle(this._scroller, (_HyperList$mergeStyle2 = {
	        opacity: 0,
	        position: 'absolute',
	        top: '0px'
	      }, _defineProperty(_HyperList$mergeStyle2, isHoriz ? 'height' : 'width', '1px'), _defineProperty(_HyperList$mergeStyle2, isHoriz ? 'width' : 'height', scrollHeight + 'px'), _HyperList$mergeStyle2));

	      // Calculate the height median
	      var sortedItemHeights = this._itemHeights.slice(0).sort(function (a, b) {
	        return a - b;
	      });
	      var middle = Math.floor(total / 2);
	      var averageHeight = total % 2 === 0 ? (sortedItemHeights[middle] + sortedItemHeights[middle - 1]) / 2 : sortedItemHeights[middle];

	      var clientProp = isHoriz ? 'clientWidth' : 'clientHeight';
	      var element = config.scrollContainer ? config.scrollContainer : this._element;
	      var containerHeight = element[clientProp] ? element[clientProp] : this._containerSize;
	      this._screenItemsLen = Math.ceil(containerHeight / averageHeight);
	      this._containerSize = containerHeight;

	      // Cache 3 times the number of items that fit in the container viewport.
	      this._cachedItemsLen = Math.max(this._cachedItemsLen || 0, this._screenItemsLen * 3);
	      this._averageHeight = averageHeight;

	      if (config.reverse) {
	        window.requestAnimationFrame(function () {
	          if (isHoriz) {
	            _this2._element.scrollLeft = scrollHeight;
	          } else {
	            _this2._element.scrollTop = scrollHeight;
	          }
	        });
	      }

	      return scrollHeight;
	    }
	  }, {
	    key: '_computeScrollPadding',
	    value: function _computeScrollPadding() {
	      var config = this._config;
	      var isHoriz = Boolean(config.horizontal);
	      var isReverse = config.reverse;
	      var styles = window.getComputedStyle(this._element);

	      var padding = function padding(location) {
	        var cssValue = styles.getPropertyValue('padding-' + location);
	        return parseInt(cssValue, 10) || 0;
	      };

	      if (isHoriz && isReverse) {
	        return {
	          bottom: padding('left'),
	          top: padding('right')
	        };
	      } else if (isHoriz) {
	        return {
	          bottom: padding('right'),
	          top: padding('left')
	        };
	      } else if (isReverse) {
	        return {
	          bottom: padding('top'),
	          top: padding('bottom')
	        };
	      } else {
	        return {
	          bottom: padding('bottom'),
	          top: padding('top')
	        };
	      }
	    }
	  }, {
	    key: '_getFrom',
	    value: function _getFrom(scrollTop) {
	      var i = 0;

	      while (this._itemPositions[i] < scrollTop) {
	        i++;
	      }

	      return i;
	    }
	  }, {
	    key: '_getReverseFrom',
	    value: function _getReverseFrom(scrollTop) {
	      var i = this._config.total - 1;

	      while (i > 0 && this._itemPositions[i] < scrollTop + this._containerSize) {
	        i--;
	      }

	      return i;
	    }
	  }]);

	  return HyperList;
	}();

	exports.default = HyperList;
	module.exports = exports['default'];

	},{}]},{},[1])(1)
	});
	});

	var HyperList = unwrapExports(hyperlist);

	class BodyRenderer {
	    constructor(instance) {
	        this.instance = instance;
	        this.options = instance.options;
	        this.datamanager = instance.datamanager;
	        this.rowmanager = instance.rowmanager;
	        this.cellmanager = instance.cellmanager;
	        this.bodyScrollable = instance.bodyScrollable;
	        this.footer = this.instance.footer;
	        this.log = instance.log;
	    }

	    renderRows(rows) {
	        var this$1 = this;

	        this.visibleRows = rows;
	        this.visibleRowIndices = rows.map(function (row) { return row.meta.rowIndex; });

	        if (rows.length === 0) {
	            this.bodyScrollable.innerHTML = this.getNoDataHTML();
	            return;
	        }

	        var rowViewOrder = this.datamanager.rowViewOrder.map(function (index) {
	            if (this$1.visibleRowIndices.includes(index)) {
	                return index;
	            }
	            return null;
	        }).filter(function (index) { return index !== null; });

	        var computedStyle = getComputedStyle(this.bodyScrollable);

	        var config = {
	            width: computedStyle.width,
	            height: computedStyle.height,
	            itemHeight: this.options.cellHeight,
	            total: rows.length,
	            generate: function (index) {
	                var el = document.createElement('div');
	                var rowIndex = rowViewOrder[index];
	                var row = this$1.datamanager.getRow(rowIndex);
	                var rowHTML = this$1.rowmanager.getRowHTML(row, row.meta);
	                el.innerHTML = rowHTML;
	                return el.children[0];
	            },
	            afterRender: function () {
	                this$1.restoreState();
	            }
	        };

	        if (!this.hyperlist) {
	            this.hyperlist = new HyperList(this.bodyScrollable, config);
	        } else {
	            this.hyperlist.refresh(this.bodyScrollable, config);
	        }

	        this.renderFooter();
	    }

	    render() {
	        var rows = this.datamanager.getRowsForView();
	        this.renderRows(rows);
	        // setDimensions requires atleast 1 row to exist in dom
	        this.instance.setDimensions();
	    }

	    renderFooter() {
	        if (!this.options.showTotalRow) { return; }

	        var totalRow = this.getTotalRow();
	        var html = this.rowmanager.getRowHTML(totalRow, { isTotalRow: 1, rowIndex: 'totalRow' });

	        this.footer.innerHTML = html;
	    }

	    getTotalRow() {
	        var this$1 = this;

	        var columns = this.datamanager.getColumns();
	        var totalRowTemplate = columns.map(function (col) {
	            var content = null;
	            if (['_rowIndex', '_checkbox'].includes(col.id)) {
	                content = '';
	            }
	            return {
	                content: content,
	                isTotalRow: 1,
	                colIndex: col.colIndex,
	                column: col
	            };
	        });

	        var totalRow = totalRowTemplate.map(function (cell, i) {
	            if (cell.content === '') { return cell; }

	            if (this$1.options.hooks.columnTotal) {
	                var columnValues = this$1.visibleRows.map(function (row) { return row[i].content; });
	                var result = this$1.options.hooks.columnTotal.call(this$1.instance, columnValues, cell);
	                if (result != null) {
	                    cell.content = result;
	                    return cell;
	                }
	            }

	            cell.content = this$1.visibleRows.reduce(function (acc, prevRow) {
	                var prevCell = prevRow[i];
	                if (typeof prevCell.content === 'number') {
	                    if (acc == null) { acc = 0; }
	                    return acc + prevCell.content;
	                }
	                return acc;
	            }, cell.content);

	            return cell;
	        });

	        return totalRow;
	    }

	    restoreState() {
	        this.rowmanager.highlightCheckedRows();
	        this.cellmanager.selectAreaOnClusterChanged();
	        this.cellmanager.focusCellOnClusterChanged();
	    }

	    showToastMessage(message, hideAfter) {
	        var this$1 = this;

	        this.instance.toastMessage.innerHTML = this.getToastMessageHTML(message);

	        if (hideAfter) {
	            setTimeout(function () {
	                this$1.clearToastMessage();
	            }, hideAfter * 1000);
	        }
	    }

	    clearToastMessage() {
	        this.instance.toastMessage.innerHTML = '';
	    }

	    getNoDataHTML() {
	        return ("<div class=\"dt-scrollable__no-data\">" + (this.options.noDataMessage) + "</div>");
	    }

	    getToastMessageHTML(message) {
	        return ("<span class=\"dt-toast__message\">" + message + "</span>");
	    }
	}

	class Style {
	    constructor(instance) {
	        this.instance = instance;

	        linkProperties(this, this.instance, [
	            'options', 'datamanager', 'columnmanager',
	            'header', 'footer', 'bodyScrollable', 'datatableWrapper',
	            'getColumn', 'bodyRenderer'
	        ]);

	        this.scopeClass = 'dt-instance-' + instance.constructor.instances;
	        instance.datatableWrapper.classList.add(this.scopeClass);

	        var styleEl = document.createElement('style');
	        instance.wrapper.insertBefore(styleEl, instance.datatableWrapper);
	        this.styleEl = styleEl;

	        this.bindResizeWindow();
	        this.bindScrollHeader();
	    }

	    get stylesheet() {
	        return this.styleEl.sheet;
	    }

	    bindResizeWindow() {
	        this.onWindowResize = this.onWindowResize.bind(this);
	        this.onWindowResize = throttle$1(this.onWindowResize, 300);

	        if (this.options.layout === 'fluid') {
	            $.on(window, 'resize', this.onWindowResize);
	        }
	    }

	    bindScrollHeader() {
	        var this$1 = this;

	        this._settingHeaderPosition = false;

	        $.on(this.bodyScrollable, 'scroll', function (e) {
	            if (this$1._settingHeaderPosition) { return; }

	            this$1._settingHeaderPosition = true;

	            requestAnimationFrame(function () {
	                var ref = e.target;
	                var scrollLeft = ref.scrollLeft;
	                var scrollWidth = ref.scrollWidth;
	                var clientWidth = ref.clientWidth;

	                var left = this$1.options.direction === 'rtl' ? scrollWidth - clientWidth - scrollLeft : -scrollLeft;

	                $.style(this$1.header, {
	                    transform: ("translateX(" + left + "px)")
	                });
	                $.style(this$1.footer, {
	                    transform: ("translateX(" + left + "px)")
	                });
	                this$1._settingHeaderPosition = false;
	            });
	        });
	    }

	    onWindowResize() {
	        this.distributeRemainingWidth();
	        this.refreshColumnWidth();
	        this.setBodyStyle();
	    }

	    destroy() {
	        this.styleEl.remove();
	        $.off(window, 'resize', this.onWindowResize);
	    }

	    setStyle(selector, styleObject) {
	        var this$1 = this;

	        if (selector.includes(',')) {
	            selector.split(',')
	                .map(function (s) { return s.trim(); })
	                .forEach(function (selector) {
	                    this$1.setStyle(selector, styleObject);
	                });
	            return;
	        }

	        selector = selector.trim();
	        if (!selector) { return; }

	        this._styleRulesMap = this._styleRulesMap || {};
	        var prefixedSelector = this._getPrefixedSelector(selector);

	        if (this._styleRulesMap[prefixedSelector]) {
	            this.removeStyle(selector);

	            // merge with old styleobject
	            styleObject = Object.assign({}, this._styleRulesMap[prefixedSelector], styleObject);
	        }

	        var styleString = this._getRuleString(styleObject);
	        var ruleString = prefixedSelector + " { " + styleString + " }";

	        this._styleRulesMap[prefixedSelector] = styleObject;
	        this.stylesheet.insertRule(ruleString);
	    }

	    removeStyle(selector) {
	        var this$1 = this;

	        if (selector.includes(',')) {
	            selector.split(',')
	                .map(function (s) { return s.trim(); })
	                .forEach(function (selector) {
	                    this$1.removeStyle(selector);
	                });
	            return;
	        }

	        selector = selector.trim();
	        if (!selector) { return; }

	        // find and remove
	        var prefixedSelector = this._getPrefixedSelector(selector);
	        var index = Array.from(this.stylesheet.cssRules)
	            .findIndex(function (rule) { return rule.selectorText === prefixedSelector; });

	        if (index === -1) { return; }
	        this.stylesheet.deleteRule(index);
	    }

	    _getPrefixedSelector(selector) {
	        return ("." + (this.scopeClass) + " " + selector);
	    }

	    _getRuleString(styleObject) {
	        return Object.keys(styleObject)
	            .map(function (prop) {
	                var dashed = prop;
	                if (!prop.includes('-')) {
	                    dashed = camelCaseToDash(prop);
	                }
	                return (dashed + ":" + (styleObject[prop]) + ";");
	            })
	            .join('');
	    }

	    setDimensions() {
	        this.setCellHeight();
	        this.setupMinWidth();
	        this.setupNaturalColumnWidth();
	        this.setupColumnWidth();
	        this.distributeRemainingWidth();
	        this.setColumnStyle();
	        this.setBodyStyle();
	    }

	    setCellHeight() {
	        this.setStyle('.dt-cell', {
	            height: this.options.cellHeight + 'px'
	        });
	    }

	    setupMinWidth() {
	        var this$1 = this;

	        $.each('.dt-cell--header', this.header).map(function (col) {
	            var ref = $.data(col);
	            var colIndex = ref.colIndex;
	            var column = this$1.getColumn(colIndex);

	            if (!column.minWidth) {
	                var width = $.style($('.dt-cell__content', col), 'width');
	                // only set this once
	                column.minWidth = width;
	            }
	        });
	    }

	    setupNaturalColumnWidth() {
	        var this$1 = this;

	        if (!$('.dt-row')) { return; }

	        $.each('.dt-row-header .dt-cell', this.header).map(function ($headerCell) {
	            var ref = $.data($headerCell);
	            var colIndex = ref.colIndex;
	            var column = this$1.datamanager.getColumn(colIndex);
	            var width = $.style($('.dt-cell__content', $headerCell), 'width');
	            if (typeof width === 'number' && width >= this$1.options.minimumColumnWidth) {
	                column.naturalWidth = width;
	            } else {
	                column.naturalWidth = this$1.options.minimumColumnWidth;
	            }
	        });

	        // set initial width as naturally calculated by table's first row
	        $.each('.dt-row-0 .dt-cell', this.bodyScrollable).map(function ($cell) {
	            var ref = $.data($cell);
	            var colIndex = ref.colIndex;
	            var column = this$1.datamanager.getColumn(colIndex);

	            var naturalWidth = $.style($('.dt-cell__content', $cell), 'width');

	            if (column.id === '_rowIndex') {
	                naturalWidth = this$1.getRowIndexColumnWidth();
	                column.width = naturalWidth;
	            }

	            if (typeof naturalWidth === 'number' && naturalWidth >= column.naturalWidth) {
	                column.naturalWidth = naturalWidth;
	            } else {
	                column.naturalWidth = column.naturalWidth;
	            }
	        });
	    }

	    setupColumnWidth() {
	        var this$1 = this;

	        if (this.options.layout === 'ratio') {
	            var totalWidth = $.style(this.datatableWrapper, 'width');

	            if (this.options.serialNoColumn) {
	                var rowIndexColumn = this.datamanager.getColumnById('_rowIndex');
	                totalWidth = totalWidth - rowIndexColumn.width - 1;
	            }

	            if (this.options.checkboxColumn) {
	                var rowIndexColumn$1 = this.datamanager.getColumnById('_checkbox');
	                totalWidth = totalWidth - rowIndexColumn$1.width - 1;
	            }

	            var totalParts = this.datamanager.getColumns()
	                .map(function (column) {
	                    if (column.id === '_rowIndex' || column.id === '_checkbox') {
	                        return 0;
	                    }
	                    if (!column.width) {
	                        column.width = 1;
	                    }
	                    column.ratioWidth = parseInt(column.width, 10);
	                    return column.ratioWidth;
	                })
	                .reduce(function (a, c) { return a + c; });

	            var onePart = totalWidth / totalParts;

	            this.datamanager.getColumns()
	                .map(function (column) {
	                    if (column.id === '_rowIndex' || column.id === '_checkbox') { return; }
	                    column.width = Math.floor(onePart * column.ratioWidth) - 1;
	                });
	        } else {
	            this.datamanager.getColumns()
	                .map(function (column) {
	                    if (!column.width) {
	                        column.width = column.naturalWidth;
	                    }
	                    if (column.width < this$1.options.minimumColumnWidth) {
	                        column.width = this$1.options.minimumColumnWidth;
	                    }
	                });
	        }
	    }

	    distributeRemainingWidth() {
	        var this$1 = this;

	        if (this.options.layout !== 'fluid') { return; }

	        var wrapperWidth = $.style(this.instance.datatableWrapper, 'width');
	        var firstRow = $('.dt-row', this.bodyScrollable);
	        var firstRowWidth = wrapperWidth;
	        if (!firstRow) {
	            var headerRow = $('.dt-row', this.instance.header);
	            var cellWidths = Array.from(headerRow.children)
	                .map(function (cell) { return cell.offsetWidth; });
	            firstRowWidth = cellWidths.reduce(function (sum, a) { return sum + a; }, 0);
	        } else {
	            firstRowWidth = $.style(firstRow, 'width');
	        }
	        var resizableColumns = this.datamanager.getColumns().filter(function (col) { return col.resizable; });
	        var deltaWidth = (wrapperWidth - firstRowWidth) / resizableColumns.length;

	        resizableColumns.map(function (col) {
	            var width = $.style(this$1.getColumnHeaderElement(col.colIndex), 'width');
	            var finalWidth = Math.floor(width + deltaWidth) - 2;

	            this$1.datamanager.updateColumn(col.colIndex, {
	                width: finalWidth
	            });
	        });
	    }

	    setColumnStyle() {
	        var this$1 = this;

	        // align columns
	        this.datamanager.getColumns()
	            .map(function (column) {
	                // alignment
	                if (!column.align) {
	                    column.align = 'left';
	                }
	                if (!['left', 'center', 'right'].includes(column.align)) {
	                    column.align = 'left';
	                }
	                this$1.setStyle((".dt-cell--col-" + (column.colIndex)), {
	                    'text-align': column.align
	                });

	                // width
	                this$1.columnmanager.setColumnHeaderWidth(column.colIndex);
	                this$1.columnmanager.setColumnWidth(column.colIndex);
	            });
	    }

	    refreshColumnWidth() {
	        var this$1 = this;

	        this.datamanager.getColumns()
	            .map(function (column) {
	                this$1.columnmanager.setColumnHeaderWidth(column.colIndex);
	                this$1.columnmanager.setColumnWidth(column.colIndex);
	            });
	    }

	    setBodyStyle() {
	        var bodyWidth = $.style(this.datatableWrapper, 'width');
	        var firstRow = $('.dt-row', this.bodyScrollable);
	        if (!firstRow) { return; }
	        var rowWidth = $.style(firstRow, 'width');

	        var width = bodyWidth > rowWidth ? rowWidth : bodyWidth;
	        $.style(this.bodyScrollable, {
	            width: width + 'px'
	        });

	        // remove the body height, so that it resets to it's original
	        $.removeStyle(this.bodyScrollable, 'height');

	        // when there are less rows than the container
	        // adapt the container height
	        var bodyHeight = $.getStyle(this.bodyScrollable, 'height');
	        var scrollHeight = (this.bodyRenderer.hyperlist || {})._scrollHeight || Infinity;
	        var hasHorizontalOverflow = $.hasHorizontalOverflow(this.bodyScrollable);

	        var height;

	        if (scrollHeight < bodyHeight) {
	            height = scrollHeight;

	            // account for scrollbar size when
	            // there is horizontal overflow
	            if (hasHorizontalOverflow) {
	                height += $.scrollbarSize();
	            }

	            $.style(this.bodyScrollable, {
	                height: height + 'px'
	            });
	        }

	        var verticalOverflow = this.bodyScrollable.scrollHeight - this.bodyScrollable.offsetHeight;
	        if (verticalOverflow < $.scrollbarSize()) {
	            // if verticalOverflow is less than scrollbar size
	            // then most likely scrollbar is causing the scroll
	            // which is not needed
	            $.style(this.bodyScrollable, {
	                overflowY: 'hidden'
	            });
	        }

	        if (this.options.layout === 'fluid') {
	            $.style(this.bodyScrollable, {
	                overflowX: 'hidden'
	            });
	        }
	    }

	    getColumnHeaderElement(colIndex) {
	        colIndex = +colIndex;
	        if (colIndex < 0) { return null; }
	        return $((".dt-cell--col-" + colIndex), this.header);
	    }

	    getRowIndexColumnWidth() {
	        var rowCount = this.datamanager.getRowCount();
	        var padding = 22;
	        return $.measureTextWidth(rowCount + '') + padding;
	    }
	}

	var KEYCODES = {
	    13: 'enter',
	    91: 'meta',
	    16: 'shift',
	    17: 'ctrl',
	    18: 'alt',
	    37: 'left',
	    38: 'up',
	    39: 'right',
	    40: 'down',
	    9: 'tab',
	    27: 'esc',
	    67: 'c',
	    70: 'f',
	    86: 'v'
	};

	class Keyboard {
	    constructor(element) {
	        this.listeners = {};
	        $.on(element, 'keydown', this.handler.bind(this));
	    }

	    handler(e) {
	        var key = KEYCODES[e.keyCode];

	        if (e.shiftKey && key !== 'shift') {
	            key = 'shift+' + key;
	        }

	        if ((e.ctrlKey && key !== 'ctrl') || (e.metaKey && key !== 'meta')) {
	            key = 'ctrl+' + key;
	        }

	        var listeners = this.listeners[key];

	        if (listeners && listeners.length > 0) {
	            for (var i = 0, list = listeners; i < list.length; i += 1) {
	                var listener = list[i];

	              var preventBubbling = listener(e);
	                if (preventBubbling === undefined || preventBubbling === true) {
	                    e.preventDefault();
	                }
	            }
	        }
	    }

	    on(key, listener) {
	        var this$1 = this;

	        var keys = key.split(',').map(function (k) { return k.trim(); });

	        keys.map(function (key) {
	            this$1.listeners[key] = this$1.listeners[key] || [];
	            this$1.listeners[key].push(listener);
	        });
	    }
	}

	function filterRows(rows, filters) {
	    var filteredRowIndices = [];

	    if (Object.keys(filters).length === 0) {
	        return rows.map(function (row) { return row.meta.rowIndex; });
	    }

	    var loop = function ( colIndex ) {
	        var keyword = filters[colIndex];

	        var filteredRows = filteredRowIndices.length ?
	            filteredRowIndices.map(function (i) { return rows[i]; }) :
	            rows;

	        var cells = filteredRows.map(function (row) { return row[colIndex]; });

	        var filter = guessFilter(keyword);
	        var filterMethod = getFilterMethod(filter);

	        if (filterMethod) {
	            filteredRowIndices = filterMethod(filter.text, cells);
	        } else {
	            filteredRowIndices = cells.map(function (cell) { return cell.rowIndex; });
	        }
	    };

	    for (var colIndex in filters) loop( colIndex );

	    return filteredRowIndices;
	}
	function getFilterMethod(filter) {
	    var stringCompareValue = function (cell) { return String(stripHTML(cell.html || '') || cell.content || '').toLowerCase(); };

	    var numberCompareValue = function (cell) { return parseFloat(cell.content); };

	    var getCompareValues = function (cell, keyword) {
	        if (cell.column.compareValue) {
	            var compareValues = cell.column.compareValue(cell, keyword);
	            if (compareValues && Array.isArray(compareValues)) { return compareValues; }
	        }

	        // check if it can be converted to number
	        var float = numberCompareValue(cell);
	        if (!isNaN(float)) {
	            return [float, keyword];
	        }

	        return [stringCompareValue(cell), keyword];
	    };

	    var filterMethodMap = {
	        contains: function contains(keyword, cells) {
	            return cells
	                .filter(function (cell) {
	                    var hay = stringCompareValue(cell);
	                    var needle = (keyword || '').toLowerCase();
	                    return !needle || hay.includes(needle);
	                })
	                .map(function (cell) { return cell.rowIndex; });
	        },

	        greaterThan: function greaterThan(keyword, cells) {
	            return cells
	                .filter(function (cell) {
	                    var ref = getCompareValues(cell, keyword);
	                    var compareValue = ref[0];
	                    var keywordValue = ref[1];
	                    return compareValue > keywordValue;
	                })
	                .map(function (cell) { return cell.rowIndex; });
	        },

	        lessThan: function lessThan(keyword, cells) {
	            return cells
	                .filter(function (cell) {
	                    var ref = getCompareValues(cell, keyword);
	                    var compareValue = ref[0];
	                    var keywordValue = ref[1];
	                    return compareValue < keywordValue;
	                })
	                .map(function (cell) { return cell.rowIndex; });
	        },

	        equals: function equals(keyword, cells) {
	            return cells
	                .filter(function (cell) {
	                    var value = parseFloat(cell.content);
	                    return value === keyword;
	                })
	                .map(function (cell) { return cell.rowIndex; });
	        },

	        notEquals: function notEquals(keyword, cells) {
	            return cells
	                .filter(function (cell) {
	                    var value = parseFloat(cell.content);
	                    return value !== keyword;
	                })
	                .map(function (cell) { return cell.rowIndex; });
	        },

	        range: function range(rangeValues, cells) {
	            return cells
	                .filter(function (cell) {
	                    var values1 = getCompareValues(cell, rangeValues[0]);
	                    var values2 = getCompareValues(cell, rangeValues[1]);
	                    var value = values1[0];
	                    return value >= values1[1] && value <= values2[1];
	                })
	                .map(function (cell) { return cell.rowIndex; });
	        },

	        containsNumber: function containsNumber(keyword, cells) {
	            return cells
	                .filter(function (cell) {
	                    var number = parseFloat(keyword, 10);
	                    var string = keyword;
	                    var hayNumber = numberCompareValue(cell);
	                    var hayString = stringCompareValue(cell);

	                    return number === hayNumber || hayString.includes(string);
	                })
	                .map(function (cell) { return cell.rowIndex; });
	        }
	    };

	    return filterMethodMap[filter.type];
	}

	function guessFilter(keyword) {
	    if ( keyword === void 0 ) keyword = '';

	    if (keyword.length === 0) { return {}; }

	    var compareString = keyword;

	    if (['>', '<', '='].includes(compareString[0])) {
	        compareString = keyword.slice(1);
	    } else if (compareString.startsWith('!=')) {
	        compareString = keyword.slice(2);
	    }

	    if (keyword.startsWith('>')) {
	        if (compareString) {
	            return {
	                type: 'greaterThan',
	                text: compareString.trim()
	            };
	        }
	    }

	    if (keyword.startsWith('<')) {
	        if (compareString) {
	            return {
	                type: 'lessThan',
	                text: compareString.trim()
	            };
	        }
	    }

	    if (keyword.startsWith('=')) {
	        if (isNumber(compareString)) {
	            return {
	                type: 'equals',
	                text: Number(keyword.slice(1).trim())
	            };
	        }
	    }

	    if (isNumber(compareString)) {
	        return {
	            type: 'containsNumber',
	            text: compareString
	        };
	    }

	    if (keyword.startsWith('!=')) {
	        if (isNumber(compareString)) {
	            return {
	                type: 'notEquals',
	                text: Number(keyword.slice(2).trim())
	            };
	        }
	    }

	    if (keyword.split(':').length === 2) {
	        compareString = keyword.split(':');
	        return {
	            type: 'range',
	            text: compareString.map(function (v) { return v.trim(); })
	        };
	    }

	    return {
	        type: 'contains',
	        text: compareString.toLowerCase()
	    };
	}

	var DEFAULT_OPTIONS = {
	    columns: [],
	    data: [],
	    dropdownButton: icons.chevronDown,
	    headerDropdown: [
	        {
	            label: 'Sort Ascending',
	            action: function (column) {
	                this.sortColumn(column.colIndex, 'asc');
	            }
	        },
	        {
	            label: 'Sort Descending',
	            action: function (column) {
	                this.sortColumn(column.colIndex, 'desc');
	            }
	        },
	        {
	            label: 'Reset sorting',
	            action: function (column) {
	                this.sortColumn(column.colIndex, 'none');
	            }
	        },
	        {
	            label: 'Remove column',
	            action: function (column) {
	                this.removeColumn(column.colIndex);
	            }
	        }
	    ],
	    events: {
	        onRemoveColumn: function onRemoveColumn(column) {},
	        onSwitchColumn: function onSwitchColumn(column1, column2) {},
	        onSortColumn: function onSortColumn(column) {},
	        onCheckRow: function onCheckRow(row) {},
	        onDestroy: function onDestroy() {}
	    },
	    hooks: {
	        columnTotal: null
	    },
	    sortIndicator: {
	        asc: '↑',
	        desc: '↓',
	        none: ''
	    },
	    overrideComponents: {
	        // ColumnManager: CustomColumnManager
	    },
	    filterRows: filterRows,
	    freezeMessage: '',
	    getEditor: null,
	    serialNoColumn: true,
	    checkboxColumn: false,
	    clusterize: true,
	    logs: false,
	    layout: 'fixed', // fixed, fluid, ratio
	    noDataMessage: 'No Data',
	    cellHeight: 40,
	    minimumColumnWidth: 30,
	    inlineFilters: false,
	    treeView: false,
	    checkedRowStatus: true,
	    dynamicRowHeight: false,
	    pasteFromClipboard: false,
	    showTotalRow: false,
	    direction: 'ltr',
	    disableReorderColumn: false
	};

	var defaultComponents = {
	    DataManager: DataManager,
	    CellManager: CellManager,
	    ColumnManager: ColumnManager,
	    RowManager: RowManager,
	    BodyRenderer: BodyRenderer,
	    Style: Style,
	    Keyboard: Keyboard
	};

	class DataTable {
	    constructor(wrapper, options) {
	        DataTable.instances++;

	        if (typeof wrapper === 'string') {
	            // css selector
	            wrapper = document.querySelector(wrapper);
	        }
	        this.wrapper = wrapper;
	        if (!(this.wrapper instanceof HTMLElement)) {
	            throw new Error('Invalid argument given for `wrapper`');
	        }

	        this.buildOptions(options);
	        this.prepare();
	        this.initializeComponents();

	        if (this.options.data) {
	            this.refresh();
	            this.columnmanager.applyDefaultSortOrder();
	        }
	    }

	    buildOptions(options) {
	        this.options = this.options || {};

	        this.options = Object.assign(
	            {}, DEFAULT_OPTIONS,
	            this.options || {}, options
	        );

	        options.headerDropdown = options.headerDropdown || [];
	        this.options.headerDropdown = DEFAULT_OPTIONS.headerDropdown.concat( options.headerDropdown
	        );

	        // custom user events
	        this.events = Object.assign(
	            {}, DEFAULT_OPTIONS.events,
	            this.options.events || {},
	            options.events || {}
	        );
	        this.fireEvent = this.fireEvent.bind(this);
	    }

	    prepare() {
	        this.prepareDom();
	        this.unfreeze();
	    }

	    initializeComponents() {
	        var components = Object.assign({}, defaultComponents, this.options.overrideComponents);
	        var Style$$1 = components.Style;
	        var Keyboard$$1 = components.Keyboard;
	        var DataManager$$1 = components.DataManager;
	        var RowManager$$1 = components.RowManager;
	        var ColumnManager$$1 = components.ColumnManager;
	        var CellManager$$1 = components.CellManager;
	        var BodyRenderer$$1 = components.BodyRenderer;

	        this.style = new Style$$1(this);
	        this.keyboard = new Keyboard$$1(this.wrapper);
	        this.datamanager = new DataManager$$1(this.options);
	        this.rowmanager = new RowManager$$1(this);
	        this.columnmanager = new ColumnManager$$1(this);
	        this.cellmanager = new CellManager$$1(this);
	        this.bodyRenderer = new BodyRenderer$$1(this);
	    }

	    prepareDom() {
	        this.wrapper.innerHTML = "\n            <div class=\"datatable\" dir=\"" + (this.options.direction) + "\">\n                <div class=\"dt-header\"></div>\n                <div class=\"dt-scrollable\"></div>\n                <div class=\"dt-footer\"></div>\n                <div class=\"dt-freeze\">\n                    <span class=\"dt-freeze__message\">\n                        " + (this.options.freezeMessage) + "\n                    </span>\n                </div>\n                <div class=\"dt-toast\"></div>\n                <div class=\"dt-dropdown-container\"></div>\n                <textarea class=\"dt-paste-target\"></textarea>\n            </div>\n        ";

	        this.datatableWrapper = $('.datatable', this.wrapper);
	        this.header = $('.dt-header', this.wrapper);
	        this.footer = $('.dt-footer', this.wrapper);
	        this.bodyScrollable = $('.dt-scrollable', this.wrapper);
	        this.freezeContainer = $('.dt-freeze', this.wrapper);
	        this.toastMessage = $('.dt-toast', this.wrapper);
	        this.pasteTarget = $('.dt-paste-target', this.wrapper);
	        this.dropdownContainer = $('.dt-dropdown-container', this.wrapper);
	    }

	    refresh(data, columns) {
	        this.datamanager.init(data, columns);
	        this.render();
	        this.setDimensions();
	    }

	    destroy() {
	        this.wrapper.innerHTML = '';
	        this.style.destroy();
	        this.fireEvent('onDestroy');
	    }

	    appendRows(rows) {
	        this.datamanager.appendRows(rows);
	        this.rowmanager.refreshRows();
	    }

	    refreshRow(row, rowIndex) {
	        this.rowmanager.refreshRow(row, rowIndex);
	    }

	    render() {
	        this.renderHeader();
	        this.renderBody();
	    }

	    renderHeader() {
	        this.columnmanager.renderHeader();
	    }

	    renderBody() {
	        this.bodyRenderer.render();
	    }

	    setDimensions() {
	        this.style.setDimensions();
	    }

	    showToastMessage(message, hideAfter) {
	        this.bodyRenderer.showToastMessage(message, hideAfter);
	    }

	    clearToastMessage() {
	        this.bodyRenderer.clearToastMessage();
	    }

	    getColumn(colIndex) {
	        return this.datamanager.getColumn(colIndex);
	    }

	    getColumns() {
	        return this.datamanager.getColumns();
	    }

	    getRows() {
	        return this.datamanager.getRows();
	    }

	    getCell(colIndex, rowIndex) {
	        return this.datamanager.getCell(colIndex, rowIndex);
	    }

	    getColumnHeaderElement(colIndex) {
	        return this.columnmanager.getColumnHeaderElement(colIndex);
	    }

	    getViewportHeight() {
	        if (!this.viewportHeight) {
	            this.viewportHeight = $.style(this.bodyScrollable, 'height');
	        }

	        return this.viewportHeight;
	    }

	    sortColumn(colIndex, sortOrder) {
	        this.columnmanager.sortColumn(colIndex, sortOrder);
	    }

	    removeColumn(colIndex) {
	        this.columnmanager.removeColumn(colIndex);
	    }

	    scrollToLastColumn() {
	        this.datatableWrapper.scrollLeft = 9999;
	    }

	    freeze() {
	        $.style(this.freezeContainer, {
	            display: ''
	        });
	    }

	    unfreeze() {
	        $.style(this.freezeContainer, {
	            display: 'none'
	        });
	    }

	    updateOptions(options) {
	        this.buildOptions(options);
	    }

	    fireEvent(eventName) {
	        var args = [], len = arguments.length - 1;
	        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	        // fire internalEventHandlers if any
	        // and then user events
	        var handlers = (this._internalEventHandlers[eventName] || []).concat( [this.events[eventName]]
	        ).filter(Boolean);

	        for (var i = 0, list = handlers; i < list.length; i += 1) {
	            var handler = list[i];

	          handler.apply(this, args);
	        }
	    }

	    on(event, handler) {
	        this._internalEventHandlers = this._internalEventHandlers || {};
	        this._internalEventHandlers[event] = this._internalEventHandlers[event] || [];
	        this._internalEventHandlers[event].push(handler);
	    }

	    log() {
	        if (this.options.logs) {
	            console.log.apply(console, arguments);
	        }
	    }
	}

	DataTable.instances = 0;

	var name = "frappe-datatable";
	var version = "0.0.0-development";
	var description = "A modern datatable library for the web";
	var main = "dist/frappe-datatable.cjs.js";
	var unpkg = "dist/frappe-datatable.min.js";
	var jsdelivr = "dist/frappe-datatable.min.js";
	var scripts = {"start":"yarn run dev","build":"rollup -c && NODE_ENV=production rollup -c","dev":"rollup -c -w","cy:server":"http-server -p 8989","cy:open":"cypress open","cy:run":"cypress run","test":"start-server-and-test cy:server http://localhost:8989 cy:run","test-local":"start-server-and-test cy:server http://localhost:8989 cy:open","travis-deploy-once":"travis-deploy-once","semantic-release":"semantic-release","lint":"eslint src","commit":"npx git-cz"};
	var files = ["dist","src"];
	var devDependencies = {"autoprefixer":"^9.0.0","chai":"3.5.0","cypress":"3.0.1","cz-conventional-changelog":"^2.1.0","deepmerge":"^2.0.1","eslint":"^5.0.1","eslint-config-airbnb":"^16.1.0","eslint-config-airbnb-base":"^12.1.0","eslint-plugin-import":"^2.11.0","http-server":"^0.11.1","mocha":"3.3.0","postcss-custom-properties":"^7.0.0","postcss-nested":"^3.0.0","rollup":"^0.59.4","rollup-plugin-commonjs":"^8.3.0","rollup-plugin-eslint":"^4.0.0","rollup-plugin-json":"^2.3.0","rollup-plugin-node-resolve":"^3.0.3","rollup-plugin-postcss":"^1.2.8","rollup-plugin-uglify-es":"^0.0.1","semantic-release":"^15.6.3","start-server-and-test":"^1.4.1","travis-deploy-once":"^5.0.1"};
	var repository = {"type":"git","url":"https://github.com/frappe/datatable.git"};
	var keywords = ["datatable","data","grid","table"];
	var author = "Faris Ansari";
	var license = "MIT";
	var bugs = {"url":"https://github.com/frappe/datatable/issues"};
	var homepage = "https://frappe.github.io/datatable";
	var dependencies = {"hyperlist":"^1.0.0-beta","lodash":"^4.17.5","sortablejs":"^1.7.0"};
	var config = {"commitizen":{"path":"cz-conventional-changelog"}};
	var packageJson = {
		name: name,
		version: version,
		description: description,
		main: main,
		unpkg: unpkg,
		jsdelivr: jsdelivr,
		scripts: scripts,
		files: files,
		devDependencies: devDependencies,
		repository: repository,
		keywords: keywords,
		author: author,
		license: license,
		bugs: bugs,
		homepage: homepage,
		dependencies: dependencies,
		config: config
	};

	DataTable.__version__ = packageJson.version;

	module.exports = DataTable;
	});

	var DataTable = unwrapExports(frappeDatatable_cjs);

	frappe.DataTable = DataTable;

}());
//# sourceMappingURL=datatable.js.map
