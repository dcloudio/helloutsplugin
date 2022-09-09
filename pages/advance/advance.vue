<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-btn-v uni-common-mt">
			<button type="primary"  @tap="testTimer">延迟任务</button>
			<button type="primary"  @tap="testInterval">定时任务</button>
			<button type="primary"  @tap="testClearInterval">关闭定时任务</button>
		</view>
		
		<view class="uni-btn-v uni-common-mt">
			<button type="primary" @tap="testSyntax">进阶语法示例</button>
		</view>
		
		<view class="uni-btn-v uni-common-mt">
			<button type="primary" @tap="testAddToDecorView">添加TextView至视图顶层</button>
			<button type="primary" @tap="testRemoveToDecorView">移除视图顶层的TextView</button>
			<button type="primary" @tap="gotoResourceDemo">资源加载示例</button>
			<button type="primary" @tap="testLifecyle">activity生命周期监听</button>
			
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
		
		methods: {
			/**
			 * 测试延迟任务
			 */
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
			/**
			 * 测试周期任务
			 */
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
			/**
			 * 取消周期任务
			 */
			testClearInterval: function () {
				console.log(this.taskId);
				clearIntervalTask(this.taskId);
			},
			
			/**
			 * 测试添加View实例至顶层容器
			 */
			testAddToDecorView: function () {
				addViewToDecorView();
			},
			/**
			 * 测试移除顶层容器的View实例
			 */		
			testRemoveToDecorView: function () {
				removeViewToDecorView();
			},
			
			/**
			 * 跳转至资源加载演示界面
			 */
			gotoResourceDemo: function () {
				uni.navigateTo({
					url:'/pages/resource/resource'
				})
			},
			
			testLifecyle: function () {
				uni.navigateTo({
					url:'/pages/lifecycle/lifecycle'
				})
			},
			testSyntax: function () {
				uni.navigateTo({
					url:'/pages/SyntaxCase/index'
				})
			},
			
		}
	}
</script>

<style>

  
</style>
