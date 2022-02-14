<template>
  <div class="container">
    <div class="top-image">
      <figure class="image is-480x480">
        <img src="https://bulma.io/images/placeholders/480x480.png" />
      </figure>
    </div>

    <div class="text">
      <h1>Mission</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aliquam
        sit exercitationem magnam debitis enim doloremque. Perferendis hic
        dignissimos doloremque fugiat expedita consequatur placeat, rerum ad
        modi exercitationem incidunt quas.
      </p>
    </div>

    <div class="more-info">
      <div class="level gap-1">
        <div class="level-right">
          <div class="level-item has-text-centered">
            <figure class="image is-256x256">
              <img src="https://bulma.io/images/placeholders/256x256.png" />
            </figure>
          </div>
        </div>
        <div class="level-left">
          <div class="level-item">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              asperiores ducimus repellat voluptates porro corrupti nulla
              aperiam odio, a, magni, unde distinctio. Ducimus necessitatibus
              veniam cupiditate nemo, harum explicabo magni.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="share-preview"><sharePreview /></div>

    <div class="gallary"><imageGallary /></div>
  </div>
</template>

<script>
import sharePreview from "../components/sharePreview.vue";
import imageGallary from "../components/imageGallary.vue";
export default {
  components: {
    sharePreview,
    imageGallary,
  },
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  top: 5rem;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
}
.level {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5rem;
}
.level-left {
  flex: 2;
}
.level-right {
  flex: 1;
}
.level-left .level-item p {
  max-width: 50ch;
}
</style>