# Avatar 头像

::: info 介绍
本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。
:::

## 基本使用

通过 `src` 指定头像的路径即可简单使用，如果传递了 `text` 参数，`text` 将会优先起作用

如果头像加载失败，导致加载图片失败，将会显示一个默认的灰色头像


::: warning 注意
请保证传递给 `src` 的是绝对地址，而不是相对地址 
:::

```html
<c-avatar src="src"/>
<c-avatar text="CaringUI"/>
```

**展示性别角标**

```html
<c-avatar src="src" sex/>
<c-avatar src="src" sex sex-icon="woman"/>
```

**展示等级角标**
```html
<c-avatar src="src" level/>
<c-avatar src="src" level level-icon="level"/>
```

### API

### Props

| 参数           | 说明                                                         | 类型             | 默认值                           | 可选值 |
| -------------- | ------------------------------------------------------------ | ---------------- | -------------------------------- | ------ |
| bg-color       | 背景颜色，一般显示文字时用                                   | String           | #ddd                             | -      |
| src            | 头像路径，如加载失败，将会显示默认头像                       | String           | -                                | -      |
| size           | 头像尺寸，可以为指定字符串(large, default, mini)，或者数值，单位rpx | String \| Number | default                          | -      |
| mode           | 显示类型，见上方说明                                         | String           | circle                           | square |
| text           | 用文字替代图片，级别优先于`src`                              | String           | -                                | -      |
| img-mode       | 头像图片的裁剪类型，与uni的`image`组件的`mode`参数一致，如效果达不到需求，可尝试传`widthFix`值 | String           | aspectFill                       | -      |
| sex            | 是否显示右上角的性别图标                                     | Boolean          | false                            | true   |
| sex-icon       | 右上角性别图标，可传入图片路径，或内置图标名                 | String           | man                              | woman  |
| sex-bg-color   | 性别图标的背景颜色                                           | String           | man-primary主题，woman-error主题 | -      |
| level          | 是否显示右下角的等级图标                                     | Boolean          | false                            | true   |
| level-icon     | 右下角等级图标，可传入图片路径，或内置图标名                 | String           | level                            | -      |
| level-bg-color | 等级图标的背景颜色                                           | String           | warning主题                      | -      |

### Event

| 事件名 | 说明       | 回调参数                |
| :----- | :--------- | :---------------------- |
| click  | 头像被点击 | index: 用户传递的标识符 |
