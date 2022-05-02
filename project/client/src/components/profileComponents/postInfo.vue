<template>
  <div class="posts">
    <div class="container">
      <div class="row">
        <div class="col">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                class="nav-link btn active"
                aria-current="page"
                @click="toggleTab('H')"
                >Haves</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link btn" @click="toggleTab('R')">Requests</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col offset-md-3">
          <div id="requests" style="display: none">
            <div v-for="post in posts_request" :key="post.id">
              <postNeed :post="post" :org="this.id" />
            </div>
          </div>

          <div id="haves">
            <div v-for="post in posts_have" :key="post.id">
              <postHave :post="post" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tabSection"></div>
  </div>
</template>

<script>
import postHave from "../havePost.vue";
import postNeed from "../requestPost.vue";
import Session from "../../services/session.js";
import { GetAllOrgs } from "../../services/users.js";
import { GetRequestPostsByOrgID } from "../../services/requestPosts.js";
import { GetHavePostsByUserID } from "../../services/havePosts.js";
export default {
  data() {
    return {
      Session,
      user_id: "",
      id: "",
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
      this.orgPosts = true;
      // get the orgs ID
      // check the linkedUsers in the orgs to see if the current user_id is in one
      let org = await GetAllOrgs();
      console.log(org);
      // loop through each org and check if the user is in the org
      for (let i = 0; i < org.length; i++) {
        if (org[i] !== null) {
          let linked = org[i].linkedUsers;
          this.id = org[i].orgID;

          if (linked !== null) {
            linked = linked.split(",");

            for (let j = 0; j < linked.length; j++) {
              if (linked[j] == this.Session.user.userID) {
                // if the user is in the org then get the requests
                let posts = await GetRequestPostsByOrgID(this.id);

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
  methods: {
    toggleTab(tag) {
      if (tag === "H") {
        // set haves to block
        document.getElementById("haves").style.display = "block";
        document.getElementById("requests").style.display = "none";
      } else {
        // set requests to block
        document.getElementById("requests").style.display = "block";
        document.getElementById("haves").style.display = "none";
      }
    },
  },
  components: {
    postHave,
    postNeed,
  },
};
</script>


<style scoped>
.tabSection {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>