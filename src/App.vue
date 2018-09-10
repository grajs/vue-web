<template>
  <div class="app">
    <header-menu></header-menu>
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
        transitionName: 'slide-right'
      }
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

<style lang="scss">
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



  .router-view {
    margin-top: 60px;
  }
</style>