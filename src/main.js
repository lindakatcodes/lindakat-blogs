// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/variables.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Arimo|Oswald',
    display: 'swap'
  })

  head.meta.push({
    key: 'og:title',
    property: 'og:title',
    content: 'LindaKat Blogs'
  }, {
    key: 'og:url',
    property: 'og:url',
    content: 'https://www.lindakat-blogs.netlify.app'
  }, {
    key: 'og:image',
    property: 'og:image',
    content: './assets/og_background.png'
  }, {
    key: 'og:type',
    property: 'og:type',
    content: 'website'
  }, {
    key: 'og:description',
    property: 'og:description',
    content: 'The personal tech blog of Linda T.'
  })
}