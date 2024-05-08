/*
 * @Author: Wanko
 * @Date: 2024-04-30 14:41:18
 * @LastEditors: Wanko
 * @LastEditTime: 2024-05-08 17:13:57
 * @Description:
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base,
  // base = '/vitepress/'
  title: 'CaringUI',
  description: 'CaringUI | 由 Vite 和 Vue 驱动的静态站点生成器',
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'CaringUI',
    logo: '/logo.png',
    editLink: {
      pattern:
        'https://github.com/Fascinating-W/vitepress/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    outlineTitle: '大纲',
    outline: [2, 6],
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/什么是VitePress' },
      { text: '参考', link: '/reference/站点配置' },
      {
        text: '模块',
        items: [{ text: 'caring-route', link: '/module/caring-route' }]
      }
    ],
    sidebar: {
      '/reference/': [
        {
          text: '参考',
          items: [
            { text: '站点配置', link: '/reference/站点配置' },
            {
              text: '默认主题',
              items: [{ text: '概览', link: '/reference/概览' }]
            }
          ]
        }
      ],
      '/guide/': [
        {
          text: '开发指南',
          collapsed: false,
          items: [
            { text: '介绍', link: '/guide/介绍' },
            { text: '快速上手', link: '/guide/快速上手' }
          ]
        },
        {
          text: '配置和API参考',
          link: '/reference/站点配置'
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: {
          svg: '<svg t="1714560896104" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4243" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4244"></path></svg>'
        },
        link: 'https://github.com/vuejs/vitepress'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © caring-ui'
    }
  }
})
