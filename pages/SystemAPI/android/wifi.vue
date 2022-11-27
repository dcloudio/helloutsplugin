<template>
	<view class="content">
		<button @tap="testStartWifi" style="width:100%">初始化wifi模块</button>
		<button @tap="testGetWifiList" style="width:100%">获取当前wifi列表</button>
		<button @tap="testGetConnnectWifi" style="width:100%">获取当前连接的wifi</button>
		<button @tap="testStopWifi" style="width:100%">关闭wifi模块</button>
	</view>
</template>

<script>

	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			testConnnectWifi(){

				uni.connectWifi({
					maunal:false,
					SSID:"Xiaomi_20D0",
					password:"BBBB",
					complete:(res)=>{
						console.log(res);
					}
				});
			},
			testGetConnnectWifi(){
				uni.getConnectedWifi({
					partialInfo:false,
					complete:(res)=>{
						console.log(res);
						uni.showToast({
							icon:'none',
							title:res.wifi.SSID
						})
					}
				});
			},
			testStartWifi(){
				uni.startWifi({
					success:(res)=> {
						console.log("success: " + JSON.stringify(res));
						// wifi 开启成功后，注册wifi链接状态监听和wifi列表获取监听
						uni.onGetWifiList(function(res){
							console.log("onGetWifiList");
							console.log(res);
						});
						uni.onWifiConnected(function(res){
							console.log("onWifiConnected");
							console.log(res);
						});
						
					},fail:(res)=>{
						console.log("fail: " + JSON.stringify(res));
					},complete:(res)=>{
						console.log("complete: " + JSON.stringify(res));
					}
				})
			},
			testStopWifi() {
				uni.stopWifi({
					success:(res)=> {
						console.log("success: " + JSON.stringify(res));
					},fail:(res)=>{
						console.log("fail: " + JSON.stringify(res));
					},complete:(res)=>{
						console.log("complete: " + JSON.stringify(res));
					}
				})
				
			},
			testGetWifiList() {
				uni.getWifiList({
					success:(res)=> {
						console.log("success: " + JSON.stringify(res));
					},fail:(res)=>{
						console.log("fail: " + JSON.stringify(res));
					},complete:(res)=>{
						console.log("complete: " + JSON.stringify(res));
					}
				})
			},
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

</style>
