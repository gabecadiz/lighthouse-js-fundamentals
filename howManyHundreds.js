// define a function howManyHundreds, which, given a number, returns how many hundreds fit into that number

var howManyHundreds = function (number){
  return Math.trunc(number/100);
}
// tests to verify function
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);