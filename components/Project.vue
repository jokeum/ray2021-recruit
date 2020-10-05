<template>
  <div class="project-card">
    <div class="preview" :style="{ backgroundImage: `url(${preview})` }"></div>
    <div class="card-body">
      <h2 class="card-title" v-html="titleLine" />
      <div class="card-content">
        <template v-for="(line, i) in introP">
          <p :key="`l-${i}`">
            {{ line }}
          </p>
        </template>
        <template v-for="(tag, i) in tags">
          <label :key="`tag-${i}`" class="tag">{{ tag }}</label>
        </template>
        <div class="members">
          <template v-for="({ name, avatar }, i) in members">
            <Avatar :key="`m-${i}`" :name="name" :avatar="avatar" />
          </template>
        </div>
      </div>
      <div class="card-action">
        <a :href="linkTo" target="_blank" class="button">看更多</a>
      </div>
    </div>
  </div>
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
    },
    linkTo: {
      type: String,
      required: true
    }
  },
  computed: {
    titleLine () {
      return this.title.replace('\n', '<br />')
    },
    introP () {
      return this.intro.split('\n')
    },
    preview () {
      return require(`~/assets/projects/${this.previewImage}`)
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
.project-card{
  background-color: white;
  border-radius: unset;
  display: grid;
  grid-template-areas: 'preview body';
  grid-template-columns: 50% 50%;
}

.project-card > .preview {
  grid-area: preview;
  background-size: cover;
  background-position: center;
}

.card-body {
  grid-area: body;
  padding: 3rem;
  display: grid;
  grid-template-rows: auto 1fr 2.5rem;
  grid-template-areas: 'title' 'content' 'action';
  grid-row-gap: 2em;
}

.card-body > .card-title {
  grid-area: title;
}

.card-body > .card-content {
  grid-area: content;
}

.card-body > .card-content label.tag {
  background-color: #C4C4C4;
  line-height: 1.5;
  padding: .5em 1.5em;
  margin: .5em;
}

.card-body > .card-content .members {
  display: grid;
  margin: 1em 0;
  grid-template-columns: repeat(4, auto);
  align-items: start;
}

@media screen and (max-width: 767px) {
  .card-body > .card-content .members {
    grid-template-columns: repeat(2, auto);
  }
}

@media screen and (max-width: 991px) {
  .project-card{
    grid-template-columns: 1fr;
    grid-template-rows: 30vh 1fr;
    grid-template-areas: 'preview' 'body'
  }
}

@media screen and (max-width: 1199px) {
  .card-body {
    padding: 3rem 1.5rem;
  }
}

.card-body > .card-action {
  grid-area: action;
  align-self: center;
  justify-self: end;
}
</style>
