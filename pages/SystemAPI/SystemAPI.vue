<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-btn-v uni-common-mt">
			<button type="primary" @tap="testGetBatteryCapacity">获取电池电量</button>
			<button type="primary" @tap="testGotoDemoActivity">跳转至新的原生页面</button>
			<button type="primary" @tap="testScreenShotListen">监听截图事件</button>
			<image :src="screenImage" class="screenImage" mode="aspectFit"></image>
		</view>
	</view>
</template>
<script>
	import getBatteryInfo from "@/uni_modules/uni-getbatteryinfo";
	import gotoDemoActivity from "@/uni_modules/uts-nativepage";
	import {
		requestPremission,
		initAppLifecycle
	} from "@/uni_modules/uts-screenshot-listener";

	export default {
		data() {
			return {
				title: '系统API示例',
				screenImage:"../../static/logo.png"
			}
		},
		onUnload: function() {},
		methods: {
			testGetBatteryCapacity() {
				getBatteryInfo({
					success(res) {
						console.log(res);
						uni.showToast({
							title: "当前电量：" + res.level + '%',
							icon: 'none'
						});
					}
				})
			},
			testScreenShotListen() {
				// 请求写入储存的权限
				requestPremission();
				var that = this;
				initAppLifecycle({
					onImageCatchChange: function(imagePath) {
						console.log(imagePath);
						that.screenImage = imagePath
						uni.showToast({
							icon:"none",
							title:'截屏捕捉成功'
						})
					}
				});
				// 提示已经开始监听,注意观察
				uni.showToast({
					icon:"none",
					title:'截屏监听已开启，注意观察下方Image组件'
				})
			},

			testGotoDemoActivity() {
				gotoDemoActivity();
			},

		}
	}
</script>

<style>
.screenImage{
	width: 100%;
	height: 380px;
}

</style>
