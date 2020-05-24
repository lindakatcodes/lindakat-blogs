<template>
  <Layout :notRoot="true">
    <section class="post-meta">
      <h2 class="post-title"> {{ $page.post.title }} </h2>
      <p class="post-date"> {{$page.post.date }} </p>
      <span class="symbol">♥</span>
      <p class="post-readtime-single"> {{$page.post.timeToRead}} min. read</p>
      <ul class="post-tags">
        <li v-for="tag in $page.post.tags" :key="tag.id" class="tag">
          <g-link class="tag-link" :to="tag.path">#{{ tag.id }}</g-link>
        </li>
      </ul>
    </section>
    <section v-html="$page.post.content" class="post-content"></section>
    <section class="post-moreInfo">
      <a class="post-discuss dev" :href="$context.devHref" target="_blank" rel="noopener noreferer">Discuss this post on Dev.to</a>
      <a class="post-discuss twitter" :href="$context.twitterHref" target="_blank" rel="noopener noreferer">Share on Twitter</a>
      <g-link class="post-link prev-link" v-if="$page.prev" :to="$page.prev.path"> ← {{ $page.prev.title }} </g-link>
      <g-link class="post-link next-link" v-if="$page.next" :to="$page.next.path"> {{ $page.next.title }} → </g-link>
    </section>
  </Layout>
</template>

<page-query>
  query Post ($id: String, $prevId: String, $nextId: String) {
    post: post (id: $id) {
      title
      date (format: "MMM. DD, YYYY")
      timeToRead
      tags {
        id
        path
      }
      content
      path
      description
    }
    prev: post (id: $prevId) {
      title
      path
    }
    next: post (id: $nextId) {
      title
      path
    }
  }
</page-query>

<static-query>
  query {
    metaData {
      siteUrl
    }
  }
</static-query>

<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.post.title,
        meta: [
          {
            key: 'og:title',
            name: 'og:title',
            content: this.$page.post.title
          },
          {
            key: 'og:type',
            name: 'og:type',
            content: 'article'
          },
          {
            key: 'og:description',
            name: 'og:description',
            content: this.$page.post.description
          },
          {
            key: 'og:url',
            name: 'og:url',
            content: this.postUrl
          }
        ]
      };
    },
    computed: {
      postUrl() {
        let siteUrl = this.$static.metaData.siteUrl;
        let postUrl = this.$page.post.path;

        return `${siteUrl}${postUrl}`
      }
    }
  };
</script>

<style>
  .post-meta {
    width: 100%;
    display: grid;
    grid-template-areas: "title title title"
                          "date symbol time"
                          "tags tags tags";
    grid-column-gap: 3%;
    grid-template-columns: 1fr 0.15fr 1fr;
    justify-content: center;
    justify-items: center;
    font-size: 1.1em;
  }

  .post-title {
    grid-area: title;
    color: var(--offwhite);
    font-size: 2.5em;
    margin-bottom: 0;
    font-family: var(--headerFont);
    text-align: center;
    border: 4px solid;
    border-image-source: var(--gradient);
    border-image-slice: 0 0 7 0;
  }

  .post-date {
    grid-area: date;
    justify-self: end;
    color: var(--light-purple);
    margin: 6% 0 2% 0;
  }

  .symbol {
    grid-area: symbol;
    color: var(--light-pink);
    align-self: center;
    font-size: 1.2em;
  }

  .post-readtime-single {
    grid-area: time;
    justify-self: start;
    color: var(--light-blue);
    margin: 6% 0 2% 0;
  }

  .post-tags {
    grid-area: tags;
    justify-self: stretch;
    list-style-type: none;
    padding: 0 3%;
    margin: 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-weight: 600;
  }

  .tag {
    padding: 0 3%;
    margin: 1% 1.5%;
    background: var(--dark-purple);
    border-radius: 5px;
  }

  .tag:nth-child(even) {
    background: var(--dark-blue);
  }

  .tag-link {
    color: var(--offwhite);
    text-decoration: none;
    font-family: var(--headerFont);
    font-size: 1.1em;
    transition: font-size 0.2s ease-in-out;
  }

  .tag-link:hover {
    color: var(--charcoal);
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.2em;
    transition: font-size 0.2s ease-in-out;
  }
  
  .post-content {
    margin: 0 auto;
    max-width: 620px;
    font-size: 18px;
  }

  .post-content h2 {
    color: var(--light-yellow);
  }

  .post-content h3 {
    color: var(--light-green);
  }

  .post-content pre {
    line-height: 1.5;
    display: block;
    border-radius: 5px;
    padding: 1% 3%;
    width: 95%;
    white-space: pre-line;
  }

  .shiki-inline {
    padding: 0.25% 0.45%;
  }

  .post-content a {
    color: var(--light-pink);
    text-decoration-color: var(--light-yellow);
  }

  .post-content a:hover {
    color: var(--light-blue);
  }

  .post-content hr {
    border: 0;
    height: 3px;
    background: var(--gradient);
  }

  .post-moreInfo {
    font-weight: 600;
    font-size: 1.1em;
    display: grid;
    grid-template-areas: "dev twitter"
                          "prev next";
    grid-template-columns: 1fr 1fr;
    gap: 50% 10%;
    align-content: space-between;
    justify-content: space-between;
  }

  .post-discuss {
    color: var(--light-purple);
    text-decoration-color: var(--light-yellow);
  }

  .post-discuss:hover {
    color: var(--light-blue);
  }

  .dev {
    grid-area: dev;
    justify-self: end;
  }

  .twitter {
    grid-area: twitter;
    justify-self: start;
  }

  .prev-link {
    grid-area: prev;
    justify-self: end;
  }

  .next-link {
    grid-area: next;
    justify-self: start;
  }

  .post-link {
    color: var(--light-pink);
    text-decoration-color: var(--light-yellow);
  }

  .post-link:hover {
    color: var(--light-green);
  }

  @media screen and (max-width: 500px) {
    .post-title {
      font-size: 1.8em;
      border: none;
    }

    .post-meta {
      font-size: 1em;
      grid-column-gap: 5%;
    }

    .tag {
      margin: 3% 5%;
    }

    .post-content, .post-content pre {
      width: 92%;
    }
    
    .post-moreInfo {
      grid-template-areas: "dev" 
                           "twitter"
                           "prev"
                           "next";
      grid-template-columns: 1fr;
      gap: 30%;
    }

    .dev, .twitter, .prev-link, .next-link {
      justify-self: center;
      font-size: 1em;
    }
  }
</style>