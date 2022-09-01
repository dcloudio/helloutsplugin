export default async function getBatteryInfo() {
    return new Promise((resolve) => {
        wx.getBatteryInfo({
            success(res) {
                resolve(res)
            }
        })
    })
}
