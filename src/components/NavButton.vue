<template>
  <button :style="{ backgroundColor: color }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>

<style scoped>
button {
  color: black;
  margin: 2px;
  padding: 6px 60px;
  border-radius: 20px;
  font-size: 1.2rem;
  border-width: 0px;
}
button:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
