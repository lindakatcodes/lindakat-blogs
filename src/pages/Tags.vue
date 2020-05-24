<template>
  <Layout :notRoot="true">
    <section class="tagView">
      <h2 class="categoriesTitle">Post Categories:</h2>
      <ul class="tagList">
        <li v-for="tag in $page.allTag.edges" :key="tag.node.id" class="singleTag">
          <g-link :to="tag.node.path" class="tagLink">{{ tag.node.title }}</g-link>
          <p class="postCount">{{ tag.node.belongsTo.totalCount }} post(s)</p>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<page-query>
 query getPostTags {
	allTag {
    edges {
      node {
        id
        title
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</page-query>

<script>

</script>

<style>
  .tagView {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .categoriesTitle {
    width: 50vw;
    text-align: center;
    font-size: 2.3rem;
    margin: 0 auto;
    border: 4px solid;
    border-image-source: var(--gradient);
    border-image-slice: 0 0 7 0;
  }

  .tagList {
    width: 75vw;
    list-style-type: none;
    padding: 3%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4% 5%;
    justify-items: center;
  }

  .singleTag {
    height: 11vh;
    width: 20vw;
    border-radius: 10px;
    padding: 0.5% 3% 2%;
    margin-bottom: 3%;
    background: var(--dark-purple);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .singleTag:nth-child(even) {
    background: var(--dark-blue);
  }

  .tagLink {
    color: var(--offwhite);
    text-decoration-color: var(--light-yellow);
    text-decoration-thickness: 2px;
    font-size: 1.2em;
    font-family: var(--headerFont);
    transition: font-size 0.2s ease-in-out;
    margin-bottom: 3%;
  }

  .tagLink:hover {
    color: var(--charcoal);
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.3em;
    transition: font-size 0.2s ease-in-out;
  }

  .postCount {
    margin: 3% 0 0 0;
    color: var(--offwhite);
  }

  @media screen and (min-width: 1200px) {
    .categoriesTitle {
      font-size: 2.5em;
    }

    .tagLink {
      font-size: 1.5em;
    }

    .tagLink:hover {
      font-size: 1.6em;
    }
  }

  @media screen and (max-width: 700px) {
    .tagList {
      width: 90vw;
      gap: 4% 0;
    }

    .singleTag {
      width: 25vw;
    }
  }

  @media screen and (max-width: 500px) {
    .tagView {
      margin-bottom: 50%;
    }

    .categoriesTitle {
      font-size: 1.8em;
    }

    .tagList {
      grid-template-columns: 1fr;
      gap: 2%;
    }

    .singleTag {
      width: 60vw;
    }
  }
</style>
