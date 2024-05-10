# Slider 滑动选择器
::: info 介绍
 一个可以拖动的进度条，一般用于表单中手动选择区间范围
:::
## 基础使用
通过`v-model`绑定一个值，来初始化滑块的选择值(0到100之间)
```vue
<template>
  <div>
     <c-slider v-model="value"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 30
    }
  }
}
</script>
```

### 设置滑动范围
通过`min`和`max`，可以设置滑块所能选择的最大和最小值

```html
<c-slider v-model="value" min="30" max="80"/>
```

