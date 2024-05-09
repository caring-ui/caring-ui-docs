# Line 线条
::: info 介绍
一个用于分割不同区域的线条组件，可以竖向或横向。
:::

## 基本使用

默认颜色：`$c.color.border`

```html
<c-line />
```

### 设置颜色

```html
<c-line color="primary" />
<c-line color="red" />
```

### 设置长度

```html
绝对长度
<c-line length="50" />
百分比长度
<c-line length="50%" />
```

### 设置虚线样式

```html
<c-line dashed />
```

### 设置竖向

```html
<c-line length="50" col />
```

## API

### props

| **参数**  | **说明**                                                     | **类型**  | **默认值** |
| --------- | ------------------------------------------------------------ | --------- | ---------- |
| color     | 线条的颜色，支持主题色                                       | *string*  | `#e4e7ed`  |
| length    | 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等 | *string*  | `100%`     |
| hair-line | 是否使用 0.5px 边框                                          | *boolean* | `true`     |
| col       | 是否是竖向                                                   | *boolean* | `false`    |

