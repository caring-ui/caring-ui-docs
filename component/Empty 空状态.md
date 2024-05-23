---
image: 1716457813873empty.png
---
# Empty 空状态
::: info 介绍
空状态时的占位图标和文字提示。
:::

## 基础用法

```html
  <c-empty />
```

### 内置图标

通过 `mode` 设置不同的占位图标和文字

| **名称**   | **说明**         |
| ---------- | ---------------- |
| data       | 数据为空（默认） |
| list       | 列表为空         |
| message    | 消息列表为空     |
| news       | 无新闻列表       |
| history    | 无历史记录       |
| permission | 无权限           |
| favor      | 无收藏           |
| coupon     | 无优惠券         |
| order      | 订单为空         |
| wifi       | 没有WIFI         |
| address    | 没有收货地址     |
| search     | 没有搜索结果     |
| page       | 页面不存在       |
| Car        | 购物车为空       |

## API

### props

| **参数**   | **说明**               | **类型** | **默认值** |
| ---------- | ---------------------- | -------- | ---------- |
| mode       | 内置的图标，见上方说明 | *string* | `data`     |
| color      | 文字颜色               | *string* | `#c0c4cc`  |
| icon-color | 图标颜色               |          |            |

