let num = readline();
function fact(num) {
  if (num == 1 || num == 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
print(fact(num));
