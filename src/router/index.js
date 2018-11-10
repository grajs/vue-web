import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import routerControl from './router-control'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({y: 0})
})

routerControl(router)

export default router
