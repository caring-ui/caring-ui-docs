---
image: 1715397228484image.png
---

# Image 图片

<!-- <v-image src="1715397228484image.png">加载图标，用于表示加载中的过渡状态。</v-image> -->

## 基本使用

至少需要指定顶 height 属性，可以不设置 width 属性，因为图片的宽度是自适应的。

```html
<c-image height="40" :src="src" />
```

指定图片的宽高

```html
<c-image height="40" width="40" :src="src" />
```

通过父容器限定大小

```html
<div class="w-100 h-40">
  <c-image :src="src" />
</div>
```

**设置图片为圆形**

```html
<c-image :src="src" width="50" height="50" round></c-image>
```

**设置图片圆角值**

```html
<c-image :src="src" width="50" height="50" rounded="12"></c-image>
```

**淡入动画**
组件自带了加载完成时的淡入动画效果：
通过 `fade` 参数配置是否开启动画效果
通过 `duration` 参数配置动画的过渡时间，单位 ms

```html
<c-image :src="src" width="50" height="50" :fade="false"></c-image>
```

**不显示加载中图标**

```html
<c-image
  :src="src"
  width="50"
  height="50"
  :show-loading="false"
  :fade="false"
/>
```

## API

### props

| **参数**     | **说明**                                | 类型               | **默认值**     |
| ------------ | --------------------------------------- | ------------------ | -------------- |
| src          | 图片地址，强烈建议使用绝对或者网络路径  | _string_           |                |
| mode         | 裁剪模式                                | _string_           | `aspectFill`   |
| width        | 图片宽度                                | _string \| number_ | `100%`         |
| height       | 图片高度                                | _string \| number_ | `auto`         |
| round        | 是否圆形                                | _boolean_          | `false`        |
| rounded      | 圆角值                                  | _string \| number_ | `0`            |
| lazy-load    | 是否懒加载                              | _boolean_          | `true`         |
| loading-icon | 加载中的图标，或者小图片                | _string_           | `photo`        |
| error-icon   | 加载失败的图标，或者小图片              | _string_           | `error-circle` |
| show-loading | 是否显示加载中的图标或者自定义的 slot   | _boolean_          | `true`         |
| show-error   | 是否显示加载错误的图标或者自定义的 slot | _boolean_          | `false`        |
| fade         | 是否需要淡入效果                        | _boolean_          | `true`         |
| duration     | 搭配 `fade` 参数的过渡时间，单位 ms     | _string \| number_ | `500`          |
| bg-color     | 背景颜色                                | _string_           | `#f3f4f6	`      |

### slot

### CellItem Events
