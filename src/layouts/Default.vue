<template>
  <div class="layout">
    <header class="header">
      
      <g-link class="title" to="/"><h1> {{ $static.metaData.siteName }} </h1></g-link>
      
      <nav class="nav">
        <g-link class="nav_link" to="/">All Posts</g-link>
        <!-- <g-link class="nav_link" to="/tags">Tags</g-link> -->
      </nav>
      <div class="header-border"></div>
    </header>
    <main class="main-content">
      <slot/>
    </main>
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

<style>
body {
  font-family: var(--sans-serif);
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: var(--softGray);
  font-size: 18px;
  color: var(--darkGray);
}

.layout {
  max-width: 960px;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;
  margin-bottom: 20px;
  height: 90px;
}

.title {
  color: var(--mainBlue);
  font-family: var(--serif);
  text-decoration: none;
  font-size: 1.4rem;
}

.nav_link {
  margin-right: 20px;
  font-size: 1.3rem;
  font-family: var(--serif);
  color: var(--mainGreen);
  text-decoration-color: var(--mainBlue);
}

.header-border {
  height: 4px;
  width: 100vw;
  margin-top: -40px;
  background: linear-gradient(to right,var(--mainGreen),var(--mainBlue));
}

.main-content {
  flex-grow: 1;
}

.footer {
  font-size: 0.95em;
  text-align: center;
  color: var(--darkGray);
  border-top: 2px solid linear-gradient(to left,var(--mainGreen),var(--mainBlue));
}

.footer-link {
  color: var(--mainBlue);
  text-decoration-color: var(--mainGreen);
}

.footer-border {
  height: 4px;
  background: linear-gradient(to left,var(--mainGreen),var(--mainBlue));
}

@media screen and (max-width: 500px) {
  .title {
    font-size: 0.9em;
    max-width: 65%;
    line-height: 1.2;
    margin-bottom: 0;
  }

  .header {
    align-items: baseline;
    margin-bottom: 0;
  }
}
</style>
