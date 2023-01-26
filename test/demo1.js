const arr = [
  {
    fieldName: '合计底薪',
    overallSort: 5,
    groupFieldSort: 1,
    groupType: 2,
    groupName: '应发合计',
  },
  {
    fieldName: '基本工资',
    overallSort: 5,
    groupFieldSort: 2,
    groupType: 2,
    groupName: '应发合计',
  },
  {
    fieldName: '其他补助',
    overallSort: 5,
    groupFieldSort: 6,
    groupType: 2,
    groupName: '应发合计',
  },
  {
    fieldName: '社保',
    overallSort: 6,
    groupFieldSort: 1,
    groupType: 3,
    groupName: '应扣合计',
  },
  {
    fieldName: '公积金',
    overallSort: 6,
    groupFieldSort: 3,
    groupType: 3,
    groupName: '应扣合计',
  },
];

console.log(combineGroup(arr));

function combineGroup(arr) {
  /*
    预期效果 arr
      根据 groupType 进行分组, 将同一分组数据放入list
  */
  // const arr = [
  //   {
  //     groupType: 2,
  //     groupName: '应发合计',
  //     overallSort: 5,
  //     list: [
  //       {
  //         fieldName: '合计底薪',
  //         groupFieldSort: 1
  //       },
  //       {
  //         fieldName: '基本工资',
  //         groupFieldSort: 2
  //       },
  //       {
  //         fieldName: '其他补助',
  //         groupFieldSort: 6
  //       }
  //     ]
  //   },
  //   {
  //     groupType: 3,
  //     groupName: '应扣合计',
  //     overallSort: 6,
  //     list: [
  //       {
  //         fieldName: '社保',
  //         groupFieldSort: 1
  //       },
  //       {
  //         fieldName: '公积金',
  //         groupFieldSort: 3
  //       }
  //     ]
  //   }
  // ]

  return arr;
}
