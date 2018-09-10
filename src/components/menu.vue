<template>
  <transition name="menu">
    <el-menu
      v-show="headShow"
      class="menu"
      :default-active="activeIndex"
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
      <el-menu-item index="3">
        <router-link to="/list">拖拽列表</router-link>
      </el-menu-item>
      <el-menu-item index="/table">
        <router-link to="/table">表格效果</router-link>
      </el-menu-item>
    </el-menu>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '',
        headShow: true
      }
    },
    mounted() {
      this.menuScroll(60)
    },
    methods: {
      menuScroll(height) {
        let time = null
        let lastScrollTop = 0
        const scrollTop = () => document.documentElement.scrollTop || document.body.scrollTop
        document.addEventListener('scroll', () => {
          clearTimeout(time)
          time = setTimeout(() => {
            const top = scrollTop()
            if (top - lastScrollTop < 0) {
              // up
              this.headShow = true
            } else {
              // down
              top > height && (this.headShow = false)
            }
            lastScrollTop = top
            if (scrollTop() < height) {
              this.headShow = true
            } else {
              if (top >= document.body.clientHeight - document.documentElement.clientHeight + height) {
                this.headShow = false
              }
            }
          }, 200)
        })
      },
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
  .menu {
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    > .el-menu-item {
      padding: 0;
      box-sizing: border-box;
      width: 96px;
      text-align: center;
    }
  }

  .el-menu {
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;
  }

  .menu-leave-active, .menu-enter-active {
    transition: all .5s;
  }

  .menu-enter, .menu-leave-to {
    opacity: 0;
    top: -60px !important;
  }
</style>