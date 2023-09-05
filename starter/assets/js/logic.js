//
// QUESTION SETUP
let questionBank = [
  {
    // Setup objects for each of my questions. Containing the properties i require.
    question: "Question 1: Javascript is an ____ language?",
    // Setup a nested array inside the parent array containing the four options.
    options: [
      "A. Object-Orientated",
      "B. Object-Based",
      "C. Procedural",
      "D. None of the above",
    ],
    answer: "A",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in javascript?",
    options: ["A. var", "B. let", "C. Both A and B", "D. None of the above"],
    answer: "C",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    options: [
      "A. getElementById()",
      "B. getElementsByClassName()",
      "C. Both A and B",
      "D. None of the above",
    ],
    answer: "C",
  },
  {
    question: "How can a data type be declared to be a constant type?",
    options: ["A. const", "B. var", "C. let", "D. constant"],
    answer: "A",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    options: ["A. in", "B. is in", "C. exists", "D. lies"],
    answer: "A",
  },
  {
    question:
      "When an oprators value is NULL, the typeOf returned by the unary operator is:",
    options: ["A. Boolean", "B. Undefined", "C. Object", "D. Integer"],
    answer: "C",
  },
  {
    question: "What does the 'toLocateString()' method do in Javascript?",
    options: [
      "A. returns a localised object representation",
      "B. Returns a parsed string",
      "C. Returns a localised string representation of an object",
      "D. None of the above",
    ],
    answer: "C",
  },
];

// INITIALISE VARIABLES
//
// GENERAL VARIABLE SETUPS
let startButtonPress = document.querySelector("#start");
let timerCountdown = document.querySelector("#time");
let buttonChoice = document.getElementById("choice");
//
//
// GAME VARIABLE SETUPS
let timeValue = 60;
let questionNumber = 0;
let totalScore = 0;
let questionCount = 1;
let firstLetter;
let timeInterval;
//
//
// SECTION TOGGLE VARIABLES
let toggleStartScreen = document.getElementById("start-screen");
let toggleQuestions = document.getElementById("questions");
let toggleEndScreen = document.getElementById("end-screen");
let answerShow = document.getElementById("answer-title");
let gameOverScreen = document.getElementById("end-screen");
//
//
// QUESTION BUTTON SELECTOR VARIABLES
let quizQuestion = document.getElementById("question-title");
let answerBtn1 = document.querySelector(".select-a");
let answerBtn2 = document.querySelector(".select-b");
let answerBtn3 = document.querySelector(".select-c");
let answerBtn4 = document.querySelector(".select-d");
//
//
//
// A start button that when clicked starts a timer and shows the first question.
startButtonPress.addEventListener("click", function () {
  quizTimer();
  questionToggle();
  injectQuestions(questionNumber);
  answerSelect();
});
console.log("total score: " + totalScore);
// Need a function to toggle questions visible or not.
function questionToggle() {
  // Used a ternary statement here to toggle between states.
  toggleQuestions.style.display =
    toggleQuestions.style.display == "block" ? "none" : "block";
  toggleStartScreen.style.display =
    toggleStartScreen.style.display == "none" ? "block" : "none";
}

// Create a function for the countdown clock.
function quizTimer() {
  // Use the setInterval method to set the length of the game.
  timeInterval = setInterval(function () {
    if (timeValue >= 1) {
      timerCountdown.textContent = timeValue;
      timeValue--;
      console.log(timeValue);
    } else {
      // Once timer gets to zero, set timerValue to empty string.
      timerCountdown.textContent = "Times Up!";
      // Use clearInterval to stop timer.
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

// Function to produce the questions and answers.
function injectQuestions(n) {
  quizQuestion.textContent = questionBank[n].question;
  answerBtn1.textContent = questionBank[n].options[0];
  answerBtn2.textContent = questionBank[n].options[1];
  answerBtn3.textContent = questionBank[n].options[2];
  answerBtn4.textContent = questionBank[n].options[3];
  questionNumber = n;

  console.log("question no. = " + questionNumber);
}
//
//
// Question choice button press function containing conditional logic
function answerSelect() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", handleClick, false);
  });

  function handleClick() {
    // This.textContent uses the 'this' keyword to return the data in the array for that particular button press.
    let option = this.textContent;
    firstLetter = option.charAt(0);
    console.log(firstLetter);
    console.log(option);
    if (questionBank[questionNumber].answer === firstLetter) {
      answerShow.textContent = "Correct";
      totalScore++;
      console.log("total score = " + totalScore);
    } else {
      timeValue -= 10;
      answerShow.textContent = "Incorrect";
    }
    if (questionNumber < questionBank.length - 1) {
      questionNumber++;
      injectQuestions(questionNumber);
    } else {
      gameOver();
    }
  }
}
//
//

//
//

function gameOver() {
  if (timeValue === 0 || questionNumber === 6) {
    gameOverScreen.style.display =
      gameOverScreen.style.display == "block" ? "none" : "block";
    toggleQuestions.style.display =
      toggleQuestions.style.display == "none" ? "block" : "none";
    clearInterval(timeInterval);
    timerCountdown.textContent = "Times Up!";
  }
  console.log(typeof timeValue);
}
//
// Question contain buttons for each answer.
//

//
//
//
// When answer is clicked the next button appears.
//
//
//
//
// If the answer clicked was incorrect, subtract time from clock. (5 sec?)
//
//
//
//
//
// The quiz ends when the timer is zero or all questions are answered.
//
//
//
//
// When the game ends, display score and offer user to save initials and score.
