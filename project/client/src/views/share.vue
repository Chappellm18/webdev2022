<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-fifth">
        <mbar />
      </div>
      <div class="column" id="postCol">
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
#postCol {
  margin: 0 auto;
}
.container {
  margin: 5rem;
}
</style>