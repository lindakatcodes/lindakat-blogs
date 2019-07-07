<template>
  <Layout>

    <h1 class="title">All Posts</h1>

    <ul class="all-posts">
      <li v-for="post in $static.allPost.edges" :key="post.node.id">
        <g-link :to="post.node.path"><h3 v-html="post.node.title"></h3></g-link>
        <p> {{ post.node.excerpt }} </p>
      </li>
    </ul>

    <Pager :info="$static.post.pageInfo"/>

  </Layout>
</template>

<static-query>
 query Post ($page: Int) {
  post: allPost (perPage: 2, page: $page) {
    totalCount
    pageInfo {
      totalPages
      currentPage
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
</static-query>

<script>
  import { Pager } from "gridsome";

  export default {
    components: {
      Pager
    }
  };
</script>

<style>

</style>
