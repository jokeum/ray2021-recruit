<template>
  <div class="observer" />
</template>

<script>
export default {
  props: ['options'],
  data () {
    return {
      observer: null
    }
  },
  mounted () {
    const options = this.options || {}
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        this.$emit('intersect', entry.isIntersecting)
      }
    }, options)
    this.observer.observe(this.$el)
  },
  destroyed () {
    this.observer.disconnect()
  }
}
</script>
