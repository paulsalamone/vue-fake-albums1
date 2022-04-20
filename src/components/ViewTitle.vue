<template>
  <div>
    <h2 :style="{ color: color }">///// <slot></slot>/////</h2>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>

<style></style>
