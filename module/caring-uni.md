# caring-uni

::: info
针对 `uni-app` 常用的一些 API 的二次封装，更加方便调用
:::

## 快速开始

### 作为模块单独使用

**安装**

```bash
npm install caring-uni
```

**使用**

```js
import { modal, os, sys, ... } from 'caring-uni'
modal('弹窗')
```

### 在 `caring-ui` 中使用

**在 `.js` 文件中使用**

```js
uni.$c.modal('弹窗')
```

**在 `.vue` 文件中使用**

```html
<template>
  <div>
    <c-button @click="$c.modal('弹窗')">点击弹窗</c-button>
    <c-button @click="showModal">点击弹窗</c-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showModal() {
        this.$c.modal('弹窗')
      }
    }
  }
</script>
```

## API 列表

### os

返回平台的名称，为小写的 ios 或 android

```js
this.$c.os()
```

::: details 查看代码

```js
export const os = () => {
  return uni.getSystemInfoSync().platform.toLowerCase()
}
```

:::

### sys

获取设备的信息

```js
this.$c.sys()
```

::: details 查看代码

```js
export const sys = () => {
  return uni.getSystemInfoSync()
}
```

:::

### page

获取当前页面路径

```js
this.$c.page()
```

::: details 查看代码

```js
export const page = () => {
  const pages = getCurrentPages()
  return `/${getCurrentPages()[pages.length - 1].route}`
}
```

:::

### modal

针对 `uni-app` 的 `uni.showModal()` 的二次封装，调用更加简洁。

**参数**

- `option`: 弹窗的配置，支持传入字符串作为弹窗的内容（content），或者传入对象作为弹窗的配置。

**返回值**

- `Promise`: 弹窗的确认和取消按钮的回调函数。

**示例**

```js
// 默认显示标题为提示的弹窗
this.$c.modal('弹窗')

// 传入额外的配置
this.$c.modal({
  title: '标题',
  content: '内容',
  showCancel: false,
  cancelText: '取消',
  confirmText: '确定',
  confirmColor: '#000000'
})
```

::: details 查看代码

```js
export const modal = (option) => {
  let title = '提示',
    content = '',
    showCancel = true,
    cancelText = '取消',
    confirmText = '确定',
    confirmColor = uni.$c ? uni.$c.color.primary : ''

  if (typeof option === 'string') {
    content = option
  } else if (typeof option === 'object' && option !== null) {
    ;({
      title = title,
      content = content,
      showCancel = showCancel,
      cancelText = cancelText,
      confirmText = confirmText,
      confirmColor = confirmColor
    } = option)
  }

  return new Promise((resolve, reject) => {
    // uni的showModal 默认形式为：title 和 content 为空字符串，同时展示取消和确定按钮
    uni
      .showModal({
        title,
        content,
        showCancel,
        cancelText,
        confirmText,
        confirmColor
      })
      .then((res) => {
        if (res.confirm) {
          resolve()
        } else if (res.cancel) {
          reject()
        }
      })
  })
}
```

:::

### loading

针对 `uni-app` 的 `uni.showLoading()` 的二次封装，调用更加简洁。

**参数**

- `option`: 加载的配置，支持传入字符串作为加载的内容（content），或者传入对象作为加载的配置。

**返回值**

- `Promise`: 加载的确认和取消按钮的回调函数。

**示例**

```js
// 默认显示标题为加载中的弹窗
this.$c.loading('加载中')

// 传入额外的配置
this.$c.loading({
  title: '加载中',
  mask: true
})
```

::: details 查看代码

```js
export const loading = (option) => {
  let title = '加载中',
    mask = false

  if (typeof option === 'string') {
    title = option
  } else if (typeof option === 'object' && option !== null) {
    ;({ title = title, mask = mask } = option)
  }

  return new Promise((resolve, reject) => {
    uni
      .showLoading({
        title,
        mask
      })
      .then((res) => {
        resolve()
      })
  })
}
```

:::

### hideLoading

针对 `uni-app` 的 `uni.hideLoading()` 的二次封装，调用更加简洁。

**示例**

```js
// 默认显示标题为加载中的弹窗
this.$c.hideLoading()
```

::: details 查看代码

```js
export const hideLoading = () => {
  uni.hideLoading()
}
```

:::

### title

针对 `uni-app` 的 `uni.setNavigationBarTitle()` 的二次封装，调用更加简洁。

**参数**

- `option`: 设置标题的配置，支持传入字符串作为标题的内容（title）。

**示例**

```js
// 默认显示标题为加载中的弹窗
this.$c.title('标题')
```

::: details 查看代码

```js
export const title = (title = '') => {
  if (typeof title !== 'string') title = ''
  // 去除两侧空格
  title = title.replace(/^\s+|\s+$/g, '')
  return new Promise((resolve, reject) => {
    uni.setNavigationBarTitle({
      title,
      success: () => {
        resolve()
      },
      fail: () => {
        reject()
      }
    })
  })
}
```

:::

### copy

针对 `uni-app` 的 `uni.setClipboardData()` 的二次封装，调用更加简洁。

**参数**

- `data`: 要复制的文本。

**示例**

```js
this.$c.copy(data)
```

::: details 查看代码

```js
export const copy = (data) => {
  return new Promise((resolve, reject) => {
    uni.setClipboardData({
      data,
      success: () => {
        resolve()
      },
      fail: () => {
        reject()
      }
    })
  })
}
```

:::

### `previewImage` 预览图片

针对 `uni-app` 的 `uni.previewImage()` 的二次封装，调用更加简洁。

**参数**

- `urls`: 需要预览的图片链接列表，支持传入单个字符串，也支持传入数组。
- `current`: 当前显示图片的链接。

**示例**

```js
this.$c.previewImage(urls, current)
```

::: details 查看代码

```js
export const previewImage = (urls, current = 0) => {
  if (typeof urls === 'string') urls = [urls]
  else if (Array.isArray(urls)) urls = urls
  else return
  uni.previewImage({
    current,
    urls
  })
}
```
:::

### toast

针对 `uni-app` 的 `uni.showToast()` 的二次封装，调用更加简洁。
```js
toast(title, option)
```

**参数**
- `title`: 显示的标题。
  
- `option`: 额外的对象配置，支持传入 `duration` 作为显示的时长，支持传入 `mask` 作为是否显示遮罩层，支持传入 `icon` 作为显示的图标。

**返回值**

- `Promise`: 显示的确认和取消按钮的回调函数。

**示例**

```js
// 默认显示标题为加载中的弹窗
this.$c.toast('加载中')
```

::: details 查看代码

```js
export const toast = (
  title = '未知错误信息',
  { duration = 1000, mask = true, icon = 'none' } = {}
) => {
  return new Promise((resolve, reject) => {
    if (title.length <= 20) {
      uni.showToast({
        title: String(title),
        icon,
        mask,
        duration,
        success: () => {
          resolve()
        },
        fail: () => {
          reject()
        }
      })
    } else {
      modal({
        content: title,
        showCancel: false
      })
        .then(resolve)
        .catch(reject)
    }
  })
}

```
