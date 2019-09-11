//Given an array of ints, return true if 6 appears as either the first or last
//element in the array. The array will be length 1 or more.

function firstLast6(arr){
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === 6 || arr[arr.length-1] === 6) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(firstLast6([1,2,6]));
// console.log(firstLast6([3,1,2,6]));
// console.log(firstLast6([3,1,2,6,4]));
console.log(firstLast6([3,1,2,5]));
