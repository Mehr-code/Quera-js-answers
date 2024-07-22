const num = Number(readline());
let number = num;
for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    number -= i;
  }
}
print(number === 0 ? "YES" : "NO");
