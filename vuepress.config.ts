import type { ThemeConfig } from '@vuepress/core'

const config: ThemeConfig = {
	lang: 'zh-CN',
	title: 'MtF HRT Docs',
	description: 'MtF HRT Docs',
	head: [
		['link', { rel: 'icon', href: '/logo.png' }],
		['link', { rel: 'stylesheet', href: '/custom.css', type: 'text/css' }],
	],
	theme: '@vuepress/theme-default',
	themeConfig: {
		logo: '/logo.png',
		contributors: false,
		lastUpdated: false,
		externalLinkIcon: true,
		navbar: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'Menu',
				link: '/menu/',
			},
			{
				text: 'Link',
				link: '/link/',
			},
			{
				text: 'Credits',
				link: '/credits/',
			},
		]
	},

}

module.exports = config
