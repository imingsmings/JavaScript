<template>
  <tr 
    v-for="n in data.length"
    :key="n"
  >
    <template
      v-for="(colData, index) of data[ n - 1 ]"
      :key="index"
    >
      <th 
        v-if="colData !== ''"
        :rowspan="colData.rowspan"
        :colspan="colData.colspan"
      >
        {{ colData.title }}
      </th>
    </template>
  </tr>
</template>

<script setup>
  const props = defineProps({
    data: Array
  })
</script>

<style lang="scss" scoped>

</style>