---
image: 1715399838732divider.png
---
# Divider 分割线

## 基本使用
文字内容通过`slot`传入或者`text`属性传入
```html
<c-divider>分割线</c-divider>
<c-divider text="分割线" />
```
### 设置颜色
通过`color`设置文字颜色，通过`border-color`设置分割线颜色
```html
<c-divider color="red">分割线</c-divider>
<c-divider border-color="red">分割线</c-divider>
```
### 设置长度
支持绝对长度和百分比长度
```html
<c-divider length="100">绝对长度</c-divider>
<c-divider length="20%">百分比长度</c-divider>
```