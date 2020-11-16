<template>
  <div>
    <Nuxt />
    <Footers />
  </div>
</template>

<style src="../static/devices.min.css">
</style>
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
  --color-gray: #4D4D4D;
}

@media screen and (max-width: 767px) {
  html {
    font-size: 12px;
  }

  p {
    font-size: 16px;
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
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
}

@media screen and (max-width: 1440px){
  .container {
    margin-left: 0;
    margin-right: 0;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
