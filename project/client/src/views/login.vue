<template>
  <div class="card">
    <div class="card-content">
      <form class="login" @submit.prevent="submit()">
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Username"
              v-model="username"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="Password"
              v-model="password"
              required
            />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import session from "../services/session.js";
//import { Login } from "../services/users.js";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      session.login(this.username, this.password);
    },
  },
};
</script>

<style scoped>
.card {
  width: 60%;
  margin: 0 auto;
  top: 4rem;
  margin-top: 4rem;
  margin-bottom: 35rem;
}
.login {
  margin: 0 auto;
  width: 80%;
}
</style>