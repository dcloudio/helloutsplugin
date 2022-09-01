export default async function getBatteryInfo() {
    if ((navigator).getBattery) {
        const battery = await navigator.getBattery()
        return {
            level: battery.level * 100,
            isCharging: battery.charging
        }
    }
    return {
        level: 0,
        isCharging: false
    };
}
