<template>
  <div>
    <h1 class="mx-auto p-5">Ma liste</h1>
    <div class="row">
      <div class="column card mx-auto p-4" v-show="todos">
        <Todos v-bind:todos="todos"/>
      </div>
    </div>
    <CreateTodo v-on:add-todo="addTodo"/>
  </div>
</template>

<script>/* eslint-disable */
import Todos from './Todos'
import CreateTodo from './CreateTodo'
import Connection from './Connection'

if (localStorage.getItem('loglevel:webpack-dev-server')) {
  localStorage.removeItem('loglevel:webpack-dev-server')
}

export default {
  name: 'TodoList',
  components: {
    Todos,
    CreateTodo,
    Connection
  },
  data () {
    // Store values of a task to print them
    let returnedObject = []
    for (let key in localStorage) {
      if (key.includes('todo')) {
        let jsonString = localStorage.getItem(key)
        returnedObject.push(JSON.parse(jsonString))
      }
    }
    return {
      todos: returnedObject
    }
  },
  methods: {
    // Add a task to local storage and print it in To Do List
    addTodo (newTodo) {
      localStorage.setItem('todo-' + localStorage.length, JSON.stringify(newTodo))
      this.todos = [newTodo, ...this.todos]
    },
  }
}
</script>

<style scoped>
  .column {
    width: 20%;
    height: 100%;
    background: #eee;
    /*margin: 5%;*/
  }

  h1 {
    font-size: 50px;
  }
</style>
