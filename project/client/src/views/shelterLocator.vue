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

    <GMapMap
      class="map"
      v-bind:center="center"
      :zoom="15"
      map-type-id="roadmap"
    >
      <GMapCluster>
        <GMapMarker
          :key="marker.id"
          v-for="marker in markers"
          :position="marker.position"
          :clickable="true"
          :draggable="true"
          :icon="{
            url: require('../assets/paw.png'),
            scaledSize: {
              width: 75,
              height: 75,
            },
          }"
          @click="openMarker(marker.id)"
        >
          <GMapInfoWindow
            :closeclick="true"
            @closeclick="openMarker(null)"
            :opened="openedMarkerID === marker.id"
          >
            <div>{{ marker.orgName }}</div>
          </GMapInfoWindow>
        </GMapMarker>
      </GMapCluster>
    </GMapMap>
  </section>
</template>

<script>
import { GetAllLocations } from "../services/locations.js";
export default {
  name: "App",
  data() {
    return {
      openedMarkerID: null,
      center: { lat: -47, lng: -47 },
      markers: [
        {
          id: 0,
          orgName: "Center",
          position: {
            lat: 47,
            lng: 47,
          },
        }, // Along list of clusters
      ],
      input: "",
    };
  },
  mounted() {
    this.loadInit();
  },
  methods: {
    openMarker(id) {
      this.openedMarkerID = id;
    },
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
          //console.log(data);
          lat = data.data[0].latitude;
          long = data.data[0].longitude;
          // set the center of the map to the lat and long
          this.center = { lat: lat, lng: long };
          // add the marker to the map
          this.markers.push({
            position: { lat: lat, lng: long },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadInit() {
      // take the input and convert it to its lat and long
      let lat;
      let long;
      let q = "New Paltz";
      // TODO: get the user's location

      // fetch the geocoding api and get the lat and long
      fetch(
        `http://api.positionstack.com/v1/forward?access_key=${process.env.VUE_APP_ZIP_CODE_KEY}&query=${q}&output=json`
      )
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          lat = data.data[0].latitude;
          long = data.data[0].longitude;
          // set the center of the map to the lat and long
          this.center = { lat: lat, lng: long };
          // add the marker to the map
          this.markers.push({
            position: { lat: lat, lng: long },
          });
        })
        .catch((err) => {
          console.log(err);
        });

      this.getShelters();
    },
    setMarker(id, orgName, address) {
      let lat;
      let long;
      fetch(
        `http://api.positionstack.com/v1/forward?access_key=${process.env.VUE_APP_ZIP_CODE_KEY}&query=${address}&output=json`
      )
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          lat = data.data[0].latitude;
          long = data.data[0].longitude;
          // set the center of the map to the lat and long

          // add the marker to the map
          this.markers.push({
            id: id,
            orgName: orgName,
            position: { lat: lat, lng: long },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getShelters() {
      // this method will get the locations from all the shelters within the radius and display them as markers on the map
      // locations are stored in the orgs table under location
      // with the location (street address) get the lat and long and add to an array of markers

      /////// change this function to get the whole org

      let orgs = GetAllLocations();
      orgs.then((data) => {
        //console.log(data);
        data.forEach((org) => {
          //console.log(org);
          this.setMarker(org.orgID, org.orgName, org.location);
        });
      });
    },
  },
};
</script>

<style scoped>
.map {
  height: 45rem;
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