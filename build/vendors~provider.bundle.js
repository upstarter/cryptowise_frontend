(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~provider"],{

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/

/* global define */
(function () {
  'use strict';

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return ExecutionEnvironment;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ "./node_modules/react-modal/lib/components/Modal.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/components/Modal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "./node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";
var isReact16 = _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      parent.removeChild(_this.node);
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({
        defaultStyles: Modal.defaultStyles
      }, props)), _this.node);

      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }

      this.node.className = this.props.portalClassName;
      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);
      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return {
        prevParent: prevParent,
        nextParent: nextParent
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;

      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      } // Stop unnecessary renders if modal is remaining closed


      if (!prevProps.isOpen && !isOpen) return;
      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;
      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }
    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
(0, _reactLifecyclesCompat.polyfill)(Modal);
exports.default = Modal;

/***/ }),

/***/ "./node_modules/react-modal/lib/components/ModalPortal.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal/lib/components/ModalPortal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "./node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "./node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "./node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // so that our CSS is statically analyzable


var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};
var TAB_KEY = 9;
var ESC_KEY = 27;
var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName; // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);
      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName); // Reset aria-hidden attribute if all modals have been removed

      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }
    };

    _this.open = function () {
      _this.beforeOpen();

      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);

        _this.setState({
          beforeClose: false
        });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({
          isOpen: true
        }, function () {
          _this.setState({
            afterOpen: true
          });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen();
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;

      _this.setState({
        beforeClose: true,
        closesAt: closesAt
      }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();

        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }

      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;

      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }

      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }

      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };
    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }

        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      } // Focus only needs to be set once when the modal is being opened


      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.afterClose();
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName; // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);
      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }
    } // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;
      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;
      return this.shouldBeClosed() ? null : _react2.default.createElement("div", {
        ref: this.setOverlayRef,
        className: this.buildClassName("overlay", overlayClassName),
        style: _extends({}, overlayStyles, this.props.style.overlay),
        onClick: this.handleOverlayOnClick,
        onMouseDown: this.handleOverlayOnMouseDown
      }, _react2.default.createElement("div", _extends({
        id: id,
        ref: this.setContentRef,
        style: _extends({}, contentStyles, this.props.style.content),
        className: this.buildClassName("content", className),
        tabIndex: "-1",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContentOnMouseDown,
        onMouseUp: this.handleContentOnMouseUp,
        onClick: this.handleContentOnClick,
        role: this.props.role,
        "aria-label": this.props.contentLabel
      }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
        "data-testid": this.props.testId
      }), this.props.children));
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;

  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }

  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));
    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/classList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/classList.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";
    buffer += "<html /> (" + classes + "):\n";

    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n";
    }

    classes = document.body.className; // eslint-disable-next-line max-len

    buffer += "\n\ndoc.body (" + classes + "):\n";

    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
    }

    buffer += "\n"; // eslint-disable-next-line no-console

    console.log(buffer);
  }
}
/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */


var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }

  poll[className] += 1;
  return className;
};
/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */


var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }

  return className;
};
/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */


var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};
/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */


var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};
/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */


var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */


var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/focusManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/focusManager.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;

    if (!modalElement) {
      return;
    } // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.


    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }

      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}
/* eslint-disable no-console */


function returnFocus() {
  var toFocus = null;

  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }

    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */


