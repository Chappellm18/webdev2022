<template>
  <div class="profile">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <figure class="image is-128x128">
            <img v-bind:src="Session.user.userImage" alt="" />
          </figure>
        </div>
        <div class="level-item">
          <div>
            <p class="heading">{{ Session.user.username }}</p>
            <p class="subtitle">{{ Session.user.email }}</p>
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <!-- edit profile modal -->
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Edit Profile
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit Profile
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <div class="container">
                            <div class="row">
                              <div class="col">
                                <figure class="image is-rounded is-128x128">
                                  <img
                                    v-bind:src="this.Session.user.userImage"
                                    alt=""
                                  />
                                </figure>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <div class="input-group mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
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
    <div class="posts">
      <div class="requests" v-if="orgPosts === true">
        <label>Requests</label>
        <div v-for="post in posts_request" :key="post.id">
          <postNeed :post="post" />
        </div>
      </div>
      <div v-else>Not an Organization</div>

      <label>Have</label>
      <div v-for="post in posts_have" :key="post.id">
        <postHave :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import postHave from "../components/havePost.vue";
import postNeed from "../components/requestPost.vue";
import Session from "../services/session.js";
import { GetRequestPostsByOrgID } from "../services/requestPosts.js";
import { GetHavePostsByUserID } from "../services/havePosts.js";
export default {
  data() {
    return {
      Session,
      user_id: "",
      posts_have: [],
      orgPosts: false,
      posts_request: [],
    };
  },
  async mounted() {
    this.user_id = this.Session.user.userID;

    this.posts_have = await GetHavePostsByUserID(this.user_id);
    // if the posts_haves.active != 1 then remove it from the array
    if (this.posts_have != null) {
      this.posts_have.forEach((post) => {
        if (post.active != 1) {
          this.posts_have.splice(this.posts_have.indexOf(post), 1);
        }
      });
    }

    // check if user is in an organization
    if (this.Session.user.role === "Organization") {
      // get the orgs ID
      // check the linkedUsers in the orgs to see if the current user_id is in one
      let orgID = await this.Session.GetOrg();

      // loop through each org and check if the user is in the org
      for (let i = 0; i < orgID.length; i++) {
        if (orgID[i] !== null) {
          let linked = orgID[i].linkedUsers;
          let id = orgID[i].orgID;

          if (linked !== null) {
            linked = linked.split(",");

            for (let j = 0; j < linked.length; j++) {
              if (linked[j] == this.Session.user.userID) {
                // if the user is in the org then get the requests
                let posts = await GetRequestPostsByOrgID(id);

                // add the array posts to this.posts_request
                posts.forEach((post) => {
                  this.posts_request.push(post);
                });
              }
            }
          }
        }
      }
      console.log(this.posts_request);

      if (this.posts_request != null) {
        this.orgPosts = true;
        this.posts_request.forEach((post) => {
          if (post.active != 1) {
            this.posts_request.splice(this.posts_request.indexOf(post), 1);
          }
        });
      } else {
        this.orgPosts = false;
      }
    }
  },
  components: {
    postHave,
    postNeed,
  },
};
</script>

<style scoped>
.profile {
  width: 70%;

  margin: 0 auto;
}
.modal {
  z-index: 9999;
}
</style>