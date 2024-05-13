# caring-utils

## 正则校验

::: info 介绍
常用正则表达式
:::

```js
import { isEmail, isMobile, isIdCard, isUrl, isIp } from 'caring-utils'

isEmail('123@qq.com') // true
isMobile('13812345678') // true
isIdCard('44030219900101234') // true
isUrl('https://www.baidu.com') // true
isIp('192.168.1.1') // true
```

### isCode

校验是否短信验证码

```js
import { isCode } from 'caring-utils'

isCode('123456') // true
```

::: details 查看代码
```js
export function isCode(value, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value)
}
:::

```
