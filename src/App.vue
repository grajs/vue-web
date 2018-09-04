<template>
  <div class="app">
    <transition name="menu">
      <header-menu v-show="headShow" class="menu"></header-menu>
    </transition>
    <transition :name="transitionName">
      <router-view class="router-view" v-if="!$route.meta.keepAlive" :key="$route.path"></router-view>
    </transition>
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="router-view" :key="$route.path"></router-view>
      </keep-alive>
    </transition>
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
      let tag = true
      let time = null
      let lastScrollTop = 0
      const scrollTop = () => document.documentElement.scrollTop || document.body.scrollTop
      document.addEventListener('scroll', () => {
        if (tag) {
          tag = false
          setTimeout(() => tag = true, 200)
          const top = scrollTop()
          if (top - lastScrollTop < 0) {
            // up
            this.headShow = true
          } else {
            // down
            top > 100 && (this.headShow = false)
          }
          lastScrollTop = top
        }
        clearTimeout(time)
        time = setTimeout(() => {
          scrollTop() < 100 && (this.headShow = true)
        }, 500)
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
    transition: all .5s;
  }

  .menu-enter, .menu-leave-to {
    opacity: 0;
    top: -60px;
  }

  .router-view {
    margin-top: 60px;
  }
</style>