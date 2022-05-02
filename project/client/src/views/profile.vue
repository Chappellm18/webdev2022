<template>
  <div class="profile">
    <info />

    <hr />
    <postInfo />
    <br />
    <br />
  </div>
</template>

<script>
import info from "../components/profileComponents/info.vue";
import postInfo from "../components/profileComponents/postInfo.vue";
export default {
  components: {
    info,
    postInfo,
  },
};
</script>

<style scoped>
.profile {
  width: 70%;

  margin: 0 auto;
}
</style>