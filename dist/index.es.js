import * as b from "react";
import _, { forwardRef as Vt, createContext as ge, useContext as oe, useLayoutEffect as eu, useEffect as me, useState as ve, useCallback as Re, useSyncExternalStore as _p, useRef as Q, useId as to, useInsertionEffect as tu, useMemo as Ce, Children as Bp, isValidElement as Fp, Fragment as jr, createElement as Up, Component as Hp, memo as zp } from "react";
import * as no from "react-dom";
import nu, { flushSync as Wp } from "react-dom";
function qp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ds = { exports: {} }, jn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function Kp() {
  if (za) return jn;
  za = 1;
  var e = _, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, c) {
    var u, f = {}, h = null, p = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (u in l) r.call(l, u) && !s.hasOwnProperty(u) && (f[u] = l[u]);
    if (a && a.defaultProps) for (u in l = a.defaultProps, l) f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: t, type: a, key: h, ref: p, props: f, _owner: o.current };
  }
  return jn.Fragment = n, jn.jsx = i, jn.jsxs = i, jn;
}
var kn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa;
function Gp() {
  return Wa || (Wa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, m = "@@iterator";
    function g(w) {
      if (w === null || typeof w != "object")
        return null;
      var C = v && w[v] || w[m];
      return typeof C == "function" ? C : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(w) {
      {
        for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
          M[H - 1] = arguments[H];
        T("error", w, M);
      }
    }
    function T(w, C, M) {
      {
        var H = x.ReactDebugCurrentFrame, ne = H.getStackAddendum();
        ne !== "" && (C += "%s", M = M.concat([ne]));
        var ae = M.map(function(Y) {
          return String(Y);
        });
        ae.unshift("Warning: " + C), Function.prototype.apply.call(console[w], console, ae);
      }
    }
    var A = !1, S = !1, P = !1, R = !1, O = !1, L;
    L = Symbol.for("react.module.reference");
    function N(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === r || w === s || O || w === o || w === c || w === u || R || w === p || A || S || P || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === f || w.$$typeof === i || w.$$typeof === a || w.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === L || w.getModuleId !== void 0));
    }
    function k(w, C, M) {
      var H = w.displayName;
      if (H)
        return H;
      var ne = C.displayName || C.name || "";
      return ne !== "" ? M + "(" + ne + ")" : M;
    }
    function W(w) {
      return w.displayName || "Context";
    }
    function B(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case a:
            var C = w;
            return W(C) + ".Consumer";
          case i:
            var M = w;
            return W(M._context) + ".Provider";
          case l:
            return k(w, w.render, "ForwardRef");
          case f:
            var H = w.displayName || null;
            return H !== null ? H : B(w.type) || "Memo";
          case h: {
            var ne = w, ae = ne._payload, Y = ne._init;
            try {
              return B(Y(ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, K = 0, U, j, $, q, ue, De, st;
    function it() {
    }
    it.__reactDisabledLog = !0;
    function Ve() {
      {
        if (K === 0) {
          U = console.log, j = console.info, $ = console.warn, q = console.error, ue = console.group, De = console.groupCollapsed, st = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: it,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        K++;
      }
    }
    function at() {
      {
        if (K--, K === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, w, {
              value: U
            }),
            info: I({}, w, {
              value: j
            }),
            warn: I({}, w, {
              value: $
            }),
            error: I({}, w, {
              value: q
            }),
            group: I({}, w, {
              value: ue
            }),
            groupCollapsed: I({}, w, {
              value: De
            }),
            groupEnd: I({}, w, {
              value: st
            })
          });
        }
        K < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var We = x.ReactCurrentDispatcher, F;
    function ee(w, C, M) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (ne) {
            var H = ne.stack.trim().match(/\n( *(at )?)/);
            F = H && H[1] || "";
          }
        return `
` + F + w;
      }
    }
    var Ee = !1, X;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      X = new te();
    }
    function Z(w, C) {
      if (!w || Ee)
        return "";
      {
        var M = X.get(w);
        if (M !== void 0)
          return M;
      }
      var H;
      Ee = !0;
      var ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ae;
      ae = We.current, We.current = null, Ve();
      try {
        if (C) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (_e) {
              H = _e;
            }
            Reflect.construct(w, [], Y);
          } else {
            try {
              Y.call();
            } catch (_e) {
              H = _e;
            }
            w.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            H = _e;
          }
          w();
        }
      } catch (_e) {
        if (_e && H && typeof _e.stack == "string") {
          for (var G = _e.stack.split(`
`), je = H.stack.split(`
`), ye = G.length - 1, Te = je.length - 1; ye >= 1 && Te >= 0 && G[ye] !== je[Te]; )
            Te--;
          for (; ye >= 1 && Te >= 0; ye--, Te--)
            if (G[ye] !== je[Te]) {
              if (ye !== 1 || Te !== 1)
                do
                  if (ye--, Te--, Te < 0 || G[ye] !== je[Te]) {
                    var Ke = `
` + G[ye].replace(" at new ", " at ");
                    return w.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", w.displayName)), typeof w == "function" && X.set(w, Ke), Ke;
                  }
                while (ye >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        Ee = !1, We.current = ae, at(), Error.prepareStackTrace = ne;
      }
      var tn = w ? w.displayName || w.name : "", Ut = tn ? ee(tn) : "";
      return typeof w == "function" && X.set(w, Ut), Ut;
    }
    function Le(w, C, M) {
      return Z(w, !1);
    }
    function qe(w) {
      var C = w.prototype;
      return !!(C && C.isReactComponent);
    }
    function lt(w, C, M) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return Z(w, qe(w));
      if (typeof w == "string")
        return ee(w);
      switch (w) {
        case c:
          return ee("Suspense");
        case u:
          return ee("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case l:
            return Le(w.render);
          case f:
            return lt(w.type, C, M);
          case h: {
            var H = w, ne = H._payload, ae = H._init;
            try {
              return lt(ae(ne), C, M);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, Pt = {}, hr = x.ReactDebugCurrentFrame;
    function yt(w) {
      if (w) {
        var C = w._owner, M = lt(w.type, w._source, C ? C.type : null);
        hr.setExtraStackFrame(M);
      } else
        hr.setExtraStackFrame(null);
    }
    function gp(w, C, M, H, ne) {
      {
        var ae = Function.call.bind(Qe);
        for (var Y in w)
          if (ae(w, Y)) {
            var G = void 0;
            try {
              if (typeof w[Y] != "function") {
                var je = Error((H || "React class") + ": " + M + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              G = w[Y](C, Y, H, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ye) {
              G = ye;
            }
            G && !(G instanceof Error) && (yt(ne), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", M, Y, typeof G), yt(null)), G instanceof Error && !(G.message in Pt) && (Pt[G.message] = !0, yt(ne), y("Failed %s type: %s", M, G.message), yt(null));
          }
      }
    }
    var yp = Array.isArray;
    function Ro(w) {
      return yp(w);
    }
    function xp(w) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return M;
      }
    }
    function bp(w) {
      try {
        return La(w), !1;
      } catch {
        return !0;
      }
    }
    function La(w) {
      return "" + w;
    }
    function ja(w) {
      if (bp(w))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xp(w)), La(w);
    }
    var Ln = x.ReactCurrentOwner, wp = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ka, Ia, Co;
    Co = {};
    function Ep(w) {
      if (Qe.call(w, "ref")) {
        var C = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function Tp(w) {
      if (Qe.call(w, "key")) {
        var C = Object.getOwnPropertyDescriptor(w, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Sp(w, C) {
      if (typeof w.ref == "string" && Ln.current && C && Ln.current.stateNode !== C) {
        var M = B(Ln.current.type);
        Co[M] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Ln.current.type), w.ref), Co[M] = !0);
      }
    }
    function Ap(w, C) {
      {
        var M = function() {
          ka || (ka = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function Pp(w, C) {
      {
        var M = function() {
          Ia || (Ia = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Rp = function(w, C, M, H, ne, ae, Y) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: w,
        key: C,
        ref: M,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: ae
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function Cp(w, C, M, H, ne) {
      {
        var ae, Y = {}, G = null, je = null;
        M !== void 0 && (ja(M), G = "" + M), Tp(C) && (ja(C.key), G = "" + C.key), Ep(C) && (je = C.ref, Sp(C, ne));
        for (ae in C)
          Qe.call(C, ae) && !wp.hasOwnProperty(ae) && (Y[ae] = C[ae]);
        if (w && w.defaultProps) {
          var ye = w.defaultProps;
          for (ae in ye)
            Y[ae] === void 0 && (Y[ae] = ye[ae]);
        }
        if (G || je) {
          var Te = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          G && Ap(Y, Te), je && Pp(Y, Te);
        }
        return Rp(w, G, je, ne, H, Ln.current, Y);
      }
    }
    var Oo = x.ReactCurrentOwner, Da = x.ReactDebugCurrentFrame;
    function en(w) {
      if (w) {
        var C = w._owner, M = lt(w.type, w._source, C ? C.type : null);
        Da.setExtraStackFrame(M);
      } else
        Da.setExtraStackFrame(null);
    }
    var Mo;
    Mo = !1;
    function $o(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function Va() {
      {
        if (Oo.current) {
          var w = B(Oo.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function Op(w) {
      return "";
    }
    var _a = {};
    function Mp(w) {
      {
        var C = Va();
        if (!C) {
          var M = typeof w == "string" ? w : w.displayName || w.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
    }
    function Ba(w, C) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var M = Mp(C);
        if (_a[M])
          return;
        _a[M] = !0;
        var H = "";
        w && w._owner && w._owner !== Oo.current && (H = " It was passed a child from " + B(w._owner.type) + "."), en(w), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, H), en(null);
      }
    }
    function Fa(w, C) {
      {
        if (typeof w != "object")
          return;
        if (Ro(w))
          for (var M = 0; M < w.length; M++) {
            var H = w[M];
            $o(H) && Ba(H, C);
          }
        else if ($o(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var ne = g(w);
          if (typeof ne == "function" && ne !== w.entries)
            for (var ae = ne.call(w), Y; !(Y = ae.next()).done; )
              $o(Y.value) && Ba(Y.value, C);
        }
      }
    }
    function $p(w) {
      {
        var C = w.type;
        if (C == null || typeof C == "string")
          return;
        var M;
        if (typeof C == "function")
          M = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === f))
          M = C.propTypes;
        else
          return;
        if (M) {
          var H = B(C);
          gp(M, w.props, "prop", H, w);
        } else if (C.PropTypes !== void 0 && !Mo) {
          Mo = !0;
          var ne = B(C);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Np(w) {
      {
        for (var C = Object.keys(w.props), M = 0; M < C.length; M++) {
          var H = C[M];
          if (H !== "children" && H !== "key") {
            en(w), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), en(null);
            break;
          }
        }
        w.ref !== null && (en(w), y("Invalid attribute `ref` supplied to `React.Fragment`."), en(null));
      }
    }
    var Ua = {};
    function Ha(w, C, M, H, ne, ae) {
      {
        var Y = N(w);
        if (!Y) {
          var G = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = Op();
          je ? G += je : G += Va();
          var ye;
          w === null ? ye = "null" : Ro(w) ? ye = "array" : w !== void 0 && w.$$typeof === t ? (ye = "<" + (B(w.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof w, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, G);
        }
        var Te = Cp(w, C, M, ne, ae);
        if (Te == null)
          return Te;
        if (Y) {
          var Ke = C.children;
          if (Ke !== void 0)
            if (H)
              if (Ro(Ke)) {
                for (var tn = 0; tn < Ke.length; tn++)
                  Fa(Ke[tn], w);
                Object.freeze && Object.freeze(Ke);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fa(Ke, w);
        }
        if (Qe.call(C, "key")) {
          var Ut = B(w), _e = Object.keys(C).filter(function(Vp) {
            return Vp !== "key";
          }), No = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ua[Ut + No]) {
            var Dp = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, No, Ut, Dp, Ut), Ua[Ut + No] = !0;
          }
        }
        return w === r ? Np(Te) : $p(Te), Te;
      }
    }
    function Lp(w, C, M) {
      return Ha(w, C, M, !0);
    }
    function jp(w, C, M) {
      return Ha(w, C, M, !1);
    }
    var kp = jp, Ip = Lp;
    kn.Fragment = r, kn.jsx = kp, kn.jsxs = Ip;
  }()), kn;
}
process.env.NODE_ENV === "production" ? ds.exports = Kp() : ds.exports = Gp();
var d = ds.exports;
function Yp(e) {
  if (e)
    return Object.keys(e).reduce((t, n) => (e[n] && t.push(`${n}-${e[n]}`), t), []).join(" ");
}
function Xp(e) {
  let t = {};
  return Object.keys(e).filter((n) => n.startsWith("variant-")).forEach((n) => {
    const [, r] = n.split("-");
    r && (t[r] = e[n]);
  }), Object.keys(e).filter((n) => !n.startsWith("variant-") && n !== "subvariants").forEach((n) => {
    e[n];
  }), e.subvariants && (t = Object.assign(e.subvariants, t)), Object.keys(t).length > 0 ? t : {};
}
function ze(e, t) {
  const n = "initial", r = Xp(t), o = { ...t };
  return delete o.variant, Object.keys(r).forEach((s) => {
    delete o[`variant-${s}`];
  }), {
    "data-component": e,
    "data-variant": (t == null ? void 0 : t.variant) || n,
    "data-subvariants": Yp(r),
    ...o
  };
}
function ru(e) {
  const {
    children: t,
    type: n = "button",
    ...r
  } = ze("button", e);
  return /* @__PURE__ */ d.jsx("button", { type: n, ...r, children: t });
}
function ou(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ou(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function su() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ou(e)) && (r && (r += " "), r += t);
  return r;
}
const Zp = ({
  asChild: e,
  mergeClass: t = !0,
  fallbackAs: n = "div",
  children: r,
  ...o
}, s) => {
  var a, l;
  const i = n;
  if (!e)
    return /* @__PURE__ */ d.jsx(i, { ...o, children: r });
  if (_.Children.count(r) > 1)
    throw new Error("Only one child allowed");
  if (_.isValidElement(r)) {
    const c = t ? su((a = r == null ? void 0 : r.props) == null ? void 0 : a.className, o == null ? void 0 : o.className) : (l = r == null ? void 0 : r.props) == null ? void 0 : l.className;
    return _.cloneElement(r, {
      ...o,
      ref: s,
      ...r == null ? void 0 : r.props,
      className: c
    });
  }
  return null;
}, ro = _.forwardRef(Zp), Jp = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.168 9.25V2.929h-1.5V9.25h-6.32v1.5h6.32v6.321h1.5V10.75h6.321v-1.5z",
        clipRule: "evenodd"
      }
    )
  }
), Qp = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10 1.6a6.886 6.886 0 0 0-6.886 6.885c0 .058.018.116.055.165l4.077 5.431v4.32h5.508v-4.32l4.077-5.43a.28.28 0 0 0 .055-.166A6.886 6.886 0 0 0 10 1.6m0 4.957a1.93 1.93 0 0 0-1.928 1.928h.005c.345 1.725 1.097 5.509 1.097 5.509h1.652s.752-3.784 1.097-5.509h.005A1.93 1.93 0 0 0 10 6.557m-2.135 7.437-4.2-5.608c0-1.065.863-1.829 1.928-1.829s1.928.863 1.928 1.928c0 0 .751 3.784 1.096 5.509zm4.27 0 4.2-5.608c0-1.065-.863-1.829-1.928-1.829a1.93 1.93 0 0 0-1.928 1.928s-.751 3.784-1.096 5.509z",
        clipRule: "evenodd"
      }
    )
  }
), e0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M13.548 10.997c-.015-1.645 1.344-2.435 1.405-2.474-.764-1.119-1.953-1.271-2.378-1.29-1.011-.102-1.974.597-2.488.597s-1.306-.581-2.145-.565c-1.104.017-2.122.641-2.69 1.63-1.147 1.987-.294 4.934.824 6.549.546.789 1.196 1.677 2.052 1.644.825-.032 1.136-.533 2.13-.533.995 0 1.276.534 2.146.517.885-.018 1.447-.807 1.99-1.598.625-.916.884-1.803.899-1.85-.02-.007-1.727-.661-1.745-2.627M11.912 6.166c.454-.55.76-1.315.677-2.077-.655.027-1.446.437-1.915.986-.42.486-.789 1.264-.689 2.011.728.057 1.473-.372 1.927-.92"
      }
    )
  }
), t0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M5.479 9.94 4.419 11l5.53 5.53 5.53-5.53-1.06-1.06-3.72 3.72V3.47h-1.5v10.19z",
        clipRule: "evenodd"
      }
    )
  }
), n0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m10.888 14.47 1.06 1.06L17.48 10l-5.53-5.53-1.06 1.06 3.719 3.72H4.418v1.5h10.19z",
        clipRule: "evenodd"
      }
    )
  }
), r0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5.668 7.898c-.728.93-1.792 1.705-3.25 1.705v-1.5c1.05 0 1.848-.675 2.426-1.654.582-.987.824-2.102.824-2.575h1.5c0 .473.242 1.588.825 2.575.578.979 1.375 1.654 2.425 1.654s1.848-.675 2.426-1.654c.583-.987.824-2.102.824-2.575h1.5c0 .473.242 1.588.825 2.575.577.979 1.376 1.654 2.425 1.654v1.5c-1.457 0-2.521-.776-3.25-1.705v3.273h3.25v1.5h-3.25v3.455h-1.5V12.67h-6.5v3.456h-1.5V12.67h-3.25v-1.5h3.25zm1.5 0v3.273h6.5V7.898c-.728.93-1.792 1.705-3.25 1.705s-2.521-.776-3.25-1.705",
        clipRule: "evenodd"
      }
    )
  }
), o0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        stroke: "currentColor",
        strokeWidth: 1.5,
        d: "m4.304 10.232 4.263 4.79 7.13-11.238"
      }
    )
  }
), s0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m3.888 7.53 1.06-1.06 5.47 5.47 5.47-5.47 1.06 1.06-6.53 6.53z",
        clipRule: "evenodd"
      }
    )
  }
), i0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12.888 3.47 1.06 1.06L8.48 10l5.47 5.47-1.061 1.06L6.358 10z",
        clipRule: "evenodd"
      }
    )
  }
), a0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m7.949 16.53-1.061-1.06 5.47-5.47-5.47-5.47 1.06-1.06L14.48 10z",
        clipRule: "evenodd"
      }
    )
  }
), l0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m16.949 12.47-1.061 1.06-5.47-5.47-5.47 5.47-1.06-1.06 6.53-6.53z",
        clipRule: "evenodd"
      }
    )
  }
), c0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m10.418 11.06 4.47 4.47 1.06-1.06L11.48 10l4.47-4.47-1.06-1.06-4.47 4.47-4.47-4.47-1.06 1.06L9.357 10l-4.47 4.47 1.06 1.06z",
        clipRule: "evenodd"
      }
    )
  }
), u0 = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M9.528 7.898a2.89 2.89 0 0 1-2.882 2.899 2.89 2.89 0 0 1-2.882-2.899A2.89 2.89 0 0 1 6.646 5a2.89 2.89 0 0 1 2.882 2.898M9.053 12.275a6 6 0 0 0-2.407-.493c-2.827 0-5.121 1.885-5.146 4.217h5.708v-.01c.016-1.507.737-2.795 1.845-3.714M16.236 7.899a2.89 2.89 0 0 1-2.882 2.898 2.89 2.89 0 0 1-2.882-2.898A2.89 2.89 0 0 1 13.354 5a2.89 2.89 0 0 1 2.882 2.898"
        }
      ),
      /* @__PURE__ */ d.jsx(
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
), d0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.597 10a1.388 1.388 0 1 1-2.776 0 1.388 1.388 0 0 1 2.776 0m5.21 0a1.388 1.388 0 1 1-2.777 0 1.388 1.388 0 0 1 2.776 0m3.82 1.388a1.388 1.388 0 1 0 0-2.776 1.388 1.388 0 0 0 0 2.776",
        clipRule: "evenodd"
      }
    )
  }
), f0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.317 17H7V9.396a1.25 1.25 0 1 1 1 0v5.028l2.733-1.024v-1.012a1.25 1.25 0 1 1 1 .015v1.69L8 15.493V17h8V8.146h-5.545V3H4v14zm9.614-9.843-4.42-4.093.055 4.093z",
        clipRule: "evenodd"
      }
    )
  }
), h0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.918 4.5h-6V6h4.5v6.5h1.5zm-1.5 9.5v3h-9V6h3V3h9v11zm-7.5 1.5v-8h6v8z",
        clipRule: "evenodd"
      }
    )
  }
), p0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5 6.714 3.618 3.547H2.5L4.158 7.02H2.98v.69h1.494v.663H2.981v.69h1.494v1.484h1.036V9.063h1.46v-.69h-1.46v-.66l.001-.003h1.46v-.69h-1.13L7.5 3.547H6.383zm4.747 8.232v-.788a2.9 2.9 0 0 1-1.04-.249 2.04 2.04 0 0 1-.863-.727 2.2 2.2 0 0 1-.344-1.125h1.017q.03.39.236.65.21.257.535.383.216.08.46.109V10.81l-.319-.093q-.806-.236-1.28-.693-.468-.456-.469-1.209 0-.622.315-1.086.316-.465.853-.72.41-.2.9-.246v-.817h.537v.81q.547.034.981.249.525.255.827.706.301.447.315 1.027h-.978a1.04 1.04 0 0 0-.433-.774 1.47 1.47 0 0 0-.712-.264v2.253l.283.079q.321.084.659.228a2.6 2.6 0 0 1 .627.38q.288.235.466.583.18.348.18.834 0 .611-.295 1.086a2 2 0 0 1-.85.749q-.456.226-1.07.265v.79zm1.024-1.877q-.222.096-.486.128v-2.23q.323.095.584.218.29.133.457.337.17.204.17.524 0 .352-.194.615-.193.261-.531.408M9.747 7.706v2.095a5 5 0 0 1-.246-.086 2.2 2.2 0 0 1-.4-.207 1 1 0 0 1-.299-.313.85.85 0 0 1-.111-.443.94.94 0 0 1 .164-.545q.168-.242.47-.38.19-.089.422-.12m7.677 10.086h-4.9v-.897h.34a.34.34 0 0 0 .29-.186q.102-.175.137-.411.034-.24.028-.432l-.027-.779H12.5v-.896h.76l-.043-1.262q-.027-.708.273-1.183.305-.475.809-.715.503-.24 1.084-.24.519 0 .931.166.417.164.7.452.287.282.41.647.122.364.048.766l-1.01-.156q.034-.33-.11-.55a.9.9 0 0 0-.395-.33 1.31 1.31 0 0 0-1.102.024q-.266.135-.434.411-.165.277-.164.708l.048 1.261h1.649v.897H14.34l.029.752q.02.435-.116.78-.06.15-.166.276h3.337z",
        clipRule: "evenodd"
      }
    )
  }
), m0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
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
), v0 = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "#fff",
          fillRule: "evenodd",
          d: "M10.106 13.232a.996.996 0 0 1-1.35-.057l-1.93-1.932a.997.997 0 0 1-.058-1.349l.03-.034c.34-.403.794-.937 1.285-1.51l.303-.353.37-.43c.969-1.121 1.958-2.244 2.466-2.751 1.816-1.816 3.689-3.04 6.132-3.01a.85.85 0 0 1 .84.84c.03 2.443-1.194 4.316-3.01 6.132-.507.507-1.63 1.497-2.752 2.466a273 273 0 0 1-2.327 1.988M15.18 6.73a1.352 1.352 0 1 1-1.912-1.912 1.352 1.352 0 0 1 1.912 1.912",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "#fff",
          d: "M2.785 13.821a.4.4 0 1 0 .566.566l2.152-2.152a.4.4 0 0 0-.566-.566zM2.207 17.227a.4.4 0 0 0 .566.566l4.144-4.144a.4.4 0 1 0-.566-.566zM5.613 17.215a.4.4 0 0 1 0-.566l2.152-2.152a.4.4 0 0 1 .566.566l-2.152 2.152a.4.4 0 0 1-.566 0M2.005 9.902c1.6-1.6 3.611-2.442 5.46-2.462.032 0 .05.037.029.061a337 337 0 0 0-1.914 2.25l-.169.2-.004.002a5.9 5.9 0 0 0-3.33.06c-.068.022-.121-.062-.072-.111M10.047 14.593v-.002l.001-.002.001-.001.2-.168a309 309 0 0 0 2.25-1.914.037.037 0 0 1 .06.029c-.019 1.849-.862 3.86-2.46 5.46-.05.05-.134-.005-.112-.071a5.9 5.9 0 0 0 .06-3.331"
        }
      )
    ]
  }
), g0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.543 5.188h6.914v11.618H6.543zM5 18.497v-15h10v15zm7-12H8v1.46h4z",
        clipRule: "evenodd"
      }
    )
  }
), y0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M14.852 5.095c-.893-.46-1.85-.8-2.85-.994-.018-.003-.037.006-.046.025-.123.246-.26.567-.355.82a9.5 9.5 0 0 0-3.2 0 9 9 0 0 0-.36-.82.04.04 0 0 0-.046-.025c-1 .194-1.957.533-2.85.994a.04.04 0 0 0-.019.018c-1.815 3.05-2.312 6.024-2.068 8.961a.06.06 0 0 0 .018.037 11.2 11.2 0 0 0 3.496 1.987q.029.01.049-.018.406-.62.715-1.308c.012-.027 0-.059-.024-.07a7.3 7.3 0 0 1-1.092-.585c-.028-.018-.03-.062-.005-.083q.111-.094.217-.192a.04.04 0 0 1 .046-.006c2.29 1.176 4.771 1.176 7.035 0a.04.04 0 0 1 .046.006q.106.098.218.192c.025.02.023.065-.004.083q-.523.344-1.093.585c-.025.01-.036.043-.024.07q.316.687.715 1.308.018.027.05.018a11.1 11.1 0 0 0 3.5-1.987.05.05 0 0 0 .019-.036c.292-3.396-.49-6.346-2.07-8.961a.04.04 0 0 0-.018-.019m-7.174 7.19c-.69 0-1.258-.712-1.258-1.586s.558-1.587 1.258-1.587c.707 0 1.27.719 1.259 1.587 0 .874-.558 1.587-1.259 1.587m4.652 0c-.69 0-1.258-.712-1.258-1.586s.557-1.587 1.258-1.587c.707 0 1.27.719 1.258 1.587 0 .874-.551 1.587-1.258 1.587"
      }
    )
  }
), x0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.648 8.35 10.797 4.5h-.047v3.85zM9.25 4.5H5.918v11h9V9.85H9.25zM16.418 8l-5-5h-7v14h12z",
        clipRule: "evenodd"
      }
    )
  }
), b0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M3 12.25V18h13.5v-5.75H15v4.25H4.5v-4.25zm11.28-2.47-1.06-1.06-2.72 2.72V3.25H9v8.19L6.28 8.72 5.22 9.78l4.53 4.53z",
        clipRule: "evenodd"
      }
    )
  }
), w0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#fff",
        d: "M7.572 7.014a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.877M7.572 11.94a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.876M7.572 16.864a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876M12.89 7.014a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.877M12.89 11.94a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.876M12.89 16.864a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876"
      }
    )
  }
), E0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        d: "m5.285 12.884 6.53-6.531 2.254 2.253-6.531 6.531-2.878.618zM14.674 8.001l-2.253-2.253 1.502-1.503L16.176 6.5z"
      }
    )
  }
), T0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.01 6.1H4.99L10 9.68zM3.5 6.88v7.22h13V6.88L10 11.521zM2 15.6v-11h16v11z",
        clipRule: "evenodd"
      }
    )
  }
), S0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m6.98 5.703 7.937 7.937v-3.19h1.5v5.75h-5.75v-1.5h3.19L5.92 6.764v3.189h-1.5v-5.75h5.75v1.5z",
        clipRule: "evenodd"
      }
    )
  }
), A0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.608 6.75h-5.19v-1.5h7.75V13h-1.5V7.81l-7.72 7.72-1.06-1.06z",
        clipRule: "evenodd"
      }
    )
  }
), P0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M12.42 5.797c-.93 0-1.194.413-1.194 1.322v1.5H13.7l-.244 2.432h-2.23v7.368h-2.96V11.05H6.268V8.619h1.997V7.161c0-2.453.984-3.742 3.742-3.742.592 0 1.3.046 1.724.106v2.282"
      }
    )
  }
), R0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.51 3C3.675 3 3 3.692 3 4.545V16.6c0 .455.36.824.805.824h6.238a.815.815 0 0 0 .806-.824v-6.006c1.175 0 2.128.937 2.128 2.093v2.335c0 1.092.9 1.978 2.011 1.978S17 16.114 17 15.022V8.24c0-.832-.336-1.631-.935-2.22L13.64 3.636l-.55.542 1.845 1.814c-.754.133-1.33.832-1.33 1.675 0 .937.712 1.697 1.591 1.697.39 0 .748-.15 1.024-.399v6.057c0 .67-.552 1.212-1.233 1.212-.68 0-1.232-.542-1.232-1.212v-2.335c0-1.579-1.302-2.859-2.908-2.859V4.545C10.849 3.692 10.173 3 9.34 3zm.805 1.485a.826.826 0 0 0-.83.821v1.54c0 .453.372.82.83.82h3.218c.459 0 .83-.367.83-.82v-1.54a.826.826 0 0 0-.83-.821zm9.882 3.962c-.404 0-.732-.35-.732-.78s.328-.78.732-.78.732.349.732.78c0 .43-.328.78-.732.78",
        clipRule: "evenodd"
      }
    )
  }
), C0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M10 .247c-5.525 0-10 4.478-10 10a10 10 0 0 0 6.838 9.488c.5.094.683-.215.683-.48 0-.238-.008-.867-.013-1.7-2.781.602-3.368-1.343-3.368-1.343-.455-1.154-1.112-1.462-1.112-1.462-.906-.62.07-.607.07-.607 1.004.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.913.831.09-.647.347-1.087.633-1.337-2.22-.25-4.555-1.11-4.555-4.942 0-1.092.388-1.983 1.03-2.683-.113-.253-.45-1.27.087-2.647 0 0 .837-.268 2.75 1.025.8-.223 1.65-.332 2.5-.338.85.006 1.7.115 2.5.338 1.9-1.293 2.737-1.025 2.737-1.025.538 1.378.2 2.394.1 2.647.638.7 1.025 1.591 1.025 2.683 0 3.842-2.337 4.688-4.562 4.933.35.3.675.914.675 1.85 0 1.339-.013 2.414-.013 2.739 0 .262.175.575.688.475A9.97 9.97 0 0 0 20 10.247c0-5.522-4.477-10-10-10"
      }
    )
  }
), O0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.5 10.575v1.742a9.7 9.7 0 0 0-2.367.383 8.6 8.6 0 0 1-.355-2.125zm-2.005 3.061a8.7 8.7 0 0 1 2.005-.318v2.672c-.697-.457-1.462-1.21-2.005-2.354m-1.718-3.061c.04.93.19 1.75.416 2.472a7.2 7.2 0 0 0-1.45.852 6.47 6.47 0 0 1-1.224-3.324zm.775 3.407c-.44.199-.825.43-1.158.679a6.5 6.5 0 0 0 2.934 1.697 6.9 6.9 0 0 1-1.776-2.376m5.953-.346a8.7 8.7 0 0 0-2.005-.318v2.672c.697-.457 1.462-1.21 2.005-2.354m-2.005-1.32c.884.038 1.67.176 2.367.384.19-.617.317-1.323.355-2.125H10.5zm1.172 4.041a6.9 6.9 0 0 0 1.776-2.375c.44.199.825.43 1.158.679a6.5 6.5 0 0 1-2.934 1.696m2.135-3.31a7.2 7.2 0 0 1 1.45.852 6.47 6.47 0 0 0 1.224-3.324h-2.258c-.04.93-.19 1.75-.416 2.472m-.585-3.472H10.5V7.833a9.7 9.7 0 0 0 2.367-.384c.19.618.317 1.323.355 2.126m-.717-3.062a8.7 8.7 0 0 1-2.005.319V4.159c.697.457 1.462 1.21 2.005 2.354m.943-.345a6.9 6.9 0 0 0-1.776-2.376c1.128.3 2.135.894 2.934 1.697a6.2 6.2 0 0 1-1.158.679m.359.935a7.2 7.2 0 0 0 1.45-.852 6.47 6.47 0 0 1 1.224 3.324h-2.258c-.04-.93-.19-1.75-.416-2.472M9.5 6.832V4.159c-.697.457-1.462 1.21-2.005 2.354.588.17 1.254.284 2.005.319m0 1.001a9.7 9.7 0 0 1-2.367-.384 8.6 8.6 0 0 0-.355 2.126H9.5zm-3.307-.73a9.6 9.6 0 0 0-.416 2.472H3.52A6.47 6.47 0 0 1 4.743 6.25c.417.317.899.608 1.45.852m.36-.935c-.442-.2-.826-.43-1.16-.68a6.5 6.5 0 0 1 2.935-1.696 6.9 6.9 0 0 0-1.776 2.376M10 18.075a8 8 0 1 0 0-16 8 8 0 0 0 0 16",
        clipRule: "evenodd"
      }
    )
  }
), M0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.603 7.94c-.67-.644-1.517-.975-2.466-.975-1.678 0-3.1 1.143-3.608 2.687-.13.39-.204.807-.204 1.24 0 .434.07.851.204 1.241.509 1.544 1.93 2.687 3.608 2.687.868 0 1.603-.239 2.182-.629a3.02 3.02 0 0 0 1.287-1.939h-3.47V9.81h6.06c.063.396.101.802.101 1.23 0 1.977-.697 3.645-1.909 4.777-1.061.992-2.514 1.577-4.251 1.577-2.515 0-4.686-1.463-5.742-3.586a6.48 6.48 0 0 1 0-5.829c1.056-2.123 3.227-3.585 5.742-3.585 1.737 0 3.19.644 4.3 1.695z",
        clipRule: "evenodd"
      }
    )
  }
), $0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#fff",
        d: "M3 4.6A1.6 1.6 0 0 1 4.6 3H7a1.6 1.6 0 0 1 1.6 1.6V7A1.6 1.6 0 0 1 7 8.6H4.6A1.6 1.6 0 0 1 3 7zM3 13a1.6 1.6 0 0 1 1.6-1.6H7A1.6 1.6 0 0 1 8.6 13v2.4A1.6 1.6 0 0 1 7 17H4.6A1.6 1.6 0 0 1 3 15.4zM11.4 4.6A1.6 1.6 0 0 1 13 3h2.4A1.6 1.6 0 0 1 17 4.6V7a1.6 1.6 0 0 1-1.6 1.6H13A1.6 1.6 0 0 1 11.4 7zM11.4 13a1.6 1.6 0 0 1 1.6-1.6h2.4A1.6 1.6 0 0 1 17 13v2.4a1.6 1.6 0 0 1-1.6 1.6H13a1.6 1.6 0 0 1-1.6-1.6z"
      }
    )
  }
), N0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.918 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m1.5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-9 1.469v.133h1.48v-.133q.005-.383.098-.645a1.3 1.3 0 0 1 .293-.46q.2-.2.508-.384.367-.218.637-.488.27-.273.418-.625.152-.356.152-.812 0-.684-.34-1.168a2.13 2.13 0 0 0-.937-.739q-.598-.257-1.375-.257-.706 0-1.293.254-.585.25-.941.761-.356.508-.375 1.29h1.593q.012-.321.157-.536a.9.9 0 0 1 .37-.328 1.06 1.06 0 0 1 .481-.113q.262 0 .477.11a.86.86 0 0 1 .347.312.86.86 0 0 1 .13.472q0 .255-.114.461-.113.204-.305.371a4 4 0 0 1-.433.325 2.7 2.7 0 0 0-.555.453q-.23.25-.352.656-.117.406-.12 1.09m.106 2.36a.92.92 0 0 0 .668.273q.25 0 .46-.125.212-.13.34-.34a.897.897 0 0 0-.149-1.129.9.9 0 0 0-.651-.274.92.92 0 0 0-.668.274.88.88 0 0 0-.27.656.9.9 0 0 0 .27.664",
        clipRule: "evenodd"
      }
    )
  }
), L0 = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.425 5.189q-.7-.091-1.425-.092c-3.564 0-6.716 1.703-8.445 4.296l-.277.416.277.416c1.141 1.712 2.902 3.035 4.991 3.737l.744-1.336c-1.727-.522-3.19-1.527-4.187-2.817C4.59 7.887 7.11 6.597 10 6.597q.318 0 .63.02z"
        }
      ),
      /* @__PURE__ */ d.jsx("path", { fill: "currentColor", d: "M10.179 7.43a2.385 2.385 0 0 0-2.105 3.786z" }),
      /* @__PURE__ */ d.jsx(
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
), j0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M11.506 14.123v-3.574a.44.44 0 0 0-.463-.463H8.811a.44.44 0 0 0-.469.463v3.574zm-6.996.164V10.14l5.039-4.23q.381-.318.756 0l5.033 4.23v4.148q0 .675-.416 1.06-.411.393-1.113.393H6.045q-.71 0-1.125-.392-.41-.387-.41-1.06M2.494 8.955q0-.346.305-.603l6.105-5.127q.47-.393 1.026-.393.562 0 1.025.393l6.1 5.12q.299.253.299.622a.66.66 0 0 1-.217.521.78.78 0 0 1-.545.194.75.75 0 0 1-.317-.07 1.5 1.5 0 0 1-.287-.188l-5.73-4.81a.5.5 0 0 0-.328-.135.5.5 0 0 0-.323.134l-5.742 4.81a1.5 1.5 0 0 1-.287.188.75.75 0 0 1-.316.07q-.352 0-.563-.204a.72.72 0 0 1-.205-.522M13.41 5.773V4.391q0-.205.123-.328a.46.46 0 0 1 .334-.124h1.078q.205 0 .328.123a.44.44 0 0 1 .123.329v3.04z"
      }
    )
  }
), k0 = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx("path", { stroke: "#000", d: "M2.5 2.5h3.571v3.571H2.5z" }),
      /* @__PURE__ */ d.jsx("path", { fill: "currentColor", stroke: "#000", d: "M8.214 2.5h3.571v3.571H8.214z" }),
      /* @__PURE__ */ d.jsx(
        "path",
        {
          stroke: "#000",
          d: "M13.929 2.5H17.5v3.571h-3.571zM2.5 8.214h3.571v3.571H2.5zM8.214 8.214h3.571v3.571H8.214z"
        }
      ),
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "currentColor",
          stroke: "#000",
          d: "M13.929 8.214H17.5v3.571h-3.571zM2.5 13.929h3.571V17.5H2.5z"
        }
      ),
      /* @__PURE__ */ d.jsx(
        "path",
        {
          stroke: "#000",
          d: "M8.214 13.929h3.571V17.5H8.214zM13.929 13.929H17.5V17.5h-3.571z"
        }
      )
    ]
  }
), I0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M9.214 1.588q.923 0 1.73.349a4.4 4.4 0 0 1 1.428.957q.616.608.957 1.421.349.807.349 1.73 0 1.388-.827 2.516-.82 1.12-2.359 1.77l1.695 1.702q.144.15.144.335a.43.43 0 0 1-.137.328l-1.743 1.737 1.251 1.237a.46.46 0 0 1 .137.328.44.44 0 0 1-.137.335l-2.16 2.16a.4.4 0 0 1-.321.123.45.45 0 0 1-.294-.123l-1.183-1.155a.8.8 0 0 1-.164-.24.8.8 0 0 1-.048-.273v-6.63a4.5 4.5 0 0 1-1.483-.971 4.47 4.47 0 0 1-1.306-3.179 4.4 4.4 0 0 1 1.299-3.158q.615-.616 1.422-.957a4.5 4.5 0 0 1 1.75-.342m0 4.15q.491 0 .848-.35.355-.354.355-.854 0-.492-.355-.847a1.16 1.16 0 0 0-.848-.356 1.15 1.15 0 0 0-.855.356 1.15 1.15 0 0 0-.348.847q0 .5.348.855.356.348.855.348"
      }
    )
  }
), D0 = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(
        "path",
        {
          stroke: "#000",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M10.906 8.966c1.459 1.316 1.459 3.45 0 4.765l-2.53 2.282c-1.459 1.316-3.824 1.316-5.282 0-1.459-1.315-1.459-3.449 0-4.764l1.265-1.142"
        }
      ),
      /* @__PURE__ */ d.jsx(
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
), V0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#fff",
        d: "M2 6a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2M2 14a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2"
      }
    )
  }
), _0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m17 7.862-1.78-4.45H4.78L3 7.862v.08c0 .34.099.841.407 1.27.113.155.25.298.417.419v6.957h12.353V9.631a1.9 1.9 0 0 0 .416-.42A2.25 2.25 0 0 0 17 7.941zm-1.647 2.105a2.5 2.5 0 0 1-.412.033c-.789 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782a2.5 2.5 0 0 1-.412-.033v3.432h10.706zM13.706 7.94c0 .209.066.53.252.789.17.237.459.446.983.446.525 0 .813-.209.984-.446.165-.23.235-.51.249-.716l-.03-.073zm.956-3.706 1.153 2.883h-2.19l-.641-2.883zm-1.881 2.883-.64-2.883h-1.73v2.883zm-5.562 0 .64-2.883h1.73v2.883zm-.203-2.883-.64 2.883H4.185l1.153-2.883zm-3.19 3.78.03-.074h2.438c0 .209-.066.53-.252.789-.17.237-.459.446-.983.446-.525 0-.813-.209-.984-.446a1.43 1.43 0 0 1-.249-.716m5.51.715a1.43 1.43 0 0 0 .252-.789h-2.47c0 .209.066.53.251.789.171.237.46.446.984.446.525 0 .813-.209.983-.446m3.294 0c.186-.258.252-.58.252-.789h-2.47c0 .209.066.53.252.789.17.237.458.446.983.446s.813-.209.983-.446",
        clipRule: "evenodd"
      }
    )
  }
), B0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.868 6.582h11.1v1.5h-11.1zm0 3.377h11.1v1.5h-11.1zm11.1 3.377h-11.1v1.5h11.1z",
        clipRule: "evenodd"
      }
    )
  }
), F0 = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M3.362 5.144 7.874 2.54l4.089 7.083-4.512 2.605z"
        }
      ),
      /* @__PURE__ */ d.jsx("path", { stroke: "#000", strokeWidth: 1.5, d: "m9.92 6.08 7.332-4.233" }),
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M3.977 15.387 2 13.41h13.615l-.723 1.977h-1.346c-.33 0-.989.198-.989.989s.66.988.989.988h.597v1.483h-8.83v-1.483H6.41c.79 0 .988-.659.988-.988 0-.33-.198-.989-.988-.989z"
        }
      )
    ]
  }
), U0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.918 14.994v.752q-.519.36-1.08.618A7.003 7.003 0 0 1 6.968 5.05a7 7 0 0 1 8.95-.796v.752a4.979 4.979 0 0 0-3.293 1.459 5 5 0 0 0 3.293 8.53m-4.353-.398q.495.493 1.059.859a5.5 5.5 0 1 1 0-10.91q-.564.366-1.06.859a6.5 6.5 0 0 0 0 9.192",
        clipRule: "evenodd"
      }
    )
  }
), H0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13.283 6.175a4.643 4.643 0 1 0-6.566 6.567l-.708.707a5.644 5.644 0 1 1 7.982 0l-.708-.707a4.644 4.644 0 0 0 0-6.567m-5.097 1.47a2.565 2.565 0 0 1 3.628 3.627l.707.707a3.565 3.565 0 1 0-5.042 0l.707-.707a2.565 2.565 0 0 1 0-3.627M10 10.959a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 .667-1.5 6h3z",
        clipRule: "evenodd"
      }
    )
  }
), z0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        stroke: "#000",
        strokeWidth: 1.5,
        d: "M16 6.5 10 3 4 6.5m12 0v7L10 17m6-10.5L10 10m0 7-6-3.5v-7M10 17v-7M4 6.5l6 3.5"
      }
    )
  }
), W0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.899 5.261a1 1 0 0 1 1 1v.729H2.102v2.055h15.797v4.694a1 1 0 0 1-1 1H3.102a1 1 0 0 1-1-1V6.261a1 1 0 0 1 1-1zm-7.13 7.284h7v1h-7z",
        clipRule: "evenodd"
      }
    )
  }
), q0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#fff",
        d: "M11.882 15.626a2.896 2.896 0 0 0 .241-3.821l3.896-5.009.957.957L18 6.73 13.27 2l-1.024 1.024.958.957-5.009 3.896a2.896 2.896 0 0 0-3.82.242zM3.536 15.44C2.716 16.26 2.17 17.489 2 18c.512-.17 1.74-.717 2.56-1.536l3.129-3.13-1.024-1.023z"
      }
    )
  }
), K0 = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx("circle", { cx: 10, cy: 7.361, r: 3.361, fill: "currentColor" }),
      /* @__PURE__ */ d.jsx(
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
), G0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.418 3.6h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5V2.1h4m0 12h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5v-5.5h4m8-9h2.5v2.5h-2.5zm4-1.5h-5.5v5.5h5.5V2.1m-1.5 12h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5v-5.5h4M9.668 2.1v7.25h-7.25v1.5h8.75V2.1zm1.5 10.5v5.5h-1.5v-5.5zm1.75-1.75h5.5v-1.5h-5.5z",
        clipRule: "evenodd"
      }
    )
  }
), Y0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.668 11.418v5.75h13.5v-5.75h-1.5v4.25h-10.5v-4.25zm11.28-2.47-1.06-1.06-2.72 2.72v-8.19h-1.5v8.19l-2.72-2.72-1.06 1.06 4.53 4.53z",
        clipRule: "evenodd"
      }
    )
  }
), X0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2 10.046 3.975 3l1.864 2.016a7.458 7.458 0 1 1-2.586 7.787l1.762-.354.03.099a5.666 5.666 0 1 0 2.017-6.211l2.117 2.289z",
        clipRule: "evenodd"
      }
    )
  }
), Z0 = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.365 2.635a2.17 2.17 0 1 1-3.068 3.068 2.17 2.17 0 0 1 3.068-3.068M6.788 14.008a2.17 2.17 0 1 1-3.067 3.067 2.17 2.17 0 0 1 3.067-3.067"
        }
      ),
      /* @__PURE__ */ d.jsx(
        "path",
        {
          stroke: "#000",
          strokeWidth: 1.5,
          d: "M10.736 4.015h-2.08c-2.763 0-3.498 1.274-3.498 3.498v4.44"
        }
      )
    ]
  }
), J0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2.418 7h1.5V3.5h3.5V2h-5zm11-5v1.5h3.5V7h1.5V2zm-9.5 11h-1.5v5h5v-1.5h-3.5zm9.5 5v-1.5h3.5V13h1.5v5zm-3.75-4v-3.25h-3.25v-1.5h3.25V6h1.5v3.25h3.25v1.5h-3.25V14z",
        clipRule: "evenodd"
      }
    )
  }
), Q0 = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13.918 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-.677 4.383a5.5 5.5 0 1 1 1.06-1.06l2.648 2.647-1.061 1.06z",
        clipRule: "evenodd"
      }
    )
  }
), em = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.529 15.925 9.419 11 4.493 8.89 2.418 8l2.142-.714 11.08-3.693L17.418 3l-.593 1.779-3.693 11.08L12.418 18zm-1.71-6.386L6.635 8.175l6.82-2.273zm1.06 1.061 1.364 3.183 2.273-6.82z",
        clipRule: "evenodd"
      }
    )
  }
), tm = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2.418 6.374v7.252c0 1.48 1.218 2.68 2.72 2.68h10.56c1.503 0 2.72-1.2 2.72-2.68V6.374c0-1.48-1.217-2.68-2.72-2.68H5.138c-1.502 0-2.72 1.2-2.72 2.68m4 .473a.794.794 0 0 0-.8-.789c-.442 0-.8.353-.8.789 0 .435.359.788.8.788s.8-.353.8-.788m-.8 5.513c.442 0 .8.353.8.788a.794.794 0 0 1-.8.789.794.794 0 0 1-.8-.789c0-.435.359-.788.8-.788m10.4-2.36a.794.794 0 0 0-.8-.788c-.441 0-.8.353-.8.788s.359.788.8.788.8-.353.8-.788m-7.2-3.942h6.4c.442 0 .8.353.8.789a.794.794 0 0 1-.8.788h-6.4a.794.794 0 0 1-.8-.788c0-.436.359-.789.8-.789m6.4 6.302h-6.4c-.441 0-.8.353-.8.788s.359.789.8.789h6.4c.442 0 .8-.353.8-.789a.794.794 0 0 0-.8-.788m-9.6-3.148h6.4c.442 0 .8.353.8.788a.794.794 0 0 1-.8.788h-6.4a.794.794 0 0 1-.8-.788c0-.435.359-.788.8-.788",
        clipRule: "evenodd"
      }
    )
  }
), nm = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.775 5.204a5.5 5.5 0 0 0-1.341-.537L11 2.5H9l-.443 2.214c-.444.128-.866.31-1.257.54L5.404 3.99 3.99 5.404l1.283 1.925q-.32.571-.497 1.216L2.5 9v2l2.276.455q.178.645.497 1.216L3.99 14.596l1.414 1.414L7.3 14.746c.391.23.813.412 1.257.54L9 17.5h2l.434-2.167c.474-.12.925-.302 1.341-.537l1.821 1.214 1.414-1.414-1.195-1.793c.253-.427.45-.891.581-1.382L17.5 11V9l-2.104-.42a5.5 5.5 0 0 0-.581-1.383l1.195-1.793-1.414-1.414zm-.59 2.692a2.976 2.976 0 1 0-4.208 4.208 2.976 2.976 0 0 0 4.209-4.208",
        clipRule: "evenodd"
      }
    )
  }
), rm = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M4 6.234a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V10.5L14 9v5.734a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.769l-1.516 1.5z"
        }
      ),
      /* @__PURE__ */ d.jsx("path", { stroke: "#000", strokeWidth: 1.25, d: "M11 3h5v5" }),
      /* @__PURE__ */ d.jsx("path", { stroke: "#000", strokeWidth: 1.5, d: "m16 3-8 8" })
    ]
  }
), om = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.668 3.959h-10.5v6.75c0 1.653.47 3.021 1.358 4.141.877 1.106 2.123 1.92 3.598 2.549l.294.125.295-.125c1.474-.63 2.72-1.443 3.598-2.549.888-1.12 1.357-2.488 1.357-4.141zm-9 6.75v-5.25h3.75v10.43c-1.191-.544-2.097-1.19-2.717-1.971-.658-.83-1.033-1.862-1.033-3.209",
        clipRule: "evenodd"
      }
    )
  }
), sm = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.418 3.25h-5.75v13.5h5.75v-1.5h-4.25V4.75h4.25zm4.53 11.28-1.06-1.06 2.72-2.72h-8.19v-1.5h8.19l-2.72-2.72 1.06-1.06L18.48 10z",
        clipRule: "evenodd"
      }
    )
  }
), im = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.539 10.75H4.298v-1.5h12.24z",
        clipRule: "evenodd"
      }
    )
  }
), am = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M4.633 10.75a6 6 0 0 1 .008-1.5H2.202v1.5zM5.814 6.456A5.9 5.9 0 0 1 6.88 5.401L5.139 3.66l-1.06 1.06zM4.078 15.28l1.711-1.711c.306.398.662.755 1.058 1.063L5.14 16.34zM9.668 15.802v2.414h1.5V15.8a5.9 5.9 0 0 1-1.5.003M13.98 14.623l1.718 1.717 1.06-1.06-1.721-1.723c-.305.4-.66.758-1.056 1.066M16.184 10.75h2.45v-1.5h-2.457a6 6 0 0 1 .007 1.5M15.012 6.467l1.747-1.747-1.061-1.06-1.75 1.75c.399.305.756.66 1.064 1.057M11.168 4.258V1.784h-1.5v2.472a5.9 5.9 0 0 1 1.5.002"
        }
      ),
      /* @__PURE__ */ d.jsx(
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
), lm = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.668 4.75h-5.25v-1.5h6.75V12h2.25l-1.125 1.5-.937 1.25-.938 1.25-.937-1.25-.938-1.25-1.125-1.5h2.25zM5.418 4l.938 1.25.937 1.25L8.418 8h-2.25v7.25h5.25v1.5h-6.75V8h-2.25l1.125-1.5.938-1.25z",
        clipRule: "evenodd"
      }
    )
  }
), cm = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12.28 2.856-6.71 8.887h4.134l-1.424 6.2 6.887-8.71h-4.322z",
        clipRule: "evenodd"
      }
    )
  }
), um = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M7.271 3.521c-.376.377-.521.902-.521 1.479H3v1h14V5h-3.75c0-.577-.145-1.102-.521-1.479C12.352 3.145 11.827 3 11.25 3h-2.5c-.577 0-1.102.145-1.479.521m.708.708c-.124.123-.229.348-.229.771h4.5c0-.423-.105-.648-.229-.771-.123-.124-.348-.229-.771-.229h-2.5c-.423 0-.648.105-.771.229M5.5 18l-1-11h11l-1 11zm7.58-10.006a.5.5 0 0 1 .47.53l-.489 8.022a.5.5 0 0 1-.998-.061l.488-8.022a.5.5 0 0 1 .53-.47m-6.629.53a.5.5 0 0 1 .998-.061l.488 8.022a.5.5 0 0 1-.998.06zM10 7.993a.5.5 0 0 1 .5.5v8.021a.5.5 0 0 1-1 0v-8.02a.5.5 0 0 1 .5-.5",
        clipRule: "evenodd"
      }
    )
  }
), dm = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m4.662 2.789-.985 2.515v10.281h3.5v1.86h1.97l1.859-1.86h2.844l3.827-3.828V2.79zM16.365 11.1l-2.188 2.187h-3.5l-1.86 1.86v-1.86H5.866V4.101h10.5zm-2.188-4.484v3.828h-1.312V6.617zm-3.5 0v3.828H9.365V6.617z",
        clipRule: "evenodd"
      }
    )
  }
), fm = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M4 11.445v5.11h12v-5.11h-1.333v3.777H5.333v-3.777zM5.973 7.47l.943.943 2.418-2.417v7.28h1.333v-7.28l2.417 2.417.943-.943L10 3.444z",
        clipRule: "evenodd"
      }
    )
  }
), hm = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M3.103 10.154C4.59 12.077 7.11 13.366 10 13.366s5.41-1.29 6.897-3.212C15.41 8.232 12.89 6.942 10 6.942s-5.41 1.29-6.897 3.212m-1.548-.416C3.285 7.145 6.436 5.442 10 5.442s6.716 1.703 8.445 4.296l.277.416-.277.416c-1.73 2.594-4.881 4.296-8.445 4.296s-6.716-1.702-8.445-4.296l-.277-.416z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M12.386 10.154a2.386 2.386 0 1 1-4.772 0 2.386 2.386 0 0 1 4.772 0"
        }
      )
    ]
  }
), pm = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5 6.05c0 .443.39.802.87.802H17V16H5.495C4.117 16 3 14.97 3 13.698V6.302C3 5.031 4.117 4 5.495 4H14.5v1.247H5.87c-.48 0-.87.36-.87.802m7 5.45a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0",
        clipRule: "evenodd"
      }
    )
  }
), mm = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 480 332",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "#fff",
        d: "M126.613 93.984c62.622-61.312 164.152-61.312 226.775 0l7.536 7.379a7.735 7.735 0 0 1 0 11.102l-25.781 25.242a4.07 4.07 0 0 1-5.67 0l-10.371-10.154c-43.687-42.773-114.517-42.773-158.204 0l-11.107 10.874a4.07 4.07 0 0 1-5.669 0l-25.781-25.242a7.733 7.733 0 0 1 0-11.102zm280.093 52.204 22.946 22.465a7.735 7.735 0 0 1 0 11.102L326.189 281.056c-3.131 3.065-8.208 3.065-11.339 0l-73.432-71.896a2.034 2.034 0 0 0-2.835 0l-73.43 71.896c-3.131 3.065-8.208 3.065-11.339 0L50.348 179.754a7.735 7.735 0 0 1 0-11.102l22.946-22.466c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897a2.033 2.033 0 0 0 2.834 0l73.429-71.897c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897a2.034 2.034 0 0 0 2.835 0l73.431-71.895c3.132-3.066 8.208-3.066 11.339 0"
      }
    )
  }
), vm = (e) => /* @__PURE__ */ d.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ d.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M18 16.427 10 2.57 2 16.427zm-7.322-4.333v-5.77H9.216v5.77zm-.731 3.087a1.089 1.089 0 1 0 0-2.178 1.089 1.089 0 0 0 0 2.178",
        clipRule: "evenodd"
      }
    )
  }
), gm = (e) => /* @__PURE__ */ d.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 276 28",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ d.jsxs("g", { clipPath: "url(#sequence-boilerplate-logo_svg__a)", children: [
        /* @__PURE__ */ d.jsx(
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
            children: /* @__PURE__ */ d.jsx("path", { fill: "#fff", d: "M35.03 0H0v28h35.03z" })
          }
        ),
        /* @__PURE__ */ d.jsxs("g", { mask: "url(#sequence-boilerplate-logo_svg__b)", children: [
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "#111",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__c)",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__d)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__e)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__f)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__g)",
              d: "M8.758 20.989a1.75 1.75 0 1 0-3.502.001 1.75 1.75 0 0 0 3.502-.001"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__h)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__i)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__j)",
              d: "M28.025 5.25H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__k)",
              d: "M28.025 19.239H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__l)",
              d: "M21.018 12.25H7.006a1.75 1.75 0 1 0 0 3.5h14.012a1.75 1.75 0 1 0 0-3.5"
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            fill: "#fff",
            d: "M49.65 23.282c3.413 0 5.82-1.94 5.82-4.911.023-2.563-1.523-4.048-4.101-4.982l-1.768-.647c-1.792-.647-2.652-1.197-2.652-2.443s1.277-1.964 2.75-1.964c1.375 0 2.431.551 3.315 1.581l1.989-1.892C53.726 6.514 51.885 5.7 49.724 5.7c-3.241 0-5.67 1.82-5.67 4.791 0 2.324 1.35 3.808 4.124 4.791l1.915.67c1.67.6 2.48 1.366 2.48 2.588 0 1.268-1.178 2.108-2.823 2.108-1.695 0-3.144-.815-4.051-2.18l-2.26 1.748c1.03 1.843 3.411 3.066 6.211 3.066m13.638-.049c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.663 1.054-1.768 1.82-3.51 1.82-2.063 0-3.66-1.268-3.782-3.257h9.65c.023-.383.023-.599.023-.862 0-3.856-2.675-5.94-5.917-5.94-3.732 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.634-7.569c.392-1.772 1.94-2.658 3.535-2.658 1.571 0 2.996.934 3.29 2.658zM83.236 28V11.017h-2.701v1.606c-.687-.959-2.16-1.845-3.929-1.845-3.364 0-5.917 2.803-5.917 6.228s2.553 6.227 5.917 6.227c1.768 0 3.242-.885 3.929-1.844V28zm-6.138-7.163c-2.161 0-3.659-1.676-3.659-3.832s1.498-3.833 3.659-3.833 3.658 1.677 3.658 3.833-1.498 3.832-3.658 3.832m13.127 2.396c1.57 0 2.872-.646 3.585-1.868v1.628h2.7V11.017h-2.7v5.893c0 2.587-1.228 3.928-2.996 3.928-1.57 0-2.455-1.174-2.455-3.09v-6.73h-2.7v7.162c0 3.065 1.742 5.054 4.566 5.054m14.733 0c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.664 1.054-1.769 1.82-3.511 1.82-2.062 0-3.658-1.268-3.781-3.257h9.649c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.917-5.94-3.732 0-6.41 2.706-6.41 6.227 0 3.664 2.677 6.227 6.41 6.227m-3.635-7.569c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.995.934 3.29 2.658zm11.591 7.33h2.702V17.1c0-2.587 1.374-3.929 3.167-3.929 1.571 0 2.553 1.126 2.553 3.042v6.778h2.701v-7.21c0-3.041-1.842-5.006-4.69-5.006-1.596 0-2.971.647-3.731 1.869v-1.628h-2.702zm19.439.24c2.554 0 4.666-1.294 5.721-3.306l-2.357-1.245c-.59 1.222-1.792 2.107-3.364 2.107-2.185 0-3.732-1.653-3.732-3.784 0-2.132 1.547-3.785 3.732-3.785 1.571 0 2.774.886 3.364 2.108l2.357-1.245c-1.055-2.012-3.167-3.306-5.721-3.306-3.681 0-6.481 2.683-6.481 6.228s2.8 6.227 6.481 6.227m13.003 0c2.579 0 4.493-1.055 5.598-2.779l-2.062-1.437c-.663 1.054-1.768 1.82-3.511 1.82-2.063 0-3.658-1.268-3.782-3.257h9.651c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.918-5.94-3.733 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.635-7.57c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.996.934 3.29 2.658z"
          }
        )
      ] }),
      /* @__PURE__ */ d.jsx(
        "path",
        {
          fill: "#fff",
          fillOpacity: 0.6,
          d: "M159.371 22.5V5.385h5.905q2.242 0 3.664 1.374 1.447 1.374 1.447 3.351 0 2.121-1.591 3.302 2.748 1.134 2.748 4.074 0 2.146-1.567 3.592-1.543 1.422-3.953 1.422zm2.82-2.58h3.76q1.35 0 2.097-.674.748-.675.748-1.784 0-1.085-.748-1.76-.747-.699-2.097-.699h-3.76zm0-7.327h2.941q1.133 0 1.808-.651.675-.65.675-1.663 0-.965-.675-1.64t-1.808-.674h-2.941zm21.281 8.34q-1.808 1.808-4.483 1.808-2.676 0-4.508-1.808-1.808-1.832-1.808-4.46 0-2.626 1.808-4.435 1.832-1.831 4.508-1.832 2.675 0 4.483 1.832 1.833 1.809 1.832 4.436t-1.832 4.46m-4.483-.65q1.566 0 2.579-1.085 1.036-1.11 1.036-2.724 0-1.616-1.036-2.7-1.013-1.11-2.579-1.109-1.592 0-2.628 1.109-1.012 1.085-1.012 2.7 0 1.614 1.012 2.724 1.036 1.084 2.628 1.084m9.585-12.463q-.723 0-1.254-.506a1.74 1.74 0 0 1-.53-1.278q0-.723.53-1.23.531-.53 1.254-.53.747 0 1.253.53.507.507.506 1.23 0 .747-.506 1.278a1.7 1.7 0 0 1-1.253.506m-1.326 14.68V10.448h2.651V22.5zm5.491 0V4.421h2.652V22.5zm10.939.241q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.662 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976M211.49 22.5V10.448h2.652v2.145a3.2 3.2 0 0 1 1.229-1.64q.917-.626 1.953-.626.627 0 1.036.096v2.724a3.8 3.8 0 0 0-1.325-.217q-1.206 0-2.049.989-.844.963-.844 2.7V22.5zm11.086 5.038h-2.652v-17.09h2.652v1.614q.554-.771 1.591-1.301a4.87 4.87 0 0 1 2.29-.555q2.459 0 4.122 1.832 1.687 1.832 1.687 4.436t-1.687 4.435q-1.663 1.832-4.122 1.832-1.23 0-2.29-.53-1.037-.555-1.591-1.326zm3.399-7.207q1.566 0 2.579-1.11 1.012-1.107 1.012-2.747t-1.012-2.748q-1.013-1.11-2.579-1.11-1.592 0-2.604 1.11-1.012 1.108-1.012 2.748t1.012 2.748q1.013 1.108 2.604 1.108m8.268 2.169V4.421h2.652V22.5zm10.433.241q-2.459 0-4.146-1.832-1.663-1.832-1.663-4.435 0-2.604 1.663-4.436 1.688-1.831 4.146-1.832 1.23 0 2.266.555 1.036.53 1.591 1.302v-1.616h2.652V22.5h-2.652v-1.615q-.555.771-1.591 1.326a4.9 4.9 0 0 1-2.266.53m-2.097-3.52q1.013 1.11 2.579 1.11t2.58-1.11q1.012-1.107 1.012-2.747t-1.012-2.748q-1.012-1.11-2.58-1.11-1.566 0-2.579 1.11-1.012 1.108-1.012 2.748t1.012 2.748m16.705 3.4q-1.831 0-2.989-1.013-1.133-1.035-1.133-2.989v-5.81h-2.506v-2.361h2.506V7.097h2.652v3.35h3.447v2.363h-3.447v5.375q0 1.11.482 1.591.483.458 1.543.458.867 0 1.422-.24v2.361q-.867.265-1.977.265m9.051.12q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.663 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976"
        }
      ),
      /* @__PURE__ */ d.jsxs("defs", { children: [
        /* @__PURE__ */ d.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__c",
            x1: 17.515,
            x2: 17.515,
            y1: 0,
            y2: 28.029,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ d.jsx("stop", { stopColor: "#1D273D" }),
              /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#0D0F13" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__d",
            x1: 5.794,
            x2: 8.172,
            y1: 8.726,
            y2: 5.545,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ d.jsx("stop", { stopColor: "#4462FE" }),
              /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#7D69FA" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__e",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ d.jsx("stop", { stopColor: "#3757FD" }),
              /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__f",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ d.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__g",
            x1: 5.75,
            x2: 8.085,
            y1: 22.168,
            y2: 19.691,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ d.jsx("stop", { stopColor: "#BC3EE6" }),
              /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#D972F1" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__h",
            x1: 26.981,
            x2: 29.14,
            y1: 15.16,
            y2: 12.861,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ d.jsx("stop", { stopColor: "#29BDFF" }),
              /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#96E7FB" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__i",
            x1: 26.554,
            x2: 29.596,
            y1: 15.726,
            y2: 15.58,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ d.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__j",
            x1: 13.667,
            x2: 28.081,
            y1: 8.726,
            y2: 5.265,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ d.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__k",
            x1: 13.8,
            x2: 27.638,
            y1: 22.741,
            y2: 19.191,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ d.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__l",
            x1: 7.608,
            x2: 20.826,
            y1: 15.777,
            y2: 12.228,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ d.jsx("stop", { stopColor: "#6634FF" }),
              /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#9C6DFF" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsx("clipPath", { id: "sequence-boilerplate-logo_svg__a", children: /* @__PURE__ */ d.jsx("path", { fill: "#fff", d: "M0 0h151.273v28H0z" }) })
      ] })
    ]
  }
), ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Add: Jp,
  AirDropper: Qp,
  Apple: e0,
  ArrowDown: t0,
  ArrowRight: n0,
  Bridge: r0,
  Checkmark: o0,
  ChevronDown: s0,
  ChevronLeft: i0,
  ChevronRight: a0,
  ChevronUp: l0,
  Close: c0,
  Contacts: u0,
  ContextMenu: d0,
  Contract: f0,
  Copy: h0,
  Currency: p0,
  DashedCircle: m0,
  Deploy: v0,
  Device: g0,
  Discord: y0,
  Docs: x0,
  Download: b0,
  Drag: w0,
  Edit: E0,
  Email: T0,
  Expand: S0,
  ExternalLink: A0,
  Facebook: P0,
  GasTank: R0,
  Github: C0,
  Globe: O0,
  Google: M0,
  Grid: $0,
  Help: N0,
  Hidden: L0,
  Home: j0,
  Indexer: k0,
  Key: I0,
  Link: D0,
  List: V0,
  Marketplaces: _0,
  Menu: B0,
  Minter: F0,
  Moon: U0,
  Network: H0,
  Node: z0,
  Payments: W0,
  Pin: q0,
  Profile: K0,
  QrCode: G0,
  Receive: Y0,
  Refresh: X0,
  Relayer: Z0,
  Scan: J0,
  Search: Q0,
  Send: em,
  Sequence: tm,
  SequenceBoilerplateLogo: gm,
  Settings: nm,
  Share: rm,
  Shield: om,
  Signout: sm,
  Subtract: im,
  Sun: am,
  Swap: lm,
  Transaction: cm,
  Trash: um,
  Twitch: dm,
  Upload: fm,
  Visible: hm,
  Wallet: pm,
  WalletConnect: mm,
  Warning: vm
}, Symbol.toStringTag, { value: "Module" })), Lo = ym;
function ke({
  name: e,
  alt: t = void 0,
  className: n = "",
  ...r
}) {
  const o = Lo == null ? void 0 : Lo[e];
  return /* @__PURE__ */ d.jsx(
    ro,
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
      children: /* @__PURE__ */ d.jsx(o, {})
    }
  );
}
function xm(e) {
  const { title: t, children: n, ...r } = ze("card-collapsable", e);
  return /* @__PURE__ */ d.jsxs("details", { ...r, children: [
    t ? /* @__PURE__ */ d.jsx(bm, { children: t }) : null,
    /* @__PURE__ */ d.jsx("div", { className: "px-4 pb-4 w-full text-start flex flex-col gap-4", children: n })
  ] });
}
function bm(e) {
  const { children: t, ...n } = e;
  return /* @__PURE__ */ d.jsxs(
    "summary",
    {
      className: "flex items-center justify-between text-14 font-bold p-4",
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ d.jsx(ke, { name: "ChevronDown", width: "20", "data-arrow": !0 })
      ]
    }
  );
}
function S4(e) {
  const { collapsable: t, ...n } = e;
  return t ? /* @__PURE__ */ d.jsx(xm, { ...n }) : /* @__PURE__ */ d.jsx(wm, { ...n });
}
function wm(e) {
  const { children: t, ...n } = ze(
    "card",
    e
  );
  return /* @__PURE__ */ d.jsx("div", { ...n, children: t });
}
function A4() {
  return /* @__PURE__ */ d.jsx("hr", { className: "w-full border-white/20" });
}
function iu(e) {
  const { children: t, ...n } = ze(
    "group-title",
    e
  );
  return /* @__PURE__ */ d.jsx("h2", { ...n, children: t });
}
function Em(e, t) {
  const {
    asChild: n = !1,
    title: r,
    children: o,
    ...s
  } = ze("group", e);
  return /* @__PURE__ */ d.jsxs(ro, { ref: t, fallbackAs: "div", asChild: n, ...s, children: [
    r ? /* @__PURE__ */ d.jsx(iu, { children: r }) : null,
    o
  ] });
}
const P4 = Object.assign(Vt(Em), {
  Title: iu
}), au = ge(null);
function ni() {
  const e = oe(au);
  if (!e)
    throw new Error("useField must be used within a Field");
  return e;
}
function Tm({
  children: e,
  value: t
}) {
  return /* @__PURE__ */ d.jsx(au.Provider, { value: t, children: e });
}
function lu(e) {
  const {
    children: t,
    asChild: n = !1,
    id: r,
    ...o
  } = ze("input", e), { name: s } = ni();
  return /* @__PURE__ */ d.jsx(
    ro,
    {
      asChild: n,
      fallbackAs: "input",
      name: s,
      id: r || s,
      ...o,
      children: t
    }
  );
}
function Sm(e) {
  const { children: t, ...n } = ze("segmented-input", e);
  function r(o) {
    var i, a;
    const s = (a = (i = o == null ? void 0 : o.target) == null ? void 0 : i.parentNode) == null ? void 0 : a.querySelector("input");
    s && s.focus();
  }
  return /* @__PURE__ */ d.jsxs("div", { ...n, children: [
    /* @__PURE__ */ d.jsx(
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
function Am(e) {
  const { children: t, ...n } = ze(
    "segmented-input-segment",
    e
  );
  return /* @__PURE__ */ d.jsx("div", { ...n, children: t });
}
const jo = Object.assign(Sm, {
  Segment: Am
});
function Pm(e, t) {
  const { children: n, ...r } = ze(
    "label",
    e
  ), { name: o } = ni();
  return /* @__PURE__ */ d.jsx("label", { ref: t, htmlFor: o, ...r, children: n });
}
const ri = Vt(Pm);
function Rm({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label, o = typeof t == "string" ? null : t.icon;
    return /* @__PURE__ */ d.jsx("option", { value: n, "data-icon": o, children: r }, n);
  });
}
function qa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function cu(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = b.createContext(i), l = n.length;
    n = [...n, i];
    function c(f) {
      const { scope: h, children: p, ...v } = f, m = (h == null ? void 0 : h[e][l]) || a, g = b.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ d.jsx(m.Provider, { value: g, children: p });
    }
    function u(f, h) {
      const p = (h == null ? void 0 : h[e][l]) || a, v = b.useContext(p);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return c.displayName = s + "Provider", [c, u];
  }
  const o = () => {
    const s = n.map((i) => b.createContext(i));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return b.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, Cm(o, ...t)];
}
function Cm(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: c }) => {
        const f = l(s)[`__scope${c}`];
        return { ...a, ...f };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Om(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function uu(...e) {
  return (t) => e.forEach((n) => Om(n, t));
}
function Ae(...e) {
  return b.useCallback(uu(...e), e);
}
var Xn = b.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = b.Children.toArray(n), s = o.find(Mm);
  if (s) {
    const i = s.props.children, a = o.map((l) => l === s ? b.Children.count(i) > 1 ? b.Children.only(null) : b.isValidElement(i) ? i.props.children : null : l);
    return /* @__PURE__ */ d.jsx(fs, { ...r, ref: t, children: b.isValidElement(i) ? b.cloneElement(i, void 0, a) : null });
  }
  return /* @__PURE__ */ d.jsx(fs, { ...r, ref: t, children: n });
});
Xn.displayName = "Slot";
var fs = b.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (b.isValidElement(n)) {
    const o = Nm(n);
    return b.cloneElement(n, {
      ...$m(r, n.props),
      // @ts-ignore
      ref: t ? uu(t, o) : o
    });
  }
  return b.Children.count(n) > 1 ? b.Children.only(null) : null;
});
fs.displayName = "SlotClone";
var du = ({ children: e }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: e });
function Mm(e) {
  return b.isValidElement(e) && e.type === du;
}
function $m(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      s(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Nm(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Lm(e) {
  const t = e + "CollectionProvider", [n, r] = cu(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (p) => {
    const { scope: v, children: m } = p, g = _.useRef(null), x = _.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: v, itemMap: x, collectionRef: g, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = _.forwardRef(
    (p, v) => {
      const { scope: m, children: g } = p, x = s(a, m), y = Ae(v, x.collectionRef);
      return /* @__PURE__ */ d.jsx(Xn, { ref: y, children: g });
    }
  );
  l.displayName = a;
  const c = e + "CollectionItemSlot", u = "data-radix-collection-item", f = _.forwardRef(
    (p, v) => {
      const { scope: m, children: g, ...x } = p, y = _.useRef(null), T = Ae(v, y), A = s(c, m);
      return _.useEffect(() => (A.itemMap.set(y, { ref: y, ...x }), () => void A.itemMap.delete(y))), /* @__PURE__ */ d.jsx(Xn, { [u]: "", ref: T, children: g });
    }
  );
  f.displayName = c;
  function h(p) {
    const v = s(e + "CollectionConsumer", p);
    return _.useCallback(() => {
      const g = v.collectionRef.current;
      if (!g) return [];
      const x = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (A, S) => x.indexOf(A.ref.current) - x.indexOf(S.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: i, Slot: l, ItemSlot: f },
    h,
    r
  ];
}
function fu(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = b.createContext(i), l = n.length;
    n = [...n, i];
    const c = (f) => {
      var x;
      const { scope: h, children: p, ...v } = f, m = ((x = h == null ? void 0 : h[e]) == null ? void 0 : x[l]) || a, g = b.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ d.jsx(m.Provider, { value: g, children: p });
    };
    c.displayName = s + "Provider";
    function u(f, h) {
      var m;
      const p = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || a, v = b.useContext(p);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [c, u];
  }
  const o = () => {
    const s = n.map((i) => b.createContext(i));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return b.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, jm(o, ...t)];
}
function jm(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: c }) => {
        const f = l(s)[`__scope${c}`];
        return { ...a, ...f };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var km = b.createContext(void 0);
function Im(e) {
  const t = b.useContext(km);
  return e || t || "ltr";
}
var Dm = [
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
], we = Dm.reduce((e, t) => {
  const n = b.forwardRef((r, o) => {
    const { asChild: s, ...i } = r, a = s ? Xn : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(a, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Vm(e, t) {
  e && no.flushSync(() => e.dispatchEvent(t));
}
function Et(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function _m(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Et(e);
  b.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Bm = "DismissableLayer", hs = "dismissableLayer.update", Fm = "dismissableLayer.pointerDownOutside", Um = "dismissableLayer.focusOutside", Ka, hu = b.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), oi = b.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, c = b.useContext(hu), [u, f] = b.useState(null), h = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = b.useState({}), v = Ae(t, (R) => f(R)), m = Array.from(c.layers), [g] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), x = m.indexOf(g), y = u ? m.indexOf(u) : -1, T = c.layersWithOutsidePointerEventsDisabled.size > 0, A = y >= x, S = Wm((R) => {
      const O = R.target, L = [...c.branches].some((N) => N.contains(O));
      !A || L || (o == null || o(R), i == null || i(R), R.defaultPrevented || a == null || a());
    }, h), P = qm((R) => {
      const O = R.target;
      [...c.branches].some((N) => N.contains(O)) || (s == null || s(R), i == null || i(R), R.defaultPrevented || a == null || a());
    }, h);
    return _m((R) => {
      y === c.layers.size - 1 && (r == null || r(R), !R.defaultPrevented && a && (R.preventDefault(), a()));
    }, h), b.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Ka = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Ga(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Ka);
        };
    }, [u, h, n, c]), b.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Ga());
    }, [u, c]), b.useEffect(() => {
      const R = () => p({});
      return document.addEventListener(hs, R), () => document.removeEventListener(hs, R);
    }, []), /* @__PURE__ */ d.jsx(
      we.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: T ? A ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ce(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: ce(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: ce(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
oi.displayName = Bm;
var Hm = "DismissableLayerBranch", zm = b.forwardRef((e, t) => {
  const n = b.useContext(hu), r = b.useRef(null), o = Ae(t, r);
  return b.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ d.jsx(we.div, { ...e, ref: o });
});
zm.displayName = Hm;
function Wm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Et(e), r = b.useRef(!1), o = b.useRef(() => {
  });
  return b.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          pu(
            Fm,
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
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function qm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Et(e), r = b.useRef(!1);
  return b.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && pu(Um, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ga() {
  const e = new CustomEvent(hs);
  document.dispatchEvent(e);
}
function pu(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Vm(o, s) : o.dispatchEvent(s);
}
var ko = 0;
function Km() {
  b.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ya()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ya()), ko++, () => {
      ko === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ko--;
    };
  }, []);
}
function Ya() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Io = "focusScope.autoFocusOnMount", Do = "focusScope.autoFocusOnUnmount", Xa = { bubbles: !1, cancelable: !0 }, Gm = "FocusScope", mu = b.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = b.useState(null), c = Et(o), u = Et(s), f = b.useRef(null), h = Ae(t, (m) => l(m)), p = b.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  b.useEffect(() => {
    if (r) {
      let m = function(T) {
        if (p.paused || !a) return;
        const A = T.target;
        a.contains(A) ? f.current = A : Rt(f.current, { select: !0 });
      }, g = function(T) {
        if (p.paused || !a) return;
        const A = T.relatedTarget;
        A !== null && (a.contains(A) || Rt(f.current, { select: !0 }));
      }, x = function(T) {
        if (document.activeElement === document.body)
          for (const S of T)
            S.removedNodes.length > 0 && Rt(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", g);
      const y = new MutationObserver(x);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [r, a, p.paused]), b.useEffect(() => {
    if (a) {
      Ja.add(p);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const x = new CustomEvent(Io, Xa);
        a.addEventListener(Io, c), a.dispatchEvent(x), x.defaultPrevented || (Ym(e1(vu(a)), { select: !0 }), document.activeElement === m && Rt(a));
      }
      return () => {
        a.removeEventListener(Io, c), setTimeout(() => {
          const x = new CustomEvent(Do, Xa);
          a.addEventListener(Do, u), a.dispatchEvent(x), x.defaultPrevented || Rt(m ?? document.body, { select: !0 }), a.removeEventListener(Do, u), Ja.remove(p);
        }, 0);
      };
    }
  }, [a, c, u, p]);
  const v = b.useCallback(
    (m) => {
      if (!n && !r || p.paused) return;
      const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, x = document.activeElement;
      if (g && x) {
        const y = m.currentTarget, [T, A] = Xm(y);
        T && A ? !m.shiftKey && x === A ? (m.preventDefault(), n && Rt(T, { select: !0 })) : m.shiftKey && x === T && (m.preventDefault(), n && Rt(A, { select: !0 })) : x === y && m.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ d.jsx(we.div, { tabIndex: -1, ...i, ref: h, onKeyDown: v });
});
mu.displayName = Gm;
function Ym(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Rt(r, { select: t }), document.activeElement !== n) return;
}
function Xm(e) {
  const t = vu(e), n = Za(t, e), r = Za(t.reverse(), e);
  return [n, r];
}
function vu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Za(e, t) {
  for (const n of e)
    if (!Zm(n, { upTo: t })) return n;
}
function Zm(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Jm(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Rt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Jm(e) && t && e.select();
  }
}
var Ja = Qm();
function Qm() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Qa(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Qa(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Qa(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function e1(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ie = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
}, t1 = b.useId || (() => {
}), n1 = 0;
function oo(e) {
  const [t, n] = b.useState(t1());
  return Ie(() => {
    n((r) => r ?? String(n1++));
  }, [e]), t ? `radix-${t}` : "";
}
const r1 = ["top", "right", "bottom", "left"], Nt = Math.min, Fe = Math.max, kr = Math.round, pr = Math.floor, ft = (e) => ({
  x: e,
  y: e
}), o1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, s1 = {
  start: "end",
  end: "start"
};
function ps(e, t, n) {
  return Fe(e, Nt(t, n));
}
function Tt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function St(e) {
  return e.split("-")[0];
}
function Rn(e) {
  return e.split("-")[1];
}
function si(e) {
  return e === "x" ? "y" : "x";
}
function ii(e) {
  return e === "y" ? "height" : "width";
}
function Lt(e) {
  return ["top", "bottom"].includes(St(e)) ? "y" : "x";
}
function ai(e) {
  return si(Lt(e));
}
function i1(e, t, n) {
  n === void 0 && (n = !1);
  const r = Rn(e), o = ai(e), s = ii(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Ir(i)), [i, Ir(i)];
}
function a1(e) {
  const t = Ir(e);
  return [ms(e), t, ms(t)];
}
function ms(e) {
  return e.replace(/start|end/g, (t) => s1[t]);
}
function l1(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function c1(e, t, n, r) {
  const o = Rn(e);
  let s = l1(St(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(ms)))), s;
}
function Ir(e) {
  return e.replace(/left|right|bottom|top/g, (t) => o1[t]);
}
function u1(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function gu(e) {
  return typeof e != "number" ? u1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Dr(e) {
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
function el(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Lt(t), i = ai(t), a = ii(i), l = St(t), c = s === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Rn(t)) {
    case "start":
      p[i] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      p[i] += h * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const d1 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: f
  } = el(c, r, l), h = r, p = {}, v = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: g,
      fn: x
    } = a[m], {
      x: y,
      y: T,
      data: A,
      reset: S
    } = await x({
      x: u,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: p,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = y ?? u, f = T ?? f, p = {
      ...p,
      [g]: {
        ...p[g],
        ...A
      }
    }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (h = S.placement), S.rects && (c = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: u,
      y: f
    } = el(c, h, l)), m = -1);
  }
  return {
    x: u,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: p
  };
};
async function Zn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = Tt(t, e), v = gu(p), g = a[h ? f === "floating" ? "reference" : "floating" : f], x = Dr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), A = await (s.isElement == null ? void 0 : s.isElement(T)) ? await (s.getScale == null ? void 0 : s.getScale(T)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Dr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: T,
    strategy: l
  }) : y);
  return {
    top: (x.top - S.top + v.top) / A.y,
    bottom: (S.bottom - x.bottom + v.bottom) / A.y,
    left: (x.left - S.left + v.left) / A.x,
    right: (S.right - x.right + v.right) / A.x
  };
}
const f1 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = Tt(e, t) || {};
    if (c == null)
      return {};
    const f = gu(u), h = {
      x: n,
      y: r
    }, p = ai(o), v = ii(p), m = await i.getDimensions(c), g = p === "y", x = g ? "top" : "left", y = g ? "bottom" : "right", T = g ? "clientHeight" : "clientWidth", A = s.reference[v] + s.reference[p] - h[p] - s.floating[v], S = h[p] - s.reference[p], P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let R = P ? P[T] : 0;
    (!R || !await (i.isElement == null ? void 0 : i.isElement(P))) && (R = a.floating[T] || s.floating[v]);
    const O = A / 2 - S / 2, L = R / 2 - m[v] / 2 - 1, N = Nt(f[x], L), k = Nt(f[y], L), W = N, B = R - m[v] - k, I = R / 2 - m[v] / 2 + O, K = ps(W, I, B), U = !l.arrow && Rn(o) != null && I !== K && s.reference[v] / 2 - (I < W ? N : k) - m[v] / 2 < 0, j = U ? I < W ? I - W : I - B : 0;
    return {
      [p]: h[p] + j,
      data: {
        [p]: K,
        centerOffset: I - K - j,
        ...U && {
          alignmentOffset: j
        }
      },
      reset: U
    };
  }
}), h1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...g
      } = Tt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = St(o), y = Lt(a), T = St(a) === a, A = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = h || (T || !m ? [Ir(a)] : a1(a)), P = v !== "none";
      !h && P && S.push(...c1(a, m, v, A));
      const R = [a, ...S], O = await Zn(t, g), L = [];
      let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && L.push(O[x]), f) {
        const I = i1(o, i, A);
        L.push(O[I[0]], O[I[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: L
      }], !L.every((I) => I <= 0)) {
        var k, W;
        const I = (((k = s.flip) == null ? void 0 : k.index) || 0) + 1, K = R[I];
        if (K)
          return {
            data: {
              index: I,
              overflows: N
            },
            reset: {
              placement: K
            }
          };
        let U = (W = N.filter((j) => j.overflows[0] <= 0).sort((j, $) => j.overflows[1] - $.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!U)
          switch (p) {
            case "bestFit": {
              var B;
              const j = (B = N.filter(($) => {
                if (P) {
                  const q = Lt($.placement);
                  return q === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((q) => q > 0).reduce((q, ue) => q + ue, 0)]).sort(($, q) => $[1] - q[1])[0]) == null ? void 0 : B[0];
              j && (U = j);
              break;
            }
            case "initialPlacement":
              U = a;
              break;
          }
        if (o !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
function tl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function nl(e) {
  return r1.some((t) => e[t] >= 0);
}
const p1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Tt(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await Zn(t, {
            ...o,
            elementContext: "reference"
          }), i = tl(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: nl(i)
            }
          };
        }
        case "escaped": {
          const s = await Zn(t, {
            ...o,
            altBoundary: !0
          }), i = tl(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: nl(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function m1(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = St(n), a = Rn(n), l = Lt(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, u = s && l ? -1 : 1, f = Tt(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof v == "number" && (p = a === "end" ? v * -1 : v), l ? {
    x: p * u,
    y: h * c
  } : {
    x: h * c,
    y: p * u
  };
}
const v1 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await m1(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, g1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x,
              y
            } = g;
            return {
              x,
              y
            };
          }
        },
        ...l
      } = Tt(e, t), c = {
        x: n,
        y: r
      }, u = await Zn(t, l), f = Lt(St(o)), h = si(f);
      let p = c[h], v = c[f];
      if (s) {
        const g = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", y = p + u[g], T = p - u[x];
        p = ps(y, p, T);
      }
      if (i) {
        const g = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", y = v + u[g], T = v - u[x];
        v = ps(y, v, T);
      }
      const m = a.fn({
        ...t,
        [h]: p,
        [f]: v
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [h]: s,
            [f]: i
          }
        }
      };
    }
  };
}, y1 = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Tt(e, t), u = {
        x: n,
        y: r
      }, f = Lt(o), h = si(f);
      let p = u[h], v = u[f];
      const m = Tt(a, t), g = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const T = h === "y" ? "height" : "width", A = s.reference[h] - s.floating[T] + g.mainAxis, S = s.reference[h] + s.reference[T] - g.mainAxis;
        p < A ? p = A : p > S && (p = S);
      }
      if (c) {
        var x, y;
        const T = h === "y" ? "width" : "height", A = ["top", "left"].includes(St(o)), S = s.reference[f] - s.floating[T] + (A && ((x = i.offset) == null ? void 0 : x[f]) || 0) + (A ? 0 : g.crossAxis), P = s.reference[f] + s.reference[T] + (A ? 0 : ((y = i.offset) == null ? void 0 : y[f]) || 0) - (A ? g.crossAxis : 0);
        v < S ? v = S : v > P && (v = P);
      }
      return {
        [h]: p,
        [f]: v
      };
    }
  };
}, x1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = Tt(e, t), u = await Zn(t, c), f = St(o), h = Rn(o), p = Lt(o) === "y", {
        width: v,
        height: m
      } = s.floating;
      let g, x;
      f === "top" || f === "bottom" ? (g = f, x = h === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = f, g = h === "end" ? "top" : "bottom");
      const y = m - u.top - u.bottom, T = v - u.left - u.right, A = Nt(m - u[g], y), S = Nt(v - u[x], T), P = !t.middlewareData.shift;
      let R = A, O = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = T), (r = t.middlewareData.shift) != null && r.enabled.y && (R = y), P && !h) {
        const N = Fe(u.left, 0), k = Fe(u.right, 0), W = Fe(u.top, 0), B = Fe(u.bottom, 0);
        p ? O = v - 2 * (N !== 0 || k !== 0 ? N + k : Fe(u.left, u.right)) : R = m - 2 * (W !== 0 || B !== 0 ? W + B : Fe(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: O,
        availableHeight: R
      });
      const L = await i.getDimensions(a.floating);
      return v !== L.width || m !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function so() {
  return typeof window < "u";
}
function Cn(e) {
  return yu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gt(e) {
  var t;
  return (t = (yu(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yu(e) {
  return so() ? e instanceof Node || e instanceof Ue(e).Node : !1;
}
function rt(e) {
  return so() ? e instanceof Element || e instanceof Ue(e).Element : !1;
}
function vt(e) {
  return so() ? e instanceof HTMLElement || e instanceof Ue(e).HTMLElement : !1;
}
function rl(e) {
  return !so() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ue(e).ShadowRoot;
}
function sr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ot(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function b1(e) {
  return ["table", "td", "th"].includes(Cn(e));
}
function io(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function li(e) {
  const t = ci(), n = rt(e) ? ot(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function w1(e) {
  let t = jt(e);
  for (; vt(t) && !bn(t); ) {
    if (li(t))
      return t;
    if (io(t))
      return null;
    t = jt(t);
  }
  return null;
}
function ci() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function bn(e) {
  return ["html", "body", "#document"].includes(Cn(e));
}
function ot(e) {
  return Ue(e).getComputedStyle(e);
}
function ao(e) {
  return rt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function jt(e) {
  if (Cn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    rl(e) && e.host || // Fallback.
    gt(e)
  );
  return rl(t) ? t.host : t;
}
function xu(e) {
  const t = jt(e);
  return bn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && sr(t) ? t : xu(t);
}
function Jn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = xu(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ue(o);
  if (s) {
    const a = vs(i);
    return t.concat(i, i.visualViewport || [], sr(o) ? o : [], a && n ? Jn(a) : []);
  }
  return t.concat(o, Jn(o, [], n));
}
function vs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bu(e) {
  const t = ot(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = vt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = kr(n) !== s || kr(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function ui(e) {
  return rt(e) ? e : e.contextElement;
}
function vn(e) {
  const t = ui(e);
  if (!vt(t))
    return ft(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = bu(t);
  let i = (s ? kr(n.width) : n.width) / r, a = (s ? kr(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const E1 = /* @__PURE__ */ ft(0);
function wu(e) {
  const t = Ue(e);
  return !ci() || !t.visualViewport ? E1 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function T1(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ue(e) ? !1 : t;
}
function Yt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = ui(e);
  let i = ft(1);
  t && (r ? rt(r) && (i = vn(r)) : i = vn(e));
  const a = T1(s, n, r) ? wu(s) : ft(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, u = o.width / i.x, f = o.height / i.y;
  if (s) {
    const h = Ue(s), p = r && rt(r) ? Ue(r) : r;
    let v = h, m = vs(v);
    for (; m && r && p !== v; ) {
      const g = vn(m), x = m.getBoundingClientRect(), y = ot(m), T = x.left + (m.clientLeft + parseFloat(y.paddingLeft)) * g.x, A = x.top + (m.clientTop + parseFloat(y.paddingTop)) * g.y;
      l *= g.x, c *= g.y, u *= g.x, f *= g.y, l += T, c += A, v = Ue(m), m = vs(v);
    }
  }
  return Dr({
    width: u,
    height: f,
    x: l,
    y: c
  });
}
function di(e, t) {
  const n = ao(e).scrollLeft;
  return t ? t.left + n : Yt(gt(e)).left + n;
}
function Eu(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    di(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function S1(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = gt(r), a = t ? io(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ft(1);
  const u = ft(0), f = vt(r);
  if ((f || !f && !s) && ((Cn(r) !== "body" || sr(i)) && (l = ao(r)), vt(r))) {
    const p = Yt(r);
    c = vn(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  const h = i && !f && !s ? Eu(i, l, !0) : ft(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + h.y
  };
}
function A1(e) {
  return Array.from(e.getClientRects());
}
function P1(e) {
  const t = gt(e), n = ao(e), r = e.ownerDocument.body, o = Fe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Fe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + di(e);
  const a = -n.scrollTop;
  return ot(r).direction === "rtl" && (i += Fe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function R1(e, t) {
  const n = Ue(e), r = gt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const c = ci();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function C1(e, t) {
  const n = Yt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = vt(e) ? vn(e) : ft(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function ol(e, t, n) {
  let r;
  if (t === "viewport")
    r = R1(e, n);
  else if (t === "document")
    r = P1(gt(e));
  else if (rt(t))
    r = C1(t, n);
  else {
    const o = wu(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Dr(r);
}
function Tu(e, t) {
  const n = jt(e);
  return n === t || !rt(n) || bn(n) ? !1 : ot(n).position === "fixed" || Tu(n, t);
}
function O1(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Jn(e, [], !1).filter((a) => rt(a) && Cn(a) !== "body"), o = null;
  const s = ot(e).position === "fixed";
  let i = s ? jt(e) : e;
  for (; rt(i) && !bn(i); ) {
    const a = ot(i), l = li(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || sr(i) && !l && Tu(e, i)) ? r = r.filter((u) => u !== i) : o = a, i = jt(i);
  }
  return t.set(e, r), r;
}
function M1(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? io(t) ? [] : O1(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, u) => {
    const f = ol(t, u, o);
    return c.top = Fe(f.top, c.top), c.right = Nt(f.right, c.right), c.bottom = Nt(f.bottom, c.bottom), c.left = Fe(f.left, c.left), c;
  }, ol(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function $1(e) {
  const {
    width: t,
    height: n
  } = bu(e);
  return {
    width: t,
    height: n
  };
}
function N1(e, t, n) {
  const r = vt(t), o = gt(t), s = n === "fixed", i = Yt(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ft(0);
  if (r || !r && !s)
    if ((Cn(t) !== "body" || sr(o)) && (a = ao(t)), r) {
      const h = Yt(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && (l.x = di(o));
  const c = o && !r && !s ? Eu(o, a) : ft(0), u = i.left + a.scrollLeft - l.x - c.x, f = i.top + a.scrollTop - l.y - c.y;
  return {
    x: u,
    y: f,
    width: i.width,
    height: i.height
  };
}
function Vo(e) {
  return ot(e).position === "static";
}
function sl(e, t) {
  if (!vt(e) || ot(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return gt(e) === n && (n = n.ownerDocument.body), n;
}
function Su(e, t) {
  const n = Ue(e);
  if (io(e))
    return n;
  if (!vt(e)) {
    let o = jt(e);
    for (; o && !bn(o); ) {
      if (rt(o) && !Vo(o))
        return o;
      o = jt(o);
    }
    return n;
  }
  let r = sl(e, t);
  for (; r && b1(r) && Vo(r); )
    r = sl(r, t);
  return r && bn(r) && Vo(r) && !li(r) ? n : r || w1(e) || n;
}
const L1 = async function(e) {
  const t = this.getOffsetParent || Su, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: N1(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function j1(e) {
  return ot(e).direction === "rtl";
}
const k1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: S1,
  getDocumentElement: gt,
  getClippingRect: M1,
  getOffsetParent: Su,
  getElementRects: L1,
  getClientRects: A1,
  getDimensions: $1,
  getScale: vn,
  isElement: rt,
  isRTL: j1
};
function I1(e, t) {
  let n = null, r;
  const o = gt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const {
      left: c,
      top: u,
      width: f,
      height: h
    } = e.getBoundingClientRect();
    if (a || t(), !f || !h)
      return;
    const p = pr(u), v = pr(o.clientWidth - (c + f)), m = pr(o.clientHeight - (u + h)), g = pr(c), y = {
      rootMargin: -p + "px " + -v + "px " + -m + "px " + -g + "px",
      threshold: Fe(0, Nt(1, l)) || 1
    };
    let T = !0;
    function A(S) {
      const P = S[0].intersectionRatio;
      if (P !== l) {
        if (!T)
          return i();
        P ? i(!1, P) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      T = !1;
    }
    try {
      n = new IntersectionObserver(A, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function D1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = ui(e), u = o || s ? [...c ? Jn(c) : [], ...Jn(t)] : [];
  u.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n);
  });
  const f = c && a ? I1(c, n) : null;
  let h = -1, p = null;
  i && (p = new ResizeObserver((x) => {
    let [y] = x;
    y && y.target === c && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var T;
      (T = p) == null || T.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let v, m = l ? Yt(e) : null;
  l && g();
  function g() {
    const x = Yt(e);
    m && (x.x !== m.x || x.y !== m.y || x.width !== m.width || x.height !== m.height) && n(), m = x, v = requestAnimationFrame(g);
  }
  return n(), () => {
    var x;
    u.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), f == null || f(), (x = p) == null || x.disconnect(), p = null, l && cancelAnimationFrame(v);
  };
}
const V1 = v1, _1 = g1, B1 = h1, F1 = x1, U1 = p1, il = f1, H1 = y1, z1 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: k1,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return d1(e, t, {
    ...o,
    platform: s
  });
};
var Cr = typeof document < "u" ? eu : me;
function Vr(e, t) {
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
        if (!Vr(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Vr(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Au(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function al(e, t) {
  const n = Au(e);
  return Math.round(t * n) / n;
}
function _o(e) {
  const t = b.useRef(e);
  return Cr(() => {
    t.current = e;
  }), t;
}
function W1(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [u, f] = b.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = b.useState(r);
  Vr(h, r) || p(r);
  const [v, m] = b.useState(null), [g, x] = b.useState(null), y = b.useCallback(($) => {
    $ !== P.current && (P.current = $, m($));
  }, []), T = b.useCallback(($) => {
    $ !== R.current && (R.current = $, x($));
  }, []), A = s || v, S = i || g, P = b.useRef(null), R = b.useRef(null), O = b.useRef(u), L = l != null, N = _o(l), k = _o(o), W = _o(c), B = b.useCallback(() => {
    if (!P.current || !R.current)
      return;
    const $ = {
      placement: t,
      strategy: n,
      middleware: h
    };
    k.current && ($.platform = k.current), z1(P.current, R.current, $).then((q) => {
      const ue = {
        ...q,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      I.current && !Vr(O.current, ue) && (O.current = ue, no.flushSync(() => {
        f(ue);
      }));
    });
  }, [h, t, n, k, W]);
  Cr(() => {
    c === !1 && O.current.isPositioned && (O.current.isPositioned = !1, f(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [c]);
  const I = b.useRef(!1);
  Cr(() => (I.current = !0, () => {
    I.current = !1;
  }), []), Cr(() => {
    if (A && (P.current = A), S && (R.current = S), A && S) {
      if (N.current)
        return N.current(A, S, B);
      B();
    }
  }, [A, S, B, N, L]);
  const K = b.useMemo(() => ({
    reference: P,
    floating: R,
    setReference: y,
    setFloating: T
  }), [y, T]), U = b.useMemo(() => ({
    reference: A,
    floating: S
  }), [A, S]), j = b.useMemo(() => {
    const $ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!U.floating)
      return $;
    const q = al(U.floating, u.x), ue = al(U.floating, u.y);
    return a ? {
      ...$,
      transform: "translate(" + q + "px, " + ue + "px)",
      ...Au(U.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: q,
      top: ue
    };
  }, [n, a, U.floating, u.x, u.y]);
  return b.useMemo(() => ({
    ...u,
    update: B,
    refs: K,
    elements: U,
    floatingStyles: j
  }), [u, B, K, U, j]);
}
const q1 = (e) => {
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
      return r && t(r) ? r.current != null ? il({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? il({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, K1 = (e, t) => ({
  ...V1(e),
  options: [e, t]
}), G1 = (e, t) => ({
  ..._1(e),
  options: [e, t]
}), Y1 = (e, t) => ({
  ...H1(e),
  options: [e, t]
}), X1 = (e, t) => ({
  ...B1(e),
  options: [e, t]
}), Z1 = (e, t) => ({
  ...F1(e),
  options: [e, t]
}), J1 = (e, t) => ({
  ...U1(e),
  options: [e, t]
}), Q1 = (e, t) => ({
  ...q1(e),
  options: [e, t]
});
var ev = "Arrow", Pu = b.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ d.jsx(
    we.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Pu.displayName = ev;
var tv = Pu;
function nv(e) {
  const [t, n] = b.useState(void 0);
  return Ie(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, a = c.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var fi = "Popper", [Ru, lo] = cu(fi), [rv, Cu] = Ru(fi), Ou = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = b.useState(null);
  return /* @__PURE__ */ d.jsx(rv, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Ou.displayName = fi;
var Mu = "PopperAnchor", $u = b.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Cu(Mu, n), i = b.useRef(null), a = Ae(t, i);
    return b.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ d.jsx(we.div, { ...o, ref: a });
  }
);
$u.displayName = Mu;
var hi = "PopperContent", [ov, sv] = Ru(hi), Nu = b.forwardRef(
  (e, t) => {
    var F, ee, Ee, X, te, Z;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: u = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: v,
      ...m
    } = e, g = Cu(hi, n), [x, y] = b.useState(null), T = Ae(t, (Le) => y(Le)), [A, S] = b.useState(null), P = nv(A), R = (P == null ? void 0 : P.width) ?? 0, O = (P == null ? void 0 : P.height) ?? 0, L = r + (s !== "center" ? "-" + s : ""), N = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, k = Array.isArray(c) ? c : [c], W = k.length > 0, B = {
      padding: N,
      boundary: k.filter(av),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: I, floatingStyles: K, placement: U, isPositioned: j, middlewareData: $ } = W1({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: L,
      whileElementsMounted: (...Le) => D1(...Le, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        K1({ mainAxis: o + O, alignmentAxis: i }),
        l && G1({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Y1() : void 0,
          ...B
        }),
        l && X1({ ...B }),
        Z1({
          ...B,
          apply: ({ elements: Le, rects: qe, availableWidth: lt, availableHeight: Qe }) => {
            const { width: Pt, height: hr } = qe.reference, yt = Le.floating.style;
            yt.setProperty("--radix-popper-available-width", `${lt}px`), yt.setProperty("--radix-popper-available-height", `${Qe}px`), yt.setProperty("--radix-popper-anchor-width", `${Pt}px`), yt.setProperty("--radix-popper-anchor-height", `${hr}px`);
          }
        }),
        A && Q1({ element: A, padding: a }),
        lv({ arrowWidth: R, arrowHeight: O }),
        h && J1({ strategy: "referenceHidden", ...B })
      ]
    }), [q, ue] = ku(U), De = Et(v);
    Ie(() => {
      j && (De == null || De());
    }, [j, De]);
    const st = (F = $.arrow) == null ? void 0 : F.x, it = (ee = $.arrow) == null ? void 0 : ee.y, Ve = ((Ee = $.arrow) == null ? void 0 : Ee.centerOffset) !== 0, [at, We] = b.useState();
    return Ie(() => {
      x && We(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: j ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: at,
          "--radix-popper-transform-origin": [
            (X = $.transformOrigin) == null ? void 0 : X.x,
            (te = $.transformOrigin) == null ? void 0 : te.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Z = $.hide) == null ? void 0 : Z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          ov,
          {
            scope: n,
            placedSide: q,
            onArrowChange: S,
            arrowX: st,
            arrowY: it,
            shouldHideArrow: Ve,
            children: /* @__PURE__ */ d.jsx(
              we.div,
              {
                "data-side": q,
                "data-align": ue,
                ...m,
                ref: T,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: j ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Nu.displayName = hi;
var Lu = "PopperArrow", iv = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ju = b.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = sv(Lu, r), i = iv[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ d.jsx(
          tv,
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
ju.displayName = Lu;
function av(e) {
  return e !== null;
}
var lv = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, x, y;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, u] = ku(n), f = { start: "0%", center: "50%", end: "100%" }[u], h = (((x = o.arrow) == null ? void 0 : x.x) ?? 0) + a / 2, p = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let v = "", m = "";
    return c === "bottom" ? (v = i ? f : `${h}px`, m = `${-l}px`) : c === "top" ? (v = i ? f : `${h}px`, m = `${r.floating.height + l}px`) : c === "right" ? (v = `${-l}px`, m = i ? f : `${p}px`) : c === "left" && (v = `${r.floating.width + l}px`, m = i ? f : `${p}px`), { data: { x: v, y: m } };
  }
});
function ku(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Iu = Ou, Du = $u, Vu = Nu, _u = ju, cv = "Portal", pi = b.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = b.useState(!1);
  Ie(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? nu.createPortal(/* @__PURE__ */ d.jsx(we.div, { ...r, ref: t }), i) : null;
});
pi.displayName = cv;
function gs({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = uv({ defaultProp: t, onChange: n }), s = e !== void 0, i = s ? e : r, a = Et(n), l = b.useCallback(
    (c) => {
      if (s) {
        const f = typeof c == "function" ? c(e) : c;
        f !== e && a(f);
      } else
        o(c);
    },
    [s, e, o, a]
  );
  return [i, l];
}
function uv({
  defaultProp: e,
  onChange: t
}) {
  const n = b.useState(e), [r] = n, o = b.useRef(r), s = Et(t);
  return b.useEffect(() => {
    o.current !== r && (s(r), o.current = r);
  }, [r, o, s]), n;
}
function dv(e) {
  const t = b.useRef({ value: e, previous: e });
  return b.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var fv = "VisuallyHidden", mi = b.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    we.span,
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
mi.displayName = fv;
var hv = mi, pv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, nn = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), vr = {}, Bo = 0, Bu = function(e) {
  return e && (e.host || Bu(e.parentNode));
}, mv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Bu(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, vv = function(e, t, n, r) {
  var o = mv(t, Array.isArray(e) ? e : [e]);
  vr[n] || (vr[n] = /* @__PURE__ */ new WeakMap());
  var s = vr[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(f) {
    !f || a.has(f) || (a.add(f), c(f.parentNode));
  };
  o.forEach(c);
  var u = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (a.has(h))
        u(h);
      else
        try {
          var p = h.getAttribute(r), v = p !== null && p !== "false", m = (nn.get(h) || 0) + 1, g = (s.get(h) || 0) + 1;
          nn.set(h, m), s.set(h, g), i.push(h), m === 1 && v && mr.set(h, !0), g === 1 && h.setAttribute(n, "true"), v || h.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", h, x);
        }
    });
  };
  return u(t), a.clear(), Bo++, function() {
    i.forEach(function(f) {
      var h = nn.get(f) - 1, p = s.get(f) - 1;
      nn.set(f, h), s.set(f, p), h || (mr.has(f) || f.removeAttribute(r), mr.delete(f)), p || f.removeAttribute(n);
    }), Bo--, Bo || (nn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), vr = {});
  };
}, gv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = pv(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), vv(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ut = function() {
  return ut = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ut.apply(this, arguments);
};
function Fu(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function yv(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Or = "right-scroll-bar-position", Mr = "width-before-scroll-bar", xv = "with-scroll-bars-hidden", bv = "--removed-body-scroll-bar-size";
function Fo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function wv(e, t) {
  var n = ve(function() {
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
var Ev = typeof window < "u" ? b.useLayoutEffect : b.useEffect, ll = /* @__PURE__ */ new WeakMap();
function Tv(e, t) {
  var n = wv(null, function(r) {
    return e.forEach(function(o) {
      return Fo(o, r);
    });
  });
  return Ev(function() {
    var r = ll.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Fo(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Fo(a, i);
      });
    }
    ll.set(n, e);
  }, [e]), n;
}
function Sv(e) {
  return e;
}
function Av(e, t) {
  t === void 0 && (t = Sv);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var l = function() {
        var u = i;
        i = [], u.forEach(s);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(u) {
          i.push(u), c();
        },
        filter: function(u) {
          return i = i.filter(u), n;
        }
      };
    }
  };
  return o;
}
function Pv(e) {
  e === void 0 && (e = {});
  var t = Av(null);
  return t.options = ut({ async: !0, ssr: !1 }, e), t;
}
var Uu = function(e) {
  var t = e.sideCar, n = Fu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return b.createElement(r, ut({}, n));
};
Uu.isSideCarExport = !0;
function Rv(e, t) {
  return e.useMedium(t), Uu;
}
var Hu = Pv(), Uo = function() {
}, co = b.forwardRef(function(e, t) {
  var n = b.useRef(null), r = b.useState({
    onScrollCapture: Uo,
    onWheelCapture: Uo,
    onTouchMoveCapture: Uo
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, f = e.shards, h = e.sideCar, p = e.noIsolation, v = e.inert, m = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, y = e.gapMode, T = Fu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), A = h, S = Tv([n, t]), P = ut(ut({}, T), o);
  return b.createElement(
    b.Fragment,
    null,
    u && b.createElement(A, { sideCar: Hu, removeScrollBar: c, shards: f, noIsolation: p, inert: v, setCallbacks: s, allowPinchZoom: !!m, lockRef: n, gapMode: y }),
    i ? b.cloneElement(b.Children.only(a), ut(ut({}, P), { ref: S })) : b.createElement(x, ut({}, P, { className: l, ref: S }), a)
  );
});
co.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
co.classNames = {
  fullWidth: Mr,
  zeroRight: Or
};
var Cv = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ov() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Cv();
  return t && e.setAttribute("nonce", t), e;
}
function Mv(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function $v(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Nv = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ov()) && (Mv(t, n), $v(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Lv = function() {
  var e = Nv();
  return function(t, n) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, zu = function() {
  var e = Lv(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, jv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ho = function(e) {
  return parseInt(e || "", 10) || 0;
}, kv = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ho(n), Ho(r), Ho(o)];
}, Iv = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return jv;
  var t = kv(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Dv = zu(), gn = "data-scroll-locked", Vv = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(xv, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(gn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Or, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Mr, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Or, " .").concat(Or, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Mr, " .").concat(Mr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(gn, `] {
    `).concat(bv, ": ").concat(a, `px;
  }
`);
}, cl = function() {
  var e = parseInt(document.body.getAttribute(gn) || "0", 10);
  return isFinite(e) ? e : 0;
}, _v = function() {
  b.useEffect(function() {
    return document.body.setAttribute(gn, (cl() + 1).toString()), function() {
      var e = cl() - 1;
      e <= 0 ? document.body.removeAttribute(gn) : document.body.setAttribute(gn, e.toString());
    };
  }, []);
}, Bv = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  _v();
  var s = b.useMemo(function() {
    return Iv(o);
  }, [o]);
  return b.createElement(Dv, { styles: Vv(s, !t, o, n ? "" : "!important") });
}, ys = !1;
if (typeof window < "u")
  try {
    var gr = Object.defineProperty({}, "passive", {
      get: function() {
        return ys = !0, !0;
      }
    });
    window.addEventListener("test", gr, gr), window.removeEventListener("test", gr, gr);
  } catch {
    ys = !1;
  }
var rn = ys ? { passive: !1 } : !1, Fv = function(e) {
  return e.tagName === "TEXTAREA";
}, Wu = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Fv(e) && n[t] === "visible")
  );
}, Uv = function(e) {
  return Wu(e, "overflowY");
}, Hv = function(e) {
  return Wu(e, "overflowX");
}, ul = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = qu(e, r);
    if (o) {
      var s = Ku(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, zv = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Wv = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, qu = function(e, t) {
  return e === "v" ? Uv(t) : Hv(t);
}, Ku = function(e, t) {
  return e === "v" ? zv(t) : Wv(t);
}, qv = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Kv = function(e, t, n, r, o) {
  var s = qv(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, u = i > 0, f = 0, h = 0;
  do {
    var p = Ku(e, a), v = p[0], m = p[1], g = p[2], x = m - g - s * v;
    (v || x) && qu(e, a) && (f += x, h += v), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (u && (Math.abs(f) < 1 || !o) || !u && (Math.abs(h) < 1 || !o)) && (c = !0), c;
}, yr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, dl = function(e) {
  return [e.deltaX, e.deltaY];
}, fl = function(e) {
  return e && "current" in e ? e.current : e;
}, Gv = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Yv = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Xv = 0, on = [];
function Zv(e) {
  var t = b.useRef([]), n = b.useRef([0, 0]), r = b.useRef(), o = b.useState(Xv++)[0], s = b.useState(zu)[0], i = b.useRef(e);
  b.useEffect(function() {
    i.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = yv([e.lockRef.current], (e.shards || []).map(fl), !0).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = b.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var x = yr(m), y = n.current, T = "deltaX" in m ? m.deltaX : y[0] - x[0], A = "deltaY" in m ? m.deltaY : y[1] - x[1], S, P = m.target, R = Math.abs(T) > Math.abs(A) ? "h" : "v";
    if ("touches" in m && R === "h" && P.type === "range")
      return !1;
    var O = ul(R, P);
    if (!O)
      return !0;
    if (O ? S = R : (S = R === "v" ? "h" : "v", O = ul(R, P)), !O)
      return !1;
    if (!r.current && "changedTouches" in m && (T || A) && (r.current = S), !S)
      return !0;
    var L = r.current || S;
    return Kv(L, g, m, L === "h" ? T : A, !0);
  }, []), l = b.useCallback(function(m) {
    var g = m;
    if (!(!on.length || on[on.length - 1] !== s)) {
      var x = "deltaY" in g ? dl(g) : yr(g), y = t.current.filter(function(S) {
        return S.name === g.type && (S.target === g.target || g.target === S.shadowParent) && Gv(S.delta, x);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var T = (i.current.shards || []).map(fl).filter(Boolean).filter(function(S) {
          return S.contains(g.target);
        }), A = T.length > 0 ? a(g, T[0]) : !i.current.noIsolation;
        A && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = b.useCallback(function(m, g, x, y) {
    var T = { name: m, delta: g, target: x, should: y, shadowParent: Jv(x) };
    t.current.push(T), setTimeout(function() {
      t.current = t.current.filter(function(A) {
        return A !== T;
      });
    }, 1);
  }, []), u = b.useCallback(function(m) {
    n.current = yr(m), r.current = void 0;
  }, []), f = b.useCallback(function(m) {
    c(m.type, dl(m), m.target, a(m, e.lockRef.current));
  }, []), h = b.useCallback(function(m) {
    c(m.type, yr(m), m.target, a(m, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return on.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, rn), document.addEventListener("touchmove", l, rn), document.addEventListener("touchstart", u, rn), function() {
      on = on.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, rn), document.removeEventListener("touchmove", l, rn), document.removeEventListener("touchstart", u, rn);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    v ? b.createElement(s, { styles: Yv(o) }) : null,
    p ? b.createElement(Bv, { gapMode: e.gapMode }) : null
  );
}
function Jv(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Qv = Rv(Hu, Zv);
var Gu = b.forwardRef(function(e, t) {
  return b.createElement(co, ut({}, e, { ref: t, sideCar: Qv }));
});
Gu.classNames = co.classNames;
var eg = [" ", "Enter", "ArrowUp", "ArrowDown"], tg = [" ", "Enter"], ir = "Select", [uo, fo, ng] = Lm(ir), [On, R4] = fu(ir, [
  ng,
  lo
]), ho = lo(), [rg, _t] = On(ir), [og, sg] = On(ir), Yu = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: l,
    dir: c,
    name: u,
    autoComplete: f,
    disabled: h,
    required: p,
    form: v
  } = e, m = ho(t), [g, x] = b.useState(null), [y, T] = b.useState(null), [A, S] = b.useState(!1), P = Im(c), [R = !1, O] = gs({
    prop: r,
    defaultProp: o,
    onChange: s
  }), [L, N] = gs({
    prop: i,
    defaultProp: a,
    onChange: l
  }), k = b.useRef(null), W = g ? v || !!g.closest("form") : !0, [B, I] = b.useState(/* @__PURE__ */ new Set()), K = Array.from(B).map((U) => U.props.value).join(";");
  return /* @__PURE__ */ d.jsx(Iu, { ...m, children: /* @__PURE__ */ d.jsxs(
    rg,
    {
      required: p,
      scope: t,
      trigger: g,
      onTriggerChange: x,
      valueNode: y,
      onValueNodeChange: T,
      valueNodeHasChildren: A,
      onValueNodeHasChildrenChange: S,
      contentId: oo(),
      value: L,
      onValueChange: N,
      open: R,
      onOpenChange: O,
      dir: P,
      triggerPointerDownPosRef: k,
      disabled: h,
      children: [
        /* @__PURE__ */ d.jsx(uo.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          og,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: b.useCallback((U) => {
              I((j) => new Set(j).add(U));
            }, []),
            onNativeOptionRemove: b.useCallback((U) => {
              I((j) => {
                const $ = new Set(j);
                return $.delete(U), $;
              });
            }, []),
            children: n
          }
        ) }),
        W ? /* @__PURE__ */ d.jsxs(
          gd,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: L,
            onChange: (U) => N(U.target.value),
            disabled: h,
            form: v,
            children: [
              L === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from(B)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
Yu.displayName = ir;
var Xu = "SelectTrigger", Zu = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = ho(n), i = _t(Xu, n), a = i.disabled || r, l = Ae(t, i.onTriggerChange), c = fo(n), u = b.useRef("touch"), [f, h, p] = yd((m) => {
      const g = c().filter((T) => !T.disabled), x = g.find((T) => T.value === i.value), y = xd(g, m, x);
      y !== void 0 && i.onValueChange(y.value);
    }), v = (m) => {
      a || (i.onOpenChange(!0), p()), m && (i.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(Du, { asChild: !0, ...s, children: /* @__PURE__ */ d.jsx(
      we.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": vd(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: ce(o.onClick, (m) => {
          m.currentTarget.focus(), u.current !== "mouse" && v(m);
        }),
        onPointerDown: ce(o.onPointerDown, (m) => {
          u.current = m.pointerType;
          const g = m.target;
          g.hasPointerCapture(m.pointerId) && g.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (v(m), m.preventDefault());
        }),
        onKeyDown: ce(o.onKeyDown, (m) => {
          const g = f.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(g && m.key === " ") && eg.includes(m.key) && (v(), m.preventDefault());
        })
      }
    ) });
  }
);
Zu.displayName = Xu;
var Ju = "SelectValue", Qu = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = _t(Ju, n), { onValueNodeHasChildrenChange: c } = l, u = s !== void 0, f = Ae(t, l.onValueNodeChange);
    return Ie(() => {
      c(u);
    }, [c, u]), /* @__PURE__ */ d.jsx(
      we.span,
      {
        ...a,
        ref: f,
        style: { pointerEvents: "none" },
        children: vd(l.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: i }) : s
      }
    );
  }
);
Qu.displayName = Ju;
var ig = "SelectIcon", ag = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(we.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
ag.displayName = ig;
var lg = "SelectPortal", ed = (e) => /* @__PURE__ */ d.jsx(pi, { asChild: !0, ...e });
ed.displayName = lg;
var Xt = "SelectContent", td = b.forwardRef(
  (e, t) => {
    const n = _t(Xt, e.__scopeSelect), [r, o] = b.useState();
    if (Ie(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? no.createPortal(
        /* @__PURE__ */ d.jsx(nd, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(uo.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(rd, { ...e, ref: t });
  }
);
td.displayName = Xt;
var tt = 10, [nd, Bt] = On(Xt), cg = "SelectContentImpl", rd = b.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: v,
      hideWhenDetached: m,
      avoidCollisions: g,
      //
      ...x
    } = e, y = _t(Xt, n), [T, A] = b.useState(null), [S, P] = b.useState(null), R = Ae(t, (F) => A(F)), [O, L] = b.useState(null), [N, k] = b.useState(
      null
    ), W = fo(n), [B, I] = b.useState(!1), K = b.useRef(!1);
    b.useEffect(() => {
      if (T) return gv(T);
    }, [T]), Km();
    const U = b.useCallback(
      (F) => {
        const [ee, ...Ee] = W().map((Z) => Z.ref.current), [X] = Ee.slice(-1), te = document.activeElement;
        for (const Z of F)
          if (Z === te || (Z == null || Z.scrollIntoView({ block: "nearest" }), Z === ee && S && (S.scrollTop = 0), Z === X && S && (S.scrollTop = S.scrollHeight), Z == null || Z.focus(), document.activeElement !== te)) return;
      },
      [W, S]
    ), j = b.useCallback(
      () => U([O, T]),
      [U, O, T]
    );
    b.useEffect(() => {
      B && j();
    }, [B, j]);
    const { onOpenChange: $, triggerPointerDownPosRef: q } = y;
    b.useEffect(() => {
      if (T) {
        let F = { x: 0, y: 0 };
        const ee = (X) => {
          var te, Z;
          F = {
            x: Math.abs(Math.round(X.pageX) - (((te = q.current) == null ? void 0 : te.x) ?? 0)),
            y: Math.abs(Math.round(X.pageY) - (((Z = q.current) == null ? void 0 : Z.y) ?? 0))
          };
        }, Ee = (X) => {
          F.x <= 10 && F.y <= 10 ? X.preventDefault() : T.contains(X.target) || $(!1), document.removeEventListener("pointermove", ee), q.current = null;
        };
        return q.current !== null && (document.addEventListener("pointermove", ee), document.addEventListener("pointerup", Ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ee), document.removeEventListener("pointerup", Ee, { capture: !0 });
        };
      }
    }, [T, $, q]), b.useEffect(() => {
      const F = () => $(!1);
      return window.addEventListener("blur", F), window.addEventListener("resize", F), () => {
        window.removeEventListener("blur", F), window.removeEventListener("resize", F);
      };
    }, [$]);
    const [ue, De] = yd((F) => {
      const ee = W().filter((te) => !te.disabled), Ee = ee.find((te) => te.ref.current === document.activeElement), X = xd(ee, F, Ee);
      X && setTimeout(() => X.ref.current.focus());
    }), st = b.useCallback(
      (F, ee, Ee) => {
        const X = !K.current && !Ee;
        (y.value !== void 0 && y.value === ee || X) && (L(F), X && (K.current = !0));
      },
      [y.value]
    ), it = b.useCallback(() => T == null ? void 0 : T.focus(), [T]), Ve = b.useCallback(
      (F, ee, Ee) => {
        const X = !K.current && !Ee;
        (y.value !== void 0 && y.value === ee || X) && k(F);
      },
      [y.value]
    ), at = r === "popper" ? xs : od, We = at === xs ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: v,
      hideWhenDetached: m,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ d.jsx(
      nd,
      {
        scope: n,
        content: T,
        viewport: S,
        onViewportChange: P,
        itemRefCallback: st,
        selectedItem: O,
        onItemLeave: it,
        itemTextRefCallback: Ve,
        focusSelectedItem: j,
        selectedItemText: N,
        position: r,
        isPositioned: B,
        searchRef: ue,
        children: /* @__PURE__ */ d.jsx(Gu, { as: Xn, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          mu,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (F) => {
              F.preventDefault();
            },
            onUnmountAutoFocus: ce(o, (F) => {
              var ee;
              (ee = y.trigger) == null || ee.focus({ preventScroll: !0 }), F.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              oi,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (F) => F.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  at,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (F) => F.preventDefault(),
                    ...x,
                    ...We,
                    onPlaced: () => I(!0),
                    ref: R,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: ce(x.onKeyDown, (F) => {
                      const ee = F.ctrlKey || F.altKey || F.metaKey;
                      if (F.key === "Tab" && F.preventDefault(), !ee && F.key.length === 1 && De(F.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key)) {
                        let X = W().filter((te) => !te.disabled).map((te) => te.ref.current);
                        if (["ArrowUp", "End"].includes(F.key) && (X = X.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(F.key)) {
                          const te = F.target, Z = X.indexOf(te);
                          X = X.slice(Z + 1);
                        }
                        setTimeout(() => U(X)), F.preventDefault();
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
rd.displayName = cg;
var ug = "SelectItemAlignedPosition", od = b.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = _t(Xt, n), i = Bt(Xt, n), [a, l] = b.useState(null), [c, u] = b.useState(null), f = Ae(t, (R) => u(R)), h = fo(n), p = b.useRef(!1), v = b.useRef(!0), { viewport: m, selectedItem: g, selectedItemText: x, focusSelectedItem: y } = i, T = b.useCallback(() => {
    if (s.trigger && s.valueNode && a && c && m && g && x) {
      const R = s.trigger.getBoundingClientRect(), O = c.getBoundingClientRect(), L = s.valueNode.getBoundingClientRect(), N = x.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const te = N.left - O.left, Z = L.left - te, Le = R.left - Z, qe = R.width + Le, lt = Math.max(qe, O.width), Qe = window.innerWidth - tt, Pt = qa(Z, [
          tt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(tt, Qe - lt)
        ]);
        a.style.minWidth = qe + "px", a.style.left = Pt + "px";
      } else {
        const te = O.right - N.right, Z = window.innerWidth - L.right - te, Le = window.innerWidth - R.right - Z, qe = R.width + Le, lt = Math.max(qe, O.width), Qe = window.innerWidth - tt, Pt = qa(Z, [
          tt,
          Math.max(tt, Qe - lt)
        ]);
        a.style.minWidth = qe + "px", a.style.right = Pt + "px";
      }
      const k = h(), W = window.innerHeight - tt * 2, B = m.scrollHeight, I = window.getComputedStyle(c), K = parseInt(I.borderTopWidth, 10), U = parseInt(I.paddingTop, 10), j = parseInt(I.borderBottomWidth, 10), $ = parseInt(I.paddingBottom, 10), q = K + U + B + $ + j, ue = Math.min(g.offsetHeight * 5, q), De = window.getComputedStyle(m), st = parseInt(De.paddingTop, 10), it = parseInt(De.paddingBottom, 10), Ve = R.top + R.height / 2 - tt, at = W - Ve, We = g.offsetHeight / 2, F = g.offsetTop + We, ee = K + U + F, Ee = q - ee;
      if (ee <= Ve) {
        const te = k.length > 0 && g === k[k.length - 1].ref.current;
        a.style.bottom = "0px";
        const Z = c.clientHeight - m.offsetTop - m.offsetHeight, Le = Math.max(
          at,
          We + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (te ? it : 0) + Z + j
        ), qe = ee + Le;
        a.style.height = qe + "px";
      } else {
        const te = k.length > 0 && g === k[0].ref.current;
        a.style.top = "0px";
        const Le = Math.max(
          Ve,
          K + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (te ? st : 0) + We
        ) + Ee;
        a.style.height = Le + "px", m.scrollTop = ee - Ve + m.offsetTop;
      }
      a.style.margin = `${tt}px 0`, a.style.minHeight = ue + "px", a.style.maxHeight = W + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    a,
    c,
    m,
    g,
    x,
    s.dir,
    r
  ]);
  Ie(() => T(), [T]);
  const [A, S] = b.useState();
  Ie(() => {
    c && S(window.getComputedStyle(c).zIndex);
  }, [c]);
  const P = b.useCallback(
    (R) => {
      R && v.current === !0 && (T(), y == null || y(), v.current = !1);
    },
    [T, y]
  );
  return /* @__PURE__ */ d.jsx(
    fg,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: A
          },
          children: /* @__PURE__ */ d.jsx(
            we.div,
            {
              ...o,
              ref: f,
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
od.displayName = ug;
var dg = "SelectPopperPosition", xs = b.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = tt,
    ...s
  } = e, i = ho(n);
  return /* @__PURE__ */ d.jsx(
    Vu,
    {
      ...i,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
xs.displayName = dg;
var [fg, vi] = On(Xt, {}), bs = "SelectViewport", sd = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Bt(bs, n), i = vi(bs, n), a = Ae(t, s.onViewportChange), l = b.useRef(0);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ d.jsx(uo.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
        we.div,
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
          onScroll: ce(o.onScroll, (c) => {
            const u = c.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = i;
            if (h != null && h.current && f) {
              const p = Math.abs(l.current - u.scrollTop);
              if (p > 0) {
                const v = window.innerHeight - tt * 2, m = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), x = Math.max(m, g);
                if (x < v) {
                  const y = x + p, T = Math.min(v, y), A = y - T;
                  f.style.height = T + "px", f.style.bottom === "0px" && (u.scrollTop = A > 0 ? A : 0, f.style.justifyContent = "flex-end");
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
sd.displayName = bs;
var id = "SelectGroup", [hg, pg] = On(id), mg = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = oo();
    return /* @__PURE__ */ d.jsx(hg, { scope: n, id: o, children: /* @__PURE__ */ d.jsx(we.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
mg.displayName = id;
var ad = "SelectLabel", vg = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = pg(ad, n);
    return /* @__PURE__ */ d.jsx(we.div, { id: o.id, ...r, ref: t });
  }
);
vg.displayName = ad;
var _r = "SelectItem", [gg, ld] = On(_r), cd = b.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = _t(_r, n), l = Bt(_r, n), c = a.value === r, [u, f] = b.useState(s ?? ""), [h, p] = b.useState(!1), v = Ae(
      t,
      (y) => {
        var T;
        return (T = l.itemRefCallback) == null ? void 0 : T.call(l, y, r, o);
      }
    ), m = oo(), g = b.useRef("touch"), x = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      gg,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: c,
        onItemTextChange: b.useCallback((y) => {
          f((T) => T || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          uo.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ d.jsx(
              we.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": c && h,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: v,
                onFocus: ce(i.onFocus, () => p(!0)),
                onBlur: ce(i.onBlur, () => p(!1)),
                onClick: ce(i.onClick, () => {
                  g.current !== "mouse" && x();
                }),
                onPointerUp: ce(i.onPointerUp, () => {
                  g.current === "mouse" && x();
                }),
                onPointerDown: ce(i.onPointerDown, (y) => {
                  g.current = y.pointerType;
                }),
                onPointerMove: ce(i.onPointerMove, (y) => {
                  var T;
                  g.current = y.pointerType, o ? (T = l.onItemLeave) == null || T.call(l) : g.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ce(i.onPointerLeave, (y) => {
                  var T;
                  y.currentTarget === document.activeElement && ((T = l.onItemLeave) == null || T.call(l));
                }),
                onKeyDown: ce(i.onKeyDown, (y) => {
                  var A;
                  ((A = l.searchRef) == null ? void 0 : A.current) !== "" && y.key === " " || (tg.includes(y.key) && x(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
cd.displayName = _r;
var _n = "SelectItemText", ud = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = _t(_n, n), a = Bt(_n, n), l = ld(_n, n), c = sg(_n, n), [u, f] = b.useState(null), h = Ae(
      t,
      (x) => f(x),
      l.onItemTextChange,
      (x) => {
        var y;
        return (y = a.itemTextRefCallback) == null ? void 0 : y.call(a, x, l.value, l.disabled);
      }
    ), p = u == null ? void 0 : u.textContent, v = b.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: l.value, disabled: l.disabled, children: p }, l.value),
      [l.disabled, l.value, p]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: g } = c;
    return Ie(() => (m(v), () => g(v)), [m, g, v]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(we.span, { id: l.textId, ...s, ref: h }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? no.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
ud.displayName = _n;
var dd = "SelectItemIndicator", fd = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ld(dd, n).isSelected ? /* @__PURE__ */ d.jsx(we.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
fd.displayName = dd;
var ws = "SelectScrollUpButton", yg = b.forwardRef((e, t) => {
  const n = Bt(ws, e.__scopeSelect), r = vi(ws, e.__scopeSelect), [o, s] = b.useState(!1), i = Ae(t, r.onScrollButtonChange);
  return Ie(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    pd,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
yg.displayName = ws;
var Es = "SelectScrollDownButton", hd = b.forwardRef((e, t) => {
  const n = Bt(Es, e.__scopeSelect), r = vi(Es, e.__scopeSelect), [o, s] = b.useState(!1), i = Ae(t, r.onScrollButtonChange);
  return Ie(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < c;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    pd,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
hd.displayName = Es;
var pd = b.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Bt("SelectScrollButton", n), i = b.useRef(null), a = fo(n), l = b.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return b.useEffect(() => () => l(), [l]), Ie(() => {
    var u;
    const c = a().find((f) => f.ref.current === document.activeElement);
    (u = c == null ? void 0 : c.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ d.jsx(
    we.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: ce(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: ce(o.onPointerMove, () => {
        var c;
        (c = s.onItemLeave) == null || c.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: ce(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), xg = "SelectSeparator", bg = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(we.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
bg.displayName = xg;
var Ts = "SelectArrow", md = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ho(n), s = _t(Ts, n), i = Bt(Ts, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ d.jsx(_u, { ...o, ...r, ref: t }) : null;
  }
);
md.displayName = Ts;
function vd(e) {
  return e === "" || e === void 0;
}
var gd = b.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = b.useRef(null), s = Ae(t, o), i = dv(n);
    return b.useEffect(() => {
      const a = o.current, l = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== n && u) {
        const f = new Event("change", { bubbles: !0 });
        u.call(a, n), a.dispatchEvent(f);
      }
    }, [i, n]), /* @__PURE__ */ d.jsx(mi, { asChild: !0, children: /* @__PURE__ */ d.jsx("select", { ...r, ref: s, defaultValue: n }) });
  }
);
gd.displayName = "BubbleSelect";
function yd(e) {
  const t = Et(e), n = b.useRef(""), r = b.useRef(0), o = b.useCallback(
    (i) => {
      const a = n.current + i;
      t(a), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), s = b.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return b.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function xd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = wg(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function wg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Eg = Yu, Tg = Zu, Sg = Qu, Ag = ed, Pg = td, Rg = sd, Cg = cd, Og = ud, Mg = fd, $g = hd, Ng = md;
function Lg({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label, o = typeof t == "string" ? null : t.icon;
    return /* @__PURE__ */ d.jsxs(
      Cg,
      {
        value: n,
        className: "min-h-[2rem] px-6 py-3 flex items-center gap-2 hover:outline-none cursor-pointer hover:bg-grey-600",
        children: [
          /* @__PURE__ */ d.jsx(Mg, { className: "size-5", children: /* @__PURE__ */ d.jsx(ke, { name: "Checkmark", width: "20" }) }),
          /* @__PURE__ */ d.jsx(Og, { asChild: !0, children: /* @__PURE__ */ d.jsxs("span", { className: "flex gap-3 items-center text-white", children: [
            o ? /* @__PURE__ */ d.jsx("img", { src: o, className: "size-5", width: "20", alt: "" }) : null,
            /* @__PURE__ */ d.jsx("span", { children: r }),
            " "
          ] }) })
        ]
      },
      n
    );
  });
}
function Ss({ items: e, native: t }) {
  return t ? /* @__PURE__ */ d.jsx(Rm, { items: e }) : /* @__PURE__ */ d.jsx(Lg, { items: e });
}
function jg(e) {
  const {
    defaultValue: t,
    arrowIcon: n = "ChevronDown",
    children: r,
    ...o
  } = e;
  return /* @__PURE__ */ d.jsxs(Eg, { defaultValue: t, ...o, children: [
    /* @__PURE__ */ d.jsxs(Tg, { className: "flex items-center justify-between w-full bg-transparent border border-grey-500 rounded-[0.5rem] text-gray-200 focus:ring-2 ring-blue-500 px-4 py-3", children: [
      /* @__PURE__ */ d.jsx(Sg, {}),
      /* @__PURE__ */ d.jsx(ke, { name: n, width: "20" })
    ] }),
    /* @__PURE__ */ d.jsx(Ag, { children: /* @__PURE__ */ d.jsxs(Pg, { className: "rounded-[0.5rem] overflow-clip text-white border border-white bg-light_buttonGlass backdrop-blur z-[1000] isolate", children: [
      /* @__PURE__ */ d.jsx(Rg, { className: "flex flex-col", children: r }),
      /* @__PURE__ */ d.jsx($g, {}),
      /* @__PURE__ */ d.jsx(Ng, {})
    ] }) })
  ] });
}
function kg(e, t) {
  const {
    defaultValue: n,
    children: r,
    arrowIcon: o = "ChevronDown",
    ...s
  } = ze("select", e), [i, a] = ve(null);
  function l(u) {
    var h, p, v;
    e != null && e.onChange && e.onChange(u), e != null && e.onValueChange && e.onValueChange(u.target.value);
    const f = (v = (p = (h = u == null ? void 0 : u.target) == null ? void 0 : h.querySelector("option:checked")) == null ? void 0 : p.dataset) == null ? void 0 : v.icon;
    f && a(f);
  }
  const c = Re((u) => (l({ target: u }), t), []);
  return /* @__PURE__ */ d.jsxs("div", { ref: c, ...s, children: [
    i ? /* @__PURE__ */ d.jsx("img", { src: i, width: "20", className: "size-5", alt: "" }) : null,
    /* @__PURE__ */ d.jsx("div", { className: "absolute w-[2.5rem] z-10 right-0 pointer-events-none top-0 bottom-0 items-center justify-center flex cursor-pointer", children: /* @__PURE__ */ d.jsx(ke, { name: o, className: "w-4 h-4 text-white" }) }),
    /* @__PURE__ */ d.jsx("select", { onChange: l, defaultValue: n, children: r })
  ] });
}
const Ig = Vt(kg);
function Dg(e) {
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
function Vg(e, t) {
  const { options: n, native: r = !1, children: o } = Dg(e), s = _.isValidElement(o) ? _.cloneElement(o, { native: r }) : o;
  return r ? /* @__PURE__ */ d.jsx(Ig, { ref: t, ...e, children: n ? /* @__PURE__ */ d.jsx(Ss, { items: n, native: !0 }) : s }) : /* @__PURE__ */ d.jsx(jg, { ref: t, ...e, children: n ? /* @__PURE__ */ d.jsx(Ss, { items: n }) : s });
}
const _g = Object.assign(Vt(Vg), {
  Options: Ss
}), bd = ge(null);
function hl(e, t) {
  const n = new CustomEvent("updateFieldValues", {
    detail: {
      name: e,
      fields: t
    }
  }), r = document.getElementById(e);
  r && r.dispatchEvent(n);
}
function gi() {
  const e = oe(bd);
  return e ? { ...e, updateFields: hl } : { updateFields: hl };
}
function Bg({
  children: e,
  value: t
}) {
  return /* @__PURE__ */ d.jsx(bd.Provider, { value: t, children: typeof e == "function" ? e(t) : e });
}
function wd(e) {
  return e.includes("[]");
}
function Fg(e, t) {
  const r = t.keyof().options.reduce(
    (o, s) => {
      if (e.has(s)) {
        const i = e.getAll(s);
        o[s] = i.length > 1 && wd(s) ? i : i[0];
      }
      return o;
    },
    /* @__PURE__ */ Object.create(null)
  );
  return t.parse(r);
}
function Ug(e) {
  return Array.from(e.keys()).reduce((n, r) => {
    if (e.has(r)) {
      const o = e.getAll(r);
      n[r] = o.length > 1 && wd(r) ? o : o[0];
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
const Hg = (e) => sessionStorage.getItem(e), zg = (e) => (window.addEventListener("storage", e), () => {
  window.removeEventListener("storage", e);
});
function Ed(e, t) {
  sessionStorage.setItem(e, JSON.stringify(t)), window.dispatchEvent(new Event("storage"));
}
function C4(e) {
  const t = _p(
    zg,
    Hg.bind(null, e)
  );
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
}
function O4(e, t) {
  me(() => {
    Ed(e, t);
  }, [e, t]);
}
function Wg({
  children: e,
  name: t,
  method: n = "POST",
  onAction: r,
  schema: o,
  ...s
}) {
  const [i, a] = ve(), [l, c] = ve({}), u = t;
  async function f(v) {
    v.preventDefault();
    const m = new FormData(v.currentTarget);
    try {
      const g = o ? Fg(m, o) : Ug(m);
      if (r && typeof r == "function") {
        const x = await r(v, g);
        if (x || c(g), x) {
          if (x.data && c(x.data), x.error) throw x.error;
          x.persist && u && Ed(u, x.data), a({});
        }
      }
    } catch (g) {
      if (typeof (g == null ? void 0 : g.flatten) == "function") {
        a({ [u]: g.flatten() });
        return;
      }
      if (g.message) {
        a({
          [u]: { formErrors: [g.message], fieldErrors: [] }
        });
        return;
      }
    }
  }
  const h = Q(null);
  function p(v) {
    const m = v.detail;
    m.name === u && h.current && Object.keys(m.fields).forEach((g) => {
      var y;
      const x = m.fields[g];
      if (h && h.current) {
        const T = (y = h == null ? void 0 : h.current) == null ? void 0 : y.querySelector(
          `input[name=${g}]`
        );
        T && (T.value = x);
      }
    });
  }
  return me(() => {
    const v = h.current;
    return v && v.addEventListener("updateFieldValues", p), () => {
      v && v.removeEventListener("updateFieldValues", p);
    };
  }, []), /* @__PURE__ */ d.jsx(
    Bg,
    {
      value: {
        name: t,
        data: l,
        setData: c,
        ref: h,
        errors: i && (i == null ? void 0 : i[u])
      },
      children: /* @__PURE__ */ d.jsxs(
        "form",
        {
          method: n,
          onSubmit: f,
          noValidate: !0,
          className: "flex flex-col gap-4 items-stretch",
          ref: h,
          id: u,
          ...s,
          children: [
            t ? /* @__PURE__ */ d.jsx("input", { type: "hidden", name: "name", value: t }) : null,
            typeof e == "function" ? e({ errors: i, data: l }) : e
          ]
        }
      )
    }
  );
}
const M4 = Object.assign(Wg, {
  // Success: FormSuccess,
  // Initial: FormInitial,
});
function $4() {
  const { errors: e } = gi();
  return !e || !e.formErrors ? null : /* @__PURE__ */ d.jsx("div", { className: "bg-red-600 text-white px-4 py-2 rounded-[0.5rem] text-15", children: (e == null ? void 0 : e.formErrors[0]) || "There was a problem submitting your form" });
}
function N4({ message: e = "Success!" }) {
  const t = gi();
  return !t || !t.success ? null : /* @__PURE__ */ d.jsx("div", { className: "bg-green-600 text-white px-6 py-4 rounded-[9px] text-18", children: e });
}
function yi({
  name: e,
  children: t,
  asChild: n = !1,
  className: r = "flex flex-col items-start gap-1"
}) {
  var i;
  const { errors: o } = gi(), s = (i = o == null ? void 0 : o.fieldErrors) == null ? void 0 : i[e];
  return /* @__PURE__ */ d.jsx(Tm, { value: { name: e, error: s }, children: /* @__PURE__ */ d.jsx(ro, { asChild: n, fallbackAs: "div", className: r, children: /* @__PURE__ */ d.jsx(d.Fragment, { children: t }) }) });
}
function qg() {
  const { error: e } = ni(), t = e == null ? void 0 : e[0];
  return e ? /* @__PURE__ */ d.jsxs("div", { className: "text-14 leading-tight inline-flex gap-2 mt-2 items-center ", children: [
    /* @__PURE__ */ d.jsxs("span", { className: " flex-shrink-0 flex items-center justify-center h-[1.25em]", children: [
      /* @__PURE__ */ d.jsx(ke, { name: "Warning", className: "size-5" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Error" })
    ] }),
    /* @__PURE__ */ d.jsx("span", { className: "text-white", children: t })
  ] }) : null;
}
function Kg(e, t) {
  const { href: n, children: r, ...o } = ze(
    "a",
    e
  );
  return /* @__PURE__ */ d.jsx("a", { href: n, ref: t, ...o, children: r });
}
const L4 = Vt(Kg);
function j4(e) {
  const { children: t, href: n, ...r } = ze("button", e);
  return /* @__PURE__ */ d.jsx("a", { href: n, ...r, children: t });
}
const xi = ge({});
function bi(e) {
  const t = Q(null);
  return t.current === null && (t.current = e()), t.current;
}
const po = ge(null), wi = ge({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class Gg extends b.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Yg({ children: e, isPresent: t }) {
  const n = to(), r = Q(null), o = Q({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = oe(wi);
  return tu(() => {
    const { width: i, height: a, top: l, left: c } = o.current;
    if (t || !r.current || !i || !a)
      return;
    r.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return s && (u.nonce = s), document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), d.jsx(Gg, { isPresent: t, childRef: r, sizeRef: o, children: b.cloneElement(e, { ref: r }) });
}
const Xg = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = bi(Zg), l = to(), c = Re((f) => {
    a.set(f, !0);
    for (const h of a.values())
      if (!h)
        return;
    r && r();
  }, [a, r]), u = Ce(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: c,
      register: (f) => (a.set(f, !1), () => a.delete(f))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random(), c] : [n, c]
  );
  return Ce(() => {
    a.forEach((f, h) => a.set(h, !1));
  }, [n]), b.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = d.jsx(Yg, { isPresent: n, children: e })), d.jsx(po.Provider, { value: u, children: e });
};
function Zg() {
  return /* @__PURE__ */ new Map();
}
function Td(e = !0) {
  const t = oe(po);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = to();
  me(() => {
    e && o(s);
  }, [e]);
  const i = Re(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const xr = (e) => e.key || "";
function pl(e) {
  const t = [];
  return Bp.forEach(e, (n) => {
    Fp(n) && t.push(n);
  }), t;
}
const Ei = typeof window < "u", Sd = Ei ? eu : me, Jg = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = Td(i), c = Ce(() => pl(e), [e]), u = i && !a ? [] : c.map(xr), f = Q(!0), h = Q(c), p = bi(() => /* @__PURE__ */ new Map()), [v, m] = ve(c), [g, x] = ve(c);
  Sd(() => {
    f.current = !1, h.current = c;
    for (let A = 0; A < g.length; A++) {
      const S = xr(g[A]);
      u.includes(S) ? p.delete(S) : p.get(S) !== !0 && p.set(S, !1);
    }
  }, [g, u.length, u.join("-")]);
  const y = [];
  if (c !== v) {
    let A = [...c];
    for (let S = 0; S < g.length; S++) {
      const P = g[S], R = xr(P);
      u.includes(R) || (A.splice(S, 0, P), y.push(P));
    }
    s === "wait" && y.length && (A = y), x(pl(A)), m(c);
    return;
  }
  process.env.NODE_ENV !== "production" && s === "wait" && g.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: T } = oe(xi);
  return d.jsx(d.Fragment, { children: g.map((A) => {
    const S = xr(A), P = i && !a ? !1 : c === g || u.includes(S), R = () => {
      if (p.has(S))
        p.set(S, !0);
      else
        return;
      let O = !0;
      p.forEach((L) => {
        L || (O = !1);
      }), O && (T == null || T(), x(h.current), i && (l == null || l()), r && r());
    };
    return d.jsx(Xg, { isPresent: P, initial: !f.current || n ? void 0 : !1, custom: P ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: P ? void 0 : R, children: A }, S);
  }) });
}, Be = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let Mn = Be, kt = Be;
process.env.NODE_ENV !== "production" && (Mn = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, kt = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Qg = {
  skipAnimations: !1,
  useManualTiming: !1
};
function e2(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, o = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    s.has(c) && (l.schedule(c), e()), c(i);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, u = !1, f = !1) => {
      const p = f && r ? t : n;
      return u && s.add(c), p.has(c) || p.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.delete(c), s.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (i = c, r) {
        o = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, o && (o = !1, l.process(c));
    }
  };
  return l;
}
const br = [
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
], t2 = 40;
function Ad(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = br.reduce((x, y) => (x[y] = e2(s), x), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: f, postRender: h } = i, p = () => {
    const x = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(x - o.timestamp, t2), 1), o.timestamp = x, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), u.process(o), f.process(o), h.process(o), o.isProcessing = !1, n && t && (r = !1, e(p));
  }, v = () => {
    n = !0, r = !0, o.isProcessing || e(p);
  };
  return { schedule: br.reduce((x, y) => {
    const T = i[y];
    return x[y] = (A, S = !1, P = !1) => (n || v(), T.schedule(A, S, P)), x;
  }, {}), cancel: (x) => {
    for (let y = 0; y < br.length; y++)
      i[br[y]].cancel(x);
  }, state: o, steps: i };
}
const { schedule: de, cancel: It, state: Oe, steps: zo } = Ad(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0), Pd = ge({ strict: !1 }), ml = {
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
}, wn = {};
for (const e in ml)
  wn[e] = {
    isEnabled: (t) => ml[e].some((n) => !!t[n])
  };
function n2(e) {
  for (const t in e)
    wn[t] = {
      ...wn[t],
      ...e[t]
    };
}
const r2 = /* @__PURE__ */ new Set([
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
function Br(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || r2.has(e);
}
let Rd = (e) => !Br(e);
function o2(e) {
  e && (Rd = (t) => t.startsWith("on") ? !Br(t) : e(t));
}
try {
  o2(require("@emotion/is-prop-valid").default);
} catch {
}
function s2(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Rd(o) || n === !0 && Br(o) || !t && !Br(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
const vl = /* @__PURE__ */ new Set();
function mo(e, t, n) {
  e || vl.has(t) || (console.warn(t), vl.add(t));
}
function i2(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && mo(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
const vo = ge({});
function Qn(e) {
  return typeof e == "string" || Array.isArray(e);
}
function go(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ti = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Si = ["initial", ...Ti];
function yo(e) {
  return go(e.animate) || Si.some((t) => Qn(e[t]));
}
function Cd(e) {
  return !!(yo(e) || e.variants);
}
function a2(e, t) {
  if (yo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Qn(n) ? n : void 0,
      animate: Qn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function l2(e) {
  const { initial: t, animate: n } = a2(e, oe(vo));
  return Ce(() => ({ initial: t, animate: n }), [gl(t), gl(n)]);
}
function gl(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const c2 = Symbol.for("motionComponentSymbol");
function cn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function u2(e, t, n) {
  return Re(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : cn(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Ai = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), d2 = "framerAppearId", Od = "data-" + Ai(d2), { schedule: Pi, cancel: k4 } = Ad(queueMicrotask, !1), Md = ge({});
function f2(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = oe(vo), l = oe(Pd), c = oe(po), u = oe(wi).reducedMotion, f = Q(null);
  r = r || l.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const h = f.current, p = oe(Md);
  h && !h.projection && o && (h.type === "html" || h.type === "svg") && h2(f.current, n, o, p);
  const v = Q(!1);
  tu(() => {
    h && v.current && h.update(n, c);
  });
  const m = n[Od], g = Q(!!m && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, m)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, m)));
  return Sd(() => {
    h && (v.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), Pi.render(h.render), g.current && h.animationState && h.animationState.animateChanges());
  }), me(() => {
    h && (!g.current && h.animationState && h.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      var x;
      (x = window.MotionHandoffMarkAsComplete) === null || x === void 0 || x.call(window, m);
    }), g.current = !1));
  }), h;
}
function h2(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : $d(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && cn(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    layoutScroll: l,
    layoutRoot: c
  });
}
function $d(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : $d(e.parent);
}
function p2({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && n2(e);
  function a(c, u) {
    let f;
    const h = {
      ...oe(wi),
      ...c,
      layoutId: m2(c)
    }, { isStatic: p } = h, v = l2(c), m = r(c, p);
    if (!p && Ei) {
      v2(h, e);
      const g = g2(h);
      f = g.MeasureLayout, v.visualElement = f2(o, m, h, t, g.ProjectionNode);
    }
    return d.jsxs(vo.Provider, { value: v, children: [f && v.visualElement ? d.jsx(f, { visualElement: v.visualElement, ...h }) : null, n(o, c, u2(m, v.visualElement, u), m, p, v.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = Vt(a);
  return l[c2] = o, l;
}
function m2({ layoutId: e }) {
  const t = oe(xi).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function v2(e, t) {
  const n = oe(Pd).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Mn(!1, r) : kt(!1, r);
  }
}
function g2(e) {
  const { drag: t, layout: n } = wn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const y2 = [
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
function Ri(e) {
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
      !!(y2.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function yl(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Ci(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = yl(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = yl(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const As = (e) => Array.isArray(e), x2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), b2 = (e) => As(e) ? e[e.length - 1] || 0 : e, Ne = (e) => !!(e && e.getVelocity);
function $r(e) {
  const t = Ne(e) ? e.get() : e;
  return x2(t) ? t.toValue() : t;
}
function w2({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: E2(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const Nd = (e) => (t, n) => {
  const r = oe(vo), o = oe(po), s = () => w2(e, t, r, o);
  return n ? s() : bi(s);
};
function E2(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const h in s)
    o[h] = $r(s[h]);
  let { initial: i, animate: a } = e;
  const l = yo(e), c = Cd(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const f = u ? a : i;
  if (f && typeof f != "boolean" && !go(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let p = 0; p < h.length; p++) {
      const v = Ci(e, h[p]);
      if (v) {
        const { transitionEnd: m, transition: g, ...x } = v;
        for (const y in x) {
          let T = x[y];
          if (Array.isArray(T)) {
            const A = u ? T.length - 1 : 0;
            T = T[A];
          }
          T !== null && (o[y] = T);
        }
        for (const y in m)
          o[y] = m[y];
      }
    }
  }
  return o;
}
const $n = [
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
], Jt = new Set($n), Ld = (e) => (t) => typeof t == "string" && t.startsWith(e), jd = /* @__PURE__ */ Ld("--"), T2 = /* @__PURE__ */ Ld("var(--"), Oi = (e) => T2(e) ? S2.test(e.split("/*")[0].trim()) : !1, S2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, kd = (e, t) => t && typeof e == "number" ? t.transform(e) : e, At = (e, t, n) => n > t ? t : n < e ? e : n, Nn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, er = {
  ...Nn,
  transform: (e) => At(0, 1, e)
}, wr = {
  ...Nn,
  default: 1
}, ar = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Ct = /* @__PURE__ */ ar("deg"), ht = /* @__PURE__ */ ar("%"), V = /* @__PURE__ */ ar("px"), A2 = /* @__PURE__ */ ar("vh"), P2 = /* @__PURE__ */ ar("vw"), xl = {
  ...ht,
  parse: (e) => ht.parse(e) / 100,
  transform: (e) => ht.transform(e * 100)
}, R2 = {
  // Border props
  borderWidth: V,
  borderTopWidth: V,
  borderRightWidth: V,
  borderBottomWidth: V,
  borderLeftWidth: V,
  borderRadius: V,
  radius: V,
  borderTopLeftRadius: V,
  borderTopRightRadius: V,
  borderBottomRightRadius: V,
  borderBottomLeftRadius: V,
  // Positioning props
  width: V,
  maxWidth: V,
  height: V,
  maxHeight: V,
  top: V,
  right: V,
  bottom: V,
  left: V,
  // Spacing props
  padding: V,
  paddingTop: V,
  paddingRight: V,
  paddingBottom: V,
  paddingLeft: V,
  margin: V,
  marginTop: V,
  marginRight: V,
  marginBottom: V,
  marginLeft: V,
  // Misc
  backgroundPositionX: V,
  backgroundPositionY: V
}, C2 = {
  rotate: Ct,
  rotateX: Ct,
  rotateY: Ct,
  rotateZ: Ct,
  scale: wr,
  scaleX: wr,
  scaleY: wr,
  scaleZ: wr,
  skew: Ct,
  skewX: Ct,
  skewY: Ct,
  distance: V,
  translateX: V,
  translateY: V,
  translateZ: V,
  x: V,
  y: V,
  z: V,
  perspective: V,
  transformPerspective: V,
  opacity: er,
  originX: xl,
  originY: xl,
  originZ: V
}, bl = {
  ...Nn,
  transform: Math.round
}, Mi = {
  ...R2,
  ...C2,
  zIndex: bl,
  size: V,
  // SVG
  fillOpacity: er,
  strokeOpacity: er,
  numOctaves: bl
}, O2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, M2 = $n.length;
function $2(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < M2; s++) {
    const i = $n[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = kd(a, Mi[i]);
      if (!l) {
        o = !1;
        const u = O2[i] || i;
        r += `${u}(${c}) `;
      }
      n && (t[i] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function $i(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Jt.has(l)) {
      i = !0;
      continue;
    } else if (jd(l)) {
      o[l] = c;
      continue;
    } else {
      const u = kd(c, Mi[l]);
      l.startsWith("origin") ? (a = !0, s[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (i || n ? r.transform = $2(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const N2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, L2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function j2(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? N2 : L2;
  e[s.offset] = V.transform(-r);
  const i = V.transform(t), a = V.transform(n);
  e[s.array] = `${i} ${a}`;
}
function wl(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function k2(e, t, n) {
  const r = wl(t, e.x, e.width), o = wl(n, e.y, e.height);
  return `${r} ${o}`;
}
function Ni(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: s,
  pathLength: i,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, f) {
  if ($i(e, c, f), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p, dimensions: v } = e;
  h.transform && (v && (p.transform = h.transform), delete h.transform), v && (o !== void 0 || s !== void 0 || p.transform) && (p.transformOrigin = k2(v, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), i !== void 0 && j2(h, i, a, l, !1);
}
const Li = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Id = () => ({
  ...Li(),
  attrs: {}
}), ji = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Dd(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const Vd = /* @__PURE__ */ new Set([
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
function _d(e, t, n, r) {
  Dd(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Vd.has(o) ? o : Ai(o), t.attrs[o]);
}
const Fr = {};
function I2(e) {
  Object.assign(Fr, e);
}
function Bd(e, { layout: t, layoutId: n }) {
  return Jt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Fr[e] || e === "opacity");
}
function ki(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (Ne(o[i]) || t.style && Ne(t.style[i]) || Bd(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function Fd(e, t, n) {
  const r = ki(e, t, n);
  for (const o in e)
    if (Ne(e[o]) || Ne(t[o])) {
      const s = $n.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function D2(e, t) {
  try {
    t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const El = ["x", "y", "width", "height", "cx", "cy", "r"], V2 = {
  useVisualState: Nd({
    scrapeMotionValuesFromProps: Fd,
    createRenderState: Id,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const a in o)
          if (Jt.has(a)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let i = !t;
      if (t)
        for (let a = 0; a < El.length; a++) {
          const l = El[a];
          e[l] !== t[l] && (i = !0);
        }
      i && de.read(() => {
        D2(n, r), de.render(() => {
          Ni(r, o, ji(n.tagName), e.transformTemplate), _d(n, r);
        });
      });
    }
  })
}, _2 = {
  useVisualState: Nd({
    scrapeMotionValuesFromProps: ki,
    createRenderState: Li
  })
};
function Ud(e, t, n) {
  for (const r in t)
    !Ne(t[r]) && !Bd(r, n) && (e[r] = t[r]);
}
function B2({ transformTemplate: e }, t) {
  return Ce(() => {
    const n = Li();
    return $i(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function F2(e, t) {
  const n = e.style || {}, r = {};
  return Ud(r, n, e), Object.assign(r, B2(e, t)), r;
}
function U2(e, t) {
  const n = {}, r = F2(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function H2(e, t, n, r) {
  const o = Ce(() => {
    const s = Id();
    return Ni(s, t, ji(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Ud(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function z2(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (Ri(n) ? H2 : U2)(r, s, i, n), c = s2(r, typeof n == "string", e), u = n !== jr ? { ...c, ...l, ref: o } : {}, { children: f } = r, h = Ce(() => Ne(f) ? f.get() : f, [f]);
    return Up(n, {
      ...u,
      children: h
    });
  };
}
function W2(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Ri(r) ? V2 : _2,
      preloadedFeatures: e,
      useRender: z2(o),
      createVisualElement: t,
      Component: r
    };
    return p2(i);
  };
}
function Hd(e, t) {
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
function xo(e, t, n) {
  const r = e.getProps();
  return Ci(r, t, n !== void 0 ? n : r.custom, e);
}
function Ii(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const zd = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...$n
]);
let Nr;
function q2() {
  Nr = void 0;
}
const pt = {
  now: () => (Nr === void 0 && pt.set(Oe.isProcessing || Qg.useManualTiming ? Oe.timestamp : performance.now()), Nr),
  set: (e) => {
    Nr = e, queueMicrotask(q2);
  }
};
function Di(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Vi(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class _i {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Di(this.subscriptions, t), () => Vi(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < o; s++) {
          const i = this.subscriptions[s];
          i && i(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Wd(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Tl = 30, K2 = (e) => !isNaN(parseFloat(e));
class G2 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "12.0.1", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      const s = pt.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = pt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = K2(this.current));
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
    return process.env.NODE_ENV !== "production" && mo(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new _i());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), de.read(() => {
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
    const t = pt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Tl)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Tl);
    return Wd(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function tr(e, t) {
  return new G2(e, t);
}
function Y2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, tr(n));
}
function X2(e, t) {
  const n = xo(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = b2(s[i]);
    Y2(e, i, a);
  }
}
function Z2(e) {
  return !!(Ne(e) && e.add);
}
function Ps(e, t) {
  const n = e.getValue("willChange");
  if (Z2(n))
    return n.add(t);
}
function qd(e) {
  return e.props[Od];
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const J2 = /* @__PURE__ */ Bi(() => window.ScrollTimeline !== void 0);
class Q2 {
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
    const r = this.animations.map((o) => {
      if (J2() && o.attachTimeline)
        return o.attachTimeline(t);
      if (typeof n == "function")
        return n(o);
    });
    return () => {
      r.forEach((o, s) => {
        o && o(), this.animations[s].stop();
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
class ey extends Q2 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
const mt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, wt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function Fi(e) {
  return typeof e == "function";
}
function Sl(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Ui = (e) => Array.isArray(e) && typeof e[0] == "number", ty = {
  linearEasing: void 0
};
function ny(e, t) {
  const n = /* @__PURE__ */ Bi(e);
  return () => {
    var r;
    return (r = ty[t]) !== null && r !== void 0 ? r : n();
  };
}
const Ur = /* @__PURE__ */ ny(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), En = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Kd = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ En(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Gd(e) {
  return !!(typeof e == "function" && Ur() || !e || typeof e == "string" && (e in Rs || Ur()) || Ui(e) || Array.isArray(e) && e.every(Gd));
}
const Bn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Rs = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Bn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Bn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Bn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Bn([0.33, 1.53, 0.69, 0.99])
};
function Yd(e, t) {
  if (e)
    return typeof e == "function" && Ur() ? Kd(e, t) : Ui(e) ? Bn(e) : Array.isArray(e) ? e.map((n) => Yd(n, t) || Rs.easeOut) : Rs[e];
}
const Xd = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, ry = 1e-7, oy = 12;
function sy(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = Xd(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > ry && ++a < oy);
  return i;
}
function lr(e, t, n, r) {
  if (e === t && n === r)
    return Be;
  const o = (s) => sy(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Xd(o(s), t, r);
}
const Zd = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Jd = (e) => (t) => 1 - e(1 - t), Qd = /* @__PURE__ */ lr(0.33, 1.53, 0.69, 0.99), Hi = /* @__PURE__ */ Jd(Qd), ef = /* @__PURE__ */ Zd(Hi), tf = (e) => (e *= 2) < 1 ? 0.5 * Hi(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), zi = (e) => 1 - Math.sin(Math.acos(e)), nf = Jd(zi), rf = Zd(zi), of = (e) => /^0[^.\s]+$/u.test(e);
function iy(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || of(e) : !0;
}
const Wn = (e) => Math.round(e * 1e5) / 1e5, Wi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ay(e) {
  return e == null;
}
const ly = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, qi = (e, t) => (n) => !!(typeof n == "string" && ly.test(n) && n.startsWith(e) || t && !ay(n) && Object.prototype.hasOwnProperty.call(n, t)), sf = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(Wi);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, cy = (e) => At(0, 255, e), Wo = {
  ...Nn,
  transform: (e) => Math.round(cy(e))
}, qt = {
  test: /* @__PURE__ */ qi("rgb", "red"),
  parse: /* @__PURE__ */ sf("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Wo.transform(e) + ", " + Wo.transform(t) + ", " + Wo.transform(n) + ", " + Wn(er.transform(r)) + ")"
};
function uy(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Cs = {
  test: /* @__PURE__ */ qi("#"),
  parse: uy,
  transform: qt.transform
}, un = {
  test: /* @__PURE__ */ qi("hsl", "hue"),
  parse: /* @__PURE__ */ sf("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + ht.transform(Wn(t)) + ", " + ht.transform(Wn(n)) + ", " + Wn(er.transform(r)) + ")"
}, $e = {
  test: (e) => qt.test(e) || Cs.test(e) || un.test(e),
  parse: (e) => qt.test(e) ? qt.parse(e) : un.test(e) ? un.parse(e) : Cs.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? qt.transform(e) : un.transform(e)
}, dy = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function fy(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Wi)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(dy)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const af = "number", lf = "color", hy = "var", py = "var(", Al = "${}", my = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function nr(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(my, (l) => ($e.test(l) ? (r.color.push(s), o.push(lf), n.push($e.parse(l))) : l.startsWith(py) ? (r.var.push(s), o.push(hy), n.push(l)) : (r.number.push(s), o.push(af), n.push(parseFloat(l))), ++s, Al)).split(Al);
  return { values: n, split: a, indexes: r, types: o };
}
function cf(e) {
  return nr(e).values;
}
function uf(e) {
  const { split: t, types: n } = nr(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === af ? s += Wn(o[i]) : a === lf ? s += $e.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const vy = (e) => typeof e == "number" ? 0 : e;
function gy(e) {
  const t = cf(e);
  return uf(e)(t.map(vy));
}
const Dt = {
  test: fy,
  parse: cf,
  createTransformer: uf,
  getAnimatableNone: gy
}, yy = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function xy(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Wi) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = yy.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const by = /\b([a-z-]*)\(.*?\)/gu, Os = {
  ...Dt,
  getAnimatableNone: (e) => {
    const t = e.match(by);
    return t ? t.map(xy).join(" ") : e;
  }
}, wy = {
  ...Mi,
  // Color props
  color: $e,
  backgroundColor: $e,
  outlineColor: $e,
  fill: $e,
  stroke: $e,
  // Border props
  borderColor: $e,
  borderTopColor: $e,
  borderRightColor: $e,
  borderBottomColor: $e,
  borderLeftColor: $e,
  filter: Os,
  WebkitFilter: Os
}, Ki = (e) => wy[e];
function df(e, t) {
  let n = Ki(e);
  return n !== Os && (n = Dt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Ey = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ty(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !Ey.has(s) && nr(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = df(n, o);
}
const Pl = (e) => e === Nn || e === V, Rl = (e, t) => parseFloat(e.split(", ")[t]), Cl = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return Rl(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? Rl(s[1], e) : 0;
  }
}, Sy = /* @__PURE__ */ new Set(["x", "y", "z"]), Ay = $n.filter((e) => !Sy.has(e));
function Py(e) {
  const t = [];
  return Ay.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Tn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Cl(4, 13),
  y: Cl(5, 14)
};
Tn.translateX = Tn.x;
Tn.translateY = Tn.y;
const Gt = /* @__PURE__ */ new Set();
let Ms = !1, $s = !1;
function ff() {
  if ($s) {
    const e = Array.from(Gt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = Py(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([s, i]) => {
        var a;
        (a = r.getValue(s)) === null || a === void 0 || a.set(i);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  $s = !1, Ms = !1, Gt.forEach((e) => e.complete()), Gt.clear();
}
function hf() {
  Gt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && ($s = !0);
  });
}
function Ry() {
  hf(), ff();
}
class Gi {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Gt.add(this), Ms || (Ms = !0, de.read(hf), de.resolveKeyframes(ff))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const i = o == null ? void 0 : o.get(), a = t[t.length - 1];
          if (i !== void 0)
            t[0] = i;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && i === void 0 && o.set(t[0]);
        } else
          t[s] = t[s - 1];
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Gt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Gt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const pf = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Cy = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Oy(e) {
  const t = Cy.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const My = 4;
function mf(e, t, n = 1) {
  kt(n <= My, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = Oy(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return pf(i) ? parseFloat(i) : i;
  }
  return Oi(o) ? mf(o, t, n + 1) : o;
}
const vf = (e) => (t) => t.test(e), $y = {
  test: (e) => e === "auto",
  parse: (e) => e
}, gf = [Nn, V, ht, Ct, P2, A2, $y], Ol = (e) => gf.find(vf(e));
class yf extends Gi {
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), Oi(c))) {
        const u = mf(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !zd.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = Ol(o), a = Ol(s);
    if (i !== a)
      if (Pl(i) && Pl(a))
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
      iy(t[o]) && r.push(o);
    r.length && Ty(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Tn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current)
      return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const i = o.length - 1, a = o[i];
    o[i] = Tn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const Ml = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Dt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Ny(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function Ly(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = Ml(o, t), a = Ml(s, t);
  return Mn(i === a, `You are trying to animate ${t} from "${o}" to "${s}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${s} via the \`style\` property.`), !i || !a ? !1 : Ny(e) || (n === "spring" || Fi(n)) && r;
}
const jy = (e) => e !== null;
function bo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(jy), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const ky = 40;
class xf {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = pt.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: s,
      repeatType: i,
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > ky ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Ry(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = pt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !Ly(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l(bo(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const Ns = 2e4;
function bf(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ns; )
    t += n, r = e.next(t);
  return t >= Ns ? 1 / 0 : t;
}
const pe = (e, t, n) => e + (t - e) * n;
function qo(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Iy({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = qo(l, a, e + 1 / 3), s = qo(l, a, e), i = qo(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function Hr(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ko = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, Dy = [Cs, qt, un], Vy = (e) => Dy.find((t) => t.test(e));
function $l(e) {
  const t = Vy(e);
  if (Mn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === un && (n = Iy(n)), n;
}
const Nl = (e, t) => {
  const n = $l(e), r = $l(t);
  if (!n || !r)
    return Hr(e, t);
  const o = { ...n };
  return (s) => (o.red = Ko(n.red, r.red, s), o.green = Ko(n.green, r.green, s), o.blue = Ko(n.blue, r.blue, s), o.alpha = pe(n.alpha, r.alpha, s), qt.transform(o));
}, _y = (e, t) => (n) => t(e(n)), cr = (...e) => e.reduce(_y), Ls = /* @__PURE__ */ new Set(["none", "hidden"]);
function By(e, t) {
  return Ls.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Fy(e, t) {
  return (n) => pe(e, t, n);
}
function Yi(e) {
  return typeof e == "number" ? Fy : typeof e == "string" ? Oi(e) ? Hr : $e.test(e) ? Nl : zy : Array.isArray(e) ? wf : typeof e == "object" ? $e.test(e) ? Nl : Uy : Hr;
}
function wf(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => Yi(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function Uy(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Yi(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function Hy(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const zy = (e, t) => {
  const n = Dt.createTransformer(t), r = nr(e), o = nr(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Ls.has(e) && !o.values.length || Ls.has(t) && !r.values.length ? By(e, t) : cr(wf(Hy(r, o), o.values), n) : (Mn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Hr(e, t));
};
function Ef(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? pe(e, t, n) : Yi(e)(e, t);
}
const Wy = 5;
function Tf(e, t, n) {
  const r = Math.max(t - Wy, 0);
  return Wd(n - e(r), t - r);
}
const he = {
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
}, Go = 1e-3;
function qy({ duration: e = he.duration, bounce: t = he.bounce, velocity: n = he.velocity, mass: r = he.mass }) {
  let o, s;
  Mn(e <= /* @__PURE__ */ mt(he.maxDuration), "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = At(he.minDamping, he.maxDamping, i), e = At(he.minDuration, he.maxDuration, /* @__PURE__ */ wt(e)), i < 1 ? (o = (c) => {
    const u = c * i, f = u * e, h = u - n, p = js(c, i), v = Math.exp(-f);
    return Go - h / p * v;
  }, s = (c) => {
    const f = c * i * e, h = f * n + n, p = Math.pow(i, 2) * Math.pow(c, 2) * e, v = Math.exp(-f), m = js(Math.pow(c, 2), i);
    return (-o(c) + Go > 0 ? -1 : 1) * ((h - p) * v) / m;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), f = (c - n) * e + 1;
    return -Go + u * f;
  }, s = (c) => {
    const u = Math.exp(-c * e), f = (n - c) * (e * e);
    return u * f;
  });
  const a = 5 / e, l = Gy(o, s, a);
  if (e = /* @__PURE__ */ mt(e), isNaN(l))
    return {
      stiffness: he.stiffness,
      damping: he.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Ky = 12;
function Gy(e, t, n) {
  let r = n;
  for (let o = 1; o < Ky; o++)
    r = r - e(r) / t(r);
  return r;
}
function js(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Yy = ["duration", "bounce"], Xy = ["stiffness", "damping", "mass"];
function Ll(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Zy(e) {
  let t = {
    velocity: he.velocity,
    stiffness: he.stiffness,
    damping: he.damping,
    mass: he.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ll(e, Xy) && Ll(e, Yy))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * At(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: he.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = qy(e);
      t = {
        ...t,
        ...n,
        mass: he.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Sf(e = he.visualDuration, t = he.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: c, mass: u, duration: f, velocity: h, isResolvedFromDuration: p } = Zy({
    ...n,
    velocity: -/* @__PURE__ */ wt(n.velocity || 0)
  }), v = h || 0, m = c / (2 * Math.sqrt(l * u)), g = i - s, x = /* @__PURE__ */ wt(Math.sqrt(l / u)), y = Math.abs(g) < 5;
  r || (r = y ? he.restSpeed.granular : he.restSpeed.default), o || (o = y ? he.restDelta.granular : he.restDelta.default);
  let T;
  if (m < 1) {
    const S = js(x, m);
    T = (P) => {
      const R = Math.exp(-m * x * P);
      return i - R * ((v + m * x * g) / S * Math.sin(S * P) + g * Math.cos(S * P));
    };
  } else if (m === 1)
    T = (S) => i - Math.exp(-x * S) * (g + (v + x * g) * S);
  else {
    const S = x * Math.sqrt(m * m - 1);
    T = (P) => {
      const R = Math.exp(-m * x * P), O = Math.min(S * P, 300);
      return i - R * ((v + m * x * g) * Math.sinh(O) + S * g * Math.cosh(O)) / S;
    };
  }
  const A = {
    calculatedDuration: p && f || null,
    next: (S) => {
      const P = T(S);
      if (p)
        a.done = S >= f;
      else {
        let R = 0;
        m < 1 && (R = S === 0 ? /* @__PURE__ */ mt(v) : Tf(T, S, P));
        const O = Math.abs(R) <= r, L = Math.abs(i - P) <= o;
        a.done = O && L;
      }
      return a.value = a.done ? i : P, a;
    },
    toString: () => {
      const S = Math.min(bf(A), Ns), P = Kd((R) => A.next(S * R).value, S, 30);
      return S + "ms " + P;
    }
  };
  return A;
}
function jl({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const f = e[0], h = {
    done: !1,
    value: f
  }, p = (O) => a !== void 0 && O < a || l !== void 0 && O > l, v = (O) => a === void 0 ? l : l === void 0 || Math.abs(a - O) < Math.abs(l - O) ? a : l;
  let m = n * t;
  const g = f + m, x = i === void 0 ? g : i(g);
  x !== g && (m = x - f);
  const y = (O) => -m * Math.exp(-O / r), T = (O) => x + y(O), A = (O) => {
    const L = y(O), N = T(O);
    h.done = Math.abs(L) <= c, h.value = h.done ? x : N;
  };
  let S, P;
  const R = (O) => {
    p(h.value) && (S = O, P = Sf({
      keyframes: [h.value, v(h.value)],
      velocity: Tf(T, O, h.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: c,
      restSpeed: u
    }));
  };
  return R(0), {
    calculatedDuration: null,
    next: (O) => {
      let L = !1;
      return !P && S === void 0 && (L = !0, A(O), R(O)), S !== void 0 && O >= S ? P.next(O - S) : (!L && A(O), h);
    }
  };
}
const Jy = /* @__PURE__ */ lr(0.42, 0, 1, 1), Qy = /* @__PURE__ */ lr(0, 0, 0.58, 1), Af = /* @__PURE__ */ lr(0.42, 0, 0.58, 1), e5 = (e) => Array.isArray(e) && typeof e[0] != "number", kl = {
  linear: Be,
  easeIn: Jy,
  easeInOut: Af,
  easeOut: Qy,
  circIn: zi,
  circInOut: rf,
  circOut: nf,
  backIn: Hi,
  backInOut: ef,
  backOut: Qd,
  anticipate: tf
}, Il = (e) => {
  if (Ui(e)) {
    kt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return lr(t, n, r, o);
  } else if (typeof e == "string")
    return kt(kl[e] !== void 0, `Invalid easing type '${e}'`), kl[e];
  return e;
};
function t5(e, t, n) {
  const r = [], o = n || Ef, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || Be : t;
      a = cr(l, a);
    }
    r.push(a);
  }
  return r;
}
function n5(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (kt(s === t.length, "Both input and output ranges must be the same length"), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = t5(t, r, o), l = a.length, c = (u) => {
    if (i && u < e[0])
      return t[0];
    let f = 0;
    if (l > 1)
      for (; f < e.length - 2 && !(u < e[f + 1]); f++)
        ;
    const h = /* @__PURE__ */ En(e[f], e[f + 1], u);
    return a[f](h);
  };
  return n ? (u) => c(At(e[0], e[s - 1], u)) : c;
}
function r5(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ En(0, t, r);
    e.push(pe(n, 1, o));
  }
}
function o5(e) {
  const t = [0];
  return r5(t, e.length - 1), t;
}
function s5(e, t) {
  return e.map((n) => n * t);
}
function i5(e, t) {
  return e.map(() => t || Af).splice(0, e.length - 1);
}
function zr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = e5(r) ? r.map(Il) : Il(r), s = {
    done: !1,
    value: t[0]
  }, i = s5(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : o5(t),
    e
  ), a = n5(i, t, {
    ease: Array.isArray(o) ? o : i5(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const a5 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => de.update(t, !0),
    stop: () => It(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Oe.isProcessing ? Oe.timestamp : pt.now()
  };
}, l5 = {
  decay: jl,
  inertia: jl,
  tween: zr,
  keyframes: zr,
  spring: Sf
}, c5 = (e) => e / 100;
class Xi extends xf {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || Gi, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = Fi(n) ? n : l5[n] || zr;
    let l, c;
    a !== zr && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && kt(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), l = cr(c5, Ef(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    s === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), u.calculatedDuration === null && (u.calculatedDuration = bf(u));
    const { calculatedDuration: f } = u, h = f + o, p = h * (r + 1) - o;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: p
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: O } = this.options;
      return { done: !0, value: O[O.length - 1] };
    }
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: f } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: h, repeat: p, repeatType: v, repeatDelay: m, onUpdate: g } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const x = this.currentTime - h * (this.speed >= 0 ? 1 : -1), y = this.speed >= 0 ? x < 0 : x > u;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let T = this.currentTime, A = s;
    if (p) {
      const O = Math.min(this.currentTime, u) / f;
      let L = Math.floor(O), N = O % 1;
      !N && O >= 1 && (N = 1), N === 1 && L--, L = Math.min(L, p + 1), !!(L % 2) && (v === "reverse" ? (N = 1 - N, m && (N -= m / f)) : v === "mirror" && (A = i)), T = At(0, 1, N) * f;
    }
    const S = y ? { done: !1, value: l[0] } : A.next(T);
    a && (S.value = a(S.value));
    let { done: P } = S;
    !y && c !== null && (P = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const R = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
    return R && o !== void 0 && (S.value = bo(l, this.options, o)), g && g(S.value), R && this.finish(), S;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ wt(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ wt(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ mt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ wt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = a5, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
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
const u5 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function d5(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = Yd(a, o);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: r,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const f5 = /* @__PURE__ */ Bi(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Wr = 10, h5 = 2e4;
function p5(e) {
  return Fi(e.type) || e.type === "spring" || !Gd(e.ease);
}
function m5(e, t) {
  const n = new Xi({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let s = 0;
  for (; !r.done && s < h5; )
    r = n.sample(s), o.push(r.value), s += Wr;
  return {
    times: void 0,
    keyframes: o,
    duration: s - Wr,
    ease: "linear"
  };
}
const Pf = {
  anticipate: tf,
  backInOut: ef,
  circInOut: rf
};
function v5(e) {
  return e in Pf;
}
class Dl extends xf {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new yf(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && Ur() && v5(s) && (s = Pf[s]), p5(this.options)) {
      const { onComplete: f, onUpdate: h, motionValue: p, element: v, ...m } = this.options, g = m5(t, m);
      t = g.keyframes, t.length === 1 && (t[1] = t[0]), r = g.duration, o = g.times, s = g.ease, i = "keyframes";
    }
    const u = d5(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (Sl(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(bo(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: u,
      duration: r,
      times: o,
      type: i,
      ease: s,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ wt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ wt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ mt(t);
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
        return Be;
      const { animation: r } = n;
      Sl(r, t);
    }
    return Be;
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
    const { animation: n, keyframes: r, duration: o, type: s, ease: i, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: f, element: h, ...p } = this.options, v = new Xi({
        ...p,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), m = /* @__PURE__ */ mt(this.time);
      c.setWithVelocity(v.sample(m - Wr).value, v.sample(m).value, Wr);
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
    const { motionValue: n, name: r, repeatDelay: o, repeatType: s, damping: i, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return f5() && r && u5.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const g5 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, y5 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), x5 = {
  type: "keyframes",
  duration: 0.8
}, b5 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, w5 = (e, { keyframes: t }) => t.length > 2 ? x5 : Jt.has(e) ? e.startsWith("scale") ? y5(t[1]) : g5 : b5;
function E5({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const Zi = (e, t, n, r = {}, o, s) => (i) => {
  const a = Ii(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ mt(l);
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
      i(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : o
  };
  E5(a) || (u = {
    ...u,
    ...w5(e, u)
  }), u.duration && (u.duration = /* @__PURE__ */ mt(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ mt(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let f = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), f && !s && t.get() !== void 0) {
    const h = bo(u.keyframes, a);
    if (h !== void 0)
      return de.update(() => {
        u.onUpdate(h), u.onComplete();
      }), new ey([]);
  }
  return !s && Dl.supports(u) ? new Dl(u) : new Xi(u);
};
function T5({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Rf(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const f in l) {
    const h = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null), p = l[f];
    if (p === void 0 || u && T5(u, f))
      continue;
    const v = {
      delay: n,
      ...Ii(i || {}, f)
    };
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const x = qd(e);
      if (x) {
        const y = window.MotionHandoffAnimation(x, f, de);
        y !== null && (v.startTime = y, m = !0);
      }
    }
    Ps(e, f), h.start(Zi(f, h, p, e.shouldReduceMotion && zd.has(f) ? { type: !1 } : v, e, m));
    const g = h.animation;
    g && c.push(g);
  }
  return a && Promise.all(c).then(() => {
    de.update(() => {
      a && X2(e, a);
    });
  }), c;
}
function ks(e, t, n = {}) {
  var r;
  const o = xo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(Rf(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: f, staggerDirection: h } = s;
    return S5(e, t, u + c, f, h, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [i, a] : [a, i];
    return c().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function S5(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(A5).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(ks(c, t, {
      ...s,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function A5(e, t) {
  return e.sortNodePosition(t);
}
function P5(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => ks(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = ks(e, t, n);
  else {
    const o = typeof t == "function" ? xo(e, t, n.custom) : t;
    r = Promise.all(Rf(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const R5 = Si.length;
function Cf(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Cf(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < R5; n++) {
    const r = Si[n], o = e.props[r];
    (Qn(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const C5 = [...Ti].reverse(), O5 = Ti.length;
function M5(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => P5(e, n, r)));
}
function $5(e) {
  let t = M5(e), n = Vl(), r = !0;
  const o = (l) => (c, u) => {
    var f;
    const h = xo(e, u, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (h) {
      const { transition: p, transitionEnd: v, ...m } = h;
      c = { ...c, ...m, ...v };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function i(l) {
    const { props: c } = e, u = Cf(e.parent) || {}, f = [], h = /* @__PURE__ */ new Set();
    let p = {}, v = 1 / 0;
    for (let g = 0; g < O5; g++) {
      const x = C5[g], y = n[x], T = c[x] !== void 0 ? c[x] : u[x], A = Qn(T), S = x === l ? y.isActive : null;
      S === !1 && (v = g);
      let P = T === u[x] && T !== c[x] && A;
      if (P && r && e.manuallyAnimateOnMount && (P = !1), y.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !y.isActive && S === null || // If we didn't and don't have any defined prop for this animation type
      !T && !y.prevProp || // Or if the prop doesn't define an animation
      go(T) || typeof T == "boolean")
        continue;
      const R = N5(y.prevProp, T);
      let O = R || // If we're making this variant active, we want to always make it active
      x === l && y.isActive && !P && A || // If we removed a higher-priority variant (i is in reverse order)
      g > v && A, L = !1;
      const N = Array.isArray(T) ? T : [T];
      let k = N.reduce(o(x), {});
      S === !1 && (k = {});
      const { prevResolvedValues: W = {} } = y, B = {
        ...W,
        ...k
      }, I = (j) => {
        O = !0, h.has(j) && (L = !0, h.delete(j)), y.needsAnimating[j] = !0;
        const $ = e.getValue(j);
        $ && ($.liveStyle = !1);
      };
      for (const j in B) {
        const $ = k[j], q = W[j];
        if (p.hasOwnProperty(j))
          continue;
        let ue = !1;
        As($) && As(q) ? ue = !Hd($, q) : ue = $ !== q, ue ? $ != null ? I(j) : h.add(j) : $ !== void 0 && h.has(j) ? I(j) : y.protectedKeys[j] = !0;
      }
      y.prevProp = T, y.prevResolvedValues = k, y.isActive && (p = { ...p, ...k }), r && e.blockInitialAnimation && (O = !1), O && (!(P && R) || L) && f.push(...N.map((j) => ({
        animation: j,
        options: { type: x }
      })));
    }
    if (h.size) {
      const g = {};
      h.forEach((x) => {
        const y = e.getBaseTarget(x), T = e.getValue(x);
        T && (T.liveStyle = !0), g[x] = y ?? null;
      }), f.push({ animation: g });
    }
    let m = !!f.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(f) : Promise.resolve();
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((h) => {
      var p;
      return (p = h.animationState) === null || p === void 0 ? void 0 : p.setActive(l, c);
    }), n[l].isActive = c;
    const f = i(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = Vl(), r = !0;
    }
  };
}
function N5(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Hd(t, e) : !1;
}
function Ht(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Vl() {
  return {
    animate: Ht(!0),
    whileInView: Ht(),
    whileHover: Ht(),
    whileTap: Ht(),
    whileDrag: Ht(),
    whileFocus: Ht(),
    exit: Ht()
  };
}
class Ft {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class L5 extends Ft {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = $5(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    go(t) && (this.unmountControls = t.subscribe(this.node));
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
let j5 = 0;
class k5 extends Ft {
  constructor() {
    super(...arguments), this.id = j5++;
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
const I5 = {
  animation: {
    Feature: L5
  },
  exit: {
    Feature: k5
  }
}, nt = {
  x: !1,
  y: !1
};
function Of() {
  return nt.x || nt.y;
}
function D5(e) {
  return e === "x" || e === "y" ? nt[e] ? null : (nt[e] = !0, () => {
    nt[e] = !1;
  }) : nt.x || nt.y ? null : (nt.x = nt.y = !0, () => {
    nt.x = nt.y = !1;
  });
}
const Ji = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function rr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function ur(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const V5 = (e) => (t) => Ji(t) && e(t, ur(t));
function qn(e, t, n, r) {
  return rr(e, t, V5(n), r);
}
const _l = (e, t) => Math.abs(e - t);
function _5(e, t) {
  const n = _l(e.x, t.x), r = _l(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Mf {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Xo(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, p = _5(f.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !p)
        return;
      const { point: v } = f, { timestamp: m } = Oe;
      this.history.push({ ...v, timestamp: m });
      const { onStart: g, onMove: x } = this.handlers;
      h || (g && g(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, h) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Yo(h, this.transformPagePoint), de.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, h) => {
      this.end();
      const { onEnd: p, onSessionEnd: v, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = Xo(f.type === "pointercancel" ? this.lastMoveEventInfo : Yo(h, this.transformPagePoint), this.history);
      this.startEvent && p && p(f, g), v && v(f, g);
    }, !Ji(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = ur(t), a = Yo(i, this.transformPagePoint), { point: l } = a, { timestamp: c } = Oe;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Xo(a, this.history)), this.removeListeners = cr(qn(this.contextWindow, "pointermove", this.handlePointerMove), qn(this.contextWindow, "pointerup", this.handlePointerUp), qn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), It(this.updatePoint);
  }
}
function Yo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Bl(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Xo({ point: e }, t) {
  return {
    point: e,
    delta: Bl(e, $f(t)),
    offset: Bl(e, B5(t)),
    velocity: F5(t, 0.1)
  };
}
function B5(e) {
  return e[0];
}
function $f(e) {
  return e[e.length - 1];
}
function F5(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = $f(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ mt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ wt(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
const Nf = 1e-4, U5 = 1 - Nf, H5 = 1 + Nf, Lf = 0.01, z5 = 0 - Lf, W5 = 0 + Lf;
function He(e) {
  return e.max - e.min;
}
function q5(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Fl(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = pe(t.min, t.max, e.origin), e.scale = He(n) / He(t), e.translate = pe(n.min, n.max, e.origin) - e.originPoint, (e.scale >= U5 && e.scale <= H5 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= z5 && e.translate <= W5 || isNaN(e.translate)) && (e.translate = 0);
}
function Kn(e, t, n, r) {
  Fl(e.x, t.x, n.x, r ? r.originX : void 0), Fl(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ul(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + He(t);
}
function K5(e, t, n) {
  Ul(e.x, t.x, n.x), Ul(e.y, t.y, n.y);
}
function Hl(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + He(t);
}
function Gn(e, t, n) {
  Hl(e.x, t.x, n.x), Hl(e.y, t.y, n.y);
}
function G5(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? pe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? pe(n, e, r.max) : Math.min(e, n)), e;
}
function zl(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Y5(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: zl(e.x, n, o),
    y: zl(e.y, t, r)
  };
}
function Wl(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function X5(e, t) {
  return {
    x: Wl(e.x, t.x),
    y: Wl(e.y, t.y)
  };
}
function Z5(e, t) {
  let n = 0.5;
  const r = He(e), o = He(t);
  return o > r ? n = /* @__PURE__ */ En(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ En(e.min, e.max - o, t.min)), At(0, 1, n);
}
function J5(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Is = 0.35;
function Q5(e = Is) {
  return e === !1 ? e = 0 : e === !0 && (e = Is), {
    x: ql(e, "left", "right"),
    y: ql(e, "top", "bottom")
  };
}
function ql(e, t, n) {
  return {
    min: Kl(e, t),
    max: Kl(e, n)
  };
}
function Kl(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Gl = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), dn = () => ({
  x: Gl(),
  y: Gl()
}), Yl = () => ({ min: 0, max: 0 }), be = () => ({
  x: Yl(),
  y: Yl()
});
function Xe(e) {
  return [e("x"), e("y")];
}
function jf({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function e3({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function t3(e, t) {
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
function Zo(e) {
  return e === void 0 || e === 1;
}
function Ds({ scale: e, scaleX: t, scaleY: n }) {
  return !Zo(e) || !Zo(t) || !Zo(n);
}
function zt(e) {
  return Ds(e) || kf(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function kf(e) {
  return Xl(e.x) || Xl(e.y);
}
function Xl(e) {
  return e && e !== "0%";
}
function qr(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Zl(e, t, n, r, o) {
  return o !== void 0 && (e = qr(e, o, r)), qr(e, n, r) + t;
}
function Vs(e, t = 0, n = 1, r, o) {
  e.min = Zl(e.min, t, n, r, o), e.max = Zl(e.max, t, n, r, o);
}
function If(e, { x: t, y: n }) {
  Vs(e.x, t.translate, t.scale, t.originPoint), Vs(e.y, n.translate, n.scale, n.originPoint);
}
const Jl = 0.999999999999, Ql = 1.0000000000001;
function n3(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && hn(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, If(e, i)), r && zt(s.latestValues) && hn(e, s.latestValues));
  }
  t.x < Ql && t.x > Jl && (t.x = 1), t.y < Ql && t.y > Jl && (t.y = 1);
}
function fn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function ec(e, t, n, r, o = 0.5) {
  const s = pe(e.min, e.max, o);
  Vs(e, t, n, s, r);
}
function hn(e, t) {
  ec(e.x, t.x, t.scaleX, t.scale, t.originX), ec(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Df(e, t) {
  return jf(t3(e.getBoundingClientRect(), t));
}
function r3(e, t, n) {
  const r = Df(e, n), { scroll: o } = t;
  return o && (fn(r.x, o.offset.x), fn(r.y, o.offset.y)), r;
}
const Vf = ({ current: e }) => e ? e.ownerDocument.defaultView : null, o3 = /* @__PURE__ */ new WeakMap();
class s3 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = be(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (u) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ur(u).point);
    }, s = (u, f) => {
      const { drag: h, dragPropagation: p, onDragStart: v } = this.getProps();
      if (h && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = D5(h), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Xe((g) => {
        let x = this.getAxisMotionValue(g).get() || 0;
        if (ht.test(x)) {
          const { projection: y } = this.visualElement;
          if (y && y.layout) {
            const T = y.layout.layoutBox[g];
            T && (x = He(T) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[g] = x;
      }), v && de.postRender(() => v(u, f)), Ps(this.visualElement, "transform");
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, i = (u, f) => {
      const { dragPropagation: h, dragDirectionLock: p, onDirectionLock: v, onDrag: m } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: g } = f;
      if (p && this.currentDirection === null) {
        this.currentDirection = i3(g), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, g), this.updateAxis("y", f.point, g), this.visualElement.render(), m && m(u, f);
    }, a = (u, f) => this.stop(u, f), l = () => Xe((u) => {
      var f;
      return this.getAnimationState(u) === "paused" && ((f = this.getAxisMotionValue(u).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Mf(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: Vf(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && de.postRender(() => s(t, n));
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
    if (!r || !Er(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = G5(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && cn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = Y5(o.layoutBox, n) : this.constraints = !1, this.elastic = Q5(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Xe((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = J5(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !cn(t))
      return !1;
    const r = t.current;
    kt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = r3(r, o.root, this.visualElement.getTransformPagePoint());
    let i = X5(o.layout.layoutBox, s);
    if (n) {
      const a = n(e3(i));
      this.hasMutatedConstraints = !!a, a && (i = jf(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = Xe((u) => {
      if (!Er(u, n, this.currentDirection))
        return;
      let f = l && l[u] || {};
      i && (f = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, p = o ? 40 : 1e7, v = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...f
      };
      return this.startAxisValueAnimation(u, v);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Ps(this.visualElement, t), r.start(Zi(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Xe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Xe((t) => {
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
    Xe((n) => {
      const { drag: r } = this.getProps();
      if (!Er(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - pe(i, a, 0.5));
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
    if (!cn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Xe((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = Z5({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Xe((i) => {
      if (!Er(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      a.set(pe(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    o3.set(this.visualElement, this);
    const t = this.visualElement.current, n = qn(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      cn(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), de.read(r);
    const i = rr(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Xe((u) => {
        const f = this.getAxisMotionValue(u);
        f && (this.originPoint[u] += l[u].translate, f.set(f.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = Is, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function Er(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function i3(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class a3 extends Ft {
  constructor(t) {
    super(t), this.removeGroupControls = Be, this.removeListeners = Be, this.controls = new s3(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Be;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const tc = (e) => (t, n) => {
  e && de.postRender(() => e(t, n));
};
class l3 extends Ft {
  constructor() {
    super(...arguments), this.removePointerDownListener = Be;
  }
  onPointerDown(t) {
    this.session = new Mf(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Vf(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: tc(t),
      onStart: tc(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && de.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = qn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Lr = {
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
function nc(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const In = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (V.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = nc(e, t.target.x), r = nc(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, c3 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Dt.parse(e);
    if (o.length > 5)
      return r;
    const s = Dt.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const c = pe(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), s(o);
  }
};
class u3 extends Hp {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    I2(d3), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Lr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || de.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Pi.postRender(() => {
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
function _f(e) {
  const [t, n] = Td(), r = oe(xi);
  return d.jsx(u3, { ...e, layoutGroup: r, switchLayoutGroup: oe(Md), isPresent: t, safeToRemove: n });
}
const d3 = {
  borderRadius: {
    ...In,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: In,
  borderTopRightRadius: In,
  borderBottomLeftRadius: In,
  borderBottomRightRadius: In,
  boxShadow: c3
};
function f3(e, t, n) {
  const r = Ne(e) ? e : tr(e);
  return r.start(Zi("", r, t, n)), r.animation;
}
function h3(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const p3 = (e, t) => e.depth - t.depth;
class m3 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Di(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Vi(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(p3), this.isDirty = !1, this.children.forEach(t);
  }
}
function v3(e, t) {
  const n = pt.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (It(r), e(s - t));
  };
  return de.read(r, !0), () => It(r);
}
const Bf = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], g3 = Bf.length, rc = (e) => typeof e == "string" ? parseFloat(e) : e, oc = (e) => typeof e == "number" || V.test(e);
function y3(e, t, n, r, o, s) {
  o ? (e.opacity = pe(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    x3(r)
  ), e.opacityExit = pe(t.opacity !== void 0 ? t.opacity : 1, 0, b3(r))) : s && (e.opacity = pe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < g3; i++) {
    const a = `border${Bf[i]}Radius`;
    let l = sc(t, a), c = sc(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || oc(l) === oc(c) ? (e[a] = Math.max(pe(rc(l), rc(c), r), 0), (ht.test(c) || ht.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = pe(t.rotate || 0, n.rotate || 0, r));
}
function sc(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const x3 = /* @__PURE__ */ Ff(0, 0.5, nf), b3 = /* @__PURE__ */ Ff(0.5, 0.95, Be);
function Ff(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ En(e, t, r));
}
function ic(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ge(e, t) {
  ic(e.x, t.x), ic(e.y, t.y);
}
function ac(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function lc(e, t, n, r, o) {
  return e -= t, e = qr(e, 1 / n, r), o !== void 0 && (e = qr(e, 1 / o, r)), e;
}
function w3(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (ht.test(t) && (t = parseFloat(t), t = pe(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = pe(s.min, s.max, r);
  e === s && (a -= t), e.min = lc(e.min, t, n, a, o), e.max = lc(e.max, t, n, a, o);
}
function cc(e, t, [n, r, o], s, i) {
  w3(e, t[n], t[r], t[o], t.scale, s, i);
}
const E3 = ["x", "scaleX", "originX"], T3 = ["y", "scaleY", "originY"];
function uc(e, t, n, r) {
  cc(e.x, t, E3, n ? n.x : void 0, r ? r.x : void 0), cc(e.y, t, T3, n ? n.y : void 0, r ? r.y : void 0);
}
function dc(e) {
  return e.translate === 0 && e.scale === 1;
}
function Uf(e) {
  return dc(e.x) && dc(e.y);
}
function fc(e, t) {
  return e.min === t.min && e.max === t.max;
}
function S3(e, t) {
  return fc(e.x, t.x) && fc(e.y, t.y);
}
function hc(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Hf(e, t) {
  return hc(e.x, t.x) && hc(e.y, t.y);
}
function pc(e) {
  return He(e.x) / He(e.y);
}
function mc(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class A3 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Di(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Vi(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      const s = this.members[o];
      if (s.isPresent !== !1) {
        r = s;
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
function P3(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: f, rotateY: h, skewX: p, skewY: v } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), p && (r += `skewX(${p}deg) `), v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Wt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Fn = typeof window < "u" && window.MotionDebug !== void 0, Jo = ["", "X", "Y", "Z"], R3 = { visibility: "hidden" }, vc = 1e3;
let C3 = 0;
function Qo(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function zf(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = qd(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", de, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && zf(r);
}
function Wf({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = C3++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Fn && (Wt.totalNodes = Wt.resolvedTargetDeltas = Wt.recalculatedProjection = 0), this.nodes.forEach($3), this.nodes.forEach(I3), this.nodes.forEach(D3), this.nodes.forEach(N3), Fn && window.MotionDebug.record(Wt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new m3());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new _i()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const l = this.eventHandlers.get(i);
      l && l.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = h3(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = v3(h, 250), Lr.hasAnimatedSinceResize && (Lr.hasAnimatedSinceResize = !1, this.nodes.forEach(yc));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeLayoutChanged: p, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || U3, { onLayoutAnimationStart: g, onLayoutAnimationComplete: x } = u.getProps(), y = !this.targetLayout || !Hf(this.targetLayout, v), T = !h && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || T || h && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, T);
          const A = {
            ...Ii(m, "layout"),
            onPlay: g,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (A.delay = 0, A.type = !1), this.startAnimation(A);
        } else
          h || yc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, It(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(V3), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && zf(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(gc);
        return;
      }
      this.isUpdating || this.nodes.forEach(j3), this.isUpdating = !1, this.nodes.forEach(k3), this.nodes.forEach(O3), this.nodes.forEach(M3), this.clearAllSnapshots();
      const a = pt.now();
      Oe.delta = At(0, 1e3 / 60, a - Oe.timestamp), Oe.timestamp = a, Oe.isProcessing = !0, zo.update.process(Oe), zo.preRender.process(Oe), zo.render.process(Oe), Oe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Pi.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(L3), this.sharedNodes.forEach(_3);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, de.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      de.postRender(() => {
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
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = be(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Uf(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (a || zt(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), H3(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var i;
      const { visualElement: a } = this.options;
      if (!a)
        return be();
      const l = a.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(z3))) {
        const { scroll: u } = this.root;
        u && (fn(l.x, u.offset.x), fn(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = be();
      if (Ge(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: f, options: h } = u;
        u !== this.root && f && h.layoutScroll && (f.wasRoot && Ge(l, i), fn(l.x, f.offset.x), fn(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = be();
      Ge(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && hn(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), zt(u.latestValues) && hn(l, u.latestValues);
      }
      return zt(this.latestValues) && hn(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = be();
      Ge(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !zt(c.latestValues))
          continue;
        Ds(c.latestValues) && c.updateSnapshot();
        const u = be(), f = c.measurePageBox();
        Ge(u, f), uc(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return zt(this.latestValues) && uc(a, this.latestValues), a;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Oe.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(i || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (this.resolvedRelativeTargetAt = Oe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = be(), this.relativeTargetOrigin = be(), Gn(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Ge(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = be(), this.targetWithTransforms = be()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), K5(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ge(this.target, this.layout.layoutBox), If(this.target, this.targetDelta)) : Ge(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = be(), this.relativeTargetOrigin = be(), Gn(this.relativeTargetOrigin, this.target, p.target), Ge(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Fn && Wt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ds(this.parent.latestValues) || kf(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Oe.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f))
        return;
      Ge(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      n3(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = be());
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ac(this.prevProjectionDelta.x, this.projectionDelta.x), ac(this.prevProjectionDelta.y, this.projectionDelta.y)), Kn(this.projectionDelta, this.layoutCorrected, v, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== p || !mc(this.projectionDelta.x, this.prevProjectionDelta.x) || !mc(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), Fn && Wt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), i) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = dn(), this.projectionDelta = dn(), this.projectionDeltaWithTransform = dn();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, f = dn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = be(), p = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, m = p !== v, g = this.getStack(), x = !g || g.members.length <= 1, y = !!(m && !x && this.options.crossfade === !0 && !this.path.some(F3));
      this.animationProgress = 0;
      let T;
      this.mixTargetDelta = (A) => {
        const S = A / 1e3;
        xc(f.x, i.x, S), xc(f.y, i.y, S), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Gn(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), B3(this.relativeTarget, this.relativeTargetOrigin, h, S), T && S3(this.relativeTarget, T) && (this.isProjectionDirty = !1), T || (T = be()), Ge(T, this.relativeTarget)), m && (this.animationValues = u, y3(u, c, this.latestValues, S, y, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (It(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = de.update(() => {
        Lr.hasAnimatedSinceResize = !0, this.currentAnimation = f3(0, vc, {
          ...i,
          onUpdate: (a) => {
            this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a);
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(vc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && qf(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || be();
          const f = He(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + f;
          const h = He(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + h;
        }
        Ge(a, l), hn(a, u), Kn(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new A3()), this.sharedNodes.get(i).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let a = !1;
      const { latestValues: l } = i;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && Qo("z", i, c, this.animationValues);
      for (let u = 0; u < Jo.length; u++)
        Qo(`rotate${Jo[u]}`, i, c, this.animationValues), Qo(`skew${Jo[u]}`, i, c, this.animationValues);
      i.render();
      for (const u in c)
        i.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return R3;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = $r(i == null ? void 0 : i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = $r(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !zt(this.latestValues) && (m.transform = u ? u({}, "") : "none", this.hasProjected = !1), m;
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), c.transform = P3(this.projectionDeltaWithTransform, this.treeScale, h), u && (c.transform = u(h, c.transform));
      const { x: p, y: v } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`, f.animationValues ? c.opacity = f === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const m in Fr) {
        if (h[m] === void 0)
          continue;
        const { correct: g, applyTo: x } = Fr[m], y = c.transform === "none" ? h[m] : g(h[m], f);
        if (x) {
          const T = x.length;
          for (let A = 0; A < T; A++)
            c[x[A]] = y;
        } else
          c[m] = y;
      }
      return this.options.layoutId && (c.pointerEvents = f === this ? $r(i == null ? void 0 : i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(gc), this.root.sharedNodes.clear();
    }
  };
}
function O3(e) {
  e.updateLayout();
}
function M3(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? Xe((f) => {
      const h = i ? n.measuredBox[f] : n.layoutBox[f], p = He(h);
      h.min = r[f].min, h.max = h.min + p;
    }) : qf(s, n.layoutBox, r) && Xe((f) => {
      const h = i ? n.measuredBox[f] : n.layoutBox[f], p = He(r[f]);
      h.max = h.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + p);
    });
    const a = dn();
    Kn(a, r, n.layoutBox);
    const l = dn();
    i ? Kn(l, e.applyTransform(o, !0), n.measuredBox) : Kn(l, r, n.layoutBox);
    const c = !Uf(a);
    let u = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: p } = f;
        if (h && p) {
          const v = be();
          Gn(v, n.layoutBox, h.layoutBox);
          const m = be();
          Gn(m, r, p.layoutBox), Hf(v, m) || (u = !0), f.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = v, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function $3(e) {
  Fn && Wt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function N3(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function L3(e) {
  e.clearSnapshot();
}
function gc(e) {
  e.clearMeasurements();
}
function j3(e) {
  e.isLayoutDirty = !1;
}
function k3(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function yc(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function I3(e) {
  e.resolveTargetDelta();
}
function D3(e) {
  e.calcProjection();
}
function V3(e) {
  e.resetSkewAndRotation();
}
function _3(e) {
  e.removeLeadSnapshot();
}
function xc(e, t, n) {
  e.translate = pe(t.translate, 0, n), e.scale = pe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function bc(e, t, n, r) {
  e.min = pe(t.min, n.min, r), e.max = pe(t.max, n.max, r);
}
function B3(e, t, n, r) {
  bc(e.x, t.x, n.x, r), bc(e.y, t.y, n.y, r);
}
function F3(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const U3 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, wc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Ec = wc("applewebkit/") && !wc("chrome/") ? Math.round : Be;
function Tc(e) {
  e.min = Ec(e.min), e.max = Ec(e.max);
}
function H3(e) {
  Tc(e.x), Tc(e.y);
}
function qf(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !q5(pc(t), pc(n), 0.2);
}
function z3(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const W3 = Wf({
  attachResizeListener: (e, t) => rr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), es = {
  current: void 0
}, Kf = Wf({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!es.current) {
      const e = new W3({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), es.current = e;
    }
    return es.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), q3 = {
  pan: {
    Feature: l3
  },
  drag: {
    Feature: a3,
    ProjectionNode: Kf,
    MeasureLayout: _f
  }
};
function K3(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let o = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : o.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function Gf(e, t) {
  const n = K3(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function Sc(e) {
  return !(e.pointerType === "touch" || Of());
}
function G3(e, t, n = {}) {
  const [r, o, s] = Gf(e, n), i = (a) => {
    if (!Sc(a))
      return;
    const { target: l } = a, c = t(l, a);
    if (typeof c != "function" || !l)
      return;
    const u = (f) => {
      Sc(f) && (c(f), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, o);
  };
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
function Ac(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && de.postRender(() => s(t, ur(t)));
}
class Y3 extends Ft {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = G3(t, (n, r) => (Ac(this.node, r, "Start"), (o) => Ac(this.node, o, "End"))));
  }
  unmount() {
  }
}
class X3 extends Ft {
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
    this.unmount = cr(rr(this.node.current, "focus", () => this.onFocus()), rr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Yf = (e, t) => t ? e === t ? !0 : Yf(e, t.parentElement) : !1, Z3 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function J3(e) {
  return Z3.has(e.tagName) || e.tabIndex !== -1;
}
const Un = /* @__PURE__ */ new WeakSet();
function Pc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ts(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Q3 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Pc(() => {
    if (Un.has(n))
      return;
    ts(n, "down");
    const o = Pc(() => {
      ts(n, "up");
    }), s = () => ts(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Rc(e) {
  return Ji(e) && !Of();
}
function ex(e, t, n = {}) {
  const [r, o, s] = Gf(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!Rc(a) || Un.has(l))
      return;
    Un.add(l);
    const c = t(l, a), u = (p, v) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), !(!Rc(p) || !Un.has(l)) && (Un.delete(l), typeof c == "function" && c(p, { success: v }));
    }, f = (p) => {
      u(p, n.useGlobalTarget || Yf(l, p.target));
    }, h = (p) => {
      u(p, !1);
    };
    window.addEventListener("pointerup", f, o), window.addEventListener("pointercancel", h, o);
  };
  return r.forEach((a) => {
    !J3(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (c) => Q3(c, o), o);
  }), s;
}
function Cc(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && de.postRender(() => s(t, ur(t)));
}
class tx extends Ft {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = ex(t, (n, r) => (Cc(this.node, r, "Start"), (o, { success: s }) => Cc(this.node, o, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const _s = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap(), nx = (e) => {
  const t = _s.get(e.target);
  t && t(e);
}, rx = (e) => {
  e.forEach(nx);
};
function ox({ root: e, ...t }) {
  const n = e || document;
  ns.has(n) || ns.set(n, {});
  const r = ns.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(rx, { root: e, ...t })), r[o];
}
function sx(e, t, n) {
  const r = ox(t);
  return _s.set(e, n), r.observe(e), () => {
    _s.delete(e), r.unobserve(e);
  };
}
const ix = {
  some: 0,
  all: 1
};
class ax extends Ft {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : ix[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), h = c ? u : f;
      h && h(l);
    };
    return sx(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(lx(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function lx({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const cx = {
  inView: {
    Feature: ax
  },
  tap: {
    Feature: tx
  },
  focus: {
    Feature: X3
  },
  hover: {
    Feature: Y3
  }
}, ux = {
  layout: {
    ProjectionNode: Kf,
    MeasureLayout: _f
  }
}, Bs = { current: null }, Xf = { current: !1 };
function dx() {
  if (Xf.current = !0, !!Ei)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Bs.current = e.matches;
      e.addListener(t), t();
    } else
      Bs.current = !1;
}
const fx = [...gf, $e, Dt], hx = (e) => fx.find(vf(e)), Oc = /* @__PURE__ */ new WeakMap();
function px(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (Ne(o))
      e.addValue(r, o), process.env.NODE_ENV === "development" && mo(o.version === "12.0.1", `Attempting to mix Motion versions ${o.version} with 12.0.1 may not work as expected.`);
    else if (Ne(s))
      e.addValue(r, tr(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, tr(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Mc = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class mx {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: s, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Gi, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = pt.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, de.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: u } = i;
    this.onUpdate = u, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = yo(n), this.isVariantNode = Cd(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const v = h[p];
      l[p] !== void 0 && Ne(v) && v.set(l[p], !1);
    }
  }
  mount(t) {
    this.current = t, Oc.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Xf.current || dx(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Bs.current, process.env.NODE_ENV !== "production" && mo(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Oc.delete(this.current), this.projection && this.projection.unmount(), It(this.notifyUpdate), It(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = Jt.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && de.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    let i;
    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), s(), i && i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in wn) {
      const n = wn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : be();
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
    for (let r = 0; r < Mc.length; r++) {
      const o = Mc[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = px(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = tr(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (pf(o) || of(o)) ? o = parseFloat(o) : !hx(o) && Dt.test(n) && (o = df(t, n)), this.setBaseTarget(t, Ne(o) ? o.get() : o)), Ne(o) ? o.get() : o;
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
      const i = Ci(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (o = i[t]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Ne(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new _i()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Zf extends mx {
  constructor() {
    super(...arguments), this.KeyframeResolver = yf;
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
    Ne(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function vx(e) {
  return window.getComputedStyle(e);
}
class gx extends Zf {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Dd;
  }
  readValueFromInstance(t, n) {
    if (Jt.has(n)) {
      const r = Ki(n);
      return r && r.default || 0;
    } else {
      const r = vx(t), o = (jd(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Df(t, n);
  }
  build(t, n, r) {
    $i(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ki(t, n, r);
  }
}
class yx extends Zf {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = be;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Jt.has(n)) {
      const r = Ki(n);
      return r && r.default || 0;
    }
    return n = Vd.has(n) ? n : Ai(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Fd(t, n, r);
  }
  build(t, n, r) {
    Ni(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    _d(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = ji(t.tagName), super.mount(t);
  }
}
const xx = (e, t) => Ri(e) ? new yx(t) : new gx(t, {
  allowProjection: e !== jr
}), bx = /* @__PURE__ */ W2({
  ...I5,
  ...cx,
  ...q3,
  ...ux
}, xx), pn = /* @__PURE__ */ i2(bx), D4 = (e) => {
  const { disableAnimation: t = !1, onLoad: n, ...r } = e, [o, s] = ve(!1), i = (a) => {
    s(!0), n == null || n(a);
  };
  return /* @__PURE__ */ d.jsx(
    pn.img,
    {
      initial: t ? void 0 : { opacity: 0 },
      animate: t ? void 0 : { opacity: o ? 1 : 0 },
      transition: { duration: 0.2 },
      onLoad: t ? void 0 : i,
      ...r
    }
  );
};
function V4({
  children: e,
  status: t,
  handleClose: n
}) {
  var o, s;
  const r = {
    success: {
      icon: "Checkmark",
      color: "bg-green-500"
    }
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "rounded-[1rem] bg-grey-900 text-white flex shadow-xl gap-4 p-4 text-14 w-full", children: [
    t ? /* @__PURE__ */ d.jsx("span", { className: "h-[1.25em] flex items-center", children: /* @__PURE__ */ d.jsx(
      "span",
      {
        className: `flex-shrink-0 size-6 text-white flex items-center justify-center rounded-full ${(o = r[t]) == null ? void 0 : o.color}`,
        children: /* @__PURE__ */ d.jsx(ke, { name: (s = r[t]) == null ? void 0 : s.icon, className: "size-4" })
      }
    ) }) : null,
    /* @__PURE__ */ d.jsx("div", { className: "text-14 leading-tight flex flex-col w-full", children: e }),
    n ? /* @__PURE__ */ d.jsx("span", { className: "h-[1.25em] flex items-center", children: /* @__PURE__ */ d.jsxs(
      "button",
      {
        type: "button",
        className: "flex-shrink-0 size-6 bg-grey-700 text-white flex items-center justify-center rounded-full",
        onClick: n,
        children: [
          /* @__PURE__ */ d.jsx(ke, { name: "Close", className: "size-4" }),
          " "
        ]
      }
    ) }) : null
  ] });
}
const Fs = 1e3, yn = 64, rs = yn / 2, ct = "gradient-avatar-", os = (e, t = Fs) => e % t / (Fs / yn), sn = (e, t = 0) => {
  let n = 3735928559 ^ t, r = 1103547991 ^ t;
  for (let o = 0, s; o < e.length; o++)
    s = e.charCodeAt(o), n = Math.imul(n ^ s, 2654435761), r = Math.imul(r ^ s, 1597334677);
  return n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), 4294967296 * (2097151 & r) + (n >>> 0);
}, wx = (e, t, n) => {
  const r = e % 360, o = (e + 120) % 360, s = n % 360;
  return {
    a: `hsl(${r}deg 100% 40%)`,
    b: `hsl(${o}deg 100% 50%)`,
    c: `hsl(${s}deg 100% 50%)`
  };
}, Ex = (e, t) => {
  const n = [];
  for (let r = 0; r < t; r++) {
    const o = r * 6;
    n.push({
      a: sn(e + "a", o),
      b: sn(e + "b", o + 1),
      c: sn(e + "c", o + 2),
      x: sn(e + "d", o + 3),
      y: sn(e + "e", o + 4),
      r: sn(e + "f", o + 5)
    });
  }
  return n.map((r, o) => {
    const s = yn / 10 + os(r.r, Fs * 1.5 / (o + 1));
    return {
      ...wx(r.a, r.b, r.c),
      x: os(r.x),
      //clampGradientPosition(hash.x % SIZE, -r / 3),
      y: os(r.y),
      //clampGradientPosition(hash.y % SIZE, -r / 3),
      r: s
    };
  });
}, $c = zp((e) => {
  const { className: t, address: n, complexity: r = 1, ...o } = e, s = Ex(n, r), i = to();
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      className: t,
      viewBox: `0 0 ${yn} ${yn}`,
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      ...o,
      children: [
        /* @__PURE__ */ d.jsxs("defs", { children: [
          /* @__PURE__ */ d.jsx("clipPath", { id: `${ct}circle-clip${i}`, children: /* @__PURE__ */ d.jsx("circle", { cx: rs, cy: rs, r: rs }) }),
          /* @__PURE__ */ d.jsxs(
            "filter",
            {
              id: `${ct}blur${i}`,
              x: "-10%",
              y: "-10%",
              width: "120%",
              height: "120%",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ d.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ d.jsx(
                  "feBlend",
                  {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  "feGaussianBlur",
                  {
                    stdDeviation: yn / 10,
                    result: "effect1_foregroundBlur"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs(
            "linearGradient",
            {
              id: `${ct}background${i}`,
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              children: [
                /* @__PURE__ */ d.jsx("stop", { offset: "0", stopColor: s[0].c }),
                /* @__PURE__ */ d.jsx("stop", { offset: "1", stopColor: s[0].a })
              ]
            }
          ),
          s.map((a, l) => /* @__PURE__ */ d.jsxs(jr, { children: [
            /* @__PURE__ */ d.jsxs("radialGradient", { id: `${ct}primary${i}${l}`, children: [
              /* @__PURE__ */ d.jsx("stop", { offset: "0", stopColor: a.a }),
              /* @__PURE__ */ d.jsx("stop", { offset: "1", stopColor: a.b })
            ] }),
            /* @__PURE__ */ d.jsxs("radialGradient", { id: `${ct}secondary${i}${l}`, children: [
              /* @__PURE__ */ d.jsx("stop", { offset: "0", stopColor: a.c }),
              /* @__PURE__ */ d.jsx("stop", { offset: "1", stopColor: a.b })
            ] })
          ] }, l))
        ] }),
        /* @__PURE__ */ d.jsxs("g", { clipPath: `url(#${ct}circle-clip${i})`, children: [
          /* @__PURE__ */ d.jsx(
            "rect",
            {
              width: "100%",
              height: "100%",
              fill: `url(#${ct}background${i})`
            }
          ),
          /* @__PURE__ */ d.jsx("g", { filter: `url(#${ct}blur${i})`, children: s.map((a, l) => /* @__PURE__ */ d.jsxs(jr, { children: [
            /* @__PURE__ */ d.jsx(
              "circle",
              {
                fill: `url(#${ct}primary${i}${l})`,
                cx: a.x,
                cy: a.y,
                r: a.r
              }
            ),
            /* @__PURE__ */ d.jsx(
              "circle",
              {
                fill: `url(#${ct}secondary${i}${l})`,
                cx: a.y,
                cy: a.x,
                r: a.r / 2
              }
            )
          ] }, l)) })
        ] })
      ]
    }
  );
});
ge(null);
ge(null);
ge(null);
ge(null);
ge(null);
const Tx = ge({}), fe = typeof document < "u" ? _.useLayoutEffect : () => {
};
function or(e) {
  const t = Q(null);
  return fe(() => {
    t.current = e;
  }, [
    e
  ]), Re((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
function Sx(e) {
  let [t, n] = ve(e), r = Q(null), o = or(() => {
    if (!r.current) return;
    let i = r.current.next();
    if (i.done) {
      r.current = null;
      return;
    }
    t === i.value ? o() : n(i.value);
  });
  fe(() => {
    r.current && o();
  });
  let s = or((i) => {
    r.current = i(t), o();
  });
  return [
    t,
    s
  ];
}
const Kr = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Jf = /* @__PURE__ */ _.createContext(Kr), Ax = /* @__PURE__ */ _.createContext(!1);
let Px = !!(typeof window < "u" && window.document && window.document.createElement), ss = /* @__PURE__ */ new WeakMap();
function Rx(e = !1) {
  let t = oe(Jf), n = Q(null);
  if (n.current === null && !e) {
    var r, o;
    let s = (o = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (r = o.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (s) {
      let i = ss.get(s);
      i == null ? ss.set(s, {
        id: t.current,
        state: s.memoizedState
      }) : s.memoizedState !== i.state && (t.current = i.id, ss.delete(s));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function Cx(e) {
  let t = oe(Jf);
  t === Kr && !Px && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = Rx(!!e), r = t === Kr && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function Ox(e) {
  let t = _.useId(), [n] = ve(Qi()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Kr.prefix}`;
  return e || `${r}-${t}`;
}
const Mx = typeof _.useId == "function" ? Ox : Cx;
function $x() {
  return !1;
}
function Nx() {
  return !0;
}
function Lx(e) {
  return () => {
  };
}
function Qi() {
  return typeof _.useSyncExternalStore == "function" ? _.useSyncExternalStore(Lx, $x, Nx) : oe(Ax);
}
let jx = !!(typeof window < "u" && window.document && window.document.createElement), Ot = /* @__PURE__ */ new Map();
function Qf(e) {
  let [t, n] = ve(e), r = Q(null), o = Mx(t), s = Re((i) => {
    r.current = i;
  }, []);
  return jx && (Ot.has(o) && !Ot.get(o).includes(s) ? Ot.set(o, [
    ...Ot.get(o),
    s
  ]) : Ot.set(o, [
    s
  ])), fe(() => {
    let i = o;
    return () => {
      Ot.delete(i);
    };
  }, [
    o
  ]), me(() => {
    let i = r.current;
    i && (r.current = null, n(i));
  }), o;
}
function kx(e, t) {
  if (e === t) return e;
  let n = Ot.get(e);
  if (n)
    return n.forEach((o) => o(t)), t;
  let r = Ot.get(t);
  return r ? (r.forEach((o) => o(e)), e) : t;
}
function Ix(e = []) {
  let t = Qf(), [n, r] = Sx(t), o = Re(() => {
    r(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    r
  ]);
  return fe(o, [
    t,
    o,
    ...e
  ]), n;
}
function Gr(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const Me = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Yr = (e) => e && "window" in e && e.window === e ? e : Me(e).defaultView || window;
function wo(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let o in r) {
      let s = t[o], i = r[o];
      typeof s == "function" && typeof i == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = Gr(s, i) : (o === "className" || o === "UNSAFE_className") && typeof s == "string" && typeof i == "string" ? t[o] = su(s, i) : o === "id" && s && i ? t.id = kx(s, i) : t[o] = i !== void 0 ? i : s;
    }
  }
  return t;
}
function Dx(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    for (let n of e)
      typeof n == "function" ? n(t) : n != null && (n.current = t);
  };
}
const Vx = /* @__PURE__ */ new Set([
  "id"
]), _x = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Bx = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Fx = /^(data-.*)$/;
function ea(e, t = {}) {
  let { labelable: n, isLink: r, propNames: o } = t, s = {};
  for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (Vx.has(i) || n && _x.has(i) || r && Bx.has(i) || o != null && o.has(i) || Fx.test(i)) && (s[i] = e[i]);
  return s;
}
function Nc(e) {
  if (Ux()) e.focus({
    preventScroll: !0
  });
  else {
    let t = Hx(e);
    e.focus(), zx(t);
  }
}
let Tr = null;
function Ux() {
  if (Tr == null) {
    Tr = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Tr = !0, !0;
        }
      });
    } catch {
    }
  }
  return Tr;
}
function Hx(e) {
  let t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n;
}
function zx(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function ta(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function na(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Qt(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const eh = Qt(function() {
  return na(/^Mac/i);
}), Wx = Qt(function() {
  return na(/^iPhone/i);
}), qx = Qt(function() {
  return na(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  eh() && navigator.maxTouchPoints > 1;
}), Kx = Qt(function() {
  return Wx() || qx();
}), Gx = Qt(function() {
  return ta(/AppleWebKit/i) && !th();
}), th = Qt(function() {
  return ta(/Chrome/i);
}), nh = Qt(function() {
  return ta(/Android/i);
});
let ln = /* @__PURE__ */ new Map(), Us = /* @__PURE__ */ new Set();
function Lc() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target) return;
    let o = ln.get(r.target);
    o || (o = /* @__PURE__ */ new Set(), ln.set(r.target, o), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), o.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target) return;
    let o = ln.get(r.target);
    if (o && (o.delete(r.propertyName), o.size === 0 && (r.target.removeEventListener("transitioncancel", n), ln.delete(r.target)), ln.size === 0)) {
      for (let s of Us) s();
      Us.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? Lc() : document.addEventListener("DOMContentLoaded", Lc));
function Yx(e) {
  requestAnimationFrame(() => {
    ln.size === 0 ? e() : Us.add(e);
  });
}
function Xx(e, t) {
  let { id: n, "aria-label": r, "aria-labelledby": o } = e;
  return n = Qf(n), o && r ? o = [
    .../* @__PURE__ */ new Set([
      n,
      ...o.trim().split(/\s+/)
    ])
  ].join(" ") : o && (o = o.trim().split(/\s+/).join(" ")), !r && !o && t && (r = t), {
    id: n,
    "aria-label": r,
    "aria-labelledby": o
  };
}
function Zx(e) {
  const t = Q(null);
  return Ce(() => ({
    get current() {
      return t.current;
    },
    set current(n) {
      t.current = n, typeof e == "function" ? e(n) : e && (e.current = n);
    }
  }), [
    e
  ]);
}
function Jx() {
  return typeof window.ResizeObserver < "u";
}
function jc(e) {
  const { ref: t, box: n, onResize: r } = e;
  me(() => {
    let o = t == null ? void 0 : t.current;
    if (o)
      if (Jx()) {
        const s = new window.ResizeObserver((i) => {
          i.length && r();
        });
        return s.observe(o, {
          box: n
        }), () => {
          o && s.unobserve(o);
        };
      } else
        return window.addEventListener("resize", r, !1), () => {
          window.removeEventListener("resize", r, !1);
        };
  }, [
    r,
    t,
    n
  ]);
}
function kc(e, t) {
  if (!e) return !1;
  let n = window.getComputedStyle(e), r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r;
}
function rh(e, t) {
  let n = e;
  for (kc(n, t) && (n = n.parentElement); n && !kc(n, t); ) n = n.parentElement;
  return n || document.scrollingElement || document.documentElement;
}
function Qx(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : nh() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function eb(e, t = !0) {
  let [n, r] = ve(!0), o = n && t;
  return fe(() => {
    if (o && e.current && "getAnimations" in e.current)
      for (let s of e.current.getAnimations()) s instanceof CSSTransition && s.cancel();
  }, [
    e,
    o
  ]), oh(e, o, Re(() => r(!1), [])), o;
}
function tb(e, t) {
  let [n, r] = ve(t ? "open" : "closed");
  switch (n) {
    case "open":
      t || r("exiting");
      break;
    case "closed":
    case "exiting":
      t && r("open");
      break;
  }
  let o = n === "exiting";
  return oh(e, o, Re(() => {
    r((s) => s === "exiting" ? "closed" : s);
  }, [])), o;
}
function oh(e, t, n) {
  fe(() => {
    if (t && e.current) {
      if (!("getAnimations" in e.current)) {
        n();
        return;
      }
      let r = e.current.getAnimations();
      if (r.length === 0) {
        n();
        return;
      }
      let o = !1;
      return Promise.all(r.map((s) => s.finished)).then(() => {
        o || Wp(() => {
          n();
        });
      }).catch(() => {
      }), () => {
        o = !0;
      };
    }
  }, [
    e,
    t,
    n
  ]);
}
function nb(e, t, n) {
  let [r, o] = ve(e || t), s = Q(e !== void 0), i = e !== void 0;
  me(() => {
    let c = s.current;
    c !== i && console.warn(`WARN: A component changed from ${c ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}.`), s.current = i;
  }, [
    i
  ]);
  let a = i ? e : r, l = Re((c, ...u) => {
    let f = (h, ...p) => {
      n && (Object.is(a, h) || n(h, ...p)), i || (a = h);
    };
    typeof c == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((p, ...v) => {
      let m = c(i ? a : p, ...v);
      return f(m, ...u), i ? p : m;
    })) : (i || o(c), f(c, ...u));
  }, [
    i,
    a,
    n
  ]);
  return [
    a,
    l
  ];
}
function Hs(e, t = -1 / 0, n = 1 / 0) {
  return Math.min(Math.max(e, t), n);
}
const Xr = Symbol("default");
function rb({ values: e, children: t }) {
  for (let [n, r] of e)
    t = /* @__PURE__ */ _.createElement(n.Provider, {
      value: r
    }, t);
  return t;
}
function sh(e) {
  let { className: t, style: n, children: r, defaultClassName: o, defaultChildren: s, defaultStyle: i, values: a } = e;
  return Ce(() => {
    let l, c, u;
    return typeof t == "function" ? l = t({
      ...a,
      defaultClassName: o
    }) : l = t, typeof n == "function" ? c = n({
      ...a,
      defaultStyle: i || {}
    }) : c = n, typeof r == "function" ? u = r({
      ...a,
      defaultChildren: s
    }) : r == null ? u = s : u = r, {
      className: l ?? o,
      style: c || i ? {
        ...i,
        ...c
      } : void 0,
      children: u ?? s,
      "data-rac": ""
    };
  }, [
    t,
    n,
    r,
    o,
    s,
    i,
    a
  ]);
}
function ob(e, t) {
  let n = oe(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let r = new Intl.ListFormat().format(Object.keys(n.slots).map((s) => `"${s}"`));
    if (!t && !n.slots[Xr]) throw new Error(`A slot prop is required. Valid slot names are ${r}.`);
    let o = t || Xr;
    if (!n.slots[o])
      throw new Error(`Invalid slot "${t}". Valid slot names are ${r}.`);
    return n.slots[o];
  }
  return n;
}
function ih(e, t, n) {
  let r = ob(n, e.slot) || {}, { ref: o, ...s } = r, i = Zx(Ce(() => Dx(t, o), [
    t,
    o
  ])), a = wo(s, e);
  return "style" in s && s.style && "style" in e && e.style && (typeof s.style == "function" || typeof e.style == "function" ? a.style = (l) => {
    let c = typeof s.style == "function" ? s.style(l) : s.style, u = {
      ...l.defaultStyle,
      ...c
    }, f = typeof e.style == "function" ? e.style({
      ...l,
      defaultStyle: u
    }) : e.style;
    return {
      ...u,
      ...f
    };
  } : a.style = {
    ...s.style,
    ...e.style
  }), [
    a,
    i
  ];
}
if (typeof HTMLTemplateElement < "u") {
  const e = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
  Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.dataset.reactAriaHidden ? this.content.firstChild : e.call(this);
    }
  });
}
const sb = /* @__PURE__ */ ge(!1);
typeof DocumentFragment < "u" && new DocumentFragment();
function ib() {
  return oe(sb);
}
const ah = _.createContext({
  register: () => {
  }
});
ah.displayName = "PressResponderContext";
function ab({ children: e }) {
  let t = Ce(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ _.createElement(ah.Provider, {
    value: t
  }, e);
}
class lb {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = t;
  }
}
function cb(e) {
  let t = Q({
    isFocused: !1,
    observer: null
  });
  fe(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = or((r) => {
    e == null || e(r);
  });
  return Re((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, s = (i) => {
        t.current.isFocused = !1, o.disabled && n(new lb("blur", i)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", s, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var i;
          (i = t.current.observer) === null || i === void 0 || i.disconnect();
          let a = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: a
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: a
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
let dr = null, ub = /* @__PURE__ */ new Set(), Yn = /* @__PURE__ */ new Map(), Zt = !1, zs = !1;
function ra(e, t) {
  for (let n of ub) n(e, t);
}
function db(e) {
  return !(e.metaKey || !eh() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Zr(e) {
  Zt = !0, db(e) && (dr = "keyboard", ra("keyboard", e));
}
function Ze(e) {
  dr = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Zt = !0, ra("pointer", e));
}
function lh(e) {
  Qx(e) && (Zt = !0, dr = "virtual");
}
function ch(e) {
  e.target === window || e.target === document || (!Zt && !zs && (dr = "virtual", ra("virtual", e)), Zt = !1, zs = !1);
}
function uh() {
  Zt = !1, zs = !0;
}
function Ic(e) {
  if (typeof window > "u" || Yn.get(Yr(e))) return;
  const t = Yr(e), n = Me(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Zt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Zr, !0), n.addEventListener("keyup", Zr, !0), n.addEventListener("click", lh, !0), t.addEventListener("focus", ch, !0), t.addEventListener("blur", uh, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", Ze, !0), n.addEventListener("pointermove", Ze, !0), n.addEventListener("pointerup", Ze, !0)) : (n.addEventListener("mousedown", Ze, !0), n.addEventListener("mousemove", Ze, !0), n.addEventListener("mouseup", Ze, !0)), t.addEventListener("beforeunload", () => {
    dh(e);
  }, {
    once: !0
  }), Yn.set(t, {
    focus: r
  });
}
const dh = (e, t) => {
  const n = Yr(e), r = Me(e);
  t && r.removeEventListener("DOMContentLoaded", t), Yn.has(n) && (n.HTMLElement.prototype.focus = Yn.get(n).focus, r.removeEventListener("keydown", Zr, !0), r.removeEventListener("keyup", Zr, !0), r.removeEventListener("click", lh, !0), n.removeEventListener("focus", ch, !0), n.removeEventListener("blur", uh, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", Ze, !0), r.removeEventListener("pointermove", Ze, !0), r.removeEventListener("pointerup", Ze, !0)) : (r.removeEventListener("mousedown", Ze, !0), r.removeEventListener("mousemove", Ze, !0), r.removeEventListener("mouseup", Ze, !0)), Yn.delete(n));
};
function fb(e) {
  const t = Me(e);
  let n;
  return t.readyState !== "loading" ? Ic(e) : (n = () => {
    Ic(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => dh(e, n);
}
typeof document < "u" && fb();
function fh() {
  return dr;
}
function hh(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, s = Q({
    isFocusWithin: !1
  }), i = Re((c) => {
    s.current.isFocusWithin && !c.currentTarget.contains(c.relatedTarget) && (s.current.isFocusWithin = !1, n && n(c), o && o(!1));
  }, [
    n,
    o,
    s
  ]), a = cb(i), l = Re((c) => {
    !s.current.isFocusWithin && document.activeElement === c.target && (r && r(c), o && o(!0), s.current.isFocusWithin = !0, a(c));
  }, [
    r,
    o,
    a
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: l,
      onBlur: i
    }
  };
}
function hb(e) {
  let { ref: t, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: o } = e, s = Q({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), i = or((l) => {
    n && Sr(l, t) && (o && o(l), s.current.isPointerDown = !0);
  }), a = or((l) => {
    n && n(l);
  });
  me(() => {
    let l = s.current;
    if (r) return;
    const c = t.current, u = Me(c);
    if (typeof PointerEvent < "u") {
      let f = (h) => {
        l.isPointerDown && Sr(h, t) && a(h), l.isPointerDown = !1;
      };
      return u.addEventListener("pointerdown", i, !0), u.addEventListener("pointerup", f, !0), () => {
        u.removeEventListener("pointerdown", i, !0), u.removeEventListener("pointerup", f, !0);
      };
    } else {
      let f = (p) => {
        l.ignoreEmulatedMouseEvents ? l.ignoreEmulatedMouseEvents = !1 : l.isPointerDown && Sr(p, t) && a(p), l.isPointerDown = !1;
      }, h = (p) => {
        l.ignoreEmulatedMouseEvents = !0, l.isPointerDown && Sr(p, t) && a(p), l.isPointerDown = !1;
      };
      return u.addEventListener("mousedown", i, !0), u.addEventListener("mouseup", f, !0), u.addEventListener("touchstart", i, !0), u.addEventListener("touchend", h, !0), () => {
        u.removeEventListener("mousedown", i, !0), u.removeEventListener("mouseup", f, !0), u.removeEventListener("touchstart", i, !0), u.removeEventListener("touchend", h, !0);
      };
    }
  }, [
    t,
    r,
    i,
    a
  ]);
}
function Sr(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return t.current && !t.current.contains(e.target);
}
function Ws(e) {
  const t = Me(e);
  if (fh() === "virtual") {
    let n = t.activeElement;
    Yx(() => {
      t.activeElement === n && e.isConnected && Nc(e);
    });
  } else Nc(e);
}
function pb(e) {
  const t = Yr(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: r } = e.style, o = n !== "none" && r !== "hidden" && r !== "collapse";
  if (o) {
    const { getComputedStyle: s } = e.ownerDocument.defaultView;
    let { display: i, visibility: a } = s(e);
    o = i !== "none" && a !== "hidden" && a !== "collapse";
  }
  return o;
}
function mb(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function ph(e, t) {
  return e.nodeName !== "#comment" && pb(e) && mb(e, t) && (!e.parentElement || ph(e.parentElement, e));
}
const Dc = /* @__PURE__ */ _.createContext(null), qs = "react-aria-focus-scope-restore";
let le = null;
function vb(e) {
  let { children: t, contain: n, restoreFocus: r, autoFocus: o } = e, s = Q(null), i = Q(null), a = Q([]), { parentNode: l } = oe(Dc) || {}, c = Ce(() => new Gs({
    scopeRef: a
  }), [
    a
  ]);
  fe(() => {
    let h = l || Se.root;
    if (Se.getTreeNode(h.scopeRef) && le && !Jr(le, h.scopeRef)) {
      let p = Se.getTreeNode(le);
      p && (h = p);
    }
    h.addChild(c), Se.addNode(c);
  }, [
    c,
    l
  ]), fe(() => {
    let h = Se.getTreeNode(a);
    h && (h.contain = !!n);
  }, [
    n
  ]), fe(() => {
    var h;
    let p = (h = s.current) === null || h === void 0 ? void 0 : h.nextSibling, v = [], m = (g) => g.stopPropagation();
    for (; p && p !== i.current; )
      v.push(p), p.addEventListener(qs, m), p = p.nextSibling;
    return a.current = v, () => {
      for (let g of v) g.removeEventListener(qs, m);
    };
  }, [
    t
  ]), Tb(a, r, n), bb(a, n), Sb(a, r, n), Eb(a, o), me(() => {
    const h = Me(a.current ? a.current[0] : void 0).activeElement;
    let p = null;
    if (Je(h, a.current)) {
      for (let v of Se.traverse()) v.scopeRef && Je(h, v.scopeRef.current) && (p = v);
      p === Se.getTreeNode(a) && (le = p.scopeRef);
    }
  }, [
    a
  ]), fe(() => () => {
    var h, p, v;
    let m = (v = (p = Se.getTreeNode(a)) === null || p === void 0 || (h = p.parent) === null || h === void 0 ? void 0 : h.scopeRef) !== null && v !== void 0 ? v : null;
    (a === le || Jr(a, le)) && (!m || Se.getTreeNode(m)) && (le = m), Se.removeTreeNode(a);
  }, [
    a
  ]);
  let u = Ce(() => gb(a), []), f = Ce(() => ({
    focusManager: u,
    parentNode: c
  }), [
    c,
    u
  ]);
  return /* @__PURE__ */ _.createElement(Dc.Provider, {
    value: f
  }, /* @__PURE__ */ _.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: s
  }), t, /* @__PURE__ */ _.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: i
  }));
}
function gb(e) {
  return {
    focusNext(t = {}) {
      let n = e.current, { from: r, tabbable: o, wrap: s, accept: i } = t, a = r || Me(n[0]).activeElement, l = n[0].previousElementSibling, c = Kt(n), u = $t(c, {
        tabbable: o,
        accept: i
      }, n);
      u.currentNode = Je(a, n) ? a : l;
      let f = u.nextNode();
      return !f && s && (u.currentNode = l, f = u.nextNode()), f && bt(f, !0), f;
    },
    focusPrevious(t = {}) {
      let n = e.current, { from: r, tabbable: o, wrap: s, accept: i } = t, a = r || Me(n[0]).activeElement, l = n[n.length - 1].nextElementSibling, c = Kt(n), u = $t(c, {
        tabbable: o,
        accept: i
      }, n);
      u.currentNode = Je(a, n) ? a : l;
      let f = u.previousNode();
      return !f && s && (u.currentNode = l, f = u.previousNode()), f && bt(f, !0), f;
    },
    focusFirst(t = {}) {
      let n = e.current, { tabbable: r, accept: o } = t, s = Kt(n), i = $t(s, {
        tabbable: r,
        accept: o
      }, n);
      i.currentNode = n[0].previousElementSibling;
      let a = i.nextNode();
      return a && bt(a, !0), a;
    },
    focusLast(t = {}) {
      let n = e.current, { tabbable: r, accept: o } = t, s = Kt(n), i = $t(s, {
        tabbable: r,
        accept: o
      }, n);
      i.currentNode = n[n.length - 1].nextElementSibling;
      let a = i.previousNode();
      return a && bt(a, !0), a;
    }
  };
}
const oa = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])'
], yb = oa.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
oa.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const xb = oa.join(':not([hidden]):not([tabindex="-1"]),');
function Kt(e) {
  return e[0].parentElement;
}
function Hn(e) {
  let t = Se.getTreeNode(le);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function bb(e, t) {
  let n = Q(void 0), r = Q(void 0);
  fe(() => {
    let o = e.current;
    if (!t) {
      r.current && (cancelAnimationFrame(r.current), r.current = void 0);
      return;
    }
    const s = Me(o ? o[0] : void 0);
    let i = (c) => {
      if (c.key !== "Tab" || c.altKey || c.ctrlKey || c.metaKey || !Hn(e) || c.isComposing) return;
      let u = s.activeElement, f = e.current;
      if (!f || !Je(u, f)) return;
      let h = Kt(f), p = $t(h, {
        tabbable: !0
      }, f);
      if (!u) return;
      p.currentNode = u;
      let v = c.shiftKey ? p.previousNode() : p.nextNode();
      v || (p.currentNode = c.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, v = c.shiftKey ? p.previousNode() : p.nextNode()), c.preventDefault(), v && bt(v, !0);
    }, a = (c) => {
      (!le || Jr(le, e)) && Je(c.target, e.current) ? (le = e, n.current = c.target) : Hn(e) && !Mt(c.target, e) ? n.current ? n.current.focus() : le && le.current && Ks(le.current) : Hn(e) && (n.current = c.target);
    }, l = (c) => {
      r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
        let u = fh();
        if (!((u === "virtual" || u === null) && nh() && th()) && s.activeElement && Hn(e) && !Mt(s.activeElement, e))
          if (le = e, s.body.contains(c.target)) {
            var h;
            n.current = c.target, (h = n.current) === null || h === void 0 || h.focus();
          } else le.current && Ks(le.current);
      });
    };
    return s.addEventListener("keydown", i, !1), s.addEventListener("focusin", a, !1), o == null || o.forEach((c) => c.addEventListener("focusin", a, !1)), o == null || o.forEach((c) => c.addEventListener("focusout", l, !1)), () => {
      s.removeEventListener("keydown", i, !1), s.removeEventListener("focusin", a, !1), o == null || o.forEach((c) => c.removeEventListener("focusin", a, !1)), o == null || o.forEach((c) => c.removeEventListener("focusout", l, !1));
    };
  }, [
    e,
    t
  ]), fe(() => () => {
    r.current && cancelAnimationFrame(r.current);
  }, [
    r
  ]);
}
function mh(e) {
  return Mt(e);
}
function Je(e, t) {
  return !e || !t ? !1 : t.some((n) => n.contains(e));
}
function Mt(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: n } of Se.traverse(Se.getTreeNode(t)))
    if (n && Je(e, n.current)) return !0;
  return !1;
}
function wb(e) {
  return Mt(e, le);
}
function Jr(e, t) {
  var n;
  let r = (n = Se.getTreeNode(t)) === null || n === void 0 ? void 0 : n.parent;
  for (; r; ) {
    if (r.scopeRef === e) return !0;
    r = r.parent;
  }
  return !1;
}
function bt(e, t = !1) {
  if (e != null && !t) try {
    Ws(e);
  } catch {
  }
  else if (e != null) try {
    e.focus();
  } catch {
  }
}
function vh(e, t = !0) {
  let n = e[0].previousElementSibling, r = Kt(e), o = $t(r, {
    tabbable: t
  }, e);
  o.currentNode = n;
  let s = o.nextNode();
  return t && !s && (r = Kt(e), o = $t(r, {
    tabbable: !1
  }, e), o.currentNode = n, s = o.nextNode()), s;
}
function Ks(e, t = !0) {
  bt(vh(e, t));
}
function Eb(e, t) {
  const n = _.useRef(t);
  me(() => {
    if (n.current) {
      le = e;
      const r = Me(e.current ? e.current[0] : void 0);
      !Je(r.activeElement, le.current) && e.current && Ks(e.current);
    }
    n.current = !1;
  }, [
    e
  ]);
}
function Tb(e, t, n) {
  fe(() => {
    if (t || n) return;
    let r = e.current;
    const o = Me(r ? r[0] : void 0);
    let s = (i) => {
      let a = i.target;
      Je(a, e.current) ? le = e : mh(a) || (le = null);
    };
    return o.addEventListener("focusin", s, !1), r == null || r.forEach((i) => i.addEventListener("focusin", s, !1)), () => {
      o.removeEventListener("focusin", s, !1), r == null || r.forEach((i) => i.removeEventListener("focusin", s, !1));
    };
  }, [
    e,
    t,
    n
  ]);
}
function Vc(e) {
  let t = Se.getTreeNode(le);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function Sb(e, t, n) {
  const r = Q(typeof document < "u" ? Me(e.current ? e.current[0] : void 0).activeElement : null);
  fe(() => {
    let o = e.current;
    const s = Me(o ? o[0] : void 0);
    if (!t || n) return;
    let i = () => {
      (!le || Jr(le, e)) && Je(s.activeElement, e.current) && (le = e);
    };
    return s.addEventListener("focusin", i, !1), o == null || o.forEach((a) => a.addEventListener("focusin", i, !1)), () => {
      s.removeEventListener("focusin", i, !1), o == null || o.forEach((a) => a.removeEventListener("focusin", i, !1));
    };
  }, [
    e,
    n
  ]), fe(() => {
    const o = Me(e.current ? e.current[0] : void 0);
    if (!t) return;
    let s = (i) => {
      if (i.key !== "Tab" || i.altKey || i.ctrlKey || i.metaKey || !Hn(e) || i.isComposing) return;
      let a = o.activeElement;
      if (!Mt(a, e) || !Vc(e)) return;
      let l = Se.getTreeNode(e);
      if (!l) return;
      let c = l.nodeToRestore, u = $t(o.body, {
        tabbable: !0
      });
      u.currentNode = a;
      let f = i.shiftKey ? u.previousNode() : u.nextNode();
      if ((!c || !o.body.contains(c) || c === o.body) && (c = void 0, l.nodeToRestore = void 0), (!f || !Mt(f, e)) && c) {
        u.currentNode = c;
        do
          f = i.shiftKey ? u.previousNode() : u.nextNode();
        while (Mt(f, e));
        i.preventDefault(), i.stopPropagation(), f ? bt(f, !0) : mh(c) ? bt(c, !0) : a.blur();
      }
    };
    return n || o.addEventListener("keydown", s, !0), () => {
      n || o.removeEventListener("keydown", s, !0);
    };
  }, [
    e,
    t,
    n
  ]), fe(() => {
    const o = Me(e.current ? e.current[0] : void 0);
    if (!t) return;
    let s = Se.getTreeNode(e);
    if (s) {
      var i;
      return s.nodeToRestore = (i = r.current) !== null && i !== void 0 ? i : void 0, () => {
        let a = Se.getTreeNode(e);
        if (!a) return;
        let l = a.nodeToRestore;
        if (t && l && (o.activeElement && Mt(o.activeElement, e) || o.activeElement === o.body && Vc(e))) {
          let c = Se.clone();
          requestAnimationFrame(() => {
            if (o.activeElement === o.body) {
              let u = c.getTreeNode(e);
              for (; u; ) {
                if (u.nodeToRestore && u.nodeToRestore.isConnected) {
                  _c(u.nodeToRestore);
                  return;
                }
                u = u.parent;
              }
              for (u = c.getTreeNode(e); u; ) {
                if (u.scopeRef && u.scopeRef.current && Se.getTreeNode(u.scopeRef)) {
                  let f = vh(u.scopeRef.current, !0);
                  _c(f);
                  return;
                }
                u = u.parent;
              }
            }
          });
        }
      };
    }
  }, [
    e,
    t
  ]);
}
function _c(e) {
  e.dispatchEvent(new CustomEvent(qs, {
    bubbles: !0,
    cancelable: !0
  })) && bt(e);
}
function $t(e, t, n) {
  let r = t != null && t.tabbable ? xb : yb, o = Me(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode(s) {
      var i;
      return !(t == null || (i = t.from) === null || i === void 0) && i.contains(s) ? NodeFilter.FILTER_REJECT : s.matches(r) && ph(s) && (!n || Je(s, n)) && (!(t != null && t.accept) || t.accept(s)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (o.currentNode = t.from), o;
}
class sa {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, n, r) {
    let o = this.fastMap.get(n ?? null);
    if (!o) return;
    let s = new Gs({
      scopeRef: t
    });
    o.addChild(s), s.parent = o, this.fastMap.set(t, s), r && (s.nodeToRestore = r);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null) return;
    let n = this.fastMap.get(t);
    if (!n) return;
    let r = n.parent;
    for (let s of this.traverse()) s !== n && n.nodeToRestore && s.nodeToRestore && n.scopeRef && n.scopeRef.current && Je(s.nodeToRestore, n.scopeRef.current) && (s.nodeToRestore = n.nodeToRestore);
    let o = n.children;
    r && (r.removeChild(n), o.size > 0 && o.forEach((s) => r && r.addChild(s))), this.fastMap.delete(n.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0) for (let n of t.children) yield* this.traverse(n);
  }
  clone() {
    var t;
    let n = new sa();
    var r;
    for (let o of this.traverse()) n.addTreeNode(o.scopeRef, (r = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && r !== void 0 ? r : null, o.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Gs({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Gs {
  addChild(t) {
    this.children.add(t), t.parent = this;
  }
  removeChild(t) {
    this.children.delete(t), t.parent = void 0;
  }
  constructor(t) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = t.scopeRef;
  }
}
let Se = new sa();
const Ab = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), Pb = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function Rb(e) {
  if (Intl.Locale) {
    let n = new Intl.Locale(e).maximize(), r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r) return r.direction === "rtl";
    if (n.script) return Ab.has(n.script);
  }
  let t = e.split("-")[0];
  return Pb.has(t);
}
const Cb = Symbol.for("react-aria.i18n.locale");
function gh() {
  let e = typeof window < "u" && window[Cb] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: Rb(e) ? "rtl" : "ltr"
  };
}
let Ys = gh(), zn = /* @__PURE__ */ new Set();
function Bc() {
  Ys = gh();
  for (let e of zn) e(Ys);
}
function Ob() {
  let e = Qi(), [t, n] = ve(Ys);
  return me(() => (zn.size === 0 && window.addEventListener("languagechange", Bc), zn.add(n), () => {
    zn.delete(n), zn.size === 0 && window.removeEventListener("languagechange", Bc);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const Mb = /* @__PURE__ */ _.createContext(null);
function yh() {
  let e = Ob();
  return oe(Mb) || e;
}
const $b = Symbol.for("react-aria.i18n.locale"), Nb = Symbol.for("react-aria.i18n.strings");
let an;
class Eo {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, n) {
    let o = this.getStringsForLocale(n)[t];
    if (!o) throw new Error(`Could not find intl message ${t} in ${n} locale`);
    return o;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let n = this.strings[t];
    return n || (n = Lb(t, this.strings, this.defaultLocale), this.strings[t] = n), n;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let n = window[$b];
    if (an === void 0) {
      let o = window[Nb];
      if (!o) return null;
      an = {};
      for (let s in o) an[s] = new Eo({
        [n]: o[s]
      }, n);
    }
    let r = an == null ? void 0 : an[t];
    if (!r) throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return r;
  }
  constructor(t, n = "en-US") {
    this.strings = Object.fromEntries(Object.entries(t).filter(([, r]) => r)), this.defaultLocale = n;
  }
}
function Lb(e, t, n = "en-US") {
  if (t[e]) return t[e];
  let r = jb(e);
  if (t[r]) return t[r];
  for (let o in t)
    if (o.startsWith(r + "-")) return t[o];
  return t[n];
}
function jb(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const Fc = /* @__PURE__ */ new Map(), Uc = /* @__PURE__ */ new Map();
class kb {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, n) {
    let r = this.strings.getStringForLocale(t, this.locale);
    return typeof r == "function" ? r(n, this) : r;
  }
  plural(t, n, r = "cardinal") {
    let o = n["=" + t];
    if (o) return typeof o == "function" ? o() : o;
    let s = this.locale + ":" + r, i = Fc.get(s);
    i || (i = new Intl.PluralRules(this.locale, {
      type: r
    }), Fc.set(s, i));
    let a = i.select(t);
    return o = n[a] || n.other, typeof o == "function" ? o() : o;
  }
  number(t) {
    let n = Uc.get(this.locale);
    return n || (n = new Intl.NumberFormat(this.locale), Uc.set(this.locale, n)), n.format(t);
  }
  select(t, n) {
    let r = t[n] || t.other;
    return typeof r == "function" ? r() : r;
  }
  constructor(t, n) {
    this.locale = t, this.strings = n;
  }
}
const Hc = /* @__PURE__ */ new WeakMap();
function Ib(e) {
  let t = Hc.get(e);
  return t || (t = new Eo(e), Hc.set(e, t)), t;
}
function Db(e, t) {
  return t && Eo.getGlobalDictionaryForPackage(t) || Ib(e);
}
function Vb(e, t) {
  let { locale: n } = yh(), r = Db(e, t);
  return Ce(() => new kb(n, r), [
    n,
    r
  ]);
}
const zc = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function _b(e = {}) {
  let { style: t, isFocusable: n } = e, [r, o] = ve(!1), { focusWithinProps: s } = hh({
    isDisabled: !n,
    onFocusWithinChange: (a) => o(a)
  }), i = Ce(() => r ? t : t ? {
    ...zc,
    ...t
  } : zc, [
    r
  ]);
  return {
    visuallyHiddenProps: {
      ...s,
      style: i
    }
  };
}
function Bb(e) {
  let { children: t, elementType: n = "div", isFocusable: r, style: o, ...s } = e, { visuallyHiddenProps: i } = _b(e);
  return /* @__PURE__ */ _.createElement(n, wo(s, i), t);
}
const dt = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, Qr = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Fb = {
  top: "left",
  left: "top"
}, Xs = {
  top: "height",
  left: "width"
}, xh = {
  width: "totalWidth",
  height: "totalHeight"
}, Ar = {};
let Pe = typeof document < "u" ? window.visualViewport : null;
function Wc(e) {
  let t = 0, n = 0, r = 0, o = 0, s = 0, i = 0, a = {};
  var l;
  let c = ((l = Pe == null ? void 0 : Pe.scale) !== null && l !== void 0 ? l : 1) > 1;
  if (e.tagName === "BODY") {
    let v = document.documentElement;
    r = v.clientWidth, o = v.clientHeight;
    var u;
    t = (u = Pe == null ? void 0 : Pe.width) !== null && u !== void 0 ? u : r;
    var f;
    n = (f = Pe == null ? void 0 : Pe.height) !== null && f !== void 0 ? f : o, a.top = v.scrollTop || e.scrollTop, a.left = v.scrollLeft || e.scrollLeft, Pe && (s = Pe.offsetTop, i = Pe.offsetLeft);
  } else
    ({ width: t, height: n, top: s, left: i } = xn(e)), a.top = e.scrollTop, a.left = e.scrollLeft, r = t, o = n;
  if (Gx() && (e.tagName === "BODY" || e.tagName === "HTML") && c) {
    a.top = 0, a.left = 0;
    var h;
    s = (h = Pe == null ? void 0 : Pe.pageTop) !== null && h !== void 0 ? h : 0;
    var p;
    i = (p = Pe == null ? void 0 : Pe.pageLeft) !== null && p !== void 0 ? p : 0;
  }
  return {
    width: t,
    height: n,
    totalWidth: r,
    totalHeight: o,
    scroll: a,
    top: s,
    left: i
  };
}
function Ub(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function qc(e, t, n, r, o, s, i) {
  var a;
  let l = (a = o.scroll[e]) !== null && a !== void 0 ? a : 0, c = r[Xs[e]], u = r.scroll[dt[e]] + s, f = c + r.scroll[dt[e]] - s, h = t - l + i[e] - r[dt[e]], p = t - l + n + i[e] - r[dt[e]];
  return h < u ? u - h : p > f ? Math.max(f - p, u - h) : 0;
}
function Hb(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function Kc(e) {
  if (Ar[e]) return Ar[e];
  let [t, n] = e.split(" "), r = dt[t] || "right", o = Fb[r];
  dt[n] || (n = "center");
  let s = Xs[r], i = Xs[o];
  return Ar[e] = {
    placement: t,
    crossPlacement: n,
    axis: r,
    crossAxis: o,
    size: s,
    crossSize: i
  }, Ar[e];
}
function is(e, t, n, r, o, s, i, a, l, c) {
  let { placement: u, crossPlacement: f, axis: h, crossAxis: p, size: v, crossSize: m } = r, g = {};
  var x;
  g[p] = (x = e[p]) !== null && x !== void 0 ? x : 0;
  var y, T, A, S;
  f === "center" ? g[p] += (((y = e[m]) !== null && y !== void 0 ? y : 0) - ((T = n[m]) !== null && T !== void 0 ? T : 0)) / 2 : f !== p && (g[p] += ((A = e[m]) !== null && A !== void 0 ? A : 0) - ((S = n[m]) !== null && S !== void 0 ? S : 0)), g[p] += s;
  const P = e[p] - n[m] + l + c, R = e[p] + e[m] - l - c;
  if (g[p] = Hs(g[p], P, R), u === h) {
    const O = a ? i[v] : t[xh[v]];
    g[Qr[h]] = Math.floor(O - e[h] + o);
  } else g[h] = Math.floor(e[h] + e[v] + o);
  return g;
}
function zb(e, t, n, r, o, s, i, a) {
  const l = r ? n.height : t[xh.height];
  var c;
  let u = e.top != null ? n.top + e.top : n.top + (l - ((c = e.bottom) !== null && c !== void 0 ? c : 0) - i);
  var f, h, p, v, m, g;
  let x = a !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + ((f = t.scroll.top) !== null && f !== void 0 ? f : 0) - u - (((h = o.top) !== null && h !== void 0 ? h : 0) + ((p = o.bottom) !== null && p !== void 0 ? p : 0) + s))
  ) : Math.max(0, u + i - (t.top + ((v = t.scroll.top) !== null && v !== void 0 ? v : 0)) - (((m = o.top) !== null && m !== void 0 ? m : 0) + ((g = o.bottom) !== null && g !== void 0 ? g : 0) + s));
  return Math.min(t.height - s * 2, x);
}
function Gc(e, t, n, r, o, s) {
  let { placement: i, axis: a, size: l } = s;
  var c, u;
  if (i === a) return Math.max(0, n[a] - e[a] - ((c = e.scroll[a]) !== null && c !== void 0 ? c : 0) + t[a] - ((u = r[a]) !== null && u !== void 0 ? u : 0) - r[Qr[a]] - o);
  var f;
  return Math.max(0, e[l] + e[a] + e.scroll[a] - t[a] - n[a] - n[l] - ((f = r[a]) !== null && f !== void 0 ? f : 0) - r[Qr[a]] - o);
}
function Wb(e, t, n, r, o, s, i, a, l, c, u, f, h, p, v, m) {
  let g = Kc(e), { size: x, crossAxis: y, crossSize: T, placement: A, crossPlacement: S } = g, P = is(t, a, n, g, u, f, c, h, v, m), R = u, O = Gc(a, c, t, o, s + u, g);
  if (i && r[x] > O) {
    let Ve = Kc(`${Qr[A]} ${S}`), at = is(t, a, n, Ve, u, f, c, h, v, m);
    Gc(a, c, t, o, s + u, Ve) > O && (g = Ve, P = at, R = u);
  }
  let L = "bottom";
  g.axis === "top" ? g.placement === "top" ? L = "top" : g.placement === "bottom" && (L = "bottom") : g.crossAxis === "top" && (g.crossPlacement === "top" ? L = "bottom" : g.crossPlacement === "bottom" && (L = "top"));
  let N = qc(y, P[y], n[T], a, l, s, c);
  P[y] += N;
  let k = zb(P, a, c, h, o, s, n.height, L);
  p && p < k && (k = p), n.height = Math.min(n.height, k), P = is(t, a, n, g, R, f, c, h, v, m), N = qc(y, P[y], n[T], a, l, s, c), P[y] += N;
  let W = {}, B = t[y] + 0.5 * t[T] - P[y] - o[dt[y]];
  const I = v / 2 + m;
  var K, U, j, $;
  const q = dt[y] === "left" ? ((K = o.left) !== null && K !== void 0 ? K : 0) + ((U = o.right) !== null && U !== void 0 ? U : 0) : ((j = o.top) !== null && j !== void 0 ? j : 0) + (($ = o.bottom) !== null && $ !== void 0 ? $ : 0), ue = n[T] - q - v / 2 - m, De = t[y] + v / 2 - (P[y] + o[dt[y]]), st = t[y] + t[T] - v / 2 - (P[y] + o[dt[y]]), it = Hs(B, De, st);
  return W[y] = Hs(it, I, ue), {
    position: P,
    maxHeight: k,
    arrowOffsetLeft: W.left,
    arrowOffsetTop: W.top,
    placement: g.placement
  };
}
function qb(e) {
  let { placement: t, targetNode: n, overlayNode: r, scrollNode: o, padding: s, shouldFlip: i, boundaryElement: a, offset: l, crossOffset: c, maxHeight: u, arrowSize: f = 0, arrowBoundaryOffset: h = 0 } = e, p = r instanceof HTMLElement ? Kb(r) : document.documentElement, v = p === document.documentElement;
  const m = window.getComputedStyle(p).position;
  let g = !!m && m !== "static", x = v ? xn(n) : Yc(n, p);
  if (!v) {
    let { marginTop: W, marginLeft: B } = window.getComputedStyle(n);
    x.top += parseInt(W, 10) || 0, x.left += parseInt(B, 10) || 0;
  }
  let y = xn(r), T = Hb(r);
  var A, S;
  y.width += ((A = T.left) !== null && A !== void 0 ? A : 0) + ((S = T.right) !== null && S !== void 0 ? S : 0);
  var P, R;
  y.height += ((P = T.top) !== null && P !== void 0 ? P : 0) + ((R = T.bottom) !== null && R !== void 0 ? R : 0);
  let O = Ub(o), L = Wc(a), N = Wc(p), k = a.tagName === "BODY" ? xn(p) : Yc(p, a);
  return p.tagName === "HTML" && a.tagName === "BODY" && (N.scroll.top = 0, N.scroll.left = 0), Wb(t, x, y, O, T, s, i, L, N, k, l, c, g, u, f, h);
}
function xn(e) {
  let { top: t, left: n, width: r, height: o } = e.getBoundingClientRect(), { scrollTop: s, scrollLeft: i, clientTop: a, clientLeft: l } = document.documentElement;
  return {
    top: t + s - a,
    left: n + i - l,
    width: r,
    height: o
  };
}
function Yc(e, t) {
  let n = window.getComputedStyle(e), r;
  if (n.position === "fixed") {
    let { top: o, left: s, width: i, height: a } = e.getBoundingClientRect();
    r = {
      top: o,
      left: s,
      width: i,
      height: a
    };
  } else {
    r = xn(e);
    let o = xn(t), s = window.getComputedStyle(t);
    o.top += (parseInt(s.borderTopWidth, 10) || 0) - t.scrollTop, o.left += (parseInt(s.borderLeftWidth, 10) || 0) - t.scrollLeft, r.top -= o.top, r.left -= o.left;
  }
  return r.top -= parseInt(n.marginTop, 10) || 0, r.left -= parseInt(n.marginLeft, 10) || 0, r;
}
function Kb(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Xc(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !Xc(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function Xc(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const Gb = /* @__PURE__ */ new WeakMap();
function Yb(e) {
  let { triggerRef: t, isOpen: n, onClose: r } = e;
  me(() => {
    if (!n || r === null) return;
    let o = (s) => {
      let i = s.target;
      if (!t.current || i instanceof Node && !i.contains(t.current) || s.target instanceof HTMLInputElement || s.target instanceof HTMLTextAreaElement) return;
      let a = r || Gb.get(t.current);
      a && a();
    };
    return window.addEventListener("scroll", o, !0), () => {
      window.removeEventListener("scroll", o, !0);
    };
  }, [
    n,
    r,
    t
  ]);
}
let xe = typeof document < "u" ? window.visualViewport : null;
function Xb(e) {
  let { direction: t } = yh(), { arrowSize: n = 0, targetRef: r, overlayRef: o, scrollRef: s = o, placement: i = "bottom", containerPadding: a = 12, shouldFlip: l = !0, boundaryElement: c = typeof document < "u" ? document.body : null, offset: u = 0, crossOffset: f = 0, shouldUpdatePosition: h = !0, isOpen: p = !0, onClose: v, maxHeight: m, arrowBoundaryOffset: g = 0 } = e, [x, y] = ve(null), T = [
    h,
    i,
    o.current,
    r.current,
    s.current,
    a,
    l,
    c,
    u,
    f,
    p,
    t,
    m,
    g,
    n
  ], A = Q(xe == null ? void 0 : xe.scale);
  me(() => {
    p && (A.current = xe == null ? void 0 : xe.scale);
  }, [
    p
  ]);
  let S = Re(() => {
    if (h === !1 || !p || !o.current || !r.current || !c || (xe == null ? void 0 : xe.scale) !== A.current) return;
    let N = null;
    if (s.current && s.current.contains(document.activeElement)) {
      var k;
      let $ = (k = document.activeElement) === null || k === void 0 ? void 0 : k.getBoundingClientRect(), q = s.current.getBoundingClientRect();
      var W;
      if (N = {
        type: "top",
        offset: ((W = $ == null ? void 0 : $.top) !== null && W !== void 0 ? W : 0) - q.top
      }, N.offset > q.height / 2) {
        N.type = "bottom";
        var B;
        N.offset = ((B = $ == null ? void 0 : $.bottom) !== null && B !== void 0 ? B : 0) - q.bottom;
      }
    }
    let I = o.current;
    if (!m && o.current) {
      var K;
      I.style.top = "0px", I.style.bottom = "";
      var U;
      I.style.maxHeight = ((U = (K = window.visualViewport) === null || K === void 0 ? void 0 : K.height) !== null && U !== void 0 ? U : window.innerHeight) + "px";
    }
    let j = qb({
      placement: Jb(i, t),
      overlayNode: o.current,
      targetNode: r.current,
      scrollNode: s.current || o.current,
      padding: a,
      shouldFlip: l,
      boundaryElement: c,
      offset: u,
      crossOffset: f,
      maxHeight: m,
      arrowSize: n,
      arrowBoundaryOffset: g
    });
    if (j.position) {
      if (I.style.top = "", I.style.bottom = "", I.style.left = "", I.style.right = "", Object.keys(j.position).forEach(($) => I.style[$] = j.position[$] + "px"), I.style.maxHeight = j.maxHeight != null ? j.maxHeight + "px" : "", N && document.activeElement && s.current) {
        let $ = document.activeElement.getBoundingClientRect(), q = s.current.getBoundingClientRect(), ue = $[N.type] - q[N.type];
        s.current.scrollTop += ue - N.offset;
      }
      y(j);
    }
  }, T);
  fe(S, T), Zb(S), jc({
    ref: o,
    onResize: S
  }), jc({
    ref: r,
    onResize: S
  });
  let P = Q(!1);
  fe(() => {
    let N, k = () => {
      P.current = !0, clearTimeout(N), N = setTimeout(() => {
        P.current = !1;
      }, 500), S();
    }, W = () => {
      P.current && k();
    };
    return xe == null || xe.addEventListener("resize", k), xe == null || xe.addEventListener("scroll", W), () => {
      xe == null || xe.removeEventListener("resize", k), xe == null || xe.removeEventListener("scroll", W);
    };
  }, [
    S
  ]);
  let R = Re(() => {
    P.current || v == null || v();
  }, [
    v,
    P
  ]);
  Yb({
    triggerRef: r,
    isOpen: p,
    onClose: v && R
  });
  var O, L;
  return {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...x == null ? void 0 : x.position,
        maxHeight: (O = x == null ? void 0 : x.maxHeight) !== null && O !== void 0 ? O : "100vh"
      }
    },
    placement: (L = x == null ? void 0 : x.placement) !== null && L !== void 0 ? L : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: x == null ? void 0 : x.arrowOffsetLeft,
        top: x == null ? void 0 : x.arrowOffsetTop
      }
    },
    updatePosition: S
  };
}
function Zb(e) {
  fe(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function Jb(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
const xt = [];
function Qb(e, t) {
  let { onClose: n, shouldCloseOnBlur: r, isOpen: o, isDismissable: s = !1, isKeyboardDismissDisabled: i = !1, shouldCloseOnInteractOutside: a } = e;
  me(() => (o && xt.push(t), () => {
    let v = xt.indexOf(t);
    v >= 0 && xt.splice(v, 1);
  }), [
    o,
    t
  ]);
  let l = () => {
    xt[xt.length - 1] === t && n && n();
  }, c = (v) => {
    (!a || a(v.target)) && xt[xt.length - 1] === t && (v.stopPropagation(), v.preventDefault());
  }, u = (v) => {
    (!a || a(v.target)) && (xt[xt.length - 1] === t && (v.stopPropagation(), v.preventDefault()), l());
  }, f = (v) => {
    v.key === "Escape" && !i && !v.nativeEvent.isComposing && (v.stopPropagation(), v.preventDefault(), l());
  };
  hb({
    ref: t,
    onInteractOutside: s && o ? u : void 0,
    onInteractOutsideStart: c
  });
  let { focusWithinProps: h } = hh({
    isDisabled: !r,
    onBlurWithin: (v) => {
      !v.relatedTarget || wb(v.relatedTarget) || (!a || a(v.relatedTarget)) && (n == null || n());
    }
  }), p = (v) => {
    v.target === v.currentTarget && v.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: f,
      ...h
    },
    underlayProps: {
      onPointerDown: p
    }
  };
}
const as = typeof document < "u" && window.visualViewport, ew = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let Pr = 0, ls;
function tw(e = {}) {
  let { isDisabled: t } = e;
  fe(() => {
    if (!t)
      return Pr++, Pr === 1 && (Kx() ? ls = rw() : ls = nw()), () => {
        Pr--, Pr === 0 && ls();
      };
  }, [
    t
  ]);
}
function nw() {
  return Gr(mn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), mn(document.documentElement, "overflow", "hidden"));
}
function rw() {
  let e, t, n = (c) => {
    e = rh(c.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = mn(e, "overscrollBehavior", "contain"));
  }, r = (c) => {
    if (!e || e === document.documentElement || e === document.body) {
      c.preventDefault();
      return;
    }
    e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && c.preventDefault();
  }, o = () => {
    t && t();
  }, s = (c) => {
    let u = c.target;
    ow(u) && (a(), u.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      u.style.transform = "", as && (as.height < window.innerHeight ? requestAnimationFrame(() => {
        Zc(u);
      }) : as.addEventListener("resize", () => Zc(u), {
        once: !0
      }));
    }));
  }, i = null, a = () => {
    if (i) return;
    let c = () => {
      window.scrollTo(0, 0);
    }, u = window.pageXOffset, f = window.pageYOffset;
    i = Gr(Dn(window, "scroll", c), mn(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), mn(document.documentElement, "overflow", "hidden"), mn(document.body, "marginTop", `-${f}px`), () => {
      window.scrollTo(u, f);
    }), window.scrollTo(0, 0);
  }, l = Gr(Dn(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Dn(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Dn(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), Dn(document, "focus", s, !0));
  return () => {
    t == null || t(), i == null || i(), l();
  };
}
function mn(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Dn(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Zc(e) {
  let t = document.scrollingElement || document.documentElement, n = e;
  for (; n && n !== t; ) {
    let r = rh(n);
    if (r !== document.documentElement && r !== document.body && r !== n) {
      let o = r.getBoundingClientRect().top, s = n.getBoundingClientRect().top;
      s > o + n.clientHeight && (r.scrollTop += s - o);
    }
    n = r.parentElement;
  }
}
function ow(e) {
  return e instanceof HTMLInputElement && !ew.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
var bh = {};
bh = {
  dismiss: "تجاهل"
};
var wh = {};
wh = {
  dismiss: "Отхвърляне"
};
var Eh = {};
Eh = {
  dismiss: "Odstranit"
};
var Th = {};
Th = {
  dismiss: "Luk"
};
var Sh = {};
Sh = {
  dismiss: "Schließen"
};
var Ah = {};
Ah = {
  dismiss: "Απόρριψη"
};
var Ph = {};
Ph = {
  dismiss: "Dismiss"
};
var Rh = {};
Rh = {
  dismiss: "Descartar"
};
var Ch = {};
Ch = {
  dismiss: "Lõpeta"
};
var Oh = {};
Oh = {
  dismiss: "Hylkää"
};
var Mh = {};
Mh = {
  dismiss: "Rejeter"
};
var $h = {};
$h = {
  dismiss: "התעלם"
};
var Nh = {};
Nh = {
  dismiss: "Odbaci"
};
var Lh = {};
Lh = {
  dismiss: "Elutasítás"
};
var jh = {};
jh = {
  dismiss: "Ignora"
};
var kh = {};
kh = {
  dismiss: "閉じる"
};
var Ih = {};
Ih = {
  dismiss: "무시"
};
var Dh = {};
Dh = {
  dismiss: "Atmesti"
};
var Vh = {};
Vh = {
  dismiss: "Nerādīt"
};
var _h = {};
_h = {
  dismiss: "Lukk"
};
var Bh = {};
Bh = {
  dismiss: "Negeren"
};
var Fh = {};
Fh = {
  dismiss: "Zignoruj"
};
var Uh = {};
Uh = {
  dismiss: "Descartar"
};
var Hh = {};
Hh = {
  dismiss: "Dispensar"
};
var zh = {};
zh = {
  dismiss: "Revocare"
};
var Wh = {};
Wh = {
  dismiss: "Пропустить"
};
var qh = {};
qh = {
  dismiss: "Zrušiť"
};
var Kh = {};
Kh = {
  dismiss: "Opusti"
};
var Gh = {};
Gh = {
  dismiss: "Odbaci"
};
var Yh = {};
Yh = {
  dismiss: "Avvisa"
};
var Xh = {};
Xh = {
  dismiss: "Kapat"
};
var Zh = {};
Zh = {
  dismiss: "Скасувати"
};
var Jh = {};
Jh = {
  dismiss: "取消"
};
var Qh = {};
Qh = {
  dismiss: "關閉"
};
var ep = {};
ep = {
  "ar-AE": bh,
  "bg-BG": wh,
  "cs-CZ": Eh,
  "da-DK": Th,
  "de-DE": Sh,
  "el-GR": Ah,
  "en-US": Ph,
  "es-ES": Rh,
  "et-EE": Ch,
  "fi-FI": Oh,
  "fr-FR": Mh,
  "he-IL": $h,
  "hr-HR": Nh,
  "hu-HU": Lh,
  "it-IT": jh,
  "ja-JP": kh,
  "ko-KR": Ih,
  "lt-LT": Dh,
  "lv-LV": Vh,
  "nb-NO": _h,
  "nl-NL": Bh,
  "pl-PL": Fh,
  "pt-BR": Uh,
  "pt-PT": Hh,
  "ro-RO": zh,
  "ru-RU": Wh,
  "sk-SK": qh,
  "sl-SI": Kh,
  "sr-SP": Gh,
  "sv-SE": Yh,
  "tr-TR": Xh,
  "uk-UA": Zh,
  "zh-CN": Jh,
  "zh-TW": Qh
};
function sw(e) {
  return e && e.__esModule ? e.default : e;
}
function Jc(e) {
  let { onDismiss: t, ...n } = e, r = Vb(sw(ep), "@react-aria/overlays"), o = Xx(n, r.format("dismiss")), s = () => {
    t && t();
  };
  return /* @__PURE__ */ _.createElement(Bb, null, /* @__PURE__ */ _.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: s,
    style: {
      width: 1,
      height: 1
    }
  }));
}
let Vn = /* @__PURE__ */ new WeakMap(), Ye = [];
function iw(e, t = document.body) {
  let n = new Set(e), r = /* @__PURE__ */ new Set(), o = (l) => {
    for (let h of l.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) n.add(h);
    let c = (h) => {
      if (n.has(h) || h.parentElement && r.has(h.parentElement) && h.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
      for (let p of n)
        if (h.contains(p)) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, u = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
      acceptNode: c
    }), f = c(l);
    if (f === NodeFilter.FILTER_ACCEPT && s(l), f !== NodeFilter.FILTER_REJECT) {
      let h = u.nextNode();
      for (; h != null; )
        s(h), h = u.nextNode();
    }
  }, s = (l) => {
    var c;
    let u = (c = Vn.get(l)) !== null && c !== void 0 ? c : 0;
    l.getAttribute("aria-hidden") === "true" && u === 0 || (u === 0 && l.setAttribute("aria-hidden", "true"), r.add(l), Vn.set(l, u + 1));
  };
  Ye.length && Ye[Ye.length - 1].disconnect(), o(t);
  let i = new MutationObserver((l) => {
    for (let c of l)
      if (!(c.type !== "childList" || c.addedNodes.length === 0) && ![
        ...n,
        ...r
      ].some((u) => u.contains(c.target))) {
        for (let u of c.removedNodes) u instanceof Element && (n.delete(u), r.delete(u));
        for (let u of c.addedNodes)
          (u instanceof HTMLElement || u instanceof SVGElement) && (u.dataset.liveAnnouncer === "true" || u.dataset.reactAriaTopLayer === "true") ? n.add(u) : u instanceof Element && o(u);
      }
  });
  i.observe(t, {
    childList: !0,
    subtree: !0
  });
  let a = {
    observe() {
      i.observe(t, {
        childList: !0,
        subtree: !0
      });
    },
    disconnect() {
      i.disconnect();
    }
  };
  return Ye.push(a), () => {
    i.disconnect();
    for (let l of r) {
      let c = Vn.get(l);
      c != null && (c === 1 ? (l.removeAttribute("aria-hidden"), Vn.delete(l)) : Vn.set(l, c - 1));
    }
    a === Ye[Ye.length - 1] ? (Ye.pop(), Ye.length && Ye[Ye.length - 1].observe()) : Ye.splice(Ye.indexOf(a), 1);
  };
}
function aw(e, t) {
  let { triggerRef: n, popoverRef: r, isNonModal: o, isKeyboardDismissDisabled: s, shouldCloseOnInteractOutside: i, ...a } = e, { overlayProps: l, underlayProps: c } = Qb({
    // If popover is in the top layer, it should not prevent other popovers from being dismissed.
    isOpen: t.isOpen && !a["data-react-aria-top-layer"],
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !o,
    isKeyboardDismissDisabled: s,
    shouldCloseOnInteractOutside: i
  }, r), { overlayProps: u, arrowProps: f, placement: h } = Xb({
    ...a,
    targetRef: n,
    overlayRef: r,
    isOpen: t.isOpen,
    onClose: o ? t.close : null
  });
  return tw({
    isDisabled: o || !t.isOpen
  }), fe(() => {
    if (t.isOpen && !o && r.current) return iw([
      r.current
    ]);
  }, [
    o,
    t.isOpen,
    r
  ]), {
    popoverProps: wo(l, u),
    arrowProps: f,
    underlayProps: c,
    placement: h
  };
}
const lw = /* @__PURE__ */ ge({});
function cw() {
  var e;
  return (e = oe(lw)) !== null && e !== void 0 ? e : {};
}
const tp = /* @__PURE__ */ _.createContext(null);
function uw(e) {
  let t = Qi(), { portalContainer: n = t ? null : document.body, isExiting: r } = e, [o, s] = ve(!1), i = Ce(() => ({
    contain: o,
    setContain: s
  }), [
    o,
    s
  ]), { getContainer: a } = cw();
  if (!e.portalContainer && a && (n = a()), !n) return null;
  let l = e.children;
  return e.disableFocusManagement || (l = /* @__PURE__ */ _.createElement(vb, {
    restoreFocus: !0,
    contain: o && !r
  }, l)), l = /* @__PURE__ */ _.createElement(tp.Provider, {
    value: i
  }, /* @__PURE__ */ _.createElement(ab, null, l)), /* @__PURE__ */ nu.createPortal(l, n);
}
function dw() {
  let e = oe(tp), t = e == null ? void 0 : e.setContain;
  fe(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function fw(e, t) {
  let { role: n = "dialog" } = e, r = Ix();
  r = e["aria-label"] ? void 0 : r;
  let o = Q(!1);
  return me(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      Ws(t.current);
      let s = setTimeout(() => {
        document.activeElement === t.current && (o.current = !0, t.current && (t.current.blur(), Ws(t.current)), o.current = !1);
      }, 500);
      return () => {
        clearTimeout(s);
      };
    }
  }, [
    t
  ]), dw(), {
    dialogProps: {
      ...ea(e, {
        labelable: !0
      }),
      role: n,
      tabIndex: -1,
      "aria-labelledby": e["aria-labelledby"] || r,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (s) => {
        o.current && s.stopPropagation();
      }
    },
    titleProps: {
      id: r
    }
  };
}
const hw = /* @__PURE__ */ ge({});
function pw(e) {
  let [t, n] = nb(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const r = Re(() => {
    n(!0);
  }, [
    n
  ]), o = Re(() => {
    n(!1);
  }, [
    n
  ]), s = Re(() => {
    n(!t);
  }, [
    n,
    t
  ]);
  return {
    isOpen: t,
    setOpen: n,
    open: r,
    close: o,
    toggle: s
  };
}
const mw = /* @__PURE__ */ ge({
  placement: "bottom"
}), vw = /* @__PURE__ */ ge(null), gw = /* @__PURE__ */ Vt(function(t, n) {
  [t, n] = ih(t, n, vw);
  let r = oe(np), o = pw(t), s = t.isOpen != null || t.defaultOpen != null || !r ? o : r, i = tb(n, s.isOpen) || t.isExiting || !1;
  if (ib()) {
    let l = t.children;
    return typeof l == "function" && (l = l({
      trigger: t.trigger || null,
      placement: "bottom",
      isEntering: !1,
      isExiting: !1,
      defaultChildren: null
    })), /* @__PURE__ */ _.createElement(_.Fragment, null, l);
  }
  return s && !s.isOpen && !i ? null : /* @__PURE__ */ _.createElement(yw, {
    ...t,
    triggerRef: t.triggerRef,
    state: s,
    popoverRef: n,
    isExiting: i
  });
});
function yw({ state: e, isExiting: t, UNSTABLE_portalContainer: n, ...r }) {
  let o = Q(null), [s, i] = ve(0);
  fe(() => {
    o.current && e.isOpen && i(o.current.getBoundingClientRect().width);
  }, [
    e.isOpen,
    o
  ]);
  var a;
  let { popoverProps: l, underlayProps: c, arrowProps: u, placement: f } = aw({
    ...r,
    offset: (a = r.offset) !== null && a !== void 0 ? a : 8,
    arrowSize: s
  }, e), h = r.popoverRef, p = eb(h, !!f) || r.isEntering || !1, v = sh({
    ...r,
    defaultClassName: "react-aria-Popover",
    values: {
      trigger: r.trigger || null,
      placement: f,
      isEntering: p,
      isExiting: t
    }
  }), m = {
    ...l.style,
    ...v.style
  };
  return /* @__PURE__ */ _.createElement(uw, {
    ...r,
    isExiting: t,
    portalContainer: n
  }, !r.isNonModal && e.isOpen && /* @__PURE__ */ _.createElement("div", {
    "data-testid": "underlay",
    ...c,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ _.createElement("div", {
    ...wo(ea(r), l),
    ...v,
    ref: h,
    slot: r.slot || void 0,
    style: m,
    "data-trigger": r.trigger,
    "data-placement": f,
    "data-entering": p || void 0,
    "data-exiting": t || void 0
  }, !r.isNonModal && /* @__PURE__ */ _.createElement(Jc, {
    onDismiss: e.close
  }), /* @__PURE__ */ _.createElement(mw.Provider, {
    value: {
      ...u,
      placement: f,
      ref: o
    }
  }, v.children), /* @__PURE__ */ _.createElement(Jc, {
    onDismiss: e.close
  })));
}
const xw = /* @__PURE__ */ ge(null), np = /* @__PURE__ */ ge(null), bw = /* @__PURE__ */ Vt(function(t, n) {
  let r = t["aria-labelledby"];
  [t, n] = ih(t, n, xw);
  let { dialogProps: o, titleProps: s } = fw({
    ...t,
    // Only pass aria-labelledby from props, not context.
    // Context is used as a fallback below.
    "aria-labelledby": r
  }, n), i = oe(np);
  !o["aria-label"] && !o["aria-labelledby"] && (t["aria-labelledby"] ? o["aria-labelledby"] = t["aria-labelledby"] : console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));
  let a = sh({
    defaultClassName: "react-aria-Dialog",
    className: t.className,
    style: t.style,
    children: t.children,
    values: {
      close: (i == null ? void 0 : i.close) || (() => {
      })
    }
  });
  return /* @__PURE__ */ _.createElement("section", {
    ...ea(t),
    ...o,
    ...a,
    ref: n,
    slot: t.slot || void 0
  }, /* @__PURE__ */ _.createElement(rb, {
    values: [
      [
        Tx,
        {
          slots: {
            [Xr]: {},
            title: {
              ...s,
              level: 2
            }
          }
        }
      ],
      [
        hw,
        {
          slots: {
            [Xr]: {},
            close: {
              onPress: () => i == null ? void 0 : i.close()
            }
          }
        }
      ]
    ]
  }, a.children));
});
function rp({ isOpen: e, setOpen: t, children: n }) {
  const r = Q(null);
  return /* @__PURE__ */ d.jsx("div", { ref: r, children: /* @__PURE__ */ d.jsx(Jg, { children: e ? /* @__PURE__ */ d.jsx(
    gw,
    {
      className: "max-w-screen",
      isOpen: !0,
      triggerRef: r,
      onOpenChange: t,
      children: /* @__PURE__ */ d.jsx(
        pn.div,
        {
          initial: { opacity: 0, y: -10, scale: 0.99 },
          animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              default: {
                type: "spring",
                duration: 0.3,
                bounce: 0.4
              },
              opacity: { duration: 0.25, bounce: 0.75 }
            }
          },
          exit: {
            opacity: 0,
            y: -10,
            scale: 0.99,
            transition: {
              y: {
                type: "spring",
                duration: 0.1,
                bounce: 0
              },
              opacity: { duration: 0.1, bounce: 0 }
            }
          },
          transition: {},
          className: "bg-grey-950 border border-grey-700 rounded-[0.75rem] shadow-2xl overflow-clip w-full sm:w-auto sm:min-w-[320px] max-w-full",
          children: /* @__PURE__ */ d.jsx(bw, { children: n })
        }
      )
    }
  ) : null }) });
}
function op(e) {
  const { isOpen: t, setOpen: n, children: r } = e;
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      type: "button",
      className: `ml-auto mr-0 text-14 inline-flex gap-2 hover:bg-grey-800 border border-grey-800/50 hover:border-grey-700 px-2 py-1.5 bg-grey-900 rounded-[0.5rem] ${t ? "grayscale opacity-60 pointer-events-none" : ""} transition-all duration-300`,
      onClick: () => n((o) => !o),
      disabled: t,
      children: r
    }
  );
}
function ww({ children: e }) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      className: "ml-auto mr-0 text-14 inline-flex gap-2   border border-grey-800/50 px-2 py-1.5 rounded-[0.5rem]  ",
      children: e
    }
  );
}
function ia(e) {
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
function _4(e) {
  const { name: t, children: n } = e, r = e.label || ia(t);
  return /* @__PURE__ */ d.jsx(yi, { name: t, children: n || /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(ri, { children: r }),
    /* @__PURE__ */ d.jsx(lu, { "variant-width": "full" }),
    /* @__PURE__ */ d.jsx(qg, {})
  ] }) });
}
function B4(e) {
  const { name: t, children: n, options: r, defaultValue: o, ...s } = e, i = e.label || ia(t);
  return /* @__PURE__ */ d.jsx(yi, { name: t, children: n || /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(ri, { children: i }),
    /* @__PURE__ */ d.jsx(
      _g,
      {
        defaultValue: o,
        options: r,
        ...s
      }
    )
  ] }) });
}
function F4(e) {
  const { label: t, ...n } = e;
  return /* @__PURE__ */ d.jsx(ru, { type: "submit", variant: "primary", "variant-flex": "start", ...n, children: t });
}
function U4(e) {
  const { address: t, onDisconnect: n } = e, r = e.name || "wallet-address", o = e.label || ia(r);
  function s(i) {
    n && typeof n == "function" && n(i);
  }
  return /* @__PURE__ */ d.jsxs(yi, { name: r, children: [
    /* @__PURE__ */ d.jsxs(ri, { children: [
      o,
      " "
    ] }),
    /* @__PURE__ */ d.jsxs(jo, { subvariants: { width: "full" }, children: [
      /* @__PURE__ */ d.jsx(jo.Segment, { subvariants: { pointer: "none" }, children: /* @__PURE__ */ d.jsx(ke, { name: "Wallet", width: "20" }) }),
      /* @__PURE__ */ d.jsx(
        lu,
        {
          type: "text",
          defaultValue: t ?? "",
          variant: "transparent",
          subvariants: { width: "full" },
          readOnly: !0
        }
      ),
      /* @__PURE__ */ d.jsx(jo.Segment, { children: /* @__PURE__ */ d.jsxs(
        ru,
        {
          variant: "tertiary",
          className: "self-center",
          onClick: s,
          children: [
            /* @__PURE__ */ d.jsx(ke, { name: "Signout", width: "16" }),
            "Disconnect"
          ]
        }
      ) })
    ] })
  ] });
}
function Ew(e, t) {
  return b.useReducer((n, r) => t[n][r] ?? n, e);
}
var aa = (e) => {
  const { present: t, children: n } = e, r = Tw(t), o = typeof n == "function" ? n({ present: r.isPresent }) : b.Children.only(n), s = Ae(r.ref, Sw(o));
  return typeof n == "function" || r.isPresent ? b.cloneElement(o, { ref: s }) : null;
};
aa.displayName = "Presence";
function Tw(e) {
  const [t, n] = b.useState(), r = b.useRef({}), o = b.useRef(e), s = b.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = Ew(i, {
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
  return b.useEffect(() => {
    const c = Rr(r.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), Ie(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const h = s.current, p = Rr(c);
      e ? l("MOUNT") : p === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ie(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, f = (p) => {
        const m = Rr(r.current).includes(p.animationName);
        if (p.target === t && m && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, h = (p) => {
        p.target === t && (s.current = Rr(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: b.useCallback((c) => {
      c && (r.current = getComputedStyle(c)), n(c);
    }, [])
  };
}
function Rr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Sw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var [To, H4] = fu("Tooltip", [
  lo
]), So = lo(), sp = "TooltipProvider", Aw = 700, Zs = "tooltip.open", [Pw, la] = To(sp), ip = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Aw,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, [i, a] = b.useState(!0), l = b.useRef(!1), c = b.useRef(0);
  return b.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ d.jsx(
    Pw,
    {
      scope: t,
      isOpenDelayed: i,
      delayDuration: n,
      onOpen: b.useCallback(() => {
        window.clearTimeout(c.current), a(!1);
      }, []),
      onClose: b.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: b.useCallback((u) => {
        l.current = u;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
ip.displayName = sp;
var Ao = "Tooltip", [Rw, fr] = To(Ao), ap = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, l = la(Ao, e.__scopeTooltip), c = So(t), [u, f] = b.useState(null), h = oo(), p = b.useRef(0), v = i ?? l.disableHoverableContent, m = a ?? l.delayDuration, g = b.useRef(!1), [x = !1, y] = gs({
    prop: r,
    defaultProp: o,
    onChange: (R) => {
      R ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Zs))) : l.onClose(), s == null || s(R);
    }
  }), T = b.useMemo(() => x ? g.current ? "delayed-open" : "instant-open" : "closed", [x]), A = b.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, g.current = !1, y(!0);
  }, [y]), S = b.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, y(!1);
  }, [y]), P = b.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      g.current = !0, y(!0), p.current = 0;
    }, m);
  }, [m, y]);
  return b.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ d.jsx(Iu, { ...c, children: /* @__PURE__ */ d.jsx(
    Rw,
    {
      scope: t,
      contentId: h,
      open: x,
      stateAttribute: T,
      trigger: u,
      onTriggerChange: f,
      onTriggerEnter: b.useCallback(() => {
        l.isOpenDelayed ? P() : A();
      }, [l.isOpenDelayed, P, A]),
      onTriggerLeave: b.useCallback(() => {
        v ? S() : (window.clearTimeout(p.current), p.current = 0);
      }, [S, v]),
      onOpen: A,
      onClose: S,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
ap.displayName = Ao;
var Js = "TooltipTrigger", lp = b.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = fr(Js, n), s = la(Js, n), i = So(n), a = b.useRef(null), l = Ae(t, a, o.onTriggerChange), c = b.useRef(!1), u = b.useRef(!1), f = b.useCallback(() => c.current = !1, []);
    return b.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ d.jsx(Du, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      we.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: ce(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !u.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: ce(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: ce(e.onPointerDown, () => {
          c.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: ce(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: ce(e.onBlur, o.onClose),
        onClick: ce(e.onClick, o.onClose)
      }
    ) });
  }
);
lp.displayName = Js;
var ca = "TooltipPortal", [Cw, Ow] = To(ca, {
  forceMount: void 0
}), cp = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = fr(ca, t);
  return /* @__PURE__ */ d.jsx(Cw, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(aa, { present: n || s.open, children: /* @__PURE__ */ d.jsx(pi, { asChild: !0, container: o, children: r }) }) });
};
cp.displayName = ca;
var Sn = "TooltipContent", up = b.forwardRef(
  (e, t) => {
    const n = Ow(Sn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = fr(Sn, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(aa, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ d.jsx(dp, { side: o, ...s, ref: t }) : /* @__PURE__ */ d.jsx(Mw, { side: o, ...s, ref: t }) });
  }
), Mw = b.forwardRef((e, t) => {
  const n = fr(Sn, e.__scopeTooltip), r = la(Sn, e.__scopeTooltip), o = b.useRef(null), s = Ae(t, o), [i, a] = b.useState(null), { trigger: l, onClose: c } = n, u = o.current, { onPointerInTransitChange: f } = r, h = b.useCallback(() => {
    a(null), f(!1);
  }, [f]), p = b.useCallback(
    (v, m) => {
      const g = v.currentTarget, x = { x: v.clientX, y: v.clientY }, y = Lw(x, g.getBoundingClientRect()), T = jw(x, y), A = kw(m.getBoundingClientRect()), S = Dw([...T, ...A]);
      a(S), f(!0);
    },
    [f]
  );
  return b.useEffect(() => () => h(), [h]), b.useEffect(() => {
    if (l && u) {
      const v = (g) => p(g, u), m = (g) => p(g, l);
      return l.addEventListener("pointerleave", v), u.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", v), u.removeEventListener("pointerleave", m);
      };
    }
  }, [l, u, p, h]), b.useEffect(() => {
    if (i) {
      const v = (m) => {
        const g = m.target, x = { x: m.clientX, y: m.clientY }, y = (l == null ? void 0 : l.contains(g)) || (u == null ? void 0 : u.contains(g)), T = !Iw(x, i);
        y ? h() : T && (h(), c());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, u, i, c, h]), /* @__PURE__ */ d.jsx(dp, { ...e, ref: s });
}), [$w, Nw] = To(Ao, { isInside: !1 }), dp = b.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, l = fr(Sn, n), c = So(n), { onClose: u } = l;
    return b.useEffect(() => (document.addEventListener(Zs, u), () => document.removeEventListener(Zs, u)), [u]), b.useEffect(() => {
      if (l.trigger) {
        const f = (h) => {
          const p = h.target;
          p != null && p.contains(l.trigger) && u();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, u]), /* @__PURE__ */ d.jsx(
      oi,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ d.jsxs(
          Vu,
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
              /* @__PURE__ */ d.jsx(du, { children: r }),
              /* @__PURE__ */ d.jsx($w, { scope: n, isInside: !0, children: /* @__PURE__ */ d.jsx(hv, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
up.displayName = Sn;
var fp = "TooltipArrow", hp = b.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = So(n);
    return Nw(
      fp,
      n
    ).isInside ? null : /* @__PURE__ */ d.jsx(_u, { ...o, ...r, ref: t });
  }
);
hp.displayName = fp;
function Lw(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
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
function jw(e, t, n = 5) {
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
function kw(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Iw(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x, l = t[s].y, c = t[i].x, u = t[i].y;
    l > r != u > r && n < (c - a) * (r - l) / (u - l) + a && (o = !o);
  }
  return o;
}
function Dw(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Vw(t);
}
function Vw(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var _w = ip, Bw = ap, Fw = lp, Uw = cp, Hw = up, zw = hp;
function z4({ to: e }) {
  return e ? /* @__PURE__ */ d.jsx(_w, { delayDuration: 100, children: /* @__PURE__ */ d.jsxs(Bw, { children: [
    /* @__PURE__ */ d.jsx(Fw, { className: "github-corner", asChild: !0, children: /* @__PURE__ */ d.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ d.jsxs(
      "svg",
      {
        width: "80",
        height: "80",
        viewBox: "0 0 250 250",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ d.jsx("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
          /* @__PURE__ */ d.jsx(
            "path",
            {
              d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
              fill: "currentColor",
              className: "octo-arm"
            }
          ),
          /* @__PURE__ */ d.jsx(
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
    /* @__PURE__ */ d.jsx(Uw, { children: /* @__PURE__ */ d.jsxs(
      Hw,
      {
        side: "right",
        className: "bg-white rounded-md text-black text-14 px-2 py-0.5",
        children: [
          "View source on GitHub",
          /* @__PURE__ */ d.jsx(zw, {})
        ]
      }
    ) })
  ] }) }) : null;
}
const pp = ge(null);
function Ww() {
  const e = oe(pp);
  if (!e)
    throw new Error(
      "useSequenceDemoKit must be used within a SequenceBoilerplateProvider"
    );
  return e;
}
function qw(e) {
  const { children: t, ...n } = ze(
    "root",
    e
  );
  return /* @__PURE__ */ d.jsx("div", { ...n, children: t });
}
const Kw = "https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/";
function Gw({
  name: e,
  description: t,
  githubUrl: n,
  docsUrl: r,
  useAuth: o,
  faucetUrl: s,
  wagmi: i,
  children: a
}) {
  return /* @__PURE__ */ d.jsx(
    pp.Provider,
    {
      value: {
        githubUrl: n,
        docsUrl: r || Kw,
        name: e,
        description: t,
        faucetUrl: s,
        wagmi: i,
        useAuth: o
      },
      children: a
    }
  );
}
const Yw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAv0SURBVHgB7VzfbxXHFf5m7/q6BoMdt4hfsZ2iliQP8FgpSkjTqI3UQtU2D41alLZ5qBRQm5e0Cu5Dq9JK8MAzPPYJmryTvyCpFNTQNCUiCSWKbFISktRgsAFj352cMztz99zx7N25cM0P537SaHZnzu6d/fbMOXNmdi7QQw899NBDDz300EMPHUJrrarK3DnnLsnz0HG7+wcQI7NsuKkfb/NgSuQ6UL7kVp2UK6V0qC2h8tuFjgj0iJPHiShTXn3Vb2gUhGUl5cySLiHLf1m3FdEECvJcnqAgzKWk5FxeZ26HpcRloi7zcinra+IdJTBFZwgRJpOy95TnMndw5EiiGuLcHSssJfGOkRVCpwQ6SPJqKEhL7bkksiZkGY4ER5pL8lyJHCi00+SyK9MxayTuFDohUCGsgSkK4jj1oSC1JpLfhR1hCzZfFOe+LFAQqmUXvpMOhNEJgdxQac+YqCGbBih9Ba1kcr3TwBCBiyhIk7k7dmRmtswRzloX6srtzuWxu/8skT+LW0SnGshgYjZTGqXUj9au62udq3N2kMuc7ZPdd9FLIfJkYvgkai9HhRy/CL73DKULROYN3AQ69cJfo/QgpToKO+dIcQSFkhzmOCfRQKGJzgYuiGOpiWXklWmZLinToj1ShsljEi+iQ3RC4AOUjaOwfaz+05SuWxHXsFAuvbEcnvgORGqcr3lBTzyNaTWCkU7tILeFTc6Qzd31nxKJF9ABoggk8ljzHkZBwBSlK1g6lJFkOQJDg2vpif3kNLOB8rFgN8eBg5RGUGjlFJF4OfbiShtI5PEb2oJiaHEGeVcDWjXK1bvy0MC6eVu0DqJDREmSgRKSpqenMTIyglsA9yTuRZtsGzfTM88RiY2Yiys1kG7G3XbMnrLmTWOpVoVCvJhQrkyrdKDel+k2ViG38fwbnxGBn8VcFOOF19vc2Tyg/KFCZDkt9fMQQvVVpHUrlLuKXBN5ZMEqHUVg0q6StG/Y3pAx7Vcj3N1CNi2Uh1KZzSsFd+EuYs7miTVdlUgq6lej0KpruAtB9q+b3XoexUvrCoGpuGE0gYdfvjaMexOLNmelqcdcEGMDo23Md36JvTrLJlavrg+99s+Fqc0bkn2Hfl87Xib/5D+w49MF7EsUxvvoVSYJNIU5qlaDpjGQojJdSyinFlAOk1MFy6ZUlyoozhMqS7mOzvvoWq7n69OakZmh8lMb6zj47H2YjHiM0KihrXApPA/873ayj/wMu6/P6yNrVms00yqNbVv1theerS9p+A/ewPb/zuJ1Ji3NCYEhRNljkWrKEuZkRHmfI6+4h5E1RFuCFc850AjikSE8+sSACd3awQUL7Ik/qZCt7MLRmJ3DzqbV10w+TDsmP8bOkPzkNeyxsmY6Ree5Ft5IL/FSLKNMeT6dYH8qsxea5Dx5BpXRTahOWbmxt65gF6rhz122RdcIpJ/N3yw/oe0Buq04ZpqE0cPah3dEGWLp4ZvzLk2CtZFVfAN3rTlWgnwtBpKiEamu1D6GP3/ZFl0jcN0IjmnzFLogAXpqy/p60AY+MIijZPsuZ05p+dKCSC3JFAslTaINubDjH0t0k2AsGQdxN5787XocRzX8pYhK4VJYGzhuT99CBZ76NXZdv97YO7hKja1ZlU198+vpS399AafK5H/1NsZOTmMvNWKY7Jmup1BEqja2LRGOg21brWkL2fMZZ1Gzxwk7DidXOA8jSzZW9ZMl+dYwDkfYP8ZW5AR+TDbwoyrhKgLZgTgC2zqRFYSHkBN4ngg8VyVcNYyJnu5aQXAzSlHP3j0nsnKwLF64m+HS3Q45vxkl3A73PHF/O49Ow0o5MVyJmFAumsRDezA++Q72LC5gJ4dgHGKRVwV7ySQxYZiyuQm/2EOa+jSX4VCMy2s2PKOk3LGyXpmTqmGq3o9juw/gaFlbnnkT26c1jgz3Y9uJOcys68fhv4zhQMRj+LPobdFVAj/4F47T6H+M4qZiOpeIUZmJIJC5AV0+xjbL4ZoI0laYjs2ALctluF43bCSR2PEgF6pFjF1vYMcrf8SlZ/bjVb8dv3gT42fm8Op9AxiyY8YhmkKfOPQJZn63AYfRHvKrikp0zYn84cfYQQSNi0jChVeqGFjbUEuUadvQZsilixCmGUVoNy5vlhnZq7PYHWrL2TlsI7KHdGuIx1Mtj6EargtHoWtOJO2nQWoetTsimu+QIgyti/BCmWAlP9eCFEOi5d5FHM3chhVatqSs8Te0IM89gDb3j7GHcmGsEl1zIvtfwX/Ipr0mH1FnrVomHqogCi1EwSdWiYmDrJA3ZA4M4UioLT+8n0I2hSkZCvIxTa0fjXiUroZy/PXBqD09hQi8+BR+Pn8Vj/PzG4Ov8jCMHYKyDqRmQyx2EFymcoejXVmaWlmuz52Kc0bshIxTGRzGsZ/+iV5YCX5zGmPvz2JisI4dX+3H1CaKvfePRhG4w/JyliKR96uEYwnkF/gOvhz4NnJezsQQGNPPo7vxCoH8WKASsTbwyxiJRAv30IpoB+KEqyDmJeNw/uXpe3VVjtHRDNTNfuIbxNvPX9yLRT2R9iVrL5+4PFVfi4ktf15bvir3HK3K/R8T9H7GahTHpcYTa+OJTVhHc/DWY5tFolQ1w0HyxFrZCVNabGJhTddnyoR7tSQPHZOMv/69RNec+saYPhha3LpVVHlh/pDyfnt6up3syec+351dVYdrdYVanWaF6zWd0vGqh5Pto88PLmn4j/Zg++kP81W5mo2TTdxLBJphjyFEWQK1Wc5sHieKCeQZZ5WXayQuVq5RHRHH1xpZs15CZcjOPfl4/dGnn6iclf6u5eVdYv/dCtnu2cD5S3rnwo2GWryRqca81pwvzGfq6oeN4Krc2Y+wx74+E7hrLVbazCBacexMK2555CcjC20i5nxQncuIaCazi3KZ3QBlzigc12rsxMmF2FW5aMTMSEfZv8aCvsRP1LCrStosTFLXmg+HlTQYnsFCHmzkEQM9LfLdYExakgchRZ0NovPWqDxcaU5J5NB2PVDnIYwJ/8wioZuQgI5ZExFBaDVihjFRTiQZUn9fnM/AmmcTkYrJNePhLxNGN+IYPftlQ0xmo7liz1xLaOd4y6tzgjLtYjzDOHSxMlfIWc01A7sEkwderMeuykUjxgZusqfvoQKv/+TCrsY1vTetJaOqH+dGtg689NDBNeWrcvtoVe49syo3ZJyGcRbsCHKbp3KngdyBKF1L2cGwjdNI3NxhLaPjRPel+Wq6kS3sJc03Kl3vV5OPbU+PPP39qFW5jmxgDIEbrVwlgSsE37N5V5yI+4Cce0YfVj7WiOOFmAuqCJSftA1g5YMJdPY+pru3J5BUmD97dV/LD+HOwf8euxspBPehOX9k/jkiEBOJ8L4JtoP8xSZ/sTqH2wf5oEmgTpXI+6MGHcj9zTZMngtBJxGJWALXIZ/q3oD8S/0o+9AlSK1xD+6XSw11kOT4WyUyT47N04P2eu51U7HDwagxD3lj7r5b7Cl3aVbvK1heSFLkDIlcNZOfYTiNcrkkTW7akVtnucxtInJO8g3qvucRGUREDxqJRO7G60Wj2EOzob2G1jfaDfg2T67Vlm0pA8o3dfu7BFhuLfKvb4dQECWHLt0l0LRIa94/wd24L9DQhlfm5ypwnqB1BlhOZsoN23IXqNxO69dJTdVe2xyB7jcy0R7+Ov8kkfc/8QzdJ9C0Smv+ep1JXIuiu/jkOGQldT5pUrPcsdz57hPWZ5M7TsQ1EL/l70vxNzfyLk3euvaBPZabuZeHQAkik73yIFqJ0N5DlP2ur4GqpNzXPEmgJFZ5bfA39Ljts2x63K6ri/a8Ge/fVgKXE25SAUt3g/qESlsIFM/kb6Et+38GuTMKxX8xmL9iqCSwqzPSywTXFRVa7ZbsorIHuLqQE/G1smW2qfW/GOKGMXc7gbI7ZeKYx6GscSHy5LWOREmmHNYEyTMX65apxlLctV2YIbqxP6yRY0LXzYO3wNIxoQ6U42b/Eele6cK+pwdatTKE0LDJj0BywfB/ckX9H81drYE+3B/uyFxUhwhuIcnJx/zXTGwX7qGHHnrooYceeuihhx5uAl8APH6TkU/4a3AAAAAASUVORK5CYII=";
function Qs(e, t, n) {
  var r, o, s, i, a;
  t == null && (t = 100);
  function l() {
    var u = Date.now() - i;
    u < t && u >= 0 ? r = setTimeout(l, t - u) : (r = null, n || (a = e.apply(s, o), s = o = null));
  }
  var c = function() {
    s = this, o = arguments, i = Date.now();
    var u = n && !r;
    return r || (r = setTimeout(l, t)), u && (a = e.apply(s, o), s = o = null), a;
  };
  return c.clear = function() {
    r && (clearTimeout(r), r = null);
  }, c.flush = function() {
    r && (a = e.apply(s, o), s = o = null, clearTimeout(r), r = null);
  }, c;
}
Qs.debounce = Qs;
var Xw = Qs;
const Qc = /* @__PURE__ */ qp(Xw);
function Zw(e) {
  let {
    debounce: t,
    scroll: n,
    polyfill: r,
    offsetSize: o
  } = {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
  };
  const s = r || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!s)
    throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [i, a] = ve({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  }), l = Q({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: i
  }), c = t ? typeof t == "number" ? t : t.scroll : null, u = t ? typeof t == "number" ? t : t.resize : null, f = Q(!1);
  me(() => (f.current = !0, () => void (f.current = !1)));
  const [h, p, v] = Ce(() => {
    const y = () => {
      if (!l.current.element) return;
      const {
        left: T,
        top: A,
        width: S,
        height: P,
        bottom: R,
        right: O,
        x: L,
        y: N
      } = l.current.element.getBoundingClientRect(), k = {
        left: T,
        top: A,
        width: S,
        height: P,
        bottom: R,
        right: O,
        x: L,
        y: N
      };
      l.current.element instanceof HTMLElement && o && (k.height = l.current.element.offsetHeight, k.width = l.current.element.offsetWidth), Object.freeze(k), f.current && !t4(l.current.lastBounds, k) && a(l.current.lastBounds = k);
    };
    return [y, u ? Qc(y, u) : y, c ? Qc(y, c) : y];
  }, [a, o, c, u]);
  function m() {
    l.current.scrollContainers && (l.current.scrollContainers.forEach((y) => y.removeEventListener("scroll", v, !0)), l.current.scrollContainers = null), l.current.resizeObserver && (l.current.resizeObserver.disconnect(), l.current.resizeObserver = null);
  }
  function g() {
    l.current.element && (l.current.resizeObserver = new s(v), l.current.resizeObserver.observe(l.current.element), n && l.current.scrollContainers && l.current.scrollContainers.forEach((y) => y.addEventListener("scroll", v, {
      capture: !0,
      passive: !0
    })));
  }
  const x = (y) => {
    !y || y === l.current.element || (m(), l.current.element = y, l.current.scrollContainers = mp(y), g());
  };
  return Qw(v, !!n), Jw(p), me(() => {
    m(), g();
  }, [n, v, p]), me(() => m, []), [x, i, h];
}
function Jw(e) {
  me(() => {
    const t = e;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [e]);
}
function Qw(e, t) {
  me(() => {
    if (t) {
      const n = e;
      return window.addEventListener("scroll", n, {
        capture: !0,
        passive: !0
      }), () => void window.removeEventListener("scroll", n, !0);
    }
  }, [e, t]);
}
function mp(e) {
  const t = [];
  if (!e || e === document.body) return t;
  const {
    overflow: n,
    overflowX: r,
    overflowY: o
  } = window.getComputedStyle(e);
  return [n, r, o].some((s) => s === "auto" || s === "scroll") && t.push(e), [...t, ...mp(e.parentElement)];
}
const e4 = ["x", "y", "top", "bottom", "left", "right", "width", "height"], t4 = (e, t) => e4.every((n) => e[n] === t[n]);
function n4(e) {
  return !e || e.length < 8 ? e : `${e.slice(0, 5)}...${e.slice(-3)}`;
}
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, eo.apply(null, arguments);
}
class r4 {
  constructor(t, n) {
    this.hostname = void 0, this.fetch = void 0, this.path = "/rpc/Indexer/", this.ping = (r, o) => this.fetch(this.url("Ping"), re({}, r, o)).then((s) => ie(s).then((i) => ({
      status: i.status
    })), (s) => {
      throw J.new({
        cause: `fetch(): ${s.message || ""}`
      });
    }), this.version = (r, o) => this.fetch(this.url("Version"), re({}, r, o)).then((s) => ie(s).then((i) => ({
      version: i.version
    })), (s) => {
      throw J.new({
        cause: `fetch(): ${s.message || ""}`
      });
    }), this.runtimeStatus = (r, o) => this.fetch(this.url("RuntimeStatus"), re({}, r, o)).then((s) => ie(s).then((i) => ({
      status: i.status
    })), (s) => {
      throw J.new({
        cause: `fetch(): ${s.message || ""}`
      });
    }), this.getChainID = (r, o) => this.fetch(this.url("GetChainID"), re({}, r, o)).then((s) => ie(s).then((i) => ({
      chainID: i.chainID
    })), (s) => {
      throw J.new({
        cause: `fetch(): ${s.message || ""}`
      });
    }), this.getEtherBalance = (r, o, s) => this.fetch(this.url("GetEtherBalance"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      balance: a.balance
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getNativeTokenBalance = (r, o, s) => this.fetch(this.url("GetNativeTokenBalance"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      balance: a.balance
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getTokenBalancesSummary = (r, o, s) => this.fetch(this.url("GetTokenBalancesSummary"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      page: a.page,
      balances: a.balances
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getTokenBalancesDetails = (r, o, s) => this.fetch(this.url("GetTokenBalancesDetails"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      page: a.page,
      balances: a.balances
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getTokenBalancesByContract = (r, o, s) => this.fetch(this.url("GetTokenBalancesByContract"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      page: a.page,
      balances: a.balances
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getTokenBalances = (r, o, s) => this.fetch(this.url("GetTokenBalances"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      page: a.page,
      balances: a.balances
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getTokenSupplies = (r, o, s) => this.fetch(this.url("GetTokenSupplies"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      page: a.page,
      contractType: a.contractType,
      tokenIDs: a.tokenIDs
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getTokenSuppliesMap = (r, o, s) => this.fetch(this.url("GetTokenSuppliesMap"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      supplies: a.supplies
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getBalanceUpdates = (r, o, s) => this.fetch(this.url("GetBalanceUpdates"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      page: a.page,
      balances: a.balances
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getTransactionHistory = (r, o, s) => this.fetch(this.url("GetTransactionHistory"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      page: a.page,
      transactions: a.transactions
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.syncBalance = (r, o, s) => this.fetch(this.url("SyncBalance"), re(r, o, s)).then((i) => ie(i).then((a) => ({})), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.fetchTransactionReceipt = (r, o, s) => this.fetch(this.url("FetchTransactionReceipt"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      receipt: a.receipt
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getOrderbookOrders = (r, o, s) => this.fetch(this.url("GetOrderbookOrders"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      page: a.page,
      orders: a.orders
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getTopOrders = (r, o, s) => this.fetch(this.url("GetTopOrders"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      orders: a.orders
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.fetchTransactionReceiptWithFilter = (r, o, s) => this.fetch(this.url("FetchTransactionReceiptWithFilter"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      receipt: a.receipt
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getAllWebhookListeners = (r, o, s) => this.fetch(this.url("GetAllWebhookListeners"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      listeners: a.listeners
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.getWebhookListener = (r, o, s) => this.fetch(this.url("GetWebhookListener"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      listener: a.listener
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.addWebhookListener = (r, o, s) => this.fetch(this.url("AddWebhookListener"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      status: a.status,
      listener: a.listener
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.updateWebhookListener = (r, o, s) => this.fetch(this.url("UpdateWebhookListener"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      status: a.status
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.removeWebhookListener = (r, o, s) => this.fetch(this.url("RemoveWebhookListener"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      status: a.status
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.toggleWebhookListener = (r, o, s) => this.fetch(this.url("ToggleWebhookListener"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      webhookListener: a.webhookListener
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.pauseAllWebhookListeners = (r, o, s) => this.fetch(this.url("PauseAllWebhookListeners"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      status: a.status
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.resumeAllWebhookListeners = (r, o, s) => this.fetch(this.url("ResumeAllWebhookListeners"), re(r, o, s)).then((i) => ie(i).then((a) => ({
      status: a.status
    })), (i) => {
      throw J.new({
        cause: `fetch(): ${i.message || ""}`
      });
    }), this.subscribeReceipts = (r, o) => {
      const s = () => this.fetch(this.url("SubscribeReceipts"), re(r, o.headers, o.signal)).then(async function(i) {
        await cs(i, o, s);
      }, (i) => {
        o.onError(i, s);
      });
      return s();
    }, this.subscribeEvents = (r, o) => {
      const s = () => this.fetch(this.url("SubscribeEvents"), re(r, o.headers, o.signal)).then(async function(i) {
        await cs(i, o, s);
      }, (i) => {
        o.onError(i, s);
      });
      return s();
    }, this.subscribeBalanceUpdates = (r, o) => {
      const s = () => this.fetch(this.url("SubscribeBalanceUpdates"), re(r, o.headers, o.signal)).then(async function(i) {
        await cs(i, o, s);
      }, (i) => {
        o.onError(i, s);
      });
      return s();
    }, this.hostname = t.replace(/\/*$/, ""), this.fetch = (r, o) => n(r, o);
  }
  url(t) {
    return this.hostname + this.path + t;
  }
}
const cs = async (e, t, n) => {
  const {
    onMessage: r,
    onOpen: o,
    onClose: s,
    onError: i
  } = t;
  if (!e.ok) {
    try {
      await ie(e);
    } catch (v) {
      i(v, n);
    }
    return;
  }
  if (!e.body) {
    i(An.new({
      status: e.status,
      cause: "Invalid response, missing body"
    }), n);
    return;
  }
  o && o();
  const a = e.body.getReader(), l = new TextDecoder();
  let c = "", u = Date.now();
  const f = 11 * 1e3;
  let h = !1;
  const p = setInterval(() => {
    Date.now() - u > f && (h = !0, clearInterval(p), a.releaseLock());
  }, f);
  for (; ; ) {
    let v, m;
    try {
      if ({
        value: v,
        done: m
      } = await a.read(), h) throw new Error("Timeout, no data or heartbeat received");
      u = Date.now(), c += l.decode(v, {
        stream: !0
      });
    } catch (x) {
      let y = "";
      x instanceof Error && (y = x.message), x instanceof DOMException && x.name === "AbortError" ? i(J.new({
        message: "AbortError",
        cause: `AbortError: ${y}`
      }), () => {
        throw new Error("Abort signal cannot be used to reconnect");
      }) : i(Po.new({
        cause: `reader.read(): ${y}`
      }), n);
      return;
    }
    let g = c.split(`
`);
    for (let x = 0; x < g.length - 1; x++) {
      if (g[x].length == 0)
        continue;
      let y;
      try {
        if (y = JSON.parse(g[x]), y.hasOwnProperty("webrpcError")) {
          const T = y.webrpcError, A = typeof T.code == "number" ? T.code : 0;
          i((vp[A] || se).new(T), n);
          return;
        }
      } catch (T) {
        if (T instanceof Error && T.message === "Abort signal cannot be used to reconnect")
          throw T;
        i(An.new({
          status: e.status,
          // @ts-ignore
          cause: `JSON.parse(): ${T.message}`
        }), n);
      }
      r(y);
    }
    if (!m) {
      c = g[g.length - 1];
      continue;
    }
    s && s();
    return;
  }
}, re = (e = {}, t = {}, n = null) => ({
  method: "POST",
  headers: eo({}, t, {
    "Content-Type": "application/json"
  }),
  body: JSON.stringify(e || {}),
  signal: n
}), ie = (e) => e.text().then((t) => {
  let n;
  try {
    n = JSON.parse(t);
  } catch (r) {
    let o = "";
    throw r instanceof Error && (o = r.message), An.new({
      status: e.status,
      cause: `JSON.parse(): ${o}: response text: ${t}`
    });
  }
  if (!e.ok) {
    const r = typeof n.code == "number" ? n.code : 0;
    throw (vp[r] || se).new(n);
  }
  return n;
});
class se extends Error {
  constructor(t, n, r, o, s) {
    super(r), this.name = void 0, this.code = void 0, this.message = void 0, this.status = void 0, this.cause = void 0, this.msg = void 0, this.name = t || "WebrpcError", this.code = typeof n == "number" ? n : 0, this.message = r || `endpoint error ${this.code}`, this.msg = this.message, this.status = typeof o == "number" ? o : 0, this.cause = s, Object.setPrototypeOf(this, se.prototype);
  }
  static new(t) {
    return new this(t.error, t.code, t.message || t.msg, t.status, t.cause);
  }
}
class ua extends se {
  constructor(t = "WebrpcEndpoint", n = 0, r = "endpoint error", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, ua.prototype);
  }
}
class J extends se {
  constructor(t = "WebrpcRequestFailed", n = -1, r = "request failed", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, J.prototype);
  }
}
class da extends se {
  constructor(t = "WebrpcBadRoute", n = -2, r = "bad route", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, da.prototype);
  }
}
class fa extends se {
  constructor(t = "WebrpcBadMethod", n = -3, r = "bad method", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, fa.prototype);
  }
}
class ha extends se {
  constructor(t = "WebrpcBadRequest", n = -4, r = "bad request", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, ha.prototype);
  }
}
class An extends se {
  constructor(t = "WebrpcBadResponse", n = -5, r = "bad response", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, An.prototype);
  }
}
class pa extends se {
  constructor(t = "WebrpcServerPanic", n = -6, r = "server panic", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, pa.prototype);
  }
}
class ma extends se {
  constructor(t = "WebrpcInternalError", n = -7, r = "internal error", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, ma.prototype);
  }
}
class va extends se {
  constructor(t = "WebrpcClientDisconnected", n = -8, r = "client disconnected", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, va.prototype);
  }
}
class Po extends se {
  constructor(t = "WebrpcStreamLost", n = -9, r = "stream lost", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, Po.prototype);
  }
}
class ga extends se {
  constructor(t = "WebrpcStreamFinished", n = -10, r = "stream finished", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, ga.prototype);
  }
}
class ya extends se {
  constructor(t = "Unauthorized", n = 1e3, r = "Unauthorized access", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, ya.prototype);
  }
}
class xa extends se {
  constructor(t = "PermissionDenied", n = 1001, r = "Permission denied", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, xa.prototype);
  }
}
class ba extends se {
  constructor(t = "SessionExpired", n = 1002, r = "Session expired", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, ba.prototype);
  }
}
class wa extends se {
  constructor(t = "MethodNotFound", n = 1003, r = "Method not found", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, wa.prototype);
  }
}
class Ea extends se {
  constructor(t = "RequestConflict", n = 1004, r = "Conflict with target resource", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, Ea.prototype);
  }
}
class Ta extends se {
  constructor(t = "Aborted", n = 1005, r = "Request aborted", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, Ta.prototype);
  }
}
class Sa extends se {
  constructor(t = "Timeout", n = 2e3, r = "Request timed out", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, Sa.prototype);
  }
}
class Aa extends se {
  constructor(t = "InvalidArgument", n = 2001, r = "Invalid argument", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, Aa.prototype);
  }
}
class Pa extends se {
  constructor(t = "Unavailable", n = 2002, r = "Unavailable resource", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, Pa.prototype);
  }
}
class Ra extends se {
  constructor(t = "QueryFailed", n = 2003, r = "Query failed", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, Ra.prototype);
  }
}
class Ca extends se {
  constructor(t = "ResourceExhausted", n = 2004, r = "Resource exhausted", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, Ca.prototype);
  }
}
class Oa extends se {
  constructor(t = "NotFound", n = 3e3, r = "Resource not found", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, Oa.prototype);
  }
}
class Ma extends se {
  constructor(t = "ProjectNotFound", n = 3002, r = "Project not found", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, Ma.prototype);
  }
}
class $a extends se {
  constructor(t = "MetadataCallFailed", n = 3003, r = "Metadata service call failed", o = 0, s) {
    super(t, n, r, o, s), Object.setPrototypeOf(this, $a.prototype);
  }
}
const vp = {
  0: ua,
  [-1]: J,
  [-2]: da,
  [-3]: fa,
  [-4]: ha,
  [-5]: An,
  [-6]: pa,
  [-7]: ma,
  [-8]: va,
  [-9]: Po,
  [-10]: ga,
  1e3: ya,
  1001: xa,
  1002: ba,
  1003: wa,
  1004: Ea,
  1005: Ta,
  2e3: Sa,
  2001: Aa,
  2002: Pa,
  2003: Ra,
  2004: Ca,
  3e3: Oa,
  3002: Ma,
  3003: $a
};
class o4 extends r4 {
  constructor(t, n, r) {
    super(t.endsWith("/") ? t.slice(0, -1) : t, fetch), this.projectAccessKey = n, this.jwtAuth = r, this._fetch = (o, s) => {
      const i = {}, a = this.jwtAuth, l = this.projectAccessKey;
      return a && a.length > 0 && (i.Authorization = `BEARER ${a}`), l && l.length > 0 && (i["X-Access-Key"] = l), s.headers = eo({}, s.headers, i), fetch(o, s);
    }, this.fetch = this._fetch;
  }
}
let E = /* @__PURE__ */ function(e) {
  return e[e.MAINNET = 1] = "MAINNET", e[e.ROPSTEN = 3] = "ROPSTEN", e[e.RINKEBY = 4] = "RINKEBY", e[e.GOERLI = 5] = "GOERLI", e[e.KOVAN = 42] = "KOVAN", e[e.SEPOLIA = 11155111] = "SEPOLIA", e[e.POLYGON = 137] = "POLYGON", e[e.POLYGON_MUMBAI = 80001] = "POLYGON_MUMBAI", e[e.POLYGON_ZKEVM = 1101] = "POLYGON_ZKEVM", e[e.POLYGON_AMOY = 80002] = "POLYGON_AMOY", e[e.BSC = 56] = "BSC", e[e.BSC_TESTNET = 97] = "BSC_TESTNET", e[e.OPTIMISM = 10] = "OPTIMISM", e[e.OPTIMISM_KOVAN = 69] = "OPTIMISM_KOVAN", e[e.OPTIMISM_GOERLI = 420] = "OPTIMISM_GOERLI", e[e.OPTIMISM_SEPOLIA = 11155420] = "OPTIMISM_SEPOLIA", e[e.ARBITRUM = 42161] = "ARBITRUM", e[e.ARBITRUM_GOERLI = 421613] = "ARBITRUM_GOERLI", e[e.ARBITRUM_SEPOLIA = 421614] = "ARBITRUM_SEPOLIA", e[e.ARBITRUM_NOVA = 42170] = "ARBITRUM_NOVA", e[e.AVALANCHE = 43114] = "AVALANCHE", e[e.AVALANCHE_TESTNET = 43113] = "AVALANCHE_TESTNET", e[e.GNOSIS = 100] = "GNOSIS", e[e.BASE = 8453] = "BASE", e[e.BASE_GOERLI = 84531] = "BASE_GOERLI", e[e.BASE_SEPOLIA = 84532] = "BASE_SEPOLIA", e[e.HOMEVERSE_TESTNET = 40875] = "HOMEVERSE_TESTNET", e[e.HOMEVERSE = 19011] = "HOMEVERSE", e[e.XAI = 660279] = "XAI", e[e.XAI_SEPOLIA = 37714555429] = "XAI_SEPOLIA", e[e.XR_SEPOLIA = 2730] = "XR_SEPOLIA", e[e.TELOS = 40] = "TELOS", e[e.TELOS_TESTNET = 41] = "TELOS_TESTNET", e[e.B3 = 8333] = "B3", e[e.B3_SEPOLIA = 1993] = "B3_SEPOLIA", e[e.APECHAIN = 33139] = "APECHAIN", e[e.APECHAIN_TESTNET = 33111] = "APECHAIN_TESTNET", e[e.BLAST = 81457] = "BLAST", e[e.BLAST_SEPOLIA = 168587773] = "BLAST_SEPOLIA", e[e.BORNE_TESTNET = 94984] = "BORNE_TESTNET", e[e.SKALE_NEBULA = 1482601649] = "SKALE_NEBULA", e[e.SKALE_NEBULA_TESTNET = 37084624] = "SKALE_NEBULA_TESTNET", e[e.SONEIUM_MINATO = 1946] = "SONEIUM_MINATO", e[e.SONEIUM = 1868] = "SONEIUM", e[e.TOY_TESTNET = 21e6] = "TOY_TESTNET", e[e.IMMUTABLE_ZKEVM = 13371] = "IMMUTABLE_ZKEVM", e[e.IMMUTABLE_ZKEVM_TESTNET = 13473] = "IMMUTABLE_ZKEVM_TESTNET", e[e.ROOT_NETWORK = 7668] = "ROOT_NETWORK", e[e.ROOT_NETWORK_PORCINI = 7672] = "ROOT_NETWORK_PORCINI", e[e.LAOS = 6283] = "LAOS", e[e.LAOS_SIGMA_TESTNET = 62850] = "LAOS_SIGMA_TESTNET", e[e.HARDHAT = 31337] = "HARDHAT", e[e.HARDHAT_2 = 31338] = "HARDHAT_2", e;
}({}), D = /* @__PURE__ */ function(e) {
  return e.MAINNET = "mainnet", e.TESTNET = "testnet", e;
}({});
const ei = {
  [E.MAINNET]: {
    chainId: E.MAINNET,
    type: D.MAINNET,
    name: "mainnet",
    title: "Ethereum",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.MAINNET}.webp`,
    blockExplorer: {
      name: "Etherscan",
      rootUrl: "https://etherscan.io/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    },
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
  },
  [E.ROPSTEN]: {
    chainId: E.ROPSTEN,
    type: D.TESTNET,
    name: "ropsten",
    title: "Ropsten",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.ROPSTEN}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Etherscan (Ropsten)",
      rootUrl: "https://ropsten.etherscan.io/"
    },
    nativeToken: {
      symbol: "roETH",
      name: "Ropsten Ether",
      decimals: 18
    },
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    deprecated: !0
  },
  [E.RINKEBY]: {
    chainId: E.RINKEBY,
    type: D.TESTNET,
    name: "rinkeby",
    title: "Rinkeby",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.RINKEBY}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Etherscan (Rinkeby)",
      rootUrl: "https://rinkeby.etherscan.io/"
    },
    nativeToken: {
      symbol: "rETH",
      name: "Rinkeby Ether",
      decimals: 18
    },
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    deprecated: !0
  },
  [E.GOERLI]: {
    chainId: E.GOERLI,
    type: D.TESTNET,
    name: "goerli",
    title: "Goerli",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.GOERLI}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Etherscan (Goerli)",
      rootUrl: "https://goerli.etherscan.io/"
    },
    nativeToken: {
      symbol: "gETH",
      name: "Goerli Ether",
      decimals: 18
    },
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    deprecated: !0
  },
  [E.KOVAN]: {
    chainId: E.KOVAN,
    type: D.TESTNET,
    name: "kovan",
    title: "Kovan",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.KOVAN}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Etherscan (Kovan)",
      rootUrl: "https://kovan.etherscan.io/"
    },
    nativeToken: {
      symbol: "kETH",
      name: "Kovan Ether",
      decimals: 18
    },
    deprecated: !0
  },
  [E.SEPOLIA]: {
    chainId: E.SEPOLIA,
    type: D.TESTNET,
    name: "sepolia",
    title: "Sepolia",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.SEPOLIA}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Etherscan (Sepolia)",
      rootUrl: "https://sepolia.etherscan.io/"
    },
    nativeToken: {
      symbol: "sETH",
      name: "Sepolia Ether",
      decimals: 18
    }
  },
  [E.POLYGON]: {
    chainId: E.POLYGON,
    type: D.MAINNET,
    name: "polygon",
    title: "Polygon",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.POLYGON}.webp`,
    blockExplorer: {
      name: "Polygonscan",
      rootUrl: "https://polygonscan.com/"
    },
    nativeToken: {
      symbol: "POL",
      name: "POL",
      decimals: 18
    }
  },
  [E.POLYGON_MUMBAI]: {
    chainId: E.POLYGON_MUMBAI,
    type: D.TESTNET,
    name: "mumbai",
    title: "Polygon Mumbai",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.POLYGON_MUMBAI}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Polygonscan (Mumbai)",
      rootUrl: "https://mumbai.polygonscan.com/"
    },
    nativeToken: {
      symbol: "mMATIC",
      name: "Mumbai Polygon",
      decimals: 18
    },
    deprecated: !0
  },
  [E.POLYGON_AMOY]: {
    chainId: E.POLYGON_AMOY,
    type: D.TESTNET,
    name: "amoy",
    title: "Polygon Amoy",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.POLYGON_AMOY}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "OKLink (Amoy)",
      rootUrl: "https://www.oklink.com/amoy/"
    },
    nativeToken: {
      symbol: "aPOL",
      name: "Amoy POL",
      decimals: 18
    }
  },
  [E.POLYGON_ZKEVM]: {
    chainId: E.POLYGON_ZKEVM,
    type: D.MAINNET,
    name: "polygon-zkevm",
    title: "Polygon zkEVM",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.POLYGON_ZKEVM}.webp`,
    blockExplorer: {
      name: "Polygonscan (zkEVM)",
      rootUrl: "https://zkevm.polygonscan.com/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.BSC]: {
    chainId: E.BSC,
    type: D.MAINNET,
    name: "bsc",
    title: "BNB Smart Chain",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.BSC}.webp`,
    blockExplorer: {
      name: "BSCScan",
      rootUrl: "https://bscscan.com/"
    },
    nativeToken: {
      symbol: "BNB",
      name: "BNB",
      decimals: 18
    }
  },
  [E.BSC_TESTNET]: {
    chainId: E.BSC_TESTNET,
    type: D.TESTNET,
    name: "bsc-testnet",
    title: "BNB Smart Chain Testnet",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.BSC_TESTNET}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "BSCScan (Testnet)",
      rootUrl: "https://testnet.bscscan.com/"
    },
    nativeToken: {
      symbol: "tBNB",
      name: "Testnet BNB",
      decimals: 18
    }
  },
  [E.OPTIMISM]: {
    chainId: E.OPTIMISM,
    type: D.MAINNET,
    name: "optimism",
    title: "Optimism",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.OPTIMISM}.webp`,
    blockExplorer: {
      name: "Etherscan (Optimism)",
      rootUrl: "https://optimistic.etherscan.io/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.OPTIMISM_KOVAN]: {
    chainId: E.OPTIMISM_KOVAN,
    type: D.TESTNET,
    name: "optimism-kovan",
    title: "Optimism Kovan",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.OPTIMISM_KOVAN}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Etherscan (Optimism Kovan)",
      rootUrl: "https://kovan-optimistic.etherscan.io/"
    },
    nativeToken: {
      symbol: "kETH",
      name: "Kovan Ether",
      decimals: 18
    },
    deprecated: !0
  },
  [E.OPTIMISM_GOERLI]: {
    chainId: E.OPTIMISM_GOERLI,
    type: D.TESTNET,
    name: "optimism-goerli",
    title: "Optimism Goerli",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.OPTIMISM_GOERLI}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Etherscan (Optimism Goerli)",
      rootUrl: "https://goerli-optimistic.etherscan.io/"
    },
    nativeToken: {
      symbol: "gETH",
      name: "Goerli Ether",
      decimals: 18
    },
    deprecated: !0
  },
  [E.OPTIMISM_SEPOLIA]: {
    chainId: E.OPTIMISM_SEPOLIA,
    type: D.TESTNET,
    name: "optimism-sepolia",
    title: "Optimism Sepolia",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.OPTIMISM_SEPOLIA}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Etherscan (Optimism Sepolia)",
      rootUrl: "https://sepolia-optimistic.etherscan.io/"
    },
    nativeToken: {
      symbol: "sETH",
      name: "Sepolia Ether",
      decimals: 18
    }
  },
  [E.ARBITRUM]: {
    chainId: E.ARBITRUM,
    type: D.MAINNET,
    name: "arbitrum",
    title: "Arbitrum One",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.ARBITRUM}.webp`,
    blockExplorer: {
      name: "Arbiscan",
      rootUrl: "https://arbiscan.io/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.ARBITRUM_GOERLI]: {
    chainId: E.ARBITRUM_GOERLI,
    type: D.TESTNET,
    name: "arbitrum-goerli",
    title: "Arbitrum Goerli",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.ARBITRUM_GOERLI}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Arbiscan (Goerli Testnet)",
      rootUrl: "https://testnet.arbiscan.io/"
    },
    nativeToken: {
      symbol: "gETH",
      name: "Goerli Ether",
      decimals: 18
    },
    deprecated: !0
  },
  [E.ARBITRUM_SEPOLIA]: {
    chainId: E.ARBITRUM_SEPOLIA,
    type: D.TESTNET,
    name: "arbitrum-sepolia",
    title: "Arbitrum Sepolia",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.ARBITRUM_SEPOLIA}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Arbiscan (Sepolia Testnet)",
      rootUrl: "https://sepolia.arbiscan.io/"
    },
    nativeToken: {
      symbol: "sETH",
      name: "Sepolia Ether",
      decimals: 18
    }
  },
  [E.ARBITRUM_NOVA]: {
    chainId: E.ARBITRUM_NOVA,
    type: D.MAINNET,
    name: "arbitrum-nova",
    title: "Arbitrum Nova",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.ARBITRUM_NOVA}.webp`,
    blockExplorer: {
      name: "Arbiscan Nova",
      rootUrl: "https://nova.arbiscan.io/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.AVALANCHE]: {
    chainId: E.AVALANCHE,
    type: D.MAINNET,
    name: "avalanche",
    title: "Avalanche",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.AVALANCHE}.webp`,
    blockExplorer: {
      name: "Snowtrace",
      rootUrl: "https://subnets.avax.network/c-chain/"
    },
    nativeToken: {
      symbol: "AVAX",
      name: "AVAX",
      decimals: 18
    }
  },
  [E.AVALANCHE_TESTNET]: {
    chainId: E.AVALANCHE_TESTNET,
    type: D.TESTNET,
    name: "avalanche-testnet",
    title: "Avalanche Testnet",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.AVALANCHE_TESTNET}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Snowtrace (Testnet)",
      rootUrl: "https://subnets-test.avax.network/c-chain/"
    },
    nativeToken: {
      symbol: "tAVAX",
      name: "Testnet AVAX",
      decimals: 18
    }
  },
  [E.GNOSIS]: {
    chainId: E.GNOSIS,
    type: D.MAINNET,
    name: "gnosis",
    title: "Gnosis Chain",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.GNOSIS}.webp`,
    blockExplorer: {
      name: "Gnosis Chain Explorer",
      rootUrl: "https://blockscout.com/xdai/mainnet/"
    },
    nativeToken: {
      symbol: "XDAI",
      name: "XDAI",
      decimals: 18
    }
  },
  [E.BASE]: {
    chainId: E.BASE,
    type: D.MAINNET,
    name: "base",
    title: "Base (Coinbase)",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.BASE}.webp`,
    blockExplorer: {
      name: "Base Explorer",
      rootUrl: "https://basescan.org/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.BASE_GOERLI]: {
    chainId: E.BASE_GOERLI,
    type: D.TESTNET,
    name: "base-goerli",
    title: "Base Goerli",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.BASE_GOERLI}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Base Goerli Explorer",
      rootUrl: "https://goerli.basescan.org/"
    },
    nativeToken: {
      symbol: "gETH",
      name: "Goerli Ether",
      decimals: 18
    },
    deprecated: !0
  },
  [E.BASE_SEPOLIA]: {
    chainId: E.BASE_SEPOLIA,
    type: D.TESTNET,
    name: "base-sepolia",
    title: "Base Sepolia",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.BASE_SEPOLIA}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Base Sepolia Explorer",
      rootUrl: "https://base-sepolia.blockscout.com/"
    },
    nativeToken: {
      symbol: "sETH",
      name: "Sepolia Ether",
      decimals: 18
    }
  },
  [E.HOMEVERSE]: {
    chainId: E.HOMEVERSE,
    type: D.MAINNET,
    name: "homeverse",
    title: "Oasys Homeverse",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.HOMEVERSE}.webp`,
    blockExplorer: {
      name: "Oasys Homeverse Explorer",
      rootUrl: "https://explorer.oasys.homeverse.games/"
    },
    nativeToken: {
      symbol: "OAS",
      name: "OAS",
      decimals: 18
    }
  },
  [E.HOMEVERSE_TESTNET]: {
    chainId: E.HOMEVERSE_TESTNET,
    type: D.TESTNET,
    name: "homeverse-testnet",
    title: "Oasys Homeverse Testnet",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.HOMEVERSE_TESTNET}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Oasys Homeverse Explorer (Testnet)",
      rootUrl: "https://explorer.testnet.oasys.homeverse.games/"
    },
    nativeToken: {
      symbol: "tOAS",
      name: "Testnet OAS",
      decimals: 18
    }
  },
  [E.XAI]: {
    chainId: E.XAI,
    type: D.MAINNET,
    name: "xai",
    title: "Xai",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.XAI}.webp`,
    blockExplorer: {
      name: "Xai Explorer",
      rootUrl: "https://explorer.xai-chain.net/"
    },
    nativeToken: {
      symbol: "XAI",
      name: "XAI",
      decimals: 18
    }
  },
  [E.XAI_SEPOLIA]: {
    chainId: E.XAI_SEPOLIA,
    type: D.TESTNET,
    name: "xai-sepolia",
    title: "Xai Sepolia",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.XAI_SEPOLIA}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Xai Sepolia Explorer",
      rootUrl: "https://testnet-explorer-v2.xai-chain.net/"
    },
    nativeToken: {
      symbol: "sXAI",
      name: "Sepolia XAI",
      decimals: 18
    }
  },
  [E.XR_SEPOLIA]: {
    chainId: E.XR_SEPOLIA,
    type: D.TESTNET,
    name: "xr-sepolia",
    title: "XR Sepolia",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.XR_SEPOLIA}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "XR Sepolia Explorer",
      rootUrl: "https://xr-sepolia-testnet.explorer.caldera.xyz/"
    },
    nativeToken: {
      symbol: "tXR",
      name: "Sepolia XR",
      decimals: 18
    }
  },
  [E.B3]: {
    chainId: E.B3,
    type: D.MAINNET,
    name: "b3",
    title: "B3",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.B3}.webp`,
    testnet: !1,
    blockExplorer: {
      name: "B3 Explorer",
      rootUrl: "https://explorer.b3.fun/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.B3_SEPOLIA]: {
    chainId: E.B3_SEPOLIA,
    type: D.TESTNET,
    name: "b3-sepolia",
    title: "B3 Sepolia",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.B3_SEPOLIA}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "B3 Sepolia Explorer",
      rootUrl: "https://sepolia.explorer.b3.fun/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.APECHAIN]: {
    chainId: E.APECHAIN,
    type: D.MAINNET,
    name: "apechain",
    title: "APE Chain",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.APECHAIN}.webp`,
    testnet: !1,
    blockExplorer: {
      name: "APE Chain Explorer",
      rootUrl: "https://apechain.calderaexplorer.xyz/"
    },
    nativeToken: {
      symbol: "APE",
      name: "ApeCoin",
      decimals: 18
    }
  },
  [E.APECHAIN_TESTNET]: {
    chainId: E.APECHAIN_TESTNET,
    type: D.TESTNET,
    name: "apechain-testnet",
    title: "APE Chain Testnet",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.APECHAIN_TESTNET}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "APE Chain Explorer",
      rootUrl: "https://curtis.explorer.caldera.xyz/"
    },
    nativeToken: {
      symbol: "APE",
      name: "ApeCoin",
      decimals: 18
    }
  },
  [E.BLAST]: {
    chainId: E.BLAST,
    type: D.MAINNET,
    name: "blast",
    title: "Blast",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.BLAST}.webp`,
    blockExplorer: {
      name: "Blast Explorer",
      rootUrl: "https://blastscan.io/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.BLAST_SEPOLIA]: {
    chainId: E.BLAST_SEPOLIA,
    type: D.TESTNET,
    name: "blast-sepolia",
    title: "Blast Sepolia",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.BLAST_SEPOLIA}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Blast Sepolia Explorer",
      rootUrl: "https://sepolia.blastexplorer.io/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.TELOS]: {
    chainId: E.TELOS,
    type: D.MAINNET,
    name: "telos",
    title: "Telos",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.TELOS}.webp`,
    blockExplorer: {
      name: "Telos Explorer",
      rootUrl: "https://www.teloscan.io/"
    },
    nativeToken: {
      symbol: "TLOS",
      name: "TLOS",
      decimals: 18
    }
  },
  [E.TELOS_TESTNET]: {
    chainId: E.TELOS_TESTNET,
    type: D.TESTNET,
    name: "telos-testnet",
    title: "Telos Testnet",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.TELOS_TESTNET}.webp`,
    blockExplorer: {
      name: "Telos Testnet Explorer",
      rootUrl: "https://testnet.teloscan.io/"
    },
    nativeToken: {
      symbol: "TLOS",
      name: "TLOS",
      decimals: 18
    }
  },
  [E.BORNE_TESTNET]: {
    chainId: E.BORNE_TESTNET,
    type: D.TESTNET,
    name: "borne-testnet",
    title: "Borne Testnet",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.BORNE_TESTNET}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Borne Testnet Explorer",
      rootUrl: "https://subnets-test.avax.network/bornegfdn"
    },
    nativeToken: {
      symbol: "BORNE",
      name: "BORNE",
      decimals: 18
    }
  },
  [E.SKALE_NEBULA]: {
    chainId: E.SKALE_NEBULA,
    type: D.MAINNET,
    name: "skale-nebula",
    title: "SKALE Nebula Gaming Hub",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.SKALE_NEBULA}.webp`,
    testnet: !1,
    blockExplorer: {
      name: "SKALE Nebula Gaming Hub Explorer",
      rootUrl: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com/"
    },
    nativeToken: {
      symbol: "sFUEL",
      name: "SKALE Fuel",
      decimals: 18
    }
  },
  [E.SKALE_NEBULA_TESTNET]: {
    chainId: E.SKALE_NEBULA_TESTNET,
    type: D.TESTNET,
    name: "skale-nebula-testnet",
    title: "SKALE Nebula Gaming Hub Testnet",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.SKALE_NEBULA_TESTNET}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "SKALE Nebula Gaming Hub Testnet Explorer",
      rootUrl: "https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com/"
    },
    nativeToken: {
      symbol: "sFUEL",
      name: "SKALE Fuel",
      decimals: 18
    }
  },
  [E.SONEIUM]: {
    chainId: E.SONEIUM,
    type: D.MAINNET,
    name: "soneium",
    title: "Soneium",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.SONEIUM}.webp`,
    testnet: !1,
    blockExplorer: {
      name: "Soneium Explorer",
      rootUrl: "https://soneium.blockscout.com/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.SONEIUM_MINATO]: {
    chainId: E.SONEIUM_MINATO,
    type: D.TESTNET,
    name: "soneium-minato",
    title: "Soneium Minato (Testnet)",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.SONEIUM_MINATO}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Soneium Minato Explorer",
      rootUrl: "https://explorer-testnet.soneium.org/"
    },
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.TOY_TESTNET]: {
    chainId: E.TOY_TESTNET,
    type: D.TESTNET,
    name: "toy-testnet",
    title: "TOY (Testnet)",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.TOY_TESTNET}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "TOY Testnet Explorer",
      rootUrl: "https://toy-chain-testnet.explorer.caldera.xyz/"
    },
    nativeToken: {
      symbol: "TOY",
      name: "TOY",
      decimals: 18
    }
  },
  [E.IMMUTABLE_ZKEVM]: {
    chainId: E.IMMUTABLE_ZKEVM,
    type: D.MAINNET,
    name: "immutable-zkevm",
    title: "Immutable zkEVM",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.IMMUTABLE_ZKEVM}.webp`,
    testnet: !1,
    blockExplorer: {
      name: "Immutable zkEVM Explorer",
      rootUrl: "https://explorer.immutable.com/"
    },
    nativeToken: {
      symbol: "IMX",
      name: "IMX",
      decimals: 18
    }
  },
  [E.IMMUTABLE_ZKEVM_TESTNET]: {
    chainId: E.IMMUTABLE_ZKEVM_TESTNET,
    type: D.TESTNET,
    name: "immutable-zkevm-testnet",
    title: "Immutable zkEVM Testnet",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.IMMUTABLE_ZKEVM_TESTNET}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "Immutable zkEVM Testnet Explorer",
      rootUrl: "https://explorer.testnet.immutable.com/"
    },
    nativeToken: {
      symbol: "IMX",
      name: "IMX",
      decimals: 18
    }
  },
  [E.ROOT_NETWORK]: {
    chainId: E.ROOT_NETWORK,
    type: D.MAINNET,
    name: "rootnet",
    title: "The Root Network",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.ROOT_NETWORK}.webp`,
    testnet: !1,
    blockExplorer: {
      name: "The Root Network Explorer",
      rootUrl: "https://rootscan.io/"
    },
    nativeToken: {
      symbol: "XRP",
      name: "XRP",
      decimals: 18
    }
  },
  [E.ROOT_NETWORK_PORCINI]: {
    chainId: E.ROOT_NETWORK_PORCINI,
    type: D.TESTNET,
    name: "rootnet-porcini",
    title: "The Root Network Porcini Testnet",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.ROOT_NETWORK_PORCINI}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "The Root Network Porcini Testnet Explorer",
      rootUrl: "https://porcini.rootscan.io/"
    },
    nativeToken: {
      symbol: "XRP",
      name: "XRP",
      decimals: 18
    }
  },
  [E.LAOS]: {
    chainId: E.LAOS,
    type: D.MAINNET,
    name: "laos",
    title: "LAOS",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.LAOS}.webp`,
    testnet: !1,
    blockExplorer: {
      name: "LAOS Explorer",
      rootUrl: "https://blockscout.laos.laosfoundation.io/"
    },
    nativeToken: {
      symbol: "LAOS",
      name: "LAOS",
      decimals: 18
    }
  },
  [E.LAOS_SIGMA_TESTNET]: {
    chainId: E.LAOS_SIGMA_TESTNET,
    type: D.TESTNET,
    name: "laos-sigma-testnet",
    title: "LAOS Sigma Testnet",
    logoURI: `https://assets.sequence.info/images/networks/medium/${E.LAOS_SIGMA_TESTNET}.webp`,
    testnet: !0,
    blockExplorer: {
      name: "LAOS Sigma Testnet Explorer",
      rootUrl: "https://sigma.explorer.laosnetwork.io/"
    },
    nativeToken: {
      symbol: "SIGMA",
      name: "SIGMA",
      decimals: 18
    }
  },
  [E.HARDHAT]: {
    chainId: E.HARDHAT,
    name: "hardhat",
    title: "Hardhat (local testnet)",
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  },
  [E.HARDHAT_2]: {
    chainId: E.HARDHAT_2,
    name: "hardhat2",
    title: "Hardhat (local testnet)",
    nativeToken: {
      symbol: "ETH",
      name: "Ether",
      decimals: 18
    }
  }
};
BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ti.apply(null, arguments);
}
var et = /* @__PURE__ */ function(e) {
  return e[e.DEBUG = 1] = "DEBUG", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.DISABLED = 5] = "DISABLED", e;
}(et || {});
class s4 {
  constructor(t) {
    this.config = t, this.logLevel = void 0, this.configure(t);
  }
  configure(t) {
    switch (this.config = ti({}, this.config, t), this.config.logLevel) {
      case "DEBUG":
        this.logLevel = et.DEBUG;
        break;
      case "INFO":
        this.logLevel = et.INFO;
        break;
      case "WARN":
        this.logLevel = et.WARN;
        break;
      case "ERROR":
        this.logLevel = et.ERROR;
        break;
      case "DISABLED":
        this.logLevel = et.DISABLED;
        break;
      default:
        this.logLevel = et.INFO;
        break;
    }
    this.config.silence === void 0 && (this.config.silence = !1);
  }
  debug(t, ...n) {
    this.config.silence !== !0 && this.logLevel === et.DEBUG && console.log(t, ...n);
  }
  info(t, ...n) {
    this.config.silence !== !0 && this.logLevel <= et.INFO && console.log(t, ...n);
  }
  warn(t, ...n) {
    this.config.silence !== !0 && this.logLevel <= et.WARN && (console.warn(t, ...n), this.config.onwarn && this.config.onwarn(t, n));
  }
  error(t, ...n) {
    this.config.silence !== !0 && this.logLevel <= et.ERROR && (console.error(t, ...n), this.config.onerror && this.config.onerror(t, n));
  }
}
new s4({
  logLevel: "INFO",
  // By default we silence the logger. In tests we should call `configureLogger`
  // below to set silence: false.
  silence: !0
});
function Pn() {
  return Pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Pn.apply(null, arguments);
}
const i4 = (e, t = !1, n = !1) => {
  if (!e) throw new Error("invalid network config: empty config");
  const r = [];
  if (Array.isArray(e) ? r.push(...e) : r.push(e), r.length === 0) {
    if (t) throw new Error("invalid network config: empty config");
    return !1;
  }
  const o = r.map((c) => c.chainId).sort(), s = o.filter((c, u) => o.indexOf(c) !== u);
  if (s.length > 0) {
    if (t) throw new Error(`invalid network config: duplicate chainIds ${s}`);
    return !1;
  }
  r.forEach((c) => c.name = c.name.toLowerCase());
  const i = r.map((c) => c.name).sort(), a = i.filter((c, u) => i.indexOf(c) !== u);
  if (a.length > 0) {
    if (t) throw new Error(`invalid network config: duplicate network names ${a}`);
    return !1;
  }
  let l = !1;
  for (let c = 0; c < r.length; c++) {
    const u = r[c];
    if ((!u.rpcUrl || u.rpcUrl === "") && !u.provider) {
      if (t) throw new Error(`invalid network config for chainId ${u.chainId}: rpcUrl or provider must be provided`);
      return !1;
    }
    if (!n && !u.relayer) {
      if (t) throw new Error(`invalid network config for chainId ${u.chainId}: relayer must be provided`);
      return !1;
    }
    if (u.isDefaultChain) {
      if (l) {
        if (t) throw new Error(`invalid network config for chainId ${u.chainId}: DefaultChain is already set by another config`);
        return !1;
      }
      l = !0;
    }
  }
  if (!l) {
    if (t) throw new Error("invalid network config: DefaultChain must be set");
    return !1;
  }
  return !0;
}, a4 = (e, t = !1) => (i4(e, !0, t), e), l4 = (e) => a4(c4(e)), c4 = (e) => {
  if (!e)
    return [];
  const t = e.sort((r, o) => r.chainId === o.chainId ? 0 : r.chainId < o.chainId ? -1 : 1), n = t.findIndex((r) => r.isDefaultChain);
  return n > 0 && t.splice(0, 0, t.splice(n, 1)[0]), t;
}, Na = (e, t) => typeof e == "string" ? (t = t || {}, e.replace(/\$\{\s*([$#@\-\d\w]+)\s*\}/gim, function(n, r) {
  let o = t[r];
  return typeof o == "function" ? o = o() : o == null ? o = "" : typeof o == "object" || typeof o == "symbol" ? o = o.toString() : o = o.valueOf(), o;
})) : "", u4 = (e) => Na("https://${network}-indexer.sequence.app", {
  network: e
}), d4 = (e) => Na("https://${network}-relayer.sequence.app", {
  network: e
}), f4 = (e) => Na("https://nodes.sequence.app/${network}", {
  network: e
}), z = (e, t) => {
  const n = ei[e];
  if (!n)
    throw new Error(`Network with chainId ${e} not found`);
  const r = f4(n.name);
  return Pn({}, n, {
    rpcUrl: r,
    indexerUrl: u4(n.name),
    relayer: {
      url: d4(n.name),
      provider: {
        url: r
      }
    }
  }, t);
}, h4 = [Pn({}, ei[E.HARDHAT], {
  rpcUrl: "http://localhost:8545",
  relayer: {
    url: "http://localhost:3000",
    provider: {
      url: "http://localhost:8545"
    }
  }
}), Pn({}, ei[E.HARDHAT_2], {
  rpcUrl: "http://localhost:9545",
  relayer: {
    url: "http://localhost:3000",
    provider: {
      url: "http://localhost:9545"
    }
  }
})], p4 = l4([Pn({}, z(E.POLYGON), {
  isDefaultChain: !0,
  isAuthChain: !0
}), z(E.MAINNET), z(E.BSC), z(E.AVALANCHE), z(E.ARBITRUM), z(E.ARBITRUM_NOVA), z(E.OPTIMISM), z(E.OPTIMISM_SEPOLIA), z(E.POLYGON_ZKEVM), z(E.GNOSIS), z(E.RINKEBY, {
  disabled: !0
}), z(E.GOERLI, {
  disabled: !0
}), z(E.SEPOLIA), z(E.POLYGON_MUMBAI, {
  disabled: !0
}), z(E.POLYGON_AMOY), z(E.BSC_TESTNET), z(E.ARBITRUM_SEPOLIA), z(E.BASE), z(E.BASE_SEPOLIA), z(E.HOMEVERSE), z(E.HOMEVERSE_TESTNET), z(E.XAI), z(E.XAI_SEPOLIA), z(E.AVALANCHE_TESTNET), z(E.XR_SEPOLIA), z(E.B3), z(E.B3_SEPOLIA), z(E.APECHAIN), z(E.APECHAIN_TESTNET), z(E.BLAST), z(E.BLAST_SEPOLIA), z(E.TELOS), z(E.TELOS_TESTNET), z(E.BORNE_TESTNET), z(E.SKALE_NEBULA), z(E.SKALE_NEBULA_TESTNET), z(E.SONEIUM), z(E.SONEIUM_MINATO), z(E.TOY_TESTNET), z(E.IMMUTABLE_ZKEVM), z(E.IMMUTABLE_ZKEVM_TESTNET), z(E.ROOT_NETWORK), z(E.ROOT_NETWORK_PORCINI), z(E.LAOS), z(E.LAOS_SIGMA_TESTNET), ...h4]), m4 = void 0, v4 = (e) => {
  const { chain: t, address: n } = e, [r, o] = ve();
  if (me(() => {
    if (!n || !t) return;
    (async (i) => {
      var u, f;
      const a = (u = p4.find(
        (h) => h.chainId === i
      )) == null ? void 0 : u.name;
      if (!a) {
        o("ERROR");
        return;
      }
      const c = await new o4(
        `https://${a}-indexer.sequence.app`,
        m4
      ).getEtherBalance({
        accountAddress: n
      });
      c && o((f = c == null ? void 0 : c.balance) == null ? void 0 : f.balanceWei);
    })(t.id);
  }, [n, t]), !(!t || !n))
    return r || "-";
};
function q4(e) {
  const { children: t } = e;
  return /* @__PURE__ */ d.jsx(Gw, { ...e, children: /* @__PURE__ */ d.jsx(g4, { children: t }) });
}
function g4({ children: e }) {
  const { name: t, description: n, githubUrl: r, docsUrl: o, faucetUrl: s, wagmi: i } = Ww(), { chain: a, address: l, isConnected: c } = i.useAccount(), { chains: u, switchChainAsync: f } = i.useSwitchChain(), { disconnect: h } = i.useDisconnect(), p = v4({ chain: a, address: l });
  return /* @__PURE__ */ d.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ d.jsxs("header", { className: "border-b border-white/10 bg-grey-950/75 sticky top-0 z-[1000] isolate min-h-[3rem] flex items-center px-4", children: [
      /* @__PURE__ */ d.jsx(
        "img",
        {
          src: Yw,
          width: "32",
          height: "32",
          alt: "Sequence Boilerplates",
          className: "hidden sm:block"
        }
      ),
      c ? /* @__PURE__ */ d.jsxs("div", { className: "flex gap-2 items-center w-full sm:w-auto sm:ml-auto mr-0", children: [
        /* @__PURE__ */ d.jsx(
          b4,
          {
            faucetUrl: s,
            chain: a,
            balance: p,
            chains: u,
            switchChainAsync: f
          }
        ),
        /* @__PURE__ */ d.jsx(
          w4,
          {
            chain: a,
            address: l,
            disconnect: h
          }
        ),
        r ? /* @__PURE__ */ d.jsx(
          "a",
          {
            href: r,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "rounded-[0.5rem] hover:bg-grey-800 border border-grey-800/50 hover:border-grey-700 bg-grey-900 text-grey-100 hover:text-grey-50 flex items-center justify-center  transition-all duration-300 ml-auto mr-0 sm:mx-auto flex-shrink-0 size-9",
            children: /* @__PURE__ */ d.jsx(ke, { name: "Github", className: "size-5" })
          }
        ) : null
      ] }) : null
    ] }),
    /* @__PURE__ */ d.jsxs(qw, { children: [
      /* @__PURE__ */ d.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center gap-12 py-12 px-4", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col gap-4 items-center text-center", children: [
          /* @__PURE__ */ d.jsx(
            ke,
            {
              name: "SequenceBoilerplateLogo",
              alt: "Sequence Boilerplate",
              className: "mb-2",
              width: "192"
            }
          ),
          /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ d.jsx("h1", { className: "text-24 sm:text-36 font-bold leading-tight", children: t }),
            /* @__PURE__ */ d.jsx("p", { className: "text-14", children: n })
          ] })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "max-w-screen-md mx-auto w-full", children: e })
      ] }),
      /* @__PURE__ */ d.jsx("div", { className: "text-14 font-medium text-center border-t border-white/10 bg-grey-950/75 py-4 ", children: /* @__PURE__ */ d.jsxs("p", { children: [
        "Want to learn more? Read the",
        "  ",
        /* @__PURE__ */ d.jsx(
          "a",
          {
            href: o,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "underline text-white",
            children: "docs"
          }
        ),
        "!"
      ] }) })
    ] })
  ] });
}
const y4 = "https://assets.sequence.info/", x4 = 5, us = (e, t) => y4 + `images/networks/${t}/${e}.webp?v${x4}`;
function b4({
  faucetUrl: e,
  chains: t,
  switchChainAsync: n,
  chain: r,
  balance: o
}) {
  const [s, i] = ve(!1);
  async function a(l) {
    await n({ chainId: l }), setTimeout(() => i(!1), 200);
  }
  return t.length < 2 && !e ? /* @__PURE__ */ d.jsxs(ww, { children: [
    r ? /* @__PURE__ */ d.jsx(
      "img",
      {
        src: us(r == null ? void 0 : r.id, "small"),
        className: "size-5",
        alt: r == null ? void 0 : r.name
      }
    ) : null,
    /* @__PURE__ */ d.jsxs("span", { children: [
      o,
      " ",
      /* @__PURE__ */ d.jsx("span", { className: "text-10 font-medium text-grey-100 my-auto", children: r == null ? void 0 : r.nativeCurrency.symbol })
    ] })
  ] }) : /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ d.jsxs(op, { isOpen: s, setOpen: i, children: [
      r ? /* @__PURE__ */ d.jsx(
        "img",
        {
          src: us(r == null ? void 0 : r.id, "small"),
          className: "size-5 rounded-full",
          alt: r == null ? void 0 : r.name
        }
      ) : null,
      /* @__PURE__ */ d.jsxs("span", { children: [
        o,
        " ",
        /* @__PURE__ */ d.jsx("span", { className: "text-10 font-medium text-grey-100 my-auto inline-block min-w-[4ex]", children: r == null ? void 0 : r.nativeCurrency.symbol })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs(rp, { isOpen: s, setOpen: i, children: [
      /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3 pl-4 pr-3 py-3 border-b border-grey-900 justify-between bg-gradient-to-b to-white/0 from-white/[1%] ", children: [
        /* @__PURE__ */ d.jsx("span", { className: "text-14 text-grey-100", children: "Networks" }),
        e ? /* @__PURE__ */ d.jsx(
          "a",
          {
            href: e,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-12 bg-grey-900 rounded-[0.5rem] px-2 py-1 border border-grey-800 hover:bg-grey-800 hover:border-grey-700 transition-colors duration-300 font-medium",
            children: "Add test currency"
          }
        ) : null
      ] }),
      /* @__PURE__ */ d.jsx("div", { className: "flex flex-col text-14 items-start p-1", children: t.map((l) => /* @__PURE__ */ d.jsxs(
        "button",
        {
          type: "button",
          className: "flex gap-2 items-center pl-2 pr-4 py-2 hover:bg-grey-900 border border-transparent hover:border-grey-800 transition-colors duration-300 w-full rounded-[8px]",
          onClick: () => a(l == null ? void 0 : l.id),
          children: [
            /* @__PURE__ */ d.jsx("span", { className: "size-4", children: (l == null ? void 0 : l.id) === (r == null ? void 0 : r.id) ? /* @__PURE__ */ d.jsx(ke, { name: "Checkmark", className: "text-white size-4" }) : null }),
            l ? /* @__PURE__ */ d.jsx(
              "img",
              {
                src: us(l == null ? void 0 : l.id, "small"),
                className: "size-[18px] rounded-full",
                alt: l == null ? void 0 : l.name
              }
            ) : null,
            /* @__PURE__ */ d.jsx("span", { children: l == null ? void 0 : l.name })
          ]
        },
        l == null ? void 0 : l.id
      )) })
    ] })
  ] });
}
function w4({ address: e, chain: t, disconnect: n }) {
  var h, p;
  const r = async (v) => {
    try {
      await navigator.clipboard.writeText(v);
    } catch {
    }
  }, [o, s] = ve(!1), [i, a] = Zw(), l = ((p = (h = t == null ? void 0 : t.blockExplorers) == null ? void 0 : h.default) == null ? void 0 : p.url) + "/address/" + e, [c, u] = ve(!1), f = {
    show: {
      x: 0
    },
    hide: {
      x: -a.width
    }
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ d.jsxs(op, { isOpen: o, setOpen: s, children: [
      /* @__PURE__ */ d.jsx($c, { address: e, className: "size-5" }),
      n4(e)
    ] }),
    /* @__PURE__ */ d.jsxs(rp, { isOpen: o, setOpen: s, children: [
      /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-4 p-1 border-b border-grey-900", children: [
        /* @__PURE__ */ d.jsx($c, { address: e, className: "size-8 ml-3" }),
        /* @__PURE__ */ d.jsxs(
          pn.button,
          {
            type: "button",
            onClick: () => {
              r(e);
            },
            className: "flex flex-col group px-3 py-2 hover:bg-grey-900 border border-transparent hover:border-grey-800 transition-colors duration-300 w-full rounded-[8px]",
            onHoverStart: () => u(!0),
            onHoverEnd: () => u(!1),
            children: [
              /* @__PURE__ */ d.jsx(pn.span, { className: "text-12 text-grey-100 leading-snug text-start relative inline-block overflow-hidden", children: /* @__PURE__ */ d.jsxs(
                pn.span,
                {
                  className: "inline-block overflow-hidden text-right",
                  variants: f,
                  animate: c ? "show" : "hide",
                  initial: "hide",
                  children: [
                    /* @__PURE__ */ d.jsx("span", { ref: i, children: "Copy " }),
                    /* @__PURE__ */ d.jsx(pn.span, { children: "Wallet Address" })
                  ]
                }
              ) }),
              /* @__PURE__ */ d.jsxs("span", { className: "text-14 inline-flex gap-1 items-center break-words", children: [
                /* @__PURE__ */ d.jsx("span", { className: "break-words", children: e }),
                " ",
                /* @__PURE__ */ d.jsx(ke, { name: "Copy", className: "size-4 text-grey-200" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col text-14 items-start p-1", children: [
        /* @__PURE__ */ d.jsxs(
          "a",
          {
            href: l,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex gap-3 items-center px-3 py-2 hover:bg-grey-900 border border-transparent hover:border-grey-800 transition-colors duration-300 w-full rounded-[8px]",
            children: [
              /* @__PURE__ */ d.jsx("span", { className: "h-6 w-7 flex items-center justify-center border border-grey-800/50 rounded-[6px]", children: /* @__PURE__ */ d.jsx(ke, { name: "Wallet", className: "text-white size-4" }) }),
              "Open wallet"
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "button",
          {
            type: "button",
            className: "flex gap-3 items-center px-3 py-2 hover:bg-grey-900 border border-transparent hover:border-grey-800 transition-colors duration-300 w-full rounded-[8px]",
            onClick: () => n(),
            children: [
              /* @__PURE__ */ d.jsx("span", { className: "h-6 w-7 flex items-center justify-center border border-grey-800/50 rounded-[6px]", children: /* @__PURE__ */ d.jsx(ke, { name: "Signout", className: "text-white size-4" }) }),
              "Sign out"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  ru as Button,
  j4 as ButtonLink,
  S4 as Card,
  A4 as Divider,
  yi as Field,
  qg as FieldError,
  M4 as Form,
  $4 as FormErrors,
  N4 as FormSuccess,
  z4 as GithubCorner,
  $c as GradientAvatar,
  P4 as Group,
  D4 as Image,
  lu as Input,
  B4 as InputSelect,
  _4 as InputText,
  ri as Label,
  L4 as Link,
  ww as MenuInfo,
  rp as MenuPopover,
  op as MenuPopoverButton,
  jo as SegmentedInput,
  _g as Select,
  q4 as SequenceBoilerplate,
  Gw as SequenceBoilerplateProvider,
  qw as SequenceBoilerplateRoot,
  U4 as ShowAddressWithDisconnect,
  F4 as Submit,
  ke as Svg,
  V4 as Toast,
  Ug as createFormObjectWithoutValidation,
  Ed as setStoreData,
  n4 as shortAddress,
  O4 as useAsyncStoreData,
  gi as useForm,
  Ww as useSequenceBoilerplate,
  C4 as useStoreData,
  Fg as validateAndCreateFormObjectOrThrow
};
