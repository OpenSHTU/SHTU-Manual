import { defineConfig } from 'vitepress'

const nav = [
  { text: '首页', link: '/' },
  { text: '序言', link: '/intro/' },
  { text: '校园基建', link: '/campus/' },
  { text: '学在科大', link: '/academics/' },
  { text: '科大生活', link: '/life/' },
  { text: '个人成长', link: '/growth/' },
  { text: '旁门左道', link: '/advanced/' },
  { text: '附录', link: '/appendix/' }
]

const allSections = [
  { key: 'intro', text: '序言与快捷入口' },
  { key: 'campus', text: '初来乍到（校园基建）' },
  { key: 'academics', text: '学在科大（学术生存）' },
  { key: 'life', text: '科大生活（衣食住行）' },
  { key: 'growth', text: '个人成长（组织与资源）' },
  { key: 'advanced', text: '旁门左道（进阶Tips）' },
  { key: 'appendix', text: '附录（贡献与更新）' }
]

const sectionSidebar = allSections.map((s) => ({
  text: s.text,
  items: [{ text: '总览', link: `/${s.key}/` }]
}))

const sidebar = Object.fromEntries(
  allSections.map((s) => [`/${s.key}/`, sectionSidebar])
)

export default defineConfig({
  base: process.env.VITEPRESS_BASE ?? '/',
  title: '生存指南',
  description: '生存指南站点。',
  head: [
    [
      'script',
      {},
      `try {
        const key = 'vitepress-theme-appearance'
        if (!localStorage.getItem(key)) localStorage.setItem(key, 'light')
      } catch {}
      `
    ]
  ],
  vite: {
    optimizeDeps: {
      include: ['mermaid']
    }
  },
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true,
    config(md) {
      const defaultFence = md.renderer.rules.fence

      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const language = token.info.trim().split(/\s+/)[0]

        if (language === 'mermaid') {
          return `<MermaidDiagram graph="${encodeURIComponent(token.content)}" />`
        }

        return defaultFence
          ? defaultFence(tokens, idx, options, env, self)
          : self.renderToken(tokens, idx, options)
      }
    }
  },
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenSHTU' }
    ],
    langMenuLabel: '语言',
    returnToTopLabel: '回到顶部',
    outline: {
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    footer: {
      message: '生存指南站点。',
      copyright: 'Copyright © 2026'
    }
  }
})
