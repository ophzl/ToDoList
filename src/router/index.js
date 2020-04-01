import Vue from 'vue'
import Router from 'vue-router'

// import App from '../App'
import TodoList from '../components/TodoList'
import Profile from '../components/Profile'
import Home from '../components/Home'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import UserPanel from '../components/UserPanel'
import Login from '../components/Login'
import Register from '../components/Register'

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
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/users',
      name: 'users',
      component: UserPanel
    }
  ]
})
