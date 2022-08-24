<template>
	<view>
		<page-head :title="title"></page-head>
			<view class="uni-btn-v uni-common-mt">
				<button type="primary"  @tap="testGetBatteryCapacity">获取电池电量</button>
			</view>
	</view>
</template>
<script>
	import {
	  getBatteryCapacity
	} from "../../../uni_modules/uts-osapi";
	
	export default {
		data() {
			return {
				title: '系统API示例',
			}
		},
		onUnload:function(){
		},
		methods: {
			testGetBatteryCapacity: function () {
				var capacity = getBatteryCapacity()
				console.log(capacity);
				uni.showToast({
					title:"当前电量："+capacity,
					icon:'none'
				});
				
			},
			
		}
	}
</script>

<style>

  
</style>
