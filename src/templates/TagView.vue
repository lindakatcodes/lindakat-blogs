<template>
  <Layout>
    <main>
      <h1 class="tag-page-title">#{{ $page.tag.title }} Posts</h1>
      <div class="post_divider"></div>
      <ul class="all-posts">
        <li v-for="post in posts" :key="post.id" class="post-item">
          <article class="post-info">
            <g-link :to="post.path" class="post_link">
              <h2 v-html="post.title" class="post_link_text"></h2>
            </g-link>
            <span class="post-date">{{ post.date }}</span>
            <span class="post-readtime">{{ post.timeToRead }} min. read</span>
            <p class="post_blurb">{{ post.description }}</p>
          </article>
        </li>
      </ul>
    </main>
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
              date (format: "MMM. DD, YYYY")
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
    margin: 2% auto 0;
    text-align: center;
    color: var(--midGray);
    width: 80%;
  }

  .post_divider {
    height: 4px;
    width: 60%;
    margin: 0 auto;
    background: linear-gradient(270deg,var(--mainGreen),var(--mainBlue));
  }

  .post-date, .post-readtime {
    margin: 0 2% 1% 1%;
  }
</style>