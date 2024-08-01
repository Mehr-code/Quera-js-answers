const [kings, queens, castels, elephants, ponies, soliders] =
  readline().split(" ");
print(
  `${-(kings - 1)} ${-(queens - 1)} ${-(castels - 2)} ${-(elephants - 2)} ${-(
    ponies - 2
  )} ${-(soliders - 8)}`
);
