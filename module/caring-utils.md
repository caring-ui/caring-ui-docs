# caring-utils

::: info 介绍
常用工具库
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
import { throttle } from 'caring-utils'
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

### debounce 防抖

在连续的操作中，无论进行了多长时间，只有某一次的操作后在指定的时间内没有再操作，这一次才被判定有效

```vue
<template>
  <div>
    <div @tap="$c.debounce(btnAClick, 500)"></div>
    <div @tap="btnBClick"></div>
  </div>
</template>

<script>
export default {
  methods: {
    btnAClick() {
      console.log('btnClick')
    },
    btnBClick() {
      this.$c.debounce(this.toNext, 500)
    },
    toNext() {
      console.log('btnBClick')
    }
  }
}
</script>
```

::: details 查看代码

```js
let timeout = null

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */

function debounce(func, wait = 500, immediate = false) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout)
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout
    timeout = setTimeout(function () {
      timeout = null
    }, wait)
    if (callNow) typeof func === 'function' && func()
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func()
    }, wait)
  }
}
```

:::

### throttle 节流

`throttle(func, wait = 500, immediate = true)`

规定时间内，只触发一次，可以通过设置 `immediate` 来决定触发的时机在这个时间的开始，还是结束的时候执行。

**参数**

- `func <function>` 触发回调执行的函数
- `wait <Number>` 时间间隔，单位 ms
- `immediate <Number>` 在开始还是结束处触发，比如设置 `wait` 为 1000ms，如果在一秒内进行了 5 次操作，只触发一次，如果 `immediate` 为 `true`，那么就会在第一次操作 触发回调，如果为 `false`，就会在第 5 次操作触发回调。

```vue
<template>
  <div>
    <div @tap="$c.throttle(btnAClick, 500)"></div>
    <div @tap="btnBClick"></div>
  </div>
</template>

<script>
export default {
  methods: {
    btnAClick() {
      console.log('btnClick')
    },
    btnBClick() {
      this.$c.throttle(this.toNext, 500)
    },
    toNext() {
      console.log('btnBClick')
    }
  }
}
</script>
```

::: details 查看代码

```js
let timer, flag
/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
export function throttle(func, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func()
      timer = setTimeout(() => {
        flag = false
      }, wait)
    }
  } else {
    if (!flag) {
      flag = true
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(() => {
        flag = false
        typeof func === 'function' && func()
      }, wait)
    }
  }
}
```

:::

### deepClone 对象深度克隆

```js
import { deepClone } from 'caring-utils'

const obj = {
  name: '张三',
  age: 18,
  hobbies: ['篮球', '足球', '乒乓球'],
  info: {
    city: '北京',
    address: '朝阳区'
  }
}

const newObj = deepClone(obj)
console.log(newObj)
```

::: details 查看代码

```js
export function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj
  }
  const o = isArray(obj) ? [] : {}
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return o
}
```

:::

### deepMerge 对象深度合并

在 ES6 中，我们可以很方便的使用 `Object.assign` 进行对象合并，但这只是浅层的合并，如果对象的属性为数组或者对象的时候，会导致属性内部的值丢失。

::: warning 注意
此处合并不同于 `Object.assign`，因为 `Object.assign(a, b)` 会修改 a 的值为最终的结果(这往往不是我们所期望的)，但是 `deepMerge(a, b)` 并不会修改 a 的值。
:::

`deepMerge(target = {}, source = {})`

**参数**

- `target` 目标对象
- `source` 源对象

**示例**

```js
import { deepMerge } from 'caring-utils'

const obj1 = {
  name: '张三',
  age: 18,
  hobbies: ['篮球', '足球', '乒乓球'],
  info: {
    city: '北京',
    address: '朝阳区'
  }
}

const obj2 = {
  name: '李四',
  age: 20,
  hobbies: ['游泳', '跑步', '羽毛球'],
  info: {
    city: '上海',
    address: '浦东新区'
  }
}

const newObj = deepMerge(obj1, obj2)
console.log(newObj)
```

::: details 查看代码

