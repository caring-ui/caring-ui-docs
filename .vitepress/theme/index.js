/*
 * @Author: Wanko
 * @Date: 2024-05-08 14:19:32
 * @LastEditors: Wanko
 * @LastEditTime: 2024-05-11 11:31:38
 * @Description: 
 */
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import VImage from '../../components/v-image.vue'
import MyLayout from './MyLayout.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
    Layout: MyLayout,

  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('VImage', VImage)
  }
}
