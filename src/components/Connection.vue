<template>
  <div class="card mx-auto my-5" style="width: 25rem">
    <div class="card-body">
      <h1>Se connecter / S'inscrire</h1>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" id="emailp" aria-describedby="emailHelp" required>
      </div>
      <div class="form-group">
        <label>Mot de passe</label>
        <input type="password" class="form-control" id="passwordp">
      </div>
      <button class="btn btn-primary" id="btnLogin">Connexion</button>
      <button class="btn btn-primary" id="btnRegister">Inscription</button>
    </div>
  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'connection',
  props: ['connection'],
}
</script>

<style scoped>

</style>
