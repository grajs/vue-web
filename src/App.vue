<template>
  <div class="app">
    <transition name="menu">
      <header-menu v-show="headShow" class="menu"></header-menu>
    </transition>
    <transition :name="transitionName" v-if="!$route.meta.keepAlive">
      <router-view class="router-view" :key="$route.path"></router-view>
    </transition>
    <keep-alive>
      <transition :name="transitionName" v-if="$route.meta.keepAlive">
        <router-view class="router-view" :key="$route.path"></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
  import headerMenu from './components/menu'

  export default {
    data() {
      return {
        transitionName: 'slide-right',
        headShow: true
      }
    },
    mounted() {
      let time = null
      document.addEventListener('scroll', () => {
        clearTimeout(time)
        time = setTimeout(() => {
          this.headShow = false
        }, 300)
      })
    },
    methods: {},
    watch: {
      '$route'(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    components: {
      headerMenu
    }
  }
</script>

<style lang="scss" scoped>
  .router-view {
    position: relative;
    left: 0;
  }

  .slide-left-enter-active, .slide-right-enter-active {
    transition: left .7s, opacity .5s;
  }

  .slide-left-enter {
    opacity: 0;
    left: -10px;
  }

  .slide-right-enter {
    opacity: 0;
    left: 10px;
  }

  .menu {
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;
  }

  .menu-leave-active, .menu-enter-active {
    transition: all .6s;
  }

  .menu-enter {
    top: 0;
  }

  .menu-leave-to {
    top: -60px;
  }

  .router-view {
    margin-top: 60px;
  }
</style>