module.exports = {
  siteMetadata: {
    title: `Prooculi`,
    description: `Ponúka služby medicínskeho odboru oftalmológia, diagnostiku a liečbu akútnych,
    chronických ochorení oka, vyšetrenie očného pozadia, vyšetrenia zrakovej ostrosti,
    preventívne prehliadky, drobné chirurgické a estetické zákroky.
    Profesionálny a ľudský prístup, moderné prístrojové vybavenie v príjemnom prostredí novej
    očnej ambulancie.`,
    author: `@bystran`,
  },
  plugins: [
    "gatsby-plugin-react-svg",
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/eye.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
