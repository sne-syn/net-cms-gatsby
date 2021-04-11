// exports.createPages = ({ actions: { createPage } }) => {
//   const overviewData =  require('./data/overview.json');
//   const overviews = overviewData.overviews;
//   overviews.forEach(item => {
//     createPage({
//       path: '/overviews/' + item.slug,
//       component: require.resolve('./src/components/overview.js'),
//       context: {
//         title: item.title,
//         body: item.body,
//         url: item.url,
//         id: item.id
//       }
//     })
//   })
// }
exports.createPages = ({ actions: { createPage } }) => {
  const products = require("./data/products.json")
  products.forEach(product => {
    createPage({
      path: `/product/${product.slug}/`,
      component: require.resolve("./src/templates/product.js"),
      context: {
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
      },
    })
  })
}
