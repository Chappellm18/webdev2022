<template>
  <div class="columns" id="profile-badge">
    <div class="column">
      {{ session.user.username }}
    </div>
    <div class="column">
      <figure class="image">
        <a
          ><router-link to="/profile"
            ><img
              class="avatar is-rounded"
              src="../assets/holder1.jpg"
              alt="" /></router-link
        ></a>
      </figure>
    </div>
  </div>
</template>

<script>
import session from "../services/session.js";
export default {
  data() {
    return {
      session,
    };
  },
};
</script>

<style scoped>
</style>