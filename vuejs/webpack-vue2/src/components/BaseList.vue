<template>
  <div class="base-list">
    <div class="list-header">
      <h2>{{ title }}</h2>
      <div class="buttons" v-if="buttons.length !== 0">
        <a-button
          v-for="(btn, index) of buttons"
          :class="['button-item', { nmr: index === buttons.length - 1 }]"
          :key="btn.key"
          @click="handlerBatch(btn)"
        >
          {{ btn.title }}
        </a-button>
      </div>
    </div>
    <div class="list-content">
      <div class="search">
        <div class="field">
          <slot name="search"></slot>
        </div>
        <div class="reset" v-if="search">
          <a-button @click="handleSearch('query')">查询</a-button>
          <a-button @click="handleSearch('reset')">重置</a-button>
        </div>
      </div>
      <a-table
        :columns="columns"
        :data-source="dataSource"
        :pagination="false"
        :row-selection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
      >
        <template v-slot:action="record">
          <div class="operation-buttons">
            <a-button
              v-for="opt of operations"
              :key="opt.key"
              @click="opt.handler(record)"
            >
              {{ opt.title }}
            </a-button>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseList',
  props: {
    title: {
      type: String,
      default: '',
    },
    columns: {
      type: Array,
      default: () => [],
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    operations: {
      type: Array,
      default: () => [],
    },
    buttons: {
      type: Array,
      default: () => [],
    },
    search: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedRowKeys: [],
    };
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
    handlerBatch(btn) {
      if (this.selectedRowKeys.length == 0) {
        this.$message.warning('请至少选择一条记录');
        return;
      }
      btn.handler(this.selectedRowKeys);
    },
    handleSearch(type) {
      this.$emit('handleSearch', type);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0;
}
.bast-list {
  display: flex;
  flex-direction: column;
}
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.buttons .button-item {
  margin-right: 10px;
}
.buttons .button-item.nmr {
  margin-right: 0;
}
.buttons .button-item:hover {
  color: #ee5331;
  border: 1px solid #ee5331;
}
.search {
  display: flex;
}
</style>
