function findFirstDuplicate(arr) {
  let uniqueValues = []
  for (i = 0; i < arr.length; i++) {
    if (uniqueValues.includes(arr[i])) {
      return arr[i]
    }
    uniqueValues.push(arr[i])
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([2, 1, 3, 2, 3]));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution


