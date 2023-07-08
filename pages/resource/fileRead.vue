<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-btn-v uni-common-mt">
			<button type="primary"  @tap="getImageBase64">读取图片base64</button>
			<button type="primary"  @tap="getFileText">读取文本内容</button>
		</view>
	</view>
</template>
<script>
	
	import { readFile,writeFile } from '../../uni_modules/uts-file-manager'
	
	
	export default {
		
		data() {
			return {
				title: '文件读取示例',
				logo:""
			}
		},

		methods: {
			
			getImageBase64:function(e){
				readFile({
					type:'base64',
					path:'static/logo.png',
					success:function(res){
						console.log("success")
						console.log(res)
					},
					fail:function(res){
						console.log('fail')
						console.log(res)
					},
					complete:function(res){
						console.log("complete")
						console.log(res)
					}
				})
			},
			getFileText:function(e){
				writeFile({
					path:'/test/1.txt',
					content:'锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦',
					success:function(res){
						readFile({
							type:'text',
							path:res.filePath,
							success:function(res){
								console.log("success")
								console.log(res)
							},
							fail:function(res){
								console.log('fail')
							},
							complete:function(res){
								console.log("complete")
							}
						})
					},
					fail:function(res){
						console.log('fail')
					},
					complete:function(res){
						console.log("complete")
					}
				})
			}
		}
	}
</script>

<style>

  
</style>
