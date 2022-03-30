<template>
  <div class="create-post">
    <!-- form to create a new post needs image, message -->
    <form>
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
      <div class="form-group">
        <label for="image">Image</label>
        <input
          type="text"
          class="form-control"
          id="image"
          v-model="image"
          placeholder="Image URL"
        />
        <br />
        <div class="file has-name">
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
        </div>
        <hr />
      </div>

      <button type="button" class="btn btn-primary">Preview</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { CreatePostHave } from "../services/havePosts.js";
export default {
  data() {
    return {
      message: "",
      image: "",
    };
  },
  methods: {
    sendPost() {
      // send post to server
      CreatePostHave(this.message, this.image);
      // clear form
      this.message = "";
      this.image = "";
    },
  },
};
</script>

<style scoped>
hr {
  border: 1px solid #ccc;
}
.create-post {
  width: 70%;
  margin: 0 auto;
  margin-top: 5rem;
}
.btn {
  margin: 10px;
}
</style>