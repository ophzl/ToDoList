<template>
  <!--  User informations -->
  <div class="container pt-5">
    <div class="card">
      <div class="card-body">
        <div class="col--1 ">
          <h4>Ophélie Zeitel</h4>
          <span>Administrateur</span>
        </div>
        <hr>
        <div class="col-12 tital ">Date de première connexion :</div>
        <div class="col order-12">15 mars 2017</div>
        <div class="clearfix bot-border"></div>
        <div class="col-12 tital ">Date de dernière connexion :</div>
        <div class="col order-12">31 mars 2020</div>
      </div>
    </div>

    <!--    User's tasks list -->
    <div class="table-responsive pt-4">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Titre</th>
          <th scope="col">Description</th>
          <th scope="col">Date de fin</th>
          <!--          <th scope="col">Priorité</th>-->
          <th scope="col">Statut</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="task in returnedObject" v-bind:key="task.id">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td v-if="remindDate">{{ task.remindDate }}</td>
          <td v-else-if="!remindDate">Aucune date renseignée</td>
          <!--          <td></td>-->
          <td class="align-middle" style="text-align: center">
            <span type="button" class="text-warning" v-if="task.archived">Archivée</span>
            <span type="button" class="text-success" v-if="task.done" v-show="!task.archived">Terminée</span>
            <span class="text-danger" v-if="!task.done" v-show="!task.archived">En attente</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>/* eslint-disable */
import Todo from './Todo'
import Todos from './Todos'
import swal from 'sweetalert'

export default {
  name: 'Profile',
  components: {
    Todo,
    Todos
  },
  data () {

    let returnedObject = []
    for (let key in localStorage) {
      if (key.includes('todo')) {
        let jsonString = localStorage.getItem(key)
        returnedObject.push(JSON.parse(jsonString))
      }
    }

    return {
      returnedObject
    }
  },
  methods: {
    unarchiveTodo (todo) {
      if (localStorage.getItem('loglevel:webpack-dev-server')) {
        localStorage.removeItem('loglevel:webpack-dev-server')
      }
      const todoIndex = this.todos.indexOf(todo)
      let todoKey = localStorage.key(todoIndex)

      const unarchiveTodo = {
        title: todo.title,
        description: todo.description,
        done: todo.done,
        remindDate: todo.remindDate,
        archived: false,
      }

      swal({
        title: 'Êtes-vous sûr de vouloir désarchiver cette tâche ?',
        icon: 'warning',
        timer: 1500,
        buttons: true,
      })
        .then((unarchive) => {
          if (unarchive) {
            localStorage.setItem(todoKey, JSON.stringify(unarchiveTodo))
            location.reload()
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
        // owner: todo.owner,
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
        // owner: todo.owner,
      }
      localStorage.setItem(todoKey, JSON.stringify(updateTodo))
      location.reload()
    },
  }
}
</script>

<style scoped>
  .tital {
    font-size: 16px;
    font-weight: 500;
  }

  .bot-border {
    border-bottom: 2px #f8f8f8 solid;
    margin: 7px 0 5px 0
  }

  hr {
    margin: 6px 0 9px 0;
  }
</style>
