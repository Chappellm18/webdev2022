<template>
  <!-- sidebar with options -->
  <div class="sidebar">
    <div class="sidebar-header"></div>
    <div class="sidebar-menu">
      <ul>
        <li>
          <a>
            <router-link to="createPost" class="mSelect"
              >Create post</router-link
            >
          </a>
        </li>
        <li>
          <a><router-link to="findPost" class="mSelect">Filter</router-link></a>
        </li>
        <li>
          <a
            ><router-link to="profile" class="mSelect">
              View your posts
            </router-link></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 10rem;
  background: rgba(224, 255, 255, 0.683);
  padding: 1rem;
  border-radius: 15px;
}
.mSelect {
  margin: 3rem;
  color: rgb(0, 0, 0);
}
.mSelect:visited {
  color: rgb(0, 0, 0);
}
li:hover {
  background-color: rgba(135, 230, 236, 0.596);
}
</style>