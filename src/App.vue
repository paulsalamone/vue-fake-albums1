<template>
  <div id="app">
    <TopNav />
    <router-view />
  </div>
</template>

<script>
import TopNav from "./components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  background-color: hsl(300, 56%, 4%);
  color: white;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
}

h1 {
  font-weight: 900;
  font-size: 3rem;
}
nav a {
  color: green;
  text-decoration: none;
}
</style>
