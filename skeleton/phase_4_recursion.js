function range(start, end) {
  if (start === end) {
    return [start];
  }
  else {
    return [start].concat(range(start + 1, end));
  }
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  else {
    return sumRec(arr.slice(1)) + arr[0];
  }
}

function exponent(base, exp){
  //base cases 
  if (exp === 0){
    return 1;
  } else if (exp ===1) {
    return base;
  } else {
    return base * exponent(base, exp-1);
  }
  
}

function fibonacci(n) {
  if (n===1){
    return [0];
  } else if (n===2) {
    return [0,1];
  } else{
    const prev = fibonacci(n-1); 
    const current = prev[prev.length -1] + prev[prev.length -2 ];
    return prev.concat([current]);
  }
}

function deepDup(arr){
  const result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
      result.push(deepDup(arr[i]));
    }
    else {
      result.push(arr[i]);
    }
  }
  return result;
}

function bsearch(arr, target) {
  const middle = Math.floor(arr.length / 2);
  if (arr.length === 0) {
    return -1;
  }
  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] > target) {
    return bsearch(arr.slice(0, middle), target);
  } else {
    return bsearch(arr.slice(middle + 1), target) + middle + 1;
  }
}

function mergesort(arr) {
  if (arr.length <= 1){
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  left = arr.slice(0, middle);
  right = arr.slice(middle, arr.length);
  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  let result =  [];
  while ((left.length > 0 )&& (right.length>0)){
    if(left[0]<right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  result = result.concat(left);
  result = result.concat(right);
  return result;
}

function subsets(arr) {
  if (arr.length == 0) {
    return [[]];
  }
  let first = arr[0];
  let result = [];
  subsets(arr.slice(1)).forEach(function(el) {
    // debugger
    result.push(el.slice(0));
    // console.log(el + " * el1")
    
    el.push(first);
    // console.log(el + " * el2)
    
    result.push(el.slice(0));
    console.log("==" + result);
  });
  return result;
}


