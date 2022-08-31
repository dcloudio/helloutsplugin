<template>
	<view>
		<page-head :title="title"></page-head>
			<image :src="logo" mode="aspectFit" style="width: 100%;"></image>
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" >插件内置图片</button>
				<button type="primary" @tap="testAssetLoad" >asset资源加载</button>
			</view>
	</view>
</template>
<script>
	
	import { getLogoPath,getAssetAPath } from '../../uni_modules/uts-advance'
	
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
				let aseetPath = getAssetAPath();
				console.log(aseetPath);
			}
			
		}
	}
</script>

<style>

  
</style>
