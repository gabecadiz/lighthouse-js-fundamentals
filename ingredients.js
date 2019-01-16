var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var iList = 0
while (iList < ingredients.length) {
  console.log(ingredients[iList]);
  iList++
}

// Write a for loop that prints out the contents of ingredients:
for (list = 0; list < ingredients.length; list++){
  console.log(ingredients[list]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (list2 = (ingredients.length - 1); list2 >= 0; list2--){
  console.log(ingredients[list2]);
}