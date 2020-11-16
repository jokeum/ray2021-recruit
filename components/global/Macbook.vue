<template>
  <div class="macbook-wrapper">
    <div class="marvel-device macbook" :style="`font-size: ${deviceFontSize}`">
      <div class="top-bar" />
      <div class="camera" />
      <template v-if="isImg">
        <div class="screen imgFill" :style="{ backgroundImage: `url(${fill})` }" />
      </template>
      <template v-else>
        <div class="screen videoFill">
          <video
            :src="`${fill}`"
            playsinline
            :autoplay="!asMedia"
            :muted="!asMedia"
            :loop="!asMedia"
            :controls="asMedia"
            :style="asMedia ? { backgroundImage: `url(${screenshot})`, backgroundSize: 'cover' } : ''"
          />
        </div>
      </template>
      <div class="bottom-bar" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: ''
    },
    media: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      deviceFontSize: 'calc(720 / 1048 * 1px)',
      deviceFontSizeSmall: 'calc(720 / 1048 * .75px)'
    }
  },
  computed: {
    isImg () {
      if (/.(jpg|jpeg|png)$/.test(this.fill)) {
        return true
      }
      return false
    },
    asMedia () {
      return !this.isImg && /^true$/i.test(this.media)
    },
    screenshot () {
      if (this.asMedia) {
        return this.fill.replace(/.mp4$/, '_screenshot.jpg')
      }
      return ''
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
.macbook .imgFill {
  background-size: cover;
  background-position: left top;
}

.macbook > .screen.videoFill {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

.macbook > .screen.videoFill > video {
  width: 100%;
}
</style>
