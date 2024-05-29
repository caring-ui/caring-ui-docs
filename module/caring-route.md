# caring-route
## 快速上手
### 作为单独的模块使用
**安装**
```bash
npm i caring-route
```
**使用**
```vue
<script>
import route from 'caring-route'

route('/pages/index/home')
</script>
```

### 在 `caring-ui` 中使用
通过 `$c.route` 来访问 `caring-route` 模块

```vue
<template>
  <view>
    <c-button @click="$c.route('/pages/index/home')">跳转</c-button>
    <c-button @click="goHome">跳转</c-button>
  </view>
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$c.route('/pages/index/home')
    }
  }
}
</script>
```

## 特点
- 支持跳转 `tabBar` 页面
- 支持 `events` 
- 支持成功失败回调
- 支持传递引用类型路由参数
- 支持解析路由参数
- rollup打包压缩，体积更小

路由跳转方法，内部是对 `uni-app` 路由跳转api的封装，更加方便调用

支持两种调用方法

1. 函数调用：`route(url[,config])`
2. 类的实例方法调用：`route[method](url[,params])`
- `method` 的类型：
    - `to`
    - `back`
    - `tab`
    - `redirect`
    - `launch`
    - `mini` 跳转小程序
    - `query` 解析路由参数


## 基础使用
对于不需要传递参数的路由跳转，可以使用如下调用方式
```js
// uni.navigateTo
route('/pages/index/home')
// 或者
route.to('/pages/index/home')

// redirectTo
route.direct('/pages/index/home')

// reLaunch
route.launch('/pages/index/home')

// back
route.back(delta)

// switchTab
route.tab('pages/index/index')
// 或者
route({
  url:'pages/index/index',
  type: 'switchTab'
})
```

## 传递参数
route传入第二个参数，类型为对象，即为传递的路由参数
```js
route('/pages/index/home', {
  name: 'wanko',
  age: '25',
  hoby: {
    guitar: {
      level: 1
    }
  }
})
// 或者也可以
route.to('/pages/index/home', {
  name: 'wanko',
  age: 25,
  hoby: {
    guitar: {
      level: 1
    }
  }
})

route.launch('pages/index/index', {
  msg: 'relunch过来'
})
route.redirect('/pages/index/home', {
  msg: 'redirect过来'
})
```

## 获取路由参数
在onLoad中使用route的 `query` 方法传入 options ，函授调用的返回值为已经解码的路由参数
```js
onLoad(options) {
  const query = route.query(options)
}
```

## 处理跳转成功
使用函数调用方式，添加 `.then` 
```js
route('pages/index/index').then(res => console.log('跳转成功'))

// 可以在res中拿到页面间事件通信通道
then(res => {
  res.eventChannel.emit('index-msg', {
    data: {
      msg: 'data msg from index'
    }
  })
})

```

## 监听events事件
使用函数调用方式，添加 `events` 参数

```js
// A页面
route({
  type: 'navigateTo', // 如果是navigateTo，可以不传type
  url: '/pages/index/home', 
  events: {
    onSuccess: (data) => {
      console.log('onSuccess', data)
    }
  },
})

// B页面
const eventChannel = this.getOpenerEventChannel();
eventChannel.emit('onSuccess', {
  data: 'data from home'
})
route.back()
```

## 跳转微信小程序
使用 `mini(appId, path)` 方法来跳转微信小程序
```js
route.mini('wx87b638cc2075e9c1', 'pages/tabbar/components').then(() => {
  console.log('跳转成功')
})
```

## 注意事项
- `route.tab` 只能打开 `tabBar` 页面。
- `route.launch`可以打开任意页面，包括`tabBar`页面。
- `route.to`, `route.direct`只能打开非 tabBar 页面。
- 只有`route.to`, `route.direct`, `route.launch`可传递路由参数
- 不能在 `App.vue` 里面进行页面跳转。
- H5端调用`route.launch`之后之前页面栈会销毁，但是无法清空浏览器之前的历史记录，此时`navigateBack`不能返回