function rollDice() {
	const numOfDice = document.getElementById("numOfDice").value;
	const diceResult = document.getElementById("diceResult");
	const diceImages = document.getElementById("diceImages");
	const values = []; // Stores all dice rolls
	const images = []; // For the dice images


	for (let i = 0; i < numOfDice; i++) {
		const value = Math.floor(Math.random() * 6) + 1; // 1 to 6
		values.push(value); // Add dice roll value to values array
		images.push(`<img src="Dice_Images/${value}.png" alt="Dice ${value}">`); // Add dice images to array
	}

	diceResult.textContent = `Dice: ${values.join(', ')}`; // Put all dice number on-screen
	diceImages.innerHTML = images.join(''); // Put all dice images on-screen
}