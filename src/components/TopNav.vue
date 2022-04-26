<template>
  <div>
    <h1>FAKE LPs -- 2.0</h1>
    <nav>
      <router-link to="/"><NavButton color="white">All</NavButton></router-link>
      <router-link to="/indie"
        ><NavButton color="yellow">Indie</NavButton></router-link
      >
      <router-link to="/jazz"
        ><NavButton color="pink">Jazz</NavButton></router-link
      >
      <router-link to="/funk"
        ><NavButton color="lightgreen">Funk</NavButton></router-link
      >
      <router-link to="/faves"
        ><NavButton color="red">* Faves *</NavButton></router-link
      >
      <router-link to="/add"
        ><NavButton color="darkgray">Add</NavButton></router-link
      >
    </nav>
  </div>
</template>

<script>
import NavButton from "./NavButton.vue";
export default {
  props: {
    data: Array,
  },
  components: {
    NavButton,
  },
};
</script>

<style>
h1 {
  margin: 5px 20px;
  font-size: 4rem;
}
</style>
