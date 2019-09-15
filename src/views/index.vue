<template>
  <div class="index">
    <el-table :data="data" border height="300">
      <el-table-column prop="model" label="型号" width="40"></el-table-column>
      <el-table-column prop="color" label="颜色"></el-table-column>
      <el-table-column prop="spec" label="规格"></el-table-column>
      <el-table-column prop="count" label="数量"></el-table-column>
      <el-table-column prop="total" label="总量"></el-table-column>
      <el-table-column prop="store" label="库房信息"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import ScrollTable from '../utils/scrollTable'

  export default {
    data() {
      return {
        showCount: 10,
        list: [],
        data: [],
        size: 10,
        start: 0,
        end: 10,
        oldTop: 0
      }
    },
    created() {
      const list = []
      for (let i = 0; i < 30; i++) {
        list.push({
          id: i,
          model: i,
          color: '红色',
          spec: '100m',
          count: 21,
          total: 122,
          store: '第六库'
        })
      }
      this.list = list
      this.data = list.slice(this.start, this.end)
    },
    mounted() {
      const scrollContainer = document.querySelector('.el-table__body-wrapper')
      const table = scrollContainer.querySelector('table')
      new ScrollTable(scrollContainer, table, this.list, 47)
    },
    methods: {
      detail() {
        this.addShow = true
      }
    }
  }
</script>

<style lang="scss">
  .index {
    padding: 0 200px;
  }
</style>
