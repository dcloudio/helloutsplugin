package uts.modules.utsAdvance;
import kotlinx.coroutines.async;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Deferred;
import kotlinx.coroutines.Dispatchers;
import io.dcloud.uts.*;
open class TimerOptions {
    open lateinit var start: UTSCallback;
    open lateinit var work: UTSCallback;
}
fun doTimerTask(opts: TimerOptions): UtsJSONObject {
    opts.start("doTimerTask start");
    setTimeout(fun() {
        opts.work("doTimerTask work");
    }
    , 2000);
    return object : UtsJSONObject() {
        var name = "doTimerTask"
    };
}
fun doIntervalTask(opts: TimerOptions): UtsJSONObject {
    var taskRet = setInterval(fun() {
        opts.work("doIntervalTask work");
    }
    , 2000);
    opts.start("doIntervalTask start");
    return object : UtsJSONObject() {
        var name = "doIntervalTask"
        var taskId = taskRet
    };
}
