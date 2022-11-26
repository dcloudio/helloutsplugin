# uni-currentwifiinformation

## 使用文档

```ts

import { getCurrentWifiInfo, requestLocationPromise } from '@/uni_modules/uni-wifiinformation';

// 获取系统定位权限
requestLocationPromise(function(res){
	console.log(res)
	uni.showToast({
		title: res["message"],
		icon: 'none'
	})
})

// 获取手机当前连接的wifi信息
getCurrentWifiInfo({
	success:function(res){
		console.log(res)
		uni.showToast({
			title: `当前wifi信息: interface: ${res.wifiInterface}, SSID: ${res.SSID}, BSSID: ${res.BSSID}` ,
			icon: 'none'
		})
	}
})

// 注意：iOS12之后获取wifi信息需要获取系统定位权限，否则获取到的wifi信息为空
// 所以建议在获取wifi信息之前，先调用获取系统定位权限的接口
// 示例如下：
requestLocationPromise(function(res) {
	if (res["success"] == true) {
		getCurrentWifiInfo({
			success:function(res){
				console.log(res)
				uni.showToast({
					title: `当前wifi信息: interface: ${res.wifiInterface}, SSID: ${res.SSID}, BSSID: ${res.BSSID}` ,
					icon: 'none'
				})
			}
		})
	}
})
				

```



### 参数
#### getCurrentWifiInfo

Object object

|属性|类型|必填|说明|
|----|---|----|----|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|



object.success 回调函数


|属性|类型|说明|
|----|---|----|
|wifiInterface|string|当前手机连接wifi的interface,如 en0|
|SSID|string|当前手机连接wifi的SSID，即wifi名称|
|BSSID|string|当前手机连接wifi的BSSID|


#### requestLocationPromise

completion UTSCallback

object 回调函数

|属性|类型|说明|
|----|---|----|
|success|bool|是否获取成功|
|message|string|描述信息|
