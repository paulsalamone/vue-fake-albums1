<template>
  <div class="album-div" :style="{ backgroundColor: color }">
    <div class="album-row">
      <img v-bind:src="require(`../assets/${album.img}.jpeg`)" alt="" />
      <div>
        <h3>{{ album.band }}</h3>
        <h2>{{ album.title }}</h2>
        <p>{{ album.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: Object,
    color: String,
  },
};
</script>

<style>
.album-div {
  padding: 20px;
  margin: 10px;
  color: black;
}
.album-row {
  display: flex;
  flex-direction: column;
}
img {
  margin-right: 10px;
  width: 80%;
  height: auto;
}
</style>
