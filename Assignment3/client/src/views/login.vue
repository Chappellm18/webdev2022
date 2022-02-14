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
//import { login } from "../../../server/database.js";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    /*
    submit() {
      login(this.username, this.password);
    },
    */
  },
};
</script>

<style scoped>
.card {
  width: 60%;
  margin: 0 auto;
  top: 5rem;
}
.login {
  margin: 0 auto;
  width: 80%;
}
</style>