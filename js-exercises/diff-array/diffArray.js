function diffArray(array1, array2) {
  var difference = [];
  for (var i = 0; i < a1.length; i++) {
    if (array2.indexOf(a1[i]) === -1) {
      difference.push(a1[i]);
    }
  }
  for (i = 0; i < array2.length; i++) {
    if (array1.indexOf(array2[i]) === -1) {
      difference.push(array2[i]);
    }
  }
  return difference;
}



export {
 diffArray,
};
