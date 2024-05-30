# caring-css
::: info 介绍
全端通用的轻量原子样式库，语法兼容 `tailwindcss`
:::
## 快速上手

### 作为模块单独使用
**安装**
::: code-group
```bash [npm]
npm i caring-css
```
```bash [pnpm]
pnpm i caring-css
```
:::

**使用**

在 `App.vue `内引入全局样式

```html
不能有 scope lang="scss" 不是必须的 // [!code warning]
<style>
@import 'caring-css';
</style>
```
在 `main.js` 中引入
```js
import 'caring-css'
```

::: tip 建议
一般来讲如果是第三方库的内容，推荐在 `man.js` 内引入。`App.vue` 内集成的样式为该项目使用的特有全局样式。
:::

### 在 `caring-ui` 中使用

`caring-ui` 已经内置了 `caring-css`, 可以直接使用，无需额外引入。

## 模块
`caring-css` 包含如下模块：

```bash
-preflight 基础样式的重置
-layout 布局模块
-flex flex和grid模块
-spacing 间距模块
-dimension 尺寸模块
-typography 排版模块
-background 背景相关模块
-border 边框相关模块
-interactivity 互动性模块
```

## 基础样式 Preflight

普通的h5项目会有浏览器的默认样式，为了统一风格，需要对默认样式初始化。uni项目已经内置了重置默认样式，`caring-css` 在保证和uni项目表现一致的情况下做了普通h5项目的默认样式兼容。

::: details 查看代码

```scss
// 标题无样式
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

// 列表无样式
ol,
ul {
  list-style: none;
}

// 全局盒模型和无内外边距
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// 全局字体大小和颜色,浏览器的默认font-size就是16px
page,
html {
  color: #333;
  font-size: 16px;
}

html,
body, #app {
  height: 100%;
}

```
:::

## 布局 Layout
### Box Sizing
盒模型

| 类名           | Css                       | 说明 |
| -------------- | ------------------------- | ---- |
| `.box-border`  | `box-sizing: border-box`  |      |
| `.box-content` | `box-sizing: content-box` |      |

### Display

控制元素显示类型的功能类

| 类名              | css                     | 说明                                           |
| ----------------- | ----------------------- | ---------------------------------------------- |
| `.block`          | `display: block`        |                                                |
| `.inline-block`   | `display: inline-block` |                                                |
| `.inline`         | `display: inline`       |                                                |
| `.inline-flex`    | `display: inline-flex;` | 使得该元素变为行内flex容器，自适应子元素的大小 |
| `.block`          | `display: block;`       |                                                |
| `.none` `.hidden` | `display: none;`        |                                                |
| `.grid`           | `display: grid;`        |                                                |

### 浮动

控制元素周围内容浮动

::: tip 提示

现在基本都是使用 `flex` 布局，基本用不到浮动

:::

| 类名           | css             | 说明     |
| -------------- | --------------- | -------- |
| `.float-right` | `float: right;` |          |
| `.float-left`  | `float: left;`  |          |
| `.float-none`  | `float: none;`  |          |
| `.clear-both`  | `clear: both;`  | 清除浮动 |

### 溢出 overflow

用于控制元素如何处理超出容器的内容的功能类

| 类名                | css                  | 说明                                                         |
| ------------------- | -------------------- | ------------------------------------------------------------ |
| `.overflow-auto`    | `overflow: auto;`    | 在一个元素的内容溢出该元素的边界时为其添加滚动条。即只在需要滚动时才会显示 |
| `.overflow-hidden`  | `overflow: hidden;`  | 处理父子元素产生的外边距塌陷时很好用                         |
| `.overflow-visible` | `overflow: visible;` | 防止元素内的内容被剪切。**任何溢出元素边界的内容都将是可见的。** |
| `.overflow-scroll`  | `overflow: scroll;`  | 总是显示滚动条                                               |

### 定位

| 类名                                              | css                                     | 说明                                                         |
| ------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| `.relative`                                       | `position: relative;`                   | 当需要给元素设置层级时，指定这个属性才会生效                 |
| `.absolute`                                       | `position: absolute;`                   | 绝对定位                                                     |
| `.fixed`                                          | `position: fixed;`                      | 固定定位                                                     |
| `.sticky`                                         | `position: sticky;`                     |                                                              |
| `.inset-0`                                        | `top: 0; right: 0; bottom: 0; left: 0;` |                                                              |
| `.inset-x-0`                                      | `left: 0; right: 0;`                    |                                                              |
| `.inset-y-0`                                      | `.inset-y-0`                            |                                                              |
| `.top-{n}` `.right-{n}` `.left-{n}` `.bottom-{n}` | `left: {n}px;`                          | n说明：<br />-15～15px：2和5的倍数递增<br /> 15～50px：5的整数倍递增<br /> -15～-50px：5的整数倍递增 |

