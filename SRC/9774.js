let num = String(readline());
let arr = num.split("");
let result = [];
let arr2 = [];
arr.forEach(function (i) {
  arr2.push(`${i}: `);
  for (let j = 1; j <= i; j++) {
    arr2.push(i);
  }
  result.push(arr2.join(""));
  arr2 = [];
});

result.forEach(function (i) {
  print(i);
});
