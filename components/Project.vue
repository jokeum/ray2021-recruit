<template>
  <b-card no-body>
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="require(`~/assets/${previewImage}`)" />
      </b-col>
      <b-col md="6">
        <b-card-body>
          <h2 class="card-title" v-html="titleLine" />
          <div class="card-content">
            <template v-for="(line, i) in introP">
              <b-card-text :key="i">
                {{ line }}
              </b-card-text>
            </template>
          </div>
          <div class="card-action">
            <a href="" class="button">看更多</a>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    previewImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    intro: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    members: {
      type: Array,
      required: true
    }
  },
  computed: {
    titleLine () {
      return this.title.replace('\n', '<br />')
    },
    introP () {
      return this.intro.split('\n')
    }
  }
}
</script>

<style>
h2.card-title {
  text-align: left !important;
  color: unset !important;
  font-size: 1.5rem;
}
.card {
  border-radius: unset;
  max-width: min(calc(100vw - 10em), 1200px);
}

.card > .row {
  height: 100%;
}

.card-body {
  padding: 3rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'title' 'content' 'action';
  height: 100%;
}

.card-body > .card-title {
  grid-area: title;
}

.card-body > .card-content {
  grid-area: content;
}

.card-body > .card-action {
  grid-area: action;
  text-align: right;
}

@media screen and (max-width: 767px) {
  .card {
    height: calc(100vh - 10em);
  }

  .card-body {
    height: 100%;
  }
}
</style>
