<template>
  <div :style="`--theme-color: ${meta.themeColor}`">
    <section id="header">
      <div class="screentone" />
      <span class="before">Before</span>
      <span class="after">After</span>
      <div class="marvel-device macbook" :style="`font-size: ${deviceFontSize}`">
        <div class="top-bar" />
        <div class="camera" />
        <div class="screen">
          <div class="before" :style="{ backgroundImage: `url(${meta.images.landing.before})` }" />
          <div class="after" :style="{ backgroundImage: `url(${meta.images.landing.after})` }" />
        </div>
        <div class="bottom-bar" />
      </div>
      <div class="landing">
        <h1 v-html="title" />
        <div class="members">
          <template v-for="({ name, avatar }, i) in members">
            <Avatar :key="`m-${i}`" :name="name" :avatar="avatar" />
          </template>
        </div>
        <div class="intro">
          <template v-for="(line, i) in introLines">
            <p :key="`l-${i}`">
              {{ line }}
            </p>
          </template>
        </div>
      </div>
      <a id="view-now" :href="meta.links.current_site" target="_blank" class="button">看現行網站</a>
      <template v-if="typeof meta.links.prototype === 'string'">
        <a id="view-after" :href="meta.links.prototype" target="_blank" class="button">看改造版本</a>
      </template>
      <template v-else>
        <span id="view-after" :href="meta.links.prototype" target="_blank" class="button">
          <a :href="meta.links.prototype.web" target="_blank">改造後電腦版</a>
          <a :href="meta.links.prototype.mobile" target="_blank">改造後手機版</a>
        </span>
      </template>
    </section>
    <section id="abstract">
      <nuxt-content class="container" :document="abstract" />
    </section>
    <section id="mc">
      <div class="screentone" />
      <nuxt-content class="container" :document="mc" />
    </section>

    <section id="wireframe">
      <h4>Wireframe A</h4>
      <h4>Wireframe B</h4>
      <div class="marvel-device macbook" :style="`font-size: ${deviceFontSizeSmall}`">
        <div class="top-bar" />
        <div class="camera" />
        <div class="screen" :style="{ backgroundImage: `url(${meta.images.wireframe.a_version})` }" />
        <div class="bottom-bar" />
      </div>
      <div class="marvel-device macbook" :style="`font-size: ${deviceFontSizeSmall}`">
        <div class="top-bar" />
        <div class="camera" />
        <div class="screen" :style="{ backgroundImage: `url(${meta.images.wireframe.b_version})` }" />
        <div class="bottom-bar" />
      </div>
    </section>

    <section id="conclusion">
      <nuxt-content :document="conclusion" />
    </section>

    <section id="features">
      <nuxt-content :document="features" />
    </section>

    <section id="achievement">
      <h4 class="slogan">
        上面還看不夠嗎？快來操作我們的設計成果
      </h4>
      <div class="screens-wrapper">
        <div class="marvel-device macbook before" :style="`font-size: ${deviceFontSize}`">
          <div class="top-bar" />
          <div class="camera" />
          <div class="screen" :style="{ backgroundImage: `url(${meta.images.demon.before})` }" />
          <div class="bottom-bar" />
        </div>
        <div class="marvel-device macbook after" :style="`font-size: ${deviceFontSize}`">
          <div class="top-bar" />
          <div class="camera" />
          <div class="screen" :style="{ backgroundImage: `url(${meta.images.demon.after})` }" />
          <div class="bottom-bar" />
        </div>
      </div>

      <a :href="meta.links.current_site" target="_blank" class="button view-now">看現行網站</a>
      <template v-if="typeof meta.links.prototype === 'string'">
        <a :href="meta.links.prototype" target="_blank" class="button view-after">看改造版本</a>
      </template>
      <template v-else>
        <span :href="meta.links.prototype" target="_blank" class="button view-after">
          <a :href="meta.links.prototype.web" target="_blank">改造後電腦版</a>
          <a :href="meta.links.prototype.mobile" target="_blank">改造後手機版</a>
        </span>
      </template>
    </section>

    <img :src="meta.images.demon.all" alt="" class="bg-img">
    <img :src="meta.images.demon.photography" alt="" class="bg-img">

    <section id="document">
      <h4>詳細專案文件</h4>
      <iframe allowfullscreen allow="fullscreen" style="border:none;width:100%;height:80vh;" :src="`//e.issuu.com/embed.html?d=${meta.issuu}&pageLayout=singlePage&u=pdis.tw`" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'project',
  async asyncData ({ params, $content }) {
    function genImagesSet (images, project) {
      if (images === undefined || images === null) {
        return null
      }

      if (typeof images === 'string') {
        try {
          return require(`~/assets/projects/${project}/${images}`)
        } catch (e) {
          return null
        }
      }

      return Object.keys(images).reduce((previous, key) => Object.assign(previous, { [key]: genImagesSet(images[key], project) }), {})
    }

    const { title, intro, images, tags, members, issuu, links, theme_color: themeColor } = (await $content(`${params.project}`).where({ slug: 'index' }).fetch())[0]
    const meta = { title, intro, images, tags, members, issuu, links, themeColor }

    meta.images = genImagesSet(meta.images, params.project)

    const abstract = (await $content(`${params.project}`).where({ slug: 'abstract' }).fetch())[0]
    const mc = (await $content(`${params.project}`).where({ slug: 'mc' }).fetch())[0]
    const conclusion = (await $content(`${params.project}`).where({ slug: 'conclusion' }).fetch())[0]
    const features = (await $content(`${params.project}`).where({ slug: 'features' }).fetch())[0]
    return {
      project: params.project, meta, abstract, mc, conclusion, features
    }
  },
  data () {
    return {
      deviceFontSize: 'calc(720 / 1048 * 1px)',
      deviceFontSizeSmall: 'calc(720 / 1048 * .75px)'
    }
  },
  computed: {
    title () {
      return this.meta.title.replace('\\n', '<br />')
    },
    introLines () {
      return this.meta.intro.split('\\n')
    },
    members () {
      const projectMetas = require('~/static/project_meta.json')
      const project = projectMetas.find(project => project.slug === this.$route.params.project)
      const collaborators = project ? project.members : projectMetas[0].members
      return this.meta.members.map(member => collaborators.find(collaborator => collaborator.name === member))
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
        this.deviceFontSizeSmall = `calc(${scaling} * .7px)`
      } else if (vw >= 767) {
        this.deviceFontSize = '.45px'
        this.deviceFontSizeSmall = '.4px'
      } else {
        this.deviceFontSize = '.3px'
        this.deviceFontSizeSmall = '.3px'
      }
    }
  }
}
</script>

