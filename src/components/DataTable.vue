<!-- DataTable.vue
Displays a table of all user data stored in server. Data is received from
GetUserData.vue via a prop containing the array of all user data. -->

<template>
    <table>
        <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
        </tr>
        <tr v-for='(user, index) in userData' :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.phoneNumber }}</td>
            <td>{{ user.address }}</td>
        </tr>
    </table>

</template>

<script>
export default {
    props: ['userData']
}
</script>