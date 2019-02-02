//range should be an array of 2 numbers,
// representing start and end

//multiples should be an array of 2 numbers,
//represeting the multiples you want to replace with words

//words should be an array of 2 strings
//representing the words that will replace the multiples

function loopyLighthouse (range, multiples, words){
  let start = range[0];
  let end = range[1];
  let firstMultiple = multiples[0];
  let secondMultiple = multiples[1];
  let firstWordReplace = words[0];
  let secondWordReplace = words[1];

  for(var i = start; i <= end; i++){
    if( i % firstMultiple === 0 && i % secondMultiple === 0){
      console.log(firstWordReplace+secondWordReplace);
    }
    else if ( i % firstMultiple === 0){
      console.log(firstWordReplace);
    }
    else if ( i % secondMultiple ===0){
      console.log(secondWordReplace);
    }
    else{
      console.log(i);
    }
  }
}

//tester
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);