```js
export function deepMerge(target, source) {
  target = deepClone(target)
  if (typeof target !== 'object' || typeof source !== 'object') return false
  for (const prop in source) {
    if (!source.hasOwnProperty(prop)) continue
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop]
      } else if (typeof source[prop] !== 'object') {
        target[prop] = source[prop]
      } else if (target[prop].concat && source[prop].concat) {
        target[prop] = target[prop].concat(source[prop])
      } else {
        target[prop] = deepMerge(target[prop], source[prop])
      }
    } else {
      target[prop] = source[prop]
    }
  }
  return target
}
```

:::

### getQueryParams

获取 url 中的参数

```js
import { getQueryParams } from 'caring-utils'

const url =
  'https://chinacaring.njch.com.cn/rule4/pages/consult/doctorDetail?doctor_code=010002&dept_code=071304&mode=register'

// 获取所有参数
let allParams = getQueryParams(url)
console.log(allParams)
// 输出: {doctor_code: "010002", dept_code: "071304", mode: "register"}

// 获取单个参数值
let doctorCode = getQueryParams(url, 'doctor_code')
console.log(doctorCode)
// 输出: "010002"

let deptCode = getQueryParams(url, 'dept_code')
console.log(deptCode)
// 输出: "071304"

let mode = getQueryParams(url, 'mode')
console.log(mode)
// 输出: "register"

let nonExistentParam = getQueryParams(url, 'non_existent')
console.log(nonExistentParam)
// 输出: null
```

::: details 查看代码

```js
export function getQueryParams(url, paramName = null) {
  let queryParams = {}
  let queryString = url.split('?')[1]

  if (queryString) {
    let params = queryString.split('&')
    params.forEach((param) => {
      let [key, value] = param.split('=')
      queryParams[decodeURIComponent(key)] = decodeURIComponent(value)
    })
  }

  if (paramName) {
    return queryParams[paramName] || null
  }

  return queryParams
}
```

:::

### isReferenceArray

是否是引用类型数组

```js
import { isReferenceArray } from 'caring-utils'

const refArray = [{ a: 1 }, [1, 2, 3], { b: 2 }]
const valueArray = [1, 'string', true, null, undefined]
const mixedArray = [1, { a: 1 }, 'string']

isReferenceArray(refArray) // true
isReferenceArray(valueArray) // false
isReferenceArray(mixedArray) // true
```

::: details 查看代码

```js
export function isReferenceArray(arr) {
  return arr.some((item) => typeof item === 'object' && item !== null)
}
```

:::

### unique

去重

```js
import { unique } from 'caring-utils'

const valueArray = [1, 2, 2, 3, 4, 4, 5]
const refArray = [{ a: 1 }, { a: 1 }, { b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 }]
const refArrayWithKey = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 1, value: 'c' }
]

unique(valueArray) // 输出: [1, 2, 3, 4, 5]
unique(refArray) // 输出: [{a: 1}, {b: 2}, {a: 1, b: 2}]
unique(refArray, 'id') // 输出: [{a: 1}, {b: 2}]

unique(refArrayWithKey, 'id') // 输出: [{id: 1, value: 'a'}, {id: 2, value: 'b'}]
```

::: details 查看代码

```js
export function unique(arr, key) {
  if (!isArray(arr)) return []
  if (!isReferenceArray(arr)) {
    return [...new Set(arr)]
  }

  const seen = new Set()
  return arr.reduce((result, item) => {
    const keyValue = key ? item[key] : JSON.stringify(item)
    if (!seen.has(keyValue)) {
      seen.add(keyValue)
      result.push(item)
    }
    return result
  }, [])
}
```

:::

### range

如果 value 小于 min，取 min；如果 value 大于 max，取 max

```js
import { range } from 'caring-utils'

range(0, 20, 12) // 输出: 12
range(0, 20, -2) // 输出: 0
range(0, 20, 30) // 输出: 20
```

::: details 查看代码

```js
export const range = (min = 0, max = 0, value = 0) =>
  Math.max(min, Math.min(max, Number(value)))
```

