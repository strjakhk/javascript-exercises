const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function(base, exp) {
  return base**exp;
};

const factorial = function(f) {
  if (f === 0) return 1;
	let res = f;
  for (let i = f; i > 1; i--){
    res *= i - 1;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
