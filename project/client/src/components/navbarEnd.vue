<template>
  <div class="navbar-item" v-if="session.user.email !== null">
    <profilenavbar />
  </div>
  <div class="navbar-item" v-else>
    <div class="buttons">
      <a class="button is-primary"
        ><router-link to="/signup">
          <strong>Sign up</strong>
        </router-link>
      </a>
      <a class="button is-light"
        ><router-link to="/login"> Log in </router-link>
      </a>
    </div>
  </div>
</template>

<script>
import profilenavbar from "../components/profileNavbar.vue";
import session from "../services/session.js";
export default {
  data() {
    return {
      session,
    };
  },
  components: {
    profilenavbar,
  },
};
</script>

<style>
</style>