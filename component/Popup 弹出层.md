# Popup 弹出层

::: info 介绍
弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义。
:::

## 基本使用

弹出层的内容通过默认`slot` 传入，由用户自定义。

通过 `v-model` 绑定一个布尔值的变量控制弹出层的打开和收起

默认从底部弹出 `mode="bottom"`, 高度由 `slot` 内容撑起

```vue
<template>
  <div>
    <c-popup v-model="show">
      <div>宝剑锋从磨砺出</div>
    </c-popup>
    <c-button @click="show = true">打开</c-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色，支持主题色值。

### 设置弹出层的方向

可以通过 `mode` 参数设置，可以设置为 `left`、`top`、`right`、`bottom`、`center`

```html
<c-popup mode="left">
  <div>梅花香自苦寒来</div>
</c-popup>
```

### 设置弹出层的圆角

通过 `rounded` 属性设置弹窗增的圆角值

```html
<c-popup rounded="12">
  <div>问渠哪得清如许</div>
</c-popup>
```

### 设置手势滑动关闭弹窗

对于 `mode` 为 `left` 和 `right` 的弹窗，可以通过 `touch` 属性设置是否开启手势滑动关闭弹窗, 通过 `threshold` 设置滑动的关闭阀值，默认 `50px`

```html
<c-popup mode="left" touch>
  <div>唯有源头活水来</div>
</c-popup>
```

### 控制弹窗的宽度 | 高度

这里说的宽度，指的是左边，右边，中部弹出的场景，高度指的是顶部和底部弹出的场景(因为这两个场景宽度都是 100%)。

通过 `length` 属性来控制宽度和高度，此值可以是数值(单位 px)，auto，百分比等，内部会自动处理对应的逻辑。 如果为 `auto` 的时候，表示弹窗的宽度 | 高度由内容撑开。

也可以通过指定 `width` 和 `height` 属性来设置弹窗的宽度和高度。优先级会高于 `length`

- `width` 只对 `mode = left | center | right` 模式有效

- `height` 只对 `mode = top | center | bottom` 模式有效

```vue
<template>
  <c-popup v-model="show2" mode="center" height="50%" rounded="12">
    <view>
      <view v-for="index in 100" :key="index" @click="onItem(index)">
        第{{ index }}个Item
      </view>
    </view>
  </c-popup>
</template>
```

## API

### props

公共 props: `safe-area-inset-bottom` `maskClickAble` `zoom` `duration`

| **参数**  | **说明**                              | 类型               | **默认值** |
| --------- | ------------------------------------- | ------------------ | ---------- |
| mode      | 弹出方向                              | _string_           | `bottom`   |
| mask      | 是否显示遮罩                          | _boolean_          | `true`     |
| filter    | 是否显示高斯模糊遮罩                  | _boolean_          | `false`    |
| rounded   | 弹窗的圆角值                          | _boolean_          | `0`        |
| closeable | 是否显示关闭图标                      | _boolean_          | `false`    |
| touch     | 是否开启手势滑动关闭弹窗              | _boolean_          | `false`    |
| threshold | 滑动的关闭阀值                        | _string \| number_ | `50`       |

### Event

| **事件名** | **说明**         | 类型       | **默认值** |
| ---------- | ---------------- | ---------- | ---------- |
| open       | 打开弹出层时触发 | _function_ | -          |
| close      | 关闭弹出层时触发 | _function_ | -          |