<style>

:root {
  --margin-horizontal: 7.5em;
}

@media screen and (max-width: 768px) {
  :root {
    --margin-horizontal: 2.5em;
  }
}

#header > .macbook > .screen > .before,
#header > .macbook > .screen > .after,
#wireframe > .macbook > .screen,
#achievement .macbook > .screen {
  background-size: cover;
  background-position: left top;
}

#header > .button,
#achievement > .button {
  color: white;
  font-weight: 700;
  padding: .5rem 2rem;
  width: max-content;
  border-radius: 20px;
  border-style: solid;
  font-size: 1.25rem;
  line-height: 1.2;
}

#abstract, #document {
  margin: 8em var(--margin-horizontal);
}

 #conclusion {
   margin: 8em var(--margin-horizontal) 2.5em var(--margin-horizontal);
 }

#features {
  margin-left: var(--margin-horizontal);
  margin-right: var(--margin-horizontal);
  margin-top: 2.5em;
}

#mc {
  margin: 12em 0;
}

#achievement {
  margin-top: 20em;
  margin-bottom: 13em;
}

#header {
  background: linear-gradient(to right, #E0E0E0 25%, var(--theme-color) 25%);
  min-height: 1024px;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'before after landing landing' 'macbook macbook landing landing' 'view_now view_after landing landing';
}

#header .screentone {
  background-image: radial-gradient(circle farthest-corner at center, rgba(255, 255,255, .2) 27%, var(--theme-color) 27%);
  background-size: 10px 10px;
  width: 29.3vw;
  height: 29.3vw;
  grid-area: landing;
  justify-self: end;
  align-self: start;
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

a#view-after {
  grid-area: view_after;
  justify-self: start;
  align-self: start;
  background-color: var(--color-ray);
  border-color: var(--color-ray);
}

span#view-after {
  grid-area: view_after;
  justify-self: start;
  align-self: start;
  background-color: white;
  border-color: white;
  display: flex;
  justify-content: center;
}

span#view-after a,
span#view-after a:hover,
span#view-after a:visited {
  color: var(--color-gray);
}

span#view-after a:not(:last-child) {
  padding-right: 10px;
}

span#view-after a:not(:first-child) {
  padding-left: 10px;
}

span#view-after a:not(:last-child) {
  border-right-style: dotted;
  border-right-width: .5px;
  border-right-color: var(--color-gray);
}

.landing {
  grid-area: landing;
  align-self: center;
  justify-self: center;
  max-width: 400px;
  color: white;
}

.landing h1 {
  font-size: 2rem;
  line-break: strict;
}

.landing .members {
  align-self: center;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: start;
  justify-content: space-around;
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

#header > .button {
  margin: 3em;
}

