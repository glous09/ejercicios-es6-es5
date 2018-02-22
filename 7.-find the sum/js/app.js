                // ES5

// Escribe tu código aquí....

function findPairForSum(arr, sum) {

  var pair = [];

  arr.forEach(function(num, index) {
    for(var i = arr.length - 1; i > index; i--) {
      if (num + arr[i] === sum) {
        pair.push(num, arr[i]);
      }
    }
  });

  return pair;
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]


                    // ES6

// Ahora comenta todo el código anterior y pasalo a ES6

const findPairForSum = (arr, sum) => {
  for (let v of pair){
    v = sum === 9;
    console.log(value);
  }

}


var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
