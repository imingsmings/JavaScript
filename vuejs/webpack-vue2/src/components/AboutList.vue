<template>
  <base-list
    class="about-list"
    title="关于列表"
    :columns="columns"
    :data-source="dataSource"
    :operations="operations"
    :buttons="buttons"
  />
</template>

<script>
import BaseList from './BaseList.vue';
export default {
  name: 'AboutList',
  components: {
    BaseList,
  },
  data() {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Action',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      dataSource: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
      ],
      operations: [
        {
          key: 'quick',
          title: '快速报价',
          handler: this.handleQuickPrice,
        },
        {
          key: 'delete',
          title: '删除',
          handler: this.handleDelete,
        },
      ],
      buttons: [
        {
          key: 'delete',
          title: '批量删除',
          handler: this.handleBatchDelete,
        },
      ],
    };
  },
  methods: {
    handleQuickPrice(record) {
      console.log(record);
    },
    handleDelete(record) {
      this.dataSource = this.dataSource.filter(
        (item) => item.key !== record.key
      );
    },
    handleBatchDelete(ids) {
      console.log(ids);
    },
  },
};
</script>

<style></style>
