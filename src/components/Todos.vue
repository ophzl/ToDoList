<template>
  <div>
    <Todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-on:edit-todo="editTodo"
          v-on:uncomplete-todo="uncompleteTodo" v-bind:key="todo.id" v-for="todo in todos"
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
    deleteTodo (todo) {
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
            })
            localStorage.removeItem(key)
            this.todos.splice(todoIndex, 1)
            location.reload()
          } else {
          }
        })
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
      localStorage.setItem(todoKey, JSON.stringify(updateTodo))
      swal({
        title: 'Terminé !',
        text: 'Votre modification a bien été prise en compte.',
        button: false,
        icon: 'success',
        timer: 1500,
      })
    }
  },
}
</script>

<style scoped>
  #todolist {
    margin-top: 5rem;
  }
</style>
