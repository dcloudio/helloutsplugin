# uni-getbatteryinfo

## 使用文档

```ts
 // 引用插件
 import getBatteryInfo from "@/uni_modules/uni-getbatteryinfo";
 // 获取电量信息
 getBatteryInfo({
     success(res) {
         console.log(res);
         uni.showToast({
             title: "当前电量：" + res.level + '%',
             icon: 'none'
         });
     }
 })
```

