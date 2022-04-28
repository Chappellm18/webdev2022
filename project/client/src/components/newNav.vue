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
          ><router-link to="/" class="nb-h"> Home </router-link>
        </a>

        <a class="navbar-item nb-h"
          ><router-link to="/shelterLocator" class="nb-h">
            Find A Shelter
          </router-link>
        </a>

        <a class="navbar-item nb-h"
          ><router-link to="/share" class="nb-h"> Share </router-link>
        </a>

        <a class="navbar-item nb-h"
          ><router-link to="/mission" class="nb-h"> Mission </router-link>
        </a>
      </div>

      <div class="navbar-end">
        <div v-if="!logged">
          <div class="navbar-item">
            <a class="button" id="sg"
              ><router-link to="/signup">
                <strong>Sign up</strong>
              </router-link>
            </a>

            <a class="button" id="lg"
              ><router-link to="/login"> Log in </router-link>
            </a>
          </div>
        </div>
        <div v-else>
          <div class="navbar-item">
            <div class="profileBadge">
              <profileNavbar />
            </div>
            <div class="button" id="logout" @click="logout()">Log Out</div>
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
    logout() {
      // log the user out
      this.Session.logout();
      this.logged = false;
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
#logout {
  margin-left: 4rem;
}
.navbar {
  background: #809daa;
}
.nb-h {
  color: #1e1e26;
  text-decoration: none;
}
.nb-h:hover {
  background: #908d8d;
}
.nb-h:visited {
  color: #1e1e26;
}
#sg {
  background: #f9f9f8;
  color: #1e1e26;
  border: none;
}
#lg {
  background: #1e1e26;
  color: #f9f9f8;
  border: none;
  margin-left: 1rem;
}
.navbar-end {
  margin-right: 3rem;
}
</style>