# caring-utils

::: info 介绍
常用工具库
:::

### getQueryParams

获取 url 中的参数

```js
import { getQueryParams } from 'caring-utils'

const url = 'https://chinacaring.njch.com.cn/rule4/pages/consult/doctorDetail?doctor_code=010002&dept_code=071304&mode=register'

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
  if (!arr?.length) return []
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
