import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import TodoList from '../components/TodoList'

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
    }
  ]
})
