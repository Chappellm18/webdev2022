<template>
  <section class="section is-medium">
    <div class="title">Find your nearest shelter</div>
    <hr />
    <GMapMap class="map" :center="center" :zoom="7" map-type-id="terrain">
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        }, // Along list of clusters
      ],
    };
  },
};
</script>

<style scoped>
.map {
  height: 35rem;
  width: 100%;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>