<template>
	<view>
		<page-head title="监听系统截屏" accordion></page-head>
		
		<uni-list>
			<uni-list-item @tap="testScreenShotPremission" title="准备截屏监听权限" class="itemButton" :clickable="true"/>
			<uni-list-item @tap="testScreenShotListen" title="监听截屏事件" class="itemButton" :clickable="true"/>
			<uni-list-item @tap="testScreenShotOff" title="关闭截屏监听" class="itemButton" :clickable="true"/>
		</uni-list>
			
		<image :src="screenImage" mode="aspectFit" style="margin-top:10px"></image>
			
	</view>
</template>

<script>
	import {
		requestPremission,
		onUserCaptureScreen,
		offUserCaptureScreen
	} from "@/uni_modules/uts-screenshot-listener";
	
	export default {
		data() {
			return {
				screenImage:""
			}
		},
	
		methods: {

			testScreenShotPremission() {
				// 请求写入储存的权限
				requestPremission();
			},
			testScreenShotListen() {
				var that = this;
				onUserCaptureScreen(function(res) {
						console.log(res);
						that.screenImage = res
						uni.showToast({
							icon:"none",
							title:'截屏捕捉成功'
						})
					});
				// 提示已经开始监听,注意观察
				uni.showToast({
					icon:"none",
					title:'截屏监听已开启，注意观察下方Image组件'
				})
			},
			testScreenShotOff() {
				var that = this;
				offUserCaptureScreen(function(res) {
						console.log(res);
				});
				// 提示已经开始监听,注意观察
				uni.showToast({
					icon:"none",
					title:'截屏监听已关闭'
				})
			},
	
	
		}
	}
</script>

<style>
</style>