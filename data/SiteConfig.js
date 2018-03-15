module.exports = {
  blogPostDir: "sea-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your authors. DEFINE NEW TO CHANGE
  blogAuthorId: "sylas", // The default and fallback author ID used for blog posts without a defined author. DEFINE NEW TO CHANGE
  siteTitle: "ILL SEA", // Site title.
  siteTitleAlt: "Learning games, music, and more", // Alternative site title for SEO.
  siteLogo:
    "/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://illsea.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "Learn to play. Play to learn.", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/island.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Sylas Aldridge", // The author name used in the RSS file
  // siteFBAppID: "", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-114350849-1", // GA tracking ID. // GET YOURS
  siteSocialUrls: [
    "https://github.com/illsea",
    "https://twitter.com/sylas",
    "mailto:sylas@illsea.com",
  ], // these autopopulate the icons // can add more here
  postDefaultCategoryID: "Blog", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/illsea",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/sylas",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:sylas@illsea.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
 
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "ILL SEA LLC" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
};
