import * as v from "react";
import Me, { useLayoutEffect as yr, useEffect as Cr, createContext as br, forwardRef as rt } from "react";
import * as dn from "react-dom";
import Rr from "react-dom";
var Ct = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function jr() {
  if (Qt) return Ne;
  Qt = 1;
  var e = Me, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, u, f) {
    var d, h = {}, g = null, p = null;
    f !== void 0 && (g = "" + f), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (d in u) r.call(u, d) && !s.hasOwnProperty(d) && (h[d] = u[d]);
    if (c && c.defaultProps) for (d in u = c.defaultProps, u) h[d] === void 0 && (h[d] = u[d]);
    return { $$typeof: t, type: c, key: g, ref: p, props: h, _owner: o.current };
  }
  return Ne.Fragment = n, Ne.jsx = l, Ne.jsxs = l, Ne;
}
var Ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function Sr() {
  return en || (en = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Me, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), x = Symbol.iterator, w = "@@iterator";
    function R(a) {
      if (a === null || typeof a != "object")
        return null;
      var m = x && a[x] || a[w];
      return typeof m == "function" ? m : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(a) {
      {
        for (var m = arguments.length, b = new Array(m > 1 ? m - 1 : 0), A = 1; A < m; A++)
          b[A - 1] = arguments[A];
        E("error", a, b);
      }
    }
    function E(a, m, b) {
      {
        var A = C.ReactDebugCurrentFrame, D = A.getStackAddendum();
        D !== "" && (m += "%s", b = b.concat([D]));
        var z = b.map(function(T) {
          return String(T);
        });
        z.unshift("Warning: " + m), Function.prototype.apply.call(console[a], console, z);
      }
    }
    var j = !1, S = !1, _ = !1, M = !1, B = !1, F;
    F = Symbol.for("react.module.reference");
    function N(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === r || a === s || B || a === o || a === f || a === d || M || a === p || j || S || _ || typeof a == "object" && a !== null && (a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === c || a.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === F || a.getModuleId !== void 0));
    }
    function Y(a, m, b) {
      var A = a.displayName;
      if (A)
        return A;
      var D = m.displayName || m.name || "";
      return D !== "" ? b + "(" + D + ")" : b;
    }
    function I(a) {
      return a.displayName || "Context";
    }
    function L(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var m = a;
            return I(m) + ".Consumer";
          case l:
            var b = a;
            return I(b._context) + ".Provider";
          case u:
            return Y(a, a.render, "ForwardRef");
          case h:
            var A = a.displayName || null;
            return A !== null ? A : L(a.type) || "Memo";
          case g: {
            var D = a, z = D._payload, T = D._init;
            try {
              return L(T(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, U = 0, V, H, O, $, K, he, $e;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function ut() {
      {
        if (U === 0) {
          V = console.log, H = console.info, O = console.warn, $ = console.error, K = console.group, he = console.groupCollapsed, $e = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        U++;
      }
    }
    function ft() {
      {
        if (U--, U === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, a, {
              value: V
            }),
            info: k({}, a, {
              value: H
            }),
            warn: k({}, a, {
              value: O
            }),
            error: k({}, a, {
              value: $
            }),
            group: k({}, a, {
              value: K
            }),
            groupCollapsed: k({}, a, {
              value: he
            }),
            groupEnd: k({}, a, {
              value: $e
            })
          });
        }
        U < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = C.ReactCurrentDispatcher, Re;
    function pe(a, m, b) {
      {
        if (Re === void 0)
          try {
            throw Error();
          } catch (D) {
            var A = D.stack.trim().match(/\n( *(at )?)/);
            Re = A && A[1] || "";
          }
        return `
` + Re + a;
      }
    }
    var je = !1, ge;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new Ue();
    }
    function ze(a, m) {
      if (!a || je)
        return "";
      {
        var b = ge.get(a);
        if (b !== void 0)
          return b;
      }
      var A;
      je = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = ke.current, ke.current = null, ut();
      try {
        if (m) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (X) {
              A = X;
            }
            Reflect.construct(a, [], T);
          } else {
            try {
              T.call();
            } catch (X) {
              A = X;
            }
            a.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            A = X;
          }
          a();
        }
      } catch (X) {
        if (X && A && typeof X.stack == "string") {
          for (var P = X.stack.split(`
`), G = A.stack.split(`
`), q = P.length - 1, W = G.length - 1; q >= 1 && W >= 0 && P[q] !== G[W]; )
            W--;
          for (; q >= 1 && W >= 0; q--, W--)
            if (P[q] !== G[W]) {
              if (q !== 1 || W !== 1)
                do
                  if (q--, W--, W < 0 || P[q] !== G[W]) {
                    var Q = `
` + P[q].replace(" at new ", " at ");
                    return a.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", a.displayName)), typeof a == "function" && ge.set(a, Q), Q;
                  }
                while (q >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        je = !1, ke.current = z, ft(), Error.prepareStackTrace = D;
      }
      var Ae = a ? a.displayName || a.name : "", we = Ae ? pe(Ae) : "";
      return typeof a == "function" && ge.set(a, we), we;
    }
    function me(a, m, b) {
      return ze(a, !1);
    }
    function Ye(a) {
      var m = a.prototype;
      return !!(m && m.isReactComponent);
    }
    function Se(a, m, b) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return ze(a, Ye(a));
      if (typeof a == "string")
        return pe(a);
      switch (a) {
        case f:
          return pe("Suspense");
        case d:
          return pe("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            return me(a.render);
          case h:
            return Se(a.type, m, b);
          case g: {
            var A = a, D = A._payload, z = A._init;
            try {
              return Se(z(D), m, b);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, Ge = {}, Xe = C.ReactDebugCurrentFrame;
    function ie(a) {
      if (a) {
        var m = a._owner, b = Se(a.type, a._source, m ? m.type : null);
        Xe.setExtraStackFrame(b);
      } else
        Xe.setExtraStackFrame(null);
    }
    function Zn(a, m, b, A, D) {
      {
        var z = Function.call.bind(xe);
        for (var T in a)
          if (z(a, T)) {
            var P = void 0;
            try {
              if (typeof a[T] != "function") {
                var G = Error((A || "React class") + ": " + b + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              P = a[T](m, T, A, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              P = q;
            }
            P && !(P instanceof Error) && (ie(D), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", b, T, typeof P), ie(null)), P instanceof Error && !(P.message in Ge) && (Ge[P.message] = !0, ie(D), y("Failed %s type: %s", b, P.message), ie(null));
          }
      }
    }
    var Qn = Array.isArray;
    function dt(a) {
      return Qn(a);
    }
    function er(a) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, b = m && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return b;
      }
    }
    function tr(a) {
      try {
        return Ft(a), !1;
      } catch {
        return !0;
      }
    }
    function Ft(a) {
      return "" + a;
    }
    function Wt(a) {
      if (tr(a))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(a)), Ft(a);
    }
    var Be = C.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $t, It, vt;
    vt = {};
    function rr(a) {
      if (xe.call(a, "ref")) {
        var m = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function or(a) {
      if (xe.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function ir(a, m) {
      if (typeof a.ref == "string" && Be.current && m && Be.current.stateNode !== m) {
        var b = L(Be.current.type);
        vt[b] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(Be.current.type), a.ref), vt[b] = !0);
      }
    }
    function sr(a, m) {
      {
        var b = function() {
          $t || ($t = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        b.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function lr(a, m) {
      {
        var b = function() {
          It || (It = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        b.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var ar = function(a, m, b, A, D, z, T) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: m,
        ref: b,
        props: T,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function cr(a, m, b, A, D) {
      {
        var z, T = {}, P = null, G = null;
        b !== void 0 && (Wt(b), P = "" + b), or(m) && (Wt(m.key), P = "" + m.key), rr(m) && (G = m.ref, ir(m, D));
        for (z in m)
          xe.call(m, z) && !nr.hasOwnProperty(z) && (T[z] = m[z]);
        if (a && a.defaultProps) {
          var q = a.defaultProps;
          for (z in q)
            T[z] === void 0 && (T[z] = q[z]);
        }
        if (P || G) {
          var W = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          P && sr(T, W), G && lr(T, W);
        }
        return ar(a, P, G, D, A, Be.current, T);
      }
    }
    var ht = C.ReactCurrentOwner, Ut = C.ReactDebugCurrentFrame;
    function Ee(a) {
      if (a) {
        var m = a._owner, b = Se(a.type, a._source, m ? m.type : null);
        Ut.setExtraStackFrame(b);
      } else
        Ut.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function gt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Yt() {
      {
        if (ht.current) {
          var a = L(ht.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function ur(a) {
      return "";
    }
    var Gt = {};
    function fr(a) {
      {
        var m = Yt();
        if (!m) {
          var b = typeof a == "string" ? a : a.displayName || a.name;
          b && (m = `

Check the top-level render call using <` + b + ">.");
        }
        return m;
      }
    }
    function Xt(a, m) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var b = fr(m);
        if (Gt[b])
          return;
        Gt[b] = !0;
        var A = "";
        a && a._owner && a._owner !== ht.current && (A = " It was passed a child from " + L(a._owner.type) + "."), Ee(a), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, A), Ee(null);
      }
    }
    function Kt(a, m) {
      {
        if (typeof a != "object")
          return;
        if (dt(a))
          for (var b = 0; b < a.length; b++) {
            var A = a[b];
            gt(A) && Xt(A, m);
          }
        else if (gt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var D = R(a);
          if (typeof D == "function" && D !== a.entries)
            for (var z = D.call(a), T; !(T = z.next()).done; )
              gt(T.value) && Xt(T.value, m);
        }
      }
    }
    function dr(a) {
      {
        var m = a.type;
        if (m == null || typeof m == "string")
          return;
        var b;
        if (typeof m == "function")
          b = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === h))
          b = m.propTypes;
        else
          return;
        if (b) {
          var A = L(m);
          Zn(b, a.props, "prop", A, a);
        } else if (m.PropTypes !== void 0 && !pt) {
          pt = !0;
          var D = L(m);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(a) {
      {
        for (var m = Object.keys(a.props), b = 0; b < m.length; b++) {
          var A = m[b];
          if (A !== "children" && A !== "key") {
            Ee(a), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), Ee(null);
            break;
          }
        }
        a.ref !== null && (Ee(a), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    var Jt = {};
    function Zt(a, m, b, A, D, z) {
      {
        var T = N(a);
        if (!T) {
          var P = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = ur();
          G ? P += G : P += Yt();
          var q;
          a === null ? q = "null" : dt(a) ? q = "array" : a !== void 0 && a.$$typeof === t ? (q = "<" + (L(a.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : q = typeof a, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, P);
        }
        var W = cr(a, m, b, D, z);
        if (W == null)
          return W;
        if (T) {
          var Q = m.children;
          if (Q !== void 0)
            if (A)
              if (dt(Q)) {
                for (var Ae = 0; Ae < Q.length; Ae++)
                  Kt(Q[Ae], a);
                Object.freeze && Object.freeze(Q);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kt(Q, a);
        }
        if (xe.call(m, "key")) {
          var we = L(a), X = Object.keys(m).filter(function(wr) {
            return wr !== "key";
          }), mt = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Jt[we + mt]) {
            var xr = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mt, we, xr, we), Jt[we + mt] = !0;
          }
        }
        return a === r ? vr(W) : dr(W), W;
      }
    }
    function hr(a, m, b) {
      return Zt(a, m, b, !0);
    }
    function pr(a, m, b) {
      return Zt(a, m, b, !1);
    }
    var gr = pr, mr = hr;
    Ve.Fragment = r, Ve.jsx = gr, Ve.jsxs = mr;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? Ct.exports = jr() : Ct.exports = Sr();
var i = Ct.exports;
function se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Er(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function vn(...e) {
  return (t) => e.forEach((n) => Er(n, t));
}
function be(...e) {
  return v.useCallback(vn(...e), e);
}
function Ar(e, t = []) {
  let n = [];
  function r(s, l) {
    const c = v.createContext(l), u = n.length;
    n = [...n, l];
    const f = (h) => {
      var C;
      const { scope: g, children: p, ...x } = h, w = ((C = g == null ? void 0 : g[e]) == null ? void 0 : C[u]) || c, R = v.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ i.jsx(w.Provider, { value: R, children: p });
    };
    f.displayName = s + "Provider";
    function d(h, g) {
      var w;
      const p = ((w = g == null ? void 0 : g[e]) == null ? void 0 : w[u]) || c, x = v.useContext(p);
      if (x) return x;
      if (l !== void 0) return l;
      throw new Error(`\`${h}\` must be used within \`${s}\``);
    }
    return [f, d];
  }
  const o = () => {
    const s = n.map((l) => v.createContext(l));
    return function(c) {
      const u = (c == null ? void 0 : c[e]) || s;
      return v.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: u } }),
        [c, u]
      );
    };
  };
  return o.scopeName = e, [r, Mr(o, ...t)];
}
function Mr(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const l = r.reduce((c, { useScope: u, scopeName: f }) => {
        const h = u(s)[`__scope${f}`];
        return { ...c, ...h };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var hn = v.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = v.Children.toArray(n), s = o.find(_r);
  if (s) {
    const l = s.props.children, c = o.map((u) => u === s ? v.Children.count(l) > 1 ? v.Children.only(null) : v.isValidElement(l) ? l.props.children : null : u);
    return /* @__PURE__ */ i.jsx(bt, { ...r, ref: t, children: v.isValidElement(l) ? v.cloneElement(l, void 0, c) : null });
  }
  return /* @__PURE__ */ i.jsx(bt, { ...r, ref: t, children: n });
});
hn.displayName = "Slot";
var bt = v.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (v.isValidElement(n)) {
    const o = Or(n);
    return v.cloneElement(n, {
      ...Pr(r, n.props),
      // @ts-ignore
      ref: t ? vn(t, o) : o
    });
  }
  return v.Children.count(n) > 1 ? v.Children.only(null) : null;
});
bt.displayName = "SlotClone";
var pn = ({ children: e }) => /* @__PURE__ */ i.jsx(i.Fragment, { children: e });
function _r(e) {
  return v.isValidElement(e) && e.type === pn;
}
function Pr(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...c) => {
      s(...c), o(...c);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Or(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Tr = [
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
], de = Tr.reduce((e, t) => {
  const n = v.forwardRef((r, o) => {
    const { asChild: s, ...l } = r, c = s ? hn : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ i.jsx(c, { ...l, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Lr(e, t) {
  e && dn.flushSync(() => e.dispatchEvent(t));
}
function Te(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Dr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var kr = "DismissableLayer", Rt = "dismissableLayer.update", zr = "dismissableLayer.pointerDownOutside", Br = "dismissableLayer.focusOutside", tn, gn = v.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), mn = v.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: l,
      onDismiss: c,
      ...u
    } = e, f = v.useContext(gn), [d, h] = v.useState(null), g = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = v.useState({}), x = be(t, (M) => h(M)), w = Array.from(f.layers), [R] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), C = w.indexOf(R), y = d ? w.indexOf(d) : -1, E = f.layersWithOutsidePointerEventsDisabled.size > 0, j = y >= C, S = Hr((M) => {
      const B = M.target, F = [...f.branches].some((N) => N.contains(B));
      !j || F || (o == null || o(M), l == null || l(M), M.defaultPrevented || c == null || c());
    }, g), _ = qr((M) => {
      const B = M.target;
      [...f.branches].some((N) => N.contains(B)) || (s == null || s(M), l == null || l(M), M.defaultPrevented || c == null || c());
    }, g);
    return Dr((M) => {
      y === f.layers.size - 1 && (r == null || r(M), !M.defaultPrevented && c && (M.preventDefault(), c()));
    }, g), v.useEffect(() => {
      if (d)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (tn = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), nn(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = tn);
        };
    }, [d, g, n, f]), v.useEffect(() => () => {
      d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), nn());
    }, [d, f]), v.useEffect(() => {
      const M = () => p({});
      return document.addEventListener(Rt, M), () => document.removeEventListener(Rt, M);
    }, []), /* @__PURE__ */ i.jsx(
      de.div,
      {
        ...u,
        ref: x,
        style: {
          pointerEvents: E ? j ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: se(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: se(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: se(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
mn.displayName = kr;
var Nr = "DismissableLayerBranch", Vr = v.forwardRef((e, t) => {
  const n = v.useContext(gn), r = v.useRef(null), o = be(t, r);
  return v.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ i.jsx(de.div, { ...e, ref: o });
});
Vr.displayName = Nr;
function Hr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e), r = v.useRef(!1), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const s = (c) => {
      if (c.target && !r.current) {
        let u = function() {
          xn(
            zr,
            n,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function qr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e), r = v.useRef(!1);
  return v.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && xn(Br, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function nn() {
  const e = new CustomEvent(Rt);
  document.dispatchEvent(e);
}
function xn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Lr(o, s) : o.dispatchEvent(s);
}
var ye = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, Fr = v.useId || (() => {
}), Wr = 0;
function $r(e) {
  const [t, n] = v.useState(Fr());
  return ye(() => {
    n((r) => r ?? String(Wr++));
  }, [e]), t ? `radix-${t}` : "";
}
const Ir = ["top", "right", "bottom", "left"], ce = Math.min, J = Math.max, Qe = Math.round, Ke = Math.floor, ne = (e) => ({
  x: e,
  y: e
}), Ur = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Yr = {
  start: "end",
  end: "start"
};
function jt(e, t, n) {
  return J(e, ce(t, n));
}
function le(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ae(e) {
  return e.split("-")[0];
}
function Le(e) {
  return e.split("-")[1];
}
function _t(e) {
  return e === "x" ? "y" : "x";
}
function Pt(e) {
  return e === "y" ? "height" : "width";
}
function ue(e) {
  return ["top", "bottom"].includes(ae(e)) ? "y" : "x";
}
function Ot(e) {
  return _t(ue(e));
}
function Gr(e, t, n) {
  n === void 0 && (n = !1);
  const r = Le(e), o = Ot(e), s = Pt(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = et(l)), [l, et(l)];
}
function Xr(e) {
  const t = et(e);
  return [St(e), t, St(t)];
}
function St(e) {
  return e.replace(/start|end/g, (t) => Yr[t]);
}
function Kr(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : l;
    default:
      return [];
  }
}
function Jr(e, t, n, r) {
  const o = Le(e);
  let s = Kr(ae(e), n === "start", r);
  return o && (s = s.map((l) => l + "-" + o), t && (s = s.concat(s.map(St)))), s;
}
function et(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ur[t]);
}
function Zr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function wn(e) {
  return typeof e != "number" ? Zr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function tt(e) {
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
function rn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = ue(t), l = Ot(t), c = Pt(l), u = ae(t), f = s === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, g = r[c] / 2 - o[c] / 2;
  let p;
  switch (u) {
    case "top":
      p = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: h
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: h
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Le(t)) {
    case "start":
      p[l] -= g * (n && f ? -1 : 1);
      break;
    case "end":
      p[l] += g * (n && f ? -1 : 1);
      break;
  }
  return p;
}
const Qr = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: l
  } = n, c = s.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let f = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: h
  } = rn(f, r, u), g = r, p = {}, x = 0;
  for (let w = 0; w < c.length; w++) {
    const {
      name: R,
      fn: C
    } = c[w], {
      x: y,
      y: E,
      data: j,
      reset: S
    } = await C({
      x: d,
      y: h,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: p,
      rects: f,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = y ?? d, h = E ?? h, p = {
      ...p,
      [R]: {
        ...p[R],
        ...j
      }
    }, S && x <= 50 && (x++, typeof S == "object" && (S.placement && (g = S.placement), S.rects && (f = S.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: h
    } = rn(f, g, u)), w = -1);
  }
  return {
    x: d,
    y: h,
    placement: g,
    strategy: o,
    middlewareData: p
  };
};
async function He(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: l,
    elements: c,
    strategy: u
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: g = !1,
    padding: p = 0
  } = le(t, e), x = wn(p), R = c[g ? h === "floating" ? "reference" : "floating" : h], C = tt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(R))) == null || n ? R : R.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: u
  })), y = h === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), j = await (s.isElement == null ? void 0 : s.isElement(E)) ? await (s.getScale == null ? void 0 : s.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = tt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: y,
    offsetParent: E,
    strategy: u
  }) : y);
  return {
    top: (C.top - S.top + x.top) / j.y,
    bottom: (S.bottom - C.bottom + x.bottom) / j.y,
    left: (C.left - S.left + x.left) / j.x,
    right: (S.right - C.right + x.right) / j.x
  };
}
const eo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: l,
      elements: c,
      middlewareData: u
    } = t, {
      element: f,
      padding: d = 0
    } = le(e, t) || {};
    if (f == null)
      return {};
    const h = wn(d), g = {
      x: n,
      y: r
    }, p = Ot(o), x = Pt(p), w = await l.getDimensions(f), R = p === "y", C = R ? "top" : "left", y = R ? "bottom" : "right", E = R ? "clientHeight" : "clientWidth", j = s.reference[x] + s.reference[p] - g[p] - s.floating[x], S = g[p] - s.reference[p], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(f));
    let M = _ ? _[E] : 0;
    (!M || !await (l.isElement == null ? void 0 : l.isElement(_))) && (M = c.floating[E] || s.floating[x]);
    const B = j / 2 - S / 2, F = M / 2 - w[x] / 2 - 1, N = ce(h[C], F), Y = ce(h[y], F), I = N, L = M - w[x] - Y, k = M / 2 - w[x] / 2 + B, U = jt(I, k, L), V = !u.arrow && Le(o) != null && k !== U && s.reference[x] / 2 - (k < I ? N : Y) - w[x] / 2 < 0, H = V ? k < I ? k - I : k - L : 0;
    return {
      [p]: g[p] + H,
      data: {
        [p]: U,
        centerOffset: k - U - H,
        ...V && {
          alignmentOffset: H
        }
      },
      reset: V
    };
  }
}), to = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: l,
        initialPlacement: c,
        platform: u,
        elements: f
      } = t, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: g,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: w = !0,
        ...R
      } = le(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const C = ae(o), y = ue(c), E = ae(c) === c, j = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), S = g || (E || !w ? [et(c)] : Xr(c)), _ = x !== "none";
      !g && _ && S.push(...Jr(c, w, x, j));
      const M = [c, ...S], B = await He(t, R), F = [];
      let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && F.push(B[C]), h) {
        const k = Gr(o, l, j);
        F.push(B[k[0]], B[k[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: F
      }], !F.every((k) => k <= 0)) {
        var Y, I;
        const k = (((Y = s.flip) == null ? void 0 : Y.index) || 0) + 1, U = M[k];
        if (U)
          return {
            data: {
              index: k,
              overflows: N
            },
            reset: {
              placement: U
            }
          };
        let V = (I = N.filter((H) => H.overflows[0] <= 0).sort((H, O) => H.overflows[1] - O.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!V)
          switch (p) {
            case "bestFit": {
              var L;
              const H = (L = N.filter((O) => {
                if (_) {
                  const $ = ue(O.placement);
                  return $ === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter(($) => $ > 0).reduce(($, K) => $ + K, 0)]).sort((O, $) => O[1] - $[1])[0]) == null ? void 0 : L[0];
              H && (V = H);
              break;
            }
            case "initialPlacement":
              V = c;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function on(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function sn(e) {
  return Ir.some((t) => e[t] >= 0);
}
const no = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = le(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await He(t, {
            ...o,
            elementContext: "reference"
          }), l = on(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: sn(l)
            }
          };
        }
        case "escaped": {
          const s = await He(t, {
            ...o,
            altBoundary: !0
          }), l = on(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: sn(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function ro(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = ae(n), c = Le(n), u = ue(n) === "y", f = ["left", "top"].includes(l) ? -1 : 1, d = s && u ? -1 : 1, h = le(t, e);
  let {
    mainAxis: g,
    crossAxis: p,
    alignmentAxis: x
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return c && typeof x == "number" && (p = c === "end" ? x * -1 : x), u ? {
    x: p * d,
    y: g * f
  } : {
    x: g * f,
    y: p * d
  };
}
const oo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: l,
        middlewareData: c
      } = t, u = await ro(t, e);
      return l === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, io = function(e) {
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
        crossAxis: l = !1,
        limiter: c = {
          fn: (R) => {
            let {
              x: C,
              y
            } = R;
            return {
              x: C,
              y
            };
          }
        },
        ...u
      } = le(e, t), f = {
        x: n,
        y: r
      }, d = await He(t, u), h = ue(ae(o)), g = _t(h);
      let p = f[g], x = f[h];
      if (s) {
        const R = g === "y" ? "top" : "left", C = g === "y" ? "bottom" : "right", y = p + d[R], E = p - d[C];
        p = jt(y, p, E);
      }
      if (l) {
        const R = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", y = x + d[R], E = x - d[C];
        x = jt(y, x, E);
      }
      const w = c.fn({
        ...t,
        [g]: p,
        [h]: x
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [g]: s,
            [h]: l
          }
        }
      };
    }
  };
}, so = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: l
      } = t, {
        offset: c = 0,
        mainAxis: u = !0,
        crossAxis: f = !0
      } = le(e, t), d = {
        x: n,
        y: r
      }, h = ue(o), g = _t(h);
      let p = d[g], x = d[h];
      const w = le(c, t), R = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (u) {
        const E = g === "y" ? "height" : "width", j = s.reference[g] - s.floating[E] + R.mainAxis, S = s.reference[g] + s.reference[E] - R.mainAxis;
        p < j ? p = j : p > S && (p = S);
      }
      if (f) {
        var C, y;
        const E = g === "y" ? "width" : "height", j = ["top", "left"].includes(ae(o)), S = s.reference[h] - s.floating[E] + (j && ((C = l.offset) == null ? void 0 : C[h]) || 0) + (j ? 0 : R.crossAxis), _ = s.reference[h] + s.reference[E] + (j ? 0 : ((y = l.offset) == null ? void 0 : y[h]) || 0) - (j ? R.crossAxis : 0);
        x < S ? x = S : x > _ && (x = _);
      }
      return {
        [g]: p,
        [h]: x
      };
    }
  };
}, lo = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: l,
        elements: c
      } = t, {
        apply: u = () => {
        },
        ...f
      } = le(e, t), d = await He(t, f), h = ae(o), g = Le(o), p = ue(o) === "y", {
        width: x,
        height: w
      } = s.floating;
      let R, C;
      h === "top" || h === "bottom" ? (R = h, C = g === (await (l.isRTL == null ? void 0 : l.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (C = h, R = g === "end" ? "top" : "bottom");
      const y = w - d.top - d.bottom, E = x - d.left - d.right, j = ce(w - d[R], y), S = ce(x - d[C], E), _ = !t.middlewareData.shift;
      let M = j, B = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (B = E), (r = t.middlewareData.shift) != null && r.enabled.y && (M = y), _ && !g) {
        const N = J(d.left, 0), Y = J(d.right, 0), I = J(d.top, 0), L = J(d.bottom, 0);
        p ? B = x - 2 * (N !== 0 || Y !== 0 ? N + Y : J(d.left, d.right)) : M = w - 2 * (I !== 0 || L !== 0 ? I + L : J(d.top, d.bottom));
      }
      await u({
        ...t,
        availableWidth: B,
        availableHeight: M
      });
      const F = await l.getDimensions(c.floating);
      return x !== F.width || w !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ot() {
  return typeof window < "u";
}
function De(e) {
  return yn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function oe(e) {
  var t;
  return (t = (yn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yn(e) {
  return ot() ? e instanceof Node || e instanceof Z(e).Node : !1;
}
function ee(e) {
  return ot() ? e instanceof Element || e instanceof Z(e).Element : !1;
}
function re(e) {
  return ot() ? e instanceof HTMLElement || e instanceof Z(e).HTMLElement : !1;
}
function ln(e) {
  return !ot() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Z(e).ShadowRoot;
}
function Fe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = te(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ao(e) {
  return ["table", "td", "th"].includes(De(e));
}
function it(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Tt(e) {
  const t = Lt(), n = ee(e) ? te(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function co(e) {
  let t = fe(e);
  for (; re(t) && !Pe(t); ) {
    if (Tt(t))
      return t;
    if (it(t))
      return null;
    t = fe(t);
  }
  return null;
}
function Lt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Pe(e) {
  return ["html", "body", "#document"].includes(De(e));
}
function te(e) {
  return Z(e).getComputedStyle(e);
}
function st(e) {
  return ee(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function fe(e) {
  if (De(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ln(e) && e.host || // Fallback.
    oe(e)
  );
  return ln(t) ? t.host : t;
}
function Cn(e) {
  const t = fe(e);
  return Pe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : re(t) && Fe(t) ? t : Cn(t);
}
function qe(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Cn(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Z(o);
  if (s) {
    const c = Et(l);
    return t.concat(l, l.visualViewport || [], Fe(o) ? o : [], c && n ? qe(c) : []);
  }
  return t.concat(o, qe(o, [], n));
}
function Et(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bn(e) {
  const t = te(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = re(e), s = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, c = Qe(n) !== s || Qe(r) !== l;
  return c && (n = s, r = l), {
    width: n,
    height: r,
    $: c
  };
}
function Dt(e) {
  return ee(e) ? e : e.contextElement;
}
function _e(e) {
  const t = Dt(e);
  if (!re(t))
    return ne(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = bn(t);
  let l = (s ? Qe(n.width) : n.width) / r, c = (s ? Qe(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
const uo = /* @__PURE__ */ ne(0);
function Rn(e) {
  const t = Z(e);
  return !Lt() || !t.visualViewport ? uo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Z(e) ? !1 : t;
}
function Ce(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Dt(e);
  let l = ne(1);
  t && (r ? ee(r) && (l = _e(r)) : l = _e(e));
  const c = fo(s, n, r) ? Rn(s) : ne(0);
  let u = (o.left + c.x) / l.x, f = (o.top + c.y) / l.y, d = o.width / l.x, h = o.height / l.y;
  if (s) {
    const g = Z(s), p = r && ee(r) ? Z(r) : r;
    let x = g, w = Et(x);
    for (; w && r && p !== x; ) {
      const R = _e(w), C = w.getBoundingClientRect(), y = te(w), E = C.left + (w.clientLeft + parseFloat(y.paddingLeft)) * R.x, j = C.top + (w.clientTop + parseFloat(y.paddingTop)) * R.y;
      u *= R.x, f *= R.y, d *= R.x, h *= R.y, u += E, f += j, x = Z(w), w = Et(x);
    }
  }
  return tt({
    width: d,
    height: h,
    x: u,
    y: f
  });
}
function kt(e, t) {
  const n = st(e).scrollLeft;
  return t ? t.left + n : Ce(oe(e)).left + n;
}
function jn(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    kt(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function vo(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", l = oe(r), c = t ? it(t.floating) : !1;
  if (r === l || c && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = ne(1);
  const d = ne(0), h = re(r);
  if ((h || !h && !s) && ((De(r) !== "body" || Fe(l)) && (u = st(r)), re(r))) {
    const p = Ce(r);
    f = _e(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop;
  }
  const g = l && !h && !s ? jn(l, u, !0) : ne(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - u.scrollLeft * f.x + d.x + g.x,
    y: n.y * f.y - u.scrollTop * f.y + d.y + g.y
  };
}
function ho(e) {
  return Array.from(e.getClientRects());
}
function po(e) {
  const t = oe(e), n = st(e), r = e.ownerDocument.body, o = J(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = J(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + kt(e);
  const c = -n.scrollTop;
  return te(r).direction === "rtl" && (l += J(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: l,
    y: c
  };
}
function go(e, t) {
  const n = Z(e), r = oe(e), o = n.visualViewport;
  let s = r.clientWidth, l = r.clientHeight, c = 0, u = 0;
  if (o) {
    s = o.width, l = o.height;
    const f = Lt();
    (!f || f && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: c,
    y: u
  };
}
function mo(e, t) {
  const n = Ce(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = re(e) ? _e(e) : ne(1), l = e.clientWidth * s.x, c = e.clientHeight * s.y, u = o * s.x, f = r * s.y;
  return {
    width: l,
    height: c,
    x: u,
    y: f
  };
}
function an(e, t, n) {
  let r;
  if (t === "viewport")
    r = go(e, n);
  else if (t === "document")
    r = po(oe(e));
  else if (ee(t))
    r = mo(t, n);
  else {
    const o = Rn(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return tt(r);
}
function Sn(e, t) {
  const n = fe(e);
  return n === t || !ee(n) || Pe(n) ? !1 : te(n).position === "fixed" || Sn(n, t);
}
function xo(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = qe(e, [], !1).filter((c) => ee(c) && De(c) !== "body"), o = null;
  const s = te(e).position === "fixed";
  let l = s ? fe(e) : e;
  for (; ee(l) && !Pe(l); ) {
    const c = te(l), u = Tt(l);
    !u && c.position === "fixed" && (o = null), (s ? !u && !o : !u && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Fe(l) && !u && Sn(e, l)) ? r = r.filter((d) => d !== l) : o = c, l = fe(l);
  }
  return t.set(e, r), r;
}
function wo(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? it(t) ? [] : xo(t, this._c) : [].concat(n), r], c = l[0], u = l.reduce((f, d) => {
    const h = an(t, d, o);
    return f.top = J(h.top, f.top), f.right = ce(h.right, f.right), f.bottom = ce(h.bottom, f.bottom), f.left = J(h.left, f.left), f;
  }, an(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function yo(e) {
  const {
    width: t,
    height: n
  } = bn(e);
  return {
    width: t,
    height: n
  };
}
function Co(e, t, n) {
  const r = re(t), o = oe(t), s = n === "fixed", l = Ce(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ne(0);
  if (r || !r && !s)
    if ((De(t) !== "body" || Fe(o)) && (c = st(t)), r) {
      const g = Ce(t, !0, s, t);
      u.x = g.x + t.clientLeft, u.y = g.y + t.clientTop;
    } else o && (u.x = kt(o));
  const f = o && !r && !s ? jn(o, c) : ne(0), d = l.left + c.scrollLeft - u.x - f.x, h = l.top + c.scrollTop - u.y - f.y;
  return {
    x: d,
    y: h,
    width: l.width,
    height: l.height
  };
}
function xt(e) {
  return te(e).position === "static";
}
function cn(e, t) {
  if (!re(e) || te(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return oe(e) === n && (n = n.ownerDocument.body), n;
}
function En(e, t) {
  const n = Z(e);
  if (it(e))
    return n;
  if (!re(e)) {
    let o = fe(e);
    for (; o && !Pe(o); ) {
      if (ee(o) && !xt(o))
        return o;
      o = fe(o);
    }
    return n;
  }
  let r = cn(e, t);
  for (; r && ao(r) && xt(r); )
    r = cn(r, t);
  return r && Pe(r) && xt(r) && !Tt(r) ? n : r || co(e) || n;
}
const bo = async function(e) {
  const t = this.getOffsetParent || En, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Co(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ro(e) {
  return te(e).direction === "rtl";
}
const jo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vo,
  getDocumentElement: oe,
  getClippingRect: wo,
  getOffsetParent: En,
  getElementRects: bo,
  getClientRects: ho,
  getDimensions: yo,
  getScale: _e,
  isElement: ee,
  isRTL: Ro
};
function So(e, t) {
  let n = null, r;
  const o = oe(e);
  function s() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function l(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), s();
    const {
      left: f,
      top: d,
      width: h,
      height: g
    } = e.getBoundingClientRect();
    if (c || t(), !h || !g)
      return;
    const p = Ke(d), x = Ke(o.clientWidth - (f + h)), w = Ke(o.clientHeight - (d + g)), R = Ke(f), y = {
      rootMargin: -p + "px " + -x + "px " + -w + "px " + -R + "px",
      threshold: J(0, ce(1, u)) || 1
    };
    let E = !0;
    function j(S) {
      const _ = S[0].intersectionRatio;
      if (_ !== u) {
        if (!E)
          return l();
        _ ? l(!1, _) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver(j, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(j, y);
    }
    n.observe(e);
  }
  return l(!0), s;
}
function Eo(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, f = Dt(e), d = o || s ? [...f ? qe(f) : [], ...qe(t)] : [];
  d.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), s && C.addEventListener("resize", n);
  });
  const h = f && c ? So(f, n) : null;
  let g = -1, p = null;
  l && (p = new ResizeObserver((C) => {
    let [y] = C;
    y && y.target === f && p && (p.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var E;
      (E = p) == null || E.observe(t);
    })), n();
  }), f && !u && p.observe(f), p.observe(t));
  let x, w = u ? Ce(e) : null;
  u && R();
  function R() {
    const C = Ce(e);
    w && (C.x !== w.x || C.y !== w.y || C.width !== w.width || C.height !== w.height) && n(), w = C, x = requestAnimationFrame(R);
  }
  return n(), () => {
    var C;
    d.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), h == null || h(), (C = p) == null || C.disconnect(), p = null, u && cancelAnimationFrame(x);
  };
}
const Ao = oo, Mo = io, _o = to, Po = lo, Oo = no, un = eo, To = so, Lo = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: jo,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Qr(e, t, {
    ...o,
    platform: s
  });
};
var Ze = typeof document < "u" ? yr : Cr;
function nt(e, t) {
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
        if (!nt(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !nt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function An(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fn(e, t) {
  const n = An(e);
  return Math.round(t * n) / n;
}
function wt(e) {
  const t = v.useRef(e);
  return Ze(() => {
    t.current = e;
  }), t;
}
function Do(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: l
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: f
  } = e, [d, h] = v.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, p] = v.useState(r);
  nt(g, r) || p(r);
  const [x, w] = v.useState(null), [R, C] = v.useState(null), y = v.useCallback((O) => {
    O !== _.current && (_.current = O, w(O));
  }, []), E = v.useCallback((O) => {
    O !== M.current && (M.current = O, C(O));
  }, []), j = s || x, S = l || R, _ = v.useRef(null), M = v.useRef(null), B = v.useRef(d), F = u != null, N = wt(u), Y = wt(o), I = wt(f), L = v.useCallback(() => {
    if (!_.current || !M.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: g
    };
    Y.current && (O.platform = Y.current), Lo(_.current, M.current, O).then(($) => {
      const K = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      k.current && !nt(B.current, K) && (B.current = K, dn.flushSync(() => {
        h(K);
      }));
    });
  }, [g, t, n, Y, I]);
  Ze(() => {
    f === !1 && B.current.isPositioned && (B.current.isPositioned = !1, h((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [f]);
  const k = v.useRef(!1);
  Ze(() => (k.current = !0, () => {
    k.current = !1;
  }), []), Ze(() => {
    if (j && (_.current = j), S && (M.current = S), j && S) {
      if (N.current)
        return N.current(j, S, L);
      L();
    }
  }, [j, S, L, N, F]);
  const U = v.useMemo(() => ({
    reference: _,
    floating: M,
    setReference: y,
    setFloating: E
  }), [y, E]), V = v.useMemo(() => ({
    reference: j,
    floating: S
  }), [j, S]), H = v.useMemo(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return O;
    const $ = fn(V.floating, d.x), K = fn(V.floating, d.y);
    return c ? {
      ...O,
      transform: "translate(" + $ + "px, " + K + "px)",
      ...An(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: $,
      top: K
    };
  }, [n, c, V.floating, d.x, d.y]);
  return v.useMemo(() => ({
    ...d,
    update: L,
    refs: U,
    elements: V,
    floatingStyles: H
  }), [d, L, U, V, H]);
}
const ko = (e) => {
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
      return r && t(r) ? r.current != null ? un({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? un({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, zo = (e, t) => ({
  ...Ao(e),
  options: [e, t]
}), Bo = (e, t) => ({
  ...Mo(e),
  options: [e, t]
}), No = (e, t) => ({
  ...To(e),
  options: [e, t]
}), Vo = (e, t) => ({
  ..._o(e),
  options: [e, t]
}), Ho = (e, t) => ({
  ...Po(e),
  options: [e, t]
}), qo = (e, t) => ({
  ...Oo(e),
  options: [e, t]
}), Fo = (e, t) => ({
  ...ko(e),
  options: [e, t]
});
var Wo = "Arrow", Mn = v.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ i.jsx(
    de.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ i.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Mn.displayName = Wo;
var $o = Mn;
function Io(e, t = []) {
  let n = [];
  function r(s, l) {
    const c = v.createContext(l), u = n.length;
    n = [...n, l];
    function f(h) {
      const { scope: g, children: p, ...x } = h, w = (g == null ? void 0 : g[e][u]) || c, R = v.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ i.jsx(w.Provider, { value: R, children: p });
    }
    function d(h, g) {
      const p = (g == null ? void 0 : g[e][u]) || c, x = v.useContext(p);
      if (x) return x;
      if (l !== void 0) return l;
      throw new Error(`\`${h}\` must be used within \`${s}\``);
    }
    return f.displayName = s + "Provider", [f, d];
  }
  const o = () => {
    const s = n.map((l) => v.createContext(l));
    return function(c) {
      const u = (c == null ? void 0 : c[e]) || s;
      return v.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: u } }),
        [c, u]
      );
    };
  };
  return o.scopeName = e, [r, Uo(o, ...t)];
}
function Uo(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const l = r.reduce((c, { useScope: u, scopeName: f }) => {
        const h = u(s)[`__scope${f}`];
        return { ...c, ...h };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Yo(e) {
  const [t, n] = v.useState(void 0);
  return ye(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let l, c;
        if ("borderBoxSize" in s) {
          const u = s.borderBoxSize, f = Array.isArray(u) ? u[0] : u;
          l = f.inlineSize, c = f.blockSize;
        } else
          l = e.offsetWidth, c = e.offsetHeight;
        n({ width: l, height: c });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var zt = "Popper", [_n, Pn] = Io(zt), [Go, On] = _n(zt), Tn = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = v.useState(null);
  return /* @__PURE__ */ i.jsx(Go, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Tn.displayName = zt;
var Ln = "PopperAnchor", Dn = v.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = On(Ln, n), l = v.useRef(null), c = be(t, l);
    return v.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || l.current);
    }), r ? null : /* @__PURE__ */ i.jsx(de.div, { ...o, ref: c });
  }
);
Dn.displayName = Ln;
var Bt = "PopperContent", [Xo, Ko] = _n(Bt), kn = v.forwardRef(
  (e, t) => {
    var Re, pe, je, ge, Ue, ze;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: l = 0,
      arrowPadding: c = 0,
      avoidCollisions: u = !0,
      collisionBoundary: f = [],
      collisionPadding: d = 0,
      sticky: h = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: x,
      ...w
    } = e, R = On(Bt, n), [C, y] = v.useState(null), E = be(t, (me) => y(me)), [j, S] = v.useState(null), _ = Yo(j), M = (_ == null ? void 0 : _.width) ?? 0, B = (_ == null ? void 0 : _.height) ?? 0, F = r + (s !== "center" ? "-" + s : ""), N = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, Y = Array.isArray(f) ? f : [f], I = Y.length > 0, L = {
      padding: N,
      boundary: Y.filter(Zo),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: I
    }, { refs: k, floatingStyles: U, placement: V, isPositioned: H, middlewareData: O } = Do({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...me) => Eo(...me, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: R.anchor
      },
      middleware: [
        zo({ mainAxis: o + B, alignmentAxis: l }),
        u && Bo({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? No() : void 0,
          ...L
        }),
        u && Vo({ ...L }),
        Ho({
          ...L,
          apply: ({ elements: me, rects: Ye, availableWidth: Se, availableHeight: xe }) => {
            const { width: Ge, height: Xe } = Ye.reference, ie = me.floating.style;
            ie.setProperty("--radix-popper-available-width", `${Se}px`), ie.setProperty("--radix-popper-available-height", `${xe}px`), ie.setProperty("--radix-popper-anchor-width", `${Ge}px`), ie.setProperty("--radix-popper-anchor-height", `${Xe}px`);
          }
        }),
        j && Fo({ element: j, padding: c }),
        Qo({ arrowWidth: M, arrowHeight: B }),
        g && qo({ strategy: "referenceHidden", ...L })
      ]
    }), [$, K] = Nn(V), he = Te(x);
    ye(() => {
      H && (he == null || he());
    }, [H, he]);
    const $e = (Re = O.arrow) == null ? void 0 : Re.x, Ie = (pe = O.arrow) == null ? void 0 : pe.y, ut = ((je = O.arrow) == null ? void 0 : je.centerOffset) !== 0, [ft, ke] = v.useState();
    return ye(() => {
      C && ke(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: H ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ft,
          "--radix-popper-transform-origin": [
            (ge = O.transformOrigin) == null ? void 0 : ge.x,
            (Ue = O.transformOrigin) == null ? void 0 : Ue.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ze = O.hide) == null ? void 0 : ze.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ i.jsx(
          Xo,
          {
            scope: n,
            placedSide: $,
            onArrowChange: S,
            arrowX: $e,
            arrowY: Ie,
            shouldHideArrow: ut,
            children: /* @__PURE__ */ i.jsx(
              de.div,
              {
                "data-side": $,
                "data-align": K,
                ...w,
                ref: E,
                style: {
                  ...w.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: H ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
kn.displayName = Bt;
var zn = "PopperArrow", Jo = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Bn = v.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Ko(zn, r), l = Jo[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ i.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [l]: 0,
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
        children: /* @__PURE__ */ i.jsx(
          $o,
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
Bn.displayName = zn;
function Zo(e) {
  return e !== null;
}
var Qo = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var R, C, y;
    const { placement: n, rects: r, middlewareData: o } = t, l = ((R = o.arrow) == null ? void 0 : R.centerOffset) !== 0, c = l ? 0 : e.arrowWidth, u = l ? 0 : e.arrowHeight, [f, d] = Nn(n), h = { start: "0%", center: "50%", end: "100%" }[d], g = (((C = o.arrow) == null ? void 0 : C.x) ?? 0) + c / 2, p = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + u / 2;
    let x = "", w = "";
    return f === "bottom" ? (x = l ? h : `${g}px`, w = `${-u}px`) : f === "top" ? (x = l ? h : `${g}px`, w = `${r.floating.height + u}px`) : f === "right" ? (x = `${-u}px`, w = l ? h : `${p}px`) : f === "left" && (x = `${r.floating.width + u}px`, w = l ? h : `${p}px`), { data: { x, y: w } };
  }
});
function Nn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ei = Tn, ti = Dn, ni = kn, ri = Bn, oi = "Portal", Vn = v.forwardRef((e, t) => {
  var c;
  const { container: n, ...r } = e, [o, s] = v.useState(!1);
  ye(() => s(!0), []);
  const l = n || o && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
  return l ? Rr.createPortal(/* @__PURE__ */ i.jsx(de.div, { ...r, ref: t }), l) : null;
});
Vn.displayName = oi;
function ii(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var Nt = (e) => {
  const { present: t, children: n } = e, r = si(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), s = be(r.ref, li(o));
  return typeof n == "function" || r.isPresent ? v.cloneElement(o, { ref: s }) : null;
};
Nt.displayName = "Presence";
function si(e) {
  const [t, n] = v.useState(), r = v.useRef({}), o = v.useRef(e), s = v.useRef("none"), l = e ? "mounted" : "unmounted", [c, u] = ii(l, {
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
    const f = Je(r.current);
    s.current = c === "mounted" ? f : "none";
  }, [c]), ye(() => {
    const f = r.current, d = o.current;
    if (d !== e) {
      const g = s.current, p = Je(f);
      e ? u("MOUNT") : p === "none" || (f == null ? void 0 : f.display) === "none" ? u("UNMOUNT") : u(d && g !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), ye(() => {
    if (t) {
      let f;
      const d = t.ownerDocument.defaultView ?? window, h = (p) => {
        const w = Je(r.current).includes(p.animationName);
        if (p.target === t && w && (u("ANIMATION_END"), !o.current)) {
          const R = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = R);
          });
        }
      }, g = (p) => {
        p.target === t && (s.current = Je(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", h), t.addEventListener("animationend", h), () => {
        d.clearTimeout(f), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", h), t.removeEventListener("animationend", h);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: v.useCallback((f) => {
      f && (r.current = getComputedStyle(f)), n(f);
    }, [])
  };
}
function Je(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function li(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ai({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = ci({ defaultProp: t, onChange: n }), s = e !== void 0, l = s ? e : r, c = Te(n), u = v.useCallback(
    (f) => {
      if (s) {
        const h = typeof f == "function" ? f(e) : f;
        h !== e && c(h);
      } else
        o(f);
    },
    [s, e, o, c]
  );
  return [l, u];
}
function ci({
  defaultProp: e,
  onChange: t
}) {
  const n = v.useState(e), [r] = n, o = v.useRef(r), s = Te(t);
  return v.useEffect(() => {
    o.current !== r && (s(r), o.current = r);
  }, [r, o, s]), n;
}
var ui = "VisuallyHidden", Hn = v.forwardRef(
  (e, t) => /* @__PURE__ */ i.jsx(
    de.span,
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
Hn.displayName = ui;
var fi = Hn, [lt, g1] = Ar("Tooltip", [
  Pn
]), at = Pn(), qn = "TooltipProvider", di = 700, At = "tooltip.open", [vi, Vt] = lt(qn), Fn = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = di,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, [l, c] = v.useState(!0), u = v.useRef(!1), f = v.useRef(0);
  return v.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ i.jsx(
    vi,
    {
      scope: t,
      isOpenDelayed: l,
      delayDuration: n,
      onOpen: v.useCallback(() => {
        window.clearTimeout(f.current), c(!1);
      }, []),
      onClose: v.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => c(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: u,
      onPointerInTransitChange: v.useCallback((d) => {
        u.current = d;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
Fn.displayName = qn;
var ct = "Tooltip", [hi, We] = lt(ct), Wn = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: s,
    disableHoverableContent: l,
    delayDuration: c
  } = e, u = Vt(ct, e.__scopeTooltip), f = at(t), [d, h] = v.useState(null), g = $r(), p = v.useRef(0), x = l ?? u.disableHoverableContent, w = c ?? u.delayDuration, R = v.useRef(!1), [C = !1, y] = ai({
    prop: r,
    defaultProp: o,
    onChange: (M) => {
      M ? (u.onOpen(), document.dispatchEvent(new CustomEvent(At))) : u.onClose(), s == null || s(M);
    }
  }), E = v.useMemo(() => C ? R.current ? "delayed-open" : "instant-open" : "closed", [C]), j = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, R.current = !1, y(!0);
  }, [y]), S = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, y(!1);
  }, [y]), _ = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      R.current = !0, y(!0), p.current = 0;
    }, w);
  }, [w, y]);
  return v.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ i.jsx(ei, { ...f, children: /* @__PURE__ */ i.jsx(
    hi,
    {
      scope: t,
      contentId: g,
      open: C,
      stateAttribute: E,
      trigger: d,
      onTriggerChange: h,
      onTriggerEnter: v.useCallback(() => {
        u.isOpenDelayed ? _() : j();
      }, [u.isOpenDelayed, _, j]),
      onTriggerLeave: v.useCallback(() => {
        x ? S() : (window.clearTimeout(p.current), p.current = 0);
      }, [S, x]),
      onOpen: j,
      onClose: S,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
Wn.displayName = ct;
var Mt = "TooltipTrigger", $n = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = We(Mt, n), s = Vt(Mt, n), l = at(n), c = v.useRef(null), u = be(t, c, o.onTriggerChange), f = v.useRef(!1), d = v.useRef(!1), h = v.useCallback(() => f.current = !1, []);
    return v.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ i.jsx(ti, { asChild: !0, ...l, children: /* @__PURE__ */ i.jsx(
      de.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: u,
        onPointerMove: se(e.onPointerMove, (g) => {
          g.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: se(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: se(e.onPointerDown, () => {
          f.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: se(e.onFocus, () => {
          f.current || o.onOpen();
        }),
        onBlur: se(e.onBlur, o.onClose),
        onClick: se(e.onClick, o.onClose)
      }
    ) });
  }
);
$n.displayName = Mt;
var Ht = "TooltipPortal", [pi, gi] = lt(Ht, {
  forceMount: void 0
}), In = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = We(Ht, t);
  return /* @__PURE__ */ i.jsx(pi, { scope: t, forceMount: n, children: /* @__PURE__ */ i.jsx(Nt, { present: n || s.open, children: /* @__PURE__ */ i.jsx(Vn, { asChild: !0, container: o, children: r }) }) });
};
In.displayName = Ht;
var Oe = "TooltipContent", Un = v.forwardRef(
  (e, t) => {
    const n = gi(Oe, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, l = We(Oe, e.__scopeTooltip);
    return /* @__PURE__ */ i.jsx(Nt, { present: r || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ i.jsx(Yn, { side: o, ...s, ref: t }) : /* @__PURE__ */ i.jsx(mi, { side: o, ...s, ref: t }) });
  }
), mi = v.forwardRef((e, t) => {
  const n = We(Oe, e.__scopeTooltip), r = Vt(Oe, e.__scopeTooltip), o = v.useRef(null), s = be(t, o), [l, c] = v.useState(null), { trigger: u, onClose: f } = n, d = o.current, { onPointerInTransitChange: h } = r, g = v.useCallback(() => {
    c(null), h(!1);
  }, [h]), p = v.useCallback(
    (x, w) => {
      const R = x.currentTarget, C = { x: x.clientX, y: x.clientY }, y = yi(C, R.getBoundingClientRect()), E = Ci(C, y), j = bi(w.getBoundingClientRect()), S = ji([...E, ...j]);
      c(S), h(!0);
    },
    [h]
  );
  return v.useEffect(() => () => g(), [g]), v.useEffect(() => {
    if (u && d) {
      const x = (R) => p(R, d), w = (R) => p(R, u);
      return u.addEventListener("pointerleave", x), d.addEventListener("pointerleave", w), () => {
        u.removeEventListener("pointerleave", x), d.removeEventListener("pointerleave", w);
      };
    }
  }, [u, d, p, g]), v.useEffect(() => {
    if (l) {
      const x = (w) => {
        const R = w.target, C = { x: w.clientX, y: w.clientY }, y = (u == null ? void 0 : u.contains(R)) || (d == null ? void 0 : d.contains(R)), E = !Ri(C, l);
        y ? g() : E && (g(), f());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [u, d, l, f, g]), /* @__PURE__ */ i.jsx(Yn, { ...e, ref: s });
}), [xi, wi] = lt(ct, { isInside: !1 }), Yn = v.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      ...c
    } = e, u = We(Oe, n), f = at(n), { onClose: d } = u;
    return v.useEffect(() => (document.addEventListener(At, d), () => document.removeEventListener(At, d)), [d]), v.useEffect(() => {
      if (u.trigger) {
        const h = (g) => {
          const p = g.target;
          p != null && p.contains(u.trigger) && d();
        };
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [u.trigger, d]), /* @__PURE__ */ i.jsx(
      mn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: l,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ i.jsxs(
          ni,
          {
            "data-state": u.stateAttribute,
            ...f,
            ...c,
            ref: t,
            style: {
              ...c.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ i.jsx(pn, { children: r }),
              /* @__PURE__ */ i.jsx(xi, { scope: n, isInside: !0, children: /* @__PURE__ */ i.jsx(fi, { id: u.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Un.displayName = Oe;
var Gn = "TooltipArrow", Xn = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = at(n);
    return wi(
      Gn,
      n
    ).isInside ? null : /* @__PURE__ */ i.jsx(ri, { ...o, ...r, ref: t });
  }
);
Xn.displayName = Gn;
function yi(e, t) {
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
function Ci(e, t, n = 5) {
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
function bi(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Ri(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const c = t[s].x, u = t[s].y, f = t[l].x, d = t[l].y;
    u > r != d > r && n < (f - c) * (r - u) / (d - u) + c && (o = !o);
  }
  return o;
}
function ji(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Si(t);
}
function Si(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], l = t[t.length - 2];
      if ((s.x - l.x) * (o.y - l.y) >= (s.y - l.y) * (o.x - l.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], l = n[n.length - 2];
      if ((s.x - l.x) * (o.y - l.y) >= (s.y - l.y) * (o.x - l.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Ei = Fn, Ai = Wn, Mi = $n, _i = In, Pi = Un, Oi = Xn;
function Ti({ to: e }) {
  return e ? /* @__PURE__ */ i.jsx(Ei, { delayDuration: 100, children: /* @__PURE__ */ i.jsxs(Ai, { children: [
    /* @__PURE__ */ i.jsx(Mi, { className: "github-corner", asChild: !0, children: /* @__PURE__ */ i.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ i.jsxs(
      "svg",
      {
        width: "80",
        height: "80",
        viewBox: "0 0 250 250",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ i.jsx("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
              fill: "currentColor",
              className: "octo-arm"
            }
          ),
          /* @__PURE__ */ i.jsx(
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
    /* @__PURE__ */ i.jsx(_i, { children: /* @__PURE__ */ i.jsxs(
      Pi,
      {
        side: "right",
        className: "bg-white rounded-md text-black text-14 px-2 py-0.5",
        children: [
          "View source on GitHub",
          /* @__PURE__ */ i.jsx(Oi, {})
        ]
      }
    ) })
  ] }) }) : null;
}
const Li = br(null);
function Kn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Kn(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Di() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Kn(e)) && (r && (r += " "), r += t);
  return r;
}
const ki = ({
  asChild: e,
  mergeClass: t = !0,
  fallbackAs: n = "div",
  children: r,
  ...o
}, s) => {
  var c, u;
  const l = n;
  if (!e)
    return /* @__PURE__ */ i.jsx(l, { ...o, children: r });
  if (Me.Children.count(r) > 1)
    throw new Error("Only one child allowed");
  if (Me.isValidElement(r)) {
    const f = t ? Di((c = r == null ? void 0 : r.props) == null ? void 0 : c.className, o == null ? void 0 : o.className) : (u = r == null ? void 0 : r.props) == null ? void 0 : u.className;
    return Me.cloneElement(r, {
      ...o,
      ref: s,
      ...r == null ? void 0 : r.props,
      className: f
    });
  }
  return null;
}, Jn = Me.forwardRef(ki), zi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.168 9.25V2.929h-1.5V9.25h-6.32v1.5h6.32v6.321h1.5V10.75h6.321v-1.5z",
        clipRule: "evenodd"
      }
    )
  }
), Bi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10 1.6a6.886 6.886 0 0 0-6.886 6.885c0 .058.018.116.055.165l4.077 5.431v4.32h5.508v-4.32l4.077-5.43a.28.28 0 0 0 .055-.166A6.886 6.886 0 0 0 10 1.6m0 4.957a1.93 1.93 0 0 0-1.928 1.928h.005c.345 1.725 1.097 5.509 1.097 5.509h1.652s.752-3.784 1.097-5.509h.005A1.93 1.93 0 0 0 10 6.557m-2.135 7.437-4.2-5.608c0-1.065.863-1.829 1.928-1.829s1.928.863 1.928 1.928c0 0 .751 3.784 1.096 5.509zm4.27 0 4.2-5.608c0-1.065-.863-1.829-1.928-1.829a1.93 1.93 0 0 0-1.928 1.928s-.751 3.784-1.096 5.509z",
        clipRule: "evenodd"
      }
    )
  }
), Ni = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M13.548 10.997c-.015-1.645 1.344-2.435 1.405-2.474-.764-1.119-1.953-1.271-2.378-1.29-1.011-.102-1.974.597-2.488.597s-1.306-.581-2.145-.565c-1.104.017-2.122.641-2.69 1.63-1.147 1.987-.294 4.934.824 6.549.546.789 1.196 1.677 2.052 1.644.825-.032 1.136-.533 2.13-.533.995 0 1.276.534 2.146.517.885-.018 1.447-.807 1.99-1.598.625-.916.884-1.803.899-1.85-.02-.007-1.727-.661-1.745-2.627M11.912 6.166c.454-.55.76-1.315.677-2.077-.655.027-1.446.437-1.915.986-.42.486-.789 1.264-.689 2.011.728.057 1.473-.372 1.927-.92"
      }
    )
  }
), Vi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M5.479 9.94 4.419 11l5.53 5.53 5.53-5.53-1.06-1.06-3.72 3.72V3.47h-1.5v10.19z",
        clipRule: "evenodd"
      }
    )
  }
), Hi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m10.888 14.47 1.06 1.06L17.48 10l-5.53-5.53-1.06 1.06 3.719 3.72H4.418v1.5h10.19z",
        clipRule: "evenodd"
      }
    )
  }
), qi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5.668 7.898c-.728.93-1.792 1.705-3.25 1.705v-1.5c1.05 0 1.848-.675 2.426-1.654.582-.987.824-2.102.824-2.575h1.5c0 .473.242 1.588.825 2.575.578.979 1.375 1.654 2.425 1.654s1.848-.675 2.426-1.654c.583-.987.824-2.102.824-2.575h1.5c0 .473.242 1.588.825 2.575.577.979 1.376 1.654 2.425 1.654v1.5c-1.457 0-2.521-.776-3.25-1.705v3.273h3.25v1.5h-3.25v3.455h-1.5V12.67h-6.5v3.456h-1.5V12.67h-3.25v-1.5h3.25zm1.5 0v3.273h6.5V7.898c-.728.93-1.792 1.705-3.25 1.705s-2.521-.776-3.25-1.705",
        clipRule: "evenodd"
      }
    )
  }
), Fi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        stroke: "#000",
        strokeWidth: 1.5,
        d: "m4.304 10.232 4.263 4.79 7.13-11.238"
      }
    )
  }
), Wi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m3.888 7.53 1.06-1.06 5.47 5.47 5.47-5.47 1.06 1.06-6.53 6.53z",
        clipRule: "evenodd"
      }
    )
  }
), $i = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12.888 3.47 1.06 1.06L8.48 10l5.47 5.47-1.061 1.06L6.358 10z",
        clipRule: "evenodd"
      }
    )
  }
), Ii = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m7.949 16.53-1.061-1.06 5.47-5.47-5.47-5.47 1.06-1.06L14.48 10z",
        clipRule: "evenodd"
      }
    )
  }
), Ui = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m16.949 12.47-1.061 1.06-5.47-5.47-5.47 5.47-1.06-1.06 6.53-6.53z",
        clipRule: "evenodd"
      }
    )
  }
), Yi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m10.418 11.06 4.47 4.47 1.06-1.06L11.48 10l4.47-4.47-1.06-1.06-4.47 4.47-4.47-4.47-1.06 1.06L9.357 10l-4.47 4.47 1.06 1.06z",
        clipRule: "evenodd"
      }
    )
  }
), Gi = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M9.528 7.898a2.89 2.89 0 0 1-2.882 2.899 2.89 2.89 0 0 1-2.882-2.899A2.89 2.89 0 0 1 6.646 5a2.89 2.89 0 0 1 2.882 2.898M9.053 12.275a6 6 0 0 0-2.407-.493c-2.827 0-5.121 1.885-5.146 4.217h5.708v-.01c.016-1.507.737-2.795 1.845-3.714M16.236 7.899a2.89 2.89 0 0 1-2.882 2.898 2.89 2.89 0 0 1-2.882-2.898A2.89 2.89 0 0 1 13.354 5a2.89 2.89 0 0 1 2.882 2.898"
        }
      ),
      /* @__PURE__ */ i.jsx(
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
), Xi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.597 10a1.388 1.388 0 1 1-2.776 0 1.388 1.388 0 0 1 2.776 0m5.21 0a1.388 1.388 0 1 1-2.777 0 1.388 1.388 0 0 1 2.776 0m3.82 1.388a1.388 1.388 0 1 0 0-2.776 1.388 1.388 0 0 0 0 2.776",
        clipRule: "evenodd"
      }
    )
  }
), Ki = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.317 17H7V9.396a1.25 1.25 0 1 1 1 0v5.028l2.733-1.024v-1.012a1.25 1.25 0 1 1 1 .015v1.69L8 15.493V17h8V8.146h-5.545V3H4v14zm9.614-9.843-4.42-4.093.055 4.093z",
        clipRule: "evenodd"
      }
    )
  }
), Ji = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.918 4.5h-6V6h4.5v6.5h1.5zm-1.5 9.5v3h-9V6h3V3h9v11zm-7.5 1.5v-8h6v8z",
        clipRule: "evenodd"
      }
    )
  }
), Zi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5 6.714 3.618 3.547H2.5L4.158 7.02H2.98v.69h1.494v.663H2.981v.69h1.494v1.484h1.036V9.063h1.46v-.69h-1.46v-.66l.001-.003h1.46v-.69h-1.13L7.5 3.547H6.383zm4.747 8.232v-.788a2.9 2.9 0 0 1-1.04-.249 2.04 2.04 0 0 1-.863-.727 2.2 2.2 0 0 1-.344-1.125h1.017q.03.39.236.65.21.257.535.383.216.08.46.109V10.81l-.319-.093q-.806-.236-1.28-.693-.468-.456-.469-1.209 0-.622.315-1.086.316-.465.853-.72.41-.2.9-.246v-.817h.537v.81q.547.034.981.249.525.255.827.706.301.447.315 1.027h-.978a1.04 1.04 0 0 0-.433-.774 1.47 1.47 0 0 0-.712-.264v2.253l.283.079q.321.084.659.228a2.6 2.6 0 0 1 .627.38q.288.235.466.583.18.348.18.834 0 .611-.295 1.086a2 2 0 0 1-.85.749q-.456.226-1.07.265v.79zm1.024-1.877q-.222.096-.486.128v-2.23q.323.095.584.218.29.133.457.337.17.204.17.524 0 .352-.194.615-.193.261-.531.408M9.747 7.706v2.095a5 5 0 0 1-.246-.086 2.2 2.2 0 0 1-.4-.207 1 1 0 0 1-.299-.313.85.85 0 0 1-.111-.443.94.94 0 0 1 .164-.545q.168-.242.47-.38.19-.089.422-.12m7.677 10.086h-4.9v-.897h.34a.34.34 0 0 0 .29-.186q.102-.175.137-.411.034-.24.028-.432l-.027-.779H12.5v-.896h.76l-.043-1.262q-.027-.708.273-1.183.305-.475.809-.715.503-.24 1.084-.24.519 0 .931.166.417.164.7.452.287.282.41.647.122.364.048.766l-1.01-.156q.034-.33-.11-.55a.9.9 0 0 0-.395-.33 1.31 1.31 0 0 0-1.102.024q-.266.135-.434.411-.165.277-.164.708l.048 1.261h1.649v.897H14.34l.029.752q.02.435-.116.78-.06.15-.166.276h3.337z",
        clipRule: "evenodd"
      }
    )
  }
), Qi = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
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
), es = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "#fff",
          fillRule: "evenodd",
          d: "M10.106 13.232a.996.996 0 0 1-1.35-.057l-1.93-1.932a.997.997 0 0 1-.058-1.349l.03-.034c.34-.403.794-.937 1.285-1.51l.303-.353.37-.43c.969-1.121 1.958-2.244 2.466-2.751 1.816-1.816 3.689-3.04 6.132-3.01a.85.85 0 0 1 .84.84c.03 2.443-1.194 4.316-3.01 6.132-.507.507-1.63 1.497-2.752 2.466a273 273 0 0 1-2.327 1.988M15.18 6.73a1.352 1.352 0 1 1-1.912-1.912 1.352 1.352 0 0 1 1.912 1.912",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "#fff",
          d: "M2.785 13.821a.4.4 0 1 0 .566.566l2.152-2.152a.4.4 0 0 0-.566-.566zM2.207 17.227a.4.4 0 0 0 .566.566l4.144-4.144a.4.4 0 1 0-.566-.566zM5.613 17.215a.4.4 0 0 1 0-.566l2.152-2.152a.4.4 0 0 1 .566.566l-2.152 2.152a.4.4 0 0 1-.566 0M2.005 9.902c1.6-1.6 3.611-2.442 5.46-2.462.032 0 .05.037.029.061a337 337 0 0 0-1.914 2.25l-.169.2-.004.002a5.9 5.9 0 0 0-3.33.06c-.068.022-.121-.062-.072-.111M10.047 14.593v-.002l.001-.002.001-.001.2-.168a309 309 0 0 0 2.25-1.914.037.037 0 0 1 .06.029c-.019 1.849-.862 3.86-2.46 5.46-.05.05-.134-.005-.112-.071a5.9 5.9 0 0 0 .06-3.331"
        }
      )
    ]
  }
), ts = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.543 5.188h6.914v11.618H6.543zM5 18.497v-15h10v15zm7-12H8v1.46h4z",
        clipRule: "evenodd"
      }
    )
  }
), ns = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M14.852 5.095c-.893-.46-1.85-.8-2.85-.994-.018-.003-.037.006-.046.025-.123.246-.26.567-.355.82a9.5 9.5 0 0 0-3.2 0 9 9 0 0 0-.36-.82.04.04 0 0 0-.046-.025c-1 .194-1.957.533-2.85.994a.04.04 0 0 0-.019.018c-1.815 3.05-2.312 6.024-2.068 8.961a.06.06 0 0 0 .018.037 11.2 11.2 0 0 0 3.496 1.987q.029.01.049-.018.406-.62.715-1.308c.012-.027 0-.059-.024-.07a7.3 7.3 0 0 1-1.092-.585c-.028-.018-.03-.062-.005-.083q.111-.094.217-.192a.04.04 0 0 1 .046-.006c2.29 1.176 4.771 1.176 7.035 0a.04.04 0 0 1 .046.006q.106.098.218.192c.025.02.023.065-.004.083q-.523.344-1.093.585c-.025.01-.036.043-.024.07q.316.687.715 1.308.018.027.05.018a11.1 11.1 0 0 0 3.5-1.987.05.05 0 0 0 .019-.036c.292-3.396-.49-6.346-2.07-8.961a.04.04 0 0 0-.018-.019m-7.174 7.19c-.69 0-1.258-.712-1.258-1.586s.558-1.587 1.258-1.587c.707 0 1.27.719 1.259 1.587 0 .874-.558 1.587-1.259 1.587m4.652 0c-.69 0-1.258-.712-1.258-1.586s.557-1.587 1.258-1.587c.707 0 1.27.719 1.258 1.587 0 .874-.551 1.587-1.258 1.587"
      }
    )
  }
), rs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.648 8.35 10.797 4.5h-.047v3.85zM9.25 4.5H5.918v11h9V9.85H9.25zM16.418 8l-5-5h-7v14h12z",
        clipRule: "evenodd"
      }
    )
  }
), os = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M3 12.25V18h13.5v-5.75H15v4.25H4.5v-4.25zm11.28-2.47-1.06-1.06-2.72 2.72V3.25H9v8.19L6.28 8.72 5.22 9.78l4.53 4.53z",
        clipRule: "evenodd"
      }
    )
  }
), is = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "#fff",
        d: "M7.572 7.014a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.877M7.572 11.94a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.876M7.572 16.864a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876M12.89 7.014a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.877M12.89 11.94a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.876M12.89 16.864a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876"
      }
    )
  }
), ss = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "m5.285 12.884 6.53-6.531 2.254 2.253-6.531 6.531-2.878.618zM14.674 8.001l-2.253-2.253 1.502-1.503L16.176 6.5z"
      }
    )
  }
), ls = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.01 6.1H4.99L10 9.68zM3.5 6.88v7.22h13V6.88L10 11.521zM2 15.6v-11h16v11z",
        clipRule: "evenodd"
      }
    )
  }
), as = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m6.98 5.703 7.937 7.937v-3.19h1.5v5.75h-5.75v-1.5h3.19L5.92 6.764v3.189h-1.5v-5.75h5.75v1.5z",
        clipRule: "evenodd"
      }
    )
  }
), cs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.608 6.75h-5.19v-1.5h7.75V13h-1.5V7.81l-7.72 7.72-1.06-1.06z",
        clipRule: "evenodd"
      }
    )
  }
), us = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M12.42 5.797c-.93 0-1.194.413-1.194 1.322v1.5H13.7l-.244 2.432h-2.23v7.368h-2.96V11.05H6.268V8.619h1.997V7.161c0-2.453.984-3.742 3.742-3.742.592 0 1.3.046 1.724.106v2.282"
      }
    )
  }
), fs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.51 3C3.675 3 3 3.692 3 4.545V16.6c0 .455.36.824.805.824h6.238a.815.815 0 0 0 .806-.824v-6.006c1.175 0 2.128.937 2.128 2.093v2.335c0 1.092.9 1.978 2.011 1.978S17 16.114 17 15.022V8.24c0-.832-.336-1.631-.935-2.22L13.64 3.636l-.55.542 1.845 1.814c-.754.133-1.33.832-1.33 1.675 0 .937.712 1.697 1.591 1.697.39 0 .748-.15 1.024-.399v6.057c0 .67-.552 1.212-1.233 1.212-.68 0-1.232-.542-1.232-1.212v-2.335c0-1.579-1.302-2.859-2.908-2.859V4.545C10.849 3.692 10.173 3 9.34 3zm.805 1.485a.826.826 0 0 0-.83.821v1.54c0 .453.372.82.83.82h3.218c.459 0 .83-.367.83-.82v-1.54a.826.826 0 0 0-.83-.821zm9.882 3.962c-.404 0-.732-.35-.732-.78s.328-.78.732-.78.732.349.732.78c0 .43-.328.78-.732.78",
        clipRule: "evenodd"
      }
    )
  }
), ds = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.5 10.575v1.742a9.7 9.7 0 0 0-2.367.383 8.6 8.6 0 0 1-.355-2.125zm-2.005 3.061a8.7 8.7 0 0 1 2.005-.318v2.672c-.697-.457-1.462-1.21-2.005-2.354m-1.718-3.061c.04.93.19 1.75.416 2.472a7.2 7.2 0 0 0-1.45.852 6.47 6.47 0 0 1-1.224-3.324zm.775 3.407c-.44.199-.825.43-1.158.679a6.5 6.5 0 0 0 2.934 1.697 6.9 6.9 0 0 1-1.776-2.376m5.953-.346a8.7 8.7 0 0 0-2.005-.318v2.672c.697-.457 1.462-1.21 2.005-2.354m-2.005-1.32c.884.038 1.67.176 2.367.384.19-.617.317-1.323.355-2.125H10.5zm1.172 4.041a6.9 6.9 0 0 0 1.776-2.375c.44.199.825.43 1.158.679a6.5 6.5 0 0 1-2.934 1.696m2.135-3.31a7.2 7.2 0 0 1 1.45.852 6.47 6.47 0 0 0 1.224-3.324h-2.258c-.04.93-.19 1.75-.416 2.472m-.585-3.472H10.5V7.833a9.7 9.7 0 0 0 2.367-.384c.19.618.317 1.323.355 2.126m-.717-3.062a8.7 8.7 0 0 1-2.005.319V4.159c.697.457 1.462 1.21 2.005 2.354m.943-.345a6.9 6.9 0 0 0-1.776-2.376c1.128.3 2.135.894 2.934 1.697a6.2 6.2 0 0 1-1.158.679m.359.935a7.2 7.2 0 0 0 1.45-.852 6.47 6.47 0 0 1 1.224 3.324h-2.258c-.04-.93-.19-1.75-.416-2.472M9.5 6.832V4.159c-.697.457-1.462 1.21-2.005 2.354.588.17 1.254.284 2.005.319m0 1.001a9.7 9.7 0 0 1-2.367-.384 8.6 8.6 0 0 0-.355 2.126H9.5zm-3.307-.73a9.6 9.6 0 0 0-.416 2.472H3.52A6.47 6.47 0 0 1 4.743 6.25c.417.317.899.608 1.45.852m.36-.935c-.442-.2-.826-.43-1.16-.68a6.5 6.5 0 0 1 2.935-1.696 6.9 6.9 0 0 0-1.776 2.376M10 18.075a8 8 0 1 0 0-16 8 8 0 0 0 0 16",
        clipRule: "evenodd"
      }
    )
  }
), vs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.603 7.94c-.67-.644-1.517-.975-2.466-.975-1.678 0-3.1 1.143-3.608 2.687-.13.39-.204.807-.204 1.24 0 .434.07.851.204 1.241.509 1.544 1.93 2.687 3.608 2.687.868 0 1.603-.239 2.182-.629a3.02 3.02 0 0 0 1.287-1.939h-3.47V9.81h6.06c.063.396.101.802.101 1.23 0 1.977-.697 3.645-1.909 4.777-1.061.992-2.514 1.577-4.251 1.577-2.515 0-4.686-1.463-5.742-3.586a6.48 6.48 0 0 1 0-5.829c1.056-2.123 3.227-3.585 5.742-3.585 1.737 0 3.19.644 4.3 1.695z",
        clipRule: "evenodd"
      }
    )
  }
), hs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "#fff",
        d: "M3 4.6A1.6 1.6 0 0 1 4.6 3H7a1.6 1.6 0 0 1 1.6 1.6V7A1.6 1.6 0 0 1 7 8.6H4.6A1.6 1.6 0 0 1 3 7zM3 13a1.6 1.6 0 0 1 1.6-1.6H7A1.6 1.6 0 0 1 8.6 13v2.4A1.6 1.6 0 0 1 7 17H4.6A1.6 1.6 0 0 1 3 15.4zM11.4 4.6A1.6 1.6 0 0 1 13 3h2.4A1.6 1.6 0 0 1 17 4.6V7a1.6 1.6 0 0 1-1.6 1.6H13A1.6 1.6 0 0 1 11.4 7zM11.4 13a1.6 1.6 0 0 1 1.6-1.6h2.4A1.6 1.6 0 0 1 17 13v2.4a1.6 1.6 0 0 1-1.6 1.6H13a1.6 1.6 0 0 1-1.6-1.6z"
      }
    )
  }
), ps = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.918 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m1.5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-9 1.469v.133h1.48v-.133q.005-.383.098-.645a1.3 1.3 0 0 1 .293-.46q.2-.2.508-.384.367-.218.637-.488.27-.273.418-.625.152-.356.152-.812 0-.684-.34-1.168a2.13 2.13 0 0 0-.937-.739q-.598-.257-1.375-.257-.706 0-1.293.254-.585.25-.941.761-.356.508-.375 1.29h1.593q.012-.321.157-.536a.9.9 0 0 1 .37-.328 1.06 1.06 0 0 1 .481-.113q.262 0 .477.11a.86.86 0 0 1 .347.312.86.86 0 0 1 .13.472q0 .255-.114.461-.113.204-.305.371a4 4 0 0 1-.433.325 2.7 2.7 0 0 0-.555.453q-.23.25-.352.656-.117.406-.12 1.09m.106 2.36a.92.92 0 0 0 .668.273q.25 0 .46-.125.212-.13.34-.34a.897.897 0 0 0-.149-1.129.9.9 0 0 0-.651-.274.92.92 0 0 0-.668.274.88.88 0 0 0-.27.656.9.9 0 0 0 .27.664",
        clipRule: "evenodd"
      }
    )
  }
), gs = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.425 5.189q-.7-.091-1.425-.092c-3.564 0-6.716 1.703-8.445 4.296l-.277.416.277.416c1.141 1.712 2.902 3.035 4.991 3.737l.744-1.336c-1.727-.522-3.19-1.527-4.187-2.817C4.59 7.887 7.11 6.597 10 6.597q.318 0 .63.02z"
        }
      ),
      /* @__PURE__ */ i.jsx("path", { fill: "currentColor", d: "M10.179 7.43a2.385 2.385 0 0 0-2.105 3.786z" }),
      /* @__PURE__ */ i.jsx(
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
), ms = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M11.506 14.123v-3.574a.44.44 0 0 0-.463-.463H8.811a.44.44 0 0 0-.469.463v3.574zm-6.996.164V10.14l5.039-4.23q.381-.318.756 0l5.033 4.23v4.148q0 .675-.416 1.06-.411.393-1.113.393H6.045q-.71 0-1.125-.392-.41-.387-.41-1.06M2.494 8.955q0-.346.305-.603l6.105-5.127q.47-.393 1.026-.393.562 0 1.025.393l6.1 5.12q.299.253.299.622a.66.66 0 0 1-.217.521.78.78 0 0 1-.545.194.75.75 0 0 1-.317-.07 1.5 1.5 0 0 1-.287-.188l-5.73-4.81a.5.5 0 0 0-.328-.135.5.5 0 0 0-.323.134l-5.742 4.81a1.5 1.5 0 0 1-.287.188.75.75 0 0 1-.316.07q-.352 0-.563-.204a.72.72 0 0 1-.205-.522M13.41 5.773V4.391q0-.205.123-.328a.46.46 0 0 1 .334-.124h1.078q.205 0 .328.123a.44.44 0 0 1 .123.329v3.04z"
      }
    )
  }
), xs = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx("path", { stroke: "#000", d: "M2.5 2.5h3.571v3.571H2.5z" }),
      /* @__PURE__ */ i.jsx("path", { fill: "currentColor", stroke: "#000", d: "M8.214 2.5h3.571v3.571H8.214z" }),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          stroke: "#000",
          d: "M13.929 2.5H17.5v3.571h-3.571zM2.5 8.214h3.571v3.571H2.5zM8.214 8.214h3.571v3.571H8.214z"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          stroke: "#000",
          d: "M13.929 8.214H17.5v3.571h-3.571zM2.5 13.929h3.571V17.5H2.5z"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          stroke: "#000",
          d: "M8.214 13.929h3.571V17.5H8.214zM13.929 13.929H17.5V17.5h-3.571z"
        }
      )
    ]
  }
), ws = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M9.214 1.588q.923 0 1.73.349a4.4 4.4 0 0 1 1.428.957q.616.608.957 1.421.349.807.349 1.73 0 1.388-.827 2.516-.82 1.12-2.359 1.77l1.695 1.702q.144.15.144.335a.43.43 0 0 1-.137.328l-1.743 1.737 1.251 1.237a.46.46 0 0 1 .137.328.44.44 0 0 1-.137.335l-2.16 2.16a.4.4 0 0 1-.321.123.45.45 0 0 1-.294-.123l-1.183-1.155a.8.8 0 0 1-.164-.24.8.8 0 0 1-.048-.273v-6.63a4.5 4.5 0 0 1-1.483-.971 4.47 4.47 0 0 1-1.306-3.179 4.4 4.4 0 0 1 1.299-3.158q.615-.616 1.422-.957a4.5 4.5 0 0 1 1.75-.342m0 4.15q.491 0 .848-.35.355-.354.355-.854 0-.492-.355-.847a1.16 1.16 0 0 0-.848-.356 1.15 1.15 0 0 0-.855.356 1.15 1.15 0 0 0-.348.847q0 .5.348.855.356.348.855.348"
      }
    )
  }
), ys = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          stroke: "#000",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M10.906 8.966c1.459 1.316 1.459 3.45 0 4.765l-2.53 2.282c-1.459 1.316-3.824 1.316-5.282 0-1.459-1.315-1.459-3.449 0-4.764l1.265-1.142"
        }
      ),
      /* @__PURE__ */ i.jsx(
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
), Cs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "#fff",
        d: "M2 6a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2M2 14a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2"
      }
    )
  }
), bs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m17 7.862-1.78-4.45H4.78L3 7.862v.08c0 .34.099.841.407 1.27.113.155.25.298.417.419v6.957h12.353V9.631a1.9 1.9 0 0 0 .416-.42A2.25 2.25 0 0 0 17 7.941zm-1.647 2.105a2.5 2.5 0 0 1-.412.033c-.789 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782a2.5 2.5 0 0 1-.412-.033v3.432h10.706zM13.706 7.94c0 .209.066.53.252.789.17.237.459.446.983.446.525 0 .813-.209.984-.446.165-.23.235-.51.249-.716l-.03-.073zm.956-3.706 1.153 2.883h-2.19l-.641-2.883zm-1.881 2.883-.64-2.883h-1.73v2.883zm-5.562 0 .64-2.883h1.73v2.883zm-.203-2.883-.64 2.883H4.185l1.153-2.883zm-3.19 3.78.03-.074h2.438c0 .209-.066.53-.252.789-.17.237-.459.446-.983.446-.525 0-.813-.209-.984-.446a1.43 1.43 0 0 1-.249-.716m5.51.715a1.43 1.43 0 0 0 .252-.789h-2.47c0 .209.066.53.251.789.171.237.46.446.984.446.525 0 .813-.209.983-.446m3.294 0c.186-.258.252-.58.252-.789h-2.47c0 .209.066.53.252.789.17.237.458.446.983.446s.813-.209.983-.446",
        clipRule: "evenodd"
      }
    )
  }
), Rs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.868 6.582h11.1v1.5h-11.1zm0 3.377h11.1v1.5h-11.1zm11.1 3.377h-11.1v1.5h11.1z",
        clipRule: "evenodd"
      }
    )
  }
), js = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M3.362 5.144 7.874 2.54l4.089 7.083-4.512 2.605z"
        }
      ),
      /* @__PURE__ */ i.jsx("path", { stroke: "#000", strokeWidth: 1.5, d: "m9.92 6.08 7.332-4.233" }),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M3.977 15.387 2 13.41h13.615l-.723 1.977h-1.346c-.33 0-.989.198-.989.989s.66.988.989.988h.597v1.483h-8.83v-1.483H6.41c.79 0 .988-.659.988-.988 0-.33-.198-.989-.988-.989z"
        }
      )
    ]
  }
), Ss = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.918 14.994v.752q-.519.36-1.08.618A7.003 7.003 0 0 1 6.968 5.05a7 7 0 0 1 8.95-.796v.752a4.979 4.979 0 0 0-3.293 1.459 5 5 0 0 0 3.293 8.53m-4.353-.398q.495.493 1.059.859a5.5 5.5 0 1 1 0-10.91q-.564.366-1.06.859a6.5 6.5 0 0 0 0 9.192",
        clipRule: "evenodd"
      }
    )
  }
), Es = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13.283 6.175a4.643 4.643 0 1 0-6.566 6.567l-.708.707a5.644 5.644 0 1 1 7.982 0l-.708-.707a4.644 4.644 0 0 0 0-6.567m-5.097 1.47a2.565 2.565 0 0 1 3.628 3.627l.707.707a3.565 3.565 0 1 0-5.042 0l.707-.707a2.565 2.565 0 0 1 0-3.627M10 10.959a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 .667-1.5 6h3z",
        clipRule: "evenodd"
      }
    )
  }
), As = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        stroke: "#000",
        strokeWidth: 1.5,
        d: "M16 6.5 10 3 4 6.5m12 0v7L10 17m6-10.5L10 10m0 7-6-3.5v-7M10 17v-7M4 6.5l6 3.5"
      }
    )
  }
), Ms = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.899 5.261a1 1 0 0 1 1 1v.729H2.102v2.055h15.797v4.694a1 1 0 0 1-1 1H3.102a1 1 0 0 1-1-1V6.261a1 1 0 0 1 1-1zm-7.13 7.284h7v1h-7z",
        clipRule: "evenodd"
      }
    )
  }
), _s = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "#fff",
        d: "M11.882 15.626a2.896 2.896 0 0 0 .241-3.821l3.896-5.009.957.957L18 6.73 13.27 2l-1.024 1.024.958.957-5.009 3.896a2.896 2.896 0 0 0-3.82.242zM3.536 15.44C2.716 16.26 2.17 17.489 2 18c.512-.17 1.74-.717 2.56-1.536l3.129-3.13-1.024-1.023z"
      }
    )
  }
), Ps = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx("circle", { cx: 10, cy: 7.361, r: 3.361, fill: "currentColor" }),
      /* @__PURE__ */ i.jsx(
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
), Os = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.418 3.6h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5V2.1h4m0 12h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5v-5.5h4m8-9h2.5v2.5h-2.5zm4-1.5h-5.5v5.5h5.5V2.1m-1.5 12h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5v-5.5h4M9.668 2.1v7.25h-7.25v1.5h8.75V2.1zm1.5 10.5v5.5h-1.5v-5.5zm1.75-1.75h5.5v-1.5h-5.5z",
        clipRule: "evenodd"
      }
    )
  }
), Ts = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.668 11.418v5.75h13.5v-5.75h-1.5v4.25h-10.5v-4.25zm11.28-2.47-1.06-1.06-2.72 2.72v-8.19h-1.5v8.19l-2.72-2.72-1.06 1.06 4.53 4.53z",
        clipRule: "evenodd"
      }
    )
  }
), Ls = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2 10.046 3.975 3l1.864 2.016a7.458 7.458 0 1 1-2.586 7.787l1.762-.354.03.099a5.666 5.666 0 1 0 2.017-6.211l2.117 2.289z",
        clipRule: "evenodd"
      }
    )
  }
), Ds = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.365 2.635a2.17 2.17 0 1 1-3.068 3.068 2.17 2.17 0 0 1 3.068-3.068M6.788 14.008a2.17 2.17 0 1 1-3.067 3.067 2.17 2.17 0 0 1 3.067-3.067"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          stroke: "#000",
          strokeWidth: 1.5,
          d: "M10.736 4.015h-2.08c-2.763 0-3.498 1.274-3.498 3.498v4.44"
        }
      )
    ]
  }
), ks = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2.418 7h1.5V3.5h3.5V2h-5zm11-5v1.5h3.5V7h1.5V2zm-9.5 11h-1.5v5h5v-1.5h-3.5zm9.5 5v-1.5h3.5V13h1.5v5zm-3.75-4v-3.25h-3.25v-1.5h3.25V6h1.5v3.25h3.25v1.5h-3.25V14z",
        clipRule: "evenodd"
      }
    )
  }
), zs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13.918 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-.677 4.383a5.5 5.5 0 1 1 1.06-1.06l2.648 2.647-1.061 1.06z",
        clipRule: "evenodd"
      }
    )
  }
), Bs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.529 15.925 9.419 11 4.493 8.89 2.418 8l2.142-.714 11.08-3.693L17.418 3l-.593 1.779-3.693 11.08L12.418 18zm-1.71-6.386L6.635 8.175l6.82-2.273zm1.06 1.061 1.364 3.183 2.273-6.82z",
        clipRule: "evenodd"
      }
    )
  }
), Ns = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2.418 6.374v7.252c0 1.48 1.218 2.68 2.72 2.68h10.56c1.503 0 2.72-1.2 2.72-2.68V6.374c0-1.48-1.217-2.68-2.72-2.68H5.138c-1.502 0-2.72 1.2-2.72 2.68m4 .473a.794.794 0 0 0-.8-.789c-.442 0-.8.353-.8.789 0 .435.359.788.8.788s.8-.353.8-.788m-.8 5.513c.442 0 .8.353.8.788a.794.794 0 0 1-.8.789.794.794 0 0 1-.8-.789c0-.435.359-.788.8-.788m10.4-2.36a.794.794 0 0 0-.8-.788c-.441 0-.8.353-.8.788s.359.788.8.788.8-.353.8-.788m-7.2-3.942h6.4c.442 0 .8.353.8.789a.794.794 0 0 1-.8.788h-6.4a.794.794 0 0 1-.8-.788c0-.436.359-.789.8-.789m6.4 6.302h-6.4c-.441 0-.8.353-.8.788s.359.789.8.789h6.4c.442 0 .8-.353.8-.789a.794.794 0 0 0-.8-.788m-9.6-3.148h6.4c.442 0 .8.353.8.788a.794.794 0 0 1-.8.788h-6.4a.794.794 0 0 1-.8-.788c0-.435.359-.788.8-.788",
        clipRule: "evenodd"
      }
    )
  }
), Vs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.775 5.204a5.5 5.5 0 0 0-1.341-.537L11 2.5H9l-.443 2.214c-.444.128-.866.31-1.257.54L5.404 3.99 3.99 5.404l1.283 1.925q-.32.571-.497 1.216L2.5 9v2l2.276.455q.178.645.497 1.216L3.99 14.596l1.414 1.414L7.3 14.746c.391.23.813.412 1.257.54L9 17.5h2l.434-2.167c.474-.12.925-.302 1.341-.537l1.821 1.214 1.414-1.414-1.195-1.793c.253-.427.45-.891.581-1.382L17.5 11V9l-2.104-.42a5.5 5.5 0 0 0-.581-1.383l1.195-1.793-1.414-1.414zm-.59 2.692a2.976 2.976 0 1 0-4.208 4.208 2.976 2.976 0 0 0 4.209-4.208",
        clipRule: "evenodd"
      }
    )
  }
), Hs = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M4 6.234a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V10.5L14 9v5.734a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.769l-1.516 1.5z"
        }
      ),
      /* @__PURE__ */ i.jsx("path", { stroke: "#000", strokeWidth: 1.25, d: "M11 3h5v5" }),
      /* @__PURE__ */ i.jsx("path", { stroke: "#000", strokeWidth: 1.5, d: "m16 3-8 8" })
    ]
  }
), qs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.668 3.959h-10.5v6.75c0 1.653.47 3.021 1.358 4.141.877 1.106 2.123 1.92 3.598 2.549l.294.125.295-.125c1.474-.63 2.72-1.443 3.598-2.549.888-1.12 1.357-2.488 1.357-4.141zm-9 6.75v-5.25h3.75v10.43c-1.191-.544-2.097-1.19-2.717-1.971-.658-.83-1.033-1.862-1.033-3.209",
        clipRule: "evenodd"
      }
    )
  }
), Fs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.418 3.25h-5.75v13.5h5.75v-1.5h-4.25V4.75h4.25zm4.53 11.28-1.06-1.06 2.72-2.72h-8.19v-1.5h8.19l-2.72-2.72 1.06-1.06L18.48 10z",
        clipRule: "evenodd"
      }
    )
  }
), Ws = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.539 10.75H4.298v-1.5h12.24z",
        clipRule: "evenodd"
      }
    )
  }
), $s = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M4.633 10.75a6 6 0 0 1 .008-1.5H2.202v1.5zM5.814 6.456A5.9 5.9 0 0 1 6.88 5.401L5.139 3.66l-1.06 1.06zM4.078 15.28l1.711-1.711c.306.398.662.755 1.058 1.063L5.14 16.34zM9.668 15.802v2.414h1.5V15.8a5.9 5.9 0 0 1-1.5.003M13.98 14.623l1.718 1.717 1.06-1.06-1.721-1.723c-.305.4-.66.758-1.056 1.066M16.184 10.75h2.45v-1.5h-2.457a6 6 0 0 1 .007 1.5M15.012 6.467l1.747-1.747-1.061-1.06-1.75 1.75c.399.305.756.66 1.064 1.057M11.168 4.258V1.784h-1.5v2.472a5.9 5.9 0 0 1 1.5.002"
        }
      ),
      /* @__PURE__ */ i.jsx(
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
), Is = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.668 4.75h-5.25v-1.5h6.75V12h2.25l-1.125 1.5-.937 1.25-.938 1.25-.937-1.25-.938-1.25-1.125-1.5h2.25zM5.418 4l.938 1.25.937 1.25L8.418 8h-2.25v7.25h5.25v1.5h-6.75V8h-2.25l1.125-1.5.938-1.25z",
        clipRule: "evenodd"
      }
    )
  }
), Us = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12.28 2.856-6.71 8.887h4.134l-1.424 6.2 6.887-8.71h-4.322z",
        clipRule: "evenodd"
      }
    )
  }
), Ys = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M7.271 3.521c-.376.377-.521.902-.521 1.479H3v1h14V5h-3.75c0-.577-.145-1.102-.521-1.479C12.352 3.145 11.827 3 11.25 3h-2.5c-.577 0-1.102.145-1.479.521m.708.708c-.124.123-.229.348-.229.771h4.5c0-.423-.105-.648-.229-.771-.123-.124-.348-.229-.771-.229h-2.5c-.423 0-.648.105-.771.229M5.5 18l-1-11h11l-1 11zm7.58-10.006a.5.5 0 0 1 .47.53l-.489 8.022a.5.5 0 0 1-.998-.061l.488-8.022a.5.5 0 0 1 .53-.47m-6.629.53a.5.5 0 0 1 .998-.061l.488 8.022a.5.5 0 0 1-.998.06zM10 7.993a.5.5 0 0 1 .5.5v8.021a.5.5 0 0 1-1 0v-8.02a.5.5 0 0 1 .5-.5",
        clipRule: "evenodd"
      }
    )
  }
), Gs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m4.662 2.789-.985 2.515v10.281h3.5v1.86h1.97l1.859-1.86h2.844l3.827-3.828V2.79zM16.365 11.1l-2.188 2.187h-3.5l-1.86 1.86v-1.86H5.866V4.101h10.5zm-2.188-4.484v3.828h-1.312V6.617zm-3.5 0v3.828H9.365V6.617z",
        clipRule: "evenodd"
      }
    )
  }
), Xs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M4 11.445v5.11h12v-5.11h-1.333v3.777H5.333v-3.777zM5.973 7.47l.943.943 2.418-2.417v7.28h1.333v-7.28l2.417 2.417.943-.943L10 3.444z",
        clipRule: "evenodd"
      }
    )
  }
), Ks = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M3.103 10.154C4.59 12.077 7.11 13.366 10 13.366s5.41-1.29 6.897-3.212C15.41 8.232 12.89 6.942 10 6.942s-5.41 1.29-6.897 3.212m-1.548-.416C3.285 7.145 6.436 5.442 10 5.442s6.716 1.703 8.445 4.296l.277.416-.277.416c-1.73 2.594-4.881 4.296-8.445 4.296s-6.716-1.702-8.445-4.296l-.277-.416z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M12.386 10.154a2.386 2.386 0 1 1-4.772 0 2.386 2.386 0 0 1 4.772 0"
        }
      )
    ]
  }
), Js = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5 6.05c0 .443.39.802.87.802H17V16H5.495C4.117 16 3 14.97 3 13.698V6.302C3 5.031 4.117 4 5.495 4H14.5v1.247H5.87c-.48 0-.87.36-.87.802m7 5.45a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0",
        clipRule: "evenodd"
      }
    )
  }
), Zs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 480 332",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "#fff",
        d: "M126.613 93.984c62.622-61.312 164.152-61.312 226.775 0l7.536 7.379a7.735 7.735 0 0 1 0 11.102l-25.781 25.242a4.07 4.07 0 0 1-5.67 0l-10.371-10.154c-43.687-42.773-114.517-42.773-158.204 0l-11.107 10.874a4.07 4.07 0 0 1-5.669 0l-25.781-25.242a7.733 7.733 0 0 1 0-11.102zm280.093 52.204 22.946 22.465a7.735 7.735 0 0 1 0 11.102L326.189 281.056c-3.131 3.065-8.208 3.065-11.339 0l-73.432-71.896a2.034 2.034 0 0 0-2.835 0l-73.43 71.896c-3.131 3.065-8.208 3.065-11.339 0L50.348 179.754a7.735 7.735 0 0 1 0-11.102l22.946-22.466c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897a2.033 2.033 0 0 0 2.834 0l73.429-71.897c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897a2.034 2.034 0 0 0 2.835 0l73.431-71.895c3.132-3.066 8.208-3.066 11.339 0"
      }
    )
  }
), Qs = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M18 16.427 10 2.57 2 16.427zm-7.322-4.333v-5.77H9.216v5.77zm-.731 3.087a1.089 1.089 0 1 0 0-2.178 1.089 1.089 0 0 0 0 2.178",
        clipRule: "evenodd"
      }
    )
  }
), e1 = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 276 28",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ i.jsxs("g", { clipPath: "url(#sequence-boilerplate-logo_svg__a)", children: [
        /* @__PURE__ */ i.jsx(
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
            children: /* @__PURE__ */ i.jsx("path", { fill: "#fff", d: "M35.03 0H0v28h35.03z" })
          }
        ),
        /* @__PURE__ */ i.jsxs("g", { mask: "url(#sequence-boilerplate-logo_svg__b)", children: [
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "#111",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__c)",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__d)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__e)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__f)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__g)",
              d: "M8.758 20.989a1.75 1.75 0 1 0-3.502.001 1.75 1.75 0 0 0 3.502-.001"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__h)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__i)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__j)",
              d: "M28.025 5.25H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__k)",
              d: "M28.025 19.239H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__l)",
              d: "M21.018 12.25H7.006a1.75 1.75 0 1 0 0 3.5h14.012a1.75 1.75 0 1 0 0-3.5"
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            fill: "#fff",
            d: "M49.65 23.282c3.413 0 5.82-1.94 5.82-4.911.023-2.563-1.523-4.048-4.101-4.982l-1.768-.647c-1.792-.647-2.652-1.197-2.652-2.443s1.277-1.964 2.75-1.964c1.375 0 2.431.551 3.315 1.581l1.989-1.892C53.726 6.514 51.885 5.7 49.724 5.7c-3.241 0-5.67 1.82-5.67 4.791 0 2.324 1.35 3.808 4.124 4.791l1.915.67c1.67.6 2.48 1.366 2.48 2.588 0 1.268-1.178 2.108-2.823 2.108-1.695 0-3.144-.815-4.051-2.18l-2.26 1.748c1.03 1.843 3.411 3.066 6.211 3.066m13.638-.049c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.663 1.054-1.768 1.82-3.51 1.82-2.063 0-3.66-1.268-3.782-3.257h9.65c.023-.383.023-.599.023-.862 0-3.856-2.675-5.94-5.917-5.94-3.732 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.634-7.569c.392-1.772 1.94-2.658 3.535-2.658 1.571 0 2.996.934 3.29 2.658zM83.236 28V11.017h-2.701v1.606c-.687-.959-2.16-1.845-3.929-1.845-3.364 0-5.917 2.803-5.917 6.228s2.553 6.227 5.917 6.227c1.768 0 3.242-.885 3.929-1.844V28zm-6.138-7.163c-2.161 0-3.659-1.676-3.659-3.832s1.498-3.833 3.659-3.833 3.658 1.677 3.658 3.833-1.498 3.832-3.658 3.832m13.127 2.396c1.57 0 2.872-.646 3.585-1.868v1.628h2.7V11.017h-2.7v5.893c0 2.587-1.228 3.928-2.996 3.928-1.57 0-2.455-1.174-2.455-3.09v-6.73h-2.7v7.162c0 3.065 1.742 5.054 4.566 5.054m14.733 0c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.664 1.054-1.769 1.82-3.511 1.82-2.062 0-3.658-1.268-3.781-3.257h9.649c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.917-5.94-3.732 0-6.41 2.706-6.41 6.227 0 3.664 2.677 6.227 6.41 6.227m-3.635-7.569c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.995.934 3.29 2.658zm11.591 7.33h2.702V17.1c0-2.587 1.374-3.929 3.167-3.929 1.571 0 2.553 1.126 2.553 3.042v6.778h2.701v-7.21c0-3.041-1.842-5.006-4.69-5.006-1.596 0-2.971.647-3.731 1.869v-1.628h-2.702zm19.439.24c2.554 0 4.666-1.294 5.721-3.306l-2.357-1.245c-.59 1.222-1.792 2.107-3.364 2.107-2.185 0-3.732-1.653-3.732-3.784 0-2.132 1.547-3.785 3.732-3.785 1.571 0 2.774.886 3.364 2.108l2.357-1.245c-1.055-2.012-3.167-3.306-5.721-3.306-3.681 0-6.481 2.683-6.481 6.228s2.8 6.227 6.481 6.227m13.003 0c2.579 0 4.493-1.055 5.598-2.779l-2.062-1.437c-.663 1.054-1.768 1.82-3.511 1.82-2.063 0-3.658-1.268-3.782-3.257h9.651c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.918-5.94-3.733 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.635-7.57c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.996.934 3.29 2.658z"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "#fff",
          fillOpacity: 0.6,
          d: "M159.371 22.5V5.385h5.905q2.242 0 3.664 1.374 1.447 1.374 1.447 3.351 0 2.121-1.591 3.302 2.748 1.134 2.748 4.074 0 2.146-1.567 3.592-1.543 1.422-3.953 1.422zm2.82-2.58h3.76q1.35 0 2.097-.674.748-.675.748-1.784 0-1.085-.748-1.76-.747-.699-2.097-.699h-3.76zm0-7.327h2.941q1.133 0 1.808-.651.675-.65.675-1.663 0-.965-.675-1.64t-1.808-.674h-2.941zm21.281 8.34q-1.808 1.808-4.483 1.808-2.676 0-4.508-1.808-1.808-1.832-1.808-4.46 0-2.626 1.808-4.435 1.832-1.831 4.508-1.832 2.675 0 4.483 1.832 1.833 1.809 1.832 4.436t-1.832 4.46m-4.483-.65q1.566 0 2.579-1.085 1.036-1.11 1.036-2.724 0-1.616-1.036-2.7-1.013-1.11-2.579-1.109-1.592 0-2.628 1.109-1.012 1.085-1.012 2.7 0 1.614 1.012 2.724 1.036 1.084 2.628 1.084m9.585-12.463q-.723 0-1.254-.506a1.74 1.74 0 0 1-.53-1.278q0-.723.53-1.23.531-.53 1.254-.53.747 0 1.253.53.507.507.506 1.23 0 .747-.506 1.278a1.7 1.7 0 0 1-1.253.506m-1.326 14.68V10.448h2.651V22.5zm5.491 0V4.421h2.652V22.5zm10.939.241q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.662 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976M211.49 22.5V10.448h2.652v2.145a3.2 3.2 0 0 1 1.229-1.64q.917-.626 1.953-.626.627 0 1.036.096v2.724a3.8 3.8 0 0 0-1.325-.217q-1.206 0-2.049.989-.844.963-.844 2.7V22.5zm11.086 5.038h-2.652v-17.09h2.652v1.614q.554-.771 1.591-1.301a4.87 4.87 0 0 1 2.29-.555q2.459 0 4.122 1.832 1.687 1.832 1.687 4.436t-1.687 4.435q-1.663 1.832-4.122 1.832-1.23 0-2.29-.53-1.037-.555-1.591-1.326zm3.399-7.207q1.566 0 2.579-1.11 1.012-1.107 1.012-2.747t-1.012-2.748q-1.013-1.11-2.579-1.11-1.592 0-2.604 1.11-1.012 1.108-1.012 2.748t1.012 2.748q1.013 1.108 2.604 1.108m8.268 2.169V4.421h2.652V22.5zm10.433.241q-2.459 0-4.146-1.832-1.663-1.832-1.663-4.435 0-2.604 1.663-4.436 1.688-1.831 4.146-1.832 1.23 0 2.266.555 1.036.53 1.591 1.302v-1.616h2.652V22.5h-2.652v-1.615q-.555.771-1.591 1.326a4.9 4.9 0 0 1-2.266.53m-2.097-3.52q1.013 1.11 2.579 1.11t2.58-1.11q1.012-1.107 1.012-2.747t-1.012-2.748q-1.012-1.11-2.58-1.11-1.566 0-2.579 1.11-1.012 1.108-1.012 2.748t1.012 2.748m16.705 3.4q-1.831 0-2.989-1.013-1.133-1.035-1.133-2.989v-5.81h-2.506v-2.361h2.506V7.097h2.652v3.35h3.447v2.363h-3.447v5.375q0 1.11.482 1.591.483.458 1.543.458.867 0 1.422-.24v2.361q-.867.265-1.977.265m9.051.12q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.663 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976"
        }
      ),
      /* @__PURE__ */ i.jsxs("defs", { children: [
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__c",
            x1: 17.515,
            x2: 17.515,
            y1: 0,
            y2: 28.029,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { stopColor: "#1D273D" }),
              /* @__PURE__ */ i.jsx("stop", { offset: 1, stopColor: "#0D0F13" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__d",
            x1: 5.794,
            x2: 8.172,
            y1: 8.726,
            y2: 5.545,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { stopColor: "#4462FE" }),
              /* @__PURE__ */ i.jsx("stop", { offset: 1, stopColor: "#7D69FA" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__e",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { stopColor: "#3757FD" }),
              /* @__PURE__ */ i.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__f",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ i.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__g",
            x1: 5.75,
            x2: 8.085,
            y1: 22.168,
            y2: 19.691,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { stopColor: "#BC3EE6" }),
              /* @__PURE__ */ i.jsx("stop", { offset: 1, stopColor: "#D972F1" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__h",
            x1: 26.981,
            x2: 29.14,
            y1: 15.16,
            y2: 12.861,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { stopColor: "#29BDFF" }),
              /* @__PURE__ */ i.jsx("stop", { offset: 1, stopColor: "#96E7FB" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__i",
            x1: 26.554,
            x2: 29.596,
            y1: 15.726,
            y2: 15.58,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ i.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__j",
            x1: 13.667,
            x2: 28.081,
            y1: 8.726,
            y2: 5.265,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ i.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__k",
            x1: 13.8,
            x2: 27.638,
            y1: 22.741,
            y2: 19.191,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ i.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__l",
            x1: 7.608,
            x2: 20.826,
            y1: 15.777,
            y2: 12.228,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ i.jsx("stop", { stopColor: "#6634FF" }),
              /* @__PURE__ */ i.jsx("stop", { offset: 1, stopColor: "#9C6DFF" })
            ]
          }
        ),
        /* @__PURE__ */ i.jsx("clipPath", { id: "sequence-boilerplate-logo_svg__a", children: /* @__PURE__ */ i.jsx("path", { fill: "#fff", d: "M0 0h151.273v28H0z" }) })
      ] })
    ]
  }
), t1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Add: zi,
  AirDropper: Bi,
  Apple: Ni,
  ArrowDown: Vi,
  ArrowRight: Hi,
  Bridge: qi,
  Checkmark: Fi,
  ChevronDown: Wi,
  ChevronLeft: $i,
  ChevronRight: Ii,
  ChevronUp: Ui,
  Close: Yi,
  Contacts: Gi,
  ContextMenu: Xi,
  Contract: Ki,
  Copy: Ji,
  Currency: Zi,
  DashedCircle: Qi,
  Deploy: es,
  Device: ts,
  Discord: ns,
  Docs: rs,
  Download: os,
  Drag: is,
  Edit: ss,
  Email: ls,
  Expand: as,
  ExternalLink: cs,
  Facebook: us,
  GasTank: fs,
  Globe: ds,
  Google: vs,
  Grid: hs,
  Help: ps,
  Hidden: gs,
  Home: ms,
  Indexer: xs,
  Key: ws,
  Link: ys,
  List: Cs,
  Marketplaces: bs,
  Menu: Rs,
  Minter: js,
  Moon: Ss,
  Network: Es,
  Node: As,
  Payments: Ms,
  Pin: _s,
  Profile: Ps,
  QrCode: Os,
  Receive: Ts,
  Refresh: Ls,
  Relayer: Ds,
  Scan: ks,
  Search: zs,
  Send: Bs,
  Sequence: Ns,
  SequenceBoilerplateLogo: e1,
  Settings: Vs,
  Share: Hs,
  Shield: qs,
  Signout: Fs,
  Subtract: Ws,
  Sun: $s,
  Swap: Is,
  Transaction: Us,
  Trash: Ys,
  Twitch: Gs,
  Upload: Xs,
  Visible: Ks,
  Wallet: Js,
  WalletConnect: Zs,
  Warning: Qs
}, Symbol.toStringTag, { value: "Module" })), yt = t1;
function qt({
  name: e,
  alt: t = void 0,
  className: n = "",
  ...r
}) {
  const o = yt == null ? void 0 : yt[e];
  return /* @__PURE__ */ i.jsx(
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
      children: /* @__PURE__ */ i.jsx(o, {})
    }
  );
}
function n1({
  name: e,
  description: t
}) {
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4 items-center  text-center", children: [
    /* @__PURE__ */ i.jsx(
      qt,
      {
        name: "SequenceBoilerplateLogo",
        alt: "Sequence Boilerplate",
        className: "mb-2",
        width: "276"
      }
    ),
    /* @__PURE__ */ i.jsx("h1", { className: "text-40 font-bold", children: e }),
    /* @__PURE__ */ i.jsx("p", { className: "text-14 font-bold", children: t })
  ] });
}
function r1() {
  return /* @__PURE__ */ i.jsx("div", { className: "text-14 font-medium", children: /* @__PURE__ */ i.jsxs("p", { children: [
    "Want to learn more? Read the",
    "  ",
    /* @__PURE__ */ i.jsx(
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
  ] }) });
}
function m1({
  githubUrl: e,
  name: t,
  description: n,
  useAuth: r,
  children: o
}) {
  return /* @__PURE__ */ i.jsxs(
    Li.Provider,
    {
      value: { githubUrl: e, name: t, description: n, useAuth: r },
      children: [
        /* @__PURE__ */ i.jsx(Ti, { to: e }),
        /* @__PURE__ */ i.jsx(n1, { name: t, description: n }),
        /* @__PURE__ */ i.jsx("div", { className: "py-8", children: o }),
        /* @__PURE__ */ i.jsx(r1, {})
      ]
    }
  );
}
function x1({ children: e }) {
  return /* @__PURE__ */ i.jsx("div", { id: "root", children: e });
}
function o1(e) {
  if (e)
    return Object.keys(e).reduce((t, n) => (e[n] && t.push(`${n}-${e[n]}`), t), []).join(" ");
}
function ve(e, t, n) {
  return {
    "data-component": e,
    "data-variant": t || "initial",
    "data-subvariants": o1(n)
  };
}
function i1(e, t) {
  const {
    children: n,
    type: r = "button",
    variant: o,
    subvariants: s,
    ...l
  } = e;
  return /* @__PURE__ */ i.jsx(
    "button",
    {
      ref: t,
      type: r,
      ...ve("button", o, s),
      ...l,
      children: n
    }
  );
}
const w1 = rt(i1);
function s1(e) {
  const { children: t, subvariants: n, variant: r, ...o } = e;
  return /* @__PURE__ */ i.jsx(
    "details",
    {
      ...ve("card-collapsable", r, n),
      ...o,
      children: t
    }
  );
}
function l1(e) {
  const { children: t, subvariants: n, variant: r, ...o } = e;
  return /* @__PURE__ */ i.jsxs(
    "summary",
    {
      ...ve("card-summary", r, n),
      ...o,
      children: [
        t,
        " ",
        /* @__PURE__ */ i.jsx(qt, { name: "ChevronDown", width: "20", "data-arrow": !0 })
      ]
    }
  );
}
function a1(e) {
  const { children: t, subvariants: n, variant: r, ...o } = e;
  return /* @__PURE__ */ i.jsx("div", { ...ve("card-body", r, n), ...o, children: t });
}
function c1(e, t) {
  const { children: n, subvariants: r, variant: o, ...s } = e;
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: t,
      ...ve("card", o, r),
      ...s,
      children: n
    }
  );
}
const y1 = Object.assign(rt(c1), {
  Summary: l1,
  Collapsable: s1,
  Body: a1
});
function u1(e) {
  const { children: t, variant: n, subvariants: r } = e;
  return /* @__PURE__ */ i.jsx("h2", { ...ve("group-title", n, r), children: t });
}
function f1(e, t) {
  const {
    asChild: n = !1,
    children: r,
    variant: o,
    subvariants: s,
    ...l
  } = e;
  return /* @__PURE__ */ i.jsx(
    Jn,
    {
      ref: t,
      fallbackAs: "div",
      asChild: n,
      ...ve("group", o, s),
      ...l,
      children: r
    }
  );
}
const C1 = Object.assign(rt(f1), {
  Title: u1
});
function d1({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label;
    return /* @__PURE__ */ i.jsx("option", { value: n, children: r }, n);
  });
}
function v1(e, t) {
  const {
    selected: n,
    children: r,
    variant: o,
    subvariants: s,
    icon: l = "ChevronDown"
  } = e, c = {
    "min-size": "md"
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ...ve(
        "select",
        o,
        Object.assign(c, s)
      ),
      ref: t,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "absolute w-[2.5rem] z-10 right-0 pointer-events-none top-0 bottom-0 items-center justify-center flex cursor-pointer", children: /* @__PURE__ */ i.jsx(qt, { name: l, className: "w-4 h-4 text-white" }) }),
        /* @__PURE__ */ i.jsx("select", { defaultValue: n, children: r })
      ]
    }
  );
}
const b1 = Object.assign(rt(v1), {
  Options: d1
});
export {
  w1 as Button,
  y1 as Card,
  C1 as Group,
  b1 as Select,
  m1 as SequenceBoilerplate,
  x1 as SsrRoot,
  qt as Svg
};
