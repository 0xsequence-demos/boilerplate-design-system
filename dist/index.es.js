import * as f from "react";
import me, { forwardRef as qt, createContext as Pr, useContext as Ar, useLayoutEffect as Vi, useEffect as zi, useState as sn, useCallback as Bi, useSyncExternalStore as Fi, useRef as $i } from "react";
import * as En from "react-dom";
import Hi from "react-dom";
var ir = { exports: {} }, At = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function Wi() {
  if (uo) return At;
  uo = 1;
  var e = me, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, c, u) {
    var d, v = {}, g = null, m = null;
    u !== void 0 && (g = "" + u), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (d in c) r.call(c, d) && !s.hasOwnProperty(d) && (v[d] = c[d]);
    if (a && a.defaultProps) for (d in c = a.defaultProps, c) v[d] === void 0 && (v[d] = c[d]);
    return { $$typeof: t, type: a, key: g, ref: m, props: v, _owner: o.current };
  }
  return At.Fragment = n, At.jsx = i, At.jsxs = i, At;
}
var Mt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function qi() {
  return fo || (fo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), w = Symbol.iterator, p = "@@iterator";
    function x(h) {
      if (h === null || typeof h != "object")
        return null;
      var C = w && h[w] || h[p];
      return typeof C == "function" ? C : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(h) {
      {
        for (var C = arguments.length, j = new Array(C > 1 ? C - 1 : 0), I = 1; I < C; I++)
          j[I - 1] = arguments[I];
        b("error", h, j);
      }
    }
    function b(h, C, j) {
      {
        var I = _.ReactDebugCurrentFrame, ee = I.getStackAddendum();
        ee !== "" && (C += "%s", j = j.concat([ee]));
        var se = j.map(function(q) {
          return String(q);
        });
        se.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, se);
      }
    }
    var R = !1, E = !1, A = !1, O = !1, z = !1, Z;
    Z = Symbol.for("react.module.reference");
    function G(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === s || z || h === o || h === u || h === d || O || h === m || R || E || A || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === v || h.$$typeof === i || h.$$typeof === a || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === Z || h.getModuleId !== void 0));
    }
    function oe(h, C, j) {
      var I = h.displayName;
      if (I)
        return I;
      var ee = C.displayName || C.name || "";
      return ee !== "" ? j + "(" + ee + ")" : j;
    }
    function te(h) {
      return h.displayName || "Context";
    }
    function B(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case a:
            var C = h;
            return te(C) + ".Consumer";
          case i:
            var j = h;
            return te(j._context) + ".Provider";
          case c:
            return oe(h, h.render, "ForwardRef");
          case v:
            var I = h.displayName || null;
            return I !== null ? I : B(h.type) || "Memo";
          case g: {
            var ee = h, se = ee._payload, q = ee._init;
            try {
              return B(q(se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, ne = 0, $, Y, D, re, he, Se, Ke;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function Me() {
      {
        if (ne === 0) {
          $ = console.log, Y = console.info, D = console.warn, re = console.error, he = console.group, Se = console.groupCollapsed, Ke = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        ne++;
      }
    }
    function Je() {
      {
        if (ne--, ne === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, h, {
              value: $
            }),
            info: F({}, h, {
              value: Y
            }),
            warn: F({}, h, {
              value: D
            }),
            error: F({}, h, {
              value: re
            }),
            group: F({}, h, {
              value: he
            }),
            groupCollapsed: F({}, h, {
              value: Se
            }),
            groupEnd: F({}, h, {
              value: Ke
            })
          });
        }
        ne < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var je = _.ReactCurrentDispatcher, M;
    function J(h, C, j) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (ee) {
            var I = ee.stack.trim().match(/\n( *(at )?)/);
            M = I && I[1] || "";
          }
        return `
` + M + h;
      }
    }
    var ue = !1, K;
    {
      var Q = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Q();
    }
    function X(h, C) {
      if (!h || ue)
        return "";
      {
        var j = K.get(h);
        if (j !== void 0)
          return j;
      }
      var I;
      ue = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var se;
      se = je.current, je.current = null, Me();
      try {
        if (C) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (ye) {
              I = ye;
            }
            Reflect.construct(h, [], q);
          } else {
            try {
              q.call();
            } catch (ye) {
              I = ye;
            }
            h.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            I = ye;
          }
          h();
        }
      } catch (ye) {
        if (ye && I && typeof ye.stack == "string") {
          for (var W = ye.stack.split(`
`), ve = I.stack.split(`
`), le = W.length - 1, de = ve.length - 1; le >= 1 && de >= 0 && W[le] !== ve[de]; )
            de--;
          for (; le >= 1 && de >= 0; le--, de--)
            if (W[le] !== ve[de]) {
              if (le !== 1 || de !== 1)
                do
                  if (le--, de--, de < 0 || W[le] !== ve[de]) {
                    var Ee = `
` + W[le].replace(" at new ", " at ");
                    return h.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", h.displayName)), typeof h == "function" && K.set(h, Ee), Ee;
                  }
                while (le >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        ue = !1, je.current = se, Je(), Error.prepareStackTrace = ee;
      }
      var vt = h ? h.displayName || h.name : "", at = vt ? J(vt) : "";
      return typeof h == "function" && K.set(h, at), at;
    }
    function pe(h, C, j) {
      return X(h, !1);
    }
    function Re(h) {
      var C = h.prototype;
      return !!(C && C.isReactComponent);
    }
    function Ne(h, C, j) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return X(h, Re(h));
      if (typeof h == "string")
        return J(h);
      switch (h) {
        case u:
          return J("Suspense");
        case d:
          return J("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return pe(h.render);
          case v:
            return Ne(h.type, C, j);
          case g: {
            var I = h, ee = I._payload, se = I._init;
            try {
              return Ne(se(ee), C, j);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, Qe = {}, Gt = _.ReactDebugCurrentFrame;
    function Fe(h) {
      if (h) {
        var C = h._owner, j = Ne(h.type, h._source, C ? C.type : null);
        Gt.setExtraStackFrame(j);
      } else
        Gt.setExtraStackFrame(null);
    }
    function mi(h, C, j, I, ee) {
      {
        var se = Function.call.bind(ke);
        for (var q in h)
          if (se(h, q)) {
            var W = void 0;
            try {
              if (typeof h[q] != "function") {
                var ve = Error((I || "React class") + ": " + j + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              W = h[q](C, q, I, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (le) {
              W = le;
            }
            W && !(W instanceof Error) && (Fe(ee), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", j, q, typeof W), Fe(null)), W instanceof Error && !(W.message in Qe) && (Qe[W.message] = !0, Fe(ee), y("Failed %s type: %s", j, W.message), Fe(null));
          }
      }
    }
    var gi = Array.isArray;
    function $n(h) {
      return gi(h);
    }
    function xi(h) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, j = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return j;
      }
    }
    function yi(h) {
      try {
        return Qr(h), !1;
      } catch {
        return !0;
      }
    }
    function Qr(h) {
      return "" + h;
    }
    function eo(h) {
      if (yi(h))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xi(h)), Qr(h);
    }
    var Pt = _.ReactCurrentOwner, wi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, to, no, Hn;
    Hn = {};
    function _i(h) {
      if (ke.call(h, "ref")) {
        var C = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function bi(h) {
      if (ke.call(h, "key")) {
        var C = Object.getOwnPropertyDescriptor(h, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Ci(h, C) {
      if (typeof h.ref == "string" && Pt.current && C && Pt.current.stateNode !== C) {
        var j = B(Pt.current.type);
        Hn[j] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Pt.current.type), h.ref), Hn[j] = !0);
      }
    }
    function Si(h, C) {
      {
        var j = function() {
          to || (to = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        j.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function Ri(h, C) {
      {
        var j = function() {
          no || (no = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        j.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var Ei = function(h, C, j, I, ee, se, q) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: C,
        ref: j,
        props: q,
        // Record the component responsible for creating this element.
        _owner: se
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function ji(h, C, j, I, ee) {
      {
        var se, q = {}, W = null, ve = null;
        j !== void 0 && (eo(j), W = "" + j), bi(C) && (eo(C.key), W = "" + C.key), _i(C) && (ve = C.ref, Ci(C, ee));
        for (se in C)
          ke.call(C, se) && !wi.hasOwnProperty(se) && (q[se] = C[se]);
        if (h && h.defaultProps) {
          var le = h.defaultProps;
          for (se in le)
            q[se] === void 0 && (q[se] = le[se]);
        }
        if (W || ve) {
          var de = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          W && Si(q, de), ve && Ri(q, de);
        }
        return Ei(h, W, ve, ee, I, Pt.current, q);
      }
    }
    var Wn = _.ReactCurrentOwner, ro = _.ReactDebugCurrentFrame;
    function pt(h) {
      if (h) {
        var C = h._owner, j = Ne(h.type, h._source, C ? C.type : null);
        ro.setExtraStackFrame(j);
      } else
        ro.setExtraStackFrame(null);
    }
    var qn;
    qn = !1;
    function Un(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function oo() {
      {
        if (Wn.current) {
          var h = B(Wn.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function ki(h) {
      return "";
    }
    var so = {};
    function Ti(h) {
      {
        var C = oo();
        if (!C) {
          var j = typeof h == "string" ? h : h.displayName || h.name;
          j && (C = `

Check the top-level render call using <` + j + ">.");
        }
        return C;
      }
    }
    function io(h, C) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var j = Ti(C);
        if (so[j])
          return;
        so[j] = !0;
        var I = "";
        h && h._owner && h._owner !== Wn.current && (I = " It was passed a child from " + B(h._owner.type) + "."), pt(h), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, I), pt(null);
      }
    }
    function ao(h, C) {
      {
        if (typeof h != "object")
          return;
        if ($n(h))
          for (var j = 0; j < h.length; j++) {
            var I = h[j];
            Un(I) && io(I, C);
          }
        else if (Un(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var ee = x(h);
          if (typeof ee == "function" && ee !== h.entries)
            for (var se = ee.call(h), q; !(q = se.next()).done; )
              Un(q.value) && io(q.value, C);
        }
      }
    }
    function Oi(h) {
      {
        var C = h.type;
        if (C == null || typeof C == "string")
          return;
        var j;
        if (typeof C == "function")
          j = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === v))
          j = C.propTypes;
        else
          return;
        if (j) {
          var I = B(C);
          mi(j, h.props, "prop", I, h);
        } else if (C.PropTypes !== void 0 && !qn) {
          qn = !0;
          var ee = B(C);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pi(h) {
      {
        for (var C = Object.keys(h.props), j = 0; j < C.length; j++) {
          var I = C[j];
          if (I !== "children" && I !== "key") {
            pt(h), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), pt(null);
            break;
          }
        }
        h.ref !== null && (pt(h), y("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    var lo = {};
    function co(h, C, j, I, ee, se) {
      {
        var q = G(h);
        if (!q) {
          var W = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = ki();
          ve ? W += ve : W += oo();
          var le;
          h === null ? le = "null" : $n(h) ? le = "array" : h !== void 0 && h.$$typeof === t ? (le = "<" + (B(h.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : le = typeof h, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, W);
        }
        var de = ji(h, C, j, ee, se);
        if (de == null)
          return de;
        if (q) {
          var Ee = C.children;
          if (Ee !== void 0)
            if (I)
              if ($n(Ee)) {
                for (var vt = 0; vt < Ee.length; vt++)
                  ao(Ee[vt], h);
                Object.freeze && Object.freeze(Ee);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ao(Ee, h);
        }
        if (ke.call(C, "key")) {
          var at = B(h), ye = Object.keys(C).filter(function(Di) {
            return Di !== "key";
          }), Zn = ye.length > 0 ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lo[at + Zn]) {
            var Li = ye.length > 0 ? "{" + ye.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Zn, at, Li, at), lo[at + Zn] = !0;
          }
        }
        return h === r ? Pi(de) : Oi(de), de;
      }
    }
    function Ai(h, C, j) {
      return co(h, C, j, !0);
    }
    function Mi(h, C, j) {
      return co(h, C, j, !1);
    }
    var Ni = Mi, Ii = Ai;
    Mt.Fragment = r, Mt.jsx = Ni, Mt.jsxs = Ii;
  }()), Mt;
}
process.env.NODE_ENV === "production" ? ir.exports = Wi() : ir.exports = qi();
var l = ir.exports;
function Ui(e) {
  if (e)
    return Object.keys(e).reduce((t, n) => (e[n] && t.push(`${n}-${e[n]}`), t), []).join(" ");
}
function Ae(e, t, n) {
  return {
    "data-component": e,
    "data-variant": t || "initial",
    "data-subvariants": Ui(n)
  };
}
function Zi(e, t) {
  const {
    children: n,
    type: r = "button",
    variant: o,
    subvariants: s,
    ...i
  } = e;
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      ref: t,
      type: r,
      ...Ae("button", o, s),
      ...i,
      children: n
    }
  );
}
const Yi = qt(Zi);
function Vo(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Vo(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Gi() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Vo(e)) && (r && (r += " "), r += t);
  return r;
}
const Ki = ({
  asChild: e,
  mergeClass: t = !0,
  fallbackAs: n = "div",
  children: r,
  ...o
}, s) => {
  var a, c;
  const i = n;
  if (!e)
    return /* @__PURE__ */ l.jsx(i, { ...o, children: r });
  if (me.Children.count(r) > 1)
    throw new Error("Only one child allowed");
  if (me.isValidElement(r)) {
    const u = t ? Gi((a = r == null ? void 0 : r.props) == null ? void 0 : a.className, o == null ? void 0 : o.className) : (c = r == null ? void 0 : r.props) == null ? void 0 : c.className;
    return me.cloneElement(r, {
      ...o,
      ref: s,
      ...r == null ? void 0 : r.props,
      className: u
    });
  }
  return null;
}, jn = me.forwardRef(Ki), Xi = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.168 9.25V2.929h-1.5V9.25h-6.32v1.5h6.32v6.321h1.5V10.75h6.321v-1.5z",
        clipRule: "evenodd"
      }
    )
  }
), Ji = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10 1.6a6.886 6.886 0 0 0-6.886 6.885c0 .058.018.116.055.165l4.077 5.431v4.32h5.508v-4.32l4.077-5.43a.28.28 0 0 0 .055-.166A6.886 6.886 0 0 0 10 1.6m0 4.957a1.93 1.93 0 0 0-1.928 1.928h.005c.345 1.725 1.097 5.509 1.097 5.509h1.652s.752-3.784 1.097-5.509h.005A1.93 1.93 0 0 0 10 6.557m-2.135 7.437-4.2-5.608c0-1.065.863-1.829 1.928-1.829s1.928.863 1.928 1.928c0 0 .751 3.784 1.096 5.509zm4.27 0 4.2-5.608c0-1.065-.863-1.829-1.928-1.829a1.93 1.93 0 0 0-1.928 1.928s-.751 3.784-1.096 5.509z",
        clipRule: "evenodd"
      }
    )
  }
), Qi = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M13.548 10.997c-.015-1.645 1.344-2.435 1.405-2.474-.764-1.119-1.953-1.271-2.378-1.29-1.011-.102-1.974.597-2.488.597s-1.306-.581-2.145-.565c-1.104.017-2.122.641-2.69 1.63-1.147 1.987-.294 4.934.824 6.549.546.789 1.196 1.677 2.052 1.644.825-.032 1.136-.533 2.13-.533.995 0 1.276.534 2.146.517.885-.018 1.447-.807 1.99-1.598.625-.916.884-1.803.899-1.85-.02-.007-1.727-.661-1.745-2.627M11.912 6.166c.454-.55.76-1.315.677-2.077-.655.027-1.446.437-1.915.986-.42.486-.789 1.264-.689 2.011.728.057 1.473-.372 1.927-.92"
      }
    )
  }
), ea = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M5.479 9.94 4.419 11l5.53 5.53 5.53-5.53-1.06-1.06-3.72 3.72V3.47h-1.5v10.19z",
        clipRule: "evenodd"
      }
    )
  }
), ta = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m10.888 14.47 1.06 1.06L17.48 10l-5.53-5.53-1.06 1.06 3.719 3.72H4.418v1.5h10.19z",
        clipRule: "evenodd"
      }
    )
  }
), na = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5.668 7.898c-.728.93-1.792 1.705-3.25 1.705v-1.5c1.05 0 1.848-.675 2.426-1.654.582-.987.824-2.102.824-2.575h1.5c0 .473.242 1.588.825 2.575.578.979 1.375 1.654 2.425 1.654s1.848-.675 2.426-1.654c.583-.987.824-2.102.824-2.575h1.5c0 .473.242 1.588.825 2.575.577.979 1.376 1.654 2.425 1.654v1.5c-1.457 0-2.521-.776-3.25-1.705v3.273h3.25v1.5h-3.25v3.455h-1.5V12.67h-6.5v3.456h-1.5V12.67h-3.25v-1.5h3.25zm1.5 0v3.273h6.5V7.898c-.728.93-1.792 1.705-3.25 1.705s-2.521-.776-3.25-1.705",
        clipRule: "evenodd"
      }
    )
  }
), ra = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        stroke: "currentColor",
        strokeWidth: 1.5,
        d: "m4.304 10.232 4.263 4.79 7.13-11.238"
      }
    )
  }
), oa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m3.888 7.53 1.06-1.06 5.47 5.47 5.47-5.47 1.06 1.06-6.53 6.53z",
        clipRule: "evenodd"
      }
    )
  }
), sa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12.888 3.47 1.06 1.06L8.48 10l5.47 5.47-1.061 1.06L6.358 10z",
        clipRule: "evenodd"
      }
    )
  }
), ia = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m7.949 16.53-1.061-1.06 5.47-5.47-5.47-5.47 1.06-1.06L14.48 10z",
        clipRule: "evenodd"
      }
    )
  }
), aa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m16.949 12.47-1.061 1.06-5.47-5.47-5.47 5.47-1.06-1.06 6.53-6.53z",
        clipRule: "evenodd"
      }
    )
  }
), la = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m10.418 11.06 4.47 4.47 1.06-1.06L11.48 10l4.47-4.47-1.06-1.06-4.47 4.47-4.47-4.47-1.06 1.06L9.357 10l-4.47 4.47 1.06 1.06z",
        clipRule: "evenodd"
      }
    )
  }
), ca = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M9.528 7.898a2.89 2.89 0 0 1-2.882 2.899 2.89 2.89 0 0 1-2.882-2.899A2.89 2.89 0 0 1 6.646 5a2.89 2.89 0 0 1 2.882 2.898M9.053 12.275a6 6 0 0 0-2.407-.493c-2.827 0-5.121 1.885-5.146 4.217h5.708v-.01c.016-1.507.737-2.795 1.845-3.714M16.236 7.899a2.89 2.89 0 0 1-2.882 2.898 2.89 2.89 0 0 1-2.882-2.898A2.89 2.89 0 0 1 13.354 5a2.89 2.89 0 0 1 2.882 2.898"
        }
      ),
      /* @__PURE__ */ l.jsx(
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
), ua = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.597 10a1.388 1.388 0 1 1-2.776 0 1.388 1.388 0 0 1 2.776 0m5.21 0a1.388 1.388 0 1 1-2.777 0 1.388 1.388 0 0 1 2.776 0m3.82 1.388a1.388 1.388 0 1 0 0-2.776 1.388 1.388 0 0 0 0 2.776",
        clipRule: "evenodd"
      }
    )
  }
), da = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.317 17H7V9.396a1.25 1.25 0 1 1 1 0v5.028l2.733-1.024v-1.012a1.25 1.25 0 1 1 1 .015v1.69L8 15.493V17h8V8.146h-5.545V3H4v14zm9.614-9.843-4.42-4.093.055 4.093z",
        clipRule: "evenodd"
      }
    )
  }
), fa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.918 4.5h-6V6h4.5v6.5h1.5zm-1.5 9.5v3h-9V6h3V3h9v11zm-7.5 1.5v-8h6v8z",
        clipRule: "evenodd"
      }
    )
  }
), ha = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5 6.714 3.618 3.547H2.5L4.158 7.02H2.98v.69h1.494v.663H2.981v.69h1.494v1.484h1.036V9.063h1.46v-.69h-1.46v-.66l.001-.003h1.46v-.69h-1.13L7.5 3.547H6.383zm4.747 8.232v-.788a2.9 2.9 0 0 1-1.04-.249 2.04 2.04 0 0 1-.863-.727 2.2 2.2 0 0 1-.344-1.125h1.017q.03.39.236.65.21.257.535.383.216.08.46.109V10.81l-.319-.093q-.806-.236-1.28-.693-.468-.456-.469-1.209 0-.622.315-1.086.316-.465.853-.72.41-.2.9-.246v-.817h.537v.81q.547.034.981.249.525.255.827.706.301.447.315 1.027h-.978a1.04 1.04 0 0 0-.433-.774 1.47 1.47 0 0 0-.712-.264v2.253l.283.079q.321.084.659.228a2.6 2.6 0 0 1 .627.38q.288.235.466.583.18.348.18.834 0 .611-.295 1.086a2 2 0 0 1-.85.749q-.456.226-1.07.265v.79zm1.024-1.877q-.222.096-.486.128v-2.23q.323.095.584.218.29.133.457.337.17.204.17.524 0 .352-.194.615-.193.261-.531.408M9.747 7.706v2.095a5 5 0 0 1-.246-.086 2.2 2.2 0 0 1-.4-.207 1 1 0 0 1-.299-.313.85.85 0 0 1-.111-.443.94.94 0 0 1 .164-.545q.168-.242.47-.38.19-.089.422-.12m7.677 10.086h-4.9v-.897h.34a.34.34 0 0 0 .29-.186q.102-.175.137-.411.034-.24.028-.432l-.027-.779H12.5v-.896h.76l-.043-1.262q-.027-.708.273-1.183.305-.475.809-.715.503-.24 1.084-.24.519 0 .931.166.417.164.7.452.287.282.41.647.122.364.048.766l-1.01-.156q.034-.33-.11-.55a.9.9 0 0 0-.395-.33 1.31 1.31 0 0 0-1.102.024q-.266.135-.434.411-.165.277-.164.708l.048 1.261h1.649v.897H14.34l.029.752q.02.435-.116.78-.06.15-.166.276h3.337z",
        clipRule: "evenodd"
      }
    )
  }
), pa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
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
), va = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "#fff",
          fillRule: "evenodd",
          d: "M10.106 13.232a.996.996 0 0 1-1.35-.057l-1.93-1.932a.997.997 0 0 1-.058-1.349l.03-.034c.34-.403.794-.937 1.285-1.51l.303-.353.37-.43c.969-1.121 1.958-2.244 2.466-2.751 1.816-1.816 3.689-3.04 6.132-3.01a.85.85 0 0 1 .84.84c.03 2.443-1.194 4.316-3.01 6.132-.507.507-1.63 1.497-2.752 2.466a273 273 0 0 1-2.327 1.988M15.18 6.73a1.352 1.352 0 1 1-1.912-1.912 1.352 1.352 0 0 1 1.912 1.912",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "#fff",
          d: "M2.785 13.821a.4.4 0 1 0 .566.566l2.152-2.152a.4.4 0 0 0-.566-.566zM2.207 17.227a.4.4 0 0 0 .566.566l4.144-4.144a.4.4 0 1 0-.566-.566zM5.613 17.215a.4.4 0 0 1 0-.566l2.152-2.152a.4.4 0 0 1 .566.566l-2.152 2.152a.4.4 0 0 1-.566 0M2.005 9.902c1.6-1.6 3.611-2.442 5.46-2.462.032 0 .05.037.029.061a337 337 0 0 0-1.914 2.25l-.169.2-.004.002a5.9 5.9 0 0 0-3.33.06c-.068.022-.121-.062-.072-.111M10.047 14.593v-.002l.001-.002.001-.001.2-.168a309 309 0 0 0 2.25-1.914.037.037 0 0 1 .06.029c-.019 1.849-.862 3.86-2.46 5.46-.05.05-.134-.005-.112-.071a5.9 5.9 0 0 0 .06-3.331"
        }
      )
    ]
  }
), ma = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.543 5.188h6.914v11.618H6.543zM5 18.497v-15h10v15zm7-12H8v1.46h4z",
        clipRule: "evenodd"
      }
    )
  }
), ga = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M14.852 5.095c-.893-.46-1.85-.8-2.85-.994-.018-.003-.037.006-.046.025-.123.246-.26.567-.355.82a9.5 9.5 0 0 0-3.2 0 9 9 0 0 0-.36-.82.04.04 0 0 0-.046-.025c-1 .194-1.957.533-2.85.994a.04.04 0 0 0-.019.018c-1.815 3.05-2.312 6.024-2.068 8.961a.06.06 0 0 0 .018.037 11.2 11.2 0 0 0 3.496 1.987q.029.01.049-.018.406-.62.715-1.308c.012-.027 0-.059-.024-.07a7.3 7.3 0 0 1-1.092-.585c-.028-.018-.03-.062-.005-.083q.111-.094.217-.192a.04.04 0 0 1 .046-.006c2.29 1.176 4.771 1.176 7.035 0a.04.04 0 0 1 .046.006q.106.098.218.192c.025.02.023.065-.004.083q-.523.344-1.093.585c-.025.01-.036.043-.024.07q.316.687.715 1.308.018.027.05.018a11.1 11.1 0 0 0 3.5-1.987.05.05 0 0 0 .019-.036c.292-3.396-.49-6.346-2.07-8.961a.04.04 0 0 0-.018-.019m-7.174 7.19c-.69 0-1.258-.712-1.258-1.586s.558-1.587 1.258-1.587c.707 0 1.27.719 1.259 1.587 0 .874-.558 1.587-1.259 1.587m4.652 0c-.69 0-1.258-.712-1.258-1.586s.557-1.587 1.258-1.587c.707 0 1.27.719 1.258 1.587 0 .874-.551 1.587-1.258 1.587"
      }
    )
  }
), xa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.648 8.35 10.797 4.5h-.047v3.85zM9.25 4.5H5.918v11h9V9.85H9.25zM16.418 8l-5-5h-7v14h12z",
        clipRule: "evenodd"
      }
    )
  }
), ya = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M3 12.25V18h13.5v-5.75H15v4.25H4.5v-4.25zm11.28-2.47-1.06-1.06-2.72 2.72V3.25H9v8.19L6.28 8.72 5.22 9.78l4.53 4.53z",
        clipRule: "evenodd"
      }
    )
  }
), wa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "#fff",
        d: "M7.572 7.014a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.877M7.572 11.94a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.876M7.572 16.864a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876M12.89 7.014a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.877M12.89 11.94a1.438 1.438 0 1 0 0-2.877 1.438 1.438 0 0 0 0 2.876M12.89 16.864a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876"
      }
    )
  }
), _a = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        d: "m5.285 12.884 6.53-6.531 2.254 2.253-6.531 6.531-2.878.618zM14.674 8.001l-2.253-2.253 1.502-1.503L16.176 6.5z"
      }
    )
  }
), ba = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.01 6.1H4.99L10 9.68zM3.5 6.88v7.22h13V6.88L10 11.521zM2 15.6v-11h16v11z",
        clipRule: "evenodd"
      }
    )
  }
), Ca = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m6.98 5.703 7.937 7.937v-3.19h1.5v5.75h-5.75v-1.5h3.19L5.92 6.764v3.189h-1.5v-5.75h5.75v1.5z",
        clipRule: "evenodd"
      }
    )
  }
), Sa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.608 6.75h-5.19v-1.5h7.75V13h-1.5V7.81l-7.72 7.72-1.06-1.06z",
        clipRule: "evenodd"
      }
    )
  }
), Ra = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M12.42 5.797c-.93 0-1.194.413-1.194 1.322v1.5H13.7l-.244 2.432h-2.23v7.368h-2.96V11.05H6.268V8.619h1.997V7.161c0-2.453.984-3.742 3.742-3.742.592 0 1.3.046 1.724.106v2.282"
      }
    )
  }
), Ea = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.51 3C3.675 3 3 3.692 3 4.545V16.6c0 .455.36.824.805.824h6.238a.815.815 0 0 0 .806-.824v-6.006c1.175 0 2.128.937 2.128 2.093v2.335c0 1.092.9 1.978 2.011 1.978S17 16.114 17 15.022V8.24c0-.832-.336-1.631-.935-2.22L13.64 3.636l-.55.542 1.845 1.814c-.754.133-1.33.832-1.33 1.675 0 .937.712 1.697 1.591 1.697.39 0 .748-.15 1.024-.399v6.057c0 .67-.552 1.212-1.233 1.212-.68 0-1.232-.542-1.232-1.212v-2.335c0-1.579-1.302-2.859-2.908-2.859V4.545C10.849 3.692 10.173 3 9.34 3zm.805 1.485a.826.826 0 0 0-.83.821v1.54c0 .453.372.82.83.82h3.218c.459 0 .83-.367.83-.82v-1.54a.826.826 0 0 0-.83-.821zm9.882 3.962c-.404 0-.732-.35-.732-.78s.328-.78.732-.78.732.349.732.78c0 .43-.328.78-.732.78",
        clipRule: "evenodd"
      }
    )
  }
), ja = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.5 10.575v1.742a9.7 9.7 0 0 0-2.367.383 8.6 8.6 0 0 1-.355-2.125zm-2.005 3.061a8.7 8.7 0 0 1 2.005-.318v2.672c-.697-.457-1.462-1.21-2.005-2.354m-1.718-3.061c.04.93.19 1.75.416 2.472a7.2 7.2 0 0 0-1.45.852 6.47 6.47 0 0 1-1.224-3.324zm.775 3.407c-.44.199-.825.43-1.158.679a6.5 6.5 0 0 0 2.934 1.697 6.9 6.9 0 0 1-1.776-2.376m5.953-.346a8.7 8.7 0 0 0-2.005-.318v2.672c.697-.457 1.462-1.21 2.005-2.354m-2.005-1.32c.884.038 1.67.176 2.367.384.19-.617.317-1.323.355-2.125H10.5zm1.172 4.041a6.9 6.9 0 0 0 1.776-2.375c.44.199.825.43 1.158.679a6.5 6.5 0 0 1-2.934 1.696m2.135-3.31a7.2 7.2 0 0 1 1.45.852 6.47 6.47 0 0 0 1.224-3.324h-2.258c-.04.93-.19 1.75-.416 2.472m-.585-3.472H10.5V7.833a9.7 9.7 0 0 0 2.367-.384c.19.618.317 1.323.355 2.126m-.717-3.062a8.7 8.7 0 0 1-2.005.319V4.159c.697.457 1.462 1.21 2.005 2.354m.943-.345a6.9 6.9 0 0 0-1.776-2.376c1.128.3 2.135.894 2.934 1.697a6.2 6.2 0 0 1-1.158.679m.359.935a7.2 7.2 0 0 0 1.45-.852 6.47 6.47 0 0 1 1.224 3.324h-2.258c-.04-.93-.19-1.75-.416-2.472M9.5 6.832V4.159c-.697.457-1.462 1.21-2.005 2.354.588.17 1.254.284 2.005.319m0 1.001a9.7 9.7 0 0 1-2.367-.384 8.6 8.6 0 0 0-.355 2.126H9.5zm-3.307-.73a9.6 9.6 0 0 0-.416 2.472H3.52A6.47 6.47 0 0 1 4.743 6.25c.417.317.899.608 1.45.852m.36-.935c-.442-.2-.826-.43-1.16-.68a6.5 6.5 0 0 1 2.935-1.696 6.9 6.9 0 0 0-1.776 2.376M10 18.075a8 8 0 1 0 0-16 8 8 0 0 0 0 16",
        clipRule: "evenodd"
      }
    )
  }
), ka = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.603 7.94c-.67-.644-1.517-.975-2.466-.975-1.678 0-3.1 1.143-3.608 2.687-.13.39-.204.807-.204 1.24 0 .434.07.851.204 1.241.509 1.544 1.93 2.687 3.608 2.687.868 0 1.603-.239 2.182-.629a3.02 3.02 0 0 0 1.287-1.939h-3.47V9.81h6.06c.063.396.101.802.101 1.23 0 1.977-.697 3.645-1.909 4.777-1.061.992-2.514 1.577-4.251 1.577-2.515 0-4.686-1.463-5.742-3.586a6.48 6.48 0 0 1 0-5.829c1.056-2.123 3.227-3.585 5.742-3.585 1.737 0 3.19.644 4.3 1.695z",
        clipRule: "evenodd"
      }
    )
  }
), Ta = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "#fff",
        d: "M3 4.6A1.6 1.6 0 0 1 4.6 3H7a1.6 1.6 0 0 1 1.6 1.6V7A1.6 1.6 0 0 1 7 8.6H4.6A1.6 1.6 0 0 1 3 7zM3 13a1.6 1.6 0 0 1 1.6-1.6H7A1.6 1.6 0 0 1 8.6 13v2.4A1.6 1.6 0 0 1 7 17H4.6A1.6 1.6 0 0 1 3 15.4zM11.4 4.6A1.6 1.6 0 0 1 13 3h2.4A1.6 1.6 0 0 1 17 4.6V7a1.6 1.6 0 0 1-1.6 1.6H13A1.6 1.6 0 0 1 11.4 7zM11.4 13a1.6 1.6 0 0 1 1.6-1.6h2.4A1.6 1.6 0 0 1 17 13v2.4a1.6 1.6 0 0 1-1.6 1.6H13a1.6 1.6 0 0 1-1.6-1.6z"
      }
    )
  }
), Oa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.918 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m1.5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-9 1.469v.133h1.48v-.133q.005-.383.098-.645a1.3 1.3 0 0 1 .293-.46q.2-.2.508-.384.367-.218.637-.488.27-.273.418-.625.152-.356.152-.812 0-.684-.34-1.168a2.13 2.13 0 0 0-.937-.739q-.598-.257-1.375-.257-.706 0-1.293.254-.585.25-.941.761-.356.508-.375 1.29h1.593q.012-.321.157-.536a.9.9 0 0 1 .37-.328 1.06 1.06 0 0 1 .481-.113q.262 0 .477.11a.86.86 0 0 1 .347.312.86.86 0 0 1 .13.472q0 .255-.114.461-.113.204-.305.371a4 4 0 0 1-.433.325 2.7 2.7 0 0 0-.555.453q-.23.25-.352.656-.117.406-.12 1.09m.106 2.36a.92.92 0 0 0 .668.273q.25 0 .46-.125.212-.13.34-.34a.897.897 0 0 0-.149-1.129.9.9 0 0 0-.651-.274.92.92 0 0 0-.668.274.88.88 0 0 0-.27.656.9.9 0 0 0 .27.664",
        clipRule: "evenodd"
      }
    )
  }
), Pa = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.425 5.189q-.7-.091-1.425-.092c-3.564 0-6.716 1.703-8.445 4.296l-.277.416.277.416c1.141 1.712 2.902 3.035 4.991 3.737l.744-1.336c-1.727-.522-3.19-1.527-4.187-2.817C4.59 7.887 7.11 6.597 10 6.597q.318 0 .63.02z"
        }
      ),
      /* @__PURE__ */ l.jsx("path", { fill: "currentColor", d: "M10.179 7.43a2.385 2.385 0 0 0-2.105 3.786z" }),
      /* @__PURE__ */ l.jsx(
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
), Aa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M11.506 14.123v-3.574a.44.44 0 0 0-.463-.463H8.811a.44.44 0 0 0-.469.463v3.574zm-6.996.164V10.14l5.039-4.23q.381-.318.756 0l5.033 4.23v4.148q0 .675-.416 1.06-.411.393-1.113.393H6.045q-.71 0-1.125-.392-.41-.387-.41-1.06M2.494 8.955q0-.346.305-.603l6.105-5.127q.47-.393 1.026-.393.562 0 1.025.393l6.1 5.12q.299.253.299.622a.66.66 0 0 1-.217.521.78.78 0 0 1-.545.194.75.75 0 0 1-.317-.07 1.5 1.5 0 0 1-.287-.188l-5.73-4.81a.5.5 0 0 0-.328-.135.5.5 0 0 0-.323.134l-5.742 4.81a1.5 1.5 0 0 1-.287.188.75.75 0 0 1-.316.07q-.352 0-.563-.204a.72.72 0 0 1-.205-.522M13.41 5.773V4.391q0-.205.123-.328a.46.46 0 0 1 .334-.124h1.078q.205 0 .328.123a.44.44 0 0 1 .123.329v3.04z"
      }
    )
  }
), Ma = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx("path", { stroke: "#000", d: "M2.5 2.5h3.571v3.571H2.5z" }),
      /* @__PURE__ */ l.jsx("path", { fill: "currentColor", stroke: "#000", d: "M8.214 2.5h3.571v3.571H8.214z" }),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          stroke: "#000",
          d: "M13.929 2.5H17.5v3.571h-3.571zM2.5 8.214h3.571v3.571H2.5zM8.214 8.214h3.571v3.571H8.214z"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "currentColor",
          stroke: "#000",
          d: "M13.929 8.214H17.5v3.571h-3.571zM2.5 13.929h3.571V17.5H2.5z"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          stroke: "#000",
          d: "M8.214 13.929h3.571V17.5H8.214zM13.929 13.929H17.5V17.5h-3.571z"
        }
      )
    ]
  }
), Na = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M9.214 1.588q.923 0 1.73.349a4.4 4.4 0 0 1 1.428.957q.616.608.957 1.421.349.807.349 1.73 0 1.388-.827 2.516-.82 1.12-2.359 1.77l1.695 1.702q.144.15.144.335a.43.43 0 0 1-.137.328l-1.743 1.737 1.251 1.237a.46.46 0 0 1 .137.328.44.44 0 0 1-.137.335l-2.16 2.16a.4.4 0 0 1-.321.123.45.45 0 0 1-.294-.123l-1.183-1.155a.8.8 0 0 1-.164-.24.8.8 0 0 1-.048-.273v-6.63a4.5 4.5 0 0 1-1.483-.971 4.47 4.47 0 0 1-1.306-3.179 4.4 4.4 0 0 1 1.299-3.158q.615-.616 1.422-.957a4.5 4.5 0 0 1 1.75-.342m0 4.15q.491 0 .848-.35.355-.354.355-.854 0-.492-.355-.847a1.16 1.16 0 0 0-.848-.356 1.15 1.15 0 0 0-.855.356 1.15 1.15 0 0 0-.348.847q0 .5.348.855.356.348.855.348"
      }
    )
  }
), Ia = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx(
        "path",
        {
          stroke: "#000",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M10.906 8.966c1.459 1.316 1.459 3.45 0 4.765l-2.53 2.282c-1.459 1.316-3.824 1.316-5.282 0-1.459-1.315-1.459-3.449 0-4.764l1.265-1.142"
        }
      ),
      /* @__PURE__ */ l.jsx(
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
), La = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "#fff",
        d: "M2 6a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2M2 14a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2"
      }
    )
  }
), Da = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m17 7.862-1.78-4.45H4.78L3 7.862v.08c0 .34.099.841.407 1.27.113.155.25.298.417.419v6.957h12.353V9.631a1.9 1.9 0 0 0 .416-.42A2.25 2.25 0 0 0 17 7.941zm-1.647 2.105a2.5 2.5 0 0 1-.412.033c-.789 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782a2.5 2.5 0 0 1-.412-.033v3.432h10.706zM13.706 7.94c0 .209.066.53.252.789.17.237.459.446.983.446.525 0 .813-.209.984-.446.165-.23.235-.51.249-.716l-.03-.073zm.956-3.706 1.153 2.883h-2.19l-.641-2.883zm-1.881 2.883-.64-2.883h-1.73v2.883zm-5.562 0 .64-2.883h1.73v2.883zm-.203-2.883-.64 2.883H4.185l1.153-2.883zm-3.19 3.78.03-.074h2.438c0 .209-.066.53-.252.789-.17.237-.459.446-.983.446-.525 0-.813-.209-.984-.446a1.43 1.43 0 0 1-.249-.716m5.51.715a1.43 1.43 0 0 0 .252-.789h-2.47c0 .209.066.53.251.789.171.237.46.446.984.446.525 0 .813-.209.983-.446m3.294 0c.186-.258.252-.58.252-.789h-2.47c0 .209.066.53.252.789.17.237.458.446.983.446s.813-.209.983-.446",
        clipRule: "evenodd"
      }
    )
  }
), Va = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.868 6.582h11.1v1.5h-11.1zm0 3.377h11.1v1.5h-11.1zm11.1 3.377h-11.1v1.5h11.1z",
        clipRule: "evenodd"
      }
    )
  }
), za = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M3.362 5.144 7.874 2.54l4.089 7.083-4.512 2.605z"
        }
      ),
      /* @__PURE__ */ l.jsx("path", { stroke: "#000", strokeWidth: 1.5, d: "m9.92 6.08 7.332-4.233" }),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M3.977 15.387 2 13.41h13.615l-.723 1.977h-1.346c-.33 0-.989.198-.989.989s.66.988.989.988h.597v1.483h-8.83v-1.483H6.41c.79 0 .988-.659.988-.988 0-.33-.198-.989-.988-.989z"
        }
      )
    ]
  }
), Ba = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.918 14.994v.752q-.519.36-1.08.618A7.003 7.003 0 0 1 6.968 5.05a7 7 0 0 1 8.95-.796v.752a4.979 4.979 0 0 0-3.293 1.459 5 5 0 0 0 3.293 8.53m-4.353-.398q.495.493 1.059.859a5.5 5.5 0 1 1 0-10.91q-.564.366-1.06.859a6.5 6.5 0 0 0 0 9.192",
        clipRule: "evenodd"
      }
    )
  }
), Fa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13.283 6.175a4.643 4.643 0 1 0-6.566 6.567l-.708.707a5.644 5.644 0 1 1 7.982 0l-.708-.707a4.644 4.644 0 0 0 0-6.567m-5.097 1.47a2.565 2.565 0 0 1 3.628 3.627l.707.707a3.565 3.565 0 1 0-5.042 0l.707-.707a2.565 2.565 0 0 1 0-3.627M10 10.959a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 .667-1.5 6h3z",
        clipRule: "evenodd"
      }
    )
  }
), $a = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        stroke: "#000",
        strokeWidth: 1.5,
        d: "M16 6.5 10 3 4 6.5m12 0v7L10 17m6-10.5L10 10m0 7-6-3.5v-7M10 17v-7M4 6.5l6 3.5"
      }
    )
  }
), Ha = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.899 5.261a1 1 0 0 1 1 1v.729H2.102v2.055h15.797v4.694a1 1 0 0 1-1 1H3.102a1 1 0 0 1-1-1V6.261a1 1 0 0 1 1-1zm-7.13 7.284h7v1h-7z",
        clipRule: "evenodd"
      }
    )
  }
), Wa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "#fff",
        d: "M11.882 15.626a2.896 2.896 0 0 0 .241-3.821l3.896-5.009.957.957L18 6.73 13.27 2l-1.024 1.024.958.957-5.009 3.896a2.896 2.896 0 0 0-3.82.242zM3.536 15.44C2.716 16.26 2.17 17.489 2 18c.512-.17 1.74-.717 2.56-1.536l3.129-3.13-1.024-1.023z"
      }
    )
  }
), qa = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx("circle", { cx: 10, cy: 7.361, r: 3.361, fill: "currentColor" }),
      /* @__PURE__ */ l.jsx(
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
), Ua = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.418 3.6h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5V2.1h4m0 12h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5v-5.5h4m8-9h2.5v2.5h-2.5zm4-1.5h-5.5v5.5h5.5V2.1m-1.5 12h-2.5v2.5h2.5zm0-1.5h1.5v5.5h-5.5v-5.5h4M9.668 2.1v7.25h-7.25v1.5h8.75V2.1zm1.5 10.5v5.5h-1.5v-5.5zm1.75-1.75h5.5v-1.5h-5.5z",
        clipRule: "evenodd"
      }
    )
  }
), Za = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.668 11.418v5.75h13.5v-5.75h-1.5v4.25h-10.5v-4.25zm11.28-2.47-1.06-1.06-2.72 2.72v-8.19h-1.5v8.19l-2.72-2.72-1.06 1.06 4.53 4.53z",
        clipRule: "evenodd"
      }
    )
  }
), Ya = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2 10.046 3.975 3l1.864 2.016a7.458 7.458 0 1 1-2.586 7.787l1.762-.354.03.099a5.666 5.666 0 1 0 2.017-6.211l2.117 2.289z",
        clipRule: "evenodd"
      }
    )
  }
), Ga = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.365 2.635a2.17 2.17 0 1 1-3.068 3.068 2.17 2.17 0 0 1 3.068-3.068M6.788 14.008a2.17 2.17 0 1 1-3.067 3.067 2.17 2.17 0 0 1 3.067-3.067"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          stroke: "#000",
          strokeWidth: 1.5,
          d: "M10.736 4.015h-2.08c-2.763 0-3.498 1.274-3.498 3.498v4.44"
        }
      )
    ]
  }
), Ka = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2.418 7h1.5V3.5h3.5V2h-5zm11-5v1.5h3.5V7h1.5V2zm-9.5 11h-1.5v5h5v-1.5h-3.5zm9.5 5v-1.5h3.5V13h1.5v5zm-3.75-4v-3.25h-3.25v-1.5h3.25V6h1.5v3.25h3.25v1.5h-3.25V14z",
        clipRule: "evenodd"
      }
    )
  }
), Xa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13.918 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-.677 4.383a5.5 5.5 0 1 1 1.06-1.06l2.648 2.647-1.061 1.06z",
        clipRule: "evenodd"
      }
    )
  }
), Ja = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.529 15.925 9.419 11 4.493 8.89 2.418 8l2.142-.714 11.08-3.693L17.418 3l-.593 1.779-3.693 11.08L12.418 18zm-1.71-6.386L6.635 8.175l6.82-2.273zm1.06 1.061 1.364 3.183 2.273-6.82z",
        clipRule: "evenodd"
      }
    )
  }
), Qa = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2.418 6.374v7.252c0 1.48 1.218 2.68 2.72 2.68h10.56c1.503 0 2.72-1.2 2.72-2.68V6.374c0-1.48-1.217-2.68-2.72-2.68H5.138c-1.502 0-2.72 1.2-2.72 2.68m4 .473a.794.794 0 0 0-.8-.789c-.442 0-.8.353-.8.789 0 .435.359.788.8.788s.8-.353.8-.788m-.8 5.513c.442 0 .8.353.8.788a.794.794 0 0 1-.8.789.794.794 0 0 1-.8-.789c0-.435.359-.788.8-.788m10.4-2.36a.794.794 0 0 0-.8-.788c-.441 0-.8.353-.8.788s.359.788.8.788.8-.353.8-.788m-7.2-3.942h6.4c.442 0 .8.353.8.789a.794.794 0 0 1-.8.788h-6.4a.794.794 0 0 1-.8-.788c0-.436.359-.789.8-.789m6.4 6.302h-6.4c-.441 0-.8.353-.8.788s.359.789.8.789h6.4c.442 0 .8-.353.8-.789a.794.794 0 0 0-.8-.788m-9.6-3.148h6.4c.442 0 .8.353.8.788a.794.794 0 0 1-.8.788h-6.4a.794.794 0 0 1-.8-.788c0-.435.359-.788.8-.788",
        clipRule: "evenodd"
      }
    )
  }
), el = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.775 5.204a5.5 5.5 0 0 0-1.341-.537L11 2.5H9l-.443 2.214c-.444.128-.866.31-1.257.54L5.404 3.99 3.99 5.404l1.283 1.925q-.32.571-.497 1.216L2.5 9v2l2.276.455q.178.645.497 1.216L3.99 14.596l1.414 1.414L7.3 14.746c.391.23.813.412 1.257.54L9 17.5h2l.434-2.167c.474-.12.925-.302 1.341-.537l1.821 1.214 1.414-1.414-1.195-1.793c.253-.427.45-.891.581-1.382L17.5 11V9l-2.104-.42a5.5 5.5 0 0 0-.581-1.383l1.195-1.793-1.414-1.414zm-.59 2.692a2.976 2.976 0 1 0-4.208 4.208 2.976 2.976 0 0 0 4.209-4.208",
        clipRule: "evenodd"
      }
    )
  }
), tl = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M4 6.234a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V10.5L14 9v5.734a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.769l-1.516 1.5z"
        }
      ),
      /* @__PURE__ */ l.jsx("path", { stroke: "#000", strokeWidth: 1.25, d: "M11 3h5v5" }),
      /* @__PURE__ */ l.jsx("path", { stroke: "#000", strokeWidth: 1.5, d: "m16 3-8 8" })
    ]
  }
), nl = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.668 3.959h-10.5v6.75c0 1.653.47 3.021 1.358 4.141.877 1.106 2.123 1.92 3.598 2.549l.294.125.295-.125c1.474-.63 2.72-1.443 3.598-2.549.888-1.12 1.357-2.488 1.357-4.141zm-9 6.75v-5.25h3.75v10.43c-1.191-.544-2.097-1.19-2.717-1.971-.658-.83-1.033-1.862-1.033-3.209",
        clipRule: "evenodd"
      }
    )
  }
), rl = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.418 3.25h-5.75v13.5h5.75v-1.5h-4.25V4.75h4.25zm4.53 11.28-1.06-1.06 2.72-2.72h-8.19v-1.5h8.19l-2.72-2.72 1.06-1.06L18.48 10z",
        clipRule: "evenodd"
      }
    )
  }
), ol = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.539 10.75H4.298v-1.5h12.24z",
        clipRule: "evenodd"
      }
    )
  }
), sl = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M4.633 10.75a6 6 0 0 1 .008-1.5H2.202v1.5zM5.814 6.456A5.9 5.9 0 0 1 6.88 5.401L5.139 3.66l-1.06 1.06zM4.078 15.28l1.711-1.711c.306.398.662.755 1.058 1.063L5.14 16.34zM9.668 15.802v2.414h1.5V15.8a5.9 5.9 0 0 1-1.5.003M13.98 14.623l1.718 1.717 1.06-1.06-1.721-1.723c-.305.4-.66.758-1.056 1.066M16.184 10.75h2.45v-1.5h-2.457a6 6 0 0 1 .007 1.5M15.012 6.467l1.747-1.747-1.061-1.06-1.75 1.75c.399.305.756.66 1.064 1.057M11.168 4.258V1.784h-1.5v2.472a5.9 5.9 0 0 1 1.5.002"
        }
      ),
      /* @__PURE__ */ l.jsx(
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
), il = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.668 4.75h-5.25v-1.5h6.75V12h2.25l-1.125 1.5-.937 1.25-.938 1.25-.937-1.25-.938-1.25-1.125-1.5h2.25zM5.418 4l.938 1.25.937 1.25L8.418 8h-2.25v7.25h5.25v1.5h-6.75V8h-2.25l1.125-1.5.938-1.25z",
        clipRule: "evenodd"
      }
    )
  }
), al = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12.28 2.856-6.71 8.887h4.134l-1.424 6.2 6.887-8.71h-4.322z",
        clipRule: "evenodd"
      }
    )
  }
), ll = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M7.271 3.521c-.376.377-.521.902-.521 1.479H3v1h14V5h-3.75c0-.577-.145-1.102-.521-1.479C12.352 3.145 11.827 3 11.25 3h-2.5c-.577 0-1.102.145-1.479.521m.708.708c-.124.123-.229.348-.229.771h4.5c0-.423-.105-.648-.229-.771-.123-.124-.348-.229-.771-.229h-2.5c-.423 0-.648.105-.771.229M5.5 18l-1-11h11l-1 11zm7.58-10.006a.5.5 0 0 1 .47.53l-.489 8.022a.5.5 0 0 1-.998-.061l.488-8.022a.5.5 0 0 1 .53-.47m-6.629.53a.5.5 0 0 1 .998-.061l.488 8.022a.5.5 0 0 1-.998.06zM10 7.993a.5.5 0 0 1 .5.5v8.021a.5.5 0 0 1-1 0v-8.02a.5.5 0 0 1 .5-.5",
        clipRule: "evenodd"
      }
    )
  }
), cl = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m4.662 2.789-.985 2.515v10.281h3.5v1.86h1.97l1.859-1.86h2.844l3.827-3.828V2.79zM16.365 11.1l-2.188 2.187h-3.5l-1.86 1.86v-1.86H5.866V4.101h10.5zm-2.188-4.484v3.828h-1.312V6.617zm-3.5 0v3.828H9.365V6.617z",
        clipRule: "evenodd"
      }
    )
  }
), ul = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M4 11.445v5.11h12v-5.11h-1.333v3.777H5.333v-3.777zM5.973 7.47l.943.943 2.418-2.417v7.28h1.333v-7.28l2.417 2.417.943-.943L10 3.444z",
        clipRule: "evenodd"
      }
    )
  }
), dl = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M3.103 10.154C4.59 12.077 7.11 13.366 10 13.366s5.41-1.29 6.897-3.212C15.41 8.232 12.89 6.942 10 6.942s-5.41 1.29-6.897 3.212m-1.548-.416C3.285 7.145 6.436 5.442 10 5.442s6.716 1.703 8.445 4.296l.277.416-.277.416c-1.73 2.594-4.881 4.296-8.445 4.296s-6.716-1.702-8.445-4.296l-.277-.416z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M12.386 10.154a2.386 2.386 0 1 1-4.772 0 2.386 2.386 0 0 1 4.772 0"
        }
      )
    ]
  }
), fl = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M5 6.05c0 .443.39.802.87.802H17V16H5.495C4.117 16 3 14.97 3 13.698V6.302C3 5.031 4.117 4 5.495 4H14.5v1.247H5.87c-.48 0-.87.36-.87.802m7 5.45a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0",
        clipRule: "evenodd"
      }
    )
  }
), hl = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 480 332",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "#fff",
        d: "M126.613 93.984c62.622-61.312 164.152-61.312 226.775 0l7.536 7.379a7.735 7.735 0 0 1 0 11.102l-25.781 25.242a4.07 4.07 0 0 1-5.67 0l-10.371-10.154c-43.687-42.773-114.517-42.773-158.204 0l-11.107 10.874a4.07 4.07 0 0 1-5.669 0l-25.781-25.242a7.733 7.733 0 0 1 0-11.102zm280.093 52.204 22.946 22.465a7.735 7.735 0 0 1 0 11.102L326.189 281.056c-3.131 3.065-8.208 3.065-11.339 0l-73.432-71.896a2.034 2.034 0 0 0-2.835 0l-73.43 71.896c-3.131 3.065-8.208 3.065-11.339 0L50.348 179.754a7.735 7.735 0 0 1 0-11.102l22.946-22.466c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897a2.033 2.033 0 0 0 2.834 0l73.429-71.897c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897a2.034 2.034 0 0 0 2.835 0l73.431-71.895c3.132-3.066 8.208-3.066 11.339 0"
      }
    )
  }
), pl = (e) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    role: "img",
    ...e,
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M18 16.427 10 2.57 2 16.427zm-7.322-4.333v-5.77H9.216v5.77zm-.731 3.087a1.089 1.089 0 1 0 0-2.178 1.089 1.089 0 0 0 0 2.178",
        clipRule: "evenodd"
      }
    )
  }
), vl = (e) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 276 28",
    role: "img",
    ...e,
    children: [
      /* @__PURE__ */ l.jsxs("g", { clipPath: "url(#sequence-boilerplate-logo_svg__a)", children: [
        /* @__PURE__ */ l.jsx(
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
            children: /* @__PURE__ */ l.jsx("path", { fill: "#fff", d: "M35.03 0H0v28h35.03z" })
          }
        ),
        /* @__PURE__ */ l.jsxs("g", { mask: "url(#sequence-boilerplate-logo_svg__b)", children: [
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "#111",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__c)",
              d: "M0 5.95v16.1A5.953 5.953 0 0 0 5.955 28h23.12a5.953 5.953 0 0 0 5.956-5.95V5.95A5.953 5.953 0 0 0 29.075 0H5.955A5.953 5.953 0 0 0 0 5.95"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__d)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__e)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__f)",
              d: "M8.758 7a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 8.758 7"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__g)",
              d: "M8.758 20.989a1.75 1.75 0 1 0-3.502.001 1.75 1.75 0 0 0 3.502-.001"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__h)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__i)",
              d: "M29.776 14a1.75 1.75 0 1 0-3.502.002A1.75 1.75 0 0 0 29.776 14"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__j)",
              d: "M28.025 5.25H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__k)",
              d: "M28.025 19.239H14.012a1.75 1.75 0 1 0 0 3.5h14.013a1.75 1.75 0 1 0 0-3.5"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              fill: "url(#sequence-boilerplate-logo_svg__l)",
              d: "M21.018 12.25H7.006a1.75 1.75 0 1 0 0 3.5h14.012a1.75 1.75 0 1 0 0-3.5"
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            fill: "#fff",
            d: "M49.65 23.282c3.413 0 5.82-1.94 5.82-4.911.023-2.563-1.523-4.048-4.101-4.982l-1.768-.647c-1.792-.647-2.652-1.197-2.652-2.443s1.277-1.964 2.75-1.964c1.375 0 2.431.551 3.315 1.581l1.989-1.892C53.726 6.514 51.885 5.7 49.724 5.7c-3.241 0-5.67 1.82-5.67 4.791 0 2.324 1.35 3.808 4.124 4.791l1.915.67c1.67.6 2.48 1.366 2.48 2.588 0 1.268-1.178 2.108-2.823 2.108-1.695 0-3.144-.815-4.051-2.18l-2.26 1.748c1.03 1.843 3.411 3.066 6.211 3.066m13.638-.049c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.663 1.054-1.768 1.82-3.51 1.82-2.063 0-3.66-1.268-3.782-3.257h9.65c.023-.383.023-.599.023-.862 0-3.856-2.675-5.94-5.917-5.94-3.732 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.634-7.569c.392-1.772 1.94-2.658 3.535-2.658 1.571 0 2.996.934 3.29 2.658zM83.236 28V11.017h-2.701v1.606c-.687-.959-2.16-1.845-3.929-1.845-3.364 0-5.917 2.803-5.917 6.228s2.553 6.227 5.917 6.227c1.768 0 3.242-.885 3.929-1.844V28zm-6.138-7.163c-2.161 0-3.659-1.676-3.659-3.832s1.498-3.833 3.659-3.833 3.658 1.677 3.658 3.833-1.498 3.832-3.658 3.832m13.127 2.396c1.57 0 2.872-.646 3.585-1.868v1.628h2.7V11.017h-2.7v5.893c0 2.587-1.228 3.928-2.996 3.928-1.57 0-2.455-1.174-2.455-3.09v-6.73h-2.7v7.162c0 3.065 1.742 5.054 4.566 5.054m14.733 0c2.579 0 4.493-1.054 5.598-2.778l-2.062-1.437c-.664 1.054-1.769 1.82-3.511 1.82-2.062 0-3.658-1.268-3.781-3.257h9.649c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.917-5.94-3.732 0-6.41 2.706-6.41 6.227 0 3.664 2.677 6.227 6.41 6.227m-3.635-7.569c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.995.934 3.29 2.658zm11.591 7.33h2.702V17.1c0-2.587 1.374-3.929 3.167-3.929 1.571 0 2.553 1.126 2.553 3.042v6.778h2.701v-7.21c0-3.041-1.842-5.006-4.69-5.006-1.596 0-2.971.647-3.731 1.869v-1.628h-2.702zm19.439.24c2.554 0 4.666-1.294 5.721-3.306l-2.357-1.245c-.59 1.222-1.792 2.107-3.364 2.107-2.185 0-3.732-1.653-3.732-3.784 0-2.132 1.547-3.785 3.732-3.785 1.571 0 2.774.886 3.364 2.108l2.357-1.245c-1.055-2.012-3.167-3.306-5.721-3.306-3.681 0-6.481 2.683-6.481 6.228s2.8 6.227 6.481 6.227m13.003 0c2.579 0 4.493-1.055 5.598-2.779l-2.062-1.437c-.663 1.054-1.768 1.82-3.511 1.82-2.063 0-3.658-1.268-3.782-3.257h9.651c.024-.383.024-.599.024-.862 0-3.856-2.676-5.94-5.918-5.94-3.733 0-6.409 2.706-6.409 6.227 0 3.664 2.676 6.227 6.409 6.227m-3.635-7.57c.393-1.772 1.94-2.658 3.536-2.658 1.571 0 2.996.934 3.29 2.658z"
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          fill: "#fff",
          fillOpacity: 0.6,
          d: "M159.371 22.5V5.385h5.905q2.242 0 3.664 1.374 1.447 1.374 1.447 3.351 0 2.121-1.591 3.302 2.748 1.134 2.748 4.074 0 2.146-1.567 3.592-1.543 1.422-3.953 1.422zm2.82-2.58h3.76q1.35 0 2.097-.674.748-.675.748-1.784 0-1.085-.748-1.76-.747-.699-2.097-.699h-3.76zm0-7.327h2.941q1.133 0 1.808-.651.675-.65.675-1.663 0-.965-.675-1.64t-1.808-.674h-2.941zm21.281 8.34q-1.808 1.808-4.483 1.808-2.676 0-4.508-1.808-1.808-1.832-1.808-4.46 0-2.626 1.808-4.435 1.832-1.831 4.508-1.832 2.675 0 4.483 1.832 1.833 1.809 1.832 4.436t-1.832 4.46m-4.483-.65q1.566 0 2.579-1.085 1.036-1.11 1.036-2.724 0-1.616-1.036-2.7-1.013-1.11-2.579-1.109-1.592 0-2.628 1.109-1.012 1.085-1.012 2.7 0 1.614 1.012 2.724 1.036 1.084 2.628 1.084m9.585-12.463q-.723 0-1.254-.506a1.74 1.74 0 0 1-.53-1.278q0-.723.53-1.23.531-.53 1.254-.53.747 0 1.253.53.507.507.506 1.23 0 .747-.506 1.278a1.7 1.7 0 0 1-1.253.506m-1.326 14.68V10.448h2.651V22.5zm5.491 0V4.421h2.652V22.5zm10.939.241q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.662 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976M211.49 22.5V10.448h2.652v2.145a3.2 3.2 0 0 1 1.229-1.64q.917-.626 1.953-.626.627 0 1.036.096v2.724a3.8 3.8 0 0 0-1.325-.217q-1.206 0-2.049.989-.844.963-.844 2.7V22.5zm11.086 5.038h-2.652v-17.09h2.652v1.614q.554-.771 1.591-1.301a4.87 4.87 0 0 1 2.29-.555q2.459 0 4.122 1.832 1.687 1.832 1.687 4.436t-1.687 4.435q-1.663 1.832-4.122 1.832-1.23 0-2.29-.53-1.037-.555-1.591-1.326zm3.399-7.207q1.566 0 2.579-1.11 1.012-1.107 1.012-2.747t-1.012-2.748q-1.013-1.11-2.579-1.11-1.592 0-2.604 1.11-1.012 1.108-1.012 2.748t1.012 2.748q1.013 1.108 2.604 1.108m8.268 2.169V4.421h2.652V22.5zm10.433.241q-2.459 0-4.146-1.832-1.663-1.832-1.663-4.435 0-2.604 1.663-4.436 1.688-1.831 4.146-1.832 1.23 0 2.266.555 1.036.53 1.591 1.302v-1.616h2.652V22.5h-2.652v-1.615q-.555.771-1.591 1.326a4.9 4.9 0 0 1-2.266.53m-2.097-3.52q1.013 1.11 2.579 1.11t2.58-1.11q1.012-1.107 1.012-2.747t-1.012-2.748q-1.012-1.11-2.58-1.11-1.566 0-2.579 1.11-1.012 1.108-1.012 2.748t1.012 2.748m16.705 3.4q-1.831 0-2.989-1.013-1.133-1.035-1.133-2.989v-5.81h-2.506v-2.361h2.506V7.097h2.652v3.35h3.447v2.363h-3.447v5.375q0 1.11.482 1.591.483.458 1.543.458.867 0 1.422-.24v2.361q-.867.265-1.977.265m9.051.12q-2.748 0-4.531-1.76-1.76-1.76-1.76-4.507 0-2.675 1.784-4.46 1.784-1.808 4.507-1.808 2.508 0 4.147 1.591 1.663 1.591 1.663 4.387 0 .483-.024.868h-9.474q.097 1.47 1.133 2.387 1.036.892 2.58.892 2.313 0 3.447-1.832l2.024 1.446q-1.736 2.796-5.496 2.796m-3.567-7.617h6.701q-.217-1.254-1.133-1.953-.891-.723-2.097-.723-1.254 0-2.242.7-.964.698-1.229 1.976"
        }
      ),
      /* @__PURE__ */ l.jsxs("defs", { children: [
        /* @__PURE__ */ l.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__c",
            x1: 17.515,
            x2: 17.515,
            y1: 0,
            y2: 28.029,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ l.jsx("stop", { stopColor: "#1D273D" }),
              /* @__PURE__ */ l.jsx("stop", { offset: 1, stopColor: "#0D0F13" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__d",
            x1: 5.794,
            x2: 8.172,
            y1: 8.726,
            y2: 5.545,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ l.jsx("stop", { stopColor: "#4462FE" }),
              /* @__PURE__ */ l.jsx("stop", { offset: 1, stopColor: "#7D69FA" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__e",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ l.jsx("stop", { stopColor: "#3757FD" }),
              /* @__PURE__ */ l.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__f",
            x1: 5.562,
            x2: 8.504,
            y1: 8.752,
            y2: 8.601,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ l.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ l.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__g",
            x1: 5.75,
            x2: 8.085,
            y1: 22.168,
            y2: 19.691,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ l.jsx("stop", { stopColor: "#BC3EE6" }),
              /* @__PURE__ */ l.jsx("stop", { offset: 1, stopColor: "#D972F1" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__h",
            x1: 26.981,
            x2: 29.14,
            y1: 15.16,
            y2: 12.861,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ l.jsx("stop", { stopColor: "#29BDFF" }),
              /* @__PURE__ */ l.jsx("stop", { offset: 1, stopColor: "#96E7FB" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__i",
            x1: 26.554,
            x2: 29.596,
            y1: 15.726,
            y2: 15.58,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ l.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ l.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__j",
            x1: 13.667,
            x2: 28.081,
            y1: 8.726,
            y2: 5.265,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ l.jsx("stop", { stopColor: "#23BBFF" }),
              /* @__PURE__ */ l.jsx("stop", { offset: 1, stopColor: "#85E7FF" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__k",
            x1: 13.8,
            x2: 27.638,
            y1: 22.741,
            y2: 19.191,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ l.jsx("stop", { stopColor: "#2447FF" }),
              /* @__PURE__ */ l.jsx("stop", { offset: 1, stopColor: "#6980FA" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "linearGradient",
          {
            id: "sequence-boilerplate-logo_svg__l",
            x1: 7.608,
            x2: 20.826,
            y1: 15.777,
            y2: 12.228,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ l.jsx("stop", { stopColor: "#6634FF" }),
              /* @__PURE__ */ l.jsx("stop", { offset: 1, stopColor: "#9C6DFF" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx("clipPath", { id: "sequence-boilerplate-logo_svg__a", children: /* @__PURE__ */ l.jsx("path", { fill: "#fff", d: "M0 0h151.273v28H0z" }) })
      ] })
    ]
  }
), ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Add: Xi,
  AirDropper: Ji,
  Apple: Qi,
  ArrowDown: ea,
  ArrowRight: ta,
  Bridge: na,
  Checkmark: ra,
  ChevronDown: oa,
  ChevronLeft: sa,
  ChevronRight: ia,
  ChevronUp: aa,
  Close: la,
  Contacts: ca,
  ContextMenu: ua,
  Contract: da,
  Copy: fa,
  Currency: ha,
  DashedCircle: pa,
  Deploy: va,
  Device: ma,
  Discord: ga,
  Docs: xa,
  Download: ya,
  Drag: wa,
  Edit: _a,
  Email: ba,
  Expand: Ca,
  ExternalLink: Sa,
  Facebook: Ra,
  GasTank: Ea,
  Globe: ja,
  Google: ka,
  Grid: Ta,
  Help: Oa,
  Hidden: Pa,
  Home: Aa,
  Indexer: Ma,
  Key: Na,
  Link: Ia,
  List: La,
  Marketplaces: Da,
  Menu: Va,
  Minter: za,
  Moon: Ba,
  Network: Fa,
  Node: $a,
  Payments: Ha,
  Pin: Wa,
  Profile: qa,
  QrCode: Ua,
  Receive: Za,
  Refresh: Ya,
  Relayer: Ga,
  Scan: Ka,
  Search: Xa,
  Send: Ja,
  Sequence: Qa,
  SequenceBoilerplateLogo: vl,
  Settings: el,
  Share: tl,
  Shield: nl,
  Signout: rl,
  Subtract: ol,
  Sun: sl,
  Swap: il,
  Transaction: al,
  Trash: ll,
  Twitch: cl,
  Upload: ul,
  Visible: dl,
  Wallet: fl,
  WalletConnect: hl,
  Warning: pl
}, Symbol.toStringTag, { value: "Module" })), Yn = ml;
function ct({
  name: e,
  alt: t = void 0,
  className: n = "",
  ...r
}) {
  const o = Yn == null ? void 0 : Yn[e];
  return /* @__PURE__ */ l.jsx(
    jn,
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
      children: /* @__PURE__ */ l.jsx(o, {})
    }
  );
}
function gl(e) {
  const { title: t, children: n, subvariants: r, variant: o, ...s } = e;
  return /* @__PURE__ */ l.jsxs(
    "details",
    {
      ...Ae("card-collapsable", o, r),
      ...s,
      children: [
        t ? /* @__PURE__ */ l.jsx(xl, { children: t }) : null,
        /* @__PURE__ */ l.jsx("div", { className: "px-4 pb-4 w-full text-start flex flex-col gap-4", children: n })
      ]
    }
  );
}
function xl(e) {
  const { children: t, ...n } = e;
  return /* @__PURE__ */ l.jsxs(
    "summary",
    {
      className: "flex items-center justify-between text-14 font-bold p-4",
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ l.jsx(ct, { name: "ChevronDown", width: "20", "data-arrow": !0 })
      ]
    }
  );
}
function Wf(e) {
  const { collapsable: t, ...n } = e;
  return t ? /* @__PURE__ */ l.jsx(gl, { ...n }) : /* @__PURE__ */ l.jsx(yl, { ...n });
}
function yl(e) {
  const { children: t, subvariants: n, variant: r, ...o } = e;
  return /* @__PURE__ */ l.jsx("div", { ...Ae("card", r, n), ...o, children: t });
}
function qf() {
  return /* @__PURE__ */ l.jsx("hr", { className: "w-full border-white/20" });
}
function wl(e) {
  const { children: t, variant: n, subvariants: r } = e;
  return /* @__PURE__ */ l.jsx("h2", { ...Ae("group-title", n, r), children: t });
}
function _l(e, t) {
  const {
    asChild: n = !1,
    children: r,
    variant: o,
    subvariants: s,
    ...i
  } = e;
  return /* @__PURE__ */ l.jsx(
    jn,
    {
      ref: t,
      fallbackAs: "div",
      asChild: n,
      ...Ae("group", o, s),
      ...i,
      children: r
    }
  );
}
const Uf = Object.assign(qt(_l), {
  Title: wl
}), zo = Pr(null);
function kn() {
  const e = Ar(zo);
  if (!e)
    throw new Error("useField must be used within a Field");
  return e;
}
function bl({
  children: e,
  value: t
}) {
  return /* @__PURE__ */ l.jsx(zo.Provider, { value: t, children: e });
}
function Bo(e) {
  const {
    children: t,
    variant: n,
    subvariants: r,
    asChild: o = !1,
    id: s,
    ...i
  } = e, { name: a } = kn(), c = Object.assign(
    {
      width: "full"
    },
    r
  );
  return /* @__PURE__ */ l.jsx(
    jn,
    {
      asChild: o,
      fallbackAs: "input",
      name: a,
      id: s || a,
      ...Ae("input", n, c),
      ...i,
      children: t
    }
  );
}
function Cl(e) {
  const { children: t, variant: n, subvariants: r, ...o } = e;
  function s(i) {
    var c, u;
    const a = (u = (c = i == null ? void 0 : i.target) == null ? void 0 : c.parentNode) == null ? void 0 : u.querySelector("input");
    a && a.focus();
  }
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ...Ae("segmented-input", n, r),
      ...o,
      children: [
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            tabIndex: -1,
            className: "absolute w-full h-full inset-0 z-0 cursor-text",
            onClick: s
          }
        ),
        t
      ]
    }
  );
}
function Sl(e) {
  const { children: t, subvariants: n, ...r } = e;
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      ...Ae("segmented-input-segment", null, n),
      ...r,
      children: t
    }
  );
}
const Gn = Object.assign(Cl, {
  Segment: Sl
});
function Rl(e, t) {
  const { children: n, variant: r, subvariants: o, ...s } = e, { name: i } = kn();
  return /* @__PURE__ */ l.jsx(
    "label",
    {
      ref: t,
      htmlFor: i,
      ...Ae("label", r, o),
      ...s,
      children: n
    }
  );
}
const Fo = qt(Rl);
function El({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label, o = typeof t == "string" ? null : t.icon;
    return /* @__PURE__ */ l.jsx("option", { value: n, "data-icon": o, children: r }, n);
  });
}
function ho(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ie(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function $o(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = f.createContext(i), c = n.length;
    n = [...n, i];
    function u(v) {
      const { scope: g, children: m, ...w } = v, p = (g == null ? void 0 : g[e][c]) || a, x = f.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ l.jsx(p.Provider, { value: x, children: m });
    }
    function d(v, g) {
      const m = (g == null ? void 0 : g[e][c]) || a, w = f.useContext(m);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${v}\` must be used within \`${s}\``);
    }
    return u.displayName = s + "Provider", [u, d];
  }
  const o = () => {
    const s = n.map((i) => f.createContext(i));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return f.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, jl(o, ...t)];
}
function jl(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: c, scopeName: u }) => {
        const v = c(s)[`__scope${u}`];
        return { ...a, ...v };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function kl(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ho(...e) {
  return (t) => e.forEach((n) => kl(n, t));
}
function fe(...e) {
  return f.useCallback(Ho(...e), e);
}
var zt = f.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = f.Children.toArray(n), s = o.find(Tl);
  if (s) {
    const i = s.props.children, a = o.map((c) => c === s ? f.Children.count(i) > 1 ? f.Children.only(null) : f.isValidElement(i) ? i.props.children : null : c);
    return /* @__PURE__ */ l.jsx(ar, { ...r, ref: t, children: f.isValidElement(i) ? f.cloneElement(i, void 0, a) : null });
  }
  return /* @__PURE__ */ l.jsx(ar, { ...r, ref: t, children: n });
});
zt.displayName = "Slot";
var ar = f.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (f.isValidElement(n)) {
    const o = Pl(n);
    return f.cloneElement(n, {
      ...Ol(r, n.props),
      // @ts-ignore
      ref: t ? Ho(t, o) : o
    });
  }
  return f.Children.count(n) > 1 ? f.Children.only(null) : null;
});
ar.displayName = "SlotClone";
var Wo = ({ children: e }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: e });
function Tl(e) {
  return f.isValidElement(e) && e.type === Wo;
}
function Ol(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      s(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Pl(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Al(e) {
  const t = e + "CollectionProvider", [n, r] = $o(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (m) => {
    const { scope: w, children: p } = m, x = me.useRef(null), _ = me.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l.jsx(o, { scope: w, itemMap: _, collectionRef: x, children: p });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", c = me.forwardRef(
    (m, w) => {
      const { scope: p, children: x } = m, _ = s(a, p), y = fe(w, _.collectionRef);
      return /* @__PURE__ */ l.jsx(zt, { ref: y, children: x });
    }
  );
  c.displayName = a;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", v = me.forwardRef(
    (m, w) => {
      const { scope: p, children: x, ..._ } = m, y = me.useRef(null), b = fe(w, y), R = s(u, p);
      return me.useEffect(() => (R.itemMap.set(y, { ref: y, ..._ }), () => void R.itemMap.delete(y))), /* @__PURE__ */ l.jsx(zt, { [d]: "", ref: b, children: x });
    }
  );
  v.displayName = u;
  function g(m) {
    const w = s(e + "CollectionConsumer", m);
    return me.useCallback(() => {
      const x = w.collectionRef.current;
      if (!x) return [];
      const _ = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (R, E) => _.indexOf(R.ref.current) - _.indexOf(E.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: v },
    g,
    r
  ];
}
function qo(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = f.createContext(i), c = n.length;
    n = [...n, i];
    const u = (v) => {
      var _;
      const { scope: g, children: m, ...w } = v, p = ((_ = g == null ? void 0 : g[e]) == null ? void 0 : _[c]) || a, x = f.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ l.jsx(p.Provider, { value: x, children: m });
    };
    u.displayName = s + "Provider";
    function d(v, g) {
      var p;
      const m = ((p = g == null ? void 0 : g[e]) == null ? void 0 : p[c]) || a, w = f.useContext(m);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${v}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const o = () => {
    const s = n.map((i) => f.createContext(i));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return f.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, Ml(o, ...t)];
}
function Ml(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: c, scopeName: u }) => {
        const v = c(s)[`__scope${u}`];
        return { ...a, ...v };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Nl = f.createContext(void 0);
function Il(e) {
  const t = f.useContext(Nl);
  return e || t || "ltr";
}
var Ll = [
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
], ce = Ll.reduce((e, t) => {
  const n = f.forwardRef((r, o) => {
    const { asChild: s, ...i } = r, a = s ? zt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(a, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Dl(e, t) {
  e && En.flushSync(() => e.dispatchEvent(t));
}
function qe(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Vl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e);
  f.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var zl = "DismissableLayer", lr = "dismissableLayer.update", Bl = "dismissableLayer.pointerDownOutside", Fl = "dismissableLayer.focusOutside", po, Uo = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Mr = f.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...c
    } = e, u = f.useContext(Uo), [d, v] = f.useState(null), g = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = f.useState({}), w = fe(t, (O) => v(O)), p = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), _ = p.indexOf(x), y = d ? p.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, R = y >= _, E = Wl((O) => {
      const z = O.target, Z = [...u.branches].some((G) => G.contains(z));
      !R || Z || (o == null || o(O), i == null || i(O), O.defaultPrevented || a == null || a());
    }, g), A = ql((O) => {
      const z = O.target;
      [...u.branches].some((G) => G.contains(z)) || (s == null || s(O), i == null || i(O), O.defaultPrevented || a == null || a());
    }, g);
    return Vl((O) => {
      y === u.layers.size - 1 && (r == null || r(O), !O.defaultPrevented && a && (O.preventDefault(), a()));
    }, g), f.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (po = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), vo(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = po);
        };
    }, [d, g, n, u]), f.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), vo());
    }, [d, u]), f.useEffect(() => {
      const O = () => m({});
      return document.addEventListener(lr, O), () => document.removeEventListener(lr, O);
    }, []), /* @__PURE__ */ l.jsx(
      ce.div,
      {
        ...c,
        ref: w,
        style: {
          pointerEvents: b ? R ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ie(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: ie(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: ie(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Mr.displayName = zl;
var $l = "DismissableLayerBranch", Hl = f.forwardRef((e, t) => {
  const n = f.useContext(Uo), r = f.useRef(null), o = fe(t, r);
  return f.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ l.jsx(ce.div, { ...e, ref: o });
});
Hl.displayName = $l;
function Wl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = f.useRef(!1), o = f.useRef(() => {
  });
  return f.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          Zo(
            Bl,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
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
function ql(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = f.useRef(!1);
  return f.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Zo(Fl, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function vo() {
  const e = new CustomEvent(lr);
  document.dispatchEvent(e);
}
function Zo(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Dl(o, s) : o.dispatchEvent(s);
}
var Kn = 0;
function Ul() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? mo()), document.body.insertAdjacentElement("beforeend", e[1] ?? mo()), Kn++, () => {
      Kn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Kn--;
    };
  }, []);
}
function mo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Xn = "focusScope.autoFocusOnMount", Jn = "focusScope.autoFocusOnUnmount", go = { bubbles: !1, cancelable: !0 }, Zl = "FocusScope", Yo = f.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, c] = f.useState(null), u = qe(o), d = qe(s), v = f.useRef(null), g = fe(t, (p) => c(p)), m = f.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  f.useEffect(() => {
    if (r) {
      let p = function(b) {
        if (m.paused || !a) return;
        const R = b.target;
        a.contains(R) ? v.current = R : et(v.current, { select: !0 });
      }, x = function(b) {
        if (m.paused || !a) return;
        const R = b.relatedTarget;
        R !== null && (a.contains(R) || et(v.current, { select: !0 }));
      }, _ = function(b) {
        if (document.activeElement === document.body)
          for (const E of b)
            E.removedNodes.length > 0 && et(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", x);
      const y = new MutationObserver(_);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", x), y.disconnect();
      };
    }
  }, [r, a, m.paused]), f.useEffect(() => {
    if (a) {
      yo.add(m);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const _ = new CustomEvent(Xn, go);
        a.addEventListener(Xn, u), a.dispatchEvent(_), _.defaultPrevented || (Yl(Ql(Go(a)), { select: !0 }), document.activeElement === p && et(a));
      }
      return () => {
        a.removeEventListener(Xn, u), setTimeout(() => {
          const _ = new CustomEvent(Jn, go);
          a.addEventListener(Jn, d), a.dispatchEvent(_), _.defaultPrevented || et(p ?? document.body, { select: !0 }), a.removeEventListener(Jn, d), yo.remove(m);
        }, 0);
      };
    }
  }, [a, u, d, m]);
  const w = f.useCallback(
    (p) => {
      if (!n && !r || m.paused) return;
      const x = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, _ = document.activeElement;
      if (x && _) {
        const y = p.currentTarget, [b, R] = Gl(y);
        b && R ? !p.shiftKey && _ === R ? (p.preventDefault(), n && et(b, { select: !0 })) : p.shiftKey && _ === b && (p.preventDefault(), n && et(R, { select: !0 })) : _ === y && p.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ l.jsx(ce.div, { tabIndex: -1, ...i, ref: g, onKeyDown: w });
});
Yo.displayName = Zl;
function Yl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (et(r, { select: t }), document.activeElement !== n) return;
}
function Gl(e) {
  const t = Go(e), n = xo(t, e), r = xo(t.reverse(), e);
  return [n, r];
}
function Go(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function xo(e, t) {
  for (const n of e)
    if (!Kl(n, { upTo: t })) return n;
}
function Kl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Xl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function et(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Xl(e) && t && e.select();
  }
}
var yo = Jl();
function Jl() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = wo(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = wo(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function wo(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ql(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ge = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
}, ec = f.useId || (() => {
}), tc = 0;
function Tn(e) {
  const [t, n] = f.useState(ec());
  return ge(() => {
    n((r) => r ?? String(tc++));
  }, [e]), t ? `radix-${t}` : "";
}
const nc = ["top", "right", "bottom", "left"], tt = Math.min, _e = Math.max, an = Math.round, Kt = Math.floor, Le = (e) => ({
  x: e,
  y: e
}), rc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, oc = {
  start: "end",
  end: "start"
};
function cr(e, t, n) {
  return _e(e, tt(t, n));
}
function Ue(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ze(e) {
  return e.split("-")[0];
}
function kt(e) {
  return e.split("-")[1];
}
function Nr(e) {
  return e === "x" ? "y" : "x";
}
function Ir(e) {
  return e === "y" ? "height" : "width";
}
function nt(e) {
  return ["top", "bottom"].includes(Ze(e)) ? "y" : "x";
}
function Lr(e) {
  return Nr(nt(e));
}
function sc(e, t, n) {
  n === void 0 && (n = !1);
  const r = kt(e), o = Lr(e), s = Ir(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ln(i)), [i, ln(i)];
}
function ic(e) {
  const t = ln(e);
  return [ur(e), t, ur(t)];
}
function ur(e) {
  return e.replace(/start|end/g, (t) => oc[t]);
}
function ac(e, t, n) {
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
function lc(e, t, n, r) {
  const o = kt(e);
  let s = ac(Ze(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(ur)))), s;
}
function ln(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rc[t]);
}
function cc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ko(e) {
  return typeof e != "number" ? cc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function cn(e) {
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
function _o(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = nt(t), i = Lr(t), a = Ir(i), c = Ze(t), u = s === "y", d = r.x + r.width / 2 - o.width / 2, v = r.y + r.height / 2 - o.height / 2, g = r[a] / 2 - o[a] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: v
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: v
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (kt(t)) {
    case "start":
      m[i] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      m[i] += g * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const uc = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: v
  } = _o(u, r, c), g = r, m = {}, w = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: x,
      fn: _
    } = a[p], {
      x: y,
      y: b,
      data: R,
      reset: E
    } = await _({
      x: d,
      y: v,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = y ?? d, v = b ?? v, m = {
      ...m,
      [x]: {
        ...m[x],
        ...R
      }
    }, E && w <= 50 && (w++, typeof E == "object" && (E.placement && (g = E.placement), E.rects && (u = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: v
    } = _o(u, g, c)), p = -1);
  }
  return {
    x: d,
    y: v,
    placement: g,
    strategy: o,
    middlewareData: m
  };
};
async function Bt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: v = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = Ue(t, e), w = Ko(m), x = a[g ? v === "floating" ? "reference" : "floating" : v], _ = cn(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), y = v === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), R = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = cn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: b,
    strategy: c
  }) : y);
  return {
    top: (_.top - E.top + w.top) / R.y,
    bottom: (E.bottom - _.bottom + w.bottom) / R.y,
    left: (_.left - E.left + w.left) / R.x,
    right: (E.right - _.right + w.right) / R.x
  };
}
const dc = (e) => ({
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
      middlewareData: c
    } = t, {
      element: u,
      padding: d = 0
    } = Ue(e, t) || {};
    if (u == null)
      return {};
    const v = Ko(d), g = {
      x: n,
      y: r
    }, m = Lr(o), w = Ir(m), p = await i.getDimensions(u), x = m === "y", _ = x ? "top" : "left", y = x ? "bottom" : "right", b = x ? "clientHeight" : "clientWidth", R = s.reference[w] + s.reference[m] - g[m] - s.floating[w], E = g[m] - s.reference[m], A = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let O = A ? A[b] : 0;
    (!O || !await (i.isElement == null ? void 0 : i.isElement(A))) && (O = a.floating[b] || s.floating[w]);
    const z = R / 2 - E / 2, Z = O / 2 - p[w] / 2 - 1, G = tt(v[_], Z), oe = tt(v[y], Z), te = G, B = O - p[w] - oe, F = O / 2 - p[w] / 2 + z, ne = cr(te, F, B), $ = !c.arrow && kt(o) != null && F !== ne && s.reference[w] / 2 - (F < te ? G : oe) - p[w] / 2 < 0, Y = $ ? F < te ? F - te : F - B : 0;
    return {
      [m]: g[m] + Y,
      data: {
        [m]: ne,
        centerOffset: F - ne - Y,
        ...$ && {
          alignmentOffset: Y
        }
      },
      reset: $
    };
  }
}), fc = function(e) {
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
        platform: c,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: v = !0,
        fallbackPlacements: g,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: p = !0,
        ...x
      } = Ue(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Ze(o), y = nt(a), b = Ze(a) === a, R = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), E = g || (b || !p ? [ln(a)] : ic(a)), A = w !== "none";
      !g && A && E.push(...lc(a, p, w, R));
      const O = [a, ...E], z = await Bt(t, x), Z = [];
      let G = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && Z.push(z[_]), v) {
        const F = sc(o, i, R);
        Z.push(z[F[0]], z[F[1]]);
      }
      if (G = [...G, {
        placement: o,
        overflows: Z
      }], !Z.every((F) => F <= 0)) {
        var oe, te;
        const F = (((oe = s.flip) == null ? void 0 : oe.index) || 0) + 1, ne = O[F];
        if (ne)
          return {
            data: {
              index: F,
              overflows: G
            },
            reset: {
              placement: ne
            }
          };
        let $ = (te = G.filter((Y) => Y.overflows[0] <= 0).sort((Y, D) => Y.overflows[1] - D.overflows[1])[0]) == null ? void 0 : te.placement;
        if (!$)
          switch (m) {
            case "bestFit": {
              var B;
              const Y = (B = G.filter((D) => {
                if (A) {
                  const re = nt(D.placement);
                  return re === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  re === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((re) => re > 0).reduce((re, he) => re + he, 0)]).sort((D, re) => D[1] - re[1])[0]) == null ? void 0 : B[0];
              Y && ($ = Y);
              break;
            }
            case "initialPlacement":
              $ = a;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function bo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Co(e) {
  return nc.some((t) => e[t] >= 0);
}
const hc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Ue(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await Bt(t, {
            ...o,
            elementContext: "reference"
          }), i = bo(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Co(i)
            }
          };
        }
        case "escaped": {
          const s = await Bt(t, {
            ...o,
            altBoundary: !0
          }), i = bo(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Co(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function pc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Ze(n), a = kt(n), c = nt(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, d = s && c ? -1 : 1, v = Ue(t, e);
  let {
    mainAxis: g,
    crossAxis: m,
    alignmentAxis: w
  } = typeof v == "number" ? {
    mainAxis: v,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: v.mainAxis || 0,
    crossAxis: v.crossAxis || 0,
    alignmentAxis: v.alignmentAxis
  };
  return a && typeof w == "number" && (m = a === "end" ? w * -1 : w), c ? {
    x: m * d,
    y: g * u
  } : {
    x: g * u,
    y: m * d
  };
}
const vc = function(e) {
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
      } = t, c = await pc(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, mc = function(e) {
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
          fn: (x) => {
            let {
              x: _,
              y
            } = x;
            return {
              x: _,
              y
            };
          }
        },
        ...c
      } = Ue(e, t), u = {
        x: n,
        y: r
      }, d = await Bt(t, c), v = nt(Ze(o)), g = Nr(v);
      let m = u[g], w = u[v];
      if (s) {
        const x = g === "y" ? "top" : "left", _ = g === "y" ? "bottom" : "right", y = m + d[x], b = m - d[_];
        m = cr(y, m, b);
      }
      if (i) {
        const x = v === "y" ? "top" : "left", _ = v === "y" ? "bottom" : "right", y = w + d[x], b = w - d[_];
        w = cr(y, w, b);
      }
      const p = a.fn({
        ...t,
        [g]: m,
        [v]: w
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [g]: s,
            [v]: i
          }
        }
      };
    }
  };
}, gc = function(e) {
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
        mainAxis: c = !0,
        crossAxis: u = !0
      } = Ue(e, t), d = {
        x: n,
        y: r
      }, v = nt(o), g = Nr(v);
      let m = d[g], w = d[v];
      const p = Ue(a, t), x = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (c) {
        const b = g === "y" ? "height" : "width", R = s.reference[g] - s.floating[b] + x.mainAxis, E = s.reference[g] + s.reference[b] - x.mainAxis;
        m < R ? m = R : m > E && (m = E);
      }
      if (u) {
        var _, y;
        const b = g === "y" ? "width" : "height", R = ["top", "left"].includes(Ze(o)), E = s.reference[v] - s.floating[b] + (R && ((_ = i.offset) == null ? void 0 : _[v]) || 0) + (R ? 0 : x.crossAxis), A = s.reference[v] + s.reference[b] + (R ? 0 : ((y = i.offset) == null ? void 0 : y[v]) || 0) - (R ? x.crossAxis : 0);
        w < E ? w = E : w > A && (w = A);
      }
      return {
        [g]: m,
        [v]: w
      };
    }
  };
}, xc = function(e) {
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
        apply: c = () => {
        },
        ...u
      } = Ue(e, t), d = await Bt(t, u), v = Ze(o), g = kt(o), m = nt(o) === "y", {
        width: w,
        height: p
      } = s.floating;
      let x, _;
      v === "top" || v === "bottom" ? (x = v, _ = g === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (_ = v, x = g === "end" ? "top" : "bottom");
      const y = p - d.top - d.bottom, b = w - d.left - d.right, R = tt(p - d[x], y), E = tt(w - d[_], b), A = !t.middlewareData.shift;
      let O = R, z = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (z = b), (r = t.middlewareData.shift) != null && r.enabled.y && (O = y), A && !g) {
        const G = _e(d.left, 0), oe = _e(d.right, 0), te = _e(d.top, 0), B = _e(d.bottom, 0);
        m ? z = w - 2 * (G !== 0 || oe !== 0 ? G + oe : _e(d.left, d.right)) : O = p - 2 * (te !== 0 || B !== 0 ? te + B : _e(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: z,
        availableHeight: O
      });
      const Z = await i.getDimensions(a.floating);
      return w !== Z.width || p !== Z.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function On() {
  return typeof window < "u";
}
function Tt(e) {
  return Xo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function be(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Be(e) {
  var t;
  return (t = (Xo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xo(e) {
  return On() ? e instanceof Node || e instanceof be(e).Node : !1;
}
function Oe(e) {
  return On() ? e instanceof Element || e instanceof be(e).Element : !1;
}
function Ve(e) {
  return On() ? e instanceof HTMLElement || e instanceof be(e).HTMLElement : !1;
}
function So(e) {
  return !On() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof be(e).ShadowRoot;
}
function Ut(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function yc(e) {
  return ["table", "td", "th"].includes(Tt(e));
}
function Pn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Dr(e) {
  const t = Vr(), n = Oe(e) ? Pe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function wc(e) {
  let t = rt(e);
  for (; Ve(t) && !Ct(t); ) {
    if (Dr(t))
      return t;
    if (Pn(t))
      return null;
    t = rt(t);
  }
  return null;
}
function Vr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ct(e) {
  return ["html", "body", "#document"].includes(Tt(e));
}
function Pe(e) {
  return be(e).getComputedStyle(e);
}
function An(e) {
  return Oe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function rt(e) {
  if (Tt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    So(e) && e.host || // Fallback.
    Be(e)
  );
  return So(t) ? t.host : t;
}
function Jo(e) {
  const t = rt(e);
  return Ct(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ve(t) && Ut(t) ? t : Jo(t);
}
function Ft(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Jo(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = be(o);
  if (s) {
    const a = dr(i);
    return t.concat(i, i.visualViewport || [], Ut(o) ? o : [], a && n ? Ft(a) : []);
  }
  return t.concat(o, Ft(o, [], n));
}
function dr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Qo(e) {
  const t = Pe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ve(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = an(n) !== s || an(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function zr(e) {
  return Oe(e) ? e : e.contextElement;
}
function wt(e) {
  const t = zr(e);
  if (!Ve(t))
    return Le(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Qo(t);
  let i = (s ? an(n.width) : n.width) / r, a = (s ? an(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const _c = /* @__PURE__ */ Le(0);
function es(e) {
  const t = be(e);
  return !Vr() || !t.visualViewport ? _c : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== be(e) ? !1 : t;
}
function ut(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = zr(e);
  let i = Le(1);
  t && (r ? Oe(r) && (i = wt(r)) : i = wt(e));
  const a = bc(s, n, r) ? es(s) : Le(0);
  let c = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, d = o.width / i.x, v = o.height / i.y;
  if (s) {
    const g = be(s), m = r && Oe(r) ? be(r) : r;
    let w = g, p = dr(w);
    for (; p && r && m !== w; ) {
      const x = wt(p), _ = p.getBoundingClientRect(), y = Pe(p), b = _.left + (p.clientLeft + parseFloat(y.paddingLeft)) * x.x, R = _.top + (p.clientTop + parseFloat(y.paddingTop)) * x.y;
      c *= x.x, u *= x.y, d *= x.x, v *= x.y, c += b, u += R, w = be(p), p = dr(w);
    }
  }
  return cn({
    width: d,
    height: v,
    x: c,
    y: u
  });
}
function Br(e, t) {
  const n = An(e).scrollLeft;
  return t ? t.left + n : ut(Be(e)).left + n;
}
function ts(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Br(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Cc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Be(r), a = t ? Pn(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Le(1);
  const d = Le(0), v = Ve(r);
  if ((v || !v && !s) && ((Tt(r) !== "body" || Ut(i)) && (c = An(r)), Ve(r))) {
    const m = ut(r);
    u = wt(r), d.x = m.x + r.clientLeft, d.y = m.y + r.clientTop;
  }
  const g = i && !v && !s ? ts(i, c, !0) : Le(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + d.x + g.x,
    y: n.y * u.y - c.scrollTop * u.y + d.y + g.y
  };
}
function Sc(e) {
  return Array.from(e.getClientRects());
}
function Rc(e) {
  const t = Be(e), n = An(e), r = e.ownerDocument.body, o = _e(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = _e(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Br(e);
  const a = -n.scrollTop;
  return Pe(r).direction === "rtl" && (i += _e(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Ec(e, t) {
  const n = be(e), r = Be(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, c = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = Vr();
    (!u || u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: c
  };
}
function jc(e, t) {
  const n = ut(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Ve(e) ? wt(e) : Le(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, c = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: c,
    y: u
  };
}
function Ro(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ec(e, n);
  else if (t === "document")
    r = Rc(Be(e));
  else if (Oe(t))
    r = jc(t, n);
  else {
    const o = es(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return cn(r);
}
function ns(e, t) {
  const n = rt(e);
  return n === t || !Oe(n) || Ct(n) ? !1 : Pe(n).position === "fixed" || ns(n, t);
}
function kc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ft(e, [], !1).filter((a) => Oe(a) && Tt(a) !== "body"), o = null;
  const s = Pe(e).position === "fixed";
  let i = s ? rt(e) : e;
  for (; Oe(i) && !Ct(i); ) {
    const a = Pe(i), c = Dr(i);
    !c && a.position === "fixed" && (o = null), (s ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ut(i) && !c && ns(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = rt(i);
  }
  return t.set(e, r), r;
}
function Tc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Pn(t) ? [] : kc(t, this._c) : [].concat(n), r], a = i[0], c = i.reduce((u, d) => {
    const v = Ro(t, d, o);
    return u.top = _e(v.top, u.top), u.right = tt(v.right, u.right), u.bottom = tt(v.bottom, u.bottom), u.left = _e(v.left, u.left), u;
  }, Ro(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Oc(e) {
  const {
    width: t,
    height: n
  } = Qo(e);
  return {
    width: t,
    height: n
  };
}
function Pc(e, t, n) {
  const r = Ve(t), o = Be(t), s = n === "fixed", i = ut(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Le(0);
  if (r || !r && !s)
    if ((Tt(t) !== "body" || Ut(o)) && (a = An(t)), r) {
      const g = ut(t, !0, s, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && (c.x = Br(o));
  const u = o && !r && !s ? ts(o, a) : Le(0), d = i.left + a.scrollLeft - c.x - u.x, v = i.top + a.scrollTop - c.y - u.y;
  return {
    x: d,
    y: v,
    width: i.width,
    height: i.height
  };
}
function Qn(e) {
  return Pe(e).position === "static";
}
function Eo(e, t) {
  if (!Ve(e) || Pe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Be(e) === n && (n = n.ownerDocument.body), n;
}
function rs(e, t) {
  const n = be(e);
  if (Pn(e))
    return n;
  if (!Ve(e)) {
    let o = rt(e);
    for (; o && !Ct(o); ) {
      if (Oe(o) && !Qn(o))
        return o;
      o = rt(o);
    }
    return n;
  }
  let r = Eo(e, t);
  for (; r && yc(r) && Qn(r); )
    r = Eo(r, t);
  return r && Ct(r) && Qn(r) && !Dr(r) ? n : r || wc(e) || n;
}
const Ac = async function(e) {
  const t = this.getOffsetParent || rs, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Pc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Mc(e) {
  return Pe(e).direction === "rtl";
}
const Nc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Cc,
  getDocumentElement: Be,
  getClippingRect: Tc,
  getOffsetParent: rs,
  getElementRects: Ac,
  getClientRects: Sc,
  getDimensions: Oc,
  getScale: wt,
  isElement: Oe,
  isRTL: Mc
};
function Ic(e, t) {
  let n = null, r;
  const o = Be(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const {
      left: u,
      top: d,
      width: v,
      height: g
    } = e.getBoundingClientRect();
    if (a || t(), !v || !g)
      return;
    const m = Kt(d), w = Kt(o.clientWidth - (u + v)), p = Kt(o.clientHeight - (d + g)), x = Kt(u), y = {
      rootMargin: -m + "px " + -w + "px " + -p + "px " + -x + "px",
      threshold: _e(0, tt(1, c)) || 1
    };
    let b = !0;
    function R(E) {
      const A = E[0].intersectionRatio;
      if (A !== c) {
        if (!b)
          return i();
        A ? i(!1, A) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Lc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = zr(e), d = o || s ? [...u ? Ft(u) : [], ...Ft(t)] : [];
  d.forEach((_) => {
    o && _.addEventListener("scroll", n, {
      passive: !0
    }), s && _.addEventListener("resize", n);
  });
  const v = u && a ? Ic(u, n) : null;
  let g = -1, m = null;
  i && (m = new ResizeObserver((_) => {
    let [y] = _;
    y && y.target === u && m && (m.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var b;
      (b = m) == null || b.observe(t);
    })), n();
  }), u && !c && m.observe(u), m.observe(t));
  let w, p = c ? ut(e) : null;
  c && x();
  function x() {
    const _ = ut(e);
    p && (_.x !== p.x || _.y !== p.y || _.width !== p.width || _.height !== p.height) && n(), p = _, w = requestAnimationFrame(x);
  }
  return n(), () => {
    var _;
    d.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), v == null || v(), (_ = m) == null || _.disconnect(), m = null, c && cancelAnimationFrame(w);
  };
}
const Dc = vc, Vc = mc, zc = fc, Bc = xc, Fc = hc, jo = dc, $c = gc, Hc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Nc,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return uc(e, t, {
    ...o,
    platform: s
  });
};
var nn = typeof document < "u" ? Vi : zi;
function un(e, t) {
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
        if (!un(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !un(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function os(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ko(e, t) {
  const n = os(e);
  return Math.round(t * n) / n;
}
function er(e) {
  const t = f.useRef(e);
  return nn(() => {
    t.current = e;
  }), t;
}
function Wc(e) {
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
    whileElementsMounted: c,
    open: u
  } = e, [d, v] = f.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, m] = f.useState(r);
  un(g, r) || m(r);
  const [w, p] = f.useState(null), [x, _] = f.useState(null), y = f.useCallback((D) => {
    D !== A.current && (A.current = D, p(D));
  }, []), b = f.useCallback((D) => {
    D !== O.current && (O.current = D, _(D));
  }, []), R = s || w, E = i || x, A = f.useRef(null), O = f.useRef(null), z = f.useRef(d), Z = c != null, G = er(c), oe = er(o), te = er(u), B = f.useCallback(() => {
    if (!A.current || !O.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: g
    };
    oe.current && (D.platform = oe.current), Hc(A.current, O.current, D).then((re) => {
      const he = {
        ...re,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: te.current !== !1
      };
      F.current && !un(z.current, he) && (z.current = he, En.flushSync(() => {
        v(he);
      }));
    });
  }, [g, t, n, oe, te]);
  nn(() => {
    u === !1 && z.current.isPositioned && (z.current.isPositioned = !1, v((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [u]);
  const F = f.useRef(!1);
  nn(() => (F.current = !0, () => {
    F.current = !1;
  }), []), nn(() => {
    if (R && (A.current = R), E && (O.current = E), R && E) {
      if (G.current)
        return G.current(R, E, B);
      B();
    }
  }, [R, E, B, G, Z]);
  const ne = f.useMemo(() => ({
    reference: A,
    floating: O,
    setReference: y,
    setFloating: b
  }), [y, b]), $ = f.useMemo(() => ({
    reference: R,
    floating: E
  }), [R, E]), Y = f.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return D;
    const re = ko($.floating, d.x), he = ko($.floating, d.y);
    return a ? {
      ...D,
      transform: "translate(" + re + "px, " + he + "px)",
      ...os($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: re,
      top: he
    };
  }, [n, a, $.floating, d.x, d.y]);
  return f.useMemo(() => ({
    ...d,
    update: B,
    refs: ne,
    elements: $,
    floatingStyles: Y
  }), [d, B, ne, $, Y]);
}
const qc = (e) => {
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
      return r && t(r) ? r.current != null ? jo({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? jo({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Uc = (e, t) => ({
  ...Dc(e),
  options: [e, t]
}), Zc = (e, t) => ({
  ...Vc(e),
  options: [e, t]
}), Yc = (e, t) => ({
  ...$c(e),
  options: [e, t]
}), Gc = (e, t) => ({
  ...zc(e),
  options: [e, t]
}), Kc = (e, t) => ({
  ...Bc(e),
  options: [e, t]
}), Xc = (e, t) => ({
  ...Fc(e),
  options: [e, t]
}), Jc = (e, t) => ({
  ...qc(e),
  options: [e, t]
});
var Qc = "Arrow", ss = f.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ l.jsx(
    ce.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ l.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ss.displayName = Qc;
var eu = ss;
function tu(e) {
  const [t, n] = f.useState(void 0);
  return ge(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          i = u.inlineSize, a = u.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Fr = "Popper", [is, Mn] = $o(Fr), [nu, as] = is(Fr), ls = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = f.useState(null);
  return /* @__PURE__ */ l.jsx(nu, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
ls.displayName = Fr;
var cs = "PopperAnchor", us = f.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = as(cs, n), i = f.useRef(null), a = fe(t, i);
    return f.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ l.jsx(ce.div, { ...o, ref: a });
  }
);
us.displayName = cs;
var $r = "PopperContent", [ru, ou] = is($r), ds = f.forwardRef(
  (e, t) => {
    var M, J, ue, K, Q, X;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: v = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: w,
      ...p
    } = e, x = as($r, n), [_, y] = f.useState(null), b = fe(t, (pe) => y(pe)), [R, E] = f.useState(null), A = tu(R), O = (A == null ? void 0 : A.width) ?? 0, z = (A == null ? void 0 : A.height) ?? 0, Z = r + (s !== "center" ? "-" + s : ""), G = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, oe = Array.isArray(u) ? u : [u], te = oe.length > 0, B = {
      padding: G,
      boundary: oe.filter(iu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: te
    }, { refs: F, floatingStyles: ne, placement: $, isPositioned: Y, middlewareData: D } = Wc({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: Z,
      whileElementsMounted: (...pe) => Lc(...pe, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        Uc({ mainAxis: o + z, alignmentAxis: i }),
        c && Zc({
          mainAxis: !0,
          crossAxis: !1,
          limiter: v === "partial" ? Yc() : void 0,
          ...B
        }),
        c && Gc({ ...B }),
        Kc({
          ...B,
          apply: ({ elements: pe, rects: Re, availableWidth: Ne, availableHeight: ke }) => {
            const { width: Qe, height: Gt } = Re.reference, Fe = pe.floating.style;
            Fe.setProperty("--radix-popper-available-width", `${Ne}px`), Fe.setProperty("--radix-popper-available-height", `${ke}px`), Fe.setProperty("--radix-popper-anchor-width", `${Qe}px`), Fe.setProperty("--radix-popper-anchor-height", `${Gt}px`);
          }
        }),
        R && Jc({ element: R, padding: a }),
        au({ arrowWidth: O, arrowHeight: z }),
        g && Xc({ strategy: "referenceHidden", ...B })
      ]
    }), [re, he] = ps($), Se = qe(w);
    ge(() => {
      Y && (Se == null || Se());
    }, [Y, Se]);
    const Ke = (M = D.arrow) == null ? void 0 : M.x, Xe = (J = D.arrow) == null ? void 0 : J.y, Me = ((ue = D.arrow) == null ? void 0 : ue.centerOffset) !== 0, [Je, je] = f.useState();
    return ge(() => {
      _ && je(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ne,
          transform: Y ? ne.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Je,
          "--radix-popper-transform-origin": [
            (K = D.transformOrigin) == null ? void 0 : K.x,
            (Q = D.transformOrigin) == null ? void 0 : Q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = D.hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ l.jsx(
          ru,
          {
            scope: n,
            placedSide: re,
            onArrowChange: E,
            arrowX: Ke,
            arrowY: Xe,
            shouldHideArrow: Me,
            children: /* @__PURE__ */ l.jsx(
              ce.div,
              {
                "data-side": re,
                "data-align": he,
                ...p,
                ref: b,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Y ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ds.displayName = $r;
var fs = "PopperArrow", su = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, hs = f.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = ou(fs, r), i = su[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ l.jsx(
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
        children: /* @__PURE__ */ l.jsx(
          eu,
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
hs.displayName = fs;
function iu(e) {
  return e !== null;
}
var au = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, _, y;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [u, d] = ps(n), v = { start: "0%", center: "50%", end: "100%" }[d], g = (((_ = o.arrow) == null ? void 0 : _.x) ?? 0) + a / 2, m = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + c / 2;
    let w = "", p = "";
    return u === "bottom" ? (w = i ? v : `${g}px`, p = `${-c}px`) : u === "top" ? (w = i ? v : `${g}px`, p = `${r.floating.height + c}px`) : u === "right" ? (w = `${-c}px`, p = i ? v : `${m}px`) : u === "left" && (w = `${r.floating.width + c}px`, p = i ? v : `${m}px`), { data: { x: w, y: p } };
  }
});
function ps(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var vs = ls, ms = us, gs = ds, xs = hs, lu = "Portal", Hr = f.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = f.useState(!1);
  ge(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? Hi.createPortal(/* @__PURE__ */ l.jsx(ce.div, { ...r, ref: t }), i) : null;
});
Hr.displayName = lu;
function fr({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = cu({ defaultProp: t, onChange: n }), s = e !== void 0, i = s ? e : r, a = qe(n), c = f.useCallback(
    (u) => {
      if (s) {
        const v = typeof u == "function" ? u(e) : u;
        v !== e && a(v);
      } else
        o(u);
    },
    [s, e, o, a]
  );
  return [i, c];
}
function cu({
  defaultProp: e,
  onChange: t
}) {
  const n = f.useState(e), [r] = n, o = f.useRef(r), s = qe(t);
  return f.useEffect(() => {
    o.current !== r && (s(r), o.current = r);
  }, [r, o, s]), n;
}
function uu(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var du = "VisuallyHidden", Wr = f.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(
    ce.span,
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
Wr.displayName = du;
var fu = Wr, hu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, mt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Jt = {}, tr = 0, ys = function(e) {
  return e && (e.host || ys(e.parentNode));
}, pu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ys(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, vu = function(e, t, n, r) {
  var o = pu(t, Array.isArray(e) ? e : [e]);
  Jt[n] || (Jt[n] = /* @__PURE__ */ new WeakMap());
  var s = Jt[n], i = [], a = /* @__PURE__ */ new Set(), c = new Set(o), u = function(v) {
    !v || a.has(v) || (a.add(v), u(v.parentNode));
  };
  o.forEach(u);
  var d = function(v) {
    !v || c.has(v) || Array.prototype.forEach.call(v.children, function(g) {
      if (a.has(g))
        d(g);
      else
        try {
          var m = g.getAttribute(r), w = m !== null && m !== "false", p = (mt.get(g) || 0) + 1, x = (s.get(g) || 0) + 1;
          mt.set(g, p), s.set(g, x), i.push(g), p === 1 && w && Xt.set(g, !0), x === 1 && g.setAttribute(n, "true"), w || g.setAttribute(r, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", g, _);
        }
    });
  };
  return d(t), a.clear(), tr++, function() {
    i.forEach(function(v) {
      var g = mt.get(v) - 1, m = s.get(v) - 1;
      mt.set(v, g), s.set(v, m), g || (Xt.has(v) || v.removeAttribute(r), Xt.delete(v)), m || v.removeAttribute(n);
    }), tr--, tr || (mt = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Jt = {});
  };
}, mu = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = hu(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), vu(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ie = function() {
  return Ie = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ie.apply(this, arguments);
};
function ws(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function gu(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var rn = "right-scroll-bar-position", on = "width-before-scroll-bar", xu = "with-scroll-bars-hidden", yu = "--removed-body-scroll-bar-size";
function nr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function wu(e, t) {
  var n = sn(function() {
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
var _u = typeof window < "u" ? f.useLayoutEffect : f.useEffect, To = /* @__PURE__ */ new WeakMap();
function bu(e, t) {
  var n = wu(null, function(r) {
    return e.forEach(function(o) {
      return nr(o, r);
    });
  });
  return _u(function() {
    var r = To.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || nr(a, null);
      }), s.forEach(function(a) {
        o.has(a) || nr(a, i);
      });
    }
    To.set(n, e);
  }, [e]), n;
}
function Cu(e) {
  return e;
}
function Su(e, t) {
  t === void 0 && (t = Cu);
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
      var c = function() {
        var d = i;
        i = [], d.forEach(s);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(d) {
          i.push(d), u();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function Ru(e) {
  e === void 0 && (e = {});
  var t = Su(null);
  return t.options = Ie({ async: !0, ssr: !1 }, e), t;
}
var _s = function(e) {
  var t = e.sideCar, n = ws(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return f.createElement(r, Ie({}, n));
};
_s.isSideCarExport = !0;
function Eu(e, t) {
  return e.useMedium(t), _s;
}
var bs = Ru(), rr = function() {
}, Nn = f.forwardRef(function(e, t) {
  var n = f.useRef(null), r = f.useState({
    onScrollCapture: rr,
    onWheelCapture: rr,
    onTouchMoveCapture: rr
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, v = e.shards, g = e.sideCar, m = e.noIsolation, w = e.inert, p = e.allowPinchZoom, x = e.as, _ = x === void 0 ? "div" : x, y = e.gapMode, b = ws(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = g, E = bu([n, t]), A = Ie(Ie({}, b), o);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(R, { sideCar: bs, removeScrollBar: u, shards: v, noIsolation: m, inert: w, setCallbacks: s, allowPinchZoom: !!p, lockRef: n, gapMode: y }),
    i ? f.cloneElement(f.Children.only(a), Ie(Ie({}, A), { ref: E })) : f.createElement(_, Ie({}, A, { className: c, ref: E }), a)
  );
});
Nn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Nn.classNames = {
  fullWidth: on,
  zeroRight: rn
};
var ju = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ku() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ju();
  return t && e.setAttribute("nonce", t), e;
}
function Tu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ou(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Pu = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ku()) && (Tu(t, n), Ou(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Au = function() {
  var e = Pu();
  return function(t, n) {
    f.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Cs = function() {
  var e = Au(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Mu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, or = function(e) {
  return parseInt(e || "", 10) || 0;
}, Nu = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [or(n), or(r), or(o)];
}, Iu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Mu;
  var t = Nu(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Lu = Cs(), _t = "data-scroll-locked", Du = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(xu, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(_t, `] {
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
  
  .`).concat(rn, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(on, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(rn, " .").concat(rn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(on, " .").concat(on, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(_t, `] {
    `).concat(yu, ": ").concat(a, `px;
  }
`);
}, Oo = function() {
  var e = parseInt(document.body.getAttribute(_t) || "0", 10);
  return isFinite(e) ? e : 0;
}, Vu = function() {
  f.useEffect(function() {
    return document.body.setAttribute(_t, (Oo() + 1).toString()), function() {
      var e = Oo() - 1;
      e <= 0 ? document.body.removeAttribute(_t) : document.body.setAttribute(_t, e.toString());
    };
  }, []);
}, zu = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Vu();
  var s = f.useMemo(function() {
    return Iu(o);
  }, [o]);
  return f.createElement(Lu, { styles: Du(s, !t, o, n ? "" : "!important") });
}, hr = !1;
if (typeof window < "u")
  try {
    var Qt = Object.defineProperty({}, "passive", {
      get: function() {
        return hr = !0, !0;
      }
    });
    window.addEventListener("test", Qt, Qt), window.removeEventListener("test", Qt, Qt);
  } catch {
    hr = !1;
  }
var gt = hr ? { passive: !1 } : !1, Bu = function(e) {
  return e.tagName === "TEXTAREA";
}, Ss = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Bu(e) && n[t] === "visible")
  );
}, Fu = function(e) {
  return Ss(e, "overflowY");
}, $u = function(e) {
  return Ss(e, "overflowX");
}, Po = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Rs(e, r);
    if (o) {
      var s = Es(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Hu = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Wu = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Rs = function(e, t) {
  return e === "v" ? Fu(t) : $u(t);
}, Es = function(e, t) {
  return e === "v" ? Hu(t) : Wu(t);
}, qu = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Uu = function(e, t, n, r, o) {
  var s = qu(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, c = t.contains(a), u = !1, d = i > 0, v = 0, g = 0;
  do {
    var m = Es(e, a), w = m[0], p = m[1], x = m[2], _ = p - x - s * w;
    (w || _) && Rs(e, a) && (v += _, g += w), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (d && (Math.abs(v) < 1 || !o) || !d && (Math.abs(g) < 1 || !o)) && (u = !0), u;
}, en = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ao = function(e) {
  return [e.deltaX, e.deltaY];
}, Mo = function(e) {
  return e && "current" in e ? e.current : e;
}, Zu = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Yu = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Gu = 0, xt = [];
function Ku(e) {
  var t = f.useRef([]), n = f.useRef([0, 0]), r = f.useRef(), o = f.useState(Gu++)[0], s = f.useState(Cs)[0], i = f.useRef(e);
  f.useEffect(function() {
    i.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = gu([e.lockRef.current], (e.shards || []).map(Mo), !0).filter(Boolean);
      return p.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = f.useCallback(function(p, x) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !i.current.allowPinchZoom;
    var _ = en(p), y = n.current, b = "deltaX" in p ? p.deltaX : y[0] - _[0], R = "deltaY" in p ? p.deltaY : y[1] - _[1], E, A = p.target, O = Math.abs(b) > Math.abs(R) ? "h" : "v";
    if ("touches" in p && O === "h" && A.type === "range")
      return !1;
    var z = Po(O, A);
    if (!z)
      return !0;
    if (z ? E = O : (E = O === "v" ? "h" : "v", z = Po(O, A)), !z)
      return !1;
    if (!r.current && "changedTouches" in p && (b || R) && (r.current = E), !E)
      return !0;
    var Z = r.current || E;
    return Uu(Z, x, p, Z === "h" ? b : R, !0);
  }, []), c = f.useCallback(function(p) {
    var x = p;
    if (!(!xt.length || xt[xt.length - 1] !== s)) {
      var _ = "deltaY" in x ? Ao(x) : en(x), y = t.current.filter(function(E) {
        return E.name === x.type && (E.target === x.target || x.target === E.shadowParent) && Zu(E.delta, _);
      })[0];
      if (y && y.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!y) {
        var b = (i.current.shards || []).map(Mo).filter(Boolean).filter(function(E) {
          return E.contains(x.target);
        }), R = b.length > 0 ? a(x, b[0]) : !i.current.noIsolation;
        R && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = f.useCallback(function(p, x, _, y) {
    var b = { name: p, delta: x, target: _, should: y, shadowParent: Xu(_) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(R) {
        return R !== b;
      });
    }, 1);
  }, []), d = f.useCallback(function(p) {
    n.current = en(p), r.current = void 0;
  }, []), v = f.useCallback(function(p) {
    u(p.type, Ao(p), p.target, a(p, e.lockRef.current));
  }, []), g = f.useCallback(function(p) {
    u(p.type, en(p), p.target, a(p, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return xt.push(s), e.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", c, gt), document.addEventListener("touchmove", c, gt), document.addEventListener("touchstart", d, gt), function() {
      xt = xt.filter(function(p) {
        return p !== s;
      }), document.removeEventListener("wheel", c, gt), document.removeEventListener("touchmove", c, gt), document.removeEventListener("touchstart", d, gt);
    };
  }, []);
  var m = e.removeScrollBar, w = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    w ? f.createElement(s, { styles: Yu(o) }) : null,
    m ? f.createElement(zu, { gapMode: e.gapMode }) : null
  );
}
function Xu(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Ju = Eu(bs, Ku);
var js = f.forwardRef(function(e, t) {
  return f.createElement(Nn, Ie({}, e, { ref: t, sideCar: Ju }));
});
js.classNames = Nn.classNames;
var Qu = [" ", "Enter", "ArrowUp", "ArrowDown"], ed = [" ", "Enter"], Zt = "Select", [In, Ln, td] = Al(Zt), [Ot, Zf] = qo(Zt, [
  td,
  Mn
]), Dn = Mn(), [nd, st] = Ot(Zt), [rd, od] = Ot(Zt), ks = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: c,
    dir: u,
    name: d,
    autoComplete: v,
    disabled: g,
    required: m,
    form: w
  } = e, p = Dn(t), [x, _] = f.useState(null), [y, b] = f.useState(null), [R, E] = f.useState(!1), A = Il(u), [O = !1, z] = fr({
    prop: r,
    defaultProp: o,
    onChange: s
  }), [Z, G] = fr({
    prop: i,
    defaultProp: a,
    onChange: c
  }), oe = f.useRef(null), te = x ? w || !!x.closest("form") : !0, [B, F] = f.useState(/* @__PURE__ */ new Set()), ne = Array.from(B).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ l.jsx(vs, { ...p, children: /* @__PURE__ */ l.jsxs(
    nd,
    {
      required: m,
      scope: t,
      trigger: x,
      onTriggerChange: _,
      valueNode: y,
      onValueNodeChange: b,
      valueNodeHasChildren: R,
      onValueNodeHasChildrenChange: E,
      contentId: Tn(),
      value: Z,
      onValueChange: G,
      open: O,
      onOpenChange: z,
      dir: A,
      triggerPointerDownPosRef: oe,
      disabled: g,
      children: [
        /* @__PURE__ */ l.jsx(In.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
          rd,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback(($) => {
              F((Y) => new Set(Y).add($));
            }, []),
            onNativeOptionRemove: f.useCallback(($) => {
              F((Y) => {
                const D = new Set(Y);
                return D.delete($), D;
              });
            }, []),
            children: n
          }
        ) }),
        te ? /* @__PURE__ */ l.jsxs(
          Ks,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: d,
            autoComplete: v,
            value: Z,
            onChange: ($) => G($.target.value),
            disabled: g,
            form: w,
            children: [
              Z === void 0 ? /* @__PURE__ */ l.jsx("option", { value: "" }) : null,
              Array.from(B)
            ]
          },
          ne
        ) : null
      ]
    }
  ) });
};
ks.displayName = Zt;
var Ts = "SelectTrigger", Os = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Dn(n), i = st(Ts, n), a = i.disabled || r, c = fe(t, i.onTriggerChange), u = Ln(n), d = f.useRef("touch"), [v, g, m] = Xs((p) => {
      const x = u().filter((b) => !b.disabled), _ = x.find((b) => b.value === i.value), y = Js(x, p, _);
      y !== void 0 && i.onValueChange(y.value);
    }), w = (p) => {
      a || (i.onOpenChange(!0), m()), p && (i.triggerPointerDownPosRef.current = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      });
    };
    return /* @__PURE__ */ l.jsx(ms, { asChild: !0, ...s, children: /* @__PURE__ */ l.jsx(
      ce.button,
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
        "data-placeholder": Gs(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: ie(o.onClick, (p) => {
          p.currentTarget.focus(), d.current !== "mouse" && w(p);
        }),
        onPointerDown: ie(o.onPointerDown, (p) => {
          d.current = p.pointerType;
          const x = p.target;
          x.hasPointerCapture(p.pointerId) && x.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (w(p), p.preventDefault());
        }),
        onKeyDown: ie(o.onKeyDown, (p) => {
          const x = v.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && g(p.key), !(x && p.key === " ") && Qu.includes(p.key) && (w(), p.preventDefault());
        })
      }
    ) });
  }
);
Os.displayName = Ts;
var Ps = "SelectValue", As = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, c = st(Ps, n), { onValueNodeHasChildrenChange: u } = c, d = s !== void 0, v = fe(t, c.onValueNodeChange);
    return ge(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ l.jsx(
      ce.span,
      {
        ...a,
        ref: v,
        style: { pointerEvents: "none" },
        children: Gs(c.value) ? /* @__PURE__ */ l.jsx(l.Fragment, { children: i }) : s
      }
    );
  }
);
As.displayName = Ps;
var sd = "SelectIcon", id = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(ce.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
id.displayName = sd;
var ad = "SelectPortal", Ms = (e) => /* @__PURE__ */ l.jsx(Hr, { asChild: !0, ...e });
Ms.displayName = ad;
var dt = "SelectContent", Ns = f.forwardRef(
  (e, t) => {
    const n = st(dt, e.__scopeSelect), [r, o] = f.useState();
    if (ge(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? En.createPortal(
        /* @__PURE__ */ l.jsx(Is, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx(In.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ l.jsx(Ls, { ...e, ref: t });
  }
);
Ns.displayName = dt;
var Te = 10, [Is, it] = Ot(dt), ld = "SelectContentImpl", Ls = f.forwardRef(
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
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: v,
      collisionBoundary: g,
      collisionPadding: m,
      sticky: w,
      hideWhenDetached: p,
      avoidCollisions: x,
      //
      ..._
    } = e, y = st(dt, n), [b, R] = f.useState(null), [E, A] = f.useState(null), O = fe(t, (M) => R(M)), [z, Z] = f.useState(null), [G, oe] = f.useState(
      null
    ), te = Ln(n), [B, F] = f.useState(!1), ne = f.useRef(!1);
    f.useEffect(() => {
      if (b) return mu(b);
    }, [b]), Ul();
    const $ = f.useCallback(
      (M) => {
        const [J, ...ue] = te().map((X) => X.ref.current), [K] = ue.slice(-1), Q = document.activeElement;
        for (const X of M)
          if (X === Q || (X == null || X.scrollIntoView({ block: "nearest" }), X === J && E && (E.scrollTop = 0), X === K && E && (E.scrollTop = E.scrollHeight), X == null || X.focus(), document.activeElement !== Q)) return;
      },
      [te, E]
    ), Y = f.useCallback(
      () => $([z, b]),
      [$, z, b]
    );
    f.useEffect(() => {
      B && Y();
    }, [B, Y]);
    const { onOpenChange: D, triggerPointerDownPosRef: re } = y;
    f.useEffect(() => {
      if (b) {
        let M = { x: 0, y: 0 };
        const J = (K) => {
          var Q, X;
          M = {
            x: Math.abs(Math.round(K.pageX) - (((Q = re.current) == null ? void 0 : Q.x) ?? 0)),
            y: Math.abs(Math.round(K.pageY) - (((X = re.current) == null ? void 0 : X.y) ?? 0))
          };
        }, ue = (K) => {
          M.x <= 10 && M.y <= 10 ? K.preventDefault() : b.contains(K.target) || D(!1), document.removeEventListener("pointermove", J), re.current = null;
        };
        return re.current !== null && (document.addEventListener("pointermove", J), document.addEventListener("pointerup", ue, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", J), document.removeEventListener("pointerup", ue, { capture: !0 });
        };
      }
    }, [b, D, re]), f.useEffect(() => {
      const M = () => D(!1);
      return window.addEventListener("blur", M), window.addEventListener("resize", M), () => {
        window.removeEventListener("blur", M), window.removeEventListener("resize", M);
      };
    }, [D]);
    const [he, Se] = Xs((M) => {
      const J = te().filter((Q) => !Q.disabled), ue = J.find((Q) => Q.ref.current === document.activeElement), K = Js(J, M, ue);
      K && setTimeout(() => K.ref.current.focus());
    }), Ke = f.useCallback(
      (M, J, ue) => {
        const K = !ne.current && !ue;
        (y.value !== void 0 && y.value === J || K) && (Z(M), K && (ne.current = !0));
      },
      [y.value]
    ), Xe = f.useCallback(() => b == null ? void 0 : b.focus(), [b]), Me = f.useCallback(
      (M, J, ue) => {
        const K = !ne.current && !ue;
        (y.value !== void 0 && y.value === J || K) && oe(M);
      },
      [y.value]
    ), Je = r === "popper" ? pr : Ds, je = Je === pr ? {
      side: a,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: v,
      collisionBoundary: g,
      collisionPadding: m,
      sticky: w,
      hideWhenDetached: p,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ l.jsx(
      Is,
      {
        scope: n,
        content: b,
        viewport: E,
        onViewportChange: A,
        itemRefCallback: Ke,
        selectedItem: z,
        onItemLeave: Xe,
        itemTextRefCallback: Me,
        focusSelectedItem: Y,
        selectedItemText: G,
        position: r,
        isPositioned: B,
        searchRef: he,
        children: /* @__PURE__ */ l.jsx(js, { as: zt, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
          Yo,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (M) => {
              M.preventDefault();
            },
            onUnmountAutoFocus: ie(o, (M) => {
              var J;
              (J = y.trigger) == null || J.focus({ preventScroll: !0 }), M.preventDefault();
            }),
            children: /* @__PURE__ */ l.jsx(
              Mr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (M) => M.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ l.jsx(
                  Je,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (M) => M.preventDefault(),
                    ..._,
                    ...je,
                    onPlaced: () => F(!0),
                    ref: O,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ..._.style
                    },
                    onKeyDown: ie(_.onKeyDown, (M) => {
                      const J = M.ctrlKey || M.altKey || M.metaKey;
                      if (M.key === "Tab" && M.preventDefault(), !J && M.key.length === 1 && Se(M.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(M.key)) {
                        let K = te().filter((Q) => !Q.disabled).map((Q) => Q.ref.current);
                        if (["ArrowUp", "End"].includes(M.key) && (K = K.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(M.key)) {
                          const Q = M.target, X = K.indexOf(Q);
                          K = K.slice(X + 1);
                        }
                        setTimeout(() => $(K)), M.preventDefault();
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
Ls.displayName = ld;
var cd = "SelectItemAlignedPosition", Ds = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = st(dt, n), i = it(dt, n), [a, c] = f.useState(null), [u, d] = f.useState(null), v = fe(t, (O) => d(O)), g = Ln(n), m = f.useRef(!1), w = f.useRef(!0), { viewport: p, selectedItem: x, selectedItemText: _, focusSelectedItem: y } = i, b = f.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && p && x && _) {
      const O = s.trigger.getBoundingClientRect(), z = u.getBoundingClientRect(), Z = s.valueNode.getBoundingClientRect(), G = _.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const Q = G.left - z.left, X = Z.left - Q, pe = O.left - X, Re = O.width + pe, Ne = Math.max(Re, z.width), ke = window.innerWidth - Te, Qe = ho(X, [
          Te,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Te, ke - Ne)
        ]);
        a.style.minWidth = Re + "px", a.style.left = Qe + "px";
      } else {
        const Q = z.right - G.right, X = window.innerWidth - Z.right - Q, pe = window.innerWidth - O.right - X, Re = O.width + pe, Ne = Math.max(Re, z.width), ke = window.innerWidth - Te, Qe = ho(X, [
          Te,
          Math.max(Te, ke - Ne)
        ]);
        a.style.minWidth = Re + "px", a.style.right = Qe + "px";
      }
      const oe = g(), te = window.innerHeight - Te * 2, B = p.scrollHeight, F = window.getComputedStyle(u), ne = parseInt(F.borderTopWidth, 10), $ = parseInt(F.paddingTop, 10), Y = parseInt(F.borderBottomWidth, 10), D = parseInt(F.paddingBottom, 10), re = ne + $ + B + D + Y, he = Math.min(x.offsetHeight * 5, re), Se = window.getComputedStyle(p), Ke = parseInt(Se.paddingTop, 10), Xe = parseInt(Se.paddingBottom, 10), Me = O.top + O.height / 2 - Te, Je = te - Me, je = x.offsetHeight / 2, M = x.offsetTop + je, J = ne + $ + M, ue = re - J;
      if (J <= Me) {
        const Q = oe.length > 0 && x === oe[oe.length - 1].ref.current;
        a.style.bottom = "0px";
        const X = u.clientHeight - p.offsetTop - p.offsetHeight, pe = Math.max(
          Je,
          je + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Q ? Xe : 0) + X + Y
        ), Re = J + pe;
        a.style.height = Re + "px";
      } else {
        const Q = oe.length > 0 && x === oe[0].ref.current;
        a.style.top = "0px";
        const pe = Math.max(
          Me,
          ne + p.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Q ? Ke : 0) + je
        ) + ue;
        a.style.height = pe + "px", p.scrollTop = J - Me + p.offsetTop;
      }
      a.style.margin = `${Te}px 0`, a.style.minHeight = he + "px", a.style.maxHeight = te + "px", r == null || r(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    g,
    s.trigger,
    s.valueNode,
    a,
    u,
    p,
    x,
    _,
    s.dir,
    r
  ]);
  ge(() => b(), [b]);
  const [R, E] = f.useState();
  ge(() => {
    u && E(window.getComputedStyle(u).zIndex);
  }, [u]);
  const A = f.useCallback(
    (O) => {
      O && w.current === !0 && (b(), y == null || y(), w.current = !1);
    },
    [b, y]
  );
  return /* @__PURE__ */ l.jsx(
    dd,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: R
          },
          children: /* @__PURE__ */ l.jsx(
            ce.div,
            {
              ...o,
              ref: v,
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
Ds.displayName = cd;
var ud = "SelectPopperPosition", pr = f.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Te,
    ...s
  } = e, i = Dn(n);
  return /* @__PURE__ */ l.jsx(
    gs,
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
pr.displayName = ud;
var [dd, qr] = Ot(dt, {}), vr = "SelectViewport", Vs = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = it(vr, n), i = qr(vr, n), a = fe(t, s.onViewportChange), c = f.useRef(0);
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ l.jsx(In.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
        ce.div,
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
          onScroll: ie(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: v, shouldExpandOnScrollRef: g } = i;
            if (g != null && g.current && v) {
              const m = Math.abs(c.current - d.scrollTop);
              if (m > 0) {
                const w = window.innerHeight - Te * 2, p = parseFloat(v.style.minHeight), x = parseFloat(v.style.height), _ = Math.max(p, x);
                if (_ < w) {
                  const y = _ + m, b = Math.min(w, y), R = y - b;
                  v.style.height = b + "px", v.style.bottom === "0px" && (d.scrollTop = R > 0 ? R : 0, v.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Vs.displayName = vr;
var zs = "SelectGroup", [fd, hd] = Ot(zs), pd = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Tn();
    return /* @__PURE__ */ l.jsx(fd, { scope: n, id: o, children: /* @__PURE__ */ l.jsx(ce.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
pd.displayName = zs;
var Bs = "SelectLabel", vd = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = hd(Bs, n);
    return /* @__PURE__ */ l.jsx(ce.div, { id: o.id, ...r, ref: t });
  }
);
vd.displayName = Bs;
var dn = "SelectItem", [md, Fs] = Ot(dn), $s = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = st(dn, n), c = it(dn, n), u = a.value === r, [d, v] = f.useState(s ?? ""), [g, m] = f.useState(!1), w = fe(
      t,
      (y) => {
        var b;
        return (b = c.itemRefCallback) == null ? void 0 : b.call(c, y, r, o);
      }
    ), p = Tn(), x = f.useRef("touch"), _ = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l.jsx(
      md,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: p,
        isSelected: u,
        onItemTextChange: f.useCallback((y) => {
          v((b) => b || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l.jsx(
          In.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ l.jsx(
              ce.div,
              {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": u && g,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: w,
                onFocus: ie(i.onFocus, () => m(!0)),
                onBlur: ie(i.onBlur, () => m(!1)),
                onClick: ie(i.onClick, () => {
                  x.current !== "mouse" && _();
                }),
                onPointerUp: ie(i.onPointerUp, () => {
                  x.current === "mouse" && _();
                }),
                onPointerDown: ie(i.onPointerDown, (y) => {
                  x.current = y.pointerType;
                }),
                onPointerMove: ie(i.onPointerMove, (y) => {
                  var b;
                  x.current = y.pointerType, o ? (b = c.onItemLeave) == null || b.call(c) : x.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ie(i.onPointerLeave, (y) => {
                  var b;
                  y.currentTarget === document.activeElement && ((b = c.onItemLeave) == null || b.call(c));
                }),
                onKeyDown: ie(i.onKeyDown, (y) => {
                  var R;
                  ((R = c.searchRef) == null ? void 0 : R.current) !== "" && y.key === " " || (ed.includes(y.key) && _(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
$s.displayName = dn;
var Nt = "SelectItemText", Hs = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = st(Nt, n), a = it(Nt, n), c = Fs(Nt, n), u = od(Nt, n), [d, v] = f.useState(null), g = fe(
      t,
      (_) => v(_),
      c.onItemTextChange,
      (_) => {
        var y;
        return (y = a.itemTextRefCallback) == null ? void 0 : y.call(a, _, c.value, c.disabled);
      }
    ), m = d == null ? void 0 : d.textContent, w = f.useMemo(
      () => /* @__PURE__ */ l.jsx("option", { value: c.value, disabled: c.disabled, children: m }, c.value),
      [c.disabled, c.value, m]
    ), { onNativeOptionAdd: p, onNativeOptionRemove: x } = u;
    return ge(() => (p(w), () => x(w)), [p, x, w]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(ce.span, { id: c.textId, ...s, ref: g }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? En.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Hs.displayName = Nt;
var Ws = "SelectItemIndicator", qs = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Fs(Ws, n).isSelected ? /* @__PURE__ */ l.jsx(ce.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
qs.displayName = Ws;
var mr = "SelectScrollUpButton", gd = f.forwardRef((e, t) => {
  const n = it(mr, e.__scopeSelect), r = qr(mr, e.__scopeSelect), [o, s] = f.useState(!1), i = fe(t, r.onScrollButtonChange);
  return ge(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = c.scrollTop > 0;
        s(u);
      };
      const c = n.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ l.jsx(
    Zs,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = n;
        a && c && (a.scrollTop = a.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
gd.displayName = mr;
var gr = "SelectScrollDownButton", Us = f.forwardRef((e, t) => {
  const n = it(gr, e.__scopeSelect), r = qr(gr, e.__scopeSelect), [o, s] = f.useState(!1), i = fe(t, r.onScrollButtonChange);
  return ge(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < u;
        s(d);
      };
      const c = n.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ l.jsx(
    Zs,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = n;
        a && c && (a.scrollTop = a.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
Us.displayName = gr;
var Zs = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = it("SelectScrollButton", n), i = f.useRef(null), a = Ln(n), c = f.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return f.useEffect(() => () => c(), [c]), ge(() => {
    var d;
    const u = a().find((v) => v.ref.current === document.activeElement);
    (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ l.jsx(
    ce.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: ie(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: ie(o.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: ie(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), xd = "SelectSeparator", yd = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(ce.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
yd.displayName = xd;
var xr = "SelectArrow", Ys = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Dn(n), s = st(xr, n), i = it(xr, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ l.jsx(xs, { ...o, ...r, ref: t }) : null;
  }
);
Ys.displayName = xr;
function Gs(e) {
  return e === "" || e === void 0;
}
var Ks = f.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = f.useRef(null), s = fe(t, o), i = uu(n);
    return f.useEffect(() => {
      const a = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== n && d) {
        const v = new Event("change", { bubbles: !0 });
        d.call(a, n), a.dispatchEvent(v);
      }
    }, [i, n]), /* @__PURE__ */ l.jsx(Wr, { asChild: !0, children: /* @__PURE__ */ l.jsx("select", { ...r, ref: s, defaultValue: n }) });
  }
);
Ks.displayName = "BubbleSelect";
function Xs(e) {
  const t = qe(e), n = f.useRef(""), r = f.useRef(0), o = f.useCallback(
    (i) => {
      const a = n.current + i;
      t(a), function c(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(a);
    },
    [t]
  ), s = f.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return f.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Js(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = wd(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const c = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function wd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var _d = ks, bd = Os, Cd = As, Sd = Ms, Rd = Ns, Ed = Vs, jd = $s, kd = Hs, Td = qs, Od = Us, Pd = Ys;
function Ad({ items: e }) {
  return e.map((t) => {
    const n = typeof t == "string" ? t : t.value, r = typeof t == "string" ? t : t.label, o = typeof t == "string" ? null : t.icon;
    return /* @__PURE__ */ l.jsxs(
      jd,
      {
        value: n,
        className: "min-h-[2rem] px-6 py-3 flex items-center gap-2 hover:outline-none cursor-pointer hover:bg-grey-600",
        children: [
          /* @__PURE__ */ l.jsx(Td, { className: "size-5", children: /* @__PURE__ */ l.jsx(ct, { name: "Checkmark", width: "20" }) }),
          /* @__PURE__ */ l.jsx(kd, { asChild: !0, children: /* @__PURE__ */ l.jsxs("span", { className: "flex gap-3 items-center text-white", children: [
            o ? /* @__PURE__ */ l.jsx("img", { src: o, className: "size-5", width: "20", alt: "" }) : null,
            /* @__PURE__ */ l.jsx("span", { children: r }),
            " "
          ] }) })
        ]
      },
      n
    );
  });
}
function yr({ items: e, native: t }) {
  return t ? /* @__PURE__ */ l.jsx(El, { items: e }) : /* @__PURE__ */ l.jsx(Ad, { items: e });
}
function Md(e) {
  const {
    defaultValue: t,
    arrowIcon: n = "ChevronDown",
    children: r,
    ...o
  } = e;
  return /* @__PURE__ */ l.jsxs(_d, { defaultValue: t, ...o, children: [
    /* @__PURE__ */ l.jsxs(bd, { className: "flex items-center justify-between w-full bg-transparent border border-grey-500 rounded-[0.5rem] text-gray-200 focus:ring-2 ring-blue-500 px-4 py-3", children: [
      /* @__PURE__ */ l.jsx(Cd, {}),
      /* @__PURE__ */ l.jsx(ct, { name: n, width: "20" })
    ] }),
    /* @__PURE__ */ l.jsx(Sd, { children: /* @__PURE__ */ l.jsxs(Rd, { className: "rounded-[0.5rem] overflow-clip text-white border border-white bg-light_buttonGlass backdrop-blur", children: [
      /* @__PURE__ */ l.jsx(Ed, { className: "flex flex-col", children: r }),
      /* @__PURE__ */ l.jsx(Od, {}),
      /* @__PURE__ */ l.jsx(Pd, {})
    ] }) })
  ] });
}
function Nd(e, t) {
  const {
    defaultValue: n,
    children: r,
    variant: o,
    subvariants: s,
    arrowIcon: i = "ChevronDown"
  } = e, a = {
    "min-size": "md"
  }, [c, u] = sn(null);
  function d(g) {
    var w, p, x;
    e != null && e.onChange && e.onChange(g), e != null && e.onValueChange && e.onValueChange(g.target.value);
    const m = (x = (p = (w = g == null ? void 0 : g.target) == null ? void 0 : w.querySelector("option:checked")) == null ? void 0 : p.dataset) == null ? void 0 : x.icon;
    m && u(m);
  }
  const v = Bi((g) => (d({ target: g }), t), []);
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: v,
      ...Ae(
        "select",
        o,
        Object.assign(a, s)
      ),
      children: [
        c ? /* @__PURE__ */ l.jsx("img", { src: c, width: "20", className: "size-5", alt: "" }) : null,
        /* @__PURE__ */ l.jsx("div", { className: "absolute w-[2.5rem] z-10 right-0 pointer-events-none top-0 bottom-0 items-center justify-center flex cursor-pointer", children: /* @__PURE__ */ l.jsx(ct, { name: i, className: "w-4 h-4 text-white" }) }),
        /* @__PURE__ */ l.jsx("select", { onChange: d, defaultValue: n, children: r })
      ]
    }
  );
}
const Id = qt(Nd);
function Ld(e, t) {
  const { options: n, native: r = !1, children: o } = e, s = me.isValidElement(o) ? me.cloneElement(o, { native: r }) : o;
  return r ? /* @__PURE__ */ l.jsx(Id, { ref: t, ...e, children: n ? /* @__PURE__ */ l.jsx(yr, { items: n, native: !0 }) : s }) : /* @__PURE__ */ l.jsx(Md, { ref: t, ...e, children: n ? /* @__PURE__ */ l.jsx(yr, { items: n }) : s });
}
const Dd = Object.assign(qt(Ld), {
  Options: yr
});
var U;
(function(e) {
  e.assertEqual = (o) => o;
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const s = {};
    for (const i of o)
      s[i] = i;
    return s;
  }, e.getValidEnumValues = (o) => {
    const s = e.objectKeys(o).filter((a) => typeof o[o[a]] != "number"), i = {};
    for (const a of s)
      i[a] = o[a];
    return e.objectValues(i);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(s) {
    return o[s];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const s = [];
    for (const i in o)
      Object.prototype.hasOwnProperty.call(o, i) && s.push(i);
    return s;
  }, e.find = (o, s) => {
    for (const i of o)
      if (s(i))
        return i;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  function r(o, s = " | ") {
    return o.map((i) => typeof i == "string" ? `'${i}'` : i).join(s);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, s) => typeof s == "bigint" ? s.toString() : s;
})(U || (U = {}));
var No;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(No || (No = {}));
const T = U.arrayToEnum([
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
]), lt = (e) => {
  switch (typeof e) {
    case "undefined":
      return T.undefined;
    case "string":
      return T.string;
    case "number":
      return isNaN(e) ? T.nan : T.number;
    case "boolean":
      return T.boolean;
    case "function":
      return T.function;
    case "bigint":
      return T.bigint;
    case "symbol":
      return T.symbol;
    case "object":
      return Array.isArray(e) ? T.array : e === null ? T.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? T.promise : typeof Map < "u" && e instanceof Map ? T.map : typeof Set < "u" && e instanceof Set ? T.set : typeof Date < "u" && e instanceof Date ? T.date : T.object;
    default:
      return T.unknown;
  }
}, S = U.arrayToEnum([
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
class Ce extends Error {
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
    const n = t || function(s) {
      return s.message;
    }, r = { _errors: [] }, o = (s) => {
      for (const i of s.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(o);
        else if (i.code === "invalid_return_type")
          o(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          o(i.argumentsError);
        else if (i.path.length === 0)
          r._errors.push(n(i));
        else {
          let a = r, c = 0;
          for (; c < i.path.length; ) {
            const u = i.path[c];
            c === i.path.length - 1 ? (a[u] = a[u] || { _errors: [] }, a[u]._errors.push(n(i))) : a[u] = a[u] || { _errors: [] }, a = a[u], c++;
          }
        }
    };
    return o(this), r;
  }
  static assert(t) {
    if (!(t instanceof Ce))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, U.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const o of this.issues)
      o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Ce.create = (e) => new Ce(e);
const $t = (e, t) => {
  let n;
  switch (e.code) {
    case S.invalid_type:
      e.received === T.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case S.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, U.jsonStringifyReplacer)}`;
      break;
    case S.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${U.joinValues(e.keys, ", ")}`;
      break;
    case S.invalid_union:
      n = "Invalid input";
      break;
    case S.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${U.joinValues(e.options)}`;
      break;
    case S.invalid_enum_value:
      n = `Invalid enum value. Expected ${U.joinValues(e.options)}, received '${e.received}'`;
      break;
    case S.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case S.invalid_return_type:
      n = "Invalid function return type";
      break;
    case S.invalid_date:
      n = "Invalid date";
      break;
    case S.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : U.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case S.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case S.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case S.custom:
      n = "Invalid input";
      break;
    case S.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case S.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case S.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, U.assertNever(e);
  }
  return { message: n };
};
let Vd = $t;
function wr() {
  return Vd;
}
const _r = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, s = [...n, ...o.path || []], i = {
    ...o,
    path: s
  };
  if (o.message !== void 0)
    return {
      ...o,
      path: s,
      message: o.message
    };
  let a = "";
  const c = r.filter((u) => !!u).slice().reverse();
  for (const u of c)
    a = u(i, { data: t, defaultError: a }).message;
  return {
    ...o,
    path: s,
    message: a
  };
};
function k(e, t) {
  const n = wr(), r = _r({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === $t ? void 0 : $t
      // then global default map
    ].filter((o) => !!o)
  });
  e.common.issues.push(r);
}
class xe {
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
    for (const o of n) {
      if (o.status === "aborted")
        return L;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n) {
      const s = await o.key, i = await o.value;
      r.push({
        key: s,
        value: i
      });
    }
    return xe.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: s, value: i } = o;
      if (s.status === "aborted" || i.status === "aborted")
        return L;
      s.status === "dirty" && t.dirty(), i.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof i.value < "u" || o.alwaysSet) && (r[s.value] = i.value);
    }
    return { status: t.value, value: r };
  }
}
const L = Object.freeze({
  status: "aborted"
}), It = (e) => ({ status: "dirty", value: e }), we = (e) => ({ status: "valid", value: e }), Io = (e) => e.status === "aborted", Lo = (e) => e.status === "dirty", fn = (e) => e.status === "valid", hn = (e) => typeof Promise < "u" && e instanceof Promise;
function pn(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function Qs(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var P;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(P || (P = {}));
var Lt, Dt;
class ze {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Do = (e, t) => {
  if (fn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Ce(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function V(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (i, a) => {
    var c, u;
    const { message: d } = e;
    return i.code === "invalid_enum_value" ? { message: d ?? a.defaultError } : typeof a.data > "u" ? { message: (c = d ?? r) !== null && c !== void 0 ? c : a.defaultError } : i.code !== "invalid_type" ? { message: a.defaultError } : { message: (u = d ?? n) !== null && u !== void 0 ? u : a.defaultError };
  }, description: o };
}
class H {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return lt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: lt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new xe(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: lt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (hn(n))
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
    const o = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: lt(t)
    }, s = this._parseSync({ data: t, path: o.path, parent: o });
    return Do(o, s);
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
      parsedType: lt(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), s = await (hn(o) ? o : Promise.resolve(o));
    return Do(r, s);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, s) => {
      const i = t(o), a = () => s.addIssue({
        code: S.custom,
        ...r(o)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((c) => c ? !0 : (a(), !1)) : i ? !0 : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new Ge({
      schema: this,
      typeName: N.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return We.create(this, this._def);
  }
  nullable() {
    return ht.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return De.create(this, this._def);
  }
  promise() {
    return Wt.create(this, this._def);
  }
  or(t) {
    return gn.create([this, t], this._def);
  }
  and(t) {
    return xn.create(this, t, this._def);
  }
  transform(t) {
    return new Ge({
      ...V(this._def),
      schema: this,
      typeName: N.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Cn({
      ...V(this._def),
      innerType: this,
      defaultValue: n,
      typeName: N.ZodDefault
    });
  }
  brand() {
    return new ri({
      typeName: N.ZodBranded,
      type: this,
      ...V(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Sn({
      ...V(this._def),
      innerType: this,
      catchValue: n,
      typeName: N.ZodCatch
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
    return Vn.create(this, t);
  }
  readonly() {
    return Rn.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const zd = /^c[^\s-]{8,}$/i, Bd = /^[0-9a-z]+$/, Fd = /^[0-9A-HJKMNP-TV-Z]{26}$/, $d = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Hd = /^[a-z0-9_-]{21}$/i, Wd = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, qd = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Ud = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let sr;
const Zd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Yd = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Gd = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ei = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Kd = new RegExp(`^${ei}$`);
function ti(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function Xd(e) {
  return new RegExp(`^${ti(e)}$`);
}
function Jd(e) {
  let t = `${ei}T${ti(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Qd(e, t) {
  return !!((t === "v4" || !t) && Zd.test(e) || (t === "v6" || !t) && Yd.test(e));
}
class He extends H {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== T.string) {
      const s = this._getOrReturnCtx(t);
      return k(s, {
        code: S.invalid_type,
        expected: T.string,
        received: s.parsedType
      }), L;
    }
    const r = new xe();
    let o;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (o = this._getOrReturnCtx(t, o), k(o, {
          code: S.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (o = this._getOrReturnCtx(t, o), k(o, {
          code: S.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const i = t.data.length > s.value, a = t.data.length < s.value;
        (i || a) && (o = this._getOrReturnCtx(t, o), i ? k(o, {
          code: S.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && k(o, {
          code: S.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        qd.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
          validation: "email",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        sr || (sr = new RegExp(Ud, "u")), sr.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
          validation: "emoji",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        $d.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
          validation: "uuid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "nanoid")
        Hd.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
          validation: "nanoid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        zd.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
          validation: "cuid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        Bd.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
          validation: "cuid2",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        Fd.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
          validation: "ulid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), k(o, {
            validation: "url",
            code: S.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
        validation: "regex",
        code: S.invalid_string,
        message: s.message
      }), r.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (o = this._getOrReturnCtx(t, o), k(o, {
        code: S.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), r.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (o = this._getOrReturnCtx(t, o), k(o, {
        code: S.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (o = this._getOrReturnCtx(t, o), k(o, {
        code: S.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "datetime" ? Jd(s).test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
        code: S.invalid_string,
        validation: "datetime",
        message: s.message
      }), r.dirty()) : s.kind === "date" ? Kd.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
        code: S.invalid_string,
        validation: "date",
        message: s.message
      }), r.dirty()) : s.kind === "time" ? Xd(s).test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
        code: S.invalid_string,
        validation: "time",
        message: s.message
      }), r.dirty()) : s.kind === "duration" ? Wd.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
        validation: "duration",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "ip" ? Qd(t.data, s.version) || (o = this._getOrReturnCtx(t, o), k(o, {
        validation: "ip",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64" ? Gd.test(t.data) || (o = this._getOrReturnCtx(t, o), k(o, {
        validation: "base64",
        code: S.invalid_string,
        message: s.message
      }), r.dirty()) : U.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: S.invalid_string,
      ...P.errToObj(r)
    });
  }
  _addCheck(t) {
    return new He({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...P.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...P.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...P.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...P.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...P.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...P.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...P.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...P.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...P.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...P.errToObj(t) });
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
      ...P.errToObj(t == null ? void 0 : t.message)
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
      ...P.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...P.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...P.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...P.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...P.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...P.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...P.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...P.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...P.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, P.errToObj(t));
  }
  trim() {
    return new He({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new He({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new He({
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
He.create = (e) => {
  var t;
  return new He({
    checks: [],
    typeName: N.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...V(e)
  });
};
function ef(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, s = parseInt(e.toFixed(o).replace(".", "")), i = parseInt(t.toFixed(o).replace(".", ""));
  return s % i / Math.pow(10, o);
}
class St extends H {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== T.number) {
      const s = this._getOrReturnCtx(t);
      return k(s, {
        code: S.invalid_type,
        expected: T.number,
        received: s.parsedType
      }), L;
    }
    let r;
    const o = new xe();
    for (const s of this._def.checks)
      s.kind === "int" ? U.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), k(r, {
        code: S.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), o.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (r = this._getOrReturnCtx(t, r), k(r, {
        code: S.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), o.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (r = this._getOrReturnCtx(t, r), k(r, {
        code: S.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), o.dirty()) : s.kind === "multipleOf" ? ef(t.data, s.value) !== 0 && (r = this._getOrReturnCtx(t, r), k(r, {
        code: S.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), o.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), k(r, {
        code: S.not_finite,
        message: s.message
      }), o.dirty()) : U.assertNever(s);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, P.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, P.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, P.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, P.toString(n));
  }
  setLimit(t, n, r, o) {
    return new St({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: P.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new St({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: P.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: P.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: P.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: P.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: P.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: P.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: P.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: P.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: P.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && U.isInteger(t.value));
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
St.create = (e) => new St({
  checks: [],
  typeName: N.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...V(e)
});
class Rt extends H {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== T.bigint) {
      const s = this._getOrReturnCtx(t);
      return k(s, {
        code: S.invalid_type,
        expected: T.bigint,
        received: s.parsedType
      }), L;
    }
    let r;
    const o = new xe();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (r = this._getOrReturnCtx(t, r), k(r, {
        code: S.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), o.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (r = this._getOrReturnCtx(t, r), k(r, {
        code: S.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), o.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), k(r, {
        code: S.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), o.dirty()) : U.assertNever(s);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, P.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, P.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, P.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, P.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Rt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: P.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Rt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: P.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: P.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: P.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: P.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: P.toString(n)
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
Rt.create = (e) => {
  var t;
  return new Rt({
    checks: [],
    typeName: N.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...V(e)
  });
};
class br extends H {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== T.boolean) {
      const r = this._getOrReturnCtx(t);
      return k(r, {
        code: S.invalid_type,
        expected: T.boolean,
        received: r.parsedType
      }), L;
    }
    return we(t.data);
  }
}
br.create = (e) => new br({
  typeName: N.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...V(e)
});
class Ht extends H {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== T.date) {
      const s = this._getOrReturnCtx(t);
      return k(s, {
        code: S.invalid_type,
        expected: T.date,
        received: s.parsedType
      }), L;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return k(s, {
        code: S.invalid_date
      }), L;
    }
    const r = new xe();
    let o;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (o = this._getOrReturnCtx(t, o), k(o, {
        code: S.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (o = this._getOrReturnCtx(t, o), k(o, {
        code: S.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), r.dirty()) : U.assertNever(s);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Ht({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: P.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: P.toString(n)
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
Ht.create = (e) => new Ht({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: N.ZodDate,
  ...V(e)
});
class Cr extends H {
  _parse(t) {
    if (this._getType(t) !== T.symbol) {
      const r = this._getOrReturnCtx(t);
      return k(r, {
        code: S.invalid_type,
        expected: T.symbol,
        received: r.parsedType
      }), L;
    }
    return we(t.data);
  }
}
Cr.create = (e) => new Cr({
  typeName: N.ZodSymbol,
  ...V(e)
});
class vn extends H {
  _parse(t) {
    if (this._getType(t) !== T.undefined) {
      const r = this._getOrReturnCtx(t);
      return k(r, {
        code: S.invalid_type,
        expected: T.undefined,
        received: r.parsedType
      }), L;
    }
    return we(t.data);
  }
}
vn.create = (e) => new vn({
  typeName: N.ZodUndefined,
  ...V(e)
});
class mn extends H {
  _parse(t) {
    if (this._getType(t) !== T.null) {
      const r = this._getOrReturnCtx(t);
      return k(r, {
        code: S.invalid_type,
        expected: T.null,
        received: r.parsedType
      }), L;
    }
    return we(t.data);
  }
}
mn.create = (e) => new mn({
  typeName: N.ZodNull,
  ...V(e)
});
class Sr extends H {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return we(t.data);
  }
}
Sr.create = (e) => new Sr({
  typeName: N.ZodAny,
  ...V(e)
});
class bt extends H {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return we(t.data);
  }
}
bt.create = (e) => new bt({
  typeName: N.ZodUnknown,
  ...V(e)
});
class ot extends H {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return k(n, {
      code: S.invalid_type,
      expected: T.never,
      received: n.parsedType
    }), L;
  }
}
ot.create = (e) => new ot({
  typeName: N.ZodNever,
  ...V(e)
});
class Rr extends H {
  _parse(t) {
    if (this._getType(t) !== T.undefined) {
      const r = this._getOrReturnCtx(t);
      return k(r, {
        code: S.invalid_type,
        expected: T.void,
        received: r.parsedType
      }), L;
    }
    return we(t.data);
  }
}
Rr.create = (e) => new Rr({
  typeName: N.ZodVoid,
  ...V(e)
});
class De extends H {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== T.array)
      return k(n, {
        code: S.invalid_type,
        expected: T.array,
        received: n.parsedType
      }), L;
    if (o.exactLength !== null) {
      const i = n.data.length > o.exactLength.value, a = n.data.length < o.exactLength.value;
      (i || a) && (k(n, {
        code: i ? S.too_big : S.too_small,
        minimum: a ? o.exactLength.value : void 0,
        maximum: i ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (k(n, {
      code: S.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (k(n, {
      code: S.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((i, a) => o.type._parseAsync(new ze(n, i, n.path, a)))).then((i) => xe.mergeArray(r, i));
    const s = [...n.data].map((i, a) => o.type._parseSync(new ze(n, i, n.path, a)));
    return xe.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new De({
      ...this._def,
      minLength: { value: t, message: P.toString(n) }
    });
  }
  max(t, n) {
    return new De({
      ...this._def,
      maxLength: { value: t, message: P.toString(n) }
    });
  }
  length(t, n) {
    return new De({
      ...this._def,
      exactLength: { value: t, message: P.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
De.create = (e, t) => new De({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: N.ZodArray,
  ...V(t)
});
function yt(e) {
  if (e instanceof ae) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = We.create(yt(r));
    }
    return new ae({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof De ? new De({
    ...e._def,
    type: yt(e.element)
  }) : e instanceof We ? We.create(yt(e.unwrap())) : e instanceof ht ? ht.create(yt(e.unwrap())) : e instanceof Ye ? Ye.create(e.items.map((t) => yt(t))) : e;
}
class ae extends H {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = U.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== T.object) {
      const u = this._getOrReturnCtx(t);
      return k(u, {
        code: S.invalid_type,
        expected: T.object,
        received: u.parsedType
      }), L;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: s, keys: i } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof ot && this._def.unknownKeys === "strip"))
      for (const u in o.data)
        i.includes(u) || a.push(u);
    const c = [];
    for (const u of i) {
      const d = s[u], v = o.data[u];
      c.push({
        key: { status: "valid", value: u },
        value: d._parse(new ze(o, v, o.path, u)),
        alwaysSet: u in o.data
      });
    }
    if (this._def.catchall instanceof ot) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const d of a)
          c.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: o.data[d] }
          });
      else if (u === "strict")
        a.length > 0 && (k(o, {
          code: S.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const d of a) {
        const v = o.data[d];
        c.push({
          key: { status: "valid", value: d },
          value: u._parse(
            new ze(o, v, o.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const d of c) {
        const v = await d.key, g = await d.value;
        u.push({
          key: v,
          value: g,
          alwaysSet: d.alwaysSet
        });
      }
      return u;
    }).then((u) => xe.mergeObjectSync(r, u)) : xe.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return P.errToObj, new ae({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, s, i, a;
          const c = (i = (s = (o = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(o, n, r).message) !== null && i !== void 0 ? i : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = P.errToObj(t).message) !== null && a !== void 0 ? a : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new ae({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ae({
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
    return new ae({
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
    return new ae({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: N.ZodObject
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
    return new ae({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return U.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new ae({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return U.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new ae({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return yt(this);
  }
  partial(t) {
    const n = {};
    return U.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new ae({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return U.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let s = this.shape[r];
        for (; s instanceof We; )
          s = s._def.innerType;
        n[r] = s;
      }
    }), new ae({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return ni(U.objectKeys(this.shape));
  }
}
ae.create = (e, t) => new ae({
  shape: () => e,
  unknownKeys: "strip",
  catchall: ot.create(),
  typeName: N.ZodObject,
  ...V(t)
});
ae.strictCreate = (e, t) => new ae({
  shape: () => e,
  unknownKeys: "strict",
  catchall: ot.create(),
  typeName: N.ZodObject,
  ...V(t)
});
ae.lazycreate = (e, t) => new ae({
  shape: e,
  unknownKeys: "strip",
  catchall: ot.create(),
  typeName: N.ZodObject,
  ...V(t)
});
class gn extends H {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(s) {
      for (const a of s)
        if (a.result.status === "valid")
          return a.result;
      for (const a of s)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((a) => new Ce(a.ctx.common.issues));
      return k(n, {
        code: S.invalid_union,
        unionErrors: i
      }), L;
    }
    if (n.common.async)
      return Promise.all(r.map(async (s) => {
        const i = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: n.data,
            path: n.path,
            parent: i
          }),
          ctx: i
        };
      })).then(o);
    {
      let s;
      const i = [];
      for (const c of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, d = c._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !s && (s = { result: d, ctx: u }), u.common.issues.length && i.push(u.common.issues);
      }
      if (s)
        return n.common.issues.push(...s.ctx.common.issues), s.result;
      const a = i.map((c) => new Ce(c));
      return k(n, {
        code: S.invalid_union,
        unionErrors: a
      }), L;
    }
  }
  get options() {
    return this._def.options;
  }
}
gn.create = (e, t) => new gn({
  options: e,
  typeName: N.ZodUnion,
  ...V(t)
});
const $e = (e) => e instanceof wn ? $e(e.schema) : e instanceof Ge ? $e(e.innerType()) : e instanceof _n ? [e.value] : e instanceof ft ? e.options : e instanceof bn ? U.objectValues(e.enum) : e instanceof Cn ? $e(e._def.innerType) : e instanceof vn ? [void 0] : e instanceof mn ? [null] : e instanceof We ? [void 0, ...$e(e.unwrap())] : e instanceof ht ? [null, ...$e(e.unwrap())] : e instanceof ri || e instanceof Rn ? $e(e.unwrap()) : e instanceof Sn ? $e(e._def.innerType) : [];
class Ur extends H {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== T.object)
      return k(n, {
        code: S.invalid_type,
        expected: T.object,
        received: n.parsedType
      }), L;
    const r = this.discriminator, o = n.data[r], s = this.optionsMap.get(o);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (k(n, {
      code: S.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), L);
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
    const o = /* @__PURE__ */ new Map();
    for (const s of n) {
      const i = $e(s.shape[t]);
      if (!i.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of i) {
        if (o.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        o.set(a, s);
      }
    }
    return new Ur({
      typeName: N.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...V(r)
    });
  }
}
function Er(e, t) {
  const n = lt(e), r = lt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === T.object && r === T.object) {
    const o = U.objectKeys(t), s = U.objectKeys(e).filter((a) => o.indexOf(a) !== -1), i = { ...e, ...t };
    for (const a of s) {
      const c = Er(e[a], t[a]);
      if (!c.valid)
        return { valid: !1 };
      i[a] = c.data;
    }
    return { valid: !0, data: i };
  } else if (n === T.array && r === T.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let s = 0; s < e.length; s++) {
      const i = e[s], a = t[s], c = Er(i, a);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else return n === T.date && r === T.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class xn extends H {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (s, i) => {
      if (Io(s) || Io(i))
        return L;
      const a = Er(s.value, i.value);
      return a.valid ? ((Lo(s) || Lo(i)) && n.dirty(), { status: n.value, value: a.data }) : (k(r, {
        code: S.invalid_intersection_types
      }), L);
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
    ]).then(([s, i]) => o(s, i)) : o(this._def.left._parseSync({
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
xn.create = (e, t, n) => new xn({
  left: e,
  right: t,
  typeName: N.ZodIntersection,
  ...V(n)
});
class Ye extends H {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== T.array)
      return k(r, {
        code: S.invalid_type,
        expected: T.array,
        received: r.parsedType
      }), L;
    if (r.data.length < this._def.items.length)
      return k(r, {
        code: S.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), L;
    !this._def.rest && r.data.length > this._def.items.length && (k(r, {
      code: S.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...r.data].map((i, a) => {
      const c = this._def.items[a] || this._def.rest;
      return c ? c._parse(new ze(r, i, r.path, a)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(s).then((i) => xe.mergeArray(n, i)) : xe.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Ye({
      ...this._def,
      rest: t
    });
  }
}
Ye.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ye({
    items: e,
    typeName: N.ZodTuple,
    rest: null,
    ...V(t)
  });
};
class yn extends H {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== T.object)
      return k(r, {
        code: S.invalid_type,
        expected: T.object,
        received: r.parsedType
      }), L;
    const o = [], s = this._def.keyType, i = this._def.valueType;
    for (const a in r.data)
      o.push({
        key: s._parse(new ze(r, a, r.path, a)),
        value: i._parse(new ze(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data
      });
    return r.common.async ? xe.mergeObjectAsync(n, o) : xe.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof H ? new yn({
      keyType: t,
      valueType: n,
      typeName: N.ZodRecord,
      ...V(r)
    }) : new yn({
      keyType: He.create(),
      valueType: t,
      typeName: N.ZodRecord,
      ...V(n)
    });
  }
}
class jr extends H {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== T.map)
      return k(r, {
        code: S.invalid_type,
        expected: T.map,
        received: r.parsedType
      }), L;
    const o = this._def.keyType, s = this._def.valueType, i = [...r.data.entries()].map(([a, c], u) => ({
      key: o._parse(new ze(r, a, r.path, [u, "key"])),
      value: s._parse(new ze(r, c, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of i) {
          const u = await c.key, d = await c.value;
          if (u.status === "aborted" || d.status === "aborted")
            return L;
          (u.status === "dirty" || d.status === "dirty") && n.dirty(), a.set(u.value, d.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const c of i) {
        const u = c.key, d = c.value;
        if (u.status === "aborted" || d.status === "aborted")
          return L;
        (u.status === "dirty" || d.status === "dirty") && n.dirty(), a.set(u.value, d.value);
      }
      return { status: n.value, value: a };
    }
  }
}
jr.create = (e, t, n) => new jr({
  valueType: t,
  keyType: e,
  typeName: N.ZodMap,
  ...V(n)
});
class Et extends H {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== T.set)
      return k(r, {
        code: S.invalid_type,
        expected: T.set,
        received: r.parsedType
      }), L;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (k(r, {
      code: S.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (k(r, {
      code: S.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const s = this._def.valueType;
    function i(c) {
      const u = /* @__PURE__ */ new Set();
      for (const d of c) {
        if (d.status === "aborted")
          return L;
        d.status === "dirty" && n.dirty(), u.add(d.value);
      }
      return { status: n.value, value: u };
    }
    const a = [...r.data.values()].map((c, u) => s._parse(new ze(r, c, r.path, u)));
    return r.common.async ? Promise.all(a).then((c) => i(c)) : i(a);
  }
  min(t, n) {
    return new Et({
      ...this._def,
      minSize: { value: t, message: P.toString(n) }
    });
  }
  max(t, n) {
    return new Et({
      ...this._def,
      maxSize: { value: t, message: P.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Et.create = (e, t) => new Et({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: N.ZodSet,
  ...V(t)
});
class Vt extends H {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== T.function)
      return k(n, {
        code: S.invalid_type,
        expected: T.function,
        received: n.parsedType
      }), L;
    function r(a, c) {
      return _r({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          wr(),
          $t
        ].filter((u) => !!u),
        issueData: {
          code: S.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(a, c) {
      return _r({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          wr(),
          $t
        ].filter((u) => !!u),
        issueData: {
          code: S.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const s = { errorMap: n.common.contextualErrorMap }, i = n.data;
    if (this._def.returns instanceof Wt) {
      const a = this;
      return we(async function(...c) {
        const u = new Ce([]), d = await a._def.args.parseAsync(c, s).catch((m) => {
          throw u.addIssue(r(c, m)), u;
        }), v = await Reflect.apply(i, this, d);
        return await a._def.returns._def.type.parseAsync(v, s).catch((m) => {
          throw u.addIssue(o(v, m)), u;
        });
      });
    } else {
      const a = this;
      return we(function(...c) {
        const u = a._def.args.safeParse(c, s);
        if (!u.success)
          throw new Ce([r(c, u.error)]);
        const d = Reflect.apply(i, this, u.data), v = a._def.returns.safeParse(d, s);
        if (!v.success)
          throw new Ce([o(d, v.error)]);
        return v.data;
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
    return new Vt({
      ...this._def,
      args: Ye.create(t).rest(bt.create())
    });
  }
  returns(t) {
    return new Vt({
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
    return new Vt({
      args: t || Ye.create([]).rest(bt.create()),
      returns: n || bt.create(),
      typeName: N.ZodFunction,
      ...V(r)
    });
  }
}
class wn extends H {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
wn.create = (e, t) => new wn({
  getter: e,
  typeName: N.ZodLazy,
  ...V(t)
});
class _n extends H {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return k(n, {
        received: n.data,
        code: S.invalid_literal,
        expected: this._def.value
      }), L;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
_n.create = (e, t) => new _n({
  value: e,
  typeName: N.ZodLiteral,
  ...V(t)
});
function ni(e, t) {
  return new ft({
    values: e,
    typeName: N.ZodEnum,
    ...V(t)
  });
}
class ft extends H {
  constructor() {
    super(...arguments), Lt.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return k(n, {
        expected: U.joinValues(r),
        received: n.parsedType,
        code: S.invalid_type
      }), L;
    }
    if (pn(this, Lt) || Qs(this, Lt, new Set(this._def.values)), !pn(this, Lt).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return k(n, {
        received: n.data,
        code: S.invalid_enum_value,
        options: r
      }), L;
    }
    return we(t.data);
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
    return ft.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return ft.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Lt = /* @__PURE__ */ new WeakMap();
ft.create = ni;
class bn extends H {
  constructor() {
    super(...arguments), Dt.set(this, void 0);
  }
  _parse(t) {
    const n = U.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== T.string && r.parsedType !== T.number) {
      const o = U.objectValues(n);
      return k(r, {
        expected: U.joinValues(o),
        received: r.parsedType,
        code: S.invalid_type
      }), L;
    }
    if (pn(this, Dt) || Qs(this, Dt, new Set(U.getValidEnumValues(this._def.values))), !pn(this, Dt).has(t.data)) {
      const o = U.objectValues(n);
      return k(r, {
        received: r.data,
        code: S.invalid_enum_value,
        options: o
      }), L;
    }
    return we(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Dt = /* @__PURE__ */ new WeakMap();
bn.create = (e, t) => new bn({
  values: e,
  typeName: N.ZodNativeEnum,
  ...V(t)
});
class Wt extends H {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== T.promise && n.common.async === !1)
      return k(n, {
        code: S.invalid_type,
        expected: T.promise,
        received: n.parsedType
      }), L;
    const r = n.parsedType === T.promise ? n.data : Promise.resolve(n.data);
    return we(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Wt.create = (e, t) => new Wt({
  type: e,
  typeName: N.ZodPromise,
  ...V(t)
});
class Ge extends H {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === N.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, s = {
      addIssue: (i) => {
        k(r, i), i.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), o.type === "preprocess") {
      const i = o.transform(r.data, s);
      if (r.common.async)
        return Promise.resolve(i).then(async (a) => {
          if (n.value === "aborted")
            return L;
          const c = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? L : c.status === "dirty" || n.value === "dirty" ? It(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return L;
        const a = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? L : a.status === "dirty" || n.value === "dirty" ? It(a.value) : a;
      }
    }
    if (o.type === "refinement") {
      const i = (a) => {
        const c = o.refinement(a, s);
        if (r.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? L : (a.status === "dirty" && n.dirty(), i(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? L : (a.status === "dirty" && n.dirty(), i(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!fn(i))
          return i;
        const a = o.transform(i.value, s);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => fn(i) ? Promise.resolve(o.transform(i.value, s)).then((a) => ({ status: n.value, value: a })) : i);
    U.assertNever(o);
  }
}
Ge.create = (e, t, n) => new Ge({
  schema: e,
  typeName: N.ZodEffects,
  effect: t,
  ...V(n)
});
Ge.createWithPreprocess = (e, t, n) => new Ge({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: N.ZodEffects,
  ...V(n)
});
class We extends H {
  _parse(t) {
    return this._getType(t) === T.undefined ? we(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
We.create = (e, t) => new We({
  innerType: e,
  typeName: N.ZodOptional,
  ...V(t)
});
class ht extends H {
  _parse(t) {
    return this._getType(t) === T.null ? we(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ht.create = (e, t) => new ht({
  innerType: e,
  typeName: N.ZodNullable,
  ...V(t)
});
class Cn extends H {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === T.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Cn.create = (e, t) => new Cn({
  innerType: e,
  typeName: N.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...V(t)
});
class Sn extends H {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, o = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return hn(o) ? o.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Ce(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Ce(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Sn.create = (e, t) => new Sn({
  innerType: e,
  typeName: N.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...V(t)
});
class kr extends H {
  _parse(t) {
    if (this._getType(t) !== T.nan) {
      const r = this._getOrReturnCtx(t);
      return k(r, {
        code: S.invalid_type,
        expected: T.nan,
        received: r.parsedType
      }), L;
    }
    return { status: "valid", value: t.data };
  }
}
kr.create = (e) => new kr({
  typeName: N.ZodNaN,
  ...V(e)
});
class ri extends H {
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
class Vn extends H {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? L : s.status === "dirty" ? (n.dirty(), It(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return o.status === "aborted" ? L : o.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: o.value
      }) : this._def.out._parseSync({
        data: o.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new Vn({
      in: t,
      out: n,
      typeName: N.ZodPipeline
    });
  }
}
class Rn extends H {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (o) => (fn(o) && (o.value = Object.freeze(o.value)), o);
    return hn(n) ? n.then((o) => r(o)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Rn.create = (e, t) => new Rn({
  innerType: e,
  typeName: N.ZodReadonly,
  ...V(t)
});
ae.lazycreate;
var N;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(N || (N = {}));
He.create;
St.create;
kr.create;
Rt.create;
br.create;
Ht.create;
Cr.create;
vn.create;
mn.create;
Sr.create;
bt.create;
ot.create;
Rr.create;
De.create;
ae.create;
ae.strictCreate;
gn.create;
Ur.create;
xn.create;
Ye.create;
yn.create;
jr.create;
Et.create;
Vt.create;
wn.create;
_n.create;
ft.create;
bn.create;
Wt.create;
Ge.create;
We.create;
ht.create;
Ge.createWithPreprocess;
Vn.create;
const oi = Pr(null);
function Zr() {
  const e = Ar(oi);
  return e || {};
}
function tf({
  children: e,
  value: t
}) {
  return /* @__PURE__ */ l.jsx(oi.Provider, { value: t, children: typeof e == "function" ? e(t) : e });
}
function si(e) {
  return e.includes("[]");
}
function nf(e, t) {
  const r = t.keyof().options.reduce(
    (o, s) => {
      if (e.has(s)) {
        const i = e.getAll(s);
        o[s] = i.length > 1 && si(s) ? i : i[0];
      }
      return o;
    },
    /* @__PURE__ */ Object.create(null)
  );
  return t.parse(r);
}
function rf(e) {
  return Array.from(e.keys()).reduce((n, r) => {
    if (e.has(r)) {
      const o = e.getAll(r);
      n[r] = o.length > 1 && si(r) ? o : o[0];
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function of(e, t) {
  let n = e;
  return typeof n != "string" ? null : (t != null && t.prefix && n.startsWith(t.prefix) && (n = n.slice(t.prefix.length)), t != null && t.suffix && n.endsWith(t.suffix) && (n = n.slice(0, -t.suffix.length)), n.charAt(0).toLowerCase() + n.slice(1));
}
const sf = (e) => sessionStorage.getItem(e), af = (e) => (window.addEventListener("storage", e), () => {
  window.removeEventListener("storage", e);
});
function lf(e, t) {
  sessionStorage.setItem(e, JSON.stringify(t)), window.dispatchEvent(new Event("storage"));
}
function Yf(e) {
  const t = Fi(
    af,
    sf.bind(null, e)
  );
  return JSON.parse(t);
}
function cf({
  children: e,
  name: t,
  method: n = "POST",
  onAction: r,
  schema: o,
  ...s
}) {
  const [i, a] = sn(), [c, u] = sn({}), d = r && typeof r == "function" && r.name !== "onAction" ? of(r.name, { prefix: "handle" }) : t || null;
  function v(m) {
    m.preventDefault();
    const w = new FormData(m.currentTarget);
    try {
      const p = o ? nf(w, o) : rf(w);
      if (r && typeof r == "function") {
        const x = r(m, p);
        if (x || u(p), x) {
          const [_, y] = x;
          _ && u(_), y && d && lf(d, _);
        }
      }
    } catch (p) {
      const x = d || t || "unknown";
      p instanceof Ce ? a({ [x]: p.flatten() }) : a({ [x]: "Unknown intent" });
    }
  }
  const g = $i(null);
  return /* @__PURE__ */ l.jsx(
    tf,
    {
      value: {
        name: t,
        data: c,
        ref: g,
        errors: i && (i == null ? void 0 : i[t])
      },
      children: /* @__PURE__ */ l.jsxs(
        "form",
        {
          method: n,
          onSubmit: v,
          noValidate: !0,
          className: "flex flex-col gap-4 items-stretch",
          ref: g,
          ...s,
          children: [
            t ? /* @__PURE__ */ l.jsx("input", { type: "hidden", name: "name", value: t }) : null,
            typeof e == "function" ? e({ errors: i, data: c }) : e
          ]
        }
      )
    }
  );
}
const Gf = Object.assign(cf, {
  // Success: FormSuccess,
  // Initial: FormInitial,
});
function uf({
  children: e,
  ...t
}) {
  const { name: n } = kn();
  return /* @__PURE__ */ l.jsx("label", { htmlFor: n, ...t, children: e });
}
function Yr({
  name: e,
  children: t,
  asChild: n = !1,
  className: r = "flex flex-col items-start gap-1"
}) {
  var i;
  const { errors: o } = Zr(), s = (i = o == null ? void 0 : o.fieldErrors) == null ? void 0 : i[e];
  return /* @__PURE__ */ l.jsx(bl, { value: { name: e, error: s }, children: /* @__PURE__ */ l.jsx(jn, { asChild: n, fallbackAs: "div", className: r, children: /* @__PURE__ */ l.jsx(l.Fragment, { children: t }) }) });
}
function Kf() {
  const { errors: e } = Zr();
  return !e || !e.formErrors ? null : /* @__PURE__ */ l.jsx("div", { className: "bg-red-600 text-white p-4 rounded-[9px]", children: (e == null ? void 0 : e.formErrors[0]) || "Errors" });
}
function Xf() {
  const { error: e } = kn(), t = e == null ? void 0 : e[0];
  return e ? /* @__PURE__ */ l.jsxs("div", { className: "text-17 inline-flex gap-2 mt-2 items-center bg-neutral-600 px-3 py-2 rounded-[7px]", children: [
    /* @__PURE__ */ l.jsx("span", { className: " flex-shrink-0 flex items-center justify-center h-[1.5rem]", children: /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Error" }) }),
    /* @__PURE__ */ l.jsx("span", { className: "text-white", children: t })
  ] }) : null;
}
function Jf({ message: e = "Success!" }) {
  const t = Zr();
  return !t || !t.success ? null : /* @__PURE__ */ l.jsx("div", { className: "bg-green-600 text-white px-6 py-4 rounded-[9px] text-18", children: e });
}
function Gr(e) {
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
function Qf(e) {
  const { name: t, children: n } = e, r = e.label || Gr(t);
  return /* @__PURE__ */ l.jsx(Yr, { name: t, children: n || /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Fo, { children: r }),
    /* @__PURE__ */ l.jsx(Bo, { subvariants: { width: "full" } })
  ] }) });
}
function e1(e) {
  const { name: t, children: n, options: r, defaultValue: o, ...s } = e, i = e.label || Gr(t);
  return /* @__PURE__ */ l.jsx(Yr, { name: t, children: n || /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Fo, { children: i }),
    /* @__PURE__ */ l.jsx(
      Dd,
      {
        defaultValue: o,
        options: r,
        ...s
      }
    )
  ] }) });
}
function t1(e) {
  const { address: t, onDisconnect: n } = e, r = e.name || "wallet-address", o = e.label || Gr(r);
  function s(i) {
    n && typeof n == "function" && n(i);
  }
  return /* @__PURE__ */ l.jsxs(Yr, { name: r, children: [
    /* @__PURE__ */ l.jsxs(uf, { children: [
      o,
      " "
    ] }),
    /* @__PURE__ */ l.jsxs(Gn, { subvariants: { width: "full" }, children: [
      /* @__PURE__ */ l.jsx(Gn.Segment, { subvariants: { pointer: "none" }, children: /* @__PURE__ */ l.jsx(ct, { name: "Wallet", width: "20" }) }),
      /* @__PURE__ */ l.jsx(
        Bo,
        {
          type: "text",
          defaultValue: t,
          variant: "transparent",
          subvariants: { width: "full" },
          readOnly: !0
        }
      ),
      /* @__PURE__ */ l.jsx(Gn.Segment, { children: /* @__PURE__ */ l.jsxs(
        Yi,
        {
          variant: "tiny",
          className: "self-center",
          onClick: s,
          children: [
            /* @__PURE__ */ l.jsx(ct, { name: "Signout", width: "16" }),
            "Disconnect"
          ]
        }
      ) })
    ] })
  ] });
}
function df({ to: e }) {
  return /* @__PURE__ */ l.jsx("div", { className: "text-14 font-medium mt-8", children: /* @__PURE__ */ l.jsxs("p", { children: [
    "Want to learn more? Read the",
    "  ",
    /* @__PURE__ */ l.jsx(
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
function ff({
  name: e,
  description: t
}) {
  return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-4 items-center  text-center", children: [
    /* @__PURE__ */ l.jsx(
      ct,
      {
        name: "SequenceBoilerplateLogo",
        alt: "Sequence Boilerplate",
        className: "mb-2",
        width: "276"
      }
    ),
    /* @__PURE__ */ l.jsx("h1", { className: "text-40 font-bold", children: e }),
    /* @__PURE__ */ l.jsx("p", { className: "text-14 font-bold", children: t })
  ] });
}
function hf(e, t) {
  return f.useReducer((n, r) => t[n][r] ?? n, e);
}
var Kr = (e) => {
  const { present: t, children: n } = e, r = pf(t), o = typeof n == "function" ? n({ present: r.isPresent }) : f.Children.only(n), s = fe(r.ref, vf(o));
  return typeof n == "function" || r.isPresent ? f.cloneElement(o, { ref: s }) : null;
};
Kr.displayName = "Presence";
function pf(e) {
  const [t, n] = f.useState(), r = f.useRef({}), o = f.useRef(e), s = f.useRef("none"), i = e ? "mounted" : "unmounted", [a, c] = hf(i, {
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
  return f.useEffect(() => {
    const u = tn(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), ge(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const g = s.current, m = tn(u);
      e ? c("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && g !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ge(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, v = (m) => {
        const p = tn(r.current).includes(m.animationName);
        if (m.target === t && p && (c("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, g = (m) => {
        m.target === t && (s.current = tn(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: f.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function tn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function vf(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var [zn, n1] = qo("Tooltip", [
  Mn
]), Bn = Mn(), ii = "TooltipProvider", mf = 700, Tr = "tooltip.open", [gf, Xr] = zn(ii), ai = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = mf,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, [i, a] = f.useState(!0), c = f.useRef(!1), u = f.useRef(0);
  return f.useEffect(() => {
    const d = u.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ l.jsx(
    gf,
    {
      scope: t,
      isOpenDelayed: i,
      delayDuration: n,
      onOpen: f.useCallback(() => {
        window.clearTimeout(u.current), a(!1);
      }, []),
      onClose: f.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => a(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: f.useCallback((d) => {
        c.current = d;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
ai.displayName = ii;
var Fn = "Tooltip", [xf, Yt] = zn(Fn), li = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, c = Xr(Fn, e.__scopeTooltip), u = Bn(t), [d, v] = f.useState(null), g = Tn(), m = f.useRef(0), w = i ?? c.disableHoverableContent, p = a ?? c.delayDuration, x = f.useRef(!1), [_ = !1, y] = fr({
    prop: r,
    defaultProp: o,
    onChange: (O) => {
      O ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Tr))) : c.onClose(), s == null || s(O);
    }
  }), b = f.useMemo(() => _ ? x.current ? "delayed-open" : "instant-open" : "closed", [_]), R = f.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, x.current = !1, y(!0);
  }, [y]), E = f.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, y(!1);
  }, [y]), A = f.useCallback(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      x.current = !0, y(!0), m.current = 0;
    }, p);
  }, [p, y]);
  return f.useEffect(() => () => {
    m.current && (window.clearTimeout(m.current), m.current = 0);
  }, []), /* @__PURE__ */ l.jsx(vs, { ...u, children: /* @__PURE__ */ l.jsx(
    xf,
    {
      scope: t,
      contentId: g,
      open: _,
      stateAttribute: b,
      trigger: d,
      onTriggerChange: v,
      onTriggerEnter: f.useCallback(() => {
        c.isOpenDelayed ? A() : R();
      }, [c.isOpenDelayed, A, R]),
      onTriggerLeave: f.useCallback(() => {
        w ? E() : (window.clearTimeout(m.current), m.current = 0);
      }, [E, w]),
      onOpen: R,
      onClose: E,
      disableHoverableContent: w,
      children: n
    }
  ) });
};
li.displayName = Fn;
var Or = "TooltipTrigger", ci = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Yt(Or, n), s = Xr(Or, n), i = Bn(n), a = f.useRef(null), c = fe(t, a, o.onTriggerChange), u = f.useRef(!1), d = f.useRef(!1), v = f.useCallback(() => u.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), /* @__PURE__ */ l.jsx(ms, { asChild: !0, ...i, children: /* @__PURE__ */ l.jsx(
      ce.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: ie(e.onPointerMove, (g) => {
          g.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: ie(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: ie(e.onPointerDown, () => {
          u.current = !0, document.addEventListener("pointerup", v, { once: !0 });
        }),
        onFocus: ie(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: ie(e.onBlur, o.onClose),
        onClick: ie(e.onClick, o.onClose)
      }
    ) });
  }
);
ci.displayName = Or;
var Jr = "TooltipPortal", [yf, wf] = zn(Jr, {
  forceMount: void 0
}), ui = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = Yt(Jr, t);
  return /* @__PURE__ */ l.jsx(yf, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(Kr, { present: n || s.open, children: /* @__PURE__ */ l.jsx(Hr, { asChild: !0, container: o, children: r }) }) });
};
ui.displayName = Jr;
var jt = "TooltipContent", di = f.forwardRef(
  (e, t) => {
    const n = wf(jt, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = Yt(jt, e.__scopeTooltip);
    return /* @__PURE__ */ l.jsx(Kr, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ l.jsx(fi, { side: o, ...s, ref: t }) : /* @__PURE__ */ l.jsx(_f, { side: o, ...s, ref: t }) });
  }
), _f = f.forwardRef((e, t) => {
  const n = Yt(jt, e.__scopeTooltip), r = Xr(jt, e.__scopeTooltip), o = f.useRef(null), s = fe(t, o), [i, a] = f.useState(null), { trigger: c, onClose: u } = n, d = o.current, { onPointerInTransitChange: v } = r, g = f.useCallback(() => {
    a(null), v(!1);
  }, [v]), m = f.useCallback(
    (w, p) => {
      const x = w.currentTarget, _ = { x: w.clientX, y: w.clientY }, y = Sf(_, x.getBoundingClientRect()), b = Rf(_, y), R = Ef(p.getBoundingClientRect()), E = kf([...b, ...R]);
      a(E), v(!0);
    },
    [v]
  );
  return f.useEffect(() => () => g(), [g]), f.useEffect(() => {
    if (c && d) {
      const w = (x) => m(x, d), p = (x) => m(x, c);
      return c.addEventListener("pointerleave", w), d.addEventListener("pointerleave", p), () => {
        c.removeEventListener("pointerleave", w), d.removeEventListener("pointerleave", p);
      };
    }
  }, [c, d, m, g]), f.useEffect(() => {
    if (i) {
      const w = (p) => {
        const x = p.target, _ = { x: p.clientX, y: p.clientY }, y = (c == null ? void 0 : c.contains(x)) || (d == null ? void 0 : d.contains(x)), b = !jf(_, i);
        y ? g() : b && (g(), u());
      };
      return document.addEventListener("pointermove", w), () => document.removeEventListener("pointermove", w);
    }
  }, [c, d, i, u, g]), /* @__PURE__ */ l.jsx(fi, { ...e, ref: s });
}), [bf, Cf] = zn(Fn, { isInside: !1 }), fi = f.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, c = Yt(jt, n), u = Bn(n), { onClose: d } = c;
    return f.useEffect(() => (document.addEventListener(Tr, d), () => document.removeEventListener(Tr, d)), [d]), f.useEffect(() => {
      if (c.trigger) {
        const v = (g) => {
          const m = g.target;
          m != null && m.contains(c.trigger) && d();
        };
        return window.addEventListener("scroll", v, { capture: !0 }), () => window.removeEventListener("scroll", v, { capture: !0 });
      }
    }, [c.trigger, d]), /* @__PURE__ */ l.jsx(
      Mr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ l.jsxs(
          gs,
          {
            "data-state": c.stateAttribute,
            ...u,
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
              /* @__PURE__ */ l.jsx(Wo, { children: r }),
              /* @__PURE__ */ l.jsx(bf, { scope: n, isInside: !0, children: /* @__PURE__ */ l.jsx(fu, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
di.displayName = jt;
var hi = "TooltipArrow", pi = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Bn(n);
    return Cf(
      hi,
      n
    ).isInside ? null : /* @__PURE__ */ l.jsx(xs, { ...o, ...r, ref: t });
  }
);
pi.displayName = hi;
function Sf(e, t) {
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
function Rf(e, t, n = 5) {
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
function Ef(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function jf(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x, c = t[s].y, u = t[i].x, d = t[i].y;
    c > r != d > r && n < (u - a) * (r - c) / (d - c) + a && (o = !o);
  }
  return o;
}
function kf(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Tf(t);
}
function Tf(e) {
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
var Of = ai, Pf = li, Af = ci, Mf = ui, Nf = di, If = pi;
function Lf({ to: e }) {
  return e ? /* @__PURE__ */ l.jsx(Of, { delayDuration: 100, children: /* @__PURE__ */ l.jsxs(Pf, { children: [
    /* @__PURE__ */ l.jsx(Af, { className: "github-corner", asChild: !0, children: /* @__PURE__ */ l.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ l.jsxs(
      "svg",
      {
        width: "80",
        height: "80",
        viewBox: "0 0 250 250",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ l.jsx("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
              fill: "currentColor",
              className: "octo-arm"
            }
          ),
          /* @__PURE__ */ l.jsx(
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
    /* @__PURE__ */ l.jsx(Mf, { children: /* @__PURE__ */ l.jsxs(
      Nf,
      {
        side: "right",
        className: "bg-white rounded-md text-black text-14 px-2 py-0.5",
        children: [
          "View source on GitHub",
          /* @__PURE__ */ l.jsx(If, {})
        ]
      }
    ) })
  ] }) }) : null;
}
const vi = Pr(null);
function Df() {
  const e = Ar(vi);
  if (!e)
    throw new Error(
      "useSequenceDemoKit must be used within a SequenceBoilerplateProvider"
    );
  return e;
}
function Vf(e) {
  const { variant: t, subvariants: n, children: r, ...o } = e;
  return /* @__PURE__ */ l.jsx("div", { ...Ae("root", t, n), ...o, children: r });
}
const zf = "https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/";
function Bf({
  name: e,
  description: t,
  githubUrl: n,
  docsUrl: r,
  useAuth: o,
  children: s
}) {
  return /* @__PURE__ */ l.jsx(
    vi.Provider,
    {
      value: {
        githubUrl: n,
        docsUrl: r || zf,
        name: e,
        description: t,
        useAuth: o
      },
      children: s
    }
  );
}
function r1(e) {
  const { children: t } = e;
  return /* @__PURE__ */ l.jsx(Bf, { ...e, children: /* @__PURE__ */ l.jsx(Ff, { children: t }) });
}
function Ff({ children: e }) {
  const { name: t, description: n, githubUrl: r, docsUrl: o } = Df();
  return /* @__PURE__ */ l.jsxs(Vf, { children: [
    /* @__PURE__ */ l.jsx(Lf, { to: r }),
    /* @__PURE__ */ l.jsx(ff, { name: t, description: n }),
    /* @__PURE__ */ l.jsx("div", { className: "py-8", children: e }),
    /* @__PURE__ */ l.jsx(df, { to: o })
  ] });
}
export {
  Yi as Button,
  Wf as Card,
  qf as Divider,
  Yr as Field,
  Xf as FieldError,
  df as Footer,
  Gf as Form,
  Kf as FormErrors,
  Jf as FormSuccess,
  Lf as GithubCorner,
  Uf as Group,
  ff as Header,
  Bo as Input,
  e1 as InputSelect,
  Qf as InputText,
  Fo as Label,
  Gn as SegmentedInput,
  Dd as Select,
  r1 as SequenceBoilerplate,
  Bf as SequenceBoilerplateProvider,
  Vf as SequenceBoilerplateRoot,
  t1 as ShowAddressWithDisconnect,
  ct as Svg,
  rf as createFormObjectWithoutValidation,
  lf as setStoreData,
  Df as useSequenceBoilerplate,
  Yf as useStoreData,
  nf as validateAndCreateFormObjectOrThrow
};
