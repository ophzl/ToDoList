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
          <router-link class="nav-link" to="/todolist" v-if="user">Liste des tâches</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users" v-if="user">Gestion des utilisateurs</router-link>
          <!-- Ajouter rôle administrateur -->
        </li>
      </ul>
      <div class="nav-item dropdown">
        <a class="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown"
           aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user-circle fa-2x text-light"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/connection" v-if="!user">Se connecter / S'inscrire</router-link>
          <span type="button" class="dropdown-item" id="logout" @click="logOut">Se déconnecter</span>
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
  data () {
    // Get user
    let user = JSON.parse(localStorage.getItem('user'))
    return {
      user
    }
  },
  methods: {
    // JQuery method to logout
    logOut () {
      $('#logout').click(function () {
        firebase.auth().signOut()
        location.reload()
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
