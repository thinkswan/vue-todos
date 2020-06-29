<template>
  <div id="app">
    <Header />
    <AddTodo @add-item="addItem" />
    <TodoList :todos="todos" @delete-item="deleteItem" />
  </div>
</template>

<script>
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: { Header, AddTodo, TodoList },
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
    addItem(newTodo) {
      this.todos = [...this.todos, newTodo];
    },

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

.button {
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.button:hover {
  background-color: #666;
}
</style>
