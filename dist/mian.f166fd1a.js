// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"mian.js":[function(require,module,exports) {
var string = '\n.container *{\n    margin: 0;padding: 0;box-sizing: border-box;\n}\n.container *::after {\n    margin: 0;padding: 0;box-sizing: border-box;\n}\n.container *::before {\n    margin: 0;padding: 0;box-sizing: border-box;\n}\n.container{\n    display: flex;\n    justify-content: center ; \n    align-items: center;\n}\n.cartoon{ \n    --skin:#fca;\n    --cap-light:#369;\n    --cap-dark:#258;\n    --cap-lid:#666;\n    --skin-dark:#fb9;\n    position: relative;\n    width: 800px;;\n    height: 800px;;\n    background: #58b8;   \n}\n@media (max-width: 400px) {\n    .cartoon{ \n    width: 300px;\n    height: 300px;\n}\n}\n.eyes{ \n    position: absolute;\n    width: 200px;\n    height: 200px;\n    top: 308px;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-image:\n        linear-gradient(transparent 20%,var(--skin) 0 40%,black 0 41.5%,transparent 0),\n        radial-gradient(circle at 45% 50%,black 6%,transparent 0),\n        radial-gradient(circle at 75% 50%,black 5%,transparent 0),\n        radial-gradient(circle at 35% 50%,white 20%,black 0 21.5%,transparent 0),\n        radial-gradient(circle at 65% 50%,white 20%,black 0 21.5%,transparent 0) ;\n        background-position: center center;\n        background-size: 58% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%;\n        background-repeat: no-repeat;\n        z-index: 5;\n}\n@media (max-width: 400px) {\n    .eyes{  \n    width: 75px;\n    height: 75px;\n    top: 108px;\n    left: 50%;\n}\n}\n.face{\n    position: absolute;\n    width: 180px;\n    height: 200px;\n    background: var(--skin);\n    background-image: radial-gradient(\n        circle at 50% 100%,rgba(0,0,0,0.1) 39%,transparent 0);\n    border: 0.75vmin solid ;\n    border-bottom: 1vmin solid ;\n    border-top-color: var(--skin);\n    border-left:0.1vmin solid var(--skin);\n    border-radius: 100%/120% 120% 80% 80%;\n    transform:translate(-50%,0)  rotate(-16deg);\n    top: 233px;\n    left: 59%;\n    margin-left: -100px;\n    z-index: 4;\n} \n@media (max-width: 400px) {\n    .face{\n    width: 67px;\n    height: 75px;\n    top: 82px;\n    left: 80%;\n} \n}\n.nose{\n   position: absolute;\n   width: 46px ; \n   height: 33px;\n   background: var(--skin);\n   background-image: linear-gradient(to right,transparent,var(--skin-dark));\n   border: 0.66vmin solid;\n   border-right: 0.75vmin solid;\n   border-left: 0.5vmin solid var(--skin);\n   border-radius: 120% 80% 90% 100%/100%;\n   transform:translate(-50%,0)  rotate(-15deg);\n   top: 315px;\n   left: 65%;\n   margin-left: -100px;\n   z-index: 6;\n}\n@media (max-width: 400px) {\n    .nose{\n   width: 17px ; \n   height: 13px;\n   top: 112px;\n   left: 85%;\n}}\n.ear{\n    position: absolute;\n    width: 60px;\n    height: 83px;\n    border-radius: 100%/80% 80% 120% 125%;\n    border: 0.75vmin solid;\n    border-right: 1.5vmin solid var(--skin);\n    background: var(--skin);\n    transform:translate(-50%,0)  rotate(-3deg);\n    top: 287px;\n    left: 47%;\n    margin-left: -100px;\n    z-index: 6;\n    }\n    @media (max-width: 400px) {\n        .ear{\n    width: 23px;\n    height: 31px;\n    top: 102px;\n    left: 69%;\n    }}       \n.ear::before{\n    position: absolute;\n    content: \'\'; \n    width: 35px;\n    height: 48px;         \n    border :1.25vmin solid transparent;\n    border-top: 0.75vmin solid;\n    border-right: 0.5vmin solid;\n    border-radius: 50%;\n    top: 12px;\n    left: 108px;\n    margin-left: -100px;\n    box-shadow: inset -1.5vmin 2vmin 0 -0.5vmin var(--skin-dark);\n    z-index:5; \n}\n@media (max-width: 400px) {\n    .ear::before{\n    width: 13px;\n    height: 18px;         \n    top: 5px;\n    left: 102px;\n}}\n.ear::after{\n    position: absolute;\n    content: \'\'; \n    width: 15px;\n    height: 20px;         \n    border :0.75vmin solid ;\n    border-bottom: 0.25vmin solid transparent;\n    border-right: 0.75vmin solid transparent;\n    border-radius: 50%;\n    top: 44px;\n    left: 125px;\n    margin-left: -100px;\n    transform: rotate(30deg);\n    box-shadow: -1vmin -0.25vmin 0 0.5vmin var(--skin-dark);\n    z-index:5; \n}@media (max-width: 400px) {\n    .ear::after{\n    width: 5.5px;\n    height: 7.5px;         \n    top: 17px;\n    left: 108px;\n}}\n.ear.ear-back{\n    display: flex;\n    border-left: 0.75vmin solid;\n    transform: scaleX(-1) rotate(-10deg);\n    left: 524px;\n    background-image: linear-gradient(to right,transparent,var(--skin-dark)20%);\n    z-index: 1; \n}\n@media (max-width: 400px) {\n    .ear.ear-back{\n    left: 257px;\n}}\n.neck{\n    position: absolute;\n    width: 94px;\n    height: 83px;\n    border-left: 1vmin solid;\n    border-right: 0.75vmin solid ;\n    background: var(--skin);\n    transform: translate(-50%,0);\n    top: 370px;\n    left: 53%;\n    margin-left: -100px;\n    background-image: radial-gradient(circle at 83% 25%,var(--skin-dark) 53%,transparent 0);\n    z-index: 3; \n}@media (max-width: 400px) {\n    .neck{\n    width: 39px;\n    height: 31px;\n    top: 136px;\n    left: 76%;\n}}\n.forehead{\n    position: absolute;\n    width: 200px;\n    height: 182px;\n    background: var(--skin);\n    border: 0.75vmin solid;\n    border-radius: 50%;\n    transform: translate(-50%,0);\n    top: 171px;\n    left: 58%;\n    margin-left: -100px;\n    z-index:2; \n}@media (max-width: 400px) {\n    .forehead{\n    width: 75px;\n    height: 68px;\n    top: 66px;\n    left: 80%;\n}}\n.mouth{\n    position: absolute;\n    width: 93px;\n    height: 35px;\n    border: 1.25vmin solid transparent;\n    border-bottom: 0.5vmin solid;\n    border-right :0.5vmin solid transparent;\n    border-radius: 50%;\n    top: 353px;\n    left: 56%;\n    margin-left: -100px;\n    transform: rotate(10deg);\n    z-index:5; \n} \n@media (max-width: 400px) {\n    .mouth{\n    width: 35px;\n    height: 13px;\n    top: 129px;\n    left: 77%;\n} }\n.mouth::after{ \n    position: absolute;\n    content: \'\'; \n    width: 35px;\n    height: 25px;         \n    border :0.25vmin solid transparent;\n    border-left: 0.75vmin solid;\n    border-radius: 50%;\n    top: 12px;\n    left: 126%;\n    margin-left: -100px;\n    transform: rotate(15deg);\n    z-index:5; \n}\n@media (max-width: 400px) {  \n.mouth::after{ \n    width: 13px;\n    height: 9px;         \n    top: 2px;\n    left: 100px;\n}}\n.cap{\n    position: absolute;\n    width:308px ;\n    height:70px ;\n    border: 0.75vmin solid;\n    border-radius: 80% 125% 125% 80%/100%;\n    transform: rotate(-25deg);\n    top:224px ;\n    left:237px ;\n    border-left: 1.5vmin solid transparent;\n    border-right: 1.25vmin solid transparent; \n    border-bottom: 0.125vmin solid transparent;\n    z-index:6; \n} \n@media (max-width: 400px) { \n    .cap{\n    width:115px ;\n    height:26px ;\n    top:79px ;\n    left:92px ;\n} }\n.cap-lid{\n    background: var(--cap-lid);\n    background-image: linear-gradient(45deg,transparent 0%,var(--cap-lid));\n    border-right: 1.25vmin solid;\n    border-bottom: 0.5vmin solid;\n    z-index: 1;\n}\n\n.cap-top{\n    position: absolute;\n    width:195px ;\n    height:105px ;\n    border: 0.75vmin solid;\n    border-radius: 120% 100% 0 0;\n    border-bottom: 0vmin solid transparent ;\n    transform: rotate(-26deg);\n    top:146px ;\n    left:235px ;\n    background-image: \n    linear-gradient(var(--cap-light),var(--cap-dark) 92%, transparent 0),\n    linear-gradient(5deg, transparent 15.5%,var(--cap-dark) 0),\n    linear-gradient(-10deg,transparent 22%,var(--cap-dark) 0);\n    z-index:6; \n}\n@media (max-width: 400px) {\n    .cap-top{\n    width:68px ;\n    height:39px ;\n    top:52px ;\n    left:92px ;\n}}\n.eyebrow{\n    position: absolute;\n    width:95px ;\n    height:73px ;\n    border-radius: 100%/50%;\n    box-shadow: 1vmin -4vmin 0 -1.5vmin;\n    transform: rotate(-15deg);\n    top:264px ;\n    left:311px ;\n    z-index: 5;\n}\n@media (max-width: 400px) {\n    .eyebrow{\n    \n    width:35px ;\n    height:35px ;\n\n    top:92px ;\n    left:122px ;\n  \n}}\n@keyframes wave{\n        0%{\n            transform:translateY(-25px) ;\n        }\n        75%{\n            transform:translateY(5px) ;\n        }\n      \n        100%{\n            transform:translateY(0) ;\n        }\n    }\n.eyebrow:hover{\n    animation:wave 100ms infinite ease;\n}\n.eyebrow + .eyebrow{\n    transform: scaleX(-1)rotate(-4deg);\n    left: 397px;\n    top: 256px;\n    height: 73px;\n    width: 83px;\n}\n@media (max-width: 400px) {\n    .eyebrow + .eyebrow{\n   \n    left: 150px;\n    top: 89px;\n    height: 35px;\n    width: 34px;\n}\n}\n';
var n = 1;
demo.innerHTML = string.substr(0, n);
demo2.innerText = string.substr(0, n);
console.log(n);

var id = window.setInterval(myCallback, 10);
function myCallback() {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id);
        return;
    }
    console.log(n + ':' + string.substr(0, n));
    demo.innerHTML = string.substr(0, n);
    demo2.innerText = string.substr(0, n);
    demo2.scrollTop = demo2.scrollHeight;
}

btnPause.onclick = function () {
    window.clearInterval(id);
};
btnPlay.onclick = function () {
    window.clearInterval(id);
    id = window.setInterval(myCallback, 10);
    myCallback();
};
btnSlow.onclick = function () {
    window.clearInterval(id);
    id = window.setInterval(myCallback, 300);
    myCallback();
};
btnNormal.onclick = function () {
    window.clearInterval(id);
    id = window.setInterval(myCallback, 150);
    myCallback();
};
btnFast.onclick = function () {
    window.clearInterval(id);
    id = window.setInterval(myCallback, 0);
    myCallback();
};
},{}],"C:\\Users\\吴鹏飞\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '64804' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\吴鹏飞\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","mian.js"], null)
//# sourceMappingURL=/mian.f166fd1a.map