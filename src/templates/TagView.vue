<template>
  <Layout :notRoot="true">
    <h2 class="tag-page-title">#{{ $page.tag.title }} Posts</h2>
    <div class="post_divider"></div>
    <ul class="all-posts">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <article class="post-info">
          <g-link :to="post.path" class="post_link">
            <h2 v-html="post.title" class="post_link_text"></h2>
          </g-link>
          <p class="post_blurb">{{ post.description }}</p>
          <span class="post-readtime">{{ post.timeToRead }} min. read</span>
        </article>
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
export default {
    metaInfo() {
        return {
            title: this.$page.tag.title
        };
    },
    computed: {
        posts() {
            return this.$page.tag.belongsTo.edges.map(e => e.node);
        }
    }
};
</script>

<style>
  .tag-page-title {
    text-align: center;
    font-size: 2.3em;
    color: var(--lightText);
    width: 50vw;
    margin: 0 auto;
    border: 4px solid;
    border-image-source: var(--accentGradient);
    border-image-slice: 0 0 7 0;
  }

  .all-posts {
    list-style-type: none;
    padding: 0 3% 12%;
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

  .post_link {
    color: var(--darkText);
    text-decoration-color: var(--accentDarkSolid);
  }

  .post_link:visited {
    color: var(--accentDarkSolid);
  }

  .post_link:hover {
    color: var(--accentDarkSolid);
  }

  .post_link:visited:hover {
    color: var(--darkText);
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
    color: var(--darkText);
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