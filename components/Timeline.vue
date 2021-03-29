<template>
  <ul>
    <template v-for="(v, i) in list">
      <li :key="i">
        <div class="text">
          <p>{{ v.label }}</p>
          <span>{{ v.text }}</span>
        </div>
        <span class="line">
          <span class="node" />
        </span>
        <span class="time">{{ v.time }}</span>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style scoped>
ul {
  padding-left: 0;
}

ul > li {
  display: grid;
  list-style: none;
  grid-template-columns: 1fr auto 1fr;
}

ul > li > * {
  padding-top: 4em;
}

ul > li > .line {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: var(--color-ray);
  width: 5px;
  margin: 0 1em;
  display: grid;
  justify-items: center;
  transform: translateY(4em);
}

ul > li > .line > .node {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: block;
  background-color: white;
  border-radius: 50%;
  border-style: solid;
  border-color: var(--color-ray);
  border-width: 3px;
  width: 20px;
  height: 20px;
  content: ' ';
  transform: translate(-7px, -4em);
}

ul > li:last-child > .line {
  background-color: initial;
}

ul > li > .text > p {
  font-size: 1.3rem;
  margin-bottom: 0;
}

ul > li > .text > span {
  opacity: .5;
}

ul > li:nth-child(2n+1) > .text {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  text-align: right;
}
ul > li:nth-child(2n+1) > .time {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}
ul > li:nth-child(2n) > .time {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  text-align: right;
}
ul > li:nth-child(2n) > .text {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}

@media screen and (max-width: 575px) {
  ul > li {
    display: grid;
    list-style: none;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
  }

  ul > li > .time {
    padding-top: 2em;
  }
  ul > li > .text {
    padding-top: 0;
  }

  ul > li > .line {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    transform: translateY(2em);
    margin-right: 2em;
  }

  ul > li > .line > .node {
    transform: translate(-7px, -4em);
  }

  ul > li:nth-child(2n+1) > .time,
  ul > li:nth-child(2n) > .time {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    text-align: initial;
  }

  ul > li:nth-child(2n+1) > .text,
  ul > li:nth-child(2n) > .text {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    text-align: initial;
  }
}
</style>
