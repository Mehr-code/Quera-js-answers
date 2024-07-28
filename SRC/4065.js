const [a, b, l] = readline().split(" ");
let flag = true;
let numA = 0;
let numB = 0;
for (let i = 1; i <= l; i++) {
  if (flag) {
    numA++;
    flag = false;
  } else {
    numB++;
    flag = true;
  }
}
print(numA * a + numB * b);
