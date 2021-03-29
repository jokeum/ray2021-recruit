<template>
  <div>
    <Nuxt />
    <Footers />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  --color-ray: rgb(238, 96, 71);
  --color-ray-alpha: rgba(238, 96, 71, .74);
}

@media screen and (max-width: 767px) {
  html {
    font-size: 12px;
  }

  p {
    font-size: 16px;
  }

  section:not(#title) h1,
  section:not(#title) h2,
  section:not(#title) h3 {
    text-align: center;
  }
}

h1, h2 {
  font-weight: 700;
}

h3 {
  font-weight: 500;
}

.container {
  max-width: 1440px;
}

@media screen and (max-width: 1440px){
  .container {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.color\:ray {
  color: var(--color-ray);
}

.weight\:bold {
  font-weight: bold;
}
</style>
