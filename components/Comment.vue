<template>
  <div class="comment">
    <Avatar :name="name" :avatar="avatar" />
    <div class="body">
      <span class="quote">「{{ quote }}」</span>
      <h4>
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
        >{{ title }}</a>
      </h4>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: 'placeholder.jpg'
    },
    name: {
      type: String,
      required: true
    },
    quote: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.comment {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'avatar body';
  grid-column-gap: 2rem;
}

.comment > .avatar {
  grid-area: avatar;
  align-self: start;
}

.comment > .body {
  grid-area: body;
}

.comment > .body > .quote {
  font-weight: 700;
}

.comment > .body > h4 {
  margin-top: 1rem;
  color: rgb(97, 97, 97);
  font-size: 1rem;
}

.comment > .body > p {
  color: rgb(185, 185, 185);
}
</style>
