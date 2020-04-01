<template>
  <div class="ui basic content center aligned segment">
    <button class="ui basic button icon" @click="openForm" v-show="!isCreating">
      <i class="plus icon"></i>
    </button>
    <div class="ui centered card" v-show="isCreating">
      <div class="content">
        <div class="ui form">
          <form @submit="addTodo">
            <div class="field">
              <label>Titre</label>
              <input v-model="title" type="text" name="title">
            </div>
            <div class="field">
              <label>Description</label>
              <input v-model="desc" type='text' ref='desc'>
            </div>
<!--            <div class="field">-->
<!--              <label>Collaborateur</label>-->
<!--              <input type="text" v-model="owner" ref='owner'>-->
<!--            </div>-->
            <div class="field">
              <label>Date de fin</label>
              <b-form-datepicker v-model="remindDate" class="mb-2" locale="fr-FR"></b-form-datepicker>
            </div>
            <div class="ui two button attached buttons">
              <button class="ui basic blue button" type="submit">
                Créer
              </button>
              <button class="ui basic red button" type="reset" @click="closeForm">
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */
  // import uuid from 'uuid';
  export default {
    name: 'AddTodo',
    data() {
      return {
        title: '',
        desc: '',
        remindDate: '',
        isCreating: false
      }
    },
    methods: {
      // Display creation form
      openForm() {
        this.isCreating = true;
      },
      // Close creation form
      closeForm() {
        this.isCreating = false;
      },
      // Add a task
      addTodo(e) {
        e.preventDefault();
        const newTodo = {
          title: this.title,
          description: this.desc,
          done: false,
          remindDate: this.remindDate,
          archived: false,
          // TODO: Add owner
        };
        this.$emit('add-todo', newTodo);
        this.title = '';
        this.desc = '';
        this.remindDate = '';
        location.reload()
      }
    }
  }
</script>

<style scoped>

</style>
