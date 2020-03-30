<template>
  <div>
    <Todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-on:edit-todo="editTodo" v-on:uncomplete-todo="uncompleteTodo" v-bind:key="todo.id" v-for="todo in todos"
          v-bind:todo="todo"></Todo>
  </div>
</template>

<script type="text/javascript">/* eslint-disable */
import Todo from './Todo'

export default {
  name: 'todos',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo (todo) {
      if (localStorage.getItem('loglevel:webpack-dev-server')) {
        localStorage.removeItem('loglevel:webpack-dev-server')
      }
      const todoIndex = this.todos.indexOf(todo)
      const key = localStorage.key(todoIndex)
      localStorage.removeItem(key)
      this.todos.splice(todoIndex, 1)
      location.reload()
    },
    completeTodo (todo) {
      if (localStorage.getItem('loglevel:webpack-dev-server')) {
        localStorage.removeItem('loglevel:webpack-dev-server')
      }
      const todoIndex = this.todos.indexOf(todo)
      let todoKey = localStorage.key(todoIndex)
      const updateTodo = {
        title: todo.title,
        description: todo.description,
        done: true,
        remindDate: todo.remindDate,
      }
      localStorage.setItem(todoKey, JSON.stringify(updateTodo))
      location.reload()
    },
    uncompleteTodo(todo){
      if (localStorage.getItem('loglevel:webpack-dev-server')) {
        localStorage.removeItem('loglevel:webpack-dev-server')
      }
      const todoIndex = this.todos.indexOf(todo)
      let todoKey = localStorage.key(todoIndex)
      const updateTodo = {
        title: todo.title,
        description: todo.description,
        done: false,
        remindDate: todo.remindDate,
      }
      localStorage.setItem(todoKey, JSON.stringify(updateTodo))
      location.reload()
    },
    editTodo (todo) {
      if (localStorage.getItem('loglevel:webpack-dev-server')) {
        localStorage.removeItem('loglevel:webpack-dev-server')
      }
      const todoIndex = this.todos.indexOf(todo)
      let todoKey = localStorage.key(todoIndex)
      const updateTodo = {
        title: todo.title,
        description: todo.description,
        done: todo.done,
        remindDate: todo.remindDate,
      }
      console.log(updateTodo.remindDate)
      localStorage.setItem(todoKey, JSON.stringify(updateTodo))
    }
  },
}
</script>

<style scoped>
  #todolist {
    margin-top: 5rem;
  }
</style>
