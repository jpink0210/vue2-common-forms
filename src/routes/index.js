import Vue from 'vue'
import Router from 'vue-router'
// import IndexPage from '@/pages/index'
import Demo from '@/pages/demo'
import Mobile from '@/pages/mobile'
import Forms from '@/pages/forms'
import Inputs from '@/pages/inputs'
import Plugins from '@/pages/plugins'
import SmoothSlide from '@/pages/smoothslide'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/mobile',
      name: 'Mobile',
      component: Mobile
    },
    {
      path: '/inputs',
      name: 'Inputs',
      component: Inputs
    },
    {
      path: '/plugins',
      name: 'Plugins',
      component: Plugins
    },
    {
      path: '/smoothslide',
      name: 'SmoothSlide',
      component: SmoothSlide
    },
  ]
})
