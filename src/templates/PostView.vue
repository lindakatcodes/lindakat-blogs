<template>
  <Layout>
    <section class="post-meta">
      <h2 class="post-title"> {{ $page.post.title }} </h2>
      <p class="post-date"> {{$page.post.date }} </p>
      <p class="post-readtime"> {{$page.post.timeToRead}} min. read</p>
      <ul class="post-tags">
        <li v-for="tag in $page.post.tags" :key="tag.id" class="tag">
          <g-link class="tag-link" :to="tag.path">#{{ tag.id }}</g-link>
        </li>
      </ul>
    </section>
    <section v-html="$page.post.content" class="post-content"></section>
    <section class="post-moreInfo">
      <a class="post-discuss dev" :href="$context.devHref" target="_blank">Discuss this post on Dev.to</a>
      <a class="post-discuss twitter" :href="$context.twitterHref" target="_blank">Share on Twitter</a>
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

<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.post.title
      };
    }
  };
</script>

<style>
  .post-meta {
    width: 100%;
    display: grid;
    grid-template-areas: "title title"
                          "date time"
                          "tags tags";
    grid-column-gap: 3%;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
  }

  .post-title {
    grid-area: title;
    color: var(--mainGreen);
    font-size: 2.4em;
    border-bottom: 2px solid var(--mainBlue);
    margin-bottom: 0;
    font-family: var(--serif);
    text-align: center;
  }

  .post-date {
    grid-area: date;
    justify-self: end;
    color: var(--mainBlue);
    margin: 6% 0 2% 0;
  }

  .post-readtime {
    grid-area: time;
    justify-self: start;
    color: var(--mainGreen);
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
  }

  .tag {
    padding: 0 3%;
    margin: 1% 1.5%;
    background: var(--midGray);
    border-radius: 5px;
  }

  .tag-link {
    color: var(--softGray);
    text-decoration: none;
  }
  
  .post-content {
    margin: 0 auto;
    max-width: 620px;
  }

  pre {
    line-height: 1.5;
    display: block;
    border-radius: 5px;
    padding: 1% 3%;
    width: 95%;
    white-space: pre-line;
  }

  a {
    color: var(--mainBlue);
  }

  a:hover {
    color: var(--mainGreen);
  }

  .post-moreInfo {
    font-weight: 600;
    font-size: 1.1em;
    display: grid;
    grid-template-areas: "dev twitter"
                          "prev next";
    grid-column-gap: 3%;
    grid-template-columns: 1fr 1fr;
    align-content: space-evenly;
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
    color: var(--mainGreen);
  }

  .post-link:hover {
    color: var(--mainBlue);
  }

  @media screen and (max-width: 500px) {
    .post-title {
      font-size: 2em;
    }
    
    .post-moreInfo {
      grid-template-areas: "dev" 
                           "twitter"
                           "prev"
                           "next";
      grid-template-columns: 1fr;
    }

    .dev, .twitter, .prev-link, .next-link {
      justify-self: center;
    }
  }
</style>