<template>
  <div id="app">
    <div id="nav">
      <navBar />
    </div>
    <router-view />

    <div class="foot">
      <ft />
    </div>
  </div>
</template>

<script>
import navBar from "./components/newNav.vue";
import ft from "./components/foot.vue";
export default {
  components: {
    navBar,
    ft,
  },
};
</script>


<style>
#app {
  background: #c4d6b0;
}
</style>
