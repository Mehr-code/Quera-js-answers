let a = Number(readline());
let b = Number(readline());
let c = Number(readline());
if (a == 0 || b == 0 || c == 0) {
  print("NO");
} else {
  if (a * a == b * b + c * c) {
    print("YES");
  } else if (b * b == a * a + c * c) {
    print("YES");
  } else if (c * c == b * b + a * a) {
    print("YES");
  } else {
    print("NO");
  }
}
