function mutation(arr) {
  var lowercaseArrOne = arr[0].toLowerCase();
  var lowercaseArrTwo = arr[1].toLowerCase();
  // console.log(lowercaseArrOne);
  // console.log(lowercaseArrTwo);
  for (var i=0;  i < lowercaseArrTwo.length; i++) {
    if (lowercaseArrOne.indexOf(lowercaseArrTwo[i]) != -1 )
      return true;
    }
  return false;
}

console.log(mutation(["hello", "hey"]));
