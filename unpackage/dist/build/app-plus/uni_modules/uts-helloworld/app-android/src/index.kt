package uts.modules.utsHelloworld;
import kotlinx.coroutines.async;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Deferred;
import kotlinx.coroutines.Dispatchers;
import io.dcloud.uts.*;
open class NoParamOptions {
    open lateinit var success: UTSCallback;
    open lateinit var fail: UTSCallback;
    open lateinit var complete: UTSCallback;
}
open class StringParamOptions {
    open lateinit var input: String;
    open lateinit var success: UTSCallback;
    open lateinit var fail: UTSCallback;
    open lateinit var complete: UTSCallback;
}
open class inputJSON {
    open lateinit var inputText: String;
    open lateinit var errCode: Number;
}
open class JsonParamOptions {
    open lateinit var input: inputJSON;
    open lateinit var success: UTSCallback;
    open lateinit var fail: UTSCallback;
    open lateinit var complete: UTSCallback;
}
fun callWithoutParam(opts: NoParamOptions): UtsJSONObject {
    setTimeout(fun() {
        opts.success();
    }
    , 500);
    return object : UtsJSONObject() {
        var name = "doSthWithCallback"
    };
}
fun callWithStringParam(opts: StringParamOptions): UtsJSONObject {
    setTimeout(fun() {
        opts.success(opts.input);
    }
    , 500);
    return object : UtsJSONObject() {
        var name = "doSthWithCallback"
    };
}
fun callWithJSONParam(opts: JsonParamOptions): UtsJSONObject {
    opts.input.errCode = 10;
    setTimeout(fun() {
        opts.success(opts.input);
    }
    , 500);
    return object : UtsJSONObject() {
        var name = "doSthWithCallback"
    };
}
