<template>
  <section class="section is-medium" id="gallery">
    <div class="level">
      <div class="level-item">
        <div class="image">
          <figure class="image">
            <img src="../assets/holder3.jpg" alt="" />
          </figure>
        </div>
      </div>

      <div class="level-item">
        <div class="image">
          <figure class="image">
            <img src="../assets/holder1.jpg" alt="" />
          </figure>
        </div>
      </div>
      <div class="level-item">
        <div class="image">
          <figure class="image">
            <img src="../assets/holder2.jpg" alt="" />
          </figure>
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
  justify-content: center;
  align-items: center;
}
.image {
  width: 45rem;
}
p {
  color: #381d2a;
}
</style>