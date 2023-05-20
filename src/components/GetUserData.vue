<template>
    <form @submit.prevent="sendData">
        Please input the following: <br>
        Name: <input required v-model="user.name" > <br>
        Phone Number: <input required v-model="user.phoneNumber" type="tel" pattern="[0-9]{10}"> <br>

        <input type="submit" value="Submit Data" v-if="showSubmitButton">
    </form>

    <button @click="getLocation" v-if="showGetLocationButton">Share your location</button>
    <div v-if="showLocationFailureMessage" >Error. Please share your location</div>


    <!-- for testing purposes -->
    <div>
        Name: {{ user.name }} <br>
        Phone Number: {{ user.phoneNumber }} <br>
        Latitude: {{ user.latitude }} <br>
        Longitude: {{ user.longitude }} <br>
        Address: {{ user.address }} <br>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    phoneNumber: '',
                    latitude: '',
                    longitude: '',
                    address: ''
                },

                showLocationFailureMessage: false,
                showGetLocationButton: true,
                showSubmitButton: false,
            }
        },

        methods: {
            getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        this.user.latitude = position.coords.latitude;
                        this.user.longitude = position.coords.longitude; 

                        this.showLocationFailureMessage = false;
                        this.showGetLocationButton = false; false
                        this.showSubmitButton = true;

                        this.setAddress(); 
                    }, failure => { // user denied location
                        this.showLocationFailureMessage = true;
                    });
                } else {
                    console.log("Error. This browser does not support geolocation")
                    this.showLocationFailureMessage = true;
                }
            },

            // using Google Maps API, it converts current latitude and longitude to an address and sets user.address to that value
            setAddress () {
                const lat = this.user.latitude;
                const lon = this.user.longitude;
                const API_KEY = 'AIzaSyBD0dirUoiHMG-LiLDqJ4-ZloDzV1DueKg';

                const addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&location_type=ROOFTOP&result_type=street_address&key=${API_KEY}`;

                fetch(addressUrl)
                    .then(req => req.json()) // converts data in url to .json
                    .then(addressData => {
                        if (addressData.status == 'OK') {
                            this.user.address = addressData.results[0].formatted_address;
                        } else if (addressData.status == 'ZERO_RESULTS') { // if coordinates don't lead to an address
                            this.user.address = `Address not found from (${lat}, ${lon})`; // shows coordinates of location with message
                        } else {
                            this.user.address = `API Error. Coordinates: (${lat}, ${lon})`; // shows cooridnates of location with error
                        }
                    })
                    .catch(error => console.log("Error" + error))
            },

            sendData() {
                const URL = 'http://localhost:3000/data/data.json';
                const BODY = JSON.stringify(this.user); // converts object to json

                fetch(URL, {
                    method: 'POST',
                    body: BODY,
                    headers: {'Content-Type': 'application/json'}
                })
                .then(() => {
                    console.log("User data sent")
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>