<template>
  <ul class="todo-list">
    <li 
      v-for="item of store.getters.getFilteredTodoList" 
      :key="item.id"
      :class="['todo-item', {done: item.done}]"
      >
      <span> {{ item.text }}</span>
      <button @click="toggleToDo(item.id)">Done</button>
      <button @click="removeToDo(item.id)">Delete</button>
    </li>
  </ul>
</template>
  
<script setup>
import { useStore } from 'vuex'

const store = useStore();

const toggleToDo = (id) => {
  store.commit('toggleTodo', id);
}

const removeToDo = (id) => {
  store.commit('removeTodo', id);
}

</script>

<style lang="scss" scoped>
.todo-list{
  padding: 0;
  margin: 0;
  list-style: none;
  cursor: pointer;
  .todo-item{
    &.done{
      text-decoration: line-through;
    }
  }
}
</style>