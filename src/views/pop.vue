<template>
  <div>
    <button ref="target" @click="show = true" style="position: fixed;right: 10px;top: 100px;cursor: pointer">11122
    </button>
    <animate-pop :targetNode="$refs" :show.sync="show"></animate-pop>
  </div>
</template>

<script>
  import animatePop from '../components/animate-pop'

  export default {
    components: {
      animatePop
    },
    data: function () {
      return {show: false}
    }
  }
</script>
