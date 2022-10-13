<template>
	<view>
		<page-head :title="title"></page-head>
			<image :src="logo" mode="aspectFit" style="width: 100%;"></image>
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" @tap="testLogoLoad">展示插件内置图片</button>
			</view>
	</view>
</template>
<script>
	
	import { getLogoPath,playAssetAudio } from '../../uni_modules/uts-advance'
	
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
			testLogoLoad(){
				this.logo = getLogoPath()
			}
		}
	}
</script>

<style>

  
</style>
