<template>
  <Layout>
      <ul class="all-posts">
        <li v-for="post in $page.allPost.edges" :key="post.node.id" class="post-item">
          <article class="post-info">
            <g-link :to="post.node.path" class="post_link">
                <h2 v-html="post.node.title" class="post_link_text"></h2>
            </g-link>
            <p class="post_blurb">{{ post.node.description }}</p>
            <span class="post-readtime">{{ post.node.timeToRead }} min. read</span>
          </article>
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

  export default {
    components: {
      Pager
    }
  };
</script>

<style>
  .all-posts {
    list-style-type: none;
    padding: 3%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2% 3%;
  }

  .post-info {
    height: 25vh;
    border-radius: 10px;
    box-shadow: 2px 2px 10px var(--darkText);
    padding: 0.5% 3% 2%;
    margin-bottom: 3%;
    background: var(--lightBackground);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .post-item {
    color: var(--darkText);
  }

  .post_link {
    color: var(--darkText);
    text-decoration-color: var(--accentDarkSolid);
  }

  .post_link:visited {
    text-decoration-color: var(--accentSolid);
  }

  .post_link:hover {
    color: var(--accentDarkSolid);
  }

  .post_link_text {
    font-family: var(--headerFont);
    margin: 1% 0 0.5% 0;
    font-size: 1.5em;
  }

  .post-readtime {
    color: var(--accentDarkSolid);
    align-self: flex-end;
  }

  .post_blurb {
    margin: 1% 0 0 0;
    flex-grow: 1;
  }

  .pager-styles {
    display: flex;
    justify-content: center;
  }

  .pager-styles a {
    color: var(--accentSolid);
    font-size: 1.2em;
    text-decoration: none;
    padding: 2% 0.5%;
  }

  .pager-styles .active {
    color: var(--lightText);
  }

  @media screen and (max-width: 800px) {
    .all-posts {
      grid-template-columns: 1fr;
      gap: 1%;
    }
  } 

  @media screen and (max-width: 400px) {
    .post-info {
      height: auto;
    }
  }

  @media screen and (min-width: 1200px) {
    .post_link_text {
      font-size: 1.9em;
    }

    .post_blurb {
      margin: 0;
    }
  }
</style>
