<template>
  <div class="card">
    <div class="card-content">
      <div class="create-post">
        <!-- form to create a new post needs image, message -->
        <form @submit.prevent="sendPost" method="post">
          <hr />
          <br />
          <div class="form-group">
            <div class="level">
              <div class="level-item">
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="image"
                  placeholder="Image URL"
                />
              </div>
              <div class="level-item">
                <figure class="image">
                  <img v-bind:src="image" alt="image here" />
                </figure>
              </div>

              <div class="level-item">
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    v-model="message"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>

                <br />
              </div>
            </div>

            <!--div class="file has-name">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Choose a file… </span>
            </span>
            <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div-->
            <hr />
            <div class="level">
              <div class="level-item">
                <div class="animalTypes">
                  <select class="select" v-model="animalTypes">
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div class="level-item">
                <div class="postType">
                  <select class="select" v-model="postType">
                    <option value="have">Have</option>
                    <option value="request">Request</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Preview
          </button>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Post Preview</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
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
      animalTypes: "",
      postType: "",
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
          this.animalTypes
        );
      } else if (this.postType === "request") {
        response = CreatePostRequest(
          this.user_id,
          this.message,
          this.image,
          this.animalTypes
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
        this.animalTypes = "";
        this.$router.push("/share");
      }
    },
  },
};
</script>

<style scoped>
hr {
  border: 1px solid #ccc;
}
.card {
  margin: auto;
  border-radius: 15px;
  background: rgba(242, 238, 253, 0.849);
}
.card-content {
  margin: 2rem;
}
.create-post {
  width: 70%;
  margin: 0 auto;
  margin-top: 5rem;
}
.btn {
  margin: 10px;
}
.level-right {
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.animalTypes {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-color_cus {
  background: purple;
  height: 3rem;
  color: white;
  padding: 1rem;
  margin-right: 0;
}
.postType {
  display: flex;
  justify-content: center;
  align-items: center;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>