<template>
	<view>
		<page-head :title="title"></page-head>
		<uni-list>
			<uni-list-item @tap="gotoTencentLocation" title="腾讯定位sdk集成示例" class="itemButton" :clickable="true" link/>
			<uni-list-item @tap="gotoTencentMap" title="腾讯地图sdk集成示例" class="itemButton" :clickable="true" link/>
			<uni-list-item @tap="gotoToast" title="Toast示例" class="itemButton" :clickable="true" link/>
		</uni-list>
	</view>
</template>

<script>
	 
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
			gotoTencentLocation:function(e){
				uni.navigateTo({
					url:'/pages/SDKIntegration/TencentLocation/TencentLocation'
				})
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
