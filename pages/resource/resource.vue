<template>
	<view>
		<page-head :title="title"></page-head>
			<image :src="logo" mode="aspectFit" style="width: 100%;"></image>
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" >展示插件内置图片</button>
				<button type="primary" @tap="testAssetLoad" >播放asset音频(需自定义基座)</button>
				<button type="primary" @tap="testResText" >获取res目录资源(需自定义基座)</button>
			</view>
	</view>
</template>
<script>
	
	import { getLogoPath,playAssetAudio,getResText } from '../../uni_modules/uts-advance'
	
	export default {
		
		data() {
			return {
				title: '资源加载示例',
				logo:""
			}
		},
		onLoad:function(){
			this.logo = getLogoPath()
		},
		methods: {
			testAssetLoad(){
				playAssetAudio();
			},
			testResText(){
				let resText = getResText();
				console.log(resText);
			}
			
		}
	}
</script>

<style>

  
</style>
