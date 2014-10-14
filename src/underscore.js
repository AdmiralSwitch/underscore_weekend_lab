var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    var anArray = [];
    if (n === undefined) {
      return array[0];
    } else if (n > array.length){
      return array;
    } else {
      for (var i = 0; i < n; i++) {
      anArray.push(array[i]);
      return anArray;
    }
  }
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    var anArray = [];
    var botts = array.length - 1;
    if(n === undefined){
      return array[botts];
    } else if (n === 0){
      return [];
    } else if (n > array.length){
      return array;
    } else {
      return array.splice(array.length-n,n);
    }
  },


  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var results = [];
    for (var i = 0; i < array.length; i++) {
      if(results.indexOf(array[i]) === -1){
        results.push(array[i]);
      }
    }
    return results;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    var results = [];
    for (var i = 0; i < array.length; i++) {
      results.push(array[i][key]);
    }
    return results;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    if(array.indexOf(target) !== -1){
      return true;
    } else {
      return false;
    }
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    var flatArr = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].constructor.name === "Array"){
        flatArr = flatArr.concat(flatten(array[i]));
      } else {
        flatArr.push(arr[i]);
      }
    }
    return flatArr;
});
module.exports = myFunctions;
