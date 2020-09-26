/* eslint-disable */
!(function (t, e, o) {
  'use strict';
  function n(t) {
    return new b(t);
  }
  function i(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
  function s() {
    var t = e.documentElement,
      o = e.body;
    return t.scrollHeight > o.scrollHeight && !w ? t : o;
  }
  function a(t) {
    return Array.isArray(t);
  }
  function r(t) {
    return null !== t && 'object' == typeof t;
  }
  function l(t) {
    return 'string' == typeof t;
  }
  function c(t) {
    return 'function' == typeof t;
  }
  function d() {
    var t = e.body.style.overflow;
    return (
      (e.body.style.overflow = 'hidden'),
      function () {
        e.body.style.overflow = t;
      }
    );
  }
  function h(t, e) {
    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    return t;
  }
  function p(t, e) {
    for (var o in e) e.hasOwnProperty(o) && (r(e[o]) && t.hasOwnProperty(o) ? p(t[o], e[o]) : (t[o] = e[o]));
    return t;
  }
  function u(t) {
    g.test(e.readyState) ? t() : e.addEventListener('DOMContentLoaded', t);
  }
  function f(t, e, o, n, s) {
    (o = parseFloat(o)), (e = parseFloat(e)), (n *= 1e3);
    var a = o - e,
      r = {
        isDone: !1,
        lapsedTime: 0
      };
    t.css({
      opacity: e
    });
    var l = setInterval(function () {
      r.lapsedTime += 16;
      var o = Math.min(r.lapsedTime / n, 1),
        d = e + a * i(o);
      t.css({
        opacity: d
      }),
        o >= 1 && ((r.isDone = !0), clearInterval(l), c(s) && s(t));
    }, 16);
    return (
      (r.cancel = function () {
        clearInterval(l);
      }),
      r
    );
  }
  function v(t) {
    return t.split('&').reduce(function (t, e) {
      if (!e) return t;
      var o = e.split('='),
        n = o[0],
        i = o[1];
      return (t[decodeURIComponent(n)] = i && decodeURIComponent(i)), t;
    }, {});
  }
  function b(t) {
    t instanceof HTMLElement
      ? (this[0] = t)
      : l(t) &&
        (this[0] = h(e.createElement('div'), {
          innerHTML: t
        }).firstChild);
  }
  function m(o, i) {
    (this.iframe = n(
      '<iframe class="blvd-booking-widget" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>'
    )),
      (this.backdrop = n('<div class="blvd-backdrop"></div>')),
      (this.listeners = {
        close: []
      }),
      (this.closeButton = n(
        '<svg class="blvd-close-button" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
      )),
      (this.boulevardLogo = n(
        '<svg class="blvd-logo" width="100" height="30" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"><path d="M40.062,21.291v4.4a2.031,2.031,0,0,1-2.29,2.25,2,2,0,0,1-2.14-2.22v-4.44h-1.7v4.54a2.687,2.687,0,0,0,.85,2.3,4.115,4.115,0,0,0,2.86.87,3.95,3.95,0,0,0,2.8-.92,2.849,2.849,0,0,0,.86-2.24v-4.56h-1.24Z"/><path d="M18.6,24.821v-.07c.841-.09,1.811-.62,1.811-1.6a1.537,1.537,0,0,0-.39-1.06c-.48-.55-1.32-.82-2.951-.82H13v7.48h4.61a3.6,3.6,0,0,0,2.661-.82,1.778,1.778,0,0,0,.49-1.25C20.761,25.391,19.451,24.881,18.6,24.821Zm-3.88-2.53h1.82c1.2,0,1.98.11,1.98,1.07,0,.68-.46,1.01-1.61,1.01H14.72Zm2.21,5.44H14.72v-2.38h2.37c1.25,0,1.72.49,1.72,1.24C18.81,27.621,17.99,27.731,16.93,27.731Z"/><path d="M27.031,21a4.218,4.218,0,0,0-4.39,4,4.211,4.211,0,0,0,4.39,4,4.215,4.215,0,0,0,4.4-4A4.221,4.221,0,0,0,27.031,21Zm0,7c-1.67,0-2.43-1.3-2.43-3s.76-3,2.43-3,2.37,1.3,2.37,3S28.711,28,27.031,28Z"/><polygon points="54.914 25.371 57.814 25.371 57.814 24.301 54.914 24.301 54.914 22.341 59.504 22.341 59.504 21.271 53.193 21.271 53.193 28.751 59.784 28.751 59.784 27.671 54.914 27.671 54.914 25.371"/><path d="M87.586,24.671a1.661,1.661,0,0,0,.52-1.16,2.111,2.111,0,0,0-.55-1.47c-.56-.55-1.3-.77-2.94-.77h-4.23v7.48h1.72v-3.13h1.98l1.95,3.13h2.14l-2.2-3.4A2.692,2.692,0,0,0,87.586,24.671Zm-2.96-.04h-2.51v-2.36h2.24c1.03,0,1.89.17,1.89,1.19C86.246,24.231,85.536,24.631,84.626,24.631Z"/><polygon points="68.765 21.271 66.145 26.701 63.444 21.271 61.474 21.271 65.174 28.751 66.295 28.751 70.195 21.271 68.765 21.271"/><path d="M98.077,22.551c-.84-.85-1.98-1.28-3.94-1.28h-3.17v7.48h3.48a4.774,4.774,0,0,0,3.47-1.22A3.6,3.6,0,0,0,98.077,22.551Zm-3.84,5.18h-1.55v-5.46H93.9a3.059,3.059,0,0,1,2.48.83,2.364,2.364,0,0,1,.7,1.83A2.587,2.587,0,0,1,94.237,27.731Z"/><path d="M73.455,21.271l-3.52,7.48H71.3l.76-1.77h3.75l.82,1.77h2.011l-3.5-7.48Zm-1,4.78,1.415-3.179,1.485,3.179Z"/><polygon points="46.333 21.271 44.623 21.271 44.623 28.751 50.463 28.751 50.463 27.671 46.333 27.671 46.333 21.271"/><path d="M14.059,16.558h.51a1.744,1.744,0,1,0,.023-3.483H13v5.256h1.059Zm0-2.575h.45a.845.845,0,1,1-.007,1.69h-.443Z"/><path d="M18.732,18.406a1.685,1.685,0,0,0,1.772-1.78V14.749A1.639,1.639,0,0,0,18.755,13a1.685,1.685,0,0,0-1.78,1.772v1.877A1.652,1.652,0,0,0,18.732,18.406Zm-.691-3.664c0-.5.271-.8.7-.8s.705.3.705.8v1.914c0,.511-.27.8-.705.8s-.7-.293-.7-.8Z"/><polygon points="23.691 15.26 24.374 18.331 25.268 18.331 26.656 13.075 25.568 13.075 24.817 16.453 24.089 13.075 23.353 13.075 22.625 16.453 21.882 13.075 20.725 13.075 22.122 18.331 23.008 18.331 23.691 15.26"/><polygon points="29.992 17.392 28.167 17.392 28.167 16.063 29.654 16.063 29.654 15.185 28.167 15.185 28.167 14.013 29.954 14.013 29.954 13.075 27.101 13.075 27.101 18.331 29.992 18.331 29.992 17.392"/><path d="M33.232,16.131a1.553,1.553,0,0,0,.81-1.389,1.646,1.646,0,0,0-1.757-1.667H30.627v5.256h1.058V16.424h.39a1.432,1.432,0,0,0,.181-.008l.7,1.915h1.194Zm-1.067-.526h-.48V13.983h.488a.766.766,0,0,1,.8.811A.78.78,0,0,1,32.165,15.605Z"/><polygon points="37.642 17.392 35.818 17.392 35.818 16.063 37.304 16.063 37.304 15.185 35.818 15.185 35.818 14.013 37.605 14.013 37.605 13.075 34.752 13.075 34.752 18.331 37.642 18.331 37.642 17.392"/><path d="M39.936,13.075H38.277v5.256h1.629a1.693,1.693,0,0,0,1.824-1.84V14.877A1.648,1.648,0,0,0,39.936,13.075Zm.736,3.431c0,.578-.278.886-.781.886h-.548V14.013h.548c.5,0,.781.308.781.879Z"/><path d="M47.9,16.859a1.351,1.351,0,0,0-.818-1.276,1.283,1.283,0,0,0,.7-1.172,1.344,1.344,0,0,0-1.494-1.336H44.405v5.256h1.869A1.492,1.492,0,0,0,47.9,16.859ZM45.471,13.9h.586a.626.626,0,0,1,.668.668.645.645,0,0,1-.684.676h-.57Zm0,3.6V16.011h.623a.7.7,0,0,1,.743.735.719.719,0,0,1-.75.759Z"/><polygon points="50.002 15.312 49.115 13.075 47.929 13.075 49.446 16.379 49.446 18.331 50.505 18.331 50.505 16.379 52.021 13.075 50.895 13.075 50.002 15.312"/></svg>'
      )),
      (this.close = this.close.bind(this)),
      this.iframe.prop({
        src: o,
        seamless: 'seamless',
        frameBorder: 0
      }),
      this.backdrop.on('click', this.close).append(this.closeButton),
      this.backdrop.append(
        this.boulevardLogo.on('click', function () {
          t.open(
            'https://joinboulevard.com/?utm_medium=booking_widget&utm_campaign=logo&utm_content=powered_by&utm_source=' +
              encodeURI(t.location.host + t.location.pathname)
            // '_blank'
          );
        })
      ),
      i ||
        setTimeout(
          function () {
            e.body
              ? n(e.body).append(this.iframe)
              : console &&
                'function' == typeof console.warn &&
                console.warn('No document.body present. Skipping mounting of Boulevard.');
          }.bind(this),
          1
        );
  }
  void 0 !== e &&
    (function (t, e) {
      var o = t.createElement('style');
      if ((t.getElementsByTagName('head')[0].appendChild(o), o.styleSheet))
        o.styleSheet.disabled || (o.styleSheet.cssText = e);
      else
        try {
          o.innerHTML = e;
        } catch (t) {
          o.innerText = e;
        }
    })(
      e,
      '.blvd-backdrop{position:fixed;z-index:2147483646;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.75)}.blvd-close-button,.blvd-logo{position:absolute;right:15px;cursor:pointer;fill:#fff}.blvd-close-button{top:15px;width:28px;height:28px;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.blvd-close-button:hover{-webkit-transform:scale(1.25);-ms-transform:scale(1.25);transform:scale(1.25)}.blvd-logo{bottom:15px;width:100px;height:30px;transition:opacity .2s;opacity:.7}.blvd-logo:hover{opacity:1}.blvd-booking-widget{position:fixed;z-index:2147483647;top:0;bottom:0;left:0;width:100%;max-width:550px!important;height:100%;transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);border:none;background-color:#f5f6f7}.blvd-booking-widget.open{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}'
    );
  var g = /(complete|interactive|loaded)/i,
    y = /(iPhone|iPod|iPad|BlackBerry|Android|Windows Phone|webOS|Mobile)/i,
    w = 'BackCompat' === e.compatMode;
  (b.prototype.css = function (t, e) {
    if (void 0 === e) {
      if (!r(t)) return this[0].style[t];
      p(this[0].style, t);
    } else this[0].style[t] = e;
    return this;
  }),
    (b.prototype.detach = function () {
      return this.prop('parentNode') && this.prop('parentNode').removeChild(this[0]), this;
    }),
    (b.prototype.prop = function (t, e) {
      if (void 0 === e) {
        if (!r(t)) return this[0][t];
        p(this[0], t);
      } else this[0][t] = e;
      return this;
    }),
    (b.prototype.on = function (t, e, o) {
      return (
        l(t) && (t = t.split(' ')),
        t.forEach(function (t) {
          this[0].addEventListener(t, e, o);
        }, this),
        this
      );
    }),
    (b.prototype.hasClass = function (t) {
      return -1 !== this[0].className.indexOf(t);
    }),
    (b.prototype.append = function () {
      return (
        Array.prototype.slice.call(arguments).forEach(function (t) {
          this[0].appendChild(t instanceof b ? t[0] : t);
        }, this),
        this
      );
    }),
    (b.prototype.prepend = function () {
      return (
        Array.prototype.slice.call(arguments).forEach(function (t) {
          this[0].insertBefore(t instanceof b ? t[0] : t, this[0].firstChild);
        }, this),
        this
      );
    }),
    (b.prototype.addClass = function (t) {
      return (
        l(t) && (t = t.split(' ')),
        a(t) &&
          t.forEach(function (t) {
            -1 === this[0].className.indexOf(t) && (this[0].className += ' ' + t);
          }, this),
        this
      );
    }),
    (b.prototype.removeClass = function (t) {
      return (
        l(t) && (t = t.split(' ')),
        a(t) &&
          t.forEach(function (t) {
            this[0].className = this[0].className.replace(t, '');
          }, this),
        (this[0].className = this[0].className.trim()),
        this
      );
    }),
    (m.prototype.onClose = function (t) {
      c(t) && this.listeners.close.push(t);
    }),
    (m.prototype.isOpen = function () {
      return this.iframe.hasClass('open');
    }),
    (m.prototype.close = function (t) {
      t && t.stopPropagation(),
        this.isOpen() &&
          (this.iframe.removeClass('open'),
          this.animateBackdrop(1, 0, 0.5, function (t) {
            t.detach();
          }),
          this.listeners.close.forEach(function (t) {
            t();
          }),
          c(this.restoreScroll) && this.restoreScroll());
    }),
    (m.prototype.open = function () {
      if (!this.isOpen()) {
        var t = n(e.body);
        (this.restoreScroll = d()),
          t.append(this.backdrop),
          this.animateBackdrop(0, 1, 0.5),
          this.iframe.prop('parentNode') !== t[0] && t.append(this.iframe),
          setTimeout(
            function () {
              this.iframe.addClass('open');
            }.bind(this)
          );
      }
    }),
    (m.prototype.animateBackdrop = function (t, e, o, n) {
      this.animation &&
        !this.animation.isDone &&
        (this.animation.cancel(), (t = this.backdrop.css('opacity')), (o = this.animation.lapsedTime / 1e3)),
        (this.animation = f(this.backdrop, t, e, o, n));
    });
  var k,
    C = (function () {
      return y.test(navigator.userAgent);
    })(),
    y = 'mobile',
    x = /utm_(?:campaign|content|id|medium|source|term)/;
  (t.blvd = {
    protocol: 'https',
    urlParams: {},
    get queryString() {
      var t = '';
      for (var e in this.urlParams)
        this.urlParams.hasOwnProperty(e) &&
          ((t += t ? '&' : '?'),
          (t += encodeURIComponent(e)),
          this.urlParams[e] && (t += '=' + encodeURIComponent(this.urlParams[e])));
      return t;
    },
    get url() {
      return (
        this.protocol + '://' + this.domain + '/booking/businesses/' + this.businessId + '/widget' + this.queryString
      );
    },
    get domain() {
      switch (this.env) {
        case 'dev':
          return 'localhost:4000';
        case 'demo':
          return 'demo.boulevard.io';
        case 'trial':
          return 'trial.boulevard.io';
        default:
          return 'dashboard.boulevard.io';
      }
    },
    get googleAnalyticsCode() {
      switch (this.env) {
        case 'dev':
        case 'demo':
          return 'UA-84861624-3';
        case 'test':
        case 'trial':
          return 'UA-84861624-2';
        default:
          return 'UA-84861624-1';
      }
    },
    get fbPixelCode() {
      switch (this.env) {
        case 'dev':
        case 'demo':
        case '1740813199545746':
        case 'trial':
          return '1740813199545746';
        default:
          return '757432011110279';
      }
    }
  }),
    (blvd.init = function (o) {
      r(o) || (o = {});
      var n = v(location.search.substr(1));
      for (var i in n) x.test(i) && (blvd.urlParams[i] = n[i]);
      r(o.urlParams) && h(blvd.urlParams, o.urlParams),
        (blvd.env = o.env || 'prod'),
        (blvd.hash = o.hash || '#book-now'),
        (blvd.businessId = o.businessId),
        (blvd.locationId = o.locationId),
        (blvd.trackerEnabled = 'boolean' != typeof o.disableBlvdTracker || !o.disableBlvdTracker),
        'dev' === blvd.env && (blvd.protocol = 'http'),
        C
          ? (e.addEventListener('click', function (t) {
              for (var o = t.target; o && o !== e.body; ) {
                if (o instanceof HTMLAnchorElement && o.hash === blvd.hash)
                  return (
                    t.preventDefault(),
                    void blvd.openBookingWidget({
                      newWindow: !0,
                      target: o.target
                    })
                  );
                o = o.parentNode;
              }
            }),
            t.addEventListener('hashchange', function () {
              console.log('what is 0', 0);
              location.hash === blvd.hash &&
                blvd.openBookingWidget({
                  newWindow: !0
                });
            }))
          : ((k = new m(blvd.url, o.lazyLoad)),
            k.onClose(function () {
              var t = s(),
                e = t.scrollTop;
              (location.hash = location.hash.replace(blvd.hash, '')), (t.scrollTop = e);
            }),
            e.addEventListener('keydown', function (t) {
              27 === t.keyCode && k.isOpen() && (t.stopPropagation(), k.close());
            }),
            t.addEventListener('hashchange', function () {
              location.hash === blvd.hash ? k.open() : k.isOpen() && k.close();
            })),
        u(function () {
          location.hash === blvd.hash && blvd.openBookingWidget();
        }),
        blvd.trackerEnabled &&
          (!(function (t, e, o, n, i, s, a) {
            (t.GoogleAnalyticsObject = i),
              (t[i] =
                t[i] ||
                function () {
                  (t[i].q = t[i].q || []).push(arguments);
                }),
              (t[i].l = 1 * new Date()),
              (s = e.createElement('script')),
              (a = e.getElementsByTagName('script')[0]),
              (s.async = 1),
              (s.src = 'https://www.google-analytics.com/analytics.js'),
              a.parentNode.insertBefore(s, a);
          })(t, e, 0, 0, 'ga'),
          t.ga('create', blvd.googleAnalyticsCode, 'auto', 'blvdTracker'),
          t.ga('blvdTracker.send', 'pageview')),
        (function (t, e, o, n, i, s, a) {
          t.fbq ||
            ((i = t.fbq = function () {
              i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments);
            }),
            t._fbq || (t._fbq = i),
            (i.push = i),
            (i.loaded = !0),
            (i.version = '2.0'),
            (i.queue = []),
            (s = e.createElement(o)),
            (s.async = !0),
            (s.src = 'https://connect.facebook.net/en_US/fbevents.js'),
            (a = e.getElementsByTagName(o)[0]),
            a.parentNode.insertBefore(s, a));
        })(t, e, 'script'),
        t.fbq('init', blvd.fbPixelCode),
        t.fbq('track', 'PageView');
    }),
    (blvd.openBookingWidget = function (e) {
      return (
        (e = h({}, e)),
        C
          ? (!0 !== e.newWindow && e.newWindow !== y) || !event || 'click' !== event.type
            ? void location.assign(blvd.url)
            : void t.open(blvd.url, e.target, 'noopener')
          : !0 === e.newWindow || 'desktop' === e.newWindow
          ? void t.open(blvd.url, e.target, 'noopener')
          : void k.open()
      );
    });
})(window, document);
