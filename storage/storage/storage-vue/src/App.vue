<script setup>
import { useStore } from 'vuex';
import { useCounter, useTitle } from './store/pinia';
const vuexStore = useStore();
const counter = useCounter();
const title = useTitle();
</script>

<template>
<div>
  <h1>Vuex store</h1>
  <p>{{ vuexStore.state.counter.count }}</p>
  <button @click="vuexStore.commit('add')">+</button>
  <button @click="vuexStore.commit('minus')">-</button>
  <p>{{ vuexStore.state.title.text }}</p>
  <button @click="vuexStore.commit('setTitle')">SET</button>
  <hr>
  <h1>Pinia store</h1>
  <p>{{ counter.count }}</p>
  <button @click="counter.add">+</button>
  <button @click="counter.minus">-</button>
  <p>{{ title.text }}</p>
  <button @click="title.setTitle">SET</button>
</div>
</template>
