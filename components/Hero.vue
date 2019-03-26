<template>
  <section class="hero is-medium">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="@/static/logo.png" alt="Logo">
            </a>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">Home</a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          Title
        </p>
        <p class="subtitle">
          Subtitle
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "~assets/colors";

.hero {
  background-color: $light-blue;
}
</style>
