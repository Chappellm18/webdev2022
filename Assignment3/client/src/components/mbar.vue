<template>
  <div>
    <aside class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <router-link to="profile"><a>Profile</a></router-link>
        </li>
        <li>
          <router-link to="share"><a>Feed</a></router-link>
        </li>
        <li>
          <router-link to="profile"><a>Settings</a></router-link>
        </li>
      </ul>
      <p class="menu-label">Requests</p>
      <ul class="menu-list">
        <li>
          <a>Create post</a>
        </li>

        <li><a>Edit post</a></li>
      </ul>
      <p class="menu-label">Haves</p>
      <ul class="menu-list">
        <li><a>Create post</a></li>
        <li><a>Edit post</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>