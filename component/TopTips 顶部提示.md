---
image: 1719476946277TopTips.png
---

# TopTips 顶部提示

::: info 介绍
从天而降的神谕，该组件一般用于页面顶部向下滑出一个提示，尔后自动收起的场景。
:::

## 基本使用

该组件通过 ref 调用组件的 `show(config = {})` 方法，传入一个对象配置

**config 参数**

- `titile <string>` 显示的标题
- `type` 显示的类型，可选值 `success` `warning` `error` `info`, 默认值为 `primary`
- `duration` 显示的时长，单位为毫秒，默认值为 `2000`

**示例**

```html
<template>
  <div class="p">
    <c-section>基本使用</c-section>
    <div class="p">
      <c-top-tips ref="cTips"></c-top-tips>
      <c-button @click="showTopTips">显示TopTips</c-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showTopTips() {
        this.$refs.cTips.show({
          title: '铁马冰河入梦来'
        })
      }
    }
  }
</script>
```

### 自定义导航栏使用本组件的问题

::: warning 注意
只有使用了自定义导航栏才需要注意如下事项，否则无需在意，不用处理。
:::

由于本组件是预先将组件隐藏于导航栏底部，调用时显示，内部已兼容处理 H5，APP，小程序等的系统导航栏高度问题。

但是如果您是使用了自定义导航栏的话，组件内部不知道您的自定义导航栏高度是多少，可能会显示有误，所以您需要传入一个 `navbar-height` 参数(单位为 px)。

需要注意的是，这个 `navbar-height` 参数是您自定义导航栏的整个高度，比如在 APP 和各家小程序上，是“导航栏”+“状态栏”的高度，H5 中，“状态栏”无法自定义，高度为 0。

::: tip 温馨提示
`caring-ui` 有推出 `NavBar` 自定义导航栏组件，此组件有一个 height 参数(单位 px，默认 44)，这个高度是不包含状态栏的高度的， 所以您使用 `caring-ui` 的自定义导航栏组件的话，您还需要通过 `uni.getSystemInfoSync().statusBarHeight"` 去获得状态栏的高度， 加上你需要的导航栏高度(也即 `caring-ui` 的 `navbar` 组件的 `height` )，即为需要传入 `c-top-tips` 组件的 `navbar-height` 参数值。
:::

使用 `caring-ui`自定导航栏可进行如下处理，如果是其他的 UI 框架的导航栏或者自己做的导航栏组件，请以此类推，也能不需要下面的处理。

```vue
<template>
  <div>
    <c-navbar title="自定义导航栏"></c-navbar>
    <c-top-tips
      ref="cTips"
      :navbar-height="statusBarHeight + navbarHeight"
    ></c-top-tips>
    <c-button @click="showTips">弹出Tips</c-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 状态栏高度，H5中，此值为0，因为H5不可操作状态栏
      statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
      // 导航栏内容区域高度，不包括状态栏高度在内
      navbarHeight: 44
    }
  },
  methods: {
    showTips() {
      this.$refs.cTips.show({
        title: '雨打梨花深闭门，忘了青春，误了青春'
      })
    }
  }
}
</script>
```

## API

### props

只有使用了自定义导航栏才需要配置以下参数

| **参数**      | **说明**                                | 类型               | **默认值** |
| ------------- | --------------------------------------- | ------------------ | ---------- |
| navbar-height | 导航栏高度(包含状态栏高度在内)，单位 PX | _string \| number_ | `--`       |
| z-index       | 层级                                    | _string \| number_ | `975`      |
