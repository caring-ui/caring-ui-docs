# caring-utils

## 正则校验
::: info 介绍
常用正则表达式
:::

```js
import { isEmail, isMobile, isIdCard, isUrl, isIp } from 'caring-utils';

isEmail('123@qq.com'); // true
isMobile('13812345678'); // true
isIdCard('44030219900101234'); // true
isUrl('https://www.baidu.com'); // true
isIp('192.168.1.1'); // true