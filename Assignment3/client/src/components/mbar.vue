<template>
  <!-- sidebar with options -->
  <div class="sidebar">
    <div class="sidebar-header"></div>
    <div class="sidebar-menu">
      <ul>
        <li>
          <a> <router-link to="createPost">Create post</router-link> </a>
        </li>
        <li>
          <a><router-link to="findPost">Find post</router-link></a>
        </li>
        <li>
          <a><router-link to="profile"> View your posts </router-link></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>