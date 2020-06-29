<template>
  <div id="app">
    <Header />
    <TodoList :todos="todos" @delete-item="deleteItem" />
  </div>
</template>

<script>
import Header from "./components/layouts/Header";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: { Header, TodoList },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo one",
          completed: false
        },
        {
          id: 2,
          title: "Todo two",
          completed: true
        },
        {
          id: 3,
          title: "Todo three",
          completed: false
        }
      ]
    };
  },
  methods: {
    deleteItem(id) {
      this.todos = this.todos.filter(item => item.id !== id);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
