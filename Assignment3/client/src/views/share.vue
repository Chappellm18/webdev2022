<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-fifth">
        <mbar />
      </div>
      <div class="column" id="postCol">
        <div id="nav">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" @click="havesAct = !havesAct">Haves</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="havesAct = !havesAct">Needs</a>
            </li>
          </ul>
        </div>

        <div class="haves" v-if="havesAct === true">
          <div v-for="post in posts" :key="post.id">
            <postHave />
          </div>
        </div>
        <div class="needs" v-else>
          <postNeed />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postHave from "../components/havePost.vue";
import postNeed from "../components/requestPost.vue";
import mbar from "../components/mbar.vue";

export default {
  components: {
    postHave,
    postNeed,
    mbar,
  },
  data() {
    return {
      havesAct: true,
      posts: [
        { id: 1, title: "Post 1", content: "Content 1" },
        { id: 2, title: "Post 2", content: "Content 2" },
        { id: 3, title: "Post 3", content: "Content 3" },
      ],
    };
  },
};
</script>

<style scoped>
#postCol {
  margin: 0 auto;
}
.container {
  margin: 5rem;
}
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>