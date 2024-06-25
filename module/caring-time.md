# caring-time
::: info 介绍
针对 `dayjs` 的二次封装，额外提供了一些日期方法，方便在项目中使用。
:::

## 快速开始

### 作为模块单独使用

**安装**

::: code-group

```bash [npm]
npm install caring-utils
```

```bash [pnpm]guid
pnpm install caring-utils
```
:::

**使用**

```js
import { now, time, today } from 'caring-time'
now()
today() // 
time() // dayjs对象
```

### 在 `caring-ui` 中使用

**在 `.js` 文件中使用**

```js
uni.$c.now()
```

**在 `.vue` 文件中使用**

```html
<template>
  <div>
    <div>今天的日期 {{ $c.today()}}</div>
  </div>
</template>
```