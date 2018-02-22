                            // ES5

// declara la variable
function computeSumOfAllElements(arr) {
  if (arr.length > 0) {
    return arr.reduce(function (a, b, c){
      return a + b / c;
    });
  }else {
    return 0;
  }
}

var output = computeSumOfAllElements([10, 20, 30, 20, 30, 40, 60]);
console.log(output);

// --> 6

// escribe tu funcion

let computeSumOfAllElements = arr =>{
    if (arr.length > 0) {
    arr.reduce(function (a, b, c){
    return (a + b )/ c;
  });
    }else {
  return 0;
 }
}
var output = computeSumOfAllElements([10, 20, 30, 20, 30, 40, 60]);
console.log(output);






















                              //ES6
// Comenta todo lo anterior y escribelo en ES6


// declara la variable


// escribe tu funcion
