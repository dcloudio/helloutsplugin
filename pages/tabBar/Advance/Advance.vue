<template>
  <button @click="testUtsSync">点击测试uts同步方法</button>
  <view>测试return：
    {{ format(testUtsSyncResult) }}
  </view>
  <button @click="testUtsSyncWithCallback">
    点击测试uts带callback的同步方法
  </button>
  <view>测试return：{{ format(testUtsSyncWithCallbackResult.return) }}</view>
  <view>测试success：{{ format(testUtsSyncWithCallbackResult.success) }}</view>
  <view>测试complete：{{ format(testUtsSyncWithCallbackResult.complete) }}</view>
  <button @click="testUtsAsync">点击测试uts异步方法</button>
  <view>测试return：{{ format(testUtsAsyncResult.return) }}</view>
  <view>测试success：{{ format(testUtsAsyncResult.success) }}</view>
  <view>测试complete：{{ format(testUtsAsyncResult.complete) }}</view>
  <button @click="testUtsClassConstructor">点击测试uts class构造函数</button>
  <view>测试callback：{{ format(testUtsClassConstructorResult.callback) }}</view>
  <button @click="testUtsClassStaticProp">点击测试uts class静态属性</button>
  <view>测试value：{{ format(testUtsClassStaticPropResult) }}</view>
  <button @click="testUtsClassStaticSyncWithCallback">
    点击测试uts class静态方法
  </button>
  <view>测试return：{{ format(testUtsClassStaticSyncWithCallbackResult.return) }}</view>
  <view>测试success：{{ format(testUtsClassStaticSyncWithCallbackResult.success) }}</view>
  <view>测试complete：{{ format(testUtsClassStaticSyncWithCallbackResult.complete) }}</view>
  <button @click="testUtsClassStaticAsync">点击测试uts class静态异步方法</button>
  <view>测试return：{{ format(testUtsClassStaticAsyncResult.return) }}</view>
  <view>测试success：{{ format(testUtsClassStaticAsyncResult.success) }}</view>
  <view>测试complete：{{ format(testUtsClassStaticAsyncResult.complete) }}</view>
  <button @click="testUtsClassProp">点击测试uts class实例属性</button>
  <view>测试value：{{ format(testUtsClassPropResult) }}</view>
  <button @click="testUtsClassSyncWithCallback">
    点击测试uts class实例方法
  </button>
  <view>测试return：{{ format(testUtsClassSyncWithCallbackResult.return) }}</view>
  <view>测试success：{{ format(testUtsClassSyncWithCallbackResult.success) }}</view>
  <view>测试complete：{{ format(testUtsClassSyncWithCallbackResult.complete) }}</view>
  <button @click="testUtsClassAsync">点击测试uts class实例异步方法</button>
  <view>测试return：{{ format(testUtsClassAsyncResult.return) }}</view>
  <view>测试success：{{ format(testUtsClassAsyncResult.success) }}</view>
  <view>测试complete：{{ format(testUtsClassAsyncResult.complete) }}</view>
  <button @click="testAll">点击测试所有</button>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import {
  MAX,
  testSync,
  testSyncWithCallback,
  testAsync,
  Test,
} from "../../../uni_modules/uts-advance";

