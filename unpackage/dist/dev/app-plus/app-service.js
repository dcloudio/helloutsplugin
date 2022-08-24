if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(shared, vue) {
  "use strict";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {
    name: "page-head",
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "common-page-head" }, [
      vue.createElementVNode("view", { class: "common-page-head-title" }, vue.toDisplayString($props.title), 1)
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/Do/Source/hello-uts/components/page-head/page-head.vue"]]);
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  let callbackId = 1;
  let proxy;
  const callbacks = {};
  function normalizeArg(arg) {
    if (typeof arg === "function") {
      const id = callbackId++;
      callbacks[id] = arg;
      return id;
    } else if (shared.isPlainObject(arg)) {
      Object.keys(arg).forEach((name) => {
        arg[name] = normalizeArg(arg[name]);
      });
    }
    return arg;
  }
  function getProxy() {
    if (!proxy) {
      proxy = requireNativePlugin("UTS-Proxy");
    }
    return proxy;
  }
  function resolveSyncResult(res) {
    if (res.errMsg) {
      throw new Error(res.errMsg);
    }
    return res.params;
  }
  function initProxyFunction(async, { package: pkg2, class: cls2, name: propOrMethod, id: instanceId, companion }) {
    const invokeCallback = ({ id, name, params, keepAlive }) => {
      const callback = callbacks[id];
      if (callback) {
        callback(...params);
        if (!keepAlive) {
          delete callbacks[id];
        }
      } else {
        console.error(`${pkg2}${cls2}.${propOrMethod} ${name} is not found`);
      }
    };
    const baseArgs = instanceId ? { id: instanceId, name: propOrMethod } : {
      package: pkg2,
      class: cls2,
      name: propOrMethod,
      companion
    };
    return (...args) => {
      const invokeArgs = shared.extend({}, baseArgs, {
        params: args.map((arg) => normalizeArg(arg))
      });
      if (async) {
        return new Promise((resolve, reject) => {
          getProxy().invokeAsync(invokeArgs, (res) => {
            if (res.type !== "return") {
              invokeCallback(res);
            } else {
              if (res.errMsg) {
                reject(res.errMsg);
              } else {
                resolve(res.params);
              }
            }
          });
        });
      }
      return resolveSyncResult(getProxy().invokeSync(invokeArgs, invokeCallback));
    };
  }
  function initUtsStaticMethod(async, opts) {
    return initProxyFunction(async, opts);
  }
  const initUtsProxyFunction = initUtsStaticMethod;
  const pkg$2 = "uts.modules.utsHelloworld";
  const cls$2 = "IndexKt";
  const callWithoutParam = initUtsProxyFunction(false, { package: pkg$2, class: cls$2, name: "callWithoutParam" });
  const callWithStringParam = initUtsProxyFunction(false, { package: pkg$2, class: cls$2, name: "callWithStringParam" });
  const callWithJSONParam = initUtsProxyFunction(false, { package: pkg$2, class: cls$2, name: "callWithJSONParam" });
  const _sfc_main$4 = {
    data() {
      return {
        title: "UTS\u5165\u95E8\u793A\u4F8B",
        stringParam: "hello world"
      };
    },
    onUnload: function() {
    },
    methods: {
      testDoSthWithCallback: function() {
        callWithoutParam({
          success: function() {
            uni.showToast({
              title: "\u6210\u529F\u8C03\u7528uts\u63D2\u4EF6uts-helloworld\u7684callWithoutParam",
              icon: "none"
            });
          }
        });
      },
      testDoSthWithString: function() {
        callWithStringParam({
          input: this.stringParam,
          success: function(response) {
            uni.showToast({
              title: "uts\u63D2\u4EF6uts-helloworld\u7684callWithStringParam\u65B9\u6CD5\u6536\u5230\u4E86\u4F60\u8F93\u5165\u7684\u5B57\u7B26\u4E32\uFF1A" + response,
              icon: "none"
            });
          }
        });
      },
      testDoSthWithJSON: function() {
        formatAppLog("log", "at pages/tabBar/Primer/Primer.vue:51", this.jsonParam);
        var inputObject = {
          inputText: this.stringParam
        };
        callWithJSONParam({
          input: inputObject,
          success: function(response) {
            formatAppLog("log", "at pages/tabBar/Primer/Primer.vue:59", response);
            uni.showToast({
              title: "\u6267\u884C\u7ED3\u679C:" + JSON.stringify(response),
              icon: "none"
            });
          }
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_page_head = resolveEasycom(vue.resolveDynamicComponent("page-head"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_page_head, { title: $data.title }, null, 8, ["title"]),
      vue.withDirectives(vue.createElementVNode("input", {
        class: "uni-input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.stringParam = $event)
      }, null, 512), [
        [vue.vModelText, $data.stringParam]
      ]),
      vue.createElementVNode("view", { class: "uni-btn-v uni-common-mt" }, [
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.testDoSthWithCallback && $options.testDoSthWithCallback(...args))
        }, "uts\u5F02\u6B65\u65B9\u6CD5\uFF08\u65E0\u53C2\u6570\uFF09"),
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.testDoSthWithString && $options.testDoSthWithString(...args))
        }, "uts\u5F02\u6B65\u65B9\u6CD5\uFF08\u5B57\u7B26\u4E32\u53C2\u6570\uFF09"),
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.testDoSthWithJSON && $options.testDoSthWithJSON(...args))
        }, "uts\u5F02\u6B65\u65B9\u6CD5\uFF08json\u53C2\u6570\uFF09")
      ])
    ]);
  }
  var PagesTabBarPrimerPrimer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/Do/Source/hello-uts/pages/tabBar/Primer/Primer.vue"]]);
  const pkg$1 = "uts.modules.utsAdvance";
  const cls$1 = "IndexKt";
  const doTimerTask = initUtsProxyFunction(false, { package: pkg$1, class: cls$1, name: "doTimerTask" });
  const doIntervalTask = initUtsProxyFunction(false, { package: pkg$1, class: cls$1, name: "doIntervalTask" });
  const _sfc_main$3 = {
    data() {
      return {
        title: "UTS\u8FDB\u9636\u793A\u4F8B",
        taskId: 0
      };
    },
    onUnload: function() {
    },
    methods: {
      testTimer: function() {
        doTimerTask({
          start: function(response) {
            uni.showToast({
              title: response,
              icon: "none"
            });
          },
          work: function(response) {
            uni.showToast({
              title: response,
              icon: "none"
            });
          }
        });
      },
      testInterval: function() {
        var ret = doIntervalTask({
          start: function(response) {
            uni.showToast({
              title: response,
              icon: "none"
            });
          },
          work: function(response) {
            uni.showToast({
              title: response,
              icon: "none"
            });
          }
        });
        this.taskId = ret.taskId;
      },
      testClearInterval: function() {
        formatAppLog("log", "at pages/tabBar/Advance/Advance.vue:62", this.taskId);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_page_head = resolveEasycom(vue.resolveDynamicComponent("page-head"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_page_head, { title: $data.title }, null, 8, ["title"]),
      vue.createElementVNode("view", { class: "uni-btn-v uni-common-mt" }, [
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.testTimer && $options.testTimer(...args))
        }, "\u5EF6\u8FDF\u4EFB\u52A1"),
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.testInterval && $options.testInterval(...args))
        }, "\u5B9A\u65F6\u4EFB\u52A1"),
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.testClearInterval && $options.testClearInterval(...args))
        }, "\u5173\u95ED\u5B9A\u65F6\u4EFB\u52A1")
      ])
    ]);
  }
  var PagesTabBarAdvanceAdvance = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/Do/Source/hello-uts/pages/tabBar/Advance/Advance.vue"]]);
  const pkg = "uts.modules.utsOsapi";
  const cls = "IndexKt";
  const getBatteryCapacity = initUtsProxyFunction(false, { package: pkg, class: cls, name: "getBatteryCapacity" });
  const _sfc_main$2 = {
    data() {
      return {
        title: "\u7CFB\u7EDFAPI\u793A\u4F8B"
      };
    },
    onUnload: function() {
    },
    methods: {
      testGetBatteryCapacity: function() {
        var capacity = getBatteryCapacity();
        formatAppLog("log", "at pages/tabBar/SystemAPI/SystemAPI.vue:25", capacity);
        uni.showToast({
          title: "\u5F53\u524D\u7535\u91CF\uFF1A" + capacity,
          icon: "none"
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_page_head = resolveEasycom(vue.resolveDynamicComponent("page-head"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_page_head, { title: $data.title }, null, 8, ["title"]),
      vue.createElementVNode("view", { class: "uni-btn-v uni-common-mt" }, [
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.testGetBatteryCapacity && $options.testGetBatteryCapacity(...args))
        }, "\u83B7\u53D6\u7535\u6C60\u7535\u91CF")
      ])
    ]);
  }
  var PagesTabBarSystemAPISystemAPI = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/Do/Source/hello-uts/pages/tabBar/SystemAPI/SystemAPI.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("text", null, "sdk\u96C6\u6210")
    ]);
  }
  var PagesTabBarSDKIntegrationSDKIntegration = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Do/Source/hello-uts/pages/tabBar/SDKIntegration/SDKIntegration.vue"]]);
  __definePage("pages/tabBar/Primer/Primer", PagesTabBarPrimerPrimer);
  __definePage("pages/tabBar/Advance/Advance", PagesTabBarAdvanceAdvance);
  __definePage("pages/tabBar/SystemAPI/SystemAPI", PagesTabBarSystemAPISystemAPI);
  __definePage("pages/tabBar/SDKIntegration/SDKIntegration", PagesTabBarSDKIntegrationSDKIntegration);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Do/Source/hello-uts/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(uni.VueShared, Vue);
