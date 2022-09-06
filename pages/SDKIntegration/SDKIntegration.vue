<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-btn-v uni-common-mt">
			<button type="primary"  @tap="testGetlocation">获取定位信息</button>
		</view>
	</view>
</template>

<script>
	 import {requestPremission,getLocation} from "@/uni_modules/uts-tencentgeolocation";
	 
	export default {
		data() {
			return {
				title: 'SDK集成示例-开发中',
			}
		},
		methods: {
			testGetlocation:function(e){
				
				requestPremission();
				var locationRet = getLocation();
				console.log(locationRet);
			},
		}
	}
</script>

<style>

</style>
