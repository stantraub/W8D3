Array.prototype.uniq = function() {
  let result = {};

  for (let i = 0; i < this.length; i++) {
    result[this[i]] = true;

  }

  return Object.keys(result);
};

Array.prototype.twoSum = function() {
  let result = [];

  for (let i = 0; i < this.length; i++) {

    for (let j = i; j < this.length; j++){
      if (this[i] + this[j] === 0) { result.push(i, j)}
    }
  }

  return result;
};

Array.prototype.transpose = function() {
  let result = [];

  for (let t = 0; t < this[0].length; t++) {
    result.push([]);
  };

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      result[j].push(this[i][j]);
    }
  };

  return result;

}
