import store from '../store'

export default router => router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.title) && document) {
    document.title = to.meta.title
  }
  // if (to.matched.some(record => record.meta.title)) {
  //   document.title = to.meta.title
  // }
  next()
})