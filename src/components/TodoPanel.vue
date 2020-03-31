<template>
  <div class="row p-5">
    <div class="column card mx-auto p-4" v-show="todos">
      <h3>Mes tâches</h3>
      <Todos v-bind:todos="todos"/>
    </div>
    <div class="column card mx-auto p-4">
      <h3>Mes archives</h3>
      <Todos v-bind:todos="todos" v-for="todo in todos" v-bind:key="todo.id" v-show="todo.archived"/>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import Todos from './Todos'
import Todo from './Todo'

  export default {
    name: 'TodoPanel',
    components: {
      Todos,
      Todo
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
  }
</script>

<style scoped>

</style>
