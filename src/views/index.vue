<template>
  <div>
    <router-link to="/table">table</router-link>
    <span>{{token}}</span>
    <div>{{$route.path}}</div>
    <input type="text"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        num: 10
      }
    },
    computed: {
      ...mapState(['token'])
    },
    mounted() {
      this.$message({message: 'dsa', type: 'success'})
    },
    components: {}
  }
</script>

<style scoped>

</style>