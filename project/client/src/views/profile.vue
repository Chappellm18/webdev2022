<template>
  <div class="profile">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <figure>
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt=""
            />
          </figure>
        </div>
        <div class="level-item">
          <div>
            <p class="heading">{{ user.name }}</p>
            <p class="subtitle">{{ user.email }}</p>
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item"></div>
      </div>
    </div>
    <div class="posts">
      <posts />
    </div>
  </div>
</template>

<script>
import posts from "../components/posts.vue";
export default {
  data() {
    return {
      user: {
        name: "bro",
        email: "bro@bro.bro",
      },
    };
  },
  components: {
    posts,
  },
};
</script>

<style scoped>
.profile {
  width: 70%;
  margin: 0 auto;
  margin-top: 3rem;
}
</style>