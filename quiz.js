// Step 1: Define the checkAnswer Function
function checkAnswer() {
    // Step 2: Declre the correct answer
    let correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Check if an answer was selected
    if (!userAnswer) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }


    // Step 5: Compare the selected answer with the correct answer
    userAnswer = userAnswer.value;
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 6: Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

