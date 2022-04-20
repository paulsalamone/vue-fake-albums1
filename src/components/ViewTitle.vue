<template>
  <h2 :style="{ color: color }"><slot></slot></h2>
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>

<style></style>
