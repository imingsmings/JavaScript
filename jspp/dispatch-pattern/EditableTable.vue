<script setup>
  
  import { reactive, createApp, h } from 'vue';
  
  /**
   * 当blur时，提交
   * {
   *   value: editedValue // 输入框值
   *   key 要修改的数据的属性
   *   index 要修改数据的下表
   * }  
   */ 
  const state = reactive({
    editedValue: '',
    newData: {
      key: '',
      index: -1
    }
  })

  // input组件应用实例初始化
  let editInputApp = null;

  // 定义属性   表格数据
  const props = defineProps({
    data: {
      type: Array,
      default: () => []
    }
  });
  
  // 注册自定义事件  editData(index, key, value) -> 父组件修改数据
  const emit = defineEmits(['editData']);
  
  // 点击可编辑td事件处理函数
  const editTableCell = (...arg) => {
    // 传递事件对象、是否可编辑、{ 属性, 值, 数据对应下表 }
    const [ event, editable, { key, value, index } ] = arg;
    // 如果存在input应用实例存在，先卸载应用
    editInputApp && removeEditInput(editInputApp);
    // 如果td可编辑
    if (editable) {
      // 设置key与index
      state.key = key;
      state.index = index;
      // 获取td dom元素
      const tar = event.target;
      // 设置editedValue值
      state.editedValue = value;
      // 显示输入框
      showEditInput(tar);
    }
  }
   
  // input组件
  const editInputComp = ({ value }) => {
    // 返回input组件虚拟节点
    return h('input', {
      class: 'edit-input',
      // 设置td内部的值
      value,
      // 输入时设置editedValue
      onInput: (e) => state.editedValue = e.target.value,
      // 失去焦点后 将 { index, key, value } 提交给父组件更改数据
      onBlur: () => emit('editData', {
        index: state.index,
        key: state.key,
        value: state.editedValue
      }),
      // 点击input,阻止冒泡 -> 阻止window上点击事件触发 -> 卸载组件
      onClick: (e) => e.stopPropagation()
    });
  }
  
  // 显示input
  const showEditInput = (target) => {
    // 创建组件的容器
    const oFrag = document.createDocumentFragment();
    // 创建input应用
    editInputApp = createApp(editInputComp, { value: state.editedValue });
    
    // 存在input应用
    if (editInputApp) {
      // 将input应用挂载到容器中
      editInputApp.mount(oFrag);
      // 将容器放入指定的td DOM节点中去。
      target.appendChild(oFrag);
      // 设置input全选
      target.querySelector('.edit-input').select();
    }
  }
  
  // 卸载组件
  const removeEditInput = (app) => {
    app && app.unmount();
  }
  
  // 点击window 卸载input组件
  window.addEventListener('click', () => hideEditInput(editInputApp), false);

  // 使用组件
  /**
   * 
   *  <editable-table
        :data="tableData"
        @edit-data="editData"
      ></editable-table>
   *  
      const tableData = ref([
        {
          id: 1,
          name: '张三',
          age: 16,
          chinese: 124,
          math: 116,
          english: 105
        },
        {
          id: 2,
          name: '李四',
          age: 15,
          chinese: 117,
          math: 132,
          english: 92
        },
        {
          id: 3,
          name: '王五',
          age: 17,
          chinese: 99,
          math: 112,
          english: 128
        }
      ])

      const editData = ({ index, key, value }) => {
        tableData.value = tableData.value.map((item, idx) => {
          if (index === idx) {
            item[key] = value;
          }
          return item;
        })
      }
   */
</script>

<template>
  <table border="1">
    <tr>
      <th>学号</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>语文成绩</th>
      <th>数学成绩</th>
      <th>英语成绩</th>
    </tr>
    <tr 
      v-for="(item, index) of data"
      :key="item.id"
    >
      <td
        v-for="(value, key) in item"
        :key="key"
        @click.stop="editTableCell(
          $event, 
          !['id', 'name', 'age'].includes(key), 
          { key, value, index }
        )"
      >{{ value }}</td>
    </tr>
  </table>
</template>

<style lang="scss">
  table {
    width: 500px;
    text-align: center;
    border-collapse: collapse;

    tr {
      height: 44px;

      td {
        position: relative;
        cursor: pointer;
      }
    }
  }

  .edit-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    outline: none;
    border: none;
    border: 1px solid blue;
  }
</style>