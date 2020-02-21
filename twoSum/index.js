function twoSum(array, sum) {
  let map = {};
  const result = [];

  for (item of array) {
    if (map[item]) {
      result.push([map[item], item]);
    } else {
      map[sum - item] = item;
    }
  }
  return result;
}

function twoDiv(A, m) {
  const output = new Array(m + 1).fill(0);
  for (let x of A) {
    if (output[(m - x % m) % m]) {
      output[m] += output[(m - x % m) % m];
    } else {
      output[x % m]++;
    }

  }
  return output[m];
}
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

console.log(twoDiv([20, 40, 60], 60));
