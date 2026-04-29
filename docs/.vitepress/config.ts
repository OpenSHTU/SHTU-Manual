import { defineConfig } from 'vitepress'

const sections = [
  {
    key: 'freshman',
    text: '新生篇',
    items: [{ text: '总览', link: '/freshman/' }]
  },
  {
    key: 'study',
    text: '学习篇',
    items: [
      { text: '总览', link: '/study/' },
      { text: '选课与学分', link: '/study/course-selection-and-credits' },
      { text: '出国', link: '/study/overseas' },
      { text: '保研', link: '/study/postgraduate-recommendation' },
      { text: '考研', link: '/study/postgraduate-exam' },
      { text: '实习就业', link: '/study/internship-and-career' },
      { text: '如何入门科研', link: '/study/research-start' }
    ]
  },
  {
    key: 'life',
    text: '生活篇',
    items: [{ text: '总览', link: '/life/' }]
  },
  {
    key: 'growth',
    text: '成长篇',
    items: [{ text: '总览', link: '/growth/' }]
  },
  {
    key: 'faq',
    text: '常见问题',
    items: [{ text: '总览', link: '/faq/' }]
  },
  {
    key: 'contribute',
    text: '贡献与更新',
    items: [{ text: '总览', link: '/contribute/' }]
  }
]

const nav = [
  { text: '首页', link: '/' },
  ...sections.map(({ text, key }) => ({ text, link: `/${key}/` }))
]

const sidebar = Object.fromEntries(
  sections.map(({ key: currentKey }) => [
    `/${currentKey}/`,
    sections.map(({ key, text, items }) => ({
      text,
      collapsed: key !== currentKey,
      items
    }))
  ])
)

export default defineConfig({
  base: process.env.VITEPRESS_BASE ?? '/',
  title: 'SHTU Manual',
  description: '上海科技大学校园手册。',
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
      message: 'SHTU Manual',
      copyright: 'Copyright © 2026'
    }
  }
})