:::

### random

`random(min, max)`
该方法可以返回在 `min` 和 `max` 之间的数值，要求 `min` 和 `max` 都为数值，且 `max` 大于或等于 `min`，否则返回 0.

```js
import { random } from 'caring-utils'

random(0, 100)
```

::: details 查看代码

```js
export const random = (min, max) => {
  if (min >= 0 && max > 0 && max >= min) {
    const gab = max - min + 1
    return Math.floor(Math.random() * gab + min)
  }
  return 0
}
```

:::

### sleep

进行延时，以达到可以简写代码的目的

```js
import { sleep } from 'caring-utils'

await sleep(500)
this.$c.toast('等待5秒后抛出提示')
```

::: details 查看代码

```js
export const sleep = (value = 30) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, value)
  })
}
```

:::

### trim 去除空格

该方法可以去除空格，分别可以去除所有空格，两端空格，左边空格，右边空格，默认为去除两端空格

`trim(str, pos)`

**参数**

- `str <String>` 字符串

- `pos <String>` 去除那些位置的空格，
  - `both` 默认值，去除两端空格，
  - `left` 去除左边空格
  - `right`去除右边空格
  - `all` 去除包括中间和两端的所有空格

```js
import { trim } from 'caring-utils'

trim('   hello world   ') // 输出: 'hello world'
trim('   hello world   ', 'both') // 输出: 'hello world'
trim('   hello world   ', 'left') // 输出: 'hello world   '
trim('   hello world   ', 'right') // 输出: '   hello world'
trim('   hello world   ', 'all') // 输出: 'hello world'
```

::: details 查看代码

```js
export const trim = (str, pos = 'both') => {
  str = String(str)
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, '')
  }
  if (pos == 'left') {
    return str.replace(/^\s*/, '')
  }
  if (pos == 'right') {
    return str.replace(/(\s*$)/g, '')
  }
  if (pos == 'all') {
    return str.replace(/\s+/g, '')
  }
  return str
}
```

:::

### guid 全局唯一标识符

该函数可以生产一个全局唯一、随机的 `guid`，默认首字母为 `c`，可以用于当做元素的 `id` 或者 `class` 名等需要唯一，随机字符串的地方，因为 `id` 或者 `class` 不能以数字开头。

`guid(length = 32, firstC = true, radix = 62)`

**参数**

- `length <Number | null>` 字符串长度，默认 32, 如果取值 null，则按 rfc4122 标准生成对应格式的随机数
- `firstC <Boolean>` 是否首字母为 `c`，默认 `true`
- `radix <Number>` 进制，默认 `62`

```js
import { guid } from 'caring-utils'

guid() // 输出: ci2YEt321ICCXCIZyQGiqbz8uE8JdpTe
guid(16) // 输出: czi2BZBcfJNjgZVS
guid(32, false) // 输出: falPSnQamhlLNGmAs5tl7OAVuZ0FOo2e
guid(null, false) // 输出: 'AF1C41C0-4DDF-4E2E-B12A-288035F293FE'
```

::: details 查看代码

```js
export const guid = (len = 32, firstC = true, radix = null) => {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  radix = radix || chars.length

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (let i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    let r
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstC) {
    uuid.shift()
    return `c${uuid.join('')}`
  }
  return uuid.join('')
}
```

:::

### shuffle

该函数可以打乱一个数组，返回打乱后的数组。

`shuffle(arr)`

**参数**

- `arr <Array>` 需要打乱的数组

```js
import { shuffle } from 'caring-utils'

const arr = [1, 2, 3, 4, 5]
shuffle(arr) // 输出: [4, 3, 5, 1, 2]

const arrobj = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' }
]

shuffle(arrobj) // 输出: [{ id: 2, name: 'Bob' }, { id: 1, name: 'Alice' }, { id: 5, name: 'Eve' }, { id: 4, name: 'David' }, { id: 3, name: 'Charlie' }]
```

::: details 查看代码

```js
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]] // 交换元素
  }
  return array
}
```

:::

### queryParams 对象转 URL 参数

