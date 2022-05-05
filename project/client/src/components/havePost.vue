<template>
  <div class="card">
    <div class="card-header">
      <h1>{{ user_data.username }}</h1>

      <img class="" v-bind:src="user_data.userImage" alt="Placeholder image" />
    </div>
    <img v-bind:src="post.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        {{ post.message }}
      </p>
    </div>
    <div class="card-footer">
      <div class="container">
        <div class="row">
          <div class="col">
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
          </div>

          <div class="col">
            <div class="btn btn-primary" @click="like()">{{ this.likes }}</div>
          </div>
          <div class="col"><div class="btn btn-primary">Reply</div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetUserById } from "../services/users.js";
import { AddLike } from "../services/havePosts.js";
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
  },
  async mounted() {
    // get the user data based on posts userID
    this.likes = this.post.likes;
    this.user_data = await GetUserById(this.post.postID);
    // separate the user data into the user_data object
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
  width: 60%;
  overflow: hidden;
  margin-top: 3rem;
}
.card-header {
  height: 4rem;
  display: flex;
  justify-content: right;
  align-items: flex-end;
}

.card-header img {
  height: 90%;
}
.card-footer {
  height: 4rem;
}
</style>
