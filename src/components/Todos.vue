<template>
  <div>
    <Todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-on:edit-todo="editTodo"
          v-on:uncomplete-todo="uncompleteTodo" v-on:archive-todo="archiveTodo" v-bind:key="todo.id"
          v-for="todo in todos"
          v-bind:todo="todo"></Todo>
  </div>
</template>

<script type="text/javascript">/* eslint-disable */
import Todo from './Todo'
import swal from 'sweetalert'

export default {
  name: 'todos',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    // Delete a task in local storage
    deleteTodo (todo) {
      // Store values of a task to print them
      if (localStorage.getItem('loglevel:webpack-dev-server')) {
        localStorage.removeItem('loglevel:webpack-dev-server')
      }
      const todoIndex = this.todos.indexOf(todo)
      const key = localStorage.key(todoIndex)

      swal({
        title: 'Un instant...',
        text: 'Souhaitez-vous vraiment supprimer cette tâche ?',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            swal('Cette tâche a bien été supprimée.', {
              icon: 'success',
              timer: 1500,
              buttons: false,
            })
            localStorage.removeItem(key)
            this.todos.splice(todoIndex, 1)
          }
        })
    },
    // Mark a task as complete and store it in local storage
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
        archived: false,
        owner: todo.owner,
      }
      localStorage.setItem(todoKey, JSON.stringify(updateTodo))
      location.reload()
    },
    // Mark a task as not complete and store it in local storage
    uncompleteTodo (todo) {
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
        archived: false,
        owner: todo.owner,
      }
      localStorage.setItem(todoKey, JSON.stringify(updateTodo))
      location.reload()
    },
    // Edit a task and update values in local storage
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
        archived: false,
        owner: todo.owner,
      }
      localStorage.setItem(todoKey, JSON.stringify(updateTodo))
      swal({
        title: 'Terminé !',
        text: 'Votre modification a bien été prise en compte.',
        button: false,
        icon: 'success',
        timer: 1500,
      })
    },
    // Mark a task as archived and make it invisible in To Do List
    archiveTodo (todo) {
      if (localStorage.getItem('loglevel:webpack-dev-server')) {
        localStorage.removeItem('loglevel:webpack-dev-server')
      }
      const todoIndex = this.todos.indexOf(todo)
      let todoKey = localStorage.key(todoIndex)

      const archiveTodo = {
        title: todo.title,
        description: todo.description,
        done: todo.done,
        remindDate: todo.remindDate,
        archived: true,
        owner: todo.owner,
      }

      swal({
        title: 'Tâche archivée !',
        text: 'Si vous souhaitez la désarchiver, rendez-vous sur la page de gestion de vos tâches.',
        icon: 'success',
        buttons: true,
      })
        .then((archive) => {
          if (archive) {
            localStorage.setItem(todoKey, JSON.stringify(archiveTodo))
            location.reload()
          }
        })
    }
  },
}
</script>

<style scoped>
  #todolist {
    margin-top: 1rem;
  }
</style>
