/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , y = n.hasOwnProperty
      , a = y.toString
      , l = a.call(Object)
      , v = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , S = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || S).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.3"
      , E = function(e, t) {
        return new E.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: v
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, S, y, s, c, v, E = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function(e, t) {
            return e === t && (l = !0),
            0
        }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", $ = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            S)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = E)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        if (d.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))"))
                            throw new Error;
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === E && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[E] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ye(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            S = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.cssSupportsSelector = ce(function() {
                return CSS.supports("selector(*)") && C.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = E,
                !C.getElementsByName || !C.getElementsByName(E).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && S) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && S) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && S)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            y = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || y.push(":checked"),
                e.querySelectorAll("a#" + E + "+*").length || y.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                y.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            d.cssSupportsSelector || y.push(":has"),
            y = y.length && new RegExp(y.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            v = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType && e.documentElement || e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            j = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && S && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            v(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
            return void 0 !== r ? r : d.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(j),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, y) {
                    var v = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === y ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (v) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= y) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[E] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace(B, "$1"));
                    return s[E] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ye(function() {
                    return [0]
                }),
                last: ye(function(e, t) {
                    return [t - 1]
                }),
                eq: ye(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ye(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ye(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ye(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ye(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, y, v, e) {
            return y && !y[E] && (y = Ce(y)),
            v && !v[E] && (v = Ce(v, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? v || (e ? d : l || y) ? [] : t : f;
                if (g && g(f, p, n, r),
                y) {
                    i = Te(p, u),
                    y(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (v || d) {
                        if (v) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    v ? v(null, t, p, r) : H.apply(t, p)
            })
        }
        function Se(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Se(e.slice(s, n)), n < r && Se(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, y, v, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Se(t[n]))[E] ? i.push(a) : o.push(a);
                (a = A(e, (y = o,
                m = 0 < (v = i).length,
                x = 0 < y.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !S);
                            while (s = y[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = v[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && S && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !S, n, !t || ee.test(e) && ve(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = E.split("").sort(j).join("") === E,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    E.find = d,
    E.expr = d.selectors,
    E.expr[":"] = E.expr.pseudos,
    E.uniqueSort = E.unique = d.uniqueSort,
    E.text = d.getText,
    E.isXMLDoc = d.isXML,
    E.contains = d.contains,
    E.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && E(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = E.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    E.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (E.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || D,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t,
                E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)),
                N.test(r[1]) && E.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = S.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }
    ).prototype = E.fn,
    D = E(S);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && E(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            E.merge([], e.childNodes))
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length && (H[r] || E.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        E.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : E.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    E.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return E.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = E.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    E.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return E.Deferred(function(r) {
                        E.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return E.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? E.extend(e, a) : a
                }
            }
              , s = {};
            return E.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = E.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    E.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = E.Deferred();
    function $() {
        S.removeEventListener("DOMContentLoaded", $),
        C.removeEventListener("load", $),
        E.ready()
    }
    E.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            E.readyException(e)
        }),
        this
    }
    ,
    E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || F.resolveWith(S, [E])
        }
    }),
    E.ready.then = F.then,
    "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(E.ready) : (S.addEventListener("DOMContentLoaded", $),
    C.addEventListener("load", $));
    var B = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                B(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(E(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = E.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    E.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : B(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    E.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                E.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = E.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = S.documentElement
      , ie = function(e) {
        return E.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return E.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"), c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                E.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            E.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = E.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    E.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = S.createDocumentFragment().appendChild(S.createElement("div")),
    (fe = S.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    v.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? E.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    E.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    E.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < E.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ye(f.appendChild(o), "script"),
            l && ve(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function Te() {
        return !1
    }
    function Ce(e, t) {
        return e === function() {
            try {
                return S.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Se(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Te;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return E().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = E.guid++)),
        e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }
    function Ee(e, i, o) {
        o ? (Y.set(e, i, !1),
        E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && E.event.add(e, i, we)
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && E.find.matchesSelector(re, i),
                n.guid || (n.guid = E.guid++),
                (u = y.events) || (u = y.events = Object.create(null)),
                (a = y.handle) || (a = y.handle = function(e) {
                    return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = be.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = E.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = E.event.special[d] || {},
                    c = E.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    E.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = E.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || E.removeEvent(e, d, y.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = E.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = E.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = E.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    E.Event = function(e, t) {
        if (!(this instanceof E.Event))
            return new E.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && E.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[E.expando] = !0
    }
    ,
    E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp),
    E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        E.event.special[t] = {
            setup: function() {
                return Ee(this, t, Ce),
                !1
            },
            trigger: function() {
                return Ee(this, t),
                !0
            },
            _default: function(e) {
                return Y.get(e.target, t)
            },
            delegateType: e
        }
    }),
    E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    E.fn.extend({
        on: function(e, t, n, r) {
            return Se(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Se(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Te),
            this.each(function() {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        E.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = E.extend({}, o),
            Q.set(t, a))
        }
    }
    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                He(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = E.map(ye(e, "script"), De)).length; c < f; c++)
                u = e,
                c !== p && (u = E.clone(u, !0, !0),
                s && E.merge(a, ye(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                E.map(a, qe),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }
    function Oe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || E.cleanData(ye(r)),
            r.parentNode && (n && ie(r) && ve(ye(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = ye(c),
                r = 0,
                i = (o = ye(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ye(e),
                    a = a || ye(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Le(o[r], a[r]);
                else
                    Le(e, c);
            return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    E.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (E.cleanData(ye(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (E.cleanData(ye(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ye(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                E(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Re = /^--/
      , Me = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Ie = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , We = new RegExp(ne.join("|"),"i")
      , Fe = "[\\x20\\t\\r\\n\\f]"
      , $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$","g");
    function Be(e, t, n) {
        var r, i, o, a, s = Re.test(t), u = e.style;
        return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t],
        s && a && (a = a.replace($e, "$1") || void 0),
        "" !== a || ie(e) || (a = E.style(e, t)),
        !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width,
        i = u.minWidth,
        o = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = a,
        a = n.width,
        u.width = r,
        u.minWidth = i,
        u.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function _e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = S.createElement("div"), l = S.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        v.clearCloneStyle = "content-box" === l.style.backgroundClip,
        E.extend(v, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = S.createElement("table"),
                t = S.createElement("tr"),
                n = S.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                t.style.cssText = "border:1px solid",
                t.style.height = "1px",
                n.style.height = "9px",
                n.style.display = "block",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                re.removeChild(e)),
                a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"]
      , Ue = S.createElement("div").style
      , Xe = {};
    function Ve(e) {
        var t = E.cssProps[e] || Xe[e];
        return t || (e in Ue ? e : Xe[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = ze.length;
            while (n--)
                if ((e = ze[n] + t)in Ue)
                    return e
        }(e) || e)
    }
    var Ge = /^(none|table(?!-c[ea]).+)/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += E.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Me(e)
          , i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Re.test(t), l = e.style;
                if (u || (t = Ve(s)),
                a = E.cssHooks[t] || E.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")),
                v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Re.test(t) || (t = Ve(s)),
            (a = E.cssHooks[t] || E.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    E.each(["height", "width"], function(e, u) {
        E.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function() {
                        return Ze(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Me(e), o = !v.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = E.css(e, u)),
                Je(0, t, s)
            }
        }
    }),
    E.cssHooks.marginLeft = _e(v.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (E.cssHooks[i + o].set = Je)
    }),
    E.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((E.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || E.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    E.fx = et.prototype.init,
    E.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, E.fx.interval),
        E.fx.tick())
    }
    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }),
        tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = E.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: E.extend({}, e),
            opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = E.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return E.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        E.fx.timer(E.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    E.Animation = E.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    E.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ot.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !y || void 0 === y[r])
                            continue;
                        g = !0
                    }
                    d[r] = y && y[r] || E.style(e, r)
                }
            if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = y && y.display) && (l = Y.get(e, "display")),
                "none" === (c = E.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = E.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (y ? "hidden"in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (y.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            E.style(e, r, d[r])
                    })),
                    u = ct(g ? y[r] : 0, r, p),
                    r in y || (y[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    E.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && E.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    E.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = E.isEmptyObject(t)
              , o = E.speed(e, n, r)
              , a = function() {
                var e = ft(this, E.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = E.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = E.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                E.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    E.each(["toggle", "show", "hide"], function(e, r) {
        var i = E.fn[r];
        E.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }),
    E.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    E.timers = [],
    E.fx.tick = function() {
        var e, t = 0, n = E.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(),
        tt = void 0
    }
    ,
    E.fx.timer = function(e) {
        E.timers.push(e),
        E.fx.start()
    }
    ,
    E.fx.interval = 13,
    E.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    E.fx.stop = function() {
        nt = null
    }
    ,
    E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    rt = S.createElement("input"),
    it = S.createElement("select").appendChild(S.createElement("option")),
    rt.type = "checkbox",
    v.checkOn = "" !== rt.value,
    v.optSelected = it.selected,
    (rt = S.createElement("input")).value = "t",
    rt.type = "radio",
    v.radioValue = "t" === rt.value;
    var pt, dt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return B(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }),
    E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || E.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o],
            dt[o] = r,
            r = null != a(e, t, n) ? o : null,
            dt[o] = i),
            r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function yt(e) {
        return (e.match(P) || []).join(" ")
    }
    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return B(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }),
    E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                i = E.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    v.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }),
    E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function(e) {
                E(this).addClass(t.call(this, e, vt(this)))
            }) : (e = mt(t)).length ? this.each(function() {
                if (r = vt(this),
                n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++)
                        i = e[o],
                        n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = yt(n),
                    r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function(e) {
                E(this).removeClass(t.call(this, e, vt(this)))
            }) : arguments.length ? (e = mt(t)).length ? this.each(function() {
                if (r = vt(this),
                n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " "))
                            n = n.replace(" " + i + " ", " ")
                    }
                    a = yt(n),
                    r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t);
            return m(t) ? this.each(function(e) {
                E(this).toggleClass(t.call(this, e, vt(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t),
            this.each(function() {
                if (s)
                    for (o = E(this),
                    i = 0; i < e.length; i++)
                        r = e[i],
                        o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                    void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r),
                    this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : yt(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = E.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        },
        v.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    v.focusin = "onfocusin"in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || S], d = y.call(e, "type") ? e.type : e, h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || S,
            3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[E.expando] ? e : new E.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : E.makeArray(t, [e]),
            c = E.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || S) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                E.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                E.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }),
    E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return E.event.trigger(e, t, n, !0)
        }
    }),
    v.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var Tt = C.location
      , Ct = {
        guid: Date.now()
    }
      , St = /\?/;
    E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var Et = /\[\]$/
      , kt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            E.each(e, function(e, t) {
                r || Et.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                jt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
            E.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                jt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = S.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function $t(t, i, o, a) {
        var s = {}
          , u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0,
            E.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Bt(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r),
        e
    }
    Wt.href = Tt.href,
    E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, E.ajaxSettings), t) : Bt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, y = E.ajaxSetup({}, t), v = y.context || y, m = y.context && (v.nodeType || v.jquery) ? E(v) : E.event, x = E.Deferred(), b = E.Callbacks("once memory"), w = y.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Ht.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (y.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            y.type = t.method || t.type || y.method || y.type,
            y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""],
            null == y.crossDomain) {
                r = S.createElement("a");
                try {
                    r.href = y.url,
                    r.href = r.href,
                    y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    y.crossDomain = !0
                }
            }
            if (y.data && y.processData && "string" != typeof y.data && (y.data = E.param(y.data, y.traditional)),
            $t(Rt, y, t, T),
            h)
                return T;
            for (i in (g = E.event && y.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
            y.type = y.type.toUpperCase(),
            y.hasContent = !Ot.test(y.type),
            f = y.url.replace(qt, ""),
            y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length),
            y.data && (y.processData || "string" == typeof y.data) && (f += (St.test(f) ? "&" : "?") + y.data,
            delete y.data),
            !1 === y.cache && (f = f.replace(Lt, "$1"),
            o = (St.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
            y.url = f + o),
            y.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]),
            E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])),
            (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType),
            T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]),
            y.headers)
                T.setRequestHeader(i, y.headers[i]);
            if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
                return T.abort();
            if (u = "abort",
            b.add(y.complete),
            T.done(y.success),
            T.fail(y.error),
            c = $t(Mt, y, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, y]),
                h)
                    return T;
                y.async && 0 < y.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, y.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(y, T, n)),
                !i && -1 < E.inArray("script", y.dataTypes) && E.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(y, s, T, i),
                i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (E.etag[f] = u)),
                204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
                b.fireWith(v, [T, l]),
                g && (m.trigger("ajaxComplete", [T, y]),
                --E.active || E.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }),
    E.each(["get", "post"], function(e, i) {
        E[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }),
    E.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    E._evalUrl = function(e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t, n)
            }
        })
    }
    ,
    E.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = E(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }
    ,
    E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    E.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , zt = E.ajaxSettings.xhr();
    v.cors = !!zt && "withCredentials"in zt,
    v.ajax = zt = !!zt,
    E.ajaxTransport(function(i) {
        var o, a;
        if (v.cors || zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e),
                e
            }
        }
    }),
    E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    E.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = E("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    S.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || E.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || E.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? E(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    v.createHTMLDocument = ((Ut = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ut.childNodes.length),
    E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (v.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href,
        t.head.appendChild(r)) : t = S),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && E(o).remove(),
        E.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    E.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = yt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"), c = E(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = E.css(e, "top"),
            u = E.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, E.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    E.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    E.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === E.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0),
                    i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === E.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = _e(v.pixelPosition, function(e, t) {
            if (t)
                return t = Be(e, n),
                Pe.test(t) ? E(e).position()[n] + "px" : t
        })
    }),
    E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    E.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || E.guid++,
            i
    }
    ,
    E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }
    ,
    E.isArray = Array.isArray,
    E.parseJSON = JSON.parse,
    E.nodeName = A,
    E.isFunction = m,
    E.isWindow = x,
    E.camelCase = X,
    E.type = w,
    E.now = Date.now,
    E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    E.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var Yt = C.jQuery
      , Qt = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = Qt),
        e && C.jQuery === E && (C.jQuery = Yt),
        E
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = E),
    E
});
/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function(s, n) {
    "use strict";
    function e(e) {
        return 0 <= function(e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                if (+n[a] > +o[a])
                    return 1;
                if (+n[a] < +o[a])
                    return -1
            }
            return 0
        }(s.fn.jquery, e)
    }
    s.migrateVersion = "3.4.0";
    var t = Object.create(null)
      , o = (s.migrateDisablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            t[arguments[e]] = !0
    }
    ,
    s.migrateEnablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            delete t[arguments[e]]
    }
    ,
    s.migrateIsPatchEnabled = function(e) {
        return !t[e]
    }
    ,
    n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
    s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
    n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion)),
    {});
    function i(e, t) {
        var r = n.console;
        !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0,
        s.migrateWarnings.push(t + " [" + e + "]"),
        r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t),
        s.migrateTrace && r.trace && r.trace()))
    }
    function r(e, t, r, n, o) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return i(n, o),
                r
            },
            set: function(e) {
                i(n, o),
                r = e
            }
        })
    }
    function a(e, t, r, n, o) {
        var a = e[t];
        e[t] = function() {
            return o && i(n, o),
            (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        }
    }
    function u(e, t, r, n, o) {
        if (!o)
            throw new Error("No warning message provided");
        a(e, t, r, n, o)
    }
    function d(e, t, r, n) {
        a(e, t, r, n)
    }
    s.migrateDeduplicateWarnings = !0,
    s.migrateWarnings = [],
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    s.migrateReset = function() {
        o = {},
        s.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === n.document.compatMode && i("quirks", "jQuery is not compatible with Quirks Mode");
    var c, l, p, f = {}, m = s.fn.init, y = s.find, h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (c in d(s.fn, "init", function(e) {
        var t = Array.prototype.slice.call(arguments);
        return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (i("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
        t[0] = []),
        m.apply(this, t)
    }, "selector-empty-id"),
    s.fn.init.prototype = s.fn,
    d(s, "find", function(t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
            try {
                n.document.querySelector(t)
            } catch (e) {
                t = t.replace(g, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]'
                });
                try {
                    n.document.querySelector(t),
                    i("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]),
                    r[0] = t
                } catch (e) {
                    i("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                }
            }
        return y.apply(this, r)
    }, "selector-hash"),
    y)
        Object.prototype.hasOwnProperty.call(y, c) && (s.find[c] = y[c]);
    u(s.fn, "size", function() {
        return this.length
    }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"),
    u(s, "parseJSON", function() {
        return JSON.parse.apply(null, arguments)
    }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"),
    u(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"),
    u(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
    e("3.1.1") && u(s, "trim", function(e) {
        return null == e ? "" : (e + "").replace(v, "")
    }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"),
    e("3.2.0") && (u(s, "nodeName", function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "nodeName", "jQuery.nodeName is deprecated"),
    u(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")),
    e("3.3.0") && (u(s, "isNumeric", function(e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "isNumeric", "jQuery.isNumeric() is deprecated"),
    s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }),
    u(s, "type", function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "type", "jQuery.type is deprecated"),
    u(s, "isFunction", function(e) {
        return "function" == typeof e
    }, "isFunction", "jQuery.isFunction() is deprecated"),
    u(s, "isWindow", function(e) {
        return null != e && e === e.window
    }, "isWindow", "jQuery.isWindow() is deprecated")),
    s.ajax && (l = s.ajax,
    p = /(=)\?(?=&|$)|\?\?/,
    d(s, "ajax", function() {
        var e = l.apply(this, arguments);
        return e.promise && (u(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"),
        u(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"),
        u(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")),
        e
    }, "jqXHR-methods"),
    e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
        !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && i("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
    }));
    var j = s.fn.removeAttr
      , b = s.fn.toggleClass
      , w = /\S+/g;
    function Q(e) {
        return e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    d(s.fn, "removeAttr", function(e) {
        var r = this;
        return s.each(e.match(w), function(e, t) {
            s.expr.match.bool.test(t) && (i("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1))
        }),
        j.apply(this, arguments)
    }, "removeAttr-bool"),
    d(s.fn, "toggleClass", function(t) {
        return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (i("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e),
            this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
        }))
    }, "toggleClass-bool");
    var x, A = !1, R = /^[a-z]/, T = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function() {
            var e;
            return A = !0,
            e = r.apply(this, arguments),
            A = !1,
            e
        }
        )
    }),
    d(s, "swap", function(e, t, r, n) {
        var o, a = {};
        for (o in A || i("swap", "jQuery.swap() is undocumented and deprecated"),
        t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = r.apply(e, n || []),
        t)
            e.style[o] = a[o];
        return r
    }, "swap"),
    e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {},{
        set: function() {
            return i("cssProps", "jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    e("4.0.0") && "undefined" != typeof Proxy && (s.cssNumber = new Proxy({
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },{
        get: function() {
            return i("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.get.apply(this, arguments)
        },
        set: function() {
            return i("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    x = s.fn.css,
    d(s.fn, "css", function(e, t) {
        var r, n = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
            s.fn.css.call(n, e, t)
        }),
        this) : ("number" == typeof t && (t = Q(e),
        r = t,
        R.test(r) && T.test(r[0].toUpperCase() + r.slice(1)) || s.cssNumber[t] || i("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
        x.apply(this, arguments))
    }, "css-number");
    function C(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e,
        t.body && t.body.innerHTML
    }
    var S, N, P, k, H, E, M, q = s.data, D = (d(s, "data", function(e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (a in n = s.hasData(e) && q.call(this, e),
            o = {},
            t)
                a !== Q(a) ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a),
                n[a] = t[a]) : o[a] = t[a];
            return q.call(this, e, o),
            t
        }
        return t && "string" == typeof t && t !== Q(t) && (n = s.hasData(e) && q.call(this, e)) && t in n ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t),
        2 < arguments.length && (n[t] = r),
        n[t]) : q.apply(this, arguments)
    }, "data-camelCase"),
    s.fx && (P = s.Tween.prototype.run,
    k = function(e) {
        return e
    }
    ,
    d(s.Tween.prototype, "run", function() {
        1 < s.easing[this.easing].length && (i("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        s.easing[this.easing] = k),
        P.apply(this, arguments)
    }, "easing-one-arg"),
    S = s.fx.interval,
    N = "jQuery.fx.interval is deprecated",
    n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n.document.hidden || i("fx-interval", N),
            s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
        },
        set: function(e) {
            i("fx-interval", N),
            S = e
        }
    })),
    s.fn.load), F = s.event.add, W = s.event.fix, O = (s.event.props = [],
    s.event.fixHooks = {},
    r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"),
    d(s.event, "fix", function(e) {
        var t = e.type
          , r = this.fixHooks[t]
          , n = s.event.props;
        if (n.length) {
            i("event-old-patch", "jQuery.event.props are deprecated and removed: " + n.join());
            while (n.length)
                s.event.addProp(n.pop())
        }
        if (r && !r._migrated_ && (r._migrated_ = !0,
        i("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + t),
        (n = r.props) && n.length))
            while (n.length)
                s.event.addProp(n.pop());
        return t = W.call(this, e),
        r && r.filter ? r.filter(t, e) : t
    }, "event-old-patch"),
    d(s.event, "add", function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && i("load-after-event", "jQuery(window).on('load'...) called after load event occurred"),
        F.apply(this, arguments)
    }, "load-after-event"),
    s.each(["load", "unload", "error"], function(e, t) {
        d(s.fn, t, function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? D.apply(this, e) : (i("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this))
        }, "shorthand-removed-v3")
    }),
    s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        u(s.fn, r, function(e, t) {
            return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
    }),
    s(function() {
        s(n.document).triggerHandler("ready")
    }),
    s.event.special.ready = {
        setup: function() {
            this === n.document && i("ready-event", "'ready' event is deprecated")
        }
    },
    u(s.fn, "bind", function(e, t, r) {
        return this.on(e, null, t, r)
    }, "pre-on-methods", "jQuery.fn.bind() is deprecated"),
    u(s.fn, "unbind", function(e, t) {
        return this.off(e, null, t)
    }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"),
    u(s.fn, "delegate", function(e, t, r, n) {
        return this.on(t, e, r, n)
    }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"),
    u(s.fn, "undelegate", function(e, t, r) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
    }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"),
    u(s.fn, "hover", function(e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }, "pre-on-methods", "jQuery.fn.hover() is deprecated"),
    /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi), _ = (s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
        s.migrateEnablePatches("self-closed-tags")
    }
    ,
    d(s, "htmlPrefilter", function(e) {
        var t, r;
        return (r = (t = e).replace(O, "<$1></$2>")) !== t && C(t) !== C(r) && i("self-closed-tags", "HTML tags must be properly nested and closed: " + t),
        e.replace(O, "<$1></$2>")
    }, "self-closed-tags"),
    s.migrateDisablePatches("self-closed-tags"),
    s.fn.offset);
    return d(s.fn, "offset", function() {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (i("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"),
        arguments.length ? this : void 0)
    }, "offset-valid-elem"),
    s.ajax && (H = s.param,
    d(s, "param", function(e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (i("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        t = r),
        H.call(this, e, t)
    }, "param-ajax-traditional")),
    u(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
    s.Deferred && (E = s.Deferred,
    M = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]],
    d(s, "Deferred", function(e) {
        var a = E()
          , i = a.promise();
        function t() {
            var o = arguments;
            return s.Deferred(function(n) {
                s.each(M, function(e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                    })
                }),
                o = null
            }).promise()
        }
        return u(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        u(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        e && e.call(a, a),
        a
    }, "deferred-pipe"),
    s.Deferred.exceptionHook = E.exceptionHook),
    s
});
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        var $ = require('jquery');
        factory($);
        module.exports = $;
    } else {
        factory(jQuery);
    }
}
)(function($) {
    function CircleProgress(config) {
        this.init(config);
    }
    CircleProgress.prototype = {
        value: 0.0,
        size: 100.0,
        startAngle: -Math.PI,
        thickness: 'auto',
        fill: {
            gradient: ['#3aeabb', '#fdd250']
        },
        emptyFill: 'rgba(0, 0, 0, .1)',
        animation: {
            duration: 1200,
            easing: 'circleProgressEasing'
        },
        animationStartValue: 0.0,
        reverse: false,
        lineCap: 'butt',
        insertMode: 'prepend',
        constructor: CircleProgress,
        el: null,
        canvas: null,
        ctx: null,
        radius: 0.0,
        arcFill: null,
        lastFrameValue: 0.0,
        init: function(config) {
            $.extend(this, config);
            this.radius = this.size / 2;
            this.initWidget();
            this.initFill();
            this.draw();
            this.el.trigger('circle-inited');
        },
        initWidget: function() {
            if (!this.canvas)
                this.canvas = $('<canvas>')[this.insertMode == 'prepend' ? 'prependTo' : 'appendTo'](this.el)[0];
            var canvas = this.canvas;
            canvas.width = this.size;
            canvas.height = this.size;
            this.ctx = canvas.getContext('2d');
            if (window.devicePixelRatio > 1) {
                var scaleBy = window.devicePixelRatio;
                canvas.style.width = canvas.style.height = this.size + 'px';
                canvas.width = canvas.height = this.size * scaleBy;
                this.ctx.scale(scaleBy, scaleBy);
            }
        },
        initFill: function() {
            var self = this
              , fill = this.fill
              , ctx = this.ctx
              , size = this.size;
            if (!fill)
                throw Error("The fill is not specified!");
            if (typeof fill == 'string')
                fill = {
                    color: fill
                };
            if (fill.color)
                this.arcFill = fill.color;
            if (fill.gradient) {
                var gr = fill.gradient;
                if (gr.length == 1) {
                    this.arcFill = gr[0];
                } else if (gr.length > 1) {
                    var ga = fill.gradientAngle || 0
                      , gd = fill.gradientDirection || [size / 2 * (1 - Math.cos(ga)), size / 2 * (1 + Math.sin(ga)), size / 2 * (1 + Math.cos(ga)), size / 2 * (1 - Math.sin(ga))];
                    var lg = ctx.createLinearGradient.apply(ctx, gd);
                    for (var i = 0; i < gr.length; i++) {
                        var color = gr[i]
                          , pos = i / (gr.length - 1);
                        if ($.isArray(color)) {
                            pos = color[1];
                            color = color[0];
                        }
                        lg.addColorStop(pos, color);
                    }
                    this.arcFill = lg;
                }
            }
            if (fill.image) {
                var img;
                if (fill.image instanceof Image) {
                    img = fill.image;
                } else {
                    img = new Image();
                    img.src = fill.image;
                }
                if (img.complete)
                    setImageFill();
                else
                    img.onload = setImageFill;
            }
            function setImageFill() {
                var bg = $('<canvas>')[0];
                bg.width = self.size;
                bg.height = self.size;
                bg.getContext('2d').drawImage(img, 0, 0, size, size);
                self.arcFill = self.ctx.createPattern(bg, 'no-repeat');
                self.drawFrame(self.lastFrameValue);
            }
        },
        draw: function() {
            if (this.animation)
                this.drawAnimated(this.value);
            else
                this.drawFrame(this.value);
        },
        drawFrame: function(v) {
            this.lastFrameValue = v;
            this.ctx.clearRect(0, 0, this.size, this.size);
            this.drawEmptyArc(v);
            this.drawArc(v);
        },
        drawArc: function(v) {
            if (v === 0)
                return;
            var ctx = this.ctx
              , r = this.radius
              , t = this.getThickness()
              , a = this.startAngle;
            ctx.save();
            ctx.beginPath();
            if (!this.reverse) {
                ctx.arc(r, r, r - t / 2, a, a + Math.PI * 2 * v);
            } else {
                ctx.arc(r, r, r - t / 2, a - Math.PI * 2 * v, a);
            }
            ctx.lineWidth = t;
            ctx.lineCap = this.lineCap;
            ctx.strokeStyle = this.arcFill;
            ctx.stroke();
            ctx.restore();
        },
        drawEmptyArc: function(v) {
            var ctx = this.ctx
              , r = this.radius
              , t = this.getThickness()
              , a = this.startAngle;
            if (v < 1) {
                ctx.save();
                ctx.beginPath();
                if (v <= 0) {
                    ctx.arc(r, r, r - t / 2, 0, Math.PI * 2);
                } else {
                    if (!this.reverse) {
                        ctx.arc(r, r, r - t / 2, a + Math.PI * 2 * v, a);
                    } else {
                        ctx.arc(r, r, r - t / 2, a, a - Math.PI * 2 * v);
                    }
                }
                ctx.lineWidth = t;
                ctx.strokeStyle = this.emptyFill;
                ctx.stroke();
                ctx.restore();
            }
        },
        drawAnimated: function(v) {
            var self = this
              , el = this.el
              , canvas = $(this.canvas);
            canvas.stop(true, false);
            el.trigger('circle-animation-start');
            canvas.css({
                animationProgress: 0
            }).animate({
                animationProgress: 1
            }, $.extend({}, this.animation, {
                step: function(animationProgress) {
                    var stepValue = self.animationStartValue * (1 - animationProgress) + v * animationProgress;
                    self.drawFrame(stepValue);
                    el.trigger('circle-animation-progress', [animationProgress, stepValue]);
                }
            })).promise().always(function() {
                el.trigger('circle-animation-end');
            });
        },
        getThickness: function() {
            return $.isNumeric(this.thickness) ? this.thickness : this.size / 14;
        },
        getValue: function() {
            return this.value;
        },
        setValue: function(newValue) {
            if (this.animation)
                this.animationStartValue = this.lastFrameValue;
            this.value = newValue;
            this.draw();
        }
    };
    $.circleProgress = {
        defaults: CircleProgress.prototype
    };
    $.easing.circleProgressEasing = function(x) {
        if (x < 0.5) {
            x = 2 * x;
            return 0.5 * x * x * x;
        } else {
            x = 2 - 2 * x;
            return 1 - 0.5 * x * x * x;
        }
    }
    ;
    $.fn.circleProgress = function(configOrCommand, commandArgument) {
        var dataName = 'circle-progress'
          , firstInstance = this.data(dataName);
        if (configOrCommand == 'widget') {
            if (!firstInstance)
                throw Error('Calling "widget" method on not initialized instance is forbidden');
            return firstInstance.canvas;
        }
        if (configOrCommand == 'value') {
            if (!firstInstance)
                throw Error('Calling "value" method on not initialized instance is forbidden');
            if (typeof commandArgument == 'undefined') {
                return firstInstance.getValue();
            } else {
                var newValue = arguments[1];
                return this.each(function() {
                    $(this).data(dataName).setValue(newValue);
                });
            }
        }
        return this.each(function() {
            var el = $(this)
              , instance = el.data(dataName)
              , config = $.isPlainObject(configOrCommand) ? configOrCommand : {};
            if (instance) {
                instance.init(config);
            } else {
                var initialConfig = $.extend({}, el.data());
                if (typeof initialConfig.fill == 'string')
                    initialConfig.fill = JSON.parse(initialConfig.fill);
                if (typeof initialConfig.animation == 'string')
                    initialConfig.animation = JSON.parse(initialConfig.animation);
                config = $.extend(initialConfig, config);
                config.el = el;
                instance = new CircleProgress(config);
                el.data(dataName, instance);
            }
        });
    }
    ;
});
jQuery(function() {
    if (jQuery(".bwg-container").length) {
        var html = '<div class="twb_admin_bar_menu_header">';
        html += '<img class="twb_menu_logo" src="' + twb.plugin_url + '/assets/images/logo_white.svg" />';
        html += '<div class="twb_menu_logo">Optimize Images</div>';
        html += '</div>';
        jQuery(".twb_admin_bar_menu").html(html).on("click", function() {
            window.open(twb.href, '_blank');
        });
        jQuery(".twb_admin_bar_menu_main").remove();
    }
    twb_inprogress = false;
    jQuery(".twb-notoptimized").each(function() {
        if (jQuery(this).data("status") == 'inprogress') {
            twb_disable_check();
        }
    });
    jQuery(".twb-notoptimized .twb_check_score_button").on("click", function() {
        if (!twb_inprogress) {
            twb_check_score(this);
        }
    });
    jQuery("th[id^='twb-speed-']").hover(function() {
        jQuery(this).find(".twb-dismiss-container").removeClass("twb-hidden");
    }, function() {
        jQuery(this).find(".twb-dismiss-container").addClass("twb-hidden");
    });
    jQuery(".twb-see-score").hover(function() {
        jQuery(this).parent().parent().find(".twb-score-container").removeClass("twb-hidden");
    }, function() {
        jQuery(this).parent().parent().find(".twb-score-container").addClass("twb-hidden");
    });
    jQuery(".twb-score-container:not(.twb_admin_bar_menu_content .twb-score-container), .twb-score-disabled-container").hover(function() {
        jQuery(this).removeClass("twb-hidden");
    }, function() {
        jQuery(this).addClass("twb-hidden");
    });
    jQuery(".twb-score-circle").each(function() {
        twb_draw_score_circle(this);
    });
    jQuery("#wp-admin-bar-twb_adminbar_info").mouseenter(function() {
        jQuery(".twb_admin_bar_menu_main .twb-score-container").removeClass("twb-hidden");
        jQuery(".twb_admin_bar_menu_main").removeClass("twb-hidden");
    }).mouseleave(function() {
        jQuery(".twb_admin_bar_menu_main").addClass("twb-hidden");
    });
    jQuery('.twb-score-circle').each(function() {
        twb_draw_score_circle(this);
    });
    if (jQuery(".twb_admin_bar_menu.twb_backend span").hasClass("twb_backend_optimizing_logo")) {
        twb_run_notif_check = setInterval(twb_run_notif_check, 30000);
    }
});
function twb_run_notif_check() {
    jQuery.ajax({
        type: "POST",
        url: twb.ajax_url,
        data: {
            action: "twb_notif_check",
            twb_nonce: twb.nonce,
        }
    }).success(function(results) {
        var result = jQuery.parseJSON(results);
        if (result.html != "") {
            if (result.changeLogo == 1) {
                jQuery(".twb_admin_bar_menu_header span").addClass("twb_counted");
            }
            jQuery("#wp-admin-bar-twb_adminbar_info").append(result.html);
            jQuery(".twb_admin_bar_menu_content .twb-score-container").removeClass("twb-hidden");
            jQuery(".twb_admin_bar_menu_content .twb-score-container .twb-score-circle").each(function() {
                twb_draw_score_circle(this);
            });
            clearInterval(twb_run_notif_check);
        }
    }).error(function() {
        clearInterval(twb_run_notif_check);
    });
}
function twb_disable_check() {
    twb_inprogress = true;
    jQuery(".twb-notoptimized").hover(function() {
        jQuery(this).parent().find(".twb-score-disabled-container").removeClass("twb-hidden");
    }, function() {
        jQuery(this).parent().find(".twb-score-disabled-container").addClass("twb-hidden");
    });
}
function twb_check_score(that) {
    var post_id = jQuery(that).data("post_id");
    var parent = jQuery(that).parent().parent().parent();
    jQuery(".twb_admin_bar_menu.twb_frontend").addClass("twb_score_inprogress");
    if (parent.find(".twb-optimized").hasClass("twb-hidden")) {
        parent.find(".twb-optimizing").removeClass("twb-hidden");
    } else {
        parent.find(".twb-score-overlay").removeClass("twb-hidden");
        parent.find(".twb-score-overlay div").removeClass("twb-reload").addClass("twb-loader");
    }
    parent.find(".twb-notoptimized").addClass("twb-hidden");
    if (parent.hasClass("twb_elementor_settings_content")) {
        jQuery(".twb_elementor_control_title").text(twb.checking).removeClass("twb_not_optimized").prepend("<span class='twb_inprogress'></span>");
    }
    twb_disable_check();
    jQuery.ajax({
        url: twb.ajax_url,
        type: "POST",
        dataType: 'json',
        data: {
            action: "twb_check_score",
            post_id: post_id,
            twb_nonce: twb.nonce
        },
        success: function(data) {
            if (data.error) {
                parent.find(".twb-score-overlay").removeClass("twb-hidden");
                parent.find(".twb-score-overlay div").removeClass("twb-loader").addClass("twb-reload");
            } else {
                parent.find(".twb-score-overlay").addClass("twb-hidden");
                var desktop = parent.find(".twb-score-desktop").find(".twb-score-circle");
                desktop.data({
                    "score": data.desktop_score,
                    "tti": data.desktop_tti,
                });
                twb_draw_score_circle(desktop);
                var mobile = parent.find(".twb-score-mobile").find(".twb-score-circle");
                mobile.data({
                    "score": data.mobile_score,
                    "tti": data.mobile_tti,
                });
                twb_draw_score_circle(mobile);
            }
        },
        error: function(xhr, textStatus, errorThrown) {
            parent.find(".twb-score-overlay").removeClass("twb-hidden");
            parent.find(".twb-score-overlay div").removeClass("twb-loader").addClass("twb-reload");
        },
        complete: function(xhr, textStatus) {
            parent.find(".twb-optimizing").addClass("twb-hidden");
            parent.find(".twb-optimized").removeClass("twb-hidden");
            jQuery("#wpadminbar .twb-optimized .twb-score-container").removeClass("twb-hidden");
            jQuery("#wpadminbar .twb_admin_bar_menu").removeClass("twb_score_inprogress");
            jQuery("#wpadminbar .twb_menu_logo").remove();
            jQuery("#wpadminbar .twb_not_optimized_logo").removeClass("twb-hidden");
            jQuery("#wpadminbar .twb_admin_bar_menu_header").addClass("twb_not_optimized");
            twb_inprogress = false;
            jQuery(".twb-notoptimized").hover(function() {
                jQuery(this).parent().find(".twb-score-disabled-container").addClass("twb-hidden");
            });
            if (parent.hasClass("twb_elementor_settings_content")) {
                jQuery(".twb_elementor_control_title").text(twb.notoptimized).remove("span.twb_inprogress").addClass("twb_not_optimized");
            }
        }
    });
}
function twb_draw_score_circle(that) {
    var score = parseInt(jQuery(that).data('score'));
    var size = parseInt(jQuery(that).data('size'));
    var thickness = parseInt(jQuery(that).data('thickness'));
    var color = score <= 49 ? "rgb(253, 60, 49)" : (score >= 90 ? "rgb(12, 206, 107)" : "rgb(255, 164, 0)");
    jQuery(that).parent().find('.twb-load-time').html(jQuery(that).data('tti'));
    var _this = that;
    jQuery(_this).circleProgress({
        value: score / 100,
        size: size,
        startAngle: -Math.PI / 4 * 2,
        lineCap: 'round',
        emptyFill: "rgba(255, 255, 255, 0)",
        thickness: thickness,
        fill: {
            color: color
        }
    }).on('circle-animation-progress', function(event, progress) {
        var content = '<span class="twb-score0"></span>';
        if (score != 0) {
            content = Math.round(score * progress);
        }
        jQuery(that).find('.twb-score-circle-animated').html(content).css({
            "color": color
        });
        jQuery(that).find('canvas').html(Math.round(score * progress));
    });
}
function twb_add_elementor_button() {
    window.elementor.modules.layouts.panel.pages.menu.Menu.addItem({
        name: twb.title,
        icon: "twb-element-menu-icon",
        title: twb.title,
        type: "page",
        callback: ()=>{
            try {
                window.$e.route("panel/page-settings/twb_optimize")
            } catch (e) {
                window.$e.route("panel/page-settings/settings"),
                window.$e.route("panel/page-settings/twb_optimize")
            }
        }
    }, "more")
}
jQuery(window).on("elementor:init", ()=>{
    window.elementor.on("panel:init", ()=>{
        setTimeout(twb_add_elementor_button)
    }
    )
}
);
"use strict";
function _typeof(a) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a
    }
    : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    }
    ,
    _typeof(a)
}
function _slicedToArray(a, b) {
    return _arrayWithHoles(a) || _iterableToArrayLimit(a, b) || _unsupportedIterableToArray(a, b) || _nonIterableRest()
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(a, b) {
    if (a) {
        if ("string" == typeof a)
            return _arrayLikeToArray(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return "Object" === c && a.constructor && (c = a.constructor.name),
        "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray(a, b) : void 0
    }
}
function _arrayLikeToArray(a, b) {
    (null == b || b > a.length) && (b = a.length);
    for (var c = 0, d = Array(b); c < b; c++)
        d[c] = a[c];
    return d
}
function _iterableToArrayLimit(a, b) {
    var c = null == a ? null : "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
    if (null != c) {
        var d, e, f = [], g = !0, h = !1;
        try {
            for (c = c.call(a); !(g = (d = c.next()).done) && (f.push(d.value),
            !(b && f.length === b)); g = !0)
                ;
        } catch (a) {
            h = !0,
            e = a
        } finally {
            try {
                g || null == c["return"] || c["return"]()
            } finally {
                if (h)
                    throw e
            }
        }
        return f
    }
}
function _arrayWithHoles(a) {
    if (Array.isArray(a))
        return a
}
/*global jQuery, define, module, require*/
/*!
 * jquery.sumoselect v3.4.6
 * http://hemantnegi.github.io/jquery.sumoselect
 * 2016-12-12
 *
 * Copyright 2015 Hemant Negi
 * Email : hemant.frnz@gmail.com
 * Compressor http://refresh-sf.com/
 */
(function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" == typeof exports ? a(jQuery) : module.exports = a(require("jquery"))
}
)(function(a) {
    "namespace sumo";
    a.fn.SumoSelect = function(b) {
        // Extra check for IE compatibility
        var c = function(a, b) {
            var c = null;
            "function" == typeof Event ? c = new Event(b,{
                bubbles: !0
            }) : (c = document.createEvent("Event"),
            c.initEvent(b, !0, !0)),
            a.dispatchEvent(c)
        };
        // missing forEach on NodeList for IE11
        window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
        // This is the easiest way to have default options.
        var d = {
            placeholder: "Select Here",
            // Dont change it here.
            csvDispCount: 3,
            // display no. of items in multiselect. 0 to display all.
            captionFormat: "{0} Selected",
            // format of caption text. you can set your locale.
            captionFormatAllSelected: "{0} all selected!",
            // format of caption text when all elements are selected. set null to use captionFormat. It will not work if there are disabled elements in select.
            floatWidth: 400,
            // Screen width of device at which the list is rendered in floating popup fashion.
            forceCustomRendering: !1,
            // force the custom modal on all devices below floatWidth resolution.
            nativeOnDevice: ["Android", "BlackBerry", "iPhone", "iPad", "iPod", "Opera Mini", "IEMobile", "Silk"],
            //
            outputAsCSV: !1,
            // true to POST data as csv ( false for Html control array ie. default select )
            csvSepChar: ",",
            // separation char in csv mode
            okCancelInMulti: !1,
            // display ok cancel buttons in desktop mode multiselect also.
            isClickAwayOk: !1,
            // for okCancelInMulti=true. sets whether click outside will trigger Ok or Cancel (default is cancel).
            triggerChangeCombined: !0,
            // im multi select mode whether to trigger change event on individual selection or combined selection.
            selectAll: !1,
            // to display select all button in multiselect mode.|| also select all will not be available on mobile devices.
            selectAllPartialCheck: !0,
            // Display a disabled checkbox in multiselect mode when all the items are not selected.
            search: !1,
            // to display input for filtering content. selectAlltext will be input text placeholder
            searchText: "Search...",
            // placeholder for search input
            searchFn: function searchFn(a, b) {
                // search function
                return 0 > a.toLowerCase().indexOf(b.toLowerCase())
            },
            noMatch: "No matches for \"{0}\"",
            prefix: "",
            // some prefix usually the field name. eg. '<b>Hello</b>'
            locale: ["OK", "Cancel", "Select All", "Clear all"],
            // all text that is used. don't change the index.
            up: !1,
            // set true to open upside.
            showTitle: !0,
            // set to false to prevent title (tooltip) from appearing
            clearAll: !1,
            // im multi select - clear all checked options
            closeAfterClearAll: !1,
            // im multi select - close select after clear
            max: null,
            // Maximum number of options selected (when multiple)
            renderLi: function renderLi(a) {
                return a
            }// Custom <li> item renderer
        }
          , e = this.each(function() {
            var e = this;
            // the original select object.
            if (!this.sumo && a(this).is("select")) {
                //already initialized
                var f = a.extend({}, d, b, a(this).data());
                this.sumo = {
                    E: a(e),
                    //the jquery object of original select element.
                    is_multi: a(e).attr("multiple"),
                    //if its a multiple select
                    select: "",
                    caption: "",
                    placeholder: "",
                    optDiv: "",
                    CaptionCont: "",
                    ul: "",
                    is_floating: !1,
                    is_opened: !1,
                    //backdrop: '',
                    mob: !1,
                    // if to open device default select
                    Pstate: [],
                    lastUnselected: null,
                    selectedCount: 0,
                    createElems: function createElems() {
                        var b = this
                          , c = b.E.find("option:checked");
                        //break for mobile rendring.. if forceCustomRendering is false
                        return b.E.wrap("<div class=\"SumoSelect\" tabindex=\"0\" role=\"button\" aria-expanded=\"false\">"),
                        c.each(function(a, b) {
                            b.selected = !0
                        }),
                        b.select = b.E.parent(),
                        b.caption = a("<span>"),
                        b.CaptionCont = a("<p class=\"CaptionCont SelectBox ".concat(b.E.attr("class"), "\" ><label><i></i></label></p>")).attr("style", b.E.attr("style")).prepend(b.caption),
                        b.select.append(b.CaptionCont),
                        b.is_multi || (f.okCancelInMulti = !1),
                        b.E.attr("disabled") && b.select.addClass("disabled").removeAttr("tabindex"),
                        f.outputAsCSV && b.is_multi && b.E.attr("name") && (b.select.append(a("<input class=\"HEMANT123\" type=\"hidden\" />").attr("name", b.E.attr("name")).val(b.getSelStr())),
                        b.E.removeAttr("name")),
                        b.isMobile() && !f.forceCustomRendering ? void b.setNativeMobile() : void (//hide original select
                        b.E.attr("name") && b.select.addClass("sumo_".concat(b.E.attr("name").replace(/\[\]/, ""))),
                        b.E.addClass("SumoUnder").attr("tabindex", "-1"),
                        b.optDiv = a("<div class=\"optWrapper ".concat(f.up ? "up" : "", "\">")),
                        b.floatingList(),
                        b.ul = a("<ul class=\"options\">"),
                        b.optDiv.append(b.ul),
                        f.clearAll && b.is_multi && b.ClearAll(),
                        f.selectAll && b.is_multi && !f.max && b.SelAll(),
                        f.search && b.Search(),
                        b.ul.append(b.prepItems(b.E.children())),
                        b.is_multi && b.multiSelelect(),
                        b.select.append(b.optDiv),
                        b._handleMax(),
                        b.basicEvents(),
                        b.selAllState());
                        // if there is a name attr in select add a class to container div
                    },
                    prepItems: function prepItems(b, c) {
                        var d = []
                          , e = this;
                        return a(b).each(function(b, f) {
                            // parsing options to li
                            var g = a(f);
                            d.push(g.is("optgroup") ? a("<li class=\"group ".concat(f.disabled ? "disabled" : "", "\"><label></label><ul></ul></li>")).find("label").text(g.attr("label")).end().find("ul").append(e.prepItems(g.children(), f.disabled)).end() : e.createLi(g, c))
                        }),
                        d
                    },
                    //## Creates a LI element from a given option and binds events to it
                    createLi: function createLi(b, c) {
                        var d = this;
                        b.attr("value") || b.attr("value", b.val());
                        var e = a("<li class=\"opt\"><label>".concat(b.html(), "</label></li>"));
                        return e.data("opt", b),
                        b.data("li", e),
                        d.is_multi && e.prepend("<span><i></i></span>"),
                        (b[0].disabled || c) && e.addClass("disabled"),
                        d.onOptClick(e),
                        b[0].selected && (e.addClass("selected"),
                        d.selectedCount++),
                        b.attr("class") && e.addClass(b.attr("class")),
                        b.attr("title") && e.attr("title", b.attr("title")),
                        f.renderLi(e, b)
                    },
                    //## Returns the selected items as string in a Multiselect.
                    getSelStr: function getSelStr() {
                        // get the pre selected items.
                        var b = [];
                        return this.E.find("option:checked").each(function() {
                            b.push(a(this).val())
                        }),
                        b.join(f.csvSepChar)
                    },
                    //## THOSE OK/CANCEL BUTTONS ON MULTIPLE SELECT.
                    multiSelelect: function multiSelelect() {
                        var b = this;
                        b.optDiv.addClass("multiple"),
                        b.okbtn = a("<p tabindex=\"0\" class=\"btnOk\"></p>").click(function() {
                            b._okbtn(),
                            b.hideOpts()
                        });
                        var c = _slicedToArray(f.locale, 1);
                        b.okbtn[0].innerText = c[0],
                        b.cancelBtn = a("<p tabindex=\"0\" class=\"btnCancel\"></p>").click(function() {
                            b._cnbtn(),
                            b.hideOpts()
                        });
                        var d = _slicedToArray(f.locale, 2);
                        b.cancelBtn[0].innerText = d[1];
                        var e = b.okbtn.add(b.cancelBtn);
                        b.optDiv.append(a("<div class=\"MultiControls\">").append(e)),
                        e.on("keydown.sumo", function(c) {
                            var d = a(this);
                            switch (c.which) {
                            case 32:
                                // space
                            case 13:
                                d.trigger("click");
                                break;
                            case 9:
                                //tab
                                if (d.hasClass("btnOk"))
                                    return;
                                break;
                            case 27:
                                return b._cnbtn(),
                                void b.hideOpts();
                            default:
                            }
                            c.stopPropagation(),
                            c.preventDefault()
                        })
                    },
                    _okbtn: function _okbtn() {
                        var a = this
                          , b = 0;
                        f.triggerChangeCombined && (a.E.find("option:checked").length === a.Pstate.length ? a.E.find("option").each(function(c, d) {
                            d.selected && 0 > a.Pstate.indexOf(c) && (b = 1)
                        }) : b = 1,
                        b && (a.callChange(),
                        a.setText()))
                    },
                    _cnbtn: function _cnbtn() {
                        var a = this;
                        //remove all selections
                        a.E.find("option:checked").each(function() {
                            this.selected = !1
                        }),
                        a.optDiv.find("li.selected").removeClass("selected");
                        //restore selections from saved state.
                        for (var b = 0; b < a.Pstate.length; b++)
                            a.E.find("option")[a.Pstate[b]].selected = !0,
                            a.ul.find("li.opt").eq(a.Pstate[b]).addClass("selected");
                        a.selAllState()
                    },
                    _handleMax: function _handleMax() {
                        f.max && (this.selectedCount >= +f.max ? this.optDiv.find("li.opt").not(".hidden").each(function(b, c) {
                            a(c).hasClass("selected") || a(c).addClass("temporary-disabled disabled")
                        }) : this.optDiv.find("li.opt").not(".hidden").each(function(b, c) {
                            a(c).hasClass("temporary-disabled") && a(c).removeClass("temporary-disabled disabled")
                        }))
                    },
                    ClearAll: function ClearAll() {
                        var b = this;
                        if (b.is_multi) {
                            b.selAll = a("<p class=\"reset-all\"><span><i></i></span><label></label></p>");
                            var c = _slicedToArray(f.locale, 4);
                            b.selAll.find("label")[0].innerText = c[3],
                            b.optDiv.addClass("resetAll"),
                            b.selAll.on("click", function() {
                                b.selAll.removeClass("selected"),
                                b.toggSelAll(!1, 1),
                                f.closeAfterClearAll && b.hideOpts()
                            }),
                            b.optDiv.prepend(b.selAll)
                        }
                    },
                    SelAll: function SelAll() {
                        var b = this;
                        if (b.is_multi) {
                            b.selAll = a("<p class=\"select-all\"><span><i></i></span><label></label></p>");
                            var c = _slicedToArray(f.locale, 3);
                            b.selAll.find("label")[0].innerText = c[2],
                            b.optDiv.addClass("selall"),
                            b.selAll.on("click", function() {
                                b.selAll.toggleClass("selected"),
                                b.toggSelAll(b.selAll.hasClass("selected"), 1),
                                b.selAllState()
                            }),
                            b.optDiv.prepend(b.selAll)
                        }
                    },
                    // search module (can be removed if not required.)
                    Search: function Search() {
                        var c = this
                          , d = c.CaptionCont.addClass("search")
                          , e = a("<p class=\"no-match\">")
                          , g = b.searchFn && "function" == typeof b.searchFn ? b.searchFn : f.searchFn;
                        c.ftxt = a("<input type=\"text\" class=\"search-txt\" value=\"\" autocomplete=\"off\">").on("click", function(a) {
                            a.stopPropagation()
                        }),
                        c.ftxt[0].placeholder = f.searchText,
                        d.append(c.ftxt),
                        c.optDiv.children("ul").after(e),
                        c.ftxt.on("keyup.sumo", function() {
                            var b = c.optDiv.find("ul.options li.opt").each(function(b, d) {
                                var e = a(d)
                                  , f = e.data("opt")
                                  , h = f[0];
                                h.hidden = g(e.text(), c.ftxt.val(), e),
                                e.toggleClass("hidden", h.hidden)
                            }).not(".hidden");
                            // Hide opt-groups with no options matched
                            c.optDiv[0].querySelectorAll("li.group").forEach(function(a) {
                                a.querySelector("li:not(.hidden)") ? a.classList.remove("hidden") : a.classList.add("hidden")
                            }),
                            e.html(f.noMatch.replace(/\{0\}/g, "<em></em>")).toggle(!b.length),
                            e.find("em").text(c.ftxt.val()),
                            c.selAllState()
                        })
                    },
                    selAllState: function selAllState() {
                        var b = this;
                        if (f.selectAll && b.is_multi) {
                            var c = 0
                              , d = 0;
                            b.optDiv.find("li.opt:not(.disabled):not(.hidden)").each(function(b, f) {
                                a(f).hasClass("selected") && c++,
                                d++
                            }),
                            c == d ? b.selAll.removeClass("partial").addClass("selected") : 0 === c ? b.selAll.removeClass("selected partial") : (f.selectAllPartialCheck && b.selAll.addClass("partial"),
                            b.selAll.removeClass("selected"))
                        }
                    },
                    showOpts: function showOpts() {
                        var b = this;
                        if (!b.E.attr("disabled")) {
                            if (b.E.trigger("sumo:opening", b),
                            b.is_opened = !0,
                            b.select.addClass("open").attr("aria-expanded", "true"),
                            b.E.trigger("sumo:opened", b),
                            b.ftxt ? b.ftxt.focus() : b.select.focus(),
                            a(document).on("click.sumo", function(a) {
                                if (!b.select.is(a.target)// if the target of the click isn't the container...
                                && 0 === b.select.has(a.target).length) {
                                    // ... nor a descendant of the container
                                    if (!b.is_opened)
                                        return;
                                    b.hideOpts(),
                                    f.okCancelInMulti && (f.isClickAwayOk ? b._okbtn() : b._cnbtn())
                                }
                            }),
                            b.is_floating) {
                                var c = b.optDiv.children("ul").outerHeight() + 2;
                                // +2 is clear fix
                                b.is_multi && (c += +b.optDiv.css("padding-bottom")),
                                b.optDiv.css("height", c),
                                a("body").addClass("sumoStopScroll")
                            }
                            b.setPstate()
                        }
                        // if select is disabled then retrun
                    },
                    //maintain state when ok/cancel buttons are available storing the indexes.
                    setPstate: function setPstate() {
                        var a = this;
                        a.is_multi && (a.is_floating || f.okCancelInMulti) && (a.Pstate = [],
                        a.E.find("option").each(function(b, c) {
                            c.selected && a.Pstate.push(b)
                        }))
                    },
                    callChange: function callChange() {
                        this.E.get().forEach(function(a) {
                            c(a, "change"),
                            c(a, "click")
                        })
                    },
                    hideOpts: function hideOpts() {
                        var b = this;
                        b.is_opened && (b.E.trigger("sumo:closing", b),
                        b.is_opened = !1,
                        b.select.removeClass("open").attr("aria-expanded", "false").find("ul li.sel").removeClass("sel"),
                        b.E.trigger("sumo:closed", b),
                        a(document).off("click.sumo"),
                        a("body").removeClass("sumoStopScroll"),
                        f.search && (b.ftxt.val(""),
                        b.ftxt.trigger("keyup.sumo")))
                    },
                    setOnOpen: function setOnOpen() {
                        var a = this
                          , b = a.optDiv.find("li.opt:not(.hidden)").eq(f.search ? 0 : a.E[0].selectedIndex);
                        b.hasClass("disabled") && (b = b.next(":not(disabled)"),
                        !b.length) || (a.optDiv.find("li.sel").removeClass("sel"),
                        b.addClass("sel"),
                        a.showOpts())
                    },
                    nav: function nav(a) {
                        var b = this
                          , d = null
                          , e = b.ul.find("li.opt.sel:not(.hidden)")
                          , f = b.ul.find("li.opt:not(.disabled):not(.hidden)")
                          , g = f.index(e);
                        if (b.is_opened && e.length) {
                            if (a && 0 < g)
                                d = f.eq(g - 1);
                            else if (!a && g < f.length - 1 && -1 < g)
                                d = f.eq(g + 1);
                            else
                                return;
                            // if no items before or after
                            e.removeClass("sel"),
                            e = d.addClass("sel");
                            // setting sel item to visible view.
                            var h = b.ul
                              , i = h.scrollTop()
                              , j = e.position().top + i;
                            j >= i + h.height() - e.outerHeight() && h.scrollTop(j - h.height() + e.outerHeight()),
                            j < i && h.scrollTop(j)
                        } else
                            b.setOnOpen()
                    },
                    basicEvents: function basicEvents() {
                        var b = this;
                        b.CaptionCont.click(function(a) {
                            b.E.trigger("click"),
                            b.is_opened ? b.hideOpts() : b.showOpts(),
                            a.stopPropagation()
                        }),
                        b.select.on("keydown.sumo", function(a) {
                            switch (a.which) {
                            case 38:
                                b.nav(!0);
                                break;
                            case 40:
                                b.nav(!1);
                                break;
                            case 65:
                                // shortcut ctrl + a to select all and ctrl + shift + a to unselect all.
                                if (b.is_multi && !f.max && a.ctrlKey) {
                                    b.toggSelAll(!a.shiftKey, 1);
                                    break
                                } else
                                    return;
                            case 32:
                                // space
                                if (f.search && b.ftxt.is(a.target))
                                    return;
                                break;
                            case 13:
                                b.is_opened ? b.optDiv.find("ul li.sel").trigger("click") : b.setOnOpen();
                                break;
                            case 9:
                                return void (f.okCancelInMulti || b.hideOpts());
                            case 27:
                                return f.okCancelInMulti && b._cnbtn(),
                                void b.hideOpts();
                            default:
                                return;
                                // exit this handler for other keys
                            }
                            a.preventDefault()
                        }),
                        a(window).on("resize.sumo", function() {
                            b.floatingList()
                        })
                    },
                    onOptClick: function onOptClick(b) {
                        var c = this;
                        b.click(function() {
                            var b = a(this);
                            b.hasClass("disabled") || (c.is_multi ? (b.toggleClass("selected"),
                            b.data("opt")[0].selected = b.hasClass("selected"),
                            !1 === b.data("opt")[0].selected ? (c.lastUnselected = b.data("opt")[0].textContent,
                            c.selectedCount--) : c.selectedCount++,
                            f.max && c._handleMax(),
                            c.selAllState()) : (b.parent().find("li.selected").removeClass("selected"),
                            b.toggleClass("selected"),
                            b.data("opt")[0].selected = !0,
                            c.selectedCount = 1),
                            !(c.is_multi && f.triggerChangeCombined && (c.is_floating || f.okCancelInMulti)) && (c.setText(),
                            c.callChange()),
                            !c.is_multi && c.hideOpts())
                        })
                    },
                    // fixed some variables that were not explicitly typed (michc)
                    setText: function setText() {
                        var a = this
                          , b = 0;
                        if (a.placeholder = "",
                        a.is_multi) {
                            var e = a.E.find(":checked").not(":disabled");
                            //selected options.
                            b = e.length,
                            a.placeholder = f.csvDispCount && e.length > f.csvDispCount ? e.length === a.E.find("option").length && f.captionFormatAllSelected ? f.captionFormatAllSelected.replace(/\{0\}/g, e.length) : f.captionFormat.replace(/\{0\}/g, e.length) : e.toArray().map(function(a) {
                                return a.innerText
                            }).join(", ")
                        } else {
                            var g = a.E.find(":checked").not(":disabled");
                            a.placeholder = g.text(),
                            b = g.length
                        }
                        var c = !1;
                        a.placeholder || (c = !0,
                        a.placeholder = a.E.attr("placeholder"),
                        !a.placeholder && (//if placeholder is there then set it
                        a.placeholder = a.E.find("option:disabled:checked").text())),
                        a.select.attr("selected-count", b),
                        a.select.attr("is-selected", b ? "true" : "false"),
                        a.placeholder = a.placeholder ? "".concat(f.prefix, " ").concat(a.placeholder) : f.placeholder,
                        a.caption.text(a.placeholder),
                        f.showTitle && a.CaptionCont.attr("title", a.placeholder);
                        //set the hidden field if post as csv is true.
                        var d = a.select.find("input.HEMANT123");
                        return d.length && d.val(a.getSelStr()),
                        c ? a.caption.addClass("placeholder") : a.caption.removeClass("placeholder"),
                        a.placeholder
                    },
                    isMobile: function isMobile() {
                        // Adapted from http://www.detectmobilebrowsers.com
                        for (var a = navigator.userAgent || navigator.vendor || window.opera, b = 0; b < f.nativeOnDevice.length; b++)
                            if (0 < a.toString().toLowerCase().indexOf(f.nativeOnDevice[b].toLowerCase()))
                                return f.nativeOnDevice[b];
                        return !1
                    },
                    setNativeMobile: function setNativeMobile() {
                        var a = this;
                        a.E.addClass("SelectClass"),
                        a.mob = !0,
                        a.E.change(function() {
                            a.setText()
                        })
                    },
                    floatingList: function floatingList() {
                        var b = this;
                        //called on init and also on resize.
                        b.is_floating = a(window).width() <= f.floatWidth,
                        b.optDiv.toggleClass("isFloating", b.is_floating),
                        b.is_floating || b.optDiv.css("height", ""),
                        b.optDiv.toggleClass("okCancelInMulti", f.okCancelInMulti && !b.is_floating)
                    },
                    //HELPERS FOR OUTSIDERS
                    vRange: function vRange(a) {
                        var b = this
                          , c = b.E.find("option");
                        if (c.length <= a || 0 > a)
                            throw new Error("index out of bounds");
                        return b
                    },
                    //toggles selection on c as boolean.
                    toggSel: function toggSel(b, c) {
                        var d = this
                          , e = null;
                        "number" == typeof c ? (d.vRange(c),
                        e = d.E.find("option")[c]) : e = d.E.find("option[value=\"".concat(c, "\"]"))[0] || 0,
                        !e || e.disabled || e.selected !== b && (f.max && !e.selected && d.selectedCount < f.max || e.selected || !f.max && !e.selected) && (e.selected = b,
                        !d.mob && a(e).data("li").toggleClass("selected", b),
                        d.callChange(),
                        d.setPstate(),
                        d.setText(),
                        d.selAllState())
                    },
                    //toggles disabled on c as boolean.
                    toggDis: function toggDis(a, b) {
                        var c = this.vRange(b);
                        c.E.find("option")[b].disabled = a,
                        a && (c.E.find("option")[b].selected = !1),
                        c.mob || c.optDiv.find("ul.options li.opt").eq(b).toggleClass("disabled", a).removeClass("selected"),
                        c.setText()
                    },
                    // toggle disable/enable on complete select control
                    toggSumo: function toggSumo(a) {
                        var b = this;
                        return b.enabled = a,
                        b.select.toggleClass("disabled", a),
                        a ? (b.E.attr("disabled", "disabled"),
                        b.select.removeAttr("tabindex")) : (b.E.removeAttr("disabled"),
                        b.select.attr("tabindex", "0")),
                        b
                    },
                    // toggles all option on c as boolean.
                    toggSelAll: function toggSelAll(b, c) {
                        var d = this
                          , e = a.extend(!0, {}, a._data(d.E.get(0), "events"));
                        d.E.off(),
                        d.is_multi ? b ? d.E.find("option").toArray().filter(function(a) {
                            return !a.selected && !a.disabled && "none" !== a.style.display
                        }).forEach(function(b) {
                            a(b).data("li").hasClass("hidden") || (b.selected = !0,
                            a(b).data("li").toggleClass("selected", !0))
                        }) : d.E.find("option").toArray().filter(function(a) {
                            return a.selected && !a.disabled && "none" !== a.style.display
                        }).forEach(function(b) {
                            a(b).data("li").hasClass("hidden") || (b.selected = !1,
                            a(b).data("li").toggleClass("selected", !1))
                        }) : b ? console.warn("You called `SelectAll` on a non-multiple select") : d.E[0].selectedIndex = -1,
                        a.each(e, function(b, c) {
                            a.each(c, function(a, b) {
                                d.E.on(b.type, b.handler)
                            })
                        }),
                        (!d.is_multi || f.okCancelInMulti) && d.is_multi || (d.callChange(),
                        d.setText()),
                        c || (!d.mob && d.selAll && d.selAll.removeClass("partial").toggleClass("selected", !!b),
                        d.setText(),
                        d.setPstate())
                    },
                    /* outside accessibility options
          which can be accessed from the element instance.
         */
                    reload: function reload() {
                        var b = this.unload();
                        return a(b).SumoSelect(f)
                    },
                    unload: function unload() {
                        var a = this;
                        return a.select.before(a.E),
                        a.E.show(),
                        a.E[0].classList.remove("SumoUnder", "SelectClass"),
                        f.outputAsCSV && a.is_multi && a.select.find("input.HEMANT123").length && a.E.attr("name", a.select.find("input.HEMANT123").attr("name")),
                        a.select.remove(),
                        delete e.sumo,
                        a.E.trigger("sumo:unloaded", a),
                        e
                    },
                    //## add a new option to select at a given index.
                    add: function add(b, c, d, f) {
                        if ("undefined" == typeof b)
                            throw new Error("No value to add");
                        var g = this
                          , h = g.E.find("option")
                          , i = c
                          , j = d;
                        "number" == typeof c ? (j = c,
                        i = b) : "undefined" == typeof c && (i = b);
                        var k = a("<option></option>").val(b).html(i);
                        if (f && "object" === _typeof(f) && a.each(f, function(a, b) {
                            k.attr(a, b)
                        }),
                        h.length < j)
                            throw new Error("index out of bounds");
                        return "undefined" == typeof j || h.length === j ? (g.E.append(k),
                        !g.mob && g.ul.append(g.createLi(k))) : (h.eq(j).before(k),
                        !g.mob && g.ul.find("li.opt").eq(j).before(g.createLi(k))),
                        e
                    },
                    //## removes an item at a given index.
                    remove: function remove(a) {
                        var b = this.vRange(a);
                        b.E.find("option").eq(a).remove(),
                        b.mob || b.optDiv.find("ul.options li.opt").eq(a).remove(),
                        b.setText()
                    },
                    // removes all but the selected one
                    removeAll: function removeAll() {
                        for (var a = this, b = a.E.find("option"), c = b.length - 1; 0 <= c; c--)
                            !0 !== b[c].selected && a.remove(c)
                    },
                    find: function find(a) {
                        var b = this
                          , c = b.E.find("option");
                        for (var d in c)
                            if (c[d].value === a)
                                return +d;
                        return -1
                    },
                    //## Select an item at a given index.
                    selectItem: function selectItem(a) {
                        this.toggSel(!0, a)
                    },
                    //## UnSelect an iten at a given index.
                    unSelectItem: function unSelectItem(a) {
                        this.toggSel(!1, a)
                    },
                    //## Select all items  of the select.
                    selectAll: function selectAll() {
                        this.toggSelAll(!0)
                    },
                    //## UnSelect all items of the select.
                    unSelectAll: function unSelectAll() {
                        this.toggSelAll(!1)
                    },
                    //## Disable an iten at a given index.
                    disableItem: function disableItem(a) {
                        this.toggDis(!0, a)
                    },
                    //## Removes disabled an iten at a given index.
                    enableItem: function enableItem(a) {
                        this.toggDis(!1, a)
                    },
                    //## New simple methods as getter and setter are not working fine in ie8-
                    enabled: !0,
                    //## Enables the control
                    enable: function enable() {
                        return this.toggSumo(!1)
                    },
                    //## Disables the control
                    disable: function disable() {
                        return this.toggSumo(!0)
                    },
                    init: function init() {
                        var a = this;
                        return a.createElems(),
                        a.setText(),
                        a.E.trigger("sumo:initialized", a),
                        a
                    }
                },
                e.sumo.init()
            }
        });
        return 1 === e.length ? e[0] : e
    }
});
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(i) {
        return n(i, e, t),
        i.mobile
    }) : n(e.jQuery, e, t)
}(this, document, function(e, t, n, i) {
    !function(e, t, i) {
        function o(e) {
            return "#" + (e = e || location.href).replace(/^[^#]*#?(.*)$/, "$1")
        }
        var a, r = "hashchange", s = n, l = e.event.special, c = s.documentMode, u = "on" + r in t && (void 0 === c || c > 7);
        e.fn[r] = function(e) {
            return e ? this.bind(r, e) : this.trigger(r)
        }
        ,
        e.fn[r].delay = 50,
        l[r] = e.extend(l[r], {
            setup: function() {
                if (u)
                    return !1;
                e(a.start)
            },
            teardown: function() {
                if (u)
                    return !1;
                e(a.stop)
            }
        }),
        a = function() {
            function n() {
                var a = o()
                  , s = h(l);
                a !== l ? (d(l = a, s),
                e(t).trigger(r)) : s !== l && (location.href = location.href.replace(/#.*/, "") + s),
                i = setTimeout(n, e.fn[r].delay)
            }
            var i, a = {}, l = o(), c = function(e) {
                return e
            }, d = c, h = c;
            return a.start = function() {
                i || n()
            }
            ,
            a.stop = function() {
                i && clearTimeout(i),
                i = void 0
            }
            ,
            t.attachEvent && !t.addEventListener && !u && function() {
                var t, i;
                a.start = function() {
                    t || (i = (i = e.fn[r].src) && i + o(),
                    t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        i || d(o()),
                        n()
                    }).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow,
                    s.onpropertychange = function() {
                        try {
                            "title" === event.propertyName && (t.document.title = s.title)
                        } catch (e) {}
                    }
                    )
                }
                ,
                a.stop = c,
                h = function() {
                    return o(t.location.href)
                }
                ,
                d = function(n, i) {
                    var o = t.document
                      , a = e.fn[r].domain;
                    n !== i && (o.title = s.title,
                    o.open(),
                    a && o.write('<script>document.domain="' + a + '"<\/script>'),
                    o.close(),
                    t.location.hash = n)
                }
            }(),
            a
        }()
    }(e, this),
    function(e) {
        e.mobile = {}
    }(e),
    function(e, t, n) {
        e.extend(e.mobile, {
            version: "1.4.5",
            subPageUrlKey: "ui-page",
            hideUrlBar: !0,
            keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 0,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "a",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            buttonMarkup: {
                hoverDelay: 200
            },
            dynamicBaseEnabled: !0,
            pageContainer: e(),
            allowCrossDomainPages: !1,
            dialogHashKey: "&ui-state=dialog"
        })
    }(e),
    function(e, t, n) {
        var i = {}
          , o = e.find
          , a = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
          , r = /:jqmData\(([^)]*)\)/g;
        e.extend(e.mobile, {
            ns: "",
            getAttribute: function(t, n) {
                var i;
                (t = t.jquery ? t[0] : t) && t.getAttribute && (i = t.getAttribute("data-" + e.mobile.ns + n));
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : a.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                return i
            },
            nsNormalizeDict: i,
            nsNormalize: function(t) {
                return i[t] || (i[t] = e.camelCase(e.mobile.ns + t))
            },
            closestPageData: function(e) {
                return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")
            }
        }),
        e.fn.jqmData = function(t, n) {
            var i;
            return void 0 !== t && (t && (t = e.mobile.nsNormalize(t)),
            i = arguments.length < 2 || void 0 === n ? this.data(t) : this.data(t, n)),
            i
        }
        ,
        e.jqmData = function(t, n, i) {
            var o;
            return void 0 !== n && (o = e.data(t, n ? e.mobile.nsNormalize(n) : n, i)),
            o
        }
        ,
        e.fn.jqmRemoveData = function(t) {
            return this.removeData(e.mobile.nsNormalize(t))
        }
        ,
        e.jqmRemoveData = function(t, n) {
            return e.removeData(t, e.mobile.nsNormalize(n))
        }
        ,
        e.find = function(t, n, i, a) {
            return t.indexOf(":jqmData") > -1 && (t = t.replace(r, "[data-" + (e.mobile.ns || "") + "$1]")),
            o.call(this, t, n, i, a)
        }
        ,
        e.extend(e.find, o)
    }(e),
    function(e, t) {
        function i(t, n) {
            var i, a, r, s = t.nodeName.toLowerCase();
            return "area" === s ? (a = (i = t.parentNode).name,
            !(!t.href || !a || "map" !== i.nodeName.toLowerCase()) && !!(r = e("img[usemap=#" + a + "]")[0]) && o(r)) : (/input|select|textarea|button|object/.test(s) ? !t.disabled : "a" === s && t.href || n) && o(t)
        }
        function o(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
        }
        var a = 0
          , r = /^ui-id-\d+$/;
        e.ui = e.ui || {},
        e.extend(e.ui, {
            version: "c0ab71056b936627e8a7821f03c044aec6280a40",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }),
        e.fn.extend({
            focus: function(t) {
                return function(n, i) {
                    return "number" == typeof n ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            e(t).focus(),
                            i && i.call(t)
                        }, n)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            scrollParent: function() {
                var t;
                return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0),
                /fixed/.test(this.css("position")) || !t.length ? e(this[0].ownerDocument || n) : t
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    r.test(this.id) && e(this).removeAttr("id")
                })
            }
        }),
        e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(n) {
                    return !!e.data(n, t)
                }
            }) : function(t, n, i) {
                return !!e.data(t, i[3])
            }
            ,
            focusable: function(t) {
                return i(t, !isNaN(e.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var n = e.attr(t, "tabindex")
                  , o = isNaN(n);
                return (o || n >= 0) && i(t, !o)
            }
        }),
        e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, n) {
            function i(t, n, i, a) {
                return e.each(o, function() {
                    n -= parseFloat(e.css(t, "padding" + this)) || 0,
                    i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                    a && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                }),
                n
            }
            var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"]
              , a = n.toLowerCase()
              , r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
            e.fn["inner" + n] = function(t) {
                return void 0 === t ? r["inner" + n].call(this) : this.each(function() {
                    e(this).css(a, i(this, t) + "px")
                })
            }
            ,
            e.fn["outer" + n] = function(t, o) {
                return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function() {
                    e(this).css(a, i(this, t, !0, o) + "px")
                })
            }
        }),
        e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
        ),
        e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
            return function(n) {
                return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
            }
        }(e.fn.removeData)),
        e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
        e.support.selectstart = "onselectstart"in n.createElement("div"),
        e.fn.extend({
            disableSelection: function() {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(t) {
                if (void 0 !== t)
                    return this.css("zIndex", t);
                if (this.length)
                    for (var i, o, a = e(this[0]); a.length && a[0] !== n; ) {
                        if (("absolute" === (i = a.css("position")) || "relative" === i || "fixed" === i) && (o = parseInt(a.css("zIndex"), 10),
                        !isNaN(o) && 0 !== o))
                            return o;
                        a = a.parent()
                    }
                return 0
            }
        }),
        e.ui.plugin = {
            add: function(t, n, i) {
                var o, a = e.ui[t].prototype;
                for (o in i)
                    a.plugins[o] = a.plugins[o] || [],
                    a.plugins[o].push([n, i[o]])
            },
            call: function(e, t, n, i) {
                var o, a = e.plugins[t];
                if (a && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                    for (o = 0; o < a.length; o++)
                        e.options[a[o][0]] && a[o][1].apply(e.element, n)
            }
        }
    }(e),
    function(e, t, i) {
        e.extend(e.mobile, {
            window: e(t),
            document: e(n),
            keyCode: e.ui.keyCode,
            behaviors: {},
            silentScroll: function(n) {
                "number" !== e.type(n) && (n = e.mobile.defaultHomeScroll),
                e.event.special.scrollstart.enabled = !1,
                setTimeout(function() {
                    t.scrollTo(0, n),
                    e.mobile.document.trigger("silentscroll", {
                        x: 0,
                        y: n
                    })
                }, 20),
                setTimeout(function() {
                    e.event.special.scrollstart.enabled = !0
                }, 150)
            },
            getClosestBaseUrl: function(t) {
                var n = e(t).closest(".ui-page").jqmData("url")
                  , i = e.mobile.path.documentBase.hrefNoHash;
                return e.mobile.dynamicBaseEnabled && n && e.mobile.path.isPath(n) || (n = i),
                e.mobile.path.makeUrlAbsolute(n, i)
            },
            removeActiveLinkClass: function(t) {
                !e.mobile.activeClickedLink || e.mobile.activeClickedLink.closest("." + e.mobile.activePageClass).length && !t || e.mobile.activeClickedLink.removeClass(e.mobile.activeBtnClass),
                e.mobile.activeClickedLink = null
            },
            getInheritedTheme: function(e, t) {
                for (var n, i, o = e[0], a = "", r = /ui-(bar|body|overlay)-([a-z])\b/; o && !((n = o.className || "") && (i = r.exec(n)) && (a = i[2])); )
                    o = o.parentNode;
                return a || t || "a"
            },
            enhanceable: function(e) {
                return this.haveParents(e, "enhance")
            },
            hijackable: function(e) {
                return this.haveParents(e, "ajax")
            },
            haveParents: function(t, n) {
                if (!e.mobile.ignoreContentEnabled)
                    return t;
                var i, o, a, r, s = t.length, l = e();
                for (r = 0; r < s; r++) {
                    for (o = t.eq(r),
                    a = !1,
                    i = t[r]; i; ) {
                        if ("false" === (i.getAttribute ? i.getAttribute("data-" + e.mobile.ns + n) : "")) {
                            a = !0;
                            break
                        }
                        i = i.parentNode
                    }
                    a || (l = l.add(o))
                }
                return l
            },
            getScreenHeight: function() {
                return t.innerHeight || e.mobile.window.height()
            },
            resetActivePageHeight: function(t) {
                var n = e("." + e.mobile.activePageClass)
                  , i = n.height()
                  , o = n.outerHeight(!0);
                t = function(t, n) {
                    var i = t.parent()
                      , o = []
                      , a = function() {
                        var t = e(this)
                          , n = e.mobile.toolbar && t.data("mobile-toolbar") ? t.toolbar("option") : {
                            position: t.attr("data-" + e.mobile.ns + "position"),
                            updatePagePadding: !1 !== t.attr("data-" + e.mobile.ns + "update-page-padding")
                        };
                        return !("fixed" === n.position && !0 === n.updatePagePadding)
                    }
                      , r = i.children(":jqmData(role='header')").filter(a)
                      , s = t.children(":jqmData(role='header')")
                      , l = i.children(":jqmData(role='footer')").filter(a)
                      , c = t.children(":jqmData(role='footer')");
                    return 0 === s.length && r.length > 0 && (o = o.concat(r.toArray())),
                    0 === c.length && l.length > 0 && (o = o.concat(l.toArray())),
                    e.each(o, function(t, i) {
                        n -= e(i).outerHeight()
                    }),
                    Math.max(0, n)
                }(n, "number" == typeof t ? t : e.mobile.getScreenHeight()),
                n.css("min-height", ""),
                n.height() < t && n.css("min-height", t - (o - i))
            },
            loading: function() {
                var t = this.loading._widget || e(e.mobile.loader.prototype.defaultHtml).loader()
                  , n = t.loader.apply(t, arguments);
                return this.loading._widget = t,
                n
            }
        }),
        e.addDependents = function(t, n) {
            var i = e(t)
              , o = i.jqmData("dependents") || e();
            i.jqmData("dependents", e(o).add(n))
        }
        ,
        e.fn.extend({
            removeWithDependents: function() {
                e.removeWithDependents(this)
            },
            enhanceWithin: function() {
                var t, n = {}, i = e.mobile.page.prototype.keepNativeSelector(), o = this;
                for (t in e.mobile.nojs && e.mobile.nojs(this),
                e.mobile.links && e.mobile.links(this),
                e.mobile.degradeInputsWithin && e.mobile.degradeInputsWithin(this),
                e.fn.buttonMarkup && this.find(e.fn.buttonMarkup.initSelector).not(i).jqmEnhanceable().buttonMarkup(),
                e.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(i).jqmEnhanceable().fieldcontain(),
                e.each(e.mobile.widgets, function(t, a) {
                    if (a.initSelector) {
                        var r = e.mobile.enhanceable(o.find(a.initSelector));
                        r.length > 0 && (r = r.not(i)),
                        r.length > 0 && (n[a.prototype.widgetName] = r)
                    }
                }),
                n)
                    n[t][t]();
                return this
            },
            addDependents: function(t) {
                e.addDependents(this, t)
            },
            getEncodedText: function() {
                return e("<a>").text(this.text()).html()
            },
            jqmEnhanceable: function() {
                return e.mobile.enhanceable(this)
            },
            jqmHijackable: function() {
                return e.mobile.hijackable(this)
            }
        }),
        e.removeWithDependents = function(t) {
            var n = e(t);
            (n.jqmData("dependents") || e()).remove(),
            n.remove()
        }
        ,
        e.addDependents = function(t, n) {
            var i = e(t)
              , o = i.jqmData("dependents") || e();
            i.jqmData("dependents", e(o).add(n))
        }
        ,
        e.find.matches = function(t, n) {
            return e.find(t, null, null, n)
        }
        ,
        e.find.matchesSelector = function(t, n) {
            return e.find(n, null, null, [t]).length > 0
        }
    }(e, this),
    function(e, i) {
        t.matchMedia = t.matchMedia || function(e, t) {
            var n, i = e.documentElement, o = i.firstElementChild || i.firstChild, a = e.createElement("body"), r = e.createElement("div");
            return r.id = "mq-test-1",
            r.style.cssText = "position:absolute;top:-100em",
            a.style.background = "none",
            a.appendChild(r),
            function(e) {
                return r.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>',
                i.insertBefore(a, o),
                n = 42 === r.offsetWidth,
                i.removeChild(a),
                {
                    matches: n,
                    media: e
                }
            }
        }(n),
        e.mobile.media = function(e) {
            return t.matchMedia(e).matches
        }
    }(e),
    function(e, t) {
        var i = {
            touch: "ontouchend"in n
        };
        e.mobile.support = e.mobile.support || {},
        e.extend(e.support, i),
        e.extend(e.mobile.support, i)
    }(e),
    function(e, n) {
        e.extend(e.support, {
            orientation: "orientation"in t && "onorientationchange"in t
        })
    }(e),
    function(e, i) {
        function o(e) {
            var t, n = e.charAt(0).toUpperCase() + e.substr(1), o = (e + " " + l.join(n + " ") + n).split(" ");
            for (t in o)
                if (s[o[t]] !== i)
                    return !0
        }
        var a, r = e("<body>").prependTo("html"), s = r[0].style, l = ["Webkit", "Moz", "O"], c = "palmGetResource"in t, u = t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini), d = t.blackberry && !o("-webkit-transform");
        e.extend(e.mobile, {
            browser: {}
        }),
        e.mobile.browser.oldIE = function() {
            var e = 3
              , t = n.createElement("div")
              , i = t.all || [];
            do {
                t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><br><![endif]--\x3e"
            } while (i[0]);
            return e > 4 ? e : !e
        }(),
        e.extend(e.support, {
            pushState: "pushState"in history && "replaceState"in history && !(t.navigator.userAgent.indexOf("Firefox") >= 0 && t.top !== t) && -1 === t.navigator.userAgent.search(/CriOS/),
            mediaquery: e.mobile.media("only all"),
            cssPseudoElement: !!o("content"),
            touchOverflow: !!o("overflowScrolling"),
            cssTransform3d: function() {
                var o, a, s, c = "transform-3d", u = e.mobile.media("(-" + l.join("-" + c + "),(-") + "-" + c + "),(" + c + ")");
                if (u)
                    return !!u;
                for (s in o = n.createElement("div"),
                a = {
                    MozTransform: "-moz-transform",
                    transform: "transform"
                },
                r.append(o),
                a)
                    o.style[s] !== i && (o.style[s] = "translate3d( 100px, 1px, 1px )",
                    u = t.getComputedStyle(o).getPropertyValue(a[s]));
                return !!u && "none" !== u
            }(),
            boxShadow: !!o("boxShadow") && !d,
            fixedPosition: function() {
                var e = t
                  , n = navigator.userAgent
                  , i = navigator.platform
                  , o = n.match(/AppleWebKit\/([0-9]+)/)
                  , a = !!o && o[1]
                  , r = n.match(/Fennec\/([0-9]+)/)
                  , s = !!r && r[1]
                  , l = n.match(/Opera Mobi\/([0-9]+)/)
                  , c = !!l && l[1];
                return !((i.indexOf("iPhone") > -1 || i.indexOf("iPad") > -1 || i.indexOf("iPod") > -1) && a && a < 534 || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || l && c < 7458 || n.indexOf("Android") > -1 && a && a < 533 || s && s < 6 || "palmGetResource"in t && a && a < 534 || n.indexOf("MeeGo") > -1 && n.indexOf("NokiaBrowser/8.5.0") > -1)
            }(),
            scrollTop: ("pageXOffset"in t || "scrollTop"in n.documentElement || "scrollTop"in r[0]) && !c && !u,
            dynamicBaseTag: function() {
                var t, n = location.protocol + "//" + location.host + location.pathname + "ui-dir/", i = e("head base"), o = null, a = "";
                return i.length ? a = i.attr("href") : i = o = e("<base>", {
                    href: n
                }).appendTo("head"),
                t = e("<a href='testurl' />").prependTo(r)[0].href,
                i[0].href = a || location.pathname,
                o && o.remove(),
                0 === t.indexOf(n)
            }(),
            cssPointerEvents: function() {
                var e, i = n.createElement("x"), o = n.documentElement, a = t.getComputedStyle;
                return "pointerEvents"in i.style && (i.style.pointerEvents = "auto",
                i.style.pointerEvents = "x",
                o.appendChild(i),
                e = a && "auto" === a(i, "").pointerEvents,
                o.removeChild(i),
                !!e)
            }(),
            boundingRect: void 0 !== n.createElement("div").getBoundingClientRect,
            inlineSVG: function() {
                var n = t
                  , i = !(!n.document.createElementNS || !n.document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || n.opera && -1 === navigator.userAgent.indexOf("Chrome"))
                  , o = function(t) {
                    t && i || e("html").addClass("ui-nosvg")
                }
                  , a = new n.Image;
                a.onerror = function() {
                    o(!1)
                }
                ,
                a.onload = function() {
                    o(1 === a.width && 1 === a.height)
                }
                ,
                a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            }
        }),
        r.remove(),
        a = function() {
            var e = t.navigator.userAgent;
            return e.indexOf("Nokia") > -1 && (e.indexOf("Symbian/3") > -1 || e.indexOf("Series60/5") > -1) && e.indexOf("AppleWebKit") > -1 && e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
        }(),
        e.mobile.gradeA = function() {
            return (e.support.mediaquery && e.support.cssPseudoElement || e.mobile.browser.oldIE && e.mobile.browser.oldIE >= 8) && (e.support.boundingRect || null !== e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))
        }
        ,
        e.mobile.ajaxBlacklist = t.blackberry && !t.WebKitPoint || u || a,
        a && e(function() {
            e("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet")
        }),
        e.support.boxShadow || e("html").addClass("ui-noboxshadow")
    }(e),
    function(e, t) {
        var n, i = e.mobile.window, o = function() {};
        e.event.special.beforenavigate = {
            setup: function() {
                i.on("navigate", o)
            },
            teardown: function() {
                i.off("navigate", o)
            }
        },
        e.event.special.navigate = n = {
            bound: !1,
            pushStateEnabled: !0,
            originalEventName: void 0,
            isPushStateEnabled: function() {
                return e.support.pushState && !0 === e.mobile.pushStateEnabled && this.isHashChangeEnabled()
            },
            isHashChangeEnabled: function() {
                return !0 === e.mobile.hashListeningEnabled
            },
            popstate: function(t) {
                var n = new e.Event("navigate")
                  , o = new e.Event("beforenavigate")
                  , a = t.originalEvent.state || {};
                o.originalEvent = t,
                i.trigger(o),
                o.isDefaultPrevented() || (t.historyState && e.extend(a, t.historyState),
                n.originalEvent = t,
                setTimeout(function() {
                    i.trigger(n, {
                        state: a
                    })
                }, 0))
            },
            hashchange: function(t) {
                var n = new e.Event("navigate")
                  , o = new e.Event("beforenavigate");
                o.originalEvent = t,
                i.trigger(o),
                o.isDefaultPrevented() || (n.originalEvent = t,
                i.trigger(n, {
                    state: t.hashchangeState || {}
                }))
            },
            setup: function() {
                n.bound || (n.bound = !0,
                n.isPushStateEnabled() ? (n.originalEventName = "popstate",
                i.bind("popstate.navigate", n.popstate)) : n.isHashChangeEnabled() && (n.originalEventName = "hashchange",
                i.bind("hashchange.navigate", n.hashchange)))
            }
        }
    }(e),
    function(e) {
        e.event.special.throttledresize = {
            setup: function() {
                e(this).bind("resize", o)
            },
            teardown: function() {
                e(this).unbind("resize", o)
            }
        };
        var t, n, i, o = function() {
            n = (new Date).getTime(),
            (i = n - a) >= 250 ? (a = n,
            e(this).trigger("throttledresize")) : (t && clearTimeout(t),
            t = setTimeout(o, 250 - i))
        }, a = 0
    }(e),
    function(e, t) {
        function i() {
            var e = o();
            e !== a && (a = e,
            u.trigger(d))
        }
        var o, a, r, s, l, c, u = e(t), d = "orientationchange", h = {
            0: !0,
            180: !0
        };
        e.support.orientation && (50,
        r = (l = t.innerWidth || u.width()) > (c = t.innerHeight || u.height()) && l - c > 50,
        s = h[t.orientation],
        (r && s || !r && !s) && (h = {
            "-90": !0,
            90: !0
        })),
        e.event.special.orientationchange = e.extend({}, e.event.special.orientationchange, {
            setup: function() {
                if (e.support.orientation && !e.event.special.orientationchange.disabled)
                    return !1;
                a = o(),
                u.bind("throttledresize", i)
            },
            teardown: function() {
                if (e.support.orientation && !e.event.special.orientationchange.disabled)
                    return !1;
                u.unbind("throttledresize", i)
            },
            add: function(e) {
                var t = e.handler;
                e.handler = function(e) {
                    return e.orientation = o(),
                    t.apply(this, arguments)
                }
            }
        }),
        e.event.special.orientationchange.orientation = o = function() {
            var i = n.documentElement;
            return (e.support.orientation ? h[t.orientation] : i && i.clientWidth / i.clientHeight < 1.1) ? "portrait" : "landscape"
        }
        ,
        e.fn[d] = function(e) {
            return e ? this.bind(d, e) : this.trigger(d)
        }
    }(e, this),
    function(e, t, n, i) {
        function o(e) {
            for (; e && void 0 !== e.originalEvent; )
                e = e.originalEvent;
            return e
        }
        function a(t, n) {
            var a, r, s, l, c, u, d, h, f, p = t.type;
            if ((t = e.Event(t)).type = n,
            a = t.originalEvent,
            r = e.event.props,
            p.search(/^(mouse|click)/) > -1 && (r = A),
            a)
                for (d = r.length; d; )
                    t[l = r[--d]] = a[l];
            if (p.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1),
            -1 !== p.search(/^touch/) && (p = (s = o(a)).touches,
            c = s.changedTouches,
            u = p && p.length ? p[0] : c && c.length ? c[0] : i))
                for (h = 0,
                f = T.length; h < f; h++)
                    t[l = T[h]] = u[l];
            return t
        }
        function r(t) {
            for (var n, i, o = {}; t; ) {
                for (i in n = e.data(t, y))
                    n[i] && (o[i] = o.hasVirtualBinding = !0);
                t = t.parentNode
            }
            return o
        }
        function s() {
            M = !0
        }
        function l() {
            M = !1
        }
        function c() {
            u(),
            k = setTimeout(function() {
                k = 0,
                L = 0,
                q.length = 0,
                O = !1,
                s()
            }, e.vmouse.resetTimerDuration)
        }
        function u() {
            k && (clearTimeout(k),
            k = 0)
        }
        function d(t, n, i) {
            var o;
            return (i && i[t] || !i && function(t, n) {
                for (var i; t; ) {
                    if ((i = e.data(t, y)) && (!n || i[n]))
                        return t;
                    t = t.parentNode
                }
                return null
            }(n.target, t)) && (o = a(n, t),
            e(n.target).trigger(o)),
            o
        }
        function h(t) {
            var n, i = e.data(t.target, x);
            O || L && L === i || (n = d("v" + t.type, t)) && (n.isDefaultPrevented() && t.preventDefault(),
            n.isPropagationStopped() && t.stopPropagation(),
            n.isImmediatePropagationStopped() && t.stopImmediatePropagation())
        }
        function f(t) {
            var n, i, a, s = o(t).touches;
            s && 1 === s.length && ((i = r(n = t.target)).hasVirtualBinding && (L = H++,
            e.data(n, x, L),
            u(),
            l(),
            N = !1,
            a = o(t).touches[0],
            C = a.pageX,
            j = a.pageY,
            d("vmouseover", t, i),
            d("vmousedown", t, i)))
        }
        function p(e) {
            M || (N || d("vmousecancel", e, r(e.target)),
            N = !0,
            c())
        }
        function m(t) {
            if (!M) {
                var n = o(t).touches[0]
                  , i = N
                  , a = e.vmouse.moveDistanceThreshold
                  , s = r(t.target);
                (N = N || Math.abs(n.pageX - C) > a || Math.abs(n.pageY - j) > a) && !i && d("vmousecancel", t, s),
                d("vmousemove", t, s),
                c()
            }
        }
        function v(e) {
            if (!M) {
                s();
                var t, n, i = r(e.target);
                d("vmouseup", e, i),
                N || (t = d("vclick", e, i)) && t.isDefaultPrevented() && (n = o(e).changedTouches[0],
                q.push({
                    touchID: L,
                    x: n.clientX,
                    y: n.clientY
                }),
                O = !0),
                d("vmouseout", e, i),
                N = !1,
                c()
            }
        }
        function g(t) {
            var n, i = e.data(t, y);
            if (i)
                for (n in i)
                    if (i[n])
                        return !0;
            return !1
        }
        function b() {}
        var w, E, y = "virtualMouseBindings", x = "virtualTouchID", D = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), T = "clientX clientY pageX pageY screenX screenY".split(" "), P = e.event.mouseHooks ? e.event.mouseHooks.props : [], A = e.event.props.concat(P), S = {}, k = 0, C = 0, j = 0, N = !1, q = [], O = !1, M = !1, I = "addEventListener"in n, B = e(n), H = 1, L = 0;
        for (e.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        },
        E = 0; E < D.length; E++)
            e.event.special[D[E]] = function(t) {
                var n = t.substr(1);
                return {
                    setup: function() {
                        g(this) || e.data(this, y, {}),
                        e.data(this, y)[t] = !0,
                        S[t] = (S[t] || 0) + 1,
                        1 === S[t] && B.bind(n, h),
                        e(this).bind(n, b),
                        I && (S.touchstart = (S.touchstart || 0) + 1,
                        1 === S.touchstart && B.bind("touchstart", f).bind("touchend", v).bind("touchmove", m).bind("scroll", p))
                    },
                    teardown: function() {
                        --S[t],
                        S[t] || B.unbind(n, h),
                        I && (--S.touchstart || B.unbind("touchstart", f).unbind("touchmove", m).unbind("touchend", v).unbind("scroll", p));
                        var i = e(this)
                          , o = e.data(this, y);
                        o && (o[t] = !1),
                        i.unbind(n, b),
                        g(this) || i.removeData(y)
                    }
                }
            }(D[E]);
        I && n.addEventListener("click", function(t) {
            var n, i, o, a, r, s = q.length, l = t.target;
            if (s)
                for (n = t.clientX,
                i = t.clientY,
                w = e.vmouse.clickDistanceThreshold,
                o = l; o; ) {
                    for (a = 0; a < s; a++)
                        if (r = q[a],
                        o === l && Math.abs(r.x - n) < w && Math.abs(r.y - i) < w || e.data(o, x) === r.touchID)
                            return t.preventDefault(),
                            void t.stopPropagation();
                    o = o.parentNode
                }
        }, !0)
    }(e, 0, n),
    function(e, t, i) {
        function o(t, n, o, a) {
            var r = o.type;
            o.type = n,
            a ? e.event.trigger(o, i, t) : e.event.dispatch.call(t, o),
            o.type = r
        }
        var a = e(n)
          , r = e.mobile.support.touch
          , s = r ? "touchstart" : "mousedown"
          , l = r ? "touchend" : "mouseup"
          , c = r ? "touchmove" : "mousemove";
        e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) {
            e.fn[n] = function(e) {
                return e ? this.bind(n, e) : this.trigger(n)
            }
        }),
        e.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function t(e, t) {
                    o(a, (n = t) ? "scrollstart" : "scrollstop", e)
                }
                var n, i, a = this;
                e(a).bind("touchmove scroll", function(o) {
                    e.event.special.scrollstart.enabled && (n || t(o, !0),
                    clearTimeout(i),
                    i = setTimeout(function() {
                        t(o, !1)
                    }, 50))
                })
            },
            teardown: function() {
                e(this).unbind("touchmove scroll")
            }
        },
        e.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function() {
                var t = this
                  , n = e(t)
                  , i = !1;
                n.bind("vmousedown", function(r) {
                    function s() {
                        clearTimeout(u)
                    }
                    function l() {
                        s(),
                        n.unbind("vclick", c).unbind("vmouseup", s),
                        a.unbind("vmousecancel", l)
                    }
                    function c(e) {
                        l(),
                        i || d !== e.target ? i && e.preventDefault() : o(t, "tap", e)
                    }
                    if (i = !1,
                    r.which && 1 !== r.which)
                        return !1;
                    var u, d = r.target;
                    n.bind("vmouseup", s).bind("vclick", c),
                    a.bind("vmousecancel", l),
                    u = setTimeout(function() {
                        e.event.special.tap.emitTapOnTaphold || (i = !0),
                        o(t, "taphold", e.Event("taphold", {
                            target: d
                        }))
                    }, e.event.special.tap.tapholdThreshold)
                })
            },
            teardown: function() {
                e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),
                a.unbind("vmousecancel")
            }
        },
        e.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 30,
            getLocation: function(e) {
                var n = t.pageXOffset
                  , i = t.pageYOffset
                  , o = e.clientX
                  , a = e.clientY;
                return 0 === e.pageY && Math.floor(a) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(o) > Math.floor(e.pageX) ? (o -= n,
                a -= i) : (a < e.pageY - i || o < e.pageX - n) && (o = e.pageX - n,
                a = e.pageY - i),
                {
                    x: o,
                    y: a
                }
            },
            start: function(t) {
                var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t
                  , i = e.event.special.swipe.getLocation(n);
                return {
                    time: (new Date).getTime(),
                    coords: [i.x, i.y],
                    origin: e(t.target)
                }
            },
            stop: function(t) {
                var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t
                  , i = e.event.special.swipe.getLocation(n);
                return {
                    time: (new Date).getTime(),
                    coords: [i.x, i.y]
                }
            },
            handleSwipe: function(t, n, i, a) {
                if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
                    var r = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight";
                    return o(i, "swipe", e.Event("swipe", {
                        target: a,
                        swipestart: t,
                        swipestop: n
                    }), !0),
                    o(i, r, e.Event(r, {
                        target: a,
                        swipestart: t,
                        swipestop: n
                    }), !0),
                    !0
                }
                return !1
            },
            eventInProgress: !1,
            setup: function() {
                var t, n = this, i = e(n), o = {};
                (t = e.data(this, "mobile-events")) || (t = {
                    length: 0
                },
                e.data(this, "mobile-events", t)),
                t.length++,
                t.swipe = o,
                o.start = function(t) {
                    if (!e.event.special.swipe.eventInProgress) {
                        e.event.special.swipe.eventInProgress = !0;
                        var i, r = e.event.special.swipe.start(t), s = t.target, u = !1;
                        o.move = function(t) {
                            r && !t.isDefaultPrevented() && (i = e.event.special.swipe.stop(t),
                            u || (u = e.event.special.swipe.handleSwipe(r, i, n, s)) && (e.event.special.swipe.eventInProgress = !1),
                            Math.abs(r.coords[0] - i.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
                        }
                        ,
                        o.stop = function() {
                            u = !0,
                            e.event.special.swipe.eventInProgress = !1,
                            a.off(c, o.move),
                            o.move = null
                        }
                        ,
                        a.on(c, o.move).one(l, o.stop)
                    }
                }
                ,
                i.on(s, o.start)
            },
            teardown: function() {
                var t, n;
                (t = e.data(this, "mobile-events")) && (n = t.swipe,
                delete t.swipe,
                0 == --t.length && e.removeData(this, "mobile-events")),
                n && (n.start && e(this).off(s, n.start),
                n.move && a.off(c, n.move),
                n.stop && a.off(l, n.stop))
            }
        },
        e.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, function(t, n) {
            e.event.special[t] = {
                setup: function() {
                    e(this).bind(n, e.noop)
                },
                teardown: function() {
                    e(this).unbind(n)
                }
            }
        })
    }(e, this)
});

!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event
          , h = i.call(arguments, 1)
          , j = 0
          , l = 0
          , m = 0
          , n = 0
          , o = 0
          , p = 0;
        if (b = a.event.fix(g),
        b.type = "mousewheel",
        "detail"in g && (m = -1 * g.detail),
        "wheelDelta"in g && (m = g.wheelDelta),
        "wheelDeltaY"in g && (m = g.wheelDeltaY),
        "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX),
        "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m,
        m = 0),
        j = 0 === m ? l : m,
        "deltaY"in g && (m = -1 * g.deltaY,
        j = m),
        "deltaX"in g && (l = g.deltaX,
        0 === m && (j = -1 * l)),
        0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q,
                m *= q,
                l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r,
                m *= r,
                l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)),
            (!f || f > n) && (f = n,
            d(g, n) && (f /= 40)),
            d(g, n) && (j /= 40,
            l /= 40,
            m /= 40),
            j = Math[j >= 1 ? "floor" : "ceil"](j / f),
            l = Math[l >= 1 ? "floor" : "ceil"](l / f),
            m = Math[m >= 1 ? "floor" : "ceil"](m / f),
            k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left,
                p = b.clientY - s.top
            }
            return b.deltaX = l,
            b.deltaY = m,
            b.deltaFactor = f,
            b.offsetX = o,
            b.offsetY = p,
            b.deltaMode = 0,
            h.unshift(b, j, l, m),
            e && clearTimeout(e),
            e = setTimeout(c, 200),
            (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }
    function c() {
        f = null
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j; )
            a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c; )
                    this.addEventListener(h[--c], b, !1);
            else
                this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
            a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c; )
                    this.removeEventListener(h[--c], b, !1);
            else
                this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"),
            a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)
              , d = c["offsetParent"in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")),
            parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event
          , h = i.call(arguments, 1)
          , j = 0
          , l = 0
          , m = 0
          , n = 0
          , o = 0
          , p = 0;
        if (b = a.event.fix(g),
        b.type = "mousewheel",
        "detail"in g && (m = -1 * g.detail),
        "wheelDelta"in g && (m = g.wheelDelta),
        "wheelDeltaY"in g && (m = g.wheelDeltaY),
        "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX),
        "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m,
        m = 0),
        j = 0 === m ? l : m,
        "deltaY"in g && (m = -1 * g.deltaY,
        j = m),
        "deltaX"in g && (l = g.deltaX,
        0 === m && (j = -1 * l)),
        0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q,
                m *= q,
                l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r,
                m *= r,
                l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)),
            (!f || f > n) && (f = n,
            d(g, n) && (f /= 40)),
            d(g, n) && (j /= 40,
            l /= 40,
            m /= 40),
            j = Math[j >= 1 ? "floor" : "ceil"](j / f),
            l = Math[l >= 1 ? "floor" : "ceil"](l / f),
            m = Math[m >= 1 ? "floor" : "ceil"](m / f),
            k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left,
                p = b.clientY - s.top
            }
            return b.deltaX = l,
            b.deltaY = m,
            b.deltaFactor = f,
            b.offsetX = o,
            b.offsetY = p,
            b.deltaMode = 0,
            h.unshift(b, j, l, m),
            e && clearTimeout(e),
            e = setTimeout(c, 200),
            (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }
    function c() {
        f = null
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j; )
            a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c; )
                    this.addEventListener(h[--c], b, !1);
            else
                this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
            a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c; )
                    this.removeEventListener(h[--c], b, !1);
            else
                this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"),
            a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)
              , d = c["offsetParent"in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")),
            parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    !function(t) {
        var o = "function" == typeof define && define.amd
          , a = "undefined" != typeof module && module.exports
          , n = "https:" == document.location.protocol ? "https:" : "http:"
          , i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))),
        t()
    }(function() {
        var t, o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1, d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], u = {
            init: function(t) {
                var t = e.extend(!0, {}, i, t)
                  , o = f.call(this);
                if (t.live) {
                    var s = t.liveSelector || this.selector || n
                      , c = e(s);
                    if ("off" === t.live)
                        return void m(s);
                    l[s] = setTimeout(function() {
                        c.mCustomScrollbar(t),
                        "once" === t.live && c.length && m(s)
                    }, 500)
                } else
                    m(s);
                return t.setWidth = t.set_width ? t.set_width : t.setWidth,
                t.setHeight = t.set_height ? t.set_height : t.setHeight,
                t.axis = t.horizontalScroll ? "x" : p(t.axis),
                t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia,
                "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }),
                t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount,
                t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta,
                t.scrollButtons.scrollType = g(t.scrollButtons.scrollType),
                h(t),
                e(o).each(function() {
                    var o = e(this);
                    if (!o.data(a)) {
                        o.data(a, {
                            idx: ++r,
                            opt: t,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: o.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var n = o.data(a)
                          , i = n.opt
                          , l = o.data("mcs-axis")
                          , s = o.data("mcs-scrollbar-position")
                          , c = o.data("mcs-theme");
                        l && (i.axis = l),
                        s && (i.scrollbarPosition = s),
                        c && (i.theme = c,
                        h(i)),
                        v.call(this),
                        n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this),
                        e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]),
                        u.update.call(null, o)
                    }
                })
            },
            update: function(t, o) {
                var n = t || f.call(this);
                return e(n).each(function() {
                    var t = e(this);
                    if (t.data(a)) {
                        var n = t.data(a)
                          , i = n.opt
                          , r = e("#mCSB_" + n.idx + "_container")
                          , l = e("#mCSB_" + n.idx)
                          , s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                        if (!r.length)
                            return;
                        n.tweenRunning && Q(t),
                        o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this),
                        t.hasClass(d[3]) && t.removeClass(d[3]),
                        t.hasClass(d[4]) && t.removeClass(d[4]),
                        l.css("max-height", "none"),
                        l.height() !== t.height() && l.css("max-height", t.height()),
                        _.call(this),
                        "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)),
                        n.overflowed = y.call(this),
                        M.call(this),
                        i.autoDraggerLength && S.call(this),
                        b.call(this),
                        T.call(this);
                        var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                        "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.y = null) : (B.call(this),
                        "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.x = null) : (B.call(this),
                        "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)),
                        N.call(this)
                    }
                })
            },
            scrollTo: function(t, o) {
                if ("undefined" != typeof t && null != t) {
                    var n = f.call(this);
                    return e(n).each(function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a)
                              , r = i.opt
                              , l = {
                                trigger: "external",
                                scrollInertia: r.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                timeout: 60,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }
                              , s = e.extend(!0, {}, l, o)
                              , c = Y.call(this, t)
                              , d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                            c[0] = X.call(this, c[0], "y"),
                            c[1] = X.call(this, c[1], "x"),
                            s.moveDragger && (c[0] *= i.scrollRatio.y,
                            c[1] *= i.scrollRatio.x),
                            s.dur = ne() ? 0 : d,
                            setTimeout(function() {
                                null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y",
                                s.overwrite = "all",
                                G(n, c[0].toString(), s)),
                                null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x",
                                s.overwrite = "none",
                                G(n, c[1].toString(), s))
                            }, s.timeout)
                        }
                    })
                }
            },
            stop: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var t = e(this);
                    t.data(a) && Q(t)
                })
            },
            disable: function(t) {
                var o = f.call(this);
                return e(o).each(function() {
                    var o = e(this);
                    if (o.data(a)) {
                        o.data(a);
                        N.call(this, "remove"),
                        k.call(this),
                        t && B.call(this),
                        M.call(this, !0),
                        o.addClass(d[3])
                    }
                })
            },
            destroy: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var n = e(this);
                    if (n.data(a)) {
                        var i = n.data(a)
                          , r = i.opt
                          , l = e("#mCSB_" + i.idx)
                          , s = e("#mCSB_" + i.idx + "_container")
                          , c = e(".mCSB_" + i.idx + "_scrollbar");
                        r.live && m(r.liveSelector || e(t).selector),
                        N.call(this, "remove"),
                        k.call(this),
                        B.call(this),
                        n.removeData(a),
                        $(this, "mcs"),
                        c.remove(),
                        s.find("img." + d[2]).removeClass(d[2]),
                        l.replaceWith(s.contents()),
                        n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                    }
                })
            }
        }, f = function() {
            return "object" != typeof e(this) || e(this).length < 1 ? n : this
        }, h = function(t) {
            var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]
              , a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]
              , n = ["minimal", "minimal-dark"]
              , i = ["minimal", "minimal-dark"]
              , r = ["minimal", "minimal-dark"];
            t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength,
            t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar,
            t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable,
            t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar,
            t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
        }, m = function(e) {
            l[e] && (clearTimeout(l[e]),
            $(l, e))
        }, p = function(e) {
            return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
        }, g = function(e) {
            return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
        }, v = function() {
            var t = e(this)
              , n = t.data(a)
              , i = n.opt
              , r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : ""
              , l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"]
              , s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical"
              , c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0]
              , u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
              , f = i.autoHideScrollbar ? " " + d[6] : ""
              , h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
            i.setWidth && t.css("width", i.setWidth),
            i.setHeight && t.css("height", i.setHeight),
            i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft,
            t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
            var m = e("#mCSB_" + n.idx)
              , p = e("#mCSB_" + n.idx + "_container");
            "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)),
            "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"),
            t.css("overflow", "visible"),
            m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c),
            p.wrap(u)),
            w.call(this);
            var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
            g[0].css("min-height", g[0].height()),
            g[1].css("min-width", g[1].width())
        }, x = function(t) {
            var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                return e(this).outerWidth(!0)
            }).get())]
              , a = t.parent().width();
            return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
        }, _ = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e("#mCSB_" + o.idx + "_container");
            if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                i.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll"
                });
                var r = Math.ceil(i[0].scrollWidth);
                3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                    width: r,
                    "min-width": "100%",
                    "overflow-x": "inherit"
                }) : i.css({
                    "overflow-x": "inherit",
                    position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                }).unwrap()
            }
        }, w = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e(".mCSB_" + o.idx + "_scrollbar:first")
              , r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : ""
              , l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"]
              , s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
            n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
        }, S = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)]
              , c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())]
              , d = s && c[1] < c[0] ? c[0] : c[1]
              , u = s && c[3] < c[2] ? c[2] : c[3];
            r[0].css({
                height: d,
                "max-height": r[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": c[0] + "px"
            }),
            r[1].css({
                width: u,
                "max-width": r[1].parent().width() - 10
            })
        }, b = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()]
              , s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
            o.scrollRatio = {
                y: s[0],
                x: s[1]
            }
        }, C = function(e, t, o) {
            var a = o ? d[0] + "_expanded" : ""
              , n = e.closest(".mCSB_scrollTools");
            "active" === t ? (e.toggleClass(d[0] + " " + a),
            n.toggleClass(d[1]),
            e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]),
            n.removeClass(d[1])) : (e.addClass(d[0]),
            n.addClass(d[1])))
        }, y = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = null == o.overflowed ? i.height() : i.outerHeight(!1)
              , l = null == o.overflowed ? i.width() : i.outerWidth(!1)
              , s = i[0].scrollHeight
              , c = i[0].scrollWidth;
            return s > r && (r = s),
            c > l && (l = c),
            [r > n.height(), l > n.width()]
        }, B = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e("#mCSB_" + o.idx)
              , r = e("#mCSB_" + o.idx + "_container")
              , l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
            if (Q(t),
            ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0),
            G(t, "_resetY")),
            "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                var s = dx = 0;
                "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1),
                dx = Math.abs(s / o.scrollRatio.x)),
                r.css("left", s),
                l[1].css("left", dx),
                G(t, "_resetX")
            }
        }, T = function() {
            function t() {
                r = setTimeout(function() {
                    e.event.special.mousewheel ? (clearTimeout(r),
                    W.call(o[0])) : t()
                }, 100)
            }
            var o = e(this)
              , n = o.data(a)
              , i = n.opt;
            if (!n.bindEvents) {
                if (I.call(this),
                i.contentTouchScroll && D.call(this),
                E.call(this),
                i.mouseWheel.enable) {
                    var r;
                    t()
                }
                P.call(this),
                U.call(this),
                i.advanced.autoScrollOnFocus && H.call(this),
                i.scrollButtons.enable && F.call(this),
                i.keyboard.enable && q.call(this),
                n.bindEvents = !0
            }
        }, k = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = ".mCSB_" + o.idx + "_scrollbar"
              , l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a")
              , s = e("#mCSB_" + o.idx + "_container");
            n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)),
            n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)),
            o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i),
            l.each(function() {
                e(this).unbind("." + i)
            }),
            clearTimeout(t[0]._focusTimeout),
            $(t[0], "_focusTimeout"),
            clearTimeout(o.sequential.step),
            $(o.sequential, "step"),
            clearTimeout(s[0].onCompleteTimeout),
            $(s[0], "onCompleteTimeout"),
            o.bindEvents = !1)
        }, M = function(t) {
            var o = e(this)
              , n = o.data(a)
              , i = n.opt
              , r = e("#mCSB_" + n.idx + "_container_wrapper")
              , l = r.length ? r : e("#mCSB_" + n.idx + "_container")
              , s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")]
              , c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
            "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"),
            l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"),
            l.removeClass(d[10])) : (s[0].css("display", "none"),
            l.addClass(d[10])),
            l.addClass(d[8]))),
            "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"),
            l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"),
            l.removeClass(d[11])) : (s[1].css("display", "none"),
            l.addClass(d[11])),
            l.addClass(d[9]))),
            n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
        }, O = function(t) {
            var o = t.type
              , a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null
              , n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
            switch (o) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
                return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
                  , r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
            default:
                return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
            }
        }, I = function() {
            function t(e, t, a, n) {
                if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0,
                o.attr("id") === f[1])
                    var i = "x"
                      , s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
                else
                    var i = "y"
                      , s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                G(r, s.toString(), {
                    dir: i,
                    drag: !0
                })
            }
            var o, n, i, r = e(this), l = r.data(a), d = l.opt, u = a + "_" + l.idx, f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"], h = e("#mCSB_" + l.idx + "_container"), m = e("#" + f[0] + ",#" + f[1]), p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m, g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
            m.bind("contextmenu." + u, function(e) {
                e.preventDefault()
            }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) {
                if (t.stopImmediatePropagation(),
                t.preventDefault(),
                ee(t)) {
                    c = !0,
                    s && (document.onselectstart = function() {
                        return !1
                    }
                    ),
                    L.call(h, !1),
                    Q(r),
                    o = e(this);
                    var a = o.offset()
                      , l = O(t)[0] - a.top
                      , u = O(t)[1] - a.left
                      , f = o.height() + a.top
                      , m = o.width() + a.left;
                    f > l && l > 0 && m > u && u > 0 && (n = l,
                    i = u),
                    C(o, "active", d.autoExpandScrollbar)
                }
            }).bind("touchmove." + u, function(e) {
                e.stopImmediatePropagation(),
                e.preventDefault();
                var a = o.offset()
                  , r = O(e)[0] - a.top
                  , l = O(e)[1] - a.left;
                t(n, i, r, l)
            }),
            e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) {
                if (o) {
                    var a = o.offset()
                      , r = O(e)[0] - a.top
                      , l = O(e)[1] - a.left;
                    if (n === r && i === l)
                        return;
                    t(n, i, r, l)
                }
            }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() {
                o && (C(o, "active", d.autoExpandScrollbar),
                o = null),
                c = !1,
                s && (document.onselectstart = null),
                L.call(h, !0)
            })
        }, D = function() {
            function o(e) {
                if (!te(e) || c || O(e)[2])
                    return void (t = 0);
                t = 1,
                b = 0,
                C = 0,
                d = 1,
                y.removeClass("mCS_touch_action");
                var o = I.offset();
                u = O(e)[0] - o.top,
                f = O(e)[1] - o.left,
                z = [O(e)[0], O(e)[1]]
            }
            function n(e) {
                if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(),
                e.stopImmediatePropagation(),
                (!C || b) && d)) {
                    g = K();
                    var t = M.offset()
                      , o = O(e)[0] - t.top
                      , a = O(e)[1] - t.left
                      , n = "mcsLinearOut";
                    if (E.push(o),
                    W.push(a),
                    z[2] = Math.abs(O(e)[0] - z[0]),
                    z[3] = Math.abs(O(e)[1] - z[1]),
                    B.overflowed[0])
                        var i = D[0].parent().height() - D[0].height()
                          , r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
                    if (B.overflowed[1])
                        var l = D[1].parent().width() - D[1].width()
                          , h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                    r || h ? (U || e.preventDefault(),
                    b = 1) : (C = 1,
                    y.addClass("mCS_touch_action")),
                    U && e.preventDefault(),
                    w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null],
                    I[0].idleTimer = 250,
                    B.overflowed[0] && s(w[0], R, n, "y", "all", !0),
                    B.overflowed[1] && s(w[1], R, n, "x", L, !0)
                }
            }
            function i(e) {
                if (!te(e) || c || O(e)[2])
                    return void (t = 0);
                t = 1,
                e.stopImmediatePropagation(),
                Q(y),
                p = K();
                var o = M.offset();
                h = O(e)[0] - o.top,
                m = O(e)[1] - o.left,
                E = [],
                W = []
            }
            function r(e) {
                if (te(e) && !c && !O(e)[2]) {
                    d = 0,
                    e.stopImmediatePropagation(),
                    b = 0,
                    C = 0,
                    v = K();
                    var t = M.offset()
                      , o = O(e)[0] - t.top
                      , a = O(e)[1] - t.left;
                    if (!(v - g > 30)) {
                        _ = 1e3 / (v - p);
                        var n = "mcsEaseOut"
                          , i = 2.5 > _
                          , r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                        x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                        var u = [Math.abs(x[0]), Math.abs(x[1])];
                        _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                        var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                        w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null],
                        S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                        var y = parseInt(T.contentTouchScroll) || 0;
                        w[0] = u[0] > y ? w[0] : 0,
                        w[1] = u[1] > y ? w[1] : 0,
                        B.overflowed[0] && s(w[0], S[0], n, "y", L, !1),
                        B.overflowed[1] && s(w[1], S[1], n, "x", L, !1)
                    }
                }
            }
            function l(e, t) {
                var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
            }
            function s(e, t, o, a, n, i) {
                e && G(y, e.toString(), {
                    dur: t,
                    scrollEasing: o,
                    dir: a,
                    overwrite: n,
                    drag: i
                })
            }
            var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this), B = y.data(a), T = B.opt, k = a + "_" + B.idx, M = e("#mCSB_" + B.idx), I = e("#mCSB_" + B.idx + "_container"), D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")], E = [], W = [], R = 0, L = "yx" === T.axis ? "none" : "all", z = [], P = I.find("iframe"), H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k], U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
            I.bind(H[0], function(e) {
                o(e)
            }).bind(H[1], function(e) {
                n(e)
            }),
            M.bind(H[0], function(e) {
                i(e)
            }).bind(H[2], function(e) {
                r(e)
            }),
            P.length && P.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) {
                        o(e),
                        i(e)
                    }).bind(H[1], function(e) {
                        n(e)
                    }).bind(H[2], function(e) {
                        r(e)
                    })
                })
            })
        }, E = function() {
            function o() {
                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
            }
            function n(e, t, o) {
                d.type = o && i ? "stepped" : "stepless",
                d.scrollAmount = 10,
                j(r, e, t, "mcsLinearOut", o ? 60 : null)
            }
            var i, r = e(this), l = r.data(a), s = l.opt, d = l.sequential, u = a + "_" + l.idx, f = e("#mCSB_" + l.idx + "_container"), h = f.parent();
            f.bind("mousedown." + u, function() {
                t || i || (i = 1,
                c = !0)
            }).add(document).bind("mousemove." + u, function(e) {
                if (!t && i && o()) {
                    var a = f.offset()
                      , r = O(e)[0] - a.top + f[0].offsetTop
                      , c = O(e)[1] - a.left + f[0].offsetLeft;
                    r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)),
                    "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                }
            }).bind("mouseup." + u + " dragend." + u, function() {
                t || (i && (i = 0,
                n("off", null)),
                c = !1)
            })
        }, W = function() {
            function t(t, a) {
                if (Q(o),
                !z(o, t.target)) {
                    var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100
                      , d = i.scrollInertia;
                    if ("x" === i.axis || "x" === i.mouseWheel.axis)
                        var u = "x"
                          , f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)]
                          , h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0]
                          , m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft)
                          , p = c[1][0].offsetLeft
                          , g = c[1].parent().width() - c[1].width()
                          , v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
                    else
                        var u = "y"
                          , f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)]
                          , h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0]
                          , m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop)
                          , p = c[0][0].offsetTop
                          , g = c[0].parent().height() - c[0].height()
                          , v = t.deltaY || a;
                    "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v),
                    i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1),
                    (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(),
                    t.preventDefault()),
                    t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor,
                    d = 17),
                    G(o, (m - v * h).toString(), {
                        dir: u,
                        dur: d
                    }))
                }
            }
            if (e(this).data(a)) {
                var o = e(this)
                  , n = o.data(a)
                  , i = n.opt
                  , r = a + "_" + n.idx
                  , l = e("#mCSB_" + n.idx)
                  , c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")]
                  , d = e("#mCSB_" + n.idx + "_container").find("iframe");
                d.length && d.each(function() {
                    e(this).bind("load", function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
                            t(e, o)
                        })
                    })
                }),
                l.bind("mousewheel." + r, function(e, o) {
                    t(e, o)
                })
            }
        }, R = new Object, A = function(t) {
            var o = !1
              , a = !1
              , n = null;
            if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")),
            a !== !1 && void 0 !== R[a])
                return R[a];
            if (t) {
                try {
                    var i = t.contentDocument || t.contentWindow.document;
                    n = i.body.innerHTML
                } catch (r) {}
                o = null !== n
            } else {
                try {
                    var i = top.document;
                    n = i.body.innerHTML
                } catch (r) {}
                o = null !== n
            }
            return a !== !1 && (R[a] = o),
            o
        }, L = function(e) {
            var t = this.find("iframe");
            if (t.length) {
                var o = e ? "auto" : "none";
                t.css("pointer-events", o)
            }
        }, z = function(t, o) {
            var n = o.nodeName.toLowerCase()
              , i = t.data(a).opt.mouseWheel.disableOver
              , r = ["select", "textarea"];
            return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
        }, P = function() {
            var t, o = e(this), n = o.data(a), i = a + "_" + n.idx, r = e("#mCSB_" + n.idx + "_container"), l = r.parent(), s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
            s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) {
                c = !0,
                e(o.target).hasClass("mCSB_dragger") || (t = 1)
            }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() {
                c = !1
            }).bind("click." + i, function(a) {
                if (t && (t = 0,
                e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                    Q(o);
                    var i = e(this)
                      , s = i.find(".mCSB_dragger");
                    if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!n.overflowed[1])
                            return;
                        var c = "x"
                          , u = a.pageX > s.offset().left ? -1 : 1
                          , f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
                    } else {
                        if (!n.overflowed[0])
                            return;
                        var c = "y"
                          , u = a.pageY > s.offset().top ? -1 : 1
                          , f = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
                    }
                    G(o, f.toString(), {
                        dir: c,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        }, H = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = e("#mCSB_" + o.idx + "_container")
              , l = r.parent();
            r.bind("focusin." + i, function() {
                var o = e(document.activeElement)
                  , a = r.find(".mCustomScrollBox").length
                  , i = 0;
                o.is(n.advanced.autoScrollOnFocus) && (Q(t),
                clearTimeout(t[0]._focusTimeout),
                t[0]._focusTimer = a ? (i + 17) * a : 0,
                t[0]._focusTimeout = setTimeout(function() {
                    var e = [ae(o)[0], ae(o)[1]]
                      , a = [r[0].offsetTop, r[0].offsetLeft]
                      , s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)]
                      , c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                    "x" === n.axis || s[0] || G(t, e[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: i
                    }),
                    "y" === n.axis || s[1] || G(t, e[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: i
                    })
                }, t[0]._focusTimer))
            })
        }, U = function() {
            var t = e(this)
              , o = t.data(a)
              , n = a + "_" + o.idx
              , i = e("#mCSB_" + o.idx + "_container").parent();
            i.bind("scroll." + n, function() {
                0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
            })
        }, F = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = o.sequential
              , r = a + "_" + o.idx
              , l = ".mCSB_" + o.idx + "_scrollbar"
              , s = e(l + ">a");
            s.bind("contextmenu." + r, function(e) {
                e.preventDefault()
            }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                function r(e, o) {
                    i.scrollAmount = n.scrollButtons.scrollAmount,
                    j(t, e, o)
                }
                if (a.preventDefault(),
                ee(a)) {
                    var l = e(this).attr("class");
                    switch (i.type = n.scrollButtons.scrollType,
                    a.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                        if ("stepped" === i.type)
                            return;
                        c = !0,
                        o.tweenRunning = !1,
                        r("on", l);
                        break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        if ("stepped" === i.type)
                            return;
                        c = !1,
                        i.dir && r("off", l);
                        break;
                    case "click":
                        if ("stepped" !== i.type || o.tweenRunning)
                            return;
                        r("on", l)
                    }
                }
            })
        }, q = function() {
            function t(t) {
                function a(e, t) {
                    r.type = i.keyboard.scrollType,
                    r.scrollAmount = i.keyboard.scrollAmount,
                    "stepped" === r.type && n.tweenRunning || j(o, e, t)
                }
                switch (t.type) {
                case "blur":
                    n.tweenRunning && r.dir && a("off", null);
                    break;
                case "keydown":
                case "keyup":
                    var l = t.keyCode ? t.keyCode : t.which
                      , s = "on";
                    if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                        if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1])
                            return;
                        "keyup" === t.type && (s = "off"),
                        e(document.activeElement).is(u) || (t.preventDefault(),
                        t.stopImmediatePropagation(),
                        a(s, l))
                    } else if (33 === l || 34 === l) {
                        if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(),
                        t.stopImmediatePropagation()),
                        "keyup" === t.type) {
                            Q(o);
                            var f = 34 === l ? -1 : 1;
                            if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                                var h = "x"
                                  , m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());
                            else
                                var h = "y"
                                  , m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                            G(o, m.toString(), {
                                dir: h,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(),
                    t.stopImmediatePropagation()),
                    "keyup" === t.type)) {
                        if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                            var h = "x"
                              , m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                        else
                            var h = "y"
                              , m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                        G(o, m.toString(), {
                            dir: h,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                }
            }
            var o = e(this)
              , n = o.data(a)
              , i = n.opt
              , r = n.sequential
              , l = a + "_" + n.idx
              , s = e("#mCSB_" + n.idx)
              , c = e("#mCSB_" + n.idx + "_container")
              , d = c.parent()
              , u = "input,textarea,select,datalist,keygen,[contenteditable='true']"
              , f = c.find("iframe")
              , h = ["blur." + l + " keydown." + l + " keyup." + l];
            f.length && f.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                        t(e)
                    })
                })
            }),
            s.attr("tabindex", "0").bind(h[0], function(e) {
                t(e)
            })
        }, j = function(t, o, n, i, r) {
            function l(e) {
                u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                var o = "stepped" !== f.type
                  , a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60
                  , n = e ? o ? 7.5 : 40 : 2.5
                  , s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)]
                  , d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x]
                  , m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n)
                  , v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount)
                  , x = "auto" !== f.scrollAmount ? v : m
                  , _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"
                  , w = !!e;
                return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]),
                G(t, x.toString(), {
                    dir: f.dir[0],
                    scrollEasing: _,
                    dur: a,
                    onComplete: w
                }),
                e ? void (f.dir = !1) : (clearTimeout(f.step),
                void (f.step = setTimeout(function() {
                    l()
                }, a)))
            }
            function s() {
                clearTimeout(f.step),
                $(f, "step"),
                Q(t)
            }
            var c = t.data(a)
              , u = c.opt
              , f = c.sequential
              , h = e("#mCSB_" + c.idx + "_container")
              , m = "stepped" === f.type
              , p = u.scrollInertia < 26 ? 26 : u.scrollInertia
              , g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
            switch (o) {
            case "on":
                if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1],
                Q(t),
                oe(n) && "stepped" === f.type)
                    return;
                l(m);
                break;
            case "off":
                s(),
                (m || c.tweenRunning && f.dir) && l(!0)
            }
        }, Y = function(t) {
            var o = e(this).data(a).opt
              , n = [];
            return "function" == typeof t && (t = t()),
            t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t,
            n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t),
            "function" == typeof n[0] && (n[0] = n[0]()),
            "function" == typeof n[1] && (n[1] = n[1]()),
            n
        }, X = function(t, o) {
            if (null != t && "undefined" != typeof t) {
                var n = e(this)
                  , i = n.data(a)
                  , r = i.opt
                  , l = e("#mCSB_" + i.idx + "_container")
                  , s = l.parent()
                  , c = typeof t;
                o || (o = "x" === r.axis ? "x" : "y");
                var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height()
                  , f = "x" === o ? l[0].offsetLeft : l[0].offsetTop
                  , h = "x" === o ? "left" : "top";
                switch (c) {
                case "function":
                    return t();
                case "object":
                    var m = t.jquery ? t : e(t);
                    if (!m.length)
                        return;
                    return "x" === o ? ae(m)[1] : ae(m)[0];
                case "string":
                case "number":
                    if (oe(t))
                        return Math.abs(t);
                    if (-1 !== t.indexOf("%"))
                        return Math.abs(d * parseInt(t) / 100);
                    if (-1 !== t.indexOf("-="))
                        return Math.abs(f - parseInt(t.split("-=")[1]));
                    if (-1 !== t.indexOf("+=")) {
                        var p = f + parseInt(t.split("+=")[1]);
                        return p >= 0 ? 0 : Math.abs(p)
                    }
                    if (-1 !== t.indexOf("px") && oe(t.split("px")[0]))
                        return Math.abs(t.split("px")[0]);
                    if ("top" === t || "left" === t)
                        return 0;
                    if ("bottom" === t)
                        return Math.abs(s.height() - l.outerHeight(!1));
                    if ("right" === t)
                        return Math.abs(s.width() - l.outerWidth(!1));
                    if ("first" === t || "last" === t) {
                        var m = l.find(":" + t);
                        return "x" === o ? ae(m)[1] : ae(m)[0]
                    }
                    return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t),
                    void u.update.call(null, n[0]))
                }
            }
        }, N = function(t) {
            function o() {
                return clearTimeout(f[0].autoUpdate),
                0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function() {
                    return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(),
                    s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n,
                    void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth,
                    s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n,
                    void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length,
                    s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n,
                    void f.find("img").each(function() {
                        n(this)
                    }))
                }, c.advanced.autoUpdateTimeout))
            }
            function n(t) {
                function o(e, t) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function a() {
                    this.onload = null,
                    e(t).addClass(d[2]),
                    r(2)
                }
                if (e(t).hasClass(d[2]))
                    return void r();
                var n = new Image;
                n.onload = o(n, a),
                n.src = t.src
            }
            function i() {
                c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                var e = 0
                  , t = f.find(c.advanced.updateOnSelectorChange);
                return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                    e += this.offsetHeight + this.offsetWidth
                }),
                e
            }
            function r(e) {
                clearTimeout(f[0].autoUpdate),
                u.update.call(null, l[0], e)
            }
            var l = e(this)
              , s = l.data(a)
              , c = s.opt
              , f = e("#mCSB_" + s.idx + "_container");
            return t ? (clearTimeout(f[0].autoUpdate),
            void $(f[0], "autoUpdate")) : void o()
        }, V = function(e, t, o) {
            return Math.round(e / t) * t - o
        }, Q = function(t) {
            var o = t.data(a)
              , n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
            n.each(function() {
                Z.call(this)
            })
        }, G = function(t, o, n) {
            function i(e) {
                return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
            }
            function r() {
                return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w]
            }
            function l() {
                var e = [h[0].offsetTop, h[0].offsetLeft]
                  , o = [x[0].offsetTop, x[0].offsetLeft]
                  , a = [h.outerHeight(!1), h.outerWidth(!1)]
                  , i = [f.height(), f.width()];
                t[0].mcs = {
                    content: h,
                    top: e[0],
                    left: e[1],
                    draggerTop: o[0],
                    draggerLeft: o[1],
                    topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                    leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                    direction: n.dir
                }
            }
            var s = t.data(a)
              , c = s.opt
              , d = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: c.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }
              , n = e.extend(d, n)
              , u = [n.dur, n.drag ? 0 : n.dur]
              , f = e("#mCSB_" + s.idx)
              , h = e("#mCSB_" + s.idx + "_container")
              , m = h.parent()
              , p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0]
              , g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
            if (s.trigger = n.trigger,
            0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"),
            m.scrollTop(0).scrollLeft(0)),
            "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]),
            s.contentReset.y = 1),
            "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]),
            s.contentReset.x = 1),
            "_resetY" !== o && "_resetX" !== o) {
                if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]),
                s.contentReset.x = null),
                !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]),
                s.contentReset.x = null),
                c.snapAmount) {
                    var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                    o = V(o, v, c.snapOffset)
                }
                switch (n.dir) {
                case "x":
                    var x = e("#mCSB_" + s.idx + "_dragger_horizontal")
                      , _ = "left"
                      , w = h[0].offsetLeft
                      , S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()]
                      , b = [o, 0 === o ? 0 : o / s.scrollRatio.x]
                      , y = p[1]
                      , B = g[1]
                      , T = y > 0 ? y / s.scrollRatio.x : 0
                      , k = B > 0 ? B / s.scrollRatio.x : 0;
                    break;
                case "y":
                    var x = e("#mCSB_" + s.idx + "_dragger_vertical")
                      , _ = "top"
                      , w = h[0].offsetTop
                      , S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()]
                      , b = [o, 0 === o ? 0 : o / s.scrollRatio.y]
                      , y = p[0]
                      , B = g[0]
                      , T = y > 0 ? y / s.scrollRatio.y : 0
                      , k = B > 0 ? B / s.scrollRatio.y : 0
                }
                b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0],
                t[0].mcs || (l(),
                i("onInit") && c.callbacks.onInit.call(t[0])),
                clearTimeout(h[0].onCompleteTimeout),
                J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing),
                !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                    onStart: function() {
                        n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(),
                        c.callbacks.onScrollStart.call(t[0])),
                        s.tweenRunning = !0,
                        C(x),
                        s.cbOffsets = r())
                    },
                    onUpdate: function() {
                        n.callbacks && n.onUpdate && i("whileScrolling") && (l(),
                        c.callbacks.whileScrolling.call(t[0]))
                    },
                    onComplete: function() {
                        if (n.callbacks && n.onComplete) {
                            "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                            var e = h[0].idleTimer || 0;
                            h[0].onCompleteTimeout = setTimeout(function() {
                                i("onScroll") && (l(),
                                c.callbacks.onScroll.call(t[0])),
                                i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(),
                                c.callbacks.onTotalScroll.call(t[0])),
                                i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(),
                                c.callbacks.onTotalScrollBack.call(t[0])),
                                s.tweenRunning = !1,
                                h[0].idleTimer = 0,
                                C(x, "hide")
                            }, e)
                        }
                    }
                })
            }
        }, J = function(e, t, o, a, n, i, r) {
            function l() {
                S.stop || (x || m.call(),
                x = K() - v,
                s(),
                x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1,
                S.time < x + 1 && (S.time = x + 1)),
                S.time < a ? S.id = h(l) : g.call())
            }
            function s() {
                a > 0 ? (S.currVal = u(S.time, _, b, a, n),
                w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px",
                p.call()
            }
            function c() {
                f = 1e3 / 60,
                S.time = x + f,
                h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                    return s(),
                    setTimeout(e, .01)
                }
                ,
                S.id = h(l)
            }
            function d() {
                null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id),
                S.id = null)
            }
            function u(e, t, o, a, n) {
                switch (n) {
                case "linear":
                case "mcsLinear":
                    return o * e / a + t;
                case "mcsLinearOut":
                    return e /= a,
                    e--,
                    o * Math.sqrt(1 - e * e) + t;
                case "easeInOutSmooth":
                    return e /= a / 2,
                    1 > e ? o / 2 * e * e + t : (e--,
                    -o / 2 * (e * (e - 2) - 1) + t);
                case "easeInOutStrong":
                    return e /= a / 2,
                    1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--,
                    o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                case "easeInOut":
                case "mcsEaseInOut":
                    return e /= a / 2,
                    1 > e ? o / 2 * e * e * e + t : (e -= 2,
                    o / 2 * (e * e * e + 2) + t);
                case "easeOutSmooth":
                    return e /= a,
                    e--,
                    -o * (e * e * e * e - 1) + t;
                case "easeOutStrong":
                    return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                case "easeOut":
                case "mcsEaseOut":
                default:
                    var i = (e /= a) * e
                      , r = i * e;
                    return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                }
            }
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            var f, h, r = r || {}, m = r.onStart || function() {}
            , p = r.onUpdate || function() {}
            , g = r.onComplete || function() {}
            , v = K(), x = 0, _ = e.offsetTop, w = e.style, S = e._mTween[t];
            "left" === t && (_ = e.offsetLeft);
            var b = o - _;
            S.stop = 0,
            "none" !== i && d(),
            c()
        }, K = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }, Z = function() {
            var e = this;
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                var a = t[o];
                e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id),
                e._mTween[a].id = null,
                e._mTween[a].stop = 1)
            }
        }, $ = function(e, t) {
            try {
                delete e[t]
            } catch (o) {
                e[t] = null
            }
        }, ee = function(e) {
            return !(e.which && 1 !== e.which)
        }, te = function(e) {
            var t = e.originalEvent.pointerType;
            return !(t && "touch" !== t && 2 !== t)
        }, oe = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, ae = function(e) {
            var t = e.parents(".mCSB_container");
            return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
        }, ne = function() {
            function e() {
                var e = ["webkit", "moz", "ms", "o"];
                if ("hidden"in document)
                    return "hidden";
                for (var t = 0; t < e.length; t++)
                    if (e[t] + "Hidden"in document)
                        return e[t] + "Hidden";
                return null
            }
            var t = e();
            return t ? document[t] : !1
        };
        e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }
        ,
        e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }
        ,
        e[o].defaults = i,
        window[o] = !0,
        e(window).bind("load", function() {
            e(n)[o](),
            e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var o, a, n = e(t), i = n.parents(".mCSB_container");
                    if (i.length)
                        return o = i.parent(),
                        a = [i[0].offsetTop, i[0].offsetLeft],
                        a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
                }
                ,
                mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                    var n, i, r, l, s = e(t), c = s.parents(".mCSB_container"), d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                    if (c.length)
                        return n = [s.outerHeight(!1), s.outerWidth(!1)],
                        r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]],
                        i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth],
                        l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]],
                        r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
                }
                ,
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o)
                        return o.overflowed[0] || o.overflowed[1]
                }
            })
        })
    })
});

(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function(jQuery) {
            return factory(jQuery);
        });
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(global.jQuery);
    }
}(this, function($) {
    function defined(a) {
        return "undefined" != typeof a
    }
    function extend(a, b, c) {
        var d = function() {};
        d.prototype = b.prototype,
        a.prototype = new d,
        a.prototype.constructor = a,
        b.prototype.constructor = b,
        a._super = b.prototype,
        c && $.extend(a.prototype, c)
    }
    function native(a, b) {
        var c;
        "string" == typeof a && (b = a,
        a = document);
        for (var d = 0; d < SUBST.length; ++d) {
            b = b.replace(SUBST[d][0], SUBST[d][1]);
            for (var e = 0; e < VENDOR_PREFIXES.length; ++e)
                if (c = VENDOR_PREFIXES[e],
                c += 0 === e ? b : b.charAt(0).toUpperCase() + b.substr(1),
                defined(a[c]))
                    return a[c]
        }
    }
    var SUBST = [["", ""], ["exit", "cancel"], ["screen", "Screen"]], VENDOR_PREFIXES = ["", "o", "ms", "moz", "webkit", "webkitCurrent"], ua = navigator.userAgent, fsEnabled = native("fullscreenEnabled"), parsedChromeUA = ua.match(/Android.*Chrome\/(\d+)\./), IS_ANDROID_CHROME = !!parsedChromeUA, CHROME_VERSION, ANDROID_CHROME_VERSION;
    IS_ANDROID_CHROME && (ANDROID_CHROME_VERSION = parseInt(parsedChromeUA[1]));
    var IS_NATIVELY_SUPPORTED = (!IS_ANDROID_CHROME || ANDROID_CHROME_VERSION > 37) && defined(native("fullscreenElement")) && (!defined(fsEnabled) || fsEnabled === !0)
      , version = $.fn.jquery.split(".")
      , JQ_LT_17 = parseInt(version[0]) < 2 && parseInt(version[1]) < 7
      , FullScreenAbstract = function() {
        this.__options = null,
        this._fullScreenElement = null,
        this.__savedStyles = {}
    };
    FullScreenAbstract.prototype = {
        native: native,
        _DEFAULT_OPTIONS: {
            styles: {
                boxSizing: "border-box",
                MozBoxSizing: "border-box",
                WebkitBoxSizing: "border-box"
            },
            toggleClass: null
        },
        __documentOverflow: "",
        __htmlOverflow: "",
        _preventDocumentScroll: function() {
            this.__documentOverflow = document.body.style.overflow,
            this.__htmlOverflow = document.documentElement.style.overflow,
            $(this._fullScreenElement).is("body, html") || $("body, html").css("overflow", "hidden")
        },
        _allowDocumentScroll: function() {
            document.body.style.overflow = this.__documentOverflow,
            document.documentElement.style.overflow = this.__htmlOverflow
        },
        _fullScreenChange: function() {
            this.__options && (this.isFullScreen() ? (this._preventDocumentScroll(),
            this._triggerEvents()) : (this._allowDocumentScroll(),
            this._revertStyles(),
            this._triggerEvents(),
            this._fullScreenElement = null))
        },
        _fullScreenError: function(a) {
            this.__options && (this._revertStyles(),
            this._fullScreenElement = null,
            a && $(document).trigger("fscreenerror", [a]))
        },
        _triggerEvents: function() {
            $(this._fullScreenElement).trigger(this.isFullScreen() ? "fscreenopen" : "fscreenclose"),
            $(document).trigger("fscreenchange", [this.isFullScreen(), this._fullScreenElement])
        },
        _saveAndApplyStyles: function() {
            var a = $(this._fullScreenElement);
            this.__savedStyles = {};
            for (var b in this.__options.styles)
                this.__savedStyles[b] = this._fullScreenElement.style[b],
                this._fullScreenElement.style[b] = this.__options.styles[b];
            a.is("body") && (document.documentElement.style.overflow = this.__options.styles.overflow),
            this.__options.toggleClass && a.addClass(this.__options.toggleClass)
        },
        _revertStyles: function() {
            var a = $(this._fullScreenElement);
            for (var b in this.__options.styles)
                this._fullScreenElement.style[b] = this.__savedStyles[b];
            a.is("body") && (document.documentElement.style.overflow = this.__savedStyles.overflow),
            this.__options.toggleClass && a.removeClass(this.__options.toggleClass)
        },
        open: function(a, b) {
            a !== this._fullScreenElement && (this.isFullScreen() && this.exit(),
            this._fullScreenElement = a,
            this.__options = $.extend(!0, {}, this._DEFAULT_OPTIONS, b),
            this._saveAndApplyStyles())
        },
        exit: null,
        isFullScreen: null,
        isNativelySupported: function() {
            return IS_NATIVELY_SUPPORTED
        }
    };
    var FullScreenNative = function() {
        FullScreenNative._super.constructor.apply(this, arguments),
        this.exit = $.proxy(native("exitFullscreen"), document),
        this._DEFAULT_OPTIONS = $.extend(!0, {}, this._DEFAULT_OPTIONS, {
            styles: {
                width: "100%",
                height: "100%"
            }
        }),
        $(document).bind(this._prefixedString("fullscreenchange") + " MSFullscreenChange", $.proxy(this._fullScreenChange, this)).bind(this._prefixedString("fullscreenerror") + " MSFullscreenError", $.proxy(this._fullScreenError, this))
    };
    extend(FullScreenNative, FullScreenAbstract, {
        VENDOR_PREFIXES: ["", "o", "moz", "webkit"],
        _prefixedString: function(a) {
            return $.map(this.VENDOR_PREFIXES, function(b) {
                return b + a
            }).join(" ")
        },
        open: function(a, b) {
            FullScreenNative._super.open.apply(this, arguments);
            var c = native(a, "requestFullscreen");
            c.call(a)
        },
        exit: $.noop,
        isFullScreen: function() {
            return null !== native("fullscreenElement")
        },
        element: function() {
            return native("fullscreenElement")
        }
    });
    var FullScreenFallback = function() {
        FullScreenFallback._super.constructor.apply(this, arguments),
        this._DEFAULT_OPTIONS = $.extend({}, this._DEFAULT_OPTIONS, {
            styles: {
                position: "fixed",
                zIndex: "2147483647",
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            }
        }),
        this.__delegateKeydownHandler()
    };
    extend(FullScreenFallback, FullScreenAbstract, {
        __isFullScreen: !1,
        __delegateKeydownHandler: function() {
            var a = $(document);
            a.delegate("*", "keydown.fullscreen", $.proxy(this.__keydownHandler, this));
            var b = JQ_LT_17 ? a.data("events") : $._data(document).events
              , c = b.keydown;
            JQ_LT_17 ? b.live.unshift(b.live.pop()) : c.splice(0, 0, c.splice(c.delegateCount - 1, 1)[0])
        },
        __keydownHandler: function(a) {
            return !this.isFullScreen() || 27 !== a.which || (this.exit(),
            !1)
        },
        _revertStyles: function() {
            FullScreenFallback._super._revertStyles.apply(this, arguments),
            this._fullScreenElement.offsetHeight
        },
        open: function(a) {
            FullScreenFallback._super.open.apply(this, arguments),
            this.__isFullScreen = !0,
            this._fullScreenChange()
        },
        exit: function() {
            this.__isFullScreen && (this.__isFullScreen = !1,
            this._fullScreenChange())
        },
        isFullScreen: function() {
            return this.__isFullScreen
        },
        element: function() {
            return this.__isFullScreen ? this._fullScreenElement : null
        }
    }),
    $.fullscreen = IS_NATIVELY_SUPPORTED ? new FullScreenNative : new FullScreenFallback,
    $.fn.fullscreen = function(a) {
        var b = this[0];
        return a = $.extend({
            toggleClass: null,
            overflow: "hidden"
        }, a),
        a.styles = {
            overflow: a.overflow
        },
        delete a.overflow,
        b && $.fullscreen.open(b, a),
        this
    }
    ;
}));
var bwg_current_filmstrip_pos, total_thumbnail_count, key, startPoint, endPoint, bwg_image_info_pos, filmstrip_width, preloadCount, filmstrip_thumbnail_width, filmstrip_thumbnail_height, addthis_share, lightbox_comment_pos, bwg_transition_duration, bwg_playInterval, isPopUpOpened = !1, bwg_overflow_initial_value = !1, bwg_overflow_x_initial_value = !1, bwg_overflow_y_initial_value = !1;
function gallery_box_ready() {
    filmstrip_thumbnail_width = jQuery(".bwg_filmstrip_thumbnail").width(),
    filmstrip_thumbnail_height = jQuery(".bwg_filmstrip_thumbnail").height(),
    1 == gallery_box_data.open_with_fullscreen ? (filmstrip_width = jQuery(window).width(),
    filmstrip_height = jQuery(window).height()) : (filmstrip_width = jQuery(".bwg_filmstrip_container").width(),
    filmstrip_height = jQuery(".bwg_filmstrip_container").height()),
    preloadCount = "horizontal" == gallery_box_data.filmstrip_direction ? parseInt(filmstrip_width / filmstrip_thumbnail_width) + gallery_box_data.preload_images_count : parseInt(filmstrip_height / filmstrip_thumbnail_height) + gallery_box_data.preload_images_count,
    total_thumbnail_count = jQuery(".bwg_filmstrip_thumbnail").length,
    key = parseInt(jQuery("#bwg_current_image_key").val()),
    startPoint = 0,
    endPoint = key + preloadCount,
    jQuery(function() {
        bwg_load_visible_images(key, preloadCount, total_thumbnail_count),
        jQuery(".pge_tabs li a").on("click", function() {
            return jQuery(".pge_tabs_container > div").hide(),
            jQuery(".pge_tabs li").removeClass("pge_active"),
            jQuery(jQuery(this).attr("href")).show(),
            jQuery(this).closest("li").addClass("pge_active"),
            jQuery("[name=type]").val(jQuery(this).attr("href").substr(1)),
            !1
        });
        var e = jQuery("#bwg_rated").attr("data-params");
        void 0 !== e && bwg_rating((e = JSON.parse(e)).current_rate, e.current_rate_count, e.current_avg_rating, e.current_image_key)
    }),
    1 == gallery_box_data.enable_addthis && gallery_box_data.addthis_profile_id && (addthis_share = {
        url: gallery_box_data.share_url
    }),
    lightbox_comment_pos = gallery_box_data.lightbox_comment_pos,
    bwg_image_info_pos = jQuery(".bwg_ctrl_btn_container").length ? jQuery(".bwg_ctrl_btn_container").height() : 0,
    bwg_transition_duration = gallery_box_data.slideshow_interval < 4 * gallery_box_data.slideshow_effect_duration && 0 != gallery_box_data.slideshow_interval ? 1e3 * gallery_box_data.slideshow_interval / 4 : 1e3 * gallery_box_data.slideshow_effect_duration,
    gallery_box_data.bwg_transition_duration = bwg_transition_duration,
    gallery_box_data.bwg_trans_in_progress = !1,
    (jQuery("#spider_popup_wrap").width() >= jQuery(window).width() || jQuery("#spider_popup_wrap").height() >= jQuery(window).height()) && parseInt(jQuery(".spider_popup_close").css("right")) < 0 && jQuery(".spider_popup_close").attr("class", "spider_popup_close_fullscreen"),
    window.clearInterval(bwg_playInterval),
    bwg_current_filmstrip_pos = gallery_box_data.current_pos,
    jQuery(document).on("keydown", function(e) {
        jQuery("#bwg_name").is(":focus") || jQuery("#bwg_email").is(":focus") || jQuery("#bwg_comment").is(":focus") || jQuery("#bwg_captcha_input").is(":focus") || ("ArrowRight" == e.key ? parseInt(jQuery("#bwg_current_image_key").val()) == gallery_box_data.data.length - 1 ? bwg_change_image(parseInt(jQuery("#bwg_current_image_key").val()), 0) : bwg_change_image(parseInt(jQuery("#bwg_current_image_key").val()), parseInt(jQuery("#bwg_current_image_key").val()) + 1) : "ArrowLeft" == e.key ? 0 == parseInt(jQuery("#bwg_current_image_key").val()) ? bwg_change_image(parseInt(jQuery("#bwg_current_image_key").val()), gallery_box_data.data.length - 1) : bwg_change_image(parseInt(jQuery("#bwg_current_image_key").val()), parseInt(jQuery("#bwg_current_image_key").val()) - 1) : "Escape" == e.key ? spider_destroypopup(1e3) : "Space" == e.key && jQuery(".bwg_play_pause").trigger("click"))
    }),
    jQuery(window).resize(function() {
        void 0 !== jQuery().fullscreen && jQuery.isFunction(jQuery().fullscreen) && (jQuery.fullscreen.isFullScreen() || bwg_popup_resize())
    });
    var r = gallery_box_data.image_width
      , _ = gallery_box_data.image_height;
    1 == gallery_box_data.enable_addthis && gallery_box_data.addthis_profile_id && jQuery(".at4-share-outer").show(),
    spider_set_input_value("rate_ajax_task", "save_hit_count"),
    spider_rate_ajax_save("bwg_rate_form");
    var e = gallery_box_data.data
      , t = gallery_box_data.current_image_key;
    jQuery(".bwg_image_hits span").html(++e[t].hit_count);
    var i = window.location.hash;
    i && "-1" != i.indexOf("bwg") || (location.replace("#bwg" + gallery_box_data.gallery_id + "/" + gallery_box_data.current_image_id),
    history.replaceState(void 0, void 0, "#bwg" + gallery_box_data.gallery_id + "/" + gallery_box_data.current_image_id)),
    1 == gallery_box_data.image_right_click && (jQuery(".bwg_image_wrap").bind("contextmenu", function(e) {
        return !1
    }),
    jQuery(".bwg_image_wrap").css("webkitTouchCallout", "none")),
    jQuery("#spider_popup_wrap").bind("touchmove", function(e) {
        e.preventDefault()
    }),
    void 0 !== jQuery().swiperight && jQuery.isFunction(jQuery().swiperight) && jQuery("#spider_popup_wrap .bwg_image_wrap").swiperight(function() {
        return bwg_change_image(parseInt(jQuery("#bwg_current_image_key").val()), (parseInt(jQuery("#bwg_current_image_key").val()) + gallery_box_data.data.length - 1) % gallery_box_data.data.length),
        !1
    }),
    void 0 !== jQuery().swipeleft && jQuery.isFunction(jQuery().swipeleft) && jQuery("#spider_popup_wrap .bwg_image_wrap").swipeleft(function() {
        return bwg_change_image(parseInt(jQuery("#bwg_current_image_key").val()), (parseInt(jQuery("#bwg_current_image_key").val()) + 1) % gallery_box_data.data.length),
        !1
    }),
    bwg_reset_zoom();
    var a = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) ? "touchend" : "click";
    jQuery("#spider_popup_left").on(a, function() {
        return bwg_change_image(parseInt(jQuery("#bwg_current_image_key").val()), (parseInt(jQuery("#bwg_current_image_key").val()) + gallery_box_data.data.length - 1) % gallery_box_data.data.length),
        !1
    }),
    jQuery("#spider_popup_right").on(a, function() {
        return bwg_change_image(parseInt(jQuery("#bwg_current_image_key").val()), (parseInt(jQuery("#bwg_current_image_key").val()) + 1) % gallery_box_data.data.length),
        !1
    }),
    -1 != navigator.appVersion.indexOf("MSIE 10") || -1 != navigator.appVersion.indexOf("MSIE 9") ? setTimeout(function() {
        bwg_popup_resize()
    }, 1) : bwg_popup_resize(),
    jQuery(".bwg_watermark").css({
        display: "none"
    }),
    setTimeout(function() {
        bwg_change_watermark_container()
    }, 500),
    void 0 !== jQuery().fullscreen && jQuery.isFunction(jQuery().fullscreen) && (jQuery.fullscreen.isNativelySupported() || jQuery(".bwg_fullscreen").hide()),
    "horizontal" == gallery_box_data.filmstrip_direction ? (jQuery(".bwg_image_container").height(jQuery(".bwg_image_wrap").height() - gallery_box_data.image_filmstrip_height),
    jQuery(".bwg_image_container").width(jQuery(".bwg_image_wrap").width())) : (jQuery(".bwg_image_container").height(jQuery(".bwg_image_wrap").height()),
    jQuery(".bwg_image_container").width(jQuery(".bwg_image_wrap").width() - gallery_box_data.image_filmstrip_width)),
    void 0 !== jQuery().mCustomScrollbar && jQuery.isFunction(jQuery().mCustomScrollbar) && jQuery(".bwg_comments,.bwg_ecommerce_panel, .bwg_image_info").mCustomScrollbar({
        scrollInertia: 150,
        theme: "dark-thick",
        advanced: {
            updateOnContentResize: !0
        }
    });
    var s = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
    jQuery(".bwg_filmstrip").on(s, function(e) {
        var t = window.event || e
          , i = (t = t.originalEvent ? t.originalEvent : t).detail ? -40 * t.detail : t.wheelDelta
          , a = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
        0 < i ? jQuery(".bwg_filmstrip_left").trigger(a ? "touchend" : "click") : jQuery(".bwg_filmstrip_right").trigger(a ? "touchend" : "click")
    }),
    jQuery(".bwg_filmstrip_right").on(a, function() {
        jQuery(".bwg_filmstrip_thumbnails").stop(!0, !1),
        "left" == gallery_box_data.left_or_top ? "width" == gallery_box_data.width_or_height ? jQuery(".bwg_filmstrip_thumbnails").position().left >= -(jQuery(".bwg_filmstrip_thumbnails").width() - jQuery(".bwg_filmstrip").width()) && (jQuery(".bwg_filmstrip_left").css({
            opacity: 1
        }),
        jQuery(".bwg_filmstrip_thumbnails").position().left < -(jQuery(".bwg_filmstrip_thumbnails").width() - jQuery(".bwg_filmstrip").width() - (gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.image_filmstrip_width + gallery_box_data.all_images_right_left_space)) ? jQuery(".bwg_filmstrip_thumbnails").animate({
            left: -(jQuery(".bwg_filmstrip_thumbnails").width() - jQuery(".bwg_filmstrip").width() - gallery_box_data.all_images_right_left_space)
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_right_arrow(gallery_box_data)
        }) : jQuery(".bwg_filmstrip_thumbnails").animate({
            left: jQuery(".bwg_filmstrip_thumbnails").position().left - (gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.image_filmstrip_width)
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_right_arrow(gallery_box_data)
        })) : jQuery(".bwg_filmstrip_thumbnails").position().left >= -(jQuery(".bwg_filmstrip_thumbnails").height() - jQuery(".bwg_filmstrip").height()) && (jQuery(".bwg_filmstrip_left").css({
            opacity: 1
        }),
        jQuery(".bwg_filmstrip_thumbnails").position().left < -(jQuery(".bwg_filmstrip_thumbnails").height() - jQuery(".bwg_filmstrip").height() - (gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.image_filmstrip_width + gallery_box_data.all_images_right_left_space)) ? jQuery(".bwg_filmstrip_thumbnails").animate({
            left: -(jQuery(".bwg_filmstrip_thumbnails").height() - jQuery(".bwg_filmstrip").height() - gallery_box_data.all_images_right_left_space)
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_right_arrow(gallery_box_data)
        }) : jQuery(".bwg_filmstrip_thumbnails").animate({
            left: jQuery(".bwg_filmstrip_thumbnails").position().left - (gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.image_filmstrip_width)
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_right_arrow(gallery_box_data)
        })) : "width" == gallery_box_data.width_or_height ? jQuery(".bwg_filmstrip_thumbnails").position().top >= -(jQuery(".bwg_filmstrip_thumbnails").width() - jQuery(".bwg_filmstrip").width()) && (jQuery(".bwg_filmstrip_left").css({
            opacity: 1
        }),
        jQuery(".bwg_filmstrip_thumbnails").position().top < -(jQuery(".bwg_filmstrip_thumbnails").width() - jQuery(".bwg_filmstrip").width() - (gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.image_filmstrip_width + gallery_box_data.all_images_right_left_space)) ? jQuery(".bwg_filmstrip_thumbnails").animate({
            left: -(jQuery(".bwg_filmstrip_thumbnails").width() - jQuery(".bwg_filmstrip").width() - gallery_box_data.all_images_right_left_space)
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_right_arrow(gallery_box_data)
        }) : jQuery(".bwg_filmstrip_thumbnails").animate({
            left: jQuery(".bwg_filmstrip_thumbnails").position().top - (gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.image_filmstrip_width)
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_right_arrow(gallery_box_data)
        })) : jQuery(".bwg_filmstrip_thumbnails").position().top >= -(jQuery(".bwg_filmstrip_thumbnails").height() - jQuery(".bwg_filmstrip").height()) && (jQuery(".bwg_filmstrip_left").css({
            opacity: 1
        }),
        jQuery(".bwg_filmstrip_thumbnails").position().top < -(jQuery(".bwg_filmstrip_thumbnails").height() - jQuery(".bwg_filmstrip").height() - (gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.image_filmstrip_width + gallery_box_data.all_images_right_left_space)) ? jQuery(".bwg_filmstrip_thumbnails").animate({
            top: -(jQuery(".bwg_filmstrip_thumbnails").height() - jQuery(".bwg_filmstrip").height() - gallery_box_data.all_images_right_left_space)
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_right_arrow(gallery_box_data)
        }) : jQuery(".bwg_filmstrip_thumbnails").animate({
            top: jQuery(".bwg_filmstrip_thumbnails").position().top - (gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.image_filmstrip_width)
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_right_arrow(gallery_box_data)
        }))
    }),
    "left" == gallery_box_data.left_or_top ? jQuery(".bwg_filmstrip_left").on(a, function() {
        jQuery(".bwg_filmstrip_thumbnails").stop(!0, !1),
        jQuery(".bwg_filmstrip_thumbnails").position().left < 0 && (jQuery(".bwg_filmstrip_right").css({
            opacity: 1
        }),
        jQuery(".bwg_filmstrip_thumbnails").position().left > -(gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.image_filmstrip_width) ? jQuery(".bwg_filmstrip_thumbnails").animate({
            left: 0
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_left_arrow(gallery_box_data)
        }) : jQuery(".bwg_filmstrip_thumbnails").animate({
            left: jQuery(".bwg_filmstrip_thumbnails").position().left + gallery_box_data.image_filmstrip_width + gallery_box_data.filmstrip_thumb_right_left_space
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_left_arrow(gallery_box_data)
        }))
    }) : jQuery(".bwg_filmstrip_left").on(a, function() {
        jQuery(".bwg_filmstrip_thumbnails").stop(!0, !1),
        jQuery(".bwg_filmstrip_thumbnails").position().top < 0 && (jQuery(".bwg_filmstrip_right").css({
            opacity: 1
        }),
        jQuery(".bwg_filmstrip_thumbnails").position().top > -(gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.image_filmstrip_width) ? jQuery(".bwg_filmstrip_thumbnails").animate({
            top: 0
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_left_arrow(gallery_box_data)
        }) : jQuery(".bwg_filmstrip_thumbnails").animate({
            top: jQuery(".bwg_filmstrip_thumbnails").position().top + gallery_box_data.image_filmstrip_width + gallery_box_data.filmstrip_thumb_right_left_space
        }, 500, "linear", function() {
            bwg_disable_lightbox_filmstrip_left_arrow(gallery_box_data)
        }))
    }),
    "width" == gallery_box_data.width_or_height ? bwg_set_filmstrip_pos(jQuery(".bwg_filmstrip").width(), "", gallery_box_data) : bwg_set_filmstrip_pos(jQuery(".bwg_filmstrip").height(), "", gallery_box_data),
    jQuery(".bwg_info").on(a, function() {
        if ("none" == jQuery(".bwg_image_info_container1").css("display")) {
            jQuery(".bwg_image_info_container1").css("display", "table-cell"),
            jQuery(".bwg_info").attr("title", bwg_objectsL10n.bwg_hide_info);
            jQuery(".bwg_ctrl_btn_container").length && jQuery(".bwg_ctrl_btn_container").height();
            jQuery(".bwg_image_info").css("height", "auto"),
            bwg_info_height_set()
        } else
            jQuery(".bwg_image_info_container1").css("display", "none"),
            jQuery(".bwg_info").attr("title", bwg_objectsL10n.bwg_show_info)
    }),
    jQuery(".bwg_rate").on(a, function() {
        "none" == jQuery(".bwg_image_rate_container1").css("display") ? (jQuery(".bwg_image_rate_container1").css("display", "table-cell"),
        jQuery(".bwg_rate").attr("title", bwg_objectsL10n.bwg_hide_rating)) : (jQuery(".bwg_image_rate_container1").css("display", "none"),
        jQuery(".bwg_rate").attr("title", bwg_objectsL10n.bwg_show_rating))
    }),
    jQuery(".bwg_zoom").on(a, function() {
        var e = ["mousemove", "touchmove"];
        jQuery("figure.bwg_popup_image").each(function() {
            var i = jQuery(this);
            i.hasClass("zoom") ? jQuery.each(e, function(e, t) {
                i.removeClass("zoom"),
                i.off(t)
            }) : jQuery.each(e, function(e, t) {
                i.addClass("zoom"),
                i.on(t, function(e) {
                    var t, i, a, r;
                    window.clearInterval(bwg_playInterval),
                    jQuery(".bwg_play_pause").attr("title", bwg_objectsL10n.bwg_play),
                    jQuery(".bwg_play_pause").attr("class", "bwg-icon-play bwg_ctrl_btn bwg_play_pause");
                    var _ = e.target
                      , s = _.getBoundingClientRect();
                    e.targetTouches && (a = e.targetTouches[0].clientX - s.left,
                    r = e.targetTouches[0].clientY - s.top),
                    t = e.offsetX ? e.offsetX : e.targetTouches ? a : _.offsetHeight,
                    i = e.offsetY ? e.offsetY : e.targetTouches ? r : _.offsetWidth,
                    x = t / _.offsetWidth * 100,
                    y = i / _.offsetHeight * 100,
                    _.parentNode.style.backgroundPosition = x + "% " + y + "%"
                })
            })
        })
    }),
    jQuery(".bwg_comment, .bwg_comments_close_btn").on(a, function() {
        bwg_comment()
    }),
    jQuery(".bwg_ecommerce, .bwg_ecommerce_close_btn").on(a, function() {
        bwg_ecommerce()
    }),
    jQuery(".bwg_toggle_container").on(a, function() {
        var e = "top" == gallery_box_data.lightbox_ctrl_btn_pos ? "bwg-icon-caret-up" : "bwg-icon-caret-down"
          , t = "top" == gallery_box_data.lightbox_ctrl_btn_pos ? "bwg-icon-caret-down" : "bwg-icon-caret-up";
        jQuery(".bwg_toggle_container i").hasClass(e) ? (gallery_box_data.enable_image_filmstrip && "bottom" == gallery_box_data.lightbox_filmstrip_pos || "bottom" != gallery_box_data.lightbox_ctrl_btn_pos || "bottom" != gallery_box_data.lightbox_rate_pos ? gallery_box_data.enable_image_filmstrip && "top" == gallery_box_data.lightbox_filmstrip_pos || "top" != gallery_box_data.lightbox_ctrl_btn_pos || "top" != gallery_box_data.lightbox_rate_pos || jQuery(".bwg_image_rate").animate({
            top: 0
        }, 500) : jQuery(".bwg_image_rate").animate({
            bottom: 0
        }, 500),
        gallery_box_data.enable_image_filmstrip && "bottom" == gallery_box_data.lightbox_filmstrip_pos || "bottom" != gallery_box_data.lightbox_ctrl_btn_pos || "bottom" != gallery_box_data.lightbox_hit_pos ? gallery_box_data.enable_image_filmstrip && "top" == gallery_box_data.lightbox_filmstrip_pos || "top" != gallery_box_data.lightbox_ctrl_btn_pos || "top" != gallery_box_data.lightbox_hit_pos || jQuery(".bwg_image_hit").animate({
            top: 0
        }, 500) : jQuery(".bwg_image_hit").animate({
            bottom: 0
        }, 500),
        "bottom" == gallery_box_data.lightbox_ctrl_btn_pos ? (jQuery(".bwg_ctrl_btn_container").animate({
            bottom: "-" + jQuery(".bwg_ctrl_btn_container").height()
        }, 500).addClass("closed"),
        jQuery(".bwg_toggle_container").animate({
            bottom: 0
        }, {
            duration: 500,
            complete: function() {
                jQuery(".bwg_toggle_container i").attr("class", "bwg_toggle_btn " + t)
            }
        })) : (jQuery(".bwg_ctrl_btn_container").animate({
            top: "-" + jQuery(".bwg_ctrl_btn_container").height()
        }, 500).addClass("closed"),
        jQuery(".bwg_toggle_container").animate({
            top: 0
        }, {
            duration: 500,
            complete: function() {
                jQuery(".bwg_toggle_container i").attr("class", "bwg_toggle_btn " + t)
            }
        }))) : (gallery_box_data.enable_image_filmstrip && "bottom" == gallery_box_data.lightbox_filmstrip_pos || "bottom" != gallery_box_data.lightbox_ctrl_btn_pos || "bottom" != gallery_box_data.lightbox_rate_pos ? gallery_box_data.enable_image_filmstrip && "top" == gallery_box_data.lightbox_filmstrip_pos || "top" != gallery_box_data.lightbox_ctrl_btn_pos || "top" != gallery_box_data.lightbox_rate_pos || jQuery(".bwg_image_rate").animate({
            top: jQuery(".bwg_ctrl_btn_container").height()
        }, 500) : jQuery(".bwg_image_rate").animate({
            bottom: jQuery(".bwg_ctrl_btn_container").height()
        }, 500),
        gallery_box_data.enable_image_filmstrip && "bottom" == gallery_box_data.lightbox_filmstrip_pos || "bottom" != gallery_box_data.lightbox_ctrl_btn_pos || "bottom" != gallery_box_data.lightbox_hit_pos ? gallery_box_data.enable_image_filmstrip && "top" == gallery_box_data.lightbox_filmstrip_pos || "top" != gallery_box_data.lightbox_ctrl_btn_pos || "top" != gallery_box_data.lightbox_hit_pos || jQuery(".bwg_image_hit").animate({
            top: jQuery(".bwg_ctrl_btn_container").height()
        }, 500) : jQuery(".bwg_image_hit").animate({
            bottom: jQuery(".bwg_ctrl_btn_container").height()
        }, 500),
        "bottom" == gallery_box_data.lightbox_ctrl_btn_pos ? (jQuery(".bwg_ctrl_btn_container").animate({
            bottom: 0
        }, 500).removeClass("closed"),
        jQuery(".bwg_toggle_container").animate({
            bottom: jQuery(".bwg_ctrl_btn_container").height()
        }, {
            duration: 500,
            complete: function() {
                jQuery(".bwg_toggle_container i").attr("class", "bwg_toggle_btn " + e)
            }
        })) : (jQuery(".bwg_ctrl_btn_container").animate({
            top: 0
        }, 500).removeClass("closed"),
        jQuery(".bwg_toggle_container").animate({
            top: jQuery(".bwg_ctrl_btn_container").height()
        }, {
            duration: 500,
            complete: function() {
                jQuery(".bwg_toggle_container i").attr("class", "bwg_toggle_btn " + e)
            }
        }))),
        bwg_info_position(!0)
    });
    var o = window.innerHeight;
    jQuery(".bwg_resize-full").on(a, function() {
        bwg_resize_full()
    }),
    jQuery(".bwg_fullscreen").on(a, function() {
        jQuery(".bwg_watermark").css({
            display: "none"
        });
        var e, t = 0;
        if ((jQuery(".bwg_comment_container").hasClass("bwg_open") || jQuery(".bwg_ecommerce_container").hasClass("bwg_open")) && (t = jQuery(".bwg_comment_container").width() || jQuery(".bwg_ecommerce_container").width()),
        void 0 !== jQuery().fullscreen && jQuery.isFunction(jQuery().fullscreen))
            if (jQuery.fullscreen.isFullScreen())
                jQuery.fullscreen.exit(),
                e = o,
                jQuery(window).width() > gallery_box_data.image_width && (r = gallery_box_data.image_width),
                window.innerHeight > gallery_box_data.image_height && (_ = gallery_box_data.image_height),
                gallery_box_data.open_with_fullscreen && (r = jQuery(window).width(),
                _ = e),
                jQuery("#spider_popup_wrap").on("fscreenclose", function() {
                    jQuery("#spider_popup_wrap").css({
                        width: r,
                        height: _,
                        left: "50%",
                        top: "50%",
                        marginLeft: -r / 2,
                        marginTop: -_ / 2,
                        zIndex: 1e5
                    }),
                    jQuery(".bwg_image_wrap").css({
                        width: r - t
                    }),
                    jQuery(".bwg_image_container").css({
                        height: _ - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0),
                        width: r - t - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
                    }),
                    jQuery(".bwg_image_info").css("height", "auto"),
                    bwg_info_height_set(),
                    jQuery(".bwg_popup_image").css({
                        maxWidth: r - t - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
                        maxHeight: _ - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
                    }),
                    jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").css({
                        maxWidth: r - t - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
                        maxHeight: _ - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
                    }),
                    bwg_resize_instagram_post(),
                    bwg_change_watermark_container(),
                    "width" == gallery_box_data.width_or_height ? (jQuery(".bwg_filmstrip_container").css({
                        width: r - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0)
                    }),
                    jQuery(".bwg_filmstrip").css({
                        width: r - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
                    }),
                    bwg_set_filmstrip_pos(r - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data)) : (jQuery(".bwg_filmstrip_container").css({
                        height: _ - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0)
                    }),
                    jQuery(".bwg_filmstrip").css({
                        height: _ - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
                    }),
                    bwg_set_filmstrip_pos(_ - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data),
                    "horizontal" != gallery_box_data.filmstrip_direction && jQuery(".bwg_filmstrip_right").css({
                        top: _ - jQuery(".bwg_filmstrip_right").height()
                    })),
                    jQuery(".bwg_resize-full").show(),
                    jQuery(".bwg_resize-full").attr("class", "bwg-icon-expand bwg_ctrl_btn bwg_resize-full"),
                    jQuery(".bwg_resize-full").attr("title", bwg_objectsL10n.bwg_maximize),
                    jQuery(".bwg_fullscreen").attr("class", "bwg-icon-arrows-out bwg_ctrl_btn bwg_fullscreen"),
                    jQuery(".bwg_fullscreen").attr("title", bwg_objectsL10n.bwg_fullscreen),
                    jQuery("#spider_popup_wrap").width() < jQuery(window).width() && jQuery("#spider_popup_wrap").height() < window.innerHeight && jQuery(".spider_popup_close_fullscreen").attr("class", "spider_popup_close")
                });
            else {
                jQuery("#spider_popup_wrap").fullscreen();
                var i = screen.width
                  , a = screen.height;
                jQuery("#spider_popup_wrap").css({
                    width: i,
                    height: a,
                    left: 0,
                    top: 0,
                    margin: 0,
                    zIndex: 1e5
                }),
                jQuery(".bwg_image_wrap").css({
                    width: i - t
                }),
                jQuery(".bwg_image_container").css({
                    height: a - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0),
                    width: i - t - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
                }),
                jQuery(".bwg_image_info").css("height", "auto"),
                bwg_info_height_set(),
                jQuery(".bwg_popup_image").css({
                    maxWidth: i - t - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
                    maxHeight: a - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
                }),
                jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").css({
                    maxWidth: i - t - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
                    maxHeight: a - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
                }),
                bwg_resize_instagram_post(),
                bwg_change_watermark_container(),
                "width" == gallery_box_data.width_or_height ? (jQuery(".bwg_filmstrip_container").css({
                    width: i - ("horizontal" == gallery_box_data.filmstrip_direction ? t : 0)
                }, 500),
                jQuery(".bwg_filmstrip").css({
                    width: i - ("horizontal" == gallery_box_data.filmstrip_direction ? t : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
                }, 500),
                bwg_set_filmstrip_pos(i - ("horizontal" == gallery_box_data.filmstrip_direction ? t : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data)) : (jQuery(".bwg_filmstrip_container").css({
                    height: a - ("horizontal" == gallery_box_data.filmstrip_direction) ? "comment_container_width" : 0
                }),
                jQuery(".bwg_filmstrip").css({
                    height: a - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
                }),
                bwg_set_filmstrip_pos(a - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data),
                "horizontal" != gallery_box_data.filmstrip_direction && jQuery(".bwg_filmstrip_right").css({
                    top: a - jQuery(".bwg_filmstrip_right").height()
                })),
                jQuery(".bwg_resize-full").hide(),
                jQuery(".bwg_fullscreen").attr("class", "bwg-icon-compress bwg_ctrl_btn bwg_fullscreen"),
                jQuery(".bwg_fullscreen").attr("title", bwg_objectsL10n.bwg_exit_fullscreen),
                jQuery(".spider_popup_close").attr("class", "spider_popup_close_fullscreen")
            }
        return !1
    }),
    jQuery(".bwg_play_pause").on(a, function() {
        jQuery(".bwg_play_pause").length && jQuery(".bwg_play_pause").hasClass("bwg-icon-play") && !jQuery(".bwg_comment_container").hasClass("bwg_open") ? (bwg_play(gallery_box_data.data),
        jQuery(".bwg_play_pause").attr("title", bwg_objectsL10n.bwg_pause),
        jQuery(".bwg_play_pause").attr("class", "bwg-icon-pause bwg_ctrl_btn bwg_play_pause")) : (window.clearInterval(bwg_playInterval),
        jQuery(".bwg_play_pause").attr("title", bwg_objectsL10n.bwg_play),
        jQuery(".bwg_play_pause").attr("class", "bwg-icon-play bwg_ctrl_btn bwg_play_pause"))
    }),
    gallery_box_data.open_with_autoplay && (bwg_play(gallery_box_data.data),
    jQuery(".bwg_play_pause").attr("title", bwg_objectsL10n.bwg_pause),
    jQuery(".bwg_play_pause").attr("class", "bwg-icon-pause bwg_ctrl_btn bwg_play_pause")),
    gallery_box_data.open_with_fullscreen && bwg_open_with_fullscreen(),
    jQuery(".bwg_popup_image").removeAttr("width"),
    jQuery(".bwg_popup_image").removeAttr("height"),
    jQuery(window).focus(function() {
        jQuery(".bwg_play_pause").length && !jQuery(".bwg_play_pause").hasClass("bwg-icon-play") && bwg_play(gallery_box_data.data)
    }),
    jQuery(window).blur(function() {
        event_stack = [],
        window.clearInterval(bwg_playInterval)
    });
    gallery_box_data.lightbox_ctrl_btn_pos;
    1 == gallery_box_data.open_ecommerce && setTimeout(function() {
        bwg_ecommerce()
    }, 400),
    1 == gallery_box_data.open_comment && bwg_comment()
}
function spider_createpopup(e, t, a, r, _, s, o, l) {
    e = e.replace(/&#038;/g, "&"),
    isPopUpOpened || (isPopUpOpened = !0,
    spider_isunsupporteduseragent() || (bwg_overflow_initial_value = jQuery("html").css("overflow"),
    bwg_overflow_x_initial_value = jQuery("html").css("overflow-x"),
    bwg_overflow_y_initial_value = jQuery("html").css("overflow-y"),
    jQuery("html").attr("style", "overflow:hidden !important;"),
    jQuery("#bwg_spider_popup_loading_" + t).show(),
    jQuery("#spider_popup_overlay_" + t).css({
        display: "block"
    }),
    jQuery.ajax({
        type: "GET",
        url: e,
        success: function(e) {
            var t = jQuery('<div id="spider_popup_wrap" class="spider_popup_wrap" style=" width:' + a + "px; height:" + r + "px; margin-top:-" + r / 2 + "px; margin-left: -" + a / 2 + 'px; ">' + e + "</div>").hide().appendTo("body");
            if (gallery_box_ready(),
            spider_showpopup(s, o, t, _, l),
            "undefined" != typeof addthis) {
                jQuery(".addthis-smartlayers").show();
                var i = setInterval(function() {
                    void 0 !== addthis.layers.refresh && (clearInterval(i),
                    addthis.layers.refresh())
                }, 100)
            }
        },
        beforeSend: function() {},
        complete: function() {}
    })))
}
function spider_showpopup(e, t, i, a, r) {
    var _ = gallery_box_data.data
      , s = parseInt(jQuery("#bwg_current_image_key").val());
    if (void 0 !== _[s] && (isPopUpOpened = !0,
    -1 < _[s].filetype.indexOf("EMBED_") ? bwg_first_image_load(i, r) : jQuery("#spider_popup_wrap .bwg_popup_image_spun img").prop("complete") ? bwg_first_image_load(i, r) : jQuery("#spider_popup_wrap .bwg_popup_image_spun img").on("load error", function() {
        bwg_first_image_load(i, r)
    }),
    "EMBED_OEMBED_INSTAGRAM_POST" == _[s].filetype && "undefined" != typeof instgrm && void 0 !== instgrm.Embeds)) {
        instgrm.Embeds.process();
        var o = parseInt(jQuery("#bwg_image_container").height());
        jQuery(".bwg_embed_frame .instagram-media").css({
            "max-height": o + "px"
        })
    }
}
function bwg_first_image_load(e, t) {
    e.show(),
    "" == gallery_box_data.data[key].alt && "" == gallery_box_data.data[key].description ? jQuery(".bwg_info").hide() : jQuery(".bwg_info").show();
    var i = jQuery(".bwg_ctrl_btn_container").height();
    "bottom" == t ? jQuery(".bwg_toggle_container").css("bottom", i + "px") : "top" == t && jQuery(".bwg_toggle_container").css("top", i + "px"),
    jQuery(".bwg_spider_popup_loading").hide(),
    1 == gallery_box_data.preload_images && bwg_preload_images(parseInt(jQuery("#bwg_current_image_key").val())),
    bwg_load_filmstrip(),
    bwg_info_height_set()
}
function spider_isunsupporteduseragent() {
    return !window.XMLHttpRequest
}
function spider_destroypopup(e) {
    jQuery(".addthis-smartlayers").hide(),
    null != document.getElementById("spider_popup_wrap") && (void 0 !== jQuery().fullscreen && jQuery.isFunction(jQuery().fullscreen) && jQuery.fullscreen.isFullScreen() && jQuery.fullscreen.exit(),
    "undefined" != typeof enable_addthis && enable_addthis && jQuery(".at4-share-outer").hide(),
    setTimeout(function() {
        jQuery(".spider_popup_wrap").remove(),
        jQuery(".bwg_spider_popup_loading").css({
            display: "none"
        }),
        jQuery(".spider_popup_overlay").css({
            display: "none"
        }),
        jQuery(document).off("keydown"),
        !1 !== bwg_overflow_initial_value && jQuery("html").css("overflow", bwg_overflow_initial_value),
        !1 !== bwg_overflow_x_initial_value && jQuery("html").css("overflow-x", bwg_overflow_x_initial_value),
        !1 !== bwg_overflow_y_initial_value && jQuery("html").css("overflow-y", bwg_overflow_y_initial_value)
    }, 20)),
    isPopUpOpened = !1;
    var t = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())
      , i = document.querySelector('meta[name="viewport"]');
    t && i && (i.content = "width=device-width, initial-scale=1");
    var a = jQuery(document).scrollTop();
    history.pushState(history.state, null, window.location.origin + window.location.pathname + window.location.search),
    jQuery(document).scrollTop(a),
    void 0 !== gallery_box_data.bwg_playInterval && clearInterval(gallery_box_data.bwg_playInterval)
}
function get_ajax_pricelist() {
    var e = {};
    return jQuery(".add_to_cart_msg").html(""),
    e.ajax_task = "display",
    e.image_id = jQuery("#bwg_popup_image").attr("image_id"),
    jQuery("#ecommerce_ajax_loading").css("height", jQuery(".bwg_ecommerce_panel").css("height")),
    jQuery("#ecommerce_opacity_div").css("width", jQuery(".bwg_ecommerce_panel").css("width")),
    jQuery("#ecommerce_opacity_div").css("height", jQuery(".bwg_ecommerce_panel").css("height")),
    jQuery("#ecommerce_loading_div").css("width", jQuery(".bwg_ecommerce_panel").css("width")),
    jQuery("#ecommerce_loading_div").css("height", jQuery(".bwg_ecommerce_panel").css("height")),
    jQuery("#ecommerce_opacity_div").css("display", "block"),
    jQuery("#ecommerce_loading_div").css("display", "table-cell"),
    jQuery.ajax({
        type: "POST",
        url: jQuery("#bwg_ecommerce_form").attr("action"),
        data: e,
        success: function(e) {
            jQuery(".pge_tabs li a").on("click", function() {
                return jQuery(".pge_tabs_container > div").hide(),
                jQuery(".pge_tabs li").removeClass("pge_active"),
                jQuery(jQuery(this).attr("href")).show(),
                jQuery(this).closest("li").addClass("pge_active"),
                jQuery("[name=type]").val(jQuery(this).attr("href").substr(1)),
                !1
            });
            var t = jQuery(e).find(".manual").html();
            jQuery(".manual").html(t);
            var i = jQuery(e).find(".downloads").html();
            jQuery(".downloads").html(i);
            var a = jQuery(e).find(".pge_options").html();
            jQuery(".pge_options").html(a);
            var r = jQuery(e).find(".pge_add_to_cart").html();
            jQuery(".pge_add_to_cart").html(r)
        },
        beforeSend: function() {},
        complete: function() {
            jQuery("#ecommerce_opacity_div").css("display", "none"),
            jQuery("#ecommerce_loading_div").css("display", "none")
        }
    }),
    !1
}
function spider_ajax_save(e) {
    var t = {};
    return t.bwg_name = jQuery("#bwg_name").val(),
    t.bwg_comment = jQuery("#bwg_comment").val(),
    t.bwg_email = jQuery("#bwg_email").val(),
    t.bwg_captcha_input = jQuery("#bwg_captcha_input").val(),
    t.ajax_task = jQuery("#ajax_task").val(),
    t.image_id = jQuery("#image_id").val(),
    t.comment_id = jQuery("#comment_id").val(),
    jQuery("#ajax_loading").css("height", jQuery(".bwg_comments").css("height")),
    jQuery("#opacity_div").css("width", jQuery(".bwg_comments").css("width")),
    jQuery("#opacity_div").css("height", jQuery(".bwg_comments").css("height")),
    jQuery("#loading_div").css("width", jQuery(".bwg_comments").css("width")),
    jQuery("#loading_div").css("height", jQuery(".bwg_comments").css("height")),
    document.getElementById("opacity_div").style.display = "",
    document.getElementById("loading_div").style.display = "table-cell",
    jQuery.ajax({
        type: "POST",
        url: jQuery("#" + e).attr("action"),
        data: t,
        success: function(e) {
            jQuery(".bwg_comments").mCustomScrollbar("destroy");
            var t = jQuery(e).find(".bwg_comments").html();
            jQuery(".bwg_comments").html(t)
        },
        beforeSend: function() {},
        complete: function() {
            document.getElementById("opacity_div").style.display = "none",
            document.getElementById("loading_div").style.display = "none",
            jQuery(".bwg_comments").mCustomScrollbar({
                scrollInertia: 150,
                theme: "dark-thick",
                advanced: {
                    updateOnContentResize: !0
                }
            }),
            jQuery(".bwg_comments_close_btn").click(bwg_comment),
            bwg_captcha_refresh("bwg_captcha")
        }
    }),
    !1
}
function spider_rate_ajax_save(i, e) {
    var t = {};
    t.image_id = jQuery("#rate_image_id").val(),
    t.rate = void 0 !== e ? e : jQuery("#" + i + " input[name='score']").val(),
    t.ajax_task = jQuery("#rate_ajax_task").val();
    var a = jQuery("#bwg_image_container").data("action");
    return jQuery.ajax({
        type: "POST",
        url: a,
        data: t,
        success: function(e) {
            var t = jQuery(e).find("#" + i).html();
            jQuery("#" + i).html(t)
        },
        beforeSend: function() {},
        complete: function() {}
    })
}
function spider_set_input_value(e, t) {
    document.getElementById(e) && (document.getElementById(e).value = t)
}
function spider_form_submit(e, t) {
    document.getElementById(t) && document.getElementById(t).submit(),
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
}
function spider_check_required(e, t) {
    return "" == jQuery("#" + e).val() && (alert(t + " " + bwg_objectsL10n.bwg_field_required),
    jQuery("#" + e).attr("style", "border-color: #FF0000;"),
    jQuery("#" + e).focus(),
    !0)
}
function comment_check_privacy_policy() {
    var e = jQuery("#bwg_submit");
    e.removeClass("bwg-submit-disabled"),
    e.removeAttr("disabled"),
    jQuery("#bwg_comment_privacy_policy").is(":checked") || (e.addClass("bwg-submit-disabled"),
    e.attr("disabled", "disabled"))
}
function spider_check_email(e) {
    if ("" != jQuery("#" + e).val())
        return -1 == jQuery("#" + e).val().replace(/^\s+|\s+$/g, "").search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) && (alert(bwg_objectsL10n.bwg_mail_validation),
        !0)
}
function bwg_captcha_refresh(e) {
    document.getElementById(e + "_img") && document.getElementById(e + "_input") && (srcArr = document.getElementById(e + "_img").src.split("&r="),
    document.getElementById(e + "_img").src = srcArr[0] + "&r=" + Math.floor(100 * Math.random()),
    document.getElementById(e + "_img").style.display = "inline-block",
    document.getElementById(e + "_input").value = "")
}
function bwg_play_instagram_video(e, t) {
    jQuery(e).parent().find("video").each(function() {
        jQuery(this).get(0).paused ? (jQuery(this).get(0).play(),
        jQuery(e).children().hide()) : (jQuery(this).get(0).pause(),
        jQuery(e).children().show())
    })
}
function bwg_add_comment() {
    var t = jQuery("#bwg_comment_form")
      , e = t.attr("action")
      , i = {
        ajax_task: "add_comment"
    };
    return i.comment_name = t.find("#bwg_name").val(),
    i.comment_email = t.find("#bwg_email").val(),
    i.comment_text = t.find("#bwg_comment").val(),
    i.comment_captcha = t.find("#bwg_captcha_input").val(),
    i.popup_enable_captcha = t.find("#bwg_popup_enable_captcha").val(),
    i.privacy_policy = t.find("#bwg_comment_privacy_policy").is(":checked") ? 1 : 0,
    i.comment_image_id = jQuery("#bwg_popup_image").attr("image_id"),
    i.comment_moderation = t.find("#bwg_comment_moderation").val(),
    jQuery(".bwg_spider_ajax_loading").hide(),
    jQuery.ajax({
        url: e,
        type: "POST",
        dataType: "json",
        data: i,
        success: function(e) {
            jQuery(".bwg_comment_error").text(""),
            1 == e.error ? jQuery.each(e.error_messages, function(e, t) {
                t && jQuery(".bwg_comment_" + e + "_error").text(t)
            }) : (t.find("#bwg_comment").val(""),
            jQuery(".bwg_comment_waiting_message").hide(),
            0 == e.published && jQuery(".bwg_comment_waiting_message").show(),
            "" != e.html_comments_block && jQuery("#bwg_added_comments").html(e.html_comments_block).show())
        },
        beforeSend: function() {
            jQuery(".bwg_spider_ajax_loading").show()
        },
        complete: function() {
            0 < t.find("#bwg_comment_privacy_policy").length && (t.find("#bwg_comment_privacy_policy").prop("checked", !1),
            comment_check_privacy_policy()),
            bwg_captcha_refresh("bwg_captcha"),
            jQuery(".bwg_spider_ajax_loading").hide()
        },
        error: function() {}
    }),
    !1
}
function bwg_remove_comment(t) {
    var e = jQuery("#bwg_comment_form").attr("action")
      , i = {
        ajax_task: "delete_comment"
    };
    return i.id_image = jQuery("#bwg_popup_image").attr("image_id"),
    i.id_comment = t,
    jQuery.ajax({
        url: e,
        type: "POST",
        dataType: "json",
        data: i,
        success: function(e) {
            0 == e.error && jQuery("#bwg_comment_block_" + t).fadeOut("slow").remove()
        },
        beforeSend: function() {},
        complete: function() {},
        error: function() {}
    }),
    !1
}
function bwg_gallery_box(e, t, i, a) {
    jQuery(".bwg-validate").each(function() {
        jQuery(this).on("keypress change", function() {
            jQuery(this).parent().next().find(".bwg_comment_error").html("")
        })
    }),
    void 0 === i && (i = !1);
    var r, _ = t.data("bwg");
    r = t.find(".bwg-container").data("lightbox-url") ? t.find(".bwg-container").data("lightbox-url") : t.data("lightbox-url");
    var s = t.find(".cur_gal_id").val()
      , o = jQuery("#bwg_tag_id_" + s).val();
    o = o || 0;
    var l = 1 == i ? "&open_ecommerce=1" : ""
      , n = jQuery("#bwg_search_input_" + _).val()
      , g = jQuery("#bwg_order_" + _).val() ? "&filtersortby=" + jQuery("#bwg_order_" + _).val() : "";
    n = n || "",
    void 0 !== a && (r += "&gallery_id=" + a);
    var b = ""
      , w = jQuery("#bwg_blog_style_share_buttons_" + e).attr("data-open-comment");
    void 0 !== w && !1 !== w && (b = "&open_comment=1");
    var d = jQuery("#bwg_random_seed_" + _).val();
    spider_createpopup(r + "&bwg_gallery_type=" + t.data("gallery-type") + "&bwg_random_seed=" + d + "&image_id=" + e + "&filter_tag=" + o + l + b + "&filter_search_name=" + n + g, _, t.data("popup-width"), t.data("popup-height"), 1, "testpopup", 5, t.data("buttons-position"))
}
function bwg_change_image_lightbox(e, a, r, t) {
    if (jQuery("#rate_image_id").val(r[a].id),
    bwg_current_key = gallery_box_data.bwg_current_key,
    "" == gallery_box_data.data[a].alt && "" == gallery_box_data.data[a].description ? jQuery(".bwg_info").hide() : jQuery(".bwg_info").show(),
    jQuery(".bwg_image_info").css("height", "auto"),
    setTimeout(function() {
        bwg_info_height_set(),
        jQuery(".bwg_image_description").height() > jQuery(".bwg_image_info").height() && jQuery(".mCSB_container").hasClass("mCS_no_scrollbar") && jQuery(".bwg_image_info").mCustomScrollbar("destroy"),
        jQuery(".bwg_image_info").hasClass("mCustomScrollbar") || void 0 !== jQuery().mCustomScrollbar && jQuery.isFunction(jQuery().mCustomScrollbar) && jQuery(".bwg_image_info").mCustomScrollbar({
            scrollInertia: 150,
            theme: "dark-thick",
            advanced: {
                updateOnContentResize: !0
            }
        })
    }, 200),
    jQuery("#spider_popup_left").show(),
    jQuery("#spider_popup_right").show(),
    jQuery(".bwg_image_info").hide(),
    0 == gallery_box_data.enable_loop && (a == parseInt(r.length) - 1 && jQuery("#spider_popup_right").hide(),
    0 == a && jQuery("#spider_popup_left").hide()),
    1 == gallery_box_data.ecommerceACtive && 1 == gallery_box_data.enable_image_ecommerce)
        if (0 == gallery_box_data.data[a].pricelist)
            jQuery(".bwg_ecommerce").hide();
        else {
            jQuery(".bwg_ecommerce").show(),
            jQuery(".pge_tabs li").hide(),
            jQuery("#downloads").hide(),
            jQuery("#manual").hide();
            var i = gallery_box_data.data[a].pricelist_sections.split(",");
            if (i)
                if (jQuery("#" + i[0]).show(),
                jQuery("[name=type]").val(i[0]),
                1 < i.length)
                    for (jQuery(".pge_tabs").show(),
                    k = 0; k < i.length; k++)
                        jQuery("#" + i[k] + "_li").show();
                else
                    jQuery(".pge_tabs").hide();
            else
                jQuery("[name=type]").val("")
        }
    if (jQuery("#bwg_image_container").find("iframe").each(function() {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"),
        jQuery(this)[0].contentWindow.postMessage('{ "method": "pause" }', "*"),
        jQuery(this)[0].contentWindow.postMessage("pause", "*")
    }),
    jQuery("#bwg_image_container").find("video").each(function() {
        jQuery(this).trigger("pause")
    }),
    void 0 === r && (r = gallery_box_data.data),
    void 0 !== r[a] && void 0 !== r[e]) {
        if (jQuery(".bwg_play_pause").length && !jQuery(".bwg_play_pause").hasClass("bwg-icon-play") && bwg_play(r),
        t || jQuery("#bwg_current_image_key").val(a),
        gallery_box_data.bwg_trans_in_progress)
            return void gallery_box_data.event_stack.push(e + "-" + a);
        var _ = "right";
        if (bwg_current_key > a)
            _ = "left";
        else if (bwg_current_key == a)
            return;
        jQuery(".bwg_image_count").html(r[a].number),
        jQuery(".bwg_watermark").css({
            display: "none"
        }),
        "width" == gallery_box_data.width_or_height ? bwg_current_filmstrip_pos = a * (jQuery(".bwg_filmstrip_thumbnail").width() + 2 + 2 * gallery_box_data.lightbox_filmstrip_thumb_border_width) : "height" == gallery_box_data.width_or_height && (bwg_current_filmstrip_pos = a * (jQuery(".bwg_filmstrip_thumbnail").height() + 2 + 2 * gallery_box_data.lightbox_filmstrip_thumb_border_width)),
        gallery_box_data.bwg_current_key = a,
        location.replace("#bwg" + gallery_box_data.gallery_id + "/" + r[a].id),
        history.replaceState(void 0, void 0, "#bwg" + gallery_box_data.gallery_id + "/" + r[a].id),
        jQuery("#rate_image_id").val(r[a].id),
        spider_set_input_value("rate_ajax_task", "save_hit_count"),
        spider_rate_ajax_save("bwg_rate_form"),
        gallery_box_data.popup_enable_rate && (jQuery("#bwg_star").attr("data-score", r[a].avg_rating),
        jQuery("#bwg_star").removeAttr("title"),
        r[a].cur_key = a,
        bwg_rating(r[a].rate, r[a].rate_count, r[a].avg_rating, a)),
        jQuery(".bwg_image_hits span").html(++r[a].hit_count),
        jQuery("#bwg_popup_image").attr("image_id", r[a].id),
        jQuery(".bwg_image_title").html(jQuery("<span />").html(r[a].alt).text()),
        jQuery(".bwg_image_description").html(jQuery("<span />").html(r[a].description).text()),
        jQuery(".bwg_filmstrip_thumbnail").removeClass("bwg_thumb_active").addClass("bwg_thumb_deactive"),
        jQuery("#bwg_filmstrip_thumbnail_" + a).removeClass("bwg_thumb_deactive").addClass("bwg_thumb_active"),
        jQuery(".bwg_image_info").css("opacity", 1),
        "" == r[a].alt.trim() && "" == r[a].description.trim() && jQuery(".bwg_image_info").css("opacity", 0),
        "none" != jQuery(".bwg_image_info_container1").css("display") ? jQuery(".bwg_image_info_container1").css("display", "table-cell") : jQuery(".bwg_image_info_container1").css("display", "none"),
        "none" != jQuery(".bwg_image_rate_container1").css("display") ? jQuery(".bwg_image_rate_container1").css("display", "table-cell") : jQuery(".bwg_image_rate_container1").css("display", "none");
        var s = 2 == jQuery(".bwg_popup_image_spun").css("zIndex") ? ".bwg_popup_image_spun" : ".bwg_popup_image_second_spun"
          , o = ".bwg_popup_image_second_spun" == s ? ".bwg_popup_image_spun" : ".bwg_popup_image_second_spun"
          , l = -1 < r[a].filetype.indexOf("EMBED_")
          , n = -1 < r[a].filetype.indexOf("INSTAGRAM_POST")
          , g = -1 < r[a].filetype.indexOf("INSTAGRAM_VIDEO")
          , b = -1 !== jQuery.inArray(r[a].filetype, ["EMBED_OEMBED_YOUTUBE_VIDEO", "EMBED_OEMBED_VIMEO_VIDEO", "EMBED_OEMBED_FACEBOOK_VIDEO", "EMBED_OEMBED_DAILYMOTION_VIDEO"])
          , w = jQuery(s).height()
          , d = jQuery(s).width()
          , u = '<span class="bwg_popup_image_spun1" style="display: ' + (l ? "block" : "table") + '; width: inherit; height: inherit;"><span class="bwg_popup_image_spun2" style="display:' + (l ? "block" : "table-cell") + '; vertical-align: middle;text-align: center;height: 100%;">';
        if (l) {
            if (jQuery("#bwg_download").addClass("bwg-hidden"),
            u += '<span class="bwg_popup_embed bwg_popup_watermark" style="display: ' + (b ? "block" : "table") + '; table-layout: fixed; height: 100%;">' + (g ? '<div class="bwg_inst_play_btn_cont" onclick="bwg_play_instagram_video(this)" ><div class="bwg_inst_play"></div></div>' : " "),
            n) {
                var h = jQuery(".instagram-media")
                  , m = jQuery(".bwg_embed_frame")
                  , c = jQuery(".bwg_image_container").width() - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
                  , p = jQuery(".bwg_image_container").height() - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
                  , y = r[a].image_width
                  , f = r[a].image_height
                  , j = bwg_resizing_ratio(y, f, c, p);
                m.attr("data-width", c),
                m.attr("data-height", p);
                var Q = j.width
                  , v = j.height;
                Q < v ? Q -= 109 : Q += 109,
                u += spider_display_embed(r[a].filetype, r[a].image_url, r[a].filename, {
                    class: "bwg_embed_frame",
                    "data-width": c,
                    "data-height": p,
                    "data-instagram-width": y,
                    "data-instagram-height": f,
                    style: "width:" + Q + "px; height:" + v + "px; vertical-align:middle; display:inline-block; position:relative;"
                }),
                h.css({
                    "max-height": v + "px",
                    "min-width": Q + "px !important"
                })
            } else
                u += spider_display_embed(r[a].filetype, r[a].image_url, r[a].filename, {
                    class: "bwg_embed_frame",
                    frameborder: "0",
                    allowfullscreen: "allowfullscreen",
                    style: "display:" + (b ? "block" : "table-cell") + "; width:inherit; height:inherit; vertical-align:middle;"
                });
            u += "</span>"
        } else {
            jQuery(".bwg-loading").removeClass("bwg-hidden"),
            jQuery("#bwg_download").removeClass("bwg-hidden");
            var x = "'" + (gallery_box_data.site_url + jQuery("<span />").html(decodeURIComponent(r[a].image_url)).text()).split("?bwg")[0] + "'";
            gallery_box_data.popup_enable_zoom && (u += '<figure style="max-height: ' + w + "px; max-width: " + d + "px; background-image: url(" + x + '); background-repeat: no-repeat" class="bwg_popup_image bwg_popup_watermark" alt="' + r[a].alt + '" />'),
            u += '<img style="max-height: ' + w + "px; max-width: " + d + 'px;" class="bwg_popup_image bwg_popup_watermark" src="' + gallery_box_data.site_url + jQuery("<span />").html(decodeURIComponent(r[a].image_url)).text() + '" alt="' + r[a].alt + '" />'
        }
        function z() {
            gallery_box_data.preload_images && bwg_preload_images(a),
            window["bwg_" + gallery_box_data.bwg_image_effect](s, o, _),
            jQuery(s).find(".bwg_fb_video").each(function() {
                jQuery(this).attr("src", "")
            }),
            l ? jQuery("#bwg_fullsize_image").attr("href", decodeURIComponent(r[a].image_url)) : (jQuery("#bwg_fullsize_image").attr("href", gallery_box_data.site_url + decodeURIComponent(r[a].image_url)),
            jQuery("#bwg_download").attr("href", gallery_box_data.site_url + decodeURIComponent(r[a].thumb_url).replace("/thumb/", "/.original/")));
            var e = decodeURIComponent(r[a].image_url).split("/");
            jQuery("#bwg_download").attr("download", e[e.length - 1].replace(/\?bwg=(\d+)$/, ""));
            var t = encodeURIComponent(gallery_box_data.bwg_share_url.replace("image_id", "image_id=" + +r[a].id));
            if (l)
                var i = encodeURIComponent(r[a].thumb_url);
            else
                i = gallery_box_data.bwg_share_image_url + encodeURIComponent(encodeURIComponent(r[a].pure_image_url));
            i = i.replace(/%252F|%25252F/g, "%2F"),
            void 0 !== addthis_share && (addthis_share.url = t),
            jQuery("#bwg_facebook_a").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + t),
            jQuery("#bwg_twitter_a").attr("href", "https://twitter.com/intent/tweet?url=" + t),
            jQuery("#bwg_pinterest_a").attr("href", "http://pinterest.com/pin/create/button/?s=100&url=" + t + "&media=" + i + "&description=" + r[a].alt + "%0A" + r[a].description),
            jQuery("#bwg_tumblr_a").attr("href", "https://www.tumblr.com/share/photo?source=" + i + "&caption=" + r[a].alt + "&clickthru=" + t),
            jQuery(".bwg_comment_container").hasClass("bwg_open") && (jQuery(".bwg_comments .mCSB_container").css("top", "0"),
            jQuery("#bwg_added_comments").show(),
            spider_set_input_value("ajax_task", "display"),
            spider_set_input_value("image_id", jQuery("#bwg_popup_image").attr("image_id")),
            spider_ajax_save("bwg_comment_form")),
            jQuery(".bwg_ecommerce_container").hasClass("bwg_open") && (0 == r[a].pricelist ? (bwg_popup_sidebar_close(jQuery(".bwg_ecommerce_container")),
            bwg_animate_image_box_for_hide_sidebar(),
            jQuery(".bwg_ecommerce_container").attr("class", "bwg_ecommerce_container bwg_close"),
            jQuery(".bwg_ecommerce").attr("title", bwg_objectsL10n.bwg_show_ecommerce),
            jQuery(".spider_popup_close_fullscreen").show()) : get_ajax_pricelist()),
            void 0 !== jQuery().mCustomScrollbar && jQuery.isFunction(jQuery().mCustomScrollbar) && jQuery(".bwg_comments").mCustomScrollbar({
                advanced: {
                    updateOnContentResize: !0
                }
            }),
            jQuery(".bwg_comments .mCSB_scrollTools").hide(),
            gallery_box_data.enable_image_filmstrip && (bwg_slideshow_filmstrip_fix_dimension(),
            setTimeout(function() {
                bwg_disable_lightbox_filmstrip_left_right_arrow(gallery_box_data)
            }, 100)),
            bwg_resize_instagram_post()
        }
        if (gallery_box_data.popup_enable_zoom ? u += "</figure></span></span>" : u += "</span></span>",
        jQuery(o).html(u),
        jQuery(o).find("img").on("load error", function() {
            jQuery(".bwg-loading").addClass("bwg-hidden")
        }),
        jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").css({
            maxWidth: d,
            maxHeight: w,
            height: "auto"
        }),
        l)
            z();
        else
            jQuery(o).find("img").one("load", function() {
                z()
            }).each(function() {
                this.complete && jQuery(this).load()
            });
        "undefined" != typeof instgrm && void 0 !== instgrm.Embeds && (jQuery(".instagram-media").hide(),
        instgrm.Embeds.process(),
        jQuery(".instagram-media").show())
    }
}
function bwg_preload_images_lightbox(e) {
    for (var t = gallery_box_data.data, i = t.length, a = 0 == gallery_box_data.preload_images_count || gallery_box_data.preload_images_count >= i ? i : gallery_box_data.preload_images_count, r = 0, _ = 1; r < a; _++) {
        var s = 1;
        do {
            var o = (e + _ * s + i) % i;
            if (void 0 !== t[o])
                -1 < t[o].filetype.indexOf("EMBED_") || jQuery("<img/>").attr("src", gallery_box_data.site_url + jQuery("<span />").html(decodeURIComponent(t[o].image_url)).text());
            s *= -1,
            r++
        } while (1 != s)
    }
}
function bwg_popup_sidebar_open(e) {
    var t = gallery_box_data.lightbox_comment_width
      , i = gallery_box_data.lightbox_comment_pos;
    if (t > jQuery(window).width()) {
        if (t = jQuery(window).width(),
        e.css({
            width: t
        }),
        jQuery(".spider_popup_close_fullscreen").hide(),
        jQuery(".spider_popup_close").hide(),
        jQuery(".bwg_ctrl_btn").hasClass("bwg-icon-pause")) {
            var a = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
            jQuery(".bwg_play_pause").trigger(a ? "touchend" : "click")
        }
    } else
        jQuery(".spider_popup_close_fullscreen").show();
    "left" == i ? e.animate({
        left: 0
    }, 100) : e.animate({
        right: 0
    }, 100)
}
function bwg_comment() {
    if (jQuery(".bwg_watermark").css({
        display: "none"
    }),
    jQuery(".bwg_ecommerce_wrap").css("z-index", "-1"),
    jQuery(".bwg_comment_wrap").css("z-index", "25"),
    jQuery(".bwg_ecommerce_container").hasClass("bwg_open") && (bwg_popup_sidebar_close(jQuery(".bwg_ecommerce_container")),
    jQuery(".bwg_ecommerce_container").attr("class", "bwg_ecommerce_container bwg_close"),
    jQuery(".bwg_ecommerce").attr("title", bwg_objectsL10n.bwg_show_ecommerce)),
    jQuery(".bwg_comment_container").hasClass("bwg_open"))
        "1" == jQuery(".bwg_comment_container").attr("data-play-status") && jQuery(".bwg_ctrl_btn.bwg_play_pause").removeClass("bwg-icon-play").addClass("bwg-icon-pause").attr("title", bwg_objectsL10n.bwg_pause),
        bwg_popup_sidebar_close(jQuery(".bwg_comment_container")),
        bwg_animate_image_box_for_hide_sidebar(),
        jQuery(".bwg_comment_wrap").css("z-index", "-1"),
        jQuery(".bwg_comment_container").attr("class", "bwg_comment_container bwg_close"),
        jQuery(".bwg_comment").attr("title", bwg_objectsL10n.bwg_show_comments),
        jQuery(".spider_popup_close_fullscreen").show();
    else {
        jQuery(".bwg_play_pause").hasClass("bwg-icon-pause") ? jQuery(".bwg_comment_container").attr("data-play-status", "1") : jQuery(".bwg_comment_container").attr("data-play-status", "0"),
        jQuery(".bwg_ctrl_btn.bwg_play_pause").removeClass("bwg-icon-pause").addClass("bwg-icon-play").attr("title", bwg_objectsL10n.bwg_play),
        bwg_popup_sidebar_open(jQuery(".bwg_comment_container")),
        bwg_animate_image_box_for_show_sidebar(),
        jQuery(".bwg_comment_container").attr("class", "bwg_comment_container bwg_open"),
        jQuery(".bwg_comment").attr("title", bwg_objectsL10n.bwg_hide_comments);
        var e = parseInt(jQuery("#bwg_current_image_key").val());
        void 0 !== gallery_box_data.current_image_key && 0 != gallery_box_data.data[e].comment_count && (jQuery("#bwg_added_comments").show(),
        spider_set_input_value("ajax_task", "display"),
        spider_set_input_value("image_id", jQuery("#bwg_popup_image").attr("image_id")),
        spider_ajax_save("bwg_comment_form"))
    }
    jQuery(".bwg_comments").mCustomScrollbar("update", {
        scrollInertia: 150,
        theme: "dark-thick",
        advanced: {
            updateOnContentResize: !0
        }
    })
}
function bwg_ecommerce() {
    jQuery(".bwg_watermark").css({
        display: "none"
    }),
    jQuery(".bwg_ecommerce_wrap").css("z-index", "25"),
    jQuery(".bwg_comment_wrap").css("z-index", "-1"),
    jQuery(".bwg_comment_container").hasClass("bwg_open") && (bwg_popup_sidebar_close(jQuery(".bwg_comment_container")),
    jQuery(".bwg_comment_container").attr("class", "bwg_comment_container bwg_close"),
    jQuery(".bwg_comment").attr("title", bwg_objectsL10n.bwg_show_comments)),
    jQuery(".bwg_ecommerce_container").hasClass("bwg_open") ? (bwg_popup_sidebar_close(jQuery(".bwg_ecommerce_container")),
    bwg_animate_image_box_for_hide_sidebar(),
    jQuery(".bwg_ecommerce_container").attr("class", "bwg_ecommerce_container bwg_close"),
    jQuery(".bwg_ecommerce").attr("title", bwg_objectsL10n.bwg_show_ecommerce)) : (bwg_popup_sidebar_open(jQuery(".bwg_ecommerce_container")),
    bwg_animate_image_box_for_show_sidebar(),
    jQuery(".bwg_ecommerce_container").attr("class", "bwg_ecommerce_container bwg_open"),
    jQuery(".bwg_ecommerce").attr("title", bwg_objectsL10n.bwg_hide_ecommerce),
    get_ajax_pricelist())
}
function bwg_popup_sidebar_close(e) {
    var t = parseInt(e.css("borderRightWidth"));
    t || (t = 0),
    "left" == lightbox_comment_pos ? e.animate({
        left: -e.width() - t
    }, 100) : "right" == lightbox_comment_pos && e.animate({
        right: -e.width() - t
    }, 100)
}
function bwg_animate_image_box_for_hide_sidebar() {
    "left" == lightbox_comment_pos ? jQuery(".bwg_image_wrap").animate({
        left: 0,
        width: jQuery("#spider_popup_wrap").width()
    }, 100) : "right" == lightbox_comment_pos && jQuery(".bwg_image_wrap").animate({
        right: 0,
        width: jQuery("#spider_popup_wrap").width()
    }, 100),
    jQuery(".bwg_image_container").animate({
        width: jQuery("#spider_popup_wrap").width() - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
    }, 100),
    jQuery(".bwg_popup_image").animate({
        maxWidth: jQuery("#spider_popup_wrap").width() - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
    }, {
        duration: 100,
        complete: function() {
            bwg_change_watermark_container()
        }
    }),
    jQuery(".bwg_popup_embed").animate({
        width: jQuery("#spider_popup_wrap").width() - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
    }, {
        duration: 100,
        complete: function() {
            bwg_resize_instagram_post(),
            bwg_change_watermark_container()
        }
    }),
    "width" == gallery_box_data.width_or_height ? (jQuery(".bwg_filmstrip_container").animate({
        width: jQuery(".spider_popup_wrap").width()
    }, 100),
    jQuery(".bwg_filmstrip").animate({
        width: jQuery(".spider_popup_wrap").width() - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    }, 100)) : "height" == gallery_box_data.width_or_height && (jQuery(".bwg_filmstrip_container").animate({
        height: jQuery(".spider_popup_wrap").width()
    }, 100),
    jQuery(".bwg_filmstrip").animate({
        height: jQuery(".spider_popup_wrap").width() - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    }, 100)),
    bwg_set_filmstrip_pos(jQuery(".spider_popup_wrap").width() - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data),
    jQuery(".spider_popup_close_fullscreen").show(100)
}
function bwg_animate_image_box_for_show_sidebar() {
    var e = jQuery(".bwg_comment_container").width() || jQuery(".bwg_ecommerce_container").width();
    "left" == lightbox_comment_pos ? jQuery(".bwg_image_wrap").animate({
        left: e,
        width: jQuery("#spider_popup_wrap").width() - e
    }, 100) : "right" == lightbox_comment_pos && jQuery(".bwg_image_wrap").animate({
        right: e,
        width: jQuery("#spider_popup_wrap").width() - e
    }, 100),
    jQuery(".bwg_image_container").animate({
        width: jQuery("#spider_popup_wrap").width() - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0) - e
    }, 100),
    jQuery(".bwg_popup_image").animate({
        maxWidth: jQuery("#spider_popup_wrap").width() - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
    }, {
        duration: 100,
        complete: function() {
            bwg_change_watermark_container()
        }
    }),
    jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").animate({
        maxWidth: jQuery("#spider_popup_wrap").width() - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
    }, {
        duration: 100,
        complete: function() {
            bwg_resize_instagram_post(),
            bwg_change_watermark_container()
        }
    }),
    "width" == gallery_box_data.width_or_height && (jQuery(".bwg_filmstrip_container").css({
        width: jQuery("#spider_popup_wrap").width() - ("vertical" == gallery_box_data.filmstrip_direction ? 0 : e)
    }),
    jQuery(".bwg_filmstrip").animate({
        width: jQuery(".bwg_filmstrip_container").width() - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    }, 100),
    bwg_set_filmstrip_pos(jQuery(".bwg_filmstrip_container").width() - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data))
}
function bwg_reset_zoom() {
    var e = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())
      , t = document.querySelector('meta[name="viewport"]');
    e && t && (t.content = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0")
}
function bwg_open_with_fullscreen() {
    jQuery(".bwg_watermark").css({
        display: "none"
    });
    var e = 0;
    (jQuery(".bwg_comment_container").hasClass("bwg_open") || jQuery(".bwg_ecommerce_container").hasClass("bwg_open")) && (e = jQuery(".bwg_comment_container").width() || jQuery(".bwg_ecommerce_container").width()),
    bwg_popup_current_width = jQuery(window).width(),
    bwg_popup_current_height = window.innerHeight,
    jQuery("#spider_popup_wrap").css({
        width: jQuery(window).width(),
        height: window.innerHeight,
        left: 0,
        top: 0,
        margin: 0,
        zIndex: 100002
    }),
    jQuery(".bwg_image_wrap").css({
        width: jQuery(window).width() - e
    }),
    jQuery(".bwg_image_container").css({
        height: bwg_popup_current_height - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0),
        width: bwg_popup_current_width - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
    }),
    jQuery(".bwg_popup_image").css({
        maxWidth: jQuery(window).width() - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
        maxHeight: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }, {
        complete: function() {
            bwg_change_watermark_container()
        }
    }),
    jQuery(".bwg_popup_video").css({
        width: jQuery(window).width() - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
        height: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }, {
        complete: function() {
            bwg_change_watermark_container()
        }
    }),
    jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").css({
        maxWidth: jQuery(window).width() - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
        maxHeight: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }, {
        complete: function() {
            bwg_resize_instagram_post(),
            bwg_change_watermark_container()
        }
    }),
    "width" == gallery_box_data.width_or_height ? (jQuery(".bwg_filmstrip_container").css({
        width: jQuery(window).width() - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0)
    }),
    jQuery(".bwg_filmstrip").css({
        width: jQuery(window).width() - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    }),
    bwg_set_filmstrip_pos(jQuery(window).width() - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data)) : (jQuery(".bwg_filmstrip_container").css({
        height: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0)
    }),
    jQuery(".bwg_filmstrip").css({
        height: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    }),
    bwg_set_filmstrip_pos(window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? "comment_container_width" : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data)),
    jQuery(".bwg_resize-full").attr("class", "bwg-icon-compress bwg_ctrl_btn bwg_resize-full"),
    jQuery(".bwg_resize-full").attr("title", bwg_objectsL10n.bwg_restore),
    jQuery(".spider_popup_close").attr("class", "spider_popup_close_fullscreen")
}
function bwg_resize_full() {
    jQuery(".bwg_watermark").css({
        display: "none"
    });
    var e = 0;
    (jQuery(".bwg_comment_container").hasClass("bwg_open") || jQuery(".bwg_ecommerce_container").hasClass("bwg_open")) && (e = jQuery(".bwg_comment_container").width() || jQuery(".bwg_ecommerce_container").width()),
    jQuery(".bwg_resize-full").hasClass("bwg-icon-compress") ? (jQuery(window).width() > gallery_box_data.image_width && (bwg_popup_current_width = gallery_box_data.image_width),
    window.innerHeight > gallery_box_data.image_height && (bwg_popup_current_height = gallery_box_data.image_height),
    jQuery("#spider_popup_wrap").animate({
        width: bwg_popup_current_width,
        height: bwg_popup_current_height,
        left: "50%",
        top: "50%",
        marginLeft: -bwg_popup_current_width / 2,
        marginTop: -bwg_popup_current_height / 2,
        zIndex: 100002
    }, 500),
    jQuery(".bwg_image_wrap").animate({
        width: bwg_popup_current_width - e
    }, 500),
    jQuery(".bwg_image_container").animate({
        height: bwg_popup_current_height - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0),
        width: bwg_popup_current_width - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
    }, 500),
    jQuery(".bwg_popup_image").animate({
        maxWidth: bwg_popup_current_width - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
        maxHeight: bwg_popup_current_height - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }, {
        duration: 500,
        complete: function() {
            bwg_change_watermark_container(),
            jQuery("#spider_popup_wrap").width() < jQuery(window).width() && jQuery("#spider_popup_wrap").height() < window.innerHeight && jQuery(".spider_popup_close_fullscreen").attr("class", "spider_popup_close")
        }
    }),
    jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").animate({
        maxWidth: bwg_popup_current_width - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
        maxHeight: bwg_popup_current_height - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }, {
        duration: 500,
        complete: function() {
            bwg_resize_instagram_post(),
            bwg_change_watermark_container(),
            jQuery("#spider_popup_wrap").width() < jQuery(window).width() && jQuery("#spider_popup_wrap").height() < window.innerHeight && jQuery(".spider_popup_close_fullscreen").attr("class", "spider_popup_close")
        }
    }),
    "width" == gallery_box_data.width_or_height ? (jQuery(".bwg_filmstrip_container").animate({
        width: bwg_popup_current_width - ("horizontal" == gallery_box_data.filmstrip_direction ? e : 0)
    }, 500),
    jQuery(".bwg_filmstrip").animate({
        width: bwg_popup_current_width - ("horizontal" == gallery_box_data.filmstrip_direction ? e : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    }, 500),
    bwg_set_filmstrip_pos(bwg_popup_current_width - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data)) : (jQuery(".bwg_filmstrip_container").animate({
        height: bwg_popup_current_height - ("horizontal" == gallery_box_data.filmstrip_direction ? e : 0)
    }, 500),
    jQuery(".bwg_filmstrip").animate({
        height: bwg_popup_current_height - ("horizontal" == gallery_box_data.filmstrip_direction ? e : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    }, 500),
    bwg_set_filmstrip_pos(bwg_popup_current_height - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data),
    "horizontal" != gallery_box_data.filmstrip_direction && jQuery(".bwg_filmstrip_right").css({
        top: bwg_popup_current_height - jQuery(".bwg_filmstrip_right").height()
    })),
    jQuery(".bwg_resize-full").attr("class", "bwg-icon-expand bwg_ctrl_btn bwg_resize-full"),
    jQuery(".bwg_resize-full").attr("title", bwg_objectsL10n.bwg_maximize),
    setTimeout(function() {
        bwg_info_height_set()
    }, 500)) : (bwg_popup_current_width = jQuery(window).width(),
    bwg_popup_current_height = window.innerHeight,
    jQuery("#spider_popup_wrap").animate({
        width: jQuery(window).width(),
        height: window.innerHeight,
        left: 0,
        top: 0,
        margin: 0,
        zIndex: 100002
    }, 500),
    jQuery(".bwg_image_wrap").animate({
        width: jQuery(window).width() - e
    }, 500),
    jQuery(".bwg_image_container").animate({
        height: bwg_popup_current_height - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0),
        width: bwg_popup_current_width - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0)
    }, 500),
    jQuery(".bwg_popup_image").animate({
        maxWidth: jQuery(window).width() - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
        maxHeight: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }, {
        duration: 500,
        complete: function() {
            bwg_change_watermark_container()
        }
    }),
    jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").animate({
        maxWidth: jQuery(window).width() - e - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0),
        maxHeight: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }, {
        duration: 500,
        complete: function() {
            bwg_resize_instagram_post(),
            bwg_change_watermark_container()
        }
    }),
    "width" == gallery_box_data.width_or_height ? (jQuery(".bwg_filmstrip_container").animate({
        width: jQuery(window).width() - ("horizontal" == gallery_box_data.filmstrip_direction ? e : 0)
    }, 500),
    jQuery(".bwg_filmstrip").animate({
        width: jQuery(window).width() - ("horizontal" == gallery_box_data.filmstrip_direction ? e : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    }, 500),
    bwg_set_filmstrip_pos(jQuery(window).width() - ("horizontal" == gallery_box_data.filmstrip_direction ? e : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data)) : (jQuery(".bwg_filmstrip_container").animate({
        height: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? e : 0)
    }, 500),
    jQuery(".bwg_filmstrip").animate({
        height: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? e : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    }, 500),
    bwg_set_filmstrip_pos(window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? e : 0) - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height()), "", gallery_box_data),
    "horizontal" != gallery_box_data.filmstrip_direction && jQuery(".bwg_filmstrip_right").css({
        top: window.innerHeight - jQuery(".bwg_filmstrip_right").height()
    })),
    jQuery(".bwg_resize-full").attr("class", "bwg-icon-compress bwg_ctrl_btn bwg_resize-full"),
    jQuery(".bwg_resize-full").attr("title", bwg_objectsL10n.bwg_restore),
    jQuery(".spider_popup_close").attr("class", "spider_popup_close_fullscreen")),
    setTimeout(function() {
        bwg_info_height_set()
    }, 500)
}
function bwg_popup_resize_lightbox() {
    void 0 !== jQuery().fullscreen && jQuery.isFunction(jQuery().fullscreen) && (jQuery.fullscreen.isFullScreen() || (jQuery(".bwg_resize-full").show(),
    jQuery(".bwg_resize-full").hasClass("bwg-icon-compress") || jQuery(".bwg_resize-full").attr("class", "bwg-icon-expand bwg_ctrl_btn bwg_resize-full"),
    jQuery(".bwg_resize-full").attr("title", bwg_objectsL10n.bwg_maximize),
    jQuery(".bwg_fullscreen").attr("class", "bwg-icon-arrows-out bwg_ctrl_btn bwg_fullscreen"),
    jQuery(".bwg_fullscreen").attr("title", bwg_objectsL10n.fullscreen)));
    var e = 0;
    (jQuery(".bwg_comment_container").hasClass("bwg_open") || jQuery(".bwg_ecommerce_container").hasClass("bwg_open")) && (e = gallery_box_data.lightbox_comment_width),
    e > jQuery(window).width() ? (e = jQuery(window).width(),
    jQuery(".bwg_comment_container").css({
        width: e
    }),
    jQuery(".bwg_ecommerce_container").css({
        width: e
    }),
    jQuery(".spider_popup_close_fullscreen").hide()) : jQuery(".spider_popup_close_fullscreen").show(),
    window.innerHeight > gallery_box_data.image_height && 1 != gallery_box_data.open_with_fullscreen && !jQuery(".bwg_resize-full").hasClass("bwg-icon-compress") ? (jQuery("#spider_popup_wrap").css({
        height: gallery_box_data.image_height,
        top: "50%",
        marginTop: -gallery_box_data.image_height / 2,
        zIndex: 100002
    }),
    jQuery(".bwg_image_container").css({
        height: gallery_box_data.image_height - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }),
    jQuery(".bwg_image_info").css("height", "auto"),
    bwg_info_height_set(),
    jQuery(".bwg_popup_image").css({
        maxHeight: gallery_box_data.image_height - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }),
    jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").css({
        maxHeight: gallery_box_data.image_height - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }),
    "vertical" == gallery_box_data.filmstrip_direction && (jQuery(".bwg_filmstrip_container").css({
        height: gallery_box_data.image_height
    }),
    jQuery(".bwg_filmstrip").css({
        height: gallery_box_data.image_height - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    })),
    bwg_popup_current_height = gallery_box_data.image_height) : (jQuery("#spider_popup_wrap").css({
        height: window.innerHeight,
        top: 0,
        marginTop: 0,
        zIndex: 100002
    }),
    jQuery(".bwg_image_container").css({
        height: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }),
    jQuery(".bwg_image_info").css("height", "auto"),
    bwg_info_height_set(),
    jQuery(".bwg_popup_image").css({
        maxHeight: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }),
    jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").css({
        maxHeight: window.innerHeight - ("horizontal" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_height : 0)
    }),
    "vertical" == gallery_box_data.filmstrip_direction && (jQuery(".bwg_filmstrip_container").css({
        height: window.innerHeight
    }),
    jQuery(".bwg_filmstrip").css({
        height: window.innerHeight - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    })),
    bwg_popup_current_height = window.innerHeight),
    jQuery(window).width() >= gallery_box_data.image_width && 1 != gallery_box_data.open_with_fullscreen ? (jQuery("#spider_popup_wrap").css({
        width: gallery_box_data.image_width,
        left: "50%",
        marginLeft: -gallery_box_data.image_width / 2,
        zIndex: 100002
    }),
    jQuery(".bwg_image_wrap").css({
        width: gallery_box_data.image_width - e
    }),
    jQuery(".bwg_image_container").css({
        width: gallery_box_data.image_width - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0) - e
    }),
    jQuery(".bwg_image_info").css("height", "auto"),
    bwg_info_height_set(),
    jQuery(".bwg_popup_image").css({
        maxWidth: gallery_box_data.image_width - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0) - e
    }),
    jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").css({
        maxWidth: gallery_box_data.image_width - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0) - e
    }),
    "horizontal" == gallery_box_data.filmstrip_direction && (jQuery(".bwg_filmstrip_container").css({
        width: gallery_box_data.image_width - e
    }),
    jQuery(".bwg_filmstrip").css({
        width: gallery_box_data.image_width - e - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    })),
    bwg_popup_current_width = gallery_box_data.image_width) : (jQuery("#spider_popup_wrap").css({
        width: jQuery(window).width(),
        left: 0,
        marginLeft: 0,
        zIndex: 100002
    }),
    jQuery(".bwg_image_wrap").css({
        width: jQuery(window).width() - e
    }),
    jQuery(".bwg_image_container").css({
        width: jQuery(window).width() - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0) - e
    }),
    jQuery(".bwg_popup_image").css({
        maxWidth: jQuery(window).width() - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0) - e
    }),
    jQuery(".bwg_popup_embed > .bwg_embed_frame > img, .bwg_popup_embed > .bwg_embed_frame > video").css({
        maxWidth: jQuery(window).width() - ("vertical" == gallery_box_data.filmstrip_direction ? gallery_box_data.image_filmstrip_width : 0) - e
    }),
    "horizontal" == gallery_box_data.filmstrip_direction && (jQuery(".bwg_filmstrip_container").css({
        width: jQuery(window).width() - e
    }),
    jQuery(".bwg_filmstrip").css({
        width: jQuery(window).width() - e - 2 * ("horizontal" == gallery_box_data.filmstrip_direction ? jQuery(".bwg_filmstrip_right").width() : jQuery(".bwg_filmstrip_right").height())
    })),
    bwg_popup_current_width = jQuery(window).width()),
    bwg_resize_instagram_post(),
    bwg_change_watermark_container(),
    1 != gallery_box_data.open_with_fullscreen && (gallery_box_data.lightbox_close_btn_right < 0 && jQuery("#spider_popup_wrap").width() - 2 * gallery_box_data.lightbox_close_btn_right >= jQuery(window).width() || gallery_box_data.lightbox_close_btn_top < 0 && jQuery("#spider_popup_wrap").height() - 2 * gallery_box_data.lightbox_close_btn_top >= jQuery(window).height() ? jQuery(".spider_popup_close").attr("class", "spider_popup_close_fullscreen") : jQuery(".spider_popup_close_fullscreen").attr("class", "spider_popup_close"));
    var t = jQuery(".bwg_ctrl_btn_container").height();
    "bottom" == gallery_box_data.lightbox_ctrl_btn_pos && jQuery(".bwg_toggle_container i").hasClass("bwg-icon-caret-down") && jQuery(".bwg_toggle_container").css("bottom", t + "px"),
    "top" == gallery_box_data.lightbox_ctrl_btn_pos && jQuery(".bwg_toggle_container i").hasClass("bwg-icon-caret-up") && jQuery(".bwg_toggle_container").css("top", t + "px")
}
function bwg_rating(e, t, i, a) {
    lightbox_rate_stars_count = gallery_box_data.lightbox_rate_stars_count,
    lightbox_rate_size = gallery_box_data.lightbox_rate_size,
    lightbox_rate_icon = gallery_box_data.lightbox_rate_icon;
    var r = "Not rated yet.";
    if (0 != i && "" != i && (r = parseFloat(i).toFixed(1) + "\n Votes: " + t),
    void 0 !== jQuery().raty && jQuery.isFunction(jQuery().raty)) {
        var _ = parseFloat(jQuery("#bwg_star").attr("data-score"));
        jQuery("#bwg_star").removeAttr("data-score").html("");
        var s = {
            starType: "i",
            number: lightbox_rate_stars_count,
            size: lightbox_rate_size,
            noRatedMsg: "Not rated yet.",
            readOnly: !1,
            score: _,
            starHalf: "bwg-icon-" + lightbox_rate_icon + ("star" == lightbox_rate_icon ? "-half" : "") + "-o",
            starOff: "bwg-icon-" + lightbox_rate_icon + "-o",
            starOn: "bwg-icon-" + lightbox_rate_icon,
            cancelOff: "bwg-icon-minus-square-o",
            cancelOn: "bwg-icon-minus-square-o",
            cancel: !1,
            cancelHint: "Cancel your rating.",
            hints: [r, r, r, r, r],
            alreadyRatedMsg: parseFloat(i).toFixed(1) + "\nYou have already rated.\nVotes: " + t
        };
        e || (s.click = function(e, t) {
            jQuery("#bwg_star").hide(),
            jQuery("#bwg_rated").show(),
            spider_set_input_value("rate_ajax_task", "save_rate"),
            jQuery.when(spider_rate_ajax_save("bwg_rate_form", e)).then(function() {
                gallery_box_data.data[a].rate = e,
                ++gallery_box_data.data[a].rate_count,
                gallery_box_data.data[a].avg_rating = _ ? ((_ + e) / 2).toFixed(1) : e.toFixed(1),
                bwg_rating(gallery_box_data.data[a].rate, gallery_box_data.data[a].rate_count, gallery_box_data.data[a].avg_rating, gallery_box_data.current_image_key)
            })
        }
        ),
        jQuery("#bwg_star").raty(s),
        jQuery(".bwg_image_rate_disabled").hide(),
        e && jQuery(".bwg_image_rate_disabled").show()
    }
}
function changeDownloadsTotal(e) {
    var t = 0;
    0 == jQuery("[name=option_show_digital_items_count]").val() ? jQuery("[name=selected_download_item]:checked").each(function() {
        t += Number(jQuery(this).closest("tr").attr("data-price"))
    }) : jQuery(".digital_image_count").each(function() {
        0 != Number(jQuery(this).val()) && (t += Number(jQuery(this).closest("tr").attr("data-price")) * Number(jQuery(this).val()))
    }),
    t = t.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
    jQuery(".product_downloads_price").html(t)
}
function changeMenualTotal(e) {
    Number(jQuery(e).val()) <= 0 && jQuery(e).val("1");
    var t = Number(jQuery(e).val())
      , i = Number(jQuery(".product_manual_price").attr("data-actual-price"));
    i = (i *= t).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
    jQuery(".product_manual_price").html(i)
}
function onSelectableParametersChange(e) {
    var t = 0
      , i = gallery_box_data.data[jQuery("#bwg_current_image_key").val()].pricelist_manual_price ? gallery_box_data.data[jQuery("#bwg_current_image_key").val()].pricelist_manual_price : "0";
    i = parseFloat(i.replace(",", ""));
    var a = jQuery(e).closest(".image_selected_parameter").attr("data-parameter-type")
      , r = jQuery(e).val();
    r = r.split("*");
    var _ = parseFloat(r[1])
      , s = r[0]
      , o = Number(jQuery(e).closest(".image_selected_parameter").find(".already_selected_values").val());
    if ("4" == a || "5" == a) {
        var l = parseFloat(s + _);
        jQuery(e).closest(".image_selected_parameter").find(".already_selected_values").val(l)
    } else if ("6" == a) {
        if (0 == jQuery(e).is(":checked"))
            var n = o - parseFloat(s + _);
        else
            n = o + parseFloat(s + _);
        jQuery(e).closest(".image_selected_parameter").find(".already_selected_values").val(n)
    }
    jQuery(".already_selected_values").each(function() {
        t += Number(jQuery(this).val())
    }),
    i += t,
    jQuery(".product_manual_price").attr("data-actual-price", i),
    i = (i *= Number(jQuery(".image_count").val()) <= 0 ? 1 : Number(jQuery(".image_count").val())).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
    jQuery(".product_manual_price").html(i)
}
function onBtnClickAddToCart() {
    var e = jQuery("[name=type]").val();
    if ("" != e) {
        var t = {};
        if ("manual" == e) {
            var i = jQuery(".image_count").val()
              , a = {};
            jQuery(".manual").find(".image_selected_parameter").each(function() {
                var e = jQuery(this).attr("data-parameter-id")
                  , t = "";
                switch (jQuery(this).attr("data-parameter-type")) {
                case "2":
                    t = jQuery(this).find("input").val();
                    break;
                case "3":
                    t = jQuery(this).find("textarea").val();
                    break;
                case "4":
                    t = jQuery(this).find("select :selected").val();
                    break;
                case "5":
                    t = jQuery(this).find("[type=radio]:checked").val();
                    break;
                case "6":
                    var i = [];
                    jQuery(this).find("[type=checkbox]:checked").each(function() {
                        i.push(jQuery(this).val())
                    }),
                    t = i
                }
                a[e] = t
            }),
            t.count = i,
            t.parameters = a,
            t.price = jQuery(".product_manual_price").attr("data-price").replace(",", "")
        } else {
            var r = [];
            if (0 == jQuery("[name=option_show_digital_items_count]").val()) {
                if (0 == jQuery("[name=selected_download_item]:checked").length)
                    return void jQuery(".add_to_cart_msg").html("You must select at least one item.");
                jQuery("[name=selected_download_item]:checked").each(function() {
                    var e = {};
                    e.id = jQuery(this).val(),
                    e.count = 1,
                    e.price = jQuery(this).closest("tr").attr("data-price"),
                    r.push(e)
                })
            } else
                jQuery(".digital_image_count").each(function() {
                    var e = {};
                    0 < jQuery(this).val() && (e.id = jQuery(this).closest("tr").attr("data-id"),
                    e.price = jQuery(this).closest("tr").attr("data-price"),
                    e.count = jQuery(this).val(),
                    r.push(e))
                });
            if (0 == (t.downloadItems = r).length)
                return void jQuery(".add_to_cart_msg").html("Please select at least one item")
        }
        var _ = jQuery("#ajax_url").val()
          , s = {
            action: "add_cart",
            task: "add_cart",
            controller: "checkout",
            image_id: jQuery("#bwg_popup_image").attr("image_id"),
            type: e,
            data: JSON.stringify(t)
        };
        jQuery.ajax({
            type: "POST",
            url: _,
            data: s,
            success: function(e) {
                responseData = JSON.parse(e),
                jQuery(".add_to_cart_msg").html(responseData.msg),
                jQuery(".products_in_cart").html(responseData.products_in_cart),
                1 == responseData.redirect && (window.location.href = "<?php echo get_permalink($options->checkout_page);?>")
            },
            beforeSend: function() {},
            complete: function() {}
        })
    } else
        jQuery(".add_to_cart_msg").html("Please select Prints and products or Downloads")
}
function onBtnViewCart() {
    var e = jQuery("[name=option_checkout_page]").val();
    jQuery("#bwg_ecommerce_form").attr("action", e),
    jQuery("#bwg_ecommerce_form").submit()
}
function bwg_load_visible_images(e, t, i) {
    0 <= e - t && (startPoint = e - t),
    i < e + t && (endPoint = i);
    for (var a = startPoint; a <= endPoint; a++) {
        var r = jQuery("#bwg_filmstrip_thumbnail_" + a + " img");
        r.removeClass("bwg-hidden"),
        r.attr("src", r.data("url"))
    }
}
function bwg_load_filmstrip() {
    for (var e = 1; e <= total_thumbnail_count; e++) {
        var t;
        if (leftIndex = startPoint - e,
        rightIndex = endPoint + e,
        rightIndex < total_thumbnail_count)
            (t = jQuery("#bwg_filmstrip_thumbnail_" + rightIndex + " img")).removeClass("bwg-hidden"),
            t.attr("src", t.data("url"));
        if (0 <= leftIndex)
            (t = jQuery("#bwg_filmstrip_thumbnail_" + leftIndex + " img")).removeClass("bwg-hidden"),
            t.attr("src", t.data("url"))
    }
    jQuery(".bwg_filmstrip_thumbnail").each(function() {
        var e = jQuery(this).find("img");
        void 0 === e.attr("style") && (0 == e.width() ? e.on("load", function() {
            jQuery(this).find(".bwg_filmstrip_thumbnail_img_wrap"),
            bwg_filmstrip_thumb_view(e)
        }) : (jQuery(this).find(".bwg_filmstrip_thumbnail_img_wrap"),
        bwg_filmstrip_thumb_view(e)))
    })
}
function bwg_filmstrip_thumb_view(e) {
    var t = gallery_box_data.image_filmstrip_height
      , i = gallery_box_data.image_filmstrip_width
      , a = i - gallery_box_data.filmstrip_thumb_right_left_space
      , r = t
      , _ = Math.max(i / e.width(), t / e.height())
      , s = e.width() * _
      , o = e.height() * _;
    e.css({
        width: s,
        height: o,
        marginLeft: (a - s) / 2,
        marginTop: (r - o) / 2
    })
}
function bwg_info_height_set() {
    bwg_info_position(!1),
    jQuery(".mCustomScrollBox").length && jQuery(".bwg_image_info_container1").height() < jQuery(".mCustomScrollBox").height() + jQuery(".bwg_toggle_container").height() + bwg_image_info_pos + 2 * parseInt(gallery_box_data.lightbox_info_margin) && jQuery(".bwg_image_info").css({
        height: jQuery(".bwg_image_info_container1").height() - jQuery(".bwg_toggle_container").height() - bwg_image_info_pos - 2 * parseInt(gallery_box_data.lightbox_info_margin)
    })
}
function bwg_info_position(e) {
    var t = 0
      , i = "none";
    "top" == gallery_box_data.lightbox_ctrl_btn_pos ? "top" == gallery_box_data.lightbox_info_pos && (i = "top") : "bottom" == gallery_box_data.lightbox_info_pos && (i = "bottom"),
    jQuery(".bwg_ctrl_btn_container").hasClass("closed") || ("top" == gallery_box_data.lightbox_ctrl_btn_pos ? "top" == gallery_box_data.lightbox_info_pos && (t = jQuery(".bwg_ctrl_btn_container").height()) : "bottom" == gallery_box_data.lightbox_info_pos && (t = jQuery(".bwg_ctrl_btn_container").height())),
    "top" == i ? 0 == e ? jQuery(".bwg_image_info").css("top", t) : jQuery(".bwg_image_info").animate({
        top: t + "px"
    }, 500) : "bottom" == i && (0 == e ? jQuery(".bwg_image_info").css("bottom", t) : jQuery(".bwg_image_info").animate({
        bottom: t + "px"
    }, 500))
}
function bwg_disable_lightbox_filmstrip_left_arrow(e) {
    "left" == e.left_or_top ? 0 == parseInt(jQuery(".bwg_filmstrip_thumbnails").position().left) && jQuery(".bwg_filmstrip_left").css({
        opacity: .3
    }) : 0 == jQuery(".bwg_filmstrip_thumbnails").position().top && jQuery(".bwg_filmstrip_left").css({
        opacity: .3
    })
}
function bwg_disable_lightbox_filmstrip_right_arrow(e) {
    "left" == e.left_or_top ? "width" == e.width_or_height ? parseInt(jQuery(".bwg_filmstrip_thumbnails").position().left) <= jQuery(".bwg_filmstrip").width() - jQuery(".bwg_filmstrip_thumbnails").width() + e.filmstrip_thumb_right_left_space + e.all_images_right_left_space && jQuery(".bwg_filmstrip_right").css({
        opacity: .3
    }) : jQuery(".bwg_filmstrip_thumbnails").position().left == -(jQuery(".bwg_filmstrip_thumbnails").height() - jQuery(".bwg_filmstrip").height()) && jQuery(".bwg_filmstrip_right").css({
        opacity: .3
    }) : "width" == e.width_or_height ? jQuery(".bwg_filmstrip_thumbnails").position().left == -(jQuery(".bwg_filmstrip_thumbnails").width() - jQuery(".bwg_filmstrip").width()) && jQuery(".bwg_filmstrip_right").css({
        opacity: .3
    }) : parseInt(jQuery(".bwg_filmstrip_thumbnails").position().top) <= jQuery(".bwg_filmstrip").height() - jQuery(".bwg_filmstrip_thumbnails").height() + gallery_box_data.filmstrip_thumb_right_left_space + gallery_box_data.all_images_right_left_space && jQuery(".bwg_filmstrip_right").css({
        opacity: .3
    })
}
function bwg_disable_lightbox_filmstrip_left_right_arrow(e) {
    var t = jQuery(".bwg_filmstrip_thumbnails").position().left
      , i = jQuery(".bwg_filmstrip").width() > jQuery(".bwg_filmstrip_thumbnails").width();
    "top" == e.left_or_top && (t = jQuery(".bwg_filmstrip_thumbnails").position().top,
    i = jQuery(".bwg_filmstrip").height() > jQuery(".bwg_filmstrip_thumbnails").height()),
    jQuery(".bwg_filmstrip_container .bwg_filmstrip_left").css({
        opacity: "1"
    }),
    jQuery(".bwg_filmstrip_container .bwg_filmstrip_right").css({
        opacity: "1"
    }),
    jQuery(".bwg_filmstrip_thumbnails .bwg_filmstrip_thumbnail:first-child").index() != jQuery(".bwg_filmstrip_thumbnails .bwg_filmstrip_thumbnail.bwg_thumb_active").index() && 0 != t || jQuery(".bwg_filmstrip_container .bwg_filmstrip_left").css({
        opacity: "0.3"
    }),
    jQuery(".bwg_filmstrip_thumbnails .bwg_filmstrip_thumbnail:last-child").index() == jQuery(".bwg_filmstrip_thumbnails .bwg_filmstrip_thumbnail.bwg_thumb_active").index() && jQuery(".bwg_filmstrip_container .bwg_filmstrip_right").css({
        opacity: "0.3"
    }),
    jQuery(".bwg_filmstrip").width() > jQuery(".bwg_filmstrip_thumbnails").width() && jQuery(".bwg_filmstrip_container .bwg_filmstrip_left, .bwg_filmstrip_container .bwg_filmstrip_right").css({
        opacity: "0.3"
    }),
    i && jQuery(".bwg_filmstrip_container .bwg_filmstrip_left, .bwg_filmstrip_container .bwg_filmstrip_right").css({
        opacity: "0.3"
    })
}
function spider_display_embed(e, t, i, a) {
    var r = "";
    switch (e) {
    case "EMBED_OEMBED_YOUTUBE_VIDEO":
        var _ = "<iframe ";
        for (attr in "" != i && (_ += ' src="//www.youtube.com/embed/' + i + '?enablejsapi=1&wmode=transparent"'),
        a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (_ += " " + attr + '="' + a[attr] + '"');
        r += _ += " ></iframe>";
        break;
    case "EMBED_OEMBED_VIMEO_VIDEO":
        var s = "<iframe ";
        for (attr in "" != i && (s += ' src="//player.vimeo.com/video/' + i + '?enablejsapi=1"'),
        a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (s += " " + attr + '="' + a[attr] + '"');
        r += s += " ></iframe>";
        break;
    case "EMBED_OEMBED_FLICKR_IMAGE":
        var o = "<div ";
        for (attr in a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (o += " " + attr + '="' + a[attr] + '"');
        o += " >",
        "" != i && (o += '<img src="' + i + '" style="max-width:100% !important; max-height:100% !important; width:auto !important; height:auto !important;">'),
        r += o += "</div>";
        break;
    case "EMBED_OEMBED_FLICKR_VIDEO":
        break;
    case "EMBED_OEMBED_INSTAGRAM_VIDEO":
        var l = "<div ";
        for (attr in a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (l += " " + attr + '="' + a[attr] + '"');
        l += " >",
        "" != t && (l += '<video style="width:auto !important; height:auto !important; max-width:100% !important; max-height:100% !important; margin:0 !important;" controls><source src="' + decodeURIComponent(t) + '" type="video/mp4"> Your browser does not support the video tag. </video>'),
        r += l += "</div>";
        break;
    case "EMBED_OEMBED_INSTAGRAM_IMAGE":
        var n = a["data-max-width"]
          , g = a["data-max-height"];
        l = "<div ";
        for (attr in a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (l += " " + attr + '="' + a[attr] + '"');
        l += " >",
        "" != t && (l += '<img src="' + decodeURIComponent(t) + '" style="max-width:' + n + "px; max-height:" + g + 'px; width: auto; height: auto">'),
        r += l += "</div>";
        break;
    case "EMBED_OEMBED_INSTAGRAM_POST":
        l = "<div ";
        for (attr in a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (l += " " + attr + '="' + a[attr] + '"',
            "CLASS" != attr && "class" != attr && "Class" != attr || (obj_class = a[attr]));
        l += ">",
        "" != t && (l += '<div class="inner_instagram_iframe_' + obj_class + '" style="max-width: 100% !important; max-height: 100% !important; width: 100%; height: 100%; margin:0; vertical-align:middle;">' + atob(t) + "</div>"),
        r += l += "</div>";
        break;
    case "EMBED_OEMBED_FACEBOOK_IMAGE":
        var b = "<span ";
        for (attr in a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (b += " " + attr + '="' + a[attr] + '"');
        b += " >",
        "" != i && (b += '<img src="' + t + '" style=" max-width:100% !important; max-height:100% !important; width:auto; height:100%;">'),
        r += b += "</span>";
        break;
    case "EMBED_OEMBED_FACEBOOK_VIDEO":
        var w = "<div ";
        for (attr in a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (w += " " + attr + '="' + a[attr] + '"');
        w += " >",
        "" != i && (w += '<iframe src="//www.facebook.com/video/embed?video_id=' + t + '&enablejsapi=1&wmode=transparent" style="max-width:100% !important; max-height:100% !important; width:100%; height:100%; margin:0; display:table-cell; vertical-align:middle;"frameborder="0" class="bwg_fb_video" scrolling="no" allowtransparency="false" allowfullscreen></iframe>'),
        r += w += "</div>";
        break;
    case "EMBED_OEMBED_DAILYMOTION_VIDEO":
        var d = "<iframe ";
        for (attr in "" != i && (d += ' src="//www.dailymotion.com/embed/video/' + i + '?api=postMessage"'),
        a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (d += " " + attr + '="' + a[attr] + '"');
        r += d += " ></iframe>";
        break;
    case "EMBED_OEMBED_IMGUR":
        var u = "<div ";
        for (attr in a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (l += " " + attr + '="' + a[attr] + '"');
        u += " >",
        "" != i && (u += '<img src="' + i + '" style="max-width:100% !important; max-height:100% !important; width:auto; height:auto !important;">'),
        r += u += "</div>";
        break;
    case "EMBED_OEMBED_GOOGLE_PHOTO_IMAGE":
        var h = "<div ";
        for (attr in a)
            /src/i.test(attr) || "" != attr && "" != a[attr] && (h += " " + attr + '="' + a[attr] + '"');
        h += " >",
        "" != i && (h += '<img src="' + t + '" style=" max-width:100% !important; max-height:100% !important; width:auto; height:auto;">'),
        r += h += "</div>";
        break;
    default:
        var m = {
            content: ""
        };
        jQuery(document).trigger("bwg_display_embed", [m, e, t, i, a]),
        r = m.content
    }
    return r
}
function bwg_add_instagram_gallery(e, s) {
    if (!0 === (s = void 0 !== s && s)) {
        if (bwg_check_instagram_gallery_input(e, s))
            return !1;
        var t = "0";
        1 == jQuery("input[name=popup_instagram_post_gallery]:checked").val() && (t = "1");
        var i = encodeURI(jQuery("#popup_instagram_gallery_source").val())
          , a = encodeURI(jQuery("#popup_instagram_image_number").val())
    } else {
        if (bwg_check_instagram_gallery_input(e, s))
            return !1;
        if (!bwg_check_gallery_empty(!1, !0))
            return !1;
        t = "0";
        1 == jQuery("input[name=instagram_post_gallery]:checked").val() && (t = "1");
        i = encodeURI(jQuery("#gallery_source").val());
        var r = jQuery("input[name=update_flag]:checked").val();
        a = encodeURI(jQuery("#autogallery_image_number").val())
    }
    jQuery("#bulk_embed").hide(),
    jQuery("#loading_div").show();
    var o = []
      , _ = {
        action: "addInstagramGallery",
        instagram_user: i,
        instagram_access_token: e,
        whole_post: t,
        autogallery_image_number: a,
        update_flag: r,
        async: !0
    };
    jQuery.post(bwg_ajax_url_nonce, _, function(e) {
        if (0 == e)
            return alert("Error: cannot get response from the server."),
            jQuery("#loading_div").hide(),
            s && jQuery("#bulk_embed").show(),
            !1;
        var t = e.indexOf("WD_delimiter_start")
          , i = e.indexOf("WD_delimiter_end");
        if (-1 == t || -1 == i)
            return jQuery("#loading_div").hide(),
            s && jQuery("#bulk_embed").show(),
            !1;
        if (e = e.substring(t + 18, i),
        response_JSON = JSON.parse(e),
        response_JSON) {
            if ("error" == response_JSON[0])
                return alert("Error: " + JSON.parse(e)[1]),
                jQuery("#loading_div").hide(),
                s && jQuery("#bulk_embed").show(),
                !1;
            for (var a = response_JSON.length, r = 1; r <= a; r++)
                if (0 != response_JSON[a - r]) {
                    var _ = response_JSON[a - r];
                    o.push(_)
                }
            return bwg_add_image(o, "instagram"),
            s || (bwg_gallery_update_flag(),
            jQuery("#tr_instagram_gallery_add_button").hide()),
            jQuery("#loading_div").hide(),
            s && jQuery(".opacity_bulk_embed").hide(),
            "ok"
        }
        return alert("There is some error. Cannot add Instagram gallery."),
        jQuery("#loading_div").hide(),
        s && jQuery("#bulk_embed").show(),
        !1
    })
}
var bwg = 0
  , isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())
  , bwg_click = isMobile ? "touchend" : "click"
  , bwg_slideshow_filmstrip_thumbnail_timer = !1;
window.bwg_slideshow_filmstrip_thumb = {};
var bwg_params = []
  , bwg_params_ib = []
  , bwg_params_carousel = [];
function bwg_remove_lazy_loader_icon() {
    1 == bwg_objectsL10n.lazy_load && jQuery("img.bwg_lazyload").Lazy({
        afterLoad: function() {
            jQuery(".lazy_loader").removeClass("lazy_loader")
        },
        onFinishedAll: function() {
            jQuery(".lazy_loader").removeClass("lazy_loader")
        }
    })
}
function bwg_main_ready(e) {
    var t = e.data("bwg");
    1 === e.data("scroll") && (form_id = "gal_front_form_" + t,
    jQuery("html, body").animate({
        scrollTop: jQuery("#" + form_id).offset().top - 150
    }, 500)),
    bwg_remove_lazy_loader_icon(),
    0 < e.find(".wd_error").length && bwg_container_loaded(t);
    var i = e.find(".bwg-container");
    if ("album" === e.data("is-album") && i.hasClass("bwg-thumbnails"))
        var a = "thumbnails";
    else
        a = e.data("gallery-type");
    switch (bwg_document_ready(e),
    a) {
    case "thumbnails":
    case "thumbnails_masonry":
    case "album_compact_preview":
    case "album_masonry_preview":
    case "album_extended_preview":
        bwg_all_thumnails_loaded(i);
        break;
    case "thumbnails_mosaic":
        bwg_thumbnail_mosaic(i);
        break;
    case "slideshow":
        bwg_slideshow_ready(t);
        break;
    case "carousel":
        bwg_carousel_ready(t),
        bwg_carousel_onload(e);
        break;
    case "image_browser":
        bwg_image_browser_ready(e);
        break;
    case "blog_style":
        bwg_blog_style_ready(e)
    }
}
function bwg_resize_search_line() {
    jQuery(".search_line").each(function() {
        var e = jQuery(this);
        e.width() < 410 ? e.addClass("bwg-search-line-responsive") : e.removeClass("bwg-search-line-responsive")
    })
}
function bwg_tags_button_section_visibility() {
    jQuery('div[id^="bwg_container1_"]').each(function() {
        var e = jQuery(this)
          , t = e.find(".current_view").val()
          , i = e.find(".show_bottom_tag").val()
          , a = e.find(".bwg_tags_container_" + t + " .bwg_tag_button_view_container");
        if (a.length)
            var r = a[0].scrollHeight;
        var _ = a.find(".bwg_tags_filter_buttons").outerHeight(!0)
          , s = parseInt(2 * a.find(".bwg_tags_filter_buttons").outerHeight(!0) + 3);
        s < r ? (0 === jQuery(this).find(".see_all_tags.bwg_hide").length && a.css({
            "min-height": _,
            "max-height": s,
            overflow: "hidden"
        }),
        a.next(".bwg_tag_button_see_all").show()) : (a.css({
            "min-height": "auto",
            "max-height": "100%",
            height: "auto",
            overflow: "visible"
        }),
        a.next(".bwg_tag_button_see_all").hide());
        var o = a.next().find(".see_all_tags").width() / 2;
        a.next().find(".see_all_tags").attr("style", "margin-left: -" + o + "px"),
        a.next().find(".see_all_tags").off("click").on("click", function() {
            jQuery(this).hasClass("bwg_show") ? (jQuery(this).removeClass("bwg_show").addClass("bwg_hide").html("<span>&#8722;</span>" + bwg_objectsL10n.bwg_tag_see_less),
            a.css({
                "min-height": "auto",
                "max-height": "100%",
                height: "auto",
                overflow: "visible"
            })) : jQuery(this).hasClass("bwg_hide") && (jQuery(this).removeClass("bwg_hide").addClass("bwg_show").html("<span>&#43;</span>" + bwg_objectsL10n.bwg_tag_see_all),
            a.css({
                "min-height": _,
                "max-height": s,
                overflow: "hidden"
            }))
        }),
        1 == i && (jQuery(this).find(".see_all_tags").removeClass("bwg_show").addClass("bwg_hide").html("<span>&#8722;</span>" + bwg_objectsL10n.bwg_tag_see_less),
        a.css({
            "min-height": "auto",
            "max-height": "100%",
            height: "auto",
            overflow: "visible"
        }))
    })
}
function bwg_slideshow_resize() {
    jQuery(".bwg_slideshow").each(function() {
        bwg = jQuery(this).attr("data-bwg"),
        jQuery("#bwg_slideshow_image_container_" + bwg).length && (bwg_params[bwg] = JSON.parse(jQuery("#bwg_slideshow_image_container_" + bwg).attr("data-params")),
        bwg_params[bwg].event_stack = [],
        bwg_popup_resize(bwg))
    })
}
function bwg_blog_style_resize() {
    jQuery(".bwg_blog_style").each(function() {
        bwg = jQuery(this).attr("data-bwg"),
        jQuery(".bwg_embed_frame_16x9_" + bwg).each(function(e) {
            jQuery(this).width(jQuery(this).parent().width()),
            jQuery(this).height(.5625 * jQuery(this).width())
        }),
        jQuery(".bwg_embed_frame_instapost_" + bwg).each(function(e) {
            jQuery(this).width(jQuery(this).parent().width());
            var t = (jQuery(this).width() - 16) * jQuery(this).attr("data-height") / jQuery(this).attr("data-width") + 96;
            jQuery(this).height(t),
            jQuery(this).find('iframe[id^="instagram-embed-"]').css({
                "max-height": t + "px"
            })
        })
    })
}
function bwg_blog_style_onload() {
    jQuery(".bwg_blog_style").each(function() {
        bwg = jQuery(this).attr("data-bwg");
        jQuery("#bwg_blog_style_" + bwg);
        jQuery(".bwg_embed_frame_16x9_" + bwg).each(function(e) {
            if (jQuery(".bwg_blog_style_image_" + bwg).find(".fluid-width-video-wrapper").length) {
                jQuery(".fluid-width-video-wrapper").removeAttr("style");
                var t = jQuery(this).parents(".bwg_blog_style_image_" + bwg).find(".fluid-width-video-wrapper").contents();
                jQuery(this).parents(".fluid-width-video-wrapper").replaceWith(t)
            }
            jQuery(this).width(jQuery(this).parents(".bwg_blog_style_image_" + bwg).width()),
            jQuery(this).height(.5625 * jQuery(this).width())
        }),
        jQuery(".bwg_embed_frame_instapost_" + bwg).each(function(e) {
            jQuery(this).width(jQuery(this).parents(".bwg_blog_style_image_" + bwg).width());
            var t = (jQuery(this).width() - 16) * jQuery(this).attr("data-height") / jQuery(this).attr("data-width") + 96;
            jQuery(this).height(t),
            jQuery(this).find('iframe[id^="instagram-embed-"]').css({
                "max-height": t + "px"
            })
        }),
        bwg_container_loaded(bwg)
    })
}
function bwg_blog_style_ready(t) {
    var e = t.data("bwg");
    bwg_container_loaded(e),
    "undefined" != typeof instgrm && void 0 !== instgrm.Embeds && instgrm.Embeds.process();
    var i = !1;
    t.find(".bwg_lightbox_" + e).on("click", function() {
        var e = jQuery(this).attr("data-image-id");
        if (jQuery("#bwg_blog_style_share_buttons_" + e).removeAttr("data-open-comment"),
        !i)
            return i = !0,
            setTimeout(function() {
                i = !1
            }, 100),
            bwg_gallery_box(e, t.closest(".bwg_container")),
            !1
    }),
    jQuery(".bwg_lightbox_" + e + " .bwg_ecommerce").on("click", function(e) {
        if (e.stopPropagation(),
        !i)
            return i = !0,
            setTimeout(function() {
                i = !1
            }, 100),
            bwg_gallery_box(t.attr("data-image-id"), t.closest(".bwg_container"), !0),
            !1
    });
    var a = window.location.hash.substring(1);
    a && "-1" != a.indexOf("bwg") && (bwg_hash_array = a.replace("bwg", "").split("/"),
    "<?php echo $params_array['gallery_id']; ?>" == bwg_hash_array[0] && bwg_gallery_box(bwg_hash_array[1]))
}
function bwg_slideshow_focus() {
    jQuery(".bwg_slideshow").each(function() {
        bwg = jQuery(this).data("bwg"),
        jQuery(".bwg_slideshow[data-bwg=" + bwg + "]")[0].offsetHeight && jQuery("#bwg_slideshow_image_container_" + bwg).length && (bwg_params[bwg] = JSON.parse(jQuery("#bwg_slideshow_image_container_" + bwg).attr("data-params")),
        bwg_params[bwg].event_stack = [],
        window.clearInterval(window["bwg_playInterval" + bwg]),
        jQuery(".bwg_ctrl_btn_" + bwg).hasClass("bwg-icon-play") || bwg_play(bwg_params[bwg].data, bwg))
    })
}
function bwg_carousel_focus() {
    jQuery(".bwg_carousel").each(function() {
        bwg = jQuery(this).data("bwg"),
        jQuery(".bwg_carousel[data-bwg=" + bwg + "]")[0].offsetHeight && jQuery(".bwg_carousel_image_container_" + bwg).length && jQuery(".bwg_ctrl_btn_" + bwg).hasClass("bwg-icon-pause") && bwg_params_carousel[bwg].carousel.start()
    })
}
function bwg_slideshow_blur(e) {
    jQuery(".bwg_slideshow").each(function() {
        bwg = jQuery(this).data("bwg"),
        !e && jQuery(".bwg_slideshow[data-bwg=" + bwg + "]")[0].offsetHeight || jQuery("#bwg_slideshow_image_container_" + bwg).length && (bwg_params[bwg] = JSON.parse(jQuery("#bwg_slideshow_image_container_" + bwg).attr("data-params")),
        bwg_params[bwg].event_stack = [],
        window.clearInterval(window["bwg_playInterval" + bwg]))
    })
}
function bwg_carousel_blur(e) {
    jQuery(".bwg_carousel").each(function() {
        bwg = jQuery(this).data("bwg"),
        !e && jQuery(".bwg_carousel[data-bwg=" + bwg + "]")[0].offsetHeight || jQuery(".bwg_carousel_image_container_" + bwg).length && void 0 !== bwg_params_carousel[bwg] && bwg_params_carousel[bwg].carousel.pause()
    })
}
function bwg_carousel_ready(t) {
    if (bwg_params_carousel[t] = [],
    bwg_params_carousel[t].bwg_currentCenterNum = 1,
    bwg_params_carousel[t].bwg_currentlyMoving = !1,
    bwg_params_carousel[t].data = [],
    "undefined" != typeof instgrm && void 0 !== instgrm.Embeds) {
        var e = jQuery(".bwg_embed_frame_" + t)
          , i = e.data("height");
        e.css({
            display: "none"
        }),
        instgrm.Embeds.process(),
        jQuery(".bwg_embed_frame_" + t + " #instagram-embed-" + t).css({
            "max-height": i + "px"
        }),
        e.css({
            display: "inline-block"
        })
    }
    jQuery("#spider_carousel_left-ico_" + t).on("click", function(e) {
        bwg_params_carousel[t].carousel.prev(),
        e.stopPropagation(),
        e.stopImmediatePropagation()
    }),
    jQuery("#spider_carousel_right-ico_" + t).on("click", function(e) {
        bwg_params_carousel[t].carousel.next(),
        e.stopPropagation(),
        e.stopImmediatePropagation()
    }),
    parseInt(bwg_params_carousel[t].carousel_enable_autoplay) && (jQuery(".bwg_carousel_play_pause_" + t).attr("title", bwg_objectsL10n.pause),
    jQuery(".bwg_carousel_play_pause_" + t).attr("class", "bwg-icon-pause bwg_ctrl_btn_" + t + " bwg_carousel_play_pause_" + t)),
    jQuery(".bwg_carousel_play_pause_" + t).on(bwg_click, function(e) {
        jQuery(".bwg_ctrl_btn_" + t).hasClass("bwg-icon-play") ? (jQuery(".bwg_carousel_play_pause_" + t).attr("title", bwg_objectsL10n.pause),
        jQuery(".bwg_carousel_play_pause_" + t).attr("class", "bwg-icon-pause bwg_ctrl_btn_" + t + " bwg_carousel_play_pause_" + t),
        bwg_params_carousel[t].carousel.start()) : (jQuery(".bwg_carousel_play_pause_" + t).attr("title", bwg_objectsL10n.play),
        jQuery(".bwg_carousel_play_pause_" + t).attr("class", "bwg-icon-play bwg_ctrl_btn_" + t + " bwg_carousel_play_pause_" + t),
        bwg_params_carousel[t].carousel.pause()),
        e.stopPropagation(),
        e.stopImmediatePropagation()
    }),
    void 0 !== jQuery().swiperight && jQuery.isFunction(jQuery().swiperight) && jQuery("#bwg_container1_" + t).swiperight(function() {
        bwg_params_carousel[t].carousel.prev()
    }),
    void 0 !== jQuery().swipeleft && jQuery.isFunction(jQuery().swipeleft) && jQuery("#bwg_container1_" + t).swipeleft(function() {
        bwg_params_carousel[t].carousel.next()
    })
}
function bwg_carousel_resize() {
    jQuery(".bwg-carousel").each(function() {
        var e = jQuery(this).data("bwg");
        jQuery(".bwg_carousel-container" + e).length && (bwg_carousel_params(e, !0),
        bwg_params_carousel[e].carousel.pause(),
        bwg_carousel_watermark(e),
        jQuery(".bwg_ctrl_btn_" + e).hasClass("bwg-icon-play") || bwg_params_carousel[e].carousel.start())
    })
}
function bwg_carousel_onload(e) {
    var t = e.data("bwg")
      , i = e.find(".bwg_carousel-container" + t);
    i.length && (bwg_params_carousel[t] = i.data("params"),
    bwg_params_carousel[t].parent_width = 0,
    bwg_carousel_watermark(t),
    bwg_carousel_params(t, !1),
    bwg_container_loaded(t))
}
function bwg_carousel_params(t, e) {
    var i = jQuery("#bwg_container1_" + t).parent();
    i.hasClass("elementor-tab-content") && i.width(i.closest(".elementor-widget-wrap").width());
    var a = i.width()
      , r = 1;
    a < bwg_params_carousel[t].carousel_r_width ? r = a / bwg_params_carousel[t].carousel_r_width : a = bwg_params_carousel[t].carousel_r_width,
    bwg_params_carousel[t].parent_width != a && (bwg_params_carousel[t].parent_width = a,
    bwg_params_carousel[t].carousel_image_column_number > bwg_params_carousel[t].count && (bwg_params_carousel[t].carousel_image_column_number = bwg_params_carousel[t].count),
    jQuery(".bwg_carousel_play_pause_" + t).css({
        display: parseInt(bwg_params_carousel[t].carousel_play_pause_butt) ? "" : "none"
    }),
    parseInt(bwg_params_carousel[t].carousel_prev_next_butt) ? (jQuery("#bwg_carousel-right" + t).css({
        display: ""
    }),
    jQuery("#bwg_carousel-left" + t).css({
        display: ""
    })) : (jQuery("#bwg_carousel-left" + t).css({
        display: "none"
    }),
    jQuery("#bwg_carousel-right" + t).css({
        display: "none"
    })),
    jQuery(".inner_instagram_iframe_bwg_embed_frame_" + t).each(function() {
        var e = jQuery(this).parent();
        bwg_params_carousel[t].image_height / (parseInt(e.attr("data-height")) + 96) < bwg_params_carousel[t].image_width / parseInt(e.attr("data-width")) ? (e.height(bwg_params_carousel[t].image_height * r),
        e.width((e.height() - 96) * e.attr("data-width") / e.attr("data-height") + 16)) : (e.width(bwg_params_carousel[t].image_width * r),
        e.height((e.width() - 16) * e.attr("data-height") / e.attr("data-width") + 96))
    }),
    jQuery(".bwg_carousel_image_container_" + t).css({
        width: bwg_params_carousel[t].image_width * r,
        height: bwg_params_carousel[t].image_height * r
    }),
    jQuery(".bwg_carousel_watermark_text_" + t + ", .bwg_carousel_watermark_text_" + t + ":hover").css({
        fontSize: a * (bwg_params_carousel[t].watermark_font_size / bwg_params_carousel[t].image_width) * r
    }),
    jQuery(".bwg_carousel-image " + t).css({
        width: bwg_params_carousel[t].image_width * r,
        height: bwg_params_carousel[t].image_height * r
    }),
    jQuery(".bwg_carousel_watermark_container_" + t).css({
        width: bwg_params_carousel[t].image_width * r,
        height: bwg_params_carousel[t].image_height * r
    }),
    jQuery(".bwg_carousel_embed_video_" + t).css({
        width: bwg_params_carousel[t].image_width * r,
        height: bwg_params_carousel[t].image_height * r
    }),
    jQuery(".bwg_carousel_watermark_spun_" + t).css({
        width: bwg_params_carousel[t].image_width * r,
        height: bwg_params_carousel[t].image_height * r
    }),
    jQuery(".bwg_carousel-container" + t).css({
        width: a,
        height: bwg_params_carousel[t].image_height * r
    }),
    jQuery(".bwg_video_hide" + t).css({
        width: bwg_params_carousel[t].image_width * r,
        height: bwg_params_carousel[t].image_height * r
    }),
    bwg_params_carousel[t].carousel && !e || (e && bwg_params_carousel[t].carousel && bwg_params_carousel[t].carousel.pause(),
    bwg_params_carousel[t].carousel = jQuery("#bwg_carousel" + t).featureCarousel({
        containerWidth: a * r,
        containerHeight: bwg_params_carousel[t].image_height * r,
        fit_containerWidth: bwg_params_carousel[t].carousel_fit_containerWidth,
        largeFeatureWidth: bwg_params_carousel[t].image_width * r,
        largeFeatureHeight: bwg_params_carousel[t].image_height * r,
        smallFeaturePar: bwg_params_carousel[t].carousel_image_par,
        currentlyMoving: !1,
        startingFeature: bwg_params_carousel[t].bwg_currentCenterNum,
        featuresArray: [],
        timeoutVar: null,
        rotationsRemaining: 0,
        autoPlay: 1e3 * bwg_params_carousel[t].car_inter,
        interval: 1e3 * bwg_params_carousel[t].carousel_interval,
        imagecount: bwg_params_carousel[t].carousel_image_column_number,
        bwg_number: t,
        enable_image_title: bwg_params_carousel[t].enable_image_title,
        borderWidth: 0
    })))
}
function bwg_carousel_watermark(e) {
    var t = 1
      , i = jQuery("#bwg_container1_" + e).parent().width();
    if (i < bwg_params_carousel[e].carousel_r_width && (t = i / bwg_params_carousel[e].carousel_r_width),
    i >= bwg_params_carousel[e].image_width)
        bwg_carousel_change_watermark_container(e),
        jQuery("#bwg_carousel_play_pause-ico_" + e).css({
            fontSize: bwg_params_carousel[e].carousel_play_pause_btn_size
        }),
        jQuery(".bwg_carousel_watermark_image_" + e).css({
            maxWidth: bwg_params_carousel[e].watermark_width * t,
            maxHeight: bwg_params_carousel[e].watermark_height * t
        }),
        jQuery(".bwg_carousel_watermark_text_" + e + ", .bwg_carousel_watermark_text_" + e + ":hover").css({
            fontSize: t * bwg_params_carousel[e].watermark_font_size
        });
    else {
        var a = bwg_params_carousel[e].image_width / t;
        bwg_carousel_change_watermark_container(e),
        jQuery(".bwg_carousel_watermark_image_" + e).css({
            maxWidth: i * bwg_params_carousel[e].watermark_width / a,
            maxHeight: i * bwg_params_carousel[e].watermark_height / a
        }),
        jQuery(".bwg_carousel_watermark_text_" + e + ", .bwg_carousel_watermark_text_" + e + ":hover").css({
            fontSize: i * bwg_params_carousel[e].watermark_font_size / a
        })
    }
}
function bwg_carousel_change_watermark_container(a) {
    jQuery(".bwg_carousel" + a).children().each(function() {
        if (2 == jQuery(this).css("zIndex")) {
            var e = jQuery(this).find("img");
            e.length || (e = jQuery(this).find("iframe"));
            var t = e.width()
              , i = e.height();
            jQuery(".bwg_carousel_watermark_spun_" + a).width(t),
            jQuery(".bwg_carousel_watermark_spun_" + a).height(i),
            jQuery(".bwg_carousel_title_spun_" + a).width(t),
            jQuery(".bwg_carouel_title_spun_" + a).height(i),
            jQuery(".bwg_carousel_watermark_" + a).css({
                display: "none"
            })
        }
    })
}
function bwg_carousel_preload(e, t) {
    var i = jQuery(".bwg_carousel_preload").get();
    t || i.reverse();
    var a = 0;
    jQuery(i).each(function() {
        if (1 < ++a)
            return !1;
        jQuery(this).parent().hasClass("bwg_carousel_embed_video_" + e) || jQuery(this).parent().hasClass("bwg_embed_frame_" + e) || jQuery(this).parent().hasClass("bwg_carousel_video") ? (jQuery(this).attr("src", jQuery(this).attr("data-src")),
        jQuery(this).on("load", function() {
            jQuery(this).removeClass("bwg_carousel_preload")
        }),
        jQuery(this).parent().hasClass("bwg_carousel_video") && (jQuery(".bwg_carousel_video")[0].load(),
        jQuery(this).parent().parent().removeClass("bwg_carousel_preload")),
        jQuery(this).removeAttr("data-src")) : (jQuery(this).css({
            "background-image": "url('" + jQuery(this).attr("data-background") + "')",
            height: "100%"
        }),
        jQuery(this).removeClass("bwg_carousel_preload"),
        jQuery(this).removeAttr("data-background"))
    })
}
function bwg_slideshow_ready(r) {
    if (jQuery("#bwg_slideshow_image_container_" + r).length) {
        bwg_params[r] = JSON.parse(jQuery("#bwg_slideshow_image_container_" + r).attr("data-params")),
        bwg_params[r].event_stack = [];
        var e = ".bwg_slideshow_filmstrip_" + r
          , t = "bwg_slideshow_filmstrip_thumbnail_" + r;
        bwg_slideshow_filmstrip_thumb[t] = {},
        bwg_slideshow_filmstrip_thumb[t].next_prev_index = 0;
        var i = !1;
        2 == bwg_params[r].slideshow_filmstrip_type && (i = !0,
        e = ".bwg_slideshow_filmstrip_fix_count_" + r),
        bwg_container_loaded(r);
        var a = bwg_params[r].data;
        void 0 !== jQuery().swiperight && jQuery.isFunction(jQuery().swiperight) && jQuery("#bwg_container1_" + r).swiperight(function() {
            return bwg_change_image(parseInt(jQuery("#bwg_current_image_key_" + r).val()), 0 <= parseInt(jQuery("#bwg_current_image_key_" + r).val()) - bwg_iterator(r) ? (parseInt(jQuery("#bwg_current_image_key_" + r).val()) - bwg_iterator(r)) % a.length : a.length - 1, a, "", r),
            !1
        }),
        void 0 !== jQuery().swipeleft && jQuery.isFunction(jQuery().swipeleft) && jQuery("#bwg_container1_" + r).swipeleft(function() {
            return bwg_change_image(parseInt(jQuery("#bwg_current_image_key_" + r).val()), parseInt(jQuery("#bwg_current_image_key_" + r).val()) + bwg_iterator(r) % a.length, a, "", r),
            !1
        });
        var _ = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) ? "touchend" : "click";
        bwg_popup_resize(r),
        jQuery(".bwg_slideshow_watermark_" + r).css({
            display: "none"
        }),
        jQuery(".bwg_slideshow_title_text_" + r).css({
            display: "none"
        }),
        jQuery(".bwg_slideshow_description_text_" + r).css({
            display: "none"
        }),
        setTimeout(function() {
            bwg_change_watermark_container(r)
        }, 500),
        1 == bwg_params[r].slideshow_filmstrip_type && ("horizontal" == bwg_params[r].filmstrip_direction ? jQuery(".bwg_slideshow_image_container_" + r).height(jQuery(".bwg_slideshow_image_wrap_" + r).height() - bwg_params[r].slideshow_filmstrip_height) : jQuery(".bwg_slideshow_image_container_" + r).width(jQuery(".bwg_slideshow_image_wrap_" + r).width() - bwg_params[r].slideshow_filmstrip_width));
        var s = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
        jQuery(e).bind(s, function(e) {
            var t = window.event || e;
            return 0 < ((t = t.originalEvent ? t.originalEvent : t).detail ? -40 * t.detail : t.wheelDelta) ? jQuery(".bwg_slideshow_filmstrip_left_" + r).trigger("click") : jQuery(".bwg_slideshow_filmstrip_right_" + r).trigger("click"),
            !1
        });
        var o = {
            bwg: r,
            params: bwg_params[r],
            slideshow_filmstrip_class_name: e
        };
        if (jQuery(".bwg_slideshow_filmstrip_right_" + r).on(_, function() {
            1 == i ? !1 === bwg_slideshow_filmstrip_thumbnail_timer && (bwg_slideshow_filmstrip_thumbnail_timer = !0,
            bwg_slideshow_filmstrip_next(o),
            setTimeout(function() {
                bwg_slideshow_filmstrip_thumbnail_timer = !1
            }, 505)) : bwg_slideshow_filmstrip_next(o)
        }),
        jQuery(".bwg_slideshow_filmstrip_left_" + r).on(_, function() {
            1 == i ? !1 === bwg_slideshow_filmstrip_thumbnail_timer && (bwg_slideshow_filmstrip_thumbnail_timer = !0,
            bwg_slideshow_filmstrip_prev(o),
            setTimeout(function() {
                bwg_slideshow_filmstrip_thumbnail_timer = !1
            }, 505)) : bwg_slideshow_filmstrip_prev(o)
        }),
        "width" == bwg_params[r].width_or_height ? bwg_set_filmstrip_pos(jQuery(e).width(), r) : bwg_set_filmstrip_pos(jQuery(e).height(), r),
        jQuery("#bwg_slideshow_play_pause_" + r).off(_).on(_, function() {
            jQuery(".bwg_ctrl_btn_" + r).hasClass("bwg-icon-play") ? (bwg_play(bwg_params[r].data, r),
            jQuery(".bwg_slideshow_play_pause_" + r).attr("title", bwg_objectsL10n.pause),
            jQuery(".bwg_slideshow_play_pause_" + r).attr("class", "bwg-icon-pause bwg_ctrl_btn_" + r + " bwg_slideshow_play_pause_" + r),
            1 == bwg_params[r].enable_slideshow_music && document.getElementById("bwg_audio_" + r).play()) : (window.clearInterval(window["bwg_playInterval" + r]),
            jQuery(".bwg_slideshow_play_pause_" + r).attr("title", "Play"),
            jQuery(".bwg_slideshow_play_pause_" + r).attr("class", "bwg-icon-play bwg_ctrl_btn_" + r + " bwg_slideshow_play_pause_" + r),
            1 == bwg_params[r].enable_slideshow_music && document.getElementById("bwg_audio_" + r).pause())
        }),
        0 != bwg_params[r].enable_slideshow_autoplay && (bwg_play(bwg_params[r].data, r),
        jQuery(".bwg_slideshow_play_pause_" + r).attr("title", bwg_objectsL10n.pause),
        jQuery(".bwg_slideshow_play_pause_" + r).attr("class", "bwg-icon-pause bwg_ctrl_btn_" + r + " bwg_slideshow_play_pause_" + r),
        1 == bwg_params[r].enable_slideshow_music && jQuery("#bwg_audio_" + r).length && document.getElementById("bwg_audio_" + r).play()),
        bwg_params[r].preload_images && bwg_preload_images(parseInt(jQuery("#bwg_current_image_key_".$bwg).val()), r),
        jQuery(".bwg_slideshow_image_" + r).removeAttr("width"),
        jQuery(".bwg_slideshow_image_" + r).removeAttr("height"),
        jQuery("#instagram-embed-" + r).hide(),
        "undefined" != typeof instgrm && void 0 !== instgrm.Embeds) {
            var l = jQuery(".bwg_embed_frame_" + r)
              , n = l.data("height");
            l.css({
                display: "none"
            }),
            instgrm.Embeds.process(),
            jQuery(".bwg_embed_frame_" + r + " #instagram-embed-" + r).css({
                "max-height": n + "px"
            }),
            l.css({
                display: "inline-block"
            })
        }
        if (0 < jQuery(".elementor-editor-active .bwg_embed_frame_" + r).length) {
            !function e() {
                var t = jQuery(document).find(".bwg_embed_frame_" + r + " iframe");
                if (0 < t.length) {
                    var i = jQuery(".bwg_embed_frame_" + r)
                      , a = i.data("height");
                    return void t.css({
                        "max-height": a + "px"
                    })
                }
                window.setTimeout(e, 500)
            }()
        }
    }
}
function bwg_image_browser_resize() {
    jQuery(".bwg_image_browser").each(function() {
        var e = jQuery(this).attr("data-bwg");
        jQuery(".image_browser_images_conteiner_" + e).length && (bwg_params_ib[e] = JSON.parse(jQuery("#bwg_container1_" + e + " .image_browser_images_conteiner_" + e).attr("data-params")),
        bwg_image_browser(e))
    })
}
function bwg_image_browser_ready(e) {
    var t = e.data("bwg");
    bwg_container_loaded(t),
    "undefined" != typeof instgrm && void 0 !== instgrm.Embeds && instgrm.Embeds.process(),
    jQuery(".image_browser_images_conteiner_" + t).length && (bwg_params_ib[t] = JSON.parse(jQuery(".image_browser_images_conteiner_" + t).attr("data-params")),
    setTimeout(function() {
        bwg_image_browser(t)
    }, 3))
}
function bwg_search_focus(e) {
    jQuery(e).parent().find(".bwg_search_input").focus(),
    jQuery(e).hide()
}
function bwg_key_press(e) {
    jQuery(e).parent().find(".bwg_search_reset_container").removeClass("bwg-hidden"),
    jQuery(e).parent().find(".bwg_search_loupe_container1").removeClass("bwg-hidden")
}
function bwg_all_thumnails_loaded(t) {
    var i = 0
      , a = jQuery(t).find("img").length;
    return 0 == a ? bwg_all_thumbnails_loaded_callback(t) : jQuery(t).find("img").each(function() {
        var e = jQuery(this).attr("src");
        jQuery("<img/>").attr("src", e).on("load error", function() {
            ++i >= a && bwg_all_thumbnails_loaded_callback(t)
        })
    }),
    jQuery(".bwg_container").each(function() {
        var e = jQuery(this).data("bwg");
        0 < jQuery(this).find(".wd_error").length && bwg_container_loaded(e)
    }),
    0 == a
}
function bwg_all_thumbnails_loaded_callback(e) {
    jQuery(e).hasClass("bwg-thumbnails") && !jQuery(e).hasClass("bwg-masonry-thumbnails") && bwg_thumbnail(e),
    jQuery(e).hasClass("bwg-masonry-thumbnails") && bwg_thumbnail_masonry(e),
    jQuery(e).hasClass("bwg-album-extended") && bwg_album_extended(e)
}
function bwg_album_thumbnail(e) {
    bwg_container_loaded(jQuery(e).data("bwg"))
}
function bwg_album_extended(e) {
    var t = jQuery(e).width()
      , i = jQuery(e).data("thumbnail-width")
      , a = jQuery(e).data("spacing")
      , r = jQuery(e).data("max-count")
      , _ = parseInt(t / (2 * i));
    _ < 1 && (_ = 1),
    r < _ && (_ = r);
    var s = 100 / _
      , o = jQuery(e).find(".bwg-extended-item")
      , l = parseInt(o.css("margin-left"))
      , n = parseInt(o.css("margin-right"));
    o.css({
        width: "calc(" + s + "% - " + (l + n) + "px)"
    }),
    o.width() < i ? o.find(".bwg-extended-item0, .bwg-extended-item1").css({
        width: "calc(100% - " + a + "px)"
    }) : o.width() > 2 * i ? (o.find(".bwg-extended-item0").css({
        width: "calc(50% - " + a + "px)"
    }),
    o.find(".bwg-extended-item1").css({
        width: "calc(100% - " + (i + 2 * a) + "px)"
    })) : o.find(".bwg-extended-item0, .bwg-extended-item1").css({
        width: "calc(50% - " + a + "px)"
    }),
    jQuery(e).children(".bwg-extended-item").each(function() {
        var e = jQuery(this).find("img")
          , t = jQuery(this).find(".bwg-item0")
          , i = jQuery(this).find(".bwg-item2")
          , a = e.data("width")
          , r = e.data("height");
        "" != a && "" != r || (a = e.width(),
        r = e.height());
        var _ = a / r;
        i.width() / i.height() > a / r ? (i.width() > a ? e.css({
            width: "100%",
            height: i.width() / _
        }) : e.css({
            maxWidth: "100%",
            height: i.width() / _
        }),
        a = i.width(),
        r = i.width() / _) : (i.height() > r ? e.css({
            height: "100%",
            width: i.height() * _,
            maxWidth: "initial"
        }) : e.css({
            maxHeight: "100%",
            width: i.height() * _,
            maxWidth: "initial"
        }),
        r = i.height(),
        a = i.height() * _),
        jQuery(this).find(".bwg-item2").css({
            marginLeft: (t.width() - a) / 2,
            marginTop: (t.height() - r) / 2
        })
    }),
    bwg_container_loaded(jQuery(e).data("bwg"))
}
function bwg_thumbnail(e) {
    var t = jQuery(e).width()
      , i = jQuery(e).data("thumbnail-width")
      , a = jQuery(e).data("max-count")
      , r = parseInt(t / i) + 1;
    a < r && (r = a);
    var _ = 100 / r;
    jQuery(e).find(".bwg-item").css({
        width: _ + "%"
    }),
    jQuery(e).children(".bwg-item").each(function() {
        var e = jQuery(this).find("img")
          , t = jQuery(this).find(".bwg-item2")
          , i = jQuery(this).find(".bwg-item1")
          , a = 0 < t.width() ? t.width() : i.width()
          , r = 0 < t.height() ? t.height() : i.height()
          , _ = e.data("width")
          , s = e.data("height");
        "" != _ && "" != s && void 0 !== _ && void 0 !== s || (_ = e.width(),
        s = e.height());
        var o = _ / s;
        e.removeAttr("style"),
        o < a / r ? (_ < a ? e.css({
            width: "100%",
            height: a / o
        }) : e.css({
            maxWidth: "100%",
            height: Math.ceil(a / o)
        }),
        s = (_ = a) / o) : (r > e.height() ? e.css({
            height: "100%",
            width: r * o,
            maxWidth: "initial"
        }) : e.css({
            maxHeight: "100%",
            width: r * o,
            maxWidth: "initial"
        }),
        _ = (s = r) * o),
        jQuery(this).find(".bwg-item2").css({
            marginLeft: (a - _) / 2,
            marginTop: (r - s) / 2
        })
    }),
    bwg_container_loaded(jQuery(e).data("bwg"))
}
function bwg_thumbnail_masonry(e) {
    var t = "#bwg_thumbnails_masonry_" + (bwg = jQuery(e).attr("data-bwg"));
    jQuery("#bwg_album_masonry_" + bwg).length && (t = "#bwg_album_masonry_" + bwg),
    0 === jQuery(".bwg-container-temp" + bwg).length && (jQuery(t).clone().appendTo("#bwg_container3_" + bwg).removeAttr("id").removeClass("bwg-container-" + bwg).addClass("bwg-container-temp" + bwg),
    jQuery(".bwg-container-temp" + bwg).empty());
    var a = jQuery(".bwg-container-temp" + bwg)
      , r = jQuery(t)
      , _ = a;
    if (a.prepend(r.html()),
    _.find(".bwg-empty-item").remove(),
    "horizontal" == _.data("masonry-type")) {
        var s = _.data("thumbnail-height")
          , o = _.data("max-count")
          , l = [];
        for (i = 0; i < o; i++)
            l.push(0);
        _.find(".bwg-item").each(function() {
            var e = l.indexOf(Math.min.apply(Math, l));
            jQuery(this).css({
                height: s,
                order: e + 1
            }),
            l[e] += jQuery(this)[0].getBoundingClientRect().width
        });
        var n = Math.max.apply(Math, l);
        for (_.width(n),
        i = 0; i < o; i++)
            l[i] < n && _.append(jQuery('<div class="bwg-item bwg-empty-item"></div>').css({
                height: s,
                order: i + 1,
                width: n - l[i]
            }))
    } else {
        _.removeAttr("style");
        n = _.width();
        var g = _.data("thumbnail-width")
          , b = _.data("thumbnail-border")
          , w = (_.data("thumbnail-padding"),
        o = _.data("max-count"),
        parseInt(n / g) + ("0" == _.data("resizable-thumbnails") ? 0 : 1));
        o < w && (w = o);
        var d = _.find(".bwg-item").length;
        d < w && (w = d);
        var u, h, m = 100 / w, c = [];
        for (i = 0; i < w; i++)
            c.push(0);
        _.find(".bwg-item").each(function() {
            var e = c.indexOf(Math.min.apply(Math, c))
              , t = jQuery(this).find("img");
            if (jQuery(this).css({
                width: m + "%",
                order: e + 1
            }),
            void 0 !== t.data("src") && -1 === t.data("src").indexOf("svg") && 0 < t.attr("data-width").length && 0 < t.attr("data-height").length) {
                h = parseInt(t.data("width")) / parseInt(t.data("height")),
                u = t.width() / h;
                var i = (this.querySelector("a .bwg-zoom-effect-overlay .bwg-title2") || !this.querySelector("a .bwg-title1 .bwg-title2") ? 0 : this.querySelector("a .bwg-title1 .bwg-title2").getClientRects()[0].height) + (0 < jQuery(this).find(".bwg-masonry-thumb-description").length ? jQuery(this).find(".bwg-masonry-thumb-description").height() : 0);
                jQuery(this).height(Math.floor(u + i + 2 * b))
            }
            c[e] += jQuery(this)[0].getBoundingClientRect().height
        });
        var p = Math.max.apply(Math, c);
        for (i = 0; i < w; i++)
            c[i] < p && _.append(jQuery('<div class="bwg-item bwg-empty-item"></div>').css({
                width: m + "%",
                order: i + 1,
                height: p - c[i]
            }));
        _.outerWidth(w * (g + 2 * b)),
        _.height(p)
    }
    if ("" != a.html()) {
        r.outerWidth(w * (g + 2 * b)),
        "0" != p ? (r.css("opacity", "1"),
        r.height(p)) : r.css("opacity", "0"),
        r.empty();
        var y = a.html();
        r.append(y),
        r.find(".bwg_lazyload").each(function() {
            null != jQuery(this).data("src") && "" != jQuery(this).data("src") && (jQuery(this).attr("src", jQuery(this).data("src")),
            jQuery(this).on("load", function() {
                jQuery(this).removeClass("lazy_loader")
            }))
        }),
        a.empty().hide()
    }
    bwg_container_loaded(_.data("bwg"))
}
function bwg_container_loaded(e) {
    jQuery("#gal_front_form_" + e).removeClass("bwg-hidden"),
    jQuery("#ajax_loading_" + e).addClass("bwg-hidden"),
    jQuery(".bwg_container img").removeAttr("width").removeAttr("height")
}
function bwg_thumbnail_mosaic_logic(e) {
    var t = e.attr("data-bwg")
      , i = e.attr("data-block-id")
      , a = parseInt(e.attr("data-thumb-padding")) / 2
      , _ = parseInt(e.attr("data-thumb-border")) + a;
    if ("horizontal" == e.attr("data-mosaic-direction")) {
        var r = parseInt(e.attr("data-height"));
        if ("1" == e.attr("data-resizable"))
            if (1920 <= jQuery(window).width())
                var s = (1 + jQuery(window).width() / 1920) * r;
            else if (jQuery(window).width() <= 640)
                s = jQuery(window).width() / 640 * r;
            else
                s = r;
        else
            s = r;
        (p = jQuery(".bwg_mosaic_thumb_" + t)).each(function(e) {
            var t = jQuery(this).data("width")
              , i = jQuery(this).data("height");
            "" != t && "" != i && void 0 !== t && void 0 !== i || (t = p.get(e).naturalWidth,
            i = p.get(e).naturalHeight),
            t = t * s / i,
            p.eq(e).css({
                cssText: "width:" + t + "px !important; height:" + s + "px !important;"
            })
        });
        var o = jQuery("#bwg_mosaic_thumbnails_div_" + t).width() / 100 * parseInt(e.attr("data-total-width"));
        jQuery("#" + i).width(o);
        var l = s + 2 * _
          , n = 0
          , g = [];
        g[0] = 0;
        var b = []
          , w = b[0] = 0;
        p.each(function(e) {
            row_cum_width2 = w + p.eq(e).width() + 2 * _,
            row_cum_width2 - o < 0 ? (w = row_cum_width2,
            g[e] = n,
            b[n]++) : e !== p.length - 1 ? Math.abs(w - o) > Math.abs(row_cum_width2 - o) || Math.abs(w - o) <= Math.abs(row_cum_width2 - o) && 0 == b[n] ? e !== p.length - 2 ? (w = row_cum_width2,
            g[e] = n,
            b[n]++,
            b[++n] = 0,
            w = 0) : (w = row_cum_width2,
            g[e] = n,
            b[n]++) : (b[++n] = 1,
            g[e] = n,
            w = row_cum_width2 - w) : (w = row_cum_width2,
            g[e] = n,
            b[n]++)
        });
        for (var d = [], u = [], h = 0; h <= n; h++)
            w = 0,
            p.each(function(e) {
                g[e] == h && (w += p.eq(e).width())
            }),
            d[h] = C = (o - 2 * b[h] * _) / w,
            u[h] = (l - 2 * _) * d[h] + 2 * _;
        if (0 == n)
            for (h = 0; h <= n; h++)
                u[h] > s && (d[h] = 1,
                u[h] = l);
        (T = [])[0] = 0;
        var m = []
          , c = [];
        m[0] = 0,
        c[0] = 0;
        for (h = 1; h <= n; h++)
            m[h] = m[0],
            c[h] = c[h - 1] + u[h - 1];
        p.each(function(e) {
            var t = p.eq(e).width()
              , i = p.eq(e).height()
              , a = t * d[g[e]]
              , r = i * d[g[e]];
            p.eq(e).css({
                cssText: "width:" + a + "px !important; height:" + r + "px !important;"
            }),
            p.eq(e).parent().css({
                top: c[g[e]],
                left: m[g[e]]
            }),
            m[g[e]] += t * d[g[e]] + 2 * _,
            T[g[e]] = e
        }),
        jQuery("#" + i).height(c[n] + u[n] - c[0])
    } else {
        var p, y = parseInt(e.attr("data-width"));
        if ("1" == e.attr("data-resizable")) {
            if (1920 <= jQuery(window).width())
                var f = (1 + jQuery(window).width() / 1920) * y;
            else if (jQuery(window).width() <= 640)
                f = jQuery(window).width() / 640 * y;
            else
                f = y;
            if (0 < jQuery(".header-content-with_tab").length)
                f = jQuery(".header-content-with_tab").width() / 4 - 10
        } else {
            f = y;
            var j = jQuery(".bwg_container").width();
            void 0 !== j && j < y && (f = j)
        }
        (p = jQuery(".bwg_mosaic_thumb_" + t)).each(function(e) {
            jQuery(this).removeAttr("style"),
            jQuery(this).parent().removeAttr("style");
            var t = jQuery(this).data("width")
              , i = jQuery(this).data("height");
            "" != t && "" != i && void 0 !== t && void 0 !== i || (t = p.get(e).naturalWidth,
            0 !== (i = p.get(e).naturalHeight) && "" !== i || (i = f),
            0 !== t && "" !== t || (t = f)),
            p.eq(e).css({
                cssText: "width:" + f + "px !important; height:" + i * f / t + "px !important;"
            })
        });
        o = jQuery("#bwg_mosaic_thumbnails_div_" + t).width() / 100 * parseInt(e.attr("data-total-width"));
        jQuery("#" + i).width(o);
        var Q = f + 2 * _ < o ? f : o - 2 * _
          , v = Math.min(Math.floor(o / (Q + 2 * _)), p.length)
          , x = [];
        x[0] = 0;
        for (var k = [], z = [], C = 0; C < v; C++)
            z[C] = 0,
            k[C] = 0;
        p.each(function(e) {
            for (var t = 0, i = z[0], a = 0; a < v; a++)
                i > z[a] && (i = z[a],
                t = a);
            x[e] = t,
            k[t]++,
            A = i,
            H = 0 + t * (Q + 2 * _),
            p.eq(e).parent().css({
                top: A,
                left: H
            }),
            z[t] += p.eq(e).height() + 2 * _
        }),
        (d = [])[0] = 1;
        var I = 0
          , E = []
          , M = 0
          , S = 0;
        for (C = 0; C < v; C++)
            I += Q,
            E[C] = 0,
            p.each(function(e) {
                x[e] == C && (E[C] += p.eq(e).height())
            }),
            0 != E[C] && (M += Q / E[C],
            S += Q * k[C] * 2 * _ / E[C]);
        var O = 0;
        0 != M && (O = (I + S) / M);
        for (C = 0; C < v; C++)
            0 != E[C] && (d[C] = (O - 2 * k[C] * _) / E[C]);
        var T, H = [];
        H[0] = 0;
        for (C = 1; C <= v; C++)
            H[C] = H[C - 1] + Q * d[C - 1] + 2 * _;
        var A = [];
        for (C = 0; C < v; C++)
            A[C] = 0;
        (T = [])[0] = 0,
        p.each(function(e) {
            var t = p.eq(e).width()
              , i = p.eq(e).height()
              , a = t * d[x[e]]
              , r = i * d[x[e]];
            p.eq(e).css({
                cssText: "width:" + a + "px !important; height:" + r + "px !important;"
            }),
            p.eq(e).parent().css({
                top: A[x[e]],
                left: H[x[e]]
            }),
            A[x[e]] += i * d[x[e]] + 2 * _,
            T[x[e]] = e
        }),
        jQuery("#" + i).width(H[v]).height(A[0])
    }
}
function bwg_thumbnail_mosaic(e) {
    var t = jQuery(e)
      , i = jQuery.Deferred();
    if (i.done([bwg_thumbnail_mosaic_logic]).done(function(e) {
        "1" != e.data("mosaic-thumb-transition") && jQuery(".bwg_mosaic_thumb_spun_" + t).css({
            transition: "all 0.3s ease 0s",
            "-webkit-transition": "all 0.3s ease 0s"
        });
        var t = e.data("bwg");
        jQuery(".bwg_mosaic_thumbnails_" + t).css({
            visibility: "visible"
        }),
        jQuery(".tablenav-pages_" + t).css({
            visibility: "visible"
        }),
        bwg_container_loaded(t),
        jQuery(".bwg_mosaic_thumb_" + t).removeClass("bwg-hidden"),
        jQuery("#bwg_mosaic_thumbnails_div_" + t).removeClass("bwg-hidden")
    }),
    i.resolve(t),
    "hover" == t.attr("data-image-title")) {
        var a = parseInt(t.attr("data-thumb-padding")) / 2
          , r = parseInt(t.attr("data-thumb-border")) + a;
        bwg_mosaic_title_on_hover(t.data("bwg"), t, r)
    }
    "hover" == t.attr("data-ecommerce-icon") && (jQuery(".bwg_mosaic_thumb_spun_" + bwg).on("mouseenter", function() {
        var e = jQuery(this).parents(".bwg-mosaic-thumb-span").children(".bwg_mosaic_thumb_" + bwg).width()
          , t = jQuery(this).parents(".bwg-mosaic-thumb-span").children(".bwg_mosaic_thumb_" + bwg).height();
        jQuery(this).children(".bwg_ecommerce_spun1_" + bwg).width(e);
        var i = jQuery(this).children(".bwg_ecommerce_spun1_" + bwg).width()
          , a = jQuery(this).children(".bwg_ecommerce_spun1_" + bwg).height();
        jQuery(this).children(".bwg_ecommerce_spun1_" + bwg).css({
            top: r + .5 * t - .5 * a,
            left: r + .5 * e - .5 * i,
            opacity: 1
        })
    }),
    jQuery(".bwg_mosaic_thumb_spun_" + bwg).on("mouseleave", function() {
        jQuery(this).children(".bwg_ecommerce_spun1_" + bwg).css({
            top: 0,
            left: -1e4,
            opacity: 0,
            padding: t.attr("data-title-margin")
        })
    }))
}
function bwg_mosaic_title_on_hover(t, e, i) {
    jQuery(".bwg-mosaic-thumb-span").on("mouseenter", function() {
        var e = jQuery(this).children(".bwg_mosaic_thumb_" + t).width();
        jQuery(this).find(".bwg_mosaic_title_spun1_" + t).width(e),
        jQuery(this).find(".bwg_mosaic_title_spun1_" + t).css({
            opacity: 1,
            "max-height": "calc(100% - " + 2 * i + "px)",
            overflow: "hidden"
        })
    }),
    jQuery(".bwg-mosaic-thumb-span").on("mouseleave", function() {
        jQuery(this).find(".bwg_mosaic_title_spun1_" + t).css({
            opacity: 0,
            padding: e.attr("data-title-margin"),
            "max-height": "calc(100% - " + 2 * i + "px)",
            overflow: "hidden"
        })
    })
}
function bwg_mosaic_ajax(e, t) {
    var i = 0;
    jQuery(".bwg_mosaic_thumb_spun_" + e + " img").on("load", function() {
        ++i >= t && bwg_thumbnail_mosaic(jQuery(".bwg-mosaic-thumbnails[data-bwg=" + e + "]"))
    }),
    jQuery(".bwg_mosaic_thumb_spun_" + e + " img").on("error", function() {
        jQuery(this).height(100),
        jQuery(this).width(100),
        ++i >= t && bwg_thumbnail_mosaic(jQuery(".bwg-mosaic-thumbnails[data-bwg=" + e + "]"))
    }),
    jQuery(".bwg_container").each(function() {
        var e = jQuery(this).data("bwg");
        0 < jQuery(this).find(".wd_error").length && bwg_container_loaded(e)
    })
}
function bwg_add_album() {
    var t = !1;
    "1" != bwg_objectsL10n.front_ajax && jQuery(document).off("click", ".bwg-album").on("click", ".bwg-album", function() {
        if (!t) {
            var e = jQuery(this).attr("data-bwg");
            return t = !0,
            setTimeout(function() {
                t = !1
            }, 100),
            bwg_ajax("gal_front_form_" + e, e, jQuery(this).attr("data-container_id"), jQuery(this).attr("data-alb_gal_id"), jQuery(this).attr("data-album_gallery_id"), jQuery(this).attr("data-def_type"), "", jQuery(this).attr("data-title")),
            !1
        }
    }),
    jQuery(".bwg_description_more").on("click", function() {
        jQuery(this).hasClass("bwg_more") ? (jQuery(this).parent().find(".bwg_description_full").show(),
        jQuery(this).addClass("bwg_hide").removeClass("bwg_more"),
        jQuery(this).html(jQuery(this).data("hide-msg"))) : (jQuery(this).parent().find(".bwg_description_full").hide(),
        jQuery(this).addClass("bwg_more").removeClass("bwg_hide"),
        jQuery(this).html(jQuery(this).data("more-msg")))
    })
}
function bwg_add_lightbox() {
    var i = !1;
    jQuery(document).on("click", ".bwg_lightbox .bwg-item0, .bwg_lightbox .bwg_slide, .bwg_lightbox .bwg-carousel-image, .bwg_lightbox .bwg-title1", function(e) {
        e.stopPropagation(),
        e.preventDefault();
        var t = jQuery(this).closest("a");
        if (!i)
            return i = !0,
            setTimeout(function() {
                i = !1
            }, 100),
            bwg_gallery_box(jQuery(t).attr("data-image-id"), jQuery(t).closest(".bwg_container")),
            !1
    }),
    jQuery(".bwg_lightbox .bwg_ecommerce").on("click", function(e) {
        if (e.stopPropagation(),
        !i)
            return i = !0,
            setTimeout(function() {
                i = !1
            }, 100),
            bwg_gallery_box(jQuery(this).closest(".bwg_lightbox").attr("data-image-id"), jQuery(this).closest(".bwg_container"), !0),
            !1
    })
}
function bwg_filter_by_tag(e) {
    var t, i = "", a = "", r = (a = jQuery(e).parent().parent().hasClass("bwg_tag_buttons_view") ? jQuery(e).parent().parent() : jQuery(e).parent().parent().parent()).find(".current_view").val(), _ = a.find(".form_id").val(), s = a.find(".cur_gal_id").val(), o = a.find(".album_gallery_id").val(), l = a.find(".type").val();
    jQuery(e).parent().find(".opt.selected").each(function() {
        i = i + jQuery(e).text() + ","
    }),
    "" == (i = i.slice(0, -1)) && (i = bwg_objectsL10n.bwg_select_tag),
    jQuery(e).parent().find(".CaptionCont").attr("title", i),
    jQuery(e).parent().find(".CaptionCont .placeholder").html(i);
    var n = jQuery(".bwg_tags_container_" + r + " #bwg_tag_id_" + s).val();
    t = "string" == typeof n && "" !== n ? n.split(",") : [],
    "object" == typeof n && (t = n),
    jQuery(".bwg_tags_container_" + r + " #bwg_tag_id_" + r).val(t),
    bwg_select_tag(r, _, s, o, l, !1)
}
function bwg_document_ready(i) {
    bwg_add_lightbox(),
    i.data("right-click-protection") && bwg_disable_right_click(i);
    var e = i.find(".search_tags");
    if ("1" == bwg_objectsL10n.front_ajax && e.length)
        for (var t = 0; t < e[0].length; t++)
            void 0 === e[0][t].attributes.selected && (e[0][t].selected = !1);
    e.length && (e.SumoSelect({
        triggerChangeCombined: !0,
        placeholder: bwg_objectsL10n.bwg_select_tag,
        search: !0,
        searchText: bwg_objectsL10n.bwg_search,
        forceCustomRendering: !0,
        noMatch: bwg_objectsL10n.bwg_tag_no_match,
        captionFormatAllSelected: bwg_objectsL10n.bwg_all_tags_selected,
        captionFormat: "{0} " + bwg_objectsL10n.bwg_tags_selected,
        okCancelInMulti: !0,
        locale: [bwg_objectsL10n.ok, bwg_objectsL10n.cancel, bwg_objectsL10n.select_all]
    }),
    e.off("change").on("change", function() {
        bwg_filter_by_tag(this)
    })),
    bwg_search_tag_init(i);
    var a = i.find(".cur_gal_id").val()
      , r = i.find(".current_view").val()
      , _ = i.find(".bwg_tags_container_" + r + " .bwg_tag_button_view_container")
      , s = i.find("#bwg_tag_id_" + a)
      , o = parseInt(2 * _.find(".bwg_tags_filter_buttons").outerHeight(!0));
    _.length && (_.find(".bwg_tags_filter_buttons").off("click").on("click", function() {
        if (!jQuery(this).hasClass("active")) {
            var e = jQuery(this).position().top;
            o < e && i.find(".show_bottom_tag").val("1"),
            "" == s.val() ? s.val(jQuery(this).val()) : s.val(s.val() + "," + jQuery(this).val()),
            bwg_filter_by_tag(this)
        }
        return !1
    }),
    _.find(".bwg_all_tags").off("click").on("click", function() {
        return jQuery(this).hasClass("active") || (s.val(""),
        bwg_filter_by_tag(this)),
        !1
    }),
    "" != s.val() && _.find(".bwg_all_tags").removeClass("active"),
    s.val().split(",").forEach(function(t) {
        _.find(".bwg_tags_filter_buttons").each(function() {
            if (jQuery(this).val() == t) {
                var e = jQuery(this).position().top;
                o < e && i.find(".show_bottom_tag").val("1")
            }
        })
    }),
    bwg_tags_button_section_visibility());
    var l = i.find(".bwg_order");
    l.length && l.SumoSelect({
        triggerChangeCombined: !0,
        forceCustomRendering: !0
    }),
    jQuery(".SumoSelect > .CaptionCont > label > i").addClass("bwg-icon-angle-down closed"),
    jQuery(this).find("search_placeholder_title").hide(),
    "" == jQuery(this).find(".bwg_search_input").val() && jQuery(this).find("search_placeholder_title").show(),
    jQuery(".bwg_thumbnail .bwg_search_container_2").focusout(function(e) {
        "" == jQuery(this).find(".bwg_search_input").val() && (jQuery(this).find(".search_placeholder_title").show(),
        jQuery(this).find(".bwg_search_loupe_container1").addClass("bwg-hidden"),
        jQuery(this).find(".bwg_search_reset_container").addClass("bwg-hidden"))
    }),
    jQuery(".search_tags").on("sumo:opened", function() {
        var e = jQuery(this).parents(".bwg_container").height()
          , t = (jQuery(this).parents(".bwg_container").find(".wd_error").length,
        jQuery(this).parent(".SumoSelect").find(".optWrapper>.options"));
        void 0 !== t && (e - 50 < t.height() && t.css("max-height", e - 50));
        0 == jQuery(this).parent().find("ul li").length && (jQuery(".no-match").html(bwg_objectsL10n.bwg_tag_no_match),
        jQuery(".no-match").show())
    }),
    jQuery(".bwg_thumbnail .SumoSelect").on("sumo:closed", function() {
        jQuery(this).find("label i").removeClass("bwg-icon-angle-up opened"),
        jQuery(this).find("label i").addClass("bwg-icon-angle-down closed")
    }),
    jQuery(".bwg_thumbnail .SumoSelect").on("sumo:opened", function() {
        jQuery(this).find("label i").removeClass("bwg-icon-angle-down closed"),
        jQuery(this).find("label i").addClass("bwg-icon-angle-up opened")
    }),
    bwg_add_album();
    var n = window.location.hash.substring(1);
    if (n && "-1" != n.indexOf("bwg")) {
        bwg_hash_array = n.replace("bwg", "").split("/");
        var g = jQuery(".bwg_container");
        g && bwg_gallery_box(bwg_hash_array[1], g, !1, bwg_hash_array[0])
    }
    bwg_resize_search_line()
}
function bwg_search_tag_init(e) {
    var t = e.find(".search_tags");
    if ("1" == bwg_objectsL10n.front_ajax && t.length)
        for (var i = 0; i < t[0].length; i++)
            void 0 === t[0][i].attributes.selected && (t[0][i].selected = !1);
    t.length && (t.SumoSelect({
        triggerChangeCombined: !0,
        placeholder: bwg_objectsL10n.bwg_select_tag,
        search: !0,
        searchText: bwg_objectsL10n.bwg_search,
        forceCustomRendering: !0,
        noMatch: bwg_objectsL10n.bwg_tag_no_match,
        captionFormatAllSelected: bwg_objectsL10n.bwg_all_tags_selected,
        captionFormat: "{0} " + bwg_objectsL10n.bwg_tags_selected,
        okCancelInMulti: !0,
        locale: [bwg_objectsL10n.ok, bwg_objectsL10n.cancel, bwg_objectsL10n.select_all]
    }),
    t.off("change").on("change", function() {
        bwg_filter_by_tag(this)
    }))
}
function bwg_clear_search_input(e) {
    if ("1" != bwg_objectsL10n.front_ajax)
        jQuery("#bwg_search_input_" + e).val(""),
        jQuery("#bwg_search_container_1_" + e + " .bwg_search_loupe_container1").addClass("bwg-hidden"),
        jQuery("#bwg_search_container_1_" + e + " .bwg_search_reset_container").addClass("bwg-hidden");
    else {
        var t = window.location.href
          , i = bwg_remove_url_parameter("bwg_search_" + e, t, t);
        window.location.replace(i)
    }
}
function bwg_check_search_input_enter(e, t) {
    return "Enter" != t.key || (jQuery(e).closest(".bwg_search_container_1").find(".bwg_search").trigger("click"),
    !1)
}
function bwg_ajax(t, i, a, r, e, _, s, o, l, n, g, b) {
    if ("1" == bwg_objectsL10n.front_ajax && !0 !== n) {
        if ("back" === r)
            return -1 == document.referrer.indexOf(window.location.host) ? (str = jQuery(location).attr("href"),
            void window.location.replace(str.substring(0, str.indexOf("type_0")))) : void window.history.back();
        var w = jQuery("#bwg_search_input_" + i).val()
          , d = jQuery(".bwg_tags_container_" + i + " .cur_gal_id").val()
          , u = window.location.href
          , h = ""
          , m = jQuery(".bwg_tags_container_" + i + " #bwg_tag_id_" + d).val();
        if ("#" == u.substr(-1) && (u = u.slice(0, -1)),
        "" !== w && void 0 !== w ? !1 !== (h = bwg_add_url_parameter(h = bwg_remove_url_parameter("page_number_" + i, u), "bwg_search_" + i, w)) && (u = h) : !1 !== (h = bwg_remove_url_parameter("bwg_search_" + i, u)) && (u = h),
        void 0 !== l && "" !== l && !1 !== (h = bwg_add_url_parameter(u, "sort_by_" + i, l)) && (u = h),
        null != m && 0 < m.length) {
            var c = "";
            jQuery(".bwg_tags_container_" + i).parent().hasClass("bwg_tag_select_view") && (m = m.toString());
            var p = m.split(",");
            jQuery.each(p, function(e) {
                var t = ",";
                e === p.length - 1 && (t = ""),
                c += p[e] + t
            }),
            "" !== c && !1 !== (h = bwg_add_url_parameter(u, "filter_tag_" + i, c)) && (u = h)
        } else
            !1 !== (h = bwg_remove_url_parameter("filter_tag_" + i, h)) && (u = h);
        return s && !1 !== (h = bwg_remove_url_parameter("page_number_" + i, h)) && (u = h),
        void (window.location.href = u)
    }
    n ? (jQuery(".bwg_loading_div_1").addClass("bwg_load_more_ajax_loading").removeClass("bwg_loading_div_1"),
    jQuery(".bwg_load_more_ajax_loading").css({
        top: jQuery("#bwg_container1_" + bwg).height() - jQuery(".bwg_load_more_ajax_loading").height()
    })) : jQuery(".bwg_load_more_ajax_loading").addClass("bwg_loading_div_1").removeClass("bwg_load_more_ajax_loading").removeAttr("style"),
    jQuery("#ajax_loading_" + i).removeClass("bwg-hidden"),
    "function" == typeof bwg_scroll_load_action && jQuery(window).off("scroll", bwg_scroll_load_action),
    jQuery(".bwg_thumbnail .search_tags").off("sumo:closed");
    var y = jQuery("#" + t).data("ajax-url")
      , f = 0;
    if (void 0 === n)
        n = !1;
    var j, Q = jQuery("#page_number_" + i).val(), v = jQuery("#bwg_search_input_" + i).val(), x = {}, k = jQuery("#bwg_album_breadcrumb_" + i).val();
    if (k && !0 !== n) {
        var z = JSON.parse(k);
        if ("back" == r) {
            z.splice(-1, 1);
            var C = z.slice(-1)[0];
            r = C.id,
            Q = C.page,
            x["action_" + i] = "back"
        } else
            "numeric" === n || s ? (z.splice(-1, 1),
            z.push({
                id: r,
                page: Q,
                search: v
            })) : (z.push({
                id: r,
                page: 1
            }),
            Q = 1);
        x["bwg_album_breadcrumb_" + i] = JSON.stringify(z)
    }
    if (x["bwg-preview-type"] = jQuery("#" + t).data("gallery-type"),
    x.gallery_type = jQuery("#" + t).data("gallery-type"),
    x.gallery_id = jQuery("#" + t).data("gallery-id"),
    x.tag = jQuery("#" + t).data("tag"),
    x.album_id = jQuery("#" + t).data("album-id"),
    x.theme_id = jQuery("#" + t).data("theme-id"),
    x.shortcode_id = jQuery("#" + t).data("shortcode-id"),
    x.bwg = i,
    x.current_url = encodeURI(jQuery("#bwg_container1_" + i).data("current-url")),
    s && (Q = 1),
    void 0 === o || "" == o)
        o = "";
    if (void 0 === g || "" == g)
        g = "";
    if (void 0 === l || "" == l)
        l = jQuery(".bwg_order_" + i).val();
    if (void 0 === b)
        b = !0;
    if (1 == b && jQuery("html, body").animate({
        scrollTop: jQuery("#" + t).offset().top - 150
    }, 500),
    x["page_number_" + i] = Q,
    x["bwg_load_more_" + i] = jQuery("#bwg_load_more_" + i).val(),
    x["album_gallery_id_" + i] = r,
    x["type_" + i] = _,
    x["title_" + i] = o,
    x["description_" + i] = g,
    x["sortImagesByValue_" + i] = l,
    x["bwg_random_seed_" + i] = jQuery("#bwg_random_seed_" + i).val(),
    0 < jQuery("#bwg_search_input_" + i).length && (x["bwg_search_" + i] = jQuery("#bwg_search_input_" + i).val()),
    void 0 !== x["bwg_album_breadcrumb_" + i]) {
        var I = JSON.parse(x["bwg_album_breadcrumb_" + i]);
        jQuery.each(I, function(e, t) {
            x["bwg_search_" + i] = "",
            r == t.id && (x["bwg_search_" + i] = t.search)
        })
    }
    var E = jQuery(".bwg_tags_container_" + i + " #bwg_tag_id_" + a).val();
    return j = "string" == typeof E && "" !== E ? E.split(",") : [],
    "object" == typeof E && (j = E),
    x["bwg_tag_id_" + a] = j,
    n ? (jQuery(".bwg_loading_div_1").addClass("bwg_load_more_ajax_loading").removeClass("bwg_loading_div_1"),
    jQuery(".bwg_load_more_ajax_loading").css({
        top: jQuery("#bwg_container1_" + bwg).height() - jQuery(".bwg_load_more_ajax_loading").height()
    })) : jQuery(".bwg_load_more_ajax_loading").addClass("bwg_loading_div_1").removeClass("bwg_load_more_ajax_loading").removeAttr("style"),
    jQuery("#ajax_loading_" + i).removeClass("bwg-hidden"),
    jQuery.ajax({
        type: "POST",
        url: y,
        data: x,
        success: function(e) {
            jQuery(e).find(".bwg_masonry_thumb_spun_" + i + " img").length,
            f = jQuery(e).find(".bwg_mosaic_thumb_spun_" + i + " img").length,
            !0 === n ? (a == "bwg_thumbnails_mosaic_" + i ? jQuery("#" + a).append(jQuery(e).closest(".bwg-container-" + i).find("#" + a).html()) : a == "bwg_album_compact_" + i ? jQuery("#" + a).append(jQuery(e).closest(".bwg-album-thumbnails").html()) : a == "bwg_thumbnails_masonry_" + i ? jQuery(".bwg-container-temp" + i).append(jQuery(e).closest(".bwg-container-" + i).html()) : jQuery("#" + a).append(jQuery(e).closest(".bwg-container-" + i).html()),
            jQuery(".bwg_nav_cont_" + i).html(jQuery(e).closest(".bwg_nav_cont_" + i).html())) : jQuery("#bwg_container3_" + i).html(e),
            bwg_remove_lazy_loader_icon()
        },
        complete: function() {
            jQuery("div[id^='bwg_container1_'] img").each(function() {
                null != jQuery(this).attr("data-lazy-src") && "" != jQuery(this).attr("data-lazy-src") ? jQuery(this).attr("src", jQuery(this).attr("data-lazy-src")) : null != jQuery(this).attr("data-src") && "" != jQuery(this).attr("data-src") && jQuery(this).attr("src", jQuery(this).attr("data-src"))
            }),
            jQuery(".blog_style_image_buttons_conteiner_" + i).find(jQuery(".bwg_blog_style_img_" + i)).on("load", function() {
                jQuery(".bwg_blog_style_img_" + i).closest(jQuery(".blog_style_image_buttons_conteiner_" + i)).show()
            }),
            "" != j && null !== j || (j = []),
            jQuery(".bwg_tags_container_" + i + " #bwg_tag_id_" + a).val(j),
            j.forEach(function(t) {
                jQuery(".bwg_tags_container_" + i + " .bwg_tags_filter_buttons").each(function() {
                    var e = parseInt(2 * jQuery(this).outerHeight(!0));
                    jQuery(this).val() == t && (jQuery(this).addClass("active"),
                    e < jQuery(this).position().top && jQuery(".bwg_tags_container_" + i + " .show_bottom_tag").val("1"),
                    jQuery(".bwg_tags_container_" + i + " .bwg_all_tags").removeClass("active"))
                })
            }),
            jQuery(".pagination-links_" + i).length && jQuery("html, body").animate({
                scrollTop: jQuery("#" + t).offset().top - 150
            }, 500),
            bwg_document_ready(jQuery("#bwg_container1_" + i));
            var e = jQuery("#bwg_container1_" + i).data("gallery-view-type");
            if (jQuery("#bwg_container1_" + i + " .bwg-album-thumbnails").length) {
                bwg_all_thumnails_loaded(".bwg-container-" + i) && bwg_container_loaded(i)
            } else {
                switch (e) {
                case "thumbnails":
                case "thumbnail":
                case "masonry":
                case "mosaic":
                case "thumbnails_masonry":
                case "album_compact_preview":
                case "album_masonry_preview":
                case "album_extended_preview":
                    bwg_all_thumnails_loaded(".bwg-container-" + i);
                    break;
                case "slideshow":
                    bwg_slideshow_ready(i);
                    break;
                case "carousel":
                    bwg_carousel_ready(i),
                    bwg_carousel_onload(jQuery("#bwg_container1_" + i));
                    break;
                case "image_browser":
                    bwg_image_browser_ready(jQuery("#bwg_container1_" + i));
                    break;
                case "blog_style":
                    bwg_blog_style_ready(jQuery("#bwg_container1_" + i))
                }
                bwg_mosaic_ajax(i, f)
            }
            jQuery(".blog_style_images_conteiner_" + i + " .bwg_embed_frame_16x9_" + i).each(function(e) {
                jQuery(this).width(jQuery(this).parent().width()),
                jQuery(this).height(.5625 * jQuery(this).width())
            }),
            jQuery(".blog_style_images_conteiner_" + i + " .bwg_embed_frame_instapost_" + i).each(function(e) {
                jQuery(this).width(jQuery(this).parent().width()),
                jQuery(this).height((jQuery(this).width() - 16) * jQuery(this).attr("data-height") / jQuery(this).attr("data-width") + 96)
            }),
            jQuery("#bwg_embed_frame_16x9_" + i).width(jQuery("#bwg_embed_frame_16x9_" + i).parent().width()),
            jQuery("#bwg_embed_frame_16x9_" + i).height(.5625 * jQuery("#bwg_embed_frame_16x9_" + i).width()),
            jQuery("#bwg_embed_frame_instapost_" + i).width(jQuery("#bwg_embed_frame_16x9_" + i).parent().width()),
            jQuery(".bwg_embed_frame_instapost_" + i).height((jQuery(".bwg_embed_frame_instapost_" + i).width() - 16) * jQuery(".bwg_embed_frame_instapost_" + i).attr("data-height") / jQuery(".bwg_embed_frame_instapost_" + i).attr("data-width") + 96),
            jQuery("#bwg_search_input_" + i).val(x["bwg_search_" + i]),
            "" != jQuery("#bwg_search_input_" + i).val() ? (jQuery("#bwg_search_input_" + i).parent().find(".search_placeholder_title").hide(),
            jQuery("#bwg_search_input_" + i).parent().parent().find(".bwg_search_reset_container").show(),
            jQuery("#bwg_search_input_" + i).parent().parent().find(".bwg_search_loupe_container1").show()) : jQuery("#bwg_search_input_" + i).parent().find(".search_placeholder_title").show();
            jQuery("#bwg_container2_" + i + " .cur_gal_id").val();
            "" != j && null !== j || (j = []),
            jQuery(".bwg_tags_container_" + i + " #bwg_tag_id_" + i).val(j)
        }
    }),
    !1
}
function bwg_add_url_parameter(e, t, i) {
    var a = new RegExp("([?&])" + t + "=.*?(&|$)","i")
      , r = -1 !== e.indexOf("?") ? "&" : "?";
    return e.match(a) ? e.replace(a, "$1" + t + "=" + i + "$2") : e + r + t + "=" + i
}
function bwg_remove_url_parameter(e, t) {
    var i = t.split("?")
      , a = i[0] + "?"
      , r = "";
    if (void 0 !== i[1] && (r = i[1]),
    "" === r)
        return t;
    var _, s, o = decodeURIComponent(r).split("&");
    for (s = 0; s < o.length; s++)
        (_ = o[s].split("="))[0] != e && (a = a + _[0] + "=" + _[1] + "&");
    return a.substring(0, a.length - 1)
}
function bwg_select_tag(e, t, i, a, r, _) {
    _ && jQuery(".bwg_tags_container_" + e + " #bwg_tag_id_" + i).val(""),
    bwg_ajax(t, e, i, a, "", r, 1, "")
}
function bwg_cube(e, t, i, a, r, _, s, o, l, n, g) {
    var b, w = !1, d = "";
    if (void 0 !== g && "" !== g) {
        w = !0,
        bwg_params[g].bwg_trans_in_progress = !0,
        d = "_" + g,
        b = bwg_params[g].bwg_transition_duration;
        bwg_params[g].event_stack
    } else
        b = bwg_transition_duration;
    if (!bwg_testBrowser_cssTransitions(g))
        return bwg_fallback(o, l, n, g);
    if (!bwg_testBrowser_cssTransforms3d(g))
        return bwg_fallback3d(o, l, n, g);
    function u() {
        if (jQuery(o).removeAttr("style"),
        jQuery(l).removeAttr("style"),
        jQuery(".bwg_slider" + d).removeAttr("style"),
        jQuery(o).css({
            opacity: 0,
            "z-index": 1
        }),
        jQuery(l).css({
            opacity: 1,
            "z-index": 2
        }),
        jQuery(".bwg_image_info").show(),
        jQuery(o).html(""),
        w) {
            bwg_change_watermark_container(g),
            bwg_params[g].bwg_trans_in_progress = !1;
            var e = bwg_params[g].data
              , t = bwg_params[g].event_stack
        } else {
            e = "";
            gallery_box_data.bwg_trans_in_progress = !1;
            t = gallery_box_data.event_stack
        }
        if (void 0 !== t && 0 < t.length) {
            var i = t[0].split("-");
            t.shift(),
            bwg_change_image(i[0], i[1], e, !0, g)
        }
        bwg_change_watermark_container()
    }
    w ? (jQuery(".bwg_slideshow_filmstrip_thumbnail_" + g).removeClass("bwg_slideshow_thumb_active_" + g).addClass("bwg_slideshow_thumb_deactive_" + g),
    jQuery("#bwg_filmstrip_thumbnail_" + bwg_params[g].bwg_current_key + "_" + g).removeClass("bwg_slideshow_thumb_deactive_" + g).addClass("bwg_slideshow_thumb_active_" + g),
    jQuery(".bwg_slideshow_dots_" + g).removeClass("bwg_slideshow_dots_active_" + g).addClass("bwg_slideshow_dots_deactive_" + g),
    jQuery("#bwg_dots_" + bwg_params[g].bwg_current_key + "_" + g).removeClass("bwg_slideshow_dots_deactive_" + g).addClass("bwg_slideshow_dots_active_" + g),
    jQuery(".bwg_slide_bg_" + g).css("perspective", 1e3)) : (gallery_box_data.bwg_trans_in_progress = !0,
    jQuery(".bwg_filmstrip_thumbnail").removeClass("bwg_thumb_active").addClass("bwg_thumb_deactive"),
    jQuery("#bwg_filmstrip_thumbnail_" + gallery_box_data.bwg_current_key).removeClass("bwg_thumb_deactive").addClass("bwg_thumb_active"),
    jQuery(".bwg_slide_bg").css("perspective", 1e3)),
    jQuery(o).css({
        transform: "translateZ(" + e + "px)",
        backfaceVisibility: "hidden"
    }),
    jQuery(l).css({
        opacity: 1,
        backfaceVisibility: "hidden",
        transform: "translateY(" + i + "px) translateX(" + t + "px) rotateY(" + r + "deg) rotateX(" + a + "deg)"
    }),
    jQuery(".bwg_slider" + d).css({
        transform: "translateZ(-" + e + "px)",
        transformStyle: "preserve-3d"
    }),
    setTimeout(function() {
        jQuery(".bwg_slider" + d).css({
            transition: "all " + b + "ms ease-in-out",
            transform: "translateZ(-" + e + "px) rotateX(" + _ + "deg) rotateY(" + s + "deg)"
        })
    }, 20),
    jQuery(".bwg_slider" + d).one("webkitTransitionEnd transitionend otransitionend oTransitionEnd mstransitionend", jQuery.proxy(u)),
    0 == b && u()
}
function bwg_cubeH(e, t, i, a) {
    var r = jQuery(e).width() / 2;
    "right" == i ? bwg_cube(r, r, 0, 0, 90, 0, -90, e, t, i, a) : "left" == i && bwg_cube(r, -r, 0, 0, -90, 0, 90, e, t, i, a)
}
function bwg_cubeV(e, t, i, a) {
    var r = jQuery(e).height() / 2;
    "right" == i ? bwg_cube(r, 0, -r, 90, 0, -90, 0, e, t, i, a) : "left" == i && bwg_cube(r, 0, r, -90, 0, 90, 0, e, t, i, a)
}
function bwg_fade(e, t, i, a) {
    var r, _ = !1;
    function s() {
        jQuery(".bwg_image_info").show(),
        bwg_change_watermark_container(a),
        _ ? bwg_params[a].bwg_trans_in_progress = !1 : gallery_box_data.bwg_trans_in_progress = !1
    }
    r = void 0 !== a && "" !== a ? (_ = !0,
    bwg_params[a].bwg_trans_in_progress = !0,
    bwg_params[a].bwg_transition_duration) : (gallery_box_data.bwg_trans_in_progress = !0,
    gallery_box_data.bwg_transition_duration),
    _ ? (jQuery(".bwg_slideshow_filmstrip_thumbnail_" + a).removeClass("bwg_slideshow_thumb_active_" + a).addClass("bwg_slideshow_thumb_deactive_" + a),
    jQuery("#bwg_filmstrip_thumbnail_" + bwg_params[a].bwg_current_key + "_" + a).removeClass("bwg_slideshow_thumb_deactive_" + a).addClass("bwg_slideshow_thumb_active_" + a),
    jQuery(".bwg_slideshow_dots_" + a).removeClass("bwg_slideshow_dots_active_" + a).addClass("bwg_slideshow_dots_deactive_" + a),
    jQuery("#bwg_dots_" + bwg_params[a].bwg_current_key + "_" + a).removeClass("bwg_slideshow_dots_deactive_" + a).addClass("bwg_slideshow_dots_active_" + a)) : (jQuery(".bwg_filmstrip_thumbnail").removeClass("bwg_thumb_active").addClass("bwg_thumb_deactive"),
    jQuery("#bwg_filmstrip_thumbnail_" + gallery_box_data.bwg_current_key).removeClass("bwg_thumb_deactive").addClass("bwg_thumb_active")),
    bwg_testBrowser_cssTransitions() ? (jQuery(t).css("transition", "opacity " + r + "ms linear"),
    jQuery(e).css("transition", "opacity " + r + "ms linear"),
    jQuery(e).css({
        opacity: 0,
        "z-index": 1
    }),
    jQuery(t).css({
        opacity: 1,
        "z-index": 2
    }),
    jQuery(t).one("webkitTransitionEnd transitionend otransitionend oTransitionEnd mstransitionend", jQuery.proxy(s))) : (jQuery(e).animate({
        opacity: 0,
        "z-index": 1
    }, r),
    jQuery(t).animate({
        opacity: 1,
        "z-index": 2
    }, {
        duration: r,
        complete: function() {
            _ ? bwg_params[a].bwg_trans_in_progress = !1 : gallery_box_data.bwg_trans_in_progress = !1,
            jQuery(e).html(""),
            s()
        }
    }),
    jQuery(e).fadeTo(r, 0),
    jQuery(t).fadeTo(r, 1)),
    0 == r && s()
}
function bwg_grid(e, t, i, a, r, _, s, o, l, n, g) {
    var b, w = !1, d = "";
    if (event_stack = void 0 !== g && "" !== g ? (w = !0,
    bwg_params[g].bwg_trans_in_progress = !0,
    d = "_" + g,
    b = bwg_params[g].bwg_transition_duration,
    bwg_params[g].event_stack) : (b = bwg_transition_duration,
    gallery_box_data.bwg_trans_in_progress = !0,
    gallery_box_data.event_stack),
    !bwg_testBrowser_cssTransitions())
        return bwg_fallback(o, l, n);
    w ? (jQuery(".bwg_slideshow_filmstrip_thumbnail_" + g).removeClass("bwg_slideshow_thumb_active_" + g).addClass("bwg_slideshow_thumb_deactive_" + g),
    jQuery("#bwg_filmstrip_thumbnail_" + bwg_params[g].bwg_current_key + d).removeClass("bwg_slideshow_thumb_deactive_" + g).addClass("bwg_slideshow_thumb_active_" + g),
    jQuery(".bwg_slideshow_dots_" + g).removeClass("bwg_slideshow_dots_active_" + g).addClass("bwg_slideshow_dots_deactive_" + g),
    jQuery("#bwg_dots_" + bwg_params[g].bwg_current_key + d).removeClass("bwg_slideshow_dots_deactive_" + g).addClass("bwg_slideshow_dots_active_" + g)) : (jQuery(".bwg_filmstrip_thumbnail").removeClass("bwg_thumb_active").addClass("bwg_thumb_deactive"),
    jQuery("#bwg_filmstrip_thumbnail_" + gallery_box_data.bwg_current_key).removeClass("bwg_thumb_deactive").addClass("bwg_thumb_active"));
    var u = b / (e + t);
    var h = jQuery(o).find("img")
      , m = jQuery(o).find("figure")
      , c = (jQuery(o).find("iframe").css("opacity", 0),
    jQuery('<span style="display: block;" />').addClass("bwg_grid" + d));
    jQuery(o).prepend(c);
    var p, y, f, j, Q, v, x, k, z, C, I, E = jQuery(".bwg_slide_bg" + d), M = h.width(), S = h.height(), O = E.width(), T = E.height(), H = Math.floor(O / e), A = Math.floor(T / t), L = O - e * H, B = Math.ceil(L / e), W = T - t * A, D = Math.ceil(W / t), F = 0, R = Math.ceil((jQuery(".bwg_slide_bg" + d).width() - h.width()) / 2), N = void 0 === h.attr("src") ? "" : h.attr("src");
    a = "min-auto" === (a = "auto" === a ? O : a) ? -O : a,
    r = "min-auto" === (r = "auto" === r ? T : r) ? -T : r;
    for (var P = 0; P < e; P++) {
        var U = 0
          , V = Math.floor((jQuery(".bwg_slide_bg" + d).height() - h.height()) / 2)
          , q = H;
        if (0 < L) {
            var J = B <= L ? B : L;
            q += J,
            L -= J
        }
        for (var G = 0; G < t; G++) {
            var Y = A
              , $ = W;
            0 < $ && (Y += J = D <= $ ? D : W,
            $ -= J),
            c.append((p = q,
            y = Y,
            f = U,
            j = V,
            Q = F,
            v = R,
            x = N,
            k = M,
            z = S,
            C = g,
            void 0,
            I = (P + G) * u,
            jQuery('<span class="bwg_gridlet' + d + '" />').css({
                display: "block",
                width: p,
                height: y,
                top: f,
                left: Q,
                backgroundImage: 'url("' + x + '")',
                backgroundColor: w ? jQuery(".bwg_slideshow_image_wrap_" + C).css("background-color") : jQuery(".spider_popup_wrap").css("background-color"),
                backgroundRepeat: "no-repeat",
                backgroundPosition: v + "px " + j + "px",
                backgroundSize: k + "px " + z + "px",
                transition: "all " + b + "ms ease-in-out " + I + "ms",
                transform: "none"
            }))),
            U += Y,
            V -= Y
        }
        R -= q,
        F += q
    }
    var X = c.children().last();
    function K() {
        if (jQuery(o).css({
            opacity: 0,
            "z-index": 1
        }),
        jQuery(l).css({
            opacity: 1,
            "z-index": 2
        }),
        h.css("opacity", 1),
        m.css("opacity", 1),
        c.remove(),
        w) {
            bwg_params[g].bwg_trans_in_progress = !1;
            var e = bwg_params[g].event_stack
              , t = bwg_params[g].data
        } else {
            gallery_box_data.bwg_trans_in_progress = !1;
            e = gallery_box_data.event_stack,
            t = ""
        }
        if (jQuery(".bwg_image_info").show(),
        jQuery(o).html(""),
        void 0 !== e && 0 < e.length) {
            var i = e[0].split("-");
            e.shift(),
            bwg_change_image(i[0], i[1], t, !0, g)
        }
        w ? bwg_change_watermark_container(g) : bwg_change_watermark_container()
    }
    c.show(),
    h.css("opacity", 0),
    m.css("opacity", 0),
    c.children().first().addClass("rs-top-left"),
    c.children().last().addClass("rs-bottom-right"),
    c.children().eq(t - 1).addClass("rs-bottom-left"),
    c.children().eq(-t).addClass("rs-top-right"),
    setTimeout(function() {
        c.children().css({
            opacity: s,
            transform: "rotate(" + i + "deg) translateX(" + a + "px) translateY(" + r + "px) scale(" + _ + ")"
        })
    }, 1),
    jQuery(l).css("opacity", 1),
    jQuery(X).one("webkitTransitionEnd transitionend otransitionend oTransitionEnd mstransitionend", jQuery.proxy(K)),
    0 == b && K()
}
function bwg_sliceH(e, t, i, a) {
    if ("right" == i)
        var r = "min-auto";
    else if ("left" == i)
        r = "auto";
    bwg_grid(1, 8, 0, r, 0, 1, 0, e, t, i, a)
}
function bwg_sliceV(e, t, i, a) {
    if ("right" == i)
        var r = "min-auto";
    else if ("left" == i)
        r = "auto";
    bwg_grid(10, 1, 0, 0, r, 1, 0, e, t, i, a)
}
function bwg_slideV(e, t, i, a) {
    if ("right" == i)
        var r = "auto";
    else if ("left" == i)
        r = "min-auto";
    bwg_grid(1, 1, 0, 0, r, 1, 1, e, t, i, a)
}
function bwg_slideH(e, t, i, a) {
    if ("right" == i)
        var r = "min-auto";
    else if ("left" == i)
        r = "auto";
    bwg_grid(1, 1, 0, r, 0, 1, 1, e, t, i, a)
}
function bwg_scaleOut(e, t, i, a) {
    bwg_grid(1, 1, 0, 0, 0, 1.5, 0, e, t, i, a)
}
function bwg_scaleIn(e, t, i, a) {
    bwg_grid(1, 1, 0, 0, 0, .5, 0, e, t, i, a)
}
function bwg_blockScale(e, t, i, a) {
    bwg_grid(8, 6, 0, 0, 0, .6, 0, e, t, i, a)
}
function bwg_kaleidoscope(e, t, i, a) {
    bwg_grid(10, 8, 0, 0, 0, 1, 0, e, t, i, a)
}
function bwg_fan(e, t, i, a) {
    if ("right" == i)
        var r = 45
          , _ = 100;
    else if ("left" == i)
        r = -45,
        _ = -100;
    bwg_grid(1, 10, r, _, 0, 1, 0, e, t, i, a)
}
function bwg_blindV(e, t, i, a) {
    bwg_grid(1, 8, 0, 0, 0, .7, 0, e, t, "", a)
}
function bwg_blindH(e, t, i, a) {
    bwg_grid(10, 1, 0, 0, 0, .7, 0, e, t, "", a)
}
function bwg_random(e, t, i, a) {
    var r = ["sliceH", "sliceV", "slideH", "slideV", "scaleOut", "scaleIn", "blockScale", "kaleidoscope", "fan", "blindH", "blindV"];
    this["bwg_" + r[Math.floor(Math.random() * r.length)]](e, t, i, a)
}
function bwg_change_watermark_container(t) {
    jQuery(".bwg_slider" + (void 0 !== t && "" !== t ? "_" + t : "")).children().each(function() {
        if (2 == jQuery(this).css("zIndex")) {
            var e = jQuery(this).find("img");
            if (e.length)
                if (e.prop("complete"))
                    bwg_change_each_watermark_container(e.width(), e.height(), t);
                else
                    e.on("load", function() {
                        bwg_change_each_watermark_container(e.width(), e.height(), t)
                    });
            else
                (e = jQuery(this).find("iframe")).length || (e = jQuery(this).find("video")),
                bwg_change_each_watermark_container(e.width(), e.height(), t)
        }
    })
}
function bwg_change_each_watermark_container(e, t, i) {
    var a = void 0 !== i && "" !== i ? "_" + i : ""
      , r = void 0 !== i && "" !== i ? "_slideshow" : "";
    if (jQuery(".bwg" + r + "_watermark_spun" + a).width(e),
    jQuery(".bwg" + r + "_watermark_spun" + a).height(t),
    jQuery(".bwg" + r + "_watermark" + a).css({
        display: ""
    }),
    void 0 === i || "" === i) {
        var _ = 0;
        (jQuery(".bwg_comment_container").hasClass("bwg_open") || jQuery(".bwg_ecommerce_container").hasClass("bwg_open")) && (_ = gallery_box_data.lightbox_comment_width),
        e <= jQuery(window).width() - _ && (jQuery(".bwg_watermark_image").css({
            width: (jQuery(".spider_popup_wrap").width() - _) * gallery_box_data.watermark_font_size / gallery_box_data.image_width
        }),
        jQuery(".bwg_watermark_text, .bwg_watermark_text:hover").css({
            fontSize: (jQuery(".spider_popup_wrap").width() - _) * gallery_box_data.watermark_font_size / gallery_box_data.image_width
        }))
    } else
        jQuery(".bwg" + r + "_title_spun" + a).width(e),
        jQuery(".bwg" + r + "_title_spun" + a).height(t),
        jQuery(".bwg" + r + "_description_spun" + a).width(e),
        jQuery(".bwg" + r + "_description_spun" + a).height(t);
    jQuery.trim(jQuery(".bwg" + r + "_title_text" + a).text()) && jQuery(".bwg_slideshow_title_text" + a).css({
        display: ""
    }),
    jQuery.trim(jQuery(".bwg" + r + "_description_text" + a).text()) && jQuery(".bwg" + r + "_description_text" + a).css({
        display: ""
    })
}
function bwg_set_filmstrip_pos(e, t, i) {
    var a, r = void 0 !== t && "" !== t ? "_" + t : "", _ = void 0 !== t && "" !== t ? "_slideshow" : "";
    a = void 0 !== t && "" !== t ? bwg_params[t].left_or_top : gallery_box_data.left_or_top;
    var s = parseInt(jQuery(".bwg_filmstrip_thumbnails").attr("data-all-images-top-bottom-space"))
      , o = parseInt(jQuery(".bwg_filmstrip_thumbnails").attr("data-all-images-right-left-space"));
    if (void 0 === t || "" === t) {
        if ("outerWidth" == gallery_box_data.outerWidth_or_outerHeight)
            var l = -bwg_current_filmstrip_pos - jQuery(".bwg_filmstrip_thumbnail").outerWidth(!0) / 2;
        else if ("outerHeight" == gallery_box_data.outerWidth_or_outerHeight)
            l = -bwg_current_filmstrip_pos - jQuery(".bwg_filmstrip_thumbnail").outerHeight(!0) / 2;
        if ("width" == gallery_box_data.width_or_height)
            var n = Math.min(0, Math.max(e - jQuery(".bwg_filmstrip_thumbnails").width(), l + e / 2));
        else if ("height" == gallery_box_data.width_or_height)
            n = Math.min(0, Math.max(e - jQuery(".bwg_filmstrip_thumbnails").height(), l + e / 2))
    } else if ("width" == bwg_params[t].width_or_height)
        l = -bwg_params[t].bwg_current_filmstrip_pos - (jQuery(".bwg_slideshow_filmstrip_thumbnail" + r).width() + bwg_params[t].filmstrip_thumb_margin_hor) / 2,
        n = Math.min(0, Math.max(e - jQuery(".bwg_slideshow_filmstrip_thumbnails" + r).width(), l + e / 2));
    else
        l = -bwg_params[t].bwg_current_filmstrip_pos - (jQuery(".bwg_slideshow_filmstrip_thumbnail" + r).height() + bwg_params[t].filmstrip_thumb_margin_hor) / 2,
        n = Math.min(0, Math.max(e - jQuery(".bwg_slideshow_filmstrip_thumbnails" + r).height(), l + e / 2));
    0 < n + o && (o = 0),
    0 < n + s && (s = 0),
    "left" == a ? jQuery(".bwg" + _ + "_filmstrip_thumbnails" + r).animate({
        left: n + o
    }, {
        duration: 500,
        complete: function() {
            void 0 !== i && bwg_disable_lightbox_filmstrip_left_right_arrow(i)
        }
    }) : jQuery(".bwg" + _ + "_filmstrip_thumbnails" + r).animate({
        top: n + s
    }, {
        duration: 500,
        complete: function() {
            void 0 !== i && bwg_disable_lightbox_filmstrip_left_right_arrow(i)
        }
    })
}
function bwg_slideshow_filmstrip_fix_dimension(e) {
    var t, i, a, r, _, s, o = void 0 !== e && "" !== e ? "_" + e : "", l = void 0 !== e && "" !== e ? "_slideshow" : "", n = void 0 !== e && "" !== e && void 0 !== bwg_params[e].outerWidth_or_outerHeight ? bwg_params[e].outerWidth_or_outerHeight : gallery_box_data.outerWidth_or_outerHeight, g = void 0 !== e && "" !== e && void 0 !== bwg_params[e].left_or_top ? bwg_params[e].left_or_top : gallery_box_data.left_or_top;
    i = "outerWidth" == n ? (t = jQuery(".bwg" + l + "_filmstrip" + o).outerWidth(!0),
    jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).outerWidth(!0)) : (t = jQuery(".bwg" + l + "_filmstrip" + o).outerHeight(!0),
    jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).outerHeight(!0)),
    s = "left" == g ? (a = jQuery(".bwg" + l + "_thumb_active" + o).position().left,
    r = "outerWidth" == n ? jQuery(".bwg" + l + "_thumb_active" + o).position().left + jQuery(".bwg" + l + "_thumb_active" + o).outerWidth(!0) : jQuery(".bwg" + l + "_thumb_active" + o).position().left + jQuery(".bwg" + l + "_thumb_active" + o).outerHeight(!0),
    _ = jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).position().left,
    Math.abs(jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).position().left) + t) : (a = jQuery(".bwg" + l + "_thumb_active" + o).position().top,
    r = "outerWidth" == n ? jQuery(".bwg" + l + "_thumb_active" + o).position().top + jQuery(".bwg" + l + "_thumb_active" + o).outerWidth(!0) : jQuery(".bwg" + l + "_thumb_active" + o).position().top + jQuery(".bwg" + l + "_thumb_active" + o).outerHeight(!0),
    _ = jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).position().top,
    Math.abs(jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).position().top) + t),
    i < t || (a < Math.abs(_) ? "left" == g ? jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).animate({
        left: -a
    }, {
        duration: 500
    }) : jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).animate({
        top: -a
    }, {
        duration: 500
    }) : s < r && ("left" == g ? jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).animate({
        left: -(r - t)
    }, {
        duration: 500
    }) : jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).animate({
        top: -(r - t)
    }, {
        duration: 500
    })))
}
function bwg_slideshow_filmstrip_fix_count(e) {
    var t, i, a, r, _, s, o = void 0 !== e && "" !== e ? "_" + e : "", l = void 0 !== e && "" !== e ? "_slideshow" : "", n = void 0 !== e && "" !== e ? bwg_params[e].outerWidth_or_outerHeight : gallery_box_data.outerWidth_or_outerHeight, g = void 0 !== e && "" !== e ? bwg_params[e].left_or_top : gallery_box_data.left_or_top;
    i = "outerWidth" == n ? (t = jQuery(".bwg" + l + "_filmstrip_fix_count" + o).outerWidth(!0),
    jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).outerWidth(!0)) : (t = jQuery(".bwg" + l + "_filmstrip_fix_count" + o).outerHeight(!0),
    jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).outerHeight(!0)),
    s = "left" == g ? (a = jQuery(".bwg" + l + "_thumb_active" + o).position().left,
    r = "outerWidth" == n ? jQuery(".bwg" + l + "_thumb_active" + o).position().left + jQuery(".bwg" + l + "_thumb_active" + o).outerWidth(!0) : jQuery(".bwg" + l + "_thumb_active" + o).position().left + jQuery(".bwg" + l + "_thumb_active" + o).outerHeight(!0),
    _ = jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).position().left,
    Math.abs(jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).position().left) + t) : (a = jQuery(".bwg" + l + "_thumb_active" + o).position().top,
    r = "outerWidth" == n ? jQuery(".bwg" + l + "_thumb_active" + o).position().top + jQuery(".bwg" + l + "_thumb_active" + o).outerWidth(!0) : jQuery(".bwg" + l + "_thumb_active" + o).position().top + jQuery(".bwg" + l + "_thumb_active" + o).outerHeight(!0),
    _ = jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).position().top,
    Math.abs(jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).position().top) + t),
    i < t || (a < Math.abs(_) ? "left" == g ? jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).animate({
        left: -a
    }, {
        duration: 500
    }) : jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).animate({
        top: -a
    }, {
        duration: 500
    }) : s < r && ("left" == g ? jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).animate({
        left: -(r - t)
    }, {
        duration: 500
    }) : jQuery(".bwg" + l + "_filmstrip_thumbnails" + o).animate({
        top: -(r - t)
    }, {
        duration: 500
    })))
}
function bwg_resize_slideshow_filmstrip_fix_count(e) {
    var _ = e.bwg
      , t = e.parent_width
      , i = e.params
      , a = i.filmstrip_direction
      , r = i.data
      , s = i.filmstrip_thumb_margin_hor
      , o = jQuery(window).width() <= 767 && 5 < i.slideshow_thumbnails_count
      , l = o ? 5 : i.slideshow_thumbnails_count
      , n = "#bwg_container1_" + _ + " #bwg_container2_" + _ + " .bwg_slideshow_filmstrip_container_" + _
      , g = "#bwg_container1_" + _ + " #bwg_container2_" + _ + " .bwg_slideshow_filmstrip_fix_count_" + _
      , b = "#bwg_container1_" + _ + " #bwg_container2_" + _ + " .bwg_slideshow_filmstrip_fix_count_" + _ + " .bwg_slideshow_filmstrip_thumbnails_" + _
      , w = "#bwg_container1_" + _ + " #bwg_container2_" + _ + " .bwg_slideshow_filmstrip_fix_count_" + _ + " .bwg_slideshow_filmstrip_thumbnails_" + _ + " .bwg_slideshow_filmstrip_thumbnail_" + _
      , d = "#bwg_container1_" + _ + " #bwg_container2_" + _ + " .bwg_slideshow_image_container_" + _
      , u = jQuery(d).data("filmstrip-position")
      , h = (jQuery(d).data("filmstrip-size"),
    i.slideshow_filmstrip_rl_btn_size);
    if (jQuery("#bwg_container1_" + _).css({
        width: "100%"
    }),
    jQuery("#bwg_container1_" + _ + " #bwg_container2_" + _).css({
        width: t
    }),
    "undefined" == typeof resize_in_progress || !1 === resize_in_progress) {
        window.resize_in_progress = !0,
        void 0 !== m && clearTimeout(m);
        var m = setTimeout(function() {
            resize_in_progress = !1;
            var e = {};
            "bottom" == u || "top" == u ? e.left = 0 : e.top = 0,
            jQuery(b).css(e);
            var t = "horizontal" == a ? "table-cell" : "block";
            jQuery(n).find(".bwg_slideshow_filmstrip_left_" + _).css({
                display: "none"
            }),
            jQuery(n).find(".bwg_slideshow_filmstrip_left_disabled_" + _).css({
                display: t
            }),
            jQuery(n).find(".bwg_slideshow_filmstrip_right_" + _).css({
                display: t
            }),
            jQuery(n).find(".bwg_slideshow_filmstrip_right_disabled_" + _).css({
                display: "none"
            })
        }, 500)
    }
    if (bwg_resize_instagram_post(_),
    bwg_change_watermark_container(_),
    "horizontal" == a) {
        var c = i.image_height / i.image_width
          , p = t - 40
          , y = Math.round(c * p)
          , f = (p - s * l) / l
          , j = Math.round(c * f);
        jQuery(n).css({
            width: t,
            height: j
        }),
        jQuery(g).css({
            width: p,
            height: j
        }),
        jQuery(w).css({
            width: f,
            height: j
        }),
        jQuery.each(r, function(e, t) {
            var i = f
              , a = j;
            if ("" != t.image_width && "" != t.image_height) {
                var r = Math.max(f / t.image_width, j / t.image_height);
                i = t.image_width * r,
                a = t.thumb_height * r
            }
            "" != t.thumb_width && "" != t.thumb_height && (i = t.thumb_width,
            a = t.thumb_height);
            i *= r = Math.max(f / i, j / a),
            a *= r;
            jQuery(".bwg_slideshow_filmstrip_fix_count_" + _ + " .bwg_slideshow_filmstrip_thumbnail_" + _ + " .bwg_slideshow_filmstrip_thumbnail_img_" + _).css({
                width: f,
                height: j,
                "margin-left": 0,
                "margin-top": 0
            })
        }),
        jQuery(b).css({
            width: f * r.length + s * r.length,
            height: j
        }),
        jQuery(".bwg_slideshow_image_wrap_" + _).css({
            width: t,
            height: t * i.image_height / i.image_width
        }),
        (Q = {
            width: t,
            height: t * (i.image_height / i.image_width) - j
        })[u] = j,
        jQuery(".bwg_slideshow_image_container_" + _).css(Q),
        jQuery(".bwg_slideshow_image_" + _).css({
            cssText: "max-width:" + t + "px !important; max-height:" + (t * (i.image_height / i.image_width) - j) + "px !important;"
        }),
        jQuery(".bwg_slideshow_embed_" + _).css({
            cssText: "width:" + t + "px !important; height:" + (t * (i.image_height / i.image_width) - j) + "px !important;"
        }),
        jQuery(".bwg_embed_frame_" + _).css({
            "max-width": t + "px",
            "max-height": t * (i.image_height / i.image_width) - j + "px"
        }),
        jQuery(".bwg_embed_frame_" + _).attr("data-width", t),
        jQuery(".bwg_embed_frame_" + _).attr("data-height", t * (i.image_height / i.image_width) - j),
        j < h && (h = j),
        jQuery(n).find(".bwg-icon-angle-left").css({
            "font-size": h
        }),
        jQuery(n).find(".bwg-icon-angle-right").css({
            "font-size": h
        })
    } else {
        var Q, v = t * i.image_height / i.image_width;
        c = i.image_width / i.image_height,
        y = v - 40,
        p = Math.round(c * y),
        j = (y - s * l) / l,
        f = Math.round(c * j);
        jQuery.each(r, function(e, t) {
            var i = f
              , a = j;
            if ("" != t.image_width && "" != t.image_height) {
                var r = Math.max(f / t.image_width, j / t.image_height);
                i = t.image_width * r,
                a = t.thumb_height * r
            }
            "" != t.thumb_width && "" != t.thumb_height && (i = t.thumb_width,
            a = t.thumb_height);
            r = Math.max(f / i, j / a),
            i *= r,
            a *= r;
            jQuery(".bwg_slideshow_filmstrip_fix_count_" + _ + " .bwg_slideshow_filmstrip_thumbnail_" + _ + " .bwg_slideshow_filmstrip_thumbnail_img_" + _).css({
                width: f,
                height: j,
                "margin-left": 0,
                "margin-top": 0
            })
        }),
        jQuery(n).css({
            width: f,
            height: v
        }),
        jQuery(g).css({
            width: f,
            height: y
        }),
        jQuery(b).css({
            width: f,
            height: j * r.length + s * r.length
        }),
        jQuery(w).css({
            width: f,
            height: j
        }),
        jQuery(".bwg_slideshow_image_wrap_" + _).css({
            width: t,
            height: v
        }),
        (Q = {
            width: t - f,
            height: v
        })[u] = f,
        jQuery(d).css(Q),
        jQuery(".bwg_slideshow_image_" + _).css({
            cssText: "max-width:" + (t - f) + "px !important; max-height:" + v + "px !important;"
        }),
        jQuery(".bwg_slideshow_embed_" + _).css({
            cssText: "width:" + (t - f) + "px !important; height:" + v + "px !important;"
        }),
        jQuery(".bwg_embed_frame_" + _).css({
            "max-width": t - f + "px",
            "max-height": v + "px"
        }),
        jQuery(".bwg_embed_frame_" + _).attr("data-width", t - f),
        jQuery(".bwg_embed_frame_" + _).attr("data-height", v),
        f < h && (h = f),
        jQuery(n).find(".bwg-icon-angle-up").css({
            "font-size": h
        }),
        jQuery(n).find(".bwg-icon-angle-down").css({
            "font-size": h
        })
    }
    o && (jQuery(n).find(".bwg-icon-angle-left").removeAttr("style"),
    jQuery(n).find(".bwg-icon-angle-right").removeAttr("style"),
    jQuery(n).find(".bwg-icon-angle-up").removeAttr("style"),
    jQuery(n).find(".bwg-icon-angle-down").removeAttr("style"))
}
function bwg_resize_slideshow_filmstrip_fix_dimension(e) {
    var t = e.bwg
      , i = e.parent_width
      , a = e.params
      , r = a.filmstrip_direction
      , _ = a.slideshow_filmstrip_width
      , s = a.slideshow_filmstrip_height
      , o = "#bwg_container1_" + t + " #bwg_container2_" + t
      , l = o + " .bwg_slideshow_image_wrap_" + t
      , n = o + " .bwg_slideshow_image_container_" + t
      , g = o + " .bwg_slideshow_image_" + t
      , b = o + " .bwg_slideshow_embed_" + t
      , w = l + " .bwg_slideshow_filmstrip_container_" + t
      , d = w + " .bwg_slideshow_filmstrip_" + t
      , u = i
      , h = u * (a.image_height / a.image_width);
    jQuery(l).css({
        width: u,
        height: h
    }),
    jQuery(n).css({
        width: u - ("horizontal" == r ? 0 : _),
        height: h - ("horizontal" == r ? s : 0)
    }),
    jQuery(g).css({
        display: "inline-block",
        "max-width": u - ("horizontal" == r ? 0 : _),
        "max-height": h - ("horizontal" == r ? s : 0)
    }),
    jQuery(b).css({
        cssText: "width: " + (u - ("horizontal" == r ? 0 : _)) + "px !important; height: " + (h - ("horizontal" == r ? s : 0) - 1) + "px !important;"
    }),
    bwg_resize_instagram_post(t),
    bwg_change_watermark_container(t),
    "horizontal" == r ? (jQuery(w).css({
        width: u
    }),
    jQuery(d).css({
        width: u - 40
    })) : (jQuery(w).css({
        height: h
    }),
    jQuery(d).css({
        height: h - 40
    }))
}
function bwg_calculate_slideshow_filmstrip_thumbnail_size(e) {
    var t = e.bwg
      , i = e.params
      , a = i.slideshow_filmstrip_width;
    if (2 == i.slideshow_filmstrip_type) {
        var r = "#bwg_container1_" + t + " #bwg_container2_" + t + " .bwg_slideshow_filmstrip_fix_count_" + t + " .bwg_slideshow_filmstrip_thumbnail_" + t;
        a = (i.left_or_top,
        "width" == i.width_or_height ? jQuery(r).width() : jQuery(r).height())
    }
    return parseFloat(a)
}
function bwg_move_dots(e) {
    var t = jQuery(".bwg_slideshow_dots_active_" + e).position().left
      , i = jQuery(".bwg_slideshow_dots_active_" + e).position().left + jQuery(".bwg_slideshow_dots_active_" + e).outerWidth(!0)
      , a = jQuery(".bwg_slideshow_dots_container_" + e).outerWidth(!0)
      , r = jQuery(".bwg_slideshow_dots_thumbnails_" + e).outerWidth(!1)
      , _ = jQuery(".bwg_slideshow_dots_thumbnails_" + e).position().left
      , s = Math.abs(jQuery(".bwg_slideshow_dots_thumbnails_" + e).position().left) + a;
    r < a || (t < Math.abs(_) ? jQuery(".bwg_slideshow_dots_thumbnails_" + e).animate({
        left: -t
    }, {
        duration: 500
    }) : s < i && jQuery(".bwg_slideshow_dots_thumbnails_" + e).animate({
        left: -(i - a)
    }, {
        duration: 500
    }))
}
function bwg_testBrowser_cssTransitions(e) {
    return bwg_testDom("Transition", e)
}
function bwg_testBrowser_cssTransforms3d(e) {
    return bwg_testDom("Perspective", e)
}
function bwg_testDom(e, t) {
    for (var i = ["", "Webkit", "Moz", "ms", "O", "Khtml"], a = i.length; a--; )
        if (void 0 !== document.body.style[i[a] + e])
            return !0;
    return !1
}
function bwg_fallback(e, t, i, a) {
    bwg_fade(e, t, i, a)
}
function bwg_fallback3d(e, t, i, a) {
    bwg_sliceV(e, t, i, a)
}
function bwg_none(e, t, i, a) {
    var r = void 0 !== a && "" !== a ? "_" + a : "";
    if (jQuery(e).css({
        opacity: 0,
        "z-index": 1
    }),
    jQuery(t).css({
        opacity: 1,
        "z-index": 2
    }),
    void 0 !== a && "" !== a) {
        var _ = bwg_params[a].bwg_current_key;
        bwg_change_watermark_container(a),
        jQuery(".bwg_slideshow_filmstrip_thumbnail" + r).removeClass("bwg_slideshow_thumb_active" + r).addClass("bwg_slideshow_thumb_deactive" + r),
        jQuery("#bwg_filmstrip_thumbnail_" + _ + r).removeClass("bwg_slideshow_thumb_deactive" + r).addClass("bwg_slideshow_thumb_active" + r),
        jQuery(".bwg_slideshow_dots" + r).removeClass("bwg_slideshow_dots_active" + r).addClass("bwg_slideshow_dots_deactive" + r),
        jQuery("#bwg_dots_" + _ + r).removeClass("bwg_slideshow_dots_deactive" + r).addClass("bwg_slideshow_dots_active" + r)
    } else
        jQuery(".bwg_image_info").show(),
        gallery_box_data.bwg_trans_in_progress = !1,
        jQuery(e).html(""),
        bwg_change_watermark_container()
}
function bwg_iterator(e) {
    var t = 1;
    return void 0 !== e && "" !== e && void 0 !== bwg_params[e] && 1 == bwg_params[e].enable_slideshow_shuffle && (t = Math.floor((bwg_params[e].data.length - 1) * Math.random() + 1)),
    t
}
function bwg_change_image_slideshow(e, t, i, a, r) {
    i = bwg_params[r].data;
    if (jQuery("#bwg_slideshow_image_container_" + r).find("iframe").each(function() {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"),
        jQuery(this)[0].contentWindow.postMessage('{ "method": "pause" }', "*"),
        jQuery(this)[0].contentWindow.postMessage("pause", "*")
    }),
    jQuery("#image_id_" + r + "_" + i[e].id).find(".bwg_fb_video").each(function() {
        jQuery(this).attr("src", jQuery(this).attr("src"))
    }),
    i[t]) {
        if (jQuery(".bwg_ctrl_btn_" + r).hasClass("bwg-icon-pause") && bwg_play(bwg_params[r].data, r),
        a || (jQuery("#bwg_current_image_key_" + r).val(t),
        "-1" == e ? e = jQuery(".bwg_slideshow_thumb_active_" + r).children("img").attr("image_key") : "-2" == e && (e = jQuery(".bwg_slideshow_dots_active_" + r).attr("image_key"))),
        bwg_params[r].bwg_trans_in_progress)
            return void bwg_params[r].event_stack.push(e + "-" + t);
        var _ = "right";
        if (t < e)
            _ = "left";
        else if (e == t)
            return;
        jQuery(".bwg_slideshow_watermark_" + r).css({
            display: "none"
        }),
        jQuery(".bwg_slideshow_title_text_" + r).css({
            display: "none"
        }),
        jQuery(".bwg_slideshow_description_text_" + r).css({
            display: "none"
        }),
        "width" == bwg_params[r].width_or_height ? bwg_params[r].bwg_current_filmstrip_pos = t * (jQuery(".bwg_slideshow_filmstrip_thumbnail_" + r).width() + 2 + 2 * bwg_params[r].lightbox_filmstrip_thumb_border_width) : bwg_params[r].bwg_current_filmstrip_pos = t * (jQuery(".bwg_slideshow_filmstrip_thumbnail_" + r).height() + 2 + 2 * bwg_params[r].lightbox_filmstrip_thumb_border_width),
        e = t,
        bwg_params[r].bwg_current_key = e,
        jQuery("#bwg_slideshow_image_" + r).attr("image_id", i[t].id),
        jQuery(".bwg_slideshow_title_text_" + r).html(jQuery('<span style="display: block;" />').html(i[t].alt).text()),
        jQuery(".bwg_slideshow_description_text_" + r).html(jQuery('<span style="display: block;" />').html(i[t].description).text());
        var s = 2 == jQuery(".bwg_slideshow_image_spun_" + r).css("zIndex") ? ".bwg_slideshow_image_spun_" + r : ".bwg_slideshow_image_second_spun_" + r
          , o = s == ".bwg_slideshow_image_second_spun_" + r ? ".bwg_slideshow_image_spun_" + r : ".bwg_slideshow_image_second_spun_" + r
          , l = -1 < i[t].filetype.indexOf("EMBED_")
          , n = -1 < i[t].filetype.indexOf("INSTAGRAM_POST")
          , g = -1 < i[t].filetype.indexOf("INSTAGRAM_VIDEO")
          , b = jQuery(s).height()
          , w = jQuery(s).width()
          , d = '<span class="bwg_slideshow_image_spun1_' + r + '" style="display:  ' + (l ? "block" : "table") + ' ;width: inherit; height: inherit;"><span class="bwg_slideshow_image_spun2_' + r + '" style="display: ' + (l ? "block" : "table-cell") + '; vertical-align: middle; text-align: center; ">';
        if (l) {
            if (d += '<span style="height: ' + b + "px; width: " + w + 'px;" class="bwg_popup_embed bwg_popup_watermark">',
            g && (d += '<span class="bwg_inst_play_btn_cont" onclick="bwg_play_instagram_video(this)"><span class="bwg_inst_play"></span></span>'),
            n) {
                var u = jQuery(".bwg_embed_frame")
                  , h = jQuery(".bwg_slideshow_image_container_" + r).width()
                  , m = jQuery(".bwg_slideshow_image_container_" + r).height()
                  , c = i[t].image_width
                  , p = i[t].image_height
                  , y = bwg_resizing_ratio(c, p, h, m);
                u.attr("data-width", h),
                u.attr("data-height", m);
                var f = y.width
                  , j = y.height;
                f < j ? f -= 109 : f += 109,
                d += spider_display_embed(i[t].filetype, decodeURIComponent(i[t].image_url), i[t].filename, {
                    class: "bwg_embed_frame",
                    "data-width": h,
                    "data-height": m,
                    "data-instagram-width": c,
                    "data-instagram-height": p,
                    style: "width: 100%; height: 100%; max-width: 100%; max-height: 100%; vertical-align:middle; display:inline-block; position:relative;"
                })
            } else
                d += spider_display_embed(i[t].filetype, decodeURIComponent(i[t].image_url), i[t].filename, {
                    class: "bwg_embed_frame",
                    frameborder: "0",
                    allowfullscreen: "allowfullscreen",
                    "data-max-width": w,
                    "data-max-height": b,
                    style: "width:inherit; height:inherit; vertical-align:middle; display:table-cell;"
                });
            d += "</span>"
        } else {
            if ("do_nothing" != bwg_params[r].thumb_click_action) {
                var Q = "";
                "open_lightbox" == bwg_params[r].thumb_click_action ? Q += ' class="bwg_lightbox" data-image-id="' + i[t].id + '" data-elementor-open-lightbox="no"' : "redirect_to_url" == bwg_params[r].thumb_click_action && i[t].redirect_url && (Q += 'href="' + i[t].redirect_url + '"' + (bwg_params[r].thumb_link_target && 1 == bwg_params[r].thumb_link_target ? ' target="_blank"' : "")),
                d += "<a " + Q + ">"
            }
            d += '<img style="max-height: ' + b + "px !important; max-width: " + w + 'px !important; display:inline-block;" ',
            d += ' class="bwg_slide bwg_slideshow_image_' + r + '" ',
            d += ' id="bwg_slideshow_image_' + r + '" ',
            d += ' src="' + bwg_params[r].upload_url + jQuery("<span style='display: block;' />").html(decodeURIComponent(i[t].image_url)).text() + '" alt="' + i[t].alt + '" image_id="' + i[t].id + '" /></a>'
        }
        d += "</span></span>",
        jQuery(o).html(d),
        bwg_params[r].preload_images && bwg_preload_images(t, r),
        window["bwg_" + bwg_params[r].slideshow_effect](s, o, _, r),
        1 == bwg_params[r].slideshow_filmstrip_type ? bwg_slideshow_filmstrip_fix_dimension(r) : 2 == bwg_params[r].slideshow_filmstrip_type ? bwg_slideshow_filmstrip_fix_count(r) : bwg_move_dots(r),
        i[t].is_embed_video ? jQuery("#bwg_slideshow_play_pause_" + r).css({
            display: "none"
        }) : jQuery("#bwg_slideshow_play_pause_" + r).css({
            display: ""
        })
    }
    bwg_add_lightbox();
    var v = "horizontal" == bwg_params[r].filmstrip_direction ? "table-cell" : "block"
      , x = jQuery(".bwg_slideshow_filmstrip_thumbnails_" + r + " .bwg_slideshow_thumb_active_" + r).prev()
      , k = jQuery(".bwg_slideshow_filmstrip_thumbnails_" + r + " .bwg_slideshow_thumb_active_" + r).next()
      , z = jQuery(".bwg_slideshow_filmstrip_container_" + r + " .bwg_slideshow_filmstrip_left_" + r)
      , C = jQuery(".bwg_slideshow_filmstrip_container_" + r + " .bwg_slideshow_filmstrip_left_disabled_" + r)
      , I = jQuery(".bwg_slideshow_filmstrip_container_" + r + " .bwg_slideshow_filmstrip_right_" + r)
      , E = jQuery(".bwg_slideshow_filmstrip_container_" + r + " .bwg_slideshow_filmstrip_right_disabled_" + r);
    x.length ? (z.css({
        display: v
    }),
    C.css({
        display: "none"
    })) : (z.css({
        display: "none"
    }),
    C.css({
        display: v
    }),
    I.css({
        display: v
    }),
    E.css({
        display: "none"
    })),
    k.length ? (I.css({
        display: v
    }),
    E.css({
        display: "none"
    })) : (I.css({
        display: "none"
    }),
    E.css({
        display: v
    }),
    z.css({
        display: v
    }),
    C.css({
        display: "none"
    })),
    void 0 !== i[t] && "EMBED_OEMBED_INSTAGRAM_POST" == i[t].filetype && "undefined" != typeof instgrm && void 0 !== instgrm.Embeds && (jQuery(".instagram-media").hide(),
    instgrm.Embeds.process(),
    jQuery(".instagram-media").css({
        "max-height": j + "px",
        "min-width": f + "px !important"
    }),
    jQuery(".instagram-media").show())
}
function bwg_preload_images_slideshow(e, t) {
    var i = bwg_params[t].data;
    count = bwg_params[t].preload_images_count / 2;
    var a = i.length;
    if (a < bwg_params[t].preload_images_count && (count = 0),
    0 != count)
        for (var r = e - count; r < e + count; r++) {
            var _ = parseInt((r + a) % a)
              , s = -1 < i[_].filetype.indexOf("EMBED_");
            void 0 !== i[_] && (s || jQuery("<img/>").attr("src", bwg_params[t].upload_url + jQuery('<span style="display: block;" />').html(decodeURIComponent(i[_].image_url)).text()))
        }
    else
        for (r = 0; r < i.length; r++) {
            s = -1 < i[r].filetype.indexOf("EMBED_");
            void 0 !== i[r] && (s || jQuery("<img/>").attr("src", bwg_params[t].upload_url + jQuery('<span style="display: block;" />').html(decodeURIComponent(i[r].image_url)).text()))
        }
}
function bwg_preload_images(e, t) {
    void 0 !== t && "" !== t ? bwg_preload_images_slideshow(e, t) : bwg_preload_images_lightbox(e)
}
function bwg_popup_resize_slidshow(e) {
    var t = ".bwg_slideshow_filmstrip_" + e;
    2 == bwg_params[e].slideshow_filmstrip_type && (t = ".bwg_slideshow_filmstrip_fix_count_" + e);
    var i = jQuery("#bwg_container1_" + e).parent();
    i.hasClass("content-area") && i.width(i.closest(".content-area").width()),
    i.hasClass("elementor-tab-content") && i.width(i.closest(".elementor-widget-wrap").width());
    var a = i.width()
      , r = bwg_params[e].data;
    if (a >= bwg_params[e].image_width) {
        jQuery(".bwg_slideshow_image_wrap_" + e).css({
            width: bwg_params[e].image_width
        }),
        jQuery(".bwg_slideshow_image_wrap_" + e).css({
            height: bwg_params[e].image_height
        }),
        jQuery(".bwg_slideshow_image_container_" + e).css({
            width: "horizontal" == bwg_params[e].filmstrip_direction ? bwg_params[e].image_width : bwg_params[e].image_width - bwg_params[e].slideshow_filmstrip_width
        }),
        jQuery(".bwg_slideshow_image_container_" + e).css({
            height: "horizontal" == bwg_params[e].filmstrip_direction ? bwg_params[e].image_height - bwg_params[e].slideshow_filmstrip_height : bwg_params[e].image_height
        }),
        jQuery(".bwg_slideshow_image_" + e).css({
            cssText: (bwg_params[e].filmstrip_direction,
            bwg_params[e].image_width)
        }),
        jQuery(".bwg_slideshow_embed_" + e).css({
            cssText: (bwg_params[e].filmstrip_direction,
            bwg_params[e].image_width)
        }),
        bwg_resize_instagram_post(e),
        bwg_change_watermark_container(e);
        var _ = "horizontal" == bwg_params[e].filmstrip_direction ? "width: " + bwg_params[e].image_width : "height: " + bwg_params[e].image_height
          , s = "horizontal" == bwg_params[e].filmstrip_direction ? "width: " + (bwg_params[e].image_width - 40) : "height: " + (bwg_params[e].image_height - 40);
        if (jQuery(".bwg_slideshow_filmstrip_container_" + e).css({
            cssText: _
        }),
        jQuery(t).css({
            cssText: s
        }),
        jQuery(".bwg_slideshow_dots_container_" + e).css({
            width: bwg_params[e].image_width
        }),
        jQuery("#bwg_slideshow_play_pause-ico_" + e).css({
            fontSize: bwg_params[e].slideshow_play_pause_btn_size
        }),
        "image" == bwg_params[e].watermark_type && jQuery(".bwg_slideshow_watermark_image_" + e).css({
            maxWidth: bwg_params[e].watermark_width,
            maxHeight: bwg_params[e].watermark_height
        }),
        "text" == bwg_params[e].watermark_type && jQuery(".bwg_slideshow_watermark_text_" + e + ", .bwg_slideshow_watermark_text_" + e + " :hover").css({
            fontSize: bwg_params[e].watermark_font_size
        }),
        jQuery(".bwg_slideshow_title_text_" + e).css({
            fontSize: 2 * bwg_params[e].slideshow_title_font_size
        }),
        jQuery(".bwg_slideshow_description_text_" + e).css({
            fontSize: 2 * bwg_params[e].slideshow_description_font_size
        }),
        2 == bwg_params[e].slideshow_filmstrip_type) {
            var o = bwg_params[e].filmstrip_direction
              , l = "#bwg_container1_" + e + " #bwg_container2_" + e;
            jQuery(l).removeAttr("style");
            var n = l + " .bwg_slideshow_filmstrip_container_" + e
              , g = bwg_params[e].slideshow_filmstrip_rl_btn_size
              , b = jQuery(".bwg_slideshow_filmstrip_fix_count_" + e).width();
            "horizontal" == o && (b = jQuery(".bwg_slideshow_filmstrip_fix_count_" + e).height());
            var w = "horizontal" == o ? "table-cell" : "block";
            jQuery(n).find(".bwg_slideshow_filmstrip_left_" + e).css({
                display: "none"
            }),
            jQuery(n).find(".bwg_slideshow_filmstrip_left_disabled_" + e).css({
                display: w
            }),
            jQuery(n).find(".bwg_slideshow_filmstrip_right_" + e).css({
                display: w
            }),
            jQuery(n).find(".bwg_slideshow_filmstrip_right_disabled_" + e).css({
                display: "none"
            }),
            b < g ? (g = b,
            jQuery(n).find(".bwg-icon-angle-left").css({
                "font-size": g
            }),
            jQuery(n).find(".bwg-icon-angle-right").css({
                "font-size": g
            }),
            jQuery(n).find(".bwg-icon-angle-up").css({
                "font-size": g
            }),
            jQuery(n).find(".bwg-icon-angle-down").css({
                "font-size": g
            })) : (jQuery(n).find(".bwg-icon-angle-left").removeAttr("style"),
            jQuery(n).find(".bwg-icon-angle-right").removeAttr("style"),
            jQuery(n).find(".bwg-icon-angle-up").removeAttr("style"),
            jQuery(n).find(".bwg-icon-angle-down").removeAttr("style"));
            var d = l + " .bwg_slideshow_filmstrip_thumbnails_" + e;
            jQuery(d).removeAttr("style"),
            jQuery(d + " .bwg_slideshow_filmstrip_thumbnail_" + e).each(function(e, t) {
                jQuery(t).attr("style", jQuery(t).attr("data-style")),
                jQuery(t).find("img").attr("style", jQuery(t).attr("data-style"))
            });
            var u = "#bwg_container1_" + e + " #bwg_container2_" + e + " .bwg_slideshow_image_container_" + e
              , h = (jQuery(u).data("filmstrip-position"),
            jQuery(u).data("filmstrip-size"));
            jQuery(u).css({
                filmstrip_position: h
            });
            var m = "bwg_slideshow_filmstrip_thumbnail_" + e;
            window.bwg_slideshow_filmstrip_thumb[m].next_prev_index && (window.bwg_slideshow_filmstrip_thumb[m].next_prev_index = 0)
        }
    } else
        1 == bwg_params[e].slideshow_filmstrip_type && bwg_resize_slideshow_filmstrip_fix_dimension({
            bwg: e,
            params: bwg_params[e],
            parent_width: a
        }),
        2 == bwg_params[e].slideshow_filmstrip_type && bwg_resize_slideshow_filmstrip_fix_count({
            bwg: e,
            params: bwg_params[e],
            parent_width: a
        }),
        0 == bwg_params[e].slideshow_filmstrip_type && (jQuery(".bwg_slideshow_image_wrap_" + e).css({
            width: a,
            height: a * bwg_params[e].image_height / bwg_params[e].image_width
        }),
        jQuery(".bwg_slideshow_image_container_" + e).css({
            width: a - ("horizontal" == bwg_params[e].filmstrip_direction ? 0 : bwg_params[e].slideshow_filmstrip_width),
            height: a * bwg_params[e].image_height / bwg_params[e].image_width - ("horizontal" == bwg_params[e].filmstrip_direction ? bwg_params[e].slideshow_filmstrip_height : 0)
        }),
        jQuery(".bwg_slideshow_image_" + e).css({
            cssText: "max-width: " + (a - ("horizontal" == bwg_params[e].filmstrip_direction ? 0 : bwg_params[e].slideshow_filmstrip_width)) + "px !important; max-height: " + (a * (bwg_params[e].image_height / bwg_params[e].image_width) - ("horizontal" == bwg_params[e].filmstrip_direction ? bwg_params[e].slideshow_filmstrip_height : 0) - 1) + "px !important;"
        }),
        jQuery(".bwg_embed_frame_" + e + ", .bwg_slideshow_embed_" + e).css({
            "max-width": a + "px",
            "max-height": a * (bwg_params[e].image_height / bwg_params[e].image_width) - ("horizontal" == bwg_params[e].filmstrip_direction ? bwg_params[e].slideshow_filmstrip_height : 0) - 1 + "px"
        }),
        jQuery(".bwg_embed_frame_" + e).attr("data-width", a),
        jQuery(".bwg_embed_frame_" + e).attr("data-height", a * (bwg_params[e].image_height / bwg_params[e].image_width) - ("horizontal" == bwg_params[e].filmstrip_direction ? bwg_params[e].slideshow_filmstrip_height : 0) - 1)),
        jQuery(".bwg_slideshow_dots_container_" + e).css({
            width: a
        }),
        jQuery("#bwg_slideshow_play_pause-ico_" + e).css({
            fontSize: a * (bwg_params[e].slideshow_play_pause_btn_size / bwg_params[e].image_width)
        }),
        jQuery(".bwg_slideshow_watermark_image_" + e).css({
            maxWidth: a * (bwg_params[e].watermark_width / bwg_params[e].image_width),
            maxHeight: a * (bwg_params[e].watermark_height / bwg_params[e].image_width)
        }),
        jQuery(".bwg_slideshow_watermark_text_" + e + ", .bwg_slideshow_watermark_text_" + e + ":hover").css({
            fontSize: a * (bwg_params[e].watermark_font_size / bwg_params[e].image_width)
        }),
        jQuery(".bwg_slideshow_title_text_" + e).css({
            fontSize: 2 * a * bwg_params[e].slideshow_title_font_size / bwg_params[e].image_width
        }),
        jQuery(".bwg_slideshow_description_text_" + e).css({
            fontSize: 2 * a * bwg_params[e].slideshow_description_font_size / bwg_params[e].image_width
        });
    var c = jQuery(".bwg_slide_container_" + e)
      , p = c.width()
      , y = c.height();
    jQuery(".bwg_popup_embed").css({
        width: p + "px",
        height: y + "px"
    }),
    r[parseInt(jQuery("#bwg_current_image_key_" + e).val())].is_embed_video ? jQuery("#bwg_slideshow_play_pause_" + e).css({
        display: "none"
    }) : jQuery("#bwg_slideshow_play_pause_" + e).css({
        display: ""
    })
}
function bwg_popup_resize(e) {
    void 0 !== e && "" !== e ? bwg_popup_resize_slidshow(e) : bwg_popup_resize_lightbox()
}
function bwg_change_image(e, t, i, a, r) {
    void 0 !== r && "" !== r ? bwg_change_image_slideshow(e, t, i, a, r) : bwg_change_image_lightbox(e, t, i = gallery_box_data.data, a)
}
function bwg_resize_instagram_post(e) {
    var t = !1;
    if (void 0 !== e && "" !== e) {
        if (jQuery(".inner_instagram_iframe_bwg_embed_frame_" + e).length) {
            t = !0;
            var i = jQuery("#instagram-embed-" + e)
              , a = jQuery(".bwg_slideshow_embed_" + e)
              , r = jQuery(".bwg_embed_frame_" + e)
              , _ = void 0 !== a.width() ? a.width() : jQuery(".bwg_slideshow_embed_" + e).width()
              , s = void 0 !== a.height() ? a.height() : jQuery(".bwg_slideshow_embed_" + e).height()
              , o = r.data("instagram-width")
              , l = r.data("instagram-height");
            bwg_change_watermark_container(e)
        }
    } else if (jQuery(".inner_instagram_iframe_bwg_embed_frame").length) {
        t = !0;
        i = jQuery(".instagram-media"),
        r = jQuery(".bwg_embed_frame"),
        _ = jQuery(".bwg_image_container").width(),
        s = jQuery(".bwg_image_container").height(),
        o = r.data("instagram-width"),
        l = r.data("instagram-height");
        bwg_change_watermark_container()
    }
    if (!0 === t) {
        var n = bwg_resizing_ratio(o, l, _, s);
        r.attr("data-width", _),
        r.attr("data-height", s);
        var g = n.width;
        g < n.height ? g -= 109 : g += 109,
        r.css({
            width: "100%",
            height: "100%",
            "max-width": _,
            "max-height": s
        }),
        i.css({
            "min-width": g + "px !important",
            "max-height": s + "px"
        })
    }
}
function bwg_play(t, i) {
    if (void 0 !== i && "" !== i)
        t = bwg_params[i].data;
    void 0 !== i && "" !== i ? (window.clearInterval(window["bwg_playInterval" + i]),
    window["bwg_playInterval" + i] = setInterval(function() {
        var e = 1;
        1 == bwg_params[i].enable_slideshow_shuffle && (e = Math.floor((t.length - 1) * Math.random() + 1)),
        bwg_change_image(parseInt(jQuery("#bwg_current_image_key_" + i).val()), (parseInt(jQuery("#bwg_current_image_key_" + i).val()) + e) % t.length, t, "", i)
    }, 1e3 * bwg_params[i].slideshow_interval)) : (window.clearInterval(gallery_box_data.bwg_playInterval),
    gallery_box_data.bwg_playInterval = setInterval(function() {
        jQuery(".bwg_comment_container").hasClass("bwg_open") || jQuery(".bwg_play_pause").length && jQuery(".bwg_play_pause").hasClass("bwg-icon-play") || (void 0 === t || void 0 !== t[parseInt(jQuery("#bwg_current_image_key").val()) + 1] ? bwg_change_image(parseInt(jQuery("#bwg_current_image_key").val()), parseInt(jQuery("#bwg_current_image_key").val()) + 1) : 1 == gallery_box_data.enable_loop && bwg_change_image(parseInt(jQuery("#bwg_current_image_key").val()), 0))
    }, 1e3 * gallery_box_data.slideshow_interval))
}
function bwg_image_browser(e) {
    if (jQuery("#bwg_embed_frame_16x9_" + e).width(jQuery("#bwg_embed_frame_16x9_" + e).parents(".image_browser_image_buttons_" + e).width()),
    jQuery("#bwg_embed_frame_16x9_" + e).height(.5625 * jQuery("#bwg_embed_frame_16x9_" + e).width()),
    jQuery("#bwg_embed_frame_instapost_" + e).width(jQuery("#bwg_embed_frame_16x9_" + e).parents(".image_browser_image_buttons_" + e).width()),
    jQuery(".image_browser_images_conteiner_" + e).find(".fluid-width-video-wrapper").length) {
        var t = jQuery(".image_browser_images_conteiner_" + e).find(".fluid-width-video-wrapper").contents();
        jQuery(".image_browser_images_conteiner_" + e).find(".fluid-width-video-wrapper").replaceWith(t)
    }
    var i = (jQuery(".bwg_embed_frame_instapost_" + e).width() - 16) * jQuery(".bwg_embed_frame_instapost_" + e).attr("data-height") / jQuery(".bwg_embed_frame_instapost_" + e).attr("data-width") + 96;
    jQuery(".bwg_embed_frame_instapost_" + e).height(i),
    jQuery(".inner_instagram_iframe_bwg_embed_frame_instapost_" + e).find('iframe[id^="instagram-embed-"]').css({
        "max-height": i + "px"
    });
    var a = jQuery(".image_browser_images_" + e).width();
    a <= 108 ? jQuery(".paging-input_" + e).css("display", "none") : (a <= 200 ? (jQuery(".paging-input_" + e).css("margin", "0% 0% 0% 0%"),
    jQuery(".paging-input_" + e).css("display", "inline")) : a <= 580 ? (jQuery(".paging-input_" + e).css("display", "inline"),
    jQuery(".tablenav-pages_" + e + " a").css("font-size", "13px"),
    jQuery(".paging-input_" + e).css("margin", "0% 7% 0% 7%")) : (jQuery(".tablenav-pages_" + e + " a").css("font-size", "15px"),
    jQuery(".paging-input_" + e).css("margin", "0%  14% 0%  14%"),
    jQuery(".paging-input_" + e).css("display", "inline")),
    jQuery(".tablenav-pages_" + e + " .next-page").css("margin", "0% 0% 0% 0%"),
    jQuery(".tablenav-pages_" + e + " .prev-page").css("margin", "0% 0% 0% 0%"))
}
function bwg_disable_right_click(e) {
    e.bind("contextmenu", function() {
        return !1
    }),
    e.css("webkitTouchCallout", "none")
}
function bwg_resizing_ratio(e, t, i, a) {
    var r = [i / e, a / t];
    return {
        width: e * (r = Math.min(r[0], r[1])),
        height: t * r
    }
}
function bwg_slideshow_filmstrip_next(e) {
    var t = e.bwg
      , i = e.params
      , a = e.slideshow_filmstrip_class_name
      , r = bwg_calculate_slideshow_filmstrip_thumbnail_size({
        bwg: t,
        params: i
    })
      , _ = "bwg_slideshow_filmstrip_thumbnail_" + t
      , s = "#bwg_container1_" + t + " #bwg_container2_" + t + " .bwg_slideshow_filmstrip_left_" + t
      , o = "#bwg_container1_" + t + " #bwg_container2_" + t + " .bwg_slideshow_filmstrip_left_disabled_" + t
      , l = "#bwg_container1_" + t + " #bwg_container2_" + t + " .bwg_slideshow_filmstrip_right_" + t
      , n = "#bwg_container1_" + t + " #bwg_container2_" + t + " .bwg_slideshow_filmstrip_right_disabled_" + t
      , g = "horizontal" == i.filmstrip_direction ? "table-cell" : "block";
    "left" == i.left_or_top ? "width" == i.width_or_height ? (jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left >= -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).width() - jQuery(a).width()) && (jQuery(s).css({
        display: g
    }),
    jQuery(o).css({
        display: "none"
    }),
    jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left < -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).width() - jQuery(a).width() - (parseInt(i.filmstrip_thumb_margin_hor) + r)) ? jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        left: -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).width() - jQuery(a).width())
    }, 500, "linear") : jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        left: jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left - (parseInt(i.filmstrip_thumb_margin_hor) + r)
    }, 500, "linear")),
    window.setTimeout(function() {
        parseInt(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left) == -parseInt(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).width() - jQuery(a).width()) ? (jQuery(l).css({
            display: "none"
        }),
        jQuery(n).css({
            display: g
        })) : (jQuery(l).css({
            display: g
        }),
        jQuery(n).css({
            display: "none"
        }))
    }, 510)) : (jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left >= -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).height() - jQuery(a).height()) && (jQuery(s).css({
        display: g
    }),
    jQuery(o).css({
        display: "none"
    }),
    jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left < -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).height() - jQuery(a).height() - (parseInt(i.filmstrip_thumb_margin_hor) + r)) ? jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        left: -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).height() - jQuery(a).height())
    }, 500, "linear") : jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        left: jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left - (parseInt(i.filmstrip_thumb_margin_hor) + r)
    }, 500, "linear")),
    window.setTimeout(function() {
        parseInt(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left) == -parseInt(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).height() - jQuery(a).height()) ? (jQuery(l).css({
            display: "none"
        }),
        jQuery(n).css({
            display: g
        })) : (jQuery(l).css({
            display: g
        }),
        jQuery(n).css({
            display: "none"
        }))
    }, 510)) : "width" == i.width_or_height ? (jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top >= -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).width() - jQuery(a).width()) && (jQuery(s).css({
        display: g
    }),
    jQuery(o).css({
        display: "none"
    }),
    jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top < -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).width() - jQuery(a).width() - parseInt(i.filmstrip_thumb_margin_hor) + r) ? jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        top: -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).width() - jQuery(a).width())
    }, 500, "linear") : jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        top: jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top - parseInt(i.filmstrip_thumb_margin_hor) + r
    }, 500, "linear")),
    window.setTimeout(function() {
        parseInt(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top) == -parseInt(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).width() - jQuery(a).width()) ? (jQuery(l).css({
            display: "none"
        }),
        jQuery(n).css({
            display: g
        })) : (jQuery(l).css({
            display: g
        }),
        jQuery(n).css({
            display: "none"
        }))
    }, 510)) : (jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top >= -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).height() - jQuery(a).height()) && (jQuery(s).css({
        display: g
    }),
    jQuery(o).css({
        display: "none"
    }),
    jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top < -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).height() - jQuery(a).height() - (parseInt(i.filmstrip_thumb_margin_hor) + r)) ? jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        top: -(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).height() - jQuery(a).height())
    }, 500, "linear") : jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        top: jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top - (parseInt(i.filmstrip_thumb_margin_hor) + r)
    }, 500, "linear")),
    window.setTimeout(function() {
        parseInt(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top) == -parseInt(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).height() - jQuery(a).height()) ? (jQuery(l).css({
            display: "none"
        }),
        jQuery(n).css({
            display: g
        })) : (jQuery(l).css({
            display: g
        }),
        jQuery(n).css({
            display: "none"
        }))
    }, 510)),
    bwg_slideshow_filmstrip_thumb[_].next_prev_index = bwg_slideshow_filmstrip_thumb[_].next_prev_index + 1
}
function bwg_slideshow_filmstrip_prev(e) {
    var t = e.bwg
      , i = e.params
      , a = bwg_calculate_slideshow_filmstrip_thumbnail_size({
        bwg: t,
        params: i
    })
      , r = "bwg_slideshow_filmstrip_thumbnail_" + t
      , _ = "#bwg_container1_" + t + " #bwg_container2_" + t + " .bwg_slideshow_filmstrip_left_" + t
      , s = "#bwg_container1_" + t + " #bwg_container2_" + t + " .bwg_slideshow_filmstrip_left_disabled_" + t
      , o = "#bwg_container1_" + t + " #bwg_container2_" + t + " .bwg_slideshow_filmstrip_right_" + t
      , l = "#bwg_container1_" + t + " #bwg_container2_" + t + " .bwg_slideshow_filmstrip_right_disabled_" + t
      , n = "horizontal" == i.filmstrip_direction ? "table-cell" : "block";
    "left" == i.left_or_top ? (jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left < 0 && (jQuery(o).css({
        display: n
    }),
    jQuery(l).css({
        display: "none"
    }),
    jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left > -(i.filmstrip_thumb_margin_hor + a) ? jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        left: 0
    }, 500, "linear") : jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        left: jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left + parseInt(i.filmstrip_thumb_margin_hor) + a
    }, 500, "linear")),
    window.setTimeout(function() {
        0 == parseInt(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().left) ? (jQuery(_).css({
            display: "none"
        }),
        jQuery(s).css({
            display: n
        })) : (jQuery(_).css({
            display: n
        }),
        jQuery(s).css({
            display: "none"
        }))
    }, 510)) : (jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top < 0 && (jQuery(o).css({
        display: n
    }),
    jQuery(l).css({
        display: "none"
    }),
    jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top > -(i.filmstrip_thumb_margin_hor + a) ? jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        top: 0
    }, 500, "linear") : jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).animate({
        top: jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top + parseInt(i.filmstrip_thumb_margin_hor) + a
    }, 500, "linear")),
    window.setTimeout(function() {
        0 == parseInt(jQuery(".bwg_slideshow_filmstrip_thumbnails_" + t).position().top) ? (jQuery(_).css({
            display: "none"
        }),
        jQuery(s).css({
            display: n
        })) : (jQuery(_).css({
            display: n
        }),
        jQuery(s).css({
            display: "none"
        }))
    }, 510)),
    bwg_slideshow_filmstrip_thumb[r].next_prev_index = bwg_slideshow_filmstrip_thumb[r].next_prev_index - 1
}
jQuery(function() {
    isMobile && (jQuery(".bwg-container.bwg-standard-thumbnails .bwg-title1, .bwg-container.bwg-masonry-thumbnails .bwg-title1, .bwg-mosaic-thumbnails").css("opacity", "1"),
    jQuery(".bwg-zoom-effect .bwg-zoom-effect-overlay, .bwg-zoom-effect-overlay > span").css({
        opacity: 1,
        "background-color": "unset"
    }))
}),
jQuery(function() {
    function i(e) {
        bwg_slideshow_blur(e),
        bwg_carousel_blur(e),
        0 < jQuery(".bwg_play_pause").length && window.clearInterval(gallery_box_data.bwg_playInterval)
    }
    function a(e) {
        e && bwg_main_ready(e),
        bwg_slideshow_focus(),
        bwg_carousel_focus(),
        jQuery(".bwg_play_pause").length && jQuery(".bwg_play_pause").hasClass("bwg-icon-play") && !jQuery(".bwg_comment_container").hasClass("bwg_open") && bwg_play(gallery_box_data.data)
    }
    var r = !1;
    jQuery(".bwg_container").each(function() {
        if (0 < jQuery(this).find(".wd_error").length && (r = !0),
        !r) {
            var e = jQuery(this);
            if (e[0].offsetHeight)
                var t = 0;
            else
                t = 1;
            setInterval(function() {
                e[0].offsetHeight ? 1 == t && (t = 0,
                a(e)) : 0 == t && i(!(t = 1))
            }, 200)
        }
    }),
    r || jQuery(window).focus(function() {
        a()
    }).blur(function() {
        i(!0)
    })
}),
jQuery(window).on("resize", function() {
    setTimeout(function() {
        var e = !1;
        jQuery(".bwg_container").each(function() {
            0 < jQuery(this).find(".wd_error").length && (e = !0)
        }),
        bwg_tags_button_section_visibility(),
        e || (jQuery(".bwg-thumbnails, .bwg-masonry-thumbnails, .bwg-album-thumbnails").each(function() {
            bwg_all_thumnails_loaded(this)
        }),
        bwg_slideshow_resize(),
        bwg_image_browser_resize(),
        bwg_carousel_resize(),
        bwg_blog_style_resize(),
        jQuery(".bwg-mosaic-thumbnails").each(function() {
            bwg_thumbnail_mosaic(this)
        })),
        bwg_resize_search_line()
    }, 0)
}),
jQuery(window).on("load", function() {
    var e = !1;
    jQuery(".bwg_container").each(function() {
        0 < jQuery(this).find(".wd_error").length && (e = !0)
    }),
    e || (bwg_blog_style_onload(),
    jQuery(".bwg-mosaic-thumbnails").each(function() {
        bwg_thumbnail_mosaic(this)
    }))
}),
jQuery(".bwg-masonry-thumb-span img, .bwg-mosaic-thumb-span img").on("error", function() {
    jQuery(this).height(100),
    jQuery(this).width(100)
});
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(a, n, f) {
    a instanceof String && (a = String(a));
    for (var p = a.length, k = 0; k < p; k++) {
        var b = a[k];
        if (n.call(f, b, k, a))
            return {
                i: k,
                v: b
            }
    }
    return {
        i: -1,
        v: void 0
    }
}
;
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, n, f) {
    a != Array.prototype && a != Object.prototype && (a[n] = f.value)
}
;
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
}
;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, n, f, p) {
    if (n) {
        f = $jscomp.global;
        a = a.split(".");
        for (p = 0; p < a.length - 1; p++) {
            var k = a[p];
            k in f || (f[k] = {});
            f = f[k]
        }
        a = a[a.length - 1];
        p = f[a];
        n = n(p);
        n != p && null != n && $jscomp.defineProperty(f, a, {
            configurable: !0,
            writable: !0,
            value: n
        })
    }
}
;
$jscomp.polyfill("Array.prototype.find", function(a) {
    return a ? a : function(a, f) {
        return $jscomp.findInternal(this, a, f).v
    }
}, "es6", "es3");
(function(a, n, f) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : "object" === typeof exports && "undefined" === typeof Meteor ? module.exports = a(require("jquery")) : a(n || f)
}
)(function(a) {
    var n = function(b, d, e) {
        var c = {
            invalid: [],
            getCaret: function() {
                try {
                    var a = 0
                      , r = b.get(0)
                      , h = document.selection
                      , d = r.selectionStart;
                    if (h && -1 === navigator.appVersion.indexOf("MSIE 10")) {
                        var e = h.createRange();
                        e.moveStart("character", -c.val().length);
                        a = e.text.length
                    } else if (d || "0" === d)
                        a = d;
                    return a
                } catch (C) {}
            },
            setCaret: function(a) {
                try {
                    if (b.is(":focus")) {
                        var c = b.get(0);
                        if (c.setSelectionRange)
                            c.setSelectionRange(a, a);
                        else {
                            var g = c.createTextRange();
                            g.collapse(!0);
                            g.moveEnd("character", a);
                            g.moveStart("character", a);
                            g.select()
                        }
                    }
                } catch (B) {}
            },
            events: function() {
                b.on("keydown.mask", function(a) {
                    b.data("mask-keycode", a.keyCode || a.which);
                    b.data("mask-previus-value", b.val());
                    b.data("mask-previus-caret-pos", c.getCaret());
                    c.maskDigitPosMapOld = c.maskDigitPosMap
                }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        b.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    b.data("changed", !0)
                }).on("blur.mask", function() {
                    f === c.val() || b.data("changed") || b.trigger("change");
                    b.data("changed", !1)
                }).on("blur.mask", function() {
                    f = c.val()
                }).on("focus.mask", function(b) {
                    !0 === e.selectOnFocus && a(b.target).select()
                }).on("focusout.mask", function() {
                    e.clearIfNotMatch && !k.test(c.val()) && c.val("")
                })
            },
            getRegexMask: function() {
                for (var a = [], b, c, e, t, f = 0; f < d.length; f++)
                    (b = l.translation[d.charAt(f)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""),
                    e = b.optional,
                    (b = b.recursive) ? (a.push(d.charAt(f)),
                    t = {
                        digit: d.charAt(f),
                        pattern: c
                    }) : a.push(e || b ? c + "?" : c)) : a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                a = a.join("");
                t && (a = a.replace(new RegExp("(" + t.digit + "(.*" + t.digit + ")?)"), "($1)?").replace(new RegExp(t.digit,"g"), t.pattern));
                return new RegExp(a)
            },
            destroyEvents: function() {
                b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            },
            val: function(a) {
                var c = b.is("input") ? "val" : "text";
                if (0 < arguments.length) {
                    if (b[c]() !== a)
                        b[c](a);
                    c = b
                } else
                    c = b[c]();
                return c
            },
            calculateCaretPosition: function(a) {
                var d = c.getMasked()
                  , h = c.getCaret();
                if (a !== d) {
                    var e = b.data("mask-previus-caret-pos") || 0;
                    d = d.length;
                    var g = a.length, f = a = 0, l = 0, k = 0, m;
                    for (m = h; m < d && c.maskDigitPosMap[m]; m++)
                        f++;
                    for (m = h - 1; 0 <= m && c.maskDigitPosMap[m]; m--)
                        a++;
                    for (m = h - 1; 0 <= m; m--)
                        c.maskDigitPosMap[m] && l++;
                    for (m = e - 1; 0 <= m; m--)
                        c.maskDigitPosMapOld[m] && k++;
                    h > g ? h = 10 * d : e >= h && e !== g ? c.maskDigitPosMapOld[h] || (e = h,
                    h = h - (k - l) - a,
                    c.maskDigitPosMap[h] && (h = e)) : h > e && (h = h + (l - k) + f)
                }
                return h
            },
            behaviour: function(d) {
                d = d || window.event;
                c.invalid = [];
                var e = b.data("mask-keycode");
                if (-1 === a.inArray(e, l.byPassKeys)) {
                    e = c.getMasked();
                    var h = c.getCaret()
                      , g = b.data("mask-previus-value") || "";
                    setTimeout(function() {
                        c.setCaret(c.calculateCaretPosition(g))
                    }, a.jMaskGlobals.keyStrokeCompensation);
                    c.val(e);
                    c.setCaret(h);
                    return c.callbacks(d)
                }
            },
            getMasked: function(a, b) {
                var h = []
                  , f = void 0 === b ? c.val() : b + ""
                  , g = 0
                  , k = d.length
                  , n = 0
                  , p = f.length
                  , m = 1
                  , r = "push"
                  , u = -1
                  , w = 0;
                b = [];
                if (e.reverse) {
                    r = "unshift";
                    m = -1;
                    var x = 0;
                    g = k - 1;
                    n = p - 1;
                    var A = function() {
                        return -1 < g && -1 < n
                    }
                } else
                    x = k - 1,
                    A = function() {
                        return g < k && n < p
                    }
                    ;
                for (var z; A(); ) {
                    var y = d.charAt(g)
                      , v = f.charAt(n)
                      , q = l.translation[y];
                    if (q)
                        v.match(q.pattern) ? (h[r](v),
                        q.recursive && (-1 === u ? u = g : g === x && g !== u && (g = u - m),
                        x === u && (g -= m)),
                        g += m) : v === z ? (w--,
                        z = void 0) : q.optional ? (g += m,
                        n -= m) : q.fallback ? (h[r](q.fallback),
                        g += m,
                        n -= m) : c.invalid.push({
                            p: n,
                            v: v,
                            e: q.pattern
                        }),
                        n += m;
                    else {
                        if (!a)
                            h[r](y);
                        v === y ? (b.push(n),
                        n += m) : (z = y,
                        b.push(n + w),
                        w++);
                        g += m
                    }
                }
                a = d.charAt(x);
                k !== p + 1 || l.translation[a] || h.push(a);
                h = h.join("");
                c.mapMaskdigitPositions(h, b, p);
                return h
            },
            mapMaskdigitPositions: function(a, b, d) {
                a = e.reverse ? a.length - d : 0;
                c.maskDigitPosMap = {};
                for (d = 0; d < b.length; d++)
                    c.maskDigitPosMap[b[d] + a] = 1
            },
            callbacks: function(a) {
                var g = c.val()
                  , h = g !== f
                  , k = [g, a, b, e]
                  , l = function(a, b, c) {
                    "function" === typeof e[a] && b && e[a].apply(this, c)
                };
                l("onChange", !0 === h, k);
                l("onKeyPress", !0 === h, k);
                l("onComplete", g.length === d.length, k);
                l("onInvalid", 0 < c.invalid.length, [g, a, b, c.invalid, e])
            }
        };
        b = a(b);
        var l = this, f = c.val(), k;
        d = "function" === typeof d ? d(c.val(), void 0, b, e) : d;
        l.mask = d;
        l.options = e;
        l.remove = function() {
            var a = c.getCaret();
            l.options.placeholder && b.removeAttr("placeholder");
            b.data("mask-maxlength") && b.removeAttr("maxlength");
            c.destroyEvents();
            c.val(l.getCleanVal());
            c.setCaret(a);
            return b
        }
        ;
        l.getCleanVal = function() {
            return c.getMasked(!0)
        }
        ;
        l.getMaskedVal = function(a) {
            return c.getMasked(!1, a)
        }
        ;
        l.init = function(g) {
            g = g || !1;
            e = e || {};
            l.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
            l.byPassKeys = a.jMaskGlobals.byPassKeys;
            l.translation = a.extend({}, a.jMaskGlobals.translation, e.translation);
            l = a.extend(!0, {}, l, e);
            k = c.getRegexMask();
            if (g)
                c.events(),
                c.val(c.getMasked());
            else {
                e.placeholder && b.attr("placeholder", e.placeholder);
                b.data("mask") && b.attr("autocomplete", "off");
                g = 0;
                for (var f = !0; g < d.length; g++) {
                    var h = l.translation[d.charAt(g)];
                    if (h && h.recursive) {
                        f = !1;
                        break
                    }
                }
                f && b.attr("maxlength", d.length).data("mask-maxlength", !0);
                c.destroyEvents();
                c.events();
                g = c.getCaret();
                c.val(c.getMasked());
                c.setCaret(g)
            }
        }
        ;
        l.init(!b.is("input"))
    };
    a.maskWatchers = {};
    var f = function() {
        var b = a(this)
          , d = {}
          , e = b.attr("data-mask");
        b.attr("data-mask-reverse") && (d.reverse = !0);
        b.attr("data-mask-clearifnotmatch") && (d.clearIfNotMatch = !0);
        "true" === b.attr("data-mask-selectonfocus") && (d.selectOnFocus = !0);
        if (p(b, e, d))
            return b.data("mask", new n(this,e,d))
    }
      , p = function(b, d, e) {
        e = e || {};
        var c = a(b).data("mask")
          , f = JSON.stringify;
        b = a(b).val() || a(b).text();
        try {
            return "function" === typeof d && (d = d(b)),
            "object" !== typeof c || f(c.options) !== f(e) || c.mask !== d
        } catch (w) {}
    }
      , k = function(a) {
        var b = document.createElement("div");
        a = "on" + a;
        var e = a in b;
        e || (b.setAttribute(a, "return;"),
        e = "function" === typeof b[a]);
        return e
    };
    a.fn.mask = function(b, d) {
        d = d || {};
        var e = this.selector
          , c = a.jMaskGlobals
          , f = c.watchInterval;
        c = d.watchInputs || c.watchInputs;
        var k = function() {
            if (p(this, b, d))
                return a(this).data("mask", new n(this,b,d))
        };
        a(this).each(k);
        e && "" !== e && c && (clearInterval(a.maskWatchers[e]),
        a.maskWatchers[e] = setInterval(function() {
            a(document).find(e).each(k)
        }, f));
        return this
    }
    ;
    a.fn.masked = function(a) {
        return this.data("mask").getMaskedVal(a)
    }
    ;
    a.fn.unmask = function() {
        clearInterval(a.maskWatchers[this.selector]);
        delete a.maskWatchers[this.selector];
        return this.each(function() {
            var b = a(this).data("mask");
            b && b.remove().removeData("mask")
        })
    }
    ;
    a.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    }
    ;
    a.applyDataMask = function(b) {
        b = b || a.jMaskGlobals.maskElements;
        (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)
    }
    ;
    k = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        keyStrokeCompensation: 10,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && k("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    a.jMaskGlobals = a.jMaskGlobals || {};
    k = a.jMaskGlobals = a.extend(!0, {}, k, a.jMaskGlobals);
    k.dataMask && a.applyDataMask();
    setInterval(function() {
        a.jMaskGlobals.watchDataMask && a.applyDataMask()
    }, k.watchInterval)
}, window.jQuery, window.Zepto);
(function($) {
    var fmeMasks = {
        'ev-tel': '0000-0000',
        'ev-tel-ddd': '(00) 0000-0000',
        'ev-tel-ddd9': '(00) 00000-0000',
        'ev-tel-us': '(000) 000-0000',
        'ev-cpf': '000.000.000-00',
        'ev-cnpj': '00.000.000/0000-00',
        'ev-money': '000.000.000.000.000,00',
        'ev-ccard': '0000-0000-0000-0000',
        'ev-ccard-valid': '00/00',
        'ev-cep': '00000-000',
        'ev-time': '00:00:00',
        'ev-date': '00/00/0000',
        'ev-date_time': '00/00/0000 00:00:00'
    };
    $(window).on('load', function() {
        "use strict";
        $('.fme-mask-input').each(function() {
            if ($(this).data('fme-mask') !== undefined) {
                var inputMask = $(this).data("fme-mask");
                if (inputMask == 'ev-cpf' || inputMask == 'ev-cnpj' || inputMask == 'ev-money') {
                    $(this).mask(fmeMasks[inputMask], {
                        reverse: true
                    });
                } else {
                    $(this).mask(fmeMasks[inputMask]);
                }
            }
        });
        jQuery(document).on('elementor/popup/show', ()=>{
            $('.fme-mask-input').each(function() {
                if ($(this).data("fme-mask") !== undefined) {
                    var inputMask = $(this).data("fme-mask");
                    if (inputMask == 'ev-cpf' || inputMask == 'ev-cnpj' || inputMask == 'ev-money') {
                        $(this).mask(fmeMasks[inputMask], {
                            reverse: true
                        });
                    } else {
                        $(this).mask(fmeMasks[inputMask]);
                    }
                }
            });
        }
        );
    });
}
)(jQuery);
(function() {
    var container, button, menu, links, i, len;
    container = document.getElementById('site-navigation');
    if (!container) {
        return;
    }
    button = container.getElementsByTagName('button')[0];
    if ('undefined' === typeof button) {
        return;
    }
    menu = container.getElementsByTagName('ul')[0];
    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return;
    }
    menu.setAttribute('aria-expanded', 'false');
    if (-1 === menu.className.indexOf('nav-menu')) {
        menu.className += ' nav-menu';
    }
    button.onclick = function() {
        if (-1 !== container.className.indexOf('toggled')) {
            container.className = container.className.replace(' toggled', '');
            button.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-expanded', 'false');
        } else {
            container.className += ' toggled';
            button.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-expanded', 'true');
        }
    }
    ;
    links = menu.getElementsByTagName('a');
    for (i = 0,
    len = links.length; i < len; i++) {
        links[i].addEventListener('focus', toggleFocus, true);
        links[i].addEventListener('blur', toggleFocus, true);
    }
    function toggleFocus() {
        var self = this;
        while (-1 === self.className.indexOf('nav-menu')) {
            if ('li' === self.tagName.toLowerCase()) {
                if (-1 !== self.className.indexOf('focus')) {
                    self.className = self.className.replace(' focus', '');
                } else {
                    self.className += ' focus';
                }
            }
            self = self.parentElement;
        }
    }
    (function(container) {
        var touchStartFn, i, parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
        if ('ontouchstart'in window) {
            touchStartFn = function(e) {
                var menuItem = this.parentNode, i;
                if (!menuItem.classList.contains('focus')) {
                    e.preventDefault();
                    for (i = 0; i < menuItem.parentNode.children.length; ++i) {
                        if (menuItem === menuItem.parentNode.children[i]) {
                            continue;
                        }
                        menuItem.parentNode.children[i].classList.remove('focus');
                    }
                    menuItem.classList.add('focus');
                } else {
                    menuItem.classList.remove('focus');
                }
            }
            ;
            for (i = 0; i < parentLink.length; ++i) {
                parentLink[i].addEventListener('touchstart', touchStartFn, false);
            }
        }
    }(container));
}
)();
(function() {
    var isIe = /(trident|msie)/i.test(navigator.userAgent);
    if (isIe && document.getElementById && window.addEventListener) {
        window.addEventListener('hashchange', function() {
            var id = location.hash.substring(1), element;
            if (!(/^[A-z0-9_-]+$/.test(id))) {
                return;
            }
            element = document.getElementById(id);
            if (element) {
                if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        }, false);
    }
}
)();
$('#myCarousel').bind('slide.bs.carousel', function(e) {
    var target = $(e.relatedTarget).attr('data-id');
    $(".carousel-links").find("a").parent().removeClass('active');
    $(".carousel-links").find("a[data-slide-to=" + target + "]").parent().addClass('active');
});
function init_map() {
    var myOptions = {
        zoom: 14,
        center: new google.maps.LatLng(-15.3603135,-42.96251110000003),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("gmap_canvas"),myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(-15.361244601248451,-42.960579909509306)
    });
    infowindow = new google.maps.InfoWindow({
        content: "<b>Prefeitura de Catuti</b><br/>Pra&ccedil;a Presidente Vargas, 1<br/>39.526-000 Catuti / MG"
    });
    google.maps.event.addListener(marker, "click", function() {
        window.location.href = "localizacao";
    });
}
google.maps.event.addDomListener(window, 'load', init_map);
function mapInitialize() {
    var latLng = new google.maps.LatLng(-22.642,-47.193);
    var tgLatLng = new google.maps.LatLng(-22.48903,-47.22077);
    var map = new google.maps.Map(document.getElementById('map_canvas'),{
        zoom: 10,
        center: latLng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    var ref1LatLng = new google.maps.LatLng(-22.5738,-47.1721);
    var ref1 = new MarkerWithLabel({
        position: ref1LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Artur Nogueira",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var ref2LatLng = new google.maps.LatLng(-22.568,-47.402);
    var ref2 = new MarkerWithLabel({
        position: ref2LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Limeira",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var ref3LatLng = new google.maps.LatLng(-22.765,-47.154);
    var ref3 = new MarkerWithLabel({
        position: ref3LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Paul&iacute;nia",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var ref4LatLng = new google.maps.LatLng(-22.433,-46.960);
    var ref4 = new MarkerWithLabel({
        position: ref4LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Mogi Mirim",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var ref5LatLng = new google.maps.LatLng(-22.642,-47.193);
    var ref5 = new MarkerWithLabel({
        position: ref5LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Cosm&oacute;polis",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var ref6LatLng = new google.maps.LatLng(-22.362,-47.383);
    var ref6 = new MarkerWithLabel({
        position: ref6LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Araras",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var ref7LatLng = new google.maps.LatLng(-22.735,-47.335);
    var ref7 = new MarkerWithLabel({
        position: ref7LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Americana",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var ref8LatLng = new google.maps.LatLng(-22.906,-47.070);
    var ref8 = new MarkerWithLabel({
        position: ref8LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Campinas",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var ref13LatLng = new google.maps.LatLng(-22.4877876701607,-47.2152623809815);
    var ref13 = new MarkerWithLabel({
        position: ref13LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Escola Estadual Antonio Alves Cavalheiro",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var ref25LatLng = new google.maps.LatLng(-22.331,-47.172);
    var ref25 = new MarkerWithLabel({
        position: ref25LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Conchal",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var ref37LatLng = new google.maps.LatLng(-22.487210235137,-47.2107884563446);
    var ref37 = new MarkerWithLabel({
        position: ref37LatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Centro de Conviv&ecirc;ncia da 3&ordf; Idade",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "rlabel",
        labelStyle: {
            opacity: 0.7
        }
    });
    var tg = new MarkerWithLabel({
        position: tgLatLng,
        draggable: true,
        raiseOnDrag: true,
        map: map,
        labelContent: "Prefeitura Municipal de Engenheiro Coelho",
        labelAnchor: new google.maps.Point(22,0),
        labelClass: "llabel",
        labelStyle: {
            opacity: 0.9
        }
    });
}
;$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
function validaSicForm(obj) {
    $(obj).find('.help-block').hide();
    var nome = $(obj).find('#txtnome');
    var email = $(obj).find('#txtemail');
    var celular = $(obj).find('#txtcelular');
    var texto = $(obj).find('#txttexto');
    var errorCount = 0;
    if (nome.val().length < 7) {
        errorCount += 1;
        $(nome).siblings('.help-block').show();
    }
    if (email.val().length == 0) {
        errorCount += 1;
        $(email).siblings('.help-block').show();
    }
    if (celular.val().length != 11) {
        errorCount += 1;
        $(celular).siblings('.help-block').show();
    }
    if (texto.val().length < 20) {
        errorCount += 1;
        $(texto).siblings('.help-block').show();
    }
    if (errorCount != 0) {
        alert(errorCount + ' erros encontrados! Corrija os erros apontados e tente novamente!');
        return false;
    }
    if ($('#g-recaptcha-response').val().length < 300) {
        alert("Selecione a opção 'Não sou um robô'");
        return false
    }
    return true;
}
;