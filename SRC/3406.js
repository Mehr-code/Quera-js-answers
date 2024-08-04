const num1 = readline().split("");
const num2 = readline().split("");

const num1Number = num1.join("");
const num2Number = num2.join("");

if (num1Number === num2Number) {
  print(`${num1Number} = ${num2Number}`);
} else {
  for (let i = 2; i >= 0; i--) {
    if (num1[i] > num2[i]) {
      print(`${num2Number} < ${num1Number}`);
      break;
    }
    if (num1[i] < num2[i]) {
      print(`${num1Number} < ${num2Number}`);
      break;
    }
  }
}
