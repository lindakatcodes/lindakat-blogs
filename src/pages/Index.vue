<template>
    <Layout>
      <ul class="all-posts">
          <li v-for="post in $page.allPost.edges" :key="post.node.id" class="post-item">
              <g-link :to="post.node.path" class="post_link">
                  <h3 v-html="post.node.title" class="post_link_text"></h3>
              </g-link>
              <p class="post_blurb">{{ post.node.description }}</p>
              <div class="post_divider"></div>
          </li>
      </ul>

      <Pager :info="$page.allPost.pageInfo" class="pager-styles" />

    </Layout>
</template>

<page-query>
  query Post ($page: Int) {
    allPost (perPage: 15, page: $page) @paginate {
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
          description
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from "gridsome";

export default {
    components: {
        Pager
    }
};
</script>

<style>
.all-posts {
  list-style-type: none;
}

.post-item .post_link {
  color: var(--mainBlue);
  text-decoration-color: var(--mainGreen);
  font-size: 1.3em;
}

.post-item:nth-child(even) .post_link {
  color: var(--mainGreen);
  text-decoration-color: var(--mainBlue);
}

.post_link_text {
  margin: 1em 0 0.5em 0;
}

.post_blurb {
  margin: 0;
  padding-left: 2vw;
  color: var(--darkGray);
}

.post_divider {
  height: 2px;
  width: 80%;
  margin-top: 2vh;
  margin-left: 2vw;
  background: linear-gradient(to left,var(--mainGreen),var(--mainBlue)); 
}

.pager-styles a {
  color: var(--darkGray);
  font-size: 1.1em;
  text-decoration: none;
  padding: 2% 0.5%;
}

.pager-styles {
  display: flex;
  justify-content: center;
}
</style>