### 可见性

| class       | css                    | 说明                 |
| ----------- | ---------------------- | -------------------- |
| `visible`   | `visibility: visible;` |                      |
| `invisible` | `visibility: hidden;`  | 元素隐藏但是占据位置 |

### 层级

| class    | css               | 说明   |
| -------- | ----------------- | ------ |
| `z-{n}`  | `z-index: {n}`    | n: 0-5 |
| `-z-1`   | `z-index: -1;`    |        |
| `z-max`  | `z-index: 9999;`  |        |
| `z-min`  | `z-index: -9999;` |        |
| `z-auto` | `z-index: auto;`  |        |



## Flex and Grid

## 边距 Spacing

::: tip 范围说明

 0-50 px

- 0px~25px：2和5的倍数
-  25px~50px：5的倍数

:::

### 默认边距

| Class                                                        | Css                  | 说明               |
| ------------------------------------------------------------ | -------------------- | ------------------ |
| `mt`，`ml`，`mr`，`mb`，`pt`，`pb`，`pl`，`pr`，`mx`，`my`，`px`，`py` | `margins-top: 15px;` | 不带后缀的默认边距 |

### 内边距

控制元素内边距的功能类

| class                                                        | css                  | 说明                                     |
| ------------------------------------------------------------ | -------------------- | ---------------------------------------- |
| `p`                                                          | `padding: 15px`      |                                          |
| `p-{size}`                                                   | `padding: {size}px;` |                                          |
| `px-{size}`，`py-{size}`，`pt-{size}`，`pr-{size}`，`pb-{size}`，`pl-{size}` |                      | 上下，左右，上，下，左，右指定数值内边距 |

### 外边距

控制元素外边距的功能类

| class                                                        | css                 | 说明                                     |
| ------------------------------------------------------------ | ------------------- | ---------------------------------------- |
| `m`                                                          | `margin: 15px`      |                                          |
| `m-{size}`                                                   | `margin: {size}px;` |                                          |
| `mx-{size}`，`my-{size}`，`mt-{size}`，`mr-{size}`，`mb-{size}`，`ml-{size}` |                     | 上下，左右，上，下，左，右指定数值外边距 |



## 尺寸 Dimension

::: tip 范围说明

0-300px

- 1-5之间：1px递增
- 5-30之间：2、5px递增
- 30-150: 5px递增
- 150-300：10px递增

:::

### 宽度

| class      | css                                                          | 说明                   |
| ---------- | ------------------------------------------------------------ | ---------------------- |
| `w-{size}` | `width: {size}px`                                            |                        |
| `w-1-{n}`  | 因为小程序css无法解析/，所以不能兼容 `tailwind` 中宽度百分比 `w-1/n` 的形式，将/改为-替代 | 百分比宽度<br />n: 2-5 |
| `w-full`   | `width: 100%;`                                               |                        |
| `w-screen` | `width: 100vw;`                                              |                        |
| `w-auto`   | `width: auto;`                                               |                        |

### 长度

| class      | css                                                          | 说明                   |
| ---------- | ------------------------------------------------------------ | ---------------------- |
| `h-{size}` | `height: {size}px`                                           |                        |
| `h-1-{n}`  | 因为小程序css无法解析/，所以不能兼容 `tailwind` 中宽度百分比 `h-1/n` 的形式，将/改为-替代 | 百分比高度<br />n: 2-5 |
| `h-full`   | `height: 100%;`                                              |                        |
| `h-screen` | `height: 100vh;`                                             |                        |
| `h-auto`   | `height: auto;`                                              |                        |

## 排版 Typography

### 字体大小

用来控制元素字体大小的功能类

| class                | css                                       | 说明          |
| -------------------- | ----------------------------------------- | ------------- |
| `text-base`          | font-size: 16px; <br />line-height: 24px; |               |
| `text-{size}`        | `font-size: {size}px`                     | size: 10-16px |
| `text-h1`，`text-28` |                                           | 一级标题      |
| `text-h2`，`text-24` |                                           | 二级标题      |
| `text-h3`，`text-20` |                                           | 三级标题      |
| `text-h4`，`text-18` |                                           | 四级标题      |

### 字体颜色

| Class                                                        |
| ------------------------------------------------------------ |
| `text-red` ，`text-orange` ，`text-yellow` ，`text-green` ，`text-blue` ，`text-cyan`，`text-purple`，`text-mauve`，`text-pink`，`text-olive`，`text-brown`，`text-grey`，`text-gray`，`text-black`，`text-white`，`text-333`，`text-666`，`text-999`，`text-ccc`，`text-eee` |



