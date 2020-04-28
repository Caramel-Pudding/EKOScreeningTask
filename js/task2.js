const test1 = "ekoapp";
const test2 = "ekoeko";
const test3 = 'aaa'

function equalShiftsAmount(input) {
  let accum = 0;
  const stringChars = input.split("");
  for (let i = 0; i < stringChars.length; i++) {
    stringChars.unshift(stringChars.pop());
    if (stringChars.join('') === input) {
      accum++;
    }
  }

  return accum;
}

console.log(equalShiftsAmount(test1));
console.log(equalShiftsAmount(test2));
console.log(equalShiftsAmount(test3));
