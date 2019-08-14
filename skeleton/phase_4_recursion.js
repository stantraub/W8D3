function range(start, end) {
  if (start >= end) {
    return start;
  }
  let result = [start];
  result = result.concat(range(start+1, end));
  return result;

}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  sum = arr[0] + sumRec(arr.slice(1, arr.length));

  return sum;
}

function exponent(base, exp) {
  if (exp === 0) { return 1; }

  let product = 0

  product = base * exponent(base, exp - 1);
  return product;
}

function fibonacci(n) {
  if (n === 1) { return [1]; } 
  if (n === 2) { return [1, 1]; } 

  let prev = fibonacci(n - 1);
  let next = (prev[prev.length-1] + prev[prev.length-2]);
  prev.push(next);

  return prev;
}

function deep_dup(arr) {
  if (arr.length == 1) {return new Array(1).fill(arr[0]);}

  let apple = new Array(1).fill(arr[0]);
  apple = apple.concat(deep_dup(arr.slice(1)));

  return apple;
}
