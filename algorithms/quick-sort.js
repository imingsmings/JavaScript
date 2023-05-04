const arr  = [3, 5, 2, 6, 1, 4, 0, -1]

quickSort(arr, 0, arr.length - 1)
console.log(arr);

/**
 * 快速排序的基本原理: 
 *  选择一个基准元素,分别从两个方向与基准比较其大小,根据大小交换元素.
 *  从左开始比较,遇到大于基准元素的暂停,将来要排到基准右边去,用i表示.
 *  然后从左开始比较,遇到比基准大的元素暂停,将来要排到基准右边去,用i表示.
 *  当从右和从左均暂停的时候,交换i与j位置的值,然后接着比较.
 *  当i与j相等时,交换i与基准元素位置的值.
 *  基于交换后i的位置,将所有元素一分位二,再分别将划分后的两个部分进行快速排序.
 */
function quickSort(arr, left, right) {
  if (left >= right) return;

  let base = arr[left],
      i    = left,
      j    = right;
    
  while(i !== j) {
    // 若arr[j]小于base则停止
    while (arr[j] >= base && i < j) {
      j--;
    }

    // 若arr[i]大于base则停止
    while(arr[i] <= base && i < j) {
      i++;
    }

    // 此时i和j均停止,交换i与j位置的元素
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // 此时i和j相等,交换i与base的值
  arr[left] = arr[i];
  arr[i] = base;

  // 递归快速排序
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, arr.length - 1)
}