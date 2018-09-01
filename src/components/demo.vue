<template>
  <div>
    <slot :nums="nums" name="demo"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nums: 12
      }
    }
  }
</script>

<style scoped>

</style>