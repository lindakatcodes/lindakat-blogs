<template>
  <Layout>
    <main>
      <ul class="all-posts">
        <li v-for="post in $page.allPost.edges" :key="post.node.id" class="post-item">
          <article class="post-info">
            <g-link :to="post.node.path" class="post_link">
                <h2 v-html="post.node.title" class="post_link_text"></h2>
            </g-link>
            <span class="post-date">{{ post.node.date }}</span>
            <span class="post-readtime">{{ post.node.timeToRead }} min. read</span>
            <p class="post_blurb">{{ post.node.description }}</p>
          </article>
        </li>
      </ul>
    </main>
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
          path
          title
          date (format: "MMM. DD, YYYY")
          timeToRead
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
    padding: 0;
  }

  .post-info {
    border-radius: 10px;
    box-shadow: 2px 2px 10px var(--darkGray);
    padding: 0.5% 3% 2%;
    margin-bottom: 3%;
    background: var(--softGray);
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
    margin: 1% 0 0.5% 0;
  }

  .post-date {
    color: var(--mainBlue);
    margin: 0 2% 1% 1%;
  }

  .post-readtime {
    color: var(--mainGreen);
    margin: 0 2% 1% 1%;
  }

  .post_blurb {
    margin: 1% 0 0 0;
    padding-left: 3vw;
    color: var(--darkGray);
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

  h2 {
    font-family: var(--serif);
  }
</style>