console.log("MAX", MAX);
const testUtsSyncResult = ref<boolean | null>(null);
interface Result {
  return: boolean | null;
  success: boolean | null;
  fail: boolean | null;
  complete: boolean | null;
}
const testUtsSyncWithCallbackResult = reactive<Result>({
  return: null,
  success: null,
  fail: null,
  complete: null,
});
const testUtsAsyncResult = reactive<Result>({
  return: null,
  success: null,
  fail: null,
  complete: null,
});
function testAll() {
  testUtsSync();
  testUtsSyncWithCallback();
  testUtsAsync();
  testUtsClassConstructor();
  testUtsClassStaticProp();
  testUtsClassStaticSyncWithCallback();
  testUtsClassStaticAsync();
  testUtsClassProp();
  testUtsClassSyncWithCallback();
  testUtsClassAsync();
}
function testUtsSync() {
  testUtsSyncResult.value = false;
  try {
    if (testSync("dcloud").msg === "hello dcloud") {
      testUtsSyncResult.value = true;
    }
  } catch (e) {
    console.error("testUtsSync", e);
  }
}
function testUtsSyncWithCallback() {
  try {
    testUtsSyncWithCallbackResult.return = false;
    testUtsSyncWithCallbackResult.success = false;
    // testUtsSyncWithCallbackResult.fail = false;
    testUtsSyncWithCallbackResult.complete = false;
    if (
      testSyncWithCallback({
        type: "success",
        success(res) {
          console.log("testSyncWithCallback.success.callback", res);
          testUtsSyncWithCallbackResult.success = true;
        },
        fail(res) {
          console.log("testSyncWithCallback.fail.callback", res);
          // testUtsSyncWithCallbackResult.fail = true;
        },
        complete(res) {
          console.log("testSyncWithCallback.complete.callback", res);
          testUtsSyncWithCallbackResult.complete = true;
        },
      }).name === "testSyncWithCallback"
    ) {
      testUtsSyncWithCallbackResult.return = true;
    }
  } catch (e) { }
}
async function testUtsAsync() {
  testUtsAsyncResult.return = false;
  testUtsAsyncResult.success = false;
  // testUtsAsyncResult.fail = false;
  testUtsAsyncResult.complete = false;
  try {
    const res = await testAsync({
      type: "success",
      success(res) {
        console.log("testAsync.success.callback", res);
        testUtsAsyncResult.success = true;
      },
      fail(res) {
        console.log("testAsync.fail.callback", res);
      },
      complete(res) {
        console.log("testAsync.complete.callback", res);
        testUtsAsyncResult.complete = true;
      },
    });
    if (res.name === "testAsync") {
      testUtsAsyncResult.return = true;
    }
  } catch (e) { }
}
function format(v: boolean | null) {
  return v == null ? "--" : v ? "通过" : "未通过";
}
let test: Test
let id = 0
const testUtsClassConstructorResult = reactive<{ callback: boolean | null }>({
  callback: null
});
function testUtsClassConstructor() {
  testUtsClassConstructorResult.callback = false
  id++
  test = new Test(id, {
    name: 'name' + id, callback: (res) => {
      console.log(res)
      testUtsClassConstructorResult.callback = true
    }
  })
}
const testUtsClassStaticPropResult = ref<boolean | null>(null);
function testUtsClassStaticProp() {
  testUtsClassStaticPropResult.value = false
  if (Test.type === 'Test') {
    testUtsClassStaticPropResult.value = true
  }
}
const testUtsClassStaticSyncWithCallbackResult = reactive<Result>({
  return: null,
  success: null,
  fail: null,
  complete: null,
});
function testUtsClassStaticSyncWithCallback() {
  try {
    testUtsClassStaticSyncWithCallbackResult.return = false;
    testUtsClassStaticSyncWithCallbackResult.success = false;
    // testUtsClassStaticSyncWithCallbackResult.fail = false;
    testUtsClassStaticSyncWithCallbackResult.complete = false;
    if (
      Test.testClassStaticSyncWithCallback({
        type: "success",
        success(res) {
          console.log("testStaticSyncWithCallback.success.callback", res);
          testUtsClassStaticSyncWithCallbackResult.success = true;
        },
        fail(res) {
          console.log("testStaticSyncWithCallback.fail.callback", res);
          // testUtsClassStaticSyncWithCallbackResult.fail = true;
        },
        complete(res) {
          console.log("testStaticSyncWithCallback.complete.callback", res);
          testUtsClassStaticSyncWithCallbackResult.complete = true;
        },
      }).name === "testSyncWithCallback"
    ) {
      testUtsClassStaticSyncWithCallbackResult.return = true;
    }
  } catch (e) { }
}
const testUtsClassStaticAsyncResult = reactive<Result>({
  return: null,
  success: null,
  fail: null,
  complete: null,
});
async function testUtsClassStaticAsync() {
  testUtsClassStaticAsyncResult.return = false;
  testUtsClassStaticAsyncResult.success = false;
  // testUtsClassStaticAsyncResult.fail = false;
  testUtsClassStaticAsyncResult.complete = false;
  try {
    const res = await Test.testClassStaticAsync({
      type: "success",
      success(res) {
        console.log("testAsync.success.callback", res);
        testUtsClassStaticAsyncResult.success = true;
      },
      fail(res) {
        console.log("testAsync.fail.callback", res);
      },
      complete(res) {
        console.log("testAsync.complete.callback", res);
        testUtsClassStaticAsyncResult.complete = true;
      },
    });
    if (res.name === "testAsync") {
      testUtsClassStaticAsyncResult.return = true;
    }
  } catch (e) { }
}

const testUtsClassPropResult = ref<boolean | null>(null);
function testUtsClassProp() {
  if (!test) {
    testUtsClassConstructor()
  }
  testUtsClassPropResult.value = false
  if (test.id > 0) {
    testUtsClassPropResult.value = true
  }
}

const testUtsClassSyncWithCallbackResult = reactive<Result>({
  return: null,
  success: null,
  fail: null,
  complete: null,
});
function testUtsClassSyncWithCallback() {
  if (!test) {
    testUtsClassConstructor()
  }
  try {
    testUtsClassSyncWithCallbackResult.return = false;
    testUtsClassSyncWithCallbackResult.success = false;
    // testUtsClassSyncWithCallbackResult.fail = false;
    testUtsClassSyncWithCallbackResult.complete = false;
    if (
      test.testClassSyncWithCallback({
        type: "success",
        success(res) {
          console.log("testSyncWithCallback.success.callback", res);
          testUtsClassSyncWithCallbackResult.success = true;
        },
        fail(res) {
          console.log("testSyncWithCallback.fail.callback", res);
          // testUtsClassSyncWithCallbackResult.fail = true;
        },
        complete(res) {
          console.log("testSyncWithCallback.complete.callback", res);
          testUtsClassSyncWithCallbackResult.complete = true;
        },
      }).name === "testSyncWithCallback"
    ) {
      testUtsClassSyncWithCallbackResult.return = true;
    }
  } catch (e) { }
}
const testUtsClassAsyncResult = reactive<Result>({
  return: null,
  success: null,
  fail: null,
  complete: null,
});
async function testUtsClassAsync() {
  if (!test) {
    testUtsClassConstructor()
  }
  testUtsClassAsyncResult.return = false;
  testUtsClassAsyncResult.success = false;
  // testUtsClassAsyncResult.fail = false;
  testUtsClassAsyncResult.complete = false;
  try {
    const res = await test.testClassAsync({
      type: "success",
      success(res) {
        console.log("testAsync.success.callback", res);
        testUtsClassAsyncResult.success = true;
      },
      fail(res) {
        console.log("testAsync.fail.callback", res);
      },
      complete(res) {
        console.log("testAsync.complete.callback", res);
        testUtsClassAsyncResult.complete = true;
      },
    });
    if (res.name === "testAsync") {
      testUtsClassAsyncResult.return = true;
    }
  } catch (e) { }
}
</script>
