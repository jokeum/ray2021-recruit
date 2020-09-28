<template>
  <b-card no-body>
    <b-row no-gutters>
      <b-col md="6" style="overflow: hidden">
        <b-card-img :src="require(`~/assets/${previewImage}`)" style="height: 100%; width: auto; margin: 0 auto;" />
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
  margin-bottom:unset !important;
}
.card {
  border-radius: unset;
}

.card > .row {
}

.card-body {
  padding: 3rem;
  display: grid;
  grid-template-rows: auto 1fr 2.5rem;
  grid-template-areas: 'title' 'content' 'action';
  grid-row-gap: 2em;
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
  align-self: center;
  justify-self: end;
}
</style>
