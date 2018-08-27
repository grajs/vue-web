<template>
  <div>
    ind大萨达ex
    <router-link to="/table">table</router-link>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$message({message: 'dsa', type: 'success'})
    }
  }
</script>

<style scoped>

</style>