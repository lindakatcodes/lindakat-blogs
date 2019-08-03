// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  api.chainWebpack(config => {
    config.mode('development');
  });

  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
    query Post {
      allPost {
        edges {
          node {
            id
            path
            title
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
        }
      })
    })
  })

  // api.createPages(({ graphql, createPage }) => {
    //   const allTags = [];

    //   const { data } = await graphql(`{
    //     Post {
    //       allPost {
    //         edges {
    //           node {
    //             tags
    //           }
    //         }
    //       }
    //     }
    //   `)

    //   createPage({
    //     path: '/tags',
    //     component: './src/pages/Tags.vue',
    //     context: {
    //       tagList: () => {
    //         data.Post.allPost.edges.forEach(({ node }) => {
    //           allTags.push(node.tags);
    //       })
    //       return allTags
    //       }
    //     }
    //   })
    // })
  // })
}