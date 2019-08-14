Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }

  return result;
};

Array.prototype.myReduce = function(callback, initialValue = null) {
    let acc = initialValue || this.shift();
    this.myEach(x => acc = callback(acc, x));
    return acc;
};

