<template>
  <div>
    <Observer @intersect="toggleNavbarDark" />
    <b-navbar toggleable="lg" :type="dark ? 'dark' : 'light'">
      <b-navbar-brand>
        <img src="~assets/pdis-logo-final-inverse.jpg">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/#title">
            RAY 5.0 招募
          </b-nav-item>
          <b-nav-item href="/#intro">
            專案介紹
          </b-nav-item>
          <b-nav-item href="/#schedule">
            專案時程
          </b-nav-item>
          <b-nav-item href="/#faq">
            FAQ
          </b-nav-item>
          <b-nav-item href="/#comment">
            學長姐心得
          </b-nav-item>
          <b-nav-item href="/2020/">
            RAY 4.0 專案成果
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dark: true
    }
  },
  methods: {
    toggleNavbarDark (isIntersecting) {
      this.dark = isIntersecting
    }
  }
}
</script>

<style>
.navbar {
  position: fixed;
  width: 100vw;
  z-index: 999;
  background: #fff;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, .85);
}

.navbar.navbar-dark {
  background: rgba(0, 0, 0, .9);
}

.navbar-brand > img {
  width: 3rem;
}

@media screen and (min-width: 768px) {
  nav.navbar-expand-md {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: "navbar-collapse navbar-brand";
  }
  .navbar-brand {
    margin-left: 1rem;
    grid-area: navbar-brand;
  }
  .navbar-collapse {
    grid-area: navbar-collapse;
  }
  .nav-link {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

.navbar-nav {
  font-size: 1.2rem;
}
</style>
