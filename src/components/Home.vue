<template>
  <div>
    <div class="mx-auto title">
      <h1>Bonjour, {{ user.displayName }}</h1>
      <h1 v-if="!user">ToDoList</h1>
      <p>Créez et partagez vos tâches en un clic !</p>
      <h5 v-if="!user">Veuillez vous connecter afin de profiter au maximum des fonctionnalités.</h5>
      <div class="card mx-auto" v-if="user">
        <h3>Bientôt, il sera trop tard pour les effectuer...</h3>
        <div class="table-responsive pt-2 col-11 mx-auto">
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
            <tr v-for="task in returnedObject" v-bind:key="task.id" v-if="task.remindDate === today">
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
    </div>
  </div>
</template>

<script>/* eslint-disable */

export default {
  name: 'home',
  props: ['user'],
  components: {
  },
  data () {
    let today = '2020-04-02'

    return {
      today
    }
  }
}
</script>

<style scoped>
  .title {
    padding-top: 10rem;
  }

  h1 {
    font-size: 60px;
  }

  p {
    font-size: 40px;
    opacity: 60%;
    padding-top: 2rem;
  }

  .card {
    background: #eeeeee;
    width: 95%;
    margin-top: 13rem;
    height: 20rem;
    border: none;
  }

  h3 {
    text-align: left;
    padding: 2rem;
  }

  h5 {
    padding-top: 5rem;
    color: darkred;
  }
</style>
