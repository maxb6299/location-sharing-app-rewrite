<template>
  <GetUserData />
  <ShowUserData />
</template>

<script>
import GetUserData from './components/GetUserData.vue'
import ShowUserData from './components/ShowUserData.vue'

export default {
  name: 'App',
  components: {
    GetUserData,
    ShowUserData
  }
}
</script>