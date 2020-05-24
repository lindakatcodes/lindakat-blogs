<template>
  <article class="post-info">
    <g-link :to="postData.path" class="post_link">
        <h2 v-html="postData.title" class="post_link_text"></h2>
    </g-link>
    <span class="post-readtime">{{ postData.timeToRead }} min. read</span>
    <p class="post_blurb">{{ postData.description }}</p>
    <span class="post-divider"></span>
  </article>
</template>

<script>
  export default {
    name: 'PostCard',
    props: [
      'postData'
    ]
  }
</script>

<style scoped>
  .post-info {
    color: var(--offwhite);
    padding: 0.5% 3% 2%;
    margin-bottom: 1%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .post_link {
    color: var(--light-purple);
    text-decoration-color: var(--light-yellow);
  }

  .post_link:hover {
    color: var(--light-green);
  }

  .post_link:visited {
    color: var(--light-pink);
  }

  .post_link:visited:hover {
    color: var(--light-green);
  }

  .post_link_text {
    font-family: var(--headerFont);
    margin: 1% 0 2% 0;
    font-size: 1.5em;
  }

  .post-readtime {
    color: var(--light-blue);
  }

  .post_blurb {
    margin: 1% 0 0 0;
  }

  .post-divider {
    display: inline-block;
    width: 25%;
    height: 3px;
    align-self: center;
    margin-top: 4%;
    background: var(--gradient);
  }

  @media screen and (max-width: 500px) {
    .post-info {
      height: auto;
    }

    .post_link_text {
      font-size: 1.2em;
    }

    .post-readtime, .post_blurb {
      font-size: 0.9em;
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