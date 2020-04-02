<template>
  <div>
    <div></div>
    <h1 class="mx-auto p-5">Liste des utilisateurs</h1>
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
</template>

<script>/* eslint-disable */
import db from '../../static/js/db.js'
import Firebase from 'firebase'

export default {
  name: 'UserPanel',
  props: ['user'],
  data () {


    return {
      users: []
    }
  },
  methods: {
  },
  mounted () {


    db.collection('users')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('null')
          return
        }
        snapshot.forEach(doc => {
          this.users.push({
            id: doc.id,
            name: doc.data()['name'],
            email: doc.data()['email'],
            role: doc.data()['role'],
          })
        })
      })
      .catch(err => {
        console.log('error:', err)
      })
  }
}
</script>

<style scoped>
  h1 {
    font-size: 50px;
  }
</style>
