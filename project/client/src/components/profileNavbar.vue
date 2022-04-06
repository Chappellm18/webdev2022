<template>
  <div class="columns" id="profile-badge">
    <div class="column">
      {{ Session.user.username }}
    </div>
    <div class="column">
      <figure class="image">
        <a
          ><router-link to="/profile"
            ><img
              class="avatar is-rounded"
              v-bind:src="Session.user.userImage"
              alt="" /></router-link
        ></a>
      </figure>
    </div>
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
</style>