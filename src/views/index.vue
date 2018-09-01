<template>
  <div>
    ind大萨达ex
    <router-link to="/table">table</router-link>
    <span>{{token}}</span>
    <demo>
      <template slot-scope="{nums}" slot="demo">
        {{nums}}11
      </template>
    </demo>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import demo from '../components/demo'

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
    components: {
      demo
    }
  }
</script>

<style scoped>

</style>