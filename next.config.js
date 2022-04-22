/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions
   */
  pageExtensions: ['page.tsx', 'page.ts'],

  /**
   * @see https://nextjs.org/docs/advanced-features/i18n-routing
   */
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },

  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/rewrites
   */
  rewrites: async () => [
    {
      destination: '/home',
      source: '/',
    },
  ],
}
