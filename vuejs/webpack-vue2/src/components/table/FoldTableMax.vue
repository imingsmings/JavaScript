<template>
  <div>
    <div class="table-data">
      <div class="operations">
        <ul class="list">
          <li
            v-for="(item, index) of operations"
            :key="item.key"
            :title="item.title"
            :class="['btn-item', { nbd: index === operations.length - 1 }]"
            @click="handleOperation(item.key)"
          >
            <a-icon :type="item.icon" class="icon" />
            <span class="text">{{ item.title }}</span>
          </li>
        </ul>
      </div>
      <a-table
        :columns="columns"
        :data-source="data"
        :row-selection="rowSelection"
        :expanded-row-keys.sync="expandedRowKeys"
        class="table"
      >
        <div class="name" slot="name" slot-scope="text, record">
          <span>{{ text }}</span>
          <a-tooltip
            placement="top"
            :title="text + '详情'"
            :destroyTooltipOnHide="true"
            v-if="record.pid"
          >
            <a-icon type="question-circle" class="tip-icon" />
          </a-tooltip>
        </div>
        <span class="total" slot="total" slot-scope="text, record">
          {{ text }}
        </span>
        <div
          class="model"
          slot="model"
          slot-scope="text, record"
          v-if="text !== undefined"
        >
          <a-select :default-value="text" class="options">
            <a-select-option value="SCTF">SCTF</a-select-option>
            <a-select-option value="SCTF1">SCTF1</a-select-option>
            <a-select-option value="SCTF2">SCTF2</a-select-option>
          </a-select>
        </div>
        <div
          class="productId"
          slot="productId"
          slot-scope="text, record"
          v-if="text !== undefined"
        >
          <a-select :default-value="text" class="options">
            <a-select-option value="AAA001AAA001AAA001"
              >AAA001AAA001AAA001</a-select-option
            >
            <a-select-option value="AAA001AAA001AAA002"
              >AAA001AAA001AAA002</a-select-option
            >
            <a-select-option value="AAA001AAA001AAA003"
              >AAA001AAA001AAA003</a-select-option
            >
          </a-select>
        </div>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '单位',
    dataIndex: 'unit',
    key: 'unit',
    width: '10%',
  },
  {
    title: '所属分类',
    dataIndex: 'cate',
    width: '10%',
    key: 'cate',
  },
  {
    title: '数量',
    dataIndex: 'num',
    width: '10%',
    key: 'num',
  },
  {
    title: '目录价格',
    dataIndex: 'cny',
    width: '10%',
    key: 'cny',
  },
  {
    title: '折后价格',
    dataIndex: 'total',
    width: '10%',
    key: 'total',
    scopedSlots: { customRender: 'total' },
  },
  {
    title: '产品型号',
    dataIndex: 'model',
    width: '15%',
    key: 'model',
    scopedSlots: { customRender: 'model' },
  },
  {
    title: '货号',
    dataIndex: 'productId',
    width: '20%',
    key: 'productId',
    scopedSlots: { customRender: 'productId' },
  },
];

const data = [
  {
    key: 1,
    name: '硬件',
    discount: '100.00%',
    total: '5000,000.00',
    children: [
      {
        pid: 1,
        key: 11,
        name: '硬件名称001',
        unit: 'PCS',
        cate: 'BBU Pro',
        num: 999,
        cny: '2000,000.00',
        discount: '100.00%',
        total: '2000,000.00',
        model: 'SCTF',
        productId: 'AAA001AAA001AAA001',
      },
      {
        pid: 1,
        key: 12,
        name: '硬件名称002',
        unit: 'PCS1',
        cate: 'BBU Max',
        num: 1011,
        cny: '3000,000.00',
        discount: '100.00%',
        total: '3000,000.00',
        model: 'SCTF',
        productId: 'AAA001AAA001AAA002',
      },
    ],
  },
  {
    key: 2,
    name: '软件',
    discount: '100.00%',
    total: '13000,000.00',
    children: [
      {
        pid: 2,
        key: 21,
        name: '软件名称001',
        unit: 'PCS22',
        cate: 'BBU Pro',
        num: 88888,
        cny: '4000,000.00',
        discount: '100.00%',
        total: '4000,000.00',
        model: 'SCTF',
        productId: 'AAA001AAA001AAA002',
      },
      {
        pid: 2,
        key: 22,
        name: '软件名称002',
        unit: 'PCS45',
        cate: 'BBU Mini',
        num: 991,
        cny: '9000,000.00',
        discount: '100.00%',
        total: '9000,000.00',
        model: 'SCTF1',
        productId: 'AAA001AAA001AAA003',
      },
    ],
  },
];
const operations = [
  {
    key: 'download',
    title: '导出',
    icon: 'download',
  },
  {
    key: 'save',
    title: '保存',
    icon: 'save',
  },
];

// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     this.selectedRowKeys = selectedRowKeys;
//   },
//   onSelect: (record, selected, selectedRows) => {
//     console.log(record, selected, selectedRows);
//   },
//   onSelectAll: (selected, selectedRows, changeRows) => {
//     console.log(selected, selectedRows, changeRows);
//   },
// };

export default {
  data() {
    return {
      data,
      columns,
      rowSelection: {
        onChange: (selectedRowKeys, selectedRows) => {
          this.selectedRowKeys = selectedRowKeys;
        },
      },
      operations,
      expandedRowKeys: [],
      selectedRowKeys: [],
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
    handleOperation(type) {
      console.log(type);
      console.log(this.selectedRowKeys);
    },
  },
};
</script>

<style scoped>
.name {
  display: inline-block;
}
.name .tip-icon {
  cursor: pointer;
}
.config {
  display: flex;
}
.config .label {
  width: 100px;
}
.config .model {
  margin-right: 10px;
}

.config .model,
.config .period {
  display: flex;
  align-items: center;
}
.config .model .options {
  width: 240px;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.table-data .operations {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 52px;
}
.table-data .operations .list {
  display: flex;
  cursor: pointer;
}
.operations .btn-item {
  padding: 0 10px;
  border-right: 1px solid #ccc;
}
.operations .btn-item.nbd {
  border-right: none;
}
.operations li .icon {
  color: #ee5331;
}
.total {
  color: red;
}
.table .model > div {
  width: 100%;
}
</style>
