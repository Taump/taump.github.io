(this["webpackJsonpoption-dapp"] = this["webpackJsonpoption-dapp"] || []).push([
  [0],
  {
    133: function(e, a, t) {
      e.exports = {
        layout: "Layout_layout__2BEq3",
        content: "Layout_content__I06dq",
        wrap: "Layout_wrap__1sB59"
      };
    },
    171: function(e, a, t) {
      e.exports = {
        viewRow: "Search_viewRow__uJ7fG",
        row: "Search_row__ujLFd"
      };
    },
    217: function(e, a, t) {
      e.exports = { select: "SelectAA_select__2jrBu" };
    },
    218: function(e, a, t) {
      e.exports = { SelectAaRow: "Main_SelectAaRow__Kylyk" };
    },
    225: function(e, a, t) {
      e.exports = {
        SelectAaRow: "IssuingAssets_SelectAaRow__3U6se",
        alertWrap: "IssuingAssets_alertWrap__VqgAj"
      };
    },
    230: function(e, a, t) {
      e.exports = t(434);
    },
    434: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        s = t(5),
        l = t.n(s),
        c = t(19),
        i = t(53),
        o = t(63),
        u = (t(239), t(74)),
        d = t(213),
        m = t(136),
        p = t(37),
        f = {
          listByBase: [],
          listByBaseLoaded: [],
          subscriptions: [],
          active: null,
          activeInfo: null,
          activeBalance: { loading: !1 },
          activeAssetsRequest: {},
          notifications: [],
          error: null
        },
        E = Object(u.c)({
          aa: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : f,
              a = arguments.length > 1 ? arguments[1] : void 0;
            switch (a.type) {
              case "CHANGE_ACTIVE_AA":
                return Object(p.a)({}, e, {
                  active: a.payload.address,
                  activeInfo: a.payload.aaVars,
                  activeBalance: { loading: !1 },
                  activeAssetsRequest: {}
                });
              case "UPDATE_INFO_ACTIVE_AA":
                return Object(p.a)({}, e, { activeInfo: a.payload.aaVars });
              case "GET_BALANCE_ACTIVE_AA":
                var t = a.payload.balance;
                return Object(p.a)({}, e, {
                  activeBalance: {
                    loading: !0,
                    yes_asset:
                      e.activeInfo.yes_asset && t[e.activeInfo.yes_asset]
                        ? t[e.activeInfo.yes_asset].stable
                        : 0,
                    no_asset:
                      e.activeInfo.no_asset && t[e.activeInfo.no_asset]
                        ? t[e.activeInfo.no_asset].stable
                        : 0
                  }
                });
              case "CLEAR_BALANCE_ACTIVE_AA":
                return Object(p.a)({}, e, { activeBalance: { loading: !1 } });
              case "LOAD_AA_LIST_REQUEST":
                return Object(p.a)({}, e, { listByBaseLoaded: !1 });
              case "LOAD_AA_LIST_SUCCESS":
                return Object(p.a)({}, e, {
                  listByBase: a.payload,
                  listByBaseLoaded: !0
                });
              case "ADD_AA_NOTIFICATION":
                if (a.payload.AA === e.active) {
                  var n = {};
                  return (
                    "req_yes" === a.payload.tag
                      ? (n.yes_asset = !0)
                      : "req_no" === a.payload.tag && (n.no_asset = !0),
                    Object(p.a)({}, e, {
                      notifications: [a.payload].concat(
                        Object(m.a)(e.notifications)
                      ),
                      activeAssetsRequest: Object(p.a)(
                        {},
                        e.activeAssetsRequest,
                        {},
                        n
                      ),
                      isViewedNotifications: !1
                    })
                  );
                }
                return Object(p.a)({}, e, {
                  notifications: [a.payload].concat(
                    Object(m.a)(e.notifications)
                  ),
                  isViewedNotifications: !1
                });
              case "VIEWED_NOTIFICATION":
                return Object(p.a)({}, e, { isViewedNotifications: !0 });
              case "LOADING_NOTIFICATION":
                return Object(p.a)({}, e, { notifications: a.payload });
              case "SUBSCRIBE_AA":
                return Object(p.a)({}, e, {
                  subscriptions: [].concat(Object(m.a)(e.subscriptions), [
                    a.payload
                  ])
                });
              case "CLEAR_SUBSCRIBE_AA":
                return Object(p.a)({}, e, { subscriptions: [] });
              default:
                return e;
            }
          }
        }),
        b = Object(u.e)(
          E,
          Object(u.d)(
            Object(u.a)(d.a),
            window.__REDUX_DEVTOOLS_EXTENSION__
              ? window.__REDUX_DEVTOOLS_EXTENSION__()
              : function(e) {
                  return e;
                }
          )
        ),
        y = t(23),
        _ = t(444),
        v = t(443),
        g = t(437),
        h = t(438),
        A = t(42),
        O = t(447),
        x = t(449),
        w = t(445),
        j = t(60),
        I = t.n(j),
        S = t(96),
        C = t.n(S),
        k = t(435),
        N = t(173),
        B = t(4),
        T = t(88),
        R = t.n(T),
        F = k.a.Sider,
        D = [
          { key: "home", icon: "home", title: "Home", path: "/" },
          {
            key: "deploy",
            icon: "plus-circle",
            title: "Deploy AA",
            path: "/deploy"
          },
          {
            key: "search",
            icon: "search",
            title: "Search AA",
            path: "/search"
          },
          {
            key: "issuing_assets",
            icon: "setting",
            title: "Issuing assets",
            path: "/issuing_assets"
          }
        ],
        L = function(e) {
          var a = e.active;
          return r.a.createElement(
            F,
            { breakpoint: "lg", collapsedWidth: "0", className: R.a.sider },
            r.a.createElement(
              "div",
              { className: R.a.logo },
              r.a.createElement("img", {
                src: "/logo.png",
                className: R.a.logo__img,
                alt: "Obyte"
              }),
              r.a.createElement(
                "div",
                { className: R.a.brand },
                "Obyte ",
                r.a.createElement(
                  "div",
                  { className: R.a.product },
                  "Option contract"
                )
              )
            ),
            r.a.createElement(
              N.a,
              { theme: "light", defaultSelectedKeys: [a] },
              D.map(function(e) {
                return r.a.createElement(
                  N.a.Item,
                  { key: e.key },
                  r.a.createElement(
                    i.c,
                    { to: e.path, activeClassName: "selected" },
                    r.a.createElement(B.a, { type: e.icon }),
                    r.a.createElement(
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
        V = t(133),
        U = t.n(V),
        Y = k.a.Content,
        q = _.a.Title,
        z = function(e) {
          var a = e.children,
            t = e.title,
            n = e.page;
          return r.a.createElement(
            k.a,
            { className: U.a.layout },
            r.a.createElement(L, { active: n }),
            r.a.createElement(
              k.a,
              null,
              r.a.createElement(
                Y,
                { className: U.a.content },
                r.a.createElement(
                  "div",
                  { className: U.a.wrap },
                  r.a.createElement(q, { level: 1 }, t),
                  a
                )
              )
            )
          );
        },
        W = t(16),
        M = t.n(W),
        G = t(448),
        K = t(12),
        X = t.n(K),
        H = new I.a.Client("wss://obyte.org/bb-test", {
          testnet: !0,
          reconnect: !0
        });
      setInterval(function() {
        H.api.heartbeat();
      }, 1e4);
      var J = H,
        Q = !0,
        P = "WZFFFKQR4XRFQKR6NFV7Z7ICDOS67FEX",
        Z = t(41),
        $ = {
          createObjectNotification: {
            res: function(e, a) {
              var t = e.aa_address;
              if (Object(Z.isEmpty)(e.response)) {
                if (e.objResponseUnit) {
                  var n = e.trigger_unit,
                    r = e.objResponseUnit,
                    s = r.timestamp;
                  if (!r.messages) return;
                  var l = r.messages;
                  if (a.yes_asset && a.no_asset)
                    if (
                      l[0] &&
                      l[0].payload &&
                      l[0].payload.asset === a.yes_asset &&
                      l[1] &&
                      l[1].payload &&
                      l[1].payload.asset === a.no_asset
                    ) {
                      if (
                        l[0].payload.inputs &&
                        l[0].payload.inputs[0] &&
                        "issue" === l[0].payload.inputs[0].type &&
                        l[1].payload.inputs &&
                        l[1].payload.inputs[0] &&
                        "issue" === l[1].payload.inputs[0].type
                      ) {
                        var c = l[0].payload.inputs[0].amount;
                        return {
                          AA: t,
                          title: ""
                            .concat(e.trigger_address, " invested ")
                            .concat(c, " bytes"),
                          tag: "res_invest",
                          time: s,
                          trigger_unit: n
                        };
                      }
                    } else if (
                      l[0] &&
                      l[0].payload.inputs &&
                      "unit" in l[0].payload.inputs[0] &&
                      "unit" in l[0].payload.inputs[1]
                    )
                      return {
                        AA: t,
                        title: ""
                          .concat(e.trigger_address, " bought ")
                          .concat(l[0].payload.outputs[0].amount, " bytes"),
                        tag: "res_invest",
                        time: s,
                        trigger_unit: n
                      };
                }
              } else {
                var i = e.response,
                  o = e.objResponseUnit && e.objResponseUnit.timestamp,
                  u = e.trigger_unit;
                if (!i.responseVars)
                  return "error" in i
                    ? { AA: t, title: i.error, tag: "error", trigger_unit: u }
                    : void 0;
                var d = i.responseVars;
                if ("yes_asset" in d)
                  return {
                    AA: t,
                    title: "Yes_asset was issued",
                    tag: "res_yes",
                    time: o,
                    trigger_unit: u
                  };
                if ("no_asset" in d)
                  return {
                    AA: t,
                    title: "No_asset was issued",
                    tag: "res_no",
                    time: o,
                    trigger_unit: u
                  };
                if ("winner" in d)
                  return {
                    AA: t,
                    title: ""
                      .concat(d.winner, "_asset was chosen as the winner by ")
                      .concat(e.trigger_address),
                    tag: "res_winner",
                    time: o,
                    trigger_unit: u
                  };
              }
            },
            req: function(e) {
              if (
                (console.log(e),
                e.body.messages[0].payload &&
                  e.body.messages[1] &&
                  e.body.messages[1].payload)
              ) {
                var a = e.body.messages,
                  t = a[0].payload,
                  n = a[1].payload.outputs[1].address,
                  r = e.body.timestamp,
                  s = e.unit;
                if ("define_yes" in t)
                  return {
                    AA: n,
                    title: "Request for issue yes_asset",
                    tag: "req_yes",
                    time: r,
                    trigger_unit: s
                  };
                if ("define_no" in t)
                  return {
                    AA: n,
                    title: "Request for issue no_asset",
                    tag: "req_no",
                    time: r,
                    trigger_unit: s
                  };
                if ("winner" in t) {
                  var l = e.body.authors[0].address;
                  return {
                    AA: n,
                    title: "Request to select a winner by ".concat(l),
                    tag: "req_winner",
                    time: r,
                    trigger_unit: s
                  };
                }
              } else;
            }
          },
          toNumericValue: function(e) {
            return /^-{0,1}\d+$/.test(e) && e <= Number.MAX_SAFE_INTEGER
              ? e
              : "'".concat(e, "'");
          },
          isAddressByBase: function(e) {
            var a;
            return M.a.async(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!I.a.utils.isValidAddress(e)) {
                      t.next = 11;
                      break;
                    }
                    return (t.next = 3), M.a.awrap(J.api.getDefinition(e));
                  case 3:
                    if (!(a = t.sent)) {
                      t.next = 8;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      "autonomous agent" === a[0] && a[1].base_aa === P
                    );
                  case 8:
                    return t.abrupt("return", !1);
                  case 9:
                    t.next = 12;
                    break;
                  case 11:
                    return t.abrupt("return", !1);
                  case 12:
                  case "end":
                    return t.stop();
                }
            });
          }
        },
        ee = $.createObjectNotification,
        ae = $.isAddressByBase,
        te = function() {
          return function(e) {
            var a;
            return M.a.async(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        M.a.awrap(e({ type: "LOAD_AA_LIST_REQUEST" }))
                      );
                    case 3:
                      return (
                        (t.next = 5),
                        M.a.awrap(J.api.getAasByBaseAas({ base_aa: P }))
                      );
                    case 5:
                      return (
                        (a = t.sent),
                        (t.next = 8),
                        M.a.awrap(
                          e({ type: "LOAD_AA_LIST_SUCCESS", payload: a || [] })
                        )
                      );
                    case 8:
                      t.next = 13;
                      break;
                    case 10:
                      (t.prev = 10),
                        (t.t0 = t.catch(0)),
                        console.log("error", t.t0);
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              null,
              null,
              [[0, 10]]
            );
          };
        },
        ne = function(e) {
          return function(a, t) {
            var n, r, s, l;
            return M.a.async(
              function(c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return (
                        (c.prev = 0), (n = t()), (c.next = 4), M.a.awrap(ae(e))
                      );
                    case 4:
                      if (!c.sent) {
                        c.next = 20;
                        break;
                      }
                      return (
                        (c.next = 8),
                        M.a.awrap(J.api.getAaStateVars({ address: e }))
                      );
                    case 8:
                      return (
                        (r = c.sent),
                        (c.next = 11),
                        M.a.awrap(
                          a({
                            type: "CHANGE_ACTIVE_AA",
                            payload: { address: e, aaVars: r }
                          })
                        )
                      );
                    case 11:
                      return (
                        (s = n.aa.subscriptions),
                        (l =
                          s.filter(function(a) {
                            return a === e;
                          }).length > 0),
                        (c.next = 15),
                        M.a.awrap(a(le(e)))
                      );
                    case 15:
                      if (l) {
                        c.next = 18;
                        break;
                      }
                      return (c.next = 18), M.a.awrap(a(ce(e)));
                    case 18:
                      c.next = 22;
                      break;
                    case 20:
                      console.log("Address is not found"),
                        G.a.error({ message: "Address is not found" });
                    case 22:
                      c.next = 27;
                      break;
                    case 24:
                      (c.prev = 24),
                        (c.t0 = c.catch(0)),
                        console.log("error", c.t0);
                    case 27:
                    case "end":
                      return c.stop();
                  }
              },
              null,
              null,
              [[0, 24]]
            );
          };
        },
        re = function(e) {
          return function(a) {
            var t;
            return M.a.async(
              function(n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.prev = 0),
                        (n.next = 3),
                        M.a.awrap(J.api.getAaStateVars({ address: e }))
                      );
                    case 3:
                      (t = n.sent),
                        a({
                          type: "UPDATE_INFO_ACTIVE_AA",
                          payload: { address: e, aaVars: t }
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
        se = function(e, a) {
          G.a.open({ message: e, description: a, style: { minWidth: 350 } });
        },
        le = function(e) {
          return function(a) {
            var t, n, r;
            return M.a.async(function(s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    return (
                      (s.next = 2), M.a.awrap(J.api.getAaResponses({ aa: e }))
                    );
                  case 2:
                    return (
                      (t = s.sent),
                      (s.next = 5),
                      M.a.awrap(J.api.getAaStateVars({ address: e }))
                    );
                  case 5:
                    return (
                      (n = s.sent),
                      (r = []),
                      (s.next = 9),
                      M.a.awrap(
                        t.forEach(function(e) {
                          var a = ee.res(e, n);
                          a && r.push(a);
                        })
                      )
                    );
                  case 9:
                    return (
                      (s.next = 11),
                      M.a.awrap(a({ type: "LOADING_NOTIFICATION", payload: r }))
                    );
                  case 11:
                  case "end":
                    return s.stop();
                }
            });
          };
        },
        ce = function(e) {
          return function(a, t) {
            var n, r;
            return M.a.async(function(s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (
                      ((n = t()),
                      (r = n.aa.subscriptions),
                      r.filter(function(a) {
                        return a === e;
                      }).length > 0)
                    ) {
                      s.next = 8;
                      break;
                    }
                    return (
                      (s.next = 6),
                      M.a.awrap(
                        J.justsaying("light/new_aa_to_watch", { aa: e })
                      )
                    );
                  case 6:
                    return (
                      (s.next = 8),
                      M.a.awrap(a({ type: "SUBSCRIBE_AA", payload: e }))
                    );
                  case 8:
                  case "end":
                    return s.stop();
                }
            });
          };
        },
        ie = t(99),
        oe = t(217),
        ue = t.n(oe),
        de = ie.a.Option,
        me = function(e) {
          var a = Object(c.b)(),
            t = Object(c.c)(function(e) {
              return e.aa.listByBase;
            }),
            n = Object(c.c)(function(e) {
              return e.aa.active;
            }),
            s = Object(c.c)(function(e) {
              return e.aa.listByBaseLoaded;
            }),
            l = { length: 13 };
          return r.a.createElement(
            ie.a,
            Object.assign(
              {
                className: ue.a.select,
                placeholder: "Select a AA",
                onChange: function(e) {
                  a(ne(e));
                },
                value: n || 0,
                size: "large",
                loading: !s,
                showSearch: !0,
                onDropdownVisibleChange: function() {
                  return a(te());
                }
              },
              e
            ),
            r.a.createElement(
              de,
              { key: "AA0", value: 0, disabled: !0 },
              "Select a AA"
            ),
            t.map(function(e, a) {
              var t = e.definition[1].params,
                n = t.feed_name,
                s = t.comparison,
                c = t.expiry_date,
                i = t.feed_value;
              return r.a.createElement(
                de,
                { key: "AA" + a, value: e.address },
                Object(Z.truncate)(n, l) +
                  " " +
                  s +
                  " " +
                  Object(Z.truncate)(i, l),
                " ",
                "on ",
                c,
                " (",
                e.address,
                ")"
              );
            })
          );
        },
        pe = t(218),
        fe = t.n(pe),
        Ee = t(450),
        be = t(452),
        ye = t(436),
        _e = _.a.Title,
        ve = function(e) {
          var a = e.isFull,
            t = void 0 === a || a,
            n = Object(c.c)(function(e) {
              return e.aa.notifications;
            }),
            s = Object(Z.groupBy)(n, "AA");
          return 0 === n.length && t
            ? r.a.createElement(
                "div",
                null,
                r.a.createElement(_e, { level: 2 }, "Full notification list"),
                r.a.createElement(Ee.a, {
                  row: 10,
                  paragraph: { rows: 10, width: 0 },
                  active: !0
                })
              )
            : r.a.createElement(
                "div",
                null,
                r.a.createElement(_e, { level: 2 }, "Events list AA"),
                0 === n.length &&
                  r.a.createElement("div", null, "Events not found"),
                Object.keys(s).map(function(e, a) {
                  var n = s[e].map(function(a, t) {
                    var n = "error" === a.tag ? a.title.split(" ")[0] : null,
                      s = null;
                    return (
                      n &&
                        ("formula" === n
                          ? (s = "Formula Error")
                          : "neither" === n &&
                            (s = "Neither case is true in messages")),
                      r.a.createElement(
                        be.a.Item,
                        {
                          key: "list-" + e + "-" + t,
                          color: "error" === a.tag ? "red" : "green"
                        },
                        r.a.createElement(
                          "a",
                          {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "http://"
                              .concat(Q && "testnet", "explorer.obyte.org#")
                              .concat(a.trigger_unit),
                            style: {
                              color: "#383838",
                              fontSize: 16,
                              display: "inline-block"
                            }
                          },
                          "error" !== a.tag
                            ? r.a.createElement(
                                "span",
                                null,
                                X.a.unix(a.time).format("YYYY-MM-DD hh:mm:ss"),
                                " -",
                                " ",
                                a.title
                              )
                            : s
                        )
                      )
                    );
                  });
                  return r.a.createElement(
                    be.a,
                    { key: "timeline-" + e },
                    t &&
                      r.a.createElement(
                        "div",
                        {
                          style: {
                            paddingTop: 20,
                            paddingBottom: 20,
                            fontSize: 18,
                            fontWeight: 400,
                            color: "#424242"
                          }
                        },
                        e
                      ),
                    n
                  );
                }),
                r.a.createElement(ye.a, null)
              );
        },
        ge = _.a.Title,
        he = function(e) {
          var a = Object(o.f)(),
            t = Object(o.e)();
          Object(n.useEffect)(function() {
            a && a.hash && t.push("/");
          });
          var s = Object(n.useState)({
              value: "",
              status: "",
              help: "",
              valid: !1
            }),
            l = Object(y.a)(s, 2),
            i = l[0],
            u = l[1],
            d = Object(n.useState)({
              value: "",
              status: "",
              help: "",
              valid: !1
            }),
            m = Object(y.a)(d, 2),
            p = m[0],
            f = m[1],
            E = Object(n.useState)(!1),
            b = Object(y.a)(E, 2),
            _ = b[0],
            j = b[1],
            S = Object(c.b)(),
            k = Object(c.c)(function(e) {
              return e.aa.active;
            }),
            N = Object(c.c)(function(e) {
              return e.aa.activeInfo;
            }),
            B = Object(c.c)(function(e) {
              return e.aa.activeBalance;
            }),
            T = Object(n.useRef)(null),
            R = { winner: "yes" },
            F = { winner: "no" },
            D = JSON.stringify(R),
            L = JSON.stringify(F),
            V = C()(D),
            U = C()(L),
            Y = function() {
              var e;
              S(
                ((e = p.value),
                function(a) {
                  var t;
                  return M.a.async(
                    function(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.prev = 0),
                              (n.next = 3),
                              M.a.awrap(J.api.getBalances([e]))
                            );
                          case 3:
                            (t = n.sent),
                              a({
                                type: "GET_BALANCE_ACTIVE_AA",
                                payload: { balance: t[e], address: e }
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
                S(re(k));
            };
          return r.a.createElement(
            z,
            { title: "Home", page: "home" },
            r.a.createElement(
              v.a,
              null,
              r.a.createElement(
                g.a,
                { className: fe.a.SelectAaRow },
                r.a.createElement(
                  h.a,
                  { xs: { span: 24 }, md: { span: 12 } },
                  r.a.createElement(
                    v.a.Item,
                    null,
                    r.a.createElement(me, { autoFocus: !0 })
                  )
                ),
                r.a.createElement(
                  h.a,
                  { xs: { span: 24, push: 0 }, md: { span: 11, push: 1 } },
                  r.a.createElement(
                    v.a.Item,
                    null,
                    k &&
                      !N.winner &&
                      r.a.createElement(
                        A.a,
                        {
                          type: "default",
                          size: "large",
                          onClick: function() {
                            return j(!0);
                          }
                        },
                        "Choose a winner"
                      )
                  )
                )
              )
            ),
            k &&
              r.a.createElement(
                g.a,
                null,
                r.a.createElement(
                  h.a,
                  { xs: { span: 24 }, md: { span: 10 } },
                  r.a.createElement(
                    v.a,
                    null,
                    r.a.createElement(ge, { level: 2 }, "Investment"),
                    r.a.createElement(
                      g.a,
                      { style: { marginBottom: 30 } },
                      r.a.createElement(
                        h.a,
                        { xs: { span: 24 }, lg: { span: 16 } },
                        r.a.createElement(
                          v.a.Item,
                          {
                            hasFeedback: !0,
                            validateStatus: i.status,
                            help: i.help
                          },
                          r.a.createElement(O.a, {
                            placeholder: "Amount byte (>100k)",
                            onChange: function(e) {
                              e < 1e5
                                ? u({
                                    value: e,
                                    status: "error",
                                    help: "The minimum amount is 100,000 bytes",
                                    valid: !1
                                  })
                                : N.winner
                                ? u({
                                    value: e,
                                    status: "error",
                                    help: "the winner has been chosen",
                                    valid: !1
                                  })
                                : N.yes_asset
                                ? N.no_asset
                                  ? u({
                                      value: e,
                                      status: "success",
                                      help: "",
                                      valid: !0
                                    })
                                  : u({
                                      value: e,
                                      status: "error",
                                      help: "no_asset has not been created",
                                      valid: !1
                                    })
                                : u({
                                    value: e,
                                    status: "error",
                                    help: "yes_asset has not been created",
                                    valid: !1
                                  });
                            },
                            value: i.value,
                            style: { width: "100%" },
                            min: 1e5,
                            size: "large",
                            onKeyDown: function(e) {
                              13 === e.keyCode && i.valid && T.current.click();
                            }
                          })
                        )
                      ),
                      r.a.createElement(
                        h.a,
                        { xs: { span: 24, push: 0 }, lg: { span: 7, push: 1 } },
                        r.a.createElement(
                          v.a.Item,
                          null,
                          r.a.createElement(
                            "a",
                            {
                              type: "primary",
                              disabled: !(i.valid && k),
                              href: "byteball"
                                .concat(Q ? "-tn" : "", ":")
                                .concat(k, "?amount=")
                                .concat(i.value, "&amp;asset=base"),
                              className: "ant-btn ant-btn-primary ant-btn-lg",
                              ref: T
                            },
                            "Next"
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    g.a,
                    null,
                    r.a.createElement(ge, { level: 2 }, "Redemption"),
                    r.a.createElement(
                      v.a,
                      null,
                      r.a.createElement(
                        g.a,
                        null,
                        r.a.createElement(
                          h.a,
                          { xs: { span: 24 }, lg: { span: 16 } },
                          r.a.createElement(
                            v.a.Item,
                            {
                              hasFeedback: !0,
                              validateStatus: p.status,
                              help: p.help
                            },
                            r.a.createElement(x.a, {
                              placeholder: "Your address",
                              onChange: function(e) {
                                var a = e.target.value;
                                I.a.utils.isValidAddress(a)
                                  ? f({
                                      value: a,
                                      status: "success",
                                      help: "",
                                      valid: !0
                                    })
                                  : f({
                                      value: a,
                                      status: "error",
                                      help: "Address is not valid",
                                      valid: !1
                                    });
                              },
                              value: p.value,
                              style: { width: "100%" },
                              min: 1e5,
                              size: "large",
                              onKeyPress: function(e) {
                                "Enter" === e.key && p.valid && k && Y();
                              }
                            })
                          )
                        ),
                        r.a.createElement(
                          h.a,
                          {
                            xs: { span: 24, push: 0 },
                            lg: { span: 7, push: 1 }
                          },
                          r.a.createElement(
                            v.a.Item,
                            null,
                            r.a.createElement(
                              A.a,
                              {
                                type: "primary",
                                size: "large",
                                disabled: !(p.valid && k),
                                onClick: Y
                              },
                              "Search"
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        g.a,
                        null,
                        p.valid &&
                          B.loading &&
                          r.a.createElement(
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
                            r.a.createElement(
                              g.a,
                              null,
                              r.a.createElement("b", null, "winner: "),
                              N.winner
                                ? N.winner + "_asset"
                                : "the winner has not yet been chosen"
                            ),
                            r.a.createElement(
                              g.a,
                              null,
                              r.a.createElement("b", null, "no_asset: "),
                              N.no_asset
                                ? N.no_asset
                                : "yes_asset has not been created"
                            ),
                            r.a.createElement(
                              g.a,
                              null,
                              r.a.createElement("b", null, "yes_asset: "),
                              N.yes_asset
                                ? N.yes_asset
                                : "yes_asset has not been created"
                            ),
                            r.a.createElement(
                              g.a,
                              null,
                              r.a.createElement(
                                "b",
                                null,
                                "your balance of yes_asset: "
                              ),
                              B.yes_asset ? B.yes_asset : "0"
                            ),
                            r.a.createElement(
                              g.a,
                              null,
                              r.a.createElement(
                                "b",
                                null,
                                "your balance of no_asset: "
                              ),
                              B.no_asset ? B.no_asset : "0"
                            ),
                            r.a.createElement(
                              g.a,
                              { style: { marginTop: 15 } },
                              N.winner &&
                                B[N.winner + "_asset"] > 0 &&
                                r.a.createElement(
                                  "a",
                                  {
                                    type: "primary",
                                    href: "byteball"
                                      .concat(Q ? "-tn" : "", ":")
                                      .concat(k, "?amount=")
                                      .concat(
                                        B[N.winner + "_asset"],
                                        "&amp;&asset="
                                      )
                                      .concat(
                                        encodeURIComponent(
                                          N[N.winner + "_asset"]
                                        )
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
                r.a.createElement(
                  h.a,
                  { xs: { span: 24 }, md: { span: 12, push: 2 } },
                  r.a.createElement(ve, { isFull: !1 })
                )
              ),
            !k &&
              r.a.createElement(
                g.a,
                null,
                r.a.createElement(
                  h.a,
                  { xs: { span: 24 }, md: { span: 24 } },
                  r.a.createElement(ve, null)
                )
              ),
            r.a.createElement(
              w.a,
              {
                visible: _,
                footer: null,
                title: "Choose a winner",
                onCancel: function() {
                  return j(!1);
                }
              },
              r.a.createElement(
                "div",
                { style: { display: "flex", justifyContent: "space-around" } },
                r.a.createElement(
                  "a",
                  {
                    href: "byteball"
                      .concat(Q ? "-tn" : "", ":")
                      .concat(k, "?amount=10000&base64data=")
                      .concat(V),
                    className: "ant-btn ant-btn-primary ant-btn-lg"
                  },
                  "yes_asset"
                ),
                r.a.createElement(
                  "a",
                  {
                    href: "byteball"
                      .concat(Q ? "-tn" : "", ":")
                      .concat(k, "?amount=10000&base64data=")
                      .concat(U),
                    className: "ant-btn ant-btn-primary ant-btn-lg"
                  },
                  "no_asset"
                )
              )
            )
          );
        },
        Ae = t(439),
        Oe = t(442),
        xe = t(75),
        we = t.n(xe),
        je = ie.a.Option,
        Ie = $.toNumericValue,
        Se = function() {
          var e = Object(n.useState)({
              value: "",
              status: "",
              help: "",
              valid: !1
            }),
            a = Object(y.a)(e, 2),
            t = a[0],
            s = a[1],
            l = Object(n.useState)(""),
            i = Object(y.a)(l, 2),
            o = i[0],
            u = i[1],
            d = Object(n.useState)(""),
            m = Object(y.a)(d, 2),
            p = m[0],
            f = m[1],
            E = Object(n.useState)(""),
            b = Object(y.a)(E, 2),
            _ = b[0],
            A = b[1],
            O = Object(n.useState)(""),
            w = Object(y.a)(O, 2),
            j = w[0],
            S = w[1],
            C = Object(c.b)(),
            k = Object(n.useRef)(null);
          Object(n.useEffect)(
            function() {
              C({ type: "CLEAR_BALANCE_ACTIVE_AA" });
            },
            [C]
          );
          var N = "{\n  base_aa: '"
            .concat(P, "',\n  params: {\n    oracle_address: '")
            .concat(t.value, "',\n    comparison: '")
            .concat(p, "', \n    feed_name: '")
            .concat(o, "',\n    feed_value: ")
            .concat(Ie(j), ",\n    expiry_date: '")
            .concat(_, "'\n  }\n}");
          return r.a.createElement(
            z,
            { title: "Deploy", page: "deploy" },
            r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                h.a,
                { xs: { span: 24 }, md: { span: 18 }, xl: { span: 14 } },
                r.a.createElement(
                  v.a,
                  {
                    onKeyDown: function(e) {
                      13 === e.keyCode &&
                        t.valid &&
                        _ &&
                        o &&
                        p &&
                        j &&
                        k.current.click();
                    }
                  },
                  r.a.createElement(
                    g.a,
                    { className: we.a.alertWrap },
                    r.a.createElement(Ae.a, {
                      message:
                        "After the deployment, go to the settings for issue assets",
                      type: "warning"
                    })
                  ),
                  r.a.createElement(
                    g.a,
                    null,
                    r.a.createElement(
                      v.a.Item,
                      {
                        hasFeedback: !0,
                        validateStatus: t.status,
                        help: t.help
                      },
                      r.a.createElement(x.a, {
                        placeholder: "Oracle",
                        value: t.value,
                        onChange: function(e) {
                          var a = e.target.value;
                          I.a.utils.isValidAddress(a)
                            ? s({
                                value: a,
                                status: "success",
                                help: "",
                                valid: !0
                              })
                            : s({
                                value: a,
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
                  r.a.createElement(
                    g.a,
                    null,
                    r.a.createElement(
                      h.a,
                      { xs: { span: 24 }, md: { span: 8 } },
                      r.a.createElement(
                        v.a.Item,
                        null,
                        r.a.createElement(x.a, {
                          placeholder: "Feed name",
                          value: o,
                          onChange: function(e) {
                            u(e.target.value);
                          },
                          size: "large",
                          maxLength: 64
                        })
                      )
                    ),
                    r.a.createElement(
                      h.a,
                      { xs: { span: 24 }, md: { span: 4, offset: 2 } },
                      r.a.createElement(
                        v.a.Item,
                        null,
                        r.a.createElement(
                          ie.a,
                          {
                            placeholder: "Comparison operator",
                            className: we.a.select,
                            size: "large",
                            onChange: function(e) {
                              f(e);
                            }
                          },
                          r.a.createElement(
                            je,
                            { key: "more-1", value: ">" },
                            ">"
                          ),
                          r.a.createElement(
                            je,
                            { key: "less-2", value: "<" },
                            "<"
                          ),
                          r.a.createElement(
                            je,
                            { key: "equals-4", value: ">=" },
                            ">="
                          ),
                          r.a.createElement(
                            je,
                            { key: "more-5", value: "<=" },
                            "<="
                          ),
                          r.a.createElement(
                            je,
                            { key: "less-6", value: "==" },
                            "=="
                          ),
                          r.a.createElement(
                            je,
                            { key: "equals-7", value: "!=" },
                            "!="
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      h.a,
                      { xs: { span: 24 }, md: { span: 8, offset: 2 } },
                      r.a.createElement(
                        v.a.Item,
                        null,
                        r.a.createElement(x.a, {
                          className: we.a.input,
                          size: "large",
                          placeholder: "Feed value",
                          maxLength: 64,
                          value: j,
                          onChange: function(e) {
                            S(e.target.value);
                          }
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    g.a,
                    null,
                    r.a.createElement(
                      h.a,
                      { xs: { span: 24 }, sm: { span: 16 }, md: { span: 12 } },
                      r.a.createElement(
                        v.a.Item,
                        null,
                        r.a.createElement(Oe.a, {
                          showTime: { defaultValue: X()("00:00:00", "H:mm") },
                          format: "YYYY-MM-DD",
                          placeholder: "Expiration date (UTC)",
                          size: "large",
                          style: { width: "100%" },
                          onChange: function(e) {
                            if (e) {
                              var a = e.utc(!0).format("YYYY-MM-DD");
                              A(a);
                            } else A("");
                          },
                          allowClear: !1
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    g.a,
                    null,
                    r.a.createElement(
                      h.a,
                      {
                        xs: { span: 24 },
                        sm: { span: 12 },
                        md: { span: 10 },
                        xxl: { span: 8 }
                      },
                      r.a.createElement(
                        v.a.Item,
                        null,
                        r.a.createElement(
                          "a",
                          {
                            className: "ant-btn ant-btn-lg",
                            ref: k,
                            disabled: !(t.valid && _ && o && p && j),
                            href: "byteball-tn:data?app=definition&definition=".concat(
                              encodeURIComponent(N)
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
        Ce = t(446),
        ke = t(451),
        Ne = t(225),
        Be = t.n(Ne),
        Te = Ce.a.Step,
        Re = function() {
          var e,
            a = Object(c.c)(function(e) {
              return e.aa.active;
            }),
            t = Object(c.c)(function(e) {
              return e.aa.activeInfo;
            }),
            n = Object(c.c)(function(e) {
              return e.aa.activeAssetsRequest;
            }),
            s =
              (e = t) && (e.yes_asset || n.yes_asset)
                ? e.no_asset || n.no_asset
                  ? 2
                  : 1
                : 0,
            l = [],
            o = 0 === s ? { define_yes: 1 } : { define_no: 1 },
            u = JSON.stringify(o),
            d = C()(u);
          return (
            (l[0] = r.a.createElement(ke.a, {
              icon: r.a.createElement(B.a, { type: "loading" }),
              title: "Issue yes_asset",
              subTitle:
                "Once the asset is stable, you will go to the next step",
              extra: r.a.createElement(
                "a",
                {
                  href: "byteball"
                    .concat(Q ? "-tn" : "", ":")
                    .concat(a, "?amount=10000&base64data=")
                    .concat(d),
                  className: "ant-btn ant-btn-primary ant-btn-lg"
                },
                "Issue"
              )
            })),
            (l[1] = r.a.createElement(ke.a, {
              icon: r.a.createElement(B.a, { type: "loading" }),
              title: "Issue no_asset",
              subTitle:
                "Once the asset is stable, you will go to the next step",
              extra: r.a.createElement(
                "a",
                {
                  href: "byteball"
                    .concat(Q ? "-tn" : "", ":")
                    .concat(a, "?amount=10000&base64data=")
                    .concat(d),
                  className: "ant-btn ant-btn-primary ant-btn-lg"
                },
                "Issue"
              )
            })),
            (l[2] = r.a.createElement(ke.a, {
              status: "success",
              title: "Autonomous agent successfully configured",
              extra: r.a.createElement(
                i.b,
                { to: "/", className: "ant-btn ant-btn-primary ant-btn-lg" },
                "Go home page"
              )
            })),
            r.a.createElement(
              z,
              { title: "Issuing Assets", page: "issuing_assets" },
              r.a.createElement(
                g.a,
                { className: Be.a.SelectAaRow },
                r.a.createElement(
                  v.a,
                  null,
                  r.a.createElement(
                    h.a,
                    { xs: { span: 24 }, md: { span: 12 } },
                    r.a.createElement(
                      v.a.Item,
                      null,
                      r.a.createElement(me, { autoFocus: !0 })
                    )
                  )
                )
              ),
              a &&
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    Ce.a,
                    { current: s },
                    r.a.createElement(Te, {
                      title: "yes_asset",
                      description: ""
                    }),
                    r.a.createElement(Te, {
                      title: "no_asset",
                      description: ""
                    }),
                    r.a.createElement(Te, { title: "Finish", description: "" })
                  ),
                  r.a.createElement(g.a, null, l[s])
                )
            )
          );
        },
        Fe = t(440),
        De = t(441),
        Le = ie.a.Option,
        Ve = function(e) {
          var a = Object(n.useState)(""),
            t = Object(y.a)(a, 2),
            s = t[0],
            l = t[1],
            c = Object(n.useState)(""),
            i = Object(y.a)(c, 2),
            o = i[0],
            u = i[1],
            d = Object(n.useState)(""),
            m = Object(y.a)(d, 2),
            p = m[0],
            f = m[1],
            E = Object(n.useState)(""),
            b = Object(y.a)(E, 2),
            _ = b[0],
            O = b[1],
            w = Object(n.useState)(""),
            j = Object(y.a)(w, 2),
            I = j[0],
            S = j[1];
          return r.a.createElement(
            v.a,
            {
              onKeyDown: function(a) {
                return (
                  13 === a.keyCode &&
                  e.handleChangeSearchFormAA({
                    feed_name: o,
                    feed_value: I,
                    expiry_date: _,
                    comparison: p,
                    oracle: s
                  })
                );
              }
            },
            r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                v.a.Item,
                null,
                r.a.createElement(x.a, {
                  placeholder: "Oracle",
                  value: s,
                  onChange: function(e) {
                    var a = e.target.value;
                    l(a);
                  },
                  size: "large",
                  autoFocus: !0
                })
              )
            ),
            r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                h.a,
                { xs: { span: 24 }, md: { span: 8 } },
                r.a.createElement(
                  v.a.Item,
                  null,
                  r.a.createElement(x.a, {
                    placeholder: "Feed name",
                    value: o,
                    onChange: function(e) {
                      u(e.target.value);
                    },
                    size: "large",
                    maxLength: 64
                  })
                )
              ),
              r.a.createElement(
                h.a,
                { xs: { span: 24 }, md: { span: 4, offset: 2 } },
                r.a.createElement(
                  v.a.Item,
                  null,
                  r.a.createElement(
                    ie.a,
                    {
                      placeholder: "Comparison operator",
                      className: we.a.select,
                      size: "large",
                      onChange: function(e) {
                        f(e);
                      }
                    },
                    r.a.createElement(Le, { key: "more-1", value: ">" }, ">"),
                    r.a.createElement(Le, { key: "less-2", value: "<" }, "<"),
                    r.a.createElement(
                      Le,
                      { key: "equals-4", value: ">=" },
                      ">="
                    ),
                    r.a.createElement(Le, { key: "more-5", value: "<=" }, "<="),
                    r.a.createElement(Le, { key: "less-6", value: "==" }, "="),
                    r.a.createElement(
                      Le,
                      { key: "equals-7", value: "!=" },
                      "!="
                    )
                  )
                )
              ),
              r.a.createElement(
                h.a,
                { xs: { span: 24 }, md: { span: 8, offset: 2 } },
                r.a.createElement(
                  v.a.Item,
                  null,
                  r.a.createElement(x.a, {
                    className: we.a.input,
                    size: "large",
                    placeholder: "Feed value",
                    maxLength: 64,
                    value: I,
                    onChange: function(e) {
                      S(e.target.value);
                    }
                  })
                )
              )
            ),
            r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                h.a,
                { xs: { span: 24 }, sm: { span: 16 }, md: { span: 12 } },
                r.a.createElement(
                  v.a.Item,
                  null,
                  r.a.createElement(Oe.a, {
                    showTime: { defaultValue: X()("00:00:00", "H:mm") },
                    format: "YYYY-DD-MM",
                    placeholder: "Expiration date (UTC)",
                    size: "large",
                    style: { width: "100%" },
                    onChange: function(e) {
                      if (e) {
                        var a = e.utc(!0).format("YYYY-DD-MM");
                        O(a);
                      } else O("");
                    },
                    allowClear: !1
                  })
                )
              )
            ),
            r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                v.a.Item,
                null,
                r.a.createElement(
                  A.a,
                  {
                    onClick: function() {
                      e.handleChangeSearchFormAA({
                        feed_name: o,
                        feed_value: I,
                        expiry_date: _,
                        comparison: p,
                        oracle: s
                      });
                    }
                  },
                  "Search"
                )
              )
            )
          );
        },
        Ue = t(171),
        Ye = t.n(Ue),
        qe = function() {
          var e = Object(c.c)(function(e) {
              return e.aa.listByBase;
            }),
            a = Object(c.c)(function(e) {
              return e.aa.listByBaseLoaded;
            }),
            t = Object(c.b)(),
            s = Object(o.e)();
          Object(n.useEffect)(
            function() {
              t(te());
            },
            [t]
          );
          var l = [];
          e.forEach(function(e) {
            var a = e.definition[1].params;
            l.push({
              key: e.address,
              address: e.address,
              oracle: a.oracle_address,
              feed_name: a.feed_name,
              expiry_date: a.expiry_date,
              feed_value: a.feed_value,
              comparison: a.comparison
            });
          });
          var i = (function() {
              var e = Object(n.useState)([0, 0]),
                a = Object(y.a)(e, 2),
                t = a[0],
                r = a[1];
              return (
                Object(n.useLayoutEffect)(function() {
                  function e() {
                    r([window.innerWidth, window.innerHeight]);
                  }
                  return (
                    window.addEventListener("resize", e),
                    e(),
                    function() {
                      return window.removeEventListener("resize", e);
                    }
                  );
                }, []),
                t
              );
            })(),
            u = Object(y.a)(i, 1)[0],
            d = { length: u < 1280 ? 13 : 20 },
            m = function(e) {
              t(ne(e)), s.push("/");
            },
            p = [
              {
                title: "Address",
                dataIndex: "address",
                key: "address",
                render: function(e) {
                  return u >= 1440
                    ? e
                    : e.length > d.length
                    ? r.a.createElement(
                        Fe.a,
                        {
                          content: r.a.createElement(
                            "div",
                            { style: { maxWidth: 600 } },
                            e
                          )
                        },
                        r.a.createElement(
                          "span",
                          null,
                          Object(Z.truncate)(e, d)
                        )
                      )
                    : e;
                }
              },
              {
                title: "Oracle",
                dataIndex: "oracle",
                key: "oracle",
                render: function(e) {
                  return u >= 1440
                    ? e
                    : e.length > d.length
                    ? r.a.createElement(
                        Fe.a,
                        {
                          content: r.a.createElement(
                            "div",
                            { style: { maxWidth: 600 } },
                            e
                          )
                        },
                        r.a.createElement(
                          "span",
                          null,
                          Object(Z.truncate)(e, d)
                        )
                      )
                    : e;
                }
              },
              {
                title: "Feed name",
                dataIndex: "feed_name",
                key: "feed_name",
                width: u >= 1280 ? "auto" : "none",
                render: function(e) {
                  return u >= 1440
                    ? e
                    : e.length > d.length
                    ? r.a.createElement(
                        Fe.a,
                        {
                          content: r.a.createElement(
                            "div",
                            { style: { maxWidth: 600 } },
                            e
                          )
                        },
                        r.a.createElement(
                          "span",
                          null,
                          Object(Z.truncate)(e, d)
                        )
                      )
                    : e;
                }
              },
              {
                title: "Comparison",
                dataIndex: "comparison",
                key: "comparison"
              },
              {
                title: "Feed value",
                dataIndex: "feed_value",
                key: "feed_value",
                width: u >= 1440 ? "auto" : "none",
                render: function(e) {
                  return u >= 1440
                    ? e
                    : e.length > d.length
                    ? r.a.createElement(
                        Fe.a,
                        {
                          content: r.a.createElement(
                            "div",
                            { style: { maxWidth: 600 } },
                            e
                          )
                        },
                        r.a.createElement(
                          "span",
                          null,
                          Object(Z.truncate)(e, d)
                        )
                      )
                    : e;
                }
              },
              {
                title: "Expiry date",
                dataIndex: "expiry_date",
                key: "expiry_date",
                width: 100
              }
            ],
            f = Object(n.useState)(null),
            E = Object(y.a)(f, 2),
            b = E[0],
            _ = E[1];
          return r.a.createElement(
            z,
            { title: "Search AA", page: "search" },
            r.a.createElement(
              g.a,
              null,
              r.a.createElement(Ve, {
                handleChangeSearchFormAA: function(e) {
                  var a = l;
                  e.oracle &&
                    (a = a.filter(function(a) {
                      return -1 !== a.oracle.indexOf(e.oracle.toUpperCase());
                    })),
                    e.feed_value &&
                      (console.log("value is ", e.feed_value),
                      (a = a.filter(function(a) {
                        return (
                          a.feed_value.toString().toUpperCase() ===
                          e.feed_value.toUpperCase()
                        );
                      }))),
                    e.feed_name &&
                      (a = a.filter(function(a) {
                        return (
                          -1 !==
                          a.feed_name
                            .toUpperCase()
                            .indexOf(e.feed_name.toUpperCase())
                        );
                      })),
                    e.comparison &&
                      (a = a.filter(function(a) {
                        return a.comparison === e.comparison;
                      })),
                    e.expiry_date &&
                      (a = a.filter(function(a) {
                        return a.expiry_date === e.expiry_date;
                      })),
                    _(a);
                }
              })
            ),
            u >= 900 &&
              r.a.createElement(De.a, {
                dataSource: b || l,
                columns: p,
                size: "middle",
                loading: !a,
                rowClassName: Ye.a.row,
                onRow: function(e) {
                  return {
                    onClick: function(a) {
                      m(e.address);
                    }
                  };
                }
              }),
            u < 900 &&
              r.a.createElement(
                g.a,
                null,
                (b || l).map(function(e, a) {
                  return r.a.createElement(
                    "div",
                    {
                      key: "aa" + a,
                      className: Ye.a.viewRow,
                      onClick: function() {
                        m(e.address);
                      }
                    },
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement("b", null, "Address:"),
                      " ",
                      e.address
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement("b", null, "Oracle:"),
                      " ",
                      e.oracle
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement("b", null, "Feed name:"),
                      " ",
                      e.feed_name
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement("b", null, "Comparison:"),
                      " ",
                      e.comparison
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement("b", null, "Feed value:"),
                      " ",
                      e.feed_value
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement("b", null, "Expiry date:"),
                      " ",
                      e.expiry_date
                    )
                  );
                })
              )
          );
        },
        ze = function(e) {
          var a = Object(c.b)(),
            t = Object(c.c)(function(e) {
              return e.aa.active;
            });
          return (
            Object(n.useEffect)(
              function() {
                M.a.async(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (null !== t) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 3), M.a.awrap(a(te()));
                      case 3:
                        return (
                          (e.next = 5),
                          M.a.awrap(
                            a(function(e, a) {
                              var t,
                                n,
                                r,
                                s,
                                l,
                                c,
                                i,
                                o,
                                u,
                                d,
                                m,
                                p,
                                f,
                                E,
                                b,
                                y,
                                _,
                                v,
                                g,
                                h,
                                A;
                              return M.a.async(
                                function(O) {
                                  for (;;)
                                    switch ((O.prev = O.next)) {
                                      case 0:
                                        if (
                                          ((t = a()), !(n = t.aa.listByBase))
                                        ) {
                                          O.next = 64;
                                          break;
                                        }
                                        (r = []),
                                          (s = !0),
                                          (l = !1),
                                          (c = void 0),
                                          (O.prev = 7),
                                          (i = n[Symbol.iterator]());
                                      case 9:
                                        if ((s = (o = i.next()).done)) {
                                          O.next = 48;
                                          break;
                                        }
                                        if (
                                          ((u = o.value),
                                          (d =
                                            u.definition &&
                                            u.definition[1] &&
                                            u.definition[1].params),
                                          (m = u.address),
                                          (p = d.expiry_date),
                                          !X()(p).isValid())
                                        ) {
                                          O.next = 45;
                                          break;
                                        }
                                        if (
                                          !X()(p).isAfter(X()().add(-7, "d"))
                                        ) {
                                          O.next = 45;
                                          break;
                                        }
                                        return (
                                          e(ce(m)),
                                          (O.next = 22),
                                          M.a.awrap(
                                            J.api.getAaResponses({ aa: m })
                                          )
                                        );
                                      case 22:
                                        return (
                                          (f = O.sent),
                                          (O.next = 25),
                                          M.a.awrap(
                                            J.api.getAaStateVars({ address: m })
                                          )
                                        );
                                      case 25:
                                        for (
                                          E = O.sent,
                                            b = !0,
                                            y = !1,
                                            _ = void 0,
                                            O.prev = 29,
                                            v = f[Symbol.iterator]();
                                          !(b = (g = v.next()).done);
                                          b = !0
                                        )
                                          (h = g.value),
                                            (A = ee.res(h, E)) && r.push(A);
                                        O.next = 37;
                                        break;
                                      case 33:
                                        (O.prev = 33),
                                          (O.t0 = O.catch(29)),
                                          (y = !0),
                                          (_ = O.t0);
                                      case 37:
                                        (O.prev = 37),
                                          (O.prev = 38),
                                          b || null == v.return || v.return();
                                      case 40:
                                        if (((O.prev = 40), !y)) {
                                          O.next = 43;
                                          break;
                                        }
                                        throw _;
                                      case 43:
                                        return O.finish(40);
                                      case 44:
                                        return O.finish(37);
                                      case 45:
                                        (s = !0), (O.next = 9);
                                        break;
                                      case 48:
                                        O.next = 54;
                                        break;
                                      case 50:
                                        (O.prev = 50),
                                          (O.t1 = O.catch(7)),
                                          (l = !0),
                                          (c = O.t1);
                                      case 54:
                                        (O.prev = 54),
                                          (O.prev = 55),
                                          s || null == i.return || i.return();
                                      case 57:
                                        if (((O.prev = 57), !l)) {
                                          O.next = 60;
                                          break;
                                        }
                                        throw c;
                                      case 60:
                                        return O.finish(57);
                                      case 61:
                                        return O.finish(54);
                                      case 62:
                                        return (
                                          (O.next = 64),
                                          M.a.awrap(
                                            e({
                                              type: "LOADING_NOTIFICATION",
                                              payload: r
                                            })
                                          )
                                        );
                                      case 64:
                                      case "end":
                                        return O.stop();
                                    }
                                },
                                null,
                                null,
                                [
                                  [7, 50, 54, 62],
                                  [29, 33, 37, 45],
                                  [38, , 40, 44],
                                  [55, , 57, 61]
                                ]
                              );
                            })
                          )
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                });
              },
              [a, t]
            ),
            Object(n.useEffect)(
              function() {
                if (t) {
                  var e = setInterval(function() {
                    return a(re(t));
                  }, 1e4);
                  return function() {
                    clearInterval(e);
                  };
                }
              },
              [t, a]
            ),
            Object(n.useEffect)(
              function() {
                a(function(e, a) {
                  try {
                    J.subscribe(function(t, n) {
                      var r, s, l, c, i, o;
                      return M.a.async(function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((r = a()),
                                (s = r.aa.active),
                                "light/aa_request" !== n[1].subject)
                              ) {
                                t.next = 6;
                                break;
                              }
                              n[1].body &&
                                n[1].body.messages &&
                                n[1].body.messages[0] &&
                                n[1].body.messages[1] &&
                                (((l = ee.req(n[1])) && l.AA === s) ||
                                  (!s && l)) &&
                                (se(l.AA, l.title),
                                e({ type: "ADD_AA_NOTIFICATION", payload: l })),
                                (t.next = 12);
                              break;
                            case 6:
                              if ("light/aa_response" !== n[1].subject) {
                                t.next = 12;
                                break;
                              }
                              return (
                                (c = n[1].body.aa_address),
                                (t.next = 10),
                                M.a.awrap(J.api.getAaStateVars({ address: c }))
                              );
                            case 10:
                              (i = t.sent),
                                n[1].body &&
                                  n[1].body.response &&
                                  n[1].body.response &&
                                  (((o = ee.res(n[1].body, i)) && o.AA === s) ||
                                    (!s && o)) &&
                                  (se(o.AA, o.title),
                                  e({
                                    type: "ADD_AA_NOTIFICATION",
                                    payload: o
                                  }));
                            case 12:
                            case "end":
                              return t.stop();
                          }
                      });
                    });
                  } catch (t) {
                    console.log("error", t);
                  }
                });
              },
              [a]
            ),
            Object(n.useEffect)(
              function() {
                J.client.ws.addEventListener("close", function() {
                  a({ type: "CLEAR_SUBSCRIBE_AA" });
                }),
                  J.client.ws.addEventListener("open", function() {
                    t && a(ne(t));
                  });
              },
              [a, t]
            ),
            r.a.createElement("div", null, e.children)
          );
        },
        We = function(e) {
          var a = e.children,
            t = Object(o.f)(),
            n = Object(c.b)();
          if (t.hash) {
            var r = t.hash.slice(1);
            n(ne(r));
          }
          return a;
        },
        Me = function() {
          return r.a.createElement(
            c.a,
            { store: b },
            r.a.createElement(
              ze,
              null,
              r.a.createElement(
                i.a,
                null,
                r.a.createElement(
                  o.a,
                  { exact: !0, path: "/" },
                  r.a.createElement(We, null, r.a.createElement(he, null))
                ),
                r.a.createElement(
                  o.a,
                  { exact: !0, path: "/deploy" },
                  r.a.createElement(Se, null)
                ),
                r.a.createElement(
                  o.a,
                  { exact: !0, path: "/search" },
                  r.a.createElement(qe, null)
                ),
                r.a.createElement(
                  o.a,
                  { exact: !0, path: "/issuing_assets" },
                  r.a.createElement(Re, null)
                )
              )
            )
          );
        };
      l.a.render(r.a.createElement(Me, null), document.getElementById("root"));
    },
    75: function(e, a, t) {
      e.exports = {
        input: "Deploy_input__XSYn9",
        select: "Deploy_select__10pz6",
        alertWrap: "Deploy_alertWrap__i7xvt"
      };
    },
    88: function(e, a, t) {
      e.exports = {
        sider: "Sidebar_sider__3uFrQ",
        logo: "Sidebar_logo__2EIdY",
        logo__img: "Sidebar_logo__img__3Yeeu",
        brand: "Sidebar_brand__2-rjF",
        product: "Sidebar_product__1_2_U"
      };
    }
  },
  [[230, 1, 2]]
]);
//# sourceMappingURL=main.73aa289b.chunk.js.map
