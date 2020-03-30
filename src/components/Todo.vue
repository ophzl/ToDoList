<template>
  <div class='ui centered card'>
    <div class="content" v-show="!isEditing">
      <div class='header'>
        {{ todo.title }}
      </div>
      <div class='meta'>
        {{ todo.description }}
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
      <div class='ui form'>
        <div class='field'>
          <label>Titre</label>
          <input type='text' v-model="todo.title">
        </div>
        <div class='field'>
          <label>Description</label>
          <input type='text' v-model="todo.description">
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' @click="editForm(todo)">
            Fermer
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing && todo.done" @click="uncompleteTodo(todo)">
      Terminé
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !todo.done" @click="completeTodo(todo)">
      En attente
    </div>
  </div>
</template>

<script type="text/javascript">/* eslint-disable */
export default {
  name: 'Todo',
  props: ['todo'],
  data () {

    return {
      isEditing: false,
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    editForm (todo) {
      this.isEditing = false
      this.$emit('edit-todo', todo)
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
  }
}
</script>

<style scoped>

</style>
