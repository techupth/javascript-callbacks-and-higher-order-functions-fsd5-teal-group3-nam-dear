//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here

  return operation(array);
}
function callBack(array1) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 70) {
      count = count + 1;
    }
  }
  if (count >= 5) {
    return true;
  } else return false;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

console.log(atLeastFive(studentScoresRoom1, callBack));
