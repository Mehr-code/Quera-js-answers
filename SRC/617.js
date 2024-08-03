const numbers = readline().split("");
let first = numbers.slice(0, numbers.length / 2);
let second = numbers.slice((numbers.length + 1) / 2);

if (first.join("") === second.reverse().join("")) {
  print("YES");
} else {
  print("NO");
}
