<template>
  <div>
    <ViewTitle color="yellow">Indie</ViewTitle>
    <AlbumGrid color="yellow" :albums="albums" genre="indie" />
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
    return {
      albums: [
        {
          img: "001",
          band: "Pavement",
          title: "Slanted & Enchanted",
          description:
            "Jagged Fall snarls and woozy noise flickers capture the poetic side spoiled California suburbia falling apart.",
        },
        {
          img: "002",
          band: "Pavement",
          title: "Slanted & Enchanted",
          description:
            "Jagged Fall snarls and woozy noise flickers capture the poetic side spoiled California suburbia falling apart.",
        },
        {
          img: "003",
          band: "Pavement",
          title: "Slanted & Enchanted",
          description:
            "Jagged Fall snarls and woozy noise flickers capture the poetic side spoiled California suburbia falling apart.",
        },
      ],
    };
  },
};
</script>

<style></style>
