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
          <b-nav-item-dropdown text="專案成果" right>
            <b-dropdown-item href="/2020">RAY 4 成果展示</b-dropdown-item>
            <b-dropdown-item href="//ray2019.pdis.nat.gov.tw" target="_blank">RAY 3 成果展示</b-dropdown-item>
            <b-dropdown-item href="//talk.pdis.nat.gov.tw/tags/已檢查" target="_blank">RAY 2 專案紀錄</b-dropdown-item>
            <b-dropdown-item href="//ray2017.pdis.nat.gov.tw/" target="_blank">RAY 1 專案紀錄</b-dropdown-item>
        </b-nav-item-dropdown>
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
  background: white;
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

.dropdown-item.active, .dropdown-item:active {
  background-color: var(--color-ray);
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

@media screen and (min-width: 992px) {
  .navbar.navbar-dark {
    background: initial;
  }
}

.navbar-nav {
  font-size: 1.2rem;
}
</style>
