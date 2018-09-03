<template>
  <div>
    ind大萨达ex
    <router-link to="/table">table</router-link>
    <span>{{token}}</span>
    <div>{{$route.path}}</div>
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
      const a = {
        name: 43
      }
    },
    components: {}
  }
</script>

<style scoped>

</style>