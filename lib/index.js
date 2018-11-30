function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import { Iterable, is } from 'immutable';
/* eslint-disable */

function toRawJS(props) {
  var KEY = 0;
  var VALUE = 1;
  return Object.entries(props).reduce(function (newProps, wrappedComponentProp) {
    // eslint-disable-next-line
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(wrappedComponentProp[VALUE]) ? wrappedComponentProp[VALUE].toJS() : wrappedComponentProp[VALUE];
    return newProps;
  }, {});
} // eslint-disable-next-line


var WithImmutable = function WithImmutable(WrappedComponent) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _config$showInfo = config.showInfo,
      showInfo = _config$showInfo === void 0 ? false : _config$showInfo,
      _config$pure = config.pure,
      pure = _config$pure === void 0 ? true : _config$pure;

  if (pure) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(ImmutableComponent, _React$Component);

        function ImmutableComponent() {
          _classCallCheck(this, ImmutableComponent);

          return _possibleConstructorReturn(this, _getPrototypeOf(ImmutableComponent).apply(this, arguments));
        }

        _createClass(ImmutableComponent, [{
          key: "shouldComponentUpdate",
          value: function shouldComponentUpdate(nextProps, nextState) {
            var thisProps = this.props || {};
            var thisState = this.state || {}; // eslint-disable-next-line

            nextState = nextState || {}; // eslint-disable-next-line

            nextProps = nextProps || {}; // eslint-disable-next-line

            if (Object.keys(thisProps).length !== Object.keys(nextProps).length || // eslint-disable-line
            Object.keys(thisState).length !== Object.keys(nextState).length) {
              return true;
            } // eslint-disable-next-line


            for (var key in nextProps) {
              if (!is(thisProps[key], nextProps[key])) {
                return true;
              }
            } // eslint-disable-next-line


            for (var _key in nextState) {
              if (!is(thisState[_key], nextState[_key])) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            showInfo && console.info('WithImmutable Updated', WrappedComponent.name);
          }
        }, {
          key: "render",
          value: function render() {
            var propsJS = toRawJS(this.props);
            return React.createElement(WrappedComponent, propsJS);
          }
        }]);

        return ImmutableComponent;
      }(React.Component)
    );
  }

  return function (props) {
    var propsJS = toRawJS(props);
    return React.createElement(WrappedComponent, propsJS);
  };
};

export default WithImmutable;