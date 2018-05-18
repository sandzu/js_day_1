Array.prototype.bubbleSort = function() {
  while (this != this.sort()) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; i < this.length; j++) {
        if (this[i] > this[j]) {
          let tempI = this[i];
          this[i] = this[j];
          this[j] = tempI;
        }
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length + 1; j++) {
      result.push(this.slice(i, j));
    }
  }
  return result;
};

