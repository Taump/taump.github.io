/*! For license information please see main.00dff651.chunk.js.LICENSE */
(this["webpackJsonpoption-dapp"] = this["webpackJsonpoption-dapp"] || []).push([
  [0],
  {
    116: function(e, t, r) {
      e.exports = { select: "SelectAA_select__2jrBu" };
    },
    123: function(e, t, r) {
      e.exports = {
        layout: "Layout_layout__2BEq3",
        content: "Layout_content__I06dq",
        wrap: "Layout_wrap__1sB59"
      };
    },
    124: function(e, t, r) {
      e.exports = {
        input: "Deploy_input__XSYn9",
        select: "Deploy_select__10pz6",
        alertWrap: "Deploy_alertWrap__i7xvt"
      };
    },
    156: function(e, t, r) {
      e.exports = {
        SelectAaRow: "IssuingAssets_SelectAaRow__3U6se",
        alertWrap: "IssuingAssets_alertWrap__VqgAj"
      };
    },
    181: function(e, t, r) {
      window,
        (e.exports = (function(e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var i = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function(e, t, n) {
              r.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function(e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var i in e)
                  r.d(
                    n,
                    i,
                    function(t) {
                      return e[t];
                    }.bind(null, i)
                  );
              return n;
            }),
            (r.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 108))
          );
        })([
          function(e, t) {
            "function" == typeof Object.create
              ? (e.exports = function(e, t) {
                  t &&
                    ((e.super_ = t),
                    (e.prototype = Object.create(t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                      }
                    })));
                })
              : (e.exports = function(e, t) {
                  if (t) {
                    e.super_ = t;
                    var r = function() {};
                    (r.prototype = t.prototype),
                      (e.prototype = new r()),
                      (e.prototype.constructor = e);
                  }
                });
          },
          function(e, t) {
            var r = (e.exports = { version: "2.6.11" });
            "number" == typeof __e && (__e = r);
          },
          function(e, t, r) {
            var n = r(12),
              i = n.Buffer;
            function a(e, t) {
              for (var r in e) t[r] = e[r];
            }
            function o(e, t, r) {
              return i(e, t, r);
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
              ? (e.exports = n)
              : (a(n, t), (t.Buffer = o)),
              (o.prototype = Object.create(i.prototype)),
              a(i, o),
              (o.from = function(e, t, r) {
                if ("number" == typeof e)
                  throw new TypeError("Argument must not be a number");
                return i(e, t, r);
              }),
              (o.alloc = function(e, t, r) {
                if ("number" != typeof e)
                  throw new TypeError("Argument must be a number");
                var n = i(e);
                return (
                  void 0 !== t
                    ? "string" == typeof r
                      ? n.fill(t, r)
                      : n.fill(t)
                    : n.fill(0),
                  n
                );
              }),
              (o.allocUnsafe = function(e) {
                if ("number" != typeof e)
                  throw new TypeError("Argument must be a number");
                return i(e);
              }),
              (o.allocUnsafeSlow = function(e) {
                if ("number" != typeof e)
                  throw new TypeError("Argument must be a number");
                return n.SlowBuffer(e);
              });
          },
          function(e, t) {
            var r = (e.exports =
              "undefined" != typeof window && window.Math == Math
                ? window
                : "undefined" != typeof self && self.Math == Math
                ? self
                : Function("return this")());
            "number" == typeof __g && (__g = r);
          },
          function(e, t, r) {
            var n = r(46)("wks"),
              i = r(33),
              a = r(3).Symbol,
              o = "function" == typeof a;
            (e.exports = function(e) {
              return n[e] || (n[e] = (o && a[e]) || (o ? a : i)("Symbol." + e));
            }).store = n;
          },
          function(e, t, r) {
            "use strict";
            var n = t,
              i = r(6),
              a = r(17),
              o = r(101);
            (n.assert = a),
              (n.toArray = o.toArray),
              (n.zero2 = o.zero2),
              (n.toHex = o.toHex),
              (n.encode = o.encode),
              (n.getNAF = function(e, t, r) {
                var n = new Array(Math.max(e.bitLength(), r) + 1);
                n.fill(0);
                for (
                  var i = 1 << (t + 1), a = e.clone(), o = 0;
                  o < n.length;
                  o++
                ) {
                  var s,
                    f = a.andln(i - 1);
                  a.isOdd()
                    ? ((s = f > (i >> 1) - 1 ? (i >> 1) - f : f), a.isubn(s))
                    : (s = 0),
                    (n[o] = s),
                    a.iushrn(1);
                }
                return n;
              }),
              (n.getJSF = function(e, t) {
                var r = [[], []];
                (e = e.clone()), (t = t.clone());
                for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0; ) {
                  var a,
                    o,
                    s,
                    f = (e.andln(3) + n) & 3,
                    u = (t.andln(3) + i) & 3;
                  3 === f && (f = -1),
                    3 === u && (u = -1),
                    (a =
                      0 == (1 & f)
                        ? 0
                        : (3 !== (s = (e.andln(7) + n) & 7) && 5 !== s) ||
                          2 !== u
                        ? f
                        : -f),
                    r[0].push(a),
                    (o =
                      0 == (1 & u)
                        ? 0
                        : (3 !== (s = (t.andln(7) + i) & 7) && 5 !== s) ||
                          2 !== f
                        ? u
                        : -u),
                    r[1].push(o),
                    2 * n === a + 1 && (n = 1 - n),
                    2 * i === o + 1 && (i = 1 - i),
                    e.iushrn(1),
                    t.iushrn(1);
                }
                return r;
              }),
              (n.cachedProperty = function(e, t, r) {
                var n = "_" + t;
                e.prototype[t] = function() {
                  return void 0 !== this[n]
                    ? this[n]
                    : (this[n] = r.call(this));
                };
              }),
              (n.parseBytes = function(e) {
                return "string" == typeof e ? n.toArray(e, "hex") : e;
              }),
              (n.intFromLE = function(e) {
                return new i(e, "hex", "le");
              });
          },
          function(e, t, r) {
            (function(e) {
              !(function(e, t) {
                "use strict";
                function n(e, t) {
                  if (!e) throw new Error(t || "Assertion failed");
                }
                function i(e, t) {
                  e.super_ = t;
                  var r = function() {};
                  (r.prototype = t.prototype),
                    (e.prototype = new r()),
                    (e.prototype.constructor = e);
                }
                function a(e, t, r) {
                  if (a.isBN(e)) return e;
                  (this.negative = 0),
                    (this.words = null),
                    (this.length = 0),
                    (this.red = null),
                    null !== e &&
                      (("le" !== t && "be" !== t) || ((r = t), (t = 10)),
                      this._init(e || 0, t || 10, r || "be"));
                }
                var o;
                "object" == typeof e ? (e.exports = a) : (t.BN = a),
                  (a.BN = a),
                  (a.wordSize = 26);
                try {
                  o = r(201).Buffer;
                } catch (e) {}
                function s(e, t, r) {
                  for (
                    var n = 0, i = Math.min(e.length, r), a = t;
                    a < i;
                    a++
                  ) {
                    var o = e.charCodeAt(a) - 48;
                    (n <<= 4),
                      (n |=
                        o >= 49 && o <= 54
                          ? o - 49 + 10
                          : o >= 17 && o <= 22
                          ? o - 17 + 10
                          : 15 & o);
                  }
                  return n;
                }
                function f(e, t, r, n) {
                  for (
                    var i = 0, a = Math.min(e.length, r), o = t;
                    o < a;
                    o++
                  ) {
                    var s = e.charCodeAt(o) - 48;
                    (i *= n),
                      (i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s);
                  }
                  return i;
                }
                (a.isBN = function(e) {
                  return (
                    e instanceof a ||
                    (null !== e &&
                      "object" == typeof e &&
                      e.constructor.wordSize === a.wordSize &&
                      Array.isArray(e.words))
                  );
                }),
                  (a.max = function(e, t) {
                    return e.cmp(t) > 0 ? e : t;
                  }),
                  (a.min = function(e, t) {
                    return e.cmp(t) < 0 ? e : t;
                  }),
                  (a.prototype._init = function(e, t, r) {
                    if ("number" == typeof e) return this._initNumber(e, t, r);
                    if ("object" == typeof e) return this._initArray(e, t, r);
                    "hex" === t && (t = 16),
                      n(t === (0 | t) && t >= 2 && t <= 36);
                    var i = 0;
                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++,
                      16 === t
                        ? this._parseHex(e, i)
                        : this._parseBase(e, t, i),
                      "-" === e[0] && (this.negative = 1),
                      this.strip(),
                      "le" === r && this._initArray(this.toArray(), t, r);
                  }),
                  (a.prototype._initNumber = function(e, t, r) {
                    e < 0 && ((this.negative = 1), (e = -e)),
                      e < 67108864
                        ? ((this.words = [67108863 & e]), (this.length = 1))
                        : e < 4503599627370496
                        ? ((this.words = [
                            67108863 & e,
                            (e / 67108864) & 67108863
                          ]),
                          (this.length = 2))
                        : (n(e < 9007199254740992),
                          (this.words = [
                            67108863 & e,
                            (e / 67108864) & 67108863,
                            1
                          ]),
                          (this.length = 3)),
                      "le" === r && this._initArray(this.toArray(), t, r);
                  }),
                  (a.prototype._initArray = function(e, t, r) {
                    if ((n("number" == typeof e.length), e.length <= 0))
                      return (this.words = [0]), (this.length = 1), this;
                    (this.length = Math.ceil(e.length / 3)),
                      (this.words = new Array(this.length));
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var a,
                      o,
                      s = 0;
                    if ("be" === r)
                      for (i = e.length - 1, a = 0; i >= 0; i -= 3)
                        (o = e[i] | (e[i - 1] << 8) | (e[i - 2] << 16)),
                          (this.words[a] |= (o << s) & 67108863),
                          (this.words[a + 1] = (o >>> (26 - s)) & 67108863),
                          (s += 24) >= 26 && ((s -= 26), a++);
                    else if ("le" === r)
                      for (i = 0, a = 0; i < e.length; i += 3)
                        (o = e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)),
                          (this.words[a] |= (o << s) & 67108863),
                          (this.words[a + 1] = (o >>> (26 - s)) & 67108863),
                          (s += 24) >= 26 && ((s -= 26), a++);
                    return this.strip();
                  }),
                  (a.prototype._parseHex = function(e, t) {
                    (this.length = Math.ceil((e.length - t) / 6)),
                      (this.words = new Array(this.length));
                    for (var r = 0; r < this.length; r++) this.words[r] = 0;
                    var n,
                      i,
                      a = 0;
                    for (r = e.length - 6, n = 0; r >= t; r -= 6)
                      (i = s(e, r, r + 6)),
                        (this.words[n] |= (i << a) & 67108863),
                        (this.words[n + 1] |= (i >>> (26 - a)) & 4194303),
                        (a += 24) >= 26 && ((a -= 26), n++);
                    r + 6 !== t &&
                      ((i = s(e, t, r + 6)),
                      (this.words[n] |= (i << a) & 67108863),
                      (this.words[n + 1] |= (i >>> (26 - a)) & 4194303)),
                      this.strip();
                  }),
                  (a.prototype._parseBase = function(e, t, r) {
                    (this.words = [0]), (this.length = 1);
                    for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                    n--, (i = (i / t) | 0);
                    for (
                      var a = e.length - r,
                        o = a % n,
                        s = Math.min(a, a - o) + r,
                        u = 0,
                        c = r;
                      c < s;
                      c += n
                    )
                      (u = f(e, c, c + n, t)),
                        this.imuln(i),
                        this.words[0] + u < 67108864
                          ? (this.words[0] += u)
                          : this._iaddn(u);
                    if (0 !== o) {
                      var d = 1;
                      for (u = f(e, c, e.length, t), c = 0; c < o; c++) d *= t;
                      this.imuln(d),
                        this.words[0] + u < 67108864
                          ? (this.words[0] += u)
                          : this._iaddn(u);
                    }
                  }),
                  (a.prototype.copy = function(e) {
                    e.words = new Array(this.length);
                    for (var t = 0; t < this.length; t++)
                      e.words[t] = this.words[t];
                    (e.length = this.length),
                      (e.negative = this.negative),
                      (e.red = this.red);
                  }),
                  (a.prototype.clone = function() {
                    var e = new a(null);
                    return this.copy(e), e;
                  }),
                  (a.prototype._expand = function(e) {
                    for (; this.length < e; ) this.words[this.length++] = 0;
                    return this;
                  }),
                  (a.prototype.strip = function() {
                    for (
                      ;
                      this.length > 1 && 0 === this.words[this.length - 1];

                    )
                      this.length--;
                    return this._normSign();
                  }),
                  (a.prototype._normSign = function() {
                    return (
                      1 === this.length &&
                        0 === this.words[0] &&
                        (this.negative = 0),
                      this
                    );
                  }),
                  (a.prototype.inspect = function() {
                    return (
                      (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    );
                  });
                var u = [
                    "",
                    "0",
                    "00",
                    "000",
                    "0000",
                    "00000",
                    "000000",
                    "0000000",
                    "00000000",
                    "000000000",
                    "0000000000",
                    "00000000000",
                    "000000000000",
                    "0000000000000",
                    "00000000000000",
                    "000000000000000",
                    "0000000000000000",
                    "00000000000000000",
                    "000000000000000000",
                    "0000000000000000000",
                    "00000000000000000000",
                    "000000000000000000000",
                    "0000000000000000000000",
                    "00000000000000000000000",
                    "000000000000000000000000",
                    "0000000000000000000000000"
                  ],
                  c = [
                    0,
                    0,
                    25,
                    16,
                    12,
                    11,
                    10,
                    9,
                    8,
                    8,
                    7,
                    7,
                    7,
                    7,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5
                  ],
                  d = [
                    0,
                    0,
                    33554432,
                    43046721,
                    16777216,
                    48828125,
                    60466176,
                    40353607,
                    16777216,
                    43046721,
                    1e7,
                    19487171,
                    35831808,
                    62748517,
                    7529536,
                    11390625,
                    16777216,
                    24137569,
                    34012224,
                    47045881,
                    64e6,
                    4084101,
                    5153632,
                    6436343,
                    7962624,
                    9765625,
                    11881376,
                    14348907,
                    17210368,
                    20511149,
                    243e5,
                    28629151,
                    33554432,
                    39135393,
                    45435424,
                    52521875,
                    60466176
                  ];
                function h(e, t, r) {
                  r.negative = t.negative ^ e.negative;
                  var n = (e.length + t.length) | 0;
                  (r.length = n), (n = (n - 1) | 0);
                  var i = 0 | e.words[0],
                    a = 0 | t.words[0],
                    o = i * a,
                    s = 67108863 & o,
                    f = (o / 67108864) | 0;
                  r.words[0] = s;
                  for (var u = 1; u < n; u++) {
                    for (
                      var c = f >>> 26,
                        d = 67108863 & f,
                        h = Math.min(u, t.length - 1),
                        l = Math.max(0, u - e.length + 1);
                      l <= h;
                      l++
                    ) {
                      var p = (u - l) | 0;
                      (c +=
                        ((o = (i = 0 | e.words[p]) * (a = 0 | t.words[l]) + d) /
                          67108864) |
                        0),
                        (d = 67108863 & o);
                    }
                    (r.words[u] = 0 | d), (f = 0 | c);
                  }
                  return 0 !== f ? (r.words[u] = 0 | f) : r.length--, r.strip();
                }
                (a.prototype.toString = function(e, t) {
                  var r;
                  if (((t = 0 | t || 1), 16 === (e = e || 10) || "hex" === e)) {
                    r = "";
                    for (var i = 0, a = 0, o = 0; o < this.length; o++) {
                      var s = this.words[o],
                        f = (16777215 & ((s << i) | a)).toString(16);
                      (r =
                        0 !== (a = (s >>> (24 - i)) & 16777215) ||
                        o !== this.length - 1
                          ? u[6 - f.length] + f + r
                          : f + r),
                        (i += 2) >= 26 && ((i -= 26), o--);
                    }
                    for (
                      0 !== a && (r = a.toString(16) + r);
                      r.length % t != 0;

                    )
                      r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r), r;
                  }
                  if (e === (0 | e) && e >= 2 && e <= 36) {
                    var h = c[e],
                      l = d[e];
                    r = "";
                    var p = this.clone();
                    for (p.negative = 0; !p.isZero(); ) {
                      var b = p.modn(l).toString(e);
                      r = (p = p.idivn(l)).isZero()
                        ? b + r
                        : u[h - b.length] + b + r;
                    }
                    for (this.isZero() && (r = "0" + r); r.length % t != 0; )
                      r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r), r;
                  }
                  n(!1, "Base should be between 2 and 36");
                }),
                  (a.prototype.toNumber = function() {
                    var e = this.words[0];
                    return (
                      2 === this.length
                        ? (e += 67108864 * this.words[1])
                        : 3 === this.length && 1 === this.words[2]
                        ? (e += 4503599627370496 + 67108864 * this.words[1])
                        : this.length > 2 &&
                          n(!1, "Number can only safely store up to 53 bits"),
                      0 !== this.negative ? -e : e
                    );
                  }),
                  (a.prototype.toJSON = function() {
                    return this.toString(16);
                  }),
                  (a.prototype.toBuffer = function(e, t) {
                    return n(void 0 !== o), this.toArrayLike(o, e, t);
                  }),
                  (a.prototype.toArray = function(e, t) {
                    return this.toArrayLike(Array, e, t);
                  }),
                  (a.prototype.toArrayLike = function(e, t, r) {
                    var i = this.byteLength(),
                      a = r || Math.max(1, i);
                    n(i <= a, "byte array longer than desired length"),
                      n(a > 0, "Requested array length <= 0"),
                      this.strip();
                    var o,
                      s,
                      f = "le" === t,
                      u = new e(a),
                      c = this.clone();
                    if (f) {
                      for (s = 0; !c.isZero(); s++)
                        (o = c.andln(255)), c.iushrn(8), (u[s] = o);
                      for (; s < a; s++) u[s] = 0;
                    } else {
                      for (s = 0; s < a - i; s++) u[s] = 0;
                      for (s = 0; !c.isZero(); s++)
                        (o = c.andln(255)), c.iushrn(8), (u[a - s - 1] = o);
                    }
                    return u;
                  }),
                  Math.clz32
                    ? (a.prototype._countBits = function(e) {
                        return 32 - Math.clz32(e);
                      })
                    : (a.prototype._countBits = function(e) {
                        var t = e,
                          r = 0;
                        return (
                          t >= 4096 && ((r += 13), (t >>>= 13)),
                          t >= 64 && ((r += 7), (t >>>= 7)),
                          t >= 8 && ((r += 4), (t >>>= 4)),
                          t >= 2 && ((r += 2), (t >>>= 2)),
                          r + t
                        );
                      }),
                  (a.prototype._zeroBits = function(e) {
                    if (0 === e) return 26;
                    var t = e,
                      r = 0;
                    return (
                      0 == (8191 & t) && ((r += 13), (t >>>= 13)),
                      0 == (127 & t) && ((r += 7), (t >>>= 7)),
                      0 == (15 & t) && ((r += 4), (t >>>= 4)),
                      0 == (3 & t) && ((r += 2), (t >>>= 2)),
                      0 == (1 & t) && r++,
                      r
                    );
                  }),
                  (a.prototype.bitLength = function() {
                    var e = this.words[this.length - 1],
                      t = this._countBits(e);
                    return 26 * (this.length - 1) + t;
                  }),
                  (a.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var e = 0, t = 0; t < this.length; t++) {
                      var r = this._zeroBits(this.words[t]);
                      if (((e += r), 26 !== r)) break;
                    }
                    return e;
                  }),
                  (a.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8);
                  }),
                  (a.prototype.toTwos = function(e) {
                    return 0 !== this.negative
                      ? this.abs()
                          .inotn(e)
                          .iaddn(1)
                      : this.clone();
                  }),
                  (a.prototype.fromTwos = function(e) {
                    return this.testn(e - 1)
                      ? this.notn(e)
                          .iaddn(1)
                          .ineg()
                      : this.clone();
                  }),
                  (a.prototype.isNeg = function() {
                    return 0 !== this.negative;
                  }),
                  (a.prototype.neg = function() {
                    return this.clone().ineg();
                  }),
                  (a.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this;
                  }),
                  (a.prototype.iuor = function(e) {
                    for (; this.length < e.length; )
                      this.words[this.length++] = 0;
                    for (var t = 0; t < e.length; t++)
                      this.words[t] = this.words[t] | e.words[t];
                    return this.strip();
                  }),
                  (a.prototype.ior = function(e) {
                    return n(0 == (this.negative | e.negative)), this.iuor(e);
                  }),
                  (a.prototype.or = function(e) {
                    return this.length > e.length
                      ? this.clone().ior(e)
                      : e.clone().ior(this);
                  }),
                  (a.prototype.uor = function(e) {
                    return this.length > e.length
                      ? this.clone().iuor(e)
                      : e.clone().iuor(this);
                  }),
                  (a.prototype.iuand = function(e) {
                    var t;
                    t = this.length > e.length ? e : this;
                    for (var r = 0; r < t.length; r++)
                      this.words[r] = this.words[r] & e.words[r];
                    return (this.length = t.length), this.strip();
                  }),
                  (a.prototype.iand = function(e) {
                    return n(0 == (this.negative | e.negative)), this.iuand(e);
                  }),
                  (a.prototype.and = function(e) {
                    return this.length > e.length
                      ? this.clone().iand(e)
                      : e.clone().iand(this);
                  }),
                  (a.prototype.uand = function(e) {
                    return this.length > e.length
                      ? this.clone().iuand(e)
                      : e.clone().iuand(this);
                  }),
                  (a.prototype.iuxor = function(e) {
                    var t, r;
                    this.length > e.length
                      ? ((t = this), (r = e))
                      : ((t = e), (r = this));
                    for (var n = 0; n < r.length; n++)
                      this.words[n] = t.words[n] ^ r.words[n];
                    if (this !== t)
                      for (; n < t.length; n++) this.words[n] = t.words[n];
                    return (this.length = t.length), this.strip();
                  }),
                  (a.prototype.ixor = function(e) {
                    return n(0 == (this.negative | e.negative)), this.iuxor(e);
                  }),
                  (a.prototype.xor = function(e) {
                    return this.length > e.length
                      ? this.clone().ixor(e)
                      : e.clone().ixor(this);
                  }),
                  (a.prototype.uxor = function(e) {
                    return this.length > e.length
                      ? this.clone().iuxor(e)
                      : e.clone().iuxor(this);
                  }),
                  (a.prototype.inotn = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t = 0 | Math.ceil(e / 26),
                      r = e % 26;
                    this._expand(t), r > 0 && t--;
                    for (var i = 0; i < t; i++)
                      this.words[i] = 67108863 & ~this.words[i];
                    return (
                      r > 0 &&
                        (this.words[i] =
                          ~this.words[i] & (67108863 >> (26 - r))),
                      this.strip()
                    );
                  }),
                  (a.prototype.notn = function(e) {
                    return this.clone().inotn(e);
                  }),
                  (a.prototype.setn = function(e, t) {
                    n("number" == typeof e && e >= 0);
                    var r = (e / 26) | 0,
                      i = e % 26;
                    return (
                      this._expand(r + 1),
                      (this.words[r] = t
                        ? this.words[r] | (1 << i)
                        : this.words[r] & ~(1 << i)),
                      this.strip()
                    );
                  }),
                  (a.prototype.iadd = function(e) {
                    var t, r, n;
                    if (0 !== this.negative && 0 === e.negative)
                      return (
                        (this.negative = 0),
                        (t = this.isub(e)),
                        (this.negative ^= 1),
                        this._normSign()
                      );
                    if (0 === this.negative && 0 !== e.negative)
                      return (
                        (e.negative = 0),
                        (t = this.isub(e)),
                        (e.negative = 1),
                        t._normSign()
                      );
                    this.length > e.length
                      ? ((r = this), (n = e))
                      : ((r = e), (n = this));
                    for (var i = 0, a = 0; a < n.length; a++)
                      (t = (0 | r.words[a]) + (0 | n.words[a]) + i),
                        (this.words[a] = 67108863 & t),
                        (i = t >>> 26);
                    for (; 0 !== i && a < r.length; a++)
                      (t = (0 | r.words[a]) + i),
                        (this.words[a] = 67108863 & t),
                        (i = t >>> 26);
                    if (((this.length = r.length), 0 !== i))
                      (this.words[this.length] = i), this.length++;
                    else if (r !== this)
                      for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this;
                  }),
                  (a.prototype.add = function(e) {
                    var t;
                    return 0 !== e.negative && 0 === this.negative
                      ? ((e.negative = 0),
                        (t = this.sub(e)),
                        (e.negative ^= 1),
                        t)
                      : 0 === e.negative && 0 !== this.negative
                      ? ((this.negative = 0),
                        (t = e.sub(this)),
                        (this.negative = 1),
                        t)
                      : this.length > e.length
                      ? this.clone().iadd(e)
                      : e.clone().iadd(this);
                  }),
                  (a.prototype.isub = function(e) {
                    if (0 !== e.negative) {
                      e.negative = 0;
                      var t = this.iadd(e);
                      return (e.negative = 1), t._normSign();
                    }
                    if (0 !== this.negative)
                      return (
                        (this.negative = 0),
                        this.iadd(e),
                        (this.negative = 1),
                        this._normSign()
                      );
                    var r,
                      n,
                      i = this.cmp(e);
                    if (0 === i)
                      return (
                        (this.negative = 0),
                        (this.length = 1),
                        (this.words[0] = 0),
                        this
                      );
                    i > 0 ? ((r = this), (n = e)) : ((r = e), (n = this));
                    for (var a = 0, o = 0; o < n.length; o++)
                      (a = (t = (0 | r.words[o]) - (0 | n.words[o]) + a) >> 26),
                        (this.words[o] = 67108863 & t);
                    for (; 0 !== a && o < r.length; o++)
                      (a = (t = (0 | r.words[o]) + a) >> 26),
                        (this.words[o] = 67108863 & t);
                    if (0 === a && o < r.length && r !== this)
                      for (; o < r.length; o++) this.words[o] = r.words[o];
                    return (
                      (this.length = Math.max(this.length, o)),
                      r !== this && (this.negative = 1),
                      this.strip()
                    );
                  }),
                  (a.prototype.sub = function(e) {
                    return this.clone().isub(e);
                  });
                var l = function(e, t, r) {
                  var n,
                    i,
                    a,
                    o = e.words,
                    s = t.words,
                    f = r.words,
                    u = 0,
                    c = 0 | o[0],
                    d = 8191 & c,
                    h = c >>> 13,
                    l = 0 | o[1],
                    p = 8191 & l,
                    b = l >>> 13,
                    m = 0 | o[2],
                    v = 8191 & m,
                    g = m >>> 13,
                    y = 0 | o[3],
                    _ = 8191 & y,
                    w = y >>> 13,
                    E = 0 | o[4],
                    A = 8191 & E,
                    S = E >>> 13,
                    M = 0 | o[5],
                    I = 8191 & M,
                    x = M >>> 13,
                    T = 0 | o[6],
                    L = 8191 & T,
                    R = T >>> 13,
                    P = 0 | o[7],
                    k = 8191 & P,
                    N = P >>> 13,
                    O = 0 | o[8],
                    C = 8191 & O,
                    B = O >>> 13,
                    j = 0 | o[9],
                    D = 8191 & j,
                    U = j >>> 13,
                    V = 0 | s[0],
                    z = 8191 & V,
                    Y = V >>> 13,
                    q = 0 | s[1],
                    F = 8191 & q,
                    K = q >>> 13,
                    W = 0 | s[2],
                    G = 8191 & W,
                    H = W >>> 13,
                    Z = 0 | s[3],
                    J = 8191 & Z,
                    X = Z >>> 13,
                    Q = 0 | s[4],
                    $ = 8191 & Q,
                    ee = Q >>> 13,
                    te = 0 | s[5],
                    re = 8191 & te,
                    ne = te >>> 13,
                    ie = 0 | s[6],
                    ae = 8191 & ie,
                    oe = ie >>> 13,
                    se = 0 | s[7],
                    fe = 8191 & se,
                    ue = se >>> 13,
                    ce = 0 | s[8],
                    de = 8191 & ce,
                    he = ce >>> 13,
                    le = 0 | s[9],
                    pe = 8191 & le,
                    be = le >>> 13;
                  (r.negative = e.negative ^ t.negative), (r.length = 19);
                  var me =
                    (((u + (n = Math.imul(d, z))) | 0) +
                      ((8191 &
                        (i = ((i = Math.imul(d, Y)) + Math.imul(h, z)) | 0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = Math.imul(h, Y)) + (i >>> 13)) | 0) + (me >>> 26)) |
                    0),
                    (me &= 67108863),
                    (n = Math.imul(p, z)),
                    (i = ((i = Math.imul(p, Y)) + Math.imul(b, z)) | 0),
                    (a = Math.imul(b, Y));
                  var ve =
                    (((u + (n = (n + Math.imul(d, F)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(d, K)) | 0) + Math.imul(h, F)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(h, K)) | 0) + (i >>> 13)) | 0) +
                      (ve >>> 26)) |
                    0),
                    (ve &= 67108863),
                    (n = Math.imul(v, z)),
                    (i = ((i = Math.imul(v, Y)) + Math.imul(g, z)) | 0),
                    (a = Math.imul(g, Y)),
                    (n = (n + Math.imul(p, F)) | 0),
                    (i =
                      ((i = (i + Math.imul(p, K)) | 0) + Math.imul(b, F)) | 0),
                    (a = (a + Math.imul(b, K)) | 0);
                  var ge =
                    (((u + (n = (n + Math.imul(d, G)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(d, H)) | 0) + Math.imul(h, G)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(h, H)) | 0) + (i >>> 13)) | 0) +
                      (ge >>> 26)) |
                    0),
                    (ge &= 67108863),
                    (n = Math.imul(_, z)),
                    (i = ((i = Math.imul(_, Y)) + Math.imul(w, z)) | 0),
                    (a = Math.imul(w, Y)),
                    (n = (n + Math.imul(v, F)) | 0),
                    (i =
                      ((i = (i + Math.imul(v, K)) | 0) + Math.imul(g, F)) | 0),
                    (a = (a + Math.imul(g, K)) | 0),
                    (n = (n + Math.imul(p, G)) | 0),
                    (i =
                      ((i = (i + Math.imul(p, H)) | 0) + Math.imul(b, G)) | 0),
                    (a = (a + Math.imul(b, H)) | 0);
                  var ye =
                    (((u + (n = (n + Math.imul(d, J)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(d, X)) | 0) + Math.imul(h, J)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(h, X)) | 0) + (i >>> 13)) | 0) +
                      (ye >>> 26)) |
                    0),
                    (ye &= 67108863),
                    (n = Math.imul(A, z)),
                    (i = ((i = Math.imul(A, Y)) + Math.imul(S, z)) | 0),
                    (a = Math.imul(S, Y)),
                    (n = (n + Math.imul(_, F)) | 0),
                    (i =
                      ((i = (i + Math.imul(_, K)) | 0) + Math.imul(w, F)) | 0),
                    (a = (a + Math.imul(w, K)) | 0),
                    (n = (n + Math.imul(v, G)) | 0),
                    (i =
                      ((i = (i + Math.imul(v, H)) | 0) + Math.imul(g, G)) | 0),
                    (a = (a + Math.imul(g, H)) | 0),
                    (n = (n + Math.imul(p, J)) | 0),
                    (i =
                      ((i = (i + Math.imul(p, X)) | 0) + Math.imul(b, J)) | 0),
                    (a = (a + Math.imul(b, X)) | 0);
                  var _e =
                    (((u + (n = (n + Math.imul(d, $)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(d, ee)) | 0) + Math.imul(h, $)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(h, ee)) | 0) + (i >>> 13)) | 0) +
                      (_e >>> 26)) |
                    0),
                    (_e &= 67108863),
                    (n = Math.imul(I, z)),
                    (i = ((i = Math.imul(I, Y)) + Math.imul(x, z)) | 0),
                    (a = Math.imul(x, Y)),
                    (n = (n + Math.imul(A, F)) | 0),
                    (i =
                      ((i = (i + Math.imul(A, K)) | 0) + Math.imul(S, F)) | 0),
                    (a = (a + Math.imul(S, K)) | 0),
                    (n = (n + Math.imul(_, G)) | 0),
                    (i =
                      ((i = (i + Math.imul(_, H)) | 0) + Math.imul(w, G)) | 0),
                    (a = (a + Math.imul(w, H)) | 0),
                    (n = (n + Math.imul(v, J)) | 0),
                    (i =
                      ((i = (i + Math.imul(v, X)) | 0) + Math.imul(g, J)) | 0),
                    (a = (a + Math.imul(g, X)) | 0),
                    (n = (n + Math.imul(p, $)) | 0),
                    (i =
                      ((i = (i + Math.imul(p, ee)) | 0) + Math.imul(b, $)) | 0),
                    (a = (a + Math.imul(b, ee)) | 0);
                  var we =
                    (((u + (n = (n + Math.imul(d, re)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(d, ne)) | 0) +
                            Math.imul(h, re)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(h, ne)) | 0) + (i >>> 13)) | 0) +
                      (we >>> 26)) |
                    0),
                    (we &= 67108863),
                    (n = Math.imul(L, z)),
                    (i = ((i = Math.imul(L, Y)) + Math.imul(R, z)) | 0),
                    (a = Math.imul(R, Y)),
                    (n = (n + Math.imul(I, F)) | 0),
                    (i =
                      ((i = (i + Math.imul(I, K)) | 0) + Math.imul(x, F)) | 0),
                    (a = (a + Math.imul(x, K)) | 0),
                    (n = (n + Math.imul(A, G)) | 0),
                    (i =
                      ((i = (i + Math.imul(A, H)) | 0) + Math.imul(S, G)) | 0),
                    (a = (a + Math.imul(S, H)) | 0),
                    (n = (n + Math.imul(_, J)) | 0),
                    (i =
                      ((i = (i + Math.imul(_, X)) | 0) + Math.imul(w, J)) | 0),
                    (a = (a + Math.imul(w, X)) | 0),
                    (n = (n + Math.imul(v, $)) | 0),
                    (i =
                      ((i = (i + Math.imul(v, ee)) | 0) + Math.imul(g, $)) | 0),
                    (a = (a + Math.imul(g, ee)) | 0),
                    (n = (n + Math.imul(p, re)) | 0),
                    (i =
                      ((i = (i + Math.imul(p, ne)) | 0) + Math.imul(b, re)) |
                      0),
                    (a = (a + Math.imul(b, ne)) | 0);
                  var Ee =
                    (((u + (n = (n + Math.imul(d, ae)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(d, oe)) | 0) +
                            Math.imul(h, ae)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(h, oe)) | 0) + (i >>> 13)) | 0) +
                      (Ee >>> 26)) |
                    0),
                    (Ee &= 67108863),
                    (n = Math.imul(k, z)),
                    (i = ((i = Math.imul(k, Y)) + Math.imul(N, z)) | 0),
                    (a = Math.imul(N, Y)),
                    (n = (n + Math.imul(L, F)) | 0),
                    (i =
                      ((i = (i + Math.imul(L, K)) | 0) + Math.imul(R, F)) | 0),
                    (a = (a + Math.imul(R, K)) | 0),
                    (n = (n + Math.imul(I, G)) | 0),
                    (i =
                      ((i = (i + Math.imul(I, H)) | 0) + Math.imul(x, G)) | 0),
                    (a = (a + Math.imul(x, H)) | 0),
                    (n = (n + Math.imul(A, J)) | 0),
                    (i =
                      ((i = (i + Math.imul(A, X)) | 0) + Math.imul(S, J)) | 0),
                    (a = (a + Math.imul(S, X)) | 0),
                    (n = (n + Math.imul(_, $)) | 0),
                    (i =
                      ((i = (i + Math.imul(_, ee)) | 0) + Math.imul(w, $)) | 0),
                    (a = (a + Math.imul(w, ee)) | 0),
                    (n = (n + Math.imul(v, re)) | 0),
                    (i =
                      ((i = (i + Math.imul(v, ne)) | 0) + Math.imul(g, re)) |
                      0),
                    (a = (a + Math.imul(g, ne)) | 0),
                    (n = (n + Math.imul(p, ae)) | 0),
                    (i =
                      ((i = (i + Math.imul(p, oe)) | 0) + Math.imul(b, ae)) |
                      0),
                    (a = (a + Math.imul(b, oe)) | 0);
                  var Ae =
                    (((u + (n = (n + Math.imul(d, fe)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(d, ue)) | 0) +
                            Math.imul(h, fe)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(h, ue)) | 0) + (i >>> 13)) | 0) +
                      (Ae >>> 26)) |
                    0),
                    (Ae &= 67108863),
                    (n = Math.imul(C, z)),
                    (i = ((i = Math.imul(C, Y)) + Math.imul(B, z)) | 0),
                    (a = Math.imul(B, Y)),
                    (n = (n + Math.imul(k, F)) | 0),
                    (i =
                      ((i = (i + Math.imul(k, K)) | 0) + Math.imul(N, F)) | 0),
                    (a = (a + Math.imul(N, K)) | 0),
                    (n = (n + Math.imul(L, G)) | 0),
                    (i =
                      ((i = (i + Math.imul(L, H)) | 0) + Math.imul(R, G)) | 0),
                    (a = (a + Math.imul(R, H)) | 0),
                    (n = (n + Math.imul(I, J)) | 0),
                    (i =
                      ((i = (i + Math.imul(I, X)) | 0) + Math.imul(x, J)) | 0),
                    (a = (a + Math.imul(x, X)) | 0),
                    (n = (n + Math.imul(A, $)) | 0),
                    (i =
                      ((i = (i + Math.imul(A, ee)) | 0) + Math.imul(S, $)) | 0),
                    (a = (a + Math.imul(S, ee)) | 0),
                    (n = (n + Math.imul(_, re)) | 0),
                    (i =
                      ((i = (i + Math.imul(_, ne)) | 0) + Math.imul(w, re)) |
                      0),
                    (a = (a + Math.imul(w, ne)) | 0),
                    (n = (n + Math.imul(v, ae)) | 0),
                    (i =
                      ((i = (i + Math.imul(v, oe)) | 0) + Math.imul(g, ae)) |
                      0),
                    (a = (a + Math.imul(g, oe)) | 0),
                    (n = (n + Math.imul(p, fe)) | 0),
                    (i =
                      ((i = (i + Math.imul(p, ue)) | 0) + Math.imul(b, fe)) |
                      0),
                    (a = (a + Math.imul(b, ue)) | 0);
                  var Se =
                    (((u + (n = (n + Math.imul(d, de)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(d, he)) | 0) +
                            Math.imul(h, de)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(h, he)) | 0) + (i >>> 13)) | 0) +
                      (Se >>> 26)) |
                    0),
                    (Se &= 67108863),
                    (n = Math.imul(D, z)),
                    (i = ((i = Math.imul(D, Y)) + Math.imul(U, z)) | 0),
                    (a = Math.imul(U, Y)),
                    (n = (n + Math.imul(C, F)) | 0),
                    (i =
                      ((i = (i + Math.imul(C, K)) | 0) + Math.imul(B, F)) | 0),
                    (a = (a + Math.imul(B, K)) | 0),
                    (n = (n + Math.imul(k, G)) | 0),
                    (i =
                      ((i = (i + Math.imul(k, H)) | 0) + Math.imul(N, G)) | 0),
                    (a = (a + Math.imul(N, H)) | 0),
                    (n = (n + Math.imul(L, J)) | 0),
                    (i =
                      ((i = (i + Math.imul(L, X)) | 0) + Math.imul(R, J)) | 0),
                    (a = (a + Math.imul(R, X)) | 0),
                    (n = (n + Math.imul(I, $)) | 0),
                    (i =
                      ((i = (i + Math.imul(I, ee)) | 0) + Math.imul(x, $)) | 0),
                    (a = (a + Math.imul(x, ee)) | 0),
                    (n = (n + Math.imul(A, re)) | 0),
                    (i =
                      ((i = (i + Math.imul(A, ne)) | 0) + Math.imul(S, re)) |
                      0),
                    (a = (a + Math.imul(S, ne)) | 0),
                    (n = (n + Math.imul(_, ae)) | 0),
                    (i =
                      ((i = (i + Math.imul(_, oe)) | 0) + Math.imul(w, ae)) |
                      0),
                    (a = (a + Math.imul(w, oe)) | 0),
                    (n = (n + Math.imul(v, fe)) | 0),
                    (i =
                      ((i = (i + Math.imul(v, ue)) | 0) + Math.imul(g, fe)) |
                      0),
                    (a = (a + Math.imul(g, ue)) | 0),
                    (n = (n + Math.imul(p, de)) | 0),
                    (i =
                      ((i = (i + Math.imul(p, he)) | 0) + Math.imul(b, de)) |
                      0),
                    (a = (a + Math.imul(b, he)) | 0);
                  var Me =
                    (((u + (n = (n + Math.imul(d, pe)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(d, be)) | 0) +
                            Math.imul(h, pe)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(h, be)) | 0) + (i >>> 13)) | 0) +
                      (Me >>> 26)) |
                    0),
                    (Me &= 67108863),
                    (n = Math.imul(D, F)),
                    (i = ((i = Math.imul(D, K)) + Math.imul(U, F)) | 0),
                    (a = Math.imul(U, K)),
                    (n = (n + Math.imul(C, G)) | 0),
                    (i =
                      ((i = (i + Math.imul(C, H)) | 0) + Math.imul(B, G)) | 0),
                    (a = (a + Math.imul(B, H)) | 0),
                    (n = (n + Math.imul(k, J)) | 0),
                    (i =
                      ((i = (i + Math.imul(k, X)) | 0) + Math.imul(N, J)) | 0),
                    (a = (a + Math.imul(N, X)) | 0),
                    (n = (n + Math.imul(L, $)) | 0),
                    (i =
                      ((i = (i + Math.imul(L, ee)) | 0) + Math.imul(R, $)) | 0),
                    (a = (a + Math.imul(R, ee)) | 0),
                    (n = (n + Math.imul(I, re)) | 0),
                    (i =
                      ((i = (i + Math.imul(I, ne)) | 0) + Math.imul(x, re)) |
                      0),
                    (a = (a + Math.imul(x, ne)) | 0),
                    (n = (n + Math.imul(A, ae)) | 0),
                    (i =
                      ((i = (i + Math.imul(A, oe)) | 0) + Math.imul(S, ae)) |
                      0),
                    (a = (a + Math.imul(S, oe)) | 0),
                    (n = (n + Math.imul(_, fe)) | 0),
                    (i =
                      ((i = (i + Math.imul(_, ue)) | 0) + Math.imul(w, fe)) |
                      0),
                    (a = (a + Math.imul(w, ue)) | 0),
                    (n = (n + Math.imul(v, de)) | 0),
                    (i =
                      ((i = (i + Math.imul(v, he)) | 0) + Math.imul(g, de)) |
                      0),
                    (a = (a + Math.imul(g, he)) | 0);
                  var Ie =
                    (((u + (n = (n + Math.imul(p, pe)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(p, be)) | 0) +
                            Math.imul(b, pe)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(b, be)) | 0) + (i >>> 13)) | 0) +
                      (Ie >>> 26)) |
                    0),
                    (Ie &= 67108863),
                    (n = Math.imul(D, G)),
                    (i = ((i = Math.imul(D, H)) + Math.imul(U, G)) | 0),
                    (a = Math.imul(U, H)),
                    (n = (n + Math.imul(C, J)) | 0),
                    (i =
                      ((i = (i + Math.imul(C, X)) | 0) + Math.imul(B, J)) | 0),
                    (a = (a + Math.imul(B, X)) | 0),
                    (n = (n + Math.imul(k, $)) | 0),
                    (i =
                      ((i = (i + Math.imul(k, ee)) | 0) + Math.imul(N, $)) | 0),
                    (a = (a + Math.imul(N, ee)) | 0),
                    (n = (n + Math.imul(L, re)) | 0),
                    (i =
                      ((i = (i + Math.imul(L, ne)) | 0) + Math.imul(R, re)) |
                      0),
                    (a = (a + Math.imul(R, ne)) | 0),
                    (n = (n + Math.imul(I, ae)) | 0),
                    (i =
                      ((i = (i + Math.imul(I, oe)) | 0) + Math.imul(x, ae)) |
                      0),
                    (a = (a + Math.imul(x, oe)) | 0),
                    (n = (n + Math.imul(A, fe)) | 0),
                    (i =
                      ((i = (i + Math.imul(A, ue)) | 0) + Math.imul(S, fe)) |
                      0),
                    (a = (a + Math.imul(S, ue)) | 0),
                    (n = (n + Math.imul(_, de)) | 0),
                    (i =
                      ((i = (i + Math.imul(_, he)) | 0) + Math.imul(w, de)) |
                      0),
                    (a = (a + Math.imul(w, he)) | 0);
                  var xe =
                    (((u + (n = (n + Math.imul(v, pe)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(v, be)) | 0) +
                            Math.imul(g, pe)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(g, be)) | 0) + (i >>> 13)) | 0) +
                      (xe >>> 26)) |
                    0),
                    (xe &= 67108863),
                    (n = Math.imul(D, J)),
                    (i = ((i = Math.imul(D, X)) + Math.imul(U, J)) | 0),
                    (a = Math.imul(U, X)),
                    (n = (n + Math.imul(C, $)) | 0),
                    (i =
                      ((i = (i + Math.imul(C, ee)) | 0) + Math.imul(B, $)) | 0),
                    (a = (a + Math.imul(B, ee)) | 0),
                    (n = (n + Math.imul(k, re)) | 0),
                    (i =
                      ((i = (i + Math.imul(k, ne)) | 0) + Math.imul(N, re)) |
                      0),
                    (a = (a + Math.imul(N, ne)) | 0),
                    (n = (n + Math.imul(L, ae)) | 0),
                    (i =
                      ((i = (i + Math.imul(L, oe)) | 0) + Math.imul(R, ae)) |
                      0),
                    (a = (a + Math.imul(R, oe)) | 0),
                    (n = (n + Math.imul(I, fe)) | 0),
                    (i =
                      ((i = (i + Math.imul(I, ue)) | 0) + Math.imul(x, fe)) |
                      0),
                    (a = (a + Math.imul(x, ue)) | 0),
                    (n = (n + Math.imul(A, de)) | 0),
                    (i =
                      ((i = (i + Math.imul(A, he)) | 0) + Math.imul(S, de)) |
                      0),
                    (a = (a + Math.imul(S, he)) | 0);
                  var Te =
                    (((u + (n = (n + Math.imul(_, pe)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(_, be)) | 0) +
                            Math.imul(w, pe)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(w, be)) | 0) + (i >>> 13)) | 0) +
                      (Te >>> 26)) |
                    0),
                    (Te &= 67108863),
                    (n = Math.imul(D, $)),
                    (i = ((i = Math.imul(D, ee)) + Math.imul(U, $)) | 0),
                    (a = Math.imul(U, ee)),
                    (n = (n + Math.imul(C, re)) | 0),
                    (i =
                      ((i = (i + Math.imul(C, ne)) | 0) + Math.imul(B, re)) |
                      0),
                    (a = (a + Math.imul(B, ne)) | 0),
                    (n = (n + Math.imul(k, ae)) | 0),
                    (i =
                      ((i = (i + Math.imul(k, oe)) | 0) + Math.imul(N, ae)) |
                      0),
                    (a = (a + Math.imul(N, oe)) | 0),
                    (n = (n + Math.imul(L, fe)) | 0),
                    (i =
                      ((i = (i + Math.imul(L, ue)) | 0) + Math.imul(R, fe)) |
                      0),
                    (a = (a + Math.imul(R, ue)) | 0),
                    (n = (n + Math.imul(I, de)) | 0),
                    (i =
                      ((i = (i + Math.imul(I, he)) | 0) + Math.imul(x, de)) |
                      0),
                    (a = (a + Math.imul(x, he)) | 0);
                  var Le =
                    (((u + (n = (n + Math.imul(A, pe)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(A, be)) | 0) +
                            Math.imul(S, pe)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(S, be)) | 0) + (i >>> 13)) | 0) +
                      (Le >>> 26)) |
                    0),
                    (Le &= 67108863),
                    (n = Math.imul(D, re)),
                    (i = ((i = Math.imul(D, ne)) + Math.imul(U, re)) | 0),
                    (a = Math.imul(U, ne)),
                    (n = (n + Math.imul(C, ae)) | 0),
                    (i =
                      ((i = (i + Math.imul(C, oe)) | 0) + Math.imul(B, ae)) |
                      0),
                    (a = (a + Math.imul(B, oe)) | 0),
                    (n = (n + Math.imul(k, fe)) | 0),
                    (i =
                      ((i = (i + Math.imul(k, ue)) | 0) + Math.imul(N, fe)) |
                      0),
                    (a = (a + Math.imul(N, ue)) | 0),
                    (n = (n + Math.imul(L, de)) | 0),
                    (i =
                      ((i = (i + Math.imul(L, he)) | 0) + Math.imul(R, de)) |
                      0),
                    (a = (a + Math.imul(R, he)) | 0);
                  var Re =
                    (((u + (n = (n + Math.imul(I, pe)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(I, be)) | 0) +
                            Math.imul(x, pe)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(x, be)) | 0) + (i >>> 13)) | 0) +
                      (Re >>> 26)) |
                    0),
                    (Re &= 67108863),
                    (n = Math.imul(D, ae)),
                    (i = ((i = Math.imul(D, oe)) + Math.imul(U, ae)) | 0),
                    (a = Math.imul(U, oe)),
                    (n = (n + Math.imul(C, fe)) | 0),
                    (i =
                      ((i = (i + Math.imul(C, ue)) | 0) + Math.imul(B, fe)) |
                      0),
                    (a = (a + Math.imul(B, ue)) | 0),
                    (n = (n + Math.imul(k, de)) | 0),
                    (i =
                      ((i = (i + Math.imul(k, he)) | 0) + Math.imul(N, de)) |
                      0),
                    (a = (a + Math.imul(N, he)) | 0);
                  var Pe =
                    (((u + (n = (n + Math.imul(L, pe)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(L, be)) | 0) +
                            Math.imul(R, pe)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(R, be)) | 0) + (i >>> 13)) | 0) +
                      (Pe >>> 26)) |
                    0),
                    (Pe &= 67108863),
                    (n = Math.imul(D, fe)),
                    (i = ((i = Math.imul(D, ue)) + Math.imul(U, fe)) | 0),
                    (a = Math.imul(U, ue)),
                    (n = (n + Math.imul(C, de)) | 0),
                    (i =
                      ((i = (i + Math.imul(C, he)) | 0) + Math.imul(B, de)) |
                      0),
                    (a = (a + Math.imul(B, he)) | 0);
                  var ke =
                    (((u + (n = (n + Math.imul(k, pe)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(k, be)) | 0) +
                            Math.imul(N, pe)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(N, be)) | 0) + (i >>> 13)) | 0) +
                      (ke >>> 26)) |
                    0),
                    (ke &= 67108863),
                    (n = Math.imul(D, de)),
                    (i = ((i = Math.imul(D, he)) + Math.imul(U, de)) | 0),
                    (a = Math.imul(U, he));
                  var Ne =
                    (((u + (n = (n + Math.imul(C, pe)) | 0)) | 0) +
                      ((8191 &
                        (i =
                          ((i = (i + Math.imul(C, be)) | 0) +
                            Math.imul(B, pe)) |
                          0)) <<
                        13)) |
                    0;
                  (u =
                    ((((a = (a + Math.imul(B, be)) | 0) + (i >>> 13)) | 0) +
                      (Ne >>> 26)) |
                    0),
                    (Ne &= 67108863);
                  var Oe =
                    (((u + (n = Math.imul(D, pe))) | 0) +
                      ((8191 &
                        (i =
                          ((i = Math.imul(D, be)) + Math.imul(U, pe)) | 0)) <<
                        13)) |
                    0;
                  return (
                    (u =
                      ((((a = Math.imul(U, be)) + (i >>> 13)) | 0) +
                        (Oe >>> 26)) |
                      0),
                    (Oe &= 67108863),
                    (f[0] = me),
                    (f[1] = ve),
                    (f[2] = ge),
                    (f[3] = ye),
                    (f[4] = _e),
                    (f[5] = we),
                    (f[6] = Ee),
                    (f[7] = Ae),
                    (f[8] = Se),
                    (f[9] = Me),
                    (f[10] = Ie),
                    (f[11] = xe),
                    (f[12] = Te),
                    (f[13] = Le),
                    (f[14] = Re),
                    (f[15] = Pe),
                    (f[16] = ke),
                    (f[17] = Ne),
                    (f[18] = Oe),
                    0 !== u && ((f[19] = u), r.length++),
                    r
                  );
                };
                function p(e, t, r) {
                  return new b().mulp(e, t, r);
                }
                function b(e, t) {
                  (this.x = e), (this.y = t);
                }
                Math.imul || (l = h),
                  (a.prototype.mulTo = function(e, t) {
                    var r = this.length + e.length;
                    return 10 === this.length && 10 === e.length
                      ? l(this, e, t)
                      : r < 63
                      ? h(this, e, t)
                      : r < 1024
                      ? (function(e, t, r) {
                          (r.negative = t.negative ^ e.negative),
                            (r.length = e.length + t.length);
                          for (var n = 0, i = 0, a = 0; a < r.length - 1; a++) {
                            var o = i;
                            i = 0;
                            for (
                              var s = 67108863 & n,
                                f = Math.min(a, t.length - 1),
                                u = Math.max(0, a - e.length + 1);
                              u <= f;
                              u++
                            ) {
                              var c = a - u,
                                d = (0 | e.words[c]) * (0 | t.words[u]),
                                h = 67108863 & d;
                              (s = 67108863 & (h = (h + s) | 0)),
                                (i +=
                                  (o =
                                    ((o = (o + ((d / 67108864) | 0)) | 0) +
                                      (h >>> 26)) |
                                    0) >>> 26),
                                (o &= 67108863);
                            }
                            (r.words[a] = s), (n = o), (o = i);
                          }
                          return (
                            0 !== n ? (r.words[a] = n) : r.length--, r.strip()
                          );
                        })(this, e, t)
                      : p(this, e, t);
                  }),
                  (b.prototype.makeRBT = function(e) {
                    for (
                      var t = new Array(e),
                        r = a.prototype._countBits(e) - 1,
                        n = 0;
                      n < e;
                      n++
                    )
                      t[n] = this.revBin(n, r, e);
                    return t;
                  }),
                  (b.prototype.revBin = function(e, t, r) {
                    if (0 === e || e === r - 1) return e;
                    for (var n = 0, i = 0; i < t; i++)
                      (n |= (1 & e) << (t - i - 1)), (e >>= 1);
                    return n;
                  }),
                  (b.prototype.permute = function(e, t, r, n, i, a) {
                    for (var o = 0; o < a; o++)
                      (n[o] = t[e[o]]), (i[o] = r[e[o]]);
                  }),
                  (b.prototype.transform = function(e, t, r, n, i, a) {
                    this.permute(a, e, t, r, n, i);
                    for (var o = 1; o < i; o <<= 1)
                      for (
                        var s = o << 1,
                          f = Math.cos((2 * Math.PI) / s),
                          u = Math.sin((2 * Math.PI) / s),
                          c = 0;
                        c < i;
                        c += s
                      )
                        for (var d = f, h = u, l = 0; l < o; l++) {
                          var p = r[c + l],
                            b = n[c + l],
                            m = r[c + l + o],
                            v = n[c + l + o],
                            g = d * m - h * v;
                          (v = d * v + h * m),
                            (m = g),
                            (r[c + l] = p + m),
                            (n[c + l] = b + v),
                            (r[c + l + o] = p - m),
                            (n[c + l + o] = b - v),
                            l !== s &&
                              ((g = f * d - u * h),
                              (h = f * h + u * d),
                              (d = g));
                        }
                  }),
                  (b.prototype.guessLen13b = function(e, t) {
                    var r = 1 | Math.max(t, e),
                      n = 1 & r,
                      i = 0;
                    for (r = (r / 2) | 0; r; r >>>= 1) i++;
                    return 1 << (i + 1 + n);
                  }),
                  (b.prototype.conjugate = function(e, t, r) {
                    if (!(r <= 1))
                      for (var n = 0; n < r / 2; n++) {
                        var i = e[n];
                        (e[n] = e[r - n - 1]),
                          (e[r - n - 1] = i),
                          (i = t[n]),
                          (t[n] = -t[r - n - 1]),
                          (t[r - n - 1] = -i);
                      }
                  }),
                  (b.prototype.normalize13b = function(e, t) {
                    for (var r = 0, n = 0; n < t / 2; n++) {
                      var i =
                        8192 * Math.round(e[2 * n + 1] / t) +
                        Math.round(e[2 * n] / t) +
                        r;
                      (e[n] = 67108863 & i),
                        (r = i < 67108864 ? 0 : (i / 67108864) | 0);
                    }
                    return e;
                  }),
                  (b.prototype.convert13b = function(e, t, r, i) {
                    for (var a = 0, o = 0; o < t; o++)
                      (a += 0 | e[o]),
                        (r[2 * o] = 8191 & a),
                        (a >>>= 13),
                        (r[2 * o + 1] = 8191 & a),
                        (a >>>= 13);
                    for (o = 2 * t; o < i; ++o) r[o] = 0;
                    n(0 === a), n(0 == (-8192 & a));
                  }),
                  (b.prototype.stub = function(e) {
                    for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
                    return t;
                  }),
                  (b.prototype.mulp = function(e, t, r) {
                    var n = 2 * this.guessLen13b(e.length, t.length),
                      i = this.makeRBT(n),
                      a = this.stub(n),
                      o = new Array(n),
                      s = new Array(n),
                      f = new Array(n),
                      u = new Array(n),
                      c = new Array(n),
                      d = new Array(n),
                      h = r.words;
                    (h.length = n),
                      this.convert13b(e.words, e.length, o, n),
                      this.convert13b(t.words, t.length, u, n),
                      this.transform(o, a, s, f, n, i),
                      this.transform(u, a, c, d, n, i);
                    for (var l = 0; l < n; l++) {
                      var p = s[l] * c[l] - f[l] * d[l];
                      (f[l] = s[l] * d[l] + f[l] * c[l]), (s[l] = p);
                    }
                    return (
                      this.conjugate(s, f, n),
                      this.transform(s, f, h, a, n, i),
                      this.conjugate(h, a, n),
                      this.normalize13b(h, n),
                      (r.negative = e.negative ^ t.negative),
                      (r.length = e.length + t.length),
                      r.strip()
                    );
                  }),
                  (a.prototype.mul = function(e) {
                    var t = new a(null);
                    return (
                      (t.words = new Array(this.length + e.length)),
                      this.mulTo(e, t)
                    );
                  }),
                  (a.prototype.mulf = function(e) {
                    var t = new a(null);
                    return (
                      (t.words = new Array(this.length + e.length)),
                      p(this, e, t)
                    );
                  }),
                  (a.prototype.imul = function(e) {
                    return this.clone().mulTo(e, this);
                  }),
                  (a.prototype.imuln = function(e) {
                    n("number" == typeof e), n(e < 67108864);
                    for (var t = 0, r = 0; r < this.length; r++) {
                      var i = (0 | this.words[r]) * e,
                        a = (67108863 & i) + (67108863 & t);
                      (t >>= 26),
                        (t += (i / 67108864) | 0),
                        (t += a >>> 26),
                        (this.words[r] = 67108863 & a);
                    }
                    return (
                      0 !== t && ((this.words[r] = t), this.length++), this
                    );
                  }),
                  (a.prototype.muln = function(e) {
                    return this.clone().imuln(e);
                  }),
                  (a.prototype.sqr = function() {
                    return this.mul(this);
                  }),
                  (a.prototype.isqr = function() {
                    return this.imul(this.clone());
                  }),
                  (a.prototype.pow = function(e) {
                    var t = (function(e) {
                      for (
                        var t = new Array(e.bitLength()), r = 0;
                        r < t.length;
                        r++
                      ) {
                        var n = (r / 26) | 0,
                          i = r % 26;
                        t[r] = (e.words[n] & (1 << i)) >>> i;
                      }
                      return t;
                    })(e);
                    if (0 === t.length) return new a(1);
                    for (
                      var r = this, n = 0;
                      n < t.length && 0 === t[n];
                      n++, r = r.sqr()
                    );
                    if (++n < t.length)
                      for (var i = r.sqr(); n < t.length; n++, i = i.sqr())
                        0 !== t[n] && (r = r.mul(i));
                    return r;
                  }),
                  (a.prototype.iushln = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t,
                      r = e % 26,
                      i = (e - r) / 26,
                      a = (67108863 >>> (26 - r)) << (26 - r);
                    if (0 !== r) {
                      var o = 0;
                      for (t = 0; t < this.length; t++) {
                        var s = this.words[t] & a,
                          f = ((0 | this.words[t]) - s) << r;
                        (this.words[t] = f | o), (o = s >>> (26 - r));
                      }
                      o && ((this.words[t] = o), this.length++);
                    }
                    if (0 !== i) {
                      for (t = this.length - 1; t >= 0; t--)
                        this.words[t + i] = this.words[t];
                      for (t = 0; t < i; t++) this.words[t] = 0;
                      this.length += i;
                    }
                    return this.strip();
                  }),
                  (a.prototype.ishln = function(e) {
                    return n(0 === this.negative), this.iushln(e);
                  }),
                  (a.prototype.iushrn = function(e, t, r) {
                    var i;
                    n("number" == typeof e && e >= 0),
                      (i = t ? (t - (t % 26)) / 26 : 0);
                    var a = e % 26,
                      o = Math.min((e - a) / 26, this.length),
                      s = 67108863 ^ ((67108863 >>> a) << a),
                      f = r;
                    if (((i -= o), (i = Math.max(0, i)), f)) {
                      for (var u = 0; u < o; u++) f.words[u] = this.words[u];
                      f.length = o;
                    }
                    if (0 === o);
                    else if (this.length > o)
                      for (this.length -= o, u = 0; u < this.length; u++)
                        this.words[u] = this.words[u + o];
                    else (this.words[0] = 0), (this.length = 1);
                    var c = 0;
                    for (
                      u = this.length - 1;
                      u >= 0 && (0 !== c || u >= i);
                      u--
                    ) {
                      var d = 0 | this.words[u];
                      (this.words[u] = (c << (26 - a)) | (d >>> a)),
                        (c = d & s);
                    }
                    return (
                      f && 0 !== c && (f.words[f.length++] = c),
                      0 === this.length &&
                        ((this.words[0] = 0), (this.length = 1)),
                      this.strip()
                    );
                  }),
                  (a.prototype.ishrn = function(e, t, r) {
                    return n(0 === this.negative), this.iushrn(e, t, r);
                  }),
                  (a.prototype.shln = function(e) {
                    return this.clone().ishln(e);
                  }),
                  (a.prototype.ushln = function(e) {
                    return this.clone().iushln(e);
                  }),
                  (a.prototype.shrn = function(e) {
                    return this.clone().ishrn(e);
                  }),
                  (a.prototype.ushrn = function(e) {
                    return this.clone().iushrn(e);
                  }),
                  (a.prototype.testn = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t = e % 26,
                      r = (e - t) / 26,
                      i = 1 << t;
                    return !(this.length <= r) && !!(this.words[r] & i);
                  }),
                  (a.prototype.imaskn = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t = e % 26,
                      r = (e - t) / 26;
                    if (
                      (n(
                        0 === this.negative,
                        "imaskn works only with positive numbers"
                      ),
                      this.length <= r)
                    )
                      return this;
                    if (
                      (0 !== t && r++,
                      (this.length = Math.min(r, this.length)),
                      0 !== t)
                    ) {
                      var i = 67108863 ^ ((67108863 >>> t) << t);
                      this.words[this.length - 1] &= i;
                    }
                    return this.strip();
                  }),
                  (a.prototype.maskn = function(e) {
                    return this.clone().imaskn(e);
                  }),
                  (a.prototype.iaddn = function(e) {
                    return (
                      n("number" == typeof e),
                      n(e < 67108864),
                      e < 0
                        ? this.isubn(-e)
                        : 0 !== this.negative
                        ? 1 === this.length && (0 | this.words[0]) < e
                          ? ((this.words[0] = e - (0 | this.words[0])),
                            (this.negative = 0),
                            this)
                          : ((this.negative = 0),
                            this.isubn(e),
                            (this.negative = 1),
                            this)
                        : this._iaddn(e)
                    );
                  }),
                  (a.prototype._iaddn = function(e) {
                    this.words[0] += e;
                    for (
                      var t = 0;
                      t < this.length && this.words[t] >= 67108864;
                      t++
                    )
                      (this.words[t] -= 67108864),
                        t === this.length - 1
                          ? (this.words[t + 1] = 1)
                          : this.words[t + 1]++;
                    return (this.length = Math.max(this.length, t + 1)), this;
                  }),
                  (a.prototype.isubn = function(e) {
                    if ((n("number" == typeof e), n(e < 67108864), e < 0))
                      return this.iaddn(-e);
                    if (0 !== this.negative)
                      return (
                        (this.negative = 0),
                        this.iaddn(e),
                        (this.negative = 1),
                        this
                      );
                    if (
                      ((this.words[0] -= e),
                      1 === this.length && this.words[0] < 0)
                    )
                      (this.words[0] = -this.words[0]), (this.negative = 1);
                    else
                      for (var t = 0; t < this.length && this.words[t] < 0; t++)
                        (this.words[t] += 67108864), (this.words[t + 1] -= 1);
                    return this.strip();
                  }),
                  (a.prototype.addn = function(e) {
                    return this.clone().iaddn(e);
                  }),
                  (a.prototype.subn = function(e) {
                    return this.clone().isubn(e);
                  }),
                  (a.prototype.iabs = function() {
                    return (this.negative = 0), this;
                  }),
                  (a.prototype.abs = function() {
                    return this.clone().iabs();
                  }),
                  (a.prototype._ishlnsubmul = function(e, t, r) {
                    var i,
                      a,
                      o = e.length + r;
                    this._expand(o);
                    var s = 0;
                    for (i = 0; i < e.length; i++) {
                      a = (0 | this.words[i + r]) + s;
                      var f = (0 | e.words[i]) * t;
                      (s = ((a -= 67108863 & f) >> 26) - ((f / 67108864) | 0)),
                        (this.words[i + r] = 67108863 & a);
                    }
                    for (; i < this.length - r; i++)
                      (s = (a = (0 | this.words[i + r]) + s) >> 26),
                        (this.words[i + r] = 67108863 & a);
                    if (0 === s) return this.strip();
                    for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
                      (s = (a = -(0 | this.words[i]) + s) >> 26),
                        (this.words[i] = 67108863 & a);
                    return (this.negative = 1), this.strip();
                  }),
                  (a.prototype._wordDiv = function(e, t) {
                    var r = (this.length, e.length),
                      n = this.clone(),
                      i = e,
                      o = 0 | i.words[i.length - 1];
                    0 !== (r = 26 - this._countBits(o)) &&
                      ((i = i.ushln(r)),
                      n.iushln(r),
                      (o = 0 | i.words[i.length - 1]));
                    var s,
                      f = n.length - i.length;
                    if ("mod" !== t) {
                      ((s = new a(null)).length = f + 1),
                        (s.words = new Array(s.length));
                      for (var u = 0; u < s.length; u++) s.words[u] = 0;
                    }
                    var c = n.clone()._ishlnsubmul(i, 1, f);
                    0 === c.negative && ((n = c), s && (s.words[f] = 1));
                    for (var d = f - 1; d >= 0; d--) {
                      var h =
                        67108864 * (0 | n.words[i.length + d]) +
                        (0 | n.words[i.length + d - 1]);
                      for (
                        h = Math.min((h / o) | 0, 67108863),
                          n._ishlnsubmul(i, h, d);
                        0 !== n.negative;

                      )
                        h--,
                          (n.negative = 0),
                          n._ishlnsubmul(i, 1, d),
                          n.isZero() || (n.negative ^= 1);
                      s && (s.words[d] = h);
                    }
                    return (
                      s && s.strip(),
                      n.strip(),
                      "div" !== t && 0 !== r && n.iushrn(r),
                      { div: s || null, mod: n }
                    );
                  }),
                  (a.prototype.divmod = function(e, t, r) {
                    return (
                      n(!e.isZero()),
                      this.isZero()
                        ? { div: new a(0), mod: new a(0) }
                        : 0 !== this.negative && 0 === e.negative
                        ? ((s = this.neg().divmod(e, t)),
                          "mod" !== t && (i = s.div.neg()),
                          "div" !== t &&
                            ((o = s.mod.neg()),
                            r && 0 !== o.negative && o.iadd(e)),
                          { div: i, mod: o })
                        : 0 === this.negative && 0 !== e.negative
                        ? ((s = this.divmod(e.neg(), t)),
                          "mod" !== t && (i = s.div.neg()),
                          { div: i, mod: s.mod })
                        : 0 != (this.negative & e.negative)
                        ? ((s = this.neg().divmod(e.neg(), t)),
                          "div" !== t &&
                            ((o = s.mod.neg()),
                            r && 0 !== o.negative && o.isub(e)),
                          { div: s.div, mod: o })
                        : e.length > this.length || this.cmp(e) < 0
                        ? { div: new a(0), mod: this }
                        : 1 === e.length
                        ? "div" === t
                          ? { div: this.divn(e.words[0]), mod: null }
                          : "mod" === t
                          ? { div: null, mod: new a(this.modn(e.words[0])) }
                          : {
                              div: this.divn(e.words[0]),
                              mod: new a(this.modn(e.words[0]))
                            }
                        : this._wordDiv(e, t)
                    );
                    var i, o, s;
                  }),
                  (a.prototype.div = function(e) {
                    return this.divmod(e, "div", !1).div;
                  }),
                  (a.prototype.mod = function(e) {
                    return this.divmod(e, "mod", !1).mod;
                  }),
                  (a.prototype.umod = function(e) {
                    return this.divmod(e, "mod", !0).mod;
                  }),
                  (a.prototype.divRound = function(e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero()) return t.div;
                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                      n = e.ushrn(1),
                      i = e.andln(1),
                      a = r.cmp(n);
                    return a < 0 || (1 === i && 0 === a)
                      ? t.div
                      : 0 !== t.div.negative
                      ? t.div.isubn(1)
                      : t.div.iaddn(1);
                  }),
                  (a.prototype.modn = function(e) {
                    n(e <= 67108863);
                    for (
                      var t = (1 << 26) % e, r = 0, i = this.length - 1;
                      i >= 0;
                      i--
                    )
                      r = (t * r + (0 | this.words[i])) % e;
                    return r;
                  }),
                  (a.prototype.idivn = function(e) {
                    n(e <= 67108863);
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                      var i = (0 | this.words[r]) + 67108864 * t;
                      (this.words[r] = (i / e) | 0), (t = i % e);
                    }
                    return this.strip();
                  }),
                  (a.prototype.divn = function(e) {
                    return this.clone().idivn(e);
                  }),
                  (a.prototype.egcd = function(e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t = this,
                      r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (
                      var i = new a(1),
                        o = new a(0),
                        s = new a(0),
                        f = new a(1),
                        u = 0;
                      t.isEven() && r.isEven();

                    )
                      t.iushrn(1), r.iushrn(1), ++u;
                    for (var c = r.clone(), d = t.clone(); !t.isZero(); ) {
                      for (
                        var h = 0, l = 1;
                        0 == (t.words[0] & l) && h < 26;
                        ++h, l <<= 1
                      );
                      if (h > 0)
                        for (t.iushrn(h); h-- > 0; )
                          (i.isOdd() || o.isOdd()) && (i.iadd(c), o.isub(d)),
                            i.iushrn(1),
                            o.iushrn(1);
                      for (
                        var p = 0, b = 1;
                        0 == (r.words[0] & b) && p < 26;
                        ++p, b <<= 1
                      );
                      if (p > 0)
                        for (r.iushrn(p); p-- > 0; )
                          (s.isOdd() || f.isOdd()) && (s.iadd(c), f.isub(d)),
                            s.iushrn(1),
                            f.iushrn(1);
                      t.cmp(r) >= 0
                        ? (t.isub(r), i.isub(s), o.isub(f))
                        : (r.isub(t), s.isub(i), f.isub(o));
                    }
                    return { a: s, b: f, gcd: r.iushln(u) };
                  }),
                  (a.prototype._invmp = function(e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t = this,
                      r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (
                      var i, o = new a(1), s = new a(0), f = r.clone();
                      t.cmpn(1) > 0 && r.cmpn(1) > 0;

                    ) {
                      for (
                        var u = 0, c = 1;
                        0 == (t.words[0] & c) && u < 26;
                        ++u, c <<= 1
                      );
                      if (u > 0)
                        for (t.iushrn(u); u-- > 0; )
                          o.isOdd() && o.iadd(f), o.iushrn(1);
                      for (
                        var d = 0, h = 1;
                        0 == (r.words[0] & h) && d < 26;
                        ++d, h <<= 1
                      );
                      if (d > 0)
                        for (r.iushrn(d); d-- > 0; )
                          s.isOdd() && s.iadd(f), s.iushrn(1);
                      t.cmp(r) >= 0
                        ? (t.isub(r), o.isub(s))
                        : (r.isub(t), s.isub(o));
                    }
                    return (
                      (i = 0 === t.cmpn(1) ? o : s).cmpn(0) < 0 && i.iadd(e), i
                    );
                  }),
                  (a.prototype.gcd = function(e) {
                    if (this.isZero()) return e.abs();
                    if (e.isZero()) return this.abs();
                    var t = this.clone(),
                      r = e.clone();
                    (t.negative = 0), (r.negative = 0);
                    for (var n = 0; t.isEven() && r.isEven(); n++)
                      t.iushrn(1), r.iushrn(1);
                    for (;;) {
                      for (; t.isEven(); ) t.iushrn(1);
                      for (; r.isEven(); ) r.iushrn(1);
                      var i = t.cmp(r);
                      if (i < 0) {
                        var a = t;
                        (t = r), (r = a);
                      } else if (0 === i || 0 === r.cmpn(1)) break;
                      t.isub(r);
                    }
                    return r.iushln(n);
                  }),
                  (a.prototype.invm = function(e) {
                    return this.egcd(e).a.umod(e);
                  }),
                  (a.prototype.isEven = function() {
                    return 0 == (1 & this.words[0]);
                  }),
                  (a.prototype.isOdd = function() {
                    return 1 == (1 & this.words[0]);
                  }),
                  (a.prototype.andln = function(e) {
                    return this.words[0] & e;
                  }),
                  (a.prototype.bincn = function(e) {
                    n("number" == typeof e);
                    var t = e % 26,
                      r = (e - t) / 26,
                      i = 1 << t;
                    if (this.length <= r)
                      return this._expand(r + 1), (this.words[r] |= i), this;
                    for (var a = i, o = r; 0 !== a && o < this.length; o++) {
                      var s = 0 | this.words[o];
                      (a = (s += a) >>> 26),
                        (s &= 67108863),
                        (this.words[o] = s);
                    }
                    return (
                      0 !== a && ((this.words[o] = a), this.length++), this
                    );
                  }),
                  (a.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0];
                  }),
                  (a.prototype.cmpn = function(e) {
                    var t,
                      r = e < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if ((this.strip(), this.length > 1)) t = 1;
                    else {
                      r && (e = -e), n(e <= 67108863, "Number is too big");
                      var i = 0 | this.words[0];
                      t = i === e ? 0 : i < e ? -1 : 1;
                    }
                    return 0 !== this.negative ? 0 | -t : t;
                  }),
                  (a.prototype.cmp = function(e) {
                    if (0 !== this.negative && 0 === e.negative) return -1;
                    if (0 === this.negative && 0 !== e.negative) return 1;
                    var t = this.ucmp(e);
                    return 0 !== this.negative ? 0 | -t : t;
                  }),
                  (a.prototype.ucmp = function(e) {
                    if (this.length > e.length) return 1;
                    if (this.length < e.length) return -1;
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                      var n = 0 | this.words[r],
                        i = 0 | e.words[r];
                      if (n !== i) {
                        n < i ? (t = -1) : n > i && (t = 1);
                        break;
                      }
                    }
                    return t;
                  }),
                  (a.prototype.gtn = function(e) {
                    return 1 === this.cmpn(e);
                  }),
                  (a.prototype.gt = function(e) {
                    return 1 === this.cmp(e);
                  }),
                  (a.prototype.gten = function(e) {
                    return this.cmpn(e) >= 0;
                  }),
                  (a.prototype.gte = function(e) {
                    return this.cmp(e) >= 0;
                  }),
                  (a.prototype.ltn = function(e) {
                    return -1 === this.cmpn(e);
                  }),
                  (a.prototype.lt = function(e) {
                    return -1 === this.cmp(e);
                  }),
                  (a.prototype.lten = function(e) {
                    return this.cmpn(e) <= 0;
                  }),
                  (a.prototype.lte = function(e) {
                    return this.cmp(e) <= 0;
                  }),
                  (a.prototype.eqn = function(e) {
                    return 0 === this.cmpn(e);
                  }),
                  (a.prototype.eq = function(e) {
                    return 0 === this.cmp(e);
                  }),
                  (a.red = function(e) {
                    return new E(e);
                  }),
                  (a.prototype.toRed = function(e) {
                    return (
                      n(!this.red, "Already a number in reduction context"),
                      n(0 === this.negative, "red works only with positives"),
                      e.convertTo(this)._forceRed(e)
                    );
                  }),
                  (a.prototype.fromRed = function() {
                    return (
                      n(
                        this.red,
                        "fromRed works only with numbers in reduction context"
                      ),
                      this.red.convertFrom(this)
                    );
                  }),
                  (a.prototype._forceRed = function(e) {
                    return (this.red = e), this;
                  }),
                  (a.prototype.forceRed = function(e) {
                    return (
                      n(!this.red, "Already a number in reduction context"),
                      this._forceRed(e)
                    );
                  }),
                  (a.prototype.redAdd = function(e) {
                    return (
                      n(this.red, "redAdd works only with red numbers"),
                      this.red.add(this, e)
                    );
                  }),
                  (a.prototype.redIAdd = function(e) {
                    return (
                      n(this.red, "redIAdd works only with red numbers"),
                      this.red.iadd(this, e)
                    );
                  }),
                  (a.prototype.redSub = function(e) {
                    return (
                      n(this.red, "redSub works only with red numbers"),
                      this.red.sub(this, e)
                    );
                  }),
                  (a.prototype.redISub = function(e) {
                    return (
                      n(this.red, "redISub works only with red numbers"),
                      this.red.isub(this, e)
                    );
                  }),
                  (a.prototype.redShl = function(e) {
                    return (
                      n(this.red, "redShl works only with red numbers"),
                      this.red.shl(this, e)
                    );
                  }),
                  (a.prototype.redMul = function(e) {
                    return (
                      n(this.red, "redMul works only with red numbers"),
                      this.red._verify2(this, e),
                      this.red.mul(this, e)
                    );
                  }),
                  (a.prototype.redIMul = function(e) {
                    return (
                      n(this.red, "redMul works only with red numbers"),
                      this.red._verify2(this, e),
                      this.red.imul(this, e)
                    );
                  }),
                  (a.prototype.redSqr = function() {
                    return (
                      n(this.red, "redSqr works only with red numbers"),
                      this.red._verify1(this),
                      this.red.sqr(this)
                    );
                  }),
                  (a.prototype.redISqr = function() {
                    return (
                      n(this.red, "redISqr works only with red numbers"),
                      this.red._verify1(this),
                      this.red.isqr(this)
                    );
                  }),
                  (a.prototype.redSqrt = function() {
                    return (
                      n(this.red, "redSqrt works only with red numbers"),
                      this.red._verify1(this),
                      this.red.sqrt(this)
                    );
                  }),
                  (a.prototype.redInvm = function() {
                    return (
                      n(this.red, "redInvm works only with red numbers"),
                      this.red._verify1(this),
                      this.red.invm(this)
                    );
                  }),
                  (a.prototype.redNeg = function() {
                    return (
                      n(this.red, "redNeg works only with red numbers"),
                      this.red._verify1(this),
                      this.red.neg(this)
                    );
                  }),
                  (a.prototype.redPow = function(e) {
                    return (
                      n(this.red && !e.red, "redPow(normalNum)"),
                      this.red._verify1(this),
                      this.red.pow(this, e)
                    );
                  });
                var m = { k256: null, p224: null, p192: null, p25519: null };
                function v(e, t) {
                  (this.name = e),
                    (this.p = new a(t, 16)),
                    (this.n = this.p.bitLength()),
                    (this.k = new a(1).iushln(this.n).isub(this.p)),
                    (this.tmp = this._tmp());
                }
                function g() {
                  v.call(
                    this,
                    "k256",
                    "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
                  );
                }
                function y() {
                  v.call(
                    this,
                    "p224",
                    "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
                  );
                }
                function _() {
                  v.call(
                    this,
                    "p192",
                    "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
                  );
                }
                function w() {
                  v.call(
                    this,
                    "25519",
                    "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
                  );
                }
                function E(e) {
                  if ("string" == typeof e) {
                    var t = a._prime(e);
                    (this.m = t.p), (this.prime = t);
                  } else
                    n(e.gtn(1), "modulus must be greater than 1"),
                      (this.m = e),
                      (this.prime = null);
                }
                function A(e) {
                  E.call(this, e),
                    (this.shift = this.m.bitLength()),
                    this.shift % 26 != 0 &&
                      (this.shift += 26 - (this.shift % 26)),
                    (this.r = new a(1).iushln(this.shift)),
                    (this.r2 = this.imod(this.r.sqr())),
                    (this.rinv = this.r._invmp(this.m)),
                    (this.minv = this.rinv
                      .mul(this.r)
                      .isubn(1)
                      .div(this.m)),
                    (this.minv = this.minv.umod(this.r)),
                    (this.minv = this.r.sub(this.minv));
                }
                (v.prototype._tmp = function() {
                  var e = new a(null);
                  return (e.words = new Array(Math.ceil(this.n / 13))), e;
                }),
                  (v.prototype.ireduce = function(e) {
                    var t,
                      r = e;
                    do {
                      this.split(r, this.tmp),
                        (t = (r = (r = this.imulK(r)).iadd(
                          this.tmp
                        )).bitLength());
                    } while (t > this.n);
                    var n = t < this.n ? -1 : r.ucmp(this.p);
                    return (
                      0 === n
                        ? ((r.words[0] = 0), (r.length = 1))
                        : n > 0
                        ? r.isub(this.p)
                        : r.strip(),
                      r
                    );
                  }),
                  (v.prototype.split = function(e, t) {
                    e.iushrn(this.n, 0, t);
                  }),
                  (v.prototype.imulK = function(e) {
                    return e.imul(this.k);
                  }),
                  i(g, v),
                  (g.prototype.split = function(e, t) {
                    for (var r = Math.min(e.length, 9), n = 0; n < r; n++)
                      t.words[n] = e.words[n];
                    if (((t.length = r), e.length <= 9))
                      return (e.words[0] = 0), void (e.length = 1);
                    var i = e.words[9];
                    for (
                      t.words[t.length++] = 4194303 & i, n = 10;
                      n < e.length;
                      n++
                    ) {
                      var a = 0 | e.words[n];
                      (e.words[n - 10] = ((4194303 & a) << 4) | (i >>> 22)),
                        (i = a);
                    }
                    (i >>>= 22),
                      (e.words[n - 10] = i),
                      0 === i && e.length > 10
                        ? (e.length -= 10)
                        : (e.length -= 9);
                  }),
                  (g.prototype.imulK = function(e) {
                    (e.words[e.length] = 0),
                      (e.words[e.length + 1] = 0),
                      (e.length += 2);
                    for (var t = 0, r = 0; r < e.length; r++) {
                      var n = 0 | e.words[r];
                      (t += 977 * n),
                        (e.words[r] = 67108863 & t),
                        (t = 64 * n + ((t / 67108864) | 0));
                    }
                    return (
                      0 === e.words[e.length - 1] &&
                        (e.length--, 0 === e.words[e.length - 1] && e.length--),
                      e
                    );
                  }),
                  i(y, v),
                  i(_, v),
                  i(w, v),
                  (w.prototype.imulK = function(e) {
                    for (var t = 0, r = 0; r < e.length; r++) {
                      var n = 19 * (0 | e.words[r]) + t,
                        i = 67108863 & n;
                      (n >>>= 26), (e.words[r] = i), (t = n);
                    }
                    return 0 !== t && (e.words[e.length++] = t), e;
                  }),
                  (a._prime = function(e) {
                    if (m[e]) return m[e];
                    var t;
                    if ("k256" === e) t = new g();
                    else if ("p224" === e) t = new y();
                    else if ("p192" === e) t = new _();
                    else {
                      if ("p25519" !== e) throw new Error("Unknown prime " + e);
                      t = new w();
                    }
                    return (m[e] = t), t;
                  }),
                  (E.prototype._verify1 = function(e) {
                    n(0 === e.negative, "red works only with positives"),
                      n(e.red, "red works only with red numbers");
                  }),
                  (E.prototype._verify2 = function(e, t) {
                    n(
                      0 == (e.negative | t.negative),
                      "red works only with positives"
                    ),
                      n(
                        e.red && e.red === t.red,
                        "red works only with red numbers"
                      );
                  }),
                  (E.prototype.imod = function(e) {
                    return this.prime
                      ? this.prime.ireduce(e)._forceRed(this)
                      : e.umod(this.m)._forceRed(this);
                  }),
                  (E.prototype.neg = function(e) {
                    return e.isZero()
                      ? e.clone()
                      : this.m.sub(e)._forceRed(this);
                  }),
                  (E.prototype.add = function(e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    return (
                      r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    );
                  }),
                  (E.prototype.iadd = function(e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r;
                  }),
                  (E.prototype.sub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
                  }),
                  (E.prototype.isub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r;
                  }),
                  (E.prototype.shl = function(e, t) {
                    return this._verify1(e), this.imod(e.ushln(t));
                  }),
                  (E.prototype.imul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.imul(t));
                  }),
                  (E.prototype.mul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.mul(t));
                  }),
                  (E.prototype.isqr = function(e) {
                    return this.imul(e, e.clone());
                  }),
                  (E.prototype.sqr = function(e) {
                    return this.mul(e, e);
                  }),
                  (E.prototype.sqrt = function(e) {
                    if (e.isZero()) return e.clone();
                    var t = this.m.andln(3);
                    if ((n(t % 2 == 1), 3 === t)) {
                      var r = this.m.add(new a(1)).iushrn(2);
                      return this.pow(e, r);
                    }
                    for (
                      var i = this.m.subn(1), o = 0;
                      !i.isZero() && 0 === i.andln(1);

                    )
                      o++, i.iushrn(1);
                    n(!i.isZero());
                    var s = new a(1).toRed(this),
                      f = s.redNeg(),
                      u = this.m.subn(1).iushrn(1),
                      c = this.m.bitLength();
                    for (
                      c = new a(2 * c * c).toRed(this);
                      0 !== this.pow(c, u).cmp(f);

                    )
                      c.redIAdd(f);
                    for (
                      var d = this.pow(c, i),
                        h = this.pow(e, i.addn(1).iushrn(1)),
                        l = this.pow(e, i),
                        p = o;
                      0 !== l.cmp(s);

                    ) {
                      for (var b = l, m = 0; 0 !== b.cmp(s); m++)
                        b = b.redSqr();
                      n(m < p);
                      var v = this.pow(d, new a(1).iushln(p - m - 1));
                      (h = h.redMul(v)),
                        (d = v.redSqr()),
                        (l = l.redMul(d)),
                        (p = m);
                    }
                    return h;
                  }),
                  (E.prototype.invm = function(e) {
                    var t = e._invmp(this.m);
                    return 0 !== t.negative
                      ? ((t.negative = 0), this.imod(t).redNeg())
                      : this.imod(t);
                  }),
                  (E.prototype.pow = function(e, t) {
                    if (t.isZero()) return new a(1).toRed(this);
                    if (0 === t.cmpn(1)) return e.clone();
                    var r = new Array(16);
                    (r[0] = new a(1).toRed(this)), (r[1] = e);
                    for (var n = 2; n < r.length; n++)
                      r[n] = this.mul(r[n - 1], e);
                    var i = r[0],
                      o = 0,
                      s = 0,
                      f = t.bitLength() % 26;
                    for (0 === f && (f = 26), n = t.length - 1; n >= 0; n--) {
                      for (var u = t.words[n], c = f - 1; c >= 0; c--) {
                        var d = (u >> c) & 1;
                        i !== r[0] && (i = this.sqr(i)),
                          0 !== d || 0 !== o
                            ? ((o <<= 1),
                              (o |= d),
                              (4 === ++s || (0 === n && 0 === c)) &&
                                ((i = this.mul(i, r[o])), (s = 0), (o = 0)))
                            : (s = 0);
                      }
                      f = 26;
                    }
                    return i;
                  }),
                  (E.prototype.convertTo = function(e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t;
                  }),
                  (E.prototype.convertFrom = function(e) {
                    var t = e.clone();
                    return (t.red = null), t;
                  }),
                  (a.mont = function(e) {
                    return new A(e);
                  }),
                  i(A, E),
                  (A.prototype.convertTo = function(e) {
                    return this.imod(e.ushln(this.shift));
                  }),
                  (A.prototype.convertFrom = function(e) {
                    var t = this.imod(e.mul(this.rinv));
                    return (t.red = null), t;
                  }),
                  (A.prototype.imul = function(e, t) {
                    if (e.isZero() || t.isZero())
                      return (e.words[0] = 0), (e.length = 1), e;
                    var r = e.imul(t),
                      n = r
                        .maskn(this.shift)
                        .mul(this.minv)
                        .imaskn(this.shift)
                        .mul(this.m),
                      i = r.isub(n).iushrn(this.shift),
                      a = i;
                    return (
                      i.cmp(this.m) >= 0
                        ? (a = i.isub(this.m))
                        : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
                      a._forceRed(this)
                    );
                  }),
                  (A.prototype.mul = function(e, t) {
                    if (e.isZero() || t.isZero())
                      return new a(0)._forceRed(this);
                    var r = e.mul(t),
                      n = r
                        .maskn(this.shift)
                        .mul(this.minv)
                        .imaskn(this.shift)
                        .mul(this.m),
                      i = r.isub(n).iushrn(this.shift),
                      o = i;
                    return (
                      i.cmp(this.m) >= 0
                        ? (o = i.isub(this.m))
                        : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                      o._forceRed(this)
                    );
                  }),
                  (A.prototype.invm = function(e) {
                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(
                      this
                    );
                  });
              })(e, this);
            }.call(this, r(200)(e)));
          },
          function(e, t, r) {
            "use strict";
            var n = r(17),
              i = r(0);
            function a(e, t) {
              return (
                55296 == (64512 & e.charCodeAt(t)) &&
                !(t < 0 || t + 1 >= e.length) &&
                56320 == (64512 & e.charCodeAt(t + 1))
              );
            }
            function o(e) {
              return (
                ((e >>> 24) |
                  ((e >>> 8) & 65280) |
                  ((e << 8) & 16711680) |
                  ((255 & e) << 24)) >>>
                0
              );
            }
            function s(e) {
              return 1 === e.length ? "0" + e : e;
            }
            function f(e) {
              return 7 === e.length
                ? "0" + e
                : 6 === e.length
                ? "00" + e
                : 5 === e.length
                ? "000" + e
                : 4 === e.length
                ? "0000" + e
                : 3 === e.length
                ? "00000" + e
                : 2 === e.length
                ? "000000" + e
                : 1 === e.length
                ? "0000000" + e
                : e;
            }
            (t.inherits = i),
              (t.toArray = function(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if ("string" == typeof e)
                  if (t) {
                    if ("hex" === t)
                      for (
                        (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                          (e = "0" + e),
                          i = 0;
                        i < e.length;
                        i += 2
                      )
                        r.push(parseInt(e[i] + e[i + 1], 16));
                  } else
                    for (var n = 0, i = 0; i < e.length; i++) {
                      var o = e.charCodeAt(i);
                      o < 128
                        ? (r[n++] = o)
                        : o < 2048
                        ? ((r[n++] = (o >> 6) | 192), (r[n++] = (63 & o) | 128))
                        : a(e, i)
                        ? ((o =
                            65536 +
                            ((1023 & o) << 10) +
                            (1023 & e.charCodeAt(++i))),
                          (r[n++] = (o >> 18) | 240),
                          (r[n++] = ((o >> 12) & 63) | 128),
                          (r[n++] = ((o >> 6) & 63) | 128),
                          (r[n++] = (63 & o) | 128))
                        : ((r[n++] = (o >> 12) | 224),
                          (r[n++] = ((o >> 6) & 63) | 128),
                          (r[n++] = (63 & o) | 128));
                    }
                else for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
                return r;
              }),
              (t.toHex = function(e) {
                for (var t = "", r = 0; r < e.length; r++)
                  t += s(e[r].toString(16));
                return t;
              }),
              (t.htonl = o),
              (t.toHex32 = function(e, t) {
                for (var r = "", n = 0; n < e.length; n++) {
                  var i = e[n];
                  "little" === t && (i = o(i)), (r += f(i.toString(16)));
                }
                return r;
              }),
              (t.zero2 = s),
              (t.zero8 = f),
              (t.join32 = function(e, t, r, i) {
                var a = r - t;
                n(a % 4 == 0);
                for (
                  var o = new Array(a / 4), s = 0, f = t;
                  s < o.length;
                  s++, f += 4
                ) {
                  var u;
                  (u =
                    "big" === i
                      ? (e[f] << 24) |
                        (e[f + 1] << 16) |
                        (e[f + 2] << 8) |
                        e[f + 3]
                      : (e[f + 3] << 24) |
                        (e[f + 2] << 16) |
                        (e[f + 1] << 8) |
                        e[f]),
                    (o[s] = u >>> 0);
                }
                return o;
              }),
              (t.split32 = function(e, t) {
                for (
                  var r = new Array(4 * e.length), n = 0, i = 0;
                  n < e.length;
                  n++, i += 4
                ) {
                  var a = e[n];
                  "big" === t
                    ? ((r[i] = a >>> 24),
                      (r[i + 1] = (a >>> 16) & 255),
                      (r[i + 2] = (a >>> 8) & 255),
                      (r[i + 3] = 255 & a))
                    : ((r[i + 3] = a >>> 24),
                      (r[i + 2] = (a >>> 16) & 255),
                      (r[i + 1] = (a >>> 8) & 255),
                      (r[i] = 255 & a));
                }
                return r;
              }),
              (t.rotr32 = function(e, t) {
                return (e >>> t) | (e << (32 - t));
              }),
              (t.rotl32 = function(e, t) {
                return (e << t) | (e >>> (32 - t));
              }),
              (t.sum32 = function(e, t) {
                return (e + t) >>> 0;
              }),
              (t.sum32_3 = function(e, t, r) {
                return (e + t + r) >>> 0;
              }),
              (t.sum32_4 = function(e, t, r, n) {
                return (e + t + r + n) >>> 0;
              }),
              (t.sum32_5 = function(e, t, r, n, i) {
                return (e + t + r + n + i) >>> 0;
              }),
              (t.sum64 = function(e, t, r, n) {
                var i = e[t],
                  a = (n + e[t + 1]) >>> 0,
                  o = (a < n ? 1 : 0) + r + i;
                (e[t] = o >>> 0), (e[t + 1] = a);
              }),
              (t.sum64_hi = function(e, t, r, n) {
                return (((t + n) >>> 0 < t ? 1 : 0) + e + r) >>> 0;
              }),
              (t.sum64_lo = function(e, t, r, n) {
                return (t + n) >>> 0;
              }),
              (t.sum64_4_hi = function(e, t, r, n, i, a, o, s) {
                var f = 0,
                  u = t;
                return (
                  (f += (u = (u + n) >>> 0) < t ? 1 : 0),
                  (f += (u = (u + a) >>> 0) < a ? 1 : 0),
                  (e + r + i + o + (f += (u = (u + s) >>> 0) < s ? 1 : 0)) >>> 0
                );
              }),
              (t.sum64_4_lo = function(e, t, r, n, i, a, o, s) {
                return (t + n + a + s) >>> 0;
              }),
              (t.sum64_5_hi = function(e, t, r, n, i, a, o, s, f, u) {
                var c = 0,
                  d = t;
                return (
                  (c += (d = (d + n) >>> 0) < t ? 1 : 0),
                  (c += (d = (d + a) >>> 0) < a ? 1 : 0),
                  (c += (d = (d + s) >>> 0) < s ? 1 : 0),
                  (e +
                    r +
                    i +
                    o +
                    f +
                    (c += (d = (d + u) >>> 0) < u ? 1 : 0)) >>>
                    0
                );
              }),
              (t.sum64_5_lo = function(e, t, r, n, i, a, o, s, f, u) {
                return (t + n + a + s + u) >>> 0;
              }),
              (t.rotr64_hi = function(e, t, r) {
                return ((t << (32 - r)) | (e >>> r)) >>> 0;
              }),
              (t.rotr64_lo = function(e, t, r) {
                return ((e << (32 - r)) | (t >>> r)) >>> 0;
              }),
              (t.shr64_hi = function(e, t, r) {
                return e >>> r;
              }),
              (t.shr64_lo = function(e, t, r) {
                return ((e << (32 - r)) | (t >>> r)) >>> 0;
              });
          },
          function(e, t, r) {
            var n = r(3),
              i = r(1),
              a = r(23),
              o = r(13),
              s = r(15),
              f = function e(t, r, f) {
                var u,
                  c,
                  d,
                  h = t & e.F,
                  l = t & e.G,
                  p = t & e.S,
                  b = t & e.P,
                  m = t & e.B,
                  v = t & e.W,
                  g = l ? i : i[r] || (i[r] = {}),
                  y = g.prototype,
                  _ = l ? n : p ? n[r] : (n[r] || {}).prototype;
                for (u in (l && (f = r), f))
                  ((c = !h && _ && void 0 !== _[u]) && s(g, u)) ||
                    ((d = c ? _[u] : f[u]),
                    (g[u] =
                      l && "function" != typeof _[u]
                        ? f[u]
                        : m && c
                        ? a(d, n)
                        : v && _[u] == d
                        ? (function(e) {
                            var t = function(t, r, n) {
                              if (this instanceof e) {
                                switch (arguments.length) {
                                  case 0:
                                    return new e();
                                  case 1:
                                    return new e(t);
                                  case 2:
                                    return new e(t, r);
                                }
                                return new e(t, r, n);
                              }
                              return e.apply(this, arguments);
                            };
                            return (t.prototype = e.prototype), t;
                          })(d)
                        : b && "function" == typeof d
                        ? a(Function.call, d)
                        : d),
                    b &&
                      (((g.virtual || (g.virtual = {}))[u] = d),
                      t & e.R && y && !y[u] && o(y, u, d)));
              };
            (f.F = 1),
              (f.G = 2),
              (f.S = 4),
              (f.P = 8),
              (f.B = 16),
              (f.W = 32),
              (f.U = 64),
              (f.R = 128),
              (e.exports = f);
          },
          function(e, t, r) {
            var n = r(10),
              i = r(63),
              a = r(41),
              o = Object.defineProperty;
            t.f = r(11)
              ? Object.defineProperty
              : function(e, t, r) {
                  if ((n(e), (t = a(t, !0)), n(r), i))
                    try {
                      return o(e, t, r);
                    } catch (e) {}
                  if ("get" in r || "set" in r)
                    throw TypeError("Accessors not supported!");
                  return "value" in r && (e[t] = r.value), e;
                };
          },
          function(e, t, r) {
            var n = r(14);
            e.exports = function(e) {
              if (!n(e)) throw TypeError(e + " is not an object!");
              return e;
            };
          },
          function(e, t, r) {
            e.exports = !r(18)(function() {
              return (
                7 !=
                Object.defineProperty({}, "a", {
                  get: function() {
                    return 7;
                  }
                }).a
              );
            });
          },
          function(e, t, r) {
            "use strict";
            (function(e) {
              var n = r(163),
                i = r(164),
                a = r(90);
              function o() {
                return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
              }
              function s(e, t) {
                if (o() < t) throw new RangeError("Invalid typed array length");
                return (
                  f.TYPED_ARRAY_SUPPORT
                    ? ((e = new Uint8Array(t)).__proto__ = f.prototype)
                    : (null === e && (e = new f(t)), (e.length = t)),
                  e
                );
              }
              function f(e, t, r) {
                if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f))
                  return new f(e, t, r);
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw new Error(
                      "If encoding is specified then the first argument must be a string"
                    );
                  return d(this, e);
                }
                return u(this, e, t, r);
              }
              function u(e, t, r, n) {
                if ("number" == typeof t)
                  throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer &&
                  t instanceof ArrayBuffer
                  ? (function(e, t, r, n) {
                      if ((t.byteLength, r < 0 || t.byteLength < r))
                        throw new RangeError("'offset' is out of bounds");
                      if (t.byteLength < r + (n || 0))
                        throw new RangeError("'length' is out of bounds");
                      return (
                        (t =
                          void 0 === r && void 0 === n
                            ? new Uint8Array(t)
                            : void 0 === n
                            ? new Uint8Array(t, r)
                            : new Uint8Array(t, r, n)),
                        f.TYPED_ARRAY_SUPPORT
                          ? ((e = t).__proto__ = f.prototype)
                          : (e = h(e, t)),
                        e
                      );
                    })(e, t, r, n)
                  : "string" == typeof t
                  ? (function(e, t, r) {
                      if (
                        (("string" == typeof r && "" !== r) || (r = "utf8"),
                        !f.isEncoding(r))
                      )
                        throw new TypeError(
                          '"encoding" must be a valid string encoding'
                        );
                      var n = 0 | p(t, r),
                        i = (e = s(e, n)).write(t, r);
                      return i !== n && (e = e.slice(0, i)), e;
                    })(e, t, r)
                  : (function(e, t) {
                      if (f.isBuffer(t)) {
                        var r = 0 | l(t.length);
                        return 0 === (e = s(e, r)).length
                          ? e
                          : (t.copy(e, 0, 0, r), e);
                      }
                      if (t) {
                        if (
                          ("undefined" != typeof ArrayBuffer &&
                            t.buffer instanceof ArrayBuffer) ||
                          "length" in t
                        )
                          return "number" != typeof t.length ||
                            (n = t.length) != n
                            ? s(e, 0)
                            : h(e, t);
                        if ("Buffer" === t.type && a(t.data))
                          return h(e, t.data);
                      }
                      var n;
                      throw new TypeError(
                        "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                      );
                    })(e, t);
              }
              function c(e) {
                if ("number" != typeof e)
                  throw new TypeError('"size" argument must be a number');
                if (e < 0)
                  throw new RangeError('"size" argument must not be negative');
              }
              function d(e, t) {
                if (
                  (c(t),
                  (e = s(e, t < 0 ? 0 : 0 | l(t))),
                  !f.TYPED_ARRAY_SUPPORT)
                )
                  for (var r = 0; r < t; ++r) e[r] = 0;
                return e;
              }
              function h(e, t) {
                var r = t.length < 0 ? 0 : 0 | l(t.length);
                e = s(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e;
              }
              function l(e) {
                if (e >= o())
                  throw new RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x" +
                      o().toString(16) +
                      " bytes"
                  );
                return 0 | e;
              }
              function p(e, t) {
                if (f.isBuffer(e)) return e.length;
                if (
                  "undefined" != typeof ArrayBuffer &&
                  "function" == typeof ArrayBuffer.isView &&
                  (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
                )
                  return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                      return z(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r;
                    case "hex":
                      return r >>> 1;
                    case "base64":
                      return Y(e).length;
                    default:
                      if (n) return z(e).length;
                      (t = ("" + t).toLowerCase()), (n = !0);
                  }
              }
              function b(e, t, r) {
                var n = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                  return "";
                if (
                  ((void 0 === r || r > this.length) && (r = this.length),
                  r <= 0)
                )
                  return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return R(this, t, r);
                    case "utf8":
                    case "utf-8":
                      return I(this, t, r);
                    case "ascii":
                      return T(this, t, r);
                    case "latin1":
                    case "binary":
                      return L(this, t, r);
                    case "base64":
                      return M(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return P(this, t, r);
                    default:
                      if (n) throw new TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (n = !0);
                  }
              }
              function m(e, t, r) {
                var n = e[t];
                (e[t] = e[r]), (e[r] = n);
              }
              function v(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if (
                  ("string" == typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                    ? (r = 2147483647)
                    : r < -2147483648 && (r = -2147483648),
                  (r = +r),
                  isNaN(r) && (r = i ? 0 : e.length - 1),
                  r < 0 && (r = e.length + r),
                  r >= e.length)
                ) {
                  if (i) return -1;
                  r = e.length - 1;
                } else if (r < 0) {
                  if (!i) return -1;
                  r = 0;
                }
                if (("string" == typeof t && (t = f.from(t, n)), f.isBuffer(t)))
                  return 0 === t.length ? -1 : g(e, t, r, n, i);
                if ("number" == typeof t)
                  return (
                    (t &= 255),
                    f.TYPED_ARRAY_SUPPORT &&
                    "function" == typeof Uint8Array.prototype.indexOf
                      ? i
                        ? Uint8Array.prototype.indexOf.call(e, t, r)
                        : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                      : g(e, [t], r, n, i)
                  );
                throw new TypeError("val must be string, number or Buffer");
              }
              function g(e, t, r, n, i) {
                var a,
                  o = 1,
                  s = e.length,
                  f = t.length;
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (o = 2), (s /= 2), (f /= 2), (r /= 2);
                }
                function u(e, t) {
                  return 1 === o ? e[t] : e.readUInt16BE(t * o);
                }
                if (i) {
                  var c = -1;
                  for (a = r; a < s; a++)
                    if (u(e, a) === u(t, -1 === c ? 0 : a - c)) {
                      if ((-1 === c && (c = a), a - c + 1 === f)) return c * o;
                    } else -1 !== c && (a -= a - c), (c = -1);
                } else
                  for (r + f > s && (r = s - f), a = r; a >= 0; a--) {
                    for (var d = !0, h = 0; h < f; h++)
                      if (u(e, a + h) !== u(t, h)) {
                        d = !1;
                        break;
                      }
                    if (d) return a;
                  }
                return -1;
              }
              function y(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? (n = Number(n)) > i && (n = i) : (n = i);
                var a = t.length;
                if (a % 2 != 0) throw new TypeError("Invalid hex string");
                n > a / 2 && (n = a / 2);
                for (var o = 0; o < n; ++o) {
                  var s = parseInt(t.substr(2 * o, 2), 16);
                  if (isNaN(s)) return o;
                  e[r + o] = s;
                }
                return o;
              }
              function _(e, t, r, n) {
                return q(z(t, e.length - r), e, r, n);
              }
              function w(e, t, r, n) {
                return q(
                  (function(e) {
                    for (var t = [], r = 0; r < e.length; ++r)
                      t.push(255 & e.charCodeAt(r));
                    return t;
                  })(t),
                  e,
                  r,
                  n
                );
              }
              function E(e, t, r, n) {
                return w(e, t, r, n);
              }
              function A(e, t, r, n) {
                return q(Y(t), e, r, n);
              }
              function S(e, t, r, n) {
                return q(
                  (function(e, t) {
                    for (
                      var r, n, i, a = [], o = 0;
                      o < e.length && !((t -= 2) < 0);
                      ++o
                    )
                      (n = (r = e.charCodeAt(o)) >> 8),
                        (i = r % 256),
                        a.push(i),
                        a.push(n);
                    return a;
                  })(t, e.length - r),
                  e,
                  r,
                  n
                );
              }
              function M(e, t, r) {
                return 0 === t && r === e.length
                  ? n.fromByteArray(e)
                  : n.fromByteArray(e.slice(t, r));
              }
              function I(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r; ) {
                  var a,
                    o,
                    s,
                    f,
                    u = e[i],
                    c = null,
                    d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (i + d <= r)
                    switch (d) {
                      case 1:
                        u < 128 && (c = u);
                        break;
                      case 2:
                        128 == (192 & (a = e[i + 1])) &&
                          (f = ((31 & u) << 6) | (63 & a)) > 127 &&
                          (c = f);
                        break;
                      case 3:
                        (a = e[i + 1]),
                          (o = e[i + 2]),
                          128 == (192 & a) &&
                            128 == (192 & o) &&
                            (f =
                              ((15 & u) << 12) | ((63 & a) << 6) | (63 & o)) >
                              2047 &&
                            (f < 55296 || f > 57343) &&
                            (c = f);
                        break;
                      case 4:
                        (a = e[i + 1]),
                          (o = e[i + 2]),
                          (s = e[i + 3]),
                          128 == (192 & a) &&
                            128 == (192 & o) &&
                            128 == (192 & s) &&
                            (f =
                              ((15 & u) << 18) |
                              ((63 & a) << 12) |
                              ((63 & o) << 6) |
                              (63 & s)) > 65535 &&
                            f < 1114112 &&
                            (c = f);
                    }
                  null === c
                    ? ((c = 65533), (d = 1))
                    : c > 65535 &&
                      ((c -= 65536),
                      n.push(((c >>> 10) & 1023) | 55296),
                      (c = 56320 | (1023 & c))),
                    n.push(c),
                    (i += d);
                }
                return (function(e) {
                  var t = e.length;
                  if (t <= x) return String.fromCharCode.apply(String, e);
                  for (var r = "", n = 0; n < t; )
                    r += String.fromCharCode.apply(
                      String,
                      e.slice(n, (n += x))
                    );
                  return r;
                })(n);
              }
              (t.Buffer = f),
                (t.SlowBuffer = function(e) {
                  return +e != e && (e = 0), f.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (f.TYPED_ARRAY_SUPPORT =
                  void 0 !== e.TYPED_ARRAY_SUPPORT
                    ? e.TYPED_ARRAY_SUPPORT
                    : (function() {
                        try {
                          var e = new Uint8Array(1);
                          return (
                            (e.__proto__ = {
                              __proto__: Uint8Array.prototype,
                              foo: function() {
                                return 42;
                              }
                            }),
                            42 === e.foo() &&
                              "function" == typeof e.subarray &&
                              0 === e.subarray(1, 1).byteLength
                          );
                        } catch (e) {
                          return !1;
                        }
                      })()),
                (t.kMaxLength = o()),
                (f.poolSize = 8192),
                (f._augment = function(e) {
                  return (e.__proto__ = f.prototype), e;
                }),
                (f.from = function(e, t, r) {
                  return u(null, e, t, r);
                }),
                f.TYPED_ARRAY_SUPPORT &&
                  ((f.prototype.__proto__ = Uint8Array.prototype),
                  (f.__proto__ = Uint8Array),
                  "undefined" != typeof Symbol &&
                    Symbol.species &&
                    f[Symbol.species] === f &&
                    Object.defineProperty(f, Symbol.species, {
                      value: null,
                      configurable: !0
                    })),
                (f.alloc = function(e, t, r) {
                  return (function(e, t, r, n) {
                    return (
                      c(t),
                      t <= 0
                        ? s(e, t)
                        : void 0 !== r
                        ? "string" == typeof n
                          ? s(e, t).fill(r, n)
                          : s(e, t).fill(r)
                        : s(e, t)
                    );
                  })(null, e, t, r);
                }),
                (f.allocUnsafe = function(e) {
                  return d(null, e);
                }),
                (f.allocUnsafeSlow = function(e) {
                  return d(null, e);
                }),
                (f.isBuffer = function(e) {
                  return !(null == e || !e._isBuffer);
                }),
                (f.compare = function(e, t) {
                  if (!f.isBuffer(e) || !f.isBuffer(t))
                    throw new TypeError("Arguments must be Buffers");
                  if (e === t) return 0;
                  for (
                    var r = e.length, n = t.length, i = 0, a = Math.min(r, n);
                    i < a;
                    ++i
                  )
                    if (e[i] !== t[i]) {
                      (r = e[i]), (n = t[i]);
                      break;
                    }
                  return r < n ? -1 : n < r ? 1 : 0;
                }),
                (f.isEncoding = function(e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (f.concat = function(e, t) {
                  if (!a(e))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === e.length) return f.alloc(0);
                  var r;
                  if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                  var n = f.allocUnsafe(t),
                    i = 0;
                  for (r = 0; r < e.length; ++r) {
                    var o = e[r];
                    if (!f.isBuffer(o))
                      throw new TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    o.copy(n, i), (i += o.length);
                  }
                  return n;
                }),
                (f.byteLength = p),
                (f.prototype._isBuffer = !0),
                (f.prototype.swap16 = function() {
                  var e = this.length;
                  if (e % 2 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; t < e; t += 2) m(this, t, t + 1);
                  return this;
                }),
                (f.prototype.swap32 = function() {
                  var e = this.length;
                  if (e % 4 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; t < e; t += 4)
                    m(this, t, t + 3), m(this, t + 1, t + 2);
                  return this;
                }),
                (f.prototype.swap64 = function() {
                  var e = this.length;
                  if (e % 8 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; t < e; t += 8)
                    m(this, t, t + 7),
                      m(this, t + 1, t + 6),
                      m(this, t + 2, t + 5),
                      m(this, t + 3, t + 4);
                  return this;
                }),
                (f.prototype.toString = function() {
                  var e = 0 | this.length;
                  return 0 === e
                    ? ""
                    : 0 === arguments.length
                    ? I(this, 0, e)
                    : b.apply(this, arguments);
                }),
                (f.prototype.equals = function(e) {
                  if (!f.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                  return this === e || 0 === f.compare(this, e);
                }),
                (f.prototype.inspect = function() {
                  var e = "",
                    r = t.INSPECT_MAX_BYTES;
                  return (
                    this.length > 0 &&
                      ((e = this.toString("hex", 0, r)
                        .match(/.{2}/g)
                        .join(" ")),
                      this.length > r && (e += " ... ")),
                    "<Buffer " + e + ">"
                  );
                }),
                (f.prototype.compare = function(e, t, r, n, i) {
                  if (!f.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === r && (r = e ? e.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === i && (i = this.length),
                    t < 0 || r > e.length || n < 0 || i > this.length)
                  )
                    throw new RangeError("out of range index");
                  if (n >= i && t >= r) return 0;
                  if (n >= i) return -1;
                  if (t >= r) return 1;
                  if (this === e) return 0;
                  for (
                    var a = (i >>>= 0) - (n >>>= 0),
                      o = (r >>>= 0) - (t >>>= 0),
                      s = Math.min(a, o),
                      u = this.slice(n, i),
                      c = e.slice(t, r),
                      d = 0;
                    d < s;
                    ++d
                  )
                    if (u[d] !== c[d]) {
                      (a = u[d]), (o = c[d]);
                      break;
                    }
                  return a < o ? -1 : o < a ? 1 : 0;
                }),
                (f.prototype.includes = function(e, t, r) {
                  return -1 !== this.indexOf(e, t, r);
                }),
                (f.prototype.indexOf = function(e, t, r) {
                  return v(this, e, t, r, !0);
                }),
                (f.prototype.lastIndexOf = function(e, t, r) {
                  return v(this, e, t, r, !1);
                }),
                (f.prototype.write = function(e, t, r, n) {
                  if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
                  else if (void 0 === r && "string" == typeof t)
                    (n = t), (r = this.length), (t = 0);
                  else {
                    if (!isFinite(t))
                      throw new Error(
                        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                      );
                    (t |= 0),
                      isFinite(r)
                        ? ((r |= 0), void 0 === n && (n = "utf8"))
                        : ((n = r), (r = void 0));
                  }
                  var i = this.length - t;
                  if (
                    ((void 0 === r || r > i) && (r = i),
                    (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                  )
                    throw new RangeError(
                      "Attempt to write outside buffer bounds"
                    );
                  n || (n = "utf8");
                  for (var a = !1; ; )
                    switch (n) {
                      case "hex":
                        return y(this, e, t, r);
                      case "utf8":
                      case "utf-8":
                        return _(this, e, t, r);
                      case "ascii":
                        return w(this, e, t, r);
                      case "latin1":
                      case "binary":
                        return E(this, e, t, r);
                      case "base64":
                        return A(this, e, t, r);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return S(this, e, t, r);
                      default:
                        if (a) throw new TypeError("Unknown encoding: " + n);
                        (n = ("" + n).toLowerCase()), (a = !0);
                    }
                }),
                (f.prototype.toJSON = function() {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                  };
                });
              var x = 4096;
              function T(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i)
                  n += String.fromCharCode(127 & e[i]);
                return n;
              }
              function L(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n;
              }
              function R(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = "", a = t; a < r; ++a) i += V(e[a]);
                return i;
              }
              function P(e, t, r) {
                for (var n = e.slice(t, r), i = "", a = 0; a < n.length; a += 2)
                  i += String.fromCharCode(n[a] + 256 * n[a + 1]);
                return i;
              }
              function k(e, t, r) {
                if (e % 1 != 0 || e < 0)
                  throw new RangeError("offset is not uint");
                if (e + t > r)
                  throw new RangeError("Trying to access beyond buffer length");
              }
              function N(e, t, r, n, i, a) {
                if (!f.isBuffer(e))
                  throw new TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > i || t < a)
                  throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length)
                  throw new RangeError("Index out of range");
              }
              function O(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, a = Math.min(e.length - r, 2); i < a; ++i)
                  e[r + i] =
                    (t & (255 << (8 * (n ? i : 1 - i)))) >>>
                    (8 * (n ? i : 1 - i));
              }
              function C(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, a = Math.min(e.length - r, 4); i < a; ++i)
                  e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
              }
              function B(e, t, r, n, i, a) {
                if (r + n > e.length)
                  throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range");
              }
              function j(e, t, r, n, a) {
                return a || B(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
              }
              function D(e, t, r, n, a) {
                return a || B(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
              }
              (f.prototype.slice = function(e, t) {
                var r,
                  n = this.length;
                if (
                  ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                  (t = void 0 === t ? n : ~~t) < 0
                    ? (t += n) < 0 && (t = 0)
                    : t > n && (t = n),
                  t < e && (t = e),
                  f.TYPED_ARRAY_SUPPORT)
                )
                  (r = this.subarray(e, t)).__proto__ = f.prototype;
                else {
                  var i = t - e;
                  r = new f(i, void 0);
                  for (var a = 0; a < i; ++a) r[a] = this[a + e];
                }
                return r;
              }),
                (f.prototype.readUIntLE = function(e, t, r) {
                  (e |= 0), (t |= 0), r || k(e, t, this.length);
                  for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256); )
                    n += this[e + a] * i;
                  return n;
                }),
                (f.prototype.readUIntBE = function(e, t, r) {
                  (e |= 0), (t |= 0), r || k(e, t, this.length);
                  for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                    n += this[e + --t] * i;
                  return n;
                }),
                (f.prototype.readUInt8 = function(e, t) {
                  return t || k(e, 1, this.length), this[e];
                }),
                (f.prototype.readUInt16LE = function(e, t) {
                  return (
                    t || k(e, 2, this.length), this[e] | (this[e + 1] << 8)
                  );
                }),
                (f.prototype.readUInt16BE = function(e, t) {
                  return (
                    t || k(e, 2, this.length), (this[e] << 8) | this[e + 1]
                  );
                }),
                (f.prototype.readUInt32LE = function(e, t) {
                  return (
                    t || k(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                      16777216 * this[e + 3]
                  );
                }),
                (f.prototype.readUInt32BE = function(e, t) {
                  return (
                    t || k(e, 4, this.length),
                    16777216 * this[e] +
                      ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (f.prototype.readIntLE = function(e, t, r) {
                  (e |= 0), (t |= 0), r || k(e, t, this.length);
                  for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256); )
                    n += this[e + a] * i;
                  return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
                }),
                (f.prototype.readIntBE = function(e, t, r) {
                  (e |= 0), (t |= 0), r || k(e, t, this.length);
                  for (
                    var n = t, i = 1, a = this[e + --n];
                    n > 0 && (i *= 256);

                  )
                    a += this[e + --n] * i;
                  return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a;
                }),
                (f.prototype.readInt8 = function(e, t) {
                  return (
                    t || k(e, 1, this.length),
                    128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                  );
                }),
                (f.prototype.readInt16LE = function(e, t) {
                  t || k(e, 2, this.length);
                  var r = this[e] | (this[e + 1] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (f.prototype.readInt16BE = function(e, t) {
                  t || k(e, 2, this.length);
                  var r = this[e + 1] | (this[e] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (f.prototype.readInt32LE = function(e, t) {
                  return (
                    t || k(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (f.prototype.readInt32BE = function(e, t) {
                  return (
                    t || k(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (f.prototype.readFloatLE = function(e, t) {
                  return t || k(e, 4, this.length), i.read(this, e, !0, 23, 4);
                }),
                (f.prototype.readFloatBE = function(e, t) {
                  return t || k(e, 4, this.length), i.read(this, e, !1, 23, 4);
                }),
                (f.prototype.readDoubleLE = function(e, t) {
                  return t || k(e, 8, this.length), i.read(this, e, !0, 52, 8);
                }),
                (f.prototype.readDoubleBE = function(e, t) {
                  return t || k(e, 8, this.length), i.read(this, e, !1, 52, 8);
                }),
                (f.prototype.writeUIntLE = function(e, t, r, n) {
                  (e = +e),
                    (t |= 0),
                    (r |= 0),
                    n || N(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                  var i = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++a < r && (i *= 256); )
                    this[t + a] = (e / i) & 255;
                  return t + r;
                }),
                (f.prototype.writeUIntBE = function(e, t, r, n) {
                  (e = +e),
                    (t |= 0),
                    (r |= 0),
                    n || N(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                  var i = r - 1,
                    a = 1;
                  for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
                    this[t + i] = (e / a) & 255;
                  return t + r;
                }),
                (f.prototype.writeUInt8 = function(e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || N(this, e, t, 1, 255, 0),
                    f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (f.prototype.writeUInt16LE = function(e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || N(this, e, t, 2, 65535, 0),
                    f.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                      : O(this, e, t, !0),
                    t + 2
                  );
                }),
                (f.prototype.writeUInt16BE = function(e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || N(this, e, t, 2, 65535, 0),
                    f.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                      : O(this, e, t, !1),
                    t + 2
                  );
                }),
                (f.prototype.writeUInt32LE = function(e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || N(this, e, t, 4, 4294967295, 0),
                    f.TYPED_ARRAY_SUPPORT
                      ? ((this[t + 3] = e >>> 24),
                        (this[t + 2] = e >>> 16),
                        (this[t + 1] = e >>> 8),
                        (this[t] = 255 & e))
                      : C(this, e, t, !0),
                    t + 4
                  );
                }),
                (f.prototype.writeUInt32BE = function(e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || N(this, e, t, 4, 4294967295, 0),
                    f.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 24),
                        (this[t + 1] = e >>> 16),
                        (this[t + 2] = e >>> 8),
                        (this[t + 3] = 255 & e))
                      : C(this, e, t, !1),
                    t + 4
                  );
                }),
                (f.prototype.writeIntLE = function(e, t, r, n) {
                  if (((e = +e), (t |= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    N(this, e, t, r, i - 1, -i);
                  }
                  var a = 0,
                    o = 1,
                    s = 0;
                  for (this[t] = 255 & e; ++a < r && (o *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1),
                      (this[t + a] = (((e / o) >> 0) - s) & 255);
                  return t + r;
                }),
                (f.prototype.writeIntBE = function(e, t, r, n) {
                  if (((e = +e), (t |= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    N(this, e, t, r, i - 1, -i);
                  }
                  var a = r - 1,
                    o = 1,
                    s = 0;
                  for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1),
                      (this[t + a] = (((e / o) >> 0) - s) & 255);
                  return t + r;
                }),
                (f.prototype.writeInt8 = function(e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || N(this, e, t, 1, 127, -128),
                    f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (f.prototype.writeInt16LE = function(e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || N(this, e, t, 2, 32767, -32768),
                    f.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                      : O(this, e, t, !0),
                    t + 2
                  );
                }),
                (f.prototype.writeInt16BE = function(e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || N(this, e, t, 2, 32767, -32768),
                    f.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                      : O(this, e, t, !1),
                    t + 2
                  );
                }),
                (f.prototype.writeInt32LE = function(e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || N(this, e, t, 4, 2147483647, -2147483648),
                    f.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & e),
                        (this[t + 1] = e >>> 8),
                        (this[t + 2] = e >>> 16),
                        (this[t + 3] = e >>> 24))
                      : C(this, e, t, !0),
                    t + 4
                  );
                }),
                (f.prototype.writeInt32BE = function(e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || N(this, e, t, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    f.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 24),
                        (this[t + 1] = e >>> 16),
                        (this[t + 2] = e >>> 8),
                        (this[t + 3] = 255 & e))
                      : C(this, e, t, !1),
                    t + 4
                  );
                }),
                (f.prototype.writeFloatLE = function(e, t, r) {
                  return j(this, e, t, !0, r);
                }),
                (f.prototype.writeFloatBE = function(e, t, r) {
                  return j(this, e, t, !1, r);
                }),
                (f.prototype.writeDoubleLE = function(e, t, r) {
                  return D(this, e, t, !0, r);
                }),
                (f.prototype.writeDoubleBE = function(e, t, r) {
                  return D(this, e, t, !1, r);
                }),
                (f.prototype.copy = function(e, t, r, n) {
                  if (
                    (r || (r = 0),
                    n || 0 === n || (n = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    n > 0 && n < r && (n = r),
                    n === r)
                  )
                    return 0;
                  if (0 === e.length || 0 === this.length) return 0;
                  if (t < 0) throw new RangeError("targetStart out of bounds");
                  if (r < 0 || r >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                  if (n < 0) throw new RangeError("sourceEnd out of bounds");
                  n > this.length && (n = this.length),
                    e.length - t < n - r && (n = e.length - t + r);
                  var i,
                    a = n - r;
                  if (this === e && r < t && t < n)
                    for (i = a - 1; i >= 0; --i) e[i + t] = this[i + r];
                  else if (a < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < a; ++i) e[i + t] = this[i + r];
                  else
                    Uint8Array.prototype.set.call(
                      e,
                      this.subarray(r, r + a),
                      t
                    );
                  return a;
                }),
                (f.prototype.fill = function(e, t, r, n) {
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((n = t), (t = 0), (r = this.length))
                        : "string" == typeof r && ((n = r), (r = this.length)),
                      1 === e.length)
                    ) {
                      var i = e.charCodeAt(0);
                      i < 256 && (e = i);
                    }
                    if (void 0 !== n && "string" != typeof n)
                      throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !f.isEncoding(n))
                      throw new TypeError("Unknown encoding: " + n);
                  } else "number" == typeof e && (e &= 255);
                  if (t < 0 || this.length < t || this.length < r)
                    throw new RangeError("Out of range index");
                  if (r <= t) return this;
                  var a;
                  if (
                    ((t >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    e || (e = 0),
                    "number" == typeof e)
                  )
                    for (a = t; a < r; ++a) this[a] = e;
                  else {
                    var o = f.isBuffer(e) ? e : z(new f(e, n).toString()),
                      s = o.length;
                    for (a = 0; a < r - t; ++a) this[a + t] = o[a % s];
                  }
                  return this;
                });
              var U = /[^+\/0-9A-Za-z-_]/g;
              function V(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16);
              }
              function z(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, i = null, a = [], o = 0; o < n; ++o) {
                  if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!i) {
                      if (r > 56319) {
                        (t -= 3) > -1 && a.push(239, 191, 189);
                        continue;
                      }
                      if (o + 1 === n) {
                        (t -= 3) > -1 && a.push(239, 191, 189);
                        continue;
                      }
                      i = r;
                      continue;
                    }
                    if (r < 56320) {
                      (t -= 3) > -1 && a.push(239, 191, 189), (i = r);
                      continue;
                    }
                    r = 65536 + (((i - 55296) << 10) | (r - 56320));
                  } else i && (t -= 3) > -1 && a.push(239, 191, 189);
                  if (((i = null), r < 128)) {
                    if ((t -= 1) < 0) break;
                    a.push(r);
                  } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    a.push((r >> 6) | 192, (63 & r) | 128);
                  } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    a.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    a.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  }
                }
                return a;
              }
              function Y(e) {
                return n.toByteArray(
                  (function(e) {
                    if (
                      (e = (function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                      })(e).replace(U, "")).length < 2
                    )
                      return "";
                    for (; e.length % 4 != 0; ) e += "=";
                    return e;
                  })(e)
                );
              }
              function q(e, t, r, n) {
                for (
                  var i = 0;
                  i < n && !(i + r >= t.length || i >= e.length);
                  ++i
                )
                  t[i + r] = e[i];
                return i;
              }
            }.call(this, r(21)));
          },
          function(e, t, r) {
            var n = r(9),
              i = r(24);
            e.exports = r(11)
              ? function(e, t, r) {
                  return n.f(e, t, i(1, r));
                }
              : function(e, t, r) {
                  return (e[t] = r), e;
                };
          },
          function(e, t) {
            e.exports = function(e) {
              return "object" == typeof e ? null !== e : "function" == typeof e;
            };
          },
          function(e, t) {
            var r = {}.hasOwnProperty;
            e.exports = function(e, t) {
              return r.call(e, t);
            };
          },
          function(e, t, r) {
            "use strict";
            var n = r(38),
              i =
                Object.keys ||
                function(e) {
                  var t = [];
                  for (var r in e) t.push(r);
                  return t;
                };
            e.exports = d;
            var a = r(30);
            a.inherits = r(0);
            var o = r(93),
              s = r(58);
            a.inherits(d, o);
            for (var f = i(s.prototype), u = 0; u < f.length; u++) {
              var c = f[u];
              d.prototype[c] || (d.prototype[c] = s.prototype[c]);
            }
            function d(e) {
              if (!(this instanceof d)) return new d(e);
              o.call(this, e),
                s.call(this, e),
                e && !1 === e.readable && (this.readable = !1),
                e && !1 === e.writable && (this.writable = !1),
                (this.allowHalfOpen = !0),
                e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
                this.once("end", h);
            }
            function h() {
              this.allowHalfOpen ||
                this._writableState.ended ||
                n.nextTick(l, this);
            }
            function l(e) {
              e.end();
            }
            Object.defineProperty(d.prototype, "writableHighWaterMark", {
              enumerable: !1,
              get: function() {
                return this._writableState.highWaterMark;
              }
            }),
              Object.defineProperty(d.prototype, "destroyed", {
                get: function() {
                  return (
                    void 0 !== this._readableState &&
                    void 0 !== this._writableState &&
                    this._readableState.destroyed &&
                    this._writableState.destroyed
                  );
                },
                set: function(e) {
                  void 0 !== this._readableState &&
                    void 0 !== this._writableState &&
                    ((this._readableState.destroyed = e),
                    (this._writableState.destroyed = e));
                }
              }),
              (d.prototype._destroy = function(e, t) {
                this.push(null), this.end(), n.nextTick(t, e);
              });
          },
          function(e, t) {
            function r(e, t) {
              if (!e) throw new Error(t || "Assertion failed");
            }
            (e.exports = r),
              (r.equal = function(e, t, r) {
                if (e != t)
                  throw new Error(r || "Assertion failed: " + e + " != " + t);
              });
          },
          function(e, t) {
            e.exports = function(e) {
              try {
                return !!e();
              } catch (e) {
                return !0;
              }
            };
          },
          function(e, t, r) {
            var n = r(65),
              i = r(42);
            e.exports = function(e) {
              return n(i(e));
            };
          },
          function(e, t) {
            e.exports = {};
          },
          function(e, t) {
            var r;
            r = (function() {
              return this;
            })();
            try {
              r = r || new Function("return this")();
            } catch (e) {
              "object" == typeof window && (r = window);
            }
            e.exports = r;
          },
          function(e, t, r) {
            var n = r(2).Buffer;
            function i(e, t) {
              (this._block = n.alloc(e)),
                (this._finalSize = t),
                (this._blockSize = e),
                (this._len = 0);
            }
            (i.prototype.update = function(e, t) {
              "string" == typeof e && ((t = t || "utf8"), (e = n.from(e, t)));
              for (
                var r = this._block,
                  i = this._blockSize,
                  a = e.length,
                  o = this._len,
                  s = 0;
                s < a;

              ) {
                for (
                  var f = o % i, u = Math.min(a - s, i - f), c = 0;
                  c < u;
                  c++
                )
                  r[f + c] = e[s + c];
                (s += u), (o += u) % i == 0 && this._update(r);
              }
              return (this._len += a), this;
            }),
              (i.prototype.digest = function(e) {
                var t = this._len % this._blockSize;
                (this._block[t] = 128),
                  this._block.fill(0, t + 1),
                  t >= this._finalSize &&
                    (this._update(this._block), this._block.fill(0));
                var r = 8 * this._len;
                if (r <= 4294967295)
                  this._block.writeUInt32BE(r, this._blockSize - 4);
                else {
                  var n = (4294967295 & r) >>> 0,
                    i = (r - n) / 4294967296;
                  this._block.writeUInt32BE(i, this._blockSize - 8),
                    this._block.writeUInt32BE(n, this._blockSize - 4);
                }
                this._update(this._block);
                var a = this._hash();
                return e ? a.toString(e) : a;
              }),
              (i.prototype._update = function() {
                throw new Error("_update must be implemented by subclass");
              }),
              (e.exports = i);
          },
          function(e, t, r) {
            var n = r(32);
            e.exports = function(e, t, r) {
              if ((n(e), void 0 === t)) return e;
              switch (r) {
                case 1:
                  return function(r) {
                    return e.call(t, r);
                  };
                case 2:
                  return function(r, n) {
                    return e.call(t, r, n);
                  };
                case 3:
                  return function(r, n, i) {
                    return e.call(t, r, n, i);
                  };
              }
              return function() {
                return e.apply(t, arguments);
              };
            };
          },
          function(e, t) {
            e.exports = function(e, t) {
              return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
              };
            };
          },
          function(e, t, r) {
            var n = r(64),
              i = r(47);
            e.exports =
              Object.keys ||
              function(e) {
                return n(e, i);
              };
          },
          function(e, t) {
            var r = {}.toString;
            e.exports = function(e) {
              return r.call(e).slice(8, -1);
            };
          },
          function(e, t) {
            e.exports = !0;
          },
          function(e, t, r) {
            var n = r(42);
            e.exports = function(e) {
              return Object(n(e));
            };
          },
          function(e, t, r) {
            "use strict";
            var n = r(129)(!0);
            r(68)(
              String,
              "String",
              function(e) {
                (this._t = String(e)), (this._i = 0);
              },
              function() {
                var e,
                  t = this._t,
                  r = this._i;
                return r >= t.length
                  ? { value: void 0, done: !0 }
                  : ((e = n(t, r)),
                    (this._i += e.length),
                    { value: e, done: !1 });
              }
            );
          },
          function(e, t, r) {
            (function(e) {
              function r(e) {
                return Object.prototype.toString.call(e);
              }
              (t.isArray = function(e) {
                return Array.isArray
                  ? Array.isArray(e)
                  : "[object Array]" === r(e);
              }),
                (t.isBoolean = function(e) {
                  return "boolean" == typeof e;
                }),
                (t.isNull = function(e) {
                  return null === e;
                }),
                (t.isNullOrUndefined = function(e) {
                  return null == e;
                }),
                (t.isNumber = function(e) {
                  return "number" == typeof e;
                }),
                (t.isString = function(e) {
                  return "string" == typeof e;
                }),
                (t.isSymbol = function(e) {
                  return "symbol" == typeof e;
                }),
                (t.isUndefined = function(e) {
                  return void 0 === e;
                }),
                (t.isRegExp = function(e) {
                  return "[object RegExp]" === r(e);
                }),
                (t.isObject = function(e) {
                  return "object" == typeof e && null !== e;
                }),
                (t.isDate = function(e) {
                  return "[object Date]" === r(e);
                }),
                (t.isError = function(e) {
                  return "[object Error]" === r(e) || e instanceof Error;
                }),
                (t.isFunction = function(e) {
                  return "function" == typeof e;
                }),
                (t.isPrimitive = function(e) {
                  return (
                    null === e ||
                    "boolean" == typeof e ||
                    "number" == typeof e ||
                    "string" == typeof e ||
                    "symbol" == typeof e ||
                    void 0 === e
                  );
                }),
                (t.isBuffer = e.isBuffer);
            }.call(this, r(12).Buffer));
          },
          function(e, t, r) {
            "use strict";
            var n = r(7),
              i = r(17);
            function a() {
              (this.pending = null),
                (this.pendingTotal = 0),
                (this.blockSize = this.constructor.blockSize),
                (this.outSize = this.constructor.outSize),
                (this.hmacStrength = this.constructor.hmacStrength),
                (this.padLength = this.constructor.padLength / 8),
                (this.endian = "big"),
                (this._delta8 = this.blockSize / 8),
                (this._delta32 = this.blockSize / 32);
            }
            (t.BlockHash = a),
              (a.prototype.update = function(e, t) {
                if (
                  ((e = n.toArray(e, t)),
                  this.pending
                    ? (this.pending = this.pending.concat(e))
                    : (this.pending = e),
                  (this.pendingTotal += e.length),
                  this.pending.length >= this._delta8)
                ) {
                  var r = (e = this.pending).length % this._delta8;
                  (this.pending = e.slice(e.length - r, e.length)),
                    0 === this.pending.length && (this.pending = null),
                    (e = n.join32(e, 0, e.length - r, this.endian));
                  for (var i = 0; i < e.length; i += this._delta32)
                    this._update(e, i, i + this._delta32);
                }
                return this;
              }),
              (a.prototype.digest = function(e) {
                return (
                  this.update(this._pad()),
                  i(null === this.pending),
                  this._digest(e)
                );
              }),
              (a.prototype._pad = function() {
                var e = this.pendingTotal,
                  t = this._delta8,
                  r = t - ((e + this.padLength) % t),
                  n = new Array(r + this.padLength);
                n[0] = 128;
                for (var i = 1; i < r; i++) n[i] = 0;
                if (((e <<= 3), "big" === this.endian)) {
                  for (var a = 8; a < this.padLength; a++) n[i++] = 0;
                  (n[i++] = 0),
                    (n[i++] = 0),
                    (n[i++] = 0),
                    (n[i++] = 0),
                    (n[i++] = (e >>> 24) & 255),
                    (n[i++] = (e >>> 16) & 255),
                    (n[i++] = (e >>> 8) & 255),
                    (n[i++] = 255 & e);
                } else
                  for (
                    n[i++] = 255 & e,
                      n[i++] = (e >>> 8) & 255,
                      n[i++] = (e >>> 16) & 255,
                      n[i++] = (e >>> 24) & 255,
                      n[i++] = 0,
                      n[i++] = 0,
                      n[i++] = 0,
                      n[i++] = 0,
                      a = 8;
                    a < this.padLength;
                    a++
                  )
                    n[i++] = 0;
                return n;
              });
          },
          function(e, t) {
            e.exports = function(e) {
              if ("function" != typeof e)
                throw TypeError(e + " is not a function!");
              return e;
            };
          },
          function(e, t) {
            var r = 0,
              n = Math.random();
            e.exports = function(e) {
              return "Symbol(".concat(
                void 0 === e ? "" : e,
                ")_",
                (++r + n).toString(36)
              );
            };
          },
          function(e, t) {
            t.f = {}.propertyIsEnumerable;
          },
          function(e, t, r) {
            r(123);
            for (
              var n = r(3),
                i = r(13),
                a = r(20),
                o = r(4)("toStringTag"),
                s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                  ","
                ),
                f = 0;
              f < s.length;
              f++
            ) {
              var u = s[f],
                c = n[u],
                d = c && c.prototype;
              d && !d[o] && i(d, o, u), (a[u] = a.Array);
            }
          },
          function(e, t, r) {
            var n = r(9).f,
              i = r(15),
              a = r(4)("toStringTag");
            e.exports = function(e, t, r) {
              e &&
                !i((e = r ? e : e.prototype), a) &&
                n(e, a, { configurable: !0, value: t });
            };
          },
          function(e, t) {
            var r,
              n,
              i = (e.exports = {});
            function a() {
              throw new Error("setTimeout has not been defined");
            }
            function o() {
              throw new Error("clearTimeout has not been defined");
            }
            function s(e) {
              if (r === setTimeout) return setTimeout(e, 0);
              if ((r === a || !r) && setTimeout)
                return (r = setTimeout), setTimeout(e, 0);
              try {
                return r(e, 0);
              } catch (t) {
                try {
                  return r.call(null, e, 0);
                } catch (t) {
                  return r.call(this, e, 0);
                }
              }
            }
            !(function() {
              try {
                r = "function" == typeof setTimeout ? setTimeout : a;
              } catch (e) {
                r = a;
              }
              try {
                n = "function" == typeof clearTimeout ? clearTimeout : o;
              } catch (e) {
                n = o;
              }
            })();
            var f,
              u = [],
              c = !1,
              d = -1;
            function h() {
              c &&
                f &&
                ((c = !1),
                f.length ? (u = f.concat(u)) : (d = -1),
                u.length && l());
            }
            function l() {
              if (!c) {
                var e = s(h);
                c = !0;
                for (var t = u.length; t; ) {
                  for (f = u, u = []; ++d < t; ) f && f[d].run();
                  (d = -1), (t = u.length);
                }
                (f = null),
                  (c = !1),
                  (function(e) {
                    if (n === clearTimeout) return clearTimeout(e);
                    if ((n === o || !n) && clearTimeout)
                      return (n = clearTimeout), clearTimeout(e);
                    try {
                      n(e);
                    } catch (t) {
                      try {
                        return n.call(null, e);
                      } catch (t) {
                        return n.call(this, e);
                      }
                    }
                  })(e);
              }
            }
            function p(e, t) {
              (this.fun = e), (this.array = t);
            }
            function b() {}
            (i.nextTick = function(e) {
              var t = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                  t[r - 1] = arguments[r];
              u.push(new p(e, t)), 1 !== u.length || c || s(l);
            }),
              (p.prototype.run = function() {
                this.fun.apply(null, this.array);
              }),
              (i.title = "browser"),
              (i.browser = !0),
              (i.env = {}),
              (i.argv = []),
              (i.version = ""),
              (i.versions = {}),
              (i.on = b),
              (i.addListener = b),
              (i.once = b),
              (i.off = b),
              (i.removeListener = b),
              (i.removeAllListeners = b),
              (i.emit = b),
              (i.prependListener = b),
              (i.prependOnceListener = b),
              (i.listeners = function(e) {
                return [];
              }),
              (i.binding = function(e) {
                throw new Error("process.binding is not supported");
              }),
              (i.cwd = function() {
                return "/";
              }),
              (i.chdir = function(e) {
                throw new Error("process.chdir is not supported");
              }),
              (i.umask = function() {
                return 0;
              });
          },
          function(e, t, r) {
            "use strict";
            (function(t) {
              void 0 === t ||
              !t.version ||
              0 === t.version.indexOf("v0.") ||
              (0 === t.version.indexOf("v1.") &&
                0 !== t.version.indexOf("v1.8."))
                ? (e.exports = {
                    nextTick: function(e, r, n, i) {
                      if ("function" != typeof e)
                        throw new TypeError(
                          '"callback" argument must be a function'
                        );
                      var a,
                        o,
                        s = arguments.length;
                      switch (s) {
                        case 0:
                        case 1:
                          return t.nextTick(e);
                        case 2:
                          return t.nextTick(function() {
                            e.call(null, r);
                          });
                        case 3:
                          return t.nextTick(function() {
                            e.call(null, r, n);
                          });
                        case 4:
                          return t.nextTick(function() {
                            e.call(null, r, n, i);
                          });
                        default:
                          for (a = new Array(s - 1), o = 0; o < a.length; )
                            a[o++] = arguments[o];
                          return t.nextTick(function() {
                            e.apply(null, a);
                          });
                      }
                    }
                  })
                : (e.exports = t);
            }.call(this, r(37)));
          },
          function(e, t, r) {
            "use strict";
            var n = r(6),
              i = r(5),
              a = i.getNAF,
              o = i.getJSF,
              s = i.assert;
            function f(e, t) {
              (this.type = e),
                (this.p = new n(t.p, 16)),
                (this.red = t.prime ? n.red(t.prime) : n.mont(this.p)),
                (this.zero = new n(0).toRed(this.red)),
                (this.one = new n(1).toRed(this.red)),
                (this.two = new n(2).toRed(this.red)),
                (this.n = t.n && new n(t.n, 16)),
                (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
                (this._wnafT1 = new Array(4)),
                (this._wnafT2 = new Array(4)),
                (this._wnafT3 = new Array(4)),
                (this._wnafT4 = new Array(4)),
                (this._bitLength = this.n ? this.n.bitLength() : 0);
              var r = this.n && this.p.div(this.n);
              !r || r.cmpn(100) > 0
                ? (this.redN = null)
                : ((this._maxwellTrick = !0),
                  (this.redN = this.n.toRed(this.red)));
            }
            function u(e, t) {
              (this.curve = e), (this.type = t), (this.precomputed = null);
            }
            (e.exports = f),
              (f.prototype.point = function() {
                throw new Error("Not implemented");
              }),
              (f.prototype.validate = function() {
                throw new Error("Not implemented");
              }),
              (f.prototype._fixedNafMul = function(e, t) {
                s(e.precomputed);
                var r = e._getDoubles(),
                  n = a(t, 1, this._bitLength),
                  i = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
                i /= 3;
                for (var o = [], f = 0; f < n.length; f += r.step) {
                  var u = 0;
                  for (t = f + r.step - 1; t >= f; t--) u = (u << 1) + n[t];
                  o.push(u);
                }
                for (
                  var c = this.jpoint(null, null, null),
                    d = this.jpoint(null, null, null),
                    h = i;
                  h > 0;
                  h--
                ) {
                  for (f = 0; f < o.length; f++)
                    (u = o[f]) === h
                      ? (d = d.mixedAdd(r.points[f]))
                      : u === -h && (d = d.mixedAdd(r.points[f].neg()));
                  c = c.add(d);
                }
                return c.toP();
              }),
              (f.prototype._wnafMul = function(e, t) {
                var r = 4,
                  n = e._getNAFPoints(r);
                r = n.wnd;
                for (
                  var i = n.points,
                    o = a(t, r, this._bitLength),
                    f = this.jpoint(null, null, null),
                    u = o.length - 1;
                  u >= 0;
                  u--
                ) {
                  for (t = 0; u >= 0 && 0 === o[u]; u--) t++;
                  if ((u >= 0 && t++, (f = f.dblp(t)), u < 0)) break;
                  var c = o[u];
                  s(0 !== c),
                    (f =
                      "affine" === e.type
                        ? c > 0
                          ? f.mixedAdd(i[(c - 1) >> 1])
                          : f.mixedAdd(i[(-c - 1) >> 1].neg())
                        : c > 0
                        ? f.add(i[(c - 1) >> 1])
                        : f.add(i[(-c - 1) >> 1].neg()));
                }
                return "affine" === e.type ? f.toP() : f;
              }),
              (f.prototype._wnafMulAdd = function(e, t, r, n, i) {
                for (
                  var s = this._wnafT1,
                    f = this._wnafT2,
                    u = this._wnafT3,
                    c = 0,
                    d = 0;
                  d < n;
                  d++
                ) {
                  var h = (M = t[d])._getNAFPoints(e);
                  (s[d] = h.wnd), (f[d] = h.points);
                }
                for (d = n - 1; d >= 1; d -= 2) {
                  var l = d - 1,
                    p = d;
                  if (1 === s[l] && 1 === s[p]) {
                    var b = [t[l], null, null, t[p]];
                    0 === t[l].y.cmp(t[p].y)
                      ? ((b[1] = t[l].add(t[p])),
                        (b[2] = t[l].toJ().mixedAdd(t[p].neg())))
                      : 0 === t[l].y.cmp(t[p].y.redNeg())
                      ? ((b[1] = t[l].toJ().mixedAdd(t[p])),
                        (b[2] = t[l].add(t[p].neg())))
                      : ((b[1] = t[l].toJ().mixedAdd(t[p])),
                        (b[2] = t[l].toJ().mixedAdd(t[p].neg())));
                    var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                      v = o(r[l], r[p]);
                    (c = Math.max(v[0].length, c)),
                      (u[l] = new Array(c)),
                      (u[p] = new Array(c));
                    for (var g = 0; g < c; g++) {
                      var y = 0 | v[0][g],
                        _ = 0 | v[1][g];
                      (u[l][g] = m[3 * (y + 1) + (_ + 1)]),
                        (u[p][g] = 0),
                        (f[l] = b);
                    }
                  } else
                    (u[l] = a(r[l], s[l], this._bitLength)),
                      (u[p] = a(r[p], s[p], this._bitLength)),
                      (c = Math.max(u[l].length, c)),
                      (c = Math.max(u[p].length, c));
                }
                var w = this.jpoint(null, null, null),
                  E = this._wnafT4;
                for (d = c; d >= 0; d--) {
                  for (var A = 0; d >= 0; ) {
                    var S = !0;
                    for (g = 0; g < n; g++)
                      (E[g] = 0 | u[g][d]), 0 !== E[g] && (S = !1);
                    if (!S) break;
                    A++, d--;
                  }
                  if ((d >= 0 && A++, (w = w.dblp(A)), d < 0)) break;
                  for (g = 0; g < n; g++) {
                    var M,
                      I = E[g];
                    0 !== I &&
                      (I > 0
                        ? (M = f[g][(I - 1) >> 1])
                        : I < 0 && (M = f[g][(-I - 1) >> 1].neg()),
                      (w = "affine" === M.type ? w.mixedAdd(M) : w.add(M)));
                  }
                }
                for (d = 0; d < n; d++) f[d] = null;
                return i ? w : w.toP();
              }),
              (f.BasePoint = u),
              (u.prototype.eq = function() {
                throw new Error("Not implemented");
              }),
              (u.prototype.validate = function() {
                return this.curve.validate(this);
              }),
              (f.prototype.decodePoint = function(e, t) {
                e = i.toArray(e, t);
                var r = this.p.byteLength();
                if (
                  (4 === e[0] || 6 === e[0] || 7 === e[0]) &&
                  e.length - 1 == 2 * r
                )
                  return (
                    6 === e[0]
                      ? s(e[e.length - 1] % 2 == 0)
                      : 7 === e[0] && s(e[e.length - 1] % 2 == 1),
                    this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
                  );
                if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
                  return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
                throw new Error("Unknown point format");
              }),
              (u.prototype.encodeCompressed = function(e) {
                return this.encode(e, !0);
              }),
              (u.prototype._encode = function(e) {
                var t = this.curve.p.byteLength(),
                  r = this.getX().toArray("be", t);
                return e
                  ? [this.getY().isEven() ? 2 : 3].concat(r)
                  : [4].concat(r, this.getY().toArray("be", t));
              }),
              (u.prototype.encode = function(e, t) {
                return i.encode(this._encode(t), e);
              }),
              (u.prototype.precompute = function(e) {
                if (this.precomputed) return this;
                var t = { doubles: null, naf: null, beta: null };
                return (
                  (t.naf = this._getNAFPoints(8)),
                  (t.doubles = this._getDoubles(4, e)),
                  (t.beta = this._getBeta()),
                  (this.precomputed = t),
                  this
                );
              }),
              (u.prototype._hasDoubles = function(e) {
                if (!this.precomputed) return !1;
                var t = this.precomputed.doubles;
                return (
                  !!t &&
                  t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
                );
              }),
              (u.prototype._getDoubles = function(e, t) {
                if (this.precomputed && this.precomputed.doubles)
                  return this.precomputed.doubles;
                for (var r = [this], n = this, i = 0; i < t; i += e) {
                  for (var a = 0; a < e; a++) n = n.dbl();
                  r.push(n);
                }
                return { step: e, points: r };
              }),
              (u.prototype._getNAFPoints = function(e) {
                if (this.precomputed && this.precomputed.naf)
                  return this.precomputed.naf;
                for (
                  var t = [this],
                    r = (1 << e) - 1,
                    n = 1 === r ? null : this.dbl(),
                    i = 1;
                  i < r;
                  i++
                )
                  t[i] = t[i - 1].add(n);
                return { wnd: e, points: t };
              }),
              (u.prototype._getBeta = function() {
                return null;
              }),
              (u.prototype.dblp = function(e) {
                for (var t = this, r = 0; r < e; r++) t = t.dbl();
                return t;
              });
          },
          function(e, t, r) {
            var n = r(14),
              i = r(3).document,
              a = n(i) && n(i.createElement);
            e.exports = function(e) {
              return a ? i.createElement(e) : {};
            };
          },
          function(e, t, r) {
            var n = r(14);
            e.exports = function(e, t) {
              if (!n(e)) return e;
              var r, i;
              if (
                t &&
                "function" == typeof (r = e.toString) &&
                !n((i = r.call(e)))
              )
                return i;
              if ("function" == typeof (r = e.valueOf) && !n((i = r.call(e))))
                return i;
              if (
                !t &&
                "function" == typeof (r = e.toString) &&
                !n((i = r.call(e)))
              )
                return i;
              throw TypeError("Can't convert object to primitive value");
            };
          },
          function(e, t) {
            e.exports = function(e) {
              if (null == e) throw TypeError("Can't call method on  " + e);
              return e;
            };
          },
          function(e, t, r) {
            var n = r(44),
              i = Math.min;
            e.exports = function(e) {
              return e > 0 ? i(n(e), 9007199254740991) : 0;
            };
          },
          function(e, t) {
            var r = Math.ceil,
              n = Math.floor;
            e.exports = function(e) {
              return isNaN((e = +e)) ? 0 : (e > 0 ? n : r)(e);
            };
          },
          function(e, t, r) {
            var n = r(46)("keys"),
              i = r(33);
            e.exports = function(e) {
              return n[e] || (n[e] = i(e));
            };
          },
          function(e, t, r) {
            var n = r(1),
              i = r(3),
              a = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
            (e.exports = function(e, t) {
              return a[e] || (a[e] = void 0 !== t ? t : {});
            })("versions", []).push({
              version: n.version,
              mode: r(27) ? "pure" : "global",
              copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
            });
          },
          function(e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
              ","
            );
          },
          function(e, t) {
            t.f = Object.getOwnPropertySymbols;
          },
          function(e, t, r) {
            var n = r(26),
              i = r(4)("toStringTag"),
              a =
                "Arguments" ==
                n(
                  (function() {
                    return arguments;
                  })()
                );
            e.exports = function(e) {
              var t, r, o;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (r = (function(e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = Object(e)), i))
                ? r
                : a
                ? n(t)
                : "Object" == (o = n(t)) && "function" == typeof t.callee
                ? "Arguments"
                : o;
            };
          },
          function(e, t, r) {
            var n = r(49),
              i = r(4)("iterator"),
              a = r(20);
            e.exports = r(1).getIteratorMethod = function(e) {
              if (null != e) return e[i] || e["@@iterator"] || a[n(e)];
            };
          },
          function(e, t, r) {
            "use strict";
            var n = r(32);
            function i(e) {
              var t, r;
              (this.promise = new e(function(e, n) {
                if (void 0 !== t || void 0 !== r)
                  throw TypeError("Bad Promise constructor");
                (t = e), (r = n);
              })),
                (this.resolve = n(t)),
                (this.reject = n(r));
            }
            e.exports.f = function(e) {
              return new i(e);
            };
          },
          function(e, t, r) {
            t.f = r(4);
          },
          function(e, t, r) {
            var n = r(3),
              i = r(1),
              a = r(27),
              o = r(52),
              s = r(9).f;
            e.exports = function(e) {
              var t = i.Symbol || (i.Symbol = a ? {} : n.Symbol || {});
              "_" == e.charAt(0) || e in t || s(t, e, { value: o.f(e) });
            };
          },
          function(e, t, r) {
            "use strict";
            var n = r(0),
              i = r(166),
              a = r(178),
              o = r(179),
              s = r(184);
            function f(e) {
              s.call(this, "digest"), (this._hash = e);
            }
            n(f, s),
              (f.prototype._update = function(e) {
                this._hash.update(e);
              }),
              (f.prototype._final = function() {
                return this._hash.digest();
              }),
              (e.exports = function(e) {
                return "md5" === (e = e.toLowerCase())
                  ? new i()
                  : "rmd160" === e || "ripemd160" === e
                  ? new a()
                  : new f(o(e));
              });
          },
          function(e, t, r) {
            "use strict";
            var n,
              i = "object" == typeof Reflect ? Reflect : null,
              a =
                i && "function" == typeof i.apply
                  ? i.apply
                  : function(e, t, r) {
                      return Function.prototype.apply.call(e, t, r);
                    };
            n =
              i && "function" == typeof i.ownKeys
                ? i.ownKeys
                : Object.getOwnPropertySymbols
                ? function(e) {
                    return Object.getOwnPropertyNames(e).concat(
                      Object.getOwnPropertySymbols(e)
                    );
                  }
                : function(e) {
                    return Object.getOwnPropertyNames(e);
                  };
            var o =
              Number.isNaN ||
              function(e) {
                return e != e;
              };
            function s() {
              s.init.call(this);
            }
            (e.exports = s),
              (s.EventEmitter = s),
              (s.prototype._events = void 0),
              (s.prototype._eventsCount = 0),
              (s.prototype._maxListeners = void 0);
            var f = 10;
            function u(e) {
              return void 0 === e._maxListeners
                ? s.defaultMaxListeners
                : e._maxListeners;
            }
            function c(e, t, r, n) {
              var i, a, o, s;
              if ("function" != typeof r)
                throw new TypeError(
                  'The "listener" argument must be of type Function. Received type ' +
                    typeof r
                );
              if (
                (void 0 === (a = e._events)
                  ? ((a = e._events = Object.create(null)),
                    (e._eventsCount = 0))
                  : (void 0 !== a.newListener &&
                      (e.emit("newListener", t, r.listener ? r.listener : r),
                      (a = e._events)),
                    (o = a[t])),
                void 0 === o)
              )
                (o = a[t] = r), ++e._eventsCount;
              else if (
                ("function" == typeof o
                  ? (o = a[t] = n ? [r, o] : [o, r])
                  : n
                  ? o.unshift(r)
                  : o.push(r),
                (i = u(e)) > 0 && o.length > i && !o.warned)
              ) {
                o.warned = !0;
                var f = new Error(
                  "Possible EventEmitter memory leak detected. " +
                    o.length +
                    " " +
                    String(t) +
                    " listeners added. Use emitter.setMaxListeners() to increase limit"
                );
                (f.name = "MaxListenersExceededWarning"),
                  (f.emitter = e),
                  (f.type = t),
                  (f.count = o.length),
                  (s = f),
                  console && console.warn && console.warn(s);
              }
              return e;
            }
            function d() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e.push(arguments[t]);
              this.fired ||
                (this.target.removeListener(this.type, this.wrapFn),
                (this.fired = !0),
                a(this.listener, this.target, e));
            }
            function h(e, t, r) {
              var n = {
                  fired: !1,
                  wrapFn: void 0,
                  target: e,
                  type: t,
                  listener: r
                },
                i = d.bind(n);
              return (i.listener = r), (n.wrapFn = i), i;
            }
            function l(e, t, r) {
              var n = e._events;
              if (void 0 === n) return [];
              var i = n[t];
              return void 0 === i
                ? []
                : "function" == typeof i
                ? r
                  ? [i.listener || i]
                  : [i]
                : r
                ? (function(e) {
                    for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                      t[r] = e[r].listener || e[r];
                    return t;
                  })(i)
                : b(i, i.length);
            }
            function p(e) {
              var t = this._events;
              if (void 0 !== t) {
                var r = t[e];
                if ("function" == typeof r) return 1;
                if (void 0 !== r) return r.length;
              }
              return 0;
            }
            function b(e, t) {
              for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
              return r;
            }
            Object.defineProperty(s, "defaultMaxListeners", {
              enumerable: !0,
              get: function() {
                return f;
              },
              set: function(e) {
                if ("number" != typeof e || e < 0 || o(e))
                  throw new RangeError(
                    'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                      e +
                      "."
                  );
                f = e;
              }
            }),
              (s.init = function() {
                (void 0 !== this._events &&
                  this._events !== Object.getPrototypeOf(this)._events) ||
                  ((this._events = Object.create(null)),
                  (this._eventsCount = 0)),
                  (this._maxListeners = this._maxListeners || void 0);
              }),
              (s.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || o(e))
                  throw new RangeError(
                    'The value of "n" is out of range. It must be a non-negative number. Received ' +
                      e +
                      "."
                  );
                return (this._maxListeners = e), this;
              }),
              (s.prototype.getMaxListeners = function() {
                return u(this);
              }),
              (s.prototype.emit = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++)
                  t.push(arguments[r]);
                var n = "error" === e,
                  i = this._events;
                if (void 0 !== i) n = n && void 0 === i.error;
                else if (!n) return !1;
                if (n) {
                  var o;
                  if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
                  var s = new Error(
                    "Unhandled error." + (o ? " (" + o.message + ")" : "")
                  );
                  throw ((s.context = o), s);
                }
                var f = i[e];
                if (void 0 === f) return !1;
                if ("function" == typeof f) a(f, this, t);
                else {
                  var u = f.length,
                    c = b(f, u);
                  for (r = 0; r < u; ++r) a(c[r], this, t);
                }
                return !0;
              }),
              (s.prototype.addListener = function(e, t) {
                return c(this, e, t, !1);
              }),
              (s.prototype.on = s.prototype.addListener),
              (s.prototype.prependListener = function(e, t) {
                return c(this, e, t, !0);
              }),
              (s.prototype.once = function(e, t) {
                if ("function" != typeof t)
                  throw new TypeError(
                    'The "listener" argument must be of type Function. Received type ' +
                      typeof t
                  );
                return this.on(e, h(this, e, t)), this;
              }),
              (s.prototype.prependOnceListener = function(e, t) {
                if ("function" != typeof t)
                  throw new TypeError(
                    'The "listener" argument must be of type Function. Received type ' +
                      typeof t
                  );
                return this.prependListener(e, h(this, e, t)), this;
              }),
              (s.prototype.removeListener = function(e, t) {
                var r, n, i, a, o;
                if ("function" != typeof t)
                  throw new TypeError(
                    'The "listener" argument must be of type Function. Received type ' +
                      typeof t
                  );
                if (void 0 === (n = this._events)) return this;
                if (void 0 === (r = n[e])) return this;
                if (r === t || r.listener === t)
                  0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : (delete n[e],
                      n.removeListener &&
                        this.emit("removeListener", e, r.listener || t));
                else if ("function" != typeof r) {
                  for (i = -1, a = r.length - 1; a >= 0; a--)
                    if (r[a] === t || r[a].listener === t) {
                      (o = r[a].listener), (i = a);
                      break;
                    }
                  if (i < 0) return this;
                  0 === i
                    ? r.shift()
                    : (function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop();
                      })(r, i),
                    1 === r.length && (n[e] = r[0]),
                    void 0 !== n.removeListener &&
                      this.emit("removeListener", e, o || t);
                }
                return this;
              }),
              (s.prototype.off = s.prototype.removeListener),
              (s.prototype.removeAllListeners = function(e) {
                var t, r, n;
                if (void 0 === (r = this._events)) return this;
                if (void 0 === r.removeListener)
                  return (
                    0 === arguments.length
                      ? ((this._events = Object.create(null)),
                        (this._eventsCount = 0))
                      : void 0 !== r[e] &&
                        (0 == --this._eventsCount
                          ? (this._events = Object.create(null))
                          : delete r[e]),
                    this
                  );
                if (0 === arguments.length) {
                  var i,
                    a = Object.keys(r);
                  for (n = 0; n < a.length; ++n)
                    "removeListener" !== (i = a[n]) &&
                      this.removeAllListeners(i);
                  return (
                    this.removeAllListeners("removeListener"),
                    (this._events = Object.create(null)),
                    (this._eventsCount = 0),
                    this
                  );
                }
                if ("function" == typeof (t = r[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                  for (n = t.length - 1; n >= 0; n--)
                    this.removeListener(e, t[n]);
                return this;
              }),
              (s.prototype.listeners = function(e) {
                return l(this, e, !0);
              }),
              (s.prototype.rawListeners = function(e) {
                return l(this, e, !1);
              }),
              (s.listenerCount = function(e, t) {
                return "function" == typeof e.listenerCount
                  ? e.listenerCount(t)
                  : p.call(e, t);
              }),
              (s.prototype.listenerCount = p),
              (s.prototype.eventNames = function() {
                return this._eventsCount > 0 ? n(this._events) : [];
              });
          },
          function(e, t, r) {
            ((t = e.exports = r(93)).Stream = t),
              (t.Readable = t),
              (t.Writable = r(58)),
              (t.Duplex = r(16)),
              (t.Transform = r(96)),
              (t.PassThrough = r(173));
          },
          function(e, t, r) {
            var n = r(12),
              i = n.Buffer;
            function a(e, t) {
              for (var r in e) t[r] = e[r];
            }
            function o(e, t, r) {
              return i(e, t, r);
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
              ? (e.exports = n)
              : (a(n, t), (t.Buffer = o)),
              a(i, o),
              (o.from = function(e, t, r) {
                if ("number" == typeof e)
                  throw new TypeError("Argument must not be a number");
                return i(e, t, r);
              }),
              (o.alloc = function(e, t, r) {
                if ("number" != typeof e)
                  throw new TypeError("Argument must be a number");
                var n = i(e);
                return (
                  void 0 !== t
                    ? "string" == typeof r
                      ? n.fill(t, r)
                      : n.fill(t)
                    : n.fill(0),
                  n
                );
              }),
              (o.allocUnsafe = function(e) {
                if ("number" != typeof e)
                  throw new TypeError("Argument must be a number");
                return i(e);
              }),
              (o.allocUnsafeSlow = function(e) {
                if ("number" != typeof e)
                  throw new TypeError("Argument must be a number");
                return n.SlowBuffer(e);
              });
          },
          function(e, t, r) {
            "use strict";
            (function(t, n, i) {
              var a = r(38);
              function o(e) {
                var t = this;
                (this.next = null),
                  (this.entry = null),
                  (this.finish = function() {
                    !(function(e, t, r) {
                      var n = e.entry;
                      for (e.entry = null; n; ) {
                        var i = n.callback;
                        t.pendingcb--, i(void 0), (n = n.next);
                      }
                      t.corkedRequestsFree
                        ? (t.corkedRequestsFree.next = e)
                        : (t.corkedRequestsFree = e);
                    })(t, e);
                  });
              }
              e.exports = g;
              var s,
                f =
                  !t.browser &&
                  ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1
                    ? n
                    : a.nextTick;
              g.WritableState = v;
              var u = r(30);
              u.inherits = r(0);
              var c,
                d = { deprecate: r(172) },
                h = r(94),
                l = r(57).Buffer,
                p = i.Uint8Array || function() {},
                b = r(95);
              function m() {}
              function v(e, t) {
                (s = s || r(16)), (e = e || {});
                var n = t instanceof s;
                (this.objectMode = !!e.objectMode),
                  n &&
                    (this.objectMode =
                      this.objectMode || !!e.writableObjectMode);
                var i = e.highWaterMark,
                  u = e.writableHighWaterMark,
                  c = this.objectMode ? 16 : 16384;
                (this.highWaterMark =
                  i || 0 === i ? i : n && (u || 0 === u) ? u : c),
                  (this.highWaterMark = Math.floor(this.highWaterMark)),
                  (this.finalCalled = !1),
                  (this.needDrain = !1),
                  (this.ending = !1),
                  (this.ended = !1),
                  (this.finished = !1),
                  (this.destroyed = !1);
                var d = !1 === e.decodeStrings;
                (this.decodeStrings = !d),
                  (this.defaultEncoding = e.defaultEncoding || "utf8"),
                  (this.length = 0),
                  (this.writing = !1),
                  (this.corked = 0),
                  (this.sync = !0),
                  (this.bufferProcessing = !1),
                  (this.onwrite = function(e) {
                    !(function(e, t) {
                      var r = e._writableState,
                        n = r.sync,
                        i = r.writecb;
                      if (
                        ((function(e) {
                          (e.writing = !1),
                            (e.writecb = null),
                            (e.length -= e.writelen),
                            (e.writelen = 0);
                        })(r),
                        t)
                      )
                        !(function(e, t, r, n, i) {
                          --t.pendingcb,
                            r
                              ? (a.nextTick(i, n),
                                a.nextTick(S, e, t),
                                (e._writableState.errorEmitted = !0),
                                e.emit("error", n))
                              : (i(n),
                                (e._writableState.errorEmitted = !0),
                                e.emit("error", n),
                                S(e, t));
                        })(e, r, n, t, i);
                      else {
                        var o = E(r);
                        o ||
                          r.corked ||
                          r.bufferProcessing ||
                          !r.bufferedRequest ||
                          w(e, r),
                          n ? f(_, e, r, o, i) : _(e, r, o, i);
                      }
                    })(t, e);
                  }),
                  (this.writecb = null),
                  (this.writelen = 0),
                  (this.bufferedRequest = null),
                  (this.lastBufferedRequest = null),
                  (this.pendingcb = 0),
                  (this.prefinished = !1),
                  (this.errorEmitted = !1),
                  (this.bufferedRequestCount = 0),
                  (this.corkedRequestsFree = new o(this));
              }
              function g(e) {
                if (((s = s || r(16)), !(c.call(g, this) || this instanceof s)))
                  return new g(e);
                (this._writableState = new v(e, this)),
                  (this.writable = !0),
                  e &&
                    ("function" == typeof e.write && (this._write = e.write),
                    "function" == typeof e.writev && (this._writev = e.writev),
                    "function" == typeof e.destroy &&
                      (this._destroy = e.destroy),
                    "function" == typeof e.final && (this._final = e.final)),
                  h.call(this);
              }
              function y(e, t, r, n, i, a, o) {
                (t.writelen = n),
                  (t.writecb = o),
                  (t.writing = !0),
                  (t.sync = !0),
                  r ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite),
                  (t.sync = !1);
              }
              function _(e, t, r, n) {
                r ||
                  (function(e, t) {
                    0 === t.length &&
                      t.needDrain &&
                      ((t.needDrain = !1), e.emit("drain"));
                  })(e, t),
                  t.pendingcb--,
                  n(),
                  S(e, t);
              }
              function w(e, t) {
                t.bufferProcessing = !0;
                var r = t.bufferedRequest;
                if (e._writev && r && r.next) {
                  var n = t.bufferedRequestCount,
                    i = new Array(n),
                    a = t.corkedRequestsFree;
                  a.entry = r;
                  for (var s = 0, f = !0; r; )
                    (i[s] = r), r.isBuf || (f = !1), (r = r.next), (s += 1);
                  (i.allBuffers = f),
                    y(e, t, !0, t.length, i, "", a.finish),
                    t.pendingcb++,
                    (t.lastBufferedRequest = null),
                    a.next
                      ? ((t.corkedRequestsFree = a.next), (a.next = null))
                      : (t.corkedRequestsFree = new o(t)),
                    (t.bufferedRequestCount = 0);
                } else {
                  for (; r; ) {
                    var u = r.chunk,
                      c = r.encoding,
                      d = r.callback;
                    if (
                      (y(e, t, !1, t.objectMode ? 1 : u.length, u, c, d),
                      (r = r.next),
                      t.bufferedRequestCount--,
                      t.writing)
                    )
                      break;
                  }
                  null === r && (t.lastBufferedRequest = null);
                }
                (t.bufferedRequest = r), (t.bufferProcessing = !1);
              }
              function E(e) {
                return (
                  e.ending &&
                  0 === e.length &&
                  null === e.bufferedRequest &&
                  !e.finished &&
                  !e.writing
                );
              }
              function A(e, t) {
                e._final(function(r) {
                  t.pendingcb--,
                    r && e.emit("error", r),
                    (t.prefinished = !0),
                    e.emit("prefinish"),
                    S(e, t);
                });
              }
              function S(e, t) {
                var r = E(t);
                return (
                  r &&
                    ((function(e, t) {
                      t.prefinished ||
                        t.finalCalled ||
                        ("function" == typeof e._final
                          ? (t.pendingcb++,
                            (t.finalCalled = !0),
                            a.nextTick(A, e, t))
                          : ((t.prefinished = !0), e.emit("prefinish")));
                    })(e, t),
                    0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
                  r
                );
              }
              u.inherits(g, h),
                (v.prototype.getBuffer = function() {
                  for (var e = this.bufferedRequest, t = []; e; )
                    t.push(e), (e = e.next);
                  return t;
                }),
                (function() {
                  try {
                    Object.defineProperty(v.prototype, "buffer", {
                      get: d.deprecate(
                        function() {
                          return this.getBuffer();
                        },
                        "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                        "DEP0003"
                      )
                    });
                  } catch (e) {}
                })(),
                "function" == typeof Symbol &&
                Symbol.hasInstance &&
                "function" == typeof Function.prototype[Symbol.hasInstance]
                  ? ((c = Function.prototype[Symbol.hasInstance]),
                    Object.defineProperty(g, Symbol.hasInstance, {
                      value: function(e) {
                        return (
                          !!c.call(this, e) ||
                          (this === g && e && e._writableState instanceof v)
                        );
                      }
                    }))
                  : (c = function(e) {
                      return e instanceof this;
                    }),
                (g.prototype.pipe = function() {
                  this.emit("error", new Error("Cannot pipe, not readable"));
                }),
                (g.prototype.write = function(e, t, r) {
                  var n,
                    i = this._writableState,
                    o = !1,
                    s =
                      !i.objectMode &&
                      ((n = e), l.isBuffer(n) || n instanceof p);
                  return (
                    s &&
                      !l.isBuffer(e) &&
                      (e = (function(e) {
                        return l.from(e);
                      })(e)),
                    "function" == typeof t && ((r = t), (t = null)),
                    s ? (t = "buffer") : t || (t = i.defaultEncoding),
                    "function" != typeof r && (r = m),
                    i.ended
                      ? (function(e, t) {
                          var r = new Error("write after end");
                          e.emit("error", r), a.nextTick(t, r);
                        })(this, r)
                      : (s ||
                          (function(e, t, r, n) {
                            var i = !0,
                              o = !1;
                            return (
                              null === r
                                ? (o = new TypeError(
                                    "May not write null values to stream"
                                  ))
                                : "string" == typeof r ||
                                  void 0 === r ||
                                  t.objectMode ||
                                  (o = new TypeError(
                                    "Invalid non-string/buffer chunk"
                                  )),
                              o &&
                                (e.emit("error", o),
                                a.nextTick(n, o),
                                (i = !1)),
                              i
                            );
                          })(this, i, e, r)) &&
                        (i.pendingcb++,
                        (o = (function(e, t, r, n, i, a) {
                          if (!r) {
                            var o = (function(e, t, r) {
                              return (
                                e.objectMode ||
                                  !1 === e.decodeStrings ||
                                  "string" != typeof t ||
                                  (t = l.from(t, r)),
                                t
                              );
                            })(t, n, i);
                            n !== o && ((r = !0), (i = "buffer"), (n = o));
                          }
                          var s = t.objectMode ? 1 : n.length;
                          t.length += s;
                          var f = t.length < t.highWaterMark;
                          if (
                            (f || (t.needDrain = !0), t.writing || t.corked)
                          ) {
                            var u = t.lastBufferedRequest;
                            (t.lastBufferedRequest = {
                              chunk: n,
                              encoding: i,
                              isBuf: r,
                              callback: a,
                              next: null
                            }),
                              u
                                ? (u.next = t.lastBufferedRequest)
                                : (t.bufferedRequest = t.lastBufferedRequest),
                              (t.bufferedRequestCount += 1);
                          } else y(e, t, !1, s, n, i, a);
                          return f;
                        })(this, i, s, e, t, r))),
                    o
                  );
                }),
                (g.prototype.cork = function() {
                  this._writableState.corked++;
                }),
                (g.prototype.uncork = function() {
                  var e = this._writableState;
                  e.corked &&
                    (e.corked--,
                    e.writing ||
                      e.corked ||
                      e.finished ||
                      e.bufferProcessing ||
                      !e.bufferedRequest ||
                      w(this, e));
                }),
                (g.prototype.setDefaultEncoding = function(e) {
                  if (
                    ("string" == typeof e && (e = e.toLowerCase()),
                    !(
                      [
                        "hex",
                        "utf8",
                        "utf-8",
                        "ascii",
                        "binary",
                        "base64",
                        "ucs2",
                        "ucs-2",
                        "utf16le",
                        "utf-16le",
                        "raw"
                      ].indexOf((e + "").toLowerCase()) > -1
                    ))
                  )
                    throw new TypeError("Unknown encoding: " + e);
                  return (this._writableState.defaultEncoding = e), this;
                }),
                Object.defineProperty(g.prototype, "writableHighWaterMark", {
                  enumerable: !1,
                  get: function() {
                    return this._writableState.highWaterMark;
                  }
                }),
                (g.prototype._write = function(e, t, r) {
                  r(new Error("_write() is not implemented"));
                }),
                (g.prototype._writev = null),
                (g.prototype.end = function(e, t, r) {
                  var n = this._writableState;
                  "function" == typeof e
                    ? ((r = e), (e = null), (t = null))
                    : "function" == typeof t && ((r = t), (t = null)),
                    null != e && this.write(e, t),
                    n.corked && ((n.corked = 1), this.uncork()),
                    n.ending ||
                      n.finished ||
                      (function(e, t, r) {
                        (t.ending = !0),
                          S(e, t),
                          r &&
                            (t.finished ? a.nextTick(r) : e.once("finish", r)),
                          (t.ended = !0),
                          (e.writable = !1);
                      })(this, n, r);
                }),
                Object.defineProperty(g.prototype, "destroyed", {
                  get: function() {
                    return (
                      void 0 !== this._writableState &&
                      this._writableState.destroyed
                    );
                  },
                  set: function(e) {
                    this._writableState && (this._writableState.destroyed = e);
                  }
                }),
                (g.prototype.destroy = b.destroy),
                (g.prototype._undestroy = b.undestroy),
                (g.prototype._destroy = function(e, t) {
                  this.end(), t(e);
                });
            }.call(this, r(37), r(170).setImmediate, r(21)));
          },
          function(e, t, r) {
            "use strict";
            var n = r(2).Buffer,
              i =
                n.isEncoding ||
                function(e) {
                  switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                      return !0;
                    default:
                      return !1;
                  }
                };
            function a(e) {
              var t;
              switch (
                ((this.encoding = (function(e) {
                  var t = (function(e) {
                    if (!e) return "utf8";
                    for (var t; ; )
                      switch (e) {
                        case "utf8":
                        case "utf-8":
                          return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                          return "utf16le";
                        case "latin1":
                        case "binary":
                          return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                          return e;
                        default:
                          if (t) return;
                          (e = ("" + e).toLowerCase()), (t = !0);
                      }
                  })(e);
                  if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                    throw new Error("Unknown encoding: " + e);
                  return t || e;
                })(e)),
                this.encoding)
              ) {
                case "utf16le":
                  (this.text = f), (this.end = u), (t = 4);
                  break;
                case "utf8":
                  (this.fillLast = s), (t = 4);
                  break;
                case "base64":
                  (this.text = c), (this.end = d), (t = 3);
                  break;
                default:
                  return (this.write = h), void (this.end = l);
              }
              (this.lastNeed = 0),
                (this.lastTotal = 0),
                (this.lastChar = n.allocUnsafe(t));
            }
            function o(e) {
              return e <= 127
                ? 0
                : e >> 5 == 6
                ? 2
                : e >> 4 == 14
                ? 3
                : e >> 3 == 30
                ? 4
                : e >> 6 == 2
                ? -1
                : -2;
            }
            function s(e) {
              var t = this.lastTotal - this.lastNeed,
                r = (function(e, t, r) {
                  if (128 != (192 & t[0])) return (e.lastNeed = 0), "\ufffd";
                  if (e.lastNeed > 1 && t.length > 1) {
                    if (128 != (192 & t[1])) return (e.lastNeed = 1), "\ufffd";
                    if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                      return (e.lastNeed = 2), "\ufffd";
                  }
                })(this, e);
              return void 0 !== r
                ? r
                : this.lastNeed <= e.length
                ? (e.copy(this.lastChar, t, 0, this.lastNeed),
                  this.lastChar.toString(this.encoding, 0, this.lastTotal))
                : (e.copy(this.lastChar, t, 0, e.length),
                  void (this.lastNeed -= e.length));
            }
            function f(e, t) {
              if ((e.length - t) % 2 == 0) {
                var r = e.toString("utf16le", t);
                if (r) {
                  var n = r.charCodeAt(r.length - 1);
                  if (n >= 55296 && n <= 56319)
                    return (
                      (this.lastNeed = 2),
                      (this.lastTotal = 4),
                      (this.lastChar[0] = e[e.length - 2]),
                      (this.lastChar[1] = e[e.length - 1]),
                      r.slice(0, -1)
                    );
                }
                return r;
              }
              return (
                (this.lastNeed = 1),
                (this.lastTotal = 2),
                (this.lastChar[0] = e[e.length - 1]),
                e.toString("utf16le", t, e.length - 1)
              );
            }
            function u(e) {
              var t = e && e.length ? this.write(e) : "";
              if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, r);
              }
              return t;
            }
            function c(e, t) {
              var r = (e.length - t) % 3;
              return 0 === r
                ? e.toString("base64", t)
                : ((this.lastNeed = 3 - r),
                  (this.lastTotal = 3),
                  1 === r
                    ? (this.lastChar[0] = e[e.length - 1])
                    : ((this.lastChar[0] = e[e.length - 2]),
                      (this.lastChar[1] = e[e.length - 1])),
                  e.toString("base64", t, e.length - r));
            }
            function d(e) {
              var t = e && e.length ? this.write(e) : "";
              return this.lastNeed
                ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
                : t;
            }
            function h(e) {
              return e.toString(this.encoding);
            }
            function l(e) {
              return e && e.length ? this.write(e) : "";
            }
            (t.StringDecoder = a),
              (a.prototype.write = function(e) {
                if (0 === e.length) return "";
                var t, r;
                if (this.lastNeed) {
                  if (void 0 === (t = this.fillLast(e))) return "";
                  (r = this.lastNeed), (this.lastNeed = 0);
                } else r = 0;
                return r < e.length
                  ? t
                    ? t + this.text(e, r)
                    : this.text(e, r)
                  : t || "";
              }),
              (a.prototype.end = function(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + "\ufffd" : t;
              }),
              (a.prototype.text = function(e, t) {
                var r = (function(e, t, r) {
                  var n = t.length - 1;
                  if (n < r) return 0;
                  var i = o(t[n]);
                  return i >= 0
                    ? (i > 0 && (e.lastNeed = i - 1), i)
                    : --n < r || -2 === i
                    ? 0
                    : (i = o(t[n])) >= 0
                    ? (i > 0 && (e.lastNeed = i - 2), i)
                    : --n < r || -2 === i
                    ? 0
                    : (i = o(t[n])) >= 0
                    ? (i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i)
                    : 0;
                })(this, e, t);
                if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = r;
                var n = e.length - (r - this.lastNeed);
                return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
              }),
              (a.prototype.fillLast = function(e) {
                if (this.lastNeed <= e.length)
                  return (
                    e.copy(
                      this.lastChar,
                      this.lastTotal - this.lastNeed,
                      0,
                      this.lastNeed
                    ),
                    this.lastChar.toString(this.encoding, 0, this.lastTotal)
                  );
                e.copy(
                  this.lastChar,
                  this.lastTotal - this.lastNeed,
                  0,
                  e.length
                ),
                  (this.lastNeed -= e.length);
              });
          },
          function(e, t, r) {
            "use strict";
            var n,
              i = t,
              a = r(61),
              o = r(103),
              s = r(5).assert;
            function f(e) {
              "short" === e.type
                ? (this.curve = new o.short(e))
                : "edwards" === e.type
                ? (this.curve = new o.edwards(e))
                : (this.curve = new o.mont(e)),
                (this.g = this.curve.g),
                (this.n = this.curve.n),
                (this.hash = e.hash),
                s(this.g.validate(), "Invalid curve"),
                s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
            }
            function u(e, t) {
              Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                  var r = new f(t);
                  return (
                    Object.defineProperty(i, e, {
                      configurable: !0,
                      enumerable: !0,
                      value: r
                    }),
                    r
                  );
                }
              });
            }
            (i.PresetCurve = f),
              u("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: a.sha256,
                gRed: !1,
                g: [
                  "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                  "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
                ]
              }),
              u("p224", {
                type: "short",
                prime: "p224",
                p:
                  "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a:
                  "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b:
                  "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n:
                  "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: a.sha256,
                gRed: !1,
                g: [
                  "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                  "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
                ]
              }),
              u("p256", {
                type: "short",
                prime: null,
                p:
                  "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a:
                  "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b:
                  "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n:
                  "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: a.sha256,
                gRed: !1,
                g: [
                  "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                  "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
                ]
              }),
              u("p384", {
                type: "short",
                prime: null,
                p:
                  "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a:
                  "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b:
                  "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n:
                  "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: a.sha384,
                gRed: !1,
                g: [
                  "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                  "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
                ]
              }),
              u("p521", {
                type: "short",
                prime: null,
                p:
                  "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a:
                  "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b:
                  "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n:
                  "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: a.sha512,
                gRed: !1,
                g: [
                  "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                  "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
                ]
              }),
              u("curve25519", {
                type: "mont",
                prime: "p25519",
                p:
                  "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n:
                  "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: a.sha256,
                gRed: !1,
                g: ["9"]
              }),
              u("ed25519", {
                type: "edwards",
                prime: "p25519",
                p:
                  "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d:
                  "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n:
                  "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: a.sha256,
                gRed: !1,
                g: [
                  "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                  "6666666666666666666666666666666666666666666666666666666666666658"
                ]
              });
            try {
              n = r(214);
            } catch (e) {
              n = void 0;
            }
            u("secp256k1", {
              type: "short",
              prime: "k256",
              p:
                "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
              a: "0",
              b: "7",
              n:
                "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
              h: "1",
              hash: a.sha256,
              beta:
                "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
              lambda:
                "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
              basis: [
                {
                  a: "3086d221a7d46bcde86c90e49284eb15",
                  b: "-e4437ed6010e88286f547fa90abfe4c3"
                },
                {
                  a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                  b: "3086d221a7d46bcde86c90e49284eb15"
                }
              ],
              gRed: !1,
              g: [
                "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
                "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
                n
              ]
            });
          },
          function(e, t, r) {
            var n = t;
            (n.utils = r(7)),
              (n.common = r(31)),
              (n.sha = r(208)),
              (n.ripemd = r(212)),
              (n.hmac = r(213)),
              (n.sha1 = n.sha.sha1),
              (n.sha256 = n.sha.sha256),
              (n.sha224 = n.sha.sha224),
              (n.sha384 = n.sha.sha384),
              (n.sha512 = n.sha.sha512),
              (n.ripemd160 = n.ripemd.ripemd160);
          },
          function(e, t, r) {
            e.exports = { default: r(110), __esModule: !0 };
          },
          function(e, t, r) {
            e.exports =
              !r(11) &&
              !r(18)(function() {
                return (
                  7 !=
                  Object.defineProperty(r(40)("div"), "a", {
                    get: function() {
                      return 7;
                    }
                  }).a
                );
              });
          },
          function(e, t, r) {
            var n = r(15),
              i = r(19),
              a = r(113)(!1),
              o = r(45)("IE_PROTO");
            e.exports = function(e, t) {
              var r,
                s = i(e),
                f = 0,
                u = [];
              for (r in s) r != o && n(s, r) && u.push(r);
              for (; t.length > f; )
                n(s, (r = t[f++])) && (~a(u, r) || u.push(r));
              return u;
            };
          },
          function(e, t, r) {
            var n = r(26);
            e.exports = Object("z").propertyIsEnumerable(0)
              ? Object
              : function(e) {
                  return "String" == n(e) ? e.split("") : Object(e);
                };
          },
          function(e, t, r) {
            e.exports = r(115);
          },
          function(e, t, r) {
            e.exports = { default: r(117), __esModule: !0 };
          },
          function(e, t, r) {
            "use strict";
            var n = r(27),
              i = r(8),
              a = r(69),
              o = r(13),
              s = r(20),
              f = r(126),
              u = r(36),
              c = r(128),
              d = r(4)("iterator"),
              h = !([].keys && "next" in [].keys()),
              l = function() {
                return this;
              };
            e.exports = function(e, t, r, p, b, m, v) {
              f(r, t, p);
              var g,
                y,
                _,
                w = function(e) {
                  if (!h && e in M) return M[e];
                  switch (e) {
                    case "keys":
                    case "values":
                      return function() {
                        return new r(this, e);
                      };
                  }
                  return function() {
                    return new r(this, e);
                  };
                },
                E = t + " Iterator",
                A = "values" == b,
                S = !1,
                M = e.prototype,
                I = M[d] || M["@@iterator"] || (b && M[b]),
                x = I || w(b),
                T = b ? (A ? w("entries") : x) : void 0,
                L = ("Array" == t && M.entries) || I;
              if (
                (L &&
                  (_ = c(L.call(new e()))) !== Object.prototype &&
                  _.next &&
                  (u(_, E, !0), n || "function" == typeof _[d] || o(_, d, l)),
                A &&
                  I &&
                  "values" !== I.name &&
                  ((S = !0),
                  (x = function() {
                    return I.call(this);
                  })),
                (n && !v) || (!h && !S && M[d]) || o(M, d, x),
                (s[t] = x),
                (s[E] = l),
                b)
              )
                if (
                  ((g = {
                    values: A ? x : w("values"),
                    keys: m ? x : w("keys"),
                    entries: T
                  }),
                  v)
                )
                  for (y in g) y in M || a(M, y, g[y]);
                else i(i.P + i.F * (h || S), t, g);
              return g;
            };
          },
          function(e, t, r) {
            e.exports = r(13);
          },
          function(e, t, r) {
            var n = r(10),
              i = r(127),
              a = r(47),
              o = r(45)("IE_PROTO"),
              s = function() {},
              f = function() {
                var e,
                  t = r(40)("iframe"),
                  n = a.length;
                for (
                  t.style.display = "none",
                    r(71).appendChild(t),
                    t.src = "javascript:",
                    (e = t.contentWindow.document).open(),
                    e.write("<script>document.F=Object</script>"),
                    e.close(),
                    f = e.F;
                  n--;

                )
                  delete f.prototype[a[n]];
                return f();
              };
            e.exports =
              Object.create ||
              function(e, t) {
                var r;
                return (
                  null !== e
                    ? ((s.prototype = n(e)),
                      (r = new s()),
                      (s.prototype = null),
                      (r[o] = e))
                    : (r = f()),
                  void 0 === t ? r : i(r, t)
                );
              };
          },
          function(e, t, r) {
            var n = r(3).document;
            e.exports = n && n.documentElement;
          },
          function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n,
              i = (n = r(62)) && n.__esModule ? n : { default: n };
            t.default =
              i.default ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              };
          },
          function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n,
              i = (n = r(74)) && n.__esModule ? n : { default: n };
            t.default = function(e) {
              return function() {
                var t = e.apply(this, arguments);
                return new i.default(function(e, r) {
                  return (function n(a, o) {
                    try {
                      var s = t[a](o),
                        f = s.value;
                    } catch (e) {
                      return void r(e);
                    }
                    if (!s.done)
                      return i.default.resolve(f).then(
                        function(e) {
                          n("next", e);
                        },
                        function(e) {
                          n("throw", e);
                        }
                      );
                    e(f);
                  })("next");
                });
              };
            };
          },
          function(e, t, r) {
            e.exports = { default: r(134), __esModule: !0 };
          },
          function(e, t) {},
          function(e, t, r) {
            var n = r(10);
            e.exports = function(e, t, r, i) {
              try {
                return i ? t(n(r)[0], r[1]) : t(r);
              } catch (t) {
                var a = e.return;
                throw (void 0 !== a && n(a.call(e)), t);
              }
            };
          },
          function(e, t, r) {
            var n = r(20),
              i = r(4)("iterator"),
              a = Array.prototype;
            e.exports = function(e) {
              return void 0 !== e && (n.Array === e || a[i] === e);
            };
          },
          function(e, t, r) {
            var n = r(10),
              i = r(32),
              a = r(4)("species");
            e.exports = function(e, t) {
              var r,
                o = n(e).constructor;
              return void 0 === o || null == (r = n(o)[a]) ? t : i(r);
            };
          },
          function(e, t, r) {
            var n,
              i,
              a,
              o = r(23),
              s = r(138),
              f = r(71),
              u = r(40),
              c = r(3),
              d = c.process,
              h = c.setImmediate,
              l = c.clearImmediate,
              p = c.MessageChannel,
              b = c.Dispatch,
              m = 0,
              v = {},
              g = function() {
                var e = +this;
                if (v.hasOwnProperty(e)) {
                  var t = v[e];
                  delete v[e], t();
                }
              },
              y = function(e) {
                g.call(e.data);
              };
            (h && l) ||
              ((h = function(e) {
                for (var t = [], r = 1; arguments.length > r; )
                  t.push(arguments[r++]);
                return (
                  (v[++m] = function() {
                    s("function" == typeof e ? e : Function(e), t);
                  }),
                  n(m),
                  m
                );
              }),
              (l = function(e) {
                delete v[e];
              }),
              "process" == r(26)(d)
                ? (n = function(e) {
                    d.nextTick(o(g, e, 1));
                  })
                : b && b.now
                ? (n = function(e) {
                    b.now(o(g, e, 1));
                  })
                : p
                ? ((a = (i = new p()).port2),
                  (i.port1.onmessage = y),
                  (n = o(a.postMessage, a, 1)))
                : c.addEventListener &&
                  "function" == typeof postMessage &&
                  !c.importScripts
                ? ((n = function(e) {
                    c.postMessage(e + "", "*");
                  }),
                  c.addEventListener("message", y, !1))
                : (n =
                    "onreadystatechange" in u("script")
                      ? function(e) {
                          f.appendChild(
                            u("script")
                          ).onreadystatechange = function() {
                            f.removeChild(this), g.call(e);
                          };
                        }
                      : function(e) {
                          setTimeout(o(g, e, 1), 0);
                        })),
              (e.exports = { set: h, clear: l });
          },
          function(e, t) {
            e.exports = function(e) {
              try {
                return { e: !1, v: e() };
              } catch (e) {
                return { e: !0, v: e };
              }
            };
          },
          function(e, t, r) {
            var n = r(10),
              i = r(14),
              a = r(51);
            e.exports = function(e, t) {
              if ((n(e), i(t) && t.constructor === e)) return t;
              var r = a.f(e);
              return (0, r.resolve)(t), r.promise;
            };
          },
          function(e, t, r) {
            var n = r(4)("iterator"),
              i = !1;
            try {
              var a = [7][n]();
              (a.return = function() {
                i = !0;
              }),
                Array.from(a, function() {
                  throw 2;
                });
            } catch (e) {}
            e.exports = function(e, t) {
              if (!t && !i) return !1;
              var r = !1;
              try {
                var a = [7],
                  o = a[n]();
                (o.next = function() {
                  return { done: (r = !0) };
                }),
                  (a[n] = function() {
                    return o;
                  }),
                  e(a);
              } catch (e) {}
              return r;
            };
          },
          function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = o(r(145)),
              i = o(r(147)),
              a =
                "function" == typeof i.default && "symbol" == typeof n.default
                  ? function(e) {
                      return typeof e;
                    }
                  : function(e) {
                      return e &&
                        "function" == typeof i.default &&
                        e.constructor === i.default &&
                        e !== i.default.prototype
                        ? "symbol"
                        : typeof e;
                    };
            function o(e) {
              return e && e.__esModule ? e : { default: e };
            }
            t.default =
              "function" == typeof i.default && "symbol" === a(n.default)
                ? function(e) {
                    return void 0 === e ? "undefined" : a(e);
                  }
                : function(e) {
                    return e &&
                      "function" == typeof i.default &&
                      e.constructor === i.default &&
                      e !== i.default.prototype
                      ? "symbol"
                      : void 0 === e
                      ? "undefined"
                      : a(e);
                  };
          },
          function(e, t, r) {
            var n = r(64),
              i = r(47).concat("length", "prototype");
            t.f =
              Object.getOwnPropertyNames ||
              function(e) {
                return n(e, i);
              };
          },
          function(e, t, r) {
            "use strict";
            (t.__esModule = !0),
              (t.default = function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              });
          },
          function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n,
              i = (n = r(87)) && n.__esModule ? n : { default: n };
            t.default = (function() {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    (0, i.default)(e, n.key, n);
                }
              }
              return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
              };
            })();
          },
          function(e, t, r) {
            e.exports = { default: r(157), __esModule: !0 };
          },
          function(e, t, r) {
            e.exports = { default: r(160), __esModule: !0 };
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n,
              i = (n = r(162)) && n.__esModule ? n : { default: n },
              a = r(99);
            (t.default = {
              getChash160: function(e) {
                var t =
                  Array.isArray(e) &&
                  2 === e.length &&
                  "autonomous agent" === e[0]
                    ? (0, a.getJsonSourceString)(e)
                    : (0, a.getSourceString)(e);
                return (0, a.chashGetChash160)(t);
              },
              toWif: function(e, t) {
                var r = t ? 239 : 128;
                return i.default.encode(r, e, !1);
              },
              fromWif: function(e, t) {
                var r = t ? 239 : 128;
                return i.default.decode(e, r);
              },
              isValidAddress: function(e) {
                return (
                  "string" == typeof e &&
                  e === e.toUpperCase() &&
                  32 === e.length &&
                  (0, a.isChashValid)(e)
                );
              }
            }),
              (e.exports = t.default);
          },
          function(e, t) {
            var r = {}.toString;
            e.exports =
              Array.isArray ||
              function(e) {
                return "[object Array]" == r.call(e);
              };
          },
          function(e, t, r) {
            "use strict";
            var n = r(2).Buffer,
              i = r(92).Transform;
            function a(e) {
              i.call(this),
                (this._block = n.allocUnsafe(e)),
                (this._blockSize = e),
                (this._blockOffset = 0),
                (this._length = [0, 0, 0, 0]),
                (this._finalized = !1);
            }
            r(0)(a, i),
              (a.prototype._transform = function(e, t, r) {
                var n = null;
                try {
                  this.update(e, t);
                } catch (e) {
                  n = e;
                }
                r(n);
              }),
              (a.prototype._flush = function(e) {
                var t = null;
                try {
                  this.push(this.digest());
                } catch (e) {
                  t = e;
                }
                e(t);
              }),
              (a.prototype.update = function(e, t) {
                if (
                  ((function(e, t) {
                    if (!n.isBuffer(e) && "string" != typeof e)
                      throw new TypeError("Data must be a string or a buffer");
                  })(e),
                  this._finalized)
                )
                  throw new Error("Digest already called");
                n.isBuffer(e) || (e = n.from(e, t));
                for (
                  var r = this._block, i = 0;
                  this._blockOffset + e.length - i >= this._blockSize;

                ) {
                  for (var a = this._blockOffset; a < this._blockSize; )
                    r[a++] = e[i++];
                  this._update(), (this._blockOffset = 0);
                }
                for (; i < e.length; ) r[this._blockOffset++] = e[i++];
                for (var o = 0, s = 8 * e.length; s > 0; ++o)
                  (this._length[o] += s),
                    (s = (this._length[o] / 4294967296) | 0) > 0 &&
                      (this._length[o] -= 4294967296 * s);
                return this;
              }),
              (a.prototype._update = function() {
                throw new Error("_update is not implemented");
              }),
              (a.prototype.digest = function(e) {
                if (this._finalized) throw new Error("Digest already called");
                this._finalized = !0;
                var t = this._digest();
                void 0 !== e && (t = t.toString(e)),
                  this._block.fill(0),
                  (this._blockOffset = 0);
                for (var r = 0; r < 4; ++r) this._length[r] = 0;
                return t;
              }),
              (a.prototype._digest = function() {
                throw new Error("_digest is not implemented");
              }),
              (e.exports = a);
          },
          function(e, t, r) {
            e.exports = i;
            var n = r(55).EventEmitter;
            function i() {
              n.call(this);
            }
            r(0)(i, n),
              (i.Readable = r(56)),
              (i.Writable = r(174)),
              (i.Duplex = r(175)),
              (i.Transform = r(176)),
              (i.PassThrough = r(177)),
              (i.Stream = i),
              (i.prototype.pipe = function(e, t) {
                var r = this;
                function i(t) {
                  e.writable && !1 === e.write(t) && r.pause && r.pause();
                }
                function a() {
                  r.readable && r.resume && r.resume();
                }
                r.on("data", i),
                  e.on("drain", a),
                  e._isStdio ||
                    (t && !1 === t.end) ||
                    (r.on("end", s), r.on("close", f));
                var o = !1;
                function s() {
                  o || ((o = !0), e.end());
                }
                function f() {
                  o ||
                    ((o = !0), "function" == typeof e.destroy && e.destroy());
                }
                function u(e) {
                  if ((c(), 0 === n.listenerCount(this, "error"))) throw e;
                }
                function c() {
                  r.removeListener("data", i),
                    e.removeListener("drain", a),
                    r.removeListener("end", s),
                    r.removeListener("close", f),
                    r.removeListener("error", u),
                    e.removeListener("error", u),
                    r.removeListener("end", c),
                    r.removeListener("close", c),
                    e.removeListener("close", c);
                }
                return (
                  r.on("error", u),
                  e.on("error", u),
                  r.on("end", c),
                  r.on("close", c),
                  e.on("close", c),
                  e.emit("pipe", r),
                  e
                );
              });
          },
          function(e, t, r) {
            "use strict";
            (function(t, n) {
              var i = r(38);
              e.exports = y;
              var a,
                o = r(90);
              (y.ReadableState = g), r(55).EventEmitter;
              var s = function(e, t) {
                  return e.listeners(t).length;
                },
                f = r(94),
                u = r(57).Buffer,
                c = t.Uint8Array || function() {},
                d = r(30);
              d.inherits = r(0);
              var h = r(167),
                l = void 0;
              l = h && h.debuglog ? h.debuglog("stream") : function() {};
              var p,
                b = r(168),
                m = r(95);
              d.inherits(y, f);
              var v = ["error", "close", "destroy", "pause", "resume"];
              function g(e, t) {
                e = e || {};
                var n = t instanceof (a = a || r(16));
                (this.objectMode = !!e.objectMode),
                  n &&
                    (this.objectMode =
                      this.objectMode || !!e.readableObjectMode);
                var i = e.highWaterMark,
                  o = e.readableHighWaterMark,
                  s = this.objectMode ? 16 : 16384;
                (this.highWaterMark =
                  i || 0 === i ? i : n && (o || 0 === o) ? o : s),
                  (this.highWaterMark = Math.floor(this.highWaterMark)),
                  (this.buffer = new b()),
                  (this.length = 0),
                  (this.pipes = null),
                  (this.pipesCount = 0),
                  (this.flowing = null),
                  (this.ended = !1),
                  (this.endEmitted = !1),
                  (this.reading = !1),
                  (this.sync = !0),
                  (this.needReadable = !1),
                  (this.emittedReadable = !1),
                  (this.readableListening = !1),
                  (this.resumeScheduled = !1),
                  (this.destroyed = !1),
                  (this.defaultEncoding = e.defaultEncoding || "utf8"),
                  (this.awaitDrain = 0),
                  (this.readingMore = !1),
                  (this.decoder = null),
                  (this.encoding = null),
                  e.encoding &&
                    (p || (p = r(59).StringDecoder),
                    (this.decoder = new p(e.encoding)),
                    (this.encoding = e.encoding));
              }
              function y(e) {
                if (((a = a || r(16)), !(this instanceof y))) return new y(e);
                (this._readableState = new g(e, this)),
                  (this.readable = !0),
                  e &&
                    ("function" == typeof e.read && (this._read = e.read),
                    "function" == typeof e.destroy &&
                      (this._destroy = e.destroy)),
                  f.call(this);
              }
              function _(e, t, r, n, i) {
                var a,
                  o = e._readableState;
                return (
                  null === t
                    ? ((o.reading = !1),
                      (function(e, t) {
                        if (!t.ended) {
                          if (t.decoder) {
                            var r = t.decoder.end();
                            r &&
                              r.length &&
                              (t.buffer.push(r),
                              (t.length += t.objectMode ? 1 : r.length));
                          }
                          (t.ended = !0), S(e);
                        }
                      })(e, o))
                    : (i ||
                        (a = (function(e, t) {
                          var r, n;
                          return (
                            (n = t),
                            u.isBuffer(n) ||
                              n instanceof c ||
                              "string" == typeof t ||
                              void 0 === t ||
                              e.objectMode ||
                              (r = new TypeError(
                                "Invalid non-string/buffer chunk"
                              )),
                            r
                          );
                        })(o, t)),
                      a
                        ? e.emit("error", a)
                        : o.objectMode || (t && t.length > 0)
                        ? ("string" == typeof t ||
                            o.objectMode ||
                            Object.getPrototypeOf(t) === u.prototype ||
                            (t = (function(e) {
                              return u.from(e);
                            })(t)),
                          n
                            ? o.endEmitted
                              ? e.emit(
                                  "error",
                                  new Error("stream.unshift() after end event")
                                )
                              : w(e, o, t, !0)
                            : o.ended
                            ? e.emit(
                                "error",
                                new Error("stream.push() after EOF")
                              )
                            : ((o.reading = !1),
                              o.decoder && !r
                                ? ((t = o.decoder.write(t)),
                                  o.objectMode || 0 !== t.length
                                    ? w(e, o, t, !1)
                                    : I(e, o))
                                : w(e, o, t, !1)))
                        : n || (o.reading = !1)),
                  (function(e) {
                    return (
                      !e.ended &&
                      (e.needReadable ||
                        e.length < e.highWaterMark ||
                        0 === e.length)
                    );
                  })(o)
                );
              }
              function w(e, t, r, n) {
                t.flowing && 0 === t.length && !t.sync
                  ? (e.emit("data", r), e.read(0))
                  : ((t.length += t.objectMode ? 1 : r.length),
                    n ? t.buffer.unshift(r) : t.buffer.push(r),
                    t.needReadable && S(e)),
                  I(e, t);
              }
              Object.defineProperty(y.prototype, "destroyed", {
                get: function() {
                  return (
                    void 0 !== this._readableState &&
                    this._readableState.destroyed
                  );
                },
                set: function(e) {
                  this._readableState && (this._readableState.destroyed = e);
                }
              }),
                (y.prototype.destroy = m.destroy),
                (y.prototype._undestroy = m.undestroy),
                (y.prototype._destroy = function(e, t) {
                  this.push(null), t(e);
                }),
                (y.prototype.push = function(e, t) {
                  var r,
                    n = this._readableState;
                  return (
                    n.objectMode
                      ? (r = !0)
                      : "string" == typeof e &&
                        ((t = t || n.defaultEncoding) !== n.encoding &&
                          ((e = u.from(e, t)), (t = "")),
                        (r = !0)),
                    _(this, e, t, !1, r)
                  );
                }),
                (y.prototype.unshift = function(e) {
                  return _(this, e, null, !0, !1);
                }),
                (y.prototype.isPaused = function() {
                  return !1 === this._readableState.flowing;
                }),
                (y.prototype.setEncoding = function(e) {
                  return (
                    p || (p = r(59).StringDecoder),
                    (this._readableState.decoder = new p(e)),
                    (this._readableState.encoding = e),
                    this
                  );
                });
              var E = 8388608;
              function A(e, t) {
                return e <= 0 || (0 === t.length && t.ended)
                  ? 0
                  : t.objectMode
                  ? 1
                  : e != e
                  ? t.flowing && t.length
                    ? t.buffer.head.data.length
                    : t.length
                  : (e > t.highWaterMark &&
                      (t.highWaterMark = (function(e) {
                        return (
                          e >= E
                            ? (e = E)
                            : (e--,
                              (e |= e >>> 1),
                              (e |= e >>> 2),
                              (e |= e >>> 4),
                              (e |= e >>> 8),
                              (e |= e >>> 16),
                              e++),
                          e
                        );
                      })(e)),
                    e <= t.length
                      ? e
                      : t.ended
                      ? t.length
                      : ((t.needReadable = !0), 0));
              }
              function S(e) {
                var t = e._readableState;
                (t.needReadable = !1),
                  t.emittedReadable ||
                    (l("emitReadable", t.flowing),
                    (t.emittedReadable = !0),
                    t.sync ? i.nextTick(M, e) : M(e));
              }
              function M(e) {
                l("emit readable"), e.emit("readable"), R(e);
              }
              function I(e, t) {
                t.readingMore || ((t.readingMore = !0), i.nextTick(x, e, t));
              }
              function x(e, t) {
                for (
                  var r = t.length;
                  !t.reading &&
                  !t.flowing &&
                  !t.ended &&
                  t.length < t.highWaterMark &&
                  (l("maybeReadMore read 0"), e.read(0), r !== t.length);

                )
                  r = t.length;
                t.readingMore = !1;
              }
              function T(e) {
                l("readable nexttick read 0"), e.read(0);
              }
              function L(e, t) {
                t.reading || (l("resume read 0"), e.read(0)),
                  (t.resumeScheduled = !1),
                  (t.awaitDrain = 0),
                  e.emit("resume"),
                  R(e),
                  t.flowing && !t.reading && e.read(0);
              }
              function R(e) {
                var t = e._readableState;
                for (l("flow", t.flowing); t.flowing && null !== e.read(); );
              }
              function P(e, t) {
                return 0 === t.length
                  ? null
                  : (t.objectMode
                      ? (r = t.buffer.shift())
                      : !e || e >= t.length
                      ? ((r = t.decoder
                          ? t.buffer.join("")
                          : 1 === t.buffer.length
                          ? t.buffer.head.data
                          : t.buffer.concat(t.length)),
                        t.buffer.clear())
                      : (r = (function(e, t, r) {
                          var n;
                          return (
                            e < t.head.data.length
                              ? ((n = t.head.data.slice(0, e)),
                                (t.head.data = t.head.data.slice(e)))
                              : (n =
                                  e === t.head.data.length
                                    ? t.shift()
                                    : r
                                    ? (function(e, t) {
                                        var r = t.head,
                                          n = 1,
                                          i = r.data;
                                        for (e -= i.length; (r = r.next); ) {
                                          var a = r.data,
                                            o = e > a.length ? a.length : e;
                                          if (
                                            (o === a.length
                                              ? (i += a)
                                              : (i += a.slice(0, e)),
                                            0 === (e -= o))
                                          ) {
                                            o === a.length
                                              ? (++n,
                                                r.next
                                                  ? (t.head = r.next)
                                                  : (t.head = t.tail = null))
                                              : ((t.head = r),
                                                (r.data = a.slice(o)));
                                            break;
                                          }
                                          ++n;
                                        }
                                        return (t.length -= n), i;
                                      })(e, t)
                                    : (function(e, t) {
                                        var r = u.allocUnsafe(e),
                                          n = t.head,
                                          i = 1;
                                        for (
                                          n.data.copy(r), e -= n.data.length;
                                          (n = n.next);

                                        ) {
                                          var a = n.data,
                                            o = e > a.length ? a.length : e;
                                          if (
                                            (a.copy(r, r.length - e, 0, o),
                                            0 === (e -= o))
                                          ) {
                                            o === a.length
                                              ? (++i,
                                                n.next
                                                  ? (t.head = n.next)
                                                  : (t.head = t.tail = null))
                                              : ((t.head = n),
                                                (n.data = a.slice(o)));
                                            break;
                                          }
                                          ++i;
                                        }
                                        return (t.length -= i), r;
                                      })(e, t)),
                            n
                          );
                        })(e, t.buffer, t.decoder)),
                    r);
                var r;
              }
              function k(e) {
                var t = e._readableState;
                if (t.length > 0)
                  throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || ((t.ended = !0), i.nextTick(N, t, e));
              }
              function N(e, t) {
                e.endEmitted ||
                  0 !== e.length ||
                  ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
              }
              function O(e, t) {
                for (var r = 0, n = e.length; r < n; r++)
                  if (e[r] === t) return r;
                return -1;
              }
              (y.prototype.read = function(e) {
                l("read", e), (e = parseInt(e, 10));
                var t = this._readableState,
                  r = e;
                if (
                  (0 !== e && (t.emittedReadable = !1),
                  0 === e &&
                    t.needReadable &&
                    (t.length >= t.highWaterMark || t.ended))
                )
                  return (
                    l("read: emitReadable", t.length, t.ended),
                    0 === t.length && t.ended ? k(this) : S(this),
                    null
                  );
                if (0 === (e = A(e, t)) && t.ended)
                  return 0 === t.length && k(this), null;
                var n,
                  i = t.needReadable;
                return (
                  l("need readable", i),
                  (0 === t.length || t.length - e < t.highWaterMark) &&
                    l("length less than watermark", (i = !0)),
                  t.ended || t.reading
                    ? l("reading or ended", (i = !1))
                    : i &&
                      (l("do read"),
                      (t.reading = !0),
                      (t.sync = !0),
                      0 === t.length && (t.needReadable = !0),
                      this._read(t.highWaterMark),
                      (t.sync = !1),
                      t.reading || (e = A(r, t))),
                  null === (n = e > 0 ? P(e, t) : null)
                    ? ((t.needReadable = !0), (e = 0))
                    : (t.length -= e),
                  0 === t.length &&
                    (t.ended || (t.needReadable = !0),
                    r !== e && t.ended && k(this)),
                  null !== n && this.emit("data", n),
                  n
                );
              }),
                (y.prototype._read = function(e) {
                  this.emit("error", new Error("_read() is not implemented"));
                }),
                (y.prototype.pipe = function(e, t) {
                  var r = this,
                    a = this._readableState;
                  switch (a.pipesCount) {
                    case 0:
                      a.pipes = e;
                      break;
                    case 1:
                      a.pipes = [a.pipes, e];
                      break;
                    default:
                      a.pipes.push(e);
                  }
                  (a.pipesCount += 1),
                    l("pipe count=%d opts=%j", a.pipesCount, t);
                  var f =
                    (t && !1 === t.end) || e === n.stdout || e === n.stderr
                      ? g
                      : u;
                  function u() {
                    l("onend"), e.end();
                  }
                  a.endEmitted ? i.nextTick(f) : r.once("end", f),
                    e.on("unpipe", function t(n, i) {
                      l("onunpipe"),
                        n === r &&
                          i &&
                          !1 === i.hasUnpiped &&
                          ((i.hasUnpiped = !0),
                          l("cleanup"),
                          e.removeListener("close", m),
                          e.removeListener("finish", v),
                          e.removeListener("drain", c),
                          e.removeListener("error", b),
                          e.removeListener("unpipe", t),
                          r.removeListener("end", u),
                          r.removeListener("end", g),
                          r.removeListener("data", p),
                          (d = !0),
                          !a.awaitDrain ||
                            (e._writableState && !e._writableState.needDrain) ||
                            c());
                    });
                  var c = (function(e) {
                    return function() {
                      var t = e._readableState;
                      l("pipeOnDrain", t.awaitDrain),
                        t.awaitDrain && t.awaitDrain--,
                        0 === t.awaitDrain &&
                          s(e, "data") &&
                          ((t.flowing = !0), R(e));
                    };
                  })(r);
                  e.on("drain", c);
                  var d = !1,
                    h = !1;
                  function p(t) {
                    l("ondata"),
                      (h = !1),
                      !1 !== e.write(t) ||
                        h ||
                        (((1 === a.pipesCount && a.pipes === e) ||
                          (a.pipesCount > 1 && -1 !== O(a.pipes, e))) &&
                          !d &&
                          (l(
                            "false write response, pause",
                            r._readableState.awaitDrain
                          ),
                          r._readableState.awaitDrain++,
                          (h = !0)),
                        r.pause());
                  }
                  function b(t) {
                    l("onerror", t),
                      g(),
                      e.removeListener("error", b),
                      0 === s(e, "error") && e.emit("error", t);
                  }
                  function m() {
                    e.removeListener("finish", v), g();
                  }
                  function v() {
                    l("onfinish"), e.removeListener("close", m), g();
                  }
                  function g() {
                    l("unpipe"), r.unpipe(e);
                  }
                  return (
                    r.on("data", p),
                    (function(e, t, r) {
                      if ("function" == typeof e.prependListener)
                        return e.prependListener(t, r);
                      e._events && e._events[t]
                        ? o(e._events[t])
                          ? e._events[t].unshift(r)
                          : (e._events[t] = [r, e._events[t]])
                        : e.on(t, r);
                    })(e, "error", b),
                    e.once("close", m),
                    e.once("finish", v),
                    e.emit("pipe", r),
                    a.flowing || (l("pipe resume"), r.resume()),
                    e
                  );
                }),
                (y.prototype.unpipe = function(e) {
                  var t = this._readableState,
                    r = { hasUnpiped: !1 };
                  if (0 === t.pipesCount) return this;
                  if (1 === t.pipesCount)
                    return e && e !== t.pipes
                      ? this
                      : (e || (e = t.pipes),
                        (t.pipes = null),
                        (t.pipesCount = 0),
                        (t.flowing = !1),
                        e && e.emit("unpipe", this, r),
                        this);
                  if (!e) {
                    var n = t.pipes,
                      i = t.pipesCount;
                    (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
                    for (var a = 0; a < i; a++) n[a].emit("unpipe", this, r);
                    return this;
                  }
                  var o = O(t.pipes, e);
                  return -1 === o
                    ? this
                    : (t.pipes.splice(o, 1),
                      (t.pipesCount -= 1),
                      1 === t.pipesCount && (t.pipes = t.pipes[0]),
                      e.emit("unpipe", this, r),
                      this);
                }),
                (y.prototype.on = function(e, t) {
                  var r = f.prototype.on.call(this, e, t);
                  if ("data" === e)
                    !1 !== this._readableState.flowing && this.resume();
                  else if ("readable" === e) {
                    var n = this._readableState;
                    n.endEmitted ||
                      n.readableListening ||
                      ((n.readableListening = n.needReadable = !0),
                      (n.emittedReadable = !1),
                      n.reading ? n.length && S(this) : i.nextTick(T, this));
                  }
                  return r;
                }),
                (y.prototype.addListener = y.prototype.on),
                (y.prototype.resume = function() {
                  var e = this._readableState;
                  return (
                    e.flowing ||
                      (l("resume"),
                      (e.flowing = !0),
                      (function(e, t) {
                        t.resumeScheduled ||
                          ((t.resumeScheduled = !0), i.nextTick(L, e, t));
                      })(this, e)),
                    this
                  );
                }),
                (y.prototype.pause = function() {
                  return (
                    l("call pause flowing=%j", this._readableState.flowing),
                    !1 !== this._readableState.flowing &&
                      (l("pause"),
                      (this._readableState.flowing = !1),
                      this.emit("pause")),
                    this
                  );
                }),
                (y.prototype.wrap = function(e) {
                  var t = this,
                    r = this._readableState,
                    n = !1;
                  for (var i in (e.on("end", function() {
                    if ((l("wrapped end"), r.decoder && !r.ended)) {
                      var e = r.decoder.end();
                      e && e.length && t.push(e);
                    }
                    t.push(null);
                  }),
                  e.on("data", function(i) {
                    l("wrapped data"),
                      r.decoder && (i = r.decoder.write(i)),
                      (r.objectMode && null == i) ||
                        ((r.objectMode || (i && i.length)) &&
                          (t.push(i) || ((n = !0), e.pause())));
                  }),
                  e))
                    void 0 === this[i] &&
                      "function" == typeof e[i] &&
                      (this[i] = (function(t) {
                        return function() {
                          return e[t].apply(e, arguments);
                        };
                      })(i));
                  for (var a = 0; a < v.length; a++)
                    e.on(v[a], this.emit.bind(this, v[a]));
                  return (
                    (this._read = function(t) {
                      l("wrapped _read", t), n && ((n = !1), e.resume());
                    }),
                    this
                  );
                }),
                Object.defineProperty(y.prototype, "readableHighWaterMark", {
                  enumerable: !1,
                  get: function() {
                    return this._readableState.highWaterMark;
                  }
                }),
                (y._fromList = P);
            }.call(this, r(21), r(37)));
          },
          function(e, t, r) {
            e.exports = r(55).EventEmitter;
          },
          function(e, t, r) {
            "use strict";
            var n = r(38);
            function i(e, t) {
              e.emit("error", t);
            }
            e.exports = {
              destroy: function(e, t) {
                var r = this,
                  a = this._readableState && this._readableState.destroyed,
                  o = this._writableState && this._writableState.destroyed;
                return a || o
                  ? (t
                      ? t(e)
                      : !e ||
                        (this._writableState &&
                          this._writableState.errorEmitted) ||
                        n.nextTick(i, this, e),
                    this)
                  : (this._readableState &&
                      (this._readableState.destroyed = !0),
                    this._writableState && (this._writableState.destroyed = !0),
                    this._destroy(e || null, function(e) {
                      !t && e
                        ? (n.nextTick(i, r, e),
                          r._writableState &&
                            (r._writableState.errorEmitted = !0))
                        : t && t(e);
                    }),
                    this);
              },
              undestroy: function() {
                this._readableState &&
                  ((this._readableState.destroyed = !1),
                  (this._readableState.reading = !1),
                  (this._readableState.ended = !1),
                  (this._readableState.endEmitted = !1)),
                  this._writableState &&
                    ((this._writableState.destroyed = !1),
                    (this._writableState.ended = !1),
                    (this._writableState.ending = !1),
                    (this._writableState.finished = !1),
                    (this._writableState.errorEmitted = !1));
              }
            };
          },
          function(e, t, r) {
            "use strict";
            e.exports = o;
            var n = r(16),
              i = r(30);
            function a(e, t) {
              var r = this._transformState;
              r.transforming = !1;
              var n = r.writecb;
              if (!n)
                return this.emit(
                  "error",
                  new Error("write callback called multiple times")
                );
              (r.writechunk = null),
                (r.writecb = null),
                null != t && this.push(t),
                n(e);
              var i = this._readableState;
              (i.reading = !1),
                (i.needReadable || i.length < i.highWaterMark) &&
                  this._read(i.highWaterMark);
            }
            function o(e) {
              if (!(this instanceof o)) return new o(e);
              n.call(this, e),
                (this._transformState = {
                  afterTransform: a.bind(this),
                  needTransform: !1,
                  transforming: !1,
                  writecb: null,
                  writechunk: null,
                  writeencoding: null
                }),
                (this._readableState.needReadable = !0),
                (this._readableState.sync = !1),
                e &&
                  ("function" == typeof e.transform &&
                    (this._transform = e.transform),
                  "function" == typeof e.flush && (this._flush = e.flush)),
                this.on("prefinish", s);
            }
            function s() {
              var e = this;
              "function" == typeof this._flush
                ? this._flush(function(t, r) {
                    f(e, t, r);
                  })
                : f(this, null, null);
            }
            function f(e, t, r) {
              if (t) return e.emit("error", t);
              if ((null != r && e.push(r), e._writableState.length))
                throw new Error("Calling transform done when ws.length != 0");
              if (e._transformState.transforming)
                throw new Error(
                  "Calling transform done when still transforming"
                );
              return e.push(null);
            }
            (i.inherits = r(0)),
              i.inherits(o, n),
              (o.prototype.push = function(e, t) {
                return (
                  (this._transformState.needTransform = !1),
                  n.prototype.push.call(this, e, t)
                );
              }),
              (o.prototype._transform = function(e, t, r) {
                throw new Error("_transform() is not implemented");
              }),
              (o.prototype._write = function(e, t, r) {
                var n = this._transformState;
                if (
                  ((n.writecb = r),
                  (n.writechunk = e),
                  (n.writeencoding = t),
                  !n.transforming)
                ) {
                  var i = this._readableState;
                  (n.needTransform ||
                    i.needReadable ||
                    i.length < i.highWaterMark) &&
                    this._read(i.highWaterMark);
                }
              }),
              (o.prototype._read = function(e) {
                var t = this._transformState;
                null !== t.writechunk && t.writecb && !t.transforming
                  ? ((t.transforming = !0),
                    this._transform(
                      t.writechunk,
                      t.writeencoding,
                      t.afterTransform
                    ))
                  : (t.needTransform = !0);
              }),
              (o.prototype._destroy = function(e, t) {
                var r = this;
                n.prototype._destroy.call(this, e, function(e) {
                  t(e), r.emit("close");
                });
              });
          },
          function(e, t, r) {
            var n = r(0),
              i = r(22),
              a = r(2).Buffer,
              o = [
                1116352408,
                1899447441,
                3049323471,
                3921009573,
                961987163,
                1508970993,
                2453635748,
                2870763221,
                3624381080,
                310598401,
                607225278,
                1426881987,
                1925078388,
                2162078206,
                2614888103,
                3248222580,
                3835390401,
                4022224774,
                264347078,
                604807628,
                770255983,
                1249150122,
                1555081692,
                1996064986,
                2554220882,
                2821834349,
                2952996808,
                3210313671,
                3336571891,
                3584528711,
                113926993,
                338241895,
                666307205,
                773529912,
                1294757372,
                1396182291,
                1695183700,
                1986661051,
                2177026350,
                2456956037,
                2730485921,
                2820302411,
                3259730800,
                3345764771,
                3516065817,
                3600352804,
                4094571909,
                275423344,
                430227734,
                506948616,
                659060556,
                883997877,
                958139571,
                1322822218,
                1537002063,
                1747873779,
                1955562222,
                2024104815,
                2227730452,
                2361852424,
                2428436474,
                2756734187,
                3204031479,
                3329325298
              ],
              s = new Array(64);
            function f() {
              this.init(), (this._w = s), i.call(this, 64, 56);
            }
            function u(e, t, r) {
              return r ^ (e & (t ^ r));
            }
            function c(e, t, r) {
              return (e & t) | (r & (e | t));
            }
            function d(e) {
              return (
                ((e >>> 2) | (e << 30)) ^
                ((e >>> 13) | (e << 19)) ^
                ((e >>> 22) | (e << 10))
              );
            }
            function h(e) {
              return (
                ((e >>> 6) | (e << 26)) ^
                ((e >>> 11) | (e << 21)) ^
                ((e >>> 25) | (e << 7))
              );
            }
            function l(e) {
              return (
                ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3)
              );
            }
            n(f, i),
              (f.prototype.init = function() {
                return (
                  (this._a = 1779033703),
                  (this._b = 3144134277),
                  (this._c = 1013904242),
                  (this._d = 2773480762),
                  (this._e = 1359893119),
                  (this._f = 2600822924),
                  (this._g = 528734635),
                  (this._h = 1541459225),
                  this
                );
              }),
              (f.prototype._update = function(e) {
                for (
                  var t,
                    r = this._w,
                    n = 0 | this._a,
                    i = 0 | this._b,
                    a = 0 | this._c,
                    s = 0 | this._d,
                    f = 0 | this._e,
                    p = 0 | this._f,
                    b = 0 | this._g,
                    m = 0 | this._h,
                    v = 0;
                  v < 16;
                  ++v
                )
                  r[v] = e.readInt32BE(4 * v);
                for (; v < 64; ++v)
                  r[v] =
                    0 |
                    (((((t = r[v - 2]) >>> 17) | (t << 15)) ^
                      ((t >>> 19) | (t << 13)) ^
                      (t >>> 10)) +
                      r[v - 7] +
                      l(r[v - 15]) +
                      r[v - 16]);
                for (var g = 0; g < 64; ++g) {
                  var y = (m + h(f) + u(f, p, b) + o[g] + r[g]) | 0,
                    _ = (d(n) + c(n, i, a)) | 0;
                  (m = b),
                    (b = p),
                    (p = f),
                    (f = (s + y) | 0),
                    (s = a),
                    (a = i),
                    (i = n),
                    (n = (y + _) | 0);
                }
                (this._a = (n + this._a) | 0),
                  (this._b = (i + this._b) | 0),
                  (this._c = (a + this._c) | 0),
                  (this._d = (s + this._d) | 0),
                  (this._e = (f + this._e) | 0),
                  (this._f = (p + this._f) | 0),
                  (this._g = (b + this._g) | 0),
                  (this._h = (m + this._h) | 0);
              }),
              (f.prototype._hash = function() {
                var e = a.allocUnsafe(32);
                return (
                  e.writeInt32BE(this._a, 0),
                  e.writeInt32BE(this._b, 4),
                  e.writeInt32BE(this._c, 8),
                  e.writeInt32BE(this._d, 12),
                  e.writeInt32BE(this._e, 16),
                  e.writeInt32BE(this._f, 20),
                  e.writeInt32BE(this._g, 24),
                  e.writeInt32BE(this._h, 28),
                  e
                );
              }),
              (e.exports = f);
          },
          function(e, t, r) {
            var n = r(0),
              i = r(22),
              a = r(2).Buffer,
              o = [
                1116352408,
                3609767458,
                1899447441,
                602891725,
                3049323471,
                3964484399,
                3921009573,
                2173295548,
                961987163,
                4081628472,
                1508970993,
                3053834265,
                2453635748,
                2937671579,
                2870763221,
                3664609560,
                3624381080,
                2734883394,
                310598401,
                1164996542,
                607225278,
                1323610764,
                1426881987,
                3590304994,
                1925078388,
                4068182383,
                2162078206,
                991336113,
                2614888103,
                633803317,
                3248222580,
                3479774868,
                3835390401,
                2666613458,
                4022224774,
                944711139,
                264347078,
                2341262773,
                604807628,
                2007800933,
                770255983,
                1495990901,
                1249150122,
                1856431235,
                1555081692,
                3175218132,
                1996064986,
                2198950837,
                2554220882,
                3999719339,
                2821834349,
                766784016,
                2952996808,
                2566594879,
                3210313671,
                3203337956,
                3336571891,
                1034457026,
                3584528711,
                2466948901,
                113926993,
                3758326383,
                338241895,
                168717936,
                666307205,
                1188179964,
                773529912,
                1546045734,
                1294757372,
                1522805485,
                1396182291,
                2643833823,
                1695183700,
                2343527390,
                1986661051,
                1014477480,
                2177026350,
                1206759142,
                2456956037,
                344077627,
                2730485921,
                1290863460,
                2820302411,
                3158454273,
                3259730800,
                3505952657,
                3345764771,
                106217008,
                3516065817,
                3606008344,
                3600352804,
                1432725776,
                4094571909,
                1467031594,
                275423344,
                851169720,
                430227734,
                3100823752,
                506948616,
                1363258195,
                659060556,
                3750685593,
                883997877,
                3785050280,
                958139571,
                3318307427,
                1322822218,
                3812723403,
                1537002063,
                2003034995,
                1747873779,
                3602036899,
                1955562222,
                1575990012,
                2024104815,
                1125592928,
                2227730452,
                2716904306,
                2361852424,
                442776044,
                2428436474,
                593698344,
                2756734187,
                3733110249,
                3204031479,
                2999351573,
                3329325298,
                3815920427,
                3391569614,
                3928383900,
                3515267271,
                566280711,
                3940187606,
                3454069534,
                4118630271,
                4000239992,
                116418474,
                1914138554,
                174292421,
                2731055270,
                289380356,
                3203993006,
                460393269,
                320620315,
                685471733,
                587496836,
                852142971,
                1086792851,
                1017036298,
                365543100,
                1126000580,
                2618297676,
                1288033470,
                3409855158,
                1501505948,
                4234509866,
                1607167915,
                987167468,
                1816402316,
                1246189591
              ],
              s = new Array(160);
            function f() {
              this.init(), (this._w = s), i.call(this, 128, 112);
            }
            function u(e, t, r) {
              return r ^ (e & (t ^ r));
            }
            function c(e, t, r) {
              return (e & t) | (r & (e | t));
            }
            function d(e, t) {
              return (
                ((e >>> 28) | (t << 4)) ^
                ((t >>> 2) | (e << 30)) ^
                ((t >>> 7) | (e << 25))
              );
            }
            function h(e, t) {
              return (
                ((e >>> 14) | (t << 18)) ^
                ((e >>> 18) | (t << 14)) ^
                ((t >>> 9) | (e << 23))
              );
            }
            function l(e, t) {
              return (
                ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7)
              );
            }
            function p(e, t) {
              return (
                ((e >>> 1) | (t << 31)) ^
                ((e >>> 8) | (t << 24)) ^
                ((e >>> 7) | (t << 25))
              );
            }
            function b(e, t) {
              return (
                ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6)
              );
            }
            function m(e, t) {
              return (
                ((e >>> 19) | (t << 13)) ^
                ((t >>> 29) | (e << 3)) ^
                ((e >>> 6) | (t << 26))
              );
            }
            function v(e, t) {
              return e >>> 0 < t >>> 0 ? 1 : 0;
            }
            n(f, i),
              (f.prototype.init = function() {
                return (
                  (this._ah = 1779033703),
                  (this._bh = 3144134277),
                  (this._ch = 1013904242),
                  (this._dh = 2773480762),
                  (this._eh = 1359893119),
                  (this._fh = 2600822924),
                  (this._gh = 528734635),
                  (this._hh = 1541459225),
                  (this._al = 4089235720),
                  (this._bl = 2227873595),
                  (this._cl = 4271175723),
                  (this._dl = 1595750129),
                  (this._el = 2917565137),
                  (this._fl = 725511199),
                  (this._gl = 4215389547),
                  (this._hl = 327033209),
                  this
                );
              }),
              (f.prototype._update = function(e) {
                for (
                  var t = this._w,
                    r = 0 | this._ah,
                    n = 0 | this._bh,
                    i = 0 | this._ch,
                    a = 0 | this._dh,
                    s = 0 | this._eh,
                    f = 0 | this._fh,
                    g = 0 | this._gh,
                    y = 0 | this._hh,
                    _ = 0 | this._al,
                    w = 0 | this._bl,
                    E = 0 | this._cl,
                    A = 0 | this._dl,
                    S = 0 | this._el,
                    M = 0 | this._fl,
                    I = 0 | this._gl,
                    x = 0 | this._hl,
                    T = 0;
                  T < 32;
                  T += 2
                )
                  (t[T] = e.readInt32BE(4 * T)),
                    (t[T + 1] = e.readInt32BE(4 * T + 4));
                for (; T < 160; T += 2) {
                  var L = t[T - 30],
                    R = t[T - 30 + 1],
                    P = l(L, R),
                    k = p(R, L),
                    N = b((L = t[T - 4]), (R = t[T - 4 + 1])),
                    O = m(R, L),
                    C = t[T - 14],
                    B = t[T - 14 + 1],
                    j = t[T - 32],
                    D = t[T - 32 + 1],
                    U = (k + B) | 0,
                    V = (P + C + v(U, k)) | 0;
                  (V =
                    ((V = (V + N + v((U = (U + O) | 0), O)) | 0) +
                      j +
                      v((U = (U + D) | 0), D)) |
                    0),
                    (t[T] = V),
                    (t[T + 1] = U);
                }
                for (var z = 0; z < 160; z += 2) {
                  (V = t[z]), (U = t[z + 1]);
                  var Y = c(r, n, i),
                    q = c(_, w, E),
                    F = d(r, _),
                    K = d(_, r),
                    W = h(s, S),
                    G = h(S, s),
                    H = o[z],
                    Z = o[z + 1],
                    J = u(s, f, g),
                    X = u(S, M, I),
                    Q = (x + G) | 0,
                    $ = (y + W + v(Q, x)) | 0;
                  $ =
                    (($ =
                      (($ = ($ + J + v((Q = (Q + X) | 0), X)) | 0) +
                        H +
                        v((Q = (Q + Z) | 0), Z)) |
                      0) +
                      V +
                      v((Q = (Q + U) | 0), U)) |
                    0;
                  var ee = (K + q) | 0,
                    te = (F + Y + v(ee, K)) | 0;
                  (y = g),
                    (x = I),
                    (g = f),
                    (I = M),
                    (f = s),
                    (M = S),
                    (s = (a + $ + v((S = (A + Q) | 0), A)) | 0),
                    (a = i),
                    (A = E),
                    (i = n),
                    (E = w),
                    (n = r),
                    (w = _),
                    (r = ($ + te + v((_ = (Q + ee) | 0), Q)) | 0);
                }
                (this._al = (this._al + _) | 0),
                  (this._bl = (this._bl + w) | 0),
                  (this._cl = (this._cl + E) | 0),
                  (this._dl = (this._dl + A) | 0),
                  (this._el = (this._el + S) | 0),
                  (this._fl = (this._fl + M) | 0),
                  (this._gl = (this._gl + I) | 0),
                  (this._hl = (this._hl + x) | 0),
                  (this._ah = (this._ah + r + v(this._al, _)) | 0),
                  (this._bh = (this._bh + n + v(this._bl, w)) | 0),
                  (this._ch = (this._ch + i + v(this._cl, E)) | 0),
                  (this._dh = (this._dh + a + v(this._dl, A)) | 0),
                  (this._eh = (this._eh + s + v(this._el, S)) | 0),
                  (this._fh = (this._fh + f + v(this._fl, M)) | 0),
                  (this._gh = (this._gh + g + v(this._gl, I)) | 0),
                  (this._hh = (this._hh + y + v(this._hl, x)) | 0);
              }),
              (f.prototype._hash = function() {
                var e = a.allocUnsafe(64);
                function t(t, r, n) {
                  e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
                }
                return (
                  t(this._ah, this._al, 0),
                  t(this._bh, this._bl, 8),
                  t(this._ch, this._cl, 16),
                  t(this._dh, this._dl, 24),
                  t(this._eh, this._el, 32),
                  t(this._fh, this._fl, 40),
                  t(this._gh, this._gl, 48),
                  t(this._hh, this._hl, 56),
                  e
                );
              }),
              (e.exports = f);
          },
          function(e, t, r) {
            "use strict";
            (function(e) {
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.toPublicKey = t.sign = t.mapAPI = t.createPaymentMessage = t.repeatString = t.camelCase = void 0);
              var n,
                i = m(r(83)),
                a = m(r(88)),
                o = m(r(188)),
                s = m(r(72)),
                f = m(r(67)),
                u = m(r(66)),
                c = m(r(189)),
                d = m(r(73));
              (t.createPaymentMessage =
                ((n = (0, d.default)(
                  u.default.mark(function e(t, r, n, i) {
                    var a, o, s, f, d;
                    return u.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = n.reduce(function(e, t) {
                                  return e + t.amount;
                                }, 0)),
                                (o = r ? a : 1e3 + a),
                                (e.next = 4),
                                t.api.pickDivisibleCoinsForAmount({
                                  addresses: [i],
                                  last_ball_mci: 1e15,
                                  amount: o,
                                  spend_unconfirmed: "own",
                                  asset: r
                                })
                              );
                            case 4:
                              return (
                                (s = e.sent),
                                (f = s.inputs_with_proofs.map(function(e) {
                                  return e.input;
                                })),
                                (d = {
                                  inputs: f,
                                  outputs: [
                                    { address: i, amount: s.total_amount - a }
                                  ].concat((0, c.default)(n))
                                }),
                                r && (d.asset = r),
                                e.abrupt("return", {
                                  app: "payment",
                                  payload_hash:
                                    "--------------------------------------------",
                                  payload_location: "inline",
                                  payload: d
                                })
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function(e, t, r, i) {
                  return n.apply(this, arguments);
                })),
                (t.sortOutputs = function(e, t) {
                  return (
                    e.address.localeCompare(t.address) || e.amount - t.amount
                  );
                }),
                (t.getSourceString = x),
                (t.getJsonSourceString = T),
                (t.isChashValid = function(t) {
                  var r = t.length,
                    n = void 0;
                  if (32 !== r && 48 !== r)
                    throw Error("wrong encoded length: " + r);
                  try {
                    n = 32 === r ? p.default.decode(t) : e.from(t, "base64");
                  } catch (e) {
                    return console.log(e), !1;
                  }
                  var i = (function(e) {
                      var t = e.length,
                        r = void 0;
                      if (160 === t) r = R;
                      else {
                        if (288 !== t)
                          throw Error("bad length=" + t + ", bin = " + e);
                        r = P;
                      }
                      for (
                        var n = [], i = [], a = 0, o = 0;
                        o < r.length;
                        o += 1
                      )
                        n.push(e.substring(a, r[o])),
                          i.push(e.substr(r[o], 1)),
                          (a = r[o] + 1);
                      return (
                        a < e.length && n.push(e.substring(a)),
                        { cleanData: n.join(""), checksum: i.join("") }
                      );
                    })(E(n)),
                    a = A(i.cleanData);
                  return A(i.checksum).equals(M(a));
                }),
                (t.chashGetChash160 = function(e) {
                  return (function(e, t) {
                    S(t);
                    var r = (0, l.default)("ripemd160")
                        .update(e, "utf8")
                        .digest(),
                      n = r.slice(4),
                      i = M(n),
                      a = A(
                        (function(e, t) {
                          if (32 !== t.length)
                            throw Error("bad checksum length");
                          var r = e.length + t.length,
                            n = void 0;
                          if (160 === r) n = R;
                          else {
                            if (288 !== r)
                              throw Error(
                                "bad length=" +
                                  r +
                                  ", clean data = " +
                                  e +
                                  ", checksum = " +
                                  t
                              );
                            n = P;
                          }
                          for (
                            var i = [], a = t.split(""), o = 0, s = 0;
                            s < n.length;
                            s += 1
                          ) {
                            var f = n[s] - s;
                            i.push(e.substring(o, f)), i.push(a[s]), (o = f);
                          }
                          return (
                            o < e.length && i.push(e.substring(o)), i.join("")
                          );
                        })(E(n), E(i))
                      );
                    return p.default.encode(a).toString();
                  })(e, 160);
                }),
                (t.getHeadersSize = function(e) {
                  if (e.content_hash)
                    throw Error("trying to get headers size of stripped unit");
                  var t = JSON.parse((0, a.default)(e));
                  return (
                    delete t.unit,
                    delete t.headers_commission,
                    delete t.payload_commission,
                    delete t.main_chain_index,
                    e.version === b.VERSION_WITHOUT_TIMESTAMP &&
                      delete t.timestamp,
                    delete t.messages,
                    delete t.parent_units,
                    k(t) + v
                  );
                }),
                (t.getTotalPayloadSize = function(e) {
                  if (e.content_hash)
                    throw Error("trying to get payload size of stripped unit");
                  return k(e.messages);
                }),
                (t.getBase64Hash = N),
                (t.getUnitHashToSign = function(e) {
                  for (var t = I(e), r = 0; r < t.authors.length; r += 1)
                    delete t.authors[r].authentifiers;
                  var n =
                    e.version === b.VERSION_WITHOUT_TIMESTAMP ? x(t) : T(t);
                  return (0, l.default)("sha256")
                    .update(n, "utf8")
                    .digest();
                }),
                (t.getUnitHash = function(e) {
                  var t = e.version !== b.VERSION_WITHOUT_TIMESTAMP;
                  if (e.content_hash) return N(I(e), t);
                  var r = {
                    content_hash: O(e),
                    version: e.version,
                    alt: e.alt,
                    authors: e.authors.map(function(e) {
                      return { address: e.address };
                    })
                  };
                  return (
                    e.witness_list_unit
                      ? (r.witness_list_unit = e.witness_list_unit)
                      : (r.witnesses = e.witnesses),
                    e.parent_units &&
                      ((r.parent_units = e.parent_units),
                      (r.last_ball = e.last_ball),
                      (r.last_ball_unit = e.last_ball_unit)),
                    t && (r.timestamp = e.timestamp),
                    N(r, t)
                  );
                });
              var h = m(r(194)),
                l = m(r(54)),
                p = m(r(222)),
                b = r(107);
              function m(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var v = 88,
                g = "\0",
                y = "00000000",
                _ = "14159265358979323846264338327950288419716939937510".split(
                  ""
                ),
                w = (t.camelCase = function(e) {
                  return e
                    .split("/")
                    .pop()
                    .split("_")
                    .map(function(e) {
                      return e.charAt(0).toUpperCase() + e.slice(1);
                    })
                    .join("")
                    .replace(/^\w/, function(e) {
                      return e.toLowerCase();
                    });
                });
              function E(e) {
                for (var t = [], r = 0; r < e.length; r += 1) {
                  var n = e[r].toString(2);
                  n.length < 8 && (n = y.substring(n.length, 8) + n), t.push(n);
                }
                return t.join("");
              }
              function A(t) {
                for (var r = t.length / 8, n = e.alloc(r), i = 0; i < r; i += 1)
                  n[i] = parseInt(t.substr(8 * i, 8), 2);
                return n;
              }
              function S(e) {
                if (160 !== e && 288 !== e)
                  throw Error("unsupported c-hash length: " + e);
              }
              function M(t) {
                var r = (0, l.default)("sha256")
                  .update(t)
                  .digest();
                return e.from([r[5], r[13], r[21], r[29]]);
              }
              function I(e) {
                var t = JSON.parse((0, a.default)(e));
                if (
                  (delete t.unit,
                  delete t.headers_commission,
                  delete t.payload_commission,
                  delete t.main_chain_index,
                  e.version === b.VERSION_WITHOUT_TIMESTAMP &&
                    delete t.timestamp,
                  t.messages)
                )
                  for (var r = 0; r < t.messages.length; r += 1)
                    delete t.messages[r].payload,
                      delete t.messages[r].payload_uri;
                return t;
              }
              function x(e) {
                var t = [];
                return (
                  (function r(n) {
                    if (null === n)
                      throw Error("null value in " + (0, a.default)(e));
                    switch (void 0 === n ? "undefined" : (0, i.default)(n)) {
                      case "string":
                        t.push("s", n);
                        break;
                      case "number":
                        t.push("n", n.toString());
                        break;
                      case "boolean":
                        t.push("b", n.toString());
                        break;
                      case "object":
                        if (Array.isArray(n)) {
                          if (0 === n.length)
                            throw Error("empty array in " + (0, a.default)(e));
                          t.push("[");
                          for (var o = 0; o < n.length; o += 1) r(n[o]);
                          t.push("]");
                        } else {
                          var s = (0, f.default)(n).sort();
                          if (0 === s.length)
                            throw Error("empty object in " + (0, a.default)(e));
                          s.forEach(function(i) {
                            if (void 0 === n[i])
                              throw Error(
                                "undefined at " + i + " of " + (0, a.default)(e)
                              );
                            t.push(i), r(n[i]);
                          });
                        }
                        break;
                      default:
                        throw Error(
                          "hash: unknown type=" +
                            (void 0 === n ? "undefined" : (0, i.default)(n)) +
                            " of " +
                            n +
                            ", object: " +
                            (0, a.default)(e)
                        );
                    }
                  })(e),
                  t.join(g)
                );
              }
              function T(e) {
                return (function t(r) {
                  if (null === r)
                    throw Error("null value in " + (0, a.default)(e));
                  switch (void 0 === r ? "undefined" : (0, i.default)(r)) {
                    case "string":
                      return (0, a.default)(r);
                    case "number":
                    case "boolean":
                      return r.toString();
                    case "object":
                      if (Array.isArray(r)) {
                        if (0 === r.length)
                          throw Error("empty array in " + (0, a.default)(e));
                        return "[" + r.map(t).join(",") + "]";
                      }
                      var n = (0, f.default)(r).sort();
                      if (0 === n.length)
                        throw Error("empty object in " + (0, a.default)(e));
                      return (
                        "{" +
                        n
                          .map(function(e) {
                            return (0, a.default)(e) + ":" + t(r[e]);
                          })
                          .join(",") +
                        "}"
                      );
                    default:
                      throw Error(
                        "hash: unknown type=" +
                          (void 0 === r ? "undefined" : (0, i.default)(r)) +
                          " of " +
                          r +
                          ", object: " +
                          (0, a.default)(e)
                      );
                  }
                })(e);
              }
              function L(e) {
                S(e);
                for (var t = [], r = 0, n = 0, i = 0; r < e; i += 1) {
                  var a = parseInt(_[i], 10);
                  if (0 !== a) {
                    if (((r += a), 288 === e && (r += 4), r >= e)) break;
                    t.push(r), (n += 1);
                  }
                }
                if (32 !== n) throw Error("wrong number of checksum bits");
                return t;
              }
              (t.repeatString = function(e, t) {
                return e.repeat ? e.repeat(t) : new Array(t + 1).join(e);
              }),
                (t.mapAPI = function(e, t) {
                  return (0, f.default)(e).reduce(function(e, r) {
                    return (0, s.default)(
                      {},
                      e,
                      (0, o.default)({}, w(r), function() {
                        for (
                          var e = arguments.length, n = Array(e), i = 0;
                          i < e;
                          i++
                        )
                          n[i] = arguments[i];
                        var a = 0 !== n.length ? n[n.length - 1] : null;
                        "function" == typeof a
                          ? (n = n.slice(0, -1))
                          : (a = null);
                        var o = t.apply(void 0, [r].concat((0, c.default)(n)));
                        return a
                          ? o
                              .then(function(e) {
                                return a(null, e);
                              })
                              .catch(function(e) {
                                return a(e, null);
                              })
                          : o;
                      })
                    );
                  }, {});
                }),
                (t.sign = function(e, t) {
                  return h.default.sign(e, t).signature.toString("base64");
                });
              var R = L(160),
                P = L(288);
              function k(e) {
                if (null === e) return 0;
                switch (void 0 === e ? "undefined" : (0, i.default)(e)) {
                  case "string":
                    return e.length;
                  case "number":
                    return 8;
                  case "object":
                    var t = 0;
                    return (
                      Array.isArray(e)
                        ? e.forEach(function(e) {
                            t += k(e);
                          })
                        : (0, f.default)(e).forEach(function(r) {
                            if (void 0 === e[r])
                              throw Error(
                                "undefined at " + r + " of " + (0, a.default)(e)
                              );
                            t += k(e[r]);
                          }),
                      t
                    );
                  case "boolean":
                    return 1;
                  default:
                    throw Error(
                      "unknown type=" +
                        (void 0 === e ? "undefined" : (0, i.default)(e)) +
                        " of " +
                        e
                    );
                }
              }
              function N(e, t) {
                var r = t ? T(e) : x(e);
                return (0, l.default)("sha256")
                  .update(r, "utf8")
                  .digest("base64");
              }
              function O(e) {
                return N(I(e), e.version !== b.VERSION_WITHOUT_TIMESTAMP);
              }
              t.toPublicKey = function(e) {
                return h.default.publicKeyCreate(e).toString("base64");
              };
            }.call(this, r(12).Buffer));
          },
          function(e) {
            e.exports = JSON.parse(
              '{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}'
            );
          },
          function(e, t, r) {
            "use strict";
            var n = t;
            function i(e) {
              return 1 === e.length ? "0" + e : e;
            }
            function a(e) {
              for (var t = "", r = 0; r < e.length; r++)
                t += i(e[r].toString(16));
              return t;
            }
            (n.toArray = function(e, t) {
              if (Array.isArray(e)) return e.slice();
              if (!e) return [];
              var r = [];
              if ("string" != typeof e) {
                for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
                return r;
              }
              if ("hex" === t)
                for (
                  (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                    (e = "0" + e),
                    n = 0;
                  n < e.length;
                  n += 2
                )
                  r.push(parseInt(e[n] + e[n + 1], 16));
              else
                for (n = 0; n < e.length; n++) {
                  var i = e.charCodeAt(n),
                    a = i >> 8,
                    o = 255 & i;
                  a ? r.push(a, o) : r.push(o);
                }
              return r;
            }),
              (n.zero2 = i),
              (n.toHex = a),
              (n.encode = function(e, t) {
                return "hex" === t ? a(e) : e;
              });
          },
          function(e, t, r) {
            var n;
            function i(e) {
              this.rand = e;
            }
            if (
              ((e.exports = function(e) {
                return n || (n = new i(null)), n.generate(e);
              }),
              (e.exports.Rand = i),
              (i.prototype.generate = function(e) {
                return this._rand(e);
              }),
              (i.prototype._rand = function(e) {
                if (this.rand.getBytes) return this.rand.getBytes(e);
                for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
                  t[r] = this.rand.getByte();
                return t;
              }),
              "object" == typeof self)
            )
              self.crypto && self.crypto.getRandomValues
                ? (i.prototype._rand = function(e) {
                    var t = new Uint8Array(e);
                    return self.crypto.getRandomValues(t), t;
                  })
                : self.msCrypto && self.msCrypto.getRandomValues
                ? (i.prototype._rand = function(e) {
                    var t = new Uint8Array(e);
                    return self.msCrypto.getRandomValues(t), t;
                  })
                : "object" == typeof window &&
                  (i.prototype._rand = function() {
                    throw new Error("Not implemented yet");
                  });
            else
              try {
                var a = r(204);
                if ("function" != typeof a.randomBytes)
                  throw new Error("Not supported");
                i.prototype._rand = function(e) {
                  return a.randomBytes(e);
                };
              } catch (e) {}
          },
          function(e, t, r) {
            "use strict";
            var n = t;
            (n.base = r(39)),
              (n.short = r(205)),
              (n.mont = r(206)),
              (n.edwards = r(207));
          },
          function(e, t, r) {
            "use strict";
            var n = r(7).rotr32;
            function i(e, t, r) {
              return (e & t) ^ (~e & r);
            }
            function a(e, t, r) {
              return (e & t) ^ (e & r) ^ (t & r);
            }
            function o(e, t, r) {
              return e ^ t ^ r;
            }
            (t.ft_1 = function(e, t, r, n) {
              return 0 === e
                ? i(t, r, n)
                : 1 === e || 3 === e
                ? o(t, r, n)
                : 2 === e
                ? a(t, r, n)
                : void 0;
            }),
              (t.ch32 = i),
              (t.maj32 = a),
              (t.p32 = o),
              (t.s0_256 = function(e) {
                return n(e, 2) ^ n(e, 13) ^ n(e, 22);
              }),
              (t.s1_256 = function(e) {
                return n(e, 6) ^ n(e, 11) ^ n(e, 25);
              }),
              (t.g0_256 = function(e) {
                return n(e, 7) ^ n(e, 18) ^ (e >>> 3);
              }),
              (t.g1_256 = function(e) {
                return n(e, 17) ^ n(e, 19) ^ (e >>> 10);
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(7),
              i = r(31),
              a = r(104),
              o = r(17),
              s = n.sum32,
              f = n.sum32_4,
              u = n.sum32_5,
              c = a.ch32,
              d = a.maj32,
              h = a.s0_256,
              l = a.s1_256,
              p = a.g0_256,
              b = a.g1_256,
              m = i.BlockHash,
              v = [
                1116352408,
                1899447441,
                3049323471,
                3921009573,
                961987163,
                1508970993,
                2453635748,
                2870763221,
                3624381080,
                310598401,
                607225278,
                1426881987,
                1925078388,
                2162078206,
                2614888103,
                3248222580,
                3835390401,
                4022224774,
                264347078,
                604807628,
                770255983,
                1249150122,
                1555081692,
                1996064986,
                2554220882,
                2821834349,
                2952996808,
                3210313671,
                3336571891,
                3584528711,
                113926993,
                338241895,
                666307205,
                773529912,
                1294757372,
                1396182291,
                1695183700,
                1986661051,
                2177026350,
                2456956037,
                2730485921,
                2820302411,
                3259730800,
                3345764771,
                3516065817,
                3600352804,
                4094571909,
                275423344,
                430227734,
                506948616,
                659060556,
                883997877,
                958139571,
                1322822218,
                1537002063,
                1747873779,
                1955562222,
                2024104815,
                2227730452,
                2361852424,
                2428436474,
                2756734187,
                3204031479,
                3329325298
              ];
            function g() {
              if (!(this instanceof g)) return new g();
              m.call(this),
                (this.h = [
                  1779033703,
                  3144134277,
                  1013904242,
                  2773480762,
                  1359893119,
                  2600822924,
                  528734635,
                  1541459225
                ]),
                (this.k = v),
                (this.W = new Array(64));
            }
            n.inherits(g, m),
              (e.exports = g),
              (g.blockSize = 512),
              (g.outSize = 256),
              (g.hmacStrength = 192),
              (g.padLength = 64),
              (g.prototype._update = function(e, t) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
                for (; n < r.length; n++)
                  r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
                var i = this.h[0],
                  a = this.h[1],
                  m = this.h[2],
                  v = this.h[3],
                  g = this.h[4],
                  y = this.h[5],
                  _ = this.h[6],
                  w = this.h[7];
                for (o(this.k.length === r.length), n = 0; n < r.length; n++) {
                  var E = u(w, l(g), c(g, y, _), this.k[n], r[n]),
                    A = s(h(i), d(i, a, m));
                  (w = _),
                    (_ = y),
                    (y = g),
                    (g = s(v, E)),
                    (v = m),
                    (m = a),
                    (a = i),
                    (i = s(E, A));
                }
                (this.h[0] = s(this.h[0], i)),
                  (this.h[1] = s(this.h[1], a)),
                  (this.h[2] = s(this.h[2], m)),
                  (this.h[3] = s(this.h[3], v)),
                  (this.h[4] = s(this.h[4], g)),
                  (this.h[5] = s(this.h[5], y)),
                  (this.h[6] = s(this.h[6], _)),
                  (this.h[7] = s(this.h[7], w));
              }),
              (g.prototype._digest = function(e) {
                return "hex" === e
                  ? n.toHex32(this.h, "big")
                  : n.split32(this.h, "big");
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(7),
              i = r(31),
              a = r(17),
              o = n.rotr64_hi,
              s = n.rotr64_lo,
              f = n.shr64_hi,
              u = n.shr64_lo,
              c = n.sum64,
              d = n.sum64_hi,
              h = n.sum64_lo,
              l = n.sum64_4_hi,
              p = n.sum64_4_lo,
              b = n.sum64_5_hi,
              m = n.sum64_5_lo,
              v = i.BlockHash,
              g = [
                1116352408,
                3609767458,
                1899447441,
                602891725,
                3049323471,
                3964484399,
                3921009573,
                2173295548,
                961987163,
                4081628472,
                1508970993,
                3053834265,
                2453635748,
                2937671579,
                2870763221,
                3664609560,
                3624381080,
                2734883394,
                310598401,
                1164996542,
                607225278,
                1323610764,
                1426881987,
                3590304994,
                1925078388,
                4068182383,
                2162078206,
                991336113,
                2614888103,
                633803317,
                3248222580,
                3479774868,
                3835390401,
                2666613458,
                4022224774,
                944711139,
                264347078,
                2341262773,
                604807628,
                2007800933,
                770255983,
                1495990901,
                1249150122,
                1856431235,
                1555081692,
                3175218132,
                1996064986,
                2198950837,
                2554220882,
                3999719339,
                2821834349,
                766784016,
                2952996808,
                2566594879,
                3210313671,
                3203337956,
                3336571891,
                1034457026,
                3584528711,
                2466948901,
                113926993,
                3758326383,
                338241895,
                168717936,
                666307205,
                1188179964,
                773529912,
                1546045734,
                1294757372,
                1522805485,
                1396182291,
                2643833823,
                1695183700,
                2343527390,
                1986661051,
                1014477480,
                2177026350,
                1206759142,
                2456956037,
                344077627,
                2730485921,
                1290863460,
                2820302411,
                3158454273,
                3259730800,
                3505952657,
                3345764771,
                106217008,
                3516065817,
                3606008344,
                3600352804,
                1432725776,
                4094571909,
                1467031594,
                275423344,
                851169720,
                430227734,
                3100823752,
                506948616,
                1363258195,
                659060556,
                3750685593,
                883997877,
                3785050280,
                958139571,
                3318307427,
                1322822218,
                3812723403,
                1537002063,
                2003034995,
                1747873779,
                3602036899,
                1955562222,
                1575990012,
                2024104815,
                1125592928,
                2227730452,
                2716904306,
                2361852424,
                442776044,
                2428436474,
                593698344,
                2756734187,
                3733110249,
                3204031479,
                2999351573,
                3329325298,
                3815920427,
                3391569614,
                3928383900,
                3515267271,
                566280711,
                3940187606,
                3454069534,
                4118630271,
                4000239992,
                116418474,
                1914138554,
                174292421,
                2731055270,
                289380356,
                3203993006,
                460393269,
                320620315,
                685471733,
                587496836,
                852142971,
                1086792851,
                1017036298,
                365543100,
                1126000580,
                2618297676,
                1288033470,
                3409855158,
                1501505948,
                4234509866,
                1607167915,
                987167468,
                1816402316,
                1246189591
              ];
            function y() {
              if (!(this instanceof y)) return new y();
              v.call(this),
                (this.h = [
                  1779033703,
                  4089235720,
                  3144134277,
                  2227873595,
                  1013904242,
                  4271175723,
                  2773480762,
                  1595750129,
                  1359893119,
                  2917565137,
                  2600822924,
                  725511199,
                  528734635,
                  4215389547,
                  1541459225,
                  327033209
                ]),
                (this.k = g),
                (this.W = new Array(160));
            }
            function _(e, t, r, n, i) {
              var a = (e & r) ^ (~e & i);
              return a < 0 && (a += 4294967296), a;
            }
            function w(e, t, r, n, i, a) {
              var o = (t & n) ^ (~t & a);
              return o < 0 && (o += 4294967296), o;
            }
            function E(e, t, r, n, i) {
              var a = (e & r) ^ (e & i) ^ (r & i);
              return a < 0 && (a += 4294967296), a;
            }
            function A(e, t, r, n, i, a) {
              var o = (t & n) ^ (t & a) ^ (n & a);
              return o < 0 && (o += 4294967296), o;
            }
            function S(e, t) {
              var r = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
              return r < 0 && (r += 4294967296), r;
            }
            function M(e, t) {
              var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
              return r < 0 && (r += 4294967296), r;
            }
            function I(e, t) {
              var r = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
              return r < 0 && (r += 4294967296), r;
            }
            function x(e, t) {
              var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
              return r < 0 && (r += 4294967296), r;
            }
            function T(e, t) {
              var r = o(e, t, 1) ^ o(e, t, 8) ^ f(e, t, 7);
              return r < 0 && (r += 4294967296), r;
            }
            function L(e, t) {
              var r = s(e, t, 1) ^ s(e, t, 8) ^ u(e, t, 7);
              return r < 0 && (r += 4294967296), r;
            }
            function R(e, t) {
              var r = o(e, t, 19) ^ o(t, e, 29) ^ f(e, t, 6);
              return r < 0 && (r += 4294967296), r;
            }
            function P(e, t) {
              var r = s(e, t, 19) ^ s(t, e, 29) ^ u(e, t, 6);
              return r < 0 && (r += 4294967296), r;
            }
            n.inherits(y, v),
              (e.exports = y),
              (y.blockSize = 1024),
              (y.outSize = 512),
              (y.hmacStrength = 192),
              (y.padLength = 128),
              (y.prototype._prepareBlock = function(e, t) {
                for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
                for (; n < r.length; n += 2) {
                  var i = R(r[n - 4], r[n - 3]),
                    a = P(r[n - 4], r[n - 3]),
                    o = r[n - 14],
                    s = r[n - 13],
                    f = T(r[n - 30], r[n - 29]),
                    u = L(r[n - 30], r[n - 29]),
                    c = r[n - 32],
                    d = r[n - 31];
                  (r[n] = l(i, a, o, s, f, u, c, d)),
                    (r[n + 1] = p(i, a, o, s, f, u, c, d));
                }
              }),
              (y.prototype._update = function(e, t) {
                this._prepareBlock(e, t);
                var r = this.W,
                  n = this.h[0],
                  i = this.h[1],
                  o = this.h[2],
                  s = this.h[3],
                  f = this.h[4],
                  u = this.h[5],
                  l = this.h[6],
                  p = this.h[7],
                  v = this.h[8],
                  g = this.h[9],
                  y = this.h[10],
                  T = this.h[11],
                  L = this.h[12],
                  R = this.h[13],
                  P = this.h[14],
                  k = this.h[15];
                a(this.k.length === r.length);
                for (var N = 0; N < r.length; N += 2) {
                  var O = P,
                    C = k,
                    B = I(v, g),
                    j = x(v, g),
                    D = _(v, 0, y, 0, L),
                    U = w(0, g, 0, T, 0, R),
                    V = this.k[N],
                    z = this.k[N + 1],
                    Y = r[N],
                    q = r[N + 1],
                    F = b(O, C, B, j, D, U, V, z, Y, q),
                    K = m(O, C, B, j, D, U, V, z, Y, q);
                  (O = S(n, i)),
                    (C = M(n, i)),
                    (B = E(n, 0, o, 0, f)),
                    (j = A(0, i, 0, s, 0, u));
                  var W = d(O, C, B, j),
                    G = h(O, C, B, j);
                  (P = L),
                    (k = R),
                    (L = y),
                    (R = T),
                    (y = v),
                    (T = g),
                    (v = d(l, p, F, K)),
                    (g = h(p, p, F, K)),
                    (l = f),
                    (p = u),
                    (f = o),
                    (u = s),
                    (o = n),
                    (s = i),
                    (n = d(F, K, W, G)),
                    (i = h(F, K, W, G));
                }
                c(this.h, 0, n, i),
                  c(this.h, 2, o, s),
                  c(this.h, 4, f, u),
                  c(this.h, 6, l, p),
                  c(this.h, 8, v, g),
                  c(this.h, 10, y, T),
                  c(this.h, 12, L, R),
                  c(this.h, 14, P, k);
              }),
              (y.prototype._digest = function(e) {
                return "hex" === e
                  ? n.toHex32(this.h, "big")
                  : n.split32(this.h, "big");
              });
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.DEFAULT_NODE = "wss://obyte.org/bb"),
              (t.VERSION = "1.0"),
              (t.VERSION_TESTNET = "2.0t"),
              (t.VERSION_WITHOUT_TIMESTAMP = "1.0"),
              (t.ALT = "1"),
              (t.ALT_TESTNET = "2");
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = a(r(109)),
              i = a(r(89));
            function a(e) {
              return e && e.__esModule ? e : { default: e };
            }
            (t.default = { Client: n.default, utils: i.default }),
              (e.exports = t.default);
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = y(r(62)),
              i = y(r(66)),
              a = y(r(67)),
              o = y(r(120)),
              s = y(r(72)),
              f = y(r(73)),
              u = y(r(74)),
              c = y(r(83)),
              d = y(r(85)),
              h = y(r(86)),
              l = y(r(159)),
              p = y(r(89)),
              b = r(107),
              m = r(99),
              v = y(r(224)),
              g = y(r(225));
            function y(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var _ = (function() {
              function e() {
                var t = this,
                  r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : b.DEFAULT_NODE,
                  h =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                (0, d.default)(this, e);
                var y,
                  _,
                  w = this;
                (this.options =
                  "object" === (void 0 === h ? "undefined" : (0, c.default)(h))
                    ? h
                    : { testnet: h }),
                  (this.client = new l.default(
                    r,
                    this.options.reconnect || !1
                  )),
                  (this.cachedWitnesses = null),
                  (this.api = {}),
                  (this.compose = {
                    message:
                      ((y = (0, f.default)(
                        i.default.mark(function e(t, r) {
                          var n,
                            f,
                            d,
                            h,
                            l,
                            v,
                            g,
                            y,
                            _,
                            E,
                            A,
                            S,
                            M,
                            I,
                            x,
                            T,
                            L,
                            R,
                            P,
                            k,
                            N,
                            O,
                            C,
                            B,
                            j,
                            D,
                            U =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                          return i.default.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (n = !1),
                                      (f =
                                        "object" ===
                                        (void 0 === U
                                          ? "undefined"
                                          : (0, c.default)(U))
                                          ? (0, s.default)({}, w.options, U)
                                          : (0, s.default)({}, w.options, {
                                              wif: U
                                            })),
                                      (d =
                                        f.privateKey ||
                                        p.default.fromWif(f.wif, f.testnet)
                                          .privateKey),
                                      (h = (0, m.toPublicKey)(d)),
                                      (l = f.definition || [
                                        "sig",
                                        { pubkey: h }
                                      ]),
                                      (v =
                                        f.address || p.default.getChash160(l)),
                                      (g = f.path || "r"),
                                      (y = f.testnet
                                        ? b.VERSION_TESTNET
                                        : b.VERSION),
                                      (_ = y !== b.VERSION_WITHOUT_TIMESTAMP),
                                      (e.next = 11),
                                      w.getCachedWitnesses()
                                    );
                                  case 11:
                                    return (
                                      (E = e.sent),
                                      (e.next = 14),
                                      u.default.all([
                                        w.api.getParentsAndLastBallAndWitnessListUnit(
                                          { witnesses: E }
                                        ),
                                        w.api.getDefinitionForAddress({
                                          address: v
                                        })
                                      ])
                                    );
                                  case 14:
                                    if (
                                      ((A = e.sent),
                                      (S = (0, o.default)(A, 2)),
                                      (M = S[0]),
                                      (I = S[1]).definition || !I.is_stable)
                                    ) {
                                      e.next = 22;
                                      break;
                                    }
                                    (n = !0), (e.next = 24);
                                    break;
                                  case 22:
                                    if (I.is_stable) {
                                      e.next = 24;
                                      break;
                                    }
                                    throw new Error(
                                      "Definition or definition change for address " +
                                        v +
                                        " is not stable yet"
                                    );
                                  case 24:
                                    if (
                                      I.definition_chash ===
                                      p.default.getChash160(l)
                                    ) {
                                      e.next = 26;
                                      break;
                                    }
                                    throw new Error(
                                      "Definition chash of address doesn't match the definition chash provided"
                                    );
                                  case 26:
                                    return (
                                      (e.next = 28),
                                      (0, m.createPaymentMessage)(
                                        w,
                                        null,
                                        "payment" !== t || r.asset
                                          ? []
                                          : r.outputs,
                                        v
                                      )
                                    );
                                  case 28:
                                    if (
                                      ((x = e.sent), (T = [x]), "payment" !== t)
                                    ) {
                                      e.next = 38;
                                      break;
                                    }
                                    if (!r.asset) {
                                      e.next = 36;
                                      break;
                                    }
                                    return (
                                      (e.next = 34),
                                      (0, m.createPaymentMessage)(
                                        w,
                                        r.asset,
                                        r.outputs,
                                        v
                                      )
                                    );
                                  case 34:
                                    (L = e.sent), T.push(L);
                                  case 36:
                                    e.next = 39;
                                    break;
                                  case 38:
                                    T.push({
                                      app: t,
                                      payload_hash: (0, m.getBase64Hash)(r, _),
                                      payload_location: "inline",
                                      payload: r
                                    });
                                  case 39:
                                    for (
                                      R = {
                                        version: f.testnet
                                          ? b.VERSION_TESTNET
                                          : b.VERSION,
                                        alt: f.testnet ? b.ALT_TESTNET : b.ALT,
                                        messages: [].concat(T),
                                        authors: [],
                                        parent_units: M.parent_units,
                                        last_ball: M.last_stable_mc_ball,
                                        last_ball_unit:
                                          M.last_stable_mc_ball_unit,
                                        witness_list_unit: M.witness_list_unit,
                                        timestamp: Math.round(Date.now() / 1e3)
                                      },
                                        P = { address: v, authentifiers: {} },
                                        n && (P.definition = l),
                                        k = {},
                                        N = { r: 88 },
                                        O = (0, a.default)(N),
                                        k[v] = O,
                                        C = 0;
                                      C < O.length;
                                      C += 1
                                    )
                                      P.authentifiers[O[C]] = (0,
                                      m.repeatString)("-", N[O[C]]);
                                    return (
                                      R.authors.push(P),
                                      (B = (0, m.getHeadersSize)(R)),
                                      (j = (0, m.getTotalPayloadSize)(R)),
                                      (T[0].payload.outputs[0].amount -= B + j),
                                      T[0].payload.outputs.sort(m.sortOutputs),
                                      (T[0].payload_hash = (0, m.getBase64Hash)(
                                        T[0].payload,
                                        _
                                      )),
                                      r.asset &&
                                        (T[1].payload.outputs.sort(
                                          m.sortOutputs
                                        ),
                                        (T[1].payload_hash = (0,
                                        m.getBase64Hash)(T[1].payload, _))),
                                      (R.headers_commission = B),
                                      (R.payload_commission = j),
                                      (D = (0, m.getUnitHashToSign)(R)),
                                      (R.authors[0].authentifiers = {}),
                                      (R.authors[0].authentifiers[g] = (0,
                                      m.sign)(D, d)),
                                      (R.messages = [].concat(T)),
                                      (R.unit = (0, m.getUnitHash)(R)),
                                      e.abrupt("return", R)
                                    );
                                  case 62:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function(e, t) {
                        return y.apply(this, arguments);
                      })
                  }),
                  (this.post = {
                    message:
                      ((_ = (0, f.default)(
                        i.default.mark(function e(t, r, n) {
                          var a;
                          return i.default.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2), w.compose.message(t, r, n)
                                    );
                                  case 2:
                                    return (
                                      (a = e.sent),
                                      e.abrupt("return", w.broadcast(a))
                                    );
                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function(e, t, r) {
                        return _.apply(this, arguments);
                      })
                  }),
                  (0, n.default)(
                    this.api,
                    (0, m.mapAPI)(v.default, function(e, r) {
                      return new u.default(function(n, i) {
                        t.client.request(e, r, function(e, t) {
                          return e ? i(e) : n(t);
                        });
                      });
                    })
                  ),
                  (0, n.default)(
                    this.compose,
                    (0, m.mapAPI)(g.default, this.compose.message)
                  ),
                  (0, n.default)(
                    this.post,
                    (0, m.mapAPI)(g.default, this.post.message)
                  );
              }
              var t, r;
              return (
                (0, h.default)(e, [
                  {
                    key: "broadcast",
                    value:
                      ((r = (0, f.default)(
                        i.default.mark(function e(t) {
                          return i.default.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      this.api.postJoint({ unit: t })
                                    );
                                  case 2:
                                    return e.abrupt("return", t.unit);
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function(e) {
                        return r.apply(this, arguments);
                      })
                  },
                  {
                    key: "getCachedWitnesses",
                    value:
                      ((t = (0, f.default)(
                        i.default.mark(function e() {
                          return i.default.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!this.cachedWitnesses) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt(
                                      "return",
                                      this.cachedWitnesses
                                    );
                                  case 2:
                                    return (
                                      (e.next = 4), this.api.getWitnesses()
                                    );
                                  case 4:
                                    return (
                                      (this.cachedWitnesses = e.sent),
                                      e.abrupt("return", this.cachedWitnesses)
                                    );
                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function() {
                        return t.apply(this, arguments);
                      })
                  },
                  {
                    key: "subscribe",
                    value: function(e) {
                      this.client.subscribe(e);
                    }
                  },
                  {
                    key: "justsaying",
                    value: function(e, t) {
                      this.client.justsaying(e, t);
                    }
                  },
                  {
                    key: "close",
                    value: function() {
                      this.client.close();
                    }
                  }
                ]),
                e
              );
            })();
            (t.default = _), (e.exports = t.default);
          },
          function(e, t, r) {
            r(111), (e.exports = r(1).Object.assign);
          },
          function(e, t, r) {
            var n = r(8);
            n(n.S + n.F, "Object", { assign: r(112) });
          },
          function(e, t, r) {
            "use strict";
            var n = r(11),
              i = r(25),
              a = r(48),
              o = r(34),
              s = r(28),
              f = r(65),
              u = Object.assign;
            e.exports =
              !u ||
              r(18)(function() {
                var e = {},
                  t = {},
                  r = Symbol(),
                  n = "abcdefghijklmnopqrst";
                return (
                  (e[r] = 7),
                  n.split("").forEach(function(e) {
                    t[e] = e;
                  }),
                  7 != u({}, e)[r] || Object.keys(u({}, t)).join("") != n
                );
              })
                ? function(e, t) {
                    for (
                      var r = s(e),
                        u = arguments.length,
                        c = 1,
                        d = a.f,
                        h = o.f;
                      u > c;

                    )
                      for (
                        var l,
                          p = f(arguments[c++]),
                          b = d ? i(p).concat(d(p)) : i(p),
                          m = b.length,
                          v = 0;
                        m > v;

                      )
                        (l = b[v++]), (n && !h.call(p, l)) || (r[l] = p[l]);
                    return r;
                  }
                : u;
          },
          function(e, t, r) {
            var n = r(19),
              i = r(43),
              a = r(114);
            e.exports = function(e) {
              return function(t, r, o) {
                var s,
                  f = n(t),
                  u = i(f.length),
                  c = a(o, u);
                if (e && r != r) {
                  for (; u > c; ) if ((s = f[c++]) != s) return !0;
                } else
                  for (; u > c; c++)
                    if ((e || c in f) && f[c] === r) return e || c || 0;
                return !e && -1;
              };
            };
          },
          function(e, t, r) {
            var n = r(44),
              i = Math.max,
              a = Math.min;
            e.exports = function(e, t) {
              return (e = n(e)) < 0 ? i(e + t, 0) : a(e, t);
            };
          },
          function(e, t, r) {
            var n =
                (function() {
                  return this;
                })() || Function("return this")(),
              i =
                n.regeneratorRuntime &&
                Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >=
                  0,
              a = i && n.regeneratorRuntime;
            if (((n.regeneratorRuntime = void 0), (e.exports = r(116)), i))
              n.regeneratorRuntime = a;
            else
              try {
                delete n.regeneratorRuntime;
              } catch (e) {
                n.regeneratorRuntime = void 0;
              }
          },
          function(e, t) {
            !(function(t) {
              "use strict";
              var r,
                n = Object.prototype,
                i = n.hasOwnProperty,
                a = "function" == typeof Symbol ? Symbol : {},
                o = a.iterator || "@@iterator",
                s = a.asyncIterator || "@@asyncIterator",
                f = a.toStringTag || "@@toStringTag",
                u = "object" == typeof e,
                c = t.regeneratorRuntime;
              if (c) u && (e.exports = c);
              else {
                (c = t.regeneratorRuntime = u ? e.exports : {}).wrap = _;
                var d = "suspendedStart",
                  h = "suspendedYield",
                  l = "executing",
                  p = "completed",
                  b = {},
                  m = {};
                m[o] = function() {
                  return this;
                };
                var v = Object.getPrototypeOf,
                  g = v && v(v(P([])));
                g && g !== n && i.call(g, o) && (m = g);
                var y = (S.prototype = E.prototype = Object.create(m));
                (A.prototype = y.constructor = S),
                  (S.constructor = A),
                  (S[f] = A.displayName = "GeneratorFunction"),
                  (c.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return (
                      !!t &&
                      (t === A ||
                        "GeneratorFunction" === (t.displayName || t.name))
                    );
                  }),
                  (c.mark = function(e) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, S)
                        : ((e.__proto__ = S),
                          f in e || (e[f] = "GeneratorFunction")),
                      (e.prototype = Object.create(y)),
                      e
                    );
                  }),
                  (c.awrap = function(e) {
                    return { __await: e };
                  }),
                  M(I.prototype),
                  (I.prototype[s] = function() {
                    return this;
                  }),
                  (c.AsyncIterator = I),
                  (c.async = function(e, t, r, n) {
                    var i = new I(_(e, t, r, n));
                    return c.isGeneratorFunction(t)
                      ? i
                      : i.next().then(function(e) {
                          return e.done ? e.value : i.next();
                        });
                  }),
                  M(y),
                  (y[f] = "Generator"),
                  (y[o] = function() {
                    return this;
                  }),
                  (y.toString = function() {
                    return "[object Generator]";
                  }),
                  (c.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return (
                      t.reverse(),
                      function r() {
                        for (; t.length; ) {
                          var n = t.pop();
                          if (n in e) return (r.value = n), (r.done = !1), r;
                        }
                        return (r.done = !0), r;
                      }
                    );
                  }),
                  (c.values = P),
                  (R.prototype = {
                    constructor: R,
                    reset: function(e) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = r),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = r),
                        this.tryEntries.forEach(L),
                        !e)
                      )
                        for (var t in this)
                          "t" === t.charAt(0) &&
                            i.call(this, t) &&
                            !isNaN(+t.slice(1)) &&
                            (this[t] = r);
                    },
                    stop: function() {
                      this.done = !0;
                      var e = this.tryEntries[0].completion;
                      if ("throw" === e.type) throw e.arg;
                      return this.rval;
                    },
                    dispatchException: function(e) {
                      if (this.done) throw e;
                      var t = this;
                      function n(n, i) {
                        return (
                          (s.type = "throw"),
                          (s.arg = e),
                          (t.next = n),
                          i && ((t.method = "next"), (t.arg = r)),
                          !!i
                        );
                      }
                      for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var o = this.tryEntries[a],
                          s = o.completion;
                        if ("root" === o.tryLoc) return n("end");
                        if (o.tryLoc <= this.prev) {
                          var f = i.call(o, "catchLoc"),
                            u = i.call(o, "finallyLoc");
                          if (f && u) {
                            if (this.prev < o.catchLoc)
                              return n(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc)
                              return n(o.finallyLoc);
                          } else if (f) {
                            if (this.prev < o.catchLoc)
                              return n(o.catchLoc, !0);
                          } else {
                            if (!u)
                              throw new Error(
                                "try statement without catch or finally"
                              );
                            if (this.prev < o.finallyLoc)
                              return n(o.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function(e, t) {
                      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r];
                        if (
                          n.tryLoc <= this.prev &&
                          i.call(n, "finallyLoc") &&
                          this.prev < n.finallyLoc
                        ) {
                          var a = n;
                          break;
                        }
                      }
                      a &&
                        ("break" === e || "continue" === e) &&
                        a.tryLoc <= t &&
                        t <= a.finallyLoc &&
                        (a = null);
                      var o = a ? a.completion : {};
                      return (
                        (o.type = e),
                        (o.arg = t),
                        a
                          ? ((this.method = "next"),
                            (this.next = a.finallyLoc),
                            b)
                          : this.complete(o)
                      );
                    },
                    complete: function(e, t) {
                      if ("throw" === e.type) throw e.arg;
                      return (
                        "break" === e.type || "continue" === e.type
                          ? (this.next = e.arg)
                          : "return" === e.type
                          ? ((this.rval = this.arg = e.arg),
                            (this.method = "return"),
                            (this.next = "end"))
                          : "normal" === e.type && t && (this.next = t),
                        b
                      );
                    },
                    finish: function(e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                          return (
                            this.complete(r.completion, r.afterLoc), L(r), b
                          );
                      }
                    },
                    catch: function(e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                          var n = r.completion;
                          if ("throw" === n.type) {
                            var i = n.arg;
                            L(r);
                          }
                          return i;
                        }
                      }
                      throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                      return (
                        (this.delegate = {
                          iterator: P(e),
                          resultName: t,
                          nextLoc: n
                        }),
                        "next" === this.method && (this.arg = r),
                        b
                      );
                    }
                  });
              }
              function _(e, t, r, n) {
                var i = t && t.prototype instanceof E ? t : E,
                  a = Object.create(i.prototype),
                  o = new R(n || []);
                return (
                  (a._invoke = (function(e, t, r) {
                    var n = d;
                    return function(i, a) {
                      if (n === l)
                        throw new Error("Generator is already running");
                      if (n === p) {
                        if ("throw" === i) throw a;
                        return k();
                      }
                      for (r.method = i, r.arg = a; ; ) {
                        var o = r.delegate;
                        if (o) {
                          var s = x(o, r);
                          if (s) {
                            if (s === b) continue;
                            return s;
                          }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                          if (n === d) throw ((n = p), r.arg);
                          r.dispatchException(r.arg);
                        } else
                          "return" === r.method && r.abrupt("return", r.arg);
                        n = l;
                        var f = w(e, t, r);
                        if ("normal" === f.type) {
                          if (((n = r.done ? p : h), f.arg === b)) continue;
                          return { value: f.arg, done: r.done };
                        }
                        "throw" === f.type &&
                          ((n = p), (r.method = "throw"), (r.arg = f.arg));
                      }
                    };
                  })(e, r, o)),
                  a
                );
              }
              function w(e, t, r) {
                try {
                  return { type: "normal", arg: e.call(t, r) };
                } catch (e) {
                  return { type: "throw", arg: e };
                }
              }
              function E() {}
              function A() {}
              function S() {}
              function M(e) {
                ["next", "throw", "return"].forEach(function(t) {
                  e[t] = function(e) {
                    return this._invoke(t, e);
                  };
                });
              }
              function I(e) {
                var t;
                this._invoke = function(r, n) {
                  function a() {
                    return new Promise(function(t, a) {
                      !(function t(r, n, a, o) {
                        var s = w(e[r], e, n);
                        if ("throw" !== s.type) {
                          var f = s.arg,
                            u = f.value;
                          return u &&
                            "object" == typeof u &&
                            i.call(u, "__await")
                            ? Promise.resolve(u.__await).then(
                                function(e) {
                                  t("next", e, a, o);
                                },
                                function(e) {
                                  t("throw", e, a, o);
                                }
                              )
                            : Promise.resolve(u).then(function(e) {
                                (f.value = e), a(f);
                              }, o);
                        }
                        o(s.arg);
                      })(r, n, t, a);
                    });
                  }
                  return (t = t ? t.then(a, a) : a());
                };
              }
              function x(e, t) {
                var n = e.iterator[t.method];
                if (n === r) {
                  if (((t.delegate = null), "throw" === t.method)) {
                    if (
                      e.iterator.return &&
                      ((t.method = "return"),
                      (t.arg = r),
                      x(e, t),
                      "throw" === t.method)
                    )
                      return b;
                    (t.method = "throw"),
                      (t.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                      ));
                  }
                  return b;
                }
                var i = w(n, e.iterator, t.arg);
                if ("throw" === i.type)
                  return (
                    (t.method = "throw"),
                    (t.arg = i.arg),
                    (t.delegate = null),
                    b
                  );
                var a = i.arg;
                return a
                  ? a.done
                    ? ((t[e.resultName] = a.value),
                      (t.next = e.nextLoc),
                      "return" !== t.method &&
                        ((t.method = "next"), (t.arg = r)),
                      (t.delegate = null),
                      b)
                    : a
                  : ((t.method = "throw"),
                    (t.arg = new TypeError("iterator result is not an object")),
                    (t.delegate = null),
                    b);
              }
              function T(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                  2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                  this.tryEntries.push(t);
              }
              function L(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
              }
              function R(e) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                  e.forEach(T, this),
                  this.reset(!0);
              }
              function P(e) {
                if (e) {
                  var t = e[o];
                  if (t) return t.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                    var n = -1,
                      a = function t() {
                        for (; ++n < e.length; )
                          if (i.call(e, n))
                            return (t.value = e[n]), (t.done = !1), t;
                        return (t.value = r), (t.done = !0), t;
                      };
                    return (a.next = a);
                  }
                }
                return { next: k };
              }
              function k() {
                return { value: r, done: !0 };
              }
            })(
              (function() {
                return this;
              })() || Function("return this")()
            );
          },
          function(e, t, r) {
            r(118), (e.exports = r(1).Object.keys);
          },
          function(e, t, r) {
            var n = r(28),
              i = r(25);
            r(119)("keys", function() {
              return function(e) {
                return i(n(e));
              };
            });
          },
          function(e, t, r) {
            var n = r(8),
              i = r(1),
              a = r(18);
            e.exports = function(e, t) {
              var r = (i.Object || {})[e] || Object[e],
                o = {};
              (o[e] = t(r)),
                n(
                  n.S +
                    n.F *
                      a(function() {
                        r(1);
                      }),
                  "Object",
                  o
                );
            };
          },
          function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = a(r(121)),
              i = a(r(131));
            function a(e) {
              return e && e.__esModule ? e : { default: e };
            }
            t.default = function(e, t) {
              if (Array.isArray(e)) return e;
              if ((0, n.default)(Object(e)))
                return (function(e, t) {
                  var r = [],
                    n = !0,
                    a = !1,
                    o = void 0;
                  try {
                    for (
                      var s, f = (0, i.default)(e);
                      !(n = (s = f.next()).done) &&
                      (r.push(s.value), !t || r.length !== t);
                      n = !0
                    );
                  } catch (e) {
                    (a = !0), (o = e);
                  } finally {
                    try {
                      !n && f.return && f.return();
                    } finally {
                      if (a) throw o;
                    }
                  }
                  return r;
                })(e, t);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          },
          function(e, t, r) {
            e.exports = { default: r(122), __esModule: !0 };
          },
          function(e, t, r) {
            r(35), r(29), (e.exports = r(130));
          },
          function(e, t, r) {
            "use strict";
            var n = r(124),
              i = r(125),
              a = r(20),
              o = r(19);
            (e.exports = r(68)(
              Array,
              "Array",
              function(e, t) {
                (this._t = o(e)), (this._i = 0), (this._k = t);
              },
              function() {
                var e = this._t,
                  t = this._k,
                  r = this._i++;
                return !e || r >= e.length
                  ? ((this._t = void 0), i(1))
                  : i(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]]);
              },
              "values"
            )),
              (a.Arguments = a.Array),
              n("keys"),
              n("values"),
              n("entries");
          },
          function(e, t) {
            e.exports = function() {};
          },
          function(e, t) {
            e.exports = function(e, t) {
              return { value: t, done: !!e };
            };
          },
          function(e, t, r) {
            "use strict";
            var n = r(70),
              i = r(24),
              a = r(36),
              o = {};
            r(13)(o, r(4)("iterator"), function() {
              return this;
            }),
              (e.exports = function(e, t, r) {
                (e.prototype = n(o, { next: i(1, r) })), a(e, t + " Iterator");
              });
          },
          function(e, t, r) {
            var n = r(9),
              i = r(10),
              a = r(25);
            e.exports = r(11)
              ? Object.defineProperties
              : function(e, t) {
                  i(e);
                  for (var r, o = a(t), s = o.length, f = 0; s > f; )
                    n.f(e, (r = o[f++]), t[r]);
                  return e;
                };
          },
          function(e, t, r) {
            var n = r(15),
              i = r(28),
              a = r(45)("IE_PROTO"),
              o = Object.prototype;
            e.exports =
              Object.getPrototypeOf ||
              function(e) {
                return (
                  (e = i(e)),
                  n(e, a)
                    ? e[a]
                    : "function" == typeof e.constructor &&
                      e instanceof e.constructor
                    ? e.constructor.prototype
                    : e instanceof Object
                    ? o
                    : null
                );
              };
          },
          function(e, t, r) {
            var n = r(44),
              i = r(42);
            e.exports = function(e) {
              return function(t, r) {
                var a,
                  o,
                  s = String(i(t)),
                  f = n(r),
                  u = s.length;
                return f < 0 || f >= u
                  ? e
                    ? ""
                    : void 0
                  : (a = s.charCodeAt(f)) < 55296 ||
                    a > 56319 ||
                    f + 1 === u ||
                    (o = s.charCodeAt(f + 1)) < 56320 ||
                    o > 57343
                  ? e
                    ? s.charAt(f)
                    : a
                  : e
                  ? s.slice(f, f + 2)
                  : o - 56320 + ((a - 55296) << 10) + 65536;
              };
            };
          },
          function(e, t, r) {
            var n = r(49),
              i = r(4)("iterator"),
              a = r(20);
            e.exports = r(1).isIterable = function(e) {
              var t = Object(e);
              return (
                void 0 !== t[i] || "@@iterator" in t || a.hasOwnProperty(n(t))
              );
            };
          },
          function(e, t, r) {
            e.exports = { default: r(132), __esModule: !0 };
          },
          function(e, t, r) {
            r(35), r(29), (e.exports = r(133));
          },
          function(e, t, r) {
            var n = r(10),
              i = r(50);
            e.exports = r(1).getIterator = function(e) {
              var t = i(e);
              if ("function" != typeof t)
                throw TypeError(e + " is not iterable!");
              return n(t.call(e));
            };
          },
          function(e, t, r) {
            r(75),
              r(29),
              r(35),
              r(135),
              r(143),
              r(144),
              (e.exports = r(1).Promise);
          },
          function(e, t, r) {
            "use strict";
            var n,
              i,
              a,
              o,
              s = r(27),
              f = r(3),
              u = r(23),
              c = r(49),
              d = r(8),
              h = r(14),
              l = r(32),
              p = r(136),
              b = r(137),
              m = r(78),
              v = r(79).set,
              g = r(139)(),
              y = r(51),
              _ = r(80),
              w = r(140),
              E = r(81),
              A = f.TypeError,
              S = f.process,
              M = S && S.versions,
              I = (M && M.v8) || "",
              x = f.Promise,
              T = "process" == c(S),
              L = function() {},
              R = (i = y.f),
              P = !!(function() {
                try {
                  var e = x.resolve(1),
                    t = ((e.constructor = {})[r(4)("species")] = function(e) {
                      e(L, L);
                    });
                  return (
                    (T || "function" == typeof PromiseRejectionEvent) &&
                    e.then(L) instanceof t &&
                    0 !== I.indexOf("6.6") &&
                    -1 === w.indexOf("Chrome/66")
                  );
                } catch (e) {}
              })(),
              k = function(e) {
                var t;
                return !(!h(e) || "function" != typeof (t = e.then)) && t;
              },
              N = function(e, t) {
                if (!e._n) {
                  e._n = !0;
                  var r = e._c;
                  g(function() {
                    for (
                      var n = e._v,
                        i = 1 == e._s,
                        a = 0,
                        o = function(t) {
                          var r,
                            a,
                            o,
                            s = i ? t.ok : t.fail,
                            f = t.resolve,
                            u = t.reject,
                            c = t.domain;
                          try {
                            s
                              ? (i || (2 == e._h && B(e), (e._h = 1)),
                                !0 === s
                                  ? (r = n)
                                  : (c && c.enter(),
                                    (r = s(n)),
                                    c && (c.exit(), (o = !0))),
                                r === t.promise
                                  ? u(A("Promise-chain cycle"))
                                  : (a = k(r))
                                  ? a.call(r, f, u)
                                  : f(r))
                              : u(n);
                          } catch (e) {
                            c && !o && c.exit(), u(e);
                          }
                        };
                      r.length > a;

                    )
                      o(r[a++]);
                    (e._c = []), (e._n = !1), t && !e._h && O(e);
                  });
                }
              },
              O = function(e) {
                v.call(f, function() {
                  var t,
                    r,
                    n,
                    i = e._v,
                    a = C(e);
                  if (
                    (a &&
                      ((t = _(function() {
                        T
                          ? S.emit("unhandledRejection", i, e)
                          : (r = f.onunhandledrejection)
                          ? r({ promise: e, reason: i })
                          : (n = f.console) &&
                            n.error &&
                            n.error("Unhandled promise rejection", i);
                      })),
                      (e._h = T || C(e) ? 2 : 1)),
                    (e._a = void 0),
                    a && t.e)
                  )
                    throw t.v;
                });
              },
              C = function(e) {
                return 1 !== e._h && 0 === (e._a || e._c).length;
              },
              B = function(e) {
                v.call(f, function() {
                  var t;
                  T
                    ? S.emit("rejectionHandled", e)
                    : (t = f.onrejectionhandled) &&
                      t({ promise: e, reason: e._v });
                });
              },
              j = function(e) {
                var t = this;
                t._d ||
                  ((t._d = !0),
                  ((t = t._w || t)._v = e),
                  (t._s = 2),
                  t._a || (t._a = t._c.slice()),
                  N(t, !0));
              },
              D = function e(t) {
                var r,
                  n = this;
                if (!n._d) {
                  (n._d = !0), (n = n._w || n);
                  try {
                    if (n === t) throw A("Promise can't be resolved itself");
                    (r = k(t))
                      ? g(function() {
                          var i = { _w: n, _d: !1 };
                          try {
                            r.call(t, u(e, i, 1), u(j, i, 1));
                          } catch (t) {
                            j.call(i, t);
                          }
                        })
                      : ((n._v = t), (n._s = 1), N(n, !1));
                  } catch (t) {
                    j.call({ _w: n, _d: !1 }, t);
                  }
                }
              };
            P ||
              ((x = function(e) {
                p(this, x, "Promise", "_h"), l(e), n.call(this);
                try {
                  e(u(D, this, 1), u(j, this, 1));
                } catch (e) {
                  j.call(this, e);
                }
              }),
              ((n = function(e) {
                (this._c = []),
                  (this._a = void 0),
                  (this._s = 0),
                  (this._d = !1),
                  (this._v = void 0),
                  (this._h = 0),
                  (this._n = !1);
              }).prototype = r(141)(x.prototype, {
                then: function(e, t) {
                  var r = R(m(this, x));
                  return (
                    (r.ok = "function" != typeof e || e),
                    (r.fail = "function" == typeof t && t),
                    (r.domain = T ? S.domain : void 0),
                    this._c.push(r),
                    this._a && this._a.push(r),
                    this._s && N(this, !1),
                    r.promise
                  );
                },
                catch: function(e) {
                  return this.then(void 0, e);
                }
              })),
              (a = function() {
                var e = new n();
                (this.promise = e),
                  (this.resolve = u(D, e, 1)),
                  (this.reject = u(j, e, 1));
              }),
              (y.f = R = function(e) {
                return e === x || e === o ? new a(e) : i(e);
              })),
              d(d.G + d.W + d.F * !P, { Promise: x }),
              r(36)(x, "Promise"),
              r(142)("Promise"),
              (o = r(1).Promise),
              d(d.S + d.F * !P, "Promise", {
                reject: function(e) {
                  var t = R(this);
                  return (0, t.reject)(e), t.promise;
                }
              }),
              d(d.S + d.F * (s || !P), "Promise", {
                resolve: function(e) {
                  return E(s && this === o ? x : this, e);
                }
              }),
              d(
                d.S +
                  d.F *
                    !(
                      P &&
                      r(82)(function(e) {
                        x.all(e).catch(L);
                      })
                    ),
                "Promise",
                {
                  all: function(e) {
                    var t = this,
                      r = R(t),
                      n = r.resolve,
                      i = r.reject,
                      a = _(function() {
                        var r = [],
                          a = 0,
                          o = 1;
                        b(e, !1, function(e) {
                          var s = a++,
                            f = !1;
                          r.push(void 0),
                            o++,
                            t.resolve(e).then(function(e) {
                              f || ((f = !0), (r[s] = e), --o || n(r));
                            }, i);
                        }),
                          --o || n(r);
                      });
                    return a.e && i(a.v), r.promise;
                  },
                  race: function(e) {
                    var t = this,
                      r = R(t),
                      n = r.reject,
                      i = _(function() {
                        b(e, !1, function(e) {
                          t.resolve(e).then(r.resolve, n);
                        });
                      });
                    return i.e && n(i.v), r.promise;
                  }
                }
              );
          },
          function(e, t) {
            e.exports = function(e, t, r, n) {
              if (!(e instanceof t) || (void 0 !== n && n in e))
                throw TypeError(r + ": incorrect invocation!");
              return e;
            };
          },
          function(e, t, r) {
            var n = r(23),
              i = r(76),
              a = r(77),
              o = r(10),
              s = r(43),
              f = r(50),
              u = {},
              c = {};
            ((t = e.exports = function(e, t, r, d, h) {
              var l,
                p,
                b,
                m,
                v = h
                  ? function() {
                      return e;
                    }
                  : f(e),
                g = n(r, d, t ? 2 : 1),
                y = 0;
              if ("function" != typeof v)
                throw TypeError(e + " is not iterable!");
              if (a(v)) {
                for (l = s(e.length); l > y; y++)
                  if (
                    (m = t ? g(o((p = e[y]))[0], p[1]) : g(e[y])) === u ||
                    m === c
                  )
                    return m;
              } else
                for (b = v.call(e); !(p = b.next()).done; )
                  if ((m = i(b, g, p.value, t)) === u || m === c) return m;
            }).BREAK = u),
              (t.RETURN = c);
          },
          function(e, t) {
            e.exports = function(e, t, r) {
              var n = void 0 === r;
              switch (t.length) {
                case 0:
                  return n ? e() : e.call(r);
                case 1:
                  return n ? e(t[0]) : e.call(r, t[0]);
                case 2:
                  return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
                case 3:
                  return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
                case 4:
                  return n
                    ? e(t[0], t[1], t[2], t[3])
                    : e.call(r, t[0], t[1], t[2], t[3]);
              }
              return e.apply(r, t);
            };
          },
          function(e, t, r) {
            var n = r(3),
              i = r(79).set,
              a = n.MutationObserver || n.WebKitMutationObserver,
              o = n.process,
              s = n.Promise,
              f = "process" == r(26)(o);
            e.exports = function() {
              var e,
                t,
                r,
                u = function() {
                  var n, i;
                  for (f && (n = o.domain) && n.exit(); e; ) {
                    (i = e.fn), (e = e.next);
                    try {
                      i();
                    } catch (n) {
                      throw (e ? r() : (t = void 0), n);
                    }
                  }
                  (t = void 0), n && n.enter();
                };
              if (f)
                r = function() {
                  o.nextTick(u);
                };
              else if (!a || (n.navigator && n.navigator.standalone))
                if (s && s.resolve) {
                  var c = s.resolve(void 0);
                  r = function() {
                    c.then(u);
                  };
                } else
                  r = function() {
                    i.call(n, u);
                  };
              else {
                var d = !0,
                  h = document.createTextNode("");
                new a(u).observe(h, { characterData: !0 }),
                  (r = function() {
                    h.data = d = !d;
                  });
              }
              return function(n) {
                var i = { fn: n, next: void 0 };
                t && (t.next = i), e || ((e = i), r()), (t = i);
              };
            };
          },
          function(e, t, r) {
            var n = r(3).navigator;
            e.exports = (n && n.userAgent) || "";
          },
          function(e, t, r) {
            var n = r(13);
            e.exports = function(e, t, r) {
              for (var i in t) r && e[i] ? (e[i] = t[i]) : n(e, i, t[i]);
              return e;
            };
          },
          function(e, t, r) {
            "use strict";
            var n = r(3),
              i = r(1),
              a = r(9),
              o = r(11),
              s = r(4)("species");
            e.exports = function(e) {
              var t = "function" == typeof i[e] ? i[e] : n[e];
              o &&
                t &&
                !t[s] &&
                a.f(t, s, {
                  configurable: !0,
                  get: function() {
                    return this;
                  }
                });
            };
          },
          function(e, t, r) {
            "use strict";
            var n = r(8),
              i = r(1),
              a = r(3),
              o = r(78),
              s = r(81);
            n(n.P + n.R, "Promise", {
              finally: function(e) {
                var t = o(this, i.Promise || a.Promise),
                  r = "function" == typeof e;
                return this.then(
                  r
                    ? function(r) {
                        return s(t, e()).then(function() {
                          return r;
                        });
                      }
                    : e,
                  r
                    ? function(r) {
                        return s(t, e()).then(function() {
                          throw r;
                        });
                      }
                    : e
                );
              }
            });
          },
          function(e, t, r) {
            "use strict";
            var n = r(8),
              i = r(51),
              a = r(80);
            n(n.S, "Promise", {
              try: function(e) {
                var t = i.f(this),
                  r = a(e);
                return (r.e ? t.reject : t.resolve)(r.v), t.promise;
              }
            });
          },
          function(e, t, r) {
            e.exports = { default: r(146), __esModule: !0 };
          },
          function(e, t, r) {
            r(29), r(35), (e.exports = r(52).f("iterator"));
          },
          function(e, t, r) {
            e.exports = { default: r(148), __esModule: !0 };
          },
          function(e, t, r) {
            r(149), r(75), r(155), r(156), (e.exports = r(1).Symbol);
          },
          function(e, t, r) {
            "use strict";
            var n = r(3),
              i = r(15),
              a = r(11),
              o = r(8),
              s = r(69),
              f = r(150).KEY,
              u = r(18),
              c = r(46),
              d = r(36),
              h = r(33),
              l = r(4),
              p = r(52),
              b = r(53),
              m = r(151),
              v = r(152),
              g = r(10),
              y = r(14),
              _ = r(28),
              w = r(19),
              E = r(41),
              A = r(24),
              S = r(70),
              M = r(153),
              I = r(154),
              x = r(48),
              T = r(9),
              L = r(25),
              R = I.f,
              P = T.f,
              k = M.f,
              N = n.Symbol,
              O = n.JSON,
              C = O && O.stringify,
              B = l("_hidden"),
              j = l("toPrimitive"),
              D = {}.propertyIsEnumerable,
              U = c("symbol-registry"),
              V = c("symbols"),
              z = c("op-symbols"),
              Y = Object.prototype,
              q = "function" == typeof N && !!x.f,
              F = n.QObject,
              K = !F || !F.prototype || !F.prototype.findChild,
              W =
                a &&
                u(function() {
                  return (
                    7 !=
                    S(
                      P({}, "a", {
                        get: function() {
                          return P(this, "a", { value: 7 }).a;
                        }
                      })
                    ).a
                  );
                })
                  ? function(e, t, r) {
                      var n = R(Y, t);
                      n && delete Y[t], P(e, t, r), n && e !== Y && P(Y, t, n);
                    }
                  : P,
              G = function(e) {
                var t = (V[e] = S(N.prototype));
                return (t._k = e), t;
              },
              H =
                q && "symbol" == typeof N.iterator
                  ? function(e) {
                      return "symbol" == typeof e;
                    }
                  : function(e) {
                      return e instanceof N;
                    },
              Z = function e(t, r, n) {
                return (
                  t === Y && e(z, r, n),
                  g(t),
                  (r = E(r, !0)),
                  g(n),
                  i(V, r)
                    ? (n.enumerable
                        ? (i(t, B) && t[B][r] && (t[B][r] = !1),
                          (n = S(n, { enumerable: A(0, !1) })))
                        : (i(t, B) || P(t, B, A(1, {})), (t[B][r] = !0)),
                      W(t, r, n))
                    : P(t, r, n)
                );
              },
              J = function(e, t) {
                g(e);
                for (var r, n = m((t = w(t))), i = 0, a = n.length; a > i; )
                  Z(e, (r = n[i++]), t[r]);
                return e;
              },
              X = function(e) {
                var t = D.call(this, (e = E(e, !0)));
                return (
                  !(this === Y && i(V, e) && !i(z, e)) &&
                  (!(
                    t ||
                    !i(this, e) ||
                    !i(V, e) ||
                    (i(this, B) && this[B][e])
                  ) ||
                    t)
                );
              },
              Q = function(e, t) {
                if (
                  ((e = w(e)), (t = E(t, !0)), e !== Y || !i(V, t) || i(z, t))
                ) {
                  var r = R(e, t);
                  return (
                    !r ||
                      !i(V, t) ||
                      (i(e, B) && e[B][t]) ||
                      (r.enumerable = !0),
                    r
                  );
                }
              },
              $ = function(e) {
                for (var t, r = k(w(e)), n = [], a = 0; r.length > a; )
                  i(V, (t = r[a++])) || t == B || t == f || n.push(t);
                return n;
              },
              ee = function(e) {
                for (
                  var t, r = e === Y, n = k(r ? z : w(e)), a = [], o = 0;
                  n.length > o;

                )
                  !i(V, (t = n[o++])) || (r && !i(Y, t)) || a.push(V[t]);
                return a;
              };
            q ||
              (s(
                (N = function() {
                  if (this instanceof N)
                    throw TypeError("Symbol is not a constructor!");
                  var e = h(arguments.length > 0 ? arguments[0] : void 0),
                    t = function t(r) {
                      this === Y && t.call(z, r),
                        i(this, B) && i(this[B], e) && (this[B][e] = !1),
                        W(this, e, A(1, r));
                    };
                  return a && K && W(Y, e, { configurable: !0, set: t }), G(e);
                }).prototype,
                "toString",
                function() {
                  return this._k;
                }
              ),
              (I.f = Q),
              (T.f = Z),
              (r(84).f = M.f = $),
              (r(34).f = X),
              (x.f = ee),
              a && !r(27) && s(Y, "propertyIsEnumerable", X, !0),
              (p.f = function(e) {
                return G(l(e));
              })),
              o(o.G + o.W + o.F * !q, { Symbol: N });
            for (
              var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                  ","
                ),
                re = 0;
              te.length > re;

            )
              l(te[re++]);
            for (var ne = L(l.store), ie = 0; ne.length > ie; ) b(ne[ie++]);
            o(o.S + o.F * !q, "Symbol", {
              for: function(e) {
                return i(U, (e += "")) ? U[e] : (U[e] = N(e));
              },
              keyFor: function(e) {
                if (!H(e)) throw TypeError(e + " is not a symbol!");
                for (var t in U) if (U[t] === e) return t;
              },
              useSetter: function() {
                K = !0;
              },
              useSimple: function() {
                K = !1;
              }
            }),
              o(o.S + o.F * !q, "Object", {
                create: function(e, t) {
                  return void 0 === t ? S(e) : J(S(e), t);
                },
                defineProperty: Z,
                defineProperties: J,
                getOwnPropertyDescriptor: Q,
                getOwnPropertyNames: $,
                getOwnPropertySymbols: ee
              });
            var ae = u(function() {
              x.f(1);
            });
            o(o.S + o.F * ae, "Object", {
              getOwnPropertySymbols: function(e) {
                return x.f(_(e));
              }
            }),
              O &&
                o(
                  o.S +
                    o.F *
                      (!q ||
                        u(function() {
                          var e = N();
                          return (
                            "[null]" != C([e]) ||
                            "{}" != C({ a: e }) ||
                            "{}" != C(Object(e))
                          );
                        })),
                  "JSON",
                  {
                    stringify: function(e) {
                      for (var t, r, n = [e], i = 1; arguments.length > i; )
                        n.push(arguments[i++]);
                      if (((r = t = n[1]), (y(t) || void 0 !== e) && !H(e)))
                        return (
                          v(t) ||
                            (t = function(e, t) {
                              if (
                                ("function" == typeof r &&
                                  (t = r.call(this, e, t)),
                                !H(t))
                              )
                                return t;
                            }),
                          (n[1] = t),
                          C.apply(O, n)
                        );
                    }
                  }
                ),
              N.prototype[j] || r(13)(N.prototype, j, N.prototype.valueOf),
              d(N, "Symbol"),
              d(Math, "Math", !0),
              d(n.JSON, "JSON", !0);
          },
          function(e, t, r) {
            var n = r(33)("meta"),
              i = r(14),
              a = r(15),
              o = r(9).f,
              s = 0,
              f =
                Object.isExtensible ||
                function() {
                  return !0;
                },
              u = !r(18)(function() {
                return f(Object.preventExtensions({}));
              }),
              c = function(e) {
                o(e, n, { value: { i: "O" + ++s, w: {} } });
              },
              d = (e.exports = {
                KEY: n,
                NEED: !1,
                fastKey: function(e, t) {
                  if (!i(e))
                    return "symbol" == typeof e
                      ? e
                      : ("string" == typeof e ? "S" : "P") + e;
                  if (!a(e, n)) {
                    if (!f(e)) return "F";
                    if (!t) return "E";
                    c(e);
                  }
                  return e[n].i;
                },
                getWeak: function(e, t) {
                  if (!a(e, n)) {
                    if (!f(e)) return !0;
                    if (!t) return !1;
                    c(e);
                  }
                  return e[n].w;
                },
                onFreeze: function(e) {
                  return u && d.NEED && f(e) && !a(e, n) && c(e), e;
                }
              });
          },
          function(e, t, r) {
            var n = r(25),
              i = r(48),
              a = r(34);
            e.exports = function(e) {
              var t = n(e),
                r = i.f;
              if (r)
                for (var o, s = r(e), f = a.f, u = 0; s.length > u; )
                  f.call(e, (o = s[u++])) && t.push(o);
              return t;
            };
          },
          function(e, t, r) {
            var n = r(26);
            e.exports =
              Array.isArray ||
              function(e) {
                return "Array" == n(e);
              };
          },
          function(e, t, r) {
            var n = r(19),
              i = r(84).f,
              a = {}.toString,
              o =
                "object" == typeof window &&
                window &&
                Object.getOwnPropertyNames
                  ? Object.getOwnPropertyNames(window)
                  : [];
            e.exports.f = function(e) {
              return o && "[object Window]" == a.call(e)
                ? (function(e) {
                    try {
                      return i(e);
                    } catch (e) {
                      return o.slice();
                    }
                  })(e)
                : i(n(e));
            };
          },
          function(e, t, r) {
            var n = r(34),
              i = r(24),
              a = r(19),
              o = r(41),
              s = r(15),
              f = r(63),
              u = Object.getOwnPropertyDescriptor;
            t.f = r(11)
              ? u
              : function(e, t) {
                  if (((e = a(e)), (t = o(t, !0)), f))
                    try {
                      return u(e, t);
                    } catch (e) {}
                  if (s(e, t)) return i(!n.f.call(e, t), e[t]);
                };
          },
          function(e, t, r) {
            r(53)("asyncIterator");
          },
          function(e, t, r) {
            r(53)("observable");
          },
          function(e, t, r) {
            r(158);
            var n = r(1).Object;
            e.exports = function(e, t, r) {
              return n.defineProperty(e, t, r);
            };
          },
          function(e, t, r) {
            var n = r(8);
            n(n.S + n.F * !r(11), "Object", { defineProperty: r(9).f });
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = o(r(88)),
              i = o(r(85)),
              a = o(r(86));
            function o(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var s = void 0;
            if ("undefined" != typeof window) {
              var f = window;
              s = f.WebSocket;
            } else s = r(161);
            var u = (function() {
              function e(t, r) {
                var n = this;
                (0, i.default)(this, e),
                  (this.address = t),
                  (this.open = !1),
                  (this.shouldClose = !1),
                  (this.queue = {}),
                  (this.notifications = function() {}),
                  (this.connect = function() {
                    var e = new s(t);
                    e.addEventListener("message", function(e) {
                      var t = JSON.parse(e.data);
                      if (n.queue[t[1].tag]) {
                        var r = (t[1].response && t[1].response.error) || null,
                          i = r ? null : t[1].response || null;
                        n.queue[t[1].tag](r, i);
                      } else n.notifications(null, t);
                    }),
                      e.addEventListener("open", function() {
                        n.shouldClose
                          ? (n.ws.close(), (n.shouldClose = !1))
                          : (n.open = !0);
                      }),
                      e.addEventListener("close", function() {
                        (n.open = !1),
                          r &&
                            ((n.ws = null),
                            setTimeout(function() {
                              n.connect();
                            }, 1e3));
                      }),
                      (n.ws = e);
                  }),
                  this.connect();
              }
              return (
                (0, a.default)(e, [
                  {
                    key: "subscribe",
                    value: function(e) {
                      this.notifications = e;
                    }
                  },
                  {
                    key: "send",
                    value: function(e) {
                      var t = this;
                      !(function e(t, r) {
                        setTimeout(function() {
                          1 === t.readyState ? null !== r && r() : e(t, r);
                        }, 5);
                      })(this.ws, function() {
                        t.ws.send((0, n.default)(e));
                      });
                    }
                  },
                  {
                    key: "close",
                    value: function() {
                      this.ws.readyState === s.CONNECTING
                        ? (this.shouldClose = !0)
                        : this.ws.close();
                    }
                  },
                  {
                    key: "request",
                    value: function(e, t, r) {
                      var n = { command: e };
                      t && (n.params = t),
                        (n.tag = Math.random()
                          .toString(36)
                          .substring(7)),
                        (this.queue[n.tag] = r),
                        this.send(["request", n]);
                    }
                  },
                  {
                    key: "justsaying",
                    value: function(e, t) {
                      var r = { subject: e };
                      t && (r.body = t), this.send(["justsaying", r]);
                    }
                  }
                ]),
                e
              );
            })();
            (t.default = u), (e.exports = t.default);
          },
          function(e, t, r) {
            var n = r(1),
              i = n.JSON || (n.JSON = { stringify: JSON.stringify });
            e.exports = function(e) {
              return i.stringify.apply(i, arguments);
            };
          },
          function(e, t, r) {
            "use strict";
            e.exports = function() {
              throw new Error(
                "ws does not work in the browser. Browser clients must use the native WebSocket object"
              );
            };
          },
          function(e, t, r) {
            (function(t) {
              var n = r(165);
              function i(e, t) {
                if (void 0 !== t && e[0] !== t)
                  throw new Error("Invalid network version");
                if (33 === e.length)
                  return {
                    version: e[0],
                    privateKey: e.slice(1, 33),
                    compressed: !1
                  };
                if (34 !== e.length) throw new Error("Invalid WIF length");
                if (1 !== e[33]) throw new Error("Invalid compression flag");
                return {
                  version: e[0],
                  privateKey: e.slice(1, 33),
                  compressed: !0
                };
              }
              function a(e, r, n) {
                var i = new t(n ? 34 : 33);
                return i.writeUInt8(e, 0), r.copy(i, 1), n && (i[33] = 1), i;
              }
              e.exports = {
                decode: function(e, t) {
                  return i(n.decode(e), t);
                },
                decodeRaw: i,
                encode: function(e, t, r) {
                  return "number" == typeof e
                    ? n.encode(a(e, t, r))
                    : n.encode(a(e.version, e.privateKey, e.compressed));
                },
                encodeRaw: a
              };
            }.call(this, r(12).Buffer));
          },
          function(e, t, r) {
            "use strict";
            (t.byteLength = function(e) {
              var t = u(e),
                r = t[0],
                n = t[1];
              return (3 * (r + n)) / 4 - n;
            }),
              (t.toByteArray = function(e) {
                var t,
                  r,
                  n = u(e),
                  o = n[0],
                  s = n[1],
                  f = new a(
                    (function(e, t, r) {
                      return (3 * (t + r)) / 4 - r;
                    })(0, o, s)
                  ),
                  c = 0,
                  d = s > 0 ? o - 4 : o;
                for (r = 0; r < d; r += 4)
                  (t =
                    (i[e.charCodeAt(r)] << 18) |
                    (i[e.charCodeAt(r + 1)] << 12) |
                    (i[e.charCodeAt(r + 2)] << 6) |
                    i[e.charCodeAt(r + 3)]),
                    (f[c++] = (t >> 16) & 255),
                    (f[c++] = (t >> 8) & 255),
                    (f[c++] = 255 & t);
                return (
                  2 === s &&
                    ((t =
                      (i[e.charCodeAt(r)] << 2) |
                      (i[e.charCodeAt(r + 1)] >> 4)),
                    (f[c++] = 255 & t)),
                  1 === s &&
                    ((t =
                      (i[e.charCodeAt(r)] << 10) |
                      (i[e.charCodeAt(r + 1)] << 4) |
                      (i[e.charCodeAt(r + 2)] >> 2)),
                    (f[c++] = (t >> 8) & 255),
                    (f[c++] = 255 & t)),
                  f
                );
              }),
              (t.fromByteArray = function(e) {
                for (
                  var t, r = e.length, i = r % 3, a = [], o = 0, s = r - i;
                  o < s;
                  o += 16383
                )
                  a.push(c(e, o, o + 16383 > s ? s : o + 16383));
                return (
                  1 === i
                    ? ((t = e[r - 1]),
                      a.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
                    : 2 === i &&
                      ((t = (e[r - 2] << 8) + e[r - 1]),
                      a.push(
                        n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="
                      )),
                  a.join("")
                );
              });
            for (
              var n = [],
                i = [],
                a = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                o =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                s = 0,
                f = o.length;
              s < f;
              ++s
            )
              (n[s] = o[s]), (i[o.charCodeAt(s)] = s);
            function u(e) {
              var t = e.length;
              if (t % 4 > 0)
                throw new Error(
                  "Invalid string. Length must be a multiple of 4"
                );
              var r = e.indexOf("=");
              return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
            }
            function c(e, t, r) {
              for (var i, a, o = [], s = t; s < r; s += 3)
                (i =
                  ((e[s] << 16) & 16711680) +
                  ((e[s + 1] << 8) & 65280) +
                  (255 & e[s + 2])),
                  o.push(
                    n[((a = i) >> 18) & 63] +
                      n[(a >> 12) & 63] +
                      n[(a >> 6) & 63] +
                      n[63 & a]
                  );
              return o.join("");
            }
            (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
          },
          function(e, t) {
            (t.read = function(e, t, r, n, i) {
              var a,
                o,
                s = 8 * i - n - 1,
                f = (1 << s) - 1,
                u = f >> 1,
                c = -7,
                d = r ? i - 1 : 0,
                h = r ? -1 : 1,
                l = e[t + d];
              for (
                d += h, a = l & ((1 << -c) - 1), l >>= -c, c += s;
                c > 0;
                a = 256 * a + e[t + d], d += h, c -= 8
              );
              for (
                o = a & ((1 << -c) - 1), a >>= -c, c += n;
                c > 0;
                o = 256 * o + e[t + d], d += h, c -= 8
              );
              if (0 === a) a = 1 - u;
              else {
                if (a === f) return o ? NaN : (1 / 0) * (l ? -1 : 1);
                (o += Math.pow(2, n)), (a -= u);
              }
              return (l ? -1 : 1) * o * Math.pow(2, a - n);
            }),
              (t.write = function(e, t, r, n, i, a) {
                var o,
                  s,
                  f,
                  u = 8 * a - i - 1,
                  c = (1 << u) - 1,
                  d = c >> 1,
                  h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                  l = n ? 0 : a - 1,
                  p = n ? 1 : -1,
                  b = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                for (
                  t = Math.abs(t),
                    isNaN(t) || t === 1 / 0
                      ? ((s = isNaN(t) ? 1 : 0), (o = c))
                      : ((o = Math.floor(Math.log(t) / Math.LN2)),
                        t * (f = Math.pow(2, -o)) < 1 && (o--, (f *= 2)),
                        (t += o + d >= 1 ? h / f : h * Math.pow(2, 1 - d)) *
                          f >=
                          2 && (o++, (f /= 2)),
                        o + d >= c
                          ? ((s = 0), (o = c))
                          : o + d >= 1
                          ? ((s = (t * f - 1) * Math.pow(2, i)), (o += d))
                          : ((s = t * Math.pow(2, d - 1) * Math.pow(2, i)),
                            (o = 0)));
                  i >= 8;
                  e[r + l] = 255 & s, l += p, s /= 256, i -= 8
                );
                for (
                  o = (o << i) | s, u += i;
                  u > 0;
                  e[r + l] = 255 & o, l += p, o /= 256, u -= 8
                );
                e[r + l - p] |= 128 * b;
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(54),
              i = r(185);
            e.exports = i(function(e) {
              var t = n("sha256")
                .update(e)
                .digest();
              return n("sha256")
                .update(t)
                .digest();
            });
          },
          function(e, t, r) {
            "use strict";
            var n = r(0),
              i = r(91),
              a = r(2).Buffer,
              o = new Array(16);
            function s() {
              i.call(this, 64),
                (this._a = 1732584193),
                (this._b = 4023233417),
                (this._c = 2562383102),
                (this._d = 271733878);
            }
            function f(e, t) {
              return (e << t) | (e >>> (32 - t));
            }
            function u(e, t, r, n, i, a, o) {
              return (f((e + ((t & r) | (~t & n)) + i + a) | 0, o) + t) | 0;
            }
            function c(e, t, r, n, i, a, o) {
              return (f((e + ((t & n) | (r & ~n)) + i + a) | 0, o) + t) | 0;
            }
            function d(e, t, r, n, i, a, o) {
              return (f((e + (t ^ r ^ n) + i + a) | 0, o) + t) | 0;
            }
            function h(e, t, r, n, i, a, o) {
              return (f((e + (r ^ (t | ~n)) + i + a) | 0, o) + t) | 0;
            }
            n(s, i),
              (s.prototype._update = function() {
                for (var e = o, t = 0; t < 16; ++t)
                  e[t] = this._block.readInt32LE(4 * t);
                var r = this._a,
                  n = this._b,
                  i = this._c,
                  a = this._d;
                (r = u(r, n, i, a, e[0], 3614090360, 7)),
                  (a = u(a, r, n, i, e[1], 3905402710, 12)),
                  (i = u(i, a, r, n, e[2], 606105819, 17)),
                  (n = u(n, i, a, r, e[3], 3250441966, 22)),
                  (r = u(r, n, i, a, e[4], 4118548399, 7)),
                  (a = u(a, r, n, i, e[5], 1200080426, 12)),
                  (i = u(i, a, r, n, e[6], 2821735955, 17)),
                  (n = u(n, i, a, r, e[7], 4249261313, 22)),
                  (r = u(r, n, i, a, e[8], 1770035416, 7)),
                  (a = u(a, r, n, i, e[9], 2336552879, 12)),
                  (i = u(i, a, r, n, e[10], 4294925233, 17)),
                  (n = u(n, i, a, r, e[11], 2304563134, 22)),
                  (r = u(r, n, i, a, e[12], 1804603682, 7)),
                  (a = u(a, r, n, i, e[13], 4254626195, 12)),
                  (i = u(i, a, r, n, e[14], 2792965006, 17)),
                  (r = c(
                    r,
                    (n = u(n, i, a, r, e[15], 1236535329, 22)),
                    i,
                    a,
                    e[1],
                    4129170786,
                    5
                  )),
                  (a = c(a, r, n, i, e[6], 3225465664, 9)),
                  (i = c(i, a, r, n, e[11], 643717713, 14)),
                  (n = c(n, i, a, r, e[0], 3921069994, 20)),
                  (r = c(r, n, i, a, e[5], 3593408605, 5)),
                  (a = c(a, r, n, i, e[10], 38016083, 9)),
                  (i = c(i, a, r, n, e[15], 3634488961, 14)),
                  (n = c(n, i, a, r, e[4], 3889429448, 20)),
                  (r = c(r, n, i, a, e[9], 568446438, 5)),
                  (a = c(a, r, n, i, e[14], 3275163606, 9)),
                  (i = c(i, a, r, n, e[3], 4107603335, 14)),
                  (n = c(n, i, a, r, e[8], 1163531501, 20)),
                  (r = c(r, n, i, a, e[13], 2850285829, 5)),
                  (a = c(a, r, n, i, e[2], 4243563512, 9)),
                  (i = c(i, a, r, n, e[7], 1735328473, 14)),
                  (r = d(
                    r,
                    (n = c(n, i, a, r, e[12], 2368359562, 20)),
                    i,
                    a,
                    e[5],
                    4294588738,
                    4
                  )),
                  (a = d(a, r, n, i, e[8], 2272392833, 11)),
                  (i = d(i, a, r, n, e[11], 1839030562, 16)),
                  (n = d(n, i, a, r, e[14], 4259657740, 23)),
                  (r = d(r, n, i, a, e[1], 2763975236, 4)),
                  (a = d(a, r, n, i, e[4], 1272893353, 11)),
                  (i = d(i, a, r, n, e[7], 4139469664, 16)),
                  (n = d(n, i, a, r, e[10], 3200236656, 23)),
                  (r = d(r, n, i, a, e[13], 681279174, 4)),
                  (a = d(a, r, n, i, e[0], 3936430074, 11)),
                  (i = d(i, a, r, n, e[3], 3572445317, 16)),
                  (n = d(n, i, a, r, e[6], 76029189, 23)),
                  (r = d(r, n, i, a, e[9], 3654602809, 4)),
                  (a = d(a, r, n, i, e[12], 3873151461, 11)),
                  (i = d(i, a, r, n, e[15], 530742520, 16)),
                  (r = h(
                    r,
                    (n = d(n, i, a, r, e[2], 3299628645, 23)),
                    i,
                    a,
                    e[0],
                    4096336452,
                    6
                  )),
                  (a = h(a, r, n, i, e[7], 1126891415, 10)),
                  (i = h(i, a, r, n, e[14], 2878612391, 15)),
                  (n = h(n, i, a, r, e[5], 4237533241, 21)),
                  (r = h(r, n, i, a, e[12], 1700485571, 6)),
                  (a = h(a, r, n, i, e[3], 2399980690, 10)),
                  (i = h(i, a, r, n, e[10], 4293915773, 15)),
                  (n = h(n, i, a, r, e[1], 2240044497, 21)),
                  (r = h(r, n, i, a, e[8], 1873313359, 6)),
                  (a = h(a, r, n, i, e[15], 4264355552, 10)),
                  (i = h(i, a, r, n, e[6], 2734768916, 15)),
                  (n = h(n, i, a, r, e[13], 1309151649, 21)),
                  (r = h(r, n, i, a, e[4], 4149444226, 6)),
                  (a = h(a, r, n, i, e[11], 3174756917, 10)),
                  (i = h(i, a, r, n, e[2], 718787259, 15)),
                  (n = h(n, i, a, r, e[9], 3951481745, 21)),
                  (this._a = (this._a + r) | 0),
                  (this._b = (this._b + n) | 0),
                  (this._c = (this._c + i) | 0),
                  (this._d = (this._d + a) | 0);
              }),
              (s.prototype._digest = function() {
                (this._block[this._blockOffset++] = 128),
                  this._blockOffset > 56 &&
                    (this._block.fill(0, this._blockOffset, 64),
                    this._update(),
                    (this._blockOffset = 0)),
                  this._block.fill(0, this._blockOffset, 56),
                  this._block.writeUInt32LE(this._length[0], 56),
                  this._block.writeUInt32LE(this._length[1], 60),
                  this._update();
                var e = a.allocUnsafe(16);
                return (
                  e.writeInt32LE(this._a, 0),
                  e.writeInt32LE(this._b, 4),
                  e.writeInt32LE(this._c, 8),
                  e.writeInt32LE(this._d, 12),
                  e
                );
              }),
              (e.exports = s);
          },
          function(e, t) {},
          function(e, t, r) {
            "use strict";
            var n = r(57).Buffer,
              i = r(169);
            (e.exports = (function() {
              function e() {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.head = null),
                  (this.tail = null),
                  (this.length = 0);
              }
              return (
                (e.prototype.push = function(e) {
                  var t = { data: e, next: null };
                  this.length > 0 ? (this.tail.next = t) : (this.head = t),
                    (this.tail = t),
                    ++this.length;
                }),
                (e.prototype.unshift = function(e) {
                  var t = { data: e, next: this.head };
                  0 === this.length && (this.tail = t),
                    (this.head = t),
                    ++this.length;
                }),
                (e.prototype.shift = function() {
                  if (0 !== this.length) {
                    var e = this.head.data;
                    return (
                      1 === this.length
                        ? (this.head = this.tail = null)
                        : (this.head = this.head.next),
                      --this.length,
                      e
                    );
                  }
                }),
                (e.prototype.clear = function() {
                  (this.head = this.tail = null), (this.length = 0);
                }),
                (e.prototype.join = function(e) {
                  if (0 === this.length) return "";
                  for (var t = this.head, r = "" + t.data; (t = t.next); )
                    r += e + t.data;
                  return r;
                }),
                (e.prototype.concat = function(e) {
                  if (0 === this.length) return n.alloc(0);
                  if (1 === this.length) return this.head.data;
                  for (
                    var t, r, i = n.allocUnsafe(e >>> 0), a = this.head, o = 0;
                    a;

                  )
                    (t = i),
                      (r = o),
                      a.data.copy(t, r),
                      (o += a.data.length),
                      (a = a.next);
                  return i;
                }),
                e
              );
            })()),
              i &&
                i.inspect &&
                i.inspect.custom &&
                (e.exports.prototype[i.inspect.custom] = function() {
                  var e = i.inspect({ length: this.length });
                  return this.constructor.name + " " + e;
                });
          },
          function(e, t) {},
          function(e, t, r) {
            (function(e) {
              var n =
                  (void 0 !== e && e) ||
                  ("undefined" != typeof self && self) ||
                  window,
                i = Function.prototype.apply;
              function a(e, t) {
                (this._id = e), (this._clearFn = t);
              }
              (t.setTimeout = function() {
                return new a(i.call(setTimeout, n, arguments), clearTimeout);
              }),
                (t.setInterval = function() {
                  return new a(
                    i.call(setInterval, n, arguments),
                    clearInterval
                  );
                }),
                (t.clearTimeout = t.clearInterval = function(e) {
                  e && e.close();
                }),
                (a.prototype.unref = a.prototype.ref = function() {}),
                (a.prototype.close = function() {
                  this._clearFn.call(n, this._id);
                }),
                (t.enroll = function(e, t) {
                  clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                }),
                (t.unenroll = function(e) {
                  clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                }),
                (t._unrefActive = t.active = function(e) {
                  clearTimeout(e._idleTimeoutId);
                  var t = e._idleTimeout;
                  t >= 0 &&
                    (e._idleTimeoutId = setTimeout(function() {
                      e._onTimeout && e._onTimeout();
                    }, t));
                }),
                r(171),
                (t.setImmediate =
                  ("undefined" != typeof self && self.setImmediate) ||
                  (void 0 !== e && e.setImmediate) ||
                  (this && this.setImmediate)),
                (t.clearImmediate =
                  ("undefined" != typeof self && self.clearImmediate) ||
                  (void 0 !== e && e.clearImmediate) ||
                  (this && this.clearImmediate));
            }.call(this, r(21)));
          },
          function(e, t, r) {
            (function(e, t) {
              !(function(e, r) {
                "use strict";
                if (!e.setImmediate) {
                  var n,
                    i,
                    a,
                    o,
                    s,
                    f = 1,
                    u = {},
                    c = !1,
                    d = e.document,
                    h = Object.getPrototypeOf && Object.getPrototypeOf(e);
                  (h = h && h.setTimeout ? h : e),
                    "[object process]" === {}.toString.call(e.process)
                      ? (n = function(e) {
                          t.nextTick(function() {
                            p(e);
                          });
                        })
                      : (function() {
                          if (e.postMessage && !e.importScripts) {
                            var t = !0,
                              r = e.onmessage;
                            return (
                              (e.onmessage = function() {
                                t = !1;
                              }),
                              e.postMessage("", "*"),
                              (e.onmessage = r),
                              t
                            );
                          }
                        })()
                      ? ((o = "setImmediate$" + Math.random() + "$"),
                        (s = function(t) {
                          t.source === e &&
                            "string" == typeof t.data &&
                            0 === t.data.indexOf(o) &&
                            p(+t.data.slice(o.length));
                        }),
                        e.addEventListener
                          ? e.addEventListener("message", s, !1)
                          : e.attachEvent("onmessage", s),
                        (n = function(t) {
                          e.postMessage(o + t, "*");
                        }))
                      : e.MessageChannel
                      ? (((a = new MessageChannel()).port1.onmessage = function(
                          e
                        ) {
                          p(e.data);
                        }),
                        (n = function(e) {
                          a.port2.postMessage(e);
                        }))
                      : d && "onreadystatechange" in d.createElement("script")
                      ? ((i = d.documentElement),
                        (n = function(e) {
                          var t = d.createElement("script");
                          (t.onreadystatechange = function() {
                            p(e),
                              (t.onreadystatechange = null),
                              i.removeChild(t),
                              (t = null);
                          }),
                            i.appendChild(t);
                        }))
                      : (n = function(e) {
                          setTimeout(p, 0, e);
                        }),
                    (h.setImmediate = function(e) {
                      "function" != typeof e && (e = new Function("" + e));
                      for (
                        var t = new Array(arguments.length - 1), r = 0;
                        r < t.length;
                        r++
                      )
                        t[r] = arguments[r + 1];
                      var i = { callback: e, args: t };
                      return (u[f] = i), n(f), f++;
                    }),
                    (h.clearImmediate = l);
                }
                function l(e) {
                  delete u[e];
                }
                function p(e) {
                  if (c) setTimeout(p, 0, e);
                  else {
                    var t = u[e];
                    if (t) {
                      c = !0;
                      try {
                        !(function(e) {
                          var t = e.callback,
                            n = e.args;
                          switch (n.length) {
                            case 0:
                              t();
                              break;
                            case 1:
                              t(n[0]);
                              break;
                            case 2:
                              t(n[0], n[1]);
                              break;
                            case 3:
                              t(n[0], n[1], n[2]);
                              break;
                            default:
                              t.apply(r, n);
                          }
                        })(t);
                      } finally {
                        l(e), (c = !1);
                      }
                    }
                  }
                }
              })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
            }.call(this, r(21), r(37)));
          },
          function(e, t, r) {
            (function(t) {
              function r(e) {
                try {
                  if (!t.localStorage) return !1;
                } catch (e) {
                  return !1;
                }
                var r = t.localStorage[e];
                return null != r && "true" === String(r).toLowerCase();
              }
              e.exports = function(e, t) {
                if (r("noDeprecation")) return e;
                var n = !1;
                return function() {
                  if (!n) {
                    if (r("throwDeprecation")) throw new Error(t);
                    r("traceDeprecation") ? console.trace(t) : console.warn(t),
                      (n = !0);
                  }
                  return e.apply(this, arguments);
                };
              };
            }.call(this, r(21)));
          },
          function(e, t, r) {
            "use strict";
            e.exports = a;
            var n = r(96),
              i = r(30);
            function a(e) {
              if (!(this instanceof a)) return new a(e);
              n.call(this, e);
            }
            (i.inherits = r(0)),
              i.inherits(a, n),
              (a.prototype._transform = function(e, t, r) {
                r(null, e);
              });
          },
          function(e, t, r) {
            e.exports = r(58);
          },
          function(e, t, r) {
            e.exports = r(16);
          },
          function(e, t, r) {
            e.exports = r(56).Transform;
          },
          function(e, t, r) {
            e.exports = r(56).PassThrough;
          },
          function(e, t, r) {
            "use strict";
            var n = r(12).Buffer,
              i = r(0),
              a = r(91),
              o = new Array(16),
              s = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                7,
                4,
                13,
                1,
                10,
                6,
                15,
                3,
                12,
                0,
                9,
                5,
                2,
                14,
                11,
                8,
                3,
                10,
                14,
                4,
                9,
                15,
                8,
                1,
                2,
                7,
                0,
                6,
                13,
                11,
                5,
                12,
                1,
                9,
                11,
                10,
                0,
                8,
                12,
                4,
                13,
                3,
                7,
                15,
                14,
                5,
                6,
                2,
                4,
                0,
                5,
                9,
                7,
                12,
                2,
                10,
                14,
                1,
                3,
                8,
                11,
                6,
                15,
                13
              ],
              f = [
                5,
                14,
                7,
                0,
                9,
                2,
                11,
                4,
                13,
                6,
                15,
                8,
                1,
                10,
                3,
                12,
                6,
                11,
                3,
                7,
                0,
                13,
                5,
                10,
                14,
                15,
                8,
                12,
                4,
                9,
                1,
                2,
                15,
                5,
                1,
                3,
                7,
                14,
                6,
                9,
                11,
                8,
                12,
                2,
                10,
                0,
                4,
                13,
                8,
                6,
                4,
                1,
                3,
                11,
                15,
                0,
                5,
                12,
                2,
                13,
                9,
                7,
                10,
                14,
                12,
                15,
                10,
                4,
                1,
                5,
                8,
                7,
                6,
                2,
                13,
                14,
                0,
                3,
                9,
                11
              ],
              u = [
                11,
                14,
                15,
                12,
                5,
                8,
                7,
                9,
                11,
                13,
                14,
                15,
                6,
                7,
                9,
                8,
                7,
                6,
                8,
                13,
                11,
                9,
                7,
                15,
                7,
                12,
                15,
                9,
                11,
                7,
                13,
                12,
                11,
                13,
                6,
                7,
                14,
                9,
                13,
                15,
                14,
                8,
                13,
                6,
                5,
                12,
                7,
                5,
                11,
                12,
                14,
                15,
                14,
                15,
                9,
                8,
                9,
                14,
                5,
                6,
                8,
                6,
                5,
                12,
                9,
                15,
                5,
                11,
                6,
                8,
                13,
                12,
                5,
                12,
                13,
                14,
                11,
                8,
                5,
                6
              ],
              c = [
                8,
                9,
                9,
                11,
                13,
                15,
                15,
                5,
                7,
                7,
                8,
                11,
                14,
                14,
                12,
                6,
                9,
                13,
                15,
                7,
                12,
                8,
                9,
                11,
                7,
                7,
                12,
                7,
                6,
                15,
                13,
                11,
                9,
                7,
                15,
                11,
                8,
                6,
                6,
                14,
                12,
                13,
                5,
                14,
                13,
                13,
                7,
                5,
                15,
                5,
                8,
                11,
                14,
                14,
                6,
                14,
                6,
                9,
                12,
                9,
                12,
                5,
                15,
                8,
                8,
                5,
                12,
                9,
                12,
                5,
                14,
                6,
                8,
                13,
                6,
                5,
                15,
                13,
                11,
                11
              ],
              d = [0, 1518500249, 1859775393, 2400959708, 2840853838],
              h = [1352829926, 1548603684, 1836072691, 2053994217, 0];
            function l() {
              a.call(this, 64),
                (this._a = 1732584193),
                (this._b = 4023233417),
                (this._c = 2562383102),
                (this._d = 271733878),
                (this._e = 3285377520);
            }
            function p(e, t) {
              return (e << t) | (e >>> (32 - t));
            }
            function b(e, t, r, n, i, a, o, s) {
              return (p((e + (t ^ r ^ n) + a + o) | 0, s) + i) | 0;
            }
            function m(e, t, r, n, i, a, o, s) {
              return (p((e + ((t & r) | (~t & n)) + a + o) | 0, s) + i) | 0;
            }
            function v(e, t, r, n, i, a, o, s) {
              return (p((e + ((t | ~r) ^ n) + a + o) | 0, s) + i) | 0;
            }
            function g(e, t, r, n, i, a, o, s) {
              return (p((e + ((t & n) | (r & ~n)) + a + o) | 0, s) + i) | 0;
            }
            function y(e, t, r, n, i, a, o, s) {
              return (p((e + (t ^ (r | ~n)) + a + o) | 0, s) + i) | 0;
            }
            i(l, a),
              (l.prototype._update = function() {
                for (var e = o, t = 0; t < 16; ++t)
                  e[t] = this._block.readInt32LE(4 * t);
                for (
                  var r = 0 | this._a,
                    n = 0 | this._b,
                    i = 0 | this._c,
                    a = 0 | this._d,
                    l = 0 | this._e,
                    _ = 0 | this._a,
                    w = 0 | this._b,
                    E = 0 | this._c,
                    A = 0 | this._d,
                    S = 0 | this._e,
                    M = 0;
                  M < 80;
                  M += 1
                ) {
                  var I, x;
                  M < 16
                    ? ((I = b(r, n, i, a, l, e[s[M]], d[0], u[M])),
                      (x = y(_, w, E, A, S, e[f[M]], h[0], c[M])))
                    : M < 32
                    ? ((I = m(r, n, i, a, l, e[s[M]], d[1], u[M])),
                      (x = g(_, w, E, A, S, e[f[M]], h[1], c[M])))
                    : M < 48
                    ? ((I = v(r, n, i, a, l, e[s[M]], d[2], u[M])),
                      (x = v(_, w, E, A, S, e[f[M]], h[2], c[M])))
                    : M < 64
                    ? ((I = g(r, n, i, a, l, e[s[M]], d[3], u[M])),
                      (x = m(_, w, E, A, S, e[f[M]], h[3], c[M])))
                    : ((I = y(r, n, i, a, l, e[s[M]], d[4], u[M])),
                      (x = b(_, w, E, A, S, e[f[M]], h[4], c[M]))),
                    (r = l),
                    (l = a),
                    (a = p(i, 10)),
                    (i = n),
                    (n = I),
                    (_ = S),
                    (S = A),
                    (A = p(E, 10)),
                    (E = w),
                    (w = x);
                }
                var T = (this._b + i + A) | 0;
                (this._b = (this._c + a + S) | 0),
                  (this._c = (this._d + l + _) | 0),
                  (this._d = (this._e + r + w) | 0),
                  (this._e = (this._a + n + E) | 0),
                  (this._a = T);
              }),
              (l.prototype._digest = function() {
                (this._block[this._blockOffset++] = 128),
                  this._blockOffset > 56 &&
                    (this._block.fill(0, this._blockOffset, 64),
                    this._update(),
                    (this._blockOffset = 0)),
                  this._block.fill(0, this._blockOffset, 56),
                  this._block.writeUInt32LE(this._length[0], 56),
                  this._block.writeUInt32LE(this._length[1], 60),
                  this._update();
                var e = n.alloc ? n.alloc(20) : new n(20);
                return (
                  e.writeInt32LE(this._a, 0),
                  e.writeInt32LE(this._b, 4),
                  e.writeInt32LE(this._c, 8),
                  e.writeInt32LE(this._d, 12),
                  e.writeInt32LE(this._e, 16),
                  e
                );
              }),
              (e.exports = l);
          },
          function(e, t, r) {
            ((t = e.exports = function(e) {
              e = e.toLowerCase();
              var r = t[e];
              if (!r)
                throw new Error(
                  e + " is not supported (we accept pull requests)"
                );
              return new r();
            }).sha = r(180)),
              (t.sha1 = r(181)),
              (t.sha224 = r(182)),
              (t.sha256 = r(97)),
              (t.sha384 = r(183)),
              (t.sha512 = r(98));
          },
          function(e, t, r) {
            var n = r(0),
              i = r(22),
              a = r(2).Buffer,
              o = [1518500249, 1859775393, -1894007588, -899497514],
              s = new Array(80);
            function f() {
              this.init(), (this._w = s), i.call(this, 64, 56);
            }
            function u(e) {
              return (e << 30) | (e >>> 2);
            }
            function c(e, t, r, n) {
              return 0 === e
                ? (t & r) | (~t & n)
                : 2 === e
                ? (t & r) | (t & n) | (r & n)
                : t ^ r ^ n;
            }
            n(f, i),
              (f.prototype.init = function() {
                return (
                  (this._a = 1732584193),
                  (this._b = 4023233417),
                  (this._c = 2562383102),
                  (this._d = 271733878),
                  (this._e = 3285377520),
                  this
                );
              }),
              (f.prototype._update = function(e) {
                for (
                  var t,
                    r = this._w,
                    n = 0 | this._a,
                    i = 0 | this._b,
                    a = 0 | this._c,
                    s = 0 | this._d,
                    f = 0 | this._e,
                    d = 0;
                  d < 16;
                  ++d
                )
                  r[d] = e.readInt32BE(4 * d);
                for (; d < 80; ++d)
                  r[d] = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16];
                for (var h = 0; h < 80; ++h) {
                  var l = ~~(h / 20),
                    p =
                      0 |
                      ((((t = n) << 5) | (t >>> 27)) +
                        c(l, i, a, s) +
                        f +
                        r[h] +
                        o[l]);
                  (f = s), (s = a), (a = u(i)), (i = n), (n = p);
                }
                (this._a = (n + this._a) | 0),
                  (this._b = (i + this._b) | 0),
                  (this._c = (a + this._c) | 0),
                  (this._d = (s + this._d) | 0),
                  (this._e = (f + this._e) | 0);
              }),
              (f.prototype._hash = function() {
                var e = a.allocUnsafe(20);
                return (
                  e.writeInt32BE(0 | this._a, 0),
                  e.writeInt32BE(0 | this._b, 4),
                  e.writeInt32BE(0 | this._c, 8),
                  e.writeInt32BE(0 | this._d, 12),
                  e.writeInt32BE(0 | this._e, 16),
                  e
                );
              }),
              (e.exports = f);
          },
          function(e, t, r) {
            var n = r(0),
              i = r(22),
              a = r(2).Buffer,
              o = [1518500249, 1859775393, -1894007588, -899497514],
              s = new Array(80);
            function f() {
              this.init(), (this._w = s), i.call(this, 64, 56);
            }
            function u(e) {
              return (e << 5) | (e >>> 27);
            }
            function c(e) {
              return (e << 30) | (e >>> 2);
            }
            function d(e, t, r, n) {
              return 0 === e
                ? (t & r) | (~t & n)
                : 2 === e
                ? (t & r) | (t & n) | (r & n)
                : t ^ r ^ n;
            }
            n(f, i),
              (f.prototype.init = function() {
                return (
                  (this._a = 1732584193),
                  (this._b = 4023233417),
                  (this._c = 2562383102),
                  (this._d = 271733878),
                  (this._e = 3285377520),
                  this
                );
              }),
              (f.prototype._update = function(e) {
                for (
                  var t,
                    r = this._w,
                    n = 0 | this._a,
                    i = 0 | this._b,
                    a = 0 | this._c,
                    s = 0 | this._d,
                    f = 0 | this._e,
                    h = 0;
                  h < 16;
                  ++h
                )
                  r[h] = e.readInt32BE(4 * h);
                for (; h < 80; ++h)
                  r[h] =
                    ((t = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16]) << 1) |
                    (t >>> 31);
                for (var l = 0; l < 80; ++l) {
                  var p = ~~(l / 20),
                    b = (u(n) + d(p, i, a, s) + f + r[l] + o[p]) | 0;
                  (f = s), (s = a), (a = c(i)), (i = n), (n = b);
                }
                (this._a = (n + this._a) | 0),
                  (this._b = (i + this._b) | 0),
                  (this._c = (a + this._c) | 0),
                  (this._d = (s + this._d) | 0),
                  (this._e = (f + this._e) | 0);
              }),
              (f.prototype._hash = function() {
                var e = a.allocUnsafe(20);
                return (
                  e.writeInt32BE(0 | this._a, 0),
                  e.writeInt32BE(0 | this._b, 4),
                  e.writeInt32BE(0 | this._c, 8),
                  e.writeInt32BE(0 | this._d, 12),
                  e.writeInt32BE(0 | this._e, 16),
                  e
                );
              }),
              (e.exports = f);
          },
          function(e, t, r) {
            var n = r(0),
              i = r(97),
              a = r(22),
              o = r(2).Buffer,
              s = new Array(64);
            function f() {
              this.init(), (this._w = s), a.call(this, 64, 56);
            }
            n(f, i),
              (f.prototype.init = function() {
                return (
                  (this._a = 3238371032),
                  (this._b = 914150663),
                  (this._c = 812702999),
                  (this._d = 4144912697),
                  (this._e = 4290775857),
                  (this._f = 1750603025),
                  (this._g = 1694076839),
                  (this._h = 3204075428),
                  this
                );
              }),
              (f.prototype._hash = function() {
                var e = o.allocUnsafe(28);
                return (
                  e.writeInt32BE(this._a, 0),
                  e.writeInt32BE(this._b, 4),
                  e.writeInt32BE(this._c, 8),
                  e.writeInt32BE(this._d, 12),
                  e.writeInt32BE(this._e, 16),
                  e.writeInt32BE(this._f, 20),
                  e.writeInt32BE(this._g, 24),
                  e
                );
              }),
              (e.exports = f);
          },
          function(e, t, r) {
            var n = r(0),
              i = r(98),
              a = r(22),
              o = r(2).Buffer,
              s = new Array(160);
            function f() {
              this.init(), (this._w = s), a.call(this, 128, 112);
            }
            n(f, i),
              (f.prototype.init = function() {
                return (
                  (this._ah = 3418070365),
                  (this._bh = 1654270250),
                  (this._ch = 2438529370),
                  (this._dh = 355462360),
                  (this._eh = 1731405415),
                  (this._fh = 2394180231),
                  (this._gh = 3675008525),
                  (this._hh = 1203062813),
                  (this._al = 3238371032),
                  (this._bl = 914150663),
                  (this._cl = 812702999),
                  (this._dl = 4144912697),
                  (this._el = 4290775857),
                  (this._fl = 1750603025),
                  (this._gl = 1694076839),
                  (this._hl = 3204075428),
                  this
                );
              }),
              (f.prototype._hash = function() {
                var e = o.allocUnsafe(48);
                function t(t, r, n) {
                  e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
                }
                return (
                  t(this._ah, this._al, 0),
                  t(this._bh, this._bl, 8),
                  t(this._ch, this._cl, 16),
                  t(this._dh, this._dl, 24),
                  t(this._eh, this._el, 32),
                  t(this._fh, this._fl, 40),
                  e
                );
              }),
              (e.exports = f);
          },
          function(e, t, r) {
            var n = r(2).Buffer,
              i = r(92).Transform,
              a = r(59).StringDecoder;
            function o(e) {
              i.call(this),
                (this.hashMode = "string" == typeof e),
                this.hashMode
                  ? (this[e] = this._finalOrDigest)
                  : (this.final = this._finalOrDigest),
                this._final &&
                  ((this.__final = this._final), (this._final = null)),
                (this._decoder = null),
                (this._encoding = null);
            }
            r(0)(o, i),
              (o.prototype.update = function(e, t, r) {
                "string" == typeof e && (e = n.from(e, t));
                var i = this._update(e);
                return this.hashMode
                  ? this
                  : (r && (i = this._toString(i, r)), i);
              }),
              (o.prototype.setAutoPadding = function() {}),
              (o.prototype.getAuthTag = function() {
                throw new Error("trying to get auth tag in unsupported state");
              }),
              (o.prototype.setAuthTag = function() {
                throw new Error("trying to set auth tag in unsupported state");
              }),
              (o.prototype.setAAD = function() {
                throw new Error("trying to set aad in unsupported state");
              }),
              (o.prototype._transform = function(e, t, r) {
                var n;
                try {
                  this.hashMode ? this._update(e) : this.push(this._update(e));
                } catch (e) {
                  n = e;
                } finally {
                  r(n);
                }
              }),
              (o.prototype._flush = function(e) {
                var t;
                try {
                  this.push(this.__final());
                } catch (e) {
                  t = e;
                }
                e(t);
              }),
              (o.prototype._finalOrDigest = function(e) {
                var t = this.__final() || n.alloc(0);
                return e && (t = this._toString(t, e, !0)), t;
              }),
              (o.prototype._toString = function(e, t, r) {
                if (
                  (this._decoder ||
                    ((this._decoder = new a(t)), (this._encoding = t)),
                  this._encoding !== t)
                )
                  throw new Error("can't switch encodings");
                var n = this._decoder.write(e);
                return r && (n += this._decoder.end()), n;
              }),
              (e.exports = o);
          },
          function(e, t, r) {
            "use strict";
            var n = r(186),
              i = r(2).Buffer;
            e.exports = function(e) {
              function t(t) {
                var r = t.slice(0, -4),
                  n = t.slice(-4),
                  i = e(r);
                if (
                  !(
                    (n[0] ^ i[0]) |
                    (n[1] ^ i[1]) |
                    (n[2] ^ i[2]) |
                    (n[3] ^ i[3])
                  )
                )
                  return r;
              }
              return {
                encode: function(t) {
                  var r = e(t);
                  return n.encode(i.concat([t, r], t.length + 4));
                },
                decode: function(e) {
                  var r = t(n.decode(e));
                  if (!r) throw new Error("Invalid checksum");
                  return r;
                },
                decodeUnsafe: function(e) {
                  var r = n.decodeUnsafe(e);
                  if (r) return t(r);
                }
              };
            };
          },
          function(e, t, r) {
            var n = r(187);
            e.exports = n(
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
            );
          },
          function(e, t, r) {
            "use strict";
            var n = r(2).Buffer;
            e.exports = function(e) {
              if (e.length >= 255) throw new TypeError("Alphabet too long");
              var t = new Uint8Array(256);
              t.fill(255);
              for (var r = 0; r < e.length; r++) {
                var i = e.charAt(r),
                  a = i.charCodeAt(0);
                if (255 !== t[a]) throw new TypeError(i + " is ambiguous");
                t[a] = r;
              }
              var o = e.length,
                s = e.charAt(0),
                f = Math.log(o) / Math.log(256),
                u = Math.log(256) / Math.log(o);
              function c(e) {
                if ("string" != typeof e)
                  throw new TypeError("Expected String");
                if (0 === e.length) return n.alloc(0);
                var r = 0;
                if (" " !== e[r]) {
                  for (var i = 0, a = 0; e[r] === s; ) i++, r++;
                  for (
                    var u = ((e.length - r) * f + 1) >>> 0,
                      c = new Uint8Array(u);
                    e[r];

                  ) {
                    var d = t[e.charCodeAt(r)];
                    if (255 === d) return;
                    for (
                      var h = 0, l = u - 1;
                      (0 !== d || h < a) && -1 !== l;
                      l--, h++
                    )
                      (d += (o * c[l]) >>> 0),
                        (c[l] = d % 256 >>> 0),
                        (d = (d / 256) >>> 0);
                    if (0 !== d) throw new Error("Non-zero carry");
                    (a = h), r++;
                  }
                  if (" " !== e[r]) {
                    for (var p = u - a; p !== u && 0 === c[p]; ) p++;
                    var b = n.allocUnsafe(i + (u - p));
                    b.fill(0, 0, i);
                    for (var m = i; p !== u; ) b[m++] = c[p++];
                    return b;
                  }
                }
              }
              return {
                encode: function(t) {
                  if (!n.isBuffer(t)) throw new TypeError("Expected Buffer");
                  if (0 === t.length) return "";
                  for (
                    var r = 0, i = 0, a = 0, f = t.length;
                    a !== f && 0 === t[a];

                  )
                    a++, r++;
                  for (
                    var c = ((f - a) * u + 1) >>> 0, d = new Uint8Array(c);
                    a !== f;

                  ) {
                    for (
                      var h = t[a], l = 0, p = c - 1;
                      (0 !== h || l < i) && -1 !== p;
                      p--, l++
                    )
                      (h += (256 * d[p]) >>> 0),
                        (d[p] = h % o >>> 0),
                        (h = (h / o) >>> 0);
                    if (0 !== h) throw new Error("Non-zero carry");
                    (i = l), a++;
                  }
                  for (var b = c - i; b !== c && 0 === d[b]; ) b++;
                  for (var m = s.repeat(r); b < c; ++b) m += e.charAt(d[b]);
                  return m;
                },
                decodeUnsafe: c,
                decode: function(e) {
                  var t = c(e);
                  if (t) return t;
                  throw new Error("Non-base" + o + " character");
                }
              };
            };
          },
          function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n,
              i = (n = r(87)) && n.__esModule ? n : { default: n };
            t.default = function(e, t, r) {
              return (
                t in e
                  ? (0, i.default)(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (e[t] = r),
                e
              );
            };
          },
          function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n,
              i = (n = r(190)) && n.__esModule ? n : { default: n };
            t.default = function(e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++)
                  r[t] = e[t];
                return r;
              }
              return (0, i.default)(e);
            };
          },
          function(e, t, r) {
            e.exports = { default: r(191), __esModule: !0 };
          },
          function(e, t, r) {
            r(29), r(192), (e.exports = r(1).Array.from);
          },
          function(e, t, r) {
            "use strict";
            var n = r(23),
              i = r(8),
              a = r(28),
              o = r(76),
              s = r(77),
              f = r(43),
              u = r(193),
              c = r(50);
            i(
              i.S +
                i.F *
                  !r(82)(function(e) {
                    Array.from(e);
                  }),
              "Array",
              {
                from: function(e) {
                  var t,
                    r,
                    i,
                    d,
                    h = a(e),
                    l = "function" == typeof this ? this : Array,
                    p = arguments.length,
                    b = p > 1 ? arguments[1] : void 0,
                    m = void 0 !== b,
                    v = 0,
                    g = c(h);
                  if (
                    (m && (b = n(b, p > 2 ? arguments[2] : void 0, 2)),
                    null == g || (l == Array && s(g)))
                  )
                    for (r = new l((t = f(h.length))); t > v; v++)
                      u(r, v, m ? b(h[v], v) : h[v]);
                  else
                    for (d = g.call(h), r = new l(); !(i = d.next()).done; v++)
                      u(r, v, m ? o(d, b, [i.value, v], !0) : i.value);
                  return (r.length = v), r;
                }
              }
            );
          },
          function(e, t, r) {
            "use strict";
            var n = r(9),
              i = r(24);
            e.exports = function(e, t, r) {
              t in e ? n.f(e, t, i(0, r)) : (e[t] = r);
            };
          },
          function(e, t, r) {
            "use strict";
            e.exports = r(195)(r(199));
          },
          function(e, t, r) {
            "use strict";
            var n = r(196),
              i = r(197),
              a = r(100);
            function o(e, t) {
              return void 0 === e
                ? t
                : (n.isBoolean(e, a.COMPRESSED_TYPE_INVALID), e);
            }
            e.exports = function(e) {
              return {
                privateKeyVerify: function(t) {
                  return (
                    n.isBuffer(t, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    32 === t.length && e.privateKeyVerify(t)
                  );
                },
                privateKeyExport: function(t, r) {
                  n.isBuffer(t, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    n.isBufferLength(t, 32, a.EC_PRIVATE_KEY_LENGTH_INVALID),
                    (r = o(r, !0));
                  var s = e.privateKeyExport(t, r);
                  return i.privateKeyExport(t, s, r);
                },
                privateKeyImport: function(t) {
                  if (
                    (n.isBuffer(t, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    (t = i.privateKeyImport(t)) &&
                      32 === t.length &&
                      e.privateKeyVerify(t))
                  )
                    return t;
                  throw new Error(a.EC_PRIVATE_KEY_IMPORT_DER_FAIL);
                },
                privateKeyNegate: function(t) {
                  return (
                    n.isBuffer(t, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    n.isBufferLength(t, 32, a.EC_PRIVATE_KEY_LENGTH_INVALID),
                    e.privateKeyNegate(t)
                  );
                },
                privateKeyModInverse: function(t) {
                  return (
                    n.isBuffer(t, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    n.isBufferLength(t, 32, a.EC_PRIVATE_KEY_LENGTH_INVALID),
                    e.privateKeyModInverse(t)
                  );
                },
                privateKeyTweakAdd: function(t, r) {
                  return (
                    n.isBuffer(t, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    n.isBufferLength(t, 32, a.EC_PRIVATE_KEY_LENGTH_INVALID),
                    n.isBuffer(r, a.TWEAK_TYPE_INVALID),
                    n.isBufferLength(r, 32, a.TWEAK_LENGTH_INVALID),
                    e.privateKeyTweakAdd(t, r)
                  );
                },
                privateKeyTweakMul: function(t, r) {
                  return (
                    n.isBuffer(t, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    n.isBufferLength(t, 32, a.EC_PRIVATE_KEY_LENGTH_INVALID),
                    n.isBuffer(r, a.TWEAK_TYPE_INVALID),
                    n.isBufferLength(r, 32, a.TWEAK_LENGTH_INVALID),
                    e.privateKeyTweakMul(t, r)
                  );
                },
                publicKeyCreate: function(t, r) {
                  return (
                    n.isBuffer(t, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    n.isBufferLength(t, 32, a.EC_PRIVATE_KEY_LENGTH_INVALID),
                    (r = o(r, !0)),
                    e.publicKeyCreate(t, r)
                  );
                },
                publicKeyConvert: function(t, r) {
                  return (
                    n.isBuffer(t, a.EC_PUBLIC_KEY_TYPE_INVALID),
                    n.isBufferLength2(
                      t,
                      33,
                      65,
                      a.EC_PUBLIC_KEY_LENGTH_INVALID
                    ),
                    (r = o(r, !0)),
                    e.publicKeyConvert(t, r)
                  );
                },
                publicKeyVerify: function(t) {
                  return (
                    n.isBuffer(t, a.EC_PUBLIC_KEY_TYPE_INVALID),
                    e.publicKeyVerify(t)
                  );
                },
                publicKeyTweakAdd: function(t, r, i) {
                  return (
                    n.isBuffer(t, a.EC_PUBLIC_KEY_TYPE_INVALID),
                    n.isBufferLength2(
                      t,
                      33,
                      65,
                      a.EC_PUBLIC_KEY_LENGTH_INVALID
                    ),
                    n.isBuffer(r, a.TWEAK_TYPE_INVALID),
                    n.isBufferLength(r, 32, a.TWEAK_LENGTH_INVALID),
                    (i = o(i, !0)),
                    e.publicKeyTweakAdd(t, r, i)
                  );
                },
                publicKeyTweakMul: function(t, r, i) {
                  return (
                    n.isBuffer(t, a.EC_PUBLIC_KEY_TYPE_INVALID),
                    n.isBufferLength2(
                      t,
                      33,
                      65,
                      a.EC_PUBLIC_KEY_LENGTH_INVALID
                    ),
                    n.isBuffer(r, a.TWEAK_TYPE_INVALID),
                    n.isBufferLength(r, 32, a.TWEAK_LENGTH_INVALID),
                    (i = o(i, !0)),
                    e.publicKeyTweakMul(t, r, i)
                  );
                },
                publicKeyCombine: function(t, r) {
                  n.isArray(t, a.EC_PUBLIC_KEYS_TYPE_INVALID),
                    n.isLengthGTZero(t, a.EC_PUBLIC_KEYS_LENGTH_INVALID);
                  for (var i = 0; i < t.length; ++i)
                    n.isBuffer(t[i], a.EC_PUBLIC_KEY_TYPE_INVALID),
                      n.isBufferLength2(
                        t[i],
                        33,
                        65,
                        a.EC_PUBLIC_KEY_LENGTH_INVALID
                      );
                  return (r = o(r, !0)), e.publicKeyCombine(t, r);
                },
                signatureNormalize: function(t) {
                  return (
                    n.isBuffer(t, a.ECDSA_SIGNATURE_TYPE_INVALID),
                    n.isBufferLength(t, 64, a.ECDSA_SIGNATURE_LENGTH_INVALID),
                    e.signatureNormalize(t)
                  );
                },
                signatureExport: function(t) {
                  n.isBuffer(t, a.ECDSA_SIGNATURE_TYPE_INVALID),
                    n.isBufferLength(t, 64, a.ECDSA_SIGNATURE_LENGTH_INVALID);
                  var r = e.signatureExport(t);
                  return i.signatureExport(r);
                },
                signatureImport: function(t) {
                  n.isBuffer(t, a.ECDSA_SIGNATURE_TYPE_INVALID),
                    n.isLengthGTZero(t, a.ECDSA_SIGNATURE_LENGTH_INVALID);
                  var r = i.signatureImport(t);
                  if (r) return e.signatureImport(r);
                  throw new Error(a.ECDSA_SIGNATURE_PARSE_DER_FAIL);
                },
                signatureImportLax: function(t) {
                  n.isBuffer(t, a.ECDSA_SIGNATURE_TYPE_INVALID),
                    n.isLengthGTZero(t, a.ECDSA_SIGNATURE_LENGTH_INVALID);
                  var r = i.signatureImportLax(t);
                  if (r) return e.signatureImport(r);
                  throw new Error(a.ECDSA_SIGNATURE_PARSE_DER_FAIL);
                },
                sign: function(t, r, i) {
                  n.isBuffer(t, a.MSG32_TYPE_INVALID),
                    n.isBufferLength(t, 32, a.MSG32_LENGTH_INVALID),
                    n.isBuffer(r, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    n.isBufferLength(r, 32, a.EC_PRIVATE_KEY_LENGTH_INVALID);
                  var o = null,
                    s = null;
                  return (
                    void 0 !== i &&
                      (n.isObject(i, a.OPTIONS_TYPE_INVALID),
                      void 0 !== i.data &&
                        (n.isBuffer(i.data, a.OPTIONS_DATA_TYPE_INVALID),
                        n.isBufferLength(
                          i.data,
                          32,
                          a.OPTIONS_DATA_LENGTH_INVALID
                        ),
                        (o = i.data)),
                      void 0 !== i.noncefn &&
                        (n.isFunction(
                          i.noncefn,
                          a.OPTIONS_NONCEFN_TYPE_INVALID
                        ),
                        (s = i.noncefn))),
                    e.sign(t, r, s, o)
                  );
                },
                verify: function(t, r, i) {
                  return (
                    n.isBuffer(t, a.MSG32_TYPE_INVALID),
                    n.isBufferLength(t, 32, a.MSG32_LENGTH_INVALID),
                    n.isBuffer(r, a.ECDSA_SIGNATURE_TYPE_INVALID),
                    n.isBufferLength(r, 64, a.ECDSA_SIGNATURE_LENGTH_INVALID),
                    n.isBuffer(i, a.EC_PUBLIC_KEY_TYPE_INVALID),
                    n.isBufferLength2(
                      i,
                      33,
                      65,
                      a.EC_PUBLIC_KEY_LENGTH_INVALID
                    ),
                    e.verify(t, r, i)
                  );
                },
                recover: function(t, r, i, s) {
                  return (
                    n.isBuffer(t, a.MSG32_TYPE_INVALID),
                    n.isBufferLength(t, 32, a.MSG32_LENGTH_INVALID),
                    n.isBuffer(r, a.ECDSA_SIGNATURE_TYPE_INVALID),
                    n.isBufferLength(r, 64, a.ECDSA_SIGNATURE_LENGTH_INVALID),
                    n.isNumber(i, a.RECOVERY_ID_TYPE_INVALID),
                    n.isNumberInInterval(i, -1, 4, a.RECOVERY_ID_VALUE_INVALID),
                    (s = o(s, !0)),
                    e.recover(t, r, i, s)
                  );
                },
                ecdh: function(t, r) {
                  return (
                    n.isBuffer(t, a.EC_PUBLIC_KEY_TYPE_INVALID),
                    n.isBufferLength2(
                      t,
                      33,
                      65,
                      a.EC_PUBLIC_KEY_LENGTH_INVALID
                    ),
                    n.isBuffer(r, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    n.isBufferLength(r, 32, a.EC_PRIVATE_KEY_LENGTH_INVALID),
                    e.ecdh(t, r)
                  );
                },
                ecdhUnsafe: function(t, r, i) {
                  return (
                    n.isBuffer(t, a.EC_PUBLIC_KEY_TYPE_INVALID),
                    n.isBufferLength2(
                      t,
                      33,
                      65,
                      a.EC_PUBLIC_KEY_LENGTH_INVALID
                    ),
                    n.isBuffer(r, a.EC_PRIVATE_KEY_TYPE_INVALID),
                    n.isBufferLength(r, 32, a.EC_PRIVATE_KEY_LENGTH_INVALID),
                    (i = o(i, !0)),
                    e.ecdhUnsafe(t, r, i)
                  );
                }
              };
            };
          },
          function(e, t, r) {
            "use strict";
            (function(e) {
              var r = Object.prototype.toString;
              (t.isArray = function(e, t) {
                if (!Array.isArray(e)) throw TypeError(t);
              }),
                (t.isBoolean = function(e, t) {
                  if ("[object Boolean]" !== r.call(e)) throw TypeError(t);
                }),
                (t.isBuffer = function(t, r) {
                  if (!e.isBuffer(t)) throw TypeError(r);
                }),
                (t.isFunction = function(e, t) {
                  if ("[object Function]" !== r.call(e)) throw TypeError(t);
                }),
                (t.isNumber = function(e, t) {
                  if ("[object Number]" !== r.call(e)) throw TypeError(t);
                }),
                (t.isObject = function(e, t) {
                  if ("[object Object]" !== r.call(e)) throw TypeError(t);
                }),
                (t.isBufferLength = function(e, t, r) {
                  if (e.length !== t) throw RangeError(r);
                }),
                (t.isBufferLength2 = function(e, t, r, n) {
                  if (e.length !== t && e.length !== r) throw RangeError(n);
                }),
                (t.isLengthGTZero = function(e, t) {
                  if (0 === e.length) throw RangeError(t);
                }),
                (t.isNumberInInterval = function(e, t, r, n) {
                  if (e <= t || e >= r) throw RangeError(n);
                });
            }.call(this, r(12).Buffer));
          },
          function(e, t, r) {
            "use strict";
            var n = r(2).Buffer,
              i = r(198),
              a = n.from([
                48,
                129,
                211,
                2,
                1,
                1,
                4,
                32,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                160,
                129,
                133,
                48,
                129,
                130,
                2,
                1,
                1,
                48,
                44,
                6,
                7,
                42,
                134,
                72,
                206,
                61,
                1,
                1,
                2,
                33,
                0,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                254,
                255,
                255,
                252,
                47,
                48,
                6,
                4,
                1,
                0,
                4,
                1,
                7,
                4,
                33,
                2,
                121,
                190,
                102,
                126,
                249,
                220,
                187,
                172,
                85,
                160,
                98,
                149,
                206,
                135,
                11,
                7,
                2,
                155,
                252,
                219,
                45,
                206,
                40,
                217,
                89,
                242,
                129,
                91,
                22,
                248,
                23,
                152,
                2,
                33,
                0,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                254,
                186,
                174,
                220,
                230,
                175,
                72,
                160,
                59,
                191,
                210,
                94,
                140,
                208,
                54,
                65,
                65,
                2,
                1,
                1,
                161,
                36,
                3,
                34,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]),
              o = n.from([
                48,
                130,
                1,
                19,
                2,
                1,
                1,
                4,
                32,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                160,
                129,
                165,
                48,
                129,
                162,
                2,
                1,
                1,
                48,
                44,
                6,
                7,
                42,
                134,
                72,
                206,
                61,
                1,
                1,
                2,
                33,
                0,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                254,
                255,
                255,
                252,
                47,
                48,
                6,
                4,
                1,
                0,
                4,
                1,
                7,
                4,
                65,
                4,
                121,
                190,
                102,
                126,
                249,
                220,
                187,
                172,
                85,
                160,
                98,
                149,
                206,
                135,
                11,
                7,
                2,
                155,
                252,
                219,
                45,
                206,
                40,
                217,
                89,
                242,
                129,
                91,
                22,
                248,
                23,
                152,
                72,
                58,
                218,
                119,
                38,
                163,
                196,
                101,
                93,
                164,
                251,
                252,
                14,
                17,
                8,
                168,
                253,
                23,
                180,
                72,
                166,
                133,
                84,
                25,
                156,
                71,
                208,
                143,
                251,
                16,
                212,
                184,
                2,
                33,
                0,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                254,
                186,
                174,
                220,
                230,
                175,
                72,
                160,
                59,
                191,
                210,
                94,
                140,
                208,
                54,
                65,
                65,
                2,
                1,
                1,
                161,
                68,
                3,
                66,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]);
            (t.privateKeyExport = function(e, t, r) {
              var i = n.from(r ? a : o);
              return e.copy(i, r ? 8 : 9), t.copy(i, r ? 181 : 214), i;
            }),
              (t.privateKeyImport = function(e) {
                var t = e.length,
                  r = 0;
                if (
                  !(t < r + 1 || 48 !== e[r]) &&
                  !(t < (r += 1) + 1) &&
                  128 & e[r]
                ) {
                  var n = 127 & e[r];
                  if (((r += 1), !(n < 1 || n > 2 || t < r + n))) {
                    var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
                    if (
                      !(
                        t < (r += n) + i ||
                        t < r + 3 ||
                        2 !== e[r] ||
                        1 !== e[r + 1] ||
                        1 !== e[r + 2] ||
                        t < (r += 3) + 2 ||
                        4 !== e[r] ||
                        e[r + 1] > 32 ||
                        t < r + 2 + e[r + 1]
                      )
                    )
                      return e.slice(r + 2, r + 2 + e[r + 1]);
                  }
                }
              }),
              (t.signatureExport = function(e) {
                for (
                  var t = n.concat([n.from([0]), e.r]), r = 33, a = 0;
                  r > 1 && 0 === t[a] && !(128 & t[a + 1]);
                  --r, ++a
                );
                for (
                  var o = n.concat([n.from([0]), e.s]), s = 33, f = 0;
                  s > 1 && 0 === o[f] && !(128 & o[f + 1]);
                  --s, ++f
                );
                return i.encode(t.slice(a), o.slice(f));
              }),
              (t.signatureImport = function(e) {
                var t = n.alloc(32, 0),
                  r = n.alloc(32, 0);
                try {
                  var a = i.decode(e);
                  if (
                    (33 === a.r.length && 0 === a.r[0] && (a.r = a.r.slice(1)),
                    a.r.length > 32)
                  )
                    throw new Error("R length is too long");
                  if (
                    (33 === a.s.length && 0 === a.s[0] && (a.s = a.s.slice(1)),
                    a.s.length > 32)
                  )
                    throw new Error("S length is too long");
                } catch (e) {
                  return;
                }
                return (
                  a.r.copy(t, 32 - a.r.length),
                  a.s.copy(r, 32 - a.s.length),
                  { r: t, s: r }
                );
              }),
              (t.signatureImportLax = function(e) {
                var t = n.alloc(32, 0),
                  r = n.alloc(32, 0),
                  i = e.length,
                  a = 0;
                if (48 === e[a++]) {
                  var o = e[a++];
                  if (!(128 & o && (a += o - 128) > i) && 2 === e[a++]) {
                    var s = e[a++];
                    if (128 & s) {
                      if (a + (o = s - 128) > i) return;
                      for (; o > 0 && 0 === e[a]; a += 1, o -= 1);
                      for (s = 0; o > 0; a += 1, o -= 1) s = (s << 8) + e[a];
                    }
                    if (!(s > i - a)) {
                      var f = a;
                      if (((a += s), 2 === e[a++])) {
                        var u = e[a++];
                        if (128 & u) {
                          if (a + (o = u - 128) > i) return;
                          for (; o > 0 && 0 === e[a]; a += 1, o -= 1);
                          for (u = 0; o > 0; a += 1, o -= 1)
                            u = (u << 8) + e[a];
                        }
                        if (!(u > i - a)) {
                          var c = a;
                          for (a += u; s > 0 && 0 === e[f]; s -= 1, f += 1);
                          if (!(s > 32)) {
                            var d = e.slice(f, f + s);
                            for (
                              d.copy(t, 32 - d.length);
                              u > 0 && 0 === e[c];
                              u -= 1, c += 1
                            );
                            if (!(u > 32)) {
                              var h = e.slice(c, c + u);
                              return h.copy(r, 32 - h.length), { r: t, s: r };
                            }
                          }
                        }
                      }
                    }
                  }
                }
              });
          },
          function(e, t, r) {
            var n = r(2).Buffer;
            e.exports = {
              check: function(e) {
                if (e.length < 8) return !1;
                if (e.length > 72) return !1;
                if (48 !== e[0]) return !1;
                if (e[1] !== e.length - 2) return !1;
                if (2 !== e[2]) return !1;
                var t = e[3];
                if (0 === t) return !1;
                if (5 + t >= e.length) return !1;
                if (2 !== e[4 + t]) return !1;
                var r = e[5 + t];
                return (
                  0 !== r &&
                  6 + t + r === e.length &&
                  !(128 & e[4]) &&
                  !(t > 1 && 0 === e[4] && !(128 & e[5])) &&
                  !(128 & e[t + 6]) &&
                  !(r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
                );
              },
              decode: function(e) {
                if (e.length < 8)
                  throw new Error("DER sequence length is too short");
                if (e.length > 72)
                  throw new Error("DER sequence length is too long");
                if (48 !== e[0]) throw new Error("Expected DER sequence");
                if (e[1] !== e.length - 2)
                  throw new Error("DER sequence length is invalid");
                if (2 !== e[2]) throw new Error("Expected DER integer");
                var t = e[3];
                if (0 === t) throw new Error("R length is zero");
                if (5 + t >= e.length) throw new Error("R length is too long");
                if (2 !== e[4 + t]) throw new Error("Expected DER integer (2)");
                var r = e[5 + t];
                if (0 === r) throw new Error("S length is zero");
                if (6 + t + r !== e.length)
                  throw new Error("S length is invalid");
                if (128 & e[4]) throw new Error("R value is negative");
                if (t > 1 && 0 === e[4] && !(128 & e[5]))
                  throw new Error("R value excessively padded");
                if (128 & e[t + 6]) throw new Error("S value is negative");
                if (r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
                  throw new Error("S value excessively padded");
                return { r: e.slice(4, 4 + t), s: e.slice(6 + t) };
              },
              encode: function(e, t) {
                var r = e.length,
                  i = t.length;
                if (0 === r) throw new Error("R length is zero");
                if (0 === i) throw new Error("S length is zero");
                if (r > 33) throw new Error("R length is too long");
                if (i > 33) throw new Error("S length is too long");
                if (128 & e[0]) throw new Error("R value is negative");
                if (128 & t[0]) throw new Error("S value is negative");
                if (r > 1 && 0 === e[0] && !(128 & e[1]))
                  throw new Error("R value excessively padded");
                if (i > 1 && 0 === t[0] && !(128 & t[1]))
                  throw new Error("S value excessively padded");
                var a = n.allocUnsafe(6 + r + i);
                return (
                  (a[0] = 48),
                  (a[1] = a.length - 2),
                  (a[2] = 2),
                  (a[3] = e.length),
                  e.copy(a, 4),
                  (a[4 + r] = 2),
                  (a[5 + r] = t.length),
                  t.copy(a, 6 + r),
                  a
                );
              }
            };
          },
          function(e, t, r) {
            "use strict";
            var n = r(2).Buffer,
              i = r(54),
              a = r(6),
              o = r(202).ec,
              s = r(100),
              f = new o("secp256k1"),
              u = f.curve;
            function c(e) {
              var t = e[0];
              switch (t) {
                case 2:
                case 3:
                  return 33 !== e.length
                    ? null
                    : (function(e, t) {
                        var r = new a(t);
                        if (r.cmp(u.p) >= 0) return null;
                        var n = (r = r.toRed(u.red))
                          .redSqr()
                          .redIMul(r)
                          .redIAdd(u.b)
                          .redSqrt();
                        return (
                          (3 === e) !== n.isOdd() && (n = n.redNeg()),
                          f.keyPair({ pub: { x: r, y: n } })
                        );
                      })(t, e.slice(1, 33));
                case 4:
                case 6:
                case 7:
                  return 65 !== e.length
                    ? null
                    : (function(e, t, r) {
                        var n = new a(t),
                          i = new a(r);
                        if (n.cmp(u.p) >= 0 || i.cmp(u.p) >= 0) return null;
                        if (
                          ((n = n.toRed(u.red)),
                          (i = i.toRed(u.red)),
                          (6 === e || 7 === e) && i.isOdd() !== (7 === e))
                        )
                          return null;
                        var o = n.redSqr().redIMul(n);
                        return i
                          .redSqr()
                          .redISub(o.redIAdd(u.b))
                          .isZero()
                          ? f.keyPair({ pub: { x: n, y: i } })
                          : null;
                      })(t, e.slice(1, 33), e.slice(33, 65));
                default:
                  return null;
              }
            }
            (t.privateKeyVerify = function(e) {
              var t = new a(e);
              return t.cmp(u.n) < 0 && !t.isZero();
            }),
              (t.privateKeyExport = function(e, t) {
                var r = new a(e);
                if (r.cmp(u.n) >= 0 || r.isZero())
                  throw new Error(s.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
                return n.from(f.keyFromPrivate(e).getPublic(t, !0));
              }),
              (t.privateKeyNegate = function(e) {
                var t = new a(e);
                return t.isZero()
                  ? n.alloc(32)
                  : u.n
                      .sub(t)
                      .umod(u.n)
                      .toArrayLike(n, "be", 32);
              }),
              (t.privateKeyModInverse = function(e) {
                var t = new a(e);
                if (t.cmp(u.n) >= 0 || t.isZero())
                  throw new Error(s.EC_PRIVATE_KEY_RANGE_INVALID);
                return t.invm(u.n).toArrayLike(n, "be", 32);
              }),
              (t.privateKeyTweakAdd = function(e, t) {
                var r = new a(t);
                if (r.cmp(u.n) >= 0)
                  throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
                if (
                  (r.iadd(new a(e)), r.cmp(u.n) >= 0 && r.isub(u.n), r.isZero())
                )
                  throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
                return r.toArrayLike(n, "be", 32);
              }),
              (t.privateKeyTweakMul = function(e, t) {
                var r = new a(t);
                if (r.cmp(u.n) >= 0 || r.isZero())
                  throw new Error(s.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
                return (
                  r.imul(new a(e)),
                  r.cmp(u.n) && (r = r.umod(u.n)),
                  r.toArrayLike(n, "be", 32)
                );
              }),
              (t.publicKeyCreate = function(e, t) {
                var r = new a(e);
                if (r.cmp(u.n) >= 0 || r.isZero())
                  throw new Error(s.EC_PUBLIC_KEY_CREATE_FAIL);
                return n.from(f.keyFromPrivate(e).getPublic(t, !0));
              }),
              (t.publicKeyConvert = function(e, t) {
                var r = c(e);
                if (null === r) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
                return n.from(r.getPublic(t, !0));
              }),
              (t.publicKeyVerify = function(e) {
                return null !== c(e);
              }),
              (t.publicKeyTweakAdd = function(e, t, r) {
                var i = c(e);
                if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
                if ((t = new a(t)).cmp(u.n) >= 0)
                  throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
                var o = u.g.mul(t).add(i.pub);
                if (o.isInfinity())
                  throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
                return n.from(o.encode(!0, r));
              }),
              (t.publicKeyTweakMul = function(e, t, r) {
                var i = c(e);
                if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
                if ((t = new a(t)).cmp(u.n) >= 0 || t.isZero())
                  throw new Error(s.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
                return n.from(i.pub.mul(t).encode(!0, r));
              }),
              (t.publicKeyCombine = function(e, t) {
                for (var r = new Array(e.length), i = 0; i < e.length; ++i)
                  if (((r[i] = c(e[i])), null === r[i]))
                    throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
                for (var a = r[0].pub, o = 1; o < r.length; ++o)
                  a = a.add(r[o].pub);
                if (a.isInfinity())
                  throw new Error(s.EC_PUBLIC_KEY_COMBINE_FAIL);
                return n.from(a.encode(!0, t));
              }),
              (t.signatureNormalize = function(e) {
                var t = new a(e.slice(0, 32)),
                  r = new a(e.slice(32, 64));
                if (t.cmp(u.n) >= 0 || r.cmp(u.n) >= 0)
                  throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
                var i = n.from(e);
                return (
                  1 === r.cmp(f.nh) &&
                    u.n
                      .sub(r)
                      .toArrayLike(n, "be", 32)
                      .copy(i, 32),
                  i
                );
              }),
              (t.signatureExport = function(e) {
                var t = e.slice(0, 32),
                  r = e.slice(32, 64);
                if (new a(t).cmp(u.n) >= 0 || new a(r).cmp(u.n) >= 0)
                  throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
                return { r: t, s: r };
              }),
              (t.signatureImport = function(e) {
                var t = new a(e.r);
                t.cmp(u.n) >= 0 && (t = new a(0));
                var r = new a(e.s);
                return (
                  r.cmp(u.n) >= 0 && (r = new a(0)),
                  n.concat([
                    t.toArrayLike(n, "be", 32),
                    r.toArrayLike(n, "be", 32)
                  ])
                );
              }),
              (t.sign = function(e, t, r, i) {
                if ("function" == typeof r) {
                  var o = r;
                  r = function(r) {
                    var f = o(e, t, null, i, r);
                    if (!n.isBuffer(f) || 32 !== f.length)
                      throw new Error(s.ECDSA_SIGN_FAIL);
                    return new a(f);
                  };
                }
                var c = new a(t);
                if (c.cmp(u.n) >= 0 || c.isZero())
                  throw new Error(s.ECDSA_SIGN_FAIL);
                var d = f.sign(e, t, { canonical: !0, k: r, pers: i });
                return {
                  signature: n.concat([
                    d.r.toArrayLike(n, "be", 32),
                    d.s.toArrayLike(n, "be", 32)
                  ]),
                  recovery: d.recoveryParam
                };
              }),
              (t.verify = function(e, t, r) {
                var n = { r: t.slice(0, 32), s: t.slice(32, 64) },
                  i = new a(n.r),
                  o = new a(n.s);
                if (i.cmp(u.n) >= 0 || o.cmp(u.n) >= 0)
                  throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
                if (1 === o.cmp(f.nh) || i.isZero() || o.isZero()) return !1;
                var d = c(r);
                if (null === d) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
                return f.verify(e, n, { x: d.pub.x, y: d.pub.y });
              }),
              (t.recover = function(e, t, r, i) {
                var o = { r: t.slice(0, 32), s: t.slice(32, 64) },
                  c = new a(o.r),
                  d = new a(o.s);
                if (c.cmp(u.n) >= 0 || d.cmp(u.n) >= 0)
                  throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
                try {
                  if (c.isZero() || d.isZero()) throw new Error();
                  var h = f.recoverPubKey(e, o, r);
                  return n.from(h.encode(!0, i));
                } catch (e) {
                  throw new Error(s.ECDSA_RECOVER_FAIL);
                }
              }),
              (t.ecdh = function(e, r) {
                var n = t.ecdhUnsafe(e, r, !0);
                return i("sha256")
                  .update(n)
                  .digest();
              }),
              (t.ecdhUnsafe = function(e, t, r) {
                var i = c(e);
                if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
                var o = new a(t);
                if (o.cmp(u.n) >= 0 || o.isZero()) throw new Error(s.ECDH_FAIL);
                return n.from(i.pub.mul(o).encode(!0, r));
              });
          },
          function(e, t) {
            e.exports = function(e) {
              return (
                e.webpackPolyfill ||
                  ((e.deprecate = function() {}),
                  (e.paths = []),
                  e.children || (e.children = []),
                  Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                      return e.l;
                    }
                  }),
                  Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                      return e.i;
                    }
                  }),
                  (e.webpackPolyfill = 1)),
                e
              );
            };
          },
          function(e, t) {},
          function(e, t, r) {
            "use strict";
            var n = t;
            (n.version = r(203).version),
              (n.utils = r(5)),
              (n.rand = r(102)),
              (n.curve = r(103)),
              (n.curves = r(60)),
              (n.ec = r(215)),
              (n.eddsa = r(219));
          },
          function(e) {
            e.exports = JSON.parse(
              '{"name":"elliptic","version":"6.5.2","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^1.4.3","coveralls":"^3.0.8","grunt":"^1.0.4","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.2","jscs":"^3.0.7","jshint":"^2.10.3","mocha":"^6.2.2"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"}}'
            );
          },
          function(e, t) {},
          function(e, t, r) {
            "use strict";
            var n = r(5),
              i = r(6),
              a = r(0),
              o = r(39),
              s = n.assert;
            function f(e) {
              o.call(this, "short", e),
                (this.a = new i(e.a, 16).toRed(this.red)),
                (this.b = new i(e.b, 16).toRed(this.red)),
                (this.tinv = this.two.redInvm()),
                (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
                (this.threeA =
                  0 ===
                  this.a
                    .fromRed()
                    .sub(this.p)
                    .cmpn(-3)),
                (this.endo = this._getEndomorphism(e)),
                (this._endoWnafT1 = new Array(4)),
                (this._endoWnafT2 = new Array(4));
            }
            function u(e, t, r, n) {
              o.BasePoint.call(this, e, "affine"),
                null === t && null === r
                  ? ((this.x = null), (this.y = null), (this.inf = !0))
                  : ((this.x = new i(t, 16)),
                    (this.y = new i(r, 16)),
                    n &&
                      (this.x.forceRed(this.curve.red),
                      this.y.forceRed(this.curve.red)),
                    this.x.red || (this.x = this.x.toRed(this.curve.red)),
                    this.y.red || (this.y = this.y.toRed(this.curve.red)),
                    (this.inf = !1));
            }
            function c(e, t, r, n) {
              o.BasePoint.call(this, e, "jacobian"),
                null === t && null === r && null === n
                  ? ((this.x = this.curve.one),
                    (this.y = this.curve.one),
                    (this.z = new i(0)))
                  : ((this.x = new i(t, 16)),
                    (this.y = new i(r, 16)),
                    (this.z = new i(n, 16))),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.y.red || (this.y = this.y.toRed(this.curve.red)),
                this.z.red || (this.z = this.z.toRed(this.curve.red)),
                (this.zOne = this.z === this.curve.one);
            }
            a(f, o),
              (e.exports = f),
              (f.prototype._getEndomorphism = function(e) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                  var t, r;
                  if (e.beta) t = new i(e.beta, 16).toRed(this.red);
                  else {
                    var n = this._getEndoRoots(this.p);
                    t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
                  }
                  if (e.lambda) r = new i(e.lambda, 16);
                  else {
                    var a = this._getEndoRoots(this.n);
                    0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(t))
                      ? (r = a[0])
                      : ((r = a[1]),
                        s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
                  }
                  return {
                    beta: t,
                    lambda: r,
                    basis: e.basis
                      ? e.basis.map(function(e) {
                          return { a: new i(e.a, 16), b: new i(e.b, 16) };
                        })
                      : this._getEndoBasis(r)
                  };
                }
              }),
              (f.prototype._getEndoRoots = function(e) {
                var t = e === this.p ? this.red : i.mont(e),
                  r = new i(2).toRed(t).redInvm(),
                  n = r.redNeg(),
                  a = new i(3)
                    .toRed(t)
                    .redNeg()
                    .redSqrt()
                    .redMul(r);
                return [n.redAdd(a).fromRed(), n.redSub(a).fromRed()];
              }),
              (f.prototype._getEndoBasis = function(e) {
                for (
                  var t,
                    r,
                    n,
                    a,
                    o,
                    s,
                    f,
                    u,
                    c,
                    d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
                    h = e,
                    l = this.n.clone(),
                    p = new i(1),
                    b = new i(0),
                    m = new i(0),
                    v = new i(1),
                    g = 0;
                  0 !== h.cmpn(0);

                ) {
                  var y = l.div(h);
                  (u = l.sub(y.mul(h))), (c = m.sub(y.mul(p)));
                  var _ = v.sub(y.mul(b));
                  if (!n && u.cmp(d) < 0)
                    (t = f.neg()), (r = p), (n = u.neg()), (a = c);
                  else if (n && 2 == ++g) break;
                  (f = u), (l = h), (h = u), (m = p), (p = c), (v = b), (b = _);
                }
                (o = u.neg()), (s = c);
                var w = n.sqr().add(a.sqr());
                return (
                  o
                    .sqr()
                    .add(s.sqr())
                    .cmp(w) >= 0 && ((o = t), (s = r)),
                  n.negative && ((n = n.neg()), (a = a.neg())),
                  o.negative && ((o = o.neg()), (s = s.neg())),
                  [
                    { a: n, b: a },
                    { a: o, b: s }
                  ]
                );
              }),
              (f.prototype._endoSplit = function(e) {
                var t = this.endo.basis,
                  r = t[0],
                  n = t[1],
                  i = n.b.mul(e).divRound(this.n),
                  a = r.b
                    .neg()
                    .mul(e)
                    .divRound(this.n),
                  o = i.mul(r.a),
                  s = a.mul(n.a),
                  f = i.mul(r.b),
                  u = a.mul(n.b);
                return { k1: e.sub(o).sub(s), k2: f.add(u).neg() };
              }),
              (f.prototype.pointFromX = function(e, t) {
                (e = new i(e, 16)).red || (e = e.toRed(this.red));
                var r = e
                    .redSqr()
                    .redMul(e)
                    .redIAdd(e.redMul(this.a))
                    .redIAdd(this.b),
                  n = r.redSqrt();
                if (
                  0 !==
                  n
                    .redSqr()
                    .redSub(r)
                    .cmp(this.zero)
                )
                  throw new Error("invalid point");
                var a = n.fromRed().isOdd();
                return (
                  ((t && !a) || (!t && a)) && (n = n.redNeg()), this.point(e, n)
                );
              }),
              (f.prototype.validate = function(e) {
                if (e.inf) return !0;
                var t = e.x,
                  r = e.y,
                  n = this.a.redMul(t),
                  i = t
                    .redSqr()
                    .redMul(t)
                    .redIAdd(n)
                    .redIAdd(this.b);
                return (
                  0 ===
                  r
                    .redSqr()
                    .redISub(i)
                    .cmpn(0)
                );
              }),
              (f.prototype._endoWnafMulAdd = function(e, t, r) {
                for (
                  var n = this._endoWnafT1, i = this._endoWnafT2, a = 0;
                  a < e.length;
                  a++
                ) {
                  var o = this._endoSplit(t[a]),
                    s = e[a],
                    f = s._getBeta();
                  o.k1.negative && (o.k1.ineg(), (s = s.neg(!0))),
                    o.k2.negative && (o.k2.ineg(), (f = f.neg(!0))),
                    (n[2 * a] = s),
                    (n[2 * a + 1] = f),
                    (i[2 * a] = o.k1),
                    (i[2 * a + 1] = o.k2);
                }
                for (
                  var u = this._wnafMulAdd(1, n, i, 2 * a, r), c = 0;
                  c < 2 * a;
                  c++
                )
                  (n[c] = null), (i[c] = null);
                return u;
              }),
              a(u, o.BasePoint),
              (f.prototype.point = function(e, t, r) {
                return new u(this, e, t, r);
              }),
              (f.prototype.pointFromJSON = function(e, t) {
                return u.fromJSON(this, e, t);
              }),
              (u.prototype._getBeta = function() {
                if (this.curve.endo) {
                  var e = this.precomputed;
                  if (e && e.beta) return e.beta;
                  var t = this.curve.point(
                    this.x.redMul(this.curve.endo.beta),
                    this.y
                  );
                  if (e) {
                    var r = this.curve,
                      n = function(e) {
                        return r.point(e.x.redMul(r.endo.beta), e.y);
                      };
                    (e.beta = t),
                      (t.precomputed = {
                        beta: null,
                        naf: e.naf && {
                          wnd: e.naf.wnd,
                          points: e.naf.points.map(n)
                        },
                        doubles: e.doubles && {
                          step: e.doubles.step,
                          points: e.doubles.points.map(n)
                        }
                      });
                  }
                  return t;
                }
              }),
              (u.prototype.toJSON = function() {
                return this.precomputed
                  ? [
                      this.x,
                      this.y,
                      this.precomputed && {
                        doubles: this.precomputed.doubles && {
                          step: this.precomputed.doubles.step,
                          points: this.precomputed.doubles.points.slice(1)
                        },
                        naf: this.precomputed.naf && {
                          wnd: this.precomputed.naf.wnd,
                          points: this.precomputed.naf.points.slice(1)
                        }
                      }
                    ]
                  : [this.x, this.y];
              }),
              (u.fromJSON = function(e, t, r) {
                "string" == typeof t && (t = JSON.parse(t));
                var n = e.point(t[0], t[1], r);
                if (!t[2]) return n;
                function i(t) {
                  return e.point(t[0], t[1], r);
                }
                var a = t[2];
                return (
                  (n.precomputed = {
                    beta: null,
                    doubles: a.doubles && {
                      step: a.doubles.step,
                      points: [n].concat(a.doubles.points.map(i))
                    },
                    naf: a.naf && {
                      wnd: a.naf.wnd,
                      points: [n].concat(a.naf.points.map(i))
                    }
                  }),
                  n
                );
              }),
              (u.prototype.inspect = function() {
                return this.isInfinity()
                  ? "<EC Point Infinity>"
                  : "<EC Point x: " +
                      this.x.fromRed().toString(16, 2) +
                      " y: " +
                      this.y.fromRed().toString(16, 2) +
                      ">";
              }),
              (u.prototype.isInfinity = function() {
                return this.inf;
              }),
              (u.prototype.add = function(e) {
                if (this.inf) return e;
                if (e.inf) return this;
                if (this.eq(e)) return this.dbl();
                if (this.neg().eq(e)) return this.curve.point(null, null);
                if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
                var t = this.y.redSub(e.y);
                0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
                var r = t
                    .redSqr()
                    .redISub(this.x)
                    .redISub(e.x),
                  n = t.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, n);
              }),
              (u.prototype.dbl = function() {
                if (this.inf) return this;
                var e = this.y.redAdd(this.y);
                if (0 === e.cmpn(0)) return this.curve.point(null, null);
                var t = this.curve.a,
                  r = this.x.redSqr(),
                  n = e.redInvm(),
                  i = r
                    .redAdd(r)
                    .redIAdd(r)
                    .redIAdd(t)
                    .redMul(n),
                  a = i.redSqr().redISub(this.x.redAdd(this.x)),
                  o = i.redMul(this.x.redSub(a)).redISub(this.y);
                return this.curve.point(a, o);
              }),
              (u.prototype.getX = function() {
                return this.x.fromRed();
              }),
              (u.prototype.getY = function() {
                return this.y.fromRed();
              }),
              (u.prototype.mul = function(e) {
                return (
                  (e = new i(e, 16)),
                  this.isInfinity()
                    ? this
                    : this._hasDoubles(e)
                    ? this.curve._fixedNafMul(this, e)
                    : this.curve.endo
                    ? this.curve._endoWnafMulAdd([this], [e])
                    : this.curve._wnafMul(this, e)
                );
              }),
              (u.prototype.mulAdd = function(e, t, r) {
                var n = [this, t],
                  i = [e, r];
                return this.curve.endo
                  ? this.curve._endoWnafMulAdd(n, i)
                  : this.curve._wnafMulAdd(1, n, i, 2);
              }),
              (u.prototype.jmulAdd = function(e, t, r) {
                var n = [this, t],
                  i = [e, r];
                return this.curve.endo
                  ? this.curve._endoWnafMulAdd(n, i, !0)
                  : this.curve._wnafMulAdd(1, n, i, 2, !0);
              }),
              (u.prototype.eq = function(e) {
                return (
                  this === e ||
                  (this.inf === e.inf &&
                    (this.inf ||
                      (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
                );
              }),
              (u.prototype.neg = function(e) {
                if (this.inf) return this;
                var t = this.curve.point(this.x, this.y.redNeg());
                if (e && this.precomputed) {
                  var r = this.precomputed,
                    n = function(e) {
                      return e.neg();
                    };
                  t.precomputed = {
                    naf: r.naf && {
                      wnd: r.naf.wnd,
                      points: r.naf.points.map(n)
                    },
                    doubles: r.doubles && {
                      step: r.doubles.step,
                      points: r.doubles.points.map(n)
                    }
                  };
                }
                return t;
              }),
              (u.prototype.toJ = function() {
                return this.inf
                  ? this.curve.jpoint(null, null, null)
                  : this.curve.jpoint(this.x, this.y, this.curve.one);
              }),
              a(c, o.BasePoint),
              (f.prototype.jpoint = function(e, t, r) {
                return new c(this, e, t, r);
              }),
              (c.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var e = this.z.redInvm(),
                  t = e.redSqr(),
                  r = this.x.redMul(t),
                  n = this.y.redMul(t).redMul(e);
                return this.curve.point(r, n);
              }),
              (c.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
              }),
              (c.prototype.add = function(e) {
                if (this.isInfinity()) return e;
                if (e.isInfinity()) return this;
                var t = e.z.redSqr(),
                  r = this.z.redSqr(),
                  n = this.x.redMul(t),
                  i = e.x.redMul(r),
                  a = this.y.redMul(t.redMul(e.z)),
                  o = e.y.redMul(r.redMul(this.z)),
                  s = n.redSub(i),
                  f = a.redSub(o);
                if (0 === s.cmpn(0))
                  return 0 !== f.cmpn(0)
                    ? this.curve.jpoint(null, null, null)
                    : this.dbl();
                var u = s.redSqr(),
                  c = u.redMul(s),
                  d = n.redMul(u),
                  h = f
                    .redSqr()
                    .redIAdd(c)
                    .redISub(d)
                    .redISub(d),
                  l = f.redMul(d.redISub(h)).redISub(a.redMul(c)),
                  p = this.z.redMul(e.z).redMul(s);
                return this.curve.jpoint(h, l, p);
              }),
              (c.prototype.mixedAdd = function(e) {
                if (this.isInfinity()) return e.toJ();
                if (e.isInfinity()) return this;
                var t = this.z.redSqr(),
                  r = this.x,
                  n = e.x.redMul(t),
                  i = this.y,
                  a = e.y.redMul(t).redMul(this.z),
                  o = r.redSub(n),
                  s = i.redSub(a);
                if (0 === o.cmpn(0))
                  return 0 !== s.cmpn(0)
                    ? this.curve.jpoint(null, null, null)
                    : this.dbl();
                var f = o.redSqr(),
                  u = f.redMul(o),
                  c = r.redMul(f),
                  d = s
                    .redSqr()
                    .redIAdd(u)
                    .redISub(c)
                    .redISub(c),
                  h = s.redMul(c.redISub(d)).redISub(i.redMul(u)),
                  l = this.z.redMul(o);
                return this.curve.jpoint(d, h, l);
              }),
              (c.prototype.dblp = function(e) {
                if (0 === e) return this;
                if (this.isInfinity()) return this;
                if (!e) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                  for (var t = this, r = 0; r < e; r++) t = t.dbl();
                  return t;
                }
                var n = this.curve.a,
                  i = this.curve.tinv,
                  a = this.x,
                  o = this.y,
                  s = this.z,
                  f = s.redSqr().redSqr(),
                  u = o.redAdd(o);
                for (r = 0; r < e; r++) {
                  var c = a.redSqr(),
                    d = u.redSqr(),
                    h = d.redSqr(),
                    l = c
                      .redAdd(c)
                      .redIAdd(c)
                      .redIAdd(n.redMul(f)),
                    p = a.redMul(d),
                    b = l.redSqr().redISub(p.redAdd(p)),
                    m = p.redISub(b),
                    v = l.redMul(m);
                  v = v.redIAdd(v).redISub(h);
                  var g = u.redMul(s);
                  r + 1 < e && (f = f.redMul(h)), (a = b), (s = g), (u = v);
                }
                return this.curve.jpoint(a, u.redMul(i), s);
              }),
              (c.prototype.dbl = function() {
                return this.isInfinity()
                  ? this
                  : this.curve.zeroA
                  ? this._zeroDbl()
                  : this.curve.threeA
                  ? this._threeDbl()
                  : this._dbl();
              }),
              (c.prototype._zeroDbl = function() {
                var e, t, r;
                if (this.zOne) {
                  var n = this.x.redSqr(),
                    i = this.y.redSqr(),
                    a = i.redSqr(),
                    o = this.x
                      .redAdd(i)
                      .redSqr()
                      .redISub(n)
                      .redISub(a);
                  o = o.redIAdd(o);
                  var s = n.redAdd(n).redIAdd(n),
                    f = s
                      .redSqr()
                      .redISub(o)
                      .redISub(o),
                    u = a.redIAdd(a);
                  (u = (u = u.redIAdd(u)).redIAdd(u)),
                    (e = f),
                    (t = s.redMul(o.redISub(f)).redISub(u)),
                    (r = this.y.redAdd(this.y));
                } else {
                  var c = this.x.redSqr(),
                    d = this.y.redSqr(),
                    h = d.redSqr(),
                    l = this.x
                      .redAdd(d)
                      .redSqr()
                      .redISub(c)
                      .redISub(h);
                  l = l.redIAdd(l);
                  var p = c.redAdd(c).redIAdd(c),
                    b = p.redSqr(),
                    m = h.redIAdd(h);
                  (m = (m = m.redIAdd(m)).redIAdd(m)),
                    (e = b.redISub(l).redISub(l)),
                    (t = p.redMul(l.redISub(e)).redISub(m)),
                    (r = (r = this.y.redMul(this.z)).redIAdd(r));
                }
                return this.curve.jpoint(e, t, r);
              }),
              (c.prototype._threeDbl = function() {
                var e, t, r;
                if (this.zOne) {
                  var n = this.x.redSqr(),
                    i = this.y.redSqr(),
                    a = i.redSqr(),
                    o = this.x
                      .redAdd(i)
                      .redSqr()
                      .redISub(n)
                      .redISub(a);
                  o = o.redIAdd(o);
                  var s = n
                      .redAdd(n)
                      .redIAdd(n)
                      .redIAdd(this.curve.a),
                    f = s
                      .redSqr()
                      .redISub(o)
                      .redISub(o);
                  e = f;
                  var u = a.redIAdd(a);
                  (u = (u = u.redIAdd(u)).redIAdd(u)),
                    (t = s.redMul(o.redISub(f)).redISub(u)),
                    (r = this.y.redAdd(this.y));
                } else {
                  var c = this.z.redSqr(),
                    d = this.y.redSqr(),
                    h = this.x.redMul(d),
                    l = this.x.redSub(c).redMul(this.x.redAdd(c));
                  l = l.redAdd(l).redIAdd(l);
                  var p = h.redIAdd(h),
                    b = (p = p.redIAdd(p)).redAdd(p);
                  (e = l.redSqr().redISub(b)),
                    (r = this.y
                      .redAdd(this.z)
                      .redSqr()
                      .redISub(d)
                      .redISub(c));
                  var m = d.redSqr();
                  (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
                    (t = l.redMul(p.redISub(e)).redISub(m));
                }
                return this.curve.jpoint(e, t, r);
              }),
              (c.prototype._dbl = function() {
                var e = this.curve.a,
                  t = this.x,
                  r = this.y,
                  n = this.z,
                  i = n.redSqr().redSqr(),
                  a = t.redSqr(),
                  o = r.redSqr(),
                  s = a
                    .redAdd(a)
                    .redIAdd(a)
                    .redIAdd(e.redMul(i)),
                  f = t.redAdd(t),
                  u = (f = f.redIAdd(f)).redMul(o),
                  c = s.redSqr().redISub(u.redAdd(u)),
                  d = u.redISub(c),
                  h = o.redSqr();
                h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
                var l = s.redMul(d).redISub(h),
                  p = r.redAdd(r).redMul(n);
                return this.curve.jpoint(c, l, p);
              }),
              (c.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var e = this.x.redSqr(),
                  t = this.y.redSqr(),
                  r = this.z.redSqr(),
                  n = t.redSqr(),
                  i = e.redAdd(e).redIAdd(e),
                  a = i.redSqr(),
                  o = this.x
                    .redAdd(t)
                    .redSqr()
                    .redISub(e)
                    .redISub(n),
                  s = (o = (o = (o = o.redIAdd(o))
                    .redAdd(o)
                    .redIAdd(o)).redISub(a)).redSqr(),
                  f = n.redIAdd(n);
                f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
                var u = i
                    .redIAdd(o)
                    .redSqr()
                    .redISub(a)
                    .redISub(s)
                    .redISub(f),
                  c = t.redMul(u);
                c = (c = c.redIAdd(c)).redIAdd(c);
                var d = this.x.redMul(s).redISub(c);
                d = (d = d.redIAdd(d)).redIAdd(d);
                var h = this.y.redMul(
                  u.redMul(f.redISub(u)).redISub(o.redMul(s))
                );
                h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
                var l = this.z
                  .redAdd(o)
                  .redSqr()
                  .redISub(r)
                  .redISub(s);
                return this.curve.jpoint(d, h, l);
              }),
              (c.prototype.mul = function(e, t) {
                return (e = new i(e, t)), this.curve._wnafMul(this, e);
              }),
              (c.prototype.eq = function(e) {
                if ("affine" === e.type) return this.eq(e.toJ());
                if (this === e) return !0;
                var t = this.z.redSqr(),
                  r = e.z.redSqr();
                if (
                  0 !==
                  this.x
                    .redMul(r)
                    .redISub(e.x.redMul(t))
                    .cmpn(0)
                )
                  return !1;
                var n = t.redMul(this.z),
                  i = r.redMul(e.z);
                return (
                  0 ===
                  this.y
                    .redMul(i)
                    .redISub(e.y.redMul(n))
                    .cmpn(0)
                );
              }),
              (c.prototype.eqXToP = function(e) {
                var t = this.z.redSqr(),
                  r = e.toRed(this.curve.red).redMul(t);
                if (0 === this.x.cmp(r)) return !0;
                for (var n = e.clone(), i = this.curve.redN.redMul(t); ; ) {
                  if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0))
                    return !1;
                  if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
                }
              }),
              (c.prototype.inspect = function() {
                return this.isInfinity()
                  ? "<EC JPoint Infinity>"
                  : "<EC JPoint x: " +
                      this.x.toString(16, 2) +
                      " y: " +
                      this.y.toString(16, 2) +
                      " z: " +
                      this.z.toString(16, 2) +
                      ">";
              }),
              (c.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0);
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(6),
              i = r(0),
              a = r(39),
              o = r(5);
            function s(e) {
              a.call(this, "mont", e),
                (this.a = new n(e.a, 16).toRed(this.red)),
                (this.b = new n(e.b, 16).toRed(this.red)),
                (this.i4 = new n(4).toRed(this.red).redInvm()),
                (this.two = new n(2).toRed(this.red)),
                (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
            }
            function f(e, t, r) {
              a.BasePoint.call(this, e, "projective"),
                null === t && null === r
                  ? ((this.x = this.curve.one), (this.z = this.curve.zero))
                  : ((this.x = new n(t, 16)),
                    (this.z = new n(r, 16)),
                    this.x.red || (this.x = this.x.toRed(this.curve.red)),
                    this.z.red || (this.z = this.z.toRed(this.curve.red)));
            }
            i(s, a),
              (e.exports = s),
              (s.prototype.validate = function(e) {
                var t = e.normalize().x,
                  r = t.redSqr(),
                  n = r
                    .redMul(t)
                    .redAdd(r.redMul(this.a))
                    .redAdd(t);
                return (
                  0 ===
                  n
                    .redSqrt()
                    .redSqr()
                    .cmp(n)
                );
              }),
              i(f, a.BasePoint),
              (s.prototype.decodePoint = function(e, t) {
                return this.point(o.toArray(e, t), 1);
              }),
              (s.prototype.point = function(e, t) {
                return new f(this, e, t);
              }),
              (s.prototype.pointFromJSON = function(e) {
                return f.fromJSON(this, e);
              }),
              (f.prototype.precompute = function() {}),
              (f.prototype._encode = function() {
                return this.getX().toArray("be", this.curve.p.byteLength());
              }),
              (f.fromJSON = function(e, t) {
                return new f(e, t[0], t[1] || e.one);
              }),
              (f.prototype.inspect = function() {
                return this.isInfinity()
                  ? "<EC Point Infinity>"
                  : "<EC Point x: " +
                      this.x.fromRed().toString(16, 2) +
                      " z: " +
                      this.z.fromRed().toString(16, 2) +
                      ">";
              }),
              (f.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0);
              }),
              (f.prototype.dbl = function() {
                var e = this.x.redAdd(this.z).redSqr(),
                  t = this.x.redSub(this.z).redSqr(),
                  r = e.redSub(t),
                  n = e.redMul(t),
                  i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
                return this.curve.point(n, i);
              }),
              (f.prototype.add = function() {
                throw new Error("Not supported on Montgomery curve");
              }),
              (f.prototype.diffAdd = function(e, t) {
                var r = this.x.redAdd(this.z),
                  n = this.x.redSub(this.z),
                  i = e.x.redAdd(e.z),
                  a = e.x.redSub(e.z).redMul(r),
                  o = i.redMul(n),
                  s = t.z.redMul(a.redAdd(o).redSqr()),
                  f = t.x.redMul(a.redISub(o).redSqr());
                return this.curve.point(s, f);
              }),
              (f.prototype.mul = function(e) {
                for (
                  var t = e.clone(),
                    r = this,
                    n = this.curve.point(null, null),
                    i = [];
                  0 !== t.cmpn(0);
                  t.iushrn(1)
                )
                  i.push(t.andln(1));
                for (var a = i.length - 1; a >= 0; a--)
                  0 === i[a]
                    ? ((r = r.diffAdd(n, this)), (n = n.dbl()))
                    : ((n = r.diffAdd(n, this)), (r = r.dbl()));
                return n;
              }),
              (f.prototype.mulAdd = function() {
                throw new Error("Not supported on Montgomery curve");
              }),
              (f.prototype.jumlAdd = function() {
                throw new Error("Not supported on Montgomery curve");
              }),
              (f.prototype.eq = function(e) {
                return 0 === this.getX().cmp(e.getX());
              }),
              (f.prototype.normalize = function() {
                return (
                  (this.x = this.x.redMul(this.z.redInvm())),
                  (this.z = this.curve.one),
                  this
                );
              }),
              (f.prototype.getX = function() {
                return this.normalize(), this.x.fromRed();
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(5),
              i = r(6),
              a = r(0),
              o = r(39),
              s = n.assert;
            function f(e) {
              (this.twisted = 1 != (0 | e.a)),
                (this.mOneA = this.twisted && -1 == (0 | e.a)),
                (this.extended = this.mOneA),
                o.call(this, "edwards", e),
                (this.a = new i(e.a, 16).umod(this.red.m)),
                (this.a = this.a.toRed(this.red)),
                (this.c = new i(e.c, 16).toRed(this.red)),
                (this.c2 = this.c.redSqr()),
                (this.d = new i(e.d, 16).toRed(this.red)),
                (this.dd = this.d.redAdd(this.d)),
                s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
                (this.oneC = 1 == (0 | e.c));
            }
            function u(e, t, r, n, a) {
              o.BasePoint.call(this, e, "projective"),
                null === t && null === r && null === n
                  ? ((this.x = this.curve.zero),
                    (this.y = this.curve.one),
                    (this.z = this.curve.one),
                    (this.t = this.curve.zero),
                    (this.zOne = !0))
                  : ((this.x = new i(t, 16)),
                    (this.y = new i(r, 16)),
                    (this.z = n ? new i(n, 16) : this.curve.one),
                    (this.t = a && new i(a, 16)),
                    this.x.red || (this.x = this.x.toRed(this.curve.red)),
                    this.y.red || (this.y = this.y.toRed(this.curve.red)),
                    this.z.red || (this.z = this.z.toRed(this.curve.red)),
                    this.t &&
                      !this.t.red &&
                      (this.t = this.t.toRed(this.curve.red)),
                    (this.zOne = this.z === this.curve.one),
                    this.curve.extended &&
                      !this.t &&
                      ((this.t = this.x.redMul(this.y)),
                      this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
            }
            a(f, o),
              (e.exports = f),
              (f.prototype._mulA = function(e) {
                return this.mOneA ? e.redNeg() : this.a.redMul(e);
              }),
              (f.prototype._mulC = function(e) {
                return this.oneC ? e : this.c.redMul(e);
              }),
              (f.prototype.jpoint = function(e, t, r, n) {
                return this.point(e, t, r, n);
              }),
              (f.prototype.pointFromX = function(e, t) {
                (e = new i(e, 16)).red || (e = e.toRed(this.red));
                var r = e.redSqr(),
                  n = this.c2.redSub(this.a.redMul(r)),
                  a = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                  o = n.redMul(a.redInvm()),
                  s = o.redSqrt();
                if (
                  0 !==
                  s
                    .redSqr()
                    .redSub(o)
                    .cmp(this.zero)
                )
                  throw new Error("invalid point");
                var f = s.fromRed().isOdd();
                return (
                  ((t && !f) || (!t && f)) && (s = s.redNeg()), this.point(e, s)
                );
              }),
              (f.prototype.pointFromY = function(e, t) {
                (e = new i(e, 16)).red || (e = e.toRed(this.red));
                var r = e.redSqr(),
                  n = r.redSub(this.c2),
                  a = r
                    .redMul(this.d)
                    .redMul(this.c2)
                    .redSub(this.a),
                  o = n.redMul(a.redInvm());
                if (0 === o.cmp(this.zero)) {
                  if (t) throw new Error("invalid point");
                  return this.point(this.zero, e);
                }
                var s = o.redSqrt();
                if (
                  0 !==
                  s
                    .redSqr()
                    .redSub(o)
                    .cmp(this.zero)
                )
                  throw new Error("invalid point");
                return (
                  s.fromRed().isOdd() !== t && (s = s.redNeg()),
                  this.point(s, e)
                );
              }),
              (f.prototype.validate = function(e) {
                if (e.isInfinity()) return !0;
                e.normalize();
                var t = e.x.redSqr(),
                  r = e.y.redSqr(),
                  n = t.redMul(this.a).redAdd(r),
                  i = this.c2.redMul(
                    this.one.redAdd(this.d.redMul(t).redMul(r))
                  );
                return 0 === n.cmp(i);
              }),
              a(u, o.BasePoint),
              (f.prototype.pointFromJSON = function(e) {
                return u.fromJSON(this, e);
              }),
              (f.prototype.point = function(e, t, r, n) {
                return new u(this, e, t, r, n);
              }),
              (u.fromJSON = function(e, t) {
                return new u(e, t[0], t[1], t[2]);
              }),
              (u.prototype.inspect = function() {
                return this.isInfinity()
                  ? "<EC Point Infinity>"
                  : "<EC Point x: " +
                      this.x.fromRed().toString(16, 2) +
                      " y: " +
                      this.y.fromRed().toString(16, 2) +
                      " z: " +
                      this.z.fromRed().toString(16, 2) +
                      ">";
              }),
              (u.prototype.isInfinity = function() {
                return (
                  0 === this.x.cmpn(0) &&
                  (0 === this.y.cmp(this.z) ||
                    (this.zOne && 0 === this.y.cmp(this.curve.c)))
                );
              }),
              (u.prototype._extDbl = function() {
                var e = this.x.redSqr(),
                  t = this.y.redSqr(),
                  r = this.z.redSqr();
                r = r.redIAdd(r);
                var n = this.curve._mulA(e),
                  i = this.x
                    .redAdd(this.y)
                    .redSqr()
                    .redISub(e)
                    .redISub(t),
                  a = n.redAdd(t),
                  o = a.redSub(r),
                  s = n.redSub(t),
                  f = i.redMul(o),
                  u = a.redMul(s),
                  c = i.redMul(s),
                  d = o.redMul(a);
                return this.curve.point(f, u, d, c);
              }),
              (u.prototype._projDbl = function() {
                var e,
                  t,
                  r,
                  n = this.x.redAdd(this.y).redSqr(),
                  i = this.x.redSqr(),
                  a = this.y.redSqr();
                if (this.curve.twisted) {
                  var o = (u = this.curve._mulA(i)).redAdd(a);
                  if (this.zOne)
                    (e = n
                      .redSub(i)
                      .redSub(a)
                      .redMul(o.redSub(this.curve.two))),
                      (t = o.redMul(u.redSub(a))),
                      (r = o
                        .redSqr()
                        .redSub(o)
                        .redSub(o));
                  else {
                    var s = this.z.redSqr(),
                      f = o.redSub(s).redISub(s);
                    (e = n
                      .redSub(i)
                      .redISub(a)
                      .redMul(f)),
                      (t = o.redMul(u.redSub(a))),
                      (r = o.redMul(f));
                  }
                } else {
                  var u = i.redAdd(a);
                  (s = this.curve._mulC(this.z).redSqr()),
                    (f = u.redSub(s).redSub(s)),
                    (e = this.curve._mulC(n.redISub(u)).redMul(f)),
                    (t = this.curve._mulC(u).redMul(i.redISub(a))),
                    (r = u.redMul(f));
                }
                return this.curve.point(e, t, r);
              }),
              (u.prototype.dbl = function() {
                return this.isInfinity()
                  ? this
                  : this.curve.extended
                  ? this._extDbl()
                  : this._projDbl();
              }),
              (u.prototype._extAdd = function(e) {
                var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                  r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                  n = this.t.redMul(this.curve.dd).redMul(e.t),
                  i = this.z.redMul(e.z.redAdd(e.z)),
                  a = r.redSub(t),
                  o = i.redSub(n),
                  s = i.redAdd(n),
                  f = r.redAdd(t),
                  u = a.redMul(o),
                  c = s.redMul(f),
                  d = a.redMul(f),
                  h = o.redMul(s);
                return this.curve.point(u, c, h, d);
              }),
              (u.prototype._projAdd = function(e) {
                var t,
                  r,
                  n = this.z.redMul(e.z),
                  i = n.redSqr(),
                  a = this.x.redMul(e.x),
                  o = this.y.redMul(e.y),
                  s = this.curve.d.redMul(a).redMul(o),
                  f = i.redSub(s),
                  u = i.redAdd(s),
                  c = this.x
                    .redAdd(this.y)
                    .redMul(e.x.redAdd(e.y))
                    .redISub(a)
                    .redISub(o),
                  d = n.redMul(f).redMul(c);
                return (
                  this.curve.twisted
                    ? ((t = n.redMul(u).redMul(o.redSub(this.curve._mulA(a)))),
                      (r = f.redMul(u)))
                    : ((t = n.redMul(u).redMul(o.redSub(a))),
                      (r = this.curve._mulC(f).redMul(u))),
                  this.curve.point(d, t, r)
                );
              }),
              (u.prototype.add = function(e) {
                return this.isInfinity()
                  ? e
                  : e.isInfinity()
                  ? this
                  : this.curve.extended
                  ? this._extAdd(e)
                  : this._projAdd(e);
              }),
              (u.prototype.mul = function(e) {
                return this._hasDoubles(e)
                  ? this.curve._fixedNafMul(this, e)
                  : this.curve._wnafMul(this, e);
              }),
              (u.prototype.mulAdd = function(e, t, r) {
                return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1);
              }),
              (u.prototype.jmulAdd = function(e, t, r) {
                return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0);
              }),
              (u.prototype.normalize = function() {
                if (this.zOne) return this;
                var e = this.z.redInvm();
                return (
                  (this.x = this.x.redMul(e)),
                  (this.y = this.y.redMul(e)),
                  this.t && (this.t = this.t.redMul(e)),
                  (this.z = this.curve.one),
                  (this.zOne = !0),
                  this
                );
              }),
              (u.prototype.neg = function() {
                return this.curve.point(
                  this.x.redNeg(),
                  this.y,
                  this.z,
                  this.t && this.t.redNeg()
                );
              }),
              (u.prototype.getX = function() {
                return this.normalize(), this.x.fromRed();
              }),
              (u.prototype.getY = function() {
                return this.normalize(), this.y.fromRed();
              }),
              (u.prototype.eq = function(e) {
                return (
                  this === e ||
                  (0 === this.getX().cmp(e.getX()) &&
                    0 === this.getY().cmp(e.getY()))
                );
              }),
              (u.prototype.eqXToP = function(e) {
                var t = e.toRed(this.curve.red).redMul(this.z);
                if (0 === this.x.cmp(t)) return !0;
                for (
                  var r = e.clone(), n = this.curve.redN.redMul(this.z);
                  ;

                ) {
                  if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0))
                    return !1;
                  if ((t.redIAdd(n), 0 === this.x.cmp(t))) return !0;
                }
              }),
              (u.prototype.toP = u.prototype.normalize),
              (u.prototype.mixedAdd = u.prototype.add);
          },
          function(e, t, r) {
            "use strict";
            (t.sha1 = r(209)),
              (t.sha224 = r(210)),
              (t.sha256 = r(105)),
              (t.sha384 = r(211)),
              (t.sha512 = r(106));
          },
          function(e, t, r) {
            "use strict";
            var n = r(7),
              i = r(31),
              a = r(104),
              o = n.rotl32,
              s = n.sum32,
              f = n.sum32_5,
              u = a.ft_1,
              c = i.BlockHash,
              d = [1518500249, 1859775393, 2400959708, 3395469782];
            function h() {
              if (!(this instanceof h)) return new h();
              c.call(this),
                (this.h = [
                  1732584193,
                  4023233417,
                  2562383102,
                  271733878,
                  3285377520
                ]),
                (this.W = new Array(80));
            }
            n.inherits(h, c),
              (e.exports = h),
              (h.blockSize = 512),
              (h.outSize = 160),
              (h.hmacStrength = 80),
              (h.padLength = 64),
              (h.prototype._update = function(e, t) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
                for (; n < r.length; n++)
                  r[n] = o(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
                var i = this.h[0],
                  a = this.h[1],
                  c = this.h[2],
                  h = this.h[3],
                  l = this.h[4];
                for (n = 0; n < r.length; n++) {
                  var p = ~~(n / 20),
                    b = f(o(i, 5), u(p, a, c, h), l, r[n], d[p]);
                  (l = h), (h = c), (c = o(a, 30)), (a = i), (i = b);
                }
                (this.h[0] = s(this.h[0], i)),
                  (this.h[1] = s(this.h[1], a)),
                  (this.h[2] = s(this.h[2], c)),
                  (this.h[3] = s(this.h[3], h)),
                  (this.h[4] = s(this.h[4], l));
              }),
              (h.prototype._digest = function(e) {
                return "hex" === e
                  ? n.toHex32(this.h, "big")
                  : n.split32(this.h, "big");
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(7),
              i = r(105);
            function a() {
              if (!(this instanceof a)) return new a();
              i.call(this),
                (this.h = [
                  3238371032,
                  914150663,
                  812702999,
                  4144912697,
                  4290775857,
                  1750603025,
                  1694076839,
                  3204075428
                ]);
            }
            n.inherits(a, i),
              (e.exports = a),
              (a.blockSize = 512),
              (a.outSize = 224),
              (a.hmacStrength = 192),
              (a.padLength = 64),
              (a.prototype._digest = function(e) {
                return "hex" === e
                  ? n.toHex32(this.h.slice(0, 7), "big")
                  : n.split32(this.h.slice(0, 7), "big");
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(7),
              i = r(106);
            function a() {
              if (!(this instanceof a)) return new a();
              i.call(this),
                (this.h = [
                  3418070365,
                  3238371032,
                  1654270250,
                  914150663,
                  2438529370,
                  812702999,
                  355462360,
                  4144912697,
                  1731405415,
                  4290775857,
                  2394180231,
                  1750603025,
                  3675008525,
                  1694076839,
                  1203062813,
                  3204075428
                ]);
            }
            n.inherits(a, i),
              (e.exports = a),
              (a.blockSize = 1024),
              (a.outSize = 384),
              (a.hmacStrength = 192),
              (a.padLength = 128),
              (a.prototype._digest = function(e) {
                return "hex" === e
                  ? n.toHex32(this.h.slice(0, 12), "big")
                  : n.split32(this.h.slice(0, 12), "big");
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(7),
              i = r(31),
              a = n.rotl32,
              o = n.sum32,
              s = n.sum32_3,
              f = n.sum32_4,
              u = i.BlockHash;
            function c() {
              if (!(this instanceof c)) return new c();
              u.call(this),
                (this.h = [
                  1732584193,
                  4023233417,
                  2562383102,
                  271733878,
                  3285377520
                ]),
                (this.endian = "little");
            }
            function d(e, t, r, n) {
              return e <= 15
                ? t ^ r ^ n
                : e <= 31
                ? (t & r) | (~t & n)
                : e <= 47
                ? (t | ~r) ^ n
                : e <= 63
                ? (t & n) | (r & ~n)
                : t ^ (r | ~n);
            }
            function h(e) {
              return e <= 15
                ? 0
                : e <= 31
                ? 1518500249
                : e <= 47
                ? 1859775393
                : e <= 63
                ? 2400959708
                : 2840853838;
            }
            function l(e) {
              return e <= 15
                ? 1352829926
                : e <= 31
                ? 1548603684
                : e <= 47
                ? 1836072691
                : e <= 63
                ? 2053994217
                : 0;
            }
            n.inherits(c, u),
              (t.ripemd160 = c),
              (c.blockSize = 512),
              (c.outSize = 160),
              (c.hmacStrength = 192),
              (c.padLength = 64),
              (c.prototype._update = function(e, t) {
                for (
                  var r = this.h[0],
                    n = this.h[1],
                    i = this.h[2],
                    u = this.h[3],
                    c = this.h[4],
                    g = r,
                    y = n,
                    _ = i,
                    w = u,
                    E = c,
                    A = 0;
                  A < 80;
                  A++
                ) {
                  var S = o(a(f(r, d(A, n, i, u), e[p[A] + t], h(A)), m[A]), c);
                  (r = c),
                    (c = u),
                    (u = a(i, 10)),
                    (i = n),
                    (n = S),
                    (S = o(
                      a(f(g, d(79 - A, y, _, w), e[b[A] + t], l(A)), v[A]),
                      E
                    )),
                    (g = E),
                    (E = w),
                    (w = a(_, 10)),
                    (_ = y),
                    (y = S);
                }
                (S = s(this.h[1], i, w)),
                  (this.h[1] = s(this.h[2], u, E)),
                  (this.h[2] = s(this.h[3], c, g)),
                  (this.h[3] = s(this.h[4], r, y)),
                  (this.h[4] = s(this.h[0], n, _)),
                  (this.h[0] = S);
              }),
              (c.prototype._digest = function(e) {
                return "hex" === e
                  ? n.toHex32(this.h, "little")
                  : n.split32(this.h, "little");
              });
            var p = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                7,
                4,
                13,
                1,
                10,
                6,
                15,
                3,
                12,
                0,
                9,
                5,
                2,
                14,
                11,
                8,
                3,
                10,
                14,
                4,
                9,
                15,
                8,
                1,
                2,
                7,
                0,
                6,
                13,
                11,
                5,
                12,
                1,
                9,
                11,
                10,
                0,
                8,
                12,
                4,
                13,
                3,
                7,
                15,
                14,
                5,
                6,
                2,
                4,
                0,
                5,
                9,
                7,
                12,
                2,
                10,
                14,
                1,
                3,
                8,
                11,
                6,
                15,
                13
              ],
              b = [
                5,
                14,
                7,
                0,
                9,
                2,
                11,
                4,
                13,
                6,
                15,
                8,
                1,
                10,
                3,
                12,
                6,
                11,
                3,
                7,
                0,
                13,
                5,
                10,
                14,
                15,
                8,
                12,
                4,
                9,
                1,
                2,
                15,
                5,
                1,
                3,
                7,
                14,
                6,
                9,
                11,
                8,
                12,
                2,
                10,
                0,
                4,
                13,
                8,
                6,
                4,
                1,
                3,
                11,
                15,
                0,
                5,
                12,
                2,
                13,
                9,
                7,
                10,
                14,
                12,
                15,
                10,
                4,
                1,
                5,
                8,
                7,
                6,
                2,
                13,
                14,
                0,
                3,
                9,
                11
              ],
              m = [
                11,
                14,
                15,
                12,
                5,
                8,
                7,
                9,
                11,
                13,
                14,
                15,
                6,
                7,
                9,
                8,
                7,
                6,
                8,
                13,
                11,
                9,
                7,
                15,
                7,
                12,
                15,
                9,
                11,
                7,
                13,
                12,
                11,
                13,
                6,
                7,
                14,
                9,
                13,
                15,
                14,
                8,
                13,
                6,
                5,
                12,
                7,
                5,
                11,
                12,
                14,
                15,
                14,
                15,
                9,
                8,
                9,
                14,
                5,
                6,
                8,
                6,
                5,
                12,
                9,
                15,
                5,
                11,
                6,
                8,
                13,
                12,
                5,
                12,
                13,
                14,
                11,
                8,
                5,
                6
              ],
              v = [
                8,
                9,
                9,
                11,
                13,
                15,
                15,
                5,
                7,
                7,
                8,
                11,
                14,
                14,
                12,
                6,
                9,
                13,
                15,
                7,
                12,
                8,
                9,
                11,
                7,
                7,
                12,
                7,
                6,
                15,
                13,
                11,
                9,
                7,
                15,
                11,
                8,
                6,
                6,
                14,
                12,
                13,
                5,
                14,
                13,
                13,
                7,
                5,
                15,
                5,
                8,
                11,
                14,
                14,
                6,
                14,
                6,
                9,
                12,
                9,
                12,
                5,
                15,
                8,
                8,
                5,
                12,
                9,
                12,
                5,
                14,
                6,
                8,
                13,
                6,
                5,
                15,
                13,
                11,
                11
              ];
          },
          function(e, t, r) {
            "use strict";
            var n = r(7),
              i = r(17);
            function a(e, t, r) {
              if (!(this instanceof a)) return new a(e, t, r);
              (this.Hash = e),
                (this.blockSize = e.blockSize / 8),
                (this.outSize = e.outSize / 8),
                (this.inner = null),
                (this.outer = null),
                this._init(n.toArray(t, r));
            }
            (e.exports = a),
              (a.prototype._init = function(e) {
                e.length > this.blockSize &&
                  (e = new this.Hash().update(e).digest()),
                  i(e.length <= this.blockSize);
                for (var t = e.length; t < this.blockSize; t++) e.push(0);
                for (t = 0; t < e.length; t++) e[t] ^= 54;
                for (
                  this.inner = new this.Hash().update(e), t = 0;
                  t < e.length;
                  t++
                )
                  e[t] ^= 106;
                this.outer = new this.Hash().update(e);
              }),
              (a.prototype.update = function(e, t) {
                return this.inner.update(e, t), this;
              }),
              (a.prototype.digest = function(e) {
                return (
                  this.outer.update(this.inner.digest()), this.outer.digest(e)
                );
              });
          },
          function(e, t) {
            e.exports = {
              doubles: {
                step: 4,
                points: [
                  [
                    "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
                    "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
                  ],
                  [
                    "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
                    "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
                  ],
                  [
                    "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
                    "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
                  ],
                  [
                    "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
                    "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
                  ],
                  [
                    "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
                    "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
                  ],
                  [
                    "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
                    "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
                  ],
                  [
                    "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
                    "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
                  ],
                  [
                    "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
                    "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
                  ],
                  [
                    "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
                    "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
                  ],
                  [
                    "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
                    "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
                  ],
                  [
                    "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
                    "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
                  ],
                  [
                    "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
                    "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
                  ],
                  [
                    "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
                    "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
                  ],
                  [
                    "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
                    "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
                  ],
                  [
                    "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
                    "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
                  ],
                  [
                    "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
                    "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
                  ],
                  [
                    "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
                    "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
                  ],
                  [
                    "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
                    "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
                  ],
                  [
                    "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
                    "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
                  ],
                  [
                    "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
                    "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
                  ],
                  [
                    "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
                    "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
                  ],
                  [
                    "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
                    "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
                  ],
                  [
                    "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
                    "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
                  ],
                  [
                    "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
                    "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
                  ],
                  [
                    "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
                    "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
                  ],
                  [
                    "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
                    "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
                  ],
                  [
                    "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
                    "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
                  ],
                  [
                    "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
                    "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
                  ],
                  [
                    "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
                    "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
                  ],
                  [
                    "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
                    "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
                  ],
                  [
                    "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
                    "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
                  ],
                  [
                    "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
                    "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
                  ],
                  [
                    "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
                    "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
                  ],
                  [
                    "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
                    "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
                  ],
                  [
                    "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
                    "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
                  ],
                  [
                    "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
                    "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
                  ],
                  [
                    "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
                    "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
                  ],
                  [
                    "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
                    "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
                  ],
                  [
                    "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
                    "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
                  ],
                  [
                    "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
                    "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
                  ],
                  [
                    "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
                    "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
                  ],
                  [
                    "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
                    "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
                  ],
                  [
                    "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
                    "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
                  ],
                  [
                    "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
                    "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
                  ],
                  [
                    "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
                    "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
                  ],
                  [
                    "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
                    "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
                  ],
                  [
                    "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
                    "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
                  ],
                  [
                    "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
                    "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
                  ],
                  [
                    "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
                    "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
                  ],
                  [
                    "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
                    "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
                  ],
                  [
                    "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
                    "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
                  ],
                  [
                    "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
                    "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
                  ],
                  [
                    "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
                    "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
                  ],
                  [
                    "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
                    "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
                  ],
                  [
                    "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
                    "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
                  ],
                  [
                    "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
                    "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
                  ],
                  [
                    "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
                    "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
                  ],
                  [
                    "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
                    "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
                  ],
                  [
                    "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
                    "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
                  ],
                  [
                    "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
                    "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
                  ],
                  [
                    "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
                    "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
                  ],
                  [
                    "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
                    "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
                  ],
                  [
                    "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
                    "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
                  ],
                  [
                    "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
                    "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
                  ],
                  [
                    "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
                    "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
                  ]
                ]
              },
              naf: {
                wnd: 7,
                points: [
                  [
                    "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
                    "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
                  ],
                  [
                    "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
                    "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
                  ],
                  [
                    "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
                    "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
                  ],
                  [
                    "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
                    "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
                  ],
                  [
                    "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
                    "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
                  ],
                  [
                    "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
                    "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
                  ],
                  [
                    "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
                    "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
                  ],
                  [
                    "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
                    "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
                  ],
                  [
                    "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
                    "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
                  ],
                  [
                    "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
                    "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
                  ],
                  [
                    "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
                    "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
                  ],
                  [
                    "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
                    "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
                  ],
                  [
                    "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
                    "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
                  ],
                  [
                    "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
                    "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
                  ],
                  [
                    "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
                    "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
                  ],
                  [
                    "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
                    "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
                  ],
                  [
                    "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
                    "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
                  ],
                  [
                    "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
                    "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
                  ],
                  [
                    "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
                    "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
                  ],
                  [
                    "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
                    "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
                  ],
                  [
                    "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
                    "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
                  ],
                  [
                    "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
                    "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
                  ],
                  [
                    "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
                    "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
                  ],
                  [
                    "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
                    "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
                  ],
                  [
                    "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
                    "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
                  ],
                  [
                    "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
                    "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
                  ],
                  [
                    "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
                    "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
                  ],
                  [
                    "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
                    "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
                  ],
                  [
                    "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
                    "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
                  ],
                  [
                    "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
                    "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
                  ],
                  [
                    "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
                    "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
                  ],
                  [
                    "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
                    "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
                  ],
                  [
                    "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
                    "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
                  ],
                  [
                    "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
                    "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
                  ],
                  [
                    "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
                    "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
                  ],
                  [
                    "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
                    "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
                  ],
                  [
                    "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
                    "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
                  ],
                  [
                    "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
                    "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
                  ],
                  [
                    "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
                    "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
                  ],
                  [
                    "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
                    "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
                  ],
                  [
                    "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
                    "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
                  ],
                  [
                    "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
                    "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
                  ],
                  [
                    "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
                    "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
                  ],
                  [
                    "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
                    "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
                  ],
                  [
                    "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
                    "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
                  ],
                  [
                    "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
                    "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
                  ],
                  [
                    "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
                    "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
                  ],
                  [
                    "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
                    "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
                  ],
                  [
                    "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
                    "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
                  ],
                  [
                    "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
                    "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
                  ],
                  [
                    "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
                    "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
                  ],
                  [
                    "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
                    "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
                  ],
                  [
                    "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
                    "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
                  ],
                  [
                    "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
                    "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
                  ],
                  [
                    "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
                    "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
                  ],
                  [
                    "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
                    "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
                  ],
                  [
                    "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
                    "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
                  ],
                  [
                    "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
                    "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
                  ],
                  [
                    "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
                    "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
                  ],
                  [
                    "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
                    "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
                  ],
                  [
                    "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
                    "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
                  ],
                  [
                    "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
                    "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
                  ],
                  [
                    "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
                    "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
                  ],
                  [
                    "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
                    "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
                  ],
                  [
                    "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
                    "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
                  ],
                  [
                    "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
                    "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
                  ],
                  [
                    "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
                    "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
                  ],
                  [
                    "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
                    "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
                  ],
                  [
                    "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
                    "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
                  ],
                  [
                    "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
                    "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
                  ],
                  [
                    "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
                    "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
                  ],
                  [
                    "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
                    "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
                  ],
                  [
                    "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
                    "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
                  ],
                  [
                    "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
                    "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
                  ],
                  [
                    "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
                    "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
                  ],
                  [
                    "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
                    "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
                  ],
                  [
                    "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
                    "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
                  ],
                  [
                    "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
                    "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
                  ],
                  [
                    "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
                    "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
                  ],
                  [
                    "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
                    "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
                  ],
                  [
                    "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
                    "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
                  ],
                  [
                    "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
                    "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
                  ],
                  [
                    "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
                    "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
                  ],
                  [
                    "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
                    "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
                  ],
                  [
                    "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
                    "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
                  ],
                  [
                    "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
                    "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
                  ],
                  [
                    "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
                    "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
                  ],
                  [
                    "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
                    "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
                  ],
                  [
                    "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
                    "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
                  ],
                  [
                    "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
                    "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
                  ],
                  [
                    "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
                    "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
                  ],
                  [
                    "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
                    "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
                  ],
                  [
                    "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
                    "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
                  ],
                  [
                    "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
                    "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
                  ],
                  [
                    "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
                    "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
                  ],
                  [
                    "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
                    "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
                  ],
                  [
                    "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
                    "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
                  ],
                  [
                    "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
                    "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
                  ],
                  [
                    "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
                    "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
                  ],
                  [
                    "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
                    "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
                  ],
                  [
                    "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
                    "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
                  ],
                  [
                    "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
                    "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
                  ],
                  [
                    "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
                    "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
                  ],
                  [
                    "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
                    "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
                  ],
                  [
                    "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
                    "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
                  ],
                  [
                    "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
                    "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
                  ],
                  [
                    "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
                    "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
                  ],
                  [
                    "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
                    "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
                  ],
                  [
                    "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
                    "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
                  ],
                  [
                    "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
                    "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
                  ],
                  [
                    "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
                    "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
                  ],
                  [
                    "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
                    "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
                  ],
                  [
                    "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
                    "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
                  ],
                  [
                    "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
                    "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
                  ],
                  [
                    "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
                    "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
                  ],
                  [
                    "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
                    "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
                  ],
                  [
                    "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
                    "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
                  ],
                  [
                    "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
                    "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
                  ],
                  [
                    "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
                    "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
                  ],
                  [
                    "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
                    "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
                  ],
                  [
                    "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
                    "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
                  ],
                  [
                    "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
                    "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
                  ],
                  [
                    "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
                    "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
                  ],
                  [
                    "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
                    "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
                  ],
                  [
                    "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
                    "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
                  ],
                  [
                    "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
                    "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
                  ],
                  [
                    "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
                    "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
                  ]
                ]
              }
            };
          },
          function(e, t, r) {
            "use strict";
            var n = r(6),
              i = r(216),
              a = r(5),
              o = r(60),
              s = r(102),
              f = a.assert,
              u = r(217),
              c = r(218);
            function d(e) {
              if (!(this instanceof d)) return new d(e);
              "string" == typeof e &&
                (f(o.hasOwnProperty(e), "Unknown curve " + e), (e = o[e])),
                e instanceof o.PresetCurve && (e = { curve: e }),
                (this.curve = e.curve.curve),
                (this.n = this.curve.n),
                (this.nh = this.n.ushrn(1)),
                (this.g = this.curve.g),
                (this.g = e.curve.g),
                this.g.precompute(e.curve.n.bitLength() + 1),
                (this.hash = e.hash || e.curve.hash);
            }
            (e.exports = d),
              (d.prototype.keyPair = function(e) {
                return new u(this, e);
              }),
              (d.prototype.keyFromPrivate = function(e, t) {
                return u.fromPrivate(this, e, t);
              }),
              (d.prototype.keyFromPublic = function(e, t) {
                return u.fromPublic(this, e, t);
              }),
              (d.prototype.genKeyPair = function(e) {
                e || (e = {});
                for (
                  var t = new i({
                      hash: this.hash,
                      pers: e.pers,
                      persEnc: e.persEnc || "utf8",
                      entropy: e.entropy || s(this.hash.hmacStrength),
                      entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                      nonce: this.n.toArray()
                    }),
                    r = this.n.byteLength(),
                    a = this.n.sub(new n(2));
                  ;

                ) {
                  var o = new n(t.generate(r));
                  if (!(o.cmp(a) > 0))
                    return o.iaddn(1), this.keyFromPrivate(o);
                }
              }),
              (d.prototype._truncateToN = function(e, t) {
                var r = 8 * e.byteLength() - this.n.bitLength();
                return (
                  r > 0 && (e = e.ushrn(r)),
                  !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
                );
              }),
              (d.prototype.sign = function(e, t, r, a) {
                "object" == typeof r && ((a = r), (r = null)),
                  a || (a = {}),
                  (t = this.keyFromPrivate(t, r)),
                  (e = this._truncateToN(new n(e, 16)));
                for (
                  var o = this.n.byteLength(),
                    s = t.getPrivate().toArray("be", o),
                    f = e.toArray("be", o),
                    u = new i({
                      hash: this.hash,
                      entropy: s,
                      nonce: f,
                      pers: a.pers,
                      persEnc: a.persEnc || "utf8"
                    }),
                    d = this.n.sub(new n(1)),
                    h = 0;
                  ;
                  h++
                ) {
                  var l = a.k ? a.k(h) : new n(u.generate(this.n.byteLength()));
                  if (
                    !(
                      (l = this._truncateToN(l, !0)).cmpn(1) <= 0 ||
                      l.cmp(d) >= 0
                    )
                  ) {
                    var p = this.g.mul(l);
                    if (!p.isInfinity()) {
                      var b = p.getX(),
                        m = b.umod(this.n);
                      if (0 !== m.cmpn(0)) {
                        var v = l
                          .invm(this.n)
                          .mul(m.mul(t.getPrivate()).iadd(e));
                        if (0 !== (v = v.umod(this.n)).cmpn(0)) {
                          var g =
                            (p.getY().isOdd() ? 1 : 0) |
                            (0 !== b.cmp(m) ? 2 : 0);
                          return (
                            a.canonical &&
                              v.cmp(this.nh) > 0 &&
                              ((v = this.n.sub(v)), (g ^= 1)),
                            new c({ r: m, s: v, recoveryParam: g })
                          );
                        }
                      }
                    }
                  }
                }
              }),
              (d.prototype.verify = function(e, t, r, i) {
                (e = this._truncateToN(new n(e, 16))),
                  (r = this.keyFromPublic(r, i));
                var a = (t = new c(t, "hex")).r,
                  o = t.s;
                if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
                if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                var s,
                  f = o.invm(this.n),
                  u = f.mul(e).umod(this.n),
                  d = f.mul(a).umod(this.n);
                return this.curve._maxwellTrick
                  ? !(s = this.g.jmulAdd(u, r.getPublic(), d)).isInfinity() &&
                      s.eqXToP(a)
                  : !(s = this.g.mulAdd(u, r.getPublic(), d)).isInfinity() &&
                      0 ===
                        s
                          .getX()
                          .umod(this.n)
                          .cmp(a);
              }),
              (d.prototype.recoverPubKey = function(e, t, r, i) {
                f((3 & r) === r, "The recovery param is more than two bits"),
                  (t = new c(t, i));
                var a = this.n,
                  o = new n(e),
                  s = t.r,
                  u = t.s,
                  d = 1 & r,
                  h = r >> 1;
                if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
                  throw new Error("Unable to find sencond key candinate");
                s = h
                  ? this.curve.pointFromX(s.add(this.curve.n), d)
                  : this.curve.pointFromX(s, d);
                var l = t.r.invm(a),
                  p = a
                    .sub(o)
                    .mul(l)
                    .umod(a),
                  b = u.mul(l).umod(a);
                return this.g.mulAdd(p, s, b);
              }),
              (d.prototype.getKeyRecoveryParam = function(e, t, r, n) {
                if (null !== (t = new c(t, n)).recoveryParam)
                  return t.recoveryParam;
                for (var i = 0; i < 4; i++) {
                  var a;
                  try {
                    a = this.recoverPubKey(e, t, i);
                  } catch (e) {
                    continue;
                  }
                  if (a.eq(r)) return i;
                }
                throw new Error("Unable to find valid recovery factor");
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(61),
              i = r(101),
              a = r(17);
            function o(e) {
              if (!(this instanceof o)) return new o(e);
              (this.hash = e.hash),
                (this.predResist = !!e.predResist),
                (this.outLen = this.hash.outSize),
                (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
                (this._reseed = null),
                (this.reseedInterval = null),
                (this.K = null),
                (this.V = null);
              var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
                r = i.toArray(e.nonce, e.nonceEnc || "hex"),
                n = i.toArray(e.pers, e.persEnc || "hex");
              a(
                t.length >= this.minEntropy / 8,
                "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
              ),
                this._init(t, r, n);
            }
            (e.exports = o),
              (o.prototype._init = function(e, t, r) {
                var n = e.concat(t).concat(r);
                (this.K = new Array(this.outLen / 8)),
                  (this.V = new Array(this.outLen / 8));
                for (var i = 0; i < this.V.length; i++)
                  (this.K[i] = 0), (this.V[i] = 1);
                this._update(n),
                  (this._reseed = 1),
                  (this.reseedInterval = 281474976710656);
              }),
              (o.prototype._hmac = function() {
                return new n.hmac(this.hash, this.K);
              }),
              (o.prototype._update = function(e) {
                var t = this._hmac()
                  .update(this.V)
                  .update([0]);
                e && (t = t.update(e)),
                  (this.K = t.digest()),
                  (this.V = this._hmac()
                    .update(this.V)
                    .digest()),
                  e &&
                    ((this.K = this._hmac()
                      .update(this.V)
                      .update([1])
                      .update(e)
                      .digest()),
                    (this.V = this._hmac()
                      .update(this.V)
                      .digest()));
              }),
              (o.prototype.reseed = function(e, t, r, n) {
                "string" != typeof t && ((n = r), (r = t), (t = null)),
                  (e = i.toArray(e, t)),
                  (r = i.toArray(r, n)),
                  a(
                    e.length >= this.minEntropy / 8,
                    "Not enough entropy. Minimum is: " +
                      this.minEntropy +
                      " bits"
                  ),
                  this._update(e.concat(r || [])),
                  (this._reseed = 1);
              }),
              (o.prototype.generate = function(e, t, r, n) {
                if (this._reseed > this.reseedInterval)
                  throw new Error("Reseed is required");
                "string" != typeof t && ((n = r), (r = t), (t = null)),
                  r && ((r = i.toArray(r, n || "hex")), this._update(r));
                for (var a = []; a.length < e; )
                  (this.V = this._hmac()
                    .update(this.V)
                    .digest()),
                    (a = a.concat(this.V));
                var o = a.slice(0, e);
                return this._update(r), this._reseed++, i.encode(o, t);
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(6),
              i = r(5).assert;
            function a(e, t) {
              (this.ec = e),
                (this.priv = null),
                (this.pub = null),
                t.priv && this._importPrivate(t.priv, t.privEnc),
                t.pub && this._importPublic(t.pub, t.pubEnc);
            }
            (e.exports = a),
              (a.fromPublic = function(e, t, r) {
                return t instanceof a ? t : new a(e, { pub: t, pubEnc: r });
              }),
              (a.fromPrivate = function(e, t, r) {
                return t instanceof a ? t : new a(e, { priv: t, privEnc: r });
              }),
              (a.prototype.validate = function() {
                var e = this.getPublic();
                return e.isInfinity()
                  ? { result: !1, reason: "Invalid public key" }
                  : e.validate()
                  ? e.mul(this.ec.curve.n).isInfinity()
                    ? { result: !0, reason: null }
                    : { result: !1, reason: "Public key * N != O" }
                  : { result: !1, reason: "Public key is not a point" };
              }),
              (a.prototype.getPublic = function(e, t) {
                return (
                  "string" == typeof e && ((t = e), (e = null)),
                  this.pub || (this.pub = this.ec.g.mul(this.priv)),
                  t ? this.pub.encode(t, e) : this.pub
                );
              }),
              (a.prototype.getPrivate = function(e) {
                return "hex" === e ? this.priv.toString(16, 2) : this.priv;
              }),
              (a.prototype._importPrivate = function(e, t) {
                (this.priv = new n(e, t || 16)),
                  (this.priv = this.priv.umod(this.ec.curve.n));
              }),
              (a.prototype._importPublic = function(e, t) {
                if (e.x || e.y)
                  return (
                    "mont" === this.ec.curve.type
                      ? i(e.x, "Need x coordinate")
                      : ("short" !== this.ec.curve.type &&
                          "edwards" !== this.ec.curve.type) ||
                        i(e.x && e.y, "Need both x and y coordinate"),
                    void (this.pub = this.ec.curve.point(e.x, e.y))
                  );
                this.pub = this.ec.curve.decodePoint(e, t);
              }),
              (a.prototype.derive = function(e) {
                return e.mul(this.priv).getX();
              }),
              (a.prototype.sign = function(e, t, r) {
                return this.ec.sign(e, this, t, r);
              }),
              (a.prototype.verify = function(e, t) {
                return this.ec.verify(e, t, this);
              }),
              (a.prototype.inspect = function() {
                return (
                  "<Key priv: " +
                  (this.priv && this.priv.toString(16, 2)) +
                  " pub: " +
                  (this.pub && this.pub.inspect()) +
                  " >"
                );
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(6),
              i = r(5),
              a = i.assert;
            function o(e, t) {
              if (e instanceof o) return e;
              this._importDER(e, t) ||
                (a(e.r && e.s, "Signature without r or s"),
                (this.r = new n(e.r, 16)),
                (this.s = new n(e.s, 16)),
                void 0 === e.recoveryParam
                  ? (this.recoveryParam = null)
                  : (this.recoveryParam = e.recoveryParam));
            }
            function s() {
              this.place = 0;
            }
            function f(e, t) {
              var r = e[t.place++];
              if (!(128 & r)) return r;
              for (var n = 15 & r, i = 0, a = 0, o = t.place; a < n; a++, o++)
                (i <<= 8), (i |= e[o]);
              return (t.place = o), i;
            }
            function u(e) {
              for (
                var t = 0, r = e.length - 1;
                !e[t] && !(128 & e[t + 1]) && t < r;

              )
                t++;
              return 0 === t ? e : e.slice(t);
            }
            function c(e, t) {
              if (t < 128) e.push(t);
              else {
                var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
                for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
                e.push(t);
              }
            }
            (e.exports = o),
              (o.prototype._importDER = function(e, t) {
                e = i.toArray(e, t);
                var r = new s();
                if (48 !== e[r.place++]) return !1;
                if (f(e, r) + r.place !== e.length) return !1;
                if (2 !== e[r.place++]) return !1;
                var a = f(e, r),
                  o = e.slice(r.place, a + r.place);
                if (((r.place += a), 2 !== e[r.place++])) return !1;
                var u = f(e, r);
                if (e.length !== u + r.place) return !1;
                var c = e.slice(r.place, u + r.place);
                return (
                  0 === o[0] && 128 & o[1] && (o = o.slice(1)),
                  0 === c[0] && 128 & c[1] && (c = c.slice(1)),
                  (this.r = new n(o)),
                  (this.s = new n(c)),
                  (this.recoveryParam = null),
                  !0
                );
              }),
              (o.prototype.toDER = function(e) {
                var t = this.r.toArray(),
                  r = this.s.toArray();
                for (
                  128 & t[0] && (t = [0].concat(t)),
                    128 & r[0] && (r = [0].concat(r)),
                    t = u(t),
                    r = u(r);
                  !(r[0] || 128 & r[1]);

                )
                  r = r.slice(1);
                var n = [2];
                c(n, t.length), (n = n.concat(t)).push(2), c(n, r.length);
                var a = n.concat(r),
                  o = [48];
                return c(o, a.length), (o = o.concat(a)), i.encode(o, e);
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(61),
              i = r(60),
              a = r(5),
              o = a.assert,
              s = a.parseBytes,
              f = r(220),
              u = r(221);
            function c(e) {
              if (
                (o("ed25519" === e, "only tested with ed25519 so far"),
                !(this instanceof c))
              )
                return new c(e);
              (e = i[e].curve),
                (this.curve = e),
                (this.g = e.g),
                this.g.precompute(e.n.bitLength() + 1),
                (this.pointClass = e.point().constructor),
                (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
                (this.hash = n.sha512);
            }
            (e.exports = c),
              (c.prototype.sign = function(e, t) {
                e = s(e);
                var r = this.keyFromSecret(t),
                  n = this.hashInt(r.messagePrefix(), e),
                  i = this.g.mul(n),
                  a = this.encodePoint(i),
                  o = this.hashInt(a, r.pubBytes(), e).mul(r.priv()),
                  f = n.add(o).umod(this.curve.n);
                return this.makeSignature({ R: i, S: f, Rencoded: a });
              }),
              (c.prototype.verify = function(e, t, r) {
                (e = s(e)), (t = this.makeSignature(t));
                var n = this.keyFromPublic(r),
                  i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
                  a = this.g.mul(t.S());
                return t
                  .R()
                  .add(n.pub().mul(i))
                  .eq(a);
              }),
              (c.prototype.hashInt = function() {
                for (var e = this.hash(), t = 0; t < arguments.length; t++)
                  e.update(arguments[t]);
                return a.intFromLE(e.digest()).umod(this.curve.n);
              }),
              (c.prototype.keyFromPublic = function(e) {
                return f.fromPublic(this, e);
              }),
              (c.prototype.keyFromSecret = function(e) {
                return f.fromSecret(this, e);
              }),
              (c.prototype.makeSignature = function(e) {
                return e instanceof u ? e : new u(this, e);
              }),
              (c.prototype.encodePoint = function(e) {
                var t = e.getY().toArray("le", this.encodingLength);
                return (
                  (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t
                );
              }),
              (c.prototype.decodePoint = function(e) {
                var t = (e = a.parseBytes(e)).length - 1,
                  r = e.slice(0, t).concat(-129 & e[t]),
                  n = 0 != (128 & e[t]),
                  i = a.intFromLE(r);
                return this.curve.pointFromY(i, n);
              }),
              (c.prototype.encodeInt = function(e) {
                return e.toArray("le", this.encodingLength);
              }),
              (c.prototype.decodeInt = function(e) {
                return a.intFromLE(e);
              }),
              (c.prototype.isPoint = function(e) {
                return e instanceof this.pointClass;
              });
          },
          function(e, t, r) {
            "use strict";
            var n = r(5),
              i = n.assert,
              a = n.parseBytes,
              o = n.cachedProperty;
            function s(e, t) {
              (this.eddsa = e),
                (this._secret = a(t.secret)),
                e.isPoint(t.pub)
                  ? (this._pub = t.pub)
                  : (this._pubBytes = a(t.pub));
            }
            (s.fromPublic = function(e, t) {
              return t instanceof s ? t : new s(e, { pub: t });
            }),
              (s.fromSecret = function(e, t) {
                return t instanceof s ? t : new s(e, { secret: t });
              }),
              (s.prototype.secret = function() {
                return this._secret;
              }),
              o(s, "pubBytes", function() {
                return this.eddsa.encodePoint(this.pub());
              }),
              o(s, "pub", function() {
                return this._pubBytes
                  ? this.eddsa.decodePoint(this._pubBytes)
                  : this.eddsa.g.mul(this.priv());
              }),
              o(s, "privBytes", function() {
                var e = this.eddsa,
                  t = this.hash(),
                  r = e.encodingLength - 1,
                  n = t.slice(0, e.encodingLength);
                return (n[0] &= 248), (n[r] &= 127), (n[r] |= 64), n;
              }),
              o(s, "priv", function() {
                return this.eddsa.decodeInt(this.privBytes());
              }),
              o(s, "hash", function() {
                return this.eddsa
                  .hash()
                  .update(this.secret())
                  .digest();
              }),
              o(s, "messagePrefix", function() {
                return this.hash().slice(this.eddsa.encodingLength);
              }),
              (s.prototype.sign = function(e) {
                return (
                  i(this._secret, "KeyPair can only verify"),
                  this.eddsa.sign(e, this)
                );
              }),
              (s.prototype.verify = function(e, t) {
                return this.eddsa.verify(e, t, this);
              }),
              (s.prototype.getSecret = function(e) {
                return (
                  i(this._secret, "KeyPair is public only"),
                  n.encode(this.secret(), e)
                );
              }),
              (s.prototype.getPublic = function(e) {
                return n.encode(this.pubBytes(), e);
              }),
              (e.exports = s);
          },
          function(e, t, r) {
            "use strict";
            var n = r(6),
              i = r(5),
              a = i.assert,
              o = i.cachedProperty,
              s = i.parseBytes;
            function f(e, t) {
              (this.eddsa = e),
                "object" != typeof t && (t = s(t)),
                Array.isArray(t) &&
                  (t = {
                    R: t.slice(0, e.encodingLength),
                    S: t.slice(e.encodingLength)
                  }),
                a(t.R && t.S, "Signature without R or S"),
                e.isPoint(t.R) && (this._R = t.R),
                t.S instanceof n && (this._S = t.S),
                (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
                (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded);
            }
            o(f, "S", function() {
              return this.eddsa.decodeInt(this.Sencoded());
            }),
              o(f, "R", function() {
                return this.eddsa.decodePoint(this.Rencoded());
              }),
              o(f, "Rencoded", function() {
                return this.eddsa.encodePoint(this.R());
              }),
              o(f, "Sencoded", function() {
                return this.eddsa.encodeInt(this.S());
              }),
              (f.prototype.toBytes = function() {
                return this.Rencoded().concat(this.Sencoded());
              }),
              (f.prototype.toHex = function() {
                return i.encode(this.toBytes(), "hex").toUpperCase();
              }),
              (e.exports = f);
          },
          function(e, t, r) {
            var n = r(223);
            (t.encode = n.encode), (t.decode = n.decode);
          },
          function(e, t, r) {
            "use strict";
            (function(e) {
              var r = [
                255,
                255,
                26,
                27,
                28,
                29,
                30,
                31,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                255,
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                255,
                255,
                255,
                255,
                255,
                255,
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                255,
                255,
                255,
                255,
                255
              ];
              (t.encode = function(t) {
                e.isBuffer(t) || (t = new e(t));
                for (
                  var r,
                    n,
                    i = 0,
                    a = 0,
                    o = 0,
                    s = 0,
                    f = new e(
                      8 *
                        ((r = t),
                        (n = Math.floor(r.length / 5)),
                        r.length % 5 == 0 ? n : n + 1)
                    );
                  i < t.length;

                ) {
                  var u = t[i];
                  o > 3
                    ? ((s =
                        ((s = u & (255 >> o)) << (o = (o + 5) % 8)) |
                        ((i + 1 < t.length ? t[i + 1] : 0) >> (8 - o))),
                      i++)
                    : ((s = (u >> (8 - (o + 5))) & 31),
                      0 === (o = (o + 5) % 8) && i++),
                    (f[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(s)),
                    a++;
                }
                for (i = a; i < f.length; i++) f[i] = 61;
                return f;
              }),
                (t.decode = function(t) {
                  var n,
                    i = 0,
                    a = 0,
                    o = 0;
                  e.isBuffer(t) || (t = new e(t));
                  for (
                    var s = new e(Math.ceil((5 * t.length) / 8)), f = 0;
                    f < t.length && 61 !== t[f];
                    f++
                  ) {
                    var u = t[f] - 48;
                    if (!(u < r.length))
                      throw new Error(
                        "Invalid input - it is not base32 encoded string"
                      );
                    (a = r[u]),
                      i <= 3
                        ? 0 === (i = (i + 5) % 8)
                          ? ((n |= a), (s[o] = n), o++, (n = 0))
                          : (n |= 255 & (a << (8 - i)))
                        : ((n |= 255 & (a >>> (i = (i + 5) % 8))),
                          (s[o] = n),
                          o++,
                          (n = 255 & (a << (8 - i))));
                  }
                  return s.slice(0, o);
                });
            }.call(this, r(12).Buffer));
          },
          function(e) {
            e.exports = JSON.parse(
              '{"heartbeat":{},"get_witnesses":{},"get_peers":{},"get_joint":{"params":"string"},"get_last_mci":{},"catchup":{"params":{"witnesses":"array","last_stable_mci":"number","last_known_mci":"number"}},"get_hash_tree":{"params":{"from_ball":"string","to_ball":"string"}},"post_joint":{"params":{"unit":"object"}},"subscribe":{"params":{"subscription_id":"string","last_mci":"number"}},"light/get_history":{"params":{"witnesses":"array","addresses":"array"}},"light/get_parents_and_last_ball_and_witness_list_unit":{"params":{"witnesses":"array"}},"light/get_attestation":{"params":{"attestor_address":"string","field":"string","value":"string"}},"light/get_attestations":{"params":{"address":"string"}},"light/pick_divisible_coins_for_amount":{"params":{"asset":"string","addresses":"array","last_ball_mci":"number","amount":"number","spend_unconfirmed":"string"}},"light/get_definition":{"params":"string"},"light/get_definition_chash":{"params":{"address":"string","max_mci":"number"}},"light/get_definition_for_address":{"params":{"address":"string"}},"light/get_balances":{"params":"array"},"light/get_profile_units":{"params":"array"},"light/dry_run_aa":{"params":{"address":"string","trigger":"object"}},"light/get_aa_state_vars":{"params":{"address":"string"}},"light/get_aas_by_base_aas":{"params":{"base_aa":"object","base_aas":"object"}},"light/get_aa_responses":{"params":{"aa":"object","aas":"object"}},"hub/get_bots":{},"hub/get_temp_pubkey":{"params":"string"},"hub/temp_pubkey":{"params":{"temp_pubkey":"string","pubkey":"string","signature":"string"}},"hub/deliver":{"params":{"encrypted_package":"object","to":"string","pubkey":"string","signature":"string"}},"hub/get_asset_metadata":{"params":"string"}}'
            );
          },
          function(e) {
            e.exports = JSON.parse(
              '{"address_definition_change":{"params":{"definition_chash":"string","address":"string"}},"attestation":{"params":{"address":"string","profile":"object"}},"asset":{"params":{"cap":"number","is_private":"boolean","is_transferrable":"boolean","auto_destroy":"boolean","fixed_denominations":"boolean","issued_by_definer_only":"boolean","cosigned_by_definer":"boolean","spender_attested":"boolean","issue_condition":"array","transfer_condition":"array","attestors":"array","denominations":"array"}},"asset_attestors":{"params":{"asset":"string","attestors":"array"}},"data":{"params":"object"},"data_feed":{"params":"object"},"definition":{"params":"object"},"definition_template":{"params":"array"},"poll":{"params":{"question":"string","choices":"array"}},"profile":{"params":"object"},"text":{"params":"string"},"vote":{"params":{"unit":"string","choice":"string"}},"payment":{"params":{"outputs":"array","asset":"string"}}}'
            );
          }
        ]));
    },
    183: function(e, t, r) {
      e.exports = {
        input: "ModalAddAA_input__25DBI",
        spinWrap: "ModalAddAA_spinWrap__xC3wI"
      };
    },
    191: function(e, t, r) {
      e.exports = { SelectAaRow: "Main_SelectAaRow__Kylyk" };
    },
    197: function(e, t, r) {
      e.exports = r(360);
    },
    360: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        i = r.n(n),
        a = r(4),
        o = r.n(a),
        s = r(15),
        f = r(73),
        u = r(57),
        c = (r(206), r(65)),
        d = r(180),
        h = r(125),
        l = r(39),
        p = {
          list: [],
          listByBase: [],
          listByBaseLoaded: [],
          active: null,
          activeInfo: null,
          activeBalance: { loading: !1 },
          activeAssetsRequest: {},
          notifications: [],
          isViewedNotifications: !0,
          error: null
        },
        b = Object(c.c)({
          aa: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : p,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ADD_AA":
                return Object(l.a)({}, e, {
                  list: [t.payload].concat(Object(h.a)(e.list))
                });
              case "ADD_AA_ERR":
                return Object(l.a)({}, e, { error: !0 });
              case "CHANGE_ACTIVE_AA":
                return Object(l.a)({}, e, {
                  active: t.payload.address,
                  activeInfo: t.payload.aaVars,
                  activeBalance: { loading: !1 },
                  activeAssetsRequest: {}
                });
              case "UPDATE_INFO_ACTIVE_AA":
                return Object(l.a)({}, e, { activeInfo: t.payload.aaVars });
              case "GET_BALANCE_ACTIVE_AA":
                var r = t.payload.balance;
                return Object(l.a)({}, e, {
                  activeBalance: {
                    loading: !0,
                    yes_asset:
                      e.activeInfo.yes_asset && r[e.activeInfo.yes_asset]
                        ? r[e.activeInfo.yes_asset].stable
                        : 0,
                    no_asset:
                      e.activeInfo.no_asset && r[e.activeInfo.no_asset]
                        ? r[e.activeInfo.no_asset].stable
                        : 0
                  }
                });
              case "CLEAR_BALANCE_ACTIVE_AA":
                return Object(l.a)({}, e, { activeBalance: { loading: !1 } });
              case "LOAD_AA_LIST_REQUEST":
                return Object(l.a)({}, e, { listByBaseLoaded: !1 });
              case "LOAD_AA_LIST_SUCCESS":
                return Object(l.a)({}, e, {
                  listByBase: t.payload,
                  listByBaseLoaded: !0
                });
              case "ADD_AA_NOTIFICATION":
                if (t.payload.AA === e.active) {
                  var n = {};
                  return (
                    "req_yes" === t.payload.tag
                      ? (n.yes_asset = !0)
                      : "req_no" === t.payload.tag && (n.no_asset = !0),
                    Object(l.a)({}, e, {
                      notifications: [].concat(Object(h.a)(e.notifications), [
                        t.payload
                      ]),
                      activeAssetsRequest: n,
                      isViewedNotifications: !1
                    })
                  );
                }
                return Object(l.a)({}, e, {
                  notifications: [].concat(Object(h.a)(e.notifications), [
                    t.payload
                  ]),
                  isViewedNotifications: !1
                });
              case "VIEWED_NOTIFICATION":
                return Object(l.a)({}, e, { isViewedNotifications: !0 });
              default:
                return e;
            }
          }
        }),
        m = Object(c.e)(
          b,
          Object(c.d)(
            Object(c.a)(d.a),
            window.__REDUX_DEVTOOLS_EXTENSION__
              ? window.__REDUX_DEVTOOLS_EXTENSION__()
              : function(e) {
                  return e;
                }
          )
        ),
        v = r(22),
        g = r(368),
        y = r(369),
        _ = r(364),
        w = r(365),
        E = r(56),
        A = r(373),
        S = r(376),
        M = r(370),
        I = r(105),
        x = r.n(I),
        T = r(85),
        L = r.n(T),
        R = r(361),
        P = r(8),
        k = r(362),
        N = r(26),
        O = r.n(N),
        C = r(374),
        B = r(181),
        j = new (r.n(B).a.Client)("wss://obyte.org/bb-test", { testnet: !0 });
      setInterval(function() {
        j.api.heartbeat();
      }, 1e4);
      var D = j,
        U = !0,
        V = "RJR5L6YGZWGUYRQTCOSGWAFB2ZJAZHYH",
        z = function(e) {
          return function(t) {
            var r;
            return O.a.async(
              function(n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.prev = 0),
                        (n.next = 3),
                        O.a.awrap(D.api.getAaStateVars({ address: e }))
                      );
                    case 3:
                      (r = n.sent),
                        t({
                          type: "CHANGE_ACTIVE_AA",
                          payload: { address: e, aaVars: r }
                        }),
                        (n.next = 10);
                      break;
                    case 7:
                      (n.prev = 7),
                        (n.t0 = n.catch(0)),
                        console.log("error", n.t0);
                    case 10:
                    case "end":
                      return n.stop();
                  }
              },
              null,
              null,
              [[0, 7]]
            );
          };
        },
        Y = function(e) {
          return function(t) {
            var r;
            return O.a.async(
              function(n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.prev = 0),
                        (n.next = 3),
                        O.a.awrap(D.api.getAaStateVars({ address: e }))
                      );
                    case 3:
                      (r = n.sent),
                        t({
                          type: "UPDATE_INFO_ACTIVE_AA",
                          payload: { address: e, aaVars: r }
                        }),
                        (n.next = 10);
                      break;
                    case 7:
                      (n.prev = 7),
                        (n.t0 = n.catch(0)),
                        console.log("error", n.t0);
                    case 10:
                    case "end":
                      return n.stop();
                  }
              },
              null,
              null,
              [[0, 7]]
            );
          };
        },
        q = function(e, t) {
          C.a.open({ message: e, description: t, style: { minWidth: 350 } });
        },
        F = r(183),
        K = r.n(F),
        W = R.a.Option,
        G = function(e) {
          var t = e.onCancel,
            r = Object(s.b)(),
            a = Object(s.c)(function(e) {
              return e.aa.listByBaseLoaded;
            }),
            o = Object(s.c)(function(e) {
              return e.aa.listByBase;
            }),
            f = Object(s.c)(function(e) {
              return e.aa.list;
            }),
            u = Object(n.useState)(""),
            c = Object(v.a)(u, 2),
            d = c[0],
            h = c[1];
          Object(n.useEffect)(
            function() {
              r(function(e) {
                var t;
                return O.a.async(
                  function(r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            O.a.awrap(e({ type: "LOAD_AA_LIST_REQUEST" }))
                          );
                        case 3:
                          return (
                            (r.next = 5),
                            O.a.awrap(D.api.getAasByBaseAas({ base_aa: V }))
                          );
                        case 5:
                          return (
                            (t = r.sent),
                            (r.next = 8),
                            O.a.awrap(
                              e({
                                type: "LOAD_AA_LIST_SUCCESS",
                                payload: t || []
                              })
                            )
                          );
                        case 8:
                          r.next = 13;
                          break;
                        case 10:
                          (r.prev = 10),
                            (r.t0 = r.catch(0)),
                            console.log("error", r.t0);
                        case 13:
                        case "end":
                          return r.stop();
                      }
                  },
                  null,
                  null,
                  [[0, 10]]
                );
              });
            },
            [r]
          );
          var l = o.filter(function(e) {
            return (
              void 0 ===
              f.find(function(t) {
                return t === e.address;
              })
            );
          });
          return i.a.createElement(
            M.a,
            {
              title: "Add AA in dashboard",
              visible: !0,
              onOk: function() {
                var e;
                d &&
                  r(
                    ((e = d),
                    function(t) {
                      return O.a.async(function(r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                (r.next = 2),
                                O.a.awrap(
                                  D.justsaying("light/new_aa_to_watch", {
                                    aa: e
                                  })
                                )
                              );
                            case 2:
                              return (
                                (r.next = 4),
                                O.a.awrap(t({ type: "ADD_AA", payload: e }))
                              );
                            case 4:
                              return (r.next = 6), O.a.awrap(t(z(e)));
                            case 6:
                            case "end":
                              return r.stop();
                          }
                      });
                    })
                  ),
                  t();
              },
              onCancel: function() {
                t(), h("");
              }
            },
            a
              ? i.a.createElement(
                  y.a,
                  null,
                  i.a.createElement(
                    y.a.Item,
                    null,
                    i.a.createElement(
                      R.a,
                      {
                        placeholder: "Select a AA",
                        size: "large",
                        showSearch: !0,
                        onChange: h,
                        autoFocus: !0,
                        removeIcon: i.a.createElement(P.a, { type: "close" })
                      },
                      i.a.createElement(
                        W,
                        { key: "AA0", value: 0, disabled: !0 },
                        "Select a AA"
                      ),
                      l.map(function(e, t) {
                        return i.a.createElement(
                          W,
                          { key: "AA" + t, value: e.address },
                          e.address
                        );
                      })
                    )
                  )
                )
              : i.a.createElement(
                  "div",
                  { className: K.a.spinWrap },
                  i.a.createElement(k.a, { size: "large" })
                )
          );
        },
        H = r(363),
        Z = r(371),
        J = r(76),
        X = r.n(J),
        Q = H.a.Sider,
        $ = [
          { key: "dashboard", icon: "control", title: "Dashboard", path: "/" },
          {
            key: "deploy",
            icon: "plus-circle",
            title: "Deploy AA",
            path: "/deploy"
          },
          {
            key: "issuing_assets",
            icon: "setting",
            title: "Issuing assets",
            path: "/issuing_assets"
          },
          {
            key: "notifications",
            icon: "bell",
            title: "Notifications",
            path: "/notifications"
          }
        ],
        ee = function(e) {
          var t = e.active,
            r = Object(s.c)(function(e) {
              return e.aa.isViewedNotifications;
            });
          return i.a.createElement(
            Q,
            { breakpoint: "lg", collapsedWidth: "0", className: X.a.sider },
            i.a.createElement(
              "div",
              { className: X.a.logo },
              i.a.createElement("img", {
                src: "/logo.png",
                className: X.a.logo__img,
                alt: "Obyte"
              }),
              i.a.createElement(
                "div",
                { className: X.a.brand },
                "Obyte ",
                i.a.createElement(
                  "div",
                  { className: X.a.product },
                  "Option contract"
                )
              )
            ),
            i.a.createElement(
              Z.a,
              { theme: "light", defaultSelectedKeys: [t] },
              $.map(function(e) {
                return i.a.createElement(
                  Z.a.Item,
                  { key: e.key },
                  i.a.createElement(
                    f.c,
                    { to: e.path, activeClassName: "selected" },
                    i.a.createElement(P.a, {
                      type: e.icon,
                      theme: "notifications" === e.key ? "filled" : "outlined",
                      style:
                        "notifications" !== e.key || r
                          ? { color: "ccc" }
                          : { color: "red" }
                    }),
                    i.a.createElement(
                      "span",
                      { className: "nav-text" },
                      e.title
                    )
                  )
                );
              })
            )
          );
        },
        te = r(123),
        re = r.n(te),
        ne = H.a.Content,
        ie = g.a.Title,
        ae = function(e) {
          var t = e.children,
            r = e.title,
            n = e.page;
          return i.a.createElement(
            H.a,
            { className: re.a.layout },
            i.a.createElement(ee, { active: n }),
            i.a.createElement(
              H.a,
              null,
              i.a.createElement(
                ne,
                { className: re.a.content },
                i.a.createElement(
                  "div",
                  { className: re.a.wrap },
                  i.a.createElement(ie, { level: 1 }, r),
                  t
                )
              )
            )
          );
        },
        oe = r(116),
        se = r.n(oe),
        fe = R.a.Option,
        ue = function(e) {
          var t = Object(s.b)(),
            r = Object(s.c)(function(e) {
              return e.aa.list;
            }),
            n = Object(s.c)(function(e) {
              return e.aa.active;
            });
          return i.a.createElement(
            R.a,
            Object.assign(
              {
                className: se.a.select,
                placeholder: "Select a AA",
                onChange: function(e) {
                  t(z(e));
                },
                value: n || 0,
                size: "large"
              },
              e
            ),
            i.a.createElement(
              fe,
              { key: "AA0", value: 0, disabled: !0 },
              "Select a AA"
            ),
            r.map(function(e, t) {
              return i.a.createElement(fe, { key: "AA" + t, value: e }, e);
            })
          );
        },
        ce = r(191),
        de = r.n(ce),
        he = g.a.Title,
        le = function(e) {
          var t = Object(n.useState)({
              value: "",
              status: "",
              help: "",
              valid: !1
            }),
            r = Object(v.a)(t, 2),
            a = r[0],
            o = r[1],
            f = Object(n.useState)({
              value: "",
              status: "",
              help: "",
              valid: !1
            }),
            u = Object(v.a)(f, 2),
            c = u[0],
            d = u[1],
            h = Object(n.useState)({ visible: !1, value: null }),
            l = Object(v.a)(h, 2),
            p = l[0],
            b = l[1],
            m = Object(n.useState)(!1),
            g = Object(v.a)(m, 2),
            I = g[0],
            T = g[1],
            R = Object(s.b)(),
            P = Object(s.c)(function(e) {
              return e.aa.active;
            }),
            k = Object(s.c)(function(e) {
              return e.aa.list;
            }),
            N = Object(s.c)(function(e) {
              return e.aa.activeInfo;
            }),
            C = Object(s.c)(function(e) {
              return e.aa.activeBalance;
            }),
            B = { winner: "yes" },
            j = { winner: "no" },
            V = JSON.stringify(B),
            z = JSON.stringify(j),
            q = L()(V),
            F = L()(z),
            K = function() {
              var e;
              R(
                ((e = c.value),
                function(t) {
                  var r;
                  return O.a.async(
                    function(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.prev = 0),
                              (n.next = 3),
                              O.a.awrap(D.api.getBalances([e]))
                            );
                          case 3:
                            (r = n.sent),
                              t({
                                type: "GET_BALANCE_ACTIVE_AA",
                                payload: { balance: r[e], address: e }
                              }),
                              (n.next = 10);
                            break;
                          case 7:
                            (n.prev = 7),
                              (n.t0 = n.catch(0)),
                              console.log("error", n.t0);
                          case 10:
                          case "end":
                            return n.stop();
                        }
                    },
                    null,
                    null,
                    [[0, 7]]
                  );
                })
              ),
                R(Y(P));
            };
          return i.a.createElement(
            ae,
            { title: "Dashboard", page: "dashboard" },
            i.a.createElement(
              y.a,
              null,
              i.a.createElement(
                _.a,
                { className: de.a.SelectAaRow },
                i.a.createElement(
                  w.a,
                  { xs: { span: 24 }, md: { span: 12 } },
                  i.a.createElement(
                    y.a.Item,
                    null,
                    i.a.createElement(ue, { autoFocus: 0 !== k.length })
                  )
                ),
                i.a.createElement(
                  w.a,
                  { xs: { span: 24, push: 0 }, md: { span: 11, push: 1 } },
                  i.a.createElement(
                    y.a.Item,
                    null,
                    i.a.createElement(
                      E.a,
                      {
                        type: "primary",
                        icon: "plus",
                        size: "large",
                        style: { marginRight: 10 },
                        onClick: function() {
                          return b({ visible: !0 });
                        },
                        autoFocus: 0 === k.length
                      },
                      "Add"
                    ),
                    P &&
                      !N.winner &&
                      i.a.createElement(
                        E.a,
                        {
                          type: "default",
                          size: "large",
                          onClick: function() {
                            return T(!0);
                          }
                        },
                        "Choose a winner"
                      )
                  )
                )
              )
            ),
            P &&
              i.a.createElement(
                _.a,
                null,
                i.a.createElement(
                  w.a,
                  { xs: { span: 24 }, md: { span: 10 } },
                  i.a.createElement(he, { level: 2 }, "Investment"),
                  i.a.createElement(
                    y.a,
                    null,
                    i.a.createElement(
                      _.a,
                      null,
                      i.a.createElement(
                        w.a,
                        { xs: { span: 24 }, lg: { span: 16 } },
                        i.a.createElement(
                          y.a.Item,
                          {
                            hasFeedback: !0,
                            validateStatus: a.status,
                            help: a.help
                          },
                          i.a.createElement(A.a, {
                            placeholder: "Amount byte (>100k)",
                            onChange: function(e) {
                              e < 1e5
                                ? o({
                                    value: e,
                                    status: "error",
                                    help: "The minimum amount is 100,000 bytes",
                                    valid: !1
                                  })
                                : N.winner
                                ? o({
                                    value: e,
                                    status: "error",
                                    help: "the winner has been chosen",
                                    valid: !1
                                  })
                                : N.yes_asset
                                ? N.no_asset
                                  ? o({
                                      value: e,
                                      status: "success",
                                      help: "",
                                      valid: !0
                                    })
                                  : o({
                                      value: e,
                                      status: "error",
                                      help: "no_asset has not been created",
                                      valid: !1
                                    })
                                : o({
                                    value: e,
                                    status: "error",
                                    help: "yes_asset has not been created",
                                    valid: !1
                                  });
                            },
                            value: a.value,
                            style: { width: "100%" },
                            min: 1e5,
                            size: "large"
                          })
                        )
                      ),
                      i.a.createElement(
                        w.a,
                        { xs: { span: 24, push: 0 }, lg: { span: 7, push: 1 } },
                        i.a.createElement(
                          y.a.Item,
                          null,
                          i.a.createElement(
                            "a",
                            {
                              type: "primary",
                              disabled: !(a.valid && P),
                              href: "byteball"
                                .concat(U ? "-tn" : "", ":")
                                .concat(P, "?amount=")
                                .concat(a.value, "&amp;asset=base"),
                              className: "ant-btn ant-btn-primary ant-btn-lg"
                            },
                            "Next"
                          )
                        )
                      )
                    )
                  )
                ),
                i.a.createElement(
                  w.a,
                  { xs: { span: 24 }, md: { span: 12, push: 2 } },
                  i.a.createElement(he, { level: 2 }, "Redemption"),
                  i.a.createElement(
                    y.a,
                    null,
                    i.a.createElement(
                      _.a,
                      null,
                      i.a.createElement(
                        w.a,
                        { xs: { span: 24 }, lg: { span: 16 } },
                        i.a.createElement(
                          y.a.Item,
                          {
                            hasFeedback: !0,
                            validateStatus: c.status,
                            help: c.help
                          },
                          i.a.createElement(S.a, {
                            placeholder: "Your address",
                            onChange: function(e) {
                              var t = e.target.value;
                              x.a.utils.isValidAddress(t)
                                ? d({
                                    value: t,
                                    status: "success",
                                    help: "",
                                    valid: !0
                                  })
                                : d({
                                    value: t,
                                    status: "error",
                                    help: "Address is not valid",
                                    valid: !1
                                  });
                            },
                            value: c.value,
                            style: { width: "100%" },
                            min: 1e5,
                            size: "large",
                            onKeyPress: function(e) {
                              "Enter" === e.key && c.valid && P && K();
                            }
                          })
                        )
                      ),
                      i.a.createElement(
                        w.a,
                        { xs: { span: 24, push: 0 }, lg: { span: 7, push: 1 } },
                        i.a.createElement(
                          y.a.Item,
                          null,
                          i.a.createElement(
                            E.a,
                            {
                              type: "primary",
                              size: "large",
                              disabled: !(c.valid && P),
                              onClick: K
                            },
                            "Search"
                          )
                        )
                      )
                    ),
                    i.a.createElement(
                      _.a,
                      null,
                      c.valid &&
                        C.loading &&
                        i.a.createElement(
                          "div",
                          {
                            style: {
                              backgroundColor: "#F0F2F5",
                              wordBreak: "break-all",
                              padding: 25,
                              borderRadius: 5,
                              fontSize: 18
                            }
                          },
                          i.a.createElement(
                            _.a,
                            null,
                            i.a.createElement("b", null, "winner: "),
                            N.winner
                              ? N.winner + "_asset"
                              : "the winner has not yet been chosen"
                          ),
                          i.a.createElement(
                            _.a,
                            null,
                            i.a.createElement("b", null, "no_asset: "),
                            N.no_asset
                              ? N.no_asset
                              : "yes_asset has not been created"
                          ),
                          i.a.createElement(
                            _.a,
                            null,
                            i.a.createElement("b", null, "yes_asset: "),
                            N.yes_asset
                              ? N.yes_asset
                              : "yes_asset has not been created"
                          ),
                          i.a.createElement(
                            _.a,
                            null,
                            i.a.createElement(
                              "b",
                              null,
                              "your balance of yes_asset: "
                            ),
                            C.yes_asset ? C.yes_asset : "0"
                          ),
                          i.a.createElement(
                            _.a,
                            null,
                            i.a.createElement(
                              "b",
                              null,
                              "your balance of no_asset: "
                            ),
                            C.no_asset ? C.no_asset : "0"
                          ),
                          i.a.createElement(
                            _.a,
                            { style: { marginTop: 15 } },
                            N.winner &&
                              C[N.winner + "_asset"] > 0 &&
                              i.a.createElement(
                                "a",
                                {
                                  type: "primary",
                                  href: "byteball"
                                    .concat(U ? "-tn" : "", ":")
                                    .concat(P, "?amount=")
                                    .concat(
                                      C[N.winner + "_asset"],
                                      "&amp;&asset="
                                    )
                                    .concat(
                                      encodeURIComponent(N[N.winner + "_asset"])
                                    ),
                                  className: "ant-btn ant-btn-lg"
                                },
                                "Exchange for bytes"
                              )
                          )
                        )
                    )
                  )
                )
              ),
            p.visible &&
              i.a.createElement(G, {
                value: p.value,
                onCancel: function() {
                  return b(!1);
                }
              }),
            i.a.createElement(
              M.a,
              {
                visible: I,
                footer: null,
                title: "Choose a winner",
                onCancel: function() {
                  return T(!1);
                }
              },
              i.a.createElement(
                "div",
                { style: { display: "flex", justifyContent: "space-around" } },
                i.a.createElement(
                  "a",
                  {
                    href: "byteball"
                      .concat(U ? "-tn" : "", ":")
                      .concat(P, "?amount=10000&base64data=")
                      .concat(q),
                    className: "ant-btn ant-btn-primary ant-btn-lg"
                  },
                  "yes_asset"
                ),
                i.a.createElement(
                  "a",
                  {
                    href: "byteball"
                      .concat(U ? "-tn" : "", ":")
                      .concat(P, "?amount=10000&base64data=")
                      .concat(F),
                    className: "ant-btn ant-btn-primary ant-btn-lg"
                  },
                  "no_asset"
                )
              )
            )
          );
        },
        pe = r(366),
        be = r(367),
        me = r(12),
        ve = r.n(me),
        ge = r(124),
        ye = r.n(ge),
        _e = R.a.Option,
        we = function() {
          var e = Object(n.useState)({
              value: "",
              status: "",
              help: "",
              valid: !1
            }),
            t = Object(v.a)(e, 2),
            r = t[0],
            a = t[1],
            o = Object(n.useState)(""),
            f = Object(v.a)(o, 2),
            u = f[0],
            c = f[1],
            d = Object(n.useState)(""),
            h = Object(v.a)(d, 2),
            l = h[0],
            p = h[1],
            b = Object(n.useState)(""),
            m = Object(v.a)(b, 2),
            g = m[0],
            E = m[1],
            A = Object(n.useState)(""),
            M = Object(v.a)(A, 2),
            I = M[0],
            T = M[1],
            L = Object(s.b)();
          Object(n.useEffect)(
            function() {
              L({ type: "CLEAR_BALANCE_ACTIVE_AA" });
            },
            [L]
          );
          var P,
            k = "{\nbase_aa: '"
              .concat(V, "',\nparams: {\n\tcomparison: '")
              .concat(l, "', \n\toracle_address: '")
              .concat(r.value, "',\n\tfeed_name: '")
              .concat(u, "',\n\texpiry_date: '")
              .concat(g, "',\n\tfeed_value: ")
              .concat(
                /^-{0,1}\d+$/.test((P = I)) ? P : "'".concat(P, "'"),
                "\n\t}\n}"
              );
          return i.a.createElement(
            ae,
            { title: "Deploy", page: "deploy" },
            i.a.createElement(
              _.a,
              null,
              i.a.createElement(
                w.a,
                { xs: { span: 24 }, md: { span: 18 }, xl: { span: 14 } },
                i.a.createElement(
                  y.a,
                  null,
                  i.a.createElement(
                    _.a,
                    { className: ye.a.alertWrap },
                    i.a.createElement(pe.a, {
                      message:
                        "After the deployment, go to the settings for issue assets",
                      type: "warning"
                    })
                  ),
                  i.a.createElement(
                    _.a,
                    null,
                    i.a.createElement(
                      y.a.Item,
                      {
                        hasFeedback: !0,
                        validateStatus: r.status,
                        help: r.help
                      },
                      i.a.createElement(S.a, {
                        placeholder: "Oracle",
                        value: r.value,
                        onChange: function(e) {
                          var t = e.target.value;
                          x.a.utils.isValidAddress(t)
                            ? a({
                                value: t,
                                status: "success",
                                help: "",
                                valid: !0
                              })
                            : a({
                                value: t,
                                status: "error",
                                help: "Address is not valid",
                                valid: !1
                              });
                        },
                        size: "large",
                        autoFocus: !0
                      })
                    )
                  ),
                  i.a.createElement(
                    _.a,
                    null,
                    i.a.createElement(
                      w.a,
                      { xs: { span: 24 }, md: { span: 8 } },
                      i.a.createElement(
                        y.a.Item,
                        null,
                        i.a.createElement(S.a, {
                          placeholder: "Feed name",
                          value: u,
                          onChange: function(e) {
                            c(e.target.value);
                          },
                          size: "large",
                          maxLength: 64
                        })
                      )
                    ),
                    i.a.createElement(
                      w.a,
                      { xs: { span: 24 }, md: { span: 4, offset: 2 } },
                      i.a.createElement(
                        y.a.Item,
                        null,
                        i.a.createElement(
                          R.a,
                          {
                            placeholder: "Comparison operator",
                            className: ye.a.select,
                            size: "large",
                            onChange: function(e) {
                              p(e);
                            }
                          },
                          i.a.createElement(
                            _e,
                            { key: "more-1", value: ">" },
                            ">"
                          ),
                          i.a.createElement(
                            _e,
                            { key: "less-2", value: "<" },
                            "<"
                          ),
                          i.a.createElement(
                            _e,
                            { key: "equals-4", value: ">=" },
                            ">="
                          ),
                          i.a.createElement(
                            _e,
                            { key: "more-5", value: "<=" },
                            "<="
                          ),
                          i.a.createElement(
                            _e,
                            { key: "less-6", value: "==" },
                            "="
                          ),
                          i.a.createElement(
                            _e,
                            { key: "equals-7", value: "!=" },
                            "!="
                          )
                        )
                      )
                    ),
                    i.a.createElement(
                      w.a,
                      { xs: { span: 24 }, md: { span: 8, offset: 2 } },
                      i.a.createElement(
                        y.a.Item,
                        null,
                        i.a.createElement(S.a, {
                          className: ye.a.input,
                          size: "large",
                          placeholder: "Feed value",
                          maxLength: 64,
                          value: I,
                          onChange: function(e) {
                            T(e.target.value);
                          }
                        })
                      )
                    )
                  ),
                  i.a.createElement(
                    _.a,
                    null,
                    i.a.createElement(
                      w.a,
                      { xs: { span: 24 }, sm: { span: 16 }, md: { span: 12 } },
                      i.a.createElement(
                        y.a.Item,
                        null,
                        i.a.createElement(be.a, {
                          showTime: { defaultValue: ve()("00:00:00", "H:mm") },
                          format: "YYYY-DD-MM",
                          placeholder: "Expiration date (UTC)",
                          size: "large",
                          style: { width: "100%" },
                          onChange: function(e) {
                            var t = e.utc(!0).format("YYYY-DD-MM");
                            E(t);
                          },
                          allowClear: !1
                        })
                      )
                    )
                  ),
                  i.a.createElement(
                    _.a,
                    null,
                    i.a.createElement(
                      w.a,
                      {
                        xs: { span: 24 },
                        sm: { span: 12 },
                        md: { span: 10 },
                        xxl: { span: 8 }
                      },
                      i.a.createElement(
                        y.a.Item,
                        null,
                        i.a.createElement(
                          "a",
                          {
                            className: "ant-btn ant-btn-lg",
                            disabled: !(r.valid && g && u && l && I),
                            href: "byteball-tn:data?app=definition&definition=".concat(
                              encodeURIComponent(k)
                            )
                          },
                          "Open deploy screen"
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Ee = r(372),
        Ae = r(375),
        Se = r(156),
        Me = r.n(Se),
        Ie = Ee.a.Step,
        xe = function() {
          var e,
            t = Object(n.useState)(!1),
            r = Object(v.a)(t, 2),
            a = r[0],
            o = r[1],
            u = Object(s.c)(function(e) {
              return e.aa.active;
            }),
            c = Object(s.c)(function(e) {
              return e.aa.activeInfo;
            }),
            d = Object(s.c)(function(e) {
              return e.aa.list;
            }),
            h = Object(s.c)(function(e) {
              return e.aa.activeAssetsRequest;
            }),
            l =
              (e = c) && (e.yes_asset || h.yes_asset)
                ? e.no_asset || h.no_asset
                  ? 2
                  : 1
                : 0,
            p = [],
            b = 0 === l ? { define_yes: 1 } : { define_no: 1 },
            m = JSON.stringify(b),
            g = L()(m);
          return (
            (p[0] = i.a.createElement(Ae.a, {
              icon: i.a.createElement(P.a, { type: "loading" }),
              title: "Issue yes_asset",
              subTitle:
                "Once the asset is stable, you will go to the next step",
              extra: i.a.createElement(
                "a",
                {
                  href: "byteball"
                    .concat(U ? "-tn" : "", ":")
                    .concat(u, "?amount=10000&base64data=")
                    .concat(g),
                  className: "ant-btn ant-btn-primary ant-btn-lg"
                },
                "Issue"
              )
            })),
            (p[1] = i.a.createElement(Ae.a, {
              icon: i.a.createElement(P.a, { type: "loading" }),
              title: "Issue no_asset",
              subTitle:
                "Once the asset is stable, you will go to the next step",
              extra: i.a.createElement(
                "a",
                {
                  href: "byteball"
                    .concat(U ? "-tn" : "", ":")
                    .concat(u, "?amount=10000&base64data=")
                    .concat(g),
                  className: "ant-btn ant-btn-primary ant-btn-lg"
                },
                "Issue"
              )
            })),
            (p[2] = i.a.createElement(Ae.a, {
              status: "success",
              title: "Autonomous agent successfully configured",
              extra: i.a.createElement(
                f.b,
                { to: "/", className: "ant-btn ant-btn-primary ant-btn-lg" },
                "Go dashboard"
              )
            })),
            i.a.createElement(
              ae,
              { title: "Issuing Assets", page: "issuing_assets" },
              i.a.createElement(
                _.a,
                null,
                i.a.createElement(
                  w.a,
                  { xs: { span: 24 }, md: { span: 18 }, xl: { span: 14 } },
                  !u &&
                    i.a.createElement(
                      _.a,
                      { className: Me.a.alertWrap },
                      i.a.createElement(pe.a, {
                        message:
                          "Please add autonomous agent to the system for issue assets. It will appear in the list as soon as it becomes stable.",
                        type: "warning"
                      })
                    ),
                  i.a.createElement(
                    _.a,
                    { className: Me.a.SelectAaRow },
                    i.a.createElement(
                      y.a,
                      null,
                      i.a.createElement(
                        w.a,
                        { xs: { span: 24 }, md: { span: 12 } },
                        i.a.createElement(
                          y.a.Item,
                          null,
                          i.a.createElement(ue, { autoFocus: 0 !== d.length })
                        )
                      ),
                      i.a.createElement(
                        w.a,
                        {
                          xs: { span: 24, push: 0 },
                          md: { span: 12, push: 1 }
                        },
                        i.a.createElement(
                          y.a.Item,
                          null,
                          i.a.createElement(
                            E.a,
                            {
                              type: "primary",
                              icon: "plus",
                              size: "large",
                              onClick: function() {
                                return o(!0);
                              },
                              autoFocus: 0 === d.length
                            },
                            "Add"
                          )
                        )
                      )
                    )
                  )
                )
              ),
              u &&
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(
                    Ee.a,
                    { current: l },
                    i.a.createElement(Ie, {
                      title: "yes_asset",
                      description: ""
                    }),
                    i.a.createElement(Ie, {
                      title: "no_asset",
                      description: ""
                    }),
                    i.a.createElement(Ie, { title: "Finish", description: "" })
                  ),
                  i.a.createElement(_.a, null, p[l])
                ),
              a &&
                i.a.createElement(G, {
                  onCancel: function() {
                    return o(!1);
                  }
                })
            )
          );
        },
        Te = function(e) {
          var t = Object(s.b)(),
            r = Object(s.c)(function(e) {
              return e.aa.active;
            });
          return (
            Object(n.useEffect)(
              function() {
                if (r) {
                  var e = setInterval(function() {
                    return t(Y(r));
                  }, 1e4);
                  return function() {
                    clearInterval(e);
                  };
                }
              },
              [r, t]
            ),
            Object(n.useEffect)(
              function() {
                t(function(e) {
                  try {
                    D.subscribe(function(t, r) {
                      if ("light/aa_request" === r[1].subject) {
                        if (
                          r[1].body &&
                          r[1].body.messages &&
                          r[1].body.messages[0] &&
                          r[1].body.messages[0].payload
                        ) {
                          var n = r[1].body.messages[0].payload,
                            i =
                              r[1].body.messages[1] &&
                              r[1].body.messages[1].payload &&
                              r[1].body.messages[1].payload.outputs[1].address;
                          "define_yes" in n
                            ? (q(i, "Request for issue yes_asset"),
                              e({
                                type: "ADD_AA_NOTIFICATION",
                                payload: {
                                  AA: i,
                                  title: "Request for issue yes_asset",
                                  tag: "req_yes"
                                }
                              }))
                            : "define_no" in n
                            ? (q(i, "Request for issue no_asset"),
                              e({
                                type: "ADD_AA_NOTIFICATION",
                                payload: {
                                  AA: i,
                                  title: "Request for issue no_asset",
                                  tag: "req_no"
                                }
                              }))
                            : "winner" in n &&
                              (q(i, "Request to select a winner"),
                              e({
                                type: "ADD_AA_NOTIFICATION",
                                payload: {
                                  AA: i,
                                  title: "Request to select a winner",
                                  tag: "req_winner"
                                }
                              }));
                        }
                      } else if (
                        "light/aa_response" === r[1].subject &&
                        r[1].body &&
                        r[1].body.response &&
                        r[1].body.response.responseVars
                      ) {
                        var a = r[1].body.response.responseVars,
                          o = r[1].body.aa_address;
                        "yes_asset" in a
                          ? (q(o, "Yes_asset was issued"),
                            e({
                              type: "ADD_AA_NOTIFICATION",
                              payload: {
                                AA: o,
                                title: "Yes_asset was issued",
                                tag: "res_yes"
                              }
                            }))
                          : "no_asset" in a
                          ? (q(o, "No_asset was issued"),
                            e({
                              type: "ADD_AA_NOTIFICATION",
                              payload: {
                                AA: o,
                                title: "No_asset was issued",
                                tag: "res_no"
                              }
                            }))
                          : "winner" in a &&
                            (q(
                              o,
                              "".concat(
                                a.winner,
                                "_asset was chosen as the winner"
                              )
                            ),
                            e({
                              type: "ADD_AA_NOTIFICATION",
                              payload: {
                                AA: o,
                                title: "".concat(
                                  a.winner,
                                  "_asset was chosen as the winner"
                                ),
                                tag: "res_winner"
                              }
                            }));
                      }
                    });
                  } catch (t) {
                    console.log("error", t);
                  }
                });
              },
              [t]
            ),
            i.a.createElement("div", null, e.children)
          );
        },
        Le = r(377),
        Re = r(77),
        Pe = R.a.Option,
        ke = function() {
          var e = Object(s.b)(),
            t = Object(s.c)(function(e) {
              return e.aa.list;
            }),
            r = t.length,
            a = Object(s.c)(function(e) {
              return e.aa.notifications;
            }),
            o = Object(n.useState)("all"),
            f = Object(v.a)(o, 2),
            u = f[0],
            c = f[1];
          Object(n.useEffect)(
            function() {
              e({ type: "VIEWED_NOTIFICATION" });
            },
            [e]
          );
          var d =
            "all" === u
              ? a
              : a.filter(function(e) {
                  return e.AA === u;
                });
          return i.a.createElement(
            ae,
            { title: "Notifications", page: "notifications" },
            i.a.createElement(
              _.a,
              null,
              i.a.createElement(
                w.a,
                { xs: { span: 24 }, md: { span: 18 }, xl: { span: 14 } },
                0 === r
                  ? i.a.createElement(
                      _.a,
                      { style: { marginBottom: 20 } },
                      i.a.createElement(pe.a, {
                        message:
                          "Please add autonomous agent to the system for  track events",
                        type: "warning"
                      })
                    )
                  : i.a.createElement(
                      _.a,
                      null,
                      i.a.createElement(
                        R.a,
                        {
                          className: se.a.select,
                          placeholder: "Select a AA",
                          onChange: c,
                          value: u,
                          size: "large",
                          autoFocus: !0
                        },
                        i.a.createElement(
                          Pe,
                          { key: "AA0", value: "all" },
                          "All AA"
                        ),
                        t.map(function(e, t) {
                          return i.a.createElement(
                            Pe,
                            { key: "AAList" + t, value: e },
                            e
                          );
                        })
                      )
                    ),
                i.a.createElement(
                  _.a,
                  { style: { marginTop: 50 } },
                  0 !== d.length
                    ? i.a.createElement(
                        Le.a,
                        null,
                        d.map(function(e, t) {
                          return i.a.createElement(
                            Le.a.Item,
                            { key: "Timeline - " + t },
                            "all" === u &&
                              i.a.createElement("b", null, e.AA, ": "),
                            e.title
                          );
                        })
                      )
                    : i.a.createElement(
                        "div",
                        null,
                        0 !== r &&
                          i.a.createElement(Re.a, {
                            image: Re.a.PRESENTED_IMAGE_SIMPLE,
                            description:
                              "There are no notifications for this AA"
                          })
                      )
                )
              )
            )
          );
        },
        Ne = function() {
          return i.a.createElement(
            s.a,
            { store: m },
            i.a.createElement(
              Te,
              null,
              i.a.createElement(
                f.a,
                null,
                i.a.createElement(
                  u.a,
                  { exact: !0, path: "/" },
                  i.a.createElement(le, null)
                ),
                i.a.createElement(
                  u.a,
                  { exact: !0, path: "/deploy" },
                  i.a.createElement(we, null)
                ),
                i.a.createElement(
                  u.a,
                  { exact: !0, path: "/issuing_assets" },
                  i.a.createElement(xe, null)
                ),
                i.a.createElement(
                  u.a,
                  { exact: !0, path: "/notifications" },
                  i.a.createElement(ke, null)
                )
              )
            )
          );
        };
      o.a.render(i.a.createElement(Ne, null), document.getElementById("root"));
    },
    76: function(e, t, r) {
      e.exports = {
        sider: "Sidebar_sider__3uFrQ",
        logo: "Sidebar_logo__2EIdY",
        logo__img: "Sidebar_logo__img__3Yeeu",
        brand: "Sidebar_brand__2-rjF",
        product: "Sidebar_product__1_2_U"
      };
    }
  },
  [[197, 1, 2]]
]);
//# sourceMappingURL=main.00dff651.chunk.js.map
