<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <ul class="nav flex-column">
          <li class="nav-item">
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Create New Post
            </button>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="profile"> View Your Posts</router-link></a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Post</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <createPost />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- sidebar with options -->
</template>

<script>
import createPost from "../components/createPost.vue";
export default {
  components: {
    createPost,
  },
};
</script>

<style scoped>
.nav-link {
  color: black;
  text-decoration: none;
}
a {
  color: black;
  text-decoration: none;
}
a:visited {
  color: black;
  text-decoration: none;
}
.nav-item:hover {
  background: lightblue;
}
.nav .flex-column {
  position: fixed;
}
</style>