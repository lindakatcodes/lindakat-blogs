// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const shiki = require('shiki')

const overnightSlumber = shiki.loadTheme('./static/overnight-slumber-italic.json')

module.exports = {
  siteName: 'LindaKat Blogs',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './posts/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
            [ 'gridsome-plugin-remark-shiki', {
              theme: overnightSlumber
            }]
          ]
        },
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin'
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'LindaKat\'s Tech Blog',
          feed_url: 'https://lindakat-blogs.netlify.com/rss.xml',
          site_url: 'https://lindakat-blogs.netlify.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.content,
          url: 'https://lindakat-blogs.netlify.com' + node.path,
          date: node.date,
          categories: node.tags
        }),
        output: {
          dir: './static',
          name: 'rss'
        }
      }
    }
  ]
}
