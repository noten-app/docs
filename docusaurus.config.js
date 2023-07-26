// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Noten-App',
	tagline: 'Academic Data Management made easy',
	favicon: 'https://noten-app.de/favicon.ico',

	// Set the production url of your site here
	url: 'https://docs.noten-app.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'noten-app', // Usually your GitHub org/user name.
	projectName: 'docs', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de'],
	},

	presets: [
		[
		'classic',
		/** @type {import('@docusaurus/preset-classic').Options} */
		({
			docs: {
				sidebarPath: require.resolve('./sidebars.js'),
				routeBasePath: '/', // Serve the docs at the site's root
				// Please change this to your repo.
				// Remove this to remove the "edit this page" links.
				editUrl:
					'https://github.com/noten-app/docs/tree/main',
				},
				blog: false,
				theme: {
				customCss: require.resolve('./src/css/custom.css'),
			},
		}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'Noten-App',
			logo: {
			alt: 'Noten-App Logo',
			src: 'https://noten-app.de/src/images/logo-108p.webp',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Tutorial',
				},
				{
					type: 'localeDropdown',
					position: 'right',
				},
				{
					href: 'https://github.com/noten-app',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
			{
				title: 'Docs',
				items: [
					{
						label: 'Tutorial',
						to: '/intro',
					},
				],
			},
			{
				title: 'Community',
				items: [
					{
						label: 'Stack Overflow',
						href: 'https://stackoverflow.com/questions/tagged/docusaurus',
					},
					{
						label: 'Discord',
						href: 'https://discordapp.com/invite/docusaurus',
					},
					{
						label: 'Twitter',
						href: 'https://twitter.com/docusaurus',
					},
				],
			},
			{
				title: 'More',
				items: [
					{
						label: 'GitHub',
						href: 'https://github.com/noten-app',
					},
					{
						label: 'Impressum',
						href: 'https://noten-app.de/legal/impressum',
					},
					{
						label: 'Datenschutzerklärung',
						href: 'https://noten-app.de/legal/datenschutz',
					},
				],
			},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Noten-App. Built with Docusaurus.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	}),
};

module.exports = config;
