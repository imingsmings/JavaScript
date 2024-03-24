<template>
<div class="flex">
  <my-button type="default" @click="handleClick">Default</my-button>
  <my-button type="primary">Primarg</my-button>
  <my-button type="success">Success</my-button>
  <my-button type="info">Info</my-button>
  <my-button type="danger">Danger</my-button>
  <my-button type="warning">Warning</my-button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  methods: {
    handleClick (e: MouseEvent) {
      console.log(e)
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.flex {
  width: 800px;
  display: flex;
  justify-content: space-evenly;
}
</style>
