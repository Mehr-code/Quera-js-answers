function getSum(n) {
  let flag;
  if (n < 0) {
    flag = true;
    n = -n;
  }
  let sum;
  do {
    sum = 0;
    while (n != 0) {
      sum = sum + (n % 10);
      n = Math.floor(n / 10);
    }
    n = sum;
  } while (sum > 10);
  if (flag == true) {
    return -sum;
  } else {
    return sum;
  }
}

let n = readline();
print(getSum(n));
