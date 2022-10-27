<template>
	<view>
		<page-head :title="title"></page-head>
		<uni-list>
			<uni-list-item @tap="gotoTencentLocation" title="腾讯定位sdk集成示例" class="itemButton" :clickable="true" link/>
			<uni-list-item @tap="gotoXToast" title="XToast集成示例" class="itemButton" :clickable="true" link/>
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
			
			gotoXToast:function(e){
				uni.navigateTo({
					url:'/pages/SDKIntegration/XToast/XToast'
				})
			},
			gotoTencentLocation:function(e){
				uni.navigateTo({
					url:'/pages/SDKIntegration/TencentLocation/TencentLocation'
				})
			}
			
		}
	}
</script>

<style>

</style>
