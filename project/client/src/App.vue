<template>
  <div id="app">
    <div id="nav">
      <navBar />
    </div>
    <div class="view">
      <router-view />
    </div>

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
  background: #9fb5b1;
}
.view {
  position: relative;
  top: 5rem;
}
.foot {
  position: relative;
  top: 5rem;
}
</style>
