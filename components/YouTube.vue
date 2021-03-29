<template>
  <iframe
    :width="width"
    :height="height"
    :src="video"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>

<script>
export default {
  props: ['video'],
  data () {
    return {
      width: '576',
      height: '324'
    }
  },
  mounted () {
    this.resizeing()
    window.addEventListener('resize', this.resizeing)
  },
  methods: {
    resizeing () {
      const width = window.innerWidth
      const height = window.innerHeight
      const navHeight = Math.floor(4.625 * 16)
      this.width = Math.min(Math.floor(width * 0.9), 768)
      this.height = Math.floor(this.width / 16 * 9)

      if (height < this.height + navHeight) {
        this.height = Math.floor((height - navHeight) * 0.8)
        this.width = Math.floor(this.height / 9 * 16)
      }
    }
  }
}
</script>

<style>
</style>
