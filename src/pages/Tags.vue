<template>
  <Layout :notRoot="true">
    <section class="tagView">
      <h2>Post Categories:</h2>
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

  h2 {
    width: 50vw;
    text-align: center;
    font-size: 2.5rem;
    margin: 0 auto;
    border: 4px solid;
    border-image-source: var(--accentGradient);
    border-image-slice: 0 0 7 0;
    border-bottom: 4px solid var(--accentSolid);
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
    width: 17vw;
    border-radius: 10px;
    box-shadow: 2px 2px 10px var(--darkText);
    padding: 0.5% 3% 2%;
    margin-bottom: 3%;
    background: var(--lightBackground);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tagLink {
    color: var(--darkText);
    text-decoration-color: var(--accentSolid);
    font-size: 1.5em;
    font-family: var(--headerFont);
  }

  .tagLink:visited {
    text-decoration-color: var(--lightText);
  }

  .tagLink:hover {
    color: var(--lightText);
  }

  .postCount {
    margin: 0;
  }
</style>
