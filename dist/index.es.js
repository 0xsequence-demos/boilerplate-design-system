function ek(d, h) {
  for (var m = 0; m < h.length; m++) {
    const E = h[m];
    if (typeof E != "string" && !Array.isArray(E)) {
      for (const R in E)
        if (R !== "default" && !(R in d)) {
          const T = Object.getOwnPropertyDescriptor(E, R);
          T && Object.defineProperty(d, R, T.get ? T : {
            enumerable: !0,
            get: () => E[R]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
function TR(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var nS = { exports: {} }, hv = {}, py = { exports: {} }, At = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function tk() {
  if (iR) return At;
  iR = 1;
  var d = Symbol.for("react.element"), h = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), y = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), U = Symbol.iterator;
  function H(j) {
    return j === null || typeof j != "object" ? null : (j = U && j[U] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, G = Object.assign, re = {};
  function oe(j, te, Xe) {
    this.props = j, this.context = te, this.refs = re, this.updater = Xe || P;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(j, te) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, te, "setState");
  }, oe.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function Se() {
  }
  Se.prototype = oe.prototype;
  function de(j, te, Xe) {
    this.props = j, this.context = te, this.refs = re, this.updater = Xe || P;
  }
  var me = de.prototype = new Se();
  me.constructor = de, G(me, oe.prototype), me.isPureReactComponent = !0;
  var Ee = Array.isArray, ue = Object.prototype.hasOwnProperty, _e = { current: null }, he = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ot(j, te, Xe) {
    var nt, mt = {}, pt = null, wt = null;
    if (te != null) for (nt in te.ref !== void 0 && (wt = te.ref), te.key !== void 0 && (pt = "" + te.key), te) ue.call(te, nt) && !he.hasOwnProperty(nt) && (mt[nt] = te[nt]);
    var yt = arguments.length - 2;
    if (yt === 1) mt.children = Xe;
    else if (1 < yt) {
      for (var gt = Array(yt), Kt = 0; Kt < yt; Kt++) gt[Kt] = arguments[Kt + 2];
      mt.children = gt;
    }
    if (j && j.defaultProps) for (nt in yt = j.defaultProps, yt) mt[nt] === void 0 && (mt[nt] = yt[nt]);
    return { $$typeof: d, type: j, key: pt, ref: wt, props: mt, _owner: _e.current };
  }
  function Rt(j, te) {
    return { $$typeof: d, type: j.type, key: te, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function at(j) {
    return typeof j == "object" && j !== null && j.$$typeof === d;
  }
  function lt(j) {
    var te = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(Xe) {
      return te[Xe];
    });
  }
  var _t = /\/+/g;
  function Oe(j, te) {
    return typeof j == "object" && j !== null && j.key != null ? lt("" + j.key) : te.toString(36);
  }
  function Ue(j, te, Xe, nt, mt) {
    var pt = typeof j;
    (pt === "undefined" || pt === "boolean") && (j = null);
    var wt = !1;
    if (j === null) wt = !0;
    else switch (pt) {
      case "string":
      case "number":
        wt = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case d:
          case h:
            wt = !0;
        }
    }
    if (wt) return wt = j, mt = mt(wt), j = nt === "" ? "." + Oe(wt, 0) : nt, Ee(mt) ? (Xe = "", j != null && (Xe = j.replace(_t, "$&/") + "/"), Ue(mt, te, Xe, "", function(Kt) {
      return Kt;
    })) : mt != null && (at(mt) && (mt = Rt(mt, Xe + (!mt.key || wt && wt.key === mt.key ? "" : ("" + mt.key).replace(_t, "$&/") + "/") + j)), te.push(mt)), 1;
    if (wt = 0, nt = nt === "" ? "." : nt + ":", Ee(j)) for (var yt = 0; yt < j.length; yt++) {
      pt = j[yt];
      var gt = nt + Oe(pt, yt);
      wt += Ue(pt, te, Xe, gt, mt);
    }
    else if (gt = H(j), typeof gt == "function") for (j = gt.call(j), yt = 0; !(pt = j.next()).done; ) pt = pt.value, gt = nt + Oe(pt, yt++), wt += Ue(pt, te, Xe, gt, mt);
    else if (pt === "object") throw te = String(j), Error("Objects are not valid as a React child (found: " + (te === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : te) + "). If you meant to render a collection of children, use an array instead.");
    return wt;
  }
  function ht(j, te, Xe) {
    if (j == null) return j;
    var nt = [], mt = 0;
    return Ue(j, nt, "", "", function(pt) {
      return te.call(Xe, pt, mt++);
    }), nt;
  }
  function Ge(j) {
    if (j._status === -1) {
      var te = j._result;
      te = te(), te.then(function(Xe) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = Xe);
      }, function(Xe) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = Xe);
      }), j._status === -1 && (j._status = 0, j._result = te);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var xe = { current: null }, ee = { transition: null }, De = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: ee, ReactCurrentOwner: _e };
  function Ce() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return At.Children = { map: ht, forEach: function(j, te, Xe) {
    ht(j, function() {
      te.apply(this, arguments);
    }, Xe);
  }, count: function(j) {
    var te = 0;
    return ht(j, function() {
      te++;
    }), te;
  }, toArray: function(j) {
    return ht(j, function(te) {
      return te;
    }) || [];
  }, only: function(j) {
    if (!at(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, At.Component = oe, At.Fragment = m, At.Profiler = R, At.PureComponent = de, At.StrictMode = E, At.Suspense = k, At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = De, At.act = Ce, At.cloneElement = function(j, te, Xe) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var nt = G({}, j.props), mt = j.key, pt = j.ref, wt = j._owner;
    if (te != null) {
      if (te.ref !== void 0 && (pt = te.ref, wt = _e.current), te.key !== void 0 && (mt = "" + te.key), j.type && j.type.defaultProps) var yt = j.type.defaultProps;
      for (gt in te) ue.call(te, gt) && !he.hasOwnProperty(gt) && (nt[gt] = te[gt] === void 0 && yt !== void 0 ? yt[gt] : te[gt]);
    }
    var gt = arguments.length - 2;
    if (gt === 1) nt.children = Xe;
    else if (1 < gt) {
      yt = Array(gt);
      for (var Kt = 0; Kt < gt; Kt++) yt[Kt] = arguments[Kt + 2];
      nt.children = yt;
    }
    return { $$typeof: d, type: j.type, key: mt, ref: pt, props: nt, _owner: wt };
  }, At.createContext = function(j) {
    return j = { $$typeof: y, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: T, _context: j }, j.Consumer = j;
  }, At.createElement = ot, At.createFactory = function(j) {
    var te = ot.bind(null, j);
    return te.type = j, te;
  }, At.createRef = function() {
    return { current: null };
  }, At.forwardRef = function(j) {
    return { $$typeof: N, render: j };
  }, At.isValidElement = at, At.lazy = function(j) {
    return { $$typeof: F, _payload: { _status: -1, _result: j }, _init: Ge };
  }, At.memo = function(j, te) {
    return { $$typeof: O, type: j, compare: te === void 0 ? null : te };
  }, At.startTransition = function(j) {
    var te = ee.transition;
    ee.transition = {};
    try {
      j();
    } finally {
      ee.transition = te;
    }
  }, At.unstable_act = Ce, At.useCallback = function(j, te) {
    return xe.current.useCallback(j, te);
  }, At.useContext = function(j) {
    return xe.current.useContext(j);
  }, At.useDebugValue = function() {
  }, At.useDeferredValue = function(j) {
    return xe.current.useDeferredValue(j);
  }, At.useEffect = function(j, te) {
    return xe.current.useEffect(j, te);
  }, At.useId = function() {
    return xe.current.useId();
  }, At.useImperativeHandle = function(j, te, Xe) {
    return xe.current.useImperativeHandle(j, te, Xe);
  }, At.useInsertionEffect = function(j, te) {
    return xe.current.useInsertionEffect(j, te);
  }, At.useLayoutEffect = function(j, te) {
    return xe.current.useLayoutEffect(j, te);
  }, At.useMemo = function(j, te) {
    return xe.current.useMemo(j, te);
  }, At.useReducer = function(j, te, Xe) {
    return xe.current.useReducer(j, te, Xe);
  }, At.useRef = function(j) {
    return xe.current.useRef(j);
  }, At.useState = function(j) {
    return xe.current.useState(j);
  }, At.useSyncExternalStore = function(j, te, Xe) {
    return xe.current.useSyncExternalStore(j, te, Xe);
  }, At.useTransition = function() {
    return xe.current.useTransition();
  }, At.version = "18.3.1", At;
}
var yv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
yv.exports;
var oR;
function nk() {
  return oR || (oR = 1, function(d, h) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.3.1", E = Symbol.for("react.element"), R = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), O = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), oe = Symbol.iterator, Se = "@@iterator";
      function de(S) {
        if (S === null || typeof S != "object")
          return null;
        var _ = oe && S[oe] || S[Se];
        return typeof _ == "function" ? _ : null;
      }
      var me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ee = {
        transition: null
      }, ue = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, _e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, he = {}, ot = null;
      function Rt(S) {
        ot = S;
      }
      he.setExtraStackFrame = function(S) {
        ot = S;
      }, he.getCurrentStack = null, he.getStackAddendum = function() {
        var S = "";
        ot && (S += ot);
        var _ = he.getCurrentStack;
        return _ && (S += _() || ""), S;
      };
      var at = !1, lt = !1, _t = !1, Oe = !1, Ue = !1, ht = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: Ee,
        ReactCurrentOwner: _e
      };
      ht.ReactDebugCurrentFrame = he, ht.ReactCurrentActQueue = ue;
      function Ge(S) {
        {
          for (var _ = arguments.length, W = new Array(_ > 1 ? _ - 1 : 0), X = 1; X < _; X++)
            W[X - 1] = arguments[X];
          ee("warn", S, W);
        }
      }
      function xe(S) {
        {
          for (var _ = arguments.length, W = new Array(_ > 1 ? _ - 1 : 0), X = 1; X < _; X++)
            W[X - 1] = arguments[X];
          ee("error", S, W);
        }
      }
      function ee(S, _, W) {
        {
          var X = ht.ReactDebugCurrentFrame, ye = X.getStackAddendum();
          ye !== "" && (_ += "%s", W = W.concat([ye]));
          var et = W.map(function(be) {
            return String(be);
          });
          et.unshift("Warning: " + _), Function.prototype.apply.call(console[S], console, et);
        }
      }
      var De = {};
      function Ce(S, _) {
        {
          var W = S.constructor, X = W && (W.displayName || W.name) || "ReactClass", ye = X + "." + _;
          if (De[ye])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", _, X), De[ye] = !0;
        }
      }
      var j = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(S) {
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
        enqueueForceUpdate: function(S, _, W) {
          Ce(S, "forceUpdate");
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
        enqueueReplaceState: function(S, _, W, X) {
          Ce(S, "replaceState");
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
        enqueueSetState: function(S, _, W, X) {
          Ce(S, "setState");
        }
      }, te = Object.assign, Xe = {};
      Object.freeze(Xe);
      function nt(S, _, W) {
        this.props = S, this.context = _, this.refs = Xe, this.updater = W || j;
      }
      nt.prototype.isReactComponent = {}, nt.prototype.setState = function(S, _) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, _, "setState");
      }, nt.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var mt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, pt = function(S, _) {
          Object.defineProperty(nt.prototype, S, {
            get: function() {
              Ge("%s(...) is deprecated in plain JavaScript React classes. %s", _[0], _[1]);
            }
          });
        };
        for (var wt in mt)
          mt.hasOwnProperty(wt) && pt(wt, mt[wt]);
      }
      function yt() {
      }
      yt.prototype = nt.prototype;
      function gt(S, _, W) {
        this.props = S, this.context = _, this.refs = Xe, this.updater = W || j;
      }
      var Kt = gt.prototype = new yt();
      Kt.constructor = gt, te(Kt, nt.prototype), Kt.isPureReactComponent = !0;
      function $n() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var or = Array.isArray;
      function Zt(S) {
        return or(S);
      }
      function Ln(S) {
        {
          var _ = typeof Symbol == "function" && Symbol.toStringTag, W = _ && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return W;
        }
      }
      function Mn(S) {
        try {
          return Tn(S), !1;
        } catch {
          return !0;
        }
      }
      function Tn(S) {
        return "" + S;
      }
      function gn(S) {
        if (Mn(S))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ln(S)), Tn(S);
      }
      function Sr(S, _, W) {
        var X = S.displayName;
        if (X)
          return X;
        var ye = _.displayName || _.name || "";
        return ye !== "" ? W + "(" + ye + ")" : W;
      }
      function In(S) {
        return S.displayName || "Context";
      }
      function Kn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case T:
            return "Fragment";
          case R:
            return "Portal";
          case N:
            return "Profiler";
          case y:
            return "StrictMode";
          case U:
            return "Suspense";
          case H:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case O:
              var _ = S;
              return In(_) + ".Consumer";
            case k:
              var W = S;
              return In(W._context) + ".Provider";
            case F:
              return Sr(S, S.render, "ForwardRef");
            case P:
              var X = S.displayName || null;
              return X !== null ? X : Kn(S.type) || "Memo";
            case G: {
              var ye = S, et = ye._payload, be = ye._init;
              try {
                return Kn(be(et));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Cr = Object.prototype.hasOwnProperty, Wr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, pa, lr;
      lr = {};
      function qr(S) {
        if (Cr.call(S, "ref")) {
          var _ = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function Sn(S) {
        if (Cr.call(S, "key")) {
          var _ = Object.getOwnPropertyDescriptor(S, "key").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function kr(S, _) {
        var W = function() {
          Er || (Er = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        W.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: W,
          configurable: !0
        });
      }
      function vi(S, _) {
        var W = function() {
          pa || (pa = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        W.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: W,
          configurable: !0
        });
      }
      function va(S) {
        if (typeof S.ref == "string" && _e.current && S.__self && _e.current.stateNode !== S.__self) {
          var _ = Kn(_e.current.type);
          lr[_] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _, S.ref), lr[_] = !0);
        }
      }
      var Re = function(S, _, W, X, ye, et, be) {
        var Ze = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: E,
          // Built-in properties that belong on the element
          type: S,
          key: _,
          ref: W,
          props: be,
          // Record the component responsible for creating this element.
          _owner: et
        };
        return Ze._store = {}, Object.defineProperty(Ze._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ze, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.defineProperty(Ze, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ye
        }), Object.freeze && (Object.freeze(Ze.props), Object.freeze(Ze)), Ze;
      };
      function We(S, _, W) {
        var X, ye = {}, et = null, be = null, Ze = null, Tt = null;
        if (_ != null) {
          qr(_) && (be = _.ref, va(_)), Sn(_) && (gn(_.key), et = "" + _.key), Ze = _.__self === void 0 ? null : _.__self, Tt = _.__source === void 0 ? null : _.__source;
          for (X in _)
            Cr.call(_, X) && !Wr.hasOwnProperty(X) && (ye[X] = _[X]);
        }
        var jt = arguments.length - 2;
        if (jt === 1)
          ye.children = W;
        else if (jt > 1) {
          for (var an = Array(jt), en = 0; en < jt; en++)
            an[en] = arguments[en + 2];
          Object.freeze && Object.freeze(an), ye.children = an;
        }
        if (S && S.defaultProps) {
          var on = S.defaultProps;
          for (X in on)
            ye[X] === void 0 && (ye[X] = on[X]);
        }
        if (et || be) {
          var un = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          et && kr(ye, un), be && vi(ye, un);
        }
        return Re(S, et, be, Ze, Tt, _e.current, ye);
      }
      function Ct(S, _) {
        var W = Re(S.type, _, S.ref, S._self, S._source, S._owner, S.props);
        return W;
      }
      function $t(S, _, W) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var X, ye = te({}, S.props), et = S.key, be = S.ref, Ze = S._self, Tt = S._source, jt = S._owner;
        if (_ != null) {
          qr(_) && (be = _.ref, jt = _e.current), Sn(_) && (gn(_.key), et = "" + _.key);
          var an;
          S.type && S.type.defaultProps && (an = S.type.defaultProps);
          for (X in _)
            Cr.call(_, X) && !Wr.hasOwnProperty(X) && (_[X] === void 0 && an !== void 0 ? ye[X] = an[X] : ye[X] = _[X]);
        }
        var en = arguments.length - 2;
        if (en === 1)
          ye.children = W;
        else if (en > 1) {
          for (var on = Array(en), un = 0; un < en; un++)
            on[un] = arguments[un + 2];
          ye.children = on;
        }
        return Re(S.type, et, be, Ze, Tt, jt, ye);
      }
      function Yt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === E;
      }
      var Nn = ".", Cn = ":";
      function xr(S) {
        var _ = /[=:]/g, W = {
          "=": "=0",
          ":": "=2"
        }, X = S.replace(_, function(ye) {
          return W[ye];
        });
        return "$" + X;
      }
      var Jt = !1, Or = /\/+/g;
      function Wt(S) {
        return S.replace(Or, "$&/");
      }
      function qt(S, _) {
        return typeof S == "object" && S !== null && S.key != null ? (gn(S.key), xr("" + S.key)) : _.toString(36);
      }
      function ei(S, _, W, X, ye) {
        var et = typeof S;
        (et === "undefined" || et === "boolean") && (S = null);
        var be = !1;
        if (S === null)
          be = !0;
        else
          switch (et) {
            case "string":
            case "number":
              be = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case E:
                case R:
                  be = !0;
              }
          }
        if (be) {
          var Ze = S, Tt = ye(Ze), jt = X === "" ? Nn + qt(Ze, 0) : X;
          if (Zt(Tt)) {
            var an = "";
            jt != null && (an = Wt(jt) + "/"), ei(Tt, _, an, "", function(vd) {
              return vd;
            });
          } else Tt != null && (Yt(Tt) && (Tt.key && (!Ze || Ze.key !== Tt.key) && gn(Tt.key), Tt = Ct(
            Tt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            W + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Tt.key && (!Ze || Ze.key !== Tt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Wt("" + Tt.key) + "/"
            ) : "") + jt
          )), _.push(Tt));
          return 1;
        }
        var en, on, un = 0, Nt = X === "" ? Nn : X + Cn;
        if (Zt(S))
          for (var Fi = 0; Fi < S.length; Fi++)
            en = S[Fi], on = Nt + qt(en, Fi), un += ei(en, _, W, on, ye);
        else {
          var tu = de(S);
          if (typeof tu == "function") {
            var cs = S;
            tu === cs.entries && (Jt || Ge("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var pd = tu.call(cs), ai, fs = 0; !(ai = pd.next()).done; )
              en = ai.value, on = Nt + qt(en, fs++), un += ei(en, _, W, on, ye);
          } else if (et === "object") {
            var ds = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (ds === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : ds) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return un;
      }
      function ka(S, _, W) {
        if (S == null)
          return S;
        var X = [], ye = 0;
        return ei(S, X, "", "", function(et) {
          return _.call(W, et, ye++);
        }), X;
      }
      function vo(S) {
        var _ = 0;
        return ka(S, function() {
          _++;
        }), _;
      }
      function tl(S, _, W) {
        ka(S, function() {
          _.apply(this, arguments);
        }, W);
      }
      function Il(S) {
        return ka(S, function(_) {
          return _;
        }) || [];
      }
      function zi(S) {
        if (!Yt(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function ho(S) {
        var _ = {
          $$typeof: O,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
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
        _.Provider = {
          $$typeof: k,
          _context: _
        };
        var W = !1, X = !1, ye = !1;
        {
          var et = {
            $$typeof: O,
            _context: _
          };
          Object.defineProperties(et, {
            Provider: {
              get: function() {
                return X || (X = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), _.Provider;
              },
              set: function(be) {
                _.Provider = be;
              }
            },
            _currentValue: {
              get: function() {
                return _._currentValue;
              },
              set: function(be) {
                _._currentValue = be;
              }
            },
            _currentValue2: {
              get: function() {
                return _._currentValue2;
              },
              set: function(be) {
                _._currentValue2 = be;
              }
            },
            _threadCount: {
              get: function() {
                return _._threadCount;
              },
              set: function(be) {
                _._threadCount = be;
              }
            },
            Consumer: {
              get: function() {
                return W || (W = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), _.Consumer;
              }
            },
            displayName: {
              get: function() {
                return _.displayName;
              },
              set: function(be) {
                ye || (Ge("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", be), ye = !0);
              }
            }
          }), _.Consumer = et;
        }
        return _._currentRenderer = null, _._currentRenderer2 = null, _;
      }
      var ha = -1, hi = 0, ma = 1, ti = 2;
      function Lr(S) {
        if (S._status === ha) {
          var _ = S._result, W = _();
          if (W.then(function(et) {
            if (S._status === hi || S._status === ha) {
              var be = S;
              be._status = ma, be._result = et;
            }
          }, function(et) {
            if (S._status === hi || S._status === ha) {
              var be = S;
              be._status = ti, be._result = et;
            }
          }), S._status === ha) {
            var X = S;
            X._status = hi, X._result = W;
          }
        }
        if (S._status === ma) {
          var ye = S._result;
          return ye === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ye), "default" in ye || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ye), ye.default;
        } else
          throw S._result;
      }
      function ya(S) {
        var _ = {
          // We use these fields to store the result.
          _status: ha,
          _result: S
        }, W = {
          $$typeof: G,
          _payload: _,
          _init: Lr
        };
        {
          var X, ye;
          Object.defineProperties(W, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(et) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = et, Object.defineProperty(W, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ye;
              },
              set: function(et) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ye = et, Object.defineProperty(W, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return W;
      }
      function mi(S) {
        S != null && S.$$typeof === P ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? xe("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var _ = {
          $$typeof: F,
          render: S
        };
        {
          var W;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(X) {
              W = X, !S.name && !S.displayName && (S.displayName = X);
            }
          });
        }
        return _;
      }
      var yi;
      yi = Symbol.for("react.module.reference");
      function D(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === T || S === N || Ue || S === y || S === U || S === H || Oe || S === re || at || lt || _t || typeof S == "object" && S !== null && (S.$$typeof === G || S.$$typeof === P || S.$$typeof === k || S.$$typeof === O || S.$$typeof === F || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === yi || S.getModuleId !== void 0));
      }
      function se(S, _) {
        D(S) || xe("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var W = {
          $$typeof: P,
          type: S,
          compare: _ === void 0 ? null : _
        };
        {
          var X;
          Object.defineProperty(W, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return X;
            },
            set: function(ye) {
              X = ye, !S.name && !S.displayName && (S.displayName = ye);
            }
          });
        }
        return W;
      }
      function ve() {
        var S = me.current;
        return S === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function $e(S) {
        var _ = ve();
        if (S._context !== void 0) {
          var W = S._context;
          W.Consumer === S ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : W.Provider === S && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return _.useContext(S);
      }
      function Dt(S) {
        var _ = ve();
        return _.useState(S);
      }
      function Lt(S, _, W) {
        var X = ve();
        return X.useReducer(S, _, W);
      }
      function Je(S) {
        var _ = ve();
        return _.useRef(S);
      }
      function Et(S, _) {
        var W = ve();
        return W.useEffect(S, _);
      }
      function Pn(S, _) {
        var W = ve();
        return W.useInsertionEffect(S, _);
      }
      function rn(S, _) {
        var W = ve();
        return W.useLayoutEffect(S, _);
      }
      function cn(S, _) {
        var W = ve();
        return W.useCallback(S, _);
      }
      function Rr(S, _) {
        var W = ve();
        return W.useMemo(S, _);
      }
      function gi(S, _, W) {
        var X = ve();
        return X.useImperativeHandle(S, _, W);
      }
      function Pt(S, _) {
        {
          var W = ve();
          return W.useDebugValue(S, _);
        }
      }
      function Zn() {
        var S = ve();
        return S.useTransition();
      }
      function Mr(S) {
        var _ = ve();
        return _.useDeferredValue(S);
      }
      function xt() {
        var S = ve();
        return S.useId();
      }
      function Oa(S, _, W) {
        var X = ve();
        return X.useSyncExternalStore(S, _, W);
      }
      var mo = 0, Yl, yo, Qr, os, Nr, ls, us;
      function hc() {
      }
      hc.__reactDisabledLog = !0;
      function Wl() {
        {
          if (mo === 0) {
            Yl = console.log, yo = console.info, Qr = console.warn, os = console.error, Nr = console.group, ls = console.groupCollapsed, us = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: hc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          mo++;
        }
      }
      function go() {
        {
          if (mo--, mo === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: te({}, S, {
                value: Yl
              }),
              info: te({}, S, {
                value: yo
              }),
              warn: te({}, S, {
                value: Qr
              }),
              error: te({}, S, {
                value: os
              }),
              group: te({}, S, {
                value: Nr
              }),
              groupCollapsed: te({}, S, {
                value: ls
              }),
              groupEnd: te({}, S, {
                value: us
              })
            });
          }
          mo < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ni = ht.ReactCurrentDispatcher, Ar;
      function So(S, _, W) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (ye) {
              var X = ye.stack.trim().match(/\n( *(at )?)/);
              Ar = X && X[1] || "";
            }
          return `
` + Ar + S;
        }
      }
      var Co = !1, Eo;
      {
        var ql = typeof WeakMap == "function" ? WeakMap : Map;
        Eo = new ql();
      }
      function Ql(S, _) {
        if (!S || Co)
          return "";
        {
          var W = Eo.get(S);
          if (W !== void 0)
            return W;
        }
        var X;
        Co = !0;
        var ye = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var et;
        et = ni.current, ni.current = null, Wl();
        try {
          if (_) {
            var be = function() {
              throw Error();
            };
            if (Object.defineProperty(be.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(be, []);
              } catch (Nt) {
                X = Nt;
              }
              Reflect.construct(S, [], be);
            } else {
              try {
                be.call();
              } catch (Nt) {
                X = Nt;
              }
              S.call(be.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Nt) {
              X = Nt;
            }
            S();
          }
        } catch (Nt) {
          if (Nt && X && typeof Nt.stack == "string") {
            for (var Ze = Nt.stack.split(`
`), Tt = X.stack.split(`
`), jt = Ze.length - 1, an = Tt.length - 1; jt >= 1 && an >= 0 && Ze[jt] !== Tt[an]; )
              an--;
            for (; jt >= 1 && an >= 0; jt--, an--)
              if (Ze[jt] !== Tt[an]) {
                if (jt !== 1 || an !== 1)
                  do
                    if (jt--, an--, an < 0 || Ze[jt] !== Tt[an]) {
                      var en = `
` + Ze[jt].replace(" at new ", " at ");
                      return S.displayName && en.includes("<anonymous>") && (en = en.replace("<anonymous>", S.displayName)), typeof S == "function" && Eo.set(S, en), en;
                    }
                  while (jt >= 1 && an >= 0);
                break;
              }
          }
        } finally {
          Co = !1, ni.current = et, go(), Error.prepareStackTrace = ye;
        }
        var on = S ? S.displayName || S.name : "", un = on ? So(on) : "";
        return typeof S == "function" && Eo.set(S, un), un;
      }
      function Ui(S, _, W) {
        return Ql(S, !1);
      }
      function dd(S) {
        var _ = S.prototype;
        return !!(_ && _.isReactComponent);
      }
      function Si(S, _, W) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return Ql(S, dd(S));
        if (typeof S == "string")
          return So(S);
        switch (S) {
          case U:
            return So("Suspense");
          case H:
            return So("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case F:
              return Ui(S.render);
            case P:
              return Si(S.type, _, W);
            case G: {
              var X = S, ye = X._payload, et = X._init;
              try {
                return Si(et(ye), _, W);
              } catch {
              }
            }
          }
        return "";
      }
      var Ft = {}, Gl = ht.ReactDebugCurrentFrame;
      function nl(S) {
        if (S) {
          var _ = S._owner, W = Si(S.type, S._source, _ ? _.type : null);
          Gl.setExtraStackFrame(W);
        } else
          Gl.setExtraStackFrame(null);
      }
      function Xl(S, _, W, X, ye) {
        {
          var et = Function.call.bind(Cr);
          for (var be in S)
            if (et(S, be)) {
              var Ze = void 0;
              try {
                if (typeof S[be] != "function") {
                  var Tt = Error((X || "React class") + ": " + W + " type `" + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Tt.name = "Invariant Violation", Tt;
                }
                Ze = S[be](_, be, X, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (jt) {
                Ze = jt;
              }
              Ze && !(Ze instanceof Error) && (nl(ye), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", W, be, typeof Ze), nl(null)), Ze instanceof Error && !(Ze.message in Ft) && (Ft[Ze.message] = !0, nl(ye), xe("Failed %s type: %s", W, Ze.message), nl(null));
            }
        }
      }
      function Mt(S) {
        if (S) {
          var _ = S._owner, W = Si(S.type, S._source, _ ? _.type : null);
          Rt(W);
        } else
          Rt(null);
      }
      var Kl;
      Kl = !1;
      function Zl() {
        if (_e.current) {
          var S = Kn(_e.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function ct(S) {
        if (S !== void 0) {
          var _ = S.fileName.replace(/^.*[\\\/]/, ""), W = S.lineNumber;
          return `

Check your code at ` + _ + ":" + W + ".";
        }
        return "";
      }
      function rl(S) {
        return S != null ? ct(S.__source) : "";
      }
      var En = {};
      function Gr(S) {
        var _ = Zl();
        if (!_) {
          var W = typeof S == "string" ? S : S.displayName || S.name;
          W && (_ = `

Check the top-level render call using <` + W + ">.");
        }
        return _;
      }
      function zr(S, _) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var W = Gr(_);
          if (!En[W]) {
            En[W] = !0;
            var X = "";
            S && S._owner && S._owner !== _e.current && (X = " It was passed a child from " + Kn(S._owner.type) + "."), Mt(S), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, X), Mt(null);
          }
        }
      }
      function xo(S, _) {
        if (typeof S == "object") {
          if (Zt(S))
            for (var W = 0; W < S.length; W++) {
              var X = S[W];
              Yt(X) && zr(X, _);
            }
          else if (Yt(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var ye = de(S);
            if (typeof ye == "function" && ye !== S.entries)
              for (var et = ye.call(S), be; !(be = et.next()).done; )
                Yt(be.value) && zr(be.value, _);
          }
        }
      }
      function bn(S) {
        {
          var _ = S.type;
          if (_ == null || typeof _ == "string")
            return;
          var W;
          if (typeof _ == "function")
            W = _.propTypes;
          else if (typeof _ == "object" && (_.$$typeof === F || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          _.$$typeof === P))
            W = _.propTypes;
          else
            return;
          if (W) {
            var X = Kn(_);
            Xl(W, S.props, "prop", X, S);
          } else if (_.PropTypes !== void 0 && !Kl) {
            Kl = !0;
            var ye = Kn(_);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
          }
          typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qt(S) {
        {
          for (var _ = Object.keys(S.props), W = 0; W < _.length; W++) {
            var X = _[W];
            if (X !== "children" && X !== "key") {
              Mt(S), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Mt(null);
              break;
            }
          }
          S.ref !== null && (Mt(S), xe("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
        }
      }
      function mc(S, _, W) {
        var X = D(S);
        if (!X) {
          var ye = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = rl(_);
          et ? ye += et : ye += Zl();
          var be;
          S === null ? be = "null" : Zt(S) ? be = "array" : S !== void 0 && S.$$typeof === E ? (be = "<" + (Kn(S.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : be = typeof S, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, ye);
        }
        var Ze = We.apply(this, arguments);
        if (Ze == null)
          return Ze;
        if (X)
          for (var Tt = 2; Tt < arguments.length; Tt++)
            xo(arguments[Tt], S);
        return S === T ? Qt(Ze) : bn(Ze), Ze;
      }
      var Xr = !1;
      function Jn(S) {
        var _ = mc.bind(null, S);
        return _.type = S, Xr || (Xr = !0, Ge("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(_, "type", {
          enumerable: !1,
          get: function() {
            return Ge("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), _;
      }
      function Ci(S, _, W) {
        for (var X = $t.apply(this, arguments), ye = 2; ye < arguments.length; ye++)
          xo(arguments[ye], X.type);
        return bn(X), X;
      }
      function yc(S, _) {
        var W = Ee.transition;
        Ee.transition = {};
        var X = Ee.transition;
        Ee.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (Ee.transition = W, W === null && X._updatedFibers) {
            var ye = X._updatedFibers.size;
            ye > 10 && Ge("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), X._updatedFibers.clear();
          }
        }
      }
      var ji = !1, Ro = null;
      function gc(S) {
        if (Ro === null)
          try {
            var _ = ("require" + Math.random()).slice(0, 7), W = d && d[_];
            Ro = W.call(d, "timers").setImmediate;
          } catch {
            Ro = function(ye) {
              ji === !1 && (ji = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var et = new MessageChannel();
              et.port1.onmessage = ye, et.port2.postMessage(void 0);
            };
          }
        return Ro(S);
      }
      var La = 0, wo = !1;
      function Pi(S) {
        {
          var _ = La;
          La++, ue.current === null && (ue.current = []);
          var W = ue.isBatchingLegacy, X;
          try {
            if (ue.isBatchingLegacy = !0, X = S(), !W && ue.didScheduleLegacyUpdate) {
              var ye = ue.current;
              ye !== null && (ue.didScheduleLegacyUpdate = !1, bo(ye));
            }
          } catch (on) {
            throw Ma(_), on;
          } finally {
            ue.isBatchingLegacy = W;
          }
          if (X !== null && typeof X == "object" && typeof X.then == "function") {
            var et = X, be = !1, Ze = {
              then: function(on, un) {
                be = !0, et.then(function(Nt) {
                  Ma(_), La === 0 ? Jl(Nt, on, un) : on(Nt);
                }, function(Nt) {
                  Ma(_), un(Nt);
                });
              }
            };
            return !wo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              be || (wo = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ze;
          } else {
            var Tt = X;
            if (Ma(_), La === 0) {
              var jt = ue.current;
              jt !== null && (bo(jt), ue.current = null);
              var an = {
                then: function(on, un) {
                  ue.current === null ? (ue.current = [], Jl(Tt, on, un)) : on(Tt);
                }
              };
              return an;
            } else {
              var en = {
                then: function(on, un) {
                  on(Tt);
                }
              };
              return en;
            }
          }
        }
      }
      function Ma(S) {
        S !== La - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = S;
      }
      function Jl(S, _, W) {
        {
          var X = ue.current;
          if (X !== null)
            try {
              bo(X), gc(function() {
                X.length === 0 ? (ue.current = null, _(S)) : Jl(S, _, W);
              });
            } catch (ye) {
              W(ye);
            }
          else
            _(S);
        }
      }
      var To = !1;
      function bo(S) {
        if (!To) {
          To = !0;
          var _ = 0;
          try {
            for (; _ < S.length; _++) {
              var W = S[_];
              do
                W = W(!0);
              while (W !== null);
            }
            S.length = 0;
          } catch (X) {
            throw S = S.slice(_ + 1), X;
          } finally {
            To = !1;
          }
        }
      }
      var al = mc, eu = Ci, ss = Jn, ri = {
        map: ka,
        forEach: tl,
        count: vo,
        toArray: Il,
        only: zi
      };
      h.Children = ri, h.Component = nt, h.Fragment = T, h.Profiler = N, h.PureComponent = gt, h.StrictMode = y, h.Suspense = U, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ht, h.act = Pi, h.cloneElement = eu, h.createContext = ho, h.createElement = al, h.createFactory = ss, h.createRef = $n, h.forwardRef = mi, h.isValidElement = Yt, h.lazy = ya, h.memo = se, h.startTransition = yc, h.unstable_act = Pi, h.useCallback = cn, h.useContext = $e, h.useDebugValue = Pt, h.useDeferredValue = Mr, h.useEffect = Et, h.useId = xt, h.useImperativeHandle = gi, h.useInsertionEffect = Pn, h.useLayoutEffect = rn, h.useMemo = Rr, h.useReducer = Lt, h.useRef = Je, h.useState = Dt, h.useSyncExternalStore = Oa, h.useTransition = Zn, h.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(yv, yv.exports)), yv.exports;
}
var lR;
function Ev() {
  return lR || (lR = 1, process.env.NODE_ENV === "production" ? py.exports = tk() : py.exports = nk()), py.exports;
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
var uR;
function rk() {
  if (uR) return hv;
  uR = 1;
  var d = Ev(), h = Symbol.for("react.element"), m = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, R = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(N, k, O) {
    var F, U = {}, H = null, P = null;
    O !== void 0 && (H = "" + O), k.key !== void 0 && (H = "" + k.key), k.ref !== void 0 && (P = k.ref);
    for (F in k) E.call(k, F) && !T.hasOwnProperty(F) && (U[F] = k[F]);
    if (N && N.defaultProps) for (F in k = N.defaultProps, k) U[F] === void 0 && (U[F] = k[F]);
    return { $$typeof: h, type: N, key: H, ref: P, props: U, _owner: R.current };
  }
  return hv.Fragment = m, hv.jsx = y, hv.jsxs = y, hv;
}
var mv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sR;
function ak() {
  return sR || (sR = 1, process.env.NODE_ENV !== "production" && function() {
    var d = Ev(), h = Symbol.for("react.element"), m = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), N = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), G = Symbol.iterator, re = "@@iterator";
    function oe(D) {
      if (D === null || typeof D != "object")
        return null;
      var se = G && D[G] || D[re];
      return typeof se == "function" ? se : null;
    }
    var Se = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function de(D) {
      {
        for (var se = arguments.length, ve = new Array(se > 1 ? se - 1 : 0), $e = 1; $e < se; $e++)
          ve[$e - 1] = arguments[$e];
        me("error", D, ve);
      }
    }
    function me(D, se, ve) {
      {
        var $e = Se.ReactDebugCurrentFrame, Dt = $e.getStackAddendum();
        Dt !== "" && (se += "%s", ve = ve.concat([Dt]));
        var Lt = ve.map(function(Je) {
          return String(Je);
        });
        Lt.unshift("Warning: " + se), Function.prototype.apply.call(console[D], console, Lt);
      }
    }
    var Ee = !1, ue = !1, _e = !1, he = !1, ot = !1, Rt;
    Rt = Symbol.for("react.module.reference");
    function at(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === E || D === T || ot || D === R || D === O || D === F || he || D === P || Ee || ue || _e || typeof D == "object" && D !== null && (D.$$typeof === H || D.$$typeof === U || D.$$typeof === y || D.$$typeof === N || D.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === Rt || D.getModuleId !== void 0));
    }
    function lt(D, se, ve) {
      var $e = D.displayName;
      if ($e)
        return $e;
      var Dt = se.displayName || se.name || "";
      return Dt !== "" ? ve + "(" + Dt + ")" : ve;
    }
    function _t(D) {
      return D.displayName || "Context";
    }
    function Oe(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && de("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case E:
          return "Fragment";
        case m:
          return "Portal";
        case T:
          return "Profiler";
        case R:
          return "StrictMode";
        case O:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case N:
            var se = D;
            return _t(se) + ".Consumer";
          case y:
            var ve = D;
            return _t(ve._context) + ".Provider";
          case k:
            return lt(D, D.render, "ForwardRef");
          case U:
            var $e = D.displayName || null;
            return $e !== null ? $e : Oe(D.type) || "Memo";
          case H: {
            var Dt = D, Lt = Dt._payload, Je = Dt._init;
            try {
              return Oe(Je(Lt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ue = Object.assign, ht = 0, Ge, xe, ee, De, Ce, j, te;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function nt() {
      {
        if (ht === 0) {
          Ge = console.log, xe = console.info, ee = console.warn, De = console.error, Ce = console.group, j = console.groupCollapsed, te = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        ht++;
      }
    }
    function mt() {
      {
        if (ht--, ht === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ue({}, D, {
              value: Ge
            }),
            info: Ue({}, D, {
              value: xe
            }),
            warn: Ue({}, D, {
              value: ee
            }),
            error: Ue({}, D, {
              value: De
            }),
            group: Ue({}, D, {
              value: Ce
            }),
            groupCollapsed: Ue({}, D, {
              value: j
            }),
            groupEnd: Ue({}, D, {
              value: te
            })
          });
        }
        ht < 0 && de("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pt = Se.ReactCurrentDispatcher, wt;
    function yt(D, se, ve) {
      {
        if (wt === void 0)
          try {
            throw Error();
          } catch (Dt) {
            var $e = Dt.stack.trim().match(/\n( *(at )?)/);
            wt = $e && $e[1] || "";
          }
        return `
` + wt + D;
      }
    }
    var gt = !1, Kt;
    {
      var $n = typeof WeakMap == "function" ? WeakMap : Map;
      Kt = new $n();
    }
    function or(D, se) {
      if (!D || gt)
        return "";
      {
        var ve = Kt.get(D);
        if (ve !== void 0)
          return ve;
      }
      var $e;
      gt = !0;
      var Dt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Lt;
      Lt = pt.current, pt.current = null, nt();
      try {
        if (se) {
          var Je = function() {
            throw Error();
          };
          if (Object.defineProperty(Je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Je, []);
            } catch (Zn) {
              $e = Zn;
            }
            Reflect.construct(D, [], Je);
          } else {
            try {
              Je.call();
            } catch (Zn) {
              $e = Zn;
            }
            D.call(Je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Zn) {
            $e = Zn;
          }
          D();
        }
      } catch (Zn) {
        if (Zn && $e && typeof Zn.stack == "string") {
          for (var Et = Zn.stack.split(`
`), Pn = $e.stack.split(`
`), rn = Et.length - 1, cn = Pn.length - 1; rn >= 1 && cn >= 0 && Et[rn] !== Pn[cn]; )
            cn--;
          for (; rn >= 1 && cn >= 0; rn--, cn--)
            if (Et[rn] !== Pn[cn]) {
              if (rn !== 1 || cn !== 1)
                do
                  if (rn--, cn--, cn < 0 || Et[rn] !== Pn[cn]) {
                    var Rr = `
` + Et[rn].replace(" at new ", " at ");
                    return D.displayName && Rr.includes("<anonymous>") && (Rr = Rr.replace("<anonymous>", D.displayName)), typeof D == "function" && Kt.set(D, Rr), Rr;
                  }
                while (rn >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        gt = !1, pt.current = Lt, mt(), Error.prepareStackTrace = Dt;
      }
      var gi = D ? D.displayName || D.name : "", Pt = gi ? yt(gi) : "";
      return typeof D == "function" && Kt.set(D, Pt), Pt;
    }
    function Zt(D, se, ve) {
      return or(D, !1);
    }
    function Ln(D) {
      var se = D.prototype;
      return !!(se && se.isReactComponent);
    }
    function Mn(D, se, ve) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return or(D, Ln(D));
      if (typeof D == "string")
        return yt(D);
      switch (D) {
        case O:
          return yt("Suspense");
        case F:
          return yt("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case k:
            return Zt(D.render);
          case U:
            return Mn(D.type, se, ve);
          case H: {
            var $e = D, Dt = $e._payload, Lt = $e._init;
            try {
              return Mn(Lt(Dt), se, ve);
            } catch {
            }
          }
        }
      return "";
    }
    var Tn = Object.prototype.hasOwnProperty, gn = {}, Sr = Se.ReactDebugCurrentFrame;
    function In(D) {
      if (D) {
        var se = D._owner, ve = Mn(D.type, D._source, se ? se.type : null);
        Sr.setExtraStackFrame(ve);
      } else
        Sr.setExtraStackFrame(null);
    }
    function Kn(D, se, ve, $e, Dt) {
      {
        var Lt = Function.call.bind(Tn);
        for (var Je in D)
          if (Lt(D, Je)) {
            var Et = void 0;
            try {
              if (typeof D[Je] != "function") {
                var Pn = Error(($e || "React class") + ": " + ve + " type `" + Je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pn.name = "Invariant Violation", Pn;
              }
              Et = D[Je](se, Je, $e, ve, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rn) {
              Et = rn;
            }
            Et && !(Et instanceof Error) && (In(Dt), de("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $e || "React class", ve, Je, typeof Et), In(null)), Et instanceof Error && !(Et.message in gn) && (gn[Et.message] = !0, In(Dt), de("Failed %s type: %s", ve, Et.message), In(null));
          }
      }
    }
    var Cr = Array.isArray;
    function Wr(D) {
      return Cr(D);
    }
    function Er(D) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, ve = se && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return ve;
      }
    }
    function pa(D) {
      try {
        return lr(D), !1;
      } catch {
        return !0;
      }
    }
    function lr(D) {
      return "" + D;
    }
    function qr(D) {
      if (pa(D))
        return de("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(D)), lr(D);
    }
    var Sn = Se.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vi, va, Re;
    Re = {};
    function We(D) {
      if (Tn.call(D, "ref")) {
        var se = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function Ct(D) {
      if (Tn.call(D, "key")) {
        var se = Object.getOwnPropertyDescriptor(D, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function $t(D, se) {
      if (typeof D.ref == "string" && Sn.current && se && Sn.current.stateNode !== se) {
        var ve = Oe(Sn.current.type);
        Re[ve] || (de('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Oe(Sn.current.type), D.ref), Re[ve] = !0);
      }
    }
    function Yt(D, se) {
      {
        var ve = function() {
          vi || (vi = !0, de("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        ve.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: ve,
          configurable: !0
        });
      }
    }
    function Nn(D, se) {
      {
        var ve = function() {
          va || (va = !0, de("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        ve.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: ve,
          configurable: !0
        });
      }
    }
    var Cn = function(D, se, ve, $e, Dt, Lt, Je) {
      var Et = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: D,
        key: se,
        ref: ve,
        props: Je,
        // Record the component responsible for creating this element.
        _owner: Lt
      };
      return Et._store = {}, Object.defineProperty(Et._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Et, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.defineProperty(Et, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Dt
      }), Object.freeze && (Object.freeze(Et.props), Object.freeze(Et)), Et;
    };
    function xr(D, se, ve, $e, Dt) {
      {
        var Lt, Je = {}, Et = null, Pn = null;
        ve !== void 0 && (qr(ve), Et = "" + ve), Ct(se) && (qr(se.key), Et = "" + se.key), We(se) && (Pn = se.ref, $t(se, Dt));
        for (Lt in se)
          Tn.call(se, Lt) && !kr.hasOwnProperty(Lt) && (Je[Lt] = se[Lt]);
        if (D && D.defaultProps) {
          var rn = D.defaultProps;
          for (Lt in rn)
            Je[Lt] === void 0 && (Je[Lt] = rn[Lt]);
        }
        if (Et || Pn) {
          var cn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Et && Yt(Je, cn), Pn && Nn(Je, cn);
        }
        return Cn(D, Et, Pn, Dt, $e, Sn.current, Je);
      }
    }
    var Jt = Se.ReactCurrentOwner, Or = Se.ReactDebugCurrentFrame;
    function Wt(D) {
      if (D) {
        var se = D._owner, ve = Mn(D.type, D._source, se ? se.type : null);
        Or.setExtraStackFrame(ve);
      } else
        Or.setExtraStackFrame(null);
    }
    var qt;
    qt = !1;
    function ei(D) {
      return typeof D == "object" && D !== null && D.$$typeof === h;
    }
    function ka() {
      {
        if (Jt.current) {
          var D = Oe(Jt.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function vo(D) {
      return "";
    }
    var tl = {};
    function Il(D) {
      {
        var se = ka();
        if (!se) {
          var ve = typeof D == "string" ? D : D.displayName || D.name;
          ve && (se = `

Check the top-level render call using <` + ve + ">.");
        }
        return se;
      }
    }
    function zi(D, se) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var ve = Il(se);
        if (tl[ve])
          return;
        tl[ve] = !0;
        var $e = "";
        D && D._owner && D._owner !== Jt.current && ($e = " It was passed a child from " + Oe(D._owner.type) + "."), Wt(D), de('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ve, $e), Wt(null);
      }
    }
    function ho(D, se) {
      {
        if (typeof D != "object")
          return;
        if (Wr(D))
          for (var ve = 0; ve < D.length; ve++) {
            var $e = D[ve];
            ei($e) && zi($e, se);
          }
        else if (ei(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var Dt = oe(D);
          if (typeof Dt == "function" && Dt !== D.entries)
            for (var Lt = Dt.call(D), Je; !(Je = Lt.next()).done; )
              ei(Je.value) && zi(Je.value, se);
        }
      }
    }
    function ha(D) {
      {
        var se = D.type;
        if (se == null || typeof se == "string")
          return;
        var ve;
        if (typeof se == "function")
          ve = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === U))
          ve = se.propTypes;
        else
          return;
        if (ve) {
          var $e = Oe(se);
          Kn(ve, D.props, "prop", $e, D);
        } else if (se.PropTypes !== void 0 && !qt) {
          qt = !0;
          var Dt = Oe(se);
          de("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Dt || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && de("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hi(D) {
      {
        for (var se = Object.keys(D.props), ve = 0; ve < se.length; ve++) {
          var $e = se[ve];
          if ($e !== "children" && $e !== "key") {
            Wt(D), de("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $e), Wt(null);
            break;
          }
        }
        D.ref !== null && (Wt(D), de("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var ma = {};
    function ti(D, se, ve, $e, Dt, Lt) {
      {
        var Je = at(D);
        if (!Je) {
          var Et = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pn = vo();
          Pn ? Et += Pn : Et += ka();
          var rn;
          D === null ? rn = "null" : Wr(D) ? rn = "array" : D !== void 0 && D.$$typeof === h ? (rn = "<" + (Oe(D.type) || "Unknown") + " />", Et = " Did you accidentally export a JSX literal instead of a component?") : rn = typeof D, de("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rn, Et);
        }
        var cn = xr(D, se, ve, Dt, Lt);
        if (cn == null)
          return cn;
        if (Je) {
          var Rr = se.children;
          if (Rr !== void 0)
            if ($e)
              if (Wr(Rr)) {
                for (var gi = 0; gi < Rr.length; gi++)
                  ho(Rr[gi], D);
                Object.freeze && Object.freeze(Rr);
              } else
                de("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ho(Rr, D);
        }
        if (Tn.call(se, "key")) {
          var Pt = Oe(D), Zn = Object.keys(se).filter(function(Oa) {
            return Oa !== "key";
          }), Mr = Zn.length > 0 ? "{key: someKey, " + Zn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ma[Pt + Mr]) {
            var xt = Zn.length > 0 ? "{" + Zn.join(": ..., ") + ": ...}" : "{}";
            de(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Mr, Pt, xt, Pt), ma[Pt + Mr] = !0;
          }
        }
        return D === E ? hi(cn) : ha(cn), cn;
      }
    }
    function Lr(D, se, ve) {
      return ti(D, se, ve, !0);
    }
    function ya(D, se, ve) {
      return ti(D, se, ve, !1);
    }
    var mi = ya, yi = Lr;
    mv.Fragment = E, mv.jsx = mi, mv.jsxs = yi;
  }()), mv;
}
process.env.NODE_ENV === "production" ? nS.exports = rk() : nS.exports = ak();
var ae = nS.exports, K = Ev();
const gv = /* @__PURE__ */ TR(K), ik = /* @__PURE__ */ ek({
  __proto__: null,
  default: gv
}, [K]);
function Vl(d, h, { checkForDefaultPrevented: m = !0 } = {}) {
  return function(R) {
    if (d == null || d(R), m === !1 || !R.defaultPrevented)
      return h == null ? void 0 : h(R);
  };
}
function ok(d, h) {
  typeof d == "function" ? d(h) : d != null && (d.current = h);
}
function bR(...d) {
  return (h) => d.forEach((m) => ok(m, h));
}
function vc(...d) {
  return K.useCallback(bR(...d), d);
}
function lk(d, h = []) {
  let m = [];
  function E(T, y) {
    const N = K.createContext(y), k = m.length;
    m = [...m, y];
    const O = (U) => {
      var Se;
      const { scope: H, children: P, ...G } = U, re = ((Se = H == null ? void 0 : H[d]) == null ? void 0 : Se[k]) || N, oe = K.useMemo(() => G, Object.values(G));
      return /* @__PURE__ */ ae.jsx(re.Provider, { value: oe, children: P });
    };
    O.displayName = T + "Provider";
    function F(U, H) {
      var re;
      const P = ((re = H == null ? void 0 : H[d]) == null ? void 0 : re[k]) || N, G = K.useContext(P);
      if (G) return G;
      if (y !== void 0) return y;
      throw new Error(`\`${U}\` must be used within \`${T}\``);
    }
    return [O, F];
  }
  const R = () => {
    const T = m.map((y) => K.createContext(y));
    return function(N) {
      const k = (N == null ? void 0 : N[d]) || T;
      return K.useMemo(
        () => ({ [`__scope${d}`]: { ...N, [d]: k } }),
        [N, k]
      );
    };
  };
  return R.scopeName = d, [E, uk(R, ...h)];
}
function uk(...d) {
  const h = d[0];
  if (d.length === 1) return h;
  const m = () => {
    const E = d.map((R) => ({
      useScope: R(),
      scopeName: R.scopeName
    }));
    return function(T) {
      const y = E.reduce((N, { useScope: k, scopeName: O }) => {
        const U = k(T)[`__scope${O}`];
        return { ...N, ...U };
      }, {});
      return K.useMemo(() => ({ [`__scope${h.scopeName}`]: y }), [y]);
    };
  };
  return m.scopeName = h.scopeName, m;
}
var rS = { exports: {} }, Za = {}, vy = { exports: {} }, K1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cR;
function sk() {
  return cR || (cR = 1, function(d) {
    function h(ee, De) {
      var Ce = ee.length;
      ee.push(De);
      e: for (; 0 < Ce; ) {
        var j = Ce - 1 >>> 1, te = ee[j];
        if (0 < R(te, De)) ee[j] = De, ee[Ce] = te, Ce = j;
        else break e;
      }
    }
    function m(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function E(ee) {
      if (ee.length === 0) return null;
      var De = ee[0], Ce = ee.pop();
      if (Ce !== De) {
        ee[0] = Ce;
        e: for (var j = 0, te = ee.length, Xe = te >>> 1; j < Xe; ) {
          var nt = 2 * (j + 1) - 1, mt = ee[nt], pt = nt + 1, wt = ee[pt];
          if (0 > R(mt, Ce)) pt < te && 0 > R(wt, mt) ? (ee[j] = wt, ee[pt] = Ce, j = pt) : (ee[j] = mt, ee[nt] = Ce, j = nt);
          else if (pt < te && 0 > R(wt, Ce)) ee[j] = wt, ee[pt] = Ce, j = pt;
          else break e;
        }
      }
      return De;
    }
    function R(ee, De) {
      var Ce = ee.sortIndex - De.sortIndex;
      return Ce !== 0 ? Ce : ee.id - De.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      d.unstable_now = function() {
        return T.now();
      };
    } else {
      var y = Date, N = y.now();
      d.unstable_now = function() {
        return y.now() - N;
      };
    }
    var k = [], O = [], F = 1, U = null, H = 3, P = !1, G = !1, re = !1, oe = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, de = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function me(ee) {
      for (var De = m(O); De !== null; ) {
        if (De.callback === null) E(O);
        else if (De.startTime <= ee) E(O), De.sortIndex = De.expirationTime, h(k, De);
        else break;
        De = m(O);
      }
    }
    function Ee(ee) {
      if (re = !1, me(ee), !G) if (m(k) !== null) G = !0, Ge(ue);
      else {
        var De = m(O);
        De !== null && xe(Ee, De.startTime - ee);
      }
    }
    function ue(ee, De) {
      G = !1, re && (re = !1, Se(ot), ot = -1), P = !0;
      var Ce = H;
      try {
        for (me(De), U = m(k); U !== null && (!(U.expirationTime > De) || ee && !lt()); ) {
          var j = U.callback;
          if (typeof j == "function") {
            U.callback = null, H = U.priorityLevel;
            var te = j(U.expirationTime <= De);
            De = d.unstable_now(), typeof te == "function" ? U.callback = te : U === m(k) && E(k), me(De);
          } else E(k);
          U = m(k);
        }
        if (U !== null) var Xe = !0;
        else {
          var nt = m(O);
          nt !== null && xe(Ee, nt.startTime - De), Xe = !1;
        }
        return Xe;
      } finally {
        U = null, H = Ce, P = !1;
      }
    }
    var _e = !1, he = null, ot = -1, Rt = 5, at = -1;
    function lt() {
      return !(d.unstable_now() - at < Rt);
    }
    function _t() {
      if (he !== null) {
        var ee = d.unstable_now();
        at = ee;
        var De = !0;
        try {
          De = he(!0, ee);
        } finally {
          De ? Oe() : (_e = !1, he = null);
        }
      } else _e = !1;
    }
    var Oe;
    if (typeof de == "function") Oe = function() {
      de(_t);
    };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), ht = Ue.port2;
      Ue.port1.onmessage = _t, Oe = function() {
        ht.postMessage(null);
      };
    } else Oe = function() {
      oe(_t, 0);
    };
    function Ge(ee) {
      he = ee, _e || (_e = !0, Oe());
    }
    function xe(ee, De) {
      ot = oe(function() {
        ee(d.unstable_now());
      }, De);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, d.unstable_continueExecution = function() {
      G || P || (G = !0, Ge(ue));
    }, d.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Rt = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, d.unstable_getFirstCallbackNode = function() {
      return m(k);
    }, d.unstable_next = function(ee) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var De = 3;
          break;
        default:
          De = H;
      }
      var Ce = H;
      H = De;
      try {
        return ee();
      } finally {
        H = Ce;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(ee, De) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var Ce = H;
      H = ee;
      try {
        return De();
      } finally {
        H = Ce;
      }
    }, d.unstable_scheduleCallback = function(ee, De, Ce) {
      var j = d.unstable_now();
      switch (typeof Ce == "object" && Ce !== null ? (Ce = Ce.delay, Ce = typeof Ce == "number" && 0 < Ce ? j + Ce : j) : Ce = j, ee) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return te = Ce + te, ee = { id: F++, callback: De, priorityLevel: ee, startTime: Ce, expirationTime: te, sortIndex: -1 }, Ce > j ? (ee.sortIndex = Ce, h(O, ee), m(k) === null && ee === m(O) && (re ? (Se(ot), ot = -1) : re = !0, xe(Ee, Ce - j))) : (ee.sortIndex = te, h(k, ee), G || P || (G = !0, Ge(ue))), ee;
    }, d.unstable_shouldYield = lt, d.unstable_wrapCallback = function(ee) {
      var De = H;
      return function() {
        var Ce = H;
        H = De;
        try {
          return ee.apply(this, arguments);
        } finally {
          H = Ce;
        }
      };
    };
  }(K1)), K1;
}
var Z1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fR;
function ck() {
  return fR || (fR = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = !1, m = !1, E = 5;
      function R(Re, We) {
        var Ct = Re.length;
        Re.push(We), N(Re, We, Ct);
      }
      function T(Re) {
        return Re.length === 0 ? null : Re[0];
      }
      function y(Re) {
        if (Re.length === 0)
          return null;
        var We = Re[0], Ct = Re.pop();
        return Ct !== We && (Re[0] = Ct, k(Re, Ct, 0)), We;
      }
      function N(Re, We, Ct) {
        for (var $t = Ct; $t > 0; ) {
          var Yt = $t - 1 >>> 1, Nn = Re[Yt];
          if (O(Nn, We) > 0)
            Re[Yt] = We, Re[$t] = Nn, $t = Yt;
          else
            return;
        }
      }
      function k(Re, We, Ct) {
        for (var $t = Ct, Yt = Re.length, Nn = Yt >>> 1; $t < Nn; ) {
          var Cn = ($t + 1) * 2 - 1, xr = Re[Cn], Jt = Cn + 1, Or = Re[Jt];
          if (O(xr, We) < 0)
            Jt < Yt && O(Or, xr) < 0 ? (Re[$t] = Or, Re[Jt] = We, $t = Jt) : (Re[$t] = xr, Re[Cn] = We, $t = Cn);
          else if (Jt < Yt && O(Or, We) < 0)
            Re[$t] = Or, Re[Jt] = We, $t = Jt;
          else
            return;
        }
      }
      function O(Re, We) {
        var Ct = Re.sortIndex - We.sortIndex;
        return Ct !== 0 ? Ct : Re.id - We.id;
      }
      var F = 1, U = 2, H = 3, P = 4, G = 5;
      function re(Re, We) {
      }
      var oe = typeof performance == "object" && typeof performance.now == "function";
      if (oe) {
        var Se = performance;
        d.unstable_now = function() {
          return Se.now();
        };
      } else {
        var de = Date, me = de.now();
        d.unstable_now = function() {
          return de.now() - me;
        };
      }
      var Ee = 1073741823, ue = -1, _e = 250, he = 5e3, ot = 1e4, Rt = Ee, at = [], lt = [], _t = 1, Oe = null, Ue = H, ht = !1, Ge = !1, xe = !1, ee = typeof setTimeout == "function" ? setTimeout : null, De = typeof clearTimeout == "function" ? clearTimeout : null, Ce = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function j(Re) {
        for (var We = T(lt); We !== null; ) {
          if (We.callback === null)
            y(lt);
          else if (We.startTime <= Re)
            y(lt), We.sortIndex = We.expirationTime, R(at, We);
          else
            return;
          We = T(lt);
        }
      }
      function te(Re) {
        if (xe = !1, j(Re), !Ge)
          if (T(at) !== null)
            Ge = !0, qr(Xe);
          else {
            var We = T(lt);
            We !== null && Sn(te, We.startTime - Re);
          }
      }
      function Xe(Re, We) {
        Ge = !1, xe && (xe = !1, kr()), ht = !0;
        var Ct = Ue;
        try {
          var $t;
          if (!m) return nt(Re, We);
        } finally {
          Oe = null, Ue = Ct, ht = !1;
        }
      }
      function nt(Re, We) {
        var Ct = We;
        for (j(Ct), Oe = T(at); Oe !== null && !h && !(Oe.expirationTime > Ct && (!Re || In())); ) {
          var $t = Oe.callback;
          if (typeof $t == "function") {
            Oe.callback = null, Ue = Oe.priorityLevel;
            var Yt = Oe.expirationTime <= Ct, Nn = $t(Yt);
            Ct = d.unstable_now(), typeof Nn == "function" ? Oe.callback = Nn : Oe === T(at) && y(at), j(Ct);
          } else
            y(at);
          Oe = T(at);
        }
        if (Oe !== null)
          return !0;
        var Cn = T(lt);
        return Cn !== null && Sn(te, Cn.startTime - Ct), !1;
      }
      function mt(Re, We) {
        switch (Re) {
          case F:
          case U:
          case H:
          case P:
          case G:
            break;
          default:
            Re = H;
        }
        var Ct = Ue;
        Ue = Re;
        try {
          return We();
        } finally {
          Ue = Ct;
        }
      }
      function pt(Re) {
        var We;
        switch (Ue) {
          case F:
          case U:
          case H:
            We = H;
            break;
          default:
            We = Ue;
            break;
        }
        var Ct = Ue;
        Ue = We;
        try {
          return Re();
        } finally {
          Ue = Ct;
        }
      }
      function wt(Re) {
        var We = Ue;
        return function() {
          var Ct = Ue;
          Ue = We;
          try {
            return Re.apply(this, arguments);
          } finally {
            Ue = Ct;
          }
        };
      }
      function yt(Re, We, Ct) {
        var $t = d.unstable_now(), Yt;
        if (typeof Ct == "object" && Ct !== null) {
          var Nn = Ct.delay;
          typeof Nn == "number" && Nn > 0 ? Yt = $t + Nn : Yt = $t;
        } else
          Yt = $t;
        var Cn;
        switch (Re) {
          case F:
            Cn = ue;
            break;
          case U:
            Cn = _e;
            break;
          case G:
            Cn = Rt;
            break;
          case P:
            Cn = ot;
            break;
          case H:
          default:
            Cn = he;
            break;
        }
        var xr = Yt + Cn, Jt = {
          id: _t++,
          callback: We,
          priorityLevel: Re,
          startTime: Yt,
          expirationTime: xr,
          sortIndex: -1
        };
        return Yt > $t ? (Jt.sortIndex = Yt, R(lt, Jt), T(at) === null && Jt === T(lt) && (xe ? kr() : xe = !0, Sn(te, Yt - $t))) : (Jt.sortIndex = xr, R(at, Jt), !Ge && !ht && (Ge = !0, qr(Xe))), Jt;
      }
      function gt() {
      }
      function Kt() {
        !Ge && !ht && (Ge = !0, qr(Xe));
      }
      function $n() {
        return T(at);
      }
      function or(Re) {
        Re.callback = null;
      }
      function Zt() {
        return Ue;
      }
      var Ln = !1, Mn = null, Tn = -1, gn = E, Sr = -1;
      function In() {
        var Re = d.unstable_now() - Sr;
        return !(Re < gn);
      }
      function Kn() {
      }
      function Cr(Re) {
        if (Re < 0 || Re > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Re > 0 ? gn = Math.floor(1e3 / Re) : gn = E;
      }
      var Wr = function() {
        if (Mn !== null) {
          var Re = d.unstable_now();
          Sr = Re;
          var We = !0, Ct = !0;
          try {
            Ct = Mn(We, Re);
          } finally {
            Ct ? Er() : (Ln = !1, Mn = null);
          }
        } else
          Ln = !1;
      }, Er;
      if (typeof Ce == "function")
        Er = function() {
          Ce(Wr);
        };
      else if (typeof MessageChannel < "u") {
        var pa = new MessageChannel(), lr = pa.port2;
        pa.port1.onmessage = Wr, Er = function() {
          lr.postMessage(null);
        };
      } else
        Er = function() {
          ee(Wr, 0);
        };
      function qr(Re) {
        Mn = Re, Ln || (Ln = !0, Er());
      }
      function Sn(Re, We) {
        Tn = ee(function() {
          Re(d.unstable_now());
        }, We);
      }
      function kr() {
        De(Tn), Tn = -1;
      }
      var vi = Kn, va = null;
      d.unstable_IdlePriority = G, d.unstable_ImmediatePriority = F, d.unstable_LowPriority = P, d.unstable_NormalPriority = H, d.unstable_Profiling = va, d.unstable_UserBlockingPriority = U, d.unstable_cancelCallback = or, d.unstable_continueExecution = Kt, d.unstable_forceFrameRate = Cr, d.unstable_getCurrentPriorityLevel = Zt, d.unstable_getFirstCallbackNode = $n, d.unstable_next = pt, d.unstable_pauseExecution = gt, d.unstable_requestPaint = vi, d.unstable_runWithPriority = mt, d.unstable_scheduleCallback = yt, d.unstable_shouldYield = In, d.unstable_wrapCallback = wt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Z1)), Z1;
}
var dR;
function _R() {
  return dR || (dR = 1, process.env.NODE_ENV === "production" ? vy.exports = sk() : vy.exports = ck()), vy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pR;
function fk() {
  if (pR) return Za;
  pR = 1;
  var d = Ev(), h = _R();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = /* @__PURE__ */ new Set(), R = {};
  function T(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (R[n] = r, n = 0; n < r.length; n++) E.add(r[n]);
  }
  var N = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, F = {}, U = {};
  function H(n) {
    return k.call(U, n) ? !0 : k.call(F, n) ? !1 : O.test(n) ? U[n] = !0 : (F[n] = !0, !1);
  }
  function P(n, r, o, u) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function G(n, r, o, u) {
    if (r === null || typeof r > "u" || P(n, r, o, u)) return !0;
    if (u) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function re(n, r, o, u, c, p, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = C;
  }
  var oe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    oe[n] = new re(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    oe[r] = new re(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    oe[n] = new re(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    oe[n] = new re(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    oe[n] = new re(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    oe[n] = new re(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    oe[n] = new re(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    oe[n] = new re(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    oe[n] = new re(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Se = /[\-:]([a-z])/g;
  function de(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Se,
      de
    );
    oe[r] = new re(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Se, de);
    oe[r] = new re(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Se, de);
    oe[r] = new re(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    oe[n] = new re(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), oe.xlinkHref = new re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    oe[n] = new re(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function me(n, r, o, u) {
    var c = oe.hasOwnProperty(r) ? oe[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (G(r, o, c, u) && (o = null), u || c === null ? H(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var Ee = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ue = Symbol.for("react.element"), _e = Symbol.for("react.portal"), he = Symbol.for("react.fragment"), ot = Symbol.for("react.strict_mode"), Rt = Symbol.for("react.profiler"), at = Symbol.for("react.provider"), lt = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function De(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Ce = Object.assign, j;
  function te(n) {
    if (j === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      j = r && r[1] || "";
    }
    return `
` + j + n;
  }
  var Xe = !1;
  function nt(n, r) {
    if (!n || Xe) return "";
    Xe = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (q) {
          var u = q;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (q) {
          u = q;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (q) {
          u = q;
        }
        n();
      }
    } catch (q) {
      if (q && u && typeof q.stack == "string") {
        for (var c = q.stack.split(`
`), p = u.stack.split(`
`), C = c.length - 1, b = p.length - 1; 1 <= C && 0 <= b && c[C] !== p[b]; ) b--;
        for (; 1 <= C && 0 <= b; C--, b--) if (c[C] !== p[b]) {
          if (C !== 1 || b !== 1)
            do
              if (C--, b--, 0 > b || c[C] !== p[b]) {
                var L = `
` + c[C].replace(" at new ", " at ");
                return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
              }
            while (1 <= C && 0 <= b);
          break;
        }
      }
    } finally {
      Xe = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? te(n) : "";
  }
  function mt(n) {
    switch (n.tag) {
      case 5:
        return te(n.type);
      case 16:
        return te("Lazy");
      case 13:
        return te("Suspense");
      case 19:
        return te("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = nt(n.type, !1), n;
      case 11:
        return n = nt(n.type.render, !1), n;
      case 1:
        return n = nt(n.type, !0), n;
      default:
        return "";
    }
  }
  function pt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case he:
        return "Fragment";
      case _e:
        return "Portal";
      case Rt:
        return "Profiler";
      case ot:
        return "StrictMode";
      case Oe:
        return "Suspense";
      case Ue:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case lt:
        return (n.displayName || "Context") + ".Consumer";
      case at:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ht:
        return r = n.displayName || null, r !== null ? r : pt(n.type) || "Memo";
      case Ge:
        r = n._payload, n = n._init;
        try {
          return pt(n(r));
        } catch {
        }
    }
    return null;
  }
  function wt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pt(r);
      case 8:
        return r === ot ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function yt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function gt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Kt(n) {
    var r = gt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, p = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(C) {
        u = "" + C, p.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(C) {
        u = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function $n(n) {
    n._valueTracker || (n._valueTracker = Kt(n));
  }
  function or(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return n && (u = gt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Zt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Ln(n, r) {
    var o = r.checked;
    return Ce({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Mn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = yt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Tn(n, r) {
    r = r.checked, r != null && me(n, "checked", r, !1);
  }
  function gn(n, r) {
    Tn(n, r);
    var o = yt(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? In(n, r.type, o) : r.hasOwnProperty("defaultValue") && In(n, r.type, yt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Sr(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function In(n, r, o) {
    (r !== "number" || Zt(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Kn = Array.isArray;
  function Cr(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++) r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++) c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + yt(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Wr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(m(91));
    return Ce({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(m(92));
        if (Kn(o)) {
          if (1 < o.length) throw Error(m(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: yt(o) };
  }
  function pa(n, r) {
    var o = yt(r.value), u = yt(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function lr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function qr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Sn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? qr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var kr, vi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = kr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function va(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Re = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, We = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Re).forEach(function(n) {
    We.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Re[r] = Re[n];
    });
  });
  function Ct(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Re.hasOwnProperty(n) && Re[n] ? ("" + r).trim() : r + "px";
  }
  function $t(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = Ct(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
    }
  }
  var Yt = Ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Nn(n, r) {
    if (r) {
      if (Yt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(m(62));
    }
  }
  function Cn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var xr = null;
  function Jt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Or = null, Wt = null, qt = null;
  function ei(n) {
    if (n = Rs(n)) {
      if (typeof Or != "function") throw Error(m(280));
      var r = n.stateNode;
      r && (r = Qe(r), Or(n.stateNode, n.type, r));
    }
  }
  function ka(n) {
    Wt ? qt ? qt.push(n) : qt = [n] : Wt = n;
  }
  function vo() {
    if (Wt) {
      var n = Wt, r = qt;
      if (qt = Wt = null, ei(n), r) for (n = 0; n < r.length; n++) ei(r[n]);
    }
  }
  function tl(n, r) {
    return n(r);
  }
  function Il() {
  }
  var zi = !1;
  function ho(n, r, o) {
    if (zi) return n(r, o);
    zi = !0;
    try {
      return tl(n, r, o);
    } finally {
      zi = !1, (Wt !== null || qt !== null) && (Il(), vo());
    }
  }
  function ha(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = Qe(o);
    if (u === null) return null;
    o = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(m(231, r, typeof o));
    return o;
  }
  var hi = !1;
  if (N) try {
    var ma = {};
    Object.defineProperty(ma, "passive", { get: function() {
      hi = !0;
    } }), window.addEventListener("test", ma, ma), window.removeEventListener("test", ma, ma);
  } catch {
    hi = !1;
  }
  function ti(n, r, o, u, c, p, C, b, L) {
    var q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, q);
    } catch (ce) {
      this.onError(ce);
    }
  }
  var Lr = !1, ya = null, mi = !1, yi = null, D = { onError: function(n) {
    Lr = !0, ya = n;
  } };
  function se(n, r, o, u, c, p, C, b, L) {
    Lr = !1, ya = null, ti.apply(D, arguments);
  }
  function ve(n, r, o, u, c, p, C, b, L) {
    if (se.apply(this, arguments), Lr) {
      if (Lr) {
        var q = ya;
        Lr = !1, ya = null;
      } else throw Error(m(198));
      mi || (mi = !0, yi = q);
    }
  }
  function $e(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Dt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Lt(n) {
    if ($e(n) !== n) throw Error(m(188));
  }
  function Je(n) {
    var r = n.alternate;
    if (!r) {
      if (r = $e(n), r === null) throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var c = o.return;
      if (c === null) break;
      var p = c.alternate;
      if (p === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === o) return Lt(c), n;
          if (p === u) return Lt(c), r;
          p = p.sibling;
        }
        throw Error(m(188));
      }
      if (o.return !== u.return) o = c, u = p;
      else {
        for (var C = !1, b = c.child; b; ) {
          if (b === o) {
            C = !0, o = c, u = p;
            break;
          }
          if (b === u) {
            C = !0, u = c, o = p;
            break;
          }
          b = b.sibling;
        }
        if (!C) {
          for (b = p.child; b; ) {
            if (b === o) {
              C = !0, o = p, u = c;
              break;
            }
            if (b === u) {
              C = !0, u = p, o = c;
              break;
            }
            b = b.sibling;
          }
          if (!C) throw Error(m(189));
        }
      }
      if (o.alternate !== u) throw Error(m(190));
    }
    if (o.tag !== 3) throw Error(m(188));
    return o.stateNode.current === o ? n : r;
  }
  function Et(n) {
    return n = Je(n), n !== null ? Pn(n) : null;
  }
  function Pn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Pn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var rn = h.unstable_scheduleCallback, cn = h.unstable_cancelCallback, Rr = h.unstable_shouldYield, gi = h.unstable_requestPaint, Pt = h.unstable_now, Zn = h.unstable_getCurrentPriorityLevel, Mr = h.unstable_ImmediatePriority, xt = h.unstable_UserBlockingPriority, Oa = h.unstable_NormalPriority, mo = h.unstable_LowPriority, Yl = h.unstable_IdlePriority, yo = null, Qr = null;
  function os(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(yo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : hc, ls = Math.log, us = Math.LN2;
  function hc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ls(n) / us | 0) | 0;
  }
  var Wl = 64, go = 4194304;
  function ni(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ar(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, c = n.suspendedLanes, p = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var b = C & ~c;
      b !== 0 ? u = ni(b) : (p &= C, p !== 0 && (u = ni(p)));
    } else C = o & ~c, C !== 0 ? u = ni(C) : p !== 0 && (u = ni(p));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, p = r & -r, c >= p || c === 16 && (p & 4194240) !== 0)) return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Nr(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function So(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Co(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var C = 31 - Nr(p), b = 1 << C, L = c[C];
      L === -1 ? (!(b & o) || b & u) && (c[C] = So(b, r)) : L <= r && (n.expiredLanes |= b), p &= ~b;
    }
  }
  function Eo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ql() {
    var n = Wl;
    return Wl <<= 1, !(Wl & 4194240) && (Wl = 64), n;
  }
  function Ql(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Ui(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = o;
  }
  function dd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - Nr(o), p = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~p;
    }
  }
  function Si(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Nr(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var Ft = 0;
  function Gl(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nl, Xl, Mt, Kl, Zl, ct = !1, rl = [], En = null, Gr = null, zr = null, xo = /* @__PURE__ */ new Map(), bn = /* @__PURE__ */ new Map(), Qt = [], mc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Xr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        Gr = null;
        break;
      case "mouseover":
      case "mouseout":
        zr = null;
        break;
      case "pointerover":
      case "pointerout":
        xo.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bn.delete(r.pointerId);
    }
  }
  function Jn(n, r, o, u, c, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: p, targetContainers: [c] }, r !== null && (r = Rs(r), r !== null && Xl(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ci(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return En = Jn(En, n, r, o, u, c), !0;
      case "dragenter":
        return Gr = Jn(Gr, n, r, o, u, c), !0;
      case "mouseover":
        return zr = Jn(zr, n, r, o, u, c), !0;
      case "pointerover":
        var p = c.pointerId;
        return xo.set(p, Jn(xo.get(p) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return p = c.pointerId, bn.set(p, Jn(bn.get(p) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function yc(n) {
    var r = Aa(n.target);
    if (r !== null) {
      var o = $e(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Dt(o), r !== null) {
            n.blockedOn = r, Zl(n.priority, function() {
              Mt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ji(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = eu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        xr = u, o.target.dispatchEvent(u), xr = null;
      } else return r = Rs(o), r !== null && Xl(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Ro(n, r, o) {
    ji(n) && o.delete(r);
  }
  function gc() {
    ct = !1, En !== null && ji(En) && (En = null), Gr !== null && ji(Gr) && (Gr = null), zr !== null && ji(zr) && (zr = null), xo.forEach(Ro), bn.forEach(Ro);
  }
  function La(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ct || (ct = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, gc)));
  }
  function wo(n) {
    function r(c) {
      return La(c, n);
    }
    if (0 < rl.length) {
      La(rl[0], n);
      for (var o = 1; o < rl.length; o++) {
        var u = rl[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (En !== null && La(En, n), Gr !== null && La(Gr, n), zr !== null && La(zr, n), xo.forEach(r), bn.forEach(r), o = 0; o < Qt.length; o++) u = Qt[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Qt.length && (o = Qt[0], o.blockedOn === null); ) yc(o), o.blockedOn === null && Qt.shift();
  }
  var Pi = Ee.ReactCurrentBatchConfig, Ma = !0;
  function Jl(n, r, o, u) {
    var c = Ft, p = Pi.transition;
    Pi.transition = null;
    try {
      Ft = 1, bo(n, r, o, u);
    } finally {
      Ft = c, Pi.transition = p;
    }
  }
  function To(n, r, o, u) {
    var c = Ft, p = Pi.transition;
    Pi.transition = null;
    try {
      Ft = 4, bo(n, r, o, u);
    } finally {
      Ft = c, Pi.transition = p;
    }
  }
  function bo(n, r, o, u) {
    if (Ma) {
      var c = eu(n, r, o, u);
      if (c === null) _c(n, r, u, al, o), Xr(n, u);
      else if (Ci(c, n, r, o, u)) u.stopPropagation();
      else if (Xr(n, u), r & 4 && -1 < mc.indexOf(n)) {
        for (; c !== null; ) {
          var p = Rs(c);
          if (p !== null && nl(p), p = eu(n, r, o, u), p === null && _c(n, r, u, al, o), p === c) break;
          c = p;
        }
        c !== null && u.stopPropagation();
      } else _c(n, r, u, null, o);
    }
  }
  var al = null;
  function eu(n, r, o, u) {
    if (al = null, n = Jt(u), n = Aa(n), n !== null) if (r = $e(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = Dt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return al = n, null;
  }
  function ss(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Zn()) {
          case Mr:
            return 1;
          case xt:
            return 4;
          case Oa:
          case mo:
            return 16;
          case Yl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ri = null, S = null, _ = null;
  function W() {
    if (_) return _;
    var n, r = S, o = r.length, u, c = "value" in ri ? ri.value : ri.textContent, p = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var C = o - n;
    for (u = 1; u <= C && r[o - u] === c[p - u]; u++) ;
    return _ = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function X(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ye() {
    return !0;
  }
  function et() {
    return !1;
  }
  function be(n) {
    function r(o, u, c, p, C) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = p, this.target = C, this.currentTarget = null;
      for (var b in n) n.hasOwnProperty(b) && (o = n[b], this[b] = o ? o(p) : p[b]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? ye : et, this.isPropagationStopped = et, this;
    }
    return Ce(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ye);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ye);
    }, persist: function() {
    }, isPersistent: ye }), r;
  }
  var Ze = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Tt = be(Ze), jt = Ce({}, Ze, { view: 0, detail: 0 }), an = be(jt), en, on, un, Nt = Ce({}, jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== un && (un && n.type === "mousemove" ? (en = n.screenX - un.screenX, on = n.screenY - un.screenY) : on = en = 0, un = n), en);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : on;
  } }), Fi = be(Nt), tu = Ce({}, Nt, { dataTransfer: 0 }), cs = be(tu), pd = Ce({}, jt, { relatedTarget: 0 }), ai = be(pd), fs = Ce({}, Ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ds = be(fs), vd = Ce({}, Ze, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Dy = be(vd), ky = Ce({}, Ze, { data: 0 }), hd = be(ky), md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, wv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Tv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function bv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Tv[n]) ? !!r[n] : !1;
  }
  function yd() {
    return bv;
  }
  var Hi = Ce({}, jt, { key: function(n) {
    if (n.key) {
      var r = md[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = X(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? wv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(n) {
    return n.type === "keypress" ? X(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? X(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Oy = be(Hi), gd = Ce({}, Nt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sc = be(gd), Sd = Ce({}, jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd }), Ly = be(Sd), Cc = Ce({}, Ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _v = be(Cc), Kr = Ce({}, Nt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Vi = be(Kr), Fn = [9, 13, 27, 32], ii = N && "CompositionEvent" in window, il = null;
  N && "documentMode" in document && (il = document.documentMode);
  var Ec = N && "TextEvent" in window && !il, Dv = N && (!ii || il && 8 < il && 11 >= il), nu = " ", kv = !1;
  function Ov(n, r) {
    switch (n) {
      case "keyup":
        return Fn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ru = !1;
  function My(n, r) {
    switch (n) {
      case "compositionend":
        return xc(r);
      case "keypress":
        return r.which !== 32 ? null : (kv = !0, nu);
      case "textInput":
        return n = r.data, n === nu && kv ? null : n;
      default:
        return null;
    }
  }
  function Ny(n, r) {
    if (ru) return n === "compositionend" || !ii && Ov(n, r) ? (n = W(), _ = S = ri = null, ru = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Dv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Lv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Mv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Lv[n.type] : r === "textarea";
  }
  function Nv(n, r, o, u) {
    ka(u), r = Cs(r, "onChange"), 0 < r.length && (o = new Tt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var ps = null, au = null;
  function iu(n) {
    bc(n, 0);
  }
  function ou(n) {
    var r = uu(n);
    if (or(r)) return n;
  }
  function Av(n, r) {
    if (n === "change") return r;
  }
  var Cd = !1;
  if (N) {
    var Ed;
    if (N) {
      var xd = "oninput" in document;
      if (!xd) {
        var zv = document.createElement("div");
        zv.setAttribute("oninput", "return;"), xd = typeof zv.oninput == "function";
      }
      Ed = xd;
    } else Ed = !1;
    Cd = Ed && (!document.documentMode || 9 < document.documentMode);
  }
  function Uv() {
    ps && (ps.detachEvent("onpropertychange", jv), au = ps = null);
  }
  function jv(n) {
    if (n.propertyName === "value" && ou(au)) {
      var r = [];
      Nv(r, au, n, Jt(n)), ho(iu, r);
    }
  }
  function Ay(n, r, o) {
    n === "focusin" ? (Uv(), ps = r, au = o, ps.attachEvent("onpropertychange", jv)) : n === "focusout" && Uv();
  }
  function zy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ou(au);
  }
  function Uy(n, r) {
    if (n === "click") return ou(r);
  }
  function Pv(n, r) {
    if (n === "input" || n === "change") return ou(r);
  }
  function jy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Na = typeof Object.is == "function" ? Object.is : jy;
  function vs(n, r) {
    if (Na(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!k.call(r, c) || !Na(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Fv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Hv(n, r) {
    var o = Fv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r) return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Fv(o);
    }
  }
  function Vv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Vv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Rc() {
    for (var n = window, r = Zt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = Zt(n.document);
    }
    return r;
  }
  function Bi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function wc(n) {
    var r = Rc(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Vv(o.ownerDocument.documentElement, o)) {
      if (u !== null && Bi(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, p = Math.min(u.start, c);
          u = u.end === void 0 ? p : Math.min(u.end, c), !n.extend && p > u && (c = u, u = p, p = c), c = Hv(o, p);
          var C = Hv(
            o,
            u
          );
          c && C && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), p > u ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Bv = N && "documentMode" in document && 11 >= document.documentMode, oi = null, Rd = null, hs = null, wd = !1;
  function $v(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    wd || oi == null || oi !== Zt(u) || (u = oi, "selectionStart" in u && Bi(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), hs && vs(hs, u) || (hs = u, u = Cs(Rd, "onSelect"), 0 < u.length && (r = new Tt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = oi)));
  }
  function Tc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var ol = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, Td = {}, bd = {};
  N && (bd = document.createElement("div").style, "AnimationEvent" in window || (delete ol.animationend.animation, delete ol.animationiteration.animation, delete ol.animationstart.animation), "TransitionEvent" in window || delete ol.transitionend.transition);
  function er(n) {
    if (Td[n]) return Td[n];
    if (!ol[n]) return n;
    var r = ol[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in bd) return Td[n] = r[o];
    return n;
  }
  var _d = er("animationend"), Iv = er("animationiteration"), Yv = er("animationstart"), Wv = er("transitionend"), qv = /* @__PURE__ */ new Map(), Qv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function $i(n, r) {
    qv.set(n, r), T(r, [n]);
  }
  for (var ms = 0; ms < Qv.length; ms++) {
    var ll = Qv[ms], Py = ll.toLowerCase(), ys = ll[0].toUpperCase() + ll.slice(1);
    $i(Py, "on" + ys);
  }
  $i(_d, "onAnimationEnd"), $i(Iv, "onAnimationIteration"), $i(Yv, "onAnimationStart"), $i("dblclick", "onDoubleClick"), $i("focusin", "onFocus"), $i("focusout", "onBlur"), $i(Wv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fy = new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));
  function Gv(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, ve(u, r, void 0, n), n.currentTarget = null;
  }
  function bc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r) for (var C = u.length - 1; 0 <= C; C--) {
          var b = u[C], L = b.instance, q = b.currentTarget;
          if (b = b.listener, L !== p && c.isPropagationStopped()) break e;
          Gv(c, b, q), p = L;
        }
        else for (C = 0; C < u.length; C++) {
          if (b = u[C], L = b.instance, q = b.currentTarget, b = b.listener, L !== p && c.isPropagationStopped()) break e;
          Gv(c, b, q), p = L;
        }
      }
    }
    if (mi) throw n = yi, mi = !1, yi = null, n;
  }
  function ln(n, r) {
    var o = r[Ad];
    o === void 0 && (o = r[Ad] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Xv(r, n, 2, !1), o.add(u));
  }
  function _o(n, r, o) {
    var u = 0;
    r && (u |= 4), Xv(o, n, u, r);
  }
  var Ii = "_reactListening" + Math.random().toString(36).slice(2);
  function lu(n) {
    if (!n[Ii]) {
      n[Ii] = !0, E.forEach(function(o) {
        o !== "selectionchange" && (Fy.has(o) || _o(o, !1, n), _o(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ii] || (r[Ii] = !0, _o("selectionchange", !1, r));
    }
  }
  function Xv(n, r, o, u) {
    switch (ss(r)) {
      case 1:
        var c = Jl;
        break;
      case 4:
        c = To;
        break;
      default:
        c = bo;
    }
    o = c.bind(null, r, o, n), c = void 0, !hi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function _c(n, r, o, u, c) {
    var p = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var C = u.tag;
      if (C === 3 || C === 4) {
        var b = u.stateNode.containerInfo;
        if (b === c || b.nodeType === 8 && b.parentNode === c) break;
        if (C === 4) for (C = u.return; C !== null; ) {
          var L = C.tag;
          if ((L === 3 || L === 4) && (L = C.stateNode.containerInfo, L === c || L.nodeType === 8 && L.parentNode === c)) return;
          C = C.return;
        }
        for (; b !== null; ) {
          if (C = Aa(b), C === null) return;
          if (L = C.tag, L === 5 || L === 6) {
            u = p = C;
            continue e;
          }
          b = b.parentNode;
        }
      }
      u = u.return;
    }
    ho(function() {
      var q = p, ce = Jt(o), fe = [];
      e: {
        var le = qv.get(n);
        if (le !== void 0) {
          var Me = Tt, je = n;
          switch (n) {
            case "keypress":
              if (X(o) === 0) break e;
            case "keydown":
            case "keyup":
              Me = Oy;
              break;
            case "focusin":
              je = "focus", Me = ai;
              break;
            case "focusout":
              je = "blur", Me = ai;
              break;
            case "beforeblur":
            case "afterblur":
              Me = ai;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Me = Fi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Me = cs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Me = Ly;
              break;
            case _d:
            case Iv:
            case Yv:
              Me = ds;
              break;
            case Wv:
              Me = _v;
              break;
            case "scroll":
              Me = an;
              break;
            case "wheel":
              Me = Vi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Me = Dy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Me = Sc;
          }
          var He = (r & 4) !== 0, Un = !He && n === "scroll", V = He ? le !== null ? le + "Capture" : null : le;
          He = [];
          for (var A = q, I; A !== null; ) {
            I = A;
            var ge = I.stateNode;
            if (I.tag === 5 && ge !== null && (I = ge, V !== null && (ge = ha(A, V), ge != null && He.push(Ss(A, ge, I)))), Un) break;
            A = A.return;
          }
          0 < He.length && (le = new Me(le, je, null, o, ce), fe.push({ event: le, listeners: He }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", Me = n === "mouseout" || n === "pointerout", le && o !== xr && (je = o.relatedTarget || o.fromElement) && (Aa(je) || je[Yi])) break e;
          if ((Me || le) && (le = ce.window === ce ? ce : (le = ce.ownerDocument) ? le.defaultView || le.parentWindow : window, Me ? (je = o.relatedTarget || o.toElement, Me = q, je = je ? Aa(je) : null, je !== null && (Un = $e(je), je !== Un || je.tag !== 5 && je.tag !== 6) && (je = null)) : (Me = null, je = q), Me !== je)) {
            if (He = Fi, ge = "onMouseLeave", V = "onMouseEnter", A = "mouse", (n === "pointerout" || n === "pointerover") && (He = Sc, ge = "onPointerLeave", V = "onPointerEnter", A = "pointer"), Un = Me == null ? le : uu(Me), I = je == null ? le : uu(je), le = new He(ge, A + "leave", Me, o, ce), le.target = Un, le.relatedTarget = I, ge = null, Aa(ce) === q && (He = new He(V, A + "enter", je, o, ce), He.target = I, He.relatedTarget = Un, ge = He), Un = ge, Me && je) t: {
              for (He = Me, V = je, A = 0, I = He; I; I = ul(I)) A++;
              for (I = 0, ge = V; ge; ge = ul(ge)) I++;
              for (; 0 < A - I; ) He = ul(He), A--;
              for (; 0 < I - A; ) V = ul(V), I--;
              for (; A--; ) {
                if (He === V || V !== null && He === V.alternate) break t;
                He = ul(He), V = ul(V);
              }
              He = null;
            }
            else He = null;
            Me !== null && Dd(fe, le, Me, He, !1), je !== null && Un !== null && Dd(fe, Un, je, He, !0);
          }
        }
        e: {
          if (le = q ? uu(q) : window, Me = le.nodeName && le.nodeName.toLowerCase(), Me === "select" || Me === "input" && le.type === "file") var Be = Av;
          else if (Mv(le)) if (Cd) Be = Pv;
          else {
            Be = zy;
            var tt = Ay;
          }
          else (Me = le.nodeName) && Me.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Be = Uy);
          if (Be && (Be = Be(n, q))) {
            Nv(fe, Be, o, ce);
            break e;
          }
          tt && tt(n, le, q), n === "focusout" && (tt = le._wrapperState) && tt.controlled && le.type === "number" && In(le, "number", le.value);
        }
        switch (tt = q ? uu(q) : window, n) {
          case "focusin":
            (Mv(tt) || tt.contentEditable === "true") && (oi = tt, Rd = q, hs = null);
            break;
          case "focusout":
            hs = Rd = oi = null;
            break;
          case "mousedown":
            wd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wd = !1, $v(fe, o, ce);
            break;
          case "selectionchange":
            if (Bv) break;
          case "keydown":
          case "keyup":
            $v(fe, o, ce);
        }
        var Pe;
        if (ii) e: {
          switch (n) {
            case "compositionstart":
              var rt = "onCompositionStart";
              break e;
            case "compositionend":
              rt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              rt = "onCompositionUpdate";
              break e;
          }
          rt = void 0;
        }
        else ru ? Ov(n, o) && (rt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (rt = "onCompositionStart");
        rt && (Dv && o.locale !== "ko" && (ru || rt !== "onCompositionStart" ? rt === "onCompositionEnd" && ru && (Pe = W()) : (ri = ce, S = "value" in ri ? ri.value : ri.textContent, ru = !0)), tt = Cs(q, rt), 0 < tt.length && (rt = new hd(rt, n, null, o, ce), fe.push({ event: rt, listeners: tt }), Pe ? rt.data = Pe : (Pe = xc(o), Pe !== null && (rt.data = Pe)))), (Pe = Ec ? My(n, o) : Ny(n, o)) && (q = Cs(q, "onBeforeInput"), 0 < q.length && (ce = new hd("onBeforeInput", "beforeinput", null, o, ce), fe.push({ event: ce, listeners: q }), ce.data = Pe));
      }
      bc(fe, r);
    });
  }
  function Ss(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Cs(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, p = c.stateNode;
      c.tag === 5 && p !== null && (c = p, p = ha(n, o), p != null && u.unshift(Ss(n, p, c)), p = ha(n, r), p != null && u.push(Ss(n, p, c))), n = n.return;
    }
    return u;
  }
  function ul(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Dd(n, r, o, u, c) {
    for (var p = r._reactName, C = []; o !== null && o !== u; ) {
      var b = o, L = b.alternate, q = b.stateNode;
      if (L !== null && L === u) break;
      b.tag === 5 && q !== null && (b = q, c ? (L = ha(o, p), L != null && C.unshift(Ss(o, L, b))) : c || (L = ha(o, p), L != null && C.push(Ss(o, L, b)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var kd = /\r\n?/g, Hy = /\u0000|\uFFFD/g;
  function Od(n) {
    return (typeof n == "string" ? n : "" + n).replace(kd, `
`).replace(Hy, "");
  }
  function Dc(n, r, o) {
    if (r = Od(r), Od(n) !== r && o) throw Error(m(425));
  }
  function kc() {
  }
  var Ld = null, sl = null;
  function Es(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var cl = typeof setTimeout == "function" ? setTimeout : void 0, Kv = typeof clearTimeout == "function" ? clearTimeout : void 0, Md = typeof Promise == "function" ? Promise : void 0, Nd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Md < "u" ? function(n) {
    return Md.resolve(null).then(n).catch(Vy);
  } : cl;
  function Vy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Do(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8) if (o = c.data, o === "/$") {
        if (u === 0) {
          n.removeChild(c), wo(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    wo(r);
  }
  function li(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function xs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ko = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + ko, fl = "__reactProps$" + ko, Yi = "__reactContainer$" + ko, Ad = "__reactEvents$" + ko, By = "__reactListeners$" + ko, zd = "__reactHandles$" + ko;
  function Aa(n) {
    var r = n[Ei];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Yi] || o[Ei]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = xs(n); n !== null; ) {
          if (o = n[Ei]) return o;
          n = xs(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Rs(n) {
    return n = n[Ei] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function uu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(m(33));
  }
  function Qe(n) {
    return n[fl] || null;
  }
  var Oo = [], fn = -1;
  function St(n) {
    return { current: n };
  }
  function It(n) {
    0 > fn || (n.current = Oo[fn], Oo[fn] = null, fn--);
  }
  function Gt(n, r) {
    fn++, Oo[fn] = n.current, n.current = r;
  }
  var xi = {}, ut = St(xi), _n = St(!1), Zr = xi;
  function za(n, r) {
    var o = n.type.contextTypes;
    if (!o) return xi;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, p;
    for (p in o) c[p] = r[p];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function hn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ua() {
    It(_n), It(ut);
  }
  function Lo(n, r, o) {
    if (ut.current !== xi) throw Error(m(168));
    Gt(ut, r), Gt(_n, o);
  }
  function ws(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(m(108, wt(n) || "Unknown", c));
    return Ce({}, o, u);
  }
  function Oc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || xi, Zr = ut.current, Gt(ut, n), Gt(_n, _n.current), !0;
  }
  function Zv(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(m(169));
    o ? (n = ws(n, r, Zr), u.__reactInternalMemoizedMergedChildContext = n, It(_n), It(ut), Gt(ut, n)) : It(_n), Gt(_n, o);
  }
  var ga = null, tr = !1, Ts = !1;
  function Ud(n) {
    ga === null ? ga = [n] : ga.push(n);
  }
  function jd(n) {
    tr = !0, Ud(n);
  }
  function Jr() {
    if (!Ts && ga !== null) {
      Ts = !0;
      var n = 0, r = Ft;
      try {
        var o = ga;
        for (Ft = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        ga = null, tr = !1;
      } catch (c) {
        throw ga !== null && (ga = ga.slice(n + 1)), rn(Mr, Jr), c;
      } finally {
        Ft = r, Ts = !1;
      }
    }
    return null;
  }
  var Mo = [], ea = 0, dl = null, su = 0, ta = [], wr = 0, ja = null, ur = 1, Wi = "";
  function Sa(n, r) {
    Mo[ea++] = su, Mo[ea++] = dl, dl = n, su = r;
  }
  function Pd(n, r, o) {
    ta[wr++] = ur, ta[wr++] = Wi, ta[wr++] = ja, ja = n;
    var u = ur;
    n = Wi;
    var c = 32 - Nr(u) - 1;
    u &= ~(1 << c), o += 1;
    var p = 32 - Nr(r) + c;
    if (30 < p) {
      var C = c - c % 5;
      p = (u & (1 << C) - 1).toString(32), u >>= C, c -= C, ur = 1 << 32 - Nr(r) + c | o << c | u, Wi = p + n;
    } else ur = 1 << p | o << c | u, Wi = n;
  }
  function Lc(n) {
    n.return !== null && (Sa(n, 1), Pd(n, 1, 0));
  }
  function Fd(n) {
    for (; n === dl; ) dl = Mo[--ea], Mo[ea] = null, su = Mo[--ea], Mo[ea] = null;
    for (; n === ja; ) ja = ta[--wr], ta[wr] = null, Wi = ta[--wr], ta[wr] = null, ur = ta[--wr], ta[wr] = null;
  }
  var Ca = null, na = null, dn = !1, Pa = null;
  function Hd(n, r) {
    var o = Wa(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Jv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ca = n, na = li(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ca = n, na = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = ja !== null ? { id: ur, overflow: Wi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Wa(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Ca = n, na = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Mc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Nc(n) {
    if (dn) {
      var r = na;
      if (r) {
        var o = r;
        if (!Jv(n, r)) {
          if (Mc(n)) throw Error(m(418));
          r = li(o.nextSibling);
          var u = Ca;
          r && Jv(n, r) ? Hd(u, o) : (n.flags = n.flags & -4097 | 2, dn = !1, Ca = n);
        }
      } else {
        if (Mc(n)) throw Error(m(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Ca = n;
      }
    }
  }
  function eh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Ca = n;
  }
  function Ac(n) {
    if (n !== Ca) return !1;
    if (!dn) return eh(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Es(n.type, n.memoizedProps)), r && (r = na)) {
      if (Mc(n)) throw th(), Error(m(418));
      for (; r; ) Hd(n, r), r = li(r.nextSibling);
    }
    if (eh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                na = li(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        na = null;
      }
    } else na = Ca ? li(n.stateNode.nextSibling) : null;
    return !0;
  }
  function th() {
    for (var n = na; n; ) n = li(n.nextSibling);
  }
  function xn() {
    na = Ca = null, dn = !1;
  }
  function Vd(n) {
    Pa === null ? Pa = [n] : Pa.push(n);
  }
  var zc = Ee.ReactCurrentBatchConfig;
  function pl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(m(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(m(147, n));
        var c = u, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(C) {
          var b = c.refs;
          C === null ? delete b[p] : b[p] = C;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string") throw Error(m(284));
      if (!o._owner) throw Error(m(290, n));
    }
    return n;
  }
  function Ri(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function nh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uc(n) {
    function r(V, A) {
      if (n) {
        var I = V.deletions;
        I === null ? (V.deletions = [A], V.flags |= 16) : I.push(A);
      }
    }
    function o(V, A) {
      if (!n) return null;
      for (; A !== null; ) r(V, A), A = A.sibling;
      return null;
    }
    function u(V, A) {
      for (V = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? V.set(A.key, A) : V.set(A.index, A), A = A.sibling;
      return V;
    }
    function c(V, A) {
      return V = Ho(V, A), V.index = 0, V.sibling = null, V;
    }
    function p(V, A, I) {
      return V.index = I, n ? (I = V.alternate, I !== null ? (I = I.index, I < A ? (V.flags |= 2, A) : I) : (V.flags |= 2, A)) : (V.flags |= 1048576, A);
    }
    function C(V) {
      return n && V.alternate === null && (V.flags |= 2), V;
    }
    function b(V, A, I, ge) {
      return A === null || A.tag !== 6 ? (A = wf(I, V.mode, ge), A.return = V, A) : (A = c(A, I), A.return = V, A);
    }
    function L(V, A, I, ge) {
      var Be = I.type;
      return Be === he ? ce(V, A, I.props.children, ge, I.key) : A !== null && (A.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === Ge && nh(Be) === A.type) ? (ge = c(A, I.props), ge.ref = pl(V, A, I), ge.return = V, ge) : (ge = xf(I.type, I.key, I.props, null, V.mode, ge), ge.ref = pl(V, A, I), ge.return = V, ge);
    }
    function q(V, A, I, ge) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== I.containerInfo || A.stateNode.implementation !== I.implementation ? (A = $s(I, V.mode, ge), A.return = V, A) : (A = c(A, I.children || []), A.return = V, A);
    }
    function ce(V, A, I, ge, Be) {
      return A === null || A.tag !== 7 ? (A = Dl(I, V.mode, ge, Be), A.return = V, A) : (A = c(A, I), A.return = V, A);
    }
    function fe(V, A, I) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = wf("" + A, V.mode, I), A.return = V, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ue:
            return I = xf(A.type, A.key, A.props, null, V.mode, I), I.ref = pl(V, null, A), I.return = V, I;
          case _e:
            return A = $s(A, V.mode, I), A.return = V, A;
          case Ge:
            var ge = A._init;
            return fe(V, ge(A._payload), I);
        }
        if (Kn(A) || De(A)) return A = Dl(A, V.mode, I, null), A.return = V, A;
        Ri(V, A);
      }
      return null;
    }
    function le(V, A, I, ge) {
      var Be = A !== null ? A.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return Be !== null ? null : b(V, A, "" + I, ge);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case ue:
            return I.key === Be ? L(V, A, I, ge) : null;
          case _e:
            return I.key === Be ? q(V, A, I, ge) : null;
          case Ge:
            return Be = I._init, le(
              V,
              A,
              Be(I._payload),
              ge
            );
        }
        if (Kn(I) || De(I)) return Be !== null ? null : ce(V, A, I, ge, null);
        Ri(V, I);
      }
      return null;
    }
    function Me(V, A, I, ge, Be) {
      if (typeof ge == "string" && ge !== "" || typeof ge == "number") return V = V.get(I) || null, b(A, V, "" + ge, Be);
      if (typeof ge == "object" && ge !== null) {
        switch (ge.$$typeof) {
          case ue:
            return V = V.get(ge.key === null ? I : ge.key) || null, L(A, V, ge, Be);
          case _e:
            return V = V.get(ge.key === null ? I : ge.key) || null, q(A, V, ge, Be);
          case Ge:
            var tt = ge._init;
            return Me(V, A, I, tt(ge._payload), Be);
        }
        if (Kn(ge) || De(ge)) return V = V.get(I) || null, ce(A, V, ge, Be, null);
        Ri(A, ge);
      }
      return null;
    }
    function je(V, A, I, ge) {
      for (var Be = null, tt = null, Pe = A, rt = A = 0, Gn = null; Pe !== null && rt < I.length; rt++) {
        Pe.index > rt ? (Gn = Pe, Pe = null) : Gn = Pe.sibling;
        var Ht = le(V, Pe, I[rt], ge);
        if (Ht === null) {
          Pe === null && (Pe = Gn);
          break;
        }
        n && Pe && Ht.alternate === null && r(V, Pe), A = p(Ht, A, rt), tt === null ? Be = Ht : tt.sibling = Ht, tt = Ht, Pe = Gn;
      }
      if (rt === I.length) return o(V, Pe), dn && Sa(V, rt), Be;
      if (Pe === null) {
        for (; rt < I.length; rt++) Pe = fe(V, I[rt], ge), Pe !== null && (A = p(Pe, A, rt), tt === null ? Be = Pe : tt.sibling = Pe, tt = Pe);
        return dn && Sa(V, rt), Be;
      }
      for (Pe = u(V, Pe); rt < I.length; rt++) Gn = Me(Pe, V, rt, I[rt], ge), Gn !== null && (n && Gn.alternate !== null && Pe.delete(Gn.key === null ? rt : Gn.key), A = p(Gn, A, rt), tt === null ? Be = Gn : tt.sibling = Gn, tt = Gn);
      return n && Pe.forEach(function(Ji) {
        return r(V, Ji);
      }), dn && Sa(V, rt), Be;
    }
    function He(V, A, I, ge) {
      var Be = De(I);
      if (typeof Be != "function") throw Error(m(150));
      if (I = Be.call(I), I == null) throw Error(m(151));
      for (var tt = Be = null, Pe = A, rt = A = 0, Gn = null, Ht = I.next(); Pe !== null && !Ht.done; rt++, Ht = I.next()) {
        Pe.index > rt ? (Gn = Pe, Pe = null) : Gn = Pe.sibling;
        var Ji = le(V, Pe, Ht.value, ge);
        if (Ji === null) {
          Pe === null && (Pe = Gn);
          break;
        }
        n && Pe && Ji.alternate === null && r(V, Pe), A = p(Ji, A, rt), tt === null ? Be = Ji : tt.sibling = Ji, tt = Ji, Pe = Gn;
      }
      if (Ht.done) return o(
        V,
        Pe
      ), dn && Sa(V, rt), Be;
      if (Pe === null) {
        for (; !Ht.done; rt++, Ht = I.next()) Ht = fe(V, Ht.value, ge), Ht !== null && (A = p(Ht, A, rt), tt === null ? Be = Ht : tt.sibling = Ht, tt = Ht);
        return dn && Sa(V, rt), Be;
      }
      for (Pe = u(V, Pe); !Ht.done; rt++, Ht = I.next()) Ht = Me(Pe, V, rt, Ht.value, ge), Ht !== null && (n && Ht.alternate !== null && Pe.delete(Ht.key === null ? rt : Ht.key), A = p(Ht, A, rt), tt === null ? Be = Ht : tt.sibling = Ht, tt = Ht);
      return n && Pe.forEach(function(og) {
        return r(V, og);
      }), dn && Sa(V, rt), Be;
    }
    function Un(V, A, I, ge) {
      if (typeof I == "object" && I !== null && I.type === he && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case ue:
            e: {
              for (var Be = I.key, tt = A; tt !== null; ) {
                if (tt.key === Be) {
                  if (Be = I.type, Be === he) {
                    if (tt.tag === 7) {
                      o(V, tt.sibling), A = c(tt, I.props.children), A.return = V, V = A;
                      break e;
                    }
                  } else if (tt.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === Ge && nh(Be) === tt.type) {
                    o(V, tt.sibling), A = c(tt, I.props), A.ref = pl(V, tt, I), A.return = V, V = A;
                    break e;
                  }
                  o(V, tt);
                  break;
                } else r(V, tt);
                tt = tt.sibling;
              }
              I.type === he ? (A = Dl(I.props.children, V.mode, ge, I.key), A.return = V, V = A) : (ge = xf(I.type, I.key, I.props, null, V.mode, ge), ge.ref = pl(V, A, I), ge.return = V, V = ge);
            }
            return C(V);
          case _e:
            e: {
              for (tt = I.key; A !== null; ) {
                if (A.key === tt) if (A.tag === 4 && A.stateNode.containerInfo === I.containerInfo && A.stateNode.implementation === I.implementation) {
                  o(V, A.sibling), A = c(A, I.children || []), A.return = V, V = A;
                  break e;
                } else {
                  o(V, A);
                  break;
                }
                else r(V, A);
                A = A.sibling;
              }
              A = $s(I, V.mode, ge), A.return = V, V = A;
            }
            return C(V);
          case Ge:
            return tt = I._init, Un(V, A, tt(I._payload), ge);
        }
        if (Kn(I)) return je(V, A, I, ge);
        if (De(I)) return He(V, A, I, ge);
        Ri(V, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, A !== null && A.tag === 6 ? (o(V, A.sibling), A = c(A, I), A.return = V, V = A) : (o(V, A), A = wf(I, V.mode, ge), A.return = V, V = A), C(V)) : o(V, A);
    }
    return Un;
  }
  var cu = Uc(!0), rh = Uc(!1), qi = St(null), Yn = null, we = null, Fa = null;
  function Ea() {
    Fa = we = Yn = null;
  }
  function Bd(n) {
    var r = qi.current;
    It(qi), n._currentValue = r;
  }
  function $d(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function fu(n, r) {
    Yn = n, Fa = we = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ia = !0), n.firstContext = null);
  }
  function Ha(n) {
    var r = n._currentValue;
    if (Fa !== n) if (n = { context: n, memoizedValue: r, next: null }, we === null) {
      if (Yn === null) throw Error(m(308));
      we = n, Yn.dependencies = { lanes: 0, firstContext: n };
    } else we = we.next = n;
    return r;
  }
  var vl = null;
  function Hn(n) {
    vl === null ? vl = [n] : vl.push(n);
  }
  function ah(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, Hn(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Qi(n, u);
  }
  function Qi(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var No = !1;
  function jc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function du(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ra(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ao(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, kt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Qi(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, Hn(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Qi(n, o);
  }
  function Pc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Si(n, o);
    }
  }
  function ih(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, p = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          p === null ? c = p = C : p = p.next = C, o = o.next;
        } while (o !== null);
        p === null ? c = p = r : p = p.next = r;
      } else c = p = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Fc(n, r, o, u) {
    var c = n.updateQueue;
    No = !1;
    var p = c.firstBaseUpdate, C = c.lastBaseUpdate, b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var L = b, q = L.next;
      L.next = null, C === null ? p = q : C.next = q, C = L;
      var ce = n.alternate;
      ce !== null && (ce = ce.updateQueue, b = ce.lastBaseUpdate, b !== C && (b === null ? ce.firstBaseUpdate = q : b.next = q, ce.lastBaseUpdate = L));
    }
    if (p !== null) {
      var fe = c.baseState;
      C = 0, ce = q = L = null, b = p;
      do {
        var le = b.lane, Me = b.eventTime;
        if ((u & le) === le) {
          ce !== null && (ce = ce.next = {
            eventTime: Me,
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          });
          e: {
            var je = n, He = b;
            switch (le = r, Me = o, He.tag) {
              case 1:
                if (je = He.payload, typeof je == "function") {
                  fe = je.call(Me, fe, le);
                  break e;
                }
                fe = je;
                break e;
              case 3:
                je.flags = je.flags & -65537 | 128;
              case 0:
                if (je = He.payload, le = typeof je == "function" ? je.call(Me, fe, le) : je, le == null) break e;
                fe = Ce({}, fe, le);
                break e;
              case 2:
                No = !0;
            }
          }
          b.callback !== null && b.lane !== 0 && (n.flags |= 64, le = c.effects, le === null ? c.effects = [b] : le.push(b));
        } else Me = { eventTime: Me, lane: le, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, ce === null ? (q = ce = Me, L = fe) : ce = ce.next = Me, C |= le;
        if (b = b.next, b === null) {
          if (b = c.shared.pending, b === null) break;
          le = b, b = le.next, le.next = null, c.lastBaseUpdate = le, c.shared.pending = null;
        }
      } while (!0);
      if (ce === null && (L = fe), c.baseState = L, c.firstBaseUpdate = q, c.lastBaseUpdate = ce, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          C |= c.lane, c = c.next;
        while (c !== r);
      } else p === null && (c.shared.lanes = 0);
      wl |= C, n.lanes = C, n.memoizedState = fe;
    }
  }
  function oh(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(m(191, c));
        c.call(u);
      }
    }
  }
  var bs = {}, ui = St(bs), pu = St(bs), _s = St(bs);
  function hl(n) {
    if (n === bs) throw Error(m(174));
    return n;
  }
  function Id(n, r) {
    switch (Gt(_s, r), Gt(pu, n), Gt(ui, bs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Sn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Sn(r, n);
    }
    It(ui), Gt(ui, r);
  }
  function vu() {
    It(ui), It(pu), It(_s);
  }
  function lh(n) {
    hl(_s.current);
    var r = hl(ui.current), o = Sn(r, n.type);
    r !== o && (Gt(pu, n), Gt(ui, o));
  }
  function Yd(n) {
    pu.current === n && (It(ui), It(pu));
  }
  var mn = St(0);
  function Hc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Vc = [];
  function Wd() {
    for (var n = 0; n < Vc.length; n++) Vc[n]._workInProgressVersionPrimary = null;
    Vc.length = 0;
  }
  var Bc = Ee.ReactCurrentDispatcher, Ds = Ee.ReactCurrentBatchConfig, Ve = 0, Ie = null, st = null, bt = null, xa = !1, hu = !1, ks = 0, $y = 0;
  function Tr() {
    throw Error(m(321));
  }
  function Os(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!Na(n[o], r[o])) return !1;
    return !0;
  }
  function ie(n, r, o, u, c, p) {
    if (Ve = p, Ie = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Bc.current = n === null || n.memoizedState === null ? Iy : sn, n = o(u, c), hu) {
      p = 0;
      do {
        if (hu = !1, ks = 0, 25 <= p) throw Error(m(301));
        p += 1, bt = st = null, r.updateQueue = null, Bc.current = rf, n = o(u, c);
      } while (hu);
    }
    if (Bc.current = br, r = st !== null && st.next !== null, Ve = 0, bt = st = Ie = null, xa = !1, r) throw Error(m(300));
    return n;
  }
  function Vn() {
    var n = ks !== 0;
    return ks = 0, n;
  }
  function qe() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return bt === null ? Ie.memoizedState = bt = n : bt = bt.next = n, bt;
  }
  function sr() {
    if (st === null) {
      var n = Ie.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = st.next;
    var r = bt === null ? Ie.memoizedState : bt.next;
    if (r !== null) bt = r, st = n;
    else {
      if (n === null) throw Error(m(310));
      st = n, n = { memoizedState: st.memoizedState, baseState: st.baseState, baseQueue: st.baseQueue, queue: st.queue, next: null }, bt === null ? Ie.memoizedState = bt = n : bt = bt.next = n;
    }
    return bt;
  }
  function Ra(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Gi(n) {
    var r = sr(), o = r.queue;
    if (o === null) throw Error(m(311));
    o.lastRenderedReducer = n;
    var u = st, c = u.baseQueue, p = o.pending;
    if (p !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = p.next, p.next = C;
      }
      u.baseQueue = c = p, o.pending = null;
    }
    if (c !== null) {
      p = c.next, u = u.baseState;
      var b = C = null, L = null, q = p;
      do {
        var ce = q.lane;
        if ((Ve & ce) === ce) L !== null && (L = L.next = { lane: 0, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null }), u = q.hasEagerState ? q.eagerState : n(u, q.action);
        else {
          var fe = {
            lane: ce,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          };
          L === null ? (b = L = fe, C = u) : L = L.next = fe, Ie.lanes |= ce, wl |= ce;
        }
        q = q.next;
      } while (q !== null && q !== p);
      L === null ? C = u : L.next = b, Na(u, r.memoizedState) || (ia = !0), r.memoizedState = u, r.baseState = C, r.baseQueue = L, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        p = c.lane, Ie.lanes |= p, wl |= p, c = c.next;
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Va(n) {
    var r = sr(), o = r.queue;
    if (o === null) throw Error(m(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, p = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var C = c = c.next;
      do
        p = n(p, C.action), C = C.next;
      while (C !== c);
      Na(p, r.memoizedState) || (ia = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), o.lastRenderedState = p;
    }
    return [p, u];
  }
  function mu() {
  }
  function ml(n, r) {
    var o = Ie, u = sr(), c = r(), p = !Na(u.memoizedState, c);
    if (p && (u.memoizedState = c, ia = !0), u = u.queue, Ls(Ic.bind(null, o, u, n), [n]), u.getSnapshot !== r || p || bt !== null && bt.memoizedState.tag & 1) {
      if (o.flags |= 2048, yl(9, $c.bind(null, o, u, c, r), void 0, null), kn === null) throw Error(m(349));
      Ve & 30 || yu(o, r, c);
    }
    return c;
  }
  function yu(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ie.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function $c(n, r, o, u) {
    r.value = o, r.getSnapshot = u, Yc(r) && Wc(n);
  }
  function Ic(n, r, o) {
    return o(function() {
      Yc(r) && Wc(n);
    });
  }
  function Yc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Na(n, o);
    } catch {
      return !0;
    }
  }
  function Wc(n) {
    var r = Qi(n, 1);
    r !== null && Rn(r, n, 1, -1);
  }
  function qc(n) {
    var r = qe();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ra, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ms.bind(null, Ie, n), [r.memoizedState, n];
  }
  function yl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ie.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Qc() {
    return sr().memoizedState;
  }
  function gu(n, r, o, u) {
    var c = qe();
    Ie.flags |= n, c.memoizedState = yl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Su(n, r, o, u) {
    var c = sr();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (st !== null) {
      var C = st.memoizedState;
      if (p = C.destroy, u !== null && Os(u, C.deps)) {
        c.memoizedState = yl(r, o, p, u);
        return;
      }
    }
    Ie.flags |= n, c.memoizedState = yl(1 | r, o, p, u);
  }
  function Gc(n, r) {
    return gu(8390656, 8, n, r);
  }
  function Ls(n, r) {
    return Su(2048, 8, n, r);
  }
  function Xc(n, r) {
    return Su(4, 2, n, r);
  }
  function Kc(n, r) {
    return Su(4, 4, n, r);
  }
  function Zc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Jc(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Su(4, 4, Zc.bind(null, r, n), o);
  }
  function Cu() {
  }
  function gl(n, r) {
    var o = sr();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Os(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function ef(n, r) {
    var o = sr();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Os(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function tf(n, r, o) {
    return Ve & 21 ? (Na(o, r) || (o = ql(), Ie.lanes |= o, wl |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ia = !0), n.memoizedState = o);
  }
  function qd(n, r) {
    var o = Ft;
    Ft = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Ds.transition;
    Ds.transition = {};
    try {
      n(!1), r();
    } finally {
      Ft = o, Ds.transition = u;
    }
  }
  function nf() {
    return sr().memoizedState;
  }
  function uh(n, r, o) {
    var u = Zi(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, Qd(n)) Eu(r, o);
    else if (o = ah(n, r, o, u), o !== null) {
      var c = ar();
      Rn(o, n, u, c), zo(o, r, u);
    }
  }
  function Ms(n, r, o) {
    var u = Zi(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Qd(n)) Eu(r, c);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null)) try {
        var C = r.lastRenderedState, b = p(C, o);
        if (c.hasEagerState = !0, c.eagerState = b, Na(b, C)) {
          var L = r.interleaved;
          L === null ? (c.next = c, Hn(r)) : (c.next = L.next, L.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      o = ah(n, r, c, u), o !== null && (c = ar(), Rn(o, n, u, c), zo(o, r, u));
    }
  }
  function Qd(n) {
    var r = n.alternate;
    return n === Ie || r !== null && r === Ie;
  }
  function Eu(n, r) {
    hu = xa = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function zo(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Si(n, o);
    }
  }
  var br = { readContext: Ha, useCallback: Tr, useContext: Tr, useEffect: Tr, useImperativeHandle: Tr, useInsertionEffect: Tr, useLayoutEffect: Tr, useMemo: Tr, useReducer: Tr, useRef: Tr, useState: Tr, useDebugValue: Tr, useDeferredValue: Tr, useTransition: Tr, useMutableSource: Tr, useSyncExternalStore: Tr, useId: Tr, unstable_isNewReconciler: !1 }, Iy = { readContext: Ha, useCallback: function(n, r) {
    return qe().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ha, useEffect: Gc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, gu(
      4194308,
      4,
      Zc.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return gu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return gu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = qe();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = qe();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = uh.bind(null, Ie, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = qe();
    return n = { current: n }, r.memoizedState = n;
  }, useState: qc, useDebugValue: Cu, useDeferredValue: function(n) {
    return qe().memoizedState = n;
  }, useTransition: function() {
    var n = qc(!1), r = n[0];
    return n = qd.bind(null, n[1]), qe().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Ie, c = qe();
    if (dn) {
      if (o === void 0) throw Error(m(407));
      o = o();
    } else {
      if (o = r(), kn === null) throw Error(m(349));
      Ve & 30 || yu(u, r, o);
    }
    c.memoizedState = o;
    var p = { value: o, getSnapshot: r };
    return c.queue = p, Gc(Ic.bind(
      null,
      u,
      p,
      n
    ), [n]), u.flags |= 2048, yl(9, $c.bind(null, u, p, o, r), void 0, null), o;
  }, useId: function() {
    var n = qe(), r = kn.identifierPrefix;
    if (dn) {
      var o = Wi, u = ur;
      o = (u & ~(1 << 32 - Nr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = ks++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = $y++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, sn = {
    readContext: Ha,
    useCallback: gl,
    useContext: Ha,
    useEffect: Ls,
    useImperativeHandle: Jc,
    useInsertionEffect: Xc,
    useLayoutEffect: Kc,
    useMemo: ef,
    useReducer: Gi,
    useRef: Qc,
    useState: function() {
      return Gi(Ra);
    },
    useDebugValue: Cu,
    useDeferredValue: function(n) {
      var r = sr();
      return tf(r, st.memoizedState, n);
    },
    useTransition: function() {
      var n = Gi(Ra)[0], r = sr().memoizedState;
      return [n, r];
    },
    useMutableSource: mu,
    useSyncExternalStore: ml,
    useId: nf,
    unstable_isNewReconciler: !1
  }, rf = { readContext: Ha, useCallback: gl, useContext: Ha, useEffect: Ls, useImperativeHandle: Jc, useInsertionEffect: Xc, useLayoutEffect: Kc, useMemo: ef, useReducer: Va, useRef: Qc, useState: function() {
    return Va(Ra);
  }, useDebugValue: Cu, useDeferredValue: function(n) {
    var r = sr();
    return st === null ? r.memoizedState = n : tf(r, st.memoizedState, n);
  }, useTransition: function() {
    var n = Va(Ra)[0], r = sr().memoizedState;
    return [n, r];
  }, useMutableSource: mu, useSyncExternalStore: ml, useId: nf, unstable_isNewReconciler: !1 };
  function aa(n, r) {
    if (n && n.defaultProps) {
      r = Ce({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Sl(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : Ce({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Cl = { isMounted: function(n) {
    return (n = n._reactInternals) ? $e(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = ar(), c = Zi(n), p = ra(u, c);
    p.payload = r, o != null && (p.callback = o), r = Ao(n, p, c), r !== null && (Rn(r, n, c, u), Pc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = ar(), c = Zi(n), p = ra(u, c);
    p.tag = 1, p.payload = r, o != null && (p.callback = o), r = Ao(n, p, c), r !== null && (Rn(r, n, c, u), Pc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = ar(), u = Zi(n), c = ra(o, u);
    c.tag = 2, r != null && (c.callback = r), r = Ao(n, c, u), r !== null && (Rn(r, n, u, o), Pc(r, n, u));
  } };
  function sh(n, r, o, u, c, p, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, C) : r.prototype && r.prototype.isPureReactComponent ? !vs(o, u) || !vs(c, p) : !0;
  }
  function ch(n, r, o) {
    var u = !1, c = xi, p = r.contextType;
    return typeof p == "object" && p !== null ? p = Ha(p) : (c = hn(r) ? Zr : ut.current, u = r.contextTypes, p = (u = u != null) ? za(n, c) : xi), r = new r(o, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Cl, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function fh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && Cl.enqueueReplaceState(r, r.state, null);
  }
  function Gd(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, jc(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? c.context = Ha(p) : (p = hn(r) ? Zr : ut.current, c.context = za(n, p)), c.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (Sl(n, r, p, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Cl.enqueueReplaceState(c, c.state, null), Fc(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Uo(n, r) {
    try {
      var o = "", u = r;
      do
        o += mt(u), u = u.return;
      while (u);
      var c = o;
    } catch (p) {
      c = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Xd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Ns(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var dh = typeof WeakMap == "function" ? WeakMap : Map;
  function ph(n, r, o) {
    o = ra(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      mf || (mf = !0, ip = u), Ns(n, r);
    }, o;
  }
  function vh(n, r, o) {
    o = ra(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        Ns(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
      Ns(n, r), typeof u != "function" && (Ia === null ? Ia = /* @__PURE__ */ new Set([this]) : Ia.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function As(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new dh();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = eg.bind(null, n, r, o), r.then(n, n));
  }
  function hh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Kd(n, r, o, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = ra(-1, 1), r.tag = 2, Ao(o, r, 1))), o.lanes |= 1), n);
  }
  var mh = Ee.ReactCurrentOwner, ia = !1;
  function An(n, r, o, u) {
    r.child = n === null ? rh(r, null, o, u) : cu(r, n.child, o, u);
  }
  function xu(n, r, o, u, c) {
    o = o.render;
    var p = r.ref;
    return fu(r, c), u = ie(n, r, o, u, p, c), o = Vn(), n !== null && !ia ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, zn(n, r, c)) : (dn && o && Lc(r), r.flags |= 1, An(n, r, u, c), r.child);
  }
  function jo(n, r, o, u, c) {
    if (n === null) {
      var p = o.type;
      return typeof p == "function" && !cp(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = p, af(n, r, p, u, c)) : (n = xf(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & c)) {
      var C = p.memoizedProps;
      if (o = o.compare, o = o !== null ? o : vs, o(C, u) && n.ref === r.ref) return zn(n, r, c);
    }
    return r.flags |= 1, n = Ho(p, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function af(n, r, o, u, c) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (vs(p, u) && n.ref === r.ref) if (ia = !1, r.pendingProps = u = p, (n.lanes & c) !== 0) n.flags & 131072 && (ia = !0);
      else return r.lanes = n.lanes, zn(n, r, c);
    }
    return vt(n, r, o, u, c);
  }
  function oa(n, r, o) {
    var u = r.pendingProps, c = u.children, p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Gt(Mu, la), la |= o;
    else {
      if (!(o & 1073741824)) return n = p !== null ? p.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Gt(Mu, la), la |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : o, Gt(Mu, la), la |= u;
    }
    else p !== null ? (u = p.baseLanes | o, r.memoizedState = null) : u = o, Gt(Mu, la), la |= u;
    return An(n, r, c, o), r.child;
  }
  function El(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function vt(n, r, o, u, c) {
    var p = hn(o) ? Zr : ut.current;
    return p = za(r, p), fu(r, c), o = ie(n, r, o, u, p, c), u = Vn(), n !== null && !ia ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, zn(n, r, c)) : (dn && u && Lc(r), r.flags |= 1, An(n, r, o, c), r.child);
  }
  function zs(n, r, o, u, c) {
    if (hn(o)) {
      var p = !0;
      Oc(r);
    } else p = !1;
    if (fu(r, c), r.stateNode === null) js(n, r), ch(r, o, u), Gd(r, o, u, c), u = !0;
    else if (n === null) {
      var C = r.stateNode, b = r.memoizedProps;
      C.props = b;
      var L = C.context, q = o.contextType;
      typeof q == "object" && q !== null ? q = Ha(q) : (q = hn(o) ? Zr : ut.current, q = za(r, q));
      var ce = o.getDerivedStateFromProps, fe = typeof ce == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      fe || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (b !== u || L !== q) && fh(r, C, u, q), No = !1;
      var le = r.memoizedState;
      C.state = le, Fc(r, u, C, c), L = r.memoizedState, b !== u || le !== L || _n.current || No ? (typeof ce == "function" && (Sl(r, o, ce, u), L = r.memoizedState), (b = No || sh(r, o, b, u, le, L, q)) ? (fe || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), C.props = u, C.state = L, C.context = q, u = b) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      C = r.stateNode, du(n, r), b = r.memoizedProps, q = r.type === r.elementType ? b : aa(r.type, b), C.props = q, fe = r.pendingProps, le = C.context, L = o.contextType, typeof L == "object" && L !== null ? L = Ha(L) : (L = hn(o) ? Zr : ut.current, L = za(r, L));
      var Me = o.getDerivedStateFromProps;
      (ce = typeof Me == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (b !== fe || le !== L) && fh(r, C, u, L), No = !1, le = r.memoizedState, C.state = le, Fc(r, u, C, c);
      var je = r.memoizedState;
      b !== fe || le !== je || _n.current || No ? (typeof Me == "function" && (Sl(r, o, Me, u), je = r.memoizedState), (q = No || sh(r, o, q, u, le, je, L) || !1) ? (ce || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, je, L), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, je, L)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = je), C.props = u, C.state = je, C.context = L, u = q) : (typeof C.componentDidUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return of(n, r, o, u, p, c);
  }
  function of(n, r, o, u, c, p) {
    El(n, r);
    var C = (r.flags & 128) !== 0;
    if (!u && !C) return c && Zv(r, o, !1), zn(n, r, p);
    u = r.stateNode, mh.current = r;
    var b = C && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && C ? (r.child = cu(r, n.child, null, p), r.child = cu(r, null, b, p)) : An(n, r, b, p), r.memoizedState = u.state, c && Zv(r, o, !0), r.child;
  }
  function Yy(n) {
    var r = n.stateNode;
    r.pendingContext ? Lo(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Lo(n, r.context, !1), Id(n, r.containerInfo);
  }
  function yh(n, r, o, u, c) {
    return xn(), Vd(c), r.flags |= 256, An(n, r, o, u), r.child;
  }
  var Us = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function gh(n, r, o) {
    var u = r.pendingProps, c = mn.current, p = !1, C = (r.flags & 128) !== 0, b;
    if ((b = C) || (b = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), b ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Gt(mn, c & 1), n === null)
      return Nc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = u.children, n = u.fallback, p ? (u = r.mode, p = r.child, C = { mode: "hidden", children: C }, !(u & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = C) : p = Rf(C, u, 0, null), n = Dl(n, u, o, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = xl(o), r.memoizedState = Us, n) : lf(r, C));
    if (c = n.memoizedState, c !== null && (b = c.dehydrated, b !== null)) return Zd(n, r, C, u, b, c, o);
    if (p) {
      p = u.fallback, C = r.mode, c = n.child, b = c.sibling;
      var L = { mode: "hidden", children: u.children };
      return !(C & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = Ho(c, L), u.subtreeFlags = c.subtreeFlags & 14680064), b !== null ? p = Ho(b, p) : (p = Dl(p, C, o, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, C = n.child.memoizedState, C = C === null ? xl(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, p.memoizedState = C, p.childLanes = n.childLanes & ~o, r.memoizedState = Us, u;
    }
    return p = n.child, n = p.sibling, u = Ho(p, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function lf(n, r) {
    return r = Rf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function uf(n, r, o, u) {
    return u !== null && Vd(u), cu(r, n.child, null, o), n = lf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Zd(n, r, o, u, c, p, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Xd(Error(m(422))), uf(n, r, C, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = u.fallback, c = r.mode, u = Rf({ mode: "visible", children: u.children }, c, 0, null), p = Dl(p, c, C, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, r.mode & 1 && cu(r, n.child, null, C), r.child.memoizedState = xl(C), r.memoizedState = Us, p);
    if (!(r.mode & 1)) return uf(n, r, C, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var b = u.dgst;
      return u = b, p = Error(m(419)), u = Xd(p, u, void 0), uf(n, r, C, u);
    }
    if (b = (C & n.childLanes) !== 0, ia || b) {
      if (u = kn, u !== null) {
        switch (C & -C) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | C) ? 0 : c, c !== 0 && c !== p.retryLane && (p.retryLane = c, Qi(n, c), Rn(u, n, c, -1));
      }
      return Bs(), u = Xd(Error(m(421))), uf(n, r, C, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = sp.bind(null, n), c._reactRetry = r, null) : (n = p.treeContext, na = li(c.nextSibling), Ca = r, dn = !0, Pa = null, n !== null && (ta[wr++] = ur, ta[wr++] = Wi, ta[wr++] = ja, ur = n.id, Wi = n.overflow, ja = r), r = lf(r, u.children), r.flags |= 4096, r);
  }
  function Sh(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), $d(n.return, r, o);
  }
  function sf(n, r, o, u, c) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = o, p.tailMode = c);
  }
  function Jd(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, p = u.tail;
    if (An(n, r, u.children, o), u = mn.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Sh(n, o, r);
        else if (n.tag === 19) Sh(n, o, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (Gt(mn, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && Hc(n) === null && (c = o), o = o.sibling;
        o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), sf(r, !1, c, o, p);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Hc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = o, o = c, c = n;
        }
        sf(r, !0, o, null, p);
        break;
      case "together":
        sf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function js(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function zn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), wl |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, o = Ho(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Ho(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Xi(n, r, o) {
    switch (r.tag) {
      case 3:
        Yy(r), xn();
        break;
      case 5:
        lh(r);
        break;
      case 1:
        hn(r.type) && Oc(r);
        break;
      case 4:
        Id(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Gt(qi, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Gt(mn, mn.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? gh(n, r, o) : (Gt(mn, mn.current & 1), n = zn(n, r, o), n !== null ? n.sibling : null);
        Gt(mn, mn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u) return Jd(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Gt(mn, mn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, oa(n, r, o);
    }
    return zn(n, r, o);
  }
  var wi, Ru, wu, Ba;
  wi = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Ru = function() {
  }, wu = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, hl(ui.current);
      var p = null;
      switch (o) {
        case "input":
          c = Ln(n, c), u = Ln(n, u), p = [];
          break;
        case "select":
          c = Ce({}, c, { value: void 0 }), u = Ce({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          c = Wr(n, c), u = Wr(n, u), p = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = kc);
      }
      Nn(o, u);
      var C;
      o = null;
      for (q in c) if (!u.hasOwnProperty(q) && c.hasOwnProperty(q) && c[q] != null) if (q === "style") {
        var b = c[q];
        for (C in b) b.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else q !== "dangerouslySetInnerHTML" && q !== "children" && q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && q !== "autoFocus" && (R.hasOwnProperty(q) ? p || (p = []) : (p = p || []).push(q, null));
      for (q in u) {
        var L = u[q];
        if (b = c != null ? c[q] : void 0, u.hasOwnProperty(q) && L !== b && (L != null || b != null)) if (q === "style") if (b) {
          for (C in b) !b.hasOwnProperty(C) || L && L.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in L) L.hasOwnProperty(C) && b[C] !== L[C] && (o || (o = {}), o[C] = L[C]);
        } else o || (p || (p = []), p.push(
          q,
          o
        )), o = L;
        else q === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, b = b ? b.__html : void 0, L != null && b !== L && (p = p || []).push(q, L)) : q === "children" ? typeof L != "string" && typeof L != "number" || (p = p || []).push(q, "" + L) : q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && (R.hasOwnProperty(q) ? (L != null && q === "onScroll" && ln("scroll", n), p || b === L || (p = [])) : (p = p || []).push(q, L));
      }
      o && (p = p || []).push("style", o);
      var q = p;
      (r.updateQueue = q) && (r.flags |= 4);
    }
  }, Ba = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function Dn(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var u = null; o !== null; ) o.alternate !== null && (u = o), o = o.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function _r(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function Wy(n, r, o) {
    var u = r.pendingProps;
    switch (Fd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _r(r), null;
      case 1:
        return hn(r.type) && Ua(), _r(r), null;
      case 3:
        return u = r.stateNode, vu(), It(_n), It(ut), Wd(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Ac(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Pa !== null && (op(Pa), Pa = null))), Ru(n, r), _r(r), null;
      case 5:
        Yd(r);
        var c = hl(_s.current);
        if (o = r.type, n !== null && r.stateNode != null) wu(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(m(166));
            return _r(r), null;
          }
          if (n = hl(ui.current), Ac(r)) {
            u = r.stateNode, o = r.type;
            var p = r.memoizedProps;
            switch (u[Ei] = r, u[fl] = p, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                ln("cancel", u), ln("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                ln("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < gs.length; c++) ln(gs[c], u);
                break;
              case "source":
                ln("error", u);
                break;
              case "img":
              case "image":
              case "link":
                ln(
                  "error",
                  u
                ), ln("load", u);
                break;
              case "details":
                ln("toggle", u);
                break;
              case "input":
                Mn(u, p), ln("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, ln("invalid", u);
                break;
              case "textarea":
                Er(u, p), ln("invalid", u);
            }
            Nn(o, p), c = null;
            for (var C in p) if (p.hasOwnProperty(C)) {
              var b = p[C];
              C === "children" ? typeof b == "string" ? u.textContent !== b && (p.suppressHydrationWarning !== !0 && Dc(u.textContent, b, n), c = ["children", b]) : typeof b == "number" && u.textContent !== "" + b && (p.suppressHydrationWarning !== !0 && Dc(
                u.textContent,
                b,
                n
              ), c = ["children", "" + b]) : R.hasOwnProperty(C) && b != null && C === "onScroll" && ln("scroll", u);
            }
            switch (o) {
              case "input":
                $n(u), Sr(u, p, !0);
                break;
              case "textarea":
                $n(u), lr(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = kc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            C = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = qr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = C.createElement(o, { is: u.is }) : (n = C.createElement(o), o === "select" && (C = n, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : n = C.createElementNS(n, o), n[Ei] = r, n[fl] = u, wi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = Cn(o, u), o) {
                case "dialog":
                  ln("cancel", n), ln("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ln("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < gs.length; c++) ln(gs[c], n);
                  c = u;
                  break;
                case "source":
                  ln("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  ln(
                    "error",
                    n
                  ), ln("load", n), c = u;
                  break;
                case "details":
                  ln("toggle", n), c = u;
                  break;
                case "input":
                  Mn(n, u), c = Ln(n, u), ln("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = Ce({}, u, { value: void 0 }), ln("invalid", n);
                  break;
                case "textarea":
                  Er(n, u), c = Wr(n, u), ln("invalid", n);
                  break;
                default:
                  c = u;
              }
              Nn(o, c), b = c;
              for (p in b) if (b.hasOwnProperty(p)) {
                var L = b[p];
                p === "style" ? $t(n, L) : p === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && vi(n, L)) : p === "children" ? typeof L == "string" ? (o !== "textarea" || L !== "") && va(n, L) : typeof L == "number" && va(n, "" + L) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (R.hasOwnProperty(p) ? L != null && p === "onScroll" && ln("scroll", n) : L != null && me(n, p, L, C));
              }
              switch (o) {
                case "input":
                  $n(n), Sr(n, u, !1);
                  break;
                case "textarea":
                  $n(n), lr(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + yt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, p = u.value, p != null ? Cr(n, !!u.multiple, p, !1) : u.defaultValue != null && Cr(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = kc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return _r(r), null;
      case 6:
        if (n && r.stateNode != null) Ba(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(m(166));
          if (o = hl(_s.current), hl(ui.current), Ac(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Ei] = r, (p = u.nodeValue !== o) && (n = Ca, n !== null)) switch (n.tag) {
              case 3:
                Dc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Dc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            p && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Ei] = r, r.stateNode = u;
        }
        return _r(r), null;
      case 13:
        if (It(mn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && na !== null && r.mode & 1 && !(r.flags & 128)) th(), xn(), r.flags |= 98560, p = !1;
          else if (p = Ac(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!p) throw Error(m(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(m(317));
              p[Ei] = r;
            } else xn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _r(r), p = !1;
          } else Pa !== null && (op(Pa), Pa = null), p = !0;
          if (!p) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || mn.current & 1 ? qn === 0 && (qn = 3) : Bs())), r.updateQueue !== null && (r.flags |= 4), _r(r), null);
      case 4:
        return vu(), Ru(n, r), n === null && lu(r.stateNode.containerInfo), _r(r), null;
      case 10:
        return Bd(r.type._context), _r(r), null;
      case 17:
        return hn(r.type) && Ua(), _r(r), null;
      case 19:
        if (It(mn), p = r.memoizedState, p === null) return _r(r), null;
        if (u = (r.flags & 128) !== 0, C = p.rendering, C === null) if (u) Dn(p, !1);
        else {
          if (qn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (C = Hc(n), C !== null) {
              for (r.flags |= 128, Dn(p, !1), u = C.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) p = o, n = u, p.flags &= 14680066, C = p.alternate, C === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = C.childLanes, p.lanes = C.lanes, p.child = C.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = C.memoizedProps, p.memoizedState = C.memoizedState, p.updateQueue = C.updateQueue, p.type = C.type, n = C.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return Gt(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          p.tail !== null && Pt() > Au && (r.flags |= 128, u = !0, Dn(p, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Hc(C), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Dn(p, !0), p.tail === null && p.tailMode === "hidden" && !C.alternate && !dn) return _r(r), null;
          } else 2 * Pt() - p.renderingStartTime > Au && o !== 1073741824 && (r.flags |= 128, u = !0, Dn(p, !1), r.lanes = 4194304);
          p.isBackwards ? (C.sibling = r.child, r.child = C) : (o = p.last, o !== null ? o.sibling = C : r.child = C, p.last = C);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = Pt(), r.sibling = null, o = mn.current, Gt(mn, u ? o & 1 | 2 : o & 1), r) : (_r(r), null);
      case 22:
      case 23:
        return Cf(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? la & 1073741824 && (_r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function qy(n, r) {
    switch (Fd(r), r.tag) {
      case 1:
        return hn(r.type) && Ua(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return vu(), It(_n), It(ut), Wd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Yd(r), null;
      case 13:
        if (It(mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(m(340));
          xn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return It(mn), null;
      case 4:
        return vu(), null;
      case 10:
        return Bd(r.type._context), null;
      case 22:
      case 23:
        return Cf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Tu = !1, cr = !1, cf = typeof WeakSet == "function" ? WeakSet : Set, ze = null;
  function bu(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      On(n, r, u);
    }
    else o.current = null;
  }
  function ep(n, r, o) {
    try {
      o();
    } catch (u) {
      On(n, r, u);
    }
  }
  var ff = !1;
  function Qy(n, r) {
    if (Ld = Ma, n = Rc(), Bi(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var u = o.getSelection && o.getSelection();
        if (u && u.rangeCount !== 0) {
          o = u.anchorNode;
          var c = u.anchorOffset, p = u.focusNode;
          u = u.focusOffset;
          try {
            o.nodeType, p.nodeType;
          } catch {
            o = null;
            break e;
          }
          var C = 0, b = -1, L = -1, q = 0, ce = 0, fe = n, le = null;
          t: for (; ; ) {
            for (var Me; fe !== o || c !== 0 && fe.nodeType !== 3 || (b = C + c), fe !== p || u !== 0 && fe.nodeType !== 3 || (L = C + u), fe.nodeType === 3 && (C += fe.nodeValue.length), (Me = fe.firstChild) !== null; )
              le = fe, fe = Me;
            for (; ; ) {
              if (fe === n) break t;
              if (le === o && ++q === c && (b = C), le === p && ++ce === u && (L = C), (Me = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = Me;
          }
          o = b === -1 || L === -1 ? null : { start: b, end: L };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (sl = { focusedElem: n, selectionRange: o }, Ma = !1, ze = r; ze !== null; ) if (r = ze, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ze = n;
    else for (; ze !== null; ) {
      r = ze;
      try {
        var je = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (je !== null) {
              var He = je.memoizedProps, Un = je.memoizedState, V = r.stateNode, A = V.getSnapshotBeforeUpdate(r.elementType === r.type ? He : aa(r.type, He), Un);
              V.__reactInternalSnapshotBeforeUpdate = A;
            }
            break;
          case 3:
            var I = r.stateNode.containerInfo;
            I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (ge) {
        On(r, r.return, ge);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ze = n;
        break;
      }
      ze = r.return;
    }
    return je = ff, ff = !1, je;
  }
  function _u(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var p = c.destroy;
          c.destroy = void 0, p !== void 0 && ep(r, o, p);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function df(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function pf(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ch(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ch(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[fl], delete r[Ad], delete r[By], delete r[zd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function tp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Eh(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || tp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ps(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = kc));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ps(n, r, o), n = n.sibling; n !== null; ) Ps(n, r, o), n = n.sibling;
  }
  function Du(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Du(n, r, o), n = n.sibling; n !== null; ) Du(n, r, o), n = n.sibling;
  }
  var yn = null, nr = !1;
  function Ur(n, r, o) {
    for (o = o.child; o !== null; ) ku(n, r, o), o = o.sibling;
  }
  function ku(n, r, o) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(yo, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        cr || bu(o, r);
      case 6:
        var u = yn, c = nr;
        yn = null, Ur(n, r, o), yn = u, nr = c, yn !== null && (nr ? (n = yn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : yn.removeChild(o.stateNode));
        break;
      case 18:
        yn !== null && (nr ? (n = yn, o = o.stateNode, n.nodeType === 8 ? Do(n.parentNode, o) : n.nodeType === 1 && Do(n, o), wo(n)) : Do(yn, o.stateNode));
        break;
      case 4:
        u = yn, c = nr, yn = o.stateNode.containerInfo, nr = !0, Ur(n, r, o), yn = u, nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!cr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var p = c, C = p.destroy;
            p = p.tag, C !== void 0 && (p & 2 || p & 4) && ep(o, r, C), c = c.next;
          } while (c !== u);
        }
        Ur(n, r, o);
        break;
      case 1:
        if (!cr && (bu(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (b) {
          On(o, r, b);
        }
        Ur(n, r, o);
        break;
      case 21:
        Ur(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (cr = (u = cr) || o.memoizedState !== null, Ur(n, r, o), cr = u) : Ur(n, r, o);
        break;
      default:
        Ur(n, r, o);
    }
  }
  function Ou(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new cf()), r.forEach(function(u) {
        var c = tg.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function rr(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var p = n, C = r, b = C;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 5:
              yn = b.stateNode, nr = !1;
              break e;
            case 3:
              yn = b.stateNode.containerInfo, nr = !0;
              break e;
            case 4:
              yn = b.stateNode.containerInfo, nr = !0;
              break e;
          }
          b = b.return;
        }
        if (yn === null) throw Error(m(160));
        ku(p, C, c), yn = null, nr = !1;
        var L = c.alternate;
        L !== null && (L.return = null), c.return = null;
      } catch (q) {
        On(c, r, q);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) xh(r, n), r = r.sibling;
  }
  function xh(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (rr(r, n), Ti(n), u & 4) {
          try {
            _u(3, n, n.return), df(3, n);
          } catch (He) {
            On(n, n.return, He);
          }
          try {
            _u(5, n, n.return);
          } catch (He) {
            On(n, n.return, He);
          }
        }
        break;
      case 1:
        rr(r, n), Ti(n), u & 512 && o !== null && bu(o, o.return);
        break;
      case 5:
        if (rr(r, n), Ti(n), u & 512 && o !== null && bu(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            va(c, "");
          } catch (He) {
            On(n, n.return, He);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var p = n.memoizedProps, C = o !== null ? o.memoizedProps : p, b = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null) try {
            b === "input" && p.type === "radio" && p.name != null && Tn(c, p), Cn(b, C);
            var q = Cn(b, p);
            for (C = 0; C < L.length; C += 2) {
              var ce = L[C], fe = L[C + 1];
              ce === "style" ? $t(c, fe) : ce === "dangerouslySetInnerHTML" ? vi(c, fe) : ce === "children" ? va(c, fe) : me(c, ce, fe, q);
            }
            switch (b) {
              case "input":
                gn(c, p);
                break;
              case "textarea":
                pa(c, p);
                break;
              case "select":
                var le = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!p.multiple;
                var Me = p.value;
                Me != null ? Cr(c, !!p.multiple, Me, !1) : le !== !!p.multiple && (p.defaultValue != null ? Cr(
                  c,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : Cr(c, !!p.multiple, p.multiple ? [] : "", !1));
            }
            c[fl] = p;
          } catch (He) {
            On(n, n.return, He);
          }
        }
        break;
      case 6:
        if (rr(r, n), Ti(n), u & 4) {
          if (n.stateNode === null) throw Error(m(162));
          c = n.stateNode, p = n.memoizedProps;
          try {
            c.nodeValue = p;
          } catch (He) {
            On(n, n.return, He);
          }
        }
        break;
      case 3:
        if (rr(r, n), Ti(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          wo(r.containerInfo);
        } catch (He) {
          On(n, n.return, He);
        }
        break;
      case 4:
        rr(r, n), Ti(n);
        break;
      case 13:
        rr(r, n), Ti(n), c = n.child, c.flags & 8192 && (p = c.memoizedState !== null, c.stateNode.isHidden = p, !p || c.alternate !== null && c.alternate.memoizedState !== null || (hf = Pt())), u & 4 && Ou(n);
        break;
      case 22:
        if (ce = o !== null && o.memoizedState !== null, n.mode & 1 ? (cr = (q = cr) || ce, rr(r, n), cr = q) : rr(r, n), Ti(n), u & 8192) {
          if (q = n.memoizedState !== null, (n.stateNode.isHidden = q) && !ce && n.mode & 1) for (ze = n, ce = n.child; ce !== null; ) {
            for (fe = ze = ce; ze !== null; ) {
              switch (le = ze, Me = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _u(4, le, le.return);
                  break;
                case 1:
                  bu(le, le.return);
                  var je = le.stateNode;
                  if (typeof je.componentWillUnmount == "function") {
                    u = le, o = le.return;
                    try {
                      r = u, je.props = r.memoizedProps, je.state = r.memoizedState, je.componentWillUnmount();
                    } catch (He) {
                      On(u, o, He);
                    }
                  }
                  break;
                case 5:
                  bu(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    Rh(fe);
                    continue;
                  }
              }
              Me !== null ? (Me.return = le, ze = Me) : Rh(fe);
            }
            ce = ce.sibling;
          }
          e: for (ce = null, fe = n; ; ) {
            if (fe.tag === 5) {
              if (ce === null) {
                ce = fe;
                try {
                  c = fe.stateNode, q ? (p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (b = fe.stateNode, L = fe.memoizedProps.style, C = L != null && L.hasOwnProperty("display") ? L.display : null, b.style.display = Ct("display", C));
                } catch (He) {
                  On(n, n.return, He);
                }
              }
            } else if (fe.tag === 6) {
              if (ce === null) try {
                fe.stateNode.nodeValue = q ? "" : fe.memoizedProps;
              } catch (He) {
                On(n, n.return, He);
              }
            } else if ((fe.tag !== 22 && fe.tag !== 23 || fe.memoizedState === null || fe === n) && fe.child !== null) {
              fe.child.return = fe, fe = fe.child;
              continue;
            }
            if (fe === n) break e;
            for (; fe.sibling === null; ) {
              if (fe.return === null || fe.return === n) break e;
              ce === fe && (ce = null), fe = fe.return;
            }
            ce === fe && (ce = null), fe.sibling.return = fe.return, fe = fe.sibling;
          }
        }
        break;
      case 19:
        rr(r, n), Ti(n), u & 4 && Ou(n);
        break;
      case 21:
        break;
      default:
        rr(
          r,
          n
        ), Ti(n);
    }
  }
  function Ti(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (tp(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(m(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (va(c, ""), u.flags &= -33);
            var p = Eh(n);
            Du(n, p, c);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, b = Eh(n);
            Ps(n, b, C);
            break;
          default:
            throw Error(m(161));
        }
      } catch (L) {
        On(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Gy(n, r, o) {
    ze = n, np(n);
  }
  function np(n, r, o) {
    for (var u = (n.mode & 1) !== 0; ze !== null; ) {
      var c = ze, p = c.child;
      if (c.tag === 22 && u) {
        var C = c.memoizedState !== null || Tu;
        if (!C) {
          var b = c.alternate, L = b !== null && b.memoizedState !== null || cr;
          b = Tu;
          var q = cr;
          if (Tu = C, (cr = L) && !q) for (ze = c; ze !== null; ) C = ze, L = C.child, C.tag === 22 && C.memoizedState !== null ? rp(c) : L !== null ? (L.return = C, ze = L) : rp(c);
          for (; p !== null; ) ze = p, np(p), p = p.sibling;
          ze = c, Tu = b, cr = q;
        }
        Lu(n);
      } else c.subtreeFlags & 8772 && p !== null ? (p.return = c, ze = p) : Lu(n);
    }
  }
  function Lu(n) {
    for (; ze !== null; ) {
      var r = ze;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              cr || df(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !cr) if (o === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? o.memoizedProps : aa(r.type, o.memoizedProps);
                u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var p = r.updateQueue;
              p !== null && oh(r, p, u);
              break;
            case 3:
              var C = r.updateQueue;
              if (C !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                oh(r, C, o);
              }
              break;
            case 5:
              var b = r.stateNode;
              if (o === null && r.flags & 4) {
                o = b;
                var L = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    L.autoFocus && o.focus();
                    break;
                  case "img":
                    L.src && (o.src = L.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var q = r.alternate;
                if (q !== null) {
                  var ce = q.memoizedState;
                  if (ce !== null) {
                    var fe = ce.dehydrated;
                    fe !== null && wo(fe);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          cr || r.flags & 512 && pf(r);
        } catch (le) {
          On(r, r.return, le);
        }
      }
      if (r === n) {
        ze = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, ze = o;
        break;
      }
      ze = r.return;
    }
  }
  function Rh(n) {
    for (; ze !== null; ) {
      var r = ze;
      if (r === n) {
        ze = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, ze = o;
        break;
      }
      ze = r.return;
    }
  }
  function rp(n) {
    for (; ze !== null; ) {
      var r = ze;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              df(4, r);
            } catch (L) {
              On(r, o, L);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (L) {
                On(r, c, L);
              }
            }
            var p = r.return;
            try {
              pf(r);
            } catch (L) {
              On(r, p, L);
            }
            break;
          case 5:
            var C = r.return;
            try {
              pf(r);
            } catch (L) {
              On(r, C, L);
            }
        }
      } catch (L) {
        On(r, r.return, L);
      }
      if (r === n) {
        ze = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        b.return = r.return, ze = b;
        break;
      }
      ze = r.return;
    }
  }
  var Xy = Math.ceil, Rl = Ee.ReactCurrentDispatcher, vf = Ee.ReactCurrentOwner, $a = Ee.ReactCurrentBatchConfig, kt = 0, kn = null, pn = null, Wn = 0, la = 0, Mu = St(0), qn = 0, Fs = null, wl = 0, Nu = 0, ap = 0, Po = null, Dr = null, hf = 0, Au = 1 / 0, Ki = null, mf = !1, ip = null, Ia = null, zu = !1, Ya = null, yf = 0, Hs = 0, gf = null, Vs = -1, Tl = 0;
  function ar() {
    return kt & 6 ? Pt() : Vs !== -1 ? Vs : Vs = Pt();
  }
  function Zi(n) {
    return n.mode & 1 ? kt & 2 && Wn !== 0 ? Wn & -Wn : zc.transition !== null ? (Tl === 0 && (Tl = ql()), Tl) : (n = Ft, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ss(n.type)), n) : 1;
  }
  function Rn(n, r, o, u) {
    if (50 < Hs) throw Hs = 0, gf = null, Error(m(185));
    Ui(n, o, u), (!(kt & 2) || n !== kn) && (n === kn && (!(kt & 2) && (Nu |= o), qn === 4 && bi(n, Wn)), Qn(n, u), o === 1 && kt === 0 && !(r.mode & 1) && (Au = Pt() + 500, tr && Jr()));
  }
  function Qn(n, r) {
    var o = n.callbackNode;
    Co(n, r);
    var u = Ar(n, n === kn ? Wn : 0);
    if (u === 0) o !== null && cn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && cn(o), r === 1) n.tag === 0 ? jd(Uu.bind(null, n)) : Ud(Uu.bind(null, n)), Nd(function() {
        !(kt & 6) && Jr();
      }), o = null;
      else {
        switch (Gl(u)) {
          case 1:
            o = Mr;
            break;
          case 4:
            o = xt;
            break;
          case 16:
            o = Oa;
            break;
          case 536870912:
            o = Yl;
            break;
          default:
            o = Oa;
        }
        o = Lh(o, Sf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Sf(n, r) {
    if (Vs = -1, Tl = 0, kt & 6) throw Error(m(327));
    var o = n.callbackNode;
    if (ju() && n.callbackNode !== o) return null;
    var u = Ar(n, n === kn ? Wn : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = Ef(n, u);
    else {
      r = u;
      var c = kt;
      kt |= 2;
      var p = Th();
      (kn !== n || Wn !== r) && (Ki = null, Au = Pt() + 500, _l(n, r));
      do
        try {
          Zy();
          break;
        } catch (b) {
          wh(n, b);
        }
      while (!0);
      Ea(), Rl.current = p, kt = c, pn !== null ? r = 0 : (kn = null, Wn = 0, r = qn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Eo(n), c !== 0 && (u = c, r = bl(n, c))), r === 1) throw o = Fs, _l(n, 0), bi(n, u), Qn(n, Pt()), o;
      if (r === 6) bi(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !lp(c) && (r = Ef(n, u), r === 2 && (p = Eo(n), p !== 0 && (u = p, r = bl(n, p))), r === 1)) throw o = Fs, _l(n, 0), bi(n, u), Qn(n, Pt()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Fo(n, Dr, Ki);
            break;
          case 3:
            if (bi(n, u), (u & 130023424) === u && (r = hf + 500 - Pt(), 10 < r)) {
              if (Ar(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                ar(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = cl(Fo.bind(null, n, Dr, Ki), r);
              break;
            }
            Fo(n, Dr, Ki);
            break;
          case 4:
            if (bi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var C = 31 - Nr(u);
              p = 1 << C, C = r[C], C > c && (c = C), u &= ~p;
            }
            if (u = c, u = Pt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Xy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = cl(Fo.bind(null, n, Dr, Ki), u);
              break;
            }
            Fo(n, Dr, Ki);
            break;
          case 5:
            Fo(n, Dr, Ki);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Qn(n, Pt()), n.callbackNode === o ? Sf.bind(null, n) : null;
  }
  function bl(n, r) {
    var o = Po;
    return n.current.memoizedState.isDehydrated && (_l(n, r).flags |= 256), n = Ef(n, r), n !== 2 && (r = Dr, Dr = o, r !== null && op(r)), n;
  }
  function op(n) {
    Dr === null ? Dr = n : Dr.push.apply(Dr, n);
  }
  function lp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var c = o[u], p = c.getSnapshot;
          c = c.value;
          try {
            if (!Na(p(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function bi(n, r) {
    for (r &= ~ap, r &= ~Nu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Nr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function Uu(n) {
    if (kt & 6) throw Error(m(327));
    ju();
    var r = Ar(n, 0);
    if (!(r & 1)) return Qn(n, Pt()), null;
    var o = Ef(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Eo(n);
      u !== 0 && (r = u, o = bl(n, u));
    }
    if (o === 1) throw o = Fs, _l(n, 0), bi(n, r), Qn(n, Pt()), o;
    if (o === 6) throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Fo(n, Dr, Ki), Qn(n, Pt()), null;
  }
  function up(n, r) {
    var o = kt;
    kt |= 1;
    try {
      return n(r);
    } finally {
      kt = o, kt === 0 && (Au = Pt() + 500, tr && Jr());
    }
  }
  function _i(n) {
    Ya !== null && Ya.tag === 0 && !(kt & 6) && ju();
    var r = kt;
    kt |= 1;
    var o = $a.transition, u = Ft;
    try {
      if ($a.transition = null, Ft = 1, n) return n();
    } finally {
      Ft = u, $a.transition = o, kt = r, !(kt & 6) && Jr();
    }
  }
  function Cf() {
    la = Mu.current, It(Mu);
  }
  function _l(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Kv(o)), pn !== null) for (o = pn.return; o !== null; ) {
      var u = o;
      switch (Fd(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Ua();
          break;
        case 3:
          vu(), It(_n), It(ut), Wd();
          break;
        case 5:
          Yd(u);
          break;
        case 4:
          vu();
          break;
        case 13:
          It(mn);
          break;
        case 19:
          It(mn);
          break;
        case 10:
          Bd(u.type._context);
          break;
        case 22:
        case 23:
          Cf();
      }
      o = o.return;
    }
    if (kn = n, pn = n = Ho(n.current, null), Wn = la = r, qn = 0, Fs = null, ap = Nu = wl = 0, Dr = Po = null, vl !== null) {
      for (r = 0; r < vl.length; r++) if (o = vl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, p = o.pending;
        if (p !== null) {
          var C = p.next;
          p.next = c, u.next = C;
        }
        o.pending = u;
      }
      vl = null;
    }
    return n;
  }
  function wh(n, r) {
    do {
      var o = pn;
      try {
        if (Ea(), Bc.current = br, xa) {
          for (var u = Ie.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          xa = !1;
        }
        if (Ve = 0, bt = st = Ie = null, hu = !1, ks = 0, vf.current = null, o === null || o.return === null) {
          qn = 1, Fs = r, pn = null;
          break;
        }
        e: {
          var p = n, C = o.return, b = o, L = r;
          if (r = Wn, b.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var q = L, ce = b, fe = ce.tag;
            if (!(ce.mode & 1) && (fe === 0 || fe === 11 || fe === 15)) {
              var le = ce.alternate;
              le ? (ce.updateQueue = le.updateQueue, ce.memoizedState = le.memoizedState, ce.lanes = le.lanes) : (ce.updateQueue = null, ce.memoizedState = null);
            }
            var Me = hh(C);
            if (Me !== null) {
              Me.flags &= -257, Kd(Me, C, b, p, r), Me.mode & 1 && As(p, q, r), r = Me, L = q;
              var je = r.updateQueue;
              if (je === null) {
                var He = /* @__PURE__ */ new Set();
                He.add(L), r.updateQueue = He;
              } else je.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                As(p, q, r), Bs();
                break e;
              }
              L = Error(m(426));
            }
          } else if (dn && b.mode & 1) {
            var Un = hh(C);
            if (Un !== null) {
              !(Un.flags & 65536) && (Un.flags |= 256), Kd(Un, C, b, p, r), Vd(Uo(L, b));
              break e;
            }
          }
          p = L = Uo(L, b), qn !== 4 && (qn = 2), Po === null ? Po = [p] : Po.push(p), p = C;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var V = ph(p, L, r);
                ih(p, V);
                break e;
              case 1:
                b = L;
                var A = p.type, I = p.stateNode;
                if (!(p.flags & 128) && (typeof A.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Ia === null || !Ia.has(I)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var ge = vh(p, b, r);
                  ih(p, ge);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        _h(o);
      } catch (Be) {
        r = Be, pn === o && o !== null && (pn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Th() {
    var n = Rl.current;
    return Rl.current = br, n === null ? br : n;
  }
  function Bs() {
    (qn === 0 || qn === 3 || qn === 2) && (qn = 4), kn === null || !(wl & 268435455) && !(Nu & 268435455) || bi(kn, Wn);
  }
  function Ef(n, r) {
    var o = kt;
    kt |= 2;
    var u = Th();
    (kn !== n || Wn !== r) && (Ki = null, _l(n, r));
    do
      try {
        Ky();
        break;
      } catch (c) {
        wh(n, c);
      }
    while (!0);
    if (Ea(), kt = o, Rl.current = u, pn !== null) throw Error(m(261));
    return kn = null, Wn = 0, qn;
  }
  function Ky() {
    for (; pn !== null; ) bh(pn);
  }
  function Zy() {
    for (; pn !== null && !Rr(); ) bh(pn);
  }
  function bh(n) {
    var r = Oh(n.alternate, n, la);
    n.memoizedProps = n.pendingProps, r === null ? _h(n) : pn = r, vf.current = null;
  }
  function _h(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = qy(o, r), o !== null) {
          o.flags &= 32767, pn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          qn = 6, pn = null;
          return;
        }
      } else if (o = Wy(o, r, la), o !== null) {
        pn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        pn = r;
        return;
      }
      pn = r = n;
    } while (r !== null);
    qn === 0 && (qn = 5);
  }
  function Fo(n, r, o) {
    var u = Ft, c = $a.transition;
    try {
      $a.transition = null, Ft = 1, Jy(n, r, o, u);
    } finally {
      $a.transition = c, Ft = u;
    }
    return null;
  }
  function Jy(n, r, o, u) {
    do
      ju();
    while (Ya !== null);
    if (kt & 6) throw Error(m(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = o.lanes | o.childLanes;
    if (dd(n, p), n === kn && (pn = kn = null, Wn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || zu || (zu = !0, Lh(Oa, function() {
      return ju(), null;
    })), p = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || p) {
      p = $a.transition, $a.transition = null;
      var C = Ft;
      Ft = 1;
      var b = kt;
      kt |= 4, vf.current = null, Qy(n, o), xh(o, n), wc(sl), Ma = !!Ld, sl = Ld = null, n.current = o, Gy(o), gi(), kt = b, Ft = C, $a.transition = p;
    } else n.current = o;
    if (zu && (zu = !1, Ya = n, yf = c), p = n.pendingLanes, p === 0 && (Ia = null), os(o.stateNode), Qn(n, Pt()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (mf) throw mf = !1, n = ip, ip = null, n;
    return yf & 1 && n.tag !== 0 && ju(), p = n.pendingLanes, p & 1 ? n === gf ? Hs++ : (Hs = 0, gf = n) : Hs = 0, Jr(), null;
  }
  function ju() {
    if (Ya !== null) {
      var n = Gl(yf), r = $a.transition, o = Ft;
      try {
        if ($a.transition = null, Ft = 16 > n ? 16 : n, Ya === null) var u = !1;
        else {
          if (n = Ya, Ya = null, yf = 0, kt & 6) throw Error(m(331));
          var c = kt;
          for (kt |= 4, ze = n.current; ze !== null; ) {
            var p = ze, C = p.child;
            if (ze.flags & 16) {
              var b = p.deletions;
              if (b !== null) {
                for (var L = 0; L < b.length; L++) {
                  var q = b[L];
                  for (ze = q; ze !== null; ) {
                    var ce = ze;
                    switch (ce.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _u(8, ce, p);
                    }
                    var fe = ce.child;
                    if (fe !== null) fe.return = ce, ze = fe;
                    else for (; ze !== null; ) {
                      ce = ze;
                      var le = ce.sibling, Me = ce.return;
                      if (Ch(ce), ce === q) {
                        ze = null;
                        break;
                      }
                      if (le !== null) {
                        le.return = Me, ze = le;
                        break;
                      }
                      ze = Me;
                    }
                  }
                }
                var je = p.alternate;
                if (je !== null) {
                  var He = je.child;
                  if (He !== null) {
                    je.child = null;
                    do {
                      var Un = He.sibling;
                      He.sibling = null, He = Un;
                    } while (He !== null);
                  }
                }
                ze = p;
              }
            }
            if (p.subtreeFlags & 2064 && C !== null) C.return = p, ze = C;
            else e: for (; ze !== null; ) {
              if (p = ze, p.flags & 2048) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  _u(9, p, p.return);
              }
              var V = p.sibling;
              if (V !== null) {
                V.return = p.return, ze = V;
                break e;
              }
              ze = p.return;
            }
          }
          var A = n.current;
          for (ze = A; ze !== null; ) {
            C = ze;
            var I = C.child;
            if (C.subtreeFlags & 2064 && I !== null) I.return = C, ze = I;
            else e: for (C = A; ze !== null; ) {
              if (b = ze, b.flags & 2048) try {
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    df(9, b);
                }
              } catch (Be) {
                On(b, b.return, Be);
              }
              if (b === C) {
                ze = null;
                break e;
              }
              var ge = b.sibling;
              if (ge !== null) {
                ge.return = b.return, ze = ge;
                break e;
              }
              ze = b.return;
            }
          }
          if (kt = c, Jr(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(yo, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Ft = o, $a.transition = r;
      }
    }
    return !1;
  }
  function Dh(n, r, o) {
    r = Uo(o, r), r = ph(n, r, 1), n = Ao(n, r, 1), r = ar(), n !== null && (Ui(n, 1, r), Qn(n, r));
  }
  function On(n, r, o) {
    if (n.tag === 3) Dh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Dh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ia === null || !Ia.has(u))) {
          n = Uo(o, n), n = vh(r, n, 1), r = Ao(r, n, 1), n = ar(), r !== null && (Ui(r, 1, n), Qn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function eg(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = ar(), n.pingedLanes |= n.suspendedLanes & o, kn === n && (Wn & o) === o && (qn === 4 || qn === 3 && (Wn & 130023424) === Wn && 500 > Pt() - hf ? _l(n, 0) : ap |= o), Qn(n, r);
  }
  function kh(n, r) {
    r === 0 && (n.mode & 1 ? (r = go, go <<= 1, !(go & 130023424) && (go = 4194304)) : r = 1);
    var o = ar();
    n = Qi(n, r), n !== null && (Ui(n, r, o), Qn(n, o));
  }
  function sp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), kh(n, o);
  }
  function tg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    u !== null && u.delete(r), kh(n, o);
  }
  var Oh;
  Oh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || _n.current) ia = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return ia = !1, Xi(n, r, o);
      ia = !!(n.flags & 131072);
    }
    else ia = !1, dn && r.flags & 1048576 && Pd(r, su, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        js(n, r), n = r.pendingProps;
        var c = za(r, ut.current);
        fu(r, o), c = ie(null, r, u, n, c, o);
        var p = Vn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, hn(u) ? (p = !0, Oc(r)) : p = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, jc(r), c.updater = Cl, r.stateNode = c, c._reactInternals = r, Gd(r, u, n, o), r = of(null, r, u, !0, p, o)) : (r.tag = 0, dn && p && Lc(r), An(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (js(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = ng(u), n = aa(u, n), c) {
            case 0:
              r = vt(null, r, u, n, o);
              break e;
            case 1:
              r = zs(null, r, u, n, o);
              break e;
            case 11:
              r = xu(null, r, u, n, o);
              break e;
            case 14:
              r = jo(null, r, u, aa(u.type, n), o);
              break e;
          }
          throw Error(m(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : aa(u, c), vt(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : aa(u, c), zs(n, r, u, c, o);
      case 3:
        e: {
          if (Yy(r), n === null) throw Error(m(387));
          u = r.pendingProps, p = r.memoizedState, c = p.element, du(n, r), Fc(r, u, null, o);
          var C = r.memoizedState;
          if (u = C.element, p.isDehydrated) if (p = { element: u, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
            c = Uo(Error(m(423)), r), r = yh(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Uo(Error(m(424)), r), r = yh(n, r, u, o, c);
            break e;
          } else for (na = li(r.stateNode.containerInfo.firstChild), Ca = r, dn = !0, Pa = null, o = rh(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (xn(), u === c) {
              r = zn(n, r, o);
              break e;
            }
            An(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return lh(r), n === null && Nc(r), u = r.type, c = r.pendingProps, p = n !== null ? n.memoizedProps : null, C = c.children, Es(u, c) ? C = null : p !== null && Es(u, p) && (r.flags |= 32), El(n, r), An(n, r, C, o), r.child;
      case 6:
        return n === null && Nc(r), null;
      case 13:
        return gh(n, r, o);
      case 4:
        return Id(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = cu(r, null, u, o) : An(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : aa(u, c), xu(n, r, u, c, o);
      case 7:
        return An(n, r, r.pendingProps, o), r.child;
      case 8:
        return An(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return An(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, p = r.memoizedProps, C = c.value, Gt(qi, u._currentValue), u._currentValue = C, p !== null) if (Na(p.value, C)) {
            if (p.children === c.children && !_n.current) {
              r = zn(n, r, o);
              break e;
            }
          } else for (p = r.child, p !== null && (p.return = r); p !== null; ) {
            var b = p.dependencies;
            if (b !== null) {
              C = p.child;
              for (var L = b.firstContext; L !== null; ) {
                if (L.context === u) {
                  if (p.tag === 1) {
                    L = ra(-1, o & -o), L.tag = 2;
                    var q = p.updateQueue;
                    if (q !== null) {
                      q = q.shared;
                      var ce = q.pending;
                      ce === null ? L.next = L : (L.next = ce.next, ce.next = L), q.pending = L;
                    }
                  }
                  p.lanes |= o, L = p.alternate, L !== null && (L.lanes |= o), $d(
                    p.return,
                    o,
                    r
                  ), b.lanes |= o;
                  break;
                }
                L = L.next;
              }
            } else if (p.tag === 10) C = p.type === r.type ? null : p.child;
            else if (p.tag === 18) {
              if (C = p.return, C === null) throw Error(m(341));
              C.lanes |= o, b = C.alternate, b !== null && (b.lanes |= o), $d(C, o, r), C = p.sibling;
            } else C = p.child;
            if (C !== null) C.return = p;
            else for (C = p; C !== null; ) {
              if (C === r) {
                C = null;
                break;
              }
              if (p = C.sibling, p !== null) {
                p.return = C.return, C = p;
                break;
              }
              C = C.return;
            }
            p = C;
          }
          An(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, fu(r, o), c = Ha(c), u = u(c), r.flags |= 1, An(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = aa(u, r.pendingProps), c = aa(u.type, c), jo(n, r, u, c, o);
      case 15:
        return af(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : aa(u, c), js(n, r), r.tag = 1, hn(u) ? (n = !0, Oc(r)) : n = !1, fu(r, o), ch(r, u, c), Gd(r, u, c, o), of(null, r, u, !0, n, o);
      case 19:
        return Jd(n, r, o);
      case 22:
        return oa(n, r, o);
    }
    throw Error(m(156, r.tag));
  };
  function Lh(n, r) {
    return rn(n, r);
  }
  function Mh(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Wa(n, r, o, u) {
    return new Mh(n, r, o, u);
  }
  function cp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ng(n) {
    if (typeof n == "function") return cp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === ht) return 14;
    }
    return 2;
  }
  function Ho(n, r) {
    var o = n.alternate;
    return o === null ? (o = Wa(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function xf(n, r, o, u, c, p) {
    var C = 2;
    if (u = n, typeof n == "function") cp(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case he:
        return Dl(o.children, c, p, r);
      case ot:
        C = 8, c |= 8;
        break;
      case Rt:
        return n = Wa(12, o, r, c | 2), n.elementType = Rt, n.lanes = p, n;
      case Oe:
        return n = Wa(13, o, r, c), n.elementType = Oe, n.lanes = p, n;
      case Ue:
        return n = Wa(19, o, r, c), n.elementType = Ue, n.lanes = p, n;
      case xe:
        return Rf(o, c, p, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case at:
            C = 10;
            break e;
          case lt:
            C = 9;
            break e;
          case _t:
            C = 11;
            break e;
          case ht:
            C = 14;
            break e;
          case Ge:
            C = 16, u = null;
            break e;
        }
        throw Error(m(130, n == null ? n : typeof n, ""));
    }
    return r = Wa(C, o, r, c), r.elementType = n, r.type = u, r.lanes = p, r;
  }
  function Dl(n, r, o, u) {
    return n = Wa(7, n, u, r), n.lanes = o, n;
  }
  function Rf(n, r, o, u) {
    return n = Wa(22, n, u, r), n.elementType = xe, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function wf(n, r, o) {
    return n = Wa(6, n, null, r), n.lanes = o, n;
  }
  function $s(n, r, o) {
    return r = Wa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Is(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ql(0), this.expirationTimes = Ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ql(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function fp(n, r, o, u, c, p, C, b, L) {
    return n = new Is(n, r, o, b, L), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = Wa(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jc(p), n;
  }
  function Nh(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _e, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function dp(n) {
    if (!n) return xi;
    n = n._reactInternals;
    e: {
      if ($e(n) !== n || n.tag !== 1) throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (hn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (hn(o)) return ws(n, o, r);
    }
    return r;
  }
  function pp(n, r, o, u, c, p, C, b, L) {
    return n = fp(o, u, !0, n, c, p, C, b, L), n.context = dp(null), o = n.current, u = ar(), c = Zi(o), p = ra(u, c), p.callback = r ?? null, Ao(o, p, c), n.current.lanes = c, Ui(n, c, u), Qn(n, u), n;
  }
  function Tf(n, r, o, u) {
    var c = r.current, p = ar(), C = Zi(c);
    return o = dp(o), r.context === null ? r.context = o : r.pendingContext = o, r = ra(p, C), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Ao(c, r, C), n !== null && (Rn(n, c, C, p), Pc(n, c, C)), C;
  }
  function Ys(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Ah(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function vp(n, r) {
    Ah(n, r), (n = n.alternate) && Ah(n, r);
  }
  function rg() {
    return null;
  }
  var hp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function bf(n) {
    this._internalRoot = n;
  }
  Ws.prototype.render = bf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(m(409));
    Tf(n, r, null, null);
  }, Ws.prototype.unmount = bf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      _i(function() {
        Tf(null, n, null, null);
      }), r[Yi] = null;
    }
  };
  function Ws(n) {
    this._internalRoot = n;
  }
  Ws.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Kl();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Qt.length && r !== 0 && r < Qt[o].priority; o++) ;
      Qt.splice(o, 0, n), o === 0 && yc(n);
    }
  };
  function Vo(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function _f(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function zh() {
  }
  function ag(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var q = Ys(C);
          p.call(q);
        };
      }
      var C = pp(r, u, n, 0, null, !1, !1, "", zh);
      return n._reactRootContainer = C, n[Yi] = C.current, lu(n.nodeType === 8 ? n.parentNode : n), _i(), C;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var b = u;
      u = function() {
        var q = Ys(L);
        b.call(q);
      };
    }
    var L = fp(n, 0, !1, null, null, !1, !1, "", zh);
    return n._reactRootContainer = L, n[Yi] = L.current, lu(n.nodeType === 8 ? n.parentNode : n), _i(function() {
      Tf(r, L, o, u);
    }), L;
  }
  function Df(n, r, o, u, c) {
    var p = o._reactRootContainer;
    if (p) {
      var C = p;
      if (typeof c == "function") {
        var b = c;
        c = function() {
          var L = Ys(C);
          b.call(L);
        };
      }
      Tf(r, C, n, c);
    } else C = ag(o, r, n, c, u);
    return Ys(C);
  }
  nl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ni(r.pendingLanes);
          o !== 0 && (Si(r, o | 1), Qn(r, Pt()), !(kt & 6) && (Au = Pt() + 500, Jr()));
        }
        break;
      case 13:
        _i(function() {
          var u = Qi(n, 1);
          if (u !== null) {
            var c = ar();
            Rn(u, n, 1, c);
          }
        }), vp(n, 1);
    }
  }, Xl = function(n) {
    if (n.tag === 13) {
      var r = Qi(n, 134217728);
      if (r !== null) {
        var o = ar();
        Rn(r, n, 134217728, o);
      }
      vp(n, 134217728);
    }
  }, Mt = function(n) {
    if (n.tag === 13) {
      var r = Zi(n), o = Qi(n, r);
      if (o !== null) {
        var u = ar();
        Rn(o, n, r, u);
      }
      vp(n, r);
    }
  }, Kl = function() {
    return Ft;
  }, Zl = function(n, r) {
    var o = Ft;
    try {
      return Ft = n, r();
    } finally {
      Ft = o;
    }
  }, Or = function(n, r, o) {
    switch (r) {
      case "input":
        if (gn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = Qe(u);
              if (!c) throw Error(m(90));
              or(u), gn(u, c);
            }
          }
        }
        break;
      case "textarea":
        pa(n, o);
        break;
      case "select":
        r = o.value, r != null && Cr(n, !!o.multiple, r, !1);
    }
  }, tl = up, Il = _i;
  var ig = { usingClientEntryPoint: !1, Events: [Rs, uu, Qe, ka, vo, up] }, qs = { findFiberByHostInstance: Aa, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Uh = { bundleType: qs.bundleType, version: qs.version, rendererPackageName: qs.rendererPackageName, rendererConfig: qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Et(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: qs.findFiberByHostInstance || rg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var kf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!kf.isDisabled && kf.supportsFiber) try {
      yo = kf.inject(Uh), Qr = kf;
    } catch {
    }
  }
  return Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig, Za.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vo(r)) throw Error(m(200));
    return Nh(n, r, null, o);
  }, Za.createRoot = function(n, r) {
    if (!Vo(n)) throw Error(m(299));
    var o = !1, u = "", c = hp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = fp(n, 1, !1, null, null, o, !1, u, c), n[Yi] = r.current, lu(n.nodeType === 8 ? n.parentNode : n), new bf(r);
  }, Za.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = Et(r), n = n === null ? null : n.stateNode, n;
  }, Za.flushSync = function(n) {
    return _i(n);
  }, Za.hydrate = function(n, r, o) {
    if (!_f(r)) throw Error(m(200));
    return Df(null, n, r, !0, o);
  }, Za.hydrateRoot = function(n, r, o) {
    if (!Vo(n)) throw Error(m(405));
    var u = o != null && o.hydratedSources || null, c = !1, p = "", C = hp;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = pp(r, null, n, 1, o ?? null, c, !1, p, C), n[Yi] = r.current, lu(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new Ws(r);
  }, Za.render = function(n, r, o) {
    if (!_f(r)) throw Error(m(200));
    return Df(null, n, r, !1, o);
  }, Za.unmountComponentAtNode = function(n) {
    if (!_f(n)) throw Error(m(40));
    return n._reactRootContainer ? (_i(function() {
      Df(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, Za.unstable_batchedUpdates = up, Za.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!_f(o)) throw Error(m(200));
    if (n == null || n._reactInternals === void 0) throw Error(m(38));
    return Df(n, r, o, !1, u);
  }, Za.version = "18.3.1-next-f1338f8080-20240426", Za;
}
var Ja = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vR;
function dk() {
  return vR || (vR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var d = Ev(), h = _R(), m = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function R(e) {
      E = e;
    }
    function T(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        N("warn", e, a);
      }
    }
    function y(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        N("error", e, a);
      }
    }
    function N(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var k = 0, O = 1, F = 2, U = 3, H = 4, P = 5, G = 6, re = 7, oe = 8, Se = 9, de = 10, me = 11, Ee = 12, ue = 13, _e = 14, he = 15, ot = 16, Rt = 17, at = 18, lt = 19, _t = 21, Oe = 22, Ue = 23, ht = 24, Ge = 25, xe = !0, ee = !1, De = !1, Ce = !1, j = !1, te = !0, Xe = !1, nt = !0, mt = !0, pt = !0, wt = !0, yt = /* @__PURE__ */ new Set(), gt = {}, Kt = {};
    function $n(e, t) {
      or(e, t), or(e + "Capture", t);
    }
    function or(e, t) {
      gt[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), gt[e] = t;
      {
        var a = e.toLowerCase();
        Kt[a] = e, e === "onDoubleClick" && (Kt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        yt.add(t[i]);
    }
    var Zt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ln = Object.prototype.hasOwnProperty;
    function Mn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Tn(e) {
      try {
        return gn(e), !1;
      } catch {
        return !0;
      }
    }
    function gn(e) {
      return "" + e;
    }
    function Sr(e, t) {
      if (Tn(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), gn(e);
    }
    function In(e) {
      if (Tn(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(e)), gn(e);
    }
    function Kn(e, t) {
      if (Tn(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), gn(e);
    }
    function Cr(e, t) {
      if (Tn(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), gn(e);
    }
    function Wr(e) {
      if (Tn(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Mn(e)), gn(e);
    }
    function Er(e) {
      if (Tn(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Mn(e)), gn(e);
    }
    var pa = 0, lr = 1, qr = 2, Sn = 3, kr = 4, vi = 5, va = 6, Re = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", We = Re + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ct = new RegExp("^[" + Re + "][" + We + "]*$"), $t = {}, Yt = {};
    function Nn(e) {
      return Ln.call(Yt, e) ? !0 : Ln.call($t, e) ? !1 : Ct.test(e) ? (Yt[e] = !0, !0) : ($t[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Cn(e, t, a) {
      return t !== null ? t.type === pa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function xr(e, t, a, i) {
      if (a !== null && a.type === pa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Jt(e, t, a, i) {
      if (t === null || typeof t > "u" || xr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Sn:
            return !t;
          case kr:
            return t === !1;
          case vi:
            return isNaN(t);
          case va:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Or(e) {
      return qt.hasOwnProperty(e) ? qt[e] : null;
    }
    function Wt(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === qr || t === Sn || t === kr, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var qt = {}, ei = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ei.forEach(function(e) {
      qt[e] = new Wt(
        e,
        pa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      qt[t] = new Wt(
        t,
        lr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      qt[e] = new Wt(
        e,
        qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      qt[e] = new Wt(
        e,
        qr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      qt[e] = new Wt(
        e,
        Sn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new Wt(
        e,
        Sn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new Wt(
        e,
        kr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new Wt(
        e,
        va,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      qt[e] = new Wt(
        e,
        vi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ka = /[\-\:]([a-z])/g, vo = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, vo);
      qt[t] = new Wt(
        t,
        lr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, vo);
      qt[t] = new Wt(
        t,
        lr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, vo);
      qt[t] = new Wt(
        t,
        lr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      qt[e] = new Wt(
        e,
        lr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var tl = "xlinkHref";
    qt[tl] = new Wt(
      "xlinkHref",
      lr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      qt[e] = new Wt(
        e,
        lr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Il = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, zi = !1;
    function ho(e) {
      !zi && Il.test(e) && (zi = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ha(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Sr(a, t), i.sanitizeURL && ho("" + a);
        var s = i.attributeName, f = null;
        if (i.type === kr) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : Jt(t, a, i, !1) ? v : v === "" + a ? a : v;
          }
        } else if (e.hasAttribute(s)) {
          if (Jt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Sn)
            return a;
          f = e.getAttribute(s);
        }
        return Jt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function hi(e, t, a, i) {
      {
        if (!Nn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Sr(a, t), l === "" + a ? a : l;
      }
    }
    function ma(e, t, a, i) {
      var l = Or(t);
      if (!Cn(t, l, i)) {
        if (Jt(t, a, l, i) && (a = null), i || l === null) {
          if (Nn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Sr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var v = l.propertyName;
          if (a === null) {
            var g = l.type;
            e[v] = g === Sn ? !1 : "";
          } else
            e[v] = a;
          return;
        }
        var x = l.attributeName, w = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(x);
        else {
          var z = l.type, M;
          z === Sn || z === kr && a === !0 ? M = "" : (Sr(a, x), M = "" + a, l.sanitizeURL && ho(M.toString())), w ? e.setAttributeNS(w, x, M) : e.setAttribute(x, M);
        }
      }
    }
    var ti = Symbol.for("react.element"), Lr = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), mi = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), se = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), $e = Symbol.for("react.suspense"), Dt = Symbol.for("react.suspense_list"), Lt = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), Et = Symbol.for("react.scope"), Pn = Symbol.for("react.debug_trace_mode"), rn = Symbol.for("react.offscreen"), cn = Symbol.for("react.legacy_hidden"), Rr = Symbol.for("react.cache"), gi = Symbol.for("react.tracing_marker"), Pt = Symbol.iterator, Zn = "@@iterator";
    function Mr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Pt && e[Pt] || e[Zn];
      return typeof t == "function" ? t : null;
    }
    var xt = Object.assign, Oa = 0, mo, Yl, yo, Qr, os, Nr, ls;
    function us() {
    }
    us.__reactDisabledLog = !0;
    function hc() {
      {
        if (Oa === 0) {
          mo = console.log, Yl = console.info, yo = console.warn, Qr = console.error, os = console.group, Nr = console.groupCollapsed, ls = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: us,
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
        Oa++;
      }
    }
    function Wl() {
      {
        if (Oa--, Oa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xt({}, e, {
              value: mo
            }),
            info: xt({}, e, {
              value: Yl
            }),
            warn: xt({}, e, {
              value: yo
            }),
            error: xt({}, e, {
              value: Qr
            }),
            group: xt({}, e, {
              value: os
            }),
            groupCollapsed: xt({}, e, {
              value: Nr
            }),
            groupEnd: xt({}, e, {
              value: ls
            })
          });
        }
        Oa < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var go = m.ReactCurrentDispatcher, ni;
    function Ar(e, t, a) {
      {
        if (ni === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            ni = i && i[1] || "";
          }
        return `
` + ni + e;
      }
    }
    var So = !1, Co;
    {
      var Eo = typeof WeakMap == "function" ? WeakMap : Map;
      Co = new Eo();
    }
    function ql(e, t) {
      if (!e || So)
        return "";
      {
        var a = Co.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      So = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = go.current, go.current = null, hc();
      try {
        if (t) {
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
            } catch (Q) {
              i = Q;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (Q) {
              i = Q;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            i = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && i && typeof Q.stack == "string") {
          for (var v = Q.stack.split(`
`), g = i.stack.split(`
`), x = v.length - 1, w = g.length - 1; x >= 1 && w >= 0 && v[x] !== g[w]; )
            w--;
          for (; x >= 1 && w >= 0; x--, w--)
            if (v[x] !== g[w]) {
              if (x !== 1 || w !== 1)
                do
                  if (x--, w--, w < 0 || v[x] !== g[w]) {
                    var z = `
` + v[x].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && Co.set(e, z), z;
                  }
                while (x >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        So = !1, go.current = s, Wl(), Error.prepareStackTrace = l;
      }
      var M = e ? e.displayName || e.name : "", Y = M ? Ar(M) : "";
      return typeof e == "function" && Co.set(e, Y), Y;
    }
    function Ql(e, t, a) {
      return ql(e, !0);
    }
    function Ui(e, t, a) {
      return ql(e, !1);
    }
    function dd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Si(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ql(e, dd(e));
      if (typeof e == "string")
        return Ar(e);
      switch (e) {
        case $e:
          return Ar("Suspense");
        case Dt:
          return Ar("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ve:
            return Ui(e.render);
          case Lt:
            return Si(e.type, t, a);
          case Je: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Si(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ft(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case P:
          return Ar(e.type);
        case ot:
          return Ar("Lazy");
        case ue:
          return Ar("Suspense");
        case lt:
          return Ar("SuspenseList");
        case k:
        case F:
        case he:
          return Ui(e.type);
        case me:
          return Ui(e.type.render);
        case O:
          return Ql(e.type);
        default:
          return "";
      }
    }
    function Gl(e) {
      try {
        var t = "", a = e;
        do
          t += Ft(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function nl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Xl(e) {
      return e.displayName || "Context";
    }
    function Mt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ya:
          return "Fragment";
        case Lr:
          return "Portal";
        case yi:
          return "Profiler";
        case mi:
          return "StrictMode";
        case $e:
          return "Suspense";
        case Dt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case se:
            var t = e;
            return Xl(t) + ".Consumer";
          case D:
            var a = e;
            return Xl(a._context) + ".Provider";
          case ve:
            return nl(e, e.render, "ForwardRef");
          case Lt:
            var i = e.displayName || null;
            return i !== null ? i : Mt(e.type) || "Memo";
          case Je: {
            var l = e, s = l._payload, f = l._init;
            try {
              return Mt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Kl(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Zl(e) {
      return e.displayName || "Context";
    }
    function ct(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ht:
          return "Cache";
        case Se:
          var i = a;
          return Zl(i) + ".Consumer";
        case de:
          var l = a;
          return Zl(l._context) + ".Provider";
        case at:
          return "DehydratedFragment";
        case me:
          return Kl(a, a.render, "ForwardRef");
        case re:
          return "Fragment";
        case P:
          return a;
        case H:
          return "Portal";
        case U:
          return "Root";
        case G:
          return "Text";
        case ot:
          return Mt(a);
        case oe:
          return a === mi ? "StrictMode" : "Mode";
        case Oe:
          return "Offscreen";
        case Ee:
          return "Profiler";
        case _t:
          return "Scope";
        case ue:
          return "Suspense";
        case lt:
          return "SuspenseList";
        case Ge:
          return "TracingMarker";
        case O:
        case k:
        case Rt:
        case F:
        case _e:
        case he:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var rl = m.ReactDebugCurrentFrame, En = null, Gr = !1;
    function zr() {
      {
        if (En === null)
          return null;
        var e = En._debugOwner;
        if (e !== null && typeof e < "u")
          return ct(e);
      }
      return null;
    }
    function xo() {
      return En === null ? "" : Gl(En);
    }
    function bn() {
      rl.getCurrentStack = null, En = null, Gr = !1;
    }
    function Qt(e) {
      rl.getCurrentStack = e === null ? null : xo, En = e, Gr = !1;
    }
    function mc() {
      return En;
    }
    function Xr(e) {
      Gr = e;
    }
    function Jn(e) {
      return "" + e;
    }
    function Ci(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Er(e), e;
        default:
          return "";
      }
    }
    var yc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ji(e, t) {
      yc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ro(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function gc(e) {
      return e._valueTracker;
    }
    function La(e) {
      e._valueTracker = null;
    }
    function wo(e) {
      var t = "";
      return e && (Ro(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Pi(e) {
      var t = Ro(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Er(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(v) {
            Er(v), i = "" + v, s.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            Er(v), i = "" + v;
          },
          stopTracking: function() {
            La(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ma(e) {
      gc(e) || (e._valueTracker = Pi(e));
    }
    function Jl(e) {
      if (!e)
        return !1;
      var t = gc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = wo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function To(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var bo = !1, al = !1, eu = !1, ss = !1;
    function ri(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function S(e, t) {
      var a = e, i = t.checked, l = xt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function _(e, t) {
      ji("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !al && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), al = !0), t.value !== void 0 && t.defaultValue !== void 0 && !bo && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), bo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ci(t.value != null ? t.value : i),
        controlled: ri(t)
      };
    }
    function W(e, t) {
      var a = e, i = t.checked;
      i != null && ma(a, "checked", i, !1);
    }
    function X(e, t) {
      var a = e;
      {
        var i = ri(t);
        !a._wrapperState.controlled && i && !ss && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ss = !0), a._wrapperState.controlled && !i && !eu && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), eu = !0);
      }
      W(e, t);
      var l = Ci(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Jn(l)) : a.value !== Jn(l) && (a.value = Jn(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ze(a, t.type, l) : t.hasOwnProperty("defaultValue") && Ze(a, t.type, Ci(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ye(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Jn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function et(e, t) {
      var a = e;
      X(a, t), be(a, t);
    }
    function be(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Sr(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var v = Jh(f);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Jl(f), X(f, v);
          }
        }
      }
    }
    function Ze(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || To(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Jn(e._wrapperState.initialValue) : e.defaultValue !== Jn(a) && (e.defaultValue = Jn(a)));
    }
    var Tt = !1, jt = !1, an = !1;
    function en(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? d.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || jt || (jt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (an || (an = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Tt && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Tt = !0);
    }
    function on(e, t) {
      t.value != null && e.setAttribute("value", Jn(Ci(t.value)));
    }
    var un = Array.isArray;
    function Nt(e) {
      return un(e);
    }
    var Fi;
    Fi = !1;
    function tu() {
      var e = zr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var cs = ["value", "defaultValue"];
    function pd(e) {
      {
        ji("select", e);
        for (var t = 0; t < cs.length; t++) {
          var a = cs[t];
          if (e[a] != null) {
            var i = Nt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, tu()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, tu());
          }
        }
      }
    }
    function ai(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, v = 0; v < s.length; v++)
          f["$" + s[v]] = !0;
        for (var g = 0; g < l.length; g++) {
          var x = f.hasOwnProperty("$" + l[g].value);
          l[g].selected !== x && (l[g].selected = x), x && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var w = Jn(Ci(a)), z = null, M = 0; M < l.length; M++) {
          if (l[M].value === w) {
            l[M].selected = !0, i && (l[M].defaultSelected = !0);
            return;
          }
          z === null && !l[M].disabled && (z = l[M]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function fs(e, t) {
      return xt({}, t, {
        value: void 0
      });
    }
    function ds(e, t) {
      var a = e;
      pd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Fi && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Fi = !0);
    }
    function vd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ai(a, !!t.multiple, i, !1) : t.defaultValue != null && ai(a, !!t.multiple, t.defaultValue, !0);
    }
    function Dy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? ai(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? ai(a, !!t.multiple, t.defaultValue, !0) : ai(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ky(e, t) {
      var a = e, i = t.value;
      i != null && ai(a, !!t.multiple, i, !1);
    }
    var hd = !1;
    function md(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = xt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Jn(a._wrapperState.initialValue)
      });
      return i;
    }
    function wv(e, t) {
      var a = e;
      ji("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !hd && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component"), hd = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Nt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ci(i)
      };
    }
    function Tv(e, t) {
      var a = e, i = Ci(t.value), l = Ci(t.defaultValue);
      if (i != null) {
        var s = Jn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Jn(l));
    }
    function bv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function yd(e, t) {
      Tv(e, t);
    }
    var Hi = "http://www.w3.org/1999/xhtml", Oy = "http://www.w3.org/1998/Math/MathML", gd = "http://www.w3.org/2000/svg";
    function Sc(e) {
      switch (e) {
        case "svg":
          return gd;
        case "math":
          return Oy;
        default:
          return Hi;
      }
    }
    function Sd(e, t) {
      return e == null || e === Hi ? Sc(t) : e === gd && t === "foreignObject" ? Hi : e;
    }
    var Ly = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Cc, _v = Ly(function(e, t) {
      if (e.namespaceURI === gd && !("innerHTML" in e)) {
        Cc = Cc || document.createElement("div"), Cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Kr = 1, Vi = 3, Fn = 8, ii = 9, il = 11, Ec = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Vi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Dv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, nu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function kv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(nu).forEach(function(e) {
      Ov.forEach(function(t) {
        nu[kv(t, e)] = nu[e];
      });
    });
    function xc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(nu.hasOwnProperty(e) && nu[e]) ? t + "px" : (Cr(t, e), ("" + t).trim());
    }
    var ru = /([A-Z])/g, My = /^ms-/;
    function Ny(e) {
      return e.replace(ru, "-$1").toLowerCase().replace(My, "-ms-");
    }
    var Lv = function() {
    };
    {
      var Mv = /^(?:webkit|moz|o)[A-Z]/, Nv = /^-ms-/, ps = /-(.)/g, au = /;\s*$/, iu = {}, ou = {}, Av = !1, Cd = !1, Ed = function(e) {
        return e.replace(ps, function(t, a) {
          return a.toUpperCase();
        });
      }, xd = function(e) {
        iu.hasOwnProperty(e) && iu[e] || (iu[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ed(e.replace(Nv, "ms-"))
        ));
      }, zv = function(e) {
        iu.hasOwnProperty(e) && iu[e] || (iu[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Uv = function(e, t) {
        ou.hasOwnProperty(t) && ou[t] || (ou[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(au, "")));
      }, jv = function(e, t) {
        Av || (Av = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ay = function(e, t) {
        Cd || (Cd = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Lv = function(e, t) {
        e.indexOf("-") > -1 ? xd(e) : Mv.test(e) ? zv(e) : au.test(t) && Uv(e, t), typeof t == "number" && (isNaN(t) ? jv(e, t) : isFinite(t) || Ay(e, t));
      };
    }
    var zy = Lv;
    function Uy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Ny(i)) + ":", t += xc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Pv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || zy(i, t[i]);
          var s = xc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function jy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Na(e) {
      var t = {};
      for (var a in e)
        for (var i = Dv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function vs(e, t) {
      {
        if (!t)
          return;
        var a = Na(e), i = Na(t), l = {};
        for (var s in a) {
          var f = a[s], v = i[s];
          if (v && f !== v) {
            var g = f + "," + v;
            if (l[g])
              continue;
            l[g] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", jy(e[f]) ? "Removing" : "Updating", f, v);
          }
        }
      }
    }
    var Fv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Hv = xt({
      menuitem: !0
    }, Fv), Vv = "__html";
    function Rc(e, t) {
      if (t) {
        if (Hv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Vv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Bi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var wc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Bv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, oi = {}, Rd = new RegExp("^(aria)-[" + We + "]*$"), hs = new RegExp("^(aria)[A-Z][" + We + "]*$");
    function wd(e, t) {
      {
        if (Ln.call(oi, t) && oi[t])
          return !0;
        if (hs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Bv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), oi[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), oi[t] = !0, !0;
        }
        if (Rd.test(t)) {
          var l = t.toLowerCase(), s = Bv.hasOwnProperty(l) ? l : null;
          if (s == null)
            return oi[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), oi[t] = !0, !0;
        }
      }
      return !0;
    }
    function $v(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = wd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Tc(e, t) {
      Bi(e, t) || $v(e, t);
    }
    var ol = !1;
    function Td(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ol && (ol = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var bd = function() {
    };
    {
      var er = {}, _d = /^on./, Iv = /^on[^A-Z]/, Yv = new RegExp("^(aria)-[" + We + "]*$"), Wv = new RegExp("^(aria)[A-Z][" + We + "]*$");
      bd = function(e, t, a, i) {
        if (Ln.call(er, t) && er[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), er[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var v = f.hasOwnProperty(l) ? f[l] : null;
          if (v != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, v), er[t] = !0, !0;
          if (_d.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), er[t] = !0, !0;
        } else if (_d.test(t))
          return Iv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), er[t] = !0, !0;
        if (Yv.test(t) || Wv.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), er[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), er[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), er[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), er[t] = !0, !0;
        var g = Or(t), x = g !== null && g.type === pa;
        if (wc.hasOwnProperty(l)) {
          var w = wc[l];
          if (w !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, w), er[t] = !0, !0;
        } else if (!x && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), er[t] = !0, !0;
        return typeof a == "boolean" && xr(t, a, g, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), er[t] = !0, !0) : x ? !0 : xr(t, a, g, !1) ? (er[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === Sn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), er[t] = !0), !0);
      };
    }
    var qv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = bd(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Qv(e, t, a) {
      Bi(e, t) || qv(e, t, a);
    }
    var $i = 1, ms = 2, ll = 4, Py = $i | ms | ll, ys = null;
    function gs(e) {
      ys !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ys = e;
    }
    function Fy() {
      ys === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ys = null;
    }
    function Gv(e) {
      return e === ys;
    }
    function bc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Vi ? t.parentNode : t;
    }
    var ln = null, _o = null, Ii = null;
    function lu(e) {
      var t = Hu(e);
      if (t) {
        if (typeof ln != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Jh(a);
          ln(t.stateNode, t.type, i);
        }
      }
    }
    function Xv(e) {
      ln = e;
    }
    function _c(e) {
      _o ? Ii ? Ii.push(e) : Ii = [e] : _o = e;
    }
    function Ss() {
      return _o !== null || Ii !== null;
    }
    function Cs() {
      if (_o) {
        var e = _o, t = Ii;
        if (_o = null, Ii = null, lu(e), t)
          for (var a = 0; a < t.length; a++)
            lu(t[a]);
      }
    }
    var ul = function(e, t) {
      return e(t);
    }, Dd = function() {
    }, kd = !1;
    function Hy() {
      var e = Ss();
      e && (Dd(), Cs());
    }
    function Od(e, t, a) {
      if (kd)
        return e(t, a);
      kd = !0;
      try {
        return ul(e, t, a);
      } finally {
        kd = !1, Hy();
      }
    }
    function Dc(e, t, a) {
      ul = e, Dd = a;
    }
    function kc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ld(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && kc(t));
        default:
          return !1;
      }
    }
    function sl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Jh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Ld(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Es = !1;
    if (Zt)
      try {
        var cl = {};
        Object.defineProperty(cl, "passive", {
          get: function() {
            Es = !0;
          }
        }), window.addEventListener("test", cl, cl), window.removeEventListener("test", cl, cl);
      } catch {
        Es = !1;
      }
    function Kv(e, t, a, i, l, s, f, v, g) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (w) {
        this.onError(w);
      }
    }
    var Md = Kv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Nd = document.createElement("react");
      Md = function(t, a, i, l, s, f, v, g, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var w = document.createEvent("Event"), z = !1, M = !0, Y = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Nd.removeEventListener(J, Ke, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var ke = Array.prototype.slice.call(arguments, 3);
        function Ke() {
          z = !0, Z(), a.apply(i, ke), M = !1;
        }
        var Ye, Ut = !1, Ot = !1;
        function B($) {
          if (Ye = $.error, Ut = !0, Ye === null && $.colno === 0 && $.lineno === 0 && (Ot = !0), $.defaultPrevented && Ye != null && typeof Ye == "object")
            try {
              Ye._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", B), Nd.addEventListener(J, Ke, !1), w.initEvent(J, !1, !1), Nd.dispatchEvent(w), Q && Object.defineProperty(window, "event", Q), z && M && (Ut ? Ot && (Ye = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ye = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ye)), window.removeEventListener("error", B), !z)
          return Z(), Kv.apply(this, arguments);
      };
    }
    var Vy = Md, Do = !1, li = null, xs = !1, ko = null, Ei = {
      onError: function(e) {
        Do = !0, li = e;
      }
    };
    function fl(e, t, a, i, l, s, f, v, g) {
      Do = !1, li = null, Vy.apply(Ei, arguments);
    }
    function Yi(e, t, a, i, l, s, f, v, g) {
      if (fl.apply(this, arguments), Do) {
        var x = zd();
        xs || (xs = !0, ko = x);
      }
    }
    function Ad() {
      if (xs) {
        var e = ko;
        throw xs = !1, ko = null, e;
      }
    }
    function By() {
      return Do;
    }
    function zd() {
      if (Do) {
        var e = li;
        return Do = !1, li = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Aa(e) {
      return e._reactInternals;
    }
    function Rs(e) {
      return e._reactInternals !== void 0;
    }
    function uu(e, t) {
      e._reactInternals = t;
    }
    var Qe = (
      /*                      */
      0
    ), Oo = (
      /*                */
      1
    ), fn = (
      /*                    */
      2
    ), St = (
      /*                       */
      4
    ), It = (
      /*                */
      16
    ), Gt = (
      /*                 */
      32
    ), xi = (
      /*                     */
      64
    ), ut = (
      /*                   */
      128
    ), _n = (
      /*            */
      256
    ), Zr = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), hn = (
      /*                      */
      2048
    ), Ua = (
      /*                    */
      4096
    ), Lo = (
      /*                   */
      8192
    ), ws = (
      /*             */
      16384
    ), Oc = hn | St | xi | Zr | za | ws, Zv = (
      /*               */
      32767
    ), ga = (
      /*                   */
      32768
    ), tr = (
      /*                */
      65536
    ), Ts = (
      /* */
      131072
    ), Ud = (
      /*                       */
      1048576
    ), jd = (
      /*                    */
      2097152
    ), Jr = (
      /*                 */
      4194304
    ), Mo = (
      /*                */
      8388608
    ), ea = (
      /*               */
      16777216
    ), dl = (
      /*              */
      33554432
    ), su = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      St | za | 0
    ), ta = fn | St | It | Gt | Zr | Ua | Lo, wr = St | xi | Zr | Lo, ja = hn | It, ur = Jr | Mo | jd, Wi = m.ReactCurrentOwner;
    function Sa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (fn | Ua)) !== Qe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === U ? a : null;
    }
    function Pd(e) {
      if (e.tag === ue) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Lc(e) {
      return e.tag === U ? e.stateNode.containerInfo : null;
    }
    function Fd(e) {
      return Sa(e) === e;
    }
    function Ca(e) {
      {
        var t = Wi.current;
        if (t !== null && t.tag === O) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ct(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Aa(e);
      return l ? Sa(l) === l : !1;
    }
    function na(e) {
      if (Sa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function dn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Sa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var v = s.return;
          if (v !== null) {
            i = l = v;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return na(s), e;
            if (g === l)
              return na(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var x = !1, w = s.child; w; ) {
            if (w === i) {
              x = !0, i = s, l = f;
              break;
            }
            if (w === l) {
              x = !0, l = s, i = f;
              break;
            }
            w = w.sibling;
          }
          if (!x) {
            for (w = f.child; w; ) {
              if (w === i) {
                x = !0, i = f, l = s;
                break;
              }
              if (w === l) {
                x = !0, l = f, i = s;
                break;
              }
              w = w.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== U)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Pa(e) {
      var t = dn(e);
      return t !== null ? Hd(t) : null;
    }
    function Hd(e) {
      if (e.tag === P || e.tag === G)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Hd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Jv(e) {
      var t = dn(e);
      return t !== null ? Mc(t) : null;
    }
    function Mc(e) {
      if (e.tag === P || e.tag === G)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== H) {
          var a = Mc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Nc = h.unstable_scheduleCallback, eh = h.unstable_cancelCallback, Ac = h.unstable_shouldYield, th = h.unstable_requestPaint, xn = h.unstable_now, Vd = h.unstable_getCurrentPriorityLevel, zc = h.unstable_ImmediatePriority, pl = h.unstable_UserBlockingPriority, Ri = h.unstable_NormalPriority, nh = h.unstable_LowPriority, Uc = h.unstable_IdlePriority, cu = h.unstable_yieldValue, rh = h.unstable_setDisableYieldValue, qi = null, Yn = null, we = null, Fa = !1, Ea = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Bd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        mt && (e = xt({}, e, {
          getLaneLabelMap: Qi,
          injectProfilingHooks: ah
        })), qi = t.inject(e), Yn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function $d(e, t) {
      if (Yn && typeof Yn.onScheduleFiberRoot == "function")
        try {
          Yn.onScheduleFiberRoot(qi, e, t);
        } catch (a) {
          Fa || (Fa = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function fu(e, t) {
      if (Yn && typeof Yn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ut) === ut;
          if (pt) {
            var i;
            switch (t) {
              case zn:
                i = zc;
                break;
              case Xi:
                i = pl;
                break;
              case wi:
                i = Ri;
                break;
              case Ru:
                i = Uc;
                break;
              default:
                i = Ri;
                break;
            }
            Yn.onCommitFiberRoot(qi, e, i, a);
          }
        } catch (l) {
          Fa || (Fa = !0, y("React instrumentation encountered an error: %s", l));
        }
    }
    function Ha(e) {
      if (Yn && typeof Yn.onPostCommitFiberRoot == "function")
        try {
          Yn.onPostCommitFiberRoot(qi, e);
        } catch (t) {
          Fa || (Fa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function vl(e) {
      if (Yn && typeof Yn.onCommitFiberUnmount == "function")
        try {
          Yn.onCommitFiberUnmount(qi, e);
        } catch (t) {
          Fa || (Fa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Hn(e) {
      if (typeof cu == "function" && (rh(e), R(e)), Yn && typeof Yn.setStrictMode == "function")
        try {
          Yn.setStrictMode(qi, e);
        } catch (t) {
          Fa || (Fa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function ah(e) {
      we = e;
    }
    function Qi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Os; a++) {
          var i = Iy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function No(e) {
      we !== null && typeof we.markCommitStarted == "function" && we.markCommitStarted(e);
    }
    function jc() {
      we !== null && typeof we.markCommitStopped == "function" && we.markCommitStopped();
    }
    function du(e) {
      we !== null && typeof we.markComponentRenderStarted == "function" && we.markComponentRenderStarted(e);
    }
    function ra() {
      we !== null && typeof we.markComponentRenderStopped == "function" && we.markComponentRenderStopped();
    }
    function Ao(e) {
      we !== null && typeof we.markComponentPassiveEffectMountStarted == "function" && we.markComponentPassiveEffectMountStarted(e);
    }
    function Pc() {
      we !== null && typeof we.markComponentPassiveEffectMountStopped == "function" && we.markComponentPassiveEffectMountStopped();
    }
    function ih(e) {
      we !== null && typeof we.markComponentPassiveEffectUnmountStarted == "function" && we.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fc() {
      we !== null && typeof we.markComponentPassiveEffectUnmountStopped == "function" && we.markComponentPassiveEffectUnmountStopped();
    }
    function oh(e) {
      we !== null && typeof we.markComponentLayoutEffectMountStarted == "function" && we.markComponentLayoutEffectMountStarted(e);
    }
    function bs() {
      we !== null && typeof we.markComponentLayoutEffectMountStopped == "function" && we.markComponentLayoutEffectMountStopped();
    }
    function ui(e) {
      we !== null && typeof we.markComponentLayoutEffectUnmountStarted == "function" && we.markComponentLayoutEffectUnmountStarted(e);
    }
    function pu() {
      we !== null && typeof we.markComponentLayoutEffectUnmountStopped == "function" && we.markComponentLayoutEffectUnmountStopped();
    }
    function _s(e, t, a) {
      we !== null && typeof we.markComponentErrored == "function" && we.markComponentErrored(e, t, a);
    }
    function hl(e, t, a) {
      we !== null && typeof we.markComponentSuspended == "function" && we.markComponentSuspended(e, t, a);
    }
    function Id(e) {
      we !== null && typeof we.markLayoutEffectsStarted == "function" && we.markLayoutEffectsStarted(e);
    }
    function vu() {
      we !== null && typeof we.markLayoutEffectsStopped == "function" && we.markLayoutEffectsStopped();
    }
    function lh(e) {
      we !== null && typeof we.markPassiveEffectsStarted == "function" && we.markPassiveEffectsStarted(e);
    }
    function Yd() {
      we !== null && typeof we.markPassiveEffectsStopped == "function" && we.markPassiveEffectsStopped();
    }
    function mn(e) {
      we !== null && typeof we.markRenderStarted == "function" && we.markRenderStarted(e);
    }
    function Hc() {
      we !== null && typeof we.markRenderYielded == "function" && we.markRenderYielded();
    }
    function Vc() {
      we !== null && typeof we.markRenderStopped == "function" && we.markRenderStopped();
    }
    function Wd(e) {
      we !== null && typeof we.markRenderScheduled == "function" && we.markRenderScheduled(e);
    }
    function Bc(e, t) {
      we !== null && typeof we.markForceUpdateScheduled == "function" && we.markForceUpdateScheduled(e, t);
    }
    function Ds(e, t) {
      we !== null && typeof we.markStateUpdateScheduled == "function" && we.markStateUpdateScheduled(e, t);
    }
    var Ve = (
      /*                         */
      0
    ), Ie = (
      /*                 */
      1
    ), st = (
      /*                    */
      2
    ), bt = (
      /*               */
      8
    ), xa = (
      /*              */
      16
    ), hu = Math.clz32 ? Math.clz32 : Tr, ks = Math.log, $y = Math.LN2;
    function Tr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ks(t) / $y | 0) | 0;
    }
    var Os = 31, ie = (
      /*                        */
      0
    ), Vn = (
      /*                          */
      0
    ), qe = (
      /*                        */
      1
    ), sr = (
      /*    */
      2
    ), Ra = (
      /*             */
      4
    ), Gi = (
      /*            */
      8
    ), Va = (
      /*                     */
      16
    ), mu = (
      /*                */
      32
    ), ml = (
      /*                       */
      4194240
    ), yu = (
      /*                        */
      64
    ), $c = (
      /*                        */
      128
    ), Ic = (
      /*                        */
      256
    ), Yc = (
      /*                        */
      512
    ), Wc = (
      /*                        */
      1024
    ), qc = (
      /*                        */
      2048
    ), yl = (
      /*                        */
      4096
    ), Qc = (
      /*                        */
      8192
    ), gu = (
      /*                        */
      16384
    ), Su = (
      /*                       */
      32768
    ), Gc = (
      /*                       */
      65536
    ), Ls = (
      /*                       */
      131072
    ), Xc = (
      /*                       */
      262144
    ), Kc = (
      /*                       */
      524288
    ), Zc = (
      /*                       */
      1048576
    ), Jc = (
      /*                       */
      2097152
    ), Cu = (
      /*                            */
      130023424
    ), gl = (
      /*                             */
      4194304
    ), ef = (
      /*                             */
      8388608
    ), tf = (
      /*                             */
      16777216
    ), qd = (
      /*                             */
      33554432
    ), nf = (
      /*                             */
      67108864
    ), uh = gl, Ms = (
      /*          */
      134217728
    ), Qd = (
      /*                          */
      268435455
    ), Eu = (
      /*               */
      268435456
    ), zo = (
      /*                        */
      536870912
    ), br = (
      /*                   */
      1073741824
    );
    function Iy(e) {
      {
        if (e & qe)
          return "Sync";
        if (e & sr)
          return "InputContinuousHydration";
        if (e & Ra)
          return "InputContinuous";
        if (e & Gi)
          return "DefaultHydration";
        if (e & Va)
          return "Default";
        if (e & mu)
          return "TransitionHydration";
        if (e & ml)
          return "Transition";
        if (e & Cu)
          return "Retry";
        if (e & Ms)
          return "SelectiveHydration";
        if (e & Eu)
          return "IdleHydration";
        if (e & zo)
          return "Idle";
        if (e & br)
          return "Offscreen";
      }
    }
    var sn = -1, rf = yu, aa = gl;
    function Sl(e) {
      switch (An(e)) {
        case qe:
          return qe;
        case sr:
          return sr;
        case Ra:
          return Ra;
        case Gi:
          return Gi;
        case Va:
          return Va;
        case mu:
          return mu;
        case yu:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case qc:
        case yl:
        case Qc:
        case gu:
        case Su:
        case Gc:
        case Ls:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
          return e & ml;
        case gl:
        case ef:
        case tf:
        case qd:
        case nf:
          return e & Cu;
        case Ms:
          return Ms;
        case Eu:
          return Eu;
        case zo:
          return zo;
        case br:
          return br;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Cl(e, t) {
      var a = e.pendingLanes;
      if (a === ie)
        return ie;
      var i = ie, l = e.suspendedLanes, s = e.pingedLanes, f = a & Qd;
      if (f !== ie) {
        var v = f & ~l;
        if (v !== ie)
          i = Sl(v);
        else {
          var g = f & s;
          g !== ie && (i = Sl(g));
        }
      } else {
        var x = a & ~l;
        x !== ie ? i = Sl(x) : s !== ie && (i = Sl(s));
      }
      if (i === ie)
        return ie;
      if (t !== ie && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ie) {
        var w = An(i), z = An(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          w >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          w === Va && (z & ml) !== ie
        )
          return t;
      }
      (i & Ra) !== ie && (i |= a & Va);
      var M = e.entangledLanes;
      if (M !== ie)
        for (var Y = e.entanglements, Q = i & M; Q > 0; ) {
          var Z = jo(Q), ke = 1 << Z;
          i |= Y[Z], Q &= ~ke;
        }
      return i;
    }
    function sh(e, t) {
      for (var a = e.eventTimes, i = sn; t > 0; ) {
        var l = jo(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function ch(e, t) {
      switch (e) {
        case qe:
        case sr:
        case Ra:
          return t + 250;
        case Gi:
        case Va:
        case mu:
        case yu:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case qc:
        case yl:
        case Qc:
        case gu:
        case Su:
        case Gc:
        case Ls:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
          return t + 5e3;
        case gl:
        case ef:
        case tf:
        case qd:
        case nf:
          return sn;
        case Ms:
        case Eu:
        case zo:
        case br:
          return sn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), sn;
      }
    }
    function fh(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = jo(f), g = 1 << v, x = s[v];
        x === sn ? ((g & i) === ie || (g & l) !== ie) && (s[v] = ch(g, t)) : x <= t && (e.expiredLanes |= g), f &= ~g;
      }
    }
    function Gd(e) {
      return Sl(e.pendingLanes);
    }
    function Uo(e) {
      var t = e.pendingLanes & ~br;
      return t !== ie ? t : t & br ? br : ie;
    }
    function Xd(e) {
      return (e & qe) !== ie;
    }
    function Ns(e) {
      return (e & Qd) !== ie;
    }
    function dh(e) {
      return (e & Cu) === e;
    }
    function ph(e) {
      var t = qe | Ra | Va;
      return (e & t) === ie;
    }
    function vh(e) {
      return (e & ml) === e;
    }
    function As(e, t) {
      var a = sr | Ra | Gi | Va;
      return (t & a) !== ie;
    }
    function hh(e, t) {
      return (t & e.expiredLanes) !== ie;
    }
    function Kd(e) {
      return (e & ml) !== ie;
    }
    function mh() {
      var e = rf;
      return rf <<= 1, (rf & ml) === ie && (rf = yu), e;
    }
    function ia() {
      var e = aa;
      return aa <<= 1, (aa & Cu) === ie && (aa = gl), e;
    }
    function An(e) {
      return e & -e;
    }
    function xu(e) {
      return An(e);
    }
    function jo(e) {
      return 31 - hu(e);
    }
    function af(e) {
      return jo(e);
    }
    function oa(e, t) {
      return (e & t) !== ie;
    }
    function El(e, t) {
      return (e & t) === t;
    }
    function vt(e, t) {
      return e | t;
    }
    function zs(e, t) {
      return e & ~t;
    }
    function of(e, t) {
      return e & t;
    }
    function Yy(e) {
      return e;
    }
    function yh(e, t) {
      return e !== Vn && e < t ? e : t;
    }
    function Us(e) {
      for (var t = [], a = 0; a < Os; a++)
        t.push(e);
      return t;
    }
    function xl(e, t, a) {
      e.pendingLanes |= t, t !== zo && (e.suspendedLanes = ie, e.pingedLanes = ie);
      var i = e.eventTimes, l = af(t);
      i[l] = a;
    }
    function gh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = jo(i), s = 1 << l;
        a[l] = sn, i &= ~s;
      }
    }
    function lf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function uf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ie, e.pingedLanes = ie, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = jo(f), g = 1 << v;
        i[v] = ie, l[v] = sn, s[v] = sn, f &= ~g;
      }
    }
    function Zd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = jo(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function Sh(e, t) {
      var a = An(t), i;
      switch (a) {
        case Ra:
          i = sr;
          break;
        case Va:
          i = Gi;
          break;
        case yu:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case qc:
        case yl:
        case Qc:
        case gu:
        case Su:
        case Gc:
        case Ls:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case gl:
        case ef:
        case tf:
        case qd:
        case nf:
          i = mu;
          break;
        case zo:
          i = Eu;
          break;
        default:
          i = Vn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Vn ? Vn : i;
    }
    function sf(e, t, a) {
      if (Ea)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = af(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function Jd(e, t) {
      if (Ea)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = af(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(v) {
            var g = v.alternate;
            (g === null || !i.has(g)) && i.add(v);
          }), f.clear()), t &= ~s;
        }
    }
    function js(e, t) {
      return null;
    }
    var zn = qe, Xi = Ra, wi = Va, Ru = zo, wu = Vn;
    function Ba() {
      return wu;
    }
    function Dn(e) {
      wu = e;
    }
    function _r(e, t) {
      var a = wu;
      try {
        return wu = e, t();
      } finally {
        wu = a;
      }
    }
    function Wy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function qy(e, t) {
      return e > t ? e : t;
    }
    function Tu(e, t) {
      return e !== 0 && e < t;
    }
    function cr(e) {
      var t = An(e);
      return Tu(zn, t) ? Tu(Xi, t) ? Ns(t) ? wi : Ru : Xi : zn;
    }
    function cf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ze;
    function bu(e) {
      ze = e;
    }
    function ep(e) {
      ze(e);
    }
    var ff;
    function Qy(e) {
      ff = e;
    }
    var _u;
    function df(e) {
      _u = e;
    }
    var pf;
    function Ch(e) {
      pf = e;
    }
    var tp;
    function Eh(e) {
      tp = e;
    }
    var Ps = !1, Du = [], yn = null, nr = null, Ur = null, ku = /* @__PURE__ */ new Map(), Ou = /* @__PURE__ */ new Map(), rr = [], xh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ti(e) {
      return xh.indexOf(e) > -1;
    }
    function Gy(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function np(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          yn = null;
          break;
        case "dragenter":
        case "dragleave":
          nr = null;
          break;
        case "mouseover":
        case "mouseout":
          Ur = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ku.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Ou.delete(i);
          break;
        }
      }
    }
    function Lu(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Gy(t, a, i, l, s);
        if (t !== null) {
          var v = Hu(t);
          v !== null && ff(v);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Rh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return yn = Lu(yn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return nr = Lu(nr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var v = l;
          return Ur = Lu(Ur, e, t, a, i, v), !0;
        }
        case "pointerover": {
          var g = l, x = g.pointerId;
          return ku.set(x, Lu(ku.get(x) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var w = l, z = w.pointerId;
          return Ou.set(z, Lu(Ou.get(z) || null, e, t, a, i, w)), !0;
        }
      }
      return !1;
    }
    function rp(e) {
      var t = Xs(e.target);
      if (t !== null) {
        var a = Sa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ue) {
            var l = Pd(a);
            if (l !== null) {
              e.blockedOn = l, tp(e.priority, function() {
                _u(a);
              });
              return;
            }
          } else if (i === U) {
            var s = a.stateNode;
            if (cf(s)) {
              e.blockedOn = Lc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Xy(e) {
      for (var t = pf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < rr.length && Tu(t, rr[i].priority); i++)
        ;
      rr.splice(i, 0, a), i === 0 && rp(a);
    }
    function Rl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Dr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          gs(s), l.target.dispatchEvent(s), Fy();
        } else {
          var f = Hu(i);
          return f !== null && ff(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function vf(e, t, a) {
      Rl(e) && a.delete(t);
    }
    function $a() {
      Ps = !1, yn !== null && Rl(yn) && (yn = null), nr !== null && Rl(nr) && (nr = null), Ur !== null && Rl(Ur) && (Ur = null), ku.forEach(vf), Ou.forEach(vf);
    }
    function kt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ps || (Ps = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, $a)));
    }
    function kn(e) {
      if (Du.length > 0) {
        kt(Du[0], e);
        for (var t = 1; t < Du.length; t++) {
          var a = Du[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      yn !== null && kt(yn, e), nr !== null && kt(nr, e), Ur !== null && kt(Ur, e);
      var i = function(v) {
        return kt(v, e);
      };
      ku.forEach(i), Ou.forEach(i);
      for (var l = 0; l < rr.length; l++) {
        var s = rr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; rr.length > 0; ) {
        var f = rr[0];
        if (f.blockedOn !== null)
          break;
        rp(f), f.blockedOn === null && rr.shift();
      }
    }
    var pn = m.ReactCurrentBatchConfig, Wn = !0;
    function la(e) {
      Wn = !!e;
    }
    function Mu() {
      return Wn;
    }
    function qn(e, t, a) {
      var i = hf(t), l;
      switch (i) {
        case zn:
          l = Fs;
          break;
        case Xi:
          l = wl;
          break;
        case wi:
        default:
          l = Nu;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Fs(e, t, a, i) {
      var l = Ba(), s = pn.transition;
      pn.transition = null;
      try {
        Dn(zn), Nu(e, t, a, i);
      } finally {
        Dn(l), pn.transition = s;
      }
    }
    function wl(e, t, a, i) {
      var l = Ba(), s = pn.transition;
      pn.transition = null;
      try {
        Dn(Xi), Nu(e, t, a, i);
      } finally {
        Dn(l), pn.transition = s;
      }
    }
    function Nu(e, t, a, i) {
      Wn && ap(e, t, a, i);
    }
    function ap(e, t, a, i) {
      var l = Dr(e, t, a, i);
      if (l === null) {
        pg(e, t, i, Po, a), np(e, i);
        return;
      }
      if (Rh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (np(e, i), t & ll && Ti(e)) {
        for (; l !== null; ) {
          var s = Hu(l);
          s !== null && ep(s);
          var f = Dr(e, t, a, i);
          if (f === null && pg(e, t, i, Po, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      pg(e, t, i, null, a);
    }
    var Po = null;
    function Dr(e, t, a, i) {
      Po = null;
      var l = bc(i), s = Xs(l);
      if (s !== null) {
        var f = Sa(s);
        if (f === null)
          s = null;
        else {
          var v = f.tag;
          if (v === ue) {
            var g = Pd(f);
            if (g !== null)
              return g;
            s = null;
          } else if (v === U) {
            var x = f.stateNode;
            if (cf(x))
              return Lc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Po = s, null;
    }
    function hf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return zn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Xi;
        case "message": {
          var t = Vd();
          switch (t) {
            case zc:
              return zn;
            case pl:
              return Xi;
            case Ri:
            case nh:
              return wi;
            case Uc:
              return Ru;
            default:
              return wi;
          }
        }
        default:
          return wi;
      }
    }
    function Au(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ki(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function mf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function ip(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ia = null, zu = null, Ya = null;
    function yf(e) {
      return Ia = e, zu = Vs(), !0;
    }
    function Hs() {
      Ia = null, zu = null, Ya = null;
    }
    function gf() {
      if (Ya)
        return Ya;
      var e, t = zu, a = t.length, i, l = Vs(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return Ya = l.slice(e, v), Ya;
    }
    function Vs() {
      return "value" in Ia ? Ia.value : Ia.textContent;
    }
    function Tl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ar() {
      return !0;
    }
    function Zi() {
      return !1;
    }
    function Rn(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var g = e[v];
            g ? this[v] = g(s) : this[v] = s[v];
          }
        var x = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return x ? this.isDefaultPrevented = ar : this.isDefaultPrevented = Zi, this.isPropagationStopped = Zi, this;
      }
      return xt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ar);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ar);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: ar
      }), t;
    }
    var Qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Sf = Rn(Qn), bl = xt({}, Qn, {
      view: 0,
      detail: 0
    }), op = Rn(bl), lp, bi, Uu;
    function up(e) {
      e !== Uu && (Uu && e.type === "mousemove" ? (lp = e.screenX - Uu.screenX, bi = e.screenY - Uu.screenY) : (lp = 0, bi = 0), Uu = e);
    }
    var _i = xt({}, bl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: sp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (up(e), lp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : bi;
      }
    }), Cf = Rn(_i), _l = xt({}, _i, {
      dataTransfer: 0
    }), wh = Rn(_l), Th = xt({}, bl, {
      relatedTarget: 0
    }), Bs = Rn(Th), Ef = xt({}, Qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ky = Rn(Ef), Zy = xt({}, Qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), bh = Rn(Zy), _h = xt({}, Qn, {
      data: 0
    }), Fo = Rn(_h), Jy = Fo, ju = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Dh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function On(e) {
      if (e.key) {
        var t = ju[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Tl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Dh[e.keyCode] || "Unidentified" : "";
    }
    var eg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function kh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = eg[e];
      return i ? !!a[i] : !1;
    }
    function sp(e) {
      return kh;
    }
    var tg = xt({}, bl, {
      key: On,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: sp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Tl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Tl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Oh = Rn(tg), Lh = xt({}, _i, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Mh = Rn(Lh), Wa = xt({}, bl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: sp
    }), cp = Rn(Wa), ng = xt({}, Qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ho = Rn(ng), xf = xt({}, _i, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Dl = Rn(xf), Rf = [9, 13, 27, 32], wf = 229, $s = Zt && "CompositionEvent" in window, Is = null;
    Zt && "documentMode" in document && (Is = document.documentMode);
    var fp = Zt && "TextEvent" in window && !Is, Nh = Zt && (!$s || Is && Is > 8 && Is <= 11), dp = 32, pp = String.fromCharCode(dp);
    function Tf() {
      $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $n("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $n("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $n("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ys = !1;
    function Ah(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function rg(e, t) {
      return e === "keydown" && t.keyCode === wf;
    }
    function hp(e, t) {
      switch (e) {
        case "keyup":
          return Rf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== wf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function bf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ws(e) {
      return e.locale === "ko";
    }
    var Vo = !1;
    function _f(e, t, a, i, l) {
      var s, f;
      if ($s ? s = vp(t) : Vo ? hp(t, i) && (s = "onCompositionEnd") : rg(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Nh && !Ws(i) && (!Vo && s === "onCompositionStart" ? Vo = yf(l) : s === "onCompositionEnd" && Vo && (f = gf()));
      var v = Hh(a, s);
      if (v.length > 0) {
        var g = new Fo(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: v
        }), f)
          g.data = f;
        else {
          var x = bf(i);
          x !== null && (g.data = x);
        }
      }
    }
    function zh(e, t) {
      switch (e) {
        case "compositionend":
          return bf(t);
        case "keypress":
          var a = t.which;
          return a !== dp ? null : (Ys = !0, pp);
        case "textInput":
          var i = t.data;
          return i === pp && Ys ? null : i;
        default:
          return null;
      }
    }
    function ag(e, t) {
      if (Vo) {
        if (e === "compositionend" || !$s && hp(e, t)) {
          var a = gf();
          return Hs(), Vo = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Ah(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Nh && !Ws(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Df(e, t, a, i, l) {
      var s;
      if (fp ? s = zh(t, i) : s = ag(t, i), !s)
        return null;
      var f = Hh(a, "onBeforeInput");
      if (f.length > 0) {
        var v = new Jy("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: v,
          listeners: f
        }), v.data = s;
      }
    }
    function ig(e, t, a, i, l, s, f) {
      _f(e, t, a, i, l), Df(e, t, a, i, l);
    }
    var qs = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Uh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!qs[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function kf(e) {
      if (!Zt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      $n("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      _c(i);
      var l = Hh(t, "onChange");
      if (l.length > 0) {
        var s = new Sf("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var o = null, u = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      r(t, u, e, bc(e)), Od(C, t);
    }
    function C(e) {
      US(e, 0);
    }
    function b(e) {
      var t = zf(e);
      if (Jl(t))
        return e;
    }
    function L(e, t) {
      if (e === "change")
        return t;
    }
    var q = !1;
    Zt && (q = kf("input") && (!document.documentMode || document.documentMode > 9));
    function ce(e, t) {
      o = e, u = t, o.attachEvent("onpropertychange", le);
    }
    function fe() {
      o && (o.detachEvent("onpropertychange", le), o = null, u = null);
    }
    function le(e) {
      e.propertyName === "value" && b(u) && p(e);
    }
    function Me(e, t, a) {
      e === "focusin" ? (fe(), ce(t, a)) : e === "focusout" && fe();
    }
    function je(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return b(u);
    }
    function He(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Un(e, t) {
      if (e === "click")
        return b(t);
    }
    function V(e, t) {
      if (e === "input" || e === "change")
        return b(t);
    }
    function A(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ze(e, "number", e.value);
    }
    function I(e, t, a, i, l, s, f) {
      var v = a ? zf(a) : window, g, x;
      if (c(v) ? g = L : Uh(v) ? q ? g = V : (g = je, x = Me) : He(v) && (g = Un), g) {
        var w = g(t, a);
        if (w) {
          r(e, w, i, l);
          return;
        }
      }
      x && x(t, v, a), t === "focusout" && A(v);
    }
    function ge() {
      or("onMouseEnter", ["mouseout", "mouseover"]), or("onMouseLeave", ["mouseout", "mouseover"]), or("onPointerEnter", ["pointerout", "pointerover"]), or("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Be(e, t, a, i, l, s, f) {
      var v = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (v && !Gv(i)) {
        var x = i.relatedTarget || i.fromElement;
        if (x && (Xs(x) || kp(x)))
          return;
      }
      if (!(!g && !v)) {
        var w;
        if (l.window === l)
          w = l;
        else {
          var z = l.ownerDocument;
          z ? w = z.defaultView || z.parentWindow : w = window;
        }
        var M, Y;
        if (g) {
          var Q = i.relatedTarget || i.toElement;
          if (M = a, Y = Q ? Xs(Q) : null, Y !== null) {
            var Z = Sa(Y);
            (Y !== Z || Y.tag !== P && Y.tag !== G) && (Y = null);
          }
        } else
          M = null, Y = a;
        if (M !== Y) {
          var ke = Cf, Ke = "onMouseLeave", Ye = "onMouseEnter", Ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (ke = Mh, Ke = "onPointerLeave", Ye = "onPointerEnter", Ut = "pointer");
          var Ot = M == null ? w : zf(M), B = Y == null ? w : zf(Y), J = new ke(Ke, Ut + "leave", M, i, l);
          J.target = Ot, J.relatedTarget = B;
          var $ = null, pe = Xs(l);
          if (pe === a) {
            var Ae = new ke(Ye, Ut + "enter", Y, i, l);
            Ae.target = B, Ae.relatedTarget = Ot, $ = Ae;
          }
          Mw(e, J, $, M, Y);
        }
      }
    }
    function tt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Pe = typeof Object.is == "function" ? Object.is : tt;
    function rt(e, t) {
      if (Pe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Ln.call(t, s) || !Pe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Gn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ht(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ji(e, t) {
      for (var a = Gn(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Vi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = Gn(Ht(a));
      }
    }
    function og(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, v = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return dw(e, l, s, f, v);
    }
    function dw(e, t, a, i, l) {
      var s = 0, f = -1, v = -1, g = 0, x = 0, w = e, z = null;
      e: for (; ; ) {
        for (var M = null; w === t && (a === 0 || w.nodeType === Vi) && (f = s + a), w === i && (l === 0 || w.nodeType === Vi) && (v = s + l), w.nodeType === Vi && (s += w.nodeValue.length), (M = w.firstChild) !== null; )
          z = w, w = M;
        for (; ; ) {
          if (w === e)
            break e;
          if (z === t && ++g === a && (f = s), z === i && ++x === l && (v = s), (M = w.nextSibling) !== null)
            break;
          w = z, z = w.parentNode;
        }
        w = M;
      }
      return f === -1 || v === -1 ? null : {
        start: f,
        end: v
      };
    }
    function pw(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), v = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > v) {
          var g = v;
          v = f, f = g;
        }
        var x = Ji(e, f), w = Ji(e, v);
        if (x && w) {
          if (l.rangeCount === 1 && l.anchorNode === x.node && l.anchorOffset === x.offset && l.focusNode === w.node && l.focusOffset === w.offset)
            return;
          var z = a.createRange();
          z.setStart(x.node, x.offset), l.removeAllRanges(), f > v ? (l.addRange(z), l.extend(w.node, w.offset)) : (z.setEnd(w.node, w.offset), l.addRange(z));
        }
      }
    }
    function wS(e) {
      return e && e.nodeType === Vi;
    }
    function TS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : wS(e) ? !1 : wS(t) ? TS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function vw(e) {
      return e && e.ownerDocument && TS(e.ownerDocument.documentElement, e);
    }
    function hw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function bS() {
      for (var e = window, t = To(); t instanceof e.HTMLIFrameElement; ) {
        if (hw(t))
          e = t.contentWindow;
        else
          return t;
        t = To(e.document);
      }
      return t;
    }
    function lg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function mw() {
      var e = bS();
      return {
        focusedElem: e,
        selectionRange: lg(e) ? gw(e) : null
      };
    }
    function yw(e) {
      var t = bS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && vw(a)) {
        i !== null && lg(a) && Sw(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Kr && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var v = l[f];
          v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }
    }
    function gw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = og(e), t || {
        start: 0,
        end: 0
      };
    }
    function Sw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : pw(e, t);
    }
    var Cw = Zt && "documentMode" in document && document.documentMode <= 11;
    function Ew() {
      $n("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Of = null, ug = null, mp = null, sg = !1;
    function xw(e) {
      if ("selectionStart" in e && lg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Rw(e) {
      return e.window === e ? e.document : e.nodeType === ii ? e : e.ownerDocument;
    }
    function _S(e, t, a) {
      var i = Rw(a);
      if (!(sg || Of == null || Of !== To(i))) {
        var l = xw(Of);
        if (!mp || !rt(mp, l)) {
          mp = l;
          var s = Hh(ug, "onSelect");
          if (s.length > 0) {
            var f = new Sf("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Of;
          }
        }
      }
    }
    function ww(e, t, a, i, l, s, f) {
      var v = a ? zf(a) : window;
      switch (t) {
        case "focusin":
          (Uh(v) || v.contentEditable === "true") && (Of = v, ug = a, mp = null);
          break;
        case "focusout":
          Of = null, ug = null, mp = null;
          break;
        case "mousedown":
          sg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          sg = !1, _S(e, i, l);
          break;
        case "selectionchange":
          if (Cw)
            break;
        case "keydown":
        case "keyup":
          _S(e, i, l);
      }
    }
    function jh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Lf = {
      animationend: jh("Animation", "AnimationEnd"),
      animationiteration: jh("Animation", "AnimationIteration"),
      animationstart: jh("Animation", "AnimationStart"),
      transitionend: jh("Transition", "TransitionEnd")
    }, cg = {}, DS = {};
    Zt && (DS = document.createElement("div").style, "AnimationEvent" in window || (delete Lf.animationend.animation, delete Lf.animationiteration.animation, delete Lf.animationstart.animation), "TransitionEvent" in window || delete Lf.transitionend.transition);
    function Ph(e) {
      if (cg[e])
        return cg[e];
      if (!Lf[e])
        return e;
      var t = Lf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in DS)
          return cg[e] = t[a];
      return e;
    }
    var kS = Ph("animationend"), OS = Ph("animationiteration"), LS = Ph("animationstart"), MS = Ph("transitionend"), NS = /* @__PURE__ */ new Map(), AS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Pu(e, t) {
      NS.set(e, t), $n(t, [e]);
    }
    function Tw() {
      for (var e = 0; e < AS.length; e++) {
        var t = AS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Pu(a, "on" + i);
      }
      Pu(kS, "onAnimationEnd"), Pu(OS, "onAnimationIteration"), Pu(LS, "onAnimationStart"), Pu("dblclick", "onDoubleClick"), Pu("focusin", "onFocus"), Pu("focusout", "onBlur"), Pu(MS, "onTransitionEnd");
    }
    function bw(e, t, a, i, l, s, f) {
      var v = NS.get(t);
      if (v !== void 0) {
        var g = Sf, x = t;
        switch (t) {
          case "keypress":
            if (Tl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            g = Oh;
            break;
          case "focusin":
            x = "focus", g = Bs;
            break;
          case "focusout":
            x = "blur", g = Bs;
            break;
          case "beforeblur":
          case "afterblur":
            g = Bs;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Cf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = wh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = cp;
            break;
          case kS:
          case OS:
          case LS:
            g = Ky;
            break;
          case MS:
            g = Ho;
            break;
          case "scroll":
            g = op;
            break;
          case "wheel":
            g = Dl;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = bh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Mh;
            break;
        }
        var w = (s & ll) !== 0;
        {
          var z = !w && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = Ow(a, v, i.type, w, z);
          if (M.length > 0) {
            var Y = new g(v, x, null, i, l);
            e.push({
              event: Y,
              listeners: M
            });
          }
        }
      }
    }
    Tw(), ge(), n(), Ew(), Tf();
    function _w(e, t, a, i, l, s, f) {
      bw(e, t, a, i, l, s);
      var v = (s & Py) === 0;
      v && (Be(e, t, a, i, l), I(e, t, a, i, l), ww(e, t, a, i, l), ig(e, t, a, i, l));
    }
    var yp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], fg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(yp));
    function zS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Yi(i, t, void 0, e), e.currentTarget = null;
    }
    function Dw(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, v = s.currentTarget, g = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          zS(e, g, v), i = f;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var w = t[x], z = w.instance, M = w.currentTarget, Y = w.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          zS(e, Y, M), i = z;
        }
    }
    function US(e, t) {
      for (var a = (t & ll) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        Dw(s, f, a);
      }
      Ad();
    }
    function kw(e, t, a, i, l) {
      var s = bc(a), f = [];
      _w(f, e, i, a, s, t), US(f, t);
    }
    function wn(e, t) {
      fg.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ib(t), l = Nw(e);
      i.has(l) || (jS(t, e, ms, a), i.add(l));
    }
    function dg(e, t, a) {
      fg.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ll), jS(a, e, i, t);
    }
    var Fh = "_reactListening" + Math.random().toString(36).slice(2);
    function gp(e) {
      if (!e[Fh]) {
        e[Fh] = !0, yt.forEach(function(a) {
          a !== "selectionchange" && (fg.has(a) || dg(a, !1, e), dg(a, !0, e));
        });
        var t = e.nodeType === ii ? e : e.ownerDocument;
        t !== null && (t[Fh] || (t[Fh] = !0, dg("selectionchange", !1, t)));
      }
    }
    function jS(e, t, a, i, l) {
      var s = qn(e, t, a), f = void 0;
      Es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? mf(e, t, s, f) : Ki(e, t, s) : f !== void 0 ? ip(e, t, s, f) : Au(e, t, s);
    }
    function PS(e, t) {
      return e === t || e.nodeType === Fn && e.parentNode === t;
    }
    function pg(e, t, a, i, l) {
      var s = i;
      if (!(t & $i) && !(t & ms)) {
        var f = l;
        if (i !== null) {
          var v = i;
          e: for (; ; ) {
            if (v === null)
              return;
            var g = v.tag;
            if (g === U || g === H) {
              var x = v.stateNode.containerInfo;
              if (PS(x, f))
                break;
              if (g === H)
                for (var w = v.return; w !== null; ) {
                  var z = w.tag;
                  if (z === U || z === H) {
                    var M = w.stateNode.containerInfo;
                    if (PS(M, f))
                      return;
                  }
                  w = w.return;
                }
              for (; x !== null; ) {
                var Y = Xs(x);
                if (Y === null)
                  return;
                var Q = Y.tag;
                if (Q === P || Q === G) {
                  v = s = Y;
                  continue e;
                }
                x = x.parentNode;
              }
            }
            v = v.return;
          }
        }
      }
      Od(function() {
        return kw(e, t, a, s);
      });
    }
    function Sp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Ow(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, v = i ? f : t, g = [], x = e, w = null; x !== null; ) {
        var z = x, M = z.stateNode, Y = z.tag;
        if (Y === P && M !== null && (w = M, v !== null)) {
          var Q = sl(x, v);
          Q != null && g.push(Sp(x, Q, w));
        }
        if (l)
          break;
        x = x.return;
      }
      return g;
    }
    function Hh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, v = s.tag;
        if (v === P && f !== null) {
          var g = f, x = sl(l, a);
          x != null && i.unshift(Sp(l, x, g));
          var w = sl(l, t);
          w != null && i.push(Sp(l, w, g));
        }
        l = l.return;
      }
      return i;
    }
    function Mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== P);
      return e || null;
    }
    function Lw(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Mf(s))
        l++;
      for (var f = 0, v = i; v; v = Mf(v))
        f++;
      for (; l - f > 0; )
        a = Mf(a), l--;
      for (; f - l > 0; )
        i = Mf(i), f--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Mf(a), i = Mf(i);
      }
      return null;
    }
    function FS(e, t, a, i, l) {
      for (var s = t._reactName, f = [], v = a; v !== null && v !== i; ) {
        var g = v, x = g.alternate, w = g.stateNode, z = g.tag;
        if (x !== null && x === i)
          break;
        if (z === P && w !== null) {
          var M = w;
          if (l) {
            var Y = sl(v, s);
            Y != null && f.unshift(Sp(v, Y, M));
          } else if (!l) {
            var Q = sl(v, s);
            Q != null && f.push(Sp(v, Q, M));
          }
        }
        v = v.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function Mw(e, t, a, i, l) {
      var s = i && l ? Lw(i, l) : null;
      i !== null && FS(e, t, i, s, !1), l !== null && a !== null && FS(e, a, l, s, !0);
    }
    function Nw(e, t) {
      return e + "__bubble";
    }
    var qa = !1, Cp = "dangerouslySetInnerHTML", Vh = "suppressContentEditableWarning", Fu = "suppressHydrationWarning", HS = "autoFocus", Qs = "children", Gs = "style", Bh = "__html", vg, $h, Ep, VS, Ih, BS, $S;
    vg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, $h = function(e, t) {
      Tc(e, t), Td(e, t), Qv(e, t, {
        registrationNameDependencies: gt,
        possibleRegistrationNames: Kt
      });
    }, BS = Zt && !document.documentMode, Ep = function(e, t, a) {
      if (!qa) {
        var i = Yh(a), l = Yh(t);
        l !== i && (qa = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, VS = function(e) {
      if (!qa) {
        qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Ih = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, $S = function(e, t) {
      var a = e.namespaceURI === Hi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Aw = /\r\n?/g, zw = /\u0000|\uFFFD/g;
    function Yh(e) {
      Wr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Aw, `
`).replace(zw, "");
    }
    function Wh(e, t, a, i) {
      var l = Yh(t), s = Yh(e);
      if (s !== l && (i && (qa || (qa = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function IS(e) {
      return e.nodeType === ii ? e : e.ownerDocument;
    }
    function Uw() {
    }
    function qh(e) {
      e.onclick = Uw;
    }
    function jw(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Gs)
            f && Object.freeze(f), Pv(t, f);
          else if (s === Cp) {
            var v = f ? f[Bh] : void 0;
            v != null && _v(t, v);
          } else if (s === Qs)
            if (typeof f == "string") {
              var g = e !== "textarea" || f !== "";
              g && Ec(t, f);
            } else typeof f == "number" && Ec(t, "" + f);
          else s === Vh || s === Fu || s === HS || (gt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Ih(s, f), s === "onScroll" && wn("scroll", t)) : f != null && ma(t, s, f, l));
        }
    }
    function Pw(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Gs ? Pv(e, f) : s === Cp ? _v(e, f) : s === Qs ? Ec(e, f) : ma(e, s, f, i);
      }
    }
    function Fw(e, t, a, i) {
      var l, s = IS(a), f, v = i;
      if (v === Hi && (v = Sc(e)), v === Hi) {
        if (l = Bi(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var x = g.firstChild;
          f = g.removeChild(x);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var w = f;
          t.multiple ? w.multiple = !0 : t.size && (w.size = t.size);
        }
      } else
        f = s.createElementNS(v, e);
      return v === Hi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Ln.call(vg, e) && (vg[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function Hw(e, t) {
      return IS(t).createTextNode(e);
    }
    function Vw(e, t, a, i) {
      var l = Bi(t, a);
      $h(t, a);
      var s;
      switch (t) {
        case "dialog":
          wn("cancel", e), wn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          wn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < yp.length; f++)
            wn(yp[f], e);
          s = a;
          break;
        case "source":
          wn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          wn("error", e), wn("load", e), s = a;
          break;
        case "details":
          wn("toggle", e), s = a;
          break;
        case "input":
          _(e, a), s = S(e, a), wn("invalid", e);
          break;
        case "option":
          en(e, a), s = a;
          break;
        case "select":
          ds(e, a), s = fs(e, a), wn("invalid", e);
          break;
        case "textarea":
          wv(e, a), s = md(e, a), wn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Rc(t, s), jw(t, e, i, s, l), t) {
        case "input":
          Ma(e), ye(e, a, !1);
          break;
        case "textarea":
          Ma(e), bv(e);
          break;
        case "option":
          on(e, a);
          break;
        case "select":
          vd(e, a);
          break;
        default:
          typeof s.onClick == "function" && qh(e);
          break;
      }
    }
    function Bw(e, t, a, i, l) {
      $h(t, i);
      var s = null, f, v;
      switch (t) {
        case "input":
          f = S(e, a), v = S(e, i), s = [];
          break;
        case "select":
          f = fs(e, a), v = fs(e, i), s = [];
          break;
        case "textarea":
          f = md(e, a), v = md(e, i), s = [];
          break;
        default:
          f = a, v = i, typeof f.onClick != "function" && typeof v.onClick == "function" && qh(e);
          break;
      }
      Rc(t, v);
      var g, x, w = null;
      for (g in f)
        if (!(v.hasOwnProperty(g) || !f.hasOwnProperty(g) || f[g] == null))
          if (g === Gs) {
            var z = f[g];
            for (x in z)
              z.hasOwnProperty(x) && (w || (w = {}), w[x] = "");
          } else g === Cp || g === Qs || g === Vh || g === Fu || g === HS || (gt.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in v) {
        var M = v[g], Y = f != null ? f[g] : void 0;
        if (!(!v.hasOwnProperty(g) || M === Y || M == null && Y == null))
          if (g === Gs)
            if (M && Object.freeze(M), Y) {
              for (x in Y)
                Y.hasOwnProperty(x) && (!M || !M.hasOwnProperty(x)) && (w || (w = {}), w[x] = "");
              for (x in M)
                M.hasOwnProperty(x) && Y[x] !== M[x] && (w || (w = {}), w[x] = M[x]);
            } else
              w || (s || (s = []), s.push(g, w)), w = M;
          else if (g === Cp) {
            var Q = M ? M[Bh] : void 0, Z = Y ? Y[Bh] : void 0;
            Q != null && Z !== Q && (s = s || []).push(g, Q);
          } else g === Qs ? (typeof M == "string" || typeof M == "number") && (s = s || []).push(g, "" + M) : g === Vh || g === Fu || (gt.hasOwnProperty(g) ? (M != null && (typeof M != "function" && Ih(g, M), g === "onScroll" && wn("scroll", e)), !s && Y !== M && (s = [])) : (s = s || []).push(g, M));
      }
      return w && (vs(w, v[Gs]), (s = s || []).push(Gs, w)), s;
    }
    function $w(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && W(e, l);
      var s = Bi(a, i), f = Bi(a, l);
      switch (Pw(e, t, s, f), a) {
        case "input":
          X(e, l);
          break;
        case "textarea":
          Tv(e, l);
          break;
        case "select":
          Dy(e, l);
          break;
      }
    }
    function Iw(e) {
      {
        var t = e.toLowerCase();
        return wc.hasOwnProperty(t) && wc[t] || null;
      }
    }
    function Yw(e, t, a, i, l, s, f) {
      var v, g;
      switch (v = Bi(t, a), $h(t, a), t) {
        case "dialog":
          wn("cancel", e), wn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          wn("load", e);
          break;
        case "video":
        case "audio":
          for (var x = 0; x < yp.length; x++)
            wn(yp[x], e);
          break;
        case "source":
          wn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          wn("error", e), wn("load", e);
          break;
        case "details":
          wn("toggle", e);
          break;
        case "input":
          _(e, a), wn("invalid", e);
          break;
        case "option":
          en(e, a);
          break;
        case "select":
          ds(e, a), wn("invalid", e);
          break;
        case "textarea":
          wv(e, a), wn("invalid", e);
          break;
      }
      Rc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var w = e.attributes, z = 0; z < w.length; z++) {
          var M = w[z].name.toLowerCase();
          switch (M) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(w[z].name);
          }
        }
      }
      var Y = null;
      for (var Q in a)
        if (a.hasOwnProperty(Q)) {
          var Z = a[Q];
          if (Q === Qs)
            typeof Z == "string" ? e.textContent !== Z && (a[Fu] !== !0 && Wh(e.textContent, Z, s, f), Y = [Qs, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (a[Fu] !== !0 && Wh(e.textContent, Z, s, f), Y = [Qs, "" + Z]);
          else if (gt.hasOwnProperty(Q))
            Z != null && (typeof Z != "function" && Ih(Q, Z), Q === "onScroll" && wn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var ke = void 0, Ke = v && Xe ? null : Or(Q);
            if (a[Fu] !== !0) {
              if (!(Q === Vh || Q === Fu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === Cp) {
                  var Ye = e.innerHTML, Ut = Z ? Z[Bh] : void 0;
                  if (Ut != null) {
                    var Ot = $S(e, Ut);
                    Ot !== Ye && Ep(Q, Ye, Ot);
                  }
                } else if (Q === Gs) {
                  if (g.delete(Q), BS) {
                    var B = Uy(Z);
                    ke = e.getAttribute("style"), B !== ke && Ep(Q, ke, B);
                  }
                } else if (v && !Xe)
                  g.delete(Q.toLowerCase()), ke = hi(e, Q, Z), Z !== ke && Ep(Q, ke, Z);
                else if (!Cn(Q, Ke, v) && !Jt(Q, Z, Ke, v)) {
                  var J = !1;
                  if (Ke !== null)
                    g.delete(Ke.attributeName), ke = ha(e, Q, Z, Ke);
                  else {
                    var $ = i;
                    if ($ === Hi && ($ = Sc(t)), $ === Hi)
                      g.delete(Q.toLowerCase());
                    else {
                      var pe = Iw(Q);
                      pe !== null && pe !== Q && (J = !0, g.delete(pe)), g.delete(Q);
                    }
                    ke = hi(e, Q, Z);
                  }
                  var Ae = Xe;
                  !Ae && Z !== ke && !J && Ep(Q, ke, Z);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[Fu] !== !0 && VS(g), t) {
        case "input":
          Ma(e), ye(e, a, !0);
          break;
        case "textarea":
          Ma(e), bv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && qh(e);
          break;
      }
      return Y;
    }
    function Ww(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function hg(e, t) {
      {
        if (qa)
          return;
        qa = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function mg(e, t) {
      {
        if (qa)
          return;
        qa = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function yg(e, t, a) {
      {
        if (qa)
          return;
        qa = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function gg(e, t) {
      {
        if (t === "" || qa)
          return;
        qa = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function qw(e, t, a) {
      switch (t) {
        case "input":
          et(e, a);
          return;
        case "textarea":
          yd(e, a);
          return;
        case "select":
          ky(e, a);
          return;
      }
    }
    var xp = function() {
    }, Rp = function() {
    };
    {
      var Qw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], YS = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Gw = YS.concat(["button"]), Xw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], WS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Rp = function(e, t) {
        var a = xt({}, e || WS), i = {
          tag: t
        };
        return YS.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Gw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Qw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Kw = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Xw.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Zw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, qS = {};
      xp = function(e, t, a) {
        a = a || WS;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Kw(e, l) ? null : i, f = s ? null : Zw(e, a), v = s || f;
        if (v) {
          var g = v.tag, x = !!s + "|" + e + "|" + g;
          if (!qS[x]) {
            qS[x] = !0;
            var w = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? w = "Text nodes" : (w = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : w = "<" + e + ">", s) {
              var M = "";
              g === "table" && e === "tr" && (M += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", w, g, z, M);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", w, g);
          }
        }
      };
    }
    var Qh = "suppressHydrationWarning", Gh = "$", Xh = "/$", wp = "$?", Tp = "$!", Jw = "style", Sg = null, Cg = null;
    function eT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ii:
        case il: {
          t = i === ii ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Sd(null, "");
          break;
        }
        default: {
          var s = i === Fn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Sd(f, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), g = Rp(null, v);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function tT(e, t, a) {
      {
        var i = e, l = Sd(i.namespace, t), s = Rp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function T3(e) {
      return e;
    }
    function nT(e) {
      Sg = Mu(), Cg = mw();
      var t = null;
      return la(!1), t;
    }
    function rT(e) {
      yw(Cg), la(Sg), Sg = null, Cg = null;
    }
    function aT(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (xp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, g = Rp(f.ancestorInfo, e);
          xp(null, v, g);
        }
        s = f.namespace;
      }
      var x = Fw(e, t, a, s);
      return Dp(l, x), Dg(x, t), x;
    }
    function iT(e, t) {
      e.appendChild(t);
    }
    function oT(e, t, a, i, l) {
      switch (Vw(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function lT(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, g = Rp(f.ancestorInfo, t);
          xp(null, v, g);
        }
      }
      return Bw(e, t, a, i);
    }
    function Eg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function uT(e, t, a, i) {
      {
        var l = a;
        xp(null, e, l.ancestorInfo);
      }
      var s = Hw(e, t);
      return Dp(i, s), s;
    }
    function sT() {
      var e = window.event;
      return e === void 0 ? wi : hf(e.type);
    }
    var xg = typeof setTimeout == "function" ? setTimeout : void 0, cT = typeof clearTimeout == "function" ? clearTimeout : void 0, Rg = -1, QS = typeof Promise == "function" ? Promise : void 0, fT = typeof queueMicrotask == "function" ? queueMicrotask : typeof QS < "u" ? function(e) {
      return QS.resolve(null).then(e).catch(dT);
    } : xg;
    function dT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function pT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function vT(e, t, a, i, l, s) {
      $w(e, t, a, i, l), Dg(e, l);
    }
    function GS(e) {
      Ec(e, "");
    }
    function hT(e, t, a) {
      e.nodeValue = a;
    }
    function mT(e, t) {
      e.appendChild(t);
    }
    function yT(e, t) {
      var a;
      e.nodeType === Fn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && qh(a);
    }
    function gT(e, t, a) {
      e.insertBefore(t, a);
    }
    function ST(e, t, a) {
      e.nodeType === Fn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function CT(e, t) {
      e.removeChild(t);
    }
    function ET(e, t) {
      e.nodeType === Fn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function wg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Fn) {
          var s = l.data;
          if (s === Xh)
            if (i === 0) {
              e.removeChild(l), kn(t);
              return;
            } else
              i--;
          else (s === Gh || s === wp || s === Tp) && i++;
        }
        a = l;
      } while (a);
      kn(t);
    }
    function xT(e, t) {
      e.nodeType === Fn ? wg(e.parentNode, t) : e.nodeType === Kr && wg(e, t), kn(e);
    }
    function RT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function wT(e) {
      e.nodeValue = "";
    }
    function TT(e, t) {
      e = e;
      var a = t[Jw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xc("display", i);
    }
    function bT(e, t) {
      e.nodeValue = t;
    }
    function _T(e) {
      e.nodeType === Kr ? e.textContent = "" : e.nodeType === ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function DT(e, t, a) {
      return e.nodeType !== Kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function kT(e, t) {
      return t === "" || e.nodeType !== Vi ? null : e;
    }
    function OT(e) {
      return e.nodeType !== Fn ? null : e;
    }
    function XS(e) {
      return e.data === wp;
    }
    function Tg(e) {
      return e.data === Tp;
    }
    function LT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function MT(e, t) {
      e._reactRetry = t;
    }
    function Kh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Kr || t === Vi)
          break;
        if (t === Fn) {
          var a = e.data;
          if (a === Gh || a === Tp || a === wp)
            break;
          if (a === Xh)
            return null;
        }
      }
      return e;
    }
    function bp(e) {
      return Kh(e.nextSibling);
    }
    function NT(e) {
      return Kh(e.firstChild);
    }
    function AT(e) {
      return Kh(e.firstChild);
    }
    function zT(e) {
      return Kh(e.nextSibling);
    }
    function UT(e, t, a, i, l, s, f) {
      Dp(s, e), Dg(e, a);
      var v;
      {
        var g = l;
        v = g.namespace;
      }
      var x = (s.mode & Ie) !== Ve;
      return Yw(e, t, a, v, i, x, f);
    }
    function jT(e, t, a, i) {
      return Dp(a, e), a.mode & Ie, Ww(e, t);
    }
    function PT(e, t) {
      Dp(t, e);
    }
    function FT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Fn) {
          var i = t.data;
          if (i === Xh) {
            if (a === 0)
              return bp(t);
            a--;
          } else (i === Gh || i === Tp || i === wp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function KS(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Fn) {
          var i = t.data;
          if (i === Gh || i === Tp || i === wp) {
            if (a === 0)
              return t;
            a--;
          } else i === Xh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function HT(e) {
      kn(e);
    }
    function VT(e) {
      kn(e);
    }
    function BT(e) {
      return e !== "head" && e !== "body";
    }
    function $T(e, t, a, i) {
      var l = !0;
      Wh(t.nodeValue, a, i, l);
    }
    function IT(e, t, a, i, l, s) {
      if (t[Qh] !== !0) {
        var f = !0;
        Wh(i.nodeValue, l, s, f);
      }
    }
    function YT(e, t) {
      t.nodeType === Kr ? hg(e, t) : t.nodeType === Fn || mg(e, t);
    }
    function WT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Kr ? hg(a, t) : t.nodeType === Fn || mg(a, t));
      }
    }
    function qT(e, t, a, i, l) {
      (l || t[Qh] !== !0) && (i.nodeType === Kr ? hg(a, i) : i.nodeType === Fn || mg(a, i));
    }
    function QT(e, t, a) {
      yg(e, t);
    }
    function GT(e, t) {
      gg(e, t);
    }
    function XT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && yg(i, t);
      }
    }
    function KT(e, t) {
      {
        var a = e.parentNode;
        a !== null && gg(a, t);
      }
    }
    function ZT(e, t, a, i, l, s) {
      (s || t[Qh] !== !0) && yg(a, i);
    }
    function JT(e, t, a, i, l) {
      (l || t[Qh] !== !0) && gg(a, i);
    }
    function eb(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function tb(e) {
      gp(e);
    }
    var Nf = Math.random().toString(36).slice(2), Af = "__reactFiber$" + Nf, bg = "__reactProps$" + Nf, _p = "__reactContainer$" + Nf, _g = "__reactEvents$" + Nf, nb = "__reactListeners$" + Nf, rb = "__reactHandles$" + Nf;
    function ab(e) {
      delete e[Af], delete e[bg], delete e[_g], delete e[nb], delete e[rb];
    }
    function Dp(e, t) {
      t[Af] = e;
    }
    function Zh(e, t) {
      t[_p] = e;
    }
    function ZS(e) {
      e[_p] = null;
    }
    function kp(e) {
      return !!e[_p];
    }
    function Xs(e) {
      var t = e[Af];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[_p] || a[Af], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = KS(e); l !== null; ) {
              var s = l[Af];
              if (s)
                return s;
              l = KS(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Hu(e) {
      var t = e[Af] || e[_p];
      return t && (t.tag === P || t.tag === G || t.tag === ue || t.tag === U) ? t : null;
    }
    function zf(e) {
      if (e.tag === P || e.tag === G)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Jh(e) {
      return e[bg] || null;
    }
    function Dg(e, t) {
      e[bg] = t;
    }
    function ib(e) {
      var t = e[_g];
      return t === void 0 && (t = e[_g] = /* @__PURE__ */ new Set()), t;
    }
    var JS = {}, eC = m.ReactDebugCurrentFrame;
    function em(e) {
      if (e) {
        var t = e._owner, a = Si(e.type, e._source, t ? t.type : null);
        eC.setExtraStackFrame(a);
      } else
        eC.setExtraStackFrame(null);
    }
    function eo(e, t, a, i, l) {
      {
        var s = Function.call.bind(Ln);
        for (var f in e)
          if (s(e, f)) {
            var v = void 0;
            try {
              if (typeof e[f] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              v = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              v = x;
            }
            v && !(v instanceof Error) && (em(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof v), em(null)), v instanceof Error && !(v.message in JS) && (JS[v.message] = !0, em(l), y("Failed %s type: %s", a, v.message), em(null));
          }
      }
    }
    var kg = [], tm;
    tm = [];
    var kl = -1;
    function Vu(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (kl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== tm[kl] && y("Unexpected Fiber popped."), e.current = kg[kl], kg[kl] = null, tm[kl] = null, kl--;
    }
    function sa(e, t, a) {
      kl++, kg[kl] = e.current, tm[kl] = a, e.current = t;
    }
    var Og;
    Og = {};
    var si = {};
    Object.freeze(si);
    var Ol = Vu(si), Bo = Vu(!1), Lg = si;
    function Uf(e, t, a) {
      return a && $o(t) ? Lg : Ol.current;
    }
    function tC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function jf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return si;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var v = ct(e) || "Unknown";
          eo(i, s, "context", v);
        }
        return l && tC(e, t, s), s;
      }
    }
    function nm() {
      return Bo.current;
    }
    function $o(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function rm(e) {
      ua(Bo, e), ua(Ol, e);
    }
    function Mg(e) {
      ua(Bo, e), ua(Ol, e);
    }
    function nC(e, t, a) {
      {
        if (Ol.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        sa(Ol, t, e), sa(Bo, a, e);
      }
    }
    function rC(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ct(e) || "Unknown";
            Og[s] || (Og[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var v in f)
          if (!(v in l))
            throw new Error((ct(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var g = ct(e) || "Unknown";
          eo(l, f, "child context", g);
        }
        return xt({}, a, f);
      }
    }
    function am(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return Lg = Ol.current, sa(Ol, a, e), sa(Bo, Bo.current, e), !0;
      }
    }
    function aC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = rC(e, t, Lg);
          i.__reactInternalMemoizedMergedChildContext = l, ua(Bo, e), ua(Ol, e), sa(Ol, l, e), sa(Bo, a, e);
        } else
          ua(Bo, e), sa(Bo, a, e);
      }
    }
    function ob(e) {
      {
        if (!Fd(e) || e.tag !== O)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case U:
              return t.stateNode.context;
            case O: {
              var a = t.type;
              if ($o(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Bu = 0, im = 1, Ll = null, Ng = !1, Ag = !1;
    function iC(e) {
      Ll === null ? Ll = [e] : Ll.push(e);
    }
    function lb(e) {
      Ng = !0, iC(e);
    }
    function oC() {
      Ng && $u();
    }
    function $u() {
      if (!Ag && Ll !== null) {
        Ag = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = Ll;
          for (Dn(zn); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Ll = null, Ng = !1;
        } catch (s) {
          throw Ll !== null && (Ll = Ll.slice(e + 1)), Nc(zc, $u), s;
        } finally {
          Dn(t), Ag = !1;
        }
      }
      return null;
    }
    var Pf = [], Ff = 0, om = null, lm = 0, Di = [], ki = 0, Ks = null, Ml = 1, Nl = "";
    function ub(e) {
      return Js(), (e.flags & Ud) !== Qe;
    }
    function sb(e) {
      return Js(), lm;
    }
    function cb() {
      var e = Nl, t = Ml, a = t & ~fb(t);
      return a.toString(32) + e;
    }
    function Zs(e, t) {
      Js(), Pf[Ff++] = lm, Pf[Ff++] = om, om = e, lm = t;
    }
    function lC(e, t, a) {
      Js(), Di[ki++] = Ml, Di[ki++] = Nl, Di[ki++] = Ks, Ks = e;
      var i = Ml, l = Nl, s = um(i) - 1, f = i & ~(1 << s), v = a + 1, g = um(t) + s;
      if (g > 30) {
        var x = s - s % 5, w = (1 << x) - 1, z = (f & w).toString(32), M = f >> x, Y = s - x, Q = um(t) + Y, Z = v << Y, ke = Z | M, Ke = z + l;
        Ml = 1 << Q | ke, Nl = Ke;
      } else {
        var Ye = v << s, Ut = Ye | f, Ot = l;
        Ml = 1 << g | Ut, Nl = Ot;
      }
    }
    function zg(e) {
      Js();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Zs(e, a), lC(e, a, i);
      }
    }
    function um(e) {
      return 32 - hu(e);
    }
    function fb(e) {
      return 1 << um(e) - 1;
    }
    function Ug(e) {
      for (; e === om; )
        om = Pf[--Ff], Pf[Ff] = null, lm = Pf[--Ff], Pf[Ff] = null;
      for (; e === Ks; )
        Ks = Di[--ki], Di[ki] = null, Nl = Di[--ki], Di[ki] = null, Ml = Di[--ki], Di[ki] = null;
    }
    function db() {
      return Js(), Ks !== null ? {
        id: Ml,
        overflow: Nl
      } : null;
    }
    function pb(e, t) {
      Js(), Di[ki++] = Ml, Di[ki++] = Nl, Di[ki++] = Ks, Ml = t.id, Nl = t.overflow, Ks = e;
    }
    function Js() {
      Pr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var jr = null, Oi = null, to = !1, ec = !1, Iu = null;
    function vb() {
      to && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function uC() {
      ec = !0;
    }
    function hb() {
      return ec;
    }
    function mb(e) {
      var t = e.stateNode.containerInfo;
      return Oi = AT(t), jr = e, to = !0, Iu = null, ec = !1, !0;
    }
    function yb(e, t, a) {
      return Oi = zT(t), jr = e, to = !0, Iu = null, ec = !1, a !== null && pb(e, a), !0;
    }
    function sC(e, t) {
      switch (e.tag) {
        case U: {
          YT(e.stateNode.containerInfo, t);
          break;
        }
        case P: {
          var a = (e.mode & Ie) !== Ve;
          qT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ue: {
          var i = e.memoizedState;
          i.dehydrated !== null && WT(i.dehydrated, t);
          break;
        }
      }
    }
    function cC(e, t) {
      sC(e, t);
      var a = ED();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= It) : i.push(a);
    }
    function jg(e, t) {
      {
        if (ec)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case P:
                var i = t.type;
                t.pendingProps, QT(a, i);
                break;
              case G:
                var l = t.pendingProps;
                GT(a, l);
                break;
            }
            break;
          }
          case P: {
            var s = e.type, f = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case P: {
                var g = t.type, x = t.pendingProps, w = (e.mode & Ie) !== Ve;
                ZT(
                  s,
                  f,
                  v,
                  g,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
              case G: {
                var z = t.pendingProps, M = (e.mode & Ie) !== Ve;
                JT(
                  s,
                  f,
                  v,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case ue: {
            var Y = e.memoizedState, Q = Y.dehydrated;
            if (Q !== null) switch (t.tag) {
              case P:
                var Z = t.type;
                t.pendingProps, XT(Q, Z);
                break;
              case G:
                var ke = t.pendingProps;
                KT(Q, ke);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function fC(e, t) {
      t.flags = t.flags & ~Ua | fn, jg(e, t);
    }
    function dC(e, t) {
      switch (e.tag) {
        case P: {
          var a = e.type;
          e.pendingProps;
          var i = DT(t, a);
          return i !== null ? (e.stateNode = i, jr = e, Oi = NT(i), !0) : !1;
        }
        case G: {
          var l = e.pendingProps, s = kT(t, l);
          return s !== null ? (e.stateNode = s, jr = e, Oi = null, !0) : !1;
        }
        case ue: {
          var f = OT(t);
          if (f !== null) {
            var v = {
              dehydrated: f,
              treeContext: db(),
              retryLane: br
            };
            e.memoizedState = v;
            var g = xD(f);
            return g.return = e, e.child = g, jr = e, Oi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Pg(e) {
      return (e.mode & Ie) !== Ve && (e.flags & ut) === Qe;
    }
    function Fg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Hg(e) {
      if (to) {
        var t = Oi;
        if (!t) {
          Pg(e) && (jg(jr, e), Fg()), fC(jr, e), to = !1, jr = e;
          return;
        }
        var a = t;
        if (!dC(e, t)) {
          Pg(e) && (jg(jr, e), Fg()), t = bp(a);
          var i = jr;
          if (!t || !dC(e, t)) {
            fC(jr, e), to = !1, jr = e;
            return;
          }
          cC(i, a);
        }
      }
    }
    function gb(e, t, a) {
      var i = e.stateNode, l = !ec, s = UT(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function Sb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = jT(t, a, e);
      if (i) {
        var l = jr;
        if (l !== null)
          switch (l.tag) {
            case U: {
              var s = l.stateNode.containerInfo, f = (l.mode & Ie) !== Ve;
              $T(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case P: {
              var v = l.type, g = l.memoizedProps, x = l.stateNode, w = (l.mode & Ie) !== Ve;
              IT(
                v,
                g,
                x,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                w
              );
              break;
            }
          }
      }
      return i;
    }
    function Cb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      PT(a, e);
    }
    function Eb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return FT(a);
    }
    function pC(e) {
      for (var t = e.return; t !== null && t.tag !== P && t.tag !== U && t.tag !== ue; )
        t = t.return;
      jr = t;
    }
    function sm(e) {
      if (e !== jr)
        return !1;
      if (!to)
        return pC(e), to = !0, !1;
      if (e.tag !== U && (e.tag !== P || BT(e.type) && !Eg(e.type, e.memoizedProps))) {
        var t = Oi;
        if (t)
          if (Pg(e))
            vC(e), Fg();
          else
            for (; t; )
              cC(e, t), t = bp(t);
      }
      return pC(e), e.tag === ue ? Oi = Eb(e) : Oi = jr ? bp(e.stateNode) : null, !0;
    }
    function xb() {
      return to && Oi !== null;
    }
    function vC(e) {
      for (var t = Oi; t; )
        sC(e, t), t = bp(t);
    }
    function Hf() {
      jr = null, Oi = null, to = !1, ec = !1;
    }
    function hC() {
      Iu !== null && (ux(Iu), Iu = null);
    }
    function Pr() {
      return to;
    }
    function Vg(e) {
      Iu === null ? Iu = [e] : Iu.push(e);
    }
    var Rb = m.ReactCurrentBatchConfig, wb = null;
    function Tb() {
      return Rb.transition;
    }
    var no = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var bb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & bt && (t = a), a = a.return;
        return t;
      }, tc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Op = [], Lp = [], Mp = [], Np = [], Ap = [], zp = [], nc = /* @__PURE__ */ new Set();
      no.recordUnsafeLifecycleWarnings = function(e, t) {
        nc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & bt && typeof t.UNSAFE_componentWillMount == "function" && Lp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Mp.push(e), e.mode & bt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Np.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & bt && typeof t.UNSAFE_componentWillUpdate == "function" && zp.push(e));
      }, no.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(M) {
          e.add(ct(M) || "Component"), nc.add(M.type);
        }), Op = []);
        var t = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(M) {
          t.add(ct(M) || "Component"), nc.add(M.type);
        }), Lp = []);
        var a = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(M) {
          a.add(ct(M) || "Component"), nc.add(M.type);
        }), Mp = []);
        var i = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(M) {
          i.add(ct(M) || "Component"), nc.add(M.type);
        }), Np = []);
        var l = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(M) {
          l.add(ct(M) || "Component"), nc.add(M.type);
        }), Ap = []);
        var s = /* @__PURE__ */ new Set();
        if (zp.length > 0 && (zp.forEach(function(M) {
          s.add(ct(M) || "Component"), nc.add(M.type);
        }), zp = []), t.size > 0) {
          var f = tc(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var v = tc(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (s.size > 0) {
          var g = tc(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var x = tc(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var w = tc(a);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (l.size > 0) {
          var z = tc(l);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var cm = /* @__PURE__ */ new Map(), mC = /* @__PURE__ */ new Set();
      no.recordLegacyContextWarning = function(e, t) {
        var a = bb(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!mC.has(e.type)) {
          var i = cm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cm.set(a, i)), i.push(e));
        }
      }, no.flushLegacyContextWarning = function() {
        cm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ct(s) || "Component"), mC.add(s.type);
            });
            var l = tc(i);
            try {
              Qt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              bn();
            }
          }
        });
      }, no.discardPendingWarnings = function() {
        Op = [], Lp = [], Mp = [], Np = [], Ap = [], zp = [], cm = /* @__PURE__ */ new Map();
      };
    }
    var Bg, $g, Ig, Yg, Wg, yC = function(e, t) {
    };
    Bg = !1, $g = !1, Ig = {}, Yg = {}, Wg = {}, yC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ct(t) || "Component";
        Yg[a] || (Yg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function _b(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Up(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & bt || nt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== O) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !_b(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = ct(e) || "Component";
          Ig[l] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Ig[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var v = s;
            if (v.tag !== O)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = v.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = f;
          Kn(i, "ref");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var w = function(z) {
            var M = g.refs;
            z === null ? delete M[x] : M[x] = z;
          };
          return w._stringRef = x, w;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function fm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function dm(e) {
      {
        var t = ct(e) || "Component";
        if (Wg[t])
          return;
        Wg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function gC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function SC(e) {
      function t(B, J) {
        if (e) {
          var $ = B.deletions;
          $ === null ? (B.deletions = [J], B.flags |= It) : $.push(J);
        }
      }
      function a(B, J) {
        if (!e)
          return null;
        for (var $ = J; $ !== null; )
          t(B, $), $ = $.sibling;
        return null;
      }
      function i(B, J) {
        for (var $ = /* @__PURE__ */ new Map(), pe = J; pe !== null; )
          pe.key !== null ? $.set(pe.key, pe) : $.set(pe.index, pe), pe = pe.sibling;
        return $;
      }
      function l(B, J) {
        var $ = fc(B, J);
        return $.index = 0, $.sibling = null, $;
      }
      function s(B, J, $) {
        if (B.index = $, !e)
          return B.flags |= Ud, J;
        var pe = B.alternate;
        if (pe !== null) {
          var Ae = pe.index;
          return Ae < J ? (B.flags |= fn, J) : Ae;
        } else
          return B.flags |= fn, J;
      }
      function f(B) {
        return e && B.alternate === null && (B.flags |= fn), B;
      }
      function v(B, J, $, pe) {
        if (J === null || J.tag !== G) {
          var Ae = V1($, B.mode, pe);
          return Ae.return = B, Ae;
        } else {
          var Le = l(J, $);
          return Le.return = B, Le;
        }
      }
      function g(B, J, $, pe) {
        var Ae = $.type;
        if (Ae === ya)
          return w(B, J, $.props.children, pe, $.key);
        if (J !== null && (J.elementType === Ae || // Keep this check inline so it only runs on the false path:
        wx(J, $) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ae == "object" && Ae !== null && Ae.$$typeof === Je && gC(Ae) === J.type)) {
          var Le = l(J, $.props);
          return Le.ref = Up(B, J, $), Le.return = B, Le._debugSource = $._source, Le._debugOwner = $._owner, Le;
        }
        var it = H1($, B.mode, pe);
        return it.ref = Up(B, J, $), it.return = B, it;
      }
      function x(B, J, $, pe) {
        if (J === null || J.tag !== H || J.stateNode.containerInfo !== $.containerInfo || J.stateNode.implementation !== $.implementation) {
          var Ae = B1($, B.mode, pe);
          return Ae.return = B, Ae;
        } else {
          var Le = l(J, $.children || []);
          return Le.return = B, Le;
        }
      }
      function w(B, J, $, pe, Ae) {
        if (J === null || J.tag !== re) {
          var Le = ts($, B.mode, pe, Ae);
          return Le.return = B, Le;
        } else {
          var it = l(J, $);
          return it.return = B, it;
        }
      }
      function z(B, J, $) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var pe = V1("" + J, B.mode, $);
          return pe.return = B, pe;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case ti: {
              var Ae = H1(J, B.mode, $);
              return Ae.ref = Up(B, null, J), Ae.return = B, Ae;
            }
            case Lr: {
              var Le = B1(J, B.mode, $);
              return Le.return = B, Le;
            }
            case Je: {
              var it = J._payload, dt = J._init;
              return z(B, dt(it), $);
            }
          }
          if (Nt(J) || Mr(J)) {
            var nn = ts(J, B.mode, $, null);
            return nn.return = B, nn;
          }
          fm(B, J);
        }
        return typeof J == "function" && dm(B), null;
      }
      function M(B, J, $, pe) {
        var Ae = J !== null ? J.key : null;
        if (typeof $ == "string" && $ !== "" || typeof $ == "number")
          return Ae !== null ? null : v(B, J, "" + $, pe);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case ti:
              return $.key === Ae ? g(B, J, $, pe) : null;
            case Lr:
              return $.key === Ae ? x(B, J, $, pe) : null;
            case Je: {
              var Le = $._payload, it = $._init;
              return M(B, J, it(Le), pe);
            }
          }
          if (Nt($) || Mr($))
            return Ae !== null ? null : w(B, J, $, pe, null);
          fm(B, $);
        }
        return typeof $ == "function" && dm(B), null;
      }
      function Y(B, J, $, pe, Ae) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var Le = B.get($) || null;
          return v(J, Le, "" + pe, Ae);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case ti: {
              var it = B.get(pe.key === null ? $ : pe.key) || null;
              return g(J, it, pe, Ae);
            }
            case Lr: {
              var dt = B.get(pe.key === null ? $ : pe.key) || null;
              return x(J, dt, pe, Ae);
            }
            case Je:
              var nn = pe._payload, Vt = pe._init;
              return Y(B, J, $, Vt(nn), Ae);
          }
          if (Nt(pe) || Mr(pe)) {
            var Xn = B.get($) || null;
            return w(J, Xn, pe, Ae, null);
          }
          fm(J, pe);
        }
        return typeof pe == "function" && dm(J), null;
      }
      function Q(B, J, $) {
        {
          if (typeof B != "object" || B === null)
            return J;
          switch (B.$$typeof) {
            case ti:
            case Lr:
              yC(B, $);
              var pe = B.key;
              if (typeof pe != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(pe);
                break;
              }
              if (!J.has(pe)) {
                J.add(pe);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case Je:
              var Ae = B._payload, Le = B._init;
              Q(Le(Ae), J, $);
              break;
          }
        }
        return J;
      }
      function Z(B, J, $, pe) {
        for (var Ae = null, Le = 0; Le < $.length; Le++) {
          var it = $[Le];
          Ae = Q(it, Ae, B);
        }
        for (var dt = null, nn = null, Vt = J, Xn = 0, Bt = 0, Bn = null; Vt !== null && Bt < $.length; Bt++) {
          Vt.index > Bt ? (Bn = Vt, Vt = null) : Bn = Vt.sibling;
          var fa = M(B, Vt, $[Bt], pe);
          if (fa === null) {
            Vt === null && (Vt = Bn);
            break;
          }
          e && Vt && fa.alternate === null && t(B, Vt), Xn = s(fa, Xn, Bt), nn === null ? dt = fa : nn.sibling = fa, nn = fa, Vt = Bn;
        }
        if (Bt === $.length) {
          if (a(B, Vt), Pr()) {
            var Yr = Bt;
            Zs(B, Yr);
          }
          return dt;
        }
        if (Vt === null) {
          for (; Bt < $.length; Bt++) {
            var fi = z(B, $[Bt], pe);
            fi !== null && (Xn = s(fi, Xn, Bt), nn === null ? dt = fi : nn.sibling = fi, nn = fi);
          }
          if (Pr()) {
            var _a = Bt;
            Zs(B, _a);
          }
          return dt;
        }
        for (var Da = i(B, Vt); Bt < $.length; Bt++) {
          var da = Y(Da, B, Bt, $[Bt], pe);
          da !== null && (e && da.alternate !== null && Da.delete(da.key === null ? Bt : da.key), Xn = s(da, Xn, Bt), nn === null ? dt = da : nn.sibling = da, nn = da);
        }
        if (e && Da.forEach(function(id) {
          return t(B, id);
        }), Pr()) {
          var Hl = Bt;
          Zs(B, Hl);
        }
        return dt;
      }
      function ke(B, J, $, pe) {
        var Ae = Mr($);
        if (typeof Ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          $[Symbol.toStringTag] === "Generator" && ($g || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), $g = !0), $.entries === Ae && (Bg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bg = !0);
          var Le = Ae.call($);
          if (Le)
            for (var it = null, dt = Le.next(); !dt.done; dt = Le.next()) {
              var nn = dt.value;
              it = Q(nn, it, B);
            }
        }
        var Vt = Ae.call($);
        if (Vt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Xn = null, Bt = null, Bn = J, fa = 0, Yr = 0, fi = null, _a = Vt.next(); Bn !== null && !_a.done; Yr++, _a = Vt.next()) {
          Bn.index > Yr ? (fi = Bn, Bn = null) : fi = Bn.sibling;
          var Da = M(B, Bn, _a.value, pe);
          if (Da === null) {
            Bn === null && (Bn = fi);
            break;
          }
          e && Bn && Da.alternate === null && t(B, Bn), fa = s(Da, fa, Yr), Bt === null ? Xn = Da : Bt.sibling = Da, Bt = Da, Bn = fi;
        }
        if (_a.done) {
          if (a(B, Bn), Pr()) {
            var da = Yr;
            Zs(B, da);
          }
          return Xn;
        }
        if (Bn === null) {
          for (; !_a.done; Yr++, _a = Vt.next()) {
            var Hl = z(B, _a.value, pe);
            Hl !== null && (fa = s(Hl, fa, Yr), Bt === null ? Xn = Hl : Bt.sibling = Hl, Bt = Hl);
          }
          if (Pr()) {
            var id = Yr;
            Zs(B, id);
          }
          return Xn;
        }
        for (var vv = i(B, Bn); !_a.done; Yr++, _a = Vt.next()) {
          var Ko = Y(vv, B, Yr, _a.value, pe);
          Ko !== null && (e && Ko.alternate !== null && vv.delete(Ko.key === null ? Yr : Ko.key), fa = s(Ko, fa, Yr), Bt === null ? Xn = Ko : Bt.sibling = Ko, Bt = Ko);
        }
        if (e && vv.forEach(function(JD) {
          return t(B, JD);
        }), Pr()) {
          var ZD = Yr;
          Zs(B, ZD);
        }
        return Xn;
      }
      function Ke(B, J, $, pe) {
        if (J !== null && J.tag === G) {
          a(B, J.sibling);
          var Ae = l(J, $);
          return Ae.return = B, Ae;
        }
        a(B, J);
        var Le = V1($, B.mode, pe);
        return Le.return = B, Le;
      }
      function Ye(B, J, $, pe) {
        for (var Ae = $.key, Le = J; Le !== null; ) {
          if (Le.key === Ae) {
            var it = $.type;
            if (it === ya) {
              if (Le.tag === re) {
                a(B, Le.sibling);
                var dt = l(Le, $.props.children);
                return dt.return = B, dt._debugSource = $._source, dt._debugOwner = $._owner, dt;
              }
            } else if (Le.elementType === it || // Keep this check inline so it only runs on the false path:
            wx(Le, $) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof it == "object" && it !== null && it.$$typeof === Je && gC(it) === Le.type) {
              a(B, Le.sibling);
              var nn = l(Le, $.props);
              return nn.ref = Up(B, Le, $), nn.return = B, nn._debugSource = $._source, nn._debugOwner = $._owner, nn;
            }
            a(B, Le);
            break;
          } else
            t(B, Le);
          Le = Le.sibling;
        }
        if ($.type === ya) {
          var Vt = ts($.props.children, B.mode, pe, $.key);
          return Vt.return = B, Vt;
        } else {
          var Xn = H1($, B.mode, pe);
          return Xn.ref = Up(B, J, $), Xn.return = B, Xn;
        }
      }
      function Ut(B, J, $, pe) {
        for (var Ae = $.key, Le = J; Le !== null; ) {
          if (Le.key === Ae)
            if (Le.tag === H && Le.stateNode.containerInfo === $.containerInfo && Le.stateNode.implementation === $.implementation) {
              a(B, Le.sibling);
              var it = l(Le, $.children || []);
              return it.return = B, it;
            } else {
              a(B, Le);
              break;
            }
          else
            t(B, Le);
          Le = Le.sibling;
        }
        var dt = B1($, B.mode, pe);
        return dt.return = B, dt;
      }
      function Ot(B, J, $, pe) {
        var Ae = typeof $ == "object" && $ !== null && $.type === ya && $.key === null;
        if (Ae && ($ = $.props.children), typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case ti:
              return f(Ye(B, J, $, pe));
            case Lr:
              return f(Ut(B, J, $, pe));
            case Je:
              var Le = $._payload, it = $._init;
              return Ot(B, J, it(Le), pe);
          }
          if (Nt($))
            return Z(B, J, $, pe);
          if (Mr($))
            return ke(B, J, $, pe);
          fm(B, $);
        }
        return typeof $ == "string" && $ !== "" || typeof $ == "number" ? f(Ke(B, J, "" + $, pe)) : (typeof $ == "function" && dm(B), a(B, J));
      }
      return Ot;
    }
    var Vf = SC(!0), CC = SC(!1);
    function Db(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = fc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = fc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function kb(e, t) {
      for (var a = e.child; a !== null; )
        mD(a, t), a = a.sibling;
    }
    var qg = Vu(null), Qg;
    Qg = {};
    var pm = null, Bf = null, Gg = null, vm = !1;
    function hm() {
      pm = null, Bf = null, Gg = null, vm = !1;
    }
    function EC() {
      vm = !0;
    }
    function xC() {
      vm = !1;
    }
    function RC(e, t, a) {
      sa(qg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Qg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Qg;
    }
    function Xg(e, t) {
      var a = qg.current;
      ua(qg, t), e._currentValue = a;
    }
    function Kg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (El(i.childLanes, t) ? l !== null && !El(l.childLanes, t) && (l.childLanes = vt(l.childLanes, t)) : (i.childLanes = vt(i.childLanes, t), l !== null && (l.childLanes = vt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ob(e, t, a) {
      Lb(e, t, a);
    }
    function Lb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === O) {
                var v = xu(a), g = Al(sn, v);
                g.tag = ym;
                var x = i.updateQueue;
                if (x !== null) {
                  var w = x.shared, z = w.pending;
                  z === null ? g.next = g : (g.next = z.next, z.next = g), w.pending = g;
                }
              }
              i.lanes = vt(i.lanes, a);
              var M = i.alternate;
              M !== null && (M.lanes = vt(M.lanes, a)), Kg(i.return, a, e), s.lanes = vt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === de)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === at) {
          var Y = i.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = vt(Y.lanes, a);
          var Q = Y.alternate;
          Q !== null && (Q.lanes = vt(Q.lanes, a)), Kg(Y, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var Z = l.sibling;
            if (Z !== null) {
              Z.return = l.return, l = Z;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function $f(e, t) {
      pm = e, Bf = null, Gg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Kp(), a.firstContext = null);
      }
    }
    function ir(e) {
      vm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Gg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Bf === null) {
          if (pm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Bf = a, pm.dependencies = {
            lanes: ie,
            firstContext: a
          };
        } else
          Bf = Bf.next = a;
      }
      return t;
    }
    var rc = null;
    function Zg(e) {
      rc === null ? rc = [e] : rc.push(e);
    }
    function Mb() {
      if (rc !== null) {
        for (var e = 0; e < rc.length; e++) {
          var t = rc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        rc = null;
      }
    }
    function wC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, mm(e, i);
    }
    function Nb(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Ab(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Zg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, mm(e, i);
    }
    function Qa(e, t) {
      return mm(e, t);
    }
    var zb = mm;
    function mm(e, t) {
      e.lanes = vt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = vt(a.lanes, t)), a === null && (e.flags & (fn | Ua)) !== Qe && Cx(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = vt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = vt(a.childLanes, t) : (l.flags & (fn | Ua)) !== Qe && Cx(e), i = l, l = l.return;
      if (i.tag === U) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var TC = 0, bC = 1, ym = 2, Jg = 3, gm = !1, e0, Sm;
    e0 = !1, Sm = null;
    function t0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ie
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function _C(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Al(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: TC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Yu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Sm === l && !e0 && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), e0 = !0), N2()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, zb(e, a);
      } else
        return Ab(e, l, t, a);
    }
    function Cm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Kd(a)) {
          var s = l.lanes;
          s = of(s, e.pendingLanes);
          var f = vt(s, a);
          l.lanes = f, Zd(e, f);
        }
      }
    }
    function n0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, v = a.firstBaseUpdate;
          if (v !== null) {
            var g = v;
            do {
              var x = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              f === null ? s = f = x : (f.next = x, f = x), g = g.next;
            } while (g !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var w = a.lastBaseUpdate;
      w === null ? a.firstBaseUpdate = t : w.next = t, a.lastBaseUpdate = t;
    }
    function Ub(e, t, a, i, l, s) {
      switch (a.tag) {
        case bC: {
          var f = a.payload;
          if (typeof f == "function") {
            EC();
            var v = f.call(s, i, l);
            {
              if (e.mode & bt) {
                Hn(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  Hn(!1);
                }
              }
              xC();
            }
            return v;
          }
          return f;
        }
        case Jg:
          e.flags = e.flags & ~tr | ut;
        case TC: {
          var g = a.payload, x;
          if (typeof g == "function") {
            EC(), x = g.call(s, i, l);
            {
              if (e.mode & bt) {
                Hn(!0);
                try {
                  g.call(s, i, l);
                } finally {
                  Hn(!1);
                }
              }
              xC();
            }
          } else
            x = g;
          return x == null ? i : xt({}, i, x);
        }
        case ym:
          return gm = !0, i;
      }
      return i;
    }
    function Em(e, t, a, i) {
      var l = e.updateQueue;
      gm = !1, Sm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, v = l.shared.pending;
      if (v !== null) {
        l.shared.pending = null;
        var g = v, x = g.next;
        g.next = null, f === null ? s = x : f.next = x, f = g;
        var w = e.alternate;
        if (w !== null) {
          var z = w.updateQueue, M = z.lastBaseUpdate;
          M !== f && (M === null ? z.firstBaseUpdate = x : M.next = x, z.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var Y = l.baseState, Q = ie, Z = null, ke = null, Ke = null, Ye = s;
        do {
          var Ut = Ye.lane, Ot = Ye.eventTime;
          if (El(i, Ut)) {
            if (Ke !== null) {
              var J = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                tag: Ye.tag,
                payload: Ye.payload,
                callback: Ye.callback,
                next: null
              };
              Ke = Ke.next = J;
            }
            Y = Ub(e, l, Ye, Y, t, a);
            var $ = Ye.callback;
            if ($ !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ye.lane !== Vn) {
              e.flags |= xi;
              var pe = l.effects;
              pe === null ? l.effects = [Ye] : pe.push(Ye);
            }
          } else {
            var B = {
              eventTime: Ot,
              lane: Ut,
              tag: Ye.tag,
              payload: Ye.payload,
              callback: Ye.callback,
              next: null
            };
            Ke === null ? (ke = Ke = B, Z = Y) : Ke = Ke.next = B, Q = vt(Q, Ut);
          }
          if (Ye = Ye.next, Ye === null) {
            if (v = l.shared.pending, v === null)
              break;
            var Ae = v, Le = Ae.next;
            Ae.next = null, Ye = Le, l.lastBaseUpdate = Ae, l.shared.pending = null;
          }
        } while (!0);
        Ke === null && (Z = Y), l.baseState = Z, l.firstBaseUpdate = ke, l.lastBaseUpdate = Ke;
        var it = l.shared.interleaved;
        if (it !== null) {
          var dt = it;
          do
            Q = vt(Q, dt.lane), dt = dt.next;
          while (dt !== it);
        } else s === null && (l.shared.lanes = ie);
        sv(Q), e.lanes = Q, e.memoizedState = Y;
      }
      Sm = null;
    }
    function jb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function DC() {
      gm = !1;
    }
    function xm() {
      return gm;
    }
    function kC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, jb(f, a));
        }
    }
    var jp = {}, Wu = Vu(jp), Pp = Vu(jp), Rm = Vu(jp);
    function wm(e) {
      if (e === jp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function OC() {
      var e = wm(Rm.current);
      return e;
    }
    function r0(e, t) {
      sa(Rm, t, e), sa(Pp, e, e), sa(Wu, jp, e);
      var a = eT(t);
      ua(Wu, e), sa(Wu, a, e);
    }
    function If(e) {
      ua(Wu, e), ua(Pp, e), ua(Rm, e);
    }
    function a0() {
      var e = wm(Wu.current);
      return e;
    }
    function LC(e) {
      wm(Rm.current);
      var t = wm(Wu.current), a = tT(t, e.type);
      t !== a && (sa(Pp, e, e), sa(Wu, a, e));
    }
    function i0(e) {
      Pp.current === e && (ua(Wu, e), ua(Pp, e));
    }
    var Pb = 0, MC = 1, NC = 1, Fp = 2, ro = Vu(Pb);
    function o0(e, t) {
      return (e & t) !== 0;
    }
    function Yf(e) {
      return e & MC;
    }
    function l0(e, t) {
      return e & MC | t;
    }
    function Fb(e, t) {
      return e | t;
    }
    function qu(e, t) {
      sa(ro, t, e);
    }
    function Wf(e) {
      ua(ro, e);
    }
    function Hb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Tm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ue) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || XS(i) || Tg(i))
              return t;
          }
        } else if (t.tag === lt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & ut) !== Qe;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ga = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Io = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), u0 = [];
    function s0() {
      for (var e = 0; e < u0.length; e++) {
        var t = u0[e];
        t._workInProgressVersionPrimary = null;
      }
      u0.length = 0;
    }
    function Vb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ne = m.ReactCurrentDispatcher, Hp = m.ReactCurrentBatchConfig, c0, qf;
    c0 = /* @__PURE__ */ new Set();
    var ac = ie, tn = null, pr = null, vr = null, bm = !1, Vp = !1, Bp = 0, Bb = 0, $b = 25, ne = null, Li = null, Qu = -1, f0 = !1;
    function Xt() {
      {
        var e = ne;
        Li === null ? Li = [e] : Li.push(e);
      }
    }
    function Te() {
      {
        var e = ne;
        Li !== null && (Qu++, Li[Qu] !== e && Ib(e));
      }
    }
    function Qf(e) {
      e != null && !Nt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function Ib(e) {
      {
        var t = ct(tn);
        if (!c0.has(t) && (c0.add(t), Li !== null)) {
          for (var a = "", i = 30, l = 0; l <= Qu; l++) {
            for (var s = Li[l], f = l === Qu ? e : s, v = l + 1 + ". " + s; v.length < i; )
              v += " ";
            v += f + `
`, a += v;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ca() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function d0(e, t) {
      if (f0)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Pe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Gf(e, t, a, i, l, s) {
      ac = s, tn = t, Li = e !== null ? e._debugHookTypes : null, Qu = -1, f0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ie, e !== null && e.memoizedState !== null ? Ne.current = tE : Li !== null ? Ne.current = eE : Ne.current = JC;
      var f = a(i, l);
      if (Vp) {
        var v = 0;
        do {
          if (Vp = !1, Bp = 0, v >= $b)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, f0 = !1, pr = null, vr = null, t.updateQueue = null, Qu = -1, Ne.current = nE, f = a(i, l);
        } while (Vp);
      }
      Ne.current = Fm, t._debugHookTypes = Li;
      var g = pr !== null && pr.next !== null;
      if (ac = ie, tn = null, pr = null, vr = null, ne = null, Li = null, Qu = -1, e !== null && (e.flags & ur) !== (t.flags & ur) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ie) !== Ve && y("Internal React error: Expected static flag was missing. Please notify the React team."), bm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Xf() {
      var e = Bp !== 0;
      return Bp = 0, e;
    }
    function AC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & xa) !== Ve ? t.flags &= ~(dl | ea | hn | St) : t.flags &= ~(hn | St), e.lanes = zs(e.lanes, a);
    }
    function zC() {
      if (Ne.current = Fm, bm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        bm = !1;
      }
      ac = ie, tn = null, pr = null, vr = null, Li = null, Qu = -1, ne = null, QC = !1, Vp = !1, Bp = 0;
    }
    function Yo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? tn.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function Mi() {
      var e;
      if (pr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = tn.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? tn.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function UC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function p0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function v0(e, t, a) {
      var i = Yo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = Qb.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function h0(e, t, a) {
      var i = Mi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, v = l.pending;
      if (v !== null) {
        if (f !== null) {
          var g = f.next, x = v.next;
          f.next = x, v.next = g;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = v, l.pending = null;
      }
      if (f !== null) {
        var w = f.next, z = s.baseState, M = null, Y = null, Q = null, Z = w;
        do {
          var ke = Z.lane;
          if (El(ac, ke)) {
            if (Q !== null) {
              var Ye = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              Q = Q.next = Ye;
            }
            if (Z.hasEagerState)
              z = Z.eagerState;
            else {
              var Ut = Z.action;
              z = e(z, Ut);
            }
          } else {
            var Ke = {
              lane: ke,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            Q === null ? (Y = Q = Ke, M = z) : Q = Q.next = Ke, tn.lanes = vt(tn.lanes, ke), sv(ke);
          }
          Z = Z.next;
        } while (Z !== null && Z !== w);
        Q === null ? M = z : Q.next = Y, Pe(z, i.memoizedState) || Kp(), i.memoizedState = z, i.baseState = M, i.baseQueue = Q, l.lastRenderedState = z;
      }
      var Ot = l.interleaved;
      if (Ot !== null) {
        var B = Ot;
        do {
          var J = B.lane;
          tn.lanes = vt(tn.lanes, J), sv(J), B = B.next;
        } while (B !== Ot);
      } else f === null && (l.lanes = ie);
      var $ = l.dispatch;
      return [i.memoizedState, $];
    }
    function m0(e, t, a) {
      var i = Mi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, v = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var g = f.next, x = g;
        do {
          var w = x.action;
          v = e(v, w), x = x.next;
        } while (x !== g);
        Pe(v, i.memoizedState) || Kp(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), l.lastRenderedState = v;
      }
      return [v, s];
    }
    function b3(e, t, a) {
    }
    function _3(e, t, a) {
    }
    function y0(e, t, a) {
      var i = tn, l = Yo(), s, f = Pr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), qf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), qf = !0);
      } else {
        if (s = t(), !qf) {
          var v = t();
          Pe(s, v) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), qf = !0);
        }
        var g = ay();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        As(g, ac) || jC(i, t, s);
      }
      l.memoizedState = s;
      var x = {
        value: s,
        getSnapshot: t
      };
      return l.queue = x, Lm(FC.bind(null, i, x, e), [e]), i.flags |= hn, $p(fr | Fr, PC.bind(null, i, x, s, t), void 0, null), s;
    }
    function _m(e, t, a) {
      var i = tn, l = Mi(), s = t();
      if (!qf) {
        var f = t();
        Pe(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), qf = !0);
      }
      var v = l.memoizedState, g = !Pe(v, s);
      g && (l.memoizedState = s, Kp());
      var x = l.queue;
      if (Yp(FC.bind(null, i, x, e), [e]), x.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= hn, $p(fr | Fr, PC.bind(null, i, x, s, t), void 0, null);
        var w = ay();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        As(w, ac) || jC(i, t, s);
      }
      return s;
    }
    function jC(e, t, a) {
      e.flags |= ws;
      var i = {
        getSnapshot: t,
        value: a
      }, l = tn.updateQueue;
      if (l === null)
        l = UC(), tn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function PC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, HC(t) && VC(e);
    }
    function FC(e, t, a) {
      var i = function() {
        HC(t) && VC(e);
      };
      return a(i);
    }
    function HC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Pe(a, i);
      } catch {
        return !0;
      }
    }
    function VC(e) {
      var t = Qa(e, qe);
      t !== null && gr(t, e, qe, sn);
    }
    function Dm(e) {
      var t = Yo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: p0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Gb.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function g0(e) {
      return h0(p0);
    }
    function S0(e) {
      return m0(p0);
    }
    function $p(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = tn.updateQueue;
      if (s === null)
        s = UC(), tn.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var v = f.next;
          f.next = l, l.next = v, s.lastEffect = l;
        }
      }
      return l;
    }
    function C0(e) {
      var t = Yo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function km(e) {
      var t = Mi();
      return t.memoizedState;
    }
    function Ip(e, t, a, i) {
      var l = Yo(), s = i === void 0 ? null : i;
      tn.flags |= e, l.memoizedState = $p(fr | t, a, void 0, s);
    }
    function Om(e, t, a, i) {
      var l = Mi(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var v = pr.memoizedState;
        if (f = v.destroy, s !== null) {
          var g = v.deps;
          if (d0(s, g)) {
            l.memoizedState = $p(t, a, f, s);
            return;
          }
        }
      }
      tn.flags |= e, l.memoizedState = $p(fr | t, a, f, s);
    }
    function Lm(e, t) {
      return (tn.mode & xa) !== Ve ? Ip(dl | hn | Mo, Fr, e, t) : Ip(hn | Mo, Fr, e, t);
    }
    function Yp(e, t) {
      return Om(hn, Fr, e, t);
    }
    function E0(e, t) {
      return Ip(St, Io, e, t);
    }
    function Mm(e, t) {
      return Om(St, Io, e, t);
    }
    function x0(e, t) {
      var a = St;
      return a |= Jr, (tn.mode & xa) !== Ve && (a |= ea), Ip(a, dr, e, t);
    }
    function Nm(e, t) {
      return Om(St, dr, e, t);
    }
    function BC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function R0(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = St;
      return l |= Jr, (tn.mode & xa) !== Ve && (l |= ea), Ip(l, dr, BC.bind(null, t, e), i);
    }
    function Am(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Om(St, dr, BC.bind(null, t, e), i);
    }
    function Yb(e, t) {
    }
    var zm = Yb;
    function w0(e, t) {
      var a = Yo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Um(e, t) {
      var a = Mi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (d0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function T0(e, t) {
      var a = Yo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function jm(e, t) {
      var a = Mi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (d0(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function b0(e) {
      var t = Yo();
      return t.memoizedState = e, e;
    }
    function $C(e) {
      var t = Mi(), a = pr, i = a.memoizedState;
      return YC(t, i, e);
    }
    function IC(e) {
      var t = Mi();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return YC(t, a, e);
    }
    function YC(e, t, a) {
      var i = !ph(ac);
      if (i) {
        if (!Pe(a, t)) {
          var l = mh();
          tn.lanes = vt(tn.lanes, l), sv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Kp()), e.memoizedState = a, a;
    }
    function Wb(e, t, a) {
      var i = Ba();
      Dn(Wy(i, Xi)), e(!0);
      var l = Hp.transition;
      Hp.transition = {};
      var s = Hp.transition;
      Hp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Dn(i), Hp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function _0() {
      var e = Dm(!1), t = e[0], a = e[1], i = Wb.bind(null, a), l = Yo();
      return l.memoizedState = i, [t, i];
    }
    function WC() {
      var e = g0(), t = e[0], a = Mi(), i = a.memoizedState;
      return [t, i];
    }
    function qC() {
      var e = S0(), t = e[0], a = Mi(), i = a.memoizedState;
      return [t, i];
    }
    var QC = !1;
    function qb() {
      return QC;
    }
    function D0() {
      var e = Yo(), t = ay(), a = t.identifierPrefix, i;
      if (Pr()) {
        var l = cb();
        i = ":" + a + "R" + l;
        var s = Bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Bb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Pm() {
      var e = Mi(), t = e.memoizedState;
      return t;
    }
    function Qb(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ju(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        XC(t, l);
      else {
        var s = wC(e, t, l, i);
        if (s !== null) {
          var f = ba();
          gr(s, e, i, f), KC(s, t, i);
        }
      }
      ZC(e, i);
    }
    function Gb(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ju(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        XC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === ie && (s === null || s.lanes === ie)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var v;
            v = Ne.current, Ne.current = ao;
            try {
              var g = t.lastRenderedState, x = f(g, a);
              if (l.hasEagerState = !0, l.eagerState = x, Pe(x, g)) {
                Nb(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Ne.current = v;
            }
          }
        }
        var w = wC(e, t, l, i);
        if (w !== null) {
          var z = ba();
          gr(w, e, i, z), KC(w, t, i);
        }
      }
      ZC(e, i);
    }
    function GC(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function XC(e, t) {
      Vp = bm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function KC(e, t, a) {
      if (Kd(a)) {
        var i = t.lanes;
        i = of(i, e.pendingLanes);
        var l = vt(i, a);
        t.lanes = l, Zd(e, l);
      }
    }
    function ZC(e, t, a) {
      Ds(e, t);
    }
    var Fm = {
      readContext: ir,
      useCallback: ca,
      useContext: ca,
      useEffect: ca,
      useImperativeHandle: ca,
      useInsertionEffect: ca,
      useLayoutEffect: ca,
      useMemo: ca,
      useReducer: ca,
      useRef: ca,
      useState: ca,
      useDebugValue: ca,
      useDeferredValue: ca,
      useTransition: ca,
      useMutableSource: ca,
      useSyncExternalStore: ca,
      useId: ca,
      unstable_isNewReconciler: ee
    }, JC = null, eE = null, tE = null, nE = null, Wo = null, ao = null, Hm = null;
    {
      var k0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ft = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      JC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Xt(), Qf(t), w0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Xt(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Xt(), Qf(t), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Xt(), Qf(a), R0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Xt(), Qf(t), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Xt(), Qf(t), x0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Xt(), Qf(t);
          var a = Ne.current;
          Ne.current = Wo;
          try {
            return T0(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Xt();
          var i = Ne.current;
          Ne.current = Wo;
          try {
            return v0(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Xt(), C0(e);
        },
        useState: function(e) {
          ne = "useState", Xt();
          var t = Ne.current;
          Ne.current = Wo;
          try {
            return Dm(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Xt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Xt(), b0(e);
        },
        useTransition: function() {
          return ne = "useTransition", Xt(), _0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Xt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Xt(), y0(e, t, a);
        },
        useId: function() {
          return ne = "useId", Xt(), D0();
        },
        unstable_isNewReconciler: ee
      }, eE = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Te(), w0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Te(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Te(), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Te(), R0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Te(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Te(), x0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Te();
          var a = Ne.current;
          Ne.current = Wo;
          try {
            return T0(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Te();
          var i = Ne.current;
          Ne.current = Wo;
          try {
            return v0(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Te(), C0(e);
        },
        useState: function(e) {
          ne = "useState", Te();
          var t = Ne.current;
          Ne.current = Wo;
          try {
            return Dm(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Te(), b0(e);
        },
        useTransition: function() {
          return ne = "useTransition", Te(), _0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Te(), y0(e, t, a);
        },
        useId: function() {
          return ne = "useId", Te(), D0();
        },
        unstable_isNewReconciler: ee
      }, tE = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Te(), Um(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Te(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Te(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Te(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Te(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Te(), Nm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Te();
          var a = Ne.current;
          Ne.current = ao;
          try {
            return jm(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Te();
          var i = Ne.current;
          Ne.current = ao;
          try {
            return h0(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Te(), km();
        },
        useState: function(e) {
          ne = "useState", Te();
          var t = Ne.current;
          Ne.current = ao;
          try {
            return g0(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Te(), zm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Te(), $C(e);
        },
        useTransition: function() {
          return ne = "useTransition", Te(), WC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Te(), _m(e, t);
        },
        useId: function() {
          return ne = "useId", Te(), Pm();
        },
        unstable_isNewReconciler: ee
      }, nE = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Te(), Um(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Te(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Te(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Te(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Te(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Te(), Nm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Te();
          var a = Ne.current;
          Ne.current = Hm;
          try {
            return jm(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Te();
          var i = Ne.current;
          Ne.current = Hm;
          try {
            return m0(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Te(), km();
        },
        useState: function(e) {
          ne = "useState", Te();
          var t = Ne.current;
          Ne.current = Hm;
          try {
            return S0(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Te(), zm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Te(), IC(e);
        },
        useTransition: function() {
          return ne = "useTransition", Te(), qC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Te(), _m(e, t);
        },
        useId: function() {
          return ne = "useId", Te(), Pm();
        },
        unstable_isNewReconciler: ee
      }, Wo = {
        readContext: function(e) {
          return k0(), ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ft(), Xt(), w0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ft(), Xt(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ft(), Xt(), Lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ft(), Xt(), R0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ft(), Xt(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ft(), Xt(), x0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ft(), Xt();
          var a = Ne.current;
          Ne.current = Wo;
          try {
            return T0(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ft(), Xt();
          var i = Ne.current;
          Ne.current = Wo;
          try {
            return v0(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ft(), Xt(), C0(e);
        },
        useState: function(e) {
          ne = "useState", ft(), Xt();
          var t = Ne.current;
          Ne.current = Wo;
          try {
            return Dm(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ft(), Xt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ft(), Xt(), b0(e);
        },
        useTransition: function() {
          return ne = "useTransition", ft(), Xt(), _0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ft(), Xt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ft(), Xt(), y0(e, t, a);
        },
        useId: function() {
          return ne = "useId", ft(), Xt(), D0();
        },
        unstable_isNewReconciler: ee
      }, ao = {
        readContext: function(e) {
          return k0(), ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ft(), Te(), Um(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ft(), Te(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ft(), Te(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ft(), Te(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ft(), Te(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ft(), Te(), Nm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ft(), Te();
          var a = Ne.current;
          Ne.current = ao;
          try {
            return jm(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ft(), Te();
          var i = Ne.current;
          Ne.current = ao;
          try {
            return h0(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ft(), Te(), km();
        },
        useState: function(e) {
          ne = "useState", ft(), Te();
          var t = Ne.current;
          Ne.current = ao;
          try {
            return g0(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ft(), Te(), zm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ft(), Te(), $C(e);
        },
        useTransition: function() {
          return ne = "useTransition", ft(), Te(), WC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ft(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ft(), Te(), _m(e, t);
        },
        useId: function() {
          return ne = "useId", ft(), Te(), Pm();
        },
        unstable_isNewReconciler: ee
      }, Hm = {
        readContext: function(e) {
          return k0(), ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ft(), Te(), Um(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ft(), Te(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ft(), Te(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ft(), Te(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ft(), Te(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ft(), Te(), Nm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ft(), Te();
          var a = Ne.current;
          Ne.current = ao;
          try {
            return jm(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ft(), Te();
          var i = Ne.current;
          Ne.current = ao;
          try {
            return m0(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ft(), Te(), km();
        },
        useState: function(e) {
          ne = "useState", ft(), Te();
          var t = Ne.current;
          Ne.current = ao;
          try {
            return S0(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ft(), Te(), zm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ft(), Te(), IC(e);
        },
        useTransition: function() {
          return ne = "useTransition", ft(), Te(), qC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ft(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ft(), Te(), _m(e, t);
        },
        useId: function() {
          return ne = "useId", ft(), Te(), Pm();
        },
        unstable_isNewReconciler: ee
      };
    }
    var Gu = h.unstable_now, rE = 0, Vm = -1, Wp = -1, Bm = -1, O0 = !1, $m = !1;
    function aE() {
      return O0;
    }
    function Xb() {
      $m = !0;
    }
    function Kb() {
      O0 = !1, $m = !1;
    }
    function Zb() {
      O0 = $m, $m = !1;
    }
    function iE() {
      return rE;
    }
    function oE() {
      rE = Gu();
    }
    function L0(e) {
      Wp = Gu(), e.actualStartTime < 0 && (e.actualStartTime = Gu());
    }
    function lE(e) {
      Wp = -1;
    }
    function Im(e, t) {
      if (Wp >= 0) {
        var a = Gu() - Wp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Wp = -1;
      }
    }
    function qo(e) {
      if (Vm >= 0) {
        var t = Gu() - Vm;
        Vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ee:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function M0(e) {
      if (Bm >= 0) {
        var t = Gu() - Bm;
        Bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ee:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Qo() {
      Vm = Gu();
    }
    function N0() {
      Bm = Gu();
    }
    function A0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function io(e, t) {
      if (e && e.defaultProps) {
        var a = xt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var z0 = {}, U0, j0, P0, F0, H0, uE, Ym, V0, B0, $0, qp;
    {
      U0 = /* @__PURE__ */ new Set(), j0 = /* @__PURE__ */ new Set(), P0 = /* @__PURE__ */ new Set(), F0 = /* @__PURE__ */ new Set(), V0 = /* @__PURE__ */ new Set(), H0 = /* @__PURE__ */ new Set(), B0 = /* @__PURE__ */ new Set(), $0 = /* @__PURE__ */ new Set(), qp = /* @__PURE__ */ new Set();
      var sE = /* @__PURE__ */ new Set();
      Ym = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          sE.has(a) || (sE.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, uE = function(e, t) {
        if (t === void 0) {
          var a = Mt(e) || "Component";
          H0.has(a) || (H0.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(z0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(z0);
    }
    function I0(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & bt) {
          Hn(!0);
          try {
            s = a(i, l);
          } finally {
            Hn(!1);
          }
        }
        uE(t, s);
      }
      var f = s == null ? l : xt({}, l, s);
      if (e.memoizedState = f, e.lanes === ie) {
        var v = e.updateQueue;
        v.baseState = f;
      }
    }
    var Y0 = {
      isMounted: Ca,
      enqueueSetState: function(e, t, a) {
        var i = Aa(e), l = ba(), s = Ju(i), f = Al(l, s);
        f.payload = t, a != null && (Ym(a, "setState"), f.callback = a);
        var v = Yu(i, f, s);
        v !== null && (gr(v, i, s, l), Cm(v, i, s)), Ds(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Aa(e), l = ba(), s = Ju(i), f = Al(l, s);
        f.tag = bC, f.payload = t, a != null && (Ym(a, "replaceState"), f.callback = a);
        var v = Yu(i, f, s);
        v !== null && (gr(v, i, s, l), Cm(v, i, s)), Ds(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Aa(e), i = ba(), l = Ju(a), s = Al(i, l);
        s.tag = ym, t != null && (Ym(t, "forceUpdate"), s.callback = t);
        var f = Yu(a, s, l);
        f !== null && (gr(f, a, l, i), Cm(f, a, l)), Bc(a, l);
      }
    };
    function cE(e, t, a, i, l, s, f) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var g = v.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & bt) {
            Hn(!0);
            try {
              g = v.shouldComponentUpdate(i, s, f);
            } finally {
              Hn(!1);
            }
          }
          g === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Mt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !rt(a, i) || !rt(l, s) : !0;
    }
    function Jb(e, t, a) {
      var i = e.stateNode;
      {
        var l = Mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & bt) === Ve && (qp.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & bt) === Ve && (qp.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !B0.has(t) && (B0.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !P0.has(t) && (P0.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Mt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var v = i.state;
        v && (typeof v != "object" || Nt(v)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function fE(e, t) {
      t.updater = Y0, e.stateNode = t, uu(t, e), t._reactInternalInstance = z0;
    }
    function dE(e, t, a) {
      var i = !1, l = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === se && f._context === void 0
        );
        if (!v && !$0.has(t)) {
          $0.add(t);
          var g = "";
          f === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? g = " However, it is set to a " + typeof f + "." : f.$$typeof === D ? g = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Mt(t) || "Component", g);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ir(f);
      else {
        l = Uf(e, t, !0);
        var x = t.contextTypes;
        i = x != null, s = i ? jf(e, l) : si;
      }
      var w = new t(a, s);
      if (e.mode & bt) {
        Hn(!0);
        try {
          w = new t(a, s);
        } finally {
          Hn(!1);
        }
      }
      var z = e.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null;
      fE(e, w);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var M = Mt(t) || "Component";
          j0.has(M) || (j0.add(M), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, w.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function") {
          var Y = null, Q = null, Z = null;
          if (typeof w.componentWillMount == "function" && w.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof w.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof w.componentWillReceiveProps == "function" && w.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof w.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof w.componentWillUpdate == "function" && w.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof w.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), Y !== null || Q !== null || Z !== null) {
            var ke = Mt(t) || "Component", Ke = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            F0.has(ke) || (F0.add(ke), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ke, Ke, Y !== null ? `
  ` + Y : "", Q !== null ? `
  ` + Q : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return i && tC(e, l, s), w;
    }
    function e_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ct(e) || "Component"), Y0.enqueueReplaceState(t, t.state, null));
    }
    function pE(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = ct(e) || "Component";
          U0.has(s) || (U0.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Y0.enqueueReplaceState(t, t.state, null);
      }
    }
    function W0(e, t, a, i) {
      Jb(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, t0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = ir(s);
      else {
        var f = Uf(e, t, !0);
        l.context = jf(e, f);
      }
      {
        if (l.state === a) {
          var v = Mt(t) || "Component";
          V0.has(v) || (V0.add(v), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & bt && no.recordLegacyContextWarning(e, l), no.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (I0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (e_(e, l), Em(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var x = St;
        x |= Jr, (e.mode & xa) !== Ve && (x |= ea), e.flags |= x;
      }
    }
    function t_(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, v = t.contextType, g = si;
      if (typeof v == "object" && v !== null)
        g = ir(v);
      else {
        var x = Uf(e, t, !0);
        g = jf(e, x);
      }
      var w = t.getDerivedStateFromProps, z = typeof w == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !z && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== g) && pE(e, l, a, g), DC();
      var M = e.memoizedState, Y = l.state = M;
      if (Em(e, a, l, i), Y = e.memoizedState, s === a && M === Y && !nm() && !xm()) {
        if (typeof l.componentDidMount == "function") {
          var Q = St;
          Q |= Jr, (e.mode & xa) !== Ve && (Q |= ea), e.flags |= Q;
        }
        return !1;
      }
      typeof w == "function" && (I0(e, t, w, a), Y = e.memoizedState);
      var Z = xm() || cE(e, t, s, a, M, Y, g);
      if (Z) {
        if (!z && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var ke = St;
          ke |= Jr, (e.mode & xa) !== Ve && (ke |= ea), e.flags |= ke;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Ke = St;
          Ke |= Jr, (e.mode & xa) !== Ve && (Ke |= ea), e.flags |= Ke;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return l.props = a, l.state = Y, l.context = g, Z;
    }
    function n_(e, t, a, i, l) {
      var s = t.stateNode;
      _C(e, t);
      var f = t.memoizedProps, v = t.type === t.elementType ? f : io(t.type, f);
      s.props = v;
      var g = t.pendingProps, x = s.context, w = a.contextType, z = si;
      if (typeof w == "object" && w !== null)
        z = ir(w);
      else {
        var M = Uf(t, a, !0);
        z = jf(t, M);
      }
      var Y = a.getDerivedStateFromProps, Q = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Q && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== g || x !== z) && pE(t, s, i, z), DC();
      var Z = t.memoizedState, ke = s.state = Z;
      if (Em(t, i, s, l), ke = t.memoizedState, f === g && Z === ke && !nm() && !xm() && !De)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= za), !1;
      typeof Y == "function" && (I0(t, a, Y, i), ke = t.memoizedState);
      var Ke = xm() || cE(t, a, v, i, Z, ke, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      De;
      return Ke ? (!Q && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ke, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ke, z)), typeof s.componentDidUpdate == "function" && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = ke), s.props = i, s.state = ke, s.context = z, Ke;
    }
    function ic(e, t) {
      return {
        value: e,
        source: t,
        stack: Gl(t),
        digest: null
      };
    }
    function q0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function r_(e, t) {
      return !0;
    }
    function Q0(e, t) {
      try {
        var a = r_(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === O)
            return;
          console.error(i);
        }
        var v = l ? ct(l) : null, g = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === U)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var w = ct(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + w + ".");
        }
        var z = g + `
` + f + `

` + ("" + x);
        console.error(z);
      } catch (M) {
        setTimeout(function() {
          throw M;
        });
      }
    }
    var a_ = typeof WeakMap == "function" ? WeakMap : Map;
    function vE(e, t, a) {
      var i = Al(sn, a);
      i.tag = Jg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        X2(l), Q0(e, t);
      }, i;
    }
    function G0(e, t, a) {
      var i = Al(sn, a);
      i.tag = Jg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          Tx(e), Q0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        Tx(e), Q0(e, t), typeof l != "function" && Q2(this);
        var g = t.value, x = t.stack;
        this.componentDidCatch(g, {
          componentStack: x !== null ? x : ""
        }), typeof l != "function" && (oa(e.lanes, qe) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ct(e) || "Unknown"));
      }), i;
    }
    function hE(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new a_(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = K2.bind(null, e, t, a);
        Ea && cv(e, a), t.then(s, s);
      }
    }
    function i_(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function o_(e, t) {
      var a = e.tag;
      if ((e.mode & Ie) === Ve && (a === k || a === me || a === he)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function mE(e) {
      var t = e;
      do {
        if (t.tag === ue && Hb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function yE(e, t, a, i, l) {
      if ((e.mode & Ie) === Ve) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= ut, a.flags |= Ts, a.flags &= ~(Oc | ga), a.tag === O) {
            var s = a.alternate;
            if (s === null)
              a.tag = Rt;
            else {
              var f = Al(sn, qe);
              f.tag = ym, Yu(a, f, qe);
            }
          }
          a.lanes = vt(a.lanes, qe);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = l, e;
    }
    function l_(e, t, a, i, l) {
      if (a.flags |= ga, Ea && cv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        o_(a), Pr() && a.mode & Ie && uC();
        var f = mE(t);
        if (f !== null) {
          f.flags &= ~_n, yE(f, t, a, e, l), f.mode & Ie && hE(e, s, l), i_(f, e, s);
          return;
        } else {
          if (!Xd(l)) {
            hE(e, s, l), D1();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (Pr() && a.mode & Ie) {
        uC();
        var g = mE(t);
        if (g !== null) {
          (g.flags & tr) === Qe && (g.flags |= _n), yE(g, t, a, e, l), Vg(ic(i, a));
          return;
        }
      }
      i = ic(i, a), H2(i);
      var x = t;
      do {
        switch (x.tag) {
          case U: {
            var w = i;
            x.flags |= tr;
            var z = xu(l);
            x.lanes = vt(x.lanes, z);
            var M = vE(x, w, z);
            n0(x, M);
            return;
          }
          case O:
            var Y = i, Q = x.type, Z = x.stateNode;
            if ((x.flags & ut) === Qe && (typeof Q.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !mx(Z))) {
              x.flags |= tr;
              var ke = xu(l);
              x.lanes = vt(x.lanes, ke);
              var Ke = G0(x, Y, ke);
              n0(x, Ke);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function u_() {
      return null;
    }
    var Qp = m.ReactCurrentOwner, oo = !1, X0, Gp, K0, Z0, J0, oc, e1, Wm, Xp;
    X0 = {}, Gp = {}, K0 = {}, Z0 = {}, J0 = {}, oc = !1, e1 = {}, Wm = {}, Xp = {};
    function wa(e, t, a, i) {
      e === null ? t.child = CC(t, null, a, i) : t.child = Vf(t, e.child, a, i);
    }
    function s_(e, t, a, i) {
      t.child = Vf(t, e.child, null, i), t.child = Vf(t, null, a, i);
    }
    function gE(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && eo(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f = a.render, v = t.ref, g, x;
      $f(t, l), du(t);
      {
        if (Qp.current = t, Xr(!0), g = Gf(e, t, f, i, v, l), x = Xf(), t.mode & bt) {
          Hn(!0);
          try {
            g = Gf(e, t, f, i, v, l), x = Xf();
          } finally {
            Hn(!1);
          }
        }
        Xr(!1);
      }
      return ra(), e !== null && !oo ? (AC(e, t, l), zl(e, t, l)) : (Pr() && x && zg(t), t.flags |= Oo, wa(e, t, g, l), t.child);
    }
    function SE(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (vD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = ad(s), t.tag = he, t.type = f, r1(t, s), CE(e, t, f, i, l);
        }
        {
          var v = s.propTypes;
          if (v && eo(
            v,
            i,
            // Resolved props
            "prop",
            Mt(s)
          ), a.defaultProps !== void 0) {
            var g = Mt(s) || "Unknown";
            Xp[g] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), Xp[g] = !0);
          }
        }
        var x = F1(a.type, null, i, t, t.mode, l);
        return x.ref = t.ref, x.return = t, t.child = x, x;
      }
      {
        var w = a.type, z = w.propTypes;
        z && eo(
          z,
          i,
          // Resolved props
          "prop",
          Mt(w)
        );
      }
      var M = e.child, Y = s1(e, l);
      if (!Y) {
        var Q = M.memoizedProps, Z = a.compare;
        if (Z = Z !== null ? Z : rt, Z(Q, i) && e.ref === t.ref)
          return zl(e, t, l);
      }
      t.flags |= Oo;
      var ke = fc(M, i);
      return ke.ref = t.ref, ke.return = t, t.child = ke, ke;
    }
    function CE(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Je) {
          var f = s, v = f._payload, g = f._init;
          try {
            s = g(v);
          } catch {
            s = null;
          }
          var x = s && s.propTypes;
          x && eo(
            x,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Mt(s)
          );
        }
      }
      if (e !== null) {
        var w = e.memoizedProps;
        if (rt(w, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (oo = !1, t.pendingProps = i = w, s1(e, l))
            (e.flags & Ts) !== Qe && (oo = !0);
          else return t.lanes = e.lanes, zl(e, t, l);
      }
      return t1(e, t, a, i, l);
    }
    function EE(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Ce)
        if ((t.mode & Ie) === Ve) {
          var f = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, iy(t, a);
        } else if (oa(a, br)) {
          var z = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var M = s !== null ? s.baseLanes : a;
          iy(t, M);
        } else {
          var v = null, g;
          if (s !== null) {
            var x = s.baseLanes;
            g = vt(x, a);
          } else
            g = a;
          t.lanes = t.childLanes = br;
          var w = {
            baseLanes: g,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = w, t.updateQueue = null, iy(t, g), null;
        }
      else {
        var Y;
        s !== null ? (Y = vt(s.baseLanes, a), t.memoizedState = null) : Y = a, iy(t, Y);
      }
      return wa(e, t, l, a), t.child;
    }
    function c_(e, t, a) {
      var i = t.pendingProps;
      return wa(e, t, i, a), t.child;
    }
    function f_(e, t, a) {
      var i = t.pendingProps.children;
      return wa(e, t, i, a), t.child;
    }
    function d_(e, t, a) {
      {
        t.flags |= St;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return wa(e, t, s, a), t.child;
    }
    function xE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Zr, t.flags |= jd);
    }
    function t1(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && eo(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f;
      {
        var v = Uf(t, a, !0);
        f = jf(t, v);
      }
      var g, x;
      $f(t, l), du(t);
      {
        if (Qp.current = t, Xr(!0), g = Gf(e, t, a, i, f, l), x = Xf(), t.mode & bt) {
          Hn(!0);
          try {
            g = Gf(e, t, a, i, f, l), x = Xf();
          } finally {
            Hn(!1);
          }
        }
        Xr(!1);
      }
      return ra(), e !== null && !oo ? (AC(e, t, l), zl(e, t, l)) : (Pr() && x && zg(t), t.flags |= Oo, wa(e, t, g, l), t.child);
    }
    function RE(e, t, a, i, l) {
      {
        switch (kD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, v = new f(t.memoizedProps, s.context), g = v.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= ut, t.flags |= tr;
            var x = new Error("Simulated error coming from DevTools"), w = xu(l);
            t.lanes = vt(t.lanes, w);
            var z = G0(t, ic(x, t), w);
            n0(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var M = a.propTypes;
          M && eo(
            M,
            i,
            // Resolved props
            "prop",
            Mt(a)
          );
        }
      }
      var Y;
      $o(a) ? (Y = !0, am(t)) : Y = !1, $f(t, l);
      var Q = t.stateNode, Z;
      Q === null ? (Qm(e, t), dE(t, a, i), W0(t, a, i, l), Z = !0) : e === null ? Z = t_(t, a, i, l) : Z = n_(e, t, a, i, l);
      var ke = n1(e, t, a, Z, Y, l);
      {
        var Ke = t.stateNode;
        Z && Ke.props !== i && (oc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ct(t) || "a component"), oc = !0);
      }
      return ke;
    }
    function n1(e, t, a, i, l, s) {
      xE(e, t);
      var f = (t.flags & ut) !== Qe;
      if (!i && !f)
        return l && aC(t, a, !1), zl(e, t, s);
      var v = t.stateNode;
      Qp.current = t;
      var g;
      if (f && typeof a.getDerivedStateFromError != "function")
        g = null, lE();
      else {
        du(t);
        {
          if (Xr(!0), g = v.render(), t.mode & bt) {
            Hn(!0);
            try {
              v.render();
            } finally {
              Hn(!1);
            }
          }
          Xr(!1);
        }
        ra();
      }
      return t.flags |= Oo, e !== null && f ? s_(e, t, g, s) : wa(e, t, g, s), t.memoizedState = v.state, l && aC(t, a, !0), t.child;
    }
    function wE(e) {
      var t = e.stateNode;
      t.pendingContext ? nC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nC(e, t.context, !1), r0(e, t.containerInfo);
    }
    function p_(e, t, a) {
      if (wE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      _C(e, t), Em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var v = f.element;
      if (l.isDehydrated) {
        var g = {
          element: v,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, x = t.updateQueue;
        if (x.baseState = g, t.memoizedState = g, t.flags & _n) {
          var w = ic(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return TE(e, t, v, a, w);
        } else if (v !== s) {
          var z = ic(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return TE(e, t, v, a, z);
        } else {
          mb(t);
          var M = CC(t, null, v, a);
          t.child = M;
          for (var Y = M; Y; )
            Y.flags = Y.flags & ~fn | Ua, Y = Y.sibling;
        }
      } else {
        if (Hf(), v === s)
          return zl(e, t, a);
        wa(e, t, v, a);
      }
      return t.child;
    }
    function TE(e, t, a, i, l) {
      return Hf(), Vg(l), t.flags |= _n, wa(e, t, a, i), t.child;
    }
    function v_(e, t, a) {
      LC(t), e === null && Hg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, v = Eg(i, l);
      return v ? f = null : s !== null && Eg(i, s) && (t.flags |= Gt), xE(e, t), wa(e, t, f, a), t.child;
    }
    function h_(e, t) {
      return e === null && Hg(t), null;
    }
    function m_(e, t, a, i) {
      Qm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, v = s._init, g = v(f);
      t.type = g;
      var x = t.tag = hD(g), w = io(g, l), z;
      switch (x) {
        case k:
          return r1(t, g), t.type = g = ad(g), z = t1(null, t, g, w, i), z;
        case O:
          return t.type = g = N1(g), z = RE(null, t, g, w, i), z;
        case me:
          return t.type = g = A1(g), z = gE(null, t, g, w, i), z;
        case _e: {
          if (t.type !== t.elementType) {
            var M = g.propTypes;
            M && eo(
              M,
              w,
              // Resolved for outer only
              "prop",
              Mt(g)
            );
          }
          return z = SE(
            null,
            t,
            g,
            io(g.type, w),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var Y = "";
      throw g !== null && typeof g == "object" && g.$$typeof === Je && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function y_(e, t, a, i, l) {
      Qm(e, t), t.tag = O;
      var s;
      return $o(a) ? (s = !0, am(t)) : s = !1, $f(t, l), dE(t, a, i), W0(t, a, i, l), n1(null, t, a, !0, s, l);
    }
    function g_(e, t, a, i) {
      Qm(e, t);
      var l = t.pendingProps, s;
      {
        var f = Uf(t, a, !1);
        s = jf(t, f);
      }
      $f(t, i);
      var v, g;
      du(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = Mt(a) || "Unknown";
          X0[x] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), X0[x] = !0);
        }
        t.mode & bt && no.recordLegacyContextWarning(t, null), Xr(!0), Qp.current = t, v = Gf(null, t, a, l, s, i), g = Xf(), Xr(!1);
      }
      if (ra(), t.flags |= Oo, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var w = Mt(a) || "Unknown";
        Gp[w] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), Gp[w] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var z = Mt(a) || "Unknown";
          Gp[z] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Gp[z] = !0);
        }
        t.tag = O, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return $o(a) ? (M = !0, am(t)) : M = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, t0(t), fE(t, v), W0(t, a, l, i), n1(null, t, a, !0, M, i);
      } else {
        if (t.tag = k, t.mode & bt) {
          Hn(!0);
          try {
            v = Gf(null, t, a, l, s, i), g = Xf();
          } finally {
            Hn(!1);
          }
        }
        return Pr() && g && zg(t), wa(null, t, v, i), r1(t, a), t.child;
      }
    }
    function r1(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = zr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), J0[l] || (J0[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Mt(t) || "Unknown";
          Xp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Xp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Mt(t) || "Unknown";
          Z0[v] || (y("%s: Function components do not support getDerivedStateFromProps.", v), Z0[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = Mt(t) || "Unknown";
          K0[g] || (y("%s: Function components do not support contextType.", g), K0[g] = !0);
        }
      }
    }
    var a1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vn
    };
    function i1(e) {
      return {
        baseLanes: e,
        cachePool: u_(),
        transitions: null
      };
    }
    function S_(e, t) {
      var a = null;
      return {
        baseLanes: vt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function C_(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return o0(e, Fp);
    }
    function E_(e, t) {
      return zs(e.childLanes, t);
    }
    function bE(e, t, a) {
      var i = t.pendingProps;
      OD(t) && (t.flags |= ut);
      var l = ro.current, s = !1, f = (t.flags & ut) !== Qe;
      if (f || C_(l, e) ? (s = !0, t.flags &= ~ut) : (e === null || e.memoizedState !== null) && (l = Fb(l, NC)), l = Yf(l), qu(t, l), e === null) {
        Hg(t);
        var v = t.memoizedState;
        if (v !== null) {
          var g = v.dehydrated;
          if (g !== null)
            return b_(t, g);
        }
        var x = i.children, w = i.fallback;
        if (s) {
          var z = x_(t, x, w, a), M = t.child;
          return M.memoizedState = i1(a), t.memoizedState = a1, z;
        } else
          return o1(t, x);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var Q = Y.dehydrated;
          if (Q !== null)
            return __(e, t, f, i, Q, Y, a);
        }
        if (s) {
          var Z = i.fallback, ke = i.children, Ke = w_(e, t, ke, Z, a), Ye = t.child, Ut = e.child.memoizedState;
          return Ye.memoizedState = Ut === null ? i1(a) : S_(Ut, a), Ye.childLanes = E_(e, a), t.memoizedState = a1, Ke;
        } else {
          var Ot = i.children, B = R_(e, t, Ot, a);
          return t.memoizedState = null, B;
        }
      }
    }
    function o1(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = l1(l, i);
      return s.return = e, e.child = s, s;
    }
    function x_(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, v, g;
      return (l & Ie) === Ve && s !== null ? (v = s, v.childLanes = ie, v.pendingProps = f, e.mode & st && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), g = ts(a, l, i, null)) : (v = l1(f, l), g = ts(a, l, i, null)), v.return = e, g.return = e, v.sibling = g, e.child = v, g;
    }
    function l1(e, t, a) {
      return _x(e, t, ie, null);
    }
    function _E(e, t) {
      return fc(e, t);
    }
    function R_(e, t, a, i) {
      var l = e.child, s = l.sibling, f = _E(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ie) === Ve && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= It) : v.push(s);
      }
      return t.child = f, f;
    }
    function w_(e, t, a, i, l) {
      var s = t.mode, f = e.child, v = f.sibling, g = {
        mode: "hidden",
        children: a
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ie) === Ve && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var w = t.child;
        x = w, x.childLanes = ie, x.pendingProps = g, t.mode & st && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = f.selfBaseDuration, x.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        x = _E(f, g), x.subtreeFlags = f.subtreeFlags & ur;
      var z;
      return v !== null ? z = fc(v, i) : (z = ts(i, s, l, null), z.flags |= fn), z.return = t, x.return = t, x.sibling = z, t.child = x, z;
    }
    function qm(e, t, a, i) {
      i !== null && Vg(i), Vf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = o1(t, s);
      return f.flags |= fn, t.memoizedState = null, f;
    }
    function T_(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, v = l1(f, s), g = ts(i, s, l, null);
      return g.flags |= fn, v.return = t, g.return = t, v.sibling = g, t.child = v, (t.mode & Ie) !== Ve && Vf(t, e.child, null, l), g;
    }
    function b_(e, t, a) {
      return (e.mode & Ie) === Ve ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = qe) : Tg(t) ? e.lanes = Gi : e.lanes = br, null;
    }
    function __(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & _n) {
          t.flags &= ~_n;
          var B = q0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return qm(e, t, f, B);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ut, null;
          var J = i.children, $ = i.fallback, pe = T_(e, t, J, $, f), Ae = t.child;
          return Ae.memoizedState = i1(f), t.memoizedState = a1, pe;
        }
      else {
        if (vb(), (t.mode & Ie) === Ve)
          return qm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Tg(l)) {
          var v, g, x;
          {
            var w = LT(l);
            v = w.digest, g = w.message, x = w.stack;
          }
          var z;
          g ? z = new Error(g) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = q0(z, v, x);
          return qm(e, t, f, M);
        }
        var Y = oa(f, e.childLanes);
        if (oo || Y) {
          var Q = ay();
          if (Q !== null) {
            var Z = Sh(Q, f);
            if (Z !== Vn && Z !== s.retryLane) {
              s.retryLane = Z;
              var ke = sn;
              Qa(e, Z), gr(Q, e, Z, ke);
            }
          }
          D1();
          var Ke = q0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return qm(e, t, f, Ke);
        } else if (XS(l)) {
          t.flags |= ut, t.child = e.child;
          var Ye = Z2.bind(null, e);
          return MT(l, Ye), null;
        } else {
          yb(t, l, s.treeContext);
          var Ut = i.children, Ot = o1(t, Ut);
          return Ot.flags |= Ua, Ot;
        }
      }
    }
    function DE(e, t, a) {
      e.lanes = vt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = vt(i.lanes, t)), Kg(e.return, t, a);
    }
    function D_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ue) {
          var l = i.memoizedState;
          l !== null && DE(i, a, e);
        } else if (i.tag === lt)
          DE(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function k_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Tm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function O_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !e1[e])
        if (e1[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function L_(e, t) {
      e !== void 0 && !Wm[e] && (e !== "collapsed" && e !== "hidden" ? (Wm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Wm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function kE(e, t) {
      {
        var a = Nt(e), i = !a && typeof Mr(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function M_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Nt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!kE(e[a], a))
              return;
        } else {
          var i = Mr(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!kE(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function u1(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function OE(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      O_(l), L_(s, l), M_(f, l), wa(e, t, f, a);
      var v = ro.current, g = o0(v, Fp);
      if (g)
        v = l0(v, Fp), t.flags |= ut;
      else {
        var x = e !== null && (e.flags & ut) !== Qe;
        x && D_(t, t.child, a), v = Yf(v);
      }
      if (qu(t, v), (t.mode & Ie) === Ve)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var w = k_(t.child), z;
            w === null ? (z = t.child, t.child = null) : (z = w.sibling, w.sibling = null), u1(
              t,
              !1,
              // isBackwards
              z,
              w,
              s
            );
            break;
          }
          case "backwards": {
            var M = null, Y = t.child;
            for (t.child = null; Y !== null; ) {
              var Q = Y.alternate;
              if (Q !== null && Tm(Q) === null) {
                t.child = Y;
                break;
              }
              var Z = Y.sibling;
              Y.sibling = M, M = Y, Y = Z;
            }
            u1(
              t,
              !0,
              // isBackwards
              M,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            u1(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function N_(e, t, a) {
      r0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Vf(t, null, i, a) : wa(e, t, i, a), t.child;
    }
    var LE = !1;
    function A_(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, v = s.value;
      {
        "value" in s || LE || (LE = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && eo(g, s, "prop", "Context.Provider");
      }
      if (RC(t, l, v), f !== null) {
        var x = f.value;
        if (Pe(x, v)) {
          if (f.children === s.children && !nm())
            return zl(e, t, a);
        } else
          Ob(t, l, a);
      }
      var w = s.children;
      return wa(e, t, w, a), t.child;
    }
    var ME = !1;
    function z_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (ME || (ME = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), $f(t, a);
      var f = ir(i);
      du(t);
      var v;
      return Qp.current = t, Xr(!0), v = s(f), Xr(!1), ra(), t.flags |= Oo, wa(e, t, v, a), t.child;
    }
    function Kp() {
      oo = !0;
    }
    function Qm(e, t) {
      (t.mode & Ie) === Ve && e !== null && (e.alternate = null, t.alternate = null, t.flags |= fn);
    }
    function zl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), lE(), sv(t.lanes), oa(a, t.childLanes) ? (Db(e, t), t.child) : null;
    }
    function U_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= It) : s.push(e), a.flags |= fn, a;
      }
    }
    function s1(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function j_(e, t, a) {
      switch (t.tag) {
        case U:
          wE(t), t.stateNode, Hf();
          break;
        case P:
          LC(t);
          break;
        case O: {
          var i = t.type;
          $o(i) && am(t);
          break;
        }
        case H:
          r0(t, t.stateNode.containerInfo);
          break;
        case de: {
          var l = t.memoizedProps.value, s = t.type._context;
          RC(t, s, l);
          break;
        }
        case Ee:
          {
            var f = oa(a, t.childLanes);
            f && (t.flags |= St);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case ue: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return qu(t, Yf(ro.current)), t.flags |= ut, null;
            var x = t.child, w = x.childLanes;
            if (oa(a, w))
              return bE(e, t, a);
            qu(t, Yf(ro.current));
            var z = zl(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            qu(t, Yf(ro.current));
          break;
        }
        case lt: {
          var M = (e.flags & ut) !== Qe, Y = oa(a, t.childLanes);
          if (M) {
            if (Y)
              return OE(e, t, a);
            t.flags |= ut;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), qu(t, ro.current), Y)
            break;
          return null;
        }
        case Oe:
        case Ue:
          return t.lanes = ie, EE(e, t, a);
      }
      return zl(e, t, a);
    }
    function NE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return U_(e, t, F1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || nm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          oo = !0;
        else {
          var s = s1(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ut) === Qe)
            return oo = !1, j_(e, t, a);
          (e.flags & Ts) !== Qe ? oo = !0 : oo = !1;
        }
      } else if (oo = !1, Pr() && ub(t)) {
        var f = t.index, v = sb();
        lC(t, v, f);
      }
      switch (t.lanes = ie, t.tag) {
        case F:
          return g_(e, t, t.type, a);
        case ot: {
          var g = t.elementType;
          return m_(e, t, g, a);
        }
        case k: {
          var x = t.type, w = t.pendingProps, z = t.elementType === x ? w : io(x, w);
          return t1(e, t, x, z, a);
        }
        case O: {
          var M = t.type, Y = t.pendingProps, Q = t.elementType === M ? Y : io(M, Y);
          return RE(e, t, M, Q, a);
        }
        case U:
          return p_(e, t, a);
        case P:
          return v_(e, t, a);
        case G:
          return h_(e, t);
        case ue:
          return bE(e, t, a);
        case H:
          return N_(e, t, a);
        case me: {
          var Z = t.type, ke = t.pendingProps, Ke = t.elementType === Z ? ke : io(Z, ke);
          return gE(e, t, Z, Ke, a);
        }
        case re:
          return c_(e, t, a);
        case oe:
          return f_(e, t, a);
        case Ee:
          return d_(e, t, a);
        case de:
          return A_(e, t, a);
        case Se:
          return z_(e, t, a);
        case _e: {
          var Ye = t.type, Ut = t.pendingProps, Ot = io(Ye, Ut);
          if (t.type !== t.elementType) {
            var B = Ye.propTypes;
            B && eo(
              B,
              Ot,
              // Resolved for outer only
              "prop",
              Mt(Ye)
            );
          }
          return Ot = io(Ye.type, Ot), SE(e, t, Ye, Ot, a);
        }
        case he:
          return CE(e, t, t.type, t.pendingProps, a);
        case Rt: {
          var J = t.type, $ = t.pendingProps, pe = t.elementType === J ? $ : io(J, $);
          return y_(e, t, J, pe, a);
        }
        case lt:
          return OE(e, t, a);
        case _t:
          break;
        case Oe:
          return EE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kf(e) {
      e.flags |= St;
    }
    function AE(e) {
      e.flags |= Zr, e.flags |= jd;
    }
    var zE, c1, UE, jE;
    zE = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === P || l.tag === G)
          iT(e, l.stateNode);
        else if (l.tag !== H) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, c1 = function(e, t) {
    }, UE = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, v = a0(), g = lT(f, a, s, i, l, v);
        t.updateQueue = g, g && Kf(t);
      }
    }, jE = function(e, t, a, i) {
      a !== i && Kf(t);
    };
    function Zp(e, t) {
      if (!Pr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ie, i = Qe;
      if (t) {
        if ((e.mode & st) !== Ve) {
          for (var g = e.selfBaseDuration, x = e.child; x !== null; )
            a = vt(a, vt(x.lanes, x.childLanes)), i |= x.subtreeFlags & ur, i |= x.flags & ur, g += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = g;
        } else
          for (var w = e.child; w !== null; )
            a = vt(a, vt(w.lanes, w.childLanes)), i |= w.subtreeFlags & ur, i |= w.flags & ur, w.return = e, w = w.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & st) !== Ve) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = vt(a, vt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var v = e.child; v !== null; )
            a = vt(a, vt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function P_(e, t, a) {
      if (xb() && (t.mode & Ie) !== Ve && (t.flags & ut) === Qe)
        return vC(t), Hf(), t.flags |= _n | ga | tr, !1;
      var i = sm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Cb(t), Hr(t), (t.mode & st) !== Ve) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Hf(), (t.flags & ut) === Qe && (t.memoizedState = null), t.flags |= St, Hr(t), (t.mode & st) !== Ve) {
            var f = a !== null;
            if (f) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return hC(), !0;
    }
    function PE(e, t, a) {
      var i = t.pendingProps;
      switch (Ug(t), t.tag) {
        case F:
        case ot:
        case he:
        case k:
        case me:
        case re:
        case oe:
        case Ee:
        case Se:
        case _e:
          return Hr(t), null;
        case O: {
          var l = t.type;
          return $o(l) && rm(t), Hr(t), null;
        }
        case U: {
          var s = t.stateNode;
          if (If(t), Mg(t), s0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = sm(t);
            if (f)
              Kf(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & _n) !== Qe) && (t.flags |= za, hC());
            }
          }
          return c1(e, t), Hr(t), null;
        }
        case P: {
          i0(t);
          var g = OC(), x = t.type;
          if (e !== null && t.stateNode != null)
            UE(e, t, x, i, g), e.ref !== t.ref && AE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var w = a0(), z = sm(t);
            if (z)
              gb(t, g, w) && Kf(t);
            else {
              var M = aT(x, i, g, w, t);
              zE(M, t, !1, !1), t.stateNode = M, oT(M, x, i, g) && Kf(t);
            }
            t.ref !== null && AE(t);
          }
          return Hr(t), null;
        }
        case G: {
          var Y = i;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            jE(e, t, Q, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = OC(), ke = a0(), Ke = sm(t);
            Ke ? Sb(t) && Kf(t) : t.stateNode = uT(Y, Z, ke, t);
          }
          return Hr(t), null;
        }
        case ue: {
          Wf(t);
          var Ye = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ut = P_(e, t, Ye);
            if (!Ut)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & ut) !== Qe)
            return t.lanes = a, (t.mode & st) !== Ve && A0(t), t;
          var Ot = Ye !== null, B = e !== null && e.memoizedState !== null;
          if (Ot !== B && Ot) {
            var J = t.child;
            if (J.flags |= Lo, (t.mode & Ie) !== Ve) {
              var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !j);
              $ || o0(ro.current, NC) ? F2() : D1();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= St), Hr(t), (t.mode & st) !== Ve && Ot) {
            var Ae = t.child;
            Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
          }
          return null;
        }
        case H:
          return If(t), c1(e, t), e === null && tb(t.stateNode.containerInfo), Hr(t), null;
        case de:
          var Le = t.type._context;
          return Xg(Le, t), Hr(t), null;
        case Rt: {
          var it = t.type;
          return $o(it) && rm(t), Hr(t), null;
        }
        case lt: {
          Wf(t);
          var dt = t.memoizedState;
          if (dt === null)
            return Hr(t), null;
          var nn = (t.flags & ut) !== Qe, Vt = dt.rendering;
          if (Vt === null)
            if (nn)
              Zp(dt, !1);
            else {
              var Xn = V2() && (e === null || (e.flags & ut) === Qe);
              if (!Xn)
                for (var Bt = t.child; Bt !== null; ) {
                  var Bn = Tm(Bt);
                  if (Bn !== null) {
                    nn = !0, t.flags |= ut, Zp(dt, !1);
                    var fa = Bn.updateQueue;
                    return fa !== null && (t.updateQueue = fa, t.flags |= St), t.subtreeFlags = Qe, kb(t, a), qu(t, l0(ro.current, Fp)), t.child;
                  }
                  Bt = Bt.sibling;
                }
              dt.tail !== null && xn() > ix() && (t.flags |= ut, nn = !0, Zp(dt, !1), t.lanes = uh);
            }
          else {
            if (!nn) {
              var Yr = Tm(Vt);
              if (Yr !== null) {
                t.flags |= ut, nn = !0;
                var fi = Yr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= St), Zp(dt, !0), dt.tail === null && dt.tailMode === "hidden" && !Vt.alternate && !Pr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              xn() * 2 - dt.renderingStartTime > ix() && a !== br && (t.flags |= ut, nn = !0, Zp(dt, !1), t.lanes = uh);
            }
            if (dt.isBackwards)
              Vt.sibling = t.child, t.child = Vt;
            else {
              var _a = dt.last;
              _a !== null ? _a.sibling = Vt : t.child = Vt, dt.last = Vt;
            }
          }
          if (dt.tail !== null) {
            var Da = dt.tail;
            dt.rendering = Da, dt.tail = Da.sibling, dt.renderingStartTime = xn(), Da.sibling = null;
            var da = ro.current;
            return nn ? da = l0(da, Fp) : da = Yf(da), qu(t, da), Da;
          }
          return Hr(t), null;
        }
        case _t:
          break;
        case Oe:
        case Ue: {
          _1(t);
          var Hl = t.memoizedState, id = Hl !== null;
          if (e !== null) {
            var vv = e.memoizedState, Ko = vv !== null;
            Ko !== id && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Ce && (t.flags |= Lo);
          }
          return !id || (t.mode & Ie) === Ve ? Hr(t) : oa(Xo, br) && (Hr(t), t.subtreeFlags & (fn | St) && (t.flags |= Lo)), null;
        }
        case ht:
          return null;
        case Ge:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function F_(e, t, a) {
      switch (Ug(t), t.tag) {
        case O: {
          var i = t.type;
          $o(i) && rm(t);
          var l = t.flags;
          return l & tr ? (t.flags = l & ~tr | ut, (t.mode & st) !== Ve && A0(t), t) : null;
        }
        case U: {
          t.stateNode, If(t), Mg(t), s0();
          var s = t.flags;
          return (s & tr) !== Qe && (s & ut) === Qe ? (t.flags = s & ~tr | ut, t) : null;
        }
        case P:
          return i0(t), null;
        case ue: {
          Wf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hf();
          }
          var v = t.flags;
          return v & tr ? (t.flags = v & ~tr | ut, (t.mode & st) !== Ve && A0(t), t) : null;
        }
        case lt:
          return Wf(t), null;
        case H:
          return If(t), null;
        case de:
          var g = t.type._context;
          return Xg(g, t), null;
        case Oe:
        case Ue:
          return _1(t), null;
        case ht:
          return null;
        default:
          return null;
      }
    }
    function FE(e, t, a) {
      switch (Ug(t), t.tag) {
        case O: {
          var i = t.type.childContextTypes;
          i != null && rm(t);
          break;
        }
        case U: {
          t.stateNode, If(t), Mg(t), s0();
          break;
        }
        case P: {
          i0(t);
          break;
        }
        case H:
          If(t);
          break;
        case ue:
          Wf(t);
          break;
        case lt:
          Wf(t);
          break;
        case de:
          var l = t.type._context;
          Xg(l, t);
          break;
        case Oe:
        case Ue:
          _1(t);
          break;
      }
    }
    var HE = null;
    HE = /* @__PURE__ */ new Set();
    var Gm = !1, Vr = !1, H_ = typeof WeakSet == "function" ? WeakSet : Set, Fe = null, Zf = null, Jf = null;
    function V_(e) {
      fl(null, function() {
        throw e;
      }), zd();
    }
    var B_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & st)
        try {
          Qo(), t.componentWillUnmount();
        } finally {
          qo(e);
        }
      else
        t.componentWillUnmount();
    };
    function VE(e, t) {
      try {
        Xu(dr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function f1(e, t, a) {
      try {
        B_(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function $_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function BE(e, t) {
      try {
        IE(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function ed(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (pt && wt && e.mode & st)
              try {
                Qo(), i = a(null);
              } finally {
                qo(e);
              }
            else
              i = a(null);
          } catch (l) {
            vn(e, t, l);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          a.current = null;
    }
    function Xm(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var $E = !1;
    function I_(e, t) {
      nT(e.containerInfo), Fe = t, Y_();
      var a = $E;
      return $E = !1, a;
    }
    function Y_() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        (e.subtreeFlags & su) !== Qe && t !== null ? (t.return = e, Fe = t) : W_();
      }
    }
    function W_() {
      for (; Fe !== null; ) {
        var e = Fe;
        Qt(e);
        try {
          q_(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        bn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function q_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== Qe) {
        switch (Qt(e), e.tag) {
          case k:
          case me:
          case he:
            break;
          case O: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !oc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : io(e.type, i), l);
              {
                var v = HE;
                f === void 0 && !v.has(e.type) && (v.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ct(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case U: {
            {
              var g = e.stateNode;
              _T(g.containerInfo);
            }
            break;
          }
          case P:
          case G:
          case H:
          case Rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        bn();
      }
    }
    function lo(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var v = f.destroy;
            f.destroy = void 0, v !== void 0 && ((e & Fr) !== Ga ? ih(t) : (e & dr) !== Ga && ui(t), (e & Io) !== Ga && fv(!0), Xm(t, a, v), (e & Io) !== Ga && fv(!1), (e & Fr) !== Ga ? Fc() : (e & dr) !== Ga && pu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Xu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Ga ? Ao(t) : (e & dr) !== Ga && oh(t);
            var f = s.create;
            (e & Io) !== Ga && fv(!0), s.destroy = f(), (e & Io) !== Ga && fv(!1), (e & Fr) !== Ga ? Pc() : (e & dr) !== Ga && bs();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var g = void 0;
                (s.tag & dr) !== Qe ? g = "useLayoutEffect" : (s.tag & Io) !== Qe ? g = "useInsertionEffect" : g = "useEffect";
                var x = void 0;
                v === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? x = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + v, y("%s must not return anything besides a function, which is used for clean-up.%s", g, x);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function Q_(e, t) {
      if ((t.flags & St) !== Qe)
        switch (t.tag) {
          case Ee: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = iE(), v = t.alternate === null ? "mount" : "update";
            aE() && (v = "nested-update"), typeof s == "function" && s(l, v, a, f);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case U:
                  var x = g.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
                case Ee:
                  var w = g.stateNode;
                  w.passiveEffectDuration += a;
                  break e;
              }
              g = g.return;
            }
            break;
          }
        }
    }
    function G_(e, t, a, i) {
      if ((a.flags & wr) !== Qe)
        switch (a.tag) {
          case k:
          case me:
          case he: {
            if (!Vr)
              if (a.mode & st)
                try {
                  Qo(), Xu(dr | fr, a);
                } finally {
                  qo(a);
                }
              else
                Xu(dr | fr, a);
            break;
          }
          case O: {
            var l = a.stateNode;
            if (a.flags & St && !Vr)
              if (t === null)
                if (a.type === a.elementType && !oc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & st)
                  try {
                    Qo(), l.componentDidMount();
                  } finally {
                    qo(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : io(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !oc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & st)
                  try {
                    Qo(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    qo(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !oc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), kC(a, v, l));
            break;
          }
          case U: {
            var g = a.updateQueue;
            if (g !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case P:
                    x = a.child.stateNode;
                    break;
                  case O:
                    x = a.child.stateNode;
                    break;
                }
              kC(a, g, x);
            }
            break;
          }
          case P: {
            var w = a.stateNode;
            if (t === null && a.flags & St) {
              var z = a.type, M = a.memoizedProps;
              pT(w, z, M);
            }
            break;
          }
          case G:
            break;
          case H:
            break;
          case Ee: {
            {
              var Y = a.memoizedProps, Q = Y.onCommit, Z = Y.onRender, ke = a.stateNode.effectDuration, Ke = iE(), Ye = t === null ? "mount" : "update";
              aE() && (Ye = "nested-update"), typeof Z == "function" && Z(a.memoizedProps.id, Ye, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ke);
              {
                typeof Q == "function" && Q(a.memoizedProps.id, Ye, ke, Ke), W2(a);
                var Ut = a.return;
                e: for (; Ut !== null; ) {
                  switch (Ut.tag) {
                    case U:
                      var Ot = Ut.stateNode;
                      Ot.effectDuration += ke;
                      break e;
                    case Ee:
                      var B = Ut.stateNode;
                      B.effectDuration += ke;
                      break e;
                  }
                  Ut = Ut.return;
                }
              }
            }
            break;
          }
          case ue: {
            r2(e, a);
            break;
          }
          case lt:
          case Rt:
          case _t:
          case Oe:
          case Ue:
          case Ge:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vr || a.flags & Zr && IE(a);
    }
    function X_(e) {
      switch (e.tag) {
        case k:
        case me:
        case he: {
          if (e.mode & st)
            try {
              Qo(), VE(e, e.return);
            } finally {
              qo(e);
            }
          else
            VE(e, e.return);
          break;
        }
        case O: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && $_(e, e.return, t), BE(e, e.return);
          break;
        }
        case P: {
          BE(e, e.return);
          break;
        }
      }
    }
    function K_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === P) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? RT(l) : TT(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === G) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? wT(s) : bT(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
        } else if (!((i.tag === Oe || i.tag === Ue) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function IE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case P:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & st)
            try {
              Qo(), l = t(i);
            } finally {
              qo(e);
            }
          else
            l = t(i);
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ct(e)), t.current = i;
      }
    }
    function Z_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function YE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, YE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === P) {
          var a = e.stateNode;
          a !== null && ab(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function J_(e) {
      for (var t = e.return; t !== null; ) {
        if (WE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function WE(e) {
      return e.tag === P || e.tag === U || e.tag === H;
    }
    function qE(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || WE(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== P && t.tag !== G && t.tag !== at; ) {
          if (t.flags & fn || t.child === null || t.tag === H)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & fn))
          return t.stateNode;
      }
    }
    function e2(e) {
      var t = J_(e);
      switch (t.tag) {
        case P: {
          var a = t.stateNode;
          t.flags & Gt && (GS(a), t.flags &= ~Gt);
          var i = qE(e);
          p1(e, i, a);
          break;
        }
        case U:
        case H: {
          var l = t.stateNode.containerInfo, s = qE(e);
          d1(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function d1(e, t, a) {
      var i = e.tag, l = i === P || i === G;
      if (l) {
        var s = e.stateNode;
        t ? ST(a, s, t) : yT(a, s);
      } else if (i !== H) {
        var f = e.child;
        if (f !== null) {
          d1(f, t, a);
          for (var v = f.sibling; v !== null; )
            d1(v, t, a), v = v.sibling;
        }
      }
    }
    function p1(e, t, a) {
      var i = e.tag, l = i === P || i === G;
      if (l) {
        var s = e.stateNode;
        t ? gT(a, s, t) : mT(a, s);
      } else if (i !== H) {
        var f = e.child;
        if (f !== null) {
          p1(f, t, a);
          for (var v = f.sibling; v !== null; )
            p1(v, t, a), v = v.sibling;
        }
      }
    }
    var Br = null, uo = !1;
    function t2(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case P: {
              Br = i.stateNode, uo = !1;
              break e;
            }
            case U: {
              Br = i.stateNode.containerInfo, uo = !0;
              break e;
            }
            case H: {
              Br = i.stateNode.containerInfo, uo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        QE(e, t, a), Br = null, uo = !1;
      }
      Z_(a);
    }
    function Ku(e, t, a) {
      for (var i = a.child; i !== null; )
        QE(e, t, i), i = i.sibling;
    }
    function QE(e, t, a) {
      switch (vl(a), a.tag) {
        case P:
          Vr || ed(a, t);
        case G: {
          {
            var i = Br, l = uo;
            Br = null, Ku(e, t, a), Br = i, uo = l, Br !== null && (uo ? ET(Br, a.stateNode) : CT(Br, a.stateNode));
          }
          return;
        }
        case at: {
          Br !== null && (uo ? xT(Br, a.stateNode) : wg(Br, a.stateNode));
          return;
        }
        case H: {
          {
            var s = Br, f = uo;
            Br = a.stateNode.containerInfo, uo = !0, Ku(e, t, a), Br = s, uo = f;
          }
          return;
        }
        case k:
        case me:
        case _e:
        case he: {
          if (!Vr) {
            var v = a.updateQueue;
            if (v !== null) {
              var g = v.lastEffect;
              if (g !== null) {
                var x = g.next, w = x;
                do {
                  var z = w, M = z.destroy, Y = z.tag;
                  M !== void 0 && ((Y & Io) !== Ga ? Xm(a, t, M) : (Y & dr) !== Ga && (ui(a), a.mode & st ? (Qo(), Xm(a, t, M), qo(a)) : Xm(a, t, M), pu())), w = w.next;
                } while (w !== x);
              }
            }
          }
          Ku(e, t, a);
          return;
        }
        case O: {
          if (!Vr) {
            ed(a, t);
            var Q = a.stateNode;
            typeof Q.componentWillUnmount == "function" && f1(a, t, Q);
          }
          Ku(e, t, a);
          return;
        }
        case _t: {
          Ku(e, t, a);
          return;
        }
        case Oe: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ie
          ) {
            var Z = Vr;
            Vr = Z || a.memoizedState !== null, Ku(e, t, a), Vr = Z;
          } else
            Ku(e, t, a);
          break;
        }
        default: {
          Ku(e, t, a);
          return;
        }
      }
    }
    function n2(e) {
      e.memoizedState;
    }
    function r2(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && VT(s);
          }
        }
      }
    }
    function GE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new H_()), t.forEach(function(i) {
          var l = J2.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ea)
              if (Zf !== null && Jf !== null)
                cv(Jf, Zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function a2(e, t, a) {
      Zf = a, Jf = e, Qt(t), XE(t, e), Qt(t), Zf = null, Jf = null;
    }
    function so(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            t2(e, t, s);
          } catch (g) {
            vn(s, t, g);
          }
        }
      var f = mc();
      if (t.subtreeFlags & ta)
        for (var v = t.child; v !== null; )
          Qt(v), XE(v, e), v = v.sibling;
      Qt(f);
    }
    function XE(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case me:
        case _e:
        case he: {
          if (so(t, e), Go(e), l & St) {
            try {
              lo(Io | fr, e, e.return), Xu(Io | fr, e);
            } catch (it) {
              vn(e, e.return, it);
            }
            if (e.mode & st) {
              try {
                Qo(), lo(dr | fr, e, e.return);
              } catch (it) {
                vn(e, e.return, it);
              }
              qo(e);
            } else
              try {
                lo(dr | fr, e, e.return);
              } catch (it) {
                vn(e, e.return, it);
              }
          }
          return;
        }
        case O: {
          so(t, e), Go(e), l & Zr && i !== null && ed(i, i.return);
          return;
        }
        case P: {
          so(t, e), Go(e), l & Zr && i !== null && ed(i, i.return);
          {
            if (e.flags & Gt) {
              var s = e.stateNode;
              try {
                GS(s);
              } catch (it) {
                vn(e, e.return, it);
              }
            }
            if (l & St) {
              var f = e.stateNode;
              if (f != null) {
                var v = e.memoizedProps, g = i !== null ? i.memoizedProps : v, x = e.type, w = e.updateQueue;
                if (e.updateQueue = null, w !== null)
                  try {
                    vT(f, w, x, g, v, e);
                  } catch (it) {
                    vn(e, e.return, it);
                  }
              }
            }
          }
          return;
        }
        case G: {
          if (so(t, e), Go(e), l & St) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, M = e.memoizedProps, Y = i !== null ? i.memoizedProps : M;
            try {
              hT(z, Y, M);
            } catch (it) {
              vn(e, e.return, it);
            }
          }
          return;
        }
        case U: {
          if (so(t, e), Go(e), l & St && i !== null) {
            var Q = i.memoizedState;
            if (Q.isDehydrated)
              try {
                HT(t.containerInfo);
              } catch (it) {
                vn(e, e.return, it);
              }
          }
          return;
        }
        case H: {
          so(t, e), Go(e);
          return;
        }
        case ue: {
          so(t, e), Go(e);
          var Z = e.child;
          if (Z.flags & Lo) {
            var ke = Z.stateNode, Ke = Z.memoizedState, Ye = Ke !== null;
            if (ke.isHidden = Ye, Ye) {
              var Ut = Z.alternate !== null && Z.alternate.memoizedState !== null;
              Ut || P2();
            }
          }
          if (l & St) {
            try {
              n2(e);
            } catch (it) {
              vn(e, e.return, it);
            }
            GE(e);
          }
          return;
        }
        case Oe: {
          var Ot = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ie
          ) {
            var B = Vr;
            Vr = B || Ot, so(t, e), Vr = B;
          } else
            so(t, e);
          if (Go(e), l & Lo) {
            var J = e.stateNode, $ = e.memoizedState, pe = $ !== null, Ae = e;
            if (J.isHidden = pe, pe && !Ot && (Ae.mode & Ie) !== Ve) {
              Fe = Ae;
              for (var Le = Ae.child; Le !== null; )
                Fe = Le, o2(Le), Le = Le.sibling;
            }
            K_(Ae, pe);
          }
          return;
        }
        case lt: {
          so(t, e), Go(e), l & St && GE(e);
          return;
        }
        case _t:
          return;
        default: {
          so(t, e), Go(e);
          return;
        }
      }
    }
    function Go(e) {
      var t = e.flags;
      if (t & fn) {
        try {
          e2(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~fn;
      }
      t & Ua && (e.flags &= ~Ua);
    }
    function i2(e, t, a) {
      Zf = a, Jf = t, Fe = e, KE(e, t, a), Zf = null, Jf = null;
    }
    function KE(e, t, a) {
      for (var i = (e.mode & Ie) !== Ve; Fe !== null; ) {
        var l = Fe, s = l.child;
        if (l.tag === Oe && i) {
          var f = l.memoizedState !== null, v = f || Gm;
          if (v) {
            v1(e, t, a);
            continue;
          } else {
            var g = l.alternate, x = g !== null && g.memoizedState !== null, w = x || Vr, z = Gm, M = Vr;
            Gm = v, Vr = w, Vr && !M && (Fe = l, l2(l));
            for (var Y = s; Y !== null; )
              Fe = Y, KE(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            Fe = l, Gm = z, Vr = M, v1(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & wr) !== Qe && s !== null ? (s.return = l, Fe = s) : v1(e, t, a);
      }
    }
    function v1(e, t, a) {
      for (; Fe !== null; ) {
        var i = Fe;
        if ((i.flags & wr) !== Qe) {
          var l = i.alternate;
          Qt(i);
          try {
            G_(t, l, i, a);
          } catch (f) {
            vn(i, i.return, f);
          }
          bn();
        }
        if (i === e) {
          Fe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Fe = s;
          return;
        }
        Fe = i.return;
      }
    }
    function o2(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        switch (t.tag) {
          case k:
          case me:
          case _e:
          case he: {
            if (t.mode & st)
              try {
                Qo(), lo(dr, t, t.return);
              } finally {
                qo(t);
              }
            else
              lo(dr, t, t.return);
            break;
          }
          case O: {
            ed(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && f1(t, t.return, i);
            break;
          }
          case P: {
            ed(t, t.return);
            break;
          }
          case Oe: {
            var l = t.memoizedState !== null;
            if (l) {
              ZE(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Fe = a) : ZE(e);
      }
    }
    function ZE(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        if (t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function l2(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        if (t.tag === Oe) {
          var i = t.memoizedState !== null;
          if (i) {
            JE(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Fe = a) : JE(e);
      }
    }
    function JE(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        Qt(t);
        try {
          X_(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (bn(), t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function u2(e, t, a, i) {
      Fe = t, s2(t, e, a, i);
    }
    function s2(e, t, a, i) {
      for (; Fe !== null; ) {
        var l = Fe, s = l.child;
        (l.subtreeFlags & ja) !== Qe && s !== null ? (s.return = l, Fe = s) : c2(e, t, a, i);
      }
    }
    function c2(e, t, a, i) {
      for (; Fe !== null; ) {
        var l = Fe;
        if ((l.flags & hn) !== Qe) {
          Qt(l);
          try {
            f2(t, l, a, i);
          } catch (f) {
            vn(l, l.return, f);
          }
          bn();
        }
        if (l === e) {
          Fe = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Fe = s;
          return;
        }
        Fe = l.return;
      }
    }
    function f2(e, t, a, i) {
      switch (t.tag) {
        case k:
        case me:
        case he: {
          if (t.mode & st) {
            N0();
            try {
              Xu(Fr | fr, t);
            } finally {
              M0(t);
            }
          } else
            Xu(Fr | fr, t);
          break;
        }
      }
    }
    function d2(e) {
      Fe = e, p2();
    }
    function p2() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        if ((Fe.flags & It) !== Qe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Fe = l, m2(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var v = f.sibling;
                    f.sibling = null, f = v;
                  } while (f !== null);
                }
              }
            }
            Fe = e;
          }
        }
        (e.subtreeFlags & ja) !== Qe && t !== null ? (t.return = e, Fe = t) : v2();
      }
    }
    function v2() {
      for (; Fe !== null; ) {
        var e = Fe;
        (e.flags & hn) !== Qe && (Qt(e), h2(e), bn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function h2(e) {
      switch (e.tag) {
        case k:
        case me:
        case he: {
          e.mode & st ? (N0(), lo(Fr | fr, e, e.return), M0(e)) : lo(Fr | fr, e, e.return);
          break;
        }
      }
    }
    function m2(e, t) {
      for (; Fe !== null; ) {
        var a = Fe;
        Qt(a), g2(a, t), bn();
        var i = a.child;
        i !== null ? (i.return = a, Fe = i) : y2(e);
      }
    }
    function y2(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.sibling, i = t.return;
        if (YE(t), t === e) {
          Fe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Fe = a;
          return;
        }
        Fe = i;
      }
    }
    function g2(e, t) {
      switch (e.tag) {
        case k:
        case me:
        case he: {
          e.mode & st ? (N0(), lo(Fr, e, t), M0(e)) : lo(Fr, e, t);
          break;
        }
      }
    }
    function S2(e) {
      switch (e.tag) {
        case k:
        case me:
        case he: {
          try {
            Xu(dr | fr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case O: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function C2(e) {
      switch (e.tag) {
        case k:
        case me:
        case he: {
          try {
            Xu(Fr | fr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function E2(e) {
      switch (e.tag) {
        case k:
        case me:
        case he: {
          try {
            lo(dr | fr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case O: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && f1(e, e.return, t);
          break;
        }
      }
    }
    function x2(e) {
      switch (e.tag) {
        case k:
        case me:
        case he:
          try {
            lo(Fr | fr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Jp = Symbol.for;
      Jp("selector.component"), Jp("selector.has_pseudo_class"), Jp("selector.role"), Jp("selector.test_id"), Jp("selector.text");
    }
    var R2 = [];
    function w2() {
      R2.forEach(function(e) {
        return e();
      });
    }
    var T2 = m.ReactCurrentActQueue;
    function b2(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function ex() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && T2.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var _2 = Math.ceil, h1 = m.ReactCurrentDispatcher, m1 = m.ReactCurrentOwner, $r = m.ReactCurrentBatchConfig, co = m.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), tx = (
      /*               */
      1
    ), Ir = (
      /*                */
      2
    ), Ni = (
      /*                */
      4
    ), Ul = 0, ev = 1, lc = 2, Km = 3, tv = 4, nx = 5, y1 = 6, zt = hr, Ta = null, jn = null, mr = ie, Xo = ie, g1 = Vu(ie), yr = Ul, nv = null, Zm = ie, rv = ie, Jm = ie, av = null, Xa = null, S1 = 0, rx = 500, ax = 1 / 0, D2 = 500, jl = null;
    function iv() {
      ax = xn() + D2;
    }
    function ix() {
      return ax;
    }
    var ey = !1, C1 = null, td = null, uc = !1, Zu = null, ov = ie, E1 = [], x1 = null, k2 = 50, lv = 0, R1 = null, w1 = !1, ty = !1, O2 = 50, nd = 0, ny = null, uv = sn, ry = ie, ox = !1;
    function ay() {
      return Ta;
    }
    function ba() {
      return (zt & (Ir | Ni)) !== hr ? xn() : (uv !== sn || (uv = xn()), uv);
    }
    function Ju(e) {
      var t = e.mode;
      if ((t & Ie) === Ve)
        return qe;
      if ((zt & Ir) !== hr && mr !== ie)
        return xu(mr);
      var a = Tb() !== wb;
      if (a) {
        if ($r.transition !== null) {
          var i = $r.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ry === Vn && (ry = mh()), ry;
      }
      var l = Ba();
      if (l !== Vn)
        return l;
      var s = sT();
      return s;
    }
    function L2(e) {
      var t = e.mode;
      return (t & Ie) === Ve ? qe : ia();
    }
    function gr(e, t, a, i) {
      tD(), ox && y("useInsertionEffect must not schedule updates."), w1 && (ty = !0), xl(e, a, i), (zt & Ir) !== ie && e === Ta ? aD(t) : (Ea && sf(e, t, a), iD(t), e === Ta && ((zt & Ir) === hr && (rv = vt(rv, a)), yr === tv && es(e, mr)), Ka(e, i), a === qe && zt === hr && (t.mode & Ie) === Ve && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !co.isBatchingLegacy && (iv(), oC()));
    }
    function M2(e, t, a) {
      var i = e.current;
      i.lanes = t, xl(e, t, a), Ka(e, a);
    }
    function N2(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (zt & Ir) !== hr
      );
    }
    function Ka(e, t) {
      var a = e.callbackNode;
      fh(e, t);
      var i = Cl(e, e === Ta ? mr : ie);
      if (i === ie) {
        a !== null && xx(a), e.callbackNode = null, e.callbackPriority = Vn;
        return;
      }
      var l = An(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(co.current !== null && a !== L1)) {
        a == null && s !== qe && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && xx(a);
      var f;
      if (l === qe)
        e.tag === Bu ? (co.isBatchingLegacy !== null && (co.didScheduleLegacyUpdate = !0), lb(sx.bind(null, e))) : iC(sx.bind(null, e)), co.current !== null ? co.current.push($u) : fT(function() {
          (zt & (Ir | Ni)) === hr && $u();
        }), f = null;
      else {
        var v;
        switch (cr(i)) {
          case zn:
            v = zc;
            break;
          case Xi:
            v = pl;
            break;
          case wi:
            v = Ri;
            break;
          case Ru:
            v = Uc;
            break;
          default:
            v = Ri;
            break;
        }
        f = M1(v, lx.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function lx(e, t) {
      if (Kb(), uv = sn, ry = ie, (zt & (Ir | Ni)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Fl();
      if (i && e.callbackNode !== a)
        return null;
      var l = Cl(e, e === Ta ? mr : ie);
      if (l === ie)
        return null;
      var s = !As(e, l) && !hh(e, l) && !t, f = s ? $2(e, l) : oy(e, l);
      if (f !== Ul) {
        if (f === lc) {
          var v = Uo(e);
          v !== ie && (l = v, f = T1(e, v));
        }
        if (f === ev) {
          var g = nv;
          throw sc(e, ie), es(e, l), Ka(e, xn()), g;
        }
        if (f === y1)
          es(e, l);
        else {
          var x = !As(e, l), w = e.current.alternate;
          if (x && !z2(w)) {
            if (f = oy(e, l), f === lc) {
              var z = Uo(e);
              z !== ie && (l = z, f = T1(e, z));
            }
            if (f === ev) {
              var M = nv;
              throw sc(e, ie), es(e, l), Ka(e, xn()), M;
            }
          }
          e.finishedWork = w, e.finishedLanes = l, A2(e, f, l);
        }
      }
      return Ka(e, xn()), e.callbackNode === a ? lx.bind(null, e) : null;
    }
    function T1(e, t) {
      var a = av;
      if (cf(e)) {
        var i = sc(e, t);
        i.flags |= _n, eb(e.containerInfo);
      }
      var l = oy(e, t);
      if (l !== lc) {
        var s = Xa;
        Xa = a, s !== null && ux(s);
      }
      return l;
    }
    function ux(e) {
      Xa === null ? Xa = e : Xa.push.apply(Xa, e);
    }
    function A2(e, t, a) {
      switch (t) {
        case Ul:
        case ev:
          throw new Error("Root did not complete. This is a bug in React.");
        case lc: {
          cc(e, Xa, jl);
          break;
        }
        case Km: {
          if (es(e, a), dh(a) && // do not delay if we're inside an act() scope
          !Rx()) {
            var i = S1 + rx - xn();
            if (i > 10) {
              var l = Cl(e, ie);
              if (l !== ie)
                break;
              var s = e.suspendedLanes;
              if (!El(s, a)) {
                ba(), lf(e, s);
                break;
              }
              e.timeoutHandle = xg(cc.bind(null, e, Xa, jl), i);
              break;
            }
          }
          cc(e, Xa, jl);
          break;
        }
        case tv: {
          if (es(e, a), vh(a))
            break;
          if (!Rx()) {
            var f = sh(e, a), v = f, g = xn() - v, x = eD(g) - g;
            if (x > 10) {
              e.timeoutHandle = xg(cc.bind(null, e, Xa, jl), x);
              break;
            }
          }
          cc(e, Xa, jl);
          break;
        }
        case nx: {
          cc(e, Xa, jl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function z2(e) {
      for (var t = e; ; ) {
        if (t.flags & ws) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, v = s.value;
                try {
                  if (!Pe(f(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & ws && g !== null) {
          g.return = t, t = g;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function es(e, t) {
      t = zs(t, Jm), t = zs(t, rv), gh(e, t);
    }
    function sx(e) {
      if (Zb(), (zt & (Ir | Ni)) !== hr)
        throw new Error("Should not already be working.");
      Fl();
      var t = Cl(e, ie);
      if (!oa(t, qe))
        return Ka(e, xn()), null;
      var a = oy(e, t);
      if (e.tag !== Bu && a === lc) {
        var i = Uo(e);
        i !== ie && (t = i, a = T1(e, i));
      }
      if (a === ev) {
        var l = nv;
        throw sc(e, ie), es(e, t), Ka(e, xn()), l;
      }
      if (a === y1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, cc(e, Xa, jl), Ka(e, xn()), null;
    }
    function U2(e, t) {
      t !== ie && (Zd(e, vt(t, qe)), Ka(e, xn()), (zt & (Ir | Ni)) === hr && (iv(), $u()));
    }
    function b1(e, t) {
      var a = zt;
      zt |= tx;
      try {
        return e(t);
      } finally {
        zt = a, zt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !co.isBatchingLegacy && (iv(), oC());
      }
    }
    function j2(e, t, a, i, l) {
      var s = Ba(), f = $r.transition;
      try {
        return $r.transition = null, Dn(zn), e(t, a, i, l);
      } finally {
        Dn(s), $r.transition = f, zt === hr && iv();
      }
    }
    function Pl(e) {
      Zu !== null && Zu.tag === Bu && (zt & (Ir | Ni)) === hr && Fl();
      var t = zt;
      zt |= tx;
      var a = $r.transition, i = Ba();
      try {
        return $r.transition = null, Dn(zn), e ? e() : void 0;
      } finally {
        Dn(i), $r.transition = a, zt = t, (zt & (Ir | Ni)) === hr && $u();
      }
    }
    function cx() {
      return (zt & (Ir | Ni)) !== hr;
    }
    function iy(e, t) {
      sa(g1, Xo, e), Xo = vt(Xo, t);
    }
    function _1(e) {
      Xo = g1.current, ua(g1, e);
    }
    function sc(e, t) {
      e.finishedWork = null, e.finishedLanes = ie;
      var a = e.timeoutHandle;
      if (a !== Rg && (e.timeoutHandle = Rg, cT(a)), jn !== null)
        for (var i = jn.return; i !== null; ) {
          var l = i.alternate;
          FE(l, i), i = i.return;
        }
      Ta = e;
      var s = fc(e.current, null);
      return jn = s, mr = Xo = t, yr = Ul, nv = null, Zm = ie, rv = ie, Jm = ie, av = null, Xa = null, Mb(), no.discardPendingWarnings(), s;
    }
    function fx(e, t) {
      do {
        var a = jn;
        try {
          if (hm(), zC(), bn(), m1.current = null, a === null || a.return === null) {
            yr = ev, nv = t, jn = null;
            return;
          }
          if (pt && a.mode & st && Im(a, !0), mt)
            if (ra(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              hl(a, i, mr);
            } else
              _s(a, t, mr);
          l_(e, a.return, a, t, mr), hx(a);
        } catch (l) {
          t = l, jn === a && a !== null ? (a = a.return, jn = a) : a = jn;
          continue;
        }
        return;
      } while (!0);
    }
    function dx() {
      var e = h1.current;
      return h1.current = Fm, e === null ? Fm : e;
    }
    function px(e) {
      h1.current = e;
    }
    function P2() {
      S1 = xn();
    }
    function sv(e) {
      Zm = vt(e, Zm);
    }
    function F2() {
      yr === Ul && (yr = Km);
    }
    function D1() {
      (yr === Ul || yr === Km || yr === lc) && (yr = tv), Ta !== null && (Ns(Zm) || Ns(rv)) && es(Ta, mr);
    }
    function H2(e) {
      yr !== tv && (yr = lc), av === null ? av = [e] : av.push(e);
    }
    function V2() {
      return yr === Ul;
    }
    function oy(e, t) {
      var a = zt;
      zt |= Ir;
      var i = dx();
      if (Ta !== e || mr !== t) {
        if (Ea) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (cv(e, mr), l.clear()), Jd(e, t);
        }
        jl = js(), sc(e, t);
      }
      mn(t);
      do
        try {
          B2();
          break;
        } catch (s) {
          fx(e, s);
        }
      while (!0);
      if (hm(), zt = a, px(i), jn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Vc(), Ta = null, mr = ie, yr;
    }
    function B2() {
      for (; jn !== null; )
        vx(jn);
    }
    function $2(e, t) {
      var a = zt;
      zt |= Ir;
      var i = dx();
      if (Ta !== e || mr !== t) {
        if (Ea) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (cv(e, mr), l.clear()), Jd(e, t);
        }
        jl = js(), iv(), sc(e, t);
      }
      mn(t);
      do
        try {
          I2();
          break;
        } catch (s) {
          fx(e, s);
        }
      while (!0);
      return hm(), px(i), zt = a, jn !== null ? (Hc(), Ul) : (Vc(), Ta = null, mr = ie, yr);
    }
    function I2() {
      for (; jn !== null && !Ac(); )
        vx(jn);
    }
    function vx(e) {
      var t = e.alternate;
      Qt(e);
      var a;
      (e.mode & st) !== Ve ? (L0(e), a = k1(t, e, Xo), Im(e, !0)) : a = k1(t, e, Xo), bn(), e.memoizedProps = e.pendingProps, a === null ? hx(e) : jn = a, m1.current = null;
    }
    function hx(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ga) === Qe) {
          Qt(t);
          var l = void 0;
          if ((t.mode & st) === Ve ? l = PE(a, t, Xo) : (L0(t), l = PE(a, t, Xo), Im(t, !1)), bn(), l !== null) {
            jn = l;
            return;
          }
        } else {
          var s = F_(a, t);
          if (s !== null) {
            s.flags &= Zv, jn = s;
            return;
          }
          if ((t.mode & st) !== Ve) {
            Im(t, !1);
            for (var f = t.actualDuration, v = t.child; v !== null; )
              f += v.actualDuration, v = v.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ga, i.subtreeFlags = Qe, i.deletions = null;
          else {
            yr = y1, jn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          jn = g;
          return;
        }
        t = i, jn = t;
      } while (t !== null);
      yr === Ul && (yr = nx);
    }
    function cc(e, t, a) {
      var i = Ba(), l = $r.transition;
      try {
        $r.transition = null, Dn(zn), Y2(e, t, a, i);
      } finally {
        $r.transition = l, Dn(i);
      }
      return null;
    }
    function Y2(e, t, a, i) {
      do
        Fl();
      while (Zu !== null);
      if (nD(), (zt & (Ir | Ni)) !== hr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (No(s), l === null)
        return jc(), null;
      if (s === ie && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ie, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vn;
      var f = vt(l.lanes, l.childLanes);
      uf(e, f), e === Ta && (Ta = null, jn = null, mr = ie), ((l.subtreeFlags & ja) !== Qe || (l.flags & ja) !== Qe) && (uc || (uc = !0, x1 = a, M1(Ri, function() {
        return Fl(), null;
      })));
      var v = (l.subtreeFlags & (su | ta | wr | ja)) !== Qe, g = (l.flags & (su | ta | wr | ja)) !== Qe;
      if (v || g) {
        var x = $r.transition;
        $r.transition = null;
        var w = Ba();
        Dn(zn);
        var z = zt;
        zt |= Ni, m1.current = null, I_(e, l), oE(), a2(e, l, s), rT(e.containerInfo), e.current = l, Id(s), i2(l, e, s), vu(), th(), zt = z, Dn(w), $r.transition = x;
      } else
        e.current = l, oE();
      var M = uc;
      if (uc ? (uc = !1, Zu = e, ov = s) : (nd = 0, ny = null), f = e.pendingLanes, f === ie && (td = null), M || Sx(e.current, !1), fu(l.stateNode, i), Ea && e.memoizedUpdaters.clear(), w2(), Ka(e, xn()), t !== null)
        for (var Y = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var Z = t[Q], ke = Z.stack, Ke = Z.digest;
          Y(Z.value, {
            componentStack: ke,
            digest: Ke
          });
        }
      if (ey) {
        ey = !1;
        var Ye = C1;
        throw C1 = null, Ye;
      }
      return oa(ov, qe) && e.tag !== Bu && Fl(), f = e.pendingLanes, oa(f, qe) ? (Xb(), e === R1 ? lv++ : (lv = 0, R1 = e)) : lv = 0, $u(), jc(), null;
    }
    function Fl() {
      if (Zu !== null) {
        var e = cr(ov), t = qy(wi, e), a = $r.transition, i = Ba();
        try {
          return $r.transition = null, Dn(t), q2();
        } finally {
          Dn(i), $r.transition = a;
        }
      }
      return !1;
    }
    function W2(e) {
      E1.push(e), uc || (uc = !0, M1(Ri, function() {
        return Fl(), null;
      }));
    }
    function q2() {
      if (Zu === null)
        return !1;
      var e = x1;
      x1 = null;
      var t = Zu, a = ov;
      if (Zu = null, ov = ie, (zt & (Ir | Ni)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      w1 = !0, ty = !1, lh(a);
      var i = zt;
      zt |= Ni, d2(t.current), u2(t, t.current, a, e);
      {
        var l = E1;
        E1 = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          Q_(t, f);
        }
      }
      Yd(), Sx(t.current, !0), zt = i, $u(), ty ? t === ny ? nd++ : (nd = 0, ny = t) : nd = 0, w1 = !1, ty = !1, Ha(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function mx(e) {
      return td !== null && td.has(e);
    }
    function Q2(e) {
      td === null ? td = /* @__PURE__ */ new Set([e]) : td.add(e);
    }
    function G2(e) {
      ey || (ey = !0, C1 = e);
    }
    var X2 = G2;
    function yx(e, t, a) {
      var i = ic(a, t), l = vE(e, i, qe), s = Yu(e, l, qe), f = ba();
      s !== null && (xl(s, qe, f), Ka(s, f));
    }
    function vn(e, t, a) {
      if (V_(a), fv(!1), e.tag === U) {
        yx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === U) {
          yx(i, e, a);
          return;
        } else if (i.tag === O) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !mx(s)) {
            var f = ic(a, e), v = G0(i, f, qe), g = Yu(i, v, qe), x = ba();
            g !== null && (xl(g, qe, x), Ka(g, x));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function K2(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = ba();
      lf(e, a), oD(e), Ta === e && El(mr, a) && (yr === tv || yr === Km && dh(mr) && xn() - S1 < rx ? sc(e, ie) : Jm = vt(Jm, a)), Ka(e, l);
    }
    function gx(e, t) {
      t === Vn && (t = L2(e));
      var a = ba(), i = Qa(e, t);
      i !== null && (xl(i, t, a), Ka(i, a));
    }
    function Z2(e) {
      var t = e.memoizedState, a = Vn;
      t !== null && (a = t.retryLane), gx(e, a);
    }
    function J2(e, t) {
      var a = Vn, i;
      switch (e.tag) {
        case ue:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case lt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), gx(e, a);
    }
    function eD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : _2(e / 1960) * 1960;
    }
    function tD() {
      if (lv > k2)
        throw lv = 0, R1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      nd > O2 && (nd = 0, ny = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function nD() {
      no.flushLegacyContextWarning(), no.flushPendingUnsafeLifecycleWarnings();
    }
    function Sx(e, t) {
      Qt(e), ly(e, ea, E2), t && ly(e, dl, x2), ly(e, ea, S2), t && ly(e, dl, C2), bn();
    }
    function ly(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Qe ? i = i.child : ((i.flags & t) !== Qe && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var uy = null;
    function Cx(e) {
      {
        if ((zt & Ir) !== hr || !(e.mode & Ie))
          return;
        var t = e.tag;
        if (t !== F && t !== U && t !== O && t !== k && t !== me && t !== _e && t !== he)
          return;
        var a = ct(e) || "ReactComponent";
        if (uy !== null) {
          if (uy.has(a))
            return;
          uy.add(a);
        } else
          uy = /* @__PURE__ */ new Set([a]);
        var i = En;
        try {
          Qt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qt(e) : bn();
        }
      }
    }
    var k1;
    {
      var rD = null;
      k1 = function(e, t, a) {
        var i = Dx(rD, t);
        try {
          return NE(e, t, a);
        } catch (s) {
          if (hb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (hm(), zC(), FE(e, t), Dx(t, i), t.mode & st && L0(t), fl(null, NE, null, e, t, a), By()) {
            var l = zd();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var Ex = !1, O1;
    O1 = /* @__PURE__ */ new Set();
    function aD(e) {
      if (Gr && !qb())
        switch (e.tag) {
          case k:
          case me:
          case he: {
            var t = jn && ct(jn) || "Unknown", a = t;
            if (!O1.has(a)) {
              O1.add(a);
              var i = ct(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case O: {
            Ex || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Ex = !0);
            break;
          }
        }
    }
    function cv(e, t) {
      if (Ea) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          sf(e, i, t);
        });
      }
    }
    var L1 = {};
    function M1(e, t) {
      {
        var a = co.current;
        return a !== null ? (a.push(t), L1) : Nc(e, t);
      }
    }
    function xx(e) {
      if (e !== L1)
        return eh(e);
    }
    function Rx() {
      return co.current !== null;
    }
    function iD(e) {
      {
        if (e.mode & Ie) {
          if (!ex())
            return;
        } else if (!b2() || zt !== hr || e.tag !== k && e.tag !== me && e.tag !== he)
          return;
        if (co.current === null) {
          var t = En;
          try {
            Qt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ct(e));
          } finally {
            t ? Qt(e) : bn();
          }
        }
      }
    }
    function oD(e) {
      e.tag !== Bu && ex() && co.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function fv(e) {
      ox = e;
    }
    var Ai = null, rd = null, lD = function(e) {
      Ai = e;
    };
    function ad(e) {
      {
        if (Ai === null)
          return e;
        var t = Ai(e);
        return t === void 0 ? e : t.current;
      }
    }
    function N1(e) {
      return ad(e);
    }
    function A1(e) {
      {
        if (Ai === null)
          return e;
        var t = Ai(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ad(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ve,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function wx(e, t) {
      {
        if (Ai === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case O: {
            typeof i == "function" && (l = !0);
            break;
          }
          case k: {
            (typeof i == "function" || s === Je) && (l = !0);
            break;
          }
          case me: {
            (s === ve || s === Je) && (l = !0);
            break;
          }
          case _e:
          case he: {
            (s === Lt || s === Je) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = Ai(a);
          if (f !== void 0 && f === Ai(i))
            return !0;
        }
        return !1;
      }
    }
    function Tx(e) {
      {
        if (Ai === null || typeof WeakSet != "function")
          return;
        rd === null && (rd = /* @__PURE__ */ new WeakSet()), rd.add(e);
      }
    }
    var uD = function(e, t) {
      {
        if (Ai === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Fl(), Pl(function() {
          z1(e.current, i, a);
        });
      }
    }, sD = function(e, t) {
      {
        if (e.context !== si)
          return;
        Fl(), Pl(function() {
          dv(t, e, null, null);
        });
      }
    };
    function z1(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, v = e.type, g = null;
        switch (f) {
          case k:
          case he:
          case O:
            g = v;
            break;
          case me:
            g = v.render;
            break;
        }
        if (Ai === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, w = !1;
        if (g !== null) {
          var z = Ai(g);
          z !== void 0 && (a.has(z) ? w = !0 : t.has(z) && (f === O ? w = !0 : x = !0));
        }
        if (rd !== null && (rd.has(e) || i !== null && rd.has(i)) && (w = !0), w && (e._debugNeedsRemount = !0), w || x) {
          var M = Qa(e, qe);
          M !== null && gr(M, e, qe, sn);
        }
        l !== null && !w && z1(l, t, a), s !== null && z1(s, t, a);
      }
    }
    var cD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return U1(e.current, i, a), a;
      }
    };
    function U1(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, v = null;
        switch (s) {
          case k:
          case he:
          case O:
            v = f;
            break;
          case me:
            v = f.render;
            break;
        }
        var g = !1;
        v !== null && t.has(v) && (g = !0), g ? fD(e, a) : i !== null && U1(i, t, a), l !== null && U1(l, t, a);
      }
    }
    function fD(e, t) {
      {
        var a = dD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case P:
              t.add(i.stateNode);
              return;
            case H:
              t.add(i.stateNode.containerInfo);
              return;
            case U:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function dD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === P)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var j1;
    {
      j1 = !1;
      try {
        var bx = Object.preventExtensions({});
      } catch {
        j1 = !0;
      }
    }
    function pD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Qe, this.subtreeFlags = Qe, this.deletions = null, this.lanes = ie, this.childLanes = ie, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !j1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new pD(e, t, a, i);
    };
    function P1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vD(e) {
      return typeof e == "function" && !P1(e) && e.defaultProps === void 0;
    }
    function hD(e) {
      if (typeof e == "function")
        return P1(e) ? O : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ve)
          return me;
        if (t === Lt)
          return _e;
      }
      return F;
    }
    function fc(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Qe, a.subtreeFlags = Qe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ur, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case F:
        case k:
        case he:
          a.type = ad(e.type);
          break;
        case O:
          a.type = N1(e.type);
          break;
        case me:
          a.type = A1(e.type);
          break;
      }
      return a;
    }
    function mD(e, t) {
      e.flags &= ur | fn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ie, e.lanes = t, e.child = null, e.subtreeFlags = Qe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Qe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function yD(e, t, a) {
      var i;
      return e === im ? (i = Ie, t === !0 && (i |= bt, i |= xa)) : i = Ve, Ea && (i |= st), ci(U, null, null, i);
    }
    function F1(e, t, a, i, l, s) {
      var f = F, v = e;
      if (typeof e == "function")
        P1(e) ? (f = O, v = N1(v)) : v = ad(v);
      else if (typeof e == "string")
        f = P;
      else
        e: switch (e) {
          case ya:
            return ts(a.children, l, s, t);
          case mi:
            f = oe, l |= bt, (l & Ie) !== Ve && (l |= xa);
            break;
          case yi:
            return gD(a, l, s, t);
          case $e:
            return SD(a, l, s, t);
          case Dt:
            return CD(a, l, s, t);
          case rn:
            return _x(a, l, s, t);
          case cn:
          case Et:
          case Rr:
          case gi:
          case Pn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case D:
                  f = de;
                  break e;
                case se:
                  f = Se;
                  break e;
                case ve:
                  f = me, v = A1(v);
                  break e;
                case Lt:
                  f = _e;
                  break e;
                case Je:
                  f = ot, v = null;
                  break e;
              }
            var g = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var x = i ? ct(i) : null;
              x && (g += `

Check the render method of \`` + x + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
          }
        }
      var w = ci(f, a, t, l);
      return w.elementType = e, w.type = v, w.lanes = s, w._debugOwner = i, w;
    }
    function H1(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, v = F1(l, s, f, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function ts(e, t, a, i) {
      var l = ci(re, e, i, t);
      return l.lanes = a, l;
    }
    function gD(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = ci(Ee, e, i, t | st);
      return l.elementType = yi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function SD(e, t, a, i) {
      var l = ci(ue, e, i, t);
      return l.elementType = $e, l.lanes = a, l;
    }
    function CD(e, t, a, i) {
      var l = ci(lt, e, i, t);
      return l.elementType = Dt, l.lanes = a, l;
    }
    function _x(e, t, a, i) {
      var l = ci(Oe, e, i, t);
      l.elementType = rn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function V1(e, t, a) {
      var i = ci(G, e, null, t);
      return i.lanes = a, i;
    }
    function ED() {
      var e = ci(P, null, null, Ve);
      return e.elementType = "DELETED", e;
    }
    function xD(e) {
      var t = ci(at, null, null, Ve);
      return t.stateNode = e, t;
    }
    function B1(e, t, a) {
      var i = e.children !== null ? e.children : [], l = ci(H, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function Dx(e, t) {
      return e === null && (e = ci(F, null, null, Ve)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function RD(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Rg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vn, this.eventTimes = Us(ie), this.expirationTimes = Us(sn), this.pendingLanes = ie, this.suspendedLanes = ie, this.pingedLanes = ie, this.expiredLanes = ie, this.mutableReadLanes = ie, this.finishedLanes = ie, this.entangledLanes = ie, this.entanglements = Us(ie), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Os; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case im:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Bu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function kx(e, t, a, i, l, s, f, v, g, x) {
      var w = new RD(e, t, a, v, g), z = yD(t, s);
      w.current = z, z.stateNode = w;
      {
        var M = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = M;
      }
      return t0(z), w;
    }
    var $1 = "18.3.1";
    function wD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return In(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Lr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var I1, Y1;
    I1 = !1, Y1 = {};
    function Ox(e) {
      if (!e)
        return si;
      var t = Aa(e), a = ob(t);
      if (t.tag === O) {
        var i = t.type;
        if ($o(i))
          return rC(t, i, a);
      }
      return a;
    }
    function TD(e, t) {
      {
        var a = Aa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Pa(a);
        if (l === null)
          return null;
        if (l.mode & bt) {
          var s = ct(a) || "Component";
          if (!Y1[s]) {
            Y1[s] = !0;
            var f = En;
            try {
              Qt(l), a.mode & bt ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Qt(f) : bn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function Lx(e, t, a, i, l, s, f, v) {
      var g = !1, x = null;
      return kx(e, t, g, x, a, i, l, s, f);
    }
    function Mx(e, t, a, i, l, s, f, v, g, x) {
      var w = !0, z = kx(a, i, w, e, l, s, f, v, g);
      z.context = Ox(null);
      var M = z.current, Y = ba(), Q = Ju(M), Z = Al(Y, Q);
      return Z.callback = t ?? null, Yu(M, Z, Q), M2(z, Q, Y), z;
    }
    function dv(e, t, a, i) {
      $d(t, e);
      var l = t.current, s = ba(), f = Ju(l);
      Wd(f);
      var v = Ox(a);
      t.context === null ? t.context = v : t.pendingContext = v, Gr && En !== null && !I1 && (I1 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ct(En) || "Unknown"));
      var g = Al(s, f);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var x = Yu(l, g, f);
      return x !== null && (gr(x, l, f, s), Cm(x, l, f)), f;
    }
    function sy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case P:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function bD(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (cf(t)) {
            var a = Gd(t);
            U2(t, a);
          }
          break;
        }
        case ue: {
          Pl(function() {
            var l = Qa(e, qe);
            if (l !== null) {
              var s = ba();
              gr(l, e, qe, s);
            }
          });
          var i = qe;
          W1(e, i);
          break;
        }
      }
    }
    function Nx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = yh(a.retryLane, t));
    }
    function W1(e, t) {
      Nx(e, t);
      var a = e.alternate;
      a && Nx(a, t);
    }
    function _D(e) {
      if (e.tag === ue) {
        var t = Ms, a = Qa(e, t);
        if (a !== null) {
          var i = ba();
          gr(a, e, t, i);
        }
        W1(e, t);
      }
    }
    function DD(e) {
      if (e.tag === ue) {
        var t = Ju(e), a = Qa(e, t);
        if (a !== null) {
          var i = ba();
          gr(a, e, t, i);
        }
        W1(e, t);
      }
    }
    function Ax(e) {
      var t = Jv(e);
      return t === null ? null : t.stateNode;
    }
    var zx = function(e) {
      return null;
    };
    function kD(e) {
      return zx(e);
    }
    var Ux = function(e) {
      return !1;
    };
    function OD(e) {
      return Ux(e);
    }
    var jx = null, Px = null, Fx = null, Hx = null, Vx = null, Bx = null, $x = null, Ix = null, Yx = null;
    {
      var Wx = function(e, t, a) {
        var i = t[a], l = Nt(e) ? e.slice() : xt({}, e);
        return a + 1 === t.length ? (Nt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = Wx(e[i], t, a + 1), l);
      }, qx = function(e, t) {
        return Wx(e, t, 0);
      }, Qx = function(e, t, a, i) {
        var l = t[i], s = Nt(e) ? e.slice() : xt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], Nt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = Qx(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, Gx = function(e, t, a) {
        if (t.length !== a.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Qx(e, t, a, 0);
      }, Xx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = Nt(e) ? e.slice() : xt({}, e);
        return s[l] = Xx(e[l], t, a + 1, i), s;
      }, Kx = function(e, t, a) {
        return Xx(e, t, 0, a);
      }, q1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      jx = function(e, t, a, i) {
        var l = q1(e, t);
        if (l !== null) {
          var s = Kx(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = xt({}, e.memoizedProps);
          var f = Qa(e, qe);
          f !== null && gr(f, e, qe, sn);
        }
      }, Px = function(e, t, a) {
        var i = q1(e, t);
        if (i !== null) {
          var l = qx(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = xt({}, e.memoizedProps);
          var s = Qa(e, qe);
          s !== null && gr(s, e, qe, sn);
        }
      }, Fx = function(e, t, a, i) {
        var l = q1(e, t);
        if (l !== null) {
          var s = Gx(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = xt({}, e.memoizedProps);
          var f = Qa(e, qe);
          f !== null && gr(f, e, qe, sn);
        }
      }, Hx = function(e, t, a) {
        e.pendingProps = Kx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, qe);
        i !== null && gr(i, e, qe, sn);
      }, Vx = function(e, t) {
        e.pendingProps = qx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, qe);
        a !== null && gr(a, e, qe, sn);
      }, Bx = function(e, t, a) {
        e.pendingProps = Gx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, qe);
        i !== null && gr(i, e, qe, sn);
      }, $x = function(e) {
        var t = Qa(e, qe);
        t !== null && gr(t, e, qe, sn);
      }, Ix = function(e) {
        zx = e;
      }, Yx = function(e) {
        Ux = e;
      };
    }
    function LD(e) {
      var t = Pa(e);
      return t === null ? null : t.stateNode;
    }
    function MD(e) {
      return null;
    }
    function ND() {
      return En;
    }
    function AD(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return Bd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: jx,
        overrideHookStateDeletePath: Px,
        overrideHookStateRenamePath: Fx,
        overrideProps: Hx,
        overridePropsDeletePath: Vx,
        overridePropsRenamePath: Bx,
        setErrorHandler: Ix,
        setSuspenseHandler: Yx,
        scheduleUpdate: $x,
        currentDispatcherRef: a,
        findHostInstanceByFiber: LD,
        findFiberByHostInstance: t || MD,
        // React Refresh
        findHostInstancesForRefresh: cD,
        scheduleRefresh: uD,
        scheduleRoot: sD,
        setRefreshHandler: lD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ND,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: $1
      });
    }
    var Zx = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Q1(e) {
      this._internalRoot = e;
    }
    cy.prototype.render = Q1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : fy(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Fn) {
          var i = Ax(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      dv(e, t, null, null);
    }, cy.prototype.unmount = Q1.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        cx() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Pl(function() {
          dv(null, e, null, null);
        }), ZS(t);
      }
    };
    function zD(e, t) {
      if (!fy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Jx(e);
      var a = !1, i = !1, l = "", s = Zx;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ti && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = Lx(e, im, null, a, i, l, s);
      Zh(f.current, e);
      var v = e.nodeType === Fn ? e.parentNode : e;
      return gp(v), new Q1(f);
    }
    function cy(e) {
      this._internalRoot = e;
    }
    function UD(e) {
      e && Xy(e);
    }
    cy.prototype.unstable_scheduleHydration = UD;
    function jD(e, t, a) {
      if (!fy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Jx(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, v = "", g = Zx;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var x = Mx(t, null, e, im, i, s, f, v, g);
      if (Zh(x.current, e), gp(e), l)
        for (var w = 0; w < l.length; w++) {
          var z = l[w];
          Vb(x, z);
        }
      return new cy(x);
    }
    function fy(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === ii || e.nodeType === il || !te));
    }
    function pv(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === ii || e.nodeType === il || e.nodeType === Fn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Jx(e) {
      e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), kp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var PD = m.ReactCurrentOwner, eR;
    eR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Fn) {
        var t = Ax(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = G1(e), l = !!(i && Hu(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function G1(e) {
      return e ? e.nodeType === ii ? e.documentElement : e.firstChild : null;
    }
    function tR() {
    }
    function FD(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var M = sy(f);
            s.call(M);
          };
        }
        var f = Mx(
          t,
          i,
          e,
          Bu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          tR
        );
        e._reactRootContainer = f, Zh(f.current, e);
        var v = e.nodeType === Fn ? e.parentNode : e;
        return gp(v), Pl(), f;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var x = i;
          i = function() {
            var M = sy(w);
            x.call(M);
          };
        }
        var w = Lx(
          e,
          Bu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          tR
        );
        e._reactRootContainer = w, Zh(w.current, e);
        var z = e.nodeType === Fn ? e.parentNode : e;
        return gp(z), Pl(function() {
          dv(t, w, a, i);
        }), w;
      }
    }
    function HD(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function dy(e, t, a, i, l) {
      eR(a), HD(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = FD(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var v = l;
          l = function() {
            var g = sy(f);
            v.call(g);
          };
        }
        dv(t, f, e, l);
      }
      return sy(f);
    }
    var nR = !1;
    function VD(e) {
      {
        nR || (nR = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = PD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Kr ? e : TD(e, "findDOMNode");
    }
    function BD(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = kp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return dy(null, e, t, !0, a);
    }
    function $D(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = kp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return dy(null, e, t, !1, a);
    }
    function ID(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Rs(e))
        throw new Error("parentComponent must be a valid React Component");
      return dy(e, t, a, !1, i);
    }
    var rR = !1;
    function YD(e) {
      if (rR || (rR = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !pv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = kp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = G1(e), i = a && !Hu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Pl(function() {
          dy(null, null, e, !1, function() {
            e._reactRootContainer = null, ZS(e);
          });
        }), !0;
      } else {
        {
          var l = G1(e), s = !!(l && Hu(l)), f = e.nodeType === Kr && pv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    bu(bD), Qy(_D), df(DD), Ch(Ba), Eh(_r), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xv(qw), Dc(b1, j2, Pl);
    function WD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fy(t))
        throw new Error("Target container is not a DOM element.");
      return wD(e, t, null, a);
    }
    function qD(e, t, a, i) {
      return ID(e, t, a, i);
    }
    var X1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Hu, zf, Jh, _c, Cs, b1]
    };
    function QD(e, t) {
      return X1.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), zD(e, t);
    }
    function GD(e, t, a) {
      return X1.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jD(e, t, a);
    }
    function XD(e) {
      return cx() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Pl(e);
    }
    var KD = AD({
      findFiberByHostInstance: Xs,
      bundleType: 1,
      version: $1,
      rendererPackageName: "react-dom"
    });
    if (!KD && Zt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var aR = window.location.protocol;
      /^(https?|file):$/.test(aR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (aR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X1, Ja.createPortal = WD, Ja.createRoot = QD, Ja.findDOMNode = VD, Ja.flushSync = XD, Ja.hydrate = BD, Ja.hydrateRoot = GD, Ja.render = $D, Ja.unmountComponentAtNode = YD, Ja.unstable_batchedUpdates = b1, Ja.unstable_renderSubtreeIntoContainer = qD, Ja.version = $1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ja;
}
function DR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(DR);
    } catch (d) {
      console.error(d);
    }
  }
}
process.env.NODE_ENV === "production" ? (DR(), rS.exports = fk()) : rS.exports = dk();
var fS = rS.exports;
const pk = /* @__PURE__ */ TR(fS);
var kR = K.forwardRef((d, h) => {
  const { children: m, ...E } = d, R = K.Children.toArray(m), T = R.find(vk);
  if (T) {
    const y = T.props.children, N = R.map((k) => k === T ? K.Children.count(y) > 1 ? K.Children.only(null) : K.isValidElement(y) ? y.props.children : null : k);
    return /* @__PURE__ */ ae.jsx(aS, { ...E, ref: h, children: K.isValidElement(y) ? K.cloneElement(y, void 0, N) : null });
  }
  return /* @__PURE__ */ ae.jsx(aS, { ...E, ref: h, children: m });
});
kR.displayName = "Slot";
var aS = K.forwardRef((d, h) => {
  const { children: m, ...E } = d;
  if (K.isValidElement(m)) {
    const R = mk(m);
    return K.cloneElement(m, {
      ...hk(E, m.props),
      // @ts-ignore
      ref: h ? bR(h, R) : R
    });
  }
  return K.Children.count(m) > 1 ? K.Children.only(null) : null;
});
aS.displayName = "SlotClone";
var OR = ({ children: d }) => /* @__PURE__ */ ae.jsx(ae.Fragment, { children: d });
function vk(d) {
  return K.isValidElement(d) && d.type === OR;
}
function hk(d, h) {
  const m = { ...h };
  for (const E in h) {
    const R = d[E], T = h[E];
    /^on[A-Z]/.test(E) ? R && T ? m[E] = (...N) => {
      T(...N), R(...N);
    } : R && (m[E] = R) : E === "style" ? m[E] = { ...R, ...T } : E === "className" && (m[E] = [R, T].filter(Boolean).join(" "));
  }
  return { ...d, ...m };
}
function mk(d) {
  var E, R;
  let h = (E = Object.getOwnPropertyDescriptor(d.props, "ref")) == null ? void 0 : E.get, m = h && "isReactWarning" in h && h.isReactWarning;
  return m ? d.ref : (h = (R = Object.getOwnPropertyDescriptor(d, "ref")) == null ? void 0 : R.get, m = h && "isReactWarning" in h && h.isReactWarning, m ? d.props.ref : d.props.ref || d.ref);
}
var yk = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], is = yk.reduce((d, h) => {
  const m = K.forwardRef((E, R) => {
    const { asChild: T, ...y } = E, N = T ? kR : h;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ ae.jsx(N, { ...y, ref: R });
  });
  return m.displayName = `Primitive.${h}`, { ...d, [h]: m };
}, {});
function gk(d, h) {
  d && fS.flushSync(() => d.dispatchEvent(h));
}
function sd(d) {
  const h = K.useRef(d);
  return K.useEffect(() => {
    h.current = d;
  }), K.useMemo(() => (...m) => {
    var E;
    return (E = h.current) == null ? void 0 : E.call(h, ...m);
  }, []);
}
function Sk(d, h = globalThis == null ? void 0 : globalThis.document) {
  const m = sd(d);
  K.useEffect(() => {
    const E = (R) => {
      R.key === "Escape" && m(R);
    };
    return h.addEventListener("keydown", E, { capture: !0 }), () => h.removeEventListener("keydown", E, { capture: !0 });
  }, [m, h]);
}
var Ck = "DismissableLayer", iS = "dismissableLayer.update", Ek = "dismissableLayer.pointerDownOutside", xk = "dismissableLayer.focusOutside", hR, LR = K.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), MR = K.forwardRef(
  (d, h) => {
    const {
      disableOutsidePointerEvents: m = !1,
      onEscapeKeyDown: E,
      onPointerDownOutside: R,
      onFocusOutside: T,
      onInteractOutside: y,
      onDismiss: N,
      ...k
    } = d, O = K.useContext(LR), [F, U] = K.useState(null), H = (F == null ? void 0 : F.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, P] = K.useState({}), G = vc(h, (he) => U(he)), re = Array.from(O.layers), [oe] = [...O.layersWithOutsidePointerEventsDisabled].slice(-1), Se = re.indexOf(oe), de = F ? re.indexOf(F) : -1, me = O.layersWithOutsidePointerEventsDisabled.size > 0, Ee = de >= Se, ue = Tk((he) => {
      const ot = he.target, Rt = [...O.branches].some((at) => at.contains(ot));
      !Ee || Rt || (R == null || R(he), y == null || y(he), he.defaultPrevented || N == null || N());
    }, H), _e = bk((he) => {
      const ot = he.target;
      [...O.branches].some((at) => at.contains(ot)) || (T == null || T(he), y == null || y(he), he.defaultPrevented || N == null || N());
    }, H);
    return Sk((he) => {
      de === O.layers.size - 1 && (E == null || E(he), !he.defaultPrevented && N && (he.preventDefault(), N()));
    }, H), K.useEffect(() => {
      if (F)
        return m && (O.layersWithOutsidePointerEventsDisabled.size === 0 && (hR = H.body.style.pointerEvents, H.body.style.pointerEvents = "none"), O.layersWithOutsidePointerEventsDisabled.add(F)), O.layers.add(F), mR(), () => {
          m && O.layersWithOutsidePointerEventsDisabled.size === 1 && (H.body.style.pointerEvents = hR);
        };
    }, [F, H, m, O]), K.useEffect(() => () => {
      F && (O.layers.delete(F), O.layersWithOutsidePointerEventsDisabled.delete(F), mR());
    }, [F, O]), K.useEffect(() => {
      const he = () => P({});
      return document.addEventListener(iS, he), () => document.removeEventListener(iS, he);
    }, []), /* @__PURE__ */ ae.jsx(
      is.div,
      {
        ...k,
        ref: G,
        style: {
          pointerEvents: me ? Ee ? "auto" : "none" : void 0,
          ...d.style
        },
        onFocusCapture: Vl(d.onFocusCapture, _e.onFocusCapture),
        onBlurCapture: Vl(d.onBlurCapture, _e.onBlurCapture),
        onPointerDownCapture: Vl(
          d.onPointerDownCapture,
          ue.onPointerDownCapture
        )
      }
    );
  }
);
MR.displayName = Ck;
var Rk = "DismissableLayerBranch", wk = K.forwardRef((d, h) => {
  const m = K.useContext(LR), E = K.useRef(null), R = vc(h, E);
  return K.useEffect(() => {
    const T = E.current;
    if (T)
      return m.branches.add(T), () => {
        m.branches.delete(T);
      };
  }, [m.branches]), /* @__PURE__ */ ae.jsx(is.div, { ...d, ref: R });
});
wk.displayName = Rk;
function Tk(d, h = globalThis == null ? void 0 : globalThis.document) {
  const m = sd(d), E = K.useRef(!1), R = K.useRef(() => {
  });
  return K.useEffect(() => {
    const T = (N) => {
      if (N.target && !E.current) {
        let k = function() {
          NR(
            Ek,
            m,
            O,
            { discrete: !0 }
          );
        };
        const O = { originalEvent: N };
        N.pointerType === "touch" ? (h.removeEventListener("click", R.current), R.current = k, h.addEventListener("click", R.current, { once: !0 })) : k();
      } else
        h.removeEventListener("click", R.current);
      E.current = !1;
    }, y = window.setTimeout(() => {
      h.addEventListener("pointerdown", T);
    }, 0);
    return () => {
      window.clearTimeout(y), h.removeEventListener("pointerdown", T), h.removeEventListener("click", R.current);
    };
  }, [h, m]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => E.current = !0
  };
}
function bk(d, h = globalThis == null ? void 0 : globalThis.document) {
  const m = sd(d), E = K.useRef(!1);
  return K.useEffect(() => {
    const R = (T) => {
      T.target && !E.current && NR(xk, m, { originalEvent: T }, {
        discrete: !1
      });
    };
    return h.addEventListener("focusin", R), () => h.removeEventListener("focusin", R);
  }, [h, m]), {
    onFocusCapture: () => E.current = !0,
    onBlurCapture: () => E.current = !1
  };
}
function mR() {
  const d = new CustomEvent(iS);
  document.dispatchEvent(d);
}
function NR(d, h, m, { discrete: E }) {
  const R = m.originalEvent.target, T = new CustomEvent(d, { bubbles: !1, cancelable: !0, detail: m });
  h && R.addEventListener(d, h, { once: !0 }), E ? gk(R, T) : R.dispatchEvent(T);
}
var dc = globalThis != null && globalThis.document ? K.useLayoutEffect : () => {
}, _k = ik.useId || (() => {
}), Dk = 0;
function kk(d) {
  const [h, m] = K.useState(_k());
  return dc(() => {
    m((E) => E ?? String(Dk++));
  }, [d]), h ? `radix-${h}` : "";
}
const Ok = ["top", "right", "bottom", "left"], ns = Math.min, di = Math.max, gy = Math.round, hy = Math.floor, Zo = (d) => ({
  x: d,
  y: d
}), Lk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Mk = {
  start: "end",
  end: "start"
};
function oS(d, h, m) {
  return di(d, ns(h, m));
}
function Bl(d, h) {
  return typeof d == "function" ? d(h) : d;
}
function $l(d) {
  return d.split("-")[0];
}
function cd(d) {
  return d.split("-")[1];
}
function dS(d) {
  return d === "x" ? "y" : "x";
}
function pS(d) {
  return d === "y" ? "height" : "width";
}
function rs(d) {
  return ["top", "bottom"].includes($l(d)) ? "y" : "x";
}
function vS(d) {
  return dS(rs(d));
}
function Nk(d, h, m) {
  m === void 0 && (m = !1);
  const E = cd(d), R = vS(d), T = pS(R);
  let y = R === "x" ? E === (m ? "end" : "start") ? "right" : "left" : E === "start" ? "bottom" : "top";
  return h.reference[T] > h.floating[T] && (y = Sy(y)), [y, Sy(y)];
}
function Ak(d) {
  const h = Sy(d);
  return [lS(d), h, lS(h)];
}
function lS(d) {
  return d.replace(/start|end/g, (h) => Mk[h]);
}
function zk(d, h, m) {
  const E = ["left", "right"], R = ["right", "left"], T = ["top", "bottom"], y = ["bottom", "top"];
  switch (d) {
    case "top":
    case "bottom":
      return m ? h ? R : E : h ? E : R;
    case "left":
    case "right":
      return h ? T : y;
    default:
      return [];
  }
}
function Uk(d, h, m, E) {
  const R = cd(d);
  let T = zk($l(d), m === "start", E);
  return R && (T = T.map((y) => y + "-" + R), h && (T = T.concat(T.map(lS)))), T;
}
function Sy(d) {
  return d.replace(/left|right|bottom|top/g, (h) => Lk[h]);
}
function jk(d) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...d
  };
}
function AR(d) {
  return typeof d != "number" ? jk(d) : {
    top: d,
    right: d,
    bottom: d,
    left: d
  };
}
function Cy(d) {
  const {
    x: h,
    y: m,
    width: E,
    height: R
  } = d;
  return {
    width: E,
    height: R,
    top: m,
    left: h,
    right: h + E,
    bottom: m + R,
    x: h,
    y: m
  };
}
function yR(d, h, m) {
  let {
    reference: E,
    floating: R
  } = d;
  const T = rs(h), y = vS(h), N = pS(y), k = $l(h), O = T === "y", F = E.x + E.width / 2 - R.width / 2, U = E.y + E.height / 2 - R.height / 2, H = E[N] / 2 - R[N] / 2;
  let P;
  switch (k) {
    case "top":
      P = {
        x: F,
        y: E.y - R.height
      };
      break;
    case "bottom":
      P = {
        x: F,
        y: E.y + E.height
      };
      break;
    case "right":
      P = {
        x: E.x + E.width,
        y: U
      };
      break;
    case "left":
      P = {
        x: E.x - R.width,
        y: U
      };
      break;
    default:
      P = {
        x: E.x,
        y: E.y
      };
  }
  switch (cd(h)) {
    case "start":
      P[y] -= H * (m && O ? -1 : 1);
      break;
    case "end":
      P[y] += H * (m && O ? -1 : 1);
      break;
  }
  return P;
}
const Pk = async (d, h, m) => {
  const {
    placement: E = "bottom",
    strategy: R = "absolute",
    middleware: T = [],
    platform: y
  } = m, N = T.filter(Boolean), k = await (y.isRTL == null ? void 0 : y.isRTL(h));
  let O = await y.getElementRects({
    reference: d,
    floating: h,
    strategy: R
  }), {
    x: F,
    y: U
  } = yR(O, E, k), H = E, P = {}, G = 0;
  for (let re = 0; re < N.length; re++) {
    const {
      name: oe,
      fn: Se
    } = N[re], {
      x: de,
      y: me,
      data: Ee,
      reset: ue
    } = await Se({
      x: F,
      y: U,
      initialPlacement: E,
      placement: H,
      strategy: R,
      middlewareData: P,
      rects: O,
      platform: y,
      elements: {
        reference: d,
        floating: h
      }
    });
    F = de ?? F, U = me ?? U, P = {
      ...P,
      [oe]: {
        ...P[oe],
        ...Ee
      }
    }, ue && G <= 50 && (G++, typeof ue == "object" && (ue.placement && (H = ue.placement), ue.rects && (O = ue.rects === !0 ? await y.getElementRects({
      reference: d,
      floating: h,
      strategy: R
    }) : ue.rects), {
      x: F,
      y: U
    } = yR(O, H, k)), re = -1);
  }
  return {
    x: F,
    y: U,
    placement: H,
    strategy: R,
    middlewareData: P
  };
};
async function Sv(d, h) {
  var m;
  h === void 0 && (h = {});
  const {
    x: E,
    y: R,
    platform: T,
    rects: y,
    elements: N,
    strategy: k
  } = d, {
    boundary: O = "clippingAncestors",
    rootBoundary: F = "viewport",
    elementContext: U = "floating",
    altBoundary: H = !1,
    padding: P = 0
  } = Bl(h, d), G = AR(P), oe = N[H ? U === "floating" ? "reference" : "floating" : U], Se = Cy(await T.getClippingRect({
    element: (m = await (T.isElement == null ? void 0 : T.isElement(oe))) == null || m ? oe : oe.contextElement || await (T.getDocumentElement == null ? void 0 : T.getDocumentElement(N.floating)),
    boundary: O,
    rootBoundary: F,
    strategy: k
  })), de = U === "floating" ? {
    x: E,
    y: R,
    width: y.floating.width,
    height: y.floating.height
  } : y.reference, me = await (T.getOffsetParent == null ? void 0 : T.getOffsetParent(N.floating)), Ee = await (T.isElement == null ? void 0 : T.isElement(me)) ? await (T.getScale == null ? void 0 : T.getScale(me)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, ue = Cy(T.convertOffsetParentRelativeRectToViewportRelativeRect ? await T.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: N,
    rect: de,
    offsetParent: me,
    strategy: k
  }) : de);
  return {
    top: (Se.top - ue.top + G.top) / Ee.y,
    bottom: (ue.bottom - Se.bottom + G.bottom) / Ee.y,
    left: (Se.left - ue.left + G.left) / Ee.x,
    right: (ue.right - Se.right + G.right) / Ee.x
  };
}
const Fk = (d) => ({
  name: "arrow",
  options: d,
  async fn(h) {
    const {
      x: m,
      y: E,
      placement: R,
      rects: T,
      platform: y,
      elements: N,
      middlewareData: k
    } = h, {
      element: O,
      padding: F = 0
    } = Bl(d, h) || {};
    if (O == null)
      return {};
    const U = AR(F), H = {
      x: m,
      y: E
    }, P = vS(R), G = pS(P), re = await y.getDimensions(O), oe = P === "y", Se = oe ? "top" : "left", de = oe ? "bottom" : "right", me = oe ? "clientHeight" : "clientWidth", Ee = T.reference[G] + T.reference[P] - H[P] - T.floating[G], ue = H[P] - T.reference[P], _e = await (y.getOffsetParent == null ? void 0 : y.getOffsetParent(O));
    let he = _e ? _e[me] : 0;
    (!he || !await (y.isElement == null ? void 0 : y.isElement(_e))) && (he = N.floating[me] || T.floating[G]);
    const ot = Ee / 2 - ue / 2, Rt = he / 2 - re[G] / 2 - 1, at = ns(U[Se], Rt), lt = ns(U[de], Rt), _t = at, Oe = he - re[G] - lt, Ue = he / 2 - re[G] / 2 + ot, ht = oS(_t, Ue, Oe), Ge = !k.arrow && cd(R) != null && Ue !== ht && T.reference[G] / 2 - (Ue < _t ? at : lt) - re[G] / 2 < 0, xe = Ge ? Ue < _t ? Ue - _t : Ue - Oe : 0;
    return {
      [P]: H[P] + xe,
      data: {
        [P]: ht,
        centerOffset: Ue - ht - xe,
        ...Ge && {
          alignmentOffset: xe
        }
      },
      reset: Ge
    };
  }
}), Hk = function(d) {
  return d === void 0 && (d = {}), {
    name: "flip",
    options: d,
    async fn(h) {
      var m, E;
      const {
        placement: R,
        middlewareData: T,
        rects: y,
        initialPlacement: N,
        platform: k,
        elements: O
      } = h, {
        mainAxis: F = !0,
        crossAxis: U = !0,
        fallbackPlacements: H,
        fallbackStrategy: P = "bestFit",
        fallbackAxisSideDirection: G = "none",
        flipAlignment: re = !0,
        ...oe
      } = Bl(d, h);
      if ((m = T.arrow) != null && m.alignmentOffset)
        return {};
      const Se = $l(R), de = rs(N), me = $l(N) === N, Ee = await (k.isRTL == null ? void 0 : k.isRTL(O.floating)), ue = H || (me || !re ? [Sy(N)] : Ak(N)), _e = G !== "none";
      !H && _e && ue.push(...Uk(N, re, G, Ee));
      const he = [N, ...ue], ot = await Sv(h, oe), Rt = [];
      let at = ((E = T.flip) == null ? void 0 : E.overflows) || [];
      if (F && Rt.push(ot[Se]), U) {
        const Ue = Nk(R, y, Ee);
        Rt.push(ot[Ue[0]], ot[Ue[1]]);
      }
      if (at = [...at, {
        placement: R,
        overflows: Rt
      }], !Rt.every((Ue) => Ue <= 0)) {
        var lt, _t;
        const Ue = (((lt = T.flip) == null ? void 0 : lt.index) || 0) + 1, ht = he[Ue];
        if (ht)
          return {
            data: {
              index: Ue,
              overflows: at
            },
            reset: {
              placement: ht
            }
          };
        let Ge = (_t = at.filter((xe) => xe.overflows[0] <= 0).sort((xe, ee) => xe.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : _t.placement;
        if (!Ge)
          switch (P) {
            case "bestFit": {
              var Oe;
              const xe = (Oe = at.filter((ee) => {
                if (_e) {
                  const De = rs(ee.placement);
                  return De === de || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  De === "y";
                }
                return !0;
              }).map((ee) => [ee.placement, ee.overflows.filter((De) => De > 0).reduce((De, Ce) => De + Ce, 0)]).sort((ee, De) => ee[1] - De[1])[0]) == null ? void 0 : Oe[0];
              xe && (Ge = xe);
              break;
            }
            case "initialPlacement":
              Ge = N;
              break;
          }
        if (R !== Ge)
          return {
            reset: {
              placement: Ge
            }
          };
      }
      return {};
    }
  };
};
function gR(d, h) {
  return {
    top: d.top - h.height,
    right: d.right - h.width,
    bottom: d.bottom - h.height,
    left: d.left - h.width
  };
}
function SR(d) {
  return Ok.some((h) => d[h] >= 0);
}
const Vk = function(d) {
  return d === void 0 && (d = {}), {
    name: "hide",
    options: d,
    async fn(h) {
      const {
        rects: m
      } = h, {
        strategy: E = "referenceHidden",
        ...R
      } = Bl(d, h);
      switch (E) {
        case "referenceHidden": {
          const T = await Sv(h, {
            ...R,
            elementContext: "reference"
          }), y = gR(T, m.reference);
          return {
            data: {
              referenceHiddenOffsets: y,
              referenceHidden: SR(y)
            }
          };
        }
        case "escaped": {
          const T = await Sv(h, {
            ...R,
            altBoundary: !0
          }), y = gR(T, m.floating);
          return {
            data: {
              escapedOffsets: y,
              escaped: SR(y)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Bk(d, h) {
  const {
    placement: m,
    platform: E,
    elements: R
  } = d, T = await (E.isRTL == null ? void 0 : E.isRTL(R.floating)), y = $l(m), N = cd(m), k = rs(m) === "y", O = ["left", "top"].includes(y) ? -1 : 1, F = T && k ? -1 : 1, U = Bl(h, d);
  let {
    mainAxis: H,
    crossAxis: P,
    alignmentAxis: G
  } = typeof U == "number" ? {
    mainAxis: U,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: U.mainAxis || 0,
    crossAxis: U.crossAxis || 0,
    alignmentAxis: U.alignmentAxis
  };
  return N && typeof G == "number" && (P = N === "end" ? G * -1 : G), k ? {
    x: P * F,
    y: H * O
  } : {
    x: H * O,
    y: P * F
  };
}
const $k = function(d) {
  return d === void 0 && (d = 0), {
    name: "offset",
    options: d,
    async fn(h) {
      var m, E;
      const {
        x: R,
        y: T,
        placement: y,
        middlewareData: N
      } = h, k = await Bk(h, d);
      return y === ((m = N.offset) == null ? void 0 : m.placement) && (E = N.arrow) != null && E.alignmentOffset ? {} : {
        x: R + k.x,
        y: T + k.y,
        data: {
          ...k,
          placement: y
        }
      };
    }
  };
}, Ik = function(d) {
  return d === void 0 && (d = {}), {
    name: "shift",
    options: d,
    async fn(h) {
      const {
        x: m,
        y: E,
        placement: R
      } = h, {
        mainAxis: T = !0,
        crossAxis: y = !1,
        limiter: N = {
          fn: (oe) => {
            let {
              x: Se,
              y: de
            } = oe;
            return {
              x: Se,
              y: de
            };
          }
        },
        ...k
      } = Bl(d, h), O = {
        x: m,
        y: E
      }, F = await Sv(h, k), U = rs($l(R)), H = dS(U);
      let P = O[H], G = O[U];
      if (T) {
        const oe = H === "y" ? "top" : "left", Se = H === "y" ? "bottom" : "right", de = P + F[oe], me = P - F[Se];
        P = oS(de, P, me);
      }
      if (y) {
        const oe = U === "y" ? "top" : "left", Se = U === "y" ? "bottom" : "right", de = G + F[oe], me = G - F[Se];
        G = oS(de, G, me);
      }
      const re = N.fn({
        ...h,
        [H]: P,
        [U]: G
      });
      return {
        ...re,
        data: {
          x: re.x - m,
          y: re.y - E,
          enabled: {
            [H]: T,
            [U]: y
          }
        }
      };
    }
  };
}, Yk = function(d) {
  return d === void 0 && (d = {}), {
    options: d,
    fn(h) {
      const {
        x: m,
        y: E,
        placement: R,
        rects: T,
        middlewareData: y
      } = h, {
        offset: N = 0,
        mainAxis: k = !0,
        crossAxis: O = !0
      } = Bl(d, h), F = {
        x: m,
        y: E
      }, U = rs(R), H = dS(U);
      let P = F[H], G = F[U];
      const re = Bl(N, h), oe = typeof re == "number" ? {
        mainAxis: re,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...re
      };
      if (k) {
        const me = H === "y" ? "height" : "width", Ee = T.reference[H] - T.floating[me] + oe.mainAxis, ue = T.reference[H] + T.reference[me] - oe.mainAxis;
        P < Ee ? P = Ee : P > ue && (P = ue);
      }
      if (O) {
        var Se, de;
        const me = H === "y" ? "width" : "height", Ee = ["top", "left"].includes($l(R)), ue = T.reference[U] - T.floating[me] + (Ee && ((Se = y.offset) == null ? void 0 : Se[U]) || 0) + (Ee ? 0 : oe.crossAxis), _e = T.reference[U] + T.reference[me] + (Ee ? 0 : ((de = y.offset) == null ? void 0 : de[U]) || 0) - (Ee ? oe.crossAxis : 0);
        G < ue ? G = ue : G > _e && (G = _e);
      }
      return {
        [H]: P,
        [U]: G
      };
    }
  };
}, Wk = function(d) {
  return d === void 0 && (d = {}), {
    name: "size",
    options: d,
    async fn(h) {
      var m, E;
      const {
        placement: R,
        rects: T,
        platform: y,
        elements: N
      } = h, {
        apply: k = () => {
        },
        ...O
      } = Bl(d, h), F = await Sv(h, O), U = $l(R), H = cd(R), P = rs(R) === "y", {
        width: G,
        height: re
      } = T.floating;
      let oe, Se;
      U === "top" || U === "bottom" ? (oe = U, Se = H === (await (y.isRTL == null ? void 0 : y.isRTL(N.floating)) ? "start" : "end") ? "left" : "right") : (Se = U, oe = H === "end" ? "top" : "bottom");
      const de = re - F.top - F.bottom, me = G - F.left - F.right, Ee = ns(re - F[oe], de), ue = ns(G - F[Se], me), _e = !h.middlewareData.shift;
      let he = Ee, ot = ue;
      if ((m = h.middlewareData.shift) != null && m.enabled.x && (ot = me), (E = h.middlewareData.shift) != null && E.enabled.y && (he = de), _e && !H) {
        const at = di(F.left, 0), lt = di(F.right, 0), _t = di(F.top, 0), Oe = di(F.bottom, 0);
        P ? ot = G - 2 * (at !== 0 || lt !== 0 ? at + lt : di(F.left, F.right)) : he = re - 2 * (_t !== 0 || Oe !== 0 ? _t + Oe : di(F.top, F.bottom));
      }
      await k({
        ...h,
        availableWidth: ot,
        availableHeight: he
      });
      const Rt = await y.getDimensions(N.floating);
      return G !== Rt.width || re !== Rt.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function xy() {
  return typeof window < "u";
}
function fd(d) {
  return zR(d) ? (d.nodeName || "").toLowerCase() : "#document";
}
function pi(d) {
  var h;
  return (d == null || (h = d.ownerDocument) == null ? void 0 : h.defaultView) || window;
}
function el(d) {
  var h;
  return (h = (zR(d) ? d.ownerDocument : d.document) || window.document) == null ? void 0 : h.documentElement;
}
function zR(d) {
  return xy() ? d instanceof Node || d instanceof pi(d).Node : !1;
}
function fo(d) {
  return xy() ? d instanceof Element || d instanceof pi(d).Element : !1;
}
function Jo(d) {
  return xy() ? d instanceof HTMLElement || d instanceof pi(d).HTMLElement : !1;
}
function CR(d) {
  return !xy() || typeof ShadowRoot > "u" ? !1 : d instanceof ShadowRoot || d instanceof pi(d).ShadowRoot;
}
function xv(d) {
  const {
    overflow: h,
    overflowX: m,
    overflowY: E,
    display: R
  } = po(d);
  return /auto|scroll|overlay|hidden|clip/.test(h + E + m) && !["inline", "contents"].includes(R);
}
function qk(d) {
  return ["table", "td", "th"].includes(fd(d));
}
function Ry(d) {
  return [":popover-open", ":modal"].some((h) => {
    try {
      return d.matches(h);
    } catch {
      return !1;
    }
  });
}
function hS(d) {
  const h = mS(), m = fo(d) ? po(d) : d;
  return m.transform !== "none" || m.perspective !== "none" || (m.containerType ? m.containerType !== "normal" : !1) || !h && (m.backdropFilter ? m.backdropFilter !== "none" : !1) || !h && (m.filter ? m.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((E) => (m.willChange || "").includes(E)) || ["paint", "layout", "strict", "content"].some((E) => (m.contain || "").includes(E));
}
function Qk(d) {
  let h = as(d);
  for (; Jo(h) && !ld(h); ) {
    if (hS(h))
      return h;
    if (Ry(h))
      return null;
    h = as(h);
  }
  return null;
}
function mS() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ld(d) {
  return ["html", "body", "#document"].includes(fd(d));
}
function po(d) {
  return pi(d).getComputedStyle(d);
}
function wy(d) {
  return fo(d) ? {
    scrollLeft: d.scrollLeft,
    scrollTop: d.scrollTop
  } : {
    scrollLeft: d.scrollX,
    scrollTop: d.scrollY
  };
}
function as(d) {
  if (fd(d) === "html")
    return d;
  const h = (
    // Step into the shadow DOM of the parent of a slotted node.
    d.assignedSlot || // DOM Element detected.
    d.parentNode || // ShadowRoot detected.
    CR(d) && d.host || // Fallback.
    el(d)
  );
  return CR(h) ? h.host : h;
}
function UR(d) {
  const h = as(d);
  return ld(h) ? d.ownerDocument ? d.ownerDocument.body : d.body : Jo(h) && xv(h) ? h : UR(h);
}
function Cv(d, h, m) {
  var E;
  h === void 0 && (h = []), m === void 0 && (m = !0);
  const R = UR(d), T = R === ((E = d.ownerDocument) == null ? void 0 : E.body), y = pi(R);
  if (T) {
    const N = uS(y);
    return h.concat(y, y.visualViewport || [], xv(R) ? R : [], N && m ? Cv(N) : []);
  }
  return h.concat(R, Cv(R, [], m));
}
function uS(d) {
  return d.parent && Object.getPrototypeOf(d.parent) ? d.frameElement : null;
}
function jR(d) {
  const h = po(d);
  let m = parseFloat(h.width) || 0, E = parseFloat(h.height) || 0;
  const R = Jo(d), T = R ? d.offsetWidth : m, y = R ? d.offsetHeight : E, N = gy(m) !== T || gy(E) !== y;
  return N && (m = T, E = y), {
    width: m,
    height: E,
    $: N
  };
}
function yS(d) {
  return fo(d) ? d : d.contextElement;
}
function od(d) {
  const h = yS(d);
  if (!Jo(h))
    return Zo(1);
  const m = h.getBoundingClientRect(), {
    width: E,
    height: R,
    $: T
  } = jR(h);
  let y = (T ? gy(m.width) : m.width) / E, N = (T ? gy(m.height) : m.height) / R;
  return (!y || !Number.isFinite(y)) && (y = 1), (!N || !Number.isFinite(N)) && (N = 1), {
    x: y,
    y: N
  };
}
const Gk = /* @__PURE__ */ Zo(0);
function PR(d) {
  const h = pi(d);
  return !mS() || !h.visualViewport ? Gk : {
    x: h.visualViewport.offsetLeft,
    y: h.visualViewport.offsetTop
  };
}
function Xk(d, h, m) {
  return h === void 0 && (h = !1), !m || h && m !== pi(d) ? !1 : h;
}
function pc(d, h, m, E) {
  h === void 0 && (h = !1), m === void 0 && (m = !1);
  const R = d.getBoundingClientRect(), T = yS(d);
  let y = Zo(1);
  h && (E ? fo(E) && (y = od(E)) : y = od(d));
  const N = Xk(T, m, E) ? PR(T) : Zo(0);
  let k = (R.left + N.x) / y.x, O = (R.top + N.y) / y.y, F = R.width / y.x, U = R.height / y.y;
  if (T) {
    const H = pi(T), P = E && fo(E) ? pi(E) : E;
    let G = H, re = uS(G);
    for (; re && E && P !== G; ) {
      const oe = od(re), Se = re.getBoundingClientRect(), de = po(re), me = Se.left + (re.clientLeft + parseFloat(de.paddingLeft)) * oe.x, Ee = Se.top + (re.clientTop + parseFloat(de.paddingTop)) * oe.y;
      k *= oe.x, O *= oe.y, F *= oe.x, U *= oe.y, k += me, O += Ee, G = pi(re), re = uS(G);
    }
  }
  return Cy({
    width: F,
    height: U,
    x: k,
    y: O
  });
}
function gS(d, h) {
  const m = wy(d).scrollLeft;
  return h ? h.left + m : pc(el(d)).left + m;
}
function FR(d, h, m) {
  m === void 0 && (m = !1);
  const E = d.getBoundingClientRect(), R = E.left + h.scrollLeft - (m ? 0 : (
    // RTL <body> scrollbar.
    gS(d, E)
  )), T = E.top + h.scrollTop;
  return {
    x: R,
    y: T
  };
}
function Kk(d) {
  let {
    elements: h,
    rect: m,
    offsetParent: E,
    strategy: R
  } = d;
  const T = R === "fixed", y = el(E), N = h ? Ry(h.floating) : !1;
  if (E === y || N && T)
    return m;
  let k = {
    scrollLeft: 0,
    scrollTop: 0
  }, O = Zo(1);
  const F = Zo(0), U = Jo(E);
  if ((U || !U && !T) && ((fd(E) !== "body" || xv(y)) && (k = wy(E)), Jo(E))) {
    const P = pc(E);
    O = od(E), F.x = P.x + E.clientLeft, F.y = P.y + E.clientTop;
  }
  const H = y && !U && !T ? FR(y, k, !0) : Zo(0);
  return {
    width: m.width * O.x,
    height: m.height * O.y,
    x: m.x * O.x - k.scrollLeft * O.x + F.x + H.x,
    y: m.y * O.y - k.scrollTop * O.y + F.y + H.y
  };
}
function Zk(d) {
  return Array.from(d.getClientRects());
}
function Jk(d) {
  const h = el(d), m = wy(d), E = d.ownerDocument.body, R = di(h.scrollWidth, h.clientWidth, E.scrollWidth, E.clientWidth), T = di(h.scrollHeight, h.clientHeight, E.scrollHeight, E.clientHeight);
  let y = -m.scrollLeft + gS(d);
  const N = -m.scrollTop;
  return po(E).direction === "rtl" && (y += di(h.clientWidth, E.clientWidth) - R), {
    width: R,
    height: T,
    x: y,
    y: N
  };
}
function eO(d, h) {
  const m = pi(d), E = el(d), R = m.visualViewport;
  let T = E.clientWidth, y = E.clientHeight, N = 0, k = 0;
  if (R) {
    T = R.width, y = R.height;
    const O = mS();
    (!O || O && h === "fixed") && (N = R.offsetLeft, k = R.offsetTop);
  }
  return {
    width: T,
    height: y,
    x: N,
    y: k
  };
}
function tO(d, h) {
  const m = pc(d, !0, h === "fixed"), E = m.top + d.clientTop, R = m.left + d.clientLeft, T = Jo(d) ? od(d) : Zo(1), y = d.clientWidth * T.x, N = d.clientHeight * T.y, k = R * T.x, O = E * T.y;
  return {
    width: y,
    height: N,
    x: k,
    y: O
  };
}
function ER(d, h, m) {
  let E;
  if (h === "viewport")
    E = eO(d, m);
  else if (h === "document")
    E = Jk(el(d));
  else if (fo(h))
    E = tO(h, m);
  else {
    const R = PR(d);
    E = {
      x: h.x - R.x,
      y: h.y - R.y,
      width: h.width,
      height: h.height
    };
  }
  return Cy(E);
}
function HR(d, h) {
  const m = as(d);
  return m === h || !fo(m) || ld(m) ? !1 : po(m).position === "fixed" || HR(m, h);
}
function nO(d, h) {
  const m = h.get(d);
  if (m)
    return m;
  let E = Cv(d, [], !1).filter((N) => fo(N) && fd(N) !== "body"), R = null;
  const T = po(d).position === "fixed";
  let y = T ? as(d) : d;
  for (; fo(y) && !ld(y); ) {
    const N = po(y), k = hS(y);
    !k && N.position === "fixed" && (R = null), (T ? !k && !R : !k && N.position === "static" && !!R && ["absolute", "fixed"].includes(R.position) || xv(y) && !k && HR(d, y)) ? E = E.filter((F) => F !== y) : R = N, y = as(y);
  }
  return h.set(d, E), E;
}
function rO(d) {
  let {
    element: h,
    boundary: m,
    rootBoundary: E,
    strategy: R
  } = d;
  const y = [...m === "clippingAncestors" ? Ry(h) ? [] : nO(h, this._c) : [].concat(m), E], N = y[0], k = y.reduce((O, F) => {
    const U = ER(h, F, R);
    return O.top = di(U.top, O.top), O.right = ns(U.right, O.right), O.bottom = ns(U.bottom, O.bottom), O.left = di(U.left, O.left), O;
  }, ER(h, N, R));
  return {
    width: k.right - k.left,
    height: k.bottom - k.top,
    x: k.left,
    y: k.top
  };
}
function aO(d) {
  const {
    width: h,
    height: m
  } = jR(d);
  return {
    width: h,
    height: m
  };
}
function iO(d, h, m) {
  const E = Jo(h), R = el(h), T = m === "fixed", y = pc(d, !0, T, h);
  let N = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const k = Zo(0);
  if (E || !E && !T)
    if ((fd(h) !== "body" || xv(R)) && (N = wy(h)), E) {
      const H = pc(h, !0, T, h);
      k.x = H.x + h.clientLeft, k.y = H.y + h.clientTop;
    } else R && (k.x = gS(R));
  const O = R && !E && !T ? FR(R, N) : Zo(0), F = y.left + N.scrollLeft - k.x - O.x, U = y.top + N.scrollTop - k.y - O.y;
  return {
    x: F,
    y: U,
    width: y.width,
    height: y.height
  };
}
function J1(d) {
  return po(d).position === "static";
}
function xR(d, h) {
  if (!Jo(d) || po(d).position === "fixed")
    return null;
  if (h)
    return h(d);
  let m = d.offsetParent;
  return el(d) === m && (m = m.ownerDocument.body), m;
}
function VR(d, h) {
  const m = pi(d);
  if (Ry(d))
    return m;
  if (!Jo(d)) {
    let R = as(d);
    for (; R && !ld(R); ) {
      if (fo(R) && !J1(R))
        return R;
      R = as(R);
    }
    return m;
  }
  let E = xR(d, h);
  for (; E && qk(E) && J1(E); )
    E = xR(E, h);
  return E && ld(E) && J1(E) && !hS(E) ? m : E || Qk(d) || m;
}
const oO = async function(d) {
  const h = this.getOffsetParent || VR, m = this.getDimensions, E = await m(d.floating);
  return {
    reference: iO(d.reference, await h(d.floating), d.strategy),
    floating: {
      x: 0,
      y: 0,
      width: E.width,
      height: E.height
    }
  };
};
function lO(d) {
  return po(d).direction === "rtl";
}
const uO = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Kk,
  getDocumentElement: el,
  getClippingRect: rO,
  getOffsetParent: VR,
  getElementRects: oO,
  getClientRects: Zk,
  getDimensions: aO,
  getScale: od,
  isElement: fo,
  isRTL: lO
};
function sO(d, h) {
  let m = null, E;
  const R = el(d);
  function T() {
    var N;
    clearTimeout(E), (N = m) == null || N.disconnect(), m = null;
  }
  function y(N, k) {
    N === void 0 && (N = !1), k === void 0 && (k = 1), T();
    const {
      left: O,
      top: F,
      width: U,
      height: H
    } = d.getBoundingClientRect();
    if (N || h(), !U || !H)
      return;
    const P = hy(F), G = hy(R.clientWidth - (O + U)), re = hy(R.clientHeight - (F + H)), oe = hy(O), de = {
      rootMargin: -P + "px " + -G + "px " + -re + "px " + -oe + "px",
      threshold: di(0, ns(1, k)) || 1
    };
    let me = !0;
    function Ee(ue) {
      const _e = ue[0].intersectionRatio;
      if (_e !== k) {
        if (!me)
          return y();
        _e ? y(!1, _e) : E = setTimeout(() => {
          y(!1, 1e-7);
        }, 1e3);
      }
      me = !1;
    }
    try {
      m = new IntersectionObserver(Ee, {
        ...de,
        // Handle <iframe>s
        root: R.ownerDocument
      });
    } catch {
      m = new IntersectionObserver(Ee, de);
    }
    m.observe(d);
  }
  return y(!0), T;
}
function cO(d, h, m, E) {
  E === void 0 && (E = {});
  const {
    ancestorScroll: R = !0,
    ancestorResize: T = !0,
    elementResize: y = typeof ResizeObserver == "function",
    layoutShift: N = typeof IntersectionObserver == "function",
    animationFrame: k = !1
  } = E, O = yS(d), F = R || T ? [...O ? Cv(O) : [], ...Cv(h)] : [];
  F.forEach((Se) => {
    R && Se.addEventListener("scroll", m, {
      passive: !0
    }), T && Se.addEventListener("resize", m);
  });
  const U = O && N ? sO(O, m) : null;
  let H = -1, P = null;
  y && (P = new ResizeObserver((Se) => {
    let [de] = Se;
    de && de.target === O && P && (P.unobserve(h), cancelAnimationFrame(H), H = requestAnimationFrame(() => {
      var me;
      (me = P) == null || me.observe(h);
    })), m();
  }), O && !k && P.observe(O), P.observe(h));
  let G, re = k ? pc(d) : null;
  k && oe();
  function oe() {
    const Se = pc(d);
    re && (Se.x !== re.x || Se.y !== re.y || Se.width !== re.width || Se.height !== re.height) && m(), re = Se, G = requestAnimationFrame(oe);
  }
  return m(), () => {
    var Se;
    F.forEach((de) => {
      R && de.removeEventListener("scroll", m), T && de.removeEventListener("resize", m);
    }), U == null || U(), (Se = P) == null || Se.disconnect(), P = null, k && cancelAnimationFrame(G);
  };
}
const fO = $k, dO = Ik, pO = Hk, vO = Wk, hO = Vk, RR = Fk, mO = Yk, yO = (d, h, m) => {
  const E = /* @__PURE__ */ new Map(), R = {
    platform: uO,
    ...m
  }, T = {
    ...R.platform,
    _c: E
  };
  return Pk(d, h, {
    ...R,
    platform: T
  });
};
var yy = typeof document < "u" ? K.useLayoutEffect : K.useEffect;
function Ey(d, h) {
  if (d === h)
    return !0;
  if (typeof d != typeof h)
    return !1;
  if (typeof d == "function" && d.toString() === h.toString())
    return !0;
  let m, E, R;
  if (d && h && typeof d == "object") {
    if (Array.isArray(d)) {
      if (m = d.length, m !== h.length) return !1;
      for (E = m; E-- !== 0; )
        if (!Ey(d[E], h[E]))
          return !1;
      return !0;
    }
    if (R = Object.keys(d), m = R.length, m !== Object.keys(h).length)
      return !1;
    for (E = m; E-- !== 0; )
      if (!{}.hasOwnProperty.call(h, R[E]))
        return !1;
    for (E = m; E-- !== 0; ) {
      const T = R[E];
      if (!(T === "_owner" && d.$$typeof) && !Ey(d[T], h[T]))
        return !1;
    }
    return !0;
  }
  return d !== d && h !== h;
}
function BR(d) {
  return typeof window > "u" ? 1 : (d.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wR(d, h) {
  const m = BR(d);
  return Math.round(h * m) / m;
}
function eS(d) {
  const h = K.useRef(d);
  return yy(() => {
    h.current = d;
  }), h;
}
function gO(d) {
  d === void 0 && (d = {});
  const {
    placement: h = "bottom",
    strategy: m = "absolute",
    middleware: E = [],
    platform: R,
    elements: {
      reference: T,
      floating: y
    } = {},
    transform: N = !0,
    whileElementsMounted: k,
    open: O
  } = d, [F, U] = K.useState({
    x: 0,
    y: 0,
    strategy: m,
    placement: h,
    middlewareData: {},
    isPositioned: !1
  }), [H, P] = K.useState(E);
  Ey(H, E) || P(E);
  const [G, re] = K.useState(null), [oe, Se] = K.useState(null), de = K.useCallback((ee) => {
    ee !== _e.current && (_e.current = ee, re(ee));
  }, []), me = K.useCallback((ee) => {
    ee !== he.current && (he.current = ee, Se(ee));
  }, []), Ee = T || G, ue = y || oe, _e = K.useRef(null), he = K.useRef(null), ot = K.useRef(F), Rt = k != null, at = eS(k), lt = eS(R), _t = eS(O), Oe = K.useCallback(() => {
    if (!_e.current || !he.current)
      return;
    const ee = {
      placement: h,
      strategy: m,
      middleware: H
    };
    lt.current && (ee.platform = lt.current), yO(_e.current, he.current, ee).then((De) => {
      const Ce = {
        ...De,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: _t.current !== !1
      };
      Ue.current && !Ey(ot.current, Ce) && (ot.current = Ce, fS.flushSync(() => {
        U(Ce);
      }));
    });
  }, [H, h, m, lt, _t]);
  yy(() => {
    O === !1 && ot.current.isPositioned && (ot.current.isPositioned = !1, U((ee) => ({
      ...ee,
      isPositioned: !1
    })));
  }, [O]);
  const Ue = K.useRef(!1);
  yy(() => (Ue.current = !0, () => {
    Ue.current = !1;
  }), []), yy(() => {
    if (Ee && (_e.current = Ee), ue && (he.current = ue), Ee && ue) {
      if (at.current)
        return at.current(Ee, ue, Oe);
      Oe();
    }
  }, [Ee, ue, Oe, at, Rt]);
  const ht = K.useMemo(() => ({
    reference: _e,
    floating: he,
    setReference: de,
    setFloating: me
  }), [de, me]), Ge = K.useMemo(() => ({
    reference: Ee,
    floating: ue
  }), [Ee, ue]), xe = K.useMemo(() => {
    const ee = {
      position: m,
      left: 0,
      top: 0
    };
    if (!Ge.floating)
      return ee;
    const De = wR(Ge.floating, F.x), Ce = wR(Ge.floating, F.y);
    return N ? {
      ...ee,
      transform: "translate(" + De + "px, " + Ce + "px)",
      ...BR(Ge.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m,
      left: De,
      top: Ce
    };
  }, [m, N, Ge.floating, F.x, F.y]);
  return K.useMemo(() => ({
    ...F,
    update: Oe,
    refs: ht,
    elements: Ge,
    floatingStyles: xe
  }), [F, Oe, ht, Ge, xe]);
}
const SO = (d) => {
  function h(m) {
    return {}.hasOwnProperty.call(m, "current");
  }
  return {
    name: "arrow",
    options: d,
    fn(m) {
      const {
        element: E,
        padding: R
      } = typeof d == "function" ? d(m) : d;
      return E && h(E) ? E.current != null ? RR({
        element: E.current,
        padding: R
      }).fn(m) : {} : E ? RR({
        element: E,
        padding: R
      }).fn(m) : {};
    }
  };
}, CO = (d, h) => ({
  ...fO(d),
  options: [d, h]
}), EO = (d, h) => ({
  ...dO(d),
  options: [d, h]
}), xO = (d, h) => ({
  ...mO(d),
  options: [d, h]
}), RO = (d, h) => ({
  ...pO(d),
  options: [d, h]
}), wO = (d, h) => ({
  ...vO(d),
  options: [d, h]
}), TO = (d, h) => ({
  ...hO(d),
  options: [d, h]
}), bO = (d, h) => ({
  ...SO(d),
  options: [d, h]
});
var _O = "Arrow", $R = K.forwardRef((d, h) => {
  const { children: m, width: E = 10, height: R = 5, ...T } = d;
  return /* @__PURE__ */ ae.jsx(
    is.svg,
    {
      ...T,
      ref: h,
      width: E,
      height: R,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: d.asChild ? m : /* @__PURE__ */ ae.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
$R.displayName = _O;
var DO = $R;
function kO(d, h = []) {
  let m = [];
  function E(T, y) {
    const N = K.createContext(y), k = m.length;
    m = [...m, y];
    function O(U) {
      const { scope: H, children: P, ...G } = U, re = (H == null ? void 0 : H[d][k]) || N, oe = K.useMemo(() => G, Object.values(G));
      return /* @__PURE__ */ ae.jsx(re.Provider, { value: oe, children: P });
    }
    function F(U, H) {
      const P = (H == null ? void 0 : H[d][k]) || N, G = K.useContext(P);
      if (G) return G;
      if (y !== void 0) return y;
      throw new Error(`\`${U}\` must be used within \`${T}\``);
    }
    return O.displayName = T + "Provider", [O, F];
  }
  const R = () => {
    const T = m.map((y) => K.createContext(y));
    return function(N) {
      const k = (N == null ? void 0 : N[d]) || T;
      return K.useMemo(
        () => ({ [`__scope${d}`]: { ...N, [d]: k } }),
        [N, k]
      );
    };
  };
  return R.scopeName = d, [E, OO(R, ...h)];
}
function OO(...d) {
  const h = d[0];
  if (d.length === 1) return h;
  const m = () => {
    const E = d.map((R) => ({
      useScope: R(),
      scopeName: R.scopeName
    }));
    return function(T) {
      const y = E.reduce((N, { useScope: k, scopeName: O }) => {
        const U = k(T)[`__scope${O}`];
        return { ...N, ...U };
      }, {});
      return K.useMemo(() => ({ [`__scope${h.scopeName}`]: y }), [y]);
    };
  };
  return m.scopeName = h.scopeName, m;
}
function LO(d) {
  const [h, m] = K.useState(void 0);
  return dc(() => {
    if (d) {
      m({ width: d.offsetWidth, height: d.offsetHeight });
      const E = new ResizeObserver((R) => {
        if (!Array.isArray(R) || !R.length)
          return;
        const T = R[0];
        let y, N;
        if ("borderBoxSize" in T) {
          const k = T.borderBoxSize, O = Array.isArray(k) ? k[0] : k;
          y = O.inlineSize, N = O.blockSize;
        } else
          y = d.offsetWidth, N = d.offsetHeight;
        m({ width: y, height: N });
      });
      return E.observe(d, { box: "border-box" }), () => E.unobserve(d);
    } else
      m(void 0);
  }, [d]), h;
}
var SS = "Popper", [IR, YR] = kO(SS), [MO, WR] = IR(SS), qR = (d) => {
  const { __scopePopper: h, children: m } = d, [E, R] = K.useState(null);
  return /* @__PURE__ */ ae.jsx(MO, { scope: h, anchor: E, onAnchorChange: R, children: m });
};
qR.displayName = SS;
var QR = "PopperAnchor", GR = K.forwardRef(
  (d, h) => {
    const { __scopePopper: m, virtualRef: E, ...R } = d, T = WR(QR, m), y = K.useRef(null), N = vc(h, y);
    return K.useEffect(() => {
      T.onAnchorChange((E == null ? void 0 : E.current) || y.current);
    }), E ? null : /* @__PURE__ */ ae.jsx(is.div, { ...R, ref: N });
  }
);
GR.displayName = QR;
var CS = "PopperContent", [NO, AO] = IR(CS), XR = K.forwardRef(
  (d, h) => {
    var wt, yt, gt, Kt, $n, or;
    const {
      __scopePopper: m,
      side: E = "bottom",
      sideOffset: R = 0,
      align: T = "center",
      alignOffset: y = 0,
      arrowPadding: N = 0,
      avoidCollisions: k = !0,
      collisionBoundary: O = [],
      collisionPadding: F = 0,
      sticky: U = "partial",
      hideWhenDetached: H = !1,
      updatePositionStrategy: P = "optimized",
      onPlaced: G,
      ...re
    } = d, oe = WR(CS, m), [Se, de] = K.useState(null), me = vc(h, (Zt) => de(Zt)), [Ee, ue] = K.useState(null), _e = LO(Ee), he = (_e == null ? void 0 : _e.width) ?? 0, ot = (_e == null ? void 0 : _e.height) ?? 0, Rt = E + (T !== "center" ? "-" + T : ""), at = typeof F == "number" ? F : { top: 0, right: 0, bottom: 0, left: 0, ...F }, lt = Array.isArray(O) ? O : [O], _t = lt.length > 0, Oe = {
      padding: at,
      boundary: lt.filter(UO),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: _t
    }, { refs: Ue, floatingStyles: ht, placement: Ge, isPositioned: xe, middlewareData: ee } = gO({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: Rt,
      whileElementsMounted: (...Zt) => cO(...Zt, {
        animationFrame: P === "always"
      }),
      elements: {
        reference: oe.anchor
      },
      middleware: [
        CO({ mainAxis: R + ot, alignmentAxis: y }),
        k && EO({
          mainAxis: !0,
          crossAxis: !1,
          limiter: U === "partial" ? xO() : void 0,
          ...Oe
        }),
        k && RO({ ...Oe }),
        wO({
          ...Oe,
          apply: ({ elements: Zt, rects: Ln, availableWidth: Mn, availableHeight: Tn }) => {
            const { width: gn, height: Sr } = Ln.reference, In = Zt.floating.style;
            In.setProperty("--radix-popper-available-width", `${Mn}px`), In.setProperty("--radix-popper-available-height", `${Tn}px`), In.setProperty("--radix-popper-anchor-width", `${gn}px`), In.setProperty("--radix-popper-anchor-height", `${Sr}px`);
          }
        }),
        Ee && bO({ element: Ee, padding: N }),
        jO({ arrowWidth: he, arrowHeight: ot }),
        H && TO({ strategy: "referenceHidden", ...Oe })
      ]
    }), [De, Ce] = JR(Ge), j = sd(G);
    dc(() => {
      xe && (j == null || j());
    }, [xe, j]);
    const te = (wt = ee.arrow) == null ? void 0 : wt.x, Xe = (yt = ee.arrow) == null ? void 0 : yt.y, nt = ((gt = ee.arrow) == null ? void 0 : gt.centerOffset) !== 0, [mt, pt] = K.useState();
    return dc(() => {
      Se && pt(window.getComputedStyle(Se).zIndex);
    }, [Se]), /* @__PURE__ */ ae.jsx(
      "div",
      {
        ref: Ue.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ht,
          transform: xe ? ht.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: mt,
          "--radix-popper-transform-origin": [
            (Kt = ee.transformOrigin) == null ? void 0 : Kt.x,
            ($n = ee.transformOrigin) == null ? void 0 : $n.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((or = ee.hide) == null ? void 0 : or.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: d.dir,
        children: /* @__PURE__ */ ae.jsx(
          NO,
          {
            scope: m,
            placedSide: De,
            onArrowChange: ue,
            arrowX: te,
            arrowY: Xe,
            shouldHideArrow: nt,
            children: /* @__PURE__ */ ae.jsx(
              is.div,
              {
                "data-side": De,
                "data-align": Ce,
                ...re,
                ref: me,
                style: {
                  ...re.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: xe ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
XR.displayName = CS;
var KR = "PopperArrow", zO = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ZR = K.forwardRef(function(h, m) {
  const { __scopePopper: E, ...R } = h, T = AO(KR, E), y = zO[T.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ ae.jsx(
      "span",
      {
        ref: T.onArrowChange,
        style: {
          position: "absolute",
          left: T.arrowX,
          top: T.arrowY,
          [y]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[T.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[T.placedSide],
          visibility: T.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ ae.jsx(
          DO,
          {
            ...R,
            ref: m,
            style: {
              ...R.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ZR.displayName = KR;
function UO(d) {
  return d !== null;
}
var jO = (d) => ({
  name: "transformOrigin",
  options: d,
  fn(h) {
    var oe, Se, de;
    const { placement: m, rects: E, middlewareData: R } = h, y = ((oe = R.arrow) == null ? void 0 : oe.centerOffset) !== 0, N = y ? 0 : d.arrowWidth, k = y ? 0 : d.arrowHeight, [O, F] = JR(m), U = { start: "0%", center: "50%", end: "100%" }[F], H = (((Se = R.arrow) == null ? void 0 : Se.x) ?? 0) + N / 2, P = (((de = R.arrow) == null ? void 0 : de.y) ?? 0) + k / 2;
    let G = "", re = "";
    return O === "bottom" ? (G = y ? U : `${H}px`, re = `${-k}px`) : O === "top" ? (G = y ? U : `${H}px`, re = `${E.floating.height + k}px`) : O === "right" ? (G = `${-k}px`, re = y ? U : `${P}px`) : O === "left" && (G = `${E.floating.width + k}px`, re = y ? U : `${P}px`), { data: { x: G, y: re } };
  }
});
function JR(d) {
  const [h, m = "center"] = d.split("-");
  return [h, m];
}
var PO = qR, FO = GR, HO = XR, VO = ZR, BO = "Portal", ew = K.forwardRef((d, h) => {
  var N;
  const { container: m, ...E } = d, [R, T] = K.useState(!1);
  dc(() => T(!0), []);
  const y = m || R && ((N = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : N.body);
  return y ? pk.createPortal(/* @__PURE__ */ ae.jsx(is.div, { ...E, ref: h }), y) : null;
});
ew.displayName = BO;
function $O(d, h) {
  return K.useReducer((m, E) => h[m][E] ?? m, d);
}
var ES = (d) => {
  const { present: h, children: m } = d, E = IO(h), R = typeof m == "function" ? m({ present: E.isPresent }) : K.Children.only(m), T = vc(E.ref, YO(R));
  return typeof m == "function" || E.isPresent ? K.cloneElement(R, { ref: T }) : null;
};
ES.displayName = "Presence";
function IO(d) {
  const [h, m] = K.useState(), E = K.useRef({}), R = K.useRef(d), T = K.useRef("none"), y = d ? "mounted" : "unmounted", [N, k] = $O(y, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return K.useEffect(() => {
    const O = my(E.current);
    T.current = N === "mounted" ? O : "none";
  }, [N]), dc(() => {
    const O = E.current, F = R.current;
    if (F !== d) {
      const H = T.current, P = my(O);
      d ? k("MOUNT") : P === "none" || (O == null ? void 0 : O.display) === "none" ? k("UNMOUNT") : k(F && H !== P ? "ANIMATION_OUT" : "UNMOUNT"), R.current = d;
    }
  }, [d, k]), dc(() => {
    if (h) {
      let O;
      const F = h.ownerDocument.defaultView ?? window, U = (P) => {
        const re = my(E.current).includes(P.animationName);
        if (P.target === h && re && (k("ANIMATION_END"), !R.current)) {
          const oe = h.style.animationFillMode;
          h.style.animationFillMode = "forwards", O = F.setTimeout(() => {
            h.style.animationFillMode === "forwards" && (h.style.animationFillMode = oe);
          });
        }
      }, H = (P) => {
        P.target === h && (T.current = my(E.current));
      };
      return h.addEventListener("animationstart", H), h.addEventListener("animationcancel", U), h.addEventListener("animationend", U), () => {
        F.clearTimeout(O), h.removeEventListener("animationstart", H), h.removeEventListener("animationcancel", U), h.removeEventListener("animationend", U);
      };
    } else
      k("ANIMATION_END");
  }, [h, k]), {
    isPresent: ["mounted", "unmountSuspended"].includes(N),
    ref: K.useCallback((O) => {
      O && (E.current = getComputedStyle(O)), m(O);
    }, [])
  };
}
function my(d) {
  return (d == null ? void 0 : d.animationName) || "none";
}
function YO(d) {
  var E, R;
  let h = (E = Object.getOwnPropertyDescriptor(d.props, "ref")) == null ? void 0 : E.get, m = h && "isReactWarning" in h && h.isReactWarning;
  return m ? d.ref : (h = (R = Object.getOwnPropertyDescriptor(d, "ref")) == null ? void 0 : R.get, m = h && "isReactWarning" in h && h.isReactWarning, m ? d.props.ref : d.props.ref || d.ref);
}
function WO({
  prop: d,
  defaultProp: h,
  onChange: m = () => {
  }
}) {
  const [E, R] = qO({ defaultProp: h, onChange: m }), T = d !== void 0, y = T ? d : E, N = sd(m), k = K.useCallback(
    (O) => {
      if (T) {
        const U = typeof O == "function" ? O(d) : O;
        U !== d && N(U);
      } else
        R(O);
    },
    [T, d, R, N]
  );
  return [y, k];
}
function qO({
  defaultProp: d,
  onChange: h
}) {
  const m = K.useState(d), [E] = m, R = K.useRef(E), T = sd(h);
  return K.useEffect(() => {
    R.current !== E && (T(E), R.current = E);
  }, [E, R, T]), m;
}
var QO = "VisuallyHidden", tw = K.forwardRef(
  (d, h) => /* @__PURE__ */ ae.jsx(
    is.span,
    {
      ...d,
      ref: h,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...d.style
      }
    }
  )
);
tw.displayName = QO;
var GO = tw, [Ty, D3] = lk("Tooltip", [
  YR
]), by = YR(), nw = "TooltipProvider", XO = 700, sS = "tooltip.open", [KO, xS] = Ty(nw), rw = (d) => {
  const {
    __scopeTooltip: h,
    delayDuration: m = XO,
    skipDelayDuration: E = 300,
    disableHoverableContent: R = !1,
    children: T
  } = d, [y, N] = K.useState(!0), k = K.useRef(!1), O = K.useRef(0);
  return K.useEffect(() => {
    const F = O.current;
    return () => window.clearTimeout(F);
  }, []), /* @__PURE__ */ ae.jsx(
    KO,
    {
      scope: h,
      isOpenDelayed: y,
      delayDuration: m,
      onOpen: K.useCallback(() => {
        window.clearTimeout(O.current), N(!1);
      }, []),
      onClose: K.useCallback(() => {
        window.clearTimeout(O.current), O.current = window.setTimeout(
          () => N(!0),
          E
        );
      }, [E]),
      isPointerInTransitRef: k,
      onPointerInTransitChange: K.useCallback((F) => {
        k.current = F;
      }, []),
      disableHoverableContent: R,
      children: T
    }
  );
};
rw.displayName = nw;
var _y = "Tooltip", [ZO, Rv] = Ty(_y), aw = (d) => {
  const {
    __scopeTooltip: h,
    children: m,
    open: E,
    defaultOpen: R = !1,
    onOpenChange: T,
    disableHoverableContent: y,
    delayDuration: N
  } = d, k = xS(_y, d.__scopeTooltip), O = by(h), [F, U] = K.useState(null), H = kk(), P = K.useRef(0), G = y ?? k.disableHoverableContent, re = N ?? k.delayDuration, oe = K.useRef(!1), [Se = !1, de] = WO({
    prop: E,
    defaultProp: R,
    onChange: (he) => {
      he ? (k.onOpen(), document.dispatchEvent(new CustomEvent(sS))) : k.onClose(), T == null || T(he);
    }
  }), me = K.useMemo(() => Se ? oe.current ? "delayed-open" : "instant-open" : "closed", [Se]), Ee = K.useCallback(() => {
    window.clearTimeout(P.current), P.current = 0, oe.current = !1, de(!0);
  }, [de]), ue = K.useCallback(() => {
    window.clearTimeout(P.current), P.current = 0, de(!1);
  }, [de]), _e = K.useCallback(() => {
    window.clearTimeout(P.current), P.current = window.setTimeout(() => {
      oe.current = !0, de(!0), P.current = 0;
    }, re);
  }, [re, de]);
  return K.useEffect(() => () => {
    P.current && (window.clearTimeout(P.current), P.current = 0);
  }, []), /* @__PURE__ */ ae.jsx(PO, { ...O, children: /* @__PURE__ */ ae.jsx(
    ZO,
    {
      scope: h,
      contentId: H,
      open: Se,
      stateAttribute: me,
      trigger: F,
      onTriggerChange: U,
      onTriggerEnter: K.useCallback(() => {
        k.isOpenDelayed ? _e() : Ee();
      }, [k.isOpenDelayed, _e, Ee]),
      onTriggerLeave: K.useCallback(() => {
        G ? ue() : (window.clearTimeout(P.current), P.current = 0);
      }, [ue, G]),
      onOpen: Ee,
      onClose: ue,
      disableHoverableContent: G,
      children: m
    }
  ) });
};
aw.displayName = _y;
var cS = "TooltipTrigger", iw = K.forwardRef(
  (d, h) => {
    const { __scopeTooltip: m, ...E } = d, R = Rv(cS, m), T = xS(cS, m), y = by(m), N = K.useRef(null), k = vc(h, N, R.onTriggerChange), O = K.useRef(!1), F = K.useRef(!1), U = K.useCallback(() => O.current = !1, []);
    return K.useEffect(() => () => document.removeEventListener("pointerup", U), [U]), /* @__PURE__ */ ae.jsx(FO, { asChild: !0, ...y, children: /* @__PURE__ */ ae.jsx(
      is.button,
      {
        "aria-describedby": R.open ? R.contentId : void 0,
        "data-state": R.stateAttribute,
        ...E,
        ref: k,
        onPointerMove: Vl(d.onPointerMove, (H) => {
          H.pointerType !== "touch" && !F.current && !T.isPointerInTransitRef.current && (R.onTriggerEnter(), F.current = !0);
        }),
        onPointerLeave: Vl(d.onPointerLeave, () => {
          R.onTriggerLeave(), F.current = !1;
        }),
        onPointerDown: Vl(d.onPointerDown, () => {
          O.current = !0, document.addEventListener("pointerup", U, { once: !0 });
        }),
        onFocus: Vl(d.onFocus, () => {
          O.current || R.onOpen();
        }),
        onBlur: Vl(d.onBlur, R.onClose),
        onClick: Vl(d.onClick, R.onClose)
      }
    ) });
  }
);
iw.displayName = cS;
var RS = "TooltipPortal", [JO, e3] = Ty(RS, {
  forceMount: void 0
}), ow = (d) => {
  const { __scopeTooltip: h, forceMount: m, children: E, container: R } = d, T = Rv(RS, h);
  return /* @__PURE__ */ ae.jsx(JO, { scope: h, forceMount: m, children: /* @__PURE__ */ ae.jsx(ES, { present: m || T.open, children: /* @__PURE__ */ ae.jsx(ew, { asChild: !0, container: R, children: E }) }) });
};
ow.displayName = RS;
var ud = "TooltipContent", lw = K.forwardRef(
  (d, h) => {
    const m = e3(ud, d.__scopeTooltip), { forceMount: E = m.forceMount, side: R = "top", ...T } = d, y = Rv(ud, d.__scopeTooltip);
    return /* @__PURE__ */ ae.jsx(ES, { present: E || y.open, children: y.disableHoverableContent ? /* @__PURE__ */ ae.jsx(uw, { side: R, ...T, ref: h }) : /* @__PURE__ */ ae.jsx(t3, { side: R, ...T, ref: h }) });
  }
), t3 = K.forwardRef((d, h) => {
  const m = Rv(ud, d.__scopeTooltip), E = xS(ud, d.__scopeTooltip), R = K.useRef(null), T = vc(h, R), [y, N] = K.useState(null), { trigger: k, onClose: O } = m, F = R.current, { onPointerInTransitChange: U } = E, H = K.useCallback(() => {
    N(null), U(!1);
  }, [U]), P = K.useCallback(
    (G, re) => {
      const oe = G.currentTarget, Se = { x: G.clientX, y: G.clientY }, de = a3(Se, oe.getBoundingClientRect()), me = i3(Se, de), Ee = o3(re.getBoundingClientRect()), ue = u3([...me, ...Ee]);
      N(ue), U(!0);
    },
    [U]
  );
  return K.useEffect(() => () => H(), [H]), K.useEffect(() => {
    if (k && F) {
      const G = (oe) => P(oe, F), re = (oe) => P(oe, k);
      return k.addEventListener("pointerleave", G), F.addEventListener("pointerleave", re), () => {
        k.removeEventListener("pointerleave", G), F.removeEventListener("pointerleave", re);
      };
    }
  }, [k, F, P, H]), K.useEffect(() => {
    if (y) {
      const G = (re) => {
        const oe = re.target, Se = { x: re.clientX, y: re.clientY }, de = (k == null ? void 0 : k.contains(oe)) || (F == null ? void 0 : F.contains(oe)), me = !l3(Se, y);
        de ? H() : me && (H(), O());
      };
      return document.addEventListener("pointermove", G), () => document.removeEventListener("pointermove", G);
    }
  }, [k, F, y, O, H]), /* @__PURE__ */ ae.jsx(uw, { ...d, ref: T });
}), [n3, r3] = Ty(_y, { isInside: !1 }), uw = K.forwardRef(
  (d, h) => {
    const {
      __scopeTooltip: m,
      children: E,
      "aria-label": R,
      onEscapeKeyDown: T,
      onPointerDownOutside: y,
      ...N
    } = d, k = Rv(ud, m), O = by(m), { onClose: F } = k;
    return K.useEffect(() => (document.addEventListener(sS, F), () => document.removeEventListener(sS, F)), [F]), K.useEffect(() => {
      if (k.trigger) {
        const U = (H) => {
          const P = H.target;
          P != null && P.contains(k.trigger) && F();
        };
        return window.addEventListener("scroll", U, { capture: !0 }), () => window.removeEventListener("scroll", U, { capture: !0 });
      }
    }, [k.trigger, F]), /* @__PURE__ */ ae.jsx(
      MR,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: T,
        onPointerDownOutside: y,
        onFocusOutside: (U) => U.preventDefault(),
        onDismiss: F,
        children: /* @__PURE__ */ ae.jsxs(
          HO,
          {
            "data-state": k.stateAttribute,
            ...O,
            ...N,
            ref: h,
            style: {
              ...N.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ ae.jsx(OR, { children: E }),
              /* @__PURE__ */ ae.jsx(n3, { scope: m, isInside: !0, children: /* @__PURE__ */ ae.jsx(GO, { id: k.contentId, role: "tooltip", children: R || E }) })
            ]
          }
        )
      }
    );
  }
);
lw.displayName = ud;
var sw = "TooltipArrow", cw = K.forwardRef(
  (d, h) => {
    const { __scopeTooltip: m, ...E } = d, R = by(m);
    return r3(
      sw,
      m
    ).isInside ? null : /* @__PURE__ */ ae.jsx(VO, { ...R, ...E, ref: h });
  }
);
cw.displayName = sw;
function a3(d, h) {
  const m = Math.abs(h.top - d.y), E = Math.abs(h.bottom - d.y), R = Math.abs(h.right - d.x), T = Math.abs(h.left - d.x);
  switch (Math.min(m, E, R, T)) {
    case T:
      return "left";
    case R:
      return "right";
    case m:
      return "top";
    case E:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function i3(d, h, m = 5) {
  const E = [];
  switch (h) {
    case "top":
      E.push(
        { x: d.x - m, y: d.y + m },
        { x: d.x + m, y: d.y + m }
      );
      break;
    case "bottom":
      E.push(
        { x: d.x - m, y: d.y - m },
        { x: d.x + m, y: d.y - m }
      );
      break;
    case "left":
      E.push(
        { x: d.x + m, y: d.y - m },
        { x: d.x + m, y: d.y + m }
      );
      break;
    case "right":
      E.push(
        { x: d.x - m, y: d.y - m },
        { x: d.x - m, y: d.y + m }
      );
      break;
  }
  return E;
}
function o3(d) {
  const { top: h, right: m, bottom: E, left: R } = d;
  return [
    { x: R, y: h },
    { x: m, y: h },
    { x: m, y: E },
    { x: R, y: E }
  ];
}
function l3(d, h) {
  const { x: m, y: E } = d;
  let R = !1;
  for (let T = 0, y = h.length - 1; T < h.length; y = T++) {
    const N = h[T].x, k = h[T].y, O = h[y].x, F = h[y].y;
    k > E != F > E && m < (O - N) * (E - k) / (F - k) + N && (R = !R);
  }
  return R;
}
function u3(d) {
  const h = d.slice();
  return h.sort((m, E) => m.x < E.x ? -1 : m.x > E.x ? 1 : m.y < E.y ? -1 : m.y > E.y ? 1 : 0), s3(h);
}
function s3(d) {
  if (d.length <= 1) return d.slice();
  const h = [];
  for (let E = 0; E < d.length; E++) {
    const R = d[E];
    for (; h.length >= 2; ) {
      const T = h[h.length - 1], y = h[h.length - 2];
      if ((T.x - y.x) * (R.y - y.y) >= (T.y - y.y) * (R.x - y.x)) h.pop();
      else break;
    }
    h.push(R);
  }
  h.pop();
  const m = [];
  for (let E = d.length - 1; E >= 0; E--) {
    const R = d[E];
    for (; m.length >= 2; ) {
      const T = m[m.length - 1], y = m[m.length - 2];
      if ((T.x - y.x) * (R.y - y.y) >= (T.y - y.y) * (R.x - y.x)) m.pop();
      else break;
    }
    m.push(R);
  }
  return m.pop(), h.length === 1 && m.length === 1 && h[0].x === m[0].x && h[0].y === m[0].y ? h : h.concat(m);
}
var c3 = rw, f3 = aw, d3 = iw, p3 = ow, v3 = lw, h3 = cw;
function m3({ to: d }) {
  return /* @__PURE__ */ ae.jsx(c3, { delayDuration: 100, children: /* @__PURE__ */ ae.jsxs(f3, { children: [
    /* @__PURE__ */ ae.jsx(d3, { className: "github-corner", asChild: !0, children: /* @__PURE__ */ ae.jsx("a", { href: d, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ ae.jsxs(
      "svg",
      {
        width: "80",
        height: "80",
        viewBox: "0 0 250 250",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ ae.jsx("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
              fill: "currentColor",
              className: "octo-arm"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
              fill: "currentColor",
              className: "octo-body"
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ ae.jsx(p3, { children: /* @__PURE__ */ ae.jsxs(
      v3,
      {
        side: "right",
        className: "bg-white rounded-md text-black px-2 py-0.5",
        children: [
          "View source on GitHub",
          /* @__PURE__ */ ae.jsx(h3, {})
        ]
      }
    ) })
  ] }) });
}
const y3 = K.createContext(null);
function fw(d) {
  var h, m, E = "";
  if (typeof d == "string" || typeof d == "number") E += d;
  else if (typeof d == "object") if (Array.isArray(d)) {
    var R = d.length;
    for (h = 0; h < R; h++) d[h] && (m = fw(d[h])) && (E && (E += " "), E += m);
  } else for (m in d) d[m] && (E && (E += " "), E += m);
  return E;
}
function g3() {
  for (var d, h, m = 0, E = "", R = arguments.length; m < R; m++) (d = arguments[m]) && (h = fw(d)) && (E && (E += " "), E += h);
  return E;
}
const S3 = ({
  asChild: d,
  mergeClass: h = !0,
  fallbackAs: m = "div",
  children: E,
  ...R
}, T) => {
  var N, k;
  const y = m;
  if (!d)
    return /* @__PURE__ */ ae.jsx(y, { ...R, children: E });
  if (gv.Children.count(E) > 1)
    throw new Error("Only one child allowed");
  if (gv.isValidElement(E)) {
    const O = h ? g3((N = E == null ? void 0 : E.props) == null ? void 0 : N.className, R == null ? void 0 : R.className) : (k = E == null ? void 0 : E.props) == null ? void 0 : k.className;
    return gv.cloneElement(E, {
      ...R,
      ref: T,
      ...E == null ? void 0 : E.props,
      className: O
    });
  }
  return null;
}, C3 = gv.forwardRef(S3), E3 = (d) => /* @__PURE__ */ ae.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 276 28",
    role: "img",
    ...d,
    children: [
      /* @__PURE__ */ ae.jsxs("g", { clipPath: "url(#sequence-boilerplate-logo_svg__a)", children: [
        /* @__PURE__ */ ae.jsx(
          "mask",
          {
            id: "sequence-boilerplate-logo_svg__b",
            width: 36,
            height: 28,
            x: 0,
            y: 0,
            maskUnits: "userSpaceOnUse",
            style: {
              maskType: "luminance"
            },
            children: /* @__PURE__ */ ae.jsx("path", { fill: "#fff", d: "M35.03 0H0v28h35.03z" })
          }
        ),
        /* @__PURE__ */ ae.jsxs("g", { mask: "url(#sequence-boilerplate-logo_svg__b)", children: [
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "#111",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__c)",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__d)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__e)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__f)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__g)",
              d: "M8.758 20.989a1.75 1.75 0 1 0-3.502.001 1.75 1.75 0 0 0 3.502-.001"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__h)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__i)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__j)",
              d: "M28.025 5.25H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__k)",
              d: "M28.025 19.239H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ ae.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__l)",
              d: "M21.018 12.25H7.006a1.75 1.75 0 1 0 0 3.5h14.012a1.75 1.75 0 1 0 0-3.5"
            }
          )
        ] }),
        /* @__PURE__ */ ae.jsx(
          "path",
          {
            fill: "#fff",
            d: "M49.65 23.282c3.413 0 5.82-1.94 5.82-4.911.023-2.563-1.523-4.048-4.101-4.982l-1.768-.647c-1.792-.647-2.652-1.197-2.652-2.443s1.277-1.964 2.75-1.964c1.375 0 2.431.551 3.315 1.581l1.989-1.892C53.726 6.514 51.885 5.7 49.724 5.7c-3.241 0-5.67 1.82-5.67 4.791 0 2.324 1.35 3.808 4.124 4.791l1.915.67c1.67.6 2.48 1.366 2.48 2.588 0 1.268-1.178 2.108-2.823 2.108-1.695 0-3.144-.815-4.051-2.18l-2.26 1.748c1.03 1.843 3.411 3.066 6.211 3.066m13.638-.049c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.663 1.054-1.768 1.82-3.51 1.82-2.063 0-3.66-1.268-3.782-3.257h9.65c.023-.383.023-.599.023-.862 0-3.856-2.675-5.94-5.917-5.94-3.732 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.634-7.569c.392-1.772 1.94-2.658 3.535-2.658 1.571 0 2.996.934 3.29 2.658zM83.236 28V11.017h-2.701v1.606c-.687-.959-2.16-1.845-3.929-1.845-3.364 0-5.917 2.803-5.917 6.228s2.553 6.227 5.917 6.227c1.768 0 3.242-.885 3.929-1.844V28zm-6.138-7.163c-2.161 0-3.659-1.676-3.659-3.832s1.498-3.833 3.659-3.833 3.658 1.677 3.658 3.833-1.498 3.832-3.658 3.832m13.127 2.396c1.57 0 2.872-.646 3.585-1.868v1.628h2.7V11.017h-2.7v5.893c0 2.587-1.228 3.928-2.996 3.928-1.57 0-2.455-1.174-2.455-3.09v-6.73h-2.7v7.162c0 3.065 1.742 5.054 4.566 5.054m14.733 0c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.664 1.054-1.769 1.82-3.511 1.82-2.062 0-3.658-1.268-3.781-3.257h9.649c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.917-5.94-3.732 0-6.41 2.706-6.41 6.227 0 3.664 2.677 6.227 6.41 6.227m-3.635-7.569c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.995.934 3.29 2.658zm11.591 7.33h2.702V17.1c0-2.587 1.374-3.929 3.167-3.929 1.571 0 2.553 1.126 2.553 3.042v6.778h2.701v-7.21c0-3.041-1.842-5.006-4.69-5.006-1.596 0-2.971.647-3.731 1.869v-1.628h-2.702zm19.439.24c2.554 0 4.666-1.294 5.721-3.306l-2.357-1.245c-.59 1.222-1.792 2.107-3.364 2.107-2.185 0-3.732-1.653-3.732-3.784 0-2.132 1.547-3.785 3.732-3.785 1.571 0 2.774.886 3.364 2.108l2.357-1.245c-1.055-2.012-3.167-3.306-5.721-3.306-3.681 0-6.481 2.683-6.481 6.228s2.8 6.227 6.481 6.227m13.003 0c2.579 0 4.493-1.055 5.598-2.779l-2.062-1.437c-.663 1.054-1.768 1.82-3.511 1.82-2.063 0-3.658-1.268-3.782-3.257h9.651c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.918-5.94-3.733 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.635-7.57c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.996.934 3.29 2.658z"
          }
        )
      ] }),
      /* @__PURE__ */ ae.jsx(
        "path",
        {
          fill: "#fff",
          fillOpacity: 0.6,
          d: "M159.371 22.5V5.385h5.905q2.242 0 3.664 1.374 1.447 1.374 1.447 3.351 0 2.121-1.591 3.302 2.748 1.134 2.748 4.074 0 2.146-1.567 3.592-1.543 1.422-3.953 1.422zm2.82-2.58h3.76q1.35 0 2.097-.674.748-.675.748-1.784 0-1.085-.748-1.76-.747-.699-2.097-.699h-3.76zm0-7.327h2.941q1.133 0 1.808-.651.675-.65.675-1.663 0-.965-.675-1.64t-1.808-.674h-2.941zm21.281 8.34q-1.808 1.808-4.483 1.808-2.676 0-4.508-1.808-1.808-1.832-1.808-4.46 0-2.626 1.808-4.435 1.832-1.831 4.508-1.832 2.675 0 4.483 1.832 1.833 1.809 1.832 4.436t-1.832 4.46m-4.483-.65q1.566 0 2.579-1.085 1.036-1.11 1.036-2.724 0-1.616-1.036-2.7-1.013-1.11-2.579-1.109-1.592 0-2.628 1.109-1.012 1.085-1.012 2.7 0 1.614 1.012 2.724 1.036 1.084 2.628 1.084m9.585-12.463q-.723 0-1.254-.506a1.74 1.74 0 0 1-.53-1.278q0-.723.53-1.23.531-.53 1.254-.53.747 0 1.253.53.507.507.506 1.23 0 .747-.506 1.278a1.7 1.7 0 0 1-1.253.506m-1.326 14.68V10.448h2.651V22.5zm5.491 0V4.421h2.652V22.5zm10.939.241q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.662 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976M211.49 22.5V10.448h2.652v2.145a3.2 3.2 0 0 1 1.229-1.64q.917-.626 1.953-.626.627 0 1.036.096v2.724a3.8 3.8 0 0 0-1.325-.217q-1.206 0-2.049.989-.844.963-.844 2.7V22.5zm11.086 5.038h-2.652v-17.09h2.652v1.614q.554-.771 1.591-1.301a4.87 4.87 0 0 1 2.29-.555q2.459 0 4.122 1.832 1.687 1.832 1.687 4.436t-1.687 4.435q-1.663 1.832-4.122 1.832-1.23 0-2.29-.53-1.037-.555-1.591-1.326zm3.399-7.207q1.566 0 2.579-1.11 1.012-1.107 1.012-2.747t-1.012-2.748q-1.013-1.11-2.579-1.11-1.592 0-2.604 1.11-1.012 1.108-1.012 2.748t1.012 2.748q1.013 1.108 2.604 1.108m8.268 2.169V4.421h2.652V22.5zm10.433.241q-2.459 0-4.146-1.832-1.663-1.832-1.663-4.435 0-2.604 1.663-4.436 1.688-1.831 4.146-1.832 1.23 0 2.266.555 1.036.53 1.591 1.302v-1.616h2.652V22.5h-2.652v-1.615q-.555.771-1.591 1.326a4.9 4.9 0 0 1-2.266.53m-2.097-3.52q1.013 1.11 2.579 1.11t2.58-1.11q1.012-1.107 1.012-2.747t-1.012-2.748q-1.012-1.11-2.58-1.11-1.566 0-2.579 1.11-1.012 1.108-1.012 2.748t1.012 2.748m16.705 3.4q-1.831 0-2.989-1.013-1.133-1.035-1.133-2.989v-5.81h-2.506v-2.361h2.506V7.097h2.652v3.35h3.447v2.363h-3.447v5.375q0 1.11.482 1.591.483.458 1.543.458.867 0 1.422-.24v2.361q-.867.265-1.977.265m9.051.12q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.663 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976"
        }
      ),
      /* @__PURE__ */ ae.jsxs("defs", { children: [
        /* @__PURE__ */ ae.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__c",
            x1: 17.515,
            x2: 17.515,
            y1: 0,
            y2: 28.029,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ ae.jsx("stop", { stopColor: "#1D273D" }),
              /* @__PURE__ */ ae.jsx("stop", { offset: 1, stopColor: "#0D0F13" })
            ]
          }
        ),
        /* @__PURE__ */ ae.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__d",
            x1: 5.794,
            x2: 8.172,
            y1: 8.726,
            y2: 5.545,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ ae.jsx("stop", { stopColor: "#4462FE" }),
              /* @__PURE__ */ ae.jsx("stop", { offset: 1, stopColor: "#7D69FA" })
            ]
          }
        ),
        /* @__PURE__ */ ae.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__e",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ ae.jsx("stop", { stopColor: "#3757FD" }),
              /* @__PURE__ */ ae.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ ae.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__f",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ ae.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ ae.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ ae.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__g",
            x1: 5.75,
            x2: 8.085,
            y1: 22.168,
            y2: 19.691,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ ae.jsx("stop", { stopColor: "#BC3EE6" }),
              /* @__PURE__ */ ae.jsx("stop", { offset: 1, stopColor: "#D972F1" })
            ]
          }
        ),
        /* @__PURE__ */ ae.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__h",
            x1: 26.981,
            x2: 29.14,
            y1: 15.16,
            y2: 12.861,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ ae.jsx("stop", { stopColor: "#29BDFF" }),
              /* @__PURE__ */ ae.jsx("stop", { offset: 1, stopColor: "#96E7FB" })
            ]
          }
        ),
        /* @__PURE__ */ ae.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__i",
            x1: 26.554,
            x2: 29.596,
            y1: 15.726,
            y2: 15.58,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ ae.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ ae.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ ae.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__j",
            x1: 13.667,
            x2: 28.081,
            y1: 8.726,
            y2: 5.265,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ ae.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ ae.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ ae.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__k",
            x1: 13.8,
            x2: 27.638,
            y1: 22.741,
            y2: 19.191,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ ae.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ ae.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ ae.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__l",
            x1: 7.608,
            x2: 20.826,
            y1: 15.777,
            y2: 12.228,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ ae.jsx("stop", { stopColor: "#6634FF" }),
              /* @__PURE__ */ ae.jsx("stop", { offset: 1, stopColor: "#9C6DFF" })
            ]
          }
        ),
        /* @__PURE__ */ ae.jsx("clipPath", { id: "sequence-boilerplate-logo_svg__a", children: /* @__PURE__ */ ae.jsx("path", { fill: "#fff", d: "M0 0h151.273v28H0z" }) })
      ] })
    ]
  }
), x3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SequenceBoilerplateLogo: E3
}, Symbol.toStringTag, { value: "Module" })), tS = x3;
function R3({
  name: d,
  alt: h = void 0,
  className: m = "",
  ...E
}) {
  const R = tS == null ? void 0 : tS[d];
  return /* @__PURE__ */ ae.jsx(
    C3,
    {
      fallbackAs: "svg",
      name: d,
      preserveAspectRatio: "xMinYMin",
      "aria-hidden": h ? void 0 : !0,
      role: h ? "img" : "presentation",
      title: h,
      "aria-label": h || void 0,
      focusable: "false",
      className: `${m} flex-shrink-0`.trim(),
      asChild: !0,
      ...E,
      children: /* @__PURE__ */ ae.jsx(R, {})
    }
  );
}
function w3({
  name: d,
  description: h
}) {
  return /* @__PURE__ */ ae.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ ae.jsx(
      R3,
      {
        name: "SequenceBoilerplateLogo",
        alt: "Sequence Boilerplate",
        className: "mb-2"
      }
    ),
    /* @__PURE__ */ ae.jsx("h1", { className: "text-40 font-bold", children: d }),
    /* @__PURE__ */ ae.jsx("p", { className: "text-14 font-bold", children: h })
  ] });
}
function k3({
  githubUrl: d,
  name: h,
  description: m,
  useAuth: E,
  children: R
}) {
  return /* @__PURE__ */ ae.jsxs(
    y3.Provider,
    {
      value: { githubUrl: d, name: h, description: m, useAuth: E },
      children: [
        d ? /* @__PURE__ */ ae.jsx(m3, { to: d }) : null,
        /* @__PURE__ */ ae.jsx(w3, { name: h, description: m }),
        /* @__PURE__ */ ae.jsx("div", { className: "py-8", children: R }),
        /* @__PURE__ */ ae.jsx("div", { className: "text-14 font-medium", children: /* @__PURE__ */ ae.jsxs("p", { children: [
          "Want to learn more? Read the",
          "  ",
          /* @__PURE__ */ ae.jsx(
            "a",
            {
              href: "https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: "docs"
            }
          ),
          "!"
        ] }) })
      ]
    }
  );
}
function O3({ children: d }) {
  return /* @__PURE__ */ ae.jsx("div", { id: "root", children: d });
}
export {
  k3 as SequenceDemoKit,
  O3 as SsrRoot
};
