!(function () {
  var e =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {}
  function t(e) {
    return e && e.__esModule ? e.default : e
  }
  function n(e, t, n) {
    Object.defineProperty(e, t, { get: n, enumerable: !0 })
  }
  function r(e, t) {
    return (
      Object.keys(t).forEach(function (n) {
        'default' !== n &&
          '__esModule' !== n &&
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: function () {
              return t[n]
            },
          })
      }),
      e
    )
  }
  var o,
    i,
    a,
    l,
    u,
    s,
    c,
    f = !1
  function d(e) {
    i.length || (a(), !0), (i[i.length] = e)
  }
  function p() {
    for (; l < i.length; ) {
      var e = l
      if (((l += 1), i[e].call(), l > u)) {
        for (var t = 0, n = i.length - l; t < n; t++) i[t] = i[t + l]
        ;(i.length -= l), (l = 0)
      }
    }
    ;(i.length = 0), (l = 0), !1
  }
  function h(e) {
    return function () {
      var t = setTimeout(r, 0),
        n = setInterval(r, 50)
      function r() {
        clearTimeout(t), clearInterval(n), e()
      }
    }
  }
  function m() {
    var t, n, r
    ;(o = {}),
      (o = d),
      (i = []),
      !1,
      (l = 0),
      (u = 1024),
      (s = void 0 !== e ? e : self),
      'function' == typeof (c = s.MutationObserver || s.WebKitMutationObserver)
        ? ((t = 1),
          (n = new c(p)),
          (r = document.createTextNode('')),
          n.observe(r, { characterData: !0 }),
          (a = function () {
            ;(t = -t), (r.data = t)
          }))
        : (a = h(p)),
      (d.requestFlush = a),
      (d.makeRequestCallFromTimer = h)
  }
  var y,
    g,
    v,
    b,
    w = !1
  function k() {}
  function S(e) {
    if ('object' != typeof this)
      throw new TypeError('Promises must be constructed via new')
    if ('function' != typeof e)
      throw new TypeError("Promise constructor's argument is not a function")
    ;(this._U = 0),
      (this._V = 0),
      (this._W = null),
      (this._X = null),
      e !== k && O(e, this)
  }
  function _(e, t) {
    for (; 3 === e._V; ) e = e._W
    if ((S._Y && S._Y(e), 0 === e._V))
      return 0 === e._U
        ? ((e._U = 1), void (e._X = t))
        : 1 === e._U
        ? ((e._U = 2), void (e._X = [e._X, t]))
        : void e._X.push(t)
    !(function (e, t) {
      g(function () {
        var n = 1 === e._V ? t.onFulfilled : t.onRejected
        if (null !== n) {
          var r = (function (e, t) {
            try {
              return e(t)
            } catch (e) {
              return (v = e), b
            }
          })(n, e._W)
          r === b ? x(t.promise, v) : E(t.promise, r)
        } else 1 === e._V ? E(t.promise, e._W) : x(t.promise, e._W)
      })
    })(e, t)
  }
  function E(e, t) {
    if (t === e)
      return x(e, new TypeError('A promise cannot be resolved with itself.'))
    if (t && ('object' == typeof t || 'function' == typeof t)) {
      var n = (function (e) {
        try {
          return e.then
        } catch (e) {
          return (v = e), b
        }
      })(t)
      if (n === b) return x(e, v)
      if (n === e.then && t instanceof S)
        return (e._V = 3), (e._W = t), void C(e)
      if ('function' == typeof n) return void O(n.bind(t), e)
    }
    ;(e._V = 1), (e._W = t), C(e)
  }
  function x(e, t) {
    ;(e._V = 2), (e._W = t), S._Z && S._Z(e, t), C(e)
  }
  function C(e) {
    if ((1 === e._U && (_(e, e._X), (e._X = null)), 2 === e._U)) {
      for (var t = 0; t < e._X.length; t++) _(e, e._X[t])
      e._X = null
    }
  }
  function P(e, t, n) {
    ;(this.onFulfilled = 'function' == typeof e ? e : null),
      (this.onRejected = 'function' == typeof t ? t : null),
      (this.promise = n)
  }
  function O(e, t) {
    var n = !1,
      r = (function (e, t, n) {
        try {
          e(t, n)
        } catch (e) {
          return (v = e), b
        }
      })(
        e,
        function (e) {
          n || ((n = !0), E(t, e))
        },
        function (e) {
          n || ((n = !0), x(t, e))
        }
      )
    n || r !== b || ((n = !0), x(t, v))
  }
  function T() {
    ;(y = {}),
      f || ((f = !0), m()),
      (g = o),
      (v = null),
      (b = {}),
      (y = S),
      (S._Y = null),
      (S._Z = null),
      (S._0 = k),
      (S.prototype.then = function (e, t) {
        if (this.constructor !== S)
          return (function (e, t, n) {
            return new e.constructor(function (r, o) {
              var i = new S(k)
              i.then(r, o), _(e, new P(t, n, i))
            })
          })(this, e, t)
        var n = new S(k)
        return _(this, new P(e, t, n)), n
      })
  }
  function A() {
    return w || ((w = !0), T()), y
  }
  var I,
    R,
    N,
    j,
    z = !1
  function L(e) {
    ;(e = e || {}), N && ((N = !1), (A()._Y = null), (A()._Z = null)), (N = !0)
    var t = 0,
      n = 0,
      r = {}
    function o(t) {
      ;(e.allRejections || M(r[t].error, e.whitelist || R)) &&
        ((r[t].displayId = n++),
        e.onUnhandled
          ? ((r[t].logged = !0), e.onUnhandled(r[t].displayId, r[t].error))
          : ((r[t].logged = !0),
            (function (e, t) {
              console.warn(
                'Possible Unhandled Promise Rejection (id: ' + e + '):'
              ),
                ((t && (t.stack || t)) + '').split('\n').forEach(function (e) {
                  console.warn('  ' + e)
                })
            })(r[t].displayId, r[t].error)))
    }
    ;(A()._Y = function (t) {
      2 === t._V &&
        r[t._1] &&
        (r[t._1].logged
          ? (function (t) {
              r[t].logged &&
                (e.onHandled
                  ? e.onHandled(r[t].displayId, r[t].error)
                  : r[t].onUnhandled ||
                    (console.warn(
                      'Promise Rejection Handled (id: ' + r[t].displayId + '):'
                    ),
                    console.warn(
                      '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
                        r[t].displayId +
                        '.'
                    )))
            })(t._1)
          : clearTimeout(r[t._1].timeout),
        delete r[t._1])
    }),
      (A()._Z = function (e, n) {
        0 === e._U &&
          ((e._1 = t++),
          (r[e._1] = {
            displayId: null,
            error: n,
            timeout: setTimeout(o.bind(null, e._1), M(n, R) ? 100 : 2e3),
            logged: !1,
          }))
      })
  }
  function M(e, t) {
    return t.some(function (t) {
      return e instanceof t
    })
  }
  var D,
    F,
    U,
    B,
    V,
    $,
    W,
    H,
    q,
    Q = !1
  function G(e) {
    var t = new F(F._0)
    return (t._V = 1), (t._W = e), t
  }
  var K,
    X,
    Y,
    Z,
    J,
    ee,
    te,
    ne = !1
  function re(e) {
    if (
      ('string' != typeof e && (e = String(e)),
      /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || '' === e)
    )
      throw new TypeError('Invalid character in header field name: "' + e + '"')
    return e.toLowerCase()
  }
  function oe(e) {
    return 'string' != typeof e && (e = String(e)), e
  }
  function ie(e) {
    var t = {
      next: function () {
        var t = e.shift()
        return { done: void 0 === t, value: t }
      },
    }
    return (
      X.iterable &&
        (t[Symbol.iterator] = function () {
          return t
        }),
      t
    )
  }
  function ae(e) {
    ;(this.map = {}),
      e instanceof ae
        ? e.forEach(function (e, t) {
            this.append(t, e)
          }, this)
        : Array.isArray(e)
        ? e.forEach(function (e) {
            this.append(e[0], e[1])
          }, this)
        : e &&
          Object.getOwnPropertyNames(e).forEach(function (t) {
            this.append(t, e[t])
          }, this)
  }
  function le(e) {
    if (e.bodyUsed) return Promise.reject(new TypeError('Already read'))
    e.bodyUsed = !0
  }
  function ue(e) {
    return new Promise(function (t, n) {
      ;(e.onload = function () {
        t(e.result)
      }),
        (e.onerror = function () {
          n(e.error)
        })
    })
  }
  function se(e) {
    var t = new FileReader(),
      n = ue(t)
    return t.readAsArrayBuffer(e), n
  }
  function ce(e) {
    if (e.slice) return e.slice(0)
    var t = new Uint8Array(e.byteLength)
    return t.set(new Uint8Array(e)), t.buffer
  }
  function fe() {
    return (
      (this.bodyUsed = !1),
      (this._initBody = function (e) {
        var t
        ;(this.bodyUsed = this.bodyUsed),
          (this._bodyInit = e),
          e
            ? 'string' == typeof e
              ? (this._bodyText = e)
              : X.blob && Blob.prototype.isPrototypeOf(e)
              ? (this._bodyBlob = e)
              : X.formData && FormData.prototype.isPrototypeOf(e)
              ? (this._bodyFormData = e)
              : X.searchParams && URLSearchParams.prototype.isPrototypeOf(e)
              ? (this._bodyText = e.toString())
              : X.arrayBuffer &&
                X.blob &&
                (t = e) &&
                DataView.prototype.isPrototypeOf(t)
              ? ((this._bodyArrayBuffer = ce(e.buffer)),
                (this._bodyInit = new Blob([this._bodyArrayBuffer])))
              : X.arrayBuffer &&
                (ArrayBuffer.prototype.isPrototypeOf(e) || Z(e))
              ? (this._bodyArrayBuffer = ce(e))
              : (this._bodyText = e = Object.prototype.toString.call(e))
            : (this._bodyText = ''),
          this.headers.get('content-type') ||
            ('string' == typeof e
              ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
              : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set('content-type', this._bodyBlob.type)
              : X.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(e) &&
                this.headers.set(
                  'content-type',
                  'application/x-www-form-urlencoded;charset=UTF-8'
                ))
      }),
      X.blob &&
        ((this.blob = function () {
          var e = le(this)
          if (e) return e
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]))
          if (this._bodyFormData)
            throw new Error('could not read FormData body as blob')
          return Promise.resolve(new Blob([this._bodyText]))
        }),
        (this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            var e = le(this)
            return (
              e ||
              (ArrayBuffer.isView(this._bodyArrayBuffer)
                ? Promise.resolve(
                    this._bodyArrayBuffer.buffer.slice(
                      this._bodyArrayBuffer.byteOffset,
                      this._bodyArrayBuffer.byteOffset +
                        this._bodyArrayBuffer.byteLength
                    )
                  )
                : Promise.resolve(this._bodyArrayBuffer))
            )
          }
          return this.blob().then(se)
        })),
      (this.text = function () {
        var e,
          t,
          n,
          r = le(this)
        if (r) return r
        if (this._bodyBlob)
          return (
            (e = this._bodyBlob),
            (t = new FileReader()),
            (n = ue(t)),
            t.readAsText(e),
            n
          )
        if (this._bodyArrayBuffer)
          return Promise.resolve(
            (function (e) {
              for (
                var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                r < t.length;
                r++
              )
                n[r] = String.fromCharCode(t[r])
              return n.join('')
            })(this._bodyArrayBuffer)
          )
        if (this._bodyFormData)
          throw new Error('could not read FormData body as text')
        return Promise.resolve(this._bodyText)
      }),
      X.formData &&
        (this.formData = function () {
          return this.text().then(pe)
        }),
      (this.json = function () {
        return this.text().then(JSON.parse)
      }),
      this
    )
  }
  function de(e, t) {
    if (!(this instanceof de))
      throw new TypeError(
        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
      )
    var n,
      r,
      o = (t = t || {}).body
    if (e instanceof de) {
      if (e.bodyUsed) throw new TypeError('Already read')
      ;(this.url = e.url),
        (this.credentials = e.credentials),
        t.headers || (this.headers = new ae(e.headers)),
        (this.method = e.method),
        (this.mode = e.mode),
        (this.signal = e.signal),
        o || null == e._bodyInit || ((o = e._bodyInit), (e.bodyUsed = !0))
    } else this.url = String(e)
    if (
      ((this.credentials = t.credentials || this.credentials || 'same-origin'),
      (!t.headers && this.headers) || (this.headers = new ae(t.headers)),
      (this.method =
        ((n = t.method || this.method || 'GET'),
        (r = n.toUpperCase()),
        J.indexOf(r) > -1 ? r : n)),
      (this.mode = t.mode || this.mode || null),
      (this.signal = t.signal || this.signal),
      (this.referrer = null),
      ('GET' === this.method || 'HEAD' === this.method) && o)
    )
      throw new TypeError('Body not allowed for GET or HEAD requests')
    if (
      (this._initBody(o),
      !(
        ('GET' !== this.method && 'HEAD' !== this.method) ||
        ('no-store' !== t.cache && 'no-cache' !== t.cache)
      ))
    ) {
      var i = /([?&])_=[^&]*/
      if (i.test(this.url))
        this.url = this.url.replace(i, '$1_=' + new Date().getTime())
      else {
        this.url +=
          (/\?/.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
  function pe(e) {
    var t = new FormData()
    return (
      e
        .trim()
        .split('&')
        .forEach(function (e) {
          if (e) {
            var n = e.split('='),
              r = n.shift().replace(/\+/g, ' '),
              o = n.join('=').replace(/\+/g, ' ')
            t.append(decodeURIComponent(r), decodeURIComponent(o))
          }
        }),
      t
    )
  }
  function he(e, t) {
    if (!(this instanceof he))
      throw new TypeError(
        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
      )
    t || (t = {}),
      (this.type = 'default'),
      (this.status = void 0 === t.status ? 200 : t.status),
      (this.ok = this.status >= 200 && this.status < 300),
      (this.statusText = void 0 === t.statusText ? '' : '' + t.statusText),
      (this.headers = new ae(t.headers)),
      (this.url = t.url || ''),
      this._initBody(e)
  }
  function me(e, t) {
    return new Promise(function (n, r) {
      var o = new de(e, t)
      if (o.signal && o.signal.aborted)
        return r(new te('Aborted', 'AbortError'))
      var i = new XMLHttpRequest()
      function a() {
        i.abort()
      }
      ;(i.onload = function () {
        var e,
          t,
          r = {
            status: i.status,
            statusText: i.statusText,
            headers:
              ((e = i.getAllResponseHeaders() || ''),
              (t = new ae()),
              e
                .replace(/\r?\n[\t ]+/g, ' ')
                .split('\r')
                .map(function (e) {
                  return 0 === e.indexOf('\n') ? e.substr(1, e.length) : e
                })
                .forEach(function (e) {
                  var n = e.split(':'),
                    r = n.shift().trim()
                  if (r) {
                    var o = n.join(':').trim()
                    t.append(r, o)
                  }
                }),
              t),
          }
        r.url =
          'responseURL' in i ? i.responseURL : r.headers.get('X-Request-URL')
        var o = 'response' in i ? i.response : i.responseText
        setTimeout(function () {
          n(new he(o, r))
        }, 0)
      }),
        (i.onerror = function () {
          setTimeout(function () {
            r(new TypeError('Network request failed'))
          }, 0)
        }),
        (i.ontimeout = function () {
          setTimeout(function () {
            r(new TypeError('Network request failed'))
          }, 0)
        }),
        (i.onabort = function () {
          setTimeout(function () {
            r(new te('Aborted', 'AbortError'))
          }, 0)
        }),
        i.open(
          o.method,
          (function (e) {
            try {
              return '' === e && K.location.href ? K.location.href : e
            } catch (t) {
              return e
            }
          })(o.url),
          !0
        ),
        'include' === o.credentials
          ? (i.withCredentials = !0)
          : 'omit' === o.credentials && (i.withCredentials = !1),
        'responseType' in i &&
          (X.blob
            ? (i.responseType = 'blob')
            : X.arrayBuffer &&
              o.headers.get('Content-Type') &&
              -1 !==
                o.headers
                  .get('Content-Type')
                  .indexOf('application/octet-stream') &&
              (i.responseType = 'arraybuffer')),
        !t || 'object' != typeof t.headers || t.headers instanceof ae
          ? o.headers.forEach(function (e, t) {
              i.setRequestHeader(t, e)
            })
          : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
              i.setRequestHeader(e, oe(t.headers[e]))
            }),
        o.signal &&
          (o.signal.addEventListener('abort', a),
          (i.onreadystatechange = function () {
            4 === i.readyState && o.signal.removeEventListener('abort', a)
          })),
        i.send(void 0 === o._bodyInit ? null : o._bodyInit)
    })
  }
  'undefined' == typeof Promise &&
    ((z ||
      ((z = !0),
      (I = {}),
      A(),
      (R = [ReferenceError, TypeError, RangeError]),
      (N = !1),
      (j = L),
      (I.enable = j)),
    I).enable(),
    (self.Promise =
      (Q ||
        ((Q = !0),
        (D = {}),
        (F = A()),
        (D = F),
        (U = G(!0)),
        (B = G(!1)),
        (V = G(null)),
        ($ = G(void 0)),
        (W = G(0)),
        (H = G('')),
        (F.resolve = function (e) {
          if (e instanceof F) return e
          if (null === e) return V
          if (void 0 === e) return $
          if (!0 === e) return U
          if (!1 === e) return B
          if (0 === e) return W
          if ('' === e) return H
          if ('object' == typeof e || 'function' == typeof e)
            try {
              var t = e.then
              if ('function' == typeof t) return new F(t.bind(e))
            } catch (e) {
              return new F(function (t, n) {
                n(e)
              })
            }
          return G(e)
        }),
        (q = function (e) {
          return 'function' == typeof Array.from
            ? ((q = Array.from), Array.from(e))
            : ((q = function (e) {
                return Array.prototype.slice.call(e)
              }),
              Array.prototype.slice.call(e))
        }),
        (F.all = function (e) {
          var t = q(e)
          return new F(function (e, n) {
            if (0 === t.length) return e([])
            var r = t.length
            function o(i, a) {
              if (a && ('object' == typeof a || 'function' == typeof a)) {
                if (a instanceof F && a.then === F.prototype.then) {
                  for (; 3 === a._V; ) a = a._W
                  return 1 === a._V
                    ? o(i, a._W)
                    : (2 === a._V && n(a._W),
                      void a.then(function (e) {
                        o(i, e)
                      }, n))
                }
                var l = a.then
                if ('function' == typeof l)
                  return void new F(l.bind(a)).then(function (e) {
                    o(i, e)
                  }, n)
              }
              ;(t[i] = a), 0 == --r && e(t)
            }
            for (var i = 0; i < t.length; i++) o(i, t[i])
          })
        }),
        (F.reject = function (e) {
          return new F(function (t, n) {
            n(e)
          })
        }),
        (F.race = function (e) {
          return new F(function (t, n) {
            q(e).forEach(function (e) {
              F.resolve(e).then(t, n)
            })
          })
        }),
        (F.prototype.catch = function (e) {
          return this.then(null, e)
        })),
      D))),
    'undefined' != typeof window &&
      (ne ||
        ((ne = !0),
        (function () {
          ;({},
            (K =
              ('undefined' != typeof globalThis && globalThis) ||
              ('undefined' != typeof self && self) ||
              (void 0 !== K && K)),
            (X = {
              searchParams: 'URLSearchParams' in K,
              iterable: 'Symbol' in K && 'iterator' in Symbol,
              blob:
                'FileReader' in K &&
                'Blob' in K &&
                (function () {
                  try {
                    return new Blob(), !0
                  } catch (e) {
                    return !1
                  }
                })(),
              formData: 'FormData' in K,
              arrayBuffer: 'ArrayBuffer' in K,
            }).arrayBuffer &&
              ((Y = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]',
              ]),
              (Z =
                ArrayBuffer.isView ||
                function (e) {
                  return e && Y.indexOf(Object.prototype.toString.call(e)) > -1
                })),
            (ae.prototype.append = function (e, t) {
              ;(e = re(e)), (t = oe(t))
              var n = this.map[e]
              this.map[e] = n ? n + ', ' + t : t
            }),
            (ae.prototype.delete = function (e) {
              delete this.map[re(e)]
            }),
            (ae.prototype.get = function (e) {
              return (e = re(e)), this.has(e) ? this.map[e] : null
            }),
            (ae.prototype.has = function (e) {
              return this.map.hasOwnProperty(re(e))
            }),
            (ae.prototype.set = function (e, t) {
              this.map[re(e)] = oe(t)
            }),
            (ae.prototype.forEach = function (e, t) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }),
            (ae.prototype.keys = function () {
              var e = []
              return (
                this.forEach(function (t, n) {
                  e.push(n)
                }),
                ie(e)
              )
            }),
            (ae.prototype.values = function () {
              var e = []
              return (
                this.forEach(function (t) {
                  e.push(t)
                }),
                ie(e)
              )
            }),
            (ae.prototype.entries = function () {
              var e = []
              return (
                this.forEach(function (t, n) {
                  e.push([n, t])
                }),
                ie(e)
              )
            }),
            X.iterable &&
              (ae.prototype[Symbol.iterator] = ae.prototype.entries),
            (J = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']),
            (de.prototype.clone = function () {
              return new de(this, { body: this._bodyInit })
            }),
            fe.call(de.prototype),
            fe.call(he.prototype),
            (he.prototype.clone = function () {
              return new he(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new ae(this.headers),
                url: this.url,
              })
            }),
            (he.error = function () {
              var e = new he(null, { status: 0, statusText: '' })
              return (e.type = 'error'), e
            }),
            (ee = [301, 302, 303, 307, 308]),
            (he.redirect = function (e, t) {
              if (-1 === ee.indexOf(t))
                throw new RangeError('Invalid status code')
              return new he(null, { status: t, headers: { location: e } })
            }),
            (te = K.DOMException))
          try {
            new te()
          } catch (e) {
            ;((te = function (e, t) {
              ;(this.message = e), (this.name = t)
              var n = Error(e)
              this.stack = n.stack
            }).prototype = Object.create(Error.prototype)),
              (te.prototype.constructor = te)
          }
          ;(me.polyfill = !0),
            K.fetch ||
              ((K.fetch = me),
              (K.Headers = ae),
              (K.Request = de),
              (K.Response = he))
        })()))
  var ye,
    ge = Object.getOwnPropertySymbols,
    ve = Object.prototype.hasOwnProperty,
    be = Object.prototype.propertyIsEnumerable
  function we(e) {
    if (null == e)
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      )
    return Object(e)
  }
  ;(ye = (function () {
    try {
      if (!Object.assign) return !1
      var e = new String('abc')
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e]
          })
          .join('')
      )
        return !1
      var r = {}
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
          r[e] = e
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
      )
    } catch (e) {
      return !1
    }
  })()
    ? Object.assign
    : function (e, t) {
        for (var n, r, o = we(e), i = 1; i < arguments.length; i++) {
          for (var a in (n = Object(arguments[i])))
            ve.call(n, a) && (o[a] = n[a])
          if (ge) {
            r = ge(n)
            for (var l = 0; l < r.length; l++)
              be.call(n, r[l]) && (o[r[l]] = n[r[l]])
          }
        }
        return o
      }),
    (Object.assign = ye)
  var ke,
    Se,
    _e,
    Ee,
    xe,
    Ce,
    Pe,
    Oe,
    Te,
    Ae,
    Ie,
    Re,
    Ne,
    je,
    ze,
    Le,
    Me,
    De,
    Fe,
    Ue = function (e) {
      return e && e.Math == Math && e
    },
    Be = (Se =
      Ue('object' == typeof globalThis && globalThis) ||
      Ue('object' == typeof window && window) ||
      Ue('object' == typeof self && self) ||
      Ue('object' == typeof e && e) ||
      (function () {
        return this
      })() ||
      Function('return this')()),
    Ve = (_e = !(Ee = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    })(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          },
        })[1]
      )
    })),
    $e = {}.propertyIsEnumerable,
    We = Object.getOwnPropertyDescriptor,
    He =
      We && !$e.call({ 1: 2 }, 1)
        ? function (e) {
            var t = We(this, e)
            return !!t && t.enumerable
          }
        : $e,
    qe = (xe = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      }
    }),
    Qe = {}.toString,
    Ge = (Oe = function (e) {
      return Qe.call(e).slice(8, -1)
    }),
    Ke = ''.split,
    Xe = (Pe = Ee(function () {
      return !Object('z').propertyIsEnumerable(0)
    })
      ? function (e) {
          return 'String' == Ge(e) ? Ke.call(e, '') : Object(e)
        }
      : Object),
    Ye = (Te = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e)
      return e
    }),
    Ze = (Ce = function (e) {
      return Xe(Ye(e))
    }),
    Je = (Ie = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e
    }),
    et = (Ae = function (e, t) {
      if (!Je(e)) return e
      var n, r
      if (t && 'function' == typeof (n = e.toString) && !Je((r = n.call(e))))
        return r
      if ('function' == typeof (n = e.valueOf) && !Je((r = n.call(e)))) return r
      if (!t && 'function' == typeof (n = e.toString) && !Je((r = n.call(e))))
        return r
      throw TypeError("Can't convert object to primitive value")
    }),
    tt = {}.hasOwnProperty,
    nt = (Re = function (e, t) {
      return tt.call(e, t)
    }),
    rt = _e,
    ot = Ee,
    it = Ie,
    at = Se.document,
    lt = it(at) && it(at.createElement),
    ut = (je = function (e) {
      return lt ? at.createElement(e) : {}
    }),
    st = (Ne =
      !rt &&
      !ot(function () {
        return (
          7 !=
          Object.defineProperty(ut('div'), 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      })),
    ct = Object.getOwnPropertyDescriptor,
    ft = Ve
      ? ct
      : function (e, t) {
          if (((e = Ze(e)), (t = et(t, !0)), st))
            try {
              return ct(e, t)
            } catch (e) {}
          if (nt(e, t)) return qe(!He.call(e, t), e[t])
        },
    dt = ft,
    pt = _e,
    ht = _e,
    mt = Ne,
    yt = Ie,
    gt = (Le = function (e) {
      if (!yt(e)) throw TypeError(String(e) + ' is not an object')
      return e
    }),
    vt = Ae,
    bt = Object.defineProperty,
    wt = ht
      ? bt
      : function (e, t, n) {
          if ((gt(e), (t = vt(t, !0)), gt(n), mt))
            try {
              return bt(e, t, n)
            } catch (e) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported')
          return 'value' in n && (e[t] = n.value), e
        },
    kt = xe,
    St = (ze = pt
      ? function (e, t, n) {
          return wt(e, t, kt(1, n))
        }
      : function (e, t, n) {
          return (e[t] = n), e
        }),
    _t = Se,
    Et = ze,
    xt = Re,
    Ct = Se,
    Pt = ze,
    Ot = (De = function (e, t) {
      try {
        Pt(Ct, e, t)
      } catch (n) {
        Ct[e] = t
      }
      return t
    }),
    Tt = {},
    At = De,
    It = '__core-js_shared__'
  Tt = Se['__core-js_shared__'] || At(It, {})
  var Rt = Function.toString
  'function' != typeof Tt.inspectSource &&
    (Tt.inspectSource = function (e) {
      return Rt.call(e)
    })
  var Nt,
    jt,
    zt,
    Lt = (Fe = Tt.inspectSource),
    Mt = Fe,
    Dt = Se.WeakMap,
    Ft = 'function' == typeof Dt && /native code/.test(Mt(Dt)),
    Ut = Ie,
    Bt = ze,
    Vt = Re,
    $t = Tt
  ;(zt = function (e, t) {
    return $t[e] || ($t[e] = void 0 !== t ? t : {})
  })('versions', []).push({
    version: '3.10.0',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
  })
  var Wt,
    Ht,
    qt,
    Qt,
    Gt,
    Kt = zt,
    Xt = 0,
    Yt = Math.random(),
    Zt = (Wt = function (e) {
      return (
        'Symbol(' +
        String(void 0 === e ? '' : e) +
        ')_' +
        (++Xt + Yt).toString(36)
      )
    }),
    Jt = Kt('keys'),
    en = (jt = function (e) {
      return Jt[e] || (Jt[e] = Zt(e))
    }),
    tn = (Ht = {}),
    nn = Se.WeakMap
  if (Ft) {
    var rn = Tt.state || (Tt.state = new nn()),
      on = rn.get,
      an = rn.has,
      ln = rn.set
    ;(qt = function (e, t) {
      return (t.facade = e), ln.call(rn, e, t), t
    }),
      (Qt = function (e) {
        return on.call(rn, e) || {}
      }),
      (Gt = function (e) {
        return an.call(rn, e)
      })
  } else {
    var un = en('state')
    ;(tn[un] = !0),
      (qt = function (e, t) {
        return (t.facade = e), Bt(e, un, t), t
      }),
      (Qt = function (e) {
        return Vt(e, un) ? e[un] : {}
      }),
      (Gt = function (e) {
        return Vt(e, un)
      })
  }
  var sn = (Nt = {
      set: qt,
      get: Qt,
      has: Gt,
      enforce: function (e) {
        return Gt(e) ? Qt(e) : qt(e, {})
      },
      getterFor: function (e) {
        return function (t) {
          var n
          if (!Ut(t) || (n = Qt(t)).type !== e)
            throw TypeError('Incompatible receiver, ' + e + ' required')
          return n
        }
      },
    }).get,
    cn = Nt.enforce,
    fn = String(String).split('String')
  ;(Me = function (e, t, n, r) {
    var o,
      i = !!r && !!r.unsafe,
      a = !!r && !!r.enumerable,
      l = !!r && !!r.noTargetGet
    'function' == typeof n &&
      ('string' != typeof t || xt(n, 'name') || Et(n, 'name', t),
      (o = cn(n)).source ||
        (o.source = fn.join('string' == typeof t ? t : ''))),
      e !== _t
        ? (i ? !l && e[t] && (a = !0) : delete e[t],
          a ? (e[t] = n) : Et(e, t, n))
        : a
        ? (e[t] = n)
        : Ot(t, n)
  })(Function.prototype, 'toString', function () {
    return ('function' == typeof this && sn(this).source) || Lt(this)
  })
  var dn,
    pn,
    hn,
    mn,
    yn,
    gn,
    vn,
    bn,
    wn,
    kn,
    Sn,
    _n,
    En,
    xn,
    Cn = Me,
    Pn = De,
    On = Re,
    Tn = {},
    An = (Tn = Se),
    In = Se,
    Rn = function (e) {
      return 'function' == typeof e ? e : void 0
    },
    Nn = (pn = function (e, t) {
      return arguments.length < 2
        ? Rn(An[e]) || Rn(In[e])
        : (An[e] && An[e][t]) || (In[e] && In[e][t])
    }),
    jn = Re,
    zn = Ce,
    Ln = Ce,
    Mn = Math.ceil,
    Dn = Math.floor,
    Fn = (yn = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? Dn : Mn)(e)
    }),
    Un = Math.min,
    Bn = (mn = function (e) {
      return e > 0 ? Un(Fn(e), 9007199254740991) : 0
    }),
    Vn = yn,
    $n = Math.max,
    Wn = Math.min,
    Hn = function (e, t) {
      var n = Vn(e)
      return n < 0 ? $n(n + t, 0) : Wn(n, t)
    },
    qn = function (e) {
      return function (t, n, r) {
        var o,
          i = Ln(t),
          a = Bn(i.length),
          l = Hn(r, a)
        if (e && n != n) {
          for (; a > l; ) if ((o = i[l++]) != o) return !0
        } else
          for (; a > l; l++) if ((e || l in i) && i[l] === n) return e || l || 0
        return !e && -1
      }
    },
    Qn = { includes: qn(!0), indexOf: qn(!1) }.indexOf,
    Gn = Ht,
    Kn = (hn = function (e, t) {
      var n,
        r = zn(e),
        o = 0,
        i = []
      for (n in r) !jn(Gn, n) && jn(r, n) && i.push(n)
      for (; t.length > o; ) jn(r, (n = t[o++])) && (~Qn(i, n) || i.push(n))
      return i
    }),
    Xn = {},
    Yn = (Xn = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ]).concat('length', 'prototype'),
    Zn =
      Object.getOwnPropertyNames ||
      function (e) {
        return Kn(e, Yn)
      },
    Jn = Object.getOwnPropertySymbols,
    er = Le,
    tr =
      Nn('Reflect', 'ownKeys') ||
      function (e) {
        var t = Zn(er(e)),
          n = Jn
        return n ? t.concat(n(e)) : t
      },
    nr = (dn = function (e, t) {
      for (var n = tr(t), r = wt, o = ft, i = 0; i < n.length; i++) {
        var a = n[i]
        On(e, a) || r(e, a, o(t, a))
      }
    }),
    rr = Ee,
    or = /#|\.prototype\./,
    ir = function (e, t) {
      var n = lr[ar(e)]
      return n == sr || (n != ur && ('function' == typeof t ? rr(t) : !!t))
    },
    ar = (ir.normalize = function (e) {
      return String(e).replace(or, '.').toLowerCase()
    }),
    lr = (ir.data = {}),
    ur = (ir.NATIVE = 'N'),
    sr = (ir.POLYFILL = 'P'),
    cr = ir,
    fr = (ke = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        l = e.target,
        u = e.global,
        s = e.stat
      if ((n = u ? Be : s ? Be[l] || Pn(l, {}) : (Be[l] || {}).prototype))
        for (r in t) {
          if (
            ((i = t[r]),
            (o = e.noTargetGet ? (a = dt(n, r)) && a.value : n[r]),
            !cr(u ? r : l + (s ? '.' : '#') + r, e.forced) && void 0 !== o)
          ) {
            if (typeof i == typeof o) continue
            nr(i, o)
          }
          ;(e.sham || (o && o.sham)) && St(i, 'sham', !0), Cn(n, r, i, e)
        }
    }),
    dr = Ee,
    pr = Oe,
    hr = (gn =
      Array.isArray ||
      function (e) {
        return 'Array' == pr(e)
      }),
    mr = Ie,
    yr = Te,
    gr = (vn = function (e) {
      return Object(yr(e))
    }),
    vr = mn,
    br = Ae,
    wr = xe,
    kr = (bn = function (e, t, n) {
      var r = br(t)
      r in e ? wt(e, r, wr(0, n)) : (e[r] = n)
    }),
    Sr = Ie,
    _r = gn,
    Er = zt,
    xr = Re,
    Cr = Wt,
    Pr = 'process' == Oe(Se.process),
    Or = pn('navigator', 'userAgent') || '',
    Tr = Se.process,
    Ar = Tr && Tr.versions,
    Ir = Ar && Ar.v8
  Ir
    ? (xn = (En = Ir.split('.'))[0] + En[1])
    : Or &&
      (!(En = Or.match(/Edge\/(\d+)/)) || En[1] >= 74) &&
      (En = Or.match(/Chrome\/(\d+)/)) &&
      (xn = En[1])
  var Rr,
    Nr = (_n = xn && +xn),
    jr = Ee,
    zr = (Sn =
      !!Object.getOwnPropertySymbols &&
      !jr(function () {
        return !Symbol.sham && (Pr ? 38 === Nr : Nr > 37 && Nr < 41)
      })),
    Lr = (Rr = Sn && !Symbol.sham && 'symbol' == typeof Symbol.iterator),
    Mr = Er('wks'),
    Dr = Se.Symbol,
    Fr = Lr ? Dr : (Dr && Dr.withoutSetter) || Cr,
    Ur = (kn = function (e) {
      return (
        (xr(Mr, e) && (zr || 'string' == typeof Mr[e])) ||
          (zr && xr(Dr, e) ? (Mr[e] = Dr[e]) : (Mr[e] = Fr('Symbol.' + e))),
        Mr[e]
      )
    })('species'),
    Br = (wn = function (e, t) {
      var n
      return (
        _r(e) &&
          ('function' != typeof (n = e.constructor) ||
          (n !== Array && !_r(n.prototype))
            ? Sr(n) && null === (n = n[Ur]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      )
    }),
    Vr = Ee,
    $r = _n,
    Wr = kn('species'),
    Hr = function (e) {
      return (
        $r >= 51 ||
        !Vr(function () {
          var t = []
          return (
            ((t.constructor = {})[Wr] = function () {
              return { foo: 1 }
            }),
            1 !== t[e](Boolean).foo
          )
        })
      )
    },
    qr = _n,
    Qr = kn('isConcatSpreadable'),
    Gr = 9007199254740991,
    Kr = 'Maximum allowed index exceeded',
    Xr =
      qr >= 51 ||
      !dr(function () {
        var e = []
        return (e[Qr] = !1), e.concat()[0] !== e
      }),
    Yr = Hr('concat'),
    Zr = function (e) {
      if (!mr(e)) return !1
      var t = e[Qr]
      return void 0 !== t ? !!t : hr(e)
    }
  fr(
    { target: 'Array', proto: !0, forced: !Xr || !Yr },
    {
      concat: function (e) {
        var t,
          n,
          r,
          o,
          i,
          a = gr(this),
          l = Br(a, 0),
          u = 0
        for (t = -1, r = arguments.length; t < r; t++)
          if (Zr((i = -1 === t ? a : arguments[t]))) {
            if (u + (o = vr(i.length)) > Gr) throw TypeError(Kr)
            for (n = 0; n < o; n++, u++) n in i && kr(l, u, i[n])
          } else {
            if (u >= Gr) throw TypeError(Kr)
            kr(l, u++, i)
          }
        return (l.length = u), l
      },
    }
  )
  var Jr,
    eo = {}
  eo[kn('toStringTag')] = 'z'
  var to,
    no = (Jr = '[object z]' === String(eo)),
    ro = Me,
    oo = Jr,
    io = Jr,
    ao = Oe,
    lo = kn('toStringTag'),
    uo =
      'Arguments' ==
      ao(
        (function () {
          return arguments
        })()
      ),
    so = (to = io
      ? ao
      : function (e) {
          var t, n, r
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (n = (function (e, t) {
                try {
                  return e[t]
                } catch (e) {}
              })((t = Object(e)), lo))
            ? n
            : uo
            ? ao(t)
            : 'Object' == (r = ao(t)) && 'function' == typeof t.callee
            ? 'Arguments'
            : r
        }),
    co = oo
      ? {}.toString
      : function () {
          return '[object ' + so(this) + ']'
        }
  no || ro(Object.prototype, 'toString', co, { unsafe: !0 })
  var fo,
    po,
    ho = ke,
    mo = pn,
    yo = _e,
    go = Sn,
    vo = Rr,
    bo = Ee,
    wo = Re,
    ko = gn,
    So = Ie,
    _o = Le,
    Eo = vn,
    xo = Ce,
    Co = Ae,
    Po = xe,
    Oo = Le,
    To = _e,
    Ao = Le,
    Io = hn,
    Ro = Xn,
    No = (po =
      Object.keys ||
      function (e) {
        return Io(e, Ro)
      }),
    jo = To
      ? Object.defineProperties
      : function (e, t) {
          Ao(e)
          for (var n, r = No(t), o = r.length, i = 0; o > i; )
            wt(e, (n = r[i++]), t[n])
          return e
        },
    zo = Xn,
    Lo = Ht,
    Mo = {}
  Mo = pn('document', 'documentElement')
  var Do,
    Fo = je,
    Uo = jt('IE_PROTO'),
    Bo = function () {},
    Vo = function (e) {
      return '<script>' + e + '</' + 'script>'
    },
    $o = function () {
      try {
        Do = document.domain && new ActiveXObject('htmlfile')
      } catch (e) {}
      var e, t
      $o = Do
        ? (function (e) {
            e.write(Vo('')), e.close()
            var t = e.parentWindow.Object
            return (e = null), t
          })(Do)
        : (((t = Fo('iframe')).style.display = 'none'),
          Mo.appendChild(t),
          (t.src = String('javascript:')),
          (e = t.contentWindow.document).open(),
          e.write(Vo('document.F=Object')),
          e.close(),
          e.F)
      for (var n = zo.length; n--; ) delete $o.prototype[zo[n]]
      return $o()
    }
  Lo[Uo] = !0
  var Wo,
    Ho,
    qo,
    Qo = (fo =
      Object.create ||
      function (e, t) {
        var n
        return (
          null !== e
            ? ((Bo.prototype = Oo(e)),
              (n = new Bo()),
              (Bo.prototype = null),
              (n[Uo] = e))
            : (n = $o()),
          void 0 === t ? n : jo(n, t)
        )
      }),
    Go = po,
    Ko = Ce,
    Xo = Zn,
    Yo = {}.toString,
    Zo =
      'object' == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    Jo = function (e) {
      return Zo && '[object Window]' == Yo.call(e)
        ? (function (e) {
            try {
              return Xo(e)
            } catch (e) {
              return Zo.slice()
            }
          })(e)
        : Xo(Ko(e))
    },
    ei = ze,
    ti = Me,
    ni = zt,
    ri = jt,
    oi = Ht,
    ii = Wt,
    ai = kn,
    li = kn,
    ui = Re,
    si = wt,
    ci = (Wo = function (e) {
      var t = Tn.Symbol || (Tn.Symbol = {})
      ui(t, e) || si(t, e, { value: li(e) })
    }),
    fi = wt,
    di = Re,
    pi = kn('toStringTag'),
    hi = (Ho = function (e, t, n) {
      e &&
        !di((e = n ? e : e.prototype), pi) &&
        fi(e, pi, { configurable: !0, value: t })
    }),
    mi = function (e) {
      if ('function' != typeof e)
        throw TypeError(String(e) + ' is not a function')
      return e
    },
    yi = (qo = function (e, t, n) {
      if ((mi(e), void 0 === t)) return e
      switch (n) {
        case 0:
          return function () {
            return e.call(t)
          }
        case 1:
          return function (n) {
            return e.call(t, n)
          }
        case 2:
          return function (n, r) {
            return e.call(t, n, r)
          }
        case 3:
          return function (n, r, o) {
            return e.call(t, n, r, o)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    }),
    gi = Pe,
    vi = vn,
    bi = mn,
    wi = wn,
    ki = [].push,
    Si = function (e) {
      var t = 1 == e,
        n = 2 == e,
        r = 3 == e,
        o = 4 == e,
        i = 6 == e,
        a = 7 == e,
        l = 5 == e || i
      return function (u, s, c, f) {
        for (
          var d,
            p,
            h = vi(u),
            m = gi(h),
            y = yi(s, c, 3),
            g = bi(m.length),
            v = 0,
            b = f || wi,
            w = t ? b(u, g) : n || a ? b(u, 0) : void 0;
          g > v;
          v++
        )
          if ((l || v in m) && ((p = y((d = m[v]), v, h)), e))
            if (t) w[v] = p
            else if (p)
              switch (e) {
                case 3:
                  return !0
                case 5:
                  return d
                case 6:
                  return v
                case 2:
                  ki.call(w, d)
              }
            else
              switch (e) {
                case 4:
                  return !1
                case 7:
                  ki.call(w, d)
              }
        return i ? -1 : r || o ? o : w
      }
    },
    _i = {
      forEach: Si(0),
      map: Si(1),
      filter: Si(2),
      some: Si(3),
      every: Si(4),
      find: Si(5),
      findIndex: Si(6),
      filterOut: Si(7),
    }.forEach,
    Ei = ri('hidden'),
    xi = 'Symbol',
    Ci = ai('toPrimitive'),
    Pi = Nt.set,
    Oi = Nt.getterFor(xi),
    Ti = Object.prototype,
    Ai = Se.Symbol,
    Ii = mo('JSON', 'stringify'),
    Ri = ft,
    Ni = wt,
    ji = Jo,
    zi = He,
    Li = ni('symbols'),
    Mi = ni('op-symbols'),
    Di = ni('string-to-symbol-registry'),
    Fi = ni('symbol-to-string-registry'),
    Ui = ni('wks'),
    Bi = Se.QObject,
    Vi = !Bi || !Bi.prototype || !Bi.prototype.findChild,
    $i =
      yo &&
      bo(function () {
        return (
          7 !=
          Qo(
            Ni({}, 'a', {
              get: function () {
                return Ni(this, 'a', { value: 7 }).a
              },
            })
          ).a
        )
      })
        ? function (e, t, n) {
            var r = Ri(Ti, t)
            r && delete Ti[t], Ni(e, t, n), r && e !== Ti && Ni(Ti, t, r)
          }
        : Ni,
    Wi = function (e, t) {
      var n = (Li[e] = Qo(Ai.prototype))
      return (
        Pi(n, { type: xi, tag: e, description: t }),
        yo || (n.description = t),
        n
      )
    },
    Hi = vo
      ? function (e) {
          return 'symbol' == typeof e
        }
      : function (e) {
          return Object(e) instanceof Ai
        },
    qi = function (e, t, n) {
      e === Ti && qi(Mi, t, n), _o(e)
      var r = Co(t, !0)
      return (
        _o(n),
        wo(Li, r)
          ? (n.enumerable
              ? (wo(e, Ei) && e[Ei][r] && (e[Ei][r] = !1),
                (n = Qo(n, { enumerable: Po(0, !1) })))
              : (wo(e, Ei) || Ni(e, Ei, Po(1, {})), (e[Ei][r] = !0)),
            $i(e, r, n))
          : Ni(e, r, n)
      )
    },
    Qi = function (e, t) {
      _o(e)
      var n = xo(t),
        r = Go(n).concat(Yi(n))
      return (
        _i(r, function (t) {
          ;(yo && !Gi.call(n, t)) || qi(e, t, n[t])
        }),
        e
      )
    },
    Gi = function (e) {
      var t = Co(e, !0),
        n = zi.call(this, t)
      return (
        !(this === Ti && wo(Li, t) && !wo(Mi, t)) &&
        (!(n || !wo(this, t) || !wo(Li, t) || (wo(this, Ei) && this[Ei][t])) ||
          n)
      )
    },
    Ki = function (e, t) {
      var n = xo(e),
        r = Co(t, !0)
      if (n !== Ti || !wo(Li, r) || wo(Mi, r)) {
        var o = Ri(n, r)
        return (
          !o || !wo(Li, r) || (wo(n, Ei) && n[Ei][r]) || (o.enumerable = !0), o
        )
      }
    },
    Xi = function (e) {
      var t = ji(xo(e)),
        n = []
      return (
        _i(t, function (e) {
          wo(Li, e) || wo(oi, e) || n.push(e)
        }),
        n
      )
    },
    Yi = function (e) {
      var t = e === Ti,
        n = ji(t ? Mi : xo(e)),
        r = []
      return (
        _i(n, function (e) {
          !wo(Li, e) || (t && !wo(Ti, e)) || r.push(Li[e])
        }),
        r
      )
    }
  ;(go ||
    (ti(
      (Ai = function () {
        if (this instanceof Ai) throw TypeError('Symbol is not a constructor')
        var e =
            arguments.length && void 0 !== arguments[0]
              ? String(arguments[0])
              : void 0,
          t = ii(e),
          n = function (e) {
            this === Ti && n.call(Mi, e),
              wo(this, Ei) && wo(this[Ei], t) && (this[Ei][t] = !1),
              $i(this, t, Po(1, e))
          }
        return yo && Vi && $i(Ti, t, { configurable: !0, set: n }), Wi(t, e)
      }).prototype,
      'toString',
      function () {
        return Oi(this).tag
      }
    ),
    ti(Ai, 'withoutSetter', function (e) {
      return Wi(ii(e), e)
    }),
    (He = Gi),
    (wt = qi),
    (ft = Ki),
    (Zn = Jo = Xi),
    (Jn = Yi),
    (li = function (e) {
      return Wi(ai(e), e)
    }),
    yo &&
      (Ni(Ai.prototype, 'description', {
        configurable: !0,
        get: function () {
          return Oi(this).description
        },
      }),
      ti(Ti, 'propertyIsEnumerable', Gi, { unsafe: !0 }))),
  ho({ global: !0, wrap: !0, forced: !go, sham: !go }, { Symbol: Ai }),
  _i(Go(Ui), function (e) {
    ci(e)
  }),
  ho(
    { target: xi, stat: !0, forced: !go },
    {
      for: function (e) {
        var t = String(e)
        if (wo(Di, t)) return Di[t]
        var n = Ai(t)
        return (Di[t] = n), (Fi[n] = t), n
      },
      keyFor: function (e) {
        if (!Hi(e)) throw TypeError(e + ' is not a symbol')
        if (wo(Fi, e)) return Fi[e]
      },
      useSetter: function () {
        Vi = !0
      },
      useSimple: function () {
        Vi = !1
      },
    }
  ),
  ho(
    { target: 'Object', stat: !0, forced: !go, sham: !yo },
    {
      create: function (e, t) {
        return void 0 === t ? Qo(e) : Qi(Qo(e), t)
      },
      defineProperty: qi,
      defineProperties: Qi,
      getOwnPropertyDescriptor: Ki,
    }
  ),
  ho(
    { target: 'Object', stat: !0, forced: !go },
    { getOwnPropertyNames: Xi, getOwnPropertySymbols: Yi }
  ),
  ho(
    {
      target: 'Object',
      stat: !0,
      forced: bo(function () {
        Jn(1)
      }),
    },
    {
      getOwnPropertySymbols: function (e) {
        return Jn(Eo(e))
      },
    }
  ),
  Ii) &&
    ho(
      {
        target: 'JSON',
        stat: !0,
        forced:
          !go ||
          bo(function () {
            var e = Ai()
            return (
              '[null]' != Ii([e]) ||
              '{}' != Ii({ a: e }) ||
              '{}' != Ii(Object(e))
            )
          }),
      },
      {
        stringify: function (e, t, n) {
          for (var r, o = [e], i = 1; arguments.length > i; )
            o.push(arguments[i++])
          if (((r = t), (So(t) || void 0 !== e) && !Hi(e)))
            return (
              ko(t) ||
                (t = function (e, t) {
                  if (
                    ('function' == typeof r && (t = r.call(this, e, t)), !Hi(t))
                  )
                    return t
                }),
              (o[1] = t),
              Ii.apply(null, o)
            )
        },
      }
    )
  Ai.prototype[Ci] || ei(Ai.prototype, Ci, Ai.prototype.valueOf),
    hi(Ai, xi),
    (oi[Ei] = !0),
    Wo('asyncIterator')
  var Zi = ke,
    Ji = _e,
    ea = Re,
    ta = Ie,
    na = wt,
    ra = dn,
    oa = Se.Symbol
  if (
    Ji &&
    'function' == typeof oa &&
    (!('description' in oa.prototype) || void 0 !== oa().description)
  ) {
    var ia = {},
      aa = function () {
        var e =
            arguments.length < 1 || void 0 === arguments[0]
              ? void 0
              : String(arguments[0]),
          t = this instanceof aa ? new oa(e) : void 0 === e ? oa() : oa(e)
        return '' === e && (ia[t] = !0), t
      }
    ra(aa, oa)
    var la = (aa.prototype = oa.prototype)
    la.constructor = aa
    var ua = la.toString,
      sa = 'Symbol(test)' == String(oa('test')),
      ca = /^Symbol\((.*)\)[^)]+$/
    na(la, 'description', {
      configurable: !0,
      get: function () {
        var e = ta(this) ? this.valueOf() : this,
          t = ua.call(e)
        if (ea(ia, e)) return ''
        var n = sa ? t.slice(7, -1) : t.replace(ca, '$1')
        return '' === n ? void 0 : n
      },
    }),
      Zi({ global: !0, forced: !0 }, { Symbol: aa })
  }
  Wo('hasInstance'),
    Wo('isConcatSpreadable'),
    Wo('iterator'),
    Wo('match'),
    Wo('matchAll'),
    Wo('replace'),
    Wo('search'),
    Wo('species'),
    Wo('split'),
    Wo('toPrimitive'),
    Wo('toStringTag'),
    Wo('unscopables'),
    Ho(Se.JSON, 'JSON', !0),
    Ho(Math, 'Math', !0)
  var fa = Ho
  ke({ global: !0 }, { Reflect: {} }), fa(Se.Reflect, 'Reflect', !0)
  var da = Tn.Symbol
  Wo('asyncDispose'),
    Wo('dispose'),
    Wo('observable'),
    Wo('patternMatch'),
    Wo('replaceAll'),
    ($54b51eba353c312bf9bc326d4f42ac13$exports = da)
  var pa,
    ha,
    ma,
    ya,
    ga,
    va,
    ba = yn,
    wa = Te,
    ka = function (e) {
      return function (t, n) {
        var r,
          o,
          i = String(wa(t)),
          a = ba(n),
          l = i.length
        return a < 0 || a >= l
          ? e
            ? ''
            : void 0
          : (r = i.charCodeAt(a)) < 55296 ||
            r > 56319 ||
            a + 1 === l ||
            (o = i.charCodeAt(a + 1)) < 56320 ||
            o > 57343
          ? e
            ? i.charAt(a)
            : r
          : e
          ? i.slice(a, a + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536
      }
    },
    Sa = { codeAt: ka(!1), charAt: ka(!0) }.charAt,
    _a = ke,
    Ea = Ee,
    xa = Re,
    Ca = vn,
    Pa = jt,
    Oa = !Ee(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      )
    }),
    Ta = Pa('IE_PROTO'),
    Aa = Object.prototype,
    Ia = (ma = Oa
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = Ca(e)),
            xa(e, Ta)
              ? e[Ta]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? Aa
              : null
          )
        }),
    Ra = ze,
    Na = Re,
    ja = kn('iterator'),
    za = !1
  ;[].keys &&
    ('next' in (va = [].keys())
      ? (ga = Ia(Ia(va))) !== Object.prototype && (ya = ga)
      : (za = !0))
  var La =
    null == ya ||
    Ea(function () {
      var e = {}
      return ya[ja].call(e) !== e
    })
  La && (ya = {}),
    Na(ya, ja) ||
      Ra(ya, ja, function () {
        return this
      })
  var Ma,
    Da = (ha = { IteratorPrototype: ya, BUGGY_SAFARI_ITERATORS: za })
      .IteratorPrototype,
    Fa = fo,
    Ua = xe,
    Ba = Ho,
    Va = (Ma = {}),
    $a = function () {
      return this
    },
    Wa = function (e, t, n) {
      var r = t + ' Iterator'
      return (
        (e.prototype = Fa(Da, { next: Ua(1, n) })),
        Ba(e, r, !1, !0),
        (Va[r] = $a),
        e
      )
    },
    Ha = ma,
    qa = Le,
    Qa = Ie,
    Ga = function (e) {
      if (!Qa(e) && null !== e)
        throw TypeError("Can't set " + String(e) + ' as a prototype')
      return e
    },
    Ka =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var e,
              t = !1,
              n = {}
            try {
              ;(e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(n, []),
                (t = n instanceof Array)
            } catch (e) {}
            return function (n, r) {
              return qa(n), Ga(r), t ? e.call(n, r) : (n.__proto__ = r), n
            }
          })()
        : void 0),
    Xa = Ho,
    Ya = ze,
    Za = Me,
    Ja = Ma,
    el = ha.IteratorPrototype,
    tl = ha.BUGGY_SAFARI_ITERATORS,
    nl = kn('iterator'),
    rl = 'keys',
    ol = 'values',
    il = 'entries',
    al = function () {
      return this
    },
    ll = function (e, t, n, r, o, i, a) {
      Wa(n, t, r)
      var l,
        u,
        s,
        c = function (e) {
          if (e === o && m) return m
          if (!tl && e in p) return p[e]
          switch (e) {
            case rl:
            case ol:
            case il:
              return function () {
                return new n(this, e)
              }
          }
          return function () {
            return new n(this)
          }
        },
        f = t + ' Iterator',
        d = !1,
        p = e.prototype,
        h = p[nl] || p['@@iterator'] || (o && p[o]),
        m = (!tl && h) || c(o),
        y = ('Array' == t && p.entries) || h
      if (
        (y &&
          ((l = Ha(y.call(new e()))),
          el !== Object.prototype &&
            l.next &&
            (Ha(l) !== el &&
              (Ka ? Ka(l, el) : 'function' != typeof l[nl] && Ya(l, nl, al)),
            Xa(l, f, !0, !0))),
        o == ol &&
          h &&
          h.name !== ol &&
          ((d = !0),
          (m = function () {
            return h.call(this)
          })),
        p[nl] !== m && Ya(p, nl, m),
        (Ja[t] = m),
        o)
      )
        if (((u = { values: c(ol), keys: i ? m : c(rl), entries: c(il) }), a))
          for (s in u) (tl || d || !(s in p)) && Za(p, s, u[s])
        else _a({ target: t, proto: !0, forced: tl || d }, u)
      return u
    },
    ul = 'String Iterator',
    sl = Nt.set,
    cl = Nt.getterFor(ul)
  ll(
    String,
    'String',
    function (e) {
      sl(this, { type: ul, string: String(e), index: 0 })
    },
    function () {
      var e,
        t = cl(this),
        n = t.string,
        r = t.index
      return r >= n.length
        ? { value: void 0, done: !0 }
        : ((e = Sa(n, r)), (t.index += e.length), { value: e, done: !1 })
    }
  )
  var fl = ke,
    dl = qo,
    pl = vn,
    hl = Le,
    ml = Le,
    yl = function (e) {
      var t = e.return
      if (void 0 !== t) return ml(t.call(e)).value
    },
    gl = function (e, t, n, r) {
      try {
        return r ? t(hl(n)[0], n[1]) : t(n)
      } catch (t) {
        throw (yl(e), t)
      }
    },
    vl = kn('iterator'),
    bl = Array.prototype,
    wl = function (e) {
      return void 0 !== e && (Ma.Array === e || bl[vl] === e)
    },
    kl = mn,
    Sl = bn,
    _l = to,
    El = Ma,
    xl = kn('iterator'),
    Cl = function (e) {
      if (null != e) return e[xl] || e['@@iterator'] || El[_l(e)]
    },
    Pl = function (e) {
      var t,
        n,
        r,
        o,
        i,
        a,
        l = pl(e),
        u = 'function' == typeof this ? this : Array,
        s = arguments.length,
        c = s > 1 ? arguments[1] : void 0,
        f = void 0 !== c,
        d = Cl(l),
        p = 0
      if (
        (f && (c = dl(c, s > 2 ? arguments[2] : void 0, 2)),
        null == d || (u == Array && wl(d)))
      )
        for (n = new u((t = kl(l.length))); t > p; p++)
          (a = f ? c(l[p], p) : l[p]), Sl(n, p, a)
      else
        for (i = (o = d.call(l)).next, n = new u(); !(r = i.call(o)).done; p++)
          (a = f ? gl(o, c, [r.value, p], !0) : r.value), Sl(n, p, a)
      return (n.length = p), n
    },
    Ol = kn('iterator'),
    Tl = !1
  try {
    var Al = 0,
      Il = {
        next: function () {
          return { done: !!Al++ }
        },
        return: function () {
          Tl = !0
        },
      }
    ;(Il[Ol] = function () {
      return this
    }),
      Array.from(Il, function () {
        throw 2
      })
  } catch (e) {}
  fl(
    {
      target: 'Array',
      stat: !0,
      forced: !(function (e, t) {
        if (!t && !Tl) return !1
        var n = !1
        try {
          var r = {}
          ;(r[Ol] = function () {
            return {
              next: function () {
                return { done: (n = !0) }
              },
            }
          }),
            e(r)
        } catch (e) {}
        return n
      })(function (e) {
        Array.from(e)
      }),
    },
    { from: Pl }
  ),
    (pa = Tn.Array.from),
    ($f58563c6739cdc815f09f3abfb47e293$exports = pa)
  var Rl,
    Nl,
    jl,
    zl,
    Ll = !1
  function Ml(e) {
    if (null == e)
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      )
    return Object(e)
  }
  function Dl() {
    ;(Rl = {}),
      (Nl = Object.getOwnPropertySymbols),
      (jl = Object.prototype.hasOwnProperty),
      (zl = Object.prototype.propertyIsEnumerable),
      (Rl = (function () {
        try {
          if (!Object.assign) return !1
          var e = new String('abc')
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1
          for (var t = {}, n = 0; n < 10; n++)
            t['_' + String.fromCharCode(n)] = n
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e]
              })
              .join('')
          )
            return !1
          var r = {}
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              r[e] = e
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, r)).join('')
          )
        } catch (e) {
          return !1
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, r, o = Ml(e), i = 1; i < arguments.length; i++) {
              for (var a in (n = Object(arguments[i])))
                jl.call(n, a) && (o[a] = n[a])
              if (Nl) {
                r = Nl(n)
                for (var l = 0; l < r.length; l++)
                  zl.call(n, r[l]) && (o[r[l]] = n[r[l]])
              }
            }
            return o
          })
  }
  function Fl() {
    return Ll || ((Ll = !0), Dl()), Rl
  }
  var Ul,
    Bl,
    Vl,
    $l,
    Wl,
    Hl,
    ql,
    Ql,
    Gl,
    Kl,
    Xl,
    Yl,
    Zl,
    Jl,
    eu,
    tu,
    nu,
    ru,
    ou,
    iu,
    au,
    lu,
    uu,
    su,
    cu,
    fu,
    du,
    pu,
    hu,
    mu,
    yu,
    gu,
    vu,
    bu,
    wu,
    ku,
    Su,
    _u,
    Eu,
    xu,
    Cu,
    Pu,
    Ou,
    Tu,
    Au,
    Iu,
    Ru,
    Nu = !1
  function ju(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n])
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function zu(e, t, n) {
    ;(this.props = e),
      (this.context = t),
      (this.refs = nu),
      (this.updater = n || tu)
  }
  function Lu() {}
  function Mu(e, t, n) {
    ;(this.props = e),
      (this.context = t),
      (this.refs = nu),
      (this.updater = n || tu)
  }
  function Du(e, t, n) {
    var r,
      o = {},
      i = null,
      a = null
    if (null != t)
      for (r in (void 0 !== t.ref && (a = t.ref),
      void 0 !== t.key && (i = '' + t.key),
      t))
        iu.call(t, r) && !au.hasOwnProperty(r) && (o[r] = t[r])
    var l = arguments.length - 2
    if (1 === l) o.children = n
    else if (1 < l) {
      for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2]
      o.children = u
    }
    if (e && e.defaultProps)
      for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r])
    return {
      $$typeof: Vl,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: ou.current,
    }
  }
  function Fu(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === Vl
  }
  function Uu(e, t) {
    return 'object' == typeof e && null !== e && null != e.key
      ? (function (e) {
          var t = { '=': '=0', ':': '=2' }
          return (
            '$' +
            e.replace(/[=:]/g, function (e) {
              return t[e]
            })
          )
        })('' + e.key)
      : t.toString(36)
  }
  function Bu(e, t, n, r, o) {
    var i = typeof e
    ;('undefined' !== i && 'boolean' !== i) || (e = null)
    var a = !1
    if (null === e) a = !0
    else
      switch (i) {
        case 'string':
        case 'number':
          a = !0
          break
        case 'object':
          switch (e.$$typeof) {
            case Vl:
            case $l:
              a = !0
          }
      }
    if (a)
      return (
        (o = o((a = e))),
        (e = '' === r ? '.' + Uu(a, 0) : r),
        Array.isArray(o)
          ? ((n = ''),
            null != e && (n = e.replace(lu, '$&/') + '/'),
            Bu(o, t, n, '', function (e) {
              return e
            }))
          : null != o &&
            (Fu(o) &&
              (o = (function (e, t) {
                return {
                  $$typeof: Vl,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                }
              })(
                o,
                n +
                  (!o.key || (a && a.key === o.key)
                    ? ''
                    : ('' + o.key).replace(lu, '$&/') + '/') +
                  e
              )),
            t.push(o)),
        1
      )
    if (((a = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(e)))
      for (var l = 0; l < e.length; l++) {
        var u = r + Uu((i = e[l]), l)
        a += Bu(i, t, n, u, o)
      }
    else if (
      'function' ==
      typeof (u = (function (e) {
        return null === e || 'object' != typeof e
          ? null
          : 'function' == typeof (e = (eu && e[eu]) || e['@@iterator'])
          ? e
          : null
      })(e))
    )
      for (e = u.call(e), l = 0; !(i = e.next()).done; )
        a += Bu((i = i.value), t, n, (u = r + Uu(i, l++)), o)
    else if ('object' === i)
      throw (
        ((t = '' + e),
        Error(
          ju(
            31,
            '[object Object]' === t
              ? 'object with keys {' + Object.keys(e).join(', ') + '}'
              : t
          )
        ))
      )
    return a
  }
  function Vu(e, t, n) {
    if (null == e) return e
    var r = [],
      o = 0
    return (
      Bu(e, r, '', '', function (e) {
        return t.call(n, e, o++)
      }),
      r
    )
  }
  function $u(e) {
    if (-1 === e._status) {
      var t = e._result
      ;(t = t()),
        (e._status = 0),
        (e._result = t),
        t.then(
          function (t) {
            0 === e._status &&
              ((t = t.default), (e._status = 1), (e._result = t))
          },
          function (t) {
            0 === e._status && ((e._status = 2), (e._result = t))
          }
        )
    }
    if (1 === e._status) return e._result
    throw e._result
  }
  function Wu() {
    var e = uu.current
    if (null === e) throw Error(ju(321))
    return e
  }
  function Hu() {
    return (
      Nu ||
        ((Nu = !0),
        (Ul = {}),
        (Bl = Fl()),
        (Vl = 60103),
        ($l = 60106),
        (Wl = 60107),
        (Ul.Fragment = Wl),
        (Hl = 60108),
        (Ul.StrictMode = Hl),
        (ql = 60114),
        (Ul.Profiler = ql),
        (Ql = 60109),
        (Gl = 60110),
        (Kl = 60112),
        (Xl = 60113),
        (Ul.Suspense = Xl),
        (Yl = 60115),
        (Zl = 60116),
        'function' == typeof Symbol &&
          Symbol.for &&
          ((Jl = Symbol.for),
          (Vl = Jl('react.element')),
          ($l = Jl('react.portal')),
          (Wl = Jl('react.fragment')),
          (Ul.Fragment = Wl),
          (Hl = Jl('react.strict_mode')),
          (Ul.StrictMode = Hl),
          (ql = Jl('react.profiler')),
          (Ul.Profiler = ql),
          (Ql = Jl('react.provider')),
          (Gl = Jl('react.context')),
          (Kl = Jl('react.forward_ref')),
          (Xl = Jl('react.suspense')),
          (Ul.Suspense = Xl),
          (Yl = Jl('react.memo')),
          (Zl = Jl('react.lazy'))),
        (eu = 'function' == typeof Symbol && Symbol.iterator),
        (tu = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        }),
        (nu = {}),
        (zu.prototype.isReactComponent = {}),
        (zu.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(ju(85))
          this.updater.enqueueSetState(this, e, t, 'setState')
        }),
        (zu.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
        }),
        (Lu.prototype = zu.prototype),
        ((ru = Mu.prototype = new Lu()).constructor = Mu),
        Bl(ru, zu.prototype),
        (ru.isPureReactComponent = !0),
        (ou = { current: null }),
        (iu = Object.prototype.hasOwnProperty),
        (au = { key: !0, ref: !0, __self: !0, __source: !0 }),
        (lu = /\/+/g),
        (su = {
          ReactCurrentDispatcher: (uu = { current: null }),
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: ou,
          IsSomeRendererActing: { current: !1 },
          assign: Bl,
        }),
        (cu = {
          map: Vu,
          forEach: function (e, t, n) {
            Vu(
              e,
              function () {
                t.apply(this, arguments)
              },
              n
            )
          },
          count: function (e) {
            var t = 0
            return (
              Vu(e, function () {
                t++
              }),
              t
            )
          },
          toArray: function (e) {
            return (
              Vu(e, function (e) {
                return e
              }) || []
            )
          },
          only: function (e) {
            if (!Fu(e)) throw Error(ju(143))
            return e
          },
        }),
        (Ul.Children = cu),
        (fu = zu),
        (Ul.Component = fu),
        (du = Mu),
        (Ul.PureComponent = du),
        (pu = su),
        (Ul.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pu),
        (hu = function (e, t, n) {
          if (null == e) throw Error(ju(267, e))
          var r = Bl({}, e.props),
            o = e.key,
            i = e.ref,
            a = e._owner
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (a = ou.current)),
              void 0 !== t.key && (o = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps
            for (u in t)
              iu.call(t, u) &&
                !au.hasOwnProperty(u) &&
                (r[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
          }
          var u = arguments.length - 2
          if (1 === u) r.children = n
          else if (1 < u) {
            l = Array(u)
            for (var s = 0; s < u; s++) l[s] = arguments[s + 2]
            r.children = l
          }
          return {
            $$typeof: Vl,
            type: e.type,
            key: o,
            ref: i,
            props: r,
            _owner: a,
          }
        }),
        (Ul.cloneElement = hu),
        (mu = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: Gl,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: Ql, _context: e }),
            (e.Consumer = e)
          )
        }),
        (Ul.createContext = mu),
        (yu = Du),
        (Ul.createElement = yu),
        (gu = function (e) {
          var t = Du.bind(null, e)
          return (t.type = e), t
        }),
        (Ul.createFactory = gu),
        (vu = function () {
          return { current: null }
        }),
        (Ul.createRef = vu),
        (bu = function (e) {
          return { $$typeof: Kl, render: e }
        }),
        (Ul.forwardRef = bu),
        (wu = Fu),
        (Ul.isValidElement = wu),
        (ku = function (e) {
          return {
            $$typeof: Zl,
            _payload: { _status: -1, _result: e },
            _init: $u,
          }
        }),
        (Ul.lazy = ku),
        (Su = function (e, t) {
          return { $$typeof: Yl, type: e, compare: void 0 === t ? null : t }
        }),
        (Ul.memo = Su),
        (_u = function (e, t) {
          return Wu().useCallback(e, t)
        }),
        (Ul.useCallback = _u),
        (Eu = function (e, t) {
          return Wu().useContext(e, t)
        }),
        (Ul.useContext = Eu),
        (xu = function () {}),
        (Ul.useDebugValue = xu),
        (Cu = function (e, t) {
          return Wu().useEffect(e, t)
        }),
        (Ul.useEffect = Cu),
        (Pu = function (e, t, n) {
          return Wu().useImperativeHandle(e, t, n)
        }),
        (Ul.useImperativeHandle = Pu),
        (Ou = function (e, t) {
          return Wu().useLayoutEffect(e, t)
        }),
        (Ul.useLayoutEffect = Ou),
        (Tu = function (e, t) {
          return Wu().useMemo(e, t)
        }),
        (Ul.useMemo = Tu),
        (Au = function (e, t, n) {
          return Wu().useReducer(e, t, n)
        }),
        (Ul.useReducer = Au),
        (Iu = function (e) {
          return Wu().useRef(e)
        }),
        (Ul.useRef = Iu),
        (Ru = function (e) {
          return Wu().useState(e)
        }),
        (Ul.useState = Ru),
        '17.0.2',
        (Ul.version = '17.0.2')),
      Ul
    )
  }
  var qu,
    Qu,
    Gu = !1
  function Ku() {
    return Gu || ((Gu = !0), (qu = {}), (qu = Hu()), (Qu = t(qu))), qu
  }
  Ku()
  var Xu,
    Yu,
    Zu,
    Ju,
    es,
    ts,
    ns,
    rs,
    os,
    is,
    as,
    ls,
    us,
    ss,
    cs,
    fs,
    ds,
    ps,
    hs,
    ms,
    ys,
    gs,
    vs,
    bs,
    ws,
    ks,
    Ss,
    _s,
    Es,
    xs,
    Cs,
    Ps,
    Os,
    Ts,
    As,
    Is,
    Rs,
    Ns,
    js,
    zs,
    Ls,
    Ms,
    Ds,
    Fs = !1
  function Us(e, t) {
    var n = e.length
    e.push(t)
    e: for (;;) {
      var r = (n - 1) >>> 1,
        o = e[r]
      if (!(void 0 !== o && 0 < $s(o, t))) break e
      ;(e[r] = t), (e[n] = o), (n = r)
    }
  }
  function Bs(e) {
    return void 0 === (e = e[0]) ? null : e
  }
  function Vs(e) {
    var t = e[0]
    if (void 0 !== t) {
      var n = e.pop()
      if (n !== t) {
        e[0] = n
        e: for (var r = 0, o = e.length; r < o; ) {
          var i = 2 * (r + 1) - 1,
            a = e[i],
            l = i + 1,
            u = e[l]
          if (void 0 !== a && 0 > $s(a, n))
            void 0 !== u && 0 > $s(u, a)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = a), (e[i] = n), (r = i))
          else {
            if (!(void 0 !== u && 0 > $s(u, n))) break e
            ;(e[r] = u), (e[l] = n), (r = l)
          }
        }
      }
      return t
    }
    return null
  }
  function $s(e, t) {
    var n = e.sortIndex - t.sortIndex
    return 0 !== n ? n : e.id - t.id
  }
  function Ws(e) {
    for (var t = Bs(ks); null !== t; ) {
      if (null === t.callback) Vs(ks)
      else {
        if (!(t.startTime <= e)) break
        Vs(ks), (t.sortIndex = t.expirationTime), Us(ws, t)
      }
      t = Bs(ks)
    }
  }
  function Hs(e) {
    if (((Ps = !1), Ws(e), !Cs))
      if (null !== Bs(ws)) (Cs = !0), es(qs)
      else {
        var t = Bs(ks)
        null !== t && ts(Hs, t.startTime - e)
      }
  }
  function qs(e, t) {
    ;(Cs = !1), Ps && ((Ps = !1), ns()), (xs = !0)
    var n = Es
    try {
      for (
        Ws(t), _s = Bs(ws);
        null !== _s && (!(_s.expirationTime > t) || (e && !Yu()));

      ) {
        var r = _s.callback
        if ('function' == typeof r) {
          ;(_s.callback = null), (Es = _s.priorityLevel)
          var o = r(_s.expirationTime <= t)
          ;(t = Xu()),
            'function' == typeof o
              ? (_s.callback = o)
              : _s === Bs(ws) && Vs(ws),
            Ws(t)
        } else Vs(ws)
        _s = Bs(ws)
      }
      if (null !== _s) var i = !0
      else {
        var a = Bs(ks)
        null !== a && ts(Hs, a.startTime - t), (i = !1)
      }
      return i
    } finally {
      ;(_s = null), (Es = n), (xs = !1)
    }
  }
  function Qs() {
    return (
      Fs ||
        ((Fs = !0),
        (Ju = {}),
        'object' == typeof performance && 'function' == typeof performance.now
          ? ((os = performance),
            (Xu = function () {
              return os.now()
            }),
            (Ju.unstable_now = Xu))
          : ((is = Date),
            (as = is.now()),
            (Xu = function () {
              return is.now() - as
            }),
            (Ju.unstable_now = Xu)),
        'undefined' == typeof window || 'function' != typeof MessageChannel
          ? ((ls = null),
            (us = null),
            (ss = function () {
              if (null !== ls)
                try {
                  var e = Xu()
                  ls(!0, e), (ls = null)
                } catch (e) {
                  throw (setTimeout(ss, 0), e)
                }
            }),
            (es = function (e) {
              null !== ls ? setTimeout(es, 0, e) : ((ls = e), setTimeout(ss, 0))
            }),
            (ts = function (e, t) {
              us = setTimeout(e, t)
            }),
            (ns = function () {
              clearTimeout(us)
            }),
            (Yu = function () {
              return !1
            }),
            (Ju.unstable_shouldYield = Yu),
            (Zu = function () {}),
            (rs = Ju.unstable_forceFrameRate = Zu))
          : ((cs = window.setTimeout),
            (fs = window.clearTimeout),
            'undefined' != typeof console &&
              ((ds = window.cancelAnimationFrame),
              'function' != typeof window.requestAnimationFrame &&
                console.error(
                  "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                ),
              'function' != typeof ds &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                )),
            (ps = !1),
            (hs = null),
            (ms = -1),
            (ys = 5),
            (gs = 0),
            (Yu = function () {
              return Xu() >= gs
            }),
            (Ju.unstable_shouldYield = Yu),
            (rs = function () {}),
            (Zu = function (e) {
              0 > e || 125 < e
                ? console.error(
                    'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (ys = 0 < e ? Math.floor(1e3 / e) : 5)
            }),
            (Ju.unstable_forceFrameRate = Zu),
            (vs = new MessageChannel()),
            (bs = vs.port2),
            (vs.port1.onmessage = function () {
              if (null !== hs) {
                var e = Xu()
                gs = e + ys
                try {
                  hs(!0, e) ? bs.postMessage(null) : ((ps = !1), (hs = null))
                } catch (e) {
                  throw (bs.postMessage(null), e)
                }
              } else ps = !1
            }),
            (es = function (e) {
              ;(hs = e), ps || ((ps = !0), bs.postMessage(null))
            }),
            (ts = function (e, t) {
              ms = cs(function () {
                e(Xu())
              }, t)
            }),
            (ns = function () {
              fs(ms), (ms = -1)
            })),
        (ws = []),
        (ks = []),
        (Ss = 1),
        (_s = null),
        (Es = 3),
        (xs = !1),
        (Cs = !1),
        (Ps = !1),
        (Os = rs),
        5,
        (Ju.unstable_IdlePriority = 5),
        1,
        (Ju.unstable_ImmediatePriority = 1),
        4,
        (Ju.unstable_LowPriority = 4),
        3,
        (Ju.unstable_NormalPriority = 3),
        null,
        (Ju.unstable_Profiling = null),
        2,
        (Ju.unstable_UserBlockingPriority = 2),
        (Ts = function (e) {
          e.callback = null
        }),
        (Ju.unstable_cancelCallback = Ts),
        (As = function () {
          Cs || xs || ((Cs = !0), es(qs))
        }),
        (Ju.unstable_continueExecution = As),
        (Is = function () {
          return Es
        }),
        (Ju.unstable_getCurrentPriorityLevel = Is),
        (Rs = function () {
          return Bs(ws)
        }),
        (Ju.unstable_getFirstCallbackNode = Rs),
        (Ns = function (e) {
          switch (Es) {
            case 1:
            case 2:
            case 3:
              var t = 3
              break
            default:
              t = Es
          }
          var n = Es
          Es = t
          try {
            return e()
          } finally {
            Es = n
          }
        }),
        (Ju.unstable_next = Ns),
        (js = function () {}),
        (Ju.unstable_pauseExecution = js),
        (zs = Os),
        (Ju.unstable_requestPaint = zs),
        (Ls = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break
            default:
              e = 3
          }
          var n = Es
          Es = e
          try {
            return t()
          } finally {
            Es = n
          }
        }),
        (Ju.unstable_runWithPriority = Ls),
        (Ms = function (e, t, n) {
          var r = Xu()
          switch (
            ((n =
              'object' == typeof n &&
              null !== n &&
              'number' == typeof (n = n.delay) &&
              0 < n
                ? r + n
                : r),
            e)
          ) {
            case 1:
              var o = -1
              break
            case 2:
              o = 250
              break
            case 5:
              o = 1073741823
              break
            case 4:
              o = 1e4
              break
            default:
              o = 5e3
          }
          return (
            (e = {
              id: Ss++,
              callback: t,
              priorityLevel: e,
              startTime: n,
              expirationTime: (o = n + o),
              sortIndex: -1,
            }),
            n > r
              ? ((e.sortIndex = n),
                Us(ks, e),
                null === Bs(ws) &&
                  e === Bs(ks) &&
                  (Ps ? ns() : (Ps = !0), ts(Hs, n - r)))
              : ((e.sortIndex = o), Us(ws, e), Cs || xs || ((Cs = !0), es(qs))),
            e
          )
        }),
        (Ju.unstable_scheduleCallback = Ms),
        (Ds = function (e) {
          var t = Es
          return function () {
            var n = Es
            Es = t
            try {
              return e.apply(this, arguments)
            } finally {
              Es = n
            }
          }
        }),
        (Ju.unstable_wrapCallback = Ds)),
      Ju
    )
  }
  var Gs,
    Ks = !1
  function Xs() {
    return Ks || ((Ks = !0), (Gs = {}), (Gs = Qs())), Gs
  }
  var Ys,
    Zs,
    Js,
    ec,
    tc,
    nc,
    rc,
    oc,
    ic,
    ac,
    lc,
    uc,
    sc,
    cc = !1
  function fc(e) {
    var t = !1,
      n = null
    if (
      (nc.forEach(function (r) {
        try {
          r.onInteractionTraced(e)
        } catch (e) {
          t || ((t = !0), (n = e))
        }
      }),
      t)
    )
      throw n
  }
  function dc(e) {
    var t = !1,
      n = null
    if (
      (nc.forEach(function (r) {
        try {
          r.onInteractionScheduledWorkCompleted(e)
        } catch (e) {
          t || ((t = !0), (n = e))
        }
      }),
      t)
    )
      throw n
  }
  function pc(e, t) {
    var n = !1,
      r = null
    if (
      (nc.forEach(function (o) {
        try {
          o.onWorkScheduled(e, t)
        } catch (e) {
          n || ((n = !0), (r = e))
        }
      }),
      n)
    )
      throw r
  }
  function hc(e, t) {
    var n = !1,
      r = null
    if (
      (nc.forEach(function (o) {
        try {
          o.onWorkStarted(e, t)
        } catch (e) {
          n || ((n = !0), (r = e))
        }
      }),
      n)
    )
      throw r
  }
  function mc(e, t) {
    var n = !1,
      r = null
    if (
      (nc.forEach(function (o) {
        try {
          o.onWorkStopped(e, t)
        } catch (e) {
          n || ((n = !0), (r = e))
        }
      }),
      n)
    )
      throw r
  }
  function yc(e, t) {
    var n = !1,
      r = null
    if (
      (nc.forEach(function (o) {
        try {
          o.onWorkCanceled(e, t)
        } catch (e) {
          n || ((n = !0), (r = e))
        }
      }),
      n)
    )
      throw r
  }
  function gc() {
    return (
      cc ||
        ((cc = !0),
        (Zs = 0),
        (Js = 0),
        ((Ys = {}).__interactionsRef = ec = null),
        (tc = null),
        (Ys.__subscriberRef = tc),
        (ec = { current: new Set() }),
        (Ys.__interactionsRef = ec),
        (tc = { current: null }),
        (Ys.__subscriberRef = tc),
        (nc = null),
        (nc = new Set()),
        (rc = function (e) {
          var t = ec.current
          ec.current = new Set()
          try {
            return e()
          } finally {
            ec.current = t
          }
        }),
        (Ys.unstable_clear = rc),
        (oc = function () {
          return ec.current
        }),
        (Ys.unstable_getCurrent = oc),
        (ic = function () {
          return ++Js
        }),
        (Ys.unstable_getThreadID = ic),
        (ac = function (e) {
          nc.add(e),
            1 === nc.size &&
              (tc.current = {
                onInteractionScheduledWorkCompleted: dc,
                onInteractionTraced: fc,
                onWorkCanceled: yc,
                onWorkScheduled: pc,
                onWorkStarted: hc,
                onWorkStopped: mc,
              })
        }),
        (Ys.unstable_subscribe = ac),
        (lc = function (e, t, n) {
          var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            o = { __count: 1, id: Zs++, name: e, timestamp: t },
            i = ec.current,
            a = new Set(i)
          a.add(o), (ec.current = a)
          var l = tc.current
          try {
            null !== l && l.onInteractionTraced(o)
          } finally {
            try {
              null !== l && l.onWorkStarted(a, r)
            } finally {
              try {
                var u = n()
              } finally {
                ec.current = i
                try {
                  null !== l && l.onWorkStopped(a, r)
                } finally {
                  o.__count--,
                    null !== l &&
                      0 === o.__count &&
                      l.onInteractionScheduledWorkCompleted(o)
                }
              }
            }
          }
          return u
        }),
        (Ys.unstable_trace = lc),
        (uc = function (e) {
          nc.delete(e), 0 === nc.size && (tc.current = null)
        }),
        (Ys.unstable_unsubscribe = uc),
        (sc = function (e) {
          function t() {
            var t = ec.current
            ;(ec.current = r), (o = tc.current)
            try {
              try {
                null !== o && o.onWorkStarted(r, n)
              } finally {
                try {
                  var a = e.apply(void 0, arguments)
                } finally {
                  ;(ec.current = t), null !== o && o.onWorkStopped(r, n)
                }
              }
              return a
            } finally {
              i ||
                ((i = !0),
                r.forEach(function (e) {
                  e.__count--,
                    null !== o &&
                      0 === e.__count &&
                      o.onInteractionScheduledWorkCompleted(e)
                }))
            }
          }
          var n =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = ec.current,
            o = tc.current
          null !== o && o.onWorkScheduled(r, n),
            r.forEach(function (e) {
              e.__count++
            })
          var i = !1
          return (
            (t.cancel = function () {
              o = tc.current
              try {
                null !== o && o.onWorkCanceled(r, n)
              } finally {
                r.forEach(function (e) {
                  e.__count--,
                    o &&
                      0 === e.__count &&
                      o.onInteractionScheduledWorkCompleted(e)
                })
              }
            }),
            t
          )
        }),
        (Ys.unstable_wrap = sc)),
      Ys
    )
  }
  var vc,
    bc = !1
  function wc() {
    return bc || ((bc = !0), (vc = {}), (vc = gc())), vc
  }
  var kc,
    Sc,
    _c,
    Ec,
    xc,
    Cc,
    Pc,
    Oc,
    Tc,
    Ac,
    Ic,
    Rc,
    Nc,
    jc,
    zc,
    Lc,
    Mc,
    Dc,
    Fc,
    Uc,
    Bc,
    Vc,
    $c,
    Wc,
    Hc,
    qc,
    Qc,
    Gc,
    Kc,
    Xc,
    Yc,
    Zc,
    Jc,
    ef,
    tf,
    nf,
    rf,
    of,
    af,
    lf,
    uf,
    sf,
    cf,
    ff,
    df,
    pf,
    hf,
    mf,
    yf,
    gf,
    vf,
    bf,
    wf,
    kf,
    Sf,
    _f,
    Ef,
    xf,
    Cf,
    Pf,
    Of,
    Tf,
    Af,
    If,
    Rf,
    Nf,
    jf,
    zf,
    Lf,
    Mf,
    Df,
    Ff,
    Uf,
    Bf,
    Vf,
    $f,
    Wf,
    Hf,
    qf,
    Qf,
    Gf,
    Kf,
    Xf,
    Yf,
    Zf,
    Jf,
    ed,
    td,
    nd,
    rd,
    od,
    id,
    ad,
    ld,
    ud,
    sd,
    cd,
    fd,
    dd,
    pd,
    hd,
    md,
    yd,
    gd,
    vd,
    bd,
    wd,
    kd,
    Sd,
    _d,
    Ed,
    xd,
    Cd,
    Pd,
    Od,
    Td,
    Ad,
    Id,
    Rd,
    Nd,
    jd,
    zd,
    Ld,
    Md,
    Dd,
    Fd,
    Ud,
    Bd,
    Vd,
    $d,
    Wd,
    Hd,
    qd,
    Qd,
    Gd,
    Kd,
    Xd,
    Yd,
    Zd,
    Jd,
    ep,
    tp,
    np,
    rp,
    op,
    ip,
    ap,
    lp,
    up,
    sp,
    cp,
    fp,
    dp,
    pp,
    hp,
    mp,
    yp,
    gp,
    vp,
    bp,
    wp,
    kp,
    Sp,
    _p,
    Ep,
    xp,
    Cp,
    Pp,
    Op,
    Tp,
    Ap,
    Ip,
    Rp,
    Np,
    jp,
    zp,
    Lp,
    Mp,
    Dp,
    Fp,
    Up,
    Bp,
    Vp,
    $p,
    Wp,
    Hp,
    qp,
    Qp,
    Gp,
    Kp,
    Xp,
    Yp,
    Zp,
    Jp,
    eh,
    th,
    nh,
    rh,
    oh,
    ih,
    ah,
    lh,
    uh,
    sh,
    ch,
    fh,
    dh,
    ph,
    hh,
    mh,
    yh,
    gh,
    vh,
    bh,
    wh,
    kh,
    Sh,
    _h,
    Eh,
    xh,
    Ch,
    Ph,
    Oh,
    Th,
    Ah,
    Ih,
    Rh,
    Nh,
    jh,
    zh,
    Lh,
    Mh,
    Dh,
    Fh,
    Uh,
    Bh,
    Vh,
    $h,
    Wh,
    Hh,
    qh,
    Qh,
    Gh,
    Kh,
    Xh,
    Yh,
    Zh,
    Jh,
    em,
    tm,
    nm,
    rm,
    om,
    im,
    am,
    lm,
    um,
    sm,
    cm,
    fm,
    dm,
    pm,
    hm,
    mm,
    ym,
    gm,
    vm,
    bm,
    wm,
    km,
    Sm,
    _m,
    Em,
    xm,
    Cm,
    Pm,
    Om,
    Tm,
    Am,
    Im,
    Rm = !1
  function Nm(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n])
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function jm(e, t) {
    zm(e, t), zm(e + 'Capture', t)
  }
  function zm(e, t) {
    for (xc[e] = t, e = 0; e < t.length; e++) Ec.add(t[e])
  }
  function Lm(e, t, n, r, o, i, a) {
    ;(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = a)
  }
  function Mm(e) {
    return e[1].toUpperCase()
  }
  function Dm(e, t, n, r) {
    var o = Ic.hasOwnProperty(t) ? Ic[t] : null
    ;(null !== o
      ? 0 === o.type
      : !r &&
        2 < t.length &&
        ('o' === t[0] || 'O' === t[0]) &&
        ('n' === t[1] || 'N' === t[1])) ||
      ((function (e, t, n, r) {
        if (
          null == t ||
          (function (e, t, n, r) {
            if (null !== n && 0 === n.type) return !1
            switch (typeof t) {
              case 'function':
              case 'symbol':
                return !0
              case 'boolean':
                return (
                  !r &&
                  (null !== n
                    ? !n.acceptsBooleans
                    : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                      'aria-' !== e)
                )
              default:
                return !1
            }
          })(e, t, n, r)
        )
          return !0
        if (r) return !1
        if (null !== n)
          switch (n.type) {
            case 3:
              return !t
            case 4:
              return !1 === t
            case 5:
              return isNaN(t)
            case 6:
              return isNaN(t) || 1 > t
          }
        return !1
      })(t, n, o, r) && (n = null),
      r || null === o
        ? (function (e) {
            return (
              !!Oc.call(Ac, e) ||
              (!Oc.call(Tc, e) &&
                (Pc.test(e) ? (Ac[e] = !0) : ((Tc[e] = !0), !1)))
            )
          })(t) &&
          (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : o.mustUseProperty
        ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          null === n
            ? e.removeAttribute(t)
            : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
  }
  function Fm(e) {
    return null === e || 'object' != typeof e
      ? null
      : 'function' == typeof (e = (Zc && e[Zc]) || e['@@iterator'])
      ? e
      : null
  }
  function Um(e) {
    if (void 0 === Jc)
      try {
        throw Error()
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/)
        Jc = (t && t[1]) || ''
      }
    return '\n' + Jc + e
  }
  function Bm(e, t) {
    if (!e || ef) return ''
    ef = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (t)
        if (
          ((t = function () {
            throw Error()
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          'object' == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, [])
          } catch (e) {
            var r = e
          }
          Reflect.construct(e, [], t)
        } else {
          try {
            t.call()
          } catch (e) {
            r = e
          }
          e.call(t.prototype)
        }
      else {
        try {
          throw Error()
        } catch (e) {
          r = e
        }
        e()
      }
    } catch (e) {
      if (e && r && 'string' == typeof e.stack) {
        for (
          var o = e.stack.split('\n'),
            i = r.stack.split('\n'),
            a = o.length - 1,
            l = i.length - 1;
          1 <= a && 0 <= l && o[a] !== i[l];

        )
          l--
        for (; 1 <= a && 0 <= l; a--, l--)
          if (o[a] !== i[l]) {
            if (1 !== a || 1 !== l)
              do {
                if ((a--, 0 > --l || o[a] !== i[l]))
                  return '\n' + o[a].replace(' at new ', ' at ')
              } while (1 <= a && 0 <= l)
            break
          }
      }
    } finally {
      ;(ef = !1), (Error.prepareStackTrace = n)
    }
    return (e = e ? e.displayName || e.name : '') ? Um(e) : ''
  }
  function Vm(e) {
    switch (e.tag) {
      case 5:
        return Um(e.type)
      case 16:
        return Um('Lazy')
      case 13:
        return Um('Suspense')
      case 19:
        return Um('SuspenseList')
      case 0:
      case 2:
      case 15:
        return (e = Bm(e.type, !1))
      case 11:
        return (e = Bm(e.type.render, !1))
      case 22:
        return (e = Bm(e.type._render, !1))
      case 1:
        return (e = Bm(e.type, !0))
      default:
        return ''
    }
  }
  function $m(e) {
    if (null == e) return null
    if ('function' == typeof e) return e.displayName || e.name || null
    if ('string' == typeof e) return e
    switch (e) {
      case Lc:
        return 'Fragment'
      case zc:
        return 'Portal'
      case Dc:
        return 'Profiler'
      case Mc:
        return 'StrictMode'
      case Vc:
        return 'Suspense'
      case $c:
        return 'SuspenseList'
    }
    if ('object' == typeof e)
      switch (e.$$typeof) {
        case Uc:
          return (e.displayName || 'Context') + '.Consumer'
        case Fc:
          return (e._context.displayName || 'Context') + '.Provider'
        case Bc:
          var t = e.render
          return (
            (t = t.displayName || t.name || ''),
            e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
          )
        case Wc:
          return $m(e.type)
        case qc:
          return $m(e._render)
        case Hc:
          ;(t = e._payload), (e = e._init)
          try {
            return $m(e(t))
          } catch (e) {}
      }
    return null
  }
  function Wm(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'object':
      case 'string':
      case 'undefined':
        return e
      default:
        return ''
    }
  }
  function Hm(e) {
    var t = e.type
    return (
      (e = e.nodeName) &&
      'input' === e.toLowerCase() &&
      ('checkbox' === t || 'radio' === t)
    )
  }
  function qm(e) {
    e._valueTracker ||
      (e._valueTracker = (function (e) {
        var t = Hm(e) ? 'checked' : 'value',
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = '' + e[t]
        if (
          !e.hasOwnProperty(t) &&
          void 0 !== n &&
          'function' == typeof n.get &&
          'function' == typeof n.set
        ) {
          var o = n.get,
            i = n.set
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return o.call(this)
              },
              set: function (e) {
                ;(r = '' + e), i.call(this, e)
              },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
              getValue: function () {
                return r
              },
              setValue: function (e) {
                r = '' + e
              },
              stopTracking: function () {
                ;(e._valueTracker = null), delete e[t]
              },
            }
          )
        }
      })(e))
  }
  function Qm(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
      r = ''
    return (
      e && (r = Hm(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r) !== n && (t.setValue(e), !0)
    )
  }
  function Gm(e) {
    if (
      void 0 === (e = e || ('undefined' != typeof document ? document : void 0))
    )
      return null
    try {
      return e.activeElement || e.body
    } catch (t) {
      return e.body
    }
  }
  function Km(e, t) {
    var n = t.checked
    return _c({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != n ? n : e._wrapperState.initialChecked,
    })
  }
  function Xm(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked
    ;(n = Wm(null != t.value ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          'checkbox' === t.type || 'radio' === t.type
            ? null != t.checked
            : null != t.value,
      })
  }
  function Ym(e, t) {
    null != (t = t.checked) && Dm(e, 'checked', t, !1)
  }
  function Zm(e, t) {
    Ym(e, t)
    var n = Wm(t.value),
      r = t.type
    if (null != n)
      'number' === r
        ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n)
    else if ('submit' === r || 'reset' === r)
      return void e.removeAttribute('value')
    t.hasOwnProperty('value')
      ? ey(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && ey(e, t.type, Wm(t.defaultValue)),
      null == t.checked &&
        null != t.defaultChecked &&
        (e.defaultChecked = !!t.defaultChecked)
  }
  function Jm(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type
      if (
        !(
          ('submit' !== r && 'reset' !== r) ||
          (void 0 !== t.value && null !== t.value)
        )
      )
        return
      ;(t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t)
    }
    '' !== (n = e.name) && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      '' !== n && (e.name = n)
  }
  function ey(e, t, n) {
    ;('number' === t && Gm(e.ownerDocument) === e) ||
      (null == n
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
  }
  function ty(e, t) {
    return (
      (e = _c({ children: void 0 }, t)),
      (t = (function (e) {
        var t = ''
        return (
          Sc.Children.forEach(e, function (e) {
            null != e && (t += e)
          }),
          t
        )
      })(t.children)) && (e.children = t),
      e
    )
  }
  function ny(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {}
      for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0)
    } else {
      for (n = '' + Wm(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n)
          return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
        null !== t || e[o].disabled || (t = e[o])
      }
      null !== t && (t.selected = !0)
    }
  }
  function ry(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Nm(91))
    return _c({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    })
  }
  function oy(e, t) {
    var n = t.value
    if (null == n) {
      if (((n = t.children), (t = t.defaultValue), null != n)) {
        if (null != t) throw Error(Nm(92))
        if (Array.isArray(n)) {
          if (!(1 >= n.length)) throw Error(Nm(93))
          n = n[0]
        }
        t = n
      }
      null == t && (t = ''), (n = t)
    }
    e._wrapperState = { initialValue: Wm(n) }
  }
  function iy(e, t) {
    var n = Wm(t.value),
      r = Wm(t.defaultValue)
    null != n &&
      ((n = '' + n) !== e.value && (e.value = n),
      null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
      null != r && (e.defaultValue = '' + r)
  }
  function ay(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
      '' !== t &&
      null !== t &&
      (e.value = t)
  }
  function ly(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg'
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML'
      default:
        return 'http://www.w3.org/1999/xhtml'
    }
  }
  function uy(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
      ? ly(t)
      : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
      ? 'http://www.w3.org/1999/xhtml'
      : e
  }
  function sy(e, t) {
    if (t) {
      var n = e.firstChild
      if (n && n === e.lastChild && 3 === n.nodeType)
        return void (n.nodeValue = t)
    }
    e.textContent = t
  }
  function cy(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
      ? ''
      : n || 'number' != typeof t || 0 === t || (of.hasOwnProperty(e) && of[e])
      ? ('' + t).trim()
      : t + 'px'
  }
  function fy(e, t) {
    for (var n in ((e = e.style), t))
      if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf('--'),
          o = cy(n, t[n], r)
        'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
      }
  }
  function dy(e, t) {
    if (t) {
      if (lf[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
        throw Error(Nm(137, e))
      if (null != t.dangerouslySetInnerHTML) {
        if (null != t.children) throw Error(Nm(60))
        if (
          'object' != typeof t.dangerouslySetInnerHTML ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(Nm(61))
      }
      if (null != t.style && 'object' != typeof t.style) throw Error(Nm(62))
    }
  }
  function py(e, t) {
    if (-1 === e.indexOf('-')) return 'string' == typeof t.is
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  function hy(e) {
    return (
      (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement),
      3 === e.nodeType ? e.parentNode : e
    )
  }
  function my(e) {
    if ((e = qg(e))) {
      if ('function' != typeof uf) throw Error(Nm(280))
      var t = e.stateNode
      t && ((t = Gg(t)), uf(e.stateNode, e.type, t))
    }
  }
  function yy(e) {
    sf ? (cf ? cf.push(e) : (cf = [e])) : (sf = e)
  }
  function gy() {
    if (sf) {
      var e = sf,
        t = cf
      if (((cf = sf = null), my(e), t)) for (e = 0; e < t.length; e++) my(t[e])
    }
  }
  function vy(e, t) {
    return e(t)
  }
  function by(e, t, n, r, o) {
    return e(t, n, r, o)
  }
  function wy() {}
  function ky() {
    ;(null === sf && null === cf) || (wy(), gy())
  }
  function Sy(e, t) {
    var n = e.stateNode
    if (null === n) return null
    var r = Gg(n)
    if (null === r) return null
    n = r[t]
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(r = !r.disabled) ||
          (r = !(
            'button' === (e = e.type) ||
            'input' === e ||
            'select' === e ||
            'textarea' === e
          )),
          (e = !r)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (n && 'function' != typeof n) throw Error(Nm(231, t, typeof n))
    return n
  }
  function _y(e, t, n, r, o, i, a, l, u) {
    var s = Array.prototype.slice.call(arguments, 3)
    try {
      t.apply(n, s)
    } catch (e) {
      this.onError(e)
    }
  }
  function Ey(e, t, n, r, o, i, a, l, u) {
    ;(yf = !1), (gf = null), _y.apply(wf, arguments)
  }
  function xy(e) {
    var t = e,
      n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do {
        0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return)
      } while (e)
    }
    return 3 === t.tag ? n : null
  }
  function Cy(e) {
    if (13 === e.tag) {
      var t = e.memoizedState
      if (
        (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
        null !== t)
      )
        return t.dehydrated
    }
    return null
  }
  function Py(e) {
    if (xy(e) !== e) throw Error(Nm(188))
  }
  function Oy(e) {
    if (
      !(e = (function (e) {
        var t = e.alternate
        if (!t) {
          if (null === (t = xy(e))) throw Error(Nm(188))
          return t !== e ? null : e
        }
        for (var n = e, r = t; ; ) {
          var o = n.return
          if (null === o) break
          var i = o.alternate
          if (null === i) {
            if (null !== (r = o.return)) {
              n = r
              continue
            }
            break
          }
          if (o.child === i.child) {
            for (i = o.child; i; ) {
              if (i === n) return Py(o), e
              if (i === r) return Py(o), t
              i = i.sibling
            }
            throw Error(Nm(188))
          }
          if (n.return !== r.return) (n = o), (r = i)
          else {
            for (var a = !1, l = o.child; l; ) {
              if (l === n) {
                ;(a = !0), (n = o), (r = i)
                break
              }
              if (l === r) {
                ;(a = !0), (r = o), (n = i)
                break
              }
              l = l.sibling
            }
            if (!a) {
              for (l = i.child; l; ) {
                if (l === n) {
                  ;(a = !0), (n = i), (r = o)
                  break
                }
                if (l === r) {
                  ;(a = !0), (r = i), (n = o)
                  break
                }
                l = l.sibling
              }
              if (!a) throw Error(Nm(189))
            }
          }
          if (n.alternate !== r) throw Error(Nm(190))
        }
        if (3 !== n.tag) throw Error(Nm(188))
        return n.stateNode.current === n ? e : t
      })(e))
    )
      return null
    for (var t = e; ; ) {
      if (5 === t.tag || 6 === t.tag) return t
      if (t.child) (t.child.return = t), (t = t.child)
      else {
        if (t === e) break
        for (; !t.sibling; ) {
          if (!t.return || t.return === e) return null
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    }
    return null
  }
  function Ty(e, t) {
    for (var n = e.alternate; null !== t; ) {
      if (t === e || t === n) return !0
      t = t.return
    }
    return !1
  }
  function Ay(e, t, n, r, o) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: 16 | n,
      nativeEvent: o,
      targetContainers: [r],
    }
  }
  function Iy(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Pf = null
        break
      case 'dragenter':
      case 'dragleave':
        Of = null
        break
      case 'mouseover':
      case 'mouseout':
        Tf = null
        break
      case 'pointerover':
      case 'pointerout':
        Af.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        If.delete(t.pointerId)
    }
  }
  function Ry(e, t, n, r, o, i) {
    return null === e || e.nativeEvent !== i
      ? ((e = Ay(t, n, r, o, i)),
        null !== t && null !== (t = qg(t)) && Sf(t),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        null !== o && -1 === t.indexOf(o) && t.push(o),
        e)
  }
  function Ny(e) {
    var t = Hg(e.target)
    if (null !== t) {
      var n = xy(t)
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = Cy(n)))
            return (
              (e.blockedOn = t),
              void Ef(e.lanePriority, function () {
                Xs().unstable_runWithPriority(e.priority, function () {
                  _f(n)
                })
              })
            )
        } else if (3 === t && n.stateNode.hydrate)
          return void (e.blockedOn =
            3 === n.tag ? n.stateNode.containerInfo : null)
    }
    e.blockedOn = null
  }
  function jy(e) {
    if (null !== e.blockedOn) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jy(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
      if (null !== n)
        return null !== (t = qg(n)) && Sf(t), (e.blockedOn = n), !1
      t.shift()
    }
    return !0
  }
  function zy(e, t, n) {
    jy(e) && n.delete(t)
  }
  function Ly() {
    for (xf = !1; 0 < Cf.length; ) {
      var e = Cf[0]
      if (null !== e.blockedOn) {
        null !== (e = qg(e.blockedOn)) && kf(e)
        break
      }
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Jy(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
        if (null !== n) {
          e.blockedOn = n
          break
        }
        t.shift()
      }
      null === e.blockedOn && Cf.shift()
    }
    null !== Pf && jy(Pf) && (Pf = null),
      null !== Of && jy(Of) && (Of = null),
      null !== Tf && jy(Tf) && (Tf = null),
      Af.forEach(zy),
      If.forEach(zy)
  }
  function My(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      xf ||
        ((xf = !0),
        Xs().unstable_scheduleCallback(Xs().unstable_NormalPriority, Ly)))
  }
  function Dy(e) {
    function t(t) {
      return My(t, e)
    }
    if (0 < Cf.length) {
      My(Cf[0], e)
      for (var n = 1; n < Cf.length; n++) {
        var r = Cf[n]
        r.blockedOn === e && (r.blockedOn = null)
      }
    }
    for (
      null !== Pf && My(Pf, e),
        null !== Of && My(Of, e),
        null !== Tf && My(Tf, e),
        Af.forEach(t),
        If.forEach(t),
        n = 0;
      n < Rf.length;
      n++
    )
      (r = Rf[n]).blockedOn === e && (r.blockedOn = null)
    for (; 0 < Rf.length && null === (n = Rf[0]).blockedOn; )
      Ny(n), null === n.blockedOn && Rf.shift()
  }
  function Fy(e, t) {
    var n = {}
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    )
  }
  function Uy(e) {
    if (zf[e]) return zf[e]
    if (!jf[e]) return e
    var t,
      n = jf[e]
    for (t in n) if (n.hasOwnProperty(t) && t in Lf) return (zf[e] = n[t])
    return e
  }
  function By(e, t) {
    for (var n = 0; n < e.length; n += 2) {
      var r = e[n],
        o = e[n + 1]
      ;(o = 'on' + (o[0].toUpperCase() + o.slice(1))),
        Vf.set(r, t),
        Bf.set(r, o),
        jm(o, [r])
    }
  }
  function Vy(e) {
    if (0 != (1 & e)) return (Hf = 15), 1
    if (0 != (2 & e)) return (Hf = 14), 2
    if (0 != (4 & e)) return (Hf = 13), 4
    var t = 24 & e
    return 0 !== t
      ? ((Hf = 12), t)
      : 0 != (32 & e)
      ? ((Hf = 11), 32)
      : 0 !== (t = 192 & e)
      ? ((Hf = 10), t)
      : 0 != (256 & e)
      ? ((Hf = 9), 256)
      : 0 !== (t = 3584 & e)
      ? ((Hf = 8), t)
      : 0 != (4096 & e)
      ? ((Hf = 7), 4096)
      : 0 !== (t = 4186112 & e)
      ? ((Hf = 6), t)
      : 0 !== (t = 62914560 & e)
      ? ((Hf = 5), t)
      : 67108864 & e
      ? ((Hf = 4), 67108864)
      : 0 != (134217728 & e)
      ? ((Hf = 3), 134217728)
      : 0 !== (t = 805306368 & e)
      ? ((Hf = 2), t)
      : 0 != (1073741824 & e)
      ? ((Hf = 1), 1073741824)
      : ((Hf = 8), e)
  }
  function $y(e, t) {
    var n = e.pendingLanes
    if (0 === n) return (Hf = 0)
    var r = 0,
      o = 0,
      i = e.expiredLanes,
      a = e.suspendedLanes,
      l = e.pingedLanes
    if (0 !== i) (r = i), (o = Hf = 15)
    else if (0 !== (i = 134217727 & n)) {
      var u = i & ~a
      0 !== u
        ? ((r = Vy(u)), (o = Hf))
        : 0 !== (l &= i) && ((r = Vy(l)), (o = Hf))
    } else
      0 !== (i = n & ~a)
        ? ((r = Vy(i)), (o = Hf))
        : 0 !== l && ((r = Vy(l)), (o = Hf))
    if (0 === r) return 0
    if (
      ((r = n & (((0 > (r = 31 - qf(r)) ? 0 : 1 << r) << 1) - 1)),
      0 !== t && t !== r && 0 == (t & a))
    ) {
      if ((Vy(t), o <= Hf)) return t
      Hf = o
    }
    if (0 !== (t = e.entangledLanes))
      for (e = e.entanglements, t &= r; 0 < t; )
        (o = 1 << (n = 31 - qf(t))), (r |= e[n]), (t &= ~o)
    return r
  }
  function Wy(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes)
      ? e
      : 1073741824 & e
      ? 1073741824
      : 0
  }
  function Hy(e, t) {
    switch (e) {
      case 15:
        return 1
      case 14:
        return 2
      case 12:
        return 0 === (e = qy(24 & ~t)) ? Hy(10, t) : e
      case 10:
        return 0 === (e = qy(192 & ~t)) ? Hy(8, t) : e
      case 8:
        return (
          0 === (e = qy(3584 & ~t)) &&
            0 === (e = qy(4186112 & ~t)) &&
            (e = 512),
          e
        )
      case 2:
        return 0 === (t = qy(805306368 & ~t)) && (t = 268435456), t
    }
    throw Error(Nm(358, e))
  }
  function qy(e) {
    return e & -e
  }
  function Qy(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
  }
  function Gy(e, t, n) {
    e.pendingLanes |= t
    var r = t - 1
    ;(e.suspendedLanes &= r),
      (e.pingedLanes &= r),
      ((e = e.eventTimes)[(t = 31 - qf(t))] = n)
  }
  function Ky(e) {
    return 0 === e ? 32 : (31 - ((Qf(e) / Gf) | 0)) | 0
  }
  function Xy(e, t, n, r) {
    df || wy()
    var o = Zy,
      i = df
    df = !0
    try {
      by(o, e, t, n, r)
    } finally {
      ;(df = i) || ky()
    }
  }
  function Yy(e, t, n, r) {
    Xf(Kf, Zy.bind(null, e, t, n, r))
  }
  function Zy(e, t, n, r) {
    var o
    if (Yf)
      if ((o = 0 == (4 & t)) && 0 < Cf.length && -1 < Nf.indexOf(e))
        (e = Ay(null, e, t, n, r)), Cf.push(e)
      else {
        var i = Jy(e, t, n, r)
        if (null === i) o && Iy(e, r)
        else {
          if (o) {
            if (-1 < Nf.indexOf(e))
              return (e = Ay(i, e, t, n, r)), void Cf.push(e)
            if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case 'focusin':
                    return (Pf = Ry(Pf, e, t, n, r, o)), !0
                  case 'dragenter':
                    return (Of = Ry(Of, e, t, n, r, o)), !0
                  case 'mouseover':
                    return (Tf = Ry(Tf, e, t, n, r, o)), !0
                  case 'pointerover':
                    var i = o.pointerId
                    return Af.set(i, Ry(Af.get(i) || null, e, t, n, r, o)), !0
                  case 'gotpointercapture':
                    return (
                      (i = o.pointerId),
                      If.set(i, Ry(If.get(i) || null, e, t, n, r, o)),
                      !0
                    )
                }
                return !1
              })(i, e, t, n, r)
            )
              return
            Iy(e, r)
          }
          jg(e, t, r, null, n)
        }
      }
  }
  function Jy(e, t, n, r) {
    var o = hy(r)
    if (null !== (o = Hg(o))) {
      var i = xy(o)
      if (null === i) o = null
      else {
        var a = i.tag
        if (13 === a) {
          if (null !== (o = Cy(i))) return o
          o = null
        } else if (3 === a) {
          if (i.stateNode.hydrate)
            return 3 === i.tag ? i.stateNode.containerInfo : null
          o = null
        } else i !== o && (o = null)
      }
    }
    return jg(e, t, r, o, n), null
  }
  function eg() {
    if (ed) return ed
    var e,
      t,
      n = Jf,
      r = n.length,
      o = 'value' in Zf ? Zf.value : Zf.textContent,
      i = o.length
    for (e = 0; e < r && n[e] === o[e]; e++);
    var a = r - e
    for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
    return (ed = o.slice(e, 1 < t ? 1 - t : void 0))
  }
  function tg(e) {
    var t = e.keyCode
    return (
      'charCode' in e
        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
        : (e = t),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    )
  }
  function ng() {
    return !0
  }
  function rg() {
    return !1
  }
  function og(e) {
    function t(t, n, r, o, i) {
      for (var a in ((this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]))
      return (
        (this.isDefaultPrevented = (
          null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
        )
          ? ng
          : rg),
        (this.isPropagationStopped = rg),
        this
      )
    }
    return (
      _c(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var e = this.nativeEvent
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = ng))
        },
        stopPropagation: function () {
          var e = this.nativeEvent
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = ng))
        },
        persist: function () {},
        isPersistent: ng,
      }),
      t
    )
  }
  function ig(e) {
    var t = this.nativeEvent
    return t.getModifierState ? t.getModifierState(e) : !!(e = Sd[e]) && !!t[e]
  }
  function ag() {
    return ig
  }
  function lg(e, t) {
    switch (e) {
      case 'keyup':
        return -1 !== Nd.indexOf(t.keyCode)
      case 'keydown':
        return 229 !== t.keyCode
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function ug(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null
  }
  function sg(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return 'input' === t ? !!Bd[e.type] : 'textarea' === t
  }
  function cg(e, t, n, r) {
    yy(r),
      0 < (t = Lg(t, 'onChange')).length &&
        ((n = new nd('onChange', 'change', null, n, r)),
        e.push({ event: n, listeners: t }))
  }
  function fg(e) {
    Tg(e, 0)
  }
  function dg(e) {
    if (Qm(Qg(e))) return e
  }
  function pg(e, t) {
    if ('change' === e) return t
  }
  function hg() {
    Vd && (Vd.detachEvent('onpropertychange', mg), ($d = Vd = null))
  }
  function mg(e) {
    if ('value' === e.propertyName && dg($d)) {
      var t = []
      if ((cg(t, $d, e, hy(e)), (e = fg), df)) e(t)
      else {
        df = !0
        try {
          vy(e, t)
        } finally {
          ;(df = !1), ky()
        }
      }
    }
  }
  function yg(e, t, n) {
    'focusin' === e
      ? (hg(), ($d = n), (Vd = t).attachEvent('onpropertychange', mg))
      : 'focusout' === e && hg()
  }
  function gg(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
      return dg($d)
  }
  function vg(e, t) {
    if ('click' === e) return dg(t)
  }
  function bg(e, t) {
    if ('input' === e || 'change' === e) return dg(t)
  }
  function wg(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
  }
  function kg(e, t) {
    if (Gd(e, t)) return !0
    if (
      'object' != typeof e ||
      null === e ||
      'object' != typeof t ||
      null === t
    )
      return !1
    var n = Object.keys(e),
      r = Object.keys(t)
    if (n.length !== r.length) return !1
    for (r = 0; r < n.length; r++)
      if (!Kd.call(t, n[r]) || !Gd(e[n[r]], t[n[r]])) return !1
    return !0
  }
  function Sg(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function _g(e, t) {
    var n,
      r = Sg(e)
    for (e = 0; r; ) {
      if (3 === r.nodeType) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e }
        e = n
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling
            break e
          }
          r = r.parentNode
        }
        r = void 0
      }
      r = Sg(r)
    }
  }
  function Eg(e, t) {
    return (
      !(!e || !t) &&
      (e === t ||
        ((!e || 3 !== e.nodeType) &&
          (t && 3 === t.nodeType
            ? Eg(e, t.parentNode)
            : 'contains' in e
            ? e.contains(t)
            : !!e.compareDocumentPosition &&
              !!(16 & e.compareDocumentPosition(t)))))
    )
  }
  function xg() {
    for (var e = window, t = Gm(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = 'string' == typeof t.contentWindow.location.href
      } catch (e) {
        n = !1
      }
      if (!n) break
      t = Gm((e = t.contentWindow).document)
    }
    return t
  }
  function Cg(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      (('input' === t &&
        ('text' === e.type ||
          'search' === e.type ||
          'tel' === e.type ||
          'url' === e.type ||
          'password' === e.type)) ||
        'textarea' === t ||
        'true' === e.contentEditable)
    )
  }
  function Pg(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
    ep ||
      null == Yd ||
      Yd !== Gm(r) ||
      ('selectionStart' in (r = Yd) && Cg(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : (r = {
            anchorNode: (r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          }),
      (Jd && kg(Jd, r)) ||
        ((Jd = r),
        0 < (r = Lg(Zd, 'onSelect')).length &&
          ((t = new nd('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Yd))))
  }
  function Og(e, t, n) {
    var r = e.type || 'unknown-event'
    ;(e.currentTarget = n),
      (function (e, t, n, r, o, i, a, l, u) {
        if ((Ey.apply(this, arguments), yf)) {
          if (!yf) throw Error(Nm(198))
          var s = gf
          ;(yf = !1), (gf = null), vf || ((vf = !0), (bf = s))
        }
      })(r, t, void 0, e),
      (e.currentTarget = null)
  }
  function Tg(e, t) {
    t = 0 != (4 & t)
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event
      r = r.listeners
      e: {
        var i = void 0
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var l = r[a],
              u = l.instance,
              s = l.currentTarget
            if (((l = l.listener), u !== i && o.isPropagationStopped())) break e
            Og(o, l, s), (i = u)
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((u = (l = r[a]).instance),
              (s = l.currentTarget),
              (l = l.listener),
              u !== i && o.isPropagationStopped())
            )
              break e
            Og(o, l, s), (i = u)
          }
      }
    }
    if (vf) throw ((e = bf), (vf = !1), (bf = null), e)
  }
  function Ag(e, t) {
    var n = Kg(t),
      r = e + '__bubble'
    n.has(r) || (Ng(t, e, 2, !1), n.add(r))
  }
  function Ig(e) {
    e[ip] ||
      ((e[ip] = !0),
      Ec.forEach(function (t) {
        op.has(t) || Rg(t, !1, e, null), Rg(t, !0, e, null)
      }))
  }
  function Rg(e, t, n, r) {
    var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
      i = n
    if (
      ('selectionchange' === e && 9 !== n.nodeType && (i = n.ownerDocument),
      null !== r && !t && op.has(e))
    ) {
      if ('scroll' !== e) return
      ;(o |= 2), (i = r)
    }
    var a = Kg(i),
      l = e + '__' + (t ? 'capture' : 'bubble')
    a.has(l) || (t && (o |= 4), Ng(i, e, o, t), a.add(l))
  }
  function Ng(e, t, n, r) {
    var o = Vf.get(t)
    switch (void 0 === o ? 2 : o) {
      case 0:
        o = Xy
        break
      case 1:
        o = Yy
        break
      default:
        o = Zy
    }
    ;(n = o.bind(null, t, n, e)),
      (o = void 0),
      !hf ||
        ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
        (o = !0),
      r
        ? void 0 !== o
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : void 0 !== o
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1)
  }
  function jg(e, t, n, r, o) {
    var i = r
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
      e: for (;;) {
        if (null === r) return
        var a = r.tag
        if (3 === a || 4 === a) {
          var l = r.stateNode.containerInfo
          if (l === o || (8 === l.nodeType && l.parentNode === o)) break
          if (4 === a)
            for (a = r.return; null !== a; ) {
              var u = a.tag
              if (
                (3 === u || 4 === u) &&
                ((u = a.stateNode.containerInfo) === o ||
                  (8 === u.nodeType && u.parentNode === o))
              )
                return
              a = a.return
            }
          for (; null !== l; ) {
            if (null === (a = Hg(l))) return
            if (5 === (u = a.tag) || 6 === u) {
              r = i = a
              continue e
            }
            l = l.parentNode
          }
        }
        r = r.return
      }
    !(function (e, t, n) {
      if (pf) return e(t, n)
      pf = !0
      try {
        ff(e, t, n)
      } finally {
        ;(pf = !1), ky()
      }
    })(function () {
      var r = i,
        o = hy(n),
        a = []
      e: {
        var l = Bf.get(e)
        if (void 0 !== l) {
          var u = nd,
            s = e
          switch (e) {
            case 'keypress':
              if (0 === tg(n)) break e
            case 'keydown':
            case 'keyup':
              u = Ed
              break
            case 'focusin':
              ;(s = 'focus'), (u = pd)
              break
            case 'focusout':
              ;(s = 'blur'), (u = pd)
              break
            case 'beforeblur':
            case 'afterblur':
              u = pd
              break
            case 'click':
              if (2 === n.button) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              u = sd
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              u = fd
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              u = Od
              break
            case Mf:
            case Df:
            case Ff:
              u = md
              break
            case Uf:
              u = Ad
              break
            case 'scroll':
              u = od
              break
            case 'wheel':
              u = Rd
              break
            case 'copy':
            case 'cut':
            case 'paste':
              u = gd
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              u = Cd
          }
          var c = 0 != (4 & t),
            f = !c && 'scroll' === e,
            d = c ? (null !== l ? l + 'Capture' : null) : l
          c = []
          for (var p, h = r; null !== h; ) {
            var m = (p = h).stateNode
            if (
              (5 === p.tag &&
                null !== m &&
                ((p = m),
                null !== d && null != (m = Sy(h, d)) && c.push(zg(h, m, p))),
              f)
            )
              break
            h = h.return
          }
          0 < c.length &&
            ((l = new u(l, s, null, n, o)), a.push({ event: l, listeners: c }))
        }
      }
      if (0 == (7 & t)) {
        if (
          ((u = 'mouseout' === e || 'pointerout' === e),
          (!(l = 'mouseover' === e || 'pointerover' === e) ||
            0 != (16 & t) ||
            !(s = n.relatedTarget || n.fromElement) ||
            (!Hg(s) && !s[hp])) &&
            (u || l) &&
            ((l =
              o.window === o
                ? o
                : (l = o.ownerDocument)
                ? l.defaultView || l.parentWindow
                : window),
            u
              ? ((u = r),
                null !==
                  (s = (s = n.relatedTarget || n.toElement) ? Hg(s) : null) &&
                  (s !== (f = xy(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                  (s = null))
              : ((u = null), (s = r)),
            u !== s))
        ) {
          if (
            ((c = sd),
            (m = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (h = 'mouse'),
            ('pointerout' !== e && 'pointerover' !== e) ||
              ((c = Cd),
              (m = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (h = 'pointer')),
            (f = null == u ? l : Qg(u)),
            (p = null == s ? l : Qg(s)),
            ((l = new c(m, h + 'leave', u, n, o)).target = f),
            (l.relatedTarget = p),
            (m = null),
            Hg(o) === r &&
              (((c = new c(d, h + 'enter', s, n, o)).target = p),
              (c.relatedTarget = f),
              (m = c)),
            (f = m),
            u && s)
          )
            e: {
              for (d = s, h = 0, p = c = u; p; p = Mg(p)) h++
              for (p = 0, m = d; m; m = Mg(m)) p++
              for (; 0 < h - p; ) (c = Mg(c)), h--
              for (; 0 < p - h; ) (d = Mg(d)), p--
              for (; h--; ) {
                if (c === d || (null !== d && c === d.alternate)) break e
                ;(c = Mg(c)), (d = Mg(d))
              }
              c = null
            }
          else c = null
          null !== u && Dg(a, l, u, c, !1),
            null !== s && null !== f && Dg(a, f, s, c, !0)
        }
        if (
          'select' ===
            (u =
              (l = r ? Qg(r) : window).nodeName && l.nodeName.toLowerCase()) ||
          ('input' === u && 'file' === l.type)
        )
          var y = pg
        else if (sg(l))
          if (Wd) y = bg
          else {
            y = gg
            var g = yg
          }
        else
          (u = l.nodeName) &&
            'input' === u.toLowerCase() &&
            ('checkbox' === l.type || 'radio' === l.type) &&
            (y = vg)
        switch (
          (y && (y = y(e, r))
            ? cg(a, y, n, o)
            : (g && g(e, l, r),
              'focusout' === e &&
                (g = l._wrapperState) &&
                g.controlled &&
                'number' === l.type &&
                ey(l, 'number', l.value)),
          (g = r ? Qg(r) : window),
          e)
        ) {
          case 'focusin':
            ;(sg(g) || 'true' === g.contentEditable) &&
              ((Yd = g), (Zd = r), (Jd = null))
            break
          case 'focusout':
            Jd = Zd = Yd = null
            break
          case 'mousedown':
            ep = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(ep = !1), Pg(a, n, o)
            break
          case 'selectionchange':
            if (Xd) break
          case 'keydown':
          case 'keyup':
            Pg(a, n, o)
        }
        var v
        if (jd)
          e: {
            switch (e) {
              case 'compositionstart':
                var b = 'onCompositionStart'
                break e
              case 'compositionend':
                b = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                b = 'onCompositionUpdate'
                break e
            }
            b = void 0
          }
        else
          Ud
            ? lg(e, n) && (b = 'onCompositionEnd')
            : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart')
        b &&
          (Md &&
            'ko' !== n.locale &&
            (Ud || 'onCompositionStart' !== b
              ? 'onCompositionEnd' === b && Ud && (v = eg())
              : ((Jf = 'value' in (Zf = o) ? Zf.value : Zf.textContent),
                (Ud = !0))),
          0 < (g = Lg(r, b)).length &&
            ((b = new bd(b, e, null, n, o)),
            a.push({ event: b, listeners: g }),
            v ? (b.data = v) : null !== (v = ug(n)) && (b.data = v))),
          (v = Ld
            ? (function (e, t) {
                switch (e) {
                  case 'compositionend':
                    return ug(t)
                  case 'keypress':
                    return 32 !== t.which ? null : ((Fd = !0), Dd)
                  case 'textInput':
                    return (e = t.data) === Dd && Fd ? null : e
                  default:
                    return null
                }
              })(e, n)
            : (function (e, t) {
                if (Ud)
                  return 'compositionend' === e || (!jd && lg(e, t))
                    ? ((e = eg()), (ed = Jf = Zf = null), (Ud = !1), e)
                    : null
                switch (e) {
                  case 'paste':
                    return null
                  case 'keypress':
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey) ||
                      (t.ctrlKey && t.altKey)
                    ) {
                      if (t.char && 1 < t.char.length) return t.char
                      if (t.which) return String.fromCharCode(t.which)
                    }
                    return null
                  case 'compositionend':
                    return Md && 'ko' !== t.locale ? null : t.data
                  default:
                    return null
                }
              })(e, n)) &&
            0 < (r = Lg(r, 'onBeforeInput')).length &&
            ((o = new bd('onBeforeInput', 'beforeinput', null, n, o)),
            a.push({ event: o, listeners: r }),
            (o.data = v))
      }
      Tg(a, t)
    })
  }
  function zg(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
  }
  function Lg(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
      var o = e,
        i = o.stateNode
      5 === o.tag &&
        null !== i &&
        ((o = i),
        null != (i = Sy(e, n)) && r.unshift(zg(e, i, o)),
        null != (i = Sy(e, t)) && r.push(zg(e, i, o))),
        (e = e.return)
    }
    return r
  }
  function Mg(e) {
    if (null === e) return null
    do {
      e = e.return
    } while (e && 5 !== e.tag)
    return e || null
  }
  function Dg(e, t, n, r, o) {
    for (var i = t._reactName, a = []; null !== n && n !== r; ) {
      var l = n,
        u = l.alternate,
        s = l.stateNode
      if (null !== u && u === r) break
      5 === l.tag &&
        null !== s &&
        ((l = s),
        o
          ? null != (u = Sy(n, i)) && a.unshift(zg(n, u, l))
          : o || (null != (u = Sy(n, i)) && a.push(zg(n, u, l)))),
        (n = n.return)
    }
    0 !== a.length && e.push({ event: t, listeners: a })
  }
  function Fg() {}
  function Ug(e, t) {
    switch (e) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        return !!t.autoFocus
    }
    return !1
  }
  function Bg(e, t) {
    return (
      'textarea' === e ||
      'option' === e ||
      'noscript' === e ||
      'string' == typeof t.children ||
      'number' == typeof t.children ||
      ('object' == typeof t.dangerouslySetInnerHTML &&
        null !== t.dangerouslySetInnerHTML &&
        null != t.dangerouslySetInnerHTML.__html)
    )
  }
  function Vg(e) {
    1 === e.nodeType
      ? (e.textContent = '')
      : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '')
  }
  function $g(e) {
    for (; null != e; e = e.nextSibling) {
      var t = e.nodeType
      if (1 === t || 3 === t) break
    }
    return e
  }
  function Wg(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (8 === e.nodeType) {
        var n = e.data
        if ('$' === n || '$!' === n || '$?' === n) {
          if (0 === t) return e
          t--
        } else '/$' === n && t++
      }
      e = e.previousSibling
    }
    return null
  }
  function Hg(e) {
    var t = e[dp]
    if (t) return t
    for (var n = e.parentNode; n; ) {
      if ((t = n[hp] || n[dp])) {
        if (
          ((n = t.alternate),
          null !== t.child || (null !== n && null !== n.child))
        )
          for (e = Wg(e); null !== e; ) {
            if ((n = e[dp])) return n
            e = Wg(e)
          }
        return t
      }
      n = (e = n).parentNode
    }
    return null
  }
  function qg(e) {
    return !(e = e[dp] || e[hp]) ||
      (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
      ? null
      : e
  }
  function Qg(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode
    throw Error(Nm(33))
  }
  function Gg(e) {
    return e[pp] || null
  }
  function Kg(e) {
    var t = e[mp]
    return void 0 === t && (t = e[mp] = new Set()), t
  }
  function Xg(e) {
    return { current: e }
  }
  function Yg(e) {
    0 > gp || ((e.current = yp[gp]), (yp[gp] = null), gp--)
  }
  function Zg(e, t) {
    gp++, (yp[gp] = e.current), (e.current = t)
  }
  function Jg(e, t) {
    var n = e.type.contextTypes
    if (!n) return vp
    var r = e.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext
    var o,
      i = {}
    for (o in n) i[o] = t[o]
    return (
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    )
  }
  function ev(e) {
    return null != (e = e.childContextTypes)
  }
  function tv() {
    Yg(wp), Yg(bp)
  }
  function nv(e, t, n) {
    if (bp.current !== vp) throw Error(Nm(168))
    Zg(bp, t), Zg(wp, n)
  }
  function rv(e, t, n) {
    var r = e.stateNode
    if (((e = t.childContextTypes), 'function' != typeof r.getChildContext))
      return n
    for (var o in (r = r.getChildContext()))
      if (!(o in e)) throw Error(Nm(108, $m(t) || 'Unknown', o))
    return _c({}, n, r)
  }
  function ov(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        vp),
      (kp = bp.current),
      Zg(bp, e),
      Zg(wp, wp.current),
      !0
    )
  }
  function iv(e, t, n) {
    var r = e.stateNode
    if (!r) throw Error(Nm(169))
    n
      ? ((e = rv(e, t, kp)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Yg(wp),
        Yg(bp),
        Zg(bp, e))
      : Yg(wp),
      Zg(wp, n)
  }
  function av() {
    switch (Ip()) {
      case Rp:
        return 99
      case Np:
        return 98
      case jp:
        return 97
      case zp:
        return 96
      case Lp:
        return 95
      default:
        throw Error(Nm(332))
    }
  }
  function lv(e) {
    switch (e) {
      case 99:
        return Rp
      case 98:
        return Np
      case 97:
        return jp
      case 96:
        return zp
      case 95:
        return Lp
      default:
        throw Error(Nm(332))
    }
  }
  function uv(e, t) {
    return (e = lv(e)), xp(e, t)
  }
  function sv(e, t, n) {
    return (e = lv(e)), Cp(e, t, n)
  }
  function cv() {
    if (null !== Up) {
      var e = Up
      ;(Up = null), Pp(e)
    }
    fv()
  }
  function fv() {
    if (!Bp && null !== Fp) {
      Bp = !0
      var e = 0
      try {
        var t = Fp
        uv(99, function () {
          for (; e < t.length; e++) {
            var n = t[e]
            do {
              n = n(!0)
            } while (null !== n)
          }
        }),
          (Fp = null)
      } catch (t) {
        throw (null !== Fp && (Fp = Fp.slice(e + 1)), Cp(Rp, cv), t)
      } finally {
        Bp = !1
      }
    }
  }
  function dv(e, t) {
    if (e && e.defaultProps) {
      for (var n in ((t = _c({}, t)), (e = e.defaultProps)))
        void 0 === t[n] && (t[n] = e[n])
      return t
    }
    return t
  }
  function pv() {
    Gp = Qp = qp = null
  }
  function hv(e) {
    var t = Hp.current
    Yg(Hp), (e.type._context._currentValue = t)
  }
  function mv(e, t) {
    for (; null !== e; ) {
      var n = e.alternate
      if ((e.childLanes & t) === t) {
        if (null === n || (n.childLanes & t) === t) break
        n.childLanes |= t
      } else (e.childLanes |= t), null !== n && (n.childLanes |= t)
      e = e.return
    }
  }
  function yv(e, t) {
    ;(qp = e),
      (Gp = Qp = null),
      null !== (e = e.dependencies) &&
        null !== e.firstContext &&
        (0 != (e.lanes & t) && (Ch = !0), (e.firstContext = null))
  }
  function gv(e, t) {
    if (Gp !== e && !1 !== t && 0 !== t)
      if (
        (('number' == typeof t && 1073741823 !== t) ||
          ((Gp = e), (t = 1073741823)),
        (t = { context: e, observedBits: t, next: null }),
        null === Qp)
      ) {
        if (null === qp) throw Error(Nm(308))
        ;(Qp = t),
          (qp.dependencies = { lanes: 0, firstContext: t, responders: null })
      } else Qp = Qp.next = t
    return e._currentValue
  }
  function vv(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null },
      effects: null,
    }
  }
  function bv(e, t) {
    ;(e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        })
  }
  function wv(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    }
  }
  function kv(e, t) {
    if (null !== (e = e.updateQueue)) {
      var n = (e = e.shared).pending
      null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t)
    }
  }
  function Sv(e, t) {
    var n = e.updateQueue,
      r = e.alternate
    if (null !== r && n === (r = r.updateQueue)) {
      var o = null,
        i = null
      if (null !== (n = n.firstBaseUpdate)) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          }
          null === i ? (o = i = a) : (i = i.next = a), (n = n.next)
        } while (null !== n)
        null === i ? (o = i = t) : (i = i.next = t)
      } else o = i = t
      return (
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: i,
          shared: r.shared,
          effects: r.effects,
        }),
        void (e.updateQueue = n)
      )
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t)
  }
  function _v(e, t, n, r) {
    var o = e.updateQueue
    Kp = !1
    var i = o.firstBaseUpdate,
      a = o.lastBaseUpdate,
      l = o.shared.pending
    if (null !== l) {
      o.shared.pending = null
      var u = l,
        s = u.next
      ;(u.next = null), null === a ? (i = s) : (a.next = s), (a = u)
      var c = e.alternate
      if (null !== c) {
        var f = (c = c.updateQueue).lastBaseUpdate
        f !== a &&
          (null === f ? (c.firstBaseUpdate = s) : (f.next = s),
          (c.lastBaseUpdate = u))
      }
    }
    if (null !== i) {
      for (f = o.baseState, a = 0, c = s = u = null; ; ) {
        l = i.lane
        var d = i.eventTime
        if ((r & l) === l) {
          null !== c &&
            (c = c.next = {
              eventTime: d,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            })
          e: {
            var p = e,
              h = i
            switch (((l = t), (d = n), h.tag)) {
              case 1:
                if ('function' == typeof (p = h.payload)) {
                  f = p.call(d, f, l)
                  break e
                }
                f = p
                break e
              case 3:
                p.flags = (-4097 & p.flags) | 64
              case 0:
                if (
                  null ==
                  (l =
                    'function' == typeof (p = h.payload) ? p.call(d, f, l) : p)
                )
                  break e
                f = _c({}, f, l)
                break e
              case 2:
                Kp = !0
            }
          }
          null !== i.callback &&
            ((e.flags |= 32),
            null === (l = o.effects) ? (o.effects = [i]) : l.push(i))
        } else
          (d = {
            eventTime: d,
            lane: l,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            null === c ? ((s = c = d), (u = f)) : (c = c.next = d),
            (a |= l)
        if (null === (i = i.next)) {
          if (null === (l = o.shared.pending)) break
          ;(i = l.next),
            (l.next = null),
            (o.lastBaseUpdate = l),
            (o.shared.pending = null)
        }
      }
      null === c && (u = f),
        (o.baseState = u),
        (o.firstBaseUpdate = s),
        (o.lastBaseUpdate = c),
        (qh |= a),
        (e.lanes = a),
        (e.memoizedState = f)
    }
  }
  function Ev(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback
        if (null !== o) {
          if (((r.callback = null), (r = n), 'function' != typeof o))
            throw Error(Nm(191, o))
          o.call(r)
        }
      }
  }
  function xv(e, t, n, r) {
    ;(n = null == (n = n(r, (t = e.memoizedState))) ? t : _c({}, t, n)),
      (e.memoizedState = n),
      0 === e.lanes && (e.updateQueue.baseState = n)
  }
  function Cv(e, t, n, r, o, i, a) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
      ? e.shouldComponentUpdate(r, i, a)
      : !t.prototype ||
          !t.prototype.isPureReactComponent ||
          !kg(n, r) ||
          !kg(o, i)
  }
  function Pv(e, t, n) {
    var r = !1,
      o = vp,
      i = t.contextType
    return (
      'object' == typeof i && null !== i
        ? (i = gv(i))
        : ((o = ev(t) ? kp : bp.current),
          (i = (r = null != (r = t.contextTypes)) ? Jg(e, o) : vp)),
      (t = new t(n, i)),
      (e.memoizedState =
        null !== t.state && void 0 !== t.state ? t.state : null),
      (t.updater = Yp),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    )
  }
  function Ov(e, t, n, r) {
    ;(e = t.state),
      'function' == typeof t.componentWillReceiveProps &&
        t.componentWillReceiveProps(n, r),
      'function' == typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Yp.enqueueReplaceState(t, t.state, null)
  }
  function Tv(e, t, n, r) {
    var o = e.stateNode
    ;(o.props = n), (o.state = e.memoizedState), (o.refs = Xp), vv(e)
    var i = t.contextType
    'object' == typeof i && null !== i
      ? (o.context = gv(i))
      : ((i = ev(t) ? kp : bp.current), (o.context = Jg(e, i))),
      _v(e, n, o, r),
      (o.state = e.memoizedState),
      'function' == typeof (i = t.getDerivedStateFromProps) &&
        (xv(e, t, i, n), (o.state = e.memoizedState)),
      'function' == typeof t.getDerivedStateFromProps ||
        'function' == typeof o.getSnapshotBeforeUpdate ||
        ('function' != typeof o.UNSAFE_componentWillMount &&
          'function' != typeof o.componentWillMount) ||
        ((t = o.state),
        'function' == typeof o.componentWillMount && o.componentWillMount(),
        'function' == typeof o.UNSAFE_componentWillMount &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && Yp.enqueueReplaceState(o, o.state, null),
        _v(e, n, o, r),
        (o.state = e.memoizedState)),
      'function' == typeof o.componentDidMount && (e.flags |= 4)
  }
  function Av(e, t, n) {
    if (
      null !== (e = n.ref) &&
      'function' != typeof e &&
      'object' != typeof e
    ) {
      if (n._owner) {
        if ((n = n._owner)) {
          if (1 !== n.tag) throw Error(Nm(309))
          var r = n.stateNode
        }
        if (!r) throw Error(Nm(147, e))
        var o = '' + e
        return null !== t &&
          null !== t.ref &&
          'function' == typeof t.ref &&
          t.ref._stringRef === o
          ? t.ref
          : (((t = function (e) {
              var t = r.refs
              t === Xp && (t = r.refs = {}),
                null === e ? delete t[o] : (t[o] = e)
            })._stringRef = o),
            t)
      }
      if ('string' != typeof e) throw Error(Nm(284))
      if (!n._owner) throw Error(Nm(290, e))
    }
    return e
  }
  function Iv(e, t) {
    if ('textarea' !== e.type)
      throw Error(
        Nm(
          31,
          '[object Object]' === Object.prototype.toString.call(t)
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : t
        )
      )
  }
  function Rv(e) {
    function t(t, n) {
      if (e) {
        var r = t.lastEffect
        null !== r
          ? ((r.nextEffect = n), (t.lastEffect = n))
          : (t.firstEffect = t.lastEffect = n),
          (n.nextEffect = null),
          (n.flags = 8)
      }
    }
    function n(n, r) {
      if (!e) return null
      for (; null !== r; ) t(n, r), (r = r.sibling)
      return null
    }
    function r(e, t) {
      for (e = new Map(); null !== t; )
        null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling)
      return e
    }
    function o(e, t) {
      return ((e = Qw(e, t)).index = 0), (e.sibling = null), e
    }
    function i(t, n, r) {
      return (
        (t.index = r),
        e
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags = 2), n)
              : r
            : ((t.flags = 2), n)
          : n
      )
    }
    function a(t) {
      return e && null === t.alternate && (t.flags = 2), t
    }
    function l(e, t, n, r) {
      return null === t || 6 !== t.tag
        ? (((t = Yw(n, e.mode, r)).return = e), t)
        : (((t = o(t, n)).return = e), t)
    }
    function u(e, t, n, r) {
      return null !== t && t.elementType === n.type
        ? (((r = o(t, n.props)).ref = Av(e, t, n)), (r.return = e), r)
        : (((r = Gw(n.type, n.key, n.props, null, e.mode, r)).ref = Av(
            e,
            t,
            n
          )),
          (r.return = e),
          r)
    }
    function s(e, t, n, r) {
      return null === t ||
        4 !== t.tag ||
        t.stateNode.containerInfo !== n.containerInfo ||
        t.stateNode.implementation !== n.implementation
        ? (((t = Zw(n, e.mode, r)).return = e), t)
        : (((t = o(t, n.children || [])).return = e), t)
    }
    function c(e, t, n, r, i) {
      return null === t || 7 !== t.tag
        ? (((t = Kw(n, e.mode, r, i)).return = e), t)
        : (((t = o(t, n)).return = e), t)
    }
    function f(e, t, n) {
      if ('string' == typeof t || 'number' == typeof t)
        return ((t = Yw('' + t, e.mode, n)).return = e), t
      if ('object' == typeof t && null !== t) {
        switch (t.$$typeof) {
          case jc:
            return (
              ((n = Gw(t.type, t.key, t.props, null, e.mode, n)).ref = Av(
                e,
                null,
                t
              )),
              (n.return = e),
              n
            )
          case zc:
            return ((t = Zw(t, e.mode, n)).return = e), t
        }
        if (Zp(t) || Fm(t)) return ((t = Kw(t, e.mode, n, null)).return = e), t
        Iv(e, t)
      }
      return null
    }
    function d(e, t, n, r) {
      var o = null !== t ? t.key : null
      if ('string' == typeof n || 'number' == typeof n)
        return null !== o ? null : l(e, t, '' + n, r)
      if ('object' == typeof n && null !== n) {
        switch (n.$$typeof) {
          case jc:
            return n.key === o
              ? n.type === Lc
                ? c(e, t, n.props.children, r, o)
                : u(e, t, n, r)
              : null
          case zc:
            return n.key === o ? s(e, t, n, r) : null
        }
        if (Zp(n) || Fm(n)) return null !== o ? null : c(e, t, n, r, null)
        Iv(e, n)
      }
      return null
    }
    function p(e, t, n, r, o) {
      if ('string' == typeof r || 'number' == typeof r)
        return l(t, (e = e.get(n) || null), '' + r, o)
      if ('object' == typeof r && null !== r) {
        switch (r.$$typeof) {
          case jc:
            return (
              (e = e.get(null === r.key ? n : r.key) || null),
              r.type === Lc
                ? c(t, e, r.props.children, o, r.key)
                : u(t, e, r, o)
            )
          case zc:
            return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o)
        }
        if (Zp(r) || Fm(r)) return c(t, (e = e.get(n) || null), r, o, null)
        Iv(t, r)
      }
      return null
    }
    function h(o, a, l, u) {
      for (
        var s = null, c = null, h = a, m = (a = 0), y = null;
        null !== h && m < l.length;
        m++
      ) {
        h.index > m ? ((y = h), (h = null)) : (y = h.sibling)
        var g = d(o, h, l[m], u)
        if (null === g) {
          null === h && (h = y)
          break
        }
        e && h && null === g.alternate && t(o, h),
          (a = i(g, a, m)),
          null === c ? (s = g) : (c.sibling = g),
          (c = g),
          (h = y)
      }
      if (m === l.length) return n(o, h), s
      if (null === h) {
        for (; m < l.length; m++)
          null !== (h = f(o, l[m], u)) &&
            ((a = i(h, a, m)), null === c ? (s = h) : (c.sibling = h), (c = h))
        return s
      }
      for (h = r(o, h); m < l.length; m++)
        null !== (y = p(h, o, m, l[m], u)) &&
          (e && null !== y.alternate && h.delete(null === y.key ? m : y.key),
          (a = i(y, a, m)),
          null === c ? (s = y) : (c.sibling = y),
          (c = y))
      return (
        e &&
          h.forEach(function (e) {
            return t(o, e)
          }),
        s
      )
    }
    function m(o, a, l, u) {
      var s = Fm(l)
      if ('function' != typeof s) throw Error(Nm(150))
      if (null == (l = s.call(l))) throw Error(Nm(151))
      for (
        var c = (s = null), h = a, m = (a = 0), y = null, g = l.next();
        null !== h && !g.done;
        m++, g = l.next()
      ) {
        h.index > m ? ((y = h), (h = null)) : (y = h.sibling)
        var v = d(o, h, g.value, u)
        if (null === v) {
          null === h && (h = y)
          break
        }
        e && h && null === v.alternate && t(o, h),
          (a = i(v, a, m)),
          null === c ? (s = v) : (c.sibling = v),
          (c = v),
          (h = y)
      }
      if (g.done) return n(o, h), s
      if (null === h) {
        for (; !g.done; m++, g = l.next())
          null !== (g = f(o, g.value, u)) &&
            ((a = i(g, a, m)), null === c ? (s = g) : (c.sibling = g), (c = g))
        return s
      }
      for (h = r(o, h); !g.done; m++, g = l.next())
        null !== (g = p(h, o, m, g.value, u)) &&
          (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
          (a = i(g, a, m)),
          null === c ? (s = g) : (c.sibling = g),
          (c = g))
      return (
        e &&
          h.forEach(function (e) {
            return t(o, e)
          }),
        s
      )
    }
    return function (e, r, i, l) {
      var u =
        'object' == typeof i && null !== i && i.type === Lc && null === i.key
      u && (i = i.props.children)
      var s = 'object' == typeof i && null !== i
      if (s)
        switch (i.$$typeof) {
          case jc:
            e: {
              for (s = i.key, u = r; null !== u; ) {
                if (u.key === s) {
                  switch (u.tag) {
                    case 7:
                      if (i.type === Lc) {
                        n(e, u.sibling),
                          ((r = o(u, i.props.children)).return = e),
                          (e = r)
                        break e
                      }
                      break
                    default:
                      if (u.elementType === i.type) {
                        n(e, u.sibling),
                          ((r = o(u, i.props)).ref = Av(e, u, i)),
                          (r.return = e),
                          (e = r)
                        break e
                      }
                  }
                  n(e, u)
                  break
                }
                t(e, u), (u = u.sibling)
              }
              i.type === Lc
                ? (((r = Kw(i.props.children, e.mode, l, i.key)).return = e),
                  (e = r))
                : (((l = Gw(i.type, i.key, i.props, null, e.mode, l)).ref = Av(
                    e,
                    r,
                    i
                  )),
                  (l.return = e),
                  (e = l))
            }
            return a(e)
          case zc:
            e: {
              for (u = i.key; null !== r; ) {
                if (r.key === u) {
                  if (
                    4 === r.tag &&
                    r.stateNode.containerInfo === i.containerInfo &&
                    r.stateNode.implementation === i.implementation
                  ) {
                    n(e, r.sibling),
                      ((r = o(r, i.children || [])).return = e),
                      (e = r)
                    break e
                  }
                  n(e, r)
                  break
                }
                t(e, r), (r = r.sibling)
              }
              ;((r = Zw(i, e.mode, l)).return = e), (e = r)
            }
            return a(e)
        }
      if ('string' == typeof i || 'number' == typeof i)
        return (
          (i = '' + i),
          null !== r && 6 === r.tag
            ? (n(e, r.sibling), ((r = o(r, i)).return = e), (e = r))
            : (n(e, r), ((r = Yw(i, e.mode, l)).return = e), (e = r)),
          a(e)
        )
      if (Zp(i)) return h(e, r, i, l)
      if (Fm(i)) return m(e, r, i, l)
      if ((s && Iv(e, i), void 0 === i && !u))
        switch (e.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(Nm(152, $m(e.type) || 'Component'))
        }
      return n(e, r)
    }
  }
  function Nv(e) {
    if (e === th) throw Error(Nm(174))
    return e
  }
  function jv(e, t) {
    switch ((Zg(oh, t), Zg(rh, e), Zg(nh, th), (e = t.nodeType))) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : uy(null, '')
        break
      default:
        t = uy(
          (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
          (e = e.tagName)
        )
    }
    Yg(nh), Zg(nh, t)
  }
  function zv() {
    Yg(nh), Yg(rh), Yg(oh)
  }
  function Lv(e) {
    Nv(oh.current)
    var t = Nv(nh.current),
      n = uy(t, e.type)
    t !== n && (Zg(rh, e), Zg(nh, n))
  }
  function Mv(e) {
    rh.current === e && (Yg(nh), Yg(rh))
  }
  function Dv(e) {
    for (var t = e; null !== t; ) {
      if (13 === t.tag) {
        var n = t.memoizedState
        if (
          null !== n &&
          (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)
        )
          return t
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (0 != (64 & t.flags)) return t
      } else if (null !== t.child) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) break
      for (; null === t.sibling; ) {
        if (null === t.return || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  function Fv(e, t) {
    var n = Hw(5, null, null, 0)
    ;(n.elementType = 'DELETED'),
      (n.type = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (n.flags = 8),
      null !== e.lastEffect
        ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
        : (e.firstEffect = e.lastEffect = n)
  }
  function Uv(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type
        return (
          null !==
            (t =
              1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t) && ((e.stateNode = t), !0)
        )
      case 6:
        return (
          null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
          ((e.stateNode = t), !0)
        )
      case 13:
      default:
        return !1
    }
  }
  function Bv(e) {
    if (uh) {
      var t = lh
      if (t) {
        var n = t
        if (!Uv(e, t)) {
          if (!(t = $g(n.nextSibling)) || !Uv(e, t))
            return (e.flags = (-1025 & e.flags) | 2), (uh = !1), void (ah = e)
          Fv(ah, n)
        }
        ;(ah = e), (lh = $g(t.firstChild))
      } else (e.flags = (-1025 & e.flags) | 2), (uh = !1), (ah = e)
    }
  }
  function Vv(e) {
    for (
      e = e.return;
      null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

    )
      e = e.return
    ah = e
  }
  function $v(e) {
    if (e !== ah) return !1
    if (!uh) return Vv(e), (uh = !0), !1
    var t = e.type
    if (
      5 !== e.tag ||
      ('head' !== t && 'body' !== t && !Bg(t, e.memoizedProps))
    )
      for (t = lh; t; ) Fv(e, t), (t = $g(t.nextSibling))
    if ((Vv(e), 13 === e.tag)) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
        throw Error(Nm(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data
            if ('/$' === n) {
              if (0 === t) {
                lh = $g(e.nextSibling)
                break e
              }
              t--
            } else ('$' !== n && '$!' !== n && '$?' !== n) || t++
          }
          e = e.nextSibling
        }
        lh = null
      }
    } else lh = ah ? $g(e.stateNode.nextSibling) : null
    return !0
  }
  function Wv() {
    ;(lh = ah = null), (uh = !1)
  }
  function Hv() {
    for (var e = 0; e < sh.length; e++)
      sh[e]._workInProgressVersionPrimary = null
    sh.length = 0
  }
  function qv() {
    throw Error(Nm(321))
  }
  function Qv(e, t) {
    if (null === t) return !1
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Gd(e[n], t[n])) return !1
    return !0
  }
  function Gv(e, t, n, r, o, i) {
    if (
      ((dh = i),
      (ph = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ch.current = null === e || null === e.memoizedState ? bh : wh),
      (e = n(r, o)),
      gh)
    ) {
      i = 0
      do {
        if (((gh = !1), !(25 > i))) throw Error(Nm(301))
        ;(i += 1),
          (mh = hh = null),
          (t.updateQueue = null),
          (ch.current = kh),
          (e = n(r, o))
      } while (gh)
    }
    if (
      ((ch.current = vh),
      (t = null !== hh && null !== hh.next),
      (dh = 0),
      (mh = hh = ph = null),
      (yh = !1),
      t)
    )
      throw Error(Nm(300))
    return e
  }
  function Kv() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return null === mh ? (ph.memoizedState = mh = e) : (mh = mh.next = e), mh
  }
  function Xv() {
    if (null === hh) {
      var e = ph.alternate
      e = null !== e ? e.memoizedState : null
    } else e = hh.next
    var t = null === mh ? ph.memoizedState : mh.next
    if (null !== t) (mh = t), (hh = e)
    else {
      if (null === e) throw Error(Nm(310))
      ;(e = {
        memoizedState: (hh = e).memoizedState,
        baseState: hh.baseState,
        baseQueue: hh.baseQueue,
        queue: hh.queue,
        next: null,
      }),
        null === mh ? (ph.memoizedState = mh = e) : (mh = mh.next = e)
    }
    return mh
  }
  function Yv(e, t) {
    return 'function' == typeof t ? t(e) : t
  }
  function Zv(e) {
    var t = Xv(),
      n = t.queue
    if (null === n) throw Error(Nm(311))
    n.lastRenderedReducer = e
    var r = hh,
      o = r.baseQueue,
      i = n.pending
    if (null !== i) {
      if (null !== o) {
        var a = o.next
        ;(o.next = i.next), (i.next = a)
      }
      ;(r.baseQueue = o = i), (n.pending = null)
    }
    if (null !== o) {
      ;(o = o.next), (r = r.baseState)
      var l = (a = i = null),
        u = o
      do {
        var s = u.lane
        if ((dh & s) === s)
          null !== l &&
            (l = l.next = {
              lane: 0,
              action: u.action,
              eagerReducer: u.eagerReducer,
              eagerState: u.eagerState,
              next: null,
            }),
            (r = u.eagerReducer === e ? u.eagerState : e(r, u.action))
        else {
          var c = {
            lane: s,
            action: u.action,
            eagerReducer: u.eagerReducer,
            eagerState: u.eagerState,
            next: null,
          }
          null === l ? ((a = l = c), (i = r)) : (l = l.next = c),
            (ph.lanes |= s),
            (qh |= s)
        }
        u = u.next
      } while (null !== u && u !== o)
      null === l ? (i = r) : (l.next = a),
        Gd(r, t.memoizedState) || (Ch = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = l),
        (n.lastRenderedState = r)
    }
    return [t.memoizedState, n.dispatch]
  }
  function Jv(e) {
    var t = Xv(),
      n = t.queue
    if (null === n) throw Error(Nm(311))
    n.lastRenderedReducer = e
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState
    if (null !== o) {
      n.pending = null
      var a = (o = o.next)
      do {
        ;(i = e(i, a.action)), (a = a.next)
      } while (a !== o)
      Gd(i, t.memoizedState) || (Ch = !0),
        (t.memoizedState = i),
        null === t.baseQueue && (t.baseState = i),
        (n.lastRenderedState = i)
    }
    return [i, r]
  }
  function eb(e, t, n) {
    var r = t._getVersion
    r = r(t._source)
    var o = t._workInProgressVersionPrimary
    if (
      (null !== o
        ? (e = o === r)
        : ((e = e.mutableReadLanes),
          (e = (dh & e) === e) &&
            ((t._workInProgressVersionPrimary = r), sh.push(t))),
      e)
    )
      return n(t._source)
    throw (sh.push(t), Error(Nm(350)))
  }
  function tb(e, t, n, r) {
    var o = Dh
    if (null === o) throw Error(Nm(349))
    var i = t._getVersion,
      a = i(t._source),
      l = ch.current,
      u = l.useState(function () {
        return eb(o, t, n)
      }),
      s = u[1],
      c = u[0]
    u = mh
    var f = e.memoizedState,
      d = f.refs,
      p = d.getSnapshot,
      h = f.source
    f = f.subscribe
    var m = ph
    return (
      (e.memoizedState = { refs: d, source: t, subscribe: r }),
      l.useEffect(
        function () {
          ;(d.getSnapshot = n), (d.setSnapshot = s)
          var e = i(t._source)
          if (!Gd(a, e)) {
            ;(e = n(t._source)),
              Gd(c, e) ||
                (s(e), (e = uw(m)), (o.mutableReadLanes |= e & o.pendingLanes)),
              (e = o.mutableReadLanes),
              (o.entangledLanes |= e)
            for (var r = o.entanglements, l = e; 0 < l; ) {
              var u = 31 - qf(l),
                f = 1 << u
              ;(r[u] |= e), (l &= ~f)
            }
          }
        },
        [n, t, r]
      ),
      l.useEffect(
        function () {
          return r(t._source, function () {
            var e = d.getSnapshot,
              n = d.setSnapshot
            try {
              n(e(t._source))
              var r = uw(m)
              o.mutableReadLanes |= r & o.pendingLanes
            } catch (e) {
              n(function () {
                throw e
              })
            }
          })
        },
        [t, r]
      ),
      (Gd(p, n) && Gd(h, t) && Gd(f, r)) ||
        (((e = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: Yv,
          lastRenderedState: c,
        }).dispatch = s = vb.bind(null, ph, e)),
        (u.queue = e),
        (u.baseQueue = null),
        (c = eb(o, t, n)),
        (u.memoizedState = u.baseState = c)),
      c
    )
  }
  function nb(e, t, n) {
    return tb(Xv(), e, t, n)
  }
  function rb(e) {
    var t = Kv()
    return (
      'function' == typeof e && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = (e = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Yv,
        lastRenderedState: e,
      }).dispatch = vb.bind(null, ph, e)),
      [t.memoizedState, e]
    )
  }
  function ob(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      null === (t = ph.updateQueue)
        ? ((t = { lastEffect: null }),
          (ph.updateQueue = t),
          (t.lastEffect = e.next = e))
        : null === (n = t.lastEffect)
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    )
  }
  function ib(e) {
    return (e = { current: e }), (Kv().memoizedState = e)
  }
  function ab() {
    return Xv().memoizedState
  }
  function lb(e, t, n, r) {
    var o = Kv()
    ;(ph.flags |= e),
      (o.memoizedState = ob(1 | t, n, void 0, void 0 === r ? null : r))
  }
  function ub(e, t, n, r) {
    var o = Xv()
    r = void 0 === r ? null : r
    var i = void 0
    if (null !== hh) {
      var a = hh.memoizedState
      if (((i = a.destroy), null !== r && Qv(r, a.deps)))
        return void ob(t, n, i, r)
    }
    ;(ph.flags |= e), (o.memoizedState = ob(1 | t, n, i, r))
  }
  function sb(e, t) {
    return lb(516, 4, e, t)
  }
  function cb(e, t) {
    return ub(516, 4, e, t)
  }
  function fb(e, t) {
    return ub(4, 2, e, t)
  }
  function db(e, t) {
    return 'function' == typeof t
      ? ((e = e()),
        t(e),
        function () {
          t(null)
        })
      : null != t
      ? ((e = e()),
        (t.current = e),
        function () {
          t.current = null
        })
      : void 0
  }
  function pb(e, t, n) {
    return (
      (n = null != n ? n.concat([e]) : null), ub(4, 2, db.bind(null, t, e), n)
    )
  }
  function hb() {}
  function mb(e, t) {
    var n = Xv()
    t = void 0 === t ? null : t
    var r = n.memoizedState
    return null !== r && null !== t && Qv(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e)
  }
  function yb(e, t) {
    var n = Xv()
    t = void 0 === t ? null : t
    var r = n.memoizedState
    return null !== r && null !== t && Qv(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e)
  }
  function gb(e, t) {
    var n = av()
    uv(98 > n ? 98 : n, function () {
      e(!0)
    }),
      uv(97 < n ? 97 : n, function () {
        var n = fh.transition
        fh.transition = 1
        try {
          e(!1), t()
        } finally {
          fh.transition = n
        }
      })
  }
  function vb(e, t, n) {
    var r = lw(),
      o = uw(e),
      i = {
        lane: o,
        action: n,
        eagerReducer: null,
        eagerState: null,
        next: null,
      },
      a = t.pending
    if (
      (null === a ? (i.next = i) : ((i.next = a.next), (a.next = i)),
      (t.pending = i),
      (a = e.alternate),
      e === ph || (null !== a && a === ph))
    )
      gh = yh = !0
    else {
      if (
        0 === e.lanes &&
        (null === a || 0 === a.lanes) &&
        null !== (a = t.lastRenderedReducer)
      )
        try {
          var l = t.lastRenderedState,
            u = a(l, n)
          if (((i.eagerReducer = a), (i.eagerState = u), Gd(u, l))) return
        } catch (e) {}
      sw(e, o, r)
    }
  }
  function bb(e, t) {
    if (0 <= Eh) {
      var n = Sh() - Eh
      ;(e.actualDuration += n), t && (e.selfBaseDuration = n), (Eh = -1)
    }
  }
  function wb(e) {
    for (var t = e.child; t; )
      (e.actualDuration += t.actualDuration), (t = t.sibling)
  }
  function kb(e, t, n, r) {
    t.child = null === e ? eh(t, null, n, r) : Jp(t, e.child, n, r)
  }
  function Sb(e, t, n, r, o) {
    n = n.render
    var i = t.ref
    return (
      yv(t, o),
      (r = Gv(e, t, n, r, i, o)),
      null === e || Ch
        ? ((t.flags |= 1), kb(e, t, r, o), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -517),
          (e.lanes &= ~o),
          Db(e, t, o))
    )
  }
  function _b(e, t, n, r, o, i) {
    if (null === e) {
      var a = n.type
      return 'function' != typeof a ||
        qw(a) ||
        void 0 !== a.defaultProps ||
        null !== n.compare ||
        void 0 !== n.defaultProps
        ? (((e = Gw(n.type, null, r, t, t.mode, i)).ref = t.ref),
          (e.return = t),
          (t.child = e))
        : ((t.tag = 15), (t.type = a), Eb(e, t, a, r, o, i))
    }
    return (
      (a = e.child),
      0 == (o & i) &&
      ((o = a.memoizedProps),
      (n = null !== (n = n.compare) ? n : kg)(o, r) && e.ref === t.ref)
        ? Db(e, t, i)
        : ((t.flags |= 1),
          ((e = Qw(a, r)).ref = t.ref),
          (e.return = t),
          (t.child = e))
    )
  }
  function Eb(e, t, n, r, o, i) {
    if (null !== e && kg(e.memoizedProps, r) && e.ref === t.ref) {
      if (((Ch = !1), 0 == (i & o))) return (t.lanes = e.lanes), Db(e, t, i)
      0 != (16384 & e.flags) && (Ch = !0)
    }
    return Pb(e, t, n, r, i)
  }
  function xb(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      i = null !== e ? e.memoizedState : null
    if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
      if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), gw(t, n)
      else {
        if (0 == (1073741824 & n))
          return (
            (e = null !== i ? i.baseLanes | n : n),
            Fw(1073741824),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e }),
            gw(t, e),
            null
          )
        ;(t.memoizedState = { baseLanes: 0 }),
          gw(t, null !== i ? i.baseLanes : n)
      }
    else
      null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        gw(t, r)
    return kb(e, t, o, n), t.child
  }
  function Cb(e, t) {
    var n = t.ref
    ;((null === e && null !== n) || (null !== e && e.ref !== n)) &&
      (t.flags |= 128)
  }
  function Pb(e, t, n, r, o) {
    var i = ev(n) ? kp : bp.current
    return (
      (i = Jg(t, i)),
      yv(t, o),
      (n = Gv(e, t, n, r, i, o)),
      null === e || Ch
        ? ((t.flags |= 1), kb(e, t, n, o), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -517),
          (e.lanes &= ~o),
          Db(e, t, o))
    )
  }
  function Ob(e, t, n, r, o) {
    if (ev(n)) {
      var i = !0
      ov(t)
    } else i = !1
    if ((yv(t, o), null === t.stateNode))
      null !== e &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        Pv(t, n, r),
        Tv(t, n, r, o),
        (r = !0)
    else if (null === e) {
      var a = t.stateNode,
        l = t.memoizedProps
      a.props = l
      var u = a.context,
        s = n.contextType
      'object' == typeof s && null !== s
        ? (s = gv(s))
        : (s = Jg(t, (s = ev(n) ? kp : bp.current)))
      var c = n.getDerivedStateFromProps,
        f =
          'function' == typeof c ||
          'function' == typeof a.getSnapshotBeforeUpdate
      f ||
        ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
          'function' != typeof a.componentWillReceiveProps) ||
        ((l !== r || u !== s) && Ov(t, a, r, s)),
        (Kp = !1)
      var d = t.memoizedState
      ;(a.state = d),
        _v(t, r, a, o),
        (u = t.memoizedState),
        l !== r || d !== u || wp.current || Kp
          ? ('function' == typeof c && (xv(t, n, c, r), (u = t.memoizedState)),
            (l = Kp || Cv(t, n, l, r, d, u, s))
              ? (f ||
                  ('function' != typeof a.UNSAFE_componentWillMount &&
                    'function' != typeof a.componentWillMount) ||
                  ('function' == typeof a.componentWillMount &&
                    a.componentWillMount(),
                  'function' == typeof a.UNSAFE_componentWillMount &&
                    a.UNSAFE_componentWillMount()),
                'function' == typeof a.componentDidMount && (t.flags |= 4))
              : ('function' == typeof a.componentDidMount && (t.flags |= 4),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (a.props = r),
            (a.state = u),
            (a.context = s),
            (r = l))
          : ('function' == typeof a.componentDidMount && (t.flags |= 4),
            (r = !1))
    } else {
      ;(a = t.stateNode),
        bv(e, t),
        (l = t.memoizedProps),
        (s = t.type === t.elementType ? l : dv(t.type, l)),
        (a.props = s),
        (f = t.pendingProps),
        (d = a.context),
        'object' == typeof (u = n.contextType) && null !== u
          ? (u = gv(u))
          : (u = Jg(t, (u = ev(n) ? kp : bp.current)))
      var p = n.getDerivedStateFromProps
      ;(c =
        'function' == typeof p ||
        'function' == typeof a.getSnapshotBeforeUpdate) ||
        ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
          'function' != typeof a.componentWillReceiveProps) ||
        ((l !== f || d !== u) && Ov(t, a, r, u)),
        (Kp = !1),
        (d = t.memoizedState),
        (a.state = d),
        _v(t, r, a, o)
      var h = t.memoizedState
      l !== f || d !== h || wp.current || Kp
        ? ('function' == typeof p && (xv(t, n, p, r), (h = t.memoizedState)),
          (s = Kp || Cv(t, n, s, r, d, h, u))
            ? (c ||
                ('function' != typeof a.UNSAFE_componentWillUpdate &&
                  'function' != typeof a.componentWillUpdate) ||
                ('function' == typeof a.componentWillUpdate &&
                  a.componentWillUpdate(r, h, u),
                'function' == typeof a.UNSAFE_componentWillUpdate &&
                  a.UNSAFE_componentWillUpdate(r, h, u)),
              'function' == typeof a.componentDidUpdate && (t.flags |= 4),
              'function' == typeof a.getSnapshotBeforeUpdate &&
                (t.flags |= 256))
            : ('function' != typeof a.componentDidUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              'function' != typeof a.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 256),
              (t.memoizedProps = r),
              (t.memoizedState = h)),
          (a.props = r),
          (a.state = h),
          (a.context = u),
          (r = s))
        : ('function' != typeof a.componentDidUpdate ||
            (l === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          'function' != typeof a.getSnapshotBeforeUpdate ||
            (l === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 256),
          (r = !1))
    }
    return Tb(e, t, n, r, i, o)
  }
  function Tb(e, t, n, r, o, i) {
    Cb(e, t)
    var a = 0 != (64 & t.flags)
    if (!r && !a) return o && iv(t, n, !1), Db(e, t, i)
    if (
      ((r = t.stateNode),
      (xh.current = t),
      a && 'function' != typeof n.getDerivedStateFromError)
    ) {
      var l = null
      Eh = -1
    } else l = r.render()
    return (
      (t.flags |= 1),
      null !== e && a
        ? ((a = l),
          (t.child = Jp(t, e.child, null, i)),
          (t.child = Jp(t, null, a, i)))
        : kb(e, t, l, i),
      (t.memoizedState = r.state),
      o && iv(t, n, !0),
      t.child
    )
  }
  function Ab(e) {
    var t = e.stateNode
    t.pendingContext
      ? nv(0, t.pendingContext, t.pendingContext !== t.context)
      : t.context && nv(0, t.context, !1),
      jv(e, t.containerInfo)
  }
  function Ib(e, t, n) {
    var r,
      o = t.pendingProps,
      i = ih.current,
      a = !1
    return (
      (r = 0 != (64 & t.flags)) ||
        (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
      r
        ? ((a = !0), (t.flags &= -65))
        : (null !== e && null === e.memoizedState) ||
          void 0 === o.fallback ||
          !0 === o.unstable_avoidThisFallback ||
          (i |= 1),
      Zg(ih, 1 & i),
      null === e
        ? (void 0 !== o.fallback && Bv(t),
          (e = o.children),
          (i = o.fallback),
          a
            ? ((e = Rb(t, e, i, n)),
              (t.child.memoizedState = { baseLanes: n }),
              (t.memoizedState = Ph),
              e)
            : 'number' == typeof o.unstable_expectedLoadTime
            ? ((e = Rb(t, e, i, n)),
              (t.child.memoizedState = { baseLanes: n }),
              (t.memoizedState = Ph),
              (t.lanes = 33554432),
              Fw(33554432),
              e)
            : (((n = Xw(
                { mode: 'visible', children: e },
                t.mode,
                n,
                null
              )).return = t),
              (t.child = n)))
        : (e.memoizedState,
          a
            ? ((o = jb(e, t, o.children, o.fallback, n)),
              (a = t.child),
              (i = e.child.memoizedState),
              (a.memoizedState =
                null === i ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
              (a.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ph),
              o)
            : ((n = Nb(e, t, o.children, n)), (t.memoizedState = null), n))
    )
  }
  function Rb(e, t, n, r) {
    var o = e.mode,
      i = e.child
    return (
      (t = { mode: 'hidden', children: t }),
      0 == (2 & o) && null !== i
        ? ((i.childLanes = 0),
          (i.pendingProps = t),
          8 & e.mode &&
            ((i.actualDuration = 0),
            (i.actualStartTime = -1),
            (i.selfBaseDuration = 0),
            (i.treeBaseDuration = 0)))
        : (i = Xw(t, o, 0, null)),
      (n = Kw(n, o, r, null)),
      (i.return = e),
      (n.return = e),
      (i.sibling = n),
      (e.child = i),
      n
    )
  }
  function Nb(e, t, n, r) {
    var o = e.child
    return (
      (e = o.sibling),
      (n = Qw(o, { mode: 'visible', children: n })),
      0 == (2 & t.mode) && (n.lanes = r),
      (n.return = t),
      (n.sibling = null),
      null !== e &&
        ((e.nextEffect = null),
        (e.flags = 8),
        (t.firstEffect = t.lastEffect = e)),
      (t.child = n)
    )
  }
  function jb(e, t, n, r, o) {
    var i = t.mode,
      a = e.child
    e = a.sibling
    var l = { mode: 'hidden', children: n }
    return (
      0 == (2 & i) && t.child !== a
        ? (((n = t.child).childLanes = 0),
          (n.pendingProps = l),
          8 & t.mode &&
            ((n.actualDuration = 0),
            (n.actualStartTime = -1),
            (n.selfBaseDuration = a.selfBaseDuration),
            (n.treeBaseDuration = a.treeBaseDuration)),
          null !== (a = n.lastEffect)
            ? ((t.firstEffect = n.firstEffect),
              (t.lastEffect = a),
              (a.nextEffect = null))
            : (t.firstEffect = t.lastEffect = null))
        : (n = Qw(a, l)),
      null !== e ? (r = Qw(e, r)) : ((r = Kw(r, i, o, null)).flags |= 2),
      (r.return = t),
      (n.return = t),
      (n.sibling = r),
      (t.child = n),
      r
    )
  }
  function zb(e, t) {
    e.lanes |= t
    var n = e.alternate
    null !== n && (n.lanes |= t), mv(e.return, t)
  }
  function Lb(e, t, n, r, o, i) {
    var a = e.memoizedState
    null === a
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
          lastEffect: i,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = r),
        (a.tail = n),
        (a.tailMode = o),
        (a.lastEffect = i))
  }
  function Mb(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail
    if ((kb(e, t, r.children, n), 0 != (2 & (r = ih.current))))
      (r = (1 & r) | 2), (t.flags |= 64)
    else {
      if (null !== e && 0 != (64 & e.flags))
        e: for (e = t.child; null !== e; ) {
          if (13 === e.tag) null !== e.memoizedState && zb(e, n)
          else if (19 === e.tag) zb(e, n)
          else if (null !== e.child) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === t) break e
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === t) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      r &= 1
    }
    if ((Zg(ih, r), 0 == (2 & t.mode))) t.memoizedState = null
    else
      switch (o) {
        case 'forwards':
          for (n = t.child, o = null; null !== n; )
            null !== (e = n.alternate) && null === Dv(e) && (o = n),
              (n = n.sibling)
          null === (n = o)
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
            Lb(t, !1, o, n, i, t.lastEffect)
          break
        case 'backwards':
          for (n = null, o = t.child, t.child = null; null !== o; ) {
            if (null !== (e = o.alternate) && null === Dv(e)) {
              t.child = o
              break
            }
            ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
          }
          Lb(t, !0, n, null, i, t.lastEffect)
          break
        case 'together':
          Lb(t, !1, null, null, void 0, t.lastEffect)
          break
        default:
          t.memoizedState = null
      }
    return t.child
  }
  function Db(e, t, n) {
    if (
      (null !== e && (t.dependencies = e.dependencies),
      (Eh = -1),
      (qh |= t.lanes),
      0 != (n & t.childLanes))
    ) {
      if (null !== e && t.child !== e.child) throw Error(Nm(153))
      if (null !== t.child) {
        for (
          n = Qw((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = Qw(e, e.pendingProps)).return = t)
        n.sibling = null
      }
      return t.child
    }
    return null
  }
  function Fb(e, t) {
    if (!uh)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling)
          null === n ? (e.tail = null) : (n.sibling = null)
          break
        case 'collapsed':
          n = e.tail
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling)
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null)
      }
  }
  function Ub(e, t, n) {
    var r = t.pendingProps
    switch (t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null
      case 1:
        return ev(t.type) && tv(), null
      case 3:
        return (
          zv(),
          Yg(wp),
          Yg(bp),
          Hv(),
          (r = t.stateNode).pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (null !== e && null !== e.child) ||
            ($v(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
          Th(t),
          null
        )
      case 5:
        Mv(t)
        var o = Nv(oh.current)
        if (((n = t.type), null !== e && null != t.stateNode))
          Ah(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128)
        else {
          if (!r) {
            if (null === t.stateNode) throw Error(Nm(166))
            return null
          }
          if (((e = Nv(nh.current)), $v(t))) {
            ;(r = t.stateNode), (n = t.type)
            var i = t.memoizedProps
            switch (((r[dp] = t), (r[pp] = i), n)) {
              case 'dialog':
                Ag('cancel', r), Ag('close', r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Ag('load', r)
                break
              case 'video':
              case 'audio':
                for (e = 0; e < rp.length; e++) Ag(rp[e], r)
                break
              case 'source':
                Ag('error', r)
                break
              case 'img':
              case 'image':
              case 'link':
                Ag('error', r), Ag('load', r)
                break
              case 'details':
                Ag('toggle', r)
                break
              case 'input':
                Xm(r, i), Ag('invalid', r)
                break
              case 'select':
                ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                  Ag('invalid', r)
                break
              case 'textarea':
                oy(r, i), Ag('invalid', r)
            }
            for (var a in (dy(n, i), (e = null), i))
              i.hasOwnProperty(a) &&
                ((o = i[a]),
                'children' === a
                  ? 'string' == typeof o
                    ? r.textContent !== o && (e = ['children', o])
                    : 'number' == typeof o &&
                      r.textContent !== '' + o &&
                      (e = ['children', '' + o])
                  : xc.hasOwnProperty(a) &&
                    null != o &&
                    'onScroll' === a &&
                    Ag('scroll', r))
            switch (n) {
              case 'input':
                qm(r), Jm(r, i, !0)
                break
              case 'textarea':
                qm(r), ay(r)
                break
              case 'select':
              case 'option':
                break
              default:
                'function' == typeof i.onClick && (r.onclick = Fg)
            }
            ;(r = e), (t.updateQueue = r), null !== r && (t.flags |= 4)
          } else {
            switch (
              ((a = 9 === o.nodeType ? o : o.ownerDocument),
              e === tf.html && (e = ly(n)),
              e === tf.html
                ? 'script' === n
                  ? (((e = a.createElement('div')).innerHTML =
                      '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : 'string' == typeof r.is
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    'select' === n &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
                : (e = a.createElementNS(e, n)),
              (e[dp] = t),
              (e[pp] = r),
              Oh(e, t, !1, !1),
              (t.stateNode = e),
              (a = py(n, r)),
              n)
            ) {
              case 'dialog':
                Ag('cancel', e), Ag('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Ag('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < rp.length; o++) Ag(rp[o], e)
                o = r
                break
              case 'source':
                Ag('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                Ag('error', e), Ag('load', e), (o = r)
                break
              case 'details':
                Ag('toggle', e), (o = r)
                break
              case 'input':
                Xm(e, r), (o = Km(e, r)), Ag('invalid', e)
                break
              case 'option':
                o = ty(e, r)
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = _c({}, r, { value: void 0 })),
                  Ag('invalid', e)
                break
              case 'textarea':
                oy(e, r), (o = ry(e, r)), Ag('invalid', e)
                break
              default:
                o = r
            }
            dy(n, o)
            var l = o
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var u = l[i]
                'style' === i
                  ? fy(e, u)
                  : 'dangerouslySetInnerHTML' === i
                  ? null != (u = u ? u.__html : void 0) && rf(e, u)
                  : 'children' === i
                  ? 'string' == typeof u
                    ? ('textarea' !== n || '' !== u) && sy(e, u)
                    : 'number' == typeof u && sy(e, '' + u)
                  : 'suppressContentEditableWarning' !== i &&
                    'suppressHydrationWarning' !== i &&
                    'autoFocus' !== i &&
                    (xc.hasOwnProperty(i)
                      ? null != u && 'onScroll' === i && Ag('scroll', e)
                      : null != u && Dm(e, i, u, a))
              }
            switch (n) {
              case 'input':
                qm(e), Jm(e, r, !1)
                break
              case 'textarea':
                qm(e), ay(e)
                break
              case 'option':
                null != r.value && e.setAttribute('value', '' + Wm(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  null != (i = r.value)
                    ? ny(e, !!r.multiple, i, !1)
                    : null != r.defaultValue &&
                      ny(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                'function' == typeof o.onClick && (e.onclick = Fg)
            }
            Ug(n, r) && (t.flags |= 4)
          }
          null !== t.ref && (t.flags |= 128)
        }
        return null
      case 6:
        if (e && null != t.stateNode) Ih(e, t, e.memoizedProps, r)
        else {
          if ('string' != typeof r && null === t.stateNode) throw Error(Nm(166))
          ;(n = Nv(oh.current)),
            Nv(nh.current),
            $v(t)
              ? ((r = t.stateNode),
                (n = t.memoizedProps),
                (r[dp] = t),
                r.nodeValue !== n && (t.flags |= 4))
              : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                  r
                ))[dp] = t),
                (t.stateNode = r))
        }
        return null
      case 13:
        return (
          Yg(ih),
          (r = t.memoizedState),
          0 != (64 & t.flags)
            ? ((t.lanes = n), 0 != (8 & t.mode) && wb(t), t)
            : ((r = null !== r),
              (n = !1),
              null === e
                ? void 0 !== t.memoizedProps.fallback && $v(t)
                : (n = null !== e.memoizedState),
              r &&
                !n &&
                0 != (2 & t.mode) &&
                ((null === e &&
                  !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                0 != (1 & ih.current)
                  ? 0 === $h && ($h = 3)
                  : ((0 !== $h && 3 !== $h) || ($h = 4),
                    null === Dh ||
                      (0 == (134217727 & qh) && 0 == (134217727 & Qh)) ||
                      pw(Dh, Uh))),
              (r || n) && (t.flags |= 4),
              null)
        )
      case 4:
        return zv(), Th(t), null === e && Ig(t.stateNode.containerInfo), null
      case 10:
        return hv(t), null
      case 17:
        return ev(t.type) && tv(), null
      case 19:
        if ((Yg(ih), null === (r = t.memoizedState))) return null
        if (((i = 0 != (64 & t.flags)), null === (a = r.rendering)))
          if (i) Fb(r, !1)
          else {
            if (0 !== $h || (null !== e && 0 != (64 & e.flags)))
              for (e = t.child; null !== e; ) {
                if (null !== (a = Dv(e))) {
                  for (
                    t.flags |= 64,
                      Fb(r, !1),
                      null !== (i = a.updateQueue) &&
                        ((t.updateQueue = i), (t.flags |= 4)),
                      null === r.lastEffect && (t.firstEffect = null),
                      t.lastEffect = r.lastEffect,
                      r = n,
                      n = t.child;
                    null !== n;

                  )
                    (a = r),
                      ((i = n).flags &= 2),
                      (i.nextEffect = null),
                      (i.firstEffect = null),
                      (i.lastEffect = null),
                      null === (e = i.alternate)
                        ? ((i.childLanes = 0),
                          (i.lanes = a),
                          (i.child = null),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null),
                          (i.selfBaseDuration = 0),
                          (i.treeBaseDuration = 0))
                        : ((i.childLanes = e.childLanes),
                          (i.lanes = e.lanes),
                          (i.child = e.child),
                          (i.memoizedProps = e.memoizedProps),
                          (i.memoizedState = e.memoizedState),
                          (i.updateQueue = e.updateQueue),
                          (i.type = e.type),
                          (a = e.dependencies),
                          (i.dependencies =
                            null === a
                              ? null
                              : {
                                  lanes: a.lanes,
                                  firstContext: a.firstContext,
                                }),
                          (i.selfBaseDuration = e.selfBaseDuration),
                          (i.treeBaseDuration = e.treeBaseDuration)),
                      (n = n.sibling)
                  return Zg(ih, (1 & ih.current) | 2), t.child
                }
                e = e.sibling
              }
            null !== r.tail &&
              $p() > Yh &&
              ((t.flags |= 64),
              (i = !0),
              Fb(r, !1),
              (t.lanes = 33554432),
              Fw(33554432))
          }
        else {
          if (!i)
            if (null !== (e = Dv(a))) {
              if (
                ((t.flags |= 64),
                (i = !0),
                null !== (n = e.updateQueue) &&
                  ((t.updateQueue = n), (t.flags |= 4)),
                Fb(r, !0),
                null === r.tail &&
                  'hidden' === r.tailMode &&
                  !a.alternate &&
                  !uh)
              )
                return (
                  null !== (t = t.lastEffect = r.lastEffect) &&
                    (t.nextEffect = null),
                  null
                )
            } else
              2 * $p() - r.renderingStartTime > Yh &&
                1073741824 !== n &&
                ((t.flags |= 64),
                (i = !0),
                Fb(r, !1),
                (t.lanes = 33554432),
                Fw(33554432))
          r.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : (null !== (n = r.last) ? (n.sibling = a) : (t.child = a),
              (r.last = a))
        }
        return null !== r.tail
          ? ((n = r.tail),
            (r.rendering = n),
            (r.tail = n.sibling),
            (r.lastEffect = t.lastEffect),
            (r.renderingStartTime = $p()),
            (n.sibling = null),
            (t = ih.current),
            Zg(ih, i ? (1 & t) | 2 : 1 & t),
            n)
          : null
      case 23:
      case 24:
        return (
          vw(),
          null !== e &&
            (null !== e.memoizedState) != (null !== t.memoizedState) &&
            'unstable-defer-without-hiding' !== r.mode &&
            (t.flags |= 4),
          null
        )
    }
    throw Error(Nm(156, t.tag))
  }
  function Bb(e) {
    switch (e.tag) {
      case 1:
        ev(e.type) && tv()
        var t = e.flags
        return 4096 & t
          ? ((e.flags = (-4097 & t) | 64), 0 != (8 & e.mode) && wb(e), e)
          : null
      case 3:
        if ((zv(), Yg(wp), Yg(bp), Hv(), 0 != (64 & (t = e.flags))))
          throw Error(Nm(285))
        return (e.flags = (-4097 & t) | 64), e
      case 5:
        return Mv(e), null
      case 13:
        return (
          Yg(ih),
          4096 & (t = e.flags)
            ? ((e.flags = (-4097 & t) | 64), 0 != (8 & e.mode) && wb(e), e)
            : null
        )
      case 19:
        return Yg(ih), null
      case 4:
        return zv(), null
      case 10:
        return hv(e), null
      case 23:
      case 24:
        return vw(), null
      default:
        return null
    }
  }
  function Vb(e, t) {
    try {
      var n = '',
        r = t
      do {
        ;(n += Vm(r)), (r = r.return)
      } while (r)
      var o = n
    } catch (e) {
      o = '\nError generating stack: ' + e.message + '\n' + e.stack
    }
    return { value: e, source: t, stack: o }
  }
  function $b(e, t) {
    try {
      console.error(t.value)
    } catch (e) {
      setTimeout(function () {
        throw e
      })
    }
  }
  function Wb(e, t, n) {
    ;((n = wv(-1, n)).tag = 3), (n.payload = { element: null })
    var r = t.value
    return (
      (n.callback = function () {
        Jh || ((Jh = !0), (em = r)), $b(0, t)
      }),
      n
    )
  }
  function Hb(e, t, n) {
    ;(n = wv(-1, n)).tag = 3
    var r = e.type.getDerivedStateFromError
    if ('function' == typeof r) {
      var o = t.value
      n.payload = function () {
        return $b(0, t), r(o)
      }
    }
    var i = e.stateNode
    return (
      null !== i &&
        'function' == typeof i.componentDidCatch &&
        (n.callback = function () {
          'function' != typeof r &&
            (null === tm ? (tm = new Set([this])) : tm.add(this), $b(0, t))
          var e = t.stack
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : '',
          })
        }),
      n
    )
  }
  function qb(e) {
    var t = e.ref
    if (null !== t)
      if ('function' == typeof t)
        try {
          t(null)
        } catch (t) {
          Lw(e, t)
        }
      else t.current = null
  }
  function Qb(e, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return
      case 1:
        if (256 & t.flags && null !== e) {
          var n = e.memoizedProps,
            r = e.memoizedState
          ;(t = (e = t.stateNode).getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : dv(t.type, n),
            r
          )),
            (e.__reactInternalSnapshotBeforeUpdate = t)
        }
        return
      case 3:
        return void (256 & t.flags && Vg(t.stateNode.containerInfo))
      case 5:
      case 6:
      case 4:
      case 17:
        return
    }
    throw Error(Nm(163))
  }
  function Gb(e, t, n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
          e = t = t.next
          do {
            if (3 == (3 & e.tag)) {
              var r = e.create
              e.destroy = r()
            }
            e = e.next
          } while (e !== t)
        }
        if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
          e = t = t.next
          do {
            var o = e
            ;(r = o.next),
              0 != (4 & (o = o.tag)) && 0 != (1 & o) && (Nw(n, e), Rw(n, e)),
              (e = r)
          } while (e !== t)
        }
        return
      case 1:
        return (
          (e = n.stateNode),
          4 & n.flags &&
            (null === t
              ? e.componentDidMount()
              : ((r =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : dv(n.type, t.memoizedProps)),
                e.componentDidUpdate(
                  r,
                  t.memoizedState,
                  e.__reactInternalSnapshotBeforeUpdate
                ))),
          void (null !== (t = n.updateQueue) && Ev(n, t, e))
        )
      case 3:
        if (null !== (t = n.updateQueue)) {
          if (((e = null), null !== n.child))
            switch (n.child.tag) {
              case 5:
                e = n.child.stateNode
                break
              case 1:
                e = n.child.stateNode
            }
          Ev(n, t, e)
        }
        return
      case 5:
        return (
          (e = n.stateNode),
          void (
            null === t &&
            4 & n.flags &&
            Ug(n.type, n.memoizedProps) &&
            e.focus()
          )
        )
      case 6:
      case 4:
        return
      case 12:
        return (
          (r = n.memoizedProps.onRender),
          (o = _h),
          void (
            'function' == typeof r &&
            r(
              n.memoizedProps.id,
              null === t ? 'mount' : 'update',
              n.actualDuration,
              n.treeBaseDuration,
              n.actualStartTime,
              o,
              e.memoizedInteractions
            )
          )
        )
      case 13:
        return void (
          null === n.memoizedState &&
          ((n = n.alternate),
          null !== n &&
            ((n = n.memoizedState),
            null !== n && ((n = n.dehydrated), null !== n && Dy(n))))
        )
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return
    }
    throw Error(Nm(163))
  }
  function Kb(e, t) {
    for (var n = e; ; ) {
      if (5 === n.tag) {
        var r = n.stateNode
        if (t)
          'function' == typeof (r = r.style).setProperty
            ? r.setProperty('display', 'none', 'important')
            : (r.display = 'none')
        else {
          r = n.stateNode
          var o = n.memoizedProps.style
          ;(o = null != o && o.hasOwnProperty('display') ? o.display : null),
            (r.style.display = cy('display', o))
        }
      } else if (6 === n.tag) n.stateNode.nodeValue = t ? '' : n.memoizedProps
      else if (
        ((23 !== n.tag && 24 !== n.tag) ||
          null === n.memoizedState ||
          n === e) &&
        null !== n.child
      ) {
        ;(n.child.return = n), (n = n.child)
        continue
      }
      if (n === e) break
      for (; null === n.sibling; ) {
        if (null === n.return || n.return === e) return
        n = n.return
      }
      ;(n.sibling.return = n.return), (n = n.sibling)
    }
  }
  function Xb(e, t) {
    if (_p && 'function' == typeof _p.onCommitFiberUnmount)
      try {
        _p.onCommitFiberUnmount(Sp, t)
      } catch (e) {}
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
          var n = (e = e.next)
          do {
            var r = n,
              o = r.destroy
            if (((r = r.tag), void 0 !== o))
              if (0 != (4 & r)) Nw(t, n)
              else {
                r = t
                try {
                  o()
                } catch (e) {
                  Lw(r, e)
                }
              }
            n = n.next
          } while (n !== e)
        }
        break
      case 1:
        if (
          (qb(t), 'function' == typeof (e = t.stateNode).componentWillUnmount)
        )
          try {
            ;(e.props = t.memoizedProps),
              (e.state = t.memoizedState),
              e.componentWillUnmount()
          } catch (e) {
            Lw(t, e)
          }
        break
      case 5:
        qb(t)
        break
      case 4:
        nw(e, t)
    }
  }
  function Yb(e) {
    ;(e.alternate = null),
      (e.child = null),
      (e.dependencies = null),
      (e.firstEffect = null),
      (e.lastEffect = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.return = null),
      (e.updateQueue = null)
  }
  function Zb(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag
  }
  function Jb(e) {
    e: {
      for (var t = e.return; null !== t; ) {
        if (Zb(t)) break e
        t = t.return
      }
      throw Error(Nm(160))
    }
    var n = t
    switch (((t = n.stateNode), n.tag)) {
      case 5:
        var r = !1
        break
      case 3:
      case 4:
        ;(t = t.containerInfo), (r = !0)
        break
      default:
        throw Error(Nm(161))
    }
    16 & n.flags && (sy(t, ''), (n.flags &= -17))
    e: t: for (n = e; ; ) {
      for (; null === n.sibling; ) {
        if (null === n.return || Zb(n.return)) {
          n = null
          break e
        }
        n = n.return
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

      ) {
        if (2 & n.flags) continue t
        if (null === n.child || 4 === n.tag) continue t
        ;(n.child.return = n), (n = n.child)
      }
      if (!(2 & n.flags)) {
        n = n.stateNode
        break e
      }
    }
    r ? ew(e, n, t) : tw(e, n, t)
  }
  function ew(e, t, n) {
    var r = e.tag,
      o = 5 === r || 6 === r
    if (o)
      (e = o ? e.stateNode : e.stateNode.instance),
        t
          ? 8 === n.nodeType
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (8 === n.nodeType
              ? (t = n.parentNode).insertBefore(e, n)
              : (t = n).appendChild(e),
            null != (n = n._reactRootContainer) ||
              null !== t.onclick ||
              (t.onclick = Fg))
    else if (4 !== r && null !== (e = e.child))
      for (ew(e, t, n), e = e.sibling; null !== e; )
        ew(e, t, n), (e = e.sibling)
  }
  function tw(e, t, n) {
    var r = e.tag,
      o = 5 === r || 6 === r
    if (o)
      (e = o ? e.stateNode : e.stateNode.instance),
        t ? n.insertBefore(e, t) : n.appendChild(e)
    else if (4 !== r && null !== (e = e.child))
      for (tw(e, t, n), e = e.sibling; null !== e; )
        tw(e, t, n), (e = e.sibling)
  }
  function nw(e, t) {
    for (var n, r, o = t, i = !1; ; ) {
      if (!i) {
        i = o.return
        e: for (;;) {
          if (null === i) throw Error(Nm(160))
          switch (((n = i.stateNode), i.tag)) {
            case 5:
              r = !1
              break e
            case 3:
            case 4:
              ;(n = n.containerInfo), (r = !0)
              break e
          }
          i = i.return
        }
        i = !0
      }
      if (5 === o.tag || 6 === o.tag) {
        e: for (var a = e, l = o, u = l; ; )
          if ((Xb(a, u), null !== u.child && 4 !== u.tag))
            (u.child.return = u), (u = u.child)
          else {
            if (u === l) break e
            for (; null === u.sibling; ) {
              if (null === u.return || u.return === l) break e
              u = u.return
            }
            ;(u.sibling.return = u.return), (u = u.sibling)
          }
        r
          ? ((a = n),
            (l = o.stateNode),
            8 === a.nodeType ? a.parentNode.removeChild(l) : a.removeChild(l))
          : n.removeChild(o.stateNode)
      } else if (4 === o.tag) {
        if (null !== o.child) {
          ;(n = o.stateNode.containerInfo),
            (r = !0),
            (o.child.return = o),
            (o = o.child)
          continue
        }
      } else if ((Xb(e, o), null !== o.child)) {
        ;(o.child.return = o), (o = o.child)
        continue
      }
      if (o === t) break
      for (; null === o.sibling; ) {
        if (null === o.return || o.return === t) return
        4 === (o = o.return).tag && (i = !1)
      }
      ;(o.sibling.return = o.return), (o = o.sibling)
    }
  }
  function rw(e, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var n = t.updateQueue
        if (null !== (n = null !== n ? n.lastEffect : null)) {
          var r = (n = n.next)
          do {
            3 == (3 & r.tag) &&
              ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
              (r = r.next)
          } while (r !== n)
        }
        return
      case 1:
        return
      case 5:
        if (null != (n = t.stateNode)) {
          r = t.memoizedProps
          var o = null !== e ? e.memoizedProps : r
          e = t.type
          var i = t.updateQueue
          if (((t.updateQueue = null), null !== i)) {
            for (
              n[pp] = r,
                'input' === e &&
                  'radio' === r.type &&
                  null != r.name &&
                  Ym(n, r),
                py(e, o),
                t = py(e, r),
                o = 0;
              o < i.length;
              o += 2
            ) {
              var a = i[o],
                l = i[o + 1]
              'style' === a
                ? fy(n, l)
                : 'dangerouslySetInnerHTML' === a
                ? rf(n, l)
                : 'children' === a
                ? sy(n, l)
                : Dm(n, a, l, t)
            }
            switch (e) {
              case 'input':
                Zm(n, r)
                break
              case 'textarea':
                iy(n, r)
                break
              case 'select':
                ;(e = n._wrapperState.wasMultiple),
                  (n._wrapperState.wasMultiple = !!r.multiple),
                  null != (i = r.value)
                    ? ny(n, !!r.multiple, i, !1)
                    : e !== !!r.multiple &&
                      (null != r.defaultValue
                        ? ny(n, !!r.multiple, r.defaultValue, !0)
                        : ny(n, !!r.multiple, r.multiple ? [] : '', !1))
            }
          }
        }
        return
      case 6:
        if (null === t.stateNode) throw Error(Nm(162))
        return void (t.stateNode.nodeValue = t.memoizedProps)
      case 3:
        return void (
          (n = t.stateNode).hydrate && ((n.hydrate = !1), Dy(n.containerInfo))
        )
      case 12:
        return
      case 13:
        return (
          null !== t.memoizedState && ((Xh = $p()), Kb(t.child, !0)), void ow(t)
        )
      case 19:
        return void ow(t)
      case 17:
        return
      case 23:
      case 24:
        return void Kb(t, null !== t.memoizedState)
    }
    throw Error(Nm(163))
  }
  function ow(e) {
    var t = e.updateQueue
    if (null !== t) {
      e.updateQueue = null
      var n = e.stateNode
      null === n && (n = e.stateNode = new Nh()),
        t.forEach(function (t) {
          var r = Dw.bind(null, e, t)
          n.has(t) ||
            (!0 !== t.__reactDoNotTraceInteractions &&
              (r = wc().unstable_wrap(r)),
            n.add(t),
            t.then(r, r))
        })
    }
  }
  function iw(e, t) {
    return (
      null !== e &&
      (null === (e = e.memoizedState) || null !== e.dehydrated) &&
      null !== (t = t.memoizedState) &&
      null === t.dehydrated
    )
  }
  function aw() {
    Yh = $p() + 500
  }
  function lw() {
    return 0 != (48 & Mh) ? $p() : -1 !== dm ? dm : (dm = $p())
  }
  function uw(e) {
    if (0 == (2 & (e = e.mode))) return 1
    if (0 == (4 & e)) return 99 === av() ? 1 : 2
    if ((0 === pm && (pm = Hh), 0 !== Wp.transition)) {
      0 !== hm && (hm = null !== Kh ? Kh.pendingLanes : 0), (e = pm)
      var t = 4186112 & ~hm
      return (
        0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t
      )
    }
    return (
      (e = av()),
      0 != (4 & Mh) && 98 === e
        ? (e = Hy(12, pm))
        : (e = Hy(
            (e = (function (e) {
              switch (e) {
                case 99:
                  return 15
                case 98:
                  return 10
                case 97:
                case 96:
                  return 8
                case 95:
                  return 2
                default:
                  return 0
              }
            })(e)),
            pm
          )),
      e
    )
  }
  function sw(e, t, n) {
    if (50 < sm) throw ((sm = 0), (cm = null), Error(Nm(185)))
    if (null === (e = cw(e, t))) return null
    Gy(e, t, n), e === Dh && ((Qh |= t), 4 === $h && pw(e, Uh))
    var r = av()
    1 === t
      ? 0 != (8 & Mh) && 0 == (48 & Mh)
        ? (Bw(e, t), hw(e))
        : (fw(e, n), Bw(e, t), 0 === Mh && (aw(), cv()))
      : (0 == (4 & Mh) ||
          (98 !== r && 99 !== r) ||
          (null === um ? (um = new Set([e])) : um.add(e)),
        fw(e, n),
        Bw(e, t)),
      (Kh = e)
  }
  function cw(e, t) {
    e.lanes |= t
    var n = e.alternate
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
      (e.childLanes |= t),
        null !== (n = e.alternate) && (n.childLanes |= t),
        (n = e),
        (e = e.return)
    return 3 === n.tag ? n.stateNode : null
  }
  function fw(e, t) {
    for (
      var n = e.callbackNode,
        r = e.suspendedLanes,
        o = e.pingedLanes,
        i = e.expirationTimes,
        a = e.pendingLanes;
      0 < a;

    ) {
      var l = 31 - qf(a),
        u = 1 << l,
        s = i[l]
      if (-1 === s) {
        if (0 == (u & r) || 0 != (u & o)) {
          ;(s = t), Vy(u)
          var c = Hf
          i[l] = 10 <= c ? s + 250 : 6 <= c ? s + 5e3 : -1
        }
      } else s <= t && (e.expiredLanes |= u)
      a &= ~u
    }
    if (((r = $y(e, e === Dh ? Uh : 0)), (t = Hf), 0 === r))
      null !== n &&
        (n !== Mp && Pp(n), (e.callbackNode = null), (e.callbackPriority = 0))
    else {
      if (null !== n) {
        if (e.callbackPriority === t) return
        n !== Mp && Pp(n)
      }
      15 === t
        ? ((n = hw.bind(null, e)),
          null === Fp ? ((Fp = [n]), (Up = Cp(Rp, fv))) : Fp.push(n),
          (n = Mp))
        : 14 === t
        ? (n = sv(99, hw.bind(null, e)))
        : (n = sv(
            (n = (function (e) {
              switch (e) {
                case 15:
                case 14:
                  return 99
                case 13:
                case 12:
                case 11:
                case 10:
                  return 98
                case 9:
                case 8:
                case 7:
                case 6:
                case 4:
                case 5:
                  return 97
                case 3:
                case 2:
                case 1:
                  return 95
                case 0:
                  return 90
                default:
                  throw Error(Nm(358, e))
              }
            })(t)),
            dw.bind(null, e)
          )),
        (e.callbackPriority = t),
        (e.callbackNode = n)
    }
  }
  function dw(e) {
    if (((dm = -1), (hm = pm = 0), 0 != (48 & Mh))) throw Error(Nm(327))
    var t = e.callbackNode
    if (Iw() && e.callbackNode !== t) return null
    var n = $y(e, e === Dh ? Uh : 0)
    if (0 === n) return null
    var r = n,
      o = Mh
    Mh |= 16
    var i = kw()
    for ((Dh === e && Uh === r) || (aw(), bw(e, r), Vw(e, r)), r = Sw(e); ; )
      try {
        xw()
        break
      } catch (t) {
        ww(e, t)
      }
    if (
      (pv(),
      (wc().__interactionsRef.current = r),
      (zh.current = i),
      (Mh = o),
      null !== Fh ? (o = 0) : ((Dh = null), (Uh = 0), (o = $h)),
      0 != (Hh & Qh))
    )
      bw(e, 0)
    else if (0 !== o) {
      if (
        (2 === o &&
          ((Mh |= 64),
          e.hydrate && ((e.hydrate = !1), Vg(e.containerInfo)),
          0 !== (n = Wy(e)) && (o = _w(e, n))),
        1 === o)
      )
        throw ((t = Wh), bw(e, 0), pw(e, n), fw(e, $p()), t)
      switch (
        ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), o)
      ) {
        case 0:
        case 1:
          throw Error(Nm(345))
        case 2:
          Ow(e)
          break
        case 3:
          if ((pw(e, n), (62914560 & n) === n && 10 < (o = Xh + 500 - $p()))) {
            if (0 !== $y(e, 0)) break
            if (((i = e.suspendedLanes) & n) !== n) {
              lw(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = up(Ow.bind(null, e), o)
            break
          }
          Ow(e)
          break
        case 4:
          if ((pw(e, n), (4186112 & n) === n)) break
          for (o = e.eventTimes, i = -1; 0 < n; ) {
            var a = 31 - qf(n)
            ;(r = 1 << a), (a = o[a]) > i && (i = a), (n &= ~r)
          }
          if (
            ((n = i),
            10 <
              (n =
                (120 > (n = $p() - n)
                  ? 120
                  : 480 > n
                  ? 480
                  : 1080 > n
                  ? 1080
                  : 1920 > n
                  ? 1920
                  : 3e3 > n
                  ? 3e3
                  : 4320 > n
                  ? 4320
                  : 1960 * jh(n / 1960)) - n))
          ) {
            e.timeoutHandle = up(Ow.bind(null, e), n)
            break
          }
          Ow(e)
          break
        case 5:
          Ow(e)
          break
        default:
          throw Error(Nm(329))
      }
    }
    return fw(e, $p()), e.callbackNode === t ? dw.bind(null, e) : null
  }
  function pw(e, t) {
    for (
      t &= ~Gh,
        t &= ~Qh,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - qf(t),
        r = 1 << n
      ;(e[n] = -1), (t &= ~r)
    }
  }
  function hw(e) {
    if (0 != (48 & Mh)) throw Error(Nm(327))
    if ((Iw(), e === Dh && 0 != (e.expiredLanes & Uh))) {
      var t = Uh,
        n = _w(e, t)
      0 != (Hh & Qh) && (n = _w(e, (t = $y(e, t))))
    } else n = _w(e, (t = $y(e, 0)))
    if (
      (0 !== e.tag &&
        2 === n &&
        ((Mh |= 64),
        e.hydrate && ((e.hydrate = !1), Vg(e.containerInfo)),
        0 !== (t = Wy(e)) && (n = _w(e, t))),
      1 === n)
    )
      throw ((n = Wh), bw(e, 0), pw(e, t), fw(e, $p()), n)
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Ow(e),
      fw(e, $p()),
      null
    )
  }
  function mw(e, t) {
    var n = Mh
    Mh |= 1
    try {
      return e(t)
    } finally {
      0 === (Mh = n) && (aw(), cv())
    }
  }
  function yw(e, t) {
    var n = Mh
    ;(Mh &= -2), (Mh |= 8)
    try {
      return e(t)
    } finally {
      0 === (Mh = n) && (aw(), cv())
    }
  }
  function gw(e, t) {
    Zg(Vh, Bh), (Bh |= t), (Hh |= t)
  }
  function vw() {
    ;(Bh = Vh.current), Yg(Vh)
  }
  function bw(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var n = e.timeoutHandle
    if ((-1 !== n && ((e.timeoutHandle = -1), sp(n)), null !== Fh))
      for (n = Fh.return; null !== n; ) {
        var r = n
        switch (r.tag) {
          case 1:
            null != (r = r.type.childContextTypes) && tv()
            break
          case 3:
            zv(), Yg(wp), Yg(bp), Hv()
            break
          case 5:
            Mv(r)
            break
          case 4:
            zv()
            break
          case 13:
          case 19:
            Yg(ih)
            break
          case 10:
            hv(r)
            break
          case 23:
          case 24:
            vw()
        }
        n = n.return
      }
    ;(Dh = e),
      (Fh = Qw(e.current, null)),
      (Uh = Bh = Hh = t),
      ($h = 0),
      (Wh = null),
      (Gh = Qh = qh = 0),
      (fm = null)
  }
  function ww(e, t) {
    for (;;) {
      var n = Fh
      try {
        if ((pv(), (ch.current = vh), yh)) {
          for (var r = ph.memoizedState; null !== r; ) {
            var o = r.queue
            null !== o && (o.pending = null), (r = r.next)
          }
          yh = !1
        }
        if (
          ((dh = 0),
          (mh = hh = ph = null),
          (gh = !1),
          (Lh.current = null),
          null === n || null === n.return)
        ) {
          ;($h = 1), (Wh = t), (Fh = null)
          break
        }
        8 & n.mode && bb(n, !0)
        e: {
          var i = e,
            a = n.return,
            l = n,
            u = t
          if (
            ((t = Uh),
            (l.flags |= 2048),
            (l.firstEffect = l.lastEffect = null),
            null !== u && 'object' == typeof u && 'function' == typeof u.then)
          ) {
            var s = u
            if (0 == (2 & l.mode)) {
              var c = l.alternate
              c
                ? ((l.updateQueue = c.updateQueue),
                  (l.memoizedState = c.memoizedState),
                  (l.lanes = c.lanes))
                : ((l.updateQueue = null), (l.memoizedState = null))
            }
            var f = 0 != (1 & ih.current),
              d = a
            do {
              var p
              if ((p = 13 === d.tag)) {
                var h = d.memoizedState
                if (null !== h) p = null !== h.dehydrated
                else {
                  var m = d.memoizedProps
                  p =
                    void 0 !== m.fallback &&
                    (!0 !== m.unstable_avoidThisFallback || !f)
                }
              }
              if (p) {
                var y = d.updateQueue
                if (null === y) {
                  var g = new Set()
                  g.add(s), (d.updateQueue = g)
                } else y.add(s)
                if (0 == (2 & d.mode)) {
                  if (
                    ((d.flags |= 64),
                    (l.flags |= 16384),
                    (l.flags &= -2981),
                    1 === l.tag)
                  )
                    if (null === l.alternate) l.tag = 17
                    else {
                      var v = wv(-1, 1)
                      ;(v.tag = 2), kv(l, v)
                    }
                  l.lanes |= 1
                  break e
                }
                ;(u = void 0), (l = t)
                var b = i.pingCache
                if (
                  (null === b
                    ? ((b = i.pingCache = new Rh()),
                      (u = new Set()),
                      b.set(s, u))
                    : void 0 === (u = b.get(s)) &&
                      ((u = new Set()), b.set(s, u)),
                  !u.has(l))
                ) {
                  u.add(l)
                  var w = Mw.bind(null, i, s, l)
                  s.then(w, w)
                }
                ;(d.flags |= 4096), (d.lanes = t)
                break e
              }
              d = d.return
            } while (null !== d)
            u = Error(
              ($m(l.type) || 'A React component') +
                ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.'
            )
          }
          5 !== $h && ($h = 2), (u = Vb(u, l)), (d = a)
          do {
            switch (d.tag) {
              case 3:
                ;(i = u),
                  (d.flags |= 4096),
                  (t &= -t),
                  (d.lanes |= t),
                  Sv(d, Wb(0, i, t))
                break e
              case 1:
                i = u
                var k = d.type,
                  S = d.stateNode
                if (
                  0 == (64 & d.flags) &&
                  ('function' == typeof k.getDerivedStateFromError ||
                    (null !== S &&
                      'function' == typeof S.componentDidCatch &&
                      (null === tm || !tm.has(S))))
                ) {
                  ;(d.flags |= 4096),
                    (t &= -t),
                    (d.lanes |= t),
                    Sv(d, Hb(d, i, t))
                  break e
                }
            }
            d = d.return
          } while (null !== d)
        }
        Pw(n)
      } catch (e) {
        ;(t = e), Fh === n && null !== n && (Fh = n = n.return)
        continue
      }
      break
    }
  }
  function kw() {
    var e = zh.current
    return (zh.current = vh), null === e ? vh : e
  }
  function Sw(e) {
    var t = wc().__interactionsRef.current
    return (wc().__interactionsRef.current = e.memoizedInteractions), t
  }
  function _w(e, t) {
    var n = Mh
    Mh |= 16
    var r = kw()
    for ((Dh === e && Uh === t) || (bw(e, t), Vw(e, t)), t = Sw(e); ; )
      try {
        Ew()
        break
      } catch (t) {
        ww(e, t)
      }
    if (
      (pv(),
      (wc().__interactionsRef.current = t),
      (Mh = n),
      (zh.current = r),
      null !== Fh)
    )
      throw Error(Nm(261))
    return (Dh = null), (Uh = 0), $h
  }
  function Ew() {
    for (; null !== Fh; ) Cw(Fh)
  }
  function xw() {
    for (; null !== Fh && !Op(); ) Cw(Fh)
  }
  function Cw(e) {
    var t = e.alternate
    0 != (8 & e.mode)
      ? ((Eh = Sh()),
        0 > e.actualStartTime && (e.actualStartTime = Sh()),
        (t = gm(t, e, Bh)),
        bb(e, !0))
      : (t = gm(t, e, Bh)),
      (e.memoizedProps = e.pendingProps),
      null === t ? Pw(e) : (Fh = t),
      (Lh.current = null)
  }
  function Pw(e) {
    var t = e
    do {
      var n = t.alternate
      if (((e = t.return), 0 == (2048 & t.flags))) {
        if (0 == (8 & t.mode)) n = Ub(n, t, Bh)
        else {
          var r = t
          ;(Eh = Sh()),
            0 > r.actualStartTime && (r.actualStartTime = Sh()),
            (n = Ub(n, t, Bh)),
            bb(t, !1)
        }
        if (null !== n) return void (Fh = n)
        if (
          (24 !== (n = t).tag && 23 !== n.tag) ||
          null === n.memoizedState ||
          0 != (1073741824 & Bh) ||
          0 == (4 & n.mode)
        ) {
          if (((r = 0), 0 != (8 & n.mode))) {
            for (
              var o = n.actualDuration,
                i = n.selfBaseDuration,
                a = null === n.alternate || n.child !== n.alternate.child,
                l = n.child;
              null !== l;

            )
              (r |= l.lanes | l.childLanes),
                a && (o += l.actualDuration),
                (i += l.treeBaseDuration),
                (l = l.sibling)
            13 === n.tag &&
              null !== n.memoizedState &&
              null !== (a = n.child) &&
              (i -= a.treeBaseDuration),
              (n.actualDuration = o),
              (n.treeBaseDuration = i)
          } else
            for (o = n.child; null !== o; )
              (r |= o.lanes | o.childLanes), (o = o.sibling)
          n.childLanes = r
        }
        null !== e &&
          0 == (2048 & e.flags) &&
          (null === e.firstEffect && (e.firstEffect = t.firstEffect),
          null !== t.lastEffect &&
            (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
            (e.lastEffect = t.lastEffect)),
          1 < t.flags &&
            (null !== e.lastEffect
              ? (e.lastEffect.nextEffect = t)
              : (e.firstEffect = t),
            (e.lastEffect = t)))
      } else {
        if (null !== (n = Bb(t))) return (n.flags &= 2047), void (Fh = n)
        if (0 != (8 & t.mode)) {
          for (bb(t, !1), n = t.actualDuration, r = t.child; null !== r; )
            (n += r.actualDuration), (r = r.sibling)
          t.actualDuration = n
        }
        null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048))
      }
      if (null !== (t = t.sibling)) return void (Fh = t)
      Fh = t = e
    } while (null !== t)
    0 === $h && ($h = 5)
  }
  function Ow(e) {
    var t = av()
    return uv(99, Tw.bind(null, e, t)), null
  }
  function Tw(e, t) {
    do {
      Iw()
    } while (null !== rm)
    if (0 != (48 & Mh)) throw Error(Nm(327))
    var n = e.finishedWork,
      r = e.finishedLanes
    if (null === n) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(Nm(177))
    e.callbackNode = null
    var o = n.lanes | n.childLanes,
      i = o,
      a = e.pendingLanes & ~i
    ;(e.pendingLanes = i),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= i),
      (e.mutableReadLanes &= i),
      (e.entangledLanes &= i),
      (i = e.entanglements)
    for (var l = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
      var s = 31 - qf(a),
        c = 1 << s
      ;(i[s] = 0), (l[s] = -1), (u[s] = -1), (a &= ~c)
    }
    if (
      (null !== um && 0 == (24 & o) && um.has(e) && um.delete(e),
      e === Dh && ((Fh = Dh = null), (Uh = 0)),
      1 < n.flags
        ? null !== n.lastEffect
          ? ((n.lastEffect.nextEffect = n), (o = n.firstEffect))
          : (o = n)
        : (o = n.firstEffect),
      null !== o)
    ) {
      if (
        ((i = Mh),
        (Mh |= 32),
        (l = Sw(e)),
        (Lh.current = null),
        (ap = Yf),
        Cg((u = xg())))
      ) {
        if ('selectionStart' in u)
          a = { start: u.selectionStart, end: u.selectionEnd }
        else
          e: {
            var f =
              (a = ((a = u.ownerDocument) && a.defaultView) || window)
                .getSelection && a.getSelection()
            if (f && 0 !== f.rangeCount) {
              ;(a = f.anchorNode),
                (s = f.anchorOffset),
                (c = f.focusNode),
                (f = f.focusOffset)
              try {
                a.nodeType, c.nodeType
              } catch (e) {
                a = null
                break e
              }
              var d = 0,
                p = -1,
                h = -1,
                m = 0,
                y = 0,
                g = u,
                v = null
              t: for (;;) {
                for (
                  var b;
                  g !== a || (0 !== s && 3 !== g.nodeType) || (p = d + s),
                    g !== c || (0 !== f && 3 !== g.nodeType) || (h = d + f),
                    3 === g.nodeType && (d += g.nodeValue.length),
                    null !== (b = g.firstChild);

                )
                  (v = g), (g = b)
                for (;;) {
                  if (g === u) break t
                  if (
                    (v === a && ++m === s && (p = d),
                    v === c && ++y === f && (h = d),
                    null !== (b = g.nextSibling))
                  )
                    break
                  v = (g = v).parentNode
                }
                g = b
              }
              a = -1 === p || -1 === h ? null : { start: p, end: h }
            } else a = null
          }
        a = a || { start: 0, end: 0 }
      } else a = null
      ;(lp = { focusedElem: u, selectionRange: a }),
        (Yf = !1),
        (mm = null),
        (ym = !1),
        (Zh = o)
      do {
        try {
          Aw()
        } catch (e) {
          if (null === Zh) throw Error(Nm(330))
          Lw(Zh, e), (Zh = Zh.nextEffect)
        }
      } while (null !== Zh)
      ;(mm = null), (_h = Sh()), (Zh = o)
      do {
        try {
          for (u = e; null !== Zh; ) {
            var w = Zh.flags
            if ((16 & w && sy(Zh.stateNode, ''), 128 & w)) {
              var k = Zh.alternate
              if (null !== k) {
                var S = k.ref
                null !== S &&
                  ('function' == typeof S ? S(null) : (S.current = null))
              }
            }
            switch (1038 & w) {
              case 2:
                Jb(Zh), (Zh.flags &= -3)
                break
              case 6:
                Jb(Zh), (Zh.flags &= -3), rw(Zh.alternate, Zh)
                break
              case 1024:
                Zh.flags &= -1025
                break
              case 1028:
                ;(Zh.flags &= -1025), rw(Zh.alternate, Zh)
                break
              case 4:
                rw(Zh.alternate, Zh)
                break
              case 8:
                nw(u, (a = Zh))
                var _ = a.alternate
                Yb(a), null !== _ && Yb(_)
            }
            Zh = Zh.nextEffect
          }
        } catch (e) {
          if (null === Zh) throw Error(Nm(330))
          Lw(Zh, e), (Zh = Zh.nextEffect)
        }
      } while (null !== Zh)
      if (
        ((S = lp),
        (k = xg()),
        (w = S.focusedElem),
        (u = S.selectionRange),
        k !== w &&
          w &&
          w.ownerDocument &&
          Eg(w.ownerDocument.documentElement, w))
      ) {
        null !== u &&
          Cg(w) &&
          ((k = u.start),
          void 0 === (S = u.end) && (S = k),
          'selectionStart' in w
            ? ((w.selectionStart = k),
              (w.selectionEnd = Math.min(S, w.value.length)))
            : (S =
                ((k = w.ownerDocument || document) && k.defaultView) || window)
                .getSelection &&
              ((S = S.getSelection()),
              (a = w.textContent.length),
              (_ = Math.min(u.start, a)),
              (u = void 0 === u.end ? _ : Math.min(u.end, a)),
              !S.extend && _ > u && ((a = u), (u = _), (_ = a)),
              (a = _g(w, _)),
              (s = _g(w, u)),
              a &&
                s &&
                (1 !== S.rangeCount ||
                  S.anchorNode !== a.node ||
                  S.anchorOffset !== a.offset ||
                  S.focusNode !== s.node ||
                  S.focusOffset !== s.offset) &&
                ((k = k.createRange()).setStart(a.node, a.offset),
                S.removeAllRanges(),
                _ > u
                  ? (S.addRange(k), S.extend(s.node, s.offset))
                  : (k.setEnd(s.node, s.offset), S.addRange(k))))),
          (k = [])
        for (S = w; (S = S.parentNode); )
          1 === S.nodeType &&
            k.push({ element: S, left: S.scrollLeft, top: S.scrollTop })
        for (
          'function' == typeof w.focus && w.focus(), w = 0;
          w < k.length;
          w++
        )
          ((S = k[w]).element.scrollLeft = S.left),
            (S.element.scrollTop = S.top)
      }
      ;(Yf = !!ap), (lp = ap = null), (e.current = n), (Zh = o)
      do {
        try {
          for (w = e; null !== Zh; ) {
            var E = Zh.flags
            if ((36 & E && Gb(w, Zh.alternate, Zh), 128 & E)) {
              k = void 0
              var x = Zh.ref
              if (null !== x) {
                var C = Zh.stateNode
                switch (Zh.tag) {
                  case 5:
                    k = C
                    break
                  default:
                    k = C
                }
                'function' == typeof x ? x(k) : (x.current = k)
              }
            }
            Zh = Zh.nextEffect
          }
        } catch (e) {
          if (null === Zh) throw Error(Nm(330))
          Lw(Zh, e), (Zh = Zh.nextEffect)
        }
      } while (null !== Zh)
      ;(Zh = null), Dp(), (wc().__interactionsRef.current = l), (Mh = i)
    } else (e.current = n), (_h = Sh())
    if ((E = nm)) (nm = !1), (rm = e), (im = r), (om = t)
    else
      for (Zh = o; null !== Zh; )
        (x = Zh.nextEffect),
          (Zh.nextEffect = null),
          8 & Zh.flags && (((C = Zh).sibling = null), (C.stateNode = null)),
          (Zh = x)
    if (0 !== (o = e.pendingLanes)) {
      if (null !== fm)
        for (x = fm, fm = null, C = 0; C < x.length; C++)
          Uw(e, x[C], e.memoizedInteractions)
      Bw(e, o)
    } else tm = null
    if (
      (E || $w(e, r),
      1 === o ? (e === cm ? sm++ : ((sm = 0), (cm = e))) : (sm = 0),
      (n = n.stateNode),
      _p && 'function' == typeof _p.onCommitFiberRoot)
    )
      try {
        _p.onCommitFiberRoot(Sp, n, t, 64 == (64 & n.current.flags))
      } catch (e) {}
    if ((fw(e, $p()), Jh)) throw ((Jh = !1), (e = em), (em = null), e)
    return 0 != (8 & Mh) || cv(), null
  }
  function Aw() {
    for (; null !== Zh; ) {
      var e = Zh.alternate
      ym ||
        null === mm ||
        (0 != (8 & Zh.flags)
          ? Ty(Zh, mm) && (ym = !0)
          : 13 === Zh.tag && iw(e, Zh) && Ty(Zh, mm) && (ym = !0))
      var t = Zh.flags
      0 != (256 & t) && Qb(e, Zh),
        0 == (512 & t) ||
          nm ||
          ((nm = !0),
          sv(97, function () {
            return Iw(), null
          })),
        (Zh = Zh.nextEffect)
    }
  }
  function Iw() {
    if (90 !== om) {
      var e = 97 < om ? 97 : om
      return (om = 90), uv(e, jw)
    }
    return !1
  }
  function Rw(e, t) {
    am.push(t, e),
      nm ||
        ((nm = !0),
        sv(97, function () {
          return Iw(), null
        }))
  }
  function Nw(e, t) {
    lm.push(t, e),
      nm ||
        ((nm = !0),
        sv(97, function () {
          return Iw(), null
        }))
  }
  function jw() {
    if (null === rm) return !1
    var e = rm,
      t = im
    if (((rm = null), (im = 0), 0 != (48 & Mh))) throw Error(Nm(331))
    var n = Mh
    Mh |= 32
    var r = Sw(e),
      o = lm
    lm = []
    for (var i = 0; i < o.length; i += 2) {
      var a = o[i],
        l = o[i + 1],
        u = a.destroy
      if (((a.destroy = void 0), 'function' == typeof u))
        try {
          u()
        } catch (e) {
          if (null === l) throw Error(Nm(330))
          Lw(l, e)
        }
    }
    for (o = am, am = [], i = 0; i < o.length; i += 2) {
      ;(a = o[i]), (l = o[i + 1])
      try {
        var s = a.create
        a.destroy = s()
      } catch (e) {
        if (null === l) throw Error(Nm(330))
        Lw(l, e)
      }
    }
    for (o = e.current.firstEffect; null !== o; )
      (s = o.nextEffect),
        (o.nextEffect = null),
        8 & o.flags && ((o.sibling = null), (o.stateNode = null)),
        (o = s)
    return (wc().__interactionsRef.current = r), $w(e, t), (Mh = n), cv(), !0
  }
  function zw(e, t, n) {
    kv(e, (t = Wb(0, (t = Vb(n, t)), 1))),
      (t = lw()),
      null !== (e = cw(e, 1)) && (Gy(e, 1, t), fw(e, t), Bw(e, 1))
  }
  function Lw(e, t) {
    if (3 === e.tag) zw(e, e, t)
    else
      for (var n = e.return; null !== n; ) {
        if (3 === n.tag) {
          zw(n, e, t)
          break
        }
        if (1 === n.tag) {
          var r = n.stateNode
          if (
            'function' == typeof n.type.getDerivedStateFromError ||
            ('function' == typeof r.componentDidCatch &&
              (null === tm || !tm.has(r)))
          ) {
            var o = Hb(n, (e = Vb(t, e)), 1)
            if ((kv(n, o), (o = lw()), null !== (n = cw(n, 1))))
              Gy(n, 1, o), fw(n, o), Bw(n, 1)
            else if (
              'function' == typeof r.componentDidCatch &&
              (null === tm || !tm.has(r))
            )
              try {
                r.componentDidCatch(t, e)
              } catch (e) {}
            break
          }
        }
        n = n.return
      }
  }
  function Mw(e, t, n) {
    var r = e.pingCache
    null !== r && r.delete(t),
      (t = lw()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Dh === e &&
        (Uh & n) === n &&
        (4 === $h || (3 === $h && (62914560 & Uh) === Uh && 500 > $p() - Xh)
          ? bw(e, 0)
          : (Gh |= n)),
      fw(e, t),
      Bw(e, n)
  }
  function Dw(e, t) {
    var n = e.stateNode
    null !== n && n.delete(t),
      0 === (t = 0) &&
        (0 == (2 & (t = e.mode))
          ? (t = 1)
          : 0 == (4 & t)
          ? (t = 99 === av() ? 1 : 2)
          : (0 === pm && (pm = Hh),
            0 === (t = qy(62914560 & ~pm)) && (t = 4194304))),
      (n = lw()),
      null !== (e = cw(e, t)) && (Gy(e, t, n), fw(e, n), Bw(e, t))
  }
  function Fw(e) {
    null === fm ? (fm = [e]) : fm.push(e)
  }
  function Uw(e, t, n) {
    if (0 < n.size) {
      var r = e.pendingInteractionMap,
        o = r.get(t)
      null != o
        ? n.forEach(function (e) {
            o.has(e) || e.__count++, o.add(e)
          })
        : (r.set(t, new Set(n)),
          n.forEach(function (e) {
            e.__count++
          })),
        null !== (r = wc().__subscriberRef.current) &&
          r.onWorkScheduled(n, 1e3 * t + e.interactionThreadID)
    }
  }
  function Bw(e, t) {
    Uw(e, t, wc().__interactionsRef.current)
  }
  function Vw(e, t) {
    var n = new Set()
    if (
      (e.pendingInteractionMap.forEach(function (e, r) {
        0 != (t & r) &&
          e.forEach(function (e) {
            return n.add(e)
          })
      }),
      (e.memoizedInteractions = n),
      0 < n.size)
    ) {
      var r = wc().__subscriberRef.current
      if (null !== r) {
        e = 1e3 * t + e.interactionThreadID
        try {
          r.onWorkStarted(n, e)
        } catch (e) {
          sv(99, function () {
            throw e
          })
        }
      }
    }
  }
  function $w(e, t) {
    var n = e.pendingLanes
    try {
      var r = wc().__subscriberRef.current
      null !== r &&
        0 < e.memoizedInteractions.size &&
        r.onWorkStopped(e.memoizedInteractions, 1e3 * t + e.interactionThreadID)
    } catch (e) {
      sv(99, function () {
        throw e
      })
    } finally {
      var o = e.pendingInteractionMap
      o.forEach(function (e, t) {
        0 == (n & t) &&
          (o.delete(t),
          e.forEach(function (e) {
            if ((e.__count--, null !== r && 0 === e.__count))
              try {
                r.onInteractionScheduledWorkCompleted(e)
              } catch (e) {
                sv(99, function () {
                  throw e
                })
              }
          }))
      })
    }
  }
  function Ww(e, t, n, r) {
    ;(this.tag = e),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.flags = 0),
      (this.lastEffect = this.firstEffect = this.nextEffect = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null),
      (this.actualDuration = 0),
      (this.actualStartTime = -1),
      (this.treeBaseDuration = this.selfBaseDuration = 0)
  }
  function Hw(e, t, n, r) {
    return new Ww(e, t, n, r)
  }
  function qw(e) {
    return !(!(e = e.prototype) || !e.isReactComponent)
  }
  function Qw(e, t) {
    var n = e.alternate
    return (
      null === n
        ? (((n = Hw(e.tag, t, e.key, e.mode)).elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.nextEffect = null),
          (n.firstEffect = null),
          (n.lastEffect = null),
          (n.actualDuration = 0),
          (n.actualStartTime = -1)),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.selfBaseDuration = e.selfBaseDuration),
      (n.treeBaseDuration = e.treeBaseDuration),
      n
    )
  }
  function Gw(e, t, n, r, o, i) {
    var a = 2
    if (((r = e), 'function' == typeof e)) qw(e) && (a = 1)
    else if ('string' == typeof e) a = 5
    else
      e: switch (e) {
        case Lc:
          return Kw(n.children, o, i, t)
        case Gc:
          ;(a = 8), (o |= 16)
          break
        case Mc:
          ;(a = 8), (o |= 1)
          break
        case Dc:
          return (
            ((e = Hw(12, n, t, 8 | o)).elementType = Dc),
            (e.type = Dc),
            (e.lanes = i),
            (e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
            e
          )
        case Vc:
          return (
            ((e = Hw(13, n, t, o)).type = Vc),
            (e.elementType = Vc),
            (e.lanes = i),
            e
          )
        case $c:
          return ((e = Hw(19, n, t, o)).elementType = $c), (e.lanes = i), e
        case Kc:
          return Xw(n, o, i, t)
        case Xc:
          return ((e = Hw(24, n, t, o)).elementType = Xc), (e.lanes = i), e
        default:
          if ('object' == typeof e && null !== e)
            switch (e.$$typeof) {
              case Fc:
                a = 10
                break e
              case Uc:
                a = 9
                break e
              case Bc:
                a = 11
                break e
              case Wc:
                a = 14
                break e
              case Hc:
                ;(a = 16), (r = null)
                break e
              case qc:
                a = 22
                break e
            }
          throw Error(Nm(130, null == e ? e : typeof e, ''))
      }
    return (
      ((t = Hw(a, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t
    )
  }
  function Kw(e, t, n, r) {
    return ((e = Hw(7, e, r, t)).lanes = n), e
  }
  function Xw(e, t, n, r) {
    return ((e = Hw(23, e, r, t)).elementType = Kc), (e.lanes = n), e
  }
  function Yw(e, t, n) {
    return ((e = Hw(6, e, null, t)).lanes = n), e
  }
  function Zw(e, t, n) {
    return (
      ((t = Hw(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  function Jw(e, t, n) {
    ;(this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.pendingContext = this.context = null),
      (this.hydrate = n),
      (this.callbackNode = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Qy(0)),
      (this.expirationTimes = Qy(-1)),
      (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
      (this.entanglements = Qy(0)),
      (this.mutableSourceEagerHydrationData = null),
      (this.interactionThreadID = wc().unstable_getThreadID()),
      (this.memoizedInteractions = new Set()),
      (this.pendingInteractionMap = new Map())
  }
  function ek(e, t, n) {
    var r =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
    return {
      $$typeof: zc,
      key: null == r ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    }
  }
  function tk(e, t, n, r) {
    var o = t.current,
      i = lw(),
      a = uw(o)
    e: if (n) {
      t: {
        if (xy((n = n._reactInternals)) !== n || 1 !== n.tag)
          throw Error(Nm(170))
        var l = n
        do {
          switch (l.tag) {
            case 3:
              l = l.stateNode.context
              break t
            case 1:
              if (ev(l.type)) {
                l = l.stateNode.__reactInternalMemoizedMergedChildContext
                break t
              }
          }
          l = l.return
        } while (null !== l)
        throw Error(Nm(171))
      }
      if (1 === n.tag) {
        var u = n.type
        if (ev(u)) {
          n = rv(n, u, l)
          break e
        }
      }
      n = l
    } else n = vp
    return (
      null === t.context ? (t.context = n) : (t.pendingContext = n),
      ((t = wv(i, a)).payload = { element: e }),
      null !== (r = void 0 === r ? null : r) && (t.callback = r),
      kv(o, t),
      sw(o, a, i),
      a
    )
  }
  function nk(e) {
    if (!(e = e.current).child) return null
    switch (e.child.tag) {
      case 5:
      default:
        return e.child.stateNode
    }
  }
  function rk(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane
      e.retryLane = 0 !== n && n < t ? n : t
    }
  }
  function ok(e, t) {
    rk(e, t), (e = e.alternate) && rk(e, t)
  }
  function ik() {
    return null
  }
  function ak(e, t, n) {
    var r =
      (null != n &&
        null != n.hydrationOptions &&
        n.hydrationOptions.mutableSources) ||
      null
    if (
      ((n = new Jw(e, t, null != n && !0 === n.hydrate)),
      (t = 2 === t ? 7 : 1 === t ? 3 : 0),
      Ep && (t |= 8),
      (t = Hw(3, null, null, t)),
      (n.current = t),
      (t.stateNode = n),
      vv(t),
      (e[hp] = n.current),
      Ig(8 === e.nodeType ? e.parentNode : e),
      r)
    )
      for (e = 0; e < r.length; e++) {
        var o = (t = r[e])._getVersion
        ;(o = o(t._source)),
          null == n.mutableSourceEagerHydrationData
            ? (n.mutableSourceEagerHydrationData = [t, o])
            : n.mutableSourceEagerHydrationData.push(t, o)
      }
    this._internalRoot = n
  }
  function lk(e) {
    return !(
      !e ||
      (1 !== e.nodeType &&
        9 !== e.nodeType &&
        11 !== e.nodeType &&
        (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    )
  }
  function uk(e, t, n, r, o) {
    var i = n._reactRootContainer
    if (i) {
      var a = i._internalRoot
      if ('function' == typeof o) {
        var l = o
        o = function () {
          var e = nk(a)
          l.call(e)
        }
      }
      tk(t, a, e, o)
    } else {
      if (
        ((i = n._reactRootContainer = (function (e, t) {
          if (
            (t ||
              (t = !(
                !(t = e
                  ? 9 === e.nodeType
                    ? e.documentElement
                    : e.firstChild
                  : null) ||
                1 !== t.nodeType ||
                !t.hasAttribute('data-reactroot')
              )),
            !t)
          )
            for (var n; (n = e.lastChild); ) e.removeChild(n)
          return new ak(e, 0, t ? { hydrate: !0 } : void 0)
        })(n, r)),
        (a = i._internalRoot),
        'function' == typeof o)
      ) {
        var u = o
        o = function () {
          var e = nk(a)
          u.call(e)
        }
      }
      yw(function () {
        tk(t, a, e, o)
      })
    }
    return nk(a)
  }
  function sk(e, t) {
    var n =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
    if (!lk(t)) throw Error(Nm(200))
    return ek(e, t, null, n)
  }
  function ck() {
    if (((kc = {}), (Sc = Ku()), (_c = Fl()), Xs(), wc(), !Sc))
      throw Error(Nm(227))
    var e
    if (
      ((Ec = new Set()),
      (xc = {}),
      (Cc = !(
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      )),
      (Pc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (Oc = Object.prototype.hasOwnProperty),
      (Tc = {}),
      (Ac = {}),
      (Ic = {}),
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function (e) {
          Ic[e] = new Lm(e, 0, !1, e, null, !1, !1)
        }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
      ].forEach(function (e) {
        var t = e[0]
        Ic[t] = new Lm(t, 1, !1, e[1], null, !1, !1)
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
        e
      ) {
        Ic[e] = new Lm(e, 2, !1, e.toLowerCase(), null, !1, !1)
      }),
      [
        'autoReverse',
        'externalResourcesRequired',
        'focusable',
        'preserveAlpha',
      ].forEach(function (e) {
        Ic[e] = new Lm(e, 2, !1, e, null, !1, !1)
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
          Ic[e] = new Lm(e, 3, !1, e.toLowerCase(), null, !1, !1)
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        Ic[e] = new Lm(e, 3, !0, e, null, !1, !1)
      }),
      ['capture', 'download'].forEach(function (e) {
        Ic[e] = new Lm(e, 4, !1, e, null, !1, !1)
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        Ic[e] = new Lm(e, 6, !1, e, null, !1, !1)
      }),
      ['rowSpan', 'start'].forEach(function (e) {
        Ic[e] = new Lm(e, 5, !1, e.toLowerCase(), null, !1, !1)
      }),
      (Rc = /[\-:]([a-z])/g),
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(Rc, Mm)
          Ic[t] = new Lm(t, 1, !1, e, null, !1, !1)
        }),
      'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(Rc, Mm)
          Ic[t] = new Lm(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
        }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(Rc, Mm)
        Ic[t] = new Lm(
          t,
          1,
          !1,
          e,
          'http://www.w3.org/XML/1998/namespace',
          !1,
          !1
        )
      }),
      ['tabIndex', 'crossOrigin'].forEach(function (e) {
        Ic[e] = new Lm(e, 1, !1, e.toLowerCase(), null, !1, !1)
      }),
      (Ic.xlinkHref = new Lm(
        'xlinkHref',
        1,
        !1,
        'xlink:href',
        'http://www.w3.org/1999/xlink',
        !0,
        !1
      )),
      ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        Ic[e] = new Lm(e, 1, !1, e.toLowerCase(), null, !0, !0)
      }),
      (Nc = Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
      (jc = 60103),
      (zc = 60106),
      (Lc = 60107),
      (Mc = 60108),
      (Dc = 60114),
      (Fc = 60109),
      (Uc = 60110),
      (Bc = 60112),
      (Vc = 60113),
      ($c = 60120),
      (Wc = 60115),
      (Hc = 60116),
      (qc = 60121),
      (Qc = 60128),
      (Gc = 60129),
      (Kc = 60130),
      (Xc = 60131),
      'function' == typeof Symbol &&
        Symbol.for &&
        ((Yc = Symbol.for),
        (jc = Yc('react.element')),
        (zc = Yc('react.portal')),
        (Lc = Yc('react.fragment')),
        (Mc = Yc('react.strict_mode')),
        (Dc = Yc('react.profiler')),
        (Fc = Yc('react.provider')),
        (Uc = Yc('react.context')),
        (Bc = Yc('react.forward_ref')),
        (Vc = Yc('react.suspense')),
        ($c = Yc('react.suspense_list')),
        (Wc = Yc('react.memo')),
        (Hc = Yc('react.lazy')),
        (qc = Yc('react.block')),
        Yc('react.scope'),
        (Qc = Yc('react.opaque.id')),
        (Gc = Yc('react.debug_trace_mode')),
        (Kc = Yc('react.offscreen')),
        (Xc = Yc('react.legacy_hidden'))),
      (Zc = 'function' == typeof Symbol && Symbol.iterator),
      (ef = !1),
      (tf = {
        html: 'http://www.w3.org/1999/xhtml',
        mathml: 'http://www.w3.org/1998/Math/MathML',
        svg: 'http://www.w3.org/2000/svg',
      }),
      (e = function (e, t) {
        if (e.namespaceURI !== tf.svg || 'innerHTML' in e) e.innerHTML = t
        else {
          for (
            (nf = nf || document.createElement('div')).innerHTML =
              '<svg>' + t.valueOf().toString() + '</svg>',
              t = nf.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild)
          for (; t.firstChild; ) e.appendChild(t.firstChild)
        }
      }),
      (rf =
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, o) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n)
              })
            }
          : e),
      (of = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (af = ['Webkit', 'ms', 'Moz', 'O']),
      Object.keys(of).forEach(function (e) {
        af.forEach(function (t) {
          ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (of[t] = of[e])
        })
      }),
      (lf = _c(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      )),
      (uf = null),
      (sf = null),
      (cf = null),
      (ff = vy),
      (df = !1),
      (pf = !1),
      (hf = !1),
      Cc)
    )
      try {
        ;(mf = {}),
          Object.defineProperty(mf, 'passive', {
            get: function () {
              hf = !0
            },
          }),
          window.addEventListener('test', mf, mf),
          window.removeEventListener('test', mf, mf)
      } catch (e) {
        hf = !1
      }
    if (
      ((yf = !1),
      (gf = null),
      (vf = !1),
      (bf = null),
      (wf = {
        onError: function (e) {
          ;(yf = !0), (gf = e)
        },
      }),
      (xf = !1),
      (Cf = []),
      (Pf = null),
      (Of = null),
      (Tf = null),
      (Af = new Map()),
      (If = new Map()),
      (Rf = []),
      (Nf = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      )),
      (jf = {
        animationend: Fy('Animation', 'AnimationEnd'),
        animationiteration: Fy('Animation', 'AnimationIteration'),
        animationstart: Fy('Animation', 'AnimationStart'),
        transitionend: Fy('Transition', 'TransitionEnd'),
      }),
      (zf = {}),
      (Lf = {}),
      Cc &&
        ((Lf = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete jf.animationend.animation,
          delete jf.animationiteration.animation,
          delete jf.animationstart.animation),
        'TransitionEvent' in window || delete jf.transitionend.transition),
      (Mf = Uy('animationend')),
      (Df = Uy('animationiteration')),
      (Ff = Uy('animationstart')),
      (Uf = Uy('transitionend')),
      (Bf = new Map()),
      (Vf = new Map()),
      ($f = [
        'abort',
        'abort',
        Mf,
        'animationEnd',
        Df,
        'animationIteration',
        Ff,
        'animationStart',
        'canplay',
        'canPlay',
        'canplaythrough',
        'canPlayThrough',
        'durationchange',
        'durationChange',
        'emptied',
        'emptied',
        'encrypted',
        'encrypted',
        'ended',
        'ended',
        'error',
        'error',
        'gotpointercapture',
        'gotPointerCapture',
        'load',
        'load',
        'loadeddata',
        'loadedData',
        'loadedmetadata',
        'loadedMetadata',
        'loadstart',
        'loadStart',
        'lostpointercapture',
        'lostPointerCapture',
        'playing',
        'playing',
        'progress',
        'progress',
        'seeking',
        'seeking',
        'stalled',
        'stalled',
        'suspend',
        'suspend',
        'timeupdate',
        'timeUpdate',
        Uf,
        'transitionEnd',
        'waiting',
        'waiting',
      ]),
      (Wf = Xs().unstable_now),
      null == wc().__interactionsRef || null == wc().__interactionsRef.current)
    )
      throw Error(Nm(302))
    Wf(),
      (Hf = 8),
      (qf = Math.clz32 ? Math.clz32 : Ky),
      (Qf = Math.log),
      (Gf = Math.LN2),
      (Kf = Xs().unstable_UserBlockingPriority),
      (Xf = Xs().unstable_runWithPriority),
      (Yf = !0),
      (Zf = null),
      (Jf = null),
      (ed = null),
      (nd = og(
        (td = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now()
          },
          defaultPrevented: 0,
          isTrusted: 0,
        })
      )),
      (rd = _c({}, td, { view: 0, detail: 0 })),
      (od = og(rd)),
      (ud = _c({}, rd, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ag,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget
        },
        movementX: function (e) {
          return 'movementX' in e
            ? e.movementX
            : (e !== ld &&
                (ld && 'mousemove' === e.type
                  ? ((id = e.screenX - ld.screenX),
                    (ad = e.screenY - ld.screenY))
                  : (ad = id = 0),
                (ld = e)),
              id)
        },
        movementY: function (e) {
          return 'movementY' in e ? e.movementY : ad
        },
      })),
      (sd = og(ud)),
      (cd = _c({}, ud, { dataTransfer: 0 })),
      (fd = og(cd)),
      (dd = _c({}, rd, { relatedTarget: 0 })),
      (pd = og(dd)),
      (hd = _c({}, td, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      (md = og(hd)),
      (yd = _c({}, td, {
        clipboardData: function (e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData
        },
      })),
      (gd = og(yd)),
      (vd = _c({}, td, { data: 0 })),
      (bd = og(vd)),
      (wd = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      }),
      (kd = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      }),
      (Sd = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
      }),
      (_d = _c({}, rd, {
        key: function (e) {
          if (e.key) {
            var t = wd[e.key] || e.key
            if ('Unidentified' !== t) return t
          }
          return 'keypress' === e.type
            ? 13 === (e = tg(e))
              ? 'Enter'
              : String.fromCharCode(e)
            : 'keydown' === e.type || 'keyup' === e.type
            ? kd[e.keyCode] || 'Unidentified'
            : ''
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ag,
        charCode: function (e) {
          return 'keypress' === e.type ? tg(e) : 0
        },
        keyCode: function (e) {
          return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0
        },
        which: function (e) {
          return 'keypress' === e.type
            ? tg(e)
            : 'keydown' === e.type || 'keyup' === e.type
            ? e.keyCode
            : 0
        },
      })),
      (Ed = og(_d)),
      (xd = _c({}, ud, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      })),
      (Cd = og(xd)),
      (Pd = _c({}, rd, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ag,
      })),
      (Od = og(Pd)),
      (Td = _c({}, td, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      (Ad = og(Td)),
      (Id = _c({}, ud, {
        deltaX: function (e) {
          return 'deltaX' in e
            ? e.deltaX
            : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0
        },
        deltaY: function (e) {
          return 'deltaY' in e
            ? e.deltaY
            : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0
        },
        deltaZ: 0,
        deltaMode: 0,
      })),
      (Rd = og(Id)),
      (Nd = [9, 13, 27, 32]),
      (jd = Cc && 'CompositionEvent' in window),
      (zd = null),
      Cc && 'documentMode' in document && (zd = document.documentMode),
      (Ld = Cc && 'TextEvent' in window && !zd),
      (Md = Cc && (!jd || (zd && 8 < zd && 11 >= zd))),
      (Dd = String.fromCharCode(32)),
      (Fd = !1),
      (Ud = !1),
      (Bd = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      }),
      (Vd = null),
      ($d = null),
      (Wd = !1),
      Cc &&
        (Cc
          ? ((qd = 'oninput' in document) ||
              ((Qd = document.createElement('div')).setAttribute(
                'oninput',
                'return;'
              ),
              (qd = 'function' == typeof Qd.oninput)),
            (Hd = qd))
          : (Hd = !1),
        (Wd = Hd && (!document.documentMode || 9 < document.documentMode))),
      (Gd = 'function' == typeof Object.is ? Object.is : wg),
      (Kd = Object.prototype.hasOwnProperty),
      (Xd = Cc && 'documentMode' in document && 11 >= document.documentMode),
      (Yd = null),
      (Zd = null),
      (Jd = null),
      (ep = !1),
      By(
        'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
          ' '
        ),
        0
      ),
      By(
        'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
          ' '
        ),
        1
      ),
      By($f, 2)
    for (
      tp = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' '
      ),
        np = 0;
      np < tp.length;
      np++
    )
      Vf.set(tp[np], 0)
    if (
      (zm('onMouseEnter', ['mouseout', 'mouseover']),
      zm('onMouseLeave', ['mouseout', 'mouseover']),
      zm('onPointerEnter', ['pointerout', 'pointerover']),
      zm('onPointerLeave', ['pointerout', 'pointerover']),
      jm(
        'onChange',
        'change click focusin focusout input keydown keyup selectionchange'.split(
          ' '
        )
      ),
      jm(
        'onSelect',
        'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
          ' '
        )
      ),
      jm('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      jm(
        'onCompositionEnd',
        'compositionend focusout keydown keypress keyup mousedown'.split(' ')
      ),
      jm(
        'onCompositionStart',
        'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
      ),
      jm(
        'onCompositionUpdate',
        'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
      ),
      (rp = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      )),
      (op = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(rp)
      )),
      (ip = '_reactListening' + Math.random().toString(36).slice(2)),
      (ap = null),
      (lp = null),
      (up = 'function' == typeof setTimeout ? setTimeout : void 0),
      (sp = 'function' == typeof clearTimeout ? clearTimeout : void 0),
      (cp = 0),
      (fp = Math.random().toString(36).slice(2)),
      (dp = '__reactFiber$' + fp),
      (pp = '__reactProps$' + fp),
      (hp = '__reactContainer$' + fp),
      (mp = '__reactEvents$' + fp),
      (yp = []),
      (gp = -1),
      (bp = Xg((vp = {}))),
      (wp = Xg(!1)),
      (kp = vp),
      (Sp = null),
      (_p = null),
      (Ep = 'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__),
      (xp = Xs().unstable_runWithPriority),
      (Cp = Xs().unstable_scheduleCallback),
      (Pp = Xs().unstable_cancelCallback),
      (Op = Xs().unstable_shouldYield),
      (Tp = Xs().unstable_requestPaint),
      (Ap = Xs().unstable_now),
      (Ip = Xs().unstable_getCurrentPriorityLevel),
      (Rp = Xs().unstable_ImmediatePriority),
      (Np = Xs().unstable_UserBlockingPriority),
      (jp = Xs().unstable_NormalPriority),
      (zp = Xs().unstable_LowPriority),
      (Lp = Xs().unstable_IdlePriority),
      null == wc().__interactionsRef || null == wc().__interactionsRef.current)
    )
      throw Error(Nm(302))
    if (
      ((Mp = {}),
      (Dp = void 0 !== Tp ? Tp : function () {}),
      (Fp = null),
      (Up = null),
      (Bp = !1),
      (Vp = Ap()),
      ($p =
        1e4 > Vp
          ? Ap
          : function () {
              return Ap() - Vp
            }),
      (Wp = Nc.ReactCurrentBatchConfig),
      (Hp = Xg(null)),
      (qp = null),
      (Qp = null),
      (Gp = null),
      (Kp = !1),
      (Xp = new Sc.Component().refs),
      (Yp = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && xy(e) === e
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals
          var r = lw(),
            o = uw(e),
            i = wv(r, o)
          ;(i.payload = t), null != n && (i.callback = n), kv(e, i), sw(e, o, r)
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals
          var r = lw(),
            o = uw(e),
            i = wv(r, o)
          ;(i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            kv(e, i),
            sw(e, o, r)
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals
          var n = lw(),
            r = uw(e),
            o = wv(n, r)
          ;(o.tag = 2), null != t && (o.callback = t), kv(e, o), sw(e, r, n)
        },
      }),
      (Zp = Array.isArray),
      (Jp = Rv(!0)),
      (eh = Rv(!1)),
      (nh = Xg((th = {}))),
      (rh = Xg(th)),
      (oh = Xg(th)),
      (ih = Xg(0)),
      (ah = null),
      (lh = null),
      (uh = !1),
      (sh = []),
      (ch = Nc.ReactCurrentDispatcher),
      (fh = Nc.ReactCurrentBatchConfig),
      (dh = 0),
      (ph = null),
      (hh = null),
      (mh = null),
      (yh = !1),
      (gh = !1),
      (vh = {
        readContext: gv,
        useCallback: qv,
        useContext: qv,
        useEffect: qv,
        useImperativeHandle: qv,
        useLayoutEffect: qv,
        useMemo: qv,
        useReducer: qv,
        useRef: qv,
        useState: qv,
        useDebugValue: qv,
        useDeferredValue: qv,
        useTransition: qv,
        useMutableSource: qv,
        useOpaqueIdentifier: qv,
        unstable_isNewReconciler: !1,
      }),
      (bh = {
        readContext: gv,
        useCallback: function (e, t) {
          return (Kv().memoizedState = [e, void 0 === t ? null : t]), e
        },
        useContext: gv,
        useEffect: sb,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            lb(4, 2, db.bind(null, t, e), n)
          )
        },
        useLayoutEffect: function (e, t) {
          return lb(4, 2, e, t)
        },
        useMemo: function (e, t) {
          var n = Kv()
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          )
        },
        useReducer: function (e, t, n) {
          var r = Kv()
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = (e = r.queue = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }).dispatch = vb.bind(null, ph, e)),
            [r.memoizedState, e]
          )
        },
        useRef: ib,
        useState: rb,
        useDebugValue: hb,
        useDeferredValue: function (e) {
          var t = rb(e),
            n = t[0],
            r = t[1]
          return (
            sb(
              function () {
                var t = fh.transition
                fh.transition = 1
                try {
                  r(e)
                } finally {
                  fh.transition = t
                }
              },
              [e]
            ),
            n
          )
        },
        useTransition: function () {
          var e = rb(!1),
            t = e[0]
          return ib((e = gb.bind(null, e[1]))), [e, t]
        },
        useMutableSource: function (e, t, n) {
          var r = Kv()
          return (
            (r.memoizedState = {
              refs: { getSnapshot: t, setSnapshot: null },
              source: e,
              subscribe: n,
            }),
            tb(r, e, t, n)
          )
        },
        useOpaqueIdentifier: function () {
          if (uh) {
            var e = !1,
              t = (function (e) {
                return { $$typeof: Qc, toString: e, valueOf: e }
              })(function () {
                throw (
                  (e || ((e = !0), n('r:' + (cp++).toString(36))),
                  Error(Nm(355)))
                )
              }),
              n = rb(t)[1]
            return (
              0 == (2 & ph.mode) &&
                ((ph.flags |= 516),
                ob(
                  5,
                  function () {
                    n('r:' + (cp++).toString(36))
                  },
                  void 0,
                  null
                )),
              t
            )
          }
          return rb((t = 'r:' + (cp++).toString(36))), t
        },
        unstable_isNewReconciler: !1,
      }),
      (wh = {
        readContext: gv,
        useCallback: mb,
        useContext: gv,
        useEffect: cb,
        useImperativeHandle: pb,
        useLayoutEffect: fb,
        useMemo: yb,
        useReducer: Zv,
        useRef: ab,
        useState: function () {
          return Zv(Yv)
        },
        useDebugValue: hb,
        useDeferredValue: function (e) {
          var t = Zv(Yv),
            n = t[0],
            r = t[1]
          return (
            cb(
              function () {
                var t = fh.transition
                fh.transition = 1
                try {
                  r(e)
                } finally {
                  fh.transition = t
                }
              },
              [e]
            ),
            n
          )
        },
        useTransition: function () {
          var e = Zv(Yv)[0]
          return [ab().current, e]
        },
        useMutableSource: nb,
        useOpaqueIdentifier: function () {
          return Zv(Yv)[0]
        },
        unstable_isNewReconciler: !1,
      }),
      (kh = {
        readContext: gv,
        useCallback: mb,
        useContext: gv,
        useEffect: cb,
        useImperativeHandle: pb,
        useLayoutEffect: fb,
        useMemo: yb,
        useReducer: Jv,
        useRef: ab,
        useState: function () {
          return Jv(Yv)
        },
        useDebugValue: hb,
        useDeferredValue: function (e) {
          var t = Jv(Yv),
            n = t[0],
            r = t[1]
          return (
            cb(
              function () {
                var t = fh.transition
                fh.transition = 1
                try {
                  r(e)
                } finally {
                  fh.transition = t
                }
              },
              [e]
            ),
            n
          )
        },
        useTransition: function () {
          var e = Jv(Yv)[0]
          return [ab().current, e]
        },
        useMutableSource: nb,
        useOpaqueIdentifier: function () {
          return Jv(Yv)[0]
        },
        unstable_isNewReconciler: !1,
      }),
      (Sh = Xs().unstable_now),
      (_h = 0),
      (Eh = -1),
      (xh = Nc.ReactCurrentOwner),
      (Ch = !1),
      (Ph = { dehydrated: null, retryLane: 0 }),
      (Oh = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode)
          else if (4 !== n.tag && null !== n.child) {
            ;(n.child.return = n), (n = n.child)
            continue
          }
          if (n === t) break
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return
            n = n.return
          }
          ;(n.sibling.return = n.return), (n = n.sibling)
        }
      }),
      (Th = function () {}),
      (Ah = function (e, t, n, r) {
        var o = e.memoizedProps
        if (o !== r) {
          ;(e = t.stateNode), Nv(nh.current)
          var i,
            a = null
          switch (n) {
            case 'input':
              ;(o = Km(e, o)), (r = Km(e, r)), (a = [])
              break
            case 'option':
              ;(o = ty(e, o)), (r = ty(e, r)), (a = [])
              break
            case 'select':
              ;(o = _c({}, o, { value: void 0 })),
                (r = _c({}, r, { value: void 0 })),
                (a = [])
              break
            case 'textarea':
              ;(o = ry(e, o)), (r = ry(e, r)), (a = [])
              break
            default:
              'function' != typeof o.onClick &&
                'function' == typeof r.onClick &&
                (e.onclick = Fg)
          }
          for (s in (dy(n, r), (n = null), o))
            if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
              if ('style' === s) {
                var l = o[s]
                for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
              } else
                'dangerouslySetInnerHTML' !== s &&
                  'children' !== s &&
                  'suppressContentEditableWarning' !== s &&
                  'suppressHydrationWarning' !== s &&
                  'autoFocus' !== s &&
                  (xc.hasOwnProperty(s)
                    ? a || (a = [])
                    : (a = a || []).push(s, null))
          for (s in r) {
            var u = r[s]
            if (
              ((l = null != o ? o[s] : void 0),
              r.hasOwnProperty(s) && u !== l && (null != u || null != l))
            )
              if ('style' === s)
                if (l) {
                  for (i in l)
                    !l.hasOwnProperty(i) ||
                      (u && u.hasOwnProperty(i)) ||
                      (n || (n = {}), (n[i] = ''))
                  for (i in u)
                    u.hasOwnProperty(i) &&
                      l[i] !== u[i] &&
                      (n || (n = {}), (n[i] = u[i]))
                } else n || (a || (a = []), a.push(s, n)), (n = u)
              else
                'dangerouslySetInnerHTML' === s
                  ? ((u = u ? u.__html : void 0),
                    (l = l ? l.__html : void 0),
                    null != u && l !== u && (a = a || []).push(s, u))
                  : 'children' === s
                  ? ('string' != typeof u && 'number' != typeof u) ||
                    (a = a || []).push(s, '' + u)
                  : 'suppressContentEditableWarning' !== s &&
                    'suppressHydrationWarning' !== s &&
                    (xc.hasOwnProperty(s)
                      ? (null != u && 'onScroll' === s && Ag('scroll', e),
                        a || l === u || (a = []))
                      : 'object' == typeof u && null !== u && u.$$typeof === Qc
                      ? u.toString()
                      : (a = a || []).push(s, u))
          }
          n && (a = a || []).push('style', n)
          var s = a
          ;(t.updateQueue = s) && (t.flags |= 4)
        }
      }),
      (Ih = function (e, t, n, r) {
        n !== r && (t.flags |= 4)
      }),
      (Rh = 'function' == typeof WeakMap ? WeakMap : Map),
      (Nh = 'function' == typeof WeakSet ? WeakSet : Set),
      (jh = Math.ceil),
      (zh = Nc.ReactCurrentDispatcher),
      (Lh = Nc.ReactCurrentOwner),
      (Mh = 0),
      (Dh = null),
      (Fh = null),
      (Uh = 0),
      (Bh = 0),
      (Vh = Xg(0)),
      ($h = 0),
      (Wh = null),
      (Hh = 0),
      (qh = 0),
      (Qh = 0),
      (Gh = 0),
      (Kh = null),
      (Xh = 0),
      (Yh = 1 / 0),
      (Zh = null),
      (Jh = !1),
      (em = null),
      (tm = null),
      (nm = !1),
      (rm = null),
      (om = 90),
      (im = 0),
      (am = []),
      (lm = []),
      (um = null),
      (sm = 0),
      (cm = null),
      (fm = null),
      (dm = -1),
      (pm = 0),
      (hm = 0),
      (mm = null),
      (ym = !1),
      (gm = function (e, t, n) {
        var r = t.lanes
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || wp.current) Ch = !0
          else {
            if (0 == (n & r)) {
              switch (((Ch = !1), t.tag)) {
                case 3:
                  Ab(t), Wv()
                  break
                case 5:
                  Lv(t)
                  break
                case 1:
                  ev(t.type) && ov(t)
                  break
                case 4:
                  jv(t, t.stateNode.containerInfo)
                  break
                case 10:
                  r = t.memoizedProps.value
                  var o = t.type._context
                  Zg(Hp, o._currentValue), (o._currentValue = r)
                  break
                case 12:
                  0 != (n & t.childLanes) && (t.flags |= 4),
                    ((r = t.stateNode).effectDuration = 0),
                    (r.passiveEffectDuration = 0)
                  break
                case 13:
                  if (null !== t.memoizedState)
                    return 0 != (n & t.child.childLanes)
                      ? Ib(e, t, n)
                      : (Zg(ih, 1 & ih.current),
                        null !== (t = Db(e, t, n)) ? t.sibling : null)
                  Zg(ih, 1 & ih.current)
                  break
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                    if (r) return Mb(e, t, n)
                    t.flags |= 64
                  }
                  if (
                    (null !== (o = t.memoizedState) &&
                      ((o.rendering = null),
                      (o.tail = null),
                      (o.lastEffect = null)),
                    Zg(ih, ih.current),
                    r)
                  )
                    break
                  return null
                case 23:
                case 24:
                  return (t.lanes = 0), xb(e, t, n)
              }
              return Db(e, t, n)
            }
            Ch = 0 != (16384 & e.flags)
          }
        else Ch = !1
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (o = Jg(t, bp.current)),
              yv(t, n),
              (o = Gv(null, t, r, e, o, n)),
              (t.flags |= 1),
              'object' == typeof o &&
                null !== o &&
                'function' == typeof o.render &&
                void 0 === o.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ev(r))
              ) {
                var i = !0
                ov(t)
              } else i = !1
              ;(t.memoizedState =
                null !== o.state && void 0 !== o.state ? o.state : null),
                vv(t)
              var a = r.getDerivedStateFromProps
              'function' == typeof a && xv(t, r, a, e),
                (o.updater = Yp),
                (t.stateNode = o),
                (o._reactInternals = t),
                Tv(t, r, e, n),
                (t = Tb(null, t, r, !0, i, n))
            } else (t.tag = 0), kb(null, t, o, n), (t = t.child)
            return t
          case 16:
            o = t.elementType
            e: {
              switch (
                (null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = (i = o._init)(o._payload)),
                (t.type = o),
                (i = t.tag = (function (e) {
                  if ('function' == typeof e) return qw(e) ? 1 : 0
                  if (null != e) {
                    if ((e = e.$$typeof) === Bc) return 11
                    if (e === Wc) return 14
                  }
                  return 2
                })(o)),
                (e = dv(o, e)),
                i)
              ) {
                case 0:
                  t = Pb(null, t, o, e, n)
                  break e
                case 1:
                  t = Ob(null, t, o, e, n)
                  break e
                case 11:
                  t = Sb(null, t, o, e, n)
                  break e
                case 14:
                  t = _b(null, t, o, dv(o.type, e), r, n)
                  break e
              }
              throw Error(Nm(306, o, ''))
            }
            return t
          case 0:
            return (
              (r = t.type),
              (o = t.pendingProps),
              Pb(e, t, r, (o = t.elementType === r ? o : dv(r, o)), n)
            )
          case 1:
            return (
              (r = t.type),
              (o = t.pendingProps),
              Ob(e, t, r, (o = t.elementType === r ? o : dv(r, o)), n)
            )
          case 3:
            if ((Ab(t), (r = t.updateQueue), null === e || null === r))
              throw Error(Nm(282))
            if (
              ((r = t.pendingProps),
              (o = null !== (o = t.memoizedState) ? o.element : null),
              bv(e, t),
              _v(t, r, null, n),
              (r = t.memoizedState.element) === o)
            )
              Wv(), (t = Db(e, t, n))
            else {
              if (
                ((i = (o = t.stateNode).hydrate) &&
                  ((lh = $g(t.stateNode.containerInfo.firstChild)),
                  (ah = t),
                  (i = uh = !0)),
                i)
              ) {
                if (null != (e = o.mutableSourceEagerHydrationData))
                  for (o = 0; o < e.length; o += 2)
                    ((i = e[o])._workInProgressVersionPrimary = e[o + 1]),
                      sh.push(i)
                for (n = eh(t, null, r, n), t.child = n; n; )
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling)
              } else kb(e, t, r, n), Wv()
              t = t.child
            }
            return t
          case 5:
            return (
              Lv(t),
              null === e && Bv(t),
              (r = t.type),
              (o = t.pendingProps),
              (i = null !== e ? e.memoizedProps : null),
              (a = o.children),
              Bg(r, o) ? (a = null) : null !== i && Bg(r, i) && (t.flags |= 16),
              Cb(e, t),
              kb(e, t, a, n),
              t.child
            )
          case 6:
            return null === e && Bv(t), null
          case 13:
            return Ib(e, t, n)
          case 4:
            return (
              jv(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Jp(t, null, r, n)) : kb(e, t, r, n),
              t.child
            )
          case 11:
            return (
              (r = t.type),
              (o = t.pendingProps),
              Sb(e, t, r, (o = t.elementType === r ? o : dv(r, o)), n)
            )
          case 7:
            return kb(e, t, t.pendingProps, n), t.child
          case 8:
            return kb(e, t, t.pendingProps.children, n), t.child
          case 12:
            return (
              (t.flags |= 4),
              ((r = t.stateNode).effectDuration = 0),
              (r.passiveEffectDuration = 0),
              kb(e, t, t.pendingProps.children, n),
              t.child
            )
          case 10:
            e: {
              ;(r = t.type._context),
                (o = t.pendingProps),
                (a = t.memoizedProps),
                (i = o.value)
              var l = t.type._context
              if ((Zg(Hp, l._currentValue), (l._currentValue = i), null !== a))
                if (
                  ((l = a.value),
                  0 ===
                    (i = Gd(l, i)
                      ? 0
                      : 0 |
                        ('function' == typeof r._calculateChangedBits
                          ? r._calculateChangedBits(l, i)
                          : 1073741823)))
                ) {
                  if (a.children === o.children && !wp.current) {
                    t = Db(e, t, n)
                    break e
                  }
                } else
                  for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                    var u = l.dependencies
                    if (null !== u) {
                      a = l.child
                      for (var s = u.firstContext; null !== s; ) {
                        if (s.context === r && 0 != (s.observedBits & i)) {
                          1 === l.tag &&
                            (((s = wv(-1, n & -n)).tag = 2), kv(l, s)),
                            (l.lanes |= n),
                            null !== (s = l.alternate) && (s.lanes |= n),
                            mv(l.return, n),
                            (u.lanes |= n)
                          break
                        }
                        s = s.next
                      }
                    } else
                      a = 10 === l.tag && l.type === t.type ? null : l.child
                    if (null !== a) a.return = l
                    else
                      for (a = l; null !== a; ) {
                        if (a === t) {
                          a = null
                          break
                        }
                        if (null !== (l = a.sibling)) {
                          ;(l.return = a.return), (a = l)
                          break
                        }
                        a = a.return
                      }
                    l = a
                  }
              kb(e, t, o.children, n), (t = t.child)
            }
            return t
          case 9:
            return (
              (o = t.type),
              (r = (i = t.pendingProps).children),
              yv(t, n),
              (r = r((o = gv(o, i.unstable_observedBits)))),
              (t.flags |= 1),
              kb(e, t, r, n),
              t.child
            )
          case 14:
            return (
              (i = dv((o = t.type), t.pendingProps)),
              _b(e, t, o, (i = dv(o.type, i)), r, n)
            )
          case 15:
            return Eb(e, t, t.type, t.pendingProps, r, n)
          case 17:
            return (
              (r = t.type),
              (o = t.pendingProps),
              (o = t.elementType === r ? o : dv(r, o)),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              ev(r) ? ((e = !0), ov(t)) : (e = !1),
              yv(t, n),
              Pv(t, r, o),
              Tv(t, r, o, n),
              Tb(null, t, r, !0, e, n)
            )
          case 19:
            return Mb(e, t, n)
          case 23:
          case 24:
            return xb(e, t, n)
        }
        throw Error(Nm(156, t.tag))
      }),
      (ak.prototype.render = function (e) {
        tk(e, this._internalRoot, null, null)
      }),
      (ak.prototype.unmount = function () {
        var e = this._internalRoot,
          t = e.containerInfo
        tk(null, e, null, function () {
          t[hp] = null
        })
      }),
      (kf = function (e) {
        13 === e.tag && (sw(e, 4, lw()), ok(e, 4))
      }),
      (Sf = function (e) {
        13 === e.tag && (sw(e, 67108864, lw()), ok(e, 67108864))
      }),
      (_f = function (e) {
        if (13 === e.tag) {
          var t = lw(),
            n = uw(e)
          sw(e, n, t), ok(e, n)
        }
      }),
      (Ef = function (e, t) {
        return t()
      }),
      (uf = function (e, t, n) {
        switch (t) {
          case 'input':
            if ((Zm(e, n), (t = n.name), 'radio' === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode
              for (
                n = n.querySelectorAll(
                  'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t]
                if (r !== e && r.form === e.form) {
                  var o = Gg(r)
                  if (!o) throw Error(Nm(90))
                  Qm(r), Zm(r, o)
                }
              }
            }
            break
          case 'textarea':
            iy(e, n)
            break
          case 'select':
            null != (t = n.value) && ny(e, !!n.multiple, t, !1)
        }
      }),
      (vy = mw),
      (by = function (e, t, n, r, o) {
        var i = Mh
        Mh |= 4
        try {
          return uv(98, e.bind(null, t, n, r, o))
        } finally {
          0 === (Mh = i) && (aw(), cv())
        }
      }),
      (wy = function () {
        0 == (49 & Mh) &&
          ((function () {
            if (null !== um) {
              var e = um
              ;(um = null),
                e.forEach(function (e) {
                  ;(e.expiredLanes |= 24 & e.pendingLanes), fw(e, $p())
                })
            }
            cv()
          })(),
          Iw())
      }),
      (ff = function (e, t) {
        var n = Mh
        Mh |= 2
        try {
          return e(t)
        } finally {
          0 === (Mh = n) && (aw(), cv())
        }
      }),
      (vm = { Events: [qg, Qg, Gg, yy, gy, Iw, { current: !1 }] }),
      (wm = {
        bundleType: (bm = {
          findFiberByHostInstance: Hg,
          bundleType: 0,
          version: '17.0.2',
          rendererPackageName: 'react-dom',
        }).bundleType,
        version: bm.version,
        rendererPackageName: bm.rendererPackageName,
        rendererConfig: bm.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Nc.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = Oy(e)) ? null : e.stateNode
        },
        findFiberByHostInstance: bm.findFiberByHostInstance || ik,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
      }),
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        !(km = __REACT_DEVTOOLS_GLOBAL_HOOK__).isDisabled &&
        km.supportsFiber)
    )
      try {
        ;(Sp = km.inject(wm)), (_p = km)
      } catch (e) {}
    ;(Sm = vm),
      (kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sm),
      (_m = sk),
      (kc.createPortal = _m),
      (Em = function (e) {
        if (null == e) return null
        if (1 === e.nodeType) return e
        var t = e._reactInternals
        if (void 0 === t) {
          if ('function' == typeof e.render) throw Error(Nm(188))
          throw Error(Nm(268, Object.keys(e)))
        }
        return (e = null === (e = Oy(t)) ? null : e.stateNode)
      }),
      (kc.findDOMNode = Em),
      (xm = function (e, t) {
        var n = Mh
        if (0 != (48 & n)) return e(t)
        Mh |= 1
        try {
          if (e) return uv(99, e.bind(null, t))
        } finally {
          ;(Mh = n), cv()
        }
      }),
      (kc.flushSync = xm),
      (Cm = function (e, t, n) {
        if (!lk(t)) throw Error(Nm(200))
        return uk(null, e, t, !0, n)
      }),
      (kc.hydrate = Cm),
      (Pm = function (e, t, n) {
        if (!lk(t)) throw Error(Nm(200))
        return uk(null, e, t, !1, n)
      }),
      (kc.render = Pm),
      (Om = function (e) {
        if (!lk(e)) throw Error(Nm(40))
        return (
          !!e._reactRootContainer &&
          (yw(function () {
            uk(null, null, e, !1, function () {
              ;(e._reactRootContainer = null), (e[hp] = null)
            })
          }),
          !0)
        )
      }),
      (kc.unmountComponentAtNode = Om),
      (Tm = mw),
      (kc.unstable_batchedUpdates = Tm),
      (Am = function (e, t) {
        return sk(
          e,
          t,
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
        )
      }),
      (kc.unstable_createPortal = Am),
      (Im = function (e, t, n, r) {
        if (!lk(n)) throw Error(Nm(200))
        if (null == e || void 0 === e._reactInternals) throw Error(Nm(38))
        return uk(e, t, n, !1, r)
      }),
      (kc.unstable_renderSubtreeIntoContainer = Im),
      '17.0.2',
      (kc.version = '17.0.2')
  }
  var fk = {}
  !(function e() {
    if (
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (e) {
        console.error(e)
      }
  })(),
    Rm || ((Rm = !0), ck()),
    (fk = kc),
    Ku(),
    Ku()
  var dk,
    pk,
    hk,
    mk,
    yk,
    gk,
    vk,
    bk,
    wk,
    kk,
    Sk,
    _k,
    Ek,
    xk,
    Ck,
    Pk,
    Ok,
    Tk,
    Ak,
    Ik,
    Rk,
    Nk,
    jk,
    zk,
    Lk,
    Mk,
    Dk,
    Fk,
    Uk,
    Bk,
    Vk,
    $k,
    Wk,
    Hk,
    qk,
    Qk,
    Gk,
    Kk,
    Xk,
    Yk,
    Zk,
    Jk,
    eS,
    tS,
    nS,
    rS,
    oS,
    iS,
    aS = 'undefined' != typeof window,
    lS = !1
  function uS(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case hk:
          switch ((e = e.type)) {
            case kk:
            case Sk:
            case yk:
            case vk:
            case gk:
            case Ek:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case wk:
                case _k:
                case Pk:
                case Ck:
                case bk:
                  return e
                default:
                  return t
              }
          }
        case mk:
          return t
      }
    }
  }
  function sS(e) {
    return uS(e) === Sk
  }
  var cS = {}
  lS ||
    ((lS = !0),
    (dk = {}),
    (pk = 'function' == typeof Symbol && Symbol.for),
    (hk = pk ? Symbol.for('react.element') : 60103),
    (mk = pk ? Symbol.for('react.portal') : 60106),
    (yk = pk ? Symbol.for('react.fragment') : 60107),
    (gk = pk ? Symbol.for('react.strict_mode') : 60108),
    (vk = pk ? Symbol.for('react.profiler') : 60114),
    (bk = pk ? Symbol.for('react.provider') : 60109),
    (wk = pk ? Symbol.for('react.context') : 60110),
    (kk = pk ? Symbol.for('react.async_mode') : 60111),
    (Sk = pk ? Symbol.for('react.concurrent_mode') : 60111),
    (_k = pk ? Symbol.for('react.forward_ref') : 60112),
    (Ek = pk ? Symbol.for('react.suspense') : 60113),
    (xk = pk ? Symbol.for('react.suspense_list') : 60120),
    (Ck = pk ? Symbol.for('react.memo') : 60115),
    (Pk = pk ? Symbol.for('react.lazy') : 60116),
    (Ok = pk ? Symbol.for('react.block') : 60121),
    (Tk = pk ? Symbol.for('react.fundamental') : 60117),
    (Ak = pk ? Symbol.for('react.responder') : 60118),
    (Ik = pk ? Symbol.for('react.scope') : 60119),
    (Rk = kk),
    (dk.AsyncMode = Rk),
    (Nk = Sk),
    (dk.ConcurrentMode = Nk),
    (jk = wk),
    (dk.ContextConsumer = jk),
    (zk = bk),
    (dk.ContextProvider = zk),
    (Lk = hk),
    (dk.Element = Lk),
    (Mk = _k),
    (dk.ForwardRef = Mk),
    (Dk = yk),
    (dk.Fragment = Dk),
    (Fk = Pk),
    (dk.Lazy = Fk),
    (Uk = Ck),
    (dk.Memo = Uk),
    (Bk = mk),
    (dk.Portal = Bk),
    (Vk = vk),
    (dk.Profiler = Vk),
    ($k = gk),
    (dk.StrictMode = $k),
    (Wk = Ek),
    (dk.Suspense = Wk),
    (Hk = function (e) {
      return sS(e) || uS(e) === kk
    }),
    (dk.isAsyncMode = Hk),
    (qk = sS),
    (dk.isConcurrentMode = qk),
    (Qk = function (e) {
      return uS(e) === wk
    }),
    (dk.isContextConsumer = Qk),
    (Gk = function (e) {
      return uS(e) === bk
    }),
    (dk.isContextProvider = Gk),
    (Kk = function (e) {
      return 'object' == typeof e && null !== e && e.$$typeof === hk
    }),
    (dk.isElement = Kk),
    (Xk = function (e) {
      return uS(e) === _k
    }),
    (dk.isForwardRef = Xk),
    (Yk = function (e) {
      return uS(e) === yk
    }),
    (dk.isFragment = Yk),
    (Zk = function (e) {
      return uS(e) === Pk
    }),
    (dk.isLazy = Zk),
    (Jk = function (e) {
      return uS(e) === Ck
    }),
    (dk.isMemo = Jk),
    (eS = function (e) {
      return uS(e) === mk
    }),
    (dk.isPortal = eS),
    (tS = function (e) {
      return uS(e) === vk
    }),
    (dk.isProfiler = tS),
    (nS = function (e) {
      return uS(e) === gk
    }),
    (dk.isStrictMode = nS),
    (rS = function (e) {
      return uS(e) === Ek
    }),
    (dk.isSuspense = rS),
    (oS = function (e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === yk ||
        e === Sk ||
        e === vk ||
        e === gk ||
        e === Ek ||
        e === xk ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === Pk ||
            e.$$typeof === Ck ||
            e.$$typeof === bk ||
            e.$$typeof === wk ||
            e.$$typeof === _k ||
            e.$$typeof === Tk ||
            e.$$typeof === Ak ||
            e.$$typeof === Ik ||
            e.$$typeof === Ok))
      )
    }),
    (dk.isValidElementType = oS),
    (iS = uS),
    (dk.typeOf = iS)),
    (cS = dk)
  var fS,
    dS,
    pS = {}
  function hS() {
    throw new Error('setTimeout has not been defined')
  }
  function mS() {
    throw new Error('clearTimeout has not been defined')
  }
  function yS(e) {
    if (fS === setTimeout) return setTimeout(e, 0)
    if ((fS === hS || !fS) && setTimeout)
      return (fS = setTimeout), setTimeout(e, 0)
    try {
      return fS(e, 0)
    } catch (t) {
      try {
        return fS.call(null, e, 0)
      } catch (t) {
        return fS.call(this, e, 0)
      }
    }
  }
  !(function () {
    try {
      fS = 'function' == typeof setTimeout ? setTimeout : hS
    } catch (e) {
      fS = hS
    }
    try {
      dS = 'function' == typeof clearTimeout ? clearTimeout : mS
    } catch (e) {
      dS = mS
    }
  })()
  var gS,
    vS = [],
    bS = !1,
    wS = -1
  function kS() {
    bS &&
      gS &&
      ((bS = !1),
      gS.length ? (vS = gS.concat(vS)) : (wS = -1),
      vS.length && SS())
  }
  function SS() {
    if (!bS) {
      var e = yS(kS)
      bS = !0
      for (var t = vS.length; t; ) {
        for (gS = vS, vS = []; ++wS < t; ) gS && gS[wS].run()
        ;(wS = -1), (t = vS.length)
      }
      ;(gS = null),
        (bS = !1),
        (function (e) {
          if (dS === clearTimeout) return clearTimeout(e)
          if ((dS === mS || !dS) && clearTimeout)
            return (dS = clearTimeout), clearTimeout(e)
          try {
            dS(e)
          } catch (t) {
            try {
              return dS.call(null, e)
            } catch (t) {
              return dS.call(this, e)
            }
          }
        })(e)
    }
  }
  function _S(e, t) {
    ;(this.fun = e), (this.array = t)
  }
  function ES() {}
  ;(pS.nextTick = function (e) {
    var t = new Array(arguments.length - 1)
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
    vS.push(new _S(e, t)), 1 !== vS.length || bS || yS(SS)
  }),
    (_S.prototype.run = function () {
      this.fun.apply(null, this.array)
    }),
    (pS.title = 'browser'),
    (pS.browser = !0),
    (pS.env = {}),
    (pS.argv = []),
    (pS.version = ''),
    (pS.versions = {}),
    (pS.on = ES),
    (pS.addListener = ES),
    (pS.once = ES),
    (pS.off = ES),
    (pS.removeListener = ES),
    (pS.removeAllListeners = ES),
    (pS.emit = ES),
    (pS.prependListener = ES),
    (pS.prependOnceListener = ES),
    (pS.listeners = function (e) {
      return []
    }),
    (pS.binding = function (e) {
      throw new Error('process.binding is not supported')
    }),
    (pS.cwd = function () {
      return '/'
    }),
    (pS.chdir = function (e) {
      throw new Error('process.chdir is not supported')
    }),
    (pS.umask = function () {
      return 0
    }),
    Ku()
  var xS = t(function (e, t, n, r) {
    var o = n ? n.call(r, e, t) : void 0
    if (void 0 !== o) return !!o
    if (e === t) return !0
    if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1
    var i = Object.keys(e),
      a = Object.keys(t)
    if (i.length !== a.length) return !1
    for (
      var l = Object.prototype.hasOwnProperty.bind(t), u = 0;
      u < i.length;
      u++
    ) {
      var s = i[u]
      if (!l(s)) return !1
      var c = e[s],
        f = t[s]
      if (
        !1 === (o = n ? n.call(r, c, f, s) : void 0) ||
        (void 0 === o && c !== f)
      )
        return !1
    }
    return !0
  })
  function CS(e) {
    function t(e, r, u, s, d) {
      for (
        var p,
          h,
          m,
          y,
          w,
          S = 0,
          _ = 0,
          E = 0,
          x = 0,
          C = 0,
          R = 0,
          j = (m = p = 0),
          L = 0,
          M = 0,
          D = 0,
          F = 0,
          U = u.length,
          B = U - 1,
          V = '',
          $ = '',
          W = '',
          H = '';
        L < U;

      ) {
        if (
          ((h = u.charCodeAt(L)),
          L === B &&
            0 !== _ + x + E + S &&
            (0 !== _ && (h = 47 === _ ? 10 : 47), (x = E = S = 0), U++, B++),
          0 === _ + x + E + S)
        ) {
          if (
            L === B &&
            (0 < M && (V = V.replace(f, '')), 0 < V.trim().length)
          ) {
            switch (h) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break
              default:
                V += u.charAt(L)
            }
            h = 59
          }
          switch (h) {
            case 123:
              for (p = (V = V.trim()).charCodeAt(0), m = 1, F = ++L; L < U; ) {
                switch ((h = u.charCodeAt(L))) {
                  case 123:
                    m++
                    break
                  case 125:
                    m--
                    break
                  case 47:
                    switch ((h = u.charCodeAt(L + 1))) {
                      case 42:
                      case 47:
                        e: {
                          for (j = L + 1; j < B; ++j)
                            switch (u.charCodeAt(j)) {
                              case 47:
                                if (
                                  42 === h &&
                                  42 === u.charCodeAt(j - 1) &&
                                  L + 2 !== j
                                ) {
                                  L = j + 1
                                  break e
                                }
                                break
                              case 10:
                                if (47 === h) {
                                  L = j + 1
                                  break e
                                }
                            }
                          L = j
                        }
                    }
                    break
                  case 91:
                    h++
                  case 40:
                    h++
                  case 34:
                  case 39:
                    for (; L++ < B && u.charCodeAt(L) !== h; );
                }
                if (0 === m) break
                L++
              }
              switch (
                ((m = u.substring(F, L)),
                0 === p && (p = (V = V.replace(c, '').trim()).charCodeAt(0)),
                p)
              ) {
                case 64:
                  switch (
                    (0 < M && (V = V.replace(f, '')), (h = V.charCodeAt(1)))
                  ) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      M = r
                      break
                    default:
                      M = I
                  }
                  if (
                    ((F = (m = t(r, M, m, h, d + 1)).length),
                    0 < N &&
                      ((w = l(3, m, (M = n(I, V, D)), r, O, P, F, h, d, s)),
                      (V = M.join('')),
                      void 0 !== w &&
                        0 === (F = (m = w.trim()).length) &&
                        ((h = 0), (m = ''))),
                    0 < F)
                  )
                    switch (h) {
                      case 115:
                        V = V.replace(k, a)
                      case 100:
                      case 109:
                      case 45:
                        m = V + '{' + m + '}'
                        break
                      case 107:
                        ;(m = (V = V.replace(g, '$1 $2')) + '{' + m + '}'),
                          (m =
                            1 === A || (2 === A && i('@' + m, 3))
                              ? '@-webkit-' + m + '@' + m
                              : '@' + m)
                        break
                      default:
                        ;(m = V + m), 112 === s && (($ += m), (m = ''))
                    }
                  else m = ''
                  break
                default:
                  m = t(r, n(r, V, D), m, s, d + 1)
              }
              ;(W += m),
                (m = D = M = j = p = 0),
                (V = ''),
                (h = u.charCodeAt(++L))
              break
            case 125:
            case 59:
              if (1 < (F = (V = (0 < M ? V.replace(f, '') : V).trim()).length))
                switch (
                  (0 === j &&
                    ((p = V.charCodeAt(0)), 45 === p || (96 < p && 123 > p)) &&
                    (F = (V = V.replace(' ', ':')).length),
                  0 < N &&
                    void 0 !== (w = l(1, V, r, e, O, P, $.length, s, d, s)) &&
                    0 === (F = (V = w.trim()).length) &&
                    (V = '\0\0'),
                  (p = V.charCodeAt(0)),
                  (h = V.charCodeAt(1)),
                  p)
                ) {
                  case 0:
                    break
                  case 64:
                    if (105 === h || 99 === h) {
                      H += V + u.charAt(L)
                      break
                    }
                  default:
                    58 !== V.charCodeAt(F - 1) &&
                      ($ += o(V, p, h, V.charCodeAt(2)))
                }
              ;(D = M = j = p = 0), (V = ''), (h = u.charCodeAt(++L))
          }
        }
        switch (h) {
          case 13:
          case 10:
            47 === _
              ? (_ = 0)
              : 0 === 1 + p &&
                107 !== s &&
                0 < V.length &&
                ((M = 1), (V += '\0')),
              0 < N * z && l(0, V, r, e, O, P, $.length, s, d, s),
              (P = 1),
              O++
            break
          case 59:
          case 125:
            if (0 === _ + x + E + S) {
              P++
              break
            }
          default:
            switch ((P++, (y = u.charAt(L)), h)) {
              case 9:
              case 32:
                if (0 === x + S + _)
                  switch (C) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      y = ''
                      break
                    default:
                      32 !== h && (y = ' ')
                  }
                break
              case 0:
                y = '\\0'
                break
              case 12:
                y = '\\f'
                break
              case 11:
                y = '\\v'
                break
              case 38:
                0 === x + _ + S && ((M = D = 1), (y = '\f' + y))
                break
              case 108:
                if (0 === x + _ + S + T && 0 < j)
                  switch (L - j) {
                    case 2:
                      112 === C && 58 === u.charCodeAt(L - 3) && (T = C)
                    case 8:
                      111 === R && (T = R)
                  }
                break
              case 58:
                0 === x + _ + S && (j = L)
                break
              case 44:
                0 === _ + E + x + S && ((M = 1), (y += '\r'))
                break
              case 34:
              case 39:
                0 === _ && (x = x === h ? 0 : 0 === x ? h : x)
                break
              case 91:
                0 === x + _ + E && S++
                break
              case 93:
                0 === x + _ + E && S--
                break
              case 41:
                0 === x + _ + S && E--
                break
              case 40:
                if (0 === x + _ + S) {
                  if (0 === p)
                    switch (2 * C + 3 * R) {
                      case 533:
                        break
                      default:
                        p = 1
                    }
                  E++
                }
                break
              case 64:
                0 === _ + E + x + S + j + m && (m = 1)
                break
              case 42:
              case 47:
                if (!(0 < x + S + E))
                  switch (_) {
                    case 0:
                      switch (2 * h + 3 * u.charCodeAt(L + 1)) {
                        case 235:
                          _ = 47
                          break
                        case 220:
                          ;(F = L), (_ = 42)
                      }
                      break
                    case 42:
                      47 === h &&
                        42 === C &&
                        F + 2 !== L &&
                        (33 === u.charCodeAt(F + 2) &&
                          ($ += u.substring(F, L + 1)),
                        (y = ''),
                        (_ = 0))
                  }
            }
            0 === _ && (V += y)
        }
        ;(R = C), (C = h), L++
      }
      if (0 < (F = $.length)) {
        if (
          ((M = r),
          0 < N &&
            void 0 !== (w = l(2, $, M, e, O, P, F, s, d, s)) &&
            0 === ($ = w).length)
        )
          return H + $ + W
        if ((($ = M.join(',') + '{' + $ + '}'), 0 != A * T)) {
          switch ((2 !== A || i($, 2) || (T = 0), T)) {
            case 111:
              $ = $.replace(b, ':-moz-$1') + $
              break
            case 112:
              $ =
                $.replace(v, '::-webkit-input-$1') +
                $.replace(v, '::-moz-$1') +
                $.replace(v, ':-ms-input-$1') +
                $
          }
          T = 0
        }
      }
      return H + $ + W
    }
    function n(e, t, n) {
      var o = t.trim().split(m)
      t = o
      var i = o.length,
        a = e.length
      switch (a) {
        case 0:
        case 1:
          var l = 0
          for (e = 0 === a ? '' : e[0] + ' '; l < i; ++l)
            t[l] = r(e, t[l], n).trim()
          break
        default:
          var u = (l = 0)
          for (t = []; l < i; ++l)
            for (var s = 0; s < a; ++s) t[u++] = r(e[s] + ' ', o[l], n).trim()
      }
      return t
    }
    function r(e, t, n) {
      var r = t.charCodeAt(0)
      switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
        case 38:
          return t.replace(y, '$1' + e.trim())
        case 58:
          return e.trim() + t.replace(y, '$1' + e.trim())
        default:
          if (0 < 1 * n && 0 < t.indexOf('\f'))
            return t.replace(y, (58 === e.charCodeAt(0) ? '' : '$1') + e.trim())
      }
      return e + t
    }
    function o(e, t, n, r) {
      var a = e + ';',
        l = 2 * t + 3 * n + 4 * r
      if (944 === l) {
        e = a.indexOf(':', 9) + 1
        var u = a.substring(e, a.length - 1).trim()
        return (
          (u = a.substring(0, e).trim() + u + ';'),
          1 === A || (2 === A && i(u, 1)) ? '-webkit-' + u + u : u
        )
      }
      if (0 === A || (2 === A && !i(a, 1))) return a
      switch (l) {
        case 1015:
          return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a
        case 951:
          return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a
        case 963:
          return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a
        case 1009:
          if (100 !== a.charCodeAt(4)) break
        case 969:
        case 942:
          return '-webkit-' + a + a
        case 978:
          return '-webkit-' + a + '-moz-' + a + a
        case 1019:
        case 983:
          return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a
        case 883:
          if (45 === a.charCodeAt(8)) return '-webkit-' + a + a
          if (0 < a.indexOf('image-set(', 11))
            return a.replace(C, '$1-webkit-$2') + a
          break
        case 932:
          if (45 === a.charCodeAt(4))
            switch (a.charCodeAt(5)) {
              case 103:
                return (
                  '-webkit-box-' +
                  a.replace('-grow', '') +
                  '-webkit-' +
                  a +
                  '-ms-' +
                  a.replace('grow', 'positive') +
                  a
                )
              case 115:
                return (
                  '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a
                )
              case 98:
                return (
                  '-webkit-' +
                  a +
                  '-ms-' +
                  a.replace('basis', 'preferred-size') +
                  a
                )
            }
          return '-webkit-' + a + '-ms-' + a + a
        case 964:
          return '-webkit-' + a + '-ms-flex-' + a + a
        case 1023:
          if (99 !== a.charCodeAt(8)) break
          return (
            '-webkit-box-pack' +
            (u = a
              .substring(a.indexOf(':', 15))
              .replace('flex-', '')
              .replace('space-between', 'justify')) +
            '-webkit-' +
            a +
            '-ms-flex-pack' +
            u +
            a
          )
        case 1005:
          return p.test(a)
            ? a.replace(d, ':-webkit-') + a.replace(d, ':-moz-') + a
            : a
        case 1e3:
          switch (
            ((t = (u = a.substring(13).trim()).indexOf('-') + 1),
            u.charCodeAt(0) + u.charCodeAt(t))
          ) {
            case 226:
              u = a.replace(w, 'tb')
              break
            case 232:
              u = a.replace(w, 'tb-rl')
              break
            case 220:
              u = a.replace(w, 'lr')
              break
            default:
              return a
          }
          return '-webkit-' + a + '-ms-' + u + a
        case 1017:
          if (-1 === a.indexOf('sticky', 9)) break
        case 975:
          switch (
            ((t = (a = e).length - 10),
            (l =
              (u = (33 === a.charCodeAt(t) ? a.substring(0, t) : a)
                .substring(e.indexOf(':', 7) + 1)
                .trim()).charCodeAt(0) +
              (0 | u.charCodeAt(7))))
          ) {
            case 203:
              if (111 > u.charCodeAt(8)) break
            case 115:
              a = a.replace(u, '-webkit-' + u) + ';' + a
              break
            case 207:
            case 102:
              a =
                a.replace(u, '-webkit-' + (102 < l ? 'inline-' : '') + 'box') +
                ';' +
                a.replace(u, '-webkit-' + u) +
                ';' +
                a.replace(u, '-ms-' + u + 'box') +
                ';' +
                a
          }
          return a + ';'
        case 938:
          if (45 === a.charCodeAt(5))
            switch (a.charCodeAt(6)) {
              case 105:
                return (
                  (u = a.replace('-items', '')),
                  '-webkit-' + a + '-webkit-box-' + u + '-ms-flex-' + u + a
                )
              case 115:
                return '-webkit-' + a + '-ms-flex-item-' + a.replace(_, '') + a
              default:
                return (
                  '-webkit-' +
                  a +
                  '-ms-flex-line-pack' +
                  a.replace('align-content', '').replace(_, '') +
                  a
                )
            }
          break
        case 973:
        case 989:
          if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break
        case 931:
        case 953:
          if (!0 === x.test(e))
            return 115 === (u = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
              ? o(e.replace('stretch', 'fill-available'), t, n, r).replace(
                  ':fill-available',
                  ':stretch'
                )
              : a.replace(u, '-webkit-' + u) +
                  a.replace(u, '-moz-' + u.replace('fill-', '')) +
                  a
          break
        case 962:
          if (
            ((a =
              '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a),
            211 === n + r &&
              105 === a.charCodeAt(13) &&
              0 < a.indexOf('transform', 10))
          )
            return (
              a
                .substring(0, a.indexOf(';', 27) + 1)
                .replace(h, '$1-webkit-$2') + a
            )
      }
      return a
    }
    function i(e, t) {
      var n = e.indexOf(1 === t ? ':' : '{'),
        r = e.substring(0, 3 !== t ? n : 10)
      return (
        (n = e.substring(n + 1, e.length - 1)),
        j(2 !== t ? r : r.replace(E, '$1'), n, t)
      )
    }
    function a(e, t) {
      var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2))
      return n !== t + ';'
        ? n.replace(S, ' or ($1)').substring(4)
        : '(' + t + ')'
    }
    function l(e, t, n, r, o, i, a, l, u, c) {
      for (var f, d = 0, p = t; d < N; ++d)
        switch ((f = R[d].call(s, e, p, n, r, o, i, a, l, u, c))) {
          case void 0:
          case !1:
          case !0:
          case null:
            break
          default:
            p = f
        }
      if (p !== t) return p
    }
    function u(e) {
      return (
        void 0 !== (e = e.prefix) &&
          ((j = null),
          e
            ? 'function' != typeof e
              ? (A = 1)
              : ((A = 2), (j = e))
            : (A = 0)),
        u
      )
    }
    function s(e, n) {
      var r = e
      if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < N)) {
        var o = l(-1, n, r, r, O, P, 0, 0, 0, 0)
        void 0 !== o && 'string' == typeof o && (n = o)
      }
      var i = t(I, r, n, 0, 0)
      return (
        0 < N &&
          void 0 !== (o = l(-2, i, r, r, O, P, i.length, 0, 0, 0)) &&
          (i = o),
        '',
        (T = 0),
        (P = O = 1),
        i
      )
    }
    var c = /^\0+/g,
      f = /[\0\r\f]/g,
      d = /: */g,
      p = /zoo|gra/,
      h = /([,: ])(transform)/g,
      m = /,\r+?/g,
      y = /([\t\r\n ])*\f?&/g,
      g = /@(k\w+)\s*(\S*)\s*/,
      v = /::(place)/g,
      b = /:(read-only)/g,
      w = /[svh]\w+-[tblr]{2}/,
      k = /\(\s*(.*)\s*\)/g,
      S = /([\s\S]*?);/g,
      _ = /-self|flex-/g,
      E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      x = /stretch|:\s*\w+\-(?:conte|avail)/,
      C = /([^-])(image-set\()/,
      P = 1,
      O = 1,
      T = 0,
      A = 1,
      I = [],
      R = [],
      N = 0,
      j = null,
      z = 0
    return (
      (s.use = function e(t) {
        switch (t) {
          case void 0:
          case null:
            N = R.length = 0
            break
          default:
            if ('function' == typeof t) R[N++] = t
            else if ('object' == typeof t)
              for (var n = 0, r = t.length; n < r; ++n) e(t[n])
            else z = 0 | !!t
        }
        return e
      }),
      (s.set = u),
      void 0 !== e && u(e),
      s
    )
  }
  var PS = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  }
  var OS,
    TS,
    AS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    IS =
      ((OS = function (e) {
        return (
          AS.test(e) ||
          (111 === e.charCodeAt(0) &&
            110 === e.charCodeAt(1) &&
            e.charCodeAt(2) < 91)
        )
      }),
      (TS = {}),
      function (e) {
        return void 0 === TS[e] && (TS[e] = OS(e)), TS[e]
      }),
    RS = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    NS = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    jS = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    zS = {}
  function LS(e) {
    return cS.isMemo(e) ? jS : zS[e.$$typeof] || RS
  }
  ;(zS[cS.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  }),
    (zS[cS.Memo] = jS)
  var MS = Object.defineProperty,
    DS = Object.getOwnPropertyNames,
    FS = Object.getOwnPropertySymbols,
    US = Object.getOwnPropertyDescriptor,
    BS = Object.getPrototypeOf,
    VS = Object.prototype
  var $S = t(function e(t, n, r) {
    if ('string' != typeof n) {
      if (VS) {
        var o = BS(n)
        o && o !== VS && e(t, o, r)
      }
      var i = DS(n)
      FS && (i = i.concat(FS(n)))
      for (var a = LS(t), l = LS(n), u = 0; u < i.length; ++u) {
        var s = i[u]
        if (!(NS[s] || (r && r[s]) || (l && l[s]) || (a && a[s]))) {
          var c = US(n, s)
          try {
            MS(t, s, c)
          } catch (e) {}
        }
      }
    }
    return t
  })
  function WS() {
    return (WS =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
  }
  var HS = function (e, t) {
      for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
        n.push(t[r], e[r + 1])
      return n
    },
    qS = function (e) {
      return (
        null !== e &&
        'object' == typeof e &&
        '[object Object]' ===
          (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
        !cS.typeOf(e)
      )
    },
    QS = Object.freeze([]),
    GS = Object.freeze({})
  function KS(e) {
    return 'function' == typeof e
  }
  function XS(e) {
    return e.displayName || e.name || 'Component'
  }
  function YS(e) {
    return e && 'string' == typeof e.styledComponentId
  }
  var ZS = 'data-styled',
    JS = 'undefined' != typeof window && 'HTMLElement' in window,
    e_ = Boolean('boolean' == typeof SC_DISABLE_SPEEDY && SC_DISABLE_SPEEDY)
  function t_(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r]
    throw new Error(
      'An error occurred. See https://git.io/JUIaE#' +
        e +
        ' for more information.' +
        (n.length > 0 ? ' Args: ' + n.join(', ') : '')
    )
  }
  var n_ = (function () {
      function e(e) {
        ;(this.groupSizes = new Uint32Array(512)),
          (this.length = 512),
          (this.tag = e)
      }
      var t = e.prototype
      return (
        (t.indexOfGroup = function (e) {
          for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n]
          return t
        }),
        (t.insertRules = function (e, t) {
          if (e >= this.groupSizes.length) {
            for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
              (o <<= 1) < 0 && t_(16, '' + e)
            ;(this.groupSizes = new Uint32Array(o)),
              this.groupSizes.set(n),
              (this.length = o)
            for (var i = r; i < o; i++) this.groupSizes[i] = 0
          }
          for (
            var a = this.indexOfGroup(e + 1), l = 0, u = t.length;
            l < u;
            l++
          )
            this.tag.insertRule(a, t[l]) && (this.groupSizes[e]++, a++)
        }),
        (t.clearGroup = function (e) {
          if (e < this.length) {
            var t = this.groupSizes[e],
              n = this.indexOfGroup(e),
              r = n + t
            this.groupSizes[e] = 0
            for (var o = n; o < r; o++) this.tag.deleteRule(n)
          }
        }),
        (t.getGroup = function (e) {
          var t = ''
          if (e >= this.length || 0 === this.groupSizes[e]) return t
          for (
            var n = this.groupSizes[e],
              r = this.indexOfGroup(e),
              o = r + n,
              i = r;
            i < o;
            i++
          )
            t += this.tag.getRule(i) + '/*!sc*/\n'
          return t
        }),
        e
      )
    })(),
    r_ = new Map(),
    o_ = new Map(),
    i_ = 1,
    a_ = function (e) {
      if (r_.has(e)) return r_.get(e)
      for (; o_.has(i_); ) i_++
      var t = i_++
      return r_.set(e, t), o_.set(t, e), t
    },
    l_ = function (e) {
      return o_.get(e)
    },
    u_ = function (e, t) {
      r_.set(e, t), o_.set(t, e)
    },
    s_ = new RegExp('^data-styled\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    c_ = function (e, t, n) {
      for (var r, o = n.split(','), i = 0, a = o.length; i < a; i++)
        (r = o[i]) && e.registerName(t, r)
    },
    f_ = function (e, t) {
      for (
        var n = t.innerHTML.split('/*!sc*/\n'), r = [], o = 0, i = n.length;
        o < i;
        o++
      ) {
        var a = n[o].trim()
        if (a) {
          var l = a.match(s_)
          if (l) {
            var u = 0 | parseInt(l[1], 10),
              s = l[2]
            0 !== u && (u_(s, u), c_(e, s, l[3]), e.getTag().insertRules(u, r)),
              (r.length = 0)
          } else r.push(a)
        }
      }
    },
    d_ = function () {
      return 'undefined' != typeof window && void 0 !== window.__webpack_nonce__
        ? window.__webpack_nonce__
        : null
    },
    p_ = function (e) {
      var t = document.head,
        n = e || t,
        r = document.createElement('style'),
        o = (function (e) {
          for (var t = e.childNodes, n = t.length; n >= 0; n--) {
            var r = t[n]
            if (r && 1 === r.nodeType && r.hasAttribute(ZS)) return r
          }
        })(n),
        i = void 0 !== o ? o.nextSibling : null
      r.setAttribute(ZS, 'active'),
        r.setAttribute('data-styled-version', '5.2.3')
      var a = d_()
      return a && r.setAttribute('nonce', a), n.insertBefore(r, i), r
    },
    h_ = (function () {
      function e(e) {
        var t = (this.element = p_(e))
        t.appendChild(document.createTextNode('')),
          (this.sheet = (function (e) {
            if (e.sheet) return e.sheet
            for (
              var t = document.styleSheets, n = 0, r = t.length;
              n < r;
              n++
            ) {
              var o = t[n]
              if (o.ownerNode === e) return o
            }
            t_(17)
          })(t)),
          (this.length = 0)
      }
      var t = e.prototype
      return (
        (t.insertRule = function (e, t) {
          try {
            return this.sheet.insertRule(t, e), this.length++, !0
          } catch (e) {
            return !1
          }
        }),
        (t.deleteRule = function (e) {
          this.sheet.deleteRule(e), this.length--
        }),
        (t.getRule = function (e) {
          var t = this.sheet.cssRules[e]
          return void 0 !== t && 'string' == typeof t.cssText ? t.cssText : ''
        }),
        e
      )
    })(),
    m_ = (function () {
      function e(e) {
        var t = (this.element = p_(e))
        ;(this.nodes = t.childNodes), (this.length = 0)
      }
      var t = e.prototype
      return (
        (t.insertRule = function (e, t) {
          if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t),
              r = this.nodes[e]
            return this.element.insertBefore(n, r || null), this.length++, !0
          }
          return !1
        }),
        (t.deleteRule = function (e) {
          this.element.removeChild(this.nodes[e]), this.length--
        }),
        (t.getRule = function (e) {
          return e < this.length ? this.nodes[e].textContent : ''
        }),
        e
      )
    })(),
    y_ = (function () {
      function e(e) {
        ;(this.rules = []), (this.length = 0)
      }
      var t = e.prototype
      return (
        (t.insertRule = function (e, t) {
          return (
            e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
          )
        }),
        (t.deleteRule = function (e) {
          this.rules.splice(e, 1), this.length--
        }),
        (t.getRule = function (e) {
          return e < this.length ? this.rules[e] : ''
        }),
        e
      )
    })(),
    g_ = JS,
    v_ = { isServer: !JS, useCSSOMInjection: !e_ },
    b_ = (function () {
      function e(e, t, n) {
        void 0 === e && (e = GS),
          void 0 === t && (t = {}),
          (this.options = WS({}, v_, {}, e)),
          (this.gs = t),
          (this.names = new Map(n)),
          !this.options.isServer &&
            JS &&
            g_ &&
            ((g_ = !1),
            (function (e) {
              for (
                var t = document.querySelectorAll(
                    'style[data-styled][data-styled-version="5.2.3"]'
                  ),
                  n = 0,
                  r = t.length;
                n < r;
                n++
              ) {
                var o = t[n]
                o &&
                  'active' !== o.getAttribute(ZS) &&
                  (f_(e, o), o.parentNode && o.parentNode.removeChild(o))
              }
            })(this))
      }
      e.registerId = function (e) {
        return a_(e)
      }
      var t = e.prototype
      return (
        (t.reconstructWithOptions = function (t, n) {
          return (
            void 0 === n && (n = !0),
            new e(
              WS({}, this.options, {}, t),
              this.gs,
              (n && this.names) || void 0
            )
          )
        }),
        (t.allocateGSInstance = function (e) {
          return (this.gs[e] = (this.gs[e] || 0) + 1)
        }),
        (t.getTag = function () {
          return (
            this.tag ||
            (this.tag =
              ((n = (t = this.options).isServer),
              (r = t.useCSSOMInjection),
              (o = t.target),
              (e = n ? new y_(o) : r ? new h_(o) : new m_(o)),
              new n_(e)))
          )
          var e, t, n, r, o
        }),
        (t.hasNameForId = function (e, t) {
          return this.names.has(e) && this.names.get(e).has(t)
        }),
        (t.registerName = function (e, t) {
          if ((a_(e), this.names.has(e))) this.names.get(e).add(t)
          else {
            var n = new Set()
            n.add(t), this.names.set(e, n)
          }
        }),
        (t.insertRules = function (e, t, n) {
          this.registerName(e, t), this.getTag().insertRules(a_(e), n)
        }),
        (t.clearNames = function (e) {
          this.names.has(e) && this.names.get(e).clear()
        }),
        (t.clearRules = function (e) {
          this.getTag().clearGroup(a_(e)), this.clearNames(e)
        }),
        (t.clearTag = function () {
          this.tag = void 0
        }),
        (t.toString = function () {
          return (function (e) {
            for (var t = e.getTag(), n = t.length, r = '', o = 0; o < n; o++) {
              var i = l_(o)
              if (void 0 !== i) {
                var a = e.names.get(i),
                  l = t.getGroup(o)
                if (void 0 !== a && 0 !== l.length) {
                  var u = 'data-styled.g' + o + '[id="' + i + '"]',
                    s = ''
                  void 0 !== a &&
                    a.forEach(function (e) {
                      e.length > 0 && (s += e + ',')
                    }),
                    (r += '' + l + u + '{content:"' + s + '"}/*!sc*/\n')
                }
              }
            }
            return r
          })(this)
        }),
        e
      )
    })(),
    w_ = /(a)(d)/gi,
    k_ = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97))
    }
  function S_(e) {
    var t,
      n = ''
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = k_(t % 52) + n
    return (k_(t % 52) + n).replace(w_, '$1-$2')
  }
  var __ = function (e, t) {
      for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n)
      return e
    },
    E_ = function (e) {
      return __(5381, e)
    }
  function x_(e) {
    for (var t = 0; t < e.length; t += 1) {
      var n = e[t]
      if (KS(n) && !YS(n)) return !1
    }
    return !0
  }
  var C_ = E_('5.2.3'),
    P_ = (function () {
      function e(e, t, n) {
        ;(this.rules = e),
          (this.staticRulesId = ''),
          (this.isStatic = (void 0 === n || n.isStatic) && x_(e)),
          (this.componentId = t),
          (this.baseHash = __(C_, t)),
          (this.baseStyle = n),
          b_.registerId(t)
      }
      return (
        (e.prototype.generateAndInjectStyles = function (e, t, n) {
          var r = this.componentId,
            o = []
          if (
            (this.baseStyle &&
              o.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
            this.isStatic && !n.hash)
          )
            if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
              o.push(this.staticRulesId)
            else {
              var i = H_(this.rules, e, t, n).join(''),
                a = S_(__(this.baseHash, i.length) >>> 0)
              if (!t.hasNameForId(r, a)) {
                var l = n(i, '.' + a, void 0, r)
                t.insertRules(r, a, l)
              }
              o.push(a), (this.staticRulesId = a)
            }
          else {
            for (
              var u = this.rules.length,
                s = __(this.baseHash, n.hash),
                c = '',
                f = 0;
              f < u;
              f++
            ) {
              var d = this.rules[f]
              if ('string' == typeof d) c += d
              else if (d) {
                var p = H_(d, e, t, n),
                  h = Array.isArray(p) ? p.join('') : p
                ;(s = __(s, h + f)), (c += h)
              }
            }
            if (c) {
              var m = S_(s >>> 0)
              if (!t.hasNameForId(r, m)) {
                var y = n(c, '.' + m, void 0, r)
                t.insertRules(r, m, y)
              }
              o.push(m)
            }
          }
          return o.join(' ')
        }),
        e
      )
    })(),
    O_ = /^\s*\/\/.*$/gm,
    T_ = [':', '[', '.', '#']
  function A_(e) {
    var t,
      n,
      r,
      o,
      i = void 0 === e ? GS : e,
      a = i.options,
      l = void 0 === a ? GS : a,
      u = i.plugins,
      s = void 0 === u ? QS : u,
      c = new CS(l),
      f = [],
      d = (function (e) {
        function t(t) {
          if (t)
            try {
              e(t + '}')
            } catch (e) {}
        }
        return function (n, r, o, i, a, l, u, s, c, f) {
          switch (n) {
            case 1:
              if (0 === c && 64 === r.charCodeAt(0)) return e(r + ';'), ''
              break
            case 2:
              if (0 === s) return r + '/*|*/'
              break
            case 3:
              switch (s) {
                case 102:
                case 112:
                  return e(o[0] + r), ''
                default:
                  return r + (0 === f ? '/*|*/' : '')
              }
            case -2:
              r.split('/*|*/}').forEach(t)
          }
        }
      })(function (e) {
        f.push(e)
      }),
      p = function (e, r, i) {
        return (0 === r && -1 !== T_.indexOf(i[n.length])) || i.match(o)
          ? e
          : '.' + t
      }
    function h(e, i, a, l) {
      void 0 === l && (l = '&')
      var u = e.replace(O_, ''),
        s = i && a ? a + ' ' + i + ' { ' + u + ' }' : u
      return (
        (t = l),
        (n = i),
        (r = new RegExp('\\' + n + '\\b', 'g')),
        (o = new RegExp('(\\' + n + '\\b){2,}')),
        c(a || !i ? '' : i, s)
      )
    }
    return (
      c.use(
        [].concat(s, [
          function (e, t, o) {
            2 === e &&
              o.length &&
              o[0].lastIndexOf(n) > 0 &&
              (o[0] = o[0].replace(r, p))
          },
          d,
          function (e) {
            if (-2 === e) {
              var t = f
              return (f = []), t
            }
          },
        ])
      ),
      (h.hash = s.length
        ? s
            .reduce(function (e, t) {
              return t.name || t_(15), __(e, t.name)
            }, 5381)
            .toString()
        : ''),
      h
    )
  }
  var I_ = Qu.createContext(),
    R_ = (I_.Consumer, Qu.createContext()),
    N_ = (R_.Consumer, new b_()),
    j_ = A_()
  function z_() {
    return Ku().useContext(I_) || N_
  }
  function L_() {
    return Ku().useContext(R_) || j_
  }
  function M_(e) {
    var t = Ku().useState(e.stylisPlugins),
      n = t[0],
      r = t[1],
      o = z_(),
      i = Ku().useMemo(
        function () {
          var t = o
          return (
            e.sheet
              ? (t = e.sheet)
              : e.target &&
                (t = t.reconstructWithOptions({ target: e.target }, !1)),
            e.disableCSSOMInjection &&
              (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
            t
          )
        },
        [e.disableCSSOMInjection, e.sheet, e.target]
      ),
      a = Ku().useMemo(
        function () {
          return A_({
            options: { prefix: !e.disableVendorPrefixes },
            plugins: n,
          })
        },
        [e.disableVendorPrefixes, n]
      )
    return (
      Ku().useEffect(
        function () {
          xS(n, e.stylisPlugins) || r(e.stylisPlugins)
        },
        [e.stylisPlugins]
      ),
      Qu.createElement(
        I_.Provider,
        { value: i },
        Qu.createElement(R_.Provider, { value: a }, e.children)
      )
    )
  }
  var D_ = (function () {
      function e(e, t) {
        var n = this
        ;(this.inject = function (e, t) {
          void 0 === t && (t = j_)
          var r = n.name + t.hash
          e.hasNameForId(n.id, r) ||
            e.insertRules(n.id, r, t(n.rules, r, '@keyframes'))
        }),
          (this.toString = function () {
            return t_(12, String(n.name))
          }),
          (this.name = e),
          (this.id = 'sc-keyframes-' + e),
          (this.rules = t)
      }
      return (
        (e.prototype.getName = function (e) {
          return void 0 === e && (e = j_), this.name + e.hash
        }),
        e
      )
    })(),
    F_ = /([A-Z])/,
    U_ = /([A-Z])/g,
    B_ = /^ms-/,
    V_ = function (e) {
      return '-' + e.toLowerCase()
    }
  function $_(e) {
    return F_.test(e) ? e.replace(U_, V_).replace(B_, '-ms-') : e
  }
  var W_ = function (e) {
    return null == e || !1 === e || '' === e
  }
  function H_(e, t, n, r) {
    if (Array.isArray(e)) {
      for (var o, i = [], a = 0, l = e.length; a < l; a += 1)
        '' !== (o = H_(e[a], t, n, r)) &&
          (Array.isArray(o) ? i.push.apply(i, o) : i.push(o))
      return i
    }
    if (W_(e)) return ''
    if (YS(e)) return '.' + e.styledComponentId
    if (KS(e)) {
      if (
        'function' != typeof (s = e) ||
        (s.prototype && s.prototype.isReactComponent) ||
        !t
      )
        return e
      var u = e(t)
      return H_(u, t, n, r)
    }
    var s
    return e instanceof D_
      ? n
        ? (e.inject(n, r), e.getName(r))
        : e
      : qS(e)
      ? (function e(t, n) {
          var r,
            o,
            i = []
          for (var a in t)
            t.hasOwnProperty(a) &&
              !W_(t[a]) &&
              (qS(t[a])
                ? i.push.apply(i, e(t[a], a))
                : KS(t[a])
                ? i.push($_(a) + ':', t[a], ';')
                : i.push(
                    $_(a) +
                      ': ' +
                      ((r = a),
                      (null == (o = t[a]) || 'boolean' == typeof o || '' === o
                        ? ''
                        : 'number' != typeof o || 0 === o || r in PS
                        ? String(o).trim()
                        : o + 'px') + ';')
                  ))
          return n ? [n + ' {'].concat(i, ['}']) : i
        })(e)
      : e.toString()
  }
  function q_(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r]
    return KS(e) || qS(e)
      ? H_(HS(QS, [e].concat(n)))
      : 0 === n.length && 1 === e.length && 'string' == typeof e[0]
      ? e
      : H_(HS(e, n))
  }
  new Set()
  var Q_ = function (e, t, n) {
      return (
        void 0 === n && (n = GS),
        (e.theme !== n.theme && e.theme) || t || n.theme
      )
    },
    G_ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    K_ = /(^-|-$)/g
  function X_(e) {
    return e.replace(G_, '-').replace(K_, '')
  }
  var Y_ = function (e) {
    return S_(E_(e) >>> 0)
  }
  function Z_(e) {
    return 'string' == typeof e && !0
  }
  var J_ = function (e) {
      return (
        'function' == typeof e ||
        ('object' == typeof e && null !== e && !Array.isArray(e))
      )
    },
    eE = function (e) {
      return '__proto__' !== e && 'constructor' !== e && 'prototype' !== e
    }
  function tE(e, t, n) {
    var r = e[n]
    J_(t) && J_(r) ? nE(r, t) : (e[n] = t)
  }
  function nE(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r]
    for (var o = 0, i = n; o < i.length; o++) {
      var a = i[o]
      if (J_(a)) for (var l in a) eE(l) && tE(e, a[l], l)
    }
    return e
  }
  var rE = Qu.createContext()
  rE.Consumer
  var oE = {}
  function iE(e, t, n) {
    var r = YS(e),
      o = !Z_(e),
      i = t.attrs,
      a = void 0 === i ? QS : i,
      l = t.componentId,
      u =
        void 0 === l
          ? (function (e, t) {
              var n = 'string' != typeof e ? 'sc' : X_(e)
              oE[n] = (oE[n] || 0) + 1
              var r = n + '-' + Y_('5.2.3' + n + oE[n])
              return t ? t + '-' + r : r
            })(t.displayName, t.parentComponentId)
          : l,
      s = t.displayName,
      c =
        void 0 === s
          ? (function (e) {
              return Z_(e) ? 'styled.' + e : 'Styled(' + XS(e) + ')'
            })(e)
          : s,
      f =
        t.displayName && t.componentId
          ? X_(t.displayName) + '-' + t.componentId
          : t.componentId || u,
      d = r && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a,
      p = t.shouldForwardProp
    r &&
      e.shouldForwardProp &&
      (p = t.shouldForwardProp
        ? function (n, r) {
            return e.shouldForwardProp(n, r) && t.shouldForwardProp(n, r)
          }
        : e.shouldForwardProp)
    var h,
      m = new P_(n, f, r ? e.componentStyle : void 0),
      y = m.isStatic && 0 === a.length,
      g = function (e, t) {
        return (function (e, t, n, r) {
          var o = e.attrs,
            i = e.componentStyle,
            a = e.defaultProps,
            l = e.foldedComponentIds,
            u = e.shouldForwardProp,
            s = e.styledComponentId,
            c = e.target,
            f = (function (e, t, n) {
              void 0 === e && (e = GS)
              var r = WS({}, t, { theme: e }),
                o = {}
              return (
                n.forEach(function (e) {
                  var t,
                    n,
                    i,
                    a = e
                  for (t in (KS(a) && (a = a(r)), a))
                    r[t] = o[t] =
                      'className' === t
                        ? ((n = o[t]),
                          (i = a[t]),
                          n && i ? n + ' ' + i : n || i)
                        : a[t]
                }),
                [r, o]
              )
            })(Q_(t, Ku().useContext(rE), a) || GS, t, o),
            d = f[0],
            p = f[1],
            h = (function (e, t, n, r) {
              var o = z_(),
                i = L_(),
                a = t
                  ? e.generateAndInjectStyles(GS, o, i)
                  : e.generateAndInjectStyles(n, o, i)
              return a
            })(i, r, d),
            m = n,
            y = p.$as || t.$as || p.as || t.as || c,
            g = Z_(y),
            v = p !== t ? WS({}, t, {}, p) : t,
            b = {}
          for (var w in v)
            '$' !== w[0] &&
              'as' !== w &&
              ('forwardedAs' === w
                ? (b.as = v[w])
                : (u ? u(w, IS) : !g || IS(w)) && (b[w] = v[w]))
          return (
            t.style &&
              p.style !== t.style &&
              (b.style = WS({}, t.style, {}, p.style)),
            (b.className = Array.prototype
              .concat(l, s, h !== s ? h : null, t.className, p.className)
              .filter(Boolean)
              .join(' ')),
            (b.ref = m),
            Ku().createElement(y, b)
          )
        })(h, e, t, y)
      }
    return (
      (g.displayName = c),
      ((h = Qu.forwardRef(g)).attrs = d),
      (h.componentStyle = m),
      (h.displayName = c),
      (h.shouldForwardProp = p),
      (h.foldedComponentIds = r
        ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
        : QS),
      (h.styledComponentId = f),
      (h.target = r ? e.target : e),
      (h.withComponent = function (e) {
        var r = t.componentId,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              i = Object.keys(e)
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(t, ['componentId']),
          i = r && r + '-' + (Z_(e) ? e : X_(XS(e)))
        return iE(e, WS({}, o, { attrs: d, componentId: i }), n)
      }),
      Object.defineProperty(h, 'defaultProps', {
        get: function () {
          return this._foldedDefaultProps
        },
        set: function (t) {
          this._foldedDefaultProps = r ? nE({}, e.defaultProps, t) : t
        },
      }),
      (h.toString = function () {
        return '.' + h.styledComponentId
      }),
      o &&
        $S(h, e, {
          attrs: !0,
          componentStyle: !0,
          displayName: !0,
          foldedComponentIds: !0,
          shouldForwardProp: !0,
          styledComponentId: !0,
          target: !0,
          withComponent: !0,
        }),
      h
    )
  }
  var aE = function (e) {
    return (function e(t, n, r) {
      if ((void 0 === r && (r = GS), !cS.isValidElementType(n)))
        return t_(1, String(n))
      var o = function () {
        return t(n, r, q_.apply(void 0, arguments))
      }
      return (
        (o.withConfig = function (o) {
          return e(t, n, WS({}, r, {}, o))
        }),
        (o.attrs = function (o) {
          return e(
            t,
            n,
            WS({}, r, {
              attrs: Array.prototype.concat(r.attrs, o).filter(Boolean),
            })
          )
        }),
        o
      )
    })(iE, e)
  }
  ;[
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ].forEach(function (e) {
    aE[e] = aE(e)
  })
  !(function () {
    function e(e, t) {
      ;(this.rules = e),
        (this.componentId = t),
        (this.isStatic = x_(e)),
        b_.registerId(this.componentId + 1)
    }
    var t = e.prototype
    ;(t.createStyles = function (e, t, n, r) {
      var o = r(H_(this.rules, t, n, r).join(''), ''),
        i = this.componentId + e
      n.insertRules(i, i, o)
    }),
      (t.removeStyles = function (e, t) {
        t.clearRules(this.componentId + e)
      }),
      (t.renderStyles = function (e, t, n, r) {
        e > 2 && b_.registerId(this.componentId + e),
          this.removeStyles(e, n),
          this.createStyles(e, t, n, r)
      })
  })()
  !(function () {
    function e() {
      var e = this
      ;(this._emitSheetCSS = function () {
        var t = e.instance.toString(),
          n = d_()
        return (
          '<style ' +
          [
            n && 'nonce="' + n + '"',
            'data-styled="true"',
            'data-styled-version="5.2.3"',
          ]
            .filter(Boolean)
            .join(' ') +
          '>' +
          t +
          '</style>'
        )
      }),
        (this.getStyleTags = function () {
          return e.sealed ? t_(2) : e._emitSheetCSS()
        }),
        (this.getStyleElement = function () {
          var t
          if (e.sealed) return t_(2)
          var n =
              (((t = {})['data-styled'] = ''),
              (t['data-styled-version'] = '5.2.3'),
              (t.dangerouslySetInnerHTML = { __html: e.instance.toString() }),
              t),
            r = d_()
          return (
            r && (n.nonce = r),
            [Qu.createElement('style', WS({}, n, { key: 'sc-0-0' }))]
          )
        }),
        (this.seal = function () {
          e.sealed = !0
        }),
        (this.instance = new b_({ isServer: !0 })),
        (this.sealed = !1)
    }
    var t = e.prototype
    ;(t.collectStyles = function (e) {
      return this.sealed
        ? t_(2)
        : Qu.createElement(M_, { sheet: this.instance }, e)
    }),
      (t.interleaveWithNodeStream = function (e) {
        return t_(3)
      })
  })()
  function lE(e, t) {
    if (null == e) return {}
    var n,
      r,
      o = {},
      i = Object.keys(e)
    for (r = 0; r < i.length; r++)
      (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
    return o
  }
  Ku(), Ku()
  var uE =
      'undefined' != typeof window &&
      window.document &&
      window.document.createElement
        ? Ku().useLayoutEffect
        : Ku().useEffect,
    sE = {},
    cE = {},
    fE = function (e) {
      return TE(e)
    },
    dE = function (e) {
      void 0 === e && (e = fE)
      var t = !0,
        n = !1,
        r = 0,
        o = [],
        i = 0,
        a = new Set(),
        l = new Set(),
        u = new Set(),
        s = function (e) {
          var t = o.indexOf(e)
          t < 0 &&
            ((t = o.findIndex(function (t) {
              return t.priority > e.priority
            })),
            o.splice(~t ? t : o.length, 0, e))
        },
        c = function () {
          if (!t)
            try {
              p(), e(c)
            } catch (e) {
              console.error(e)
            }
        },
        f = function () {
          t && ((t = !1), 0 == r && ((r = CE()), e(c)))
        },
        d = []
      this.setTimeout = function (e, t) {
        var n = CE() + t,
          r = function () {
            var e = d.findIndex(function (e) {
              return e.cancel == r
            })
            e >= 0 && d.splice(e, 1)
          },
          o = pE(d, function (e) {
            return e.time > n
          }),
          i = { time: n, handler: e, cancel: r }
        return d.splice(o, 0, i), f(), i
      }
      var p = (this.advance = function () {
        var e = CE()
        if (
          (a.size && (a.forEach(s), a.clear()),
          d.length &&
            AE(function () {
              var t = pE(d, function (t) {
                return t.time > e
              })
              d.splice(0, t).forEach(function (e) {
                return e.handler()
              })
            }),
          e > r)
        ) {
          var t = Math.min(64, e - r)
          ;(r = e),
            AE(function () {
              o.length &&
                (IE(o),
                (o = o.filter(function (e) {
                  return (i = e.priority), e.idle || e.advance(t), !e.idle
                })),
                (i = 0)),
                l.size &&
                  (l.forEach(function (t) {
                    return t(e)
                  }),
                  l.clear()),
                u.size &&
                  ((n = !0),
                  u.forEach(function (t) {
                    return t(e)
                  }),
                  u.clear(),
                  (n = !1))
            })
        }
      })
      ;(this.start = function (e) {
        i > e.priority ? a.add(e) : (s(e), f())
      }),
        (this.onFrame = function (e) {
          l.add(e), f()
        }),
        (this.onWrite = function (e) {
          n ? e(r) : u.add(e)
        })
    }
  function pE(e, t) {
    var n = e.findIndex(t)
    return n < 0 ? e.length : n
  }
  n({}, 'FrameLoop', function () {
    return dE
  })
  var hE = {},
    mE = function () {}
  n(hE, 'noop', function () {
    return mE
  })
  var yE = function (e, t, n) {
    return Object.defineProperty(e, t, {
      value: n,
      writable: !0,
      configurable: !0,
    })
  }
  n(hE, 'defineHidden', function () {
    return yE
  })
  var gE = {
    arr: Array.isArray,
    obj: function (e) {
      return !!e && 'Object' === e.constructor.name
    },
    fun: function (e) {
      return 'function' == typeof e
    },
    str: function (e) {
      return 'string' == typeof e
    },
    num: function (e) {
      return 'number' == typeof e
    },
    und: function (e) {
      return void 0 === e
    },
  }
  function vE(e, t) {
    if (gE.arr(e)) {
      if (!gE.arr(t) || e.length !== t.length) return !1
      for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
      return !0
    }
    return e === t
  }
  n(hE, 'is', function () {
    return gE
  }),
    n(hE, 'isEqual', function () {
      return vE
    })
  var bE = function (e) {
    return gE.str(e) && ('#' == e[0] || /\d/.test(e) || !(!PE || !PE[e]))
  }
  n(hE, 'isAnimatedString', function () {
    return bE
  })
  var wE = function (e, t, n) {
    gE.fun(e.forEach)
      ? e.forEach(t, n)
      : Object.keys(e).forEach(function (r) {
          return t.call(n, e[r], r)
        })
  }
  n(hE, 'each', function () {
    return wE
  })
  var kE,
    SE = function (e) {
      return gE.und(e) ? [] : gE.arr(e) ? e : [e]
    }
  function _E(e, t) {
    if (e.size) {
      var n = Array.from(e)
      e.clear(), wE(n, t)
    }
  }
  n(hE, 'toArray', function () {
    return SE
  }),
    n(hE, 'flush', function () {
      return _E
    }),
    n(cE, 'createStringInterpolator', function () {
      return kE
    })
  var EE,
    xE = new dE()
  n(cE, 'frameLoop', function () {
    return xE
  }),
    n(cE, 'to', function () {
      return EE
    })
  var CE = function () {
    return performance.now()
  }
  n(cE, 'now', function () {
    return CE
  })
  var PE = null
  n(cE, 'colorNames', function () {
    return PE
  })
  var OE = !1
  n(cE, 'skipAnimation', function () {
    return OE
  })
  var TE =
    'undefined' != typeof window
      ? window.requestAnimationFrame
      : function () {
          return -1
        }
  n(cE, 'requestAnimationFrame', function () {
    return TE
  })
  var AE = function (e) {
    return e()
  }
  n(cE, 'batchedUpdates', function () {
    return AE
  })
  var IE = mE
  n(cE, 'willAdvance', function () {
    return IE
  })
  var RE = function (e) {
    var t
    return (
      (t = Object.assign(
        {
          to: EE,
          now: CE,
          frameLoop: xE,
          colorNames: PE,
          skipAnimation: OE,
          createStringInterpolator: kE,
          requestAnimationFrame: TE,
          batchedUpdates: AE,
          willAdvance: IE,
        },
        (function (e) {
          var t = {}
          for (var n in e) void 0 !== e[n] && (t[n] = e[n])
          return t
        })(e)
      )),
      (EE = t.to),
      (CE = t.now),
      (xE = t.frameLoop),
      (PE = t.colorNames),
      (OE = t.skipAnimation),
      (kE = t.createStringInterpolator),
      (TE = t.requestAnimationFrame),
      (AE = t.batchedUpdates),
      (IE = t.willAdvance),
      t
    )
  }
  n(cE, 'assign', function () {
    return RE
  }),
    r(sE, $b514cfa219bd914617eaf35ba409a5ec$exports)
  var NE = {}
  Ku()
  var jE = function (e) {
    return Ku().useEffect(e, [])
  }
  n(NE, 'useOnce', function () {
    return jE
  })
  var zE = function () {
    var e = Ku().useState(0)[1],
      t = Ku().useRef(!1)
    return (
      jE(function () {
        return function () {
          t.current = !0
        }
      }),
      function () {
        t.current || e({})
      }
    )
  }
  function LE(e) {
    var t = Ku().useRef(void 0)
    return (
      Ku().useEffect(function () {
        t.current = e
      }),
      t.current
    )
  }
  n(NE, 'useForceUpdate', function () {
    return zE
  }),
    n(NE, 'usePrev', function () {
      return LE
    }),
    r(sE, NE),
    r(sE, hE),
    r(sE, {})
  var ME = {},
    DE = function (e, t, n) {
      if (gE.fun(e)) return e
      if (gE.arr(e)) return DE({ range: e, output: t, extrapolate: n })
      if (gE.str(e.output[0])) return kE(e)
      var r = e,
        o = r.output,
        i = r.range || [0, 1],
        a = r.extrapolateLeft || r.extrapolate || 'extend',
        l = r.extrapolateRight || r.extrapolate || 'extend',
        u =
          r.easing ||
          function (e) {
            return e
          }
      return function (e) {
        var t = (function (e, t) {
          for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
          return n - 1
        })(e, i)
        return (function (e, t, n, r, o, i, a, l, u) {
          var s = u ? u(e) : e
          if (s < t) {
            if ('identity' === a) return s
            'clamp' === a && (s = t)
          }
          if (s > n) {
            if ('identity' === l) return s
            'clamp' === l && (s = n)
          }
          if (r === o) return r
          if (t === n) return e <= t ? r : o
          t === -1 / 0
            ? (s = -s)
            : n === 1 / 0
            ? (s -= t)
            : (s = (s - t) / (n - t))
          ;(s = i(s)),
            r === -1 / 0
              ? (s = -s)
              : o === 1 / 0
              ? (s += r)
              : (s = s * (o - r) + r)
          return s
        })(e, i[t], i[t + 1], o[t], o[t + 1], u, a, l, r.map)
      }
    }
  n(ME, 'createInterpolator', function () {
    return DE
  }),
    r(sE, ME)
  var FE = {},
    UE = Symbol.for('FluidValue:config')
  n(FE, 'getFluidConfig', function () {
    return VE
  }),
    n(FE, 'getFluidValue', function () {
      return BE
    })
  function BE(e) {
    var t = VE(e)
    return t ? t.get() : e
  }
  function VE(e) {
    if (e) return e[UE]
  }
  var $E = function () {
    var e, t
    ;(e = this),
      (t = this),
      Object.defineProperty(e, UE, { value: t, configurable: !0 })
  }
  function WE() {
    return (WE =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
  }
  n(FE, 'FluidValue', function () {
    return $E
  }),
    r(sE, FE),
    n(sE, 'Globals', function () {
      return cE
    })
  var HE = WE
  Ku(), Ku()
  const qE = Symbol.for('Animated:node'),
    QE = (e) => e && e[qE],
    GE = (e, t) => yE(e, qE, t),
    KE = (e) => e && e[qE] && e[qE].getPayload()
  class XE {
    constructor() {
      ;(this.payload = void 0), GE(this, this)
    }
    getPayload() {
      return this.payload || []
    }
  }
  class YE extends XE {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.elapsedTime = void 0),
        (this.lastPosition = void 0),
        (this.lastVelocity = void 0),
        (this.v0 = void 0),
        gE.num(this._value) && (this.lastPosition = this._value)
    }
    static create(e, t) {
      return new YE(e)
    }
    getPayload() {
      return [this]
    }
    getValue() {
      return this._value
    }
    setValue(e, t) {
      return (
        gE.num(e) &&
          ((this.lastPosition = e),
          t &&
            ((e = Math.round(e / t) * t),
            this.done && (this.lastPosition = e))),
        this._value !== e && ((this._value = e), !0)
      )
    }
    reset() {
      const { done: e } = this
      ;(this.done = !1),
        gE.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null))
    }
  }
  class ZE extends YE {
    constructor(e, t) {
      super(0),
        (this._value = void 0),
        (this._string = null),
        (this._toString = void 0),
        (this._toString = DE({ output: [e, t] }))
    }
    static create(e, t = e) {
      if (gE.str(e) && gE.str(t)) return new ZE(e, t)
      throw TypeError('Expected "from" and "to" to be strings')
    }
    getValue() {
      let e = this._string
      return null == e ? (this._string = this._toString(this._value)) : e
    }
    setValue(e) {
      if (gE.num(e)) {
        if (!super.setValue(e)) return !1
        this._string = null
      } else (this._string = e), (this._value = 1)
      return !0
    }
    reset(e) {
      e && (this._toString = DE({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset()
    }
  }
  const JE = { current: null }
  class ex extends XE {
    constructor(e = null) {
      super(), (this.source = void 0), this.setValue(e)
    }
    getValue(e) {
      if (!this.source) return null
      const t = {}
      return (
        wE(this.source, (n, r) => {
          if ((o = n) && o[qE] === o) t[r] = n.getValue(e)
          else {
            const o = VE(n)
            o ? (t[r] = o.get()) : e || (t[r] = n)
          }
          var o
        }),
        t
      )
    }
    setValue(e) {
      ;(this.source = e), (this.payload = this._makePayload(e))
    }
    reset() {
      this.payload && wE(this.payload, (e) => e.reset())
    }
    _makePayload(e) {
      if (e) {
        const t = new Set()
        return wE(e, this._addToPayload, t), Array.from(t)
      }
    }
    _addToPayload(e) {
      VE(e) && JE.current && JE.current.dependencies.add(e)
      const t = KE(e)
      t && wE(t, (e) => this.add(e))
    }
  }
  class tx extends ex {
    constructor(e, t) {
      super(null),
        (this.source = void 0),
        super.setValue(this._makeAnimated(e, t))
    }
    static create(e, t) {
      return new tx(e, t)
    }
    getValue() {
      return this.source.map((e) => e.getValue())
    }
    setValue(e) {
      const t = this.getPayload()
      e && e.length == t.length
        ? wE(t, (t, n) => t.setValue(e[n]))
        : ((this.source = this._makeAnimated(e)),
          (this.payload = this._makePayload(this.source)))
    }
    _makeAnimated(e, t = e) {
      return e ? e.map((e, n) => (bE(e) ? ZE : YE).create(e, t[n])) : []
    }
  }
  class nx extends ex {
    constructor(e) {
      super(null), (this.update = e), (this.dirty = !1)
    }
    setValue(e, t) {
      if (e) {
        if (t && ((JE.current = t), e.style)) {
          const { createAnimatedStyle: n } = t.host
          e = HE(HE({}, e), {}, { style: n(e.style) })
        }
        super.setValue(e), (JE.current = null)
      }
    }
    onParentChange({ type: e }) {
      this.dirty ||
        'change' !== e ||
        ((this.dirty = !0),
        xE.onFrame(() => {
          ;(this.dirty = !1), this.update()
        }))
    }
  }
  const rx = (e, t) =>
    Ku().forwardRef((n, r) => {
      const o = Ku().useRef(null),
        i = !gE.fun(e) || (e.prototype && e.prototype.isReactComponent),
        a = zE(),
        l = new nx(() => {
          const e = o.current
          if (i && !e) return
          !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && a()
        }),
        u = new Set()
      return (
        l.setValue(n, { dependencies: u, host: t }),
        uE(
          () => (
            wE(u, (e) => e.addChild(l)), () => wE(u, (e) => e.removeChild(l))
          )
        ),
        Ku().createElement(
          e,
          HE({}, t.getComponentProps(l.getValue()), {
            ref:
              i &&
              ((e) => {
                o.current = (function (e, t) {
                  e && (gE.fun(e) ? e(t) : (e.current = t))
                  return t
                })(r, e)
              }),
          })
        )
      )
    })
  const ox = Symbol.for('AnimatedComponent'),
    ix = (e) =>
      gE.str(e)
        ? e
        : e && gE.str(e.displayName)
        ? e.displayName
        : (gE.fun(e) && e.name) || null
  function ax(e, t) {
    var n = Ku().useState(function () {
        return { inputs: t, result: e() }
      })[0],
      r = Ku().useRef(!0),
      o = Ku().useRef(n),
      i =
        r.current ||
        Boolean(
          t &&
            o.current.inputs &&
            (function (e, t) {
              if (e.length !== t.length) return !1
              for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
              return !0
            })(t, o.current.inputs)
        )
          ? o.current
          : { inputs: t, result: e() }
    return (
      Ku().useEffect(
        function () {
          ;(r.current = !1), (o.current = i)
        },
        [i]
      ),
      i.result
    )
  }
  Ku()
  var lx = !1
  function ux() {
    lx ||
      ((lx = !0),
      console.warn(
        'react-spring: The "interpolate" function is deprecated in v10 (use "to" instead)'
      ))
  }
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ******************************************************************************/ var sx = function () {
    return (sx =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        return e
      }).apply(this, arguments)
  }
  var cx = '[-+]?\\d*\\.?\\d+',
    fx = '[-+]?\\d*\\.?\\d+%'
  function dx() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)'
  }
  var px = new RegExp('rgb' + dx(cx, cx, cx)),
    hx = new RegExp('rgba' + dx(cx, cx, cx, cx)),
    mx = new RegExp('hsl' + dx(cx, fx, fx)),
    yx = new RegExp('hsla' + dx(cx, fx, fx, cx)),
    gx = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    vx = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    bx = /^#([0-9a-fA-F]{6})$/,
    wx = /^#([0-9a-fA-F]{8})$/
  function kx(e, t, n) {
    var r = (1 - Math.abs(2 * n - 1)) * t,
      o = n - r / 2,
      i = (function (e, t, n) {
        return e < 60
          ? [t, n, 0]
          : e < 120
          ? [n, t, 0]
          : e < 180
          ? [0, t, n]
          : e < 240
          ? [0, n, t]
          : e < 300
          ? [n, 0, t]
          : [t, 0, n]
      })(e, r, r * (1 - Math.abs(((e / 60) % 2) - 1))),
      a = i[0],
      l = i[1],
      u = i[2]
    return (
      (Math.round(255 * (a + o)) << 24) |
      (Math.round(255 * (l + o)) << 16) |
      (Math.round(255 * (u + o)) << 8)
    )
  }
  function Sx(e) {
    var t = parseInt(e, 10)
    return t < 0 ? 0 : t > 255 ? 255 : t
  }
  function _x(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360
  }
  function Ex(e) {
    var t = parseFloat(e)
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
  }
  function xx(e) {
    var t = parseFloat(e)
    return t < 0 ? 0 : t > 100 ? 1 : t / 100
  }
  function Cx(e) {
    var t,
      n,
      r =
        'number' == typeof (t = e)
          ? t >>> 0 === t && t >= 0 && t <= 4294967295
            ? t
            : null
          : (n = bx.exec(t))
          ? parseInt(n[1] + 'ff', 16) >>> 0
          : PE && void 0 !== PE[t]
          ? PE[t]
          : (n = px.exec(t))
          ? ((Sx(n[1]) << 24) | (Sx(n[2]) << 16) | (Sx(n[3]) << 8) | 255) >>> 0
          : (n = hx.exec(t))
          ? ((Sx(n[1]) << 24) |
              (Sx(n[2]) << 16) |
              (Sx(n[3]) << 8) |
              Ex(n[4])) >>>
            0
          : (n = gx.exec(t))
          ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + 'ff', 16) >>> 0
          : (n = wx.exec(t))
          ? parseInt(n[1], 16) >>> 0
          : (n = vx.exec(t))
          ? parseInt(
              n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4],
              16
            ) >>> 0
          : (n = mx.exec(t))
          ? (255 | kx(_x(n[1]), xx(n[2]), xx(n[3]))) >>> 0
          : (n = yx.exec(t))
          ? (kx(_x(n[1]), xx(n[2]), xx(n[3])) | Ex(n[4])) >>> 0
          : null
    return null === r
      ? e
      : 'rgba(' +
          ((4278190080 & (r = r || 0)) >>> 24) +
          ', ' +
          ((16711680 & r) >>> 16) +
          ', ' +
          ((65280 & r) >>> 8) +
          ', ' +
          (255 & r) / 255 +
          ')'
  }
  var Px,
    Ox = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Tx = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Ax = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Ix = function (e, t, n, r, o) {
      return (
        'rgba(' +
        Math.round(t) +
        ', ' +
        Math.round(n) +
        ', ' +
        Math.round(r) +
        ', ' +
        o +
        ')'
      )
    },
    Rx = function (e) {
      Px ||
        (Px = PE
          ? new RegExp('(' + Object.keys(PE).join('|') + ')', 'g')
          : /^\b$/)
      var t = e.output.map(function (e) {
          return BE(e).replace(Tx, Cx).replace(Px, Cx)
        }),
        n = t.map(function (e) {
          return e.match(Ox).map(Number)
        }),
        r = n[0]
          .map(function (e, t) {
            return n.map(function (e) {
              if (!(t in e))
                throw Error('The arity of each "output" value must be equal')
              return e[t]
            })
          })
          .map(function (t) {
            return DE(sx(sx({}, e), { output: t }))
          })
      return function (e) {
        var n = 0
        return t[0]
          .replace(Ox, function () {
            return String(r[n++](e))
          })
          .replace(Ax, Ix)
      }
    }
  const Nx = { tension: 210, friction: 20 },
    jx = HE(
      HE({}, { tension: 170, friction: 26 }),
      {},
      { mass: 1, damping: 1, easing: (e) => e, clamp: !1 }
    )
  class zx {
    constructor() {
      ;(this.tension = void 0),
        (this.friction = void 0),
        (this.frequency = void 0),
        (this.damping = void 0),
        (this.mass = void 0),
        (this.velocity = 0),
        (this.restVelocity = void 0),
        (this.precision = void 0),
        (this.progress = void 0),
        (this.duration = void 0),
        (this.easing = void 0),
        (this.clamp = void 0),
        (this.bounce = void 0),
        (this.decay = void 0),
        (this.round = void 0),
        Object.assign(this, jx)
    }
  }
  function Lx(e, t) {
    if (gE.und(t.decay)) {
      const n = !gE.und(t.tension) || !gE.und(t.friction)
      ;(!n && gE.und(t.frequency) && gE.und(t.damping) && gE.und(t.mass)) ||
        ((e.duration = void 0), (e.decay = void 0)),
        n && (e.frequency = void 0)
    } else e.duration = void 0
  }
  const Mx = []
  class Dx {
    constructor() {
      ;(this.changed = !1),
        (this.values = Mx),
        (this.toValues = null),
        (this.fromValues = Mx),
        (this.to = void 0),
        (this.from = void 0),
        (this.config = new zx()),
        (this.immediate = !1),
        (this.onStart = void 0),
        (this.onChange = void 0),
        (this.onRest = [])
    }
  }
  const Fx = (e, t) => ax(e, t || [{}])
  function Ux(e, ...t) {
    return gE.fun(e) ? e(...t) : e
  }
  const Bx = (e, t) =>
      !0 === e || !!(t && e && (gE.fun(e) ? e(t) : SE(e).includes(t))),
    Vx = (e, t, n) => e && (gE.fun(e) ? e(t, n) : gE.arr(e) ? e[t] : HE({}, e)),
    $x = (e, t) =>
      !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
    Wx = (e, t = [], n = {}) => {
      let r = Hx
      e.default && !0 !== e.default && ((e = e.default), (r = Object.keys(e)))
      for (const o of r) {
        const r = e[o]
        gE.und(r) || t.includes(o) || (n[o] = r)
      }
      return n
    },
    Hx = [
      'pause',
      'cancel',
      'config',
      'immediate',
      'onDelayEnd',
      'onProps',
      'onStart',
      'onChange',
      'onRest',
    ],
    qx = {
      config: 1,
      from: 1,
      to: 1,
      ref: 1,
      loop: 1,
      reset: 1,
      pause: 1,
      cancel: 1,
      reverse: 1,
      immediate: 1,
      default: 1,
      delay: 1,
      onDelayEnd: 1,
      onProps: 1,
      onStart: 1,
      onChange: 1,
      onRest: 1,
      items: 1,
      trail: 1,
      sort: 1,
      expires: 1,
      initial: 1,
      enter: 1,
      update: 1,
      leave: 1,
      children: 1,
      keys: 1,
      callId: 1,
      parentId: 1,
    }
  function Qx(e) {
    const t = (function (e) {
      const t = {}
      let n = 0
      if (
        (wE(e, (e, r) => {
          qx[r] || ((t[r] = e), n++)
        }),
        n)
      )
        return t
    })(e)
    if (t) {
      const n = { to: t }
      return wE(e, (e, r) => r in t || (n[r] = e)), n
    }
    return HE({}, e)
  }
  function Gx(e) {
    const t = VE(e)
    return t
      ? Gx(t.get())
      : gE.arr(e)
      ? e.map(Gx)
      : bE(e)
      ? kE({ range: [0, 1], output: [e, e] })(1)
      : e
  }
  function Kx(e, { key: t, props: n, state: r, actions: o }) {
    return new Promise((i, a) => {
      let l,
        u,
        s = !1,
        c = Bx(n.cancel, t)
      function f() {
        r.resumeQueue.add(d), u.cancel(), (l = u.time - cE.now())
      }
      function d() {
        l > 0 ? (r.pauseQueue.add(f), (u = cE.frameLoop.setTimeout(p, l))) : p()
      }
      function p() {
        r.pauseQueue.delete(f), e <= (r.cancelId || 0) && (c = !0)
        try {
          o.start(
            HE(HE({}, n), {}, { callId: e, delay: l, cancel: c, pause: s }),
            i
          )
        } catch (e) {
          a(e)
        }
      }
      c
        ? p()
        : ((l = Ux(n.delay || 0, t)),
          (s = Bx(n.pause, t)),
          s ? (r.resumeQueue.add(d), o.pause()) : (o.resume(), d()))
    })
  }
  const Xx = (e, t) =>
      1 == t.length
        ? t[0]
        : t.some((e) => e.cancelled)
        ? Jx(e)
        : t.every((e) => e.noop)
        ? Yx(e)
        : Zx(
            e,
            t.every((e) => e.finished)
          ),
    Yx = (e, t = e.get()) => ({ value: t, noop: !0, finished: !0, target: e }),
    Zx = (e, t, n = e.get()) => ({ value: n, finished: t, target: e }),
    Jx = (e, t = e.get()) => ({ value: t, cancelled: !0, target: e })
  async function eC(e, t, n, r) {
    t.pause &&
      (await new Promise((e) => {
        n.resumeQueue.add(e)
      }))
    const { callId: o, parentId: i, onRest: a } = t,
      { asyncTo: l, promise: u } = n
    return i || e !== l || t.reset
      ? (n.promise = (async () => {
          ;(n.asyncId = o), (n.asyncTo = e)
          const s = Wx(t, ['onRest'])
          let c, f
          const d = new Promise((e, t) => ((c = e), (f = t))),
            p = (e) => {
              const t =
                (o <= (n.cancelId || 0) && Jx(r)) ||
                (o !== n.asyncId && Zx(r, !1))
              if (t) throw ((e.result = t), e)
            },
            h = ((e) => (...t) => {
              const n = (e) => {
                throw (e instanceof nC && f(e), e)
              }
              try {
                return e(...t).catch(n)
              } catch (e) {
                n(e)
              }
            })((e, t) => {
              const i = new nC()
              p(i)
              const a = gE.obj(e) ? HE({}, e) : HE(HE({}, t), {}, { to: e })
              return (
                (a.parentId = o),
                wE(s, (e, t) => {
                  gE.und(a[t]) && (a[t] = e)
                }),
                r.start(a).then(
                  async (e) => (
                    p(i),
                    r.is('PAUSED') &&
                      (await new Promise((e) => {
                        n.resumeQueue.add(e)
                      })),
                    e
                  )
                )
              )
            })
          let m
          try {
            let t
            gE.arr(e)
              ? (t = (async (e) => {
                  for (const t of e) await h(t)
                })(e))
              : gE.fun(e) && (t = Promise.resolve(e(h, r.stop.bind(r)))),
              await Promise.all([t.then(c), d]),
              (m = Zx(r, !0))
          } catch (e) {
            if (!(e instanceof nC)) throw e
            m = e.result
          } finally {
            o == n.asyncId &&
              ((n.asyncId = i),
              (n.asyncTo = i ? l : void 0),
              (n.promise = i ? u : void 0))
          }
          return (
            gE.fun(a) &&
              AE(() => {
                a(m)
              }),
            m
          )
        })())
      : u
  }
  function tC(e, t) {
    ;(e.cancelId = t), (e.asyncId = e.asyncTo = e.promise = void 0)
  }
  class nC extends Error {
    constructor() {
      super(
        'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.'
      ),
        (this.result = void 0)
    }
  }
  const rC = (e) => e instanceof iC
  let oC = 1
  class iC extends $E {
    constructor(...e) {
      super(...e),
        (this.id = oC++),
        (this.key = void 0),
        (this._priority = 0),
        (this._children = new Set())
    }
    get priority() {
      return this._priority
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e))
    }
    get() {
      const e = QE(this)
      return e && e.getValue()
    }
    to(...e) {
      return EE(this, e)
    }
    interpolate(...e) {
      return ux(), EE(this, e)
    }
    addChild(e) {
      this._children.size || this._attach(), this._children.add(e)
    }
    removeChild(e) {
      this._children.delete(e), this._children.size || this._detach()
    }
    onParentChange({ type: e }) {
      this.idle
        ? 'start' == e && (this._reset(), this._start())
        : 'reset' == e && this._reset()
    }
    _attach() {}
    _detach() {}
    _reset() {
      this._emit({ type: 'reset', parent: this })
    }
    _start() {
      this._emit({ type: 'start', parent: this })
    }
    _onChange(e, t = !1) {
      this._emit({ type: 'change', parent: this, value: e, idle: t })
    }
    _onPriorityChange(e) {
      this.idle || xE.start(this),
        this._emit({ type: 'priority', parent: this, priority: e })
    }
    _emit(e) {
      wE(Array.from(this._children), (t) => {
        t.onParentChange(e)
      })
    }
  }
  const aC = 'CREATED',
    lC = 'IDLE',
    uC = 'ACTIVE',
    sC = 'PAUSED',
    cC = 'DISPOSED'
  class fC extends iC {
    constructor(e, t) {
      if (
        (super(),
        (this.key = void 0),
        (this.animation = new Dx()),
        (this.queue = void 0),
        (this._phase = aC),
        (this._state = { pauseQueue: new Set(), resumeQueue: new Set() }),
        (this._defaultProps = {}),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        !gE.und(e) || !gE.und(t))
      ) {
        const n = gE.obj(e) ? HE({}, e) : HE(HE({}, t), {}, { from: e })
        ;(n.default = !0), this.start(n)
      }
    }
    get idle() {
      return !this.is(uC) && !this._state.asyncTo
    }
    get goal() {
      return BE(this.animation.to)
    }
    get velocity() {
      const e = QE(this)
      return e instanceof YE
        ? e.lastVelocity || 0
        : e.getPayload().map((e) => e.lastVelocity || 0)
    }
    advance(e) {
      let t = !0,
        n = !1
      const r = this.animation
      let { config: o, toValues: i } = r
      const a = KE(r.to)
      if (!a) {
        const e = VE(r.to)
        e && (i = SE(e.get()))
      }
      return (
        r.values.forEach((l, u) => {
          if (l.done) return
          let s = a ? a[u].lastPosition : i[u],
            c = r.immediate,
            f = s
          if (!c) {
            if (((f = l.lastPosition), o.tension <= 0))
              return void (l.done = !0)
            const t = (l.elapsedTime += e),
              n = r.fromValues[u],
              i =
                null != l.v0
                  ? l.v0
                  : (l.v0 = gE.arr(o.velocity) ? o.velocity[u] : o.velocity)
            let a
            if (gE.und(o.duration))
              if (o.decay) {
                const e = !0 === o.decay ? 0.998 : o.decay,
                  r = Math.exp(-(1 - e) * t)
                ;(f = n + (i / (1 - e)) * (1 - r)),
                  (c = Math.abs(l.lastPosition - f) < 0.1),
                  (a = i * r)
              } else {
                a = null == l.lastVelocity ? i : l.lastVelocity
                const t =
                    o.precision ||
                    (n == s ? 0.005 : Math.min(1, 0.001 * Math.abs(s - n))),
                  r = o.restVelocity || t / 10,
                  u = o.clamp ? 0 : o.bounce,
                  d = !gE.und(u),
                  p = n == s ? l.v0 > 0 : n < s
                let h,
                  m = !1
                const y = 1,
                  g = Math.ceil(e / y)
                for (
                  let e = 0;
                  e < g &&
                  ((h = Math.abs(a) > r),
                  h || ((c = Math.abs(s - f) <= t), !c));
                  ++e
                ) {
                  d &&
                    ((m = f == s || f > s == p), m && ((a = -a * u), (f = s)))
                  ;(a +=
                    ((1e-6 * -o.tension * (f - s) + 0.001 * -o.friction * a) /
                      o.mass) *
                    y),
                    (f += a * y)
                }
              }
            else {
              let r = o.progress || 0
              o.duration <= 0
                ? (r = 1)
                : (r += (1 - r) * Math.min(1, t / o.duration)),
                (f = n + o.easing(r) * (s - n)),
                (a = (f - l.lastPosition) / e),
                (c = 1 == r)
            }
            ;(l.lastVelocity = a),
              Number.isNaN(f) &&
                (console.warn('Got NaN while animating:', this), (c = !0))
          }
          a && !a[u].done && (c = !1),
            c ? (l.done = !0) : (t = !1),
            l.setValue(f, o.round) && (n = !0)
        }),
        t ? this.finish() : n && this._onChange(this.get()),
        t
      )
    }
    is(e) {
      return this._phase == e
    }
    set(e) {
      return (
        AE(() => {
          if ((this._focus(e), this._set(e) && !this.is(uC)))
            return this._onChange(this.get(), !0)
          this._stop()
        }),
        this
      )
    }
    pause() {
      dC(this, 'pause'),
        this.is(sC) ||
          ((this._phase = sC), _E(this._state.pauseQueue, (e) => e()))
    }
    resume() {
      dC(this, 'resume'),
        this.is(sC) && (this._start(), _E(this._state.resumeQueue, (e) => e()))
    }
    finish(e) {
      if ((this.resume(), this.is(uC))) {
        const t = this.animation
        !t.config.decay && gE.und(e) && (e = t.to),
          gE.und(e) || this._set(e),
          AE(() => {
            t.changed || ((t.changed = !0), t.onStart && t.onStart(this)),
              this._stop()
          })
      }
      return this
    }
    update(e) {
      dC(this, 'update')
      return (this.queue || (this.queue = [])).push(e), this
    }
    async start(e, t) {
      let n
      dC(this, 'start'),
        gE.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [gE.obj(e) ? e : HE(HE({}, t), {}, { to: e })])
      const r = await Promise.all(n.map((e) => this._update(e)))
      return Xx(this, r)
    }
    stop(e) {
      return (
        this.is(cC) ||
          (tC(this._state, this._lastCallId),
          this._focus(this.get()),
          AE(() => this._stop(e))),
        this
      )
    }
    reset() {
      this._update({ reset: !0 })
    }
    dispose() {
      this.is(cC) ||
        (this.animation && (this.animation.onRest = []),
        this.stop(),
        (this._phase = cC))
    }
    onParentChange(e) {
      super.onParentChange(e),
        'change' == e.type
          ? this.is(uC) || (this._reset(), this.is(sC) || this._start())
          : 'priority' == e.type && (this.priority = e.priority + 1)
    }
    _prepareNode({ to: e, from: t, reverse: n }) {
      const r = this.key || '',
        o = {
          to: (e = !gE.obj(e) || VE(e) ? e : e[r]),
          from: (t = !gE.obj(t) || VE(t) ? t : t[r]),
        }
      if (this.is(aC)) {
        n && ([e, t] = [t, e]), (t = BE(t))
        const r = this._updateNode(gE.und(t) ? BE(e) : t)
        r && !gE.und(t) && r.setValue(t)
      }
      return o
    }
    _updateNode(e) {
      let t = QE(this)
      if (!gE.und(e)) {
        const n = this._getNodeType(e)
        ;(t && t.constructor === n) || GE(this, (t = n.create(e)))
      }
      return t
    }
    _getNodeType(e) {
      const t = QE(e)
      return t ? t.constructor : gE.arr(e) ? tx : bE(e) ? ZE : YE
    }
    _update(e, t) {
      const n = this._defaultProps,
        r = (t) => {
          const r = $x(e, t)
          gE.und(r) || (n[t] = r), n[t] && (e[t] = n[t])
        }
      r('cancel'), r('pause')
      const o = this._prepareNode(e)
      return Kx(++this._lastCallId, {
        key: this.key,
        props: e,
        state: this._state,
        actions: {
          pause: this.pause.bind(this),
          resume: this.resume.bind(this),
          start: this._merge.bind(this, o),
        },
      }).then((n) => {
        if (e.loop && n.finished && (!t || !n.noop)) {
          const t = mC(e)
          if (t) return this._update(t, !0)
        }
        return n
      })
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(Jx(this))
      const { key: r, animation: o } = this,
        i = this._defaultProps,
        a = !gE.und(e.to),
        l = !gE.und(e.from)
      if (a || l) {
        if (!(t.callId > this._lastToId)) return n(Jx(this))
        this._lastToId = t.callId
      }
      const u = (e) => (gE.und(t[e]) ? i[e] : t[e]),
        s = pC(u('onDelayEnd'), r)
      s && s(t, this),
        t.default &&
          ((e, t, n) => {
            Wx(t, n, e)
          })(i, t, ['pause', 'cancel'])
      const { to: c, from: f } = o
      let { to: d = c, from: p = f } = e
      l && !a && (d = p), t.reverse && ([d, p] = [p, d])
      const h = !vE(p, f)
      h && (o.from = p)
      const m = !vE(d, c)
      m && this._focus(d)
      const y = VE(d),
        g = VE(p)
      g && (p = g.get())
      const v = gE.arr(t.to) || gE.fun(t.to),
        { config: b } = o,
        { decay: w, velocity: k } = b
      t.config &&
        !v &&
        (function (e, t, n) {
          n && (Lx((n = HE({}, n)), t), (t = HE(HE({}, n), t))),
            Lx(e, t),
            Object.assign(e, t)
          for (const t in jx) null == e[t] && (e[t] = jx[t])
          let { mass: r, frequency: o, damping: i } = e
          gE.und(o) ||
            (o < 0.01 && (o = 0.01),
            i < 0 && (i = 0),
            (e.tension = Math.pow((2 * Math.PI) / o, 2) * r),
            (e.friction = (4 * Math.PI * i * r) / o))
        })(b, Ux(t.config, r), t.config !== i.config ? Ux(i.config, r) : void 0)
      let S = QE(this)
      if (!S || gE.und(d)) return n(Zx(this, !0))
      const _ = gE.und(t.reset)
          ? l && !t.default
          : !gE.und(p) && Bx(t.reset, r),
        E = _ ? p : this.get(),
        x = Gx(d),
        C = gE.num(x) || gE.arr(x) || bE(x),
        P = !v && (!C || Bx(i.immediate || t.immediate, r))
      if (m)
        if (P) S = this._updateNode(x)
        else {
          const e = this._getNodeType(d)
          if (e !== S.constructor)
            throw Error(
              'Cannot animate between ' +
                S.constructor.name +
                ' and ' +
                e.name +
                ', as the "to" prop suggests'
            )
        }
      const O = S.constructor
      let T = !!y,
        A = !1
      if (!T) {
        const e = _ || (this.is(aC) && h)
        ;(m || e) && ((A = vE(Gx(E), x)), (T = !A)),
          (vE(b.decay, w) && vE(b.velocity, k)) || (T = !0)
      }
      if (
        (A && this.is(uC) && (o.changed && !_ ? (T = !0) : T || this._stop()),
        !v)
      ) {
        ;(T || VE(c)) &&
          ((o.values = S.getPayload()),
          (o.toValues = y ? null : O == ZE ? [1] : SE(x))),
          (o.immediate = P),
          (o.onStart = pC(u('onStart'), r)),
          (o.onChange = pC(u('onChange'), r))
        const e = o.onRest,
          i = _ && !t.onRest ? e[0] || mE : hC(pC(u('onRest'), r), this)
        if (T) {
          o.onRest = [i, hC(n, this)]
          let t = _ ? 0 : 1
          t < e.length &&
            AE(() => {
              for (; t < e.length; t++) e[t]()
            })
        } else (_ || t.onRest) && (o.onRest[0] = i)
      }
      const I = pC(u('onProps'), r)
      I && I(t, this),
        _ && S.setValue(E),
        v
          ? n(eC(t.to, t, this._state, this))
          : T
          ? (_ && (this._phase = lC), this._reset(), this._start())
          : this.is(uC) && !m
          ? o.onRest.push(hC(n, this))
          : n(Yx(this, E))
    }
    _focus(e) {
      const t = this.animation
      if (e !== t.to) {
        let n = VE(t.to)
        n && n.removeChild(this), (t.to = e)
        let r = 0
        ;(n = VE(e)) &&
          (n.addChild(this), rC(e) && (r = (e.priority || 0) + 1)),
          (this.priority = r)
      }
    }
    _set(e) {
      const t = VE(e)
      t && (e = t.get())
      const n = QE(this),
        r = n && n.getValue()
      return n ? n.setValue(e) : this._updateNode(e), !vE(e, r)
    }
    _onChange(e, t = !1) {
      const n = this.animation
      n.changed || t || ((n.changed = !0), n.onStart && n.onStart(this)),
        n.onChange && n.onChange(e, this),
        super._onChange(e, t)
    }
    _reset() {
      const e = this.animation
      QE(this).reset(e.to),
        this.is(uC) || (e.changed = !1),
        e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
        super._reset()
    }
    _start() {
      this.is(uC) ||
        ((this._phase = uC),
        super._start(),
        OE ? this.finish() : xE.start(this))
    }
    _stop(e) {
      if ((this.resume(), this.is(uC))) {
        ;(this._phase = lC), this._onChange(this.get(), !0)
        const t = this.animation
        wE(t.values, (e) => {
          e.done = !0
        })
        const n = t.onRest
        n.length &&
          ((t.onRest = [t.toValues ? mE : n[0]]),
          t.changed || (n[0] = mE),
          wE(n, (t) => t(e)))
      }
    }
  }
  function dC(e, t) {
    if (e.is(cC))
      throw Error(
        'Cannot call "' +
          t +
          '" of disposed "' +
          e.constructor.name +
          '" object'
      )
  }
  function pC(e, t) {
    return gE.fun(e) ? e : t && e ? e[t] : void 0
  }
  const hC = (e, t) => {
    const { to: n } = t.animation
    return e
      ? (r) => {
          if (r) e(Jx(t))
          else {
            const r = Gx(n),
              o = vE(Gx(t.get()), r)
            e(Zx(t, o))
          }
        }
      : mE
  }
  function mC(e, t = e.loop, n = e.to) {
    let r = Ux(t)
    if (r) {
      const o = !0 !== r && Qx(r),
        i = (o || e).reverse,
        a = !o || o.reset
      return yC(
        HE(
          HE({}, e),
          {},
          {
            loop: t,
            default: !1,
            to: !i || gE.arr(n) || gE.fun(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
          },
          o
        )
      )
    }
  }
  function yC(e) {
    const { to: t, from: n } = (e = Qx(e)),
      r = new Set()
    return (
      n ? gC(n, r) : delete e.from,
      gE.obj(t) ? gC(t, r) : t || delete e.to,
      (e.keys = r.size ? Array.from(r) : null),
      e
    )
  }
  function gC(e, t) {
    wE(e, (e, n) => null != e && t.add(n))
  }
  const vC = ['onStart', 'onChange', 'onRest']
  let bC = 1
  class wC {
    constructor(e, t) {
      ;(this.id = bC++),
        (this.springs = {}),
        (this.queue = []),
        (this._flush = void 0),
        (this._initialProps = void 0),
        (this._phase = aC),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._state = { pauseQueue: new Set(), resumeQueue: new Set() }),
        (this._events = {
          onStart: new Set(),
          onChange: new Set(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start(e)
    }
    get idle() {
      return (
        !this._state.asyncTo && Object.values(this.springs).every((e) => e.idle)
      )
    }
    is(e) {
      return this._phase == e
    }
    get() {
      const e = {}
      return this.each((t, n) => (e[n] = t.get())), e
    }
    update(e) {
      return e && this.queue.push(yC(e)), this
    }
    start(e) {
      const t = e ? SE(e).map(yC) : this.queue
      return (
        e || (this.queue = []),
        this._flush ? this._flush(this, t) : (PC(this, t), kC(this, t))
      )
    }
    stop(e) {
      if (gE.und(e))
        this.each((e) => e.stop()), tC(this._state, this._lastAsyncId)
      else {
        const t = this.springs
        wE(SE(e), (e) => t[e].stop())
      }
      return this
    }
    pause(e) {
      if (gE.und(e)) this.each((e) => e.pause())
      else {
        const t = this.springs
        wE(SE(e), (e) => t[e].pause())
      }
      return this
    }
    resume(e) {
      if (gE.und(e)) this.each((e) => e.resume())
      else {
        const t = this.springs
        wE(SE(e), (e) => t[e].resume())
      }
      return this
    }
    reset() {
      return this.each((e) => e.reset()), this
    }
    each(e) {
      wE(this.springs, e)
    }
    dispose() {
      ;(this._state.asyncTo = void 0),
        this.each((e) => e.dispose()),
        (this.springs = {})
    }
    _onFrame() {
      const { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0
      r && this._phase != uC && ((this._phase = uC), _E(e, (e) => e(this)))
      const o = (t.size || (!r && n.size)) && this.get()
      _E(t, (e) => e(o)),
        r ||
          ((this._phase = lC),
          _E(n, ([e, t]) => {
            ;(t.value = o), e(t)
          }))
    }
    onParentChange(e) {
      'change' == e.type &&
        (this._active[e.idle ? 'delete' : 'add'](e.parent),
        xE.onFrame(this._onFrame))
    }
  }
  function kC(e, t) {
    return Promise.all(t.map((t) => SC(e, t))).then((t) => Xx(e, t))
  }
  function SC(e, t, n) {
    const { to: r, loop: o, onRest: i } = t
    o && (t.loop = !1)
    const a = gE.arr(r) || gE.fun(r) ? r : void 0
    a
      ? ((t.to = void 0), (t.onRest = void 0))
      : wE(vC, (n) => {
          const r = t[n]
          if (gE.fun(r)) {
            const o = e._events[n]
            o instanceof Set
              ? (t[n] = () => o.add(r))
              : (t[n] = ({ finished: e, cancelled: t }) => {
                  const n = o.get(r)
                  n
                    ? (e || (n.finished = !1), t && (n.cancelled = !0))
                    : o.set(r, { value: null, finished: e, cancelled: t })
                })
          }
        })
    const l = (t.keys || Object.keys(e.springs)).map((n) =>
        e.springs[n].start(t)
      ),
      u = e._state
    return (
      a
        ? l.push(
            Kx(++e._lastAsyncId, {
              props: t,
              state: u,
              actions: {
                pause: mE,
                resume: mE,
                start: function (t, n) {
                  ;(t.onRest = i),
                    t.cancel
                      ? ((e, t) => !gE.und($x(e, t)))(t, 'cancel') &&
                        tC(u, t.callId)
                      : n(eC(a, t, u, e))
                },
              },
            })
          )
        : t.keys || !0 !== t.cancel || tC(u, e._lastAsyncId),
      Promise.all(l).then((i) => {
        const a = Xx(e, i)
        if (o && a.finished && (!n || !a.noop)) {
          const n = mC(t, o, r)
          if (n) return PC(e, [n]), SC(e, n, !0)
        }
        return a
      })
    )
  }
  function _C(e, t) {
    const n = HE({}, e.springs)
    return (
      t &&
        wE(SE(t), (e) => {
          gE.und(e.keys) && (e = yC(e)),
            gE.obj(e.to) || (e = HE(HE({}, e), {}, { to: void 0 })),
            CC(n, e, (e) => xC(e))
        }),
      n
    )
  }
  function EC(e, t) {
    wE(t, (t, n) => {
      e.springs[n] || ((e.springs[n] = t), t.addChild(e))
    })
  }
  function xC(e, t) {
    const n = new fC()
    return (n.key = e), t && n.addChild(t), n
  }
  function CC(e, t, n) {
    t.keys &&
      wE(t.keys, (r) => {
        ;(e[r] || (e[r] = n(r)))._prepareNode(t)
      })
  }
  function PC(e, t) {
    wE(t, (t) => {
      CC(e.springs, t, (t) => xC(t, e))
    })
  }
  const OC = Ku().createContext({}),
    TC = (e) => {
      let { children: t } = e,
        n = lE(e, ['children'])
      const r = Ku().useContext(OC)
      n = Fx(() => HE(HE({}, r), n), [
        r,
        n.pause,
        n.cancel,
        n.immediate,
        n.config,
      ])
      const { Provider: o } = OC
      return Ku().createElement(o, { value: n }, t)
    }
  ;(TC.Provider = OC.Provider), (TC.Consumer = OC.Consumer)
  const AC = () => Ku().useContext(OC),
    IC = (e) => ({
      get controllers() {
        return e()
      },
      update: function (t) {
        return (
          wE(e(), (e, n) => {
            e.update(Vx(t, n, e))
          }),
          this
        )
      },
      start: async function (t) {
        const n = await Promise.all(
          e().map((e, n) => {
            const r = Vx(t, n, e)
            return e.start(r)
          })
        )
        return {
          value: n.map((e) => e.value),
          finished: n.every((e) => e.finished),
        }
      },
      stop: (t) => wE(e(), (e) => e.stop(t)),
      pause: (t) => wE(e(), (e) => e.pause(t)),
      resume: (t) => wE(e(), (e) => e.resume(t)),
    })
  const RC = 'mount',
    NC = 'enter',
    jC = 'update',
    zC = 'leave'
  function LC(e, t, n) {
    const { ref: r, reset: o, sort: i, trail: a = 0, expires: l = !0 } = t,
      u = SE(e),
      s = [],
      c = MC(u, t),
      f = Ku().useRef(null),
      d = o ? null : f.current
    uE(() => {
      f.current = s
    }),
      jE(() => () =>
        wE(f.current, (e) => {
          e.expired && clearTimeout(e.expirationId), e.ctrl.dispose()
        })
      )
    const p = []
    if (
      (d &&
        wE(d, (e, t) => {
          e.expired
            ? clearTimeout(e.expirationId)
            : ~(t = p[t] = c.indexOf(e.key)) && (s[t] = e)
        }),
      wE(u, (e, t) => {
        s[t] || (s[t] = { key: c[t], item: e, phase: RC, ctrl: new wC() })
      }),
      p.length)
    ) {
      let e = -1
      wE(p, (n, r) => {
        const o = d[r]
        ~n
          ? ((e = s.indexOf(o)), (s[e] = HE(HE({}, o), {}, { item: u[n] })))
          : t.leave && s.splice(++e, 0, o)
      })
    }
    gE.fun(i) && s.sort((e, t) => i(e.item, t.item))
    let h = -a
    const m = zE(),
      y = Wx(t),
      g = new Map()
    wE(s, (e, n) => {
      const r = e.key,
        o = e.phase
      let i, u
      if (o == RC) (i = t.enter), (u = NC)
      else {
        const e = c.indexOf(r) < 0
        if (o != zC)
          if (e) (i = t.leave), (u = zC)
          else {
            if (!(i = t.update)) return
            u = jC
          }
        else {
          if (e) return
          ;(i = t.enter), (u = NC)
        }
      }
      if (
        ((i = Ux(i, e.item, n)), (i = gE.obj(i) ? Qx(i) : { to: i }), !i.config)
      ) {
        const r = t.config || y.config
        i.config = Ux(r, e.item, n)
      }
      const s = HE(HE({}, y), {}, { delay: (h += a), reset: !1 }, i)
      if (u == NC && gE.und(s.from)) {
        const r = gE.und(t.initial) || d ? t.from : t.initial
        s.from = Ux(r, e.item, n)
      }
      const { onRest: p } = s
      s.onRest = (e) => {
        const t = f.current,
          n = t.find((e) => e.key === r)
        if (n)
          if ((gE.fun(p) && p(e, n), e.cancelled && n.phase != jC)) n.phase = o
          else if (n.ctrl.idle) {
            const e = t.every((e) => e.ctrl.idle)
            if (n.phase == zC) {
              const t = Ux(l, n.item)
              if (!1 !== t) {
                const r = !0 === t ? 0 : t
                if (((n.expired = !0), !e && r > 0))
                  return void (
                    r <= 2147483647 && (n.expirationId = setTimeout(m, r))
                  )
              }
            }
            e && t.some((e) => e.expired) && m()
          }
      }
      const v = _C(e.ctrl, s)
      g.set(e, { phase: u, springs: v, payload: s })
    })
    const v = AC()
    uE(() => {
      wE(s, (e) => {
        e.ctrl.start({ default: v })
      })
    }, [v])
    const b = Ku().useMemo(() => IC(() => f.current.map((e) => e.ctrl)), [])
    Ku().useImperativeHandle(r, () => b),
      uE(
        () => {
          wE(g, ({ phase: e, springs: t, payload: n }, o) => {
            EC(o.ctrl, t),
              v.cancel ||
                ((o.phase = e),
                e == NC && o.ctrl.start({ default: v }),
                o.ctrl[r ? 'update' : 'start'](n))
          })
        },
        o ? void 0 : n
      )
    const w = (e) =>
      Ku().createElement(
        Ku().Fragment,
        null,
        s.map((t, n) => {
          const { springs: r } = g.get(t) || t.ctrl,
            o = e(HE({}, r), t.item, t, n)
          return o && o.type
            ? Ku().createElement(
                o.type,
                HE({}, o.props, {
                  key: gE.str(t.key) || gE.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref,
                })
              )
            : o
        })
      )
    return 3 == arguments.length ? [w, b.start, b.stop] : w
  }
  function MC(e, { key: t, keys: n = t }) {
    return gE.und(n) ? e : gE.fun(n) ? e.map(n) : SE(n)
  }
  class DC extends iC {
    constructor(e, t) {
      super(),
        (this.source = e),
        (this.key = void 0),
        (this.idle = !0),
        (this.calc = void 0),
        (this.calc = DE(...t))
      const n = this._get(),
        r = gE.arr(n) ? tx : YE
      GE(this, r.create(n))
    }
    advance(e) {
      const t = this._get()
      vE(t, this.get()) || (QE(this).setValue(t), this._onChange(t, this.idle))
    }
    _get() {
      const e = gE.arr(this.source)
        ? this.source.map((e) => e.get())
        : SE(this.source.get())
      return this.calc(...e)
    }
    _reset() {
      wE(KE(this), (e) => e.reset()), super._reset()
    }
    _start() {
      ;(this.idle = !1),
        super._start(),
        OE ? ((this.idle = !0), this.advance()) : xE.start(this)
    }
    _attach() {
      let e = !0,
        t = 1
      wE(SE(this.source), (n) => {
        rC(n) && (n.idle || (e = !1), (t = Math.max(t, n.priority + 1))),
          n.addChild(this)
      }),
        (this.priority = t),
        e || (this._reset(), this._start())
    }
    _detach() {
      wE(SE(this.source), (e) => {
        e.removeChild(this)
      }),
        (this.idle = !0)
    }
    onParentChange(e) {
      'start' == e.type
        ? this.advance()
        : 'change' == e.type
        ? this.idle
          ? this.advance()
          : e.idle &&
            ((this.idle = SE(this.source).every((e) => !1 !== e.idle)),
            this.idle &&
              (this.advance(),
              wE(KE(this), (e) => {
                e.done = !0
              })))
        : 'priority' == e.type &&
          (this.priority = SE(this.source).reduce(
            (e, t) => Math.max(e, (t.priority || 0) + 1),
            0
          )),
        super.onParentChange(e)
    }
  }
  cE.assign({ createStringInterpolator: Rx, to: (e, t) => new DC(e, t) })
  const FC = /^--/
  function UC(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
      ? ''
      : 'number' != typeof t ||
        0 === t ||
        FC.test(e) ||
        (VC.hasOwnProperty(e) && VC[e])
      ? ('' + t).trim()
      : t + 'px'
  }
  const BC = {}
  let VC = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  }
  const $C = ['Webkit', 'Ms', 'Moz', 'O']
  VC = Object.keys(VC).reduce(
    (e, t) => (
      $C.forEach(
        (n) =>
          (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] =
            e[t])
      ),
      e
    ),
    VC
  )
  const WC = /^(matrix|translate|scale|rotate|skew)/,
    HC = /^(translate)/,
    qC = /^(rotate|skew)/,
    QC = (e, t) => (gE.num(e) && 0 !== e ? e + t : e),
    GC = (e, t) =>
      gE.arr(e)
        ? e.every((e) => GC(e, t))
        : gE.num(e)
        ? e === t
        : parseFloat(e) === t
  class KC extends ex {
    constructor(e) {
      let { x: t, y: n, z: r } = e,
        o = lE(e, ['x', 'y', 'z'])
      const i = [],
        a = []
      ;(t || n || r) &&
        (i.push([t || 0, n || 0, r || 0]),
        a.push((e) => [
          'translate3d(' + e.map((e) => QC(e, 'px')).join(',') + ')',
          GC(e, 0),
        ])),
        wE(o, (e, t) => {
          if ('transform' === t) i.push([e || '']), a.push((e) => [e, '' === e])
          else if (WC.test(t)) {
            if ((delete o[t], gE.und(e))) return
            const n = HC.test(t) ? 'px' : qC.test(t) ? 'deg' : ''
            i.push(SE(e)),
              a.push(
                'rotate3d' === t
                  ? ([e, t, r, o]) => [
                      'rotate3d(' +
                        e +
                        ',' +
                        t +
                        ',' +
                        r +
                        ',' +
                        QC(o, n) +
                        ')',
                      GC(o, 0),
                    ]
                  : (e) => [
                      t + '(' + e.map((e) => QC(e, n)).join(',') + ')',
                      GC(e, t.startsWith('scale') ? 1 : 0),
                    ]
              )
          }
        }),
        i.length && (o.transform = new XC(i, a)),
        super(o)
    }
  }
  class XC extends $E {
    constructor(e, t) {
      super(),
        (this.inputs = e),
        (this.transforms = t),
        (this._value = null),
        (this._children = new Set())
    }
    get() {
      return this._value || (this._value = this._get())
    }
    _get() {
      let e = '',
        t = !0
      return (
        wE(this.inputs, (n, r) => {
          const o = BE(n[0]),
            [i, a] = this.transforms[r](gE.arr(o) ? o : n.map(BE))
          ;(e += ' ' + i), (t = t && a)
        }),
        t ? 'none' : e
      )
    }
    addChild(e) {
      this._children.size ||
        wE(this.inputs, (e) =>
          wE(e, (e) => {
            const t = VE(e)
            t && t.addChild(this)
          })
        ),
        this._children.add(e)
    }
    removeChild(e) {
      this._children.delete(e),
        this._children.size ||
          wE(this.inputs, (e) =>
            wE(e, (e) => {
              const t = VE(e)
              t && t.removeChild(this)
            })
          )
    }
    onParentChange(e) {
      'change' == e.type && (this._value = null),
        wE(this._children, (t) => {
          t.onParentChange(e)
        })
    }
  }
  cE.assign({
    colorNames: {
      transparent: 0,
      aliceblue: 4042850303,
      antiquewhite: 4209760255,
      aqua: 16777215,
      aquamarine: 2147472639,
      azure: 4043309055,
      beige: 4126530815,
      bisque: 4293182719,
      black: 255,
      blanchedalmond: 4293643775,
      blue: 65535,
      blueviolet: 2318131967,
      brown: 2771004159,
      burlywood: 3736635391,
      burntsienna: 3934150143,
      cadetblue: 1604231423,
      chartreuse: 2147418367,
      chocolate: 3530104575,
      coral: 4286533887,
      cornflowerblue: 1687547391,
      cornsilk: 4294499583,
      crimson: 3692313855,
      cyan: 16777215,
      darkblue: 35839,
      darkcyan: 9145343,
      darkgoldenrod: 3095792639,
      darkgray: 2846468607,
      darkgreen: 6553855,
      darkgrey: 2846468607,
      darkkhaki: 3182914559,
      darkmagenta: 2332068863,
      darkolivegreen: 1433087999,
      darkorange: 4287365375,
      darkorchid: 2570243327,
      darkred: 2332033279,
      darksalmon: 3918953215,
      darkseagreen: 2411499519,
      darkslateblue: 1211993087,
      darkslategray: 793726975,
      darkslategrey: 793726975,
      darkturquoise: 13554175,
      darkviolet: 2483082239,
      deeppink: 4279538687,
      deepskyblue: 12582911,
      dimgray: 1768516095,
      dimgrey: 1768516095,
      dodgerblue: 512819199,
      firebrick: 2988581631,
      floralwhite: 4294635775,
      forestgreen: 579543807,
      fuchsia: 4278255615,
      gainsboro: 3705462015,
      ghostwhite: 4177068031,
      gold: 4292280575,
      goldenrod: 3668254975,
      gray: 2155905279,
      green: 8388863,
      greenyellow: 2919182335,
      grey: 2155905279,
      honeydew: 4043305215,
      hotpink: 4285117695,
      indianred: 3445382399,
      indigo: 1258324735,
      ivory: 4294963455,
      khaki: 4041641215,
      lavender: 3873897215,
      lavenderblush: 4293981695,
      lawngreen: 2096890111,
      lemonchiffon: 4294626815,
      lightblue: 2916673279,
      lightcoral: 4034953471,
      lightcyan: 3774873599,
      lightgoldenrodyellow: 4210742015,
      lightgray: 3553874943,
      lightgreen: 2431553791,
      lightgrey: 3553874943,
      lightpink: 4290167295,
      lightsalmon: 4288707327,
      lightseagreen: 548580095,
      lightskyblue: 2278488831,
      lightslategray: 2005441023,
      lightslategrey: 2005441023,
      lightsteelblue: 2965692159,
      lightyellow: 4294959359,
      lime: 16711935,
      limegreen: 852308735,
      linen: 4210091775,
      magenta: 4278255615,
      maroon: 2147483903,
      mediumaquamarine: 1724754687,
      mediumblue: 52735,
      mediumorchid: 3126187007,
      mediumpurple: 2473647103,
      mediumseagreen: 1018393087,
      mediumslateblue: 2070474495,
      mediumspringgreen: 16423679,
      mediumturquoise: 1221709055,
      mediumvioletred: 3340076543,
      midnightblue: 421097727,
      mintcream: 4127193855,
      mistyrose: 4293190143,
      moccasin: 4293178879,
      navajowhite: 4292783615,
      navy: 33023,
      oldlace: 4260751103,
      olive: 2155872511,
      olivedrab: 1804477439,
      orange: 4289003775,
      orangered: 4282712319,
      orchid: 3664828159,
      palegoldenrod: 4008225535,
      palegreen: 2566625535,
      paleturquoise: 2951671551,
      palevioletred: 3681588223,
      papayawhip: 4293907967,
      peachpuff: 4292524543,
      peru: 3448061951,
      pink: 4290825215,
      plum: 3718307327,
      powderblue: 2967529215,
      purple: 2147516671,
      rebeccapurple: 1714657791,
      red: 4278190335,
      rosybrown: 3163525119,
      royalblue: 1097458175,
      saddlebrown: 2336560127,
      salmon: 4202722047,
      sandybrown: 4104413439,
      seagreen: 780883967,
      seashell: 4294307583,
      sienna: 2689740287,
      silver: 3233857791,
      skyblue: 2278484991,
      slateblue: 1784335871,
      slategray: 1887473919,
      slategrey: 1887473919,
      snow: 4294638335,
      springgreen: 16744447,
      steelblue: 1182971135,
      tan: 3535047935,
      teal: 8421631,
      thistle: 3636451583,
      tomato: 4284696575,
      turquoise: 1088475391,
      violet: 4001558271,
      wheat: 4125012991,
      white: 4294967295,
      whitesmoke: 4126537215,
      yellow: 4294902015,
      yellowgreen: 2597139199,
    },
    createStringInterpolator: Rx,
    batchedUpdates: fk.unstable_batchedUpdates,
  })
  const YC = ((
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (e) => new ex(e),
      getComponentProps: r = (e) => e,
    } = {}
  ) => {
    const o = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      i = (e) => {
        const t = ix(e) || 'Anonymous'
        return (
          ((e = gE.str(e)
            ? rx(e, o)
            : e[ox] || (e[ox] = rx(e, o))).displayName = 'Animated(' + t + ')'),
          e
        )
      }
    return (
      wE(e, (e, t) => {
        gE.str(t) || (t = ix(e)), (i[t] = i(e))
      }),
      { animated: i }
    )
  })(
    [
      'a',
      'abbr',
      'address',
      'area',
      'article',
      'aside',
      'audio',
      'b',
      'base',
      'bdi',
      'bdo',
      'big',
      'blockquote',
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      'cite',
      'code',
      'col',
      'colgroup',
      'data',
      'datalist',
      'dd',
      'del',
      'details',
      'dfn',
      'dialog',
      'div',
      'dl',
      'dt',
      'em',
      'embed',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'i',
      'iframe',
      'img',
      'input',
      'ins',
      'kbd',
      'keygen',
      'label',
      'legend',
      'li',
      'link',
      'main',
      'map',
      'mark',
      'menu',
      'menuitem',
      'meta',
      'meter',
      'nav',
      'noscript',
      'object',
      'ol',
      'optgroup',
      'option',
      'output',
      'p',
      'param',
      'picture',
      'pre',
      'progress',
      'q',
      'rp',
      'rt',
      'ruby',
      's',
      'samp',
      'script',
      'section',
      'select',
      'small',
      'source',
      'span',
      'strong',
      'style',
      'sub',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'title',
      'tr',
      'track',
      'u',
      'ul',
      'var',
      'video',
      'wbr',
      'circle',
      'clipPath',
      'defs',
      'ellipse',
      'foreignObject',
      'g',
      'image',
      'line',
      'linearGradient',
      'mask',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'radialGradient',
      'rect',
      'stop',
      'svg',
      'text',
      'tspan',
    ],
    {
      applyAnimatedValues: function (e, t) {
        if (!e.nodeType || !e.setAttribute) return !1
        const n =
            'filter' === e.nodeName ||
            (e.parentNode && 'filter' === e.parentNode.nodeName),
          r = t,
          { style: o, children: i, scrollTop: a, scrollLeft: l } = r,
          u = lE(r, ['style', 'children', 'scrollTop', 'scrollLeft']),
          s = Object.values(u),
          c = Object.keys(u).map((t) =>
            n || e.hasAttribute(t)
              ? t
              : BC[t] ||
                (BC[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase()))
          )
        cE.frameLoop.onWrite(() => {
          void 0 !== i && (e.textContent = i)
          for (let t in o)
            if (o.hasOwnProperty(t)) {
              const n = UC(t, o[t])
              'float' === t
                ? (t = 'cssFloat')
                : FC.test(t)
                ? e.style.setProperty(t, n)
                : (e.style[t] = n)
            }
          c.forEach((t, n) => {
            e.setAttribute(t, s[n])
          }),
            void 0 !== a && (e.scrollTop = a),
            void 0 !== l && (e.scrollLeft = l)
        })
      },
      createAnimatedStyle: (e) => new KC(e),
      getComponentProps: (e) => lE(e, ['scrollTop', 'scrollLeft']),
    }
  ).animated
  function ZC(e) {
    for (
      var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r]
    throw Error(
      '[Immer] minified error nr: ' +
        e +
        (n.length
          ? ' ' +
            n
              .map(function (e) {
                return "'" + e + "'"
              })
              .join(',')
          : '') +
        '. Find the full error at: https://bit.ly/3cXEKWf'
    )
  }
  function JC(e) {
    return !!e && !!e[FP]
  }
  function eP(e) {
    return (
      !!e &&
      ((function (e) {
        if (!e || 'object' != typeof e) return !1
        var t = Object.getPrototypeOf(e)
        if (null === t) return !0
        var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
        return 'function' == typeof n && Function.toString.call(n) === UP
      })(e) ||
        Array.isArray(e) ||
        !!e[DP] ||
        !!e.constructor[DP] ||
        lP(e) ||
        uP(e))
    )
  }
  function tP(e, t, n) {
    void 0 === n && (n = !1),
      0 === nP(e)
        ? (n ? Object.keys : BP)(e).forEach(function (r) {
            ;(n && 'symbol' == typeof r) || t(r, e[r], e)
          })
        : e.forEach(function (n, r) {
            return t(r, n, e)
          })
  }
  function nP(e) {
    var t = e[FP]
    return t
      ? t.i > 3
        ? t.i - 4
        : t.i
      : Array.isArray(e)
      ? 1
      : lP(e)
      ? 2
      : uP(e)
      ? 3
      : 0
  }
  function rP(e, t) {
    return 2 === nP(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
  }
  function oP(e, t) {
    return 2 === nP(e) ? e.get(t) : e[t]
  }
  function iP(e, t, n) {
    var r = nP(e)
    2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : (e[t] = n)
  }
  function aP(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
  }
  function lP(e) {
    return jP && e instanceof Map
  }
  function uP(e) {
    return zP && e instanceof Set
  }
  function sP(e) {
    return e.o || e.t
  }
  function cP(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e)
    var t = VP(e)
    delete t[FP]
    for (var n = BP(t), r = 0; r < n.length; r++) {
      var o = n[r],
        i = t[o]
      !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
        (i.get || i.set) &&
          (t[o] = {
            configurable: !0,
            writable: !0,
            enumerable: i.enumerable,
            value: e[o],
          })
    }
    return Object.create(Object.getPrototypeOf(e), t)
  }
  function fP(e, t) {
    return (
      void 0 === t && (t = !1),
      pP(e) ||
        JC(e) ||
        !eP(e) ||
        (nP(e) > 1 && (e.set = e.add = e.clear = e.delete = dP),
        Object.freeze(e),
        t &&
          tP(
            e,
            function (e, t) {
              return fP(t, !0)
            },
            !0
          )),
      e
    )
  }
  function dP() {
    ZC(2)
  }
  function pP(e) {
    return null == e || 'object' != typeof e || Object.isFrozen(e)
  }
  function hP(e) {
    var t = $P[e]
    return t || ZC(18, e), t
  }
  function mP() {
    return RP
  }
  function yP(e, t) {
    t && (hP('Patches'), (e.u = []), (e.s = []), (e.v = t))
  }
  function gP(e) {
    vP(e), e.p.forEach(wP), (e.p = null)
  }
  function vP(e) {
    e === RP && (RP = e.l)
  }
  function bP(e) {
    return (RP = { p: [], l: RP, h: e, m: !0, _: 0 })
  }
  function wP(e) {
    var t = e[FP]
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0)
  }
  function kP(e, t) {
    t._ = t.p.length
    var n = t.p[0],
      r = void 0 !== e && e !== n
    return (
      t.h.O || hP('ES5').S(t, e, r),
      r
        ? (n[FP].P && (gP(t), ZC(4)),
          eP(e) && ((e = SP(t, e)), t.l || EP(t, e)),
          t.u && hP('Patches').M(n[FP], e, t.u, t.s))
        : (e = SP(t, n, [])),
      gP(t),
      t.u && t.v(t.u, t.s),
      e !== MP ? e : void 0
    )
  }
  function SP(e, t, n) {
    if (pP(t)) return t
    var r = t[FP]
    if (!r)
      return (
        tP(
          t,
          function (o, i) {
            return _P(e, r, t, o, i, n)
          },
          !0
        ),
        t
      )
    if (r.A !== e) return t
    if (!r.P) return EP(e, r.t, !0), r.t
    if (!r.I) {
      ;(r.I = !0), r.A._--
      var o = 4 === r.i || 5 === r.i ? (r.o = cP(r.k)) : r.o
      tP(3 === r.i ? new Set(o) : o, function (t, i) {
        return _P(e, r, o, t, i, n)
      }),
        EP(e, o, !1),
        n && e.u && hP('Patches').R(r, n, e.u, e.s)
    }
    return r.o
  }
  function _P(e, t, n, r, o, i) {
    if (JC(o)) {
      var a = SP(
        e,
        o,
        i && t && 3 !== t.i && !rP(t.D, r) ? i.concat(r) : void 0
      )
      if ((iP(n, r, a), !JC(a))) return
      e.m = !1
    }
    if (eP(o) && !pP(o)) {
      if (!e.h.F && e._ < 1) return
      SP(e, o), (t && t.A.l) || EP(e, o)
    }
  }
  function EP(e, t, n) {
    void 0 === n && (n = !1), e.h.F && e.m && fP(t, n)
  }
  function xP(e, t) {
    var n = e[FP]
    return (n ? sP(n) : e)[t]
  }
  function CP(e, t) {
    if (t in e)
      for (var n = Object.getPrototypeOf(e); n; ) {
        var r = Object.getOwnPropertyDescriptor(n, t)
        if (r) return r
        n = Object.getPrototypeOf(n)
      }
  }
  function PP(e) {
    e.P || ((e.P = !0), e.l && PP(e.l))
  }
  function OP(e) {
    e.o || (e.o = cP(e.t))
  }
  function TP(e, t, n) {
    var r = lP(t)
      ? hP('MapSet').N(t, n)
      : uP(t)
      ? hP('MapSet').T(t, n)
      : e.O
      ? (function (e, t) {
          var n = Array.isArray(e),
            r = {
              i: n ? 1 : 0,
              A: t ? t.A : mP(),
              P: !1,
              I: !1,
              D: {},
              l: t,
              t: e,
              k: null,
              o: null,
              j: null,
              C: !1,
            },
            o = r,
            i = WP
          n && ((o = [r]), (i = HP))
          var a = Proxy.revocable(o, i),
            l = a.revoke,
            u = a.proxy
          return (r.k = u), (r.j = l), u
        })(t, n)
      : hP('ES5').J(t, n)
    return (n ? n.A : mP()).p.push(r), r
  }
  function AP(e, t) {
    switch (t) {
      case 2:
        return new Map(e)
      case 3:
        return Array.from(e)
    }
    return cP(e)
  }
  var IP,
    RP,
    NP = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
    jP = 'undefined' != typeof Map,
    zP = 'undefined' != typeof Set,
    LP =
      'undefined' != typeof Proxy &&
      void 0 !== Proxy.revocable &&
      'undefined' != typeof Reflect,
    MP = NP
      ? Symbol.for('immer-nothing')
      : (((IP = {})['immer-nothing'] = !0), IP),
    DP = NP ? Symbol.for('immer-draftable') : '__$immer_draftable',
    FP = NP ? Symbol.for('immer-state') : '__$immer_state',
    UP =
      ('undefined' != typeof Symbol && Symbol.iterator,
      '' + Object.prototype.constructor),
    BP =
      'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : void 0 !== Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            )
          }
        : Object.getOwnPropertyNames,
    VP =
      Object.getOwnPropertyDescriptors ||
      function (e) {
        var t = {}
        return (
          BP(e).forEach(function (n) {
            t[n] = Object.getOwnPropertyDescriptor(e, n)
          }),
          t
        )
      },
    $P = {},
    WP = {
      get: function (e, t) {
        if (t === FP) return e
        var n = sP(e)
        if (!rP(n, t))
          return (function (e, t, n) {
            var r,
              o = CP(t, n)
            return o
              ? 'value' in o
                ? o.value
                : null === (r = o.get) || void 0 === r
                ? void 0
                : r.call(e.k)
              : void 0
          })(e, n, t)
        var r = n[t]
        return e.I || !eP(r)
          ? r
          : r === xP(e.t, t)
          ? (OP(e), (e.o[t] = TP(e.A.h, r, e)))
          : r
      },
      has: function (e, t) {
        return t in sP(e)
      },
      ownKeys: function (e) {
        return Reflect.ownKeys(sP(e))
      },
      set: function (e, t, n) {
        var r = CP(sP(e), t)
        if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0
        if (!e.P) {
          var o = xP(sP(e), t),
            i = null == o ? void 0 : o[FP]
          if (i && i.t === n) return (e.o[t] = n), (e.D[t] = !1), !0
          if (aP(n, o) && (void 0 !== n || rP(e.t, t))) return !0
          OP(e), PP(e)
        }
        return (
          (e.o[t] === n && 'number' != typeof n) ||
          ((e.o[t] = n), (e.D[t] = !0), !0)
        )
      },
      deleteProperty: function (e, t) {
        return (
          void 0 !== xP(e.t, t) || t in e.t
            ? ((e.D[t] = !1), OP(e), PP(e))
            : delete e.D[t],
          e.o && delete e.o[t],
          !0
        )
      },
      getOwnPropertyDescriptor: function (e, t) {
        var n = sP(e),
          r = Reflect.getOwnPropertyDescriptor(n, t)
        return r
          ? {
              writable: !0,
              configurable: 1 !== e.i || 'length' !== t,
              enumerable: r.enumerable,
              value: n[t],
            }
          : r
      },
      defineProperty: function () {
        ZC(11)
      },
      getPrototypeOf: function (e) {
        return Object.getPrototypeOf(e.t)
      },
      setPrototypeOf: function () {
        ZC(12)
      },
    },
    HP = {}
  tP(WP, function (e, t) {
    HP[e] = function () {
      return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
    }
  }),
    (HP.deleteProperty = function (e, t) {
      return WP.deleteProperty.call(this, e[0], t)
    }),
    (HP.set = function (e, t, n) {
      return WP.set.call(this, e[0], t, n, e[0])
    })
  var qP = new ((function () {
      function e(e) {
        var t = this
        ;(this.O = LP),
          (this.F = !0),
          (this.produce = function (e, n, r) {
            if ('function' == typeof e && 'function' != typeof n) {
              var o = n
              n = e
              var i = t
              return function (e) {
                var t = this
                void 0 === e && (e = o)
                for (
                  var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), l = 1;
                  l < r;
                  l++
                )
                  a[l - 1] = arguments[l]
                return i.produce(e, function (e) {
                  var r
                  return (r = n).call.apply(r, [t, e].concat(a))
                })
              }
            }
            var a
            if (
              ('function' != typeof n && ZC(6),
              void 0 !== r && 'function' != typeof r && ZC(7),
              eP(e))
            ) {
              var l = bP(t),
                u = TP(t, e, void 0),
                s = !0
              try {
                ;(a = n(u)), (s = !1)
              } finally {
                s ? gP(l) : vP(l)
              }
              return 'undefined' != typeof Promise && a instanceof Promise
                ? a.then(
                    function (e) {
                      return yP(l, r), kP(e, l)
                    },
                    function (e) {
                      throw (gP(l), e)
                    }
                  )
                : (yP(l, r), kP(a, l))
            }
            if (!e || 'object' != typeof e) {
              if ((a = n(e)) === MP) return
              return void 0 === a && (a = e), t.F && fP(a, !0), a
            }
            ZC(21, e)
          }),
          (this.produceWithPatches = function (e, n) {
            return 'function' == typeof e
              ? function (n) {
                  for (
                    var r = arguments.length,
                      o = Array(r > 1 ? r - 1 : 0),
                      i = 1;
                    i < r;
                    i++
                  )
                    o[i - 1] = arguments[i]
                  return t.produceWithPatches(n, function (t) {
                    return e.apply(void 0, [t].concat(o))
                  })
                }
              : [
                  t.produce(e, n, function (e, t) {
                    ;(r = e), (o = t)
                  }),
                  r,
                  o,
                ]
            var r, o
          }),
          'boolean' == typeof (null == e ? void 0 : e.useProxies) &&
            this.setUseProxies(e.useProxies),
          'boolean' == typeof (null == e ? void 0 : e.autoFreeze) &&
            this.setAutoFreeze(e.autoFreeze)
      }
      var t = e.prototype
      return (
        (t.createDraft = function (e) {
          eP(e) || ZC(8),
            JC(e) &&
              (e = (function (e) {
                return (
                  JC(e) || ZC(22, e),
                  (function e(t) {
                    if (!eP(t)) return t
                    var n,
                      r = t[FP],
                      o = nP(t)
                    if (r) {
                      if (!r.P && (r.i < 4 || !hP('ES5').K(r))) return r.t
                      ;(r.I = !0), (n = AP(t, o)), (r.I = !1)
                    } else n = AP(t, o)
                    return (
                      tP(n, function (t, o) {
                        ;(r && oP(r.t, t) === o) || iP(n, t, e(o))
                      }),
                      3 === o ? new Set(n) : n
                    )
                  })(e)
                )
              })(e))
          var t = bP(this),
            n = TP(this, e, void 0)
          return (n[FP].C = !0), vP(t), n
        }),
        (t.finishDraft = function (e, t) {
          var n = e && e[FP],
            r = n.A
          return yP(r, t), kP(void 0, r)
        }),
        (t.setAutoFreeze = function (e) {
          this.F = e
        }),
        (t.setUseProxies = function (e) {
          e && !LP && ZC(20), (this.O = e)
        }),
        (t.applyPatches = function (e, t) {
          var n
          for (n = t.length - 1; n >= 0; n--) {
            var r = t[n]
            if (0 === r.path.length && 'replace' === r.op) {
              e = r.value
              break
            }
          }
          var o = hP('Patches').$
          return JC(e)
            ? o(e, t)
            : this.produce(e, function (e) {
                return o(e, t.slice(n + 1))
              })
        }),
        e
      )
    })())(),
    QP = qP.produce
  qP.produceWithPatches.bind(qP),
    qP.setAutoFreeze.bind(qP),
    qP.setUseProxies.bind(qP),
    qP.applyPatches.bind(qP),
    qP.createDraft.bind(qP),
    qP.finishDraft.bind(qP)
  function GP(e) {
    var t = Ku().useState(e),
      n = t[1]
    return [
      t[0],
      Ku().useCallback(function (e) {
        n('function' == typeof e ? QP(e) : e)
      }, []),
    ]
  }
  function KP() {
    return (KP =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
  }
  function XP(e, t) {
    return t || (t = e.slice(0)), (e.raw = t), e
  }
  Ku()
  var YP,
    ZP,
    JP,
    eO,
    tO,
    nO,
    rO = window.ResizeObserver
  function oO() {
    var e = Ku().useRef(),
      t = Ku().useState({ left: 0, top: 0, width: 0, height: 0 }),
      n = t[0],
      r = t[1],
      o = Ku().useState(e.current),
      i = o[0],
      a = o[1]
    Ku().useEffect(function () {
      e.current !== i && a(e.current)
    })
    var l = Ku().useMemo(
      function () {
        return new rO(function (e) {
          var t = e[0]
          return i && r(t.contentRect)
        })
      },
      [i]
    )
    return (
      Ku().useEffect(
        function () {
          return (
            i && l.observe(i),
            function () {
              i && l.disconnect()
            }
          )
        },
        [l, i]
      ),
      [{ ref: e }, n]
    )
  }
  var iO = window.ResizeObserver,
    aO = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '-', '$', ',', '.'],
    lO = aO.reduce(function (e, t, n) {
      return (e[t] = n), e
    }, {}),
    uO = aE.div(
      YP ||
        (YP = XP([
          '\n  font-family: ',
          ';\n  font-weight: 600;\n  font-size: ',
          ";\n  color: #0e103c;\n  font-feature-settings: 'tnum';\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.7px;\n  line-height: ",
          ';\n',
        ])),
      function (e) {
        return e.fontFamily
      },
      function (e) {
        return e.lineHeight
      },
      function (e) {
        return e.lineHeight
      }
    ),
    sO = YC(
      aE.div(
        ZP ||
          (ZP = XP([
            '\n  position: absolute;\n  user-select: none;\n  visibility: hidden;\n',
          ]))
      )
    )
  var cO = aE.div(
      JP ||
        (JP = XP([
          '\n  display: flex;\n  width: 100%;\n  height: ',
          ';\n  max-height: ',
          ';\n  min-height: ',
          ';\n  position: relative;\n  flex: 1;\n',
        ])),
      function (e) {
        return e.lineHeight
      },
      function (e) {
        return e.lineHeight
      },
      function (e) {
        return e.lineHeight
      }
    ),
    fO = YC(
      aE.div(
        eO ||
          (eO = XP([
            '\n  position: absolute;\n  opacity: 0;\n  transform: none;\n',
          ]))
      )
    ),
    dO = function (e) {
      var t = e.n,
        n = e.align,
        r = void 0 === n ? 'right' : n,
        o = e.alignLeftComponentAfterNumber,
        i = e.fontFamily,
        a = void 0 === i ? 'Avenir' : i,
        l = e.fontSize,
        u = (void 0 === l ? 36 : l) + 'px',
        s = Ku().useState(!1),
        c = s[0],
        f = s[1],
        d = Ku().useMemo(
          function () {
            return t
              ? (function (e) {
                  return (function (e, t) {
                    void 0 === t && (t = !1)
                    var n = []
                    return (
                      ((n = e.toString().split('.'))[0] = t
                        ? n[0]
                        : n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')),
                      n.join('.')
                    )
                  })(e).split('')
                })(t)
              : []
          },
          [t]
        ),
        p = oO(),
        h = p[0],
        m = p[1].width,
        y = oO(),
        g = y[0],
        v = y[1].width,
        b = Ku().useRef([]),
        w = GP([]),
        k = w[0],
        S = w[1],
        _ = GP([]),
        E = _[0],
        x = _[1],
        C = v - 0
      Ku().useLayoutEffect(
        function () {
          if (b.current.length === aO.length) {
            if (0 !== m)
              return (
                aO.forEach(function (e, t) {
                  var n = b.current[t]
                  if (n) {
                    var r = new iO(function (e) {
                      var r = e[0]
                      return (
                        n &&
                        S(function (e) {
                          e[t] = r.contentRect
                        })
                      )
                    })
                    x(function (e) {
                      e[t] = r
                    }),
                      S(function (e) {
                        var r = n.getBoundingClientRect(),
                          o = r.left,
                          i = r.right,
                          a = r.bottom,
                          l = r.top
                        e[t] = { left: o, right: i, bottom: a, top: l }
                      })
                    n && r.observe(n)
                  } else console.warn('Undefined ref, this hints at a bigger problem (are you sure the refs are being set correctly on setup?')
                }),
                function () {
                  E.forEach(function (e) {
                    return e.disconnect()
                  })
                }
              )
          } else
            console.error(
              'Mismatch with the internal text nodes measurer, bailing'
            )
        },
        [m]
      ),
        Ku().useLayoutEffect(
          function () {
            var e
            ;(null == k || null == (e = k[0]) ? void 0 : e.right) > 0 &&
              v > 0 &&
              f(!0)
          },
          [v, k, f]
        )
      var P = Ku().useMemo(
          function () {
            var e = d.length,
              t = 0,
              n =
                d.filter(function (e) {
                  return '$' === e
                }).length <= 1 &&
                d.filter(function (e) {
                  return '.' === e
                }).length <= 1,
              i = function (r, o, i) {
                var a = 'left' === i,
                  l = lO[r],
                  u = k[l],
                  s =
                    (null == u ? void 0 : u.right) -
                    (null == u ? void 0 : u.left),
                  c = t
                t += s
                var f = o + '-' + r + '-' + i
                return (
                  !n || ('$' !== r && '.' !== r) || (f = r),
                  {
                    position: e - o,
                    character: r,
                    id: f,
                    width: s,
                    xPosition: a ? c : C - t,
                  }
                )
              }
            if ('left' === r) {
              var a = (function (e) {
                return e.map(function (e, t) {
                  return i(e, t, 'left')
                })
              })(d)
              if (o) {
                var l = {
                  character: o,
                  id: o,
                  position: d.length + 1,
                  width: 0,
                  xPosition: t + 8,
                }
                a = [].concat(a, [l])
              }
              return a
            }
            return (function (e) {
              return e
                .reverse()
                .map(function (e, t) {
                  return i(e, t, 'right')
                })
                .reverse()
            })(d)
          },
          [d, r, k, C, o]
        ),
        O = Ku().useRef(null),
        T = LC(P, {
          ref: O,
          initial: !1,
          reset: !c,
          keys: function (e) {
            return e.id
          },
          from: Ku().useCallback(function (e) {
            return {
              opacity: 0,
              transform: 'translate3d(' + e.xPosition + 'px, 0, 0)',
              scale: 'scale3d(0.5, 0.5, 1)',
            }
          }, []),
          enter: Ku().useCallback(function (e) {
            return {
              opacity: 1,
              transform: 'translate3d(' + e.xPosition + 'px, 0, 0)',
              scale: 'scale3d(1, 1, 1)',
            }
          }, []),
          leave: Ku().useCallback(function (e) {
            return {
              opacity: 0,
              transform: 'translate3d(' + e.xPosition + 'px, 0, 0)',
              scale: 'scale3d(0.5, 0.5, 1)',
            }
          }, []),
          update: Ku().useCallback(function (e) {
            return {
              opacity: 1,
              transform: 'translate3d(' + e.xPosition + 'px, 0, 0)',
              scale: 'scale3d(1, 1, 1)',
            }
          }, []),
          config: KP({}, Nx, { clamp: !0 }),
          trail: 45,
        })
      return (
        (function (e, t, n = 1e3) {
          uE(() => {
            if (t) {
              let r = 0
              wE(e, (e, o) => {
                if (!e.current) return
                const { controllers: i } = e.current
                if (i.length) {
                  let e = n * t[o]
                  isNaN(e) ? (e = r) : (r = e),
                    wE(i, (t) => {
                      wE(t.queue, (t) => {
                        t.delay = e + (t.delay || 0)
                      }),
                        t.start()
                    })
                }
              })
            } else {
              let t = Promise.resolve()
              wE(e, (e) => {
                const { controllers: n, start: r } = e.current || {}
                if (n && n.length) {
                  const e = n.map((e) => {
                    const t = e.queue
                    return (e.queue = []), t
                  })
                  t = t.then(
                    () => (wE(n, (t, n) => t.queue.push(...e[n])), r())
                  )
                }
              })
            }
          })
        })([O], [0]),
        Qu.createElement(
          Qu.Fragment,
          null,
          Qu.createElement(
            sO,
            Object.assign({}, h, {
              key: 'measure-chars',
              'aria-hidden': 'true',
            }),
            aO.map(function (e, t) {
              return Qu.createElement(
                uO,
                { fontFamily: a, lineHeight: u, key: e },
                Qu.createElement(
                  'span',
                  {
                    ref: function (e) {
                      return (b.current[t] = e)
                    },
                  },
                  e
                )
              )
            })
          ),
          Qu.createElement(hO, Object.assign({}, g)),
          c &&
            Qu.createElement(
              cO,
              { lineHeight: u },
              T(function (e, t) {
                return Qu.createElement(
                  fO,
                  {
                    key: t.id,
                    style: { opacity: e.opacity, transform: e.transform },
                  },
                  Qu.createElement(
                    pO,
                    { style: { transform: e.scale } },
                    Qu.createElement(
                      uO,
                      { fontFamily: a, lineHeight: u },
                      t.character
                    )
                  )
                )
              }),
              Qu.createElement(uO, { fontFamily: a, lineHeight: u })
            )
        )
      )
    },
    pO = YC(
      aE.div(
        tO ||
          (tO = XP(['\n  position: absolute;\n  will-change: transform;\n']))
      )
    ),
    hO = YC(
      aE.div(
        nO ||
          (nO = XP([
            '\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n',
          ]))
      )
    )
  const mO = aE.div`
  min-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e8ecfd;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
`,
    yO = aE.div`
  font-family: 'Avenir';
  position: relative;
  max-width: 640px;
  width: 100%;
  padding: 16px;
  background-color: #fff;
  margin-bottom: 36px;
  border-radius: 8px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`,
    gO = ['101', '102', '105', '115', '205', '215', '216', '237', '223', '314'],
    vO = [
      '$2376.41',
      '$946.00',
      '$542.75',
      '$352.32',
      '$752.31',
      '$842.45',
      '$1276.41',
      '$1386.51',
      '$1286.87',
    ]
  function bO() {
    const e = (function (e, t) {
        void 0 === t && (t = !1)
        var n = Ku().useState(
            aS
              ? function () {
                  return window.matchMedia(e).matches
                }
              : t
          ),
          r = n[0],
          o = n[1]
        return (
          Ku().useEffect(
            function () {
              var t = !0,
                n = window.matchMedia(e),
                r = function () {
                  t && o(!!n.matches)
                }
              return (
                n.addListener(r),
                o(n.matches),
                function () {
                  ;(t = !1), n.removeListener(r)
                }
              )
            },
            [e]
          ),
          r
        )
      })('(max-width: 768px)'),
      [t, n] = Ku().useState(!0),
      [r, o] = Ku().useState(0),
      [i, a] = Ku().useState(vO[0]),
      [l, u] = Ku().useState('836.39'),
      [s, c] = Ku().useState(gO[0]),
      [f, d] = Ku().useState('105')
    Ku().useEffect(() => {
      if (!t) return
      const e = setInterval(() => {
        o((e) => (e + 1) % vO.length)
      }, 4e3)
      return () => {
        clearInterval(e)
      }
    }, [t]),
      Ku().useEffect(() => {
        const e = vO[r]
        c(gO[r]), a(e)
      }, [r])
    const p = Ku().useCallback(() => {
      const e = (e) => e.replace(',', '').trim(),
        t = e(f),
        n = `$${e(l)}`
      c(t), a(n)
    }, [l, f])
    return Ku().createElement(
      'div',
      { className: 'App' },
      Ku().createElement('div', null),
      Ku().createElement(
        mO,
        null,
        Ku().createElement(SO, null, 'Horizontal Ticker'),
        Ku().createElement(
          yO,
          null,
          Ku().createElement(
            kO,
            null,
            Ku().createElement(
              'div',
              { style: { display: 'flex', flex: 1, position: 'relative' } },
              Ku().createElement(dO, {
                align: 'left',
                n: s,
                alignLeftComponentAfterNumber: ' transactions',
              })
            ),
            Ku().createElement(
              'div',
              { style: { display: 'flex', flex: 1, position: 'relative' } },
              Ku().createElement(dO, {
                fontFamily: 'Avenir',
                fontSize: 36,
                n: i,
                align: e ? 'left' : 'right',
              })
            )
          ),
          Ku().createElement(
            kO,
            null,
            Ku().createElement(
              'div',
              { style: { display: 'flex', flex: 1, position: 'relative' } },
              Ku().createElement(dO, {
                fontFamily: 'Futura',
                fontSize: 32,
                align: 'left',
                n: s,
                alignLeftComponentAfterNumber: ' transactions',
              })
            ),
            Ku().createElement(
              'div',
              { style: { display: 'flex', flex: 1, position: 'relative' } },
              Ku().createElement(dO, {
                fontFamily: 'Futura',
                fontSize: 32,
                n: i,
                align: e ? 'left' : 'right',
              })
            )
          ),
          Ku().createElement(
            kO,
            { style: { marginBottom: 0 } },
            Ku().createElement(
              'div',
              { style: { display: 'flex', flex: 1, position: 'relative' } },
              Ku().createElement(dO, {
                fontFamily: 'Helvetica',
                fontSize: 32,
                align: 'left',
                n: s,
                alignLeftComponentAfterNumber: ' transactions',
              })
            ),
            Ku().createElement(
              'div',
              { style: { display: 'flex', flex: 1, position: 'relative' } },
              Ku().createElement(dO, {
                fontFamily: 'Helvetica',
                fontSize: 32,
                n: i,
                align: e ? 'left' : 'right',
              })
            )
          )
        ),
        Ku().createElement(
          'form',
          {
            style: { marginTop: 32 },
            onSubmit: (e) => {
              e.preventDefault(), p()
            },
          },
          Ku().createElement(
            wO,
            null,
            Ku().createElement(
              'label',
              { style: { fontWeight: 700 } },
              'test custom values'
            )
          ),
          Ku().createElement(
            wO,
            null,
            Ku().createElement('label', { style: { padding: 4 } }, 'tx count'),
            Ku().createElement('input', {
              type: 'number',
              step: 'any',
              value: f,
              onChange: (e) => d(e.target.value),
            })
          ),
          Ku().createElement(
            wO,
            null,
            Ku().createElement(
              'label',
              { style: { padding: 4 } },
              'account balance'
            ),
            Ku().createElement('input', {
              type: 'number',
              step: 'any',
              value: l,
              onChange: (e) => u(e.target.value),
            })
          ),
          Ku().createElement(
            'div',
            { style: { display: 'flex', justifyContent: 'flex-end' } },
            Ku().createElement(
              'button',
              {
                style: { fontFamily: 'Avenir' },
                type: 'submit',
                onClick: () => p(),
              },
              'update values'
            )
          ),
          Ku().createElement(
            wO,
            { style: { marginTop: 16 } },
            Ku().createElement(
              'label',
              { style: { padding: 4 } },
              'auto-change values'
            ),
            Ku().createElement('input', {
              type: 'checkbox',
              step: 'any',
              checked: t,
              onChange: (e) => n(e.target.checked),
            })
          )
        )
      )
    )
  }
  const wO = aE.div`
  font-family: 'Avenir';
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,
    kO = aE.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,
    SO = aE.h1`
  font-size: 24px;
  font-family: 'Avenir';
  font-weight: 300;
  margin-bottom: 16px;
`
  fk.render(Ku().createElement(bO, null), document.getElementById('root'))
})()
//# sourceMappingURL=index.698112fe.js.map
