<template>
  <div>
    <div>
      <selector 
        :data="options"
        @select-change="setTargetIndex"
      ></selector>
      <!-- <select @change="setTargetIndex($event.target.value)">
        <option
          v-for="(title, index) of options"
          :key="index"
          :value="index"
        >
          {{ title }}
        </option>
      </select> -->
    </div>
    <div class="list-wrapper">
      <div class="box left-list">
        <list-title>{{ leftTitle }}</list-title>
        <!-- <h1 class="title">{{ leftTitle }}</h1> -->
        <div>
          <list-item
            :data="leftListData"
            left-or-right="left"
            @checkbox-click="setCheckedData"
          ></list-item>
          <!-- <div
            v-for="item of leftListData"
            :key="item.id"
            :class="['list-item', item.disabled ? 'disabled' : '']"
          >
            <input 
              type="checkbox" 
              :disabled="item.disabled" 
              :id="'__checkbox__' + item.id"
              @click="setCheckedData($event, item, 'left')"
             />
            <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
          </div> -->
        </div>
      </div>
      <button-group
        :left-button-disabled="transferButtonDisabled.left"
        :right-button-disabled="transferButtonDisabled.right"
        @left-button-click="removeRightListData(checkedData.right)"
        @right-button-click="addRightListData(checkedData.left)"
      ></button-group>
      <!-- <div class="box button-group">
        <button 
          :disabled="transferButtonDisabled.left"
          @click="removeRightListData(checkedData.right)"
        >&lt;</button>
        <button 
          :disabled="transferButtonDisabled.right"
          @click="addRightListData(checkedData.left)"
        >&gt;</button>
      </div> -->
      <div class="box right-list">
        <list-title>{{ rightTitle }}</list-title>
        <!-- <h1 class="title">{{ rightTitle }}</h1> -->
        <div>
          <list-item
            :data="rightListData"
            left-or-right="right"
            @checkbox-click="setCheckedData"
          ></list-item>
          <!-- <div
            v-for="item of rightListData"
            :key="item.id"
            :class="['list-item', item.disabled ? 'disabled' : '']"
          >
            <input 
              type="checkbox" 
              :disabled="item.disabled" 
              :id="'__checkbox__' + item.id"
              @click="setCheckedData($event, item, 'right')"
             />
            <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Selector from './components/Selector';
  import ListTitle from './components/ListTitle';
  import ListItem from './components/ListItem';
  import ButtonGroup from './components/ButtonGroup';

  import customProps from './extends/props';

  import { 
    useRightListData, 
    useTargetIndex, 
    useCheckedData, 
    useComputedData 
  } from './extends/hooks';

  const props = defineProps(customProps);
  const options = props.data.map(({ title }) => title);

  const [ 
    targetIndex, 
    setTargetIndex 
  ] = useTargetIndex(0);

  const [ 
    checkedData, 
    addCheckedData, 
    removeCheckededData 
  ] = useCheckedData();

  const [ 
    rightListData, 
    addRightListData, 
    removeRightListData 
  ] = useRightListData([], checkedData);
  
  const { 
    leftTitle, 
    leftListData,
    transferButtonDisabled
  } = useComputedData(
    props.data, 
    targetIndex, 
    rightListData, 
    checkedData
  );

  const setCheckedData = (e, item, leftOrRight) => {
    e.target.checked 
      ? addCheckedData(leftOrRight, item) 
      : removeCheckededData(leftOrRight, item.id);
  }
</script>

<style lang="scss" scoped>
  .list-wrapper {
    display: flex;
    flex-direction: row;
    width: 360px;
    border: 1px solid #ddd;
    height: 300px;
    
    .box {
      width: 120px;
      height: 100%;
      box-sizing: border-box;
    }
  }
</style>