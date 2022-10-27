<template>
	<page-head :title="title"></page-head>
	<view class="uni-padding-wrap uni-common-mt">
		<view class="uni-hello-text">
			1.临时移除uts-toast插件下的 libs/R.jar文件
		</view>
		<view class="uni-hello-text">
			2. 提交自定义基座打包
		</view>
		<view class="uni-hello-text">	
			3. 将移除的libs/R.jar文件放回原处，运行自定义基座即可
		</view>
		
	</view>
	<view class="uni-padding-wrap uni-common-mt">
		<button @tap="testToastShow">调用XToast弹窗</button>
	</view>
</template>

<script>
	import { showToast } from '@/uni_modules/uts-toast'
	
	
	export default {
		
		data() {
			return {
				title:"XToast集成示例"
			}
		},
		methods:{
			testToastShow(){
				showToast();
			}
		}
		
	}
	
	
</script>

<style>
</style>