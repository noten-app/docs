// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Noten-App",
  tagline: "Academic Data Management made easy",
  favicon: "https://noten-app.de/favicon.ico",

  url: "https://docs.noten-app.de",
  baseUrl: "/",

  organizationName: "noten-app",
  projectName: "docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",

  titleDelimiter: "·",

  baseUrlIssueBanner: false,

  trailingSlash: true,

  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/noten-app/docs/tree/main",
          versions: {
            current: {
              label: `Beta 🚧`,
            },
          },
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Noten-App",
      logo: {
        alt: "Noten-App Logo",
        src: "https://noten-app.de/src/images/logo-108p.webp",
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin:0.25rem;">',
            },
            {
              to: '/versions',
              label: 'All versions'
            },
          ],
          dropdownActiveClassDisabled: true,
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/noten-app",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Intro",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/noten-app",
            },
            {
              label: "Impressum",
              href: "https://noten-app.de/legal/impressum",
            },
            {
              label: "Datenschutzerklärung",
              href: "https://noten-app.de/legal/datenschutz",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Noten-App. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true
    },
    announcementBar: {
      id: 'eol-announcement',
      content:
        'Noten-App will be <b>discontinued on 31.12.2024</b>. Please read more about this <a href="https://blog.noten-app.de/noten-app-eol">here</a>.',
      backgroundColor: '#f75d4e',
      textColor: '#000000',
      isCloseable: false,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
