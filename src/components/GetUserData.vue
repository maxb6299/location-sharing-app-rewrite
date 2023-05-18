<template>
    <form>
        Please input the following: <br>
        Name: <input required v-model="user.name" > <br>
        Phone Number: <input required v-model="user.phoneNumber" type="tel" pattern="[0-9]{10}"> <br>
        <input type="submit" value="Submit Data">
    </form>


    <!-- for testing purposes -->
    <!-- <div>
        Name: {{ user.name }} <br>
        Phone Number: {{ user.phoneNumber }} <br>
    </div> -->
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    phoneNumber: '',
                }
            }
        }
    }
</script>