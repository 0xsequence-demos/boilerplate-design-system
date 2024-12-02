import * as u from "react";
import se, { forwardRef as Je, createContext as mr, useContext as gr, useLayoutEffect as di, useEffect as fi, useState as xr, useCallback as vi } from "react";
import * as Tt from "react-dom";
import hi from "react-dom";
var rn = { exports: {} }, rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function pi() {
  if (Yn) return rt;
  Yn = 1;
  var e = se, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(a, c, d) {
    var h, p = {}, g = null, m = null;
    d !== void 0 && (g = "" + d), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (h in c) r.call(c, h) && !s.hasOwnProperty(h) && (p[h] = c[h]);
    if (a && a.defaultProps) for (h in c = a.defaultProps, c) p[h] === void 0 && (p[h] = c[h]);
    return { $$typeof: t, type: a, key: g, ref: m, props: p, _owner: o.current };
  }
  return rt.Fragment = n, rt.jsx = l, rt.jsxs = l, rt;
}
var ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function mi() {
  return Gn || (Gn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.iterator, v = "@@iterator";
    function x(f) {
      if (f === null || typeof f != "object")
        return null;
      var S = y && f[y] || f[v];
      return typeof S == "function" ? S : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(f) {
      {
        for (var S = arguments.length, j = new Array(S > 1 ? S - 1 : 0), A = 1; A < S; A++)
          j[A - 1] = arguments[A];
        C("error", f, j);
      }
    }
    function C(f, S, j) {
      {
        var A = b.ReactDebugCurrentFrame, $ = A.getStackAddendum();
        $ !== "" && (S += "%s", j = j.concat([$]));
        var X = j.map(function(I) {
          return String(I);
        });
        X.unshift("Warning: " + S), Function.prototype.apply.call(console[f], console, X);
      }
    }
    var R = !1, E = !1, T = !1, P = !1, O = !1, B;
    B = Symbol.for("react.module.reference");
    function z(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === s || O || f === o || f === d || f === h || P || f === m || R || E || T || typeof f == "object" && f !== null && (f.$$typeof === g || f.$$typeof === p || f.$$typeof === l || f.$$typeof === a || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === B || f.getModuleId !== void 0));
    }
    function K(f, S, j) {
      var A = f.displayName;
      if (A)
        return A;
      var $ = S.displayName || S.name || "";
      return $ !== "" ? j + "(" + $ + ")" : j;
    }
    function U(f) {
      return f.displayName || "Context";
    }
    function N(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            var S = f;
            return U(S) + ".Consumer";
          case l:
            var j = f;
            return U(j._context) + ".Provider";
          case c:
            return K(f, f.render, "ForwardRef");
          case p:
            var A = f.displayName || null;
            return A !== null ? A : N(f.type) || "Memo";
          case g: {
            var $ = f, X = $._payload, I = $._init;
            try {
              return N(I(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, Y = 0, k, V, _, G, re, fe, Ae;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function ye() {
      {
        if (Y === 0) {
          k = console.log, V = console.info, _ = console.warn, G = console.error, re = console.group, fe = console.groupCollapsed, Ae = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: _e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        Y++;
      }
    }
    function Oe() {
      {
        if (Y--, Y === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, f, {
              value: k
            }),
            info: L({}, f, {
              value: V
            }),
            warn: L({}, f, {
              value: _
            }),
            error: L({}, f, {
              value: G
            }),
            group: L({}, f, {
              value: re
            }),
            groupCollapsed: L({}, f, {
              value: fe
            }),
            groupEnd: L({}, f, {
              value: Ae
            })
          });
        }
        Y < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = b.ReactCurrentDispatcher, M;
    function q(f, S, j) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch ($) {
            var A = $.stack.trim().match(/\n( *(at )?)/);
            M = A && A[1] || "";
          }
        return `
` + M + f;
      }
    }
    var ee = !1, F;
    {
      var W = typeof WeakMap == "function" ? WeakMap : Map;
      F = new W();
    }
    function H(f, S) {
      if (!f || ee)
        return "";
      {
        var j = F.get(f);
        if (j !== void 0)
          return j;
      }
      var A;
      ee = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = pe.current, pe.current = null, ye();
      try {
        if (S) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (ae) {
              A = ae;
            }
            Reflect.construct(f, [], I);
          } else {
            try {
              I.call();
            } catch (ae) {
              A = ae;
            }
            f.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            A = ae;
          }
          f();
        }
      } catch (ae) {
        if (ae && A && typeof ae.stack == "string") {
          for (var D = ae.stack.split(`
`), ie = A.stack.split(`
`), J = D.length - 1, te = ie.length - 1; J >= 1 && te >= 0 && D[J] !== ie[te]; )
            te--;
          for (; J >= 1 && te >= 0; J--, te--)
            if (D[J] !== ie[te]) {
              if (J !== 1 || te !== 1)
                do
                  if (J--, te--, te < 0 || D[J] !== ie[te]) {
                    var he = `
` + D[J].replace(" at new ", " at ");
                    return f.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", f.displayName)), typeof f == "function" && F.set(f, he), he;
                  }
                while (J >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        ee = !1, pe.current = X, Oe(), Error.prepareStackTrace = $;
      }
      var We = f ? f.displayName || f.name : "", ze = We ? q(We) : "";
      return typeof f == "function" && F.set(f, ze), ze;
    }
    function oe(f, S, j) {
      return H(f, !1);
    }
    function ve(f) {
      var S = f.prototype;
      return !!(S && S.isReactComponent);
    }
    function be(f, S, j) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return H(f, ve(f));
      if (typeof f == "string")
        return q(f);
      switch (f) {
        case d:
          return q("Suspense");
        case h:
          return q("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return oe(f.render);
          case p:
            return be(f.type, S, j);
          case g: {
            var A = f, $ = A._payload, X = A._init;
            try {
              return be(X($), S, j);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Ne = {}, vt = b.ReactDebugCurrentFrame;
    function je(f) {
      if (f) {
        var S = f._owner, j = be(f.type, f._source, S ? S.type : null);
        vt.setExtraStackFrame(j);
      } else
        vt.setExtraStackFrame(null);
    }
    function qo(f, S, j, A, $) {
      {
        var X = Function.call.bind(me);
        for (var I in f)
          if (X(f, I)) {
            var D = void 0;
            try {
              if (typeof f[I] != "function") {
                var ie = Error((A || "React class") + ": " + j + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              D = f[I](S, I, A, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              D = J;
            }
            D && !(D instanceof Error) && (je($), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", j, I, typeof D), je(null)), D instanceof Error && !(D.message in Ne) && (Ne[D.message] = !0, je($), w("Failed %s type: %s", j, D.message), je(null));
          }
      }
    }
    var Wo = Array.isArray;
    function Ft(f) {
      return Wo(f);
    }
    function $o(f) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, j = S && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return j;
      }
    }
    function Uo(f) {
      try {
        return Dn(f), !1;
      } catch {
        return !0;
      }
    }
    function Dn(f) {
      return "" + f;
    }
    function In(f) {
      if (Uo(f))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $o(f)), Dn(f);
    }
    var nt = b.ReactCurrentOwner, Yo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bn, Vn, Ht;
    Ht = {};
    function Go(f) {
      if (me.call(f, "ref")) {
        var S = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Ko(f) {
      if (me.call(f, "key")) {
        var S = Object.getOwnPropertyDescriptor(f, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Xo(f, S) {
      if (typeof f.ref == "string" && nt.current && S && nt.current.stateNode !== S) {
        var j = N(nt.current.type);
        Ht[j] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(nt.current.type), f.ref), Ht[j] = !0);
      }
    }
    function Zo(f, S) {
      {
        var j = function() {
          Bn || (Bn = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        j.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function Jo(f, S) {
      {
        var j = function() {
          Vn || (Vn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        j.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var Qo = function(f, S, j, A, $, X, I) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: S,
        ref: j,
        props: I,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function ei(f, S, j, A, $) {
      {
        var X, I = {}, D = null, ie = null;
        j !== void 0 && (In(j), D = "" + j), Ko(S) && (In(S.key), D = "" + S.key), Go(S) && (ie = S.ref, Xo(S, $));
        for (X in S)
          me.call(S, X) && !Yo.hasOwnProperty(X) && (I[X] = S[X]);
        if (f && f.defaultProps) {
          var J = f.defaultProps;
          for (X in J)
            I[X] === void 0 && (I[X] = J[X]);
        }
        if (D || ie) {
          var te = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          D && Zo(I, te), ie && Jo(I, te);
        }
        return Qo(f, D, ie, $, A, nt.current, I);
      }
    }
    var qt = b.ReactCurrentOwner, zn = b.ReactDebugCurrentFrame;
    function qe(f) {
      if (f) {
        var S = f._owner, j = be(f.type, f._source, S ? S.type : null);
        zn.setExtraStackFrame(j);
      } else
        zn.setExtraStackFrame(null);
    }
    var Wt;
    Wt = !1;
    function $t(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function Fn() {
      {
        if (qt.current) {
          var f = N(qt.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function ti(f) {
      return "";
    }
    var Hn = {};
    function ni(f) {
      {
        var S = Fn();
        if (!S) {
          var j = typeof f == "string" ? f : f.displayName || f.name;
          j && (S = `

Check the top-level render call using <` + j + ">.");
        }
        return S;
      }
    }
    function qn(f, S) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var j = ni(S);
        if (Hn[j])
          return;
        Hn[j] = !0;
        var A = "";
        f && f._owner && f._owner !== qt.current && (A = " It was passed a child from " + N(f._owner.type) + "."), qe(f), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, A), qe(null);
      }
    }
    function Wn(f, S) {
      {
        if (typeof f != "object")
          return;
        if (Ft(f))
          for (var j = 0; j < f.length; j++) {
            var A = f[j];
            $t(A) && qn(A, S);
          }
        else if ($t(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var $ = x(f);
          if (typeof $ == "function" && $ !== f.entries)
            for (var X = $.call(f), I; !(I = X.next()).done; )
              $t(I.value) && qn(I.value, S);
        }
      }
    }
    function ri(f) {
      {
        var S = f.type;
        if (S == null || typeof S == "string")
          return;
        var j;
        if (typeof S == "function")
          j = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === p))
          j = S.propTypes;
        else
          return;
        if (j) {
          var A = N(S);
          qo(j, f.props, "prop", A, f);
        } else if (S.PropTypes !== void 0 && !Wt) {
          Wt = !0;
          var $ = N(S);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function oi(f) {
      {
        for (var S = Object.keys(f.props), j = 0; j < S.length; j++) {
          var A = S[j];
          if (A !== "children" && A !== "key") {
            qe(f), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), qe(null);
            break;
          }
        }
        f.ref !== null && (qe(f), w("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    var $n = {};
    function Un(f, S, j, A, $, X) {
      {
        var I = z(f);
        if (!I) {
          var D = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = ti();
          ie ? D += ie : D += Fn();
          var J;
          f === null ? J = "null" : Ft(f) ? J = "array" : f !== void 0 && f.$$typeof === t ? (J = "<" + (N(f.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : J = typeof f, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, D);
        }
        var te = ei(f, S, j, $, X);
        if (te == null)
          return te;
        if (I) {
          var he = S.children;
          if (he !== void 0)
            if (A)
              if (Ft(he)) {
                for (var We = 0; We < he.length; We++)
                  Wn(he[We], f);
                Object.freeze && Object.freeze(he);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wn(he, f);
        }
        if (me.call(S, "key")) {
          var ze = N(f), ae = Object.keys(S).filter(function(ui) {
            return ui !== "key";
          }), Ut = ae.length > 0 ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$n[ze + Ut]) {
            var ci = ae.length > 0 ? "{" + ae.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ut, ze, ci, ze), $n[ze + Ut] = !0;
          }
        }
        return f === r ? oi(te) : ri(te), te;
      }
    }
    function ii(f, S, j) {
      return Un(f, S, j, !0);
    }
    function si(f, S, j) {
      return Un(f, S, j, !1);
    }
    var li = si, ai = ii;
    ot.Fragment = r, ot.jsx = li, ot.jsxs = ai;
  }()), ot;
}
process.env.NODE_ENV === "production" ? rn.exports = pi() : rn.exports = mi();
var i = rn.exports;
function gi(e) {
  if (e)
    return Object.keys(e).reduce((t, n) => (e[n] && t.push(`${n}-${e[n]}`), t), []).join(" ");
}
function de(e, t, n) {
  return {
    "data-component": e,
    "data-variant": t || "initial",
    "data-subvariants": gi(n)
  };
}
function xi(e, t) {
  const {
    children: n,
    type: r = "button",
    variant: o,
    subvariants: s,
    ...l
  } = e;
  return console.log(s), /* @__PURE__ */ i.jsx(
    "button",
    {
      ref: t,
      type: r,
      ...de("button", o, s),
      ...l,
      children: n
    }
  );
}
const H1 = Je(xi);
function wi(e) {
  const { children: t, subvariants: n, variant: r, ...o } = e;
  return /* @__PURE__ */ i.jsx(
    "details",
    {
      ...de("card-collapsable", r, n),
      ...o,
      children: t
    }
  );
}
function wr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = wr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function yi() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = wr(e)) && (r && (r += " "), r += t);
  return r;
}
const bi = ({
  asChild: e,
  mergeClass: t = !0,
  fallbackAs: n = "div",
  children: r,
  ...o
}, s) => {
  var a, c;
  const l = n;
  if (!e)
    return /* @__PURE__ */ i.jsx(l, { ...o, children: r });
  if (se.Children.count(r) > 1)
    throw new Error("Only one child allowed");
  if (se.isValidElement(r)) {
    const d = t ? yi((a = r == null ? void 0 : r.props) == null ? void 0 : a.className, o == null ? void 0 : o.className) : (c = r == null ? void 0 : r.props) == null ? void 0 : c.className;
    return se.cloneElement(r, {
      ...o,
      ref: s,
      ...r == null ? void 0 : r.props,
      className: d
    });
  }
  return null;
}, wn = se.forwardRef(bi), Ci = (e) => /* @__PURE__ */ i.jsx(
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
), Si = (e) => /* @__PURE__ */ i.jsx(
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
), Ri = (e) => /* @__PURE__ */ i.jsx(
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
), Ei = (e) => /* @__PURE__ */ i.jsx(
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
), ji = (e) => /* @__PURE__ */ i.jsx(
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
), Pi = (e) => /* @__PURE__ */ i.jsx(
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
), Ti = (e) => /* @__PURE__ */ i.jsx(
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
        stroke: "currentColor",
        strokeWidth: 1.5,
        d: "m4.304 10.232 4.263 4.79 7.13-11.238"
      }
    )
  }
), Mi = (e) => /* @__PURE__ */ i.jsx(
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
), Ai = (e) => /* @__PURE__ */ i.jsx(
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
), _i = (e) => /* @__PURE__ */ i.jsx(
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
), Oi = (e) => /* @__PURE__ */ i.jsx(
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
        fillRule: "evenodd",
        d: "m10.418 11.06 4.47 4.47 1.06-1.06L11.48 10l4.47-4.47-1.06-1.06-4.47 4.47-4.47-4.47-1.06 1.06L9.357 10l-4.47 4.47 1.06 1.06z",
        clipRule: "evenodd"
      }
    )
  }
), Li = (e) => /* @__PURE__ */ i.jsxs(
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
), ki = (e) => /* @__PURE__ */ i.jsx(
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
), Di = (e) => /* @__PURE__ */ i.jsx(
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
        d: "M14.918 4.5h-6V6h4.5v6.5h1.5zm-1.5 9.5v3h-9V6h3V3h9v11zm-7.5 1.5v-8h6v8z",
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
        d: "M5 6.714 3.618 3.547H2.5L4.158 7.02H2.98v.69h1.494v.663H2.981v.69h1.494v1.484h1.036V9.063h1.46v-.69h-1.46v-.66l.001-.003h1.46v-.69h-1.13L7.5 3.547H6.383zm4.747 8.232v-.788a2.9 2.9 0 0 1-1.04-.249 2.04 2.04 0 0 1-.863-.727 2.2 2.2 0 0 1-.344-1.125h1.017q.03.39.236.65.21.257.535.383.216.08.46.109V10.81l-.319-.093q-.806-.236-1.28-.693-.468-.456-.469-1.209 0-.622.315-1.086.316-.465.853-.72.41-.2.9-.246v-.817h.537v.81q.547.034.981.249.525.255.827.706.301.447.315 1.027h-.978a1.04 1.04 0 0 0-.433-.774 1.47 1.47 0 0 0-.712-.264v2.253l.283.079q.321.084.659.228a2.6 2.6 0 0 1 .627.38q.288.235.466.583.18.348.18.834 0 .611-.295 1.086a2 2 0 0 1-.85.749q-.456.226-1.07.265v.79zm1.024-1.877q-.222.096-.486.128v-2.23q.323.095.584.218.29.133.457.337.17.204.17.524 0 .352-.194.615-.193.261-.531.408M9.747 7.706v2.095a5 5 0 0 1-.246-.086 2.2 2.2 0 0 1-.4-.207 1 1 0 0 1-.299-.313.85.85 0 0 1-.111-.443.94.94 0 0 1 .164-.545q.168-.242.47-.38.19-.089.422-.12m7.677 10.086h-4.9v-.897h.34a.34.34 0 0 0 .29-.186q.102-.175.137-.411.034-.24.028-.432l-.027-.779H12.5v-.896h.76l-.043-1.262q-.027-.708.273-1.183.305-.475.809-.715.503-.24 1.084-.24.519 0 .931.166.417.164.7.452.287.282.41.647.122.364.048.766l-1.01-.156q.034-.33-.11-.55a.9.9 0 0 0-.395-.33 1.31 1.31 0 0 0-1.102.024q-.266.135-.434.411-.165.277-.164.708l.048 1.261h1.649v.897H14.34l.029.752q.02.435-.116.78-.06.15-.166.276h3.337z",
        clipRule: "evenodd"
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
), zi = (e) => /* @__PURE__ */ i.jsxs(
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
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.543 5.188h6.914v11.618H6.543zM5 18.497v-15h10v15zm7-12H8v1.46h4z",
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
        d: "M14.852 5.095c-.893-.46-1.85-.8-2.85-.994-.018-.003-.037.006-.046.025-.123.246-.26.567-.355.82a9.5 9.5 0 0 0-3.2 0 9 9 0 0 0-.36-.82.04.04 0 0 0-.046-.025c-1 .194-1.957.533-2.85.994a.04.04 0 0 0-.019.018c-1.815 3.05-2.312 6.024-2.068 8.961a.06.06 0 0 0 .018.037 11.2 11.2 0 0 0 3.496 1.987q.029.01.049-.018.406-.62.715-1.308c.012-.027 0-.059-.024-.07a7.3 7.3 0 0 1-1.092-.585c-.028-.018-.03-.062-.005-.083q.111-.094.217-.192a.04.04 0 0 1 .046-.006c2.29 1.176 4.771 1.176 7.035 0a.04.04 0 0 1 .046.006q.106.098.218.192c.025.02.023.065-.004.083q-.523.344-1.093.585c-.025.01-.036.043-.024.07q.316.687.715 1.308.018.027.05.018a11.1 11.1 0 0 0 3.5-1.987.05.05 0 0 0 .019-.036c.292-3.396-.49-6.346-2.07-8.961a.04.04 0 0 0-.018-.019m-7.174 7.19c-.69 0-1.258-.712-1.258-1.586s.558-1.587 1.258-1.587c.707 0 1.27.719 1.259 1.587 0 .874-.558 1.587-1.259 1.587m4.652 0c-.69 0-1.258-.712-1.258-1.586s.557-1.587 1.258-1.587c.707 0 1.27.719 1.258 1.587 0 .874-.551 1.587-1.258 1.587"
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
        d: "M14.648 8.35 10.797 4.5h-.047v3.85zM9.25 4.5H5.918v11h9V9.85H9.25zM16.418 8l-5-5h-7v14h12z",
        clipRule: "evenodd"
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
        fill: "#fff",
        fillRule: "evenodd",
        d: "M3 12.25V18h13.5v-5.75H15v4.25H4.5v-4.25zm11.28-2.47-1.06-1.06-2.72 2.72V3.25H9v8.19L6.28 8.72 5.22 9.78l4.53 4.53z",
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
        fill: "#fff",
        d: "M7.572 7.014a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.877M7.572 11.94a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.876M7.572 16.864a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876M12.89 7.014a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.877M12.89 11.94a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.876M12.89 16.864a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876"
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
        d: "m5.285 12.884 6.53-6.531 2.254 2.253-6.531 6.531-2.878.618zM14.674 8.001l-2.253-2.253 1.502-1.503L16.176 6.5z"
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
        d: "M15.01 6.1H4.99L10 9.68zM3.5 6.88v7.22h13V6.88L10 11.521zM2 15.6v-11h16v11z",
        clipRule: "evenodd"
      }
    )
  }
), Gi = (e) => /* @__PURE__ */ i.jsx(
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
        d: "M12.608 6.75h-5.19v-1.5h7.75V13h-1.5V7.81l-7.72 7.72-1.06-1.06z",
        clipRule: "evenodd"
      }
    )
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
        d: "M12.42 5.797c-.93 0-1.194.413-1.194 1.322v1.5H13.7l-.244 2.432h-2.23v7.368h-2.96V11.05H6.268V8.619h1.997V7.161c0-2.453.984-3.742 3.742-3.742.592 0 1.3.046 1.724.106v2.282"
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
        d: "M4.51 3C3.675 3 3 3.692 3 4.545V16.6c0 .455.36.824.805.824h6.238a.815.815 0 0 0 .806-.824v-6.006c1.175 0 2.128.937 2.128 2.093v2.335c0 1.092.9 1.978 2.011 1.978S17 16.114 17 15.022V8.24c0-.832-.336-1.631-.935-2.22L13.64 3.636l-.55.542 1.845 1.814c-.754.133-1.33.832-1.33 1.675 0 .937.712 1.697 1.591 1.697.39 0 .748-.15 1.024-.399v6.057c0 .67-.552 1.212-1.233 1.212-.68 0-1.232-.542-1.232-1.212v-2.335c0-1.579-1.302-2.859-2.908-2.859V4.545C10.849 3.692 10.173 3 9.34 3zm.805 1.485a.826.826 0 0 0-.83.821v1.54c0 .453.372.82.83.82h3.218c.459 0 .83-.367.83-.82v-1.54a.826.826 0 0 0-.83-.821zm9.882 3.962c-.404 0-.732-.35-.732-.78s.328-.78.732-.78.732.349.732.78c0 .43-.328.78-.732.78",
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
        d: "M9.5 10.575v1.742a9.7 9.7 0 0 0-2.367.383 8.6 8.6 0 0 1-.355-2.125zm-2.005 3.061a8.7 8.7 0 0 1 2.005-.318v2.672c-.697-.457-1.462-1.21-2.005-2.354m-1.718-3.061c.04.93.19 1.75.416 2.472a7.2 7.2 0 0 0-1.45.852 6.47 6.47 0 0 1-1.224-3.324zm.775 3.407c-.44.199-.825.43-1.158.679a6.5 6.5 0 0 0 2.934 1.697 6.9 6.9 0 0 1-1.776-2.376m5.953-.346a8.7 8.7 0 0 0-2.005-.318v2.672c.697-.457 1.462-1.21 2.005-2.354m-2.005-1.32c.884.038 1.67.176 2.367.384.19-.617.317-1.323.355-2.125H10.5zm1.172 4.041a6.9 6.9 0 0 0 1.776-2.375c.44.199.825.43 1.158.679a6.5 6.5 0 0 1-2.934 1.696m2.135-3.31a7.2 7.2 0 0 1 1.45.852 6.47 6.47 0 0 0 1.224-3.324h-2.258c-.04.93-.19 1.75-.416 2.472m-.585-3.472H10.5V7.833a9.7 9.7 0 0 0 2.367-.384c.19.618.317 1.323.355 2.126m-.717-3.062a8.7 8.7 0 0 1-2.005.319V4.159c.697.457 1.462 1.21 2.005 2.354m.943-.345a6.9 6.9 0 0 0-1.776-2.376c1.128.3 2.135.894 2.934 1.697a6.2 6.2 0 0 1-1.158.679m.359.935a7.2 7.2 0 0 0 1.45-.852 6.47 6.47 0 0 1 1.224 3.324h-2.258c-.04-.93-.19-1.75-.416-2.472M9.5 6.832V4.159c-.697.457-1.462 1.21-2.005 2.354.588.17 1.254.284 2.005.319m0 1.001a9.7 9.7 0 0 1-2.367-.384 8.6 8.6 0 0 0-.355 2.126H9.5zm-3.307-.73a9.6 9.6 0 0 0-.416 2.472H3.52A6.47 6.47 0 0 1 4.743 6.25c.417.317.899.608 1.45.852m.36-.935c-.442-.2-.826-.43-1.16-.68a6.5 6.5 0 0 1 2.935-1.696 6.9 6.9 0 0 0-1.776 2.376M10 18.075a8 8 0 1 0 0-16 8 8 0 0 0 0 16",
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
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.603 7.94c-.67-.644-1.517-.975-2.466-.975-1.678 0-3.1 1.143-3.608 2.687-.13.39-.204.807-.204 1.24 0 .434.07.851.204 1.241.509 1.544 1.93 2.687 3.608 2.687.868 0 1.603-.239 2.182-.629a3.02 3.02 0 0 0 1.287-1.939h-3.47V9.81h6.06c.063.396.101.802.101 1.23 0 1.977-.697 3.645-1.909 4.777-1.061.992-2.514 1.577-4.251 1.577-2.515 0-4.686-1.463-5.742-3.586a6.48 6.48 0 0 1 0-5.829c1.056-2.123 3.227-3.585 5.742-3.585 1.737 0 3.19.644 4.3 1.695z",
        clipRule: "evenodd"
      }
    )
  }
), es = (e) => /* @__PURE__ */ i.jsx(
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
        d: "M16.918 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m1.5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-9 1.469v.133h1.48v-.133q.005-.383.098-.645a1.3 1.3 0 0 1 .293-.46q.2-.2.508-.384.367-.218.637-.488.27-.273.418-.625.152-.356.152-.812 0-.684-.34-1.168a2.13 2.13 0 0 0-.937-.739q-.598-.257-1.375-.257-.706 0-1.293.254-.585.25-.941.761-.356.508-.375 1.29h1.593q.012-.321.157-.536a.9.9 0 0 1 .37-.328 1.06 1.06 0 0 1 .481-.113q.262 0 .477.11a.86.86 0 0 1 .347.312.86.86 0 0 1 .13.472q0 .255-.114.461-.113.204-.305.371a4 4 0 0 1-.433.325 2.7 2.7 0 0 0-.555.453q-.23.25-.352.656-.117.406-.12 1.09m.106 2.36a.92.92 0 0 0 .668.273q.25 0 .46-.125.212-.13.34-.34a.897.897 0 0 0-.149-1.129.9.9 0 0 0-.651-.274.92.92 0 0 0-.668.274.88.88 0 0 0-.27.656.9.9 0 0 0 .27.664",
        clipRule: "evenodd"
      }
    )
  }
), ns = (e) => /* @__PURE__ */ i.jsxs(
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
), rs = (e) => /* @__PURE__ */ i.jsx(
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
), os = (e) => /* @__PURE__ */ i.jsxs(
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
        fill: "currentColor",
        d: "M9.214 1.588q.923 0 1.73.349a4.4 4.4 0 0 1 1.428.957q.616.608.957 1.421.349.807.349 1.73 0 1.388-.827 2.516-.82 1.12-2.359 1.77l1.695 1.702q.144.15.144.335a.43.43 0 0 1-.137.328l-1.743 1.737 1.251 1.237a.46.46 0 0 1 .137.328.44.44 0 0 1-.137.335l-2.16 2.16a.4.4 0 0 1-.321.123.45.45 0 0 1-.294-.123l-1.183-1.155a.8.8 0 0 1-.164-.24.8.8 0 0 1-.048-.273v-6.63a4.5 4.5 0 0 1-1.483-.971 4.47 4.47 0 0 1-1.306-3.179 4.4 4.4 0 0 1 1.299-3.158q.615-.616 1.422-.957a4.5 4.5 0 0 1 1.75-.342m0 4.15q.491 0 .848-.35.355-.354.355-.854 0-.492-.355-.847a1.16 1.16 0 0 0-.848-.356 1.15 1.15 0 0 0-.855.356 1.15 1.15 0 0 0-.348.847q0 .5.348.855.356.348.855.348"
      }
    )
  }
), ss = (e) => /* @__PURE__ */ i.jsxs(
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
        fill: "#fff",
        d: "M2 6a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2M2 14a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2"
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
        d: "m17 7.862-1.78-4.45H4.78L3 7.862v.08c0 .34.099.841.407 1.27.113.155.25.298.417.419v6.957h12.353V9.631a1.9 1.9 0 0 0 .416-.42A2.25 2.25 0 0 0 17 7.941zm-1.647 2.105a2.5 2.5 0 0 1-.412.033c-.789 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782a2.5 2.5 0 0 1-.412-.033v3.432h10.706zM13.706 7.94c0 .209.066.53.252.789.17.237.459.446.983.446.525 0 .813-.209.984-.446.165-.23.235-.51.249-.716l-.03-.073zm.956-3.706 1.153 2.883h-2.19l-.641-2.883zm-1.881 2.883-.64-2.883h-1.73v2.883zm-5.562 0 .64-2.883h1.73v2.883zm-.203-2.883-.64 2.883H4.185l1.153-2.883zm-3.19 3.78.03-.074h2.438c0 .209-.066.53-.252.789-.17.237-.459.446-.983.446-.525 0-.813-.209-.984-.446a1.43 1.43 0 0 1-.249-.716m5.51.715a1.43 1.43 0 0 0 .252-.789h-2.47c0 .209.066.53.251.789.171.237.46.446.984.446.525 0 .813-.209.983-.446m3.294 0c.186-.258.252-.58.252-.789h-2.47c0 .209.066.53.252.789.17.237.458.446.983.446s.813-.209.983-.446",
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
        d: "M4.868 6.582h11.1v1.5h-11.1zm0 3.377h11.1v1.5h-11.1zm11.1 3.377h-11.1v1.5h11.1z",
        clipRule: "evenodd"
      }
    )
  }
), us = (e) => /* @__PURE__ */ i.jsxs(
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
        d: "M15.918 14.994v.752q-.519.36-1.08.618A7.003 7.003 0 0 1 6.968 5.05a7 7 0 0 1 8.95-.796v.752a4.979 4.979 0 0 0-3.293 1.459 5 5 0 0 0 3.293 8.53m-4.353-.398q.495.493 1.059.859a5.5 5.5 0 1 1 0-10.91q-.564.366-1.06.859a6.5 6.5 0 0 0 0 9.192",
        clipRule: "evenodd"
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
        d: "M13.283 6.175a4.643 4.643 0 1 0-6.566 6.567l-.708.707a5.644 5.644 0 1 1 7.982 0l-.708-.707a4.644 4.644 0 0 0 0-6.567m-5.097 1.47a2.565 2.565 0 0 1 3.628 3.627l.707.707a3.565 3.565 0 1 0-5.042 0l.707-.707a2.565 2.565 0 0 1 0-3.627M10 10.959a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 .667-1.5 6h3z",
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
        stroke: "#000",
        strokeWidth: 1.5,
        d: "M16 6.5 10 3 4 6.5m12 0v7L10 17m6-10.5L10 10m0 7-6-3.5v-7M10 17v-7M4 6.5l6 3.5"
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
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.899 5.261a1 1 0 0 1 1 1v.729H2.102v2.055h15.797v4.694a1 1 0 0 1-1 1H3.102a1 1 0 0 1-1-1V6.261a1 1 0 0 1 1-1zm-7.13 7.284h7v1h-7z",
        clipRule: "evenodd"
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
        fill: "#fff",
        d: "M11.882 15.626a2.896 2.896 0 0 0 .241-3.821l3.896-5.009.957.957L18 6.73 13.27 2l-1.024 1.024.958.957-5.009 3.896a2.896 2.896 0 0 0-3.82.242zM3.536 15.44C2.716 16.26 2.17 17.489 2 18c.512-.17 1.74-.717 2.56-1.536l3.129-3.13-1.024-1.023z"
      }
    )
  }
), ms = (e) => /* @__PURE__ */ i.jsxs(
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
), gs = (e) => /* @__PURE__ */ i.jsx(
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
), xs = (e) => /* @__PURE__ */ i.jsx(
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
        fillRule: "evenodd",
        d: "M2 10.046 3.975 3l1.864 2.016a7.458 7.458 0 1 1-2.586 7.787l1.762-.354.03.099a5.666 5.666 0 1 0 2.017-6.211l2.117 2.289z",
        clipRule: "evenodd"
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
        d: "M2.418 7h1.5V3.5h3.5V2h-5zm11-5v1.5h3.5V7h1.5V2zm-9.5 11h-1.5v5h5v-1.5h-3.5zm9.5 5v-1.5h3.5V13h1.5v5zm-3.75-4v-3.25h-3.25v-1.5h3.25V6h1.5v3.25h3.25v1.5h-3.25V14z",
        clipRule: "evenodd"
      }
    )
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
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13.918 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-.677 4.383a5.5 5.5 0 1 1 1.06-1.06l2.648 2.647-1.061 1.06z",
        clipRule: "evenodd"
      }
    )
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
        d: "M11.529 15.925 9.419 11 4.493 8.89 2.418 8l2.142-.714 11.08-3.693L17.418 3l-.593 1.779-3.693 11.08L12.418 18zm-1.71-6.386L6.635 8.175l6.82-2.273zm1.06 1.061 1.364 3.183 2.273-6.82z",
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
        d: "M2.418 6.374v7.252c0 1.48 1.218 2.68 2.72 2.68h10.56c1.503 0 2.72-1.2 2.72-2.68V6.374c0-1.48-1.217-2.68-2.72-2.68H5.138c-1.502 0-2.72 1.2-2.72 2.68m4 .473a.794.794 0 0 0-.8-.789c-.442 0-.8.353-.8.789 0 .435.359.788.8.788s.8-.353.8-.788m-.8 5.513c.442 0 .8.353.8.788a.794.794 0 0 1-.8.789.794.794 0 0 1-.8-.789c0-.435.359-.788.8-.788m10.4-2.36a.794.794 0 0 0-.8-.788c-.441 0-.8.353-.8.788s.359.788.8.788.8-.353.8-.788m-7.2-3.942h6.4c.442 0 .8.353.8.789a.794.794 0 0 1-.8.788h-6.4a.794.794 0 0 1-.8-.788c0-.436.359-.789.8-.789m6.4 6.302h-6.4c-.441 0-.8.353-.8.788s.359.789.8.789h6.4c.442 0 .8-.353.8-.789a.794.794 0 0 0-.8-.788m-9.6-3.148h6.4c.442 0 .8.353.8.788a.794.794 0 0 1-.8.788h-6.4a.794.794 0 0 1-.8-.788c0-.435.359-.788.8-.788",
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
        d: "M12.775 5.204a5.5 5.5 0 0 0-1.341-.537L11 2.5H9l-.443 2.214c-.444.128-.866.31-1.257.54L5.404 3.99 3.99 5.404l1.283 1.925q-.32.571-.497 1.216L2.5 9v2l2.276.455q.178.645.497 1.216L3.99 14.596l1.414 1.414L7.3 14.746c.391.23.813.412 1.257.54L9 17.5h2l.434-2.167c.474-.12.925-.302 1.341-.537l1.821 1.214 1.414-1.414-1.195-1.793c.253-.427.45-.891.581-1.382L17.5 11V9l-2.104-.42a5.5 5.5 0 0 0-.581-1.383l1.195-1.793-1.414-1.414zm-.59 2.692a2.976 2.976 0 1 0-4.208 4.208 2.976 2.976 0 0 0 4.209-4.208",
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
          d: "M4 6.234a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V10.5L14 9v5.734a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.769l-1.516 1.5z"
        }
      ),
      /* @__PURE__ */ i.jsx("path", { stroke: "#000", strokeWidth: 1.25, d: "M11 3h5v5" }),
      /* @__PURE__ */ i.jsx("path", { stroke: "#000", strokeWidth: 1.5, d: "m16 3-8 8" })
    ]
  }
), Ps = (e) => /* @__PURE__ */ i.jsx(
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
        d: "M9.418 3.25h-5.75v13.5h5.75v-1.5h-4.25V4.75h4.25zm4.53 11.28-1.06-1.06 2.72-2.72h-8.19v-1.5h8.19l-2.72-2.72 1.06-1.06L18.48 10z",
        clipRule: "evenodd"
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
        d: "M16.539 10.75H4.298v-1.5h12.24z",
        clipRule: "evenodd"
      }
    )
  }
), As = (e) => /* @__PURE__ */ i.jsxs(
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
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.668 4.75h-5.25v-1.5h6.75V12h2.25l-1.125 1.5-.937 1.25-.938 1.25-.937-1.25-.938-1.25-1.125-1.5h2.25zM5.418 4l.938 1.25.937 1.25L8.418 8h-2.25v7.25h5.25v1.5h-6.75V8h-2.25l1.125-1.5.938-1.25z",
        clipRule: "evenodd"
      }
    )
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
        d: "m12.28 2.856-6.71 8.887h4.134l-1.424 6.2 6.887-8.71h-4.322z",
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
        fill: "#fff",
        fillRule: "evenodd",
        d: "M7.271 3.521c-.376.377-.521.902-.521 1.479H3v1h14V5h-3.75c0-.577-.145-1.102-.521-1.479C12.352 3.145 11.827 3 11.25 3h-2.5c-.577 0-1.102.145-1.479.521m.708.708c-.124.123-.229.348-.229.771h4.5c0-.423-.105-.648-.229-.771-.123-.124-.348-.229-.771-.229h-2.5c-.423 0-.648.105-.771.229M5.5 18l-1-11h11l-1 11zm7.58-10.006a.5.5 0 0 1 .47.53l-.489 8.022a.5.5 0 0 1-.998-.061l.488-8.022a.5.5 0 0 1 .53-.47m-6.629.53a.5.5 0 0 1 .998-.061l.488 8.022a.5.5 0 0 1-.998.06zM10 7.993a.5.5 0 0 1 .5.5v8.021a.5.5 0 0 1-1 0v-8.02a.5.5 0 0 1 .5-.5",
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
        d: "m4.662 2.789-.985 2.515v10.281h3.5v1.86h1.97l1.859-1.86h2.844l3.827-3.828V2.79zM16.365 11.1l-2.188 2.187h-3.5l-1.86 1.86v-1.86H5.866V4.101h10.5zm-2.188-4.484v3.828h-1.312V6.617zm-3.5 0v3.828H9.365V6.617z",
        clipRule: "evenodd"
      }
    )
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
        fill: "#fff",
        fillRule: "evenodd",
        d: "M4 11.445v5.11h12v-5.11h-1.333v3.777H5.333v-3.777zM5.973 7.47l.943.943 2.418-2.417v7.28h1.333v-7.28l2.417 2.417.943-.943L10 3.444z",
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
        d: "M5 6.05c0 .443.39.802.87.802H17V16H5.495C4.117 16 3 14.97 3 13.698V6.302C3 5.031 4.117 4 5.495 4H14.5v1.247H5.87c-.48 0-.87.36-.87.802m7 5.45a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0",
        clipRule: "evenodd"
      }
    )
  }
), Bs = (e) => /* @__PURE__ */ i.jsx(
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
        d: "M18 16.427 10 2.57 2 16.427zm-7.322-4.333v-5.77H9.216v5.77zm-.731 3.087a1.089 1.089 0 1 0 0-2.178 1.089 1.089 0 0 0 0 2.178",
        clipRule: "evenodd"
      }
    )
  }
), zs = (e) => /* @__PURE__ */ i.jsxs(
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
), Fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Add: Ci,
  AirDropper: Si,
  Apple: Ri,
  ArrowDown: Ei,
  ArrowRight: ji,
  Bridge: Pi,
  Checkmark: Ti,
  ChevronDown: Mi,
  ChevronLeft: Ai,
  ChevronRight: _i,
  ChevronUp: Oi,
  Close: Ni,
  Contacts: Li,
  ContextMenu: ki,
  Contract: Di,
  Copy: Ii,
  Currency: Bi,
  DashedCircle: Vi,
  Deploy: zi,
  Device: Fi,
  Discord: Hi,
  Docs: qi,
  Download: Wi,
  Drag: $i,
  Edit: Ui,
  Email: Yi,
  Expand: Gi,
  ExternalLink: Ki,
  Facebook: Xi,
  GasTank: Zi,
  Globe: Ji,
  Google: Qi,
  Grid: es,
  Help: ts,
  Hidden: ns,
  Home: rs,
  Indexer: os,
  Key: is,
  Link: ss,
  List: ls,
  Marketplaces: as,
  Menu: cs,
  Minter: us,
  Moon: ds,
  Network: fs,
  Node: vs,
  Payments: hs,
  Pin: ps,
  Profile: ms,
  QrCode: gs,
  Receive: xs,
  Refresh: ws,
  Relayer: ys,
  Scan: bs,
  Search: Cs,
  Send: Ss,
  Sequence: Rs,
  SequenceBoilerplateLogo: zs,
  Settings: Es,
  Share: js,
  Shield: Ps,
  Signout: Ts,
  Subtract: Ms,
  Sun: As,
  Swap: _s,
  Transaction: Os,
  Trash: Ns,
  Twitch: Ls,
  Upload: ks,
  Visible: Ds,
  Wallet: Is,
  WalletConnect: Bs,
  Warning: Vs
}, Symbol.toStringTag, { value: "Module" })), Yt = Fs;
function ct({
  name: e,
  alt: t = void 0,
  className: n = "",
  ...r
}) {
  const o = Yt == null ? void 0 : Yt[e];
  return /* @__PURE__ */ i.jsx(
    wn,
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
function Hs(e) {
  const { children: t, subvariants: n, variant: r, ...o } = e;
  return /* @__PURE__ */ i.jsxs(
    "summary",
    {
      ...de("card-summary", r, n),
      ...o,
      children: [
        t,
        " ",
        /* @__PURE__ */ i.jsx(ct, { name: "ChevronDown", width: "20", "data-arrow": !0 })
      ]
    }
  );
}
function qs(e) {
  const { children: t, subvariants: n, variant: r, ...o } = e;
  return /* @__PURE__ */ i.jsx("div", { ...de("card-body", r, n), ...o, children: t });
}
function Ws(e, t) {
  const { children: n, subvariants: r, variant: o, ...s } = e;
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: t,
      ...de("card", o, r),
      ...s,
      children: n
    }
  );
}
const q1 = Object.assign(Je(Ws), {
  Summary: Hs,
  Collapsable: wi,
  Body: qs
});
function W1() {
  return /* @__PURE__ */ i.jsx("hr", { className: "w-full border-white/20" });
}
function $s(e) {
  const { children: t, variant: n, subvariants: r } = e;
  return /* @__PURE__ */ i.jsx("h2", { ...de("group-title", n, r), children: t });
}
function Us(e, t) {
  const {
    asChild: n = !1,
    children: r,
    variant: o,
    subvariants: s,
    ...l
  } = e;
  return /* @__PURE__ */ i.jsx(
    wn,
    {
      ref: t,
      fallbackAs: "div",
      asChild: n,
      ...de("group", o, s),
      ...l,
      children: r
    }
  );
}
const $1 = Object.assign(Je(Us), {
  Title: $s
}), Ys = mr(null);
function yr() {
  const e = gr(Ys);
  if (!e)
    throw new Error("useField must be used within a Field");
  return e;
}
function U1(e) {
  const {
    children: t,
    variant: n,
    subvariants: r,
    asChild: o = !1,
    id: s,
    ...l
  } = e, { name: a } = yr();
  return /* @__PURE__ */ i.jsx(
    wn,
    {
      asChild: o,
      fallbackAs: "input",
      name: a,
      id: s || a,
      ...de("input", n, r),
      ...l,
      children: t
    }
  );
}
function Gs(e) {
  const { children: t, variant: n, subvariants: r, ...o } = e;
  function s(l) {
    var c, d;
    const a = (d = (c = l == null ? void 0 : l.target) == null ? void 0 : c.parentNode) == null ? void 0 : d.querySelector("input");
    console.log(a), a && a.focus();
  }
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ...de("segmented-input", n, r),
      ...o,
      children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            tabIndex: -1,
            className: "absolute w-full h-full inset-0 z-0 cursor-text",
            onClick: s,
            "data-focus-button": !0
          }
        ),
        t
      ]
    }
  );
}
function Ks(e) {
  const { children: t, subvariants: n, ...r } = e;
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      ...de("segmented-input-segment", null, n),
      ...r,
      children: t
    }
  );
}
const Y1 = Object.assign(Gs, {
  Segment: Ks
});
function Xs(e, t) {
  const { children: n, variant: r, subvariants: o, ...s } = e, { name: l } = yr();
  return /* @__PURE__ */ i.jsx(
    "label",
    {
      ref: t,
      htmlFor: l,
      ...de("label", r, o),
      ...s,
      children: n
    }
  );
}
const G1 = Je(Xs);
function Zs({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label, o = typeof t == "string" ? null : t.icon;
    return /* @__PURE__ */ i.jsx("option", { value: n, "data-icon": o, children: r }, n);
  });
}
function Kn(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function br(e, t = []) {
  let n = [];
  function r(s, l) {
    const a = u.createContext(l), c = n.length;
    n = [...n, l];
    function d(p) {
      const { scope: g, children: m, ...y } = p, v = (g == null ? void 0 : g[e][c]) || a, x = u.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ i.jsx(v.Provider, { value: x, children: m });
    }
    function h(p, g) {
      const m = (g == null ? void 0 : g[e][c]) || a, y = u.useContext(m);
      if (y) return y;
      if (l !== void 0) return l;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return d.displayName = s + "Provider", [d, h];
  }
  const o = () => {
    const s = n.map((l) => u.createContext(l));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, Js(o, ...t)];
}
function Js(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const l = r.reduce((a, { useScope: c, scopeName: d }) => {
        const p = c(s)[`__scope${d}`];
        return { ...a, ...p };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Qs(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Cr(...e) {
  return (t) => e.forEach((n) => Qs(n, t));
}
function ne(...e) {
  return u.useCallback(Cr(...e), e);
}
var st = u.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = u.Children.toArray(n), s = o.find(el);
  if (s) {
    const l = s.props.children, a = o.map((c) => c === s ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : c);
    return /* @__PURE__ */ i.jsx(on, { ...r, ref: t, children: u.isValidElement(l) ? u.cloneElement(l, void 0, a) : null });
  }
  return /* @__PURE__ */ i.jsx(on, { ...r, ref: t, children: n });
});
st.displayName = "Slot";
var on = u.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (u.isValidElement(n)) {
    const o = nl(n);
    return u.cloneElement(n, {
      ...tl(r, n.props),
      // @ts-ignore
      ref: t ? Cr(t, o) : o
    });
  }
  return u.Children.count(n) > 1 ? u.Children.only(null) : null;
});
on.displayName = "SlotClone";
var Sr = ({ children: e }) => /* @__PURE__ */ i.jsx(i.Fragment, { children: e });
function el(e) {
  return u.isValidElement(e) && e.type === Sr;
}
function tl(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      s(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function nl(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function rl(e) {
  const t = e + "CollectionProvider", [n, r] = br(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (m) => {
    const { scope: y, children: v } = m, x = se.useRef(null), b = se.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ i.jsx(o, { scope: y, itemMap: b, collectionRef: x, children: v });
  };
  l.displayName = t;
  const a = e + "CollectionSlot", c = se.forwardRef(
    (m, y) => {
      const { scope: v, children: x } = m, b = s(a, v), w = ne(y, b.collectionRef);
      return /* @__PURE__ */ i.jsx(st, { ref: w, children: x });
    }
  );
  c.displayName = a;
  const d = e + "CollectionItemSlot", h = "data-radix-collection-item", p = se.forwardRef(
    (m, y) => {
      const { scope: v, children: x, ...b } = m, w = se.useRef(null), C = ne(y, w), R = s(d, v);
      return se.useEffect(() => (R.itemMap.set(w, { ref: w, ...b }), () => void R.itemMap.delete(w))), /* @__PURE__ */ i.jsx(st, { [h]: "", ref: C, children: x });
    }
  );
  p.displayName = d;
  function g(m) {
    const y = s(e + "CollectionConsumer", m);
    return se.useCallback(() => {
      const x = y.collectionRef.current;
      if (!x) return [];
      const b = Array.from(x.querySelectorAll(`[${h}]`));
      return Array.from(y.itemMap.values()).sort(
        (R, E) => b.indexOf(R.ref.current) - b.indexOf(E.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: l, Slot: c, ItemSlot: p },
    g,
    r
  ];
}
function Rr(e, t = []) {
  let n = [];
  function r(s, l) {
    const a = u.createContext(l), c = n.length;
    n = [...n, l];
    const d = (p) => {
      var b;
      const { scope: g, children: m, ...y } = p, v = ((b = g == null ? void 0 : g[e]) == null ? void 0 : b[c]) || a, x = u.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ i.jsx(v.Provider, { value: x, children: m });
    };
    d.displayName = s + "Provider";
    function h(p, g) {
      var v;
      const m = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[c]) || a, y = u.useContext(m);
      if (y) return y;
      if (l !== void 0) return l;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [d, h];
  }
  const o = () => {
    const s = n.map((l) => u.createContext(l));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, ol(o, ...t)];
}
function ol(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const l = r.reduce((a, { useScope: c, scopeName: d }) => {
        const p = c(s)[`__scope${d}`];
        return { ...a, ...p };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var il = u.createContext(void 0);
function sl(e) {
  const t = u.useContext(il);
  return e || t || "ltr";
}
var ll = [
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
], Q = ll.reduce((e, t) => {
  const n = u.forwardRef((r, o) => {
    const { asChild: s, ...l } = r, a = s ? st : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ i.jsx(a, { ...l, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function al(e, t) {
  e && Tt.flushSync(() => e.dispatchEvent(t));
}
function Pe(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function cl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Pe(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var ul = "DismissableLayer", sn = "dismissableLayer.update", dl = "dismissableLayer.pointerDownOutside", fl = "dismissableLayer.focusOutside", Xn, Er = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), yn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: l,
      onDismiss: a,
      ...c
    } = e, d = u.useContext(Er), [h, p] = u.useState(null), g = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = u.useState({}), y = ne(t, (P) => p(P)), v = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(x), w = h ? v.indexOf(h) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, R = w >= b, E = pl((P) => {
      const O = P.target, B = [...d.branches].some((z) => z.contains(O));
      !R || B || (o == null || o(P), l == null || l(P), P.defaultPrevented || a == null || a());
    }, g), T = ml((P) => {
      const O = P.target;
      [...d.branches].some((z) => z.contains(O)) || (s == null || s(P), l == null || l(P), P.defaultPrevented || a == null || a());
    }, g);
    return cl((P) => {
      w === d.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, g), u.useEffect(() => {
      if (h)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Xn = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), Zn(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Xn);
        };
    }, [h, g, n, d]), u.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), Zn());
    }, [h, d]), u.useEffect(() => {
      const P = () => m({});
      return document.addEventListener(sn, P), () => document.removeEventListener(sn, P);
    }, []), /* @__PURE__ */ i.jsx(
      Q.div,
      {
        ...c,
        ref: y,
        style: {
          pointerEvents: C ? R ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Z(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Z(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Z(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
yn.displayName = ul;
var vl = "DismissableLayerBranch", hl = u.forwardRef((e, t) => {
  const n = u.useContext(Er), r = u.useRef(null), o = ne(t, r);
  return u.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ i.jsx(Q.div, { ...e, ref: o });
});
hl.displayName = vl;
function pl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Pe(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          jr(
            dl,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
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
function ml(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Pe(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && jr(fl, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Zn() {
  const e = new CustomEvent(sn);
  document.dispatchEvent(e);
}
function jr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? al(o, s) : o.dispatchEvent(s);
}
var Gt = 0;
function gl() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Jn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Jn()), Gt++, () => {
      Gt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Gt--;
    };
  }, []);
}
function Jn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Kt = "focusScope.autoFocusOnMount", Xt = "focusScope.autoFocusOnUnmount", Qn = { bubbles: !1, cancelable: !0 }, xl = "FocusScope", Pr = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...l
  } = e, [a, c] = u.useState(null), d = Pe(o), h = Pe(s), p = u.useRef(null), g = ne(t, (v) => c(v)), m = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let v = function(C) {
        if (m.paused || !a) return;
        const R = C.target;
        a.contains(R) ? p.current = R : Le(p.current, { select: !0 });
      }, x = function(C) {
        if (m.paused || !a) return;
        const R = C.relatedTarget;
        R !== null && (a.contains(R) || Le(p.current, { select: !0 }));
      }, b = function(C) {
        if (document.activeElement === document.body)
          for (const E of C)
            E.removedNodes.length > 0 && Le(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", x);
      const w = new MutationObserver(b);
      return a && w.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", x), w.disconnect();
      };
    }
  }, [r, a, m.paused]), u.useEffect(() => {
    if (a) {
      tr.add(m);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const b = new CustomEvent(Kt, Qn);
        a.addEventListener(Kt, d), a.dispatchEvent(b), b.defaultPrevented || (wl(Rl(Tr(a)), { select: !0 }), document.activeElement === v && Le(a));
      }
      return () => {
        a.removeEventListener(Kt, d), setTimeout(() => {
          const b = new CustomEvent(Xt, Qn);
          a.addEventListener(Xt, h), a.dispatchEvent(b), b.defaultPrevented || Le(v ?? document.body, { select: !0 }), a.removeEventListener(Xt, h), tr.remove(m);
        }, 0);
      };
    }
  }, [a, d, h, m]);
  const y = u.useCallback(
    (v) => {
      if (!n && !r || m.paused) return;
      const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
      if (x && b) {
        const w = v.currentTarget, [C, R] = yl(w);
        C && R ? !v.shiftKey && b === R ? (v.preventDefault(), n && Le(C, { select: !0 })) : v.shiftKey && b === C && (v.preventDefault(), n && Le(R, { select: !0 })) : b === w && v.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ i.jsx(Q.div, { tabIndex: -1, ...l, ref: g, onKeyDown: y });
});
Pr.displayName = xl;
function wl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Le(r, { select: t }), document.activeElement !== n) return;
}
function yl(e) {
  const t = Tr(e), n = er(t, e), r = er(t.reverse(), e);
  return [n, r];
}
function Tr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function er(e, t) {
  for (const n of e)
    if (!bl(n, { upTo: t })) return n;
}
function bl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Cl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Le(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Cl(e) && t && e.select();
  }
}
var tr = Sl();
function Sl() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = nr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = nr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function nr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Rl(e) {
  return e.filter((t) => t.tagName !== "A");
}
var le = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, El = u.useId || (() => {
}), jl = 0;
function Mt(e) {
  const [t, n] = u.useState(El());
  return le(() => {
    n((r) => r ?? String(jl++));
  }, [e]), t ? `radix-${t}` : "";
}
const Pl = ["top", "right", "bottom", "left"], ke = Math.min, ce = Math.max, St = Math.round, ht = Math.floor, Se = (e) => ({
  x: e,
  y: e
}), Tl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ml = {
  start: "end",
  end: "start"
};
function ln(e, t, n) {
  return ce(e, ke(t, n));
}
function Te(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Me(e) {
  return e.split("-")[0];
}
function Qe(e) {
  return e.split("-")[1];
}
function bn(e) {
  return e === "x" ? "y" : "x";
}
function Cn(e) {
  return e === "y" ? "height" : "width";
}
function De(e) {
  return ["top", "bottom"].includes(Me(e)) ? "y" : "x";
}
function Sn(e) {
  return bn(De(e));
}
function Al(e, t, n) {
  n === void 0 && (n = !1);
  const r = Qe(e), o = Sn(e), s = Cn(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = Rt(l)), [l, Rt(l)];
}
function _l(e) {
  const t = Rt(e);
  return [an(e), t, an(t)];
}
function an(e) {
  return e.replace(/start|end/g, (t) => Ml[t]);
}
function Ol(e, t, n) {
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
function Nl(e, t, n, r) {
  const o = Qe(e);
  let s = Ol(Me(e), n === "start", r);
  return o && (s = s.map((l) => l + "-" + o), t && (s = s.concat(s.map(an)))), s;
}
function Rt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Tl[t]);
}
function Ll(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Mr(e) {
  return typeof e != "number" ? Ll(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Et(e) {
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
function rr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = De(t), l = Sn(t), a = Cn(l), c = Me(t), d = s === "y", h = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, g = r[a] / 2 - o[a] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: h,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: h,
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
  switch (Qe(t)) {
    case "start":
      m[l] -= g * (n && d ? -1 : 1);
      break;
    case "end":
      m[l] += g * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const kl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: l
  } = n, a = s.filter(Boolean), c = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: h,
    y: p
  } = rr(d, r, c), g = r, m = {}, y = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: x,
      fn: b
    } = a[v], {
      x: w,
      y: C,
      data: R,
      reset: E
    } = await b({
      x: h,
      y: p,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: m,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = w ?? h, p = C ?? p, m = {
      ...m,
      [x]: {
        ...m[x],
        ...R
      }
    }, E && y <= 50 && (y++, typeof E == "object" && (E.placement && (g = E.placement), E.rects && (d = E.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: h,
      y: p
    } = rr(d, g, c)), v = -1);
  }
  return {
    x: h,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: m
  };
};
async function lt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: l,
    elements: a,
    strategy: c
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = Te(t, e), y = Mr(m), x = a[g ? p === "floating" ? "reference" : "floating" : p], b = Et(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: d,
    rootBoundary: h,
    strategy: c
  })), w = p === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), R = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Et(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: C,
    strategy: c
  }) : w);
  return {
    top: (b.top - E.top + y.top) / R.y,
    bottom: (E.bottom - b.bottom + y.bottom) / R.y,
    left: (b.left - E.left + y.left) / R.x,
    right: (E.right - b.right + y.right) / R.x
  };
}
const Dl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: l,
      elements: a,
      middlewareData: c
    } = t, {
      element: d,
      padding: h = 0
    } = Te(e, t) || {};
    if (d == null)
      return {};
    const p = Mr(h), g = {
      x: n,
      y: r
    }, m = Sn(o), y = Cn(m), v = await l.getDimensions(d), x = m === "y", b = x ? "top" : "left", w = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", R = s.reference[y] + s.reference[m] - g[m] - s.floating[y], E = g[m] - s.reference[m], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let P = T ? T[C] : 0;
    (!P || !await (l.isElement == null ? void 0 : l.isElement(T))) && (P = a.floating[C] || s.floating[y]);
    const O = R / 2 - E / 2, B = P / 2 - v[y] / 2 - 1, z = ke(p[b], B), K = ke(p[w], B), U = z, N = P - v[y] - K, L = P / 2 - v[y] / 2 + O, Y = ln(U, L, N), k = !c.arrow && Qe(o) != null && L !== Y && s.reference[y] / 2 - (L < U ? z : K) - v[y] / 2 < 0, V = k ? L < U ? L - U : L - N : 0;
    return {
      [m]: g[m] + V,
      data: {
        [m]: Y,
        centerOffset: L - Y - V,
        ...k && {
          alignmentOffset: V
        }
      },
      reset: k
    };
  }
}), Il = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: l,
        initialPlacement: a,
        platform: c,
        elements: d
      } = t, {
        mainAxis: h = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: v = !0,
        ...x
      } = Te(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const b = Me(o), w = De(a), C = Me(a) === a, R = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), E = g || (C || !v ? [Rt(a)] : _l(a)), T = y !== "none";
      !g && T && E.push(...Nl(a, v, y, R));
      const P = [a, ...E], O = await lt(t, x), B = [];
      let z = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (h && B.push(O[b]), p) {
        const L = Al(o, l, R);
        B.push(O[L[0]], O[L[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: B
      }], !B.every((L) => L <= 0)) {
        var K, U;
        const L = (((K = s.flip) == null ? void 0 : K.index) || 0) + 1, Y = P[L];
        if (Y)
          return {
            data: {
              index: L,
              overflows: z
            },
            reset: {
              placement: Y
            }
          };
        let k = (U = z.filter((V) => V.overflows[0] <= 0).sort((V, _) => V.overflows[1] - _.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!k)
          switch (m) {
            case "bestFit": {
              var N;
              const V = (N = z.filter((_) => {
                if (T) {
                  const G = De(_.placement);
                  return G === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((_) => [_.placement, _.overflows.filter((G) => G > 0).reduce((G, re) => G + re, 0)]).sort((_, G) => _[1] - G[1])[0]) == null ? void 0 : N[0];
              V && (k = V);
              break;
            }
            case "initialPlacement":
              k = a;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
function or(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ir(e) {
  return Pl.some((t) => e[t] >= 0);
}
const Bl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Te(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await lt(t, {
            ...o,
            elementContext: "reference"
          }), l = or(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: ir(l)
            }
          };
        }
        case "escaped": {
          const s = await lt(t, {
            ...o,
            altBoundary: !0
          }), l = or(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: ir(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Vl(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = Me(n), a = Qe(n), c = De(n) === "y", d = ["left", "top"].includes(l) ? -1 : 1, h = s && c ? -1 : 1, p = Te(t, e);
  let {
    mainAxis: g,
    crossAxis: m,
    alignmentAxis: y
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof y == "number" && (m = a === "end" ? y * -1 : y), c ? {
    x: m * h,
    y: g * d
  } : {
    x: g * d,
    y: m * h
  };
}
const zl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: l,
        middlewareData: a
      } = t, c = await Vl(t, e);
      return l === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: l
        }
      };
    }
  };
}, Fl = function(e) {
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
        limiter: a = {
          fn: (x) => {
            let {
              x: b,
              y: w
            } = x;
            return {
              x: b,
              y: w
            };
          }
        },
        ...c
      } = Te(e, t), d = {
        x: n,
        y: r
      }, h = await lt(t, c), p = De(Me(o)), g = bn(p);
      let m = d[g], y = d[p];
      if (s) {
        const x = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", w = m + h[x], C = m - h[b];
        m = ln(w, m, C);
      }
      if (l) {
        const x = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", w = y + h[x], C = y - h[b];
        y = ln(w, y, C);
      }
      const v = a.fn({
        ...t,
        [g]: m,
        [p]: y
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [g]: s,
            [p]: l
          }
        }
      };
    }
  };
}, Hl = function(e) {
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
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: d = !0
      } = Te(e, t), h = {
        x: n,
        y: r
      }, p = De(o), g = bn(p);
      let m = h[g], y = h[p];
      const v = Te(a, t), x = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const C = g === "y" ? "height" : "width", R = s.reference[g] - s.floating[C] + x.mainAxis, E = s.reference[g] + s.reference[C] - x.mainAxis;
        m < R ? m = R : m > E && (m = E);
      }
      if (d) {
        var b, w;
        const C = g === "y" ? "width" : "height", R = ["top", "left"].includes(Me(o)), E = s.reference[p] - s.floating[C] + (R && ((b = l.offset) == null ? void 0 : b[p]) || 0) + (R ? 0 : x.crossAxis), T = s.reference[p] + s.reference[C] + (R ? 0 : ((w = l.offset) == null ? void 0 : w[p]) || 0) - (R ? x.crossAxis : 0);
        y < E ? y = E : y > T && (y = T);
      }
      return {
        [g]: m,
        [p]: y
      };
    }
  };
}, ql = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: l,
        elements: a
      } = t, {
        apply: c = () => {
        },
        ...d
      } = Te(e, t), h = await lt(t, d), p = Me(o), g = Qe(o), m = De(o) === "y", {
        width: y,
        height: v
      } = s.floating;
      let x, b;
      p === "top" || p === "bottom" ? (x = p, b = g === (await (l.isRTL == null ? void 0 : l.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = p, x = g === "end" ? "top" : "bottom");
      const w = v - h.top - h.bottom, C = y - h.left - h.right, R = ke(v - h[x], w), E = ke(y - h[b], C), T = !t.middlewareData.shift;
      let P = R, O = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = C), (r = t.middlewareData.shift) != null && r.enabled.y && (P = w), T && !g) {
        const z = ce(h.left, 0), K = ce(h.right, 0), U = ce(h.top, 0), N = ce(h.bottom, 0);
        m ? O = y - 2 * (z !== 0 || K !== 0 ? z + K : ce(h.left, h.right)) : P = v - 2 * (U !== 0 || N !== 0 ? U + N : ce(h.top, h.bottom));
      }
      await c({
        ...t,
        availableWidth: O,
        availableHeight: P
      });
      const B = await l.getDimensions(a.floating);
      return y !== B.width || v !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function At() {
  return typeof window < "u";
}
function et(e) {
  return Ar(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ee(e) {
  var t;
  return (t = (Ar(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ar(e) {
  return At() ? e instanceof Node || e instanceof ue(e).Node : !1;
}
function xe(e) {
  return At() ? e instanceof Element || e instanceof ue(e).Element : !1;
}
function Re(e) {
  return At() ? e instanceof HTMLElement || e instanceof ue(e).HTMLElement : !1;
}
function sr(e) {
  return !At() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
}
function ut(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = we(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Wl(e) {
  return ["table", "td", "th"].includes(et(e));
}
function _t(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Rn(e) {
  const t = En(), n = xe(e) ? we(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function $l(e) {
  let t = Ie(e);
  for (; Re(t) && !Xe(t); ) {
    if (Rn(t))
      return t;
    if (_t(t))
      return null;
    t = Ie(t);
  }
  return null;
}
function En() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Xe(e) {
  return ["html", "body", "#document"].includes(et(e));
}
function we(e) {
  return ue(e).getComputedStyle(e);
}
function Ot(e) {
  return xe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ie(e) {
  if (et(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    sr(e) && e.host || // Fallback.
    Ee(e)
  );
  return sr(t) ? t.host : t;
}
function _r(e) {
  const t = Ie(e);
  return Xe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Re(t) && ut(t) ? t : _r(t);
}
function at(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = _r(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = ue(o);
  if (s) {
    const a = cn(l);
    return t.concat(l, l.visualViewport || [], ut(o) ? o : [], a && n ? at(a) : []);
  }
  return t.concat(o, at(o, [], n));
}
function cn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Or(e) {
  const t = we(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Re(e), s = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, a = St(n) !== s || St(r) !== l;
  return a && (n = s, r = l), {
    width: n,
    height: r,
    $: a
  };
}
function jn(e) {
  return xe(e) ? e : e.contextElement;
}
function Ge(e) {
  const t = jn(e);
  if (!Re(t))
    return Se(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Or(t);
  let l = (s ? St(n.width) : n.width) / r, a = (s ? St(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: l,
    y: a
  };
}
const Ul = /* @__PURE__ */ Se(0);
function Nr(e) {
  const t = ue(e);
  return !En() || !t.visualViewport ? Ul : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Yl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ue(e) ? !1 : t;
}
function Fe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = jn(e);
  let l = Se(1);
  t && (r ? xe(r) && (l = Ge(r)) : l = Ge(e));
  const a = Yl(s, n, r) ? Nr(s) : Se(0);
  let c = (o.left + a.x) / l.x, d = (o.top + a.y) / l.y, h = o.width / l.x, p = o.height / l.y;
  if (s) {
    const g = ue(s), m = r && xe(r) ? ue(r) : r;
    let y = g, v = cn(y);
    for (; v && r && m !== y; ) {
      const x = Ge(v), b = v.getBoundingClientRect(), w = we(v), C = b.left + (v.clientLeft + parseFloat(w.paddingLeft)) * x.x, R = b.top + (v.clientTop + parseFloat(w.paddingTop)) * x.y;
      c *= x.x, d *= x.y, h *= x.x, p *= x.y, c += C, d += R, y = ue(v), v = cn(y);
    }
  }
  return Et({
    width: h,
    height: p,
    x: c,
    y: d
  });
}
function Pn(e, t) {
  const n = Ot(e).scrollLeft;
  return t ? t.left + n : Fe(Ee(e)).left + n;
}
function Lr(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Pn(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Gl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", l = Ee(r), a = t ? _t(t.floating) : !1;
  if (r === l || a && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Se(1);
  const h = Se(0), p = Re(r);
  if ((p || !p && !s) && ((et(r) !== "body" || ut(l)) && (c = Ot(r)), Re(r))) {
    const m = Fe(r);
    d = Ge(r), h.x = m.x + r.clientLeft, h.y = m.y + r.clientTop;
  }
  const g = l && !p && !s ? Lr(l, c, !0) : Se(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - c.scrollLeft * d.x + h.x + g.x,
    y: n.y * d.y - c.scrollTop * d.y + h.y + g.y
  };
}
function Kl(e) {
  return Array.from(e.getClientRects());
}
function Xl(e) {
  const t = Ee(e), n = Ot(e), r = e.ownerDocument.body, o = ce(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = ce(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Pn(e);
  const a = -n.scrollTop;
  return we(r).direction === "rtl" && (l += ce(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: l,
    y: a
  };
}
function Zl(e, t) {
  const n = ue(e), r = Ee(e), o = n.visualViewport;
  let s = r.clientWidth, l = r.clientHeight, a = 0, c = 0;
  if (o) {
    s = o.width, l = o.height;
    const d = En();
    (!d || d && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function Jl(e, t) {
  const n = Fe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Re(e) ? Ge(e) : Se(1), l = e.clientWidth * s.x, a = e.clientHeight * s.y, c = o * s.x, d = r * s.y;
  return {
    width: l,
    height: a,
    x: c,
    y: d
  };
}
function lr(e, t, n) {
  let r;
  if (t === "viewport")
    r = Zl(e, n);
  else if (t === "document")
    r = Xl(Ee(e));
  else if (xe(t))
    r = Jl(t, n);
  else {
    const o = Nr(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Et(r);
}
function kr(e, t) {
  const n = Ie(e);
  return n === t || !xe(n) || Xe(n) ? !1 : we(n).position === "fixed" || kr(n, t);
}
function Ql(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = at(e, [], !1).filter((a) => xe(a) && et(a) !== "body"), o = null;
  const s = we(e).position === "fixed";
  let l = s ? Ie(e) : e;
  for (; xe(l) && !Xe(l); ) {
    const a = we(l), c = Rn(l);
    !c && a.position === "fixed" && (o = null), (s ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ut(l) && !c && kr(e, l)) ? r = r.filter((h) => h !== l) : o = a, l = Ie(l);
  }
  return t.set(e, r), r;
}
function ea(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? _t(t) ? [] : Ql(t, this._c) : [].concat(n), r], a = l[0], c = l.reduce((d, h) => {
    const p = lr(t, h, o);
    return d.top = ce(p.top, d.top), d.right = ke(p.right, d.right), d.bottom = ke(p.bottom, d.bottom), d.left = ce(p.left, d.left), d;
  }, lr(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function ta(e) {
  const {
    width: t,
    height: n
  } = Or(e);
  return {
    width: t,
    height: n
  };
}
function na(e, t, n) {
  const r = Re(t), o = Ee(t), s = n === "fixed", l = Fe(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Se(0);
  if (r || !r && !s)
    if ((et(t) !== "body" || ut(o)) && (a = Ot(t)), r) {
      const g = Fe(t, !0, s, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && (c.x = Pn(o));
  const d = o && !r && !s ? Lr(o, a) : Se(0), h = l.left + a.scrollLeft - c.x - d.x, p = l.top + a.scrollTop - c.y - d.y;
  return {
    x: h,
    y: p,
    width: l.width,
    height: l.height
  };
}
function Zt(e) {
  return we(e).position === "static";
}
function ar(e, t) {
  if (!Re(e) || we(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ee(e) === n && (n = n.ownerDocument.body), n;
}
function Dr(e, t) {
  const n = ue(e);
  if (_t(e))
    return n;
  if (!Re(e)) {
    let o = Ie(e);
    for (; o && !Xe(o); ) {
      if (xe(o) && !Zt(o))
        return o;
      o = Ie(o);
    }
    return n;
  }
  let r = ar(e, t);
  for (; r && Wl(r) && Zt(r); )
    r = ar(r, t);
  return r && Xe(r) && Zt(r) && !Rn(r) ? n : r || $l(e) || n;
}
const ra = async function(e) {
  const t = this.getOffsetParent || Dr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: na(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function oa(e) {
  return we(e).direction === "rtl";
}
const ia = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gl,
  getDocumentElement: Ee,
  getClippingRect: ea,
  getOffsetParent: Dr,
  getElementRects: ra,
  getClientRects: Kl,
  getDimensions: ta,
  getScale: Ge,
  isElement: xe,
  isRTL: oa
};
function sa(e, t) {
  let n = null, r;
  const o = Ee(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function l(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const {
      left: d,
      top: h,
      width: p,
      height: g
    } = e.getBoundingClientRect();
    if (a || t(), !p || !g)
      return;
    const m = ht(h), y = ht(o.clientWidth - (d + p)), v = ht(o.clientHeight - (h + g)), x = ht(d), w = {
      rootMargin: -m + "px " + -y + "px " + -v + "px " + -x + "px",
      threshold: ce(0, ke(1, c)) || 1
    };
    let C = !0;
    function R(E) {
      const T = E[0].intersectionRatio;
      if (T !== c) {
        if (!C)
          return l();
        T ? l(!1, T) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      C = !1;
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
  return l(!0), s;
}
function la(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = jn(e), h = o || s ? [...d ? at(d) : [], ...at(t)] : [];
  h.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), s && b.addEventListener("resize", n);
  });
  const p = d && a ? sa(d, n) : null;
  let g = -1, m = null;
  l && (m = new ResizeObserver((b) => {
    let [w] = b;
    w && w.target === d && m && (m.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var C;
      (C = m) == null || C.observe(t);
    })), n();
  }), d && !c && m.observe(d), m.observe(t));
  let y, v = c ? Fe(e) : null;
  c && x();
  function x() {
    const b = Fe(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, y = requestAnimationFrame(x);
  }
  return n(), () => {
    var b;
    h.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), p == null || p(), (b = m) == null || b.disconnect(), m = null, c && cancelAnimationFrame(y);
  };
}
const aa = zl, ca = Fl, ua = Il, da = ql, fa = Bl, cr = Dl, va = Hl, ha = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ia,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return kl(e, t, {
    ...o,
    platform: s
  });
};
var yt = typeof document < "u" ? di : fi;
function jt(e, t) {
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
        if (!jt(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !jt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ir(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ur(e, t) {
  const n = Ir(e);
  return Math.round(t * n) / n;
}
function Jt(e) {
  const t = u.useRef(e);
  return yt(() => {
    t.current = e;
  }), t;
}
function pa(e) {
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
    transform: a = !0,
    whileElementsMounted: c,
    open: d
  } = e, [h, p] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, m] = u.useState(r);
  jt(g, r) || m(r);
  const [y, v] = u.useState(null), [x, b] = u.useState(null), w = u.useCallback((_) => {
    _ !== T.current && (T.current = _, v(_));
  }, []), C = u.useCallback((_) => {
    _ !== P.current && (P.current = _, b(_));
  }, []), R = s || y, E = l || x, T = u.useRef(null), P = u.useRef(null), O = u.useRef(h), B = c != null, z = Jt(c), K = Jt(o), U = Jt(d), N = u.useCallback(() => {
    if (!T.current || !P.current)
      return;
    const _ = {
      placement: t,
      strategy: n,
      middleware: g
    };
    K.current && (_.platform = K.current), ha(T.current, P.current, _).then((G) => {
      const re = {
        ...G,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: U.current !== !1
      };
      L.current && !jt(O.current, re) && (O.current = re, Tt.flushSync(() => {
        p(re);
      }));
    });
  }, [g, t, n, K, U]);
  yt(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, p((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [d]);
  const L = u.useRef(!1);
  yt(() => (L.current = !0, () => {
    L.current = !1;
  }), []), yt(() => {
    if (R && (T.current = R), E && (P.current = E), R && E) {
      if (z.current)
        return z.current(R, E, N);
      N();
    }
  }, [R, E, N, z, B]);
  const Y = u.useMemo(() => ({
    reference: T,
    floating: P,
    setReference: w,
    setFloating: C
  }), [w, C]), k = u.useMemo(() => ({
    reference: R,
    floating: E
  }), [R, E]), V = u.useMemo(() => {
    const _ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!k.floating)
      return _;
    const G = ur(k.floating, h.x), re = ur(k.floating, h.y);
    return a ? {
      ..._,
      transform: "translate(" + G + "px, " + re + "px)",
      ...Ir(k.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: G,
      top: re
    };
  }, [n, a, k.floating, h.x, h.y]);
  return u.useMemo(() => ({
    ...h,
    update: N,
    refs: Y,
    elements: k,
    floatingStyles: V
  }), [h, N, Y, k, V]);
}
const ma = (e) => {
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
      return r && t(r) ? r.current != null ? cr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? cr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, ga = (e, t) => ({
  ...aa(e),
  options: [e, t]
}), xa = (e, t) => ({
  ...ca(e),
  options: [e, t]
}), wa = (e, t) => ({
  ...va(e),
  options: [e, t]
}), ya = (e, t) => ({
  ...ua(e),
  options: [e, t]
}), ba = (e, t) => ({
  ...da(e),
  options: [e, t]
}), Ca = (e, t) => ({
  ...fa(e),
  options: [e, t]
}), Sa = (e, t) => ({
  ...ma(e),
  options: [e, t]
});
var Ra = "Arrow", Br = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ i.jsx(
    Q.svg,
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
Br.displayName = Ra;
var Ea = Br;
function ja(e) {
  const [t, n] = u.useState(void 0);
  return le(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let l, a;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          l = d.inlineSize, a = d.blockSize;
        } else
          l = e.offsetWidth, a = e.offsetHeight;
        n({ width: l, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Tn = "Popper", [Vr, Nt] = br(Tn), [Pa, zr] = Vr(Tn), Fr = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ i.jsx(Pa, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Fr.displayName = Tn;
var Hr = "PopperAnchor", qr = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = zr(Hr, n), l = u.useRef(null), a = ne(t, l);
    return u.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || l.current);
    }), r ? null : /* @__PURE__ */ i.jsx(Q.div, { ...o, ref: a });
  }
);
qr.displayName = Hr;
var Mn = "PopperContent", [Ta, Ma] = Vr(Mn), Wr = u.forwardRef(
  (e, t) => {
    var M, q, ee, F, W, H;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: l = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: d = [],
      collisionPadding: h = 0,
      sticky: p = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: y,
      ...v
    } = e, x = zr(Mn, n), [b, w] = u.useState(null), C = ne(t, (oe) => w(oe)), [R, E] = u.useState(null), T = ja(R), P = (T == null ? void 0 : T.width) ?? 0, O = (T == null ? void 0 : T.height) ?? 0, B = r + (s !== "center" ? "-" + s : ""), z = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, K = Array.isArray(d) ? d : [d], U = K.length > 0, N = {
      padding: z,
      boundary: K.filter(_a),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: U
    }, { refs: L, floatingStyles: Y, placement: k, isPositioned: V, middlewareData: _ } = pa({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: B,
      whileElementsMounted: (...oe) => la(...oe, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        ga({ mainAxis: o + O, alignmentAxis: l }),
        c && xa({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? wa() : void 0,
          ...N
        }),
        c && ya({ ...N }),
        ba({
          ...N,
          apply: ({ elements: oe, rects: ve, availableWidth: be, availableHeight: me }) => {
            const { width: Ne, height: vt } = ve.reference, je = oe.floating.style;
            je.setProperty("--radix-popper-available-width", `${be}px`), je.setProperty("--radix-popper-available-height", `${me}px`), je.setProperty("--radix-popper-anchor-width", `${Ne}px`), je.setProperty("--radix-popper-anchor-height", `${vt}px`);
          }
        }),
        R && Sa({ element: R, padding: a }),
        Oa({ arrowWidth: P, arrowHeight: O }),
        g && Ca({ strategy: "referenceHidden", ...N })
      ]
    }), [G, re] = Yr(k), fe = Pe(y);
    le(() => {
      V && (fe == null || fe());
    }, [V, fe]);
    const Ae = (M = _.arrow) == null ? void 0 : M.x, _e = (q = _.arrow) == null ? void 0 : q.y, ye = ((ee = _.arrow) == null ? void 0 : ee.centerOffset) !== 0, [Oe, pe] = u.useState();
    return le(() => {
      b && pe(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: V ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Oe,
          "--radix-popper-transform-origin": [
            (F = _.transformOrigin) == null ? void 0 : F.x,
            (W = _.transformOrigin) == null ? void 0 : W.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = _.hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ i.jsx(
          Ta,
          {
            scope: n,
            placedSide: G,
            onArrowChange: E,
            arrowX: Ae,
            arrowY: _e,
            shouldHideArrow: ye,
            children: /* @__PURE__ */ i.jsx(
              Q.div,
              {
                "data-side": G,
                "data-align": re,
                ...v,
                ref: C,
                style: {
                  ...v.style,
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
Wr.displayName = Mn;
var $r = "PopperArrow", Aa = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ur = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Ma($r, r), l = Aa[s.placedSide];
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
          Ea,
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
Ur.displayName = $r;
function _a(e) {
  return e !== null;
}
var Oa = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, b, w;
    const { placement: n, rects: r, middlewareData: o } = t, l = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, a = l ? 0 : e.arrowWidth, c = l ? 0 : e.arrowHeight, [d, h] = Yr(n), p = { start: "0%", center: "50%", end: "100%" }[h], g = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, m = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + c / 2;
    let y = "", v = "";
    return d === "bottom" ? (y = l ? p : `${g}px`, v = `${-c}px`) : d === "top" ? (y = l ? p : `${g}px`, v = `${r.floating.height + c}px`) : d === "right" ? (y = `${-c}px`, v = l ? p : `${m}px`) : d === "left" && (y = `${r.floating.width + c}px`, v = l ? p : `${m}px`), { data: { x: y, y: v } };
  }
});
function Yr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Gr = Fr, Kr = qr, Xr = Wr, Zr = Ur, Na = "Portal", An = u.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = u.useState(!1);
  le(() => s(!0), []);
  const l = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return l ? hi.createPortal(/* @__PURE__ */ i.jsx(Q.div, { ...r, ref: t }), l) : null;
});
An.displayName = Na;
function un({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = La({ defaultProp: t, onChange: n }), s = e !== void 0, l = s ? e : r, a = Pe(n), c = u.useCallback(
    (d) => {
      if (s) {
        const p = typeof d == "function" ? d(e) : d;
        p !== e && a(p);
      } else
        o(d);
    },
    [s, e, o, a]
  );
  return [l, c];
}
function La({
  defaultProp: e,
  onChange: t
}) {
  const n = u.useState(e), [r] = n, o = u.useRef(r), s = Pe(t);
  return u.useEffect(() => {
    o.current !== r && (s(r), o.current = r);
  }, [r, o, s]), n;
}
function ka(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Da = "VisuallyHidden", _n = u.forwardRef(
  (e, t) => /* @__PURE__ */ i.jsx(
    Q.span,
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
_n.displayName = Da;
var Ia = _n, Ba = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, $e = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), mt = {}, Qt = 0, Jr = function(e) {
  return e && (e.host || Jr(e.parentNode));
}, Va = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Jr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, za = function(e, t, n, r) {
  var o = Va(t, Array.isArray(e) ? e : [e]);
  mt[n] || (mt[n] = /* @__PURE__ */ new WeakMap());
  var s = mt[n], l = [], a = /* @__PURE__ */ new Set(), c = new Set(o), d = function(p) {
    !p || a.has(p) || (a.add(p), d(p.parentNode));
  };
  o.forEach(d);
  var h = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (a.has(g))
        h(g);
      else
        try {
          var m = g.getAttribute(r), y = m !== null && m !== "false", v = ($e.get(g) || 0) + 1, x = (s.get(g) || 0) + 1;
          $e.set(g, v), s.set(g, x), l.push(g), v === 1 && y && pt.set(g, !0), x === 1 && g.setAttribute(n, "true"), y || g.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", g, b);
        }
    });
  };
  return h(t), a.clear(), Qt++, function() {
    l.forEach(function(p) {
      var g = $e.get(p) - 1, m = s.get(p) - 1;
      $e.set(p, g), s.set(p, m), g || (pt.has(p) || p.removeAttribute(r), pt.delete(p)), m || p.removeAttribute(n);
    }), Qt--, Qt || ($e = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), mt = {});
  };
}, Fa = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Ba(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), za(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ce = function() {
  return Ce = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ce.apply(this, arguments);
};
function Qr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ha(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var bt = "right-scroll-bar-position", Ct = "width-before-scroll-bar", qa = "with-scroll-bars-hidden", Wa = "--removed-body-scroll-bar-size";
function en(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function $a(e, t) {
  var n = xr(function() {
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
var Ua = typeof window < "u" ? u.useLayoutEffect : u.useEffect, dr = /* @__PURE__ */ new WeakMap();
function Ya(e, t) {
  var n = $a(null, function(r) {
    return e.forEach(function(o) {
      return en(o, r);
    });
  });
  return Ua(function() {
    var r = dr.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), l = n.current;
      o.forEach(function(a) {
        s.has(a) || en(a, null);
      }), s.forEach(function(a) {
        o.has(a) || en(a, l);
      });
    }
    dr.set(n, e);
  }, [e]), n;
}
function Ga(e) {
  return e;
}
function Ka(e, t) {
  t === void 0 && (t = Ga);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var l = t(s, r);
      return n.push(l), function() {
        n = n.filter(function(a) {
          return a !== l;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(s);
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
      var l = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), l = n;
      }
      var c = function() {
        var h = l;
        l = [], h.forEach(s);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), n = {
        push: function(h) {
          l.push(h), d();
        },
        filter: function(h) {
          return l = l.filter(h), n;
        }
      };
    }
  };
  return o;
}
function Xa(e) {
  e === void 0 && (e = {});
  var t = Ka(null);
  return t.options = Ce({ async: !0, ssr: !1 }, e), t;
}
var eo = function(e) {
  var t = e.sideCar, n = Qr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, Ce({}, n));
};
eo.isSideCarExport = !0;
function Za(e, t) {
  return e.useMedium(t), eo;
}
var to = Xa(), tn = function() {
}, Lt = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: tn,
    onWheelCapture: tn,
    onTouchMoveCapture: tn
  }), o = r[0], s = r[1], l = e.forwardProps, a = e.children, c = e.className, d = e.removeScrollBar, h = e.enabled, p = e.shards, g = e.sideCar, m = e.noIsolation, y = e.inert, v = e.allowPinchZoom, x = e.as, b = x === void 0 ? "div" : x, w = e.gapMode, C = Qr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = g, E = Ya([n, t]), T = Ce(Ce({}, C), o);
  return u.createElement(
    u.Fragment,
    null,
    h && u.createElement(R, { sideCar: to, removeScrollBar: d, shards: p, noIsolation: m, inert: y, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    l ? u.cloneElement(u.Children.only(a), Ce(Ce({}, T), { ref: E })) : u.createElement(b, Ce({}, T, { className: c, ref: E }), a)
  );
});
Lt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Lt.classNames = {
  fullWidth: Ct,
  zeroRight: bt
};
var Ja = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Qa() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ja();
  return t && e.setAttribute("nonce", t), e;
}
function ec(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function tc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var nc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Qa()) && (ec(t, n), tc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, rc = function() {
  var e = nc();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, no = function() {
  var e = rc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, oc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, nn = function(e) {
  return parseInt(e || "", 10) || 0;
}, ic = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [nn(n), nn(r), nn(o)];
}, sc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return oc;
  var t = ic(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, lc = no(), Ke = "data-scroll-locked", ac = function(e, t, n, r) {
  var o = e.left, s = e.top, l = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(qa, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Ke, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(bt, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ct, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(bt, " .").concat(bt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ct, " .").concat(Ct, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ke, `] {
    `).concat(Wa, ": ").concat(a, `px;
  }
`);
}, fr = function() {
  var e = parseInt(document.body.getAttribute(Ke) || "0", 10);
  return isFinite(e) ? e : 0;
}, cc = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Ke, (fr() + 1).toString()), function() {
      var e = fr() - 1;
      e <= 0 ? document.body.removeAttribute(Ke) : document.body.setAttribute(Ke, e.toString());
    };
  }, []);
}, uc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  cc();
  var s = u.useMemo(function() {
    return sc(o);
  }, [o]);
  return u.createElement(lc, { styles: ac(s, !t, o, n ? "" : "!important") });
}, dn = !1;
if (typeof window < "u")
  try {
    var gt = Object.defineProperty({}, "passive", {
      get: function() {
        return dn = !0, !0;
      }
    });
    window.addEventListener("test", gt, gt), window.removeEventListener("test", gt, gt);
  } catch {
    dn = !1;
  }
var Ue = dn ? { passive: !1 } : !1, dc = function(e) {
  return e.tagName === "TEXTAREA";
}, ro = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !dc(e) && n[t] === "visible")
  );
}, fc = function(e) {
  return ro(e, "overflowY");
}, vc = function(e) {
  return ro(e, "overflowX");
}, vr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = oo(e, r);
    if (o) {
      var s = io(e, r), l = s[1], a = s[2];
      if (l > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, hc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, pc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, oo = function(e, t) {
  return e === "v" ? fc(t) : vc(t);
}, io = function(e, t) {
  return e === "v" ? hc(t) : pc(t);
}, mc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, gc = function(e, t, n, r, o) {
  var s = mc(e, window.getComputedStyle(t).direction), l = s * r, a = n.target, c = t.contains(a), d = !1, h = l > 0, p = 0, g = 0;
  do {
    var m = io(e, a), y = m[0], v = m[1], x = m[2], b = v - x - s * y;
    (y || b) && oo(e, a) && (p += b, g += y), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (h && (Math.abs(p) < 1 || !o) || !h && (Math.abs(g) < 1 || !o)) && (d = !0), d;
}, xt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, hr = function(e) {
  return [e.deltaX, e.deltaY];
}, pr = function(e) {
  return e && "current" in e ? e.current : e;
}, xc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, wc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, yc = 0, Ye = [];
function bc(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(yc++)[0], s = u.useState(no)[0], l = u.useRef(e);
  u.useEffect(function() {
    l.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Ha([e.lockRef.current], (e.shards || []).map(pr), !0).filter(Boolean);
      return v.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = u.useCallback(function(v, x) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !l.current.allowPinchZoom;
    var b = xt(v), w = n.current, C = "deltaX" in v ? v.deltaX : w[0] - b[0], R = "deltaY" in v ? v.deltaY : w[1] - b[1], E, T = v.target, P = Math.abs(C) > Math.abs(R) ? "h" : "v";
    if ("touches" in v && P === "h" && T.type === "range")
      return !1;
    var O = vr(P, T);
    if (!O)
      return !0;
    if (O ? E = P : (E = P === "v" ? "h" : "v", O = vr(P, T)), !O)
      return !1;
    if (!r.current && "changedTouches" in v && (C || R) && (r.current = E), !E)
      return !0;
    var B = r.current || E;
    return gc(B, x, v, B === "h" ? C : R, !0);
  }, []), c = u.useCallback(function(v) {
    var x = v;
    if (!(!Ye.length || Ye[Ye.length - 1] !== s)) {
      var b = "deltaY" in x ? hr(x) : xt(x), w = t.current.filter(function(E) {
        return E.name === x.type && (E.target === x.target || x.target === E.shadowParent) && xc(E.delta, b);
      })[0];
      if (w && w.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!w) {
        var C = (l.current.shards || []).map(pr).filter(Boolean).filter(function(E) {
          return E.contains(x.target);
        }), R = C.length > 0 ? a(x, C[0]) : !l.current.noIsolation;
        R && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(v, x, b, w) {
    var C = { name: v, delta: x, target: b, should: w, shadowParent: Cc(b) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(R) {
        return R !== C;
      });
    }, 1);
  }, []), h = u.useCallback(function(v) {
    n.current = xt(v), r.current = void 0;
  }, []), p = u.useCallback(function(v) {
    d(v.type, hr(v), v.target, a(v, e.lockRef.current));
  }, []), g = u.useCallback(function(v) {
    d(v.type, xt(v), v.target, a(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Ye.push(s), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", c, Ue), document.addEventListener("touchmove", c, Ue), document.addEventListener("touchstart", h, Ue), function() {
      Ye = Ye.filter(function(v) {
        return v !== s;
      }), document.removeEventListener("wheel", c, Ue), document.removeEventListener("touchmove", c, Ue), document.removeEventListener("touchstart", h, Ue);
    };
  }, []);
  var m = e.removeScrollBar, y = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    y ? u.createElement(s, { styles: wc(o) }) : null,
    m ? u.createElement(uc, { gapMode: e.gapMode }) : null
  );
}
function Cc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Sc = Za(to, bc);
var so = u.forwardRef(function(e, t) {
  return u.createElement(Lt, Ce({}, e, { ref: t, sideCar: Sc }));
});
so.classNames = Lt.classNames;
var Rc = [" ", "Enter", "ArrowUp", "ArrowDown"], Ec = [" ", "Enter"], dt = "Select", [kt, Dt, jc] = rl(dt), [tt, K1] = Rr(dt, [
  jc,
  Nt
]), It = Nt(), [Pc, Be] = tt(dt), [Tc, Mc] = tt(dt), lo = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: l,
    defaultValue: a,
    onValueChange: c,
    dir: d,
    name: h,
    autoComplete: p,
    disabled: g,
    required: m,
    form: y
  } = e, v = It(t), [x, b] = u.useState(null), [w, C] = u.useState(null), [R, E] = u.useState(!1), T = sl(d), [P = !1, O] = un({
    prop: r,
    defaultProp: o,
    onChange: s
  }), [B, z] = un({
    prop: l,
    defaultProp: a,
    onChange: c
  }), K = u.useRef(null), U = x ? y || !!x.closest("form") : !0, [N, L] = u.useState(/* @__PURE__ */ new Set()), Y = Array.from(N).map((k) => k.props.value).join(";");
  return /* @__PURE__ */ i.jsx(Gr, { ...v, children: /* @__PURE__ */ i.jsxs(
    Pc,
    {
      required: m,
      scope: t,
      trigger: x,
      onTriggerChange: b,
      valueNode: w,
      onValueNodeChange: C,
      valueNodeHasChildren: R,
      onValueNodeHasChildrenChange: E,
      contentId: Mt(),
      value: B,
      onValueChange: z,
      open: P,
      onOpenChange: O,
      dir: T,
      triggerPointerDownPosRef: K,
      disabled: g,
      children: [
        /* @__PURE__ */ i.jsx(kt.Provider, { scope: t, children: /* @__PURE__ */ i.jsx(
          Tc,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((k) => {
              L((V) => new Set(V).add(k));
            }, []),
            onNativeOptionRemove: u.useCallback((k) => {
              L((V) => {
                const _ = new Set(V);
                return _.delete(k), _;
              });
            }, []),
            children: n
          }
        ) }),
        U ? /* @__PURE__ */ i.jsxs(
          Ao,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: h,
            autoComplete: p,
            value: B,
            onChange: (k) => z(k.target.value),
            disabled: g,
            form: y,
            children: [
              B === void 0 ? /* @__PURE__ */ i.jsx("option", { value: "" }) : null,
              Array.from(N)
            ]
          },
          Y
        ) : null
      ]
    }
  ) });
};
lo.displayName = dt;
var ao = "SelectTrigger", co = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = It(n), l = Be(ao, n), a = l.disabled || r, c = ne(t, l.onTriggerChange), d = Dt(n), h = u.useRef("touch"), [p, g, m] = _o((v) => {
      const x = d().filter((C) => !C.disabled), b = x.find((C) => C.value === l.value), w = Oo(x, v, b);
      w !== void 0 && l.onValueChange(w.value);
    }), y = (v) => {
      a || (l.onOpenChange(!0), m()), v && (l.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ i.jsx(Kr, { asChild: !0, ...s, children: /* @__PURE__ */ i.jsx(
      Q.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": l.contentId,
        "aria-expanded": l.open,
        "aria-required": l.required,
        "aria-autocomplete": "none",
        dir: l.dir,
        "data-state": l.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": Mo(l.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: Z(o.onClick, (v) => {
          v.currentTarget.focus(), h.current !== "mouse" && y(v);
        }),
        onPointerDown: Z(o.onPointerDown, (v) => {
          h.current = v.pointerType;
          const x = v.target;
          x.hasPointerCapture(v.pointerId) && x.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (y(v), v.preventDefault());
        }),
        onKeyDown: Z(o.onKeyDown, (v) => {
          const x = p.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && g(v.key), !(x && v.key === " ") && Rc.includes(v.key) && (y(), v.preventDefault());
        })
      }
    ) });
  }
);
co.displayName = ao;
var uo = "SelectValue", fo = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: l = "", ...a } = e, c = Be(uo, n), { onValueNodeHasChildrenChange: d } = c, h = s !== void 0, p = ne(t, c.onValueNodeChange);
    return le(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ i.jsx(
      Q.span,
      {
        ...a,
        ref: p,
        style: { pointerEvents: "none" },
        children: Mo(c.value) ? /* @__PURE__ */ i.jsx(i.Fragment, { children: l }) : s
      }
    );
  }
);
fo.displayName = uo;
var Ac = "SelectIcon", _c = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ i.jsx(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
_c.displayName = Ac;
var Oc = "SelectPortal", vo = (e) => /* @__PURE__ */ i.jsx(An, { asChild: !0, ...e });
vo.displayName = Oc;
var He = "SelectContent", ho = u.forwardRef(
  (e, t) => {
    const n = Be(He, e.__scopeSelect), [r, o] = u.useState();
    if (le(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Tt.createPortal(
        /* @__PURE__ */ i.jsx(po, { scope: e.__scopeSelect, children: /* @__PURE__ */ i.jsx(kt.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ i.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ i.jsx(mo, { ...e, ref: t });
  }
);
ho.displayName = He;
var ge = 10, [po, Ve] = tt(He), Nc = "SelectContentImpl", mo = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      //
      // PopperContent props
      side: a,
      sideOffset: c,
      align: d,
      alignOffset: h,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: m,
      sticky: y,
      hideWhenDetached: v,
      avoidCollisions: x,
      //
      ...b
    } = e, w = Be(He, n), [C, R] = u.useState(null), [E, T] = u.useState(null), P = ne(t, (M) => R(M)), [O, B] = u.useState(null), [z, K] = u.useState(
      null
    ), U = Dt(n), [N, L] = u.useState(!1), Y = u.useRef(!1);
    u.useEffect(() => {
      if (C) return Fa(C);
    }, [C]), gl();
    const k = u.useCallback(
      (M) => {
        const [q, ...ee] = U().map((H) => H.ref.current), [F] = ee.slice(-1), W = document.activeElement;
        for (const H of M)
          if (H === W || (H == null || H.scrollIntoView({ block: "nearest" }), H === q && E && (E.scrollTop = 0), H === F && E && (E.scrollTop = E.scrollHeight), H == null || H.focus(), document.activeElement !== W)) return;
      },
      [U, E]
    ), V = u.useCallback(
      () => k([O, C]),
      [k, O, C]
    );
    u.useEffect(() => {
      N && V();
    }, [N, V]);
    const { onOpenChange: _, triggerPointerDownPosRef: G } = w;
    u.useEffect(() => {
      if (C) {
        let M = { x: 0, y: 0 };
        const q = (F) => {
          var W, H;
          M = {
            x: Math.abs(Math.round(F.pageX) - (((W = G.current) == null ? void 0 : W.x) ?? 0)),
            y: Math.abs(Math.round(F.pageY) - (((H = G.current) == null ? void 0 : H.y) ?? 0))
          };
        }, ee = (F) => {
          M.x <= 10 && M.y <= 10 ? F.preventDefault() : C.contains(F.target) || _(!1), document.removeEventListener("pointermove", q), G.current = null;
        };
        return G.current !== null && (document.addEventListener("pointermove", q), document.addEventListener("pointerup", ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", q), document.removeEventListener("pointerup", ee, { capture: !0 });
        };
      }
    }, [C, _, G]), u.useEffect(() => {
      const M = () => _(!1);
      return window.addEventListener("blur", M), window.addEventListener("resize", M), () => {
        window.removeEventListener("blur", M), window.removeEventListener("resize", M);
      };
    }, [_]);
    const [re, fe] = _o((M) => {
      const q = U().filter((W) => !W.disabled), ee = q.find((W) => W.ref.current === document.activeElement), F = Oo(q, M, ee);
      F && setTimeout(() => F.ref.current.focus());
    }), Ae = u.useCallback(
      (M, q, ee) => {
        const F = !Y.current && !ee;
        (w.value !== void 0 && w.value === q || F) && (B(M), F && (Y.current = !0));
      },
      [w.value]
    ), _e = u.useCallback(() => C == null ? void 0 : C.focus(), [C]), ye = u.useCallback(
      (M, q, ee) => {
        const F = !Y.current && !ee;
        (w.value !== void 0 && w.value === q || F) && K(M);
      },
      [w.value]
    ), Oe = r === "popper" ? fn : go, pe = Oe === fn ? {
      side: a,
      sideOffset: c,
      align: d,
      alignOffset: h,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: m,
      sticky: y,
      hideWhenDetached: v,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ i.jsx(
      po,
      {
        scope: n,
        content: C,
        viewport: E,
        onViewportChange: T,
        itemRefCallback: Ae,
        selectedItem: O,
        onItemLeave: _e,
        itemTextRefCallback: ye,
        focusSelectedItem: V,
        selectedItemText: z,
        position: r,
        isPositioned: N,
        searchRef: re,
        children: /* @__PURE__ */ i.jsx(so, { as: st, allowPinchZoom: !0, children: /* @__PURE__ */ i.jsx(
          Pr,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (M) => {
              M.preventDefault();
            },
            onUnmountAutoFocus: Z(o, (M) => {
              var q;
              (q = w.trigger) == null || q.focus({ preventScroll: !0 }), M.preventDefault();
            }),
            children: /* @__PURE__ */ i.jsx(
              yn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: l,
                onFocusOutside: (M) => M.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ i.jsx(
                  Oe,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (M) => M.preventDefault(),
                    ...b,
                    ...pe,
                    onPlaced: () => L(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Z(b.onKeyDown, (M) => {
                      const q = M.ctrlKey || M.altKey || M.metaKey;
                      if (M.key === "Tab" && M.preventDefault(), !q && M.key.length === 1 && fe(M.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(M.key)) {
                        let F = U().filter((W) => !W.disabled).map((W) => W.ref.current);
                        if (["ArrowUp", "End"].includes(M.key) && (F = F.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(M.key)) {
                          const W = M.target, H = F.indexOf(W);
                          F = F.slice(H + 1);
                        }
                        setTimeout(() => k(F)), M.preventDefault();
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
mo.displayName = Nc;
var Lc = "SelectItemAlignedPosition", go = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Be(He, n), l = Ve(He, n), [a, c] = u.useState(null), [d, h] = u.useState(null), p = ne(t, (P) => h(P)), g = Dt(n), m = u.useRef(!1), y = u.useRef(!0), { viewport: v, selectedItem: x, selectedItemText: b, focusSelectedItem: w } = l, C = u.useCallback(() => {
    if (s.trigger && s.valueNode && a && d && v && x && b) {
      const P = s.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), B = s.valueNode.getBoundingClientRect(), z = b.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const W = z.left - O.left, H = B.left - W, oe = P.left - H, ve = P.width + oe, be = Math.max(ve, O.width), me = window.innerWidth - ge, Ne = Kn(H, [
          ge,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ge, me - be)
        ]);
        a.style.minWidth = ve + "px", a.style.left = Ne + "px";
      } else {
        const W = O.right - z.right, H = window.innerWidth - B.right - W, oe = window.innerWidth - P.right - H, ve = P.width + oe, be = Math.max(ve, O.width), me = window.innerWidth - ge, Ne = Kn(H, [
          ge,
          Math.max(ge, me - be)
        ]);
        a.style.minWidth = ve + "px", a.style.right = Ne + "px";
      }
      const K = g(), U = window.innerHeight - ge * 2, N = v.scrollHeight, L = window.getComputedStyle(d), Y = parseInt(L.borderTopWidth, 10), k = parseInt(L.paddingTop, 10), V = parseInt(L.borderBottomWidth, 10), _ = parseInt(L.paddingBottom, 10), G = Y + k + N + _ + V, re = Math.min(x.offsetHeight * 5, G), fe = window.getComputedStyle(v), Ae = parseInt(fe.paddingTop, 10), _e = parseInt(fe.paddingBottom, 10), ye = P.top + P.height / 2 - ge, Oe = U - ye, pe = x.offsetHeight / 2, M = x.offsetTop + pe, q = Y + k + M, ee = G - q;
      if (q <= ye) {
        const W = K.length > 0 && x === K[K.length - 1].ref.current;
        a.style.bottom = "0px";
        const H = d.clientHeight - v.offsetTop - v.offsetHeight, oe = Math.max(
          Oe,
          pe + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (W ? _e : 0) + H + V
        ), ve = q + oe;
        a.style.height = ve + "px";
      } else {
        const W = K.length > 0 && x === K[0].ref.current;
        a.style.top = "0px";
        const oe = Math.max(
          ye,
          Y + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (W ? Ae : 0) + pe
        ) + ee;
        a.style.height = oe + "px", v.scrollTop = q - ye + v.offsetTop;
      }
      a.style.margin = `${ge}px 0`, a.style.minHeight = re + "px", a.style.maxHeight = U + "px", r == null || r(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    g,
    s.trigger,
    s.valueNode,
    a,
    d,
    v,
    x,
    b,
    s.dir,
    r
  ]);
  le(() => C(), [C]);
  const [R, E] = u.useState();
  le(() => {
    d && E(window.getComputedStyle(d).zIndex);
  }, [d]);
  const T = u.useCallback(
    (P) => {
      P && y.current === !0 && (C(), w == null || w(), y.current = !1);
    },
    [C, w]
  );
  return /* @__PURE__ */ i.jsx(
    Dc,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: T,
      children: /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: R
          },
          children: /* @__PURE__ */ i.jsx(
            Q.div,
            {
              ...o,
              ref: p,
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
go.displayName = Lc;
var kc = "SelectPopperPosition", fn = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = ge,
    ...s
  } = e, l = It(n);
  return /* @__PURE__ */ i.jsx(
    Xr,
    {
      ...l,
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
fn.displayName = kc;
var [Dc, On] = tt(He, {}), vn = "SelectViewport", xo = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Ve(vn, n), l = On(vn, n), a = ne(t, s.onViewportChange), c = u.useRef(0);
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ i.jsx(kt.Slot, { scope: n, children: /* @__PURE__ */ i.jsx(
        Q.div,
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
          onScroll: Z(o.onScroll, (d) => {
            const h = d.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: g } = l;
            if (g != null && g.current && p) {
              const m = Math.abs(c.current - h.scrollTop);
              if (m > 0) {
                const y = window.innerHeight - ge * 2, v = parseFloat(p.style.minHeight), x = parseFloat(p.style.height), b = Math.max(v, x);
                if (b < y) {
                  const w = b + m, C = Math.min(y, w), R = w - C;
                  p.style.height = C + "px", p.style.bottom === "0px" && (h.scrollTop = R > 0 ? R : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = h.scrollTop;
          })
        }
      ) })
    ] });
  }
);
xo.displayName = vn;
var wo = "SelectGroup", [Ic, Bc] = tt(wo), Vc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Mt();
    return /* @__PURE__ */ i.jsx(Ic, { scope: n, id: o, children: /* @__PURE__ */ i.jsx(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Vc.displayName = wo;
var yo = "SelectLabel", zc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Bc(yo, n);
    return /* @__PURE__ */ i.jsx(Q.div, { id: o.id, ...r, ref: t });
  }
);
zc.displayName = yo;
var Pt = "SelectItem", [Fc, bo] = tt(Pt), Co = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...l
    } = e, a = Be(Pt, n), c = Ve(Pt, n), d = a.value === r, [h, p] = u.useState(s ?? ""), [g, m] = u.useState(!1), y = ne(
      t,
      (w) => {
        var C;
        return (C = c.itemRefCallback) == null ? void 0 : C.call(c, w, r, o);
      }
    ), v = Mt(), x = u.useRef("touch"), b = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ i.jsx(
      Fc,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: d,
        onItemTextChange: u.useCallback((w) => {
          p((C) => C || ((w == null ? void 0 : w.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ i.jsx(
          kt.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: h,
            children: /* @__PURE__ */ i.jsx(
              Q.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": d && g,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...l,
                ref: y,
                onFocus: Z(l.onFocus, () => m(!0)),
                onBlur: Z(l.onBlur, () => m(!1)),
                onClick: Z(l.onClick, () => {
                  x.current !== "mouse" && b();
                }),
                onPointerUp: Z(l.onPointerUp, () => {
                  x.current === "mouse" && b();
                }),
                onPointerDown: Z(l.onPointerDown, (w) => {
                  x.current = w.pointerType;
                }),
                onPointerMove: Z(l.onPointerMove, (w) => {
                  var C;
                  x.current = w.pointerType, o ? (C = c.onItemLeave) == null || C.call(c) : x.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Z(l.onPointerLeave, (w) => {
                  var C;
                  w.currentTarget === document.activeElement && ((C = c.onItemLeave) == null || C.call(c));
                }),
                onKeyDown: Z(l.onKeyDown, (w) => {
                  var R;
                  ((R = c.searchRef) == null ? void 0 : R.current) !== "" && w.key === " " || (Ec.includes(w.key) && b(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Co.displayName = Pt;
var it = "SelectItemText", So = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, l = Be(it, n), a = Ve(it, n), c = bo(it, n), d = Mc(it, n), [h, p] = u.useState(null), g = ne(
      t,
      (b) => p(b),
      c.onItemTextChange,
      (b) => {
        var w;
        return (w = a.itemTextRefCallback) == null ? void 0 : w.call(a, b, c.value, c.disabled);
      }
    ), m = h == null ? void 0 : h.textContent, y = u.useMemo(
      () => /* @__PURE__ */ i.jsx("option", { value: c.value, disabled: c.disabled, children: m }, c.value),
      [c.disabled, c.value, m]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: x } = d;
    return le(() => (v(y), () => x(y)), [v, x, y]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(Q.span, { id: c.textId, ...s, ref: g }),
      c.isSelected && l.valueNode && !l.valueNodeHasChildren ? Tt.createPortal(s.children, l.valueNode) : null
    ] });
  }
);
So.displayName = it;
var Ro = "SelectItemIndicator", Eo = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return bo(Ro, n).isSelected ? /* @__PURE__ */ i.jsx(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Eo.displayName = Ro;
var hn = "SelectScrollUpButton", Hc = u.forwardRef((e, t) => {
  const n = Ve(hn, e.__scopeSelect), r = On(hn, e.__scopeSelect), [o, s] = u.useState(!1), l = ne(t, r.onScrollButtonChange);
  return le(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const d = c.scrollTop > 0;
        s(d);
      };
      const c = n.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ i.jsx(
    Po,
    {
      ...e,
      ref: l,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = n;
        a && c && (a.scrollTop = a.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
Hc.displayName = hn;
var pn = "SelectScrollDownButton", jo = u.forwardRef((e, t) => {
  const n = Ve(pn, e.__scopeSelect), r = On(pn, e.__scopeSelect), [o, s] = u.useState(!1), l = ne(t, r.onScrollButtonChange);
  return le(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const d = c.scrollHeight - c.clientHeight, h = Math.ceil(c.scrollTop) < d;
        s(h);
      };
      const c = n.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ i.jsx(
    Po,
    {
      ...e,
      ref: l,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = n;
        a && c && (a.scrollTop = a.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
jo.displayName = pn;
var Po = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Ve("SelectScrollButton", n), l = u.useRef(null), a = Dt(n), c = u.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), le(() => {
    var h;
    const d = a().find((p) => p.ref.current === document.activeElement);
    (h = d == null ? void 0 : d.ref.current) == null || h.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ i.jsx(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Z(o.onPointerDown, () => {
        l.current === null && (l.current = window.setInterval(r, 50));
      }),
      onPointerMove: Z(o.onPointerMove, () => {
        var d;
        (d = s.onItemLeave) == null || d.call(s), l.current === null && (l.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Z(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), qc = "SelectSeparator", Wc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ i.jsx(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Wc.displayName = qc;
var mn = "SelectArrow", To = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = It(n), s = Be(mn, n), l = Ve(mn, n);
    return s.open && l.position === "popper" ? /* @__PURE__ */ i.jsx(Zr, { ...o, ...r, ref: t }) : null;
  }
);
To.displayName = mn;
function Mo(e) {
  return e === "" || e === void 0;
}
var Ao = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = u.useRef(null), s = ne(t, o), l = ka(n);
    return u.useEffect(() => {
      const a = o.current, c = window.HTMLSelectElement.prototype, h = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (l !== n && h) {
        const p = new Event("change", { bubbles: !0 });
        h.call(a, n), a.dispatchEvent(p);
      }
    }, [l, n]), /* @__PURE__ */ i.jsx(_n, { asChild: !0, children: /* @__PURE__ */ i.jsx("select", { ...r, ref: s, defaultValue: n }) });
  }
);
Ao.displayName = "BubbleSelect";
function _o(e) {
  const t = Pe(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (l) => {
      const a = n.current + l;
      t(a), function c(d) {
        n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(a);
    },
    [t]
  ), s = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Oo(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let l = $c(e, Math.max(s, 0));
  o.length === 1 && (l = l.filter((d) => d !== n));
  const c = l.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function $c(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Uc = lo, Yc = co, Gc = fo, Kc = vo, Xc = ho, Zc = xo, Jc = Co, Qc = So, e1 = Eo, t1 = jo, n1 = To;
function r1({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label, o = typeof t == "string" ? null : t.icon;
    return /* @__PURE__ */ i.jsxs(
      Jc,
      {
        value: n,
        className: "min-h-[2rem] px-6 py-3 flex items-center gap-2 hover:outline-none cursor-pointer hover:bg-grey-600",
        children: [
          /* @__PURE__ */ i.jsx(e1, { className: "size-5", children: /* @__PURE__ */ i.jsx(ct, { name: "Checkmark", width: "20" }) }),
          /* @__PURE__ */ i.jsx(Qc, { asChild: !0, children: /* @__PURE__ */ i.jsxs("span", { className: "flex gap-3 items-center text-white", children: [
            o ? /* @__PURE__ */ i.jsx("img", { src: o, className: "size-5", width: "20", alt: "" }) : null,
            /* @__PURE__ */ i.jsx("span", { children: r }),
            " "
          ] }) })
        ]
      },
      n
    );
  });
}
function o1({ items: e, native: t }) {
  return t ? /* @__PURE__ */ i.jsx(Zs, { items: e }) : /* @__PURE__ */ i.jsx(r1, { items: e });
}
function i1(e) {
  const { defaultValue: t, arrowIcon: n = "ChevronDown", children: r } = e;
  return /* @__PURE__ */ i.jsxs(Uc, { defaultValue: t, children: [
    /* @__PURE__ */ i.jsxs(Yc, { className: "flex items-center justify-between w-full bg-transparent border border-grey-500 rounded-[0.5rem] text-gray-200 focus:ring-2 ring-blue-500 px-4 py-3", children: [
      /* @__PURE__ */ i.jsx(Gc, {}),
      /* @__PURE__ */ i.jsx(ct, { name: n, width: "20" })
    ] }),
    /* @__PURE__ */ i.jsx(Kc, { children: /* @__PURE__ */ i.jsxs(Xc, { className: "rounded-[0.5rem] overflow-clip text-white border border-white bg-light_buttonGlass backdrop-blur", children: [
      /* @__PURE__ */ i.jsx(Zc, { className: "flex flex-col", children: r }),
      /* @__PURE__ */ i.jsx(t1, {}),
      /* @__PURE__ */ i.jsx(n1, {})
    ] }) })
  ] });
}
function s1(e, t) {
  const {
    defaultValue: n,
    children: r,
    variant: o,
    subvariants: s,
    arrowIcon: l = "ChevronDown"
  } = e, a = {
    "min-size": "md"
  }, [c, d] = xr(null);
  function h(g) {
    var y, v, x;
    const m = (x = (v = (y = g == null ? void 0 : g.target) == null ? void 0 : y.querySelector("option:checked")) == null ? void 0 : v.dataset) == null ? void 0 : x.icon;
    m && d(m);
  }
  const p = vi((g) => (h({ target: g }), t), []);
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: p,
      ...de(
        "select",
        o,
        Object.assign(a, s)
      ),
      children: [
        c ? /* @__PURE__ */ i.jsx("img", { src: c, width: "20", className: "size-5", alt: "" }) : null,
        /* @__PURE__ */ i.jsx("div", { className: "absolute w-[2.5rem] z-10 right-0 pointer-events-none top-0 bottom-0 items-center justify-center flex cursor-pointer", children: /* @__PURE__ */ i.jsx(ct, { name: l, className: "w-4 h-4 text-white" }) }),
        /* @__PURE__ */ i.jsx("select", { onChange: h, defaultValue: n, children: r })
      ]
    }
  );
}
const l1 = Je(s1);
function a1(e, t) {
  const { native: n = !1, children: r } = e, o = se.isValidElement(r) ? se.cloneElement(r, { native: n }) : r;
  return n ? /* @__PURE__ */ i.jsx(l1, { ref: t, ...e, children: o }) : /* @__PURE__ */ i.jsx(i1, { ref: t, ...e, children: o });
}
const X1 = Object.assign(Je(a1), {
  Options: o1
});
function c1({ to: e }) {
  return /* @__PURE__ */ i.jsx("div", { className: "text-14 font-medium mt-8", children: /* @__PURE__ */ i.jsxs("p", { children: [
    "Want to learn more? Read the",
    "  ",
    /* @__PURE__ */ i.jsx(
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
function u1({
  name: e,
  description: t
}) {
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4 items-center  text-center", children: [
    /* @__PURE__ */ i.jsx(
      ct,
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
function d1(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Nn = (e) => {
  const { present: t, children: n } = e, r = f1(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), s = ne(r.ref, v1(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
Nn.displayName = "Presence";
function f1(e) {
  const [t, n] = u.useState(), r = u.useRef({}), o = u.useRef(e), s = u.useRef("none"), l = e ? "mounted" : "unmounted", [a, c] = d1(l, {
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
  return u.useEffect(() => {
    const d = wt(r.current);
    s.current = a === "mounted" ? d : "none";
  }, [a]), le(() => {
    const d = r.current, h = o.current;
    if (h !== e) {
      const g = s.current, m = wt(d);
      e ? c("MOUNT") : m === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(h && g !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), le(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, p = (m) => {
        const v = wt(r.current).includes(m.animationName);
        if (m.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, g = (m) => {
        m.target === t && (s.current = wt(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        h.clearTimeout(d), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: u.useCallback((d) => {
      d && (r.current = getComputedStyle(d)), n(d);
    }, [])
  };
}
function wt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function v1(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var [Bt, Z1] = Rr("Tooltip", [
  Nt
]), Vt = Nt(), No = "TooltipProvider", h1 = 700, gn = "tooltip.open", [p1, Ln] = Bt(No), Lo = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = h1,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, [l, a] = u.useState(!0), c = u.useRef(!1), d = u.useRef(0);
  return u.useEffect(() => {
    const h = d.current;
    return () => window.clearTimeout(h);
  }, []), /* @__PURE__ */ i.jsx(
    p1,
    {
      scope: t,
      isOpenDelayed: l,
      delayDuration: n,
      onOpen: u.useCallback(() => {
        window.clearTimeout(d.current), a(!1);
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(d.current), d.current = window.setTimeout(
          () => a(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: u.useCallback((h) => {
        c.current = h;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
Lo.displayName = No;
var zt = "Tooltip", [m1, ft] = Bt(zt), ko = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: s,
    disableHoverableContent: l,
    delayDuration: a
  } = e, c = Ln(zt, e.__scopeTooltip), d = Vt(t), [h, p] = u.useState(null), g = Mt(), m = u.useRef(0), y = l ?? c.disableHoverableContent, v = a ?? c.delayDuration, x = u.useRef(!1), [b = !1, w] = un({
    prop: r,
    defaultProp: o,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(gn))) : c.onClose(), s == null || s(P);
    }
  }), C = u.useMemo(() => b ? x.current ? "delayed-open" : "instant-open" : "closed", [b]), R = u.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, x.current = !1, w(!0);
  }, [w]), E = u.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, w(!1);
  }, [w]), T = u.useCallback(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      x.current = !0, w(!0), m.current = 0;
    }, v);
  }, [v, w]);
  return u.useEffect(() => () => {
    m.current && (window.clearTimeout(m.current), m.current = 0);
  }, []), /* @__PURE__ */ i.jsx(Gr, { ...d, children: /* @__PURE__ */ i.jsx(
    m1,
    {
      scope: t,
      contentId: g,
      open: b,
      stateAttribute: C,
      trigger: h,
      onTriggerChange: p,
      onTriggerEnter: u.useCallback(() => {
        c.isOpenDelayed ? T() : R();
      }, [c.isOpenDelayed, T, R]),
      onTriggerLeave: u.useCallback(() => {
        y ? E() : (window.clearTimeout(m.current), m.current = 0);
      }, [E, y]),
      onOpen: R,
      onClose: E,
      disableHoverableContent: y,
      children: n
    }
  ) });
};
ko.displayName = zt;
var xn = "TooltipTrigger", Do = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ft(xn, n), s = Ln(xn, n), l = Vt(n), a = u.useRef(null), c = ne(t, a, o.onTriggerChange), d = u.useRef(!1), h = u.useRef(!1), p = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ i.jsx(Kr, { asChild: !0, ...l, children: /* @__PURE__ */ i.jsx(
      Q.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: Z(e.onPointerMove, (g) => {
          g.pointerType !== "touch" && !h.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), h.current = !0);
        }),
        onPointerLeave: Z(e.onPointerLeave, () => {
          o.onTriggerLeave(), h.current = !1;
        }),
        onPointerDown: Z(e.onPointerDown, () => {
          d.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: Z(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: Z(e.onBlur, o.onClose),
        onClick: Z(e.onClick, o.onClose)
      }
    ) });
  }
);
Do.displayName = xn;
var kn = "TooltipPortal", [g1, x1] = Bt(kn, {
  forceMount: void 0
}), Io = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = ft(kn, t);
  return /* @__PURE__ */ i.jsx(g1, { scope: t, forceMount: n, children: /* @__PURE__ */ i.jsx(Nn, { present: n || s.open, children: /* @__PURE__ */ i.jsx(An, { asChild: !0, container: o, children: r }) }) });
};
Io.displayName = kn;
var Ze = "TooltipContent", Bo = u.forwardRef(
  (e, t) => {
    const n = x1(Ze, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, l = ft(Ze, e.__scopeTooltip);
    return /* @__PURE__ */ i.jsx(Nn, { present: r || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ i.jsx(Vo, { side: o, ...s, ref: t }) : /* @__PURE__ */ i.jsx(w1, { side: o, ...s, ref: t }) });
  }
), w1 = u.forwardRef((e, t) => {
  const n = ft(Ze, e.__scopeTooltip), r = Ln(Ze, e.__scopeTooltip), o = u.useRef(null), s = ne(t, o), [l, a] = u.useState(null), { trigger: c, onClose: d } = n, h = o.current, { onPointerInTransitChange: p } = r, g = u.useCallback(() => {
    a(null), p(!1);
  }, [p]), m = u.useCallback(
    (y, v) => {
      const x = y.currentTarget, b = { x: y.clientX, y: y.clientY }, w = C1(b, x.getBoundingClientRect()), C = S1(b, w), R = R1(v.getBoundingClientRect()), E = j1([...C, ...R]);
      a(E), p(!0);
    },
    [p]
  );
  return u.useEffect(() => () => g(), [g]), u.useEffect(() => {
    if (c && h) {
      const y = (x) => m(x, h), v = (x) => m(x, c);
      return c.addEventListener("pointerleave", y), h.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", y), h.removeEventListener("pointerleave", v);
      };
    }
  }, [c, h, m, g]), u.useEffect(() => {
    if (l) {
      const y = (v) => {
        const x = v.target, b = { x: v.clientX, y: v.clientY }, w = (c == null ? void 0 : c.contains(x)) || (h == null ? void 0 : h.contains(x)), C = !E1(b, l);
        w ? g() : C && (g(), d());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [c, h, l, d, g]), /* @__PURE__ */ i.jsx(Vo, { ...e, ref: s });
}), [y1, b1] = Bt(zt, { isInside: !1 }), Vo = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      ...a
    } = e, c = ft(Ze, n), d = Vt(n), { onClose: h } = c;
    return u.useEffect(() => (document.addEventListener(gn, h), () => document.removeEventListener(gn, h)), [h]), u.useEffect(() => {
      if (c.trigger) {
        const p = (g) => {
          const m = g.target;
          m != null && m.contains(c.trigger) && h();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [c.trigger, h]), /* @__PURE__ */ i.jsx(
      yn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: l,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: h,
        children: /* @__PURE__ */ i.jsxs(
          Xr,
          {
            "data-state": c.stateAttribute,
            ...d,
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
              /* @__PURE__ */ i.jsx(Sr, { children: r }),
              /* @__PURE__ */ i.jsx(y1, { scope: n, isInside: !0, children: /* @__PURE__ */ i.jsx(Ia, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Bo.displayName = Ze;
var zo = "TooltipArrow", Fo = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Vt(n);
    return b1(
      zo,
      n
    ).isInside ? null : /* @__PURE__ */ i.jsx(Zr, { ...o, ...r, ref: t });
  }
);
Fo.displayName = zo;
function C1(e, t) {
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
function S1(e, t, n = 5) {
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
function R1(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function E1(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const a = t[s].x, c = t[s].y, d = t[l].x, h = t[l].y;
    c > r != h > r && n < (d - a) * (r - c) / (h - c) + a && (o = !o);
  }
  return o;
}
function j1(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), P1(t);
}
function P1(e) {
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
var T1 = Lo, M1 = ko, A1 = Do, _1 = Io, O1 = Bo, N1 = Fo;
function L1({ to: e }) {
  return e ? /* @__PURE__ */ i.jsx(T1, { delayDuration: 100, children: /* @__PURE__ */ i.jsxs(M1, { children: [
    /* @__PURE__ */ i.jsx(A1, { className: "github-corner", asChild: !0, children: /* @__PURE__ */ i.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ i.jsxs(
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
    /* @__PURE__ */ i.jsx(_1, { children: /* @__PURE__ */ i.jsxs(
      O1,
      {
        side: "right",
        className: "bg-white rounded-md text-black text-14 px-2 py-0.5",
        children: [
          "View source on GitHub",
          /* @__PURE__ */ i.jsx(N1, {})
        ]
      }
    ) })
  ] }) }) : null;
}
const Ho = mr(null);
function k1() {
  const e = gr(Ho);
  if (!e)
    throw new Error(
      "useSequenceDemoKit must be used within a SequenceBoilerplateProvider"
    );
  return e;
}
function D1(e) {
  const { variant: t, subvariants: n, children: r, ...o } = e;
  return /* @__PURE__ */ i.jsx("div", { ...de("root", t, n), ...o, children: r });
}
const I1 = "https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/";
function B1({
  name: e,
  description: t,
  githubUrl: n,
  docsUrl: r,
  useAuth: o,
  children: s
}) {
  return /* @__PURE__ */ i.jsx(
    Ho.Provider,
    {
      value: {
        githubUrl: n,
        docsUrl: r || I1,
        name: e,
        description: t,
        useAuth: o
      },
      children: s
    }
  );
}
function J1(e) {
  const { children: t } = e;
  return /* @__PURE__ */ i.jsx(B1, { ...e, children: /* @__PURE__ */ i.jsx(V1, { children: t }) });
}
function V1({ children: e }) {
  const { name: t, description: n, githubUrl: r, docsUrl: o } = k1();
  return /* @__PURE__ */ i.jsxs(D1, { children: [
    /* @__PURE__ */ i.jsx(L1, { to: r }),
    /* @__PURE__ */ i.jsx(u1, { name: t, description: n }),
    /* @__PURE__ */ i.jsx("div", { className: "py-8", children: e }),
    /* @__PURE__ */ i.jsx(c1, { to: o })
  ] });
}
export {
  H1 as Button,
  q1 as Card,
  W1 as Divider,
  c1 as Footer,
  L1 as GithubCorner,
  $1 as Group,
  u1 as Header,
  U1 as Input,
  G1 as Label,
  Y1 as SegmentedInput,
  X1 as Select,
  J1 as SequenceBoilerplate,
  B1 as SequenceBoilerplateProvider,
  D1 as SequenceBoilerplateRoot,
  ct as Svg,
  k1 as useSequenceBoilerplate
};
