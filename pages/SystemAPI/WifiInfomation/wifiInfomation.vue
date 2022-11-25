<template>
	<page-head :title="获取当前连接wifi信息" accordion></page-head>
	<view class="uni-padding-wrap uni-common-mt">
		<button @tap="getLocationPromise">获取定位权限</button>
		<button @tap="getWifiInfo">获取WiFi信息</button>
	</view>
</template>

<script>

	import { getCurrentWifiInfo, requestLocationPromise } from '@/uni_modules/uni-wifiinformation';

	export default {
		 
		methods:{
			getLocationPromise() {
				requestLocationPromise(function(res){
						console.log(res)
						uni.showToast({
							title: res["message"],
							icon: 'none'
						})
				})
			},
			
			getWifiInfo() {
				/* iOS12之后获取wifi信息需要获取系统定位权限，否则获取到的wifi信息为空 */
				requestLocationPromise(function(res) {
					if (res["success"] == true) {
						let wifiInfo = getCurrentWifiInfo()
						if (wifiInfo != null) {
							console.log(wifiInfo)
							uni.showToast({
								title: "当前wifi信息获取成功",
								icon: 'none'
							})
						}
					}
				})
			},
			
		}
	}
</script>

<style>
</style>