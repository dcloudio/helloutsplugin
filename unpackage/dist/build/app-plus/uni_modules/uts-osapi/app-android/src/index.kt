package uts.modules.utsOsapi;
import kotlinx.coroutines.async;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Deferred;
import kotlinx.coroutines.Dispatchers;
import io.dcloud.uts.*;
import android.content.Context;
import android.os.BatteryManager;
import io.dcloud.uts.android.getAppContext;
fun getBatteryCapacity(): String {
    val context = getAppContext();
    if (context != null) {
        val manager = context.getSystemService(Context.BATTERY_SERVICE) as BatteryManager;
        val currentLevel: Number = manager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
        return "" + currentLevel + "**456464%";
    }
    return "0%";
}
