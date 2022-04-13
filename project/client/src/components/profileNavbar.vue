<template>
  <div>
    {{ Session.user.username }}

    <router-link to="/profile"
      ><img v-bind:src="Session.user.userImage" alt=""
    /></router-link>
  </div>
</template>

<script>
import Session from "../services/session.js";
export default {
  data() {
    return {
      Session,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
img {
  margin-left: 2rem;
  scale: 2;
  border-radius: 50%;
}
</style>