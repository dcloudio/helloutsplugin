<template>
	<view>
		<page-head :title="title"></page-head>
			<input class="uni-input"  v-model="stringParam" />
			<view class="uni-btn-v uni-common-mt">
				<button type="primary"  @tap="testDoSthWithCallback">uts异步方法（无参数）</button>
				<button type="primary"  @tap="testDoSthWithString">uts异步方法（字符串参数）</button>
				<button type="primary"  @tap="testDoSthWithJSON">uts异步方法（json参数）</button>
			</view>
	</view>
</template>
<script>
	import {
	  callWithoutParam,
	  callWithStringParam,
	  callWithJSONParam
	} from "../../../uni_modules/uts-helloworld";
	
	export default {
		data() {
			return {
				title: 'UTS入门示例',
				stringParam:"hello world",
			}
		},
		onUnload:function(){
		},
		methods: {
			testDoSthWithCallback: function () {
				callWithoutParam({
					success:function(){
						uni.showToast({
							title:'成功调用uts插件uts-helloworld的callWithoutParam',
							icon:'none'
						});
					},
				});
			},
			testDoSthWithString: function () {
				callWithStringParam(
					this.stringParam,
					function(response){
						uni.showToast({
							title:'uts插件uts-helloworld的callWithStringParam方法收到了你输入的字符串：'+response,
							icon:'none'
						});
					},
				);
			},
			testDoSthWithJSON: function () {
				console.log(this.jsonParam);
				var inputObject = {
					inputText:this.stringParam
				}
				
				callWithJSONParam({
					input:inputObject,
					success:function(response){
						console.log(response);
						uni.showToast({
							title:'执行结果:' + JSON.stringify(response),
							icon:'none'
						});
					}
				});
			},
			
		}
	}
</script>

<style>

  
</style>
