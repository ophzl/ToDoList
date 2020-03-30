<template>
  <div>
    <Todos id="todolist" v-bind:todos="todos"/>
    <CreateTodo v-on:add-todo="addTodo"/>
  </div>
</template>

<script>/* eslint-disable */
import Todos from './Todos'
import CreateTodo from './CreateTodo'

export default {
  name: 'TodoList',
  components: {
    Todos,
    CreateTodo,
  },
  data () {
    let returnedObject = []
    for (let key in localStorage) {
      if (key.includes('todo')) {
        let jsonString = localStorage.getItem(key)
        returnedObject.push(JSON.parse(jsonString))
      }
    }

    console.log(returnedObject)

    return {
      todos: returnedObject
    }
  },
  methods: {
    addTodo (newTodo) {
      localStorage.setItem('todo-' + localStorage.length, JSON.stringify(newTodo))
      this.todos = [...this.todos, newTodo]
    }
  }
}
</script>

<style scoped>

</style>
