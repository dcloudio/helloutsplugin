
<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="text-box" scroll-y="true">
				<text>{{text}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	import { initAppLifecycle } from '../../uni_modules/uts-advance';
	export default {
		data() {
			return {
				title: '生命周期监听',
				text: '',
			}
		},
		onLoad:function(){
			let that = this;
			initAppLifecycle(function(name){
				that.text = that.text += name;
				that.text = that.text += '\n';
			});
		}
	}
</script>

<style>
	.text-box {
		margin-bottom: 40rpx;
		padding: 40rpx 0;
		display: flex;
		min-height: 300rpx;
		background-color: #FFFFFF;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 30rpx;
		color: #353535;
		line-height: 1.8;
	}
</style>
