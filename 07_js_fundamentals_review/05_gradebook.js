function getAverage(arr) {
  let total = 0;
  for (let i of arr) {
    total += i;
  }
  return total / arr.length;
}

function getGrade(score) {
  if (score == 100) {
    return "A+";
  } else if (score < 100 && score >= 90) {
    return "A";
  } else if (score < 90 && score >= 80) {
    return "B";
  } else if (score < 80 && score >= 70) {
    return "C";
  } else if (score < 70 && score >= 60) {
    return "D";
  } else if (score < 60) {
    return "F";
  }
}

function hasPassingGrade(score) {
  if (getGrade(score) != "F") {
    return true;
  } else {
    return false;
  }
}

function studentMsg(scoresArr, studentScore) {
  if (hasPassingGrade(studentScore)) {
    return `Class average: ${getAverage(scoresArr)}. Your grade: ${getGrade(studentScore)}. You passed the course.`; //passed
  } else {
    return `Class average: ${getAverage(scoresArr)}. Your grade: ${getGrade(studentScore)}. You failed the course.`; //failed
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
