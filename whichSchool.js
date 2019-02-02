//if age is below 13, return Elementary School
//if age is between 13 and 18 (both inclusive) return Secondary School
//all other cases return Lighthouse Labs

function whichschool (age){
  if(age < 13){
    return "Elementary School";
  }
  else if (age >= 13 && age <= 18){
    return "Seconday School";
  }
  else {
    return "Lighthouse Labs";
  }
}

//condition testers
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));