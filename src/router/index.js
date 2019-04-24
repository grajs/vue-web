import routes from './routes'

export default VueRouter => {
  const router = new VueRouter({
    routes,
    scrollBehavior: () => ({ y: 0 })
  })
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.title) && document) {
      document.title = to.meta.title
    }
    if (to.matched.some(record => record.meta.requireAuth)) {
      if (store.state.token) {
        next()
      } else {
        if (document && /token=[^;]+/.test(document.cookie)) {
          store.commit('setToken', document.cookie.match(/token=[^;]+/)[0].replace(/^token=/, ''))
          next()
        } else {
          store.commit('loginIn', { token: '123' })
          next({
            path: '/login',
            query: { redirect: to.fullPath },
            replace: true
          })
        }
      }
    } else {
      next()
    }
  })

  return router
}
