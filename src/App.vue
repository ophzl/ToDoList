<template>
  <div id="app">
    <ToDoList v-bind:todos="todos"/>
    <CreateTodo v-on:add-todo="addTodo"/>
  </div>
</template>

<script>
  import ToDoList from "./components/ToDoList";
  import CreateTodo from "./components/CreateTodo";

  export default {
    name: 'app',
    components: {
      ToDoList,
      CreateTodo,
    },
    data() {
      let returnedObject = [];
      for (let key in localStorage) {
        if (key.includes('todo')) {
          let jsonString = localStorage.getItem(key);
          returnedObject.push(JSON.parse(jsonString));
        }
      }

      console.log(returnedObject)

      return {
        todos: returnedObject
      }
    },
    methods: {
      addTodo(newTodo) {
        localStorage.setItem('todo-' + localStorage.length, JSON.stringify(newTodo));
        this.todos = [...this.todos, newTodo];
      },
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
