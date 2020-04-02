<template>
  <div>
    <div class="mx-auto title">
      <h1 v-if="user">Bonjour, {{ user.displayName }}</h1>
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
              <th scope="col">Statut</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="task in tasks" :key="task.id" v-if="task.endDate === today && task.isDone === false && task.isArchived === false">
              <td>{{ task.title }}</td>
              <td v-if="task.description">{{ task.description }}</td>
              <td v-else-if="!task.description">Aucune description renseignée</td>
              <td>{{ task.endDate }}</td>
              <td class="align-middle" style="text-align: center">
                <span class="text-danger" v-if="!task.isDone" v-show="!task.isArchived">En attente</span>
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
  props: ['user', 'tasks'],
  components: {
  },
  data () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

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
