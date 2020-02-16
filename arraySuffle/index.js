function suffleArray(arr) {
  let len = arr.length;
  for (let i in arr) {
    let idx1 = Math.floor(Math.random() * len);
    let idx2 = Math.floor(Math.random() * len);
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  return arr;
}
console.log(suffleArray([1, 2, 3, 4, 5]));
