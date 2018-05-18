Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return undefined;
};

Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

Array.prototype.myReduce = function(callback, initialValue) {
  if (initialValue !== undefined) {
    var sum = initialValue;
    var startindex = 0;
  } else {
    var sum = this[0];
    var startindex = 1;
  }
  for (let i = startindex; i<this.length; i++){
    sum = callback(sum, this[i]);
  }
  return sum;
};
