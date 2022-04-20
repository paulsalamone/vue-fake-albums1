<template>
  <div>
    <h1>FAKE LPs</h1>
    <nav>
      <router-link to="/"
        ><NavButton color="yellow">Indie</NavButton></router-link
      >
      <router-link to="/jazz"
        ><NavButton color="pink">Jazz</NavButton></router-link
      >
      <router-link to="/funk"
        ><NavButton color="green">Funk</NavButton></router-link
      >
    </nav>
  </div>
</template>

<script>
import NavButton from "./NavButton.vue";
export default {
  components: {
    NavButton,
  },
};
</script>

<style>
h1 {
  /* border: 1px solid yellow; */
  margin: 5px 20px;
}
</style>
