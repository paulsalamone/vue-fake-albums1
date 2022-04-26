<template>
  <div>
    <ViewTitle color="white">All</ViewTitle>
    <AlbumGrid color="white" genre="all" />
  </div>
</template>

<script>
import ViewTitle from "../components/ViewTitle.vue";
import AlbumGrid from "../components/AlbumGrid.vue";
export default {
  components: {
    ViewTitle,
    AlbumGrid,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
