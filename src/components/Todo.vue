<template>
  <div class="ui centered card">
    <div class="content" v-show="!isEditing">
      <div class="header">
        {{ todo.title }}
      </div>
      <div class="meta">
        {{ todo.description }}
      </div>
      <div v-show="todo.remindDate" class="meta mt-2">
        Date de fin : {{ todo.remindDate }}
      </div>
      <div class="extra content mt-4">
        <a class="right floated twitter icon"
           v-bind:href="'https://twitter.com/intent/tweet?text=Nouvel%20évenement%20:%20' + todo.title"
           v-if="!todo.archived">
          <i class="twitter icon"></i>
        </a>
        <span class="right floated trash icon" @click="deleteTodo(todo)" v-if="!todo.archived">
          <i class="trash icon"></i>
        </span>
        <span class="right floated archive icon" @click="archiveTodo(todo)" v-if="!todo.archived">
          <i class="archive icon"></i>
        </span>
        <span class="right floated edit icon" @click="showForm" v-if="!todo.archived">
          <i class="edit icon"></i>
        </span>
      </div>
    </div>
    <!--    Edition form-->
    <div class="content" v-show="isEditing">
      <form @submit="editTodo(todo)">
        <div class="ui form">
          <div class="field">
            <label>Titre</label>
            <input type="text" v-model="todo.title">
          </div>
          <div class="field">
            <label>Description</label>
            <input type='text' v-model="todo.description">
          </div>
<!--          <div class="field">-->
<!--            <label>Collaborateur</label>-->
<!--            <b-form-select/>-->
<!--          </div>-->
          <div class="field">
            <label>Date de fin</label>
            <b-form-datepicker v-model="todo.remindDate" class="mb-2" :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }"
                               locale="fr"></b-form-datepicker>
          </div>
        </div>
      </form>
    </div>
    <div class="ui bottom attached green basic button" v-if="!todo.archived" v-show="!isEditing && todo.done" @click="uncompleteTodo(todo)">
      Terminé
    </div>
    <div class="ui bottom attached red basic button" v-if="!todo.archived" v-show="!isEditing && !todo.done" @click="completeTodo(todo)">
      En attente
    </div>
    <div class="ui bottom attached yellow basic button" v-if="todo.archived" v-show="!isEditing" @click="unarchiveTodo(todo)">
      Archivé
    </div>
    <button class="ui basic green button" v-show="isEditing" @click="editTodo(todo)">Enregistrer</button>
  </div>
</template>

<script type="text/javascript">/* eslint-disable */

export default {
  name: 'Todo',
  props: ['todo'],
  data () {
    let remindDate = ''

    return {
      // STATES
      isEditing: false,
      isHidden: true,
      remindDate
    }
  },
  methods: {
    // Show edition form
    showForm () {
      this.isEditing = true
    },
    // Edit a task
    editTodo (todo) {
      this.$emit('edit-todo', todo)
      this.isEditing = false
    },
    // Archive a task
    archiveTodo (todo) {
      this.$emit('archive-todo', todo)
    },
    // Unarchive a task
    unarchiveTodo (todo) {
      this.archived = false
      this.$emit('unarchive-todo', todo)
    },
    // Delete a task
    deleteTodo (todo) {
      this.$emit('delete-todo', todo)
    },
    // Mark a task as complete
    completeTodo (todo) {
      this.$emit('complete-todo', todo)
    },
    // Mark a task as not complete
    uncompleteTodo (todo) {
      this.$emit('uncomplete-todo', todo)
    },
  },
}
</script>

<style scoped>

</style>
