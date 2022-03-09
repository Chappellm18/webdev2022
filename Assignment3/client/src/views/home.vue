<template>
  <div class="homepage">
    <section id="welcome" class="section is-large">
      <div class="content" id="welcontent">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          itaque dolorem ullam quam dolor cum earum doloribus voluptatem
        </p>
      </div>
    </section>

    <section class="section">
      <image-gallary />
    </section>

    <section id="mission" class="section is-medium">
      <div class="content">
        <div class="level">
          <div class="level-right">
            <div class="level-item" id="missionText">
              <h1>Mission</h1>
              <p>
                Our mission is to help those who have not found their forever
                home
              </p>
            </div>
          </div>
          <div class="level-left">
            <div class="level-item">
              <figure class="image">
                <img src="../assets/holder3.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="vision" class="section is-large">
      <div class="content">
        <h1>Vision</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          itaque dolorem ullam quam dolor cum earum doloribus voluptatem
          perferendis, sit veritatis harum autem, sint deserunt distinctio,
          laboriosam totam molestiae sunt.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import imageGallary from "../components/imageGallary.vue";
export default {
  components: { imageGallary },
};
</script>

<style>
section {
  margin: 4rem;
}
.homepage {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#welcome {
  background-image: url("../assets/welcomeBG.jpg");
  background-size: cover;
  width: 100%;
}
#welcontent {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  width: 50%;
  margin: auto;
}
#welcome h1 {
  color: rgb(0, 0, 0);
  margin-top: 5rem;
}
#welcome p {
  color: rgb(0, 0, 0);
}
#missionText {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}
.content {
  text-align: center;
}
#vision {
}
</style>