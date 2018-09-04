<template>
  <el-menu
          :default-active="activeIndex"
          class="menu"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
    <el-menu-item index="/">
      <router-link to="/">首页</router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3"><router-link to="/list">拖拽列表</router-link></el-menu-item>
    <el-menu-item index="/table">
      <router-link to="/table">表格效果</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath)
      }
    },
    watch: {
      $route(route) {
        this.activeIndex = route.fullPath
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .menu .el-menu-item {
    padding: 0;
    box-sizing: border-box;
    width: 96px;
    text-align: center;
  }
</style>