module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEPLOYMENT_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
