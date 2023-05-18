<template>
    <form>
        Please input the following: <br>
        Name: <input required v-model="user.name" > <br>
        Phone Number: <input required v-model="user.phoneNumber" type="tel" pattern="[0-9]{10}"> <br>

        <button @click="getLocation" v-if="showGetLocationButton">Share your location</button>
        <div v-if="showLocationFailureMessage" >Error. Please share your location</div>

        <input type="submit" value="Submit Data" v-if="showSubmitButton">
    </form>


    <!-- for testing purposes -->
    <!-- <div>
        Name: {{ user.name }} <br>
        Phone Number: {{ user.phoneNumber }} <br>
        Latitude: {{ user.latitude }} <br>
        Longitude: {{ user.longitude }} <br>
    </div> -->
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    phoneNumber: '',
                    latitude: '',
                    longitude: ''
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
                    }, failure => { // user denied location
                        this.showLocationFailureMessage = true;
                    });
                } else {
                    console.log("Error. This browser does not support geolocation")
                    this.showLocationFailureMessage = true;
                }
            }
        }
    }
</script>