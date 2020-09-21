// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
let newArr = [];

const sortNumsAscending = function(arr) {
    // return arr.sort(function(a, b) {return a - b});
    let max = -Infinity;

    if (Array.isArray(arr)) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] >= max) {
                max = arr[i];
            }
        }
        newArr.push(max);

    arr = arr.filter(elem => elem !== max);
    }

    if (!(Array.isArray(arr))) {
        return [];
    } else if (arr.length > 0) {
        sortNumsAscending(arr);
    } else {
        return [];
    }

    function reverseArray(arr) {
        var newArray = [];
        for (var i = arr.length - 1; i >= 0; i--) {
          newArray.push(arr[i]);
        }
        return newArray;
      }

    return reverseArray(newArr);
}

console.log(sortNumsAscending([1, 2, 10, 50, 5]));
//➞ [1, 2, 5, 10, 50]

console.log(sortNumsAscending([80, -1, 29, 4, -95, 85,]));
//➞ [-95, -24, 4, 29, 80, 85]

console.log(sortNumsAscending(null));
//➞ []

console.log(sortNumsAscending([]));
//➞ []
