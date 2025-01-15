import * as v from "react";
import me, { forwardRef as It, createContext as Xe, useContext as ue, useLayoutEffect as ba, useEffect as hn, useState as rn, useCallback as Eo, useSyncExternalStore as Ku, useRef as Jt, useId as Gu, Component as Yu, useInsertionEffect as Xu, useMemo as Xn, Fragment as Sa, createElement as Zu } from "react";
import * as Zn from "react-dom";
import Ju from "react-dom";
var Kr = { exports: {} }, $t = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ns;
function Qu() {
  if (Ns) return $t;
  Ns = 1;
  var e = me, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, c) {
    var u, d = {}, h = null, m = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (u in l) r.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (a && a.defaultProps) for (u in l = a.defaultProps, l) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: a, key: h, ref: m, props: d, _owner: o.current };
  }
  return $t.Fragment = n, $t.jsx = s, $t.jsxs = s, $t;
}
var qt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is;
function ef() {
  return Is || (Is = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function w(y) {
      if (y === null || typeof y != "object")
        return null;
      var P = g && y[g] || y[p];
      return typeof P == "function" ? P : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(y) {
      {
        for (var P = arguments.length, j = new Array(P > 1 ? P - 1 : 0), _ = 1; _ < P; _++)
          j[_ - 1] = arguments[_];
        S("error", y, j);
      }
    }
    function S(y, P, j) {
      {
        var _ = x.ReactDebugCurrentFrame, Y = _.getStackAddendum();
        Y !== "" && (P += "%s", j = j.concat([Y]));
        var Z = j.map(function(H) {
          return String(H);
        });
        Z.unshift("Warning: " + P), Function.prototype.apply.call(console[y], console, Z);
      }
    }
    var T = !1, C = !1, A = !1, E = !1, R = !1, L;
    L = Symbol.for("react.module.reference");
    function k(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === r || y === i || R || y === o || y === c || y === u || E || y === m || T || C || A || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === d || y.$$typeof === s || y.$$typeof === a || y.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === L || y.getModuleId !== void 0));
    }
    function z(y, P, j) {
      var _ = y.displayName;
      if (_)
        return _;
      var Y = P.displayName || P.name || "";
      return Y !== "" ? j + "(" + Y + ")" : j;
    }
    function U(y) {
      return y.displayName || "Context";
    }
    function I(y) {
      if (y == null)
        return null;
      if (typeof y.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
        return y.displayName || y.name || null;
      if (typeof y == "string")
        return y;
      switch (y) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case a:
            var P = y;
            return U(P) + ".Consumer";
          case s:
            var j = y;
            return U(j._context) + ".Provider";
          case l:
            return z(y, y.render, "ForwardRef");
          case d:
            var _ = y.displayName || null;
            return _ !== null ? _ : I(y.type) || "Memo";
          case h: {
            var Y = y, Z = Y._payload, H = Y._init;
            try {
              return I(H(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, X = 0, F, V, M, W, ne, Ce, Ze;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function Le() {
      {
        if (X === 0) {
          F = console.log, V = console.info, M = console.warn, W = console.error, ne = console.group, Ce = console.groupCollapsed, Ze = console.groupEnd;
          var y = {
            configurable: !0,
            enumerable: !0,
            value: Je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: y,
            log: y,
            warn: y,
            error: y,
            group: y,
            groupCollapsed: y,
            groupEnd: y
          });
        }
        X++;
      }
    }
    function Qe() {
      {
        if (X--, X === 0) {
          var y = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, y, {
              value: F
            }),
            info: N({}, y, {
              value: V
            }),
            warn: N({}, y, {
              value: M
            }),
            error: N({}, y, {
              value: W
            }),
            group: N({}, y, {
              value: ne
            }),
            groupCollapsed: N({}, y, {
              value: Ce
            }),
            groupEnd: N({}, y, {
              value: Ze
            })
          });
        }
        X < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ae = x.ReactCurrentDispatcher, O;
    function K(y, P, j) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (Y) {
            var _ = Y.stack.trim().match(/\n( *(at )?)/);
            O = _ && _[1] || "";
          }
        return `
` + O + y;
      }
    }
    var ie = !1, $;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new G();
    }
    function q(y, P) {
      if (!y || ie)
        return "";
      {
        var j = $.get(y);
        if (j !== void 0)
          return j;
      }
      var _;
      ie = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = Ae.current, Ae.current = null, Le();
      try {
        if (P) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (ge) {
              _ = ge;
            }
            Reflect.construct(y, [], H);
          } else {
            try {
              H.call();
            } catch (ge) {
              _ = ge;
            }
            y.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            _ = ge;
          }
          y();
        }
      } catch (ge) {
        if (ge && _ && typeof ge.stack == "string") {
          for (var B = ge.stack.split(`
`), pe = _.stack.split(`
`), re = B.length - 1, ae = pe.length - 1; re >= 1 && ae >= 0 && B[re] !== pe[ae]; )
            ae--;
          for (; re >= 1 && ae >= 0; re--, ae--)
            if (B[re] !== pe[ae]) {
              if (re !== 1 || ae !== 1)
                do
                  if (re--, ae--, ae < 0 || B[re] !== pe[ae]) {
                    var Pe = `
` + B[re].replace(" at new ", " at ");
                    return y.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", y.displayName)), typeof y == "function" && $.set(y, Pe), Pe;
                  }
                while (re >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        ie = !1, Ae.current = Z, Qe(), Error.prepareStackTrace = Y;
      }
      var St = y ? y.displayName || y.name : "", dt = St ? K(St) : "";
      return typeof y == "function" && $.set(y, dt), dt;
    }
    function he(y, P, j) {
      return q(y, !1);
    }
    function Te(y) {
      var P = y.prototype;
      return !!(P && P.isReactComponent);
    }
    function _e(y, P, j) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return q(y, Te(y));
      if (typeof y == "string")
        return K(y);
      switch (y) {
        case c:
          return K("Suspense");
        case u:
          return K("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case l:
            return he(y.render);
          case d:
            return _e(y.type, P, j);
          case h: {
            var _ = y, Y = _._payload, Z = _._init;
            try {
              return _e(Z(Y), P, j);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, et = {}, Sn = x.ReactDebugCurrentFrame;
    function We(y) {
      if (y) {
        var P = y._owner, j = _e(y.type, y._source, P ? P.type : null);
        Sn.setExtraStackFrame(j);
      } else
        Sn.setExtraStackFrame(null);
    }
    function Pu(y, P, j, _, Y) {
      {
        var Z = Function.call.bind(je);
        for (var H in y)
          if (Z(y, H)) {
            var B = void 0;
            try {
              if (typeof y[H] != "function") {
                var pe = Error((_ || "React class") + ": " + j + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              B = y[H](P, H, _, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              B = re;
            }
            B && !(B instanceof Error) && (We(Y), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", j, H, typeof B), We(null)), B instanceof Error && !(B.message in et) && (et[B.message] = !0, We(Y), b("Failed %s type: %s", j, B.message), We(null));
          }
      }
    }
    var Eu = Array.isArray;
    function gr(y) {
      return Eu(y);
    }
    function Ru(y) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, j = P && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return j;
      }
    }
    function Au(y) {
      try {
        return Es(y), !1;
      } catch {
        return !0;
      }
    }
    function Es(y) {
      return "" + y;
    }
    function Rs(y) {
      if (Au(y))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ru(y)), Es(y);
    }
    var Ut = x.ReactCurrentOwner, ju = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, As, js, yr;
    yr = {};
    function Mu(y) {
      if (je.call(y, "ref")) {
        var P = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function Du(y) {
      if (je.call(y, "key")) {
        var P = Object.getOwnPropertyDescriptor(y, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function Vu(y, P) {
      if (typeof y.ref == "string" && Ut.current && P && Ut.current.stateNode !== P) {
        var j = I(Ut.current.type);
        yr[j] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Ut.current.type), y.ref), yr[j] = !0);
      }
    }
    function Ou(y, P) {
      {
        var j = function() {
          As || (As = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        j.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function Lu(y, P) {
      {
        var j = function() {
          js || (js = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        j.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var _u = function(y, P, j, _, Y, Z, H) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: y,
        key: P,
        ref: j,
        props: H,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function ku(y, P, j, _, Y) {
      {
        var Z, H = {}, B = null, pe = null;
        j !== void 0 && (Rs(j), B = "" + j), Du(P) && (Rs(P.key), B = "" + P.key), Mu(P) && (pe = P.ref, Vu(P, Y));
        for (Z in P)
          je.call(P, Z) && !ju.hasOwnProperty(Z) && (H[Z] = P[Z]);
        if (y && y.defaultProps) {
          var re = y.defaultProps;
          for (Z in re)
            H[Z] === void 0 && (H[Z] = re[Z]);
        }
        if (B || pe) {
          var ae = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          B && Ou(H, ae), pe && Lu(H, ae);
        }
        return _u(y, B, pe, Y, _, Ut.current, H);
      }
    }
    var xr = x.ReactCurrentOwner, Ms = x.ReactDebugCurrentFrame;
    function bt(y) {
      if (y) {
        var P = y._owner, j = _e(y.type, y._source, P ? P.type : null);
        Ms.setExtraStackFrame(j);
      } else
        Ms.setExtraStackFrame(null);
    }
    var wr;
    wr = !1;
    function br(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function Ds() {
      {
        if (xr.current) {
          var y = I(xr.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
    }
    function Nu(y) {
      return "";
    }
    var Vs = {};
    function Iu(y) {
      {
        var P = Ds();
        if (!P) {
          var j = typeof y == "string" ? y : y.displayName || y.name;
          j && (P = `

Check the top-level render call using <` + j + ">.");
        }
        return P;
      }
    }
    function Os(y, P) {
      {
        if (!y._store || y._store.validated || y.key != null)
          return;
        y._store.validated = !0;
        var j = Iu(P);
        if (Vs[j])
          return;
        Vs[j] = !0;
        var _ = "";
        y && y._owner && y._owner !== xr.current && (_ = " It was passed a child from " + I(y._owner.type) + "."), bt(y), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, _), bt(null);
      }
    }
    function Ls(y, P) {
      {
        if (typeof y != "object")
          return;
        if (gr(y))
          for (var j = 0; j < y.length; j++) {
            var _ = y[j];
            br(_) && Os(_, P);
          }
        else if (br(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var Y = w(y);
          if (typeof Y == "function" && Y !== y.entries)
            for (var Z = Y.call(y), H; !(H = Z.next()).done; )
              br(H.value) && Os(H.value, P);
        }
      }
    }
    function Fu(y) {
      {
        var P = y.type;
        if (P == null || typeof P == "string")
          return;
        var j;
        if (typeof P == "function")
          j = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === d))
          j = P.propTypes;
        else
          return;
        if (j) {
          var _ = I(P);
          Pu(j, y.props, "prop", _, y);
        } else if (P.PropTypes !== void 0 && !wr) {
          wr = !0;
          var Y = I(P);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bu(y) {
      {
        for (var P = Object.keys(y.props), j = 0; j < P.length; j++) {
          var _ = P[j];
          if (_ !== "children" && _ !== "key") {
            bt(y), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), bt(null);
            break;
          }
        }
        y.ref !== null && (bt(y), b("Invalid attribute `ref` supplied to `React.Fragment`."), bt(null));
      }
    }
    var _s = {};
    function ks(y, P, j, _, Y, Z) {
      {
        var H = k(y);
        if (!H) {
          var B = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = Nu();
          pe ? B += pe : B += Ds();
          var re;
          y === null ? re = "null" : gr(y) ? re = "array" : y !== void 0 && y.$$typeof === t ? (re = "<" + (I(y.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : re = typeof y, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, B);
        }
        var ae = ku(y, P, j, Y, Z);
        if (ae == null)
          return ae;
        if (H) {
          var Pe = P.children;
          if (Pe !== void 0)
            if (_)
              if (gr(Pe)) {
                for (var St = 0; St < Pe.length; St++)
                  Ls(Pe[St], y);
                Object.freeze && Object.freeze(Pe);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ls(Pe, y);
        }
        if (je.call(P, "key")) {
          var dt = I(y), ge = Object.keys(P).filter(function(qu) {
            return qu !== "key";
          }), Sr = ge.length > 0 ? "{key: someKey, " + ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_s[dt + Sr]) {
            var $u = ge.length > 0 ? "{" + ge.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Sr, dt, $u, dt), _s[dt + Sr] = !0;
          }
        }
        return y === r ? Bu(ae) : Fu(ae), ae;
      }
    }
    function zu(y, P, j) {
      return ks(y, P, j, !0);
    }
    function Hu(y, P, j) {
      return ks(y, P, j, !1);
    }
    var Wu = Hu, Uu = zu;
    qt.Fragment = r, qt.jsx = Wu, qt.jsxs = Uu;
  }()), qt;
}
process.env.NODE_ENV === "production" ? Kr.exports = Qu() : Kr.exports = ef();
var f = Kr.exports;
function tf(e) {
  if (e)
    return Object.keys(e).reduce((t, n) => (e[n] && t.push(`${n}-${e[n]}`), t), []).join(" ");
}
function nf(e) {
  let t = {};
  return Object.keys(e).filter((n) => n.startsWith("variant-")).forEach((n) => {
    const [, r] = n.split("-");
    r && (t[r] = e[n]);
  }), Object.keys(e).filter((n) => !n.startsWith("variant-") && n !== "subvariants").forEach((n) => {
    e[n];
  }), e.subvariants && (t = Object.assign(e.subvariants, t)), Object.keys(t).length > 0 ? t : {};
}
function Se(e, t) {
  const n = "initial", r = nf(t), o = { ...t };
  return delete o.variant, Object.keys(r).forEach((i) => {
    delete o[`variant-${i}`];
  }), {
    "data-component": e,
    "data-variant": (t == null ? void 0 : t.variant) || n,
    "data-subvariants": tf(r),
    ...o
  };
}
function Ca(e) {
  const {
    children: t,
    type: n = "button",
    ...r
  } = Se("button", e);
  return /* @__PURE__ */ f.jsx("button", { type: n, ...r, children: t });
}
function Ta(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ta(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function rf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ta(e)) && (r && (r += " "), r += t);
  return r;
}
const of = ({
  asChild: e,
  mergeClass: t = !0,
  fallbackAs: n = "div",
  children: r,
  ...o
}, i) => {
  var a, l;
  const s = n;
  if (!e)
    return /* @__PURE__ */ f.jsx(s, { ...o, children: r });
  if (me.Children.count(r) > 1)
    throw new Error("Only one child allowed");
  if (me.isValidElement(r)) {
    const c = t ? rf((a = r == null ? void 0 : r.props) == null ? void 0 : a.className, o == null ? void 0 : o.className) : (l = r == null ? void 0 : r.props) == null ? void 0 : l.className;
    return me.cloneElement(r, {
      ...o,
      ref: i,
      ...r == null ? void 0 : r.props,
      className: c
    });
  }
  return null;
}, Jn = me.forwardRef(of), sf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.168 9.25V2.929h-1.5V9.25h-6.32v1.5h6.32v6.321h1.5V10.75h6.321v-1.5z",
        clipRule: "evenodd"
      }
    )
  }
), af = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10 1.6a6.886 6.886 0 0 0-6.886 6.885c0 .058.018.116.055.165l4.077 5.431v4.32h5.508v-4.32l4.077-5.43a.28.28 0 0 0 .055-.166A6.886 6.886 0 0 0 10 1.6m0 4.957a1.93 1.93 0 0 0-1.928 1.928h.005c.345 1.725 1.097 5.509 1.097 5.509h1.652s.752-3.784 1.097-5.509h.005A1.93 1.93 0 0 0 10 6.557m-2.135 7.437-4.2-5.608c0-1.065.863-1.829 1.928-1.829s1.928.863 1.928 1.928c0 0 .751 3.784 1.096 5.509zm4.27 0 4.2-5.608c0-1.065-.863-1.829-1.928-1.829a1.93 1.93 0 0 0-1.928 1.928s-.751 3.784-1.096 5.509z",
        clipRule: "evenodd"
      }
    )
  }
), lf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M13.548 10.997c-.015-1.645 1.344-2.435 1.405-2.474-.764-1.119-1.953-1.271-2.378-1.29-1.011-.102-1.974.597-2.488.597s-1.306-.581-2.145-.565c-1.104.017-2.122.641-2.69 1.63-1.147 1.987-.294 4.934.824 6.549.546.789 1.196 1.677 2.052 1.644.825-.032 1.136-.533 2.13-.533.995 0 1.276.534 2.146.517.885-.018 1.447-.807 1.99-1.598.625-.916.884-1.803.899-1.85-.02-.007-1.727-.661-1.745-2.627M11.912 6.166c.454-.55.76-1.315.677-2.077-.655.027-1.446.437-1.915.986-.42.486-.789 1.264-.689 2.011.728.057 1.473-.372 1.927-.92"
      }
    )
  }
), cf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M5.479 9.94 4.419 11l5.53 5.53 5.53-5.53-1.06-1.06-3.72 3.72V3.47h-1.5v10.19z",
        clipRule: "evenodd"
      }
    )
  }
), uf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m10.888 14.47 1.06 1.06L17.48 10l-5.53-5.53-1.06 1.06 3.719 3.72H4.418v1.5h10.19z",
        clipRule: "evenodd"
      }
    )
  }
), ff = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5.668 7.898c-.728.93-1.792 1.705-3.25 1.705v-1.5c1.05 0 1.848-.675 2.426-1.654.582-.987.824-2.102.824-2.575h1.5c0 .473.242 1.588.825 2.575.578.979 1.375 1.654 2.425 1.654s1.848-.675 2.426-1.654c.583-.987.824-2.102.824-2.575h1.5c0 .473.242 1.588.825 2.575.577.979 1.376 1.654 2.425 1.654v1.5c-1.457 0-2.521-.776-3.25-1.705v3.273h3.25v1.5h-3.25v3.455h-1.5V12.67h-6.5v3.456h-1.5V12.67h-3.25v-1.5h3.25zm1.5 0v3.273h6.5V7.898c-.728.93-1.792 1.705-3.25 1.705s-2.521-.776-3.25-1.705",
        clipRule: "evenodd"
      }
    )
  }
), df = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        stroke: "currentColor",
        strokeWidth: 1.5,
        d: "m4.304 10.232 4.263 4.79 7.13-11.238"
      }
    )
  }
), hf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m3.888 7.53 1.06-1.06 5.47 5.47 5.47-5.47 1.06 1.06-6.53 6.53z",
        clipRule: "evenodd"
      }
    )
  }
), pf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12.888 3.47 1.06 1.06L8.48 10l5.47 5.47-1.061 1.06L6.358 10z",
        clipRule: "evenodd"
      }
    )
  }
), mf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m7.949 16.53-1.061-1.06 5.47-5.47-5.47-5.47 1.06-1.06L14.48 10z",
        clipRule: "evenodd"
      }
    )
  }
), vf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m16.949 12.47-1.061 1.06-5.47-5.47-5.47 5.47-1.06-1.06 6.53-6.53z",
        clipRule: "evenodd"
      }
    )
  }
), gf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m10.418 11.06 4.47 4.47 1.06-1.06L11.48 10l4.47-4.47-1.06-1.06-4.47 4.47-4.47-4.47-1.06 1.06L9.357 10l-4.47 4.47 1.06 1.06z",
        clipRule: "evenodd"
      }
    )
  }
), yf = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M9.528 7.898a2.89 2.89 0 0 1-2.882 2.899 2.89 2.89 0 0 1-2.882-2.899A2.89 2.89 0 0 1 6.646 5a2.89 2.89 0 0 1 2.882 2.898M9.053 12.275a6 6 0 0 0-2.407-.493c-2.827 0-5.121 1.885-5.146 4.217h5.708v-.01c.016-1.507.737-2.795 1.845-3.714M16.236 7.899a2.89 2.89 0 0 1-2.882 2.898 2.89 2.89 0 0 1-2.882-2.898A2.89 2.89 0 0 1 13.354 5a2.89 2.89 0 0 1 2.882 2.898"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18.5 16H8.208c.025-2.333 2.32-4.217 5.146-4.217S18.475 13.667 18.5 16",
          clipRule: "evenodd"
        }
      )
    ]
  }
), xf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.597 10a1.388 1.388 0 1 1-2.776 0 1.388 1.388 0 0 1 2.776 0m5.21 0a1.388 1.388 0 1 1-2.777 0 1.388 1.388 0 0 1 2.776 0m3.82 1.388a1.388 1.388 0 1 0 0-2.776 1.388 1.388 0 0 0 0 2.776",
        clipRule: "evenodd"
      }
    )
  }
), wf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.317 17H7V9.396a1.25 1.25 0 1 1 1 0v5.028l2.733-1.024v-1.012a1.25 1.25 0 1 1 1 .015v1.69L8 15.493V17h8V8.146h-5.545V3H4v14zm9.614-9.843-4.42-4.093.055 4.093z",
        clipRule: "evenodd"
      }
    )
  }
), bf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.918 4.5h-6V6h4.5v6.5h1.5zm-1.5 9.5v3h-9V6h3V3h9v11zm-7.5 1.5v-8h6v8z",
        clipRule: "evenodd"
      }
    )
  }
), Sf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5 6.714 3.618 3.547H2.5L4.158 7.02H2.98v.69h1.494v.663H2.981v.69h1.494v1.484h1.036V9.063h1.46v-.69h-1.46v-.66l.001-.003h1.46v-.69h-1.13L7.5 3.547H6.383zm4.747 8.232v-.788a2.9 2.9 0 0 1-1.04-.249 2.04 2.04 0 0 1-.863-.727 2.2 2.2 0 0 1-.344-1.125h1.017q.03.39.236.65.21.257.535.383.216.08.46.109V10.81l-.319-.093q-.806-.236-1.28-.693-.468-.456-.469-1.209 0-.622.315-1.086.316-.465.853-.72.41-.2.9-.246v-.817h.537v.81q.547.034.981.249.525.255.827.706.301.447.315 1.027h-.978a1.04 1.04 0 0 0-.433-.774 1.47 1.47 0 0 0-.712-.264v2.253l.283.079q.321.084.659.228a2.6 2.6 0 0 1 .627.38q.288.235.466.583.18.348.18.834 0 .611-.295 1.086a2 2 0 0 1-.85.749q-.456.226-1.07.265v.79zm1.024-1.877q-.222.096-.486.128v-2.23q.323.095.584.218.29.133.457.337.17.204.17.524 0 .352-.194.615-.193.261-.531.408M9.747 7.706v2.095a5 5 0 0 1-.246-.086 2.2 2.2 0 0 1-.4-.207 1 1 0 0 1-.299-.313.85.85 0 0 1-.111-.443.94.94 0 0 1 .164-.545q.168-.242.47-.38.19-.089.422-.12m7.677 10.086h-4.9v-.897h.34a.34.34 0 0 0 .29-.186q.102-.175.137-.411.034-.24.028-.432l-.027-.779H12.5v-.896h.76l-.043-1.262q-.027-.708.273-1.183.305-.475.809-.715.503-.24 1.084-.24.519 0 .931.166.417.164.7.452.287.282.41.647.122.364.048.766l-1.01-.156q.034-.33-.11-.55a.9.9 0 0 0-.395-.33 1.31 1.31 0 0 0-1.102.024q-.266.135-.434.411-.165.277-.164.708l.048 1.261h1.649v.897H14.34l.029.752q.02.435-.116.78-.06.15-.166.276h3.337z",
        clipRule: "evenodd"
      }
    )
  }
), Cf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "circle",
      {
        cx: 10,
        cy: 10,
        r: 8,
        stroke: "#000",
        strokeDasharray: "2 4",
        strokeLinecap: "round",
        strokeWidth: 1.5
      }
    )
  }
), Tf = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "#fff",
          fillRule: "evenodd",
          d: "M10.106 13.232a.996.996 0 0 1-1.35-.057l-1.93-1.932a.997.997 0 0 1-.058-1.349l.03-.034c.34-.403.794-.937 1.285-1.51l.303-.353.37-.43c.969-1.121 1.958-2.244 2.466-2.751 1.816-1.816 3.689-3.04 6.132-3.01a.85.85 0 0 1 .84.84c.03 2.443-1.194 4.316-3.01 6.132-.507.507-1.63 1.497-2.752 2.466a273 273 0 0 1-2.327 1.988M15.18 6.73a1.352 1.352 0 1 1-1.912-1.912 1.352 1.352 0 0 1 1.912 1.912",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "#fff",
          d: "M2.785 13.821a.4.4 0 1 0 .566.566l2.152-2.152a.4.4 0 0 0-.566-.566zM2.207 17.227a.4.4 0 0 0 .566.566l4.144-4.144a.4.4 0 1 0-.566-.566zM5.613 17.215a.4.4 0 0 1 0-.566l2.152-2.152a.4.4 0 0 1 .566.566l-2.152 2.152a.4.4 0 0 1-.566 0M2.005 9.902c1.6-1.6 3.611-2.442 5.46-2.462.032 0 .05.037.029.061a337 337 0 0 0-1.914 2.25l-.169.2-.004.002a5.9 5.9 0 0 0-3.33.06c-.068.022-.121-.062-.072-.111M10.047 14.593v-.002l.001-.002.001-.001.2-.168a309 309 0 0 0 2.25-1.914.037.037 0 0 1 .06.029c-.019 1.849-.862 3.86-2.46 5.46-.05.05-.134-.005-.112-.071a5.9 5.9 0 0 0 .06-3.331"
        }
      )
    ]
  }
), Pf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.543 5.188h6.914v11.618H6.543zM5 18.497v-15h10v15zm7-12H8v1.46h4z",
        clipRule: "evenodd"
      }
    )
  }
), Ef = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M14.852 5.095c-.893-.46-1.85-.8-2.85-.994-.018-.003-.037.006-.046.025-.123.246-.26.567-.355.82a9.5 9.5 0 0 0-3.2 0 9 9 0 0 0-.36-.82.04.04 0 0 0-.046-.025c-1 .194-1.957.533-2.85.994a.04.04 0 0 0-.019.018c-1.815 3.05-2.312 6.024-2.068 8.961a.06.06 0 0 0 .018.037 11.2 11.2 0 0 0 3.496 1.987q.029.01.049-.018.406-.62.715-1.308c.012-.027 0-.059-.024-.07a7.3 7.3 0 0 1-1.092-.585c-.028-.018-.03-.062-.005-.083q.111-.094.217-.192a.04.04 0 0 1 .046-.006c2.29 1.176 4.771 1.176 7.035 0a.04.04 0 0 1 .046.006q.106.098.218.192c.025.02.023.065-.004.083q-.523.344-1.093.585c-.025.01-.036.043-.024.07q.316.687.715 1.308.018.027.05.018a11.1 11.1 0 0 0 3.5-1.987.05.05 0 0 0 .019-.036c.292-3.396-.49-6.346-2.07-8.961a.04.04 0 0 0-.018-.019m-7.174 7.19c-.69 0-1.258-.712-1.258-1.586s.558-1.587 1.258-1.587c.707 0 1.27.719 1.259 1.587 0 .874-.558 1.587-1.259 1.587m4.652 0c-.69 0-1.258-.712-1.258-1.586s.557-1.587 1.258-1.587c.707 0 1.27.719 1.258 1.587 0 .874-.551 1.587-1.258 1.587"
      }
    )
  }
), Rf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.648 8.35 10.797 4.5h-.047v3.85zM9.25 4.5H5.918v11h9V9.85H9.25zM16.418 8l-5-5h-7v14h12z",
        clipRule: "evenodd"
      }
    )
  }
), Af = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M3 12.25V18h13.5v-5.75H15v4.25H4.5v-4.25zm11.28-2.47-1.06-1.06-2.72 2.72V3.25H9v8.19L6.28 8.72 5.22 9.78l4.53 4.53z",
        clipRule: "evenodd"
      }
    )
  }
), jf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "#fff",
        d: "M7.572 7.014a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.877M7.572 11.94a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.876M7.572 16.864a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876M12.89 7.014a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.877M12.89 11.94a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.876M12.89 16.864a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876"
      }
    )
  }
), Mf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        d: "m5.285 12.884 6.53-6.531 2.254 2.253-6.531 6.531-2.878.618zM14.674 8.001l-2.253-2.253 1.502-1.503L16.176 6.5z"
      }
    )
  }
), Df = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.01 6.1H4.99L10 9.68zM3.5 6.88v7.22h13V6.88L10 11.521zM2 15.6v-11h16v11z",
        clipRule: "evenodd"
      }
    )
  }
), Vf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m6.98 5.703 7.937 7.937v-3.19h1.5v5.75h-5.75v-1.5h3.19L5.92 6.764v3.189h-1.5v-5.75h5.75v1.5z",
        clipRule: "evenodd"
      }
    )
  }
), Of = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.608 6.75h-5.19v-1.5h7.75V13h-1.5V7.81l-7.72 7.72-1.06-1.06z",
        clipRule: "evenodd"
      }
    )
  }
), Lf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M12.42 5.797c-.93 0-1.194.413-1.194 1.322v1.5H13.7l-.244 2.432h-2.23v7.368h-2.96V11.05H6.268V8.619h1.997V7.161c0-2.453.984-3.742 3.742-3.742.592 0 1.3.046 1.724.106v2.282"
      }
    )
  }
), _f = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.51 3C3.675 3 3 3.692 3 4.545V16.6c0 .455.36.824.805.824h6.238a.815.815 0 0 0 .806-.824v-6.006c1.175 0 2.128.937 2.128 2.093v2.335c0 1.092.9 1.978 2.011 1.978S17 16.114 17 15.022V8.24c0-.832-.336-1.631-.935-2.22L13.64 3.636l-.55.542 1.845 1.814c-.754.133-1.33.832-1.33 1.675 0 .937.712 1.697 1.591 1.697.39 0 .748-.15 1.024-.399v6.057c0 .67-.552 1.212-1.233 1.212-.68 0-1.232-.542-1.232-1.212v-2.335c0-1.579-1.302-2.859-2.908-2.859V4.545C10.849 3.692 10.173 3 9.34 3zm.805 1.485a.826.826 0 0 0-.83.821v1.54c0 .453.372.82.83.82h3.218c.459 0 .83-.367.83-.82v-1.54a.826.826 0 0 0-.83-.821zm9.882 3.962c-.404 0-.732-.35-.732-.78s.328-.78.732-.78.732.349.732.78c0 .43-.328.78-.732.78",
        clipRule: "evenodd"
      }
    )
  }
), kf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.5 10.575v1.742a9.7 9.7 0 0 0-2.367.383 8.6 8.6 0 0 1-.355-2.125zm-2.005 3.061a8.7 8.7 0 0 1 2.005-.318v2.672c-.697-.457-1.462-1.21-2.005-2.354m-1.718-3.061c.04.93.19 1.75.416 2.472a7.2 7.2 0 0 0-1.45.852 6.47 6.47 0 0 1-1.224-3.324zm.775 3.407c-.44.199-.825.43-1.158.679a6.5 6.5 0 0 0 2.934 1.697 6.9 6.9 0 0 1-1.776-2.376m5.953-.346a8.7 8.7 0 0 0-2.005-.318v2.672c.697-.457 1.462-1.21 2.005-2.354m-2.005-1.32c.884.038 1.67.176 2.367.384.19-.617.317-1.323.355-2.125H10.5zm1.172 4.041a6.9 6.9 0 0 0 1.776-2.375c.44.199.825.43 1.158.679a6.5 6.5 0 0 1-2.934 1.696m2.135-3.31a7.2 7.2 0 0 1 1.45.852 6.47 6.47 0 0 0 1.224-3.324h-2.258c-.04.93-.19 1.75-.416 2.472m-.585-3.472H10.5V7.833a9.7 9.7 0 0 0 2.367-.384c.19.618.317 1.323.355 2.126m-.717-3.062a8.7 8.7 0 0 1-2.005.319V4.159c.697.457 1.462 1.21 2.005 2.354m.943-.345a6.9 6.9 0 0 0-1.776-2.376c1.128.3 2.135.894 2.934 1.697a6.2 6.2 0 0 1-1.158.679m.359.935a7.2 7.2 0 0 0 1.45-.852 6.47 6.47 0 0 1 1.224 3.324h-2.258c-.04-.93-.19-1.75-.416-2.472M9.5 6.832V4.159c-.697.457-1.462 1.21-2.005 2.354.588.17 1.254.284 2.005.319m0 1.001a9.7 9.7 0 0 1-2.367-.384 8.6 8.6 0 0 0-.355 2.126H9.5zm-3.307-.73a9.6 9.6 0 0 0-.416 2.472H3.52A6.47 6.47 0 0 1 4.743 6.25c.417.317.899.608 1.45.852m.36-.935c-.442-.2-.826-.43-1.16-.68a6.5 6.5 0 0 1 2.935-1.696 6.9 6.9 0 0 0-1.776 2.376M10 18.075a8 8 0 1 0 0-16 8 8 0 0 0 0 16",
        clipRule: "evenodd"
      }
    )
  }
), Nf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.603 7.94c-.67-.644-1.517-.975-2.466-.975-1.678 0-3.1 1.143-3.608 2.687-.13.39-.204.807-.204 1.24 0 .434.07.851.204 1.241.509 1.544 1.93 2.687 3.608 2.687.868 0 1.603-.239 2.182-.629a3.02 3.02 0 0 0 1.287-1.939h-3.47V9.81h6.06c.063.396.101.802.101 1.23 0 1.977-.697 3.645-1.909 4.777-1.061.992-2.514 1.577-4.251 1.577-2.515 0-4.686-1.463-5.742-3.586a6.48 6.48 0 0 1 0-5.829c1.056-2.123 3.227-3.585 5.742-3.585 1.737 0 3.19.644 4.3 1.695z",
        clipRule: "evenodd"
      }
    )
  }
), If = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "#fff",
        d: "M3 4.6A1.6 1.6 0 0 1 4.6 3H7a1.6 1.6 0 0 1 1.6 1.6V7A1.6 1.6 0 0 1 7 8.6H4.6A1.6 1.6 0 0 1 3 7zM3 13a1.6 1.6 0 0 1 1.6-1.6H7A1.6 1.6 0 0 1 8.6 13v2.4A1.6 1.6 0 0 1 7 17H4.6A1.6 1.6 0 0 1 3 15.4zM11.4 4.6A1.6 1.6 0 0 1 13 3h2.4A1.6 1.6 0 0 1 17 4.6V7a1.6 1.6 0 0 1-1.6 1.6H13A1.6 1.6 0 0 1 11.4 7zM11.4 13a1.6 1.6 0 0 1 1.6-1.6h2.4A1.6 1.6 0 0 1 17 13v2.4a1.6 1.6 0 0 1-1.6 1.6H13a1.6 1.6 0 0 1-1.6-1.6z"
      }
    )
  }
), Ff = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.918 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m1.5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-9 1.469v.133h1.48v-.133q.005-.383.098-.645a1.3 1.3 0 0 1 .293-.46q.2-.2.508-.384.367-.218.637-.488.27-.273.418-.625.152-.356.152-.812 0-.684-.34-1.168a2.13 2.13 0 0 0-.937-.739q-.598-.257-1.375-.257-.706 0-1.293.254-.585.25-.941.761-.356.508-.375 1.29h1.593q.012-.321.157-.536a.9.9 0 0 1 .37-.328 1.06 1.06 0 0 1 .481-.113q.262 0 .477.11a.86.86 0 0 1 .347.312.86.86 0 0 1 .13.472q0 .255-.114.461-.113.204-.305.371a4 4 0 0 1-.433.325 2.7 2.7 0 0 0-.555.453q-.23.25-.352.656-.117.406-.12 1.09m.106 2.36a.92.92 0 0 0 .668.273q.25 0 .46-.125.212-.13.34-.34a.897.897 0 0 0-.149-1.129.9.9 0 0 0-.651-.274.92.92 0 0 0-.668.274.88.88 0 0 0-.27.656.9.9 0 0 0 .27.664",
        clipRule: "evenodd"
      }
    )
  }
), Bf = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.425 5.189q-.7-.091-1.425-.092c-3.564 0-6.716 1.703-8.445 4.296l-.277.416.277.416c1.141 1.712 2.902 3.035 4.991 3.737l.744-1.336c-1.727-.522-3.19-1.527-4.187-2.817C4.59 7.887 7.11 6.597 10 6.597q.318 0 .63.02z"
        }
      ),
      /* @__PURE__ */ f.jsx("path", { fill: "currentColor", d: "M10.179 7.43a2.385 2.385 0 0 0-2.105 3.786z" }),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m5.979 17.041.874.486 1.722-3.097q.7.09 1.425.091c3.564 0 6.716-1.702 8.445-4.296l.277-.416-.277-.416c-1.141-1.711-2.902-3.035-4.991-3.737l1.5-2.697-.875-.486zM12.71 6.993l-.783 1.41a2.386 2.386 0 0 1-2.105 3.786L9.368 13q.313.02.631.02c2.89 0 5.41-1.29 6.897-3.212-.998-1.29-2.46-2.294-4.187-2.816",
          clipRule: "evenodd"
        }
      )
    ]
  }
), zf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M11.506 14.123v-3.574a.44.44 0 0 0-.463-.463H8.811a.44.44 0 0 0-.469.463v3.574zm-6.996.164V10.14l5.039-4.23q.381-.318.756 0l5.033 4.23v4.148q0 .675-.416 1.06-.411.393-1.113.393H6.045q-.71 0-1.125-.392-.41-.387-.41-1.06M2.494 8.955q0-.346.305-.603l6.105-5.127q.47-.393 1.026-.393.562 0 1.025.393l6.1 5.12q.299.253.299.622a.66.66 0 0 1-.217.521.78.78 0 0 1-.545.194.75.75 0 0 1-.317-.07 1.5 1.5 0 0 1-.287-.188l-5.73-4.81a.5.5 0 0 0-.328-.135.5.5 0 0 0-.323.134l-5.742 4.81a1.5 1.5 0 0 1-.287.188.75.75 0 0 1-.316.07q-.352 0-.563-.204a.72.72 0 0 1-.205-.522M13.41 5.773V4.391q0-.205.123-.328a.46.46 0 0 1 .334-.124h1.078q.205 0 .328.123a.44.44 0 0 1 .123.329v3.04z"
      }
    )
  }
), Hf = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx("path", { stroke: "#000", d: "M2.5 2.5h3.571v3.571H2.5z" }),
      /* @__PURE__ */ f.jsx("path", { fill: "currentColor", stroke: "#000", d: "M8.214 2.5h3.571v3.571H8.214z" }),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          stroke: "#000",
          d: "M13.929 2.5H17.5v3.571h-3.571zM2.5 8.214h3.571v3.571H2.5zM8.214 8.214h3.571v3.571H8.214z"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          stroke: "#000",
          d: "M13.929 8.214H17.5v3.571h-3.571zM2.5 13.929h3.571V17.5H2.5z"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          stroke: "#000",
          d: "M8.214 13.929h3.571V17.5H8.214zM13.929 13.929H17.5V17.5h-3.571z"
        }
      )
    ]
  }
), Wf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M9.214 1.588q.923 0 1.73.349a4.4 4.4 0 0 1 1.428.957q.616.608.957 1.421.349.807.349 1.73 0 1.388-.827 2.516-.82 1.12-2.359 1.77l1.695 1.702q.144.15.144.335a.43.43 0 0 1-.137.328l-1.743 1.737 1.251 1.237a.46.46 0 0 1 .137.328.44.44 0 0 1-.137.335l-2.16 2.16a.4.4 0 0 1-.321.123.45.45 0 0 1-.294-.123l-1.183-1.155a.8.8 0 0 1-.164-.24.8.8 0 0 1-.048-.273v-6.63a4.5 4.5 0 0 1-1.483-.971 4.47 4.47 0 0 1-1.306-3.179 4.4 4.4 0 0 1 1.299-3.158q.615-.616 1.422-.957a4.5 4.5 0 0 1 1.75-.342m0 4.15q.491 0 .848-.35.355-.354.355-.854 0-.492-.355-.847a1.16 1.16 0 0 0-.848-.356 1.15 1.15 0 0 0-.855.356 1.15 1.15 0 0 0-.348.847q0 .5.348.855.356.348.855.348"
      }
    )
  }
), Uf = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          stroke: "#000",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M10.906 8.966c1.459 1.316 1.459 3.45 0 4.765l-2.53 2.282c-1.459 1.316-3.824 1.316-5.282 0-1.459-1.315-1.459-3.449 0-4.764l1.265-1.142"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          stroke: "#000",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M8.094 11c-1.459-1.316-1.459-3.449 0-4.765l2.53-2.282c1.459-1.316 3.823-1.316 5.282 0s1.459 3.449 0 4.765l-1.265 1.14"
        }
      )
    ]
  }
), $f = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "#fff",
        d: "M2 6a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2M2 14a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2"
      }
    )
  }
), qf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m17 7.862-1.78-4.45H4.78L3 7.862v.08c0 .34.099.841.407 1.27.113.155.25.298.417.419v6.957h12.353V9.631a1.9 1.9 0 0 0 .416-.42A2.25 2.25 0 0 0 17 7.941zm-1.647 2.105a2.5 2.5 0 0 1-.412.033c-.789 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782a2.5 2.5 0 0 1-.412-.033v3.432h10.706zM13.706 7.94c0 .209.066.53.252.789.17.237.459.446.983.446.525 0 .813-.209.984-.446.165-.23.235-.51.249-.716l-.03-.073zm.956-3.706 1.153 2.883h-2.19l-.641-2.883zm-1.881 2.883-.64-2.883h-1.73v2.883zm-5.562 0 .64-2.883h1.73v2.883zm-.203-2.883-.64 2.883H4.185l1.153-2.883zm-3.19 3.78.03-.074h2.438c0 .209-.066.53-.252.789-.17.237-.459.446-.983.446-.525 0-.813-.209-.984-.446a1.43 1.43 0 0 1-.249-.716m5.51.715a1.43 1.43 0 0 0 .252-.789h-2.47c0 .209.066.53.251.789.171.237.46.446.984.446.525 0 .813-.209.983-.446m3.294 0c.186-.258.252-.58.252-.789h-2.47c0 .209.066.53.252.789.17.237.458.446.983.446s.813-.209.983-.446",
        clipRule: "evenodd"
      }
    )
  }
), Kf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.868 6.582h11.1v1.5h-11.1zm0 3.377h11.1v1.5h-11.1zm11.1 3.377h-11.1v1.5h11.1z",
        clipRule: "evenodd"
      }
    )
  }
), Gf = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M3.362 5.144 7.874 2.54l4.089 7.083-4.512 2.605z"
        }
      ),
      /* @__PURE__ */ f.jsx("path", { stroke: "#000", strokeWidth: 1.5, d: "m9.92 6.08 7.332-4.233" }),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M3.977 15.387 2 13.41h13.615l-.723 1.977h-1.346c-.33 0-.989.198-.989.989s.66.988.989.988h.597v1.483h-8.83v-1.483H6.41c.79 0 .988-.659.988-.988 0-.33-.198-.989-.988-.989z"
        }
      )
    ]
  }
), Yf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.918 14.994v.752q-.519.36-1.08.618A7.003 7.003 0 0 1 6.968 5.05a7 7 0 0 1 8.95-.796v.752a4.979 4.979 0 0 0-3.293 1.459 5 5 0 0 0 3.293 8.53m-4.353-.398q.495.493 1.059.859a5.5 5.5 0 1 1 0-10.91q-.564.366-1.06.859a6.5 6.5 0 0 0 0 9.192",
        clipRule: "evenodd"
      }
    )
  }
), Xf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13.283 6.175a4.643 4.643 0 1 0-6.566 6.567l-.708.707a5.644 5.644 0 1 1 7.982 0l-.708-.707a4.644 4.644 0 0 0 0-6.567m-5.097 1.47a2.565 2.565 0 0 1 3.628 3.627l.707.707a3.565 3.565 0 1 0-5.042 0l.707-.707a2.565 2.565 0 0 1 0-3.627M10 10.959a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 .667-1.5 6h3z",
        clipRule: "evenodd"
      }
    )
  }
), Zf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        stroke: "#000",
        strokeWidth: 1.5,
        d: "M16 6.5 10 3 4 6.5m12 0v7L10 17m6-10.5L10 10m0 7-6-3.5v-7M10 17v-7M4 6.5l6 3.5"
      }
    )
  }
), Jf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.899 5.261a1 1 0 0 1 1 1v.729H2.102v2.055h15.797v4.694a1 1 0 0 1-1 1H3.102a1 1 0 0 1-1-1V6.261a1 1 0 0 1 1-1zm-7.13 7.284h7v1h-7z",
        clipRule: "evenodd"
      }
    )
  }
), Qf = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "#fff",
        d: "M11.882 15.626a2.896 2.896 0 0 0 .241-3.821l3.896-5.009.957.957L18 6.73 13.27 2l-1.024 1.024.958.957-5.009 3.896a2.896 2.896 0 0 0-3.82.242zM3.536 15.44C2.716 16.26 2.17 17.489 2 18c.512-.17 1.74-.717 2.56-1.536l3.129-3.13-1.024-1.023z"
      }
    )
  }
), ed = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx("circle", { cx: 10, cy: 7.361, r: 3.361, fill: "currentColor" }),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M16 16.755H4c.029-2.705 2.704-4.89 6-4.89s5.971 2.185 6 4.89",
          clipRule: "evenodd"
        }
      )
    ]
  }
), td = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.418 3.6h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5V2.1h4m0 12h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5v-5.5h4m8-9h2.5v2.5h-2.5zm4-1.5h-5.5v5.5h5.5V2.1m-1.5 12h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5v-5.5h4M9.668 2.1v7.25h-7.25v1.5h8.75V2.1zm1.5 10.5v5.5h-1.5v-5.5zm1.75-1.75h5.5v-1.5h-5.5z",
        clipRule: "evenodd"
      }
    )
  }
), nd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.668 11.418v5.75h13.5v-5.75h-1.5v4.25h-10.5v-4.25zm11.28-2.47-1.06-1.06-2.72 2.72v-8.19h-1.5v8.19l-2.72-2.72-1.06 1.06 4.53 4.53z",
        clipRule: "evenodd"
      }
    )
  }
), rd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2 10.046 3.975 3l1.864 2.016a7.458 7.458 0 1 1-2.586 7.787l1.762-.354.03.099a5.666 5.666 0 1 0 2.017-6.211l2.117 2.289z",
        clipRule: "evenodd"
      }
    )
  }
), od = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.365 2.635a2.17 2.17 0 1 1-3.068 3.068 2.17 2.17 0 0 1 3.068-3.068M6.788 14.008a2.17 2.17 0 1 1-3.067 3.067 2.17 2.17 0 0 1 3.067-3.067"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          stroke: "#000",
          strokeWidth: 1.5,
          d: "M10.736 4.015h-2.08c-2.763 0-3.498 1.274-3.498 3.498v4.44"
        }
      )
    ]
  }
), sd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2.418 7h1.5V3.5h3.5V2h-5zm11-5v1.5h3.5V7h1.5V2zm-9.5 11h-1.5v5h5v-1.5h-3.5zm9.5 5v-1.5h3.5V13h1.5v5zm-3.75-4v-3.25h-3.25v-1.5h3.25V6h1.5v3.25h3.25v1.5h-3.25V14z",
        clipRule: "evenodd"
      }
    )
  }
), id = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13.918 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-.677 4.383a5.5 5.5 0 1 1 1.06-1.06l2.648 2.647-1.061 1.06z",
        clipRule: "evenodd"
      }
    )
  }
), ad = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.529 15.925 9.419 11 4.493 8.89 2.418 8l2.142-.714 11.08-3.693L17.418 3l-.593 1.779-3.693 11.08L12.418 18zm-1.71-6.386L6.635 8.175l6.82-2.273zm1.06 1.061 1.364 3.183 2.273-6.82z",
        clipRule: "evenodd"
      }
    )
  }
), ld = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2.418 6.374v7.252c0 1.48 1.218 2.68 2.72 2.68h10.56c1.503 0 2.72-1.2 2.72-2.68V6.374c0-1.48-1.217-2.68-2.72-2.68H5.138c-1.502 0-2.72 1.2-2.72 2.68m4 .473a.794.794 0 0 0-.8-.789c-.442 0-.8.353-.8.789 0 .435.359.788.8.788s.8-.353.8-.788m-.8 5.513c.442 0 .8.353.8.788a.794.794 0 0 1-.8.789.794.794 0 0 1-.8-.789c0-.435.359-.788.8-.788m10.4-2.36a.794.794 0 0 0-.8-.788c-.441 0-.8.353-.8.788s.359.788.8.788.8-.353.8-.788m-7.2-3.942h6.4c.442 0 .8.353.8.789a.794.794 0 0 1-.8.788h-6.4a.794.794 0 0 1-.8-.788c0-.436.359-.789.8-.789m6.4 6.302h-6.4c-.441 0-.8.353-.8.788s.359.789.8.789h6.4c.442 0 .8-.353.8-.789a.794.794 0 0 0-.8-.788m-9.6-3.148h6.4c.442 0 .8.353.8.788a.794.794 0 0 1-.8.788h-6.4a.794.794 0 0 1-.8-.788c0-.435.359-.788.8-.788",
        clipRule: "evenodd"
      }
    )
  }
), cd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.775 5.204a5.5 5.5 0 0 0-1.341-.537L11 2.5H9l-.443 2.214c-.444.128-.866.31-1.257.54L5.404 3.99 3.99 5.404l1.283 1.925q-.32.571-.497 1.216L2.5 9v2l2.276.455q.178.645.497 1.216L3.99 14.596l1.414 1.414L7.3 14.746c.391.23.813.412 1.257.54L9 17.5h2l.434-2.167c.474-.12.925-.302 1.341-.537l1.821 1.214 1.414-1.414-1.195-1.793c.253-.427.45-.891.581-1.382L17.5 11V9l-2.104-.42a5.5 5.5 0 0 0-.581-1.383l1.195-1.793-1.414-1.414zm-.59 2.692a2.976 2.976 0 1 0-4.208 4.208 2.976 2.976 0 0 0 4.209-4.208",
        clipRule: "evenodd"
      }
    )
  }
), ud = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M4 6.234a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V10.5L14 9v5.734a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.769l-1.516 1.5z"
        }
      ),
      /* @__PURE__ */ f.jsx("path", { stroke: "#000", strokeWidth: 1.25, d: "M11 3h5v5" }),
      /* @__PURE__ */ f.jsx("path", { stroke: "#000", strokeWidth: 1.5, d: "m16 3-8 8" })
    ]
  }
), fd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.668 3.959h-10.5v6.75c0 1.653.47 3.021 1.358 4.141.877 1.106 2.123 1.92 3.598 2.549l.294.125.295-.125c1.474-.63 2.72-1.443 3.598-2.549.888-1.12 1.357-2.488 1.357-4.141zm-9 6.75v-5.25h3.75v10.43c-1.191-.544-2.097-1.19-2.717-1.971-.658-.83-1.033-1.862-1.033-3.209",
        clipRule: "evenodd"
      }
    )
  }
), dd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.418 3.25h-5.75v13.5h5.75v-1.5h-4.25V4.75h4.25zm4.53 11.28-1.06-1.06 2.72-2.72h-8.19v-1.5h8.19l-2.72-2.72 1.06-1.06L18.48 10z",
        clipRule: "evenodd"
      }
    )
  }
), hd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.539 10.75H4.298v-1.5h12.24z",
        clipRule: "evenodd"
      }
    )
  }
), pd = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M4.633 10.75a6 6 0 0 1 .008-1.5H2.202v1.5zM5.814 6.456A5.9 5.9 0 0 1 6.88 5.401L5.139 3.66l-1.06 1.06zM4.078 15.28l1.711-1.711c.306.398.662.755 1.058 1.063L5.14 16.34zM9.668 15.802v2.414h1.5V15.8a5.9 5.9 0 0 1-1.5.003M13.98 14.623l1.718 1.717 1.06-1.06-1.721-1.723c-.305.4-.66.758-1.056 1.066M16.184 10.75h2.45v-1.5h-2.457a6 6 0 0 1 .007 1.5M15.012 6.467l1.747-1.747-1.061-1.06-1.75 1.75c.399.305.756.66 1.064 1.057M11.168 4.258V1.784h-1.5v2.472a5.9 5.9 0 0 1 1.5.002"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10.418 12.504a2.504 2.504 0 1 0 0-5.008 2.504 2.504 0 0 0 0 5.008m0 1.5a4.004 4.004 0 1 0 0-8.008 4.004 4.004 0 0 0 0 8.008",
          clipRule: "evenodd"
        }
      )
    ]
  }
), md = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.668 4.75h-5.25v-1.5h6.75V12h2.25l-1.125 1.5-.937 1.25-.938 1.25-.937-1.25-.938-1.25-1.125-1.5h2.25zM5.418 4l.938 1.25.937 1.25L8.418 8h-2.25v7.25h5.25v1.5h-6.75V8h-2.25l1.125-1.5.938-1.25z",
        clipRule: "evenodd"
      }
    )
  }
), vd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12.28 2.856-6.71 8.887h4.134l-1.424 6.2 6.887-8.71h-4.322z",
        clipRule: "evenodd"
      }
    )
  }
), gd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M7.271 3.521c-.376.377-.521.902-.521 1.479H3v1h14V5h-3.75c0-.577-.145-1.102-.521-1.479C12.352 3.145 11.827 3 11.25 3h-2.5c-.577 0-1.102.145-1.479.521m.708.708c-.124.123-.229.348-.229.771h4.5c0-.423-.105-.648-.229-.771-.123-.124-.348-.229-.771-.229h-2.5c-.423 0-.648.105-.771.229M5.5 18l-1-11h11l-1 11zm7.58-10.006a.5.5 0 0 1 .47.53l-.489 8.022a.5.5 0 0 1-.998-.061l.488-8.022a.5.5 0 0 1 .53-.47m-6.629.53a.5.5 0 0 1 .998-.061l.488 8.022a.5.5 0 0 1-.998.06zM10 7.993a.5.5 0 0 1 .5.5v8.021a.5.5 0 0 1-1 0v-8.02a.5.5 0 0 1 .5-.5",
        clipRule: "evenodd"
      }
    )
  }
), yd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m4.662 2.789-.985 2.515v10.281h3.5v1.86h1.97l1.859-1.86h2.844l3.827-3.828V2.79zM16.365 11.1l-2.188 2.187h-3.5l-1.86 1.86v-1.86H5.866V4.101h10.5zm-2.188-4.484v3.828h-1.312V6.617zm-3.5 0v3.828H9.365V6.617z",
        clipRule: "evenodd"
      }
    )
  }
), xd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M4 11.445v5.11h12v-5.11h-1.333v3.777H5.333v-3.777zM5.973 7.47l.943.943 2.418-2.417v7.28h1.333v-7.28l2.417 2.417.943-.943L10 3.444z",
        clipRule: "evenodd"
      }
    )
  }
), wd = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M3.103 10.154C4.59 12.077 7.11 13.366 10 13.366s5.41-1.29 6.897-3.212C15.41 8.232 12.89 6.942 10 6.942s-5.41 1.29-6.897 3.212m-1.548-.416C3.285 7.145 6.436 5.442 10 5.442s6.716 1.703 8.445 4.296l.277.416-.277.416c-1.73 2.594-4.881 4.296-8.445 4.296s-6.716-1.702-8.445-4.296l-.277-.416z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M12.386 10.154a2.386 2.386 0 1 1-4.772 0 2.386 2.386 0 0 1 4.772 0"
        }
      )
    ]
  }
), bd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5 6.05c0 .443.39.802.87.802H17V16H5.495C4.117 16 3 14.97 3 13.698V6.302C3 5.031 4.117 4 5.495 4H14.5v1.247H5.87c-.48 0-.87.36-.87.802m7 5.45a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0",
        clipRule: "evenodd"
      }
    )
  }
), Sd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 480 332",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "#fff",
        d: "M126.613 93.984c62.622-61.312 164.152-61.312 226.775 0l7.536 7.379a7.735 7.735 0 0 1 0 11.102l-25.781 25.242a4.07 4.07 0 0 1-5.67 0l-10.371-10.154c-43.687-42.773-114.517-42.773-158.204 0l-11.107 10.874a4.07 4.07 0 0 1-5.669 0l-25.781-25.242a7.733 7.733 0 0 1 0-11.102zm280.093 52.204 22.946 22.465a7.735 7.735 0 0 1 0 11.102L326.189 281.056c-3.131 3.065-8.208 3.065-11.339 0l-73.432-71.896a2.034 2.034 0 0 0-2.835 0l-73.43 71.896c-3.131 3.065-8.208 3.065-11.339 0L50.348 179.754a7.735 7.735 0 0 1 0-11.102l22.946-22.466c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897a2.033 2.033 0 0 0 2.834 0l73.429-71.897c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897a2.034 2.034 0 0 0 2.835 0l73.431-71.895c3.132-3.066 8.208-3.066 11.339 0"
      }
    )
  }
), Cd = (e) => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M18 16.427 10 2.57 2 16.427zm-7.322-4.333v-5.77H9.216v5.77zm-.731 3.087a1.089 1.089 0 1 0 0-2.178 1.089 1.089 0 0 0 0 2.178",
        clipRule: "evenodd"
      }
    )
  }
), Td = (e) => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 276 28",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ f.jsxs("g", { clipPath: "url(#sequence-boilerplate-logo_svg__a)", children: [
        /* @__PURE__ */ f.jsx(
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
            children: /* @__PURE__ */ f.jsx("path", { fill: "#fff", d: "M35.03 0H0v28h35.03z" })
          }
        ),
        /* @__PURE__ */ f.jsxs("g", { mask: "url(#sequence-boilerplate-logo_svg__b)", children: [
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "#111",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__c)",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__d)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__e)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__f)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__g)",
              d: "M8.758 20.989a1.75 1.75 0 1 0-3.502.001 1.75 1.75 0 0 0 3.502-.001"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__h)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__i)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__j)",
              d: "M28.025 5.25H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__k)",
              d: "M28.025 19.239H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__l)",
              d: "M21.018 12.25H7.006a1.75 1.75 0 1 0 0 3.5h14.012a1.75 1.75 0 1 0 0-3.5"
            }
          )
        ] }),
        /* @__PURE__ */ f.jsx(
          "path",
          {
            fill: "#fff",
            d: "M49.65 23.282c3.413 0 5.82-1.94 5.82-4.911.023-2.563-1.523-4.048-4.101-4.982l-1.768-.647c-1.792-.647-2.652-1.197-2.652-2.443s1.277-1.964 2.75-1.964c1.375 0 2.431.551 3.315 1.581l1.989-1.892C53.726 6.514 51.885 5.7 49.724 5.7c-3.241 0-5.67 1.82-5.67 4.791 0 2.324 1.35 3.808 4.124 4.791l1.915.67c1.67.6 2.48 1.366 2.48 2.588 0 1.268-1.178 2.108-2.823 2.108-1.695 0-3.144-.815-4.051-2.18l-2.26 1.748c1.03 1.843 3.411 3.066 6.211 3.066m13.638-.049c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.663 1.054-1.768 1.82-3.51 1.82-2.063 0-3.66-1.268-3.782-3.257h9.65c.023-.383.023-.599.023-.862 0-3.856-2.675-5.94-5.917-5.94-3.732 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.634-7.569c.392-1.772 1.94-2.658 3.535-2.658 1.571 0 2.996.934 3.29 2.658zM83.236 28V11.017h-2.701v1.606c-.687-.959-2.16-1.845-3.929-1.845-3.364 0-5.917 2.803-5.917 6.228s2.553 6.227 5.917 6.227c1.768 0 3.242-.885 3.929-1.844V28zm-6.138-7.163c-2.161 0-3.659-1.676-3.659-3.832s1.498-3.833 3.659-3.833 3.658 1.677 3.658 3.833-1.498 3.832-3.658 3.832m13.127 2.396c1.57 0 2.872-.646 3.585-1.868v1.628h2.7V11.017h-2.7v5.893c0 2.587-1.228 3.928-2.996 3.928-1.57 0-2.455-1.174-2.455-3.09v-6.73h-2.7v7.162c0 3.065 1.742 5.054 4.566 5.054m14.733 0c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.664 1.054-1.769 1.82-3.511 1.82-2.062 0-3.658-1.268-3.781-3.257h9.649c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.917-5.94-3.732 0-6.41 2.706-6.41 6.227 0 3.664 2.677 6.227 6.41 6.227m-3.635-7.569c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.995.934 3.29 2.658zm11.591 7.33h2.702V17.1c0-2.587 1.374-3.929 3.167-3.929 1.571 0 2.553 1.126 2.553 3.042v6.778h2.701v-7.21c0-3.041-1.842-5.006-4.69-5.006-1.596 0-2.971.647-3.731 1.869v-1.628h-2.702zm19.439.24c2.554 0 4.666-1.294 5.721-3.306l-2.357-1.245c-.59 1.222-1.792 2.107-3.364 2.107-2.185 0-3.732-1.653-3.732-3.784 0-2.132 1.547-3.785 3.732-3.785 1.571 0 2.774.886 3.364 2.108l2.357-1.245c-1.055-2.012-3.167-3.306-5.721-3.306-3.681 0-6.481 2.683-6.481 6.228s2.8 6.227 6.481 6.227m13.003 0c2.579 0 4.493-1.055 5.598-2.779l-2.062-1.437c-.663 1.054-1.768 1.82-3.511 1.82-2.063 0-3.658-1.268-3.782-3.257h9.651c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.918-5.94-3.733 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.635-7.57c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.996.934 3.29 2.658z"
          }
        )
      ] }),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "#fff",
          fillOpacity: 0.6,
          d: "M159.371 22.5V5.385h5.905q2.242 0 3.664 1.374 1.447 1.374 1.447 3.351 0 2.121-1.591 3.302 2.748 1.134 2.748 4.074 0 2.146-1.567 3.592-1.543 1.422-3.953 1.422zm2.82-2.58h3.76q1.35 0 2.097-.674.748-.675.748-1.784 0-1.085-.748-1.76-.747-.699-2.097-.699h-3.76zm0-7.327h2.941q1.133 0 1.808-.651.675-.65.675-1.663 0-.965-.675-1.64t-1.808-.674h-2.941zm21.281 8.34q-1.808 1.808-4.483 1.808-2.676 0-4.508-1.808-1.808-1.832-1.808-4.46 0-2.626 1.808-4.435 1.832-1.831 4.508-1.832 2.675 0 4.483 1.832 1.833 1.809 1.832 4.436t-1.832 4.46m-4.483-.65q1.566 0 2.579-1.085 1.036-1.11 1.036-2.724 0-1.616-1.036-2.7-1.013-1.11-2.579-1.109-1.592 0-2.628 1.109-1.012 1.085-1.012 2.7 0 1.614 1.012 2.724 1.036 1.084 2.628 1.084m9.585-12.463q-.723 0-1.254-.506a1.74 1.74 0 0 1-.53-1.278q0-.723.53-1.23.531-.53 1.254-.53.747 0 1.253.53.507.507.506 1.23 0 .747-.506 1.278a1.7 1.7 0 0 1-1.253.506m-1.326 14.68V10.448h2.651V22.5zm5.491 0V4.421h2.652V22.5zm10.939.241q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.662 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976M211.49 22.5V10.448h2.652v2.145a3.2 3.2 0 0 1 1.229-1.64q.917-.626 1.953-.626.627 0 1.036.096v2.724a3.8 3.8 0 0 0-1.325-.217q-1.206 0-2.049.989-.844.963-.844 2.7V22.5zm11.086 5.038h-2.652v-17.09h2.652v1.614q.554-.771 1.591-1.301a4.87 4.87 0 0 1 2.29-.555q2.459 0 4.122 1.832 1.687 1.832 1.687 4.436t-1.687 4.435q-1.663 1.832-4.122 1.832-1.23 0-2.29-.53-1.037-.555-1.591-1.326zm3.399-7.207q1.566 0 2.579-1.11 1.012-1.107 1.012-2.747t-1.012-2.748q-1.013-1.11-2.579-1.11-1.592 0-2.604 1.11-1.012 1.108-1.012 2.748t1.012 2.748q1.013 1.108 2.604 1.108m8.268 2.169V4.421h2.652V22.5zm10.433.241q-2.459 0-4.146-1.832-1.663-1.832-1.663-4.435 0-2.604 1.663-4.436 1.688-1.831 4.146-1.832 1.23 0 2.266.555 1.036.53 1.591 1.302v-1.616h2.652V22.5h-2.652v-1.615q-.555.771-1.591 1.326a4.9 4.9 0 0 1-2.266.53m-2.097-3.52q1.013 1.11 2.579 1.11t2.58-1.11q1.012-1.107 1.012-2.747t-1.012-2.748q-1.012-1.11-2.58-1.11-1.566 0-2.579 1.11-1.012 1.108-1.012 2.748t1.012 2.748m16.705 3.4q-1.831 0-2.989-1.013-1.133-1.035-1.133-2.989v-5.81h-2.506v-2.361h2.506V7.097h2.652v3.35h3.447v2.363h-3.447v5.375q0 1.11.482 1.591.483.458 1.543.458.867 0 1.422-.24v2.361q-.867.265-1.977.265m9.051.12q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.663 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976"
        }
      ),
      /* @__PURE__ */ f.jsxs("defs", { children: [
        /* @__PURE__ */ f.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__c",
            x1: 17.515,
            x2: 17.515,
            y1: 0,
            y2: 28.029,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ f.jsx("stop", { stopColor: "#1D273D" }),
              /* @__PURE__ */ f.jsx("stop", { offset: 1, stopColor: "#0D0F13" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__d",
            x1: 5.794,
            x2: 8.172,
            y1: 8.726,
            y2: 5.545,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ f.jsx("stop", { stopColor: "#4462FE" }),
              /* @__PURE__ */ f.jsx("stop", { offset: 1, stopColor: "#7D69FA" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__e",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ f.jsx("stop", { stopColor: "#3757FD" }),
              /* @__PURE__ */ f.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__f",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ f.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ f.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__g",
            x1: 5.75,
            x2: 8.085,
            y1: 22.168,
            y2: 19.691,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ f.jsx("stop", { stopColor: "#BC3EE6" }),
              /* @__PURE__ */ f.jsx("stop", { offset: 1, stopColor: "#D972F1" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__h",
            x1: 26.981,
            x2: 29.14,
            y1: 15.16,
            y2: 12.861,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ f.jsx("stop", { stopColor: "#29BDFF" }),
              /* @__PURE__ */ f.jsx("stop", { offset: 1, stopColor: "#96E7FB" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__i",
            x1: 26.554,
            x2: 29.596,
            y1: 15.726,
            y2: 15.58,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ f.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ f.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__j",
            x1: 13.667,
            x2: 28.081,
            y1: 8.726,
            y2: 5.265,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ f.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ f.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__k",
            x1: 13.8,
            x2: 27.638,
            y1: 22.741,
            y2: 19.191,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ f.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ f.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__l",
            x1: 7.608,
            x2: 20.826,
            y1: 15.777,
            y2: 12.228,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ f.jsx("stop", { stopColor: "#6634FF" }),
              /* @__PURE__ */ f.jsx("stop", { offset: 1, stopColor: "#9C6DFF" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsx("clipPath", { id: "sequence-boilerplate-logo_svg__a", children: /* @__PURE__ */ f.jsx("path", { fill: "#fff", d: "M0 0h151.273v28H0z" }) })
      ] })
    ]
  }
), Pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Add: sf,
  AirDropper: af,
  Apple: lf,
  ArrowDown: cf,
  ArrowRight: uf,
  Bridge: ff,
  Checkmark: df,
  ChevronDown: hf,
  ChevronLeft: pf,
  ChevronRight: mf,
  ChevronUp: vf,
  Close: gf,
  Contacts: yf,
  ContextMenu: xf,
  Contract: wf,
  Copy: bf,
  Currency: Sf,
  DashedCircle: Cf,
  Deploy: Tf,
  Device: Pf,
  Discord: Ef,
  Docs: Rf,
  Download: Af,
  Drag: jf,
  Edit: Mf,
  Email: Df,
  Expand: Vf,
  ExternalLink: Of,
  Facebook: Lf,
  GasTank: _f,
  Globe: kf,
  Google: Nf,
  Grid: If,
  Help: Ff,
  Hidden: Bf,
  Home: zf,
  Indexer: Hf,
  Key: Wf,
  Link: Uf,
  List: $f,
  Marketplaces: qf,
  Menu: Kf,
  Minter: Gf,
  Moon: Yf,
  Network: Xf,
  Node: Zf,
  Payments: Jf,
  Pin: Qf,
  Profile: ed,
  QrCode: td,
  Receive: nd,
  Refresh: rd,
  Relayer: od,
  Scan: sd,
  Search: id,
  Send: ad,
  Sequence: ld,
  SequenceBoilerplateLogo: Td,
  Settings: cd,
  Share: ud,
  Shield: fd,
  Signout: dd,
  Subtract: hd,
  Sun: pd,
  Swap: md,
  Transaction: vd,
  Trash: gd,
  Twitch: yd,
  Upload: xd,
  Visible: wd,
  Wallet: bd,
  WalletConnect: Sd,
  Warning: Cd
}, Symbol.toStringTag, { value: "Module" })), Cr = Pd;
function $e({
  name: e,
  alt: t = void 0,
  className: n = "",
  ...r
}) {
  const o = Cr == null ? void 0 : Cr[e];
  return /* @__PURE__ */ f.jsx(
    Jn,
    {
      fallbackAs: "svg",
      name: e,
      preserveAspectRatio: "xMinYMin",
      "aria-hidden": t ? void 0 : !0,
      role: t ? "img" : "presentation",
      title: t,
      "aria-label": t || void 0,
      focusable: "false",
      className: `${n} flex-shrink-0`.trim(),
      asChild: !0,
      ...r,
      children: /* @__PURE__ */ f.jsx(o, {})
    }
  );
}
function Ed(e) {
  const { title: t, children: n, ...r } = Se("card-collapsable", e);
  return /* @__PURE__ */ f.jsxs("details", { ...r, children: [
    t ? /* @__PURE__ */ f.jsx(Rd, { children: t }) : null,
    /* @__PURE__ */ f.jsx("div", { className: "px-4 pb-4 w-full text-start flex flex-col gap-4", children: n })
  ] });
}
function Rd(e) {
  const { children: t, ...n } = e;
  return /* @__PURE__ */ f.jsxs(
    "summary",
    {
      className: "flex items-center justify-between text-14 font-bold p-4",
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ f.jsx($e, { name: "ChevronDown", width: "20", "data-arrow": !0 })
      ]
    }
  );
}
function i5(e) {
  const { collapsable: t, ...n } = e;
  return t ? /* @__PURE__ */ f.jsx(Ed, { ...n }) : /* @__PURE__ */ f.jsx(Ad, { ...n });
}
function Ad(e) {
  const { children: t, ...n } = Se(
    "card",
    e
  );
  return /* @__PURE__ */ f.jsx("div", { ...n, children: t });
}
function a5() {
  return /* @__PURE__ */ f.jsx("hr", { className: "w-full border-white/20" });
}
function Pa(e) {
  const { children: t, ...n } = Se(
    "group-title",
    e
  );
  return /* @__PURE__ */ f.jsx("h2", { ...n, children: t });
}
function jd(e, t) {
  const {
    asChild: n = !1,
    title: r,
    children: o,
    ...i
  } = Se("group", e);
  return /* @__PURE__ */ f.jsxs(Jn, { ref: t, fallbackAs: "div", asChild: n, ...i, children: [
    r ? /* @__PURE__ */ f.jsx(Pa, { children: r }) : null,
    o
  ] });
}
const l5 = Object.assign(It(jd), {
  Title: Pa
}), Ea = Xe(null);
function Ro() {
  const e = ue(Ea);
  if (!e)
    throw new Error("useField must be used within a Field");
  return e;
}
function Md({
  children: e,
  value: t
}) {
  return /* @__PURE__ */ f.jsx(Ea.Provider, { value: t, children: e });
}
function Ra(e) {
  const {
    children: t,
    asChild: n = !1,
    id: r,
    ...o
  } = Se("input", e), { name: i } = Ro();
  return /* @__PURE__ */ f.jsx(
    Jn,
    {
      asChild: n,
      fallbackAs: "input",
      name: i,
      id: r || i,
      ...o,
      children: t
    }
  );
}
function Dd(e) {
  const { children: t, ...n } = Se("segmented-input", e);
  function r(o) {
    var s, a;
    const i = (a = (s = o == null ? void 0 : o.target) == null ? void 0 : s.parentNode) == null ? void 0 : a.querySelector("input");
    i && i.focus();
  }
  return /* @__PURE__ */ f.jsxs("div", { ...n, children: [
    /* @__PURE__ */ f.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        className: "absolute w-full h-full inset-0 z-0 cursor-text",
        onClick: r
      }
    ),
    t
  ] });
}
function Vd(e) {
  const { children: t, ...n } = Se(
    "segmented-input-segment",
    e
  );
  return /* @__PURE__ */ f.jsx("div", { ...n, children: t });
}
const Tr = Object.assign(Dd, {
  Segment: Vd
});
function Od(e, t) {
  const { children: n, ...r } = Se(
    "label",
    e
  ), { name: o } = Ro();
  return /* @__PURE__ */ f.jsx("label", { ref: t, htmlFor: o, ...r, children: n });
}
const Ao = It(Od);
function Ld({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label, o = typeof t == "string" ? null : t.icon;
    return /* @__PURE__ */ f.jsx("option", { value: n, "data-icon": o, children: r }, n);
  });
}
function Fs(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Aa(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = v.createContext(s), l = n.length;
    n = [...n, s];
    function c(d) {
      const { scope: h, children: m, ...g } = d, p = (h == null ? void 0 : h[e][l]) || a, w = v.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ f.jsx(p.Provider, { value: w, children: m });
    }
    function u(d, h) {
      const m = (h == null ? void 0 : h[e][l]) || a, g = v.useContext(m);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return c.displayName = i + "Provider", [c, u];
  }
  const o = () => {
    const i = n.map((s) => v.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, _d(o, ...t)];
}
function _d(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function kd(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ja(...e) {
  return (t) => e.forEach((n) => kd(n, t));
}
function le(...e) {
  return v.useCallback(ja(...e), e);
}
var on = v.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = v.Children.toArray(n), i = o.find(Nd);
  if (i) {
    const s = i.props.children, a = o.map((l) => l === i ? v.Children.count(s) > 1 ? v.Children.only(null) : v.isValidElement(s) ? s.props.children : null : l);
    return /* @__PURE__ */ f.jsx(Gr, { ...r, ref: t, children: v.isValidElement(s) ? v.cloneElement(s, void 0, a) : null });
  }
  return /* @__PURE__ */ f.jsx(Gr, { ...r, ref: t, children: n });
});
on.displayName = "Slot";
var Gr = v.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (v.isValidElement(n)) {
    const o = Fd(n);
    return v.cloneElement(n, {
      ...Id(r, n.props),
      // @ts-ignore
      ref: t ? ja(t, o) : o
    });
  }
  return v.Children.count(n) > 1 ? v.Children.only(null) : null;
});
Gr.displayName = "SlotClone";
var Ma = ({ children: e }) => /* @__PURE__ */ f.jsx(f.Fragment, { children: e });
function Nd(e) {
  return v.isValidElement(e) && e.type === Ma;
}
function Id(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      i(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Fd(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Bd(e) {
  const t = e + "CollectionProvider", [n, r] = Aa(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (m) => {
    const { scope: g, children: p } = m, w = me.useRef(null), x = me.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f.jsx(o, { scope: g, itemMap: x, collectionRef: w, children: p });
  };
  s.displayName = t;
  const a = e + "CollectionSlot", l = me.forwardRef(
    (m, g) => {
      const { scope: p, children: w } = m, x = i(a, p), b = le(g, x.collectionRef);
      return /* @__PURE__ */ f.jsx(on, { ref: b, children: w });
    }
  );
  l.displayName = a;
  const c = e + "CollectionItemSlot", u = "data-radix-collection-item", d = me.forwardRef(
    (m, g) => {
      const { scope: p, children: w, ...x } = m, b = me.useRef(null), S = le(g, b), T = i(c, p);
      return me.useEffect(() => (T.itemMap.set(b, { ref: b, ...x }), () => void T.itemMap.delete(b))), /* @__PURE__ */ f.jsx(on, { [u]: "", ref: S, children: w });
    }
  );
  d.displayName = c;
  function h(m) {
    const g = i(e + "CollectionConsumer", m);
    return me.useCallback(() => {
      const w = g.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${u}]`));
      return Array.from(g.itemMap.values()).sort(
        (T, C) => x.indexOf(T.ref.current) - x.indexOf(C.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: l, ItemSlot: d },
    h,
    r
  ];
}
function Da(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = v.createContext(s), l = n.length;
    n = [...n, s];
    const c = (d) => {
      var x;
      const { scope: h, children: m, ...g } = d, p = ((x = h == null ? void 0 : h[e]) == null ? void 0 : x[l]) || a, w = v.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ f.jsx(p.Provider, { value: w, children: m });
    };
    c.displayName = i + "Provider";
    function u(d, h) {
      var p;
      const m = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[l]) || a, g = v.useContext(m);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const o = () => {
    const i = n.map((s) => v.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, zd(o, ...t)];
}
function zd(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Hd = v.createContext(void 0);
function Wd(e) {
  const t = v.useContext(Hd);
  return e || t || "ltr";
}
var Ud = [
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
], se = Ud.reduce((e, t) => {
  const n = v.forwardRef((r, o) => {
    const { asChild: i, ...s } = r, a = i ? on : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f.jsx(a, { ...s, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function $d(e, t) {
  e && Zn.flushSync(() => e.dispatchEvent(t));
}
function qe(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function qd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Kd = "DismissableLayer", Yr = "dismissableLayer.update", Gd = "dismissableLayer.pointerDownOutside", Yd = "dismissableLayer.focusOutside", Bs, Va = v.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), jo = v.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, c = v.useContext(Va), [u, d] = v.useState(null), h = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = v.useState({}), g = le(t, (E) => d(E)), p = Array.from(c.layers), [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), x = p.indexOf(w), b = u ? p.indexOf(u) : -1, S = c.layersWithOutsidePointerEventsDisabled.size > 0, T = b >= x, C = Jd((E) => {
      const R = E.target, L = [...c.branches].some((k) => k.contains(R));
      !T || L || (o == null || o(E), s == null || s(E), E.defaultPrevented || a == null || a());
    }, h), A = Qd((E) => {
      const R = E.target;
      [...c.branches].some((k) => k.contains(R)) || (i == null || i(E), s == null || s(E), E.defaultPrevented || a == null || a());
    }, h);
    return qd((E) => {
      b === c.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, h), v.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Bs = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), zs(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Bs);
        };
    }, [u, h, n, c]), v.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), zs());
    }, [u, c]), v.useEffect(() => {
      const E = () => m({});
      return document.addEventListener(Yr, E), () => document.removeEventListener(Yr, E);
    }, []), /* @__PURE__ */ f.jsx(
      se.div,
      {
        ...l,
        ref: g,
        style: {
          pointerEvents: S ? T ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: J(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: J(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
jo.displayName = Kd;
var Xd = "DismissableLayerBranch", Zd = v.forwardRef((e, t) => {
  const n = v.useContext(Va), r = v.useRef(null), o = le(t, r);
  return v.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ f.jsx(se.div, { ...e, ref: o });
});
Zd.displayName = Xd;
function Jd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = v.useRef(!1), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Oa(
            Gd,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Qd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = v.useRef(!1);
  return v.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Oa(Yd, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function zs() {
  const e = new CustomEvent(Yr);
  document.dispatchEvent(e);
}
function Oa(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? $d(o, i) : o.dispatchEvent(i);
}
var Pr = 0;
function eh() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Hs()), document.body.insertAdjacentElement("beforeend", e[1] ?? Hs()), Pr++, () => {
      Pr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Pr--;
    };
  }, []);
}
function Hs() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Er = "focusScope.autoFocusOnMount", Rr = "focusScope.autoFocusOnUnmount", Ws = { bubbles: !1, cancelable: !0 }, th = "FocusScope", La = v.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = v.useState(null), c = qe(o), u = qe(i), d = v.useRef(null), h = le(t, (p) => l(p)), m = v.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  v.useEffect(() => {
    if (r) {
      let p = function(S) {
        if (m.paused || !a) return;
        const T = S.target;
        a.contains(T) ? d.current = T : tt(d.current, { select: !0 });
      }, w = function(S) {
        if (m.paused || !a) return;
        const T = S.relatedTarget;
        T !== null && (a.contains(T) || tt(d.current, { select: !0 }));
      }, x = function(S) {
        if (document.activeElement === document.body)
          for (const C of S)
            C.removedNodes.length > 0 && tt(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", w);
      const b = new MutationObserver(x);
      return a && b.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", w), b.disconnect();
      };
    }
  }, [r, a, m.paused]), v.useEffect(() => {
    if (a) {
      $s.add(m);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const x = new CustomEvent(Er, Ws);
        a.addEventListener(Er, c), a.dispatchEvent(x), x.defaultPrevented || (nh(ah(_a(a)), { select: !0 }), document.activeElement === p && tt(a));
      }
      return () => {
        a.removeEventListener(Er, c), setTimeout(() => {
          const x = new CustomEvent(Rr, Ws);
          a.addEventListener(Rr, u), a.dispatchEvent(x), x.defaultPrevented || tt(p ?? document.body, { select: !0 }), a.removeEventListener(Rr, u), $s.remove(m);
        }, 0);
      };
    }
  }, [a, c, u, m]);
  const g = v.useCallback(
    (p) => {
      if (!n && !r || m.paused) return;
      const w = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, x = document.activeElement;
      if (w && x) {
        const b = p.currentTarget, [S, T] = rh(b);
        S && T ? !p.shiftKey && x === T ? (p.preventDefault(), n && tt(S, { select: !0 })) : p.shiftKey && x === S && (p.preventDefault(), n && tt(T, { select: !0 })) : x === b && p.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ f.jsx(se.div, { tabIndex: -1, ...s, ref: h, onKeyDown: g });
});
La.displayName = th;
function nh(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (tt(r, { select: t }), document.activeElement !== n) return;
}
function rh(e) {
  const t = _a(e), n = Us(t, e), r = Us(t.reverse(), e);
  return [n, r];
}
function _a(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Us(e, t) {
  for (const n of e)
    if (!oh(n, { upTo: t })) return n;
}
function oh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function sh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function tt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && sh(e) && t && e.select();
  }
}
var $s = ih();
function ih() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = qs(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = qs(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function qs(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ah(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ve = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, lh = v.useId || (() => {
}), ch = 0;
function Qn(e) {
  const [t, n] = v.useState(lh());
  return ve(() => {
    n((r) => r ?? String(ch++));
  }, [e]), t ? `radix-${t}` : "";
}
const uh = ["top", "right", "bottom", "left"], rt = Math.min, xe = Math.max, In = Math.round, Cn = Math.floor, Ne = (e) => ({
  x: e,
  y: e
}), fh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dh = {
  start: "end",
  end: "start"
};
function Xr(e, t, n) {
  return xe(e, rt(t, n));
}
function Ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ge(e) {
  return e.split("-")[0];
}
function Ft(e) {
  return e.split("-")[1];
}
function Mo(e) {
  return e === "x" ? "y" : "x";
}
function Do(e) {
  return e === "y" ? "height" : "width";
}
function ot(e) {
  return ["top", "bottom"].includes(Ge(e)) ? "y" : "x";
}
function Vo(e) {
  return Mo(ot(e));
}
function hh(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ft(e), o = Vo(e), i = Do(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Fn(s)), [s, Fn(s)];
}
function ph(e) {
  const t = Fn(e);
  return [Zr(e), t, Zr(t)];
}
function Zr(e) {
  return e.replace(/start|end/g, (t) => dh[t]);
}
function mh(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function vh(e, t, n, r) {
  const o = Ft(e);
  let i = mh(Ge(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Zr)))), i;
}
function Fn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => fh[t]);
}
function gh(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ka(e) {
  return typeof e != "number" ? gh(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Bn(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Ks(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ot(t), s = Vo(t), a = Do(s), l = Ge(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ft(t)) {
    case "start":
      m[s] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      m[s] += h * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const yh = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Ks(c, r, l), h = r, m = {}, g = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: w,
      fn: x
    } = a[p], {
      x: b,
      y: S,
      data: T,
      reset: C
    } = await x({
      x: u,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: m,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = b ?? u, d = S ?? d, m = {
      ...m,
      [w]: {
        ...m[w],
        ...T
      }
    }, C && g <= 50 && (g++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (c = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: u,
      y: d
    } = Ks(c, h, l)), p = -1);
  }
  return {
    x: u,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: m
  };
};
async function sn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = Ke(t, e), g = ka(m), w = a[h ? d === "floating" ? "reference" : "floating" : d], x = Bn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), b = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), T = await (i.isElement == null ? void 0 : i.isElement(S)) ? await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Bn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: S,
    strategy: l
  }) : b);
  return {
    top: (x.top - C.top + g.top) / T.y,
    bottom: (C.bottom - x.bottom + g.bottom) / T.y,
    left: (x.left - C.left + g.left) / T.x,
    right: (C.right - x.right + g.right) / T.x
  };
}
const xh = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = Ke(e, t) || {};
    if (c == null)
      return {};
    const d = ka(u), h = {
      x: n,
      y: r
    }, m = Vo(o), g = Do(m), p = await s.getDimensions(c), w = m === "y", x = w ? "top" : "left", b = w ? "bottom" : "right", S = w ? "clientHeight" : "clientWidth", T = i.reference[g] + i.reference[m] - h[m] - i.floating[g], C = h[m] - i.reference[m], A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let E = A ? A[S] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(A))) && (E = a.floating[S] || i.floating[g]);
    const R = T / 2 - C / 2, L = E / 2 - p[g] / 2 - 1, k = rt(d[x], L), z = rt(d[b], L), U = k, I = E - p[g] - z, N = E / 2 - p[g] / 2 + R, X = Xr(U, N, I), F = !l.arrow && Ft(o) != null && N !== X && i.reference[g] / 2 - (N < U ? k : z) - p[g] / 2 < 0, V = F ? N < U ? N - U : N - I : 0;
    return {
      [m]: h[m] + V,
      data: {
        [m]: X,
        centerOffset: N - X - V,
        ...F && {
          alignmentOffset: V
        }
      },
      reset: F
    };
  }
}), wh = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: p = !0,
        ...w
      } = Ke(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const x = Ge(o), b = ot(a), S = Ge(a) === a, T = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = h || (S || !p ? [Fn(a)] : ph(a)), A = g !== "none";
      !h && A && C.push(...vh(a, p, g, T));
      const E = [a, ...C], R = await sn(t, w), L = [];
      let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && L.push(R[x]), d) {
        const N = hh(o, s, T);
        L.push(R[N[0]], R[N[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: L
      }], !L.every((N) => N <= 0)) {
        var z, U;
        const N = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, X = E[N];
        if (X)
          return {
            data: {
              index: N,
              overflows: k
            },
            reset: {
              placement: X
            }
          };
        let F = (U = k.filter((V) => V.overflows[0] <= 0).sort((V, M) => V.overflows[1] - M.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!F)
          switch (m) {
            case "bestFit": {
              var I;
              const V = (I = k.filter((M) => {
                if (A) {
                  const W = ot(M.placement);
                  return W === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((W) => W > 0).reduce((W, ne) => W + ne, 0)]).sort((M, W) => M[1] - W[1])[0]) == null ? void 0 : I[0];
              V && (F = V);
              break;
            }
            case "initialPlacement":
              F = a;
              break;
          }
        if (o !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
function Gs(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ys(e) {
  return uh.some((t) => e[t] >= 0);
}
const bh = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Ke(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await sn(t, {
            ...o,
            elementContext: "reference"
          }), s = Gs(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ys(s)
            }
          };
        }
        case "escaped": {
          const i = await sn(t, {
            ...o,
            altBoundary: !0
          }), s = Gs(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ys(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Sh(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ge(n), a = Ft(n), l = ot(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && l ? -1 : 1, d = Ke(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof g == "number" && (m = a === "end" ? g * -1 : g), l ? {
    x: m * u,
    y: h * c
  } : {
    x: h * c,
    y: m * u
  };
}
const Ch = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await Sh(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Th = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (w) => {
            let {
              x,
              y: b
            } = w;
            return {
              x,
              y: b
            };
          }
        },
        ...l
      } = Ke(e, t), c = {
        x: n,
        y: r
      }, u = await sn(t, l), d = ot(Ge(o)), h = Mo(d);
      let m = c[h], g = c[d];
      if (i) {
        const w = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", b = m + u[w], S = m - u[x];
        m = Xr(b, m, S);
      }
      if (s) {
        const w = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", b = g + u[w], S = g - u[x];
        g = Xr(b, g, S);
      }
      const p = a.fn({
        ...t,
        [h]: m,
        [d]: g
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [h]: i,
            [d]: s
          }
        }
      };
    }
  };
}, Ph = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Ke(e, t), u = {
        x: n,
        y: r
      }, d = ot(o), h = Mo(d);
      let m = u[h], g = u[d];
      const p = Ke(a, t), w = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const S = h === "y" ? "height" : "width", T = i.reference[h] - i.floating[S] + w.mainAxis, C = i.reference[h] + i.reference[S] - w.mainAxis;
        m < T ? m = T : m > C && (m = C);
      }
      if (c) {
        var x, b;
        const S = h === "y" ? "width" : "height", T = ["top", "left"].includes(Ge(o)), C = i.reference[d] - i.floating[S] + (T && ((x = s.offset) == null ? void 0 : x[d]) || 0) + (T ? 0 : w.crossAxis), A = i.reference[d] + i.reference[S] + (T ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (T ? w.crossAxis : 0);
        g < C ? g = C : g > A && (g = A);
      }
      return {
        [h]: m,
        [d]: g
      };
    }
  };
}, Eh = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = Ke(e, t), u = await sn(t, c), d = Ge(o), h = Ft(o), m = ot(o) === "y", {
        width: g,
        height: p
      } = i.floating;
      let w, x;
      d === "top" || d === "bottom" ? (w = d, x = h === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = d, w = h === "end" ? "top" : "bottom");
      const b = p - u.top - u.bottom, S = g - u.left - u.right, T = rt(p - u[w], b), C = rt(g - u[x], S), A = !t.middlewareData.shift;
      let E = T, R = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = S), (r = t.middlewareData.shift) != null && r.enabled.y && (E = b), A && !h) {
        const k = xe(u.left, 0), z = xe(u.right, 0), U = xe(u.top, 0), I = xe(u.bottom, 0);
        m ? R = g - 2 * (k !== 0 || z !== 0 ? k + z : xe(u.left, u.right)) : E = p - 2 * (U !== 0 || I !== 0 ? U + I : xe(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: R,
        availableHeight: E
      });
      const L = await s.getDimensions(a.floating);
      return g !== L.width || p !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function er() {
  return typeof window < "u";
}
function Bt(e) {
  return Na(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function we(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function He(e) {
  var t;
  return (t = (Na(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Na(e) {
  return er() ? e instanceof Node || e instanceof we(e).Node : !1;
}
function Ve(e) {
  return er() ? e instanceof Element || e instanceof we(e).Element : !1;
}
function ze(e) {
  return er() ? e instanceof HTMLElement || e instanceof we(e).HTMLElement : !1;
}
function Xs(e) {
  return !er() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof we(e).ShadowRoot;
}
function pn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Rh(e) {
  return ["table", "td", "th"].includes(Bt(e));
}
function tr(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Oo(e) {
  const t = Lo(), n = Ve(e) ? Oe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Ah(e) {
  let t = st(e);
  for (; ze(t) && !Ot(t); ) {
    if (Oo(t))
      return t;
    if (tr(t))
      return null;
    t = st(t);
  }
  return null;
}
function Lo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ot(e) {
  return ["html", "body", "#document"].includes(Bt(e));
}
function Oe(e) {
  return we(e).getComputedStyle(e);
}
function nr(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function st(e) {
  if (Bt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Xs(e) && e.host || // Fallback.
    He(e)
  );
  return Xs(t) ? t.host : t;
}
function Ia(e) {
  const t = st(e);
  return Ot(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ze(t) && pn(t) ? t : Ia(t);
}
function an(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ia(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = we(o);
  if (i) {
    const a = Jr(s);
    return t.concat(s, s.visualViewport || [], pn(o) ? o : [], a && n ? an(a) : []);
  }
  return t.concat(o, an(o, [], n));
}
function Jr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Fa(e) {
  const t = Oe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ze(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = In(n) !== i || In(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function _o(e) {
  return Ve(e) ? e : e.contextElement;
}
function Dt(e) {
  const t = _o(e);
  if (!ze(t))
    return Ne(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Fa(t);
  let s = (i ? In(n.width) : n.width) / r, a = (i ? In(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const jh = /* @__PURE__ */ Ne(0);
function Ba(e) {
  const t = we(e);
  return !Lo() || !t.visualViewport ? jh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Mh(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== we(e) ? !1 : t;
}
function yt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = _o(e);
  let s = Ne(1);
  t && (r ? Ve(r) && (s = Dt(r)) : s = Dt(e));
  const a = Mh(i, n, r) ? Ba(i) : Ne(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const h = we(i), m = r && Ve(r) ? we(r) : r;
    let g = h, p = Jr(g);
    for (; p && r && m !== g; ) {
      const w = Dt(p), x = p.getBoundingClientRect(), b = Oe(p), S = x.left + (p.clientLeft + parseFloat(b.paddingLeft)) * w.x, T = x.top + (p.clientTop + parseFloat(b.paddingTop)) * w.y;
      l *= w.x, c *= w.y, u *= w.x, d *= w.y, l += S, c += T, g = we(p), p = Jr(g);
    }
  }
  return Bn({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function ko(e, t) {
  const n = nr(e).scrollLeft;
  return t ? t.left + n : yt(He(e)).left + n;
}
function za(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ko(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Dh(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = He(r), a = t ? tr(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ne(1);
  const u = Ne(0), d = ze(r);
  if ((d || !d && !i) && ((Bt(r) !== "body" || pn(s)) && (l = nr(r)), ze(r))) {
    const m = yt(r);
    c = Dt(r), u.x = m.x + r.clientLeft, u.y = m.y + r.clientTop;
  }
  const h = s && !d && !i ? za(s, l, !0) : Ne(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + h.y
  };
}
function Vh(e) {
  return Array.from(e.getClientRects());
}
function Oh(e) {
  const t = He(e), n = nr(e), r = e.ownerDocument.body, o = xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ko(e);
  const a = -n.scrollTop;
  return Oe(r).direction === "rtl" && (s += xe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Lh(e, t) {
  const n = we(e), r = He(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Lo();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function _h(e, t) {
  const n = yt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ze(e) ? Dt(e) : Ne(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Zs(e, t, n) {
  let r;
  if (t === "viewport")
    r = Lh(e, n);
  else if (t === "document")
    r = Oh(He(e));
  else if (Ve(t))
    r = _h(t, n);
  else {
    const o = Ba(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Bn(r);
}
function Ha(e, t) {
  const n = st(e);
  return n === t || !Ve(n) || Ot(n) ? !1 : Oe(n).position === "fixed" || Ha(n, t);
}
function kh(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = an(e, [], !1).filter((a) => Ve(a) && Bt(a) !== "body"), o = null;
  const i = Oe(e).position === "fixed";
  let s = i ? st(e) : e;
  for (; Ve(s) && !Ot(s); ) {
    const a = Oe(s), l = Oo(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || pn(s) && !l && Ha(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = st(s);
  }
  return t.set(e, r), r;
}
function Nh(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? tr(t) ? [] : kh(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, u) => {
    const d = Zs(t, u, o);
    return c.top = xe(d.top, c.top), c.right = rt(d.right, c.right), c.bottom = rt(d.bottom, c.bottom), c.left = xe(d.left, c.left), c;
  }, Zs(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Ih(e) {
  const {
    width: t,
    height: n
  } = Fa(e);
  return {
    width: t,
    height: n
  };
}
function Fh(e, t, n) {
  const r = ze(t), o = He(t), i = n === "fixed", s = yt(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ne(0);
  if (r || !r && !i)
    if ((Bt(t) !== "body" || pn(o)) && (a = nr(t)), r) {
      const h = yt(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && (l.x = ko(o));
  const c = o && !r && !i ? za(o, a) : Ne(0), u = s.left + a.scrollLeft - l.x - c.x, d = s.top + a.scrollTop - l.y - c.y;
  return {
    x: u,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Ar(e) {
  return Oe(e).position === "static";
}
function Js(e, t) {
  if (!ze(e) || Oe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return He(e) === n && (n = n.ownerDocument.body), n;
}
function Wa(e, t) {
  const n = we(e);
  if (tr(e))
    return n;
  if (!ze(e)) {
    let o = st(e);
    for (; o && !Ot(o); ) {
      if (Ve(o) && !Ar(o))
        return o;
      o = st(o);
    }
    return n;
  }
  let r = Js(e, t);
  for (; r && Rh(r) && Ar(r); )
    r = Js(r, t);
  return r && Ot(r) && Ar(r) && !Oo(r) ? n : r || Ah(e) || n;
}
const Bh = async function(e) {
  const t = this.getOffsetParent || Wa, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Fh(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function zh(e) {
  return Oe(e).direction === "rtl";
}
const Hh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Dh,
  getDocumentElement: He,
  getClippingRect: Nh,
  getOffsetParent: Wa,
  getElementRects: Bh,
  getClientRects: Vh,
  getDimensions: Ih,
  getScale: Dt,
  isElement: Ve,
  isRTL: zh
};
function Wh(e, t) {
  let n = null, r;
  const o = He(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: c,
      top: u,
      width: d,
      height: h
    } = e.getBoundingClientRect();
    if (a || t(), !d || !h)
      return;
    const m = Cn(u), g = Cn(o.clientWidth - (c + d)), p = Cn(o.clientHeight - (u + h)), w = Cn(c), b = {
      rootMargin: -m + "px " + -g + "px " + -p + "px " + -w + "px",
      threshold: xe(0, rt(1, l)) || 1
    };
    let S = !0;
    function T(C) {
      const A = C[0].intersectionRatio;
      if (A !== l) {
        if (!S)
          return s();
        A ? s(!1, A) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, b);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Uh(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = _o(e), u = o || i ? [...c ? an(c) : [], ...an(t)] : [];
  u.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), i && x.addEventListener("resize", n);
  });
  const d = c && a ? Wh(c, n) : null;
  let h = -1, m = null;
  s && (m = new ResizeObserver((x) => {
    let [b] = x;
    b && b.target === c && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var S;
      (S = m) == null || S.observe(t);
    })), n();
  }), c && !l && m.observe(c), m.observe(t));
  let g, p = l ? yt(e) : null;
  l && w();
  function w() {
    const x = yt(e);
    p && (x.x !== p.x || x.y !== p.y || x.width !== p.width || x.height !== p.height) && n(), p = x, g = requestAnimationFrame(w);
  }
  return n(), () => {
    var x;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), d == null || d(), (x = m) == null || x.disconnect(), m = null, l && cancelAnimationFrame(g);
  };
}
const $h = Ch, qh = Th, Kh = wh, Gh = Eh, Yh = bh, Qs = xh, Xh = Ph, Zh = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Hh,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return yh(e, t, {
    ...o,
    platform: i
  });
};
var Vn = typeof document < "u" ? ba : hn;
function zn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!zn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !zn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ua(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ei(e, t) {
  const n = Ua(e);
  return Math.round(t * n) / n;
}
function jr(e) {
  const t = v.useRef(e);
  return Vn(() => {
    t.current = e;
  }), t;
}
function Jh(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [u, d] = v.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, m] = v.useState(r);
  zn(h, r) || m(r);
  const [g, p] = v.useState(null), [w, x] = v.useState(null), b = v.useCallback((M) => {
    M !== A.current && (A.current = M, p(M));
  }, []), S = v.useCallback((M) => {
    M !== E.current && (E.current = M, x(M));
  }, []), T = i || g, C = s || w, A = v.useRef(null), E = v.useRef(null), R = v.useRef(u), L = l != null, k = jr(l), z = jr(o), U = jr(c), I = v.useCallback(() => {
    if (!A.current || !E.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: h
    };
    z.current && (M.platform = z.current), Zh(A.current, E.current, M).then((W) => {
      const ne = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: U.current !== !1
      };
      N.current && !zn(R.current, ne) && (R.current = ne, Zn.flushSync(() => {
        d(ne);
      }));
    });
  }, [h, t, n, z, U]);
  Vn(() => {
    c === !1 && R.current.isPositioned && (R.current.isPositioned = !1, d((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [c]);
  const N = v.useRef(!1);
  Vn(() => (N.current = !0, () => {
    N.current = !1;
  }), []), Vn(() => {
    if (T && (A.current = T), C && (E.current = C), T && C) {
      if (k.current)
        return k.current(T, C, I);
      I();
    }
  }, [T, C, I, k, L]);
  const X = v.useMemo(() => ({
    reference: A,
    floating: E,
    setReference: b,
    setFloating: S
  }), [b, S]), F = v.useMemo(() => ({
    reference: T,
    floating: C
  }), [T, C]), V = v.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return M;
    const W = ei(F.floating, u.x), ne = ei(F.floating, u.y);
    return a ? {
      ...M,
      transform: "translate(" + W + "px, " + ne + "px)",
      ...Ua(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: ne
    };
  }, [n, a, F.floating, u.x, u.y]);
  return v.useMemo(() => ({
    ...u,
    update: I,
    refs: X,
    elements: F,
    floatingStyles: V
  }), [u, I, X, F, V]);
}
const Qh = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Qs({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Qs({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, e0 = (e, t) => ({
  ...$h(e),
  options: [e, t]
}), t0 = (e, t) => ({
  ...qh(e),
  options: [e, t]
}), n0 = (e, t) => ({
  ...Xh(e),
  options: [e, t]
}), r0 = (e, t) => ({
  ...Kh(e),
  options: [e, t]
}), o0 = (e, t) => ({
  ...Gh(e),
  options: [e, t]
}), s0 = (e, t) => ({
  ...Yh(e),
  options: [e, t]
}), i0 = (e, t) => ({
  ...Qh(e),
  options: [e, t]
});
var a0 = "Arrow", $a = v.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ f.jsx(
    se.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ f.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
$a.displayName = a0;
var l0 = $a;
function c0(e) {
  const [t, n] = v.useState(void 0);
  return ve(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          s = c.inlineSize, a = c.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var No = "Popper", [qa, rr] = Aa(No), [u0, Ka] = qa(No), Ga = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = v.useState(null);
  return /* @__PURE__ */ f.jsx(u0, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Ga.displayName = No;
var Ya = "PopperAnchor", Xa = v.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Ka(Ya, n), s = v.useRef(null), a = le(t, s);
    return v.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ f.jsx(se.div, { ...o, ref: a });
  }
);
Xa.displayName = Ya;
var Io = "PopperContent", [f0, d0] = qa(Io), Za = v.forwardRef(
  (e, t) => {
    var O, K, ie, $, G, q;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: g,
      ...p
    } = e, w = Ka(Io, n), [x, b] = v.useState(null), S = le(t, (he) => b(he)), [T, C] = v.useState(null), A = c0(T), E = (A == null ? void 0 : A.width) ?? 0, R = (A == null ? void 0 : A.height) ?? 0, L = r + (i !== "center" ? "-" + i : ""), k = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, z = Array.isArray(c) ? c : [c], U = z.length > 0, I = {
      padding: k,
      boundary: z.filter(p0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: U
    }, { refs: N, floatingStyles: X, placement: F, isPositioned: V, middlewareData: M } = Jh({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: L,
      whileElementsMounted: (...he) => Uh(...he, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        e0({ mainAxis: o + R, alignmentAxis: s }),
        l && t0({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? n0() : void 0,
          ...I
        }),
        l && r0({ ...I }),
        o0({
          ...I,
          apply: ({ elements: he, rects: Te, availableWidth: _e, availableHeight: je }) => {
            const { width: et, height: Sn } = Te.reference, We = he.floating.style;
            We.setProperty("--radix-popper-available-width", `${_e}px`), We.setProperty("--radix-popper-available-height", `${je}px`), We.setProperty("--radix-popper-anchor-width", `${et}px`), We.setProperty("--radix-popper-anchor-height", `${Sn}px`);
          }
        }),
        T && i0({ element: T, padding: a }),
        m0({ arrowWidth: E, arrowHeight: R }),
        h && s0({ strategy: "referenceHidden", ...I })
      ]
    }), [W, ne] = el(F), Ce = qe(g);
    ve(() => {
      V && (Ce == null || Ce());
    }, [V, Ce]);
    const Ze = (O = M.arrow) == null ? void 0 : O.x, Je = (K = M.arrow) == null ? void 0 : K.y, Le = ((ie = M.arrow) == null ? void 0 : ie.centerOffset) !== 0, [Qe, Ae] = v.useState();
    return ve(() => {
      x && Ae(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...X,
          transform: V ? X.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Qe,
          "--radix-popper-transform-origin": [
            ($ = M.transformOrigin) == null ? void 0 : $.x,
            (G = M.transformOrigin) == null ? void 0 : G.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((q = M.hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f.jsx(
          f0,
          {
            scope: n,
            placedSide: W,
            onArrowChange: C,
            arrowX: Ze,
            arrowY: Je,
            shouldHideArrow: Le,
            children: /* @__PURE__ */ f.jsx(
              se.div,
              {
                "data-side": W,
                "data-align": ne,
                ...p,
                ref: S,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: V ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Za.displayName = Io;
var Ja = "PopperArrow", h0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Qa = v.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = d0(Ja, r), s = h0[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f.jsx(
          l0,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Qa.displayName = Ja;
function p0(e) {
  return e !== null;
}
var m0 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, x, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, u] = el(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (((x = o.arrow) == null ? void 0 : x.x) ?? 0) + a / 2, m = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let g = "", p = "";
    return c === "bottom" ? (g = s ? d : `${h}px`, p = `${-l}px`) : c === "top" ? (g = s ? d : `${h}px`, p = `${r.floating.height + l}px`) : c === "right" ? (g = `${-l}px`, p = s ? d : `${m}px`) : c === "left" && (g = `${r.floating.width + l}px`, p = s ? d : `${m}px`), { data: { x: g, y: p } };
  }
});
function el(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var tl = Ga, nl = Xa, rl = Za, ol = Qa, v0 = "Portal", Fo = v.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = v.useState(!1);
  ve(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? Ju.createPortal(/* @__PURE__ */ f.jsx(se.div, { ...r, ref: t }), s) : null;
});
Fo.displayName = v0;
function Qr({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = g0({ defaultProp: t, onChange: n }), i = e !== void 0, s = i ? e : r, a = qe(n), l = v.useCallback(
    (c) => {
      if (i) {
        const d = typeof c == "function" ? c(e) : c;
        d !== e && a(d);
      } else
        o(c);
    },
    [i, e, o, a]
  );
  return [s, l];
}
function g0({
  defaultProp: e,
  onChange: t
}) {
  const n = v.useState(e), [r] = n, o = v.useRef(r), i = qe(t);
  return v.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
function y0(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var x0 = "VisuallyHidden", Bo = v.forwardRef(
  (e, t) => /* @__PURE__ */ f.jsx(
    se.span,
    {
      ...e,
      ref: t,
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
        ...e.style
      }
    }
  )
);
Bo.displayName = x0;
var w0 = Bo, b0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ct = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), Pn = {}, Mr = 0, sl = function(e) {
  return e && (e.host || sl(e.parentNode));
}, S0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = sl(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, C0 = function(e, t, n, r) {
  var o = S0(t, Array.isArray(e) ? e : [e]);
  Pn[n] || (Pn[n] = /* @__PURE__ */ new WeakMap());
  var i = Pn[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (a.has(h))
        u(h);
      else
        try {
          var m = h.getAttribute(r), g = m !== null && m !== "false", p = (Ct.get(h) || 0) + 1, w = (i.get(h) || 0) + 1;
          Ct.set(h, p), i.set(h, w), s.push(h), p === 1 && g && Tn.set(h, !0), w === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", h, x);
        }
    });
  };
  return u(t), a.clear(), Mr++, function() {
    s.forEach(function(d) {
      var h = Ct.get(d) - 1, m = i.get(d) - 1;
      Ct.set(d, h), i.set(d, m), h || (Tn.has(d) || d.removeAttribute(r), Tn.delete(d)), m || d.removeAttribute(n);
    }), Mr--, Mr || (Ct = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), Pn = {});
  };
}, T0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = b0(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), C0(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ke = function() {
  return ke = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ke.apply(this, arguments);
};
function il(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function P0(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var On = "right-scroll-bar-position", Ln = "width-before-scroll-bar", E0 = "with-scroll-bars-hidden", R0 = "--removed-body-scroll-bar-size";
function Dr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function A0(e, t) {
  var n = rn(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var j0 = typeof window < "u" ? v.useLayoutEffect : v.useEffect, ti = /* @__PURE__ */ new WeakMap();
function M0(e, t) {
  var n = A0(null, function(r) {
    return e.forEach(function(o) {
      return Dr(o, r);
    });
  });
  return j0(function() {
    var r = ti.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || Dr(a, null);
      }), i.forEach(function(a) {
        o.has(a) || Dr(a, s);
      });
    }
    ti.set(n, e);
  }, [e]), n;
}
function D0(e) {
  return e;
}
function V0(e, t) {
  t === void 0 && (t = D0);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var l = function() {
        var u = s;
        s = [], u.forEach(i);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(u) {
          s.push(u), c();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function O0(e) {
  e === void 0 && (e = {});
  var t = V0(null);
  return t.options = ke({ async: !0, ssr: !1 }, e), t;
}
var al = function(e) {
  var t = e.sideCar, n = il(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, ke({}, n));
};
al.isSideCarExport = !0;
function L0(e, t) {
  return e.useMedium(t), al;
}
var ll = O0(), Vr = function() {
}, or = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: Vr,
    onWheelCapture: Vr,
    onTouchMoveCapture: Vr
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, h = e.sideCar, m = e.noIsolation, g = e.inert, p = e.allowPinchZoom, w = e.as, x = w === void 0 ? "div" : w, b = e.gapMode, S = il(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), T = h, C = M0([n, t]), A = ke(ke({}, S), o);
  return v.createElement(
    v.Fragment,
    null,
    u && v.createElement(T, { sideCar: ll, removeScrollBar: c, shards: d, noIsolation: m, inert: g, setCallbacks: i, allowPinchZoom: !!p, lockRef: n, gapMode: b }),
    s ? v.cloneElement(v.Children.only(a), ke(ke({}, A), { ref: C })) : v.createElement(x, ke({}, A, { className: l, ref: C }), a)
  );
});
or.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
or.classNames = {
  fullWidth: Ln,
  zeroRight: On
};
var _0 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function k0() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = _0();
  return t && e.setAttribute("nonce", t), e;
}
function N0(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function I0(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var F0 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = k0()) && (N0(t, n), I0(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, B0 = function() {
  var e = F0();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, cl = function() {
  var e = B0(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, z0 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Or = function(e) {
  return parseInt(e || "", 10) || 0;
}, H0 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Or(n), Or(r), Or(o)];
}, W0 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return z0;
  var t = H0(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, U0 = cl(), Vt = "data-scroll-locked", $0 = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(E0, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Vt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(On, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ln, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(On, " .").concat(On, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ln, " .").concat(Ln, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Vt, `] {
    `).concat(R0, ": ").concat(a, `px;
  }
`);
}, ni = function() {
  var e = parseInt(document.body.getAttribute(Vt) || "0", 10);
  return isFinite(e) ? e : 0;
}, q0 = function() {
  v.useEffect(function() {
    return document.body.setAttribute(Vt, (ni() + 1).toString()), function() {
      var e = ni() - 1;
      e <= 0 ? document.body.removeAttribute(Vt) : document.body.setAttribute(Vt, e.toString());
    };
  }, []);
}, K0 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  q0();
  var i = v.useMemo(function() {
    return W0(o);
  }, [o]);
  return v.createElement(U0, { styles: $0(i, !t, o, n ? "" : "!important") });
}, eo = !1;
if (typeof window < "u")
  try {
    var En = Object.defineProperty({}, "passive", {
      get: function() {
        return eo = !0, !0;
      }
    });
    window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
  } catch {
    eo = !1;
  }
var Tt = eo ? { passive: !1 } : !1, G0 = function(e) {
  return e.tagName === "TEXTAREA";
}, ul = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !G0(e) && n[t] === "visible")
  );
}, Y0 = function(e) {
  return ul(e, "overflowY");
}, X0 = function(e) {
  return ul(e, "overflowX");
}, ri = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = fl(e, r);
    if (o) {
      var i = dl(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Z0 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, J0 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, fl = function(e, t) {
  return e === "v" ? Y0(t) : X0(t);
}, dl = function(e, t) {
  return e === "v" ? Z0(t) : J0(t);
}, Q0 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, e1 = function(e, t, n, r, o) {
  var i = Q0(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), c = !1, u = s > 0, d = 0, h = 0;
  do {
    var m = dl(e, a), g = m[0], p = m[1], w = m[2], x = p - w - i * g;
    (g || x) && fl(e, a) && (d += x, h += g), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (u && (Math.abs(d) < 1 || !o) || !u && (Math.abs(h) < 1 || !o)) && (c = !0), c;
}, Rn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, oi = function(e) {
  return [e.deltaX, e.deltaY];
}, si = function(e) {
  return e && "current" in e ? e.current : e;
}, t1 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, n1 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, r1 = 0, Pt = [];
function o1(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(r1++)[0], i = v.useState(cl)[0], s = v.useRef(e);
  v.useEffect(function() {
    s.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = P0([e.lockRef.current], (e.shards || []).map(si), !0).filter(Boolean);
      return p.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = v.useCallback(function(p, w) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !s.current.allowPinchZoom;
    var x = Rn(p), b = n.current, S = "deltaX" in p ? p.deltaX : b[0] - x[0], T = "deltaY" in p ? p.deltaY : b[1] - x[1], C, A = p.target, E = Math.abs(S) > Math.abs(T) ? "h" : "v";
    if ("touches" in p && E === "h" && A.type === "range")
      return !1;
    var R = ri(E, A);
    if (!R)
      return !0;
    if (R ? C = E : (C = E === "v" ? "h" : "v", R = ri(E, A)), !R)
      return !1;
    if (!r.current && "changedTouches" in p && (S || T) && (r.current = C), !C)
      return !0;
    var L = r.current || C;
    return e1(L, w, p, L === "h" ? S : T, !0);
  }, []), l = v.useCallback(function(p) {
    var w = p;
    if (!(!Pt.length || Pt[Pt.length - 1] !== i)) {
      var x = "deltaY" in w ? oi(w) : Rn(w), b = t.current.filter(function(C) {
        return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && t1(C.delta, x);
      })[0];
      if (b && b.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!b) {
        var S = (s.current.shards || []).map(si).filter(Boolean).filter(function(C) {
          return C.contains(w.target);
        }), T = S.length > 0 ? a(w, S[0]) : !s.current.noIsolation;
        T && w.cancelable && w.preventDefault();
      }
    }
  }, []), c = v.useCallback(function(p, w, x, b) {
    var S = { name: p, delta: w, target: x, should: b, shadowParent: s1(x) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(T) {
        return T !== S;
      });
    }, 1);
  }, []), u = v.useCallback(function(p) {
    n.current = Rn(p), r.current = void 0;
  }, []), d = v.useCallback(function(p) {
    c(p.type, oi(p), p.target, a(p, e.lockRef.current));
  }, []), h = v.useCallback(function(p) {
    c(p.type, Rn(p), p.target, a(p, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return Pt.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, Tt), document.addEventListener("touchmove", l, Tt), document.addEventListener("touchstart", u, Tt), function() {
      Pt = Pt.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", l, Tt), document.removeEventListener("touchmove", l, Tt), document.removeEventListener("touchstart", u, Tt);
    };
  }, []);
  var m = e.removeScrollBar, g = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    g ? v.createElement(i, { styles: n1(o) }) : null,
    m ? v.createElement(K0, { gapMode: e.gapMode }) : null
  );
}
function s1(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const i1 = L0(ll, o1);
var hl = v.forwardRef(function(e, t) {
  return v.createElement(or, ke({}, e, { ref: t, sideCar: i1 }));
});
hl.classNames = or.classNames;
var a1 = [" ", "Enter", "ArrowUp", "ArrowDown"], l1 = [" ", "Enter"], mn = "Select", [sr, ir, c1] = Bd(mn), [zt, c5] = Da(mn, [
  c1,
  rr
]), ar = rr(), [u1, ct] = zt(mn), [f1, d1] = zt(mn), pl = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: s,
    defaultValue: a,
    onValueChange: l,
    dir: c,
    name: u,
    autoComplete: d,
    disabled: h,
    required: m,
    form: g
  } = e, p = ar(t), [w, x] = v.useState(null), [b, S] = v.useState(null), [T, C] = v.useState(!1), A = Wd(c), [E = !1, R] = Qr({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [L, k] = Qr({
    prop: s,
    defaultProp: a,
    onChange: l
  }), z = v.useRef(null), U = w ? g || !!w.closest("form") : !0, [I, N] = v.useState(/* @__PURE__ */ new Set()), X = Array.from(I).map((F) => F.props.value).join(";");
  return /* @__PURE__ */ f.jsx(tl, { ...p, children: /* @__PURE__ */ f.jsxs(
    u1,
    {
      required: m,
      scope: t,
      trigger: w,
      onTriggerChange: x,
      valueNode: b,
      onValueNodeChange: S,
      valueNodeHasChildren: T,
      onValueNodeHasChildrenChange: C,
      contentId: Qn(),
      value: L,
      onValueChange: k,
      open: E,
      onOpenChange: R,
      dir: A,
      triggerPointerDownPosRef: z,
      disabled: h,
      children: [
        /* @__PURE__ */ f.jsx(sr.Provider, { scope: t, children: /* @__PURE__ */ f.jsx(
          f1,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: v.useCallback((F) => {
              N((V) => new Set(V).add(F));
            }, []),
            onNativeOptionRemove: v.useCallback((F) => {
              N((V) => {
                const M = new Set(V);
                return M.delete(F), M;
              });
            }, []),
            children: n
          }
        ) }),
        U ? /* @__PURE__ */ f.jsxs(
          kl,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: u,
            autoComplete: d,
            value: L,
            onChange: (F) => k(F.target.value),
            disabled: h,
            form: g,
            children: [
              L === void 0 ? /* @__PURE__ */ f.jsx("option", { value: "" }) : null,
              Array.from(I)
            ]
          },
          X
        ) : null
      ]
    }
  ) });
};
pl.displayName = mn;
var ml = "SelectTrigger", vl = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = ar(n), s = ct(ml, n), a = s.disabled || r, l = le(t, s.onTriggerChange), c = ir(n), u = v.useRef("touch"), [d, h, m] = Nl((p) => {
      const w = c().filter((S) => !S.disabled), x = w.find((S) => S.value === s.value), b = Il(w, p, x);
      b !== void 0 && s.onValueChange(b.value);
    }), g = (p) => {
      a || (s.onOpenChange(!0), m()), p && (s.triggerPointerDownPosRef.current = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      });
    };
    return /* @__PURE__ */ f.jsx(nl, { asChild: !0, ...i, children: /* @__PURE__ */ f.jsx(
      se.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": _l(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: J(o.onClick, (p) => {
          p.currentTarget.focus(), u.current !== "mouse" && g(p);
        }),
        onPointerDown: J(o.onPointerDown, (p) => {
          u.current = p.pointerType;
          const w = p.target;
          w.hasPointerCapture(p.pointerId) && w.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (g(p), p.preventDefault());
        }),
        onKeyDown: J(o.onKeyDown, (p) => {
          const w = d.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && h(p.key), !(w && p.key === " ") && a1.includes(p.key) && (g(), p.preventDefault());
        })
      }
    ) });
  }
);
vl.displayName = ml;
var gl = "SelectValue", yl = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: s = "", ...a } = e, l = ct(gl, n), { onValueNodeHasChildrenChange: c } = l, u = i !== void 0, d = le(t, l.onValueNodeChange);
    return ve(() => {
      c(u);
    }, [c, u]), /* @__PURE__ */ f.jsx(
      se.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: _l(l.value) ? /* @__PURE__ */ f.jsx(f.Fragment, { children: s }) : i
      }
    );
  }
);
yl.displayName = gl;
var h1 = "SelectIcon", p1 = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ f.jsx(se.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
p1.displayName = h1;
var m1 = "SelectPortal", xl = (e) => /* @__PURE__ */ f.jsx(Fo, { asChild: !0, ...e });
xl.displayName = m1;
var xt = "SelectContent", wl = v.forwardRef(
  (e, t) => {
    const n = ct(xt, e.__scopeSelect), [r, o] = v.useState();
    if (ve(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Zn.createPortal(
        /* @__PURE__ */ f.jsx(bl, { scope: e.__scopeSelect, children: /* @__PURE__ */ f.jsx(sr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ f.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ f.jsx(Sl, { ...e, ref: t });
  }
);
wl.displayName = xt;
var Me = 10, [bl, ut] = zt(xt), v1 = "SelectContentImpl", Sl = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: h,
      collisionPadding: m,
      sticky: g,
      hideWhenDetached: p,
      avoidCollisions: w,
      //
      ...x
    } = e, b = ct(xt, n), [S, T] = v.useState(null), [C, A] = v.useState(null), E = le(t, (O) => T(O)), [R, L] = v.useState(null), [k, z] = v.useState(
      null
    ), U = ir(n), [I, N] = v.useState(!1), X = v.useRef(!1);
    v.useEffect(() => {
      if (S) return T0(S);
    }, [S]), eh();
    const F = v.useCallback(
      (O) => {
        const [K, ...ie] = U().map((q) => q.ref.current), [$] = ie.slice(-1), G = document.activeElement;
        for (const q of O)
          if (q === G || (q == null || q.scrollIntoView({ block: "nearest" }), q === K && C && (C.scrollTop = 0), q === $ && C && (C.scrollTop = C.scrollHeight), q == null || q.focus(), document.activeElement !== G)) return;
      },
      [U, C]
    ), V = v.useCallback(
      () => F([R, S]),
      [F, R, S]
    );
    v.useEffect(() => {
      I && V();
    }, [I, V]);
    const { onOpenChange: M, triggerPointerDownPosRef: W } = b;
    v.useEffect(() => {
      if (S) {
        let O = { x: 0, y: 0 };
        const K = ($) => {
          var G, q;
          O = {
            x: Math.abs(Math.round($.pageX) - (((G = W.current) == null ? void 0 : G.x) ?? 0)),
            y: Math.abs(Math.round($.pageY) - (((q = W.current) == null ? void 0 : q.y) ?? 0))
          };
        }, ie = ($) => {
          O.x <= 10 && O.y <= 10 ? $.preventDefault() : S.contains($.target) || M(!1), document.removeEventListener("pointermove", K), W.current = null;
        };
        return W.current !== null && (document.addEventListener("pointermove", K), document.addEventListener("pointerup", ie, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", K), document.removeEventListener("pointerup", ie, { capture: !0 });
        };
      }
    }, [S, M, W]), v.useEffect(() => {
      const O = () => M(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [M]);
    const [ne, Ce] = Nl((O) => {
      const K = U().filter((G) => !G.disabled), ie = K.find((G) => G.ref.current === document.activeElement), $ = Il(K, O, ie);
      $ && setTimeout(() => $.ref.current.focus());
    }), Ze = v.useCallback(
      (O, K, ie) => {
        const $ = !X.current && !ie;
        (b.value !== void 0 && b.value === K || $) && (L(O), $ && (X.current = !0));
      },
      [b.value]
    ), Je = v.useCallback(() => S == null ? void 0 : S.focus(), [S]), Le = v.useCallback(
      (O, K, ie) => {
        const $ = !X.current && !ie;
        (b.value !== void 0 && b.value === K || $) && z(O);
      },
      [b.value]
    ), Qe = r === "popper" ? to : Cl, Ae = Qe === to ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: h,
      collisionPadding: m,
      sticky: g,
      hideWhenDetached: p,
      avoidCollisions: w
    } : {};
    return /* @__PURE__ */ f.jsx(
      bl,
      {
        scope: n,
        content: S,
        viewport: C,
        onViewportChange: A,
        itemRefCallback: Ze,
        selectedItem: R,
        onItemLeave: Je,
        itemTextRefCallback: Le,
        focusSelectedItem: V,
        selectedItemText: k,
        position: r,
        isPositioned: I,
        searchRef: ne,
        children: /* @__PURE__ */ f.jsx(hl, { as: on, allowPinchZoom: !0, children: /* @__PURE__ */ f.jsx(
          La,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: J(o, (O) => {
              var K;
              (K = b.trigger) == null || K.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ f.jsx(
              jo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ f.jsx(
                  Qe,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...x,
                    ...Ae,
                    onPlaced: () => N(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: J(x.onKeyDown, (O) => {
                      const K = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !K && O.key.length === 1 && Ce(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let $ = U().filter((G) => !G.disabled).map((G) => G.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && ($ = $.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const G = O.target, q = $.indexOf(G);
                          $ = $.slice(q + 1);
                        }
                        setTimeout(() => F($)), O.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Sl.displayName = v1;
var g1 = "SelectItemAlignedPosition", Cl = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = ct(xt, n), s = ut(xt, n), [a, l] = v.useState(null), [c, u] = v.useState(null), d = le(t, (E) => u(E)), h = ir(n), m = v.useRef(!1), g = v.useRef(!0), { viewport: p, selectedItem: w, selectedItemText: x, focusSelectedItem: b } = s, S = v.useCallback(() => {
    if (i.trigger && i.valueNode && a && c && p && w && x) {
      const E = i.trigger.getBoundingClientRect(), R = c.getBoundingClientRect(), L = i.valueNode.getBoundingClientRect(), k = x.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const G = k.left - R.left, q = L.left - G, he = E.left - q, Te = E.width + he, _e = Math.max(Te, R.width), je = window.innerWidth - Me, et = Fs(q, [
          Me,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Me, je - _e)
        ]);
        a.style.minWidth = Te + "px", a.style.left = et + "px";
      } else {
        const G = R.right - k.right, q = window.innerWidth - L.right - G, he = window.innerWidth - E.right - q, Te = E.width + he, _e = Math.max(Te, R.width), je = window.innerWidth - Me, et = Fs(q, [
          Me,
          Math.max(Me, je - _e)
        ]);
        a.style.minWidth = Te + "px", a.style.right = et + "px";
      }
      const z = h(), U = window.innerHeight - Me * 2, I = p.scrollHeight, N = window.getComputedStyle(c), X = parseInt(N.borderTopWidth, 10), F = parseInt(N.paddingTop, 10), V = parseInt(N.borderBottomWidth, 10), M = parseInt(N.paddingBottom, 10), W = X + F + I + M + V, ne = Math.min(w.offsetHeight * 5, W), Ce = window.getComputedStyle(p), Ze = parseInt(Ce.paddingTop, 10), Je = parseInt(Ce.paddingBottom, 10), Le = E.top + E.height / 2 - Me, Qe = U - Le, Ae = w.offsetHeight / 2, O = w.offsetTop + Ae, K = X + F + O, ie = W - K;
      if (K <= Le) {
        const G = z.length > 0 && w === z[z.length - 1].ref.current;
        a.style.bottom = "0px";
        const q = c.clientHeight - p.offsetTop - p.offsetHeight, he = Math.max(
          Qe,
          Ae + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (G ? Je : 0) + q + V
        ), Te = K + he;
        a.style.height = Te + "px";
      } else {
        const G = z.length > 0 && w === z[0].ref.current;
        a.style.top = "0px";
        const he = Math.max(
          Le,
          X + p.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (G ? Ze : 0) + Ae
        ) + ie;
        a.style.height = he + "px", p.scrollTop = K - Le + p.offsetTop;
      }
      a.style.margin = `${Me}px 0`, a.style.minHeight = ne + "px", a.style.maxHeight = U + "px", r == null || r(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    h,
    i.trigger,
    i.valueNode,
    a,
    c,
    p,
    w,
    x,
    i.dir,
    r
  ]);
  ve(() => S(), [S]);
  const [T, C] = v.useState();
  ve(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const A = v.useCallback(
    (E) => {
      E && g.current === !0 && (S(), b == null || b(), g.current = !1);
    },
    [S, b]
  );
  return /* @__PURE__ */ f.jsx(
    x1,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: T
          },
          children: /* @__PURE__ */ f.jsx(
            se.div,
            {
              ...o,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Cl.displayName = g1;
var y1 = "SelectPopperPosition", to = v.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Me,
    ...i
  } = e, s = ar(n);
  return /* @__PURE__ */ f.jsx(
    rl,
    {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
to.displayName = y1;
var [x1, zo] = zt(xt, {}), no = "SelectViewport", Tl = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = ut(no, n), s = zo(no, n), a = le(t, i.onViewportChange), l = v.useRef(0);
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ f.jsx(sr.Slot, { scope: n, children: /* @__PURE__ */ f.jsx(
        se.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: J(o.onScroll, (c) => {
            const u = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: h } = s;
            if (h != null && h.current && d) {
              const m = Math.abs(l.current - u.scrollTop);
              if (m > 0) {
                const g = window.innerHeight - Me * 2, p = parseFloat(d.style.minHeight), w = parseFloat(d.style.height), x = Math.max(p, w);
                if (x < g) {
                  const b = x + m, S = Math.min(g, b), T = b - S;
                  d.style.height = S + "px", d.style.bottom === "0px" && (u.scrollTop = T > 0 ? T : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Tl.displayName = no;
var Pl = "SelectGroup", [w1, b1] = zt(Pl), S1 = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Qn();
    return /* @__PURE__ */ f.jsx(w1, { scope: n, id: o, children: /* @__PURE__ */ f.jsx(se.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
S1.displayName = Pl;
var El = "SelectLabel", C1 = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = b1(El, n);
    return /* @__PURE__ */ f.jsx(se.div, { id: o.id, ...r, ref: t });
  }
);
C1.displayName = El;
var Hn = "SelectItem", [T1, Rl] = zt(Hn), Al = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...s
    } = e, a = ct(Hn, n), l = ut(Hn, n), c = a.value === r, [u, d] = v.useState(i ?? ""), [h, m] = v.useState(!1), g = le(
      t,
      (b) => {
        var S;
        return (S = l.itemRefCallback) == null ? void 0 : S.call(l, b, r, o);
      }
    ), p = Qn(), w = v.useRef("touch"), x = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ f.jsx(
      T1,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: p,
        isSelected: c,
        onItemTextChange: v.useCallback((b) => {
          d((S) => S || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ f.jsx(
          sr.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ f.jsx(
              se.div,
              {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": c && h,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: g,
                onFocus: J(s.onFocus, () => m(!0)),
                onBlur: J(s.onBlur, () => m(!1)),
                onClick: J(s.onClick, () => {
                  w.current !== "mouse" && x();
                }),
                onPointerUp: J(s.onPointerUp, () => {
                  w.current === "mouse" && x();
                }),
                onPointerDown: J(s.onPointerDown, (b) => {
                  w.current = b.pointerType;
                }),
                onPointerMove: J(s.onPointerMove, (b) => {
                  var S;
                  w.current = b.pointerType, o ? (S = l.onItemLeave) == null || S.call(l) : w.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: J(s.onPointerLeave, (b) => {
                  var S;
                  b.currentTarget === document.activeElement && ((S = l.onItemLeave) == null || S.call(l));
                }),
                onKeyDown: J(s.onKeyDown, (b) => {
                  var T;
                  ((T = l.searchRef) == null ? void 0 : T.current) !== "" && b.key === " " || (l1.includes(b.key) && x(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Al.displayName = Hn;
var Gt = "SelectItemText", jl = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, s = ct(Gt, n), a = ut(Gt, n), l = Rl(Gt, n), c = d1(Gt, n), [u, d] = v.useState(null), h = le(
      t,
      (x) => d(x),
      l.onItemTextChange,
      (x) => {
        var b;
        return (b = a.itemTextRefCallback) == null ? void 0 : b.call(a, x, l.value, l.disabled);
      }
    ), m = u == null ? void 0 : u.textContent, g = v.useMemo(
      () => /* @__PURE__ */ f.jsx("option", { value: l.value, disabled: l.disabled, children: m }, l.value),
      [l.disabled, l.value, m]
    ), { onNativeOptionAdd: p, onNativeOptionRemove: w } = c;
    return ve(() => (p(g), () => w(g)), [p, w, g]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(se.span, { id: l.textId, ...i, ref: h }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Zn.createPortal(i.children, s.valueNode) : null
    ] });
  }
);
jl.displayName = Gt;
var Ml = "SelectItemIndicator", Dl = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Rl(Ml, n).isSelected ? /* @__PURE__ */ f.jsx(se.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Dl.displayName = Ml;
var ro = "SelectScrollUpButton", P1 = v.forwardRef((e, t) => {
  const n = ut(ro, e.__scopeSelect), r = zo(ro, e.__scopeSelect), [o, i] = v.useState(!1), s = le(t, r.onScrollButtonChange);
  return ve(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        i(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f.jsx(
    Ol,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
P1.displayName = ro;
var oo = "SelectScrollDownButton", Vl = v.forwardRef((e, t) => {
  const n = ut(oo, e.__scopeSelect), r = zo(oo, e.__scopeSelect), [o, i] = v.useState(!1), s = le(t, r.onScrollButtonChange);
  return ve(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < c;
        i(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f.jsx(
    Ol,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Vl.displayName = oo;
var Ol = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = ut("SelectScrollButton", n), s = v.useRef(null), a = ir(n), l = v.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return v.useEffect(() => () => l(), [l]), ve(() => {
    var u;
    const c = a().find((d) => d.ref.current === document.activeElement);
    (u = c == null ? void 0 : c.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ f.jsx(
    se.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: J(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: J(o.onPointerMove, () => {
        var c;
        (c = i.onItemLeave) == null || c.call(i), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: J(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), E1 = "SelectSeparator", R1 = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ f.jsx(se.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
R1.displayName = E1;
var so = "SelectArrow", Ll = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ar(n), i = ct(so, n), s = ut(so, n);
    return i.open && s.position === "popper" ? /* @__PURE__ */ f.jsx(ol, { ...o, ...r, ref: t }) : null;
  }
);
Ll.displayName = so;
function _l(e) {
  return e === "" || e === void 0;
}
var kl = v.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = v.useRef(null), i = le(t, o), s = y0(n);
    return v.useEffect(() => {
      const a = o.current, l = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (s !== n && u) {
        const d = new Event("change", { bubbles: !0 });
        u.call(a, n), a.dispatchEvent(d);
      }
    }, [s, n]), /* @__PURE__ */ f.jsx(Bo, { asChild: !0, children: /* @__PURE__ */ f.jsx("select", { ...r, ref: i, defaultValue: n }) });
  }
);
kl.displayName = "BubbleSelect";
function Nl(e) {
  const t = qe(e), n = v.useRef(""), r = v.useRef(0), o = v.useCallback(
    (s) => {
      const a = n.current + s;
      t(a), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), i = v.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return v.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function Il(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = A1(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function A1(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var j1 = pl, M1 = vl, D1 = yl, V1 = xl, O1 = wl, L1 = Tl, _1 = Al, k1 = jl, N1 = Dl, I1 = Vl, F1 = Ll;
function B1({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label, o = typeof t == "string" ? null : t.icon;
    return /* @__PURE__ */ f.jsxs(
      _1,
      {
        value: n,
        className: "min-h-[2rem] px-6 py-3 flex items-center gap-2 hover:outline-none cursor-pointer hover:bg-grey-600",
        children: [
          /* @__PURE__ */ f.jsx(N1, { className: "size-5", children: /* @__PURE__ */ f.jsx($e, { name: "Checkmark", width: "20" }) }),
          /* @__PURE__ */ f.jsx(k1, { asChild: !0, children: /* @__PURE__ */ f.jsxs("span", { className: "flex gap-3 items-center text-white", children: [
            o ? /* @__PURE__ */ f.jsx("img", { src: o, className: "size-5", width: "20", alt: "" }) : null,
            /* @__PURE__ */ f.jsx("span", { children: r }),
            " "
          ] }) })
        ]
      },
      n
    );
  });
}
function io({ items: e, native: t }) {
  return t ? /* @__PURE__ */ f.jsx(Ld, { items: e }) : /* @__PURE__ */ f.jsx(B1, { items: e });
}
function z1(e) {
  const {
    defaultValue: t,
    arrowIcon: n = "ChevronDown",
    children: r,
    ...o
  } = e;
  return /* @__PURE__ */ f.jsxs(j1, { defaultValue: t, ...o, children: [
    /* @__PURE__ */ f.jsxs(M1, { className: "flex items-center justify-between w-full bg-transparent border border-grey-500 rounded-[0.5rem] text-gray-200 focus:ring-2 ring-blue-500 px-4 py-3", children: [
      /* @__PURE__ */ f.jsx(D1, {}),
      /* @__PURE__ */ f.jsx($e, { name: n, width: "20" })
    ] }),
    /* @__PURE__ */ f.jsx(V1, { children: /* @__PURE__ */ f.jsxs(O1, { className: "rounded-[0.5rem] overflow-clip text-white border border-white bg-light_buttonGlass backdrop-blur", children: [
      /* @__PURE__ */ f.jsx(L1, { className: "flex flex-col", children: r }),
      /* @__PURE__ */ f.jsx(I1, {}),
      /* @__PURE__ */ f.jsx(F1, {})
    ] }) })
  ] });
}
function H1(e, t) {
  const {
    defaultValue: n,
    children: r,
    arrowIcon: o = "ChevronDown",
    ...i
  } = Se("select", e), [s, a] = rn(null);
  function l(u) {
    var h, m, g;
    e != null && e.onChange && e.onChange(u), e != null && e.onValueChange && e.onValueChange(u.target.value);
    const d = (g = (m = (h = u == null ? void 0 : u.target) == null ? void 0 : h.querySelector("option:checked")) == null ? void 0 : m.dataset) == null ? void 0 : g.icon;
    d && a(d);
  }
  const c = Eo((u) => (l({ target: u }), t), []);
  return /* @__PURE__ */ f.jsxs("div", { ref: c, ...i, children: [
    s ? /* @__PURE__ */ f.jsx("img", { src: s, width: "20", className: "size-5", alt: "" }) : null,
    /* @__PURE__ */ f.jsx("div", { className: "absolute w-[2.5rem] z-10 right-0 pointer-events-none top-0 bottom-0 items-center justify-center flex cursor-pointer", children: /* @__PURE__ */ f.jsx($e, { name: o, className: "w-4 h-4 text-white" }) }),
    /* @__PURE__ */ f.jsx("select", { onChange: l, defaultValue: n, children: r })
  ] });
}
const W1 = It(H1);
function U1(e) {
  let t = {};
  const n = {};
  return Object.keys(e).filter((r) => r.startsWith("variant-")).forEach((r) => {
    const [, o] = r.split("-");
    o && (t[o] = e[r]);
  }), Object.keys(e).filter((r) => !r.startsWith("variant-") && r !== "subvariants").forEach((r) => {
    n[r] = e[r];
  }), e.subvariants && (t = Object.assign(e.subvariants, t)), {
    ...Object.keys(t).length > 0 && { subvariants: t },
    ...n
  };
}
function $1(e, t) {
  const { options: n, native: r = !1, children: o } = U1(e), i = me.isValidElement(o) ? me.cloneElement(o, { native: r }) : o;
  return r ? /* @__PURE__ */ f.jsx(W1, { ref: t, ...e, children: n ? /* @__PURE__ */ f.jsx(io, { items: n, native: !0 }) : i }) : /* @__PURE__ */ f.jsx(z1, { ref: t, ...e, children: n ? /* @__PURE__ */ f.jsx(io, { items: n }) : i });
}
const q1 = Object.assign(It($1), {
  Options: io
}), Fl = Xe(null);
function Ho() {
  const e = ue(Fl);
  return e || {};
}
function K1({
  children: e,
  value: t
}) {
  return /* @__PURE__ */ f.jsx(Fl.Provider, { value: t, children: typeof e == "function" ? e(t) : e });
}
function Bl(e) {
  return e.includes("[]");
}
function G1(e, t) {
  const r = t.keyof().options.reduce(
    (o, i) => {
      if (e.has(i)) {
        const s = e.getAll(i);
        o[i] = s.length > 1 && Bl(i) ? s : s[0];
      }
      return o;
    },
    /* @__PURE__ */ Object.create(null)
  );
  return t.parse(r);
}
function Y1(e) {
  return Array.from(e.keys()).reduce((n, r) => {
    if (e.has(r)) {
      const o = e.getAll(r);
      n[r] = o.length > 1 && Bl(r) ? o : o[0];
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function X1(e, t) {
  let n = e;
  return typeof n != "string" ? null : (t != null && t.prefix && n.startsWith(t.prefix) && (n = n.slice(t.prefix.length)), t != null && t.suffix && n.endsWith(t.suffix) && (n = n.slice(0, -t.suffix.length)), n.charAt(0).toLowerCase() + n.slice(1));
}
const Z1 = (e) => sessionStorage.getItem(e), J1 = (e) => (window.addEventListener("storage", e), () => {
  window.removeEventListener("storage", e);
});
function zl(e, t) {
  sessionStorage.setItem(e, JSON.stringify(t)), window.dispatchEvent(new Event("storage"));
}
function u5(e) {
  const t = Ku(
    J1,
    Z1.bind(null, e)
  );
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
}
function f5(e, t) {
  hn(() => {
    zl(e, t);
  }, [e, t]);
}
function Q1({
  children: e,
  name: t,
  method: n = "POST",
  onAction: r,
  schema: o,
  ...i
}) {
  const [s, a] = rn(), [l, c] = rn({}), u = t || r && typeof r == "function" && r.name !== "onAction" ? X1(r.name, { prefix: "handle" }) : t || null;
  async function d(m) {
    m.preventDefault();
    const g = new FormData(m.currentTarget);
    try {
      const p = o ? G1(g, o) : Y1(g);
      if (r && typeof r == "function") {
        const w = await r(m, p);
        if (console.log(w), w || c(p), w) {
          const [x, b] = w;
          if (x.data && c(x.data), console.log(x.error), x.error) throw x.error;
          b && u && zl(u, x.data);
        }
      }
    } catch (p) {
      if (typeof (p == null ? void 0 : p.flatten) == "function") {
        a({ [u]: p.flatten() });
        return;
      }
      if (p.message) {
        a({
          [u]: { formErrors: [p.message], fieldErrors: [] }
        });
        return;
      }
    }
  }
  const h = Jt(null);
  return /* @__PURE__ */ f.jsx(
    K1,
    {
      value: {
        name: t,
        data: l,
        setData: c,
        ref: h,
        errors: s && (s == null ? void 0 : s[u])
      },
      children: /* @__PURE__ */ f.jsxs(
        "form",
        {
          method: n,
          onSubmit: d,
          noValidate: !0,
          className: "flex flex-col gap-4 items-stretch",
          ref: h,
          ...i,
          children: [
            t ? /* @__PURE__ */ f.jsx("input", { type: "hidden", name: "name", value: t }) : null,
            typeof e == "function" ? e({ errors: s, data: l }) : e
          ]
        }
      )
    }
  );
}
const d5 = Object.assign(Q1, {
  // Success: FormSuccess,
  // Initial: FormInitial,
});
function h5() {
  const { errors: e } = Ho();
  return !e || !e.formErrors ? null : /* @__PURE__ */ f.jsx("div", { className: "bg-red-600 text-white p-4 rounded-[9px]", children: (e == null ? void 0 : e.formErrors[0]) || "Errors" });
}
function p5({ message: e = "Success!" }) {
  const t = Ho();
  return !t || !t.success ? null : /* @__PURE__ */ f.jsx("div", { className: "bg-green-600 text-white px-6 py-4 rounded-[9px] text-18", children: e });
}
function Wo({
  name: e,
  children: t,
  asChild: n = !1,
  className: r = "flex flex-col items-start gap-1"
}) {
  var s;
  const { errors: o } = Ho(), i = (s = o == null ? void 0 : o.fieldErrors) == null ? void 0 : s[e];
  return /* @__PURE__ */ f.jsx(Md, { value: { name: e, error: i }, children: /* @__PURE__ */ f.jsx(Jn, { asChild: n, fallbackAs: "div", className: r, children: /* @__PURE__ */ f.jsx(f.Fragment, { children: t }) }) });
}
function m5() {
  const { error: e } = Ro(), t = e == null ? void 0 : e[0];
  return e ? /* @__PURE__ */ f.jsxs("div", { className: "text-17 inline-flex gap-2 mt-2 items-center bg-neutral-600 px-3 py-2 rounded-[7px]", children: [
    /* @__PURE__ */ f.jsx("span", { className: " flex-shrink-0 flex items-center justify-center h-[1.5rem]", children: /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Error" }) }),
    /* @__PURE__ */ f.jsx("span", { className: "text-white", children: t })
  ] }) : null;
}
function ep(e, t) {
  const { href: n, children: r, ...o } = Se(
    "a",
    e
  );
  return /* @__PURE__ */ f.jsx("a", { href: n, ref: t, ...o, children: r });
}
const v5 = It(ep);
function g5(e) {
  const { children: t, href: n, ...r } = Se("button", e);
  return /* @__PURE__ */ f.jsx("a", { href: n, ...r, children: t });
}
const ii = /* @__PURE__ */ new Set();
function lr(e, t, n) {
  e || ii.has(t) || (console.warn(t), ii.add(t));
}
function tp(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && lr(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
function cr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const ao = (e) => Array.isArray(e);
function Hl(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function ln(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ai(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Uo(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = ai(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = ai(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function ur(e, t, n) {
  const r = e.getProps();
  return Uo(r, t, n !== void 0 ? n : r.custom, e);
}
const $o = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], qo = ["initial", ...$o], ye = (e) => e;
let Ht = ye, it = ye;
process.env.NODE_ENV !== "production" && (Ht = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, it = (e, t) => {
  if (!e)
    throw new Error(t);
});
function Ko(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Lt = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Ie = (e) => e * 1e3, Ue = (e) => e / 1e3, np = Ko(() => window.ScrollTimeline !== void 0);
class rp {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => "finished" in t ? t.finished : t));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((o) => np() && o.attachTimeline ? o.attachTimeline(t) : n(o));
    return () => {
      r.forEach((o, i) => {
        o && o(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class op extends rp {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Go(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const lo = 2e4;
function Wl(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < lo; )
    t += n, r = e.next(t);
  return t >= lo ? 1 / 0 : t;
}
function Yo(e) {
  return typeof e == "function";
}
function li(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Xo = (e) => Array.isArray(e) && typeof e[0] == "number", sp = {
  linearEasing: void 0
};
function ip(e, t) {
  const n = Ko(e);
  return () => {
    var r;
    return (r = sp[t]) !== null && r !== void 0 ? r : n();
  };
}
const Wn = /* @__PURE__ */ ip(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Ul = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < o; i++)
    r += e(Lt(0, o - 1, i)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function $l(e) {
  return !!(typeof e == "function" && Wn() || !e || typeof e == "string" && (e in co || Wn()) || Xo(e) || Array.isArray(e) && e.every($l));
}
const Yt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, co = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Yt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Yt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Yt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Yt([0.33, 1.53, 0.69, 0.99])
};
function ql(e, t) {
  if (e)
    return typeof e == "function" && Wn() ? Ul(e, t) : Xo(e) ? Yt(e) : Array.isArray(e) ? e.map((n) => ql(n, t) || co.easeOut) : co[e];
}
const De = {
  x: !1,
  y: !1
};
function Kl() {
  return De.x || De.y;
}
function ap(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let o = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : o.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Gl(e, t) {
  const n = ap(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function ci(e) {
  return (t) => {
    t.pointerType === "touch" || Kl() || e(t);
  };
}
function lp(e, t, n = {}) {
  const [r, o, i] = Gl(e, n), s = ci((a) => {
    const { target: l } = a, c = t(a);
    if (!c || !l)
      return;
    const u = ci((d) => {
      c(d), l.removeEventListener("pointerleave", u);
    });
    l.addEventListener("pointerleave", u, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", s, o);
  }), i;
}
const Zo = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Xt = /* @__PURE__ */ new WeakSet();
function ui(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Lr(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const cp = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = ui(() => {
    if (Xt.has(n))
      return;
    Lr(n, "down");
    const o = ui(() => {
      Lr(n, "up");
    }), i = () => Lr(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
}, up = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function fp(e) {
  return up.has(e.tagName) || e.tabIndex !== -1;
}
const Yl = (e, t) => t ? e === t ? !0 : Yl(e, t.parentElement) : !1;
function fi(e) {
  return Zo(e) && !Kl();
}
function dp(e, t, n = {}) {
  const [r, o, i] = Gl(e, n), s = (a) => {
    const l = a.currentTarget;
    if (!fi(a) || Xt.has(l))
      return;
    Xt.add(l);
    const c = t(a), u = (m, g) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), !(!fi(m) || !Xt.has(l)) && (Xt.delete(l), c && c(m, { success: g }));
    }, d = (m) => {
      u(m, n.useGlobalTarget || Yl(l, m.target));
    }, h = (m) => {
      u(m, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", h, o);
  };
  return r.forEach((a) => {
    fp(a) || (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o), a.addEventListener("focus", (c) => cp(c, o), o);
  }), i;
}
function hp(e) {
  return e === "x" || e === "y" ? De[e] ? null : (De[e] = !0, () => {
    De[e] = !1;
  }) : De.x || De.y ? null : (De.x = De.y = !0, () => {
    De.x = De.y = !1;
  });
}
const vn = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], wt = new Set(vn), pp = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), mp = (e) => ao(e) ? e[e.length - 1] || 0 : e, vp = {
  skipAnimations: !1,
  useManualTiming: !1
};
function gp(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, o = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(s);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, u = !1, d = !1) => {
      const m = d && r ? t : n;
      return u && i.add(c), m.has(c) || m.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.delete(c), i.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (s = c, r) {
        o = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, o && (o = !1, l.process(c));
    }
  };
  return l;
}
const An = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], yp = 40;
function Xl(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, s = An.reduce((x, b) => (x[b] = gp(i), x), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: d, postRender: h } = s, m = () => {
    const x = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(x - o.timestamp, yp), 1), o.timestamp = x, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), u.process(o), d.process(o), h.process(o), o.isProcessing = !1, n && t && (r = !1, e(m));
  }, g = () => {
    n = !0, r = !0, o.isProcessing || e(m);
  };
  return { schedule: An.reduce((x, b) => {
    const S = s[b];
    return x[b] = (T, C = !1, A = !1) => (n || g(), S.schedule(T, C, A)), x;
  }, {}), cancel: (x) => {
    for (let b = 0; b < An.length; b++)
      s[An[b]].cancel(x);
  }, state: o, steps: s };
}
const { schedule: Q, cancel: at, state: ce, steps: _r } = Xl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ye, !0);
let _n;
function xp() {
  _n = void 0;
}
const Fe = {
  now: () => (_n === void 0 && Fe.set(ce.isProcessing || vp.useManualTiming ? ce.timestamp : performance.now()), _n),
  set: (e) => {
    _n = e, queueMicrotask(xp);
  }
};
function Jo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Qo(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class es {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Jo(this.subscriptions, t), () => Qo(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Zl(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const di = 30, wp = (e) => !isNaN(parseFloat(e));
class bp {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.16.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      const i = Fe.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Fe.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = wp(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && lr(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new es());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), Q.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Fe.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > di)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, di);
    return Zl(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function cn(e, t) {
  return new bp(e, t);
}
function Sp(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, cn(n));
}
function Cp(e, t) {
  const n = ur(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = mp(i[s]);
    Sp(e, s, a);
  }
}
const de = (e) => !!(e && e.getVelocity);
function Tp(e) {
  return !!(de(e) && e.add);
}
function uo(e, t) {
  const n = e.getValue("willChange");
  if (Tp(n))
    return n.add(t);
}
const ts = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Pp = "framerAppearId", Jl = "data-" + ts(Pp);
function Ql(e) {
  return e.props[Jl];
}
const ec = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Ep = 1e-7, Rp = 12;
function Ap(e, t, n, r, o) {
  let i, s, a = 0;
  do
    s = t + (n - t) / 2, i = ec(s, r, o) - e, i > 0 ? n = s : t = s;
  while (Math.abs(i) > Ep && ++a < Rp);
  return s;
}
function gn(e, t, n, r) {
  if (e === t && n === r)
    return ye;
  const o = (i) => Ap(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : ec(o(i), t, r);
}
const tc = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, nc = (e) => (t) => 1 - e(1 - t), rc = /* @__PURE__ */ gn(0.33, 1.53, 0.69, 0.99), ns = /* @__PURE__ */ nc(rc), oc = /* @__PURE__ */ tc(ns), sc = (e) => (e *= 2) < 1 ? 0.5 * ns(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), rs = (e) => 1 - Math.sin(Math.acos(e)), ic = nc(rs), ac = tc(rs), lc = (e) => /^0[^.\s]+$/u.test(e);
function jp(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || lc(e) : !0;
}
const cc = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), uc = (e) => (t) => typeof t == "string" && t.startsWith(e), fc = /* @__PURE__ */ uc("--"), Mp = /* @__PURE__ */ uc("var(--"), os = (e) => Mp(e) ? Dp.test(e.split("/*")[0].trim()) : !1, Dp = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Vp = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Op(e) {
  const t = Vp.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const Lp = 4;
function dc(e, t, n = 1) {
  it(n <= Lp, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = Op(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return cc(s) ? parseFloat(s) : s;
  }
  return os(o) ? dc(o, t, n + 1) : o;
}
const Ye = (e, t, n) => n > t ? t : n < e ? e : n, Wt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, un = {
  ...Wt,
  transform: (e) => Ye(0, 1, e)
}, jn = {
  ...Wt,
  default: 1
}, yn = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), nt = /* @__PURE__ */ yn("deg"), Be = /* @__PURE__ */ yn("%"), D = /* @__PURE__ */ yn("px"), _p = /* @__PURE__ */ yn("vh"), kp = /* @__PURE__ */ yn("vw"), hi = {
  ...Be,
  parse: (e) => Be.parse(e) / 100,
  transform: (e) => Be.transform(e * 100)
}, Np = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), pi = (e) => e === Wt || e === D, mi = (e, t) => parseFloat(e.split(", ")[t]), vi = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return mi(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/u);
    return i ? mi(i[1], e) : 0;
  }
}, Ip = /* @__PURE__ */ new Set(["x", "y", "z"]), Fp = vn.filter((e) => !Ip.has(e));
function Bp(e) {
  const t = [];
  return Fp.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const _t = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: vi(4, 13),
  y: vi(5, 14)
};
_t.translateX = _t.x;
_t.translateY = _t.y;
const hc = (e) => (t) => t.test(e), zp = {
  test: (e) => e === "auto",
  parse: (e) => e
}, pc = [Wt, D, Be, nt, kp, _p, zp], gi = (e) => pc.find(hc(e)), gt = /* @__PURE__ */ new Set();
let fo = !1, ho = !1;
function mc() {
  if (ho) {
    const e = Array.from(gt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = Bp(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([i, s]) => {
        var a;
        (a = r.getValue(i)) === null || a === void 0 || a.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  ho = !1, fo = !1, gt.forEach((e) => e.complete()), gt.clear();
}
function vc() {
  gt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ho = !0);
  });
}
function Hp() {
  vc(), mc();
}
class ss {
  constructor(t, n, r, o, i, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (gt.add(this), fo || (fo = !0, Q.read(vc), Q.resolveKeyframes(mc))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(), a = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else
          t[i] = t[i - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), gt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, gt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Qt = (e) => Math.round(e * 1e5) / 1e5, is = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Wp(e) {
  return e == null;
}
const Up = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, as = (e, t) => (n) => !!(typeof n == "string" && Up.test(n) && n.startsWith(e) || t && !Wp(n) && Object.prototype.hasOwnProperty.call(n, t)), gc = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, i, s, a] = r.match(is);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, $p = (e) => Ye(0, 255, e), kr = {
  ...Wt,
  transform: (e) => Math.round($p(e))
}, vt = {
  test: /* @__PURE__ */ as("rgb", "red"),
  parse: /* @__PURE__ */ gc("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + kr.transform(e) + ", " + kr.transform(t) + ", " + kr.transform(n) + ", " + Qt(un.transform(r)) + ")"
};
function qp(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const po = {
  test: /* @__PURE__ */ as("#"),
  parse: qp,
  transform: vt.transform
}, Et = {
  test: /* @__PURE__ */ as("hsl", "hue"),
  parse: /* @__PURE__ */ gc("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Be.transform(Qt(t)) + ", " + Be.transform(Qt(n)) + ", " + Qt(un.transform(r)) + ")"
}, fe = {
  test: (e) => vt.test(e) || po.test(e) || Et.test(e),
  parse: (e) => vt.test(e) ? vt.parse(e) : Et.test(e) ? Et.parse(e) : po.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? vt.transform(e) : Et.transform(e)
}, Kp = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Gp(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(is)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Kp)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const yc = "number", xc = "color", Yp = "var", Xp = "var(", yi = "${}", Zp = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function fn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const a = t.replace(Zp, (l) => (fe.test(l) ? (r.color.push(i), o.push(xc), n.push(fe.parse(l))) : l.startsWith(Xp) ? (r.var.push(i), o.push(Yp), n.push(l)) : (r.number.push(i), o.push(yc), n.push(parseFloat(l))), ++i, yi)).split(yi);
  return { values: n, split: a, indexes: r, types: o };
}
function wc(e) {
  return fn(e).values;
}
function bc(e) {
  const { split: t, types: n } = fn(e), r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (i += t[s], o[s] !== void 0) {
        const a = n[s];
        a === yc ? i += Qt(o[s]) : a === xc ? i += fe.transform(o[s]) : i += o[s];
      }
    return i;
  };
}
const Jp = (e) => typeof e == "number" ? 0 : e;
function Qp(e) {
  const t = wc(e);
  return bc(e)(t.map(Jp));
}
const lt = {
  test: Gp,
  parse: wc,
  createTransformer: bc,
  getAnimatableNone: Qp
}, em = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function tm(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(is) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = em.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const nm = /\b([a-z-]*)\(.*?\)/gu, mo = {
  ...lt,
  getAnimatableNone: (e) => {
    const t = e.match(nm);
    return t ? t.map(tm).join(" ") : e;
  }
}, rm = {
  // Border props
  borderWidth: D,
  borderTopWidth: D,
  borderRightWidth: D,
  borderBottomWidth: D,
  borderLeftWidth: D,
  borderRadius: D,
  radius: D,
  borderTopLeftRadius: D,
  borderTopRightRadius: D,
  borderBottomRightRadius: D,
  borderBottomLeftRadius: D,
  // Positioning props
  width: D,
  maxWidth: D,
  height: D,
  maxHeight: D,
  top: D,
  right: D,
  bottom: D,
  left: D,
  // Spacing props
  padding: D,
  paddingTop: D,
  paddingRight: D,
  paddingBottom: D,
  paddingLeft: D,
  margin: D,
  marginTop: D,
  marginRight: D,
  marginBottom: D,
  marginLeft: D,
  // Misc
  backgroundPositionX: D,
  backgroundPositionY: D
}, om = {
  rotate: nt,
  rotateX: nt,
  rotateY: nt,
  rotateZ: nt,
  scale: jn,
  scaleX: jn,
  scaleY: jn,
  scaleZ: jn,
  skew: nt,
  skewX: nt,
  skewY: nt,
  distance: D,
  translateX: D,
  translateY: D,
  translateZ: D,
  x: D,
  y: D,
  z: D,
  perspective: D,
  transformPerspective: D,
  opacity: un,
  originX: hi,
  originY: hi,
  originZ: D
}, xi = {
  ...Wt,
  transform: Math.round
}, ls = {
  ...rm,
  ...om,
  zIndex: xi,
  size: D,
  // SVG
  fillOpacity: un,
  strokeOpacity: un,
  numOctaves: xi
}, sm = {
  ...ls,
  // Color props
  color: fe,
  backgroundColor: fe,
  outlineColor: fe,
  fill: fe,
  stroke: fe,
  // Border props
  borderColor: fe,
  borderTopColor: fe,
  borderRightColor: fe,
  borderBottomColor: fe,
  borderLeftColor: fe,
  filter: mo,
  WebkitFilter: mo
}, cs = (e) => sm[e];
function Sc(e, t) {
  let n = cs(e);
  return n !== mo && (n = lt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const im = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function am(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !im.has(i) && fn(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = Sc(n, o);
}
class Cc extends ss {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), os(c))) {
        const u = dc(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Np.has(r) || t.length !== 2)
      return;
    const [o, i] = t, s = gi(o), a = gi(i);
    if (s !== a)
      if (pi(s) && pi(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      jp(t[o]) && r.push(o);
    r.length && am(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = _t[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current)
      return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1, a = o[s];
    o[s] = _t[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const wi = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(lt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function lm(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function cm(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], s = wi(o, t), a = wi(i, t);
  return Ht(s === a, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !s || !a ? !1 : lm(e) || (n === "spring" || Yo(n)) && r;
}
const um = (e) => e !== null;
function fr(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(um), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const fm = 40;
class Tc {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: s = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Fe.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: i,
      repeatType: s,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > fm ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Hp(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Fe.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: i, delay: s, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !cm(t, r, o, i))
      if (s)
        this.options.duration = 0;
      else {
        l == null || l(fr(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...u
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const te = (e, t, n) => e + (t - e) * n;
function Nr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function dm({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, s = 0;
  if (!t)
    o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = Nr(l, a, e + 1 / 3), i = Nr(l, a, e), s = Nr(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function Un(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ir = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, hm = [po, vt, Et], pm = (e) => hm.find((t) => t.test(e));
function bi(e) {
  const t = pm(e);
  if (Ht(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Et && (n = dm(n)), n;
}
const Si = (e, t) => {
  const n = bi(e), r = bi(t);
  if (!n || !r)
    return Un(e, t);
  const o = { ...n };
  return (i) => (o.red = Ir(n.red, r.red, i), o.green = Ir(n.green, r.green, i), o.blue = Ir(n.blue, r.blue, i), o.alpha = te(n.alpha, r.alpha, i), vt.transform(o));
}, mm = (e, t) => (n) => t(e(n)), xn = (...e) => e.reduce(mm), vo = /* @__PURE__ */ new Set(["none", "hidden"]);
function vm(e, t) {
  return vo.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function gm(e, t) {
  return (n) => te(e, t, n);
}
function us(e) {
  return typeof e == "number" ? gm : typeof e == "string" ? os(e) ? Un : fe.test(e) ? Si : wm : Array.isArray(e) ? Pc : typeof e == "object" ? fe.test(e) ? Si : ym : Un;
}
function Pc(e, t) {
  const n = [...e], r = n.length, o = e.map((i, s) => us(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++)
      n[s] = o[s](i);
    return n;
  };
}
function ym(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = us(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function xm(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i], a = e.indexes[s][o[s]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[i] = l, o[s]++;
  }
  return r;
}
const wm = (e, t) => {
  const n = lt.createTransformer(t), r = fn(e), o = fn(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? vo.has(e) && !o.values.length || vo.has(t) && !r.values.length ? vm(e, t) : xn(Pc(xm(r, o), o.values), n) : (Ht(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Un(e, t));
};
function Ec(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? te(e, t, n) : us(e)(e, t);
}
const bm = 5;
function Rc(e, t, n) {
  const r = Math.max(t - bm, 0);
  return Zl(n - e(r), t - r);
}
const ee = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Fr = 1e-3;
function Sm({ duration: e = ee.duration, bounce: t = ee.bounce, velocity: n = ee.velocity, mass: r = ee.mass }) {
  let o, i;
  Ht(e <= Ie(ee.maxDuration), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  s = Ye(ee.minDamping, ee.maxDamping, s), e = Ye(ee.minDuration, ee.maxDuration, Ue(e)), s < 1 ? (o = (c) => {
    const u = c * s, d = u * e, h = u - n, m = go(c, s), g = Math.exp(-d);
    return Fr - h / m * g;
  }, i = (c) => {
    const d = c * s * e, h = d * n + n, m = Math.pow(s, 2) * Math.pow(c, 2) * e, g = Math.exp(-d), p = go(Math.pow(c, 2), s);
    return (-o(c) + Fr > 0 ? -1 : 1) * ((h - m) * g) / p;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - n) * e + 1;
    return -Fr + u * d;
  }, i = (c) => {
    const u = Math.exp(-c * e), d = (n - c) * (e * e);
    return u * d;
  });
  const a = 5 / e, l = Tm(o, i, a);
  if (e = Ie(e), isNaN(l))
    return {
      stiffness: ee.stiffness,
      damping: ee.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: s * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Cm = 12;
function Tm(e, t, n) {
  let r = n;
  for (let o = 1; o < Cm; o++)
    r = r - e(r) / t(r);
  return r;
}
function go(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Pm = ["duration", "bounce"], Em = ["stiffness", "damping", "mass"];
function Ci(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Rm(e) {
  let t = {
    velocity: ee.velocity,
    stiffness: ee.stiffness,
    damping: ee.damping,
    mass: ee.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ci(e, Em) && Ci(e, Pm))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, i = 2 * Ye(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ee.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const n = Sm(e);
      t = {
        ...t,
        ...n,
        mass: ee.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Ac(e = ee.visualDuration, t = ee.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: c, mass: u, duration: d, velocity: h, isResolvedFromDuration: m } = Rm({
    ...n,
    velocity: -Ue(n.velocity || 0)
  }), g = h || 0, p = c / (2 * Math.sqrt(l * u)), w = s - i, x = Ue(Math.sqrt(l / u)), b = Math.abs(w) < 5;
  r || (r = b ? ee.restSpeed.granular : ee.restSpeed.default), o || (o = b ? ee.restDelta.granular : ee.restDelta.default);
  let S;
  if (p < 1) {
    const C = go(x, p);
    S = (A) => {
      const E = Math.exp(-p * x * A);
      return s - E * ((g + p * x * w) / C * Math.sin(C * A) + w * Math.cos(C * A));
    };
  } else if (p === 1)
    S = (C) => s - Math.exp(-x * C) * (w + (g + x * w) * C);
  else {
    const C = x * Math.sqrt(p * p - 1);
    S = (A) => {
      const E = Math.exp(-p * x * A), R = Math.min(C * A, 300);
      return s - E * ((g + p * x * w) * Math.sinh(R) + C * w * Math.cosh(R)) / C;
    };
  }
  const T = {
    calculatedDuration: m && d || null,
    next: (C) => {
      const A = S(C);
      if (m)
        a.done = C >= d;
      else {
        let E = 0;
        p < 1 && (E = C === 0 ? Ie(g) : Rc(S, C, A));
        const R = Math.abs(E) <= r, L = Math.abs(s - A) <= o;
        a.done = R && L;
      }
      return a.value = a.done ? s : A, a;
    },
    toString: () => {
      const C = Math.min(Wl(T), lo), A = Ul((E) => T.next(C * E).value, C, 30);
      return C + "ms " + A;
    }
  };
  return T;
}
function Ti({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], h = {
    done: !1,
    value: d
  }, m = (R) => a !== void 0 && R < a || l !== void 0 && R > l, g = (R) => a === void 0 ? l : l === void 0 || Math.abs(a - R) < Math.abs(l - R) ? a : l;
  let p = n * t;
  const w = d + p, x = s === void 0 ? w : s(w);
  x !== w && (p = x - d);
  const b = (R) => -p * Math.exp(-R / r), S = (R) => x + b(R), T = (R) => {
    const L = b(R), k = S(R);
    h.done = Math.abs(L) <= c, h.value = h.done ? x : k;
  };
  let C, A;
  const E = (R) => {
    m(h.value) && (C = R, A = Ac({
      keyframes: [h.value, g(h.value)],
      velocity: Rc(S, R, h.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: c,
      restSpeed: u
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (R) => {
      let L = !1;
      return !A && C === void 0 && (L = !0, T(R), E(R)), C !== void 0 && R >= C ? A.next(R - C) : (!L && T(R), h);
    }
  };
}
const Am = /* @__PURE__ */ gn(0.42, 0, 1, 1), jm = /* @__PURE__ */ gn(0, 0, 0.58, 1), jc = /* @__PURE__ */ gn(0.42, 0, 0.58, 1), Mm = (e) => Array.isArray(e) && typeof e[0] != "number", Pi = {
  linear: ye,
  easeIn: Am,
  easeInOut: jc,
  easeOut: jm,
  circIn: rs,
  circInOut: ac,
  circOut: ic,
  backIn: ns,
  backInOut: oc,
  backOut: rc,
  anticipate: sc
}, Ei = (e) => {
  if (Xo(e)) {
    it(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return gn(t, n, r, o);
  } else if (typeof e == "string")
    return it(Pi[e] !== void 0, `Invalid easing type '${e}'`), Pi[e];
  return e;
};
function Dm(e, t, n) {
  const r = [], o = n || Ec, i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || ye : t;
      a = xn(l, a);
    }
    r.push(a);
  }
  return r;
}
function Vm(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (it(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const s = Dm(t, r, o), a = s.length, l = (c) => {
    let u = 0;
    if (a > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Lt(e[u], e[u + 1], c);
    return s[u](d);
  };
  return n ? (c) => l(Ye(e[0], e[i - 1], c)) : l;
}
function Om(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Lt(0, t, r);
    e.push(te(n, 1, o));
  }
}
function Lm(e) {
  const t = [0];
  return Om(t, e.length - 1), t;
}
function _m(e, t) {
  return e.map((n) => n * t);
}
function km(e, t) {
  return e.map(() => t || jc).splice(0, e.length - 1);
}
function $n({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Mm(r) ? r.map(Ei) : Ei(r), i = {
    done: !1,
    value: t[0]
  }, s = _m(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Lm(t),
    e
  ), a = Vm(s, t, {
    ease: Array.isArray(o) ? o : km(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const Nm = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Q.update(t, !0),
    stop: () => at(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ce.isProcessing ? ce.timestamp : Fe.now()
  };
}, Im = {
  decay: Ti,
  inertia: Ti,
  tween: $n,
  keyframes: $n,
  spring: Ac
}, Fm = (e) => e / 100;
class fs extends Tc {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options, s = (o == null ? void 0 : o.KeyframeResolver) || ss, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new s(i, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: s = 0 } = this.options, a = Yo(n) ? n : Im[n] || $n;
    let l, c;
    a !== $n && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && it(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), l = xn(Fm, Ec(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    i === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), u.calculatedDuration === null && (u.calculatedDuration = Wl(u));
    const { calculatedDuration: d } = u, h = d + o, m = h * (r + 1) - o;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: h,
      totalDuration: m
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: R } = this.options;
      return { done: !0, value: R[R.length - 1] };
    }
    const { finalKeyframe: o, generator: i, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: d } = r;
    if (this.startTime === null)
      return i.next(0);
    const { delay: h, repeat: m, repeatType: g, repeatDelay: p, onUpdate: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const x = this.currentTime - h * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? x < 0 : x > u;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let S = this.currentTime, T = i;
    if (m) {
      const R = Math.min(this.currentTime, u) / d;
      let L = Math.floor(R), k = R % 1;
      !k && R >= 1 && (k = 1), k === 1 && L--, L = Math.min(L, m + 1), !!(L % 2) && (g === "reverse" ? (k = 1 - k, p && (k -= p / d)) : g === "mirror" && (T = s)), S = Ye(0, 1, k) * d;
    }
    const C = b ? { done: !1, value: l[0] } : T.next(S);
    a && (C.value = a(C.value));
    let { done: A } = C;
    !b && c !== null && (A = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
    return E && o !== void 0 && (C.value = fr(l, this.options, o)), w && w(C.value), E && this.finish(), C;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ue(t.calculatedDuration) : 0;
  }
  get time() {
    return Ue(this.currentTime);
  }
  set time(t) {
    t = Ie(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = Ue(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = Nm, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const Bm = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function zm(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: s = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = ql(a, o);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: r,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
const Hm = /* @__PURE__ */ Ko(() => Object.hasOwnProperty.call(Element.prototype, "animate")), qn = 10, Wm = 2e4;
function Um(e) {
  return Yo(e.type) || e.type === "spring" || !$l(e.ease);
}
function $m(e, t) {
  const n = new fs({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < Wm; )
    r = n.sample(i), o.push(r.value), i += qn;
  return {
    times: void 0,
    keyframes: o,
    duration: i - qn,
    ease: "linear"
  };
}
const Mc = {
  anticipate: sc,
  backInOut: oc,
  circInOut: ac
};
function qm(e) {
  return e in Mc;
}
class Ri extends Tc {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    this.resolver = new Cc(i, (s, a) => this.onKeyframesResolved(s, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: o = 300, times: i, ease: s, type: a, motionValue: l, name: c, startTime: u } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current))
      return !1;
    if (typeof s == "string" && Wn() && qm(s) && (s = Mc[s]), Um(this.options)) {
      const { onComplete: h, onUpdate: m, motionValue: g, element: p, ...w } = this.options, x = $m(t, w);
      t = x.keyframes, t.length === 1 && (t[1] = t[0]), o = x.duration, i = x.times, s = x.ease, a = "keyframes";
    }
    const d = zm(l.owner.current, c, t, { ...this.options, duration: o, times: i, ease: s });
    return d.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (li(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
      const { onComplete: h } = this.options;
      l.set(fr(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: d,
      duration: o,
      times: i,
      type: a,
      ease: s,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return Ue(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return Ue(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = Ie(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return ye;
      const { animation: r } = n;
      li(r, t);
    }
    return ye;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: o, type: i, ease: s, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: d, element: h, ...m } = this.options, g = new fs({
        ...m,
        keyframes: r,
        duration: o,
        type: i,
        ease: s,
        times: a,
        isGenerator: !0
      }), p = Ie(this.time);
      c.setWithVelocity(g.sample(p - qn).value, g.sample(p).value, qn);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: o, repeatType: i, damping: s, type: a } = t;
    return Hm() && r && Bm.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !o && i !== "mirror" && s !== 0 && a !== "inertia";
  }
}
const Km = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Gm = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Ym = {
  type: "keyframes",
  duration: 0.8
}, Xm = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Zm = (e, { keyframes: t }) => t.length > 2 ? Ym : wt.has(e) ? e.startsWith("scale") ? Gm(t[1]) : Km : Xm;
function Jm({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const ds = (e, t, n, r = {}, o, i) => (s) => {
  const a = Go(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - Ie(l);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (h) => {
      t.set(h), a.onUpdate && a.onUpdate(h);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  Jm(a) || (u = {
    ...u,
    ...Zm(e, u)
  }), u.duration && (u.duration = Ie(u.duration)), u.repeatDelay && (u.repeatDelay = Ie(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), d && !i && t.get() !== void 0) {
    const h = fr(u.keyframes, a);
    if (h !== void 0)
      return Q.update(() => {
        u.onUpdate(h), u.onComplete();
      }), new op([]);
  }
  return !i && Ri.supports(u) ? new Ri(u) : new fs(u);
};
function Qm({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Dc(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const h = e.getValue(d, (i = e.latestValues[d]) !== null && i !== void 0 ? i : null), m = l[d];
    if (m === void 0 || u && Qm(u, d))
      continue;
    const g = {
      delay: n,
      ...Go(s || {}, d)
    };
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const x = Ql(e);
      if (x) {
        const b = window.MotionHandoffAnimation(x, d, Q);
        b !== null && (g.startTime = b, p = !0);
      }
    }
    uo(e, d), h.start(ds(d, h, m, e.shouldReduceMotion && wt.has(d) ? { type: !1 } : g, e, p));
    const w = h.animation;
    w && c.push(w);
  }
  return a && Promise.all(c).then(() => {
    Q.update(() => {
      a && Cp(e, a);
    });
  }), c;
}
function yo(e, t, n = {}) {
  var r;
  const o = ur(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(Dc(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: d, staggerDirection: h } = i;
    return ev(e, t, u + c, d, h, n);
  } : () => Promise.resolve(), { when: l } = i;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else
    return Promise.all([s(), a(n.delay)]);
}
function ev(e, t, n = 0, r = 0, o = 1, i) {
  const s = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(tv).forEach((c, u) => {
    c.notify("AnimationStart", t), s.push(yo(c, t, {
      ...i,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function tv(e, t) {
  return e.sortNodePosition(t);
}
function nv(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => yo(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = yo(e, t, n);
  else {
    const o = typeof t == "function" ? ur(e, t, n.custom) : t;
    r = Promise.all(Dc(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const rv = qo.length;
function Vc(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Vc(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < rv; n++) {
    const r = qo[n], o = e.props[r];
    (ln(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const ov = [...$o].reverse(), sv = $o.length;
function iv(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => nv(e, n, r)));
}
function av(e) {
  let t = iv(e), n = Ai(), r = !0;
  const o = (l) => (c, u) => {
    var d;
    const h = ur(e, u, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
    if (h) {
      const { transition: m, transitionEnd: g, ...p } = h;
      c = { ...c, ...p, ...g };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: c } = e, u = Vc(e.parent) || {}, d = [], h = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let w = 0; w < sv; w++) {
      const x = ov[w], b = n[x], S = c[x] !== void 0 ? c[x] : u[x], T = ln(S), C = x === l ? b.isActive : null;
      C === !1 && (g = w);
      let A = S === u[x] && S !== c[x] && T;
      if (A && r && e.manuallyAnimateOnMount && (A = !1), b.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !S && !b.prevProp || // Or if the prop doesn't define an animation
      cr(S) || typeof S == "boolean")
        continue;
      const E = lv(b.prevProp, S);
      let R = E || // If we're making this variant active, we want to always make it active
      x === l && b.isActive && !A && T || // If we removed a higher-priority variant (i is in reverse order)
      w > g && T, L = !1;
      const k = Array.isArray(S) ? S : [S];
      let z = k.reduce(o(x), {});
      C === !1 && (z = {});
      const { prevResolvedValues: U = {} } = b, I = {
        ...U,
        ...z
      }, N = (V) => {
        R = !0, h.has(V) && (L = !0, h.delete(V)), b.needsAnimating[V] = !0;
        const M = e.getValue(V);
        M && (M.liveStyle = !1);
      };
      for (const V in I) {
        const M = z[V], W = U[V];
        if (m.hasOwnProperty(V))
          continue;
        let ne = !1;
        ao(M) && ao(W) ? ne = !Hl(M, W) : ne = M !== W, ne ? M != null ? N(V) : h.add(V) : M !== void 0 && h.has(V) ? N(V) : b.protectedKeys[V] = !0;
      }
      b.prevProp = S, b.prevResolvedValues = z, b.isActive && (m = { ...m, ...z }), r && e.blockInitialAnimation && (R = !1), R && (!(A && E) || L) && d.push(...k.map((V) => ({
        animation: V,
        options: { type: x }
      })));
    }
    if (h.size) {
      const w = {};
      h.forEach((x) => {
        const b = e.getBaseTarget(x), S = e.getValue(x);
        S && (S.liveStyle = !0), w[x] = b ?? null;
      }), d.push({ animation: w });
    }
    let p = !!d.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, p ? t(d) : Promise.resolve();
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((h) => {
      var m;
      return (m = h.animationState) === null || m === void 0 ? void 0 : m.setActive(l, c);
    }), n[l].isActive = c;
    const d = s(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Ai(), r = !0;
    }
  };
}
function lv(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Hl(t, e) : !1;
}
function ht(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ai() {
  return {
    animate: ht(!0),
    whileInView: ht(),
    whileHover: ht(),
    whileTap: ht(),
    whileDrag: ht(),
    whileFocus: ht(),
    exit: ht()
  };
}
class ft {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class cv extends ft {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = av(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    cr(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let uv = 0;
class fv extends ft {
  constructor() {
    super(...arguments), this.id = uv++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const dv = {
  animation: {
    Feature: cv
  },
  exit: {
    Feature: fv
  }
};
function dn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function wn(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const hv = (e) => (t) => Zo(t) && e(t, wn(t));
function en(e, t, n, r) {
  return dn(e, t, hv(n), r);
}
const ji = (e, t) => Math.abs(e - t);
function pv(e, t) {
  const n = ji(e.x, t.x), r = ji(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Oc {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = zr(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, m = pv(d.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !m)
        return;
      const { point: g } = d, { timestamp: p } = ce;
      this.history.push({ ...g, timestamp: p });
      const { onStart: w, onMove: x } = this.handlers;
      h || (w && w(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, h) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Br(h, this.transformPagePoint), Q.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, h) => {
      this.end();
      const { onEnd: m, onSessionEnd: g, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const w = zr(d.type === "pointercancel" ? this.lastMoveEventInfo : Br(h, this.transformPagePoint), this.history);
      this.startEvent && m && m(d, w), g && g(d, w);
    }, !Zo(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const s = wn(t), a = Br(s, this.transformPagePoint), { point: l } = a, { timestamp: c } = ce;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, zr(a, this.history)), this.removeListeners = xn(en(this.contextWindow, "pointermove", this.handlePointerMove), en(this.contextWindow, "pointerup", this.handlePointerUp), en(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), at(this.updatePoint);
  }
}
function Br(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Mi(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function zr({ point: e }, t) {
  return {
    point: e,
    delta: Mi(e, Lc(t)),
    offset: Mi(e, mv(t)),
    velocity: vv(t, 0.1)
  };
}
function mv(e) {
  return e[0];
}
function Lc(e) {
  return e[e.length - 1];
}
function vv(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Lc(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > Ie(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = Ue(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Rt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const _c = 1e-4, gv = 1 - _c, yv = 1 + _c, kc = 0.01, xv = 0 - kc, wv = 0 + kc;
function be(e) {
  return e.max - e.min;
}
function bv(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Di(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = te(t.min, t.max, e.origin), e.scale = be(n) / be(t), e.translate = te(n.min, n.max, e.origin) - e.originPoint, (e.scale >= gv && e.scale <= yv || isNaN(e.scale)) && (e.scale = 1), (e.translate >= xv && e.translate <= wv || isNaN(e.translate)) && (e.translate = 0);
}
function tn(e, t, n, r) {
  Di(e.x, t.x, n.x, r ? r.originX : void 0), Di(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Vi(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + be(t);
}
function Sv(e, t, n) {
  Vi(e.x, t.x, n.x), Vi(e.y, t.y, n.y);
}
function Oi(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + be(t);
}
function nn(e, t, n) {
  Oi(e.x, t.x, n.x), Oi(e.y, t.y, n.y);
}
function Cv(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? te(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? te(n, e, r.max) : Math.min(e, n)), e;
}
function Li(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Tv(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Li(e.x, n, o),
    y: Li(e.y, t, r)
  };
}
function _i(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Pv(e, t) {
  return {
    x: _i(e.x, t.x),
    y: _i(e.y, t.y)
  };
}
function Ev(e, t) {
  let n = 0.5;
  const r = be(e), o = be(t);
  return o > r ? n = Lt(t.min, t.max - r, e.min) : r > o && (n = Lt(e.min, e.max - o, t.min)), Ye(0, 1, n);
}
function Rv(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const xo = 0.35;
function Av(e = xo) {
  return e === !1 ? e = 0 : e === !0 && (e = xo), {
    x: ki(e, "left", "right"),
    y: ki(e, "top", "bottom")
  };
}
function ki(e, t, n) {
  return {
    min: Ni(e, t),
    max: Ni(e, n)
  };
}
function Ni(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ii = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), At = () => ({
  x: Ii(),
  y: Ii()
}), Fi = () => ({ min: 0, max: 0 }), oe = () => ({
  x: Fi(),
  y: Fi()
});
function Re(e) {
  return [e("x"), e("y")];
}
function Nc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function jv({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Mv(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Hr(e) {
  return e === void 0 || e === 1;
}
function wo({ scale: e, scaleX: t, scaleY: n }) {
  return !Hr(e) || !Hr(t) || !Hr(n);
}
function pt(e) {
  return wo(e) || Ic(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Ic(e) {
  return Bi(e.x) || Bi(e.y);
}
function Bi(e) {
  return e && e !== "0%";
}
function Kn(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function zi(e, t, n, r, o) {
  return o !== void 0 && (e = Kn(e, o, r)), Kn(e, n, r) + t;
}
function bo(e, t = 0, n = 1, r, o) {
  e.min = zi(e.min, t, n, r, o), e.max = zi(e.max, t, n, r, o);
}
function Fc(e, { x: t, y: n }) {
  bo(e.x, t.translate, t.scale, t.originPoint), bo(e.y, n.translate, n.scale, n.originPoint);
}
const Hi = 0.999999999999, Wi = 1.0000000000001;
function Dv(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    i = n[a], s = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Mt(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Fc(e, s)), r && pt(i.latestValues) && Mt(e, i.latestValues));
  }
  t.x < Wi && t.x > Hi && (t.x = 1), t.y < Wi && t.y > Hi && (t.y = 1);
}
function jt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Ui(e, t, n, r, o = 0.5) {
  const i = te(e.min, e.max, o);
  bo(e, t, n, i, r);
}
function Mt(e, t) {
  Ui(e.x, t.x, t.scaleX, t.scale, t.originX), Ui(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Bc(e, t) {
  return Nc(Mv(e.getBoundingClientRect(), t));
}
function Vv(e, t, n) {
  const r = Bc(e, n), { scroll: o } = t;
  return o && (jt(r.x, o.offset.x), jt(r.y, o.offset.y)), r;
}
const zc = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Ov = /* @__PURE__ */ new WeakMap();
class Lv {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = oe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (u) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(wn(u).point);
    }, i = (u, d) => {
      const { drag: h, dragPropagation: m, onDragStart: g } = this.getProps();
      if (h && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = hp(h), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Re((w) => {
        let x = this.getAxisMotionValue(w).get() || 0;
        if (Be.test(x)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const S = b.layout.layoutBox[w];
            S && (x = be(S) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[w] = x;
      }), g && Q.postRender(() => g(u, d)), uo(this.visualElement, "transform");
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, s = (u, d) => {
      const { dragPropagation: h, dragDirectionLock: m, onDirectionLock: g, onDrag: p } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: w } = d;
      if (m && this.currentDirection === null) {
        this.currentDirection = _v(w), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, w), this.updateAxis("y", d.point, w), this.visualElement.render(), p && p(u, d);
    }, a = (u, d) => this.stop(u, d), l = () => Re((u) => {
      var d;
      return this.getAnimationState(u) === "paused" && ((d = this.getAxisMotionValue(u).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Oc(t, {
      onSessionStart: o,
      onStart: i,
      onMove: s,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: zc(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Q.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Mn(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = Cv(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Rt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = Tv(o.layoutBox, n) : this.constraints = !1, this.elastic = Av(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Re((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Rv(o.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Rt(t))
      return !1;
    const r = t.current;
    it(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = Vv(r, o.root, this.visualElement.getTransformPagePoint());
    let s = Pv(o.layout.layoutBox, i);
    if (n) {
      const a = n(jv(s));
      this.hasMutatedConstraints = !!a, a && (s = Nc(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = Re((u) => {
      if (!Mn(u, n, this.currentDirection))
        return;
      let d = l && l[u] || {};
      s && (d = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, m = o ? 40 : 1e7, g = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: h,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(u, g);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return uo(this.visualElement, t), r.start(ds(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Re((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Re((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Re((n) => {
      const { drag: r } = this.getProps();
      if (!Mn(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - te(s, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Rt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Re((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = Ev({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Re((s) => {
      if (!Mn(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: c } = this.constraints[s];
      a.set(te(l, c, o[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Ov.set(this.visualElement, this);
    const t = this.visualElement.current, n = en(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Rt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), Q.read(r);
    const s = dn(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Re((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = xo, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function Mn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function _v(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class kv extends ft {
  constructor(t) {
    super(t), this.removeGroupControls = ye, this.removeListeners = ye, this.controls = new Lv(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ye;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const $i = (e) => (t, n) => {
  e && Q.postRender(() => e(t, n));
};
class Nv extends ft {
  constructor() {
    super(...arguments), this.removePointerDownListener = ye;
  }
  onPointerDown(t) {
    this.session = new Oc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: zc(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: $i(t),
      onStart: $i(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && Q.postRender(() => o(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = en(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const hs = Xe(null);
function Iv() {
  const e = ue(hs);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = Gu();
  hn(() => r(o), []);
  const i = Eo(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
const Hc = Xe({}), Wc = Xe({}), kn = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function qi(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Kt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (D.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = qi(e, t.target.x), r = qi(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Fv = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = lt.parse(e);
    if (o.length > 5)
      return r;
    const i = lt.createTransformer(e), s = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + s] /= a, o[1 + s] /= l;
    const c = te(a, l, 0.5);
    return typeof o[2 + s] == "number" && (o[2 + s] /= c), typeof o[3 + s] == "number" && (o[3 + s] /= c), i(o);
  }
}, Gn = {};
function Bv(e) {
  Object.assign(Gn, e);
}
const { schedule: ps, cancel: y5 } = Xl(queueMicrotask, !1);
class zv extends Yu {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    Bv(Hv), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), kn.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, s = r.projection;
    return s && (s.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || Q.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), ps.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Uc(e) {
  const [t, n] = Iv(), r = ue(Hc);
  return f.jsx(zv, { ...e, layoutGroup: r, switchLayoutGroup: ue(Wc), isPresent: t, safeToRemove: n });
}
const Hv = {
  borderRadius: {
    ...Kt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Kt,
  borderTopRightRadius: Kt,
  borderBottomLeftRadius: Kt,
  borderBottomRightRadius: Kt,
  boxShadow: Fv
};
function Wv(e, t, n) {
  const r = de(e) ? e : cn(e);
  return r.start(ds("", r, t, n)), r.animation;
}
function Uv(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const $v = (e, t) => e.depth - t.depth;
class qv {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Jo(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Qo(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort($v), this.isDirty = !1, this.children.forEach(t);
  }
}
function Kv(e, t) {
  const n = Fe.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (at(r), e(i - t));
  };
  return Q.read(r, !0), () => at(r);
}
function Nn(e) {
  const t = de(e) ? e.get() : e;
  return pp(t) ? t.toValue() : t;
}
const $c = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Gv = $c.length, Ki = (e) => typeof e == "string" ? parseFloat(e) : e, Gi = (e) => typeof e == "number" || D.test(e);
function Yv(e, t, n, r, o, i) {
  o ? (e.opacity = te(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Xv(r)
  ), e.opacityExit = te(t.opacity !== void 0 ? t.opacity : 1, 0, Zv(r))) : i && (e.opacity = te(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < Gv; s++) {
    const a = `border${$c[s]}Radius`;
    let l = Yi(t, a), c = Yi(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Gi(l) === Gi(c) ? (e[a] = Math.max(te(Ki(l), Ki(c), r), 0), (Be.test(c) || Be.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = te(t.rotate || 0, n.rotate || 0, r));
}
function Yi(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Xv = /* @__PURE__ */ qc(0, 0.5, ic), Zv = /* @__PURE__ */ qc(0.5, 0.95, ye);
function qc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Lt(e, t, r));
}
function Xi(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ee(e, t) {
  Xi(e.x, t.x), Xi(e.y, t.y);
}
function Zi(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Ji(e, t, n, r, o) {
  return e -= t, e = Kn(e, 1 / n, r), o !== void 0 && (e = Kn(e, 1 / o, r)), e;
}
function Jv(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (Be.test(t) && (t = parseFloat(t), t = te(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = te(i.min, i.max, r);
  e === i && (a -= t), e.min = Ji(e.min, t, n, a, o), e.max = Ji(e.max, t, n, a, o);
}
function Qi(e, t, [n, r, o], i, s) {
  Jv(e, t[n], t[r], t[o], t.scale, i, s);
}
const Qv = ["x", "scaleX", "originX"], eg = ["y", "scaleY", "originY"];
function ea(e, t, n, r) {
  Qi(e.x, t, Qv, n ? n.x : void 0, r ? r.x : void 0), Qi(e.y, t, eg, n ? n.y : void 0, r ? r.y : void 0);
}
function ta(e) {
  return e.translate === 0 && e.scale === 1;
}
function Kc(e) {
  return ta(e.x) && ta(e.y);
}
function na(e, t) {
  return e.min === t.min && e.max === t.max;
}
function tg(e, t) {
  return na(e.x, t.x) && na(e.y, t.y);
}
function ra(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Gc(e, t) {
  return ra(e.x, t.x) && ra(e.y, t.y);
}
function oa(e) {
  return be(e.x) / be(e.y);
}
function sa(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class ng {
  constructor() {
    this.members = [];
  }
  add(t) {
    Jo(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Qo(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function rg(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: d, rotateY: h, skewX: m, skewY: g } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), m && (r += `skewX(${m}deg) `), g && (r += `skewY(${g}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const mt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Zt = typeof window < "u" && window.MotionDebug !== void 0, Wr = ["", "X", "Y", "Z"], og = { visibility: "hidden" }, ia = 1e3;
let sg = 0;
function Ur(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Yc(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Ql(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Q, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Yc(r);
}
function Xc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      this.id = sg++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Zt && (mt.totalNodes = mt.resolvedTargetDeltas = mt.recalculatedProjection = 0), this.nodes.forEach(lg), this.nodes.forEach(hg), this.nodes.forEach(pg), this.nodes.forEach(cg), Zt && window.MotionDebug.record(mt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qv());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new es()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Uv(s), this.instance = s;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const h = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = Kv(h, 250), kn.hasAnimatedSinceResize && (kn.hasAnimatedSinceResize = !1, this.nodes.forEach(la));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: h, hasRelativeTargetChanged: m, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || u.getDefaultTransition() || xg, { onLayoutAnimationStart: w, onLayoutAnimationComplete: x } = u.getProps(), b = !this.targetLayout || !Gc(this.targetLayout, g) || m, S = !h && m;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || S || h && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, S);
          const T = {
            ...Go(p, "layout"),
            onPlay: w,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (T.delay = 0, T.type = !1), this.startAnimation(T);
        } else
          h || la(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, at(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(mg), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Yc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(aa);
        return;
      }
      this.isUpdating || this.nodes.forEach(fg), this.isUpdating = !1, this.nodes.forEach(dg), this.nodes.forEach(ig), this.nodes.forEach(ag), this.clearAllSnapshots();
      const a = Fe.now();
      ce.delta = Ye(0, 1e3 / 60, a - ce.timestamp), ce.timestamp = a, ce.isProcessing = !0, _r.update.process(ce), _r.preRender.process(ce), _r.render.process(ce), ce.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, ps.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ug), this.sharedNodes.forEach(vg);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Q.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = oe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Kc(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      s && (a || pt(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), wg(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a)
        return oe();
      const l = a.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(bg))) {
        const { scroll: u } = this.root;
        u && (jt(l.x, u.offset.x), jt(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = oe();
      if (Ee(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: d, options: h } = u;
        u !== this.root && d && h.layoutScroll && (d.wasRoot && Ee(l, s), jt(l.x, d.offset.x), jt(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = oe();
      Ee(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Mt(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), pt(u.latestValues) && Mt(l, u.latestValues);
      }
      return pt(this.latestValues) && Mt(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = oe();
      Ee(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !pt(c.latestValues))
          continue;
        wo(c.latestValues) && c.updateSnapshot();
        const u = oe(), d = c.measurePageBox();
        Ee(u, d), ea(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return pt(this.latestValues) && ea(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (this.resolvedRelativeTargetAt = ce.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = oe(), this.relativeTargetOrigin = oe(), nn(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), Ee(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = oe(), this.targetWithTransforms = oe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Sv(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ee(this.target, this.layout.layoutBox), Fc(this.target, this.targetDelta)) : Ee(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = oe(), this.relativeTargetOrigin = oe(), nn(this.relativeTargetOrigin, this.target, m.target), Ee(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Zt && mt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || wo(this.parent.latestValues) || Ic(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ce.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      Ee(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, m = this.treeScale.y;
      Dv(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = oe());
      const { target: g } = a;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Zi(this.prevProjectionDelta.x, this.projectionDelta.x), Zi(this.prevProjectionDelta.y, this.projectionDelta.y)), tn(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== m || !sa(this.projectionDelta.x, this.prevProjectionDelta.x) || !sa(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Zt && mt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = At(), this.projectionDelta = At(), this.projectionDeltaWithTransform = At();
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = At();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = oe(), m = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, p = m !== g, w = this.getStack(), x = !w || w.members.length <= 1, b = !!(p && !x && this.options.crossfade === !0 && !this.path.some(yg));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (T) => {
        const C = T / 1e3;
        ca(d.x, s.x, C), ca(d.y, s.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (nn(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), gg(this.relativeTarget, this.relativeTargetOrigin, h, C), S && tg(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = oe()), Ee(S, this.relativeTarget)), p && (this.animationValues = u, Yv(u, c, this.latestValues, C, b, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (at(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Q.update(() => {
        kn.hasAnimatedSinceResize = !0, this.currentAnimation = Wv(0, ia, {
          ...s,
          onUpdate: (a) => {
            this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ia), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (this !== s && this.layout && c && Zc(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || oe();
          const d = be(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + d;
          const h = be(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + h;
        }
        Ee(a, l), Mt(a, u), tn(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new ng()), this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: l } = s;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && Ur("z", s, c, this.animationValues);
      for (let u = 0; u < Wr.length; u++)
        Ur(`rotate${Wr[u]}`, s, c, this.animationValues), Ur(`skew${Wr[u]}`, s, c, this.animationValues);
      s.render();
      for (const u in c)
        s.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return og;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Nn(s == null ? void 0 : s.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Nn(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !pt(this.latestValues) && (p.transform = u ? u({}, "") : "none", this.hasProjected = !1), p;
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = rg(this.projectionDeltaWithTransform, this.treeScale, h), u && (c.transform = u(h, c.transform));
      const { x: m, y: g } = this.projectionDelta;
      c.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = d === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const p in Gn) {
        if (h[p] === void 0)
          continue;
        const { correct: w, applyTo: x } = Gn[p], b = c.transform === "none" ? h[p] : w(h[p], d);
        if (x) {
          const S = x.length;
          for (let T = 0; T < S; T++)
            c[x[T]] = b;
        } else
          c[p] = b;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? Nn(s == null ? void 0 : s.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(aa), this.root.sharedNodes.clear();
    }
  };
}
function ig(e) {
  e.updateLayout();
}
function ag(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, s = n.source !== e.layout.source;
    i === "size" ? Re((d) => {
      const h = s ? n.measuredBox[d] : n.layoutBox[d], m = be(h);
      h.min = r[d].min, h.max = h.min + m;
    }) : Zc(i, n.layoutBox, r) && Re((d) => {
      const h = s ? n.measuredBox[d] : n.layoutBox[d], m = be(r[d]);
      h.max = h.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + m);
    });
    const a = At();
    tn(a, r, n.layoutBox);
    const l = At();
    s ? tn(l, e.applyTransform(o, !0), n.measuredBox) : tn(l, r, n.layoutBox);
    const c = !Kc(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: m } = d;
        if (h && m) {
          const g = oe();
          nn(g, n.layoutBox, h.layoutBox);
          const p = oe();
          nn(p, r, m.layoutBox), Gc(g, p) || (u = !0), d.options.layoutRoot && (e.relativeTarget = p, e.relativeTargetOrigin = g, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function lg(e) {
  Zt && mt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function cg(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function ug(e) {
  e.clearSnapshot();
}
function aa(e) {
  e.clearMeasurements();
}
function fg(e) {
  e.isLayoutDirty = !1;
}
function dg(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function la(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function hg(e) {
  e.resolveTargetDelta();
}
function pg(e) {
  e.calcProjection();
}
function mg(e) {
  e.resetSkewAndRotation();
}
function vg(e) {
  e.removeLeadSnapshot();
}
function ca(e, t, n) {
  e.translate = te(t.translate, 0, n), e.scale = te(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ua(e, t, n, r) {
  e.min = te(t.min, n.min, r), e.max = te(t.max, n.max, r);
}
function gg(e, t, n, r) {
  ua(e.x, t.x, n.x, r), ua(e.y, t.y, n.y, r);
}
function yg(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const xg = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, fa = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), da = fa("applewebkit/") && !fa("chrome/") ? Math.round : ye;
function ha(e) {
  e.min = da(e.min), e.max = da(e.max);
}
function wg(e) {
  ha(e.x), ha(e.y);
}
function Zc(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !bv(oa(t), oa(n), 0.2);
}
function bg(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const Sg = Xc({
  attachResizeListener: (e, t) => dn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), $r = {
  current: void 0
}, Jc = Xc({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!$r.current) {
      const e = new Sg({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), $r.current = e;
    }
    return $r.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Cg = {
  pan: {
    Feature: Nv
  },
  drag: {
    Feature: kv,
    ProjectionNode: Jc,
    MeasureLayout: Uc
  }
};
function pa(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, i = r[o];
  i && Q.postRender(() => i(t, wn(t)));
}
class Tg extends ft {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = lp(t, (n) => (pa(this.node, n, "Start"), (r) => pa(this.node, r, "End"))));
  }
  unmount() {
  }
}
class Pg extends ft {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = xn(dn(this.node.current, "focus", () => this.onFocus()), dn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function ma(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), i = r[o];
  i && Q.postRender(() => i(t, wn(t)));
}
class Eg extends ft {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = dp(t, (n) => (ma(this.node, n, "Start"), (r, { success: o }) => ma(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const So = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Rg = (e) => {
  const t = So.get(e.target);
  t && t(e);
}, Ag = (e) => {
  e.forEach(Rg);
};
function jg({ root: e, ...t }) {
  const n = e || document;
  qr.has(n) || qr.set(n, {});
  const r = qr.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Ag, { root: e, ...t })), r[o];
}
function Mg(e, t, n) {
  const r = jg(t);
  return So.set(e, n), r.observe(e), () => {
    So.delete(e), r.unobserve(e);
  };
}
const Dg = {
  some: 0,
  all: 1
};
class Vg extends ft {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Dg[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), h = c ? u : d;
      h && h(l);
    };
    return Mg(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Og(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Og({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Lg = {
  inView: {
    Feature: Vg
  },
  tap: {
    Feature: Eg
  },
  focus: {
    Feature: Pg
  },
  hover: {
    Feature: Tg
  }
}, _g = {
  layout: {
    ProjectionNode: Jc,
    MeasureLayout: Uc
  }
}, Qc = Xe({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), dr = Xe({}), ms = typeof window < "u", kg = ms ? ba : hn, eu = Xe({ strict: !1 });
function Ng(e, t, n, r, o) {
  var i, s;
  const { visualElement: a } = ue(dr), l = ue(eu), c = ue(hs), u = ue(Qc).reducedMotion, d = Jt(null);
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const h = d.current, m = ue(Wc);
  h && !h.projection && o && (h.type === "html" || h.type === "svg") && Ig(d.current, n, o, m);
  const g = Jt(!1);
  Xu(() => {
    h && g.current && h.update(n, c);
  });
  const p = n[Jl], w = Jt(!!p && !(!((i = window.MotionHandoffIsComplete) === null || i === void 0) && i.call(window, p)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, p)));
  return kg(() => {
    h && (g.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), ps.render(h.render), w.current && h.animationState && h.animationState.animateChanges());
  }), hn(() => {
    h && (!w.current && h.animationState && h.animationState.animateChanges(), w.current && (queueMicrotask(() => {
      var x;
      (x = window.MotionHandoffMarkAsComplete) === null || x === void 0 || x.call(window, p);
    }), w.current = !1));
  }), h;
}
function Ig(e, t, n, r) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : tu(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!s || a && Rt(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: r,
    layoutScroll: l,
    layoutRoot: c
  });
}
function tu(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : tu(e.parent);
}
function Fg(e, t, n) {
  return Eo(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Rt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function hr(e) {
  return cr(e.animate) || qo.some((t) => ln(e[t]));
}
function nu(e) {
  return !!(hr(e) || e.variants);
}
function Bg(e, t) {
  if (hr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ln(n) ? n : void 0,
      animate: ln(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function zg(e) {
  const { initial: t, animate: n } = Bg(e, ue(dr));
  return Xn(() => ({ initial: t, animate: n }), [va(t), va(n)]);
}
function va(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ga = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, kt = {};
for (const e in ga)
  kt[e] = {
    isEnabled: (t) => ga[e].some((n) => !!t[n])
  };
function Hg(e) {
  for (const t in e)
    kt[t] = {
      ...kt[t],
      ...e[t]
    };
}
const Wg = Symbol.for("motionComponentSymbol");
function Ug({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && Hg(e);
  function i(a, l) {
    let c;
    const u = {
      ...ue(Qc),
      ...a,
      layoutId: $g(a)
    }, { isStatic: d } = u, h = zg(a), m = r(a, d);
    if (!d && ms) {
      qg(u, e);
      const g = Kg(u);
      c = g.MeasureLayout, h.visualElement = Ng(o, m, u, t, g.ProjectionNode);
    }
    return f.jsxs(dr.Provider, { value: h, children: [c && h.visualElement ? f.jsx(c, { visualElement: h.visualElement, ...u }) : null, n(o, a, Fg(m, h.visualElement, l), m, d, h.visualElement)] });
  }
  const s = It(i);
  return s[Wg] = o, s;
}
function $g({ layoutId: e }) {
  const t = ue(Hc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function qg(e, t) {
  const n = ue(eu).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Ht(!1, r) : it(!1, r);
  }
}
function Kg(e) {
  const { drag: t, layout: n } = kt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Gg = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function vs(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Gg.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function ru(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const ou = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function su(e, t, n, r) {
  ru(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(ou.has(o) ? o : ts(o), t.attrs[o]);
}
function iu(e, { layout: t, layoutId: n }) {
  return wt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Gn[e] || e === "opacity");
}
function gs(e, t, n) {
  var r;
  const { style: o } = e, i = {};
  for (const s in o)
    (de(o[s]) || t.style && de(t.style[s]) || iu(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[s] = o[s]);
  return i;
}
function au(e, t, n) {
  const r = gs(e, t, n);
  for (const o in e)
    if (de(e[o]) || de(t[o])) {
      const i = vn.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
function Yg(e) {
  const t = Jt(null);
  return t.current === null && (t.current = e()), t.current;
}
function Xg({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const s = {
    latestValues: Zg(r, o, i, e),
    renderState: t()
  };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const lu = (e) => (t, n) => {
  const r = ue(dr), o = ue(hs), i = () => Xg(e, t, r, o);
  return n ? i() : Yg(i);
};
function Zg(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const h in i)
    o[h] = Nn(i[h]);
  let { initial: s, animate: a } = e;
  const l = hr(e), c = nu(e);
  t && c && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  const d = u ? a : s;
  if (d && typeof d != "boolean" && !cr(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let m = 0; m < h.length; m++) {
      const g = Uo(e, h[m]);
      if (g) {
        const { transitionEnd: p, transition: w, ...x } = g;
        for (const b in x) {
          let S = x[b];
          if (Array.isArray(S)) {
            const T = u ? S.length - 1 : 0;
            S = S[T];
          }
          S !== null && (o[b] = S);
        }
        for (const b in p)
          o[b] = p[b];
      }
    }
  }
  return o;
}
const ys = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), cu = () => ({
  ...ys(),
  attrs: {}
}), uu = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Jg = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Qg = vn.length;
function e2(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < Qg; i++) {
    const s = vn[i], a = e[s];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = uu(a, ls[s]);
      if (!l) {
        o = !1;
        const u = Jg[s] || s;
        r += `${u}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function xs(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (wt.has(l)) {
      s = !0;
      continue;
    } else if (fc(l)) {
      o[l] = c;
      continue;
    } else {
      const u = uu(c, ls[l]);
      l.startsWith("origin") ? (a = !0, i[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (s || n ? r.transform = e2(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
function ya(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function t2(e, t, n) {
  const r = ya(t, e.x, e.width), o = ya(n, e.y, e.height);
  return `${r} ${o}`;
}
const n2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, r2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function o2(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? n2 : r2;
  e[i.offset] = D.transform(-r);
  const s = D.transform(t), a = D.transform(n);
  e[i.array] = `${s} ${a}`;
}
function ws(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: i,
  pathLength: s,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, d) {
  if (xs(e, c, d), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: m, dimensions: g } = e;
  h.transform && (g && (m.transform = h.transform), delete h.transform), g && (o !== void 0 || i !== void 0 || m.transform) && (m.transformOrigin = t2(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), s !== void 0 && o2(h, s, a, l, !1);
}
const bs = (e) => typeof e == "string" && e.toLowerCase() === "svg", s2 = {
  useVisualState: lu({
    scrapeMotionValuesFromProps: au,
    createRenderState: cu,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      Q.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), Q.render(() => {
        ws(n, r, bs(t.tagName), e.transformTemplate), su(t, n);
      });
    }
  })
}, i2 = {
  useVisualState: lu({
    scrapeMotionValuesFromProps: gs,
    createRenderState: ys
  })
};
function fu(e, t, n) {
  for (const r in t)
    !de(t[r]) && !iu(r, n) && (e[r] = t[r]);
}
function a2({ transformTemplate: e }, t) {
  return Xn(() => {
    const n = ys();
    return xs(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function l2(e, t) {
  const n = e.style || {}, r = {};
  return fu(r, n, e), Object.assign(r, a2(e, t)), r;
}
function c2(e, t) {
  const n = {}, r = l2(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const u2 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Yn(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || u2.has(e);
}
let du = (e) => !Yn(e);
function f2(e) {
  e && (du = (t) => t.startsWith("on") ? !Yn(t) : e(t));
}
try {
  f2(require("@emotion/is-prop-valid").default);
} catch {
}
function d2(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (du(o) || n === !0 && Yn(o) || !t && !Yn(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function h2(e, t, n, r) {
  const o = Xn(() => {
    const i = cu();
    return ws(i, t, bs(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    fu(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function p2(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (vs(n) ? h2 : c2)(r, i, s, n), c = d2(r, typeof n == "string", e), u = n !== Sa ? { ...c, ...l, ref: o } : {}, { children: d } = r, h = Xn(() => de(d) ? d.get() : d, [d]);
    return Zu(n, {
      ...u,
      children: h
    });
  };
}
function m2(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...vs(r) ? s2 : i2,
      preloadedFeatures: e,
      useRender: p2(o),
      createVisualElement: t,
      Component: r
    };
    return Ug(s);
  };
}
const Co = { current: null }, hu = { current: !1 };
function v2() {
  if (hu.current = !0, !!ms)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Co.current = e.matches;
      e.addListener(t), t();
    } else
      Co.current = !1;
}
function g2(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (de(o))
      e.addValue(r, o), process.env.NODE_ENV === "development" && lr(o.version === "11.16.0", `Attempting to mix Motion versions ${o.version} with 11.16.0 may not work as expected.`);
    else if (de(i))
      e.addValue(r, cn(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, cn(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const xa = /* @__PURE__ */ new WeakMap(), y2 = [...pc, fe, lt], x2 = (e) => y2.find(hc(e)), wa = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class w2 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: i, visualState: s }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ss, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = Fe.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, Q.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c } = s;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = hr(n), this.isVariantNode = nu(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in d) {
      const m = d[h];
      l[h] !== void 0 && de(m) && m.set(l[h], !1);
    }
  }
  mount(t) {
    this.current = t, xa.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), hu.current || v2(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Co.current, process.env.NODE_ENV !== "production" && lr(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    xa.delete(this.current), this.projection && this.projection.unmount(), at(this.notifyUpdate), at(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = wt.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && Q.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), i(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in kt) {
      const n = kt[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), i.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : oe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < wa.length; r++) {
      const o = wa[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = g2(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = cn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (cc(o) || lc(o)) ? o = parseFloat(o) : !x2(o) && lt.test(n) && (o = Sc(t, n)), this.setBaseTarget(t, de(o) ? o.get() : o)), de(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = Uo(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (o = s[t]);
    }
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !de(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new es()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class pu extends w2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = Cc;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    de(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function b2(e) {
  return window.getComputedStyle(e);
}
class S2 extends pu {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ru;
  }
  readValueFromInstance(t, n) {
    if (wt.has(n)) {
      const r = cs(n);
      return r && r.default || 0;
    } else {
      const r = b2(t), o = (fc(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Bc(t, n);
  }
  build(t, n, r) {
    xs(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return gs(t, n, r);
  }
}
class C2 extends pu {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = oe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (wt.has(n)) {
      const r = cs(n);
      return r && r.default || 0;
    }
    return n = ou.has(n) ? n : ts(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return au(t, n, r);
  }
  build(t, n, r) {
    ws(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    su(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = bs(t.tagName), super.mount(t);
  }
}
const T2 = (e, t) => vs(e) ? new C2(t) : new S2(t, {
  allowProjection: e !== Sa
}), P2 = /* @__PURE__ */ m2({
  ...dv,
  ...Lg,
  ...Cg,
  ..._g
}, T2), E2 = /* @__PURE__ */ tp(P2), w5 = (e) => {
  const { disableAnimation: t = !1, onLoad: n, ...r } = e, [o, i] = rn(!1), s = (a) => {
    i(!0), n == null || n(a);
  };
  return /* @__PURE__ */ f.jsx(
    E2.img,
    {
      initial: t ? void 0 : { opacity: 0 },
      animate: t ? void 0 : { opacity: o ? 1 : 0 },
      transition: { duration: 0.2 },
      onLoad: t ? void 0 : s,
      ...r
    }
  );
};
function b5({
  children: e,
  status: t,
  handleClose: n
}) {
  var o, i;
  const r = {
    success: {
      icon: "Checkmark",
      color: "bg-green-500"
    }
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "rounded-[1rem] bg-grey-900 text-white flex shadow-xl gap-4 p-4 text-14 w-full", children: [
    t ? /* @__PURE__ */ f.jsx("span", { className: "h-[1.25em] flex items-center", children: /* @__PURE__ */ f.jsx(
      "span",
      {
        className: `flex-shrink-0 size-6 text-white flex items-center justify-center rounded-full ${(o = r[t]) == null ? void 0 : o.color}`,
        children: /* @__PURE__ */ f.jsx($e, { name: (i = r[t]) == null ? void 0 : i.icon, className: "size-4" })
      }
    ) }) : null,
    /* @__PURE__ */ f.jsx("div", { className: "text-14 leading-tight flex flex-col w-full", children: e }),
    n ? /* @__PURE__ */ f.jsx("span", { className: "h-[1.25em] flex items-center", children: /* @__PURE__ */ f.jsxs(
      "button",
      {
        type: "button",
        className: "flex-shrink-0 size-6 bg-grey-700 text-white flex items-center justify-center rounded-full",
        onClick: n,
        children: [
          /* @__PURE__ */ f.jsx($e, { name: "Close", className: "size-4" }),
          " "
        ]
      }
    ) }) : null
  ] });
}
function Ss(e) {
  if (!e || typeof e != "string")
    return null;
  let t = "";
  if (/^[a-z]+(_[a-z]+)*$/.test(e))
    t = e.replace(/_/g, " ");
  else if (/^[a-z]+(-[a-z]+)*$/.test(e))
    t = e.replace(/-/g, " ");
  else if (/^[A-Z][a-zA-Z]*$/.test(e) || /^[a-z]+([A-Z][a-z]*)*$/.test(e))
    t = e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  else
    throw new Error(
      "String format not recognized as snake, kebab, Pascal, or camel case"
    );
  return t = t.trim().toLowerCase(), t.charAt(0).toUpperCase() + t.slice(1);
}
function S5(e) {
  const { name: t, children: n } = e, r = e.label || Ss(t);
  return /* @__PURE__ */ f.jsx(Wo, { name: t, children: n || /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(Ao, { children: r }),
    /* @__PURE__ */ f.jsx(Ra, { "variant-width": "full" })
  ] }) });
}
function C5(e) {
  const { name: t, children: n, options: r, defaultValue: o, ...i } = e, s = e.label || Ss(t);
  return /* @__PURE__ */ f.jsx(Wo, { name: t, children: n || /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(Ao, { children: s }),
    /* @__PURE__ */ f.jsx(
      q1,
      {
        defaultValue: o,
        options: r,
        ...i
      }
    )
  ] }) });
}
function T5(e) {
  const { label: t, ...n } = e;
  return /* @__PURE__ */ f.jsx(Ca, { type: "submit", variant: "primary", "variant-flex": "start", ...n, children: t });
}
function P5(e) {
  const { address: t, onDisconnect: n } = e, r = e.name || "wallet-address", o = e.label || Ss(r);
  function i(s) {
    n && typeof n == "function" && n(s);
  }
  return /* @__PURE__ */ f.jsxs(Wo, { name: r, children: [
    /* @__PURE__ */ f.jsxs(Ao, { children: [
      o,
      " "
    ] }),
    /* @__PURE__ */ f.jsxs(Tr, { subvariants: { width: "full" }, children: [
      /* @__PURE__ */ f.jsx(Tr.Segment, { subvariants: { pointer: "none" }, children: /* @__PURE__ */ f.jsx($e, { name: "Wallet", width: "20" }) }),
      /* @__PURE__ */ f.jsx(
        Ra,
        {
          type: "text",
          defaultValue: t ?? "",
          variant: "transparent",
          subvariants: { width: "full" },
          readOnly: !0
        }
      ),
      /* @__PURE__ */ f.jsx(Tr.Segment, { children: /* @__PURE__ */ f.jsxs(
        Ca,
        {
          variant: "tertiary",
          className: "self-center",
          onClick: i,
          children: [
            /* @__PURE__ */ f.jsx($e, { name: "Signout", width: "16" }),
            "Disconnect"
          ]
        }
      ) })
    ] })
  ] });
}
function R2({ to: e }) {
  return /* @__PURE__ */ f.jsx("div", { className: "text-14 font-medium mt-8", children: /* @__PURE__ */ f.jsxs("p", { children: [
    "Want to learn more? Read the",
    "  ",
    /* @__PURE__ */ f.jsx(
      "a",
      {
        href: e,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "underline text-white",
        children: "docs"
      }
    ),
    "!"
  ] }) });
}
function A2({
  name: e,
  description: t
}) {
  return /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-4 items-center  text-center", children: [
    /* @__PURE__ */ f.jsx(
      $e,
      {
        name: "SequenceBoilerplateLogo",
        alt: "Sequence Boilerplate",
        className: "mb-2",
        width: "276"
      }
    ),
    /* @__PURE__ */ f.jsx("h1", { className: "text-32 sm:text-40 font-bold leading-tight", children: e }),
    /* @__PURE__ */ f.jsx("p", { className: "text-14 sm:font-bold", children: t })
  ] });
}
function j2(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var Cs = (e) => {
  const { present: t, children: n } = e, r = M2(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), i = le(r.ref, D2(o));
  return typeof n == "function" || r.isPresent ? v.cloneElement(o, { ref: i }) : null;
};
Cs.displayName = "Presence";
function M2(e) {
  const [t, n] = v.useState(), r = v.useRef({}), o = v.useRef(e), i = v.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = j2(s, {
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
  return v.useEffect(() => {
    const c = Dn(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), ve(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const h = i.current, m = Dn(c);
      e ? l("MOUNT") : m === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && h !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), ve(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, d = (m) => {
        const p = Dn(r.current).includes(m.animationName);
        if (m.target === t && p && (l("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, h = (m) => {
        m.target === t && (i.current = Dn(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: v.useCallback((c) => {
      c && (r.current = getComputedStyle(c)), n(c);
    }, [])
  };
}
function Dn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function D2(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var [pr, E5] = Da("Tooltip", [
  rr
]), mr = rr(), mu = "TooltipProvider", V2 = 700, To = "tooltip.open", [O2, Ts] = pr(mu), vu = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = V2,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, [s, a] = v.useState(!0), l = v.useRef(!1), c = v.useRef(0);
  return v.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ f.jsx(
    O2,
    {
      scope: t,
      isOpenDelayed: s,
      delayDuration: n,
      onOpen: v.useCallback(() => {
        window.clearTimeout(c.current), a(!1);
      }, []),
      onClose: v.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: v.useCallback((u) => {
        l.current = u;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
vu.displayName = mu;
var vr = "Tooltip", [L2, bn] = pr(vr), gu = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: a
  } = e, l = Ts(vr, e.__scopeTooltip), c = mr(t), [u, d] = v.useState(null), h = Qn(), m = v.useRef(0), g = s ?? l.disableHoverableContent, p = a ?? l.delayDuration, w = v.useRef(!1), [x = !1, b] = Qr({
    prop: r,
    defaultProp: o,
    onChange: (E) => {
      E ? (l.onOpen(), document.dispatchEvent(new CustomEvent(To))) : l.onClose(), i == null || i(E);
    }
  }), S = v.useMemo(() => x ? w.current ? "delayed-open" : "instant-open" : "closed", [x]), T = v.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, w.current = !1, b(!0);
  }, [b]), C = v.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, b(!1);
  }, [b]), A = v.useCallback(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      w.current = !0, b(!0), m.current = 0;
    }, p);
  }, [p, b]);
  return v.useEffect(() => () => {
    m.current && (window.clearTimeout(m.current), m.current = 0);
  }, []), /* @__PURE__ */ f.jsx(tl, { ...c, children: /* @__PURE__ */ f.jsx(
    L2,
    {
      scope: t,
      contentId: h,
      open: x,
      stateAttribute: S,
      trigger: u,
      onTriggerChange: d,
      onTriggerEnter: v.useCallback(() => {
        l.isOpenDelayed ? A() : T();
      }, [l.isOpenDelayed, A, T]),
      onTriggerLeave: v.useCallback(() => {
        g ? C() : (window.clearTimeout(m.current), m.current = 0);
      }, [C, g]),
      onOpen: T,
      onClose: C,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
gu.displayName = vr;
var Po = "TooltipTrigger", yu = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = bn(Po, n), i = Ts(Po, n), s = mr(n), a = v.useRef(null), l = le(t, a, o.onTriggerChange), c = v.useRef(!1), u = v.useRef(!1), d = v.useCallback(() => c.current = !1, []);
    return v.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ f.jsx(nl, { asChild: !0, ...s, children: /* @__PURE__ */ f.jsx(
      se.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: J(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !u.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: J(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: J(e.onPointerDown, () => {
          c.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: J(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: J(e.onBlur, o.onClose),
        onClick: J(e.onClick, o.onClose)
      }
    ) });
  }
);
yu.displayName = Po;
var Ps = "TooltipPortal", [_2, k2] = pr(Ps, {
  forceMount: void 0
}), xu = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, i = bn(Ps, t);
  return /* @__PURE__ */ f.jsx(_2, { scope: t, forceMount: n, children: /* @__PURE__ */ f.jsx(Cs, { present: n || i.open, children: /* @__PURE__ */ f.jsx(Fo, { asChild: !0, container: o, children: r }) }) });
};
xu.displayName = Ps;
var Nt = "TooltipContent", wu = v.forwardRef(
  (e, t) => {
    const n = k2(Nt, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, s = bn(Nt, e.__scopeTooltip);
    return /* @__PURE__ */ f.jsx(Cs, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ f.jsx(bu, { side: o, ...i, ref: t }) : /* @__PURE__ */ f.jsx(N2, { side: o, ...i, ref: t }) });
  }
), N2 = v.forwardRef((e, t) => {
  const n = bn(Nt, e.__scopeTooltip), r = Ts(Nt, e.__scopeTooltip), o = v.useRef(null), i = le(t, o), [s, a] = v.useState(null), { trigger: l, onClose: c } = n, u = o.current, { onPointerInTransitChange: d } = r, h = v.useCallback(() => {
    a(null), d(!1);
  }, [d]), m = v.useCallback(
    (g, p) => {
      const w = g.currentTarget, x = { x: g.clientX, y: g.clientY }, b = B2(x, w.getBoundingClientRect()), S = z2(x, b), T = H2(p.getBoundingClientRect()), C = U2([...S, ...T]);
      a(C), d(!0);
    },
    [d]
  );
  return v.useEffect(() => () => h(), [h]), v.useEffect(() => {
    if (l && u) {
      const g = (w) => m(w, u), p = (w) => m(w, l);
      return l.addEventListener("pointerleave", g), u.addEventListener("pointerleave", p), () => {
        l.removeEventListener("pointerleave", g), u.removeEventListener("pointerleave", p);
      };
    }
  }, [l, u, m, h]), v.useEffect(() => {
    if (s) {
      const g = (p) => {
        const w = p.target, x = { x: p.clientX, y: p.clientY }, b = (l == null ? void 0 : l.contains(w)) || (u == null ? void 0 : u.contains(w)), S = !W2(x, s);
        b ? h() : S && (h(), c());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [l, u, s, c, h]), /* @__PURE__ */ f.jsx(bu, { ...e, ref: i });
}), [I2, F2] = pr(vr, { isInside: !1 }), bu = v.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...a
    } = e, l = bn(Nt, n), c = mr(n), { onClose: u } = l;
    return v.useEffect(() => (document.addEventListener(To, u), () => document.removeEventListener(To, u)), [u]), v.useEffect(() => {
      if (l.trigger) {
        const d = (h) => {
          const m = h.target;
          m != null && m.contains(l.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [l.trigger, u]), /* @__PURE__ */ f.jsx(
      jo,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ f.jsxs(
          rl,
          {
            "data-state": l.stateAttribute,
            ...c,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ f.jsx(Ma, { children: r }),
              /* @__PURE__ */ f.jsx(I2, { scope: n, isInside: !0, children: /* @__PURE__ */ f.jsx(w0, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
wu.displayName = Nt;
var Su = "TooltipArrow", Cu = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = mr(n);
    return F2(
      Su,
      n
    ).isInside ? null : /* @__PURE__ */ f.jsx(ol, { ...o, ...r, ref: t });
  }
);
Cu.displayName = Su;
function B2(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function z2(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function H2(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function W2(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, c = t[s].x, u = t[s].y;
    l > r != u > r && n < (c - a) * (r - l) / (u - l) + a && (o = !o);
  }
  return o;
}
function U2(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), $2(t);
}
function $2(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var q2 = vu, K2 = gu, G2 = yu, Y2 = xu, X2 = wu, Z2 = Cu;
function J2({ to: e }) {
  return e ? /* @__PURE__ */ f.jsx(q2, { delayDuration: 100, children: /* @__PURE__ */ f.jsxs(K2, { children: [
    /* @__PURE__ */ f.jsx(G2, { className: "github-corner", asChild: !0, children: /* @__PURE__ */ f.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ f.jsxs(
      "svg",
      {
        width: "80",
        height: "80",
        viewBox: "0 0 250 250",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ f.jsx("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
          /* @__PURE__ */ f.jsx(
            "path",
            {
              d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
              fill: "currentColor",
              className: "octo-arm"
            }
          ),
          /* @__PURE__ */ f.jsx(
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
    /* @__PURE__ */ f.jsx(Y2, { children: /* @__PURE__ */ f.jsxs(
      X2,
      {
        side: "right",
        className: "bg-white rounded-md text-black text-14 px-2 py-0.5",
        children: [
          "View source on GitHub",
          /* @__PURE__ */ f.jsx(Z2, {})
        ]
      }
    ) })
  ] }) }) : null;
}
const Tu = Xe(null);
function Q2() {
  const e = ue(Tu);
  if (!e)
    throw new Error(
      "useSequenceDemoKit must be used within a SequenceBoilerplateProvider"
    );
  return e;
}
function e5(e) {
  const { children: t, ...n } = Se(
    "root",
    e
  );
  return /* @__PURE__ */ f.jsx("div", { ...n, children: t });
}
const t5 = "https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/";
function n5({
  name: e,
  description: t,
  githubUrl: n,
  docsUrl: r,
  useAuth: o,
  children: i
}) {
  return /* @__PURE__ */ f.jsx(
    Tu.Provider,
    {
      value: {
        githubUrl: n,
        docsUrl: r || t5,
        name: e,
        description: t,
        useAuth: o
      },
      children: i
    }
  );
}
function R5(e) {
  const { children: t } = e;
  return /* @__PURE__ */ f.jsx(n5, { ...e, children: /* @__PURE__ */ f.jsx(r5, { children: t }) });
}
function r5({ children: e }) {
  const { name: t, description: n, githubUrl: r, docsUrl: o } = Q2();
  return /* @__PURE__ */ f.jsxs(e5, { children: [
    /* @__PURE__ */ f.jsx(J2, { to: r }),
    /* @__PURE__ */ f.jsx(A2, { name: t, description: n }),
    /* @__PURE__ */ f.jsx("div", { className: "py-8", children: e }),
    /* @__PURE__ */ f.jsx(R2, { to: o })
  ] });
}
export {
  Ca as Button,
  g5 as ButtonLink,
  i5 as Card,
  a5 as Divider,
  Wo as Field,
  m5 as FieldError,
  R2 as Footer,
  d5 as Form,
  h5 as FormErrors,
  p5 as FormSuccess,
  J2 as GithubCorner,
  l5 as Group,
  A2 as Header,
  w5 as Image,
  Ra as Input,
  C5 as InputSelect,
  S5 as InputText,
  Ao as Label,
  v5 as Link,
  Tr as SegmentedInput,
  q1 as Select,
  R5 as SequenceBoilerplate,
  n5 as SequenceBoilerplateProvider,
  e5 as SequenceBoilerplateRoot,
  P5 as ShowAddressWithDisconnect,
  T5 as Submit,
  $e as Svg,
  b5 as Toast,
  Y1 as createFormObjectWithoutValidation,
  zl as setStoreData,
  f5 as useAsyncStoreData,
  Ho as useForm,
  Q2 as useSequenceBoilerplate,
  u5 as useStoreData,
  G1 as validateAndCreateFormObjectOrThrow
};
