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
          <div class="clearfix bot-border"></div>
          <div class="col order-12">
            <button class="btn btn-outline-danger mt-2" @click="deleteAccount" @submit.prevent="profile">Supprimer mon compte</button></div>
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
import Swal from 'sweetalert2'


export default {
  name: 'Profile',
  props: ['user'],
  components: {
  },
  data () {
    let lastSignInTime = Firebase.auth().currentUser.metadata.lastSignInTime
    let creationTime = Firebase.auth().currentUser.metadata.creationTime

    return {
      lastSignInTime,
      creationTime
    }
  },
  methods: {
    deleteAccount: function() {
      Swal.fire({
        title: 'Attention',
        text: "Êtes-vous sûr de vouloir supprimer votre compte ?\n(Cette action est irréversible.)",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Oui, je le veux.'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Compte supprimé !',
            'Vous allez être redirigé vers la page d\'accueil',
            'success'
          )
          Firebase.auth().currentUser.delete().then(function() {
            location.reload()
          }).catch(function(error) {
            console.log('error', error)
          });
        }
      })
    }
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
