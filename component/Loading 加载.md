# Loading 加载
::: info 介绍
加载图标，用于表示加载中的过渡状态。
:::
## 基本使用
默认显示一个颜色为主题色的圆圈加载
```html
<c-loading />
```
### 自定义颜色
通过 `color` 属性设置加载图标的颜色。
```html
<c-loading color="success" />
<c-loading color="red" />
```

### 自定义大小
通过 `size` 属性设置加载图标的大小，默认大小为 `17px`
```html
<c-loading size="50"/>
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
| color    | 动画活动区域的颜色 | *string*           | `主题色`   |
| size     | 加载图标大小       | *string \| number* | `17`       |
| flower   | 花朵加载样式       | *boolean*          | `false`    |

