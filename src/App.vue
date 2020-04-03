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

      taskID: ''
    }
  },
  methods: {
    // Function to logout with firebase authentication
    logout: function () {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null
          this.$router.push('/login')
          console.log('disconnected')
        })
    },

    // Event called in ToDoList.vue which let user to add a task with its values by its uid
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

    // Function send new values in DB when a task is updated
    editTask: function (task) {
      db.collection('users')
        .doc(this.user.id)
        .collection('tasks')
        .doc(task)
    },

    // Function to delete a task from DB
    deleteTask: function (task) {
      db.collection('users')
        .doc(this.user.uid)
        .collection('tasks')
        .doc(task)
        .delete()
    }
  },
  mounted () {
    // Condition to charge data only if user is logged in
    Firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.user = user

          // Get data in firebase auth and set it into DB by the uid of a user
          db.collection('users')
            .doc(this.user.uid)
            .set({
              name: this.user.displayName,
              email: this.user.email,
              role: 'member'
            })

          // Display tasks in DOM
          db.collection('users')
            .doc(this.user.uid)
            .collection('tasks')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                  let doc = change.doc
                  // When a task is added
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
                  // When a task is updated
                  if (change.type === 'modified') {
                    for (let key in this.tasks) {
                      if (this.tasks[key].id !== doc.id) {
                        console.log('retry')
                      } else {
                        this.tasks.splice(key, 1)
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
                    }
                  }
                  // When a task is removed
                  if (change.type === 'removed') {
                    for (let key in this.tasks) {
                      if (this.tasks[key].id !== doc.id) {
                        console.log('retry')
                      } else {
                        this.tasks.splice(key, 1)
                      }
                    }
                  }
                })
              }
            )

          // Get users data
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
      }
    )
  },
  components: {
    Navbar
  }
  ,
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
