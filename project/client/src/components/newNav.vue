<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://via.placeholder.com/350x150" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': navBarIsActive }"
        @click="navBarIsActive = !navBarIsActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': navBarIsActive }"
    >
      <div class="navbar-start">
        <a class="navbar-item"><router-link to="/"> Home </router-link> </a>

        <a class="navbar-item"
          ><router-link to="/shelterLocator"> Find A Shelter </router-link>
        </a>

        <a class="navbar-item"
          ><router-link to="/share"> Share </router-link>
        </a>

        <a class="navbar-item"
          ><router-link to="/mission"> Mission </router-link>
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" v-if="!logged">
            <a class="button is-primary"
              ><router-link to="/signup">
                <strong>Sign up</strong>
              </router-link>
            </a>
            <a class="button is-light"
              ><router-link to="/login"> Log in </router-link>
            </a>
          </div>
          <div class="profileBadge" v-else>
            <profileNavbar />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import profileNavbar from "../components/profileNavbar.vue";
import session from "../services/session.js";
export default {
  data() {
    return {
      session,
      logged: false,
      navBarIsActive: false,
    };
  },
  components: { profileNavbar },
  methods: {
    isLogged() {
      if (this.session.user.email != null) {
        this.logged = true;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.isLogged();
    }, 500);
  },
};
</script>

<style scoped>
</style>