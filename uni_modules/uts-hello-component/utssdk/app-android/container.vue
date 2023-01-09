<template>
    <view class="defaultStyles">
		<solt name="header"></solt>
		<solt name="footer"></solt>
    </view>
</template>
<script lang="uts">

	import TextUtils from 'android.text.TextUtils'
    import Button from 'android.widget.Button'
	import LinearLayout from 'android.widget.LinearLayout'
	import Color from 'android.graphics.Color'
	import View from 'android.view.View'
	
	
    //原生提供以下属性或方法的实现  
    export default {
        name: "uts-hello-container",
        /**
         * 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及手动停止动画不会触发）
         */
        emits: ['buttonClick'],
        props: {
           
            "buttonText": {
                type: String,
                default: "点击触发"
            }
        },
        data() {
            return {
            }
        },
        watch: {
            "buttonText": {
                handler(newButtonText: string) {
					if(this.$el != null){
						let button = this.$el!.findViewWithTag("centerButton") as Button
						if (!TextUtils.isEmpty(newButtonText)) {
						   button.setText(newButtonText)
						}
					}
                },
                immediate: false //创建时是否通过此方法更新属性，默认值为false  
            },

        },
        expose: ['publicMethod'],
        methods: {
        	/**
        	 * 对外公开的组件方法
        	 */
			doSth(paramA: string) {
				// 这是组件的自定义方法
				console.log("paramA")
			},
        	/**
        	 * 内部使用的组件方法
        	 */
        	privateMethod() {
        		
        	}
        },
		
        created() { //创建组件，替换created  

        },
        NVBeforeLoad() { //组件将要创建，对应前端beforeMount  
            //可选实现，这里可以提前做一些操作  
        },
        NVLoad(): LinearLayout { //创建原生View，必须定义返回值类型（Android需要明确知道View类型，需特殊校验）  
            //必须实现  
            let contentLayout = new LinearLayout($androidContext)
            return contentLayout
        },
		
        NVLoaded() { //原生View已创建  
			//可选实现，这里可以做后续操作
        },
        NVLayouted() { //原生View布局完成  
            //可选实现，这里可以做布局后续操作  
        },
        NVBeforeUnload() { //原生View将释放  
            //可选实现，这里可以做释放View之前的操作  
        },
        NVUnloaded() { //原生View已释放  
            //可选实现，这里可以做释放View之后的操作  
        },
        unmounted() { //组件销毁  
            //可选实现  
        }
    }
</script>
<style>
    /* 定义默认样式值, 组件使用者没有配置时使用 */
    .defaultStyles {
        width: 750rpx;
        height: 240rpx;
		background-color: gainsboro;
    }
</style>
