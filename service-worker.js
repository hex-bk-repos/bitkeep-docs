/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4e7cf4bbba26516ecc34e0a7c024fc57"
  },
  {
    "url": "assets/css/0.styles.c5dcd551.css",
    "revision": "0dc46ce1ac85561336d00961cc0f5d98"
  },
  {
    "url": "assets/img/bitkeepinfo.004c6d9b.jpg",
    "revision": "004c6d9b9e51c15bdb4bebe70529410b"
  },
  {
    "url": "assets/img/isBitKeep.9f272e10.jpg",
    "revision": "9f272e10cff1c3e496feb5c27ef7a360"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.25d2274e.js",
    "revision": "e14e0153014048efc553b5dbc33b0b9d"
  },
  {
    "url": "assets/js/11.f66b5ccc.js",
    "revision": "f73f6bd77cc0a183291aeb5b359e7613"
  },
  {
    "url": "assets/js/12.1c9279cb.js",
    "revision": "706bf6f0ce85874a35a7af28885d906c"
  },
  {
    "url": "assets/js/13.e6fe059e.js",
    "revision": "d8b1c462b76609d91ed23db78f9572e8"
  },
  {
    "url": "assets/js/14.be47bcc7.js",
    "revision": "b574ef760c8a41f074cf877643a88524"
  },
  {
    "url": "assets/js/15.5d25d191.js",
    "revision": "ca726ab5185770cf43e2656baa0a9f64"
  },
  {
    "url": "assets/js/16.a7437ddd.js",
    "revision": "32ed2752eac22b787803547280fce5a6"
  },
  {
    "url": "assets/js/17.c5a64133.js",
    "revision": "a7c94c143e6ce5d111882b7d786e667c"
  },
  {
    "url": "assets/js/18.3d53c302.js",
    "revision": "88e96c84f0b85071ebdf4faf8d4746aa"
  },
  {
    "url": "assets/js/4.aa6f5a15.js",
    "revision": "ffbb9fc301d360db3cb650be4d2b27bf"
  },
  {
    "url": "assets/js/5.92556bda.js",
    "revision": "a7f2a2cd5aa10a644d4725d3ca3afe2e"
  },
  {
    "url": "assets/js/6.69e2b255.js",
    "revision": "5788c14c6b5617517e4b0ea4278c3832"
  },
  {
    "url": "assets/js/7.e0587bb2.js",
    "revision": "5974e2da241b4c32ecdd2981c7a0a1e8"
  },
  {
    "url": "assets/js/8.3fc6b0a9.js",
    "revision": "85610fac29940a7b522c85ee5e61624f"
  },
  {
    "url": "assets/js/9.648a3220.js",
    "revision": "d02b27e2ca560956999e5017604497af"
  },
  {
    "url": "assets/js/app.cf71e19f.js",
    "revision": "f5e81046e9d5d7002d7821cd158c238e"
  },
  {
    "url": "assets/js/vendors~docsearch.cc0a77fb.js",
    "revision": "4c525dd45a570f09d5c985cd2b73a18e"
  },
  {
    "url": "assets/js/vendors~notification.5e49bf43.js",
    "revision": "ce9cbcc2523268d269d4c24cb8e53102"
  },
  {
    "url": "bitkeep-icon.svg",
    "revision": "69f22bf7ea307329c76f302d2c3b4928"
  },
  {
    "url": "faq/index.html",
    "revision": "f8a33d075a11aacf136c191ef82e790c"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "a8a8fa29bdc27a2f2c3535e5511565dd"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "c46d9d135fa70ed88758098d727669e7"
  },
  {
    "url": "guide/faq.html",
    "revision": "b9cd16d5b6081e11a010cf3ef8e39245"
  },
  {
    "url": "guide/index.html",
    "revision": "d19c42d7f44a232863064aca54c1d006"
  },
  {
    "url": "guide/resources.html",
    "revision": "e2424d68d2a765d91fe5c5d77c84081e"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "2f5e6864d8fe66324631762ea6606c8f"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "c74a149969f493df2ba42e58f8e83567"
  },
  {
    "url": "js/extend.js",
    "revision": "1f57bcbf609c0579ef2cf711395ff15c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
