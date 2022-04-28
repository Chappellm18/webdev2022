<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="update()">
        <label for="inputPassword5" class="form-label">Password</label>
        <input
          type="password"
          v-model="newPass"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
        />
        <label for="inputPassword5" class="form-label">Confirm Password</label>
        <input
          type="password"
          v-model="newPass2"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
        />
        <div id="passwordHelpBlock" class="form-text">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Session from "../services/session.js";
import { UpdateUserPassword } from "../services/users.js";
export default {
  data() {
    return {
      Session,
      newPass: "",
      newPass2: "",
    };
  },
  methods: {
    update() {
      // update the password of the current user
      // if the new password and the new password confirmation match
      // redirect to the profile page
      // if they don't match, display an error message
      if (this.newPass === this.newPass2) {
        // update the password
        UpdateUserPassword(this.Session.user.userID, this.newPass);
        // redirect to the profile page
      } else {
        // display an error message
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin: 0 auto;
  width: 70%;
  margin-top: 3rem;
  margin-bottom: 5rem;
}
#inputPassword5 {
  margin-bottom: 2rem;
}
</style>