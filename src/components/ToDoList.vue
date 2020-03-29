<template>
  <div>
    <todo v-on:delete-todo="deleteTodo" v-bind:key="todo.id" v-for="todo in todos"
          v-bind:todo="todo"></todo>
  </div>
</template>

<script type="text/javascript">
  import Todo from './Todo'

  export default {
    name: 'todos',
    props: ['todos'],
    components: {
      Todo,
    },
    methods: {
      deleteTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
      },
      completeTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos[todoIndex].done = true;
        alert('Done')
      }
    }
  }
</script>

<style scoped>

</style>
