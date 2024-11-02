<template>
  <Navbar />
  <router-view></router-view>
  <!-- Khu vực hiển thị component -->
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style></style>
