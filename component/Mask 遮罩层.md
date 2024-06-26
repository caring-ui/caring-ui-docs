---
image: 1716457597870mask.png
---
# Mask 遮罩层

::: info 介绍
创建一个遮罩层，用于强调特定的页面元素，并阻止用户对遮罩下层的内容进行操作，一般用于弹窗场景
:::

## 基础使用

通过`v-model`绑定一个布尔值，来控制遮罩层的显示与隐藏
默认点击可关闭 `mask-close-able`值为 `true`, 此时点击遮罩会派发 `click` 事件

```vue
<template>
  <div>
    <c-mask v-model="showMask" @click="onMaskClick"/>
    <button @click="showMask = true">打开mask</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMask: false
    }
  },
  methods: {
    onMaskClick() {
      console.log('遮罩');
    }
  }
}
</script>
```

### 自定义遮罩背景颜色

```html
<c-mask
  v-model="showMask1"
  :customStyle="{ background: 'rgba(0, 0, 0, 0.2)' }"
/>
```

### 毛玻璃遮罩背景

```html
<c-mask v-model="showMask" filter />
```

### 手动关闭遮罩层

```vue
<template>
  <c-mask v-model="showMask" :maskClickAble="false">
    <div class="h-full flex-cc">
      <c-button @click="onClick">关闭</c-button>
    </div>
  </c-mask>
  <button @click="showMask = true">打开mask</button>
</template>

<script>
export default {
  data() {
    return {
      showMask: false
    }
  },
  onClick() {
    this.showMask = false
  }
}
</script>
```

## API

### props

| **参数**        | **说明**           | 类型               | **默认值** |
| --------------- | ------------------ | ------------------ | ---------- |
| v-model         | 是否显示遮罩       | *boolean*          | `false`    |
| z-index         | z-index 层级       | *string \| number* | `10070`    |
| duration        | 动画时长，单位毫秒 | *string \| number* | `300`      |
| mask-close-able | 遮罩是否可点击关闭     | *boolean*          | `true`     |
| filter          | 毛玻璃背景         | *boolean*          | `false`    |

### events

| **事件名** | **说明**                                        | **回调参数** |
| ---------- | ----------------------------------------------- | ------------ |
| click      | `mask-close-able`为`true`时，点击遮罩发送此事件 | --           |

### slot

| **名称** | **说明**                           |
| -------- | ---------------------------------- |
| default  | 默认插槽，用于在遮罩层上方嵌入内容 |

