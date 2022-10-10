// TITLE: Evaluate Mathematical Expression
// RATING: 2 kyu
// LINK:  https://www.codewars.com/kata/52a78825cdfc2cfc87000005
// LANGUAGE: javascript
// COMPLETED: 10/10/2022

var calc = function (expression) {
  let numbers = [];
  const operators = [];

  let string = expression.replace(/\s/g, "");

  while (string.includes("(")) {
    let pExp = string.match(/\([\d*+-/]+\)/)[0];
    let pExpResult = calc(pExp.slice(1, pExp.length - 1));
    string = string.replace(pExp, pExpResult.toString());
  }

  numbers.push(string.match(/-*[0-9]+\.*[0-9]*/)[0]);
  string = string.replace(numbers[0], "");
  if (string.length === 0) {
    return Number(numbers[0].replace("--", ""));
  }

  while (string.length > 0) {
    operators.push(string.match(/[*+-/]/)[0]);
    string = string.replace(operators[operators.length - 1], "");
    numbers.push(string.match(/-*[0-9]+\.*[0-9]*/)[0]);
    string = string.replace(numbers[numbers.length - 1], "");
    numbers[numbers.length - 1] = numbers[numbers.length - 1];
  }

  numbers = numbers.map((num) => Number(num.replace("--", "")));
  while (operators.includes("*") || operators.includes("/")) {
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "*") {
        numbers[i] = numbers[i] * numbers[i + 1];
        numbers.splice(i + 1, 1);
        operators.splice(i, 1);
        break;
      }
      if (operators[i] === "/") {
        numbers[i] = numbers[i] / numbers[i + 1];
        numbers.splice(i + 1, 1);
        operators.splice(i, 1);
        break;
      }
    }
  }
  
  while (operators.includes("+") || operators.includes("-")) {
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "+") {
        numbers[i] = numbers[i] + numbers[i + 1];
        numbers.splice(i + 1, 1);
        operators.splice(i, 1);
        break;
      }
      if (operators[i] === "-") {
        numbers[i] = numbers[i] - numbers[i + 1];
        numbers.splice(i + 1, 1);
        operators.splice(i, 1);
        break;
      }
    }
  }
  return numbers[0];
};

// TESTS
//console.log(calc("1 + 1")); // 2
//console.log(calc("1+1"), 2);
//console.log(calc("1 - 1"), 0);
//console.log(calc("1* 1"), 1);
//console.log(calc("1 /1"), 1);
//console.log(calc("-123"), -123);
//console.log(calc("123"), 123);
//console.log(calc("2 /2+3 * 4.75- -6"), 21.25);
//console.log(calc("12* 123"), 1476);
//console.log(calc("2 / (2 + 3) * 4.33 - -6"), 7.732);
//console.log(calc("2 / (2 * (3 +4 /2)) * 4.5 - -6.1"), 7);
//console.log(calc("12* 123/-(-5 + 2)"), 492); // 492
//console.log(calc("-(-6)"), 6); // 6
//console.log(calc(
//    "(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) "
//  ),1);
console.log(calc("-12053.760875--12053.760875+11/--11"), 1);
