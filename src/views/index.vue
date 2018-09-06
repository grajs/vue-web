<template>
  <div class="list-container">
    <el-table :data="list" stripe style="width: 100%" :row-style="{textAlign:'center'}">
      <el-table-column prop="create_time" label="日期" width="150px"></el-table-column>
      <el-table-column prop="id" label="批次"></el-table-column>
      <el-table-column prop="type" label="型号"></el-table-column>
      <el-table-column prop="colour" label="颜色"></el-table-column>
      <el-table-column prop="bundle_length" label="规格"></el-table-column>
      <el-table-column prop="bundle_CT" label="数量"></el-table-column>
      <el-table-column prop="total_length" label="总量"></el-table-column>
      <el-table-column prop="store_id" label="库房信息"></el-table-column>
      <el-table-column label="操作" width="90px">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain icon="el-icon-plus" @click="handler(scope)">添加</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pager"
                   background
                   layout="prev, pager, next"
                   :page-size="pageSize"
                   :total="120"></el-pagination>
  </div>
</template>

<script>
  import getTime from '../utils/getTime'

  export default {
    data() {
      return {
        list: [],
        pageSize: 10
      }
    },
    created() {
      this.$axios('/wf/batch', {id: 1}).then(({data}) => {
        data.forEach(i => i.create_time = this.getTime(i.create_time))
        this.list = data
      })
    },
    methods: {
      getTime,
      handler(data) {
        console.log(data)
      }
    }
  }
</script>

<style scoped>
  .list-container {
  }

  .pager {
    margin-top: 20px;
  }
</style>