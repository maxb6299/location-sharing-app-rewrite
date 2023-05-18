<!-- Map.vue
Displays map (using Google Maps API) and places markers with every person's 
name, phone number, and address. Data is received from GetUserData.vue via a 
prop containing the array of all user data. -->

<template>
    <GMapMap :center="{ lat: 40.730610, lng: -73.935242 }" :zoom="2" :options="{ // disables ui
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        }" style="width: 800px; height: 600px">

        <GMapMarker v-for='(user, index) in userData' :key="index"
            :position="{ lat: user.latitude, lng: user.longitude }" @click="openMarker(index)">
            <GMapInfoWindow v-if="index == currentMarker">
                <div>{{ user.name }}, {{ user.phoneNumber }}, {{ user.address }}</div>
            </GMapInfoWindow>
        </GMapMarker>
    </GMapMap>
</template>

<script >
export default {
    props: ['userData'],

    data() {
        return {
            currentMarker: -1, // current marker that is displaying text data
        }
    },

    methods: {
        openMarker(index) { // sets current marker to 'index'
            if (this.currentMarker == index) {
                this.currentMarker = -1; // closes marker if open marker is clicked
            } else {
                this.currentMarker = index;
            }
        }
    }

}
</script>