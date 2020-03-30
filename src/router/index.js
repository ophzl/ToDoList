import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import TodoList from '../components/TodoList'
import Profile from '../components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: App
    }, {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    }, {
      path: '/user',
      name: 'user',
      component: Profile
    }
  ]
})
