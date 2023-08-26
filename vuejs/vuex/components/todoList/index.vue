<template>
  <div>
    <TodoForm />
    <TodoTab />
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
import TodoTab from './Tab.vue'
</script>