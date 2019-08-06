<template>
  <div class="index">
    <el-dialog :visible.sync="addShow" title="添加商品" class="form-container">
      <div class="form">
        <el-input>
          <template slot="prepend">名称</template>
        </el-input>
        <el-input placeholder="颜色">
          <template slot="prepend">颜色</template>
        </el-input>
        <div class="input-number">
          <label>数量</label>
          <el-input-number :min="1" v-model="number" controls-position="right"></el-input-number>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogShow = false">取 消</el-button>
    <el-button type="primary" @click="dialogShow = false">确 定</el-button>
  </span>
    </el-dialog>
    <el-table :data="list" stripe style="width: 100%" :row-style="{textAlign:'center'}">
      <el-table-column prop="create_time" label="日期" width="150px"></el-table-column>
      <el-table-column prop="batch" label="批次"></el-table-column>
      <el-table-column prop="model" label="型号"></el-table-column>
      <el-table-column prop="color" label="颜色"></el-table-column>
      <el-table-column prop="spec" label="规格"></el-table-column>
      <el-table-column prop="count" label="数量"></el-table-column>
      <el-table-column prop="total" label="总量"></el-table-column>
      <el-table-column prop="store" label="库房信息"></el-table-column>
      <el-table-column label="操作" width="90px">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain icon="el-icon-plus" @click="detail(scope)">添加</el-button>
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
  export default {
    data() {
      return {
        list: [],
        pageSize: 10,
        addShow: false,
        number: 1,
        text: '243'
      }
    },
    created() {
      this.list = [
        {
          create_time: '2018-05-21 10:32:32',
          batch: '第一批',
          batch_id: 1,
          model: '强力型',
          color: '红色',
          spec: '100m',
          count: 21,
          total: 122,
          store: '第六库',
          store_id: '1'
        }
      ]
    },
    methods: {
      detail() {
        this.addShow = true
      }
    }
  }
</script>

<style lang="scss">
#demo{
  width: 20px;
  height: 20px;
  background: url("../assets/image/vue.jpg")
}
  .index {
    .form-container {
      .el-dialog {
        width: 600px;
      }
    }
    .form {
      text-align: center;
      padding: 0 8%;
      .el-input {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .input-number {
      display: flex;
      label {
        display: inline-block;
        flex-basis: 70px;
        height: 40px;
        vertical-align: top;
        line-height: 40px;
        color: #909399;
        box-sizing: border-box;
        background-color: #f5f7fa;
        border: 1px solid #dcdfe6;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-right: none;
      }
      input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .el-input-number {
        flex-grow: 1;
      }
    }
    .num-label {
      margin-right: 10px;
    }
    .pager {
      margin-top: 20px;
    }
  }
</style>
