<template>
  <div class="post">
    <div class="level">
      <div class="level-left">
        <div class="post-image">
          <!-- v-if post has image -->
          <figure class="image">
            <img
              class="post-img"
              src="https://bulma.io/images/placeholders/480x480.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <!-- v-else  -->
        <div class="no-image"></div>
      </div>
      <div class="level-right">
        <div class="post-body">
          <div class="user">
            <figure class="image">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
                alt="Placeholder image"
              />
            </figure>
          </div>

          <h1>username</h1>
        </div>
      </div>

      <div class="message">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        distinctio quis tenetur, ut dolores dignissimos odit dolorum asperiores
        labore dolor esse deleniti nisi doloremque necessitatibus quas, iusto
        nulla. Voluptas, iste!
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.post {
  background: lightblue;
  border-radius: 15px;
  overflow: hidden;
  margin: 1rem;
}
.post-img {
  height: 400px;
  width: 400px;
}
.post-body {
  display: flex;
  flex-direction: column;
}
.message {
  width: 50ch;
  line-height: 1.5;
}
.user {
}
</style>