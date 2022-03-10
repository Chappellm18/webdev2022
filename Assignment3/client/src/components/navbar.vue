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
        <div class="navbar-item" v-if="session.user === null">
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
        <div class="navbar-item" v-else>
          <div class="columns" id="profile-badge">
            <div class="column">
              {{ session.user.username }}
            </div>
            <div class="column">
              <figure class="image">
                <a
                  ><router-link to="/profile"
                    ><img
                      class="avatar is-rounded"
                      src="../assets/holder1.jpg"
                      alt="" /></router-link
                ></a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import session from "../services/session.js";
export default {
  data() {
    return {
      session,
    };
  },
};
</script>

<style scoped>
#profile-badge {
  margin-right: 0.5rem;
}
.navbar {
  height: 10rem;
  background: #f2f2f2;
}
.navbar-start {
  padding: 2rem;
}
.avatar {
  scale: 2;
}
.card-header {
  padding: 10px;
}
</style>