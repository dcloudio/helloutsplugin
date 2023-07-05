<!-- HBuilder X 版本要求: 3.6.11+ -->
<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
  onLastPageBackPress: function (): boolean | null {
    uni.showToast({
      title: '再按一次退出应用',
      position: 'bottom',
    });
    return null;
  },
};
</script>

<style>
/*每个页面公共css */
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
/* #ifdef APP-VUE */
@import './common/uni.css';
/* #endif */
</style>
