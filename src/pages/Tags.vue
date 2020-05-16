<template>
  <Layout>
    <ul>
      <li v-for="tag in $page.allTag.edges" :key="tag.node.id">
        <g-link :to="tag.node.path">{{ tag.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
 query getPostTags {
	allTag {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>

</script>

<style>

</style>
