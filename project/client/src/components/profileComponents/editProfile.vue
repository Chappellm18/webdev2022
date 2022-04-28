<template>
  <div>
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
            <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form id="editForm" @submit.prevent="editProfile">
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
                              placeholder="image link"
                              v-model="image"
                              aria-label="Profile Image"
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
                        v-model="username"
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
                        placeholder="email"
                        v-model="email"
                        aria-label="email"
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
                        placeholder="message"
                        v-model="message"
                        aria-label="message"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <button class="btn" data-bs-dismiss="modal">
                      <router-link to="reset">Reset Password</router-link>
                    </button>
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
            <button type="submit" form="editForm" class="btn btn-primary">
              Save changes
            </button>
            <button
              @click="delUser()"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../../services/session.js";
import { DeleteUser } from "../../services/users.js";
import router from "../../router/index.js";
export default {
  data() {
    return {
      Session,
      username: "",
      email: "",
      message: "",
      image: "",
    };
  },
  methods: {
    delUser() {
      // display a popup to confirm delete
      // if confirmed, delete user
      // if not, do nothing
      if (confirm("Are you sure you want to delete your account?")) {
        // delete user from database
        // remove session
        // redirect to sign up page
        DeleteUser(this.Session.user.userID);
        router.push("/signup");
      } else {
        // do nothing
      }
    },
  },
};
</script>

<style scoped>
.modal {
  z-index: 9999;
}
</style>