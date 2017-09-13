import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Color from '@/components/Color'
import Sound from '@/components/Sound'
import About from '@/components/About'
import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/color',
      name: 'Color',
      component: Color
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/Work',
      name: 'Work',
      component: Work
    },
    {
      path: '/sound',
      name: 'Sound',
      component: Sound,
      children: [
        { path: 'home', component: Home, name: 'Home' },
        { path: 'color', component: Color, name: 'Color'},
        { path: 'work', component: Work, name: 'Work'},
        { path: 'about', component: About, name: 'About'},
      ]
    },
  ]
})
