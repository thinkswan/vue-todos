<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @delete-item="$emit('delete-item', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  props: ["todos"],
  components: { TodoItem }
};
</script>

<style scoped></style>
