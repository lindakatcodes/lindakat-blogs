<template>
  <Layout>
      <h2> {{ $page.post.title }} </h2>
      <span> {{$page.post.date }} </span>
    <div v-html="$page.post.content"/>
    <div> {{ $page.post.tags }} </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    tags
    date
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>