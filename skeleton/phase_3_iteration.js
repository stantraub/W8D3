Array.prototype.bubbleSort = function() {
  let sorted = false;
  let a;
  let b;
  while (sorted === false) {
    sorted = true 
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        a = this[i];
        b = this[i+1];
        this[i] = b;
        this[i + 1] = a; 
        sorted = false;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      result.push(this.slice(i, j + 1));
    }
  }
  return result;
};