@media screen and (max-width: 991px) {
  #header {
    background: linear-gradient(to right, #E0E0E0 50%, var(--theme-color) 50%);
    grid-template-rows: auto auto auto 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'before after' 'macbook macbook' 'view_now view_after' 'landing landing';
  }

  #header .screentone {
    width: 31.1vw;
    height: 62vw;
    grid-column: 2/3;
    grid-row: 1/3;
    justify-self: end;
    align-self: start;
  }

  span.before, #view-now {

  }

  #header > .macbook {
  }

  .landing {
    max-width: unset;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'members title' 'members intro';
    grid-column-gap: 3em;
  }

  .landing .members {
    grid-area: members;
    grid-template-columns: repeat(2, auto);
    justify-self: end;
    color: initial;
    grid-column-gap: 2em;
  }

  .landing h1 {
    grid-area: title;
    align-self: end;
  }

  .landing .intro {
    grid-area: intro;
    align-self: start;
  }
}

#abstract .nuxt-content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 3em;
}

#abstract .nuxt-content h4 {
  margin-top: 1em;
  margin-bottom: 1em;
}

#abstract .nuxt-content > figure {
  text-align: center;
}

#abstract .nuxt-content > figure > img {
  max-width: 400px;
  width: 100%;
}

#abstract .nuxt-content > figure,
#abstract .nuxt-content > .content {
  grid-column: var(--pos-start) / var(--pos-end);
}

@media screen and (max-width: 991px) {
  #abstract .nuxt-content {
    grid-template-columns: 1fr;
  }
  #abstract .nuxt-content > figure,
  #abstract .nuxt-content > .content {
    grid-column: 1 / 2;
    grid-row: var(--pos-mob-s) / var(--pos-mob-e);
  }
}

#mc {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: center;
  align-items: center;
  grid-column-gap: 5em;
}

#mc .container {
  grid-column: 2 / 3;
  max-width: unset;
}

#mc .screentone {
  grid-column: 1 / 2;
  background-image: radial-gradient(circle farthest-corner at center, var(--theme-color) 27%, #fff 27%);
  background-size: 10px 10px;
  width: 22vw;
  height: 356px;
  max-width: 310px;
}

#mc h4 {
  margin: 0 1.5em 0 0;
}

@media screen and (max-width: 767px) {
  #mc {
    grid-column-gap: 2.5em;
  }
}

#wireframe h4 {
  text-align: center;
}

#wireframe {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 991px) {
  #wireframe {
    grid-template-columns: 1fr;
    grid-row-gap: 1.5em;
  }
  #wireframe h4:first-child {
    grid-row: 1 / 2;
  }
  #wireframe h4:nth-child(2) {
    grid-row: 3 / 4;
  }
  #wireframe .macbook:nth-child(3) {
    grid-row: 2 / 3;
  }
  #wireframe .macbook:nth-child(4) {
    grid-row: 4 / 5;
  }
  #wireframe h4 {
    margin-top: 1.5em;
  }
}

#features .nuxt-content figure {
  margin-top: 6em;
  margin-bottom: 2.5em;
  text-align: center;
}

#features .nuxt-content figure > img {
  max-height: 450px;
  max-width: min(1280px, 100%);
}

#features .nuxt-content div.macbook-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 6em;
  margin-bottom: 2.5em;
}

@media screen and (max-width: 767px) {
  #features .nuxt-content figure > img {
    max-height: unset;
    max-width: 85vw;
  }
}

#achievement {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 8em;
  grid-template-areas:  'slogan slogan' 'wrapper wrapper' 'button-now button-after';
}

#achievement > .screens-wrapper {
  grid-area: wrapper;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 8em;
  grid-template-areas: 'screen-before screen-after';
  justify-content: center;
  overflow: hidden;
}

#achievement > .slogan {
  grid-area: slogan;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5em;
}

#achievement > .screens-wrapper > .macbook.before {
  grid-area: screen-before;
}

#achievement > .screens-wrapper > .macbook.after {
  grid-area: screen-after;
}

#achievement > .button {
  margin: 3em auto;
}

#achievement > .button.view-now {
  grid-area: button-now;
  background-color: var(--color-gray);
  border-color: var(--color-gray);
  justify-self: center;
}

#achievement > .button.view-after {
  grid-area: button-after;
  background-color: var(--color-ray);
  border-color: var(--color-ray);
  justify-self: center;
  display: flex;
  justify-content: center;
}

#achievement > span.button.view-after a:not(:last-child) {
  padding-right: 10px;
}

#achievement > span.button.view-after a:not(:first-child) {
  padding-left: 10px;
}

#achievement > span.button.view-after a:not(:last-child) {
  border-right-style: dotted;
  border-right-width: .5px;
  border-right-color: white;
}

#achievement a {
  color: white;
}

.bg-img {
  width: 100%;
}

#document h4 {
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5em;
}
</style>
