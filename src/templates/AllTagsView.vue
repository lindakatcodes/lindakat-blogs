<template>
  <Layout :notRoot="true">
    <h2 class="tag-page-title">#{{ $page.tag.title }} Posts</h2>
    <div class="post_divider"></div>
    <ul class="all-posts">
      <li v-for="post in postData" :key="post.id" class="post-item">
        <PostCard :postData="post"></PostCard>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Tag ($id: String!) {
    tag: tag (id: $id) {
      id
      title
      belongsTo {
        edges {
          node {
            ...on Post {
              id
              title
              path
              description
              timeToRead
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import PostCard from "../components/PostCard.vue";

export default {
  data () {
      return {
        postData: []
      }
    },
    metaInfo() {
        return {
            title: this.$page.tag.title
        };
    },
    components: {
      PostCard
    },
    computed: {
        posts() {
          let getPosts = this.$page.tag.belongsTo.edges.map(e => e.node);
          this.postData = getPosts;
        }
    }
};
</script>

<style>
  .tag-page-title {
    text-align: center;
    font-size: 2.3em;
    color: var(--offwhite);
    width: 50vw;
    margin: 0 auto;
    border: 4px solid;
    border-image-source: var(--gradient);
    border-image-slice: 0 0 7 0;
  }

  .all-posts {
    list-style-type: none;
    padding: 0 3% 12%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2% 3%;
  }

  @media screen and (max-width: 800px) {
    .all-posts {
      grid-template-columns: 1fr;
      gap: 1%;
    }
  } 

  @media screen and (max-width: 500px) {
    .tag-page-title {
       width: 70vw;
       font-size: 1.8em;
       border: none;
     }
  }
</style>