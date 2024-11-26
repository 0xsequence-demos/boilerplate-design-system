import * as d from "react";
import Oe, { useLayoutEffect as gr, useEffect as vr, createContext as xr } from "react";
import * as ln from "react-dom";
import yr from "react-dom";
var yt = { exports: {} }, Fe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function wr() {
  if (Kt) return Fe;
  Kt = 1;
  var e = Oe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, u) {
    var f, p = {}, g = null, m = null;
    u !== void 0 && (g = "" + u), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (f in l) r.call(l, f) && !i.hasOwnProperty(f) && (p[f] = l[f]);
    if (c && c.defaultProps) for (f in l = c.defaultProps, l) p[f] === void 0 && (p[f] = l[f]);
    return { $$typeof: t, type: c, key: g, ref: m, props: p, _owner: o.current };
  }
  return Fe.Fragment = n, Fe.jsx = a, Fe.jsxs = a, Fe;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function br() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Oe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), x = Symbol.iterator, y = "@@iterator";
    function E(s) {
      if (s === null || typeof s != "object")
        return null;
      var v = x && s[x] || s[y];
      return typeof v == "function" ? v : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(s) {
      {
        for (var v = arguments.length, C = new Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
          C[O - 1] = arguments[O];
        P("error", s, C);
      }
    }
    function P(s, v, C) {
      {
        var O = b.ReactDebugCurrentFrame, L = O.getStackAddendum();
        L !== "" && (v += "%s", C = C.concat([L]));
        var k = C.map(function(D) {
          return String(D);
        });
        k.unshift("Warning: " + v), Function.prototype.apply.call(console[s], console, k);
      }
    }
    var R = !1, _ = !1, S = !1, A = !1, F = !1, B;
    B = Symbol.for("react.module.reference");
    function $(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === i || F || s === o || s === u || s === f || A || s === m || R || _ || S || typeof s == "object" && s !== null && (s.$$typeof === g || s.$$typeof === p || s.$$typeof === a || s.$$typeof === c || s.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === B || s.getModuleId !== void 0));
    }
    function Y(s, v, C) {
      var O = s.displayName;
      if (O)
        return O;
      var L = v.displayName || v.name || "";
      return L !== "" ? C + "(" + L + ")" : C;
    }
    function U(s) {
      return s.displayName || "Context";
    }
    function M(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var v = s;
            return U(v) + ".Consumer";
          case a:
            var C = s;
            return U(C._context) + ".Provider";
          case l:
            return Y(s, s.render, "ForwardRef");
          case p:
            var O = s.displayName || null;
            return O !== null ? O : M(s.type) || "Memo";
          case g: {
            var L = s, k = L._payload, D = L._init;
            try {
              return M(D(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, z = 0, I, W, j, H, K, pe, Ve;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function ct() {
      {
        if (z === 0) {
          I = console.log, W = console.info, j = console.warn, H = console.error, K = console.group, pe = console.groupCollapsed, Ve = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: He,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        z++;
      }
    }
    function lt() {
      {
        if (z--, z === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, s, {
              value: I
            }),
            info: N({}, s, {
              value: W
            }),
            warn: N({}, s, {
              value: j
            }),
            error: N({}, s, {
              value: H
            }),
            group: N({}, s, {
              value: K
            }),
            groupCollapsed: N({}, s, {
              value: pe
            }),
            groupEnd: N({}, s, {
              value: Ve
            })
          });
        }
        z < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Le = b.ReactCurrentDispatcher, Ce;
    function he(s, v, C) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (L) {
            var O = L.stack.trim().match(/\n( *(at )?)/);
            Ce = O && O[1] || "";
          }
        return `
` + Ce + s;
      }
    }
    var Ee = !1, me;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      me = new Ue();
    }
    function Ne(s, v) {
      if (!s || Ee)
        return "";
      {
        var C = me.get(s);
        if (C !== void 0)
          return C;
      }
      var O;
      Ee = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = Le.current, Le.current = null, ct();
      try {
        if (v) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (X) {
              O = X;
            }
            Reflect.construct(s, [], D);
          } else {
            try {
              D.call();
            } catch (X) {
              O = X;
            }
            s.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            O = X;
          }
          s();
        }
      } catch (X) {
        if (X && O && typeof X.stack == "string") {
          for (var T = X.stack.split(`
`), G = O.stack.split(`
`), q = T.length - 1, V = G.length - 1; q >= 1 && V >= 0 && T[q] !== G[V]; )
            V--;
          for (; q >= 1 && V >= 0; q--, V--)
            if (T[q] !== G[V]) {
              if (q !== 1 || V !== 1)
                do
                  if (q--, V--, V < 0 || T[q] !== G[V]) {
                    var Q = `
` + T[q].replace(" at new ", " at ");
                    return s.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", s.displayName)), typeof s == "function" && me.set(s, Q), Q;
                  }
                while (q >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        Ee = !1, Le.current = k, lt(), Error.prepareStackTrace = L;
      }
      var Pe = s ? s.displayName || s.name : "", xe = Pe ? he(Pe) : "";
      return typeof s == "function" && me.set(s, xe), xe;
    }
    function ge(s, v, C) {
      return Ne(s, !1);
    }
    function ze(s) {
      var v = s.prototype;
      return !!(v && v.isReactComponent);
    }
    function Re(s, v, C) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return Ne(s, ze(s));
      if (typeof s == "string")
        return he(s);
      switch (s) {
        case u:
          return he("Suspense");
        case f:
          return he("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            return ge(s.render);
          case p:
            return Re(s.type, v, C);
          case g: {
            var O = s, L = O._payload, k = O._init;
            try {
              return Re(k(L), v, C);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, Ye = {}, Ge = b.ReactDebugCurrentFrame;
    function ie(s) {
      if (s) {
        var v = s._owner, C = Re(s.type, s._source, v ? v.type : null);
        Ge.setExtraStackFrame(C);
      } else
        Ge.setExtraStackFrame(null);
    }
    function Gn(s, v, C, O, L) {
      {
        var k = Function.call.bind(ve);
        for (var D in s)
          if (k(s, D)) {
            var T = void 0;
            try {
              if (typeof s[D] != "function") {
                var G = Error((O || "React class") + ": " + C + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              T = s[D](v, D, O, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              T = q;
            }
            T && !(T instanceof Error) && (ie(L), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", C, D, typeof T), ie(null)), T instanceof Error && !(T.message in Ye) && (Ye[T.message] = !0, ie(L), w("Failed %s type: %s", C, T.message), ie(null));
          }
      }
    }
    var Xn = Array.isArray;
    function ut(s) {
      return Xn(s);
    }
    function Kn(s) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, C = v && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return C;
      }
    }
    function Jn(s) {
      try {
        return It(s), !1;
      } catch {
        return !0;
      }
    }
    function It(s) {
      return "" + s;
    }
    function Wt(s) {
      if (Jn(s))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kn(s)), It(s);
    }
    var ke = b.ReactCurrentOwner, Zn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qt, Bt, ft;
    ft = {};
    function Qn(s) {
      if (ve.call(s, "ref")) {
        var v = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function er(s) {
      if (ve.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function tr(s, v) {
      if (typeof s.ref == "string" && ke.current && v && ke.current.stateNode !== v) {
        var C = M(ke.current.type);
        ft[C] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(ke.current.type), s.ref), ft[C] = !0);
      }
    }
    function nr(s, v) {
      {
        var C = function() {
          qt || (qt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        C.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function rr(s, v) {
      {
        var C = function() {
          Bt || (Bt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        C.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var or = function(s, v, C, O, L, k, D) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: v,
        ref: C,
        props: D,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function ir(s, v, C, O, L) {
      {
        var k, D = {}, T = null, G = null;
        C !== void 0 && (Wt(C), T = "" + C), er(v) && (Wt(v.key), T = "" + v.key), Qn(v) && (G = v.ref, tr(v, L));
        for (k in v)
          ve.call(v, k) && !Zn.hasOwnProperty(k) && (D[k] = v[k]);
        if (s && s.defaultProps) {
          var q = s.defaultProps;
          for (k in q)
            D[k] === void 0 && (D[k] = q[k]);
        }
        if (T || G) {
          var V = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          T && nr(D, V), G && rr(D, V);
        }
        return or(s, T, G, L, O, ke.current, D);
      }
    }
    var dt = b.ReactCurrentOwner, Vt = b.ReactDebugCurrentFrame;
    function _e(s) {
      if (s) {
        var v = s._owner, C = Re(s.type, s._source, v ? v.type : null);
        Vt.setExtraStackFrame(C);
      } else
        Vt.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function ht(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function Ht() {
      {
        if (dt.current) {
          var s = M(dt.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function sr(s) {
      return "";
    }
    var Ut = {};
    function ar(s) {
      {
        var v = Ht();
        if (!v) {
          var C = typeof s == "string" ? s : s.displayName || s.name;
          C && (v = `

Check the top-level render call using <` + C + ">.");
        }
        return v;
      }
    }
    function zt(s, v) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var C = ar(v);
        if (Ut[C])
          return;
        Ut[C] = !0;
        var O = "";
        s && s._owner && s._owner !== dt.current && (O = " It was passed a child from " + M(s._owner.type) + "."), _e(s), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, O), _e(null);
      }
    }
    function Yt(s, v) {
      {
        if (typeof s != "object")
          return;
        if (ut(s))
          for (var C = 0; C < s.length; C++) {
            var O = s[C];
            ht(O) && zt(O, v);
          }
        else if (ht(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var L = E(s);
          if (typeof L == "function" && L !== s.entries)
            for (var k = L.call(s), D; !(D = k.next()).done; )
              ht(D.value) && zt(D.value, v);
        }
      }
    }
    function cr(s) {
      {
        var v = s.type;
        if (v == null || typeof v == "string")
          return;
        var C;
        if (typeof v == "function")
          C = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === p))
          C = v.propTypes;
        else
          return;
        if (C) {
          var O = M(v);
          Gn(C, s.props, "prop", O, s);
        } else if (v.PropTypes !== void 0 && !pt) {
          pt = !0;
          var L = M(v);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(s) {
      {
        for (var v = Object.keys(s.props), C = 0; C < v.length; C++) {
          var O = v[C];
          if (O !== "children" && O !== "key") {
            _e(s), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), _e(null);
            break;
          }
        }
        s.ref !== null && (_e(s), w("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var Gt = {};
    function Xt(s, v, C, O, L, k) {
      {
        var D = $(s);
        if (!D) {
          var T = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = sr();
          G ? T += G : T += Ht();
          var q;
          s === null ? q = "null" : ut(s) ? q = "array" : s !== void 0 && s.$$typeof === t ? (q = "<" + (M(s.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : q = typeof s, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, T);
        }
        var V = ir(s, v, C, L, k);
        if (V == null)
          return V;
        if (D) {
          var Q = v.children;
          if (Q !== void 0)
            if (O)
              if (ut(Q)) {
                for (var Pe = 0; Pe < Q.length; Pe++)
                  Yt(Q[Pe], s);
                Object.freeze && Object.freeze(Q);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(Q, s);
        }
        if (ve.call(v, "key")) {
          var xe = M(s), X = Object.keys(v).filter(function(mr) {
            return mr !== "key";
          }), mt = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Gt[xe + mt]) {
            var hr = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mt, xe, hr, xe), Gt[xe + mt] = !0;
          }
        }
        return s === r ? lr(V) : cr(V), V;
      }
    }
    function ur(s, v, C) {
      return Xt(s, v, C, !0);
    }
    function fr(s, v, C) {
      return Xt(s, v, C, !1);
    }
    var dr = fr, pr = ur;
    $e.Fragment = r, $e.jsx = dr, $e.jsxs = pr;
  }()), $e;
}
process.env.NODE_ENV === "production" ? yt.exports = wr() : yt.exports = br();
var h = yt.exports;
function se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Cr(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function un(...e) {
  return (t) => e.forEach((n) => Cr(n, t));
}
function be(...e) {
  return d.useCallback(un(...e), e);
}
function Er(e, t = []) {
  let n = [];
  function r(i, a) {
    const c = d.createContext(a), l = n.length;
    n = [...n, a];
    const u = (p) => {
      var b;
      const { scope: g, children: m, ...x } = p, y = ((b = g == null ? void 0 : g[e]) == null ? void 0 : b[l]) || c, E = d.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ h.jsx(y.Provider, { value: E, children: m });
    };
    u.displayName = i + "Provider";
    function f(p, g) {
      var y;
      const m = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[l]) || c, x = d.useContext(m);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [u, f];
  }
  const o = () => {
    const i = n.map((a) => d.createContext(a));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || i;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return o.scopeName = e, [r, Rr(o, ...t)];
}
function Rr(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((c, { useScope: l, scopeName: u }) => {
        const p = l(i)[`__scope${u}`];
        return { ...c, ...p };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var fn = d.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = d.Children.toArray(n), i = o.find(_r);
  if (i) {
    const a = i.props.children, c = o.map((l) => l === i ? d.Children.count(a) > 1 ? d.Children.only(null) : d.isValidElement(a) ? a.props.children : null : l);
    return /* @__PURE__ */ h.jsx(wt, { ...r, ref: t, children: d.isValidElement(a) ? d.cloneElement(a, void 0, c) : null });
  }
  return /* @__PURE__ */ h.jsx(wt, { ...r, ref: t, children: n });
});
fn.displayName = "Slot";
var wt = d.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (d.isValidElement(n)) {
    const o = Or(n);
    return d.cloneElement(n, {
      ...Pr(r, n.props),
      // @ts-ignore
      ref: t ? un(t, o) : o
    });
  }
  return d.Children.count(n) > 1 ? d.Children.only(null) : null;
});
wt.displayName = "SlotClone";
var dn = ({ children: e }) => /* @__PURE__ */ h.jsx(h.Fragment, { children: e });
function _r(e) {
  return d.isValidElement(e) && e.type === dn;
}
function Pr(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...c) => {
      i(...c), o(...c);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Or(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ar = [
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
], de = Ar.reduce((e, t) => {
  const n = d.forwardRef((r, o) => {
    const { asChild: i, ...a } = r, c = i ? fn : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h.jsx(c, { ...a, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Sr(e, t) {
  e && ln.flushSync(() => e.dispatchEvent(t));
}
function je(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Tr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = je(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var jr = "DismissableLayer", bt = "dismissableLayer.update", Dr = "dismissableLayer.pointerDownOutside", Mr = "dismissableLayer.focusOutside", Zt, pn = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), hn = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: c,
      ...l
    } = e, u = d.useContext(pn), [f, p] = d.useState(null), g = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = d.useState({}), x = be(t, (A) => p(A)), y = Array.from(u.layers), [E] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = y.indexOf(E), w = f ? y.indexOf(f) : -1, P = u.layersWithOutsidePointerEventsDisabled.size > 0, R = w >= b, _ = kr((A) => {
      const F = A.target, B = [...u.branches].some(($) => $.contains(F));
      !R || B || (o == null || o(A), a == null || a(A), A.defaultPrevented || c == null || c());
    }, g), S = Fr((A) => {
      const F = A.target;
      [...u.branches].some(($) => $.contains(F)) || (i == null || i(A), a == null || a(A), A.defaultPrevented || c == null || c());
    }, g);
    return Tr((A) => {
      w === u.layers.size - 1 && (r == null || r(A), !A.defaultPrevented && c && (A.preventDefault(), c()));
    }, g), d.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Zt = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Qt(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Zt);
        };
    }, [f, g, n, u]), d.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Qt());
    }, [f, u]), d.useEffect(() => {
      const A = () => m({});
      return document.addEventListener(bt, A), () => document.removeEventListener(bt, A);
    }, []), /* @__PURE__ */ h.jsx(
      de.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: P ? R ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: se(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: se(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: se(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
hn.displayName = jr;
var Lr = "DismissableLayerBranch", Nr = d.forwardRef((e, t) => {
  const n = d.useContext(pn), r = d.useRef(null), o = be(t, r);
  return d.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ h.jsx(de.div, { ...e, ref: o });
});
Nr.displayName = Lr;
function kr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = je(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const i = (c) => {
      if (c.target && !r.current) {
        let l = function() {
          mn(
            Dr,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Fr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = je(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && mn(Mr, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Qt() {
  const e = new CustomEvent(bt);
  document.dispatchEvent(e);
}
function mn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Sr(o, i) : o.dispatchEvent(i);
}
var ye = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {
}, $r = d.useId || (() => {
}), Ir = 0;
function Wr(e) {
  const [t, n] = d.useState($r());
  return ye(() => {
    n((r) => r ?? String(Ir++));
  }, [e]), t ? `radix-${t}` : "";
}
const qr = ["top", "right", "bottom", "left"], le = Math.min, J = Math.max, Ze = Math.round, Xe = Math.floor, ne = (e) => ({
  x: e,
  y: e
}), Br = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Vr = {
  start: "end",
  end: "start"
};
function Ct(e, t, n) {
  return J(e, le(t, n));
}
function ae(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ce(e) {
  return e.split("-")[0];
}
function De(e) {
  return e.split("-")[1];
}
function Ot(e) {
  return e === "x" ? "y" : "x";
}
function At(e) {
  return e === "y" ? "height" : "width";
}
function ue(e) {
  return ["top", "bottom"].includes(ce(e)) ? "y" : "x";
}
function St(e) {
  return Ot(ue(e));
}
function Hr(e, t, n) {
  n === void 0 && (n = !1);
  const r = De(e), o = St(e), i = At(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Qe(a)), [a, Qe(a)];
}
function Ur(e) {
  const t = Qe(e);
  return [Et(e), t, Et(t)];
}
function Et(e) {
  return e.replace(/start|end/g, (t) => Vr[t]);
}
function zr(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function Yr(e, t, n, r) {
  const o = De(e);
  let i = zr(ce(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Et)))), i;
}
function Qe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Br[t]);
}
function Gr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function gn(e) {
  return typeof e != "number" ? Gr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function et(e) {
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
function en(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ue(t), a = St(t), c = At(a), l = ce(t), u = i === "y", f = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, g = r[c] / 2 - o[c] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (De(t)) {
    case "start":
      m[a] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      m[a] += g * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Xr = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, c = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: p
  } = en(u, r, l), g = r, m = {}, x = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: E,
      fn: b
    } = c[y], {
      x: w,
      y: P,
      data: R,
      reset: _
    } = await b({
      x: f,
      y: p,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = w ?? f, p = P ?? p, m = {
      ...m,
      [E]: {
        ...m[E],
        ...R
      }
    }, _ && x <= 50 && (x++, typeof _ == "object" && (_.placement && (g = _.placement), _.rects && (u = _.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: f,
      y: p
    } = en(u, g, l)), y = -1);
  }
  return {
    x: f,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: m
  };
};
async function Ie(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: c,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = ae(t, e), x = gn(m), E = c[g ? p === "floating" ? "reference" : "floating" : p], b = et(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(E))) == null || n ? E : E.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), w = p === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), R = await (i.isElement == null ? void 0 : i.isElement(P)) ? await (i.getScale == null ? void 0 : i.getScale(P)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = et(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: w,
    offsetParent: P,
    strategy: l
  }) : w);
  return {
    top: (b.top - _.top + x.top) / R.y,
    bottom: (_.bottom - b.bottom + x.bottom) / R.y,
    left: (b.left - _.left + x.left) / R.x,
    right: (_.right - b.right + x.right) / R.x
  };
}
const Kr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: c,
      middlewareData: l
    } = t, {
      element: u,
      padding: f = 0
    } = ae(e, t) || {};
    if (u == null)
      return {};
    const p = gn(f), g = {
      x: n,
      y: r
    }, m = St(o), x = At(m), y = await a.getDimensions(u), E = m === "y", b = E ? "top" : "left", w = E ? "bottom" : "right", P = E ? "clientHeight" : "clientWidth", R = i.reference[x] + i.reference[m] - g[m] - i.floating[x], _ = g[m] - i.reference[m], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let A = S ? S[P] : 0;
    (!A || !await (a.isElement == null ? void 0 : a.isElement(S))) && (A = c.floating[P] || i.floating[x]);
    const F = R / 2 - _ / 2, B = A / 2 - y[x] / 2 - 1, $ = le(p[b], B), Y = le(p[w], B), U = $, M = A - y[x] - Y, N = A / 2 - y[x] / 2 + F, z = Ct(U, N, M), I = !l.arrow && De(o) != null && N !== z && i.reference[x] / 2 - (N < U ? $ : Y) - y[x] / 2 < 0, W = I ? N < U ? N - U : N - M : 0;
    return {
      [m]: g[m] + W,
      data: {
        [m]: z,
        centerOffset: N - z - W,
        ...I && {
          alignmentOffset: W
        }
      },
      reset: I
    };
  }
}), Jr = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: c,
        platform: l,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: y = !0,
        ...E
      } = ae(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = ce(o), w = ue(c), P = ce(c) === c, R = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = g || (P || !y ? [Qe(c)] : Ur(c)), S = x !== "none";
      !g && S && _.push(...Yr(c, y, x, R));
      const A = [c, ..._], F = await Ie(t, E), B = [];
      let $ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && B.push(F[b]), p) {
        const N = Hr(o, a, R);
        B.push(F[N[0]], F[N[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: B
      }], !B.every((N) => N <= 0)) {
        var Y, U;
        const N = (((Y = i.flip) == null ? void 0 : Y.index) || 0) + 1, z = A[N];
        if (z)
          return {
            data: {
              index: N,
              overflows: $
            },
            reset: {
              placement: z
            }
          };
        let I = (U = $.filter((W) => W.overflows[0] <= 0).sort((W, j) => W.overflows[1] - j.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!I)
          switch (m) {
            case "bestFit": {
              var M;
              const W = (M = $.filter((j) => {
                if (S) {
                  const H = ue(j.placement);
                  return H === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((H) => H > 0).reduce((H, K) => H + K, 0)]).sort((j, H) => j[1] - H[1])[0]) == null ? void 0 : M[0];
              W && (I = W);
              break;
            }
            case "initialPlacement":
              I = c;
              break;
          }
        if (o !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function tn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function nn(e) {
  return qr.some((t) => e[t] >= 0);
}
const Zr = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = ae(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Ie(t, {
            ...o,
            elementContext: "reference"
          }), a = tn(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: nn(a)
            }
          };
        }
        case "escaped": {
          const i = await Ie(t, {
            ...o,
            altBoundary: !0
          }), a = tn(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: nn(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Qr(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = ce(n), c = De(n), l = ue(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, f = i && l ? -1 : 1, p = ae(t, e);
  let {
    mainAxis: g,
    crossAxis: m,
    alignmentAxis: x
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return c && typeof x == "number" && (m = c === "end" ? x * -1 : x), l ? {
    x: m * f,
    y: g * u
  } : {
    x: g * u,
    y: m * f
  };
}
const eo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: c
      } = t, l = await Qr(t, e);
      return a === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, to = function(e) {
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
        crossAxis: a = !1,
        limiter: c = {
          fn: (E) => {
            let {
              x: b,
              y: w
            } = E;
            return {
              x: b,
              y: w
            };
          }
        },
        ...l
      } = ae(e, t), u = {
        x: n,
        y: r
      }, f = await Ie(t, l), p = ue(ce(o)), g = Ot(p);
      let m = u[g], x = u[p];
      if (i) {
        const E = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", w = m + f[E], P = m - f[b];
        m = Ct(w, m, P);
      }
      if (a) {
        const E = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", w = x + f[E], P = x - f[b];
        x = Ct(w, x, P);
      }
      const y = c.fn({
        ...t,
        [g]: m,
        [p]: x
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [g]: i,
            [p]: a
          }
        }
      };
    }
  };
}, no = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: a
      } = t, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = ae(e, t), f = {
        x: n,
        y: r
      }, p = ue(o), g = Ot(p);
      let m = f[g], x = f[p];
      const y = ae(c, t), E = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const P = g === "y" ? "height" : "width", R = i.reference[g] - i.floating[P] + E.mainAxis, _ = i.reference[g] + i.reference[P] - E.mainAxis;
        m < R ? m = R : m > _ && (m = _);
      }
      if (u) {
        var b, w;
        const P = g === "y" ? "width" : "height", R = ["top", "left"].includes(ce(o)), _ = i.reference[p] - i.floating[P] + (R && ((b = a.offset) == null ? void 0 : b[p]) || 0) + (R ? 0 : E.crossAxis), S = i.reference[p] + i.reference[P] + (R ? 0 : ((w = a.offset) == null ? void 0 : w[p]) || 0) - (R ? E.crossAxis : 0);
        x < _ ? x = _ : x > S && (x = S);
      }
      return {
        [g]: m,
        [p]: x
      };
    }
  };
}, ro = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: a,
        elements: c
      } = t, {
        apply: l = () => {
        },
        ...u
      } = ae(e, t), f = await Ie(t, u), p = ce(o), g = De(o), m = ue(o) === "y", {
        width: x,
        height: y
      } = i.floating;
      let E, b;
      p === "top" || p === "bottom" ? (E = p, b = g === (await (a.isRTL == null ? void 0 : a.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (b = p, E = g === "end" ? "top" : "bottom");
      const w = y - f.top - f.bottom, P = x - f.left - f.right, R = le(y - f[E], w), _ = le(x - f[b], P), S = !t.middlewareData.shift;
      let A = R, F = _;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (F = P), (r = t.middlewareData.shift) != null && r.enabled.y && (A = w), S && !g) {
        const $ = J(f.left, 0), Y = J(f.right, 0), U = J(f.top, 0), M = J(f.bottom, 0);
        m ? F = x - 2 * ($ !== 0 || Y !== 0 ? $ + Y : J(f.left, f.right)) : A = y - 2 * (U !== 0 || M !== 0 ? U + M : J(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: F,
        availableHeight: A
      });
      const B = await a.getDimensions(c.floating);
      return x !== B.width || y !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function nt() {
  return typeof window < "u";
}
function Me(e) {
  return vn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function oe(e) {
  var t;
  return (t = (vn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vn(e) {
  return nt() ? e instanceof Node || e instanceof Z(e).Node : !1;
}
function ee(e) {
  return nt() ? e instanceof Element || e instanceof Z(e).Element : !1;
}
function re(e) {
  return nt() ? e instanceof HTMLElement || e instanceof Z(e).HTMLElement : !1;
}
function rn(e) {
  return !nt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Z(e).ShadowRoot;
}
function qe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = te(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function oo(e) {
  return ["table", "td", "th"].includes(Me(e));
}
function rt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Tt(e) {
  const t = jt(), n = ee(e) ? te(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function io(e) {
  let t = fe(e);
  for (; re(t) && !Se(t); ) {
    if (Tt(t))
      return t;
    if (rt(t))
      return null;
    t = fe(t);
  }
  return null;
}
function jt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Se(e) {
  return ["html", "body", "#document"].includes(Me(e));
}
function te(e) {
  return Z(e).getComputedStyle(e);
}
function ot(e) {
  return ee(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function fe(e) {
  if (Me(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    rn(e) && e.host || // Fallback.
    oe(e)
  );
  return rn(t) ? t.host : t;
}
function xn(e) {
  const t = fe(e);
  return Se(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : re(t) && qe(t) ? t : xn(t);
}
function We(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = xn(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Z(o);
  if (i) {
    const c = Rt(a);
    return t.concat(a, a.visualViewport || [], qe(o) ? o : [], c && n ? We(c) : []);
  }
  return t.concat(o, We(o, [], n));
}
function Rt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function yn(e) {
  const t = te(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = re(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, c = Ze(n) !== i || Ze(r) !== a;
  return c && (n = i, r = a), {
    width: n,
    height: r,
    $: c
  };
}
function Dt(e) {
  return ee(e) ? e : e.contextElement;
}
function Ae(e) {
  const t = Dt(e);
  if (!re(t))
    return ne(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = yn(t);
  let a = (i ? Ze(n.width) : n.width) / r, c = (i ? Ze(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: a,
    y: c
  };
}
const so = /* @__PURE__ */ ne(0);
function wn(e) {
  const t = Z(e);
  return !jt() || !t.visualViewport ? so : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ao(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Z(e) ? !1 : t;
}
function we(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Dt(e);
  let a = ne(1);
  t && (r ? ee(r) && (a = Ae(r)) : a = Ae(e));
  const c = ao(i, n, r) ? wn(i) : ne(0);
  let l = (o.left + c.x) / a.x, u = (o.top + c.y) / a.y, f = o.width / a.x, p = o.height / a.y;
  if (i) {
    const g = Z(i), m = r && ee(r) ? Z(r) : r;
    let x = g, y = Rt(x);
    for (; y && r && m !== x; ) {
      const E = Ae(y), b = y.getBoundingClientRect(), w = te(y), P = b.left + (y.clientLeft + parseFloat(w.paddingLeft)) * E.x, R = b.top + (y.clientTop + parseFloat(w.paddingTop)) * E.y;
      l *= E.x, u *= E.y, f *= E.x, p *= E.y, l += P, u += R, x = Z(y), y = Rt(x);
    }
  }
  return et({
    width: f,
    height: p,
    x: l,
    y: u
  });
}
function Mt(e, t) {
  const n = ot(e).scrollLeft;
  return t ? t.left + n : we(oe(e)).left + n;
}
function bn(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Mt(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function co(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = oe(r), c = t ? rt(t.floating) : !1;
  if (r === a || c && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ne(1);
  const f = ne(0), p = re(r);
  if ((p || !p && !i) && ((Me(r) !== "body" || qe(a)) && (l = ot(r)), re(r))) {
    const m = we(r);
    u = Ae(r), f.x = m.x + r.clientLeft, f.y = m.y + r.clientTop;
  }
  const g = a && !p && !i ? bn(a, l, !0) : ne(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + f.x + g.x,
    y: n.y * u.y - l.scrollTop * u.y + f.y + g.y
  };
}
function lo(e) {
  return Array.from(e.getClientRects());
}
function uo(e) {
  const t = oe(e), n = ot(e), r = e.ownerDocument.body, o = J(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = J(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Mt(e);
  const c = -n.scrollTop;
  return te(r).direction === "rtl" && (a += J(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: c
  };
}
function fo(e, t) {
  const n = Z(e), r = oe(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, c = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = jt();
    (!u || u && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: c,
    y: l
  };
}
function po(e, t) {
  const n = we(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = re(e) ? Ae(e) : ne(1), a = e.clientWidth * i.x, c = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: c,
    x: l,
    y: u
  };
}
function on(e, t, n) {
  let r;
  if (t === "viewport")
    r = fo(e, n);
  else if (t === "document")
    r = uo(oe(e));
  else if (ee(t))
    r = po(t, n);
  else {
    const o = wn(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return et(r);
}
function Cn(e, t) {
  const n = fe(e);
  return n === t || !ee(n) || Se(n) ? !1 : te(n).position === "fixed" || Cn(n, t);
}
function ho(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = We(e, [], !1).filter((c) => ee(c) && Me(c) !== "body"), o = null;
  const i = te(e).position === "fixed";
  let a = i ? fe(e) : e;
  for (; ee(a) && !Se(a); ) {
    const c = te(a), l = Tt(a);
    !l && c.position === "fixed" && (o = null), (i ? !l && !o : !l && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || qe(a) && !l && Cn(e, a)) ? r = r.filter((f) => f !== a) : o = c, a = fe(a);
  }
  return t.set(e, r), r;
}
function mo(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? rt(t) ? [] : ho(t, this._c) : [].concat(n), r], c = a[0], l = a.reduce((u, f) => {
    const p = on(t, f, o);
    return u.top = J(p.top, u.top), u.right = le(p.right, u.right), u.bottom = le(p.bottom, u.bottom), u.left = J(p.left, u.left), u;
  }, on(t, c, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function go(e) {
  const {
    width: t,
    height: n
  } = yn(e);
  return {
    width: t,
    height: n
  };
}
function vo(e, t, n) {
  const r = re(t), o = oe(t), i = n === "fixed", a = we(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ne(0);
  if (r || !r && !i)
    if ((Me(t) !== "body" || qe(o)) && (c = ot(t)), r) {
      const g = we(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && (l.x = Mt(o));
  const u = o && !r && !i ? bn(o, c) : ne(0), f = a.left + c.scrollLeft - l.x - u.x, p = a.top + c.scrollTop - l.y - u.y;
  return {
    x: f,
    y: p,
    width: a.width,
    height: a.height
  };
}
function gt(e) {
  return te(e).position === "static";
}
function sn(e, t) {
  if (!re(e) || te(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return oe(e) === n && (n = n.ownerDocument.body), n;
}
function En(e, t) {
  const n = Z(e);
  if (rt(e))
    return n;
  if (!re(e)) {
    let o = fe(e);
    for (; o && !Se(o); ) {
      if (ee(o) && !gt(o))
        return o;
      o = fe(o);
    }
    return n;
  }
  let r = sn(e, t);
  for (; r && oo(r) && gt(r); )
    r = sn(r, t);
  return r && Se(r) && gt(r) && !Tt(r) ? n : r || io(e) || n;
}
const xo = async function(e) {
  const t = this.getOffsetParent || En, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: vo(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function yo(e) {
  return te(e).direction === "rtl";
}
const wo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: co,
  getDocumentElement: oe,
  getClippingRect: mo,
  getOffsetParent: En,
  getElementRects: xo,
  getClientRects: lo,
  getDimensions: go,
  getScale: Ae,
  isElement: ee,
  isRTL: yo
};
function bo(e, t) {
  let n = null, r;
  const o = oe(e);
  function i() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function a(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: f,
      width: p,
      height: g
    } = e.getBoundingClientRect();
    if (c || t(), !p || !g)
      return;
    const m = Xe(f), x = Xe(o.clientWidth - (u + p)), y = Xe(o.clientHeight - (f + g)), E = Xe(u), w = {
      rootMargin: -m + "px " + -x + "px " + -y + "px " + -E + "px",
      threshold: J(0, le(1, l)) || 1
    };
    let P = !0;
    function R(_) {
      const S = _[0].intersectionRatio;
      if (S !== l) {
        if (!P)
          return a();
        S ? a(!1, S) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      P = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, w);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function Co(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Dt(e), f = o || i ? [...u ? We(u) : [], ...We(t)] : [];
  f.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const p = u && c ? bo(u, n) : null;
  let g = -1, m = null;
  a && (m = new ResizeObserver((b) => {
    let [w] = b;
    w && w.target === u && m && (m.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var P;
      (P = m) == null || P.observe(t);
    })), n();
  }), u && !l && m.observe(u), m.observe(t));
  let x, y = l ? we(e) : null;
  l && E();
  function E() {
    const b = we(e);
    y && (b.x !== y.x || b.y !== y.y || b.width !== y.width || b.height !== y.height) && n(), y = b, x = requestAnimationFrame(E);
  }
  return n(), () => {
    var b;
    f.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), p == null || p(), (b = m) == null || b.disconnect(), m = null, l && cancelAnimationFrame(x);
  };
}
const Eo = eo, Ro = to, _o = Jr, Po = ro, Oo = Zr, an = Kr, Ao = no, So = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: wo,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Xr(e, t, {
    ...o,
    platform: i
  });
};
var Je = typeof document < "u" ? gr : vr;
function tt(e, t) {
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
        if (!tt(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !tt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Rn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cn(e, t) {
  const n = Rn(e);
  return Math.round(t * n) / n;
}
function vt(e) {
  const t = d.useRef(e);
  return Je(() => {
    t.current = e;
  }), t;
}
function To(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: u
  } = e, [f, p] = d.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, m] = d.useState(r);
  tt(g, r) || m(r);
  const [x, y] = d.useState(null), [E, b] = d.useState(null), w = d.useCallback((j) => {
    j !== S.current && (S.current = j, y(j));
  }, []), P = d.useCallback((j) => {
    j !== A.current && (A.current = j, b(j));
  }, []), R = i || x, _ = a || E, S = d.useRef(null), A = d.useRef(null), F = d.useRef(f), B = l != null, $ = vt(l), Y = vt(o), U = vt(u), M = d.useCallback(() => {
    if (!S.current || !A.current)
      return;
    const j = {
      placement: t,
      strategy: n,
      middleware: g
    };
    Y.current && (j.platform = Y.current), So(S.current, A.current, j).then((H) => {
      const K = {
        ...H,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: U.current !== !1
      };
      N.current && !tt(F.current, K) && (F.current = K, ln.flushSync(() => {
        p(K);
      }));
    });
  }, [g, t, n, Y, U]);
  Je(() => {
    u === !1 && F.current.isPositioned && (F.current.isPositioned = !1, p((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [u]);
  const N = d.useRef(!1);
  Je(() => (N.current = !0, () => {
    N.current = !1;
  }), []), Je(() => {
    if (R && (S.current = R), _ && (A.current = _), R && _) {
      if ($.current)
        return $.current(R, _, M);
      M();
    }
  }, [R, _, M, $, B]);
  const z = d.useMemo(() => ({
    reference: S,
    floating: A,
    setReference: w,
    setFloating: P
  }), [w, P]), I = d.useMemo(() => ({
    reference: R,
    floating: _
  }), [R, _]), W = d.useMemo(() => {
    const j = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return j;
    const H = cn(I.floating, f.x), K = cn(I.floating, f.y);
    return c ? {
      ...j,
      transform: "translate(" + H + "px, " + K + "px)",
      ...Rn(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: H,
      top: K
    };
  }, [n, c, I.floating, f.x, f.y]);
  return d.useMemo(() => ({
    ...f,
    update: M,
    refs: z,
    elements: I,
    floatingStyles: W
  }), [f, M, z, I, W]);
}
const jo = (e) => {
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
      return r && t(r) ? r.current != null ? an({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? an({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Do = (e, t) => ({
  ...Eo(e),
  options: [e, t]
}), Mo = (e, t) => ({
  ...Ro(e),
  options: [e, t]
}), Lo = (e, t) => ({
  ...Ao(e),
  options: [e, t]
}), No = (e, t) => ({
  ..._o(e),
  options: [e, t]
}), ko = (e, t) => ({
  ...Po(e),
  options: [e, t]
}), Fo = (e, t) => ({
  ...Oo(e),
  options: [e, t]
}), $o = (e, t) => ({
  ...jo(e),
  options: [e, t]
});
var Io = "Arrow", _n = d.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ h.jsx(
    de.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ h.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
_n.displayName = Io;
var Wo = _n;
function qo(e, t = []) {
  let n = [];
  function r(i, a) {
    const c = d.createContext(a), l = n.length;
    n = [...n, a];
    function u(p) {
      const { scope: g, children: m, ...x } = p, y = (g == null ? void 0 : g[e][l]) || c, E = d.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ h.jsx(y.Provider, { value: E, children: m });
    }
    function f(p, g) {
      const m = (g == null ? void 0 : g[e][l]) || c, x = d.useContext(m);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return u.displayName = i + "Provider", [u, f];
  }
  const o = () => {
    const i = n.map((a) => d.createContext(a));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || i;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return o.scopeName = e, [r, Bo(o, ...t)];
}
function Bo(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((c, { useScope: l, scopeName: u }) => {
        const p = l(i)[`__scope${u}`];
        return { ...c, ...p };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Vo(e) {
  const [t, n] = d.useState(void 0);
  return ye(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, c;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          a = u.inlineSize, c = u.blockSize;
        } else
          a = e.offsetWidth, c = e.offsetHeight;
        n({ width: a, height: c });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Lt = "Popper", [Pn, On] = qo(Lt), [Ho, An] = Pn(Lt), Sn = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = d.useState(null);
  return /* @__PURE__ */ h.jsx(Ho, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Sn.displayName = Lt;
var Tn = "PopperAnchor", jn = d.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = An(Tn, n), a = d.useRef(null), c = be(t, a);
    return d.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ h.jsx(de.div, { ...o, ref: c });
  }
);
jn.displayName = Tn;
var Nt = "PopperContent", [Uo, zo] = Pn(Nt), Dn = d.forwardRef(
  (e, t) => {
    var Ce, he, Ee, me, Ue, Ne;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: x,
      ...y
    } = e, E = An(Nt, n), [b, w] = d.useState(null), P = be(t, (ge) => w(ge)), [R, _] = d.useState(null), S = Vo(R), A = (S == null ? void 0 : S.width) ?? 0, F = (S == null ? void 0 : S.height) ?? 0, B = r + (i !== "center" ? "-" + i : ""), $ = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, Y = Array.isArray(u) ? u : [u], U = Y.length > 0, M = {
      padding: $,
      boundary: Y.filter(Go),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: U
    }, { refs: N, floatingStyles: z, placement: I, isPositioned: W, middlewareData: j } = To({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: B,
      whileElementsMounted: (...ge) => Co(...ge, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: E.anchor
      },
      middleware: [
        Do({ mainAxis: o + F, alignmentAxis: a }),
        l && Mo({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Lo() : void 0,
          ...M
        }),
        l && No({ ...M }),
        ko({
          ...M,
          apply: ({ elements: ge, rects: ze, availableWidth: Re, availableHeight: ve }) => {
            const { width: Ye, height: Ge } = ze.reference, ie = ge.floating.style;
            ie.setProperty("--radix-popper-available-width", `${Re}px`), ie.setProperty("--radix-popper-available-height", `${ve}px`), ie.setProperty("--radix-popper-anchor-width", `${Ye}px`), ie.setProperty("--radix-popper-anchor-height", `${Ge}px`);
          }
        }),
        R && $o({ element: R, padding: c }),
        Xo({ arrowWidth: A, arrowHeight: F }),
        g && Fo({ strategy: "referenceHidden", ...M })
      ]
    }), [H, K] = Nn(I), pe = je(x);
    ye(() => {
      W && (pe == null || pe());
    }, [W, pe]);
    const Ve = (Ce = j.arrow) == null ? void 0 : Ce.x, He = (he = j.arrow) == null ? void 0 : he.y, ct = ((Ee = j.arrow) == null ? void 0 : Ee.centerOffset) !== 0, [lt, Le] = d.useState();
    return ye(() => {
      b && Le(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: W ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: lt,
          "--radix-popper-transform-origin": [
            (me = j.transformOrigin) == null ? void 0 : me.x,
            (Ue = j.transformOrigin) == null ? void 0 : Ue.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Ne = j.hide) == null ? void 0 : Ne.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ h.jsx(
          Uo,
          {
            scope: n,
            placedSide: H,
            onArrowChange: _,
            arrowX: Ve,
            arrowY: He,
            shouldHideArrow: ct,
            children: /* @__PURE__ */ h.jsx(
              de.div,
              {
                "data-side": H,
                "data-align": K,
                ...y,
                ref: P,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: W ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Dn.displayName = Nt;
var Mn = "PopperArrow", Yo = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ln = d.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = zo(Mn, r), a = Yo[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ h.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
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
        children: /* @__PURE__ */ h.jsx(
          Wo,
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
Ln.displayName = Mn;
function Go(e) {
  return e !== null;
}
var Xo = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var E, b, w;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((E = o.arrow) == null ? void 0 : E.centerOffset) !== 0, c = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [u, f] = Nn(n), p = { start: "0%", center: "50%", end: "100%" }[f], g = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + c / 2, m = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let x = "", y = "";
    return u === "bottom" ? (x = a ? p : `${g}px`, y = `${-l}px`) : u === "top" ? (x = a ? p : `${g}px`, y = `${r.floating.height + l}px`) : u === "right" ? (x = `${-l}px`, y = a ? p : `${m}px`) : u === "left" && (x = `${r.floating.width + l}px`, y = a ? p : `${m}px`), { data: { x, y } };
  }
});
function Nn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ko = Sn, Jo = jn, Zo = Dn, Qo = Ln, ei = "Portal", kn = d.forwardRef((e, t) => {
  var c;
  const { container: n, ...r } = e, [o, i] = d.useState(!1);
  ye(() => i(!0), []);
  const a = n || o && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
  return a ? yr.createPortal(/* @__PURE__ */ h.jsx(de.div, { ...r, ref: t }), a) : null;
});
kn.displayName = ei;
function ti(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var kt = (e) => {
  const { present: t, children: n } = e, r = ni(t), o = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), i = be(r.ref, ri(o));
  return typeof n == "function" || r.isPresent ? d.cloneElement(o, { ref: i }) : null;
};
kt.displayName = "Presence";
function ni(e) {
  const [t, n] = d.useState(), r = d.useRef({}), o = d.useRef(e), i = d.useRef("none"), a = e ? "mounted" : "unmounted", [c, l] = ti(a, {
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
  return d.useEffect(() => {
    const u = Ke(r.current);
    i.current = c === "mounted" ? u : "none";
  }, [c]), ye(() => {
    const u = r.current, f = o.current;
    if (f !== e) {
      const g = i.current, m = Ke(u);
      e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && g !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), ye(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, p = (m) => {
        const y = Ke(r.current).includes(m.animationName);
        if (m.target === t && y && (l("ANIMATION_END"), !o.current)) {
          const E = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = E);
          });
        }
      }, g = (m) => {
        m.target === t && (i.current = Ke(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: d.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Ke(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ri(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function oi({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = ii({ defaultProp: t, onChange: n }), i = e !== void 0, a = i ? e : r, c = je(n), l = d.useCallback(
    (u) => {
      if (i) {
        const p = typeof u == "function" ? u(e) : u;
        p !== e && c(p);
      } else
        o(u);
    },
    [i, e, o, c]
  );
  return [a, l];
}
function ii({
  defaultProp: e,
  onChange: t
}) {
  const n = d.useState(e), [r] = n, o = d.useRef(r), i = je(t);
  return d.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var si = "VisuallyHidden", Fn = d.forwardRef(
  (e, t) => /* @__PURE__ */ h.jsx(
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
Fn.displayName = si;
var ai = Fn, [it, Ii] = Er("Tooltip", [
  On
]), st = On(), $n = "TooltipProvider", ci = 700, _t = "tooltip.open", [li, Ft] = it($n), In = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = ci,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, [a, c] = d.useState(!0), l = d.useRef(!1), u = d.useRef(0);
  return d.useEffect(() => {
    const f = u.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ h.jsx(
    li,
    {
      scope: t,
      isOpenDelayed: a,
      delayDuration: n,
      onOpen: d.useCallback(() => {
        window.clearTimeout(u.current), c(!1);
      }, []),
      onClose: d.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => c(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: d.useCallback((f) => {
        l.current = f;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
In.displayName = $n;
var at = "Tooltip", [ui, Be] = it(at), Wn = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: c
  } = e, l = Ft(at, e.__scopeTooltip), u = st(t), [f, p] = d.useState(null), g = Wr(), m = d.useRef(0), x = a ?? l.disableHoverableContent, y = c ?? l.delayDuration, E = d.useRef(!1), [b = !1, w] = oi({
    prop: r,
    defaultProp: o,
    onChange: (A) => {
      A ? (l.onOpen(), document.dispatchEvent(new CustomEvent(_t))) : l.onClose(), i == null || i(A);
    }
  }), P = d.useMemo(() => b ? E.current ? "delayed-open" : "instant-open" : "closed", [b]), R = d.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, E.current = !1, w(!0);
  }, [w]), _ = d.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, w(!1);
  }, [w]), S = d.useCallback(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      E.current = !0, w(!0), m.current = 0;
    }, y);
  }, [y, w]);
  return d.useEffect(() => () => {
    m.current && (window.clearTimeout(m.current), m.current = 0);
  }, []), /* @__PURE__ */ h.jsx(Ko, { ...u, children: /* @__PURE__ */ h.jsx(
    ui,
    {
      scope: t,
      contentId: g,
      open: b,
      stateAttribute: P,
      trigger: f,
      onTriggerChange: p,
      onTriggerEnter: d.useCallback(() => {
        l.isOpenDelayed ? S() : R();
      }, [l.isOpenDelayed, S, R]),
      onTriggerLeave: d.useCallback(() => {
        x ? _() : (window.clearTimeout(m.current), m.current = 0);
      }, [_, x]),
      onOpen: R,
      onClose: _,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
Wn.displayName = at;
var Pt = "TooltipTrigger", qn = d.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Be(Pt, n), i = Ft(Pt, n), a = st(n), c = d.useRef(null), l = be(t, c, o.onTriggerChange), u = d.useRef(!1), f = d.useRef(!1), p = d.useCallback(() => u.current = !1, []);
    return d.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ h.jsx(Jo, { asChild: !0, ...a, children: /* @__PURE__ */ h.jsx(
      de.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: se(e.onPointerMove, (g) => {
          g.pointerType !== "touch" && !f.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: se(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: se(e.onPointerDown, () => {
          u.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: se(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: se(e.onBlur, o.onClose),
        onClick: se(e.onClick, o.onClose)
      }
    ) });
  }
);
qn.displayName = Pt;
var $t = "TooltipPortal", [fi, di] = it($t, {
  forceMount: void 0
}), Bn = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, i = Be($t, t);
  return /* @__PURE__ */ h.jsx(fi, { scope: t, forceMount: n, children: /* @__PURE__ */ h.jsx(kt, { present: n || i.open, children: /* @__PURE__ */ h.jsx(kn, { asChild: !0, container: o, children: r }) }) });
};
Bn.displayName = $t;
var Te = "TooltipContent", Vn = d.forwardRef(
  (e, t) => {
    const n = di(Te, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, a = Be(Te, e.__scopeTooltip);
    return /* @__PURE__ */ h.jsx(kt, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ h.jsx(Hn, { side: o, ...i, ref: t }) : /* @__PURE__ */ h.jsx(pi, { side: o, ...i, ref: t }) });
  }
), pi = d.forwardRef((e, t) => {
  const n = Be(Te, e.__scopeTooltip), r = Ft(Te, e.__scopeTooltip), o = d.useRef(null), i = be(t, o), [a, c] = d.useState(null), { trigger: l, onClose: u } = n, f = o.current, { onPointerInTransitChange: p } = r, g = d.useCallback(() => {
    c(null), p(!1);
  }, [p]), m = d.useCallback(
    (x, y) => {
      const E = x.currentTarget, b = { x: x.clientX, y: x.clientY }, w = gi(b, E.getBoundingClientRect()), P = vi(b, w), R = xi(y.getBoundingClientRect()), _ = wi([...P, ...R]);
      c(_), p(!0);
    },
    [p]
  );
  return d.useEffect(() => () => g(), [g]), d.useEffect(() => {
    if (l && f) {
      const x = (E) => m(E, f), y = (E) => m(E, l);
      return l.addEventListener("pointerleave", x), f.addEventListener("pointerleave", y), () => {
        l.removeEventListener("pointerleave", x), f.removeEventListener("pointerleave", y);
      };
    }
  }, [l, f, m, g]), d.useEffect(() => {
    if (a) {
      const x = (y) => {
        const E = y.target, b = { x: y.clientX, y: y.clientY }, w = (l == null ? void 0 : l.contains(E)) || (f == null ? void 0 : f.contains(E)), P = !yi(b, a);
        w ? g() : P && (g(), u());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, f, a, u, g]), /* @__PURE__ */ h.jsx(Hn, { ...e, ref: i });
}), [hi, mi] = it(at, { isInside: !1 }), Hn = d.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      ...c
    } = e, l = Be(Te, n), u = st(n), { onClose: f } = l;
    return d.useEffect(() => (document.addEventListener(_t, f), () => document.removeEventListener(_t, f)), [f]), d.useEffect(() => {
      if (l.trigger) {
        const p = (g) => {
          const m = g.target;
          m != null && m.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ h.jsx(
      hn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ h.jsxs(
          Zo,
          {
            "data-state": l.stateAttribute,
            ...u,
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
              /* @__PURE__ */ h.jsx(dn, { children: r }),
              /* @__PURE__ */ h.jsx(hi, { scope: n, isInside: !0, children: /* @__PURE__ */ h.jsx(ai, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Vn.displayName = Te;
var Un = "TooltipArrow", zn = d.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = st(n);
    return mi(
      Un,
      n
    ).isInside ? null : /* @__PURE__ */ h.jsx(Qo, { ...o, ...r, ref: t });
  }
);
zn.displayName = Un;
function gi(e, t) {
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
function vi(e, t, n = 5) {
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
function xi(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function yi(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i].x, l = t[i].y, u = t[a].x, f = t[a].y;
    l > r != f > r && n < (u - c) * (r - l) / (f - l) + c && (o = !o);
  }
  return o;
}
function wi(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), bi(t);
}
function bi(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], a = t[t.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], a = n[n.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Ci = In, Ei = Wn, Ri = qn, _i = Bn, Pi = Vn, Oi = zn;
function Ai({ to: e }) {
  return /* @__PURE__ */ h.jsx(Ci, { delayDuration: 100, children: /* @__PURE__ */ h.jsxs(Ei, { children: [
    /* @__PURE__ */ h.jsx(Ri, { className: "github-corner", asChild: !0, children: /* @__PURE__ */ h.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ h.jsxs(
      "svg",
      {
        width: "80",
        height: "80",
        viewBox: "0 0 250 250",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ h.jsx("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
              fill: "currentColor",
              className: "octo-arm"
            }
          ),
          /* @__PURE__ */ h.jsx(
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
    /* @__PURE__ */ h.jsx(_i, { children: /* @__PURE__ */ h.jsxs(
      Pi,
      {
        side: "right",
        className: "bg-white rounded-md text-black px-2 py-0.5",
        children: [
          "View source on GitHub",
          /* @__PURE__ */ h.jsx(Oi, {})
        ]
      }
    ) })
  ] }) });
}
const Si = xr(null);
function Yn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Yn(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ti() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Yn(e)) && (r && (r += " "), r += t);
  return r;
}
const ji = ({
  asChild: e,
  mergeClass: t = !0,
  fallbackAs: n = "div",
  children: r,
  ...o
}, i) => {
  var c, l;
  const a = n;
  if (!e)
    return /* @__PURE__ */ h.jsx(a, { ...o, children: r });
  if (Oe.Children.count(r) > 1)
    throw new Error("Only one child allowed");
  if (Oe.isValidElement(r)) {
    const u = t ? Ti((c = r == null ? void 0 : r.props) == null ? void 0 : c.className, o == null ? void 0 : o.className) : (l = r == null ? void 0 : r.props) == null ? void 0 : l.className;
    return Oe.cloneElement(r, {
      ...o,
      ref: i,
      ...r == null ? void 0 : r.props,
      className: u
    });
  }
  return null;
}, Di = Oe.forwardRef(ji), Mi = (e) => /* @__PURE__ */ h.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 276 28",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ h.jsxs("g", { clipPath: "url(#sequence-boilerplate-logo_svg__a)", children: [
        /* @__PURE__ */ h.jsx(
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
            children: /* @__PURE__ */ h.jsx("path", { fill: "#fff", d: "M35.03 0H0v28h35.03z" })
          }
        ),
        /* @__PURE__ */ h.jsxs("g", { mask: "url(#sequence-boilerplate-logo_svg__b)", children: [
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "#111",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__c)",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__d)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__e)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__f)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__g)",
              d: "M8.758 20.989a1.75 1.75 0 1 0-3.502.001 1.75 1.75 0 0 0 3.502-.001"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__h)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__i)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__j)",
              d: "M28.025 5.25H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__k)",
              d: "M28.025 19.239H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__l)",
              d: "M21.018 12.25H7.006a1.75 1.75 0 1 0 0 3.5h14.012a1.75 1.75 0 1 0 0-3.5"
            }
          )
        ] }),
        /* @__PURE__ */ h.jsx(
          "path",
          {
            fill: "#fff",
            d: "M49.65 23.282c3.413 0 5.82-1.94 5.82-4.911.023-2.563-1.523-4.048-4.101-4.982l-1.768-.647c-1.792-.647-2.652-1.197-2.652-2.443s1.277-1.964 2.75-1.964c1.375 0 2.431.551 3.315 1.581l1.989-1.892C53.726 6.514 51.885 5.7 49.724 5.7c-3.241 0-5.67 1.82-5.67 4.791 0 2.324 1.35 3.808 4.124 4.791l1.915.67c1.67.6 2.48 1.366 2.48 2.588 0 1.268-1.178 2.108-2.823 2.108-1.695 0-3.144-.815-4.051-2.18l-2.26 1.748c1.03 1.843 3.411 3.066 6.211 3.066m13.638-.049c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.663 1.054-1.768 1.82-3.51 1.82-2.063 0-3.66-1.268-3.782-3.257h9.65c.023-.383.023-.599.023-.862 0-3.856-2.675-5.94-5.917-5.94-3.732 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.634-7.569c.392-1.772 1.94-2.658 3.535-2.658 1.571 0 2.996.934 3.29 2.658zM83.236 28V11.017h-2.701v1.606c-.687-.959-2.16-1.845-3.929-1.845-3.364 0-5.917 2.803-5.917 6.228s2.553 6.227 5.917 6.227c1.768 0 3.242-.885 3.929-1.844V28zm-6.138-7.163c-2.161 0-3.659-1.676-3.659-3.832s1.498-3.833 3.659-3.833 3.658 1.677 3.658 3.833-1.498 3.832-3.658 3.832m13.127 2.396c1.57 0 2.872-.646 3.585-1.868v1.628h2.7V11.017h-2.7v5.893c0 2.587-1.228 3.928-2.996 3.928-1.57 0-2.455-1.174-2.455-3.09v-6.73h-2.7v7.162c0 3.065 1.742 5.054 4.566 5.054m14.733 0c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.664 1.054-1.769 1.82-3.511 1.82-2.062 0-3.658-1.268-3.781-3.257h9.649c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.917-5.94-3.732 0-6.41 2.706-6.41 6.227 0 3.664 2.677 6.227 6.41 6.227m-3.635-7.569c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.995.934 3.29 2.658zm11.591 7.33h2.702V17.1c0-2.587 1.374-3.929 3.167-3.929 1.571 0 2.553 1.126 2.553 3.042v6.778h2.701v-7.21c0-3.041-1.842-5.006-4.69-5.006-1.596 0-2.971.647-3.731 1.869v-1.628h-2.702zm19.439.24c2.554 0 4.666-1.294 5.721-3.306l-2.357-1.245c-.59 1.222-1.792 2.107-3.364 2.107-2.185 0-3.732-1.653-3.732-3.784 0-2.132 1.547-3.785 3.732-3.785 1.571 0 2.774.886 3.364 2.108l2.357-1.245c-1.055-2.012-3.167-3.306-5.721-3.306-3.681 0-6.481 2.683-6.481 6.228s2.8 6.227 6.481 6.227m13.003 0c2.579 0 4.493-1.055 5.598-2.779l-2.062-1.437c-.663 1.054-1.768 1.82-3.511 1.82-2.063 0-3.658-1.268-3.782-3.257h9.651c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.918-5.94-3.733 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.635-7.57c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.996.934 3.29 2.658z"
          }
        )
      ] }),
      /* @__PURE__ */ h.jsx(
        "path",
        {
          fill: "#fff",
          fillOpacity: 0.6,
          d: "M159.371 22.5V5.385h5.905q2.242 0 3.664 1.374 1.447 1.374 1.447 3.351 0 2.121-1.591 3.302 2.748 1.134 2.748 4.074 0 2.146-1.567 3.592-1.543 1.422-3.953 1.422zm2.82-2.58h3.76q1.35 0 2.097-.674.748-.675.748-1.784 0-1.085-.748-1.76-.747-.699-2.097-.699h-3.76zm0-7.327h2.941q1.133 0 1.808-.651.675-.65.675-1.663 0-.965-.675-1.64t-1.808-.674h-2.941zm21.281 8.34q-1.808 1.808-4.483 1.808-2.676 0-4.508-1.808-1.808-1.832-1.808-4.46 0-2.626 1.808-4.435 1.832-1.831 4.508-1.832 2.675 0 4.483 1.832 1.833 1.809 1.832 4.436t-1.832 4.46m-4.483-.65q1.566 0 2.579-1.085 1.036-1.11 1.036-2.724 0-1.616-1.036-2.7-1.013-1.11-2.579-1.109-1.592 0-2.628 1.109-1.012 1.085-1.012 2.7 0 1.614 1.012 2.724 1.036 1.084 2.628 1.084m9.585-12.463q-.723 0-1.254-.506a1.74 1.74 0 0 1-.53-1.278q0-.723.53-1.23.531-.53 1.254-.53.747 0 1.253.53.507.507.506 1.23 0 .747-.506 1.278a1.7 1.7 0 0 1-1.253.506m-1.326 14.68V10.448h2.651V22.5zm5.491 0V4.421h2.652V22.5zm10.939.241q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.662 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976M211.49 22.5V10.448h2.652v2.145a3.2 3.2 0 0 1 1.229-1.64q.917-.626 1.953-.626.627 0 1.036.096v2.724a3.8 3.8 0 0 0-1.325-.217q-1.206 0-2.049.989-.844.963-.844 2.7V22.5zm11.086 5.038h-2.652v-17.09h2.652v1.614q.554-.771 1.591-1.301a4.87 4.87 0 0 1 2.29-.555q2.459 0 4.122 1.832 1.687 1.832 1.687 4.436t-1.687 4.435q-1.663 1.832-4.122 1.832-1.23 0-2.29-.53-1.037-.555-1.591-1.326zm3.399-7.207q1.566 0 2.579-1.11 1.012-1.107 1.012-2.747t-1.012-2.748q-1.013-1.11-2.579-1.11-1.592 0-2.604 1.11-1.012 1.108-1.012 2.748t1.012 2.748q1.013 1.108 2.604 1.108m8.268 2.169V4.421h2.652V22.5zm10.433.241q-2.459 0-4.146-1.832-1.663-1.832-1.663-4.435 0-2.604 1.663-4.436 1.688-1.831 4.146-1.832 1.23 0 2.266.555 1.036.53 1.591 1.302v-1.616h2.652V22.5h-2.652v-1.615q-.555.771-1.591 1.326a4.9 4.9 0 0 1-2.266.53m-2.097-3.52q1.013 1.11 2.579 1.11t2.58-1.11q1.012-1.107 1.012-2.747t-1.012-2.748q-1.012-1.11-2.58-1.11-1.566 0-2.579 1.11-1.012 1.108-1.012 2.748t1.012 2.748m16.705 3.4q-1.831 0-2.989-1.013-1.133-1.035-1.133-2.989v-5.81h-2.506v-2.361h2.506V7.097h2.652v3.35h3.447v2.363h-3.447v5.375q0 1.11.482 1.591.483.458 1.543.458.867 0 1.422-.24v2.361q-.867.265-1.977.265m9.051.12q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.663 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976"
        }
      ),
      /* @__PURE__ */ h.jsxs("defs", { children: [
        /* @__PURE__ */ h.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__c",
            x1: 17.515,
            x2: 17.515,
            y1: 0,
            y2: 28.029,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ h.jsx("stop", { stopColor: "#1D273D" }),
              /* @__PURE__ */ h.jsx("stop", { offset: 1, stopColor: "#0D0F13" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__d",
            x1: 5.794,
            x2: 8.172,
            y1: 8.726,
            y2: 5.545,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ h.jsx("stop", { stopColor: "#4462FE" }),
              /* @__PURE__ */ h.jsx("stop", { offset: 1, stopColor: "#7D69FA" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__e",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ h.jsx("stop", { stopColor: "#3757FD" }),
              /* @__PURE__ */ h.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__f",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ h.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ h.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__g",
            x1: 5.75,
            x2: 8.085,
            y1: 22.168,
            y2: 19.691,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ h.jsx("stop", { stopColor: "#BC3EE6" }),
              /* @__PURE__ */ h.jsx("stop", { offset: 1, stopColor: "#D972F1" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__h",
            x1: 26.981,
            x2: 29.14,
            y1: 15.16,
            y2: 12.861,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ h.jsx("stop", { stopColor: "#29BDFF" }),
              /* @__PURE__ */ h.jsx("stop", { offset: 1, stopColor: "#96E7FB" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__i",
            x1: 26.554,
            x2: 29.596,
            y1: 15.726,
            y2: 15.58,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ h.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ h.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__j",
            x1: 13.667,
            x2: 28.081,
            y1: 8.726,
            y2: 5.265,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ h.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ h.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__k",
            x1: 13.8,
            x2: 27.638,
            y1: 22.741,
            y2: 19.191,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ h.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ h.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__l",
            x1: 7.608,
            x2: 20.826,
            y1: 15.777,
            y2: 12.228,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ h.jsx("stop", { stopColor: "#6634FF" }),
              /* @__PURE__ */ h.jsx("stop", { offset: 1, stopColor: "#9C6DFF" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsx("clipPath", { id: "sequence-boilerplate-logo_svg__a", children: /* @__PURE__ */ h.jsx("path", { fill: "#fff", d: "M0 0h151.273v28H0z" }) })
      ] })
    ]
  }
), Li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SequenceBoilerplateLogo: Mi
}, Symbol.toStringTag, { value: "Module" })), xt = Li;
function Ni({
  name: e,
  alt: t = void 0,
  className: n = "",
  ...r
}) {
  const o = xt == null ? void 0 : xt[e];
  return /* @__PURE__ */ h.jsx(
    Di,
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
      children: /* @__PURE__ */ h.jsx(o, {})
    }
  );
}
function ki({
  name: e,
  description: t
}) {
  return /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ h.jsx(
      Ni,
      {
        name: "SequenceBoilerplateLogo",
        alt: "Sequence Boilerplate",
        className: "mb-2"
      }
    ),
    /* @__PURE__ */ h.jsx("h1", { className: "text-40 font-bold", children: e }),
    /* @__PURE__ */ h.jsx("p", { className: "text-14 font-bold", children: t })
  ] });
}
function Wi({
  githubUrl: e,
  name: t,
  description: n,
  useAuth: r,
  children: o
}) {
  return /* @__PURE__ */ h.jsxs(
    Si.Provider,
    {
      value: { githubUrl: e, name: t, description: n, useAuth: r },
      children: [
        e ? /* @__PURE__ */ h.jsx(Ai, { to: e }) : null,
        /* @__PURE__ */ h.jsx(ki, { name: t, description: n }),
        /* @__PURE__ */ h.jsx("div", { className: "py-8", children: o }),
        /* @__PURE__ */ h.jsx("div", { className: "text-14 font-medium", children: /* @__PURE__ */ h.jsxs("p", { children: [
          "Want to learn more? Read the",
          "  ",
          /* @__PURE__ */ h.jsx(
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
function qi({ children: e }) {
  return /* @__PURE__ */ h.jsx("div", { id: "root", children: e });
}
export {
  Wi as SequenceDemoKit,
  qi as SsrRoot
};
