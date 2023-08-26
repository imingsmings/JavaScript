<template>
  <base-list
    class="home-list"
    title="主页列表"
    :columns="columns"
    :data-source="dataSource"
    :operations="operations"
    :buttons="buttons"
    :search="true"
    @handleSearch="handleSearch"
  >
    <template v-slot:search>
      编号:<a-input
        :style="{ width: '200px' }"
        placeholder="请输入关键字"
        v-model="queryParam.text"
      />
      选择:<a-select
        default-value="lucy"
        style="width: 120px"
        v-model="queryParam.name"
      >
        <a-select-option value="jack"> Jack </a-select-option>
        <a-select-option value="lucy"> Lucy </a-select-option>
        <a-select-option value="Yiminghe"> yiminghe </a-select-option>
      </a-select>
    </template>
  </base-list>
</template>

<script>
import BaseList from './BaseList.vue';
export default {
  name: 'HomeList',
  components: {
    BaseList,
  },
  data() {
    return {
      queryParam: {
        text: '',
        name: '',
      },
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
          key: 'restore',
          title: '恢复',
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
          key: 'merge',
          title: '合并报价',
          handler: this.handleMergePrice,
        },
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
    handleMergePrice(ids) {
      console.log(ids);
    },
    handleBatchDelete(ids) {
      console.log(ids);
    },
    handleSearch(type) {
      switch (type) {
        case 'query':
          this.dataSource = this.dataSource.filter((item) =>
            item.name.includes(this.queryParam.text)
          );
          break;
        case 'reset':
          console.log(this.queryParam.name);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style></style>
