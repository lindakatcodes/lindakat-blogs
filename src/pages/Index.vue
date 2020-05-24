<template>
  <Layout>
      <ul class="all-posts">
        <li v-for="post in postData" :key="post.id" class="post-item">
          <PostCard :post-data="post"></PostCard>
        </li>
      </ul>
    <Pager :info="$page.allPost.pageInfo" class="pager-styles" />
  </Layout>
</template>

<page-query>
  query Post ($page: Int) {
    allPost (perPage: 8, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          path
          title
          timeToRead
          description
        }
      }
    }
  }
</page-query>

<script>
  import { Pager } from "gridsome";
  import PostCard from "~/components/PostCard.vue";

  export default {
    data () {
      return {
        postData: []
      }
    },
    components: {
      Pager,
      PostCard
    },
    created: function() {
      let getPosts = this.$page.allPost.edges.map(e => e.node);
      this.postData = getPosts;
    },
    beforeUpdate: function() {
      this.postData = [];
      let getPosts = this.$page.allPost.edges.map(e => e.node);
      this.postData = getPosts;
    }
  };
</script>

<style>
  .all-posts {
    list-style-type: none;
    padding: 0 3% 12%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2% 3%;
  }

  .pager-styles {
    display: flex;
    justify-content: center;
    margin-top: 5%;
  }

  .pager-styles a {
    color: var(--offwhite);
    font-size: 1.2em;
    text-decoration: none;
    padding: 2% 1%;
  }

  .pager-styles a:hover {
    color: var(--light-blue);
  }

  .pager-styles .active {
    color: var(--light-yellow);
  }

  @media screen and (max-width: 800px) {
    .all-posts {
      grid-template-columns: 1fr;
      gap: 1%;
    }
  } 

  @media screen and (max-width: 500px) {
    .pager-styles {
      margin: 10% auto 0;
      justify-content: space-around;
      width: 50%;
    }

    .pager-styles a {
      font-size: 1.5em;
      padding: 3% 2.5%;
    }
  }

  @media screen and (min-width: 1200px) {
    .all-posts {
      padding: 0 3%;
    }

    .pager-styles {
      margin-top: 0;
    }
  }
</style>
