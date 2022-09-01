<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-btn-v uni-common-mt">
            <button type="primary" @tap="testGetBatteryCapacity">获取电池电量</button>
        </view>
    </view>
</template>
<script>
    import getBatteryInfo from "../../uni_modules/uts-batteryinfo";

    export default {
        data() {
            return {
                title: '系统API示例',
            }
        },
        onUnload: function() {},
        methods: {
            testGetBatteryCapacity: async function() {
                var info = await getBatteryInfo()
                console.log(info);
                uni.showToast({
                    title: "当前电量：" + info.level + '%',
                    icon: 'none'
                });

            },

        }
    }
</script>

<style>


</style>
