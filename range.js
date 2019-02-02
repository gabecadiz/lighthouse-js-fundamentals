//LHL Looping Range Assignment

function range (start, end, step){
  array = []
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0){
    return array;
  }
  else{
    for (var i = start; i <= end; i += step){
      array.push(i);
    }
  }
  return array;
}

//function should return an array of numbers
//from start to end, counting by step

//the function should return an empty if given incorrect parameters
//start, end, or step being undefined
//step being greater than end
// step being negative

//testers
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));