//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // เอาไว้เช็คจำนวน [i] ที่มีคะแนนมากกว่า 5 จะเป็น true / operation = callbackเรียก arrayที่มีค่ามากกว่า 70
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i]) === true) {
      count = count + 1;
    }
  }
  return count >= 5;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67]; // [90,80,100,86,99]
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100]; // [78,98,80,100]
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67]; // [80,100,80,100]

// Using `atLeastFive` function here

function checkScore(scoreArray) {
  if (scoreArray > 70) {
    return true;
  } else {
    return false;
  }
  /*let count = [];
  for (let i = 0; i < scoreArray.length; i++) {
    if (scoreArray[i] > 70) {
      count.push(scoreArray[i]);
    }
  }
  console.log(count);*/
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScore); // true
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScore); // false
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScore); // false

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
