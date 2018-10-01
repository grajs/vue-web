<template>
  <div class="app">
    <header-menu></header-menu>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive" class="app-router-view"></router-view>
    </transition>
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="app-router-view"></router-view>
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
        this.transitionName = toDepth < fromDepth ? 'app-slide-right' : 'app-slide-left'
      }
    },
    components: {
      headerMenu
    }
  }
</script>

<style lang="scss">
  .app {

    .app-router-view {
      position: relative;
      left: 0;
      margin-top: 60px;
    }

    .app-slide-left-enter-active, .app-slide-right-enter-active {
      transition: left .7s, opacity .5s;
    }

    .app-slide-left-enter {
      opacity: 0;
      left: -10px;
    }

    .app-slide-right-enter {
      opacity: 0;
      left: 10px;
    }

  }
</style>