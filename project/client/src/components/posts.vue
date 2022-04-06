<template>
  <div class="post">
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
      <div v-for="post in posts_haves" :key="post.id">
        <postHave :post="post" />
      </div>
    </div>
    <div class="needs" v-else>
      <postNeed />
    </div>
  </div>
</template>

<script>
import postHave from "../components/havePost.vue";
import postNeed from "../components/requestPost.vue";
import { GetAllPostHaves } from "../services/havePosts";

export default {
  components: {
    postHave,
    postNeed,
  },
  data() {
    return {
      havesAct: true,
      posts_haves: [],
      //posts_requests: [],
    };
  },
  async mounted() {
    this.posts_haves = await GetAllPostHaves();
    // if the posts_haves.active != 1 then remove it from the array
    this.posts_haves.forEach((post) => {
      if (post.active != 1) {
        this.posts_haves.splice(this.posts_haves.indexOf(post), 1);
      }
    });
    //this.posts_requests = await GetAllPostRequests();
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>