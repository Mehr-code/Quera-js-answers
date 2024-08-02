const len = Number(readline());
const numbers = readline().split(" ");

if (numbers.length === len) {
  const result = numbers.reduce(function (acc, num) {
    if (num > acc) {
      acc = num;
    }
    return acc;
  }, 0);
  print(result);
}
