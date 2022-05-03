import { defineUserConfig, defaultTheme } from 'vuepress'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItBracketedSpans from 'markdown-it-bracketed-spans'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const config = defineUserConfig({
	lang: "zh-CN",
	title: "Shizu's HRT Guide",
	description: "Shizu's HRT Guide for transfemale",
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["link", { rel: "stylesheet", href: "/custom.css", type: "text/css" }],
	],
	theme: defaultTheme({
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
	}),
	extendsMarkdown: (md, app) => {
		md.use(markdownItBracketedSpans)
		md.use(markdownItAttrs)
	},
	plugins: [
		registerComponentsPlugin({
			componentsDir: path.join(__dirname, './components')
		})
	],
})

module.exports = config
