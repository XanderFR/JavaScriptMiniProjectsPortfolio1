const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // Minimum number added to a difference

let attempts = 0;
let guess;
let running = true;

while (running) {
	guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
	guess = Number(guess); // Turn text to number

	if (isNaN(guess)) { // Check for letters and non-numbers
		window.alert("Please enter a valid number");
	}
	else if (guess < minNum || guess > maxNum) { // Check if input is outside number range

	}
	else { // Valid number guesses
		attempts++;
		if (guess < answer) {
			window.alert("TOO LOW! TRY AGAIN!");
		}
		else if (guess > answer) {
			window.alert("TOO HIGH! TRY AGAIN!");
		}
		else {
			window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`); // Congratulate user
			running = false; // Break the loop
		}
	}
}