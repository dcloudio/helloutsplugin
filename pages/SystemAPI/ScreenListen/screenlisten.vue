<template>
	<view>
		<page-head title="监听系统截屏" accordion></page-head>
		
		<uni-list>
			<uni-list-item @tap="testScreenShotListen" title="监听截屏事件" class="itemButton" :clickable="true"/>
			<uni-list-item @tap="testScreenShotOff" title="关闭截屏监听" class="itemButton" :clickable="true"/>
		</uni-list>
			
		<image :src="screenImage" mode="aspectFit" style="margin-top:10px"></image>
			
	</view>
</template>

<script>
	import {
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

			testScreenShotListen() {
				var that = this;
				onUserCaptureScreen(function(res) {
						console.log(res);
						if(res.code == -1){
							// 启动失败
							return ;
						}else if(res.code == 0){
							uni.showToast({
								icon:"none",
								title:'截屏监听已开启'
							})
						}else {
							uni.showToast({
								icon:"none",
								title:'捕获截屏事件'
							})
							if (uni.getSystemInfoSync().platform == "android") {
								that.screenImage = res.image
							}
						}
					});
				
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