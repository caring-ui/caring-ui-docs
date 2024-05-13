# caring-test

::: info 介绍
常用正则表达式
:::

## 快速开始

### 在模块中使用

**安装**

```bash
npm i caring-test --save
```

**使用**

```js
import { isEmail, isMobile, ... } from 'caring-test'
```

### 在 `caring-ui` 中使用

`caring-test` 已经作为 `caring-ui` 的依赖安装，挂载在全局对象 `$c` 上，通过 `this.$c` 调用

```vue
<script>
export default {
  mounted() {
    this.$c.isEmail('123@qq.com') // true
    this.$c.isMobile('13812345678') // true
  }
}
</script>
```

## API 列表

### isCode

校验是否短信验证码

```js
isCode('123456') // true
```

::: details 查看代码

```js
export function isCode(value, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value)
}
```

:::

### isArray

校验是否数组

```js
import { isArray } from 'caring-test'

isArray([1, 2, 3]) // true
```

::: details 查看代码

```js
export function isArray(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  }
  return Object.prototype.toString.call(value) === '[object Array]'
}
```

:::

### isObject

校验是否对象

```js
import { isObject } from 'caring-test'

isObject({}) // true
```

::: details 查看代码

```js
export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}
```

:::

### isJsonString

是否是 json 字符串

```js
import { isJsonString } from 'caring-test'

isJsonString('{"name": "caring"}') // true
```

::: details 查看代码

```js
export function isJsonString(value) {
  if (typeof value !== 'string') {
    return false
  }
  try {
    const obj = JSON.parse(value)
    return typeof obj === 'object' && obj
  } catch (e) {
    return false
  }
}
```

:::

### isNumber

是否是十进制数字, 不区分是数值形式还是字符串形式

```js
import { isNumber } from 'caring-test'

isNumber(123) // true
```

::: details 查看代码

```js
export function isNumber(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)
}
```

### isDigits

是否是整数，不区分是数值形式还是字符串形式

```js
import { isDigits } from 'caring-test'

isDigits(123) // true
```

::: details 查看代码

```js
export function isDigits(value) {
  return /^\d+$/.test(value)
}
```

:::

### isString

是否是字符串

```js
import { isString } from 'caring-test'

isString('123') // true
```

::: details 查看代码

```js
export function isString(value) {
  return typeof value === 'string'
}
```

:::

### isFunc

是否是函数

```js
import { isFunc } from 'caring-test'

isFunc(() => {}) // true
```

::: details 查看代码

```js
export function isFunc(value) {
  return typeof value === 'function'
}
```

:::

### isBoolean

是否是布尔值

```js
import { isBoolean } from 'caring-test'

isBoolean(true) // true
```

::: details 查看代码

```js
export function isBoolean(value) {
  return typeof value === 'boolean'
}
```

:::

### isNull

是否是 null

```js
import { isNull } from 'caring-test'

isNull(null) // true
```

::: details 查看代码

```js
export function isNull(value) {
  return value === null
}
```

:::

### isUndefined

是否是 undefined

```js
import { isUndefined } from 'caring-test'

isUndefined(undefined) // true
```

::: details 查看代码

```js
export function isUndefined(value) {
  return typeof value === 'undefined'
}
```

:::

### isPromise

是否是 Promise 对象

```js
import { isPromise } from 'caring-test'

isPromise(
  new Promise((resolve, reject) => {
    resolve('123')
  })
) // true
```

::: details 查看代码

```js
export function isPromise(value) {
  return value instanceof Promise
}
```

:::

### isRegExp

是否是正则表达式

```js
import { isRegExp } from 'caring-test'

isRegExp(/123/) // true
```

::: details 查看代码

```js
export function isRegExp(value) {
  return value instanceof RegExp
}
```

:::

### isIdCard

是否是身份证号码

```js
import { isIdCard } from 'caring-test'

isIdCard('44030219900101001') // true
```

::: details 查看代码

```js
export function isIdCard(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
    value
  )
}
```

:::

### isCarNo

是否是车牌号

```js
import { isCarNo } from 'caring-test'

isCarNo('粤A12345') // true
```

::: details 查看代码

```js
export function isCarNo(value) {
  // 新能源车牌
  const xreg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
  // 旧车牌
  const creg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
  if (value.length === 7) {
    return creg.test(value)
  }
  if (value.length === 8) {
    return xreg.test(value)
  }
  return false
}
```

:::

### isChinese

是否是中文

```js
import { isChinese } from 'caring-test'

isChinese('中文') // true
```

