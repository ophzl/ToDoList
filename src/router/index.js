import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'
import TodoList from '../components/TodoList'
import Profile from '../components/Profile'
import Home from '../components/Home'
import Connection from '../components/Connection'
import TodoPanel from '../components/TodoPanel'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    }, {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    }, {
      path: '/user',
      name: 'user',
      component: Profile
    }, {
      path: '/connection',
      name: 'connection',
      component: Connection
    }, {
      path: '/todo-panel',
      name: 'todo-panel',
      component: TodoPanel
    }
  ]
})
