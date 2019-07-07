<template>
  <div class="layout">
    <header class="header">
      <h1 class="title">
        {{ $static.metaData.siteName }}
      </h1>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
      </nav>
      <div class="border"></div>
    </header>
    <slot/>
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
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;
  margin-bottom: 20px;
  height: 80px;
}

.title {
  color: var(--mainBlue);
  font-family: var(--serif);
}

.nav__link {
  margin-left: 20px;
  font-size: 1.2rem;
  color: var(--mainGreen);
}

.border {
  height: 4px;
  width: 100vw;
  margin-top: -25px;
  background: linear-gradient(to right,var(--mainGreen),var(--mainBlue));
}
</style>
