<!-- ShowUserData.vue
Fetches data (data.json) from backend and uses props to pass that data into
the Map and DataTable components -->

<template>
    <Map :userData="userData" />
    <DataTable :userData="userData" />

    <!-- For Testing Purposes -->
    <!-- <div>Data: {{ userData }}</div> -->
</template>

<script>
import Map from "./Map.vue"
import DataTable from "./DataTable.vue"

export default {
    components: {
        Map,
        DataTable
    },
    data() {
        return {
            userData: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/data/data.json')
            .then(res => res.json())
            .then(fileData => this.userData = fileData)
            .catch(error => console.log("Error" + error))
    }
}
</script>