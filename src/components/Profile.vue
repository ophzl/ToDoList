<template>
  <!--  User informations -->
  <div class="container pt-5">
    <div class="card">
      <div class="card-body">
        <div class="col--1 ">
          <h4>{{ userInfosJson['name'] }}</h4>
          <h5>{{ userInfosJson['email'] }}</h5>
          <span>Administrateur</span>
        </div>
        <hr>
        <div class="col-12 tital ">Date de première connexion :</div>
        <div class="col order-12">{{ userInfosJson['creationTime'] }}</div>
        <div class="clearfix bot-border"></div>
        <div class="col-12 tital ">Date de dernière connexion :</div>
        <div class="col order-12">{{ userInfosJson['lastSignIn'] }}</div>
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
          <td v-if="task.description">{{ task.description }}</td>
          <td v-else-if="!task.description">Aucune description renseignée</td>
          <td v-if="task.remindDate">{{ task.remindDate }}</td>
          <td v-else-if="!task.remindDate">Aucune date renseignée</td>
          <!--          <td></td>-->
          <td class="align-middle" style="text-align: center">
            <span class="text-warning" v-if="task.archived">Archivée</span>
            <span class="text-success" v-if="task.done" v-show="!task.archived">Terminée</span>
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
import Connection from './Connection'

export default {
  name: 'Profile',
  components: {
    Todo,
    Todos,
    Connection
  },
  data () {
    // Get tasks
    let returnedObject = []
    for (let key in localStorage) {
      if (key.includes('todo')) {
        let jsonString = localStorage.getItem(key)
        returnedObject.push(JSON.parse(jsonString))
      }
    }

    // Get user informations
    let userInfos = localStorage.getItem('user')
    let userInfosJson = JSON.parse(userInfos)
    // console.log(userInfosJson['email'])

    return {
      returnedObject,
      userInfosJson
    }
  },
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
