<template>
  <div>
    <div class="mx-auto title">
      <h1>ToDoList</h1>
      <p>Créez et partagez vos tâches en un clic !</p>
      <h5 v-if="!user">Veuillez vous connecter afin de profiter au maximum des fonctionnalités.</h5>
      <div class="card mx-auto">
        <h3>Bientôt, il sera trop tard pour les effectuer...</h3>
<!--        TODO: add soon ending tasks -->
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import Todos from './Todos'
import Connection from './Connection'

export default {
  name: 'home',
  props: ['home'],
  components: {
    Todos,
    Connection
  },
  data () {
    // Store values of a task to print them
    let returnedObject = []
    for (let key in localStorage) {
      if (key.includes('todo')) {
        let jsonString = localStorage.getItem(key)
        returnedObject.push(JSON.parse(jsonString))
      }
    }

    // Get user
    let user = JSON.parse(localStorage.getItem('user'));

    return {
      todos: returnedObject,
      user,
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
