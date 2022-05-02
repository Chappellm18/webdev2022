<template>
  <div class="homepage">
    <section id="welcome" class="section is-large">
      <div class="content" id="welcontent">
        <h1>Welcome</h1>
        <p>
          Welcome to Shelter Helper! Your one stop shop for all things Animal
          Shelter
        </p>
      </div>
    </section>

    <section id="mission" class="section is-medium">
      <div class="content">
        <div class="contianer">
          <div class="row">
            <div class="level-col" id="missionText">
              <h1>Mission</h1>
              <p>
                Our mission is to help those who have not found their forever
                home
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <image-gallary />
    </section>

    <section id="vision" class="section is-large">
      <div class="content">
        <h1>Vision</h1>
        <p>
          Our vision is to make sure every shelter has their needs met and that
          all animals are happy and safe.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import imageGallary from "../components/imageGallary.vue";

export default {
  components: {
    imageGallary,
  },
};
</script>

<style scoped>
section {
  margin: 4rem;
}

.homepage {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #381d2a;
}
#welcome {
  background-image: url("../assets/welcomeBG.png");
  background-size: cover;
  width: 100%;
}
#welcontent {
  background: #ffffffea;
  border-radius: 25px;
  width: max-content;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
}
#welcome h1 {
  color: #381d2a;
  margin-top: 5rem;
}
#welcome p {
  color: #381d2a;
}
#missionText {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}
#mission {
  width: 100%;
  color: #9fb5b1;
  background: #1e1e26;
}
#mission h1 {
  color: #9fb5b1;
}
.content {
  text-align: center;
}
#vision {
  width: 100%;
  color: #381d2a;
}
</style>