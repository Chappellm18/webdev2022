<template>
  <div class="post">
    <div class="level">
      <div class="level-left">
        <div class="post-image">
          <!-- v-if post has image -->
          <figure class="image">
            <img
              class="post-img"
              v-bind:src="post.image"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <!-- v-else  -->
        <div class="no-image"></div>
      </div>
      <div class="level-right">
        <div class="post-body">
          <div class="user">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
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
                <div class="level-item">
                  <h1>{{ user_data.username }}</h1>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <figure class="image is-64x64">
                    <img
                      class="is-rounded is-64x64"
                      v-bind:src="user_data.userImage"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="message">
            <p>
              {{ post.message }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetUserById } from "../services/users.js";
export default {
  data() {
    return {
      user_data: {},
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
    this.user_data = await GetUserById(this.post.userID);
    // separate the user data into the user_data object
  },
};
</script>

<style scoped>
.post {
  background: lightblue;
  border-radius: 15px;
  overflow: hidden;
  margin: 1rem;
}
.post-img {
  height: 400px;
  width: 400px;
}
.post-body {
  display: block;
  width: 100%;
  height: 400px;
}
.message {
  width: 400px;
  line-height: 1.5;
  position: relative;
  top: 40%;
  background: none;
}
.user {
  float: right;
  position: relative;
  top: 0;
  margin: 0.5rem;
}
</style>