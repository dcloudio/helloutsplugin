<template>
	<view>
		<page-head :title="title"></page-head>
		<uni-list>
			<uni-list-item @tap="gotoTencentLocation" title="腾讯定位sdk集成示例" class="itemButton" :clickable="true" link/>
			<uni-list-item @tap="gotoToast" title="Toast示例" class="itemButton" :clickable="true" link/>
			<uni-list-item @tap="gotoLottie" title="Lottie动画示例" class="itemButton" :clickable="true" link/>
		</uni-list>
	</view>
</template>

<script>
	 
	 import {
	 	checkHasIntegration
	 } from "@/uni_modules/uts-tencentgeolocation";
	 
	 import {
	 	checkHasLottieIntegration
	 } from "@/uni_modules/uts-animation-view";
	 
	export default {
		data() {
			return {
				title: 'SDK集成示例',
			}
		},
		methods: {
			
			gotoToast:function(e){
				uni.navigateTo({
					url:'/pages/SDKIntegration/Toast/Toast'
				})
			},
			gotoLottie:function(e){
				uni.navigateTo({
					url:'/pages/SDKIntegration/Lottie/index'
				})
			},
			gotoTencentLocation:function(e){
				
				let ret = checkHasIntegration();
				if(!ret){
					uni.showToast({
						icon:'none',
						title:'需要在自定义基座中运行'
					})
				}else{
					uni.navigateTo({
						url:'/pages/SDKIntegration/TencentLocation/TencentLocation'
					})
				}
				
			},
			gotoTencentMap:function(e){
				uni.navigateTo({
					url:'/pages/SDKIntegration/TencentMap/TencentMap'
				})
			}
		}
	}
</script>

<style>

</style>
