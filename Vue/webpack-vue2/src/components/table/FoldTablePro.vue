<template>
  <div>
    <div class="config">
      <div class="left">
        <div class="select">
          <div class="flex discount">
            <span class="title">折扣类型</span>
            <a-select default-value="hard" class="options">
              <a-select-option value="hard">硬件</a-select-option>
              <a-select-option value="soft">软件</a-select-option>
            </a-select>
          </div>
          <div class="flex profit">
            <span class="title">利润率</span>
            <a-select default-value="inner" class="options">
              <a-select-option value="inner">内部折扣</a-select-option>
              <a-select-option value="outer">外部折扣</a-select-option>
            </a-select>
          </div>
          <div class="flex dvalue">
            <span class="title">折扣值</span>
            <a-input type="number" :value="30" suffix="%" class="options" />
          </div>
          <div class="flex cal">
            <span class="title">计算精度</span>
            <a-select default-value="2" class="options">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
              <a-select-option value="3">3</a-select-option>
            </a-select>
          </div>
          <div class="flex dot">
            <span class="title">显示精度</span>
            <a-select default-value="2" class="options">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
              <a-select-option value="3">3</a-select-option>
            </a-select>
          </div>
        </div>
        <div class="other">
          <div class="condition flex">
            <span class="title">付款条件</span>
            <a-input type="text" />
          </div>
          <div class="award flex">
            <span class="title">买赠优惠</span>
            <a-input type="text" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="apply">
          <a-button>应用</a-button>
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
        <div class="discount" slot="discount" slot-scope="text, record">
          <a-input type="text" :value="text" />
        </div>
        <span class="total" slot="total" slot-scope="text, record">
          {{ text }}
        </span>
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
    width: '5%',
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
    width: '15%',
    key: 'num',
    scopedSlots: { customRender: 'input' },
  },
  {
    title: '目录价格',
    dataIndex: 'cny',
    width: '20%',
    key: 'cny',
  },
  {
    title: '折扣类型',
    dataIndex: 'discount',
    width: '15%',
    key: 'discount',
    scopedSlots: { customRender: 'discount' },
  },
  {
    title: '总价',
    dataIndex: 'total',
    width: '15%',
    key: 'total',
    scopedSlots: { customRender: 'total' },
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
      },
    ],
  },
];

const operations = [
  {
    key: 'reset',
    title: '重置',
    icon: 'undo',
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
.config {
  display: flex;
}
.config .left {
  flex: 8;
  display: flex;
  flex-direction: column;
}
.config .left .select {
  display: flex;
  flex-wrap: wrap;
}
.config .left .select .flex {
  width: 33.33%;
  display: flex;
  align-items: center;
  height: 52px;
}
.config .title {
  width: 90px;
  padding: 0 10px 0 20px;
  text-align: right;
}
.config .left .select .flex .options {
  flex: 1;
}
.config .other .flex {
  display: flex;
  align-items: center;
  height: 52px;
}
.config .right {
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
}
.config .right .apply button {
  background-color: #ee5331;
  border: none;
  color: #fff;
  border-radius: 0;
}
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
.total {
  color: red;
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
