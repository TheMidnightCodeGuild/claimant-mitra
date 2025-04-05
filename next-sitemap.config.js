/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://claimantmitra.com',
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/private/*', '/404'],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/*', '/private/*', '/404']
      }
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://claimantmitra.com'}/sitemap.xml`
    ]
  }
};