### 字体样式

| class        | css                   | 说明 |
| ------------ | --------------------- | ---- |
| `italic`     | `font-style: italic;` | 斜体 |
| `not-italic` |                       |      |



## 背景 Background

### 背景颜色

内置的背景颜色

| class                                                        |
| ------------------------------------------------------------ |
| `bg-red`，`bg-red-light` ，`bg-orange`，`bg-orange-light` ，`bg-yellow`，`bg-yellow-light`，`bg-green`，`bg-green-light`， `bg-blue`，`bg-blue-light` ，`bg-cyan`，`bg-cyan-light` ，`bg-purple`，`bg-purple-light`，`bg-mauve`，`bg-mauve-light`， `bg-pink`，`bg-pink-light` ，`bg-olive`，`bg-olive-light` ，`bg-brown`，`bg-brown-light` ，`bg-grey`，`bg-grey-light`， `bg-gray`，`bg-black` ，`bg-white`，`bg-f8` ，`bg-ccc`，`bg-eee` |

### 背景属性

| class          | css                             | 说明         |
| -------------- | ------------------------------- | ------------ |
| `bg-center`    | `background-position: center;`  | 背景图像位置 |
| `bg-no-repeat` | `background-repeat: no-repeat;` | 背景图像重复 |
| `bg-auto`      | `background-size: auto;`        |              |
| `bg-cover`     | `background-size: cover;`       |              |
| `bg-contain`   | `background-size: contain;`     |              |

## 边框 Border

| class                                       | css                           | 说明 |
| ------------------------------------------- | ----------------------------- | ---- |
| `border`                                    | `border: 1px solid #e4e7ed;`  |      |
| `border-t` `border-r` `border-b` `border-l` | `border-top-width: 1px;`      |      |
| `border-current`                            | `border-color: currentColor;` |      |

### 圆角

| Class                                                        | Css                                | 说明                              |
| ------------------------------------------------------------ | ---------------------------------- | --------------------------------- |
| `rounded`                                                    | `border-radius: 8px;`              | 默认8px                           |
| `rounded-full`                                               | `border-radius: 9999px;`           | 创建药丸形💊和圆圈（需指定宽高）。 |
| `rounded-{size}`                                             | `border-radius: {size}px`          | size: 2-24 px之间 2和5的倍数      |
| `rounded-tl-{size}` `rounded-tr-{size}` `rounded-bl-{size}` `rounded-br-{size}` | `border-top-left-radius: {size}px` | 单个方向的圆角值                  |
| `rounded-t-full` `rounded-r-full`  `rounded-b-full`  `rounded-l-full` |                                    | 单个边的最大化圆角                |
| `rounded-t-{size}` `rounded-r-{size}`  `rounded-b-{size}`  `rounded-l-{size}` |                                    | 单个边的圆角值                    |



## 交互 Interactivity

| Class             | Css                  | 说明                                                         |
| ----------------- | -------------------- | ------------------------------------------------------------ |
| `appearance-none` | `appearance: none;`  | 重置一个元素的所有浏览器特定样式。这个功能通常用于创建自定义表单组件。 |
| `select-none`     | `user-select: none;` |                                                              |

### 光标效果

当鼠标悬停在一个元素上时，用于控制光标样式的功能类。

| class                | css                    | 说明 |
| -------------------- | ---------------------- | ---- |
| `cursor-pointer`     | `cursor: pointer;`     |      |
| `cursor-wait`        | `cursor: wait;`        |      |
| `cursor-move`        | `cursor: move;`        |      |
| `cursor-not-allowed` | `cursor: not-allowed;` |      |

### 大小调整

| class         | css                   | 说明 |
| ------------- | --------------------- | ---- |
| `resize-none` | `resize: none;`       |      |
| `resize-y`    | `resize: vertical;`   |      |
| `resize-x`    | `resize: horizontal;` |      |
| `resize`      | `resize: both;`       |      |

## 其它 Other

| class                    | css                                                          | 说明                                                         |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `hover`                  | `&:active {  opacity: 0.5; }`                                | 用于点击时的激活效果                                         |
| `shadow`                 | `0 0 15px rgba(224, 224, 224, 0.35)`            | 一个内置的阴影，如果项目内需要使用定制阴影，推荐在app.vue内定义 `bg-shadow` |
| `page`                   | `height: 100%; overflow: hidden;`                            | 一般只用在每个页面的最顶层元素，限制此页面宽度为屏幕宽度，不会被子元素撑开（适用于页面不存在滚动的情况） |
| `safe-area-inset-bottom` | | 底部安全区域                                                 |

