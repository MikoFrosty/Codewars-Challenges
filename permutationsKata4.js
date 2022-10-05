// TITLE: Permutations (Kata 5)
// DESCRIPTION: In this kata you have to create all permutations 
// of a non empty input string and remove duplicates, if present. 
// This means, you have to shuffle all letters from the input in all possible orders.
// COMPLETED

let string = "ababb"; // test

let permutations = getPermutations(string).filter(
  (item, index, arr) => arr.indexOf(item) === index
);
console.log(permutations);

function getPermutations(string) {
  const arr = string.split("");
  const len = arr.length;
  if (len === 2) return lastTwo(...arr);
  if (len === 3) return lastThree(...arr);
  if (len === 4) return lastFour(...arr);
  if (len === 5) return lastFive(...arr);
  return [string];
}
function lastTwo(a, b, prefix = "") {
  return [prefix + a + b, prefix + b + a];
}
function lastThree(a, b, c, prefix = "") {
  return [
    ...lastTwo(b, c, prefix + a),
    ...lastTwo(a, c, prefix + b),
    ...lastTwo(a, b, prefix + c),
  ];
}
function lastFour(a, b, c, d, prefix = "") {
  return [
    ...lastThree(b, c, d, prefix + a),
    ...lastThree(c, d, a, prefix + b),
    ...lastThree(d, a, b, prefix + c),
    ...lastThree(a, b, c, prefix + d),
  ];
}
function lastFive(a, b, c, d, e, prefix = "") {
  return [
    ...lastFour(b, c, d, e, prefix + a),
    ...lastFour(c, d, e, a, prefix + b),
    ...lastFour(d, e, a, b, prefix + c),
    ...lastFour(e, a, b, c, prefix + d),
    ...lastFour(a, b, c, d, prefix + e),
  ];
}
