import { readdirSync } from 'node:fs'
import { defaultTheme, defineUserConfig } from 'vuepress'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItBracketedSpans from 'markdown-it-bracketed-spans'
import markdownItInsert from 'markdown-it-ins'
import markdownItImsize from 'markdown-it-imsize'
import markdownItMultimdTable from 'markdown-it-multimd-table'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const parts = readdirSync('./docs/parts/')

const config = defineUserConfig({
  lang: 'zh-CN',
  title: 'Shizu\'s HRT Guide',
  description: 'Shizu\'s HRT Guide for transfemale',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/custom.css', type: 'text/css' }],
  ],
  theme: defaultTheme({
    logo: '/logo.png',
    repo: 'BBleae/hrt-book',
    repoLabel: 'GitHub',
    docsRepo: 'BBleae/hrt-book',
    docsDir: 'docs',
    docsBranch: 'main',
    editLink: true,
    editLinkText: '编辑本页面',
    contributors: true,
    contributorsText: '贡献者',
    lastUpdated: false,
    themePlugins: {
      externalLinkIcon: true,
    },
    sidebar: {
      '/cafe/': [
        'HOME',
        'DONATE',
        'Estradiol',
        'Progesterone',
        'Anti-Androgens',
        'HairLoss',
        'SERMs',
        'Miscellaneous',
        'RESOURCES',
        'CONTACT',
      ],
      // ['Part0', 'Part1', 'Part2', ...]
      '/parts/': Array.from({ length: parts.length }, (_, i) => i)
        .map(n => `Part${n}`),
      '/': [''],
    },
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '目录',
        link: '/menu/',
      },
      {
        text: 'Cafe',
        link: '/cafe/',
      },
      {
        text: '工具',
        link: '/tools/',
      },
      {
        text: '链接',
        link: '/link/',
      },
      {
        text: 'Credits',
        link: '/credits/',
      },
    ],
  }),
  extendsMarkdown: (md) => {
    md.use(markdownItBracketedSpans)
    md.use(markdownItAttrs)
    md.use(markdownItInsert)
    md.use(markdownItImsize)
    md.use(markdownItMultimdTable, {
      rowspan: true,
    })
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.join(__dirname, './components'),
    }),
  ],
})

export default config
