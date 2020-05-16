// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  api.chainWebpack(config => {
    config.mode('development');
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
    query Post {
      allPost {
        edges {
          node {
            id
            path
            title
            tags {
              id
              title
              path
            }
          }
        }
      }
    }`)

    data.allPost.edges.forEach(({ node }, i, edges) => {
      const prev = edges[i - 1]
      const next = edges[i + 1]

      createPage({
        path: node.path,
        component: './src/templates/PostView.vue',
        queryVariables: {
          id: node.id,
          prevId: prev ? prev.node.id : null,
          nextId: next ? next.node.id : null
        }, 
        context: {
          twitterHref: `https://twitter.com/intent/tweet?text=Check out this blog post by @lindakatcodes &url=https://lindakat-blogs.netlify.com${node.path}`,
          devHref: `https://dev.to/search?q=${node.title} lindakatcodes`
        }
      })

      const nodeTags = node.tags;
      nodeTags.forEach((tag) => {
        createPage({
          path: tag.path,
          component: './src/templates/TagView.vue',
          queryVariables: {
            id: tag.id,
            title: tag.title,
            path: tag.path
          }
        })
      })

    })
  })

}