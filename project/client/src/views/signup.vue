<template>
  <div class="card">
    <div class="card-content">
      <form class="signup" @submit.prevent="submit()">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="First Last"
              v-model="name"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              v-model="username"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="Email input"
              v-model="email"
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

        <div class="field">
          <label class="label">Role</label>
          <div class="control">
            <div class="select">
              <select v-model="role">
                <option>Donator</option>
                <option>Organization</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea
              class="textarea"
              v-model="message"
              placeholder=""
            ></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" required />
              I agree to the <a href="#">terms and conditions</a>
            </label>
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
import { AddUser } from "../services/users.js";
import router from "../router/index.js";
export default {
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      message: "",
      role: "",
    };
  },
  methods: {
    submit() {
      // call the addUser function from the users service
      AddUser(
        this.name,
        this.username,

        this.password,
        this.email,
        this.role,
        this.message
      );
      // clear the form
      this.name = "";
      this.username = "";
      this.email = "";
      this.password = "";
      this.message = "";
      this.role = "";
      router.push("/login");
    },
  },
};
</script>

<style scoped>
.card {
  width: 60%;
  margin: 0 auto;
  top: 5rem;
  margin-bottom: 10rem;
}
.signup {
  margin: 0 auto;
  width: 80%;
}
</style>