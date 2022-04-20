<template>
  <main :style="{ borderColor: color }">
    <div :key="index" v-for="(album, index) in albumsData">
      <AlbumCard v-if="album.genre === genre" :album="album" :color="color" />
    </div>
  </main>
</template>
<script>
import AlbumCard from "./AlbumCard.vue";
import albums from "../albums.json";

export default {
  props: {
    color: String,
    albums: Array,
    genre: String,
  },
  components: {
    AlbumCard,
  },
  data() {
    return {
      albumsData: albums,
    };
  },
};
</script>

<style scoped>
main {
  border: 5px solid red;
  margin: 5px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 600px) {
  main {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 1200px) {
  main {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
