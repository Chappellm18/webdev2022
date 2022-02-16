<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter">
        <mbar />
      </div>
      <div class="column is-two-thirds">
        <posts />
      </div>
    </div>
  </div>
</template>

<script>
import posts from "../components/posts.vue";
import mbar from "../components/mbar.vue";

export default {
  components: {
    posts,
    mbar,
  },
};
</script>

<style scoped>
.container {
  margin: 5rem;
}
</style>