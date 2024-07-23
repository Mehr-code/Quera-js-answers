const arr = [];

while (true) {
  const num = Number(readline());
  if (num === 0) {
    break;
  }
  arr.push(num);
}

for (item of arr.reverse()) {
  print(item);
}
