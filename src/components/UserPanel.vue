<template>
    <div>
      <h1 class="mx-auto p-5">Liste des utilisateurs</h1>
      <h3 v-for="user in users" :key="user.id">{{ user }}</h3>
<!--      <b-table striped hover v-for="user in users" :key="user.id" class="mx-auto my-3 w-75">-->
<!--        {{ user }}-->
<!--      </b-table>-->
    </div>
</template>

<script>/* eslint-disable */
import db from '../../static/js/db.js'
  export default {
    name: 'UserPanel',
    props: ['users'],
  }
</script>

<style scoped>
  h1 {
    font-size: 50px;
  }
</style>
