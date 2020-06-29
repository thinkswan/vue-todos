<template>
  <div id="app">
    <AddTodo @add-item="addItem" />
    <TodoList :todos="todos" @delete-item="deleteItem" />
  </div>
</template>

<script>
import axios from "axios";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

const API_BASE = "https://jsonplaceholder.typicode.com/todos";

export default {
  name: "Home",
  components: { AddTodo, TodoList },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    async addItem(newTodo) {
      try {
        const { title, completed } = newTodo;

        const response = await axios.post(API_BASE, {
          title,
          completed
        });

        this.todos = [...this.todos, response.data];
      } catch (error) {
        console.error(error);
      }
    },

    async deleteItem(id) {
      try {
        await axios.delete(`${API_BASE}/${id}`);

        this.todos = this.todos.filter(item => item.id !== id);
      } catch (error) {
        console.error(error);
      }
    }
  },
  async created() {
    try {
      const response = await axios.get(`${API_BASE}?_limit=5`);

      this.todos = response.data;
    } catch (error) {
      console.error(error);
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
