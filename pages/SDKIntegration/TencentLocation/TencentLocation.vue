<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-hello-text">
				1. 腾讯定位sdk需在腾讯地图官网申请key。 https://lbs.qq.com/
			</view>
			<view class="uni-hello-text">
				2. 按照readme文档配置apikey
			</view>
			<view class="uni-hello-text">
				3. 需要制作自定义基座运行
			</view>
		</view>
		<view class="uni-btn-v uni-common-mt">
			<button type="primary" @tap="checkLocationPermission">请求定位权限</button>
			<button type="primary" @tap="testGetlocation">获取设备位置信息</button>
			<button type="primary" @tap="testWatchPosition">监听设备位置信息</button>
			<button type="primary" @tap="testClearWatch">停止监听</button>
		</view>
	</view>
</template>

<script>
	import {
		checkHasIntegration,
		requestPremission,
		getLocation,
		watchPosition,
		clearWatch
	} from "@/uni_modules/uts-tencentgeolocation";

	export default {
		data() {
			return {
				title: '腾讯定位SDK集成示例',
			}
		},
		methods: {

			checkLocationPermission: function(e) {
				requestPremission();
			},
			testGetlocation: function(e) {

				let startRet = getLocation({
					geocode: true,
					success: function(response) {
						console.log(response);
						var addressDesc = response.name + '-' + response.address
						uni.showToast({
							title: '执行结果:' + addressDesc,
							icon: 'none'
						});
					},
					fail: function(msg) {
						uni.showToast({
							title: msg,
							icon: "none"
						})
					}
				})

				if (!startRet) {
					uni.showToast({
						title: '定位启动失败，请检查配置',
						icon: 'none'
					});
				}

			},
			testWatchPosition() {
				watchPosition({
					geocode: true,
					success: function(response) {
						console.log(response);
						var addressDesc = response.name + '-' + response.address
						uni.showToast({
							title: '执行结果:' + addressDesc,
							icon: 'none'
						});
					},
					fail: function(msg) {
						uni.showToast({
							title: msg,
							icon: "none"
						})
					}
				})
			},
			testClearWatch() {
				clearWatch()
			}
		}
	}
</script>

<style>

</style>
