<template>
  <section class="section is-medium">
    <div class="title">Find your nearest shelter in need!</div>
    <hr />
    <div class="search">
      <form>
        <div class="field has-addons">
          <div class="control">
            <input
              class="input"
              v-model="input"
              type="text"
              placeholder="State/City/Town"
            />
          </div>
          <div class="control">
            <a class="button is-info" @click="search()"> Search </a>
          </div>
        </div>
      </form>
    </div>

    <GMapMap class="map" :center="center" :zoom="14" map-type-id="roadmap">
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
      input: "",
    };
  },
  methods: {
    search() {
      // take the input and convert it to its lat and long
      let lat;
      let long;
      // fetch the geocoding api and get the lat and long
      fetch(
        `http://api.positionstack.com/v1/forward?access_key=${process.env.VUE_APP_ZIP_CODE_KEY}&query=${this.input}&output=json`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          lat = data.data[0].latitude;
          long = data.data[0].longitude;
          // set the center of the map to the lat and long
          this.center = { lat: lat, lng: long };
          // add the marker to the map
          this.markers.push({
            position: { lat: lat, lng: long },
          });
        });
    },
    getShelters() {
      // this method will get the locations from all the shelters within the radius and display them as markers on the map
    },
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
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}
</style>