<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-btn-v uni-common-mt">
            <button type="primary" @tap="testGetBatteryCapacity">获取电池电量</button>
			<button type="primary" @tap="testGotoDemoActivity">跳转至新的原生页面</button>
			<button type="primary" @tap="testScreenShotListen">监听截图事件</button>
        </view>
    </view>
</template>
<script>
    import getBatteryInfo from "@/uni_modules/uni-getbatteryinfo";
	import gotoDemoActivity from "@/uni_modules/uts-nativepage";
	import {requestPremission,initAppLifecycle}  from "@/uni_modules/uts-screenshot-listener";
	
    export default {
        data() {
            return {
                title: '系统API示例',
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
				console.log("111");
				requestPremission();
				initAppLifecycle();
            },
			
			testGotoDemoActivity() {
                gotoDemoActivity();
            },

        }
    }
</script>

<style>


</style>
