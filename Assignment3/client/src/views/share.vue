<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-fifth">
        <mbar />
      </div>
      <div class="column is-two-thirds">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link" @click="havesAct = !havesAct">Haves</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="havesAct = !havesAct">Needs</a>
          </li>
        </ul>
        <div class="haves" v-if="havesAct">
          <postHave />
        </div>
        <div class="needs" else>
          <postNeed />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postHave from "../components/havePost.vue";
import postNeed from "../components/requestPost.vue";
import mbar from "../components/mbar.vue";

export default {
  components: {
    postHave,
    postNeed,
    mbar,
  },
  data() {
    return {
      havesAct: true,
    };
  },
};
</script>

<style scoped>
.container {
  margin: 5rem;
}
</style>