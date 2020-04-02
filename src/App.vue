<template>
  <div id="app">
    <Navbar :user="user" :logout="logout"/>
    <router-view :user="user" :tasks="tasks" :users="users" @addTask="addTask" @deleteTask="deleteTask"
                 @editTask="editTask"/>
  </div>
</template>

<script>/* eslint-disable */
import Navbar from './components/Navbar'
import Firebase from 'firebase'
import db from '../static/js/db.js'

export default {
  name: 'App',
  data: function () {
    return {
      user: null,
      tasks: [],
      users: [],
    }
  },
  methods: {
    logout: function () {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null
          this.$router.push('/login')
          console.log('disconnected')
        })
    },

    addTask: function (title, desc, owner, endDate) {
      db.collection('users')
        .doc(this.user.uid)
        .collection('tasks')
        .add({
          title: title,
          description: desc,
          isDone: false,
          isArchived: false,
          owner: owner,
          endDate: endDate
        })
    },

    editTask: function (task) {
      const ref = db.collection('users')
        .doc(this.user.id)
        .collection('tasks')
        .doc(task)
    },

    deleteTask: function (task) {
      db.collection('users')
        .doc(this.user.uid)
        .collection('tasks')
        .doc(task)
        .delete()
    }
  },
  mounted () {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user

        db.collection('users')
          .doc(this.user.uid)
          .collection('tasks')
          .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
              let doc = change.doc
              if (change.type === 'added') {
                this.tasks.push({
                  id: doc.id,
                  title: doc.data().title,
                  description: doc.data().description,
                  isDone: doc.data().isDone,
                  isArchived: doc.data().isArchived,
                  endDate: doc.data().endDate,
                  owner: doc.data().owner
                })
              }
              if (change.type === 'modified') {
                this.tasks.pop()
                this.tasks.push({
                  id: doc.id,
                  title: doc.data().title,
                  description: doc.data().description,
                  isDone: doc.data().isDone,
                  isArchived: doc.data().isArchived,
                  endDate: doc.data().endDate,
                  owner: doc.data().owner
                })
              }
              if (change.type === 'removed') {
                this.tasks.pop()
              }
            })
          })

        db.collection('users')
          .get()
          .then(snapshot => {
            if (snapshot.empty) {
              console.log('null')
              return
            }
            snapshot.forEach(doc => {
              this.users.push({
                id: doc.id,
                name: doc.data()['name'],
                email: doc.data()['email'],
                role: doc.data()['role'],
              })
            })
          })
          .catch(err => {
            console.log('error:', err)
          })
      }
    })
  },
  components: {
    Navbar
  },
}
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
