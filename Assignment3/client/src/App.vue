<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <router-view />

    <div class="foot">
      <ft />
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import ft from "./components/foot.vue";
export default {
  components: {
    navbar,
    ft,
  },
};
</script>


<style scoped>
</style>
