// Function expression
const calculateArea = function(width, height) {
    return width * height;
  };
  const area = calculateArea(5, 10);
console.log(area); 

// Arrow function
const calculateAreaArrow = (width, height) => width * height;
const areaArrow = calculateAreaArrow(5, 10);
console.log(areaArrow);