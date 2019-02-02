// LHL Looping LastIndexOf Assignment

//when given an array and a value, returns
//the index of the last time the value occurs in the array
//if the value never occurs, the functino should return -1

function lastIndexOf(array, value){
  var answer;
  var match;

  for (var i = array.length; i >=0; i--){
    if(value === array[i]){
      answer = i;
      match = true;
      break;
    }
  }
  if (match){
    return answer
  }
  else{
    return -1
  }
}

//testers
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);