package uts.modules.utsAdvance;
import kotlinx.coroutines.async;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Deferred;
import kotlinx.coroutines.Dispatchers;
import io.dcloud.uts.*;
fun log(msg: String) {
    console.log(msg, "at uni_modules/uts-advance/app-android/utils.uts:2");
}
open class AsyncOptions {
    open lateinit var type: String;
    open lateinit var success: UTSCallback;
    open lateinit var fail: UTSCallback;
    open lateinit var complete: UTSCallback;
}
val MAX = 100;
fun testSync(msg: String): UtsJSONObject {
    console.log("log test", "at uni_modules/uts-advance/app-android/index.uts:18");
    log("log test1");
    return object : UtsJSONObject() {
        var msg = """hello ${msg}"""
    };
}
fun testSyncError() {
    val arr: MutableList<String> = mutableListOf();
    console.log(arr[1], "at uni_modules/uts-advance/app-android/index.uts:29");
}
fun testSyncWithCallback(opts: AsyncOptions): UtsJSONObject {
    if (opts.type == "success") opts.success("success");
    else opts.fail("fail");
    opts.complete("complete");
    return object : UtsJSONObject() {
        var name = "testSyncWithCallback"
    };
}
suspend fun testAsync(opts: AsyncOptions): Deferred<UtsJSONObject> = CoroutineScope(Dispatchers.Default).async {
    if (opts.type == "success") opts.success("success");
    else opts.fail("fail");
    opts.complete("complete");
    return@async object : UtsJSONObject() {
        var name = "testAsync"
    };
}
open class TestOptions {
    open lateinit var name: String;
    open lateinit var callback: UTSCallback;
}
open class Test {
    open var id: Number;
    open var name: String;
    constructor(id: Number, options: TestOptions){
        this.id = id;
        this.name = options.name;
        options.callback("Test.constructor");
    }
    open fun testClassSyncWithCallback(opts: AsyncOptions): UtsJSONObject {
        return testSyncWithCallback(opts);
    }
    open suspend fun testClassAsync(opts: AsyncOptions): Deferred<UtsJSONObject> = CoroutineScope(Dispatchers.Default).async {
        val res = testAsync(opts).await();
        return@async res;
    }
    companion object {
        var type: String = "Test";
        fun testClassStaticSyncWithCallback(opts: AsyncOptions): UtsJSONObject {
            return testSyncWithCallback(opts);
        }
        suspend fun testClassStaticAsync(opts: AsyncOptions): Deferred<UtsJSONObject> = CoroutineScope(Dispatchers.Default).async {
            val res = testAsync(opts).await();
            return@async res;
        }
    }
}
