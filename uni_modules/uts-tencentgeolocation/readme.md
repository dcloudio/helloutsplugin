# uts-tencentgeolocation腾讯定位插件使用文档

1. 申请腾讯地图key

[申请网址](https://lbs.qq.com/mobile/androidMapSDK/developerGuide/getKey)

2. 配置key到插件中

修改项目根目录下 AndroidManifest.xml
`<meta-data android:name="TencentMapSDK" android:value="您申请的Key" />`

3. 打包自定义基座

注意将`uts-tencentgeolocation/utssdk/app-android/libs/androix-core-1.0.0.jar`先移到其他目录。

4. 运行自定义基座

注意打包自定义基座后将androix-core-1.0.0.jar移回原位，然后真机运行自定义基座。这个临时的移出移入问题后续会升级解决，详见uts插件开发文档的[临时注意](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#tempnotice)。

## 相关开发文档

- [UTS 语法](https://uniapp.dcloud.net.cn/tutorial/syntax-uts.html)
- [UTS 原生插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
