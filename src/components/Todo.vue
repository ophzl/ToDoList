<template>
  <div class='ui centered card'>
    <div class="content" v-show="!isEditing">
      <div class='header'>
        {{ todo.title }}
      </div>
      <div class='meta'>
        {{ todo.description }}
      </div>
      <div class='meta'>
        Date de fin : {{ todo.remindDate }}
      </div>
      <div class='extra content'>
        <span class='right floated trash icon' v-on:click="deleteTodo(todo)">
          <i class='trash icon'></i>
        </span>
        <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <form @submit="editTodo(todo)">
        <div class='ui form'>
          <div class='field'>
            <label>Titre</label>
            <input type='text' v-model="todo.title">
          </div>
          <div class='field'>
            <label>Description</label>
            <input type='text' v-model="todo.description">
          </div>
          <div class='field'>
            <label>Choose a date</label>
            <b-form-datepicker v-model="remindDate" class="mb-2"></b-form-datepicker>
          </div>
        </div>
      </form>
    </div>
    <div class="mx-auto">
      <b-checkbox v-show="isEditing" value="true">Evenement important</b-checkbox>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing && todo.done" @click="uncompleteTodo(todo)">
      Terminé
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !todo.done" @click="completeTodo(todo)">
      En attente
    </div>
    <button class='ui basic green button' v-show="isEditing" @click="editTodo(todo)">Enregistrer</button>
  </div>
</template>

<script type="text/javascript">/* eslint-disable */

export default {
  name: 'Todo',
  props: ['todo'],
  data () {
    return {
      // STATES
      isEditing: false,
      isHidden: true,
      remindDate: '',
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    editTodo (todo) {
      this.$emit('edit-todo', todo)
      this.isEditing = false
    },
    deleteTodo (todo) {
      this.$emit('delete-todo', todo)
    },
    completeTodo (todo) {
      this.$emit('complete-todo', todo)
    },
    uncompleteTodo (todo) {
      this.$emit('uncomplete-todo', todo)
    },
  },
}
</script>

<style scoped>

</style>
