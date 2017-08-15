/**
 * Created by mengruzhang on 7/9/17.
 */
(function (g, j, c, f, d, k, i) {/*! Jssor */
    new (function () {
    });
    var e = {
        pc: function (a) {
            return a
        }, Rd: function (a) {
            return -a * (a - 2)
        }, Cd: function (a) {
            return -1 / 2 * (c.cos(c.PI * a) - 1)
        }
    };
    var b = new function () {
        var h = this, zb = /\S+/g, H = 1, bb = 2, eb = 3, db = 4, hb = 5, I, s = 0, l = 0, t = 0, Z = 0, B = 0,
            K = navigator, mb = K.appName, o = K.userAgent, p = parseFloat;

        function Ib() {
            if (!I) {
                I = {hf: "ontouchstart" in g || "createTouch" in j};
                var a;
                if (K.pointerEnabled || (a = K.msPointerEnabled)) I.qd = a ? "msTouchAction" : "touchAction"
            }
            return I
        }

        function w(h) {
            if (!s) {
                s = -1;
                if (mb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    s = H;
                    t = p(o.substring(e + 5, o.indexOf(";", e)));
                    /*@cc_on Z=@_jscript_version@*/
                    ;
                    l = j.documentMode || t
                } else if (mb == "Netscape" && !!g.addEventListener) {
                    var d = o.indexOf("Firefox"), b = o.indexOf("Safari"), f = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = bb;
                        l = p(o.substring(d + 8))
                    } else if (b >= 0) {
                        var i = o.substring(0, b).lastIndexOf("/");
                        s = f >= 0 ? db : eb;
                        l = p(o.substring(i + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            s = H;
                            l = t = p(a[1])
                        }
                    }
                    if (c >= 0) B = p(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        s = hb;
                        l = p(a[2])
                    }
                }
            }
            return h == s
        }

        function q() {
            return w(H)
        }

        function xb() {
            return q() && (l < 6 || j.compatMode == "BackCompat")
        }

        function cb() {
            return w(eb)
        }

        function gb() {
            return w(hb)
        }

        function tb() {
            return cb() && B > 534 && B < 535
        }

        function L() {
            w();
            return B > 537 || l > 42 || s == H && l >= 11
        }

        function vb() {
            return q() && l < 9
        }

        function ub(a) {
            var b, c;
            return function (f) {
                if (!b) {
                    b = d;
                    var e = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function (g, d) {
                        var b = a;
                        if (d) b = g + e;
                        if (f.style[b] != i)return c = b
                    })
                }
                return c
            }
        }

        function sb(b) {
            var a;
            return function (c) {
                a = a || ub(b)(c) || b;
                return a
            }
        }

        var M = sb("transform");

        function lb(a) {
            return {}.toString.call(a)
        }

        var ib = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
            ib["[object " + a + "]"] = a.toLowerCase()
        });
        function n(b, d) {
            var a, c;
            if (lb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)if (c = d(b[a], a, b))return c
            } else for (a in b)if (c = d(b[a], a, b))return c
        }

        function E(a) {
            return a == f ? String(a) : ib[lb(a)] || "object"
        }

        function jb(a) {
            for (var b in a)return d
        }

        function C(a) {
            try {
                return E(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {
            }
        }

        function v(a, b) {
            return {x: a, y: b}
        }

        function pb(b, a) {
            setTimeout(b, a || 0)
        }

        function J(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }

        function rb(b, a) {
            if (l < 9) b.style.filter = a
        }

        function Hb(a, b) {
            if (a === i) a = b;
            return a
        }

        h.re = Ib;
        h.md = q;
        h.le = xb;
        h.ke = cb;
        h.ie = L;
        ub("transform");
        h.od = function () {
            return l
        };
        h.sd = function () {
            return t || l
        };
        h.Ac = pb;
        h.Ae = function (a, b) {
            b.call(a);
            return D({}, a)
        };
        function W(a) {
            a.constructor === W.caller && a.Ib && a.Ib.apply(a, W.caller.arguments)
        }

        h.Ib = W;
        h.kb = function (a) {
            if (h.de(a)) a = j.getElementById(a);
            return a
        };
        function u(a) {
            return a || g.event
        }

        h.pd = u;
        h.Qb = function (b) {
            b = u(b);
            var a = b.target || b.srcElement || j;
            if (a.nodeType == 3) a = h.Rb(a);
            return a
        };
        h.kd = function (a) {
            a = u(a);
            return {x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0}
        };
        function x(c, d, a) {
            if (a !== i) c.style[d] = a == i ? "" : a; else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && g.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, f);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function Y(b, c, a, d) {
            if (a === i) {
                a = p(x(b, c));
                isNaN(a) && (a = f);
                return a
            }
            if (a == f) a = ""; else d && (a += "px");
            x(b, c, a)
        }

        function m(c, a) {
            var d = a ? Y : x, b;
            if (a & 4) b = sb(c);
            return function (e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Cb(b) {
            if (q() && t < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? p(a[1]) / 100 : 1
            } else return p(b.style.opacity || "1")
        }

        function Eb(b, a, f) {
            if (q() && t < 9) {
                var h = b.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = c.round(100 * a), d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = J(h, [i], d);
                rb(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }

        var N = {D: ["rotate"], O: ["rotateX"], T: ["rotateY"], Eb: ["skewX"], Cb: ["skewY"]};
        if (!L()) N = D(N, {z: ["scaleX", 2], s: ["scaleY", 2], W: ["translateZ", 1]});
        function O(d, a) {
            var c = "";
            if (a) {
                if (q() && l && l < 10) {
                    delete a.O;
                    delete a.T;
                    delete a.W
                }
                b.f(a, function (d, b) {
                    var a = N[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (P[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (L()) {
                    if (a.fb || a.db || a.W != i) c += " translate3d(" + (a.fb || 0) + "px," + (a.db || 0) + "px," + (a.W || 0) + "px)";
                    if (a.z == i) a.z = 1;
                    if (a.s == i) a.s = 1;
                    if (a.z != 1 || a.s != 1) c += " scale3d(" + a.z + ", " + a.s + ", 1)"
                }
            }
            d.style[M(d)] = c
        }

        h.Pd = m("transformOrigin", 4);
        h.yd = m("backfaceVisibility", 4);
        h.se = m("transformStyle", 4);
        h.ue = m("perspective", 6);
        h.Ze = m("perspectiveOrigin", 4);
        h.ff = function (a, b) {
            if (q() && t < 9 || t < 10 && xb()) a.style.zoom = b == 1 ? "" : b; else {
                var c = M(a), f = "scale(" + b + ")", e = a.style[c], g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = J(e, [g], f);
                a.style[c] = d
            }
        };
        h.a = function (a, d, b, c) {
            a = h.kb(a);
            if (a.addEventListener) {
                d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
                a.addEventListener(d, b, c)
            } else if (a.attachEvent) {
                a.attachEvent("on" + d, b);
                c && a.setCapture && a.setCapture()
            }
        };
        h.F = function (a, c, d, b) {
            a = h.kb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        h.Gb = function (a) {
            a = u(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = k
        };
        h.Fe = function (a) {
            a = u(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        h.J = function (d, c) {
            var a = [].slice.call(arguments, 2), b = function () {
                var b = a.concat([].slice.call(arguments, 0));
                return c.apply(d, b)
            };
            return b
        };
        h.Ke = function (a, b) {
            if (b == i)return a.textContent || a.innerText;
            var c = j.createTextNode(b);
            h.dc(a);
            a.appendChild(c)
        };
        h.Ab = function (d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };
        function kb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : f; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (U(a, b) == c)return a;
                if (!e) {
                    var d = kb(a, c, e, b);
                    if (d)return d
                }
            }
        }

        h.hc = kb;
        function T(a, d, g, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : f; a; a = a.nextSibling)if (a.nodeType == 1) {
                U(a, b) == d && c.push(a);
                if (!g) {
                    var e = T(a, d, g, b);
                    if (e.length) c = c.concat(e)
                }
            }
            return c
        }

        function fb(a, c, d) {
            for (a = a ? a.firstChild : f; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.tagName == c)return a;
                if (!d) {
                    var b = fb(a, c, d);
                    if (b)return b
                }
            }
        }

        h.Re = fb;
        h.Qe = function (b, a) {
            return b.getElementsByTagName(a)
        };
        h.jb = function (a, f, d) {
            d = d || "u";
            var e;
            do {
                if (a.nodeType == 1) {
                    var c = b.k(a, d);
                    if (c && c == Hb(f, c)) {
                        e = a;
                        break
                    }
                }
                a = b.Rb(a)
            } while (a && a != j.body);
            return e
        };
        function D() {
            var e = arguments, d, c, b, a, g = 1 & e[0], f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)if (c = e[f])for (b in c) {
                a = c[b];
                if (a !== i) {
                    a = c[b];
                    var h = d[b];
                    d[b] = g && (C(h) || C(a)) ? D(g, {}, h, a) : a
                }
            }
            return d
        }

        h.cb = D;
        function X(f, g) {
            var d = {}, c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (C(a) && C(b)) {
                        a = X(a, b);
                        e = !jb(a)
                    }
                    !e && (d[c] = a)
                }
            }
            return d
        }

        h.Fc = function (a) {
            return E(a) == "function"
        };
        h.de = function (a) {
            return E(a) == "string"
        };
        h.Ne = function (a) {
            return !isNaN(p(a)) && isFinite(a)
        };
        h.f = n;
        function R(a) {
            return j.createElement(a)
        }

        h.fc = function () {
            return R("DIV")
        };
        h.Le = function () {
            return R("SPAN")
        };
        h.Ec = function () {
        };
        function y(b, c, a) {
            if (a == i)return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function U(a, b) {
            return y(a, b) || y(a, "data-" + b)
        }

        h.v = y;
        h.k = U;
        h.Kb = function (d, b, c) {
            var a = h.Dc(y(d, b));
            if (isNaN(a)) a = c;
            return a
        };
        function z(b, a) {
            return y(b, "class", a) || ""
        }

        function ob(b) {
            var a = {};
            n(b, function (b) {
                if (b != i) a[b] = b
            });
            return a
        }

        function qb(b, a) {
            return b.match(a || zb)
        }

        function Q(b, a) {
            return ob(qb(b || "", a))
        }

        h.He = ob;
        h.Se = qb;
        function ab(b, c) {
            var a = "";
            n(c, function (c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function F(a, c, b) {
            z(a, ab(" ", D(X(Q(z(a)), Q(c)), Q(b))))
        }

        h.Rb = function (a) {
            return a.parentNode
        };
        h.L = function (a) {
            h.ab(a, "none")
        };
        h.P = function (a, b) {
            h.ab(a, b ? "none" : "")
        };
        h.ze = function (b, a) {
            b.removeAttribute(a)
        };
        h.xe = function () {
            return q() && l < 10
        };
        h.we = function (d, a) {
            if (a) d.style.clip = "rect(" + c.round(a.g || a.p || 0) + "px " + c.round(a.l) + "px " + c.round(a.m) + "px " + c.round(a.i || a.q || 0) + "px)"; else if (a !== i) {
                var g = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = J(g, f, "");
                b.zc(d, e)
            }
        };
        h.V = function () {
            return +new Date
        };
        h.M = function (b, a) {
            b.appendChild(a)
        };
        h.mb = function (b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        h.mc = function (b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        h.af = function (a, b) {
            n(a, function (a) {
                h.mc(a, b)
            })
        };
        h.dc = function (a) {
            h.af(h.Ab(a, d), a)
        };
        h.xc = function (a, b) {
            var c = h.Rb(a);
            b & 1 && h.C(a, (h.n(c) - h.n(a)) / 2);
            b & 2 && h.B(a, (h.o(c) - h.o(a)) / 2)
        };
        var S = {g: f, l: f, m: f, i: f, H: f, I: f};
        h.kf = function (a) {
            var b = h.fc();
            r(b, {Ye: "block", X: h.E(a), g: 0, i: 0, H: 0, I: 0});
            var d = h.cd(a, S);
            h.mb(b, a);
            h.M(b, a);
            var e = h.cd(a, S), c = {};
            n(d, function (b, a) {
                if (b == e[a]) c[a] = b
            });
            r(b, S);
            r(b, c);
            r(a, {g: 0, i: 0});
            return c
        };
        h.Dc = p;
        function V(d, c, b) {
            var a = d.cloneNode(!c);
            !b && h.ze(a, "id");
            return a
        }

        h.nb = V;
        h.ob = function (e, f) {
            var a = new Image;

            function b(e, d) {
                h.F(a, "load", b);
                h.F(a, "abort", c);
                h.F(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, d)
            }

            if (gb() && l < 11.6 || !e) b(!e); else {
                h.a(a, "load", b);
                h.a(a, "abort", c);
                h.a(a, "error", c);
                a.src = e
            }
        };
        h.Bd = function (d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }

            n(d, function (a) {
                h.ob(a.src, b)
            });
            b()
        };
        h.Dd = function (a, g, i, h) {
            if (h) a = V(a);
            var c = T(a, g);
            if (!c.length) c = b.Qe(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f], e = V(i);
                z(e, z(d));
                b.zc(e, d.style.cssText);
                b.mb(e, d);
                b.mc(d)
            }
            return a
        };
        function Fb(a) {
            var l = this, p = "", r = ["av", "pv", "ds", "dn"], d = [], q, k = 0, f = 0, e = 0;

            function g() {
                F(a, q, (d[e || f & 2 || f] || "") + " " + (d[k] || ""));
                b.hb(a, "pointer-events", e ? "none" : "")
            }

            function c() {
                k = 0;
                g();
                h.F(j, "mouseup", c);
                h.F(j, "touchend", c);
                h.F(j, "touchcancel", c)
            }

            function o(a) {
                if (e) h.Gb(a); else {
                    k = 4;
                    g();
                    h.a(j, "mouseup", c);
                    h.a(j, "touchend", c);
                    h.a(j, "touchcancel", c)
                }
            }

            l.Ed = function (a) {
                if (a === i)return f;
                f = a & 2 || a & 1;
                g()
            };
            l.Jb = function (a) {
                if (a === i)return !e;
                e = a ? 0 : 3;
                g()
            };
            l.Q = a = h.kb(a);
            y(a, "data-jssor-button", "1");
            var m = b.Se(z(a));
            if (m) p = m.shift();
            n(r, function (a) {
                d.push(p + a)
            });
            q = ab(" ", d);
            d.unshift("");
            h.a(a, "mousedown", o);
            h.a(a, "touchstart", o)
        }

        h.Ub = function (a) {
            return new Fb(a)
        };
        h.hb = x;
        h.Vb = m("overflow");
        h.B = m("top", 2);
        h.Nd = m("right", 2);
        h.Od = m("bottom", 2);
        h.C = m("left", 2);
        h.n = m("width", 2);
        h.o = m("height", 2);
        h.ud = m("marginLeft", 2);
        h.Md = m("marginTop", 2);
        h.E = m("position");
        h.ab = m("display");
        h.u = m("zIndex", 1);
        h.Wb = function (b, a, c) {
            if (a != i) Eb(b, a, c); else return Cb(b)
        };
        h.zc = function (a, b) {
            if (b != i) a.style.cssText = b; else return a.style.cssText
        };
        h.te = function (b, a) {
            if (a === i) {
                a = x(b, "backgroundImage") || "";
                var c = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a) || [];
                return c[1]
            }
            x(b, "backgroundImage", a ? "url('" + a + "')" : "")
        };
        var G;
        h.Fd = G = {sb: h.Wb, g: h.B, l: h.Nd, m: h.Od, i: h.C, H: h.n, I: h.o, X: h.E, Ye: h.ab, tb: h.u};
        h.cd = function (c, b) {
            var a = {};
            n(b, function (d, b) {
                if (G[b]) a[b] = G[b](c)
            });
            return a
        };
        function r(g, l) {
            var e = vb(), b = L(), d = tb(), j = M(g);

            function k(b, d, a) {
                var e = b.Z(v(-d / 2, -a / 2)), f = b.Z(v(d / 2, -a / 2)), g = b.Z(v(d / 2, a / 2)),
                    h = b.Z(v(-d / 2, a / 2));
                b.Z(v(300, 300));
                return v(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(d, a) {
                a = a || {};
                var n = a.W || 0, p = (a.O || 0) % 360, q = (a.T || 0) % 360, u = (a.D || 0) % 360, l = a.z, m = a.s,
                    f = a.qf;
                if (l == i) l = 1;
                if (m == i) m = 1;
                if (f == i) f = 1;
                if (e) {
                    n = 0;
                    p = 0;
                    q = 0;
                    f = 0
                }
                var c = new Bb(a.fb, a.db, n);
                c.O(p);
                c.T(q);
                c.Ad(u);
                c.Ue(a.Eb, a.Cb);
                c.ub(l, m, f);
                if (b) {
                    c.wb(a.q, a.p);
                    d.style[j] = c.wd()
                } else if (!Z || Z < 9) {
                    var o = "", g = {x: 0, y: 0};
                    if (a.N) g = k(c, a.N, a.bb);
                    h.Md(d, g.y);
                    h.ud(d, g.x);
                    o = c.vd();
                    var s = d.style.filter,
                        t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), r = J(s, [t], o);
                    rb(d, r)
                }
            }

            r = function (e, c) {
                c = c || {};
                var j = c.q, k = c.p, g;
                n(G, function (a, b) {
                    g = c[b];
                    g !== i && a(e, g)
                });
                h.we(e, c.c);
                if (!b) {
                    j != i && h.C(e, (c.Jc || 0) + j);
                    k != i && h.B(e, (c.Zc || 0) + k)
                }
                if (c.Sd)if (d) pb(h.J(f, O, e, c)); else a(e, c)
            };
            h.Ob = O;
            if (d) h.Ob = r;
            if (e) h.Ob = a; else if (!b) a = O;
            h.G = r;
            r(g, l)
        }

        h.Ob = r;
        h.G = r;
        function Bb(j, k, o) {
            var d = this, b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, o || 0, 1], i = c.sin, h = c.cos,
                l = c.tan;

            function g(a) {
                return a * c.PI / 180
            }

            function n(a, b) {
                return {x: a, y: b}
            }

            function m(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
                return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j]
            }

            function e(c, a) {
                return m.apply(f, (a || b).concat(c))
            }

            d.ub = function (a, c, d) {
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.wb = function (a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.O = function (c) {
                if (c) {
                    a = g(c);
                    var d = h(a), f = i(a);
                    b = e([1, 0, 0, 0, 0, d, f, 0, 0, -f, d, 0, 0, 0, 0, 1])
                }
            };
            d.T = function (c) {
                if (c) {
                    a = g(c);
                    var d = h(a), f = i(a);
                    b = e([d, 0, -f, 0, 0, 1, 0, 0, f, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.Ad = function (c) {
                if (c) {
                    a = g(c);
                    var d = h(a), f = i(a);
                    b = e([d, f, 0, 0, -f, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.Ue = function (a, c) {
                if (a || c) {
                    j = g(a);
                    k = g(c);
                    b = e([1, l(k), 0, 0, l(j), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.Z = function (c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return n(a[12], a[13])
            };
            d.wd = function () {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.vd = function () {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }

        new function () {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)for (var k = f[c] = [], b = 0; b < h; b++) {
                    for (var e = 0, a = 0; a < j; a++)e += d[c][a] * g[a][b];
                    k[b] = e
                }
                return f
            }

            a.z = function (b, c) {
                return a.Yc(b, c, 0)
            };
            a.s = function (b, c) {
                return a.Yc(b, 0, c)
            };
            a.Yc = function (a, c, d) {
                return b(a, [[c, 0], [0, d]])
            };
            a.Z = function (d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return v(a[0][0], a[1][0])
            }
        };
        var P = {Jc: 0, Zc: 0, q: 0, p: 0, yb: 1, z: 1, s: 1, D: 0, O: 0, T: 0, fb: 0, db: 0, W: 0, Eb: 0, Cb: 0};
        h.qe = function (c, d) {
            var a = c || {};
            if (c)if (b.Fc(c)) a = {K: a}; else if (b.Fc(c.c)) a.c = {K: c.c};
            a.K = a.K || d;
            if (a.c) a.c.K = a.c.K || d;
            return a
        };
        h.oe = function (n, j, s, t, B, C, o) {
            var a = j;
            if (n) {
                a = {};
                for (var h in j) {
                    var D = C[h] || 1, z = B[h] || [0, 1], g = (s - z[0]) / z[1];
                    g = c.min(c.max(g, 0), 1);
                    g = g * D;
                    var x = c.floor(g);
                    if (g != x) g -= x;
                    var k = t.K || e.pc, m, E = n[h], p = j[h];
                    if (b.Ne(p)) {
                        k = t[h] || k;
                        var A = k(g);
                        m = E + p * A
                    } else {
                        m = b.cb({Hb: {}}, n[h]);
                        var y = t[h] || {};
                        b.f(p.Hb || p, function (d, a) {
                            k = y[a] || y.K || k;
                            var c = k(g), b = d * c;
                            m.Hb[a] = b;
                            m[a] += b
                        })
                    }
                    a[h] = m
                }
                var w = b.f(j, function (b, a) {
                    return P[a] != i
                });
                w && b.f(P, function (c, b) {
                    if (a[b] == i && n[b] !== i) a[b] = n[b]
                });
                if (w) {
                    if (a.yb) a.z = a.s = a.yb;
                    a.N = o.N;
                    a.bb = o.bb;
                    if (q() && l >= 11 && (j.q || j.p) && s != 0 && s != 1) a.D = a.D || 1e-8;
                    a.Sd = d
                }
            }
            if (j.c && o.wb) {
                var r = a.c.Hb, v = (r.g || 0) + (r.m || 0), u = (r.i || 0) + (r.l || 0);
                a.i = (a.i || 0) + u;
                a.g = (a.g || 0) + v;
                a.c.i -= u;
                a.c.l -= u;
                a.c.g -= v;
                a.c.m -= v
            }
            if (a.c && b.xe() && !a.c.g && !a.c.i && !a.c.p && !a.c.q && a.c.l == o.N && a.c.m == o.bb) a.c = f;
            return a
        }
    };

    function o() {
        var a = this, d = [];

        function i(a, b) {
            d.push({Pb: a, kc: b})
        }

        function h(a, c) {
            b.f(d, function (b, e) {
                b.Pb == a && b.kc === c && d.splice(e, 1)
            })
        }

        a.rb = a.addEventListener = i;
        a.removeEventListener = h;
        a.j = function (a) {
            var c = [].slice.call(arguments, 1);
            b.f(d, function (b) {
                b.Pb == a && b.kc.apply(g, c)
            })
        }
    }

    var l = function (A, E, h, J, M, L) {
        A = A || 0;
        var a = this, p, m, n, s, C = 0, G, H, F, D, z = 0, i = 0, l = 0, y, j, e, f, o, x, u = [], w;

        function O(a) {
            e += a;
            f += a;
            j += a;
            i += a;
            l += a;
            z += a
        }

        function r(p) {
            var g = p;
            if (o)if (!x && (g >= f || g < e) || x && g >= e) g = ((g - e) % o + o) % o + e;
            if (!y || s || i != g) {
                var k = c.min(g, f);
                k = c.max(k, e);
                if (!y || s || k != l) {
                    if (L) {
                        var m = (k - j) / (E || 1);
                        if (h.me) m = 1 - m;
                        var n = b.oe(M, L, m, G, F, H, h);
                        if (w) b.f(n, function (b, a) {
                            w[a] && w[a](J, b)
                        }); else b.G(J, n)
                    }
                    a.cc(l - j, k - j);
                    var r = l, q = l = k;
                    b.f(u, function (b, c) {
                        var a = !y && x || g <= i ? u[u.length - c - 1] : b;
                        a.A(l - z)
                    });
                    i = g;
                    y = d;
                    a.Db(r, q)
                }
            }
        }

        function B(a, b, d) {
            b && a.ac(f);
            if (!d) {
                e = c.min(e, a.Xc() + z);
                f = c.max(f, a.Zb() + z)
            }
            u.push(a)
        }

        var v = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.msRequestAnimationFrame;
        if (b.ke() && b.od() < 7 || !v) v = function (a) {
            b.Ac(a, h.Wc)
        };
        function I() {
            if (p) {
                var d = b.V(), e = c.min(d - C, h.Vc), a = i + e * n;
                C = d;
                if (a * n >= m * n) a = m;
                r(a);
                if (!s && a * n >= m * n) K(D); else v(I)
            }
        }

        function q(g, h, j) {
            if (!p) {
                p = d;
                s = j;
                D = h;
                g = c.max(g, e);
                g = c.min(g, f);
                m = g;
                n = m < i ? -1 : 1;
                a.Uc();
                C = b.V();
                v(I)
            }
        }

        function K(b) {
            if (p) {
                s = p = D = k;
                a.Tc();
                b && b()
            }
        }

        a.Sc = function (a, b, c) {
            q(a ? i + a : f, b, c)
        };
        a.Rc = q;
        a.eb = K;
        a.he = function (a) {
            q(a)
        };
        a.U = function () {
            return i
        };
        a.Qc = function () {
            return m
        };
        a.xb = function () {
            return l
        };
        a.A = r;
        a.wb = function (a) {
            r(i + a)
        };
        a.Pc = function () {
            return p
        };
        a.ee = function (a) {
            o = a
        };
        a.ac = O;
        a.Oc = function (a, b) {
            B(a, 0, b)
        };
        a.lc = function (a) {
            B(a, 1)
        };
        a.Xc = function () {
            return e
        };
        a.Zb = function () {
            return f
        };
        a.Db = a.Uc = a.Tc = a.cc = b.Ec;
        a.Yb = b.V();
        h = b.cb({Wc: 16, Vc: 50}, h);
        o = h.Xb;
        x = h.be;
        w = h.ae;
        e = j = A;
        f = A + E;
        H = h.Zd || {};
        F = h.Yd || {};
        G = b.qe(h.qb)
    };
    var m = {Fb: "data-scale", Tb: "data-scale-ratio", pb: "data-autocenter"}, n = new function () {
        var a = this;
        a.gb = function (c, a, e, d) {
            (d || !b.v(c, a)) && b.v(c, a, e)
        };
        a.ic = function (a) {
            var c = b.Kb(a, m.pb);
            b.xc(a, c)
        }
    };
    new (function () {
    });
    var p = {bc: 1}, s = function (a, E) {
        var g = this;
        o.call(g);
        a = b.kb(a);
        var u, C, B, t, l = 0, e, q, j, y, z, i, h, s, r, D = [], A = [];

        function x(a) {
            a != -1 && A[a].Ed(a == l)
        }

        function v(a) {
            g.j(p.bc, a * q)
        }

        g.Q = a;
        g.ec = function (a) {
            if (a != t) {
                var d = l, b = c.floor(a / q);
                l = b;
                t = a;
                x(d);
                x(b)
            }
        };
        g.gc = function (c) {
            b.P(a, c)
        };
        var w;
        g.nc = function (x) {
            if (!w) {
                u = c.ceil(x / q);
                l = 0;
                var n = s + y, o = r + z, m = c.ceil(u / j) - 1;
                C = s + n * (!i ? m : j - 1);
                B = r + o * (i ? m : j - 1);
                b.n(a, C);
                b.o(a, B);
                for (var g = 0; g < u; g++) {
                    var t = b.Le();
                    b.Ke(t, g + 1);
                    var k = b.Dd(h, "numbertemplate", t, d);
                    b.E(k, "absolute");
                    var p = g % (m + 1);
                    b.C(k, !i ? n * p : g % j * n);
                    b.B(k, i ? o * p : c.floor(g / (m + 1)) * o);
                    b.M(a, k);
                    D[g] = k;
                    e.jc & 1 && b.a(k, "click", b.J(f, v, g));
                    e.jc & 2 && b.a(k, "mouseenter", b.J(f, v, g));
                    A[g] = b.Ub(k)
                }
                w = d
            }
        };
        g.zb = e = b.cb({Gc: 10, Kc: 10, bd: 1, jc: 1}, E);
        h = b.hc(a, "prototype");
        s = b.n(h);
        r = b.o(h);
        b.mc(h, a);
        q = e.dd || 1;
        j = e.Wd || 1;
        y = e.Gc;
        z = e.Kc;
        i = e.bd - 1;
        e.ub == k && n.gb(a, m.Fb, 1);
        e.S && n.gb(a, m.pb, e.S);
        n.ic(a)
    }, t = function (a, e, i) {
        var c = this;
        o.call(c);
        var t, g, h, j;
        b.n(a);
        b.o(a);
        var r, q;

        function l(a) {
            c.j(p.bc, a, d)
        }

        function v(c) {
            b.P(a, c);
            b.P(e, c)
        }

        function u() {
            r.Jb(i.Bb || g > 0);
            q.Jb(i.Bb || g < t - i.lb)
        }

        c.ec = function (b, a, c) {
            if (c) g = a; else {
                g = b;
                u()
            }
        };
        c.gc = v;
        var s;
        c.nc = function (c) {
            t = c;
            g = 0;
            if (!s) {
                b.a(a, "click", b.J(f, l, -j));
                b.a(e, "click", b.J(f, l, j));
                r = b.Ub(a);
                q = b.Ub(e);
                s = d
            }
        };
        c.zb = h = b.cb({dd: 1}, i);
        j = h.dd;
        if (h.ub == k) {
            n.gb(a, m.Fb, 1);
            n.gb(e, m.Fb, 1)
        }
        if (h.S) {
            n.gb(a, m.pb, h.S);
            n.gb(e, m.pb, h.S)
        }
        n.ic(a);
        n.ic(e)
    };

    function r(e, d, c) {
        var a = this;
        l.call(a, 0, c);
        a.td = b.Ec;
        a.rd = 0;
        a.ld = c
    }

    var h = function () {
        var a = this;
        b.Ae(a, o);
        var Sb = "data-jssor-slider", Yb = "data-jssor-thumb", u, n, db, eb, U, ob, cb, gb, R, P, Ob, nc = 1, ic = 1,
            Zb = 1, ac = {}, hc, z, T, Rb, xb, wb, pb, Qb, Pb, bb, s = -1, K, Cb, q, I, H, Lb, lb, mb, nb, t, Q, x, N,
            Nb, X = [], ec, fc, bc, oc, Ec, v, fb, F, dc, kb, Ab, Db, jb, Eb, J, hb, O, G = 1, S, D, W, Fb = 0, Gb = 0,
            M, qb, ib, sb, y, Z, A, tb, Y = [], ub = b.re(), Jb = ub.hf, B = [], C, L, E, zb, Xb, V;

        function tc(e, n, o) {
            var k = this, h = {g: 2, l: 1, m: 2, i: 1}, l = {g: "top", l: "right", m: "bottom", i: "left"}, g, a, f, i,
                j = {};
            k.Q = e;
            k.Nb = function (q, k) {
                var p, s = q, r = k;
                if (!f) {
                    f = b.kf(e);
                    g = e.parentNode;
                    i = {ub: b.Kb(e, m.Fb, 1), S: b.Kb(e, m.pb)};
                    b.f(l, function (c, a) {
                        j[a] = b.Kb(e, "data-scale-" + c, 1)
                    });
                    a = e;
                    if (n) {
                        a = b.nb(g, d);
                        b.G(a, {g: 0, i: 0});
                        b.M(a, e);
                        b.M(g, a)
                    }
                }
                if (o) p = q > k ? q : k; else s = r = p = c.pow(R < P ? k : q, i.ub);
                b.ff(a, p);
                b.v(a, m.Tb, p);
                b.n(g, f.H * s);
                b.o(g, f.I * r);
                var t = b.md() && b.sd() < 9 || b.sd() < 10 && b.le() ? p : 1, u = (s - t) * f.H / 2,
                    v = (r - t) * f.I / 2;
                b.C(a, u);
                b.B(a, v);
                b.f(f, function (d, a) {
                    if (h[a] && d) {
                        var e = (h[a] & 1) * c.pow(q, j[a]) * d + (h[a] & 2) * c.pow(k, j[a]) * d / 2;
                        b.Fd[a](g, e)
                    }
                });
                b.xc(g, i.S)
            }
        }

        function Dc() {
            var b = this;
            l.call(b, -1e8, 2e8);
            b.Pe = function () {
                var a = b.xb(), d = c.floor(a), f = w(d), e = a - c.floor(a);
                return {Y: f, Oe: d, X: e}
            };
            b.Db = function (e, b) {
                var f = c.floor(b);
                if (f != b && b > e) f++;
                gc(f, d);
                a.j(h.Me, w(b), w(e), b, e)
            }
        }

        function Cc() {
            var a = this;
            l.call(a, 0, 0, {Xb: q});
            b.f(B, function (b) {
                J & 1 && b.ee(q);
                a.lc(b);
                b.ac(jb / nb)
            })
        }

        function Bc() {
            var a = this, b = tb.Q;
            l.call(a, -1, 2, {qb: e.pc, ae: {X: mc}, Xb: q}, b, {X: 1}, {X: -2});
            a.Sb = b
        }

        function uc(o, m) {
            var b = this, e, g, i, j, c;
            l.call(b, -1e8, 2e8, {Vc: 100});
            b.Uc = function () {
                S = d;
                W = f;
                a.j(h.Je, w(y.U()), y.U())
            };
            b.Tc = function () {
                S = k;
                j = k;
                var b = y.Pe();
                a.j(h.Ie, w(y.U()), y.U());
                !b.X && Fc(b.Oe, s)
            };
            b.Db = function (f, d) {
                var a;
                if (j) a = c; else {
                    a = g;
                    if (i) {
                        var b = d / i;
                        a = n.sc(b) * (g - e) + e
                    }
                }
                y.A(a)
            };
            b.Mb = function (a, d, c, f) {
                e = a;
                g = d;
                i = c;
                y.A(a);
                b.A(0);
                b.Rc(c, f)
            };
            b.Ce = function (a) {
                j = d;
                c = a;
                b.Sc(a, f, d)
            };
            b.Be = function (a) {
                c = a
            };
            y = new Dc;
            y.Oc(o);
            y.Oc(m)
        }

        function vc() {
            var c = this, a = kc();
            b.u(a, 0);
            b.hb(a, "pointerEvents", "none");
            c.Q = a;
            c.Lb = function () {
                b.L(a);
                b.dc(a)
            }
        }

        function Ac(m, g) {
            var e = this, r, M, u, j, z = [], y, D, S, J, Q, F, K, i, x, p;
            l.call(e, -t, t + 1, {});
            function E(a) {
                r && r.td();
                R(m, a, 0);
                F = d;
                r = new U.R(m, U, b.Dc(b.k(m, "idle")) || dc, !v);
                r.A(0)
            }

            function Y() {
                r.Yb < U.Yb && E()
            }

            function N(p, r, o) {
                if (!J) {
                    J = d;
                    if (j && o) {
                        var f = o.width, c = o.height, m = f, l = c;
                        if (f && c && n.ib) {
                            if (n.ib & 3 && (!(n.ib & 4) || f > I || c > H)) {
                                var i = k, q = I / H * c / f;
                                if (n.ib & 1) i = q > 1; else if (n.ib & 2) i = q < 1;
                                m = i ? f * H / c : I;
                                l = i ? H : c * I / f
                            }
                            b.n(j, m);
                            b.o(j, l);
                            b.B(j, (H - l) / 2);
                            b.C(j, (I - m) / 2)
                        }
                        b.E(j, "absolute");
                        a.j(h.ve, g)
                    }
                }
                b.L(r);
                p && p(e)
            }

            function X(f, b, c, d) {
                if (d == W && s == g && v)if (!Ec) {
                    var a = w(f);
                    C.ye(a, g, b, e, c);
                    b.Ge();
                    Z.ac(a - Z.Xc() - 1);
                    Z.A(a);
                    A.Mb(a, a, 0)
                }
            }

            function cb(b) {
                if (b == W && s == g) {
                    if (!i) {
                        var a = f;
                        if (C)if (C.Y == g) a = C.Ee(); else C.Lb();
                        Y();
                        i = new zc(m, g, a, r);
                        i.Cc(p)
                    }
                    !i.Pc() && i.oc()
                }
            }

            function G(a, d, k) {
                if (a == g) {
                    if (a != d) B[d] && B[d].Hc(); else!k && i && i.Te();
                    p && p.Jb();
                    var l = W = b.V();
                    e.ob(b.J(f, cb, l))
                } else {
                    var j = c.min(g, a), h = c.max(g, a), o = c.min(h - j, j + q - h), m = t + n.df - 1;
                    (!Q || o <= m) && e.ob()
                }
            }

            function db() {
                if (s == g && i) {
                    i.eb();
                    p && p.jf();
                    p && p.We();
                    i.yc()
                }
            }

            function eb() {
                s == g && i && i.eb()
            }

            function ab(b) {
                !O && a.j(h.Xe, g, b)
            }

            function P() {
                p = x.pInstance;
                i && i.Cc(p)
            }

            e.ob = function (e, c) {
                c = c || u;
                if (z.length && !J) {
                    b.P(c);
                    if (!S) {
                        S = d;
                        a.j(h.ef, g);
                        b.f(z, function (a) {
                            if (!b.v(a, "src")) {
                                a.src = b.k(a, "src2") || "";
                                b.ab(a, a["display-origin"])
                            }
                        })
                    }
                    b.Bd(z, j, b.J(f, N, e, c))
                } else N(e, c)
            };
            e.gf = function () {
                if (q == 1) {
                    e.Hc();
                    G(g, g)
                } else if (C) {
                    var a = C.bf(q);
                    if (a) {
                        var h = W = b.V(), c = g + fb, d = B[w(c)];
                        return d.ob(b.J(f, X, c, d, a, h), u)
                    }
                } else Mb(fb)
            };
            e.qc = function () {
                G(g, g, d)
            };
            e.Hc = function () {
                p && p.jf();
                p && p.We();
                e.wc();
                i && i.Ve();
                i = f;
                E()
            };
            e.Ge = function () {
                b.L(m)
            };
            e.wc = function () {
                b.P(m)
            };
            e.cf = function () {
                p && p.Jb()
            };
            function R(a, f, c, h) {
                if (b.v(a, Sb))return;
                if (!F) {
                    if (a.tagName == "IMG") {
                        z.push(a);
                        if (!b.v(a, "src")) {
                            Q = d;
                            a["display-origin"] = b.ab(a);
                            b.L(a)
                        }
                    }
                    var e = b.te(a);
                    if (e) {
                        var g = new Image;
                        b.k(g, "src2", e);
                        z.push(g)
                    }
                    c && b.u(a, (b.u(a) || 0) + 1)
                }
                var i = b.Ab(a);
                b.f(i, function (a) {
                    var e = a.tagName, g = b.k(a, "u");
                    if (g == "player" && !x) {
                        x = a;
                        if (x.pInstance) P(); else b.a(x, "dataavailable", P)
                    }
                    if (g == "caption") {
                        if (f) {
                            b.Pd(a, b.k(a, "to"));
                            b.yd(a, b.k(a, "bf"));
                            K && b.k(a, "3d") && b.se(a, "preserve-3d")
                        }
                    } else if (!F && !c && !j) {
                        if (e == "A") {
                            if (b.k(a, "u") == "image") j = b.Re(a, "IMG"); else j = b.hc(a, "image", d);
                            if (j) {
                                y = a;
                                b.ab(y, "block");
                                b.G(y, bb);
                                D = b.nb(y, d);
                                b.E(y, "relative");
                                b.Wb(D, 0);
                                b.hb(D, "backgroundColor", "#000")
                            }
                        } else if (e == "IMG" && b.k(a, "u") == "image") j = a;
                        if (j) {
                            j.border = 0;
                            b.G(j, bb)
                        }
                    }
                    R(a, f, c + 1, h)
                })
            }

            e.cc = function (c, b) {
                var a = t - b;
                mc(M, a)
            };
            e.Y = g;
            o.call(e);
            K = b.k(m, "p");
            b.ue(m, K);
            b.Ze(m, b.k(m, "po"));
            var L = b.hc(m, "thumb", d);
            if (L) {
                b.nb(L);
                b.L(L)
            }
            b.P(m);
            u = b.nb(T);
            b.u(u, 1e3);
            b.a(m, "click", ab);
            E(d);
            e.De = j;
            e.vc = D;
            e.Sb = M = m;
            b.M(M, u);
            a.rb(203, G);
            a.rb(28, eb);
            a.rb(24, db)
        }

        function zc(z, g, p, q) {
            var c = this, n = 0, u = 0, i, j, f, e, m, t, r, o = B[g];
            l.call(c, 0, 0);
            function w() {
                b.dc(L);
                oc && m && o.vc && b.M(L, o.vc);
                b.P(L, !m && o.De)
            }

            function x() {
                c.oc()
            }

            function y(a) {
                r = a;
                c.eb();
                c.oc()
            }

            c.oc = function () {
                var b = c.xb();
                if (!D && !S && !r && s == g) {
                    if (!b) {
                        if (i && !m) {
                            m = d;
                            c.yc(d);
                            a.j(h.ne, g, n, u, i, e)
                        }
                        w()
                    }
                    var k, p = h.Ic;
                    if (b != e)if (b == f) k = e; else if (b == j) k = f; else if (!b) k = j; else k = c.Qc();
                    a.j(p, g, b, n, j, f, e);
                    var l = v && (!F || G);
                    if (b == e) (f != e && !(F & 12) || l) && o.gf(); else(l || b != f) && c.Rc(k, x)
                }
            };
            c.Te = function () {
                f == e && f == c.xb() && c.A(j)
            };
            c.Ve = function () {
                C && C.Y == g && C.Lb();
                var b = c.xb();
                b < e && a.j(h.Ic, g, -b - 1, n, j, f, e)
            };
            c.yc = function (a) {
                p && b.Vb(Q, a && p.Bc.mf ? "" : "hidden")
            };
            c.cc = function (c, b) {
                if (m && b >= i) {
                    m = k;
                    w();
                    o.wc();
                    C.Lb();
                    a.j(h.Hd, g, n, u, i, e)
                }
                a.j(h.Id, g, b, n, j, f, e)
            };
            c.Cc = function (a) {
                if (a && !t) {
                    t = a;
                    a.rb($JssorPlayer$.Xd, y)
                }
            };
            p && c.lc(p);
            i = c.Zb();
            c.lc(q);
            j = i + q.rd;
            e = c.Zb();
            f = v ? i + q.ld : e
        }

        function Bb(a, c, d) {
            b.C(a, c);
            b.B(a, d)
        }

        function mc(c, b) {
            var a = x > 0 ? x : db, d = lb * b * (a & 1), e = mb * b * (a >> 1 & 1);
            Bb(c, d, e)
        }

        function cc() {
            zb = S;
            Xb = A.Qc();
            E = y.U()
        }

        function Ub() {
            cc();
            if (D || !G && F & 12) {
                A.eb();
                a.j(h.Kd)
            }
        }

        function Tb(f) {
            if (!D && (G || !(F & 12)) && !A.Pc()) {
                var b = y.U(), a = c.ceil(E);
                if (f && c.abs(M) >= n.hd) {
                    a = c.ceil(b);
                    a += ib
                }
                if (!(J & 1)) a = c.min(q - t, c.max(a, 0));
                var d = c.abs(a - b);
                if (d < 1 && n.sc != e.pc) d = 1 - c.pow(1 - d, 5);
                if (!O && zb) A.he(Xb); else if (b == a) {
                    Cb.cf();
                    Cb.qc()
                } else A.Mb(b, a, d * kb)
            }
        }

        function Wb(a) {
            !b.jb(b.Qb(a), "nodrag") && b.Gb(a)
        }

        function xc(a) {
            lc(a, 1)
        }

        function lc(c, g) {
            c = b.pd(c);
            var e = b.Qb(c);
            Nb = k;
            var l = b.jb(e, "1", Yb);
            if ((!l || l === u) && !N && (!g || c.touches.length == 1) && !b.jb(e, "nodrag") && yc()) {
                var n = b.jb(e, i, m.Tb);
                if (n) Zb = b.v(n, m.Tb);
                if (g) {
                    var p = c.touches[0];
                    Fb = p.clientX;
                    Gb = p.clientY
                } else {
                    var o = b.kd(c);
                    Fb = o.x;
                    Gb = o.y
                }
                D = d;
                W = f;
                b.a(j, g ? "touchmove" : "mousemove", rb);
                b.V();
                O = 0;
                Ub();
                if (!zb) x = 0;
                M = 0;
                qb = 0;
                ib = 0;
                a.j(h.Ld, w(E), E, c)
            }
        }

        function rb(a) {
            if (D) {
                a = b.pd(a);
                var e;
                if (a.type != "mousemove")if (a.touches.length == 1) {
                    var m = a.touches[0];
                    e = {x: m.clientX, y: m.clientY}
                } else ab(); else e = b.kd(a);
                if (e) {
                    var f = e.x - Fb, g = e.y - Gb;
                    if (x || c.abs(f) > 1.5 || c.abs(g) > 1.5) {
                        if (c.floor(E) != E) x = x || db & N;
                        if ((f || g) && !x)if (N == 3)if (c.abs(g) > c.abs(f)) x = 2; else x = 1; else {
                            x = N;
                            var n = [0, c.abs(f), c.abs(g)], p = n[x], o = n[~x & 3];
                            if (o > p) Nb = d
                        }
                        if (x && !Nb) {
                            var l = g, h = mb;
                            if (x == 1) {
                                l = f;
                                h = lb
                            }
                            if (M - qb < -1.5) ib = 0; else if (M - qb > 1.5) ib = -1;
                            qb = M;
                            M = l;
                            V = E - M / h / Zb;
                            if (!(J & 1)) {
                                var j = 0, i = [-E, 0, E - q + t];
                                b.f(i, function (b, d) {
                                    if (b > 0) {
                                        var a = c.pow(b, 1 / 1.6);
                                        a = c.tan(a * c.PI / 2);
                                        j = (a - b) * (d - 1)
                                    }
                                });
                                var k = j + V;
                                i = [-k, 0, k - q + t];
                                b.f(i, function (a, b) {
                                    if (a > 0) {
                                        a = c.min(a, h);
                                        a = c.atan(a) * 2 / c.PI;
                                        a = c.pow(a, 1.6);
                                        V = a * (b - 1);
                                        if (b) V += q - t
                                    }
                                })
                            }
                            b.Gb(a);
                            if (!S) A.Ce(V); else A.Be(V)
                        }
                    }
                }
            }
        }

        function ab() {
            wc();
            if (D) {
                D = k;
                O = M;
                b.V();
                b.F(j, "mousemove", rb);
                b.F(j, "touchmove", rb);
                O && v & 8 && (v = 0);
                A.eb();
                var c = y.U();
                a.j(h.Qd, w(c), c, w(E), E);
                F & 12 && cc();
                Tb(d)
            }
        }

        function sc(c) {
            var a = b.Qb(c), d = b.jb(a, "1", Sb);
            if (u === d)if (O) {
                b.Fe(c);
                while (a && u !== a) {
                    (a.tagName == "A" || b.v(a, "data-jssor-button")) && b.Gb(c);
                    a = a.parentNode
                }
            } else v & 4 && (v = 0)
        }

        function Vb(a) {
            B[s];
            s = w(a);
            Cb = B[s];
            y.A(s);
            gc(s);
            return s
        }

        function Fc(b, c) {
            x = 0;
            Vb(b);
            if (v & 2 && (fb > 0 && s == q - 1 || fb < 0 && !s)) v = 0;
            a.j(h.Jd, s, c)
        }

        function gc(a, c) {
            K = a;
            b.f(X, function (b) {
                b.ec(w(a), a, c)
            })
        }

        function yc() {
            var b = h.ad || 0, a = hb;
            if (Jb) a & 1 && (a &= 1);
            h.ad |= a;
            return N = a & ~b
        }

        function wc() {
            if (N) {
                h.ad &= ~hb;
                N = 0
            }
        }

        function kc() {
            var a = b.fc();
            b.G(a, bb);
            b.E(a, "absolute");
            return a
        }

        function w(b, a) {
            a = a || q || 1;
            return (b % a + a) % a
        }

        function yb(c, a, b) {
            v & 8 && (v = 0);
            vb(c, kb, a, b)
        }

        function Ib() {
            b.f(X, function (a) {
                a.gc(a.zb.nf <= G)
            })
        }

        function qc() {
            if (!G) {
                G = 1;
                Ib();
                if (!D) {
                    F & 12 && Tb();
                    F & 3 && B[s] && B[s].qc()
                }
            }
            a.j(h.zd)
        }

        function pc() {
            if (G) {
                G = 0;
                Ib();
                D || !(F & 12) || Ub()
            }
            a.j(h.xd)
        }

        function rc() {
            b.f(Y, function (a) {
                b.G(a, bb);
                b.E(a, "absolute");
                b.Vb(a, "hidden");
                b.L(a)
            });
            b.G(T, bb)
        }

        function Mb(b, a) {
            vb(b, a, d)
        }

        function vb(g, f, m, o) {
            if (Eb && (!D && (G || !(F & 12)) || n.nd)) {
                S = d;
                D = k;
                A.eb();
                if (f == i) f = kb;
                var e = sb.xb(), b = g;
                if (m) {
                    b = K + g;
                    if (g > 0) b = c.ceil(b); else b = c.floor(b)
                }
                var a = b;
                if (!(J & 1))if (o) a = w(a); else if (J & 2 && (a < 0 && !K || a > q - t && K >= q - t)) a = a < 0 ? q - t : 0; else a = c.max(0, c.min(a, q - t));
                var l = (a - e) % q;
                a = e + l;
                var h = e == a ? 0 : f * c.abs(l), j = 1;
                if (t > 1) j = (db & 1 ? Qb : Pb) / nb;
                h = c.min(h, f * j * 1.5);
                A.Mb(e, a, h || 1)
            }
        }

        a.vb = function (a) {
            if (a == i)return a;
            if (a != v) {
                v = a;
                v && B[s] && B[s].qc()
            }
        };
        function Kb() {
            return b.n(hc || u)
        }

        function Hb() {
            return b.o(hc || u)
        }

        a.N = Kb;
        a.bb = Hb;
        a.pe = function (b) {
            if (b == i)return Ob || R;
            a.Nb(b, b / R * P)
        };
        a.Nb = function (c, a) {
            b.n(u, c);
            b.o(u, a);
            nc = c / R;
            ic = a / P;
            b.f(ac, function (a) {
                a.Nb(nc, ic)
            });
            if (!Ob) {
                b.mb(Q, z);
                b.B(Q, 0);
                b.C(Q, 0)
            }
            Ob = c
        };
        a.Sc = function () {
            a.vb(v || 1)
        };
        a.Ib = function (o, l) {
            a.Q = u = b.kb(o);
            R = b.n(u);
            P = b.o(u);
            n = b.cb({
                ib: 0,
                df: 1,
                rc: 1,
                uc: 0,
                vb: 0,
                Bb: 1,
                tc: d,
                nd: d,
                fe: 1,
                Nc: 3e3,
                fd: 1,
                gd: 500,
                sc: e.Rd,
                hd: 20,
                id: 0,
                lb: 1,
                Mc: 0,
                ce: 1,
                ed: 1,
                jd: 1
            }, l);
            n.tc = n.tc && b.ie();
            if (n.Lc != i) n.Nc = n.Lc;
            if (n.Vd != i) n.Mc = n.Vd;
            db = n.ed & 3;
            eb = n.of;
            U = b.cb({R: r}, n.lf);
            ob = n.Ud;
            cb = n.Td;
            gb = n.pf;
            !n.ce;
            var s = b.Ab(u);
            b.f(s, function (a, d) {
                var c = b.k(a, "u");
                if (c == "loading") T = a; else {
                    if (c == "slides") z = a;
                    if (c == "navigator") Rb = a;
                    if (c == "arrowleft") xb = a;
                    if (c == "arrowright") wb = a;
                    if (c == "thumbnavigator") pb = a;
                    if (a.tagName == "DIV" || a.tagName == "SPAN") ac[c || d] = new tc(a, c == "slides", b.He(["slides", "thumbnavigator"])[c])
                }
            });
            T = T || b.fc(j);
            Qb = b.n(z);
            Pb = b.o(z);
            I = n.ge || Qb;
            H = n.je || Pb;
            bb = {H: I, I: H, g: 0, i: 0};
            Lb = n.id;
            lb = I + Lb;
            mb = H + Lb;
            nb = db & 1 ? lb : mb;
            fb = n.fe;
            F = n.fd;
            dc = n.Nc;
            kb = n.gd;
            tb = new vc;
            if (n.tc) Bb = function (a, c, d) {
                b.Ob(a, {fb: c, db: d})
            };
            v = n.vb & 63;
            a.zb = l;
            b.v(u, Sb, "1");
            b.u(z, b.u(z) || 0);
            b.E(z, "absolute");
            Q = b.nb(z, d);
            b.mb(Q, z);
            Z = new Bc;
            b.M(Q, Z.Sb);
            b.Vb(z, "hidden");
            F &= Jb ? 10 : 5;
            var x = b.Ab(z);
            b.f(x, function (a) {
                a.tagName == "DIV" && !b.k(a, "u") && Y.push(a);
                b.u(a, (b.u(a) || 0) + 1)
            });
            L = kc();
            b.hb(L, "backgroundColor", "#000");
            b.Wb(L, 0);
            b.u(L, 0);
            b.mb(L, z.firstChild, z);
            q = Y.length;
            t = c.min(n.lb, q);
            Eb = t < q;
            J = Eb ? n.Bb : 0;
            if (q) {
                rc();
                if (eb) {
                    oc = eb.rf;
                    Ab = eb.R;
                    Db = t == 1 && q > 1 && Ab && (!b.md() || b.od() >= 9)
                }
                jb = Db || t >= q || !(J & 1) ? 0 : n.Mc;
                hb = (t > 1 || jb ? db : -1) & n.jd;
                ub.qd && b.hb(z, ub.qd, ([f, "pan-y", "pan-x", "none"])[hb] || "");
                if (Db) C = new Ab(tb, I, H, eb, Jb, Bb);
                for (var k = 0; k < Y.length; k++) {
                    var y = Y[k], m = new Ac(y, k);
                    B.push(m)
                }
                b.L(T);
                sb = new Cc;
                A = new uc(sb, Z);
                b.a(u, "click", sc, d);
                b.a(u, "mouseleave", qc);
                b.a(u, "mouseenter", pc);
                if (hb) {
                    b.a(u, "mousedown", lc);
                    b.a(u, "touchstart", xc);
                    b.a(u, "dragstart", Wb);
                    b.a(u, "selectstart", Wb);
                    b.a(g, "mouseup", ab);
                    b.a(j, "mouseup", ab);
                    b.a(j, "touchend", ab);
                    b.a(j, "touchcancel", ab);
                    b.a(g, "blur", ab)
                }
                if (Rb && ob) {
                    ec = new ob.R(Rb, ob, Kb(), Hb());
                    X.push(ec)
                }
                if (cb && xb && wb) {
                    cb.Bb = J;
                    cb.lb = t;
                    fc = new cb.R(xb, wb, cb, Kb(), Hb());
                    X.push(fc)
                }
                if (pb && gb) {
                    gb.uc = n.uc;
                    bc = new gb.R(pb, gb);
                    b.v(pb, Yb, "1");
                    X.push(bc)
                }
                b.f(X, function (a) {
                    a.nc(q, B, T);
                    a.rb(p.bc, yb)
                });
                b.hb(u, "visibility", "visible");
                a.Nb(R, P);
                Ib();
                n.rc && b.a(j, "keydown", function (a) {
                    if (a.keyCode == 37) yb(-n.rc, d); else a.keyCode == 39 && yb(n.rc, d)
                });
                var h = n.uc;
                h = w(h);
                A.Mb(h, h, 0)
            }
        };
        b.Ib(a)
    };
    h.Xe = 21;
    h.Ld = 22;
    h.Qd = 23;
    h.Je = 24;
    h.Ie = 25;
    h.ef = 26;
    h.ve = 27;
    h.Kd = 28;
    h.xd = 31;
    h.zd = 32;
    h.Me = 202;
    h.Jd = 203;
    h.ne = 206;
    h.Hd = 207;
    h.Id = 208;
    h.Ic = 209;
    jssor_1_slider_init = function () {
        var f = {vb: 1, Lc: 2e3, sc: e.Cd, Td: {R: t}, Ud: {R: s}}, d = new h("jssor_1", f);

        function a() {
            var b = d.Q.parentNode.clientWidth;
            if (b) {
                b = c.min(b, 2000);
                d.pe(b)
            } else g.setTimeout(a, 30)
        }

        a();
        b.a(g, "load", a);
        b.a(g, "resize", a);
        b.a(g, "orientationchange", a)
    }
})(window, document, Math, null, true, false)
