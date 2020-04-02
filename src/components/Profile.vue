<template>
  <!--  User informations -->
  <div>
    <div class="container pt-5">
      <div class="card">
        <div class="card-body">
          <div class="col--1 ">
            <h4>{{ user.displayName }}</h4>
            <h5></h5>
            <span>{{ user.email }}</span>
          </div>
          <hr>
          <div class="col-12 tital ">Date de première connexion :</div>
          <div class="col order-12">{{ creationTime }}</div>
          <div class="clearfix bot-border"></div>
          <div class="col-12 tital ">Date de dernière connexion :</div>
          <div class="col order-12">{{ lastSignInTime }}</div>
        </div>
      </div>

      <!--    User's tasks list -->
<!--      <div class="table-responsive pt-4">-->
<!--        <table class="table">-->
<!--          <thead>-->
<!--          <tr>-->
<!--            <th scope="col">Titre</th>-->
<!--            <th scope="col">Description</th>-->
<!--            <th scope="col">Date de fin</th>-->
<!--            &lt;!&ndash;          <th scope="col">Priorité</th>&ndash;&gt;-->
<!--            <th scope="col">Statut</th>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->
<!--          <tr v-for="task in returnedObject" v-bind:key="task.id">-->
<!--            <td>{{ task.title }}</td>-->
<!--            <td v-if="task.description">{{ task.description }}</td>-->
<!--            <td v-else-if="!task.description">Aucune description renseignée</td>-->
<!--            <td v-if="task.remindDate">{{ task.remindDate }}</td>-->
<!--            <td v-else-if="!task.remindDate">Aucune date renseignée</td>-->
<!--            &lt;!&ndash;          <td></td>&ndash;&gt;-->
<!--            <td class="align-middle" style="text-align: center">-->
<!--              <span class="text-warning" v-if="task.archived">Archivée</span>-->
<!--              <span class="text-success" v-if="task.done" v-show="!task.archived">Terminée</span>-->
<!--              <span class="text-danger" v-if="!task.done" v-show="!task.archived">En attente</span>-->
<!--            </td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->
<!--      </div>-->
    </div>
  </div>

</template>

<script>/* eslint-disable */
import Firebase from 'firebase'
import db from '../../static/js/db'


export default {
  name: 'Profile',
  props: ['user'],
  components: {
  },
  data () {
    // db.collection('users')
    // .get(this.user.uid)

    let lastSignInTime = Firebase.auth().currentUser.metadata.lastSignInTime
    let creationTime = Firebase.auth().currentUser.metadata.creationTime

    return {
      lastSignInTime,
      creationTime
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
