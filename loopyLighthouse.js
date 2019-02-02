// Write a program that prints the numbers 100 to 200 with three exceptions

//if number is a multiple of 3 print "Loopy" instead of the number

//if number is a multiple of 4 print "Lighthouse" instead of the number

//if the number is a multiple of both 3 and 4, print the string "LoopyLighthouse"

for (i = 100; i <= 200; i++){
  if (i % 3 === 0 && i % 4 === 0){
    console.log("LoopyLighthouse");
  }
  else if(i % 3 === 0){
    console.log("Loopy");
  }
  else if (i % 4 === 0){
    console.log("Lighthouse");
  }
  else {
  console.log(i);
  }
}