// Create a function that returns an array of strings 
// sorted by length in ascending order.

//all string lengths in an array will be different (dont worry about two of the same length)

const sortByLength = function(arr) {
  
  let strCountArr = [];
  let sortedArr = [];

  arr.forEach(elem => {
    strCountArr.push(elem.length);
  });

  strCountArr.sort(function(a, b) {return a - b});
  

  for(i = 0; i < strCountArr.length; i++) {
    for(j =0; j < arr.length; j++) {
      if(arr[j].length === strCountArr[i]) {
        sortedArr.push(arr[j]);
        arr = arr.filter(elem => elem !== arr[j]);
      }
    }
  }
  return sortedArr;
}

console.log(sortByLength(["a", "ccc", "xx", "dddd", "bb"]));
//➞ ["a", "bb", "ccc", "dddd"]

console.log(sortByLength(["apple", "pie", "shortcake"]));
// //➞ ["pie", "apple", "shortcake"]

console.log(sortByLength(["may", "april", "september", "august"]));
// //➞ ["may", "april", "august", "september"]

console.log(sortByLength([]));
//➞ []