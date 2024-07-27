let presentScore = Number(readline());
const NumberOfDay = Number(readline());
if (NumberOfDay === 0) {
  print(20);
} else {
  if (NumberOfDay === 7) {
    print(presentScore);
  } else {
    presentScore -= NumberOfDay;
    if (presentScore >= 0) {
      print(presentScore);
    } else {
      print(0);
    }
  }
}
