exports.createPages = ({ actions: { createPage } }) => {
  const overviewData = require("./data/overview.json");
  const overviewList = overviewData.overviews;
  overviewList.forEach(item => {
    createPage({
      path: `/overviews/${item.slug}/`,
      component: require.resolve("./src/components/overview.js"),
      context: {
        title: item.title,
        body: item.body,
        image: item.image.main,
        imageAlt: item.image.alt,
        url: item.url,
        id: item.id
      },
    })
  })
}
