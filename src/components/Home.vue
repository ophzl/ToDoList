<template>
  <div>
    <div class="mx-auto title">
      <h1>ToDoList</h1>
      <p>Créez et partagez vos tâches en un clic !</p>
      <div class="card mx-auto">
        <h3>Tâches récemment ajoutées</h3>
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import Todos from './Todos'

export default {
  name: 'home',
  props: ['home'],
  components: {
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
      todos: returnedObject
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
</style>
