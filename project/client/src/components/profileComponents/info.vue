<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="container">
          <div class="row">
            <figure class="image is-128x128">
              <img v-bind:src="Session.user.userImage" alt="" />
            </figure>
          </div>
          <div class="row">
            <div class="info">
              <p class="heading">{{ Session.user.username }}</p>
              <p class="subtitle">{{ Session.user.email }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <editPro />
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../../services/session.js";
import editPro from "./editProfile.vue";
export default {
  data() {
    return {
      Session,
    };
  },
  components: {
    editPro,
  },
  methods: {
    editProfile() {
      console.log("edit profile");
    },
  },
};
</script>

<style scoped>
</style>