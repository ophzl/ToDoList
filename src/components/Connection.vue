<template>
  <div>
    <div id="firebaseui-auth-container"/>
  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'connection',
  props: ['connection'],
  data () {
    // Firebase data
    var firebaseConfig = {
      apiKey: 'AIzaSyC53DXhOnk58pcVdilxcEQfEWsJL3BoF6A',
      authDomain: 'jsproject-c76a3.firebaseapp.com',
      databaseURL: 'https://jsproject-c76a3.firebaseio.com',
      projectId: 'jsproject-c76a3',
      storageBucket: 'jsproject-c76a3.appspot.com',
      messagingSenderId: '65332872842',
      appId: '1:65332872842:web:7312cb958ee9153bd98f73'
    }

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: 'http://localhost:8080/',
      'credentialHelper': firebaseui.auth.CredentialHelper.NONE
    })

    // Firebase authentication
    $(document).ready(function () {
      firebase.auth().onAuthStateChanged(function (user) {
        console.log(user.metadata.creationTime)
        if (user) {
          localStorage.setItem('user', JSON.stringify({'email': user.email, 'name': user.displayName, 'creationTime': user.metadata.creationTime, 'lastSignIn': user.metadata.lastSignInTime}))
          user.getIdToken().then(function () {
            console.log('connected')
            $('logout').removeClass('d-none')
          })
        } else {
          $('logout').addClass('d-none')
          localStorage.setItem('user', null)
          console.log('disconnected')
        }
      }, function (error) {
        console.log(error)
      })
    })

    return {
      firebase,
      firebaseui,
      ui
    }
  }
}
</script>

<style scoped>

</style>
