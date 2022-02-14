<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
export default {
  components: {
    navbar,
  },
};
</script>


<style lang="scss">
</style>
