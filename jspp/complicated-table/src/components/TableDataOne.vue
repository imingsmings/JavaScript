<template>
  <tr v-for="n in data.head.length">
    <th v-if="n === 1" :rowspan="data.head.length">{{ data.title }}</th>
    <th>{{ data.head[n - 1] }}</th>
    <td 
      v-for="m in data.cols - 3"
      :key="m"
    ></td>
    <template v-if="n === 1">
      <td
        v-for="k in 2"
        :key="k"
        :rowspan="data.head.length"
      ></td>
    </template>
  </tr>
</template>

<script setup>
  const props = defineProps({
    data: Object
  })
</script>

<style lang="scss" scoped>

</style>