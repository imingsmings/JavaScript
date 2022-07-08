// var arr = [5, 3, 100, 2, 6, 4];
// var newArr = arr.sort(function (a, b) {

// });
// console.log(newArr);

// var arr = ['我', '爱', '你'];
// var res = arr.sort((a, b) => {
//   return a.localeCompare(b);
// });
// console.log(res);

var arr = ['Jason', 'Mike', 'hah', 'Xiaoming'];

arr.sort((a, b) => {
  console.log(a, b); 
  // M J M - J > 0 ['Jason', 'Mike', 'hah', 'Xiaoming']
  // h M h - M > 0 ['Jason', 'Mike', 'hah', 'Xiaoming']
  // X h x - h < 0 ['Jason', 'Mike', 'Xiaoming', 'hah']
  // X M X - M > 0 ['Jason', 'Mike', 'Xiaoming', 'hah']
  // h X h - X > 0 ['Jason', 'Mike', 'Xiaoming', 'hah']

  if (a < b) {
    return -1;
  }


  if (a > b) {
    return 1;
  }

  return 0;
});
console.log(arr);
