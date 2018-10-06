<template>
  <transition name="cover">
    <div class="cover" v-if="show">
      <div class="container" :class="{'active':active}" ref="container">
        <div class="content" :class="{'active':active}" ref="content">
          <button @click="close">close</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: ['targetNode', 'show'],
    data: function () {
      return {
        targetX: 0,
        targetY: 0,
        targetWidth: 0,
        targetHeight: 0,
        clientWidth: 0,
        clientHeight: 0,
        active: false
      }
    },
    methods: {
      setCoordinate(node) {
        const {x: targetX, y: targetY, width: targetWidth, height: targetHeight} = node.getBoundingClientRect()
        this.targetX = targetX
        this.targetY = targetY
        this.targetWidth = Math.round(targetWidth / 2)
        this.targetHeight = Math.round(targetHeight / 2)
        this.clientWidth = document.documentElement.clientWidth / 2
        this.clientHeight = document.documentElement.clientHeight / 2
      },
      open() {
        const containerStyle = this.$refs.container.style
        const contentStyle = this.$refs.content.style
        containerStyle.transform = `translate(${this.targetX - this.clientWidth + this.targetWidth}px, ${this.targetY - this.clientHeight + this.targetHeight}px)`
        contentStyle.transform = 'scale(0)'
        setTimeout(() => {
          this.active = true
          containerStyle.transform = `translate(0, 0)`
          contentStyle.transform = 'scale(1)'
        }, 100)
      },
      close() {
        this.$refs.container.style.transform = `translate(${this.targetX - this.clientWidth + this.targetWidth}px, ${this.targetY - this.clientHeight + this.targetHeight}px)`
        this.$refs.content.style.transform = 'scale(0)'
        setTimeout(() => {
          this.active = false
          this.$emit('update:show', false)
        }, 500)
      }
    },
    watch: {
      show(val) {
        val && this.$nextTick(() => {
          this.setCoordinate(this.targetNode.target)
          this.open()
        })
      }
    }
  }
</script>

<style lang="scss">
  .cover {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cover-enter-active, .cover-leave-active {
    transition: background-color 1s;
  }

  .cover-enter, .cover-leave-to {
    background-color: rgba(0, 0, 0, 0);
  }

  .container {
    width: 400px;
    height: 300px;
    position: relative;
    &.active {
      transition: transform 1s;
    }
  }

  .content {
    position: absolute;
    left: 0;
    top: 0;
    width: 400px;
    height: 300px;
    background-color: white;
    &.active {
      transition: transform 1s;
    }
  }
</style>