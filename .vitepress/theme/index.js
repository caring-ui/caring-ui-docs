/*
 * @Author: Wanko
 * @Date: 2024-05-08 14:19:32
 * @LastEditors: Wanko
 * @LastEditTime: 2024-05-08 14:19:56
 * @Description: 
 */
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
