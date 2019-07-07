<template>
  <Layout>

    <h1 class="title">All Posts</h1>

    <ul class="all-posts">
      <li v-for="{ node } in $page.allPost.edges" :key="node.id">
        <g-link :to="node.path"><h3 v-html="node.title"></h3></g-link>
        <p> {{ node.excerpt }} </p>
      </li>
    </ul>

    <Pager :info="$page.allPost.pageInfo"/>

  </Layout>
</template>


<page-query>
  query Post ($page: Int) {
  post: allPost (perPage: 2, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
  import { Pager } from 'gridsome'

  export default {
    components: {
      Pager
    }
  }
</script>

<style>

</style>
