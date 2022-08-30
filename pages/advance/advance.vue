<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-btn-v uni-common-mt">
			<button type="primary"  @tap="testTimer">延迟任务</button>
			<button type="primary"  @tap="testInterval">定时任务</button>
			<button type="primary"  @tap="testClearInterval">关闭定时任务</button>
		</view>
		
		<view class="uni-btn-v uni-common-mt">
			<button type="primary" @tap="testAddToDecorView">添加TextView至视图顶层</button>
			<button type="primary" @tap="testRemoveToDecorView">移除视图顶层的TextView</button>
		</view>
		
	</view>
</template>
<script>
	import {
	  doTimerTask,
	  doIntervalTask,
	  clearIntervalTask,
	  addViewToDecorView,
	  removeViewToDecorView
	} from "../../uni_modules/uts-advance";
	
	export default {
		data() {
			return {
				title: 'UTS进阶示例',
				taskId:0
			}
		},
		onUnload:function(){
		},
		methods: {
			testTimer: function () {
				doTimerTask({
					start:function(response){
						uni.showToast({
							title:response,
							icon:'none'
						});
					},
					work:function(response){
						uni.showToast({
							title:response,
							icon:'none'
						});
					},
				});
			},
			testInterval: function () {
				var ret = doIntervalTask({
					start:function(response){
						uni.showToast({
							title:response,
							icon:'none'
						});
					},
					work:function(response){
						uni.showToast({
							title:response,
							icon:'none'
						});
					},
				});
				this.taskId = ret.taskId;
			},
			
			testClearInterval: function () {
				console.log(this.taskId);
				clearIntervalTask(this.taskId);
			},
			
			testAddToDecorView: function () {
				addViewToDecorView();
			},
						
			testRemoveToDecorView: function () {
				removeViewToDecorView();
			},
			
			
		}
	}
</script>

<style>

  
</style>
