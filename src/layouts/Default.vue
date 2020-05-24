<template>
  <div class="layout">
    <header class="header">
      <g-link class="title" to="/"><h1> {{ $static.metaData.siteName }} </h1></g-link>
      <nav class="nav">
        <g-link class="nav_link" to="/" v-if="notRoot">All Posts</g-link>
        <g-link class="nav_link" to="/tags">View by Tags</g-link>
      </nav>
      <div class="header-border"></div>
    </header>
    <transition name="fade" appear>
    <main class="main-content">
      <slot/>
    </main>
    </transition>
    <footer class="footer">
      <div class="footer-border"></div>
      <p class="footer-text">All posts by yours truly, LindaKat. Check out my <a href="https://www.lindakat.com" class="footer-link">portfolio</a> if you'd like to know more!</p>
    </footer>
  </div>
</template>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  },
  props: ['notRoot']
};
</script>

<style>
html, body {
  font-family: var(--bodyFont);
  margin: 0;
  padding: 0;
  line-height: 1.25;
  font-size: 18px;
  min-height: 100vh;
  background: var(--charcoal);
  color: var(--offwhite);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--headerFont);
}

.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.title {
  color: var(--offwhite);
  font-family: var(--headerFont);
  text-decoration: none;
  font-size: 1.4rem;
  margin-left: 20px;
}

.title:hover {
  color: var(--light-purple);
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav_link {
  margin-right: 20px;
  font-size: 1.5rem;
  font-family: var(--headerFont);
  color: var(--light-blue);
  text-decoration-color: var(--light-yellow);
}

.nav_link:hover {
  color: var(--light-purple);
}

.header-border {
  height: 4px;
  width: 95vw;
  margin: -40px auto 0;
  background: var(--gradient);
}

.main-content {
  margin-top: 5%;
  flex-grow: 1;
}

.footer {
  height: 100px;
  font-size: 1.1em;
  text-align: center;
  margin-top: 5%;
}

.footer-link {
  color: var(--light-purple);
  text-decoration-color: var(--light-yellow);
}

.footer-link:hover {
  color: var(--light-green);
  /* text-decoration-color: var(--accentSolid); */
}

.footer-border {
  height: 4px;
  width: 95vw;
  margin: 0 auto;
  background: var(--gradient);
}

.fade-enter-active {
  transition: opacity 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}

.fade-enter {
  opacity: 0;
}


@media screen and (max-width: 500px) {
  body {
    padding: 0 6px;
  }

  .header {
    flex-direction: column;
    justify-content: space-around;
  }

  .title {  
    font-size: 1.1em;
    max-width: 95%;
    line-height: 1.2;
    margin: 0;
    color: var(--light-purple);
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title h1 {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .nav {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }

  .nav_link:last-child {
    margin-right: 0;
  }

  .header-border {
    margin-top: 15px;
  }

  .footer {
    margin-top: 30%;
  }
}

@media screen and (max-width: 500px) {
  .main-content {
    margin-top: 0;
    margin-bottom: 25%;
  }

  .footer {
    margin-top: 15%;
  }
}

@media screen and (min-width: 1200px) {
  .title {
    font-size: 1.6em;
  }

  .nav_link {
    font-size: 1.5em;
  }
}
</style>
