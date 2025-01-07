import * as v from "react";
import Te, { forwardRef as jt, createContext as vt, useContext as we, useLayoutEffect as Ol, useEffect as Gn, useState as Nn, useCallback as ki, useSyncExternalStore as df, useRef as Mn, useId as ff, Component as hf, useInsertionEffect as pf, useMemo as qr, Fragment as Dl, createElement as mf } from "react";
import * as Zr from "react-dom";
import vf from "react-dom";
var Hs = { exports: {} }, bn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ho;
function gf() {
  if (Ho) return bn;
  Ho = 1;
  var e = Te, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, c) {
    var u, f = {}, h = null, p = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (u in l) r.call(l, u) && !i.hasOwnProperty(u) && (f[u] = l[u]);
    if (a && a.defaultProps) for (u in l = a.defaultProps, l) f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: t, type: a, key: h, ref: p, props: f, _owner: s.current };
  }
  return bn.Fragment = n, bn.jsx = o, bn.jsxs = o, bn;
}
var Sn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo;
function yf() {
  return qo || (qo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Te, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
    function w(y) {
      if (y === null || typeof y != "object")
        return null;
      var T = g && y[g] || y[m];
      return typeof T == "function" ? T : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(y) {
      {
        for (var T = arguments.length, j = new Array(T > 1 ? T - 1 : 0), F = 1; F < T; F++)
          j[F - 1] = arguments[F];
        S("error", y, j);
      }
    }
    function S(y, T, j) {
      {
        var F = x.ReactDebugCurrentFrame, se = F.getStackAddendum();
        se !== "" && (T += "%s", j = j.concat([se]));
        var oe = j.map(function(Y) {
          return String(Y);
        });
        oe.unshift("Warning: " + T), Function.prototype.apply.call(console[y], console, oe);
      }
    }
    var _ = !1, C = !1, A = !1, E = !1, R = !1, B;
    B = Symbol.for("react.module.reference");
    function $(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === r || y === i || R || y === s || y === c || y === u || E || y === p || _ || C || A || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === f || y.$$typeof === o || y.$$typeof === a || y.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === B || y.getModuleId !== void 0));
    }
    function G(y, T, j) {
      var F = y.displayName;
      if (F)
        return F;
      var se = T.displayName || T.name || "";
      return se !== "" ? j + "(" + se + ")" : j;
    }
    function Q(y) {
      return y.displayName || "Context";
    }
    function H(y) {
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
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case a:
            var T = y;
            return Q(T) + ".Consumer";
          case o:
            var j = y;
            return Q(j._context) + ".Provider";
          case l:
            return G(y, y.render, "ForwardRef");
          case f:
            var F = y.displayName || null;
            return F !== null ? F : H(y.type) || "Memo";
          case h: {
            var se = y, oe = se._payload, Y = se._init;
            try {
              return H(Y(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, ie = 0, q, L, D, J, fe, Le, gt;
    function yt() {
    }
    yt.__reactDisabledLog = !0;
    function Ze() {
      {
        if (ie === 0) {
          q = console.log, L = console.info, D = console.warn, J = console.error, fe = console.group, Le = console.groupCollapsed, gt = console.groupEnd;
          var y = {
            configurable: !0,
            enumerable: !0,
            value: yt,
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
        ie++;
      }
    }
    function xt() {
      {
        if (ie--, ie === 0) {
          var y = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, y, {
              value: q
            }),
            info: W({}, y, {
              value: L
            }),
            warn: W({}, y, {
              value: D
            }),
            error: W({}, y, {
              value: J
            }),
            group: W({}, y, {
              value: fe
            }),
            groupCollapsed: W({}, y, {
              value: Le
            }),
            groupEnd: W({}, y, {
              value: gt
            })
          });
        }
        ie < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ze = x.ReactCurrentDispatcher, N;
    function ne(y, T, j) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (se) {
            var F = se.stack.trim().match(/\n( *(at )?)/);
            N = F && F[1] || "";
          }
        return `
` + N + y;
      }
    }
    var ve = !1, ee;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new re();
    }
    function te(y, T) {
      if (!y || ve)
        return "";
      {
        var j = ee.get(y);
        if (j !== void 0)
          return j;
      }
      var F;
      ve = !0;
      var se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = ze.current, ze.current = null, Ze();
      try {
        if (T) {
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
            } catch (Re) {
              F = Re;
            }
            Reflect.construct(y, [], Y);
          } else {
            try {
              Y.call();
            } catch (Re) {
              F = Re;
            }
            y.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            F = Re;
          }
          y();
        }
      } catch (Re) {
        if (Re && F && typeof Re.stack == "string") {
          for (var K = Re.stack.split(`
`), _e = F.stack.split(`
`), he = K.length - 1, ge = _e.length - 1; he >= 1 && ge >= 0 && K[he] !== _e[ge]; )
            ge--;
          for (; he >= 1 && ge >= 0; he--, ge--)
            if (K[he] !== _e[ge]) {
              if (he !== 1 || ge !== 1)
                do
                  if (he--, ge--, ge < 0 || K[he] !== _e[ge]) {
                    var Ie = `
` + K[he].replace(" at new ", " at ");
                    return y.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", y.displayName)), typeof y == "function" && ee.set(y, Ie), Ie;
                  }
                while (he >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        ve = !1, ze.current = oe, xt(), Error.prepareStackTrace = se;
      }
      var Zt = y ? y.displayName || y.name : "", Dt = Zt ? ne(Zt) : "";
      return typeof y == "function" && ee.set(y, Dt), Dt;
    }
    function Ce(y, T, j) {
      return te(y, !1);
    }
    function Ne(y) {
      var T = y.prototype;
      return !!(T && T.isReactComponent);
    }
    function Ke(y, T, j) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return te(y, Ne(y));
      if (typeof y == "string")
        return ne(y);
      switch (y) {
        case c:
          return ne("Suspense");
        case u:
          return ne("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case l:
            return Ce(y.render);
          case f:
            return Ke(y.type, T, j);
          case h: {
            var F = y, se = F._payload, oe = F._init;
            try {
              return Ke(oe(se), T, j);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, wt = {}, sr = x.ReactDebugCurrentFrame;
    function st(y) {
      if (y) {
        var T = y._owner, j = Ke(y.type, y._source, T ? T.type : null);
        sr.setExtraStackFrame(j);
      } else
        sr.setExtraStackFrame(null);
    }
    function $d(y, T, j, F, se) {
      {
        var oe = Function.call.bind($e);
        for (var Y in y)
          if (oe(y, Y)) {
            var K = void 0;
            try {
              if (typeof y[Y] != "function") {
                var _e = Error((F || "React class") + ": " + j + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              K = y[Y](T, Y, F, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (he) {
              K = he;
            }
            K && !(K instanceof Error) && (st(se), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", j, Y, typeof K), st(null)), K instanceof Error && !(K.message in wt) && (wt[K.message] = !0, st(se), b("Failed %s type: %s", j, K.message), st(null));
          }
      }
    }
    var Wd = Array.isArray;
    function ps(y) {
      return Wd(y);
    }
    function Ud(y) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, j = T && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return j;
      }
    }
    function Hd(y) {
      try {
        return Do(y), !1;
      } catch {
        return !0;
      }
    }
    function Do(y) {
      return "" + y;
    }
    function Vo(y) {
      if (Hd(y))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ud(y)), Do(y);
    }
    var wn = x.ReactCurrentOwner, qd = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lo, No, ms;
    ms = {};
    function Zd(y) {
      if ($e.call(y, "ref")) {
        var T = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function Kd(y) {
      if ($e.call(y, "key")) {
        var T = Object.getOwnPropertyDescriptor(y, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function Gd(y, T) {
      if (typeof y.ref == "string" && wn.current && T && wn.current.stateNode !== T) {
        var j = H(wn.current.type);
        ms[j] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(wn.current.type), y.ref), ms[j] = !0);
      }
    }
    function Yd(y, T) {
      {
        var j = function() {
          Lo || (Lo = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        j.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function Xd(y, T) {
      {
        var j = function() {
          No || (No = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        j.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var Jd = function(y, T, j, F, se, oe, Y) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: y,
        key: T,
        ref: j,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: oe
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function Qd(y, T, j, F, se) {
      {
        var oe, Y = {}, K = null, _e = null;
        j !== void 0 && (Vo(j), K = "" + j), Kd(T) && (Vo(T.key), K = "" + T.key), Zd(T) && (_e = T.ref, Gd(T, se));
        for (oe in T)
          $e.call(T, oe) && !qd.hasOwnProperty(oe) && (Y[oe] = T[oe]);
        if (y && y.defaultProps) {
          var he = y.defaultProps;
          for (oe in he)
            Y[oe] === void 0 && (Y[oe] = he[oe]);
        }
        if (K || _e) {
          var ge = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          K && Yd(Y, ge), _e && Xd(Y, ge);
        }
        return Jd(y, K, _e, se, F, wn.current, Y);
      }
    }
    var vs = x.ReactCurrentOwner, Io = x.ReactDebugCurrentFrame;
    function qt(y) {
      if (y) {
        var T = y._owner, j = Ke(y.type, y._source, T ? T.type : null);
        Io.setExtraStackFrame(j);
      } else
        Io.setExtraStackFrame(null);
    }
    var gs;
    gs = !1;
    function ys(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function Bo() {
      {
        if (vs.current) {
          var y = H(vs.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
    }
    function ef(y) {
      return "";
    }
    var Fo = {};
    function tf(y) {
      {
        var T = Bo();
        if (!T) {
          var j = typeof y == "string" ? y : y.displayName || y.name;
          j && (T = `

Check the top-level render call using <` + j + ">.");
        }
        return T;
      }
    }
    function zo(y, T) {
      {
        if (!y._store || y._store.validated || y.key != null)
          return;
        y._store.validated = !0;
        var j = tf(T);
        if (Fo[j])
          return;
        Fo[j] = !0;
        var F = "";
        y && y._owner && y._owner !== vs.current && (F = " It was passed a child from " + H(y._owner.type) + "."), qt(y), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, F), qt(null);
      }
    }
    function $o(y, T) {
      {
        if (typeof y != "object")
          return;
        if (ps(y))
          for (var j = 0; j < y.length; j++) {
            var F = y[j];
            ys(F) && zo(F, T);
          }
        else if (ys(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var se = w(y);
          if (typeof se == "function" && se !== y.entries)
            for (var oe = se.call(y), Y; !(Y = oe.next()).done; )
              ys(Y.value) && zo(Y.value, T);
        }
      }
    }
    function nf(y) {
      {
        var T = y.type;
        if (T == null || typeof T == "string")
          return;
        var j;
        if (typeof T == "function")
          j = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === f))
          j = T.propTypes;
        else
          return;
        if (j) {
          var F = H(T);
          $d(j, y.props, "prop", F, y);
        } else if (T.PropTypes !== void 0 && !gs) {
          gs = !0;
          var se = H(T);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", se || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rf(y) {
      {
        for (var T = Object.keys(y.props), j = 0; j < T.length; j++) {
          var F = T[j];
          if (F !== "children" && F !== "key") {
            qt(y), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), qt(null);
            break;
          }
        }
        y.ref !== null && (qt(y), b("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
      }
    }
    var Wo = {};
    function Uo(y, T, j, F, se, oe) {
      {
        var Y = $(y);
        if (!Y) {
          var K = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = ef();
          _e ? K += _e : K += Bo();
          var he;
          y === null ? he = "null" : ps(y) ? he = "array" : y !== void 0 && y.$$typeof === t ? (he = "<" + (H(y.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : he = typeof y, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, K);
        }
        var ge = Qd(y, T, j, se, oe);
        if (ge == null)
          return ge;
        if (Y) {
          var Ie = T.children;
          if (Ie !== void 0)
            if (F)
              if (ps(Ie)) {
                for (var Zt = 0; Zt < Ie.length; Zt++)
                  $o(Ie[Zt], y);
                Object.freeze && Object.freeze(Ie);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $o(Ie, y);
        }
        if ($e.call(T, "key")) {
          var Dt = H(y), Re = Object.keys(T).filter(function(uf) {
            return uf !== "key";
          }), xs = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wo[Dt + xs]) {
            var cf = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xs, Dt, cf, Dt), Wo[Dt + xs] = !0;
          }
        }
        return y === r ? rf(ge) : nf(ge), ge;
      }
    }
    function sf(y, T, j) {
      return Uo(y, T, j, !0);
    }
    function of(y, T, j) {
      return Uo(y, T, j, !1);
    }
    var af = of, lf = sf;
    Sn.Fragment = r, Sn.jsx = af, Sn.jsxs = lf;
  }()), Sn;
}
process.env.NODE_ENV === "production" ? Hs.exports = gf() : Hs.exports = yf();
var d = Hs.exports;
function xf(e) {
  if (e)
    return Object.keys(e).reduce((t, n) => (e[n] && t.push(`${n}-${e[n]}`), t), []).join(" ");
}
function wf(e) {
  let t = {};
  return Object.keys(e).filter((n) => n.startsWith("variant-")).forEach((n) => {
    const [, r] = n.split("-");
    r && (t[r] = e[n]);
  }), Object.keys(e).filter((n) => !n.startsWith("variant-") && n !== "subvariants").forEach((n) => {
    e[n];
  }), e.subvariants && (t = Object.assign(e.subvariants, t)), Object.keys(t).length > 0 ? t : {};
}
function Ve(e, t) {
  const n = "initial", r = wf(t), s = { ...t };
  return delete s.variant, Object.keys(r).forEach((i) => {
    delete s[`variant-${i}`];
  }), {
    "data-component": e,
    "data-variant": (t == null ? void 0 : t.variant) || n,
    "data-subvariants": xf(r),
    ...s
  };
}
function bf(e, t) {
  const {
    children: n,
    type: r = "button",
    ...s
  } = Ve("button", e);
  return /* @__PURE__ */ d.jsx("button", { ref: t, type: r, ...s, children: n });
}
const Vl = jt(bf);
function Ll(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = Ll(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Sf() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = Ll(e)) && (r && (r += " "), r += t);
  return r;
}
const Cf = ({
  asChild: e,
  mergeClass: t = !0,
  fallbackAs: n = "div",
  children: r,
  ...s
}, i) => {
  var a, l;
  const o = n;
  if (!e)
    return /* @__PURE__ */ d.jsx(o, { ...s, children: r });
  if (Te.Children.count(r) > 1)
    throw new Error("Only one child allowed");
  if (Te.isValidElement(r)) {
    const c = t ? Sf((a = r == null ? void 0 : r.props) == null ? void 0 : a.className, s == null ? void 0 : s.className) : (l = r == null ? void 0 : r.props) == null ? void 0 : l.className;
    return Te.cloneElement(r, {
      ...s,
      ref: i,
      ...r == null ? void 0 : r.props,
      className: c
    });
  }
  return null;
}, Kr = Te.forwardRef(Cf), _f = (e) => /* @__PURE__ */ d.jsx(
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
), Tf = (e) => /* @__PURE__ */ d.jsx(
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
), Pf = (e) => /* @__PURE__ */ d.jsx(
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
), Ef = (e) => /* @__PURE__ */ d.jsx(
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
), Rf = (e) => /* @__PURE__ */ d.jsx(
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
), Af = (e) => /* @__PURE__ */ d.jsx(
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
), jf = (e) => /* @__PURE__ */ d.jsx(
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
), Mf = (e) => /* @__PURE__ */ d.jsx(
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
), kf = (e) => /* @__PURE__ */ d.jsx(
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
), Of = (e) => /* @__PURE__ */ d.jsx(
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
), Df = (e) => /* @__PURE__ */ d.jsx(
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
), Vf = (e) => /* @__PURE__ */ d.jsx(
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
), Lf = (e) => /* @__PURE__ */ d.jsxs(
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
), Nf = (e) => /* @__PURE__ */ d.jsx(
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
), If = (e) => /* @__PURE__ */ d.jsx(
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
), Bf = (e) => /* @__PURE__ */ d.jsx(
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
), Ff = (e) => /* @__PURE__ */ d.jsx(
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
), zf = (e) => /* @__PURE__ */ d.jsx(
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
), $f = (e) => /* @__PURE__ */ d.jsxs(
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
), Wf = (e) => /* @__PURE__ */ d.jsx(
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
), Uf = (e) => /* @__PURE__ */ d.jsx(
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
), Hf = (e) => /* @__PURE__ */ d.jsx(
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
), qf = (e) => /* @__PURE__ */ d.jsx(
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
), Zf = (e) => /* @__PURE__ */ d.jsx(
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
), Kf = (e) => /* @__PURE__ */ d.jsx(
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
), Gf = (e) => /* @__PURE__ */ d.jsx(
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
), Yf = (e) => /* @__PURE__ */ d.jsx(
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
), Xf = (e) => /* @__PURE__ */ d.jsx(
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
), Jf = (e) => /* @__PURE__ */ d.jsx(
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
), Qf = (e) => /* @__PURE__ */ d.jsx(
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
), eh = (e) => /* @__PURE__ */ d.jsx(
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
), th = (e) => /* @__PURE__ */ d.jsx(
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
), nh = (e) => /* @__PURE__ */ d.jsx(
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
), rh = (e) => /* @__PURE__ */ d.jsx(
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
), sh = (e) => /* @__PURE__ */ d.jsxs(
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
), ih = (e) => /* @__PURE__ */ d.jsx(
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
), oh = (e) => /* @__PURE__ */ d.jsxs(
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
), ah = (e) => /* @__PURE__ */ d.jsx(
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
), lh = (e) => /* @__PURE__ */ d.jsxs(
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
), ch = (e) => /* @__PURE__ */ d.jsx(
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
), uh = (e) => /* @__PURE__ */ d.jsx(
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
), dh = (e) => /* @__PURE__ */ d.jsx(
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
), fh = (e) => /* @__PURE__ */ d.jsxs(
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
), hh = (e) => /* @__PURE__ */ d.jsx(
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
), ph = (e) => /* @__PURE__ */ d.jsx(
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
), mh = (e) => /* @__PURE__ */ d.jsx(
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
), vh = (e) => /* @__PURE__ */ d.jsx(
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
), gh = (e) => /* @__PURE__ */ d.jsx(
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
), yh = (e) => /* @__PURE__ */ d.jsxs(
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
), xh = (e) => /* @__PURE__ */ d.jsx(
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
), wh = (e) => /* @__PURE__ */ d.jsx(
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
), bh = (e) => /* @__PURE__ */ d.jsx(
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
), Sh = (e) => /* @__PURE__ */ d.jsxs(
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
), Ch = (e) => /* @__PURE__ */ d.jsx(
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
), _h = (e) => /* @__PURE__ */ d.jsx(
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
), Th = (e) => /* @__PURE__ */ d.jsx(
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
), Ph = (e) => /* @__PURE__ */ d.jsx(
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
), Eh = (e) => /* @__PURE__ */ d.jsx(
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
), Rh = (e) => /* @__PURE__ */ d.jsxs(
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
), Ah = (e) => /* @__PURE__ */ d.jsx(
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
), jh = (e) => /* @__PURE__ */ d.jsx(
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
), Mh = (e) => /* @__PURE__ */ d.jsx(
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
), kh = (e) => /* @__PURE__ */ d.jsxs(
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
), Oh = (e) => /* @__PURE__ */ d.jsx(
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
), Dh = (e) => /* @__PURE__ */ d.jsx(
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
), Vh = (e) => /* @__PURE__ */ d.jsx(
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
), Lh = (e) => /* @__PURE__ */ d.jsx(
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
), Nh = (e) => /* @__PURE__ */ d.jsx(
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
), Ih = (e) => /* @__PURE__ */ d.jsxs(
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
), Bh = (e) => /* @__PURE__ */ d.jsx(
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
), Fh = (e) => /* @__PURE__ */ d.jsx(
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
), zh = (e) => /* @__PURE__ */ d.jsx(
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
), $h = (e) => /* @__PURE__ */ d.jsxs(
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
), Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Add: _f,
  AirDropper: Tf,
  Apple: Pf,
  ArrowDown: Ef,
  ArrowRight: Rf,
  Bridge: Af,
  Checkmark: jf,
  ChevronDown: Mf,
  ChevronLeft: kf,
  ChevronRight: Of,
  ChevronUp: Df,
  Close: Vf,
  Contacts: Lf,
  ContextMenu: Nf,
  Contract: If,
  Copy: Bf,
  Currency: Ff,
  DashedCircle: zf,
  Deploy: $f,
  Device: Wf,
  Discord: Uf,
  Docs: Hf,
  Download: qf,
  Drag: Zf,
  Edit: Kf,
  Email: Gf,
  Expand: Yf,
  ExternalLink: Xf,
  Facebook: Jf,
  GasTank: Qf,
  Globe: eh,
  Google: th,
  Grid: nh,
  Help: rh,
  Hidden: sh,
  Home: ih,
  Indexer: oh,
  Key: ah,
  Link: lh,
  List: ch,
  Marketplaces: uh,
  Menu: dh,
  Minter: fh,
  Moon: hh,
  Network: ph,
  Node: mh,
  Payments: vh,
  Pin: gh,
  Profile: yh,
  QrCode: xh,
  Receive: wh,
  Refresh: bh,
  Relayer: Sh,
  Scan: Ch,
  Search: _h,
  Send: Th,
  Sequence: Ph,
  SequenceBoilerplateLogo: $h,
  Settings: Eh,
  Share: Rh,
  Shield: Ah,
  Signout: jh,
  Subtract: Mh,
  Sun: kh,
  Swap: Oh,
  Transaction: Dh,
  Trash: Vh,
  Twitch: Lh,
  Upload: Nh,
  Visible: Ih,
  Wallet: Bh,
  WalletConnect: Fh,
  Warning: zh
}, Symbol.toStringTag, { value: "Module" })), ws = Wh;
function ct({
  name: e,
  alt: t = void 0,
  className: n = "",
  ...r
}) {
  const s = ws == null ? void 0 : ws[e];
  return /* @__PURE__ */ d.jsx(
    Kr,
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
      children: /* @__PURE__ */ d.jsx(s, {})
    }
  );
}
function Uh(e) {
  const { title: t, children: n, ...r } = Ve("card-collapsable", e);
  return console.log(t), /* @__PURE__ */ d.jsxs("details", { ...r, children: [
    t ? /* @__PURE__ */ d.jsx(Hh, { children: t }) : null,
    /* @__PURE__ */ d.jsx("div", { className: "px-4 pb-4 w-full text-start flex flex-col gap-4", children: n })
  ] });
}
function Hh(e) {
  const { children: t, ...n } = e;
  return /* @__PURE__ */ d.jsxs(
    "summary",
    {
      className: "flex items-center justify-between text-14 font-bold p-4",
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ d.jsx(ct, { name: "ChevronDown", width: "20", "data-arrow": !0 })
      ]
    }
  );
}
function $5(e) {
  const { collapsable: t, ...n } = e;
  return t ? /* @__PURE__ */ d.jsx(Uh, { ...n }) : /* @__PURE__ */ d.jsx(qh, { ...n });
}
function qh(e) {
  const { children: t, ...n } = Ve(
    "card",
    e
  );
  return /* @__PURE__ */ d.jsx("div", { ...n, children: t });
}
function W5() {
  return /* @__PURE__ */ d.jsx("hr", { className: "w-full border-white/20" });
}
function Nl(e) {
  const { children: t, ...n } = Ve(
    "group-title",
    e
  );
  return /* @__PURE__ */ d.jsx("h2", { ...n, children: t });
}
function Zh(e, t) {
  const {
    asChild: n = !1,
    title: r,
    children: s,
    ...i
  } = Ve("group", e);
  return /* @__PURE__ */ d.jsxs(Kr, { ref: t, fallbackAs: "div", asChild: n, ...i, children: [
    r ? /* @__PURE__ */ d.jsx(Nl, { children: r }) : null,
    s
  ] });
}
const U5 = Object.assign(jt(Zh), {
  Title: Nl
}), Il = vt(null);
function Oi() {
  const e = we(Il);
  if (!e)
    throw new Error("useField must be used within a Field");
  return e;
}
function Kh({
  children: e,
  value: t
}) {
  return /* @__PURE__ */ d.jsx(Il.Provider, { value: t, children: e });
}
function Bl(e) {
  const {
    children: t,
    asChild: n = !1,
    id: r,
    ...s
  } = Ve("input", e), { name: i } = Oi();
  return /* @__PURE__ */ d.jsx(
    Kr,
    {
      asChild: n,
      fallbackAs: "input",
      name: i,
      id: r || i,
      ...s,
      children: t
    }
  );
}
function Gh(e) {
  const { children: t, ...n } = Ve("segmented-input", e);
  function r(s) {
    var o, a;
    const i = (a = (o = s == null ? void 0 : s.target) == null ? void 0 : o.parentNode) == null ? void 0 : a.querySelector("input");
    i && i.focus();
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
function Yh(e) {
  const { children: t, ...n } = Ve(
    "segmented-input-segment",
    e
  );
  return /* @__PURE__ */ d.jsx("div", { ...n, children: t });
}
const bs = Object.assign(Gh, {
  Segment: Yh
});
function Xh(e, t) {
  const { children: n, ...r } = Ve(
    "label",
    e
  ), { name: s } = Oi();
  return /* @__PURE__ */ d.jsx("label", { ref: t, htmlFor: s, ...r, children: n });
}
const Di = jt(Xh);
function Jh({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label, s = typeof t == "string" ? null : t.icon;
    return /* @__PURE__ */ d.jsx("option", { value: n, "data-icon": s, children: r }, n);
  });
}
function Zo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ae(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), n === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function Fl(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = v.createContext(o), l = n.length;
    n = [...n, o];
    function c(f) {
      const { scope: h, children: p, ...g } = f, m = (h == null ? void 0 : h[e][l]) || a, w = v.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ d.jsx(m.Provider, { value: w, children: p });
    }
    function u(f, h) {
      const p = (h == null ? void 0 : h[e][l]) || a, g = v.useContext(p);
      if (g) return g;
      if (o !== void 0) return o;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return c.displayName = i + "Provider", [c, u];
  }
  const s = () => {
    const i = n.map((o) => v.createContext(o));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return s.scopeName = e, [r, Qh(s, ...t)];
}
function Qh(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(i) {
      const o = r.reduce((a, { useScope: l, scopeName: c }) => {
        const f = l(i)[`__scope${c}`];
        return { ...a, ...f };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function ep(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function zl(...e) {
  return (t) => e.forEach((n) => ep(n, t));
}
function ye(...e) {
  return v.useCallback(zl(...e), e);
}
var In = v.forwardRef((e, t) => {
  const { children: n, ...r } = e, s = v.Children.toArray(n), i = s.find(tp);
  if (i) {
    const o = i.props.children, a = s.map((l) => l === i ? v.Children.count(o) > 1 ? v.Children.only(null) : v.isValidElement(o) ? o.props.children : null : l);
    return /* @__PURE__ */ d.jsx(qs, { ...r, ref: t, children: v.isValidElement(o) ? v.cloneElement(o, void 0, a) : null });
  }
  return /* @__PURE__ */ d.jsx(qs, { ...r, ref: t, children: n });
});
In.displayName = "Slot";
var qs = v.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (v.isValidElement(n)) {
    const s = rp(n);
    return v.cloneElement(n, {
      ...np(r, n.props),
      // @ts-ignore
      ref: t ? zl(t, s) : s
    });
  }
  return v.Children.count(n) > 1 ? v.Children.only(null) : null;
});
qs.displayName = "SlotClone";
var $l = ({ children: e }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: e });
function tp(e) {
  return v.isValidElement(e) && e.type === $l;
}
function np(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? s && i ? n[r] = (...a) => {
      i(...a), s(...a);
    } : s && (n[r] = s) : r === "style" ? n[r] = { ...s, ...i } : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function rp(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function sp(e) {
  const t = e + "CollectionProvider", [n, r] = Fl(t), [s, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), o = (p) => {
    const { scope: g, children: m } = p, w = Te.useRef(null), x = Te.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(s, { scope: g, itemMap: x, collectionRef: w, children: m });
  };
  o.displayName = t;
  const a = e + "CollectionSlot", l = Te.forwardRef(
    (p, g) => {
      const { scope: m, children: w } = p, x = i(a, m), b = ye(g, x.collectionRef);
      return /* @__PURE__ */ d.jsx(In, { ref: b, children: w });
    }
  );
  l.displayName = a;
  const c = e + "CollectionItemSlot", u = "data-radix-collection-item", f = Te.forwardRef(
    (p, g) => {
      const { scope: m, children: w, ...x } = p, b = Te.useRef(null), S = ye(g, b), _ = i(c, m);
      return Te.useEffect(() => (_.itemMap.set(b, { ref: b, ...x }), () => void _.itemMap.delete(b))), /* @__PURE__ */ d.jsx(In, { [u]: "", ref: S, children: w });
    }
  );
  f.displayName = c;
  function h(p) {
    const g = i(e + "CollectionConsumer", p);
    return Te.useCallback(() => {
      const w = g.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${u}]`));
      return Array.from(g.itemMap.values()).sort(
        (_, C) => x.indexOf(_.ref.current) - x.indexOf(C.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: o, Slot: l, ItemSlot: f },
    h,
    r
  ];
}
function Wl(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = v.createContext(o), l = n.length;
    n = [...n, o];
    const c = (f) => {
      var x;
      const { scope: h, children: p, ...g } = f, m = ((x = h == null ? void 0 : h[e]) == null ? void 0 : x[l]) || a, w = v.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ d.jsx(m.Provider, { value: w, children: p });
    };
    c.displayName = i + "Provider";
    function u(f, h) {
      var m;
      const p = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || a, g = v.useContext(p);
      if (g) return g;
      if (o !== void 0) return o;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const s = () => {
    const i = n.map((o) => v.createContext(o));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return v.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return s.scopeName = e, [r, ip(s, ...t)];
}
function ip(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(i) {
      const o = r.reduce((a, { useScope: l, scopeName: c }) => {
        const f = l(i)[`__scope${c}`];
        return { ...a, ...f };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var op = v.createContext(void 0);
function ap(e) {
  const t = v.useContext(op);
  return e || t || "ltr";
}
var lp = [
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
], me = lp.reduce((e, t) => {
  const n = v.forwardRef((r, s) => {
    const { asChild: i, ...o } = r, a = i ? In : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(a, { ...o, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function cp(e, t) {
  e && Zr.flushSync(() => e.dispatchEvent(t));
}
function ut(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function up(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ut(e);
  v.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var dp = "DismissableLayer", Zs = "dismissableLayer.update", fp = "dismissableLayer.pointerDownOutside", hp = "dismissableLayer.focusOutside", Ko, Ul = v.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Vi = v.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: i,
      onInteractOutside: o,
      onDismiss: a,
      ...l
    } = e, c = v.useContext(Ul), [u, f] = v.useState(null), h = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = v.useState({}), g = ye(t, (E) => f(E)), m = Array.from(c.layers), [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), x = m.indexOf(w), b = u ? m.indexOf(u) : -1, S = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = b >= x, C = vp((E) => {
      const R = E.target, B = [...c.branches].some(($) => $.contains(R));
      !_ || B || (s == null || s(E), o == null || o(E), E.defaultPrevented || a == null || a());
    }, h), A = gp((E) => {
      const R = E.target;
      [...c.branches].some(($) => $.contains(R)) || (i == null || i(E), o == null || o(E), E.defaultPrevented || a == null || a());
    }, h);
    return up((E) => {
      b === c.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, h), v.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Ko = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Go(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Ko);
        };
    }, [u, h, n, c]), v.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Go());
    }, [u, c]), v.useEffect(() => {
      const E = () => p({});
      return document.addEventListener(Zs, E), () => document.removeEventListener(Zs, E);
    }, []), /* @__PURE__ */ d.jsx(
      me.div,
      {
        ...l,
        ref: g,
        style: {
          pointerEvents: S ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ae(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: ae(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: ae(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Vi.displayName = dp;
var pp = "DismissableLayerBranch", mp = v.forwardRef((e, t) => {
  const n = v.useContext(Ul), r = v.useRef(null), s = ye(t, r);
  return v.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ d.jsx(me.div, { ...e, ref: s });
});
mp.displayName = pp;
function vp(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ut(e), r = v.useRef(!1), s = v.useRef(() => {
  });
  return v.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Hl(
            fp,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = l, t.addEventListener("click", s.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", s.current);
      r.current = !1;
    }, o = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(o), t.removeEventListener("pointerdown", i), t.removeEventListener("click", s.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function gp(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ut(e), r = v.useRef(!1);
  return v.useEffect(() => {
    const s = (i) => {
      i.target && !r.current && Hl(hp, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Go() {
  const e = new CustomEvent(Zs);
  document.dispatchEvent(e);
}
function Hl(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }), r ? cp(s, i) : s.dispatchEvent(i);
}
var Ss = 0;
function yp() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Yo()), document.body.insertAdjacentElement("beforeend", e[1] ?? Yo()), Ss++, () => {
      Ss === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ss--;
    };
  }, []);
}
function Yo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Cs = "focusScope.autoFocusOnMount", _s = "focusScope.autoFocusOnUnmount", Xo = { bubbles: !1, cancelable: !0 }, xp = "FocusScope", ql = v.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: i,
    ...o
  } = e, [a, l] = v.useState(null), c = ut(s), u = ut(i), f = v.useRef(null), h = ye(t, (m) => l(m)), p = v.useRef({
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
      let m = function(S) {
        if (p.paused || !a) return;
        const _ = S.target;
        a.contains(_) ? f.current = _ : bt(f.current, { select: !0 });
      }, w = function(S) {
        if (p.paused || !a) return;
        const _ = S.relatedTarget;
        _ !== null && (a.contains(_) || bt(f.current, { select: !0 }));
      }, x = function(S) {
        if (document.activeElement === document.body)
          for (const C of S)
            C.removedNodes.length > 0 && bt(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", w);
      const b = new MutationObserver(x);
      return a && b.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", w), b.disconnect();
      };
    }
  }, [r, a, p.paused]), v.useEffect(() => {
    if (a) {
      Qo.add(p);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const x = new CustomEvent(Cs, Xo);
        a.addEventListener(Cs, c), a.dispatchEvent(x), x.defaultPrevented || (wp(Tp(Zl(a)), { select: !0 }), document.activeElement === m && bt(a));
      }
      return () => {
        a.removeEventListener(Cs, c), setTimeout(() => {
          const x = new CustomEvent(_s, Xo);
          a.addEventListener(_s, u), a.dispatchEvent(x), x.defaultPrevented || bt(m ?? document.body, { select: !0 }), a.removeEventListener(_s, u), Qo.remove(p);
        }, 0);
      };
    }
  }, [a, c, u, p]);
  const g = v.useCallback(
    (m) => {
      if (!n && !r || p.paused) return;
      const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, x = document.activeElement;
      if (w && x) {
        const b = m.currentTarget, [S, _] = bp(b);
        S && _ ? !m.shiftKey && x === _ ? (m.preventDefault(), n && bt(S, { select: !0 })) : m.shiftKey && x === S && (m.preventDefault(), n && bt(_, { select: !0 })) : x === b && m.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ d.jsx(me.div, { tabIndex: -1, ...o, ref: h, onKeyDown: g });
});
ql.displayName = xp;
function wp(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (bt(r, { select: t }), document.activeElement !== n) return;
}
function bp(e) {
  const t = Zl(e), n = Jo(t, e), r = Jo(t.reverse(), e);
  return [n, r];
}
function Zl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Jo(e, t) {
  for (const n of e)
    if (!Sp(n, { upTo: t })) return n;
}
function Sp(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Cp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function bt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Cp(e) && t && e.select();
  }
}
var Qo = _p();
function _p() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ea(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ea(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function ea(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Tp(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Pe = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, Pp = v.useId || (() => {
}), Ep = 0;
function Gr(e) {
  const [t, n] = v.useState(Pp());
  return Pe(() => {
    n((r) => r ?? String(Ep++));
  }, [e]), t ? `radix-${t}` : "";
}
const Rp = ["top", "right", "bottom", "left"], Ct = Math.min, Me = Math.max, wr = Math.round, ir = Math.floor, Ye = (e) => ({
  x: e,
  y: e
}), Ap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, jp = {
  start: "end",
  end: "start"
};
function Ks(e, t, n) {
  return Me(e, Ct(t, n));
}
function dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ft(e) {
  return e.split("-")[0];
}
function mn(e) {
  return e.split("-")[1];
}
function Li(e) {
  return e === "x" ? "y" : "x";
}
function Ni(e) {
  return e === "y" ? "height" : "width";
}
function _t(e) {
  return ["top", "bottom"].includes(ft(e)) ? "y" : "x";
}
function Ii(e) {
  return Li(_t(e));
}
function Mp(e, t, n) {
  n === void 0 && (n = !1);
  const r = mn(e), s = Ii(e), i = Ni(s);
  let o = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (o = br(o)), [o, br(o)];
}
function kp(e) {
  const t = br(e);
  return [Gs(e), t, Gs(t)];
}
function Gs(e) {
  return e.replace(/start|end/g, (t) => jp[t]);
}
function Op(e, t, n) {
  const r = ["left", "right"], s = ["right", "left"], i = ["top", "bottom"], o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? s : r : t ? r : s;
    case "left":
    case "right":
      return t ? i : o;
    default:
      return [];
  }
}
function Dp(e, t, n, r) {
  const s = mn(e);
  let i = Op(ft(e), n === "start", r);
  return s && (i = i.map((o) => o + "-" + s), t && (i = i.concat(i.map(Gs)))), i;
}
function br(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ap[t]);
}
function Vp(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Kl(e) {
  return typeof e != "number" ? Vp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Sr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: s
  } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n
  };
}
function ta(e, t, n) {
  let {
    reference: r,
    floating: s
  } = e;
  const i = _t(t), o = Ii(t), a = Ni(o), l = ft(t), c = i === "y", u = r.x + r.width / 2 - s.width / 2, f = r.y + r.height / 2 - s.height / 2, h = r[a] / 2 - s[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: u,
        y: r.y - s.height
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
        x: r.x - s.width,
        y: f
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (mn(t)) {
    case "start":
      p[o] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      p[o] += h * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const Lp = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: o
  } = n, a = i.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: u,
    y: f
  } = ta(c, r, l), h = r, p = {}, g = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: w,
      fn: x
    } = a[m], {
      x: b,
      y: S,
      data: _,
      reset: C
    } = await x({
      x: u,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: s,
      middlewareData: p,
      rects: c,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = b ?? u, f = S ?? f, p = {
      ...p,
      [w]: {
        ...p[w],
        ..._
      }
    }, C && g <= 50 && (g++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (c = C.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : C.rects), {
      x: u,
      y: f
    } = ta(c, h, l)), m = -1);
  }
  return {
    x: u,
    y: f,
    placement: h,
    strategy: s,
    middlewareData: p
  };
};
async function Bn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: s,
    platform: i,
    rects: o,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = dt(t, e), g = Kl(p), w = a[h ? f === "floating" ? "reference" : "floating" : f], x = Sr(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), b = f === "floating" ? {
    x: r,
    y: s,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(S)) ? await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Sr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: S,
    strategy: l
  }) : b);
  return {
    top: (x.top - C.top + g.top) / _.y,
    bottom: (C.bottom - x.bottom + g.bottom) / _.y,
    left: (x.left - C.left + g.left) / _.x,
    right: (C.right - x.right + g.right) / _.x
  };
}
const Np = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: s,
      rects: i,
      platform: o,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = dt(e, t) || {};
    if (c == null)
      return {};
    const f = Kl(u), h = {
      x: n,
      y: r
    }, p = Ii(s), g = Ni(p), m = await o.getDimensions(c), w = p === "y", x = w ? "top" : "left", b = w ? "bottom" : "right", S = w ? "clientHeight" : "clientWidth", _ = i.reference[g] + i.reference[p] - h[p] - i.floating[g], C = h[p] - i.reference[p], A = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let E = A ? A[S] : 0;
    (!E || !await (o.isElement == null ? void 0 : o.isElement(A))) && (E = a.floating[S] || i.floating[g]);
    const R = _ / 2 - C / 2, B = E / 2 - m[g] / 2 - 1, $ = Ct(f[x], B), G = Ct(f[b], B), Q = $, H = E - m[g] - G, W = E / 2 - m[g] / 2 + R, ie = Ks(Q, W, H), q = !l.arrow && mn(s) != null && W !== ie && i.reference[g] / 2 - (W < Q ? $ : G) - m[g] / 2 < 0, L = q ? W < Q ? W - Q : W - H : 0;
    return {
      [p]: h[p] + L,
      data: {
        [p]: ie,
        centerOffset: W - ie - L,
        ...q && {
          alignmentOffset: L
        }
      },
      reset: q
    };
  }
}), Ip = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: s,
        middlewareData: i,
        rects: o,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...w
      } = dt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const x = ft(s), b = _t(a), S = ft(a) === a, _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = h || (S || !m ? [br(a)] : kp(a)), A = g !== "none";
      !h && A && C.push(...Dp(a, m, g, _));
      const E = [a, ...C], R = await Bn(t, w), B = [];
      let $ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && B.push(R[x]), f) {
        const W = Mp(s, o, _);
        B.push(R[W[0]], R[W[1]]);
      }
      if ($ = [...$, {
        placement: s,
        overflows: B
      }], !B.every((W) => W <= 0)) {
        var G, Q;
        const W = (((G = i.flip) == null ? void 0 : G.index) || 0) + 1, ie = E[W];
        if (ie)
          return {
            data: {
              index: W,
              overflows: $
            },
            reset: {
              placement: ie
            }
          };
        let q = (Q = $.filter((L) => L.overflows[0] <= 0).sort((L, D) => L.overflows[1] - D.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!q)
          switch (p) {
            case "bestFit": {
              var H;
              const L = (H = $.filter((D) => {
                if (A) {
                  const J = _t(D.placement);
                  return J === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  J === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((J) => J > 0).reduce((J, fe) => J + fe, 0)]).sort((D, J) => D[1] - J[1])[0]) == null ? void 0 : H[0];
              L && (q = L);
              break;
            }
            case "initialPlacement":
              q = a;
              break;
          }
        if (s !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
function na(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ra(e) {
  return Rp.some((t) => e[t] >= 0);
}
const Bp = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...s
      } = dt(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Bn(t, {
            ...s,
            elementContext: "reference"
          }), o = na(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: ra(o)
            }
          };
        }
        case "escaped": {
          const i = await Bn(t, {
            ...s,
            altBoundary: !0
          }), o = na(i, n.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: ra(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Fp(e, t) {
  const {
    placement: n,
    platform: r,
    elements: s
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), o = ft(n), a = mn(n), l = _t(n) === "y", c = ["left", "top"].includes(o) ? -1 : 1, u = i && l ? -1 : 1, f = dt(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof g == "number" && (p = a === "end" ? g * -1 : g), l ? {
    x: p * u,
    y: h * c
  } : {
    x: h * c,
    y: p * u
  };
}
const zp = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: s,
        y: i,
        placement: o,
        middlewareData: a
      } = t, l = await Fp(t, e);
      return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: s + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, $p = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: o = !1,
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
      } = dt(e, t), c = {
        x: n,
        y: r
      }, u = await Bn(t, l), f = _t(ft(s)), h = Li(f);
      let p = c[h], g = c[f];
      if (i) {
        const w = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", b = p + u[w], S = p - u[x];
        p = Ks(b, p, S);
      }
      if (o) {
        const w = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", b = g + u[w], S = g - u[x];
        g = Ks(b, g, S);
      }
      const m = a.fn({
        ...t,
        [h]: p,
        [f]: g
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [h]: i,
            [f]: o
          }
        }
      };
    }
  };
}, Wp = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: s,
        rects: i,
        middlewareData: o
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = dt(e, t), u = {
        x: n,
        y: r
      }, f = _t(s), h = Li(f);
      let p = u[h], g = u[f];
      const m = dt(a, t), w = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const S = h === "y" ? "height" : "width", _ = i.reference[h] - i.floating[S] + w.mainAxis, C = i.reference[h] + i.reference[S] - w.mainAxis;
        p < _ ? p = _ : p > C && (p = C);
      }
      if (c) {
        var x, b;
        const S = h === "y" ? "width" : "height", _ = ["top", "left"].includes(ft(s)), C = i.reference[f] - i.floating[S] + (_ && ((x = o.offset) == null ? void 0 : x[f]) || 0) + (_ ? 0 : w.crossAxis), A = i.reference[f] + i.reference[S] + (_ ? 0 : ((b = o.offset) == null ? void 0 : b[f]) || 0) - (_ ? w.crossAxis : 0);
        g < C ? g = C : g > A && (g = A);
      }
      return {
        [h]: p,
        [f]: g
      };
    }
  };
}, Up = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: s,
        rects: i,
        platform: o,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = dt(e, t), u = await Bn(t, c), f = ft(s), h = mn(s), p = _t(s) === "y", {
        width: g,
        height: m
      } = i.floating;
      let w, x;
      f === "top" || f === "bottom" ? (w = f, x = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = f, w = h === "end" ? "top" : "bottom");
      const b = m - u.top - u.bottom, S = g - u.left - u.right, _ = Ct(m - u[w], b), C = Ct(g - u[x], S), A = !t.middlewareData.shift;
      let E = _, R = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = S), (r = t.middlewareData.shift) != null && r.enabled.y && (E = b), A && !h) {
        const $ = Me(u.left, 0), G = Me(u.right, 0), Q = Me(u.top, 0), H = Me(u.bottom, 0);
        p ? R = g - 2 * ($ !== 0 || G !== 0 ? $ + G : Me(u.left, u.right)) : E = m - 2 * (Q !== 0 || H !== 0 ? Q + H : Me(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: R,
        availableHeight: E
      });
      const B = await o.getDimensions(a.floating);
      return g !== B.width || m !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Yr() {
  return typeof window < "u";
}
function vn(e) {
  return Gl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ke(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function rt(e) {
  var t;
  return (t = (Gl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Gl(e) {
  return Yr() ? e instanceof Node || e instanceof ke(e).Node : !1;
}
function He(e) {
  return Yr() ? e instanceof Element || e instanceof ke(e).Element : !1;
}
function tt(e) {
  return Yr() ? e instanceof HTMLElement || e instanceof ke(e).HTMLElement : !1;
}
function sa(e) {
  return !Yr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ke(e).ShadowRoot;
}
function Yn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: s
  } = qe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(s);
}
function Hp(e) {
  return ["table", "td", "th"].includes(vn(e));
}
function Xr(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Bi(e) {
  const t = Fi(), n = He(e) ? qe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function qp(e) {
  let t = Tt(e);
  for (; tt(t) && !an(t); ) {
    if (Bi(t))
      return t;
    if (Xr(t))
      return null;
    t = Tt(t);
  }
  return null;
}
function Fi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function an(e) {
  return ["html", "body", "#document"].includes(vn(e));
}
function qe(e) {
  return ke(e).getComputedStyle(e);
}
function Jr(e) {
  return He(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Tt(e) {
  if (vn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    sa(e) && e.host || // Fallback.
    rt(e)
  );
  return sa(t) ? t.host : t;
}
function Yl(e) {
  const t = Tt(e);
  return an(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tt(t) && Yn(t) ? t : Yl(t);
}
function Fn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = Yl(e), i = s === ((r = e.ownerDocument) == null ? void 0 : r.body), o = ke(s);
  if (i) {
    const a = Ys(o);
    return t.concat(o, o.visualViewport || [], Yn(s) ? s : [], a && n ? Fn(a) : []);
  }
  return t.concat(s, Fn(s, [], n));
}
function Ys(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xl(e) {
  const t = qe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const s = tt(e), i = s ? e.offsetWidth : n, o = s ? e.offsetHeight : r, a = wr(n) !== i || wr(r) !== o;
  return a && (n = i, r = o), {
    width: n,
    height: r,
    $: a
  };
}
function zi(e) {
  return He(e) ? e : e.contextElement;
}
function rn(e) {
  const t = zi(e);
  if (!tt(t))
    return Ye(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: s,
    $: i
  } = Xl(t);
  let o = (i ? wr(n.width) : n.width) / r, a = (i ? wr(n.height) : n.height) / s;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Zp = /* @__PURE__ */ Ye(0);
function Jl(e) {
  const t = ke(e);
  return !Fi() || !t.visualViewport ? Zp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Kp(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ke(e) ? !1 : t;
}
function zt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), i = zi(e);
  let o = Ye(1);
  t && (r ? He(r) && (o = rn(r)) : o = rn(e));
  const a = Kp(i, n, r) ? Jl(i) : Ye(0);
  let l = (s.left + a.x) / o.x, c = (s.top + a.y) / o.y, u = s.width / o.x, f = s.height / o.y;
  if (i) {
    const h = ke(i), p = r && He(r) ? ke(r) : r;
    let g = h, m = Ys(g);
    for (; m && r && p !== g; ) {
      const w = rn(m), x = m.getBoundingClientRect(), b = qe(m), S = x.left + (m.clientLeft + parseFloat(b.paddingLeft)) * w.x, _ = x.top + (m.clientTop + parseFloat(b.paddingTop)) * w.y;
      l *= w.x, c *= w.y, u *= w.x, f *= w.y, l += S, c += _, g = ke(m), m = Ys(g);
    }
  }
  return Sr({
    width: u,
    height: f,
    x: l,
    y: c
  });
}
function $i(e, t) {
  const n = Jr(e).scrollLeft;
  return t ? t.left + n : zt(rt(e)).left + n;
}
function Ql(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    $i(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: s,
    y: i
  };
}
function Gp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: s
  } = e;
  const i = s === "fixed", o = rt(r), a = t ? Xr(t.floating) : !1;
  if (r === o || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ye(1);
  const u = Ye(0), f = tt(r);
  if ((f || !f && !i) && ((vn(r) !== "body" || Yn(o)) && (l = Jr(r)), tt(r))) {
    const p = zt(r);
    c = rn(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  const h = o && !f && !i ? Ql(o, l, !0) : Ye(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + h.y
  };
}
function Yp(e) {
  return Array.from(e.getClientRects());
}
function Xp(e) {
  const t = rt(e), n = Jr(e), r = e.ownerDocument.body, s = Me(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Me(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + $i(e);
  const a = -n.scrollTop;
  return qe(r).direction === "rtl" && (o += Me(t.clientWidth, r.clientWidth) - s), {
    width: s,
    height: i,
    x: o,
    y: a
  };
}
function Jp(e, t) {
  const n = ke(e), r = rt(e), s = n.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, a = 0, l = 0;
  if (s) {
    i = s.width, o = s.height;
    const c = Fi();
    (!c || c && t === "fixed") && (a = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: a,
    y: l
  };
}
function Qp(e, t) {
  const n = zt(e, !0, t === "fixed"), r = n.top + e.clientTop, s = n.left + e.clientLeft, i = tt(e) ? rn(e) : Ye(1), o = e.clientWidth * i.x, a = e.clientHeight * i.y, l = s * i.x, c = r * i.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function ia(e, t, n) {
  let r;
  if (t === "viewport")
    r = Jp(e, n);
  else if (t === "document")
    r = Xp(rt(e));
  else if (He(t))
    r = Qp(t, n);
  else {
    const s = Jl(e);
    r = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Sr(r);
}
function ec(e, t) {
  const n = Tt(e);
  return n === t || !He(n) || an(n) ? !1 : qe(n).position === "fixed" || ec(n, t);
}
function em(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Fn(e, [], !1).filter((a) => He(a) && vn(a) !== "body"), s = null;
  const i = qe(e).position === "fixed";
  let o = i ? Tt(e) : e;
  for (; He(o) && !an(o); ) {
    const a = qe(o), l = Bi(o);
    !l && a.position === "fixed" && (s = null), (i ? !l && !s : !l && a.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Yn(o) && !l && ec(e, o)) ? r = r.filter((u) => u !== o) : s = a, o = Tt(o);
  }
  return t.set(e, r), r;
}
function tm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: s
  } = e;
  const o = [...n === "clippingAncestors" ? Xr(t) ? [] : em(t, this._c) : [].concat(n), r], a = o[0], l = o.reduce((c, u) => {
    const f = ia(t, u, s);
    return c.top = Me(f.top, c.top), c.right = Ct(f.right, c.right), c.bottom = Ct(f.bottom, c.bottom), c.left = Me(f.left, c.left), c;
  }, ia(t, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function nm(e) {
  const {
    width: t,
    height: n
  } = Xl(e);
  return {
    width: t,
    height: n
  };
}
function rm(e, t, n) {
  const r = tt(t), s = rt(t), i = n === "fixed", o = zt(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ye(0);
  if (r || !r && !i)
    if ((vn(t) !== "body" || Yn(s)) && (a = Jr(t)), r) {
      const h = zt(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else s && (l.x = $i(s));
  const c = s && !r && !i ? Ql(s, a) : Ye(0), u = o.left + a.scrollLeft - l.x - c.x, f = o.top + a.scrollTop - l.y - c.y;
  return {
    x: u,
    y: f,
    width: o.width,
    height: o.height
  };
}
function Ts(e) {
  return qe(e).position === "static";
}
function oa(e, t) {
  if (!tt(e) || qe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return rt(e) === n && (n = n.ownerDocument.body), n;
}
function tc(e, t) {
  const n = ke(e);
  if (Xr(e))
    return n;
  if (!tt(e)) {
    let s = Tt(e);
    for (; s && !an(s); ) {
      if (He(s) && !Ts(s))
        return s;
      s = Tt(s);
    }
    return n;
  }
  let r = oa(e, t);
  for (; r && Hp(r) && Ts(r); )
    r = oa(r, t);
  return r && an(r) && Ts(r) && !Bi(r) ? n : r || qp(e) || n;
}
const sm = async function(e) {
  const t = this.getOffsetParent || tc, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: rm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function im(e) {
  return qe(e).direction === "rtl";
}
const om = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gp,
  getDocumentElement: rt,
  getClippingRect: tm,
  getOffsetParent: tc,
  getElementRects: sm,
  getClientRects: Yp,
  getDimensions: nm,
  getScale: rn,
  isElement: He,
  isRTL: im
};
function am(e, t) {
  let n = null, r;
  const s = rt(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: c,
      top: u,
      width: f,
      height: h
    } = e.getBoundingClientRect();
    if (a || t(), !f || !h)
      return;
    const p = ir(u), g = ir(s.clientWidth - (c + f)), m = ir(s.clientHeight - (u + h)), w = ir(c), b = {
      rootMargin: -p + "px " + -g + "px " + -m + "px " + -w + "px",
      threshold: Me(0, Ct(1, l)) || 1
    };
    let S = !0;
    function _(C) {
      const A = C[0].intersectionRatio;
      if (A !== l) {
        if (!S)
          return o();
        A ? o(!1, A) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      S = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...b,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, b);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function lm(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = zi(e), u = s || i ? [...c ? Fn(c) : [], ...Fn(t)] : [];
  u.forEach((x) => {
    s && x.addEventListener("scroll", n, {
      passive: !0
    }), i && x.addEventListener("resize", n);
  });
  const f = c && a ? am(c, n) : null;
  let h = -1, p = null;
  o && (p = new ResizeObserver((x) => {
    let [b] = x;
    b && b.target === c && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var S;
      (S = p) == null || S.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let g, m = l ? zt(e) : null;
  l && w();
  function w() {
    const x = zt(e);
    m && (x.x !== m.x || x.y !== m.y || x.width !== m.width || x.height !== m.height) && n(), m = x, g = requestAnimationFrame(w);
  }
  return n(), () => {
    var x;
    u.forEach((b) => {
      s && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), f == null || f(), (x = p) == null || x.disconnect(), p = null, l && cancelAnimationFrame(g);
  };
}
const cm = zp, um = $p, dm = Ip, fm = Up, hm = Bp, aa = Np, pm = Wp, mm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: om,
    ...n
  }, i = {
    ...s.platform,
    _c: r
  };
  return Lp(e, t, {
    ...s,
    platform: i
  });
};
var pr = typeof document < "u" ? Ol : Gn;
function Cr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Cr(e[r], t[r]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), n = s.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !Cr(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function nc(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function la(e, t) {
  const n = nc(e);
  return Math.round(t * n) / n;
}
function Ps(e) {
  const t = v.useRef(e);
  return pr(() => {
    t.current = e;
  }), t;
}
function vm(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s,
    elements: {
      reference: i,
      floating: o
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [u, f] = v.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = v.useState(r);
  Cr(h, r) || p(r);
  const [g, m] = v.useState(null), [w, x] = v.useState(null), b = v.useCallback((D) => {
    D !== A.current && (A.current = D, m(D));
  }, []), S = v.useCallback((D) => {
    D !== E.current && (E.current = D, x(D));
  }, []), _ = i || g, C = o || w, A = v.useRef(null), E = v.useRef(null), R = v.useRef(u), B = l != null, $ = Ps(l), G = Ps(s), Q = Ps(c), H = v.useCallback(() => {
    if (!A.current || !E.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: h
    };
    G.current && (D.platform = G.current), mm(A.current, E.current, D).then((J) => {
      const fe = {
        ...J,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Q.current !== !1
      };
      W.current && !Cr(R.current, fe) && (R.current = fe, Zr.flushSync(() => {
        f(fe);
      }));
    });
  }, [h, t, n, G, Q]);
  pr(() => {
    c === !1 && R.current.isPositioned && (R.current.isPositioned = !1, f((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [c]);
  const W = v.useRef(!1);
  pr(() => (W.current = !0, () => {
    W.current = !1;
  }), []), pr(() => {
    if (_ && (A.current = _), C && (E.current = C), _ && C) {
      if ($.current)
        return $.current(_, C, H);
      H();
    }
  }, [_, C, H, $, B]);
  const ie = v.useMemo(() => ({
    reference: A,
    floating: E,
    setReference: b,
    setFloating: S
  }), [b, S]), q = v.useMemo(() => ({
    reference: _,
    floating: C
  }), [_, C]), L = v.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!q.floating)
      return D;
    const J = la(q.floating, u.x), fe = la(q.floating, u.y);
    return a ? {
      ...D,
      transform: "translate(" + J + "px, " + fe + "px)",
      ...nc(q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: J,
      top: fe
    };
  }, [n, a, q.floating, u.x, u.y]);
  return v.useMemo(() => ({
    ...u,
    update: H,
    refs: ie,
    elements: q,
    floatingStyles: L
  }), [u, H, ie, q, L]);
}
const gm = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: s
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? aa({
        element: r.current,
        padding: s
      }).fn(n) : {} : r ? aa({
        element: r,
        padding: s
      }).fn(n) : {};
    }
  };
}, ym = (e, t) => ({
  ...cm(e),
  options: [e, t]
}), xm = (e, t) => ({
  ...um(e),
  options: [e, t]
}), wm = (e, t) => ({
  ...pm(e),
  options: [e, t]
}), bm = (e, t) => ({
  ...dm(e),
  options: [e, t]
}), Sm = (e, t) => ({
  ...fm(e),
  options: [e, t]
}), Cm = (e, t) => ({
  ...hm(e),
  options: [e, t]
}), _m = (e, t) => ({
  ...gm(e),
  options: [e, t]
});
var Tm = "Arrow", rc = v.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: s = 5, ...i } = e;
  return /* @__PURE__ */ d.jsx(
    me.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
rc.displayName = Tm;
var Pm = rc;
function Em(e) {
  const [t, n] = v.useState(void 0);
  return Pe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let o, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          o = c.inlineSize, a = c.blockSize;
        } else
          o = e.offsetWidth, a = e.offsetHeight;
        n({ width: o, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Wi = "Popper", [sc, Qr] = Fl(Wi), [Rm, ic] = sc(Wi), oc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, s] = v.useState(null);
  return /* @__PURE__ */ d.jsx(Rm, { scope: t, anchor: r, onAnchorChange: s, children: n });
};
oc.displayName = Wi;
var ac = "PopperAnchor", lc = v.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e, i = ic(ac, n), o = v.useRef(null), a = ye(t, o);
    return v.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
    }), r ? null : /* @__PURE__ */ d.jsx(me.div, { ...s, ref: a });
  }
);
lc.displayName = ac;
var Ui = "PopperContent", [Am, jm] = sc(Ui), cc = v.forwardRef(
  (e, t) => {
    var N, ne, ve, ee, re, te;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: s = 0,
      align: i = "center",
      alignOffset: o = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: u = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: g,
      ...m
    } = e, w = ic(Ui, n), [x, b] = v.useState(null), S = ye(t, (Ce) => b(Ce)), [_, C] = v.useState(null), A = Em(_), E = (A == null ? void 0 : A.width) ?? 0, R = (A == null ? void 0 : A.height) ?? 0, B = r + (i !== "center" ? "-" + i : ""), $ = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, G = Array.isArray(c) ? c : [c], Q = G.length > 0, H = {
      padding: $,
      boundary: G.filter(km),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Q
    }, { refs: W, floatingStyles: ie, placement: q, isPositioned: L, middlewareData: D } = vm({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: B,
      whileElementsMounted: (...Ce) => lm(...Ce, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        ym({ mainAxis: s + R, alignmentAxis: o }),
        l && xm({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? wm() : void 0,
          ...H
        }),
        l && bm({ ...H }),
        Sm({
          ...H,
          apply: ({ elements: Ce, rects: Ne, availableWidth: Ke, availableHeight: $e }) => {
            const { width: wt, height: sr } = Ne.reference, st = Ce.floating.style;
            st.setProperty("--radix-popper-available-width", `${Ke}px`), st.setProperty("--radix-popper-available-height", `${$e}px`), st.setProperty("--radix-popper-anchor-width", `${wt}px`), st.setProperty("--radix-popper-anchor-height", `${sr}px`);
          }
        }),
        _ && _m({ element: _, padding: a }),
        Om({ arrowWidth: E, arrowHeight: R }),
        h && Cm({ strategy: "referenceHidden", ...H })
      ]
    }), [J, fe] = fc(q), Le = ut(g);
    Pe(() => {
      L && (Le == null || Le());
    }, [L, Le]);
    const gt = (N = D.arrow) == null ? void 0 : N.x, yt = (ne = D.arrow) == null ? void 0 : ne.y, Ze = ((ve = D.arrow) == null ? void 0 : ve.centerOffset) !== 0, [xt, ze] = v.useState();
    return Pe(() => {
      x && ze(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ie,
          transform: L ? ie.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: xt,
          "--radix-popper-transform-origin": [
            (ee = D.transformOrigin) == null ? void 0 : ee.x,
            (re = D.transformOrigin) == null ? void 0 : re.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((te = D.hide) == null ? void 0 : te.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          Am,
          {
            scope: n,
            placedSide: J,
            onArrowChange: C,
            arrowX: gt,
            arrowY: yt,
            shouldHideArrow: Ze,
            children: /* @__PURE__ */ d.jsx(
              me.div,
              {
                "data-side": J,
                "data-align": fe,
                ...m,
                ref: S,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: L ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
cc.displayName = Ui;
var uc = "PopperArrow", Mm = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, dc = v.forwardRef(function(t, n) {
  const { __scopePopper: r, ...s } = t, i = jm(uc, r), o = Mm[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [o]: 0,
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
        children: /* @__PURE__ */ d.jsx(
          Pm,
          {
            ...s,
            ref: n,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
dc.displayName = uc;
function km(e) {
  return e !== null;
}
var Om = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, x, b;
    const { placement: n, rects: r, middlewareData: s } = t, o = ((w = s.arrow) == null ? void 0 : w.centerOffset) !== 0, a = o ? 0 : e.arrowWidth, l = o ? 0 : e.arrowHeight, [c, u] = fc(n), f = { start: "0%", center: "50%", end: "100%" }[u], h = (((x = s.arrow) == null ? void 0 : x.x) ?? 0) + a / 2, p = (((b = s.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let g = "", m = "";
    return c === "bottom" ? (g = o ? f : `${h}px`, m = `${-l}px`) : c === "top" ? (g = o ? f : `${h}px`, m = `${r.floating.height + l}px`) : c === "right" ? (g = `${-l}px`, m = o ? f : `${p}px`) : c === "left" && (g = `${r.floating.width + l}px`, m = o ? f : `${p}px`), { data: { x: g, y: m } };
  }
});
function fc(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var hc = oc, pc = lc, mc = cc, vc = dc, Dm = "Portal", Hi = v.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [s, i] = v.useState(!1);
  Pe(() => i(!0), []);
  const o = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return o ? vf.createPortal(/* @__PURE__ */ d.jsx(me.div, { ...r, ref: t }), o) : null;
});
Hi.displayName = Dm;
function Xs({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, s] = Vm({ defaultProp: t, onChange: n }), i = e !== void 0, o = i ? e : r, a = ut(n), l = v.useCallback(
    (c) => {
      if (i) {
        const f = typeof c == "function" ? c(e) : c;
        f !== e && a(f);
      } else
        s(c);
    },
    [i, e, s, a]
  );
  return [o, l];
}
function Vm({
  defaultProp: e,
  onChange: t
}) {
  const n = v.useState(e), [r] = n, s = v.useRef(r), i = ut(t);
  return v.useEffect(() => {
    s.current !== r && (i(r), s.current = r);
  }, [r, s, i]), n;
}
function Lm(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Nm = "VisuallyHidden", qi = v.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    me.span,
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
qi.displayName = Nm;
var Im = qi, Bm = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Kt = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), ar = {}, Es = 0, gc = function(e) {
  return e && (e.host || gc(e.parentNode));
}, Fm = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = gc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, zm = function(e, t, n, r) {
  var s = Fm(t, Array.isArray(e) ? e : [e]);
  ar[n] || (ar[n] = /* @__PURE__ */ new WeakMap());
  var i = ar[n], o = [], a = /* @__PURE__ */ new Set(), l = new Set(s), c = function(f) {
    !f || a.has(f) || (a.add(f), c(f.parentNode));
  };
  s.forEach(c);
  var u = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (a.has(h))
        u(h);
      else
        try {
          var p = h.getAttribute(r), g = p !== null && p !== "false", m = (Kt.get(h) || 0) + 1, w = (i.get(h) || 0) + 1;
          Kt.set(h, m), i.set(h, w), o.push(h), m === 1 && g && or.set(h, !0), w === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", h, x);
        }
    });
  };
  return u(t), a.clear(), Es++, function() {
    o.forEach(function(f) {
      var h = Kt.get(f) - 1, p = i.get(f) - 1;
      Kt.set(f, h), i.set(f, p), h || (or.has(f) || f.removeAttribute(r), or.delete(f)), p || f.removeAttribute(n);
    }), Es--, Es || (Kt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), ar = {});
  };
}, $m = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), s = Bm(e);
  return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))), zm(r, s, n, "aria-hidden")) : function() {
    return null;
  };
}, Ge = function() {
  return Ge = Object.assign || function(t) {
    for (var n, r = 1, s = arguments.length; r < s; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ge.apply(this, arguments);
};
function yc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
  return n;
}
function Wm(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, s = t.length, i; r < s; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var mr = "right-scroll-bar-position", vr = "width-before-scroll-bar", Um = "with-scroll-bars-hidden", Hm = "--removed-body-scroll-bar-size";
function Rs(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function qm(e, t) {
  var n = Nn(function() {
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
          var s = n.value;
          s !== r && (n.value = r, n.callback(r, s));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Zm = typeof window < "u" ? v.useLayoutEffect : v.useEffect, ca = /* @__PURE__ */ new WeakMap();
function Km(e, t) {
  var n = qm(null, function(r) {
    return e.forEach(function(s) {
      return Rs(s, r);
    });
  });
  return Zm(function() {
    var r = ca.get(n);
    if (r) {
      var s = new Set(r), i = new Set(e), o = n.current;
      s.forEach(function(a) {
        i.has(a) || Rs(a, null);
      }), i.forEach(function(a) {
        s.has(a) || Rs(a, o);
      });
    }
    ca.set(n, e);
  }, [e]), n;
}
function Gm(e) {
  return e;
}
function Ym(e, t) {
  t === void 0 && (t = Gm);
  var n = [], r = !1, s = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var o = t(i, r);
      return n.push(o), function() {
        n = n.filter(function(a) {
          return a !== o;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var o = n;
        n = [], o.forEach(i);
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
      var o = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), o = n;
      }
      var l = function() {
        var u = o;
        o = [], u.forEach(i);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(u) {
          o.push(u), c();
        },
        filter: function(u) {
          return o = o.filter(u), n;
        }
      };
    }
  };
  return s;
}
function Xm(e) {
  e === void 0 && (e = {});
  var t = Ym(null);
  return t.options = Ge({ async: !0, ssr: !1 }, e), t;
}
var xc = function(e) {
  var t = e.sideCar, n = yc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, Ge({}, n));
};
xc.isSideCarExport = !0;
function Jm(e, t) {
  return e.useMedium(t), xc;
}
var wc = Xm(), As = function() {
}, es = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: As,
    onWheelCapture: As,
    onTouchMoveCapture: As
  }), s = r[0], i = r[1], o = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, f = e.shards, h = e.sideCar, p = e.noIsolation, g = e.inert, m = e.allowPinchZoom, w = e.as, x = w === void 0 ? "div" : w, b = e.gapMode, S = yc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = h, C = Km([n, t]), A = Ge(Ge({}, S), s);
  return v.createElement(
    v.Fragment,
    null,
    u && v.createElement(_, { sideCar: wc, removeScrollBar: c, shards: f, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!m, lockRef: n, gapMode: b }),
    o ? v.cloneElement(v.Children.only(a), Ge(Ge({}, A), { ref: C })) : v.createElement(x, Ge({}, A, { className: l, ref: C }), a)
  );
});
es.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
es.classNames = {
  fullWidth: vr,
  zeroRight: mr
};
var Qm = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function e0() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Qm();
  return t && e.setAttribute("nonce", t), e;
}
function t0(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function n0(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var r0 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = e0()) && (t0(t, n), n0(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, s0 = function() {
  var e = r0();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, bc = function() {
  var e = s0(), t = function(n) {
    var r = n.styles, s = n.dynamic;
    return e(r, s), null;
  };
  return t;
}, i0 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, js = function(e) {
  return parseInt(e || "", 10) || 0;
}, o0 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [js(n), js(r), js(s)];
}, a0 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return i0;
  var t = o0(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, l0 = bc(), sn = "data-scroll-locked", c0 = function(e, t, n, r) {
  var s = e.left, i = e.top, o = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Um, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(sn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(mr, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(vr, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(mr, " .").concat(mr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(vr, " .").concat(vr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(sn, `] {
    `).concat(Hm, ": ").concat(a, `px;
  }
`);
}, ua = function() {
  var e = parseInt(document.body.getAttribute(sn) || "0", 10);
  return isFinite(e) ? e : 0;
}, u0 = function() {
  v.useEffect(function() {
    return document.body.setAttribute(sn, (ua() + 1).toString()), function() {
      var e = ua() - 1;
      e <= 0 ? document.body.removeAttribute(sn) : document.body.setAttribute(sn, e.toString());
    };
  }, []);
}, d0 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, s = r === void 0 ? "margin" : r;
  u0();
  var i = v.useMemo(function() {
    return a0(s);
  }, [s]);
  return v.createElement(l0, { styles: c0(i, !t, s, n ? "" : "!important") });
}, Js = !1;
if (typeof window < "u")
  try {
    var lr = Object.defineProperty({}, "passive", {
      get: function() {
        return Js = !0, !0;
      }
    });
    window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
  } catch {
    Js = !1;
  }
var Gt = Js ? { passive: !1 } : !1, f0 = function(e) {
  return e.tagName === "TEXTAREA";
}, Sc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !f0(e) && n[t] === "visible")
  );
}, h0 = function(e) {
  return Sc(e, "overflowY");
}, p0 = function(e) {
  return Sc(e, "overflowX");
}, da = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var s = Cc(e, r);
    if (s) {
      var i = _c(e, r), o = i[1], a = i[2];
      if (o > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, m0 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, v0 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Cc = function(e, t) {
  return e === "v" ? h0(t) : p0(t);
}, _c = function(e, t) {
  return e === "v" ? m0(t) : v0(t);
}, g0 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, y0 = function(e, t, n, r, s) {
  var i = g0(e, window.getComputedStyle(t).direction), o = i * r, a = n.target, l = t.contains(a), c = !1, u = o > 0, f = 0, h = 0;
  do {
    var p = _c(e, a), g = p[0], m = p[1], w = p[2], x = m - w - i * g;
    (g || x) && Cc(e, a) && (f += x, h += g), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (u && (Math.abs(f) < 1 || !s) || !u && (Math.abs(h) < 1 || !s)) && (c = !0), c;
}, cr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, fa = function(e) {
  return [e.deltaX, e.deltaY];
}, ha = function(e) {
  return e && "current" in e ? e.current : e;
}, x0 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, w0 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, b0 = 0, Yt = [];
function S0(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), s = v.useState(b0++)[0], i = v.useState(bc)[0], o = v.useRef(e);
  v.useEffect(function() {
    o.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var m = Wm([e.lockRef.current], (e.shards || []).map(ha), !0).filter(Boolean);
      return m.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), m.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = v.useCallback(function(m, w) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !o.current.allowPinchZoom;
    var x = cr(m), b = n.current, S = "deltaX" in m ? m.deltaX : b[0] - x[0], _ = "deltaY" in m ? m.deltaY : b[1] - x[1], C, A = m.target, E = Math.abs(S) > Math.abs(_) ? "h" : "v";
    if ("touches" in m && E === "h" && A.type === "range")
      return !1;
    var R = da(E, A);
    if (!R)
      return !0;
    if (R ? C = E : (C = E === "v" ? "h" : "v", R = da(E, A)), !R)
      return !1;
    if (!r.current && "changedTouches" in m && (S || _) && (r.current = C), !C)
      return !0;
    var B = r.current || C;
    return y0(B, w, m, B === "h" ? S : _, !0);
  }, []), l = v.useCallback(function(m) {
    var w = m;
    if (!(!Yt.length || Yt[Yt.length - 1] !== i)) {
      var x = "deltaY" in w ? fa(w) : cr(w), b = t.current.filter(function(C) {
        return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && x0(C.delta, x);
      })[0];
      if (b && b.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!b) {
        var S = (o.current.shards || []).map(ha).filter(Boolean).filter(function(C) {
          return C.contains(w.target);
        }), _ = S.length > 0 ? a(w, S[0]) : !o.current.noIsolation;
        _ && w.cancelable && w.preventDefault();
      }
    }
  }, []), c = v.useCallback(function(m, w, x, b) {
    var S = { name: m, delta: w, target: x, should: b, shadowParent: C0(x) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== S;
      });
    }, 1);
  }, []), u = v.useCallback(function(m) {
    n.current = cr(m), r.current = void 0;
  }, []), f = v.useCallback(function(m) {
    c(m.type, fa(m), m.target, a(m, e.lockRef.current));
  }, []), h = v.useCallback(function(m) {
    c(m.type, cr(m), m.target, a(m, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return Yt.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, Gt), document.addEventListener("touchmove", l, Gt), document.addEventListener("touchstart", u, Gt), function() {
      Yt = Yt.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", l, Gt), document.removeEventListener("touchmove", l, Gt), document.removeEventListener("touchstart", u, Gt);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    g ? v.createElement(i, { styles: w0(s) }) : null,
    p ? v.createElement(d0, { gapMode: e.gapMode }) : null
  );
}
function C0(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const _0 = Jm(wc, S0);
var Tc = v.forwardRef(function(e, t) {
  return v.createElement(es, Ge({}, e, { ref: t, sideCar: _0 }));
});
Tc.classNames = es.classNames;
var T0 = [" ", "Enter", "ArrowUp", "ArrowDown"], P0 = [" ", "Enter"], Xn = "Select", [ts, ns, E0] = sp(Xn), [gn, H5] = Wl(Xn, [
  E0,
  Qr
]), rs = Qr(), [R0, Mt] = gn(Xn), [A0, j0] = gn(Xn), Pc = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    value: o,
    defaultValue: a,
    onValueChange: l,
    dir: c,
    name: u,
    autoComplete: f,
    disabled: h,
    required: p,
    form: g
  } = e, m = rs(t), [w, x] = v.useState(null), [b, S] = v.useState(null), [_, C] = v.useState(!1), A = ap(c), [E = !1, R] = Xs({
    prop: r,
    defaultProp: s,
    onChange: i
  }), [B, $] = Xs({
    prop: o,
    defaultProp: a,
    onChange: l
  }), G = v.useRef(null), Q = w ? g || !!w.closest("form") : !0, [H, W] = v.useState(/* @__PURE__ */ new Set()), ie = Array.from(H).map((q) => q.props.value).join(";");
  return /* @__PURE__ */ d.jsx(hc, { ...m, children: /* @__PURE__ */ d.jsxs(
    R0,
    {
      required: p,
      scope: t,
      trigger: w,
      onTriggerChange: x,
      valueNode: b,
      onValueNodeChange: S,
      valueNodeHasChildren: _,
      onValueNodeHasChildrenChange: C,
      contentId: Gr(),
      value: B,
      onValueChange: $,
      open: E,
      onOpenChange: R,
      dir: A,
      triggerPointerDownPosRef: G,
      disabled: h,
      children: [
        /* @__PURE__ */ d.jsx(ts.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          A0,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: v.useCallback((q) => {
              W((L) => new Set(L).add(q));
            }, []),
            onNativeOptionRemove: v.useCallback((q) => {
              W((L) => {
                const D = new Set(L);
                return D.delete(q), D;
              });
            }, []),
            children: n
          }
        ) }),
        Q ? /* @__PURE__ */ d.jsxs(
          Kc,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: B,
            onChange: (q) => $(q.target.value),
            disabled: h,
            form: g,
            children: [
              B === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from(H)
            ]
          },
          ie
        ) : null
      ]
    }
  ) });
};
Pc.displayName = Xn;
var Ec = "SelectTrigger", Rc = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...s } = e, i = rs(n), o = Mt(Ec, n), a = o.disabled || r, l = ye(t, o.onTriggerChange), c = ns(n), u = v.useRef("touch"), [f, h, p] = Gc((m) => {
      const w = c().filter((S) => !S.disabled), x = w.find((S) => S.value === o.value), b = Yc(w, m, x);
      b !== void 0 && o.onValueChange(b.value);
    }), g = (m) => {
      a || (o.onOpenChange(!0), p()), m && (o.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(pc, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      me.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": o.contentId,
        "aria-expanded": o.open,
        "aria-required": o.required,
        "aria-autocomplete": "none",
        dir: o.dir,
        "data-state": o.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": Zc(o.value) ? "" : void 0,
        ...s,
        ref: l,
        onClick: ae(s.onClick, (m) => {
          m.currentTarget.focus(), u.current !== "mouse" && g(m);
        }),
        onPointerDown: ae(s.onPointerDown, (m) => {
          u.current = m.pointerType;
          const w = m.target;
          w.hasPointerCapture(m.pointerId) && w.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (g(m), m.preventDefault());
        }),
        onKeyDown: ae(s.onKeyDown, (m) => {
          const w = f.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(w && m.key === " ") && T0.includes(m.key) && (g(), m.preventDefault());
        })
      }
    ) });
  }
);
Rc.displayName = Ec;
var Ac = "SelectValue", jc = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: s, children: i, placeholder: o = "", ...a } = e, l = Mt(Ac, n), { onValueNodeHasChildrenChange: c } = l, u = i !== void 0, f = ye(t, l.onValueNodeChange);
    return Pe(() => {
      c(u);
    }, [c, u]), /* @__PURE__ */ d.jsx(
      me.span,
      {
        ...a,
        ref: f,
        style: { pointerEvents: "none" },
        children: Zc(l.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: o }) : i
      }
    );
  }
);
jc.displayName = Ac;
var M0 = "SelectIcon", k0 = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...s } = e;
    return /* @__PURE__ */ d.jsx(me.span, { "aria-hidden": !0, ...s, ref: t, children: r || "▼" });
  }
);
k0.displayName = M0;
var O0 = "SelectPortal", Mc = (e) => /* @__PURE__ */ d.jsx(Hi, { asChild: !0, ...e });
Mc.displayName = O0;
var $t = "SelectContent", kc = v.forwardRef(
  (e, t) => {
    const n = Mt($t, e.__scopeSelect), [r, s] = v.useState();
    if (Pe(() => {
      s(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Zr.createPortal(
        /* @__PURE__ */ d.jsx(Oc, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(ts.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(Dc, { ...e, ref: t });
  }
);
kc.displayName = $t;
var We = 10, [Oc, kt] = gn($t), D0 = "SelectContentImpl", Dc = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: o,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: g,
      hideWhenDetached: m,
      avoidCollisions: w,
      //
      ...x
    } = e, b = Mt($t, n), [S, _] = v.useState(null), [C, A] = v.useState(null), E = ye(t, (N) => _(N)), [R, B] = v.useState(null), [$, G] = v.useState(
      null
    ), Q = ns(n), [H, W] = v.useState(!1), ie = v.useRef(!1);
    v.useEffect(() => {
      if (S) return $m(S);
    }, [S]), yp();
    const q = v.useCallback(
      (N) => {
        const [ne, ...ve] = Q().map((te) => te.ref.current), [ee] = ve.slice(-1), re = document.activeElement;
        for (const te of N)
          if (te === re || (te == null || te.scrollIntoView({ block: "nearest" }), te === ne && C && (C.scrollTop = 0), te === ee && C && (C.scrollTop = C.scrollHeight), te == null || te.focus(), document.activeElement !== re)) return;
      },
      [Q, C]
    ), L = v.useCallback(
      () => q([R, S]),
      [q, R, S]
    );
    v.useEffect(() => {
      H && L();
    }, [H, L]);
    const { onOpenChange: D, triggerPointerDownPosRef: J } = b;
    v.useEffect(() => {
      if (S) {
        let N = { x: 0, y: 0 };
        const ne = (ee) => {
          var re, te;
          N = {
            x: Math.abs(Math.round(ee.pageX) - (((re = J.current) == null ? void 0 : re.x) ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - (((te = J.current) == null ? void 0 : te.y) ?? 0))
          };
        }, ve = (ee) => {
          N.x <= 10 && N.y <= 10 ? ee.preventDefault() : S.contains(ee.target) || D(!1), document.removeEventListener("pointermove", ne), J.current = null;
        };
        return J.current !== null && (document.addEventListener("pointermove", ne), document.addEventListener("pointerup", ve, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", ve, { capture: !0 });
        };
      }
    }, [S, D, J]), v.useEffect(() => {
      const N = () => D(!1);
      return window.addEventListener("blur", N), window.addEventListener("resize", N), () => {
        window.removeEventListener("blur", N), window.removeEventListener("resize", N);
      };
    }, [D]);
    const [fe, Le] = Gc((N) => {
      const ne = Q().filter((re) => !re.disabled), ve = ne.find((re) => re.ref.current === document.activeElement), ee = Yc(ne, N, ve);
      ee && setTimeout(() => ee.ref.current.focus());
    }), gt = v.useCallback(
      (N, ne, ve) => {
        const ee = !ie.current && !ve;
        (b.value !== void 0 && b.value === ne || ee) && (B(N), ee && (ie.current = !0));
      },
      [b.value]
    ), yt = v.useCallback(() => S == null ? void 0 : S.focus(), [S]), Ze = v.useCallback(
      (N, ne, ve) => {
        const ee = !ie.current && !ve;
        (b.value !== void 0 && b.value === ne || ee) && G(N);
      },
      [b.value]
    ), xt = r === "popper" ? Qs : Vc, ze = xt === Qs ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: g,
      hideWhenDetached: m,
      avoidCollisions: w
    } : {};
    return /* @__PURE__ */ d.jsx(
      Oc,
      {
        scope: n,
        content: S,
        viewport: C,
        onViewportChange: A,
        itemRefCallback: gt,
        selectedItem: R,
        onItemLeave: yt,
        itemTextRefCallback: Ze,
        focusSelectedItem: L,
        selectedItemText: $,
        position: r,
        isPositioned: H,
        searchRef: fe,
        children: /* @__PURE__ */ d.jsx(Tc, { as: In, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          ql,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (N) => {
              N.preventDefault();
            },
            onUnmountAutoFocus: ae(s, (N) => {
              var ne;
              (ne = b.trigger) == null || ne.focus({ preventScroll: !0 }), N.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              Vi,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: o,
                onFocusOutside: (N) => N.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  xt,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (N) => N.preventDefault(),
                    ...x,
                    ...ze,
                    onPlaced: () => W(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: ae(x.onKeyDown, (N) => {
                      const ne = N.ctrlKey || N.altKey || N.metaKey;
                      if (N.key === "Tab" && N.preventDefault(), !ne && N.key.length === 1 && Le(N.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(N.key)) {
                        let ee = Q().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(N.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(N.key)) {
                          const re = N.target, te = ee.indexOf(re);
                          ee = ee.slice(te + 1);
                        }
                        setTimeout(() => q(ee)), N.preventDefault();
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
Dc.displayName = D0;
var V0 = "SelectItemAlignedPosition", Vc = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...s } = e, i = Mt($t, n), o = kt($t, n), [a, l] = v.useState(null), [c, u] = v.useState(null), f = ye(t, (E) => u(E)), h = ns(n), p = v.useRef(!1), g = v.useRef(!0), { viewport: m, selectedItem: w, selectedItemText: x, focusSelectedItem: b } = o, S = v.useCallback(() => {
    if (i.trigger && i.valueNode && a && c && m && w && x) {
      const E = i.trigger.getBoundingClientRect(), R = c.getBoundingClientRect(), B = i.valueNode.getBoundingClientRect(), $ = x.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const re = $.left - R.left, te = B.left - re, Ce = E.left - te, Ne = E.width + Ce, Ke = Math.max(Ne, R.width), $e = window.innerWidth - We, wt = Zo(te, [
          We,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(We, $e - Ke)
        ]);
        a.style.minWidth = Ne + "px", a.style.left = wt + "px";
      } else {
        const re = R.right - $.right, te = window.innerWidth - B.right - re, Ce = window.innerWidth - E.right - te, Ne = E.width + Ce, Ke = Math.max(Ne, R.width), $e = window.innerWidth - We, wt = Zo(te, [
          We,
          Math.max(We, $e - Ke)
        ]);
        a.style.minWidth = Ne + "px", a.style.right = wt + "px";
      }
      const G = h(), Q = window.innerHeight - We * 2, H = m.scrollHeight, W = window.getComputedStyle(c), ie = parseInt(W.borderTopWidth, 10), q = parseInt(W.paddingTop, 10), L = parseInt(W.borderBottomWidth, 10), D = parseInt(W.paddingBottom, 10), J = ie + q + H + D + L, fe = Math.min(w.offsetHeight * 5, J), Le = window.getComputedStyle(m), gt = parseInt(Le.paddingTop, 10), yt = parseInt(Le.paddingBottom, 10), Ze = E.top + E.height / 2 - We, xt = Q - Ze, ze = w.offsetHeight / 2, N = w.offsetTop + ze, ne = ie + q + N, ve = J - ne;
      if (ne <= Ze) {
        const re = G.length > 0 && w === G[G.length - 1].ref.current;
        a.style.bottom = "0px";
        const te = c.clientHeight - m.offsetTop - m.offsetHeight, Ce = Math.max(
          xt,
          ze + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? yt : 0) + te + L
        ), Ne = ne + Ce;
        a.style.height = Ne + "px";
      } else {
        const re = G.length > 0 && w === G[0].ref.current;
        a.style.top = "0px";
        const Ce = Math.max(
          Ze,
          ie + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? gt : 0) + ze
        ) + ve;
        a.style.height = Ce + "px", m.scrollTop = ne - Ze + m.offsetTop;
      }
      a.style.margin = `${We}px 0`, a.style.minHeight = fe + "px", a.style.maxHeight = Q + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    h,
    i.trigger,
    i.valueNode,
    a,
    c,
    m,
    w,
    x,
    i.dir,
    r
  ]);
  Pe(() => S(), [S]);
  const [_, C] = v.useState();
  Pe(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const A = v.useCallback(
    (E) => {
      E && g.current === !0 && (S(), b == null || b(), g.current = !1);
    },
    [S, b]
  );
  return /* @__PURE__ */ d.jsx(
    N0,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: _
          },
          children: /* @__PURE__ */ d.jsx(
            me.div,
            {
              ...s,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
});
Vc.displayName = V0;
var L0 = "SelectPopperPosition", Qs = v.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: s = We,
    ...i
  } = e, o = rs(n);
  return /* @__PURE__ */ d.jsx(
    mc,
    {
      ...o,
      ...i,
      ref: t,
      align: r,
      collisionPadding: s,
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
Qs.displayName = L0;
var [N0, Zi] = gn($t, {}), ei = "SelectViewport", Lc = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...s } = e, i = kt(ei, n), o = Zi(ei, n), a = ye(t, i.onViewportChange), l = v.useRef(0);
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
      /* @__PURE__ */ d.jsx(ts.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
        me.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
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
            ...s.style
          },
          onScroll: ae(s.onScroll, (c) => {
            const u = c.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = o;
            if (h != null && h.current && f) {
              const p = Math.abs(l.current - u.scrollTop);
              if (p > 0) {
                const g = window.innerHeight - We * 2, m = parseFloat(f.style.minHeight), w = parseFloat(f.style.height), x = Math.max(m, w);
                if (x < g) {
                  const b = x + p, S = Math.min(g, b), _ = b - S;
                  f.style.height = S + "px", f.style.bottom === "0px" && (u.scrollTop = _ > 0 ? _ : 0, f.style.justifyContent = "flex-end");
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
Lc.displayName = ei;
var Nc = "SelectGroup", [I0, B0] = gn(Nc), F0 = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, s = Gr();
    return /* @__PURE__ */ d.jsx(I0, { scope: n, id: s, children: /* @__PURE__ */ d.jsx(me.div, { role: "group", "aria-labelledby": s, ...r, ref: t }) });
  }
);
F0.displayName = Nc;
var Ic = "SelectLabel", z0 = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, s = B0(Ic, n);
    return /* @__PURE__ */ d.jsx(me.div, { id: s.id, ...r, ref: t });
  }
);
z0.displayName = Ic;
var _r = "SelectItem", [$0, Bc] = gn(_r), Fc = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: s = !1,
      textValue: i,
      ...o
    } = e, a = Mt(_r, n), l = kt(_r, n), c = a.value === r, [u, f] = v.useState(i ?? ""), [h, p] = v.useState(!1), g = ye(
      t,
      (b) => {
        var S;
        return (S = l.itemRefCallback) == null ? void 0 : S.call(l, b, r, s);
      }
    ), m = Gr(), w = v.useRef("touch"), x = () => {
      s || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      $0,
      {
        scope: n,
        value: r,
        disabled: s,
        textId: m,
        isSelected: c,
        onItemTextChange: v.useCallback((b) => {
          f((S) => S || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          ts.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: s,
            textValue: u,
            children: /* @__PURE__ */ d.jsx(
              me.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": c && h,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...o,
                ref: g,
                onFocus: ae(o.onFocus, () => p(!0)),
                onBlur: ae(o.onBlur, () => p(!1)),
                onClick: ae(o.onClick, () => {
                  w.current !== "mouse" && x();
                }),
                onPointerUp: ae(o.onPointerUp, () => {
                  w.current === "mouse" && x();
                }),
                onPointerDown: ae(o.onPointerDown, (b) => {
                  w.current = b.pointerType;
                }),
                onPointerMove: ae(o.onPointerMove, (b) => {
                  var S;
                  w.current = b.pointerType, s ? (S = l.onItemLeave) == null || S.call(l) : w.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ae(o.onPointerLeave, (b) => {
                  var S;
                  b.currentTarget === document.activeElement && ((S = l.onItemLeave) == null || S.call(l));
                }),
                onKeyDown: ae(o.onKeyDown, (b) => {
                  var _;
                  ((_ = l.searchRef) == null ? void 0 : _.current) !== "" && b.key === " " || (P0.includes(b.key) && x(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Fc.displayName = _r;
var _n = "SelectItemText", zc = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: s, ...i } = e, o = Mt(_n, n), a = kt(_n, n), l = Bc(_n, n), c = j0(_n, n), [u, f] = v.useState(null), h = ye(
      t,
      (x) => f(x),
      l.onItemTextChange,
      (x) => {
        var b;
        return (b = a.itemTextRefCallback) == null ? void 0 : b.call(a, x, l.value, l.disabled);
      }
    ), p = u == null ? void 0 : u.textContent, g = v.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: l.value, disabled: l.disabled, children: p }, l.value),
      [l.disabled, l.value, p]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: w } = c;
    return Pe(() => (m(g), () => w(g)), [m, w, g]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(me.span, { id: l.textId, ...i, ref: h }),
      l.isSelected && o.valueNode && !o.valueNodeHasChildren ? Zr.createPortal(i.children, o.valueNode) : null
    ] });
  }
);
zc.displayName = _n;
var $c = "SelectItemIndicator", Wc = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Bc($c, n).isSelected ? /* @__PURE__ */ d.jsx(me.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Wc.displayName = $c;
var ti = "SelectScrollUpButton", W0 = v.forwardRef((e, t) => {
  const n = kt(ti, e.__scopeSelect), r = Zi(ti, e.__scopeSelect), [s, i] = v.useState(!1), o = ye(t, r.onScrollButtonChange);
  return Pe(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        i(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ d.jsx(
    Hc,
    {
      ...e,
      ref: o,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
W0.displayName = ti;
var ni = "SelectScrollDownButton", Uc = v.forwardRef((e, t) => {
  const n = kt(ni, e.__scopeSelect), r = Zi(ni, e.__scopeSelect), [s, i] = v.useState(!1), o = ye(t, r.onScrollButtonChange);
  return Pe(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < c;
        i(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ d.jsx(
    Hc,
    {
      ...e,
      ref: o,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Uc.displayName = ni;
var Hc = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...s } = e, i = kt("SelectScrollButton", n), o = v.useRef(null), a = ns(n), l = v.useCallback(() => {
    o.current !== null && (window.clearInterval(o.current), o.current = null);
  }, []);
  return v.useEffect(() => () => l(), [l]), Pe(() => {
    var u;
    const c = a().find((f) => f.ref.current === document.activeElement);
    (u = c == null ? void 0 : c.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ d.jsx(
    me.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: ae(s.onPointerDown, () => {
        o.current === null && (o.current = window.setInterval(r, 50));
      }),
      onPointerMove: ae(s.onPointerMove, () => {
        var c;
        (c = i.onItemLeave) == null || c.call(i), o.current === null && (o.current = window.setInterval(r, 50));
      }),
      onPointerLeave: ae(s.onPointerLeave, () => {
        l();
      })
    }
  );
}), U0 = "SelectSeparator", H0 = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(me.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
H0.displayName = U0;
var ri = "SelectArrow", qc = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, s = rs(n), i = Mt(ri, n), o = kt(ri, n);
    return i.open && o.position === "popper" ? /* @__PURE__ */ d.jsx(vc, { ...s, ...r, ref: t }) : null;
  }
);
qc.displayName = ri;
function Zc(e) {
  return e === "" || e === void 0;
}
var Kc = v.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, s = v.useRef(null), i = ye(t, s), o = Lm(n);
    return v.useEffect(() => {
      const a = s.current, l = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (o !== n && u) {
        const f = new Event("change", { bubbles: !0 });
        u.call(a, n), a.dispatchEvent(f);
      }
    }, [o, n]), /* @__PURE__ */ d.jsx(qi, { asChild: !0, children: /* @__PURE__ */ d.jsx("select", { ...r, ref: i, defaultValue: n }) });
  }
);
Kc.displayName = "BubbleSelect";
function Gc(e) {
  const t = ut(e), n = v.useRef(""), r = v.useRef(0), s = v.useCallback(
    (o) => {
      const a = n.current + o;
      t(a), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), i = v.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return v.useEffect(() => () => window.clearTimeout(r.current), []), [n, s, i];
}
function Yc(e, t, n) {
  const s = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let o = q0(e, Math.max(i, 0));
  s.length === 1 && (o = o.filter((c) => c !== n));
  const l = o.find(
    (c) => c.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function q0(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Z0 = Pc, K0 = Rc, G0 = jc, Y0 = Mc, X0 = kc, J0 = Lc, Q0 = Fc, e1 = zc, t1 = Wc, n1 = Uc, r1 = qc;
function s1({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label, s = typeof t == "string" ? null : t.icon;
    return /* @__PURE__ */ d.jsxs(
      Q0,
      {
        value: n,
        className: "min-h-[2rem] px-6 py-3 flex items-center gap-2 hover:outline-none cursor-pointer hover:bg-grey-600",
        children: [
          /* @__PURE__ */ d.jsx(t1, { className: "size-5", children: /* @__PURE__ */ d.jsx(ct, { name: "Checkmark", width: "20" }) }),
          /* @__PURE__ */ d.jsx(e1, { asChild: !0, children: /* @__PURE__ */ d.jsxs("span", { className: "flex gap-3 items-center text-white", children: [
            s ? /* @__PURE__ */ d.jsx("img", { src: s, className: "size-5", width: "20", alt: "" }) : null,
            /* @__PURE__ */ d.jsx("span", { children: r }),
            " "
          ] }) })
        ]
      },
      n
    );
  });
}
function si({ items: e, native: t }) {
  return t ? /* @__PURE__ */ d.jsx(Jh, { items: e }) : /* @__PURE__ */ d.jsx(s1, { items: e });
}
function i1(e) {
  const {
    defaultValue: t,
    arrowIcon: n = "ChevronDown",
    children: r,
    ...s
  } = e;
  return /* @__PURE__ */ d.jsxs(Z0, { defaultValue: t, ...s, children: [
    /* @__PURE__ */ d.jsxs(K0, { className: "flex items-center justify-between w-full bg-transparent border border-grey-500 rounded-[0.5rem] text-gray-200 focus:ring-2 ring-blue-500 px-4 py-3", children: [
      /* @__PURE__ */ d.jsx(G0, {}),
      /* @__PURE__ */ d.jsx(ct, { name: n, width: "20" })
    ] }),
    /* @__PURE__ */ d.jsx(Y0, { children: /* @__PURE__ */ d.jsxs(X0, { className: "rounded-[0.5rem] overflow-clip text-white border border-white bg-light_buttonGlass backdrop-blur", children: [
      /* @__PURE__ */ d.jsx(J0, { className: "flex flex-col", children: r }),
      /* @__PURE__ */ d.jsx(n1, {}),
      /* @__PURE__ */ d.jsx(r1, {})
    ] }) })
  ] });
}
function o1(e, t) {
  const {
    defaultValue: n,
    children: r,
    arrowIcon: s = "ChevronDown",
    ...i
  } = Ve("select", e), [o, a] = Nn(null);
  function l(u) {
    var h, p, g;
    e != null && e.onChange && e.onChange(u), e != null && e.onValueChange && e.onValueChange(u.target.value);
    const f = (g = (p = (h = u == null ? void 0 : u.target) == null ? void 0 : h.querySelector("option:checked")) == null ? void 0 : p.dataset) == null ? void 0 : g.icon;
    f && a(f);
  }
  const c = ki((u) => (l({ target: u }), t), []);
  return /* @__PURE__ */ d.jsxs("div", { ref: c, ...i, children: [
    o ? /* @__PURE__ */ d.jsx("img", { src: o, width: "20", className: "size-5", alt: "" }) : null,
    /* @__PURE__ */ d.jsx("div", { className: "absolute w-[2.5rem] z-10 right-0 pointer-events-none top-0 bottom-0 items-center justify-center flex cursor-pointer", children: /* @__PURE__ */ d.jsx(ct, { name: s, className: "w-4 h-4 text-white" }) }),
    /* @__PURE__ */ d.jsx("select", { onChange: l, defaultValue: n, children: r })
  ] });
}
const a1 = jt(o1);
function l1(e) {
  let t = {};
  const n = {};
  return Object.keys(e).filter((r) => r.startsWith("variant-")).forEach((r) => {
    const [, s] = r.split("-");
    s && (t[s] = e[r]);
  }), Object.keys(e).filter((r) => !r.startsWith("variant-") && r !== "subvariants").forEach((r) => {
    n[r] = e[r];
  }), e.subvariants && (t = Object.assign(e.subvariants, t)), {
    ...Object.keys(t).length > 0 && { subvariants: t },
    ...n
  };
}
function c1(e, t) {
  const { options: n, native: r = !1, children: s } = l1(e), i = Te.isValidElement(s) ? Te.cloneElement(s, { native: r }) : s;
  return r ? /* @__PURE__ */ d.jsx(a1, { ref: t, ...e, children: n ? /* @__PURE__ */ d.jsx(si, { items: n, native: !0 }) : i }) : /* @__PURE__ */ d.jsx(i1, { ref: t, ...e, children: n ? /* @__PURE__ */ d.jsx(si, { items: n }) : i });
}
const u1 = Object.assign(jt(c1), {
  Options: si
});
var X;
(function(e) {
  e.assertEqual = (s) => s;
  function t(s) {
  }
  e.assertIs = t;
  function n(s) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (s) => {
    const i = {};
    for (const o of s)
      i[o] = o;
    return i;
  }, e.getValidEnumValues = (s) => {
    const i = e.objectKeys(s).filter((a) => typeof s[s[a]] != "number"), o = {};
    for (const a of i)
      o[a] = s[a];
    return e.objectValues(o);
  }, e.objectValues = (s) => e.objectKeys(s).map(function(i) {
    return s[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const i = [];
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
    return i;
  }, e.find = (s, i) => {
    for (const o of s)
      if (i(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function r(s, i = " | ") {
    return s.map((o) => typeof o == "string" ? `'${o}'` : o).join(i);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i;
})(X || (X = {}));
var pa;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(pa || (pa = {}));
const k = X.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), It = (e) => {
  switch (typeof e) {
    case "undefined":
      return k.undefined;
    case "string":
      return k.string;
    case "number":
      return isNaN(e) ? k.nan : k.number;
    case "boolean":
      return k.boolean;
    case "function":
      return k.function;
    case "bigint":
      return k.bigint;
    case "symbol":
      return k.symbol;
    case "object":
      return Array.isArray(e) ? k.array : e === null ? k.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? k.promise : typeof Map < "u" && e instanceof Map ? k.map : typeof Set < "u" && e instanceof Set ? k.set : typeof Date < "u" && e instanceof Date ? k.date : k.object;
    default:
      return k.unknown;
  }
}, P = X.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class Oe extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(i) {
      return i.message;
    }, r = { _errors: [] }, s = (i) => {
      for (const o of i.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(s);
        else if (o.code === "invalid_return_type")
          s(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          s(o.argumentsError);
        else if (o.path.length === 0)
          r._errors.push(n(o));
        else {
          let a = r, l = 0;
          for (; l < o.path.length; ) {
            const c = o.path[l];
            l === o.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(n(o))) : a[c] = a[c] || { _errors: [] }, a = a[c], l++;
          }
        }
    };
    return s(this), r;
  }
  static assert(t) {
    if (!(t instanceof Oe))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, X.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const s of this.issues)
      s.path.length > 0 ? (n[s.path[0]] = n[s.path[0]] || [], n[s.path[0]].push(t(s))) : r.push(t(s));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Oe.create = (e) => new Oe(e);
const zn = (e, t) => {
  let n;
  switch (e.code) {
    case P.invalid_type:
      e.received === k.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case P.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, X.jsonStringifyReplacer)}`;
      break;
    case P.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${X.joinValues(e.keys, ", ")}`;
      break;
    case P.invalid_union:
      n = "Invalid input";
      break;
    case P.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${X.joinValues(e.options)}`;
      break;
    case P.invalid_enum_value:
      n = `Invalid enum value. Expected ${X.joinValues(e.options)}, received '${e.received}'`;
      break;
    case P.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case P.invalid_return_type:
      n = "Invalid function return type";
      break;
    case P.invalid_date:
      n = "Invalid date";
      break;
    case P.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : X.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case P.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case P.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case P.custom:
      n = "Invalid input";
      break;
    case P.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case P.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case P.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, X.assertNever(e);
  }
  return { message: n };
};
let d1 = zn;
function ii() {
  return d1;
}
const oi = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: s } = e, i = [...n, ...s.path || []], o = {
    ...s,
    path: i
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: i,
      message: s.message
    };
  let a = "";
  const l = r.filter((c) => !!c).slice().reverse();
  for (const c of l)
    a = c(o, { data: t, defaultError: a }).message;
  return {
    ...s,
    path: i,
    message: a
  };
};
function M(e, t) {
  const n = ii(), r = oi({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === zn ? void 0 : zn
      // then global default map
    ].filter((s) => !!s)
  });
  e.common.issues.push(r);
}
class Ee {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted")
        return z;
      s.status === "dirty" && t.dirty(), r.push(s.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const s of n) {
      const i = await s.key, o = await s.value;
      r.push({
        key: i,
        value: o
      });
    }
    return Ee.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted")
        return z;
      i.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (r[i.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const z = Object.freeze({
  status: "aborted"
}), Tn = (e) => ({ status: "dirty", value: e }), je = (e) => ({ status: "valid", value: e }), ma = (e) => e.status === "aborted", va = (e) => e.status === "dirty", Tr = (e) => e.status === "valid", Pr = (e) => typeof Promise < "u" && e instanceof Promise;
function Er(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function Xc(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var O;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(O || (O = {}));
var Pn, En;
class nt {
  constructor(t, n, r, s) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ga = (e, t) => {
  if (Tr(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Oe(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function U(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: s } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (o, a) => {
    var l, c;
    const { message: u } = e;
    return o.code === "invalid_enum_value" ? { message: u ?? a.defaultError } : typeof a.data > "u" ? { message: (l = u ?? r) !== null && l !== void 0 ? l : a.defaultError } : o.code !== "invalid_type" ? { message: a.defaultError } : { message: (c = u ?? n) !== null && c !== void 0 ? c : a.defaultError };
  }, description: s };
}
class Z {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return It(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: It(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Ee(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: It(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Pr(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const s = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: It(t)
    }, i = this._parseSync({ data: t, path: s.path, parent: s });
    return ga(s, i);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: It(t)
    }, s = this._parse({ data: t, path: r.path, parent: r }), i = await (Pr(s) ? s : Promise.resolve(s));
    return ga(r, i);
  }
  refine(t, n) {
    const r = (s) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, i) => {
      const o = t(s), a = () => i.addIssue({
        code: P.custom,
        ...r(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, s) => t(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1));
  }
  _refinement(t) {
    return new pt({
      schema: this,
      typeName: I.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return at.create(this, this._def);
  }
  nullable() {
    return Ut.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Xe.create(this, this._def);
  }
  promise() {
    return Wn.create(this, this._def);
  }
  or(t) {
    return jr.create([this, t], this._def);
  }
  and(t) {
    return Mr.create(this, t, this._def);
  }
  transform(t) {
    return new pt({
      ...U(this._def),
      schema: this,
      typeName: I.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Lr({
      ...U(this._def),
      innerType: this,
      defaultValue: n,
      typeName: I.ZodDefault
    });
  }
  brand() {
    return new tu({
      typeName: I.ZodBranded,
      type: this,
      ...U(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Nr({
      ...U(this._def),
      innerType: this,
      catchValue: n,
      typeName: I.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return ss.create(this, t);
  }
  readonly() {
    return Ir.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const f1 = /^c[^\s-]{8,}$/i, h1 = /^[0-9a-z]+$/, p1 = /^[0-9A-HJKMNP-TV-Z]{26}$/, m1 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, v1 = /^[a-z0-9_-]{21}$/i, g1 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, y1 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, x1 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ms;
const w1 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, b1 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, S1 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Jc = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", C1 = new RegExp(`^${Jc}$`);
function Qc(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function _1(e) {
  return new RegExp(`^${Qc(e)}$`);
}
function T1(e) {
  let t = `${Jc}T${Qc(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function P1(e, t) {
  return !!((t === "v4" || !t) && w1.test(e) || (t === "v6" || !t) && b1.test(e));
}
class ot extends Z {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== k.string) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: P.invalid_type,
        expected: k.string,
        received: i.parsedType
      }), z;
    }
    const r = new Ee();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value && (s = this._getOrReturnCtx(t, s), M(s, {
          code: P.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "max")
        t.data.length > i.value && (s = this._getOrReturnCtx(t, s), M(s, {
          code: P.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "length") {
        const o = t.data.length > i.value, a = t.data.length < i.value;
        (o || a) && (s = this._getOrReturnCtx(t, s), o ? M(s, {
          code: P.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && M(s, {
          code: P.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), r.dirty());
      } else if (i.kind === "email")
        y1.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
          validation: "email",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "emoji")
        Ms || (Ms = new RegExp(x1, "u")), Ms.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
          validation: "emoji",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "uuid")
        m1.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
          validation: "uuid",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "nanoid")
        v1.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
          validation: "nanoid",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid")
        f1.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
          validation: "cuid",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid2")
        h1.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
          validation: "cuid2",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "ulid")
        p1.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
          validation: "ulid",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), M(s, {
            validation: "url",
            code: P.invalid_string,
            message: i.message
          }), r.dirty();
        }
      else i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
        validation: "regex",
        code: P.invalid_string,
        message: i.message
      }), r.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(t, s), M(s, {
        code: P.invalid_string,
        validation: { includes: i.value, position: i.position },
        message: i.message
      }), r.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (s = this._getOrReturnCtx(t, s), M(s, {
        code: P.invalid_string,
        validation: { startsWith: i.value },
        message: i.message
      }), r.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (s = this._getOrReturnCtx(t, s), M(s, {
        code: P.invalid_string,
        validation: { endsWith: i.value },
        message: i.message
      }), r.dirty()) : i.kind === "datetime" ? T1(i).test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
        code: P.invalid_string,
        validation: "datetime",
        message: i.message
      }), r.dirty()) : i.kind === "date" ? C1.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
        code: P.invalid_string,
        validation: "date",
        message: i.message
      }), r.dirty()) : i.kind === "time" ? _1(i).test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
        code: P.invalid_string,
        validation: "time",
        message: i.message
      }), r.dirty()) : i.kind === "duration" ? g1.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
        validation: "duration",
        code: P.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "ip" ? P1(t.data, i.version) || (s = this._getOrReturnCtx(t, s), M(s, {
        validation: "ip",
        code: P.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "base64" ? S1.test(t.data) || (s = this._getOrReturnCtx(t, s), M(s, {
        validation: "base64",
        code: P.invalid_string,
        message: i.message
      }), r.dirty()) : X.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: P.invalid_string,
      ...O.errToObj(r)
    });
  }
  _addCheck(t) {
    return new ot({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...O.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...O.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...O.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...O.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...O.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...O.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...O.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...O.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...O.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...O.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
      ...O.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...O.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...O.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...O.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...O.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...O.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...O.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...O.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...O.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...O.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, O.errToObj(t));
  }
  trim() {
    return new ot({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ot({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ot({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
ot.create = (e) => {
  var t;
  return new ot({
    checks: [],
    typeName: I.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...U(e)
  });
};
function E1(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, s = n > r ? n : r, i = parseInt(e.toFixed(s).replace(".", "")), o = parseInt(t.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class ln extends Z {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== k.number) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: P.invalid_type,
        expected: k.number,
        received: i.parsedType
      }), z;
    }
    let r;
    const s = new Ee();
    for (const i of this._def.checks)
      i.kind === "int" ? X.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        code: P.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), M(r, {
        code: P.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), M(r, {
        code: P.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? E1(t.data, i.value) !== 0 && (r = this._getOrReturnCtx(t, r), M(r, {
        code: P.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        code: P.not_finite,
        message: i.message
      }), s.dirty()) : X.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, O.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, O.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, O.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, O.toString(n));
  }
  setLimit(t, n, r, s) {
    return new ln({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: O.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new ln({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: O.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: O.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: O.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: O.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: O.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: O.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: O.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: O.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: O.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && X.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
ln.create = (e) => new ln({
  checks: [],
  typeName: I.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...U(e)
});
class cn extends Z {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== k.bigint) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: P.invalid_type,
        expected: k.bigint,
        received: i.parsedType
      }), z;
    }
    let r;
    const s = new Ee();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), M(r, {
        code: P.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), M(r, {
        code: P.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), M(r, {
        code: P.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : X.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, O.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, O.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, O.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, O.toString(n));
  }
  setLimit(t, n, r, s) {
    return new cn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: O.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new cn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: O.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: O.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: O.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: O.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: O.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
cn.create = (e) => {
  var t;
  return new cn({
    checks: [],
    typeName: I.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...U(e)
  });
};
class ai extends Z {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== k.boolean) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: P.invalid_type,
        expected: k.boolean,
        received: r.parsedType
      }), z;
    }
    return je(t.data);
  }
}
ai.create = (e) => new ai({
  typeName: I.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...U(e)
});
class $n extends Z {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== k.date) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: P.invalid_type,
        expected: k.date,
        received: i.parsedType
      }), z;
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: P.invalid_date
      }), z;
    }
    const r = new Ee();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? t.data.getTime() < i.value && (s = this._getOrReturnCtx(t, s), M(s, {
        code: P.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), r.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (s = this._getOrReturnCtx(t, s), M(s, {
        code: P.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), r.dirty()) : X.assertNever(i);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new $n({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: O.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: O.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
$n.create = (e) => new $n({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: I.ZodDate,
  ...U(e)
});
class li extends Z {
  _parse(t) {
    if (this._getType(t) !== k.symbol) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: P.invalid_type,
        expected: k.symbol,
        received: r.parsedType
      }), z;
    }
    return je(t.data);
  }
}
li.create = (e) => new li({
  typeName: I.ZodSymbol,
  ...U(e)
});
class Rr extends Z {
  _parse(t) {
    if (this._getType(t) !== k.undefined) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: P.invalid_type,
        expected: k.undefined,
        received: r.parsedType
      }), z;
    }
    return je(t.data);
  }
}
Rr.create = (e) => new Rr({
  typeName: I.ZodUndefined,
  ...U(e)
});
class Ar extends Z {
  _parse(t) {
    if (this._getType(t) !== k.null) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: P.invalid_type,
        expected: k.null,
        received: r.parsedType
      }), z;
    }
    return je(t.data);
  }
}
Ar.create = (e) => new Ar({
  typeName: I.ZodNull,
  ...U(e)
});
class ci extends Z {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return je(t.data);
  }
}
ci.create = (e) => new ci({
  typeName: I.ZodAny,
  ...U(e)
});
class on extends Z {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return je(t.data);
  }
}
on.create = (e) => new on({
  typeName: I.ZodUnknown,
  ...U(e)
});
class Pt extends Z {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return M(n, {
      code: P.invalid_type,
      expected: k.never,
      received: n.parsedType
    }), z;
  }
}
Pt.create = (e) => new Pt({
  typeName: I.ZodNever,
  ...U(e)
});
class ui extends Z {
  _parse(t) {
    if (this._getType(t) !== k.undefined) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: P.invalid_type,
        expected: k.void,
        received: r.parsedType
      }), z;
    }
    return je(t.data);
  }
}
ui.create = (e) => new ui({
  typeName: I.ZodVoid,
  ...U(e)
});
class Xe extends Z {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), s = this._def;
    if (n.parsedType !== k.array)
      return M(n, {
        code: P.invalid_type,
        expected: k.array,
        received: n.parsedType
      }), z;
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value, a = n.data.length < s.exactLength.value;
      (o || a) && (M(n, {
        code: o ? P.too_big : P.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty());
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (M(n, {
      code: P.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (M(n, {
      code: P.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, a) => s.type._parseAsync(new nt(n, o, n.path, a)))).then((o) => Ee.mergeArray(r, o));
    const i = [...n.data].map((o, a) => s.type._parseSync(new nt(n, o, n.path, a)));
    return Ee.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Xe({
      ...this._def,
      minLength: { value: t, message: O.toString(n) }
    });
  }
  max(t, n) {
    return new Xe({
      ...this._def,
      maxLength: { value: t, message: O.toString(n) }
    });
  }
  length(t, n) {
    return new Xe({
      ...this._def,
      exactLength: { value: t, message: O.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Xe.create = (e, t) => new Xe({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: I.ZodArray,
  ...U(t)
});
function Xt(e) {
  if (e instanceof de) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = at.create(Xt(r));
    }
    return new de({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Xe ? new Xe({
    ...e._def,
    type: Xt(e.element)
  }) : e instanceof at ? at.create(Xt(e.unwrap())) : e instanceof Ut ? Ut.create(Xt(e.unwrap())) : e instanceof ht ? ht.create(e.items.map((t) => Xt(t))) : e;
}
class de extends Z {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = X.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== k.object) {
      const c = this._getOrReturnCtx(t);
      return M(c, {
        code: P.invalid_type,
        expected: k.object,
        received: c.parsedType
      }), z;
    }
    const { status: r, ctx: s } = this._processInputParams(t), { shape: i, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof Pt && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        o.includes(c) || a.push(c);
    const l = [];
    for (const c of o) {
      const u = i[c], f = s.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new nt(s, f, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof Pt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of a)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (c === "strict")
        a.length > 0 && (M(s, {
          code: P.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of a) {
        const f = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new nt(s, f, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const f = await u.key, h = await u.value;
        c.push({
          key: f,
          value: h,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => Ee.mergeObjectSync(r, c)) : Ee.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return O.errToObj, new de({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var s, i, o, a;
          const l = (o = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = O.errToObj(t).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new de({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new de({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new de({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new de({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: I.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new de({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return X.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new de({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return X.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new de({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Xt(this);
  }
  partial(t) {
    const n = {};
    return X.objectKeys(this.shape).forEach((r) => {
      const s = this.shape[r];
      t && !t[r] ? n[r] = s : n[r] = s.optional();
    }), new de({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return X.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let i = this.shape[r];
        for (; i instanceof at; )
          i = i._def.innerType;
        n[r] = i;
      }
    }), new de({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return eu(X.objectKeys(this.shape));
  }
}
de.create = (e, t) => new de({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Pt.create(),
  typeName: I.ZodObject,
  ...U(t)
});
de.strictCreate = (e, t) => new de({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Pt.create(),
  typeName: I.ZodObject,
  ...U(t)
});
de.lazycreate = (e, t) => new de({
  shape: e,
  unknownKeys: "strip",
  catchall: Pt.create(),
  typeName: I.ZodObject,
  ...U(t)
});
class jr extends Z {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new Oe(a.ctx.common.issues));
      return M(n, {
        code: P.invalid_union,
        unionErrors: o
      }), z;
    }
    if (n.common.async)
      return Promise.all(r.map(async (i) => {
        const o = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: n.data,
            path: n.path,
            parent: o
          }),
          ctx: o
        };
      })).then(s);
    {
      let i;
      const o = [];
      for (const l of r) {
        const c = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: n.data,
          path: n.path,
          parent: c
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: c }), c.common.issues.length && o.push(c.common.issues);
      }
      if (i)
        return n.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((l) => new Oe(l));
      return M(n, {
        code: P.invalid_union,
        unionErrors: a
      }), z;
    }
  }
  get options() {
    return this._def.options;
  }
}
jr.create = (e, t) => new jr({
  options: e,
  typeName: I.ZodUnion,
  ...U(t)
});
const it = (e) => e instanceof Or ? it(e.schema) : e instanceof pt ? it(e.innerType()) : e instanceof Dr ? [e.value] : e instanceof Wt ? e.options : e instanceof Vr ? X.objectValues(e.enum) : e instanceof Lr ? it(e._def.innerType) : e instanceof Rr ? [void 0] : e instanceof Ar ? [null] : e instanceof at ? [void 0, ...it(e.unwrap())] : e instanceof Ut ? [null, ...it(e.unwrap())] : e instanceof tu || e instanceof Ir ? it(e.unwrap()) : e instanceof Nr ? it(e._def.innerType) : [];
class Ki extends Z {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== k.object)
      return M(n, {
        code: P.invalid_type,
        expected: k.object,
        received: n.parsedType
      }), z;
    const r = this.discriminator, s = n.data[r], i = this.optionsMap.get(s);
    return i ? n.common.async ? i._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : i._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (M(n, {
      code: P.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), z);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const s = /* @__PURE__ */ new Map();
    for (const i of n) {
      const o = it(i.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        s.set(a, i);
      }
    }
    return new Ki({
      typeName: I.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...U(r)
    });
  }
}
function di(e, t) {
  const n = It(e), r = It(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === k.object && r === k.object) {
    const s = X.objectKeys(t), i = X.objectKeys(e).filter((a) => s.indexOf(a) !== -1), o = { ...e, ...t };
    for (const a of i) {
      const l = di(e[a], t[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === k.array && r === k.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i], a = t[i], l = di(o, a);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return n === k.date && r === k.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Mr extends Z {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), s = (i, o) => {
      if (ma(i) || ma(o))
        return z;
      const a = di(i.value, o.value);
      return a.valid ? ((va(i) || va(o)) && n.dirty(), { status: n.value, value: a.data }) : (M(r, {
        code: P.invalid_intersection_types
      }), z);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([i, o]) => s(i, o)) : s(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Mr.create = (e, t, n) => new Mr({
  left: e,
  right: t,
  typeName: I.ZodIntersection,
  ...U(n)
});
class ht extends Z {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.array)
      return M(r, {
        code: P.invalid_type,
        expected: k.array,
        received: r.parsedType
      }), z;
    if (r.data.length < this._def.items.length)
      return M(r, {
        code: P.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), z;
    !this._def.rest && r.data.length > this._def.items.length && (M(r, {
      code: P.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const i = [...r.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new nt(r, o, r.path, a)) : null;
    }).filter((o) => !!o);
    return r.common.async ? Promise.all(i).then((o) => Ee.mergeArray(n, o)) : Ee.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new ht({
      ...this._def,
      rest: t
    });
  }
}
ht.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ht({
    items: e,
    typeName: I.ZodTuple,
    rest: null,
    ...U(t)
  });
};
class kr extends Z {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.object)
      return M(r, {
        code: P.invalid_type,
        expected: k.object,
        received: r.parsedType
      }), z;
    const s = [], i = this._def.keyType, o = this._def.valueType;
    for (const a in r.data)
      s.push({
        key: i._parse(new nt(r, a, r.path, a)),
        value: o._parse(new nt(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data
      });
    return r.common.async ? Ee.mergeObjectAsync(n, s) : Ee.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Z ? new kr({
      keyType: t,
      valueType: n,
      typeName: I.ZodRecord,
      ...U(r)
    }) : new kr({
      keyType: ot.create(),
      valueType: t,
      typeName: I.ZodRecord,
      ...U(n)
    });
  }
}
class fi extends Z {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.map)
      return M(r, {
        code: P.invalid_type,
        expected: k.map,
        received: r.parsedType
      }), z;
    const s = this._def.keyType, i = this._def.valueType, o = [...r.data.entries()].map(([a, l], c) => ({
      key: s._parse(new nt(r, a, r.path, [c, "key"])),
      value: i._parse(new nt(r, l, r.path, [c, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return z;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), a.set(c.value, u.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return z;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), a.set(c.value, u.value);
      }
      return { status: n.value, value: a };
    }
  }
}
fi.create = (e, t, n) => new fi({
  valueType: t,
  keyType: e,
  typeName: I.ZodMap,
  ...U(n)
});
class un extends Z {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.set)
      return M(r, {
        code: P.invalid_type,
        expected: k.set,
        received: r.parsedType
      }), z;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (M(r, {
      code: P.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (M(r, {
      code: P.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), n.dirty());
    const i = this._def.valueType;
    function o(l) {
      const c = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return z;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const a = [...r.data.values()].map((l, c) => i._parse(new nt(r, l, r.path, c)));
    return r.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(t, n) {
    return new un({
      ...this._def,
      minSize: { value: t, message: O.toString(n) }
    });
  }
  max(t, n) {
    return new un({
      ...this._def,
      maxSize: { value: t, message: O.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
un.create = (e, t) => new un({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: I.ZodSet,
  ...U(t)
});
class kn extends Z {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== k.function)
      return M(n, {
        code: P.invalid_type,
        expected: k.function,
        received: n.parsedType
      }), z;
    function r(a, l) {
      return oi({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ii(),
          zn
        ].filter((c) => !!c),
        issueData: {
          code: P.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(a, l) {
      return oi({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ii(),
          zn
        ].filter((c) => !!c),
        issueData: {
          code: P.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const i = { errorMap: n.common.contextualErrorMap }, o = n.data;
    if (this._def.returns instanceof Wn) {
      const a = this;
      return je(async function(...l) {
        const c = new Oe([]), u = await a._def.args.parseAsync(l, i).catch((p) => {
          throw c.addIssue(r(l, p)), c;
        }), f = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(f, i).catch((p) => {
          throw c.addIssue(s(f, p)), c;
        });
      });
    } else {
      const a = this;
      return je(function(...l) {
        const c = a._def.args.safeParse(l, i);
        if (!c.success)
          throw new Oe([r(l, c.error)]);
        const u = Reflect.apply(o, this, c.data), f = a._def.returns.safeParse(u, i);
        if (!f.success)
          throw new Oe([s(u, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new kn({
      ...this._def,
      args: ht.create(t).rest(on.create())
    });
  }
  returns(t) {
    return new kn({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new kn({
      args: t || ht.create([]).rest(on.create()),
      returns: n || on.create(),
      typeName: I.ZodFunction,
      ...U(r)
    });
  }
}
class Or extends Z {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Or.create = (e, t) => new Or({
  getter: e,
  typeName: I.ZodLazy,
  ...U(t)
});
class Dr extends Z {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return M(n, {
        received: n.data,
        code: P.invalid_literal,
        expected: this._def.value
      }), z;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Dr.create = (e, t) => new Dr({
  value: e,
  typeName: I.ZodLiteral,
  ...U(t)
});
function eu(e, t) {
  return new Wt({
    values: e,
    typeName: I.ZodEnum,
    ...U(t)
  });
}
class Wt extends Z {
  constructor() {
    super(...arguments), Pn.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return M(n, {
        expected: X.joinValues(r),
        received: n.parsedType,
        code: P.invalid_type
      }), z;
    }
    if (Er(this, Pn) || Xc(this, Pn, new Set(this._def.values)), !Er(this, Pn).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return M(n, {
        received: n.data,
        code: P.invalid_enum_value,
        options: r
      }), z;
    }
    return je(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return Wt.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Wt.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Pn = /* @__PURE__ */ new WeakMap();
Wt.create = eu;
class Vr extends Z {
  constructor() {
    super(...arguments), En.set(this, void 0);
  }
  _parse(t) {
    const n = X.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== k.string && r.parsedType !== k.number) {
      const s = X.objectValues(n);
      return M(r, {
        expected: X.joinValues(s),
        received: r.parsedType,
        code: P.invalid_type
      }), z;
    }
    if (Er(this, En) || Xc(this, En, new Set(X.getValidEnumValues(this._def.values))), !Er(this, En).has(t.data)) {
      const s = X.objectValues(n);
      return M(r, {
        received: r.data,
        code: P.invalid_enum_value,
        options: s
      }), z;
    }
    return je(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
En = /* @__PURE__ */ new WeakMap();
Vr.create = (e, t) => new Vr({
  values: e,
  typeName: I.ZodNativeEnum,
  ...U(t)
});
class Wn extends Z {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== k.promise && n.common.async === !1)
      return M(n, {
        code: P.invalid_type,
        expected: k.promise,
        received: n.parsedType
      }), z;
    const r = n.parsedType === k.promise ? n.data : Promise.resolve(n.data);
    return je(r.then((s) => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Wn.create = (e, t) => new Wn({
  type: e,
  typeName: I.ZodPromise,
  ...U(t)
});
class pt extends Z {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === I.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), s = this._def.effect || null, i = {
      addIssue: (o) => {
        M(r, o), o.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "preprocess") {
      const o = s.transform(r.data, i);
      if (r.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (n.value === "aborted")
            return z;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? z : l.status === "dirty" || n.value === "dirty" ? Tn(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return z;
        const a = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? z : a.status === "dirty" || n.value === "dirty" ? Tn(a.value) : a;
      }
    }
    if (s.type === "refinement") {
      const o = (a) => {
        const l = s.refinement(a, i);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? z : (a.status === "dirty" && n.dirty(), o(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? z : (a.status === "dirty" && n.dirty(), o(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Tr(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => Tr(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: n.value, value: a })) : o);
    X.assertNever(s);
  }
}
pt.create = (e, t, n) => new pt({
  schema: e,
  typeName: I.ZodEffects,
  effect: t,
  ...U(n)
});
pt.createWithPreprocess = (e, t, n) => new pt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: I.ZodEffects,
  ...U(n)
});
class at extends Z {
  _parse(t) {
    return this._getType(t) === k.undefined ? je(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
at.create = (e, t) => new at({
  innerType: e,
  typeName: I.ZodOptional,
  ...U(t)
});
class Ut extends Z {
  _parse(t) {
    return this._getType(t) === k.null ? je(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ut.create = (e, t) => new Ut({
  innerType: e,
  typeName: I.ZodNullable,
  ...U(t)
});
class Lr extends Z {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === k.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Lr.create = (e, t) => new Lr({
  innerType: e,
  typeName: I.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...U(t)
});
class Nr extends Z {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Pr(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Oe(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Oe(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Nr.create = (e, t) => new Nr({
  innerType: e,
  typeName: I.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...U(t)
});
class hi extends Z {
  _parse(t) {
    if (this._getType(t) !== k.nan) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: P.invalid_type,
        expected: k.nan,
        received: r.parsedType
      }), z;
    }
    return { status: "valid", value: t.data };
  }
}
hi.create = (e) => new hi({
  typeName: I.ZodNaN,
  ...U(e)
});
class tu extends Z {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ss extends Z {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? z : i.status === "dirty" ? (n.dirty(), Tn(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return s.status === "aborted" ? z : s.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new ss({
      in: t,
      out: n,
      typeName: I.ZodPipeline
    });
  }
}
class Ir extends Z {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (s) => (Tr(s) && (s.value = Object.freeze(s.value)), s);
    return Pr(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ir.create = (e, t) => new Ir({
  innerType: e,
  typeName: I.ZodReadonly,
  ...U(t)
});
de.lazycreate;
var I;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(I || (I = {}));
ot.create;
ln.create;
hi.create;
cn.create;
ai.create;
$n.create;
li.create;
Rr.create;
Ar.create;
ci.create;
on.create;
Pt.create;
ui.create;
Xe.create;
de.create;
de.strictCreate;
jr.create;
Ki.create;
Mr.create;
ht.create;
kr.create;
fi.create;
un.create;
kn.create;
Or.create;
Dr.create;
Wt.create;
Vr.create;
Wn.create;
pt.create;
at.create;
Ut.create;
pt.createWithPreprocess;
ss.create;
const nu = vt(null);
function Gi() {
  const e = we(nu);
  return e || {};
}
function R1({
  children: e,
  value: t
}) {
  return /* @__PURE__ */ d.jsx(nu.Provider, { value: t, children: typeof e == "function" ? e(t) : e });
}
function ru(e) {
  return e.includes("[]");
}
function A1(e, t) {
  const r = t.keyof().options.reduce(
    (s, i) => {
      if (e.has(i)) {
        const o = e.getAll(i);
        s[i] = o.length > 1 && ru(i) ? o : o[0];
      }
      return s;
    },
    /* @__PURE__ */ Object.create(null)
  );
  return t.parse(r);
}
function j1(e) {
  return Array.from(e.keys()).reduce((n, r) => {
    if (e.has(r)) {
      const s = e.getAll(r);
      n[r] = s.length > 1 && ru(r) ? s : s[0];
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function M1(e, t) {
  let n = e;
  return typeof n != "string" ? null : (t != null && t.prefix && n.startsWith(t.prefix) && (n = n.slice(t.prefix.length)), t != null && t.suffix && n.endsWith(t.suffix) && (n = n.slice(0, -t.suffix.length)), n.charAt(0).toLowerCase() + n.slice(1));
}
const k1 = (e) => sessionStorage.getItem(e), O1 = (e) => (window.addEventListener("storage", e), () => {
  window.removeEventListener("storage", e);
});
function su(e, t) {
  sessionStorage.setItem(e, JSON.stringify(t)), window.dispatchEvent(new Event("storage"));
}
function q5(e) {
  const t = df(
    O1,
    k1.bind(null, e)
  );
  return JSON.parse(t);
}
function Z5(e, t) {
  Gn(() => {
    su(e, t);
  }, [e, t]);
}
function D1({
  children: e,
  name: t,
  method: n = "POST",
  onAction: r,
  schema: s,
  ...i
}) {
  const [o, a] = Nn(), [l, c] = Nn({}), u = t || r && typeof r == "function" && r.name !== "onAction" ? M1(r.name, { prefix: "handle" }) : t || null;
  async function f(p) {
    p.preventDefault();
    const g = new FormData(p.currentTarget);
    try {
      const m = s ? A1(g, s) : j1(g);
      if (r && typeof r == "function") {
        const w = await r(p, m);
        if (w || c(m), w) {
          const [x, b] = w;
          x && c(x), b && u && su(u, x);
        }
      }
    } catch (m) {
      const w = u || t || "unknown";
      m instanceof Oe ? a({ [w]: m.flatten() }) : a({ [w]: "Unknown intent" });
    }
  }
  const h = Mn(null);
  return /* @__PURE__ */ d.jsx(
    R1,
    {
      value: {
        name: t,
        data: l,
        ref: h,
        errors: o && (o == null ? void 0 : o[t])
      },
      children: /* @__PURE__ */ d.jsxs(
        "form",
        {
          method: n,
          onSubmit: f,
          noValidate: !0,
          className: "flex flex-col gap-4 items-stretch",
          ref: h,
          ...i,
          children: [
            t ? /* @__PURE__ */ d.jsx("input", { type: "hidden", name: "name", value: t }) : null,
            typeof e == "function" ? e({ errors: o, data: l }) : e
          ]
        }
      )
    }
  );
}
const K5 = Object.assign(D1, {
  // Success: FormSuccess,
  // Initial: FormInitial,
});
function G5() {
  const { errors: e } = Gi();
  return !e || !e.formErrors ? null : /* @__PURE__ */ d.jsx("div", { className: "bg-red-600 text-white p-4 rounded-[9px]", children: (e == null ? void 0 : e.formErrors[0]) || "Errors" });
}
function Y5({ message: e = "Success!" }) {
  const t = Gi();
  return !t || !t.success ? null : /* @__PURE__ */ d.jsx("div", { className: "bg-green-600 text-white px-6 py-4 rounded-[9px] text-18", children: e });
}
function Yi({
  name: e,
  children: t,
  asChild: n = !1,
  className: r = "flex flex-col items-start gap-1"
}) {
  var o;
  const { errors: s } = Gi(), i = (o = s == null ? void 0 : s.fieldErrors) == null ? void 0 : o[e];
  return /* @__PURE__ */ d.jsx(Kh, { value: { name: e, error: i }, children: /* @__PURE__ */ d.jsx(Kr, { asChild: n, fallbackAs: "div", className: r, children: /* @__PURE__ */ d.jsx(d.Fragment, { children: t }) }) });
}
function X5() {
  const { error: e } = Oi(), t = e == null ? void 0 : e[0];
  return e ? /* @__PURE__ */ d.jsxs("div", { className: "text-17 inline-flex gap-2 mt-2 items-center bg-neutral-600 px-3 py-2 rounded-[7px]", children: [
    /* @__PURE__ */ d.jsx("span", { className: " flex-shrink-0 flex items-center justify-center h-[1.5rem]", children: /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Error" }) }),
    /* @__PURE__ */ d.jsx("span", { className: "text-white", children: t })
  ] }) : null;
}
function V1(e, t) {
  const {
    href: n,
    children: r,
    ...s
  } = Ve("a", e);
  return /* @__PURE__ */ d.jsx("a", { href: n, ref: t, ...s, children: r });
}
const J5 = jt(V1);
function L1(e, t) {
  const { children: n, href: r, ...s } = Ve("button", e);
  return /* @__PURE__ */ d.jsx("a", { href: r, ref: t, ...s, children: n });
}
const Q5 = jt(L1), ya = /* @__PURE__ */ new Set();
function is(e, t, n) {
  e || ya.has(t) || (console.warn(t), ya.add(t));
}
function N1(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && is(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s))
  });
}
function os(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const pi = (e) => Array.isArray(e);
function iu(e, t) {
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
function Un(e) {
  return typeof e == "string" || Array.isArray(e);
}
function xa(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Xi(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = xa(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, i] = xa(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
function as(e, t, n) {
  const r = e.getProps();
  return Xi(r, t, n !== void 0 ? n : r.custom, e);
}
const Ji = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Qi = ["initial", ...Ji], Ae = (e) => e;
let yn = Ae, Et = Ae;
process.env.NODE_ENV !== "production" && (yn = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Et = (e, t) => {
  if (!e)
    throw new Error(t);
});
function eo(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const dn = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Je = (e) => e * 1e3, lt = (e) => e / 1e3, I1 = eo(() => window.ScrollTimeline !== void 0);
class B1 {
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
    const r = this.animations.map((s) => I1() && s.attachTimeline ? s.attachTimeline(t) : n(s));
    return () => {
      r.forEach((s, i) => {
        s && s(), this.animations[i].stop();
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
class F1 extends B1 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function to(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const mi = 2e4;
function ou(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < mi; )
    t += n, r = e.next(t);
  return t >= mi ? 1 / 0 : t;
}
function no(e) {
  return typeof e == "function";
}
function wa(e, t) {
  e.timeline = t, e.onfinish = null;
}
const ro = (e) => Array.isArray(e) && typeof e[0] == "number", z1 = {
  linearEasing: void 0
};
function $1(e, t) {
  const n = eo(e);
  return () => {
    var r;
    return (r = z1[t]) !== null && r !== void 0 ? r : n();
  };
}
const Br = /* @__PURE__ */ $1(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), au = (e, t, n = 10) => {
  let r = "";
  const s = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < s; i++)
    r += e(dn(0, s - 1, i)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function lu(e) {
  return !!(typeof e == "function" && Br() || !e || typeof e == "string" && (e in vi || Br()) || ro(e) || Array.isArray(e) && e.every(lu));
}
const Rn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, vi = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Rn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Rn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Rn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Rn([0.33, 1.53, 0.69, 0.99])
};
function cu(e, t) {
  if (e)
    return typeof e == "function" && Br() ? au(e, t) : ro(e) ? Rn(e) : Array.isArray(e) ? e.map((n) => cu(n, t) || vi.easeOut) : vi[e];
}
const Ue = {
  x: !1,
  y: !1
};
function uu() {
  return Ue.x || Ue.y;
}
function W1(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function du(e, t) {
  const n = W1(e), r = new AbortController(), s = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, s, () => r.abort()];
}
function ba(e) {
  return (t) => {
    t.pointerType === "touch" || uu() || e(t);
  };
}
function U1(e, t, n = {}) {
  const [r, s, i] = du(e, n), o = ba((a) => {
    const { target: l } = a, c = t(a);
    if (!c || !l)
      return;
    const u = ba((f) => {
      c(f), l.removeEventListener("pointerleave", u);
    });
    l.addEventListener("pointerleave", u, s);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", o, s);
  }), i;
}
const so = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, An = /* @__PURE__ */ new WeakSet();
function Sa(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ks(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const H1 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Sa(() => {
    if (An.has(n))
      return;
    ks(n, "down");
    const s = Sa(() => {
      ks(n, "up");
    }), i = () => ks(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
}, q1 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Z1(e) {
  return q1.has(e.tagName) || e.tabIndex !== -1;
}
const fu = (e, t) => t ? e === t ? !0 : fu(e, t.parentElement) : !1;
function Ca(e) {
  return so(e) && !uu();
}
function K1(e, t, n = {}) {
  const [r, s, i] = du(e, n), o = (a) => {
    const l = a.currentTarget;
    if (!Ca(a) || An.has(l))
      return;
    An.add(l);
    const c = t(a), u = (p, g) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), !(!Ca(p) || !An.has(l)) && (An.delete(l), c && c(p, { success: g }));
    }, f = (p) => {
      u(p, n.useGlobalTarget || fu(l, p.target));
    }, h = (p) => {
      u(p, !1);
    };
    window.addEventListener("pointerup", f, s), window.addEventListener("pointercancel", h, s);
  };
  return r.forEach((a) => {
    Z1(a) || (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), a.addEventListener("focus", (c) => H1(c, s), s);
  }), i;
}
function G1(e) {
  return e === "x" || e === "y" ? Ue[e] ? null : (Ue[e] = !0, () => {
    Ue[e] = !1;
  }) : Ue.x || Ue.y ? null : (Ue.x = Ue.y = !0, () => {
    Ue.x = Ue.y = !1;
  });
}
const Jn = [
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
], Ht = new Set(Jn), Y1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), X1 = (e) => pi(e) ? e[e.length - 1] || 0 : e, J1 = {
  skipAnimations: !1,
  useManualTiming: !1
};
function Q1(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(o);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, u = !1, f = !1) => {
      const p = f && r ? t : n;
      return u && i.add(c), p.has(c) || p.add(c), c;
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
      if (o = c, r) {
        s = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, s && (s = !1, l.process(c));
    }
  };
  return l;
}
const ur = [
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
], ev = 40;
function hu(e, t) {
  let n = !1, r = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, o = ur.reduce((x, b) => (x[b] = Q1(i), x), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: f, postRender: h } = o, p = () => {
    const x = performance.now();
    n = !1, s.delta = r ? 1e3 / 60 : Math.max(Math.min(x - s.timestamp, ev), 1), s.timestamp = x, s.isProcessing = !0, a.process(s), l.process(s), c.process(s), u.process(s), f.process(s), h.process(s), s.isProcessing = !1, n && t && (r = !1, e(p));
  }, g = () => {
    n = !0, r = !0, s.isProcessing || e(p);
  };
  return { schedule: ur.reduce((x, b) => {
    const S = o[b];
    return x[b] = (_, C = !1, A = !1) => (n || g(), S.schedule(_, C, A)), x;
  }, {}), cancel: (x) => {
    for (let b = 0; b < ur.length; b++)
      o[ur[b]].cancel(x);
  }, state: s, steps: o };
}
const { schedule: le, cancel: Rt, state: xe, steps: Os } = hu(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ae, !0);
let gr;
function tv() {
  gr = void 0;
}
const Qe = {
  now: () => (gr === void 0 && Qe.set(xe.isProcessing || J1.useManualTiming ? xe.timestamp : performance.now()), gr),
  set: (e) => {
    gr = e, queueMicrotask(tv);
  }
};
function io(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function oo(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ao {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return io(this.subscriptions, t), () => oo(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function pu(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const _a = 30, nv = (e) => !isNaN(parseFloat(e));
class rv {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.16.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, s = !0) => {
      const i = Qe.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Qe.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = nv(this.current));
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
    return process.env.NODE_ENV !== "production" && is(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ao());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), le.read(() => {
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
    const t = Qe.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > _a)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, _a);
    return pu(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Hn(e, t) {
  return new rv(e, t);
}
function sv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Hn(n));
}
function iv(e, t) {
  const n = as(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = X1(i[o]);
    sv(e, o, a);
  }
}
const Se = (e) => !!(e && e.getVelocity);
function ov(e) {
  return !!(Se(e) && e.add);
}
function gi(e, t) {
  const n = e.getValue("willChange");
  if (ov(n))
    return n.add(t);
}
const lo = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), av = "framerAppearId", mu = "data-" + lo(av);
function vu(e) {
  return e.props[mu];
}
const gu = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, lv = 1e-7, cv = 12;
function uv(e, t, n, r, s) {
  let i, o, a = 0;
  do
    o = t + (n - t) / 2, i = gu(o, r, s) - e, i > 0 ? n = o : t = o;
  while (Math.abs(i) > lv && ++a < cv);
  return o;
}
function Qn(e, t, n, r) {
  if (e === t && n === r)
    return Ae;
  const s = (i) => uv(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : gu(s(i), t, r);
}
const yu = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, xu = (e) => (t) => 1 - e(1 - t), wu = /* @__PURE__ */ Qn(0.33, 1.53, 0.69, 0.99), co = /* @__PURE__ */ xu(wu), bu = /* @__PURE__ */ yu(co), Su = (e) => (e *= 2) < 1 ? 0.5 * co(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), uo = (e) => 1 - Math.sin(Math.acos(e)), Cu = xu(uo), _u = yu(uo), Tu = (e) => /^0[^.\s]+$/u.test(e);
function dv(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Tu(e) : !0;
}
const Pu = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Eu = (e) => (t) => typeof t == "string" && t.startsWith(e), Ru = /* @__PURE__ */ Eu("--"), fv = /* @__PURE__ */ Eu("var(--"), fo = (e) => fv(e) ? hv.test(e.split("/*")[0].trim()) : !1, hv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, pv = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function mv(e) {
  const t = pv.exec(e);
  if (!t)
    return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
const vv = 4;
function Au(e, t, n = 1) {
  Et(n <= vv, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, s] = mv(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return Pu(o) ? parseFloat(o) : o;
  }
  return fo(s) ? Au(s, t, n + 1) : s;
}
const mt = (e, t, n) => n > t ? t : n < e ? e : n, xn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, qn = {
  ...xn,
  transform: (e) => mt(0, 1, e)
}, dr = {
  ...xn,
  default: 1
}, er = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), St = /* @__PURE__ */ er("deg"), et = /* @__PURE__ */ er("%"), V = /* @__PURE__ */ er("px"), gv = /* @__PURE__ */ er("vh"), yv = /* @__PURE__ */ er("vw"), Ta = {
  ...et,
  parse: (e) => et.parse(e) / 100,
  transform: (e) => et.transform(e * 100)
}, xv = /* @__PURE__ */ new Set([
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
]), Pa = (e) => e === xn || e === V, Ea = (e, t) => parseFloat(e.split(", ")[t]), Ra = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const s = r.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return Ea(s[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/u);
    return i ? Ea(i[1], e) : 0;
  }
}, wv = /* @__PURE__ */ new Set(["x", "y", "z"]), bv = Jn.filter((e) => !wv.has(e));
function Sv(e) {
  const t = [];
  return bv.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const fn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Ra(4, 13),
  y: Ra(5, 14)
};
fn.translateX = fn.x;
fn.translateY = fn.y;
const ju = (e) => (t) => t.test(e), Cv = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Mu = [xn, V, et, St, yv, gv, Cv], Aa = (e) => Mu.find(ju(e)), Ft = /* @__PURE__ */ new Set();
let yi = !1, xi = !1;
function ku() {
  if (xi) {
    const e = Array.from(Ft).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const s = Sv(r);
      s.length && (n.set(r, s), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const s = n.get(r);
      s && s.forEach(([i, o]) => {
        var a;
        (a = r.getValue(i)) === null || a === void 0 || a.set(o);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  xi = !1, yi = !1, Ft.forEach((e) => e.complete()), Ft.clear();
}
function Ou() {
  Ft.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (xi = !0);
  });
}
function _v() {
  Ou(), ku();
}
class ho {
  constructor(t, n, r, s, i, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = s, this.element = i, this.isAsync = o;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Ft.add(this), yi || (yi = !0, le.read(Ou), le.resolveKeyframes(ku))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: s } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = s == null ? void 0 : s.get(), a = t[t.length - 1];
          if (o !== void 0)
            t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]);
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Ft.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Ft.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const On = (e) => Math.round(e * 1e5) / 1e5, po = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Tv(e) {
  return e == null;
}
const Pv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, mo = (e, t) => (n) => !!(typeof n == "string" && Pv.test(n) && n.startsWith(e) || t && !Tv(n) && Object.prototype.hasOwnProperty.call(n, t)), Du = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [s, i, o, a] = r.match(po);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(i),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Ev = (e) => mt(0, 255, e), Ds = {
  ...xn,
  transform: (e) => Math.round(Ev(e))
}, Bt = {
  test: /* @__PURE__ */ mo("rgb", "red"),
  parse: /* @__PURE__ */ Du("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Ds.transform(e) + ", " + Ds.transform(t) + ", " + Ds.transform(n) + ", " + On(qn.transform(r)) + ")"
};
function Rv(e) {
  let t = "", n = "", r = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, r += r, s += s), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const wi = {
  test: /* @__PURE__ */ mo("#"),
  parse: Rv,
  transform: Bt.transform
}, Jt = {
  test: /* @__PURE__ */ mo("hsl", "hue"),
  parse: /* @__PURE__ */ Du("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + et.transform(On(t)) + ", " + et.transform(On(n)) + ", " + On(qn.transform(r)) + ")"
}, be = {
  test: (e) => Bt.test(e) || wi.test(e) || Jt.test(e),
  parse: (e) => Bt.test(e) ? Bt.parse(e) : Jt.test(e) ? Jt.parse(e) : wi.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Bt.transform(e) : Jt.transform(e)
}, Av = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function jv(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(po)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Av)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Vu = "number", Lu = "color", Mv = "var", kv = "var(", ja = "${}", Ov = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let i = 0;
  const a = t.replace(Ov, (l) => (be.test(l) ? (r.color.push(i), s.push(Lu), n.push(be.parse(l))) : l.startsWith(kv) ? (r.var.push(i), s.push(Mv), n.push(l)) : (r.number.push(i), s.push(Vu), n.push(parseFloat(l))), ++i, ja)).split(ja);
  return { values: n, split: a, indexes: r, types: s };
}
function Nu(e) {
  return Zn(e).values;
}
function Iu(e) {
  const { split: t, types: n } = Zn(e), r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (i += t[o], s[o] !== void 0) {
        const a = n[o];
        a === Vu ? i += On(s[o]) : a === Lu ? i += be.transform(s[o]) : i += s[o];
      }
    return i;
  };
}
const Dv = (e) => typeof e == "number" ? 0 : e;
function Vv(e) {
  const t = Nu(e);
  return Iu(e)(t.map(Dv));
}
const At = {
  test: jv,
  parse: Nu,
  createTransformer: Iu,
  getAnimatableNone: Vv
}, Lv = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Nv(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(po) || [];
  if (!r)
    return e;
  const s = n.replace(r, "");
  let i = Lv.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const Iv = /\b([a-z-]*)\(.*?\)/gu, bi = {
  ...At,
  getAnimatableNone: (e) => {
    const t = e.match(Iv);
    return t ? t.map(Nv).join(" ") : e;
  }
}, Bv = {
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
}, Fv = {
  rotate: St,
  rotateX: St,
  rotateY: St,
  rotateZ: St,
  scale: dr,
  scaleX: dr,
  scaleY: dr,
  scaleZ: dr,
  skew: St,
  skewX: St,
  skewY: St,
  distance: V,
  translateX: V,
  translateY: V,
  translateZ: V,
  x: V,
  y: V,
  z: V,
  perspective: V,
  transformPerspective: V,
  opacity: qn,
  originX: Ta,
  originY: Ta,
  originZ: V
}, Ma = {
  ...xn,
  transform: Math.round
}, vo = {
  ...Bv,
  ...Fv,
  zIndex: Ma,
  size: V,
  // SVG
  fillOpacity: qn,
  strokeOpacity: qn,
  numOctaves: Ma
}, zv = {
  ...vo,
  // Color props
  color: be,
  backgroundColor: be,
  outlineColor: be,
  fill: be,
  stroke: be,
  // Border props
  borderColor: be,
  borderTopColor: be,
  borderRightColor: be,
  borderBottomColor: be,
  borderLeftColor: be,
  filter: bi,
  WebkitFilter: bi
}, go = (e) => zv[e];
function Bu(e, t) {
  let n = go(e);
  return n !== bi && (n = At), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const $v = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Wv(e, t, n) {
  let r = 0, s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !$v.has(i) && Zn(i).values.length && (s = e[r]), r++;
  }
  if (s && n)
    for (const i of t)
      e[i] = Bu(n, s);
}
class Fu extends ho {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), fo(c))) {
        const u = Au(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !xv.has(r) || t.length !== 2)
      return;
    const [s, i] = t, o = Aa(s), a = Aa(i);
    if (o !== a)
      if (Pa(o) && Pa(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let s = 0; s < t.length; s++)
      dv(t[s]) && r.push(s);
    r.length && Wv(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = fn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current)
      return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1, a = s[o];
    s[o] = fn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const ka = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(At.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Uv(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function Hv(e, t, n, r) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], o = ka(s, t), a = ka(i, t);
  return yn(o === a, `You are trying to animate ${t} from "${s}" to "${i}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${i} via the \`style\` property.`), !o || !a ? !1 : Uv(e) || (n === "spring" || no(n)) && r;
}
const qv = (e) => e !== null;
function ls(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(qv), i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const Zv = 40;
class zu {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Qe.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: s,
      repeatDelay: i,
      repeatType: o,
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > Zv ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && _v(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Qe.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: s, velocity: i, delay: o, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !Hv(t, r, s, i))
      if (o)
        this.options.duration = 0;
      else {
        l == null || l(ls(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
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
const ue = (e, t, n) => e + (t - e) * n;
function Vs(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Kv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let s = 0, i = 0, o = 0;
  if (!t)
    s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    s = Vs(l, a, e + 1 / 3), i = Vs(l, a, e), o = Vs(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function Fr(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ls = (e, t, n) => {
  const r = e * e, s = n * (t * t - r) + r;
  return s < 0 ? 0 : Math.sqrt(s);
}, Gv = [wi, Bt, Jt], Yv = (e) => Gv.find((t) => t.test(e));
function Oa(e) {
  const t = Yv(e);
  if (yn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Jt && (n = Kv(n)), n;
}
const Da = (e, t) => {
  const n = Oa(e), r = Oa(t);
  if (!n || !r)
    return Fr(e, t);
  const s = { ...n };
  return (i) => (s.red = Ls(n.red, r.red, i), s.green = Ls(n.green, r.green, i), s.blue = Ls(n.blue, r.blue, i), s.alpha = ue(n.alpha, r.alpha, i), Bt.transform(s));
}, Xv = (e, t) => (n) => t(e(n)), tr = (...e) => e.reduce(Xv), Si = /* @__PURE__ */ new Set(["none", "hidden"]);
function Jv(e, t) {
  return Si.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Qv(e, t) {
  return (n) => ue(e, t, n);
}
function yo(e) {
  return typeof e == "number" ? Qv : typeof e == "string" ? fo(e) ? Fr : be.test(e) ? Da : ng : Array.isArray(e) ? $u : typeof e == "object" ? be.test(e) ? Da : eg : Fr;
}
function $u(e, t) {
  const n = [...e], r = n.length, s = e.map((i, o) => yo(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++)
      n[o] = s[o](i);
    return n;
  };
}
function eg(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = yo(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r)
      n[i] = r[i](s);
    return n;
  };
}
function tg(e, t) {
  var n;
  const r = [], s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i], a = e.indexes[o][s[o]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[i] = l, s[o]++;
  }
  return r;
}
const ng = (e, t) => {
  const n = At.createTransformer(t), r = Zn(e), s = Zn(t);
  return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? Si.has(e) && !s.values.length || Si.has(t) && !r.values.length ? Jv(e, t) : tr($u(tg(r, s), s.values), n) : (yn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Fr(e, t));
};
function Wu(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ue(e, t, n) : yo(e)(e, t);
}
const rg = 5;
function Uu(e, t, n) {
  const r = Math.max(t - rg, 0);
  return pu(n - e(r), t - r);
}
const ce = {
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
}, Ns = 1e-3;
function sg({ duration: e = ce.duration, bounce: t = ce.bounce, velocity: n = ce.velocity, mass: r = ce.mass }) {
  let s, i;
  yn(e <= Je(ce.maxDuration), "Spring duration must be 10 seconds or less");
  let o = 1 - t;
  o = mt(ce.minDamping, ce.maxDamping, o), e = mt(ce.minDuration, ce.maxDuration, lt(e)), o < 1 ? (s = (c) => {
    const u = c * o, f = u * e, h = u - n, p = Ci(c, o), g = Math.exp(-f);
    return Ns - h / p * g;
  }, i = (c) => {
    const f = c * o * e, h = f * n + n, p = Math.pow(o, 2) * Math.pow(c, 2) * e, g = Math.exp(-f), m = Ci(Math.pow(c, 2), o);
    return (-s(c) + Ns > 0 ? -1 : 1) * ((h - p) * g) / m;
  }) : (s = (c) => {
    const u = Math.exp(-c * e), f = (c - n) * e + 1;
    return -Ns + u * f;
  }, i = (c) => {
    const u = Math.exp(-c * e), f = (n - c) * (e * e);
    return u * f;
  });
  const a = 5 / e, l = og(s, i, a);
  if (e = Je(e), isNaN(l))
    return {
      stiffness: ce.stiffness,
      damping: ce.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: o * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const ig = 12;
function og(e, t, n) {
  let r = n;
  for (let s = 1; s < ig; s++)
    r = r - e(r) / t(r);
  return r;
}
function Ci(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ag = ["duration", "bounce"], lg = ["stiffness", "damping", "mass"];
function Va(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function cg(e) {
  let t = {
    velocity: ce.velocity,
    stiffness: ce.stiffness,
    damping: ce.damping,
    mass: ce.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Va(e, lg) && Va(e, ag))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), s = r * r, i = 2 * mt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = {
        ...t,
        mass: ce.mass,
        stiffness: s,
        damping: i
      };
    } else {
      const n = sg(e);
      t = {
        ...t,
        ...n,
        mass: ce.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Hu(e = ce.visualDuration, t = ce.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: c, mass: u, duration: f, velocity: h, isResolvedFromDuration: p } = cg({
    ...n,
    velocity: -lt(n.velocity || 0)
  }), g = h || 0, m = c / (2 * Math.sqrt(l * u)), w = o - i, x = lt(Math.sqrt(l / u)), b = Math.abs(w) < 5;
  r || (r = b ? ce.restSpeed.granular : ce.restSpeed.default), s || (s = b ? ce.restDelta.granular : ce.restDelta.default);
  let S;
  if (m < 1) {
    const C = Ci(x, m);
    S = (A) => {
      const E = Math.exp(-m * x * A);
      return o - E * ((g + m * x * w) / C * Math.sin(C * A) + w * Math.cos(C * A));
    };
  } else if (m === 1)
    S = (C) => o - Math.exp(-x * C) * (w + (g + x * w) * C);
  else {
    const C = x * Math.sqrt(m * m - 1);
    S = (A) => {
      const E = Math.exp(-m * x * A), R = Math.min(C * A, 300);
      return o - E * ((g + m * x * w) * Math.sinh(R) + C * w * Math.cosh(R)) / C;
    };
  }
  const _ = {
    calculatedDuration: p && f || null,
    next: (C) => {
      const A = S(C);
      if (p)
        a.done = C >= f;
      else {
        let E = 0;
        m < 1 && (E = C === 0 ? Je(g) : Uu(S, C, A));
        const R = Math.abs(E) <= r, B = Math.abs(o - A) <= s;
        a.done = R && B;
      }
      return a.value = a.done ? o : A, a;
    },
    toString: () => {
      const C = Math.min(ou(_), mi), A = au((E) => _.next(C * E).value, C, 30);
      return C + "ms " + A;
    }
  };
  return _;
}
function La({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: s = 10, bounceStiffness: i = 500, modifyTarget: o, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const f = e[0], h = {
    done: !1,
    value: f
  }, p = (R) => a !== void 0 && R < a || l !== void 0 && R > l, g = (R) => a === void 0 ? l : l === void 0 || Math.abs(a - R) < Math.abs(l - R) ? a : l;
  let m = n * t;
  const w = f + m, x = o === void 0 ? w : o(w);
  x !== w && (m = x - f);
  const b = (R) => -m * Math.exp(-R / r), S = (R) => x + b(R), _ = (R) => {
    const B = b(R), $ = S(R);
    h.done = Math.abs(B) <= c, h.value = h.done ? x : $;
  };
  let C, A;
  const E = (R) => {
    p(h.value) && (C = R, A = Hu({
      keyframes: [h.value, g(h.value)],
      velocity: Uu(S, R, h.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: i,
      restDelta: c,
      restSpeed: u
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (R) => {
      let B = !1;
      return !A && C === void 0 && (B = !0, _(R), E(R)), C !== void 0 && R >= C ? A.next(R - C) : (!B && _(R), h);
    }
  };
}
const ug = /* @__PURE__ */ Qn(0.42, 0, 1, 1), dg = /* @__PURE__ */ Qn(0, 0, 0.58, 1), qu = /* @__PURE__ */ Qn(0.42, 0, 0.58, 1), fg = (e) => Array.isArray(e) && typeof e[0] != "number", Na = {
  linear: Ae,
  easeIn: ug,
  easeInOut: qu,
  easeOut: dg,
  circIn: uo,
  circInOut: _u,
  circOut: Cu,
  backIn: co,
  backInOut: bu,
  backOut: wu,
  anticipate: Su
}, Ia = (e) => {
  if (ro(e)) {
    Et(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, s] = e;
    return Qn(t, n, r, s);
  } else if (typeof e == "string")
    return Et(Na[e] !== void 0, `Invalid easing type '${e}'`), Na[e];
  return e;
};
function hg(e, t, n) {
  const r = [], s = n || Wu, i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ae : t;
      a = tr(l, a);
    }
    r.push(a);
  }
  return r;
}
function pg(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if (Et(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const o = hg(t, r, s), a = o.length, l = (c) => {
    let u = 0;
    if (a > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const f = dn(e[u], e[u + 1], c);
    return o[u](f);
  };
  return n ? (c) => l(mt(e[0], e[i - 1], c)) : l;
}
function mg(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = dn(0, t, r);
    e.push(ue(n, 1, s));
  }
}
function vg(e) {
  const t = [0];
  return mg(t, e.length - 1), t;
}
function gg(e, t) {
  return e.map((n) => n * t);
}
function yg(e, t) {
  return e.map(() => t || qu).splice(0, e.length - 1);
}
function zr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const s = fg(r) ? r.map(Ia) : Ia(r), i = {
    done: !1,
    value: t[0]
  }, o = gg(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : vg(t),
    e
  ), a = pg(o, t, {
    ease: Array.isArray(s) ? s : yg(t, s)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const xg = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => le.update(t, !0),
    stop: () => Rt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => xe.isProcessing ? xe.timestamp : Qe.now()
  };
}, wg = {
  decay: La,
  inertia: La,
  tween: zr,
  keyframes: zr,
  spring: Hu
}, bg = (e) => e / 100;
class xo extends zu {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options, o = (s == null ? void 0 : s.KeyframeResolver) || ho, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new o(i, a, n, r, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: s = 0, repeatType: i, velocity: o = 0 } = this.options, a = no(n) ? n : wg[n] || zr;
    let l, c;
    a !== zr && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && Et(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), l = tr(bg, Wu(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    i === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -o
    })), u.calculatedDuration === null && (u.calculatedDuration = ou(u));
    const { calculatedDuration: f } = u, h = f + s, p = h * (r + 1) - s;
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
      const { keyframes: R } = this.options;
      return { done: !0, value: R[R.length - 1] };
    }
    const { finalKeyframe: s, generator: i, mirroredGenerator: o, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: f } = r;
    if (this.startTime === null)
      return i.next(0);
    const { delay: h, repeat: p, repeatType: g, repeatDelay: m, onUpdate: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const x = this.currentTime - h * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? x < 0 : x > u;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let S = this.currentTime, _ = i;
    if (p) {
      const R = Math.min(this.currentTime, u) / f;
      let B = Math.floor(R), $ = R % 1;
      !$ && R >= 1 && ($ = 1), $ === 1 && B--, B = Math.min(B, p + 1), !!(B % 2) && (g === "reverse" ? ($ = 1 - $, m && ($ -= m / f)) : g === "mirror" && (_ = o)), S = mt(0, 1, $) * f;
    }
    const C = b ? { done: !1, value: l[0] } : _.next(S);
    a && (C.value = a(C.value));
    let { done: A } = C;
    !b && c !== null && (A = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
    return E && s !== void 0 && (C.value = ls(l, this.options, s)), w && w(C.value), E && this.finish(), C;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? lt(t.calculatedDuration) : 0;
  }
  get time() {
    return lt(this.currentTime);
  }
  set time(t) {
    t = Je(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = lt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = xg, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const s = this.driver.now();
    this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
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
const Sg = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Cg(e, t, n, { delay: r = 0, duration: s = 300, repeat: i = 0, repeatType: o = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = cu(a, s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: r,
    duration: s,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: i + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
const _g = /* @__PURE__ */ eo(() => Object.hasOwnProperty.call(Element.prototype, "animate")), $r = 10, Tg = 2e4;
function Pg(e) {
  return no(e.type) || e.type === "spring" || !lu(e.ease);
}
function Eg(e, t) {
  const n = new xo({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < Tg; )
    r = n.sample(i), s.push(r.value), i += $r;
  return {
    times: void 0,
    keyframes: s,
    duration: i - $r,
    ease: "linear"
  };
}
const Zu = {
  anticipate: Su,
  backInOut: bu,
  circInOut: _u
};
function Rg(e) {
  return e in Zu;
}
class Ba extends zu {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    this.resolver = new Fu(i, (o, a) => this.onKeyframesResolved(o, a), n, r, s), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: s = 300, times: i, ease: o, type: a, motionValue: l, name: c, startTime: u } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current))
      return !1;
    if (typeof o == "string" && Br() && Rg(o) && (o = Zu[o]), Pg(this.options)) {
      const { onComplete: h, onUpdate: p, motionValue: g, element: m, ...w } = this.options, x = Eg(t, w);
      t = x.keyframes, t.length === 1 && (t[1] = t[0]), s = x.duration, i = x.times, o = x.ease, a = "keyframes";
    }
    const f = Cg(l.owner.current, c, t, { ...this.options, duration: s, times: i, ease: o });
    return f.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (wa(f, this.pendingTimeline), this.pendingTimeline = void 0) : f.onfinish = () => {
      const { onComplete: h } = this.options;
      l.set(ls(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: f,
      duration: s,
      times: i,
      type: a,
      ease: o,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return lt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return lt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = Je(t);
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
        return Ae;
      const { animation: r } = n;
      wa(r, t);
    }
    return Ae;
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
    const { animation: n, keyframes: r, duration: s, type: i, ease: o, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: f, element: h, ...p } = this.options, g = new xo({
        ...p,
        keyframes: r,
        duration: s,
        type: i,
        ease: o,
        times: a,
        isGenerator: !0
      }), m = Je(this.time);
      c.setWithVelocity(g.sample(m - $r).value, g.sample(m).value, $r);
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
    const { motionValue: n, name: r, repeatDelay: s, repeatType: i, damping: o, type: a } = t;
    return _g() && r && Sg.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !s && i !== "mirror" && o !== 0 && a !== "inertia";
  }
}
const Ag = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, jg = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Mg = {
  type: "keyframes",
  duration: 0.8
}, kg = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Og = (e, { keyframes: t }) => t.length > 2 ? Mg : Ht.has(e) ? e.startsWith("scale") ? jg(t[1]) : Ag : kg;
function Dg({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: i, repeatType: o, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const wo = (e, t, n, r = {}, s, i) => (o) => {
  const a = to(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - Je(l);
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
      o(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : s
  };
  Dg(a) || (u = {
    ...u,
    ...Og(e, u)
  }), u.duration && (u.duration = Je(u.duration)), u.repeatDelay && (u.repeatDelay = Je(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let f = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), f && !i && t.get() !== void 0) {
    const h = ls(u.keyframes, a);
    if (h !== void 0)
      return le.update(() => {
        u.onUpdate(h), u.onComplete();
      }), new F1([]);
  }
  return !i && Ba.supports(u) ? new Ba(u) : new xo(u);
};
function Vg({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Ku(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const c = [], u = s && e.animationState && e.animationState.getState()[s];
  for (const f in l) {
    const h = e.getValue(f, (i = e.latestValues[f]) !== null && i !== void 0 ? i : null), p = l[f];
    if (p === void 0 || u && Vg(u, f))
      continue;
    const g = {
      delay: n,
      ...to(o || {}, f)
    };
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const x = vu(e);
      if (x) {
        const b = window.MotionHandoffAnimation(x, f, le);
        b !== null && (g.startTime = b, m = !0);
      }
    }
    gi(e, f), h.start(wo(f, h, p, e.shouldReduceMotion && Ht.has(f) ? { type: !1 } : g, e, m));
    const w = h.animation;
    w && c.push(w);
  }
  return a && Promise.all(c).then(() => {
    le.update(() => {
      a && iv(e, a);
    });
  }), c;
}
function _i(e, t, n = {}) {
  var r;
  const s = as(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(Ku(e, s, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: f, staggerDirection: h } = i;
    return Lg(e, t, u + c, f, h, n);
  } : () => Promise.resolve(), { when: l } = i;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => u());
  } else
    return Promise.all([o(), a(n.delay)]);
}
function Lg(e, t, n = 0, r = 0, s = 1, i) {
  const o = [], a = (e.variantChildren.size - 1) * r, l = s === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(Ng).forEach((c, u) => {
    c.notify("AnimationStart", t), o.push(_i(c, t, {
      ...i,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(o);
}
function Ng(e, t) {
  return e.sortNodePosition(t);
}
function Ig(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => _i(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string")
    r = _i(e, t, n);
  else {
    const s = typeof t == "function" ? as(e, t, n.custom) : t;
    r = Promise.all(Ku(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Bg = Qi.length;
function Gu(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Gu(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Bg; n++) {
    const r = Qi[n], s = e.props[r];
    (Un(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const Fg = [...Ji].reverse(), zg = Ji.length;
function $g(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Ig(e, n, r)));
}
function Wg(e) {
  let t = $g(e), n = Fa(), r = !0;
  const s = (l) => (c, u) => {
    var f;
    const h = as(e, u, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (h) {
      const { transition: p, transitionEnd: g, ...m } = h;
      c = { ...c, ...m, ...g };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e, u = Gu(e.parent) || {}, f = [], h = /* @__PURE__ */ new Set();
    let p = {}, g = 1 / 0;
    for (let w = 0; w < zg; w++) {
      const x = Fg[w], b = n[x], S = c[x] !== void 0 ? c[x] : u[x], _ = Un(S), C = x === l ? b.isActive : null;
      C === !1 && (g = w);
      let A = S === u[x] && S !== c[x] && _;
      if (A && r && e.manuallyAnimateOnMount && (A = !1), b.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !S && !b.prevProp || // Or if the prop doesn't define an animation
      os(S) || typeof S == "boolean")
        continue;
      const E = Ug(b.prevProp, S);
      let R = E || // If we're making this variant active, we want to always make it active
      x === l && b.isActive && !A && _ || // If we removed a higher-priority variant (i is in reverse order)
      w > g && _, B = !1;
      const $ = Array.isArray(S) ? S : [S];
      let G = $.reduce(s(x), {});
      C === !1 && (G = {});
      const { prevResolvedValues: Q = {} } = b, H = {
        ...Q,
        ...G
      }, W = (L) => {
        R = !0, h.has(L) && (B = !0, h.delete(L)), b.needsAnimating[L] = !0;
        const D = e.getValue(L);
        D && (D.liveStyle = !1);
      };
      for (const L in H) {
        const D = G[L], J = Q[L];
        if (p.hasOwnProperty(L))
          continue;
        let fe = !1;
        pi(D) && pi(J) ? fe = !iu(D, J) : fe = D !== J, fe ? D != null ? W(L) : h.add(L) : D !== void 0 && h.has(L) ? W(L) : b.protectedKeys[L] = !0;
      }
      b.prevProp = S, b.prevResolvedValues = G, b.isActive && (p = { ...p, ...G }), r && e.blockInitialAnimation && (R = !1), R && (!(A && E) || B) && f.push(...$.map((L) => ({
        animation: L,
        options: { type: x }
      })));
    }
    if (h.size) {
      const w = {};
      h.forEach((x) => {
        const b = e.getBaseTarget(x), S = e.getValue(x);
        S && (S.liveStyle = !0), w[x] = b ?? null;
      }), f.push({ animation: w });
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
    const f = o(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Fa(), r = !0;
    }
  };
}
function Ug(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !iu(t, e) : !1;
}
function Vt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Fa() {
  return {
    animate: Vt(!0),
    whileInView: Vt(),
    whileHover: Vt(),
    whileTap: Vt(),
    whileDrag: Vt(),
    whileFocus: Vt(),
    exit: Vt()
  };
}
class Ot {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class Hg extends Ot {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Wg(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    os(t) && (this.unmountControls = t.subscribe(this.node));
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
let qg = 0;
class Zg extends Ot {
  constructor() {
    super(...arguments), this.id = qg++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Kg = {
  animation: {
    Feature: Hg
  },
  exit: {
    Feature: Zg
  }
};
function Kn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function nr(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Gg = (e) => (t) => so(t) && e(t, nr(t));
function Dn(e, t, n, r) {
  return Kn(e, t, Gg(n), r);
}
const za = (e, t) => Math.abs(e - t);
function Yg(e, t) {
  const n = za(e.x, t.x), r = za(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Yu {
  constructor(t, n, { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Bs(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, p = Yg(f.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !p)
        return;
      const { point: g } = f, { timestamp: m } = xe;
      this.history.push({ ...g, timestamp: m });
      const { onStart: w, onMove: x } = this.handlers;
      h || (w && w(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, h) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Is(h, this.transformPagePoint), le.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, h) => {
      this.end();
      const { onEnd: p, onSessionEnd: g, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const w = Bs(f.type === "pointercancel" ? this.lastMoveEventInfo : Is(h, this.transformPagePoint), this.history);
      this.startEvent && p && p(f, w), g && g(f, w);
    }, !so(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = s || window;
    const o = nr(t), a = Is(o, this.transformPagePoint), { point: l } = a, { timestamp: c } = xe;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Bs(a, this.history)), this.removeListeners = tr(Dn(this.contextWindow, "pointermove", this.handlePointerMove), Dn(this.contextWindow, "pointerup", this.handlePointerUp), Dn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Rt(this.updatePoint);
  }
}
function Is(e, t) {
  return t ? { point: t(e.point) } : e;
}
function $a(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Bs({ point: e }, t) {
  return {
    point: e,
    delta: $a(e, Xu(t)),
    offset: $a(e, Xg(t)),
    velocity: Jg(t, 0.1)
  };
}
function Xg(e) {
  return e[0];
}
function Xu(e) {
  return e[e.length - 1];
}
function Jg(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const s = Xu(e);
  for (; n >= 0 && (r = e[n], !(s.timestamp - r.timestamp > Je(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = lt(s.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (s.x - r.x) / i,
    y: (s.y - r.y) / i
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Qt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const Ju = 1e-4, Qg = 1 - Ju, e2 = 1 + Ju, Qu = 0.01, t2 = 0 - Qu, n2 = 0 + Qu;
function De(e) {
  return e.max - e.min;
}
function r2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Wa(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ue(t.min, t.max, e.origin), e.scale = De(n) / De(t), e.translate = ue(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Qg && e.scale <= e2 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= t2 && e.translate <= n2 || isNaN(e.translate)) && (e.translate = 0);
}
function Vn(e, t, n, r) {
  Wa(e.x, t.x, n.x, r ? r.originX : void 0), Wa(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ua(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + De(t);
}
function s2(e, t, n) {
  Ua(e.x, t.x, n.x), Ua(e.y, t.y, n.y);
}
function Ha(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + De(t);
}
function Ln(e, t, n) {
  Ha(e.x, t.x, n.x), Ha(e.y, t.y, n.y);
}
function i2(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ue(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ue(n, e, r.max) : Math.min(e, n)), e;
}
function qa(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function o2(e, { top: t, left: n, bottom: r, right: s }) {
  return {
    x: qa(e.x, n, s),
    y: qa(e.y, t, r)
  };
}
function Za(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function a2(e, t) {
  return {
    x: Za(e.x, t.x),
    y: Za(e.y, t.y)
  };
}
function l2(e, t) {
  let n = 0.5;
  const r = De(e), s = De(t);
  return s > r ? n = dn(t.min, t.max - r, e.min) : r > s && (n = dn(e.min, e.max - s, t.min)), mt(0, 1, n);
}
function c2(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Ti = 0.35;
function u2(e = Ti) {
  return e === !1 ? e = 0 : e === !0 && (e = Ti), {
    x: Ka(e, "left", "right"),
    y: Ka(e, "top", "bottom")
  };
}
function Ka(e, t, n) {
  return {
    min: Ga(e, t),
    max: Ga(e, n)
  };
}
function Ga(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ya = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), en = () => ({
  x: Ya(),
  y: Ya()
}), Xa = () => ({ min: 0, max: 0 }), pe = () => ({
  x: Xa(),
  y: Xa()
});
function Fe(e) {
  return [e("x"), e("y")];
}
function ed({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function d2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function f2(e, t) {
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
function Fs(e) {
  return e === void 0 || e === 1;
}
function Pi({ scale: e, scaleX: t, scaleY: n }) {
  return !Fs(e) || !Fs(t) || !Fs(n);
}
function Lt(e) {
  return Pi(e) || td(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function td(e) {
  return Ja(e.x) || Ja(e.y);
}
function Ja(e) {
  return e && e !== "0%";
}
function Wr(e, t, n) {
  const r = e - n, s = t * r;
  return n + s;
}
function Qa(e, t, n, r, s) {
  return s !== void 0 && (e = Wr(e, s, r)), Wr(e, n, r) + t;
}
function Ei(e, t = 0, n = 1, r, s) {
  e.min = Qa(e.min, t, n, r, s), e.max = Qa(e.max, t, n, r, s);
}
function nd(e, { x: t, y: n }) {
  Ei(e.x, t.translate, t.scale, t.originPoint), Ei(e.y, n.translate, n.scale, n.originPoint);
}
const el = 0.999999999999, tl = 1.0000000000001;
function h2(e, t, n, r = !1) {
  const s = n.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    i = n[a], o = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && nn(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, nd(e, o)), r && Lt(i.latestValues) && nn(e, i.latestValues));
  }
  t.x < tl && t.x > el && (t.x = 1), t.y < tl && t.y > el && (t.y = 1);
}
function tn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function nl(e, t, n, r, s = 0.5) {
  const i = ue(e.min, e.max, s);
  Ei(e, t, n, i, r);
}
function nn(e, t) {
  nl(e.x, t.x, t.scaleX, t.scale, t.originX), nl(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function rd(e, t) {
  return ed(f2(e.getBoundingClientRect(), t));
}
function p2(e, t, n) {
  const r = rd(e, n), { scroll: s } = t;
  return s && (tn(r.x, s.offset.x), tn(r.y, s.offset.y)), r;
}
const sd = ({ current: e }) => e ? e.ownerDocument.defaultView : null, m2 = /* @__PURE__ */ new WeakMap();
class v2 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = pe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const s = (u) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(nr(u).point);
    }, i = (u, f) => {
      const { drag: h, dragPropagation: p, onDragStart: g } = this.getProps();
      if (h && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = G1(h), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Fe((w) => {
        let x = this.getAxisMotionValue(w).get() || 0;
        if (et.test(x)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const S = b.layout.layoutBox[w];
            S && (x = De(S) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[w] = x;
      }), g && le.postRender(() => g(u, f)), gi(this.visualElement, "transform");
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, o = (u, f) => {
      const { dragPropagation: h, dragDirectionLock: p, onDirectionLock: g, onDrag: m } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: w } = f;
      if (p && this.currentDirection === null) {
        this.currentDirection = g2(w), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, w), this.updateAxis("y", f.point, w), this.visualElement.render(), m && m(u, f);
    }, a = (u, f) => this.stop(u, f), l = () => Fe((u) => {
      var f;
      return this.getAnimationState(u) === "paused" && ((f = this.getAxisMotionValue(u).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Yu(t, {
      onSessionStart: s,
      onStart: i,
      onMove: o,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: sd(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && le.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !fr(t, s, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = i2(o, this.constraints[t], this.elastic[t])), i.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Qt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = o2(s.layoutBox, n) : this.constraints = !1, this.elastic = u2(r), i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Fe((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = c2(s.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Qt(t))
      return !1;
    const r = t.current;
    Et(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const i = p2(r, s.root, this.visualElement.getTransformPagePoint());
    let o = a2(s.layout.layoutBox, i);
    if (n) {
      const a = n(d2(o));
      this.hasMutatedConstraints = !!a, a && (o = ed(a));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: s, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = Fe((u) => {
      if (!fr(u, n, this.currentDirection))
        return;
      let f = l && l[u] || {};
      o && (f = { min: 0, max: 0 });
      const h = s ? 200 : 1e6, p = s ? 40 : 1e7, g = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...f
      };
      return this.startAxisValueAnimation(u, g);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return gi(this.visualElement, t), r.start(wo(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Fe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Fe((t) => {
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
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), s = r[n];
    return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Fe((n) => {
      const { drag: r } = this.getProps();
      if (!fr(n, r, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - ue(o, a, 0.5));
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
    if (!Qt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Fe((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = l2({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Fe((o) => {
      if (!fr(o, t, null))
        return;
      const a = this.getAxisMotionValue(o), { min: l, max: c } = this.constraints[o];
      a.set(ue(l, c, s[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    m2.set(this.visualElement, this);
    const t = this.visualElement.current, n = Dn(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Qt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), le.read(r);
    const o = Kn(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Fe((u) => {
        const f = this.getAxisMotionValue(u);
        f && (this.originPoint[u] += l[u].translate, f.set(f.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: s = !1, dragConstraints: i = !1, dragElastic: o = Ti, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function fr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function g2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class y2 extends Ot {
  constructor(t) {
    super(t), this.removeGroupControls = Ae, this.removeListeners = Ae, this.controls = new v2(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ae;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const rl = (e) => (t, n) => {
  e && le.postRender(() => e(t, n));
};
class x2 extends Ot {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ae;
  }
  onPointerDown(t) {
    this.session = new Yu(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: sd(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: rl(t),
      onStart: rl(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && le.postRender(() => s(i, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Dn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const bo = vt(null);
function w2() {
  const e = we(bo);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, s = ff();
  Gn(() => r(s), []);
  const i = ki(() => n && n(s), [s, n]);
  return !t && n ? [!1, i] : [!0];
}
const id = vt({}), od = vt({}), yr = {
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
function sl(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Cn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (V.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = sl(e, t.target.x), r = sl(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, b2 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, s = At.parse(e);
    if (s.length > 5)
      return r;
    const i = At.createTransformer(e), o = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    s[0 + o] /= a, s[1 + o] /= l;
    const c = ue(a, l, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= c), typeof s[3 + o] == "number" && (s[3 + o] /= c), i(s);
  }
}, Ur = {};
function S2(e) {
  Object.assign(Ur, e);
}
const { schedule: So, cancel: ex } = hu(queueMicrotask, !1);
class C2 extends hf {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props, { projection: i } = t;
    S2(_2), i && (n.group && n.group.add(i), r && r.register && s && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), yr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: s, isPresent: i } = this.props, o = r.projection;
    return o && (o.isPresent = i, s || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? o.promote() : o.relegate() || le.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), So.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: s } = t;
    s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ad(e) {
  const [t, n] = w2(), r = we(id);
  return d.jsx(C2, { ...e, layoutGroup: r, switchLayoutGroup: we(od), isPresent: t, safeToRemove: n });
}
const _2 = {
  borderRadius: {
    ...Cn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Cn,
  borderTopRightRadius: Cn,
  borderBottomLeftRadius: Cn,
  borderBottomRightRadius: Cn,
  boxShadow: b2
};
function T2(e, t, n) {
  const r = Se(e) ? e : Hn(e);
  return r.start(wo("", r, t, n)), r.animation;
}
function P2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const E2 = (e, t) => e.depth - t.depth;
class R2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    io(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    oo(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(E2), this.isDirty = !1, this.children.forEach(t);
  }
}
function A2(e, t) {
  const n = Qe.now(), r = ({ timestamp: s }) => {
    const i = s - n;
    i >= t && (Rt(r), e(i - t));
  };
  return le.read(r, !0), () => Rt(r);
}
function xr(e) {
  const t = Se(e) ? e.get() : e;
  return Y1(t) ? t.toValue() : t;
}
const ld = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], j2 = ld.length, il = (e) => typeof e == "string" ? parseFloat(e) : e, ol = (e) => typeof e == "number" || V.test(e);
function M2(e, t, n, r, s, i) {
  s ? (e.opacity = ue(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    k2(r)
  ), e.opacityExit = ue(t.opacity !== void 0 ? t.opacity : 1, 0, O2(r))) : i && (e.opacity = ue(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < j2; o++) {
    const a = `border${ld[o]}Radius`;
    let l = al(t, a), c = al(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || ol(l) === ol(c) ? (e[a] = Math.max(ue(il(l), il(c), r), 0), (et.test(c) || et.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = ue(t.rotate || 0, n.rotate || 0, r));
}
function al(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const k2 = /* @__PURE__ */ cd(0, 0.5, Cu), O2 = /* @__PURE__ */ cd(0.5, 0.95, Ae);
function cd(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(dn(e, t, r));
}
function ll(e, t) {
  e.min = t.min, e.max = t.max;
}
function Be(e, t) {
  ll(e.x, t.x), ll(e.y, t.y);
}
function cl(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function ul(e, t, n, r, s) {
  return e -= t, e = Wr(e, 1 / n, r), s !== void 0 && (e = Wr(e, 1 / s, r)), e;
}
function D2(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (et.test(t) && (t = parseFloat(t), t = ue(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let a = ue(i.min, i.max, r);
  e === i && (a -= t), e.min = ul(e.min, t, n, a, s), e.max = ul(e.max, t, n, a, s);
}
function dl(e, t, [n, r, s], i, o) {
  D2(e, t[n], t[r], t[s], t.scale, i, o);
}
const V2 = ["x", "scaleX", "originX"], L2 = ["y", "scaleY", "originY"];
function fl(e, t, n, r) {
  dl(e.x, t, V2, n ? n.x : void 0, r ? r.x : void 0), dl(e.y, t, L2, n ? n.y : void 0, r ? r.y : void 0);
}
function hl(e) {
  return e.translate === 0 && e.scale === 1;
}
function ud(e) {
  return hl(e.x) && hl(e.y);
}
function pl(e, t) {
  return e.min === t.min && e.max === t.max;
}
function N2(e, t) {
  return pl(e.x, t.x) && pl(e.y, t.y);
}
function ml(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function dd(e, t) {
  return ml(e.x, t.x) && ml(e.y, t.y);
}
function vl(e) {
  return De(e.x) / De(e.y);
}
function gl(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class I2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    io(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (oo(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0)
      return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
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
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
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
function B2(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x, i = e.y.translate / t.y, o = (n == null ? void 0 : n.z) || 0;
  if ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: f, rotateY: h, skewX: p, skewY: g } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), p && (r += `skewX(${p}deg) `), g && (r += `skewY(${g}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Nt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, jn = typeof window < "u" && window.MotionDebug !== void 0, zs = ["", "X", "Y", "Z"], F2 = { visibility: "hidden" }, yl = 1e3;
let z2 = 0;
function $s(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && (n[e] = s[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function fd(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = vu(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", le, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && fd(r);
}
function hd({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s }) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      this.id = z2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, jn && (Nt.totalNodes = Nt.resolvedTargetDeltas = Nt.recalculatedProjection = 0), this.nodes.forEach(U2), this.nodes.forEach(G2), this.nodes.forEach(Y2), this.nodes.forEach(H2), jn && window.MotionDebug.record(Nt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new R2());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new ao()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = P2(o), this.instance = o;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        e(o, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = A2(h, 250), yr.hasAnimatedSinceResize && (yr.hasAnimatedSinceResize = !1, this.nodes.forEach(wl));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || ty, { onLayoutAnimationStart: w, onLayoutAnimationComplete: x } = u.getProps(), b = !this.targetLayout || !dd(this.targetLayout, g) || p, S = !h && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || S || h && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, S);
          const _ = {
            ...to(m, "layout"),
            onPlay: w,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0, _.type = !1), this.startAnimation(_);
        } else
          h || wl(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Rt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(X2), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && fd(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(xl);
        return;
      }
      this.isUpdating || this.nodes.forEach(Z2), this.isUpdating = !1, this.nodes.forEach(K2), this.nodes.forEach($2), this.nodes.forEach(W2), this.clearAllSnapshots();
      const a = Qe.now();
      xe.delta = mt(0, 1e3 / 60, a - xe.timestamp), xe.timestamp = a, xe.isProcessing = !0, Os.update.process(xe), Os.preRender.process(xe), Os.render.process(xe), xe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, So.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(q2), this.sharedNodes.forEach(J2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, le.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      le.postRender(() => {
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
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = pe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !ud(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      o && (a || Lt(this.latestValues) || u) && (s(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), ny(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a)
        return pe();
      const l = a.measureViewportBox();
      if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(ry))) {
        const { scroll: u } = this.root;
        u && (tn(l.x, u.offset.x), tn(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = pe();
      if (Be(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: f, options: h } = u;
        u !== this.root && f && h.layoutScroll && (f.wasRoot && Be(l, o), tn(l.x, f.offset.x), tn(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = pe();
      Be(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && nn(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Lt(u.latestValues) && nn(l, u.latestValues);
      }
      return Lt(this.latestValues) && nn(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = pe();
      Be(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Lt(c.latestValues))
          continue;
        Pi(c.latestValues) && c.updateSnapshot();
        const u = pe(), f = c.measurePageBox();
        Be(u, f), fl(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Lt(this.latestValues) && fl(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== xe.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (this.resolvedRelativeTargetAt = xe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), Ln(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Be(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = pe(), this.targetWithTransforms = pe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), s2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Be(this.target, this.layout.layoutBox), nd(this.target, this.targetDelta)) : Be(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), Ln(this.relativeTargetOrigin, this.target, p.target), Be(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          jn && Nt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Pi(this.parent.latestValues) || td(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === xe.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f))
        return;
      Be(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      h2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = pe());
      const { target: g } = a;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (cl(this.prevProjectionDelta.x, this.projectionDelta.x), cl(this.prevProjectionDelta.y, this.projectionDelta.y)), Vn(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== p || !gl(this.projectionDelta.x, this.prevProjectionDelta.x) || !gl(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), jn && Nt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), o) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = en(), this.projectionDelta = en(), this.projectionDeltaWithTransform = en();
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, f = en();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = pe(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, m = p !== g, w = this.getStack(), x = !w || w.members.length <= 1, b = !!(m && !x && this.options.crossfade === !0 && !this.path.some(ey));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (_) => {
        const C = _ / 1e3;
        bl(f.x, o.x, C), bl(f.y, o.y, C), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ln(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Q2(this.relativeTarget, this.relativeTargetOrigin, h, C), S && N2(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = pe()), Be(S, this.relativeTarget)), m && (this.animationValues = u, M2(u, c, this.latestValues, C, b, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Rt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = le.update(() => {
        yr.hasAnimatedSinceResize = !0, this.currentAnimation = T2(0, yl, {
          ...o,
          onUpdate: (a) => {
            this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(yl), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = o;
      if (!(!a || !l || !c)) {
        if (this !== o && this.layout && c && pd(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || pe();
          const f = De(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + f;
          const h = De(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + h;
        }
        Be(a, l), nn(a, u), Vn(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new I2()), this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let a = !1;
      const { latestValues: l } = o;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && $s("z", o, c, this.animationValues);
      for (let u = 0; u < zs.length; u++)
        $s(`rotate${zs[u]}`, o, c, this.animationValues), $s(`skew${zs[u]}`, o, c, this.animationValues);
      o.render();
      for (const u in c)
        o.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return F2;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = xr(o == null ? void 0 : o.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = xr(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !Lt(this.latestValues) && (m.transform = u ? u({}, "") : "none", this.hasProjected = !1), m;
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), c.transform = B2(this.projectionDeltaWithTransform, this.treeScale, h), u && (c.transform = u(h, c.transform));
      const { x: p, y: g } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, f.animationValues ? c.opacity = f === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const m in Ur) {
        if (h[m] === void 0)
          continue;
        const { correct: w, applyTo: x } = Ur[m], b = c.transform === "none" ? h[m] : w(h[m], f);
        if (x) {
          const S = x.length;
          for (let _ = 0; _ < S; _++)
            c[x[_]] = b;
        } else
          c[m] = b;
      }
      return this.options.layoutId && (c.pointerEvents = f === this ? xr(o == null ? void 0 : o.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(xl), this.root.sharedNodes.clear();
    }
  };
}
function $2(e) {
  e.updateLayout();
}
function W2(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout, { animationType: i } = e.options, o = n.source !== e.layout.source;
    i === "size" ? Fe((f) => {
      const h = o ? n.measuredBox[f] : n.layoutBox[f], p = De(h);
      h.min = r[f].min, h.max = h.min + p;
    }) : pd(i, n.layoutBox, r) && Fe((f) => {
      const h = o ? n.measuredBox[f] : n.layoutBox[f], p = De(r[f]);
      h.max = h.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + p);
    });
    const a = en();
    Vn(a, r, n.layoutBox);
    const l = en();
    o ? Vn(l, e.applyTransform(s, !0), n.measuredBox) : Vn(l, r, n.layoutBox);
    const c = !ud(a);
    let u = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: p } = f;
        if (h && p) {
          const g = pe();
          Ln(g, n.layoutBox, h.layoutBox);
          const m = pe();
          Ln(m, r, p.layoutBox), dd(g, m) || (u = !0), f.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = g, e.relativeParent = f);
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
function U2(e) {
  jn && Nt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function H2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function q2(e) {
  e.clearSnapshot();
}
function xl(e) {
  e.clearMeasurements();
}
function Z2(e) {
  e.isLayoutDirty = !1;
}
function K2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function wl(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function G2(e) {
  e.resolveTargetDelta();
}
function Y2(e) {
  e.calcProjection();
}
function X2(e) {
  e.resetSkewAndRotation();
}
function J2(e) {
  e.removeLeadSnapshot();
}
function bl(e, t, n) {
  e.translate = ue(t.translate, 0, n), e.scale = ue(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Sl(e, t, n, r) {
  e.min = ue(t.min, n.min, r), e.max = ue(t.max, n.max, r);
}
function Q2(e, t, n, r) {
  Sl(e.x, t.x, n.x, r), Sl(e.y, t.y, n.y, r);
}
function ey(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ty = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Cl = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), _l = Cl("applewebkit/") && !Cl("chrome/") ? Math.round : Ae;
function Tl(e) {
  e.min = _l(e.min), e.max = _l(e.max);
}
function ny(e) {
  Tl(e.x), Tl(e.y);
}
function pd(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !r2(vl(t), vl(n), 0.2);
}
function ry(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const sy = hd({
  attachResizeListener: (e, t) => Kn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ws = {
  current: void 0
}, md = hd({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ws.current) {
      const e = new sy({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ws.current = e;
    }
    return Ws.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), iy = {
  pan: {
    Feature: x2
  },
  drag: {
    Feature: y2,
    ProjectionNode: md,
    MeasureLayout: ad
  }
};
function Pl(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, i = r[s];
  i && le.postRender(() => i(t, nr(t)));
}
class oy extends Ot {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = U1(t, (n) => (Pl(this.node, n, "Start"), (r) => Pl(this.node, r, "End"))));
  }
  unmount() {
  }
}
class ay extends Ot {
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
    this.unmount = tr(Kn(this.node.current, "focus", () => this.onFocus()), Kn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function El(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), i = r[s];
  i && le.postRender(() => i(t, nr(t)));
}
class ly extends Ot {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = K1(t, (n) => (El(this.node, n, "Start"), (r, { success: s }) => El(this.node, r, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ri = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), cy = (e) => {
  const t = Ri.get(e.target);
  t && t(e);
}, uy = (e) => {
  e.forEach(cy);
};
function dy({ root: e, ...t }) {
  const n = e || document;
  Us.has(n) || Us.set(n, {});
  const r = Us.get(n), s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(uy, { root: e, ...t })), r[s];
}
function fy(e, t, n) {
  const r = dy(t);
  return Ri.set(e, n), r.observe(e), () => {
    Ri.delete(e), r.unobserve(e);
  };
}
const hy = {
  some: 0,
  all: 1
};
class py extends Ot {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: s = "some", once: i } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof s == "number" ? s : hy[s]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), h = c ? u : f;
      h && h(l);
    };
    return fy(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(my(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function my({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const vy = {
  inView: {
    Feature: py
  },
  tap: {
    Feature: ly
  },
  focus: {
    Feature: ay
  },
  hover: {
    Feature: oy
  }
}, gy = {
  layout: {
    ProjectionNode: md,
    MeasureLayout: ad
  }
}, vd = vt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), cs = vt({}), Co = typeof window < "u", yy = Co ? Ol : Gn, gd = vt({ strict: !1 });
function xy(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = we(cs), l = we(gd), c = we(bo), u = we(vd).reducedMotion, f = Mn(null);
  r = r || l.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const h = f.current, p = we(od);
  h && !h.projection && s && (h.type === "html" || h.type === "svg") && wy(f.current, n, s, p);
  const g = Mn(!1);
  pf(() => {
    h && g.current && h.update(n, c);
  });
  const m = n[mu], w = Mn(!!m && !(!((i = window.MotionHandoffIsComplete) === null || i === void 0) && i.call(window, m)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, m)));
  return yy(() => {
    h && (g.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), So.render(h.render), w.current && h.animationState && h.animationState.animateChanges());
  }), Gn(() => {
    h && (!w.current && h.animationState && h.animationState.animateChanges(), w.current && (queueMicrotask(() => {
      var x;
      (x = window.MotionHandoffMarkAsComplete) === null || x === void 0 || x.call(window, m);
    }), w.current = !1));
  }), h;
}
function wy(e, t, n, r) {
  const { layoutId: s, layout: i, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : yd(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: i,
    alwaysMeasureLayout: !!o || a && Qt(a),
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
function yd(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : yd(e.parent);
}
function by(e, t, n) {
  return ki(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Qt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function us(e) {
  return os(e.animate) || Qi.some((t) => Un(e[t]));
}
function xd(e) {
  return !!(us(e) || e.variants);
}
function Sy(e, t) {
  if (us(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Un(n) ? n : void 0,
      animate: Un(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Cy(e) {
  const { initial: t, animate: n } = Sy(e, we(cs));
  return qr(() => ({ initial: t, animate: n }), [Rl(t), Rl(n)]);
}
function Rl(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Al = {
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
}, hn = {};
for (const e in Al)
  hn[e] = {
    isEnabled: (t) => Al[e].some((n) => !!t[n])
  };
function _y(e) {
  for (const t in e)
    hn[t] = {
      ...hn[t],
      ...e[t]
    };
}
const Ty = Symbol.for("motionComponentSymbol");
function Py({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: s }) {
  e && _y(e);
  function i(a, l) {
    let c;
    const u = {
      ...we(vd),
      ...a,
      layoutId: Ey(a)
    }, { isStatic: f } = u, h = Cy(a), p = r(a, f);
    if (!f && Co) {
      Ry(u, e);
      const g = Ay(u);
      c = g.MeasureLayout, h.visualElement = xy(s, p, u, t, g.ProjectionNode);
    }
    return d.jsxs(cs.Provider, { value: h, children: [c && h.visualElement ? d.jsx(c, { visualElement: h.visualElement, ...u }) : null, n(s, a, by(p, h.visualElement, l), p, f, h.visualElement)] });
  }
  const o = jt(i);
  return o[Ty] = s, o;
}
function Ey({ layoutId: e }) {
  const t = we(id).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Ry(e, t) {
  const n = we(gd).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? yn(!1, r) : Et(!1, r);
  }
}
function Ay(e) {
  const { drag: t, layout: n } = hn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const jy = [
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
function _o(e) {
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
      !!(jy.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function wd(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const bd = /* @__PURE__ */ new Set([
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
function Sd(e, t, n, r) {
  wd(e, t, void 0, r);
  for (const s in t.attrs)
    e.setAttribute(bd.has(s) ? s : lo(s), t.attrs[s]);
}
function Cd(e, { layout: t, layoutId: n }) {
  return Ht.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ur[e] || e === "opacity");
}
function To(e, t, n) {
  var r;
  const { style: s } = e, i = {};
  for (const o in s)
    (Se(s[o]) || t.style && Se(t.style[o]) || Cd(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[o] = s[o]);
  return i;
}
function _d(e, t, n) {
  const r = To(e, t, n);
  for (const s in e)
    if (Se(e[s]) || Se(t[s])) {
      const i = Jn.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      r[i] = e[s];
    }
  return r;
}
function My(e) {
  const t = Mn(null);
  return t.current === null && (t.current = e()), t.current;
}
function ky({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, s, i) {
  const o = {
    latestValues: Oy(r, s, i, e),
    renderState: t()
  };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const Td = (e) => (t, n) => {
  const r = we(cs), s = we(bo), i = () => ky(e, t, r, s);
  return n ? i() : My(i);
};
function Oy(e, t, n, r) {
  const s = {}, i = r(e, {});
  for (const h in i)
    s[h] = xr(i[h]);
  let { initial: o, animate: a } = e;
  const l = us(e), c = xd(e);
  t && c && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const f = u ? a : o;
  if (f && typeof f != "boolean" && !os(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let p = 0; p < h.length; p++) {
      const g = Xi(e, h[p]);
      if (g) {
        const { transitionEnd: m, transition: w, ...x } = g;
        for (const b in x) {
          let S = x[b];
          if (Array.isArray(S)) {
            const _ = u ? S.length - 1 : 0;
            S = S[_];
          }
          S !== null && (s[b] = S);
        }
        for (const b in m)
          s[b] = m[b];
      }
    }
  }
  return s;
}
const Po = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Pd = () => ({
  ...Po(),
  attrs: {}
}), Ed = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Dy = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Vy = Jn.length;
function Ly(e, t, n) {
  let r = "", s = !0;
  for (let i = 0; i < Vy; i++) {
    const o = Jn[i], a = e[o];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = Ed(a, vo[o]);
      if (!l) {
        s = !1;
        const u = Dy[o] || o;
        r += `${u}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, s ? "" : r) : s && (r = "none"), r;
}
function Eo(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Ht.has(l)) {
      o = !0;
      continue;
    } else if (Ru(l)) {
      s[l] = c;
      continue;
    } else {
      const u = Ed(c, vo[l]);
      l.startsWith("origin") ? (a = !0, i[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (o || n ? r.transform = Ly(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
function jl(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function Ny(e, t, n) {
  const r = jl(t, e.x, e.width), s = jl(n, e.y, e.height);
  return `${r} ${s}`;
}
const Iy = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, By = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Fy(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? Iy : By;
  e[i.offset] = V.transform(-r);
  const o = V.transform(t), a = V.transform(n);
  e[i.array] = `${o} ${a}`;
}
function Ro(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: s,
  originY: i,
  pathLength: o,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, f) {
  if (Eo(e, c, f), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p, dimensions: g } = e;
  h.transform && (g && (p.transform = h.transform), delete h.transform), g && (s !== void 0 || i !== void 0 || p.transform) && (p.transformOrigin = Ny(g, s !== void 0 ? s : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), o !== void 0 && Fy(h, o, a, l, !1);
}
const Ao = (e) => typeof e == "string" && e.toLowerCase() === "svg", zy = {
  useVisualState: Td({
    scrapeMotionValuesFromProps: _d,
    createRenderState: Pd,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      le.read(() => {
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
      }), le.render(() => {
        Ro(n, r, Ao(t.tagName), e.transformTemplate), Sd(t, n);
      });
    }
  })
}, $y = {
  useVisualState: Td({
    scrapeMotionValuesFromProps: To,
    createRenderState: Po
  })
};
function Rd(e, t, n) {
  for (const r in t)
    !Se(t[r]) && !Cd(r, n) && (e[r] = t[r]);
}
function Wy({ transformTemplate: e }, t) {
  return qr(() => {
    const n = Po();
    return Eo(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Uy(e, t) {
  const n = e.style || {}, r = {};
  return Rd(r, n, e), Object.assign(r, Wy(e, t)), r;
}
function Hy(e, t) {
  const n = {}, r = Uy(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const qy = /* @__PURE__ */ new Set([
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
function Hr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || qy.has(e);
}
let Ad = (e) => !Hr(e);
function Zy(e) {
  e && (Ad = (t) => t.startsWith("on") ? !Hr(t) : e(t));
}
try {
  Zy(require("@emotion/is-prop-valid").default);
} catch {
}
function Ky(e, t, n) {
  const r = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (Ad(s) || n === !0 && Hr(s) || !t && !Hr(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
  return r;
}
function Gy(e, t, n, r) {
  const s = qr(() => {
    const i = Pd();
    return Ro(i, t, Ao(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    Rd(i, e.style, e), s.style = { ...i, ...s.style };
  }
  return s;
}
function Yy(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const l = (_o(n) ? Gy : Hy)(r, i, o, n), c = Ky(r, typeof n == "string", e), u = n !== Dl ? { ...c, ...l, ref: s } : {}, { children: f } = r, h = qr(() => Se(f) ? f.get() : f, [f]);
    return mf(n, {
      ...u,
      children: h
    });
  };
}
function Xy(e, t) {
  return function(r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ..._o(r) ? zy : $y,
      preloadedFeatures: e,
      useRender: Yy(s),
      createVisualElement: t,
      Component: r
    };
    return Py(o);
  };
}
const Ai = { current: null }, jd = { current: !1 };
function Jy() {
  if (jd.current = !0, !!Co)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ai.current = e.matches;
      e.addListener(t), t();
    } else
      Ai.current = !1;
}
function Qy(e, t, n) {
  for (const r in t) {
    const s = t[r], i = n[r];
    if (Se(s))
      e.addValue(r, s), process.env.NODE_ENV === "development" && is(s.version === "11.16.0", `Attempting to mix Motion versions ${s.version} with 11.16.0 may not work as expected.`);
    else if (Se(i))
      e.addValue(r, Hn(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Hn(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Ml = /* @__PURE__ */ new WeakMap(), e5 = [...Mu, be, At], t5 = (e) => e5.find(ju(e)), kl = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class n5 {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: s, blockInitialAnimation: i, visualState: o }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ho, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = Qe.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, le.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c } = o;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = us(n), this.isVariantNode = xd(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const p = f[h];
      l[h] !== void 0 && Se(p) && p.set(l[h], !1);
    }
  }
  mount(t) {
    this.current = t, Ml.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), jd.current || Jy(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ai.current, process.env.NODE_ENV !== "production" && is(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ml.delete(this.current), this.projection && this.projection.unmount(), Rt(this.notifyUpdate), Rt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = Ht.has(t), s = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && le.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      s(), i(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in hn) {
      const n = hn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: s } = n;
      if (!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)), this.features[t]) {
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : pe();
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
    for (let r = 0; r < kl.length; r++) {
      const s = kl[r];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const i = "on" + s, o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = Qy(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r === void 0 && n !== void 0 && (r = Hn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (Pu(s) || Tu(s)) ? s = parseFloat(s) : !t5(s) && At.test(n) && (s = Bu(t, n)), this.setBaseTarget(t, Se(s) ? s.get() : s)), Se(s) ? s.get() : s;
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
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const o = Xi(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (s = o[t]);
    }
    if (r && s !== void 0)
      return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Se(i) ? i : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ao()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Md extends n5 {
  constructor() {
    super(...arguments), this.KeyframeResolver = Fu;
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
    Se(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function r5(e) {
  return window.getComputedStyle(e);
}
class s5 extends Md {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = wd;
  }
  readValueFromInstance(t, n) {
    if (Ht.has(n)) {
      const r = go(n);
      return r && r.default || 0;
    } else {
      const r = r5(t), s = (Ru(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return rd(t, n);
  }
  build(t, n, r) {
    Eo(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return To(t, n, r);
  }
}
class i5 extends Md {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = pe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ht.has(n)) {
      const r = go(n);
      return r && r.default || 0;
    }
    return n = bd.has(n) ? n : lo(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return _d(t, n, r);
  }
  build(t, n, r) {
    Ro(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    Sd(t, n, r, s);
  }
  mount(t) {
    this.isSVGTag = Ao(t.tagName), super.mount(t);
  }
}
const o5 = (e, t) => _o(e) ? new i5(t) : new s5(t, {
  allowProjection: e !== Dl
}), a5 = /* @__PURE__ */ Xy({
  ...Kg,
  ...vy,
  ...iy,
  ...gy
}, o5), l5 = /* @__PURE__ */ N1(a5), nx = (e) => {
  const { disableAnimation: t = !1, onLoad: n, ...r } = e, [s, i] = Nn(!1), o = (a) => {
    i(!0), n == null || n(a);
  };
  return /* @__PURE__ */ d.jsx(
    l5.img,
    {
      initial: t ? void 0 : { opacity: 0 },
      animate: t ? void 0 : { opacity: s ? 1 : 0 },
      transition: { duration: 0.2 },
      onLoad: t ? void 0 : o,
      ...r
    }
  );
};
function rx({
  children: e,
  status: t,
  handleClose: n
}) {
  var s, i;
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
        className: `flex-shrink-0 size-6 text-white flex items-center justify-center rounded-full ${(s = r[t]) == null ? void 0 : s.color}`,
        children: /* @__PURE__ */ d.jsx(ct, { name: (i = r[t]) == null ? void 0 : i.icon, className: "size-4" })
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
          /* @__PURE__ */ d.jsx(ct, { name: "Close", className: "size-4" }),
          " "
        ]
      }
    ) }) : null
  ] });
}
function jo(e) {
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
function sx(e) {
  const { name: t, children: n } = e, r = e.label || jo(t);
  return /* @__PURE__ */ d.jsx(Yi, { name: t, children: n || /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(Di, { children: r }),
    /* @__PURE__ */ d.jsx(Bl, { "variant-width": "full" })
  ] }) });
}
function ix(e) {
  const { name: t, children: n, options: r, defaultValue: s, ...i } = e, o = e.label || jo(t);
  return /* @__PURE__ */ d.jsx(Yi, { name: t, children: n || /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(Di, { children: o }),
    /* @__PURE__ */ d.jsx(
      u1,
      {
        defaultValue: s,
        options: r,
        ...i
      }
    )
  ] }) });
}
function ox(e) {
  const { label: t, ...n } = e;
  return /* @__PURE__ */ d.jsx(Vl, { type: "submit", variant: "primary", "variant-flex": "start", ...n, children: t });
}
function ax(e) {
  const { address: t, onDisconnect: n } = e, r = e.name || "wallet-address", s = e.label || jo(r);
  function i(o) {
    n && typeof n == "function" && n(o);
  }
  return /* @__PURE__ */ d.jsxs(Yi, { name: r, children: [
    /* @__PURE__ */ d.jsxs(Di, { children: [
      s,
      " "
    ] }),
    /* @__PURE__ */ d.jsxs(bs, { subvariants: { width: "full" }, children: [
      /* @__PURE__ */ d.jsx(bs.Segment, { subvariants: { pointer: "none" }, children: /* @__PURE__ */ d.jsx(ct, { name: "Wallet", width: "20" }) }),
      /* @__PURE__ */ d.jsx(
        Bl,
        {
          type: "text",
          defaultValue: t ?? "",
          variant: "transparent",
          subvariants: { width: "full" },
          readOnly: !0
        }
      ),
      /* @__PURE__ */ d.jsx(bs.Segment, { children: /* @__PURE__ */ d.jsxs(
        Vl,
        {
          variant: "tiny",
          className: "self-center",
          onClick: i,
          children: [
            /* @__PURE__ */ d.jsx(ct, { name: "Signout", width: "16" }),
            "Disconnect"
          ]
        }
      ) })
    ] })
  ] });
}
function c5({ to: e }) {
  return /* @__PURE__ */ d.jsx("div", { className: "text-14 font-medium mt-8", children: /* @__PURE__ */ d.jsxs("p", { children: [
    "Want to learn more? Read the",
    "  ",
    /* @__PURE__ */ d.jsx(
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
function u5({
  name: e,
  description: t
}) {
  return /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col gap-4 items-center  text-center", children: [
    /* @__PURE__ */ d.jsx(
      ct,
      {
        name: "SequenceBoilerplateLogo",
        alt: "Sequence Boilerplate",
        className: "mb-2",
        width: "276"
      }
    ),
    /* @__PURE__ */ d.jsx("h1", { className: "text-32 sm:text-40 font-bold leading-tight", children: e }),
    /* @__PURE__ */ d.jsx("p", { className: "text-14 sm:font-bold", children: t })
  ] });
}
function d5(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var Mo = (e) => {
  const { present: t, children: n } = e, r = f5(t), s = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), i = ye(r.ref, h5(s));
  return typeof n == "function" || r.isPresent ? v.cloneElement(s, { ref: i }) : null;
};
Mo.displayName = "Presence";
function f5(e) {
  const [t, n] = v.useState(), r = v.useRef({}), s = v.useRef(e), i = v.useRef("none"), o = e ? "mounted" : "unmounted", [a, l] = d5(o, {
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
    const c = hr(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), Pe(() => {
    const c = r.current, u = s.current;
    if (u !== e) {
      const h = i.current, p = hr(c);
      e ? l("MOUNT") : p === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, l]), Pe(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, f = (p) => {
        const m = hr(r.current).includes(p.animationName);
        if (p.target === t && m && (l("ANIMATION_END"), !s.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, h = (p) => {
        p.target === t && (i.current = hr(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
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
function hr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function h5(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var [ds, lx] = Wl("Tooltip", [
  Qr
]), fs = Qr(), kd = "TooltipProvider", p5 = 700, ji = "tooltip.open", [m5, ko] = ds(kd), Od = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = p5,
    skipDelayDuration: r = 300,
    disableHoverableContent: s = !1,
    children: i
  } = e, [o, a] = v.useState(!0), l = v.useRef(!1), c = v.useRef(0);
  return v.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ d.jsx(
    m5,
    {
      scope: t,
      isOpenDelayed: o,
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
      disableHoverableContent: s,
      children: i
    }
  );
};
Od.displayName = kd;
var hs = "Tooltip", [v5, rr] = ds(hs), Dd = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: s = !1,
    onOpenChange: i,
    disableHoverableContent: o,
    delayDuration: a
  } = e, l = ko(hs, e.__scopeTooltip), c = fs(t), [u, f] = v.useState(null), h = Gr(), p = v.useRef(0), g = o ?? l.disableHoverableContent, m = a ?? l.delayDuration, w = v.useRef(!1), [x = !1, b] = Xs({
    prop: r,
    defaultProp: s,
    onChange: (E) => {
      E ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ji))) : l.onClose(), i == null || i(E);
    }
  }), S = v.useMemo(() => x ? w.current ? "delayed-open" : "instant-open" : "closed", [x]), _ = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, w.current = !1, b(!0);
  }, [b]), C = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, b(!1);
  }, [b]), A = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      w.current = !0, b(!0), p.current = 0;
    }, m);
  }, [m, b]);
  return v.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ d.jsx(hc, { ...c, children: /* @__PURE__ */ d.jsx(
    v5,
    {
      scope: t,
      contentId: h,
      open: x,
      stateAttribute: S,
      trigger: u,
      onTriggerChange: f,
      onTriggerEnter: v.useCallback(() => {
        l.isOpenDelayed ? A() : _();
      }, [l.isOpenDelayed, A, _]),
      onTriggerLeave: v.useCallback(() => {
        g ? C() : (window.clearTimeout(p.current), p.current = 0);
      }, [C, g]),
      onOpen: _,
      onClose: C,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
Dd.displayName = hs;
var Mi = "TooltipTrigger", Vd = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, s = rr(Mi, n), i = ko(Mi, n), o = fs(n), a = v.useRef(null), l = ye(t, a, s.onTriggerChange), c = v.useRef(!1), u = v.useRef(!1), f = v.useCallback(() => c.current = !1, []);
    return v.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ d.jsx(pc, { asChild: !0, ...o, children: /* @__PURE__ */ d.jsx(
      me.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: ae(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !u.current && !i.isPointerInTransitRef.current && (s.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: ae(e.onPointerLeave, () => {
          s.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: ae(e.onPointerDown, () => {
          c.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: ae(e.onFocus, () => {
          c.current || s.onOpen();
        }),
        onBlur: ae(e.onBlur, s.onClose),
        onClick: ae(e.onClick, s.onClose)
      }
    ) });
  }
);
Vd.displayName = Mi;
var Oo = "TooltipPortal", [g5, y5] = ds(Oo, {
  forceMount: void 0
}), Ld = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: s } = e, i = rr(Oo, t);
  return /* @__PURE__ */ d.jsx(g5, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(Mo, { present: n || i.open, children: /* @__PURE__ */ d.jsx(Hi, { asChild: !0, container: s, children: r }) }) });
};
Ld.displayName = Oo;
var pn = "TooltipContent", Nd = v.forwardRef(
  (e, t) => {
    const n = y5(pn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: s = "top", ...i } = e, o = rr(pn, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(Mo, { present: r || o.open, children: o.disableHoverableContent ? /* @__PURE__ */ d.jsx(Id, { side: s, ...i, ref: t }) : /* @__PURE__ */ d.jsx(x5, { side: s, ...i, ref: t }) });
  }
), x5 = v.forwardRef((e, t) => {
  const n = rr(pn, e.__scopeTooltip), r = ko(pn, e.__scopeTooltip), s = v.useRef(null), i = ye(t, s), [o, a] = v.useState(null), { trigger: l, onClose: c } = n, u = s.current, { onPointerInTransitChange: f } = r, h = v.useCallback(() => {
    a(null), f(!1);
  }, [f]), p = v.useCallback(
    (g, m) => {
      const w = g.currentTarget, x = { x: g.clientX, y: g.clientY }, b = S5(x, w.getBoundingClientRect()), S = C5(x, b), _ = _5(m.getBoundingClientRect()), C = P5([...S, ..._]);
      a(C), f(!0);
    },
    [f]
  );
  return v.useEffect(() => () => h(), [h]), v.useEffect(() => {
    if (l && u) {
      const g = (w) => p(w, u), m = (w) => p(w, l);
      return l.addEventListener("pointerleave", g), u.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", g), u.removeEventListener("pointerleave", m);
      };
    }
  }, [l, u, p, h]), v.useEffect(() => {
    if (o) {
      const g = (m) => {
        const w = m.target, x = { x: m.clientX, y: m.clientY }, b = (l == null ? void 0 : l.contains(w)) || (u == null ? void 0 : u.contains(w)), S = !T5(x, o);
        b ? h() : S && (h(), c());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [l, u, o, c, h]), /* @__PURE__ */ d.jsx(Id, { ...e, ref: i });
}), [w5, b5] = ds(hs, { isInside: !1 }), Id = v.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": s,
      onEscapeKeyDown: i,
      onPointerDownOutside: o,
      ...a
    } = e, l = rr(pn, n), c = fs(n), { onClose: u } = l;
    return v.useEffect(() => (document.addEventListener(ji, u), () => document.removeEventListener(ji, u)), [u]), v.useEffect(() => {
      if (l.trigger) {
        const f = (h) => {
          const p = h.target;
          p != null && p.contains(l.trigger) && u();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, u]), /* @__PURE__ */ d.jsx(
      Vi,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ d.jsxs(
          mc,
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
              /* @__PURE__ */ d.jsx($l, { children: r }),
              /* @__PURE__ */ d.jsx(w5, { scope: n, isInside: !0, children: /* @__PURE__ */ d.jsx(Im, { id: l.contentId, role: "tooltip", children: s || r }) })
            ]
          }
        )
      }
    );
  }
);
Nd.displayName = pn;
var Bd = "TooltipArrow", Fd = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, s = fs(n);
    return b5(
      Bd,
      n
    ).isInside ? null : /* @__PURE__ */ d.jsx(vc, { ...s, ...r, ref: t });
  }
);
Fd.displayName = Bd;
function S5(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), s = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, s, i)) {
    case i:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function C5(e, t, n = 5) {
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
function _5(e) {
  const { top: t, right: n, bottom: r, left: s } = e;
  return [
    { x: s, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: s, y: r }
  ];
}
function T5(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
    const a = t[i].x, l = t[i].y, c = t[o].x, u = t[o].y;
    l > r != u > r && n < (c - a) * (r - l) / (u - l) + a && (s = !s);
  }
  return s;
}
function P5(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), E5(t);
}
function E5(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], o = t[t.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const s = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], o = n[n.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) n.pop();
      else break;
    }
    n.push(s);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var R5 = Od, A5 = Dd, j5 = Vd, M5 = Ld, k5 = Nd, O5 = Fd;
function D5({ to: e }) {
  return e ? /* @__PURE__ */ d.jsx(R5, { delayDuration: 100, children: /* @__PURE__ */ d.jsxs(A5, { children: [
    /* @__PURE__ */ d.jsx(j5, { className: "github-corner", asChild: !0, children: /* @__PURE__ */ d.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ d.jsxs(
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
    /* @__PURE__ */ d.jsx(M5, { children: /* @__PURE__ */ d.jsxs(
      k5,
      {
        side: "right",
        className: "bg-white rounded-md text-black text-14 px-2 py-0.5",
        children: [
          "View source on GitHub",
          /* @__PURE__ */ d.jsx(O5, {})
        ]
      }
    ) })
  ] }) }) : null;
}
const zd = vt(null);
function V5() {
  const e = we(zd);
  if (!e)
    throw new Error(
      "useSequenceDemoKit must be used within a SequenceBoilerplateProvider"
    );
  return e;
}
function L5(e) {
  const { children: t, ...n } = Ve(
    "root",
    e
  );
  return /* @__PURE__ */ d.jsx("div", { ...n, children: t });
}
const N5 = "https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/";
function I5({
  name: e,
  description: t,
  githubUrl: n,
  docsUrl: r,
  useAuth: s,
  children: i
}) {
  return /* @__PURE__ */ d.jsx(
    zd.Provider,
    {
      value: {
        githubUrl: n,
        docsUrl: r || N5,
        name: e,
        description: t,
        useAuth: s
      },
      children: i
    }
  );
}
function cx(e) {
  const { children: t } = e;
  return /* @__PURE__ */ d.jsx(I5, { ...e, children: /* @__PURE__ */ d.jsx(B5, { children: t }) });
}
function B5({ children: e }) {
  const { name: t, description: n, githubUrl: r, docsUrl: s } = V5();
  return /* @__PURE__ */ d.jsxs(L5, { children: [
    /* @__PURE__ */ d.jsx(D5, { to: r }),
    /* @__PURE__ */ d.jsx(u5, { name: t, description: n }),
    /* @__PURE__ */ d.jsx("div", { className: "py-8", children: e }),
    /* @__PURE__ */ d.jsx(c5, { to: s })
  ] });
}
export {
  Vl as Button,
  Q5 as ButtonLink,
  $5 as Card,
  W5 as Divider,
  Yi as Field,
  X5 as FieldError,
  c5 as Footer,
  K5 as Form,
  G5 as FormErrors,
  Y5 as FormSuccess,
  D5 as GithubCorner,
  U5 as Group,
  u5 as Header,
  nx as Image,
  Bl as Input,
  ix as InputSelect,
  sx as InputText,
  Di as Label,
  J5 as Link,
  bs as SegmentedInput,
  u1 as Select,
  cx as SequenceBoilerplate,
  I5 as SequenceBoilerplateProvider,
  L5 as SequenceBoilerplateRoot,
  ax as ShowAddressWithDisconnect,
  ox as Submit,
  ct as Svg,
  rx as Toast,
  j1 as createFormObjectWithoutValidation,
  su as setStoreData,
  Z5 as useAsyncStoreData,
  V5 as useSequenceBoilerplate,
  q5 as useStoreData,
  A1 as validateAndCreateFormObjectOrThrow
};
