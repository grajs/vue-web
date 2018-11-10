<template>
  <div class="index">
    <el-dialog :visible.sync="dialogShow" title="添加商品" class="form-container">
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
    <span ref="demo" id="demo">{{text}}</span>
    <button @click="$store.commit('loginOut')">loginOut</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        pageSize: 10,
        dialogShow: false,
        number: 1,
        text: '243'
      }
    },
    created() {
      this.$axios('/wf/batch', { id: 1 }).then(data => {
        const list = data.data
        list.forEach(i => i.create_time = this.getTime(i.create_time))
        this.list = data
      }).catch(err => this.$message.error(err))
    }
  }
</script>

<style lang="scss">
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
