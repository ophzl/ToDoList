<template>
  <div>
    <ErrorMsg v-if="!user"/>
    <div v-if="user">
      <h1>Mes archives</h1>
      <div class="card mx-auto" v-for="task in tasks" :key="task.id"
           v-if="user && task.isArchived === true">
        <div class="table-responsive pt-2 col-11 mx-auto">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Titre</th>
              <th scope="col">Description</th>
              <th scope="col">Assigné à</th>
              <th scope="col">Date de fin</th>
              <th scope="col">Statut</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="task in tasks" :key="task.id" v-if="task.isArchived === true">
              <td>{{ task.title }}</td>
              <td v-if="task.description">{{ task.description }}</td>
              <td v-else-if="!task.description">Aucune description renseignée</td>
              <td v-if="task.owner">{{ task.owner }}</td>
              <td v-else-if="!task.owner">Aucun member assigné</td>
              <td v-else-if="!task.description">Aucune description renseignée</td>
              <td v-if="task.endDate">{{ task.endDate }}</td>
              <td v-else-if="!task.endDate">Aucune date renseignée</td>
              <td class="align-middle" style="text-align: center">
                <button class="btn btn-outline-warning" v-if="task.isArchived" @click="isArchived(task.id)">Désarchiver
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import db from '../../static/js/db'
import ErrorMsg from './ErrorMsg'

export default {
  name: 'Archives',
  components: {ErrorMsg},
  props: ['tasks', 'users', 'user'],
  methods: {

    // Get task status in DB and update status on click on buttons "Terminer" or "Mettre en attente"
    isArchived: function (taskID) {
      if (this.user) {
        const ref = db.collection('users')
          .doc(this.user.uid)
          .collection('tasks')
          .doc(taskID)

        ref.get().then(doc => {
          const isArchived = doc.data().isArchived
          if (isArchived) {
            ref.update({
              isArchived: !isArchived
            })
          } else {
            ref.update({
              isArchived: true
            })
          }
        })
      }
    },
  }
}
</script>

<style scoped>

</style>
