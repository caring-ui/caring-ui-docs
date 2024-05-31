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

### 快速布局

一些较常用的布局类

| class             | css                                                          | 说明                                       |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------ |
| `flex-center`     | `display: flex;`<br />`align-items: center;`                 | 水平居中                                   |
| `flex-col-center` | `display: flex;`<br />`flex-direction: column;`<br />`align-items: center;` | 纵向flex布局水平居中                       |
| `flex-cc`         | `display: flex;`<br />`align-items: center;`<br />`justify-content: center;` | 水平垂直居中                               |
| `grid-{n}`        |                                                              | 快速实现一个等分的gird宫格布局<br />n: 1-6 |

### Flex Direction

| class              | Css                                                      |
| ------------------ | -------------------------------------------------------- |
| `flex-row`         | `display: flex;`<br /> `flex-direction: row;`            |
| `flex-row-reverse` | `display: flex;`<br /> `flex-direction: row-reverse;`    |
| `flex-col`         | `display: flex;` <br />`flex-direction: column;`         |
| `flex-col-reverse` | `display: flex;` <br />`flex-direction: column-reverse;` |

### Flex Wrap

控制Flex子项换行的功能类

| class               | css                                               |
| ------------------- | ------------------------------------------------- |
| `flex-wrap`         | `display: flex;`<br /> `flex-wrap: wrap;`         |
| `flex-wrap-reverse` | `display: flex;`<br /> `flex-wrap: wrap-reverse;` |
| `flex-nowrap`       | `display: flex;` <br />`flex-wrap: nowrap;`       |

### Flex

| class           | css               | 说明                                                         |
| --------------- | ----------------- | ------------------------------------------------------------ |
| `flex-initial`  | `flex: 0 1 auto;` | 只缩小不放大 允许 flex 项目在考虑到其初始尺寸的情况下**缩小但不放大**（会被压缩） 也是一个元素变为flex容器后，其flex项目的默认flex属性 |
| `flex-{n}`      | `flex: {n} 1 0%;` | n:0-6 允许 flex 项目根据需要放大和缩小，忽略其初始尺寸。 当存在多余空间时，会自动充满剩余空间 fle: 1 === flex: 1 1 0% flex: 0 === flex 0 1 0%，flex0项目完全压缩为子元素宽度 |
| `flex-auto`     | `flex: 1 1 auto;` | 允许一个 flex 项目在考虑到其初始大小的情况下放大和缩小       |
| `flex-none`     | `flex: none;`     | 阻止一个 flex 项目的放大和缩小，弹性失效 相当于flex-shrink-0的效果 |
| `flex-grow-0`   | `flex-grow: 0;`   |                                                              |
| `flex-grow`     | `flex-grow: 1;`   | 允许一个 flex 项目放大，以填充任何可用空间 相当于flex-1的效果 |
| `flex-shrink-0` | `flex-shrink: 0;` | 阻止一个 flex 项目缩小 相当于flex-none                       |
| `flex-shrink`   | `flex-shrink: 1;` | flex项目的默认属性                                           |

### Order

| Class         | Css             | 说明  |
| ------------- | --------------- | ----- |
| `order-{n}`   | `order: {n};`   | n:1-6 |
| `order-first` | `order: -9999;` |       |
| `order-last`  | `order: 9999;`  |       |

### Justify Content

用于控制 flex 和 grid 项目如何沿着容器的主轴定位的功能类。

| Class             | Css                               | 说明                                                         |
| ----------------- | --------------------------------- | ------------------------------------------------------------ |
| `justify-start`   | `justify-content: flex-start;`    |                                                              |
| `justify-end`     | `justify-content: flex-end;`      |                                                              |
| `justify-center`  | `justify-content: center;`        |                                                              |
| `justify-between` | `justify-content: space-between;` |                                                              |
| `justify-around ` | `justify-content: space-around;`  | (使每个项目两侧的距离相等。                                  |
| `justify-evenly`  | `justify-content: space-evenly;`  | 使每个项目周围的距离相等,但不像使用 justify-around 时项目之间有双倍的距离。 |

### Align Content 

用于控制在多行 flex 和grid容器中行的位置的功能类。

| Class             | Css                             |
| ----------------- | ------------------------------- |
| `content-start`   | `align-content: flex-start;`    |
| `content-center`  | `align-content: center;`        |
| `content-end`     | `align-content: flex-end;`      |
| `content-between` | `align-content: space-between;` |
| `content-around`  | `align-content: space-around;`  |
| `content-evenly`  | `align-content: space-evenly;`  |

### Align Items

用于控制 Flex 和Grid项目如何在容器的交叉轴定位的功能类。

| Class            | Css                           |
| ---------------- | ----------------------------- |
| `items-start`    | `align-items: flex-start;`    |
| `items-end`      | `align-items: flex-end;`      |
| `items-center`   | `align-items: flex-center;`   |
| `items-baseline` | `align-items: flex-baseline;` |
| `items-stretch`  | `align-items: flex-stretch;`  |

### Align Self

用于控制单个 flex 或grid 项目如何沿其容器的交叉轴定位的功能类。

| Class           | Css                     |
| --------------- | ----------------------- |
| `self-auto`     | `align-self: auto;`     |
| `self-start`    | `align-self: start;`    |
| `self-end`      | `align-self: end;`      |
| `self-center`   | `align-self: center;`   |
| `self-stretch`  | `align-self: stretch;`  |
| `self-baseline` | `align-self: baseline;` |

### Grid

| class           | css                                                   | 说明                                                         |
| --------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| `grid-cols-{n}` | `grid-template-columns: repeat({n}, minmax(0, 1fr));` | 用于在网格布局中指定列的功能类。                             |
| `col-span-{n}`  | `grid-column: span {n} / span {2};`                   | 用于控制在网格列中元素的大小和放置方式的功能类。<br />n：1-8从1开始，默认是1 |
| `gap-{size}`    | `gap: {size}px`                                       |                                                              |
| `gap-x-{size}`  | `column-gap: {size}px`                                | size: 0-20之间2和5的倍数                                     |
| `gap-y-{size}`  | `row-gap: {size}px`                                   |                                                              |



### Justify Items

用于控制网格项目如何沿其内联轴对齐的功能类。

| class                   | css                       |
| ----------------------- | ------------------------- |
| `justify-items-start`   | `justify-items: start;`   |
| `justify-items-end`     | `justify-items: end;`     |
| `justify-items-center`  | `justify-items: center;`  |
| `justify-items-stretch` | `justify-items: stretch;` |



### Justify Self

用于控制单个网格项如何沿其内联轴对齐的功能类。

| class                  | css                      |
| ---------------------- | ------------------------ |
| `justify-self-auto`    | `justify-self: auto;`    |
| `justify-self-start`   | `justify-self: start;`   |
| `justify-self-end`     | `justify-self: end;`     |
| `justify-self-center`  | `justify-self: center;`  |
| `justify-self-stretch` | `justify-self: stretch;` |



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

