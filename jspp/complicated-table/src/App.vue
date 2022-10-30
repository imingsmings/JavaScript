<template>
  <div>
    <table border="1" cellpadding="0" width="100%">
      <table-head :data="tableHeadData"></table-head>
      <table-data-one :data="tableData1"></table-data-one>
    </table>
  </div>
</template>

<script setup>
  import TableHead from './components/TableHead';
  import TableDataOne from './components/TableDataOne';
  import tableHeadData from './data/tableHead';
  import tableData1 from './data/tableData1';
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
</style>