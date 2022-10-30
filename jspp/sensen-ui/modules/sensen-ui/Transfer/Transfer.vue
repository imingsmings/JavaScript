<template>
  <div>
    <div>
      <selector 
        :data="options"
        @select-change="setTargetIndex"
      ></selector>
    </div>
    <div class="list-wrapper">
      <div 
        class="box left-list" 
        @dragend="addRightListData([dragedItem])"
        @dragover.prevent
      >
        <list-title>{{ leftTitle }}</list-title>
        <div>
          <list-item
            :data="leftListData"
            left-or-right="left"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></list-item>
        </div>
      </div>
      <button-group
        :left-button-disabled="transferButtonDisabled.left"
        :right-button-disabled="transferButtonDisabled.right"
        @left-button-click="removeRightListData(checkedData.right)"
        @right-button-click="addRightListData(checkedData.left)"
      ></button-group>
      <div 
        class="box right-list"
        @dragend="removeRightListData([dragedItem])"
        @dragover.prevent
      >
        <list-title>{{ rightTitle }}</list-title>
        <div>
          <list-item
            :data="rightListData"
            left-or-right="right"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></list-item>
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
    useComputedData,
    useDragedItem
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

  const [
    dragedItem,
    setDragedItem
  ] = useDragedItem();

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