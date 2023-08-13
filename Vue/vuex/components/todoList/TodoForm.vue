<template>
 <div>
  <input type="text" placeholder="Please input todo ..." v-model="text">
  <button @click="addToDo">Add</button>
 </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const text = ref('')

const addToDo = () => {
  if (!text.value) return;
  
  store.dispatch('addToDo', text.value)
  text.value = ''
}

</script>