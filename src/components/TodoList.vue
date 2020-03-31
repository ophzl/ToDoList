<template>
  <div>
    <h1 class="mx-auto p-5">Ma liste</h1>
    <div class="row">
      <div class="column card mx-auto p-4" v-show="todos">
        <Todos v-bind:todos="todos"/>
      </div>
      <!--      <div class="column card">-->
      <!--        <Todos v-bind:todos="todos" v-for="todo in todos" v-bind:key="todo.id" v-show="todo.done"/>-->
      <!--      </div>-->
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
    // LOCAL STORAGE
    let returnedObject = []
    for (let key in localStorage) {
      if (key.includes('todo')) {
        let jsonString = localStorage.getItem(key)
        returnedObject.push(JSON.parse(jsonString))
      }
    }

    console.log(user);
    // DATABASE
    // var Airtable = require('airtable')
    // var base = new Airtable({apiKey: 'keyzZ3Q36O3hEoi7O'}).base('app7lIfZKOEHUTBma')
    //
    // let tasks = []
    // base('tasks').select({
    //   view: 'Grid view'
    // }).firstPage(function (err, records) {
    //   if (err) {
    //     console.error(err)
    //     return
    //   }
    //   for (let key in records) {
    //     tasks.push(records[key]['_rawJson']['fields'])
    //   }
    // })
    return {
      todos: returnedObject
    }
  },
  methods: {
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
