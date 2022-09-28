<template>
	<view>
		<page-head :title="title"></page-head>

		<uni-section title="任务" type="line">

			<uni-collapse>
				<uni-collapse-item title="延迟任务">
					<button type="primary" @tap="testTimer">延迟任务</button>
				</uni-collapse-item>

				<uni-collapse-item title="定时任务">
					<button type="primary" @tap="testInterval">定时任务</button>
					<button type="primary" @tap="testClearInterval">关闭定时任务</button>
				</uni-collapse-item>

			</uni-collapse>

		</uni-section>


		<uni-section title="语法" type="line">

			<uni-collapse>
				<uni-collapse-item title="进阶语法示例">
					<button type="primary" @tap="testSyntax">进阶语法示例</button>
				</uni-collapse-item>
			</uni-collapse>

		</uni-section>

		
		<uni-section title="资源" type="line">
		
			<uni-collapse>
				<uni-collapse-item title="资源加载">
					<button type="primary" @tap="gotoResourceDemo">资源加载示例</button>
				</uni-collapse-item>
		
			</uni-collapse>
		
		</uni-section>

		<uni-section title="内置函数" type="line">
		
			<uni-collapse>
				<uni-collapse-item title="生命周期">
					<button type="primary" @tap="testLifecyle">activity生命周期监听</button>
				</uni-collapse-item>
		
			</uni-collapse>
		
		</uni-section>

		<uni-section title="原生UI" type="line">
		
			<uni-collapse>
				<uni-collapse-item title="DecorView操作示例">
					<button type="primary" @tap="testAddToDecorView">添加TextView至视图顶层</button>
					<button type="primary" @tap="testRemoveToDecorView">移除视图顶层的TextView</button>
				</uni-collapse-item>
			</uni-collapse>
		
		</uni-section>

	


	</view>
</template>
<script>
	import {
		doTimerTask,
		doIntervalTask,
		clearIntervalTask,
		addViewToDecorView,
		removeViewToDecorView
	} from "../../uni_modules/uts-advance";

	export default {
		data() {
			return {
				title: 'UTS进阶示例',
				taskId: 0,
				hideList: [
					'ucharts',
					'nav-city-dropdown'
				],
				list: [
					// #ifdef APP-PLUS || H5 || MP-ALIPAY
					{
						id: 'navbar',
						name: '顶部原生导航标题栏',
						open: false,
						pages: [
							// #ifdef APP-PLUS || H5
							{
								name: '导航栏带自定义按钮',
								url: 'nav-button'
							},
							{
								name: '导航栏带红点和角标',
								url: 'nav-dot'
							},
							{
								name: '导航栏带城市选择',
								url: 'nav-city-dropdown'
							},
							{
								name: '导航栏带搜索框',
								url: 'nav-search-input'
							},
							// #endif
							// #ifdef APP-PLUS || H5 || MP-ALIPAY
							{
								name: '透明渐变样式',
								url: 'nav-transparent'
							},
							{
								name: '导航栏带图片',
								url: 'nav-image'
							}
							// #endif
						]
					},
					// #endif
					// #ifndef QUICKAPP-WEBVIEW || MP-KUAISHOU
					{
						name: '顶部选项卡',
						url: 'tabbar'
					},
					// #endif
					{
						name: '组件通讯',
						url: 'component-communication'
					},
					// #ifndef MP-QQ || QUICKAPP-WEBVIEW
					// {
					// 	name: 'uCharts 图表',
					// 	url: 'ucharts'
					// },
					// #endif
					// #ifndef QUICKAPP-WEBVIEW
					{
						name: '列表到详情示例',
						url: 'list2detail-list'
					},
					// #endif
					// #ifndef VUE3
					// #ifdef APP-PLUS
					// {
					// 	name: '上下滑动切换视频',
					// 	url: 'swiper-vertical'
					// },
					// #endif
					// #endif
					// #ifdef APP-NVUE
					{
						name: 'swiper-list',
						url: 'swiper-list-nvue'
					},
					// #endif
					{
						name: 'GlobalData和vuex',
						url: 'global'
					},
					// #ifdef APP-PLUS
					{
						name: '问题反馈',
						url: '/platforms/app-plus/feedback/feedback'
					},
					{
						name: '打开外部应用',
						url: 'scheme'
					},
					// #endif
					// #ifdef APP-PLUS || MP-WEIXIN || MP-QQ || H5
					// {
					// 	name: '微信自定义组件示例（vant ui）',
					// 	url: 'vant-button'
					// }
					// #endif
				]
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
			 * 测试添加View实例至顶层容器
			 */
			testAddToDecorView: function() {
				addViewToDecorView();
			},
			/**
			 * 测试移除顶层容器的View实例
			 */
			testRemoveToDecorView: function() {
				removeViewToDecorView();
			},

			/**
			 * 跳转至资源加载演示界面
			 */
			gotoResourceDemo: function() {
				uni.navigateTo({
					url: '/pages/resource/resource'
				})
			},

			testLifecyle: function() {
				uni.navigateTo({
					url: '/pages/lifecycle/lifecycle'
				})
			},
			testSyntax: function() {
				uni.navigateTo({
					url: '/pages/SyntaxCase/index'
				})
			},

		}
	}
</script>

<style>


</style>
