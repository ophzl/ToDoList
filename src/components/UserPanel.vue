<template>
    <div>
      <h1 class="mx-auto p-5">Liste des utilisateurs</h1>
      <b-table striped hover :items="users" class="mx-auto my-3 w-75"/>
    </div>
</template>

<script>/* eslint-disable */
  export default {
    name: 'UserPanel',
    data () {
      // TODO: add users in db
      let users =  [
        { name: 'Ophélie ZEITEL', email: 'opheliezeitel@gmail.com'},
        { name: 'Florian LEROUX', email: 'florian.leroux3@laposte.fr'}
      ]

      return {
        users
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 50px;
  }
</style>
