// Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.
function swapElements(arr = [], k) {
  arr.push(...arr.splice(k, 1, arr.pop()));
  return arr;
}
// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]
// Berilgan massiv ichidagi barcha elementlarni n marta takrorlang va yangi massiv qaytaring.
function repeatElements(arr, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    for (let g = 0; g < n; g++) {
      res.push(arr[i]);
    }
  }
  return res;
}
// console.log(repeatElements([1, 2, 3], 3)); // [1, 1, 1, 2, 2, 2, 3, 3, 3]
// Berilgan massiv ichidagi juft indeksdagi elementlar yig'indisini toping.
function sumEvenIndexedElements(arr = []) {
  let new_arr = arr.filter((item, index) => index % 2 == 0);
  let res = new_arr.reduce((acc, item, index, arr) => {
    return (acc += item);
  }, 0);
  return res;
}
// console.log(sumEvenIndexedElements([1, 2, 3, 4, 5, 6])); // 9 (1 + 3 + 5)
// Berilgan massiv ichidagi barcha unikal (takrorlanmagan) elementlarni qaytaring.
function uniqueElements(arr = []) {
  let res = arr.filter((item) => arr.indexOf(item) == arr.lastIndexOf(item));
  return res;
}
// console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]
// Berilgan massiv ichidagi barcha qatorlarni teskarisiga o'giring.
function reverseStringsInArray(arr = []) {
  return arr.map((item) => item.split("").reverse().join(""));
}
// console.log(reverseStringsInArray(["abc", "def", "ghi"])); // ['cba', 'fed', 'ihg']
// Berilgan massiv ichidagi elementlarni n qadamga chapga ko'chiring.
function rotateArrayLeft(arr = [], n) {
  arr.unshift(...arr.splice(n, arr.length, arr.pop()));
  return arr;
}
// console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 3)); // [4, 5, 6, 7, 1, 2, 3]