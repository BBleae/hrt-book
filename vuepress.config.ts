import type { ThemeConfig } from '@vuepress/core'

const config: ThemeConfig = {
  lang: "zh-CN",
  title: "Shizu's HRT Guide",
  description: "Shizu's HRT Guide for transfemale",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/custom.css", type: "text/css" }],
  ],
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/logo.png",
    repo: "BBleae/hrt-book",
    repoLabel: "GitHub",
    docsRepo: "BBleae/hrt-book",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "编辑本页面",
    contributors: true,
		contributorsText: "贡献者",
    lastUpdated: false,
    externalLinkIcon: true,
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "目录",
        link: "/menu/",
      },
      {
        text: "链接",
        link: "/link/",
      },
      {
        text: "Credits",
        link: "/credits/",
      },
    ],
  },
};

module.exports = config
