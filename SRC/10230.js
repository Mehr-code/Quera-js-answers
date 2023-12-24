let a = Number(readline());
let b = Number(readline());
let c = Number(readline());

if (a == 0 || b == 0 || c == 0) {
  print("No");
} else {
  if (a + b + c == 180) {
    print("Yes");
  } else {
    print("No");
  }
}
