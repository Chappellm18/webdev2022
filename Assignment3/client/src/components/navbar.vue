<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

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

      <div class="navbar-end">
        <div class="navbar-item">
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
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>