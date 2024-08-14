//Gather the parts of the web app, declare variables
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() { // Temperature conversion math function
	if (toFahrenheit.checked) {
		temp = Number(textBox.value); // Text to number
		temp = temp * 9 / 5 + 32; // Temparature conversion formula
		result.textContent = temp.toFixed(1) + "°F"
	}
	else if (toCelsius.checked) {
		temp = Number(textBox.value); // Text to number
		temp = (temp - 32) * (5 / 9); // Temparature conversion formula
		result.textContent = temp.toFixed(1) + "°C"
	}
	else {
		result.textContent = "Select a unit"; // Default display
	}
}