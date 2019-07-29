<template>
  <Layout>
    <main>
      <ul class="all-tags">
        {{ tags }}
        <li v-for="tag in tags" :key="tag.tags.id" class="tag-item">
          <g-link :to="tag.tags.path" class="tag-link">
            <h2 v-html="tag.tags.id" class="tag-name"></h2>
          </g-link>
        </li>
      </ul>
    </main>
  </Layout>
</template>

<page-query>
  query Post {
    allPost {
      edges {
        node {
          tags {
            id
            path
          }
        }
      }
    }
    }
</page-query>

<script>

  export default {
    computed: {
      tags() {
        return this.$page.allPost.edges.map(e => e.node);
      }
    }
  }
</script>

<style>

</style>
