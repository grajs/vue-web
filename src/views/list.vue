<template>
  <div class="main">
    <div class="container" ref="list1">
      <div v-for="item in list1">{{item.name}}</div>
    </div>
    <div class="container" ref="list2">
      <div v-for="item in list2">{{item.name}}</div>
    </div>
    <div class="container" ref="list3">
      <div v-for="item in list3">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
  import Sortable from 'sortablejs'

  export default {
    data() {
      return {
        list1: [],
        list2: [],
        list3: []
      }
    },
    created() {
      for (let i = 0; i < 8; i++) {
        this.list1.push({id: i, name: `选项${i}`})
        this.list2.push({id: i + 11, name: `选项${i + 11}`})
        this.list3.push({id: i + 111, name: `选项${i + 111}`})
      }
    },
    mounted() {
      const setStyle = (e) => {
        console.log(e)
      }
      const deleteStyle = ({item}) => {
      }
      const list1 = new Sortable(this.$refs.list1, {
        group: 'ds',
        forceFallback: true
      })
      const list2 = new Sortable(this.$refs.list2, {
        group: 'ds',
        forceFallback: true
      })
      const list3 = new Sortable(this.$refs.list3, {
        group: 'ds',
        forceFallback: true
      })
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
  }

  .container {
    user-select: none;
    display: inline-block;
    box-shadow: 0 0 10px #c2c2c2;
    background-color: white;
    vertical-align: top;
    margin-left: 20px;
    div {
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;
      margin: 10px;
      box-shadow: 0 0 10px #c2c2c2;
      padding: 5px;
    }
  }

  .sortable-ghost {
    color: #c2c2c2;
    background-color: #c2c2c2;
  }

  .sortable-fallback {
    box-sizing: border-box;
    opacity: 1 !important;
    cursor: pointer;
    box-shadow: 0 0 4px #888;
    background-color: white;
  }
</style>