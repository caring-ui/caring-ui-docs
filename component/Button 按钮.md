---
image: 1715397228484image.png
---

# Button 按钮

## 基本使用
可以通过 `text` 属性设置按钮文字，也可以通过默认slot按钮文字。
```html
<c-button>默认按钮</c-button>
<c-button text="默认按钮"/>
```
**设置按钮主题**

可以通过 `type` 属性来指定按钮主题，也可以通过 `primary` `success` `error` `warning` `info` 属性来指定按钮主题。
```html
<c-button type="primary">primary按钮</c-button>
<c-button primary>success按钮</c-button>
<c-button success>success按钮</c-button>
<c-button error>error按钮</c-button>
<c-button warning>warning按钮</c-button>
<c-button info>info按钮</c-button>
```
**设置浅色按钮**

通过 `light` 属性来设置浅色按钮
```html
<c-button primary plain>light按钮</c-button>
```

**设置镂空按钮**

通过 `plain` 属性来设置镂空按钮
```html
<c-button primary plain>light按钮</c-button>
```

**设置按钮大小**

通过 `size` 属性来设置按钮大小，默认值 `default`，可选值 `medium` `mini`
```html
<c-button medium>medium</c-button>
<c-button mini>mini</c-button>
```

**设置药丸按钮**

通过 `round` 属性来设置药丸按钮
```html
<c-button round>药丸按钮</c-button>
```

**设置水波纹按钮**

通过 `ripple` 属性来设置点击带有水波纹效果的按钮
```html
<c-button round ripple>药丸按钮</c-button>
```

**设置按钮加载**

通过 `loading` 属性来设置按钮加载
```html
<c-button round loading>loading</c-button>
```

**按钮禁用**

通过 `disabled` 属性来按钮禁用
```html
<c-button round disabled>disabled</c-button>
```
## 自定义按钮样式

通过 `custom-style` 属性来设置自定义按钮样式
```html
<c-button :customStyle="{ background: 'purple', width: '150px', height: '50px' }">自定义样式</c-button>
```
通过 `custom-class` 属性来设置自定义按钮样式
```html
<c-button round customClass="my-button">自定义样式</c-button>
.my-button {
  background: pink;
}
```


## API

### Props

| 属性名                 | 说明                                                         | 类型               | 默认值              |
| :--------------------- | :----------------------------------------------------------- | :----------------- | :------------------ |
| size                   | 按钮的大小，可选值 `medium` `mini`                           | *string*           | default             |
| ripple                 | 是否开启点击水波纹效果                                       | *boolean*          | `false`             |
| ripple-bg-color        | 水波纹的背景色，ripple为true时有效                           | *string*           | rgba(0, 0, 0, 0.15) |
| type                   | 按钮的样式类型，可选值为 `primary` `success` `warning` `danger` | *string*           | default             |
| light                  | 浅色按钮                                                     | *boolean*          | false               |
| plain                  | 镂空按钮                                                     | *boolean*          | false               |
| disabled               | 是否禁用                                                     | *boolean*          | false               |
| hair-line              | 是否显示按钮的细边框                                         | *boolean*          | true                |
| round                  | 是否是药丸按钮                                               | *boolean*          | false               |
| loading                | 按钮名称前是否带 loading 图标                                | *boolean*          | false               |
| form-type              | 用于 `<form>` 组件，点击分别会触发 `<form>` 组件的 submit/reset 事件 | *string*           | -                   |
| open-type              | 开放能力                                                     | *string*           | 请参考uni-app方文档 |
| hover-class            | 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 | *string*           | button-hover        |
| hover-start-time       | 按住后多久出现点击态，单位毫秒                               | *string \| number* | 20                  |
| hover-stay-time        | 手指松开后点击态保留时间，单位毫秒                           | *string \| number* | 150                 |
| custom-style           | 对按钮的自定义样式，对象形式，见上方说明                     | *object*           | -                   |
| app-parameter          | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效    | *boolean*          | false               |
| hover-stop-propagation | 指定是否阻止本节点的祖先节点出现点击态                       | *boolean*          | false               |
| lang                   | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | *string*           | en                  |
| session-from           | 会话来源，open-type="contact"时有效                          | *string*           | -                   |
| send-message-title     | 会话内消息卡片标题，open-type="contact"时有效                | *string*           | 当前标题            |
| send-message-path      | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效  | *string*           | 当前分享路径        |
| send-message-img       | 会话内消息卡片图片，open-type="contact"时有效                | *string*           | 当前页面截图        |
| show-message-card      | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 | *string*           | -                   |
| throttle-time 1.5.8    | 节流的时间间隔(一定时间内无论点击多少次，只会触发一次`click`事件)，单位ms，详见[节流防抖](https://v1.uviewui.com/js/debounce.html) | *string \| number* | 500                 |

### Events

| 属性名         | 说明                                                         | 类型    |
| :------------- | :----------------------------------------------------------- | :------ |
| click          | 按钮点击，请勿使用`@tap`点击事件，微信小程序无效，返回值为点击事件及参数 | Handler |
| getphonenumber | open-type="getPhoneNumber"时有效                             | Handler |
| getuserinfo    | 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo | Handler |
| error          | 当使用开放能力时，发生错误的回调                             | Handler |
| opensetting    | 在打开授权设置页并关闭后回调                                 | Handler |
| launchapp      | 打开 APP 成功的回调                                          | Handler |
