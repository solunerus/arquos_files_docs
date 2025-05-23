// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Arquos Files",
  tagline: "¡El mejor sistema de gestión de documentos digitalizados!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://arquoscrm.sytes.net:5501/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "solunerus", // Usually your GitHub org/user name.
  projectName: "arquos_files_docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/solunerus/arquos_files_docs/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/arquos_files/logo.png",
      navbar: {
        title: "Arquos Files",
        logo: {
          alt: "Arquos Files Site Logo",
          src: "img/arquos_files/icon.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
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
                label: "Tutorial",
                to: "/docs/introduccion",
              },
            ],
          },
          {
            title: "Comunidad",
            items: [
              {
                label: "X",
                href: "https://x.com/NerusMX",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/nerus.mexico",
              },
            ],
          },
          {
            title: "Más",
            items: [
              {
                label: "Sitio Web",
                href: "https://www.nerus.com.mx",
              },
            ],
          },
        ],
        copyright: `Copyright © 2024 - ${new Date().getFullYear()} Soluciones Nerus. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
