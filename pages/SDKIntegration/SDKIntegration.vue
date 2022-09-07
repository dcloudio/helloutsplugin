<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-btn-v uni-common-mt">
			<button type="primary"  @tap="checkLocationPermission">请求定位权限</button>
			<button type="primary"  @tap="testGetlocation">获取定位信息（需自定义基座）</button>
		</view>
	</view>
</template>

<script>
	 import {requestPremission,getLocation} from "@/uni_modules/uts-tencentgeolocation";
	 
	export default {
		data() {
			return {
				title: 'SDK集成示例',
			}
		},
		methods: {
			
			checkLocationPermission:function(e){
				requestPremission();
			},
			testGetlocation:function(e){
				getLocation({
					onLocationChanged:function(locationName,locationAddress){
						var addressDesc = locationAddress + '-' + locationName
						uni.showToast({
							title:'执行结果:' + addressDesc,
							icon:'none'
						});
					}
				})
				
			},
		}
	}
</script>

<style>

</style>
