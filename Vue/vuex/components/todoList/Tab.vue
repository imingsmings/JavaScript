<template>
  <ul class="tab-list" @click="filterToDo">
    <li 
        :class="['tab-item', {active: item.value === store.state.filter}]"
        v-for="item of filterTypes" 
        :key="item.value" 
        :data-key="item.value"
      >
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore();

const filterTypes = [
  {
    name: 'All',
    value: 'all'
  },
  {
    name: 'Active',
    value: 'active'
  },
  {
    name: 'Completed',
    value: 'completed'
  }
]

const filterToDo = (e) => {
  store.commit('setFilter', e.target.dataset.key);
}
</script>

<style lang="scss" scoped>
.tab-list{
  padding: 0;
  margin: 0;
  list-style: none;
  cursor: pointer;
  display: flex;
  .tab-item{
    color: #fff;
    padding: 10px 20px;
    background-color: aqua;
    &.active{
      background-color: green;
    }
  }
}
</style>