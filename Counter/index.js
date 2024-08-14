// Represent the buttons and giant number in code below
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0; // The number on-screen

increaseBtn.onclick = function() {
	count++; // Increase counter by 1
	countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
	count--; // Decrease counter by 1
	countLabel.textContent = count;
}

resetBtn.onclick = function() {
	count = 0; // Reset counter back to 0
	countLabel.textContent = count;
}