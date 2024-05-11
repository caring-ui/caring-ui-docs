<!--
 * @Author: Wanko
 * @Date: 2024-05-11 11:30:21
 * @LastEditors: Wanko
 * @LastEditTime: 2024-05-11 12:14:37
 * @Description: 
-->
<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData,  } from 'vitepress'
import {FILE_DIR} from '../../config'
import {watch, ref} from 'vue'
const { frontmatter } = useData()

const { Layout } = DefaultTheme
// 监听frontmatter的变化
let url = ''
if(frontmatter.value.image) {
  url = `${FILE_DIR}${frontmatter.value.image}`
}
watch(() => frontmatter.value.image, (newValue, oldValue) => {
  console.log(newValue)
  if(newValue) {
    url = `${FILE_DIR}${newValue}`
  }else {
    url = ''
  }
})
// // 监听数据变化并更新 url
// const updateImageUrl = () => {
//   url = `${FILE_DIR}${frontmatter.value.image}`
// }
// // 在组件挂载后和数据更新后调用更新函数
// onMounted(updateImageUrl)
// onUpdated(updateImageUrl)
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <div class="mb" v-if="url">
        <img :src="url" class="w-160 h-160" />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
@import "caring-css";
.bg-pink-light {
  background-color: #f9d7eacc;
}
</style>