function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var EE = _exenv2.default;
var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
var canUseDOM = exports.canUseDOM = EE.canUseDOM;
exports.default = SafeHTMLElement;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/scopeTab.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1]; // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.

  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  var target;

  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  } // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.


  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null; // If we are not in safari desktop, let the browser control
  // the focus

  if (!isSafariDesktop) return;
  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  } // If the tabbable element does not exist,
  // focus head/tail based on shiftKey


  if (typeof tabbable[x] === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();
  tabbable[x].focus();
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/tabbable.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/tabbable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0; // If the node is empty, this is good enough

  if (zeroSize && !element.innerHTML) return true; // Otherwise we need to check some styles

  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;

  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }

  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(/*! ./components/Modal */ "./node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvY29tcG9uZW50cy9Nb2RhbFBvcnRhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvYXJpYUFwcEhpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9jbGFzc0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2ZvY3VzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zY29wZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvdGFiYmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJjYW5Vc2VET00iLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJFeGVjdXRpb25FbnZpcm9ubWVudCIsImNhblVzZVdvcmtlcnMiLCJXb3JrZXIiLCJjYW5Vc2VFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImNhblVzZVZpZXdwb3J0Iiwic2NyZWVuIiwiZGVmaW5lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJib2R5T3BlbkNsYXNzTmFtZSIsInBvcnRhbENsYXNzTmFtZSIsInVuZGVmaW5lZCIsIl9leHRlbmRzIiwiYXNzaWduIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9yZWFjdCIsInJlcXVpcmUiLCJfcmVhY3QyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9yZWFjdERvbSIsIl9yZWFjdERvbTIiLCJfcHJvcFR5cGVzIiwiX3Byb3BUeXBlczIiLCJfTW9kYWxQb3J0YWwiLCJfTW9kYWxQb3J0YWwyIiwiX2FyaWFBcHBIaWRlciIsImFyaWFBcHBIaWRlciIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NhZmVIVE1MRWxlbWVudCIsIl9zYWZlSFRNTEVsZW1lbnQyIiwiX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJuZXdPYmoiLCJkZWZhdWx0IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJpc1JlYWN0MTYiLCJjcmVhdGVQb3J0YWwiLCJnZXRDcmVhdGVQb3J0YWwiLCJ1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lciIsImdldFBhcmVudEVsZW1lbnQiLCJwYXJlbnRTZWxlY3RvciIsIk1vZGFsIiwiX0NvbXBvbmVudCIsIl9yZWYiLCJfdGVtcCIsIl90aGlzIiwiX3JldCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiZ2V0UHJvdG90eXBlT2YiLCJhcHBseSIsImNvbmNhdCIsInJlbW92ZVBvcnRhbCIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJub2RlIiwicGFyZW50IiwicmVtb3ZlQ2hpbGQiLCJwb3J0YWxSZWYiLCJyZWYiLCJwb3J0YWwiLCJyZW5kZXJQb3J0YWwiLCJkZWZhdWx0U3R5bGVzIiwiY29tcG9uZW50RGlkTW91bnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwicHJldlByb3BzIiwicHJldlBhcmVudCIsIm5leHRQYXJlbnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJfIiwic25hcHNob3QiLCJfcHJvcHMiLCJpc09wZW4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInN0YXRlIiwibm93IiwiRGF0ZSIsImNsb3Nlc0F0IiwiY2xvc2VUaW1lb3V0TVMiLCJiZWZvcmVDbG9zZSIsImNsb3NlV2l0aFRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVuZGVyIiwic2V0QXBwRWxlbWVudCIsImVsZW1lbnQiLCJzZXRFbGVtZW50IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJzdHlsZSIsInNoYXBlIiwiY29udGVudCIsIm9iamVjdCIsIm92ZXJsYXkiLCJzdHJpbmciLCJodG1sT3BlbkNsYXNzTmFtZSIsIm9uZU9mVHlwZSIsImJhc2UiLCJhZnRlck9wZW4iLCJvdmVybGF5Q2xhc3NOYW1lIiwiYXBwRWxlbWVudCIsImluc3RhbmNlT2YiLCJvbkFmdGVyT3BlbiIsImZ1bmMiLCJvblJlcXVlc3RDbG9zZSIsIm51bWJlciIsImFyaWFIaWRlQXBwIiwic2hvdWxkRm9jdXNBZnRlclJlbmRlciIsInNob3VsZENsb3NlT25PdmVybGF5Q2xpY2siLCJzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2UiLCJhcmlhIiwiZGF0YSIsInJvbGUiLCJjb250ZW50TGFiZWwiLCJzaG91bGRDbG9zZU9uRXNjIiwib3ZlcmxheVJlZiIsImNvbnRlbnRSZWYiLCJkZWZhdWx0UHJvcHMiLCJib2R5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwib3ZlcmZsb3ciLCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsImJvcmRlclJhZGl1cyIsIm91dGxpbmUiLCJwYWRkaW5nIiwicG9seWZpbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfZm9jdXNNYW5hZ2VyIiwiZm9jdXNNYW5hZ2VyIiwiX3Njb3BlVGFiIiwiX3Njb3BlVGFiMiIsIl9jbGFzc0xpc3QiLCJjbGFzc0xpc3QiLCJDTEFTU19OQU1FUyIsIlRBQl9LRVkiLCJFU0NfS0VZIiwiYXJpYUhpZGRlbkluc3RhbmNlcyIsIk1vZGFsUG9ydGFsIiwic2V0T3ZlcmxheVJlZiIsInNldENvbnRlbnRSZWYiLCJhZnRlckNsb3NlIiwiX3RoaXMkcHJvcHMiLCJyZW1vdmUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNob3ciLCJyZXR1cm5Gb2N1cyIsInRlYXJkb3duU2NvcGVkRm9jdXMiLCJwb3BXaXRob3V0Rm9jdXMiLCJvbkFmdGVyQ2xvc2UiLCJvcGVuIiwiYmVmb3JlT3BlbiIsImNsZWFyVGltZW91dCIsImNsb3NlVGltZXIiLCJzZXRTdGF0ZSIsInNldHVwU2NvcGVkRm9jdXMiLCJtYXJrRm9yRm9jdXNMYXRlciIsImNsb3NlIiwiY2xvc2VXaXRob3V0VGltZW91dCIsImZvY3VzQ29udGVudCIsImNvbnRlbnRIYXNGb2N1cyIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsInN0b3BQcm9wYWdhdGlvbiIsInJlcXVlc3RDbG9zZSIsImhhbmRsZU92ZXJsYXlPbkNsaWNrIiwic2hvdWxkQ2xvc2UiLCJvd25lckhhbmRsZXNDbG9zZSIsImhhbmRsZUNvbnRlbnRPbk1vdXNlVXAiLCJoYW5kbGVPdmVybGF5T25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNvbnRlbnRPbkNsaWNrIiwiaGFuZGxlQ29udGVudE9uTW91c2VEb3duIiwic2hvdWxkQmVDbG9zZWQiLCJhY3RpdmVFbGVtZW50IiwiY29udGFpbnMiLCJidWlsZENsYXNzTmFtZSIsIndoaWNoIiwiYWRkaXRpb25hbCIsImNsYXNzTmFtZXMiLCJhdHRyaWJ1dGVzRnJvbU9iamVjdCIsInByZWZpeCIsIml0ZW1zIiwia2V5cyIsInJlZHVjZSIsImFjYyIsIm5hbWUiLCJtb3ZlRnJvbUNvbnRlbnRUb092ZXJsYXkiLCJwcmV2U3RhdGUiLCJwcm9jZXNzIiwiY29uc29sZSIsIndhcm4iLCJhZGQiLCJoaWRlIiwiX3Byb3BzMiIsImlkIiwiY29udGVudFN0eWxlcyIsIm92ZXJsYXlTdHlsZXMiLCJvbkNsaWNrIiwib25Nb3VzZURvd24iLCJ0YWJJbmRleCIsIm9uS2V5RG93biIsIm9uTW91c2VVcCIsInRlc3RJZCIsImNoaWxkcmVuIiwibW9kdWxlIiwiYXNzZXJ0Tm9kZUxpc3QiLCJ2YWxpZGF0ZUVsZW1lbnQiLCJkb2N1bWVudE5vdFJlYWR5T3JTU1JUZXN0aW5nIiwicmVzZXRGb3JUZXN0aW5nIiwiX3dhcm5pbmciLCJfd2FybmluZzIiLCJnbG9iYWxFbGVtZW50Iiwibm9kZUxpc3QiLCJzZWxlY3RvciIsIkVycm9yIiwidXNlRWxlbWVudCIsImVsIiwicXVlcnlTZWxlY3RvckFsbCIsImpvaW4iLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkdW1wQ2xhc3NMaXN0cyIsImh0bWxDbGFzc0xpc3QiLCJkb2NCb2R5Q2xhc3NMaXN0IiwiY2xhc3NlcyIsImJ1ZmZlciIsIngiLCJfeCIsImxvZyIsImluY3JlbWVudFJlZmVyZW5jZSIsInBvbGwiLCJkZWNyZW1lbnRSZWZlcmVuY2UiLCJ0cmFja0NsYXNzIiwiY2xhc3NMaXN0UmVmIiwiZm9yRWFjaCIsInVudHJhY2tDbGFzcyIsImNsYXNzU3RyaW5nIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwiX3RhYmJhYmxlIiwiX3RhYmJhYmxlMiIsImZvY3VzTGF0ZXJFbGVtZW50cyIsIm1vZGFsRWxlbWVudCIsIm5lZWRUb0ZvY3VzIiwicHVzaCIsInRvRm9jdXMiLCJwb3AiLCJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50IiwiX2V4ZW52IiwiX2V4ZW52MiIsIkVFIiwiU2FmZUhUTUxFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJzY29wZVRhYiIsInRhYmJhYmxlIiwic2hpZnRLZXkiLCJoZWFkIiwidGFpbCIsImNoZWNrU2FmYXJpIiwiZXhlYyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzU2FmYXJpRGVza3RvcCIsImluZGV4T2YiLCJmaW5kVGFiYmFibGVEZXNjZW5kYW50cyIsInRhYmJhYmxlTm9kZSIsImhpZGVzQ29udGVudHMiLCJ6ZXJvU2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiaW5uZXJIVE1MIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ2aXNpYmxlIiwicGFyZW50RWxlbWVudCIsInBhcmVudE5vZGUiLCJmb2N1c2FibGUiLCJpc1RhYkluZGV4Tm90TmFOIiwicmVzIiwidGVzdCIsImRpc2FibGVkIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsImlzVGFiSW5kZXhOYU4iLCJpc05hTiIsInNsaWNlIiwiZmlsdGVyIiwiX01vZGFsIiwiX01vZGFsMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUtBO0FBRUMsYUFBWTtBQUNaOztBQUVBLE1BQUlBLFNBQVMsR0FBRyxDQUFDLEVBQ2hCLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFDQUEsTUFBTSxDQUFDQyxRQURQLElBRUFELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsYUFIQSxDQUFqQjtBQU1B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QUNEOztBQUVELFNBQVNuQix1QkFBVCxDQUFpQ3JNLE9BQWpDLEVBQTBDO0FBQ3hDLFNBQU8sR0FBRzBOLEtBQUgsQ0FBUzFULElBQVQsQ0FBY2dHLE9BQU8sQ0FBQ2lKLGdCQUFSLENBQXlCLEdBQXpCLENBQWQsRUFBNkMsQ0FBN0MsRUFBZ0QwRSxNQUFoRCxDQUF1RGhDLFFBQXZELENBQVA7QUFDRDs7QUFDRHZELE1BQU0sQ0FBQ25QLE9BQVAsR0FBaUJBLE9BQU8sQ0FBQyxTQUFELENBQXhCLEM7Ozs7Ozs7Ozs7OztBQ3pEYTs7QUFFYkYsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQ0MsT0FBSyxFQUFFO0FBRG9DLENBQTdDOztBQUlBLElBQUkwVSxNQUFNLEdBQUdoVCxtQkFBTyxDQUFDLDhFQUFELENBQXBCOztBQUVBLElBQUlpVCxPQUFPLEdBQUcvUyxzQkFBc0IsQ0FBQzhTLE1BQUQsQ0FBcEM7O0FBRUEsU0FBUzlTLHNCQUFULENBQWdDYSxHQUFoQyxFQUFxQztBQUFFLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUFFRyxXQUFPLEVBQUVIO0FBQVgsR0FBckM7QUFBd0Q7O0FBRS9GMUMsT0FBTyxDQUFDNkMsT0FBUixHQUFrQitSLE9BQU8sQ0FBQy9SLE9BQTFCO0FBQ0FzTSxNQUFNLENBQUNuUCxPQUFQLEdBQWlCQSxPQUFPLENBQUMsU0FBRCxDQUF4QixDIiwiZmlsZSI6InZlbmRvcnN+cHJvdmlkZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ib2R5T3BlbkNsYXNzTmFtZSA9IGV4cG9ydHMucG9ydGFsQ2xhc3NOYW1lID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX01vZGFsUG9ydGFsID0gcmVxdWlyZShcIi4vTW9kYWxQb3J0YWxcIik7XG5cbnZhciBfTW9kYWxQb3J0YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxQb3J0YWwpO1xuXG52YXIgX2FyaWFBcHBIaWRlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2FyaWFBcHBIaWRlclwiKTtcblxudmFyIGFyaWFBcHBIaWRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hcmlhQXBwSGlkZXIpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3NhZmVIVE1MRWxlbWVudFwiKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2FmZUhUTUxFbGVtZW50KTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHBvcnRhbENsYXNzTmFtZSA9IGV4cG9ydHMucG9ydGFsQ2xhc3NOYW1lID0gXCJSZWFjdE1vZGFsUG9ydGFsXCI7XG52YXIgYm9keU9wZW5DbGFzc05hbWUgPSBleHBvcnRzLmJvZHlPcGVuQ2xhc3NOYW1lID0gXCJSZWFjdE1vZGFsX19Cb2R5LS1vcGVuXCI7XG5cbnZhciBpc1JlYWN0MTYgPSBfcmVhY3REb20yLmRlZmF1bHQuY3JlYXRlUG9ydGFsICE9PSB1bmRlZmluZWQ7XG5cbnZhciBnZXRDcmVhdGVQb3J0YWwgPSBmdW5jdGlvbiBnZXRDcmVhdGVQb3J0YWwoKSB7XG4gIHJldHVybiBpc1JlYWN0MTYgPyBfcmVhY3REb20yLmRlZmF1bHQuY3JlYXRlUG9ydGFsIDogX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyO1xufTtcblxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChwYXJlbnRTZWxlY3Rvcikge1xuICByZXR1cm4gcGFyZW50U2VsZWN0b3IoKTtcbn1cblxudmFyIE1vZGFsID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1vZGFsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb2RhbCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IE1vZGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWwpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5yZW1vdmVQb3J0YWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNSZWFjdDE2ICYmIF9yZWFjdERvbTIuZGVmYXVsdC51bm1vdW50Q29tcG9uZW50QXROb2RlKF90aGlzLm5vZGUpO1xuICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQoX3RoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF90aGlzLm5vZGUpO1xuICAgIH0sIF90aGlzLnBvcnRhbFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLnBvcnRhbCA9IHJlZjtcbiAgICB9LCBfdGhpcy5yZW5kZXJQb3J0YWwgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHZhciBjcmVhdGVQb3J0YWwgPSBnZXRDcmVhdGVQb3J0YWwoKTtcbiAgICAgIHZhciBwb3J0YWwgPSBjcmVhdGVQb3J0YWwoX3RoaXMsIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Nb2RhbFBvcnRhbDIuZGVmYXVsdCwgX2V4dGVuZHMoeyBkZWZhdWx0U3R5bGVzOiBNb2RhbC5kZWZhdWx0U3R5bGVzIH0sIHByb3BzKSksIF90aGlzLm5vZGUpO1xuICAgICAgX3RoaXMucG9ydGFsUmVmKHBvcnRhbCk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSkgcmV0dXJuO1xuXG4gICAgICBpZiAoIWlzUmVhY3QxNikge1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMucG9ydGFsQ2xhc3NOYW1lO1xuXG4gICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudCh0aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuXG4gICAgICAhaXNSZWFjdDE2ICYmIHRoaXMucmVuZGVyUG9ydGFsKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBwcmV2UGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudChwcmV2UHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgdmFyIG5leHRQYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHRoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIHsgcHJldlBhcmVudDogcHJldlBhcmVudCwgbmV4dFBhcmVudDogbmV4dFBhcmVudCB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgXywgc25hcHNob3QpIHtcbiAgICAgIGlmICghX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00pIHJldHVybjtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzT3BlbiA9IF9wcm9wcy5pc09wZW4sXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lID0gX3Byb3BzLnBvcnRhbENsYXNzTmFtZTtcblxuXG4gICAgICBpZiAocHJldlByb3BzLnBvcnRhbENsYXNzTmFtZSAhPT0gcG9ydGFsQ2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc05hbWUgPSBwb3J0YWxDbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2UGFyZW50ID0gc25hcHNob3QucHJldlBhcmVudCxcbiAgICAgICAgICBuZXh0UGFyZW50ID0gc25hcHNob3QubmV4dFBhcmVudDtcblxuICAgICAgaWYgKG5leHRQYXJlbnQgIT09IHByZXZQYXJlbnQpIHtcbiAgICAgICAgcHJldlBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICAgICAgICBuZXh0UGFyZW50LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFN0b3AgdW5uZWNlc3NhcnkgcmVuZGVycyBpZiBtb2RhbCBpcyByZW1haW5pbmcgY2xvc2VkXG4gICAgICBpZiAoIXByZXZQcm9wcy5pc09wZW4gJiYgIWlzT3BlbikgcmV0dXJuO1xuXG4gICAgICAhaXNSZWFjdDE2ICYmIHRoaXMucmVuZGVyUG9ydGFsKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICghX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00gfHwgIXRoaXMubm9kZSB8fCAhdGhpcy5wb3J0YWwpIHJldHVybjtcblxuICAgICAgdmFyIHN0YXRlID0gdGhpcy5wb3J0YWwuc3RhdGU7XG4gICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIHZhciBjbG9zZXNBdCA9IHN0YXRlLmlzT3BlbiAmJiB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TICYmIChzdGF0ZS5jbG9zZXNBdCB8fCBub3cgKyB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TKTtcblxuICAgICAgaWYgKGNsb3Nlc0F0KSB7XG4gICAgICAgIGlmICghc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbC5jbG9zZVdpdGhUaW1lb3V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMucmVtb3ZlUG9ydGFsLCBjbG9zZXNBdCAtIG5vdyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZVBvcnRhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSB8fCAhaXNSZWFjdDE2KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMubm9kZSAmJiBpc1JlYWN0MTYpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNyZWF0ZVBvcnRhbCA9IGdldENyZWF0ZVBvcnRhbCgpO1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTW9kYWxQb3J0YWwyLmRlZmF1bHQsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLnBvcnRhbFJlZixcbiAgICAgICAgZGVmYXVsdFN0eWxlczogTW9kYWwuZGVmYXVsdFN0eWxlc1xuICAgICAgfSwgdGhpcy5wcm9wcykpLCB0aGlzLm5vZGUpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcInNldEFwcEVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QXBwRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBhcmlhQXBwSGlkZXIuc2V0RWxlbWVudChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGlzT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb250ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KSxcbiAgcG9ydGFsQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYm9keU9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBodG1sT3BlbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBiYXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFmdGVyT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBiZWZvcmVDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KV0pLFxuICBvdmVybGF5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGJhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJlZm9yZUNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pXSksXG4gIGFwcEVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuaW5zdGFuY2VPZihfc2FmZUhUTUxFbGVtZW50Mi5kZWZhdWx0KSxcbiAgb25BZnRlck9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25SZXF1ZXN0Q2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY2xvc2VUaW1lb3V0TVM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBhcmlhSGlkZUFwcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRGb2N1c0FmdGVyUmVuZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkUmV0dXJuRm9jdXNBZnRlckNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHBhcmVudFNlbGVjdG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGFyaWE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBkYXRhOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgcm9sZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbnRlbnRMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHNob3VsZENsb3NlT25Fc2M6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgb3ZlcmxheVJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjb250ZW50UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIHBvcnRhbENsYXNzTmFtZTogcG9ydGFsQ2xhc3NOYW1lLFxuICBib2R5T3BlbkNsYXNzTmFtZTogYm9keU9wZW5DbGFzc05hbWUsXG4gIHJvbGU6IFwiZGlhbG9nXCIsXG4gIGFyaWFIaWRlQXBwOiB0cnVlLFxuICBjbG9zZVRpbWVvdXRNUzogMCxcbiAgc2hvdWxkRm9jdXNBZnRlclJlbmRlcjogdHJ1ZSxcbiAgc2hvdWxkQ2xvc2VPbkVzYzogdHJ1ZSxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogdHJ1ZSxcbiAgc2hvdWxkUmV0dXJuRm9jdXNBZnRlckNsb3NlOiB0cnVlLFxuICBwYXJlbnRTZWxlY3RvcjogZnVuY3Rpb24gcGFyZW50U2VsZWN0b3IoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH1cbn07XG5Nb2RhbC5kZWZhdWx0U3R5bGVzID0ge1xuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSlcIlxuICB9LFxuICBjb250ZW50OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiNDBweFwiLFxuICAgIGxlZnQ6IFwiNDBweFwiLFxuICAgIHJpZ2h0OiBcIjQwcHhcIixcbiAgICBib3R0b206IFwiNDBweFwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICBwYWRkaW5nOiBcIjIwcHhcIlxuICB9XG59O1xuXG5cbigwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShNb2RhbCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGFsOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2ZvY3VzTWFuYWdlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2ZvY3VzTWFuYWdlclwiKTtcblxudmFyIGZvY3VzTWFuYWdlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9mb2N1c01hbmFnZXIpO1xuXG52YXIgX3Njb3BlVGFiID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc2NvcGVUYWJcIik7XG5cbnZhciBfc2NvcGVUYWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NvcGVUYWIpO1xuXG52YXIgX2FyaWFBcHBIaWRlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2FyaWFBcHBIaWRlclwiKTtcblxudmFyIGFyaWFBcHBIaWRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hcmlhQXBwSGlkZXIpO1xuXG52YXIgX2NsYXNzTGlzdCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2NsYXNzTGlzdFwiKTtcblxudmFyIGNsYXNzTGlzdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jbGFzc0xpc3QpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3NhZmVIVE1MRWxlbWVudFwiKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2FmZUhUTUxFbGVtZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBzbyB0aGF0IG91ciBDU1MgaXMgc3RhdGljYWxseSBhbmFseXphYmxlXG52YXIgQ0xBU1NfTkFNRVMgPSB7XG4gIG92ZXJsYXk6IFwiUmVhY3RNb2RhbF9fT3ZlcmxheVwiLFxuICBjb250ZW50OiBcIlJlYWN0TW9kYWxfX0NvbnRlbnRcIlxufTtcblxudmFyIFRBQl9LRVkgPSA5O1xudmFyIEVTQ19LRVkgPSAyNztcblxudmFyIGFyaWFIaWRkZW5JbnN0YW5jZXMgPSAwO1xuXG52YXIgTW9kYWxQb3J0YWwgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTW9kYWxQb3J0YWwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1vZGFsUG9ydGFsKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsUG9ydGFsKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNb2RhbFBvcnRhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsUG9ydGFsKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc2V0T3ZlcmxheVJlZiA9IGZ1bmN0aW9uIChvdmVybGF5KSB7XG4gICAgICBfdGhpcy5vdmVybGF5ID0gb3ZlcmxheTtcbiAgICAgIF90aGlzLnByb3BzLm92ZXJsYXlSZWYgJiYgX3RoaXMucHJvcHMub3ZlcmxheVJlZihvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0Q29udGVudFJlZiA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBfdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgIF90aGlzLnByb3BzLmNvbnRlbnRSZWYgJiYgX3RoaXMucHJvcHMuY29udGVudFJlZihjb250ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYWZ0ZXJDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFwcEVsZW1lbnQgPSBfdGhpcyRwcm9wcy5hcHBFbGVtZW50LFxuICAgICAgICAgIGFyaWFIaWRlQXBwID0gX3RoaXMkcHJvcHMuYXJpYUhpZGVBcHAsXG4gICAgICAgICAgaHRtbE9wZW5DbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5odG1sT3BlbkNsYXNzTmFtZSxcbiAgICAgICAgICBib2R5T3BlbkNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lO1xuXG4gICAgICAvLyBSZW1vdmUgY2xhc3Nlcy5cblxuICAgICAgYm9keU9wZW5DbGFzc05hbWUgJiYgY2xhc3NMaXN0LnJlbW92ZShkb2N1bWVudC5ib2R5LCBib2R5T3BlbkNsYXNzTmFtZSk7XG5cbiAgICAgIGh0bWxPcGVuQ2xhc3NOYW1lICYmIGNsYXNzTGlzdC5yZW1vdmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLCBodG1sT3BlbkNsYXNzTmFtZSk7XG5cbiAgICAgIC8vIFJlc2V0IGFyaWEtaGlkZGVuIGF0dHJpYnV0ZSBpZiBhbGwgbW9kYWxzIGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICBpZiAoYXJpYUhpZGVBcHAgJiYgYXJpYUhpZGRlbkluc3RhbmNlcyA+IDApIHtcbiAgICAgICAgYXJpYUhpZGRlbkluc3RhbmNlcyAtPSAxO1xuXG4gICAgICAgIGlmIChhcmlhSGlkZGVuSW5zdGFuY2VzID09PSAwKSB7XG4gICAgICAgICAgYXJpYUFwcEhpZGVyLnNob3coYXBwRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnNob3VsZEZvY3VzQWZ0ZXJSZW5kZXIpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLnNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZSkge1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5yZXR1cm5Gb2N1cygpO1xuICAgICAgICAgIGZvY3VzTWFuYWdlci50ZWFyZG93blNjb3BlZEZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLnBvcFdpdGhvdXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkFmdGVyQ2xvc2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25BZnRlckNsb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5iZWZvcmVPcGVuKCk7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuYWZ0ZXJPcGVuICYmIF90aGlzLnN0YXRlLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5jbG9zZVRpbWVyKTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBiZWZvcmVDbG9zZTogZmFsc2UgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMuc2hvdWxkRm9jdXNBZnRlclJlbmRlcikge1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5zZXR1cFNjb3BlZEZvY3VzKF90aGlzLm5vZGUpO1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5tYXJrRm9yRm9jdXNMYXRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgYWZ0ZXJPcGVuOiB0cnVlIH0pO1xuXG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLmlzT3BlbiAmJiBfdGhpcy5wcm9wcy5vbkFmdGVyT3Blbikge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25BZnRlck9wZW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUyA+IDApIHtcbiAgICAgICAgX3RoaXMuY2xvc2VXaXRoVGltZW91dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuY2xvc2VXaXRob3V0VGltZW91dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5mb2N1c0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuY29udGVudCAmJiAhX3RoaXMuY29udGVudEhhc0ZvY3VzKCkgJiYgX3RoaXMuY29udGVudC5mb2N1cygpO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZVdpdGhUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNsb3Nlc0F0ID0gRGF0ZS5ub3coKSArIF90aGlzLnByb3BzLmNsb3NlVGltZW91dE1TO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBiZWZvcmVDbG9zZTogdHJ1ZSwgY2xvc2VzQXQ6IGNsb3Nlc0F0IH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoX3RoaXMuY2xvc2VXaXRob3V0VGltZW91dCwgX3RoaXMuc3RhdGUuY2xvc2VzQXQgLSBEYXRlLm5vdygpKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBiZWZvcmVDbG9zZTogZmFsc2UsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICAgIGNsb3Nlc0F0OiBudWxsXG4gICAgICB9LCBfdGhpcy5hZnRlckNsb3NlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IFRBQl9LRVkpIHtcbiAgICAgICAgKDAsIF9zY29wZVRhYjIuZGVmYXVsdCkoX3RoaXMuY29udGVudCwgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbkVzYyAmJiBldmVudC5rZXlDb2RlID09PSBFU0NfS0VZKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPdmVybGF5T25DbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnNob3VsZENsb3NlID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzLnNob3VsZENsb3NlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnNob3VsZENsb3NlICYmIF90aGlzLnByb3BzLnNob3VsZENsb3NlT25PdmVybGF5Q2xpY2spIHtcbiAgICAgICAgaWYgKF90aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkpIHtcbiAgICAgICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPdmVybGF5T25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayAmJiBldmVudC50YXJnZXQgPT0gX3RoaXMub3ZlcmxheSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVDb250ZW50T25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLnJlcXVlc3RDbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkgJiYgX3RoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vd25lckhhbmRsZXNDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkQmVDbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIV90aGlzLnN0YXRlLmlzT3BlbiAmJiAhX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmNvbnRlbnRIYXNGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5jb250ZW50IHx8IF90aGlzLmNvbnRlbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmJ1aWxkQ2xhc3NOYW1lID0gZnVuY3Rpb24gKHdoaWNoLCBhZGRpdGlvbmFsKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9ICh0eXBlb2YgYWRkaXRpb25hbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGFkZGl0aW9uYWwpKSA9PT0gXCJvYmplY3RcIiA/IGFkZGl0aW9uYWwgOiB7XG4gICAgICAgIGJhc2U6IENMQVNTX05BTUVTW3doaWNoXSxcbiAgICAgICAgYWZ0ZXJPcGVuOiBDTEFTU19OQU1FU1t3aGljaF0gKyBcIi0tYWZ0ZXItb3BlblwiLFxuICAgICAgICBiZWZvcmVDbG9zZTogQ0xBU1NfTkFNRVNbd2hpY2hdICsgXCItLWJlZm9yZS1jbG9zZVwiXG4gICAgICB9O1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMuYmFzZTtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hZnRlck9wZW4pIHtcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWVzLmFmdGVyT3BlbjtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZXMuYmVmb3JlQ2xvc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIGFkZGl0aW9uYWwgPT09IFwic3RyaW5nXCIgJiYgYWRkaXRpb25hbCA/IGNsYXNzTmFtZSArIFwiIFwiICsgYWRkaXRpb25hbCA6IGNsYXNzTmFtZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYXR0cmlidXRlc0Zyb21PYmplY3QgPSBmdW5jdGlvbiAocHJlZml4LCBpdGVtcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGl0ZW1zKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICBhY2NbcHJlZml4ICsgXCItXCIgKyBuYW1lXSA9IGl0ZW1zW25hbWVdO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICBiZWZvcmVDbG9zZTogZmFsc2VcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBudWxsO1xuICAgIF90aGlzLm1vdmVGcm9tQ29udGVudFRvT3ZlcmxheSA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsUG9ydGFsLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpZiAocHJldlByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lICE9PSB0aGlzLnByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlYWN0LU1vZGFsOiBcImJvZHlPcGVuQ2xhc3NOYW1lXCIgcHJvcCBoYXMgYmVlbiBtb2RpZmllZC4gJyArIFwiVGhpcyBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvciB3aGVuIG11bHRpcGxlIG1vZGFscyBhcmUgb3Blbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZQcm9wcy5odG1sT3BlbkNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5odG1sT3BlbkNsYXNzTmFtZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogXCJodG1sT3BlbkNsYXNzTmFtZVwiIHByb3AgaGFzIGJlZW4gbW9kaWZpZWQuICcgKyBcIlRoaXMgbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3Igd2hlbiBtdWx0aXBsZSBtb2RhbHMgYXJlIG9wZW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhcHJldlByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNPcGVuICYmIHByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBGb2N1cyBvbmx5IG5lZWRzIHRvIGJlIHNldCBvbmNlIHdoZW4gdGhlIG1vZGFsIGlzIGJlaW5nIG9wZW5lZFxuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdWxkRm9jdXNBZnRlclJlbmRlciAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgICB0aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuYWZ0ZXJDbG9zZSgpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VUaW1lcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJlZm9yZU9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmVmb3JlT3BlbigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFwcEVsZW1lbnQgPSBfcHJvcHMuYXBwRWxlbWVudCxcbiAgICAgICAgICBhcmlhSGlkZUFwcCA9IF9wcm9wcy5hcmlhSGlkZUFwcCxcbiAgICAgICAgICBodG1sT3BlbkNsYXNzTmFtZSA9IF9wcm9wcy5odG1sT3BlbkNsYXNzTmFtZSxcbiAgICAgICAgICBib2R5T3BlbkNsYXNzTmFtZSA9IF9wcm9wcy5ib2R5T3BlbkNsYXNzTmFtZTtcblxuICAgICAgLy8gQWRkIGNsYXNzZXMuXG5cbiAgICAgIGJvZHlPcGVuQ2xhc3NOYW1lICYmIGNsYXNzTGlzdC5hZGQoZG9jdW1lbnQuYm9keSwgYm9keU9wZW5DbGFzc05hbWUpO1xuXG4gICAgICBodG1sT3BlbkNsYXNzTmFtZSAmJiBjbGFzc0xpc3QuYWRkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXSwgaHRtbE9wZW5DbGFzc05hbWUpO1xuXG4gICAgICBpZiAoYXJpYUhpZGVBcHApIHtcbiAgICAgICAgYXJpYUhpZGRlbkluc3RhbmNlcyArPSAxO1xuICAgICAgICBhcmlhQXBwSGlkZXIuaGlkZShhcHBFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEb24ndCBzdGVhbCBmb2N1cyBmcm9tIGlubmVyIGVsZW1lbnRzXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlkID0gX3Byb3BzMi5pZCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lID0gX3Byb3BzMi5vdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgICAgIGRlZmF1bHRTdHlsZXMgPSBfcHJvcHMyLmRlZmF1bHRTdHlsZXM7XG5cbiAgICAgIHZhciBjb250ZW50U3R5bGVzID0gY2xhc3NOYW1lID8ge30gOiBkZWZhdWx0U3R5bGVzLmNvbnRlbnQ7XG4gICAgICB2YXIgb3ZlcmxheVN0eWxlcyA9IG92ZXJsYXlDbGFzc05hbWUgPyB7fSA6IGRlZmF1bHRTdHlsZXMub3ZlcmxheTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkQmVDbG9zZWQoKSA/IG51bGwgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogdGhpcy5zZXRPdmVybGF5UmVmLFxuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZShcIm92ZXJsYXlcIiwgb3ZlcmxheUNsYXNzTmFtZSksXG4gICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBvdmVybGF5U3R5bGVzLCB0aGlzLnByb3BzLnN0eWxlLm92ZXJsYXkpLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlT3ZlcmxheU9uQ2xpY2ssXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlT3ZlcmxheU9uTW91c2VEb3duXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgcmVmOiB0aGlzLnNldENvbnRlbnRSZWYsXG4gICAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNvbnRlbnRTdHlsZXMsIHRoaXMucHJvcHMuc3R5bGUuY29udGVudCksXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuYnVpbGRDbGFzc05hbWUoXCJjb250ZW50XCIsIGNsYXNzTmFtZSksXG4gICAgICAgICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVDb250ZW50T25Nb3VzZURvd24sXG4gICAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlQ29udGVudE9uTW91c2VVcCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ29udGVudE9uQ2xpY2ssXG4gICAgICAgICAgICByb2xlOiB0aGlzLnByb3BzLnJvbGUsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5jb250ZW50TGFiZWxcbiAgICAgICAgICB9LCB0aGlzLmF0dHJpYnV0ZXNGcm9tT2JqZWN0KFwiYXJpYVwiLCB0aGlzLnByb3BzLmFyaWEgfHwge30pLCB0aGlzLmF0dHJpYnV0ZXNGcm9tT2JqZWN0KFwiZGF0YVwiLCB0aGlzLnByb3BzLmRhdGEgfHwge30pLCB7XG4gICAgICAgICAgICBcImRhdGEtdGVzdGlkXCI6IHRoaXMucHJvcHMudGVzdElkXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RhbFBvcnRhbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbk1vZGFsUG9ydGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHtcbiAgICBvdmVybGF5OiB7fSxcbiAgICBjb250ZW50OiB7fVxuICB9LFxuICBkZWZhdWx0U3R5bGVzOiB7fVxufTtcbk1vZGFsUG9ydGFsLnByb3BUeXBlcyA9IHtcbiAgaXNPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgZGVmYXVsdFN0eWxlczogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgY29udGVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgb3ZlcmxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfSksXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb250ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSksXG4gIG92ZXJsYXlDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RdKSxcbiAgYm9keU9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBodG1sT3BlbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFyaWFIaWRlQXBwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGFwcEVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuaW5zdGFuY2VPZihfc2FmZUhUTUxFbGVtZW50Mi5kZWZhdWx0KSxcbiAgb25BZnRlck9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25BZnRlckNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVxdWVzdENsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNsb3NlVGltZW91dE1TOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2hvdWxkRm9jdXNBZnRlclJlbmRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICByb2xlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY29udGVudExhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYXJpYTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGRhdGE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBzaG91bGRDbG9zZU9uRXNjOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG92ZXJsYXlSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY29udGVudFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRlc3RJZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBNb2RhbFBvcnRhbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFzc2VydE5vZGVMaXN0ID0gYXNzZXJ0Tm9kZUxpc3Q7XG5leHBvcnRzLnNldEVsZW1lbnQgPSBzZXRFbGVtZW50O1xuZXhwb3J0cy52YWxpZGF0ZUVsZW1lbnQgPSB2YWxpZGF0ZUVsZW1lbnQ7XG5leHBvcnRzLmhpZGUgPSBoaWRlO1xuZXhwb3J0cy5zaG93ID0gc2hvdztcbmV4cG9ydHMuZG9jdW1lbnROb3RSZWFkeU9yU1NSVGVzdGluZyA9IGRvY3VtZW50Tm90UmVhZHlPclNTUlRlc3Rpbmc7XG5leHBvcnRzLnJlc2V0Rm9yVGVzdGluZyA9IHJlc2V0Rm9yVGVzdGluZztcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQgPSByZXF1aXJlKFwiLi9zYWZlSFRNTEVsZW1lbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnbG9iYWxFbGVtZW50ID0gbnVsbDtcblxuZnVuY3Rpb24gYXNzZXJ0Tm9kZUxpc3Qobm9kZUxpc3QsIHNlbGVjdG9yKSB7XG4gIGlmICghbm9kZUxpc3QgfHwgIW5vZGVMaXN0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInJlYWN0LW1vZGFsOiBObyBlbGVtZW50cyB3ZXJlIGZvdW5kIGZvciBzZWxlY3RvciBcIiArIHNlbGVjdG9yICsgXCIuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnQoZWxlbWVudCkge1xuICB2YXIgdXNlRWxlbWVudCA9IGVsZW1lbnQ7XG4gIGlmICh0eXBlb2YgdXNlRWxlbWVudCA9PT0gXCJzdHJpbmdcIiAmJiBfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodXNlRWxlbWVudCk7XG4gICAgYXNzZXJ0Tm9kZUxpc3QoZWwsIHVzZUVsZW1lbnQpO1xuICAgIHVzZUVsZW1lbnQgPSBcImxlbmd0aFwiIGluIGVsID8gZWxbMF0gOiBlbDtcbiAgfVxuICBnbG9iYWxFbGVtZW50ID0gdXNlRWxlbWVudCB8fCBnbG9iYWxFbGVtZW50O1xuICByZXR1cm4gZ2xvYmFsRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpIHtcbiAgaWYgKCFhcHBFbGVtZW50ICYmICFnbG9iYWxFbGVtZW50KSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgW1wicmVhY3QtbW9kYWw6IEFwcCBlbGVtZW50IGlzIG5vdCBkZWZpbmVkLlwiLCBcIlBsZWFzZSB1c2UgYE1vZGFsLnNldEFwcEVsZW1lbnQoZWwpYCBvciBzZXQgYGFwcEVsZW1lbnQ9e2VsfWAuXCIsIFwiVGhpcyBpcyBuZWVkZWQgc28gc2NyZWVuIHJlYWRlcnMgZG9uJ3Qgc2VlIG1haW4gY29udGVudFwiLCBcIndoZW4gbW9kYWwgaXMgb3BlbmVkLiBJdCBpcyBub3QgcmVjb21tZW5kZWQsIGJ1dCB5b3UgY2FuIG9wdC1vdXRcIiwgXCJieSBzZXR0aW5nIGBhcmlhSGlkZUFwcD17ZmFsc2V9YC5cIl0uam9pbihcIiBcIikpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGhpZGUoYXBwRWxlbWVudCkge1xuICBpZiAodmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpKSB7XG4gICAgKGFwcEVsZW1lbnQgfHwgZ2xvYmFsRWxlbWVudCkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3coYXBwRWxlbWVudCkge1xuICBpZiAodmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpKSB7XG4gICAgKGFwcEVsZW1lbnQgfHwgZ2xvYmFsRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9jdW1lbnROb3RSZWFkeU9yU1NSVGVzdGluZygpIHtcbiAgZ2xvYmFsRWxlbWVudCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9yVGVzdGluZygpIHtcbiAgZ2xvYmFsRWxlbWVudCA9IG51bGw7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmR1bXBDbGFzc0xpc3RzID0gZHVtcENsYXNzTGlzdHM7XG52YXIgaHRtbENsYXNzTGlzdCA9IHt9O1xudmFyIGRvY0JvZHlDbGFzc0xpc3QgPSB7fTtcblxuZnVuY3Rpb24gZHVtcENsYXNzTGlzdHMoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgY2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5jbGFzc05hbWU7XG4gICAgdmFyIGJ1ZmZlciA9IFwiU2hvdyB0cmFja2VkIGNsYXNzZXM6XFxuXFxuXCI7XG5cbiAgICBidWZmZXIgKz0gXCI8aHRtbCAvPiAoXCIgKyBjbGFzc2VzICsgXCIpOlxcblwiO1xuICAgIGZvciAodmFyIHggaW4gaHRtbENsYXNzTGlzdCkge1xuICAgICAgYnVmZmVyICs9IFwiICBcIiArIHggKyBcIiBcIiArIGh0bWxDbGFzc0xpc3RbeF0gKyBcIlxcblwiO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgYnVmZmVyICs9IFwiXFxuXFxuZG9jLmJvZHkgKFwiICsgY2xhc3NlcyArIFwiKTpcXG5cIjtcbiAgICBmb3IgKHZhciBfeCBpbiBkb2NCb2R5Q2xhc3NMaXN0KSB7XG4gICAgICBidWZmZXIgKz0gXCIgIFwiICsgX3ggKyBcIiBcIiArIGRvY0JvZHlDbGFzc0xpc3RbX3hdICsgXCJcXG5cIjtcbiAgICB9XG5cbiAgICBidWZmZXIgKz0gXCJcXG5cIjtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coYnVmZmVyKTtcbiAgfVxufVxuXG4vKipcbiAqIFRyYWNrIHRoZSBudW1iZXIgb2YgcmVmZXJlbmNlIG9mIGEgY2xhc3MuXG4gKiBAcGFyYW0ge29iamVjdH0gcG9sbCBUaGUgcG9sbCB0byByZWNlaXZlIHRoZSByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzcyBuYW1lLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgaW5jcmVtZW50UmVmZXJlbmNlID0gZnVuY3Rpb24gaW5jcmVtZW50UmVmZXJlbmNlKHBvbGwsIGNsYXNzTmFtZSkge1xuICBpZiAoIXBvbGxbY2xhc3NOYW1lXSkge1xuICAgIHBvbGxbY2xhc3NOYW1lXSA9IDA7XG4gIH1cbiAgcG9sbFtjbGFzc05hbWVdICs9IDE7XG4gIHJldHVybiBjbGFzc05hbWU7XG59O1xuXG4vKipcbiAqIERyb3AgdGhlIHJlZmVyZW5jZSBvZiBhIGNsYXNzLlxuICogQHBhcmFtIHtvYmplY3R9IHBvbGwgVGhlIHBvbGwgdG8gcmVjZWl2ZSB0aGUgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3MgbmFtZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGRlY3JlbWVudFJlZmVyZW5jZSA9IGZ1bmN0aW9uIGRlY3JlbWVudFJlZmVyZW5jZShwb2xsLCBjbGFzc05hbWUpIHtcbiAgaWYgKHBvbGxbY2xhc3NOYW1lXSkge1xuICAgIHBvbGxbY2xhc3NOYW1lXSAtPSAxO1xuICB9XG4gIHJldHVybiBjbGFzc05hbWU7XG59O1xuXG4vKipcbiAqIFRyYWNrIGEgY2xhc3MgYW5kIGFkZCB0byB0aGUgZ2l2ZW4gY2xhc3MgbGlzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjbGFzc0xpc3RSZWYgQSBjbGFzcyBsaXN0IG9mIGFuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gcG9sbCAgICAgICAgIFRoZSBwb2xsIHRvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge0FycmF5fSAgY2xhc3NlcyAgICAgIFRoZSBsaXN0IG9mIGNsYXNzZXMgdG8gYmUgdHJhY2tlZC5cbiAqL1xudmFyIHRyYWNrQ2xhc3MgPSBmdW5jdGlvbiB0cmFja0NsYXNzKGNsYXNzTGlzdFJlZiwgcG9sbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGluY3JlbWVudFJlZmVyZW5jZShwb2xsLCBjbGFzc05hbWUpO1xuICAgIGNsYXNzTGlzdFJlZi5hZGQoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFVudHJhY2sgYSBjbGFzcyBhbmQgcmVtb3ZlIGZyb20gdGhlIGdpdmVuIGNsYXNzIGxpc3QgaWYgdGhlIHJlZmVyZW5jZVxuICogcmVhY2hlcyAwLlxuICogQHBhcmFtIHtPYmplY3R9IGNsYXNzTGlzdFJlZiBBIGNsYXNzIGxpc3Qgb2YgYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwb2xsICAgICAgICAgVGhlIHBvbGwgdG8gYmUgdXNlZC5cbiAqIEBwYXJhbSB7QXJyYXl9ICBjbGFzc2VzICAgICAgVGhlIGxpc3Qgb2YgY2xhc3NlcyB0byBiZSB1bnRyYWNrZWQuXG4gKi9cbnZhciB1bnRyYWNrQ2xhc3MgPSBmdW5jdGlvbiB1bnRyYWNrQ2xhc3MoY2xhc3NMaXN0UmVmLCBwb2xsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgZGVjcmVtZW50UmVmZXJlbmNlKHBvbGwsIGNsYXNzTmFtZSk7XG4gICAgcG9sbFtjbGFzc05hbWVdID09PSAwICYmIGNsYXNzTGlzdFJlZi5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFB1YmxpYyBpbmZlcmZhY2UgdG8gYWRkIGNsYXNzZXMgdG8gdGhlIGRvY3VtZW50LmJvZHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gYm9keUNsYXNzIFRoZSBjbGFzcyBzdHJpbmcgdG8gYmUgYWRkZWQuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IG1heSBjb250YWluIG1vcmUgdGhlbiBvbmUgY2xhc3NcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCAnICcgYXMgc2VwYXJhdG9yLlxuICovXG52YXIgYWRkID0gZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiBhZGQoZWxlbWVudCwgY2xhc3NTdHJpbmcpIHtcbiAgcmV0dXJuIHRyYWNrQ2xhc3MoZWxlbWVudC5jbGFzc0xpc3QsIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSBcImh0bWxcIiA/IGh0bWxDbGFzc0xpc3QgOiBkb2NCb2R5Q2xhc3NMaXN0LCBjbGFzc1N0cmluZy5zcGxpdChcIiBcIikpO1xufTtcblxuLyoqXG4gKiBQdWJsaWMgaW5mZXJmYWNlIHRvIHJlbW92ZSBjbGFzc2VzIGZyb20gdGhlIGRvY3VtZW50LmJvZHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gYm9keUNsYXNzIFRoZSBjbGFzcyBzdHJpbmcgdG8gYmUgYWRkZWQuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IG1heSBjb250YWluIG1vcmUgdGhlbiBvbmUgY2xhc3NcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCAnICcgYXMgc2VwYXJhdG9yLlxuICovXG52YXIgcmVtb3ZlID0gZXhwb3J0cy5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCwgY2xhc3NTdHJpbmcpIHtcbiAgcmV0dXJuIHVudHJhY2tDbGFzcyhlbGVtZW50LmNsYXNzTGlzdCwgZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09IFwiaHRtbFwiID8gaHRtbENsYXNzTGlzdCA6IGRvY0JvZHlDbGFzc0xpc3QsIGNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5oYW5kbGVCbHVyID0gaGFuZGxlQmx1cjtcbmV4cG9ydHMuaGFuZGxlRm9jdXMgPSBoYW5kbGVGb2N1cztcbmV4cG9ydHMubWFya0ZvckZvY3VzTGF0ZXIgPSBtYXJrRm9yRm9jdXNMYXRlcjtcbmV4cG9ydHMucmV0dXJuRm9jdXMgPSByZXR1cm5Gb2N1cztcbmV4cG9ydHMucG9wV2l0aG91dEZvY3VzID0gcG9wV2l0aG91dEZvY3VzO1xuZXhwb3J0cy5zZXR1cFNjb3BlZEZvY3VzID0gc2V0dXBTY29wZWRGb2N1cztcbmV4cG9ydHMudGVhcmRvd25TY29wZWRGb2N1cyA9IHRlYXJkb3duU2NvcGVkRm9jdXM7XG5cbnZhciBfdGFiYmFibGUgPSByZXF1aXJlKFwiLi4vaGVscGVycy90YWJiYWJsZVwiKTtcblxudmFyIF90YWJiYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWJiYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBmb2N1c0xhdGVyRWxlbWVudHMgPSBbXTtcbnZhciBtb2RhbEVsZW1lbnQgPSBudWxsO1xudmFyIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XG4gIG5lZWRUb0ZvY3VzID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XG4gIGlmIChuZWVkVG9Gb2N1cykge1xuICAgIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG4gICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbmVlZCB0byBzZWUgaG93IGpRdWVyeSBzaGltcyBkb2N1bWVudC5vbignZm9jdXNpbicpIHNvIHdlIGRvbid0IG5lZWQgdGhlXG4gICAgLy8gc2V0VGltZW91dCwgZmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgZm9jdXNpbiwgaWYgaXQgZGlkLCB3ZSBjb3VsZCBmb2N1c1xuICAgIC8vIHRoZSBlbGVtZW50IG91dHNpZGUgb2YgYSBzZXRUaW1lb3V0LiBTaWRlLWVmZmVjdCBvZiB0aGlzIGltcGxlbWVudGF0aW9uXG4gICAgLy8gaXMgdGhhdCB0aGUgZG9jdW1lbnQuYm9keSBnZXRzIGZvY3VzLCBhbmQgdGhlbiB3ZSBmb2N1cyBvdXIgZWxlbWVudCByaWdodFxuICAgIC8vIGFmdGVyLCBzZWVtcyBmaW5lLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vZGFsRWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZWwgPSAoMCwgX3RhYmJhYmxlMi5kZWZhdWx0KShtb2RhbEVsZW1lbnQpWzBdIHx8IG1vZGFsRWxlbWVudDtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya0ZvckZvY3VzTGF0ZXIoKSB7XG4gIGZvY3VzTGF0ZXJFbGVtZW50cy5wdXNoKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5mdW5jdGlvbiByZXR1cm5Gb2N1cygpIHtcbiAgdmFyIHRvRm9jdXMgPSBudWxsO1xuICB0cnkge1xuICAgIGlmIChmb2N1c0xhdGVyRWxlbWVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0b0ZvY3VzID0gZm9jdXNMYXRlckVsZW1lbnRzLnBvcCgpO1xuICAgICAgdG9Gb2N1cy5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oW1wiWW91IHRyaWVkIHRvIHJldHVybiBmb2N1cyB0b1wiLCB0b0ZvY3VzLCBcImJ1dCBpdCBpcyBub3QgaW4gdGhlIERPTSBhbnltb3JlXCJdLmpvaW4oXCIgXCIpKTtcbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cbmZ1bmN0aW9uIHBvcFdpdGhvdXRGb2N1cygpIHtcbiAgZm9jdXNMYXRlckVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgZm9jdXNMYXRlckVsZW1lbnRzLnBvcCgpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFNjb3BlZEZvY3VzKGVsZW1lbnQpIHtcbiAgbW9kYWxFbGVtZW50ID0gZWxlbWVudDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgaGFuZGxlQmx1ciwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmF0dGFjaEV2ZW50KFwib25CbHVyXCIsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25Gb2N1c1wiLCBoYW5kbGVGb2N1cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVhcmRvd25TY29wZWRGb2N1cygpIHtcbiAgbW9kYWxFbGVtZW50ID0gbnVsbDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGhhbmRsZUZvY3VzKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuZGV0YWNoRXZlbnQoXCJvbkJsdXJcIiwgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbkZvY3VzXCIsIGhhbmRsZUZvY3VzKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYW5Vc2VET00gPSB1bmRlZmluZWQ7XG5cbnZhciBfZXhlbnYgPSByZXF1aXJlKFwiZXhlbnZcIik7XG5cbnZhciBfZXhlbnYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhlbnYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRUUgPSBfZXhlbnYyLmRlZmF1bHQ7XG5cbnZhciBTYWZlSFRNTEVsZW1lbnQgPSBFRS5jYW5Vc2VET00gPyB3aW5kb3cuSFRNTEVsZW1lbnQgOiB7fTtcblxudmFyIGNhblVzZURPTSA9IGV4cG9ydHMuY2FuVXNlRE9NID0gRUUuY2FuVXNlRE9NO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTYWZlSFRNTEVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzY29wZVRhYjtcblxudmFyIF90YWJiYWJsZSA9IHJlcXVpcmUoXCIuL3RhYmJhYmxlXCIpO1xuXG52YXIgX3RhYmJhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RhYmJhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc2NvcGVUYWIobm9kZSwgZXZlbnQpIHtcbiAgdmFyIHRhYmJhYmxlID0gKDAsIF90YWJiYWJsZTIuZGVmYXVsdCkobm9kZSk7XG5cbiAgaWYgKCF0YWJiYWJsZS5sZW5ndGgpIHtcbiAgICAvLyBEbyBub3RoaW5nLCBzaW5jZSB0aGVyZSBhcmUgbm8gZWxlbWVudHMgdGhhdCBjYW4gcmVjZWl2ZSBmb2N1cy5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICB2YXIgaGVhZCA9IHRhYmJhYmxlWzBdO1xuICB2YXIgdGFpbCA9IHRhYmJhYmxlW3RhYmJhYmxlLmxlbmd0aCAtIDFdO1xuXG4gIC8vIHByb2NlZWQgd2l0aCBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb24gdGFiLlxuICAvLyBGb2N1cyBvbiBsYXN0IGVsZW1lbnQgb24gc2hpZnQgKyB0YWIuXG4gIGlmIChub2RlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKCFzaGlmdEtleSkgcmV0dXJuO1xuICAgIHRhcmdldCA9IHRhaWw7XG4gIH1cblxuICB2YXIgdGFyZ2V0O1xuICBpZiAodGFpbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAhc2hpZnRLZXkpIHtcbiAgICB0YXJnZXQgPSBoZWFkO1xuICB9XG5cbiAgaWYgKGhlYWQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgc2hpZnRLZXkpIHtcbiAgICB0YXJnZXQgPSB0YWlsO1xuICB9XG5cbiAgaWYgKHRhcmdldCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU2FmYXJpIHJhZGlvIGlzc3VlLlxuICAvL1xuICAvLyBTYWZhcmkgZG9lcyBub3QgbW92ZSB0aGUgZm9jdXMgdG8gdGhlIHJhZGlvIGJ1dHRvbixcbiAgLy8gc28gd2UgbmVlZCB0byBmb3JjZSBpdCB0byByZWFsbHkgd2FsayB0aHJvdWdoIGFsbCBlbGVtZW50cy5cbiAgLy9cbiAgLy8gVGhpcyBpcyB2ZXJ5IGVycm9yIHByb25lLCBzaW5jZSB3ZSBhcmUgdHJ5aW5nIHRvIGd1ZXNzXG4gIC8vIGlmIGl0IGlzIGEgc2FmYXJpIGJyb3dzZXIgZnJvbSB0aGUgZmlyc3Qgb2NjdXJlbmNlIGJldHdlZW5cbiAgLy8gY2hyb21lIG9yIHNhZmFyaS5cbiAgLy9cbiAgLy8gVGhlIGNocm9tZSB1c2VyIGFnZW50IGNvbnRhaW5zIHRoZSBmaXJzdCBvY3VycmVuY2VcbiAgLy8gYXMgdGhlICdjaHJvbWUvdmVyc2lvbicgYW5kIGxhdGVyIHRoZSAnc2FmYXJpL3ZlcnNpb24nLlxuICB2YXIgY2hlY2tTYWZhcmkgPSAvKFxcYkNocm9tZVxcYnxcXGJTYWZhcmlcXGIpXFwvLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB2YXIgaXNTYWZhcmlEZXNrdG9wID0gY2hlY2tTYWZhcmkgIT0gbnVsbCAmJiBjaGVja1NhZmFyaVsxXSAhPSBcIkNocm9tZVwiICYmIC9cXGJpUG9kXFxifFxcYmlQYWRcXGIvZy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpID09IG51bGw7XG5cbiAgLy8gSWYgd2UgYXJlIG5vdCBpbiBzYWZhcmkgZGVza3RvcCwgbGV0IHRoZSBicm93c2VyIGNvbnRyb2xcbiAgLy8gdGhlIGZvY3VzXG4gIGlmICghaXNTYWZhcmlEZXNrdG9wKSByZXR1cm47XG5cbiAgdmFyIHggPSB0YWJiYWJsZS5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gIGlmICh4ID4gLTEpIHtcbiAgICB4ICs9IHNoaWZ0S2V5ID8gLTEgOiAxO1xuICB9XG5cbiAgLy8gSWYgdGhlIHRhYmJhYmxlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QsXG4gIC8vIGZvY3VzIGhlYWQvdGFpbCBiYXNlZCBvbiBzaGlmdEtleVxuICBpZiAodHlwZW9mIHRhYmJhYmxlW3hdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXJnZXQgPSBzaGlmdEtleSA/IHRhaWwgOiBoZWFkO1xuICAgIHRhcmdldC5mb2N1cygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgdGFiYmFibGVbeF0uZm9jdXMoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaW5kVGFiYmFibGVEZXNjZW5kYW50cztcbi8qIVxuICogQWRhcHRlZCBmcm9tIGpRdWVyeSBVSSBjb3JlXG4gKlxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9jYXRlZ29yeS91aS1jb3JlL1xuICovXG5cbnZhciB0YWJiYWJsZU5vZGUgPSAvaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QvO1xuXG5mdW5jdGlvbiBoaWRlc0NvbnRlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIHplcm9TaXplID0gZWxlbWVudC5vZmZzZXRXaWR0aCA8PSAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDw9IDA7XG5cbiAgLy8gSWYgdGhlIG5vZGUgaXMgZW1wdHksIHRoaXMgaXMgZ29vZCBlbm91Z2hcbiAgaWYgKHplcm9TaXplICYmICFlbGVtZW50LmlubmVySFRNTCkgcmV0dXJuIHRydWU7XG5cbiAgLy8gT3RoZXJ3aXNlIHdlIG5lZWQgdG8gY2hlY2sgc29tZSBzdHlsZXNcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHJldHVybiB6ZXJvU2l6ZSA/IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJvdmVyZmxvd1wiKSAhPT0gXCJ2aXNpYmxlXCIgOiBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gdmlzaWJsZShlbGVtZW50KSB7XG4gIHZhciBwYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgd2hpbGUgKHBhcmVudEVsZW1lbnQpIHtcbiAgICBpZiAocGFyZW50RWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkgYnJlYWs7XG4gICAgaWYgKGhpZGVzQ29udGVudHMocGFyZW50RWxlbWVudCkpIHJldHVybiBmYWxzZTtcbiAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBmb2N1c2FibGUoZWxlbWVudCwgaXNUYWJJbmRleE5vdE5hTikge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHZhciByZXMgPSB0YWJiYWJsZU5vZGUudGVzdChub2RlTmFtZSkgJiYgIWVsZW1lbnQuZGlzYWJsZWQgfHwgKG5vZGVOYW1lID09PSBcImFcIiA/IGVsZW1lbnQuaHJlZiB8fCBpc1RhYkluZGV4Tm90TmFOIDogaXNUYWJJbmRleE5vdE5hTik7XG4gIHJldHVybiByZXMgJiYgdmlzaWJsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdGFiYmFibGUoZWxlbWVudCkge1xuICB2YXIgdGFiSW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICBpZiAodGFiSW5kZXggPT09IG51bGwpIHRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICB2YXIgaXNUYWJJbmRleE5hTiA9IGlzTmFOKHRhYkluZGV4KTtcbiAgcmV0dXJuIChpc1RhYkluZGV4TmFOIHx8IHRhYkluZGV4ID49IDApICYmIGZvY3VzYWJsZShlbGVtZW50LCAhaXNUYWJJbmRleE5hTik7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYWJiYWJsZURlc2NlbmRhbnRzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSwgMCkuZmlsdGVyKHRhYmJhYmxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTW9kYWwgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL01vZGFsXCIpO1xuXG52YXIgX01vZGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX01vZGFsMi5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6IiJ9