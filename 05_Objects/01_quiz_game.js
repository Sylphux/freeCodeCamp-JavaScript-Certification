let questions = [
  {
    category: "Stupid",
    question: "Are you deaf?",
    choices: ["yes", "no", "maybe"],
    answer: "yes",
  },
  {
    category: "Stupid",
    question: "Are you no nice?",
    choices: ["yes", "no", "maybe"],
    answer: "yes",
  },
  {
    category: "Smart",
    question: "What is 2+2?",
    choices: ["1", "2", "4"],
    answer: "4",
  },
  {
    category: "Smart",
    question: "What is a sheep?",
    choices: ["Animal", "Plant", "Rock"],
    answer: "Animal",
  },
  {
    category: "Smart",
    question: "Where do ants live?",
    choices: ["Earth", "Mars", "Binary"],
    answer: "Earth",
  }
];

function getRandomQuestion(arr){
  return arr[Math.floor(Math.random() * (arr.length))]
}

// console.log(getRandomQuestion(questions))

function getRandomComputerChoice(arr){
  return arr[Math.floor(Math.random() * (arr.length))]
}

function getResults(q, choice){
  if (choice == q.answer){
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${q.answer}`
  }
}