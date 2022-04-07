<template>
  <section class="section is-medium" id="gallery">
    <div class="level">
      <div class="level-item">
        <div class="image">
          <figure class="image">
            <img src="../assets/holder3.jpg" alt="" />
          </figure>
          <p class="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            officiis sapiente reiciendis odio. Voluptatem mollitia dolorem.
          </p>
        </div>
      </div>

      <div class="level-item">
        <div class="image">
          <figure class="image">
            <img src="../assets/holder1.jpg" alt="" />
          </figure>
          <p class="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            officiis sapiente reiciendis odio. Voluptatem mollitia dolorem.
          </p>
        </div>
      </div>
      <div class="level-item">
        <div class="image">
          <figure class="image">
            <img src="../assets/holder2.jpg" alt="" />
          </figure>
          <p class="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            officiis sapiente reiciendis odio. Voluptatem mollitia dolorem.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#gallery {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.image {
  width: 45rem;
  max-height: 35rem;
}
p {
  color: #381d2a;
}
.content {
  display: none;
  z-index: 1;
  position: relative;
  top: -20rem;
  background: #ba56243e;
  padding: 5rem;
}
.image:hover + .content {
  display: block;
  z-index: 1;
}
</style>