`queryParams(data, isPrefix = true, arrayFormat = 'brackets')`

**参数**

- `data <Object>` 对象值，如 `{name: 'lisa', age: 20}`
- `isPrefix <Boolean>` 是否在返回的字符串前加上"?"，默认为 `true`
- `arrayFormat <Boolean>` 属性为数组的情况下的处理办法，默认为 `brackets`，见后面说明

```js
import { queryParams } from 'caring-utils'

const data = {
  name: 'lisa',
  age: 20
}

queryParams(data) // 输出: ?name=lisa&age=20
```

**arrayFormat 参数说明**
如果您传入的 `data` 对象内部某些属性值为数组的情况下，您可能需要留意这个参数的配置：
该参数可选值有 4 个：`indices`，`brackets`，`repeat`，`comma`，具体效果请见下方的演示说明

```js
export default {
  data() {
    return {
      data: {
        name: '冷月夜',
        fruits: ['apple', 'banana', 'orange']
      }
    }
  },
  onLoad() {
    this.$c.queryParams(this.data, true, 'indices')
    // 结果为：?name=冷月夜&fruits[0]=apple&fruits[1]=banana&fruits[2]=orange

    this.$c.queryParams(this.data, true, 'brackets')
    // 结果为：?name=冷月夜&fruits[]=apple&fruits[]=banana&fruits[]=orange

    this.$c.queryParams(this.data, true, 'repeat')
    // 结果为：?name=冷月夜&fruits=apple&fruits=banana&fruits=orange

    this.$c.queryParams(this.data, true, 'comma')
    // 结果为：?name=冷月夜&fruits=apple,banana,orange
  }
}
```

::: details 查看代码

```js
function queryParams(data = {}, isPrefix = true, arrayFormat = 'brackets') {
  const prefix = isPrefix ? '?' : ''
  const _result = []
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1)
    arrayFormat = 'brackets'
  for (const key in data) {
    const value = data[key]
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      continue
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (let i = 0; i < value.length; i++) {
            _result.push(`${key}[${i}]=${value[i]}`)
          }
          break
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`)
          })
          break
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach((_value) => {
            _result.push(`${key}=${_value}`)
          })
          break
        case 'comma':
          // 结果: ids=1,2,3
          let commaStr = ''
          value.forEach((_value) => {
            commaStr += (commaStr ? ',' : '') + _value
          })
          _result.push(`${key}=${commaStr}`)
          break
        default:
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`)
          })
      }
    } else {
      _result.push(`${key}=${value}`)
    }
  }
  return _result.length ? prefix + _result.join('&') : ''
}
```
:::

### padZero
日期的月或日补零操作

```js
import { padZero } from '@/utils/caring-utils'
console.log(padZero()) // 00
console.log(padZero(1)) // 01
console.log(padZero(10)) // 10
```

::: details 查看代码

```js
function padZero (value) {
  if(!value) return '00'
  return `00${value}`.slice(-2)
}
```
:::

### priceFormat

`priceFormat (number, decimals = 0, decimalPoint = '.', thousandsSeparator = ',')`

 - number：要格式化的数字
 - decimals：保留几位小数
 - decimalPoint：小数点符号
 - thousandsSeparator：千分位符号

```js
import { priceFormat} from 'caring-utils'

priceFormat(29) // '29'
priceFormat(29, 2) // '29.00'
priceFormat(29, 2, '.') // '29.00'
priceFormat(29, 2, '.', ',') // '29,00'
priceFormat(100000, 2) // '100,000.00'
```

::: details 查看代码

```js
function priceFormat (number, decimals = 0, decimalPoint = '.', thousandsSeparator = ',') {
  number = (`${number}`).replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = (typeof thousandsSeparator === 'undefined') ? ',' : thousandsSeparator
  const dec = (typeof decimalPoint === 'undefined') ? '.' : decimalPoint
  let s = ''
  const toFixedFix = function (n, prec) {
    const k = 10 ** prec
    return `${Math.ceil(n * k) / k}`
  }

  s = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`)
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
```
:::