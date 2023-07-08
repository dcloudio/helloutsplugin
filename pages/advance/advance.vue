<template>
	<view>
		<page-head :title="title" accordion></page-head>


		<uni-collapse accordion>
			<uni-collapse-item title="延迟任务" :border="false">
				<uni-list>
					<uni-list-item @tap="testTimer" title="开启延迟任务"  :clickable="true">
					</uni-list-item>
				</uni-list>
			</uni-collapse-item>

			<uni-collapse-item title="定时任务" :border="false">

				<uni-list>
					<uni-list-item @tap="testInterval" title="开启定时任务"  :clickable="true">
					</uni-list-item>
					<uni-list-item @tap="testClearInterval" title="关闭定时任务" :clickable="true">
					</uni-list-item>
				</uni-list>
			</uni-collapse-item>
			<uni-collapse-item title="语法示例" :border="false">
				<uni-list>
					<uni-list-item @tap="testSyntax" title="进阶语法示例" :clickable="true" link>
					</uni-list-item>
					<uni-list-item @tap="testParams" title="参数传递示例" :clickable="true" link>
					</uni-list-item>
					<uni-list-item @tap="testConsole" title="日志打印示例" :clickable="true" link>
					</uni-list-item>
					<uni-list-item @tap="testInstance" title="实例测试示例" :clickable="true" link>
					</uni-list-item>
					<uni-list-item @tap="testGrammar" title="基础语法测试例" :clickable="true" link>
					</uni-list-item>
				</uni-list>
			</uni-collapse-item>
			<uni-collapse-item title="资源加载示例" :border="false">
				<uni-list>
					<uni-list-item @tap="gotoResourceDemo" title="图片加载示例" :clickable="true" link>
					</uni-list-item>
					<uni-list-item @tap="gotoFileReadDemo" title="文件读取示例" :clickable="true" link>
					</uni-list-item>
				</uni-list>
			</uni-collapse-item>
			<uni-collapse-item title="组件开发示例" :border="false">
			
				<uni-list>
					<uni-list-item @tap="testHelloUTSComponent" title="Hello UTS Component" :clickable="true" link />
			
				</uni-list>
			
			</uni-collapse-item>
			
			<uni-collapse-item title="android平台示例" :border="false">

				<uni-list>

					<uni-list-item @tap="testLifecyle" title="activity生命周期监听" :clickable="true" link />
					<uni-list-item @tap="testAssetLoad" title="播放asset音频(需自定义基座)" :clickable="true" link/>
					<uni-list-item @tap="gotoDecorView" title="操作DecorView" :clickable="true" link />
					<uni-list-item @tap="testMetaRead" title="读取meta配置" :clickable="true" />
					<uni-list-item @tap="testQuitApp" title="退出当前应用" :clickable="true" />
				</uni-list>

			</uni-collapse-item>
			
			<uni-collapse-item title="iOS平台示例" :border="false">
				<uni-list>
					<uni-list-item @tap="testGetResourcePath" title="资源路径获取示例" :clickable="true" link />
				</uni-list>
			</uni-collapse-item>
		</uni-collapse>


	</view>
</template>
<script>
	import {
		doTimerTask,
		doIntervalTask,
		clearIntervalTask,
		playAssetAudio,
		getMetaConfig,
		quitApp
	} from "../../uni_modules/uts-advance";


	export default {
		data() {
			return {
				title: 'UTS进阶示例',
				taskId: 0,
			}
		},

		methods: {

			/**
			 * 测试延迟任务
			 */
			testTimer: function() {
				doTimerTask({
					start: function(response) {
						uni.showToast({
							title: response,
							icon: 'none'
						});
					},
					work: function(response) {
						uni.showToast({
							title: response,
							icon: 'none'
						});
					},
				});
			},
			/**
			 * 测试周期任务
			 */
			testInterval: function() {
				var ret = doIntervalTask({
					start: function(response) {
						uni.showToast({
							title: response,
							icon: 'none'
						});
					},
					work: function(response) {
						uni.showToast({
							title: response,
							icon: 'none'
						});
					},
				});
				this.taskId = ret.taskId;
			},
			/**
			 * 取消周期任务
			 */
			testClearInterval: function() {
				console.log(this.taskId);
				clearIntervalTask(this.taskId);
			},


			/**
			 * 跳转至资源加载演示界面
			 */
			gotoResourceDemo: function() {
				uni.navigateTo({
					url: '/pages/resource/resource'
				})
			},
			gotoFileReadDemo: function() {
				uni.navigateTo({
					url: '/pages/resource/fileRead'
				})
			},
			gotoDecorView: function() {
				uni.navigateTo({
					url: '/pages/advance/android/decorview'
				})
			},
			testAssetLoad() {
				// playAssetAudio();
				uni.navigateTo({
					url: '/pages/advance/android/assetaudio'
				})
			},
			testInputDialog() {
				getUserInput(function(res){
					console.log(res);
				});
			},
			testQuitApp(){
				quitApp()
			},

			testMetaRead() {
				let ret = getMetaConfig();
				uni.showToast({
					icon:"none",
					title: '读取成功,注意查看控制台输出'
				});
				console.log(ret);
			},
			testLifecyle: function() {
				uni.navigateTo({
					url: '/pages/lifecycle/lifecycle'
				})
			},
			testHelloUTSComponent: function() {
				uni.navigateTo({
					url: '/pages/component/helloView'
				})
			},
			testSyntax: function() {
				uni.navigateTo({
					url: '/pages/SyntaxCase/index'
				})
			},
			testParams: function() {
				uni.navigateTo({
					url: '/pages/SyntaxCase/paramTest'
				})
			},
			testConsole: function() {
				uni.navigateTo({
					url: '/pages/SyntaxCase/consoleTest'
				})
			},
			testGrammar: function() {
				uni.navigateTo({
					url: '/pages/test/index'
				})
			},
			testInstance: function() {
				uni.navigateTo({
					url: '/pages/SyntaxCase/instanceTest'
				})
			},
			testGetResourcePath: function() {
				uni.navigateTo({
					url: '/pages/advance/iOS/getResourcePath'
				})
			}

		}
	}
</script>

<style>
	
</style>
