let products = [
  [11, 0, 1, 0],
  [8, 1, 0, 0],
  [9, 1, 0, 1],
  [3, 0, 1, 1],
  [15, 0, 0, 1]
];

const compare = (a, b) => {
  for (let i = 1; i <= 3; i++) {
    if (a[i] < b[i]) return 1;
    if (a[i] > b[i]) return -1;
  }
  return 0;
};

let res = products.sort((a, b) => {
  return compare(a, b);
});
console.log(res);
