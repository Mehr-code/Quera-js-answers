const [row, column] = String(readline()).split(" ");
const direction = column >= 10 ? "Left" : "Right";
const rowFromTop = String(10 - row + 1);
const chairNum = column <= 10 ? column : `${Math.abs(10 - column) + 1}`;
print(direction, rowFromTop, chairNum);
