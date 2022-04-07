<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item"
        ><router-link to="/">
          <img src="https://via.placeholder.com/350x150" /> </router-link
      ></a>

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
        <a class="navbar-item nb-h"
          ><router-link to="/"> Home </router-link>
        </a>

        <a class="navbar-item nb-h"
          ><router-link to="/shelterLocator"> Find A Shelter </router-link>
        </a>

        <a class="navbar-item nb-h"
          ><router-link to="/share"> Share </router-link>
        </a>

        <a class="navbar-item nb-h"
          ><router-link to="/mission"> Mission </router-link>
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" v-if="!logged">
            <a class="button" id="sg"
              ><router-link to="/signup">
                <strong>Sign up</strong>
              </router-link>
            </a>
            <a class="button is-light" id="lg"
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
import Session from "../services/session.js";
export default {
  data() {
    return {
      Session,
      logged: false,
      navBarIsActive: false,
    };
  },
  components: { profileNavbar },
  methods: {
    isLogged() {
      if (this.Session.user != null) {
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
.navbar {
  background: #fcde9c;
}
.nb-h {
  color: #381d2a;
}
.nb-h:hover {
  background: #ffa652d2;
}
.nb-h:visited {
  color: #381d2a;
}
#sg {
  background: #ffa552;
  color: #381d2a;
}
#lg {
  background: #c4d6b0;
  color: #381d2a;
}
</style>