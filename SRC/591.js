const num = Number(readline());
print("*".repeat(num));
for (let i = 0; i < num - 2; i++) {
  print("*" + " ".repeat(num - 2) + "*");
}
print("*".repeat(num));
