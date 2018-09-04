<template>
  <div>
    <ul ref="list1">
      <li v-for="item in list1">{{item.name}}</li>
    </ul>
    <ul ref="list2">
      <li v-for="item in list2">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import Sortable from 'sortablejs'

  export default {
    data() {
      return {
        list1: [],
        list2: []
      }
    },
    created() {
      for (let i = 0; i < 8; i++) {
        this.list1.push({id: i, name: `选项${i}`})
        this.list2.push({id: i + 11, name: `选项${i + 11}`})
      }
    },
    mounted() {
      const list1 = new Sortable(this.$refs.list1, {
        group: 'ds'
      })
      const list2 = new Sortable(this.$refs.list2, {
        group: 'ds'
      })
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    background-color: orange;
    display: inline-block;
    vertical-align: top;
    li {
      margin: 10px;
      border: solid 1px #999;
      cursor: move;
    }
  }
</style>