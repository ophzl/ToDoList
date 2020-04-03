<template>
  <div>
    <ErrorMsg v-if="!user"/>
    <div v-if="user">
      <div class="container pt-5">
        <div class="card">
          <div class="card-body">
            <h1 class="mx-auto pb-5">Liste des utilisateurs</h1>
            <div>
              <div class="table-responsive pt-2 col-11 mx-auto">
                <table class="table">
                  <thead>
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Rôle</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user['name'] }}</td>
                    <td>{{ user['email'] }}</td>
                    <td v-if="user['role'] === 'administrator'">Administrateur</td>
                    <td v-if="user['role'] === 'member'">Membre</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="container pt-2">-->
<!--        <div class="card">-->
<!--          <div class="card-body">-->
<!--            <h1 class="mx-auto pb-5">Liste des membres ayant au moins une tâche assignée</h1>-->
<!--            <div class="table-responsive col-11 mx-auto">-->
<!--              <div v-for="user in users" :key="user.id">-->
<!--                <div v-for="task in tasks" :key="task.id" v-if="task.owner === user['name']">-->
<!--                  <h3>{{ user['name'] }}</h3>-->
<!--                  <table class="table" v-if="task.owner === user['name']">-->
<!--                    <thead>-->
<!--                    <tr>-->
<!--                      <th scope="col">Title</th>-->
<!--                      <th scope="col">Description</th>-->
<!--                    </tr>-->
<!--                    </thead>-->
<!--                    <tbody>-->
<!--                    <tr>-->
<!--                      <td>{{ task.title }}</td>-->
<!--                      <td>{{ task.description }}</td>-->
<!--                    </tr>-->
<!--                    </tbody>-->
<!--                  </table>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>/* eslint-disable */
import db from '../../static/js/db.js'
import Firebase from 'firebase'
import ErrorMsg from './ErrorMsg'

export default {
  name: 'UserPanel',
  components: {ErrorMsg},
  props: ['user', 'users', 'tasks'],
}
</script>

<style scoped>
  h1 {
    font-size: 50px;
  }
</style>
