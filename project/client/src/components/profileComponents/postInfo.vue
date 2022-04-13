<template>
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
</template>

<script>
import postHave from "../havePost.vue";
import postNeed from "../requestPost.vue";
import Session from "../../services/session.js";
import { GetRequestPostsByOrgID } from "../../services/requestPosts.js";
import { GetHavePostsByUserID } from "../../services/havePosts.js";
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
      //console.log(this.posts_request);

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


<style>
</style>