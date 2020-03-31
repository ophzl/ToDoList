<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand" to="/">ToDoList</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/todolist" v-if="user">Ma liste</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/todo-panel" v-if="user">Gestion des tâches</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0 text-light" type="submit">Search</button>
      </form>
      <div class="nav-item dropdown">
        <a class="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown"
           aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user-circle fa-2x text-light"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/connection">Se connecter / S'inscrire</router-link>
          <a class="dropdown-item" id="logout" @click="logOut">Se déconnecter</a>
          <div class="dropdown-divider" v-if="user"></div>
          <router-link v-if="user" class="dropdown-item" to="/user">Mon compte</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>/* eslint-disable */
import Connection from './Connection'

export default {
  name: 'navbar',
  props: ['navbar'],
  components: {
    Connection
  },
  data() {
    // Get user
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.name)
    return {
      user
    }
  },
  methods: {
    // JQuery method to logout
    logOut() {
      $('#logout').click(function () {
        firebase.auth().signOut()
        location.reload();
      })
    }
  }
}
</script>

<style scoped>
  nav {
    background-color: dodgerblue;
  }
</style>
