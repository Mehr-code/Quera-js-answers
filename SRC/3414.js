const x1 = Number(readline());
const y1 = Number(readline());
const x2 = Number(readline());
const y2 = Number(readline());

if (y1 === y2) {
  print("Horizontal");
} else if (x1 === x2) {
  print("Vertical");
} else if (x1 !== x2 && y1 !== y2) {
  print("Try again");
}