::: details 查看代码

```js
export function isChinese(value) {
  const reg = /^[\u4e00-\u9fa5]+$/gi
  return reg.test(value)
}
```

:::

### isLetter

是否是字母

```js
import { isLetter } from 'caring-test'

isLetter('a') // true
```

::: details 查看代码

```js
export function isLetter(value) {
  const reg = /^[A-Za-z]+$/
  return reg.test(value)
}
```

:::

### isLetterAndNumber

是否是字母和数字

```js
import { isLetterAndNumber } from 'caring-test'

isLetterAndNumber('a1') // true
```

::: details 查看代码

```js
export function isLetterAndNumber(value) {
  const reg = /^[A-Za-z0-9]+$/
  return reg.test(value)
}
```

:::

### isLetterOrNumber

是否是字母或数字

```js
import { isLetterOrNumber } from 'caring-test'

isLetterOrNumber('a1') // true
```

::: details 查看代码

```js
export function isLetterOrNumber(value) {
  const reg = /^[A-Za-z0-9]+$/
  return reg.test(value)
}
```

:::

### isLetterOrChinese

是否是字母或中文

```js
import { isLetterOrChinese } from 'caring-test'

isLetterOrChinese('中文') // true
```

::: details 查看代码

```js
export function isLetterOrChinese(value) {
  const reg = /^[A-Za-z\u4e00-\u9fa5]+$/
  return reg.test(value)
}
```

:::

### isLetterAndChinese

是否是字母和中文

```js
import { isLetterAndChinese } from 'caring-test'

isLetterAndChinese('中文') // true
```

::: details 查看代码

```js
export function isLetterAndChinese(value) {
  const reg = /^[A-Za-z\u4e00-\u9fa5]+$/
  return reg.test(value)
}
```

:::

### isAmount

金额,只允许 2 位小数

```js
import { isAmount } from 'caring-test'

isAmount('123.45') // true
```

::: details 查看代码

```js
export function isAmount(value) {
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value)
}
```

:::

### isEmail

是否是邮箱

```js
import { isEmail } from 'caring-test'

isEmail('123@qq.com') // true
```

::: details 查看代码

```js
export function isEmail(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(
    value
  )
}
```

:::

### isMobile

是否是手机号

```js
import { isMobile } from 'caring-test'

isMobile('13812345678') // true
```

::: details 查看代码

```js
export function isMobile(value) {
  return /^1[23456789]\d{9}$/.test(value)
}
```

:::

### isPhone

是否是座机号

```js
import { isPhone } from 'caring-test'

isPhone('0755-8888888') // true
```

::: details 查看代码

```js
export function isPhone(value) {
  return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value)
}
```

:::

### isUrl

是否是 URL

```js
import { isUrl } from 'caring-test'

isUrl('https://www.baidu.com') // true
```

::: details 查看代码

```js
export function isUrl(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(
    value
  )
}
```

:::

### isEmpty

是否为空

```js
import { isEmpty } from 'caring-test'

isEmpty('') // true
```

::: details 查看代码

```js
export function isEmpty(value) {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
        return true
      break
    case 'boolean':
      if (!value) return true
      break
    case 'number':
      if (value === 0 || isNaN(value)) return true
      break
    case 'object':
      if (value === null || value.length === 0) return true
      for (const i in value) {
        return false
      }
      return true
  }
  return false
}
```

:::

### isDate

是否是日期

```js
import { isDate } from 'caring-test'

isDate(new Date()) // true
```

::: details 查看代码

```js
export function isDate(value) {
  if (!value) return false
  // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
  if (number(value)) value = +value
  return !/Invalid|NaN/.test(new Date(value).toString())
}
```

:::

### isImage

是否是图片

```js
import { isImage } from 'caring-test'

isImage('https://www.baidu.com/img/bd_logo1.png') // true
```

::: details 查看代码

```js
export function isImage(value) {
  const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
  return IMAGE_REGEXP.test(value)
}
```

:::

### isVideo

是否是视频

```js
import { isVideo } from 'caring-test'

isVideo() // false
```

::: details 查看代码
```js
export function isVideo(value) {
  const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
  return VIDEO_REGEXP.test(value)
}
```

:::

### isAudio

是否是音频

```js
import { isAudio } from 'caring-test'

isAudio()
```

::: details 查看代码
```js
export function isAudio(value) {
  return /\.(mp3|wav|wma|flac|ape|aac|ogg|m4a|amr)$/.test(value)
}
```
:::
