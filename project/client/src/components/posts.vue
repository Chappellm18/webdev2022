<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="nav">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" @click="togTab('H')">Haves</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="togTab('R')">Needs</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 offset-md-3">
          <div class="haves" v-if="havesAct === true">
            <div v-for="post in posts_haves" :key="post.id">
              <postHave :post="post" />
            </div>
          </div>
          <div class="needs" v-else>
            <div v-for="post in posts_requests" :key="post.id">
              <postNeed :post="post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postHave from "../components/havePost.vue";
import postNeed from "../components/requestPost.vue";
import { GetAllPostHaves } from "../services/havePosts.js";
import { GetAllPostRequests } from "../services/requestPosts.js";

export default {
  data() {
    return {
      havesAct: true,
      posts_haves: [],
      posts_requests: [],
    };
  },
  components: {
    postHave,
    postNeed,
  },
  methods: {
    togTab(tab) {
      if (tab === "H") {
        this.havesAct = true;
      } else {
        this.havesAct = false;
      }
    },
  },
  async mounted() {
    this.posts_haves = await GetAllPostHaves();
    // if the posts_haves.active != 1 then remove it from the array
    this.posts_haves.forEach((post) => {
      if (post.active != 1) {
        this.posts_haves.splice(this.posts_haves.indexOf(post), 1);
      }
    });
    this.posts_requests = await GetAllPostRequests();
    this.posts_requests.forEach((post) => {
      if (post.active != 1) {
        this.posts_requests.splice(this.posts_requests.indexOf(post), 1);
      }
    });
    console.log(this.posts_requests);
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.postContent {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>