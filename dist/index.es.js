(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`.github-corner{position:fixed;top:0;right:0;border:0;z-index:1000}.github-corner svg{fill:#777;color:#151513}.github-corner .octo-arm{transform-origin:130px 106px}.github-corner:hover svg,.github-corner:focus svg{fill:#fff}.github-corner:hover .octo-arm,.github-corner:focus .octo-arm{animation:octocat-wave .56s ease-in-out}.github-corner:focus .sr-only{position:static;width:auto;height:auto;padding:0;margin:0;overflow:visible;clip:auto;white-space:normal}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width: 500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave .56s ease-in-out}}*{box-sizing:border-box;margin:0;padding:0}:root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh;background-image:linear-gradient(to bottom,#0000,#000 20%),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="%23262626" d="M0 0h12v12H0z"/><path fill="%231D1D1D" d="M12 0h12v12H12zM0 12h12v12H0z"/><path fill="%23262626" d="M12 12h12v12H12z"/></svg>');background-attachment:fixed}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}.margin-left-auto{margin-left:auto}.break-word{word-break:break-word}#root{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}.card{padding:2em}.read-the-docs{color:#888}.homepage__footer{padding-top:2em}.homepage__marginBtNormal{margin-bottom:1em}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}`)),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Ur = { exports: {} }, Je = {}, _r = { exports: {} }, m = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Vt() {
  if (yt) return m;
  yt = 1;
  var $ = Symbol.for("react.element"), v = Symbol.for("react.portal"), pe = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), ae = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), ee = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function re(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ce = Object.assign, $e = {};
  function oe(n, i, g) {
    this.props = n, this.context = i, this.refs = $e, this.updater = g || J;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(n, i) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, i, "setState");
  }, oe.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ue() {
  }
  ue.prototype = oe.prototype;
  function A(n, i, g) {
    this.props = n, this.context = i, this.refs = $e, this.updater = g || J;
  }
  var _e = A.prototype = new ue();
  _e.constructor = A, ce(_e, oe.prototype), _e.isPureReactComponent = !0;
  var ie = Array.isArray, N = Object.prototype.hasOwnProperty, H = { current: null }, fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, i, g) {
    var b, R = {}, k = null, O = null;
    if (i != null) for (b in i.ref !== void 0 && (O = i.ref), i.key !== void 0 && (k = "" + i.key), i) N.call(i, b) && !fe.hasOwnProperty(b) && (R[b] = i[b]);
    var T = arguments.length - 2;
    if (T === 1) R.children = g;
    else if (1 < T) {
      for (var w = Array(T), W = 0; W < T; W++) w[W] = arguments[W + 2];
      R.children = w;
    }
    if (n && n.defaultProps) for (b in T = n.defaultProps, T) R[b] === void 0 && (R[b] = T[b]);
    return { $$typeof: $, type: n, key: k, ref: O, props: R, _owner: H.current };
  }
  function Se(n, i) {
    return { $$typeof: $, type: n.type, key: i, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Te(n) {
    return typeof n == "object" && n !== null && n.$$typeof === $;
  }
  function Be(n) {
    var i = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(g) {
      return i[g];
    });
  }
  var Oe = /\/+/g;
  function q(n, i) {
    return typeof n == "object" && n !== null && n.key != null ? Be("" + n.key) : i.toString(36);
  }
  function X(n, i, g, b, R) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var O = !1;
    if (n === null) O = !0;
    else switch (k) {
      case "string":
      case "number":
        O = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case $:
          case v:
            O = !0;
        }
    }
    if (O) return O = n, R = R(O), n = b === "" ? "." + q(O, 0) : b, ie(R) ? (g = "", n != null && (g = n.replace(Oe, "$&/") + "/"), X(R, i, g, "", function(W) {
      return W;
    })) : R != null && (Te(R) && (R = Se(R, g + (!R.key || O && O.key === R.key ? "" : ("" + R.key).replace(Oe, "$&/") + "/") + n)), i.push(R)), 1;
    if (O = 0, b = b === "" ? "." : b + ":", ie(n)) for (var T = 0; T < n.length; T++) {
      k = n[T];
      var w = b + q(k, T);
      O += X(k, i, g, w, R);
    }
    else if (w = re(n), typeof w == "function") for (n = w.call(n), T = 0; !(k = n.next()).done; ) k = k.value, w = b + q(k, T++), O += X(k, i, g, w, R);
    else if (k === "object") throw i = String(n), Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    return O;
  }
  function U(n, i, g) {
    if (n == null) return n;
    var b = [], R = 0;
    return X(n, b, "", "", function(k) {
      return i.call(g, k, R++);
    }), b;
  }
  function se(n) {
    if (n._status === -1) {
      var i = n._result;
      i = i(), i.then(function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = g);
      }, function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = g);
      }), n._status === -1 && (n._status = 0, n._result = i);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var l = { current: null }, le = { transition: null }, Pe = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: le, ReactCurrentOwner: H };
  function ye() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return m.Children = { map: U, forEach: function(n, i, g) {
    U(n, function() {
      i.apply(this, arguments);
    }, g);
  }, count: function(n) {
    var i = 0;
    return U(n, function() {
      i++;
    }), i;
  }, toArray: function(n) {
    return U(n, function(i) {
      return i;
    }) || [];
  }, only: function(n) {
    if (!Te(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, m.Component = oe, m.Fragment = pe, m.Profiler = te, m.PureComponent = A, m.StrictMode = G, m.Suspense = L, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, m.act = ye, m.cloneElement = function(n, i, g) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var b = ce({}, n.props), R = n.key, k = n.ref, O = n._owner;
    if (i != null) {
      if (i.ref !== void 0 && (k = i.ref, O = H.current), i.key !== void 0 && (R = "" + i.key), n.type && n.type.defaultProps) var T = n.type.defaultProps;
      for (w in i) N.call(i, w) && !fe.hasOwnProperty(w) && (b[w] = i[w] === void 0 && T !== void 0 ? T[w] : i[w]);
    }
    var w = arguments.length - 2;
    if (w === 1) b.children = g;
    else if (1 < w) {
      T = Array(w);
      for (var W = 0; W < w; W++) T[W] = arguments[W + 2];
      b.children = T;
    }
    return { $$typeof: $, type: n.type, key: R, ref: k, props: b, _owner: O };
  }, m.createContext = function(n) {
    return n = { $$typeof: ae, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: ne, _context: n }, n.Consumer = n;
  }, m.createElement = ve, m.createFactory = function(n) {
    var i = ve.bind(null, n);
    return i.type = n, i;
  }, m.createRef = function() {
    return { current: null };
  }, m.forwardRef = function(n) {
    return { $$typeof: Z, render: n };
  }, m.isValidElement = Te, m.lazy = function(n) {
    return { $$typeof: M, _payload: { _status: -1, _result: n }, _init: se };
  }, m.memo = function(n, i) {
    return { $$typeof: ee, type: n, compare: i === void 0 ? null : i };
  }, m.startTransition = function(n) {
    var i = le.transition;
    le.transition = {};
    try {
      n();
    } finally {
      le.transition = i;
    }
  }, m.unstable_act = ye, m.useCallback = function(n, i) {
    return l.current.useCallback(n, i);
  }, m.useContext = function(n) {
    return l.current.useContext(n);
  }, m.useDebugValue = function() {
  }, m.useDeferredValue = function(n) {
    return l.current.useDeferredValue(n);
  }, m.useEffect = function(n, i) {
    return l.current.useEffect(n, i);
  }, m.useId = function() {
    return l.current.useId();
  }, m.useImperativeHandle = function(n, i, g) {
    return l.current.useImperativeHandle(n, i, g);
  }, m.useInsertionEffect = function(n, i) {
    return l.current.useInsertionEffect(n, i);
  }, m.useLayoutEffect = function(n, i) {
    return l.current.useLayoutEffect(n, i);
  }, m.useMemo = function(n, i) {
    return l.current.useMemo(n, i);
  }, m.useReducer = function(n, i, g) {
    return l.current.useReducer(n, i, g);
  }, m.useRef = function(n) {
    return l.current.useRef(n);
  }, m.useState = function(n) {
    return l.current.useState(n);
  }, m.useSyncExternalStore = function(n, i, g) {
    return l.current.useSyncExternalStore(n, i, g);
  }, m.useTransition = function() {
    return l.current.useTransition();
  }, m.version = "18.3.1", m;
}
var Qe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Qe.exports;
var ht;
function Yt() {
  return ht || (ht = 1, function($, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var pe = "18.3.1", G = Symbol.for("react.element"), te = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), ee = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), $e = Symbol.for("react.offscreen"), oe = Symbol.iterator, ue = "@@iterator";
      function A(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = oe && e[oe] || e[ue];
        return typeof r == "function" ? r : null;
      }
      var _e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {
        transition: null
      }, N = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, H = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {}, ve = null;
      function Se(e) {
        ve = e;
      }
      fe.setExtraStackFrame = function(e) {
        ve = e;
      }, fe.getCurrentStack = null, fe.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = fe.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Te = !1, Be = !1, Oe = !1, q = !1, X = !1, U = {
        ReactCurrentDispatcher: _e,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: H
      };
      U.ReactDebugCurrentFrame = fe, U.ReactCurrentActQueue = N;
      function se(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          le("warn", e, a);
        }
      }
      function l(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          le("error", e, a);
        }
      }
      function le(e, r, a) {
        {
          var o = U.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (r += "%s", a = a.concat([c]));
          var d = a.map(function(f) {
            return String(f);
          });
          d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
        }
      }
      var Pe = {};
      function ye(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + r;
          if (Pe[c])
            return;
          l("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Pe[c] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          ye(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          ye(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          ye(e, "setState");
        }
      }, i = Object.assign, g = {};
      Object.freeze(g);
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var R = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, r) {
          Object.defineProperty(b.prototype, e, {
            get: function() {
              se("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var O in R)
          R.hasOwnProperty(O) && k(O, R[O]);
      }
      function T() {
      }
      T.prototype = b.prototype;
      function w(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      var W = w.prototype = new T();
      W.constructor = w, i(W, b.prototype), W.isPureReactComponent = !0;
      function br() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Ze = Array.isArray;
      function Le(e) {
        return Ze(e);
      }
      function Er(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Me(e) {
        try {
          return be(e), !1;
        } catch {
          return !0;
        }
      }
      function be(e) {
        return "" + e;
      }
      function ke(e) {
        if (Me(e))
          return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(e)), be(e);
      }
      function er(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var c = r.displayName || r.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function je(e) {
        return e.displayName || "Context";
      }
      function de(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case ne:
            return "Fragment";
          case te:
            return "Portal";
          case Z:
            return "Profiler";
          case ae:
            return "StrictMode";
          case Y:
            return "Suspense";
          case re:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case ee:
              var r = e;
              return je(r) + ".Consumer";
            case L:
              var a = e;
              return je(a._context) + ".Provider";
            case M:
              return er(e, e.render, "ForwardRef");
            case J:
              var o = e.displayName || null;
              return o !== null ? o : de(e.type) || "Memo";
            case ce: {
              var c = e, d = c._payload, f = c._init;
              try {
                return de(f(d));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xe = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, rr, tr, We;
      We = {};
      function ze(e) {
        if (xe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ee(e) {
        if (xe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Rr(e, r) {
        var a = function() {
          rr || (rr = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function nr(e, r) {
        var a = function() {
          tr || (tr = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ar(e) {
        if (typeof e.ref == "string" && H.current && e.__self && H.current.stateNode !== e.__self) {
          var r = de(H.current.type);
          We[r] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), We[r] = !0);
        }
      }
      var Ae = function(e, r, a, o, c, d, f) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: G,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: f,
          // Record the component responsible for creating this element.
          _owner: d
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function Cr(e, r, a) {
        var o, c = {}, d = null, f = null, y = null, E = null;
        if (r != null) {
          ze(r) && (f = r.ref, ar(r)), Ee(r) && (ke(r.key), d = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            xe.call(r, o) && !Ne.hasOwnProperty(o) && (c[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          c.children = a;
        else if (P > 1) {
          for (var j = Array(P), x = 0; x < P; x++)
            j[x] = arguments[x + 2];
          Object.freeze && Object.freeze(j), c.children = j;
        }
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (o in I)
            c[o] === void 0 && (c[o] = I[o]);
        }
        if (d || f) {
          var V = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && Rr(c, V), f && nr(c, V);
        }
        return Ae(e, d, f, y, E, H.current, c);
      }
      function wr(e, r) {
        var a = Ae(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Sr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = i({}, e.props), d = e.key, f = e.ref, y = e._self, E = e._source, P = e._owner;
        if (r != null) {
          ze(r) && (f = r.ref, P = H.current), Ee(r) && (ke(r.key), d = "" + r.key);
          var j;
          e.type && e.type.defaultProps && (j = e.type.defaultProps);
          for (o in r)
            xe.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && j !== void 0 ? c[o] = j[o] : c[o] = r[o]);
        }
        var x = arguments.length - 2;
        if (x === 1)
          c.children = a;
        else if (x > 1) {
          for (var I = Array(x), V = 0; V < x; V++)
            I[V] = arguments[V + 2];
          c.children = I;
        }
        return Ae(e.type, d, f, y, E, P, c);
      }
      function Re(e) {
        return typeof e == "object" && e !== null && e.$$typeof === G;
      }
      var or = ".", Tr = ":";
      function Or(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var Ve = !1, ur = /\/+/g;
      function he(e) {
        return e.replace(ur, "$&/");
      }
      function De(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), Or("" + e.key)) : r.toString(36);
      }
      function Ce(e, r, a, o, c) {
        var d = typeof e;
        (d === "undefined" || d === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (d) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case G:
                case te:
                  f = !0;
              }
          }
        if (f) {
          var y = e, E = c(y), P = o === "" ? or + De(y, 0) : o;
          if (Le(E)) {
            var j = "";
            P != null && (j = he(P) + "/"), Ce(E, r, j, "", function(Wt) {
              return Wt;
            });
          } else E != null && (Re(E) && (E.key && (!y || y.key !== E.key) && ke(E.key), E = wr(
            E,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (E.key && (!y || y.key !== E.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              he("" + E.key) + "/"
            ) : "") + P
          )), r.push(E));
          return 1;
        }
        var x, I, V = 0, z = o === "" ? or : o + Tr;
        if (Le(e))
          for (var gr = 0; gr < e.length; gr++)
            x = e[gr], I = z + De(x, gr), V += Ce(x, r, a, I, c);
        else {
          var Yr = A(e);
          if (typeof Yr == "function") {
            var dt = e;
            Yr === dt.entries && (Ve || se("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ve = !0);
            for (var Mt = Yr.call(dt), pt, Nt = 0; !(pt = Mt.next()).done; )
              x = pt.value, I = z + De(x, Nt++), V += Ce(x, r, a, I, c);
          } else if (d === "object") {
            var vt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (vt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : vt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return V;
      }
      function Ie(e, r, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return Ce(e, o, "", "", function(d) {
          return r.call(a, d, c++);
        }), o;
      }
      function Pr(e) {
        var r = 0;
        return Ie(e, function() {
          r++;
        }), r;
      }
      function ir(e, r, a) {
        Ie(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function kr(e) {
        return Ie(e, function(r) {
          return r;
        }) || [];
      }
      function sr(e) {
        if (!Re(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function cr(e) {
        var r = {
          $$typeof: ee,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: L,
          _context: r
        };
        var a = !1, o = !1, c = !1;
        {
          var d = {
            $$typeof: ee,
            _context: r
          };
          Object.defineProperties(d, {
            Provider: {
              get: function() {
                return o || (o = !0, l("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(f) {
                r.Provider = f;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(f) {
                r._currentValue = f;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(f) {
                r._currentValue2 = f;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(f) {
                r._threadCount = f;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, l("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(f) {
                c || (se("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", f), c = !0);
              }
            }
          }), r.Consumer = d;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, qe = 0, Ke = 1, fr = 2;
      function jr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(d) {
            if (e._status === qe || e._status === Fe) {
              var f = e;
              f._status = Ke, f._result = d;
            }
          }, function(d) {
            if (e._status === qe || e._status === Fe) {
              var f = e;
              f._status = fr, f._result = d;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = qe, o._result = a;
          }
        }
        if (e._status === Ke) {
          var c = e._result;
          return c === void 0 && l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function xr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Fe,
          _result: e
        }, a = {
          $$typeof: ce,
          _payload: r,
          _init: jr
        };
        {
          var o, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(d) {
                l("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = d, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(d) {
                l("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = d, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Ar(e) {
        e != null && e.$$typeof === J ? l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? l("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && l("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: M,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var lr;
      lr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === ne || e === Z || X || e === ae || e === Y || e === re || q || e === $e || Te || Be || Oe || typeof e == "object" && e !== null && (e.$$typeof === ce || e.$$typeof === J || e.$$typeof === L || e.$$typeof === ee || e.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === lr || e.getModuleId !== void 0));
      }
      function u(e, r) {
        t(e) || l("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: J,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(c) {
              o = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function s() {
        var e = _e.current;
        return e === null && l(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function p(e) {
        var r = s();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? l("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && l("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function C(e) {
        var r = s();
        return r.useState(e);
      }
      function S(e, r, a) {
        var o = s();
        return o.useReducer(e, r, a);
      }
      function _(e) {
        var r = s();
        return r.useRef(e);
      }
      function h(e, r) {
        var a = s();
        return a.useEffect(e, r);
      }
      function B(e, r) {
        var a = s();
        return a.useInsertionEffect(e, r);
      }
      function D(e, r) {
        var a = s();
        return a.useLayoutEffect(e, r);
      }
      function F(e, r) {
        var a = s();
        return a.useCallback(e, r);
      }
      function Q(e, r) {
        var a = s();
        return a.useMemo(e, r);
      }
      function we(e, r, a) {
        var o = s();
        return o.useImperativeHandle(e, r, a);
      }
      function me(e, r) {
        {
          var a = s();
          return a.useDebugValue(e, r);
        }
      }
      function K() {
        var e = s();
        return e.useTransition();
      }
      function Ge(e) {
        var r = s();
        return r.useDeferredValue(e);
      }
      function Dr() {
        var e = s();
        return e.useId();
      }
      function Ir(e, r, a) {
        var o = s();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, zr, qr, Kr, Gr, Hr, Jr, Xr;
      function Qr() {
      }
      Qr.__reactDisabledLog = !0;
      function bt() {
        {
          if (He === 0) {
            zr = console.log, qr = console.info, Kr = console.warn, Gr = console.error, Hr = console.group, Jr = console.groupCollapsed, Xr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Qr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          He++;
        }
      }
      function Et() {
        {
          if (He--, He === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: i({}, e, {
                value: zr
              }),
              info: i({}, e, {
                value: qr
              }),
              warn: i({}, e, {
                value: Kr
              }),
              error: i({}, e, {
                value: Gr
              }),
              group: i({}, e, {
                value: Hr
              }),
              groupCollapsed: i({}, e, {
                value: Jr
              }),
              groupEnd: i({}, e, {
                value: Xr
              })
            });
          }
          He < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Fr = U.ReactCurrentDispatcher, $r;
      function dr(e, r, a) {
        {
          if ($r === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              $r = o && o[1] || "";
            }
          return `
` + $r + e;
        }
      }
      var Lr = !1, pr;
      {
        var Rt = typeof WeakMap == "function" ? WeakMap : Map;
        pr = new Rt();
      }
      function Zr(e, r) {
        if (!e || Lr)
          return "";
        {
          var a = pr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Lr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var d;
        d = Fr.current, Fr.current = null, bt();
        try {
          if (r) {
            var f = function() {
              throw Error();
            };
            if (Object.defineProperty(f.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(f, []);
              } catch (z) {
                o = z;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (z) {
                o = z;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (z) {
              o = z;
            }
            e();
          }
        } catch (z) {
          if (z && o && typeof z.stack == "string") {
            for (var y = z.stack.split(`
`), E = o.stack.split(`
`), P = y.length - 1, j = E.length - 1; P >= 1 && j >= 0 && y[P] !== E[j]; )
              j--;
            for (; P >= 1 && j >= 0; P--, j--)
              if (y[P] !== E[j]) {
                if (P !== 1 || j !== 1)
                  do
                    if (P--, j--, j < 0 || y[P] !== E[j]) {
                      var x = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && pr.set(e, x), x;
                    }
                  while (P >= 1 && j >= 0);
                break;
              }
          }
        } finally {
          Lr = !1, Fr.current = d, Et(), Error.prepareStackTrace = c;
        }
        var I = e ? e.displayName || e.name : "", V = I ? dr(I) : "";
        return typeof e == "function" && pr.set(e, V), V;
      }
      function Ct(e, r, a) {
        return Zr(e, !1);
      }
      function wt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function vr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Zr(e, wt(e));
        if (typeof e == "string")
          return dr(e);
        switch (e) {
          case Y:
            return dr("Suspense");
          case re:
            return dr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case M:
              return Ct(e.render);
            case J:
              return vr(e.type, r, a);
            case ce: {
              var o = e, c = o._payload, d = o._init;
              try {
                return vr(d(c), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var et = {}, rt = U.ReactDebugCurrentFrame;
      function yr(e) {
        if (e) {
          var r = e._owner, a = vr(e.type, e._source, r ? r.type : null);
          rt.setExtraStackFrame(a);
        } else
          rt.setExtraStackFrame(null);
      }
      function St(e, r, a, o, c) {
        {
          var d = Function.call.bind(xe);
          for (var f in e)
            if (d(e, f)) {
              var y = void 0;
              try {
                if (typeof e[f] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[f](r, f, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (yr(c), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof y), yr(null)), y instanceof Error && !(y.message in et) && (et[y.message] = !0, yr(c), l("Failed %s type: %s", a, y.message), yr(null));
            }
        }
      }
      function Ye(e) {
        if (e) {
          var r = e._owner, a = vr(e.type, e._source, r ? r.type : null);
          Se(a);
        } else
          Se(null);
      }
      var Mr;
      Mr = !1;
      function tt() {
        if (H.current) {
          var e = de(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Tt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Ot(e) {
        return e != null ? Tt(e.__source) : "";
      }
      var nt = {};
      function Pt(e) {
        var r = tt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function at(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Pt(r);
          if (!nt[a]) {
            nt[a] = !0;
            var o = "";
            e && e._owner && e._owner !== H.current && (o = " It was passed a child from " + de(e._owner.type) + "."), Ye(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ye(null);
          }
        }
      }
      function ot(e, r) {
        if (typeof e == "object") {
          if (Le(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Re(o) && at(o, r);
            }
          else if (Re(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = A(e);
            if (typeof c == "function" && c !== e.entries)
              for (var d = c.call(e), f; !(f = d.next()).done; )
                Re(f.value) && at(f.value, r);
          }
        }
      }
      function ut(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === J))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = de(r);
            St(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Mr) {
            Mr = !0;
            var c = de(r);
            l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function kt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ye(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ye(null);
              break;
            }
          }
          e.ref !== null && (Ye(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
        }
      }
      function it(e, r, a) {
        var o = t(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = Ot(r);
          d ? c += d : c += tt();
          var f;
          e === null ? f = "null" : Le(e) ? f = "array" : e !== void 0 && e.$$typeof === G ? (f = "<" + (de(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, c);
        }
        var y = Cr.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            ot(arguments[E], e);
        return e === ne ? kt(y) : ut(y), y;
      }
      var st = !1;
      function jt(e) {
        var r = it.bind(null, e);
        return r.type = e, st || (st = !0, se("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return se("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function xt(e, r, a) {
        for (var o = Sr.apply(this, arguments), c = 2; c < arguments.length; c++)
          ot(arguments[c], o.type);
        return ut(o), o;
      }
      function At(e, r) {
        var a = ie.transition;
        ie.transition = {};
        var o = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ie.transition = a, a === null && o._updatedFibers) {
            var c = o._updatedFibers.size;
            c > 10 && se("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ct = !1, hr = null;
      function Dt(e) {
        if (hr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = $ && $[r];
            hr = a.call($, "timers").setImmediate;
          } catch {
            hr = function(c) {
              ct === !1 && (ct = !0, typeof MessageChannel > "u" && l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var d = new MessageChannel();
              d.port1.onmessage = c, d.port2.postMessage(void 0);
            };
          }
        return hr(e);
      }
      var Ue = 0, ft = !1;
      function lt(e) {
        {
          var r = Ue;
          Ue++, N.current === null && (N.current = []);
          var a = N.isBatchingLegacy, o;
          try {
            if (N.isBatchingLegacy = !0, o = e(), !a && N.didScheduleLegacyUpdate) {
              var c = N.current;
              c !== null && (N.didScheduleLegacyUpdate = !1, Vr(c));
            }
          } catch (I) {
            throw mr(r), I;
          } finally {
            N.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var d = o, f = !1, y = {
              then: function(I, V) {
                f = !0, d.then(function(z) {
                  mr(r), Ue === 0 ? Nr(z, I, V) : I(z);
                }, function(z) {
                  mr(r), V(z);
                });
              }
            };
            return !ft && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              f || (ft = !0, l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (mr(r), Ue === 0) {
              var P = N.current;
              P !== null && (Vr(P), N.current = null);
              var j = {
                then: function(I, V) {
                  N.current === null ? (N.current = [], Nr(E, I, V)) : I(E);
                }
              };
              return j;
            } else {
              var x = {
                then: function(I, V) {
                  I(E);
                }
              };
              return x;
            }
          }
        }
      }
      function mr(e) {
        e !== Ue - 1 && l("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function Nr(e, r, a) {
        {
          var o = N.current;
          if (o !== null)
            try {
              Vr(o), Dt(function() {
                o.length === 0 ? (N.current = null, r(e)) : Nr(e, r, a);
              });
            } catch (c) {
              a(c);
            }
          else
            r(e);
        }
      }
      var Wr = !1;
      function Vr(e) {
        if (!Wr) {
          Wr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Wr = !1;
          }
        }
      }
      var It = it, Ft = xt, $t = jt, Lt = {
        map: Ie,
        forEach: ir,
        count: Pr,
        toArray: kr,
        only: sr
      };
      v.Children = Lt, v.Component = b, v.Fragment = ne, v.Profiler = Z, v.PureComponent = w, v.StrictMode = ae, v.Suspense = Y, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, v.act = lt, v.cloneElement = Ft, v.createContext = cr, v.createElement = It, v.createFactory = $t, v.createRef = br, v.forwardRef = Ar, v.isValidElement = Re, v.lazy = xr, v.memo = u, v.startTransition = At, v.unstable_act = lt, v.useCallback = F, v.useContext = p, v.useDebugValue = me, v.useDeferredValue = Ge, v.useEffect = h, v.useId = Dr, v.useImperativeHandle = we, v.useInsertionEffect = B, v.useLayoutEffect = D, v.useMemo = Q, v.useReducer = S, v.useRef = _, v.useState = C, v.useSyncExternalStore = Ir, v.useTransition = K, v.version = pe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Qe, Qe.exports)), Qe.exports;
}
var mt;
function Br() {
  return mt || (mt = 1, process.env.NODE_ENV === "production" ? _r.exports = Vt() : _r.exports = Yt()), _r.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function Ut() {
  if (gt) return Je;
  gt = 1;
  var $ = Br(), v = Symbol.for("react.element"), pe = Symbol.for("react.fragment"), G = Object.prototype.hasOwnProperty, te = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(Z, L, ee) {
    var M, Y = {}, re = null, J = null;
    ee !== void 0 && (re = "" + ee), L.key !== void 0 && (re = "" + L.key), L.ref !== void 0 && (J = L.ref);
    for (M in L) G.call(L, M) && !ne.hasOwnProperty(M) && (Y[M] = L[M]);
    if (Z && Z.defaultProps) for (M in L = Z.defaultProps, L) Y[M] === void 0 && (Y[M] = L[M]);
    return { $$typeof: v, type: Z, key: re, ref: J, props: Y, _owner: te.current };
  }
  return Je.Fragment = pe, Je.jsx = ae, Je.jsxs = ae, Je;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function Bt() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var $ = Br(), v = Symbol.for("react.element"), pe = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), Z = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), ce = Symbol.iterator, $e = "@@iterator";
    function oe(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = ce && t[ce] || t[$e];
      return typeof u == "function" ? u : null;
    }
    var ue = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(t) {
      {
        for (var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
          s[p - 1] = arguments[p];
        _e("error", t, s);
      }
    }
    function _e(t, u, s) {
      {
        var p = ue.ReactDebugCurrentFrame, C = p.getStackAddendum();
        C !== "" && (u += "%s", s = s.concat([C]));
        var S = s.map(function(_) {
          return String(_);
        });
        S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var ie = !1, N = !1, H = !1, fe = !1, ve = !1, Se;
    Se = Symbol.for("react.module.reference");
    function Te(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === G || t === ne || ve || t === te || t === ee || t === M || fe || t === J || ie || N || H || typeof t == "object" && t !== null && (t.$$typeof === re || t.$$typeof === Y || t.$$typeof === ae || t.$$typeof === Z || t.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Se || t.getModuleId !== void 0));
    }
    function Be(t, u, s) {
      var p = t.displayName;
      if (p)
        return p;
      var C = u.displayName || u.name || "";
      return C !== "" ? s + "(" + C + ")" : s;
    }
    function Oe(t) {
      return t.displayName || "Context";
    }
    function q(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case G:
          return "Fragment";
        case pe:
          return "Portal";
        case ne:
          return "Profiler";
        case te:
          return "StrictMode";
        case ee:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Z:
            var u = t;
            return Oe(u) + ".Consumer";
          case ae:
            var s = t;
            return Oe(s._context) + ".Provider";
          case L:
            return Be(t, t.render, "ForwardRef");
          case Y:
            var p = t.displayName || null;
            return p !== null ? p : q(t.type) || "Memo";
          case re: {
            var C = t, S = C._payload, _ = C._init;
            try {
              return q(_(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, U = 0, se, l, le, Pe, ye, n, i;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function b() {
      {
        if (U === 0) {
          se = console.log, l = console.info, le = console.warn, Pe = console.error, ye = console.group, n = console.groupCollapsed, i = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: g,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        U++;
      }
    }
    function R() {
      {
        if (U--, U === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, t, {
              value: se
            }),
            info: X({}, t, {
              value: l
            }),
            warn: X({}, t, {
              value: le
            }),
            error: X({}, t, {
              value: Pe
            }),
            group: X({}, t, {
              value: ye
            }),
            groupCollapsed: X({}, t, {
              value: n
            }),
            groupEnd: X({}, t, {
              value: i
            })
          });
        }
        U < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = ue.ReactCurrentDispatcher, O;
    function T(t, u, s) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (C) {
            var p = C.stack.trim().match(/\n( *(at )?)/);
            O = p && p[1] || "";
          }
        return `
` + O + t;
      }
    }
    var w = !1, W;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      W = new br();
    }
    function Ze(t, u) {
      if (!t || w)
        return "";
      {
        var s = W.get(t);
        if (s !== void 0)
          return s;
      }
      var p;
      w = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = k.current, k.current = null, b();
      try {
        if (u) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (K) {
              p = K;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (K) {
              p = K;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            p = K;
          }
          t();
        }
      } catch (K) {
        if (K && p && typeof K.stack == "string") {
          for (var h = K.stack.split(`
`), B = p.stack.split(`
`), D = h.length - 1, F = B.length - 1; D >= 1 && F >= 0 && h[D] !== B[F]; )
            F--;
          for (; D >= 1 && F >= 0; D--, F--)
            if (h[D] !== B[F]) {
              if (D !== 1 || F !== 1)
                do
                  if (D--, F--, F < 0 || h[D] !== B[F]) {
                    var Q = `
` + h[D].replace(" at new ", " at ");
                    return t.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", t.displayName)), typeof t == "function" && W.set(t, Q), Q;
                  }
                while (D >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        w = !1, k.current = S, R(), Error.prepareStackTrace = C;
      }
      var we = t ? t.displayName || t.name : "", me = we ? T(we) : "";
      return typeof t == "function" && W.set(t, me), me;
    }
    function Le(t, u, s) {
      return Ze(t, !1);
    }
    function Er(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Me(t, u, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ze(t, Er(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case ee:
          return T("Suspense");
        case M:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case L:
            return Le(t.render);
          case Y:
            return Me(t.type, u, s);
          case re: {
            var p = t, C = p._payload, S = p._init;
            try {
              return Me(S(C), u, s);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, ke = {}, er = ue.ReactDebugCurrentFrame;
    function je(t) {
      if (t) {
        var u = t._owner, s = Me(t.type, t._source, u ? u.type : null);
        er.setExtraStackFrame(s);
      } else
        er.setExtraStackFrame(null);
    }
    function de(t, u, s, p, C) {
      {
        var S = Function.call.bind(be);
        for (var _ in t)
          if (S(t, _)) {
            var h = void 0;
            try {
              if (typeof t[_] != "function") {
                var B = Error((p || "React class") + ": " + s + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              h = t[_](u, _, p, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              h = D;
            }
            h && !(h instanceof Error) && (je(C), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", s, _, typeof h), je(null)), h instanceof Error && !(h.message in ke) && (ke[h.message] = !0, je(C), A("Failed %s type: %s", s, h.message), je(null));
          }
      }
    }
    var xe = Array.isArray;
    function Ne(t) {
      return xe(t);
    }
    function rr(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, s = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function tr(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function ze(t) {
      if (tr(t))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(t)), We(t);
    }
    var Ee = ue.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nr, ar, Ae;
    Ae = {};
    function Cr(t) {
      if (be.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function wr(t) {
      if (be.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Sr(t, u) {
      if (typeof t.ref == "string" && Ee.current && u && Ee.current.stateNode !== u) {
        var s = q(Ee.current.type);
        Ae[s] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(Ee.current.type), t.ref), Ae[s] = !0);
      }
    }
    function Re(t, u) {
      {
        var s = function() {
          nr || (nr = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function or(t, u) {
      {
        var s = function() {
          ar || (ar = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Tr = function(t, u, s, p, C, S, _) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: s,
        props: _,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Or(t, u, s, p, C) {
      {
        var S, _ = {}, h = null, B = null;
        s !== void 0 && (ze(s), h = "" + s), wr(u) && (ze(u.key), h = "" + u.key), Cr(u) && (B = u.ref, Sr(u, C));
        for (S in u)
          be.call(u, S) && !Rr.hasOwnProperty(S) && (_[S] = u[S]);
        if (t && t.defaultProps) {
          var D = t.defaultProps;
          for (S in D)
            _[S] === void 0 && (_[S] = D[S]);
        }
        if (h || B) {
          var F = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && Re(_, F), B && or(_, F);
        }
        return Tr(t, h, B, C, p, Ee.current, _);
      }
    }
    var Ve = ue.ReactCurrentOwner, ur = ue.ReactDebugCurrentFrame;
    function he(t) {
      if (t) {
        var u = t._owner, s = Me(t.type, t._source, u ? u.type : null);
        ur.setExtraStackFrame(s);
      } else
        ur.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Ce(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function Ie() {
      {
        if (Ve.current) {
          var t = q(Ve.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Pr(t) {
      return "";
    }
    var ir = {};
    function kr(t) {
      {
        var u = Ie();
        if (!u) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (u = `

Check the top-level render call using <` + s + ">.");
        }
        return u;
      }
    }
    function sr(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = kr(u);
        if (ir[s])
          return;
        ir[s] = !0;
        var p = "";
        t && t._owner && t._owner !== Ve.current && (p = " It was passed a child from " + q(t._owner.type) + "."), he(t), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, p), he(null);
      }
    }
    function cr(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var s = 0; s < t.length; s++) {
            var p = t[s];
            Ce(p) && sr(p, u);
          }
        else if (Ce(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = oe(t);
          if (typeof C == "function" && C !== t.entries)
            for (var S = C.call(t), _; !(_ = S.next()).done; )
              Ce(_.value) && sr(_.value, u);
        }
      }
    }
    function Fe(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var s;
        if (typeof u == "function")
          s = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === Y))
          s = u.propTypes;
        else
          return;
        if (s) {
          var p = q(u);
          de(s, t.props, "prop", p, t);
        } else if (u.PropTypes !== void 0 && !De) {
          De = !0;
          var C = q(u);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qe(t) {
      {
        for (var u = Object.keys(t.props), s = 0; s < u.length; s++) {
          var p = u[s];
          if (p !== "children" && p !== "key") {
            he(t), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), he(null);
            break;
          }
        }
        t.ref !== null && (he(t), A("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    var Ke = {};
    function fr(t, u, s, p, C, S) {
      {
        var _ = Te(t);
        if (!_) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Pr();
          B ? h += B : h += Ie();
          var D;
          t === null ? D = "null" : Ne(t) ? D = "array" : t !== void 0 && t.$$typeof === v ? (D = "<" + (q(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : D = typeof t, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, h);
        }
        var F = Or(t, u, s, C, S);
        if (F == null)
          return F;
        if (_) {
          var Q = u.children;
          if (Q !== void 0)
            if (p)
              if (Ne(Q)) {
                for (var we = 0; we < Q.length; we++)
                  cr(Q[we], t);
                Object.freeze && Object.freeze(Q);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(Q, t);
        }
        if (be.call(u, "key")) {
          var me = q(t), K = Object.keys(u).filter(function(Ir) {
            return Ir !== "key";
          }), Ge = K.length > 0 ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[me + Ge]) {
            var Dr = K.length > 0 ? "{" + K.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ge, me, Dr, me), Ke[me + Ge] = !0;
          }
        }
        return t === G ? qe(F) : Fe(F), F;
      }
    }
    function jr(t, u, s) {
      return fr(t, u, s, !0);
    }
    function xr(t, u, s) {
      return fr(t, u, s, !1);
    }
    var Ar = xr, lr = jr;
    Xe.Fragment = G, Xe.jsx = Ar, Xe.jsxs = lr;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Ur.exports = Ut() : Ur.exports = Bt();
var ge = Ur.exports;
function zt({ to: $ }) {
  return /* @__PURE__ */ ge.jsxs(
    "a",
    {
      href: $,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "github-corner",
      children: [
        /* @__PURE__ */ ge.jsx("span", { className: "sr-only", children: "View source on GitHub" }),
        /* @__PURE__ */ ge.jsxs("svg", { width: "80", height: "80", viewBox: "0 0 250 250", "aria-hidden": "true", children: [
          /* @__PURE__ */ ge.jsx("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
          /* @__PURE__ */ ge.jsx(
            "path",
            {
              d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
              fill: "currentColor",
              className: "octo-arm"
            }
          ),
          /* @__PURE__ */ ge.jsx(
            "path",
            {
              d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
              fill: "currentColor",
              className: "octo-body"
            }
          )
        ] })
      ]
    }
  );
}
var qt = Br();
const Kt = qt.createContext(null);
function Gt({
  githubUrl: $,
  name: v,
  description: pe,
  useAuth: G,
  children: te
}) {
  return /* @__PURE__ */ ge.jsxs(
    Kt.Provider,
    {
      value: { githubUrl: $, name: v, description: pe, useAuth: G },
      children: [
        $ ? /* @__PURE__ */ ge.jsx(zt, { to: $ }) : null,
        te
      ]
    }
  );
}
function Ht({ children: $ }) {
  return /* @__PURE__ */ ge.jsx("div", { id: "root", children: $ });
}
export {
  Gt as SequenceDemoKit,
  Ht as SsrRoot
};
