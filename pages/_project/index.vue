<template>
  <div>
    <section id="header" class="container">
      <span class="before">Before</span>
      <span class="after">After</span>
      <div class="marvel-device macbook" :style="`font-size: ${deviceFontSize}`">
        <div class="top-bar"></div>
        <div class="camera"></div>
        <div class="screen">
          <div class="before"></div>
          <div class="after"></div>
        </div>
        <div class="bottom-bar"></div>
      </div>
      <div class="landing">
        <h1>台北市市民服務大平台，從場地租用看見市民痛點</h1>
      </div>
      <a href="" class="button" id="view-now">看現行網站</a>
      <a href="" class="button" id="view-after">看改造版本</a>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'project',
  data () {
    return {
      deviceFontSize: 'calc(720 / 1048 * 1px)'
    }
  },
  mounted () {
    this.resizeing()
    window.addEventListener('resize', this.resizeing)
  },
  methods: {
    resizeing () {
      const vw = window.innerWidth

      if (vw >= 992) {
        const scaling = Math.min(vw, 1440) / 1440 * 720 / 1048
        this.deviceFontSize = `calc(${scaling} * 1px)`
      } else {
        this.deviceFontSize = '.47328px'
      }
    }
  }
}
</script>

<style>
#header {
  background: linear-gradient(to right, #E0E0E0 25%, #1EBCC6 25%);
  min-height: 1024px;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'before after landing landing' 'macbook macbook landing landing' 'view_now view_after landing landing';
}

span.before {
  grid-area: before;
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(76, 76, 76);
  justify-self: end;
  align-self: end;
  margin: 1.5em;
}

span.after {
  grid-area: after;
  font-size: 1.5em;
  font-weight: 700;
  color: white;
  justify-self: start;
  align-self: end;
  margin: 1.5em;
}

#view-now {
  grid-area: view_now;
  justify-self: end;
  align-self: start;
  background-color: var(--color-gray);
  border-color: var(--color-gray);
}

#view-after {
  grid-area: view_after;
  justify-self: start;
  align-self: start;
  background-color: var(--color-ray);
  border-color: var(--color-ray);
}

.landing {
  grid-area: landing;
  color: white;
}

.landing h1 {
  line-break: strict;
}

#header > .macbook {
  grid-area: macbook;
}

#header > .macbook > .screen {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

#header > .macbook > .screen > div {
  width: 100%;
  height: 100%;
}

#header > .macbook > .screen > .before {
  background-image: url('~assets/projects/sample/before.jpg');
  background-size: 200%;
  background-position: left top;
}

#header > .macbook > .screen > .after {
  background-image: url('~assets/projects/sample/after.jpg');
  background-size: 200%;
  background-position: left top;
}

#header > .button {
  margin: 3em;
  color: white;
  font-weight: 700;
  padding: .5rem 2rem;
  width: max-content;
  border-radius: 20px;
  border-style: solid;
  font-size: 1.25rem;
  line-height: 1.2;
}

@media screen and (max-width: 991px) {
  #header {
    background: linear-gradient(to right, #E0E0E0 50%, #1EBCC6 50%);
    grid-template-rows: auto auto auto 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'before after' 'macbook macbook' 'view_now view_after' 'landing landing';
  }

  span.before, #view-now {

  }

  #header > .macbook {
  }

  .landing {
    background-color: white;
    color: inherit;
  }
}
</style>
