<template>
  <div class="post">
    <div class="level">
      <div class="level-left">
        <div class="post-body">
          <div class="user">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <figure class="image is-64x64">
                    <img
                      class="is-rounded is-64x64"
                      v-bind:src="post.image"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <h1>username</h1>
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
      <div class="level-right">
        <div class="post-image">
          <!-- v-if post has image -->
          <figure class="image">
            <img
              class="post-img"
              src="https://bulma.io/images/placeholders/480x480.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <!-- v-else  -->
        <div class="no-image"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
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
  float: left;
  position: relative;
  top: 0;
  margin: 0.5rem;
}
</style>