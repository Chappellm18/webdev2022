<template>
  <div class="card">
    <div class="card-body">
      <div class="create-post">
        <!-- form to create a new post needs image, message -->
        <form @submit.prevent="sendPost" method="post">
          <div class="container">
            <div class="row">
              <div class="col">
                <!-- input for image -->
                <div class="field">
                  <label class="label">Image</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Image"
                      v-model="image"
                    />
                  </div>
                </div>

                <!-- input for message -->
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Message"
                      v-model="message"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="label">Title</label>
                  <div class="control">
                    <input
                      type="text"
                      placeholder="title"
                      v-model="postTitle"
                      class="input"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <!-- input for animal type -->
                  <div class="field">
                    <label class="label">Animal Type</label>
                    <div class="control">
                      <div class="select">
                        <select v-model="animalType">
                          <option value="cat">Cat</option>
                          <option value="dog">Dog</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="field">
                    <label class="label">Post Type</label>
                    <div class="control">
                      <div class="select">
                        <select v-model="postType">
                          <option value="have">Have</option>
                          <option value="request">Need</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import session from "../services/session.js";
import { CreatePostHave } from "../services/havePosts.js";
import { CreatePostRequest } from "../services/requestPosts.js";
export default {
  data() {
    return {
      user_id: session.user.userID,
      message: "",
      image: "https://via.placeholder.com/480",
      animalType: "",
      postType: "",
      postTitle: "",
    };
  },
  methods: {
    sendPost() {
      // send post to server
      //CreatePostHave(user_id,message,image,animalTypes)
      if (this.user_id === null) {
        this.user_id = 0;
      }
      let response;
      if (this.postType === "have") {
        response = CreatePostHave(
          this.user_id,
          this.message,
          this.image,
          this.animalType,
          this.postTitle
        );
      } else if (this.postType === "request") {
        response = CreatePostRequest(
          this.user_id,
          this.message,
          this.image,
          this.animalType,
          this.postTitle
        );
      } else {
        console.log("error");
      }

      console.log(response);
      if (response !== null) {
        // success
        // clear form
        this.message = "";
        this.image = "";
        this.animalType = "";
        this.postTitle = "";
        this.$router.push("/share");
      }
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  overflow: hidden;
  margin: auto;
}
.card-footer {
  display: flex;
  justify-content: right;
  align-items: flex-end;
  background: transparent;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>