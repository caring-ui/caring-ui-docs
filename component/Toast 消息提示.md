# Toast 消息提示

::: info 介绍
此组件表现形式类似 uni 的 `uni.showToast`API, 在多数场景下使用这个 API 就行了，但是某些情况下，比如需要自定义样式弹窗的颜色，以及弹窗的位置，就需要使用这个组件了。
:::

## 基本使用

该组件通过 ref 调用组件的 `show()` 方法，支持两种重载

`show(title, config)`

`show(config)`

`config` 参数

- `type` 主题类型，primary，success，error，warning，black
- `duration` 2000 显示的时间，毫秒
- `icon` true, 显示的图标
- `position` 'center' toast 出现的位置
-

```vue
<template>
  <div>
    <c-toast ref="cToast" />
  </div>
</template>
<script>
export default {
  methods: {
    showToast() {
      this.$refs.cToast.show('一个简单的提示')
    }
  }
}
</script>
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色，支持主题色值。

```html
<c-loading color="success" /> <c-loading color="#ccc" />
```

### 自定义大小

通过 `size` 属性设置加载图标的大小，默认大小为 `17px`

```html
<c-loading size="50" />
```

### 加载类型

通过 `flower` 属性可以设置加载图标为花朵形状

```html
<c-loading flower />
```

## API

### props

| **参数** | **说明**           | 类型               | **默认值** |
| -------- | ------------------ | ------------------ | ---------- |
| color    | 动画活动区域的颜色 | _string_           | `主题色`   |
| size     | 加载图标大小       | _string \| number_ | `17`       |
| flower   | 花朵加载样式       | _boolean_          | `false`    |
