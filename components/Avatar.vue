<template>
  <div class="avatar">
    <b-img-lazy
      :src="require(`~/assets/avatars/${avatar}`)"
      :alt="name"
      rounded="circle"
    />
    <p class="name">
      {{ name }}
    </p>
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
    }
  }
}
</script>

<style>
.avatar {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  justify-content: center;
  grid-row-gap: .5rem;
}

.avatar .name {
  font-weight: 500;
  align-self: start;
}

.avatar img {
  align-self: end;
  width: 80px;
}
</style>
