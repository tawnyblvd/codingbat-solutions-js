//Given an array of ints, return true if the array is length 1 or more,
// and the first element and the last element are equal.
function sameFirstLast(arr) {
  if (arr.length >= 1 && arr[0] === arr[arr.length-1]) {
    return true;
  } else {
    return false;
  }
}

console.log(sameFirstLast([1,2,3]));
console.log(sameFirstLast([1,2,3,1]));
