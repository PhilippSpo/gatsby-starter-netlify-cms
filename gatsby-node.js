/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const articleTemplate = path.resolve(`src/templates/article.js`)

  const result = await graphql(`
    {
      allContentfulArticle {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  result.data.allContentfulArticle.edges.forEach(edge => {
    // TODO define in contentful
    if (edge.node.slug === "die-band") {
      actions.createPage({
        path: "/",
        component: articleTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    }
    actions.createPage({
      path: edge.node.slug,
      component: articleTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
