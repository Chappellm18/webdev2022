<template>
  <div class="card">
    <div class="card-header">
      <h1>{{ user_data.orgName }}</h1>
      <img class="" v-bind:src="user_data.logo" alt="Placeholder image" />
    </div>
    <img v-bind:src="post.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        {{ post.message }}
      </p>
    </div>
    <div class="card-footer">
      <div class="types">
        <div class="cat" v-if="post.animalTypes === 'cat'">
          <figure class="image is-64x64">
            <img
              class="is-64x64"
              src="../assets/cat.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="dog" v-else-if="post.animalTypes === 'dog'">
          <figure class="image is-128x128">
            <img
              class="is-64x64"
              src="../assets/dog.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="other" v-else>
          <figure class="image is-64x64">
            <img
              class="is-64x64"
              src="../assets/other.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
      <div class="options">
        <div class="likes">{{ this.likes }}</div>
        <div class="btn btn-primary" @click="like()">Like</div>
        <button class="btn btn-primary">Reply</button>
      </div>
    </div>
  </div>
</template>

<script>
import { GetOrgById } from "../services/users.js";
import { AddLike } from "../services/requestPosts.js";
export default {
  data() {
    return {
      user_data: {},
      likes: 0,
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    org: {
      type: Number,
      required: false,
    },
  },
  async mounted() {
    this.likes = this.post.likes;
    this.user_data = await GetOrgById(this.post.orgID);
  },
  methods: {
    like() {
      this.likes++;
      AddLike(this.post.postID);
    },
  },
};
</script>

<style scoped>
.card {
  overflow: hidden;
  width: 60%;
  margin-top: 2rem;
}
.card-header {
  height: 4rem;
}
.card-footer {
  height: 4rem;
}
</style>