//3 functions to calculate areas of 3 different shapes, rectangles, triangles and circles
//if any parameters are negative, return undefined


//rectange: length x width
function calculateRectangleArea(length,width){
  if (length < 0 || width < 0){
    return undefined;
  }
  else {
  let area = length * width;
  return area;
  }
}

//triangle: base * height /2
function calculateTriangleArea(base,height){
  if (base < 0 || height < 0){
    return undefined
  }
  else {
    let area = base * height / 2;
    return area;
  }
}

//circle : pi * radius^2
function calculateCircleArea(radius){
  if (radius < 0){
    return undefined
  }
  else {
    let area = Math.PI * (radius * radius);
    return area;
  }
}

//condition testers
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined