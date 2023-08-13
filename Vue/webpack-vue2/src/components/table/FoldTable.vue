<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :row-selection="rowSelection"
    :expanded-row-keys.sync="expandedRowKeys"
  >
    <div
      class="input"
      slot="input"
      slot-scope="text, record"
      v-if="text !== undefined"
    >
      <span class="minus" @click="handleInput(record, -1)">-</span>
      <a-input
        type="number"
        :value="text"
        @change="onChange(record, $event.target.value)"
      />
      <span class="add" @click="handleInput(record, 1)">+</span>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
  },
  {
    title: '单位',
    dataIndex: 'unit',
    key: 'unit',
    width: '15%',
  },
  {
    title: '所属分类',
    dataIndex: 'cate',
    width: '15%',
    key: 'cate',
  },
  {
    title: '目录价格',
    dataIndex: 'price',
    width: '15%',
    key: 'price',
  },
  {
    title: '数量',
    dataIndex: 'num',
    width: '15%',
    key: 'num',
    scopedSlots: { customRender: 'input' },
  },
];

const data = [
  {
    key: 1,
    name: '硬件',
    children: [
      {
        pid: 1,
        key: 11,
        name: '硬件名称1',
        unit: 'PCS',
        cate: 'BBU Pro',
        price: 9999,
        num: 999,
      },
      {
        pid: 1,
        key: 12,
        name: '硬件名称2',
        unit: 'PCS1',
        cate: 'BBU Max',
        price: 88,
        num: 1011,
      },
    ],
  },
  {
    key: 2,
    name: '软件',
    children: [
      {
        pid: 2,
        key: 21,
        name: '软件名称1',
        unit: 'PCS22',
        cate: 'BBU Pro',
        price: 9898,
        num: 88888,
      },
      {
        pid: 2,
        key: 22,
        name: '软件名称1',
        unit: 'PCS45',
        cate: 'BBU Mini',
        price: 99099,
        num: 991,
      },
    ],
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
      expandedRowKeys: [],
    };
  },
  methods: {
    onChange(record, value) {
      const newData = [...this.data];
      const parent = newData.find((item) => item.key == record.pid);
      parent.children = parent.children.map((item) => {
        if (item.key == record.key) {
          item.num = value;
        }
        return item;
      });
      this.data = newData;
    },
    handleInput(record, step) {
      this.onChange(record, record.num + step);
    },
  },
};
</script>

<style scoped>
input {
  outline: none;
  border-radius: 0;
  border-left: none;
  border-right: none;
}
.input {
  display: flex;
}
.input span {
  display: inline-block;
  width: 40px;
  height: 32px;
  text-align: center;
  border: 1px solid #ccc;
  line-height: 30px;
  cursor: pointer;
}
.input span:hover {
  color: #ee5331;
  border-color: #ee5331;
  font-weight: bold;
}
/* .input .minus {
  border-right: none;
}
.input .add {
  border-left: none;
} */
</style>
