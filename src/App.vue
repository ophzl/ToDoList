<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>/* eslint-disable */
import Navbar from './components/Navbar'
import Navigation from "@/components/Navigation.vue";
import Firebase from "firebase";
import db from "./db.js";
export default {
  name: "App",
  data: function() {
    return {
      user: null
    };
  },
  mounted() {
    db.collection("users")
      .doc("sZ7PtjzbqFjSDqTQYMLA")
      .get()
      .then(snapshot => {
        this.user = snapshot.data().name;
      })
  },
  components: {
    Navbar
  },
};

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
