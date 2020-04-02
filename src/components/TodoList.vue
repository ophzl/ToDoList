<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <div class="ui centered card mt-5">
        <div class="content" v-show="!isEditing">
          <div class="header">
            {{ task.title }}
          </div>
          <div class="meta">
            {{ task.description }}
          </div>
          <div v-show="task.endDate" class="meta mt-2">
            Date de fin : {{ task.endDate }}
          </div>
          <div class="extra content mt-4">
            <a class="right floated twitter icon"
               v-bind:href="'https://twitter.com/intent/tweet?text=Nouvel%20évenement%20:%20' + taskTitle">
              <i class="twitter icon"></i>
            </a>
            <span class="right floated trash icon" @click="$emit('deleteTask', task.id)">
              <i class="trash icon"></i>
            </span>
            <span class="right floated archive icon">
              <i class="archive icon"></i>
            </span>
            <span class="right floated edit icon" @click="showForm">
              <i class="edit icon"></i>
            </span>
          </div>
        </div>
        <div class="ui bottom attached green basic button" v-show="!isEditing && task.isDone">
          Terminé
        </div>
        <div class="ui bottom attached red basic button" v-show="!isEditing && !task.isDone">
          En attente
        </div>
        <div class="ui bottom attached yellow basic button" v-if="task.isArchived" v-show="!isEditing">
          Archivé
        </div>
      </div>
      <!--    Edition form-->
      <div class="ui centered card mt-5">
        <div class="content" v-show="isEditing">
          <form>
            <div class="ui form">
              <div class="field">
                <label>Titre</label>
                <input type="text" v-model="task.title">
              </div>
              <div class="field">
                <label>Description</label>
                <input type='text' v-model="task.description">
              </div>
              <!--          <div class="field">-->
              <!--            <label>Collaborateur</label>-->
              <!--            <b-form-select/>-->
              <!--          </div>-->
              <!--            <div class="field">-->
              <label>Date de fin</label>
              <b-form-datepicker v-model="task.endDate" class="mb-2"
                                 :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }"
                                 locale="fr"></b-form-datepicker>
            </div>
          </form>
        </div>
        <button class="ui basic green button " v-show="isEditing" @click="editTask(task.id)">Enregistrer</button>
      </div>
    </div>

    <!--    Create task-->
    <div class="ui basic content center aligned segment">
      <button class="ui basic button icon" @click="openForm" v-show="!isCreating">
        <i class="plus icon"></i>
      </button>
      <div class="ui centered card" v-show="isCreating">
        <div class="content">
          <div class="ui form">
            <form>
              <div class="field">
                <label>Titre</label>
                <input v-model="task.title" type="text" name="title" ref="taskTitle">
              </div>
              <div class="field">
                <label>Description</label>
                <input v-model="task.desccription" type="text" ref="taskDesc">
              </div>
              <!--              <div class="field">-->
              <!--                <label>Collaborateur</label>-->
              <!--                <input type="text" v-model="taskOwner" ref="taskOwner">-->
              <!--              </div>-->
              <div class="field">
                <label>Date de fin</label>
                <b-form-datepicker v-model="taskEndDate" ref="taskEndDate" class="mb-2"
                                   locale="fr-FR"></b-form-datepicker>
              </div>
              <div class="ui two button attached buttons">
                <button class="ui basic blue button" type="submit" @click="handleAdd">
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
  </div>
</template>

<script>/* eslint-disable */
import db from '../../static/js/db'

export default {
  name: 'TodoList',
  props: ['user', 'tasks'],
  data () {
    return {
      taskTitle: null,
      taskDesc: null,
      // taskOwner: null,
      taskEndDate: null,
      taskIsDone: null,
      taskIsArchived: null,

      isEditing: false,
      isHidden: true,
      isCreating: false
    }
  },
  methods: {
    editTask: function(task) {
      const ref = db.collection('users')
      .doc(this.user.id)
      .collection('tasks')
      .doc(task)

      ref.get().then( doc => {
        const title = doc.data().title
        const description = doc.data().description
        const endDate = doc.data().endDate
        const isDone = doc.data().isDone
        const isArchived = doc.data().isArchived
        ref.update({
          title: title,
          description: description,
          endDate: endDate,
          isDone: isDone,
          isArchived: isArchived
        })
      })
    },

    handleAdd: function () {
      this.$emit('addTask', this.taskTitle, this.taskDesc, this.taskEndDate, this.taskIsDone, this.taskIsArchived)
      this.taskTitle = null
      this.taskDesc = null
      // this.taskOwner = null
      this.taskEndDate = null
      this.taskIsDone = null
      this.taskIsArchived = null

      this.$refs.taskTitle.focus()
      this.$refs.taskDesc.focus()
      // this.$refs.taskOwner.focus()
      this.$refs.taskEndDate.focus()
    },

    // Show edition form
    showForm () {
      this.isEditing = true
    },
    // Edit a task
    editTodo (todo) {
      this.$emit('edit-todo', todo)
      this.isEditing = false
    },
    openForm () {
      this.isCreating = true
    },
    // Close creation form
    closeForm () {
      this.isCreating = false
    },
  }
}
</script>

<style scoped>
  .column {
    width: 20%;
    height: 100%;
    background: #eee;
    /*margin: 5%;*/
  }

  h1 {
    font-size: 50px;
  }
</style>
