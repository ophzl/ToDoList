<template>
  <div>
    <ErrorMsg v-if="!user"/>
    <div v-if="user">
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
            <div v-show="task.owner" class="meta mt-2">
              Assigné à : {{ task.owner }}
            </div>
            <div class="extra content mt-4">
              <a class="right floated twitter icon"
                 v-bind:href="'https://twitter.com/intent/tweet?text=Nouvel%20évenement%20:%20' + task.title" target="_blank">
                <i class="twitter icon"></i>
              </a>
              <span class="right floated trash icon" @click="$emit('deleteTask', task.id)">
              <i class="trash icon"></i>
            </span>
              <span class="right floated archive icon" @click="isArchived(task.id)">
              <i class="archive icon"></i>
            </span>
              <span class="right floated edit icon" @click="openEditForm()">
              <i class="edit icon"></i>
            </span>
            </div>
          </div>
          <div class="ui bottom attached green basic button" v-show="!isEditing && task.isDone && !task.isArchived"
               @click="isDone(task.id)">
            Terminé
          </div>
          <div class="ui bottom attached red basic button" v-show="!isEditing && !task.isDone && !task.isArchived"
               @click="isDone(task.id)">
            En attente
          </div>
          <div class="ui bottom attached yellow basic button" v-if="task.isArchived" v-show="!isEditing"
               @click="isArchived(task.id)">
            Archivé
          </div>
        </div>

        <!--    Edition form-->
        <div class="ui centered card mt-5" v-show="isEditing">
          <div class="content">
            <form>
              <div class="ui form">
                <div class="field">
                  <label>Titre</label>
                  <input type="text" v-model="task.title" ref="newTitle" required>
                </div>
                <div class="field">
                  <label>Description</label>
                  <input type='text' v-model="task.description" ref="newDesc" required>
                </div>
                <div class="field">
                  <label>Assigner cette tâche à :</label>
                  <select type="text" v-model="task.owner" ref="taskOwner" required>
                    <option v-for="user in users" :key="user.id" :value="user.name">{{ user.name }} ({{ user.email }})</option>
                  </select>
                </div>
                <div class="field">
                  <label>Date de fin</label>
                  <b-form-datepicker v-model="task.endDate" class="mb-2"
                                     :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }"
                                     locale="fr" required></b-form-datepicker>
                </div>
              </div>
            </form>
          </div>
          <button class="ui basic green button " v-show="isEditing" @click="editTask(task)">Enregistrer</button>
        </div>
      </div>

      <!--    Create task-->
      <div class="ui basic content center aligned segment">
        <button class="ui basic button icon" @click="openForm" v-show="!isCreating">
          <i class="plus icon"></i> Ajouter une tâche
        </button>
        <div class="ui centered card" v-show="isCreating">
          <div class="content">
            <div class="ui form">
              <form>
                <div class="field">
                  <label>Titre</label>
                  <input v-model="taskTitle" type="text" name="title" ref="taskTitle" required>
                </div>
                <div class="field">
                  <label>Description</label>
                  <input v-model="taskDesc" type="text" ref="taskDesc" required>
                </div>
                <div class="field">
                  <label>Assigner cette tâche à :</label>
                  <select type="text" v-model="taskOwner" ref="taskOwner" id="taskOwner">
                    <option v-for="user in users" :key="user.id" :value="user.name">{{ user.name }} ({{ user.email }})</option>
                  </select>
                </div>
                <div class="field">
                  <label>Date de fin</label>
                  <b-form-datepicker v-model="taskEndDate" ref="taskEndDate" class="mb-2"
                                     locale="fr-FR" required></b-form-datepicker>
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
  </div>
</template>

<script>/* eslint-disable */
import db from '../../static/js/db'
import Swal from 'sweetalert2'
import ErrorMsg from './ErrorMsg'

export default {
  name: 'TodoList',
  components: {ErrorMsg},
  props: ['user', 'tasks'],
  data () {
    return {
      taskTitle: null,
      taskDesc: null,
      taskOwner: null,
      taskEndDate: null,
      taskIsDone: null,
      taskIsArchived: null,

      users: [],

      isEditing: false,
      isHidden: true,
      isCreating: false
    }
  },
  methods: {
    isArchived: function (taskID) {
      if (this.user) {
        const ref = db.collection('users')
          .doc(this.user.uid)
          .collection('tasks')
          .doc(taskID)

        ref.get().then(doc => {
          const isArchived = doc.data().isArchived
          if (isArchived) {
            ref.update({
              isArchived: !isArchived
            })
          } else {
            ref.update({
              isArchived: true
            })
          }
        })
      }
    },

    isDone: function (taskID) {
      if (this.user) {
        const ref = db.collection('users')
          .doc(this.user.uid)
          .collection('tasks')
          .doc(taskID)

        ref.get().then(doc => {
          const isDone = doc.data().isDone
          if (isDone) {
            ref.update({
              isDone: !isDone
            })
          } else {
            ref.update({
              isDone: true
            })
          }
        })
      }
    },

    editTask: function (task) {
      if (this.user) {
        const ref = db.collection('users')
          .doc(this.user.uid)
          .collection('tasks')
          .doc(task.id)

        ref.get().then(doc => {
          const title = task.title
          const desc = task.description
          const endDate = task.endDate
          const owner = task.owner
          ref.update({
            title: title,
            description: desc,
            endDate: endDate,
            owner: owner
          })
        })
        this.isEditing = false
      }
    },

    handleAdd: function () {
      this.$emit('addTask', this.taskTitle, this.taskDesc, this.taskOwner, this.taskEndDate, this.taskIsDone, this.taskIsArchived)
      this.taskTitle = null
      this.taskDesc = null
      this.taskOwner = null
      this.taskEndDate = null
      this.taskIsDone = null
      this.taskIsArchived = null

      this.$refs.taskTitle.focus()
      this.$refs.taskDesc.focus()
      this.$refs.taskOwner.focus()
      this.$refs.taskEndDate.focus()

      console.log('handleAdd', this.taskOwner)
    },

    openEditForm () {
      this.isEditing = true
    },
    openForm () {
      this.isCreating = true
    },
    // Close creation form
    closeForm () {
      this.isCreating = false
    },
  },
  mounted () {
    db.collection('users')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('null')
          return
        }
        snapshot.forEach(doc => {
          this.users.push({
            id: doc.id,
            name: doc.data()['name'],
            email: doc.data()['email'],
          })
        })
      })
      .catch(err => {
        console.log('error:', err)
      })
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
