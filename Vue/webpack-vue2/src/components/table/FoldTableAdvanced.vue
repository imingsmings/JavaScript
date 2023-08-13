<template>
  <div>
    <div class="config">
      <div class="model">
        <span class="title">模型分类</span>
        <a-select default-value="iOS" class="options">
          <a-select-option value="Windows"> Windows </a-select-option>
          <a-select-option value="macOS"> macOS </a-select-option>
          <a-select-option value="iOS"> iOS </a-select-option>
          <a-select-option value="Android"> Android </a-select-option>
        </a-select>
      </div>
      <div class="period">
        <span class="title">参考货期</span>
        <div>
          <a-input type="number" :value="30" suffix="天" />
        </div>
      </div>
    </div>
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
    width: '30%',
    scopedSlots: { customRender: 'name' },
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
    width: '20%',
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

const operations = [
  {
    key: 'add',
    title: '新增',
    icon: 'plus',
  },
  {
    key: 'reset',
    title: '重置',
    icon: 'undo',
  },
  {
    key: 'delete',
    title: '删除',
    icon: 'delete',
  },
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
      console.log(record);
      this.onChange(record, Number(record.num) + step);
    },
    handleOperation(type) {
      console.log(type);
      console.log(this.selectedRowKeys);
    },
  },
};
</script>

<style scoped>
.input {
  display: flex;
}
.input input {
  outline: none;
  border-radius: 0;
  border-left: none;
  border-right: none;
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
.name {
  display: inline-block;
}
.name .tip-icon {
  cursor: pointer;
}
.config {
  display: flex;
  height: 52px;
}

.config .title {
  width: 90px;
  padding: 0 10px 0 20px;
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
</style>
