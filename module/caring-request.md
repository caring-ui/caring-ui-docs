# caring-request

::: info 介绍
适用于 uniappp 的网络请求库，类 axios 语法
:::

## 快速上手

### 作为单独的模块使用

**安装**

```bash
npm i caring-request
```

**使用**

```js
import request from 'caring-request'

request('url')
request.get('url', data)
request.post('url', data)
request.delete('url', data)
request.put('url', data)

// 传入配置
request({
  url: 'url',
  method: 'get',
  data: {
    key: 'value'
  },
  header: {
    'Content-Type': 'application/json'
  }
})
```

### get 请求

```js
request('/api/get')
request.get('/api/get')

// get请求携带参数
request.get('/api/get', { key: 'value' })
```

## 最佳实践

在项目中 API 的组织方式有两种，根据项目的大小，也即接口数量，可以分为两种：

- 接口放在一个文件中，通过对象映射名称，在请求时直接通过 request 请求映射的名称访问实际的接口，这种方式的优点是可以快速的发起请求，适用于接口数目不多的情况，具体组织如下

创建如下目录文件夹

```bash
api
  |-- requets.js // 请求封装
  |-- interface.js // 统一接口文件
```

**`interface.js`** 文件

```js
export default {
  users: '/users',
  login: '/login',
  register: '/register'
}
```

**`requets.js`** 文件

```js
import request from 'caring-request'

import INTERFACE from './interface'
import store from '../store'
import route from 'caring-route'
import { PATH } from '@/config'

request.defaults.baseURL = PATH

request.interceptors.request.use((config) => {
  const { token, refreshToken } = store.state

  if (INTERFACE[config.url]) config.url = INTERFACE[config.url]

  if (config.refreshToken) {
    config.header['Authorization'] = `Bearer ${refreshToken}`
  } else if (!config.withoutToken) {
    config.header['Authorization'] = `Bearer ${token}`
  }
  return config
})

request.interceptors.response.use(async (response) => {
  let { code, config } = response
  const { raw, error } = config
  if (!code) {
    // 请求成功
    if (raw) {
      return response
    } else {
      return response.data
    }
  } else if (code === 30001) {
    route('/pages/index/login')
    return Promise.reject('未登录')
  } else if (code === 30007) {
    console.log('token过期')
    try {
      await store.dispatch('refreshToken')
      return request(config)
    } catch (error) {
      console.error('刷新 token 失败', error)
      route('/pages/index/login') // 跳转到登录页或者其他处理方式
      return Promise.reject('token刷新失败')
    }
  } else {
    // 响应异常
    if (error) {
      // 手动处理异常
      return Promise.reject(response)
    } else {
      // 自动处理异常
      uni.showToast({
        icon: 'none',
        title: response.message
      })
    }
  }
})

// 以插件的形式注册reqeust
const install = (Vue) => {
  // vue3
  Vue.config.globalProperties.$request = request
  // vue2
  Vue.prototype.$request = request
}

export default {
  install
}
```

`main.js` 内注册

```js
import request from '@/api/request'

app.use(request)
```

在 `vue` 页面内使用

```js
{
  async mounted() {
    const users = await this.$request.get('users')
  }
}
```

如果不想挂载到 `Vue` 的原型上，也可以在每个页面单独引入使用

```vue
<script>
import request from '@/api/request'
export default {
  async mounted() {
    const users = await request.get('users')
  }
}
</script>
```

- 接口根据模块进行分类，每个模块一个文件

- 尽量使用
