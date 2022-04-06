<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
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

      <div class="navbar-brand">
        <img
          class="image"
          src="https://via.placeholder.com/350x150"
          alt="logo"
        />

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-end">
        <navbarEnd />
      </div>
    </div>
  </nav>
</template>

<script>
import navbarEnd from "./navbarEnd.vue";
export default {
  components: { navbarEnd },
};
</script>

<style scoped>
#profile-badge {
  margin-right: 0.5rem;
}
.navbar {
  height: 10rem;
  background: #fcde9c;
}
.navbar-start {
  padding: 2rem;
}
.avatar {
  scale: 2;
}
</style>