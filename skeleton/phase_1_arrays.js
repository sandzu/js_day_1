Array.prototype.uniq = function() {
  const result = [];
  this.forEach(function(el) {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

Array.prototype.twosum = function(){
  const result = [];
  for (let i = 0; i < this.length; i++){
    for (let j = i+1; j<this.length; j++){
      if (i === j){
        continue;
      }
      if (this[i] + this[j] === 0){
        result.push([i,j]);
      }
    }
    
  }
  return result;
};

Array.prototype.transpose = function(){
  const result = []; 
  for (let i = 0; i <this.length; i++){
    const subresult = [];
    for (let j = 0; j <this.length; j++){
      subresult.push(this[j][i]);
    }
    result.push(subresult);
  }
  return result;
};

