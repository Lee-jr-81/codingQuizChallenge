// PSEUDO COMMENTS FOR EACH STAGE
// Variable setups
let startButtonPress = document.querySelector("#start");
let timerCountdown = document.querySelector("#time");
//
//
//
//
// A start button that when clicked starts a timer and shows the first question.
startButtonPress.addEventListener("click", function (event) {
  quizTimer();
  questionToggle();
});

// Need a function to toggle questions visible or not.
function questionToggle() {
  let toggle = document.getElementById("questions");
  toggle.style.display = toggle.style.display == "block" ? "none" : "block";
}

// Create a function for the countdown clock.
function quizTimer() {
  let timeValue = 60;

  // Use the setInterval method to set the length of the game.
  let timeInterval = setInterval(function () {
    if (timeValue > 1) {
      timerCountdown.textContent = timeValue;
      timeValue--;
    } else {
      // Once timer gets to zero, set timerValue to empty string.
      timerCountdown.textContent = "0";
      // Use clearInterval to stop timer.
      clearInterval(timeInterval);
    }
  }, 1000);
}

//
//
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
