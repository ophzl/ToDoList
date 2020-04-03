<template>
  <div>
    <form class="mt-3" @submit.prevent="register">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">S'inscrire</h3>
                <div class="form-row">
                  <div v-if="error" class="col-12 alert alert-danger px-3">{{ error }}</div>
                  <section class="col-sm-12 form-group">
                    <label class="form-control-label sr-only" for="displayName">Votre nom</label>
                    <input
                      class="form-control"
                      type="text"
                      id="displayName"
                      placeholder="Votre nom"
                      name="displayName"
                      required
                      v-model="displayName"
                    />
                  </section>
                </div>
                <section class="form-group">
                  <label class="form-control-label sr-only" for="email">Email</label>
                  <input
                    class="form-control"
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required
                    name="email"
                    v-model="email"
                  />
                </section>
                <div class="form-row">
                  <section class="col-sm-6 form-group">
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Mot de passe"
                      v-model="passOne"
                    />
                  </section>
                  <section class="col-sm-6 form-group">
                    <input
                      class="form-control"
                      type="password"
                      required
                      placeholder="Confirmer votre mot de passe"
                      v-model="passTwo"
                    />
                  </section>
                </div>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit">S'incrire</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      ou
      <router-link to="/login">se connecter</router-link>
    </p>
  </div>
</template>
<script>/* eslint-disable */
import Firebase from 'firebase'
import db from '../../static/js/db'

export default {
  props: ['addUser', 'addUserToDB'],
  data: function () {
    return {
      displayName: null,
      email: null,
      passTwo: null,
      error: null
    }
  },
  methods: {
    // Register function with firebase authentication
    register: function () {
      const info = {
        email: this.email,
        password: this.passOne,
        displayName: this.displayName
      }
      if (!this.error) {
        Firebase.auth()
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(userCredentials => {
            return userCredentials.user.updateProfile({
              displayName: info.displayName,
            }).then(() => {
              // db.collection('users')
              //   .add({
              //       name: info.displayName,
              //       email: info.email
              //     })
              this.$router.replace('/')
            })
          }, error => {
            this.error = error.message
          })
      }
    }
  },
  watch: {
    // This function permits to check if passwords are corresponding
    passTwo: function () {
      if (this.passOne !== '' && this.passTwo !== '' && this.passTwo() !== this.passOne) {
        this.error = 'passwords must match'
      } else {
        this.error = null
      }
    }
  }
}
</script>
