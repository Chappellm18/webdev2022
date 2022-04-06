<template>
  <div class="profile">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <figure>
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt=""
            />
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
        <div class="level-item"></div>
      </div>
    </div>
    <div class="posts">
      <div class="requests" v-if="Session.user.role === 'Organization'">
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
import { GetRequestPostsByUserID } from "../services/requestPosts.js";
import { GetHavePostsByUserID } from "../services/havePosts.js";
export default {
  data() {
    return {
      Session,
      user_id: "",
      posts_have: [],
      posts_request: [],
    };
  },
  async mounted() {
    this.user_id = this.Session.user.userID;

    this.posts_haves = await GetHavePostsByUserID(this.user_id);
    // if the posts_haves.active != 1 then remove it from the array
    if (this.posts_haves != null) {
      this.posts_haves.forEach((post) => {
        if (post.active != 1) {
          this.posts_haves.splice(this.posts_haves.indexOf(post), 1);
        }
      });

      // check if user is in an organization
      if (this.Session.user.role === "Organization") {
        // get the orgs ID
        // check the linkedUsers in the orgs to see if the current user_id is in one
        let orgID = await Session.GetOrgID(this.Session.user.userID);
        console.log("org id: " + orgID);
        this.posts_requests = await GetRequestPostsByUserID(orgID);
        console.log(this.posts_requests);
        if (this.posts_requests != null || this.posts_requests.length != 0) {
          this.posts_requests.forEach((post) => {
            if (post.active != 1) {
              this.posts_requests.splice(this.posts_requests.indexOf(post), 1);
            }
          });
        }
      } else {
        this.posts_request = [];
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
  margin-top: 3rem;
}
</style>