<template>
  <div
    class="carousel"
    @mouseenter="pause = true"
    @mouseleave="pause = false"
  >
    <div class="nav-prev">
      <button @click="prevIndex">
        <img src="~/assets/button_swipe_right.svg" alt="">
      </button>
    </div>
    <div class="nav-next">
      <button @click="nextIndex">
        <img src="~/assets/button_swipe_left.svg" alt="">
      </button>
    </div>
    <ul class="indicators" :style="`--slides-num: ${numSlides};`">
      <li v-for="(v, i) in Array(numSlides).fill().map((_, i) => i)" :key="i" :class="{ active: v == index }">
        <button @click="index = v" />
      </li>
    </ul>
    <div class="slides-wrapper">
      <div
        ref="slides"
        class="slides"
        :style="`--slides-num: ${numSlides}; left: calc(-100% * ${index});`"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      numSlides: 3,
      pause: false
    }
  },
  mounted () {
    this.numSlides = this.$refs.slides.children.length

    setInterval(() => {
      if (!this.pause) {
        this.nextIndex()
      }
    }, 5000)
  },
  methods: {
    nextIndex () {
      this.index = (this.index + 1) % this.numSlides
    },
    prevIndex () {
      this.index = (this.index - 1 >= 0) ? this.index - 1 : this.numSlides - 1
    }
  }
}
</script>

<style>
@keyframes bounce {
  0%, 100%, 20%, 50%, 80% {
    transform:         translateY(0);
  }
  40% {
    transform:         translateY(-30px);
  }
  60% {
    transform:         translateY(-15px);
  }
}

.carousel {
  display: grid;
  grid-template-columns: 1fr var(--slide-width) 1fr;
  grid-template-rows: var(--vertial-space, 5em) auto var(--vertial-space, 5em);
  grid-template-areas: '. . .' 'nav-prev slides nav-next' '. indicators .';
}

.carousel > .nav-prev,
.carousel > .nav-next {
  justify-self: center;
  align-self: center;
}

.carousel > .nav-prev img,
.carousel > .nav-next img {
  max-width: calc((100vw - var(--slide-width)) / 2);
  width: 100%;
}

.carousel > .nav-prev > button,
.carousel > .nav-next > button,
.carousel > .nav-prev > button:focus,
.carousel > .nav-next > button:focus {
  background-color: unset;
  border: unset;
  outline: none;

  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.carousel > .nav-next > button:hover,
.carousel > .nav-prev > button:hover {
  cursor: pointer;
  animation-name: bounce;
}

@media (hover: none) and (pointer: coarse) {
  .carousel > .nav-next > button:hover,
  .carousel > .nav-prev > button:hover {
    animation-name: none;
  }
}

.carousel > .nav-prev {
  grid-area: nav-prev;
}

.carousel > .nav-next {
  grid-area: nav-next;
}

.carousel > .indicators {
  align-self: center;
  margin: 0;
  grid-area: indicators;
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(var(--slides-num, 3), 16px);
  grid-column-gap: 16px;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
}

.carousel > .indicators > li > button {
  border-width: 8px;
  border-style: solid;
  border-radius: 8px;
  padding: 0 0;
  border-color: #787878;
  background: #787878;
  width: 16px;
  height: 16px;

  border: unset;
  outline: none;
}

.carousel > .indicators > li.active > button {
  border-color: white;
  background: white;
}

.carousel > .slides-wrapper {
  grid-area: slides;
  overflow: hidden;
}

.carousel > .slides-wrapper > .slides {
  display: grid;
  position: relative;
  grid-template-columns: repeat(var(--slides-num, 3), 100%);
  transition: left 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;
}
</style>
