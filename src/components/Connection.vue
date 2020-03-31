<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" id="emailp" aria-describedby="emailHelp" required>
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
      </div>
      <div class="form-group">
        <label>Mot de passe</label>
        <input type="password" class="form-control" id="passwordp">
      </div>
      <!-- <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->
      <button class="btn btn-primary" id="btnLogin">Connexion</button>
      <button class="btn btn-primary" id="btnRegister">Inscription</button>
    </div>
  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'login',
  props: ['login']
}
</script>

<style scoped>

</style>
